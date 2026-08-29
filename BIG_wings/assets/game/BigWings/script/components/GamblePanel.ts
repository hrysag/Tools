import {
    Color,
    Component,
    Graphics,
    Vec3,
    _decorator,
    tween,
    Node,
    Button,
    UIOpacity,
    Label,
    Sprite,
    debug,
    sp,
    Quat
} from "cc";
import { CommandEventName } from "@casino-mono/mvc";
import { UtilsKit } from "../lib/UtilsKit";
import AudioMgr from "../tools/audio/AudioMgr";
import { BigWingsCommand } from "./BigWingsCommand";
const { ccclass, property, menu } = _decorator;

@ccclass('GamblePanel')
@menu('BigWings/GamblePanel')
export class GamblePanel extends Component {
    @property(Node)
    protected roulette: Node;

    @property({ type: sp.Skeleton })
    protected roulette_effect: sp.Skeleton;

    @property({ type: Sprite })
    protected roulette_bg: Sprite;

    @property({ type: Node, tooltip: "除了中央轉輪及背景以外的物件" })
    protected other: Node;

    @property({ type: sp.Skeleton })
    protected win_effect: sp.Skeleton;

    @property({ type: sp.Skeleton })
    protected leaf: sp.Skeleton;

    @property({ type: sp.Skeleton })
    protected countdown_sp: sp.Skeleton;

    @property({ type: Label })
    protected countdown_label: Label;

    @property(Node)
    protected pin: Node;

    @property(BigWingsCommand)
    protected start_freegame: BigWingsCommand;

    @property(BigWingsCommand)
    protected bet: BigWingsCommand;

    @property({ type: Label })
    protected extra_freetime: Label;

    @property({ type: Label })
    protected remain_freetime: Label;

    private _remainFreetime: number = 10;
    private _extraFreetime: number = 5;
    private _nowCount: number = 10;

    public set remainFreetime(value: number) {
        this._remainFreetime = value;
    }

    public set extraFreetime(value: number) {
        this._extraFreetime = value;
    }

    onLoad() {
        this.node.active = false;
        this.countdown_sp.setCompleteListener(() => {
            this._nowCount -= 1;
            this.countdown_label.string = String(this._nowCount);
            if (this._nowCount == 0) {
                this.onStartFreeGame();
            }
        });
    }

    private fadeIn(): void {
        this.other.getComponent(UIOpacity).opacity = 0;
        tween(this.other.getComponent(UIOpacity))
            .to(0.3, { opacity: 255 })
            .start();
    }

    private rouletteAppear(): void {
        this.roulette.setScale(0, 0);
        tween(this.roulette)
            .to(0.2, { scale: new Vec3(1.2, 1.2, 1.2) })
            .to(0.1, { scale: new Vec3(1, 1, 1) })
            .start()
    }

    public async openPanel(): Promise<void> {
        this.node.active = true;
        this.node.getComponent(UIOpacity).opacity = 255;
        this.bet.enabled = false;
        this.start_freegame.enabled = false;
        this._nowCount = 10;
        this.countdown_label.string = String(this._nowCount);
        this.remain_freetime.string = String(this._remainFreetime);
        this.extra_freetime.string = String(this._extraFreetime);
        this.fadeIn();
        this.rouletteAppear();
        await UtilsKit.Defer(300);
        this.bet.enabled = true;
        this.start_freegame.enabled = true;
        this.roulette_effect.setAnimation(0, "loop", true);
        this.leaf.setAnimation(0, "loop", true);
        this.countdown_sp.setAnimation(0, "loop", true);
        // return new Promise<void>((resolve, reject) => {

        //     this.cancelButton.enabled = true;
        //     this.confirmButton.enabled = true;

        //     this.node.active = true;
        //     this.node.getComponent(UIOpacity).opacity = 255;

        //     AudioMgr.play('ui_button_buy_fg');
        //     this.panel_spine?.setAnimation(0, 'loop', true);
        //     this.panel_node?.setScale(0, 0);

        //     tween(this.panel_node)
        //         .to(0.3, { scale: new Vec3(1, 1, 1) })
        //         .start()
        //         .call(resolve);
        // });

    }

    public async onStartFreeGame(): Promise<void> {
        this.bet.enabled = false;
        this.start_freegame.enabled = false;
        this.countdown_sp.paused = true;
        await UtilsKit.Defer(500);
        await this.end();
    }

    public onBet(): void {
        this.bet.enabled = false;
        this.start_freegame.enabled = false;
        this.countdown_sp.paused = true;
        // 應該是送事件
        this.roll();
    }

    private async roll(): Promise<void> {
        let win = Math.floor(Math.random() * 2);
        let spine = this.pin.getChildByName("Spine").getComponent(sp.Skeleton);
        if (win == 1) {
            let reverse = (Math.floor(Math.random() * 2) == 1) ? 1 : -1;
            let angle = Math.floor(Math.random() * 105) + 1;
            tween(this.pin)
                .to(2, { angle: -1080 + reverse * angle }, { easing: "cubicOut" })
                .start()
            await UtilsKit.Defer(2000);
            spine.setAnimation(0, "stop", false);
            this.win_effect.setAnimation(0, "win", false);
            this._remainFreetime += this._extraFreetime;
            this.remain_freetime.string = String(this._remainFreetime);
            await UtilsKit.Defer(500);
            this._nowCount = 10;
            this.countdown_label.string = String(this._nowCount);
            this.countdown_sp.clearTracks();
            this.countdown_sp.paused = false;
            this.countdown_sp.setAnimation(0, "loop", true);
            this.bet.enabled = true;
            this.start_freegame.enabled = true;
            this.pin.angle = 0;
        } else {
            let reverse = (Math.floor(Math.random() * 2) == 1) ? 1 : -1;
            let angle = 140 + Math.floor(Math.random() * 40);
            tween(this.pin)
                .to(2, { angle: -1080 + reverse * angle }, { easing: "cubicOut" })
                .start()
            await UtilsKit.Defer(2000);
            spine.setAnimation(0, "stop", false);
            this.remain_freetime.string = "0";
            await UtilsKit.Defer(500);
            await this.end();
        }
    }

    private async end(): Promise<void> {
        tween(this.node.getComponent(UIOpacity))
            .to(0.3, { opacity: 0 })
            .start();
        await UtilsKit.Defer(500);
        this.reset();
    }

    private reset(): void {
        this.countdown_sp.paused = false;
        this.countdown_sp.clearAnimation();
        this.leaf.clearAnimation();
        this.roulette_effect.clearAnimation();
        this.node.active = false;
        this.pin.angle = 0;
        // 這個應該是外面傳進來重置
        this._remainFreetime = 10;
    }
}