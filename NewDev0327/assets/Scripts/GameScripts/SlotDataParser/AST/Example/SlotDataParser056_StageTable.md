// =======================
// 遊戲規則說明（Game056）
// =======================
// 1. 遊戲模式與流程總覽
// - 本遊戲分為「一般遊戲 Normal」與「免費遊戲 Free」兩種模式。
// - 一般遊戲：若有 ngRoundData，會先以 Normal 模式執行一整個 GameRound（包含該局內所有連消盤面 boards）。
// - 免費遊戲：當一般遊戲結束且 Scatter 達成門檻時，依 SCATTER_TO_FREE_GAMES 表給出對應的免費遊戲局數；
//   後續依序處理每一局 fgRoundData（免費遊戲第 1 局、第 2 局...），每一局同樣由多個 boards 構成連消流程。
// - convertToGameRecord 會依序處理：一般遊戲全部盤面 → 免費遊戲全部盤面，最後統一輸出 GameRecordAST。
//
// 2. 盤面佈局與圖示尺寸
// - 每一盤為 REEL_AMOUNT 軸、固定 Reel 高度為 60 的縱向佈局。
// - 各軸上的 symbols 數量可為 2、3、4、5 格，實際長度由 reel.symbols.length 動態決定；
//   Reel 高度 60 會依 symbols 數量平均切分（2 格=30、3 格=20、4 格=15、5 格=12）。
// - iconConfig 將 SymbolID 0~9 依「盤面高度」映射到不同圖示資源：
//   - 0~9：對應 5 格高度 symbols（每格 12 高）。
//   - 10~19：對應 4 格高度 symbols（每格 15 高）。
//   - 20~29：對應 3 格高度 symbols（每格 20 高）。
//   - 30~39：對應 2 格高度 symbols（每格 30 高）。
// - createIconDataFromBoard 會依實際 symbols 長度自動選擇對應 icon ID，並計算在 Reel 上的 y 起點與高度，
//   讓不同高度的圖示可以整齊排列在同一個 60 高度的 Reel 上。
//
// 3. 連消結構與中獎標記
// - 每一個 GameRound 內的 boards 陣列代表「同一局內的連續消除盤面」。
// - processGameRound 會依 boardIndex 由前到後處理每一個盤面，並在每個盤面處理完後呼叫 combineOneRoundData() 形成一回合資料。
// - processSingleBoard 中：
//   - 依遊戲模式設定標題：
//     - Normal：顯示「一般遊戲 - 回合 N」，N 由 boardIndex + 1 計算。
//     - Free：顯示「免費遊戲X - 回合 N」，X 為免費遊戲第幾局（roundIndex），N 為該局內第幾個連消盤面。
//   - 建立 SlotDataIconData 清單後，透過 applyWinMarks 套用中獎標記：
//     - 將 winData.pos 轉成 (reelIndex, symbolIndex)，記錄成 winPositionMap。
//     - 對每一個 iconData 推回原本的 symbolIndex，若對應在 map 中則標記 mark=true、markColor="#FF0000"（紅色）。
// - 若為此 GameRound 的最後一個 board，且 Scatter 觸發免費遊戲門檻，
//   則會額外在 Scatter 位置套用 markColor="#66FFFF" 的標記，與一般中獎紅色高亮做出區隔。
//
// 4. Scatter 與免費遊戲觸發
// - 每一個 GameRound 的最後一個 board（isLastBoard=true）會額外檢查 Scatter 個數：
//   - 透過 board.getScatterCount() 取得本局 Scatter 數量。
//   - 若在 SCATTER_TO_FREE_GAMES 範圍內且對應免費局數 > 0，代表本局觸發免費遊戲。
// - checkAndSetFreeGameTrigger：
//   - 會新增一行摘要：「(Scatter 圖示) * 數量 = N 免費遊戲」，清楚說明當前 Scatter 給出多少免費遊戲局數。
//   - 此時 applyWinMarks 會為所有 Scatter 符號加上 markColor="#66FFFF" 的標記，僅在最後一個 board 且觸發免費遊戲時才會出現。
// - 若後續存在 fgRoundData，convertToGameRecord 會先將模式切換為 Free，依序處理每一局免費遊戲，
//   並在標題與總分顯示中使用「免費遊戲」字樣與一般遊戲區分。
//
// 5. 得分計算與細單顯示
// - 單盤面得分：
//   - board.getOdds() 代表該盤面的總倍數（已含 board.multiplier 加成），
//     最終單次贏分為：下注額 * board.getOdds()。
//   - processSingleBoard 會以「單次贏分 = 金額」的方式顯示該盤面總得分。
// - 中獎詳情 setWinDetails：
//   - 若無任何 winData，直接 setDetail(false) 表示無細單。
//   - 若有中獎，對每一筆 win 建立一行詳情：
//     - 基礎賠率 baseOdds = win.odd / 組合數(oneMatchPos.length)。
//     - 組合數 combinationCount = oneMatchPos.length。
//     - 最終得分 finalScore = 下注額 * 組合數 * 基礎賠率 * board.multiplier。
//     - 顯示格式：圖示 * 下注額 * 組合數 * 賠率 * 加成倍數 = 金額。
// - 加成倍數顯示：每個盤面先以一行「加成倍數 = board.multiplier」說明當前盤面的倍率，
//   再搭配中獎詳情與單次贏分，讓玩家理解倍率如何影響實際得獎金額。
//
// 6. 總分累積與紀錄單位
// - accumulatedScore 用於追蹤「本次遊戲流程（一般 + 免費）的累積總贏分」，會隨每個盤面的單次得分往上累積。
// - 在一般遊戲中：
//   - 每個盤面都會顯示「總贏分 = accumulatedScore」，代表至目前為止的一般遊戲累積得分（含當前盤面）。
// - 在免費遊戲中：
//   - 每個盤面都會顯示「免費遊戲總贏分 = accumulatedScore」，
//     累積的是整個流程中包含一般 + 免費遊戲在內的持續總和（convertToGameRecord 過程中不會重置）。
// - processGameRound 每完成一個 GameRound（一般或某局免費遊戲的所有連消盤面）後呼叫 setRecords()，
//   將該回合的所有盤面（每個 board 的 oneRound）合併為一個獨立紀錄。
// - convertToGameRecord 最後以 getFinalSlotData() 輸出所有回合紀錄，再搭配 iconConfig 一併回傳給前端顯示。


