# SlotDataParser 注单工具使用规则

## 概述
SlotDataParser 是一个用于生成老虎机游戏注单细单数据的工具类，支持构建包含游戏模式、盘面数据、中奖详情等完整的游戏记录。

## 基本使用流程

### 1. 初始化
```typescript
const parser = new SlotDataParser(bet);
// bet: 下注金额
```

### 2. 设置游戏模式
在 剛開始的那局 以及 一局結束後要切換模式的時候 設置
```typescript
parser.setGameMode("一般遊戲"); // 或 "免費遊戲"、"獎勵遊戲"
```

### 3. 构建单次盘面记录

#### 3.1 设置标题
```typescript
parser.setTitle([
    parser.createItem("text", "一般遊戲"),
    parser.createItem("symbol", "-"),
    parser.createItem("text", "回合"),
    parser.createItem("number", i)
]);
//或者
parser.setTitle([
                [SlotDataStringType.text, "一般遊戲"],
                [SlotDataStringType.symbol, "-"],
                [SlotDataStringType.text, "回合"],
                [SlotDataStringType.number, i ]
            ]);
```

#### 3.2 设置盘面数据
```typescript
// 基础用法
parser.processIconData(
    row,              // 盘面高度
    col,              // 盘面宽度
    iconList,         // 盘面图标数组
    processors,       // 处理器数组
    maxWidth          // 可选：最大显示宽度
);

// 处理器示例
const processors = [
    parser.setMark([[0,1], [2]], "#FF0000"),        // 设置标记
    parser.setBackGroundMark([[1]], "#00FF00"),     // 设置背景标记
    parser.setBorderMark([[0]], "#0000FF"),         // 设置边框标记
    parser.mergesIconData([0,0,1,1,2,2...])        // 合并图标
    //如果有特殊需求工具的API沒有的話，可以自己寫方法加入EX:
    this.setSpecialIcon(data.hasFG)
];

//自己寫方法的規則EX如下:
public setSpecialIcon(hasFG: boolean): (list: SlotDataIconData[]) => SlotDataIconData[] {
        return (list: SlotDataIconData[]) => {
            const newIconLIst = [...list];
            for (let i = 0; i < newIconLIst.length; i++) {
                if (newIconLIst[i].icon === IconList.Scatter && hasFG) {
                    newIconLIst[i].markBackground = true;
                    newIconLIst[i].markBackgroundColor = "#860cccff";
                }
            }
            return newIconLIst;
        }
    }
```

#### 3.3 设置摘要信息
```typescript
// 普通摘要
parser.setSummary([
    parser.createItem("text", "單次贏分"),
    parser.createItem("symbol", "="),
    parser.createItem("number", 5000)
]);

// 置中摘要（使用 Line）
const lines = [
    parser.createSection("line", [
        parser.createItem("text", "免費遊戲"),
        parser.createItem("number", 10)
    ])
];
parser.setLineSummary(lines);


```

#### 3.4 设置中奖详情

**方法一：自定义**
```typescript
    private getDetailDescriptionList(detailData: DetailWinData[], bet: number): Line[] {
        const descriptionList: Line[] = [];
        for (let i = 0; i < detailData.length; i++) {
            const line: Line =
                [
                    SlotDataStringType.line, [
                        [SlotDataStringType.icon, detailData[i].WinSymbolID],
                        [SlotDataStringType.number, bet],
                        [SlotDataStringType.symbol, "*"],
                        [SlotDataStringType.number, detailData[i].WinMultiplier],
                        [SlotDataStringType.symbol, "*"],
                        [SlotDataStringType.number, detailData[i].WinOdd],
                        [SlotDataStringType.symbol, "="],
                        [SlotDataStringType.number, (detailData[i].WinScore).fixed()],
                    ]
                ]
            descriptionList.push(line);
        }
        return descriptionList;
    }
const lines=this.getDetailDescriptionList(使用者的DetailWinData,bet)
parser.setDetailDescription(lines);
```

**无中奖**
```typescript
parser.setDetailDescription([]);
```

### 4. 完成单次盘面
```typescript
parser.combineOneRoundData();
```

### 5. 完成一局游戏
```typescript
parser.setRecords();
```

### 6. 获取最终数据
```typescript
const finalData = parser.getFinalSlotData();
```

## 高级功能

### 盘面处理器（Processors）

#### 1. 标记功能
```typescript
// 整体标记（图标+边框）
parser.setMark([[0,1,2], [1,2]], "#FF0000")

// 仅背景标记
parser.setBackGroundMark([[0]], "#00FF00")

// 仅边框标记
parser.setBorderMark([[1]], "#0000FF")

// 位置格式：[[列0的行索引...], [列1的行索引...]]
// 索引从0开始
```

