// =======================
// 遊戲規則說明（Game1028）
// =======================
// 1. 遊戲模式與整體流程
// - 本遊戲包含「一般遊戲」與「免費遊戲」兩種模式：
//   - 一般遊戲：第一局使用 RoundDataList[0]，setGameMode(normal)，可同時觸發一般連線獎勵與「幸運皮納塔」功能，並有機會開啟免費遊戲。
//   - 免費遊戲：若一般遊戲達成 Scatter 觸發條件，獲得多局免費遊戲，從 RoundDataList[1] 之後依序處理，每局 setGameMode(free)。
// - 每一個「回合」（一般/免費）皆依固定順序處理：
//   setTitle → processIconData → setDetailDescription / setLineSummary → setSummary → combineOneRoundData → 視情況 setRecords。
//
// 2. 盤面結構與標記顏色
// - 盤面使用 Game1028Config.Row × Game1028Config.Column 的固定矩陣，以 IconList ID 表示每格圖示。
// - 在一般遊戲主盤面中，會同時顯示三種標記：
//   - 紅色框（#ff0000ff）：ngRoundData.WinData.Pos2D，表示本局中獎線上的圖示位置。
//   - 藍綠色框（#00b7ffff）：ngRoundData.TriggerData.Scatter2DPos，表示觸發免費遊戲用的 Scatter 位置。
//   - 黃色框（#fffb00ff）：ngRoundData.BeforePinata2DPos，表示觸發「幸運皮納塔」之前被選中的皮納塔位置。
// - 在皮納塔詳細與免費遊戲盤面中，黃色框會改標示 PinataData.Pos2D（實際皮納塔開獎位置）。
//
// 3. 一般遊戲：連線獎勵與幸運皮納塔
// - 一般遊戲主局：
//   - 標題：若本局沒有皮納塔，顯示「一般遊戲」；若有皮納塔，顯示「一般遊戲-幸運皮納塔1」。
//   - 中獎細單：
//     - 每一筆 WinData1028 產生一行：圖示 ID → 下注金額 Bet → 賠率 WinOdd → 最終得分 WinScore，並標註中獎線編號（「線 X」）。
//   - 摘要：
//     - 「單次贏分」＝本局一般連線總得分（ngRoundData.WinData.Score）。
//     - 「總贏分」＝目前為止累計總得分（此處等同本局得分）。
//   - 若本局同時觸發免費遊戲：
//     - 顯示 Scatter 摘要：「Scatter 圖示 × 數量 = 免費遊戲局數」，局數來自 gameResult.FGCount。
//   - 若本局觸發「幸運皮納塔」：
//     - 檢查是否含有「金色皮納塔」（GoldPinata / GoldPinataX2 以上 ID）。
//     - 顯示皮納塔數量摘要：「[皮納塔圖示][(可選)金色皮納塔圖示] × 個數 = 幸運皮納塔」，個數為 BeforePinataPos 的長度。
// - 皮納塔詳細局（存在 ngRoundData.PinataData 時）：
//   - 標題：顯示「一般遊戲-幸運皮納塔2」，作為皮納塔獨立回合。
//   - 盤面：使用 ShowIconList 並以黃色框標記所有 PinataData.Pos2D。
//   - 中獎細單：
//     - 每一筆 PinataData1028 產生一行：「圖示 × Bet × Odd × Count = Score」，代表該皮納塔圖示的總獎勵。
//   - 摘要：
//     - 「單次贏分」＝本次皮納塔總得分（PinataData.Score）。
//     - 「總贏分」＝本局（一般連線 + 皮納塔）總得分（ngRoundData.RoundWinScore）。
//
// 4. 免費遊戲：連續皮納塔獎勵
// - 若 HasFG 為真，會先在一般遊戲局顯示 Scatter 觸發資訊，並進入免費遊戲模式 setGameMode(free)。
// - 免費遊戲的每一局（i 從 1 開始）流程：
//   - 標題：「免費遊戲 i」，i 代表第幾局免費遊戲。
//   - 盤面：使用 fgRoundData.ShowIconList，並以黃色框標記所有皮納塔位置 fgRoundData.PinataData.Pos2D。
//   - 行摘要：
//     - 先計算本局是否有「金色皮納塔」，並依 PinataData.Pos 的數量顯示「[皮納塔圖示][(可選)金色皮納塔圖示] × 個數 = 幸運皮納塔」。
//   - 中獎細單：
//     - 同樣使用 PinataDetail，每一筆為「圖示 × Bet × Odd × Count = Score」。
//   - 摘要：
//     - 「總贏分」＝當前這局的 RoundWinScore（包含本局所有皮納塔獎勵）。
//     - 「免費遊戲總贏分」＝截止目前所有免費遊戲累計得分（以 CurrentWinScore 減去一般遊戲 RoundWinScore 計算）。
//   - 每局免費遊戲結束都會 combineOneRoundData() 並 setRecords()，將其獨立記錄。
//
// 5. 算分與顯示統一規則
// - 一般連線細單：Score = WinOdd × Bet，並標註「線 X」作為中獎線編號。
// - 皮納塔細單：Score = Odd × Count × Bet，將每種皮納塔圖示的獎勵獨立列出。
// - 摘要欄位一律使用 getWinDescription(text, score) 生成，統一格式為「文字 = 分數」，包含：
//   - 單次贏分、總贏分、免費遊戲總贏分等。


