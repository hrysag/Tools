import { _decorator, CCString, Component, Node, Vec3, UITransform } from 'cc';
import {
    AnimationControllersPoolManager,
    GameUtilsTools,
    AnimationController
} from '../../../ReferencePath';
import { IWildMovementData, IBasicMovementData } from '../../../Slot/ISlotDefinitionData';
import { AniSysTools } from '../../../MyUtils/AnimationSystemV2/AniTools/AniSysTools';
import { IWildMoveData } from '../WildMoveFXCtrl';
import { WildLayerCtrl } from '../WildLayerCtrl';
const DEBUG_TITLE = 'WildFXCtrl';
const WILD_LIGHT_MOVE_ANIMATION_TYPE = 'Transfer';


export class WildFXCtrl {

    //----wild位移動畫Map key:reelIndex value:FX動畫節點
    private _wildFXAniMap: Map<number, Node> = new Map();
    private _wildLayerCtrl: WildLayerCtrl = null;//--20260304--new:新增需求需要把wild回歸右壓左的設計,取消進行表演時提至最上層,結束後在右壓左

    set wildLayerCtrl(value: WildLayerCtrl) {
        this._wildLayerCtrl = value;
    }


    constructor(
        //private _wildMoveFXContainer: Node,
        private _wildMoveAnimationPrefabId: string
    ) {

    }

    public removeFX(reelId: number): void {
        const aniNode = this._wildFXAniMap.get(reelId);
        if (aniNode) {
            aniNode.removeFromParent();
            this._wildFXAniMap.delete(reelId);
            AnimationControllersPoolManager.getInstance().pushInstanceToPool(this._wildMoveAnimationPrefabId, aniNode);
        }
    }

    public triggerWildFrontBgAniFrameEvtBack = (...args): void => {
        //args>-['Wild_open', 1]
        const index = args[1];
        const fxAniNode = this._wildFXAniMap.get(index);
        if (fxAniNode) {
            const aniComp = AniSysTools.findAndGetIAniComponent(fxAniNode) as AnimationController;
            aniComp.playAni({ aniState: WILD_LIGHT_MOVE_ANIMATION_TYPE });
        }
    }

    public async initWildAniLayer(reelIndex: number, reelFXWpos: Vec3): Promise<void> {


        let aniNode = AnimationControllersPoolManager.getInstance().getInstantiatedObjFromPool(this._wildMoveAnimationPrefabId);
        if (!aniNode) {
            //GameUtilsTools.debugLog(DEBUG_TITLE,'initWildAniLayer: Failed to get aniNode from pool',{reelIndex},'warn');
            return null;
        }

        //--20260309以下為舊的流程
        //let reelWPos = reelFXWpos;
        //const uiTransform = this._wildMoveFXContainer.getComponent(UITransform);
        //const localPos = uiTransform.convertToNodeSpaceAR(reelWPos);
        //await this.addAniNode(aniNode, this._wildMoveFXContainer);
        //aniNode.active = true;
        //aniNode.setPosition(localPos);

        //--20260309-NEW
        await this._wildLayerCtrl.setEffectToEffectLayer(reelIndex, aniNode, reelFXWpos);
        const aniInterfaceComponent = AniSysTools.findAndGetIAniComponent(aniNode) as AnimationController;
        aniInterfaceComponent?.init();
        this._wildFXAniMap.set(reelIndex, aniNode);

    }

    /*
    private async addAniNode(aniNode: Node, container: Node): Promise<Node> {
        return new Promise((resolve, reject) => {
            container.once(Node.EventType.CHILD_ADDED, () => {
                resolve(aniNode);
            });
            aniNode.active = true;
            container.addChild(aniNode);
        })
    }*/

}