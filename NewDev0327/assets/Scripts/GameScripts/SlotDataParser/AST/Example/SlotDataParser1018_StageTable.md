// =======================
// 遊戲規則說明（Game1018）
// =======================
// 1. 遊戲模式與整體流程
// - 本遊戲包含三種主要模式：
//   - 一般遊戲：對應 HeaderType = BET，使用 ngResult 與可能的擴展功能，setGameMode(normal)。
//   - 免費遊戲：若一般遊戲觸發免費遊戲，依序處理 fgResult，每局 setGameMode(free)，並共用同一組累積贏分與擴展狀態。
//   - 比倍遊戲：當 HeaderType 為 GAMBLE_* 時，進入比倍或比倍領取模式，透過翻牌放大或領取既有獎金，setGameMode("比倍")。
// - 一般 / 免費遊戲每個「回合」皆依固定順序處理：
//   setTitle → processIconData → setDetailDescription / setSummary → setSummary（贏分摘要）→ combineOneRoundData → 視局別呼叫 setRecords。
// - getFinalSlotData() 僅在整個流程結束時呼叫一次，搭配 icons 常數組成 GameRecordAST。
//
// 2. 盤面與標記規則
// - 盤面以一維 reelResult 或二維 2D 座標表示，實際顯示時使用 GameConfig1018.ICON_COUNT（每輪圖示數）與 REEL_COUNT（輪數）轉換為矩陣。
// - 主盤面：
//   - 一般情況下，winLineData 轉為 2D 位置，標記為紅色外框（#ec2121ff），表示中獎圖示位置。
//   - 若本局觸發免費遊戲條件（isTriggerFeature），會額外以藍色底（#21e5ecff）標記 Scatter 相關位置（scPos2DForHistory）。
// - 擴展盤面（Expand）：
//   - 在特定圖示被指定為擴展圖示（expandID）時，整輪圖示會被擴展替換為該圖示，並以 winLine 或 expandWinLine 的 2D 位置標記得分輪。
//   - 上方會有一列「拓展 Icon 列」（setBoard(1,9,...)），顯示目前哪些普通圖示已被啟用為擴展圖示（亮起 / 反灰）。
//
// 3. 一般遊戲、免費遊戲與擴展功能
// - 一般遊戲主局：
//   - 標題固定為「一般遊戲」。
//   - 盤面依 winLineData 與觸發狀態標記中獎與 Scatter 位置。
//   - 中獎細單：使用 WaysWinData 計算每筆中獎，顯示「圖示 × Bet × 賠率 = 得分（線號）」的方式列出所有 Ways 中獎。
//   - 若本局觸發 Scatter（scatterCount 達成條件）：
//     - 顯示 Scatter 贏分：WildIcon × 數量 = Scatter 獎金。
//     - 顯示免費遊戲次數：WildIcon × 數量 = GameConfig1018.FG_AND_ADD_FG_COUNT（觸發 / 加送的免費遊戲局數）。
//     - 顯示擴展解鎖：WildIcon × 數量 = 新增擴展 Icon（newExpandID），代表之後盤面會加入新的擴展圖示。
// - 免費遊戲主局：
//   - 標題：「免費遊戲 N」，N 為第幾局免費遊戲。
//   - 盤面：上方一列顯示所有已啟用的擴展 Icon，主盤面再標記中獎輪與 Scatter 底色。
//   - 若當局有觸發新的擴展，會以文字顯示「觸發擴展 : [各擴展圖示 Icon]」。
// - 擴展細局（expand 回合）：
//   - 每一個擴展事件產生獨立回合：「免費遊戲 N-擴展圖示M」。
//   - 盤面會將指定輪整輪替換為擴展圖示，並重新標記中獎輪次。
//
// 4. 比倍與比倍領取規則
// - 比倍遊戲（parseGambleData）：
//   - 標題：「比倍」＋第幾次比倍次數（gambleCount）。
//   - 盤面：顯示最終開出之撲克牌結果（黑紅方梅四種花色），使用 result + 間隔常數轉換為 Icon ID。
//   - 玩家選擇：
//     - 若選擇紅 / 黑（顏色），以文字顯示「黑色」或「紅色」。
//     - 若選擇具體花色，則以對應 Icon 顯示選擇結果。
//   - 結果計算：
//     - 若比倍成功：顯示 originalScore × odd = gambleScore，並將「單次贏分」設為 gambleScore。
//     - 若失敗：顯示「未中獎」，「單次贏分 = 0」。
// - 比倍領取（parseCollectData）：
//   - 標題：「比倍領取」，盤面顯示牌背圖示（Icon 18）。
//   - 顯示「選擇: 領取」，代表玩家放棄繼續比倍。
//   - 顯示「總贏分 = originalOdd × Bet」，並結束比倍流程。
//
// 5. 算分與摘要顯示
// - Ways 細單：每筆 WaysWinData 顯示「圖示 ID、Bet、賠率 odd、線號」，最後以 odd × Bet 計算實際贏分並 fixed() 顯示。
// - 擴展細單：針對每個擴展圖示與每條支付線，顯示「擴展圖示、Bet、lineOdd、線號」與其得分。
// - 一般 / 免費遊戲會持續累加 currentOdd，並轉換為實際金額（× Bet）顯示在「總贏分」或「免費遊戲總贏分」。
// - 摘要欄位統一格式：「文字 = 分數」，包含單次贏分、總贏分、免費遊戲總贏分等。


