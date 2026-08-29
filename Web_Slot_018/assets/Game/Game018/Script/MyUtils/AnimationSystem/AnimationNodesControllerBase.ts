import { _decorator, Component, Node, Vec3, UITransform, v3 } from 'cc';
import { AnimationControllersPoolManager } from './AnimationControllersPoolManager';
import { DisplayStageNodeForAniNodePropertyDef } from './Definitions/DisplayStageNodeForAniNodePropertyDef';
import { playIAniData, DYN_NODE_PROPERTIES } from './Definitions/AnimationDataOptions';
import { AniSysTools } from './AniTools/AniSysTools';
import { IAniWithAniCtrl } from './Components/AniStateLists/AnimationPlayStateBase';
import { IAnimationControl } from './Definitions/IAnimationControl';
import { AnimationController } from './Components/AnimationController';
import { SpineController } from './Components/SpineController';
import { MixedASController } from './Components/MixedASController';
import { CustomAnimationController } from './Components/CustomAnimationController';
import { PrefabAdapter } from './PrefabAdapter';
import { FindComponent } from '../FindComponent';

const { ccclass, property } = _decorator;

const ANI_CONTROLLER_MAP: { [key: string]: { new(...args: any[]): IAnimationControl } } =
{
    [AnimationController.name]: AnimationController,
    [SpineController.name]: SpineController,
    [MixedASController.name]: MixedASController,
    [CustomAnimationController.name]: CustomAnimationController
}

/*
const  DYN_NODE_PROPERTIES = {
    PREFAB_ID: 'prefabID',
    TOKEN_ID:'tokenID',
    GROUP_ID:'groupID'
}*/

@ccclass('AnimationNodesControllerBase')

export class AnimationNodesControllerBase extends Component {

    @property({ type: PrefabAdapter, visible: true, displayName: 'PrefabAdapter', tooltip: '將要在物件持運作的prefab掛入' })
    protected _prefabAdapter: PrefabAdapter = null;

    @property({ type: [DisplayStageNodeForAniNodePropertyDef], visible: true, displayName: 'AniNodeStageList', tooltip: '動畫節點需要添加到的節點舞台清單' })

    protected _aniNodeStageContainerList: DisplayStageNodeForAniNodePropertyDef[] = [];

    protected _aniNodeStageContainerMap: { [key: string]: Node } = {};

    protected _aryRunningNode: Node[] = [];//--這個是用來存放正在播放的node

    get aryRunningNode(): Node[] {
        return this._aryRunningNode;
    }

    constructor() {
        super();
    }

    protected onLoad(): void {

        if (this._aniNodeStageContainerList.length > 0) {
            for (let displayStageNode of this._aniNodeStageContainerList) {
                this._aniNodeStageContainerMap[displayStageNode.key] = displayStageNode.node;
            }
        }

        AnimationControllersPoolManager.getInstance().init();
        if (this._prefabAdapter) {
            AnimationControllersPoolManager.getInstance().setPrefabForPropertyList(this._prefabAdapter.prefabForPropertyList);
        }
    }

    public init(): void {

    }

    //--可以動態的註冊container
    public registerContainer(type: string, container: Node): void {

        if (!this._aniNodeStageContainerMap[type]) {
            this._aniNodeStageContainerMap[type] = container;
        }

    }

    public unregisterContainer(type: string): void {

        if (this._aniNodeStageContainerMap[type]) {
            delete this._aniNodeStageContainerMap[type];
        }
    }

    public getPrefabNode(prefabKey: string): Node {
        return AnimationControllersPoolManager.getInstance().getPrefabNode(prefabKey);
    }


