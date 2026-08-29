import { _decorator, Component, Node, ParticleSystem } from 'cc';
import { AnimationController } from '../../MyUtils/AnimationSystemV2/Components/AnimationController';
import { FindComponent } from '../../MyUtils/FindComponent';
import { AnimationControllersPoolManager } from '../../MyUtils/ObjectPoolManager/AnimationControllersPoolManager/AnimationControllersPoolManager';

const PARTICLE_PREFAB_NAME = 'Trail';//-- prefab name

export class ParticlePool {

    private _particlePool: Node[] = [];

    constructor() {

        this._particlePool = [];
    }

    public getParticleNode(): Promise<Node> {

        return new Promise<Node>((resolve, reject) => {

            if (this._particlePool.length > 0) {
                resolve(this._particlePool.pop());
            } else {
                resolve(AnimationControllersPoolManager.getInstance().getInstantiatedObjFromPool(PARTICLE_PREFAB_NAME));
            }
        })
    }

    public recycleParticleNode(particleNode: Node): void {

        if (particleNode) {
            const ani = FindComponent.findComponentInChildren(particleNode, AnimationController);
            //ani?.resetData();
            ani?.goBackToDefault();
            //--幹.particle 在node被active=false的時候會觸發onDisable,裡面自己會處理(自己不需要再做了)
            particleNode.active = false;
            //const particleEmitter = FindComponent.findComponentInChildren(particleNode, ParticleSystem);
            //particleEmitter?.stop();
            //particleEmitter?.clear();
            this._particlePool.push(particleNode);
        }
    }

    //--結束的時候要把所有的particle都destroy掉
    public destroyAllParticles(): void {
        for (let particleNode of this._particlePool) {
            const ani = FindComponent.findComponentInChildren(particleNode, AnimationController);
            ani?.resetData();
            //particleEmitter?.destroy();
            particleNode.active = false;
            particleNode.destroy();
            particleNode = null;
        }
        this._particlePool = [];
    }

}


