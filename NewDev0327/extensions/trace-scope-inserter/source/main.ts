// @ts-ignore

import packageJSON from '../package.json';
import { showLog, showWarn, showError, waitTime } from './Utils';
import * as CoreService from './CoreService';
/**
 * @en Registration method for the main process of Extension
 * @zh 为扩展的主进程的注册方法
 */
export const methods: { [key: string]: (...any: any) => any } = {
    /**
     * @en A method that can be triggered by message
     * @zh 通过 message 触发的方法
     */
    afterReload() {
        // 在這裡實作插件被重新載入後的邏輯
        showLog('afterReload');
    },
    myAssetMenuEvent() {
        Editor.Panel.open(packageJSON.name);
    },
};

/**
 * @en Method Triggered on Extension Startup
 * @zh 扩展启动时触发的方法
 */
export function load() { }

/**
 * @en Method triggered when uninstalling the extension
 * @zh 卸载扩展时触发的方法
 */
export function unload() { }
