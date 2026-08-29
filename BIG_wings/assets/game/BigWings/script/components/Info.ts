import { _decorator, Component, Label, Node, tween } from 'cc';
import { UtilsKit } from '../lib/UtilsKit';
const { ccclass, property } = _decorator;

@ccclass('Info')
export class Info extends Component {

    @property({ type: Label, tooltip: "玩家分數" })
    private creditLabel: Label = null;

    @property({ type: Label, tooltip: "玩家下注分數" })
    private betLabel: Label = null;

    @property({ type: Label, tooltip: "玩家累積分數" })
    private accumulatedScoreLabel: Label = null;

    @property({ type: Label, tooltip: "局號" })
    private snLabel: Label = null;

    @property({ type: Label, tooltip: "下注比" })
    private betBaseLabel: Label = null;

    @property({ type: Node, tooltip: "共贏得分數資訊" })
    private winTotalScoreNode: Node = null;

    start(): void {
        this.updateCredit(0);
        this.updateBet(0);
        this.updateAccumulatedScore(0);
    }

    // 顯示共贏得分數
    showWinTotalScore(score: number) {
        this.winTotalScoreNode.getChildByName('score').getChildByName('label').getComponent(Label).string = score.toString(); // 共贏分設置
        UtilsKit.PlayAnimation(this.winTotalScoreNode); // 顯示共贏得
    }

    updateCredit(n: number) {
        this.creditLabel.string = UtilsKit.NumberSpecification(n);
    }

    updateBet(n: number) {
        this.betLabel.string = UtilsKit.NumberSpecification(n);
    }

    updateAccumulatedScore(n: number) {
        this.runScore(Number(this.accumulatedScoreLabel.string), Number(this.accumulatedScoreLabel.string) + n, this.accumulatedScoreLabel); // 執行小跑分
    }

    updateSN(sn: string) {
        this.snLabel.string = sn;
    }

    updateBetBase(betBase: string) {
        this.betBaseLabel.string = betBase;
    }

    //跑分
    runScore(stratScore: number, endScore: number, label: Label) {
        const runScore = { score: stratScore }; // 設置起始分
        tween(runScore).to(0.5, { score: endScore }, {
            onUpdate: () => {
                label.string = UtilsKit.NumberSpecification(runScore.score); // 更新分數
            }
        }).call(() => {
            label.string = UtilsKit.NumberSpecification(endScore); // 更新分數
        }).start();
    }
}

