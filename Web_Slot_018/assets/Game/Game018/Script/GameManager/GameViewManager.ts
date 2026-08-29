import { _decorator, Component, Node, randomRangeInt, UITransform, EventTarget, Vec3, v3, Sprite, find, Size, Layers, Game, UIOpacity } from 'cc';
import { SlotMachineController018 } from '../Slot/SlotMachineController018';
import { ShowContainerController } from '../GameDisplay/ShowContainer/ShowContainerController';
import { GameState } from '../DefinitionGameData/GameStateConfigDef';
import { IProcessSlotData, IProcessFGData, IconData, BasicProcessSlotData, MatchInfoForRound } from '../ServerBackSlotInfoData/ProcessSlotData';
import { GameUtils } from '../MyUtils/GameUtils';
import { NotifyCation } from '../MyUtils/EventSystem/NotifyCation';
import { NotifySubject, GameViewEvents } from '../DefinitionGameData/EventTypesDefinition';
import { DefinitionGameConfigData } from '../DefinitionGameData/DefinitionGameConfigData';
import { WinScoreData } from '../DefinitionGameData/GameDataDef';
import { WinScore } from '../GameDisplay/WinScore/WinScore';
import { SlotMachineIndexInfo, AnimationPlayInfo, playIAniData } from '../MyUtils/AnimationSystem/Definitions/AnimationDataOptions';
import { ShowAniController } from '../GameDisplay/ShowAniController/ShowAniController';
import { GroupAniData } from '../MyUtils/AnimationSystem/Definitions/AnimationDataOptions'
import { DYN_NODE_PROPERTIES } from '../MyUtils/AnimationSystem/Definitions/AnimationDataOptions';
import { IAnimationControl } from '../MyUtils/AnimationSystem/Definitions/IAnimationControl';
import { AniSysTools } from '../MyUtils/AnimationSystem/AniTools/AniSysTools';
import { RPSWildAnimationController } from '../GameDisplay/RPSWild/RPSWildAnimationController';
import { RPSWildData, RPSWildState, RPSGuessRoundData } from '../GameDisplay/RPSWild/RPSWildDef';
import { RPSWildSystem } from '../GameDisplay/RPSWild/RPSWildSystem';
import { GateN2FTransition } from '../GameDisplay/Transitions/GateN2FTransition';
import { BonusManager } from '../GameDisplay/FGController/BonusManager';
//import { BonusData } from '../GameDisplay/FGController/BonusComponent/FG_bonusDataDef';
import { ShowAniData } from '../GameDisplay/ShowAniController/ShowAniDef';
import { TransitionsState } from '../DefinitionGameData/GameStateConfigDef';
import { SpineController } from '../MyUtils/AnimationSystem/Components/SpineController';
import { ProcessSymbolData } from './ProcessSymbolData';
import { SymbolIconAinData } from '../DefinitionGameData/GameDataDef';
import { BuyFgController } from '../GameDisplay/BuyFgController/BuyFgController';
import { JpShowController } from '../GameDisplay/JpShowController/JpShowController';
import { FG_BkgController } from '../GameDisplay/ShowContainer/Components/FG_BkgController';
import { FG2_BkgController } from '../GameDisplay/ShowContainer/Components/FG2_BkgController';
import { FindNode } from '../MyUtils/FindNode';
import { GenericUIManager } from 'db://assets/GenericUI/Scripts/GenericUIManager';
import { PlayerInfo } from 'db://assets/Scripts/Player/PlayerInfo';
import { ShowBottomTextStatus } from '../DefinitionGameData/GameStateConfigDef';
import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
import { SoundList, AudioSourceList, MusicList } from '../DefinitionGameData/SoundList';

const { ccclass, property } = _decorator;

/**
 * 這個自己乖乖寫吧
 */
const {
    FORECAST_REEL,
    WILD_LIST,
    FORECAST_FOR_REEL,
    REEL_AMOUNT,
    SPECIAL_SYMBOL_LIST,
    PFB_SYMBOL_ANI,//--prefab id(動態)
    NO_MOTIONICON_LIST,
    HIGH_ODDS_SYMBOL_LIST
} = DefinitionGameConfigData;


const SPIN_DELAY = 1000; // 定義延遲常數
const FG_DELAY = 500; // 定義延遲常數
const NO_CAMP_DATA = -1; // 定義無陣營資料(NG_game)

@ccclass('GameViewManager')

export class GameViewManager extends EventTarget {


    @property({ type: SlotMachineController018, visible: true, displayName: 'SlotMachineController' })
    //--實際控制slotMachine
    private _slotMachineController: SlotMachineController018 = null;
    //--不同遊戲下的陣營相關背景變化(包含資料的寫入)
    @property({ type: ShowContainerController, visible: true, displayName: 'ShowContainerController', tooltip: '用來控制顯示的容器(切換模式使用)' })
    private _showContainerController: ShowContainerController = null;
    //--動畫控制器
    @property({ type: ShowAniController, visible: true, displayName: 'GameAniShowSystem', tooltip: '動畫控制器' })
    private _showAniSystem: ShowAniController = null;

    @property({ type: WinScore, visible: true, displayName: 'WinScore', tooltip: '得分顯示動畫' })
    private _winScore: WinScore = null;
    //--wild系統
    @property({ type: RPSWildSystem, visible: true, displayName: 'RPSWildSystem', tooltip: 'wild系統' })
    private _rpsWildSystem: RPSWildSystem = null;
    //--轉場效果控制
    @property({ type: GateN2FTransition, visible: true, displayName: 'GateN2FTransition', tooltip: '轉場效果控制' })
    private _gateN2FTransition: GateN2FTransition = null;
    //--FG_bonus系統
    @property({ type: BonusManager, visible: true, displayName: 'FG_BonusManagerController', tooltip: 'FG_bonus系統' })
    private _fgBonusManager: BonusManager = null;

    @property({ type: BuyFgController, visible: true, displayName: 'BuyFGGuiController', tooltip: 'BuyFG系統' })
    private _buyFGController: BuyFgController = null;

    @property({ type: JpShowController, visible: true, displayName: 'JpShowController', tooltip: 'jp動畫控制器' })
    private _JpShowController: JpShowController = null;

