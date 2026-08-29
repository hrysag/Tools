import { _decorator, CCInteger, Node, Vec3, v3, UITransform } from 'cc';
import { AnimationNodesControllerBase } from "./AnimationNodesControllerBase";
import { playIAniData, DYN_NODE_PROPERTIES } from "../AnimationSystem/Definitions/AnimationDataOptions";
import { AniSysTools } from './AniTools/AniSysTools';
import { IAnimationControl } from './Definitions/IAnimationControl';
import { GameUtils } from '../GameUtils';
import { WinScoreData, GroupAniData } from '../AnimationSystem/Definitions/AnimationDataOptions';
import { FindComponent } from '../FindComponent';
import { SpineController } from './Components/SpineController';

const { ccclass, property } = _decorator;



@ccclass('ClassicalSlotAniController')

export class ClassicalSlotAniController extends AnimationNodesControllerBase {

    @property({ type: [CCInteger], visible: true, serializable: true, displayName: 'WILD_ID', tooltip: 'wild icon ids' })

    protected _wildID: number[] = [];

    @property({ type: [CCInteger], visible: true, serializable: true, displayName: 'BONUS_ID', tooltip: 'bonus icon ids' })
    protected _bonusID: number[] = [];

    protected _winLinesGroupData: GroupAniData[][];//--每一局清空一次

    protected _scoreData: WinScoreData;//--算得分需要的資料(betValue,baseOdds,totalOdd)


    set winLinesGroupData(value: GroupAniData[][]) {
        this._winLinesGroupData = value;
    }


    constructor() {
        super();
        this._scoreData = null;
    }


    public override addAnimationData(IAniData: playIAniData): Node | null {

        let token: number = Date.now();
        let spRuleCheck: { flag: boolean, tokenId: string } = this.checkSpRuleForExist(IAniData);
        if (!spRuleCheck.flag) {
            //--沒有重複
            //console.log('沒有重複', IAniData.prefabKey);
            IAniData.tokenID = token + "_" + GameUtils.getRangeRandom(0, 100);
            IAniData.duplicateTokenId = '';
        } else {
            //console.log('@@有重複', IAniData.prefabKey, spRuleCheck.tokenId);
            IAniData.tokenID = '';
            IAniData.duplicateTokenId = spRuleCheck.tokenId;
        }
        let targetNode = super.addAnimationData(IAniData);//--重複的狀況下會回null
        //--重複的狀況下
        if (!targetNode) {
            if (IAniData.duplicateTokenId != '') {
                targetNode = this.getAniNodeByTokenId(IAniData.duplicateTokenId);
                //this.duplicateGroupTargetNode(IAniData);
                this.addGroupToNode(targetNode, IAniData.groupID);
            }
        }

        return targetNode;
    }

