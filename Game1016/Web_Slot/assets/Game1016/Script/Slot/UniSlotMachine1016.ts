import { _decorator, Node, Vec3, game, macro } from 'cc';
import { UniSlotMachine } from './ReferencePathForUniSlot';
import { DIAgentFactory } from './DIFactory/DIAgentFactory';
import { UniReelView1016 } from './UniReelView1016';
import { IStrategyRandomGenerator } from '../MyUtils/BasicRandomGenerator/IStrategyRandomGenerator';
import { IdiotInitRandomGenerator, IRandomData } from '../MyUtils/BasicRandomGenerator/IdiotInitRandomGenerator';
//import { IRandomData, InitRandomGenerator } from '../MyUtils/BasicRandomGenerator/InitRandomGenerator';
import { IWildMovementData, IBasicMovementData, IWildMovementDataNew } from './ISlotDefinitionData';
import { SlotRequestEvent, SlotNotifySubject, SlotResponseSubject } from '../EventData1016/DefinitionEventData1016';
import { IFunctionOwnerAgent, FunctionType } from '../AniMediator1016/CrossSystemFun/IFunctionOwnerAgent';
import { IDirtyCrossSysServiceFacade } from '../AniMediator1016/CrossSystemFun/IDirtyCrossSysServiceFacade';
import { Call_Function_Type } from '../AniMediator1016/CrossSystemFun/DefinitionFunctionType';
import {
    NotifyCation,
    IReelInfo,
    IPlayAniData,
    IMatchWildGroupResult,
    SymbolOwnerAgentID,
    IAnimationControl,
    GameUtilsTools
} from '../ReferencePath';
import { SlotMediator } from './SlotMediator';
import { IMediatorColleague, ISlotCommand } from './IMediator/ISlotCommand';
import { GlobalAccessReader } from '../DefinitionGameData1016/AccessDefs/GlobalAccess';
import { GameGlobalKeys } from '../DefinitionGameData1016/GameGlobalData1016';

const DEBUG_TITLE = 'UniSlotMachine1016';
const { ccclass, property } = _decorator;
@ccclass('UniSlotMachine1016')
export class UniSlotMachine1016 extends UniSlotMachine<UniReelView1016> implements IFunctionOwnerAgent, IMediatorColleague {

    public onStartRollCallBack: () => void = null;
    public oneReelFinalStartCallBack: (reelID: number) => void = null;
    public oneReelRollEndCallBack: (reelID: number) => void = null;
    private _aniCrossServiceProxyFactory: DIAgentFactory = null;
    private _crossSystemSymbolAniService: IDirtyCrossSysServiceFacade<IReelInfo, Node, string> = null;
    private _aryReelAmountIds: number[] = []; //--盤面預定顯示的軸數量分布
    //--ISymbolOwnerAgent
    public readonly ownerId: number = SymbolOwnerAgentID.SlotMachine;
    //--slotMediator
    private _mediator: SlotMediator | null = null;
    private _interruptFlag: boolean = false;
    private _cancelTimeDelay?: () => void;
    private _currentCards: number[][] = [];
    private _onlyOnceToSort: boolean = false;
    //--checkFastStopMode
    private _isFastStopClick: boolean = false;
    private _doStop: boolean = false;
    private _testTime: number = 0;
    private _testEndTime: number = 0;

    private _previousCards: number[][] = [];
    //--DI轉接facade的動畫服務
    set aryReelAmountIds(value: number[]) {
        this._aryReelAmountIds = value;
    }
    //--確認是否為快速即停模式
    get isFastStopClick(): boolean {
        return this._isFastStopClick;
    }

    constructor() {
        super();
    }

    update(dt: number): void {
        //super.update(dt);
        this._reelView.updateIcons(dt);
    }

    public override init(): void {
        super.init();

        //--掛載跨組件呼叫服務事件
        NotifyCation.getInstance().on(
            SlotNotifySubject.GAME_SLOT_SUBJECT,
            SlotRequestEvent.GET_WORLD_POSITION,
            this.handleGetWorldPosition,
            this
        );

        NotifyCation.getInstance().on(
            SlotNotifySubject.GAME_SLOT_SUBJECT,
            SlotRequestEvent.GET_SP_MOVEMENT,
            this.getWildMovementDataFromEvent,
            this
        );

        //--產生盤面首盤資料
        this.setGenericRandomCreator();
    }

