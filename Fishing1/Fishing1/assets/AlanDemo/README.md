此Demo用來測試 resize 以及維持滿版 & 鎖橫屏的功能。
請參考Main.ts 的onLoad function


# 1
```ts
view.setOrientation(macro.ORIENTATION_LANDSCAPE);   // 設置我們的遊戲視窗為橫版遊戲，當裝置比例是直版（透過轉向亦或是改變視窗大小），
                                                    // cocos會透過css改變轉向（但遊戲內的邏輯不動），使其維持橫版狀態
```

# 2
```ts
const policy = view.getResolutionPolicy(); // 取得遊戲解析度策略物件
view.setResizeCallback(() => { // 設置當畫面大小異動時的通知callback
    this.updateViewport() // 每次視窗大小有異動，就更新viewport
});
```

# 3
```ts
private updateViewport() {
    const width = screen.windowSize.width; // 下兩行是取得screen的寬與高，cocos的註解是說取得裝置的物理解析度，意思即他會乘以pixel ratio
    const height =  screen.windowSize.height; // 舉例： iphone 官方給的dp若為 300 * 400，則在2x的手機下，這裡會拿到 600 * 800
    const ratio = width / height; // 計算比例，有意思的是似乎當我們設置橫版時，就算你以直版方式瀏覽遊戲，他的寬高不會對調，由於我們只是想知道當前比例，維持我們對寬的定義&高的定義是好的，反倒不該使用 window.innerWidth & window.innerHeight

    if (ratio >= 16 / 9) { // 大多手機都是16:9 延伸往 21:10，若是屬於較長的手機那麼要以高為主，這裡的高指的是對於玩家視角來看的高，而非裝置本身的高
        policy.setContentStrategy(ResolutionPolicy.ContentStrategy.FIXED_HEIGHT)
    } else { // 反之
        policy.setContentStrategy(ResolutionPolicy.ContentStrategy.FIXED_WIDTH)
    }
    view.setResolutionPolicy(policy);
}
```