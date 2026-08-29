# SlotDataParser057 (Game057) - 開發階段紀錄

## 【階段 1：專案與命名】
- **遊戲 ID**：057
- **檔名**：`SlotDataParser057.ts`
- **匯入路徑與依賴**：
  - 引用通用的 AST 定義，如 `GameRecordAST`, `IconConfig`, `Item`, `Line`, `SlotDataGameModeType`, `SlotDataStringType`, `SlotDataIconData`, `IconDataProcessor` 等。
  - 使用遊戲 057 專屬資料結構，如 `SlotInfo057`, `RoundInfo`, `Config057`。

## 【階段 2：遊戲模式與回合結構】
- **遊戲模式**：一般遊戲 (Normal) 與 免費遊戲 (Free Game)。
- **切換規則**：先處理 NG（一般遊戲），若 `SlotInfo057.haveFg` 為 true，則繼續處理 FG（免費遊戲）陣列中的多局資訊。
- **一局定義**：
  - 每局包含 `firstResultBoard`、可能有多次補盤 (`reFillInfos`)，以及最終狀態（`scatterInfo` 與花茶球 `flowerTeaBallInfos` 結算）。
  - NG 局結束呼叫 `parser.setRecords()`。
  - 所有 FG 局全部處理完後，將這整個 Free Game 階段呼叫一次 `parser.setRecords()`。
- **回合標題**：
  - 依照是否為 FG，決定標題 `[SlotDataStringType.text, "一般遊戲" | "免費遊戲"]`。
  - 如果是 FG，會加入第幾回合 `[SlotDataStringType.number, fgRoundNum]`。
  - 如果有多次補盤，會再後綴 `[SlotDataStringType.text, "消除"]` 以及補盤次數 `[SlotDataStringType.number, reFillNum]`。
  - 最後一次補牌（或沒補牌）時會產生最終結算盤面，確保玩家看見最後長相。

## 【階段 3：盤面規格】
- **盤面大小**：動態依 `Config057.ONE_REEL_ICON_AMOUNT` (row) 與 `Config057.REEL_AMOUNT` (col)。
- **排列方式**：提供的是 2D Array（`reel -> rows`），轉換成 `flat()` 以一維陣列給 parser。
- **中獎標記顏色**：
  - 設定統一的常數變數 `WIN_MARK_COLOR = "rgb(102, 102, 255)"` (藍色)。
  - 補牌圖示中獎位置使用外框標記 (`setBorderMark`) 套用該藍色。
  - Scatter 在有中獎（贏分大於 0）或觸發免遊加局時，使用整體標記 (`setMark`) 套用該藍色。
- **特殊顯示需求**：
  - 花茶球 (`flowerTeaBallInfos`) 存在於盤面上時，需在該圖示的 `text` 屬性疊加乘倍數字。

## 【階段 4：中獎資料與細單格式】
- **資料來源**：
  - 單次消除中獎 (`reFillInfo.winSymbolInfos`) 提供 `symbolId`, `odds`, `score` 等。
  - Scatter 贏分 (`roundInfo.scatterInfo.odds`, `score`)。
  - Scatter 觸發 (`roundInfo.scatterInfo.count` 及免費遊戲局數)。
- **細單排列 (Line[])**：
  - 每一個普通圖示中獎轉換為 `[icon] [bet] * [odds] = [score]`。
  - Scatter 觸發免遊：`[icon] * [count] = [fgCount] 免費遊戲`。
  - Scatter 贏分：`[icon] [bet] * [odds] = [score]`。
  - 當沒有任何消除或 Scatter 贏分時，如果有花茶球，不印「無中獎」細單去截斷畫面；若完全沒中，則由 `setDetailDescription` 內部處理印「無中獎」。

## 【階段 5：摘要與額外顯示】
- **顯示內容**：
  - 每次消除補盤都會顯示：
    - `單次贏分 = X`
    - `單局贏分 = Y`（即便兩者為 0 都顯示）。
  - 花茶球特殊計算：
    - 如果最終盤面有花茶球乘倍，將額外用 `setLineSummary` 置中顯示：
      - `累積倍數 = [ballOdds]`
      - `[單局基礎贏分] * [ballOdds] = [最終贏分]`
    - 花茶球贏分只累加進 `單局贏分` 以及 `總贏分`，不計入該最後一盤的 `單次贏分`。
  - 每局結束的最後盤面會顯示結算總分：
    - 一般遊戲顯示 `總贏分 = Z`。
    - 免費遊戲顯示 `免費遊戲總贏分 = Z`。

## 【階段 6：Icon 與資源】
- **Icon 定義清單**：宣告了 `icons: Record<number, IconConfig>`。
- 每個 `IconConfig` 提供圖片的 `src`（指向 `/images/game057/icon_xx.png`）及 `width`/`height` 尺寸。

## 【階段 7：測試】
- 經過幾次的迭代修正後：
  - 修復 TypeScript Lint Errors（如 `addedFgCount` 重複宣告、回傳型別與 Parser 參數的匹配）。
  - 確認「最後一次結算盤面」會被強制顯示。
  - 確認「花茶球」乘倍不會疊加到最後一盤的「單次贏分」，而是只在「單局」與「總分」發酵。
  - 統一了所有的中獎外框和圖示提示框為同一個藍色常數 `WIN_MARK_COLOR`。
  - 依照使用者在不同局次的「單次贏分」、「單局贏分」顯示需求成功調整（含0分也要顯示）。

---
接下來即將進入 **階段 8**（若有 JS 包裝的需求）。
