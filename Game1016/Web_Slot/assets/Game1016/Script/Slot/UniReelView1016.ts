import { _decorator, CCInteger, game, Game, Node, tween, UIOpacity, Vec3 } from 'cc';
import { UniReelView } from './ReferencePathForUniSlot';
import { UniReel1016 } from './UniReel1016';
import { SymbolNumber } from './SymbolNumber';
import { IDIAgentFactory } from './DIFactory/IDIAgentFactory';
import { IWildMovementData, IBasicMovementData, ISortReelLayerInfo, IWildMovementDataNew } from './ISlotDefinitionData';

import {
    IReelInfo,
    IMatchWildGroupResult,
    IPlayAniData,
    AnimationController,
    AnimationStateType,
    GameUtilsTools,
    GameState,
    Direction

} from '../ReferencePath';
import { DefinitionGameConfigData } from '../DefinitionGameData1016/GameConfigInstance';
import { IMediatorColleague, ISlotCommand, ISlotMediator } from './IMediator/ISlotCommand';
import { Call_Function_Type } from '../AniMediator1016/CrossSystemFun/DefinitionFunctionType';
import { GlobalAccessReader } from '../DefinitionGameData1016/AccessDefs/GlobalAccess';
import { GameGlobalKeys } from '../DefinitionGameData1016/GameGlobalData1016';
import { SoundList, AudioSourceList } from '../DefinitionGameData1016/SoundList1016';
//import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
//import { NewFlashModeEnum } from 'db://assets/GenericUI/Scripts/MainUI';
import { AudioManager, NewFlashModeEnum, SOUND_TYPE } from 'db://assets/Scripts/ModuleEntry';
const {
    WILD_LIST,
    SCATTER_LIST
} = DefinitionGameConfigData;

const DEBUG_TITLE = 'UniReelView1016';
const { ccclass, property } = _decorator;
@ccclass('UniReelView1016')
export class UniReelView1016 extends UniReelView<UniReel1016> implements IMediatorColleague {

    @property({ type: AnimationController })
    protected readyHandList: AnimationController[] = [];

    @property({ type: CCInteger, tooltip: '隨機資料長度，數值越大滾輪間隔停止越久' })
    protected spaceLength: number = 4;

    @property({ type: CCInteger, tooltip: '聽牌的隨機資料長度，數值越大滾輪間隔停止越久' })
    protected readyHandLength: number = 12;

    @property({ type: Node, tooltip: '78企劃無理的需求需要的', visible: true })
    private _wildFakeLayerContainer: Node = null;

    private _wildGroupResultData: IMatchWildGroupResult[] = [];
    private _isFinalResultRound: boolean = false;
    private _countStopReel: number = 0;
    // 每個 reelID 的 Promise 控制器
    private _waiters: Map<number, { promise: Promise<void>, resolve: () => void }> = new Map();
    private _mediator: ISlotMediator | null = null;
    //--本輪最大補牌數量
    private _currentRoundTakeCardsInfo: { end: { len: number, index: number, reelIndex: number }, start: { len: number, index: number, reelIndex: number } } | null = null;
    private _isSetRoundTakeCards: boolean = false;
    private _roundReadyStatus: boolean[] = [];
    private _roundMaxReadyHandCount: number = 0;
    private _doResetReadyHand: boolean = false;


    //--for debugTest--
    private _testReelStopTime: number = 0;

    public oneReelRollEndCallBack: (reelID: number) => void = null;
    public oneReelFinalStartCallBack: (reelID: number) => void = null;


    public override init(): void {
        super.init();
        //--每一軸的最後一次表演開始
        this._roundReadyStatus = Array.from({ length: this.reelList.length }, () => false);
        this._wildGroupResultData = [];
        this.registerReelEventCallbacks();
        this.resetWaiters();
        this.resetReadyAniList();
        this.setFakeWildLayerContainer();
        //console.log('hideReadyHandList:', this.readyHandList, this.readyHandList[2].node.parent);
    }

    //--20251116-臨時添加需求
    private setFakeWildLayerContainer(): void {
        for (let i = 0; i < this.reelList.length; i++) {
            const reel = this.reelList[i];
            reel.fakeWildLayerContainer = this._wildFakeLayerContainer;
        }
    }

    public registerReelEventCallbacks(): void {

        this.setReelDataCallback = this.setReelData;//---改變icon資料的地方
        this.showReadyHandCallback = this.showReadyHand;
        this.hideReadyHandCallback = this.hideReadyHand;
        for (let i = 0; i < this.reelList.length; i++) {
            const reel = this.reelList[i];
            reel.oneReelFinalStartCallBack = this.onStartRollInFinal;
        }
    }

    //--在init完之後馬上接著做要在initIconSymbol之前做..不然他就會透過initIconSymbol產生出首盤盤面
    public injectAniService(proxyOwner: IDIAgentFactory): void {
        for (const reel of this.reelList) {
            reel.injectAniService(proxyOwner);
        }
    }

    //--20250805新增初始盤面資料
    public initIconSymbol(card2ds: number[][]): void {
        for (let reelID = 0; reelID < this.reelList.length; reelID++) {
            const reel = this.reelList[reelID];
            reel.setInitIconData(card2ds[reelID]);
        }
    }

    public registerMediator(mediator: ISlotMediator): void {
        this._mediator = mediator;
    }

    //===================interface<IMediatorColleague>===================
    public onMediatorCommand(cmd: ISlotCommand): void {
        // Handle commands from the mediator 
        //這邊直接透過crossProcess 反向呼叫showAniController的方法
        /*
        switch (cmd.type) {
 
        }*/
    }


    public testFunction(): void {

    }

    //--情非得已的修改20251107-為了要在RS當中實現第0軸聽牌(stop再去呈現第0軸太短暫了)
    public resetReelViewData(): void {
        this.reset();
    }
    //========================override 父類別方法========================

    public override async startRoll(reelIDs: number[] = this._defaultRollingReelIDs): Promise<void> {

        //this.reset();
        this._isSetRoundTakeCards = false;
        this._currentRollingReelIDs = reelIDs;
        const timeList = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList);
        const startTime = timeList.get(cfg => cfg.roll?.staggerRoll);

