import { _decorator, Component, Node, ParticleSystem } from 'cc';
import { AutoOrientation, PathAnimationPlayer, SlicedTrail } from 'db://assets/Scripts/ModuleEntry';

const { ccclass, property } = _decorator;

@ccclass('MotionDataList')
class MotionDataList {
    @property({ visible: true })
    public aniName: string = "";
    @property({ type: Node, visible: true })
    public startNode: Node = null;
    @property({ type: Node, visible: true })
    public endNode: Node = null;
    @property(PathAnimationPlayer)
    public motionPathController: PathAnimationPlayer = null;
}

@ccclass('SlicedTrailTest')
export class SlicedTrailTest extends Component {
    @property(AutoOrientation)
    public autoOrientation: AutoOrientation = null;

    @property(MotionDataList)
    private motionDataList: MotionDataList[] = [];

    @property(ParticleSystem)
    private trailParticleSystem: ParticleSystem[] = [];

    @property(SlicedTrail)
    private motionStreakList: SlicedTrail[] = [];

    protected start(): void {
        this.autoOrientation.onResizeCall = this.resetMotionStreakAuxiliary.bind(this);
    }

    private resetMotionStreakAuxiliary(): void {
        this.trailParticleSystem.forEach(ps => {
            ps.clear();
        });
        this.motionStreakList.forEach(ms => {
            ms.reset();
        });
    }

    public async onclick(): Promise<void> {
        this.playMotionStreak();
    }

    private async playMotionStreak(): Promise<void> {
        for (let i = 0; i < this.motionDataList.length; i++) {
            const item = this.motionDataList[i];
            this.resetMotionStreak(true);//一定要清空軌跡組件畫的點
            await item.motionPathController.play(item.aniName, item.startNode.getWorldPosition(), item.endNode.getWorldPosition());
            this.resetMotionStreak(false);//一定要清空軌跡組件畫的點
        }
    }

    private resetMotionStreak(isPlay: boolean): void {
        for (let item of this.motionStreakList) {
            item.reset();
            item.isPlay = isPlay;
        }
    }
}


