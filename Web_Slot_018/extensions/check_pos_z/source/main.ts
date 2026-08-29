
"use strict";

const { checkNodePosition_Z } = require('./checkPos_Z');

/**
 * @en Registration method for the main process of Extension
 * @zh 为扩展的主进程的注册方法
 */
export const methods: { [key: string]: (...any: any) => any } = {
    /**
     * @en A method that can be triggered by message
     * @zh 通过 message 触发的方法
     */
    async checkNodePosition_Z(message: string, isUrl: boolean): Promise<void> {
        await checkNodePosition_Z(message, isUrl);
    },
};