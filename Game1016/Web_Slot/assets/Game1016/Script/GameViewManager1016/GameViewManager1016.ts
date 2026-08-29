import { _decorator, AudioSource, Game, Node, Vec3 } from "cc";
import {
    BasicSlotGameViewManager,
    BasicProcessSlotData,
    IProcessSlotData,
    GameState,
    PrefabAdapter,
    BasicGameGlobalData, GameGlobalData, GameGlobalKeys, TransitionsState,
    AnimationControllersPoolManager,
    ShowAniProcessController1016,
    BasicGameModeManager,
    WinScoreData,
    IPlayAniData,
    AniBuilderMediator,
    ISymbolAniKey,
    IProcessInput,
    UniSlotMachine1016,
    GameUtilsTools,
    NotifyCation,
    GameViewEvents,
    NotifySubject,
    Direction,
    IMatchWildGroupResult,
    ShowContainerWithResizeManager,
    BasicGameStepDelayTime,
    GenericUIManager

} from '../ReferencePath';
import { GameTimeScale, NewFlashModeEnum, AudioManager, SOUND_TYPE } from "db://assets/Scripts/ModuleEntry";
import { ProcessSlotSymbolAniData1016 } from '../../Script/AniMediator1016/ProcessSlotSymbolAniData1016';
import { SymbolAniMediatorHooks1016 } from '../../Script/AniMediator1016/SymbolAniMediatorHooks1016';
import { DirtyCrossSysServiceFacade } from '../../Script/AniMediator1016/CrossSystemFun/DirtyCrossSysServiceFacade';
import { DirtyHandoffManager } from '../../Script/AniMediator1016/CrossSystemFun/DirtyHandoffManager';
import { IFunctionOwnerAgent } from '../AniMediator1016/CrossSystemFun/IFunctionOwnerAgent';
import { ProcessDataAfterServer1016 } from '../ProcessDataAfterServer1016/ProcessDataAfterServer1016';
import { DefinitionGameConfigData } from '../DefinitionGameData1016/GameConfigInstance';
import { NG_UI_Display } from "../GameDisplay1016/UI/NG/NG_UI_Display";
import { IStateCondition } from '../DefinitionGameData1016/GameConfigInstance';
import { RespinBoardController } from '../GameDisplay1016/RespinBoardController/RespinBoardController';
import { FGBoardUI1016 } from "../GameDisplay1016/FGBoardUI1016/FGBoardUI1016";
import { GLOBAL_DATA_WRITE_KEY } from "../MyUtils/BasicGlobalDataState/GlobalDataWriteKey";//--讀寫金鑰-只能讓gamemanager用
import { GlobalAccessWriter } from '../DefinitionGameData1016/AccessDefs/GlobalAccessWriter';
import { FG_UI_Display } from "../GameDisplay1016/UI/FG/FG_UI_Display";
import { IBasicGUI } from "../GameDisplay1016/UI/IBasicGUI";
import { IBkgDisplay } from '../GameDisplay1016/UI/IBkgDisplay';
import { GameStepDelayTimeList1016_List } from "../DefinitionGameData1016/GameStepDelayTimeList1016";
import { GameBGSoundCtrl1016 } from '../GameBGSoundCtrl1016/GameBGSoundCtrl1016';
import { SpeedTimeMode } from "../MyUtils/BasicStepDelayTimeList/BasicGameStepDelayTime";
import { SoundList, AudioSourceList } from '../DefinitionGameData1016/SoundList1016';
import { IRoundDataRecord1016, RoundDataRecord1016 } from "../DefinitionGameData1016/IRoundDataRecord1016";

const {
    FLATTEN_REEL_ID,
    SCATTER_LIST,
    WILD_LIST
} = DefinitionGameConfigData;
const DEBUG_TITLE = 'GameViewManager1016';
const DEBUG_TITLE_TIME_BASE = 'GameViewManager1016_TimeBase';
const ROUND_STEP_CONDITION_KEY = {
    //NO_WIN: 'no_win',
    WIN: 'win',
    WILD_MOVE: 'wild_move',
    JP: 'jp'
}
const { ccclass, property } = _decorator;
@ccclass('GameViewManager1016')
export class GameViewManager1016<OwnerAgent extends IFunctionOwnerAgent> extends BasicSlotGameViewManager<BasicProcessSlotData, IProcessSlotData, GameState, ProcessDataAfterServer1016> {


    @property({ type: PrefabAdapter, visible: true, displayName: 'PrefabAdapter', tooltip: '將要在objPool運作的prefab掛入' })
    private _prefabAdapter: PrefabAdapter = new PrefabAdapter();

    @property({ type: ShowAniProcessController1016, visible: true, displayName: 'ShowAniProcessController1016', tooltip: '秀動畫流程控制器' })
    private _basicShowAniProcess: ShowAniProcessController1016 = null;

    @property({ type: ShowContainerWithResizeManager, visible: true, displayName: 'ShowContainerWithResizeManager', tooltip: '管理面板顯示模式' })
    private _showContainerManager: ShowContainerWithResizeManager = null;

    @property({ type: NG_UI_Display, visible: true, displayName: 'NG_UI_Display', tooltip: 'NG的GUI面板' })
    private _ngUI: NG_UI_Display = null;

    @property({ type: FG_UI_Display, visible: true, displayName: 'FG_UI_Display', tooltip: 'FG的GUI面板' })
    private _fgUI: FG_UI_Display = null;

    @property({ type: RespinBoardController, visible: true, displayName: 'ReSpinBoardController', tooltip: 'ReSpin獲得GUI面板' })
    private _reSpinBoard: RespinBoardController = null;

    @property({ type: FGBoardUI1016, visible: true, displayName: 'FGBoardUI1016', tooltip: 'FG結算/次數面板' })
    private _fgUIBoard: FGBoardUI1016 = null;

    @property({ type: AudioSource, visible: true, displayName: 'NGBgMusicSource', tooltip: 'NG背景音樂AudioSource' })
    private _ngBgMusicSource: AudioSource = null;

    //--symbol builder-IProcessInput
    private _builderMediator: AniBuilderMediator<IProcessInput, Node, string, IPlayAniData, ISymbolAniKey> = null;
    //--change symbol owner-
    private _handoffManager: DirtyHandoffManager<IProcessInput, OwnerAgent> = null;
    //--跨系統動畫服務

    // _crossAniServiceFacade 的泛型要完整傳入
    // CrossSystemAniServiceFacade<T, N, Key, P, K, I, OwnerAgent, HandoffManager>
    // T: IProcessInput (這裡用 I 代替)
    // N: Node
    // Key: string
    // P: IPlayAniData
    // K: ISymbolAniKey
    // OwnerAgent: OwnerAgent
    // HandoffManager: DirtyHandoffManager<I, OwnerAgent>
    private _crossAniServiceFacade: DirtyCrossSysServiceFacade<
        IProcessInput, // T 的位置，應該是 IProcessInput
        Node, // N
        string, // Key
        IPlayAniData, // P
        ISymbolAniKey, // K
        IProcessInput, // I 的位置，現在統一為 IProcessInput
        OwnerAgent, // OwnerAgent
        DirtyHandoffManager<IProcessInput, OwnerAgent> // HandoffManager
    > = null;

    private _isNewRound: boolean = false; //---每次都要重置這個,因為每次都會有新的round資料
    private _waitTask = new Map<number, Promise<void>>();
    private _waitScatterTask = new Map<number, Promise<void>>();
    private _waitReelBounceTask = new Map<number, Promise<number>>();//--20251022新增存reel bounce任務
    private _flashToSpeedMap: Record<NewFlashModeEnum, SpeedTimeMode>;
    private _roundStepMapCondition: Map<string, boolean>;//--20251021for局間停頓條件判斷
    private _gameBGSoundCtrl1016: GameBGSoundCtrl1016;
    private _currentFGAndRSRecord1016: RoundDataRecord1016 = new RoundDataRecord1016();
    //private _timeBaseTest: number = 0;

    /**在初始化之前執行的邏輯 */
    beforeInit(): void {
        // Implement specific logic for GameViewManager1016
    }


