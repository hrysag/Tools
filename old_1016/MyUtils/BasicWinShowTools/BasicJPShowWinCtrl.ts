import { _decorator, CCFloat, CCInteger, Component, Game, Node } from 'cc';
import { BasicJpUIBoard } from './components/BasicJpUIBoard';
import { JpDigitsAniNumber } from './components/JpDigitsAniNumber';
import { WinType } from './Definitions/ShowWinDef';
import { JpSoundController } from './components/JpSoundController';
//import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
import { GameUtilsTools } from '../GameUtilsTool';
import { BasicGameStepDelayTime } from '../BasicStepDelayTimeList/BasicGameStepDelayTime';
import { IJpInterruptTime } from './Definitions/ShowWinDef';
import { AsyncScope } from '../AsyncScope/AsyncScope';
import { AudioManager } from 'db://assets/Scripts/ModuleEntry';
const DEBUG_LOG_TITLE = 'BasicJPShowWinCtrl';
const { ccclass, property } = _decorator;
const SIGNAL_KEY = 'JPSHOW_SIGNAL';
@ccclass('BasicJPShowWinCtrl')
export class BasicJPShowWinCtrl extends Component {

    @property({ type: BasicJpUIBoard, visible: true, displayName: '大獎顯示BigWin', tooltip: '大獎顯示BasicJpUIBoard' })
    protected _bigWin: BasicJpUIBoard = null;

    @property({ type: BasicJpUIBoard, visible: true, displayName: '大獎顯示SuperWin', tooltip: '大獎顯示BasicJpUIBoard' })
    protected _superWin: BasicJpUIBoard = null;

    @property({ type: BasicJpUIBoard, visible: true, displayName: '大獎顯示EpicWin', tooltip: '大獎顯示BasicJpUIBoard' })
    protected _epicWin: BasicJpUIBoard = null;

    @property({ type: BasicJpUIBoard, visible: true, displayName: '大獎顯示MegaWin', tooltip: '大獎顯示BasicJpUIBoard' })
    protected _megaWin: BasicJpUIBoard = null;

    @property({ type: JpDigitsAniNumber, visible: true, displayName: 'JP數字顯示', tooltip: 'JP數字顯示' })
    protected _jpDigitsAniNumber: JpDigitsAniNumber = null;

    @property({ type: JpSoundController, visible: true, displayName: 'JP音效控制器', tooltip: 'JP音樂' })
    protected _jpSoundController: JpSoundController = null; //---音效控制

    @property({ type: Node, visible: true, displayName: 'blockSensor', tooltip: '點擊空白處感應區' })
    protected _blockSensor: Node = null;

    @property({ type: CCFloat, visible: true, displayName: 'winScore duringTime', tooltip: '跑分動畫持續時間' })
    protected _winScoreDuringTime: number = 4.8;//--預設跑分動畫持續時間

    @property({ type: CCFloat, visible: true, displayName: 'winAniLoop duringTime', tooltip: '進場後面板持續時間' })
    protected _winAniLoopDuringTime: number = 2.0;//--預設進場後動畫轉換持續時間

    protected _currentJpType: WinType = null;
    protected _currentJpBoard: BasicJpUIBoard = null;
    protected _onlyOnceFlag: boolean = false; //---結尾聲用的(因為動畫與公版的聲音對不起來)
    protected _musicFadeOutComplete: () => void = null; // 音樂淡出完成的回調函式
    protected _resolvePromise: (() => void) | undefined; // (非同步,主要靠這個resolve來讓外面的流程繼續)
    protected _mapJpTypeToBoard: Map<WinType, BasicJpUIBoard> = new Map<WinType, BasicJpUIBoard>();
    protected _dirtyFlag: boolean = false;
    protected _frameEventCallBack: () => void = null;//--給可能需要用到frame event的子類別用的
    //protected _gameStepDelayTimeList: BasicGameStepDelayTime;
    protected _startTime: number = 0;
    //protected _canInterruptTime: number = 0;//--可以被阻斷的時間
    //private _async: AsyncScope;
    //--紀錄每個類型的中斷時間資料
    protected _interruptTimeData: Map<WinType, IJpInterruptTime>;
    protected _isInterrupted: boolean = false;  // 中斷檢查
    protected _isProcessingClick: boolean = false; // 防止重入的旗標
    protected _firstClickAborted: boolean = false; // 標記第一次點擊是否被中斷

