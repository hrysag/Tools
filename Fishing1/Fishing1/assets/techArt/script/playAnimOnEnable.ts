import { _decorator, Component, Animation, error } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('playAnimOnEnable')
export class playAnimOnEnable extends Component {

    // private state: AnimationState = null!;

    public onEnable (): void {
        const anim = this.getComponent(Animation)!;
        if (anim.clips.length === 0) {
            error(`[ERROR] ${this.node.name} has no clip to play!!!`)
            return;
        }
        anim.play();
    }

    public onDisable (): void {
        const anim = this.getComponent(Animation)!;
        if (anim.clips.length === 0) {
            return;
        }
        const name = anim.defaultClip?.name;
        anim.getState(name!).setTime(0);
        // this.getComponent(Animation)!.setCurrentTime(0);
        this.getComponent(Animation)!.stop();
    }
}
