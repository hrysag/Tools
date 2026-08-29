import { _decorator, Component, Node, Vec3, UITransform, ParticleSystem, tween, Graphics, color, Layers, Enum, Tween, isValid, TweenAction } from 'cc';
import { ParticlePool } from './ParticlePool';
import { AnimationController } from '../../MyUtils/AnimationSystemV2/Components/AnimationController';
import { IAnimationControl } from '../../MyUtils/AnimationSystemV2/Definitions/IAnimationControl';
import { FindComponent } from '../../MyUtils/FindComponent';
import { AniSysTools } from '../../MyUtils/AnimationSystemV2/AniTools/AniSysTools';
import { GameUtilsTools } from '../../ReferencePath';
import { GameGlobalData, GameGlobalKeys } from '../../DefinitionGameData1016/GameGlobalData1016';
import { AsyncScope } from '../../MyUtils/AsyncScope/AsyncScope';
import { GlobalAccessReader } from '../../DefinitionGameData1016/AccessDefs/GlobalAccess';
import { SoundList, AudioSourceList, MusicList } from '../../DefinitionGameData1016/SoundList1016';
import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/ModuleEntry';


export interface playInfoForParticle {
    startPos: Vec3,
    endPos: Vec3
}
export enum ANI_STATE_NAME {
    APPEAR = 'Appear',
    END = 'End'
}
const { ccclass, property } = _decorator;
const SIGNAL_KEY = 'PARTICLE_FX_CTRL_SIGNAL';
@ccclass('CountTimesFXController')
export class CountTimesFXController extends Component {

    private _particlePool: ParticlePool;
    private _async: AsyncScope;


    protected onLoad(): void {

    }

    public init(): void {
        this._particlePool = new ParticlePool();
        this._async = AsyncScope.getInstance();
    }

    public reset(): void {

    }

    public close(): void {

    }

    private testPos(startPos: Vec3, endPos: Vec3): void {

        let pos = [startPos, endPos];
        for (let i = 0; i < pos.length; i++) {
            let testNode: Node = new Node();
            let graphic: Graphics = testNode.addComponent(Graphics);
            //-graphic 不受到UIOpacity組件影響~有夠78(color 0-255)
            //graphic.fillColor = color(255, 255, 255, 255);
            graphic.fillColor = color(255, 0, 0, 255);
            graphic.rect(-10, -10, 20, 20);
            graphic.fill();
            testNode.layer = Layers.Enum.UI_2D;
            this.node.addChild(testNode);
            testNode.setPosition(pos[i]);
        }
    }

    public async playCountTimesFX(info: playInfoForParticle[], totalDuration: number = 1.0): Promise<void> {

        const uiTransform = this.node.getComponent(UITransform)!;
        const count = info.length;
        if (count === 0) return;
        //---全部同時開始，但每顆飛行時間依照數量壓縮
        const baseFlyTime = 0.3;   // 原本每顆粒子基準飛行時間
        const minFlyTime = 0.1;    // 不要低於這個值，避免太快不明顯
        const flyTime = Math.max(minFlyTime, totalDuration / count);
        const taskList: Promise<void>[] = [];

        for (let i = 0; i < count; i++) {

            const { startPos, endPos } = info[i];
            const localStart = uiTransform.convertToNodeSpaceAR(startPos);
            const localEnd = uiTransform.convertToNodeSpaceAR(endPos);
            const particleNode = await this._particlePool.getParticleNode();
            particleNode.active = true;
            this.node.addChild(particleNode);
            const ani = AniSysTools.findAndGetIAniComponent(particleNode) as IAnimationControl;
            ani.init();

            const p = this.shootParticle(particleNode, localStart, localEnd, { duration: flyTime });

            const cancel = (value) => {
                p.t.stop();
                //this.node.removeChild(particleNode);
                //particleNode.destroy();
                this.cancelAll();
                p.cancel();
                //console.log();
            }

            const task = (async () => {
                const particleEmitter = FindComponent.findComponentInChildren(particleNode, ParticleSystem);
                particleEmitter.clear();
                particleEmitter.play();
                await p.promise;
            })();

            const single = this._async.createAbortScope(SIGNAL_KEY);

            this._async.registerCancelablePromise(
                SIGNAL_KEY + `_${i}`,
                task,
                cancel,
                single,
                SIGNAL_KEY
            );

            taskList.push(task);

            const flag = GlobalAccessReader.getGlobalData(GameGlobalKeys.InterruptProcess);
            if (flag) {
                this._async.abortAll(SIGNAL_KEY);
            }
        }
        /*
        for (let i: number = 0; i < info.length; i++) {
            let particleNode = await this._particlePool.getParticleNode();
            particleNode.active = true;
            this.node.addChild(particleNode);
            let ani = AniSysTools.findAndGetIAniComponent(particleNode) as IAnimationControl;
            ani.init();
            let startPos = uiTransform.convertToNodeSpaceAR(info[i].startPos);
            let endPos = uiTransform.convertToNodeSpaceAR(info[i].endPos);
            //this.testPos(startPos, endPos);
            particleNode.setPosition(startPos);
            let particleEmitter = FindComponent.findComponentInChildren(particleNode, ParticleSystem);
            particleEmitter.clear();
            particleEmitter.play();
            taskList.push(this.shootParticle(particleNode, startPos, endPos));
            
        }*/
        AudioManager.instance.playSound(SoundList.light_move, SOUND_TYPE.ONE_SHOT, AudioSourceList.BasicAS);
        await Promise.all(taskList);
    }