    public addAnimationData(IAniData: playIAniData): Node {

        let targetNode: Node;
        //--篩選特殊的產生條件
        //spRuleCheck = this.checkSpRuleForExist(aniData);

        if (IAniData.tokenID != '' && IAniData.duplicateTokenId == '') {

            targetNode = AnimationControllersPoolManager.getInstance().getPrefabNode(IAniData.prefabKey);
            //--定義動態的特殊屬性-需要開出來讓node掛上去
            targetNode[DYN_NODE_PROPERTIES.PREFAB_ID] = IAniData.prefabKey;
            targetNode[DYN_NODE_PROPERTIES.GROUP_ID] = [IAniData.groupID];
            targetNode[DYN_NODE_PROPERTIES.TOKEN_ID] = IAniData.tokenID;
            targetNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO] = IAniData.SymbolIconInfoData;

            const localNodeContainer = this._aniNodeStageContainerMap[IAniData.containerNodeId];
            let localPos: Vec3 = v3(0, 0, 0);

            if (IAniData.wPos) {
                localPos = localNodeContainer.getComponent(UITransform).convertToNodeSpaceAR(IAniData.wPos);
            }

            //--這邊要注意排列的順序,wild的顯示layer應該比其他symbol的顯示要高
            localNodeContainer.addChild(targetNode);
            targetNode.active = true;
            this._aryRunningNode.push(targetNode);

            //--抽出component 接手動畫資料處理
            let aniInterfaceComponent: IAnimationControl | null = null;
            aniInterfaceComponent = AniSysTools.findAndGetIAniComponent(targetNode) as IAnimationControl;


            if (aniInterfaceComponent) {
                aniInterfaceComponent.init();
                aniInterfaceComponent.slotMachineIndexInfo = IAniData.SymbolIconInfoData;
                aniInterfaceComponent.setAniDataInfo(IAniData.aniInfo);
                aniInterfaceComponent.tokenID = IAniData.tokenID;
                aniInterfaceComponent.groupID = [IAniData.groupID];
            } else {
                console.warn('No compatible animation controller found on targetNode.', targetNode.name);
            }

            targetNode.setPosition(localPos);

        } else if (IAniData.duplicateTokenId != '') {

            if (!targetNode) {
                //console.warn('Duplicate tokenID found.', IAniData.tokenID);
            }

        }

