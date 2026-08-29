# AI 助手指南：生成 SlotDataParser{GAMEID}.ts

## 文件用途
本文件提供 AI 助手完整的指導。AI 必須先依照本文定義的步驟，逐一向用戶詢問所需資訊（不得省略），再依遊戲規格生成 `SlotDataParser{GAMEID}.ts`。接著，將完成的 TS 檔整理出規則摘要與對應的使用方式，撰寫成 `SlotDataParser{GAMEID}_StageTable.md`，讓 AI 能反覆參考這些說明，在遇到相似需求時加以複製調整並持續精進。

## 依據文件
- SlotDataParser 使用規則：`SlotDataParser使用规则.md`
- SlotDataParser 範例模板：`SlotDataParser_Template.txt`  
- 參考範例：`assets\Scripts\GameScripts\SlotDataParser\AST\Example`底下所有的SlotDataParser{GAMEID}_StageTable.md

## 重要原則
- 必須遵守使用規則中的流程順序：`setTitle()` → `processIconData()` → `setDetail`/`setDetailDescription` → `setSummary`/`setLineSummary` → `combineOneRoundData()`。
- 每局結束必須呼叫 `setRecords()`。
- 模式改變必須呼叫 `setGameMode()`。
- `getFinalSlotData()` 只能呼叫一次且在最後。
- 自定義 Processor 必須回傳 `(list: SlotDataIconData[]) => SlotDataIconData[]` 並先做淺拷貝。
- 每個步驟處理完，就先生成程式碼或者檔案，提供給使用者測試

## 撰寫步驟（AI 必須遵循）

### 前置步驟（必做）
0. **在開始「階段 0」之前**，先閱讀完整的 `SlotDataParser使用规则.md` 文件 以及 `assets\Scripts\GameScripts\SlotDataParser\AST\Example`資料夾 底下每個遊戲館製作結果
   - 識別是否有相似的過往案例
   - 參考相似案例作為設計範本
   - 優先復用已驗證的模式與寫法

1. 先向用戶詢問「問詢流程（必問）」的所有項目。
2. 彙整成一份「規格摘要」回覆用戶，請用戶確認。
3. 依照`SlotDataParser_Template.txt`模板產生 `SlotDataParser{GAMEID}.ts`。
4. 產生後必做自檢清單（見下方），再提供給用戶。

## 問詢流程（必問）
本流程採用「階段鎖定機制」。
AI 必須依序執行，利用選擇項讓使用者回答，不可跳步、不可合併步驟、不可預先詢問後續問題。

### 【階段 0：資料結構驗證階段】
- AI 必須先要求使用者提供「完整的 TypeScript 資料結構定義」。

必須等待使用者完整回答之後，才可進入下個階段

### 【階段 1：專案與命名】
- 遊戲 ID（用於檔名 `SlotDataParser{GAMEID}.ts`）
- 輸出檔案位置（預設：`assets/Scripts/GameScripts/SlotDataParser/AST/`）
- 在檔案位置先生成`SlotDataParser{GAMEID}.ts`

必須等待使用者完整回答之後，才可進入下個階段

### 【階段 2：遊戲模式與回合結構】 
- 遊戲模式種類與名稱（一般/免費/獎勵等）
- 模式切換規則（何時切換，是否有跨模式的回合）
- 在資料中一局的定義為何（何時 `setRecords()`）,是否存在 ReSpin / 連續回合
- 要求使用者提供標題顯示模板規範
- 在檔案位置先生成`SlotDataParser{GAMEID}.ts`
- 生成相對應的程式碼後，請使用者測試，是否需要修正，需要的話，請根據使用者提出的修正後，跟使用者確認完，直到無須修正後才可進入下個階段

### 【階段 3：盤面規格】
- 盤面大小（row, col）
- iconList 的排列方式（欄優先或列優先，或已固定為一維 index）
- 中獎位置的顏色標記方式
- 特殊需求
- 生成相對應的程式碼後，請使用者測試，是否需要修正，需要的話，請根據使用者提出的修正後，跟使用者確認完，直到無須修正後才可進入下個階段


### 【階段 4：中獎資料與細單格式】
- 中獎資料來源與欄位（winIcon, winOdd, lineId 等）
- 細單顯示格式需求（如何排序每一行詳細解說文字，且使用`setDetailDescription([])`）
- 無中獎時的顯示規則（`setDetailDescription([])` 或 `setDetail(false)`）
- 是否有特殊需求需要額外顯示以及顯示在setDetailDescription的前後哪個位置(要求使用者排序額外顯示文字的排序後使用`setLineSummary`)
- 要求使用者提供顯示模板規範
- 生成相對應的程式碼後，請使用者測試，是否需要修正，需要的話，請根據使用者提出的修正後，跟使用者確認完，直到無須修正後才可進入下個階段

