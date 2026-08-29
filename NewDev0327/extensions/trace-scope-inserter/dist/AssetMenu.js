"use strict";
/**
 * 若需要在資源管理器添加右鍵選單，可依照以下步驟進行:
 * 1. 在 package.json 的 contributions 添加以下內容
 * "messages": {
 *      "my-asset-menu-event": {
 *          "methods": [
 *              "myAssetMenuEvent"
 *          ]
 *      }
 * }
 * "assets": {
 *      "menu": {
 *          "methods": "./dist/AssetMenu.js",
 *          "assetMenu": "onAssetMenu"
 *      }
 * }
 *
 * 2. 在此腳本檔案實作 onAssetMenu 方法
 * 3. 在 main.ts 中實作 myAssetMenuEvent 方法
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onAssetMenu = void 0;
const package_json_1 = __importDefault(require("../package.json"));
function onAssetMenu(assetInfo) {
    // 在 assets 的 Game 資料夾底下所有資源新增一個右鍵菜單選項
    return [
        {
            label: '測試包裝工具',
            click: () => {
                Editor.Message.send(package_json_1.default.name, 'my-asset-menu-event');
            }
        }
    ];
}
exports.onAssetMenu = onAssetMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXNzZXRNZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL0Fzc2V0TWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7Ozs7OztBQUdILG1FQUEwQztBQUUxQyxTQUFnQixXQUFXLENBQUMsU0FBb0I7SUFDNUMsc0NBQXNDO0lBQ3RDLE9BQU87UUFDSDtZQUNJLEtBQUssRUFBRSxRQUFRO1lBQ2YsS0FBSyxFQUFFLEdBQVMsRUFBRTtnQkFDZCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxzQkFBVyxDQUFDLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1lBQ2pFLENBQUM7U0FDSjtLQUNKLENBQUM7QUFDTixDQUFDO0FBVkQsa0NBVUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog6Iul6ZyA6KaB5Zyo6LOH5rqQ566h55CG5Zmo5re75Yqg5Y+z6Y216YG45Zau77yM5Y+v5L6d54Wn5Lul5LiL5q2l6amf6YCy6KGMOlxyXG4gKiAxLiDlnKggcGFja2FnZS5qc29uIOeahCBjb250cmlidXRpb25zIOa3u+WKoOS7peS4i+WFp+WuuVxyXG4gKiBcIm1lc3NhZ2VzXCI6IHtcclxuICogICAgICBcIm15LWFzc2V0LW1lbnUtZXZlbnRcIjoge1xyXG4gKiAgICAgICAgICBcIm1ldGhvZHNcIjogW1xyXG4gKiAgICAgICAgICAgICAgXCJteUFzc2V0TWVudUV2ZW50XCJcclxuICogICAgICAgICAgXVxyXG4gKiAgICAgIH1cclxuICogfVxyXG4gKiBcImFzc2V0c1wiOiB7XHJcbiAqICAgICAgXCJtZW51XCI6IHtcclxuICogICAgICAgICAgXCJtZXRob2RzXCI6IFwiLi9kaXN0L0Fzc2V0TWVudS5qc1wiLFxyXG4gKiAgICAgICAgICBcImFzc2V0TWVudVwiOiBcIm9uQXNzZXRNZW51XCJcclxuICogICAgICB9XHJcbiAqIH1cclxuICpcclxuICogMi4g5Zyo5q2k6IWz5pys5qqU5qGI5a+m5L2cIG9uQXNzZXRNZW51IOaWueazlVxyXG4gKiAzLiDlnKggbWFpbi50cyDkuK3lr6bkvZwgbXlBc3NldE1lbnVFdmVudCDmlrnms5VcclxuICovXHJcblxyXG5pbXBvcnQgeyBBc3NldEluZm8gfSBmcm9tIFwiQGNvY29zL2NyZWF0b3ItdHlwZXMvZWRpdG9yL3BhY2thZ2VzL2Fzc2V0LWRiL0B0eXBlcy9wdWJsaWNcIjtcclxuaW1wb3J0IHBhY2thZ2VKU09OIGZyb20gJy4uL3BhY2thZ2UuanNvbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25Bc3NldE1lbnUoYXNzZXRJbmZvOiBBc3NldEluZm8pOiBhbnlbXSB7XHJcbiAgICAvLyDlnKggYXNzZXRzIOeahCBHYW1lIOizh+aWmeWkvuW6leS4i+aJgOacieizh+a6kOaWsOWinuS4gOWAi+WPs+mNteiPnOWWrumBuOmghVxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAn5ris6Kmm5YyF6KOd5bel5YW3JyxcclxuICAgICAgICAgICAgY2xpY2s6ICgpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgICAgIEVkaXRvci5NZXNzYWdlLnNlbmQocGFja2FnZUpTT04ubmFtZSwgJ215LWFzc2V0LW1lbnUtZXZlbnQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF07XHJcbn0iXX0=