    /** 初始化遊戲流程管理器*/
    public init(): void {
        // Implement specific logic for GameViewManager1016
        //-做其他你要在註冊系統之前做的事情
        super.init();

        this._flashToSpeedMap = {
            [NewFlashModeEnum.None]: SpeedTimeMode.NORMAL,
            [NewFlashModeEnum.NewFlash1]: SpeedTimeMode.Lv1,
            [NewFlashModeEnum.NewFlash2]: SpeedTimeMode.Lv2
        };

        //--條件檢查換出局間停頓時間用的map
        this._roundStepMapCondition = new Map<string, boolean>([
            [ROUND_STEP_CONDITION_KEY.WIN, false],
            [ROUND_STEP_CONDITION_KEY.WILD_MOVE, false],
            [ROUND_STEP_CONDITION_KEY.JP, false]
        ]);

        const processor: ProcessSlotSymbolAniData1016 = new ProcessSlotSymbolAniData1016();
        const hooks: SymbolAniMediatorHooks1016 = new SymbolAniMediatorHooks1016();
        this._builderMediator = new AniBuilderMediator(
            processor,
            AnimationControllersPoolManager.getInstance(),
            hooks
        );
        this._handoffManager = new DirtyHandoffManager<IProcessInput, OwnerAgent>();
        this._crossAniServiceFacade = new DirtyCrossSysServiceFacade(this._builderMediator, this._handoffManager)
        this._slotMachine.init();
        //--server資料查找庫
        this._processedServerData = new ProcessDataAfterServer1016();
        //--遊戲狀態管理
        this._gameModeManager = new BasicGameModeManager();
        //--動畫控制器管理
        this._basicShowAniProcess.init();
        //--動畫物件池管理
        AnimationControllersPoolManager.getInstance().init();
        //--背景音樂控制器
        this._gameBGSoundCtrl1016 = new GameBGSoundCtrl1016();
        this._gameBGSoundCtrl1016.musicAudioSource = this._ngBgMusicSource;


    }

    public override registerSystem(): void {
        // Implement specific logic for GameViewManager1016
        super.registerSystem();
        if (this._prefabAdapter) {
            AnimationControllersPoolManager.getInstance().setPrefabForPropertyList(this._prefabAdapter.prefabForPropertyList);
        }
        //--要在這邊注入mediator(因為slotMachine/_basicShowAniProcess是走property進來的,引擎自己幫我建構了)
        this._basicShowAniProcess.registerService(this._crossAniServiceFacade);

        (this._slotMachine as UniSlotMachine1016).registerService(this._crossAniServiceFacade);
        (this._slotMachine as UniSlotMachine1016).aryReelAmountIds = [0, 1, 2, 3, 4];
        (<UniSlotMachine1016>this._slotMachine).oneReelRollEndCallBack = this._oneReelRollEndCallBackFromSlot;
        (<UniSlotMachine1016>this._slotMachine).registerStartRollCallBack();

        //--註冊狀態管理
        //this._gameModeManager....要在改過..這樣大家都可以讀寫不太對
        /*
        BasicGameGlobalData.getInstance<GameGlobalData>().setGlobalData(
            GameGlobalKeys.GameState, GameState.NORMAL
        );*/
        const gameStepDelayTime: BasicGameStepDelayTime = new BasicGameStepDelayTime(GameStepDelayTimeList1016_List);
        const globalDataStore = BasicGameGlobalData.getInstance<GameGlobalData>();
        globalDataStore.init({
            GameState: GameState.BEGIN,//--遊戲狀態
            TransitionsState: TransitionsState.NONE,//--遊戲轉場狀態
            DelayTimeList: gameStepDelayTime,//--遊戲延遲時間列表
            GameTimeScale: GameTimeScale.timeScale,//--遊戲時間縮放控制(2階加速使用)-目前廢棄,但保留framerate的控制
            TurboMode: NewFlashModeEnum.None,//--遊戲加速模式(2階加速使用)
            InterruptProcess: false,//--是否中斷流程
            RoundTotalOdds: 0,//--本局總倍數
            CurrentRoundSpeed: NewFlashModeEnum.None,//--該回合的遊戲速度設定
            CurrentFGAndRSRecord: this._currentFGAndRSRecord1016.fgCount//--目前只會紀錄FG count data
        });
        const globalDataWriter = globalDataStore.createWriter(GLOBAL_DATA_WRITE_KEY);
        GlobalAccessWriter.register(globalDataStore, globalDataWriter);
        GlobalAccessWriter.setGlobalData(GameGlobalKeys.GameState, GameState.NORMAL);

        this._basicShowAniProcess.register();
        //--註冊遊戲收發狀態改變接收者...
        this._gameModeManager.addGameMode(this._basicShowAniProcess);
        this._gameModeManager.addGameMode(this._showContainerManager);
        this._gameModeManager.addGameMode(this._gameBGSoundCtrl1016);
        //--你娘的哩----幹----
        this._basicShowAniProcess.bgmCtrl = this._gameBGSoundCtrl1016;
        //--你娘的哩----幹----

        //--<寫入遊戲步驟延遲時間列表(單位-秒)>--
        this._gameStepDelayTimeList = GlobalAccessWriter.getGlobalData(GameGlobalKeys.DelayTimeList);
        //---for testMode---
        NotifyCation.getInstance().on(NotifySubject.GAME_ANI_PROCESS_SUBJECT, GameViewEvents.RUN_TEST_MODE, this.evtBackTest, this);
        this._showContainerManager.afterRegister();
        this._gameModeManager.changeAllGameState(GameState.NORMAL);

    }

    //============================== 加速timeScale狀態 ==============================
    //--20251016這邊已經不需要直接修改gameEngine的timeScale
    public setGameTimeScale(): void {

        GlobalAccessWriter.setGlobalData(GameGlobalKeys.GameTimeScale, GameTimeScale.timeScale);
        const basicGameStepDelayTime = GlobalAccessWriter.getGlobalData(GameGlobalKeys.DelayTimeList);
        if (basicGameStepDelayTime) {
            //basicGameStepDelayTime.deltaTime = GameTimeScale.timeScale;
            basicGameStepDelayTime.deltaTime = 1;//--目前先固定1(引擎的加速度目前不引入,維持1)
        }
    }

    public setTwoLevelTurboMode(turboMode: NewFlashModeEnum): void {

        GlobalAccessWriter.setGlobalData(GameGlobalKeys.TurboMode, turboMode);
        //---二階段加速啟用20251120
        const speedMode = this._flashToSpeedMap[turboMode];//--動態映射,將加速模式轉成SpeedTimeMode
        if (speedMode != null) {
            const basicGameStepDelayTime = GlobalAccessWriter.getGlobalData(GameGlobalKeys.DelayTimeList);
            if (basicGameStepDelayTime) {
                basicGameStepDelayTime.currentTimeMode = speedMode;
            }
        }
        //const test = GlobalAccessWriter.getGlobalData(GameGlobalKeys.DelayTimeList).currentTimeMode;
        //GameUtilsTools.debugLog(DEBUG_TITLE, `[setTwoLevelTurboMode]`, { test });
    }
    //============================== 加速timeScale狀態 ==============================

    //============================== serverData控制 =========================

    /**寫入新的一round資料 */
    public override setServerReceiveData(serverData: BasicProcessSlotData): void {
        super.setServerReceiveData(serverData);
        this._isNewRound = true; //---每次都要重置這個,因為每次都會有新的round資料
    }




    //============================== slotMachine控制 =========================

    setStartAutoSpinMode(isAuto: boolean): void {
        // Implement specific logic for GameViewManager1016
    }


    protected changeInterruptingStatus(): void {
        GlobalAccessWriter.setGlobalData(GameGlobalKeys.InterruptProcess, this._isInterrupting);
        //GameUtilsTools.debugLog('TESTBTN', 'onStopBtnClickHandler', { isInterrupting: this._isInterrupting, });
    }
    //==============開始旋轉前處理=============
    /**
     * 開始旋轉前處理(清除相關資料)
     * step1:清除每一局使用的特殊資料
     * step2:如果是有購買FG的情況,關閉購買按鈕
     * step3:公用面板spin按鈕上鎖(變成stopSpin狀態)
     * step4:清理表演資料
     * step5:重置/清理slotMachine的狀態
     * step6:執行doStartSpin
     */
    protected async reSetDataForBeforeSpin(isTurboMode: boolean): Promise<void> {

        this._currentTurboSpeed = GenericUIManager.instance.isTurboOn;//--每次startSpin都要更新目前的加速狀態

        await this._basicShowAniProcess.cleanAllPlayingAniForNewStart();
        //GameUtilsTools.debugLog('BasicShowAniProcess_debug', 'reSetDataForBeforeSpin', { isTurboMode });
        const currentData = this._processedServerData.getPrevData();
        if (currentData) {
            const cards = currentData.reelInfo.symbolData2ds;
            if (cards) {
                //--退場
                (this._slotMachine as UniSlotMachine1016).sortReelLayerIndex(cards, false);
            }
            //console.log('check_reSetDataForBeforeSpin_state:', cards);
        }

        this._basicShowAniProcess.resetRoundData();

        this._handoffManager.releaseAll();
        //console.log('check_release_handoff_newRound', this._handoffManager.debugCheckAllOwners());
        //--上保險,在確保全新round開始前(server資料還沒回來時,清除掉全部的動畫資料)
        if (!this._isThisRound) {
            this._basicShowAniProcess.stopAndRemoveAllAnis();
        }


    }

