import { _decorator, Component } from 'cc';
import { VideoAnimation } from '../VideoAnimation';
const { ccclass, property } = _decorator;

@ccclass('VideoPlayerTest')
export class VideoPlayerTest extends Component {

    @property(VideoAnimation)
    private videoChromaKeyAnimation: VideoAnimation;

    @property(VideoAnimation)
    private videoSideBySideAnimation: VideoAnimation;

    protected start(): void {
        this.videoChromaKeyAnimation.init(() => {
            console.log("videoChromaKeyAnimation init done");
        });

        this.videoSideBySideAnimation.init(() => {
            console.log("videoSideBySideAnimation init done");
        });

    }

    public onBtnClick(): void {
        // this.videoAnimation.playOncePromise([0, 0])
        //     .then(() => {
        //         console.log("playOncePromise done")
        //     })
        this.videoChromaKeyAnimation.playOnce([0]);
    }

    public onBtnClick2(): void {

        // this.videoChromaKeyAnimation.closeDecoder();

        this.videoSideBySideAnimation.playOnce([0]);
    }

    public onBtnClick3(): void {

        this.videoChromaKeyAnimation.init(() => {
            console.log("VideoAnimation init done");
        });
    }
}