### 【階段 5：摘要與額外顯示】
- 每回合摘要內容（單次贏分、總贏分等）
- 詢問文字排序（`setLineSummary`）
- 要求使用者提供顯示模板規範
- 生成相對應的程式碼後，請使用者測試，是否需要修正，需要的話，請根據使用者提出的修正後，跟使用者確認完，直到無須修正後才可進入下個階段

### 【階段 6：Icon 與資源】
- Icon ID 清單與名稱對應
- Icon 圖資路徑與尺寸（建立 `icons` 常數）
- 生成相對應的程式碼後，請使用者測試，是否需要修正，需要的話，請根據使用者提出的修正後，跟使用者確認完，直到無須修正後才可進入下個階段

### 【階段 7：測試】
- 請使用者測試生成後的 `SlotDataParser{GAMEID}.ts` 是否需要修正；若需要，先依使用者回饋完成修正並再次請其測試，直到使用者確認無須調整為止。確認完成後，在 `assets\Scripts\GameScripts\SlotDataParser\AST\Example` 底下生成一份 `SlotDataParser{GAMEID}_StageTable.md` 作為後續使用者的參考文件，再進入下一階段。

### 【階段 8：包裝】
- 讀取`JS.md`，將上述的`SlotDataParser{GAMEID}.ts`包裝到新的js裡面

## 產出檔案內容要求
生成 `SlotDataParser{GAMEID}.ts` 時，必須包含：

1. `icons` 常數：涵蓋所有可能的 Icon ID。
2. 主解析類別（例如 `SlotDataParser{GAMEID}` 或 `Test{GAMEID}` 類型）。
3. 主要入口方法（回傳 `GameRecordAST`）：
	- 建立 `SlotDataParser`
	- 依模式設定 `setGameMode()`
	- 每回合依序：`setTitle()` → `processIconData()` → `setDetail*()` → `setSummary()/setLineSummary()` → `combineOneRoundData()`
	- 一局結束呼叫 `setRecords()`
	- 最後 `getFinalSlotData()`
4. 必要的輔助方法：
	- 標題產生方法
	- 細單行組裝方法
	- 盤面轉換、icon 文字、格式化數值等
5. 型別與 enum：
	- 若規格提供，建立或引用 `GameMode`、`IconList`、`GameConfig` 等
6. 僅匯入實際使用的型別與方法。

## 自檢清單（必填）
請在產出後逐項檢查並在回覆中確認完成：

### 結構完整性
- [ ] 當每次模式改變時皆有呼叫 `setGameMode()`
- [ ] 每一局結束後有對應 `setRecords()`
- [ ] 每回合的 `setTitle()` 是第一個呼叫
- [ ] 每回合最後都有 `combineOneRoundData()`
- [ ] `getFinalSlotData()` 只呼叫一次且在最後

### 數據正確性
- [ ] `totalWin` 在每回合正確累加
- [ ] 所有 `addIconList` 的 z >= 2
- [ ] 2D 位置陣列使用 0-based 索引

### API 使用正確性
- [ ] `setSummary` 和 `setLineSummary` 使用正確
- [ ] Processor 依建議順序排列
- [ ] 自定義 Processor 使用閉包並有淺拷貝

### 配置完整性
- [ ] `icons` 常數包含所有可能 Icon ID
- [ ] 匯入路徑正確
- [ ] 只匯入實際使用的型別
- [ ] 規格書中的所有顯示項目已實作

## 回覆用戶的標準格式
AI 每次回覆應包含以下結構：

1. 問詢階段：列出需要用戶提供的資訊（對照「問詢流程」）。
2. 規格摘要：整理用戶回答，請其確認。
3. 生成結果：完成 `SlotDataParser{GAMEID}.ts` 並提示檔案位置。
4. 自檢清單：逐項勾選確認。

## 參考做法
可參考以下文件的撰寫模式與工具使用方式：
- `TestExpansionAndIconText.ts`
- `TestReSpinWithIconLayers.ts`
或者
- `assets\Scripts\GameScripts\SlotDataParser\AST\Example`底下的`SlotDataParser{GAMEID}_StageTable.md`

## 注意事項
- 若用戶提供的規格不完整，必須回到「問詢流程」補齊。
- 嚴禁跳過任何必要步驟直接生成檔案。
- 請保持流程清楚，並避免多餘未使用的 import。
