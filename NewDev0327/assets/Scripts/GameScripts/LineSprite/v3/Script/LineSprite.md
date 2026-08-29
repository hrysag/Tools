# SimpleLineSprite 技術文件

## 概述

`SimpleLineSprite` 是一個基於 Cocos Creator `Sprite` 的得分線渲染器。它將一組控制點（`posList`）展開成有寬度的線條 mesh，並支援三種 UV 貼圖模式、fill 動畫裁切、箭頭節點跟隨等功能。

核心設計理念是**預計算 + 弧長參數化**：幾何只在控制點或線寬改變時重建一次，fill 動畫時只做輕量的裁切和 UV 計算。

---

## 整體架構

```
posList / lineWidth 改變
        │
        ▼
  rebuildFullMesh()          ← 重量級，只在幾何改變時呼叫
  ├─ computeMiterJoin()      每個控制點算 top/bottom 延伸點
  ├─ 歸一化弧長 t ∈ [0,1]
  └─ fixSelfIntersection()   修正 top/bottom 折線自交
        │
        ▼
  updateClippedMesh()        ← 輕量級，fill 動畫每幀呼叫
  ├─ findSegmentByT()        二分搜尋邊界
  ├─ interpolateAtT()        插值邊界頂點
  ├─ insertSlicedBoundaries() (Sliced 模式)
  ├─ outputVertexBuffer()
  ├─ outputUVBuffer()
  ├─ outputIndexBuffer()
  └─ resetAssembler()        ← 只在頂點數改變時
```

---

## 資料流

### 1. 預計算頂點 (`PrecomputedVertex[]`)

每個控制點產生一組：

| 欄位     | 說明                            |
| -------- | ------------------------------- |
| `origin` | 控制點本身的位置                |
| `top`    | 向法線方向延伸 halfWidth 的點   |
| `bottom` | 向反法線方向延伸 halfWidth 的點 |
| `t`      | 歸一化弧長 ∈ [0, 1]             |

### 2. 可見頂點 (`VisibleVertex[]`)

由 `fillFirst` ~ `fillFinal` 裁切後的子集，加上邊界插值點。Sliced 模式會額外插入帶 `type = Head / Tail` 標記的頂點。

### 3. 輸出到 Assembler

| Buffer         | 佈局                                       |
| -------------- | ------------------------------------------ |
| `_vertexData`  | `[bottom₀, bottom₁, ..., top₀, top₁, ...]` |
| `_indexBuffer` | quad strip 的三角形索引                    |
| `_uvData`      | 與 `_vertexData` 對應的 U 座標             |

Assembler 讀取這些 buffer，結合 spriteFrame 的 V 座標和世界矩陣，寫入 GPU 的頂點緩衝區。

---

## 核心演算法

### Miter Join

對每個控制點，根據前後兩段線的方向算出角平分線方向（miter），延伸 `halfWidth / cos(θ)` 得到 top/bottom。

有兩個保護：

- **180° 折返**：角平分線不存在，退回用單段法線
- **Miter Limit**：銳角時 miter 長度會暴增，用 `MITER_LIMIT` (預設 4.0) 夾緊

### 弧長參數化

每個控制點的 `t` 值 = 從起點到該點的累積弧長 / 總弧長。

好處：`t` 保證單調遞增，不像 X 座標會因為曲線方向而不單調。fill 動畫用 `t` 值做裁切，任何形狀的線都能正確處理。

### 自交修正

Miter join 在急彎處可能讓 top 或 bottom 折線自交。修正策略：

1. 對 top / bottom 分別做 O(n²) 的邊對交叉檢測
2. 找到跨度最大的交叉邊對 `(i, j)`
3. 將 `[i+1 .. j]` 的同側點全部收束到交叉點
4. 重複直到無自交

收束產生的退化三角形（面積 = 0）不會渲染出任何像素，UV 計算也能正確處理。

---

## UV 模式

### Simple

交替 0, 1。用於不需要連續貼圖的場景。

### Repeat

- **總跨度**：用中心線弧長算出 `totalU = 可見弧長 / 貼圖寬度`
- **各側分配**：top 和 bottom 各自用自己邊的累積距離推進 UV
- **歸一化**：各側獨立的累積距離歸一化到 `[0, totalU]` 範圍

效果：

- 起點兩側都是 0，終點兩側都是 totalU（不累積偏差）
- 中間依各自邊長比例推進（轉角處外側推得慢、內側推得快，保留合理的 UV 差異）

注意：貼圖本身的左右邊緣像素需要能無縫銜接（seamless tileable），否則接縫處會有可見斷裂。
CoCos註明需2次幕才能在網頁顯示

### Sliced (九宮格)

`insertSlicedBoundaries` 根據 spriteFrame 的 `insetLeft` / `insetRight` 算出 Head / Tail 邊界的 `t` 值，插入帶標記的頂點。

UV 分三段：

- `[0, headIdx]`：映射到 `[0, headU]`（貼圖頭部）
- `[headIdx, tailIdx]`：映射到 `[headU, tailU]`（貼圖身體，可拉伸）
- `[tailIdx, end]`：映射到 `[tailU, 1]`（貼圖尾部）

長度不足時（可見弧長 < head + tail），在中點插入 Head/Tail 分割。

---

## Fill 動畫

`fillFirst` 和 `fillFinal` 控制可見範圍 ∈ [0, 1]，對應弧長的起止百分比。

改變 fill 值時只呼叫 `updateClippedMesh()`，做的事：

1. **二分搜尋** `findSegmentByT` 找到邊界所在線段
2. **插值** `interpolateAtT` 算出邊界的 origin / top / bottom
3. **複製中間頂點**（直接引用預計算資料）
4. **輸出 buffer** 和 **UV**
5. **只在頂點數改變時**才 `resetAssembler`（避免每幀重建 RenderData）

---

## 箭頭節點

`arrowHeadNode` / `arrowTailNode` 會自動跟隨線條的頭/尾端點位置和朝向。角度由最後兩個（或最前兩個）可見頂點的 origin 方向決定，可透過 `arrowHeadAngle` / `arrowTailAngle` 做偏移校正。

---

## 效能考量

| 方面           | 策略                                             |
| -------------- | ------------------------------------------------ |
| 幾何重建       | 只在 `posList` / `lineWidth` 改變時執行          |
| 自交修正       | 只在幾何重建時做一次                             |
| Fill 動畫      | 只做裁切 + UV + buffer 複製                      |
| Assembler 重建 | 只在頂點數改變時                                 |
| 陣列分配       | 預分配固定大小的 `new Array(count)` 避免動態擴容 |
| Index buffer   | 頂點數不變則跳過重算                             |
| Additive UV    | 只在 `_isAdditive` 開啟時計算                    |

---

## 刷光 (Additive UV)

開啟 `isAdditive` 後，額外計算第二組 UV (`ATTR_TEX_COORD2`)：

- U = 歸一化 X 位置
- V = 0 (bottom) / 1 (top)

配合特殊 shader 實現光帶掃過效果。需要 `requestRenderData` 使用自訂 `VERTEX_FORMAT`（包含 `ATTR_TEX_COORD2`）。