# Game1028 SlotDataParser1028 階段結構對照表

| 階段 | 功能說明（Keyword） | 階段架構（Value） |
| --- | --- | --- |
| 階段 1 | 遊戲 1028 規則：定義「規則解析器入口」與共用資料結構 | - 匯入核心 AST / 型別：`GameRecordAST`、`IconConfig`、`Item`、`Line`、`SlotDataGameModeType`、`SlotDataParser`、`SlotDataStringType`。<br>- 匯入遊戲資料模型與配置：`GameData1028`、`PinataData1028`、`RoundPinataData1028`、`WinData1028`、`Game1028Config`、`IconList`。<br>- 定義 icon 資源常數：`export const icons: Record<number, IconConfig> = { 0~39 }`，包含一般圖示、多倍數皮納塔、JP 類圖示等。<br>- 宣告主解析類別：`export class SlotDataParser1028 { ... }`，主入口 `getSlotParser(gameResult: GameData1028)` 建立 `new SlotDataParser(gameResult.Bet)`。 |
| 階段 2 | 遊戲 1028 規則：一般 / 皮納塔 / 免費遊戲回合結構 | - 入口 `getSlotParser(gameResult)`：<br>  - 取出一般局資料：`const ngRoundData = gameResult.RoundDataList[0];`。<br>  - 設定模式與標題：`parser.setGameMode(SlotDataGameModeType.normal);`，標題由 `getNGRoundTitle(ngRoundData.PinataData)` 決定（有皮納塔時為「一般遊戲-幸運皮納塔1」）。<br>  - 處理一般主盤面 → 細單 → 摘要 → combineOneRoundData()。<br>  - 若存在 ngRoundData.PinataData：
    - 額外建立「一般遊戲-幸運皮納塔2」回合，處理皮納塔詳細盤面與細單。<br>  - 完成一般遊戲部分後 `parser.setRecords();`。<br>- 免費遊戲流程（HasFG 為真）：<br>  - `parser.setGameMode(SlotDataGameModeType.free);`。<br>  - 迴圈 i=1..RoundDataList.length-1，逐局處理免費遊戲：
    - 設定標題：「免費遊戲 i」。<br>    - 顯示盤面與皮納塔標記 → 行摘要（皮納塔數量）→ 皮納塔細單 → 摘要（本局總贏分 / 免費遊戲總贏分）。<br>    - 每局結束：`combineOneRoundData(); parser.setRecords();`。<br>- 最後以 `parser.getFinalSlotData()` 與 icons 回傳 GameRecordAST。 |