# Game056 SlotDataParser056 階段結構對照表

| 階段 | 功能說明（Keyword） | 階段架構（Value） |
| --- | --- | --- |
| 階段 1 | 遊戲 056 規則：定義「規則解析器入口」與共用資料結構（對應專案 / 命名） | - 匯入核心 AST / 細單型別與工具：`SlotDataParser`（共用規則 AST 建構器）、`SlotDataBoardData`、`SlotDataIconData`、`SlotDataGameModeType`、`SlotDataStringType` 等。<br>- 匯入遊戲 056 專用資料模型與常數：`GameResultGame056`（整體結果）、`GameRoundGame056`、`BoardGame056`、`SymbolID`、`REEL_AMOUNT`、`ICON_AMOUNT_MAX`、`SCATTER_TO_FREE_GAMES`。<br>- 匯入 Buffer 相關工具：`base64ToBinaryBuffer`（slotData:string → BinaryBuffer）、`BinaryBuffer`（解析壓縮資料）。<br>- 宣告主解析函式入口：`export function slotDataParser056(slotData: string, bet: number, featureRatio: number = 1): string { ... }`。<br>- 在入口中完成：`const binaryBuffer = base64ToBinaryBuffer(slotData);` → `unzipData` → `dataBuffer` → `GameResultGame056.parseGameResultData(dataBuffer)`。<br>- 建立專用解析類別：`const parser = new SlotDataParserGame056((bet / featureRatio).fixed());` 並呼叫 `parser.convertToGameRecord(gameResultData)` 產出 `GameRecordAST`，最後以 `JSON.stringify(gameRecord)` 回傳。 |