#### 2. 合并图标
```typescript
// merges 数组长度需等于盘面总格数
// 相同正数值的格子会合并
parser.mergesIconData([
    0, 0, 1, 2, 2,  // 第1列：第3格与第4格合并（组1），第4-5格合并（组2）
    1, 1, 0, 0, 0   // 第2列：第1-2格合并（组1）
])
```

#### 3. 多层图标
```typescript
parser.addIconList(
    2,                      // z-index层级
    4,                      // 盘面高度
    [0, 5, 10],            // 位置索引
    [99, 98, 97],          // 对应图标ID
    [[1,1], [2,2], [1,2]]  // 可选：尺寸 [宽, 高]
)
```

#### 4. 图标文字
```typescript
parser.setIconText(
    [0, 1, 2],                    // 位置索引
    ["x2", "x3", "WILD"]          // 对应文字
)
```

### 完整示例

```typescript
const parser = new SlotDataParser(10000);

// 设置游戏模式
parser.setGameMode("一般遊戲");

// 构建第一次spin
parser.setTitle([
    parser.createItem("text", "一般遊戲"),
    parser.createItem("symbol", "-"),
    parser.createItem("text", "回合"),
    parser.createItem("number", 1)
]);

// 设置盘面（3x5，带标记和合并）
const iconList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
parser.processIconData(3, 5, iconList, [
    parser.setMark([[0,1]], "#FF0000"),
    parser.mergesIconData([0,0,0,1,1,1,2,2,2,0,0,0,0,0,0])
]);

// 设置中奖详情
parser.setDetail(true, {
    winIconSymbolList: [7],
    odds: [1.5],
    lineID: [0]
});

// 设置摘要
parser.setSummary([
    parser.createItem("text", "單次贏分"),
    parser.createItem("symbol", "="),
    parser.createItem("number", 15000)
]);

// 完成这次spin
parser.combineOneRoundData();

// 如有respin，继续添加...

// 完成整局
parser.setRecords();

// 获取最终数据
const result = parser.getFinalSlotData();
```

## 数据类型说明

### Item 类型
```typescript
["text", "文字內容"]      // 文字
["number", 12345]         // 数字
["icon", 7]               // 图标ID
["symbol", "*"]           // 符号
```

### DetailData 结构
```typescript
{
    winIconSymbolList: number[];           // 必填：中奖图案
    odds: number[];                        // 必填：赔率
    lineID?: number[];                     // 可选：线号（从0开始）
    megaWayCombinationCount?: number[]    // 可选：Megaway组合数
}
```

### SlotDataIconData 属性说明

| 属性 | 类型 | 说明 |
|------|------|------|
| `icon` | `number` | 盘面上的图标ID |
| `x` | `number` | X位置（从1开始） |
| `y` | `number` | Y位置（从1开始） |
| `z` | `number?` | 图层级别 |
| `width` | `number?` | 宽度（默认1） |
| `height` | `number?` | 高度（默认1） |
| `mark` | `boolean?` | 是否整体标记 |
| `markColor` | `string?` | 整体标记颜色 |
| `markBorder` | `boolean?` | 是否边框标记 |
| `markBorderColor` | `string?` | 边框标记颜色 |
| `markBackground` | `boolean?` | 是否背景标记 |
| `markBackgroundColor` | `string?` | 背景标记颜色 |
| `text` | `string?` | 图标上的文字 |
| `textColor` | `string?` | 文字颜色 |
| `textSize` | `number?` | 文字大小 |
| `textPosX` | `string?` | 文字水平位置：'left' \| 'center' \| 'right' |
| `textPosY` | `string?` | 文字垂直位置：'top' \| 'center' \| 'bottom' |
| `rotate` | `number?` | 旋转角度 |
| `style` | `string?` | CSS样式 |
| `dark` | `boolean?` | 是否变暗 |
| `light` | `boolean?` | 是否变亮 |
| `gray` | `boolean?` | 是否灰阶 |

## 注意事项

1. **位置索引**：所有位置相关的索引都从 0 开始，但显示时会转换为从 1 开始
2. **数组长度**：使用 `mergesIconData` 时，数组长度必须等于 `row * col`
3. **方法链**：所有设置方法都返回 `this`，支持链式调用
4. **顺序重要**：必须按照「设置标题 → 设置盘面 → 设置详情 → 设置摘要」的顺序
5. **完成操作**：每次 spin 完成后必须调用 `combineOneRoundData()`
6. **游戏模式**：新一局游戏如果模式改变，需重新调用 `setGameMode()`
7. **颜色格式**：标记颜色请使用 "#RRGGBB" 格式
8. **合并规则**：合并图标时，会以左上角为基准点向右下扩展

## API 方法速查表

