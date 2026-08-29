# Cocos Creator Extension 自訂 HTML 模板

已定義好初始腳本架構的 Cocos Creator 擴展模板。
該模板內包含添加自訂選單到編輯器上方工具列，並開啟一個面板的範例。

## 專案結構

```
project/
├── source/
│   ├── panels/
│   │   └── default/
│   │       └── index.ts    # 面板邏輯實作
│   ├── main.ts             # 擴展入口，負責接收和路由訊息
│   ├── Utils.ts            # 基礎工具函數
│   ├── CoreService.ts      # 核心業務邏輯處理
│   ├── AssetMenu.ts        # 資源右鍵菜單功能
│   └── SceneScript.ts      # 場景腳本交互功能
└── static/
    ├── template/
    │   └── default/
    │       └── index.html  # 面板 HTML 模板
    └── style/
        └── default/
            └── index.css   # 面板 CSS 樣式
```

### 檔案說明

#### `main.ts`
- **職責**：訊息路由器
- **原則**：只接收訊息並轉發給 `CoreService.ts` 或實作簡單邏輯，不包含複雜業務邏輯
- **範例**：
  ```typescript
  openPanel() {
      Editor.Panel.open(packageJSON.name);
  }
  ```

#### `Utils.ts`
- **職責**：基礎工具函數
- **功能**：
  - 提供日誌輸出、等待時間等基礎工具函數
- **重點**：請盡量將插件所需功能都寫在 `CoreService.ts` 中

#### `CoreService.ts`
- **職責**：核心業務邏輯處理，調度各子模組的管理器

#### `AssetMenu.ts`
- **職責**：定義資源管理器的右鍵菜單
- **重點**：透過 `Editor.Message.send` 將事件傳遞到主進程，確保程式在正確的進程中執行

#### `SceneScript.ts`
- **職責**：在場景環境中執行的腳本
- **特點**：可以直接使用 `cc` API，像寫遊戲腳本一樣操作場景或 cc 底下的 class

#### `panels/default/index.ts`
- **職責**：與面板交互的腳本
- **重點**：除了需要動態新增的 HTML 元件以外，其他 HTML 元件請直接在 `static/template/default/index.html` 中設計

#### `static/template/default/index.html`
- **職責**：面板 HTML 模板
- **重點**：在 `panels/default/index.ts` 透過 template 指向此檔案

#### `static/style/default/index.css`
- **職責**：面板 CSS 樣式
- **重點**：在 `panels/default/index.ts` 透過 style 指向此檔案

## 🛠️ 開發規範

1. **保持 `main.ts` 簡潔** - 只做訊息轉發及簡單邏輯，不寫複雜業務邏輯
2. **集中業務邏輯** - 所有業務邏輯都放在 `CoreService.ts`，需要與 cc API 交互的功能則放在 `SceneScript.ts`，盡量不要在 `Utils.ts` 中新增業務邏輯
3. **使用工具函數** - 在 `Utils.ts` 中使用 `showLog`、`showWarn`、`showError` 統一日誌格式
4. **邏輯拆分方式** - 若未來 `CoreService.ts` 需要拆分邏輯，可以直接透過 `CoreService.ts` 調度各模塊，並且不會與日誌輸出方法產生循環依賴
5. **設計面板** - 修改 `static/template/default/index.html` 設計面板架構、`static/style/default/index.css` 設計面板樣式
6. **在單一插件建立多個面板** - 若需要在插件內建立多個面板，可依照以下步驟實作 (NewPanel / new-panel 請依照需求調整名稱):
    1. 在 static/template 新增 NewPanel 資料夾，並在底下新增 `index.html`
    2. 在 static/style 新增 NewPanel 資料夾，並在底下新增 `index.css`
    3. 在 source/panels 新增 NewPanel 資料夾，並在底下新增 `index.ts`，複製其他的 `index.ts` 並修改 template 和 style 指向前兩點的檔案
    4. 在 package.json 的 "panels" 屬性新增欄位 (size 可依照需求調整)
    ```json
    {
        "new-panel": {
            "title": "New Panel",
            "type": "dockable",
            "main": "dist/panels/NewPanel",
            "size": {
                "min-width": 400, 
                "min-height": 300,
                "width": 1024,
                "height": 600
            }
        }
    }
    ```
    5. 需要打開面板時，呼叫 
    ```typescript
    Editor.Panel.open(`${PackageJSON.name}.new-panel`)
    ```


## 📚 相關資源

- [Cocos Creator 官方擴展開發教學文檔](https://docs.cocos.com/creator/3.8/manual/zh/editor/extension/readme.html)
- [官方擴展 API 參考](https://docs.cocos.com/creator/3.8/manual/zh/editor/extension/editor-api.html)
