"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onAssetMenu = void 0;
const packageJSON = require('../package.json');
function onAssetMenu(assetInfo) {
    const exampleArg = 'hello world';
    // 在 assets 的 Game 資料夾底下所有資源新增一個右鍵菜單選項
    if (assetInfo.url.startsWith('db://assets/Game/')) {
        return [
            {
                label: '遊戲資源右鍵菜單選項',
                click: () => {
                    // 就算事件出去後只是透過 main.ts 調用 CoreService，也建議透過 message 事件，程式才會轉移到主進程執行
                    // 不建議直接在這邊調用 CoreService
                    Editor.Message.send(packageJSON.name, 'my-asset-menu-event', assetInfo, exampleArg);
                }
            }
        ];
    }
    return [];
}
exports.onAssetMenu = onAssetMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXNzZXRNZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL0Fzc2V0TWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUUvQyxTQUFnQixXQUFXLENBQUMsU0FBb0I7SUFDNUMsTUFBTSxVQUFVLEdBQUcsYUFBYSxDQUFDO0lBQ2pDLHNDQUFzQztJQUN0QyxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7UUFDL0MsT0FBTztZQUNIO2dCQUNJLEtBQUssRUFBRSxZQUFZO2dCQUNuQixLQUFLLEVBQUUsR0FBRyxFQUFFO29CQUNSLG1FQUFtRTtvQkFDbkUseUJBQXlCO29CQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDeEYsQ0FBQzthQUNKO1NBQ0osQ0FBQTtLQUNKO0lBRUQsT0FBTyxFQUFFLENBQUM7QUFDZCxDQUFDO0FBakJELGtDQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFzc2V0SW5mbyB9IGZyb20gXCJAY29jb3MvY3JlYXRvci10eXBlcy9lZGl0b3IvcGFja2FnZXMvYXNzZXQtZGIvQHR5cGVzL3B1YmxpY1wiO1xuY29uc3QgcGFja2FnZUpTT04gPSByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uQXNzZXRNZW51KGFzc2V0SW5mbzogQXNzZXRJbmZvKSB7XG4gICAgY29uc3QgZXhhbXBsZUFyZyA9ICdoZWxsbyB3b3JsZCc7XG4gICAgLy8g5ZyoIGFzc2V0cyDnmoQgR2FtZSDos4fmlpnlpL7lupXkuIvmiYDmnInos4fmupDmlrDlop7kuIDlgIvlj7PpjbXoj5zllq7pgbjpoIVcbiAgICBpZiAoYXNzZXRJbmZvLnVybC5zdGFydHNXaXRoKCdkYjovL2Fzc2V0cy9HYW1lLycpKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICfpgYrmiLLos4fmupDlj7PpjbXoj5zllq7pgbjpoIUnLFxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWwseeul+S6i+S7tuWHuuWOu+W+jOWPquaYr+mAj+mBjiBtYWluLnRzIOiqv+eUqCBDb3JlU2VydmljZe+8jOS5n+W7uuitsOmAj+mBjiBtZXNzYWdlIOS6i+S7tu+8jOeoi+W8j+aJjeacg+i9ieenu+WIsOS4u+mAsueoi+Wft+ihjFxuICAgICAgICAgICAgICAgICAgICAvLyDkuI3lu7rorbDnm7TmjqXlnKjpgJnpgoroqr/nlKggQ29yZVNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgRWRpdG9yLk1lc3NhZ2Uuc2VuZChwYWNrYWdlSlNPTi5uYW1lLCAnbXktYXNzZXQtbWVudS1ldmVudCcsIGFzc2V0SW5mbywgZXhhbXBsZUFyZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xufSJdfQ==