    set frameEventCallBack(value: () => void) {
        this._frameEventCallBack = value;
    }

    constructor() {
        super();
    }

    protected onLoad(): void {
        if (this._dirtyFlag) return;
        this._dirtyFlag = true;
        this.init();
    }

    protected start(): void {

        this._bigWin?.init();
        this._superWin?.init();
        this._epicWin?.init();
        this._megaWin?.init();

        this._mapJpTypeToBoard.set(WinType.BigWin, this._bigWin);
        this._mapJpTypeToBoard.set(WinType.SuperWin, this._superWin);
        this._mapJpTypeToBoard.set(WinType.EpicWin, this._epicWin);
        this._mapJpTypeToBoard.set(WinType.MegaWin, this._megaWin);

        this._bigWin.node.active = false;
        this._superWin.node.active = false;
        this._epicWin.node.active = false;
        this._megaWin.node.active = false;
        this.node.active = false;
        this.node.parent.active = false;

    }

    //--這邊改成外部注入-todo-20251023
    //--override it
    public register(...args): void {
        //this._async = AsyncScope.getInstance();
    }

    public init(): void {
        if (!this._dirtyFlag) return;

    }

    public reset(): void {

        this._currentJpType = null;
        this._currentJpBoard = null;
        this._onlyOnceFlag = false;
        this._resolvePromise = undefined;
        this._isInterrupted = false;
        this._firstClickAborted = false;

        if (this._bigWin.node) {
            this._bigWin.node.active = false;
        }

        if (this._epicWin.node) {
            this._epicWin.node.active = false;
        }

        if (this._megaWin.node) {
            this._megaWin.node.active = false;
        }

        if (this._superWin.node) {
            this._superWin.node.active = false;
        }

        this.node.active = false;
        this.node.parent.active = false;
        this._startTime = 0;
    }

    public async showJPWin(odds: number, totalBet: number): Promise<void> {
        this._startTime = Date.now();//--記錄開始時間(阻斷的時候會需要用到)

        return new Promise(async (resolve, reject) => {

            this.reset();
            this.node.active = true;
            this.node.parent.active = true;
            this._resolvePromise = resolve;
            this._onlyOnceFlag = false; //---重置結尾聲
            this._isInterrupted = false;
            this._firstClickAborted = false;

            this._currentJpType = this.getJpType(odds);
            if (this._currentJpType === null) {
                //GameUtilsTools.debugLog(DEBUG_LOG_TITLE, 'showJPWin', { odds, totalBet });
                return;
            }

            this._currentJpBoard = this._mapJpTypeToBoard.get(this._currentJpType);
            this._currentJpBoard.jackpotLoopDuration = this._interruptTimeData.get(this._currentJpType)?.loopDurationTime;
            this._currentJpBoard.fastLoopDuration = this._interruptTimeData.get(this._currentJpType)?.fastLoopDuration;
            this._jpDigitsAniNumber.duration = this._interruptTimeData.get(this._currentJpType)?.runDurationTime;

            this.addFrameEventCallBack();
            //this._currentJpBoard.node.active = true;
            //--流程-4.8S跑分 2秒停留Loop
            this._blockSensor?.on(Node.EventType.TOUCH_END, this.blockBtnClickHandler);

            const totalScore = (odds * totalBet).fixed();

            //====step1 進場動畫+播放音效===============================
            this.processBoardIn();//--播放動畫
            this.processPlayJPSound();//--播放音效
            this.fadeInOrOutBGMusic(1);//--fade out

            //====step2 跑分動畫========================================
            await this.processRunScoreLabel(totalScore);
            //--檢查中斷
            if (this._isInterrupted) {
                //GameUtilsTools.debugLog(DEBUG_LOG_TITLE, '[showJPWin] Interrupted after runScore');
                return;
            }

            //====step3 wait loop========================================
            const loopDurationTime = this._currentJpBoard.jackpotLoopDuration;
            await this._currentJpBoard.waitLoopDuration(loopDurationTime);

            if (this._isInterrupted) {
                //GameUtilsTools.debugLog(DEBUG_LOG_TITLE, '[showJPWin] Interrupted during loopDuration');
                return;
            }

            //====step4 out and end process========================================

            this.fadeInOrOutBGMusic(0);//--fade in
            this.onScoreRunEnd(false);
            await this.processBoardGoLoopAndClose();

            this.fadeOutFinish();
            this.finishAndRemove();
        });
    }