    @property({ type: FG_BkgController, visible: true, displayName: 'FG_Ali_ShowVertical_ANI_Node', tooltip: 'fg阿里直板使用的動畫' })
    private _fgAliShowVerticalAniNode: FG_BkgController = null;

    @property({ type: FG2_BkgController, visible: true, displayName: 'FG_Thieves_ShowVertical_ANI_Node', tooltip: 'fg盜賊直板使用的動畫' })
    private _fgThievesShowVerticalAniNode: FG2_BkgController = null;

    private _processSymbolData: ProcessSymbolData;
    private _currentSlotInfo: IProcessSlotData;//--目標資料
    private _serverBackSlotInfo: BasicProcessSlotData;//---server結算的資料
    private _currentGameState: GameState;
    private _currentCampData: number;//--NG模式=-1
    private _isBuyFG: boolean = false;//--已購買FG的狀態
    private _currentOpenFgCampData: number = -1;//--FG的陣營資料
    private _currentTurboSpeed: boolean = false;//--是否為turbo模式
    private _isThisRound: boolean = false;//--是否為這一輪的狀態
    private _startGetScoreInThisRound: boolean = false;//--是否開始計算這一輪的得分
    private _isStop: boolean = false;//--是否已經按下stop按鈕(startSpin會關閉)
    private _temporaryIProcessSlotData: IProcessSlotData;
    private _bonusShowAniData: ShowAniData[] = [];
    private _isAutoSpinMode: boolean = false; //---是否為自動旋轉模式

    set isBuyFG(value: boolean) {
        this._isBuyFG = value;
    }

    set isAutoSpinMode(value: boolean) {
        this._isAutoSpinMode = value;
        if (this._isAutoSpinMode) {
            this._buyFGController.disableBuyFgBtn();
        } else {
            this.reOpenFgBtn();
        }
    }

    constructor() {
        super();
    }

    public init(): void {

        this._currentSlotInfo = null;
        this._serverBackSlotInfo = null;
        this._temporaryIProcessSlotData = null;
        this._slotMachineController.init();
        this._showContainerController.init();
        this._gateN2FTransition.init();
        this._gateN2FTransition.changeSlotStateForCloseFG = this.fgCloseToChangeForCloseHandler;
        this._gateN2FTransition.changeLayerDuringTransition = this.changeLayerDuringTransition;
        //--showAniSystem的初始化
        this._showAniSystem.init();
        this._winScore.init();
        this._rpsWildSystem.init();
        this._fgBonusManager.init();
        this._buyFGController.init(PlayerInfo.betValueList);
        this._JpShowController.init();
        this._showAniSystem.winScore = this._winScore;
        this._showAniSystem.wildRPSSystem = this._rpsWildSystem;
        this._showAniSystem.fgBonusSystem = this._fgBonusManager;
        this._showAniSystem.JpShowController = this._JpShowController;
        this._showAniSystem.fgAliShowVerticalAniNode = this._fgAliShowVerticalAniNode;
        this._showAniSystem.fgThievesShowVerticalAniNode = this._fgThievesShowVerticalAniNode;
        this._showAniSystem.slotControllerWildDarkness = this.setWildIconDarkness;
        this._currentGameState = GameState.NORMAL;
        this._currentCampData = NO_CAMP_DATA;

        //---slot all stop callback---
        this._slotMachineController.allReelRollEndCallBack = this.allReelRollEndHandler;
        this._slotMachineController.oneReelRollEndCallBack = this.oneReelRollEndCallBackFromSlot;
        this._slotMachineController.setGameState(this._currentGameState, -1);
        this._showContainerController.closeAllShowContainer();
        this._showContainerController.changeGameMode(this._currentGameState, -1);
        //--處理獲取prefab的icon動畫資料
        this._processSymbolData = new ProcessSymbolData();
        this._processSymbolData.processGameState = this._currentGameState;
        this._processSymbolData.showAniController = this._showAniSystem;
        //--20250524
        this._slotMachineController.setProcessAniSymbolData(this._processSymbolData.getSymbolIconAniBeforeRollEnd);
        this._slotMachineController.setGetHighOddSpineAniAfterFGEnd(this._processSymbolData.getHighOddSpineAniAfterFGEnd);
        this._showAniSystem.slotControllerReAddToGameIcon = this._slotMachineController.addBackToGameIcon;
        this._showAniSystem.getAndRemoveSymbolAniNodeWithWorldPos = this._slotMachineController.getAndRemoveSymbolAniNodeWithWorldPos;
        this._showAniSystem.setSingleGameIconBrightness = this._slotMachineController.setSingleGameIconBrightness;
        this._showAniSystem.closeOrOpenAllGameIconBright = this._slotMachineController.closeOrOpenAllGameIconBright
        this._slotMachineController.changeInitSpineAniNode();

    }


    public changeGameMode(gameState: GameState, camp?: number): void {

        if (this._currentGameState === gameState) {
            return; // 如果狀態沒有改變，則不執行任何操作
        }
        this._currentGameState = gameState;
        this._currentCampData = (camp != undefined) ? camp : NO_CAMP_DATA;
        this._processSymbolData.processGameState = this._currentGameState;
        this._showAniSystem.changeGameMode(this._currentGameState, this._currentCampData);
    }

    /**
     * 1.gameRoot有更新都會送進來更新
     * 2.在購買FG後要顯示總購買金額,當FG結束後要回復預設金額
     * @param value 
     */
    public setPlayerBetValue(value: number): void {
        this._buyFGController.setPlayerBetValue(value);
    }
    /**
     * 開啟購買FG的介面,需要更新玩家當前的下注額度
     * @param betValue 玩家當前的下注額度
     */
    public setCurrentBetAndOpenBuyFG(betValue: number): void {
        this._buyFGController.setCurrentBetAndOpenBuyFG(betValue);
    }

    //========<test code for test>=========

    public testCall(value?: any): void {
        return;
        this.setSeverReceiveData(value);
        this.allReelRollEndHandler();
    }

    public testPromiseFunc = async (): Promise<void> => {
        await GameUtils.DeferByTweenPromise(3);
        console.log('testFunc_tweenReady');
    }

    //========<test code for test>=========


