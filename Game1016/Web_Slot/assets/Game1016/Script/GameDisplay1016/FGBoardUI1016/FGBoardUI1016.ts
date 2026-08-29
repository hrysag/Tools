import { _decorator, Component, Node, Button, Label, EventTouch, Game, UIOpacity, tween, Tween } from 'cc';
import { BasicGameBoardUI } from '../../MyUtils/BasicFGUIBoard/BasicGameBoardUI';
import {
    BasicGameGlobalData,
    GameGlobalData,
    GameGlobalKeys,
    GameState,
    AnimationStateType,
    GameUtilsTools,
    IGameStepDelayTimeList
} from '../../ReferencePath';
import { PlaySelector } from '../../MyUtils/AnimationSystemV2/Definitions/IPlayOptions';
import { GlobalAccessReader } from '../../DefinitionGameData1016/AccessDefs/GlobalAccess';
import { AsyncScope } from '../../MyUtils/AsyncScope/AsyncScope';
import { SoundList, AudioSourceList, MusicList } from '../../DefinitionGameData1016/SoundList1016';
import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/ModuleEntry';
//import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
const SIGNAL_KEY = 'FG_UI_CTRL_SIGNAL';
const { ccclass, property } = _decorator;
const FG_BOARD_ANI_MAP = {
    FG_In: 'toFG_In',
    FG_Out: 'toFG_Out',
    FG_Loop: 'toFG_Loop',
    BACK_NG_In: 'toNG_In',
    BACK_NG_Out: 'toNG_Out',
    BACK_NG_Loop: 'toNG_Loop'
}

const DEBUG_LOG_TITLE = 'FGBoardUI1016';


@ccclass('FGBoardUI1016')
export class FGBoardUI1016 extends BasicGameBoardUI {

    @property({ type: Node, visible: true, displayName: '透明按鈕', tooltip: "設定此物件的按鈕物件" })
    protected _btnNode: Node | null = null;

    @property({ type: Node, visible: true, displayName: '顯示次數LabelNode', tooltip: "設定此物件的動畫物件" })
    protected _labelTimesNode: Node | null = null;

    @property({ type: Node, visible: true, displayName: '顯示次數LabelAddNode', tooltip: "刷光文字??!!" })
    protected _labelAddTimesNode: Node | null = null;

    @property({ type: Node, visible: true, displayName: '顯示分數LabelNode', tooltip: "設定此物件的動畫物件" })
    protected _labelScoreNode: Node | null = null;

    @property({ type: Node, visible: true, displayName: '顯示分數LabelAddNode', tooltip: "刷光文字??!!" })
    protected _labelAddScoreNode: Node | null = null;

    @property({ type: UIOpacity, visible: true, displayName: '<跳過>UI淡入淡出', tooltip: "click跳過時的淡入淡出效果" })
    protected _skipUIOpacity: UIOpacity | null = null;

    private _labelPlayTimes: Label | null = null;
    private _labelFXTPlayTimes: Label | null = null;
    private _labelPlayScore: Label | null = null;
    private _labelFXPlayScore: Label | null = null;
    private _isGoIn: boolean = false;
    private _triggerGameState: GameState | null = null;
    //延遲動畫取消函式(for 延遲中斷時,阻斷tweenPromise resolve)
    protected _resolveDelayOnCancel?: () => void;
    private _isClosing = false;
    private _closingPromise: Promise<void> | null = null;
    private _closeRequested = false;
    private _closeOncePromise: Promise<void> | null = null;
    private _playBoardOutCallBack: () => void | null = null;//--20250917新增(觸發退場的時候呼叫的callback)
    private _isInLoop = false;
    private _loopOncePromise: Promise<void> | null = null;
    private _async: AsyncScope;
    private _loopTimeForState: number = 0;

    constructor() {
        super();
        /**
         *  const delay = GameUtilsTools.DeferByTweenPromiseWithCancel(t);
                 this._delayTweenCancel = delay.cancel;
                 await delay.promise; // 等待延遲完成
                 this._delayTweenCancel = null; // 清掉
         */
    }

    public testMode(): void {
        /*
        BasicGameGlobalData.getInstance<GameGlobalData>().setGlobalData(
            GameGlobalKeys.GameState, GameState.FREE_GAME
        );*/
        this.openFGUIBoard(10);
    }

