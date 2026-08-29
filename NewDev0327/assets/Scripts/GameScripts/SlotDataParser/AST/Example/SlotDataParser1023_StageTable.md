// =======================
// 遊戲規則說明（Game1023）
// =======================
// 1. 遊戲結構
// - 一局對應一個 SpinResultData（僅一個 round）。
// - round.targetBoardData：一般遊戲盤面，必定存在。
// - round.specialBoardData：當 isSpecialTriggered 為 true 時，額外出現的「狂歡時刻」盤面。
// - 本遊戲僅有一種遊戲模式，統一使用 SlotDataGameModeType.normal，狂歡時刻以標題區分，不切換 gameMode。
// - 一局最多顯示兩個回合：先一般遊戲，再依條件顯示狂歡時刻，最後僅呼叫一次 setRecords() 與 getFinalSlotData()。
//
// 2. 盤面與圖示
// - 一般遊戲盤面為 3 列 × 3 輪（ICON_AMOUNT × REEL_AMOUNT）。
// - 狂歡時刻盤面為 3 列 × 5 輪（ICON_AMOUNT × SPECIAL_REEL_AMOUNT）。
// - 盤面資料 board[col][row] 採「欄優先」儲存；iconList 亦以欄優先展平（先欄再列）。
// - BoardData.winPositions 同樣以欄優先 boolean[][] 表示中獎格位置。
//
// 3. 中獎顯示與顏色
// - 一般回合與狂歡時刻回合，所有中獎位置一律先以藍色 `#00b7ffff` 標記。
// - 若一般回合觸發狂歡時刻條件，則再將「觸發狂歡的圖示」所在格子覆蓋為紅色 `#ff0000ff`，優先顯示觸發來源。
// - 狂歡回合僅使用藍色標記中獎，不再使用紅色覆蓋。
//
// 4. 狂歡時刻觸發條件
// - 僅在一般盤面（3×3）判定是否觸發狂歡時刻：
//   - 對每一欄檢查是否「該欄 3 格皆為同一圖示」。
//   - 若同一圖示在盤面上有兩欄（含）以上皆為整欄相同，則視為觸發狂歡時刻的圖示。
// - 觸發說明文字：針對每個觸發圖示，統計其在整個 3×3 盤面中出現的總次數 N，顯示為：
//   - icon × N = 狂歡時刻（使用 setLineSummary 額外顯示於一般回合）。
// - 觸發位置標記：同一組觸發條件會將該圖示在 3×3 盤面中所有出現格子，於一般回合中以紅色標記。
//
// 5. 細單與得分顯示
// - 細單一律以 BoardData.winLineList 為主，逐行輸出中獎線：
//   - 一般回合：
//     - (圖示) 押注額 × 圖示賠率 = 贏分 (線 n)
//     - 計算公式：score = bet × winLineOdd。
//   - 狂歡時刻回合：
//     - (圖示) 押注額 × 圖示賠率 × 2(雙向連線) = 贏分 (線 n)
//     - 實際分數仍為 score = bet × winLineOdd，文字上的「× 2(雙向連線)」僅為說明用，不再額外乘 2。
// - 若該盤面無任何中獎線，setDetailDescription([]) 交由核心類顯示「無中獎」。
//
// 6. 摘要與總贏分
// - 每個回合結束時，根據該盤面 winLineList 加總出「單次贏分」，不依賴外部 totalScore 欄位：
//   - 一般回合：單次贏分 = Σ(bet × winLineOdd)。
//   - 狂歡回合：單次贏分 = Σ(bet × winLineOdd)，倍數已包在 odd 內。
// - 類別內部以 totalWinScore 累加每個回合的單次贏分，並於每回合摘要顯示：
//   - 單次贏分 = 本回合贏分。
//   - 總贏分 = 目前為止累積的兩回合總贏分。
//
// 7. AST 組裝流程
// - 每個回合皆遵守固定順序：
//   - setTitle() → processIconData() → setDetailDescription() →
//     （如需）setLineSummary() → setSummary() → combineOneRoundData()。
// - 一局處理完所有回合後呼叫 setRecords()，最後只呼叫一次 getFinalSlotData()，
//   並搭配 icons 常數組成 GameRecordAST 回傳。


# Game1023 SlotDataParser1023 階段結構對照表

