import { _decorator, Animation, Button, Component, EventHandler, js, Label, Node, Skeleton, sp, Tween, tween } from 'cc';
import { UtilsKit } from '../lib/UtilsKit';
const { ccclass, property } = _decorator;

@ccclass('BigWin')
export class BigWin extends Component {

    private _bigWinMultiple: Array<number> = [20, 50, 100]; // 切換bigWin的分數倍率
    private _bigWinSpineAnimName: Array<string> = ['big_win', 'mega_win', 'super_win']; // bigWinSpine動態名稱
    private _runScoreTime: Array<number> = [10, 20, 30]; // 跑分時間(最多)

    private _bet: number;
    private _payoff: number;

    get bigWinMultiple(): Array<number> {
        return this._bigWinMultiple;
    }

    private bigWinResolve: any;
    private bg: Component;
    private spine: Component;
    private coin: Component;

    start() {

        this.bg = this.node.getChildByName("bg").getComponent(sp.Skeleton);
        this.spine = this.node.getChildByName("spine").getComponent(sp.Skeleton);
        this.coin = this.node.getChildByName("coin").getComponent(sp.Skeleton);

        this.node.on(Button.EventType.CLICK, () => {
            this.endBigWinRun();
        });

    }

    protected onEnable(): void {
        this.running(6, 500)

    }

    running(bet: number, payoff: number): Promise<void> {
        this._bet = bet;
        this._payoff = payoff;

        return new Promise(async (resolve) => {
            this.bigWinResolve = resolve;

            const runningScoreLabel: Label = this.node.getChildByName("label").getComponent(Label);
            runningScoreLabel.string = "0"; // 清空跑分

            this.node.active = true; // 顯示跑分物件
            this.node.getComponent(Button).interactable = true; // 啟用按鈕
            // this.node.getComponent(Animation).play("bigWinReset");

            let arrayId: number = 0;
            this.playBigWinSpin(arrayId);

            // 等待跑分結束(回傳)
            const runBigWinScore: { runScore: number } = { runScore: 0 };
            tween(runBigWinScore).to(this._runScoreTime[2], { runScore: this._payoff }, {
                onUpdate: () => {
                    runningScoreLabel.string = UtilsKit.NumberSpecification(runBigWinScore.runScore);
                    if (arrayId < this.bigWinMultiple.length - 1 && runBigWinScore.runScore > this._bet * this.bigWinMultiple[arrayId]) {
                        arrayId++; // 判斷下個階段
                        this.playBigWinSpin(arrayId);
                    }
                }
            }).call(() => this.bigWinOver())
                .tag(88).start();
        })
    }
    public showBigwin(): void {
        //現在先綁在turbo上測試用
        this.node.active = true;
    }


    private async playBigWinSpin(arrayId: number) {
        const bigWinSpineNode: Node = this.node.getChildByName("spine");
        const bgSpineNode: Node = this.node.getChildByName("bg");
        const coinSpineNode: Node = this.node.getChildByName("coin");

        if (arrayId == 0) {
            bigWinSpineNode.getComponent(sp.Skeleton).setAnimation(0, this._bigWinSpineAnimName[0] + '_begin', false)
            bigWinSpineNode.getComponent(sp.Skeleton).addAnimation(0, this._bigWinSpineAnimName[0] + '_loop', true)
            bgSpineNode.getComponent(sp.Skeleton).setAnimation(0, this._bigWinSpineAnimName[0] + '_begin', false)
            bgSpineNode.getComponent(sp.Skeleton).addAnimation(0, this._bigWinSpineAnimName[0] + '_loop', true)
            coinSpineNode.getComponent(sp.Skeleton).setAnimation(0, this._bigWinSpineAnimName[0] + '_begin', false)
            coinSpineNode.getComponent(sp.Skeleton).addAnimation(0, this._bigWinSpineAnimName[0] + '_loop', true)

        } else if (arrayId > 0) {
            bigWinSpineNode.getComponent(sp.Skeleton).addAnimation(0, this._bigWinSpineAnimName[arrayId] + '_begin', false)
            bigWinSpineNode.getComponent(sp.Skeleton).addAnimation(0, this._bigWinSpineAnimName[arrayId] + '_loop', true)
            bgSpineNode.getComponent(sp.Skeleton).addAnimation(0, this._bigWinSpineAnimName[arrayId] + '_begin', false)
            bgSpineNode.getComponent(sp.Skeleton).addAnimation(0, this._bigWinSpineAnimName[arrayId] + '_loop', true)
            coinSpineNode.getComponent(sp.Skeleton).addAnimation(0, this._bigWinSpineAnimName[arrayId] + '_begin', false)
            coinSpineNode.getComponent(sp.Skeleton).addAnimation(0, this._bigWinSpineAnimName[arrayId] + '_loop', true)

        }
    }

    // 執行bigWin跑分結束
    private bigWinOver(): Promise<void> {
        return new Promise(async (resolve) => {

            this.node.getComponent(Button).interactable = false; // 禁用按鈕

            const runningScoreLabel: Label = this.node.getChildByName("label").getComponent(Label);
            runningScoreLabel.string = UtilsKit.NumberSpecification(this._payoff);

            await UtilsKit.Defer(2000);

            this.node.active = false; // 隱藏跑分物件

            const bigWinSpineNode: Node = this.node.getChildByName("spine");
            const bgSpineNode: Node = this.node.getChildByName("bg");
            const coinSpineNode: Node = this.node.getChildByName("coin");

            this.resetSpine(bigWinSpineNode)
            this.resetSpine(bgSpineNode)
            this.resetSpine(coinSpineNode)


            resolve();
        })
    }

    //大獎跑分畫面按下觸發
    private async endBigWinRun() {
        Tween.stopAllByTag(88);

        const bigWinSpine: sp.Skeleton = this.node.getChildByName("spine").getComponent(sp.Skeleton);
        const bgWinSpine: sp.Skeleton = this.node.getChildByName("bg").getComponent(sp.Skeleton);
        const coinWinSpine: sp.Skeleton = this.node.getChildByName("coin").getComponent(sp.Skeleton);
        bigWinSpine.setCompleteListener(null); // 結束監聽
        bgWinSpine.setCompleteListener(null); // 結束監聽
        coinWinSpine.setCompleteListener(null); // 結束監聽

        let i: number = 0;
        while (this._payoff > this._bet * this.bigWinMultiple[i]) {
            if (i == this.bigWinMultiple.length - 1) {
                break;
            } else {
                i++;
            }
        }
        bigWinSpine.setAnimation(0, this._bigWinSpineAnimName[i] + '_loop', true);
        bgWinSpine.setAnimation(0, this._bigWinSpineAnimName[i] + '_loop', true);
        coinWinSpine.setAnimation(0, this._bigWinSpineAnimName[i] + '_loop', true);

        await this.bigWinOver();

        this.bigWinResolve();
    }

    private resetSpine(spine: Node): void {
        spine.getComponent(sp.Skeleton).clearTracks()
        spine.getComponent(sp.Skeleton).clearAnimation()
        spine.getComponent(sp.Skeleton).setCompleteListener(null)
    }
}