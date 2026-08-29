import { _decorator, Component, Node, tween, Animation, AnimationClip, Label, UITransform, UIOpacity, Tween, Vec3, sp, SpriteFrame, Sprite, Overflow } from 'cc';
import { UtilsKit } from '../lib/UtilsKit';
import { scoreGridMarquee } from './scoreGridMarquee';
const { ccclass, property } = _decorator;

@ccclass('WinAndMarquee')
export class WinAndMarquee extends Component {

    @property({ type: scoreGridMarquee })
    private marquee: scoreGridMarquee = null;

    @property({ type: Sprite })
    private winSprite: Sprite = null;

    @property({ type: Label })
    private winScore: Label = null;

    @property({ type: Label })
    private runningScore: Label = null;

    private _running = false;
    private _frameLevel: string;
    private spine: Node;
    private botSpine: Node;
    private tagNum = 0;

    private roundScore: number;
    private totalScore: number;
    private bet: number;
    private inFree: boolean;



    @property({ type: [SpriteFrame], tooltip: "win sprite" })
    public winSpriteFrame: SpriteFrame[] = [];


    protected onLoad(): void {

        this.spine = this.node.getChildByName('spine');
        this.botSpine = this.node.getChildByName('botSpine');

        // this.runScore(this.runningScore, 5, 1.2);
        // this.scheduleOnce(() => this.updateScore(1000, 5, true), 1);
        // this.scheduleOnce(() => this.updateScore(1000, 5, true, true), 6);
        // this.updateScore(100);

        // this.changeToFg(1);
        // this.changeToFg(0);

    }

    /** 0 MG 1 FG */
    public changeToFg(free: number): void {
        this.winSprite.spriteFrame = this.winSpriteFrame[free];
    }

    public playMarquee(play: boolean): void {
        // this.marquee.node.active = !play;
        if (play && !this.marquee.node.active) {
            // this.marquee.play();
            this.marquee.node.active = play;
        }
        this.winScore.node.parent.active = !play;

    }

    public updateScore(score: number, bet: number, run = true, inFree = false): void {

        // this.playMarquee(false);
        this.roundScore = score;
        this.bet = bet;
        this.inFree = inFree;
        this.winScore.node.parent.active = true;
        this.marquee.node.active = false;

        if (!inFree) {
            this.totalScore = 0;
            this.winScore.string = "0.00";
        }
        this.runningScore.string = "0.00";
        this.updatePosition();
        this.totalScore += this.roundScore;

        if (run) {
            this.addListener();
            this._running = true;
            this.runningScore.node.parent.active = true;
            this.runningScore.node.parent.scale = new Vec3(0.2, 0.2, 1);
            this.runningScore.node.parent.getComponent(UIOpacity).opacity = 255;

            //出現與滾分
            tween(this.runningScore.node.parent).tag(this.tagNum)
                .parallel(
                    this.runScore(this.runningScore, 1.5, score),
                    tween(this.runningScore.node.parent).to(0.2, { scale: new Vec3(1, 1, 1) })
                        .start().tag(this.tagNum),
                    tween(this.runningScore.node.parent).delay(1.3).to(0.1, { scale: new Vec3(1.2, 1.2, 1) })
                        .to(0.1, { scale: new Vec3(1, 1, 1) })
                        .start().tag(this.tagNum),
                    tween(this.runningScore.node.parent).delay(1.3).call(() => this.updateWinBlock(this.totalScore, bet, inFree))
                        .start().tag(this.tagNum)
                );

            //淡出動畫
            tween(this.runningScore.node.parent)
                .delay(1.5)
                .call(() => {
                    this.removeListener();
                    this._running = false;
                })
                .delay(0.6)
                .to(0.2, { scale: new Vec3(0.2, 0.2, 1) })
                .call(() => { this.updatePosition(); })
                .tag(this.tagNum)
                .start();

            tween(this.runningScore.node.parent.getComponent(UIOpacity))
                .delay(2.1)
                .to(0.2, { opacity: 0 })
                .tag(this.tagNum)
                .start();

        } else {
            this.updateWinBlock(this.totalScore, bet, inFree);
        }

    }