| 階段 2 | 遊戲 056 規則：依「一般 / 免費遊戲」與 GameRound 結構處理全流程 | - convertToGameRecord 為本遊戲的主流程：<br>  - 先呼叫 `this.resetParser()` 重置內部 AST 狀態（steps / oneRound / allRoundData / accumulatedScore）。<br>  - 若存在 `gameResult.ngRoundData`：<br>    - `this.setGameMode(SlotDataGameModeType.normal);`<br>    - `this.processGameRound(gameResult.ngRoundData, SlotDataGameModeType.normal, 0);`（處理一般遊戲所有連消盤面）。<br>  - 若存在 `gameResult.fgRoundData` 且長度 > 0：<br>    - `this.setGameMode(SlotDataGameModeType.free);`<br>    - `gameResult.fgRoundData.forEach((fgRound, index) => { this.processGameRound(fgRound, SlotDataGameModeType.free, index + 1); });`（依序處理每一局免費遊戲）。<br>- 每一個 GameRound 完成後：`this.setRecords();`，將該局（一般 / 某局免費遊戲）底下所有 boards 合併為一個紀錄單位。<br>- 所有 GameRound 處理完畢後：`const finalSlotData = this.getFinalSlotData();` 並回傳 `{ ast: finalSlotData, icons: this.getIconConfig() }` 作為前端顯示依據。 |


| 階段 3 | 遊戲 056 規則：依 Reel 佈局建立盤面 Icon，並標記「中獎格 / Scatter」 | - Reel 與圖示基本設定：<br>  - `protected reelHeight = 60;` 固定 Reel 高度。<br>  - `iconConfig` 事先定義 0~39 各 ID 對應圖片路徑與顯示尺寸，依 Reel 上 symbols 數量（2/3/4/5）選擇不同版型。<br>- createIconDataFromBoard：從 `BoardGame056` 直接建立 `SlotDataIconData[]`：<br>  - 迴圈 `reelIndex` 0~`REEL_AMOUNT-1`，取得 `const reel = board.reels[reelIndex];`。<br>  - `const symbolCount = reel.symbols.length;`、`const iconSpacing = this.reelHeight / symbolCount;`（2→30、3→20、4→15、5→12）。<br>  - 逐一處理每個 symbol：計算 `startPos = symbolIndex * iconSpacing;`，依 symbolCount 決定實際 `iconData.icon`：<br>    - 2 格：`SymbolID + 30`；3 格：`SymbolID + 20`；4 格：`SymbolID + 10`；5 格：`SymbolID`。<br>  - 設定 `iconData.x = reelIndex + 1; iconData.y = startPos + 1; iconData.width = 1; iconData.height = iconSpacing; iconData.z = 1;`，推入陣列。<br>- applyWinMarks：為 Icon 套用中獎 / Scatter 標記：<br>  - 先以 `board.winData` 建立 `winPositionMap`（以 `reelIndex-symbolIndex` 字串標記）。<br>  - 反推每個 `iconData` 對應的 symbolIndex：依 `reel.symbols.length` 與 `iconSpacing`，`symbolIndex = floor((iconData.y - 1) / iconSpacing)`。<br>  - 若命中 `winPositionMap`：`iconData.mark = true; iconData.markColor = "#FF0000";`（紅色中獎高亮）。<br>  - 若為最後一個 board 且 Scatter 觸發免費遊戲：
    - 透過 `board.getScatterCount()` 與 `SCATTER_TO_FREE_GAMES` 判斷是否有免費局數。<br>    - 對所有 `SymbolID.Scatter` 位置額外標記 `iconData.markColor = "#66FFFF";`，只在觸發免費遊戲的那一盤顯示藍綠色高亮。 |


