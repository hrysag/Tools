// =======================
// 遊戲規則說明（Game1025）
// =======================
// 1. 遊戲模式與整體流程
// - 本遊戲包含「一般遊戲」與「獎勵遊戲」兩種模式：
//   - 一般遊戲：使用 GameData1025.ng (RoundResult[])，每一個 RoundResult 代表一個回合；
//     全部 RoundResult 組成一局，一局結束時呼叫 setRecords() 紀錄。
//   - 獎勵遊戲：由一般遊戲回合觸發（isInBonus=true），對應 GameData1025.bg 的多局獎勵資料，
//     每一個 bg[i] (RoundResult[]) 代表一局獎勵遊戲，跑完一局同樣呼叫 setRecords()。
// - 每一個「回合」（不論一般或獎勵）都依固定順序處理：
//   setTitle → processIconData → setDetail / setDetailDescription → setSummary → combineOneRoundData。
// - 切換模式與局界線：
//   - 一般遊戲中，若某回合 RoundResult.isInBonus===true，會以 ngInBGParser 將該回合作為
//     「觸發獎勵的最後一般回合」，強制結束本局一般遊戲並呼叫 setRecords()；
//   - 隨後以 bgParser 依序處理所有獎勵局 (GameData1025.bg)，每局結束都呼叫 setRecords()；
//   - 若後續仍有尚未處理的一般局資料，會再回到 ngParser，繼續以一般模式顯示後續回合。
//
// 2. 盤面結構與標記
// - 盤面使用 Config1025.ICON_AMOUNT × Config1025.REEL_AMOUNT 的固定矩陣（3 列 × 5 軸，共 15 格）。
// - RoundResult.result 以一維陣列表示盤面，依 "欄優先" 方式映射為 [reel][row] 的 2D 位置：
//   - convertIconPosInToReelPos(iconPos) 將一維 index 轉為 [[rowIndex...], ...] 的二維陣列。
// - 一般遊戲：
//   - ngParser：
//     - 將 RoundResult.winIconPos 轉為 winIcon2DPos，作為中獎位置。
//     - processIconData(Config1025.ICON_AMOUNT, Config1025.REEL_AMOUNT, result, [setMark(winIcon2DPos, "#FF0000")])。
//   - ngInBGParser（觸發獎勵的最後一般回合）：
//     - 掃描當前盤面 result，找出所有 SymbolType.Bonus 的 index，組成 winIconPos。
//     - 同樣透過 convertIconPosInToReelPos 轉為 winIcon2DPos，並以 setMark(winIcon2DPos, "#FF0000")
//       將所有 Bonus 圖示位置標記為紅色，清楚顯示觸發獎勵的 Scatter/Bonus。
// - 獎勵遊戲：
//   - bgParser：
//     - 將每個獎勵回合 currentData.winIconPos 轉為 winIcon2DPos，並以 setMark(winIcon2DPos, "#FF0000")
//       標記中獎位置。
//     - 額外透過 addIconList 在同一盤面 z=2 圖層增加多個倍數圖示，顯示每個位置的倍數資訊。
//
// 3. 一般遊戲：連線獎勵與獎勵觸發
// - ngParser（一般遊戲主流程）：
//   - 迴圈從 ngCount 開始處理 GameData1025.ng：
//     - 若遇到 data[i].isInBonus 且 i !== ngCount，則代表中間有一般回合後觸發獎勵：
//       - 先呼叫 ngInBGParser(data, i) 將第 i 回合作為「觸發獎勵的回合」，結束當前一般局；
//       - 隨後由 parser() 外層流程負責切換到 bgParser 處理獎勵局。
//     - 一般中獎回合：
//       - 統計當前回合得分：totalWin += data[i].score。
//       - 由 winDataList 取出：
//         - winIconSymbolList：每條中獎線的圖示 ID。
//         - odd：每條中獎線的賠率 (winOdds.fixed())。
//         - winLineID：每條中獎線的線號。
//       - 呼叫 setTitle 顯示「一般遊戲 - 回合 X」。
//       - 呼叫 processIconData 標記中獎位置，再以 setDetail(true, { winIconSymbolList, lineID, odds })
//         輸出線獎細單（使用 SlotDataParser 的內建規則格式）。
//       - 透過兩行 setSummary 顯示：
//         - 單次贏分 = data[i].score。
//         - 總贏分 = totalWin（從遊戲開始累計）。
//       - 最後 combineOneRoundData() 將本回合收斂為一個 AST 回合單位。
// - ngInBGParser（一般遊戲中觸發獎勵的最後一回合）：
//   - 僅顯示 Bonus 圖示與獎勵觸發摘要，不顯示中獎線細單：
//     - 必要標題：「一般遊戲 - 回合 X」。
//     - 盤面：標記所有 Bonus 圖示位置（紅色），凸顯觸發點。
//     - 摘要行：
//       - 第一行：Bonus 圖示 × 數量 = 「獎勵遊戲」，說明本回合觸發了獎勵模式。
//       - 第二、三行：單次贏分 = 0，總贏分 = totalWin（一般遊戲累計分數保持不變）。
//   - combineOneRoundData() 後，不在此處呼叫 setRecords()，由 parser() 外層在切換模式時處理局界線。
//
// 4. 獎勵遊戲：倍數圖示與細單
// - bgParser 負責完整處理所有獎勵局 (GameData1025.bg)：
//   - 外層以 bgRoundCount 控制目前已處理到第幾個 bg 局，每局開始前先 setGameMode("獎勵遊戲")。
//   - 每局中依序處理 data[i][j]：
//     - 更新分數：
//       - this.totalWin += currentData.score（全流程總贏分）。
//       - bgTotalWin += currentData.score（本次獎勵遊戲流程累計贏分）。
//     - 盤面與標記：
//       - 將 currentData.winIconPos → convertIconPosInToReelPos → winIcon2DPos。
//       - 以 setMark(winIcon2DPos, "#FF0000") 高亮所有中獎位置。
//       - 透過 getAddIconList(winPosList, multiplierPos) 計算需疊加的倍數圖示：
//         - 針對 multiplierPos (round.multiplierList)，只取非 0 的位置 i：
//           - 若該位置也在 winPosList：使用 Config1025.MULTIPLE_BIG_LIST 中對應倍數；
//           - 否則使用 Config1025.MULTIPLE_BET_LIST 中對應倍數；
//         - 組成 addIconList[0]（位置索引）與 addIconList[1]（倍數 Icon ID）。
//       - 呼叫 addIconList(2, ICON_AMOUNT, addIconList[0], addIconList[1]) 在 z=2 圖層加上倍數圖示，
//         使獎勵遊戲盤面同時顯示中獎位置與倍率圖示。
//     - 細單 getDetailDescriptionList(winDataList, bet)：
//       - 對每條 winData：再依其中的 multiplierData（倍數分布）展開多行細單：
//         - 每行格式為：
//           - icon winIconSymbolID
//           - number bet
//           - symbol "*"
//           - number winOdds.fixed()
//           - symbol "*"
//           - number multiplier
//           - symbol "*"
//           - number combination
//           - symbol "="
//           - number (winOdds * bet * multiplier * combination).fixed()
//       - 最終以 setDetailDescription(descriptionList) 顯示所有獎勵細項。
//     - 摘要行：
//       - 單次贏分 = currentData.score。
//       - 獎勵遊戲總總贏分 = bgTotalWin（目前為止此輪獎勵遊戲的累積）。
//       - 總贏分 = this.totalWin（包含所有一般與獎勵回合的累積）。
//     - combineOneRoundData() 將該獎勵回合收斂為 AST 回合。
//   - 每處理完一個 bg[i]（一整局獎勵遊戲）便呼叫 setRecords()，代表結束一局獎勵遊戲記錄。
//   - 若 data[i].length === 1，表示本輪獎勵遊戲只有一個回合，更新 bgRoundCount 並提前結束此次 bgParser。
//
// 5. 摘要與模式切換
// - 總體摘要邏輯：
//   - 一般與獎勵共用 totalWin 作為整個遊戲流程的累積贏分來源。
//   - 一般遊戲中，每回合顯示：
//     - 單次贏分 = 該回合 score。
//     - 總贏分 = 所有已完成回合分數總和（含之前的獎勵局）。
//   - 獎勵遊戲中：
//     - 額外維護 bgTotalWin 作為當前獎勵遊戲流程小計，在摘要中以「獎勵遊戲總總贏分」顯示。
// - 模式切換：
//   - parser() 入口函式中依以下順序執行：
//     1) 若第一個 ng[0].isInBonus 為 true：
//        - 以 setGameMode("一般遊戲") 並呼叫 ngInBGParser 處理觸發回合，立刻 setRecords() 結束一般局。
//     2) 若非立即進入獎勵：
//        - 先以 ngParser 處理完整的一般遊戲局（期間若中途遇到 isInBonus 會呼叫 ngInBGParser 並提早結束）。
//     3) 之後以迴圈依序處理所有獎勵局：
//        - 每次呼叫 bgParser 處理一段獎勵資料，結束後 setRecords()；
//        - 再次呼叫 ngParser 處理尚未展示的一般遊戲回合，直到 ng 資料全部用盡。
//
// 6. Icon 與資源
// - icons 常數定義 Game1025 用到的所有圖示資源與尺寸：
//   - 0~9：一般圖示（152×156），對應 Config1025.SYMBOL_LIST 中各種角色與符號。
//   - 10：Bonus 符號（176×176），用於一般遊戲中觸發獎勵遊戲的圖示。
//   - 11：額外倍數圖示（144×144），於獎勵遊戲中由 addIconList 疊加在中獎位置上顯示倍率。
// - 最終輸出：parser() 最後回傳 { ast: this.dataParser.getFinalSlotData(), icons }，
//   由前端依據 AST + icons 重建 Game1025 的一般 / 獎勵遊戲盤面與注單細節。


