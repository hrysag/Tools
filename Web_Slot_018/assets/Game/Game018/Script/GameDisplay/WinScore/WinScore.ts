import { _decorator, Component, Game, Label, Node, Tween, tween, UIOpacity, v3 } from 'cc';
import { SpineController } from '../../MyUtils/AnimationSystem/Components/SpineController';
import { AniCtrlPropDef } from '../../MyUtils/AnimationSystem/Components/AniStateLists/AnimationPlayStateBase';
import { GameUtils } from '../../MyUtils/GameUtils';
const { ccclass, property } = _decorator;

@ccclass('WinScore')
export class WinScore extends Component {

    @property({ type: Node, visible: true, displayName: 'winScoreLabelNode', tooltip: '裝得分動畫labelNode' })
    private _winScoreLabelNode: Node = null;

    @property({ type: SpineController, visible: true, displayName: 'AniSpine', tooltip: '得分顯示動畫spine控制器' })
    private _aniSpine: SpineController = null;

    private _winScoreLabel: Label = null;
    private _finishResolvePromise: (() => void) | undefined; // promise resolve 函式(stop使用)
    private _delayTweenCancel: (() => void) | undefined; // 延遲動畫取消函式
    private _isTweening = false;//--真的有夠啦嘰的居然沒有這種通用屬性在tween裡面
    private _currentScore: number = 0; // 當前分數

    get currentScore(): number {
        return this._currentScore;
    }

    protected onLoad(): void {


    }


    public init(): void {

        const playData: AniCtrlPropDef = new AniCtrlPropDef();
        playData.targetName = 'score';
        playData.loop = false;
        playData.timeScale = 1;
        this._aniSpine.setAniDataInfo(playData);
        //this._aniSpine.setKeyFrameEvent('score', this.spineFreeBackKeyFrameEvtHandler);//--沒用到
        this._winScoreLabel = this._winScoreLabelNode.getComponent(Label);
        this._winScoreLabel.string = '0';
        this.node.active = false;
        this._currentScore = 0;
    }

    public async showFinalScoreInAndOut(finalScore: number): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {

            this.node.active = true;
            this._finishResolvePromise = resolve;
            this.setScoreLabel(finalScore);
            this._aniSpine.playAniInPromise('score');
            await this.scoreLabelTweenFadeIn();
            //await GameUtils.Defer(1000);
            //await GameUtils.DeferByTweenPromise(1000 / 1000); // 使用定義的延遲常數，將毫秒轉換為秒
            const delay = GameUtils.DeferByTweenPromiseWithCancel(1000 / 1000);
            this._delayTweenCancel = delay.cancel;
            await delay.promise; // 等待延遲完成
            this._delayTweenCancel = null; // 清掉
            await this.scoreLabelTweenFadeOut();
            this.safeResolveFinishPromise();
        });
    }

    public async showFinalScoreIn(finalScore: number): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            this._currentScore = finalScore;
            this.node.active = true;
            this._finishResolvePromise = resolve;
            this.setScoreLabel(finalScore);
            this._aniSpine.playAniInPromise('score');
            await this.scoreLabelTweenFadeIn();
            this.safeResolveFinishPromise();
        });
    }

    public onlyCloseFinalScoreOut(): void {
        this._winScoreLabelNode.getComponent(UIOpacity).opacity = 0;
    }

    public async showFinalScoreOut(): Promise<void> {
        return new Promise<void>(async (resolve, reject) => {
            this.node.active = true;
            this._finishResolvePromise = resolve;
            await this.scoreLabelTweenFadeOut();
            this.safeResolveFinishPromise();
        });
    }

    public async stopWinScoreAni(): Promise<void> {

        if (this.node.active) {
            if (this._delayTweenCancel) {
                this._delayTweenCancel();//--強制終止 GameUtils.DeferByTweenPromiseWithCancel
                this._delayTweenCancel = undefined;
            }

            if (this._aniSpine.isPlaying) {
                this._aniSpine.stopPromiseAni();//--直接去強制執行spine的promise resolve,並且清空
                this._aniSpine.resetSpinePoseData();
            }

            this.resetSocketNode();
            this._winScoreLabel.string = '';
            this._currentScore = 0;
            this.node.active = false;
            this.safeResolveFinishPromise();
        }
    }

    private resetSocketNode(): void {

        if (this._isTweening) {
            this._isTweening = false;
            Tween.stopAllByTag(1);
        }
        this._winScoreLabelNode.setPosition(0, 0, 0);
        this._winScoreLabelNode.setScale(v3(1, 1, 1));
        this._winScoreLabelNode.setRotationFromEuler(0, 0, 0);
        this._winScoreLabelNode.getComponent(UIOpacity).opacity = 0;
    }

    public setScoreLabel(value: number): void {
        this._currentScore = value;
        this._winScoreLabel.string = value.numberComma();
    }

    private safeResolveFinishPromise(): void {
        if (this._finishResolvePromise) {
            this._finishResolvePromise();
            this._finishResolvePromise = undefined;
        }
    }

    /**
    * 數字fnt_WinScore
    * 事件score
    *  0~0.13秒，透明度0到255
       1~1.16秒，透明度255到0
       PS-根本沒用到美術提供的事件
    */
    /*
       private spineFreeBackKeyFrameEvtHandler = (...args) => {
        if (args[0] == 'score') {
            //--do something 
        }
    }*/


    private async playOpacityTweenAni(): Promise<void> {
        await this.scoreLabelTweenFadeIn();
        //await GameUtils.Defer(1000);
        await GameUtils.DeferByTweenPromise(1000 / 1000);
        await this.scoreLabelTweenFadeOut();
        if (this._finishResolvePromise) {
            this._finishResolvePromise();
            this._finishResolvePromise = undefined;
        }
    }


    private callBackForSpineEnd = () => {
        let spineComponentNode = this._aniSpine.spine;
        spineComponentNode.node.active = false;
    }

    private async scoreLabelTweenFadeIn(): Promise<void> {
        this._isTweening = true;
        return new Promise<void>((resolve, reject) => {
            tween(this._winScoreLabelNode.getComponent(UIOpacity))
                //.by(0.8, { scale: v3(0.14, 0.14, 0) }, { easing: 'elasticOut' })
                .to(0.13, { opacity: 255 }, { easing: 'linear' })
                .call(() => {
                    this._isTweening = false;
                    resolve();
                })
                .tag(1)
                .start()
        });
    }

    private async scoreLabelTweenFadeOut(): Promise<void> {

        this._isTweening = true;
        return new Promise<void>((resolve, reject) => {
            tween(this._winScoreLabelNode.getComponent(UIOpacity))
                //.by(0.8, { scale: v3(0.14, 0.14, 0) }, { easing: 'elasticOut' })
                .to(0.16, { opacity: 0 }, { easing: 'linear' })
                .call(() => {
                    this._isTweening = false;
                    resolve();
                })
                .tag(1)
                .start()
        });
    }
}