    //-中斷目前的流程
    public interruptProcess(): void {

    }

    //--override it
    protected addFrameEventCallBack(): void {

    }

    //-override it(要把要跑的label傳進去)
    protected async processRunScoreLabel(value: number): Promise<void> {
        await this._jpDigitsAniNumber.showJpDigitsAniNumber(value);
    }


    protected getJpType(odds: number): WinType {

        let type: WinType = null;
        if (odds >= 25 && odds <= 50) {
            type = WinType.BigWin;
        } else if (odds > 50 && odds <= 100) {
            type = WinType.SuperWin;
        } else if (odds > 100 && odds <= 200) {
            type = WinType.MegaWin;
        } else if (odds > 200) {
            type = WinType.EpicWin;
        }
        return type;
    }

    protected blockBtnClickHandler = async (): Promise<void> => {
        const currentTime = Date.now() - this._startTime;
        const canInterruptTime = this._interruptTimeData.get(this._currentJpType)?.canInterruptTime;

        // === 步骤 1: 检查是否可以被中断 ===
        if (currentTime < canInterruptTime) {
            /*
            GameUtilsTools.debugLog(DEBUG_LOG_TITLE, '[Click] Too early, ignored', {
                currentTime,
                canInterruptTime
            });*/
            return;
        }

        // === 步骤 2: 获取当前板子状态 ===
        const boardState = {
            isGoIn: this._currentJpBoard.isGoIn,
            isInLoop: this._currentJpBoard.isInLoop,
            isInLoopStage: this._currentJpBoard.isInLoopStage,
            isClosing: this._currentJpBoard.isClosing,
        };

        //GameUtilsTools.debugLog(DEBUG_LOG_TITLE, '[Click] Current state', boardState);

        // === 步骤 3: 如果已经在关闭中，忽略点击 ===
        if (boardState.isClosing) {
            //GameUtilsTools.debugLog(DEBUG_LOG_TITLE, '[Click] Already closing, ignored');
            return;
        }

        // === 步骤 4: 判断是第一次还是第二次点击 ===
        const isSecondClick = boardState.isInLoop && boardState.isInLoopStage;

        if (isSecondClick) {
            // ========== 第二次点击：Loop 等待期间点击，立即中断 ==========
            //GameUtilsTools.debugLog(DEBUG_LOG_TITLE, '[Click] Second click - Force interrupt Loop');

            //  标记第一次点击被中止
            this._firstClickAborted = true;

            // 移除监听器（不需要第三次点击了）
            if (this._blockSensor.hasEventListener(Node.EventType.TOUCH_END, this.blockBtnClickHandler)) {
                this._blockSensor.off(Node.EventType.TOUCH_END, this.blockBtnClickHandler);
            }

            // 直接调用板子的点击处理（会中断 Loop 等待，播放 Out）
            await this.processAniOnClick();

            this.fadeOutFinish();
            this.finishAndRemove();
            return;
        }

        // ========== 第一次点击：In 阶段或跑分期间点击 ==========

        // 防止第一次点击重入
        if (this._isProcessingClick) {
            //GameUtilsTools.debugLog(DEBUG_LOG_TITLE, '[Click] First click already processing, ignored');
            return;
        }

        this._isProcessingClick = true;
        this._firstClickAborted = false;  // 🆕 重置中止标记

        try {
            //GameUtilsTools.debugLog(DEBUG_LOG_TITLE, '[Click] First click - Enter Loop Stage');

            // 标记流程被中断
            this._isInterrupted = true;

            // 强制结束跑分
            this._jpDigitsAniNumber.showFinishWinScore();

            // 结束音效
            this.onScoreRunEnd(true);

            // 恢复背景音乐
            this.fadeInOrOutBGMusic(0);

            // 处理板子动画（会进入 Loop 等待阶段）
            // 注意：这里会 await，在等待期间用户可以第二次点击
            await this.processAniOnClick();

            // 检查是否被第二次点击中止
            if (this._firstClickAborted) {
                //GameUtilsTools.debugLog(DEBUG_LOG_TITLE, '[Click] First click aborted by second click');
                return;  // 被中止，跳过后续清理
            }

            // 如果没有被中止，执行正常的清理流程
            if (this._blockSensor.hasEventListener(Node.EventType.TOUCH_END, this.blockBtnClickHandler)) {
                this._blockSensor.off(Node.EventType.TOUCH_END, this.blockBtnClickHandler);
            }

            this.fadeOutFinish();
            this.finishAndRemove();

        } finally {
            // 重置处理标记
            this._isProcessingClick = false;
        }
    }