    public registerService(value: IDirtyCrossSysServiceFacade<IReelInfo, Node, string>): void {

        this._crossSystemSymbolAniService = value;
        this._crossSystemSymbolAniService.registerYourself(this);
        //--再產生盤面首盤資料前要先注入
        this._aniCrossServiceProxyFactory = new DIAgentFactory(this._crossSystemSymbolAniService, this);
        this._reelView.injectAniService(this._aniCrossServiceProxyFactory);
        this._mediator = new SlotMediator(this, this._reelView);
        this._reelView.registerMediator(this._mediator);
    }

    //===================interface<IBasicShowAniProcess>===================
    /**
     * 再產生的時候就會動態產生IPlayAniData
     * PS-會把世界座標產生好
     * @param info IPlayAniData
     * @returns 
     */
    public beforeRelease(info: Pick<IReelInfo, "reelIndex" | "iconIndex">): Node | null {
        //--抽出動畫物件
        const { reAssign, aniNode } = this._reelView.getExistingAniDataNode(info as IPlayAniData);
        //GameUtilsTools.debugLog(DEBUG_TITLE, 'beforeRelease', { info, reAssign, aniNode });
        return aniNode;
    }

    /**
     * <<接手後要做的事>>
     * 跟showAniController交接動畫物件,交接完成會把AniNode,轉送進來這裡
     * <單筆資料>
     * @param info
     * @param node
     */
    public afterAcquire(info: Pick<IReelInfo, "reelIndex" | "iconIndex">, node: Node): Promise<void> {
        return this._reelView.setAniNodeBackToReel(info as IPlayAniData, node);
    }

    /**
     * <<接手後要做的事>>
     * 跟showAniController交接動畫物件,交接完成會把AniNode,轉送進來這裡
     * <多筆資料>
     * @param mapInfo --這個是從showAniController接手多個動畫物件的資料
     */
    public async afterMultiAcquire(mapInfo: Map<string, { data: Pick<IReelInfo, "reelIndex" | "iconIndex">, node: Node }>): Promise<void> {

        //GameUtilsTools.debugLog(DEBUG_TITLE, 'afterMultiAcquire', mapInfo);
        const promises: Promise<void>[] = [];
        for (const [key, { data, node }] of mapInfo.entries()) {
            promises.push(this._reelView.setAniNodeBackToReel(data as IPlayAniData, node));
        }
        await Promise.all(promises);
    }

    public crossProcess(processType: FunctionType): void {
        switch (processType.name) {
            case Call_Function_Type.GET_WORLD_POSITION:

                break;

            case Call_Function_Type.SET_ICON_BRIGHTNESS:

                this.setIconLight(processType.args[0] as number, processType.args[1] as number[], processType.args[2] as boolean);
                break;

            case Call_Function_Type.SET_ALL_REEL_BRIGHTNESS:
                this.setAllLight(processType.args[0] as boolean);
                break;
        }
    }

    public crossMultiProcess(processType: FunctionType[]): void {
        //-懶得寫了,因為沒有用到這個功能^_^
    }

    //===================interface<IMediatorColleague>===================
    public onMediatorCommand(cmd: ISlotCommand): void {
        //GameUtilsTools.debugLog(DEBUG_TITLE, 'onMediatorCommand', cmd);

        // Handle commands from the mediator 
        //這邊直接透過crossProcess 反向呼叫showAniController的方法

        switch (cmd.type) {
            case Call_Function_Type.CALL_SHOW_WILD_EXPECT:

                this._crossSystemSymbolAniService.processOwnerFunction({
                    name: Call_Function_Type.CALL_SHOW_WILD_EXPECT,
                    ownerId: SymbolOwnerAgentID.ShowAniController,
                    args: [(cmd as any).data.reelIndex]
                } as FunctionType);
                break;

            case Call_Function_Type.CALL_HIDE_WILD_EXPECT:

                this._crossSystemSymbolAniService.processOwnerFunction({
                    name: Call_Function_Type.CALL_HIDE_WILD_EXPECT,
                    ownerId: SymbolOwnerAgentID.ShowAniController,
                    args: [(cmd as any).data.reelIndex]
                } as FunctionType);
                break;

            case Call_Function_Type.CALL_HIDE_ALL_WILD_EXPECT:

                this._crossSystemSymbolAniService.processOwnerFunction({
                    name: Call_Function_Type.CALL_HIDE_ALL_WILD_EXPECT,
                    ownerId: SymbolOwnerAgentID.ShowAniController,
                    args: []
                } as FunctionType);
                break;
        }
    }