    private cancelAll = (): void => {
        Tween.stopAllByTag(1);
        while (this.node.children.length > 0) {
            const child = this.node.children[0];
            child.removeFromParent();
            const testComponent = AniSysTools.findAndGetIAniComponent(child) as IAnimationControl;
            if (testComponent) {
                const ani = (testComponent as AnimationController).ani;
                if (!ani) {
                    //console.log();
                }
            }
            if (child && isValid(child, true)) {
                child.destroy();
            }

        }
    }


    private shootParticle(
        particleNode: Node,
        startPos: Vec3,
        endPos: Vec3,
        opt?: { duration?: number; amplitude?: number; frequency?: number }
    ): { promise: Promise<void>, cancel: (resolveAnyway?: boolean) => void, t: Tween<Node> } {

        const duration = opt?.duration ?? 0.3; // ← 外部 now 決定長度
        const amplitude = opt?.amplitude ?? 50;
        const frequency = opt?.frequency ?? 0.5;
        const uiTransform = this.node.getComponent(UITransform)!;
        const tempVec3 = new Vec3();
        const ani = AniSysTools.findAndGetIAniComponent(particleNode) as IAnimationControl;
        ani.playAni({ aniState: ANI_STATE_NAME.APPEAR });



        let resolveFunc: (() => void) | null = null;
        let tw: Tween<Node>;
        const p = new Promise<void>(async (resolve, reject) => {
            resolveFunc = resolve;
            tw = tween(particleNode)
                .to(duration, {}, {
                    onUpdate: (target, ratio) => {
                        tempVec3.x = startPos.x + (endPos.x - startPos.x) * ratio; // 水平移動到終點
                        tempVec3.y = startPos.y + (endPos.y - startPos.y) * ratio + Math.sin(ratio * frequency * Math.PI * 2) * amplitude; // 垂直正弦波移動
                        particleNode.setPosition(tempVec3);
                    }
                })
                .call(async () => {
                    resolveFunc?.();
                    try {

                        await ani.playAniInPromise({ aniState: ANI_STATE_NAME.END });

                    } finally {

                        this.node.removeChild(particleNode);
                        particleNode.destroy();
                        //resolveFunc();
                        /*
                        ani.playAniWithCallBack(() => {
                            this.node.removeChild(particleNode);
                            particleNode.destroy();
                            //this._particlePool.recycleParticleNode(particleNode);
                            resolve();
                        },false,{aniState:ANI_STATE_NAME});*/
                    }

                })
                .tag(1)
                .start()

        });

        return { promise: p, cancel: resolveFunc, t: tw };
    }

}