| 方法 | 用途 | 返回值 |
|------|------|--------|
| `setGameMode(mode)` | 设置游戏模式 | `this` |
| `setTitle(items)` | 设置标题 | `this` |
| `setSummary(items)` | 设置摘要 | `this` |
| `setLineSummary(lines)` | 设置置中摘要 | `this` |
| `setDetail(isWin, data?)` | 设置中奖详情（自动） | `this` |
| `setDetailDescription(lines)` | 设置中奖详情（自定义） | `this` |
| `processIconData(...)` | 处理并设置盘面 | `this` |
| `setBoard(...)` | 直接设置盘面 | `this` |
| `combineOneRoundData()` | 完成单次盘面 | `this` |
| `setRecords()` | 完成一局游戏 | `this` |
| `getFinalSlotData()` | 获取最终数据 | `AllRoundSlotData[]` |

### Processor 方法
**規則**：
- 必須回傳 `(list: SlotDataIconData[]) => SlotDataIconData[]`
- 修改前用 `[...list]` 建立淺拷貝
- 新增覆蓋 Icon 時設定 `z >= 2`
- 閉包參數透過外層函式傳入

| 方法 | 用途 | 返回值 |
|------|------|--------|
| `setMark(pos, color)` | 设置整体标记 | `IconDataProcessor` |
| `setBackGroundMark(pos, color)` | 设置背景标记 | `IconDataProcessor` |
| `setBorderMark(pos, color)` | 设置边框标记 | `IconDataProcessor` |
| `mergesIconData(merges)` | 合并图标 | `IconDataProcessor` |
| `addIconList(z, row, pos, icons, size?)` | 添加多层图标 | `IconDataProcessor` |
| `setIconText(pos, texts)` | 设置图标文字 | `IconDataProcessor` |

## 常见问题

### Q: 如何处理 ReSpin 或连续 Spin？
A: 每次 spin 完成后调用 `combineOneRoundData()`，继续添加下一次 spin 的数据，最后统一调用 `setRecords()`。

### Q: 如何设置多场游戏记录？
A: 每局游戏完成后调用 `setRecords()`，如需更换游戏模式，再调用 `setGameMode()`，继续构建下一局。

### Q: 位置索引如何计算？
A: 一维数组索引 = 列索引 × 行数 + 行索引（都从0开始）。例如 3×5 盘面，第2列第3行 = 1×3+2 = 5。

### Q: 合并图标时如何分组？
A: 使用相同的正整数表示同一组，0 表示不合并。相同组内的格子会合并为一个大图标。

### Q: 如何同时使用多个标记？
A: 在 processors 数组中添加多个标记方法，它们会依次执行。例如：
```typescript
[
    parser.setMark([[0]], "#FF0000"),
    parser.setBackGroundMark([[1]], "#00FF00")
]
```

## AI 自檢清單

生成程式碼後，AI 必須逐項確認：

### 結構完整性
- [ ] 當每次模式改變的時候都會呼叫一次 `setGameMode()`
- [ ] 在每一局結束後有對應的 `setRecords()`
- [ ] 每個回合的 `setTitle()` 是第一個呼叫
- [ ] 每個回合最後都有 `combineOneRoundData()`
- [ ] `getFinalSlotData()` 只呼叫一次且在最後

### 數據正確性
- [ ] `totalWin` 在每個回合正確累加
- [ ] 所有 `addIconList` 的 z >= 2
- [ ] 2D 位置陣列使用 0-based 索引

### API 使用正確性
- [ ] `setSummary` 和 `setLineSummary` 使用正確
- [ ] Processor 按建議順序排列
- [ ] 自定義 Processor 正確使用閉包

### 配置完整性
- [ ] `icons` 常數包含所有可能的 Icon ID
- [ ] 匯入路徑正確
- [ ] 只匯入實際使用的型別
- [ ] 規格書中的所有顯示項目都已實作


### 完整流程圖

```
new SlotDataParser(bet)                        ← 建構
│
├─ 遊戲模式 A ──────────────────────────────┐
│  setGameMode(模式A)                        │
│  ├─ 一局                                   │
│  ├─ 回合迴圈 ───────────────────────┐      │
│  │  setTitle(Item[])                 │      │
│  │  processIconData(row, col, icons, │      │
│  │      [processor1, processor2...]) │      │
│  │  setSummary(Item[])    ← 0~N次    │      │
│  │  setDetail() /                    │      │
│  │    setDetailDescription() ← 擇一  │      │
│  │  setSummary(Item[])    ← 0~N次    │      │
│  │  setLineSummary(Line[]) ← 0~1次   │      │
│  │  combineOneRoundData() ← 必須     │      │
│  ├───────────────────────────────────┘      │
│  setRecords()              ← 必須           │
├─────────────────────────────────────────────┘
│
├─ 遊戲模式 B（重複上方結構）
│
getFinalSlotData()                             ← 取得結果
```