# Game1018 ISlotDataParser1018 階段結構對照表

| 階段 | 功能說明（Keyword） | 階段架構（Value） |
| --- | --- | --- |
| 階段 1 | 遊戲 1018 規則：定義「規則解析器入口」與共用資料結構 | - 匯入核心 AST / 細單型別：`GameRecordAST`、`IconConfig`、`SlotDataParser`、`SlotDataStringType`、`SlotDataIconData`、`IconDataProcessor`、`Item`、`Line`。<br>- 匯入遊戲 1018 專用資料模型：`SlotData1018`（總包資料）、`RoundData1018`（一般 / 單局 FG 結果）、`FgRoundData1018`、`ExpandData1018`、`GambleResult1018`。<br>- 匯入規則與工具：`GameConfig1018`（ICON_COUNT、REEL_COUNT、ICON_ODD、FG_AND_ADD_FG_COUNT 等）、`Utility1018.get2DPos()`（一維 index → 2D 位置）、`WaysWinData`（每條 Ways 中獎資料）。<br>- 定義 Icon 資源常數：`export const icons: Record<number, IconConfig> = { ... }`，包含 0~18 各種符號與撲克牌結果 / 選擇 / 牌背圖示。<br>- 宣告主解析類別：`export class ISlotDataParser1018 { ... }`，建構子接收 `slotData: SlotData1018` 與 `bet: number`，內部建立 `new SlotDataParser(bet)`。 |
| 階段 2 | 遊戲 1018 規則：依「一般 / 免費 / 比倍」模式分流並控制回合流程 | - 建構子中依 `slotData.type` 判斷模式：<br>  - `HeaderType1018.BET`：一般 / 免費遊戲流程。<br>  - `HeaderType1018.GAMBLE_*`：比倍或比倍領取流程（`setGameMode("比倍")`）。<br>- 一般 / 免費遊戲：<br>  - 先 `parser.setGameMode(SlotDataGameModeType.normal);`，呼叫 `this.parseNGRoundData(slotData.ngResult, bet, parser, ngExpandID);`。<br>  - 若 `ngResult.isTriggerFeature` 為真：<br>    - 切換 `parser.setGameMode(SlotDataGameModeType.free);`。<br>    - 迴圈 `slotData.fgResult`，依序呼叫 `this.parseFGRoundData(fgResult[i], bet, parser, historyFGID, fgResult[i].newExpandID);`。<br>- 比倍 / 比倍領取：<br>  - 若 `type === GAMBLE_COLLECT`：呼叫 `parseCollectData`。<br>  - 否則呼叫 `parseGambleData`，每次比倍皆在方法內自行 `combineOneRoundData()` 與 `setRecords()`。<br>- 最後在 `getParserData()` 中：`const data = this.parser.getFinalSlotData(); return { ast: data, icons };` 組成 `GameRecordAST`。 |
| 階段 3 | 遊戲 1018 規則：盤面佈局與中獎 / Scatter / 擴展標記 | - 主盤面處理：`parseBoardData(roundData, parser, expandID = -1)`：<br>  - 決定盤面資料來源：`finalResult = roundData.reelResult` 或 `getExpandResult(...)`（若為擴展盤面）。<br>  - 計算中獎位置：一般盤面用 `getWinLinePos(roundData.winLineData)`，擴展盤面用 `getExpandWinLinePos(finalResult, expandID)`。<br>  - 建立 processors：<br>    - `parser.setBorderMark(winPos, '#ec2121ff')` 作為紅色中獎外框。<br>    - 若 `roundData.isTriggerFeature`：再 push `parser.setBackGroundMark(roundData.scPos2DForHistory, '#21e5ecff')` 作為 Scatter 藍底。<br>  - 呼叫 `parser.processIconData(GameConfig1018.ICON_COUNT, GameConfig1018.REEL_COUNT, finalResult, processors);`。<br>- 上方拓展 Icon 列：`parseExpandBoardData(expandIDList, parser)`：<br>  - 依 `GameConfig1018.NORMAL_ICON` 建立 `SlotDataIconData` 陣列。<br>  - `icon = NORMAL_ICON[i]`，`dark = !isExpand`（尚未啟用的圖示為反灰）。<br>  - 透過 `parser.setBoard(1, 9, expandIconList);` 顯示於最上方一列。<br>- 盤面重組工具：<br>  - `getWinLinePos`：整合所有 Ways 中獎位置為一組 2D 陣列。<br>  - `getExpandResult`：若某輪含有 expandID，將該輪所有格子改為 expandID。 |
| 階段 4 | 遊戲 1018 規則：中獎細單（Ways / 擴展）與 Scatter / 擴展說明 | - 一般 / 免費 Ways 細單：`parseLineData(winLineData, bet, parser)`：<br>  - 無中獎：輸出一行 `["無中獎"]`。<br>  - 有中獎：對每筆 `WaysWinData` 產出一行 `Line`：<br>    - icon（symbolID）→ bet → `*` → odd → `=` → odd×bet → `(線 winLineID+1)`。<br>  - 最後 `parser.setDetailDescription(line);`。<br>- 擴展細單與說明：`parseExpandDescriptionData(expandData, bet, parser)`：<br>  - 先以 `setSummary` 顯示「第x輪轉變為 {reelIDStr} + 擴展圖示 Icon」。<br>  - 再依 `GameConfig1018.PAY_LINE` 條數，對每條支付線輸出：擴展圖示 × bet × lineOdd = 分數（線號）。<br>- Scatter / 免費遊戲 / 擴展解鎖說明：`parseSCData(scCount, bet, newExpandID, parser)`：<br>  - 三行摘要：<br>    1) WildIcon × 數量 = Scatter 贏分。<br>    2) WildIcon × 數量 = FG_AND_ADD_FG_COUNT 免費遊戲。<br>    3) WildIcon × 數量 = 新增擴展 icon（newExpandID）。<br>- 觸發擴展摘要：`parseExpandInfoData(expandDataList, parser)` 以「觸發擴展 : [各擴展 Icon]」顯示當前局中被啟用的擴展圖示。 |
| 階段 5 | 遊戲 1018 規則：單次 / 總贏分與比倍摘要顯示 | - 一般 / 免費遊戲贏分：`parseRoundScoreData(odd, bet, parser, isFG)`：<br>  - 單次贏分：`odd * bet`，以「單次贏分 = 金額」顯示。<br>  - 累積 odd 存入 `this.currentOdd`，再乘以 bet 轉為實際金額。<br>  - 若 `isFG=false`：顯示「總贏分 = currentOdd×bet」。<br>  - 若 `isFG=true`：顯示「免費遊戲總贏分 = currentOdd×bet」。<br>- 比倍摘要：`parseGambleData(gambleResult, parser)`：<br>  - 顯示選擇內容（文字黑色 / 紅色或 icon 花色）。<br>  - 成功時顯示 `originalScore * odd = gambleScore`，再以「單次贏分 = gambleScore」收斂結果。<br>  - 失敗時顯示「未中獎」與「單次贏分 = 0」。<br>- 比倍領取摘要：`parseCollectData`：
  - 顯示「選擇: 領取」。<br>  - 顯示「總贏分 = originalOdd × bet」，作為比倍流程最終結果。 |
| 階段 6 | 遊戲 1018 規則：Icon 資源與特殊圖示配置 | - Icon 定義常數（icons）：<br>  - 0~9：`/images/game1018/icon_00.png ~ icon_09.png`，一般盤面圖示，尺寸約 `172x216`。<br>  - 10~13：比倍結果花色（黑桃 / 紅心 / 方塊 / 梅花）。<br>  - 14~17：玩家選擇花色用 Icon。<br>  - 18：比倍牌背圖示。<br>- 遊戲規則相關常數（由 GameConfig1018 提供）：<br>  - `ICON_COUNT`、`REEL_COUNT`：盤面列數與輪數。<br>  - `NORMAL_ICON`：可成為拓展圖示的基礎符號列表。<br>  - `ICON_ODD`：各圖示 Scatter / Ways 賠率表。<br>  - `FG_AND_ADD_FG_COUNT`：Scatter 觸發 / 加送免費遊戲局數。<br>- 最終輸出：在 `getParserData()` 中回傳 `{ ast: parser.getFinalSlotData(), icons }`，讓前端以 AST + icons 對照實際顯示盤面與比倍結果。 |
