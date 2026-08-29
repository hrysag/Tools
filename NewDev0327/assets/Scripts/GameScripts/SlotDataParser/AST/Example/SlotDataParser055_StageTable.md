// =======================
// 遊戲規則說明（Game055）
// =======================
// 1. 遊戲模式
// - 一般遊戲：第一局為一般遊戲，setGameMode('一般遊戲')，以主遊戲盤面與可能的消除額外回合組成一局。
// - 免費遊戲：由一般遊戲觸發後，後續局 setGameMode('免費遊戲')，共用同一組累積贏分與（若有）加成倍數。
//
// 2. 盤面與回合結構
// - 盤面為固定矩陣，使用 resultData[row][col]（0-based）表示圖示位置，行列數由資料決定。
// - 每局包含 1 個主回合（mainData）與 0~N 個額外回合（extraDataList）。
// - 每一個回合都遵循固定流程：
//   setTitle → processIconData → setDetailDescription → setLineSummary → combineOneRoundData。
// - 每局（主回合 + 所有額外回合）結束後呼叫 setRecords()，整個流程最後只呼叫一次 getFinalSlotData()。
//
// 3. 圖示與特殊符號
// - 一般符號：ID 0~9，依 icons 常數對應遊戲 055 的各種普通符號圖片。
// - SCATTER（ID 10）：用於觸發免費遊戲，盤面中會另外以黃色標記顯示其位置。
// - WILD（ID 11）：一般 Wild 圖示，可在盤面上被標記但不一定參與本次中獎。
// - WIN_WILD（ID 12）：有實際參與本回合中獎線的 Wild，與純裝飾的 Wild 以不同圖示區分，方便閱讀細單。
//
// 4. 免費遊戲觸發與追加規則
// - SCATTER 計算方式：將整個盤面展平成一維陣列，統計 ID = 10 的格子數量 scatterCount。
// - 若 scatterCount ≥ 3（SCATTER_STANDARD），則視為達成觸發條件，對應可獲得 8 次免費遊戲（ADD_FREE_SPIN）。
// - 一般遊戲中：
//   - 若主回合已達成條件且沒有任何額外回合，直接在主回合顯示「SCATTER × 數量 = 8 免費遊戲」。
//   - 若該局存在額外回合，則改以「最後一個額外回合」的盤面重新統計 SCATTER，決定是否觸發免費遊戲。
// - 免費遊戲中：
//   - 透過連續消除產生的額外回合累積 combo 次數，當 combo 達到 6 次（MAX_COMBO）時，加送 2 次免費遊戲（FG_ADD_FREE_SPIN）。
//   - 追加免費遊戲時，會顯示「+2 免費遊戲」的文字行。
//
// 5. 消除機制與額外回合
// - 每次消除產生的新盤面會被視為「額外回合」（extraData），標題中的回合編號從 2 起算（主回合為回合 1）。
// - 額外回合會：
//   - 依 wildPosList / winPosList 將盤面上的 Wild 分為 WILD 或 WIN_WILD。
//   - 重新統計 SCATTER 與是否在該回合觸發或追加免費遊戲。
//   - 使用 processIconData 標記中獎位置（藍色）與 Scatter 位置（黃色）。
//   - 顯示「消除獎勵 N」，其中 N 為第幾次額外回合，最多顯示到 6 層。
//
// 6. 算分與細單顯示
// - 每條中獎線的得分為：lineScore = symbolOdd × lineCount × multiplier × bet，其中 multiplier 為 0 時視為 1。
// - 細單內容會依序列出：圖示 ID、下注金額 bet、線數（若 > 1）、圖示賠率 symbolOdd、可選的倍數 multiplier，最後顯示「= lineScore」。
// - 每一回合（主回合與每個額外回合）會顯示兩行摘要：
//   - 「單次贏分」：該回合（當前盤面）的總得分。
//   - 「總贏分」：從第一局開始累積至目前所有回合的總得分。
// - 免費遊戲回合與額外回合還會顯示「累積加成倍數」與「由 SCATTER 觸發的免費遊戲資訊」，方便玩家理解額外收益來源。


# Game055 SlotDataParser055 階段結構對照表