    //-----新的一輪都會reset _serverBackSlotInfo
    public setSeverReceiveData(data: BasicProcessSlotData): void {

        this.resetDataForNewRound();//-上保險再重置一次資料狀態
        this._currentCampData = -1;
        this._processSymbolData.currentCamp = -1;
        this._showAniSystem.currentCampFg = -1;
        this._serverBackSlotInfo = data;//-最原始的server資料
        this._isThisRound = true;
        this._startGetScoreInThisRound = false;
        //--會隨著ng/fg/reSpin的資料變化的每一round的資料(一局內有多個round)
        this._currentSlotInfo = this._serverBackSlotInfo.ngReelInfo;
        if (this._rpsWildSystem) {
            this._rpsWildSystem.resetWild();
        }
    }

    private resetDataForNewRound(): void {

        this._serverBackSlotInfo = null;
        this._currentSlotInfo = null;
        this._temporaryIProcessSlotData = null;
    }


    public onBetSelectBtnClickCallback(value: number): void {
        this._buyFGController.setPlayerBetValue(value);
    }

    public reOpenFgBtn(): void {
        if (!GenericUIManager.instance.isAutoMode) {
            this._buyFGController.reOpenBuyFgBtn();
        }
    }
    //--空白按鍵判斷使用(當面板開啟時,空白按鍵不能啟動spin)
    public getBuyFgPanelIsOpen(): boolean {
        return this._buyFGController.getBuyFgPanelIsOpen();
    }

    public startSpin(isTurboMode: boolean): void {

        //----停止中獎動畫的撥放----
        /**
         * 需要補的部分(播放的中獎動畫寫在別的class)
         * 1.停止中獎動畫的撥放
         * 2.回復滾輪的效果狀態(setIconBrightness/setAllReelBrightness)
         *  */
        this._bonusShowAniData = [];
        AudioManager.instance.playSoundLoop(SoundList.SpinRoll, AudioSourceList.BasicAS);
        this._isStop = false;
        this._buyFGController.disableBuyFgBtn();
        GenericUIManager.instance.setMainUIToSpinMode();//---spin按鈕上鎖,變成stopSpin按鈕
        this._currentTurboSpeed = false;
        if (this._isBuyFG) {
            this._currentTurboSpeed = this._isBuyFG;
        } else if (GenericUIManager.instance.isTurboOn) {
            this._currentTurboSpeed = true;
        } else {
            this._currentTurboSpeed = isTurboMode;
        }

        this._showAniSystem.cleanAllPlayingAniForNewRound();//--有條件的混合清除(其他同round接續的表演會用)
        this._slotMachineController.cleanIdleSymbolAnis();
        //--上保險,在確保全新round開始前(server資料還沒回來時,清除掉全部的動畫資料)
        if (!this._isThisRound) {
            this._showAniSystem.cleanAllRunningNodesForNewRound();
        }

        if (this._fgBonusManager.isWorking) {
            const reduceMultiplier = this._fgBonusManager.getCamp2MultiplierForReduce();
            this._slotMachineController.calulateFGSymbolList(reduceMultiplier);
        }
        this._slotMachineController.closeOrOpenAllGameIconBright(false);
        this._slotMachineController.startRoll(this._currentTurboSpeed);
        //--湊滿兩個wild的情況下isWorking會是true
        if (this._rpsWildSystem.isWorking) {
            //--自轉--
            this._rpsWildSystem.setSlotMaxnumTime();
            this._rpsWildSystem.checkRoundAndStartRollWild();
        }

    }
    //--購買fg的時候資料塞這裡--0627廢棄
    public stopSpinForFG(slotData?: IProcessSlotData): void {
        this._isBuyFG = true;
        //-忽略resultData.reelInfo.haveForecast,直接停直接猜
    }

    public onStopBtnClickHandler(): void {
        //--玩家按下後gameRoot會處理...
        //--第一筆資料會再onReceiveBet裡面call stopSpin
        this.stopSpin(this._temporaryIProcessSlotData);
        this._slotMachineController.stopRollCallBack();
    }

    //--寫完server新的資料後會呼叫這個方法
    public newRoundDataToStopSpin(): void {
        this.stopSpin(this._currentSlotInfo);
    }

    //---滾輪停止---
    public stopSpin(slotData: IProcessSlotData): void {

        if (this._isStop) return;
        if (!slotData) return; // slotData 為 null，直接退出（不會設 _isStop）
        this._isStop = true;
        /**
         * 第一把currentSlotInfo是NG的資料(onReceiveBet)
         * this._currentSlotInfo = this._serverBackSlotInfo.ngReelInfo;
         * _currentSlotInfo隨著NG/FG/reSpin的資料會變化
         */
        const reelInfo = slotData.reelInfo;
        if (reelInfo.haveForecast && (!this._isBuyFG || !this._currentTurboSpeed)) {
            const canTriggerForecast =
                !this._rpsWildSystem.isWorking &&
                !this._fgBonusManager.isWorking;

            if (canTriggerForecast) {
                this._slotMachineController.setReadyHand(FORECAST_REEL);
            }
            //---有聽牌的情況下要做的事情(整條的轉輪要各種騷操作的演)---
            /**
             * 需要送入聽牌的那一軸的index
             * slotMachine 會依序播聽的動畫
             * PS--他會依序加速轉,直到最後一軸停下來
             * ex:slotMachineController.setReadyHand(0);
             * 就會依序從0>1>2>3軸加速轉,直到3軸停下來
             * 如果slotMachineController.setReadyHand(2);
             * 就會依序從0(正常)>1(正常)>2>3軸加速轉,直到3軸停下來
             * 如果slotMachineController.setReadyHand(3);
             * 就會依序從0(正常)>1(正常)>2(正常)>3軸加速轉,直到3軸停下來
             * 正常來說都是最後一軸聽牌
             */
        }


        //--reelInfo的資料來自_currentSlotInfo(是server資料_serverBackSlotInfo的參照)
        const rawSymbol2D = this.getIconIDTo2DArray(reelInfo.symbolData);
        //---這邊要給showAniSystem的2d陣列資料
        const clonedSymbol2D = GameUtils.deepClone(rawSymbol2D);
        //--slotMachineController會移除掉原本的symbolData
        this._showAniSystem.ary2dCards = clonedSymbol2D;
        this._slotMachineController.stopRoll(clonedSymbol2D);
    }
    //--轉場關門換圖
    private allTransitionCloseDoorReadyHandler = () => {
        this._rpsWildSystem.closeWildSystemVisible();
        this._slotMachineController.setGameState(GameState.FREE_GAME, this._currentCampData);
        this.changeGameMode(GameState.FREE_GAME, this._currentCampData);
        //--整個轉完再做changeGameMode
        this._showContainerController.changeContainerStateForTransition(GameState.FREE_GAME, this._currentCampData);
    }

