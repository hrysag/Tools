import { _decorator, CCFloat, Component, Label, Node, Tween, tween } from 'cc';
import { GameUtils } from '../../../MyUtils/GameUtils';
const { ccclass, property } = _decorator;

@ccclass('JpDigiAniNumber')
export class JpDigiAniNumber extends Component {

    @property({ type: CCFloat, visible: true, displayName: '數字表演持續時間', tooltip: 'JP數字顯示' })
    private _duration: number = 0.5;
    private _resolvePromise: ((value: boolean) => void) | undefined; // promise resolve 函式
    private _targetLabel: Label = null;
    private _tweenAction: Tween<any>;
    private _totalWinScore: number = 0;
    protected onLoad(): void {
        //super.onLoad();
    }

    public init(): void {
        this._targetLabel = this.getComponent(Label);
        this.node.active = false;
    }

    public showJpDigiAniNumber(value: number): Promise<boolean> {

        this.node.active = true;
        this._totalWinScore = value;
        this.clearData();

        return new Promise((resolve, reject) => {
            this._resolvePromise = resolve;
            const updateTarget = { value: 0 };
            this._tweenAction = tween(updateTarget)
                .to(this._duration, { value: value }, {
                    onUpdate: (v, ratio) => {
                        this.updateLabelValue(Math.floor(value * ratio));
                    },
                    onComplete: () => {
                        //this.updateLabelValue(value);
                        if (this._resolvePromise) {
                            this._resolvePromise(false);
                            this._resolvePromise = undefined;
                        }
                        this._tweenAction = null;
                    }
                })
                .start();
        });

    }

    public async checkFinishWinScoreShow(): Promise<void> {
        if (this._tweenAction) {
            this._tweenAction.stop();
            this._tweenAction = null;
            this.updateLabelValue(this._totalWinScore);
            this._resolvePromise = undefined;

        }
    }

    public clearData(): void {
        if (this._tweenAction) {
            this._tweenAction.stop();
            this._tweenAction = null;
        }

        if (this._resolvePromise) {
            this._resolvePromise(false); // 可視需求給 true/false
            this._resolvePromise = undefined;
        }
    }


    public stopJpDigiAniNumber(): void {
        this.clearData();
        this._totalWinScore = 0;
        this.node.active = false;
    }

    private updateLabelValue(value: number): void {
        this._targetLabel.string = value.numberComma();
    }

}


