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

import { AssetInfo } from "@cocos/creator-types/editor/packages/asset-db/@types/public";
import packageJSON from '../package.json';

export function onAssetMenu(assetInfo: AssetInfo): any[] {
    // 在 assets 的 Game 資料夾底下所有資源新增一個右鍵菜單選項
    return [
        {
            label: '測試包裝工具',
            click: (): void => {
                Editor.Message.send(packageJSON.name, 'my-asset-menu-event');
            }
        }
    ];
}