| 階段 4 | 遊戲 056 規則：依「押注 × 組合數 × 賠率 × 倍數」計算每盤面與細單 | - 單盤面總得分：<br>  - `const boardScore = board.getOdds() * this.bet;`（`getOdds()` 已內含 `board.multiplier`）。<br>  - 以摘要行顯示：「單次贏分 = boardScore」。<br>- setWinDetails：建立每條中獎的細單內容：<br>  - 無中獎：`this.setDetail(false);`，不顯示細單。<br>  - 有中獎：逐筆 win 建立一行 `details`：<br>    - `const baseOdds = win.odd / win.oneMatchPos.length;`（單一組合基礎賠率）。<br>    - `const combinationCount = win.oneMatchPos.length;`（中獎組合數）。<br>    - `const finalScore = this.bet * combinationCount * baseOdds * board.multiplier;`。<br>  - 顯示順序：<br>    - `icon`（win.winSymbolID 圖示）<br>    - `number`（下注額 bet）<br>    - `* combinationCount * baseOdds * board.multiplier`<br>    - `= finalScore`。<br>  - 具體格式對應規則：「圖示 * 下注額 * 組合數 * 賠率 * 加成倍數 = 金額」。 |


| 階段 5 | 遊戲 056 規則：顯示「加成倍數 / 單次贏分 / 總贏分」與免費遊戲觸發摘要 | - processSingleBoard 負責單一盤面顯示與記錄：<br>  - 標題：依 `gameMode` 與 `roundIndex` / `boardIndex` 組成「一般遊戲 - 回合 N」或「免費遊戲X - 回合 N」。<br>  - 建立盤面：`const boardData = new SlotDataBoardData(REEL_AMOUNT, this.reelHeight, iconDataList);` → `this.createBoard("board", boardData)` 推入 `oneRound`。<br>  - 顯示加成倍數：`加成倍數 = board.multiplier`。<br>  - 呼叫 `this.setWinDetails(board);` 產生中獎細單。<br>  - 若為最後一個 board：呼叫 `this.checkAndSetFreeGameTrigger(board);` 顯示「Scatter * 數量 = N 免費遊戲」行。<br>  - 顯示單次贏分：`單次贏分 = boardScore.fixed()`。<br>  - 以 `this.accumulatedScore += boardScore;` 累計總分，並依模式顯示：<br>    - Normal：`總贏分 = accumulatedScore`。<br>    - Free：`免費遊戲總贏分 = accumulatedScore`。<br>  - 每處理完一個 board 呼叫 `this.combineOneRoundData();` 收斂該盤面資料。<br>- processGameRound 在迴圈外呼叫 `this.setRecords();`，對應「一局（一般或免費）結束後收斂所有盤面」。 |


| 階段 6 | 遊戲 056 規則：對應每個 SymbolID → 圖示資源與高度版本（2/3/4/5 格） | - Icon 定義常數（iconConfig）：<br>  - 0~9：`/images/game056/icon_00_01.png ~ icon_09_01.png`，高度約 106，對應 symbols 長度為 5、在 Reel 上間隔 12。<br>  - 10~19：`/images/game056/icon_00_02.png ~ icon_09_02.png`，高度約 133，對應 symbols 長度為 4、在 Reel 上間隔 15。<br>  - 20~29：`/images/game056/icon_00_03.png ~ icon_09_03.png`，高度約 177，對應 symbols 長度為 3、在 Reel 上間隔 20。<br>  - 30~39：`/images/game056/icon_00_04.png ~ icon_09_04.png`，高度約 265，對應 symbols 長度為 2、在 Reel 上間隔 30。<br>- 其它規則相關常數：<br>  - `SCATTER_TO_FREE_GAMES`：索引為 Scatter 數量、值為對應可獲得免費遊戲局數，供 `checkAndSetFreeGameTrigger` 使用。<br>  - `SymbolID.Scatter`：代表盤面上的 Scatter 符號，會在觸發免費遊戲時被標上藍綠色高亮。<br>- 最終輸出：`convertToGameRecord` 中回傳 `{ ast: finalSlotData, icons: this.getIconConfig() }`，讓前端以 AST + iconConfig 對照實際顯示各高度版本圖示與盤面。 |