    public override init(): void {

        this._iAnimationController?.init();
        this._labelPlayTimes = this._labelTimesNode.getComponent(Label);
        this._labelFXTPlayTimes = this._labelAddTimesNode.getComponent(Label);
        this._labelPlayScore = this._labelScoreNode.getComponent(Label);
        this._labelFXPlayScore = this._labelAddScoreNode.getComponent(Label);
        this.setFGPlayTimes(0);
        this.setFGPlayScore(0);
        this.goBackToDefault();
        this.node.active = false;
        this._async = AsyncScope.getInstance();
    }

    public override setResultLabel(value: number): void {

        if (this._triggerGameState === GameState.FREE_GAME) {
            this.setFGPlayTimes(value);//--進入FG
        } else if (this._triggerGameState === GameState.NORMAL) {
            this.setFGPlayScore(value);//--離開FG
        }
    }


    public setFGPlayTimes(value: number): void {

        if (this._labelPlayTimes) this._labelPlayTimes.string = value.numberComma();
        if (this._labelFXTPlayTimes) this._labelFXTPlayTimes.string = value.numberComma();
    }

    public setFGPlayScore(value: number): void {
        if (this._labelPlayScore) this._labelPlayScore.string = value.numberComma();
        if (this._labelFXPlayScore) this._labelFXPlayScore.string = value.numberComma();
    }

    public setBoardMode(state: GameState): void {
        this._triggerGameState = state;
    }

    public async closeFGUIBoard(): Promise<void> {
        //--spine動畫0.6s
        const dt = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.fg?.closeBoard);
        this._closeRequested = true;
        if (this._isClosing) return this._closingPromise!;
        this.closeBtnActive();
        this.forceCancelLoopDelay();

        const playKey = this._triggerGameState === GameState.FREE_GAME
            ? FG_BOARD_ANI_MAP.FG_Out
            : FG_BOARD_ANI_MAP.BACK_NG_Out;

        this._isClosing = true;
        if (this._playBoardOutCallBack) {
            try {
                this._playBoardOutCallBack();
            } catch (err) {
                //console.warn('FGBoardUI1016 _playBoardOutCallBack error', err);
                //GameUtilsTools.debugLog(DEBUG_LOG_TITLE, 'playBoardOutCallBack', { err }, 'warn');
            }
        }

        const single = this._async.createAbortScope(SIGNAL_KEY);
        const callbackWrapper = (value: any) => {
            this.cancelBoardAni(true);
            //--20260209-new
            Tween.stopAllByTag(98);
            this._skipUIOpacity.opacity = 0;
        }

        this._closingPromise = this.playBoardOut(playKey, dt).finally(() => {
            this.node.active = false;
            this._isClosing = false;
            this._closingPromise = null;
            //this._closeRequested = false; 
        });

        //--20260209-new
        tween(this._skipUIOpacity)
            .to(0.3, { opacity: 0 })
            .call(() => {
                //this.node.active = true;
            })
            .tag(98)
            .start();


        this._async.registerCancelablePromise(
            SIGNAL_KEY,
            this._closingPromise,
            callbackWrapper,
            single,
            SIGNAL_KEY
        );



