import { _decorator, Node, Vec3, color, UITransform, Vec2, Game, AudioClip, AudioSource, tween } from 'cc';
import {
    BasicShowAniProcess,
    WinScoreData,
    IMatchInfoForRound,
    GameState,
    IReelInfo,
    IPlayAniData,
    IMachPosInfo,
    GameUtilsTools,
    NotifyCation,
    SymbolOwnerAgentID,
    IAnimationControl,
    DYN_NODE_PROPERTIES,
    AnimationControllersPoolManager,
    NotifySubject,
    GameViewEvents,
    AnimationStateType,
    GameGlobalKeys,
    MultiSpineController,
    SpineController,
    AnimationController
} from '../../ReferencePath';
import { SlotRequestEvent, SlotNotifySubject, SlotResponseSubject } from '../../EventData1016/DefinitionEventData1016';
import { AniSysTools } from '../../MyUtils/AnimationSystemV2/AniTools/AniSysTools';
import { DefinitionGameConfigData, DYN_WILD_INFO } from '../../DefinitionGameData1016/GameConfigInstance';
import { IFunctionOwnerAgent, FunctionType } from '../../AniMediator1016/CrossSystemFun/IFunctionOwnerAgent';
import { Call_Function_Type } from '../../AniMediator1016/CrossSystemFun/DefinitionFunctionType';
import { IDirtyCrossSysServiceFacade } from '../../AniMediator1016/CrossSystemFun/IDirtyCrossSysServiceFacade';
import { WinScore } from '../WinScore/WinScore';
import { IWildMovementDataNew } from '../../Slot/ISlotDefinitionData';
import { WildMoveFXCtrl, IWildMoveData } from '../WildMoveEffectController/WildMoveFXCtrl';
import { IStateCondition } from '../../DefinitionGameData1016/GameConfigInstance';
import { CountTimesFXController } from '../CountTimesFXController/CountTimesFXController';
import { GlobalAccessReader } from '../../DefinitionGameData1016/AccessDefs/GlobalAccess';
import { JpShowCtrl1016 } from '../JpShowController/JpShowCtrl1016';
import { BasicShowResultProcessKey } from '../../MyUtils/AsyncScope/Definitions/BasicGameFlowProcessKey';
//import { NewFlashModeEnum } from 'db://assets/GenericUI/Scripts/MainUI';
import { SoundList, AudioSourceList } from '../../DefinitionGameData1016/SoundList1016';
//import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
import { PlaySelector } from '../../MyUtils/AnimationSystemV2/Definitions/IPlayOptions';
import { GameBGSoundCtrl1016 } from '../../GameBGSoundCtrl1016/GameBGSoundCtrl1016';
import { AudioManager, NewFlashModeEnum, SOUND_TYPE } from 'db://assets/Scripts/ModuleEntry';
import { WildLayerCtrl } from '../WildMoveEffectController/WildLayerCtrl';
/**
 * T=Line中線的資料格式定義
 * W=winScoreData
 * P=playIAniData
 * <T, W, P>
 */

export interface IGroupAniData {
    odd: number,//--那一線的賠率
    lineType: number,//--哪一種線
    //betValue:number
}
//--要添加動畫物件的顯示容器清單
const enum STAGE_ID {
    SYMBOL_SHOW_CONTAINER = 'ShowWinSymbolContainer',
    WILD_SHOW_CONTAINER = 'ShowWholeWildContainer',//--整條1*4的wild--棄用20260306
    //ShowNotMovementWildContainer
    WILD_NO_MOVEMENT_SHOW_CONTAINER = 'ShowNotMovementWildContainer',//--不動的wild
    SCATTER_SHOW_CONTAINER = 'ShowScatterContainer',//--Scatter
    AWARD_BOX_SHOW_CONTAINER = 'ShowAwardBoxContainer',//--連線的外框
    RS_FG_FX_SHOW_CONTAINER = 'ShowWildFgCountFXContainer',//--重轉/免費遊戲特效容器
    NOT_ROUND_SCATTER_CONTAINER = 'NotRoundScatterContainer',//--特殊scatter容器(沒有中線,或是轉換輪播的時候非自己這輪要往下插)
    WILD_SHOW_FX_CONTAINER = 'WildShowFXContainer',//--wild特效容器(播放獲得RS/FG光線要拉上來)
    SC_SHOW_FX_CONTAINER = 'ScatterShowFXContainer'//--scatter特效容器(獲得中獎or進入FG/FG光線特效)
}
//--特殊物件預設群組
const DEFAULT_GROUP_AWARD = 99;//--連線框
const DEFAULT_GROUP_WILD = 98;//--wild
const DEFAULT_GROUP_SCATTER = 97;//--scatter
const PREFAB_ID_AWARD_BOX = 'Iconbox_inGame';
const WILD_PLAY_COUNT_NAME = 'Connect_';
const SP_SHOWING = 'Sp_mode_showing';
const WILD_EXPECT_ANI_ID = 'Expect';
const SCATTER_EXPECT_ANI_ID = 'Expect';
const {
    SPECIAL_WIN_THRESHOLD,
    WILD_LIST,
    SCATTER_LIST,
    HIGH_ODDS_SYMBOL_LIST,
    MIDDLE_ODDS_SYMBOL_LIST,
    LOW_ODDS_SYMBOL_LIST,
    REGULAR_ODDS_SYMBOL_LIST,
    REEL_AMOUNT//--5
} = DefinitionGameConfigData;
const WILD_SET: ReadonlySet<number> = new Set(WILD_LIST);//--查找要用到的
const WILD_COUNT_ANI_STATE_NAME = 'Start';
const SCATTER_FG_ANI_STATE_NAME = 'Start';
const DEBUG_TITLE: string = 'ShowAniProcessController1016';
const DEBUG_TITLE2: string = 'ShowAniProcessController1016_debug';
const enum SIGNAL_KEY {
    GET_RS_EFFECT = 'GET_RS_EFFECT',
    GET_FG_EFFECT = 'GET_FG_EFFECT',
    MULTIPLE_SEQUENCE = 'MULTIPLE_SEQUENCE'
}
const { ccclass, property } = _decorator;

@ccclass('ShowAniProcessController1016')
export class ShowAniProcessController1016 extends BasicShowAniProcess<IMatchInfoForRound, WinScoreData, IPlayAniData> implements IFunctionOwnerAgent {

    @property({ type: WinScore, visible: true, displayName: "WinScore", tooltip: "得分動畫控制器" })
    private _winScore: WinScore = null;

    @property({ type: JpShowCtrl1016, visible: true, displayName: "JpShowCtrl1016", tooltip: "大獎控制器" })
    private _jpShowCtrl: JpShowCtrl1016 = null;

    @property({ type: CountTimesFXController, visible: true, displayName: "CountTimesFXController", tooltip: "表演計次的粒子動畫" })
    private _countTimesFXController: CountTimesFXController = null;

    @property({ type: WildLayerCtrl, visible: true, displayName: 'WildLayerCtrl', tooltip: 'wild專用layer控制器' })
    private _wildLayerCtrl: WildLayerCtrl = null;

    @property({ type: WildMoveFXCtrl, visible: true, displayName: 'WildMoveFXCtrl', tooltip: 'wild位移控制器' })
    private _wildMoveFXCtrl: WildMoveFXCtrl = null;

    @property({ visible: true, tooltip: 'icon尺寸' })
    protected _iconSize: Vec2 = new Vec2(0, 0);


    @property({ type: AudioClip, visible: true, displayName: "我不想多說甚麼了..低能到不行", tooltip: "幹" })
    private _dummyAudioClip: AudioClip = null;
    /**
     * DI進來的動畫服務facade
     * @param _crossSystemSymbolAniService IDirtyCrossSysServiceFacade
     */
    //--查找使用的ownerID
    public readonly ownerId: number = SymbolOwnerAgentID.ShowAniController;
    private _crossSystemSymbolAniService: IDirtyCrossSysServiceFacade<IReelInfo, Node, string> = null;
    //--清除的時候要清掉
    private _mapWinScoreGroupData: Map<string, { IAniData: IPlayAniData, group: number[] }> = new Map();
    private _mapGroupAniData: Map<number, IGroupAniData> = new Map();
    private _wildPlayCount: number = 0;//---每round都要重置
    private _gameStateCondition: IStateCondition = null; // 判斷當前與下一把的狀態關係
    private _moveWildDataMap: Map<number, { data: IPlayAniData, wildNode: Node }> = new Map();//--key:reelIndex
    private _currentRoundOdds: number = 0;//--目前這一局的總賠率(累加用)
    private _gotFGScatterCount: number = 0;//--本局獲得的scatter數量
    private _hasScatterAppearInThisRound: boolean = false;

    //--幹--
    private _bgmCtrl: GameBGSoundCtrl1016 = null;
    private _preRoundOddsForAni: number = 0;
    // 存儲 scatter 出場動畫的 promise-20260205
    private _scatterAppearPromises: Map<number, Promise<void>> = new Map();

    set hasScatterAppearInThisRound(value: boolean) {
        this._hasScatterAppearInThisRound = value;
    }

    set preRoundOddsForAni(value: number) {
        this._preRoundOddsForAni = value;
    }

    set gotFGScatterCount(value: number) {
        this._gotFGScatterCount = value;
    }

    get gotFGScatterCount(): number {
        return this._gotFGScatterCount;
    }

    set bgmCtrl(value: GameBGSoundCtrl1016) {
        this._bgmCtrl = value;
    }

    set gameStateCondition(value: IStateCondition) {
        this._gameStateCondition = value;
    }

    //--這邊不能用建構式塞進去,因為這是component
    constructor() {
        super();
    }
    //===================interface<IGameMode>===================
    public changeGameState(value: GameState): void {
        // 實作遊戲狀態變更邏輯
    }
    //===================interface<IBasicShowAniProcess>===================
    //--初始化流程
    public init(): void {

        super.init();
        //--做其他你要在系統register之前做的事情
        this._countTimesFXController.init();
        //--<寫入排序群組分類(level越小會排越上面)>--
        this._arySortLayerSymbol = [
            { level: 1, conditionSymbolGroup: [...SCATTER_LIST] },
            { level: 2, conditionSymbolGroup: [...WILD_LIST] },
            { level: 3, conditionSymbolGroup: [...HIGH_ODDS_SYMBOL_LIST] },
            { level: 4, conditionSymbolGroup: [...REGULAR_ODDS_SYMBOL_LIST] }
        ];

    }

    /**
     * 還在該局內,只是重置當下的狀態
     */
    public resetRoundData(): void {

        super.resetRoundData();
        this._moveWildDataMap.clear();
        this._wildMoveFXCtrl.reset();
        this._wildPlayCount = 0;
        this._gotFGScatterCount = 0;
        this._scatterAppearPromises.clear();//--20260205
    }

    public resetAllData(): void {

        this._currentRoundOdds = 0;
        this.resetRoundData();
    }