    //===================interface<IBasicShowAniProcess>===================
    //--抽取wild/scatter位移資料
    private getWildMovementDataFromEvent = (payload: { reelIndex: number; iconIndex: number }): void => {

        const wildMovementData = this.getWildMovementData(payload.reelIndex);
        //--這邊要再補判斷
        NotifyCation.getInstance().emitSync(SlotResponseSubject.RES_GAME_SLOT_SUBJECT, SlotRequestEvent.GET_SP_MOVEMENT, wildMovementData);
    }

    //--抽取世界座標from showAniController
    private handleGetWorldPosition = (payload: { reelIndex: number; iconIndex: number }): void => {

        const pos = this._reelView.getExistingAniWPos(payload.reelIndex, payload.iconIndex);
        NotifyCation.getInstance().emitSync(SlotResponseSubject.RES_GAME_SLOT_SUBJECT, SlotRequestEvent.GET_WORLD_POSITION, pos);
    }

    public testFunction(): void {
        this._reelView.testFunction();
    }


    public registerStartRollCallBack(): void {

        this._reelView.oneReelRollEndCallBack = this.onOneReelStopRoll;//--單軸停止
        this._reelView.oneReelFinalStartCallBack = this.oneReelFinalStartCallBack;//--單軸最後一次開始(顯示結果)
    }

    //--之後要改成透過繼承的方式塞進來
    private setGenericRandomCreator(): void {

        //--20260105改用笨蛋亂數產生器--企劃要求要與遊戲設計相符合<有機率的連續性>
        const randomInit = this.initIconSymbol<IRandomData, number[][]>(new IdiotInitRandomGenerator(), {
            groupSize: 6,
            totalGroups: 5,
        });

        (<UniReelView1016>this._reelView).initIconSymbol(randomInit);
        /*
        const randomInit = this.initIconSymbol<IRandomData, number[][]>(new InitRandomGenerator(), {
            groupSize: 6,//--一軸有幾個icon就送幾個(要多產2個因為上下會生出來,不然資料不夠)
            totalGroups: 5,//--有幾軸就送幾軸的資料
            randomGroupSource: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        });

        (<UniReelView1016>this._reelView).initIconSymbol(randomInit);
        */
    }

    private initIconSymbol<TInput, TResult>(generator: IStrategyRandomGenerator<TInput>, value: TInput): TResult {
        //--要產出亂數初始盤面2ds
        return generator.generate(value) as TResult;
    }

    private onOneReelStopRoll = (reelID: number): void => {

        if (!this._onlyOnceToSort) {
            this._onlyOnceToSort = true;
            this.sortReelLayerIndex(this._currentCards, true);//--進場
            //GameUtilsTools.debugLog(DEBUG_TITLE, 'onOneReelStopRoll', { reelID });
        }
        //const endTime = Date.now();
        //GameUtilsTools.debugLog('CHECK_TIME', 'SingleReel_Stop_Time', { reelID, endTime, start: this._testEndTime, during: endTime - this._testEndTime }, 'log');
        this.oneReelRollEndCallBack?.(reelID);
    }

    //========================override 父類別方法========================

    public override async startRoll(isTurboMode: boolean, reelIDs?: number[]): Promise<void> {

        let currentReelIDs: number[] = (reelIDs) ? reelIDs : this._aryReelAmountIds;
        this._onlyOnceToSort = false;
        this._testTime = GameUtilsTools.getTimeStamp();
        await super.startRoll(isTurboMode, currentReelIDs);
        this.onStartRollCallBack?.();
    }

    /**
     * 
     * @param resultData --每一軸的資料(原本方法是number[][])
     * @param option ---這個是情非得已的override..option只能給自己用
     * 這邊全部停軸後會resolve,全停就寫在這個後面就好了
     * stopRollCallBack---快速停(guiBtn會接到這個function)
     */
    public override async stopRoll(resultData: number[][], option?: IMatchWildGroupResult[]): Promise<void> {

        this.beforeStopSetWildData(option);
        this._currentCards = GameUtilsTools.deepClone(resultData);
        this.setScatterInReelData(resultData);
        //await super.stopRoll(resultData);
        this._iconResultData = [...resultData];
        await this.canStopRoll();
        this._doStop = true;
        await this._reelView.stopRoll(this._iconResultData, this.stopType);


        //const lastTime = this._testTime;
        //const currentTime = GameUtilsTools.getTimeStamp();
        //this._testEndTime = currentTime;
        //GameUtilsTools.debugLog('CHECK_TIME', 'TotalRollTime', { lastTime, currentTime, during: currentTime - lastTime }, 'log');

        //const finish = GameUtilsTools.getTimeStamp();
        //GameUtilsTools.debugLog('CHECK_TIME', 'ALLREEL_Stop_Time', { currentTime, finish, during: finish - currentTime }, 'log');
        //GameUtilsTools.debugLog('CHECK_TIME', 'ALL_RUNTIME_TO_END', { lastTime, finish, during: finish - lastTime }, 'log');
    }