    //--fg結算完畢後的callback(click的時候不會進來)
    private fgCloseToChangeForCloseHandler = () => {
        AudioManager.instance.playMusic(MusicList.NgBgm);
        //--都完成後回復到NG要call this._gateN2FTransition.resetState()
        this._gateN2FTransition.cleanTransition();
        this.reOpenFgBtn();
        this._buyFGController.openForFGFinish();
    }

    private changeLayerDuringTransition = () => {
        this._showContainerController.changeBGContainerLayerDuringTransition(this._currentCampData);
    }

    /**
     *滾輪全部停止後的callback--這邊要做的事情 
    * 用gameState來判斷資料的outReelIndex要怎麼給(this._currentGameState)
    * 因為NG/ReSpin模式兩個盤面會分開給(塞在同一個陣列以一個盤面的基礎去給)
    * 去判斷campData來給予不同的reelIndex
    * freeGame的話就直接用outReelIndex
    * 做三層迴圈是要應付如果連線一條以上且是重複單位的情況下(資料會塞成一筆進來)
    * matchPos裡面放的是reel裡面的index(他不是symbol的id)                 
    */
    private allReelRollEndHandler = async () => {

        AudioManager.instance.stopSound([AudioSourceList.BasicAS]);
        if (this._slotMachineController.getFastStopClick()) {
            AudioManager.instance.playSound(SoundList.SpinStop, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
        }
        await this.handleRpsWildSystem();
        this.checkIsLastWildRound();
        const totalWinScore = this.calculateTotalWinScore();
        const winScoreData = this.createWinScoreData();
        const allIconAniDataForRound: SymbolIconAinData[] = [];
        await this.checkAndLoadBonusData();//--等待所有的bonus動畫都抓完
        //--0708取消
        //this._rpsWildSystem.checkWildIsCampDecidedAndPlay();//--0702新增(猜拳當下不管有沒有中線都要播放connect的wild動畫(拳頭晃一下))

        if (totalWinScore > 0) {
            this._startGetScoreInThisRound = true;
            //--強迫關閉右側操作面板按鈕
            //NotifyCation.getInstance().emitSync(NotifySubject.GAME_VIEW_SUBJECT, GameViewEvents.ALL_REEL_END, null);
            GenericUIManager.instance.forceClickMainUIStopBtn();
            await this.handleWinCase(winScoreData, allIconAniDataForRound);
        } else {
            //---沒有中獎的情況下要做的事情
            if (!this._startGetScoreInThisRound) {
                const evtData = {
                    eventType: GameViewEvents.SET_BOTTOM_TEXT,
                    eventData: {
                        status: ShowBottomTextStatus.NO_WIN
                        //value: totalMultiplierValue,
                    }
                }
                NotifyCation.getInstance().emitSync(NotifySubject.GAME_VIEW_SUBJECT, evtData.eventType, evtData);
            }
            await this.handleNoWinCase();
        }
        this.checkNextRound();
    };

    //--20250602為了等所有的bonus動畫的語系都抓完才能進後續動作,不能一軸結束就開始判斷會太快了
    private async checkAndLoadBonusData(): Promise<void> {

        const allBonusLoadPromises: Promise<void>[] = [];
        for (const bonusItem of this._bonusShowAniData) {
            allBonusLoadPromises.push(this.createBonusIconData(bonusItem));
        }

        // 等全部 createBonusIconData 完成後再 resolve
        await Promise.all(allBonusLoadPromises);
    }

    private oneReelRollEndCallBackFromSlot = (reelID: number) => {

        if (this._currentSlotInfo.reelInfo.haveForecast) {
            //--第二軸
            if (!this._rpsWildSystem.isWorking) {
                let campData = 0;
                if (reelID == FORECAST_FOR_REEL) {
                    campData = 0;
                } else if (reelID == FORECAST_REEL) {
                    campData = 1;
                }
                const wildData: RPSWildData = this.getWildIconData(reelID, this._currentSlotInfo.reelInfo.symbolData);
                if (wildData.wild != -1) {
                    wildData.camp = campData;
                    this._rpsWildSystem.addWildIconCount();
                    this.createWildIconData(wildData);
                }
            }

        } else if (this._fgBonusManager.isWorking) {
            const bonusData: ShowAniData[] = this.getFGBonusData(reelID, this._currentSlotInfo.reelInfo.symbolData);
            if (bonusData.length > 0) {
                this._bonusShowAniData = this._bonusShowAniData.concat(bonusData);
                const soundTarget = (bonusData[0].camp == 0) ? SoundList.TreasureDebut : SoundList.MoneyDebut;
                AudioManager.instance.playSound(soundTarget, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
                /*
                for (const bonus of bonusData) {
                    let soundTarget;
                    if (bonus.camp == 0) {
                        soundTarget = SoundList.TreasureDebut; //--10箱子
                    } else {
                        soundTarget = SoundList.MoneyDebut;//--11錢袋
                    }
                    AudioManager.instance.playSound(soundTarget, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
                }*/
            }
        } else {
            //---第二軸沒有出現wild但是第5軸出現wild的情況下(沒有聽牌但有wild)
            //---第二軸出現必定聽牌haveForecast=true,所以只需要檢查第5軸
            if (!this._rpsWildSystem.isWorking) {
                const normalWildCampData = 1;
                const wildData: RPSWildData = this.getWildIconData(reelID, this._currentSlotInfo.reelInfo.symbolData);
                if (wildData.wild != -1) {
                    wildData.camp = normalWildCampData;
                    this._rpsWildSystem.addWildIconCount();
                    this.createWildIconData(wildData);
                }
            }
        }


        //20250610企劃要求又又又又又要改回來啦
        /*
        if (reelID == REEL_AMOUNT - 1) {
            GenericUIManager.instance.forceClickMainUIStopBtn();
        }*/
        if (!this._slotMachineController.getFastStopClick()) {
            AudioManager.instance.playSound(SoundList.SpinStop, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
        }
    }

    /**
     * 20250731新增
     * 確認是否為wild的最後一把,要處理最後一把的動畫
     * Y:持續輪播+取消燈號
     * N:照舊有流程
     */
    private checkIsLastWildRound(): void {

        let isLastWild = false;
        if (this._serverBackSlotInfo.reSpinReelInfo.length == 0 && this._serverBackSlotInfo.freeGameReelInfo.length == 0) {
            isLastWild = true;
        }

        if (this._rpsWildSystem.isWorking) {
            this._rpsWildSystem.isLastWildRound = isLastWild;
        }
    }

    private async handleRpsWildSystem(): Promise<void> {

        if (this._rpsWildSystem.isWorking && this._rpsWildSystem.isRolling) {
            await this._rpsWildSystem.stopSlotRolling();
        }
    }

    private calculateTotalWinScore(): number {

        let totalWinScore = this._currentSlotInfo.totalOdd * this._currentSlotInfo.betValue;
        return parseFloat(totalWinScore.toFixed(2));
    }

    private createWinScoreData(): WinScoreData {
        return {
            baseOdds: 0, // 待刪除
            totalOdd: this._currentSlotInfo.totalOdd,//--裡面的資料如果是fg的話,他已經是乘上倍率的值(每一輪)
            betValue: this._currentSlotInfo.betValue,
            multiplier: this.getMultiplier()
        };
    }

    private getMultiplier(): number {
        if ('multiplier' in this._currentSlotInfo && typeof this._currentSlotInfo.multiplier === 'number') {
            return (<IProcessFGData>this._currentSlotInfo).multiplier;
        } else {
            return -1;
        }
    }

    private async handleWinCase(winScoreData: WinScoreData, allIconAniDataForRound: SymbolIconAinData[]): Promise<void> {

        const targetData: MatchInfoForRound[] = this._currentSlotInfo.winLine;
        this.processWinLineData(targetData, allIconAniDataForRound);
        this._showAniSystem.sortAnimationLayer(); //----sort layer
        this._slotMachineController.closeOrOpenAllGameIconBright(true);//--遮蔽icon的亮度
        const winLineDataForBright = this.getWinSymbolDataForBright(allIconAniDataForRound);
        this._slotMachineController.openOrCloseSingleGameIconBright(winLineDataForBright);
        const expandData = this.expandWinLineDataForGroup(allIconAniDataForRound);//--做得分的表演
        //console.log('check_expandData:', expandData);
        this._showAniSystem.winLinesGroupData = expandData;
        await this._showAniSystem.playWinInThisRound(winScoreData);
    }

    private processWinLineData(targetData: MatchInfoForRound[], allIconAniDataForRound: SymbolIconAinData[]): void {
        for (let i = 0; i < targetData.length; i++) {
            for (let j = 0; j < targetData[i].matchPos.length; j++) {
                for (let k = 0; k < targetData[i].matchPos[j].length; k++) {
                    const outIndex = this.getOutIndex(targetData, i, k); // 傳遞 targetData
                    const inIconIndex = targetData[i].matchPos[j][k];
                    this.processIconAnimation(
                        targetData,
                        outIndex,
                        inIconIndex,
                        i,
                        targetData[i].camp,
                        allIconAniDataForRound
                    );
                }
            }
        }
    }

    private getOutIndex(targetData: MatchInfoForRound[], groupIndex: number, iconIndex: number): number {
        const isNormalOrReSpine = this._currentGameState === GameState.NORMAL || this._currentGameState === GameState.RE_SPINE;
        const currentCamp = targetData[groupIndex].camp;
        //--NG/ReSpin模式是兩個盤面,且要連續3個才會連線,所以資料最少長度一定是3
        if (isNormalOrReSpine) {
            //--盤面長度=3
            if (currentCamp === 0) {
                return iconIndex;
            } else {
                return iconIndex + 3;
            }
        } else {
            //--盤面長度=6
            return iconIndex;
        }
    }

    /**
     * 20250525--
     * 在這邊處理已經先推進去gameIcon的spineNode
     * 
     */
    private processIconAnimation(
        targetData: MatchInfoForRound[],
        outIndex: number,
        inIconIndex: number,
        groupId: number,
        camp: number,
        allIconAniDataForRound: SymbolIconAinData[]
    ): void {
        //-fg的bonus他不會進來連線這裡的分類判斷
        const symbol2ds = this.getIconIDTo2DArray(this._currentSlotInfo.reelInfo.symbolData);
        const pos = this._slotMachineController.getSymbolWorldPosition(outIndex, inIconIndex);
        const symbolId = symbol2ds[outIndex][inIconIndex];
        let iconAniData: SymbolIconAinData = {
            outIndex,
            groupId,
            globalPos: pos,
            score: targetData[groupId].odd,
            iconIndex: inIconIndex,
            camp
        };
        if (!WILD_LIST.includes(symbolId)) {

            let existSpineAniNode: Node = null;
            if (HIGH_ODDS_SYMBOL_LIST.includes(symbolId)) {
                //--這邊之前已經在finalRoll的時候塞到gameIcon裡面了..現在要把他抽回來  
                existSpineAniNode = this._slotMachineController.getAndRemoveSymbolAniNodeInReel(outIndex, inIconIndex);
            }
            allIconAniDataForRound.push(iconAniData);//-播放群組[{groupId,reelindex,iocnindex,odd}]PS--同樣群組的會放在一起
            //--這邊要在測試再檢查發現已經有重複的物件在_aryRunningNode裡面會變怎樣,是否如同bug那樣就不拉上來了--20250623
            if (existSpineAniNode) {
                this._processSymbolData.setExistIconAniToAniController(existSpineAniNode, iconAniData, symbol2ds[outIndex][inIconIndex]);
            } else {
                this.setSymbolIconAnimation(iconAniData, symbol2ds);
            }
            this.setSymbolAwardBoxAnimation(iconAniData);
        } else {
            //--wild的icon在oneRollEnd的時候已經推進去了(這邊要塞group的資料)
            /**
            自己挖得巨坑..算分工具是會給予wild的位置資料
            只是因為早期開發時,wild與表演層是在不同的層級當中也不會進入runningNode
            所以送進來的資料是挑掉wild的(沒有推到allIconAniDataForRound裡面,所以在playWinInThisRound的資料中是沒有wild的)
            再送QA時要需要重新再把wild的資料放回runningNode裡面..所以變成自己要再檢查補資料回去
            PS-下個專案不要再把wild與表演層分開了..
             */
            //--connectbox
            //--這邊要在處理如果已經有connectbox的話的下一步...
            //--這邊其實是不會進來的
            let connectBox = this.setSymbolAwardBoxAnimation(iconAniData);
            if (connectBox) {
                connectBox[DYN_NODE_PROPERTIES.GROUP_ID].push(99);
            }
            //--這邊其實是不會進來的
            //--wild
            this._showAniSystem.addGroupByReelIndexAndIconIndexWithIconID({
                reelIndex: outIndex,
                iconIndex: inIconIndex,
                iconID: this.getWildIconData(outIndex, this._currentSlotInfo.reelInfo.symbolData).wild,
                groupId
            });
        }
    }

    //--沒得分也要秀其他的icon動畫
    private async handleNoWinCase(): Promise<void> {

        this._showAniSystem.sortAnimationLayer();//--sort layer
        await this._showAniSystem.playNoWinInThisRound();
    }


    private getLoadLanguageSpine = async (prefabKey: string, bonusData: ShowAniData): Promise<{ spNode: Node, aniData: ShowAniData }> => {

        let spineLanguageNode = await this._showAniSystem.addSPNodeInRunningForAwait(prefabKey, bonusData, 98);
        return spineLanguageNode;
    }

    private async createBonusIconData(bonusData: ShowAniData): Promise<void> {
        const aniShowNode = FindNode.findChildByNameRecursive(this._showAniSystem.node, 'SymbolAniDisplayNode');
        const targetShowAniData = bonusData;
        const prefabKey: string = (targetShowAniData.camp == 0) ? PFB_SYMBOL_ANI + '10' : PFB_SYMBOL_ANI + '11';
        const bonusDataWithLanguage: { spNode: Node, aniData: ShowAniData } = await this.getLoadLanguageSpine(prefabKey, targetShowAniData);
        let cop: SpineController = <SpineController>(AniSysTools.findAndGetIAniComponent(bonusDataWithLanguage.spNode) as IAnimationControl);
        cop.init();
        const wPos = this._slotMachineController.getSymbolWorldPosition(bonusDataWithLanguage.aniData.reelIndex, bonusDataWithLanguage.aniData.iconIndex);
        this._fgBonusManager.setSingleWorldPosByIndex(bonusDataWithLanguage.aniData.reelIndex, bonusDataWithLanguage.aniData.iconIndex, wPos);
        const localPos: Vec3 = aniShowNode.getComponent(UITransform).convertToNodeSpaceAR(wPos);
        bonusDataWithLanguage.spNode.setPosition(localPos);
        bonusDataWithLanguage.spNode.getComponent(UIOpacity).opacity = 255;
        cop.playAni('appear');
        //await GameUtils.Defer(200);
        await GameUtils.DeferByTweenPromise(200 / 1000);//--原本單位是毫秒現在換算成秒
    }



    private createWildIconData(wildData: RPSWildData): void {
        //-get world position
        let wpos = this._slotMachineController.getSymbolWorldPosition(wildData.reelIndex, wildData.iconIndex);
        let wildNode = this._processSymbolData.createWildIconData(wildData, wpos);
        const wildDisplayNode = this._rpsWildSystem.singleSlotItemNode;
        let localPos: Vec3 = wildDisplayNode.getComponent(UITransform).convertToNodeSpaceAR(wpos);
        wildNode.active = true;
        wildDisplayNode.addChild(wildNode);
        let aniInterfaceComponent: RPSWildAnimationController = <RPSWildAnimationController>(AniSysTools.findAndGetIAniComponent(wildNode) as IAnimationControl);
        //--20250619(因為wildSystem會在這邊關閉wild的icon,所以要先打開(closeWildAniNodeWithoutDoubleWild))
        aniInterfaceComponent.node.active = true;
        this._rpsWildSystem.setWildIcon(aniInterfaceComponent, wildData, {
            reelIndex: wildData.reelIndex,
            iconIndex: wildData.iconIndex,
            iconID: wildData.wild,
            groupID: 99
        });

        wildNode.setPosition(localPos);
        this._rpsWildSystem.playWildFirstAppearAni(wildData.camp);
    }

    private setSymbolIconAnimation(aniIconData: SymbolIconAinData, symbolData: number[][]): void {
        this._processSymbolData.setSymbolIconAnimation(aniIconData, symbolData);
    }


    private setSymbolAwardBoxAnimation(aniIconData: SymbolIconAinData): Node | null {

        const connectBox = this._processSymbolData.setSymbolAwardBoxAnimation(aniIconData);
        if (connectBox) {
            if (this._fgBonusManager.isWorking) {
                connectBox.active = false;
            } else if (this._rpsWildSystem.isWorking) {
                return connectBox;
            }
        }
        //--wild的connectBox這時候會是回傳null
        return null
    }

    private setWildIconDarkness = () => {
        this._slotMachineController.setWildModeForGameIconDarkness();
    }

    private async checkNextRound(): Promise<void> {

        if (this._serverBackSlotInfo.reSpinReelInfo.length > 0) {
            this._rpsWildSystem.setResultTitle(3);
            const data: IProcessSlotData = this._serverBackSlotInfo.reSpinReelInfo.shift();
            //======這邊要小心,直接換資料了============================================================
            this._currentSlotInfo = data;
            //-_currentSlotInfo
            const round = this._rpsWildSystem.guess_Round;
            this._rpsWildSystem.guess_Round = round + 1;
            this.changeWildState(data);
            await this._showAniSystem.changeWildFrame();
            this.changeGameMode(GameState.RE_SPINE);
            this.processRound(GameState.RE_SPINE, data);

        } else if (this._serverBackSlotInfo.freeGameReelInfo.length > 0) {

            const fgData: IProcessFGData = this._serverBackSlotInfo.freeGameReelInfo.shift();
            const symbol2dsAndCamp = this.getIconIDTo2DArrayWithCamp(fgData.reelInfo.symbolData);
            if (!this._fgBonusManager.isWorking) {
                this._isBuyFG = false;
                this._currentCampData = symbol2dsAndCamp.camp;//--開啟FG的陣營
                this._showAniSystem.currentCampFg = symbol2dsAndCamp.camp;
                this._processSymbolData.currentCamp = symbol2dsAndCamp.camp;
                //--第一次進FG.準備開啟轉場
                this._slotMachineController.reSetCurrentAllSymbolList_FG();
                this._gateN2FTransition.openStartTransition();
                await this._gateN2FTransition.setCamp(symbol2dsAndCamp.camp);//--這個要用算的,在serverBack的時候算
                this._rpsWildSystem.closeWildSymbolItemForTransition();
                this._buyFGController.closeForFG();
                await this._gateN2FTransition.playAinForStart(this.allTransitionCloseDoorReadyHandler);
                //---轉場結束相關的資料重設(in)
                this._showContainerController.reSetContainerLayer();
                this._fgBonusManager.openFGBonus(symbol2dsAndCamp.camp);

            } else {
                this._fgBonusManager.cleanThisRoundForNext();
            }


            //======這邊要小心,直接換資料了============================================================
            this._currentSlotInfo = fgData;
            //--每一輪的盤面資料都要倒進去
            this._fgBonusManager.setSingleRoundData(symbol2dsAndCamp.symbol2ds);
            this.processRound(GameState.FREE_GAME, fgData);

        } else {

            if (this._fgBonusManager.isWorking) {
                //--結算轉場+移除fg
                this._gateN2FTransition.resetState();
                this._gateN2FTransition.transitionState = TransitionsState.OUT;
                //--舊版只計算FG的獎金
                //let totalWinScore: number = (this._serverBackSlotInfo.totalOddsForFG * this._serverBackSlotInfo.betValue).fixed();
                //--新版是會計算FG+NG的獎金(跟幽靈旅店相同)-20250523
                let totalWinScore: number = (this._serverBackSlotInfo.allRoundOdds * this._serverBackSlotInfo.betValue).fixed();
                await this._gateN2FTransition.closeFG(totalWinScore);
                this._showAniSystem.cleanAllPlayingAniForNewRound();
                this._showAniSystem.stopShowVerticalAni();
                //--20250610這邊要換掉FG陣營的spine skin圖片
                this._slotMachineController.resetSpineAniNodeSkinForCampAfterFG();
                this._showAniSystem.currentCampFg = -1;
                this._processSymbolData.currentCamp = -1;
                this._fgBonusManager.closeFGBonus();
                this._rpsWildSystem.openWildSystemVisible();
                this._showContainerController.reSetBkgContainerAni();
                this._slotMachineController.closeOrOpenAllGameIconBright(false);

            }
            this._rpsWildSystem.checkWildWithoutReSpin();
            this.changeGameMode(GameState.NORMAL);
            this.processNormalRound();
        }
    }

    //--freeGame/reSpine的處理
    private async processRound(gameState: GameState, data: IProcessSlotData): Promise<void> {

        //--盤面reel重新排列
        const fgCampData = this.getIconCampForIcon2DArray(data.reelInfo.symbolData);
        let delayTime = 0;
        if (gameState == GameState.RE_SPINE) {
            this._slotMachineController.setGameState(gameState);
            this._rpsWildSystem.startWildSystem();//--每一輪都進入且檢查是否吻合開始計算勝場條件
            delayTime = SPIN_DELAY;
        } else {
            this._slotMachineController.setGameState(gameState, fgCampData);
            this._fgBonusManager.changeTotalRounds();//--進行下一輪的FG
            delayTime = FG_DELAY; // 使用定義的延遲常數
        }

        this._showContainerController.changeGameMode(gameState, fgCampData);
        if (!this._startGetScoreInThisRound) {
            GenericUIManager.instance.showBottomTextStartSpin();
        }

        /**
         * 這是給 this._slotMachineController.stopRollCallBack
         * 使用的資料,因為他會直接灌進stopSpin裡面
         */
        this._temporaryIProcessSlotData = data;
        this.startSpin(false);
        //await GameUtils.Defer(delayTime); // 使用定義的延遲常數
        await GameUtils.DeferByTweenPromise(delayTime / 1000); // 使用定義的延遲常數
        this.stopSpin(data);
    }

    //---wild重置資料
    private changeWildState(data: IProcessSlotData): void {

        if (this._rpsWildSystem.isWorking) {
            if (this._rpsWildSystem.wildState >= RPSWildState.WILD_2) {
                let connectBox: Node[] = this._showAniSystem.getWildConnectBoxNode();
                for (let item of connectBox) {
                    item.setScale(v3(1.2, 1.2, 1.2));
                }
            }

            this._rpsWildSystem.resetSingleSlot();
            //----左邊的wild
            let leftWildComp: RPSWildAnimationController = this._rpsWildSystem.wild_left;
            let wildData = this.getWildIconData(FORECAST_FOR_REEL, data.reelInfo.symbolData);
            wildData.camp = 0;
            this._processSymbolData.reSetWildNodeDataWithComponent(leftWildComp, wildData);
            leftWildComp.campData = wildData.camp;

            //----右邊的wild
            let rightWildComp: RPSWildAnimationController = this._rpsWildSystem.wild_right;
            let wildData_R = this.getWildIconData(FORECAST_REEL, data.reelInfo.symbolData);
            this._processSymbolData.reSetWildNodeDataWithComponent(rightWildComp, wildData_R);
            wildData_R.camp = 1;
            rightWildComp.campData = wildData_R.camp;
        }
    }

    //--正常NG的處理
    /**
     * 正常結束這一round的處理
     * 當fg和reSpine的資料都清空後(或是為空)即進入結束這一round的處理
     */
    private async processNormalRound(freeEnd: boolean = false): Promise<void> {

        //--盤面reel重新排列 
        this._isThisRound = false; //--這一輪結束後要重置為false
        this.resetDataForNewRound();//-結束這一round後重置資料0624(新增)
        this._slotMachineController.setGameState(GameState.NORMAL);
        this._showContainerController.changeGameMode(GameState.NORMAL, NO_CAMP_DATA); // 使用定義的常數
        if (!this._gateN2FTransition.isRunning && !GenericUIManager.instance.isAutoMode) {
            this._buyFGController.enableBuyFgBtn();
        }

        NotifyCation.getInstance().emitSync(NotifySubject.GAME_VIEW_SUBJECT, GameViewEvents.SHOW_END, null);
    }

    //--依照group分類
    private expandWinLineDataForGroup(value: SymbolIconAinData[]): GroupAniData[][] {

        if (!value || value.length === 0) {
            return [];
        }

        const result: GroupAniData[][] = [];
        let currentGroup: GroupAniData[] = [];
        let currentGroupId: number | null = null;

        for (const item of value) {

            if (currentGroupId === null) {

                currentGroupId = item.groupId;
                currentGroup.push({
                    groupID: item.groupId,
                    reelIndex: item.outIndex,
                    iconIndex: item.iconIndex,
                    odd: item.score
                });

            } else if (currentGroupId === item.groupId) {

                currentGroup.push({
                    groupID: item.groupId,
                    reelIndex: item.outIndex,
                    iconIndex: item.iconIndex,
                    odd: item.score
                });

            } else {

                result.push(currentGroup);
                currentGroup = [{
                    groupID: item.groupId,
                    reelIndex: item.outIndex,
                    iconIndex: item.iconIndex,
                    odd: item.score
                }];
                currentGroupId = item.groupId;
            }
        }

        if (currentGroup.length > 0) {
            result.push(currentGroup);
        }

        return result;
    }

    /**
   * 滿足openOrCloseSingleGameIconBright的資料格式
   * 用來開關icon的亮度
   * @returns 
   */
    private getWinSymbolDataForBright(value: SymbolIconAinData[]): { reelIndex: number, iconIndex: number[], brightnessFlag: boolean }[] {

        const returnData: { reelIndex: number; iconIndex: number[]; brightnessFlag: boolean }[] = [];
        const reelDataMap: Map<number, { reelIndex: number, iconIndex: Set<number>, brightnessFlag: boolean }> = new Map();
        for (let iconData of value) {

            if (!reelDataMap.has(iconData.outIndex)) {
                reelDataMap.set(iconData.outIndex, { reelIndex: iconData.outIndex, iconIndex: new Set<number>(), brightnessFlag: false });
            }
            const reelData = reelDataMap.get(iconData.outIndex);
            if (!reelData.iconIndex.has(iconData.iconIndex)) {
                // 如果 iconIndex 不存在，則添加到 reelData.iconIndex 中
                reelData.iconIndex.add(iconData.iconIndex);
            }
        }
        return returnData;
    }

    private getFGBonusData(reelID: number, iconData: IconData[][]): ShowAniData[] {

        const symbol2dsAndCamp = this.getIconIDTo2DArrayWithCamp(iconData);
        const symbolData = symbol2dsAndCamp.symbol2ds;
        const bonusDatas: ShowAniData[] = [];
        let returnData: ShowAniData =
        {
            reelIndex: -1,
            iconIndex: -1,
            iconID: -1,
            camp: symbol2dsAndCamp.camp
        };

        let targetReel: number[] = symbolData[reelID];//--會有不同的遊戲狀態(reSpin/freeGame)的資料,不能直接取結果的盤面
        for (let i: number = 0; i < targetReel.length; i++) {
            if (SPECIAL_SYMBOL_LIST.includes(targetReel[i])) {
                returnData =
                {
                    reelIndex: reelID,
                    iconIndex: i,
                    iconID: targetReel[i],
                    camp: symbol2dsAndCamp.camp
                }
                bonusDatas.push(returnData);
                //break;
            }
        }
        return bonusDatas;
    }

    /**
     * 20250417
     * 78為了細單要取得陣營,所以將原本的ReelInfo.symbolData改成IconData(原本是number[][])
     * ps--slotMachine需要的是number[][]的資料,所以要將IconData[][]轉出number[][]
     * @param iconData2DArray {iconID: number, camp: number}[][] 2D陣列
     * @returns 
     */
    private getIconIDTo2DArray(iconData2DArray: IconData[][]): number[][] {
        const ary2d: number[][] = [];
        for (const row of iconData2DArray) {
            const newRow: number[] = [];
            for (const iconData of row) {
                newRow.push(iconData.iconID);
            }
            ary2d.push(newRow);
        }
        return ary2d;
    }

    private getIconIDTo2DArrayWithCamp(iconData2DArray: IconData[][]): { symbol2ds: number[][], camp: number } {
        const ary2d: number[][] = this.getIconIDTo2DArray(iconData2DArray);
        const campData = iconData2DArray[0][0].camp;

        return { symbol2ds: ary2d, camp: campData };
    }

    private getIconCampForIcon2DArray(iconData2DArray: IconData[][]): number {
        return iconData2DArray[0][0].camp;
    }

    private getWildIconData(reelID: number, iconData: IconData[][]): RPSWildData {
        const symbol2dsAndCamp = this.getIconIDTo2DArrayWithCamp(iconData);
        const symbolData = symbol2dsAndCamp.symbol2ds;
        const returnData: RPSWildData =
        {
            reelIndex: -1,
            iconIndex: -1,
            wild: -1,
            camp: -1
        };

        //let targetReel: number[] = this._currentSlotInfo.reelInfo.symbolData[reelID];
        let targetReel: number[] = symbolData[reelID];//--會有不同的遊戲狀態(reSpin/freeGame)的資料,不能直接取結果的盤面
        for (let i: number = 0; i < targetReel.length; i++) {
            if (WILD_LIST.includes(targetReel[i])) {
                returnData.reelIndex = reelID;
                returnData.iconIndex = i;
                returnData.wild = targetReel[i];
                break;
            }
        }
        return returnData;
    }




}