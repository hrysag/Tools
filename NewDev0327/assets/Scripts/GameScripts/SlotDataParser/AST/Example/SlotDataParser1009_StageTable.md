# Game1009 SlotDataParser1009 階段結構對照表

## 1. 遊戲模式與整體流程

- 模式種類：
  - 一般遊戲：`GameMode.Normal` → `SlotDataGameModeType.normal`，標題為「一般遊戲」。
  - 免費遊戲：`GameMode.Free` → `SlotDataGameModeType.free`，標題為「免費遊戲N」（N 為免費局次，從 1 開始累加）。
- 一局定義：
  - 一筆 `RoundData1009` 視為一局（一次結果）。
  - `GameData1009.RoundDataList` 中的每一筆 round 依序處理；每處理完一筆 round：
    - 依流程呼叫：`setTitle` → `processIconData` → `setDetailDescription` / `setLineSummary` → `setSummary` → `combineOneRoundData` → `setRecords`。
- 模式切換：
  - 每筆 round 依 `round.GameMode` 判斷應處於「一般」或「免費」模式。
  - 若模式與上一筆不同，則先呼叫 `parser.setGameMode(...)` 再處理該局。
- 最終輸出：
  - 所有 round 處理完後，呼叫一次 `parser.getFinalSlotData()`，搭配 `icons` 常數包成 `GameRecordAST` 回傳。

## 2. 盤面規格與標記規則（階段 3）

- 盤面資訊：
  - 寬度（欄數）`COLUMNS = 5`，高度（行數）`ROW = 4`。
  - 排列方式：欄優先（col-major），一維 index 計算：`index = col * ROW + row`，皆為 0-based。
- 盤面來源：
  - 若 `round.ShowIconList` 有內容，優先使用作為盤面；否則回退使用 `round.IconList`。
- 中獎位置標記：
  - 一般線中獎來源：`round.RoundWinPos: number[]`（一維位置）。
  - Scatter 中獎來源：若 `round.WinDataList` 最後一筆為 Scatter（`WinSymbolID === IconList.Scatter`），其 `WinPos` 中所有位置視為 Scatter 中獎位置。
  - 兩者合併後，經由工具函式 `get2DPosFrom1D` 轉為 2D 陣列格式：
    - 輸入：一維位置陣列、`ROW`、`COLUMNS`。
    - 輸出：`number[][]`，每個元素代表一欄內的中獎 row 列表，格式符合 `setBorderMark` / `setBackGroundMark` 要求。
  - 標記顏色：
    - 一般線中獎與 Scatter 中獎位置皆使用：
      - 邊框：`setBorderMark(winPos2D, "#00b7ffff")`
      - 背景：`setBackGroundMark(winPos2D, "#00b7ffff")`
- 盤面處理流程：
  - 每局會呼叫：
    ```ts
    parser.processIconData(
      Game1009Config.ROW,
      Game1009Config.COLUMNS,
      boardIconList,
      processors // 內含邊框與背景標記 Processor
    );
    ```

## 3. 中獎資料與細單格式（階段 4）

- 中獎資料來源：
  - 每局的所有中獎（包含 Scatter）來源為 `round.WinDataList: WinData1009[]`。
  - Scatter win：若 `WinDataList` 最後一筆之 `WinSymbolID === IconList.Scatter`，則視為該局的 Scatter 中獎資料；
    - 其賠率為 `WinOdd`，出現顆數為 `WinPos.length`。
- 無中獎定義：
  - 「完全無任何 WinData（包含 Scatter）」：`round.WinDataList.length === 0`。
  - 此時：
    - `parser.setDetailDescription([])`（細單不顯示任何行）。
    - 摘要仍會顯示「單次贏分 = 0」。
- 有中獎時的 Scatter 額外說明（在細單前）：
  - 若偵測到 Scatter win 且 `scatterCount >= Game1009Config.TRIGGER_FG_SCATTER_COUNT`，則：
    - 使用 `setLineSummary` 顯示一行：
      - `SCATTER * {scatterCount} = Game1009Config.FG_ROUND_COUNT 免費遊戲`。
    - 此行顯示在細單（`setDetailDescription`）之前。
- 細單內容格式：
  - 依 `WinDataList` 原本順序輸出每一筆中獎資料。
  - 每筆一般線中獎（非 Scatter）的顯示格式：
    - `[圖示] Bet * 賠率 (* 倍率) = 贏分 (線N)`
    - 對應：
      - 圖示：`WinSymbolID`
      - Bet：`GameData1009.Bet`
      - 賠率：`WinOdd`
      - 倍率：`WinWildMultiplier`（若 > 1 則顯示 `* WinWildMultiplier`，否則不顯示）
      - 贏分：`Bet * WinOdd * (WinWildMultiplier > 0 ? WinWildMultiplier : 1)`
      - 線號：`WinLineID + 1`，以括號方式顯示「(線N)」。
  - Scatter 中獎的顯示格式：
    - `[SCATTER] Bet * 賠率 (* 倍率) = 贏分`
    - 不顯示線號（無「(線N)」）。
  - 無中獎局不會輸出任何細單行，但摘要會顯示「單次贏分 = 0」。