| 階段 | 功能說明（Keyword） | 階段架構（Value） |
| --- | --- | --- |
| 階段 1 | 遊戲 055 規則：定義「規則解析器入口」與共用資料結構（對應專案 / 命名） | - 匯入核心 AST / 細單型別：`GameRecordAST`、`IconConfig`、`Item`、`Line`、`SlotDataParser`、`SlotDataStringType`。<br>- 匯入遊戲 055 專用資料模型：`SlotInfo055`（解析 buffer → `roundModelNG` / `roundModelFGList`）。<br>- 匯入基礎工具：`base64ToBinaryBuffer`（`slotData:string` → `ArrayBuffer`）；`WinLineData055`（每條中獎線資料）。<br>- 宣告主解析類別：`export class SlotDataParser055 { ... }`。<br>- 暴露統一入口：`public parser(slotData: string, bet: number, featureRatio: number): GameRecordAST`。 |


| 階段 2 | 遊戲 055 規則：依「一般遊戲 / 免費遊戲」與「主回合 + 額外回合」的回合結構處理整局流程 | - 邏輯入口：<br>  - `const buffer = base64ToBinaryBuffer(slotData);`<br>  - `const slotInfo = new SlotInfo055(buffer, bet);`<br>  - `const roundDataList = [slotInfo.roundModelNG, ...slotInfo.roundModelFGList];`<br>  - `const slotDataParser = new SlotDataParser(bet);`<br>- 依據遊戲模式切換：<br>  - `if (roundDataIndex === 0) slotDataParser.setGameMode('一般遊戲');`<br>  - `else if (roundDataIndex === 1) slotDataParser.setGameMode('免費遊戲');`<br>- 回合結構（對應「主回合 + 0~N 個額外回合」規則）：<br>  - 先處理 `roundData.mainData`（主回合）。<br>  - 再用 `for (let extraDataIndex = 0; extraDataIndex < roundData.extraDataList.length; extraDataIndex++) { ... }` 依序處理額外回合。<br>- 每局（主回合 + 額外回合）結束：`slotDataParser.setRecords();`。<br>- 所有局完成後取得規則 AST：`const finalSltData = slotDataParser.getFinalSlotData();` 並組成 `GameRecordAST` 回傳。 |


| 階段 3 | 遊戲 055 規則：依盤面矩陣結果標記「中獎格、Scatter、Wild / WinWild」，對應規則說明中的盤面顯示 | 
- 主回合盤面處理：<br>  - `const mainData = roundData.mainData;`<br>  
- `const resultData = mainData.resultData; // number[][]`<br>  
- `const mainScatterData = this.getScatterData(resultData);`<br>  
- `const haveAddFreeSpin = mainScatterData.freeSpin > 0 && roundData.extraDataList.length === 0;`（一般遊戲且無額外回合時，用主盤面決定是否觸發免費遊戲）。<br>  
- `const scatterPosList = haveAddFreeSpin ? this.getWinScatterPosList(resultData) : [];`（對應規則中「盤面重新統計 SCATTER」）。<br>  
- `const processList = [ slotDataParser.setMark(mainData.winPosList, "#04c7f8ff"), slotDataParser.setMark(scatterPosList, "#eeff00ff") ];`<br>  
- `slotDataParser.processIconData(resultData[0].length, resultData.length, resultData.flat(), processList);`（依列數 / 行數繪製盤面與標記）。<br>- 額外回合盤面與 Wild 分類：<br> 
- `const resultData = this.getExtraData(extraData.resultData, extraData.wildPosList, extraData.winPosList);`（將實際參與中獎的 Wild 轉為 `WIN_WILD_SYMBOL`）。<br>  
- `const scatterData = this.getScatterData(resultData);`<br>  
- `const haveAddFreeSpin = roundData.isFG ? extraDataIndex + 1 >= MAX_COMBO : scatterData.freeSpin > 0 && extraDataIndex === roundData.extraDataList.length - 1;`（免費/一般遊戲判斷是否追加免費局）。<br>  
- `const scatterPosList = haveAddFreeSpin ? this.getWinScatterPosList(resultData) : [];`<br> 
- `const processList = [ slotDataParser.setMark(extraData.winPosList, "#04c7f8ff"), slotDataParser.setMark(scatterPosList, "#eeff00ff") ];`<br>  
- `slotDataParser.processIconData(resultData[0].length, resultData.length, resultData.flat(), processList);` |