    private updatePosition(): void {
        this.winScore.updateRenderData(true);
        this.winScore.overflow = Overflow.NONE;
        const totalWidth = 900;
        const restWidth = totalWidth - this.winSprite.getComponent(UITransform).width - 50;
        let availableWidth = 0;
        // console.error("num Width", this.winScore.getComponent(UITransform).width);
        if (this.winScore.getComponent(UITransform).width > restWidth) {
            this.winScore.overflow = Overflow.SHRINK;
            this.winScore.getComponent(UITransform).width = restWidth;
        } else {
            this.winScore.overflow = Overflow.NONE;
            availableWidth = restWidth - this.winScore.getComponent(UITransform).width;
            // this.winSpriteNode.position = new Vec3(availableWidth / 3, this.winSpriteNode.position.y, 0);
        }

        this.winSprite.node.position = new Vec3(availableWidth / 3 - 450, this.winSprite.node.position.y, 0);
        // console.log("availableWidth", availableWidth);
        // console.log("tx x:", this.winSpriteNode.position.x);
        // console.log("tx width", this.winSpriteNode.getComponent(UITransform).width);
        // winScore.node.position.set(this.winSpriteNode.position.x + this.winSprite.getComponent(UITransform).width + availableWidth / 3+50, winScore.node.position.y, 0);
        this.winScore.node.position = new Vec3(this.winSprite.node.position.x + this.winSprite.getComponent(UITransform).width + availableWidth / 3 + 20, this.winScore.node.position.y, 0);

        // console.log("num x", winScore.node.position.x);

    }

    public runScore(label: Label, duration: number, value: number, float = 2): Tween<object> {
        let nowScore = Number(label.string);
        let o = { v: nowScore };
        let t = tween(o)
            .to(duration, { v: value }, {
                onUpdate(target, ratio) {
                    label.string = (o.v).toFixed(float).toString();

                },
            })
            .tag(this.tagNum)
            .start();

        return t;
    };

    /**更新贏得分數欄位 */
    protected async updateWinBlock(score: number, bet: number, inFree: boolean): Promise<void> {

        let times = score / bet;
        this._frameLevel = times >= 10 ? "03" : times >= 5 ? "02" : "";
        // let winNode = this.node.getChildByName('winScore');
        let winNode = this.winScore.node.parent;
        tween(winNode)
            .call(() => {
                this.winScore.string = score.toFixed(2).toString();
                this.updatePosition();
            })
            .to(0.1, { scale: new Vec3(1.2, 1.2, 1) })
            .to(0.1, { scale: new Vec3(1, 1, 1) })
            .tag(this.tagNum)
            .start();

        if (this._frameLevel) {
            this.spine.getComponent(UIOpacity).opacity = 255;
            this.botSpine.getComponent(UIOpacity).opacity = 255;
            const s: sp.Skeleton = this.spine.getComponent(sp.Skeleton);
            s.setAnimation(0, `${this._frameLevel}_begin`, false);
            s.addAnimation(0, `${this._frameLevel}_loop`, true);
            const bs: sp.Skeleton = this.botSpine.getComponent(sp.Skeleton);
            bs.setAnimation(0, `${this._frameLevel}_begin`, false);
            bs.addAnimation(0, `${this._frameLevel}_loop`, true);

            if (!inFree) tween(this.botSpine.getComponent(UIOpacity)).delay(0.8).to(0.2, { opacity: 0 }).start();
            tween(this.spine.getComponent(UIOpacity)).delay(0.8).to(0.2, { opacity: 0 }).start();
        }
    }

    protected handleKey = (e: KeyboardEvent): void => {
        console.error("KEYYYY");
        if (e.key == " ") this.stop();
    };

    private stop = (): void => {
        if (!this._running) return;
        console.error("STOPPPP");
        this.removeListener();
        this._running = false;
        Tween.stopAllByTag(this.tagNum);
        Tween.stopAllByTarget(this.runningScore.node.parent);

        tween().parallel(
            tween(this.runningScore.node.parent).to(0.1, { scale: new Vec3(1.2, 1.2, 1) })
                .to(0.1, { scale: new Vec3(1, 1, 1) })
                .start(),
            tween(this.runningScore.node.parent).call(() => this.updateWinBlock(this.totalScore, this.bet, this.inFree))
                .start()
        );

        this.runningScore.string = this.roundScore.toFixed(2).toString();

        //淡出動畫
        tween(this.runningScore.node.parent)
            .delay(0.8)
            .to(0.2, { scale: new Vec3(0.2, 0.2, 1) })
            .tag(this.tagNum)
            .start();

        tween(this.runningScore.node.parent.getComponent(UIOpacity))
            .delay(0.8)
            .to(0.2, { opacity: 0 })
            .tag(this.tagNum)
            .start();

    };

    private addListener(): void {
        document.addEventListener("keypress", this.handleKey);
        document.addEventListener("click", this.stop);
        document.addEventListener("touchend", this.stop);
    }


    private removeListener(): void {
        document.removeEventListener("keypress", this.handleKey);
        document.removeEventListener("click", this.stop);
        document.removeEventListener("touchend", this.stop);
    }


}