# Game1025 SlotDataParser1025 階段結構對照表

| 階段 | 功能說明（Keyword） | 階段架構（Value） |
| --- | --- | --- |
| 階段 1 | 遊戲 1025 規則：定義「規則解析器入口」與共用資料結構 | - 匯入核心 AST / 型別：GameRecordAST、IconConfig、Line、SlotDataParser、SlotDataStringType。<br>- 匯入遊戲資料模型與配置：GameData1025、RoundResult、WinData、Config1025。<br>- 定義 icon 資源常數：export const icons: Record<number, IconConfig> = { 0~11 }，涵蓋一般圖示與 Bonus / 倍數圖示。<br>- 宣告主解析類別：class SlotDataParser1025 { ... }，主入口 parser(gameData: GameData1025, bet: number): GameRecordAST 內部建立 new SlotDataParser(bet)。 |
| 階段 2 | 遊戲 1025 規則：一般 / 獎勵遊戲回合與模式切換結構 | - parser() 中：<br>  - 根據 ng[0].isInBonus 決定起始流程：
    - 若一開始即觸發獎勵：setGameMode("一般遊戲") → ngInBGParser(ng, 0) → setRecords() 結束第一局一般遊戲。<br>    - 否則：呼叫 ngParser(ng) 先跑完整局一般遊戲（期間可能中途觸發獎勵並由 ngInBGParser 提前結束）。<br>  - 計算 bgCount = ng 中 isInBonus 為 true 的次數，作為後續獎勵局數量依據。<br>  - 之後以迴圈依序處理：每次先 bgParser(bg, bet) 處理一段獎勵局，接著再 ngParser(ng) 把尚未顯示的一般回合跑完，如此交錯直到一般與獎勵資料都用盡。<br>- ngParser：
    - 設定模式 setGameMode("一般遊戲")。<br>    - 迴圈 i=ngCount..：
      - 若 data[i].isInBonus 且 i!==ngCount：呼叫 ngInBGParser(data, i) 標記觸發回合，並提前結束本局一般遊戲。<br>      - 否則視為一般中獎或未中獎回合，正常顯示盤面 / 細單 / 摘要。<br>    - 完成後 setRecords() 結束一局一般遊戲。<br>- bgParser：
    - 以 setGameMode("獎勵遊戲") 切換模式。<br>    - 外層 i 代表第幾局獎勵遊戲，內層 j 代表該局的第幾回合，全部處理完後 setRecords() 結束該局獎勵遊戲。 |
