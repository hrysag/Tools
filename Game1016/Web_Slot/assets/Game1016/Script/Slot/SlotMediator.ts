import { IMediatorColleague, ISlotCommand, ISlotMediator } from "./IMediator/ISlotCommand";


export class SlotMediator implements ISlotMediator {

    constructor(private _machine: IMediatorColleague, private _reelView: IMediatorColleague) {

    }

    public sendToMachine(cmd: ISlotCommand): void {
        //console.log('SlotMediator sendToMachine', cmd);
        this._machine.onMediatorCommand(cmd);
    }

    /*
    //--目前不需要先拔掉
    public broadcastToAllReels(cmd: ISlotCommand): void {
        //console.log('SlotMediator broadcastToAllReels', cmd);
    }*/

    /*
    //--目前不需要先拔掉
    public sendToReel(reelIndex: number, cmd: ISlotCommand): void {
        //console.log('SlotMediator sendToReel', reelIndex, cmd);
        this._reelView.onMediatorCommand(cmd);
    }*/
}
