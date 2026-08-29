import { _decorator, Animation, Button, color, Component, Node, tween, Vec2 } from 'cc';
import { UIAdditiveHandler } from '../../Script/UIAdditiveHandler';
import { SpriteDissolveHandler } from '../../Script/SpriteDissolveHandler';
import { SpriteDistortionHandler } from '../../Script/SpriteDistortionHandler';
import { BmfAdditiveLabel } from '../../Script/BMFontAdditive/BmfAdditiveLabel';
const { ccclass, property } = _decorator;

@ccclass('ExampleMain')
export class ExampleMain extends Component {
    @property(UIAdditiveHandler)
    private sp_addtive !: UIAdditiveHandler;

    @property(Animation)
    private anim !: Animation;

    @property(Button)
    private additiveBtn !: Button;

    @property(SpriteDissolveHandler)
    private sp_dissolve !: SpriteDissolveHandler;

    @property(Button)
    private dissolveBtn !: Button;

    @property(SpriteDistortionHandler)
    private sp_distort !: SpriteDistortionHandler;

    @property(Button)
    private distorionBtn !: Button;

    @property(Button)
    private rotateBtn !: Button;

    @property(Button)
    private fadeBtn !: Button;


    // @property({ type: BmfAdditiveLabel })
    // private bmfLabel: BmfAdditiveLabel = null;

    public bmfLabelScore: number = 0;

    protected onLoad(): void {
        this.additiveBtn.node.on(Button.EventType.CLICK, () => {
            this.sp_addtive.add_alpha = 255;
            this.sp_addtive.add_rotate = 0;
            this.sp_addtive.main_color = color(255, 255, 255, 255);
            this.anim.play('additiveRefresh');

        }, this);

        this.rotateBtn.node.on(Button.EventType.CLICK, () => {
            this.sp_addtive.add_alpha = 255;
            this.sp_addtive.add_rotate = 0;
            this.sp_addtive.main_color = color(255, 255, 255, 255);
            this.anim.play('additiveRotate');
        }, this);

        this.fadeBtn.node.on(Button.EventType.CLICK, () => {
            this.sp_addtive.main_color = color(255, 255, 255, 255);
            this.anim.play('additiveFade');
        }, this);

        this.dissolveBtn.node.on(Button.EventType.CLICK, () => {
            this.sp_dissolve.level = 0;
            tween(this.sp_dissolve)
                .to(2, { level: 1 })
                .start();
        }, this);

        this.distorionBtn.node.on(Button.EventType.CLICK, () => {
            this.sp_distort.distort_offset = new Vec2(0, 0);
            tween(this.sp_distort)
                .to(2, { distort_offset: new Vec2(0, 1) })
                .start();
        }, this);
    }

    // protected start(): void {
    //     this.runScoreTest();
    // }

    // public runScoreTest() {
    //     let score: number = 100000;

    //     let scoreRunTween = tween<ExampleMain>(this)
    //         .to(6, { bmfLabelScore: score }, {
    //             onUpdate: (v: any, ratio: number) => {
    //                 let current = Math.floor(score * ratio);
    //                 this.bmfLabel.string = current.toString();
    //             }
    //         })
    //         .start();
    // }
}