## 4. 摘要與累積贏分（階段 5）

- 單次贏分：
  - 每局的總賠率：
    - 線贏分賠率：`round.RoundWinOdds`。
    - 若該局有 Scatter win：`scatterOdd = 最後一筆 Scatter 的 WinOdd`；
    - 單局總賠率：`roundTotalOdd = round.RoundWinOdds + scatterOdd`。
  - 單局實際贏分：`roundWinScore = roundTotalOdd * GameData1009.Bet`。
  - 無論有無中獎，都會呼叫：
    - `setSummary("單次贏分 = roundWinScore")`，未中獎時顯示為 `單次贏分 = 0`。
- 累積總贏分（以程式自行累加，不使用 GameData1009.TotalWinOdds / FGTotalWinOdds）：
  - 全局累積賠率：`totalOdd`：
    - 每局若 `roundTotalOdd > 0`，則 `totalOdd += roundTotalOdd`。
  - 免費遊戲累積賠率：`fgTotalOdd`：
    - 若當前模式為免費局，且 `roundTotalOdd > 0`，則 `fgTotalOdd += roundTotalOdd`。
  - 一般模式下摘要：
    - `總贏分 = totalOdd * Bet`，若大於 0 則用 `setSummary` 顯示「總贏分 = X」。
  - 免費模式下摘要：
    - `免費遊戲總贏分 = fgTotalOdd * Bet`，若大於 0 則用 `setSummary` 顯示「免費遊戲總贏分 = X」。

## 5. Icon 與資源（階段 6）

- `icons: Record<number, IconConfig>`：
  - 0~11 對應遊戲 1009 中實際使用的圖示資源，路徑為：`/images/game1009/Symbol_{ID}.png`。
  - 尺寸目前以 `128x128` 配置，可依實際美術資源調整。
- Icon ID 與枚舉：
  - 實際顯示時會對應 `GameViewConfig1009.IconList`，並以 Icon ID 對到 `icons` 表中的圖檔設定。

---

## 6. 階段對照表（摘要）

| 階段 | 功能說明 | 實作重點 |
| --- | --- | --- |
| 階段 1 | 專案與命名 | 類別名稱 `SlotDataParser1009`；輸出型別 `GameRecordAST`；icons 常數定義於檔頭。 |
| 階段 2 | 遊戲模式與回合結構 | 一筆 `RoundData1009` 視為一局；依 `GameMode` 自動切換 `setGameMode(normal/free)`；一般局標題「一般遊戲」，免費局標題「免費遊戲N」；每局最後呼叫 `combineOneRoundData()` 與 `setRecords()`。 |
| 階段 3 | 盤面規格 | 盤面為 4x5，欄優先；優先使用 `ShowIconList`，否則用 `IconList`；一般中獎位置來自 `RoundWinPos`，Scatter 中獎位置來自最後一筆 Scatter 的 `WinPos`；中獎與 Scatter 位置以藍色邊框與藍底標記。 |
| 階段 4 | 中獎資料與細單 | 中獎資料來源 `WinDataList`；無中獎時 `setDetailDescription([])`；有 Scatter 且達觸發門檻時，以 `setLineSummary` 顯示「SCATTER *N = FG_ROUND_COUNT 免費遊戲」；一般線中獎格式為 `[圖示] Bet * 賠率 (* 倍率) = 贏分 (線N)`，Scatter 中獎不顯示線號。 |
| 階段 5 | 摘要與額外顯示 | 每局計算 `roundTotalOdd = RoundWinOdds + scatterOdd`；顯示「單次贏分 = roundTotalOdd * Bet」，未中獎則為 0；以程式內部 `totalOdd`/`fgTotalOdd` 累積，分別顯示「總贏分」、「免費遊戲總贏分」，不依賴 GameData 結構中的 TotalWin 欄位。 |
| 階段 6 | Icon 與資源 | 定義 `icons` 常數，對應 Game1009 的所有圖示資源；Icon ID 與 `GameViewConfig1009.IconList` 對應。 |
| 階段 7 | 測試 | 透過實際 GameData1009 測試一般局與免費局：檢查標題、盤面、藍色標記位置、細單內容（含 Wild 倍率與 Scatter 行）、單次贏分與累積贏分是否與伺服器邏輯一致。 |

> 此檔案作為後續製作相似規格遊戲注單時的參考範本，可在實作新遊戲時複製調整使用。