import { Component, Label, _decorator, Node, Game } from "cc";
import { AnimationController, AnimationStateType, GameGlobalKeys, GameUtilsTools } from "../../ReferencePath";
import { GlobalAccessReader } from "../../DefinitionGameData1016/AccessDefs/GlobalAccess";
import { GameState } from "../../ReferencePath";
const { ccclass, property } = _decorator;
const ANIMATION_SCORE_TYPE = {
    In: 'In',
    Out: 'Out',
    Loop: 'Loop',
    Default: 'Default'
};

const DEFAULT_ANI_TIME = 0.33; // 預設動畫時間
@ccclass('WinScore')
export class WinScore extends Component {

    @property({ type: Node, visible: true, displayName: "WinScoreNode", tooltip: "裝得分動畫labelNode" })
    private _winScoreLabelNode: Node = null;

    @property({ type: AnimationController, visible: true, displayName: "WinScoreAnimationController", tooltip: "得分動畫控制器" })
    private _winScoreAniController: AnimationController = null;

    private _finishResolvePromise: (() => void) | undefined; // promise resolve 函式(stop使用)
    private _winScoreLabel: Label = null;
    private _dirtyFirstOnLoad: boolean = false;
    private _currentScore: number = 0; // 當前分數
    private _isForceStopped = false;
    private _status: string = '';
    private _canceling: boolean = false;
    private _mapAniTimeData: Map<string, number>;
    /**
     * in 0.33s
     * out 0.33s
     */

    get currentScore(): number {
        return this._currentScore;
    }

    set canceling(value: boolean) {
        this._canceling = value;
    }

    constructor() {
        super();

    }

    public test1(): void {
        this.showFinalScoreIn(1000);
    }

    protected onLoad(): void {

        if (this._dirtyFirstOnLoad) return;
        this._dirtyFirstOnLoad = true;
        this.init();
    }

    public init(): void {

        if (!this._dirtyFirstOnLoad) return;
        this._winScoreLabel = this._winScoreLabelNode.getComponent(Label);
        if (!this._winScoreLabel) {
            console.error("WinScoreNode must have a Label component");
        }
        this.setScoreLabel(0); // 初始化分數顯示為0
        this._winScoreAniController.init();
        this._isForceStopped = false;


    }

    public register(): void {

        const timeDataList = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList);

