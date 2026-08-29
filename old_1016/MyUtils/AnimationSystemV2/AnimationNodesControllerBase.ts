import { _decorator, Component, Node, Vec3, UITransform, v3, UIOpacity } from 'cc';
import { AnimationControllersPoolManager } from '../ObjectPoolManager/AnimationControllersPoolManager/AnimationControllersPoolManager';
import { DisplayStageNodeForAniNodePropertyDef } from './Definitions/DisplayStageNodeForAniNodePropertyDef';
import { DYN_NODE_PROPERTIES } from './Definitions/AnimationDataOptions';
import { AniSysTools } from './AniTools/AniSysTools';
import { AnimationStateType, IAniWithAniCtrl } from './Components/AniStateLists/AnimationPlayStateBase';
import { IAnimationControl } from './Definitions/IAnimationControl';
import { AnimationController } from './Components/AnimationController';
import { SpineController } from './Components/SpineController';
import { MultiSpineController } from './Components/MultiSpineController';
import { CustomAnimationController } from './Components/CustomAnimationController';
import { PrefabAdapter } from '../ObjectPoolManager/PrefabAdapter';
import { IPlayAniData } from '../AniHandoffManager/AniBuilder/IAniBuilder';
//import { Localization } from 'db://assets/Scripts/GameScripts/Localization';
//import { SlotRelayLang } from 'db://assets/Scripts/Utils/Config';
//import { LocalizationSpine } from 'db://assets/Scripts/GameScripts/LocalizationSpine';
import { FindComponent } from '../FindComponent';
import { PlaySelector } from './Definitions/IPlayOptions';
import { SlotRelayLang, LocalizationSpine, Localization } from 'db://assets/Scripts/ModuleEntry';


const { ccclass, property } = _decorator;


/*
const  DYN_NODE_PROPERTIES = {
    PREFAB_ID: 'prefabID',
    TOKEN_ID:'tokenID',
    GROUP_ID:'groupID'
}*/

@ccclass('AnimationNodesControllerBase')

export class AnimationNodesControllerBase<P> extends Component {

    /*
    @property({ type: PrefabAdapter, visible: true, displayName: 'PrefabAdapter', tooltip: '將要在物件持運作的prefab掛入' })
    protected _prefabAdapter: PrefabAdapter = null;
    */

    @property({ type: [DisplayStageNodeForAniNodePropertyDef], visible: true, displayName: 'AniNodeStageList', tooltip: '動畫節點需要添加到的節點舞台清單' })

    protected _aniNodeStageContainerList: DisplayStageNodeForAniNodePropertyDef[] = [];
    protected _aniNodeStageContainerMap: { [key: string]: Node } = {};
    protected _aryRunningNode: Node[] = [];//--這個是用來存放正在播放的node
    protected _currentLanguageKey: SlotRelayLang;

    get aryRunningNode(): Node[] {
        return this._aryRunningNode;
    }

    constructor() {
        super();

    }

    protected onLoad(): void {

        //--注入指定的舞台容器
        if (this._aniNodeStageContainerList.length > 0) {
            for (let displayStageNode of this._aniNodeStageContainerList) {
                this._aniNodeStageContainerMap[displayStageNode.key] = displayStageNode.node;
            }
        }
        this._currentLanguageKey = Localization.instance.currentLangKey;


        /*
        AnimationControllersPoolManager.getInstance().init();
        if (this._prefabAdapter) {
            AnimationControllersPoolManager.getInstance().setPrefabForPropertyList(this._prefabAdapter.prefabForPropertyList);
        }*/
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

    /*
    public getPrefabNode(prefabKey: string): Node {
        return AnimationControllersPoolManager.getInstance().getInstantiatedObjFromPool(prefabKey);
    }*/

    public async addAniToContainer(targetNode: Node, IAniData: IPlayAniData, group?: number[]): Promise<void> {

        const localNodeContainer = this._aniNodeStageContainerMap[IAniData.containerNodeId];
        /*
        let localPos: Vec3 = v3(0, 0, 0);
        if (IAniData.wPos) {
            localPos = localNodeContainer.getComponent(UITransform).convertToNodeSpaceAR(IAniData.wPos);
        }*/

        if (!targetNode[DYN_NODE_PROPERTIES.ADDED]) {
            //--這邊要注意排列的順序,wild的顯示layer應該比其他symbol的顯示要高
            if (IAniData.groupId != null) {
                targetNode[DYN_NODE_PROPERTIES.GROUP_ID].push(IAniData.groupId);
            }
            if (group) {
                targetNode[DYN_NODE_PROPERTIES.GROUP_ID] = [...targetNode[DYN_NODE_PROPERTIES.GROUP_ID], ...group];
            }
        }

        await this.addAniNode(targetNode, localNodeContainer);
    }

    public initAniComp(targetNode: Node, IAniData: IPlayAniData): void {

        //--抽出component 接手動畫資料處理(這邊一定要在添加到scene之後才能接著做)
        if (!targetNode[DYN_NODE_PROPERTIES.ADDED]) {

            let aniInterfaceComponent: IAnimationControl | null = null;

            if (targetNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL]) {
                aniInterfaceComponent = targetNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL] as IAnimationControl;
            } else {
                aniInterfaceComponent = AniSysTools.findAndGetIAniComponent(targetNode) as IAnimationControl;
                if (aniInterfaceComponent) {
                    targetNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL] = aniInterfaceComponent;
                }
            }