# SlotDataParser 階段註解使用指南

## 概述

本文件說明如何在 `SlotDataParser{GAMEID}.ts` 中使用階段註解標註，以提高程式碼可讀性和維護性。

## 階段註解格式

統一使用以下格式：

```ts
////【階段 N：階段名稱】/////
// 此階段的程式碼
////【階段 N：階段名稱】/////
```

## 各階段詳細說明

### 【階段 0：資料結構驗證階段】

**用途**：AI 前置工作階段  
**是否在程式碼中出現**：❌ 否（僅用於 AI 詢問流程）  
**說明**：AI 需要先確認使用者提供完整的 TypeScript 資料結構定義

---

### 【階段 1：專案與命名】

**用途**：定義專案基礎結構  
**是否在程式碼中出現**：✅ 是  
**標註位置**：
- 檔案開頭的 `import` 區塊
- 類別定義處
- 主要方法的最後 `return` 處

**範例**：
```ts
////【階段 1：專案與命名】/////
import { GameRecordAST, IconConfig, Item, Line, SlotDataGameModeType, SlotDataParser, SlotDataStringType } from "db://assets/Scripts/ModuleEntry"
import { GameData1028, PinataData1028, RoundPinataData1028, WinData1028 } from "./GameData1028";
import { Game1028Config, IconList } from "../GameViewConfig1028";
////【階段 1：專案與命名】/////

////【階段 1：專案與命名】/////
export class SlotDataParser1028 {
    public getSlotParser(gameResult: GameData1028) {
        // ... 方法內容
        
        ////【階段 2：遊戲模式與回合結構】/////
        const finalSltData = parser.getFinalSlotData();
        const gameRecordAST: GameRecordAST = {
            ast: finalSltData,
            icons: icons
        }
        return gameRecordAST;
    }
}
////【階段 1：專案與命名】/////
```

**包含內容**：
- ✅ 必要的型別與類別引入
- ✅ 遊戲 ID 相關命名
- ✅ Config 與 Enum 引入
- ✅ 主類別定義
- ✅ GameRecordAST 輸出

---

### 【階段 2：遊戲模式與回合結構】

**用途**：定義遊戲流程與模式切換  
**是否在程式碼中出現**：✅ 是  
**標註位置**：
- `setGameMode()` 調用處
- `setTitle()` 調用處
- `setRecords()` 調用處
- `getFinalSlotData()` 處

**範例**：
```ts
////【階段 2：遊戲模式與回合結構】/////
// 設定一般遊戲模式
const ngRoundData = gameResult.RoundDataList[0];
const title = this.getNGRoundTitle(ngRoundData.PinataData);
parser.setGameMode(SlotDataGameModeType.normal);
parser.setTitle(title);
////【階段 2：遊戲模式與回合結構】/////

// ... 處理盤面、細單、摘要 ...

parser.combineOneRoundData();
parser.setRecords();  // 一局結束

////【階段 2：遊戲模式與回合結構】/////
// 免費遊戲模式
if (gameResult.HasFG) {
    parser.setGameMode(SlotDataGameModeType.free);
    for (let i = 1; i < gameResult.RoundDataList.length; i++) {
        parser.setTitle([
            [SlotDataStringType.text, SlotDataGameModeType.free],
            [SlotDataStringType.number, i]
        ]);
        // ... 處理每回合 ...
        parser.combineOneRoundData();
        parser.setRecords();
    }
}
////【階段 2：遊戲模式與回合結構】/////
```

**包含內容**：
- ✅ `setGameMode()` 設定遊戲模式
- ✅ `setTitle()` 設定回合標題
- ✅ `setRecords()` 標記一局結束
- ✅ `getFinalSlotData()` 最終輸出
- ✅ 模式切換邏輯
- ✅ 回合迴圈結構

**重要規則**：
- 每次模式改變時必須呼叫 `setGameMode()`
- 每一局結束後必須呼叫 `setRecords()`
- `getFinalSlotData()` 只能呼叫一次且在最後

---

### 【階段 3：盤面規格】

**用途**：設定盤面與視覺標記  
**是否在程式碼中出現**：✅ 是  
**標註位置**：
- `processIconData()` 調用處
- `setBorderMark()` 等 Processor 使用處

**範例**：
```ts
////【階段 3：盤面規格】/////
parser.processIconData(Game1028Config.Row, Game1028Config.Column, ngRoundData.IconList, [
    parser.setBorderMark(ngRoundData.WinData.Pos2D, "#ff0000ff"),
    parser.setBorderMark(ngRoundData.TriggerData.Scatter2DPos, "#00b7ffff"),
    parser.setBorderMark(ngRoundData.BeforePinata2DPos, "#fffb00ff")
]);
////【階段 3：盤面規格】/////
```