        if (!this._mapAniTimeData) {

            this._mapAniTimeData = new Map<string, number>(
                [
                    [ANIMATION_SCORE_TYPE.In, timeDataList.get(cfg => cfg.score?.in)],
                    [ANIMATION_SCORE_TYPE.Out, timeDataList.get(cfg => cfg.score?.out)],
                    [ANIMATION_SCORE_TYPE.Loop, timeDataList.get(cfg => cfg.score?.loop)]
                ]
            );
        } else {
            this._mapAniTimeData.set(ANIMATION_SCORE_TYPE.In, timeDataList.get(cfg => cfg.score?.in));
            this._mapAniTimeData.set(ANIMATION_SCORE_TYPE.Out, timeDataList.get(cfg => cfg.score?.out));
            this._mapAniTimeData.set(ANIMATION_SCORE_TYPE.Loop, timeDataList.get(cfg => cfg.score?.loop));
        }



    }

    public reset(): void {
        this.setScoreLabel(0);
        this._isForceStopped = false;
    }

    public setScoreLabel(value: number): void {

        this._currentScore = value;
        this._winScoreLabel.string = value.numberComma();
    }

    //---停止更新--(new Round開始前清除輪播系統)
    public stopToDefault(): void {

        this._isForceStopped = true;
        this._winScoreAniController.stopAni();
        this.safeResolveFinishPromise();
    }

    public resetStatus(): void {
        this._status = ANIMATION_SCORE_TYPE.Default;
    }

    public forceGoDefaultAndReset(): void {

        this.safeResolveFinishPromise();
        this._isForceStopped = true;
        this.forceToDefault();
        this.resetStatus();
        this.reset();
    }

    public async showFinalScoreIn(finalScore: number): Promise<void> {

        if (this._isForceStopped) return;

        if (this._finishResolvePromise) {
            this.safeResolveFinishPromise();
            this.forceToDefault();

        }

        this._status = ANIMATION_SCORE_TYPE.In;
        return new Promise<void>(async (resolve) => {
            this._finishResolvePromise = resolve;
            this.setScoreLabel(finalScore);
            this.node.active = true;
            const aniTime = this._mapAniTimeData.get(ANIMATION_SCORE_TYPE.In) ?? DEFAULT_ANI_TIME; // 預設動畫時間
            this._winScoreAniController.changeSpeedWithAep({ aniState: ANIMATION_SCORE_TYPE.In }, aniTime);
            await this._winScoreAniController.playAniInPromise({ aniState: ANIMATION_SCORE_TYPE.In });
            this._status = ANIMATION_SCORE_TYPE.Loop;
            this.safeResolveFinishPromise();
        })
    }
    //--退場
    public async showFinalScoreOut(): Promise<void> {

        if (this._isForceStopped) return;
        //--沒用到
        if (this._canceling) {
            this.cancelAniAndResolve();
            return;
        }
        //--沒用到
        if (this._finishResolvePromise) {
            this.safeResolveFinishPromise();
            this.forceToDefault();
        }

        this._status = ANIMATION_SCORE_TYPE.Out;
        return new Promise<void>(async (resolve) => {
            this._finishResolvePromise = resolve;
            this.node.active = true;
            const aniTime = this._mapAniTimeData.get(ANIMATION_SCORE_TYPE.Out) ?? DEFAULT_ANI_TIME; // 預設動畫時間
            this._winScoreAniController.changeSpeedWithAep({ aniState: ANIMATION_SCORE_TYPE.Out }, aniTime);
            await this._winScoreAniController.playAniInPromise({ aniState: ANIMATION_SCORE_TYPE.Out });
            this._status = ANIMATION_SCORE_TYPE.Default;
            this.safeResolveFinishPromise();
        })
    }



    public async processAbortCancel(): Promise<void> {

        if (this._status === ANIMATION_SCORE_TYPE.Default) return;
        //const gameState = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);
        if (this._status === ANIMATION_SCORE_TYPE.In) {
            this._finishResolvePromise = null;
            this._winScoreAniController.gotoPlayLastFrame();
            const wait = GameUtilsTools.DeferByTweenPromiseWithCancel(0.2);
            await wait.promise;
            await this.showFinalScoreOut();

        } else if (this._status === ANIMATION_SCORE_TYPE.Loop) {
            this._finishResolvePromise = null;
            await this.showFinalScoreOut();
        } else if (this._status === ANIMATION_SCORE_TYPE.Out) {
            //--已經在退場中--
            this._status = ANIMATION_SCORE_TYPE.Default;
            this.cancelAniAndResolve();
            this._finishResolvePromise = null;
        }
    }

    public forceToDefault(): void {
        this._winScoreAniController.goBackToDefault();
    }

    //--20251020 強制到最後一幀
    public forceToLastFrame(): void {
        this._winScoreAniController.gotoPlayLastFrame();
    }

    //--20251020 強制取消動畫並結束promise
    public cancelAniAndResolve(): void {
        this.cleanPreviousAni();
        this.safeResolveFinishPromise();
    }

    public cleanPreviousAni(): void {

        this._isForceStopped = true;
        this._winScoreAniController.goBackToDefault();
        this.node.active = false; // 隱藏節點
        this.setScoreLabel(0); // 重置分數顯示
    }

    private safeResolveFinishPromise(): void {

        if (this._finishResolvePromise) {
            this._finishResolvePromise();
            this._finishResolvePromise = undefined;
            //this.cleanPreviousAni();
        }
    }





}