| 階段 3 | 遊戲 1028 規則：盤面規格與三色框標記 | - 一般主盤面：在 `getSlotParser` 中：<br>  - `parser.processIconData(Game1028Config.Row, Game1028Config.Column, ngRoundData.IconList, [ ...processors ])`。<br>  - processors 包含：<br>    - `parser.setBorderMark(ngRoundData.WinData.Pos2D, "#ff0000ff")`：紅色中獎線位置。<br>    - `parser.setBorderMark(ngRoundData.TriggerData.Scatter2DPos, "#00b7ffff")`：藍綠色 Scatter 觸發位置。<br>    - `parser.setBorderMark(ngRoundData.BeforePinata2DPos, "#fffb00ff")`：黃色「尚未開獎的皮納塔」位置。<br>- 皮納塔詳細盤面：<br>  - 使用 `ngRoundData.ShowIconList` 作為盤面，僅以 `parser.setBorderMark(ngRoundData.PinataData.Pos2D, "#fffb00ff")` 顯示實際開獎皮納塔位置。<br>- 免費遊戲盤面：<br>  - 每局使用 `fgRoundData.ShowIconList`，並以 `parser.setBorderMark(fgRoundData.PinataData.Pos2D, "#fffb00ff")` 標記所有皮納塔位置。<br>- 所有盤面列 / 欄數皆固定為 `Game1028Config.Row` × `Game1028Config.Column`。 |
| 階段 4 | 遊戲 1028 規則：中獎細單（一般連線 / 皮納塔） | - 一般連線細單：`getDetailDescriptionList(ngRoundData.WinData.WinDataList, bet)`：<br>  - 每筆 WinData1028 產生一行 `Line`：<br>    - `icon`（WinSymbolID）→ `number` bet → `*` → `number` WinOdd → `=` → `number` WinScore → `("線" + WinLineID)`。<br>  - 最終使用 `parser.setDetailDescription(descriptionList);` 顯示所有中獎線。<br>- 皮納塔細單：`getPinataDetailDescriptionList(detailData: PinataData1028[], bet)`：<br>  - 每筆 PinataData1028 顯示：「icon SymbolID × bet × Odd × Count = Score」。<br>  - 用於：<br>    - 一般局之「幸運皮納塔2」回合。<br>    - 每局免費遊戲中的皮納塔結果。<br>- 免費遊戲行摘要：在每局 free game 中，會先透過 `getPinataCountSummary(hasGoldPinata, count)` 以 `setLineSummary` 顯示皮納塔觸發行，再以上述細單補充獎勵明細。 |
| 階段 5 | 遊戲 1028 規則：Scatter / 皮納塔摘要與各模式贏分顯示 | - 一般局摘要：<br>  - 使用 `getWinDescription(text, score)` 統一產生「文字 = 分數」格式：<br>    - 「單次贏分」：ngRoundData.WinData.Score。<br>    - 「總贏分」：ngRoundData.WinData.Score（僅一般局，等同單局總得分）。<br>  - 若 `gameResult.HasFG`：
    - 以 `getScatterSummary(posCount, fgCount)` 產生 Scatter 行摘要：「Scatter icon × 數量 = fgCount 免費遊戲」。<br>  - 若存在 PinataData：
    - 以 `getPinataCountSummary(hasGoldPinata, BeforePinataPos.length)` 顯示「[皮納塔][(可選)金色皮納塔] × 個數 = 幸運皮納塔」。<br>- 皮納塔詳細局摘要：<br>  - 「單次贏分」＝ PinataData.Score。<br>  - 「總贏分」＝ ngRoundData.RoundWinScore（一般連線 + 皮納塔合計）。<br>- 免費遊戲局摘要：<br>  - 「總贏分」：fgRoundData.RoundWinScore（當前這局的總得分）。<br>  - 「免費遊戲總贏分」：`fgRoundData.CurrentWinScore - ngRoundData.RoundWinScore`，代表目前為止純免費遊戲部分的累積。 |
| 階段 6 | 遊戲 1028 規則：Icon 資源配置與特殊皮納塔 | - Icon 定義常數（icons）：<br>  - 0~8：一般遊戲基本圖示。<br>  - 9~20：帶有倍數的皮納塔圖示（`icon_09_mult_1` ~ `icon_10_mult_10`）。<br>  - 21~25：九號圖示對應的 JP（mini / minor / major / ultra / grand）。<br>  - 26~39：十號圖示對應的倍數與 JP 系列。<br>- `IconList` 中定義特定功能圖示：<br>  - `IconList.Pinata`、`IconList.GoldPinata`、`IconList.GoldPinataX2` 等，用於判斷是否有金色皮納塔與皮納塔數量。<br>  - `IconList.Scatter`：免費遊戲觸發符號。<br>- 最終輸出：`getSlotParser` 結尾回傳 `{ ast: parser.getFinalSlotData(), icons }`，前端依 AST + icons 即可重現一般 / 皮納塔 / 免費遊戲三種情境的細單與盤面。 |