    public registerService(value: IDirtyCrossSysServiceFacade<IReelInfo, Node, string>): void {
        this._crossSystemSymbolAniService = value;
        this._crossSystemSymbolAniService.registerYourself(this);
    }
    // 註冊流程其他的系統從這邊初始起來..
    //-靠北不能從這裡塞....interface沒有定義參數
    public register(): void {
        //--<寫入遊戲步驟延遲時間列表(單位-秒)>--
        this._gameStepDelayTimeList = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList);
        this._jpShowCtrl.register();
        this._winScore.register();
        this._wildMoveFXCtrl.register(this._wildLayerCtrl);//--20260306
    }

    // 這裡可以擴展或覆寫父類的方法
    //===================interface<IBasicShowAniProcess>===================
    // 交出前要做的事
    public beforeRelease(info: Pick<IReelInfo, "reelIndex" | "iconIndex">): Node | null {

        let infoAni = <IPlayAniData>info;
        //--從runningPool裡面拔除
        let target = this.getAniWithRemoveFromPoolByTokenId(infoAni.tokenId);
        if (!target) {
            if (this._wildMoveFXCtrl.checkExistWildNode(infoAni.reelIndex, infoAni.iconIndex)) {
                //--20260306-old流程,取消
                //const wildDataForTransfer = this._wildMoveFXCtrl.getExistWildNodeAndTransferLayer(infoAni.reelIndex);
                const wildDataForTransfer = this._wildMoveFXCtrl.removeAndGetWildMoveData(infoAni.reelIndex);
                target = wildDataForTransfer?.wildNode;
            }
        }

        if (target) {
            let aniInterfaceComponent: IAnimationControl | null = target[DYN_NODE_PROPERTIES.ANIMATION_CTRL] as IAnimationControl;
            if (!aniInterfaceComponent) {
                aniInterfaceComponent = AniSysTools.findAndGetIAniComponent(target) as IAnimationControl;
            }
            if (target[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId === WILD_LIST[0]) {
                aniInterfaceComponent?.playAni({ aniState: AnimationStateType.Idle });//--wild要回到idle    
            } else {
                aniInterfaceComponent?.goBackToDefault();
            }
            target.removeFromParent();//--從container移除
        }

        //aniInterfaceComponent.stopNow();--這樣會壞掉QQ
        //aniInterfaceComponent.playAni(AnimationStateType.Default);

        return target;
    }

    /**
     * <<接手後要做的事>>tokenId一定要留住
     * 跟slotMachine交接動畫物件,交接完成會把AniNode,轉送進來這裡
     * @param info IPlayAniData(裡面有包含世界座標直接可以塞了)
     * @param node 
     */
    public async afterAcquire(info: Pick<IReelInfo, "reelIndex" | "iconIndex">, node: Node): Promise<void> {

        let infoAni = <IPlayAniData>info;
        //GameUtilsTools.debugLog(DEBUG_TITLE, 'afterAcquire', { infoAni, node });

        if (infoAni.symbolId === WILD_LIST[0]) {
            this._moveWildDataMap.set(infoAni.reelIndex, { data: infoAni, wildNode: node });
        } else {
            let containerID: string = STAGE_ID.SYMBOL_SHOW_CONTAINER;
            let targetGroupId: number[] = [];
            if (infoAni.symbolId === SCATTER_LIST[0]) {
                //--scatter出現時放的layer位置
                containerID = STAGE_ID.SCATTER_SHOW_CONTAINER;//...有點怪怪的,雖然寫了layer排序,但太特殊了直接切別的layer做
                targetGroupId = [-999];
            }
            if (!infoAni.containerNodeId) {
                infoAni.containerNodeId = containerID;
            }
            await this.addAnimationData(node, infoAni, targetGroupId);

            if (infoAni.symbolId != SCATTER_LIST[0]) {
                node[DYN_NODE_PROPERTIES.ANIMATION_CTRL]?.playAni({ aniState: AnimationStateType.Idle });
            } else if (infoAni.symbolId == SCATTER_LIST[0]) {
                //-出場
                this._hasScatterAppearInThisRound = true;
                const gameState = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);
                //--當下回合使用的速度值
                const gameSpeed = GlobalAccessReader.getGlobalData(GameGlobalKeys.CurrentRoundSpeed);
                const roundFg = GlobalAccessReader.getGlobalData(GameGlobalKeys.CurrentFGAndRSRecord);
                if (roundFg.hope.length > 0) {
                    if (roundFg.hope.includes(infoAni.reelIndex)) {
                        AudioManager.instance.playSound(SoundList.Sc_in, SOUND_TYPE.NORMAL, AudioSourceList.BtnAS);
                        node[DYN_NODE_PROPERTIES.ANIMATION_CTRL]?.goBackToDefault();
                        await this.hotfixChangeProcessScAppear(node, gameSpeed);
                        console.log();
                    }
                }

                if (node[DYN_NODE_PROPERTIES.READY_HAND_STATUS] && gameSpeed == NewFlashModeEnum.None && !node[DYN_NODE_PROPERTIES.FAST_MODE]) {
                    if (infoAni.reelIndex != REEL_AMOUNT - 1) {
                        node[DYN_NODE_PROPERTIES.IS_PLAYING_EXPECT] = true;
                        if (AudioManager.instance.isPlaying(AudioSourceList.BtnAS)) {
                            AudioManager.instance.stopSound([AudioSourceList.BtnAS]);
                        }
                        //--巨尷尬...這個聽牌的時間小於音效的時間阿
                        /*
                        if (!AudioManager.instance.isPlaying(AudioSourceList.BasicAS)) {
                            AudioManager.instance.playSound(SoundList.Sc_Ready, SOUND_TYPE.NORMAL, AudioSourceList.BasicAS);
                        }*/

                        node[DYN_NODE_PROPERTIES.ANIMATION_CTRL]?.playAni({ aniState: SCATTER_EXPECT_ANI_ID });
                    }
                } else if (gameState == GameState.RE_SPINE) {
                    //--RS模式的scatter不播放idle LOOP
                    node[DYN_NODE_PROPERTIES.ANIMATION_CTRL]?.goBackToDefault();
                }

            }
        }
    }

    protected update(dt: number): void {

        if (this._hasScatterAppearInThisRound) {
            for (const node of this._aryRunningNode) {
                if (
                    node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId === SCATTER_LIST[0] &&
                    node[DYN_NODE_PROPERTIES.ADDED] &&
                    node[DYN_NODE_PROPERTIES.REFERENCE_TARGET] != null
                ) {
                    const targetNode: Node = node[DYN_NODE_PROPERTIES.REFERENCE_TARGET];
                    node.worldPosition = targetNode?.worldPosition.clone();
                }
            }
        }
    }

    private async hotfixChangeProcessScAppear(nodeTarget: Node, speed: NewFlashModeEnum): Promise<void> {

        const reelIndex = nodeTarget[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex;

        if (speed == NewFlashModeEnum.NewFlash2 || speed == NewFlashModeEnum.NewFlash1) {
            //await nodeTarget[DYN_NODE_PROPERTIES.ANIMATION_CTRL]?.playAniInPromise({ aniState: 'Appear' });
            nodeTarget[DYN_NODE_PROPERTIES.ANIMATION_CTRL]?.playAni({ aniState: 'Appear' });
            this._scatterAppearPromises.set(reelIndex, Promise.resolve());
            return;
        } else {
            const appearPromise = nodeTarget[DYN_NODE_PROPERTIES.ANIMATION_CTRL]?.playAniInPromise({ aniState: 'Appear' });
            this._scatterAppearPromises.set(reelIndex, appearPromise);
            await appearPromise;
            //await nodeTarget[DYN_NODE_PROPERTIES.ANIMATION_CTRL]?.playAniInPromise({ aniState: 'Appear' });
        }
    }

    public async afterMultiAcquire(mapInfo: Map<string, { data: Pick<IReelInfo, "reelIndex" | "iconIndex">, node: Node }>): Promise<void> {
        await this.processAfterGetAwardSymbols(mapInfo);
    }

    public crossProcess(processType: FunctionType): void {

        //GameUtilsTools.debugLog(DEBUG_TITLE, 'crossProcess', { processType });
        switch (processType.name) {

            case Call_Function_Type.CALL_SHOW_WILD_EXPECT:
                this.playForecastWildOrScatterAni(processType.args[0]);
                break;

            case Call_Function_Type.CALL_HIDE_WILD_EXPECT:

                this.stopForecastWildAni(processType.args[0]);
                break;

            case Call_Function_Type.CALL_HIDE_ALL_WILD_EXPECT:
                this.stopAllExpectAni();
                break;

        }
    }

    public crossMultiProcess(processType: FunctionType[]): void {

    }

    /**
     * 20251031-
     * 因為美術原本的scatter動畫在appear之後會直接進入idle loop,但現在拆掉
     * 78企劃不知道在那邊龜毛三小要全盤面停止後才接idle loop
     * 所以這邊要補上在整軸停止後,讓scatter進入idle loop
     */
    public afterWholeReelStopIdleSpAni(nextState: GameState): void {

        const gameState = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);

        for (let i = 0; i < this._aryRunningNode.length; i++) {
            const node = this._aryRunningNode[i];
            const sd = node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId;
            if (sd === SCATTER_LIST[0] || sd === WILD_LIST[0]) {
                const aniCtrl: AnimationController = node[DYN_NODE_PROPERTIES.ANIMATION_CTRL];
                if (sd == WILD_LIST[0]) {
                    if (aniCtrl.currentTarget.targetName !== 'Idle_Ani') {
                        aniCtrl.playAni(AnimationStateType.Idle);
                    }
                } else {
                    //--剛好有聽牌然後沒中~且在NG狀態+下一把不會進FG
                    if (gameState === GameState.NORMAL &&
                        node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId === SCATTER_LIST[0] &&
                        this._preRoundOddsForAni === 0 &&
                        nextState !== GameState.FREE_GAME
                        //nextState !== GameState.RE_SPINE
                    ) {
                        aniCtrl?.playAni({ aniState: AnimationStateType.Idle });
                    }

                }
            }
        }
    }

    //================== cross system function ==================================
    private async playForecastWildOrScatterAni(reelId: number): Promise<void> {

        if (this._wildMoveFXCtrl.checkExistWildNode(reelId, 4)) {
            this._wildMoveFXCtrl.playForecastWildAni(reelId);
        } else {
            const wildAniNode = this.getNodeByReelIndexAndIconIndex(reelId, 4);
            if (wildAniNode) {
                const aniCtrl: AnimationController = wildAniNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL];
                wildAniNode[DYN_NODE_PROPERTIES.IS_PLAYING_EXPECT] = true;
                aniCtrl?.playAni({ aniState: WILD_EXPECT_ANI_ID });
            } else {
                //--找scatter(但這裡不太可能會執行,因為scatter他是隨著轉輪轉出來的)
                const scatterAniNode = this.getUniqueSymbolNodeInReel(reelId, SCATTER_LIST[0]);
                if (scatterAniNode) {
                    //--該軸Scatter appear還沒播完就聽牌了,等他播完
                    const appearPromise = this._scatterAppearPromises.get(reelId);
                    if (appearPromise) {
                        await appearPromise;
                    }
                    const aniCtrl: AnimationController = scatterAniNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL];
                    scatterAniNode[DYN_NODE_PROPERTIES.IS_PLAYING_EXPECT] = true;
                    aniCtrl?.playAni({ aniState: SCATTER_EXPECT_ANI_ID });
                }
            }
        }
    }

    private stopForecastWildAni(reelId: number): void {
        //--只有整軸才會有預報啦
        if (this._wildMoveFXCtrl.checkExistWildNode(reelId, 4)) {
            this._wildMoveFXCtrl.stopForecastWildAni(reelId);
        } else {
            const wildAniNode = this.getNodeByReelIndexAndIconIndex(reelId, 4);
            if (wildAniNode) {
                const aniCtrl: AnimationController = wildAniNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL];
                aniCtrl?.goBackToDefault();
            } else {
                //--找scatter(但這裡不太可能會執行,因為scatter他是隨著轉輪轉出來的)
                const scatterAniNode = this.getUniqueSymbolNodeInReel(reelId, SCATTER_LIST[0]);
                if (scatterAniNode) {
                    const aniCtrl: AnimationController = scatterAniNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL];
                    aniCtrl?.goBackToDefault();
                }
            }
        }
    }

    private stopAllExpectAni(): void {

        this._wildMoveFXCtrl.stopAllForecastWildAni();

        for (let i = 0; i < this._aryRunningNode.length; i++) {
            const node = this._aryRunningNode[i];
            if (node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId === SCATTER_LIST[0] ||
                node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId === WILD_LIST[0]
            ) {

                node[DYN_NODE_PROPERTIES.READY_HAND_STATUS] = false;
                if (node[DYN_NODE_PROPERTIES.IS_PLAYING_EXPECT] === true) {

                    const aniCtrl: AnimationController = node[DYN_NODE_PROPERTIES.ANIMATION_CTRL];
                    node[DYN_NODE_PROPERTIES.IS_PLAYING_EXPECT] = false;
                    aniCtrl?.goBackToDefault();
                }
            }
        }

    }


    /**
     * 處理獲得獎勵符號後的邏輯
     * @param mapInfo 獲得的資訊(從slotMachine拔回來的slot)
     */
    private async processAfterGetAwardSymbols(mapInfo: Map<string, { data: Pick<IReelInfo, "reelIndex" | "iconIndex">, node: Node }>): Promise<void> {

        //this._crossSystemSymbolAniService.debugCheckAllOwners();
        let checkExistData: IPlayAniData;
        const keys: string[] = [];
        mapInfo.forEach((_, key) => keys.push(key));
        //for (const [key, value] of mapInfo.entries()) {
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const value = mapInfo.get(key);
            const { node } = value;
            const data = <IPlayAniData>value.data;
            if (!node) {
                //--處理有位移的wild(不論是否全軸1*4)
                if (data.symbolId === WILD_LIST[0]) {
                    if (this._wildMoveFXCtrl.checkExistWildNode(data.reelIndex, data.iconIndex)) {
                        this.processWildMoveData(data);
                    }
                }
                continue;
            }

            let targetGroupId;

            if (data.symbolId == WILD_LIST[0]) {
                //--處理沒有移動的wild(不論是否全軸1*4),因為有可能是轉出來就直接在slotMachine裡面了,所以沒有經過afterAcquire的流程,要直接在這邊處理
                //--20260306-NEW修改流程
                this.processWildNoMove(data, node);
                continue;
                //--20260306-舊流程,棄用
                //targetGroupId = this.getWildContinuousGroup([...node[DYN_WILD_INFO.WILD_CONTINUE]]);
                //data.containerNodeId = this.getWildContainer(node[DYN_WILD_INFO.WILD_CONTINUE]);
            } else {

                if (this._mapWinScoreGroupData.has(key)) {

                    targetGroupId = this._mapWinScoreGroupData.get(key).group;

                } else {
                    //--檢查是不是scatter
                    const symbolIdKey = this.getSymbolIdByKeyString(key);
                    if (symbolIdKey == SCATTER_LIST[0]) {
                        node[DYN_NODE_PROPERTIES.OTHER] = SP_SHOWING;
                        targetGroupId = [-999];
                        data.containerNodeId = STAGE_ID.SCATTER_SHOW_CONTAINER;
                    }
                }
            }
            //const targetGroupId = this._mapWinScoreGroupData.get(key).group;
            await this.addAnimationData(node, data, targetGroupId);
            checkExistData = this.fastCreateIPlayAniData(node);
            checkExistData.symbolId = DEFAULT_GROUP_AWARD;
            const existCheckingData: { flag: boolean, tokenId: string } = this.checkIsExistAniNode(checkExistData);
            //console.log('checkExistData', checkExistData, existCheckingData);
            //--建立連線框--
            //--查找同位置是否有awardBox({ flag: false, tokenId: '' })
            if (
                data.symbolId != SCATTER_LIST[0] &&
                data.symbolId != WILD_LIST[0] &&
                !existCheckingData.flag &&
                existCheckingData.tokenId == ''
            ) {
                const cloneAwardBox: IPlayAniData = GameUtilsTools.deepClone(data);
                cloneAwardBox.containerNodeId = STAGE_ID.AWARD_BOX_SHOW_CONTAINER;
                cloneAwardBox.groupId = DEFAULT_GROUP_AWARD;
                cloneAwardBox.prefabKey = PREFAB_ID_AWARD_BOX;
                cloneAwardBox.tokenId = Date.now() + '_' + GameUtilsTools.getRangeRandom(0, 100);//--隨機tokenId;
                const aniNode = AnimationControllersPoolManager.getInstance().getInstantiatedObjFromPool(cloneAwardBox.prefabKey);
                aniNode[DYN_NODE_PROPERTIES.GROUP_ID] = [];
                aniNode[DYN_NODE_PROPERTIES.TOKEN_ID] = cloneAwardBox.tokenId;
                aniNode[DYN_NODE_PROPERTIES.PREFAB_ID] = cloneAwardBox.prefabKey;
                aniNode[DYN_NODE_PROPERTIES.ADDED] = false;
                aniNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL] = AniSysTools.findAndGetIAniComponent(aniNode) as IAnimationControl;;
                //-slotMachineIndexInfo?: IReelInfo;
                aniNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO] = {
                    reelIndex: cloneAwardBox.reelIndex,
                    iconIndex: cloneAwardBox.iconIndex,
                    symbolId: DEFAULT_GROUP_AWARD
                };
                await this.addAnimationData(aniNode, <IPlayAniData>cloneAwardBox, targetGroupId);
                //--先關閉顯示
                const aniInterfaceComponent = AniSysTools.findAndGetIAniComponent(aniNode) as IAnimationControl;
                aniInterfaceComponent.goBackToDefault();//--直接回到預設狀態
                aniNode.active = false;
            }

        }
        this.sortAnimationLayer();//--確保動畫層級排序正確
        //await this.reSetWildLayerAndSort();
        //this.sortForWildNodes(STAGE_ID.WILD_SHOW_CONTAINER, 'processAfterGetAwardSymbols');
        //GameUtilsTools.debugLog(DEBUG_TITLE, 'processAfterGetAwardSymbols_aryRunningNode', this._aryRunningNode);

    }


    /**
     * 20260306 NEW一開始轉出的wild(沒有位移,不論是否為1*4)
     * @param data IPlayAniData
     * @param node wild的node(已經在slotMachine裡面了,但還沒移動過來)
     */
    private processWildNoMove(data: IPlayAniData, node: Node): void {

        //--檢查是否為1*4的wild,要分別塞進不同的容器內
        const containerId = this.getWildContainer(node[DYN_WILD_INFO.WILD_CONTINUE]);
        //--這邊決定要放在哪個layer裡面(因為有可能是1*4的wild,所以要給整條的layer)
        if (containerId === STAGE_ID.WILD_SHOW_CONTAINER) {
            //--1*4的wild
            this._wildLayerCtrl.setWildToWholeLayer(data.reelIndex, node, data.wPos);
        } else if (containerId === STAGE_ID.WILD_NO_MOVEMENT_SHOW_CONTAINER) {
            //--非1*4的wild
            this._wildLayerCtrl.setWildToNoMoveWholeLayer(data.reelIndex, node, data.wPos);
        }

        this._wildLayerCtrl.sortAllContainer();
        const aniNode = node;
        let targetGroupId = this.getWildContinuousGroup([...aniNode[DYN_WILD_INFO.WILD_CONTINUE]]);
        //data.containerNodeId = this.getWildContainer(aniNode[DYN_WILD_INFO.WILD_CONTINUE]);---20260306 old流程
        this._moveWildDataMap.delete(data.reelIndex);
        //--以下為新的流程(要維持原有的右壓左邏輯,所以直接將分開呈現的不同layer容器,全都統一使用最終呈現的容器.20260304)
        if (data.groupId != null) {
            aniNode[DYN_NODE_PROPERTIES.GROUP_ID].push(data.groupId);
        }
        if (targetGroupId) {
            aniNode[DYN_NODE_PROPERTIES.GROUP_ID] = [...aniNode[DYN_NODE_PROPERTIES.GROUP_ID], ...targetGroupId];
        }
        this.initAniComp(aniNode, data);
        this._aryRunningNode.push(aniNode);

    }

    /**
     * 20260306 NEW:處理有位移的wild(不論是否為1*4)
     * @param data IPlayAniData
     */
    private processWildMoveData(data: IPlayAniData): void {
        //--轉移wild
        //--20260306-old流程
        //const wildDataForTransfer = this._wildMoveFXCtrl.getExistWildNodeAndTransferLayer(data.reelIndex);
        const wildDataForTransfer = this._wildMoveFXCtrl.removeAndGetWildMoveData(data.reelIndex);

        if (wildDataForTransfer) {
            //--20260306-新的右壓左的邏輯
            const aniNode = wildDataForTransfer.wildNode;
            //--檢查是否為1*4的wild,要分別塞進不同的容器內
            const containerId = this.getWildContainer(aniNode[DYN_WILD_INFO.WILD_CONTINUE]);

            if (containerId === STAGE_ID.WILD_SHOW_CONTAINER) {
                //--1*4的wild
                this._wildLayerCtrl.switchLayerToWholeLayer(data.reelIndex);

            } else if (containerId === STAGE_ID.WILD_NO_MOVEMENT_SHOW_CONTAINER) {
                //--非1*4的wild
                this._wildLayerCtrl.switchLayerToNoWholeLayer(data.reelIndex);
            }

            let targetGroupId = this.getWildContinuousGroup([...aniNode[DYN_WILD_INFO.WILD_CONTINUE]]);
            this._moveWildDataMap.delete(data.reelIndex);
            //--以下為新的流程(要維持原有的右壓左邏輯,所以直接將分開呈現的不同layer容器,全都統一使用最終呈現的容器.20260304)
            if (data.groupId != null) {
                aniNode[DYN_NODE_PROPERTIES.GROUP_ID].push(data.groupId);
            }
            if (targetGroupId) {
                aniNode[DYN_NODE_PROPERTIES.GROUP_ID] = [...aniNode[DYN_NODE_PROPERTIES.GROUP_ID], ...targetGroupId];
            }
            this.initAniComp(aniNode, data);
            this._aryRunningNode.push(aniNode);

            //--以下為舊的流程(因為在不同的容器當中...20260304)
            //data.wPos = wildDataForTransfer.WildMovementData.startWpos;//--換座標
            //this.addAnimationData(aniNode, data, targetGroupId);
        }
    }
    /**
     * 主動將自己擁有的動畫位置資料交給另一個owner（透過ownerId找）.
     * 找到之後會回到既有流程beforeRelease開始移交處理
     * TIPS:tokenId要塞
     * @param info data extends IReelInfo
     * @param targetOwnerId 指定轉交的 ownerId
     */
    private doHandoffSingleByOwnerIdBySelf(info: Pick<IReelInfo, "reelIndex" | "iconIndex">, targetOwnerId: number): void {

        this._crossSystemSymbolAniService.handoffSingleByOwnerId(info, targetOwnerId);
    }



    //=====================================<清除流程>=================================================

    /**
     * server資料回來後新一局開始start spin時可以呼叫
     * (這邊可以開始做不同的狀態判斷)
     * step1: 清除所有正在播放的動畫
     * step2: 清除輪播資料
     * step3: cancelAllDelays?.();--取消所有延遲
     * step4: 清理safeResolve
     * step5: 依照條件選擇特殊清除(現在在特殊模式下)或是一般清除
    */

    /**step.1 子類實作：停止分數/框線等（原本的 _winScore.stopWinScoreAni + 其他） */
    protected stopAndPauseWinAni(): void {
        this._winScore.stopToDefault();//--停止秀線...
        this._winScore.cleanPreviousAni();
    }

    /**step.2子類決定如何處理清除輪播資料 */
    public stopMultipleSequence(): void {
        this._mapGroupAniData.clear();
    }

    /**step.5-1 子類決定這回合是否需要「特殊清理」（例：Wild 正在工作） */
    /**
     * TIPS:
     * 1.RS模式當中isLock的wild會被釘死在場上,所以不需要交還slotMachine(doSpecialCleanupForNewStart)
     * 2.RS模式結束後isLock的wild需要交還slotMachine(doRegularCleanupForNewStart)
     * 
     * @returns 
     */
    protected isSpecialCleanupNeededForNewStart(): boolean {
        //let gameState = BasicGameGlobalData.getInstance<GameGlobalData>().getGlobalData(GameGlobalKeys.GameState);
        //let gameState = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);
        if (!this._gameStateCondition) {
            return false;//--交還釘死的wild
        } else if (this._gameStateCondition.isDifferentStateNext) {
            if (this._gameStateCondition.nextRoundState === GameState.NORMAL ||
                this._gameStateCondition.nextRoundState === GameState.FREE_GAME ||
                this._gameStateCondition.nextRoundState === null//--server資料還沒回來(全新局)
            ) {
                return false;//--交還釘死的wild
            } else {
                return true;
            }
        } else {
            return true;//--不交還wild釘死的
        }

    }
    /**step.5-2 子類實作：特殊清理（例：可移除/關 Wild → 全清 + resetWild） */
    protected async doSpecialCleanupForNewStart(): Promise<void> {
        //--wild為1*4的狀態就會被釘在場上,所以不需要交回slotMachine<排除1*4的wild>
        this.processDataBeforeRemoveByAwardBox();//--直接拔除awardBox
        const handoffPlayData = [];
        for (const aniNode of this._aryRunningNode) {
            const wild = aniNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId === WILD_LIST[0];
            const locked = aniNode[DYN_NODE_PROPERTIES.LOCKED];

            if (!wild || (wild && !locked)) {

                if (wild) {
                    const backData = this.createWildContinueIplayData(aniNode);
                    handoffPlayData.push(...backData);
                } else {
                    const iPlayAniData = this.fastCreateIPlayAniData(aniNode);
                    handoffPlayData.push(iPlayAniData);
                }
            } else if (wild && locked) {

                aniNode[DYN_NODE_PROPERTIES.GROUP_ID] = [];//--清空得分群組
                const ctrl = aniNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL] as AnimationController;
                if (ctrl.currentTarget == null) {
                    aniNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL].playAni(AnimationStateType.Idle);
                } else if (ctrl.currentTarget.targetName !== 'Idle_Ani') {
                    aniNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL].playAni(AnimationStateType.Idle);
                }
            }
        }
        if (handoffPlayData.length > 0) {
            await this._crossSystemSymbolAniService.multiHandoffBySameOwnerID(handoffPlayData, SymbolOwnerAgentID.SlotMachine);
        }
    }


    /**step.5-3 子類實作：一般清理（例：全部清除） */
    protected async doRegularCleanupForNewStart(): Promise<void> {
        //--1.交回控制權2.清除runningPool+連線框
        this.processDataBeforeRemoveByAwardBox();//--直接拔除awardBox
        const handoffPlayData = [];
        const reRegisterWholeWild = [];
        for (const aniNode of this._aryRunningNode) {
            let iPlayAniData = this.fastCreateIPlayAniData(aniNode);
            handoffPlayData.push(iPlayAniData);
            if (aniNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId == WILD_LIST[0]) {
                //--wild
                let wildContinue = [...aniNode[DYN_WILD_INFO.WILD_CONTINUE]];
                for (let i: number = 0; i < wildContinue.length; i++) {
                    let reBuildData = this.reBuildIPlayDataFromKeyString(wildContinue[i]);
                    if (reBuildData) {
                        reRegisterWholeWild.push(reBuildData);
                        if (reBuildData.iconIndex != aniNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconIndex) {
                            handoffPlayData.push(reBuildData);//--這邊是塞空資料回去
                        }
                    }
                }
            }
        }

        //--註冊回去map
        if (reRegisterWholeWild.length > 0) {
            //await this._crossSystemSymbolAniService.multiRegisty(reRegisterWholeWild, this);
            this._crossSystemSymbolAniService.multiRegisty(reRegisterWholeWild, this);
        }

        if (handoffPlayData.length > 0) {
            //await this._crossSystemSymbolAniService.multiHandoffBySameOwnerID(handoffPlayData, SymbolOwnerAgentID.SlotMachine);
            await this._crossSystemSymbolAniService.multiHandoffBySameOwnerID(handoffPlayData, SymbolOwnerAgentID.SlotMachine);
        }

    }

    /**
     * TIPS:
     * 1.在新一局開始前，清除所有正在播放的動畫(尚未交還動畫,只有停止播放)
     * 2.不會執行任何交還map的動作
     * 3.不呼叫會持續輪播最後一把的中線輪播(如果有的話)
     */
    public async cleanAllPlayingBeforeNewStart(): Promise<void> {

        this._abortPlaySequence = true;
        this._async.abortAll(SIGNAL_KEY.MULTIPLE_SEQUENCE);
        this.stopMultipleSequence();
        this.stopAndPauseWinAni();
        this.cancelAllDelays?.();
        this.safeResolve?.();
        this.processResetAni();
    }

    //--強制移除所有動畫(這邊是直接移除,不交還slotMachine,直接進pool)
    public stopAndRemoveAllAnis(): void {
        //--先放空好了,目前沒用到
    }


    //--停止垂直動畫(特殊角色需求)
    public stopShowVerticalAni(): void {
        return;
    }
    //--停止標準表演動畫(特殊角色需求)
    public stopShowAnimation(): void {
        return;
    }

    //--強制中斷連線中動畫(單純的指線/框的動畫)
    public stopAndHideConnectBoxAni(): void {

        for (const group of this._aryRunningNode) {
            if (group[DYN_NODE_PROPERTIES.GROUP_ID].includes(DEFAULT_GROUP_AWARD)) {
                const aniInterfaceComponent = AniSysTools.findAndGetIAniComponent(group) as IAnimationControl;
                aniInterfaceComponent.goBackToDefault();//--直接回到預設狀態
                group.active = false;
            }
        }
    }


    //=====================================<清除流程>=================================================

    //=====================================<標準表演流程>=================================================
    /**
     * 分數結算統一入口<runShowProcess>
     * step1: 沒有得分直接走playNoWinInThisRound流程
     * step2: 有得分走playWinInThisRound流程<播放全部>
     * step3: 檢查大獎條件checkBigWinCondition
     * step4: 播放得分動畫showWinScoreAni|播放大獎動畫showBigWinAni
     * step5: GUI下方顯示得分showScoreForBottomText(第一階段秀全部完成)
     * step5-2 checkGoThroughCondition是否跳過輪播
     * step6: 輪播檢查(開鎖)processBeforePlaySequence
     * step7: 播放輪播動畫playMultipleSequence
     */


    /**step1. 沒有得分直接走playNoWinInThisRound流程*/
    public async playNoWinInThisRound(lines?: IMatchInfoForRound[]): Promise<void> {

        const wildPlayData: IPlayAniData[] = this._wildMoveFXCtrl.getNoWinWildHandoffData();

        if (wildPlayData.length > 0) {
            /**
             * <<handoff拉出來的wild給slotMachine>>
             * TIPS:
             * 1.沒有得分的時候,如果有wild要交還給slotMachine
             * 2.因為在processWildNoMovement/processWildNoMovement的時候最後會將這些轉移的wild資料的owner
             * 重新寫回去slotMachine,等到有得分或是計算FG/RS次數的時候才會從slotMachine轉移到這裡
             * (不然第一次表演位移的時候,已經先將map資料轉移到這裡,這樣會導致handoff的時候自己要求資料轉移給自己會reject)
             * 3.所以這邊要先unregister
             */
            this._crossSystemSymbolAniService.multiUnRegister(wildPlayData);
            await this._crossSystemSymbolAniService.multiRegistryByID(wildPlayData, SymbolOwnerAgentID.ShowAniController);
            //--靠邀有位移後沒得分的情況..他在註冊回去再拉出來是拿沒有offset的資料1009
            await this._crossSystemSymbolAniService.multiHandoffBySameOwnerID(wildPlayData, SymbolOwnerAgentID.SlotMachine);
            this._wildMoveFXCtrl.reset();
        }


        const delayTime = this._gameStepDelayTimeList.get(cfg => cfg.result?.noWinWait);
        await this._async.waitSecondsRaw(delayTime);
    }


    private getScatterTargetNodes(): Node[] {
        const scatterNodes: Node[] = [];
        for (let i = 0; i < this._aryRunningNode.length; i++) {
            const node = this._aryRunningNode[i];
            if (node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId === SCATTER_LIST[0]) {
                scatterNodes.push(node);
            }
        }
        return scatterNodes;
    }
    /**step2. 有得分直接走全部播放流程*/
    //-winScoreData是這一局的全部,每一條線的在lines裡面
    public async playWinInThisRound(winScoreData: WinScoreData, lines?: IMatchInfoForRound[]): Promise<void> {

        //--秀全部
        //GameUtilsTools.debugLog(DEBUG_TITLE, 'playWinInThisRound', { winScoreData, lines, mapWinScoreGroupData: this._mapWinScoreGroupData, mapGroupAniData: this._mapGroupAniData });
        //const checkWinScoreData = winScoreData;
        //-關閉全部的亮度
        this._crossSystemSymbolAniService.processOwnerFunction({
            ownerId: SymbolOwnerAgentID.SlotMachine,
            name: Call_Function_Type.SET_ALL_REEL_BRIGHTNESS,
            args: [true]
        });
        this.checkScatterWithWin();
        //return;
        let showAllGroups = this.getAllGroups();
        const aniGroups = this.getAniNodeListByGroups(showAllGroups);
        const playWinSoundId = this.getPlayWinSoundId_New(winScoreData.totalOdd);
        //const playWinSoundId = this.getPlayWinSoundId(aniGroups);
        const Promises: Promise<any>[] = [];
        //const runId = Date.now().toString(36);
        //const totalPlayTime = (this._gameStepDelayTimeList.get(cfg => cfg.result?.totalShowWin) + 0.2).fixed();
        const totalPlayTime = this._gameStepDelayTimeList.get(cfg => cfg.result?.totalShowWin);
        const flowKey = BasicShowResultProcessKey.RunShowProcess;
        const signal = this._async.createAbortScope(flowKey);

        /*
        //--20260126流程取消
        const gameState = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);
        if (gameState === GameState.RE_SPINE && this._gotFGScatterCount > 0) {
            const scatterNodes = this.getScatterTargetNodes();
            for (const aniScNode of scatterNodes) {
                this.changeSpineColor(aniScNode, 225);
                this.changeScatterLayer(aniScNode, STAGE_ID.SC_SHOW_FX_CONTAINER);
            }
            aniGroups.push(...scatterNodes);
        }*/

        let aryProcess: { promise: Promise<void>, ani: IAnimationControl, target: Node }[] = [];
        for (const group of aniGroups) {
            const aniInterfaceComponent = AniSysTools.findAndGetIAniComponent(group) as IAnimationControl;
            const isWild = (group[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId !== WILD_LIST[0]) ? false : true;
            const isAwardBox = (group[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId === DEFAULT_GROUP_AWARD) ? true : false;
            //--在這個模式下都是第一次播放wild的connect動畫
            const aniState = (isWild) ? { aniState: WILD_PLAY_COUNT_NAME + 1 } : { aniState: AnimationStateType.Win };
            if (!isAwardBox) {

                const key = group[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId;
                //--change speedTime
                if (aniInterfaceComponent instanceof MultiSpineController) {
                    //aniInterfaceComponent?.changeSpeed(aniState, totalPlayTime);

                    aniInterfaceComponent?.changeSpeed(aniState, totalPlayTime);
                } else if (aniInterfaceComponent instanceof SpineController) {
                    aniInterfaceComponent?.changePlayInfo(aniState, totalPlayTime);
                } else if (aniInterfaceComponent instanceof AnimationController) {
                    aniInterfaceComponent?.changeSpeedWithAep(aniState, totalPlayTime);
                }

                const aniPromise = aniInterfaceComponent.playAniInPromise(aniState);
                //processMap.set(key, { promise: aniPromise, ani: aniInterfaceComponent, target: group });
                aryProcess.push({ promise: aniPromise, ani: aniInterfaceComponent, target: group });

                const p = GameUtilsTools.withTimeout(
                    //raced,
                    aniPromise,
                    //0.2,
                    totalPlayTime,//--防死亡timeout(也是這輪能用的總時間)
                    //1.1,
                    { node: group.name, playKey: aniState, info: key },
                    'playAniGroup',
                    true //--超時也resolve---這邊要想一下,NG/FG的差異
                )
                Promises.push(
                    p.promise
                );

            } else {
                group.active = true;
                aniInterfaceComponent.playAni({ aniState: AnimationStateType.Win });
            }

        }

        const emptyPromise = new Promise<void>((resolve) => {
        });
        /**
         * 1.NG和FG當中是不同的播放控制
         * NG當中按下停止鍵,會直接從0.3秒開始播到結束
         * FG當中按下停止鍵,會直接結束播放
         */
        //--因為tsconfig "downlevelIteration": true,變成false或是被刪除將不能使用map或是set的擴展運算式
        //const processDataList: { promise: Promise<void>, ani: IAnimationControl, target: Node }[] = [];
        //processMap.forEach(processData => processDataList.push(processData));

        const emptyPromiseCallbackWrapper = (value: any) => {
            const gameState = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);
            if (gameState == GameState.FREE_GAME) {
                //--FG模式-直接結束
                //for (const [, processData] of processMap.entries()) {
                for (let i = 0; i < aryProcess.length; i++) {
                    const processData = aryProcess[i];
                    let targetAni;
                    const group = processData.target;
                    if (group[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId == WILD_LIST[0] ||
                        group[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId == SCATTER_LIST[0]
                    ) {
                        targetAni = processData.ani as AnimationController;

                    } else {
                        targetAni = processData.ani as MultiSpineController;
                    }
                    targetAni.gotoPlayLastFrame();
                }

            } else {
                //--小於0.3秒就直接跳到0.3秒後開始跑,大於0.3秒就不管 

                const t = this.endTimeCount(BasicShowResultProcessKey.RunShowProcess);
                const interruptTime = this._gameStepDelayTimeList.get(cfg => cfg.result?.interruptTime);
                if (t < interruptTime) {
                    //for (const [, processData] of processMap.entries()) {
                    for (let i = 0; i < aryProcess.length; i++) {
                        const processData = aryProcess[i];
                        let targetAni;
                        const group = processData.target;
                        if (group[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId == WILD_LIST[0] ||
                            group[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId == SCATTER_LIST[0]
                        ) {
                            targetAni = processData.ani as AnimationController;
                        } else {
                            targetAni = processData.ani as MultiSpineController;
                        }
                        targetAni.changePlayTime(interruptTime);
                    }
                }

            }
        }
        //--塞空promise進去啦
        this._async.registerCancelablePromise(
            flowKey,
            emptyPromise,
            emptyPromiseCallbackWrapper,
            signal,
            flowKey
        )
        //AudioManager.instance.playSound(playWinSoundId, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
        this.playSoundAndVolumeDown(playWinSoundId);
        //const testStart = Date.now();
        const results = await Promise.all(Promises);
        //const testEnd = Date.now();
        //GameUtilsTools.debugLog('CHECK_TIME', `runShowProcess-TIME-SYM`, { testStart, testEnd, during: testEnd - testStart });
        this._async.removeAbortScope(flowKey);
        aryProcess = [];

        for (let i = 0; i < results.length; i++) {
            const r = results[i];
            if (r.status === 'timeout') {
                //GameUtilsTools.debugLog(DEBUG_TITLE, `playWinInThisRound_timeOut`, r);
            }
        }

    }


    /**step3. 檢查大獎條件*/
    protected checkBigWinCondition(winScoreData: WinScoreData): boolean {
        return winScoreData.totalOdd >= SPECIAL_WIN_THRESHOLD;
    };
    /**step4-1. 播放得分動畫*/
    public async showWinScoreAni(score: number, showBottomText: boolean = false): Promise<void> {

        this.playWinVoiceId();//--播放得分語音
        this._winScore.register();

        const gameState = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);
        const flowKey = BasicShowResultProcessKey.ShowWinScore;
        const scoreDelay = this._gameStepDelayTimeList.get(cfg => cfg.result?.showScoreAppear);
        const loopDelay = this._gameStepDelayTimeList.get(cfg => cfg.score?.loop);//--loop時間
        let cancelFlag = false;
        const s0 = this._async.createAbortScope(flowKey);


        const soCancel = async () => {
            if (gameState == GameState.FREE_GAME) {
                cancelFlag = true;
                await this._winScore.processAbortCancel();
            }

        }

        const result = this._async.withTimeout(
            new Promise(() => { }),//--放空的
            scoreDelay - 0.05,
            null,
            'showWinScoreAni_timeout',
            true,
            null,
            s0,
            flowKey,
            async (value) => {
                if (gameState == GameState.FREE_GAME) {
                    cancelFlag = true;
                    await this._winScore.processAbortCancel();
                }
            }
        )


        //const beforeWait_S = Date.now();
        //const inHandle = this._async.waitSecondsTracked(scoreDelay, flowKey, soCancel, true, s0, flowKey);
        //await inHandle.promise;
        await result.promise;
        //const beforeWait_E = Date.now();
        //GameUtilsTools.debugLog('CHECK_TIME', `runShowProcess-BEFORE_WAIT`, { beforeWait_during: beforeWait_E - beforeWait_S });
        //======testing=======
        //const test1=GameUtilsTools.testTime;
        //const testc1=GameUtilsTools.getTimeStamp();
        //GameUtilsTools.debugLog('SHOW_SCORE', `beforeShow`, { test1,testc1,during:testc1-test1 },'log');

        const otherProcess = (async () => {

            await this._winScore.showFinalScoreIn(score);

            super.showWinScoreAni(score, showBottomText);
            if (cancelFlag) return;
            const s2 = this._async.createAbortScope(flowKey);
            const loopPromise = this._async.waitSecondsTracked(loopDelay, flowKey, soCancel, true, s2, flowKey);

            await loopPromise.promise;

            if (cancelFlag) return;

            await this._winScore.showFinalScoreOut();


        })();

        const flag = GlobalAccessReader.getGlobalData(GameGlobalKeys.InterruptProcess);
        if (flag) {
            this._async.abortAll(flowKey);
        }

        return otherProcess;
    }

    public resetWinSore(): void {
        this._winScore.reset();
    }

    private async showWinScoreIn(score: number): Promise<void> {

        await this._winScore.showFinalScoreIn(score);
    }

    private async showWinScoreOut(): Promise<void> {
        await this._winScore.showFinalScoreOut();
    }

    //--20251006-新增功能,要在秀出結算面板後才會顯示
    public async showBigWinAfterFG(totalOdds: number, bet: number): Promise<void> {
        //--企劃表示:是整個全部的FG內的odds加總來計算
        const wd: WinScoreData = {
            baseOdds: 0,
            totalOdd: totalOdds,
            betValue: bet,
            multiplier: 0
        }
        const condition = this.checkBigWinCondition(wd);
        if (condition) {
            this.resetAniDuringWin();
            await this._jpShowCtrl.showJPWin(totalOdds, bet);
        }

    }


    //**step4-2. 播放大獎動畫*/
    public async showBigWinAni(winScoreData: WinScoreData, lines?: IMatchInfoForRound[]): Promise<void> {

        const gameState = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);
        if (gameState != GameState.FREE_GAME) {
            this.resetAniDuringWin();
            const odds = winScoreData.totalOdd;
            const betValue = winScoreData.betValue;
            await this._jpShowCtrl.showJPWin(odds, betValue);
        }
    }


    //--處理大贏動畫的流程
    protected override async processBigWin(): Promise<void> {

        const gameState = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);
        if (gameState != GameState.FREE_GAME) {
            await this.playWinInThisRound(this._scoreData, this._linesData);
            //--wait---
            const dt = this._gameStepDelayTimeList.get(cfg => cfg.Jackpot?.beforeWait);
            //const dt = 5;
            await this._async.waitSecondsRaw(dt);//--得分後接大獎
            await this.showBigWinAni(this._scoreData);
            this.showScoreForBottomText(this.calculateCurrentRoundOdds(this._scoreData));
        } else {
            //--20251031-FG大獎會變成整把FG結束才秀,如果遇到大獎機制,就先秀一般得分+框
            const playWinPromise = this.playWinInThisRound(this._scoreData, this._linesData);
            const showScorePromise = this.showWinScoreAni(this.getTotalScore(this._scoreData), true);
            //-讓兩個都完成
            await Promise.allSettled([playWinPromise, showScorePromise]);

        }
    }
    //**step4-3. 是否直接跳過輪播*/
    protected checkGoThroughCondition(): boolean {

        if (this._gameStateCondition.isDifferentStateNext && !this._gameStateCondition.isFinal) {
            //--狀態不同
            if (this._gameStateCondition.nextRoundState === GameState.FREE_GAME
                || this._gameStateCondition.nextRoundState === GameState.RE_SPINE) {
                return true;
            }
        } else if (!this._gameStateCondition.isDifferentStateNext) {
            if (this._gameStateCondition.nextRoundState === GameState.FREE_GAME ||
                this._gameStateCondition.nextRoundState === GameState.RE_SPINE) {
                return true;
            }

        }
        return false;
    };

    //**step5. 輪播前的準備工作(不輪播就直接resolve開鎖)*/
    /**
     * 1.this._mapGroupAniData(這個只有group/odd/lineType的資料描述) 
     * 2.this._mapWinScoreGroupData(這個有key(在盤面位置)跟groupId的對應/IAniData的資料描述)
     */
    public async processBeforePlaySequence(): Promise<void> {
        //---要處理FG的狀態下,就不進行輪播了,直接資料全部交還slotMachine

        //GameUtilsTools.debugLog(DEBUG_TITLE, 'processBeforePlaySequence', { resetNode, mapGroupAniData: this._mapGroupAniData, mapWinScoreGroupData: this._mapWinScoreGroupData });
        //--轉移控制權(多個物件)--改成直接reset狀態,控制權轉移在new round才會發生
        const waitTime = this._gameStepDelayTimeList.get(cfg => cfg.result?.beforeShowSequence);
        let isCancel = false;
        const cancelCallBack = () => {
            isCancel = true;
        }
        const waitPromise = this._async.waitSecondsTracked(waitTime, 'processBeforePlaySequence', cancelCallBack, true);
        await waitPromise.promise;

        if (!isCancel) {
            //-灰階
            this._crossSystemSymbolAniService.processOwnerFunction({
                ownerId: SymbolOwnerAgentID.SlotMachine,
                name: Call_Function_Type.SET_ALL_REEL_BRIGHTNESS,
                args: [true]
            });

            let resetNode: Node[] = this.getResetNodesDataByCondition();//--預設排除連線框
            await this.processResetAniCtrNode(resetNode, true);
        }


        //GameUtilsTools.debugLog(DEBUG_TITLE, 'check_after_handOff_allData_aryRunningNode', { aryRunningNode: this._aryRunningNode });
    }

    //--特殊需求變色用的(wild移動的時候,會變暗)
    /**
     * 特殊需求變色用的(wild移動的時候,會變暗)
     * 在wild移動的時候使用,因為scatter已經在每一輪rollEnd的時候被拔到這裡來,slotMachine不會有scatter的實體,所以沒辦法控制變色
     * 
     * @param symbolId 要變色的symbolId
     * @param isDark 變暗true/變亮false
     * @returns 
     */
    public changeAniCtrlColorBySymbolId(symbolId: number, isDark: boolean): Promise<void> {

        return new Promise<void>((resolve) => {
            const targetNodes: Node[] = this.getAniNodesBySameSymbolId(symbolId);
            const colorValue = isDark ? 120 : 255;
            this._async.setPendingResolveFor('changeColorBySymbolId', resolve);
            for (const node of targetNodes) {

                if (node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId == SCATTER_LIST[0]) {
                    node[DYN_NODE_PROPERTIES.ANIMATION_CTRL]?.goBackToDefault();
                }
                this.changeSpineColor(node, colorValue);
            }
            this._async.safeResolve('changeColorBySymbolId');
        });
    }




    //**step5-1. 還原動畫控制器狀態(不交還slotMachine)*/
    public async processResetAni(): Promise<void> {

        this.stopAndHideConnectBoxAni();//-關閉連線的框 
        const resetNode: Node[] = this.passAllAniNodeAndReset();//--這邊會排除wild+scatter(或是正在撥放累計次數動畫的wild/scatter)
        await this.processResetAniCtrNode(resetNode, false);
        //-開啟全部的亮度(關閉灰階)
        this._crossSystemSymbolAniService.processOwnerFunction({
            ownerId: SymbolOwnerAgentID.SlotMachine,
            name: Call_Function_Type.SET_ALL_REEL_BRIGHTNESS,
            args: [false]
        });
    }

    private processResetAniCtrNode(resetNode: Node[], isDark: boolean): Promise<void> {

        return new Promise<void>((resolve) => {
            this._async.setPendingResolveFor('resetAniCtrNode', resolve);
            const colorValue = isDark ? 120 : 255;
            for (const node of resetNode) {
                //--不在特殊模式下就進行一般的還原/變色
                node[DYN_NODE_PROPERTIES.ANIMATION_CTRL]?.goBackToDefault();

                if (node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO] != null) {

                    if (node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId == SCATTER_LIST[0]) {
                        //this.changeScatterLayer(node, !isDark);//--還原是isDark=false的狀態,所以要取反2
                        const layer = (isDark) ? STAGE_ID.NOT_ROUND_SCATTER_CONTAINER : STAGE_ID.SCATTER_SHOW_CONTAINER;
                        this.changeScatterLayer(node, layer);//--換下去
                    }
                    this.changeSpineColor(node, colorValue);
                }

            }
            this._async.safeResolve('resetAniCtrNode');
        });
    }

    private changeSpineColor(target: Node, colorValue: number): void {

        const baseComponent = target[DYN_NODE_PROPERTIES.ANIMATION_CTRL];
        if (baseComponent && baseComponent instanceof MultiSpineController) {
            let spineMap = baseComponent.getMultiSpineController();
            for (const controller of spineMap) {
                const sp = controller.spine;
                sp.color = color(colorValue, colorValue, colorValue, sp.color.a);
            }
        } else if (baseComponent && baseComponent instanceof AnimationController) {
            // 使用aniCtrl獨有的for AEP API
            const aniCtrl: AnimationController = baseComponent as AnimationController;
            if (aniCtrl && aniCtrl.isAEP_SPINE && aniCtrl.aepSpines.length > 0) {
                for (const sp of aniCtrl.aepSpines) {
                    sp.color = color(colorValue, colorValue, colorValue, sp.color.a);
                }
            }
        } else if (baseComponent && baseComponent instanceof SpineController) {
            (<SpineController>baseComponent).spine.color = color(colorValue, colorValue, colorValue, (<SpineController>baseComponent).spine.color.a);
        }
    }

    //**step6. 播放輪播動畫*/
    public override async playMultipleSequence(): Promise<void> {

        await super.playMultipleSequence();
        //============開始執行輪播=================================================
        this._abortPlaySequence = false;
        this._async.reset();
        const runId = Date.now().toString(36);
        let playIndex: number = 0;//--index就是key值
        let singleLineScore: number = 0;
        const totalPlayTime = this._gameStepDelayTimeList.get(cfg => cfg.result?.totalShowWin);

        //--20260126-
        let signal = this._async.getAbortController(SIGNAL_KEY.MULTIPLE_SEQUENCE)?.signal;
        if (!signal) {
            signal = this._async.createAbortScope(SIGNAL_KEY.MULTIPLE_SEQUENCE, (key) => {
                //console.log(`[playMultipleSequence] ${key} 被中止`);
            });
        }



        while (this._mapGroupAniData.size > 0) {
            //--排除wild-
            let aniGroups: Node[] = this.getAniNodeListByGroups([playIndex]);
            const isWildExist = this.checkWildIndGroupExist(aniGroups);
            let wildPlayState = '';
            if (isWildExist) {
                wildPlayState = this.getRoundWildPlayCountIndex(playIndex);
            }
            const Promises: Promise<any>[] = [];
            for (const group of aniGroups) {
                const aniInterfaceComponent = group[DYN_NODE_PROPERTIES.ANIMATION_CTRL] as IAnimationControl;
                group.active = true;
                if (group[DYN_NODE_PROPERTIES.OTHER] == SP_SHOWING) continue;
                this.changeSpineColor(group, 255);
                if (group[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId == SCATTER_LIST[0]) {
                    this.changeScatterLayer(group, STAGE_ID.SYMBOL_SHOW_CONTAINER);//--交換scatter位置到原本的位置1
                }
                const isAwardBox = (group[DYN_NODE_PROPERTIES.GROUP_ID].includes(DEFAULT_GROUP_AWARD)) ? true : false;
                const aniState = (group[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId !== WILD_LIST[0]) ?
                    { aniState: AnimationStateType.Win } :
                    { aniState: wildPlayState };
                //const aniState = (wildPlayState != '') ? { aniState: wildPlayState } : { aniState: AnimationStateType.Win };
                //---實驗功能(你他媽的我就不信這樣還會pending爆開)----

                if (!isAwardBox) {

                    const key = `${runId}:${playIndex}:${group.uuid}`;
                    const deffer = this._async.createDeferredFor(key);
                    const playAniPromise = aniInterfaceComponent.playAniInPromise(aniState)
                        .then(() => this._async.safeResolve(key))
                        .catch((err) => { this._async.safeResolve(key); throw err; });
                    const raced = Promise.race([deffer.promise, playAniPromise]);

                    const p = this._async.withTimeout(
                        raced,
                        //0.2,
                        totalPlayTime,
                        //1.1,
                        { playIndex, node: group.name, prefab: group[DYN_NODE_PROPERTIES.PREFAB_ID] },
                        'playAniGroup',
                        true //--超時也resolve
                    )
                    Promises.push(
                        p.promise
                    );
                } else {
                    aniInterfaceComponent.playAni({ aniState: AnimationStateType.Win });
                }
            }
            //-計算單線得分
            singleLineScore = this._mapGroupAniData.get(playIndex).odd;
            singleLineScore = this.getRoundSingleLineScore(singleLineScore);

            this.showWinScoreIn(singleLineScore);
            /*
            GameUtilsTools.debugLog(DEBUG_TITLE, 'playMultipleSequence', {
                playIndex,
                wildPlayState, singleLineScore,
                mapGroupAniData: this._mapGroupAniData,
                betValue: this._cloneScoreData.betValue
            });*/
            try {
                //--這邊做wild
                //await Promise.allSettled([Promises,showScorePromise]);
                await Promise.all(Promises);
            } catch (e) {
                //--ZZZZ
            }
            //--加上外部中斷要切掉流程
            if (this._abortPlaySequence) break;//--外部中斷時,直接切斷流程

            playIndex++;
            if (playIndex >= this._mapGroupAniData.size) {
                playIndex = 0;
            }
            //await this._async.waitSecondsCancelable(0.3);--可取消會回呼
            let eachWinTime = this._gameStepDelayTimeList.get(cfg => cfg.result?.eachWin);
            let finishRound: boolean = false;
            if (playIndex == 0) {
                //--結束整輪的循環,重新開啟一輪(2s)
                finishRound = true;
                eachWinTime = this._gameStepDelayTimeList.get(cfg => cfg.result?.beforeShowSequence);
            }
            if (finishRound) {

                this._winScore.forceGoDefaultAndReset();
                this.stopAndHideConnectBoxAni();
                let resetNode: Node[] = this.getResetNodesDataByCondition();//--剔除連線框
                await this.processResetAniCtrNode(resetNode, false);
                //-開啟全部的亮度(關閉灰階)
                this._crossSystemSymbolAniService.processOwnerFunction({
                    ownerId: SymbolOwnerAgentID.SlotMachine,
                    name: Call_Function_Type.SET_ALL_REEL_BRIGHTNESS,
                    args: [false]
                });
                //await this._async.waitSecondsRaw(eachWinTime);
                await this._async.waitSecondsCancelable(eachWinTime, signal, SIGNAL_KEY.MULTIPLE_SEQUENCE);
                if (this._abortPlaySequence) return;
                //console.log("******finishRound reset done*******", this._abortPlaySequence);
                this._abortPlaySequence = false;
                this._crossSystemSymbolAniService.processOwnerFunction({
                    ownerId: SymbolOwnerAgentID.SlotMachine,
                    name: Call_Function_Type.SET_ALL_REEL_BRIGHTNESS,
                    args: [true]
                });
                await this.processResetAniCtrNode(resetNode, true);

            } else {

                //await this._async.waitSecondsRaw(eachWinTime);//-直接中斷
                await this._async.waitSecondsCancelable(eachWinTime, signal, SIGNAL_KEY.MULTIPLE_SEQUENCE);
                if (this._abortPlaySequence) return;
                //console.log("******finishRound reset DONE*******", this._abortPlaySequence);
                this.showWinScoreOut();
                this.stopAndHideConnectBoxAni();
                this._abortPlaySequence = false;
                let resetNode: Node[] = this.getResetNodesDataByCondition();//--剔除連線框
                await this.processResetAniCtrNode(resetNode, true);//--反黑
            }


        }
        this._async.safeResolve();
    }


    //--在全秀之後要走的分支
    public playOtherWinShowAni(): void {

    }
    //--播放wild動畫
    public playWildAni(): void {

    }
    //--播放bonus動畫
    public playBonusAni(): void {

    }

    //--播放垂直的動畫
    public showAndWaitForVerticalAni(totalScore: number): Promise<void> {
        return Promise.resolve();
    }

    public playShowAnimation(): void {
        return;
    }


    //=====================================<標準表演流程>=================================================



    //==================解析winScoreData===========
    /**
     * <<<TODO--LOCK的資料每局要清掉group,再產生新的得分資料時,先檢查是否存在
     * 如果存在把group塞進去>>>
     * slotMachine裡面的gameIcon在上下各有一個的預備格,所以實際索引上要+1
     * 在這裡處理每一行的得分資料
     * PS-在鎖定的狀態下map裡面是不會有wild的資料, groupId要在這邊先塞起來!!!!!
     * reBuildIPlayDataFromKeyString--->這個可以把key塞回IPlayAniData
     * @param winLineData IMatchInfoForRound 中線資料
     * @returns 
     */
    protected async processWinScoreData(winLineData: IMatchInfoForRound[]): Promise<void> {

        //GameUtilsTools.debugLog(DEBUG_TITLE, 'processWinScoreData', { winLineData });
        let aniData: IPlayAniData;
        this._mapWinScoreGroupData.clear();
        this._mapGroupAniData.clear();
        const handOffObjs: IPlayAniData[] = [];

        for (let i: number = 0; i < winLineData.length; i++) {
            const machPos: IMachPosInfo[] = winLineData[i].matchPos;
            this._mapGroupAniData.set(i, { odd: winLineData[i].odd, lineType: winLineData[i].winLineID } as IGroupAniData);
            for (let j: number = 0; j < machPos.length; j++) {
                const symbolData = machPos[j];
                const key = `${symbolData.reelIndex}:${symbolData.iconIndex + 1}:${symbolData.realSymbolID}`;
                // 檢查是否已經處理過這個位置的資料
                if (this._mapWinScoreGroupData.has(key)) {
                    this._mapWinScoreGroupData.get(key).group.push(i); // 如果已經處理過，則將當前的groupId加入到已存在的資料中
                    continue; // 已經處理過，跳過
                } else {
                    aniData =
                    {
                        reelIndex: symbolData.reelIndex,
                        iconIndex: symbolData.iconIndex + 1, // 要+1(算分工具沒有上下兩個準備位置)
                        symbolId: symbolData.realSymbolID,
                        aniId: '',
                        tokenId: '', // 屬性要寫好(用IPlayAniData)
                        wPos: null, // 屬性要寫好(用IPlayAniData)
                        containerNodeId: STAGE_ID.SYMBOL_SHOW_CONTAINER,
                        otherData: key
                    }

                    handOffObjs.push(aniData);
                    this._mapWinScoreGroupData.set(key, { IAniData: aniData, group: [i] });
                }


            }

        }
        //--這邊在挑過一次資料
        let cutHandoffData = this.cutExistWildAndPushGroup(handOffObjs);
        const goBackNoWinWild = this.findWildWithoutWin(cutHandoffData);
        /*
        GameUtilsTools.debugLog(DEBUG_TITLE, 'processWinScoreData_before_handOff', {
            aryRunningNode: this._aryRunningNode,
            mapWinScoreGroupData: this._mapWinScoreGroupData,
            mapGroupAniData: this._mapGroupAniData,
            handOffObjs: handOffObjs,
            cutHandoffData: cutHandoffData,
            goBackNoWinWild: goBackNoWinWild
        });*/
        //---計算FG內的odds
        //this.calculateBigWinAfterFg();
        //-交回控制權(多個物件)
        await this._crossSystemSymbolAniService.multiHandoffBySameOwner(cutHandoffData, this);
        //--將沒有中獎的wild還回slotMachine
        if (goBackNoWinWild.length > 0) {
            /**
             * 在表演位移/不位移效果後,會將wild重寫回map,將owner變成slotMachine.
             * 有得獎的狀態下,才會handoff給ShowAniController.
             * 沒有中獎的wild的owner還在slotmachine身上,
             * 在handoff時,因為owner一樣,所以不會做任何動作
             * 所以這邊要再把要轉移回去的wild改變他的owner為ShowAniController
             */
            //this._crossSystemSymbolAniService.debugCheckAllOwners();
            //console.log();
            this._crossSystemSymbolAniService.multiUnRegister(goBackNoWinWild);
            await this._crossSystemSymbolAniService.multiRegistryByID(goBackNoWinWild, SymbolOwnerAgentID.ShowAniController);
            //this._crossSystemSymbolAniService.debugCheckAllOwners();
            //console.log();
            await this._crossSystemSymbolAniService.multiHandoffBySameOwnerID(goBackNoWinWild, SymbolOwnerAgentID.SlotMachine);
        }

    }

    //============================== 其他需要用到的表演=========================
    public async triggerWildNoMoveAnimation(value: { movement: IWildMovementDataNew, iplayData: IPlayAniData, reelWpos: Vec3 }): Promise<void> {

        const movement = value.movement;
        const aniData = value.iplayData;
        const reelIndex = aniData.reelIndex;
        const wildNode = this._moveWildDataMap.get(aniData.reelIndex).wildNode;
        if (!wildNode) return;
        const move: IWildMoveData = {
            reelFXWpos: value.reelWpos,
            WildMovementData: movement,
            wildNode: wildNode
        }
        this._wildMoveFXCtrl.setWildMoveData(move);
        //await this.reSetWildLayerAndSort();
        await this._wildMoveFXCtrl.triggerWildNoMoveAnimation(reelIndex);

    }

    public async triggerWildMoveAnimation(value: { movement: IWildMovementDataNew, iplayData: IPlayAniData, reelWpos: Vec3 }): Promise<void> {

        const movement = value.movement;
        const aniData = value.iplayData;
        const reelIndex = aniData.reelIndex;
        const wildNode = this._moveWildDataMap.get(aniData.reelIndex).wildNode;
        if (!wildNode) return;
        this.reSetScatterDuringWildMove();
        const move: IWildMoveData = {
            reelFXWpos: value.reelWpos,
            WildMovementData: movement,
            wildNode: wildNode
        }
        this._wildMoveFXCtrl.setWildMoveData(move);
        //await this.reSetWildLayerAndSort();
        await this._wildMoveFXCtrl.triggerWildMoveAnimation(reelIndex);

    }

    private reSetScatterDuringWildMove(): void {

        const scatterContainer = this._aniNodeStageContainerMap[STAGE_ID.NOT_ROUND_SCATTER_CONTAINER];
        for (const node of this._aryRunningNode) {
            if (node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId === SCATTER_LIST[0]) {
                node.parent = scatterContainer;
            }
        }

    }

    /**
     * 在大獎表演當下,要把scatter的動畫還原成default狀態
     */
    private resetAniDuringWin(): void {

        for (const node of this._aryRunningNode) {
            node[DYN_NODE_PROPERTIES.ANIMATION_CTRL]?.goBackToDefault();
        }
    }

    //--20260120-檢查場面上有沒有scatter/wild(進入FG前需要用的)
    /**
     * 20260130-檢查場面上有沒有scatter/wild(NG-to->FG前需要用的)
     * @param reels 進入FG前最後一把的盤面有獲取FG的軸
     * @returns 
     */
    public checkScAndWildExistInRunningNode(reels: number[]): boolean {

        for (const node of this._aryRunningNode) {
            const symbolReelIndex = node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex;
            if (!reels.includes(symbolReelIndex)) continue;
            if (node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId === SCATTER_LIST[0] ||
                node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId === WILD_LIST[0]) {
                return true;
            }
        }
        return false;
    }
    /**
     * 20260120-調整需求.
     * 在場面上有scatter/wild且在進入FG前要秀FG的進場動畫
     */
    public async showScatterAndWildWinAniBeforeFG(reels: number[]): Promise<void> {

        /*
        if (this._previousHasWin) {
            const dt = this._gameStepDelayTimeList.get(cfg => cfg.fg?.beforeWait);
            await this._async.waitSecondsRaw(dt);//--等一等
        }*/

        //const dt = this._gameStepDelayTimeList.get(cfg => cfg.fg?.beforeWait);
        //await this._async.waitSecondsRaw(dt);//--等一等
        const reelSet = new Set(reels);
        const tasks: Promise<void>[] = [];
        for (const node of this._aryRunningNode) {

            const symbolReelIndex = node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex;
            //if (!reels.includes(symbolReelIndex)) continue;
            if (!reelSet.has(symbolReelIndex)) continue;

            if (node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId === SCATTER_LIST[0] ||
                node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId === WILD_LIST[0]
            ) {
                const symbolId = node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId;
                const aniType = (symbolId === WILD_LIST[0]) ? 'Connect_1' : AnimationStateType.Win;
                node[DYN_NODE_PROPERTIES.ANIMATION_CTRL]?.goBackToDefault();
                this.changeSpineColor(node, 225);
                if (symbolId === SCATTER_LIST[0]) {
                    this.changeScatterLayer(node, STAGE_ID.SC_SHOW_FX_CONTAINER);
                }

                tasks.push(new Promise<void>(async (resolve) => {
                    const ani = node[DYN_NODE_PROPERTIES.ANIMATION_CTRL] as AnimationController;
                    if (symbolId === SCATTER_LIST[0]) {
                        this.changeScatterLayer(node, STAGE_ID.SC_SHOW_FX_CONTAINER);
                    }
                    await ani.playAniInPromise({ aniState: aniType });
                    resolve();
                }));

            }
        }
        AudioManager.instance.playSound(SoundList.Sc_get, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
        await Promise.all(tasks);
    }

    /**
     * Scatter因為一出現就直接被拔出slotMachine
     * 所以在一開始秀<全部中獎>的時候關閉盤面亮度會漏掉scatter
     */
    private checkScatterWithWin(): void {

        for (const node of this._aryRunningNode) {
            if (node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId === SCATTER_LIST[0]) {
                if (node[DYN_NODE_PROPERTIES.GROUP_ID].length <= 1) {
                    //--沒有中獎..反灰
                    node[DYN_NODE_PROPERTIES.ANIMATION_CTRL]?.goBackToDefault();
                    this.changeSpineColor(node, 120);
                    this.changeScatterLayer(node, STAGE_ID.NOT_ROUND_SCATTER_CONTAINER);//-換下去
                    //node.parent = notWinRoundSpNodeContainer;
                }
            }
        }
    }

    //-改變scatter的層級
    //private changeScatterLayer(targetNode: Node, isWin: boolean): void {
    private changeScatterLayer(targetNode: Node, layerID: STAGE_ID): void {

        const targetContainer = this._aniNodeStageContainerMap[layerID];
        targetNode.parent = targetContainer;
    }


    public async showGetReSpinEffect(value: {
        info: IPlayAniData[],
        endPos: Vec3,
        index: number[]
    }): Promise<void> {

        //---PS-ANI_CTRL_EVT-0.33s
        //const groups = new Map<number, Node[]>();
        const groups = new Map<number, { n: Node, wpos: Vec3 }[]>();

        for (let item of value.info) {

            const aniNode = this.getNodeByReelIndexAndIconIndex(item.reelIndex, item.iconIndex);
            aniNode[DYN_NODE_PROPERTIES.OTHER] = SP_SHOWING;//--註記物件現在為特殊播放模式
            const arr = groups.get(item.reelIndex) ?? [];
            arr.push({ n: aniNode, wpos: item.wPos });
            groups.set(item.reelIndex, arr);
        }
        const particleTime = this._gameStepDelayTimeList.get(cfg => cfg.other?.particleTotalDuration);

        const tasks: Promise<void>[] = [];
        let order = 0; // 只用來做可選的錯位延遲
        for (const reel of value.index) {
            const nodes = groups.get(reel);//-配對選取(index索引要與group相符合)
            if (!nodes) continue;
            for (const aniInfo of nodes) {

                const sequence = order++;
                const aniNode = aniInfo.n;
                aniNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL].goBackToDefault();
                const wPos = aniInfo.wpos;
                // await this._async.waitSecondsRaw(0.008 * sequence);//--for delay
                const ani = aniNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL] as AnimationController;
                //--20260304棄用-因需求改變
                //const targetContainer = this._aniNodeStageContainerMap[STAGE_ID.WILD_SHOW_FX_CONTAINER];
                //aniNode.parent = targetContainer;
                //this.sortForWildNodes(STAGE_ID.WILD_SHOW_FX_CONTAINER, 'showGetReSpinEffect_before');
                let resolveFunc: (() => void) | null = null;
                const p = new Promise<void>((resolve) => {

                    /**
                     * <playAniWithFrameEvtCallBack>
                     * 1.本身不是promise它只會呼叫你注入的function
                     * 2.要使用promise除了使用其他的API不然就是自己包一層
                     * 3.原始設計就是要做callback的,已經額外提供complete的callback我不想再新增突破下限的功能了
                     */
                    resolveFunc = resolve;
                    ani.playAniWithFrameEvtCallBack(
                        async () => {
                            //--這邊拿到的位置一定是在頭頂
                            AudioManager.instance.playSound(SoundList.wild_in, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
                            await this._countTimesFXController.playCountTimesFX([{ startPos: wPos, endPos: value.endPos }], particleTime);
                            aniNode[DYN_NODE_PROPERTIES.OTHER] = null;//--註記物件現在為特殊播放模式

                            if (resolveFunc) {
                                resolveFunc();
                                resolveFunc = null;
                            }
                        },
                        async () => {
                            //-有回來沒反應..
                            //GameUtilsTools.debugLog(DEBUG_TITLE, 'showGetReSpinEffect_comeBack', { aniNode });
                            aniNode[DYN_NODE_PROPERTIES.OTHER] = null;//--註記物件現在為特殊播放模式
                            ani.playAni(AnimationStateType.Idle);
                        },
                        false,
                        { aniState: WILD_COUNT_ANI_STATE_NAME }
                    );
                })
                const cancel = (value) => {

                    ani.playAni(AnimationStateType.Idle);
                    aniNode[DYN_NODE_PROPERTIES.OTHER] = null;
                    if (resolveFunc) {
                        resolveFunc();
                        resolveFunc = null;
                    }

                }

                const single = this._async.createAbortScope(SIGNAL_KEY.GET_RS_EFFECT);
                this._async.registerCancelablePromise(
                    SIGNAL_KEY.GET_RS_EFFECT + '_' + sequence,
                    p,
                    cancel,
                    single,
                    SIGNAL_KEY.GET_RS_EFFECT
                );

                tasks.push(p);
                const flag = GlobalAccessReader.getGlobalData(GameGlobalKeys.InterruptProcess);
                if (flag) {
                    this._async.abortAll(SIGNAL_KEY.GET_RS_EFFECT);
                }

            }
        }
        await Promise.all(tasks);
        //await this.reSetWildLayerAndSort();

    }

    public async showGetScatterFGEffect(value: {
        info: IPlayAniData[],
        //startPos: Vec3[],//--這邊算就好了 
        endPos: Vec3,
        index: number[]
    }): Promise<void> {
        //--這裡有可能scatter沒有中獎不會在runningPool裡面--直接拔出來
        const groups = new Map<number, Node[]>();
        let targetContainer = this._aniNodeStageContainerMap[STAGE_ID.SYMBOL_SHOW_CONTAINER];
        let uiTransform = targetContainer.getComponent(UITransform);

        for (let item of value.info) {
            const aniNode = this.getNodeByReelIndexAndIconIndex(item.reelIndex, item.iconIndex);
            if (aniNode) {
                aniNode[DYN_NODE_PROPERTIES.OTHER] = SP_SHOWING;//--註記物件現在為特殊播放模式
                this.changeSpineColor(aniNode, 255);
                this.changeScatterLayer(aniNode, STAGE_ID.SC_SHOW_FX_CONTAINER);//-3
                const arr = groups.get(item.reelIndex) ?? [];
                arr.push(aniNode);
                groups.set(item.reelIndex, arr);
            }
            //GameUtilsTools.debugLog(DEBUG_TITLE, 'check_scatter_aniNode', { aniNode, item, runningNodes: this._aryRunningNode });
        }
        const particleTime = this._gameStepDelayTimeList.get(cfg => cfg.other?.particleTotalDuration);
        const tasks: Promise<void>[] = [];
        let order = 0; // 只用來做可選的錯位延遲
        for (const reel of value.index) {
            const nodes = groups.get(reel);//-配對選取(index索引要與group相符合)
            if (!nodes) continue;

            for (const aniNode of nodes) {

                const sequence = order++;
                const ani = aniNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL] as AnimationController;
                let resolveFunc: (() => void) | null = null;

                const p = new Promise<void>((resolve) => {

                    resolveFunc = resolve;
                    ani.playAniWithFrameEvtCallBack(
                        async () => {

                            let localPos = aniNode.getPosition().clone();
                            const startPos = uiTransform.convertToWorldSpaceAR(localPos);
                            await this._countTimesFXController.playCountTimesFX([{ startPos, endPos: value.endPos }], particleTime);
                            if (resolveFunc) {
                                resolveFunc();
                                resolveFunc = null;
                            }
                        },
                        async () => {
                            //-有回來沒反應..
                            //this.changeScatterLayer(aniNode, STAGE_ID.SYMBOL_SHOW_CONTAINER);
                            ani.goBackToDefault();
                            //await this._async.waitSecondsRaw(0.2);
                            //ani.playAni({ aniState: AnimationStateType.Idle });
                        },
                        false,
                        { aniState: SCATTER_FG_ANI_STATE_NAME }
                    );
                })

                const cancel = (value) => {
                    ani.playAni(AnimationStateType.Idle);
                    //this.changeScatterLayer(aniNode, STAGE_ID.SYMBOL_SHOW_CONTAINER);
                    //aniNode[DYN_NODE_PROPERTIES.OTHER] = null;
                    if (resolveFunc) {
                        resolveFunc();
                        resolveFunc = null;
                    }

                }

                const single = this._async.createAbortScope(SIGNAL_KEY.GET_FG_EFFECT);
                this._async.registerCancelablePromise(
                    SIGNAL_KEY.GET_FG_EFFECT + '_' + sequence,
                    p,
                    cancel,
                    single,
                    SIGNAL_KEY.GET_FG_EFFECT
                );

                tasks.push(p);

                const flag = GlobalAccessReader.getGlobalData(GameGlobalKeys.InterruptProcess);
                if (flag) {
                    this._async.abortAll(SIGNAL_KEY.GET_FG_EFFECT);
                }
            }
        }

        await Promise.all(tasks);

        /*
        await ani.playAniWithCallBackParameter<[]>(
            () => [],
            false,
            { aniState: SCATTER_FG_ANI_STATE_NAME },
            []
        );*/
        //--目前播放會產生
        /**
         * [.WebGL-0x138410968000] GL_INVALID_OPERATION: glDrawElements: Insufficient buffer size.
         * VBO大小不匹配
         */

    }

    /**
     * 在runningNode當中,查找吻合特定軸與uniqueSymbolId的node
     * @param reelId 
     * @param uniqueSymbolId 
     */
    private getUniqueSymbolNodeInReel(reelId: number, uniqueSymbolId: number): Node | null {

        for (const node of this._aryRunningNode) {
            if (node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex === reelId &&
                node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId === uniqueSymbolId) {
                return node;
            }
        }
        return null;
    }


    private getNodeByReelIndexAndIconIndex(reelIndex: number, iconIndex: number): Node {

        return this._aryRunningNode.find(n =>
            n[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex === reelIndex &&
            n[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconIndex === iconIndex
        );
    }

    //--根據不同的獲獎總賠率,播放不同的得分語音
    private playWinVoiceId(): void {

        const roundOdds = this._scoreData.totalOdd;
        let lowVoiceList: SoundList[] = [];
        let conditionNumber = 0;
        if (roundOdds >= 5 && roundOdds <= 10) {
            conditionNumber = 20;//--20%的機率
            lowVoiceList = [SoundList.Score_01, SoundList.Score_03, SoundList.Score_04, SoundList.Score_05];
        } else if (roundOdds >= 11 && roundOdds <= 24) {
            conditionNumber = 30;//--30%的機率
            lowVoiceList = [SoundList.Score_06, SoundList.Score_07, SoundList.Score_08, SoundList.Score_09];
        }

        if (conditionNumber > 0) {

            const checkFlag = GameUtilsTools.createAndShuffleProbabilityPool(conditionNumber);
            if (checkFlag) {
                const randomIndex = GameUtilsTools.getRangeRandomInt(0, lowVoiceList.length - 1);
                AudioManager.instance.playSound(lowVoiceList[randomIndex], SOUND_TYPE.ONE_SHOT, AudioSourceList.BasicAS);
            }
        }
    }


    private async playSoundAndVolumeDown(playWinSoundId: SoundList): Promise<void> {


        AudioManager.instance.playSound(playWinSoundId, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);

        if (playWinSoundId === SoundList.symWin3) {
            //-_dummyAudioClip
            this._bgmCtrl.setMusicVolume(95);//--降低音量
            const runDuration = this._dummyAudioClip.getDuration?.() ?? 0;
            await GameUtilsTools.DeferByTweenPromise(runDuration);//--等音效進去
            this._bgmCtrl.setMusicVolume(100);//--還原音量

            //--不行,沒辦法知道是否靜音
            /*
            let fuckNode = new Node('dummyNode');
            let audioFuckSource = fuckNode.addComponent(AudioSource);
            audioFuckSource.clip = this._dummyAudioClip;
            audioFuckSource.volume = 1;
            fuckNode.once(AudioSource.EventType.ENDED, () => {
                //-this._bgmCtrl
                fuckNode = null;
                this._bgmCtrl.setMusicVolume(100);//--還原音量
            })*/
        }

    }
    //--20260209-NEW-
    private getPlayWinSoundId_New(odds: number): SoundList {

        let returnId: SoundList;
        const lowOdds = 9;
        const middleOdds = 19;
        //const highOdds = 20;
        if (odds <= lowOdds) {
            returnId = SoundList.symWin1;
        } else if (odds <= middleOdds) {
            returnId = SoundList.symWin2;
        } else {
            //--odds >= highOdds
            returnId = SoundList.symWin3;
        }
        return returnId;
    }

    //--擷取篩選條件用的soundId
    private getPlayWinSoundId(aniGroups: Node[]): SoundList {

        let hasHigh: boolean = false;
        let hasMiddle: boolean = false;
        let hasLow: boolean = false;

        for (const group of aniGroups) {
            const symbolId = group[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO]?.symbolId;
            if (symbolId == undefined || symbolId === null) continue;//--因為symbol有一個是0

            if (HIGH_ODDS_SYMBOL_LIST.includes(symbolId)) {
                hasHigh = true;
            }

            if (MIDDLE_ODDS_SYMBOL_LIST.includes(symbolId)) {
                hasMiddle = true;
            }

            if (LOW_ODDS_SYMBOL_LIST.includes(symbolId)) {
                hasLow = true;
            }

        }
        if (hasHigh) {
            return SoundList.symWin3;
        } else if (hasMiddle) {
            return SoundList.symWin2;
        } else if (hasLow) {
            return SoundList.symWin1;
        }

    }

    private async createAndPushInPool(IAniData: IPlayAniData): Promise<void | null> {
        // 這裡可以實作創建和推入池的邏輯
        IAniData.wPos = await this.createOutSideConnectBox(IAniData);
        if (!IAniData.wPos) {
            return Promise.resolve(null);
        }
        let aniNode = this._crossSystemSymbolAniService.createAndRegister(IAniData, this);
        if (aniNode) {
            await this.addAnimationData(aniNode, IAniData);
            aniNode[DYN_NODE_PROPERTIES.GROUP_ID].push(DEFAULT_GROUP_AWARD);
            let aniInterfaceComponent = AniSysTools.findAndGetIAniComponent(aniNode) as IAnimationControl;
            aniInterfaceComponent.playAni(AnimationStateType.Win);
        }
    }

    //--產生外部連線框(這裡要進行重複剃除)
    private async createOutSideConnectBox(IAniData: IPlayAniData): Promise<Vec3> {

        const existCheckingData: { flag: boolean, tokenId: string } = this.checkIsExistAniNode(IAniData);
        if (existCheckingData.flag) {
            //--已有
            this.setExistAniNode(IAniData);
            return Promise.resolve(null);
        } else {
            //--產新的
            //---或是直接拿一個不存在的id讓slotMachine回傳worldPosition
            let wPos = await NotifyCation.getInstance().requestData<Vec3>(
                SlotResponseSubject.RES_GAME_SLOT_SUBJECT,
                SlotRequestEvent.GET_WORLD_POSITION,
                SlotNotifySubject.GAME_SLOT_SUBJECT,
                { reelIndex: IAniData.reelIndex, iconIndex: IAniData.iconIndex } // 直接傳 payload
            );
            return Promise.resolve(wPos);
        }
    }

    //--該局結束回收awardBox
    private processDataBeforeRemoveByAwardBox(): void {

        const awardBox: Node[] = this.getAniWithRemoveFromPoolByGroupId(DEFAULT_GROUP_AWARD);
        const container = this._aniNodeStageContainerMap[STAGE_ID.AWARD_BOX_SHOW_CONTAINER];
        for (let aniNode of awardBox) {
            const prefabId = aniNode[DYN_NODE_PROPERTIES.PREFAB_ID];
            aniNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL].goBackToDefault();
            this.removeSingleNodeData(aniNode);
            container.removeChild(aniNode);
            //GameUtilsTools.debugLog(DEBUG_TITLE, 'processDataBeforeRemoveByAwardBox', { size: container.children.length });
            //--回收到物件池
            AnimationControllersPoolManager.getInstance().pushInstanceToPool(prefabId, aniNode);
        }

    }
    //--向mediator/handoff取消註冊
    private unregisterHandOffByAwardBox(targetGroups: Node[]): void {

        for (let item of targetGroups) {
            const registerData: IReelInfo =
            {
                reelIndex: item[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex,
                iconIndex: item[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconIndex,
                symbolId: item[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId,
            }
            this._crossSystemSymbolAniService.unRegisterData(registerData);
        }
    }

    public override async runTest(value?: any): Promise<void> {
        /*
        let testData = [1, 2, 3, 4];//--外面產出的結果牌組
        let aniData: IPlayAniData;
        aniData = this._crossSystemSymbolAniService.buildPlayData(
            {
                symbolId: testData[0],
                reelIndex: 0,
                iconIndex: 0 + 1,
                groupId: 0
    
            });
        aniData.containerNodeId = STAGE_ID.SYMBOL_SHOW_CONTAINER;
        aniData.groupId = 0;
        this._crossSystemSymbolAniService.handoff(aniData, this);
        */

    }

    public async runTest2(value?: any): Promise<void> {
        // 在這裡執行測試邏輯


    }

    /**測試模式區域 */
    /*
    public override async runTest1(value?: any): Promise<void> {
        // 在這裡執行測試邏輯
        let testData = [0, 1, 2, 3];//--外面產出的結果牌組
        let aniData: IPlayAniData;
        aniData = this._crossSystemSymbolAniService.buildPlayData(
            {
                symbolId: testData[0],
                reelIndex: 0,
                iconIndex: 0 + 1,
                groupId: 0

            });
        aniData.containerNodeId = STAGE_ID.SYMBOL_SHOW_CONTAINER;
        aniData.groupId = 0;
        this._crossSystemSymbolAniService.handoff(aniData, this);

        const clone = <IPlayAniData>GameUtilsTools.deepClone(aniData);
        clone.symbolId = 99;
        clone.groupId = 99;
        clone.containerNodeId = STAGE_ID.AWARD_BOX_SHOW_CONTAINER;
        clone.wPos = await this.createOutSideConnectBox(clone);
        //-return await this._aniCrossServiceProxyFactory.createAndRegister(reelData);
        this._crossSystemSymbolAniService.createAndRegister(clone, this).then(async (aniNode: Node | null) => {
            // 在這裡處理aniNode

            let awardNode = await this.addAnimationData(aniNode, clone);
            let aniInterfaceComponent = AniSysTools.findAndGetIAniComponent(awardNode) as IAnimationControl;
            aniInterfaceComponent.playAni(AnimationStateType.Win);
            console.log('awardBox', aniNode, this._aryRunningNode);



        })
        //--轉移控制權----
        await this.addTweenDelay(5);
        let targetBox = this.getAniNodesByGroupId(0);
        let handoffData =
        {
            reelIndex: targetBox[0][DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex,
            iconIndex: targetBox[0][DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconIndex,
            symbolId: targetBox[0][DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId,
            tokenId: targetBox[0][DYN_NODE_PROPERTIES.TOKEN_ID]
        }
        this.doHandoffSingleByOwnerIdBySelf(handoffData, SymbolOwnerAgentID.SlotMachine);
        this.processDataBeforeRemoveByAwardBox();
        console.log('test', this._aryRunningNode);

        await this.addTweenDelay(2);
        NotifyCation.getInstance().emit(NotifySubject.GAME_ANI_PROCESS_SUBJECT, GameViewEvents.RUN_TEST_MODE);

    } */

    /*
    private getWorldPositionFromSlot = async (IAniData: IPlayAniData): Promise<Vec3> => {

        return await NotifyCation.getInstance().requestData<Vec3>(
            SlotResponseSubject.RES_GAME_SLOT_SUBJECT,
            SlotRequestEvent.GET_WORLD_POSITION,
            SlotNotifySubject.GAME_SLOT_SUBJECT,
            { reelIndex: IAniData.reelIndex, iconIndex: IAniData.iconIndex }
        );
    }*/

    // ==============================
    // ===== 可選擴充的工具方法 =====
    // ==============================
    //-準備將資料交回.


    //--向SlotMachine要資料前的準備(拿資料回來)
    //-this._mapGroupAniData(這個只有group/odd/lineType的資料描述) 
    //-this._mapWinScoreGroupData(這個有key(在盤面位置)跟groupId的對應/IAniData的資料描述)


    /**
     * 基礎自訂義resetData的排除條件(預設條件)
     * 1.wild排除
     * 2.特殊顯示模式排除(需要顯示但又不在中獎輪播清單內)
     * ex: SP_SHOWING當要顯示獲得FG2條件下,scatter卻不在中獎的清單內,這時候就不會被reset
     */
    private defaultExcludeFun(data?: Node): boolean {

        const info = (data as any)[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO] as { symbolId?: number } | undefined;
        const spShowingMode = (data as any)[DYN_NODE_PROPERTIES.OTHER] as string | undefined;
        let flag: boolean = false;
        if (info?.symbolId != undefined) {
            const isWild = WILD_SET.has(info.symbolId);
            const isSpShow = spShowingMode === SP_SHOWING;
            if (!isWild && !isSpShow) {
                flag = true;
                //console.log('check_defaultExcludeFun', info.symbolId, spShowingMode, isSpShow);
            }
        }
        return flag;
    }


    /**
     * 預設的取得要重置的node(排除條件使用預設條件(排除得分框))
     * @returns 
     */
    private passAllAniNodeAndReset(): Node[] {

        const out: Node[] = [];
        const ary = this._aryRunningNode;
        const conditionSymbolGroup: number[] = [DEFAULT_GROUP_AWARD];

        for (let i = ary.length - 1; i >= 0; i--) {

            const node = ary[i];
            const groups: number[] = (node as any)[DYN_NODE_PROPERTIES.GROUP_ID] ?? [];
            let keep: boolean;
            const gSet = new Set(groups);
            keep = conditionSymbolGroup.every(g => gSet.has(g));
            if (!keep) {
                node[DYN_NODE_PROPERTIES.OTHER] = null;//--重置特殊顯示模式
                out.push(node);
            }
        }
        return out;

    }

    //--取得要重置的node(使用自訂的查找規則)
    //-DEFAULT_GROUP_AWARD-->連線框
    private getResetNodesDataByCondition(
        conditionSymbolGroup: number[] = [DEFAULT_GROUP_AWARD],
        excludeFun: (data?: Node) => boolean = this.defaultExcludeFun
    ): Node[] {

        const out: Node[] = [];
        const ary = this._aryRunningNode;
        for (let i = ary.length - 1; i >= 0; i--) {
            const node = ary[i];
            const groups: number[] = (node as any)[DYN_NODE_PROPERTIES.GROUP_ID] ?? [];
            let keep: boolean;
            if (conditionSymbolGroup.length === 1) {
                keep = groups.includes(conditionSymbolGroup[0]);
            } else {
                const gSet = new Set(groups);
                keep = conditionSymbolGroup.every(g => gSet.has(g));
            }

            if (!keep) {
                const isInExclude = excludeFun(node);
                if (isInExclude) {
                    out.push(node);
                }
            }
        }
        return out;
    }


    private findWildInList(list: IPlayAniData[]): string[][] {

        const map = new Map<number, string[]>();
        //-分組
        list.forEach(item => {
            if (item.symbolId === WILD_LIST[0]) {
                if (map.has(item.reelIndex)) {
                    map.get(item.reelIndex)?.push(item.otherData);
                } else {
                    map.set(item.reelIndex, [item.otherData]);
                }
            }
        });
        return Array.from(map.values());
    }



    private findWildAniNodeByKeyString(keysToCompare: string[]): Node | null {

        const sortedKeysToCompare = [...keysToCompare].sort();
        //GameUtilsTools.debugLog(DEBUG_TITLE, 'findWildAniNodeByKeyString', sortedKeysToCompare);
        for (const node of this._aryRunningNode) {
            if (node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId === WILD_LIST[0]) {
                const wildContinueArray = node[DYN_WILD_INFO.WILD_CONTINUE] as string[];
                if (!Array.isArray(wildContinueArray)) {
                    continue;
                }
                const sortedWildContinue = [...wildContinueArray].sort();
                if (this.areArraysEqual(sortedKeysToCompare, sortedWildContinue)) {
                    return node;
                }
            }
        }
        return null; // 如果找不到，返回 null
    }

    private areArraysEqual(target: string[], compare: string[]): boolean {
        // 檢查長度，如果長度不同，內容不可能相同
        /*
        //--有可能會出現兩邊長度不一樣的狀況
        if (arr1.length !== arr2.length) {
            return false;
        }
        // 逐一比較每個元素
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }*/
        const compareSet = new Set(compare);
        return target.every(item => compareSet.has(item));
    }

    /**
     * 查找場面上被keep的icon,比對中線是否存在該物件
     * 如果存在的話直接將中線的groupId塞進去,並且將該筆資料刪除
     * <因為在沒有handoff回去symbol的情況下,owner是不會挖到這筆資料的,浪費時間查找而已>
     * @param list 要處理的資料(winLineData)
     * @returns 
     */
    private cutExistWildAndPushGroup(list: IPlayAniData[]): IPlayAniData[] {

        const wildGroups = this.findWildInList(list);
        //GameUtilsTools.debugLog(DEBUG_TITLE, 'wildGroups:', wildGroups);
        const keysToRemoveSet = new Set<string>();

        wildGroups.forEach(keyGroup => {
            const wildAniNode = this.findWildAniNodeByKeyString(keyGroup);
            if (wildAniNode) {
                const group = this.getWildContinuousGroup(keyGroup);
                wildAniNode[DYN_NODE_PROPERTIES.GROUP_ID] = [...group];
                keyGroup.forEach(key => keysToRemoveSet.add(key));
            }

        });

        const returnList = list.filter(item => !keysToRemoveSet.has(item.otherData));

        /*
        GameUtilsTools.debugLog(DEBUG_TITLE, 'cutExistWildAndPushGroup', {
            keysToRemove: [...keysToRemoveSet],
            returnList: returnList,
            runningNodes: this._aryRunningNode,
            winLineGroup: this._mapWinScoreGroupData
        });*/
        return returnList;
    }

    private findWildWithoutWin(winData: IPlayAniData[]): IPlayAniData[] {
        const noWinWilds: IPlayAniData[] = this._wildMoveFXCtrl.findWildWithoutWin(winData);
        return noWinWilds;
    }
    /**
     * 
     * @param key handoffMap的key格式: reelIndex:iconIndex:symbolId
     * @returns symbolId or null
     */
    private getSymbolIdByKeyString(key: string): number | null {
        const parts = key.trim().split(":");
        if (parts.length < 3) {
            throw new Error(`Invalid key format: "${key}"`);
        }
        const symbolId = Number(parts[2]);
        return symbolId;
    }
    //--根據key重建IPlayAniData
    /**
     * 
     * @param key 
     * @param iconIndexIsPlusOne 要不要-1(預設不要)
     * @returns 
     */
    private reBuildIPlayDataFromKeyString(key: string, iconIndexIsPlusOne: boolean = false): Partial<IPlayAniData> {

        const parts = key.trim().split(":");
        if (parts.length < 3) {
            throw new Error(`Invalid key format: "${key}"`);
        }

        const reelIndex = Number(parts[0]);
        let iconIndex = Number(parts[1]);
        const symbolId = Number(parts[2]);

        if (![reelIndex, iconIndex, symbolId].every(Number.isInteger)) {
            throw new Error(`Key must contain integers: "${key}"`);
        }

        if (iconIndexIsPlusOne) {
            iconIndex -= 1;
        }

        const registerData: Partial<IPlayAniData> = {
            reelIndex,
            iconIndex,
            symbolId,
            tokenId: ""
        };

        return registerData;
    }

    private createWildContinueIplayData(wildNode: Node): IPlayAniData[] {

        const out: IPlayAniData[] = [];
        const continueData = wildNode[DYN_WILD_INFO.WILD_CONTINUE] as string[];
        for (let i: number = 0; i < continueData.length; i++) {
            const parts = continueData[i].split(':');
            let registerData: Partial<IPlayAniData> =
            {
                reelIndex: Number(parts[0]),
                iconIndex: Number(parts[1]),
                symbolId: WILD_LIST[0],
                tokenId: wildNode[DYN_NODE_PROPERTIES.TOKEN_ID]//--在這邊的beforeRelease會用到
            }
            out.push(registerData as IPlayAniData);
        }
        return out;
    }

    private fastCreateIPlayAniData(item: Node): IPlayAniData {

        let registerData: Partial<IPlayAniData> =
        {
            reelIndex: item[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex,
            iconIndex: item[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconIndex,
            symbolId: item[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId,
            tokenId: item[DYN_NODE_PROPERTIES.TOKEN_ID]//--在這邊的beforeRelease會用到
        }
        return registerData as IPlayAniData;
    }

    private getAllGroups(): number[] {

        const groups: number[] = [];
        /*
        for (const [groupId, groupData] of this._mapGroupAniData.entries()) {
            groups.push(groupId);
        }*/

        this._mapGroupAniData.forEach((groupData, groupId) => {
            groups.push(groupId);
        });
        return groups;
    }

    //--一組連續的wild只會抽出一個實體,其他都只是空的位置資訊,交還的時候要反塞回去空的
    //--透過key來抽資料
    private getWildContinuousGroup(keys: string[]): number[] {

        const cutList: number[] = [];
        for (const key of keys) {
            const data = this._mapWinScoreGroupData.get(key);
            if (data == null) continue; // 有可能只是 Wild 的一部分，要判斷

            for (const num of data.group) {
                // 模擬 Set → 不重複才 push
                if (!cutList.includes(num)) {
                    cutList.push(num);
                }
            }
        }

        return cutList;

        //--cocos creator [...new Set()] 會有問題
        //--要用一般的轉陣列的方法不要用語法糖,不然陣列裡面裝的是Set物件
        /*
        let cutSet = new Set<number>();
        for (const key of keys) {
            const data = this._mapWinScoreGroupData.get(key);
            if (data == null) continue;//--有可能連線的群組可能只是Wild的一部分,所以要判斷一下
            for (const num of data.group) {
                cutSet.add(num);
            }
        }
        return [...cutSet];
        */

    }

    //---表演完畢後,scatter要放回原本的層級(S>W)
    private setScatterLayerAfterShowAllWin(): Promise<void> {

        return new Promise<void>((resolve) => {

            const scatterContainer = this._aniNodeStageContainerMap[STAGE_ID.SC_SHOW_FX_CONTAINER];
            for (const node of this._aryRunningNode) {
                if (node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId === SCATTER_LIST[0]) {
                    node.parent = scatterContainer;
                }
            }

            resolve();
        });

    }

    //--20260306-取消該功能,直接做在layer上面了
    public reSetWildLayerAndSort(): Promise<void> {

        return new Promise<void>((resolve) => {
            const wildContainer = this._aniNodeStageContainerMap[STAGE_ID.WILD_SHOW_CONTAINER];
            //let reSetChildIndex = false;
            for (const node of this._aryRunningNode) {

                const iconId = node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId;
                const currentContainerId = (node.parent?.name === STAGE_ID.WILD_NO_MOVEMENT_SHOW_CONTAINER) ? true : false;
                //--露頭非完整的已經是整個轉出來了, 資料長度=4
                //const windLens = (node[DYN_WILD_INFO.WILD_CONTINUE]?.length === 4) ? true : false;

                if (iconId === WILD_LIST[0] && !currentContainerId) {
                    //--過濾掉非整軸的wild
                    node.parent = wildContainer;
                    //reSetChildIndex = true;
                    // === Step 1: After parent ===
                    /*
                    GameUtilsTools.debugLog('reSetWildLayerAndSort', 'After parent assignment', {
                        addedNodes: wildContainer.children.map(n => ({
                            name: n.name,
                            reelIndex: n[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex,
                            siblingIndex: n.getSiblingIndex(),
                        })),
                    });*/
                }
            }

            const children = wildContainer.children;
            children.sort((a, b) => {
                const aReelIndex = a[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex;
                const bReelIndex = b[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex;
                return aReelIndex - bReelIndex;
            });
            /**
             * 這裡有點雷,因為上一步node.parent = wildContainer;
             * 會直接把node push到後面...
             * 然後再用 setSiblingIndex(i)，它會重新排列陣列，畫的順序仍照內部的 index 走（從 0 開始畫）
             */
            for (let i = 0; i < children.length; i++) {

                //const index = (reSetChildIndex) ? children.length - 1 - i : i;
                //children[i].setSiblingIndex(index);
                //children[i].setSiblingIndex(i);
                children[i].setSiblingIndex(children.length - 1 - i);
            }

            // === 組合輸出資訊 ===
            const sortedData: any[] = [];
            for (let i = 0; i < children.length; i++) {
                const node = children[i];
                const info = node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO];
                sortedData.push({
                    order: i,
                    name: node.name,
                    reelIndex: info.reelIndex,
                    symbolId: info.symbolId,
                    siblingIndex: node.getSiblingIndex(),
                });
            }

            /*
            GameUtilsTools.debugLog('reSetWildLayerAndSort', 'After sorting', {
                sortedResult: sortedData,
            });
            */

            resolve();
        });

    }

    //--右壓左的Wild排列順序
    private sortForWildNodes(layer: STAGE_ID, testCaller: string = ''): void {

        const wildContainer = this._aniNodeStageContainerMap[layer];
        if (!wildContainer) return;

        const children = wildContainer.children;
        children.sort((a, b) => {
            const aReelIndex = a[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex;
            const bReelIndex = b[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex;
            return aReelIndex - bReelIndex;
        });

        for (let i = 0; i < children.length; i++) {
            children[i].setSiblingIndex(i);
        }

        // === 排序完成後再取得呼叫來源（caller）===
        let callerName = 'unknown';
        try {
            const stack = new Error().stack?.split('\n');
            if (stack && stack.length >= 3) {
                // stack[0] = 'Error'
                // stack[1] = this function (sortForWildNodes)
                // stack[2] = caller function
                const match = stack[2].trim().match(/at\s+(.*)\s+\(/);
                if (match && match[1]) callerName = match[1];
            }
        } catch (e) {
            callerName = 'parse_error';
        }

        // === 組合輸出資訊 ===
        const layerName = wildContainer.name;
        const sortedData = children.map((node, i) => {
            const info = node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO];
            return {
                order: i,
                name: node.name,
                reelIndex: info.reelIndex,
                symbolId: info.symbolId,
                siblingIndex: node.getSiblingIndex(),
            };
        });

        /*
        GameUtilsTools.debugLog(
            'sortForWildNodes',
            `layer=${layer}`,
            {
                caller: testCaller,
                layerName: layerName,
                total: children.length,
                sortedResult: sortedData,
            },
            'log'
        );*/

    }


    private getWildContainer(wildContinue: string[]): string {

        let containerId = STAGE_ID.WILD_SHOW_CONTAINER;//--預設為1*4的wild容器
        //console.log('check_wildContinue', wildContinue);
        const lastKey = wildContinue[wildContinue.length - 1];
        const parts = lastKey.split(':');
        const iconIndex = Number(parts[1]);
        if (iconIndex != 4) {
            containerId = STAGE_ID.WILD_NO_MOVEMENT_SHOW_CONTAINER;//--顯示非1*4的wild容器
        }


        return containerId;
    }

    private checkWildIndGroupExist(nodes: Node[]): boolean {

        const wild = nodes.find(v => v[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId === WILD_LIST[0]);
        return wild != undefined;
        /*
        for (const node of nodes) {
            const id = node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId;
            if (id != undefined) {
                if (id === WILD_LIST[0]) return true;
            }
        }
        return false;*/
    }

    //--test for handoff
    public testForgetWild(): void {
        let changeData: IPlayAniData =
        {
            reelIndex: 0,
            iconIndex: 1,
            symbolId: 9,
            aniId: '',
            tokenId: '',//--屬性要寫好(用IPlayAniData)
            wPos: null//--屬性要寫好(用IPlayAniData)

        };
        this._crossSystemSymbolAniService.handoff(changeData, this);
    }
    //--log表格工具
    private logAniDataSummary(list: IPlayAniData[], group: number, title = '====AniData Summary===='): void {

        const rows = list.map((x: any) => ({
            reelIndex: x.reelIndex ?? x.slotMachineIndexInfo?.reelIndex ?? '-',
            iconIndex: x.iconIndex ?? x.slotMachineIndexInfo?.iconIndex ?? '-',
            symbolId: x.symbolId ?? '-',
            isWild: x.symbolId !== undefined && WILD_SET.has(x.symbolId),
            aniId: x.aniId ?? x.aniKey?.aniId ?? x.tokenID ?? '',
            prefabKey: x.prefabKey ?? '',
        }));
        //console.info(title + group);
        //console.log('comparedGroup', this._mapWinScoreGroupData);
        //console.table(rows);
    }

    /**
     * 
     * TIPS:
     *  單局只有一次中線-->
        播放Connect_1_Ani,
        單局多次中線--->
        第一次連線--->播放Connect_2_Ani,
        第二次連線(包含以上)--->播放Connect_3_Ani,
        最後一次連線---->播放Connect_4_Ani
     * @returns 當下連續wild的播放target索引
     */
    private getRoundWildPlayCountIndex(index: number): string {

        const maximumWildPlayCount = 4; // 最大連續Wild次數為4
        this._wildPlayCount++;

        if (this._mapGroupAniData.size === 1) {

            this._wildPlayCount = 1;

        } else {

            if (index === 0) {

                this._wildPlayCount = 2;

            } else {

                if (index + 1 >= this._mapGroupAniData.size) {
                    this._wildPlayCount = maximumWildPlayCount;
                } else {
                    this._wildPlayCount = 3;
                }
            }
        }

        return WILD_PLAY_COUNT_NAME + this._wildPlayCount;
    }

    //--取得這一線的分數
    private getRoundSingleLineScore(roundOdd: number): number {

        if (this._scoreData == null) {

            // GameUtilsTools.debugLog('BasicShowAniProcess_debug', 'getRoundSingleLineScore', {});
        } else if (this._scoreData.betValue == null) {
            //GameUtilsTools.debugLog('BasicShowAniProcess_debug', 'getRoundSingleLineScore', { data: this._scoreData });
        }
        return (roundOdd * this._cloneScoreData.betValue).fixed();
    }

    /**
     * 因為企劃要求在底下顯示得分的欄位是要在round當中累加的
     * @returns 
     */
    protected calculateCurrentRoundOdds(winScoreData?: WinScoreData): number {

        this._currentRoundOdds += winScoreData?.totalOdd ?? 0;
        const wd = {
            baseOdds: winScoreData?.baseOdds,
            totalOdd: this._currentRoundOdds,
            betValue: winScoreData?.betValue,
            multiplier: winScoreData?.multiplier
        };
        const returnScore = this.getTotalScore(wd);
        return returnScore;
    }

    /**
     * 取得總得分，預設從 winScoreData 解析(這一round的這一把)
     * @param winScoreData 
     * @returns 
     */
    protected getTotalScore(winScoreData: WinScoreData): number {
        return (winScoreData.totalOdd * winScoreData.betValue).fixed();
    }
}