| 階段 3 | 遊戲 1025 規則：盤面規格與中獎 / Bonus 標記 | - 盤面為 3×5 固定矩陣：row = Config1025.ICON_AMOUNT、col = Config1025.REEL_AMOUNT。<br>- 一般遊戲 ngParser：
  - 使用 convertIconPosInToReelPos(winIconPos) 將一維位置轉為 winIcon2DPos，作為中獎標記位置。<br>  - processIconData(row, col, result, [ setMark(winIcon2DPos, "#FF0000") ])：以紅色填滿中獎位置格子。<br>- 觸發獎勵回合 ngInBGParser：
  - 重新掃描盤面 result，收集所有 SymbolType.Bonus 的位置作為 winIconPos。<br>  - 將其轉成 winIcon2DPos 後，以 setMark(winIcon2DPos, "#FF0000") 顯示所有 Bonus 圖示位置，讓玩家一眼看出觸發點。<br>- 獎勵遊戲 bgParser：
  - 同樣利用 winIcon2DPos 標記中獎圖示，並再疊加 addIconList(2, ICON_AMOUNT, posList, multiplierList)，在 z=2 圖層放上對應倍數圖示，強調倍率資訊。 |
| 階段 4 | 遊戲 1025 規則：中獎細單（一般連線 / 獎勵倍數分布） | - 一般遊戲 ngParser：
  - 使用 setDetail(isWin, { winIconSymbolList, lineID, odds }) 由 SlotDataParser 內部產生線獎細單，格式為「圖示 × 下注額 × 賠率 × (線數或組數) = 贏分」。<br>- 獎勵遊戲 bgParser：
  - getDetailDescriptionList(winDataList, bet)：
    - 每條 winData 可能包含多筆 multiplierData（倍數分布），對每筆產生一行 Line：
      - icon winIconSymbolID → number bet → symbol "*" → number winOdds.fixed() → symbol "*" →
        number multiplier → symbol "*" → number combination → symbol "=" →
        number (winOdds * bet * multiplier * combination).fixed()。<br>  - 最終以 setDetailDescription(descriptionList) 顯示所有獎勵細單，讓玩家清楚看到每種圖示在不同倍數與組數下的實際得分。 |