    protected override async canStopRoll(): Promise<void> {
        /*
        const timeList = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList);
        const timeBase = (this.isFastMode()) ?
            this._fastRollTime :
            timeList.get(cfg => cfg.roll?.totalRoll);//--這邊要再分是哪一階段的加速

        const timeDefer = GameUtilsTools.DeferByTweenPromiseWithCancel(timeBase);
        this._cancelTimeDelay = timeDefer.forceCancelAndResolve; // 暫存取消方法供 stopRollCallBack 使用 
        */
        const dataPromise = new Promise<void>((resolve) => {
            const check = () => {
                if (this._iconResultData.length > 0 && this._startRoll) {
                    this.unschedule(check);
                    resolve();
                }
            };

            this.schedule(check, 0, macro.REPEAT_FOREVER);
        });
        //const testStartTime = Date.now();
        //await Promise.all([timeDefer.promise, dataPromise]);
        await dataPromise;
        //const testEndTime = Date.now();
        //const testTime = testEndTime - testStartTime;
        //GameUtilsTools.debugLog('GameViewManager1016_TimeBase', 'RollingTime', { testTime }, 'log');
        this._canStop = true;
        //const gameTimeMode = GlobalAccessReader.getGlobalData(GameGlobalKeys.TurboMode);
        if (this._interruptFlag) {
            this._isFastStopClick = true;
            //this._reelView.fastStopRoll();
            this.manualStopClickProcess();
        }
        this._cancelTimeDelay = null;
    }

