# 🎨 美術說明文件轉檔工具使用說明

## 使用步驟

1. **下載美術使用手冊 Excel 文件**  
   - 總部: [連結](https://docs.google.com/spreadsheets/d/1dezSjuE30_TONhmtIm0C6w7YJC6KGry95Pbq1c51agQ/edit?gid=844902586#gid=844902586)  
   - 中軟: [連結](https://docs.google.com/spreadsheets/d/1BAuPMjlUEB2TGg_lM5NzmIaoR98j0-DDP_cGsrDSst4/edit?gid=1560299710#gid=1560299710)

2. **將下載好的 Excel 放到 `README.md` 同一個資料夾內**

3. **點擊 `art-config-generator-tool.exe`**

4. **輸入 Excel 的分頁名稱（通常是遊戲館名稱）** → 按 Enter  
   ⚠️ 注意：此步驟不能手動輸入中文，必須**直接複製貼上**分頁名稱。

5. **輸入遊戲館編號** (例：輸入 `1001` → 生成 `AnimationConfig1001`) → 按 Enter  

6. 工具會自動產生 `.ts` 檔案到當前資料夾  
   - 例如：`AnimationConfig1001.ts`  
   - 之後可以將檔案移動到遊戲專案中使用

7. 在遊戲內引用腳本後，即可直接呼叫對應 animation / skin 名稱，例如：  
   ```ts
   AnimationConfig023.Icon_04.animation.idle  // 輸出結果: "idle"
   ```

---

## 使用須知

- **檢查錯誤 Log**  
  如果檔案生成失敗或想看詳細錯誤：
  1. 打開 Terminal / PowerShell  
  2. 切換路徑到 `art-config-generator-tool.exe` 所在資料夾  
  3. 輸入 `.\art-config-generator-tool.exe`
  4. 照prompt步驟輸入，錯誤會完整顯示在終端機

- **Excel 格式限制（強制規範）**
  - 工具會固定將 **「檔案名稱」右邊欄位** 當作群組名稱  
  - **「DEMO參考」** 當作群組終止欄位  
  - 表格欄位必須依序定義：
    ```
    0: "",
    1: "檔案排序",
    2: "動畫類別",
    3: "Skin名稱",
    4: "Animation名稱",
    5: "Track",
    6: "說明",
    7: "備註"
    ```
  - 工具會固定將 **3: Skin名稱** 與 **4: Animation名稱** 轉換成群組內可使用的屬性