            if (aniInterfaceComponent) {
                aniInterfaceComponent.init();
                aniInterfaceComponent.slotMachineIndexInfo = {
                    reelIndex: IAniData.reelIndex,
                    iconIndex: IAniData.iconIndex,
                    symbolId: IAniData.symbolId
                }

                if (IAniData.aniInfo) {
                    aniInterfaceComponent.setAniDataInfo(IAniData.aniInfo);
                }
                aniInterfaceComponent.tokenID = IAniData.tokenId;
                //aniInterfaceComponent.groupID.push(IAniData.groupId);
            } else {
                console.warn('No compatible animation controller found on targetNode.', targetNode.name);
            }

            targetNode[DYN_NODE_PROPERTIES.ADDED] = true;
        }
    }

    public async initLanguageAniNode(targetNode: Node): Promise<void> {

        if (!targetNode[DYN_NODE_PROPERTIES.ADDED]) {
            await this.loadLanguageObject(targetNode);
        }
    }



    /**
     * 新產生的或是從交換器當中抽取回來的都進來這裡推到pool裡面
     * @param targetNode 
     * @param IAniData 
     * @param group 
     * @returns 
     */
    public async addAnimationData(targetNode: Node, IAniData: IPlayAniData, group?: number[]): Promise<Node> {

        /*
        const localNodeContainer = this._aniNodeStageContainerMap[IAniData.containerNodeId];
        let localPos: Vec3 = v3(0, 0, 0);
        if (IAniData.wPos) {
            localPos = localNodeContainer.getComponent(UITransform).convertToNodeSpaceAR(IAniData.wPos);
        }

        if (!targetNode[DYN_NODE_PROPERTIES.ADDED]) {
            //--這邊要注意排列的順序,wild的顯示layer應該比其他symbol的顯示要高
            if (IAniData.groupId != null) {
                targetNode[DYN_NODE_PROPERTIES.GROUP_ID].push(IAniData.groupId);
            }
            if (group) {
                targetNode[DYN_NODE_PROPERTIES.GROUP_ID] = [...targetNode[DYN_NODE_PROPERTIES.GROUP_ID], ...group];
            }
        }

        await this.addAniNode(targetNode, localNodeContainer);
        */
        await this.addAniToContainer(targetNode, IAniData, group);
        await this.initLanguageAniNode(targetNode);


        /*
        if (!targetNode[DYN_NODE_PROPERTIES.ADDED]) {
            await this.loadLanguageObject(targetNode);
        }*/

        this._aryRunningNode.push(targetNode);
        this.initAniComp(targetNode, IAniData);

        //--抽出component 接手動畫資料處理(這邊一定要在添加到scene之後才能接著做)
        /*
        if (!targetNode[DYN_NODE_PROPERTIES.ADDED]) {
            let aniInterfaceComponent: IAnimationControl | null = null;
            if (targetNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL]) {
                aniInterfaceComponent = targetNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL] as IAnimationControl;
            } else {
                aniInterfaceComponent = AniSysTools.findAndGetIAniComponent(targetNode) as IAnimationControl;
                if (aniInterfaceComponent) {
                    targetNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL] = aniInterfaceComponent;
                }
            }

            if (aniInterfaceComponent) {
                aniInterfaceComponent.init();
                aniInterfaceComponent.slotMachineIndexInfo = {
                    reelIndex: IAniData.reelIndex,
                    iconIndex: IAniData.iconIndex,
                    symbolId: IAniData.symbolId
                }

                if (IAniData.aniInfo) {
                    aniInterfaceComponent.setAniDataInfo(IAniData.aniInfo);
                }
                aniInterfaceComponent.tokenID = IAniData.tokenId;
            } else {
                console.warn('No compatible animation controller found on targetNode.', targetNode.name);
            }

            targetNode[DYN_NODE_PROPERTIES.ADDED] = true;
        }*/

        let localPos: Vec3 = v3(0, 0, 0);
        if (IAniData.wPos) {
            const localNodeContainer = this._aniNodeStageContainerMap[IAniData.containerNodeId];
            localPos = localNodeContainer.getComponent(UITransform).convertToNodeSpaceAR(IAniData.wPos);
        }
        targetNode.setPosition(localPos);
        return targetNode;
    }


    //--查詢是否存在相同的node
    public checkIsExistAniNode(checkData: P): { flag: boolean, tokenId: string } {
        const ruleCheck: { flag: boolean, tokenId: string } = this.checkSpRuleForExist(checkData);
        return ruleCheck;
    }
    /**
    * 特殊的檢查條件(同軸同格不重複相同元素)
    * @param args 
    * @returns 
    */
    protected checkSpRuleForExist = (...args): { flag: boolean, tokenId: string } => {

        const data: IPlayAniData = args[0];
        const reelIndex = data.reelIndex;
        const iconIndex = data.iconIndex;
        const iconId = data.symbolId;
        let returnData = { flag: false, tokenId: '' };
        for (let aniNode of this._aryRunningNode) {
            if (aniNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconIndex == iconIndex &&
                aniNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex == reelIndex &&
                aniNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId == iconId) {
                returnData = { flag: true, tokenId: aniNode[DYN_NODE_PROPERTIES.TOKEN_ID] };
                break;
            }
        }
        return returnData;
    }

    //--將已經存在_aryRunning的node繼續添加groupId
    public setExistAniNode(IAniData: IPlayAniData): void {
        if (IAniData.duplicateTokenId != '') {
            let targetNode = this.getAniNodeByTokenId(IAniData.duplicateTokenId);
            this.addGroupToNode(targetNode, IAniData.groupId);
        }
    }

    protected async addAniNode(aniNode: Node, container: Node): Promise<Node> {

        return new Promise((resolve, reject) => {
            container.once(Node.EventType.CHILD_ADDED, () => {
                resolve(aniNode);
            });
            if (aniNode.getComponent(UIOpacity)) {
                aniNode.getComponent(UIOpacity).opacity = 0;//--會先讀取多語系的spine圖片,所以先關閉opacity
            }
            aniNode.active = true;
            container.addChild(aniNode);
        })
    }

    protected async loadLanguageObject(aniNode: Node): Promise<void> {
        const localizationSpine = FindComponent.findComponentInChildren(aniNode, LocalizationSpine);
        if (localizationSpine) {
            await localizationSpine.loadAllSpine(this._currentLanguageKey);
        }
    }


    //--重複物件繼續寫入groupId
    protected duplicateGroupTargetNode(aniData: IPlayAniData): void {
        this.addGroupToNodeByTokenId(aniData.duplicateTokenId, aniData.groupId);
    }
    //--groupId=播放的群組
    protected addGroupToNode(node: Node, groupId: number): void {
        if (node) {
            node[DYN_NODE_PROPERTIES.GROUP_ID].push(groupId);
        }
    }

    protected addGroupToNodeByTokenId(token: string, groupId: number): void {
        let targetNode = this.getAniNodeByTokenId(token);
        if (targetNode) {
            targetNode[DYN_NODE_PROPERTIES.GROUP_ID].push(groupId);
            //console.log('addGroupToNodeByTokenId', this._aryRunningNode, targetNode.name, groupId);
        }
    }

    //========================================相關抽取操作_aryRunningNode========================================

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

    public getAniNodeByReelAndIconIndex(reelIndex: number, iconIndex: number): Node {

        for (let node of this._aryRunningNode) {
            const symbolInfo = node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO];
            if (symbolInfo && symbolInfo.reelIndex === reelIndex && symbolInfo.iconIndex === iconIndex) {
                return node;
            }
        }
        return null;
    }

    public getAniNodesBySameSymbolId(symbolId: number): Node[] {

        let aryNode: Node[] = [];
        for (let node of this._aryRunningNode) {
            const symbolInfo = node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO];
            if (symbolInfo && symbolInfo.symbolId === symbolId) {
                aryNode.push(node);
            }
        }
        return aryNode;
    }

    public getAniListByGroupsCutCondition(groupIdList: number[], exclude: number[], cutDuplication: boolean = true): Node[] {

        let nodes = this.getAniNodeListByGroups(groupIdList, cutDuplication);
        for (let i = nodes.length - 1; i >= 0; i--) {
            if (exclude.includes(nodes[i][DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId)) {
                nodes.splice(i, 1);
            }
        }
        return nodes;
    }

    /**
     * 透過一串groupID來取得ani物件.回傳資料將會是展開的ani物件
     * @param groups 
     * @param cutDuplication 替除重複的資料(一個ani有多種group身分)
     * @returns IAnimationPlugin
     */
    public getAniNodeListByGroups(groupIdList: number[], cutDuplication: boolean = true): Node[] {

        const result: Node[] = [];
        if (!Array.isArray(groupIdList) || groupIdList.length === 0) return result;

        const groupSet = new Set<number>(groupIdList);
        const addedTokenIds = cutDuplication ? new Set<any>() : null;

        for (const node of this._aryRunningNode) {
            const groups: number[] = node?.[DYN_NODE_PROPERTIES.GROUP_ID];
            const token = node?.[DYN_NODE_PROPERTIES.TOKEN_ID];

            // 缺必要屬性就跳過
            if (!Array.isArray(groups) || token == null) continue;

            if (cutDuplication) {
                // 只要任一 group 吻合就推一次
                for (let i = 0; i < groups.length; i++) {
                    if (groupSet.has(groups[i])) {
                        if (!addedTokenIds!.has(token)) {
                            result.push(node);
                            addedTokenIds!.add(token);
                        }
                        break; // 已推過這個 node，就跳出
                    }
                }
            } else {
                // 不去重：吻合幾個 group 就推幾次（展開）
                for (let i = 0; i < groups.length; i++) {
                    if (groupSet.has(groups[i])) {
                        result.push(node);
                    }
                }
            }
        }

        return result;
    }

    public getAniWithRemoveFromPoolByName(name: string): Node {
        for (let i = 0; i < this._aryRunningNode.length; i++) {
            const node = this._aryRunningNode[i];
            if (node.name === name) {
                this._aryRunningNode.splice(i, 1);
                return node;
            }
        }
        return null;
    }

    public getAniWithRemoveFromPoolByTokenId(tokenId: string): Node | null {
        for (let i = 0; i < this._aryRunningNode.length; i++) {
            const node = this._aryRunningNode[i];
            if (node[DYN_NODE_PROPERTIES.TOKEN_ID] === tokenId) {
                this._aryRunningNode.splice(i, 1);
                return node;
            }
        }
        return null;
    }


    //--這裡只是將物件從running裡面移除
    public getAniWithRemoveFromPoolByGroupId(groupId: number): Node[] {

        let aryNode: Node[] = [];
        for (let i: number = this._aryRunningNode.length - 1; i >= 0; i--) {
            const node = this._aryRunningNode[i];
            const groupList = node[DYN_NODE_PROPERTIES.GROUP_ID];
            if (groupList?.includes(groupId)) {
                aryNode.push(node);
                this._aryRunningNode.splice(i, 1);
            }

        }
        return aryNode;

    }

    public getAniWithRemoveFromPoolByGroups(groupIdList: number[], cutDuplication: boolean = true): Node[] {

        const result: Node[] = [];
        if (!Array.isArray(groupIdList) || groupIdList.length === 0) return result;

        const groupSet = new Set<number>(groupIdList);
        const addedTokenIds = cutDuplication ? new Set<any>() : null;

        type Hit = { idx: number; node: Node; token: any; matchCount: number };
        const hits: Hit[] = [];

        for (let i = 0; i < this._aryRunningNode.length; i++) {
            const node = this._aryRunningNode[i];
            const groups: number[] = node?.[DYN_NODE_PROPERTIES.GROUP_ID];
            const token = node?.[DYN_NODE_PROPERTIES.TOKEN_ID];
            if (!Array.isArray(groups) || token == null) continue;

            let matchCount = 0;
            for (let j = 0; j < groups.length; j++) {
                if (groupSet.has(groups[j])) matchCount++;
            }
            if (matchCount > 0) {
                hits.push({ idx: i, node, token, matchCount });
            }
        }

        if (cutDuplication) {
            for (const h of hits) {
                if (!addedTokenIds!.has(h.token)) {
                    result.push(h.node);
                    addedTokenIds!.add(h.token);
                }
            }
        } else {
            for (const h of hits) {
                for (let k = 0; k < h.matchCount; k++) {
                    result.push(h.node);
                }
            }
        }

        for (let r = hits.length - 1; r >= 0; r--) {
            this._aryRunningNode.splice(hits[r].idx, 1);
        }

        return result;
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


    public async playAnisWithPromiseAndUsePlayState(nodes: Node[], playState: PlaySelector = AnimationStateType.Idle): Promise<void> {

        const promises: Promise<void>[] = [];
        for (const node of nodes) {
            const aniExtensionComponent: IAnimationControl = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
            node.active = true;
            const safePlay = aniExtensionComponent.playAniInPromise(playState).catch(e => {
                console.warn(`[playAnisByNodes 播放錯誤] node: ${node.name}`, e);
                throw e;
            });

            promises.push(safePlay);
        }

        await Promise.all(promises);
    }

    public async playAnisByGroupWithPromiseAndUsePlayState(groupId: number, playState: PlaySelector = AnimationStateType.Idle): Promise<void> {

        const nodesToPlay: Node[] = [];
        for (let node of this._aryRunningNode) {

            if (node[DYN_NODE_PROPERTIES.GROUP_ID]?.includes(groupId)) {
                nodesToPlay.push(node);
            }
        }
        await this.playAnisWithPromiseAndUsePlayState(nodesToPlay, playState);
    }

    protected forTestDeBug(trackTarget: Node[], title: string): void {
        //-DYN_NODE_PROPERTIES.PREFAB_ID
        /*
        for (let i = 0; i < trackTarget.length; i++) {
            console.log(title, trackTarget[i][DYN_NODE_PROPERTIES.PREFAB_ID]);
        }
        */
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
                AnimationControllersPoolManager.getInstance().pushInstanceToPool(prefabId, node);
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
                    AnimationControllersPoolManager.getInstance().pushInstanceToPool(prefabId, node);
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
                    AnimationControllersPoolManager.getInstance().pushInstanceToPool(prefabId, node);
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
                    AnimationControllersPoolManager.getInstance().pushInstanceToPool(prefabId, node);
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

    //========拔除node的動態資料========

    protected removeSingleNodeData(aniNode: Node): void {

        aniNode[DYN_NODE_PROPERTIES.GROUP_ID] = [];
        aniNode[DYN_NODE_PROPERTIES.TOKEN_ID] = '';
        aniNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO] = null;
        //--objPool需要用到PREFAB_ID的資料
        aniNode[DYN_NODE_PROPERTIES.PREFAB_ID] = '';
        aniNode[DYN_NODE_PROPERTIES.ADDED] = null;//--new
        aniNode[DYN_NODE_PROPERTIES.LOCKED] = null;//--new
        aniNode[DYN_NODE_PROPERTIES.REFERENCE_TARGET] = null;//-20260129-new

        let aniInterfaceComponent: IAnimationControl | null = null;
        if (aniNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL]) {
            aniInterfaceComponent = aniNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL] as IAnimationControl;
        } else {
            aniInterfaceComponent = AniSysTools.findAndGetIAniComponent(aniNode) as IAnimationControl;
        }
        aniInterfaceComponent.slotMachineIndexInfo = null;
        aniInterfaceComponent.tokenID = '';
        aniInterfaceComponent.groupID = [];
        //--20250825新增:動態掛載IAnimationControl,recycle之前拔除參照
        if (aniNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL]) {
            aniNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL] = null;
        }

    }

    protected removeAnisNodeData(data: Node[]): void {
        for (let aniNode of data) {
            this.removeSingleNodeData(aniNode);
        }
    }

    //--把assign的資料拔掉
    protected beforeStopAndRemoveALLAniNodeData(): void {
        for (let aniNode of this._aryRunningNode) {
            this.removeSingleNodeData(aniNode);
        }
    }

}


