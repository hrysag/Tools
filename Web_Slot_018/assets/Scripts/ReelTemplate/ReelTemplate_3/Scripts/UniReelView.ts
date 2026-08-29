import { _decorator, CCFloat, Component, } from 'cc';
import { UniReel } from '../../../ReelTemplate/ReelTemplate_3/Scripts/UniReel';
import { IReel } from '../../../ReelTemplate/ReelTemplate_3/Scripts/Interface/IReel';

const { ccclass, property } = _decorator;
/**
 * 負責一局的滾輪表演
 */
@ccclass('UniReelView')
export class UniReelView<Reel extends IReel> extends Component {
    @property(UniReel)
    protected reelList: Reel[] = [];

    @property({ type: CCFloat, tooltip: '開始滾動間隔的時間，小於0代表一起滾動' })
    protected startSpaceTime: number = 0.1;

    public isFastModeCallback: () => boolean = null;
    public setReelDataCallback: (reelID: number, data: number[]) => void = null;
    public showReadyHandCallback: (reelID: number) => void = null;
    public hideReadyHandCallback: (reelID: number) => void = null;

    public get reelAmount(): number {
        return this.reelList.length;
    }

    protected _currentRollingReelIDs: number[] = []; //紀錄當前滾動的滾輪ID

    public get currentRollingReelIDs(): number[] {
        return this._currentRollingReelIDs;
    }

    protected _reelHaveReadyHandList: boolean[] = []; //紀錄滾輪是否需要進入ReadyHand的狀態

    protected _reelIsReadyHandList: boolean[] = []; //紀錄滾輪是否進入ReadyHand的狀態

    protected _defaultRollingReelIDs: number[] = [];

    public get defaultRollingReelIDs(): number[] {
        return this._defaultRollingReelIDs;
    }

    protected _currentReadyHandReelID: number = -1;

    protected reelsIsRollEnd: boolean[] = [];

    public init(): void {
        this._reelHaveReadyHandList = Array.from({ length: this.reelAmount }, () => false);
        this._reelIsReadyHandList = Array.from({ length: this.reelAmount }, () => false);
        this.reelsIsRollEnd = Array.from({ length: this.reelAmount }, () => false);

        for (let index = 0; index < this.reelList.length; index++) {
            let reel = this.reelList[index];
            reel.init(index);
            reel.onMoveOnceStart = this.onReelMoveOneStart.bind(this, index);
        }

        for (let index = 0; index < this.reelAmount; index++) {
            this._defaultRollingReelIDs[index] = index;
        }
    }

    public async startRoll(reelIDs: number[] = this._defaultRollingReelIDs): Promise<void> {
        this.reset();

        this._currentRollingReelIDs = reelIDs;

        for (let index = 0; index < this._currentRollingReelIDs.length; index++) {
            let reelID = this._currentRollingReelIDs[index];
            this.reelList[reelID].startRoll();

            if (this.startSpaceTime >= 0 && !this.isFastModeCallback()) {
                await this.waitStartSpace(this.startSpaceTime);
            }
        }
    }

    /**
     * 只是呼叫滾輪暫停，並不是直接停下
     */
    public async stopRoll(resultData: number[][], stopType: number): Promise<void> {
        let promiseList = [];

        for (let index = 0; index < this.currentRollingReelIDs.length; index++) {
            let reelID = this.currentRollingReelIDs[index];
            promiseList.push(this.stopOneReel(reelID, resultData[reelID], stopType));
        }

        if (this.isFastModeCallback()) {
            this.fastStopRoll();
        }

        await Promise.all(promiseList);
    }

    /**
     * 按下即停的時候呼叫
     */
    public fastStopRoll(): void {
        for (let index = 0; index < this._currentRollingReelIDs.length; index++) {
            let reelID = this._currentRollingReelIDs[index];
            this.reelList[reelID].fastStopRoll();
        }
    }

    public getIconAmount(reelID: number): number {
        return this.reelList[reelID].iconAmount;
    }

    public setReadyHand(currentReadyHandReelID: number): void {
        if (currentReadyHandReelID >= 0) {
            this._currentReadyHandReelID = currentReadyHandReelID;
            let currentReadyHandReelIndex = this._currentRollingReelIDs.indexOf(currentReadyHandReelID);

            if (currentReadyHandReelIndex !== -1) {
                for (let reelID = 0; reelID < this.reelAmount; reelID++) {
                    let index = this._currentRollingReelIDs.indexOf(reelID);
                    let haveReadyHand = false;
                    if (index !== -1) {
                        haveReadyHand = index >= currentReadyHandReelIndex;
                    }
                    this._reelHaveReadyHandList[reelID] = haveReadyHand;
                }
            }
        }
    }

    protected async stopOneReel(reelID: number, resultData: number[], stopType: number): Promise<void> {
        this.setReelDataCallback(reelID, resultData);
        await this.reelList[reelID].stopRollAsync(stopType);
        this.oneReelRollEnd(reelID);
    }

    /**
     * 預設是從聽牌滾輪開始聽到最後輪，如果要更改條件可以在reelHaveReadyHand這個function裡面修改
     * @param reelID 滾輪ID
     */
    protected checkShowReadyHand(reelID: number): void {
        if (!this._reelIsReadyHandList[reelID]) {
            if (!this.isFastModeCallback()) {
                let haveReadyHand: boolean = this._reelHaveReadyHandList[reelID];
                let index = this._currentRollingReelIDs.indexOf(reelID);
                let previousReelID = this._currentRollingReelIDs[index - 1];
                let checkPreviousReelIsRollEnd = index === 0 ? true : this.reelsIsRollEnd[previousReelID]; // 0是第一輪，所以不用檢查上一輪
                let canShowReadyHand: boolean = haveReadyHand && checkPreviousReelIsRollEnd;

                if (canShowReadyHand) {
                    this.showReadyHandCallback(reelID);
                    this._reelIsReadyHandList[reelID] = true;
                }
            }
        }
    }

    protected checkHideReadyHand(reelID: number): void {
        if (this._reelIsReadyHandList[reelID]) {
            this.hideReadyHandCallback(reelID);
            this._reelIsReadyHandList[reelID] = false;
        }
    }

    protected oneReelRollEnd(reelID: number): void {
        this.checkHideReadyHand(reelID);
        this.reelsIsRollEnd[reelID] = true;
    }

    protected reset(): void {
        this._reelHaveReadyHandList = Array.from({ length: this.reelAmount }, () => false);
        this._reelIsReadyHandList = Array.from({ length: this.reelAmount }, () => false);
        this.reelsIsRollEnd = Array.from({ length: this.reelAmount }, () => false);
        this._currentReadyHandReelID = -1;
    }

    protected onReelMoveOneStart(reelID: number): void {
        this.checkShowReadyHand(reelID);
    }

    protected waitStartSpace(time: number): Promise<void> {
        return new Promise<void>((resolve) => {
            this.scheduleOnce(() => {
                resolve();
            }, time);
        });
    }
}