    public setExistAniNode(aniSpineNode: Node, IAniData: playIAniData): void {
        let spRuleCheck: { flag: boolean, tokenId: string } = this.checkSpRuleForExist(IAniData);
        if (!spRuleCheck.flag) {
            //--沒有重複
            //console.log('沒有重複_setExistAniNode', IAniData.prefabKey);
            aniSpineNode[DYN_NODE_PROPERTIES.GROUP_ID].push(IAniData.groupID);
            aniSpineNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex = IAniData.SymbolIconInfoData.reelIndex;
            aniSpineNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconIndex = IAniData.SymbolIconInfoData.iconIndex;
            aniSpineNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconID = IAniData.SymbolIconInfoData.iconID;
            aniSpineNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].groupID = IAniData.SymbolIconInfoData.groupID;

            const localNodeContainer = this._aniNodeStageContainerMap[IAniData.containerNodeId];
            let localPos: Vec3 = v3(0, 0, 0);

            if (IAniData.wPos) {
                localPos = localNodeContainer.getComponent(UITransform).convertToNodeSpaceAR(IAniData.wPos);
            }
            localNodeContainer.addChild(aniSpineNode);
            //aniSpineNode.setPosition(v3(0, 0, 0));
            aniSpineNode.active = true;
            this._aryRunningNode.push(aniSpineNode);

            let aniInterfaceComponent: IAnimationControl | null = null;
            aniInterfaceComponent = AniSysTools.findAndGetIAniComponent(aniSpineNode) as IAnimationControl;
            if (aniInterfaceComponent) {
                aniInterfaceComponent.slotMachineIndexInfo.groupID = IAniData.SymbolIconInfoData.groupID;
                aniInterfaceComponent.slotMachineIndexInfo.iconID = IAniData.SymbolIconInfoData.iconID;
                aniInterfaceComponent.slotMachineIndexInfo.iconIndex = IAniData.SymbolIconInfoData.iconIndex;
                aniInterfaceComponent.slotMachineIndexInfo.reelIndex = IAniData.SymbolIconInfoData.reelIndex;
                aniInterfaceComponent.setAniDataInfo(IAniData.aniInfo);
                aniInterfaceComponent.groupID.push(IAniData.groupID);
            } else {
                console.warn('No compatible animation controller found on targetNode.', aniSpineNode.name);
            }
            aniSpineNode.setPosition(localPos);
        } else {
            //console.log('@@有重複_setExistAniNode', IAniData.prefabKey, spRuleCheck.tokenId);
            //IAniData.tokenID = '';
            //IAniData.duplicateTokenId = spRuleCheck.tokenId;
        }

    }


    //--有得分的時候會播放得分的動畫,但在同時,其他沒中的icon也會有自己的idle狀態動畫
    //--如果企劃要這麼78要求的話,這邊要再調整
    public playWinAndIdleInThisRound(winScoreData: WinScoreData, lines?: number[][]): void {

    }

    //--for test---
    public playInSequence(): void {
        //console.log('checkPlayInSequence', this._aryRunningNode);
        let component = AniSysTools.findAndGetIAniComponent(this._aryRunningNode[0]) as SpineController;
        component.playSequence('trigger');
    }


    public async playWinInThisRound(winScoreData: WinScoreData, lines?: GroupAniData[][]): Promise<void> {

        //--播放全部group的動畫
        //--顯示得分的動畫
        //--進入輪播模式---這個就自己玩耍了
        //--呼叫結束
        this._scoreData = winScoreData;

        return new Promise<void>(async (resolve, reject) => {

            if (lines) this.winLinesGroupData = lines;
            //--依照winLine的長度產生對應的aryGroupIDs
            this.changeSpNodeChildrenIndexToTop();//--交換位置(賠率高的在越上面)
            const groupID = this.generateArray(this._winLinesGroupData.length);
            const totalScore: number = (winScoreData.totalOdd * winScoreData.betValue).fixed();
            this.showWinScoreAni(totalScore);
            await this.playAniGroupsWithPromise(groupID);

            //--這種隨流程走的其他裝飾性的動畫要再想辦法解決怎麼串接

            //--將其他的動畫系統開啟播放(非icon表演的動畫)
            this.playOtherWinShowAni();
            this.playAniGroupInSequence();

            /**
             * 要再調整一下自動玩的得獎流程..有點不順
             */

            resolve();
        });

    }

    //--這邊要包含4重彩的動畫
    protected async showWinScoreAni(totalScore: number): Promise<void> {

        //let baseWinMoney: number = (winScoreData.baseOdds * winScoreData.betValue).fixed();
        //const multiplierValue: number = winScoreData.multiNum;
        //const isSpecialWin: boolean = winScoreData.totalOdd >= SPECIAL_WIN_THRESHOLD ? true : false;


    }



    protected async playAniGroupInSequence(): Promise<void> {

        let playIndex: number = 0;

        while (this._winLinesGroupData.length > 0) {

            this.closeAllNode();
            //go to next frame
            //await GameUtils.DeferByScheduleOnceWithComponent(this, 0);
            //console.log('check_playIndex', this._winLinesGroupData[playIndex], playIndex);
            this.openNodeByIconsWithReelIndexInArray(this._winLinesGroupData[playIndex]);
            await this.playAnisByGroupWithPromise(playIndex);
            //await GameUtils.Defer(100);
            await GameUtils.DeferByTweenPromise(100 / 1000); // 使用定義的延遲常數，將毫秒轉換為秒
            playIndex++;
            if (playIndex >= this._winLinesGroupData.length) {
                playIndex = 0;
            }
        }

    }

    public playAnisByGroupWithTimeStepPromise(groupId: number[], timeStep: number, trackId?: string): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            const aniGroups = this.getAniNodeListByGroups(groupId);
            let iAnimationControl: IAnimationControl;
            for (let i: number = 0; i < aniGroups.length; i++) {
                aniGroups[i].active = true;
                iAnimationControl = AniSysTools.findAndGetIAniComponent(aniGroups[i]) as IAnimationControl;
                iAnimationControl.playAni(trackId);
            }
            //await GameUtils.Defer(timeStep);
            await GameUtils.DeferByTweenPromise(timeStep / 1000); // 使用定義的延遲常數，將毫秒轉換為秒
            resolve();
        });
    }


    public async playAniGroupsWithPromise(groups: number[]): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let aniGroups = this.getAniNodeListByGroups(groups);
            //--test--
            //this.forTestDeBug(aniGroups, 'forTestDeBug_playGroupsPromise');
            //--test--
            let promises: Promise<void>[] = [];
            let iAnimationControl: IAnimationControl;
            for (let i: number = 0; i < aniGroups.length; i++) {
                aniGroups[i].active = true;
                iAnimationControl = AniSysTools.findAndGetIAniComponent(aniGroups[i]) as IAnimationControl;
                //-TODO-這邊如果要塞入播放的track index或是clip name的話要setAnimation?
                promises.push(iAnimationControl.playAniInPromise());
            }
            try {
                await Promise.all(promises);
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    }






    //public stopMultiFrameAni():void
    //--這裡可以用來停止其他非icon表演的動畫系統
    public stopOtherWinShowAni(): void {

    }

    //--這裡可以用來播放其他非icon表演的動畫系統
    //--做await async的處理
    public playOtherWinShowAni(): void {
        //this._multiFrameClass.playAni();
    }



    protected generateArray(length: number): number[] | null {

        if (length <= 0) {
            return null;
        }
        const result: number[] = [];
        for (let i = 0; i < length; i++) {
            result.push(i);
        }
        return result;
    }



    /**
     * 
     * @param iconIndexs 這個是用來指定要開啟的icon的index
     * 分別比照reelIndex和iconIndex來開啟對應的icon
     */
    protected openNodeByIconsWithReelIndexInArray(iconIndexs: GroupAniData[]): void {

        for (let node of this._aryRunningNode) {
            for (let j: number = 0; j < iconIndexs.length; j++) {
                if (node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex == iconIndexs[j].reelIndex && node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconIndex == iconIndexs[j].iconIndex) {
                    node.active = true;
                }
            }

        }
    }


    //--將wild icon放到最上層
    protected changeSpNodeChildrenIndexToTop(): void {

        for (let target of this._aryRunningNode) {
            if (this._wildID.includes(target[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconID) ||
                this._bonusID.includes(target[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconID)
            ) {
                target.setSiblingIndex(target.parent.children.length - 1);
            }
        }
    }

    /**
     * 重複的軸上的icon進行寫入groupID
     * (只有重複軸的會進來)
     * @param aniData 
     */
    protected duplicateGroupTargetNode(aniData: playIAniData): void {
        this.addGroupToNodeByTokenId(aniData.duplicateTokenId, aniData.groupID);
    }

    public addGroupToNode(node: Node, groupId: number): void {
        if (node) {
            node[DYN_NODE_PROPERTIES.GROUP_ID].push(groupId);
        }
    }

    public addGroupToNodeByTokenId(token: string, groupId: number): void {
        let targetNode = this.getAniNodeByTokenId(token);
        if (targetNode) {
            targetNode[DYN_NODE_PROPERTIES.GROUP_ID].push(groupId);
            //console.log('addGroupToNodeByTokenId', this._aryRunningNode, targetNode.name, groupId);
        }
    }

    /**
     * 特殊的檢查條件(同軸同格不重複相同元素)
     * @param args 
     * @returns 
     */
    protected checkSpRuleForExist = (...args): { flag: boolean, tokenId: string } => {

        const data: playIAniData = args[0];
        const iconIndex = data.SymbolIconInfoData.iconIndex;
        const iconID = data.SymbolIconInfoData.iconID;
        let returnData = { flag: false, tokenId: '' };
        for (let aniNode of this._aryRunningNode) {

            //--這邊是針對第四軸的特殊檢查(軸的編號要改成變數來讀)
            /*
            if (!aniNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO]) {
                console.log('NOOO_node', aniNode.name);
            } else {
                console.log('YESSS_node', aniNode.name);
            }*/

            if (aniNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex == 3) {
                if (aniNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconIndex == iconIndex && aniNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconID == iconID) {
                    returnData = { flag: true, tokenId: aniNode[DYN_NODE_PROPERTIES.TOKEN_ID] };
                    return returnData;
                }
            }
        }

        return returnData;
    }

}