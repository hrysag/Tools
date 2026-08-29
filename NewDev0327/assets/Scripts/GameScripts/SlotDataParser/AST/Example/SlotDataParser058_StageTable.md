// =======================
// 遊戲規則說明（Game058）
// =======================
// 1. 遊戲模式與回合結構
// - 本遊戲包含「一般遊戲」與「免費遊戲」兩種主要模式：
//   - 一般遊戲：使用 RoundDataList[0]，可包含主回合與後續消除 / 補充回合，統一以 setGameMode(normal) 顯示。
//   - 免費遊戲：若一般遊戲觸發 Scatter／免費遊戲條件，會在後續的 RoundDataList（index > 0）依序處理免費遊戲局，並以 setGameMode(free) 顯示。
// - 每個回合（主回合或額外回合）遵循固定順序：
//   setTitle → processIconData → setDetailDescription / setLineSummary → setSummary（單次 / 總贏分）→ combineOneRoundData。
// - 每一「局」（包含該局內所有回合）結束後呼叫 setRecords()；整體流程結束後以 getFinalSlotData() 輸出 AST。
//
// 2. 盤面表示與標記
// - 盤面使用 GameConfig058.ROW × GameConfig058.COLUMNS 的固定矩陣，主要來源為 roundData.IconData.ShowIconList。
// - 盤面標記層級（getProcessors）：
//   - 層 1：若 TriggerWinData.HasScatter 為真，將 ScatterWinData.Win2DPos 位置以紅色填充 `#ff0000ff` 高亮（setMark）。
//   - 層 2：若 WinData.Pos2D 存在，將所有中獎格以金色邊框 `#ffd700ff` 標註（setBorderMark）。
//   - 層 3：若 IconData.GoldOddList 有內容，使用自定義 Processor 在對應格子加上白色「x倍數」文字（text="xN"，textColor="#ffffff"），顯示圖示倍數。
// - 所有處理器會以陣列順序堆疊，最終由 processIconData 套用到整個盤面。
//
// 3. 中獎、Scatter 與免費遊戲規則
// - 一般中獎：
//   - WinData.DetailWinDataList 逐筆記錄賠率與贏分，透過 getDetailWinDescriptionList 轉為「icon × bet × 倍數 × 賠率 = 分數」格式細單。
// - Scatter 中獎：
//   - 若 TriggerWinData.ScatterWinData 存在，會另外以 getScatterWinDescription 產生一筆「Scatter 圖示 × 數量 = Scatter 贏分」細單行，並與一般中獎細單合併顯示。
// - 免費遊戲觸發：
//   - 若 TriggerWinData.InitFGCount > 0，表示本回合觸發免費遊戲，先以 getScatterTriggerSummary 產生「Scatter 圖示 × 數量 = N 免費遊戲」行，透過 setLineSummary 顯示在細單之前。
// - 免費遊戲局：
//   - 從 RoundDataList[1] 起視為免費遊戲，僅於模式切換時（gameIdx === 1）呼叫 setGameMode(free)，之後所有回合共用同一免費遊戲模式，並持續累積總贏分。
//
// 4. 消除 / 額外回合與總分累積
// - 每個 gameIdx（一般或某局免費）底下的 roundDataList 代表「該局內的所有回合」，可能包含主回合與後續消除 / 補充回合：
//   - 每個回合都會重算本回合 roundScore，並更新 currentTotalWin（跨所有局與模式持續累積）。
//   - 每回合尾端都會輸出「單次贏分」與「總贏分」，並呼叫 combineOneRoundData 收斂單回合 AST。
// - 一個 gameIdx 處理完成後呼叫 setRecords()，將該局所有回合合併為一份紀錄單位。
//
// 5. 算分與顯示
// - 回合得分 roundScore 由兩部分組成：
//   - 一般中獎：roundData.WinData.Score（若存在）。
//   - Scatter 中獎：roundData.TriggerWinData.ScatterWinData.WinScore（若存在）。
// - 總分累積與摘要顯示：
//   - currentTotalWin 會累加每個回合的 roundScore。
//   - 每回合摘要固定顯示兩行：
//     - 「單次贏分 = roundScore」。
//     - 「總贏分 = currentTotalWin」。
// - 中獎細單與摘要皆使用 SlotDataStringType（text/number/symbol/icon/line）組裝，與其他遊戲的 Slot AST 格式保持一致。
//
// 6. 擴展與自定義 Processor
// - setIconMultiplierText(goldOddList)：
//   - 回傳一個 IconDataProcessor，會對複本陣列 shallow copy 後，依 goldOddList 對應位置設定 text / textColor / textSize / textPosX / textPosY。
//   - 確保不直接修改原始 list 內容，避免影響其他 Processor 或核心邏輯。
// - 之後若遊戲擴充更多顯示需求，可仿照此模式新增 Processor，並加入 getProcessors 的返回陣列中。


