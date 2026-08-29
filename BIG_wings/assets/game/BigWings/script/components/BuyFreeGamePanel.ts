import {
    Color,
    Component,
    Graphics,
    Vec3,
    _decorator,
    sp,
    tween,
    Node,
    Button,
    UIOpacity,
    Label,
    Sprite,
    debug
} from "cc";
import { CommandEventName } from "@casino-mono/mvc";
import { UtilsKit } from "../lib/UtilsKit";
import AudioMgr from "../tools/audio/AudioMgr";
const { ccclass, property, menu } = _decorator;

@ccclass('BuyFreeGamePanel')
@menu('BigWings/BuyFreeGamePanel')
export class BuyFreeGamePanel extends Component {

    @property(Graphics)
    protected black_graphics: Graphics;

    @property(Node)
    protected panel_node: Node;

    @property(sp.Skeleton)
    protected panel_spine: sp.Skeleton;

    @property({ type: Sprite })
    protected buyFree_Text: Sprite;

    @property({ type: Label })
    protected buyFree_value_label: Label;

    @property({ type: Button })
    protected confirmButton: Button;

    @property({ type: Button })
    protected cancelButton: Button;

    private _buyFreeValue: number = 0;


    public set buyFreeValue(value: number) {
        this._buyFreeValue = value;
        this.buyFree_value_label!.string = value.toString();
    }

    public get buyFreeValue(): number {
        return this._buyFreeValue;
    }

    onLoad() {
        this.black_graphics.clear();
        this.black_graphics.fillColor = new Color(0, 0, 0, 102);
        this.black_graphics.rect(0, 0, 1080, 1920);
        this.black_graphics.fill();
        this.node.active = false;
        this.buyFreeValue = this._buyFreeValue;
    }


    public async openPanel(): Promise<void> {

        return new Promise<void>((resolve, reject) => {

            this.cancelButton.enabled = true;
            this.confirmButton.enabled = true;

            this.node.active = true;
            this.node.getComponent(UIOpacity).opacity = 255;

            AudioMgr.play('ui_button_buy_fg');
            this.panel_spine?.setAnimation(0, 'loop', true);
            this.panel_node?.setScale(0, 0);

            tween(this.panel_node)
                .to(0.3, { scale: new Vec3(1, 1, 1) })
                .start()
                .call(resolve);
        });

    }

    public closePanel(): void {
        this.node.active = false;
    }

    public async cancel(): Promise<void> {
        AudioMgr.play('ui_button_buy_fg_cancel');
        this.closePanel();
    }



    public async confirm(): Promise<void> {
        AudioMgr.play('ui_button_buy_fg_confirm');

        this.cancelButton.enabled = false;
        this.confirmButton.enabled = false;


        this.panel_spine?.setAnimation(0, 'down', false);
        await UtilsKit.Defer(700);
        tween(this.node.getComponent(UIOpacity))
            .to(0.3, { opacity: 0 })
            .start();

        await UtilsKit.Defer(300);
        this.node.active = false;
        this.node.emit(CommandEventName.BUY_FREEGAME);
    }


}