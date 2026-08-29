import { _decorator, Component, Node, UITransform, v3, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('WildLayerCtrl')
export class WildLayerCtrl extends Component {

    @property({ type: Node, displayName: 'Ree_1_Whole_container', tooltip: 'R1容器_移動後', visible: true })
    private _container_R1_Whole: Node = null;

    @property({ type: Node, displayName: 'Ree_2_Whole_container', tooltip: 'R2容器_移動後', visible: true })
    private _container_R2_Whole: Node = null;

    @property({ type: Node, displayName: 'Ree_3_Whole_container', tooltip: 'R3容器_移動後', visible: true })
    private _container_R3_Whole: Node = null;

    @property({ type: Node, displayName: 'Ree_1_Move_container', tooltip: 'R1容器_移動中', visible: true })
    private _container_R1_Move: Node = null;

    @property({ type: Node, displayName: 'Ree_2_Move_container', tooltip: 'R2容器_移動中', visible: true })
    private _container_R2_Move: Node = null;

    @property({ type: Node, displayName: 'Ree_3_Move_container', tooltip: 'R3容器_移動中', visible: true })
    private _container_R3_Move: Node = null;

    @property({ type: Node, displayName: 'Ree_1_No_Movement_Whole_container', tooltip: 'R1容器_沒有移動', visible: true })
    private _container_R1_NoMove_Whole: Node = null;

    @property({ type: Node, displayName: 'Ree_2_No_Movement_Whole_container', tooltip: 'R2容器_沒有移動', visible: true })
    private _container_R2_NoMove_Whole: Node = null;

    @property({ type: Node, displayName: 'Ree_3_No_Movement_Whole_container', tooltip: 'R3容器_沒有移動', visible: true })
    private _container_R3_NoMove_Whole: Node = null;

    @property({ type: Node, displayName: 'Ree_1_Effect_container', tooltip: 'R1容器_效果', visible: true })
    private _container_R1_Effect: Node = null;

    @property({ type: Node, displayName: 'Ree_2_Effect_container', tooltip: 'R2容器_效果', visible: true })
    private _container_R2_Effect: Node = null;

    @property({ type: Node, displayName: 'Ree_3_Effect_container', tooltip: 'R3容器_效果', visible: true })
    private _container_R3_Effect: Node = null;

    private _aryWholeContainer: Node[];

    constructor() {
        super();


    }

    protected onLoad(): void {
        this._aryWholeContainer = [
            this._container_R1_Whole,
            this._container_R1_Move,
            this._container_R2_Whole,
            this._container_R2_Move,
            this._container_R3_Whole,
            this._container_R3_Move,
            this._container_R1_NoMove_Whole,
            this._container_R2_NoMove_Whole,
            this._container_R3_NoMove_Whole,
            this._container_R1_Effect,
            this._container_R2_Effect,
            this._container_R3_Effect
        ];
        //this.reSetContainer();
        console.log();
    }

    public reSetContainer(): void {

        for (let i = 0; i < this._aryWholeContainer.length; i++) {
            const container = this._aryWholeContainer[i];
            container.active = true;
        }
    }

    public setWildToWholeLayer(reelIndex: number, aniNode: Node, wpos?: Vec3): void {

        const container = this.getWholeContainerByReelIndex(reelIndex);
        if (container) {
            container.addChild(aniNode);
            if (wpos) {
                const uiTransform = container.getComponent(UITransform);
                const finalLPos = uiTransform.convertToNodeSpaceAR(wpos);
                aniNode.position = finalLPos;
            } else {
                aniNode.position = v3(0, 0, 0);
            }
            container.active = true;
        }
    }

    public setWildToNoMoveWholeLayer(reelIndex: number, aniNode: Node, wpos?: Vec3): void {

        const container = this.getNoWholeContainerByReelIndex(reelIndex);
        if (container) {
            container.addChild(aniNode);
            if (wpos) {
                const uiTransform = container.getComponent(UITransform);
                const finalLPos = uiTransform.convertToNodeSpaceAR(wpos);
                aniNode.position = finalLPos;
            } else {
                aniNode.position = v3(0, 0, 0);
            }
            container.active = true;
        }

    }

    public setWildToMoveLayer(reelIndex: number, aniNode: Node, wpos?: Vec3): void {

        const container = this.getMoveContainerByReelIndex(reelIndex);

        if (container) {

            container.addChild(aniNode);
            if (wpos) {
                const uiTransform = container.getComponent(UITransform);
                const finalLPos = uiTransform.convertToNodeSpaceAR(wpos);
                aniNode.position = finalLPos;
            } else {
                aniNode.position = v3(0, 0, 0);
            }
            container.active = true;
        }
    }

    public async setEffectToEffectLayer(reelIndex: number, aniNode: Node, wpos?: Vec3): Promise<void> {

        const container = this.getEffectContainerByReelIndex(reelIndex);
        if (container) {
            await this.addEffectNode(aniNode, container);
            if (wpos) {
                const uiTransform = container.getComponent(UITransform);
                const finalLPos = uiTransform.convertToNodeSpaceAR(wpos);
                aniNode.position = finalLPos;
            } else {
                aniNode.position = v3(0, 0, 0);
            }
            container.active = true;
        }
    }

    private async addEffectNode(aniNode: Node, container: Node): Promise<Node> {
        return new Promise((resolve, reject) => {
            container.once(Node.EventType.CHILD_ADDED, () => {
                resolve(aniNode);
            });
            aniNode.active = true;
            container.addChild(aniNode);
        })
    }

    public getWildAniNodeByReelIndex(reelIndex: number): Node {

        let aniNode: Node = null;
        const moveContainer = this.getMoveContainerByReelIndex(reelIndex);
        if (moveContainer && moveContainer.children.length > 0) {
            aniNode = moveContainer.children[0];
        } else {
            const wholeContainer = this.getWholeContainerByReelIndex(reelIndex);
            if (wholeContainer && wholeContainer.children.length > 0) {
                aniNode = wholeContainer.children[0];
            } else {
                const noMoveWholeContainer = this.getNoWholeContainerByReelIndex(reelIndex);
                if (noMoveWholeContainer && noMoveWholeContainer.children.length > 0) {
                    aniNode = noMoveWholeContainer.children[0];
                }
            }
        }
        return aniNode;
    }

    public switchLayerToWholeLayer(reelIndex: number): void {

        const moveContainer = this.getMoveContainerByReelIndex(reelIndex);
        const wholeContainer = this.getWholeContainerByReelIndex(reelIndex);
        if (moveContainer && wholeContainer) {
            const wildAniNode = moveContainer.children[0];
            if (wildAniNode) {
                const wpos = wildAniNode.getWorldPosition().clone();
                wildAniNode.parent = wholeContainer;
                wildAniNode.setWorldPosition(wpos);
            }
        }
        this.sortAllContainer();
    }

    public switchLayerToNoWholeLayer(reelIndex: number): void {

        const moveContainer = this.getMoveContainerByReelIndex(reelIndex);
        const noWholeContainer = this.getNoWholeContainerByReelIndex(reelIndex);
        if (moveContainer && noWholeContainer) {
            const wildAniNode = moveContainer.children[0];
            if (wildAniNode) {
                const wpos = wildAniNode.getWorldPosition().clone();
                wildAniNode.parent = noWholeContainer;
                wildAniNode.setWorldPosition(wpos);
            }
        }
        this.sortAllContainer();
    }


    //--這邊已經照順序分配好了,所以直接找
    public sortAllContainer(): void {

        const len = this._aryWholeContainer.length;
        for (let i = 0; i < len; i++) {
            const container = this._aryWholeContainer[i];
            const children = container.children;
            const childLen = children.length;
            if (childLen > 0) {
                container.active = true;
            } else {
                container.active = false;
            }
        }
    }

    public getEffectContainerByReelIndex(reelIndex: number): Node {

        let container: Node = null;
        switch (reelIndex) {
            case 1:
                container = this._container_R1_Effect;
                break;
            case 2:
                container = this._container_R2_Effect;
                break;
            case 3:
                container = this._container_R3_Effect;
                break;
            default:
                break;
        }
        return container;
    }

    public getNoWholeContainerByReelIndex(reelIndex: number): Node {

        let container: Node = null;
        switch (reelIndex) {
            case 1:
                container = this._container_R1_NoMove_Whole;
                break;
            case 2:
                container = this._container_R2_NoMove_Whole;
                break;
            case 3:
                container = this._container_R3_NoMove_Whole;
                break;
            default:
                break;
        }
        return container;
    }

    public getWholeContainerByReelIndex(reelIndex: number): Node {

        let container: Node = null;
        switch (reelIndex) {
            case 1:
                container = this._container_R1_Whole;
                break;
            case 2:
                container = this._container_R2_Whole;
                break;
            case 3:
                container = this._container_R3_Whole;
                break;
            default:
                break;
        }
        return container;
    }

    public getMoveContainerByReelIndex(reelIndex: number): Node {

        let container: Node = null;
        switch (reelIndex) {
            case 1:
                container = this._container_R1_Move;
                break;
            case 2:
                container = this._container_R2_Move;
                break;
            case 3:
                container = this._container_R3_Move;
                break;
            default:
                break;
        }
        return container;
    }


}