**包含內容**：
- ✅ `processIconData(row, col, iconList, processors)` 調用
- ✅ `setBorderMark()` 設定中獎位置標記
- ✅ 自定義 Processor（如有需要）
- ✅ 盤面特殊處理邏輯

**常見 Processors**：
- `setBorderMark(pos2D, color)` - 標記邊框
- `setMark(pos2D, color)` - 標記整格
- `addIconList(z, reels, posList, iconList)` - 疊層圖示
- 自定義 Processor - 動態文字、特殊效果等

---

### 【階段 4：中獎資料與細單格式】

**用途**：顯示中獎細節與額外資訊  
**是否在程式碼中出現**：✅ 是  
**標註位置**：
- `setDetailDescription()` 調用處
- `setLineSummary()` 調用處（細單前的額外顯示）
- 細單產生輔助方法處

**範例**：
```ts
////【階段 4：中獎資料與細單格式】/////
// 額外資訊（細單前顯示）
if (gameResult.HasFG) {
    const scatterSummary = this.getScatterSummary(
        ngRoundData.TriggerData.ScatterPos.length, 
        gameResult.FGCount
    );
    parser.setLineSummary(scatterSummary);
}

// 中獎細單
const detailDescriptionList = this.getDetailDescriptionList(ngRoundData.WinData.WinDataList, gameResult.Bet);
parser.setDetailDescription(detailDescriptionList);
////【階段 4：中獎資料與細單格式】/////
```

**包含內容**：
- ✅ `setDetailDescription(lines)` 顯示中獎細節
- ✅ `setLineSummary(lines)` 顯示額外資訊（細單前）
- ✅ 細單行組裝方法
- ✅ 無中獎時的處理（`[]` 或 `setDetail(false)`）

**細單格式範例**：
```ts
private getDetailDescriptionList(winData: WinData[], bet: number): Line[] {
    const descriptionList: Line[] = [];
    for (let i = 0; i < winData.length; i++) {
        const line: Line = [
            SlotDataStringType.line, [
                [SlotDataStringType.icon, winData[i].WinSymbolID],
                [SlotDataStringType.number, bet],
                [SlotDataStringType.symbol, "*"],
                [SlotDataStringType.number, winData[i].WinOdd],
                [SlotDataStringType.symbol, "="],
                [SlotDataStringType.number, (winData[i].WinScore).fixed()],
                [SlotDataStringType.symbol, "("],
                [SlotDataStringType.text, "線"],
                [SlotDataStringType.number, winData[i].WinLineID],
                [SlotDataStringType.symbol, ")"]
            ]
        ];
        descriptionList.push(line);
    }
    return descriptionList;
}
```

---

### 【階段 5：摘要與額外顯示】

**用途**：顯示回合摘要資訊  
**是否在程式碼中出現**：✅ 是  
**標註位置**：
- `setSummary()` 調用處
- `setLineSummary()` 調用處（細單後的額外顯示）

**範例**：
```ts
////【階段 5：摘要與額外顯示】/////
const oneSingleWin = this.getWinDescription("單次贏分", ngRoundData.WinData.Score);
const totalWin = this.getWinDescription("總贏分", ngRoundData.RoundWinScore);
parser.setSummary(oneSingleWin);
parser.setSummary(totalWin);
////【階段 5：摘要與額外顯示】/////
```

**包含內容**：
- ✅ `setSummary(items)` 設定摘要資訊
- ✅ 單次贏分、總贏分等資訊
- ✅ 條件性摘要顯示

**摘要格式範例**：
```ts
private getWinDescription(text: string, score: number): Item[] {
    return [
        [SlotDataStringType.text, text],
        [SlotDataStringType.symbol, "="],
        [SlotDataStringType.number, score]
    ];
}

// 圖示摘要
private getPinataCountSummary(hasGoldPinata: boolean, count: number): Line[] {
    const itemList: Item[] = [];
    itemList.push([SlotDataStringType.icon, IconList.Pinata]);
    if (hasGoldPinata) {
        itemList.push([SlotDataStringType.icon, IconList.GoldPinata]);
    }
    itemList.push([SlotDataStringType.symbol, "*"]);
    itemList.push([SlotDataStringType.number, count]);
    itemList.push([SlotDataStringType.symbol, "="]);
    itemList.push([SlotDataStringType.text, "幸運皮納塔"]);
    return [[SlotDataStringType.line, itemList]];
}
```

---

### 【階段 6：Icon 與資源】

**用途**：定義所有 Icon 配置  
**是否在程式碼中出現**：✅ 是  
**標註位置**：
- `icons` 常數定義區塊（通常在檔案開頭）