    protected finishAndRemove(): void {
        if (this._blockSensor.hasEventListener(Node.EventType.TOUCH_END, this.blockBtnClickHandler)) {
            this._blockSensor.off(Node.EventType.TOUCH_END, this.blockBtnClickHandler);
        }
        if (this._resolvePromise) {
            this._resolvePromise();
            this._resolvePromise = undefined;
        }
        this._currentJpBoard?.goBackToDefault();

        /*
        if (this._jpUIOpacity) {
            this._jpUIOpacity.opacity = 255;
        }*/
        this._musicFadeOutComplete = null;
        this.reset();
    }

    protected fadeOutFinish(): void {
        //this._jpAniController.closeAndStop();
        this._jpDigitsAniNumber.stopJpDigitsAniNumber();
    }
    //=============================<處理動畫相關程序>================================================================================
    //--override it
    protected async processBoardOut(): Promise<void> {
        await this._currentJpBoard.forceOutBoard();
        //this.fadeOutFinish();
    }

    //--override it
    protected processBoardIn(): Promise<void> {

        return Promise.resolve();
    }

    protected async processBoardGoLoopAndClose(): Promise<void> {
        await this._currentJpBoard.goLoopAndClose();
    }

    protected async processAniOnClick(): Promise<void> {

        await this._currentJpBoard.onClickForceOutJpAni();
    }


    //=============================<處理聲音相關程序>================================================================================
    //--override it
    protected processPlayJPSound(): void {
        this._jpSoundController?.playJPSound(this._currentJpType);//--播放音效
    }

    protected onScoreRunEnd = (isClickEnd: boolean): void => {

        if (isClickEnd) {
            this._jpSoundController?.stopSound();
        }
        if (!this._onlyOnceFlag) {
            this._onlyOnceFlag = true; //---只播放一次
            this._jpSoundController?.playSoundEnd(isClickEnd);
        }
    }

    //--0=fadeIn, 1=fadeOut
    protected fadeInOrOutBGMusic(value: number): void {

        const startVolume = (value == 0) ? 0 : 1;
        const endVolume = (value == 0) ? 1 : 0;
        this._musicFadeOutComplete = null;
        if (value == 1) {
            //--fade out
            this._musicFadeOutComplete = () => {
                //---ready
                AudioManager.instance.pauseMusic();
                this._musicFadeOutComplete = null;
            }
        } else {
            //-fade in
            AudioManager.instance.resumeMusic();
        }
        AudioManager.instance.fadeMusicVolume(startVolume, endVolume, 0.5, this._musicFadeOutComplete);
    }

}


