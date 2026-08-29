import { _decorator, Component, Node, tween, Animation, AnimationClip } from 'cc';
import { UtilsKit } from '../lib/UtilsKit';
const { ccclass, property } = _decorator;

@ccclass('scoreGridMarquee')
export class scoreGridMarquee extends Component {

    private animationList: Array<AnimationClip> = [];

    protected playingIndex: number = 0;
    protected anim: Animation;

    protected onEnable(): void {
        this.anim = this.node.getComponent(Animation);
        this.animationList = this.anim.clips;
        console.warn(this.animationList);

        // this.playingIndex = 0;
        this.play();
        this.anim.on(Animation.EventType.FINISHED, () => {
            this.play();
        });
        console.error("enable");
    }

    public play(): void {
        this.anim.getState(this.animationList[this.playingIndex].name).setTime(0);
        this.playingIndex++;
        if (this.playingIndex >= this.animationList.length) this.playingIndex = 0;
        this.anim.play(this.animationList[this.playingIndex].name);
    }

    public stop(): void {
        this.anim.pause();
        this.node.active = false;
    }

}