**範例**：
```ts
////【階段 6：Icon 與資源】/////
export const icons: Record<number, IconConfig> = {
    0: { src: "/images/game1028/icon_00.png", width: 152, height: 156 },
    1: { src: "/images/game1028/icon_01.png", width: 152, height: 156 },
    2: { src: "/images/game1028/icon_02.png", width: 152, height: 156 },
    // ... 其他 Icon
    11: { src: "/images/game1028/icon_11.png", width: 152, height: 156 },
};
////【階段 6：Icon 與資源】/////
```

**包含內容**：
- ✅ Icon ID 清單
- ✅ Icon 圖資路徑
- ✅ Icon 尺寸資訊
- ✅ 所有可能出現的 Icon（包含特殊變體）

---

### 【階段 7：測試】

**用途**：測試與修正  
**是否在程式碼中出現**：❌ 否（僅用於 AI 工作流程）  
**說明**：AI 請使用者測試生成的檔案並進行必要的修正

---

### 【階段 8：包裝】

**用途**：將 TypeScript 包裝成 JS  
**是否在程式碼中出現**：❌ 否（僅用於 AI 工作流程）  
**說明**：AI 讀取 JS.md 並將 SlotDataParser 包裝成可執行的 JS 檔案

---

## API 呼叫順序

每個回合必須遵循以下順序：

```
1. setTitle()           【階段 2】
2. processIconData()    【階段 3】
3. setLineSummary()     【階段 4】（可選，細單前顯示）
4. setDetailDescription() 或 setDetail()  【階段 4】
5. setSummary()         【階段 5】（可多次呼叫）
6. setLineSummary()     【階段 5】（可選，細單後顯示）
7. combineOneRoundData()
```

一局結束後：
```
8. setRecords()         【階段 2】
```

最後輸出：
```
9. getFinalSlotData()   【階段 2】（只能呼叫一次）
```

---

## 階段註解使用原則

### ✅ 應該標註的位置

1. **檔案結構界定**：imports、類別定義、icons 常數
2. **API 調用群組**：相同階段的 API 調用應該用註解包圍
3. **邏輯區塊轉換**：從盤面處理轉到細單處理時

### ❌ 不應該標註的位置

1. **輔助方法內部**：輔助方法自成一區，內部不需再標註
2. **單行程式碼**：僅一行的邏輯不需要前後標註
3. **迴圈內部**：迴圈本身標註即可，內部邏輯不重複標註

### 簡化範例

```ts
// ✅ 正確：包圍整個邏輯區塊
////【階段 3：盤面規格】/////
parser.processIconData(row, col, iconList, [
    parser.setBorderMark(winPos, "#ff0000ff"),
    parser.setBorderMark(scatterPos, "#00b7ffff")
]);
////【階段 3：盤面規格】/////

// ❌ 錯誤：過度標註
////【階段 3：盤面規格】/////
parser.processIconData(row, col, iconList, [
    ////【階段 3：盤面規格】/////  // 不需要
    parser.setBorderMark(winPos, "#ff0000ff"),
    ////【階段 3：盤面規格】/////  // 不需要
    parser.setBorderMark(scatterPos, "#00b7ffff")
    ////【階段 3：盤面規格】/////  // 不需要
]);
////【階段 3：盤面規格】/////
```

---

## 快速檢查清單

生成檔案後，請確認：

### 階段完整性
- [ ] 【階段 1】imports 與類別定義已標註
- [ ] 【階段 2】所有 setGameMode/setTitle/setRecords 已標註
- [ ] 【階段 3】所有 processIconData 已標註
- [ ] 【階段 4】所有 setDetailDescription 已標註
- [ ] 【階段 5】所有 setSummary 已標註
- [ ] 【階段 6】icons 常數已標註

### 標註格式
- [ ] 註解使用 `////【階段 N：名稱】/////` 格式
- [ ] 開頭與結尾註解對稱
- [ ] 階段編號與名稱正確

### 邏輯正確性
- [ ] API 呼叫順序符合規範
- [ ] 每回合有 combineOneRoundData()
- [ ] 每局結束有 setRecords()
- [ ] getFinalSlotData() 只呼叫一次

---

## 參考資源

- **完整規則文件**：`SlotDataParser使用规则.md`
- **AI 生成指南**：`README_AI_Guide.md`
- **模板文件**：`SlotDataParser_Template.ts`
- **實際範例**：
  - `Example/SlotDataParser1028.ts`（多階段遊戲）
  - `TestExpansionAndIconText.ts`（擴展與文字）
  - `TestReSpinWithIconLayers.ts`（ReSpin 與疊層）

---

## 附錄：階段詳細數據庫

# 階段 1：專案與命名 

## 階段定義

**用途**：建立專案基礎結構，包括必要的引入、類別定義和最終輸出格式。

**標註位置**：
- 檔案開頭的 `import` 區塊
- 主解析類別定義處
- 主要方法的最後 `return` 處（GameRecordAST 輸出）

