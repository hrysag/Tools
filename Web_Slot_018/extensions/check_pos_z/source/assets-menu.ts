import { AssetInfo } from "@cocos/creator-types/editor/packages/asset-db/@types/public";

export function onAssetMenu(assetInfo: AssetInfo) {
    return [
        {
            label: 'i18n:check_pos_z.menu.checkPos_Z',
            enabled: assetInfo.isDirectory,
            click() {
                Editor.Message.send('check_pos_z', 'checkNodePosition_Z', assetInfo.url, true);
            },
        },
    ];
};