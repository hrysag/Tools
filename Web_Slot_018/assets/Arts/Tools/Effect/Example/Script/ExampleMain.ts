import { _decorator, Animation, Button, Component, Node, tween, Vec2 } from 'cc';
import { SpriteAttiveHandler } from '../../Script/SpriteAdditiveHandler';
import { SpriteDissolveHandler } from '../../Script/SpriteDissolveHandler';
import { SpriteDistortionHandler } from '../../Script/SpriteDistortionHandler';
const { ccclass, property } = _decorator;

@ccclass('ExampleMain')
export class ExampleMain extends Component {
    @property(SpriteAttiveHandler)
    private sp_addtive !: SpriteAttiveHandler;

    @property(SpriteAttiveHandler)
    private sp_rotate !: SpriteAttiveHandler;

    @property(Animation)
    private anim !: Animation;

    @property(Animation)
    private rotateAnim !: Animation;

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

    protected onLoad(): void {
        this.additiveBtn.node.on(Button.EventType.CLICK, () => {
            this.sp_addtive.add_alpha = 255;
            this.anim.play('refresh');

        }, this);

        this.rotateBtn.node.on(Button.EventType.CLICK, () => {
            this.sp_rotate.add_alpha = 255;
            this.rotateAnim.play('rotate');
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
}