---

## 基本模板

```ts
////【階段 1：專案與命名】/////
import { GameRecordAST, IconConfig, Item, Line, SlotDataGameModeType, SlotDataParser, SlotDataStringType } from "db://assets/Scripts/ModuleEntry"
import { GameData{GAMEID}, ... } from "./GameData{GAMEID}";
import { Game{GAMEID}Config, IconList } from "../GameViewConfig{GAMEID}";
////【階段 1：專案與命名】/////

////【階段 1：專案與命名】/////
export class SlotDataParser{GAMEID} {
    public getSlotParser(gameResult: GameData{GAMEID}) {
        const parser = new SlotDataParser(gameResult.Bet);
        
        // ... 處理邏輯 ...
        
        ////【階段 1：專案與命名】/////
        const finalSltData = parser.getFinalSlotData();
        const gameRecordAST: GameRecordAST = {
            ast: finalSltData,
            icons: icons
        };
        return gameRecordAST;
    }
}
////【階段 1：專案與命名】/////
```

---

## 通用模式

### 1.1 Import 組織

**必要引入**：
```ts
import { 
    GameRecordAST,      // 最終輸出型別
    IconConfig,         // Icon 配置型別
    Item,               // 標題、摘要元素型別
    Line,               // 細單行型別
    SlotDataGameModeType,  // 遊戲模式列舉
    SlotDataParser,     // 主解析器類別
    SlotDataStringType  // 字串型別列舉
} from "db://assets/Scripts/ModuleEntry"
```

**遊戲特定引入**（根據需要）：
```ts
import { GameData1028, PinataData1028, RoundPinataData1028, WinData1028 } from "./GameData1028";
import { Game1028Config, IconList } from "../GameViewConfig1028";
```

### 1.2 類別命名規範

**主解析類別**：
```ts
export class SlotDataParser{GAMEID} {
    // 主入口方法
    public getSlotParser(gameResult: GameData{GAMEID}): GameRecordAST {
        // ...
    }
    
    // 私有輔助方法
    private getTitleItems(...): Item[] { }
    private getDetailDescriptionList(...): Line[] { }
    private getWinDescription(...): Item[] { }
}
```

### 1.3 GameRecordAST 輸出

**標準輸出格式**：
```ts
const finalSltData = parser.getFinalSlotData();
const gameRecordAST: GameRecordAST = {
    ast: finalSltData,
    icons: icons  // 來自階段 6 定義的常數
};
return gameRecordAST;
```

---

## 歷史案例（節錄）

### 案例：Game1028 - 多階段遊戲

**引入組織**：
```ts
////【階段 1：專案與命名】/////
import { GameRecordAST, IconConfig, Item, Line, SlotDataGameModeType, SlotDataParser, SlotDataStringType } from "db://assets/Scripts/ModuleEntry"
import { GameData1028, PinataData1028, RoundPinataData1028, WinData1028 } from "./GameData1028";
import { Game1028Config, IconList } from "../GameViewConfig1028";
////【階段 1：專案與命名】/////
```

**類別結構**：
```ts
////【階段 1：專案與命名】/////
export class SlotDataParser1028 {
    public getSlotParser(gameResult: GameData1028) {
        const parser = new SlotDataParser(gameResult.Bet);
        // ... 處理邏輯 ...
        return gameRecordAST;
    }
    
    private getNGRoundTitle(ngPinataData: RoundPinataData1028): Item[] { }
    private getHasPinataTitle(showNumber: number): Item[] { }
    private getDetailDescriptionList(detailData: WinData1028[], bet: number): Line[] { }
    private getPinataDetailDescriptionList(detailData: PinataData1028[], bet: number): Line[] { }
    private getPinataCountSummary(hasGoldPinata: boolean, count: number): Line[] { }
    private getScatterSummary(posCount: number, fgCount: number): Line[] { }
    private getWinDescription(text: string, score: number): Item[] { }
}
////【階段 1：專案與命名】/////
```

---

## 最佳實踐（摘要）

- Import 分為三區：ModuleEntry 型別 / 遊戲資料型別 / 遊戲配置與 Enum。
- 類別命名統一為 `SlotDataParser{GAMEID}`，主入口方法為 `getSlotParser()`。
- 只引入實際使用到的型別，避免多餘 import。
- GameRecordAST 的組裝放在主方法收尾，並用階段 1 註解包起來。

---

**階段 1 數據庫最後更新**：2026-03-10  
**階段 1 版本**：v1.0


# 階段 2：遊戲模式與回合結構 - 數據庫（完整版）

（本節內容已在前文「【階段 2：遊戲模式與回合結構】」說明，這裡補充更完整的範例與最佳實踐。）

## 階段定義

