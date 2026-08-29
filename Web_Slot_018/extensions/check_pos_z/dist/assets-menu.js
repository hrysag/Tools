"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onAssetMenu = void 0;
function onAssetMenu(assetInfo) {
    return [
        {
            label: 'i18n:check_pos_z.menu.checkPos_Z',
            enabled: assetInfo.isDirectory,
            click() {
                Editor.Message.send('check_pos_z', 'checkNodePosition_Z', assetInfo.url, true);
            },
        },
    ];
}
exports.onAssetMenu = onAssetMenu;
;