# Game058 SlotDataParser058 階段結構對照表

| 階段 | 功能說明（Keyword） | 階段架構（Value） |
| --- | --- | --- |
| 階段 1 | 遊戲 058 規則：定義「規則解析器入口」與共用資料結構 | - 匯入核心 AST / 型別：`GameRecordAST`、`IconConfig`、`IconDataProcessor`、`Item`、`Line`、`SlotDataGameModeType`、`SlotDataIconData`、`SlotDataParser`、`SlotDataStringType`。<br>- 匯入遊戲 058 專用資料與設定：`GameConfig058`（ROW、COLUMNS 等）、`IconList`、`GameData058`（整體結果）、`RoundData058`、`DetailWinData058`。<br>- 定義 icon 資源常數：`export const icons: Record<number, IconConfig> = { ... }`，包含 0~10 一般圖示與 11~19 進階圖示（100~108系圖示）。<br>- 宣告主解析類別：`export class SlotDataParser058 { ... }`，內含 `currentTotalWin`、`currentRoundIndex`、`currentFGRoundIndex` 追蹤累積狀態。 |
| 階段 2 | 遊戲 058 規則：依「一般 / 免費遊戲」與 roundDataList 結構處理全流程 | - 主入口 `getSlotParser(gameResult: GameData058): GameRecordAST`：<br>  - 建立 `const parser = new SlotDataParser(gameResult.Bet);`。<br>  - 重置狀態：`currentTotalWin = 0; currentRoundIndex = 0; currentFGRoundIndex = 0;`。<br>  - 迴圈 `for (gameIdx = 0; gameIdx < RoundDataList.length; gameIdx++)` 逐局處理：<br>    - `const roundDataList = gameResult.RoundDataList[gameIdx];`。<br>    - 判斷是否為免費模式：`const isFGMode = gameIdx > 0 && gameResult.HasFG;`。<br>    - 若 `gameIdx === 0`：`parser.setGameMode(SlotDataGameModeType.normal);`。<br>    - 若 `isFGMode && gameIdx === 1`：`parser.setGameMode(SlotDataGameModeType.free); this.currentFGRoundIndex++;`。<br>- 單局內回合迴圈：<br>  - `for (roundIdx = 0; roundIdx < roundDataList.length; roundIdx++)`：<br>    - 取得 `roundData = roundDataList[roundIdx];`。<br>    - 透過 `getTitleItems(isFGMode, currentFGRoundIndex, roundIdx+1)` 產生標題（一般 / 免費 + 回合數），並 `parser.setTitle(title);`。<br>    - 每處理完一整個 roundDataList 後呼叫 `parser.setRecords();` 完成該局紀錄。<br>- 最後以 `parser.getFinalSlotData()` 與 `icons` 組成 `GameRecordAST` 回傳。 |
| 階段 3 | 遊戲 058 規則：盤面佈局與 Scatter / 中獎 / 倍數標記 | - 盤面處理：在每回合中：<br>  - `const processors = this.getProcessors(roundData, parser);`。<br>  - 呼叫 `parser.processIconData(GameConfig058.ROW, GameConfig058.COLUMNS, roundData.IconData.ShowIconList, processors);`。<br>- getProcessors(roundData, parser)：依順序堆疊多層標記：<br>  1) Scatter 標記：若 `roundData.TriggerWinData?.HasScatter` 且有 `ScatterWinData.Win2DPos`，加入 `parser.setMark(Win2DPos, "#ff0000ff")` 以紅色填充表示 Scatter 中獎位置。<br>  2) 一般中獎標記：若 `roundData.WinData?.Pos2D` 存在且非空，加入 `parser.setBorderMark(Pos2D, "#ffd700ff")` 以金色邊框突顯中獎格。<br>  3) 金色倍數文字：若 `goldOddList = roundData.IconData.GoldOddList` 存在且長度 > 0，加入 `this.setIconMultiplierText(goldOddList)`，在相對應位置加上白色 `x倍數` 文本。<br>- setIconMultiplierText(goldOddList)：
  - 建立並回傳一個 IconDataProcessor：
    - 對傳入的 `list` 做淺拷貝 `newList`。<br>    - 依索引 i，若 `goldOddList[i] > 0`：在 `newList[i]` 設定 `text = 'x' + goldOddList[i]`、`textColor = '#ffffff'`、`textSize = 1`、`textPosX = 'center'`、`textPosY = 'bottom'`。<br>    - 回傳 newList 供後續繪製使用。 |