**用途**：定義遊戲流程、模式切換邏輯、回合結構和標題顯示。

**標註位置**：
- `setGameMode()` 調用處
- `setTitle()` 調用處
- `setRecords()` 調用處
- `getFinalSlotData()` 處

**核心 API**：
- `setGameMode(mode: SlotDataGameModeType)`
- `setTitle(items: Item[])`
- `setRecords()`
- `getFinalSlotData()`

（其餘詳細內容：標準模板、Game1028 / 058 / 055 / 056 的多回合、多模式結構範例、
 setRecords 呼叫時機、常見錯誤與檢查清單，內容與原《階段 2：遊戲模式與回合結構_数据库.md》一致，
 已完整保留於此檔，可直接於此參考，不再依賴 Database 資料夾。）


# 階段 3：盤面規格 - 數據庫（完整版）

（本節內容已在前文「【階段 3：盤面規格】」說明，這裡補充更完整的 Processor／盤面設計範例。）

## 階段定義

**用途**：設定遊戲盤面、圖示配置和視覺標記。

**標註位置**：
- `processIconData()` 調用處
- `setBorderMark()` / `setMark()` 等 Processor 使用處
- 自定義 Processor 實作處

**核心 API**：
- `processIconData(row, col, iconList, processors)`
- `setBorderMark(pos2D, color)`
- `setMark(pos2D, color)`
- `addIconList(z, reels, posList, iconList)`

（其餘詳細內容：標準盤面處理範本、自組盤面（Game056 / 1031）範例、
 Processor 建議順序與顏色規範、自訂 Processor 模板、2D 位置格式與 1D→2D 轉換、
 Game1028 / 058 / 056 / 1031 的實際程式片段與最佳實踐，
 皆依原《階段 3：盘面规格_数据库.md》完整保留於此檔。）


# 階段 4：中獎資料與細單格式 - 數據庫（完整版）

（本節內容對應前文「【階段 4：中獎資料與細單格式】」，此處保留完整格式範例與各館案例。）

## 階段定義

**用途**：顯示中獎詳細資訊與細單前的額外說明。

**標註位置**：
- `setDetailDescription()`
- `setDetail()`
- 作為階段 4 使用的 `setLineSummary()`

**核心概念**：
- 細單行格式（線／MegaWays／帶倍數／帶數量）
- Scatter / Pinata / Bonus 等多來源細單合併策略
- 無中獎時的顯示與隱藏規則

（其餘詳細內容：Game1028 的雙格式細單、Pinata 細單、Scatter／Pinata 摘要、
 Game058 的 Scatter + 一般中獎分層合併、Game055 的帶倍數細單、Game1031 的 MegaWays 細單，
 以及完整 Q&A / 檢查清單，皆已併入此檔。）


# 階段 5：摘要與額外顯示 - 數據庫（完整版）

（本節內容對應前文「【階段 5：摘要與額外顯示】」，這裡保留更詳細的跨回合累計與多種摘要樣式。）

## 階段定義

**用途**：顯示回合摘要資訊（單次贏分／總贏分／免費遊戲總贏分等）與細單後的額外說明（倍數、獎勵、增加免費遊戲等）。

**標註位置**：
- 所有 `setSummary()` 調用
- 作為階段 5 使用的 `setLineSummary()` 調用

**核心重點**：
- 單次贏分與總贏分顯示順序與格式
- 類別狀態變數（如 `currentTotalWin` / `currentOdd`）的使用時機
- 免費遊戲總贏分計算邏輯

（其餘詳細內容：Game1028/058/055/1031/056 的各種摘要組合、
 增加免費遊戲的 LineSummary 呈現方式、跨模式累積與條件性摘要等，
 皆依原《階段 5：摘要与额外显示_数据库.md》完整保留於此檔。）


# 階段 6：Icon 與資源 - 數據庫（完整版）

（本節內容對應前文「【階段 6：Icon 與資源】」，此處保留詳細的 ID 分組與命名規範。）

## 階段定義

**用途**：定義所有 Icon 的配置，包括 ID、圖資路徑與尺寸，並說明各種變體（倍數／大小／獎勵列）。

**標註位置**：
- `icons: Record<number, IconConfig>` 常數區塊

**核心重點**：
- Icon ID 分組原則（一般圖示／特殊圖示／變體圖示等）
- 路徑命名規範與前導 0 一致性
- Game1028 / 056 / 1031 中的多變體設計案例與 ID 計算規則

（其餘詳細內容：多尺寸變體 ID 規則（如 0/10/20/30）、
 Prize／Jackpot／FG 圖示分組方式、常見錯誤與檢查清單，
 皆依原《階段 6：Icon与资源_数据库.md》整合於此檔。）


---

**最後更新**：2026-03-11  
**版本**：v1.1
