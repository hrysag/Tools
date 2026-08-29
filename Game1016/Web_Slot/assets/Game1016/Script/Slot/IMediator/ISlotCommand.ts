export interface ISlotCommand {
    type: string;       // 執行指令識別type
    payload?: any;      // 附帶資料
    source?: string;    // 呼叫者（例如 'Reel1016' 或 'Machine'）
}

export interface ISlotMediator {
    sendToMachine(cmd: ISlotCommand): void;
    //broadcastToAllReels(cmd: ISlotCommand): void;---目前不需要
    //sendToReel(reelIndex: number, cmd: ISlotCommand): void;---目前不需要先拔掉
}

export interface IMediatorColleague {
    /**
     * 當中介者派送命令給此同事物件時會呼叫此方法。
     */
    onMediatorCommand(cmd: ISlotCommand): void;
}