| 階段 5 | 遊戲 1025 規則：摘要顯示與累積贏分 | - 共用變數 totalWin：
  - 在 ngParser 與 bgParser 中，皆以 totalWin 累計所有回合的得分（一般 + 獎勵）。<br>- 一般遊戲：
  - 每回合顯示二行摘要：
    - 單次贏分 = 當前回合 score。<br>    - 總贏分 = totalWin（所有已完成回合的累積）。<br>- 觸發獎勵回合 ngInBGParser：
  - 額外以 Bonus 圖示 × 數量 = 獎勵遊戲 的文字行，說明本回合觸發了獎勵模式；
  - 單次贏分 固定顯示為 0，總贏分 則維持前一回合累積值。<br>- 獎勵遊戲 bgParser：
  - 除了全流程 totalWin 外，還維護 bgTotalWin 作為本輪獎勵遊戲的局部總分，
    在摘要中以「獎勵遊戲總總贏分 = bgTotalWin」顯示，並搭配「總贏分 = totalWin」同時呈現局部與全局累積。 |
| 階段 6 | 遊戲 1025 規則：Icon 資源與倍數圖示配置 | - icons 常數：
  - 0~9：一般圖示，src = /images/game1025/icon_0X.png，尺寸約 152×156。<br>  - 10：Bonus 符號，src = /images/game1025/icon_10.png，尺寸約 176×176，主要用於一般遊戲盤面中顯示觸發獎勵條件的圖示。<br>  - 11：倍率圖示，src = /images/game1025/icon_11.png，尺寸約 144×144，由 addIconList 疊加在獎勵盤面中顯示各位置倍數。<br>- Config1025.MULTIPLE_BET_LIST / MULTIPLE_BIG_LIST 對應不同情境下的倍率映射，getAddIconList 會依是否同時出現在 winPosList 中決定使用哪一組倍率表，並映射成實際顯示的 Icon ID。<br>- parser() 最後回傳 { ast: this.dataParser.getFinalSlotData(), icons }，前端依此還原 Game1025 的盤面、線獎細單與獎勵遊戲倍數展示。 |