| 階段 4 | 遊戲 055 規則：依「線數 × 賠率 × 倍數 × 下注」計算每條中獎線分數並輸出細單 | 
- 細單產生入口：`this.getDetailDescriptionList(winLineDataList, multiplier, bet);` → `slotDataParser.setDetailDescription(detailData);`。<br>
- 每條中獎線 `WinLineData055` 對應遊戲規則中的「圖示 / 線數 / 賠率 / 倍數 / 最終分數」：<br>  
- 基本項目：`[SlotDataStringType.icon, lineData.symbolID]`、`[SlotDataStringType.number, bet]`。<br>  
- 若有多條線：`if (lineData.lineCount > 1) { '*' + lineData.lineCount }`。<br>  
- 賠率：`[SlotDataStringType.number, lineData.symbolOdd]`。<br>  
- 若有加成倍數：`if (multiplier > 1) { '*' + multiplier }`。<br>
- 規則對應的算分公式：<br>  - `const multiplierStandard = multiplier > 0 ? multiplier : 1;`<br> 
- `const lineScore = (lineData.symbolOdd * lineData.lineCount * multiplierStandard * bet).fixed();`<br>  
- 最後輸出：「icon × bet × (lineCount) × symbolOdd × (multiplier) = lineScore」。 |

| 階段 5 | 遊戲 055 規則：顯示「單次贏分 / 總贏分」、連擊消除層數與免費遊戲追加（含 MAX_COMBO 規則） | 
- 累積得分（對應規則中「單次贏分 / 總贏分」）：<br>  
- `let totalScore = 0;`<br>  
- 主回合：`totalScore += mainData.winScore;`<br>  
- 額外回合：`totalScore += extraData.winScore;`<br>  
- `slotDataParser.setLineSummary(this.getScoreLine(mainData.winScore, true)); // 單次贏分`<br>  
- `slotDataParser.setLineSummary(this.getScoreLine(totalScore, false)); // 總贏分`<br>
- 連擊 / 消除階層獎勵（對應規則中「消除獎勵 N，最多 6 層」）：<br>  
- 額外回合：`const eliminateRewards = this.getEliminateRewardLine(extraDataIndex + 1);`<br>  - `slotDataParser.setLineSummary(eliminateRewards);`<br>-
 免費遊戲中的累積倍數（對應「累積加成倍數」規則）：<br>  
- 主回合：`if (roundData.isFG) { slotDataParser.setLineSummary(this.getMultiplierLine(mainData.multiplier)); }`<br>  
- 額外回合：`slotDataParser.setLineSummary(this.getMultiplierLine(extraData.multiplier));`<br>
- 免費遊戲觸發 / 追加規則（對應 SCATTER 與 MAX_COMBO）：<br>  
- 一般遊戲，在主回合或「最後一個額外回合」達到 `scatterCount >= SCATTER_STANDARD`：<br>    
- `this.getAddFreeSpinLine(false, ADD_FREE_SPIN, scatterData.count); // SCATTER * 數量 = 免費遊戲`<br>  
- 免費遊戲中，當 `combo >= MAX_COMBO (6)`：<br>    
- `this.getAddFreeSpinLine(true, FG_ADD_FREE_SPIN); // +2 免費遊戲`<br>
- 每一回合結尾收斂資料：`slotDataParser.combineOneRoundData();`（對應一個回合的細單與摘要）。 |

| 階段 6 | 遊戲 055 規則：對應每個符號 ID → 圖示資源與尺寸（一般 / SCATTER / WILD / WIN_WILD） | - Icon 定義常數：<br>  
- `const icons: Record<number, IconConfig> = { ... };`<br>  
- 一般符號 `0~9`：`/images/game055/Symbol_0.png ~ Symbol_9.png`，`112x112`。<br>  
- `SCATTER_SYMBOL = 10`：`/images/game055/Symbol_10.png`，`176x176`。<br>  
- `WILD_SYMBOL = 11`：`/images/game055/Symbol_11.png`，`144x144`。<br>  
- `WIN_WILD_SYMBOL = 12`：`/images/game055/Symbol_11_Wild.png`，`144x144`。<br>
- 其它規則常數（與遊戲規則中 SCATTER / 免費局 / MAX_COMBO 對應）：<br>  
- `const SCATTER_STANDARD = 3;`（SCATTER 達 3 格以上觸發）。<br>  
- `const ADD_FREE_SPIN = 8;`（一般遊戲觸發免費遊戲次數）。<br>  
- `const FG_ADD_FREE_SPIN = 2;`（免費遊戲中 MAX_COMBO 時追加免費局）。<br>  
- `const MAX_COMBO = 6;`（免費遊戲中連續消除次數上限）。<br>
- 最終輸出：在 `parser()` 中回傳：`return { ast: finalSltData, icons };` 讓前端以 AST + `icons` 對照實際顯示圖示。 |