        return targetNode;

    }


    public getAniNodeByTokenId(tokenId: string): Node {

        for (let node of this._aryRunningNode) {
            if (node[DYN_NODE_PROPERTIES.TOKEN_ID] == tokenId) {
                return node;
            }
        }
        return null;
    }

    public getAniNodesByGroupId(groupId: number): Node[] {

        let aryNode: Node[] = [];
        for (let node of this._aryRunningNode) {
            const groupList = node[DYN_NODE_PROPERTIES.GROUP_ID];
            if (groupList?.includes(groupId)) {
                aryNode.push(node);
            }
        }
        return aryNode;
    }

    /**
     * 透過一串groupID來取得ani物件.回傳資料將會是展開的ani物件
     * @param groups 
     * @param cutDuplication 替除重複的資料(一個ani有多種group身分)
     * @returns IAnimationPlugin
     */
    public getAniNodeListByGroups(groupIdList: number[], cutDuplication: boolean = true): Node[] {

        let aryNode: Node[] = [];
        let addedTokenIds: Set<any> = new Set(); // 使用 Set 去重複

        for (let node of this._aryRunningNode) {
            if (!node[DYN_NODE_PROPERTIES.GROUP_ID] || !node[DYN_NODE_PROPERTIES.TOKEN_ID]) {
                console.warn("Node missing required properties.");
                continue; // 跳過缺少屬性的節點
            }
            for (let groupId of groupIdList) {
                if (node[DYN_NODE_PROPERTIES.GROUP_ID].indexOf(groupId) !== -1) {
                    if (!addedTokenIds.has(node[DYN_NODE_PROPERTIES.TOKEN_ID])) {
                        aryNode.push(node);
                        addedTokenIds.add(node[DYN_NODE_PROPERTIES.TOKEN_ID]);
                    }

                    break; // 找到匹配的 groupId，跳出內層迴圈
                } else {
                    //console.warn("Node missing required groupId.");
                }
            }
        }

        return aryNode;
    }

    private checkDuplicateTargetNode(node: Node, ary: Node[]): boolean {
        for (let targetNode of ary) {
            if (node[DYN_NODE_PROPERTIES.TOKEN_ID] == targetNode[DYN_NODE_PROPERTIES.TOKEN_ID]) {
                return true;
            }
        }

        return false;
    }

    public getAniNodeByName(name: string): Node {

        for (let node of this._aryRunningNode) {
            if (node.name == name) {
                return node;
            }
        }
        return null;
    }


    public playAniByTokenId(tokenId: string, trackId?: string): void {

        for (let node of this._aryRunningNode) {
            const aniComp: IAnimationControl = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
            if (aniComp.tokenID == tokenId) {
                node.active = true;
                aniComp?.playAni(trackId);
                break;
            }
        }
    }

    public playAnisByGroup(groupId: number, trackId?: string): void {

        for (let node of this._aryRunningNode) {
            if (node[DYN_NODE_PROPERTIES.GROUP_ID].indexOf(groupId) != -1) {
                const aniComp: IAnimationControl = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                node.active = true;
                aniComp?.playAni(trackId);
            }
        }
    }

    public playAnisByIAniWithAniCtrl(aniList: IAniWithAniCtrl[]): void {

        for (let aniItem of aniList) {
            aniItem.IAni.playAniWithAniCtrDef(aniItem.aniCtrl);
        }
    }


    public playAniByName(name: string, trackId?: string): void {

        for (let node of this._aryRunningNode) {
            if (node.name == name) {
                const aniComp: IAnimationControl = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                node.active = true;
                aniComp?.playAni(trackId);
                break;
            }
        }
    }


    public playAllAnis(trackId?: string): void {

        for (let node of this._aryRunningNode) {
            const aniComp: IAnimationControl = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
            if (aniComp) {
                node.active = true;
                aniComp.playAni(trackId);
            }
        }
    }

    public async playAniByTokenIdWithPromise(tokenId: string, trackId?: string): Promise<void> {

        let aniComp: IAnimationControl | null = null;

        for (const node of this._aryRunningNode) {
            const comp = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
            if (comp?.tokenID === tokenId) {
                aniComp = comp;
                node.active = true;
                break;
            }
        }

        if (!aniComp) {
            throw new Error(`No animation component found with tokenId: ${tokenId}`);
        }

        try {
            await aniComp.playAniInPromise(trackId);
        } catch (e) {
            console.warn(`playAniByTokenIdWithPromise error (tokenId=${tokenId}):`, e);
            throw e;
        }
    }

    public changeGroupAniInSameState(groupIds: number[], key: string): void {
        for (let node of this._aryRunningNode) {
            const nodeGroupIds = node[DYN_NODE_PROPERTIES.GROUP_ID] as number[];
            if (nodeGroupIds.some(id => groupIds.includes(id))) {
                let aniExtensionComponent: IAnimationControl = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                node.active = true;
                aniExtensionComponent.playAni(key);
            }
        }

    }

    //--強制中斷
    public stopPromiseAniByGroupId(groupId: number): void {
        for (let node of this._aryRunningNode) {

            if (node[DYN_NODE_PROPERTIES.GROUP_ID]?.includes(groupId)) {
                const aniExtensionComponent: IAnimationControl = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                aniExtensionComponent?.stopPromiseAni();

            }
        }
    }

    //--20250731新增特殊條件排除
    public async playAnisByGroupWithExclusion(groupId: number, excludeGroupIds: number[] = [], trackId?: string): Promise<void> {
        const nodesToPlay: Node[] = [];

        for (const node of this._aryRunningNode) {
            const groupIds: number[] | undefined = node[DYN_NODE_PROPERTIES.GROUP_ID];
            const isInTargetGroup = groupIds?.includes(groupId);
            const isInExcludeGroup = excludeGroupIds.some(excludeId => groupIds?.includes(excludeId));
            // 如果在目標群組中且不在排除群組中，則加入播放列表
            if (isInTargetGroup && !isInExcludeGroup) {
                nodesToPlay.push(node);
            }
        }
        await this.playAnisByNodesWithPromise(nodesToPlay, trackId);
    }

    //--20250731 修改(將查找與播放分開)
    public async playAnisByGroupWithPromise(groupId: number, trackId?: string): Promise<void> {

        const nodesToPlay: Node[] = [];
        for (let node of this._aryRunningNode) {

            if (node[DYN_NODE_PROPERTIES.GROUP_ID]?.includes(groupId)) {
                nodesToPlay.push(node);
            }
        }
        await this.playAnisByNodesWithPromise(nodesToPlay, trackId);
    }

    //--20250731新增
    public async playAnisByNodesWithPromise(nodes: Node[], trackId?: string): Promise<void> {

        const promises: Promise<void>[] = [];
        for (const node of nodes) {
            const aniExtensionComponent: IAnimationControl = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
            node.active = true;

            const safePlay = aniExtensionComponent.playAniInPromise(trackId).catch(e => {
                console.warn(`[playAnisByNodes 播放錯誤] node: ${node.name}`, e);
                throw e;
            });

            promises.push(safePlay);
        }

        await Promise.all(promises);
    }

    protected forTestDeBug(trackTarget: Node[], title: string): void {
        //-DYN_NODE_PROPERTIES.PREFAB_ID
        for (let i = 0; i < trackTarget.length; i++) {
            console.log(title, trackTarget[i][DYN_NODE_PROPERTIES.PREFAB_ID]);
        }

    }


    public async playAniByNameWithPromise(name: string, trackId?: string): Promise<void> {

        let aniComp: IAnimationControl | null = null;
        for (const node of this._aryRunningNode) {
            if (node.name === name) {
                aniComp = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                if (!aniComp) {
                    throw new Error(`Animation component not found on node "${name}".`);
                }
                node.active = true;
                break;
            }
        }

        if (!aniComp) {
            throw new Error(`Node with name "${name}" not found.`);
        }

        try {
            await aniComp.playAniInPromise(trackId);
        } catch (e) {
            console.warn('playAniByNameWithPromise error:', e);
            throw e;
        }
    }

    public async playAllAnisWithPromise(): Promise<void> {

        const promises: Promise<void>[] = [];

        for (const node of this._aryRunningNode) {
            const aniComp = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
            if (aniComp) {
                node.active = true;
                //--使用預設的track
                promises.push(aniComp.playAniInPromise(null));
            }
        }

        try {
            await Promise.all(promises);
        } catch (e) {
            console.warn('playAllAnisWithPromise error:', e);
            throw e;
        }
    }

    public stopAndRemoveAllAnis(usePool: boolean = true): void {

        for (const node of this._aryRunningNode) {
            const aniExtensionComponent = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
            node.parent?.removeChild(node);
            //aniExtensionComponent?.stopAni();
            aniExtensionComponent?.stopPromiseAni(); // 強制停止promise動畫
            // 回收
            if (usePool) {
                const prefabId = node[DYN_NODE_PROPERTIES.PREFAB_ID];
                this.removeSingleNodeData(node);
                AnimationControllersPoolManager.getInstance().pushInstancePrefabNodeToPool(prefabId, node);
            }
        }

        this._aryRunningNode = [];
    }



    public stopAndRemoveAni(node: Node, usePool: boolean = true): void {

        const targetToken = node[DYN_NODE_PROPERTIES.TOKEN_ID];

        for (let i = 0; i < this._aryRunningNode.length; i++) {
            const runningNode = this._aryRunningNode[i];
            const runningToken = runningNode[DYN_NODE_PROPERTIES.TOKEN_ID];

            if (targetToken === runningToken) {
                const aniComponent = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                node.parent?.removeChild(node);
                this._aryRunningNode.splice(i, 1); // 移除節點後結束迴圈

                aniComponent?.stopAni();
                if (usePool) {
                    const prefabId = node[DYN_NODE_PROPERTIES.PREFAB_ID];
                    this.removeSingleNodeData(node);
                    AnimationControllersPoolManager.getInstance().pushInstancePrefabNodeToPool(prefabId, node);
                }
                break;
            }
        }
    }

    public stopAndRemoveAniByTokenId(tokenId: string, usePool: boolean = true): void {

        for (let i = 0; i < this._aryRunningNode.length; i++) {
            const node = this._aryRunningNode[i];
            const currentTokenId = node[DYN_NODE_PROPERTIES.TOKEN_ID];

            if (currentTokenId === tokenId) {
                const aniComp = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                node.parent?.removeChild(node);
                this._aryRunningNode.splice(i, 1);

                aniComp?.stopAni();
                if (usePool) {
                    const prefabId = node[DYN_NODE_PROPERTIES.PREFAB_ID];
                    this.removeSingleNodeData(node);
                    AnimationControllersPoolManager.getInstance().pushInstancePrefabNodeToPool(prefabId, node);
                }
                break;
            }
        }
    }

    public stopAndRemoveAnisByGroup(groupId: number, usePool: boolean = true): void {

        for (let i = this._aryRunningNode.length - 1; i >= 0; i--) {
            const node = this._aryRunningNode[i];
            const groupList = node[DYN_NODE_PROPERTIES.GROUP_ID];

            if (groupList?.includes(groupId)) {

                const aniComp = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                node.parent?.removeChild(node);
                this._aryRunningNode.splice(i, 1);

                aniComp?.stopAni();
                if (usePool) {
                    const prefabId = node[DYN_NODE_PROPERTIES.PREFAB_ID];
                    this.removeSingleNodeData(node);
                    AnimationControllersPoolManager.getInstance().pushInstancePrefabNodeToPool(prefabId, node);
                }
            }
        }
    }

    public stopAllAnis(): void {

        for (let node of this._aryRunningNode) {
            const aniComp: IAnimationControl = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
            aniComp?.stopAni();
        }
    }

    public stopAniByName(name: string): void {

        for (let node of this._aryRunningNode) {
            if (node.name == name) {
                const aniComp: IAnimationControl = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                aniComp?.stopAni();
                break;
            }
        }
    }



    public stopAniByTokenId(tokenId: string): void {

        for (let node of this._aryRunningNode) {
            if (node[DYN_NODE_PROPERTIES.TOKEN_ID] == tokenId) {
                const aniComp: IAnimationControl = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                aniComp?.stopAni();
                break;
            }
        }
    }

    public stopAnisByGroup(groupId: number): void {

        for (let node of this._aryRunningNode) {
            if (node[DYN_NODE_PROPERTIES.GROUP_ID].indexOf(groupId) != -1) {
                const aniComp: IAnimationControl = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                aniComp?.stopAni();
            }
        }
    }



    public pauseAllAnis(): void {
        for (let node of this._aryRunningNode) {
            const aniComp: IAnimationControl = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
            aniComp?.pauseAni();
        }
    }

    public pauseAniByName(name: string): void {
        for (let node of this._aryRunningNode) {
            if (node.name == name) {
                const aniComp: IAnimationControl = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                aniComp?.pauseAni();
                break;
            }
        }
    }

    public pauseAniByTokenId(tokenId: string): void {

        for (let node of this._aryRunningNode) {
            if (node[DYN_NODE_PROPERTIES.TOKEN_ID] == tokenId) {
                const aniComp: IAnimationControl = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                aniComp?.pauseAni();
                break;
            }
        }
    }

    public pauseAnisByGroup(groupId: number): void {

        for (const node of this._aryRunningNode) {
            const groupList = node[DYN_NODE_PROPERTIES.GROUP_ID];

            if (groupList?.includes(groupId)) {
                const aniComp = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                aniComp?.pauseAni();
            }
        }
    }

    public resumeAllAni(): void {

        for (const node of this._aryRunningNode) {
            const aniComp = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
            aniComp?.resumeAni();
        }
    }

    public resumeAniByName(name: string): void {

        for (let node of this._aryRunningNode) {
            if (node.name == name) {
                const aniComp: IAnimationControl = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                aniComp?.resumeAni();
                break;
            }
        }
    }

    public resumeAniByTokenId(tokenId: string): void {

        for (const node of this._aryRunningNode) {
            if (node[DYN_NODE_PROPERTIES.TOKEN_ID] === tokenId) {
                const aniComp = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                aniComp?.resumeAni();
                break;
            }
        }
    }


    public resumeAnisByGroup(groupId: number): void {

        for (const node of this._aryRunningNode) {
            const groupList = node[DYN_NODE_PROPERTIES.GROUP_ID];

            if (groupList?.includes(groupId)) {
                const aniComp = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                aniComp?.resumeAni();
            }
        }
    }


    public closeAllNode(): void {

        for (const node of this._aryRunningNode) {
            const aniComp = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
            aniComp?.stopAni();
            node.active = false;
        }
    }

    public closeNodeByName(name: string): void {
        for (const node of this._aryRunningNode) {
            if (node.name === name) {
                const aniComp = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                aniComp?.stopAni();
                node.active = false;
                break;
            }
        }
    }

    public closeNodeByTokenId(tokenId: string): void {

        for (const node of this._aryRunningNode) {
            if (node[DYN_NODE_PROPERTIES.TOKEN_ID] === tokenId) {
                const aniComp = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                aniComp?.stopAni();
                node.active = false;
                break;
            }
        }
    }

    public closeNodesByGroup(groupId: number): void {

        for (const node of this._aryRunningNode) {
            const groupList = node[DYN_NODE_PROPERTIES.GROUP_ID];
            if (groupList?.includes(groupId)) {
                const aniComp = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                aniComp?.stopAni();
                node.active = false;
            }
        }
    }


    public openAllNode(): void {
        for (let node of this._aryRunningNode) {
            node.active = true;
        }
    }


    public openNodeByName(name: string): void {
        for (let node of this._aryRunningNode) {
            if (node.name == name) {
                node.active = true;
                break;
            }
        }
    }


    public openNodeByTokenId(tokenId: string): void {

        for (let node of this._aryRunningNode) {
            if (node[DYN_NODE_PROPERTIES.TOKEN_ID] == tokenId) {
                node.active = true;
                break;
            }
        }
    }

    public openNodesByGroup(groupId: number): void {

        for (const node of this._aryRunningNode) {
            const groupList = node[DYN_NODE_PROPERTIES.GROUP_ID];
            if (groupList?.includes(groupId)) {
                node.active = true;
            }
        }
    }

    protected removeSingleNodeData(aniNode: Node): void {
        aniNode[DYN_NODE_PROPERTIES.GROUP_ID] = [];
        aniNode[DYN_NODE_PROPERTIES.TOKEN_ID] = '';
        aniNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO] = null;
        //--objPool需要用到PREFAB_ID的資料
        aniNode[DYN_NODE_PROPERTIES.PREFAB_ID] = '';

        let aniInterfaceComponent: IAnimationControl | null = null;
        aniInterfaceComponent = AniSysTools.findAndGetIAniComponent(aniNode) as IAnimationControl;
        aniInterfaceComponent.slotMachineIndexInfo = null;
        aniInterfaceComponent.tokenID = '';
        aniInterfaceComponent.groupID = [];
    }

    //--把assign的資料拔掉
    protected beforeStopAndRemoveAniNodeData(): void {
        for (let aniNode of this._aryRunningNode) {
            aniNode[DYN_NODE_PROPERTIES.GROUP_ID] = [];
            aniNode[DYN_NODE_PROPERTIES.TOKEN_ID] = '';
            aniNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO] = null;
            //--objPool需要用到PREFAB_ID的資料
            aniNode[DYN_NODE_PROPERTIES.PREFAB_ID] = '';

            let aniInterfaceComponent: IAnimationControl | null = null;
            aniInterfaceComponent = AniSysTools.findAndGetIAniComponent(aniNode) as IAnimationControl;
            aniInterfaceComponent.slotMachineIndexInfo = null;
            aniInterfaceComponent.tokenID = '';
            aniInterfaceComponent.groupID = [];
        }
    }

}