        for (let index = 0; index < this._currentRollingReelIDs.length; index++) {
            const reelID = this._currentRollingReelIDs[index];
            this.reelList[reelID].startRoll();
            this.onStartRollReadyHand(reelID);//--特殊條件下啟動聽牌效果軸(要Stop資料才會進來)
            if (startTime > 0 && !this.isFastModeCallback()) {
                await GameUtilsTools.DeferByTweenPromise(startTime);
            }
        }
    }

    public updateIcons(dt: number): void {
        for (let i = 0; i < this.reelList.length; i++) {
            this.reelList[i].updateIcons(dt);
        }
    }

    /**
     * 只是呼叫滾輪暫停，並不是直接停下
     */
    public override async stopRoll(resultData: number[][], stopType: number): Promise<void> {

        this._isFinalResultRound = true; // --標記為最終結果回合
        this._currentRoundTakeCardsInfo = this.setRoundTakeCards();
        const promiseList = [];
        //--first do setCards 
        for (let index = 0; index < this.currentRollingReelIDs.length; index++) {
            const reelID = this.currentRollingReelIDs[index];
            const reel = this.reelList[reelID];

            if (!reel.isLock) {
                this.setReelData(reelID, resultData[reelID]);
            }
        }
        this._isSetRoundTakeCards = true;
        //--second do stopOneReel
        for (let index = 0; index < this.currentRollingReelIDs.length; index++) {
            const reelID = this.currentRollingReelIDs[index];
            promiseList.push(this.stopOneReel(reelID, resultData[reelID], stopType));
        }
        //--你媽的先做完SetCards再說
        if (this.isFastModeCallback()) {
            //--自己停掉或是turbo模式
            this.fastStopRoll();
            /*
            //--直接速度歸0就會直接移動到top可以瞬間換盤面
            const turboMode = GlobalAccessReader.getGlobalData(GameGlobalKeys.TurboMode);
            if (turboMode == NewFlashModeEnum.NewFlash2) {
                const speed = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.roll?.moveInterval) as number;
                this.changeReelMoveInterval(speed);
            }*/
        }

        await Promise.all(promiseList);
        this.stopAllExpectAni();

    }

    public changeReelMoveInterval(speed: number): void {
        for (let i = 0; i < this.reelList.length; i++) {
            this.reelList[i].setmoveInterval(speed);
        }
    }

    //--幹--
    public fastStopRoll(): void {

        if (!this._isSetRoundTakeCards) return;
        for (let index = 0; index < this._currentRollingReelIDs.length; index++) {
            let reelID = this._currentRollingReelIDs[index];
            this.reelList[reelID].fastStopRoll();
            this.reelList[reelID].setFastModeState();
        }
        //SP_ReadyHands_AudioPlayer.getInstance().stopAll();
        AudioManager.instance.stopSound([
            AudioSourceList.SP_ReadyHands_0,
            AudioSourceList.SP_ReadyHands_1,
            AudioSourceList.SP_ReadyHands_2,
            AudioSourceList.SP_ReadyHands_3,
            AudioSourceList.SP_ReadyHands_4
        ]);

        this._mediator?.sendToMachine({ type: Call_Function_Type.CALL_HIDE_ALL_WILD_EXPECT, data: {} } as ISlotCommand);
    }


    //--slotMachine.setReadyHand會呼叫這個
    //--可以刪了~沒用到了2025102
    public override setReadyHand(currentReadyHandReelID: number): void {

        if (currentReadyHandReelID >= 0) {
            this._currentReadyHandReelID = currentReadyHandReelID;
            let currentReadyHandReelIndex = this._currentRollingReelIDs.indexOf(currentReadyHandReelID);

            if (currentReadyHandReelIndex !== -1) {
                for (let reelID = 0; reelID < this.reelAmount; reelID++) {
                    let index = this._currentRollingReelIDs.indexOf(reelID);
                    let haveReadyHand = false;
                    if (index !== -1) {
                        //haveReadyHand = index >= currentReadyHandReelIndex;
                        haveReadyHand = index === currentReadyHandReelIndex; // --只讓目前聽牌軸亮
                    }
                    this._reelHaveReadyHandList[reelID] = haveReadyHand;
                }
            }
        }
    }

    protected override reset(): void {

        super.reset();
        this._roundReadyStatus.fill(false);
        this._testReelStopTime = 0;
        this._countStopReel = 0;
        this._currentRoundTakeCardsInfo = null;
        this._isSetRoundTakeCards = false;
        this._isFinalResultRound = false; // --重置最終結果回合 
        for (let i: number = 0; i < this.reelList.length; i++) {
            this.reelList[i].reset();//--每一軸都要reset
        }
        this.resetWaiters();
        this.resetReadyAniList();
    }


    /**
     * call stopRoll的時候會promiseAll
     * stopOneReel在promise裡面包裝呼叫等待的方法
     * @param reelID --單軸停下來的時候呼叫
     */
    protected override oneReelRollEnd(reelID: number): void {

        const stopTime = Date.now();
        const wastTime = (reelID == 0) ? 0 : stopTime - this._testReelStopTime;
        this._testReelStopTime = stopTime;
        //GameUtilsTools.debugLog('calculateRandomDataLength', 'ReelStopTime', { r: reelID, t: wastTime }, 'log');

        this.oneReelRollEndCallBack?.(reelID);//--單軸停
        super.oneReelRollEnd(reelID);//--關閉聽牌
        this.checkShowReadyHandFromEnd(reelID);//--從停輪的地方檢查下一軸聽牌
        //GameUtilsTools.debugLog(DEBUG_TITLE, 'oneReelRollEnd:', { finishedReel: reelID, isFinalRound: this._isFinalResultRound });

    }

    //--處理盤面鎖定的狀態(直接呼叫resolve)
    protected override async stopOneReel(reelID: number, resultData: number[], stopType: number): Promise<void> {

        if (this.reelList[reelID].isLock) {
            this.oneReelRollEnd(reelID);
            return;

        } else {
            //--這邊提前做掉
            //this.onStartRollReadyHand(reelID);//--20251107--特殊條件前兩軸聽牌--太短暫了
            await this.reelList[reelID].stopRollAsync(stopType);
            this.oneReelRollEnd(reelID);
        }
    }

    protected override checkHideReadyHand(reelID: number): void {

        this.hideReadyHandCallback(reelID);
        if (this._reelIsReadyHandList[reelID]) {
            this._reelIsReadyHandList[reelID] = false;
        }
    }
    /**
     * onReelMoveOneStart呼叫
     * 20251002--企劃需求是<停輪才開始下一輪的聽牌>
     * 預設是從聽牌滾輪開始聽到最後輪，如果要更改條件可以在reelHaveReadyHand這個function裡面修改
     * @param reelID 滾輪ID
     */
    protected override checkShowReadyHand(reelID: number): void {
        return;
    }

    //========================override 父類別方法========================

    //---透過SymbolAniHandoffManager 操作ISymbolOwnerAgent來拿動畫資料
    public getExistingAniDataNode(data: IPlayAniData): { reAssign: IPlayAniData, aniNode: Node } {
        return this.reelList[data.reelIndex].getExistingAniDataNode(data);
    }

    public getExistingAniWPos(reelIndex: number, iconIndex: number): Vec3 {
        return this.reelList[reelIndex].getExistingAniWPos(iconIndex);
    }

    public getScatterHandoffData(reelIndex: number[], isEffectUse: boolean = false): IPlayAniData[] | null {

        const handoffScatterData: IPlayAniData[] = [];
        for (let i: number = 0; i < reelIndex.length; i++) {
            //--表演RS次數粒子使用的API要呼叫不同的方法,因為此時的scatter已經被拔到表演層了
            const data = (!isEffectUse) ? this.reelList[reelIndex[i]].getForceToHandoffScatter() : this.reelList[reelIndex[i]].getForceToHandoffScatterForCountEffect();
            if (data) {
                handoffScatterData.push(data);
            }
        }
        /*
        GameUtilsTools.debugLog(DEBUG_TITLE, 'getScatterHandoffData___reelIndex:', {
            handoffScatterData: handoffScatterData,
            list: this.reelList
        });*/

        return handoffScatterData;
    }



    public getWildHandoffData(reelIndex: number[]): IPlayAniData[] | null {

        const handoffWildData: IPlayAniData[] = [];
        for (let i: number = 0; i < reelIndex.length; i++) {
            const data = this.reelList[reelIndex[i]].getForceToHandoffWild();
            if (data) {
                handoffWildData.push(data);
            }
        }
        return handoffWildData;
    }

    public getParticleWorldPosition(reelIndex: number): Vec3 {
        return this.reelList[reelIndex].getParticleWorldPosition();
    }

    public getMultiScatterWorldPosition(reelIndex: number[]): Vec3[] {

        const wPos: Vec3[] = [];
        for (let i: number = 0; i < reelIndex.length; i++) {
            const reel = this.reelList[reelIndex[i]];
            wPos.push(reel.getScatterWorldPosition());
        }
        return wPos;
    }

    //--取得的gameIcon世界座標
    public getSymbolWorldPosition(reelIndex: number, iconIndex: number): Vec3 {
        return this.reelList[reelIndex].getIconNodeWorldPosition(iconIndex);
    }
    //--轉接器塞回aniNode控制權與交接回給gameIcon
    public async setAniNodeBackToReel(info: Pick<IReelInfo, "reelIndex" | "iconIndex">, node: Node): Promise<void> {
        return this.reelList[info.reelIndex].setAniNodeBackToReel(info as IPlayAniData, node);
    }

    //---將動畫物件重新塞回gameIcon
    public addBackAniNodeToGameIcon(reelIndex: number, iconIndex: number, aniNode: Node): void {
        this.reelList[reelIndex].addBackAniNodeToGameIcon(iconIndex, aniNode);
    }

    //--20251022新增取得bounce結束的promise
    public getEndBouncePromise(reelIndex: number): Promise<number> | null {
        return this.reelList[reelIndex].getEndBouncePromise();
    }

    /**
    * 取得要位移的wild資料
    *  wildNode:Node;
       finalDestinationWPos:Vec3;
       offsetYLocal:number;
       startIconIndex:number;//--出發的iconIndex
    * 
    */
    public getWildMovementData(reelIndex: number): IWildMovementData {
        return this.reelList[reelIndex].getWildMovementData();
    }

    public async playWildAppearAnimation(reelIndex: number): Promise<void> {
        await this.reelList[reelIndex].playWildAppearAnimation();
    }

    public playWildIdleAnimation(): void {
        for (let i = 0; i < this.reelList.length; i++) {
            this.reelList[i].playWildIdle();
        }
    }

    /**
     * 20260120-新增
     * 這邊是沒有wild中獎的情況,<但是滿足湊滿scatter進入fg的條件>
     * 會啟動播放wild的win動畫(這邊還在fake的wildLayer裡面)
     * 如果是有中獎的狀態下,直接去showAniProcessCtrl那邊操作
     */
    public async playWildAniToFg(reels: number[]): Promise<void> {

        const promises: Promise<void>[] = [];
        for (let i = 0; i < reels.length; i++) {
            const reelIndex = reels[i];
            promises.push(this.reelList[reelIndex].playWildAniToFg());
        }
        await Promise.all(promises);
    }

    /**
     * <<新的位移wild資料>>
     * @param reelIndex 觸發的軸
     * @param yoyo 是否為yoyo的動作(位移到完整軸的模式)true=是/false=否
     * @returns 
     */
    public getWildMovementDataNew(reelIndex: number, yoyo: boolean = false): { movement: IWildMovementDataNew, iplayData: IPlayAniData, reelWpos: Vec3 } {

        const data: IWildMovementDataNew = this.reelList[reelIndex].getNewWildMovementData(yoyo);
        const iplayData = this.reelList[reelIndex].getHandoffWildMoveAniNode(data.startIconIndex);
        const rWpos = this.reelList[reelIndex].getReelWorldPosition();
        data.reelIndex = iplayData.reelIndex;
        data.iconIndex = iplayData.iconIndex;
        return { movement: data, iplayData: iplayData, reelWpos: rWpos };
    }

    public async reSetWildDataAfterMove(reelIndex: number): Promise<void> {
        await this.reelList[reelIndex].reSetWildDataAfterMove(reelIndex);
    }

    public async reSetWildDataAfterWithoutMove(reelIndex: number, iconIndex: number): Promise<void> {
        await this.reelList[reelIndex].reSetWildDataAfterWithoutMove(reelIndex, iconIndex);
    }

    public checkWildIsExistInBoard(reels: number[]): boolean {

        for (let i = 0; i < reels.length; i++) {
            const reelIndex = reels[i];
            if (this.reelList[reelIndex].checkWildIsExist()) {
                return true;
            }
        }
        return false;
    }
    /**
     * 檢查指定軸是否有scatter(oneReelRollEndCallBack每一軸結束就檢查)
     * @param reelIndex 
     * @returns boolean
     */
    public checkHasScatter(reelIndex: number): boolean {
        return this.reelList[reelIndex].hasScatter;
    }

    public setScatterInReelData(cards: number[][]): void {
        for (let i = 0; i < cards.length; i++) {
            const reel = cards[i];
            if (reel.includes(SCATTER_LIST[0])) {
                this.reelList[i].hasScatter = true;
            }
        }
    }

    /**
     * 取得scatter的位移資料
     * @param reelIndex 
     * @returns IBasicMovementData
     */
    public getScatterMovementData(reelIndex: number): IBasicMovementData {
        return this.reelList[reelIndex].getScatterMovementData();
    }

    /**
     * <一般>-關閉/開啟指定的指定軸的<指定位置icon>亮度(true=變暗/false=正常)
     * @param reelIndex 軸
     * @param iconIndex 指定位置icon
     * @param isDark 亮度(true=變暗/false=正常)
     */
    public setIconLight(reelIndex: number, iconIndex: number[], isDark: boolean): void {
        this.reelList[reelIndex].setIconLight(isDark, iconIndex);
    }

    /**
     * <TWEEN驅動>-關閉/開啟指定的指定軸的<指定位置icon>亮度(true=變暗/false=正常)
     * @param reelIndex 軸
     * @param iconIndex 指定位置icon
     * @param isDark 亮度(true=變暗/false=正常)
     */
    public setIconLightTween(reelIndex: number, iconIndex: number[], isDark: boolean): void {
        this.reelList[reelIndex].setIconLightTween(isDark, iconIndex);
    }

    /**
    * 關閉/開啟指定的指定軸的<整軸>亮度(true=變暗/false=正常)
    * @param reelIndex 
    * @param brightnessFlag 
    */
    public setReelLight(reelIndex: number, brightnessFlag: boolean): void {
        this.reelList[reelIndex].setIconLight(brightnessFlag);
    }

    /**
    * <TWEEN驅動> 關閉/開啟指定的指定軸的<整軸>亮度(true=變暗/false=正常)
    * @param reelIndex 
    * @param brightnessFlag 
    */
    public async setReelLightTween(reelIndex: number, brightnessFlag: boolean): Promise<void> {
        await this.reelList[reelIndex].setIconLightTween(brightnessFlag);
    }

    public async setReelLightTweenExcludeIds(reelIndex: number, isDark: boolean, excludeSymbolIds: number[]): Promise<void> {
        await this.reelList[reelIndex].setIconLightTweenExcludeSymbolIds(isDark, excludeSymbolIds);
    }


    public setReelsLight(reelIndex: number[], brightnessFlag: boolean): void {

        for (const id of reelIndex) {
            this.setReelLight(id, brightnessFlag)
        }
    }


    public async setReelsLightTweenExcludeIds(reelIndex: number[], isDark: boolean, excludeSymbolIds: number[]): Promise<void> {

        const promises: Promise<void>[] = [];
        for (const id of reelIndex) {
            promises.push(this.setReelLightTweenExcludeIds(id, isDark, excludeSymbolIds));
        }
        await Promise.all(promises);
    }


    public async setReelsLightTween(reelIndex: number[], brightnessFlag: boolean): Promise<void> {

        const promises: Promise<void>[] = [];
        for (const id of reelIndex) {
            promises.push(this.setReelLightTween(id, brightnessFlag));
        }
        await Promise.all(promises);
    }

    /**
     * <一般>-關閉/開啟指定的全部(整個盤面)的亮度(true=變暗/false=正常) 
     * @param isDark 
     */
    public setAllLight(isDark: boolean): void {

        for (let reelID = 0; reelID < this.reelAmount; reelID++) {
            this.reelList[reelID].wholeReelDark = isDark;
            this.reelList[reelID].setIconLight(isDark);
        }
    }

    /**
     * 
     * @param isDark true=變暗/false=正常
     * @param excludeSymbolIds 不參與改變的symbolID陣列
     */
    public setAllLightExcludeSymbolIds(isDark: boolean, excludeSymbolIds: number[]): void {

        for (let reelID = 0; reelID < this.reelAmount; reelID++) {
            this.reelList[reelID].setAllLightExcludeSymbolIds(isDark, excludeSymbolIds);
        }
    }

    /**
    * <TWEEN驅動> 關閉/開啟指定的全部(整個盤面)的亮度(true=變暗/false=正常) 
    * @param isDark 
    */
    public async setAllLightTween(isDark: boolean): Promise<void> {

        const promises: Promise<void>[] = [];
        for (let reelID = 0; reelID < this.reelAmount; reelID++) {
            promises.push(this.reelList[reelID].setIconLightTween(isDark));
        }
        await Promise.all(promises);
    }



    private resetWaiters(): void {

        this._waiters.clear();
        for (let i: number = 0; i < this.reelAmount; i++) {
            let resolve!: () => void;
            const promise = new Promise<void>(r => resolve = r);
            this._waiters.set(i, { promise, resolve });
        }
        // 第一個 index (0) 立即放行
        this._waiters.get(0)!.resolve();
    }

    private resetReadyAniList(): void {

        //this._turnOnReadyHandEffect = false;
        this._roundWaitShowReadyHand.clear();
        this._roundMaxReadyHandCount = 0;
        this._doResetReadyHand = false;
        for (let i: number = 0; i < this.reelAmount; i++) {

            if (this.readyHandList[i] != null) {
                this.readyHandList[i].playAni(AnimationStateType.Default);
                this.readyHandList[i].node.parent.active = false;
                this.readyHandList[i].node.parent.getComponent(UIOpacity).opacity = 255;
            }
        }
    }



    //--喔幹不能這樣做...
    public multiSetReadyHand(currentReadyHandReelID: number[]): void {

        this._reelHaveReadyHandList.fill(false);
        const resultIndex: number[] = [];
        const rollingSet = new Set(this._currentRollingReelIDs);
        this._roundMaxReadyHandCount = currentReadyHandReelID.length;
        for (const readyId of currentReadyHandReelID) {
            if (readyId < 0) continue;
            if (!rollingSet.has(readyId)) continue;

            this._reelHaveReadyHandList[readyId] = true;
            //[false,false,true,false,true]
            //[false,false,true,true,true]
            resultIndex.push(readyId);
        }
        this.setReelReadyHandData(currentReadyHandReelID);
        /*
        GameUtilsTools.debugLog(DEBUG_TITLE, 'multiSetReadyHand', {
            resultIndex: resultIndex,
            haveReadyHandList: this._reelHaveReadyHandList
        });*/


    }

    protected setReelReadyHandData(currentReadyHandReelID: number[]): void {

        for (let i = 0; i < this.reelList.length; i++) {
            const targetReel = this.reelList[i];
            targetReel?.setWholeReelToReadyHandState();
            if (currentReadyHandReelID.includes(i)) {
                targetReel?.setReadyHandState();
            }
        }
    }


    /**
     * 特殊條件下啟動的聽牌效果軸
     * TIPS:
     * 只會在RS當下啟動第0軸的效果
     * @param reelID 
     */
    private onStartRollReadyHand(reelID: number): void {

        const gameState: GameState | null = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);
        const fastMode: NewFlashModeEnum = GlobalAccessReader.getGlobalData(GameGlobalKeys.TurboMode);
        if (fastMode !== NewFlashModeEnum.None) return;
        if (gameState && gameState === GameState.RE_SPINE) {
            //--只會在RS當下啟動第0軸的效果(且後兩軸是lock狀態)
            if (reelID === 0 || reelID === 1) {

                if (this._reelHaveReadyHandList[reelID]) {
                    //--在檢查是否為lock狀態
                    const getRoundLockStatus: boolean[] = this.getRoundLockStatus();
                    let canPlayReadyHand: boolean = false;
                    if (reelID === 0 && getRoundLockStatus[1] && getRoundLockStatus[2]) {
                        canPlayReadyHand = true;
                    } else if (reelID === 1 && getRoundLockStatus[0] && getRoundLockStatus[2]) {
                        canPlayReadyHand = true;
                    }


                    if (canPlayReadyHand) {

                        //--巨尷尬...這個聽牌的時間小於音效的時間阿
                        //SP_ReadyHands_AudioPlayer.getInstance().playSound(reelID);
                        const list = [
                            AudioSourceList.SP_ReadyHands_0,
                            AudioSourceList.SP_ReadyHands_1,
                            AudioSourceList.SP_ReadyHands_2,
                            AudioSourceList.SP_ReadyHands_3,
                            AudioSourceList.SP_ReadyHands_4
                        ];
                        AudioManager.instance.playSound(SoundList.Sc_Ready, SOUND_TYPE.NORMAL, list[reelID]);
                        //--直接開啟該軸黃色框效果
                        this.readyHandList[reelID].node.parent.active = true;
                        this.readyHandList[reelID].playAni({ aniState: 'Show' });
                        this.processDarkReelWithReadyHand(reelID, true);
                    }

                }
            }
        }
    }

    private _roundWaitShowReadyHand = new Set<number>();
    //private _turnOnReadyHandEffect: boolean = false;
    private processDarkReelWithReadyHand(reelID: number, spRuler: boolean = false): void {

        const state = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);
        //--第0軸不會走showReadyHand進來,會走onStartRollReadyHand進來
        const spReelRuler = (state == GameState.RE_SPINE && spRuler) ? [0, 1, 2, 3, 4] : [2, 3, 4];//--黃框固定出現的位置(原始資料)
        if (spReelRuler.includes(reelID)) {
            //--因為啟動聽牌效果(黃色框)的軸,會需要點亮
            this.setAllLightExcludeSymbolIds(true, [...SCATTER_LIST, ...WILD_LIST]);//--全軸變暗    
            this.reelList[reelID].wholeReelDark = false;
            this.setReelLight(reelID, false);//--亮起來

        } else {
            //this._roundWaitShowReadyHand.add(reelID);
        }
    }

    private getWaitReadyHandReelIDs(): number[] {

        const result: number[] = [];
        for (const id of this._roundWaitShowReadyHand) {
            result.push(id);
        }
        this._roundWaitShowReadyHand.clear();

        return result;
    }

    /**
     * onReelMoveOneStart他是在每一軸的最後round開始滾動前呼叫
     * @param reelID next(聽牌軸的下一軸reelID+1)
     */
    protected showReadyHand(reelID: number): void {

        //--這邊第0軸是不會進來的,如果第一軸進來也不會執行,X因為this.readyHandList[reelID]會是null
        //--20251117-現在5軸都具備黃色聽牌框

        if (!this.reelList[reelID].isLock) {
            //--特殊物件不參與聽牌的變暗效果
            this.processDarkReelWithReadyHand(reelID); // --20260204修改流程
            //this.setAllLightExcludeSymbolIds(true, [...SCATTER_LIST, ...WILD_LIST]);//--全軸變暗
            //this.setReelLight(reelID, false);//--亮起來

            if (this.readyHandList[reelID] != null) {
                //--巨尷尬...這個聽牌的時間小於音效的時間阿
                //--這邊這樣寫也很尷尬..因為onStartRollReadyHand就會處理0&1這兩軸的狀態
                if (reelID > 1) {
                    const list = [
                        AudioSourceList.SP_ReadyHands_0,
                        AudioSourceList.SP_ReadyHands_1,
                        AudioSourceList.SP_ReadyHands_2,
                        AudioSourceList.SP_ReadyHands_3,
                        AudioSourceList.SP_ReadyHands_4
                    ];
                    AudioManager.instance.playSound(SoundList.Sc_Ready, SOUND_TYPE.NORMAL, list[reelID]);

                    this.readyHandList[reelID].node.parent.active = true;
                    this.readyHandList[reelID].playAni({ aniState: 'Show' });
                }
            }

        } else {
            /**
             * <handoff要新增方法->檢查狀態/owner>
             * 有鎖定軸分兩種情況
             * 1.轉出來就是1*4(尚未handoff到表演層)--->呼叫reel的方法
             * 2.已經在表演層了--->直接呼叫global方法
             */
            //-<TO DO>--scatter也要播放forecast mode animation---
            //--整軸釘死的wild使用的
            this._mediator?.sendToMachine({ type: Call_Function_Type.CALL_SHOW_WILD_EXPECT, data: { reelIndex: reelID } } as ISlotCommand);

        }


        /**
         * 78企劃的需求
         * <這是給Scatter/wild物件使用的,非發亮的聽牌框>
         * 處理下列情況:
         * 已經是亮牌的狀態且能夠與檯面上的排組湊出吻合聽牌條件的S/W物件.
         * 將能夠驅動動硬的聽牌動畫效果
         * TIPS:
         * 所以計算聽牌的時候會把這些也算進去,這邊要挑開是否為需要黃色聽牌框的條件
         */
        if (reelID === 2) {

            if (this._reelHaveReadyHandList[0]) {
                this._mediator?.sendToMachine({ type: Call_Function_Type.CALL_SHOW_WILD_EXPECT, data: { reelIndex: 0 } } as ISlotCommand);
            }

            if (this._reelHaveReadyHandList[1]) {
                this._mediator?.sendToMachine({ type: Call_Function_Type.CALL_SHOW_WILD_EXPECT, data: { reelIndex: 1 } } as ISlotCommand);
            }

        }



    }



    protected hideReadyHand(reelID: number): void {
        //console.log('hideReadyHand:', reelID);
        this._countStopReel++
        console.log('hideReadyHand_countStopReel:', this._reelHaveReadyHandList);
        if (this._countStopReel === this.reelAmount) {
            this.setAllLight(false);
            this.stopAllExpectAni();
            this._mediator?.sendToMachine({ type: Call_Function_Type.CALL_HIDE_ALL_WILD_EXPECT, data: {} } as ISlotCommand);
        } else {
            /*
            if (this._countStopReel >= this._roundMaxReadyHandCount && !this._doResetReadyHand) {
                this._doResetReadyHand = true;
                //- this._reelHaveReadyHandList[readyId]   
                this.setAllLight(false);
            }*/
        }

        const list = [
            AudioSourceList.SP_ReadyHands_0,
            AudioSourceList.SP_ReadyHands_1,
            AudioSourceList.SP_ReadyHands_2,
            AudioSourceList.SP_ReadyHands_3,
            AudioSourceList.SP_ReadyHands_4
        ];
        AudioManager.instance.stopSound([list[reelID]]);

        if (this.readyHandList[reelID] != null) {
            let uiOpacity = this.readyHandList[reelID].node.parent.getComponent(UIOpacity);
            tween(uiOpacity)
                .to(0.2, { opacity: 0 })
                .call(() => {
                    this.readyHandList[reelID].playAni(AnimationStateType.Default);
                    this.readyHandList[reelID].node.parent.active = false;
                    uiOpacity.opacity = 255;
                })
                .start();
        }
    }

    private stopAllExpectAni(): void {

        for (let i = 0; i < this.reelList.length; i++) {
            this.reelList[i].stopAllExpectAni();
        }
    }

    protected createSymbolData(resultData: number[]): SymbolNumber[] {

        let symbolData: SymbolNumber[] = [];
        for (let index = 0; index < resultData.length; index++) {
            //let symbol = SymbolNumber.pool.instance();
            let symbol = new SymbolNumber();
            symbol.symbolID = resultData[index];
            symbolData.push(symbol);
        }
        return symbolData;
    }

    /**
     * 在呼叫stopRoll之前需要呼叫這個方法
     * 在停輪前設要補牌的資訊
     * type Direction = 'upward' | 'downward' | 'unknown';
     * interface IMatchWildGroupResult {
         reelIndex: number;//--有wild的軸
         groupIndex: number;//--這一組的index
         matchIndices: number[];//--這一組wild相連的index
         direction: Direction;//--這一組wild的方向(向上或向下)
         startIndex: number;//--這一組wild的起始位置
     }
        //--測試盤面1.[9, 8, 8, 0],2.[9, 9, 9, 1],[1,1,1,9]
        [
            {direction: "upward",groupIndex: 0,matchIndices: [0],reelIndex: 1,startIndex: 0},
            {direction: "upward",groupIndex: 0,matchIndices: [0, 1, 2],reelIndex: 2,startIndex: 2}
            {direction: "upward",groupIndex: 0,matchIndices: [3],reelIndex: 0,startIndex: 3}
        ]
     */


    /**
     * 1.有Scatter的軸-->最高
     * 2.有整軸Wild的軸-->次高
     * 4.其他依照原始排序照順序
     * Scatter 最後、Wild 次之、其他最前
     * @param cards 盤面資料
     * @param isAsc 升降排序開關
     * @returns 
     */
    private processSortReelLayerIndex(cards: number[][], isAsc: boolean = true): ISortReelLayerInfo[] {

        const defaultLayer: ISortReelLayerInfo[] = cards.map((card, index) => ({
            reel: index,
            index: 0,
            hasWild: card.includes(WILD_LIST[0]),
            hasScatter: card.includes(SCATTER_LIST[0]),
            //-寫預設Reel的原始layer位置資訊
            defaultReelIndex: this.reelList[index].defaultReelLayerIndex
        }));

        defaultLayer.sort((a, b) => {
            const getPriority = (item: ISortReelLayerInfo) => {
                if (isAsc) {
                    //--進場
                    // isAsc 為 true: Scatter 1, Wild 2 (小的在前)
                    // --0925修改,因為Scatter在一出現就被強制剝離到表演層
                    if (item.hasScatter) return 1;
                    if (item.hasWild) return 2;
                    return 0;
                } else {
                    // isAsc 為 false: Scatter 2, Wild 1 (小的在前)
                    // 為了讓 Wild (priority=1) 在 Scatter (priority=2) 前面

                    if (item.hasScatter) return 0;
                    if (item.hasWild) return 1;
                    //if (item.hasWild) return 1;
                    //if (item.hasScatter) return 2;
                    return 2;
                }


            };

            const pa = getPriority(a);
            const pb = getPriority(b);

            if (pa !== pb) {
                return pa - pb; // priority 小的在前，大的在後
            }

            // 如果 priority 一樣，保留原始順序（或用 defaultReelIndex）
            return a.defaultReelIndex - b.defaultReelIndex;

        });

        defaultLayer.forEach((item, index) => {
            item.index = index;
        });

        return defaultLayer;
    }
    /**
     * 進行軸的排序
     * <條件>
     * 1.有Scatter的軸-->最高
     * 2.有整軸Wild的軸-->次高
     * 4.其他依照原始排序照順序
     * @param cards  盤面資料
     */
    public reSortReelLayerIndex(cards: number[][], isAsc: boolean): void {

        const defaultLayer = this.processSortReelLayerIndex(cards, isAsc);
        for (let i: number = 0; i < defaultLayer.length; i++) {
            const reelSort = defaultLayer[i];
            const reel = this.reelList[reelSort.reel];
            reel.currentReelLayerIndex = reelSort.index;
            reel.node.setSiblingIndex(reelSort.index);
            // 檢查當前深度
            /*
            console.log(
                '=======reelSortInfo=======' + '\n' +
                `Reel=${reelSort.reel}, 排序Index=${reelSort.index}, 當前SiblingIndex=${reel.node.getSiblingIndex()}`
            );*/
        }

    }




    public beforeStopSetWildData(value: IMatchWildGroupResult[] = []): void {
        this._wildGroupResultData = value;
    }

    public resetWildData(): void {

        this._wildGroupResultData = [];
        for (const reel of this.reelList) {
            reel.singleWildGroupResultData = [];//--每次旋轉前都清空相關的wild資料
            reel.takeExtraCardsInRound = null;
        }
    }

    public reSetLockReels(): void {

        for (const reel of this.reelList) {
            reel.isLock = false;//--清空相關的lock資料
            reel.hasWholeWild = false;
            reel.hasWildMoved = false;
            reel.isFirstLockInRound = false;
        }
    }

    /**
     * 盤面僅出現1個未完整百搭滾輪時，「不」觸發不移動的動畫
     * 盤面出現2個以上未完整百搭滾輪，須同時表演不移動的動畫
     * @param reelIndex 
     * @returns 
     */
    public checkMovedReel(reelIndex: number[]): boolean {

        if (reelIndex.length < 1) return false;//---少於1軸不檢查(2軸算是吻合條件)
        const isNotWholeWildReels = [];
        const wholeWildReels = [];
        for (const index of reelIndex) {
            if (!this.reelList[index].isLock) {
                isNotWholeWildReels.push(index);
            } else {
                wholeWildReels.push(index);
            }
        }
        let checkFlag: boolean = false;
        if (isNotWholeWildReels.length >= 2) {
            checkFlag = true;
        } else if (isNotWholeWildReels.length === 1 && wholeWildReels.length >= 1) {
            checkFlag = true;
        }
        return checkFlag;
    }

    public getSingleReelIsFirstRoundLock(reelIndex: number): boolean {
        return this.reelList[reelIndex].isFirstLockInRound;
    }

    public getSingleReelIsLock(reelIndex: number): boolean {
        const isLock = this.reelList[reelIndex].isLock;
        return isLock;
    }


    /**
     * 找出這輪最大需要補牌的數量
     * (Direction.UPWARD)--往上連續-補牌在後端(所以是離場的時候才會塞進來)
     * 最後要拿這個>
     * wildData.direction === Direction.DOWNWARD
     * 從頭開始往下長(拿頭的)--往下連續-補牌在前端
     * 
     * @returns 
     */
    private getMaximumWildTakeCardNum(): { end: { len: number, index: number, reelIndex: number }, start: { len: number, index: number, reelIndex: number } } | null {

        let result: { end: { len: number, index: number, reelIndex: number }, start: { len: number, index: number, reelIndex: number } } | null = null;

        if (this._wildGroupResultData.length > 0) {

            const maxLength = 4;//--wild的最大長度(1*4) 
            const maxData_Down = { len: 0, index: 0, reelIndex: 0 };//--往下補牌
            const maxData_Up = { len: 0, index: 0, reelIndex: 0 };//--往上補牌
            result = { end: maxData_Down, start: maxData_Up };
            for (let i: number = 0; i < this._wildGroupResultData.length; i++) {
                //-找出補牌數後,比較最大值
                const wildData = this._wildGroupResultData[i];
                const takeCardNum = maxLength - wildData.matchIndices.length;
                const direction = wildData.direction;
                if (direction === Direction.DOWNWARD) {
                    //-從頭開始往下長(拿頭的)--往下連續-補牌在前端
                    if (takeCardNum > maxData_Down.len) {
                        maxData_Down.len = takeCardNum;
                        maxData_Down.index = i;
                        maxData_Down.reelIndex = wildData.reelIndex;
                    }

                } else if (direction === Direction.UPWARD) {
                    //-往上連續-補牌在後端(所以是離場的時候才會塞進來)
                    if (takeCardNum > maxData_Up.len) {
                        maxData_Up.len = takeCardNum;
                        maxData_Up.index = i;
                        maxData_Up.reelIndex = wildData.reelIndex;
                    }
                }
            }

        } else {
            result = null;
        }

        return result;

    }
    /**
     * 去寫每一軸是否需要補牌
     * PS:
     * 為了讓在沒有Wild的軸他的停止速度可以與有wild的軸一致
     * 所以整個盤面在有wild的情況下,非wild的軸也要補牌(亂數補就好了,統一捕尾端)
     * 1.如果沒有Wild出現在該round就不需要整盤補牌
     * 2.有Wild出現在該round,非Wild的軸也要補牌(統一捕尾端-因為Cut牌會累加從尾端cut)
     * 3.有Wild出現在該round,有Wild的軸補牌(補在wild的位置..補滿4個)
     */
    private setRoundTakeCards(): { end: { len: number, index: number, reelIndex: number }, start: { len: number, index: number, reelIndex: number } } | null {

        const maxWildTakeCardNum = this.getMaximumWildTakeCardNum();
        for (let reelID = 0; reelID < this.reelList.length; reelID++) {
            this.reelList[reelID].takeExtraCardsInRound = maxWildTakeCardNum;
        }
        return maxWildTakeCardNum;
    }
    //--改變icon symbol資料的地方
    /**
     * stopRoll的時候,盤面資料會塞進去
     * PS:盤面鎖定是不會走這個流程的
     * 裡面每一軸的callback在stop前,會call這個方法並且把那個資料帶進去
     * @param reelID 
     * @param data 
     * 
     */
    protected setReelData(reelID: number, data: number[]): void {

        let length = this.calculateRandomDataLength(reelID);//可以在這裡加隨機資料，實現間隔暫停;

        /*
        if (!this.isFastModeCallback()) {
            length = this.calculateRandomDataLength(reelID);//可以在這裡加隨機資料，實現間隔暫停
        }*/

        //--以下為新增方法
        if (this._wildGroupResultData.length > 0) {

            const targetReel = this._wildGroupResultData.filter(obj => obj.reelIndex === reelID)
            if (targetReel.length > 0) {
                this.reelList[reelID].singleWildGroupResultData = targetReel;//--把要補牌的資料塞進去
            }
        }
        //--以上為新增方法
        this.reelList[reelID].setData(data, length);
        /*
        if (extraLength > 0) {
            GameUtilsTools.debugLog(
                DEBUG_TITLE,
                'setReelData',
                {
                    title:`reel ${reelID} 延長 ${extraLength} 筆假資料 (因前一軸聽牌)`,
                    extraLength: extraLength,
                    ogLen: length,
                    total:finalLength,
                    readyHand:debugRedayHand
                }
                
            );
            console.log();
        }*/
    }

    //--每一軸的最後round要開始演了
    protected onStartRollInFinal = (reelID: number): void => {
        this.oneReelFinalStartCallBack?.(reelID);
    }

    private checkHaveReadyHand(): boolean {
        for (const haveReadyHand of this._reelHaveReadyHandList) {
            if (haveReadyHand) return true;
        }
        return false;
    }

    private async checkShowReadyHandFromEnd(reelID: number): Promise<void> {

        if (this.isFastModeCallback()) {

            if (this.checkHaveReadyHand()) {
                this.stopAllExpectAni();
                this._mediator?.sendToMachine({ type: Call_Function_Type.CALL_HIDE_ALL_WILD_EXPECT, data: {} } as ISlotCommand);
            }
            return;
        }
        //---20260205-new 78企劃

        const bouncePromise = this.reelList[reelID].getEndBouncePromise();
        if (bouncePromise) {
            const completedReelID = await bouncePromise; // 等待 bounce，返回 reelID
            /*
            if (completedReelID !== reelID) {
                console.warn(`Bounce reelID mismatch: expected ${reelID}, got ${completedReelID}`);
            } else {
                console.log('bounce completed for reelID:', completedReelID);
            }*/
        }
        const nextIndex = reelID + 1;
        if (nextIndex >= this._reelIsReadyHandList.length) {
            return;//--最後一軸了啦
        }

        await this._waiters.get(nextIndex - 1)!.promise;

        if (!this._reelIsReadyHandList[nextIndex]) {

            const haveReadyHand: boolean = this._reelHaveReadyHandList[nextIndex];
            if (haveReadyHand) {
                this.showReadyHandCallback(nextIndex);//--這邊是取下一軸
                this._reelIsReadyHandList[nextIndex] = true;
            }
        }
        // 標記自己完成，放行下一個
        this._waiters.get(nextIndex)!.resolve();
    }

    //--取得當前每一軸的鎖定狀態
    private getRoundLockStatus(): boolean[] {
        const lockStatus: boolean[] = [];
        for (let i = 0; i < this.reelList.length; i++) {
            lockStatus.push(this.reelList[i].isLock);
        }
        return lockStatus;
    }

    //--取得本輪第一個聽牌軸的ID
    private getFirstReadyHandReelID(currentLock: boolean[]): number {

        const gameState: GameState | null = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);

        for (let i = 0; i < this._reelHaveReadyHandList.length; i++) {

            if (this._reelHaveReadyHandList[i]) {

                if (gameState === GameState.RE_SPINE && (i === 0 || i === 1)) {
                    //---RS狀態下第一軸或第二軸要檢查鎖定狀態
                    if (i === 0) {
                        if (currentLock[1] && currentLock[2]) {
                            return i;
                        }
                    } else if (i === 1) {
                        if (currentLock[0] && currentLock[2]) {
                            return i;
                        }
                    }

                } else {
                    return i;
                }

            }
        }
        return -1;
    }


    //--延遲停止的隨機資料長度計算(因為停止決定在資料的長度...所以就可以自己亂塞藉此增加資料長度來延長停止時間)
    /**
     * 計算每一軸需要補幾筆隨機假資料，用於控制滾動時間與停輪順序。
     * - 依據停輪延遲時間 (delayStopTime) 換算出時間差
     * - 若該軸啟動聽牌效果，則額外延長固定的 readyHandTime
     * - 最終將「時間」換算為「需要補的假資料筆數」
     *
     * @param reelID 目標軸 ID
     * @returns 要補的假資料筆數
     */
    public calculateRandomDataLength(reelID: number): number {

        const orderList = this._currentRollingReelIDs.slice();
        const readySet = new Set<number>();
        for (const id of orderList) {
            if (this._reelHaveReadyHandList[id]) readySet.add(id);
        }
        const gameState: GameState | null = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);
        const timeList = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList);
        const delayStopTime = timeList.get(cfg => cfg.stop?.staggerStop); // 每軸停輪間隔
        const readyHandTime = timeList.get(cfg => cfg.forecast?.eachReel); // 每軸聽牌表演時間
        const moveInterval = this.reelList[0].getmoveInterval(); // 每個 icon 移動一格的時間-這邊是0.05秒
        const lockStatus = this.getRoundLockStatus();//--取得當前每一軸的鎖定狀態
        const firstReadyReelID = this.getFirstReadyHandReelID(lockStatus);
        const previousStatus = lockStatus.slice(0, reelID);// 取得索引值從 0 到 reelID - 1 的子陣列
        const trueCount = previousStatus.filter(isLocked => isLocked === true).length;//--取出該軸之前有幾個鎖定
        /**
         *  const getRoundLockStatus: boolean[] = this.getRoundLockStatus();
                    let canPlayReadyHand: boolean = false;
                    if (reelID === 0 && getRoundLockStatus[1] && getRoundLockStatus[2]) {
                        canPlayReadyHand = true;
                    } else if (reelID === 1 && getRoundLockStatus[0] && getRoundLockStatus[2]) {
                        canPlayReadyHand = true;
                    }

         */
        const index = orderList.indexOf(reelID);
        if (index === -1) throw new Error(`reelID=${reelID} 不在 _currentRollingReelIDs 內`);
        // === 找出在該軸之前的所有 ready(聽牌) 軸 ===
        const isReady = readySet.has(reelID);
        const beforeNowLocks = this.checkReelLocksStateBeforeReel(reelID);
        const prevReadyCount = orderList
            .slice(0, index)
            .filter((id, i) => {
                //--非鎖定軸狀態才會使用聽牌延遲
                //--FG不會有聽牌
                if (gameState == GameState.NORMAL && i >= 2 && readySet.has(id) && !lockStatus[i]) {
                    return true;   // 保留( NG-條件：index >= 2 才算(NG不可能具備前兩軸聽牌條件))

                } else if (gameState == GameState.RE_SPINE) {
                    if (i == 0 && lockStatus[1] && lockStatus[2] && readySet.has(id)) {
                        return true;   // 第一軸特殊條件聽牌
                    } else if (i == 1 && lockStatus[0] && lockStatus[2] && readySet.has(id)) {
                        return true;   // 第二軸特殊條件聽牌
                    } else if (i > 1 && readySet.has(id) && !lockStatus[i]) {
                        return true;   // RS-條件：鎖定軸才算(前兩軸有可能是聽牌軸)-25251124-企劃修改
                    }
                }
                return false;
            })
            .length;
        // === 累積時間公式 ===
        //--檢查當前軸目前是否為鎖定的狀態
        const isLock = lockStatus[reelID];//---鎖定不需要累計逐輪停頓時間
        let stopDelay = 0;
        let prevReadyDelay = 0;
        let selfExtraDelay = 0;
        //--取得當前輪次需要補牌的資訊(這邊是已經算完需要補的牌數)
        const extraCardsNumberEnd = this._currentRoundTakeCardsInfo?.end.len ?? 0;//--主要使用的尾端補牌(進場)
        const extraCardsTimeEnd = (extraCardsNumberEnd * moveInterval).fixed();
        //--出場用的補牌數量(他會在下一輪開始的時候使用,所以時間要再扣除這個)
        const extraCardsNumberOut = this.reelList[reelID].upConsecutiveExtraCardsData.length;
        //--這邊已經在上一輪的時候補過了,會在下一輪開始的時候使用,所以新一輪進場時間要再扣除這個
        const extraCardsNumberOutTime = (extraCardsNumberOut * moveInterval).fixed();

        // 確保即便扣除補牌時間後，滾輪依然有最起碼的旋轉感 (例如 0.25秒，約 5 格)
        //const baseSpinTime = (extraCardsNumberEnd > 0) ? delayStopTime : 0;
        const baseSpinTime = 0;

        //--20251104-TODO-聽牌要再修過-補牌後有點超過一軸2秒
        if (isLock) {
            //--該軸有鎖定整輪的狀態下,不需要累計時間(先這樣寫,免得之後又要改來改去) 
            stopDelay = 0;
            prevReadyDelay = 0;
            selfExtraDelay = 0;

        } else {
            if (isReady) {

                if (reelID <= 1) {
                    const targetFinalDelay_ready = (index * delayStopTime).fixed();
                    stopDelay = (targetFinalDelay_ready + extraCardsTimeEnd + extraCardsNumberOutTime + baseSpinTime).fixed();
                    //stopDelay = (targetFinalDelay + extraCardsTimeEnd + extraCardsNumberOutTime).fixed();
                    selfExtraDelay = 0;
                } else {
                    //stopDelay = 0;//--先遮蔽20251218

                    stopDelay = (firstReadyReelID * delayStopTime).fixed();
                    selfExtraDelay = readyHandTime;//-2
                    this._roundReadyStatus[reelID] = true;

                }

                if (gameState === GameState.RE_SPINE) {

                    const conditionA = reelID === 0 && lockStatus[1] && lockStatus[2];
                    const conditionB = reelID === 1 && lockStatus[0] && lockStatus[2];

                    if (conditionA || conditionB) {
                        this._roundReadyStatus[reelID] = true;
                        selfExtraDelay = (reelID == 0) ? 1 : readyHandTime; // 自身延遲（若有）
                        // 確保這 1 秒或 readyHandTime 是從補牌結束後才開始算的
                        stopDelay = (extraCardsTimeEnd + extraCardsNumberOutTime).fixed();

                    }
                }

                /*
                //--扣掉前面聽牌的軸數(要扣掉自己,自己聽牌的軸不需要疊加delayTime)
                //const delayWithOutReady = index - prevReadyCount - 1;
                // 基礎停輪時間(軸的間隔時間*實際停輪軸數)
                stopDelay = (reelID <= 1) ? (delayStopTime * index).fixed() : 0;
                selfExtraDelay = (reelID > 1) ? readyHandTime : 0;// 自身延遲（若有）
                if (selfExtraDelay > 0) {
                    this._roundReadyStatus[reelID] = true;
                }

                if (gameState === GameState.RE_SPINE) {

                    const conditionA = reelID === 0 && lockStatus[1] && lockStatus[2];
                    const conditionB = reelID === 1 && lockStatus[0] && lockStatus[2];

                    if (conditionA || conditionB) {
                        this._roundReadyStatus[reelID] = true;
                        selfExtraDelay = (reelID == 0) ? 1 : readyHandTime; // 自身延遲（若有）
                        stopDelay = 0;
                    }
                }*/

            } else {

                /**
                 * <取消扣除邏輯..直接疊加上去>
                 * 在補牌的狀態下,第一軸雖然是0秒但是補上了補牌後,與第2軸的差距所剩無幾
                 * e.g:
                 * 原本是第0軸0秒,第2軸0.2秒-在全體補3張後,扣除延遲
                 * 第0軸=0+(3*0.05)=0.15秒,第2軸=0.2+(3*0.05)=0.35秒
                 * 這樣差距就只剩0.2秒-0.15秒=0.05秒
                 * 所以index要+1
                 */
                // === 核心修改 ：逆向計算公式優化 ===

                let realStopIndex = index;


                if (beforeNowLocks > 0) {
                    realStopIndex = index - beforeNowLocks;
                }


                if (beforeNowLocks > 0) {
                    realStopIndex = index - beforeNowLocks;
                } else if (prevReadyCount > 0) {
                    realStopIndex = index - (prevReadyCount + 1);//--要與最後一次停的時間相同
                }

                if (realStopIndex < 0) realStopIndex = 0;

                // 目標最終延遲 = (索引間隔 * 間隔時間)
                const targetFinalDelay_noReady = (realStopIndex * delayStopTime).fixed();

                // 修正後的 StopDelay = 目標時間 + 補牌補償 + 基礎旋轉保底
                // 這樣在後續統一減去補牌時間後，會剛好剩下 (targetFinalDelay + baseSpinTime)
                stopDelay = (targetFinalDelay_noReady + extraCardsTimeEnd + extraCardsNumberOutTime + baseSpinTime).fixed();


                //----還是有相同的問題
                //1. 計算修正後的停輪索引 (跳過前面鎖定軸的時間間隔)
                // 決定 TotalTime_final 應該是多少
                /*
                let realStopIndex = index;
                if (beforeNowLocks > 0) {
                    realStopIndex = index - beforeNowLocks;
                }

                // 確保索引不會小於 0
                if (realStopIndex < 0) realStopIndex = 0;
                // 2. 目標最終延遲時間 (TotalTime_final)
                const targetFinalDelay = (realStopIndex * delayStopTime).fixed();

                // 3. 逆向計算所需的 StopDelay (TotalTime_raw)
                // TotalTime_raw = Target_Final_Delay + ExtraCardsTime_in + ExtraCardsTime_out
                stopDelay = (targetFinalDelay + extraCardsTimeEnd + extraCardsNumberOutTime).fixed();
                selfExtraDelay = 0;
                */


                /*
                let realIndex = index + 1;
                if (beforeNowLocks > 0) {
                    if (index >= 2) {
                        realIndex = index - beforeNowLocks + 1;
                    }
                }
                stopDelay = (realIndex * delayStopTime).fixed();//-在補牌的狀態下,第一軸雖然是0秒但是補上了補牌後,與第2軸的差距所剩無幾    
                selfExtraDelay = 0;
                */
            }
            //--要檢查第一軸是否有聽牌不然會多一秒-
            //--這邊要算前面如果有聽牌的軸或是他鎖定且聽牌的軸的延遲時間
            prevReadyDelay = (prevReadyCount * readyHandTime).fixed(); // 前面所有聽牌延遲
            if (this._roundReadyStatus[0] && prevReadyDelay > 0) {
                //--第一軸啟用聽牌效果
                prevReadyDelay = prevReadyDelay - 1;
            }

        }

        //let stopDelay = (delayStopTime * index).fixed(); // 基礎停輪時間
        //let prevReadyDelay = (prevReadyCount * readyHandTime).fixed(); // 前面所有聽牌延遲
        //let selfExtraDelay = (isReady && reelID > 1) ? readyHandTime : 0; // 自身延遲（若有）
        let totalTime = stopDelay + prevReadyDelay + selfExtraDelay;



        if (totalTime > 0) {
            totalTime = (totalTime - extraCardsTimeEnd - extraCardsNumberOutTime).fixed(); // 扣掉補牌時間(reel內部會自己會加回來)
            // 二次保險：確保 totalTime 不會因為精度或特殊情況變成負數

            if (totalTime < baseSpinTime && !isLock) {
                totalTime = baseSpinTime;
            }
        }

        // === 轉換為假資料長度 ===
        const dataLength = Math.ceil(totalTime / moveInterval);
        /*
        const ogTime = totalTime;
        GameUtilsTools.debugLog('CHECK_TIME', 'calculateRandomDataLength', {
            reelID: reelID,
            roundStatus: this._roundReadyStatus,
            index: index,
            isReady: isReady,
            isLock: isLock,
            lockStatus: lockStatus,
            readyHandList: this._reelHaveReadyHandList,
            prevReadyCount: prevReadyCount,
            stopDelay: stopDelay,
            prevReadyDelay: prevReadyDelay,
            selfExtraDelay: selfExtraDelay,
            readyHandTime: readyHandTime,
            moveInterval: moveInterval,
            trueCount: trueCount,
            extraCardsNumberEnd: extraCardsNumberEnd,
            extraCardsTimeEnd: extraCardsTimeEnd,
            extraCardsNumberOut: extraCardsNumberOut,
            extraCardsNumberOutTime: extraCardsNumberOutTime,
            takeCardsInfo: this._currentRoundTakeCardsInfo,
            ogTime: ogTime,
            totalTime: totalTime,
            dataLength: dataLength
        });*/

        return dataLength;
    }

    /**
     * 檢查自己前面的軸是用過幾次聽牌效果
     * @param reelId 
     */
    private checkRoundUseReadyHand(reelId: number): number {

        let count = 0;
        for (let i = 0; i < reelId; i++) {
            if (this._roundReadyStatus[i]) {
                count++;
            }
        }
        return count;
    }


    private checkReelLocksStateBeforeReel(reelId: number): number {

        const lockStatus = this.getRoundLockStatus();
        let count = 0;
        for (let i = 0; i < reelId; i++) {
            if (lockStatus[i]) {
                count++;
            }
        }
        return count;
    }

    //====debug用====
    public testHideIcon(reelIndex: number, iconIndex: number): void {
        this.reelList[reelIndex].testHideIcon(iconIndex);
    }

    public testAddSymbol(reelIndex: number, iconIndex: number): void {
        this.reelList[reelIndex].testAddSymbol(iconIndex);
    }

}