| 階段 4 | 遊戲 058 規則：中獎細單（一般 / Scatter）與觸發行 | - 整合中獎細單：`getAllDetailDescriptionList(roundData, bet)`：<br>  - 建立 `allLines: Line[]`。<br>  - 一般中獎：若 `roundData.WinData?.DetailWinDataList` 有值，呼叫 `getDetailWinDescriptionList` 取得「icon × bet × 倍數 × 賠率 = 分數」格式的多行細單並合併。<br>  - Scatter 中獎：若 `roundData.TriggerWinData?.ScatterWinData` 存在，呼叫 `getScatterWinDescription` 產生一行「Scatter × 數量 = ScatterWinScore」細單並加入。<br>  - 最後回傳 allLines，於主流程中以 `parser.setDetailDescription(detailLines);` 顯示。<br>- 一般中獎細單 `getDetailWinDescriptionList(detailDataList, bet)`：<br>  - 每筆 DetailWinData058 顯示：`icon WinSymbolID → bet → * WinMultiplier → * WinOdd → = WinScore`。<br>- Scatter 細單 `getScatterWinDescription(scatterWinData, bet)`：<br>  - 以 Win2DPos 的欄位長度總和作為 ScatterCount，格式為：「Scatter icon × ScatterCount = WinScore」。<br>- 免費遊戲觸發行 `getScatterTriggerSummary(scatterPos2D, fgCount)`：<br>  - 同樣計算 ScatterCount，輸出：「Scatter icon × ScatterCount = fgCount 免費遊戲」，並以 `setLineSummary` 顯示在細單前方作為觸發說明。 |
| 階段 5 | 遊戲 058 規則：單次贏分 / 總贏分摘要與跨局累積 | - 回合贏分計算：在主流程中每個回合結束前：<br>  - 初始化 `roundScore = 0;`。<br>  - 若 `roundData.WinData?.Score` 存在，加入 `roundScore += WinData.Score;`。<br>  - 若 `roundData.TriggerWinData?.ScatterWinData?.WinScore` 存在，加入 `roundScore += ScatterWinData.WinScore;`。<br>- 累積總贏分：
  - `this.currentTotalWin += roundScore;` 持續跨所有 gameIdx / roundIdx 累計。<br>- 摘要顯示：每回合輸出兩行：<br>  - `['單次贏分', '=', roundScore]`。<br>  - `['總贏分', '=', currentTotalWin]`。<br>- 不特別區分一般 / 免費總贏分顯示文字，方便玩家一眼看到整個流程至今的總收益。 |
| 階段 6 | 遊戲 058 規則：Icon 資源與最終輸出 | - Icon 定義常數（icons）：<br>  - 0~10：`/images/game058/icon_00.png ~ icon_10.png`，為一般盤面圖示。<br>  - 11~19：`/images/game058/icon_100.png ~ icon_108.png`，通常對應特殊符號或加倍版圖示（具體含義依美術 / 配表而定），尺寸皆為 `152x156`。<br>- 遊戲設定常數（GameConfig058）：<br>  - `ROW`：盤面列數。<br>  - `COLUMNS`：盤面欄數。<br>- 最終輸出：在 `getSlotParser` 結尾回傳：`{ ast: parser.getFinalSlotData(), icons }`，前端可依 AST + icons 還原一般 / 免費遊戲回合的盤面、標記與細單資訊。 |
