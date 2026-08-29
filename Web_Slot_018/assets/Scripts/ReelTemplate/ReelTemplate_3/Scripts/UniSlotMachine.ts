import { _decorator, CCFloat, Component, Enum, game, macro, } from 'cc';
import { UniReelView } from './UniReelView';
import { StopType } from './UniReel';
import { IReel } from './Interface/IReel';

const { ccclass, property } = _decorator;

@ccclass('UniSlotMachine')
export class UniSlotMachine<View extends UniReelView<IReel>> extends Component {
    @property({ type: UniReelView, visible: true })
    protected _reelView: View = null;

    @property({ type: Enum(StopType) })
    protected stopType: StopType = StopType.RunoutData;

    @property({ type: CCFloat, visible: true, tooltip: '正常模式滾動時間，單位:秒', min: 0 })
    protected _normalRollTime: number = 0.5;

    @property({ type: CCFloat, visible: true, tooltip: '快速模式滾動時間，單位:秒', min: 0 })
    protected _fastRollTime: number = 0.2;

    protected _iconResultData: number[][] = []; //紀錄最終顯示的資料
    protected _startRoll: boolean = false; //判斷是否開始滾動，有可能滾動前會做彈跳
    protected _canStop: boolean = false; //滾動時間滿足以及收到伺服器資料才能停止

    protected _isTurboMode: boolean = false; //判斷是否為快速模式
    protected _isStopClick: boolean = false; //判斷是否點擊了stop按鈕

    public get reelAmount(): number {
        return this._reelView.reelAmount;
    }

    protected _startTime: number = 0; //滾動時間紀錄

    public init(): void {
        this._reelView.init();
        this._reelView.isFastModeCallback = this.isFastMode.bind(this);
    }

    public async startRoll(isTurboMode: boolean, reelIDs?: number[]): Promise<void> {
        this.reset();
        this._isTurboMode = isTurboMode;
        await this._reelView.startRoll(reelIDs); //等待所有滾輪開始滾動再開始計時
        this._startRoll = true;
        this._startTime = game.totalTime;
    }

    public async stopRoll(resultData: number[][]): Promise<void> {
        this._iconResultData = [...resultData];
        await this.canStopRoll();
        await this._reelView.stopRoll(this._iconResultData, this.stopType);
    }

    public setReadyHand(currentReadyHandReelID: number): void {
        this._reelView.setReadyHand(currentReadyHandReelID);
    }

    public getIconAmount(reelID: number): number {
        return this._reelView.getIconAmount(reelID);
    }

    public stopRollCallBack(): void {
        this._isStopClick = true;

        if (this._canStop) {
            this._reelView.fastStopRoll();
        }
    }

    protected async canStopRoll(): Promise<void> {
        return new Promise<void>((resolve) => {
            let callback = () => {
                let standardTime: number = this.isFastMode() ? this._fastRollTime : this._normalRollTime;
                standardTime *= 1000; //轉成毫秒
                let fillTime: boolean = game.totalTime - this._startTime >= standardTime;
                let receiveData: boolean = this._iconResultData.length > 0;

                if (fillTime && receiveData && this._startRoll) {
                    this.unschedule(callback);
                    this._canStop = true;
                    resolve();
                }
            };

            this.schedule(callback, 0, macro.REPEAT_FOREVER);
        });
    }

    protected isFastMode(): boolean {
        return this._isStopClick || this._isTurboMode;
    }

    protected reset(): void {
        this._iconResultData.length = 0;
        this._startRoll = false;
        this._canStop = false;
        this._isStopClick = false;
    }
}