| 階段 | 功能說明（Keyword） | 階段架構（Value） |
| --- | --- | --- |
| 階段 1 | 遊戲 1023 規則：定義「規則解析器入口」與共用資料結構 | - 匯入核心 AST / 型別：`GameRecordAST`、`IconConfig`、`Item`、`Line`、`SlotDataGameModeType`、`SlotDataParser`、`SlotDataStringType`。<br>- 匯入遊戲資料模型：`SpinResultData`、`BoardData`、`Game1023DataConfig`。<br>- 定義 icon 資源常數：`export const icons: Record<number, IconConfig> = { 0~9 }`。<br>- 宣告主解析類別：`export class SlotDataParser1023 { ... }`，並在 `getSlotParser(spinResult, bet)` 中建立 `new SlotDataParser(bet)` 作為核心 AST 建構器。 |
| 階段 2 | 遊戲 1023 規則：一般 / 狂歡回合結構與流程控制 | - 主入口 `getSlotParser(spinResult, bet)`：<br>  - 重置本局總贏分：`this.totalWinScore = 0;`。<br>  - 建立 `parser` 並設定模式：`parser.setGameMode(SlotDataGameModeType.normal);`。<br>  - 取得 `const round = spinResult.round;`。<br>- 一般回合處理：`this.parseNormalRound(spinResult, parser, bet);`：<br>  - 使用 `round.targetBoardData` 產生第一個回合。<br>- 狂歡回合處理（如有觸發）：<br>  - 若 `round && round.isSpecialTriggered && round.specialBoardData` 為真，呼叫 `this.parseSpecialRound(spinResult, parser, bet);`。<br>- 一局結束：<br>  - 僅在所有回合處理完後呼叫一次 `parser.setRecords();`。<br>  - 最終以 `parser.getFinalSlotData()` 與 `icons` 常數組成 `GameRecordAST` 回傳。 |
| 階段 3 | 遊戲 1023 規則：盤面佈局（3×3 / 3×5）與中獎 / 觸發標記 | - 一般盤面 3×3：`parseNormalRound` 中：<br>  - 盤面資料：`boardData = round.targetBoardData;`。<br>  - 列 / 欄數：`rowCount = Game1023DataConfig.ICON_AMOUNT; colCount = Game1023DataConfig.REEL_AMOUNT;`。<br>  - 展平 icon：`getIconListFromBoard(boardData.targetBoard, rowCount, colCount)`，以欄優先排列。<br>  - 中獎位置：`getWinPos2D(boardData.winPositions, rowCount, colCount)` 轉為 `number[][]`。<br>  - processors：<br>    - 若有中獎：`parser.setMark(winPos2D, "#00b7ffff")`（藍色中獎）。<br>    - 若 `round.isSpecialTriggered`：再計算 `getSpecialTriggerPos2D(...)`，並以 `parser.setMark(specialPos2D, "#ff0000ff")` 標記觸發狂歡圖示位置為紅色。<br>  - 最後 `parser.processIconData(rowCount, colCount, iconList, processors);`。<br>- 狂歡盤面 3×5：`parseSpecialRound` 中：<br>  - 列 / 欄數改為 `SPECIAL_REEL_AMOUNT`。<br>  - 只使用 `winPos2D` 藍色標記 `parser.setMark(winPos2D, "#00b7ffff")`，不再加紅色覆蓋。 |
| 階段 4 | 遊戲 1023 規則：中獎細單（一般 / 狂歡）與「無中獎」處理 | - 一般細單 `getNormalDetailDescriptionList(boardData, bet)`：<br>  - 若 `winLineList.length === 0`：回傳空陣列，核心類會顯示「無中獎」。<br>  - 有中獎時，對每條線建立一行：<br>    - `(icon) bet × winLineOdd = score (線 n)`，其中 `score = (bet * winLineOdd).fixed()`。<br>- 狂歡細單 `getSpecialDetailDescriptionList(boardData, bet)`：<br>  - 文案格式：`(icon) bet × winLineOdd × 2(雙向連線) = score (線 n)`。<br>  - 實際分數仍為 `score = bet * winLineOdd`，倍數已包在 `winLineOdd` 中，「× 2」僅為文字說明。<br>- 兩者最後都以 `parser.setDetailDescription(detailDescriptionList);` 設定回合細單內容。 |
| 階段 5 | 遊戲 1023 規則：狂歡觸發摘要與單次 / 總贏分 | - 一般回合觸發狂歡摘要：`getSpecialTriggerSummary(board, rowCount, colCount)`：<br>  - 統計每個 icon：在盤面上「整欄皆為該 icon」的欄位數與總出現次數。<br>  - 若某 icon 有至少兩欄皆為整欄相同，並且在盤面中出現次數 N > 0：<br>    - 輸出一行：「icon × N = 狂歡時刻」。<br>  - 在 `parseNormalRound` 中透過 `parser.setLineSummary(triggerSummary);` 顯示在一般回合下方。<br>- 觸發位置標記：`getSpecialTriggerPos2D` 會根據上述條件找出所有觸發 icon 的盤面位置，作為紅色標記來源。<br>- 單次 / 總贏分：<br>  - 一般回合：`getBoardWinScoreNormal` 將每條線的 `bet × winLineOdd` 加總，得到本回合單次贏分。<br>  - 狂歡回合：`getBoardWinScoreSpecial` 同樣加總 `bet × winLineOdd`（倍數已含於 odd 中）。<br>  - `this.totalWinScore` 持續累加每回合單次贏分，並使用 `getWinDescription("單次贏分", singleWinValue)` 與 `getWinDescription("總贏分", totalWinScore)` 以摘要形式顯示。<br>  - 每回合最後以 `parser.setSummary(singleWin)`、`parser.setSummary(totalWin)` 輸出兩行摘要。 |
| 階段 6 | 遊戲 1023 規則：Icon 資源 / 版面常數與最終輸出 | - Icon 定義常數（icons）：<br>  - 0~9：`/images/game1023/icon_00.png ~ icon_09.png`，固定尺寸約 `152x156`，用於一般 / 狂歡兩種盤面。<br>- 版面常數（Game1023DataConfig）：<br>  - `ICON_AMOUNT`：每欄圖示數（3）。<br>  - `REEL_AMOUNT`：一般盤面輪數（3）。<br>  - `SPECIAL_REEL_AMOUNT`：狂歡盤面輪數（5）。<br>- 最終輸出：在 `getSlotParser` 結尾回傳：`{ ast: parser.getFinalSlotData(), icons }`，供前端依 AST + icons 還原一般與狂歡時刻兩種盤面。 |
