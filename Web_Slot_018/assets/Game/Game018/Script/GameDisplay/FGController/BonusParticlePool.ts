import { _decorator, Component, Node, ParticleSystem } from 'cc';
import { ParticleExtension } from '../../MyUtils/AnimationSystem/Components/ParticleExtension';
import { AnimationController } from '../../MyUtils/AnimationSystem/Components/AnimationController';
import { FindComponent } from '../../MyUtils/FindComponent';
import { AnimationControllersPoolManager } from '../../MyUtils/AnimationSystem/AnimationControllersPoolManager';

const { ccclass, property } = _decorator;
const CollectionBoxNode_Name = 'FX_bonus_particle';//--FG_CollectBox_all prefab name
export class BonusParticlePool {

    private _particlePool: Node[] = [];


    constructor() {

        this._particlePool = [];
    }


    public getParticleNode(): Promise<Node> {

        return new Promise<Node>((resolve, reject) => {

            if (this._particlePool.length > 0) {
                //return this._particlePool.pop();
                resolve(this._particlePool.pop());
            } else {
                //let particleNode = AnimationControllersPoolManager.getInstance().getPrefabNode(CollectionBoxNode_Name);
                resolve(AnimationControllersPoolManager.getInstance().getPrefabNode(CollectionBoxNode_Name));
                //return particleNode;
            }
        })
    }

    public recycleParticleNode(particleNode: Node): void {

        if (particleNode) {
            /*
            const particleEmitter = FindComponent.findComponentInChildren(particleNode, ParticleSystem);
            particleEmitter?.stop();
            particleEmitter?.clear();
            console.log();
            */

            //----no use
            //particleEmitter?.stopEmitting();


            const ani = FindComponent.findComponentInChildren(particleNode, AnimationController);
            //ani?.resetData();
            ani?.stopAni();
            //--幹.particle 在node被active=false的時候會觸發onDisable,裡面自己會處理(自己不需要再做了)
            particleNode.active = false;
            //const particleEmitter = FindComponent.findComponentInChildren(particleNode, ParticleSystem);
            //particleEmitter?.stop();
            //particleEmitter?.clear();
            this._particlePool.push(particleNode);
            console.log();
        }
    }

    //--結束FG的時候要把所有的particle都destroy掉
    public destroyAllParticles(): void {
        for (let particleNode of this._particlePool) {
            //const particleExtension = FindComponent.findComponentInChildren(particleNode, ParticleExtension);
            //particleExtension?.stopParticle();

            /*
            const particleEmitter = FindComponent.findComponentInChildren(particleNode, ParticleSystem);
            particleEmitter?.stop();
            particleEmitter?.clear();
            particleEmitter?.stopEmitting();
            */


            const ani = FindComponent.findComponentInChildren(particleNode, AnimationController);
            ani?.resetData();
            //particleEmitter?.destroy();
            particleNode.active = false;
            particleNode.destroy();
            particleNode = null;
            console.log();
        }
        this._particlePool = [];
    }


}