    private async testFunc(): Promise<void> {
        const promises: Promise<void>[] = [this._ngUI.openReSpinCountUI(), this._ngUI.openFGCountUI()];
        await Promise.all(promises);

    }
    //--接上slotMachine.startRoll
    protected doStartSpin(): void {

        super.doStartSpin();
        GlobalAccessWriter.setGlobalData(GameGlobalKeys.InterruptProcess, this._isInterrupting);
        //this._timeBaseTest = Date.now();
        //--關閉/開啟整個盤面亮度(true=變暗/false=正常)
        (<UniSlotMachine1016>this._slotMachine).setAllLight(false);
        //this._slotMachine.startRoll(turboSpeed, [0]);
        //console.log('====================doStartSpin================');
        AudioManager.instance.playSound(SoundList.Spin, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);

        (<UniSlotMachine1016>this._slotMachine).resetReelViewData();//--為了做到RS第0軸聽牌效果,提前重置軸資料

        const currentState = GlobalAccessWriter.getGlobalData(GameGlobalKeys.GameState);
        if (currentState === GameState.RE_SPINE) {
            const readyHands = this._processedServerData.getReadyToHandForThisRound();
            if (readyHands.length > 0) {
                (<UniSlotMachine1016>this._slotMachine).multiSetReadyHand(readyHands);
            }
        }

        const gameSpeed = GlobalAccessWriter.getGlobalData(GameGlobalKeys.TurboMode);
        //--寫入該回合當下的速度值
        GlobalAccessWriter.setGlobalData(GameGlobalKeys.CurrentRoundSpeed, gameSpeed);
        this._slotMachine.startRoll(this._currentTurboSpeed);
    }

    //--這邊的資料已經是抽出來的資料了
    protected override beforeStopSpin(): any {
        //---在玩家按下stop之前要做的事
        //--開始設定readyHand
        //--這邊是要找fg的round資料...不是找wild
        //(<UniSlotMachine1016>this._slotMachine).multiSetReadyHand([2, 4]);
        //--放入聽牌軸資訊
        const currentState = this._processedServerData.getCurrentState();
        if (currentState === GameState.NORMAL) {

            const readyHands = this._processedServerData.getReadyToHandForThisRound();
            if (readyHands.length > 0) {
                (<UniSlotMachine1016>this._slotMachine).multiSetReadyHand(readyHands);
            }
        }


        //---例如:擷取資料之類的算_currentWildCardData的資料
        //--跟_processedServerData.getCurrentData拿該round的資料
        //const currentRoundData: IProcessSlotData = this._processedServerData.getCurrentData();
        //const readyHands = this._processedServerData.getReadyToHandForThisRound();

        //const isHasNex = this._processedServerData.hasNext;
        //const nowStepIndex = this._processedServerData.getOrderInCurrentState();
        //console.log('check_ProcessDataStepInfo:' + currentState + '-<hasNex>-' + isHasNex + '-<index>-' + nowStepIndex);

        return null;
    }