        return this._closingPromise;
    }


    public async openFGUIBoard(value: number = 0, boardOutCallBack?: () => void): Promise<void> {
        //--spine動畫0.75s
        const dt = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.fg?.openBoard);
        // 重置關閉狀態
        if (boardOutCallBack) this._playBoardOutCallBack = boardOutCallBack;//--20250917新增(觸發退場的時候呼叫的callback)
        this._closeRequested = false;
        this._closeOncePromise = null;
        this._loopOncePromise = null;
        this._isGoIn = true;
        this.node.active = true;
        //this.openBtnActive();

        const playKey = this._triggerGameState === GameState.FREE_GAME
            ? FG_BOARD_ANI_MAP.FG_In
            : FG_BOARD_ANI_MAP.BACK_NG_In;

        let playSoundKey;
        //const dt = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.fg?.duringBoard);
        if (playKey == FG_BOARD_ANI_MAP.FG_In) {
            playSoundKey = SoundList.fgEnterPage_In;
            this._loopTimeForState = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.fg?.duringBoardIn);
            this.playVoiceIn();
        } else {
            playSoundKey = SoundList.fgExitPage_In;
            this._loopTimeForState = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.fg?.duringBoardOut);
            this.playVoiceOut();
        }

        AudioManager.instance.playSound(playSoundKey, SOUND_TYPE.NORMAL, AudioSourceList.RsAs);
        const signal = this._async.createAbortScope(SIGNAL_KEY);
        const playPromise = this.playBoardIn(value, { aniState: playKey }, dt);

        //--20260209-new
        tween(this._skipUIOpacity)
            .delay(0.4)
            .to(0.5, { opacity: 255 })
            .call(() => {
                //this.node.active = true;
            })
            .tag(99)
            .start();

        const callbackWrapper = (value: any) => {
            this.cancelBoardAni(false);
            AudioManager.instance.stopSound([AudioSourceList.RsAs]);
            //--20260209-new
            Tween.stopAllByTag(99);
            this._skipUIOpacity.opacity = 255;
        }

        await this._async.registerCancelablePromise(
            SIGNAL_KEY,
            playPromise,
            callbackWrapper,
            signal,
            SIGNAL_KEY
        )

        //--結束時關閉
        //AudioManager.instance.stopSound([AudioSourceList.RsAs]);

        this._isGoIn = false;

        if (this._closeRequested || this._isClosing) {
            await this.requestCloseOnce();
            return;
        }

        const playLoopKey = this._triggerGameState === GameState.FREE_GAME
            ? FG_BOARD_ANI_MAP.FG_Loop
            : FG_BOARD_ANI_MAP.BACK_NG_Loop;

        // 正常路徑：切入 Loop、等計時、然後一次性關閉
        await this.ensureLoopThenClose(playLoopKey, this._loopTimeForState);

    }

    private playVoiceOut(): void {

        const odds = GlobalAccessReader.getGlobalData(GameGlobalKeys.RoundTotalOdds);
        let targetList: SoundList[];
        if (odds <= 15) {
            targetList = [SoundList.FG_Out_01, SoundList.FG_Out_03, SoundList.FG_Out_04];
        } else {
            targetList = [SoundList.FG_Out_05, SoundList.FG_Out_06, SoundList.FG_Out_07];
        }

        const randomIndex = GameUtilsTools.getRangeRandomInt(0, targetList.length - 1);
        AudioManager.instance.playSound(targetList[randomIndex], SOUND_TYPE.ONE_SHOT, AudioSourceList.Voice);

    }

    private playVoiceIn(): void {

        const voiceList = [SoundList.FG_In_01, SoundList.FG_In_02, SoundList.FG_In_03, SoundList.FG_In_04, SoundList.FG_In_05];
        const randomIndex = GameUtilsTools.getRangeRandomInt(0, voiceList.length - 1);
        AudioManager.instance.playSound(voiceList[randomIndex], SOUND_TYPE.ONE_SHOT, AudioSourceList.Voice);
    }




    /*
    //--待機<取消-改到由ensureLoopThenClose處理>
    public override async playBoardLoop(mode: PlaySelector = AnimationStateType.Loop): Promise<void> {
        this.cancelBoardAni(false);
        this._isInLoop = true;
        this.setPlayPromise(mode);
        await this.setLoopTimeStep();
    }*/

    private ensureLoopThenClose(playLoopKey: string, dt?: number): Promise<void> {

        if (this._loopOncePromise) return this._loopOncePromise;
        // 若有要求關閉或正在關閉 → 不再啟 Loop，直接加入那次關閉
        if (this._closeRequested || this._isClosing) return this.requestCloseOnce();

        this._loopOncePromise = (async () => {
            // 1取消當前(In)動畫，切 Loop（非阻塞播放）
            this.cancelBoardAni(false);// 中斷 In
            this._isGoIn = false;

            // 中斷後到啟動前<再檢查一次>是否有人要求關閉
            if (this._closeRequested || this._isClosing) {
                await this.requestCloseOnce();
                return;
            }
            this._isInLoop = true;
            // 啟動 Loop，不 await
            //const loopSingle=this._async.createAbortScope(SIGNAL_KEY);
            //const callbackWrapper=(value:any)=>{

            //}
            const loopP = this.setPlayPromise({ aniState: playLoopKey }, dt);
            //const loopP = this.setPlayPromise({ aniState: playLoopKey });
            this.openBtnActive();

            //void loopP.catch((err) => this.logLoopPlayReject(err, playLoopKey));
            // 啟動延遲前<再檢查一次>：若已要求關閉，就不要開延遲
            if (this._closeRequested || this._isClosing) {
                await this.requestCloseOnce();
                return;
            }

            await this.setLoopTimeStep();// 2 等待可強制取消的計時
            await this.requestCloseOnce();// 3 計時完成 → 一次性關閉
        })().finally(() => {

            this._isInLoop = false;
            this._loopOncePromise = null;
        });

        return this._loopOncePromise;
    }

    private requestCloseOnce(): Promise<void> {

        this._closeRequested = true;
        if (this._closeOncePromise) return this._closeOncePromise;
        this._closeOncePromise = this.closeFGUIBoard().finally(() => {
            this._closeRequested = false;
            this._closeOncePromise = null;
        });
        return this._closeOncePromise;
    }

    private forceCancelLoopDelay(): void {

        this._resolveDelayOnCancel?.();
        this._resolveDelayOnCancel = undefined;
    }


    private async setLoopTimeStep(): Promise<void> {
        //--spine動畫1.5s
        //const dt = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.fg?.duringBoard);

        const signal = this._async.createAbortScope(SIGNAL_KEY);
        const delay = this._async.waitSecondsCancelable(
            this._loopTimeForState,
            signal,
            SIGNAL_KEY
        )
        this._resolveDelayOnCancel = () => {
            this._async.cancelByLabel('waitSecondsCancelable');
        }
        //const delay = GameUtilsTools.DeferByTweenPromiseWithCancel(dt);
        //this._resolveDelayOnCancel = delay.forceCancelAndResolve;
        try {
            //await delay.promise;// 等待延遲完成
            await delay;// 等待延遲完成
        } finally {
            this._resolveDelayOnCancel = undefined;// 清掉
        }
    }

    private async onClickHandler(event: EventTouch): Promise<void> {
        //--判斷狀態讓面本呈現正確的樣貌
        //console.log('FGBoardUI1016 onClickHandler', this._isGoIn, this._isClosing);
        event.preventSwallow = true;
        this.forceCancelLoopDelay();
        if (this._isGoIn) {
            // first click(stay--> In）：強切 Loop 並等待計時結束後再關閉
            const playLoopKey = this._triggerGameState === GameState.FREE_GAME
                ? FG_BOARD_ANI_MAP.FG_Loop
                : FG_BOARD_ANI_MAP.BACK_NG_Loop;
            await this.ensureLoopThenClose(playLoopKey, this._loopTimeForState);

        } else if (this._isInLoop) {
            // sceond click（stay--> Loop )：直接關閉（一次性），等待完成
            await this.requestCloseOnce();
        } else {
            // 其他情境（已在關閉中/已關閉）：一起等同一個關閉
            await this.requestCloseOnce();
        }

    }

    private getCurrentGameMode(): GameState {
        //let gameState = BasicGameGlobalData.getInstance<GameGlobalData>().getGlobalData(GameGlobalKeys.GameState);
        let gameState = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);
        //--do something
        return gameState;
    }
    //Utility.addEventHandlerToButton(this._btnBg.node, this, 'onClickHandler');
    private openBtnActive(): void {
        if (!this._btnNode) return;
        this._btnNode.active = true;
        this._btnNode.off(Node.EventType.TOUCH_END, this.onClickHandler, this);
        this._btnNode.on(Node.EventType.TOUCH_END, this.onClickHandler, this, true);

    }

    private closeBtnActive(): void {
        if (!this._btnNode) return;
        this._btnNode.active = false;
        this._btnNode.off(Node.EventType.TOUCH_END, this.onClickHandler, this);
    }


    //=============<debug log>--可以廢棄了,已有global的debugLog輸出工具===================================================
    // 判斷是不是「可預期的取消」
    private isLikelyCancel(err: unknown): boolean {

        if (!err) return this._abort?.signal?.aborted ?? false;
        const msg = (err as any)?.message ?? String(err);
        const name = (err as any)?.name ?? '';

        return (
            this._abort?.signal?.aborted === true ||
            /abort|cancell?ed|stopped|interrupted/i.test(msg) ||
            /AbortError|CanceledError/i.test(name)
        );
    }

    // 播放 promise 的拒絕資訊
    private logLoopPlayReject(err: unknown, playLoopKey: string): void {

        const snapshot = {
            playLoopKey,
            isInLoop: this._isInLoop,
            isClosing: this._isClosing,
            closeRequested: this._closeRequested,
            abortedSignal: this._abort?.signal?.aborted ?? false,
            ts: Date.now(),
        };
        if (this.isLikelyCancel(err)) {
            console.debug('[FGBoardUI1016] loop promise rejected (likely cancel)', snapshot, err);
        } else {
            console.warn('[FGBoardUI1016] loop promise rejected (UNEXPECTED)', snapshot, err);
        }
    }


}


