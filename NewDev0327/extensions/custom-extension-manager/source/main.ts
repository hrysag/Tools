import { AssetInfo } from '@cocos/creator-types/editor/packages/asset-db/@types/public';
import * as CoreService from './CoreService';
import { waitTime } from './Utils';

export const methods: { [key: string]: (...any: any) => any } = {
    installAllExtensionsDependencies() {
        CoreService.installAllExtensionsDependencies();
    },
    refreshExtensionsDummy() {
        CoreService.refreshExtensionsDummy();
    },
    async createExtension(template: string, name: string) {
        await CoreService.createExtension(template, name);
    },
    openExtensionInVscode(assetInfo: AssetInfo) {
        CoreService.openExtensionInVscode(assetInfo);
    },
    installExtensionDependencies(assetInfo: AssetInfo) {
        CoreService.installExtensionDependencies(assetInfo);
    },
    reloadExtension(assetInfo: AssetInfo) {
        CoreService.reloadExtension(assetInfo);
    },
    deleteExtension(assetInfo: AssetInfo) {
        CoreService.deleteExtension(assetInfo);
    },
    enableExtension(assetInfo: AssetInfo): void {
        CoreService.enableExtension(assetInfo);
    },
    disableExtension(assetInfo: AssetInfo): void {
        CoreService.disableExtension(assetInfo);
    },
    afterReload(): void {
        CoreService.afterReload();
    },
};

export function load(): void {
    // 避免有插件載入完成時機較晚 導致實際上是啟用 但被標記成禁用 
    waitTime(1).then(() => {
        CoreService.refreshExtensionsDummy();
    });
}

export function unload(): void {
    CoreService.clearExtensionDummy();
}