    //--這裡會開始真的呼叫stopSpin(這邊的資料已經是抽出來的資料了)
    protected override async doStopSpin(slotData: IProcessSlotData, other?: any): Promise<void> {

        if (!slotData) return;
        const wildCardData = slotData.reelInfo.wildGroup;
        //--20260127-要再算分開始運作前就要知道這把有無獲獎--莫名其妙
        this._basicShowAniProcess.preRoundOddsForAni = this._processedServerData.getRoundBetAndOdds().odds;
        //--從getCurrentData取該局資料
        //this._currentwildCardData = wildCardData; //--存要塞進去處理的特殊牌資料
        const cloneCards = GameUtilsTools.deepClone(slotData.reelInfo.symbolData2ds);
        await (<UniSlotMachine1016>this._slotMachine).stopRoll(cloneCards, wildCardData);
        //let currentTime = Date.now();
        //let testTime = currentTime - this._timeBaseTest;
        //GameUtilsTools.debugLog(DEBUG_TITLE_TIME_BASE, 'beforeAllReelRollEnd_Time', { testTime }, 'log');
    }
    //---slot callback(單軸停止)
    private _oneReelRollEndCallBackFromSlot = async (reelID: number) => {
        //--20250915 修改:企劃要求Scatter要直接隨著轉輪落下
        const stopMode = GlobalAccessWriter.getGlobalData(GameGlobalKeys.TurboMode);
        if (!(this._slotMachine as UniSlotMachine1016).isFastStopClick && stopMode == NewFlashModeEnum.None) {
            //--鎖定狀態下就不播放SpinStop音效
            if (!(this._slotMachine as UniSlotMachine1016).getSingleReelIsFirstRoundLock(reelID)) {
                AudioManager.instance.playSound(SoundList.SpinStop, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
            }
        }

        const checkWildCondition = this._processedServerData.getReelWildData(reelID);
        if (checkWildCondition != null) {
            //--回傳有資料的狀態就是代表這軸匹配wild(showWildAnimation---appear)
            const promiseTask = (this._slotMachine as UniSlotMachine1016)
                .playWildAppearAnimation(reelID)
                .catch(e => console.warn('scatter err', reelID, e));
            this._waitTask.set(reelID, promiseTask);//--存playWildAppearAnimation的任務

        }

        /**
         * 20250919--scatter的呈現要在wild之上,但是在RS或是FG模式中,wild整軸會被拉到表演layer
         * 所以在SlotMachine裡面變換reel的layer index沒有意義了
         * TIPS:直接將scatter拉到表演layer處理
         */
        const checkScatterInReel = this._processedServerData.getReelScatterData(reelID);
        if (checkScatterInReel) {
            const goReel = reelID;
            //-_waitScatterTask
            const promiseScatterTask = (<UniSlotMachine1016>this._slotMachine).forceToHandoffSingleScatter(goReel)
                .catch(e => console.warn('scatter err', goReel, e));
            this._waitScatterTask.set(goReel, promiseScatterTask);//--存scatterAppearAnimation的任務
        }
        //--20251022新增reel bounce任務存取
        const bouncePromise = (<UniSlotMachine1016>this._slotMachine).getEndBouncePromise(reelID);
        if (bouncePromise) {
            this._waitReelBounceTask.set(reelID, bouncePromise);
        }

        //GameUtilsTools.debugLog(DEBUG_TITLE, 'oneReelRollEndCallBackFromSlot', { reelID }, 'log');
    }

    /**
     * <全部停止後在表演前要處理的事情>
     * <例如:秀甚麼鬼東西或是特殊模式的開啟(再算分前)>
     * PROCESS:
     * 1.取位移資訊
     * 2.表演位移/無位移
     * @returns 
     */
    protected async beforeAllReelRollEnd(): Promise<void> {

        //console.log('=======ALL_ROLLENDDDDDDDDDDDD=====');
        const stopMode = GlobalAccessWriter.getGlobalData(GameGlobalKeys.TurboMode);
        if ((this._slotMachine as UniSlotMachine1016).isFastStopClick || stopMode != NewFlashModeEnum.None) {
            AudioManager.instance.playSound(SoundList.SpinStop, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
        }
        //--檢查是否有位移資料
        //-https://medium.com/@quiet_polished_toad_71/js-promise-all-vs-allsettled%E4%BD%A0%E7%9C%9F%E7%9A%84%E6%90%9E%E6%87%82%E4%BA%86%E5%97%8E-bb3ff4c83c3a
        //-https://medium.com/dean-lin/javascript-%E5%A6%82%E4%BD%95%E8%AE%93-await-%E5%87%BD%E5%BC%8F%E4%B8%A6%E8%A1%8C-%E5%BE%9E%E5%AF%A6%E9%9A%9B%E6%A1%88%E4%BE%8B%E4%BA%86%E8%A7%A3-promise-all-%E5%92%8C-promise-allsettled-%E7%9A%84%E5%8D%80%E5%88%A5-bea062893091
        //-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled

        //--等待Wild appear動畫徹底完成
        if (this._waitTask.size > 0) {
            //--allSettled=我不管結果如何就算error也繼續往下走,promise.all遇到error會直接reject
            await Promise.allSettled(this._waitTask.values());
            this._waitTask.clear();
        }

        //--等待scatter動畫(appear)徹底完成
        if (this._waitScatterTask.size > 0) {
            await Promise.allSettled(this._waitScatterTask.values());
            this._waitScatterTask.clear();

        }
        //--等待reel bounce徹底完成
        if (this._waitReelBounceTask.size > 0) {
            await Promise.allSettled(this._waitReelBounceTask.values());
            this._waitReelBounceTask.clear();
        }
        //--一階段和二階段Scatter appear不會等待播完就會resolve
        this._basicShowAniProcess.hasScatterAppearInThisRound = false;//--重置scatterAppear狀態
        const nextGameState = this._processedServerData.getNextStepGameState();
        this._basicShowAniProcess.afterWholeReelStopIdleSpAni(nextGameState);
        (this._slotMachine as UniSlotMachine1016).playWildIdleAnimation();

        const needToMove = this._processedServerData.checkNeedToMovement();
        const moveData = this._processedServerData.getWildMovementData();
        //--這邊要先算出有沒有wild需要演出的資料(位移or無位移)
        let movedLock: boolean = false;
        if (moveData.wildGroup) {
            movedLock = (<UniSlotMachine1016>this._slotMachine).checkMovedReel(moveData.wildGroup);
        }

        if (needToMove || movedLock) {
            //-需要啟動wild表演
            const waitTimeForWild = this._gameStepDelayTimeList.get(cfg => cfg.wild?.beforeWait);
            //--設定有wild位移的條件;
            this._roundStepMapCondition.set(ROUND_STEP_CONDITION_KEY.WILD_MOVE, true);
            //const startWildWaitTime = GameUtilsTools.getTimeStamp();
            await this.addTweenDelay(waitTimeForWild);
            //const endWildWaitTime = GameUtilsTools.getTimeStamp();
            //GameUtilsTools.debugLog('WILD_TIME', 'wildBeforeWait_Time', { startWildWaitTime, endWildWaitTime, during: endWildWaitTime - startWildWaitTime }, 'log');

            this._isInterrupting = false;
            GlobalAccessWriter.setGlobalData(GameGlobalKeys.InterruptProcess, this._isInterrupting);
        }
        if (needToMove) {
            //--表演有位移的狀態
            await this.processWildMovement(moveData.wildMovement);
        } else if (movedLock) {
            //--20251031表演沒有位移的狀態<處理沒釘死的wild,因為會有包含條件下,需要剔除整軸狀態的wild>
            const filterData = GameUtilsTools.deepClone(moveData);
            filterData.wildGroup = filterData.wildGroup.filter(item => item.matchIndices.length < 4);
            await this.processWildNoMovement(filterData.wildGroup);
        }

    }

    //============================== slotMachine控制 =========================

    //============================== 下注與FG面板 =============================
    //---玩家下注金額改變時,更新下注金額
    setPlayerBetValue(betValue: number): void {
        // Implement specific logic for GameViewManager1016
    }

    //============================== 下注與FG面板 =============================


    //============================== 表演流程控制 =============================
    private async processWildMovement(moveData: number[]): Promise<void> {

        //console.log('check_wildMovementData:', moveData);
        //const delayTime = 0.2;
        //const delayTime = 0;
        const promises = [];
        for (let i = 0; i < moveData.length; i++) {
            const reelId = moveData[i];
            const task = async (reelIndex: number) => {
                const wildData = await (<UniSlotMachine1016>this._slotMachine).processDataBeforeWildMovement(reelId);
                await this._basicShowAniProcess.triggerWildMoveAnimation(wildData);
                await (<UniSlotMachine1016>this._slotMachine).reSetWildDataAfterMove(reelIndex);
                //--reWriteData 
            }
            promises.push(task(reelId));
        }
        const idsExclude = FLATTEN_REEL_ID.filter(id => !moveData.includes(id));
        await this.withReelDarkEffect(idsExclude, async () => {
            await Promise.all(promises);

        })
    }

    //--統一處理wild位移+開關燈
    private async withReelDarkEffect(idsExclude: number[], action: () => Promise<void>): Promise<void> {

        const currentGameState = GlobalAccessWriter.getGlobalData(GameGlobalKeys.GameState);
        const currentBGs = this._showContainerManager.getContainerListByState(currentGameState);
        const targetBgAni = currentBGs.find(it => (it as any).isBkgAni === true) as unknown as IBkgDisplay | undefined;

        //-- Step 1: go dark
        await Promise.all([
            //(<UniSlotMachine1016>this._slotMachine).setReelsLightTween(idsExclude, true),
            (<UniSlotMachine1016>this._slotMachine).setReelsLightTweenExcludeIds(idsExclude, true, WILD_LIST),
            this._basicShowAniProcess.changeAniCtrlColorBySymbolId(SCATTER_LIST[0], true)
        ]);
        targetBgAni?.openDark();
        //-- Step 2: wildMove
        await action();
        //-- Step 3: goBack normal
        await Promise.all([
            (<UniSlotMachine1016>this._slotMachine).setAllLightTween(false),
            this._basicShowAniProcess.changeAniCtrlColorBySymbolId(SCATTER_LIST[0], false)
        ]);

        targetBgAni?.closeDark();
    }

    private async processWildNoMovement(wildGroup: IMatchWildGroupResult[]): Promise<void> {

        // 處理沒有位移資料,要秀node transfer
        //企劃書要求是出現2個以上才秀(?)
        //--20251031-包含2個的狀況下也算
        //console.log('check_wildMovementData:', wildGroup);
        const promises = [];
        const includes: number[] = [];
        for (let i = 0; i < wildGroup.length; i++) {
            const reelId = wildGroup[i].reelIndex;
            const task = async (reelIndex: number) => {
                const wildData = await (<UniSlotMachine1016>this._slotMachine).processDataBeforeWildNoMovement(reelId);
                await this._basicShowAniProcess.triggerWildNoMoveAnimation(wildData);
                const reel = wildData.movement.reelIndex;
                const index = wildData.movement.iconIndex;
                await (<UniSlotMachine1016>this._slotMachine).reSetWildDataAfterWithoutMove(reel, index);
            }
            promises.push(task(reelId));
        }
        const idsExclude = FLATTEN_REEL_ID.filter(id => !includes.includes(id));
        await this.withReelDarkEffect(idsExclude, async () => {
            await Promise.all(promises);
        })

    }



    private async processReSpineCount(reSpinData: { reels: number[], total: number }): Promise<void> {

        //--有還沒有抽出來加入aryRunning的情況所以要這樣拿
        //const aniCtrlForReel: IAnimationControl[] = (<UniSlotMachine1016>this._slotMachine).getExistingAniCtrl(reSpinData.reels);
        //const wildIndex = reSpinData.reels;

        const destinationWpos = this._ngUI.getReSpinCountWPos();
        const handoffWildData = await (<UniSlotMachine1016>this._slotMachine).forceToHandoffWild(reSpinData.reels);
        await this._ngUI.openReSpinCountUI();
        //--開播前的等待時間
        const turboMode = GlobalAccessWriter.getGlobalData(GameGlobalKeys.TurboMode);
        if (turboMode != NewFlashModeEnum.NewFlash2) {

            const beforePlayShootAniDelay = this._gameStepDelayTimeList.get(cfg => cfg.wild?.others.beforeParticleWait);
            if (beforePlayShootAniDelay > 0) {
                await this.addTweenDelay(beforePlayShootAniDelay);
            }
            //--播放特殊wild動畫+開噴粒子
            await this._basicShowAniProcess.showGetReSpinEffect({
                info: handoffWildData,
                endPos: destinationWpos,
                index: reSpinData.reels
            });
        }

        await this._ngUI.triggerReSpinCountUp(reSpinData.total);
    }

    private async processScatterFGCount(fgData: { reels: number[], total: number }, usePreviousData: boolean): Promise<void> {
        //--會進來一定就是有
        const multiScatterReel = this._processedServerData.getScatterByMultiReel(fgData.reels, usePreviousData);
        let destinationWpos: Vec3;
        const currentGameState = this._processedServerData.getCurrentState();
        const currentGUI: IBasicGUI = (currentGameState == GameState.FREE_GAME) ? this._fgUI : this._ngUI;
        //--開播前的等待時間
        const beforePlayShootAniDelay = this._gameStepDelayTimeList.get(cfg => cfg.wild?.others.beforeParticleWait);
        if (beforePlayShootAniDelay > 0) {
            await this.addTweenDelay(beforePlayShootAniDelay);
        }

        const turboMode = GlobalAccessWriter.getGlobalData(GameGlobalKeys.TurboMode);
        if (multiScatterReel.length > 0) {
            /**
             * TIPS:
             * 1.有scatter就拿scatter
             * 2.aniNode=null的狀態代表他已經先被runningPool拿走了(有中獎,沒有中獎才會從slotMachine當中拿到)
             * 3.如果有拿到實體的話裡面跟handoff一樣有相關的資料可以讓你在showAniProcess裡面使用
             * 4.有一種狀態會是既有scatter又有wild的狀態,這種狀態會優先拿scatter
             * 5.如果是開啟FG條件的當局,那個局數判斷不能拿fgData.reels來判斷Scatter的位置..
             * <因為條件裡面包含scatter+wild=FG的總局數>
             * 如需要正確scatter位置要用multiScatterReel來判斷
             */

            if (turboMode == NewFlashModeEnum.NewFlash2) {

                await currentGUI.openFGCountUI();
                await currentGUI.triggerFGCountUp(fgData.total);

            } else {
                await currentGUI.openFGCountUI();

                const handoffScatterData = await (<UniSlotMachine1016>this._slotMachine).forceToHandoffScatter(multiScatterReel);
                destinationWpos = currentGUI.getFGCountWPos();

                await this._basicShowAniProcess.showGetScatterFGEffect({
                    endPos: destinationWpos,
                    info: handoffScatterData,
                    index: multiScatterReel
                })
                //--20260126取消(流程改變..這邊已經變成在RS情況下,得分演完才觸發)
                //this._basicShowAniProcess.gotFGScatterCount = fgData.total;
                await currentGUI.triggerFGCountUp(fgData.total);
            }


            //--這樣拔出來塞回去的速度太慢了
            /*
            const scatterData: { reAssign: IPlayAniData, aniNode: Node }[] = await (<UniSlotMachine1016>this._slotMachine).getMultiScatterAniNode(multiScatterReel);
            const destinationWpos = this._ngUI.getFGCountWPos();
            await this._ngUI.openFGCountUI();
            await this._basicShowAniProcess.showGetScatterFGEffect({
                endPos: destinationWpos,
                info: scatterData,
                index: multiScatterReel
            });
            currentGUI.triggerFGCountUp(fgData.total);
            */

        } else {

            //--沒有scatter就拿Wild (強行將wild/scatter轉移圖層)
            const handoffWildData = await (<UniSlotMachine1016>this._slotMachine).forceToHandoffWild(fgData.reels);
            if (turboMode == NewFlashModeEnum.NewFlash2) {
                await currentGUI.openFGCountUI();
                await currentGUI.triggerFGCountUp(fgData.total);
            } else {
                //--沒有scatter就拿Wild 
                destinationWpos = currentGUI.getFGCountWPos();
                await currentGUI.openFGCountUI();
                await this._basicShowAniProcess.showGetReSpinEffect({
                    endPos: destinationWpos,
                    info: handoffWildData,
                    index: fgData.reels
                });
                await currentGUI.triggerFGCountUp(fgData.total);
            }

        }
    }

    //--20260129新增功能:儲存當前round的FG/RS次數資料
    public override async newRoundDataToStopSpin(): Promise<void> {
        this.beforeProcessNewRoundData();//--第一把資料先算
        await super.newRoundDataToStopSpin();
    }

    protected beforeProcessNewRoundData(): void {
        //return;
        const currentSate = this._processedServerData.getCurrentState();
        const nextState = this._processedServerData.getNextStepGameState();
        const prevState = this._processedServerData.getPrevState();

        /**
        * TIPS:在局間交換的時候,第一次需要開啟面板等相關處理交給
        * beforeProcessReSpinRound/ beforeProcessFGRound來處理.
        * 只處理局內的RS/FG次數計算與表演
        * 這邊先算出第一次的RS需要的次數等RS進來時候直接用
        * 阿幹..這裡接在checkNextRound裡面做,資料索引的index已經移動了
        * 但原先的設計是在流程的末端做這件事,所以當時資料索引尚未移動
        */
        //--ng-to->rs
        /*
        if (currentSate != nextState && (nextState == GameState.RE_SPINE)) {
            this._processedServerData.stashRoundResults();//--先計算寫入暫存區
            return;
        }*/
        /**
         * 第一把RS會先checkNextRound ,但此時已經變成RS第一把了(index已經往後移),所以顯示的數字會是下一把的
         * 然後走beforeProcessReSpinRound才會開面板和更改gameState為RS
         */
        const { fg, rs } = this._processedServerData.consumeRoundResults();//--取出暫存區的資料
        let reSpinCount: { reels: number[], total: number } | null = null;
        let fgCount: { reels: number[], total: number, hope: number[] } = { reels: [], total: 0, hope: [] };

        //--進入FG當下洗掉計算次數,FG內重新累計(2種情況下會進來)
        if (currentSate != prevState) {
            if (prevState == GameState.NORMAL && nextState == GameState.FREE_GAME) {
                this._processedServerData.clearCountForFg();
            }

        } else {
            if (currentSate == GameState.RE_SPINE && nextState == GameState.FREE_GAME) {
                this._processedServerData.clearCountForFg();
            }
        }


        if (fg.total > 0 || rs.total > 0) {
            //--這裡已經不會進來了--20260129
            // 已經有 buffer → 用 buffer
            reSpinCount = rs;
            fgCount = <{ reels: number[], total: number, hope: number[] }>fg;
            //usePreviousData = true;
        } else {
            // 沒有 buffer → 即時計算
            if (currentSate != GameState.FREE_GAME) {
                reSpinCount = this._processedServerData.getReSpinCountForRound();
            }
            fgCount = this._processedServerData.getFgCountForRound();
        }

        if (currentSate != nextState) {
            //this._processedServerData.stashRoundResults();//--先計算寫入暫存區
            //return;
            if (nextState == GameState.RE_SPINE) {

                this._currentFGAndRSRecord1016.firstNgToRsData = {
                    reSpinCount: reSpinCount,
                    fgCount: fgCount,
                    usePreviousData: true
                };

            } else if (nextState == GameState.FREE_GAME) {

                if (currentSate == GameState.NORMAL) {
                    this._currentFGAndRSRecord1016.firstNgToFgData = {
                        fgCount: fgCount
                    };
                } else if (currentSate == GameState.RE_SPINE) {
                    this._currentFGAndRSRecord1016.fgCount = fgCount;
                    this._currentFGAndRSRecord1016.reSpinCount = reSpinCount;
                }

            } else if (nextState == null) {
                //--最終局-
                this._currentFGAndRSRecord1016.fgCount = fgCount;
                this._currentFGAndRSRecord1016.reSpinCount = reSpinCount;
            }

        } else {

            this._currentFGAndRSRecord1016.fgCount = fgCount;
            this._currentFGAndRSRecord1016.reSpinCount = reSpinCount;
        }
        //--要檢查NG跳RS的狀態和NG跳FG的狀態
        GlobalAccessWriter.setGlobalData(GameGlobalKeys.CurrentFGAndRSRecord, fgCount);

    }

    /**
     * 中線流程結束後計算要顯示的RS和FG次數與表演
     * TIPS:
     * 1.處理位移後的reSpine獲得欄位顯示
     * 2.處理位移後的fg獲得欄位顯示
     * TIPS2:
     * 在後續的回合中,如果有符合累計的條件,也會觸發欄位上的改變
     */
    private async processCalculatingRSandFG(): Promise<void> {

        /*
        const currentSate = this._processedServerData.getCurrentState();
        const nextState = this._processedServerData.getNextStepGameState();

        if (currentSate != nextState && (nextState == GameState.RE_SPINE)) {
            this._processedServerData.stashRoundResults();//--先計算寫入暫存區
            return Promise.resolve();
        }

        const { fg, rs } = this._processedServerData.consumeRoundResults();//--取出暫存區的資料
        let reSpinCount: { reels: number[], total: number } | null = null;
        let fgCount: { reels: number[], total: number } = { reels: [], total: 0 };

        const promises: Promise<void>[] = [];
        let usePreviousData = false;
        if (fg.total > 0 || rs.total > 0) {
            // 已經有 buffer → 用 buffer
            reSpinCount = rs;
            fgCount = fg;
            usePreviousData = true;
        } else {
            // 沒有 buffer → 即時計算
            if (currentSate != GameState.FREE_GAME) {
                reSpinCount = this._processedServerData.getReSpinCountForRound();
            }
            fgCount = this._processedServerData.getFgCountForRound();
        }
        */



        //const nextState = this._processedServerData.getNextStepGameState();
        /*
        if (currentSate != nextState && (nextState == GameState.RE_SPINE)) {
            return;
        }*/
        //--20260129-改用之前算好的資料
        //const { reSpinCount, fgCount, firstNgToRsData } = this._currentFGAndRSRecord1016;
        let reSpinCount: { reels: number[], total: number } | null;
        let fgCount: { reels: number[], total: number };
        let usePreviousData: boolean = false;

        if (this._currentFGAndRSRecord1016.firstNgToRsData) {

            reSpinCount = this._currentFGAndRSRecord1016.firstNgToRsData.reSpinCount;
            fgCount = this._currentFGAndRSRecord1016.firstNgToRsData.fgCount;
            usePreviousData = this._currentFGAndRSRecord1016.firstNgToRsData.usePreviousData;
            this._currentFGAndRSRecord1016.firstNgToRsData = null;

        } else {
            reSpinCount = this._currentFGAndRSRecord1016.reSpinCount;
            fgCount = this._currentFGAndRSRecord1016.fgCount;
        }
        //const firstNgToRsData = this._currentFGAndRSRecord1016.firstNgToRsData;
        //const usePreviousData = firstNgToRsData ? true : false;
        const promises: Promise<void>[] = [];

        if (reSpinCount && reSpinCount.total > 0) {
            promises.push(this.processReSpineCount(reSpinCount));
        }

        if (fgCount.total > 0) {
            //-在沒有reSpin觸發FG不需要噴了-直接進位讓資料往下就好
            const currentSate = this._processedServerData.getCurrentState();
            if (currentSate != GameState.NORMAL) {
                promises.push(this.processScatterFGCount(fgCount, usePreviousData));
            }
        }

        if (promises.length > 0) {
            this._isInterrupting = false;
            GlobalAccessWriter.setGlobalData(GameGlobalKeys.InterruptProcess, this._isInterrupting);
            const delay = this._gameStepDelayTimeList.get(cfg => cfg.wild?.others.beforeCountWait);
            await this.addTweenDelay(delay);
        }

        await Promise.all(promises);
    }

    /**
     * <表演處理一定要實作(這是接在await slot stopRoll之後)
     * 盤面停止後會呼叫這個方法(不管有無得分都會進來)>
     * TIPS:這個步驟是整盤的最後一步,演完這個步驟後會進入checkNextRound
     *   
     * @returns Promise<void>
     */
    protected async doShowResultAfterStopRoll(): Promise<void> {

        //console.log('====================doShowResultAfterStopRoll================');
        const currentRoundData: IProcessSlotData = this._processedServerData.getCurrentData();
        const winScoreData: WinScoreData = this.createWinScoreData();
        const currentGameState = this._processedServerData.getCurrentState();
        const nextGameState = this._processedServerData.getNextStepGameState();
        const isFinalRound = this._processedServerData.getIsLastStep();
        const nexNew = (currentGameState != nextGameState) ? true : false;
        //--寫入當前與下一把的狀態(是否進入輪播使用)
        const gameStateCondition: IStateCondition =
        {
            currentRoundState: currentGameState,
            nextRoundState: nextGameState,
            isDifferentStateNext: nexNew,
            isFinal: isFinalRound
        }
        this._basicShowAniProcess.gameStateCondition = gameStateCondition;
        let useSequence = false;
        //let playWinFlag: boolean;
        let roundWinData: { hasWin: boolean, bigWin: boolean };
        let beforeShowWinDelay = 0;
        if (currentGameState === GameState.FREE_GAME || currentGameState === GameState.RE_SPINE) {

            //GameUtilsTools.debugLog('BasicShowAniProcessCheck', 'beforeFG', { flag: this._isInterrupting.toString() });
            roundWinData = await this._basicShowAniProcess.beforeProcessWinScoreData(winScoreData, currentRoundData.winLine);

            this._roundStepMapCondition.set(ROUND_STEP_CONDITION_KEY.WIN, roundWinData.hasWin);
            this._roundStepMapCondition.set(ROUND_STEP_CONDITION_KEY.JP, roundWinData.bigWin);

            if (currentGameState === GameState.RE_SPINE) {
                /**
                 * 1.中線播放
                 * 2.計算FG
                 * 3.有獲得FG播放FG獲得動畫
                 * 4.FG數字異動相關處理
                 */
                if (roundWinData.hasWin) {
                    beforeShowWinDelay = this._gameStepDelayTimeList.get(cfg => cfg.result?.beforeShowWin);
                    await this.addTweenDelay(beforeShowWinDelay);
                }

                this._isInterrupting = false;
                GlobalAccessWriter.setGlobalData(GameGlobalKeys.InterruptProcess, this._isInterrupting);
                useSequence = await this._basicShowAniProcess.runShowProcess(roundWinData.hasWin);

                /*
                const fgBuffer = this._processedServerData.checkHasFGBufferData();
                let fgCount: { reels: number[], total: number } = { reels: [], total: 0 };
                if (!fgBuffer) {
                    fgCount = this._processedServerData.preCalculateFgCountForRound();
                } else {
                    fgCount = this._processedServerData.getFGBuffer();
                }
                */
                const fgCount = (this._currentFGAndRSRecord1016.firstNgToRsData) ? this._currentFGAndRSRecord1016.firstNgToRsData.fgCount : this._currentFGAndRSRecord1016.fgCount;

                if (fgCount.total > 0) {
                    await this._basicShowAniProcess.showScatterAndWildWinAniBeforeFG(fgCount.reels);
                }
                /**
                 * TIPS:20260130-改用之前算好的資料
                 */
                await this.processCalculatingRSandFG();
            } else {
                /**
                 * 1.FG數字異動相關處理
                 * 2.中線播放
                 */
                await this.processCalculatingRSandFG();

                if (roundWinData.hasWin) {
                    beforeShowWinDelay = this._gameStepDelayTimeList.get(cfg => cfg.result?.beforeShowWin);
                    await this.addTweenDelay(beforeShowWinDelay);
                }

                this._isInterrupting = false;
                GlobalAccessWriter.setGlobalData(GameGlobalKeys.InterruptProcess, this._isInterrupting);
                useSequence = await this._basicShowAniProcess.runShowProcess(roundWinData.hasWin);
            }

        } else {
            //--runShowProcess會轉移node到表演layer

            //this._isInterrupting = false;
            //GlobalAccessWriter.setGlobalData(GameGlobalKeys.InterruptProcess, this._isInterrupting);
            //GameUtilsTools.debugLog('BasicShowAniProcessCheck', 'beforeNG', { flag: this._isInterrupting.toString() });
            roundWinData = await this._basicShowAniProcess.beforeProcessWinScoreData(winScoreData, currentRoundData.winLine);

            this._roundStepMapCondition.set(ROUND_STEP_CONDITION_KEY.WIN, roundWinData.hasWin);
            this._roundStepMapCondition.set(ROUND_STEP_CONDITION_KEY.JP, roundWinData.bigWin);

            if (roundWinData.hasWin) {
                beforeShowWinDelay = this._gameStepDelayTimeList.get(cfg => cfg.result?.beforeShowWin);
                await this.addTweenDelay(beforeShowWinDelay);
            }
            this._isInterrupting = false;
            GlobalAccessWriter.setGlobalData(GameGlobalKeys.InterruptProcess, this._isInterrupting);
            useSequence = await this._basicShowAniProcess.runShowProcess(roundWinData.hasWin);

            //await this.processCalculatingRSandFG();
        }

        //await this.runTest();
        //--AUTO模式之下不需要跑輪播了
        if (useSequence && currentGameState === GameState.NORMAL) {
            const isAutoMode = GenericUIManager.instance.isAutoMode;
            if (!isAutoMode) {
                this._basicShowAniProcess.playMultipleSequence();
            }
        }

    }


    protected override prepareForNextFGandReSpin(): any {
        //--這邊已經是改變了global變數的情況下
        const state = GlobalAccessWriter.getGlobalData(GameGlobalKeys.GameState);
        if (state === GameState.FREE_GAME) {
            this._fgUI.setFGCount(-1);//--count FG

        } else if (state === GameState.RE_SPINE) {
            // Prepare for ReSpin
            this._ngUI.setReSpinCount(-1);//--count reSpin
        }
    }

    //--計算取得下一個round step的暫停時間
    public checkConditionForRoundStep(isFinalRound: boolean = false): number {

        /**
         * PS:20251216
         * 1.在auto模式下,在FG結束必定觸發bigWin,但此時資料已經清空啦
         * 所以回過頭來拿到的的是新一輪NG的資料,且是沒有中獎的狀態
         * 2.企劃沒填寫turbo2狀態下FG的局間時間
         * 
         */
        const state = GlobalAccessWriter.getGlobalData(GameGlobalKeys.GameState);
        let returnTime = 0;
        this._isInterrupting = true;//--停止按鈕上鎖
        //--如果只有單一把NG他會是NULL
        const previousState = this._processedServerData.getPrevState();
        if (isFinalRound && previousState !== null) {
            returnTime = this._gameStepDelayTimeList.get(cfg => cfg.round?.interRoundDelay_AUTO);
            this._roundStepMapCondition.set(ROUND_STEP_CONDITION_KEY.WIN, false);
            this._roundStepMapCondition.set(ROUND_STEP_CONDITION_KEY.WILD_MOVE, false);
            this._roundStepMapCondition.set(ROUND_STEP_CONDITION_KEY.JP, false);
            return returnTime;
        }

        const isWin = this._roundStepMapCondition.get(ROUND_STEP_CONDITION_KEY.WIN);
        const isWildMove = this._roundStepMapCondition.get(ROUND_STEP_CONDITION_KEY.WILD_MOVE);
        const isBigWin = this._roundStepMapCondition.get(ROUND_STEP_CONDITION_KEY.JP);
        if (!isWin && !isWildMove) {
            //-沒有中獎的情況下
            if (state === GameState.NORMAL) {
                GameUtilsTools.roundDelayState = 'roundStep_NG_noWin';
                returnTime = this._gameStepDelayTimeList.get(cfg => cfg.round?.roundStep_NG_noWin);
            } else if (state == GameState.RE_SPINE) {
                GameUtilsTools.roundDelayState = 'roundStep_RS_noWin';
                returnTime = this._gameStepDelayTimeList.get(cfg => cfg.round?.roundStep_RS_noWin);
            } else if (state == GameState.FREE_GAME) {
                GameUtilsTools.roundDelayState = 'roundStep_FG_noWin';
                returnTime = this._gameStepDelayTimeList.get(cfg => cfg.round?.roundStep_FG_noWin);
            }

        } else if (isBigWin) {
            //-有中獎的情況下
            if (state === GameState.NORMAL) {
                GameUtilsTools.roundDelayState = 'roundStep_NG_JP';
                returnTime = this._gameStepDelayTimeList.get(cfg => cfg.round?.roundStep_NG_JP);
            } else if (state == GameState.RE_SPINE) {
                GameUtilsTools.roundDelayState = 'roundStep_RS_JP';
                returnTime = this._gameStepDelayTimeList.get(cfg => cfg.round?.roundStep_RS_JP);
            } else if (state == GameState.FREE_GAME) {
                GameUtilsTools.roundDelayState = 'roundStep_FG_JP';
                returnTime = this._gameStepDelayTimeList.get(cfg => cfg.round?.roundStep_FG_JP);
            }
        } else if (isWin || isWildMove) {
            //-有中獎的情況下
            if (state === GameState.NORMAL) {
                GameUtilsTools.roundDelayState = 'roundStep_NG_win';
                returnTime = this._gameStepDelayTimeList.get(cfg => cfg.round?.roundStep_NG_win);
            } else if (state == GameState.RE_SPINE) {
                GameUtilsTools.roundDelayState = 'roundStep_RS_win';
                returnTime = this._gameStepDelayTimeList.get(cfg => cfg.round?.roundStep_RS_win);
            } else if (state == GameState.FREE_GAME) {
                GameUtilsTools.roundDelayState = 'roundStep_FG_win';
                returnTime = this._gameStepDelayTimeList.get(cfg => cfg.round?.roundStep_FG_win);
            }
        }
        //--重置條件
        this._roundStepMapCondition.set(ROUND_STEP_CONDITION_KEY.WIN, false);
        this._roundStepMapCondition.set(ROUND_STEP_CONDITION_KEY.WILD_MOVE, false);
        this._roundStepMapCondition.set(ROUND_STEP_CONDITION_KEY.JP, false);

        return returnTime;
    }

    //--取得滾動到停止的時間處理--20251214新增
    public processRollToStopTime(gameState: GameState): number {
        //--這邊的<auto模式要在處理--目前只有處理正常/第一階/第二階>三種狀態的滾動時間
        //--
        /**
         * 這邊的<auto模式要在處理--目前只有處理正常/第一階/第二階>三種狀態的滾動時間
         * 要滿足企劃需要再限定時間內停止全部的軸(包含他的延遲時間,所以要提早進入stop的指令(就是扣除延遲時間啦))
         * TIPS:
         * 所以L0來說是0.8秒內要停完,L1是0.5秒內停完,L2是...
         */
        let delay = 0;

        if (gameState == GameState.NORMAL) {

            delay = this._gameStepDelayTimeList.get(cfg => cfg.roll?.totalRoll).fixed();

        } else if (gameState == GameState.RE_SPINE) {

            delay = this._gameStepDelayTimeList.get(cfg => cfg.roll?.totalRoll).fixed();
        } else if (gameState == GameState.FREE_GAME) {

            delay = this._gameStepDelayTimeList.get(cfg => cfg.roll?.totalRoll).fixed();
        }

        let earlyToStopStep = this._gameStepDelayTimeList.get(cfg => cfg.stop?.earlyStop).fixed();
        delay = (delay - earlyToStopStep).fixed();//--正常模式要扣掉要提前的秒

        return delay;
    }

    /**
     * 處理ReSpin之前要做的事<例如:擷取資料之類的關閉面板之類的..>
     * @param value RoundStep<Out, G>
     * TIPS:已經是新round的資料了
     */
    protected override async beforeProcessReSpinRound(value): Promise<void> {

        if (this._processedServerData.isFirstReSpin()) {
            /**
             * 1.第一把就會先取出資料,每把結束走checkNextRound,移動資料index
             * 2.這一步beforeProcessReSpinRound是在checkNextRound之後執行的
             * 所以第一次近來的時候會累積2筆資料,第一筆是firstNgToRsData
             * 第二筆是reSpinCount/fgCount
             * 3.如果下一把資料是有獲得RS的狀態下直接抽getCurrentRSOpenCount會錯
             * 因為此時他已經推進到下一輪了
             */
            //const reSpinTotalTimes = this._processedServerData.getCurrentRSOpenCount();
            const reSpinTotalTimes = this._currentFGAndRSRecord1016?.firstNgToRsData?.reSpinCount.total || 0;
            this._reSpinBoard.setReSpinTimes(reSpinTotalTimes);
            let callBackFlag: boolean = false;
            const asyncEvtCallback = async () => {
                //--change gameState
                if (callBackFlag) return;
                callBackFlag = true;
                GlobalAccessWriter.setGlobalData(
                    GameGlobalKeys.GameState, GameState.RE_SPINE
                );
                this._gameModeManager.changeAllGameState(GameState.RE_SPINE);

            }

            const beforeOpenBoardDelay = this._gameStepDelayTimeList.get(cfg => cfg.respin?.beforeBoardWait);
            if (beforeOpenBoardDelay > 0) {
                await this.addTweenDelay(beforeOpenBoardDelay);
            }
            await this._reSpinBoard.openWithEvtAndFinishPromise(asyncEvtCallback);
            this._isInterrupting = false;
            GlobalAccessWriter.setGlobalData(GameGlobalKeys.InterruptProcess, this._isInterrupting);
            await this.processCalculatingRSandFG();
        }

        //---表演觸發respin次數(上方的UI)
    }


    /**
     * 處理FG之前要做的事<例如:擷取資料之類的關閉面板之類的..>
     * @param value RoundStep<Out, G>
     * TIPS:已經是新round的資料了
     */
    protected override async beforeProcessFGRound(value): Promise<void> {

        if (!this._processedServerData.isFirstFreeGame()) return;

        GlobalAccessWriter.setGlobalData(
            GameGlobalKeys.GameState, GameState.FREE_GAME
        );

        //step1--有Scatter的狀態下需要播放scatter的connect動畫
        //step2--播放完畢後再接續展開面板後續的流程
        /*
        await Promise.all([
            this._basicShowAniProcess.showScatterWinAni(),
            //--20251125新增需求
            this._gameBGSoundCtrl1016.fadeOutNGorRSWithBGM()
        ]);*/

        //--20251231-FIX修改-20250120 FIX again--
        //--20260122 FIX again again
        //const prevData = this._processedServerData.getPrevData();
        const prevState = this._processedServerData.getPrevState();
        const dt = this._gameStepDelayTimeList.get(cfg => cfg.fg?.beforeWait);
        if (prevState === GameState.NORMAL) {

            if (this._currentFGAndRSRecord1016.firstNgToFgData != null) {

                const fgCount: { reels: number[], total: number } = this._currentFGAndRSRecord1016.firstNgToFgData.fgCount;
                this._currentFGAndRSRecord1016.firstNgToFgData = null;
                if (fgCount.total > 0) {

                    await this._async.waitSecondsRaw(dt);//--等一等
                    await Promise.all([
                        this._basicShowAniProcess.showScatterAndWildWinAniBeforeFG(fgCount.reels),
                        (<UniSlotMachine1016>this._slotMachine).playWildAniToFg(fgCount.reels)
                    ]);
                    //await this._basicShowAniProcess.showScatterWinAni();
                    await this.addTweenDelay(0.2);//--scatter connect動畫的等待時間
                }
            }
        }
        await this._async.waitSecondsRaw(dt);//--等一等
        this._gameBGSoundCtrl1016.fadeOutNGorRSWithBGM();
        //--開啟面板....
        const fgTotalTimes = this._processedServerData.getCurrentFGOpenCount();
        //-_fgUI
        this._fgUI.setTotalFgCount(fgTotalTimes);
        const boardOutCallBack = () => {
            this._ngUI.closeReSpinCountUI();
            this._gameModeManager.changeAllGameState(GameState.FREE_GAME);
        }

        (<UniSlotMachine1016>this._slotMachine).reSetLockReels();//--LOCK 解鎖
        //this._processedServerData.clearCountForFg();--20260130取消,更改流程再開始前就會檢查清除
        this._fgUIBoard.setBoardMode(GameState.FREE_GAME);
        this._fgUIBoard.setFGPlayTimes(fgTotalTimes);
        await this._fgUIBoard.openFGUIBoard(fgTotalTimes, boardOutCallBack);
        const beforeFirstFgRoundWait = this._gameStepDelayTimeList.get(cfg => cfg.other?.beforeFirstFgRoundWait);
        await this._async.waitSecondsRaw(beforeFirstFgRoundWait);//--第一把FG開始前的等待時間-20260209
        this._isInterrupting = false;
        GlobalAccessWriter.setGlobalData(GameGlobalKeys.InterruptProcess, this._isInterrupting);
        console.log();

    }
    //--結束該round資料前處理.準備跟Server要下一round的資料
    protected override async beforeProcessNormalRound(): Promise<void> {
        //--處理回到Normal(整把結束FG->NG要資料)之前要做的事
        //---例如:擷取資料之類的關閉面板之類的
        const previousState = this._processedServerData.getPrevState();
        if (previousState === GameState.RE_SPINE) {
            //--關閉reSpin面板
            await this._ngUI.closeReSpinCountUI();
        }
        this._ngUI.closeAllUI();
        //--準備把isLock按鈕重新設定
        if (previousState === GameState.FREE_GAME) {
            //--秀結算面板
            //--如果要秀面板與FG的JP結算他數字要跟面板對得起來..

            //const totalRoundScoreInfo: { betValue: number, odds: number, score: number } = this._processedServerData.getALLRoundTotalScoreAndBetFixed();
            //--20260306-需求修改要以FG內所獲得的分數為主,所以改成這個方法
            const totalRoundScoreInfo: { betValue: number, odds: number, score: number } = this._processedServerData.getFGRoundTotalScoreAndBetFixed();
            GlobalAccessWriter.setGlobalData(GameGlobalKeys.RoundTotalOdds, totalRoundScoreInfo.odds);
            this._fgUIBoard.setBoardMode(GameState.NORMAL);
            this._basicShowAniProcess.cleanAllPlayingBeforeNewStart();//--切掉輪播

            const endJpRoundDelay = this._gameStepDelayTimeList.get(cfg => cfg.fg?.beforeOpenWait);
            const p = this._async.waitSecondsTracked(endJpRoundDelay, 'beforeOpenFGBoardDelay', null, true);
            await p.promise;
            await this._basicShowAniProcess.showBigWinAfterFG(totalRoundScoreInfo.odds, totalRoundScoreInfo.betValue);//--1006新增功能(要結束FG後才秀大獎)

            const endOpenDelay = this._gameStepDelayTimeList.get(cfg => cfg.Jackpot?.beforeOpenWait);
            await this.addTweenDelay(endOpenDelay);
            //--關閉FG面板
            await Promise.all([
                this._fgUIBoard.openFGUIBoard(totalRoundScoreInfo.score),
                //--20251125新增需求
                this._gameBGSoundCtrl1016.fadeOutFGWithBGM()
            ]);
            //--將等待大獎畫面秀出時機點放到開啟面板結束後-20260109

            //const endJpRoundDelay = this._gameStepDelayTimeList.get(cfg => cfg.Jackpot?.beforeOpenWait);
            //const p = this._async.waitSecondsTracked(endJpRoundDelay, 'beforeOpenFGBoardDelay', null, true);
            //await p.promise;

            //await this._basicShowAniProcess.showBigWinAfterFG(totalRoundScoreInfo.odds, totalRoundScoreInfo.betValue);//--1006新增功能(要結束FG後才秀大獎)
        }
    }


    //----重置資料準備新一輪(跟server要資料前)
    protected override resetDataForNewRound(): void {

        //--要清掉上輪的面板資料
        //console.log('check_resetDataForNewRound', this._processedServerData.getCurrentState());
        GlobalAccessWriter.setGlobalData(
            GameGlobalKeys.GameState, GameState.NORMAL
        );
        GlobalAccessWriter.setGlobalData(GameGlobalKeys.RoundTotalOdds, 0);
        this._isInterrupting = false; //---重置中斷狀態
        GlobalAccessWriter.setGlobalData(GameGlobalKeys.InterruptProcess, this._isInterrupting);
        (<UniSlotMachine1016>this._slotMachine).reSetLockReels();
        this._basicShowAniProcess.resetAllData();
        this._processedServerData.clearAllData();
        this._currentFGAndRSRecord1016.resetData();
        let currentGameState = GlobalAccessWriter.getGlobalData(GameGlobalKeys.GameState);
        //--註冊遊戲收發狀態改變接收者...
        this._gameModeManager.changeAllGameState(currentGameState);
    }

    //============================== 表演流程控制 =============================




    //============================== 需要用到的tool============================

    //============================== testMode 狀態 =========================
    //---for testMode--
    private evtBackTest = (sub) => {
        //console.log('Test mode event received:', sub);
        this.runTest();
    }
    override async runTest(value?: any): Promise<void> {
        //--做stop的時候,看要不要在processAfterAllReelRollEnd接續往下測試
        //return;
        super.runTest();
        //(<UniSlotMachine1016>this._slotMachine).testFunction();

        //--開啟面板....

        this._fgUI.setTotalFgCount(10);
        const boardOutCallBack = () => {
            this._ngUI.closeReSpinCountUI();
            this._gameModeManager.changeAllGameState(GameState.FREE_GAME);
        }

        (<UniSlotMachine1016>this._slotMachine).reSetLockReels();//--LOCK 解鎖

        this._fgUIBoard.setBoardMode(GameState.FREE_GAME);
        this._fgUIBoard.setFGPlayTimes(10);
        await this._fgUIBoard.openFGUIBoard(10, boardOutCallBack);

    }

    //============================== testMode 狀態 =========================
    public testHideIcon(reelIndex: number, iconIndex: number): void {
        (this._slotMachine as UniSlotMachine1016).testHideIcon(reelIndex, iconIndex);
    }

    public testAddSymbol(reelIndex: number, iconIndex: number): void {
        (this._slotMachine as UniSlotMachine1016).testAddSymbol(reelIndex, iconIndex);
    }


}