    private manualStopClickProcess(): void {

        this._reelView.fastStopRoll();
        const speed = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.roll?.superMoveInterval) as number;
        this._reelView.changeReelMoveInterval(speed);

    }

    //--玩家按下stop按鈕會呼叫這個
    public override stopRollCallBack(): void {

        if (this._isStopClick && this._doStop) return;
        this._isStopClick = true;
        if (this._canStop) {
            this._isFastStopClick = true;
            //this._reelView.fastStopRoll();
            this.manualStopClickProcess();
        } else {
            this._interruptFlag = true;
            if (this._cancelTimeDelay) {
                // 提前結束 DeferByTweenPromiseWithCancel
                this._cancelTimeDelay();
            }
        }
    }

    /**
     * 重設reel的wild資料
     * @param value --wild的資料
     */
    public beforeStopSetWildData(value: IMatchWildGroupResult[]): void {
        this._reelView.beforeStopSetWildData(value);
    }
    /**
     * 重設盤面軸深度排序<廢棄->維持原設定<右壓左>>
     * @param cards --每一軸的資料
     */
    public sortReelLayerIndex(cards: number[][], isAsc: boolean): void {
        this._reelView.reSortReelLayerIndex(cards, isAsc);
        //this._reelView.reSortReelLayerIndex(this._currentCards, isAsc);
    }

    protected override reset(): void {
        super.reset();
        this.resetWildData();
        this._interruptFlag = false;
        this._isFastStopClick = false;
        this._doStop = false;
        this._previousCards = [];
    }

    public resetReelViewData(): void {
        this._reelView.resetReelViewData();
    }

    public multiSetReadyHand(currentReadyHandReelID: number[]): void {
        this._reelView.multiSetReadyHand(currentReadyHandReelID);
    }

    //--播放wild出現動畫
    public async playWildAppearAnimation(reelIndex: number): Promise<void> {
        await this._reelView.playWildAppearAnimation(reelIndex);
    }


    /**
     * 20260120-新增
     * 這邊是沒有wild中獎的情況,<但是滿足湊滿scatter進入fg的條件>
     * 會啟動播放wild的win動畫(這邊還在fake的wildLayer裡面)
     * 如果是有中獎的狀態下,直接去showAniProcessCtrl那邊操作
     */
    public async playWildAniToFg(reels: number[]): Promise<void> {
        await this._reelView.playWildAniToFg(reels);
    }

    public playWildIdleAnimation(): void {
        this._reelView.playWildIdleAnimation();
    }

    /**
     * 
     * @param reels 獲取FG的reel
     * @returns 
     */
    public checkWildIsExistInBoard(reels: number[]): boolean {
        return this._reelView.checkWildIsExistInBoard(reels);
    }

    /**
     * <新的wild movement流程>
     * 對外拆成兩個API
     */
    public async processDataBeforeWildMovement(reelIndex: number): Promise<{ movement: IWildMovementDataNew, iplayData: IPlayAniData, reelWpos: Vec3 }> {

        const wildMovementData = this._reelView.getWildMovementDataNew(reelIndex);
        const cloneIPlayData = await this.processWildMovementData(wildMovementData.iplayData);
        return { movement: wildMovementData.movement, iplayData: cloneIPlayData, reelWpos: wildMovementData.reelWpos };
    }

    /**
     * <新的wild NoMovement流程>
     * 對外拆成兩個API
     */
    public async processDataBeforeWildNoMovement(reelIndex: number): Promise<{ movement: IWildMovementDataNew, iplayData: IPlayAniData, reelWpos: Vec3 }> {

        const wildMovementData = this._reelView.getWildMovementDataNew(reelIndex, true);
        const cloneIPlayData = await this.processWildMovementData(wildMovementData.iplayData);
        return { movement: wildMovementData.movement, iplayData: cloneIPlayData, reelWpos: wildMovementData.reelWpos };
    }

    //-beforeRelease會再透過getExistingAniDataNode方法重新寫過WPos
    private async processWildMovementData(iPlay: IPlayAniData): Promise<IPlayAniData> {

        const cloneIPlayData = GameUtilsTools.deepClone(iPlay);
        await this._crossSystemSymbolAniService.handoffSingleByOwnerId(iPlay, SymbolOwnerAgentID.ShowAniController);
        return cloneIPlayData;
    }

    public async reSetWildDataAfterMove(reelIndex: number): Promise<void> {
        await this._reelView.reSetWildDataAfterMove(reelIndex);
    }

    public async reSetWildDataAfterWithoutMove(reelIndex: number, iconIndex: number): Promise<void> {
        await this._reelView.reSetWildDataAfterWithoutMove(reelIndex, iconIndex);
    }

    public getWildMovementData(reelIndex: number): IWildMovementData {
        return this._reelView.getWildMovementData(reelIndex);
    }
    //--20251022新增取得bounce結束的promise
    public getEndBouncePromise(reelIndex: number): Promise<number> | null {
        return this._reelView.getEndBouncePromise(reelIndex);
    }

    /**
     * 檢查指定軸是否有scatter(oneReelRollEndCallBack每一軸結束就檢查)
     * @param reelIndex 
     * @returns boolean
     */
    public checkHasScatter(reelIndex: number): boolean {
        return this._reelView.checkHasScatter(reelIndex);
    }

    public setScatterInReelData(cards: number[][]): void {
        this._reelView.setScatterInReelData(cards);
    }

    /**
     * 取得scatter的位移資料--沒用到阿20260127
     * @param reelIndex 
     * @returns IBasicMovementData
     */
    public getScatterMovementData(reelIndex: number): IBasicMovementData {
        return this._reelView.getScatterMovementData(reelIndex);
    }

    //--取得的gameIcon世界座標--沒再用到20260127
    public getSymbolWorldPosition(reelIndex: number, iconIndex: number): Vec3 {
        return this._reelView.getSymbolWorldPosition(reelIndex, iconIndex);
    }

    public getParticleWorldPosition(reelIndex: number): Vec3 {
        return this._reelView.getParticleWorldPosition(reelIndex);
    }

    public getMultiScatterWorldPosition(reelIndex: number[]): Vec3[] {
        return this._reelView.getMultiScatterWorldPosition(reelIndex);
    }

    //--gameManager強行交換scatter的控制權(多軸)--表演RS次數粒子使用
    public async forceToHandoffScatter(reelIndex: number[]): Promise<IPlayAniData[]> {

        const handoffScatterData: IPlayAniData[] = this._reelView.getScatterHandoffData(reelIndex, true);
        return handoffScatterData;
    }

    //--gameManager強行交換scatter的控制權(單一軸)
    public async forceToHandoffSingleScatter(reelIndex: number): Promise<void> {

        const handoffScatterData: IPlayAniData = this._reelView.getScatterHandoffData([reelIndex])[0];
        //GameUtilsTools.debugLog(DEBUG_TITLE, 'forceToHandoffSingleScatter', { reelIndex, handoffScatterData });
        await this._crossSystemSymbolAniService.handoffSingleByOwnerId(handoffScatterData, SymbolOwnerAgentID.ShowAniController);
    }

    //--gameManager強行交換wild的控制權
    public async forceToHandoffWild(reelIndex: number[]): Promise<IPlayAniData[]> {

        const handoffWildData: IPlayAniData[] = this._reelView.getWildHandoffData(reelIndex);
        const cloneData = GameUtilsTools.deepClone(handoffWildData);
        //--這邊在handoff會再寫過一次座標--
        await this._crossSystemSymbolAniService.multiHandoffBySameOwnerID(handoffWildData, SymbolOwnerAgentID.ShowAniController);
        return cloneData;
    }

    //--重置lockReel(整round結束)
    public reSetLockReels(): void {
        this._reelView.reSetLockReels();
    }

    public checkMovedReel(groupResult: IMatchWildGroupResult[]): boolean {

        const reel: number[] = [];
        for (let i = 0; i < groupResult.length; i++) {
            reel.push(groupResult[i].reelIndex);
        }
        return this._reelView.checkMovedReel(reel);
    }

    public getSingleReelIsFirstRoundLock(reelIndex: number): boolean {
        return this._reelView.getSingleReelIsFirstRoundLock(reelIndex);
    }

    public getSingleReelIsLock(reelIndex: number): boolean {
        return this._reelView.getSingleReelIsLock(reelIndex);
    }

    public resetWildData(): void {
        this._reelView.resetWildData();
    }
    //--將動畫物件塞回gameIcon(symbolAni物件)--沒用到20260128
    public addBackAniNodeToGameIcon(reelIndex: number, iconIndex: number, aniNode: Node): void {
        this._reelView.addBackAniNodeToGameIcon(reelIndex, iconIndex, aniNode);
    }

    //====================盤面亮度控制相關===================

    //--設定單一個gameIcon的亮度(關閉/開啟)
    public setIconLight(reelIndex: number, iconIndex: number[], isDark: boolean): void {
        this._reelView.setIconLight(reelIndex, iconIndex, isDark);
    }
    //--設定單一個gameIcon的亮度(關閉/開啟)(TWEEN驅動)
    public setIconLightTween(reelIndex: number, iconIndex: number[], isDark: boolean): void {
        this._reelView[reelIndex].setIconLightTween(reelIndex, iconIndex, isDark);
    }

    //--關閉/開啟指定的指定軸的亮度(true=變暗/false=正常)
    public setReelLight(reelIndex: number, brightnessFlag: boolean): void {
        this._reelView.setReelLight(reelIndex, brightnessFlag);
    }

    //--關閉/開啟指定的指定軸<單軸>的亮度(true=變暗/false=正常)(TWEEN驅動)
    public setReelLightTween(reelIndex: number, brightnessFlag: boolean): void {
        this._reelView.setReelLightTween(reelIndex, brightnessFlag);
    }

    //--關閉/開啟多軸的亮度(true=變暗/false=正常)
    public setReelsLight(reelIndex: number[], brightnessFlag: boolean): void {
        this._reelView.setReelsLight(reelIndex, brightnessFlag);
    }

    //--關閉/開啟多軸的亮度(true=變暗/false=正常)(TWEEN驅動)
    public async setReelsLightTween(reelIndex: number[], brightnessFlag: boolean): Promise<void> {
        await this._reelView.setReelsLightTween(reelIndex, brightnessFlag);
    }

    public async setReelsLightTweenExcludeIds(reelIndex: number[], isDark: boolean, excludeSymbolIds: number[]): Promise<void> {

        await this._reelView.setReelsLightTweenExcludeIds(reelIndex, isDark, excludeSymbolIds);
    }

    //--關閉/開啟整個盤面亮度(true=變暗/false=正常)
    public setAllLight(isDark: boolean): void {
        this._reelView.setAllLight(isDark);
    }

    //--關閉/開啟整個盤面亮度(true=變暗/false=正常)(TWEEN驅動)
    public async setAllLightTween(isDark: boolean): Promise<void> {
        await this._reelView.setAllLightTween(isDark);
    }

    //=======test用=======
    public testHideIcon(reelIndex: number, iconIndex: number): void {
        this._reelView.testHideIcon(reelIndex, iconIndex);
    }

    public testAddSymbol(reelIndex: number, iconIndex: number): void {
        this._reelView.testAddSymbol(reelIndex, iconIndex);
    }
}