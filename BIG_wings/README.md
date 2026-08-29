# mahjong

-  先安裝`pnpm`
    - macos(Homebrew) `brew install pnpm`
    - windows(Powershell) `iwr https://get.pnpm.io/install.ps1 -useb | iex`
    - npm `npm install -g pnpm` or `npm install -g @pnpm/exe`

## Getting started
- GameType: 5276

## Add your files

- [ ] [Clone files](https://swissknife.vip/gt/gt5/frontend/prototype/games/casino-mono.git) files
- [ ] [Move folder games/ path clone](https://swissknife.vip/gt/gt5/frontend/prototype/HTML5/Mahjong.git) files
```
cd existing_repo
git clone https://swissknife.vip/gt/gt5/frontend/prototype/games/casino-mono.git
cd ./casino-mono/games
git clone -b main https://swissknife.vip/gt/gt5/frontend/prototype/HTML5/mahjong.git
```

## Project folder structure
```lua
project-folder
|-- assets
|   |-- common 公版公用
|   |   |-- anim 動畫
|   |   |-- material 材質
|   |   |-- script 共用程式碼
|   |   |   |-- anim 共用動畫程式碼
|   |   |   |-- ui 共用介面程式碼
|   |   |-- texture 共用紋理(材質貼圖)
|   |   |   |-- commonUI 介面物件類別
|   |   |   |   |-- btn 按鈕類別
|   |   |   |   |-- pic 圖片類別
|   |   |   |-- lang 多國語言分類
|   |   |   |   |-- cn、en、tw
|   |-- game 遊戲主程式資料夾
|   |   |-- mahjong 碰碰胡遊戲
|   |   |   |-- anim
|   |   |   |-- scene 遊戲場景
|   |   |   |-- script 遊戲程式碼
|   |   |   |   |-- compponents 遊戲的介面元件
|   |   |   |   |-- lib mvp架構、共用
|   |   |   |   |-- tools 工具類
|   |   |   |   |-- wheel 輪盤程式碼
|   |   |   |   |-- include.ts 參考來源
|   |   |   |   |-- index.ts 需要導出的class
|   |   |   |   |-- main.ts 程式進入點
|   |   |   |-- spine spine動畫
|   |   |   |-- texture 紋理(材質貼圖)
|   |-- proto 放置ProtoBuf檔案
|   |-- resources 動態資源檔案資料夾
|   |-- techArt TA開發DEMO目錄
|-- src
|   |-- test
|   |   |-- *.test.ts BDD、TDD測試
|-- tsconfig.json ts參數設定
|-- package.json npm參數設定
|-- jest.config.js jest測試設定檔
```
### AlertPanel Testcase
```typesciprt

    let result;
    // 延遲5秒後關閉
    result = await this.alertPanel.alert({
        message: 'Basic Alert',
        duration: 5000
    });
    console.log(result);
    // 使用1個按鈕
    result = await this.alertPanel.alert({
        title: 'Basic Alert',
        message: 'Basic Alert',
        confirmButtonVisible: true,
        confirmButtonText: "重新連線"
    });
    console.log(result);
    // 使用2個按鈕
    result = await this.alertPanel.alert({
        title: '系統訊息',
        message: '縮短輪軸時間並加快遊戲速度\n是否開啟快速旋轉功能?',
        confirmButtonVisible: true,
        confirmButtonText: "重新連線",
        cancelButtonVisible: true,
        cancelButtonText: "取消"
    });
    console.log(result);
    // 使用ICON按鈕
    result = await this.alertPanel.alert({
        title: '系統訊息',
        message: '縮短輪軸時間並加快遊戲速度\n是否開啟快速旋轉功能?',
        iconButton: true
    });
    console.log(result);


```


// 自動下注金額面板
// 自動下注局數面板