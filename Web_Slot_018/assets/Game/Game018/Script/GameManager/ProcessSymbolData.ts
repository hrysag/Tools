import { ShowAniController } from "../GameDisplay/ShowAniController/ShowAniController";
import { DefinitionGameConfigData } from '../DefinitionGameData/DefinitionGameConfigData';
import { SlotMachineIndexInfo, AnimationPlayInfo, playIAniData } from '../MyUtils/AnimationSystem/Definitions/AnimationDataOptions';
import { RPSWildData, RPSWildState, RPSGuessRoundData } from '../GameDisplay/RPSWild/RPSWildDef';
import { SymbolIconAinData } from '../DefinitionGameData/GameDataDef';
import { GameState } from '../DefinitionGameData/GameStateConfigDef';
import { ShowAniData } from '../GameDisplay/ShowAniController/ShowAniDef';
import { IAnimationControl } from '../MyUtils/AnimationSystem/Definitions/IAnimationControl';
import { DYN_NODE_PROPERTIES } from '../MyUtils/AnimationSystem/Definitions/AnimationDataOptions';
import { Vec3, Node } from "cc";
import { GameUtils } from '../MyUtils/GameUtils';
import { AnimationControllersPoolManager } from '../MyUtils/AnimationSystem/AnimationControllersPoolManager';
import { AniSysTools } from '../MyUtils/AnimationSystem/AniTools/AniSysTools';
import { AniCtrlPropDef } from '../MyUtils/AnimationSystem/Components/AniStateLists/AnimationPlayStateBase';

const {
    WILD_LIST,
    SPECIAL_SYMBOL_LIST,
    PFB_SYMBOL_ANI,//--prefab id(動態)
    PFB_ANI_LIST,//--prefab id(動態)
    PFB_SPINE_SKIN_ID,//--spine skin id
    PFB_SYMBOL_AWARD_BOX,//--prefab id
    CONTAINER_ANI_SYMBOL,//--containerNode id
    CONTAINER_ANI_AWARD_B,//--containerNode id

} = DefinitionGameConfigData;
export class ProcessSymbolData {
    private _showAniController: ShowAniController;
    private _processGameState: GameState;
    private _currentCamp: number = -1; //-1:ng(用原本的camp資料),0:阿里巴巴,1:瑪姬娜

    set currentCamp(value: number) {
        this._currentCamp = value;
    }
    set showAniController(value: ShowAniController) {
        this._showAniController = value;
    }
    set processGameState(value: GameState) {
        this._processGameState = value;
    }

    constructor() {

    }
    public createWildIconData(wildData: RPSWildData, wpos: Vec3): Node {
        /*
        const iconAniData: SymbolIconAinData = {
            outIndex: wildData.reelIndex,
            groupId: 99,
            globalPos: wpos,
            score: 0,
            iconIndex: wildData.iconIndex,
            camp: wildData.camp
        };*/
        //---這樣不行啦--有wild不一定有中線
        //this.setSymbolAwardBoxAnimation(iconAniData);

        const slotData: ShowAniData = {
            reelIndex: wildData.reelIndex,
            iconIndex: wildData.iconIndex,
            iconID: wildData.wild,
            camp: wildData.camp
        };

        let wildNode: Node = this._showAniController.addSPNodeInRunning('Icon_0678', slotData, 99);
        return wildNode;
    }

    public getWildIconDataAniBeforeRollEnd = async (symbolId: number, reelIndex: number, iconIndex: number, camp: number): Promise<Node | null> => {

        const wildPrefabId = 'Icon_0678'; //--動態wild的prefab id
        const wildData: RPSWildData = this.getWildIconData(reelIndex, iconIndex, symbolId, camp);
        let reelInfoAndGroup: SlotMachineIndexInfo = {
            reelIndex: wildData.reelIndex,
            iconIndex: wildData.iconIndex,
            iconID: wildData.wild,
            groupID: 99
        };
        const token: number = Date.now();
        let targetNode = AnimationControllersPoolManager.getInstance().getPrefabNode(wildPrefabId);
        targetNode[DYN_NODE_PROPERTIES.PREFAB_ID] = wildPrefabId;
        targetNode[DYN_NODE_PROPERTIES.GROUP_ID] = [reelInfoAndGroup.groupID];
        targetNode[DYN_NODE_PROPERTIES.TOKEN_ID] = token + "_" + GameUtils.getRangeRandom(0, 100);
        targetNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO] = reelInfoAndGroup;

        let aniInterfaceComponent: IAnimationControl = AniSysTools.findAndGetIAniComponent(targetNode) as IAnimationControl;
        if (aniInterfaceComponent) {
            aniInterfaceComponent.tokenID = targetNode[DYN_NODE_PROPERTIES.TOKEN_ID];
            aniInterfaceComponent.groupID = [reelInfoAndGroup.groupID];
        }

        return null;
    }

    /**
     * 20250611
     * 這邊產生出來的高賠率spineAniNode是用來在FG結束後播放的
     * 不會在塞回aniController裡面的runningPool裡面了.
     * 會直接塞回gameIcon裡面,且一開始spin就會移除
     * PS:這只是在FG後拿來帶機等待進入新一輪用的表演
     */
    public getHighOddSpineAniAfterFGEnd = async (prefabId: string, symbolId: number, reelIndex: number, iconIndex: number): Promise<Node | null> => {
        const { symbolIndex, scoreState, showGroup } = this.getSymbolAnimationDataBeforeRollEnd(symbolId);
        const reelInfoAndGroup = this.createReelInfoAndGroup(reelIndex, iconIndex, symbolIndex, showGroup);
        const addPlayInfoData = {
            prefabKey: prefabId,
            tokenID: '',
            containerNodeId: '',
            groupID: showGroup,
            wPos: null,
            aniInfo: { targetName: 'idle', loop: true, timeScale: 1 },
            SymbolIconInfoData: reelInfoAndGroup
        }

        const targetNode: Node = AnimationControllersPoolManager.getInstance().getPrefabNode(prefabId);
        targetNode[DYN_NODE_PROPERTIES.PREFAB_ID] = addPlayInfoData.prefabKey;
        targetNode[DYN_NODE_PROPERTIES.GROUP_ID] = [];
        targetNode[DYN_NODE_PROPERTIES.TOKEN_ID] = '';
        targetNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO] = addPlayInfoData.SymbolIconInfoData;
        let aniInterfaceComponent: IAnimationControl | null = null;
        aniInterfaceComponent = AniSysTools.findAndGetIAniComponent(targetNode) as IAnimationControl;
        if (aniInterfaceComponent) {
            aniInterfaceComponent.init();
            aniInterfaceComponent.slotMachineIndexInfo = addPlayInfoData.SymbolIconInfoData;
            const playData: AniCtrlPropDef = new AniCtrlPropDef();
            playData.targetName = 'idle';
            playData.loop = true;
            playData.timeScale = 1;
            aniInterfaceComponent.setAniDataInfo(playData);
            aniInterfaceComponent.tokenID = '';
            aniInterfaceComponent.groupID = [];
        } else {
            console.warn('No compatible animation controller found on targetNode.', targetNode.name);
        }

        return targetNode;
    }


    public getSymbolIconAniBeforeRollEnd = async (symbolId: number, reelIndex: number, iconIndex: number, camp: number): Promise<Node | null> => {

        const token: number = Date.now();
        const { symbolIndex, scoreState, showGroup } = this.getSymbolAnimationDataBeforeRollEnd(symbolId);
        const reelInfoAndGroup = this.createReelInfoAndGroup(reelIndex, iconIndex, symbolIndex, showGroup);
        const addPlayInfoData = this.createPlayAniData(new Vec3(0, 0, 0), reelInfoAndGroup, showGroup);
        //this._processGameState === GameState.FREE_GAME ? this._currentCamp : (reelIndex <= 2 ? 0 : 1)
        const targetCamp = (this._processGameState === GameState.FREE_GAME) ? this._currentCamp : camp;
        addPlayInfoData.prefabKey = this.getPrefabKey(symbolId, targetCamp);
        addPlayInfoData.aniInfo = this.getAnimationPlayInfo(symbolIndex, scoreState, 0, targetCamp);
        addPlayInfoData.containerNodeId = '';
        const tokenID = token + "_" + GameUtils.getRangeRandom(0, 100);
        const targetNode: Node = AnimationControllersPoolManager.getInstance().getPrefabNode(addPlayInfoData.prefabKey);
        targetNode[DYN_NODE_PROPERTIES.PREFAB_ID] = addPlayInfoData.prefabKey;
        targetNode[DYN_NODE_PROPERTIES.GROUP_ID] = [];
        targetNode[DYN_NODE_PROPERTIES.TOKEN_ID] = tokenID;
        targetNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO] = addPlayInfoData.SymbolIconInfoData;

        let aniInterfaceComponent: IAnimationControl | null = null;
        aniInterfaceComponent = AniSysTools.findAndGetIAniComponent(targetNode) as IAnimationControl;
        if (aniInterfaceComponent) {
            aniInterfaceComponent.init();
            aniInterfaceComponent.slotMachineIndexInfo = addPlayInfoData.SymbolIconInfoData;
            aniInterfaceComponent.setAniDataInfo(addPlayInfoData.aniInfo);
            aniInterfaceComponent.tokenID = tokenID;
            aniInterfaceComponent.groupID = [];
        } else {
            console.warn('No compatible animation controller found on targetNode.', targetNode.name);
        }

        return targetNode;

    }

    private getCampData(reelIndex: number): number {
        return this._processGameState === GameState.FREE_GAME ? this._currentCamp : (reelIndex <= 2 ? 0 : 1);
    }

    public setSymbolIconAnimation(aniIconData: SymbolIconAinData, symbolData: number[][]): void {
        /**
         * symbolIndex-symbol的server編號(iconID)
         * iconIndex---icon在reel當中的index
         * reelOutIndex---reel的index(迴圈外層)
         * scoreState動態prefab要播放的ani name
         * showGroup---表演群組輪播編號
         * aniTrackName---這邊是要播放的trackTarget name
         * aniLoop---有得分的情況下需要輪播所以在該狀態下的loop=false
         */
        const { symbolIndex, scoreState, showGroup } = this.getSymbolAnimationData(aniIconData, symbolData);
        const reelInfoAndGroup = this.createReelInfoAndGroup(aniIconData.outIndex, aniIconData.iconIndex, symbolIndex, showGroup);
        const addPlayInfoData = this.createPlayAniData(aniIconData.globalPos, reelInfoAndGroup, showGroup);
        addPlayInfoData.prefabKey = this.getPrefabKey(symbolIndex, aniIconData.camp);
        addPlayInfoData.aniInfo = this.getAnimationPlayInfo(symbolIndex, scoreState, aniIconData.score, aniIconData.camp);
        //console.log('setSymbolIconAnimation', addPlayInfoData);
        this._showAniController.addAnimationData(addPlayInfoData);
    }

    /**
     *2025-0525 
     *將之前先塞進gameIcon的spineNode塞回表演控制器
     */
    public setExistIconAniToAniController(symbolAniNode: Node, aniIconData: SymbolIconAinData, symbolId: number): void {
        //--這裡原本就有了,要替換group的資料而已
        const { scoreState, showGroup } = this.getAnimationDataAfterRollEnd(aniIconData);
        const reelInfoAndGroup = this.createReelInfoAndGroupAfterRollEnd(aniIconData.outIndex, aniIconData.iconIndex, showGroup, symbolId);
        const addPlayInfoData = this.createPlayAniData(aniIconData.globalPos, reelInfoAndGroup, showGroup);
        addPlayInfoData.aniInfo = this.getAnimationPlayInfo(symbolId, scoreState, aniIconData.score, aniIconData.camp);
        //console.log('setExistIconAniToAniController', addPlayInfoData, symbolId);
        this._showAniController.setExistAniNode(symbolAniNode, addPlayInfoData);

    }

    private getSymbolAnimationDataBeforeRollEnd(symbolId: number): { symbolIndex: number, scoreState: string, showGroup: number } {
        const scoreState = 'idle';
        const showGroup = -1;
        const symbolIndex = symbolId;
        return { symbolIndex, scoreState, showGroup };
    }

    //--resetAniPlayData
    private getAnimationDataAfterRollEnd(aniIconData: SymbolIconAinData): { scoreState: string, showGroup: number } {
        const scoreState = aniIconData.score > 0 ? 'connect' : 'idle';
        const showGroup = aniIconData.score > 0 ? aniIconData.groupId : 0;
        return { scoreState, showGroup };
    }

    private getSymbolAnimationData(aniIconData: SymbolIconAinData, symbolData: number[][]): { symbolIndex: number, scoreState: string, showGroup: number } {
        const scoreState = aniIconData.score > 0 ? 'connect' : 'idle';
        const showGroup = aniIconData.score > 0 ? aniIconData.groupId : 0;
        const symbolIndex = symbolData[aniIconData.outIndex][aniIconData.iconIndex];
        return { symbolIndex, scoreState, showGroup };
    }

    private createReelInfoAndGroupAfterRollEnd(reelOutIndex: number, iconIndex: number, showGroup: number, iconId: number): SlotMachineIndexInfo {
        return {
            reelIndex: reelOutIndex,
            iconIndex: iconIndex,
            iconID: iconId,
            groupID: showGroup
        };
    }

    private createReelInfoAndGroup(reelOutIndex: number, iconIndex: number, symbolIndex: number, showGroup: number): SlotMachineIndexInfo {
        return {
            reelIndex: reelOutIndex,
            iconIndex: iconIndex,
            iconID: symbolIndex,
            groupID: showGroup
        };
    }

    private createPlayAniData(wpos: Vec3, reelInfoAndGroup: SlotMachineIndexInfo, showGroup: number): playIAniData {
        return {
            prefabKey: '',
            tokenID: "",
            containerNodeId: CONTAINER_ANI_SYMBOL,
            groupID: showGroup,
            wPos: wpos,
            aniInfo: null,
            SymbolIconInfoData: reelInfoAndGroup
        };
    }


    private getPrefabKey(symbolIndex: number, camp: number): string {
        //--阿里巴巴/盜賊首領 or 瑪姬娜/強盜
        //-server 0(阿里巴巴(camp=0)/盜賊首領(camp=1)),1(瑪姬娜(camp=0)/強盜(camp=1))
        //-prefab 0=阿里(camp=0),1=姬瑪娜(camp=0),2=盜賊首領(camp=1),3=強盜(camp=1)
        if (symbolIndex <= 1) {
            return camp === 0
                ? (symbolIndex === 0 ? PFB_SYMBOL_ANI + '00' : PFB_SYMBOL_ANI + '01')
                : (symbolIndex === 0 ? PFB_SYMBOL_ANI + '02' : PFB_SYMBOL_ANI + '03');
        } else if (symbolIndex >= 2 && symbolIndex <= 5) {
            //--2黑桃/3紅心/4梅花/5方塊--server資料
            //--prefab Icon04_07,
            // animation name:icon_04_connect(黑桃),icon_05_connect(紅心),icon_06_connect(方塊),icon_07_connect(梅花) 
            return PFB_SYMBOL_ANI + '04_07';
        }
        return '';
    }

    private getAnimationPlayInfo(symbolIndex: number, scoreState: string, score: number, camp: number): AnimationPlayInfo {
        const aniLoop = score <= 0;
        //let ts = 1.2;//-timeScale
        let ts = 1;//--先回復美術原先設定的速度20250505
        let spineSkinName = '';
        //----2黑桃/3紅心/4梅花/5方塊--server資料
        // animation name:icon_04_connect(黑桃),icon_05_connect(紅心),icon_06_connect(方塊),icon_07_connect(梅花) 
        if (symbolIndex >= 2 && symbolIndex <= 5 && score > 0) {
            /**
             *因為2黑桃/3紅心/4梅花/5方塊在非得分idle狀態根本不會動.就使用原先的symbol的圖片即可
            不需要額外在播放idle的動畫
            */

            if (this._processGameState != GameState.BEGIN) {
                spineSkinName = camp === 0 ? PFB_SPINE_SKIN_ID + 1 : PFB_SPINE_SKIN_ID + 2;
            }
            const aniName = PFB_ANI_LIST[symbolIndex] + '_' + scoreState;
            return { targetName: aniName, loop: aniLoop, timeScale: ts, skinName: spineSkinName, useCompleteListen: false };
        }

        //----阿里巴巴/盜賊首領 or 瑪姬娜/強盜
        //ts = score > 0 ? 1.5 : 3.5;
        ts = score > 0 ? 1 : 1;//--先回復美術原先設定的速度20250505
        return { targetName: scoreState, loop: aniLoop, timeScale: ts, useCompleteListen: false };
    }


    public setSymbolAwardBoxAnimation(aniIconData: SymbolIconAinData): Node {
        const reelInfoAndGroup: SlotMachineIndexInfo = {
            reelIndex: aniIconData.outIndex,
            iconIndex: aniIconData.iconIndex,
            iconID: -1,
            groupID: aniIconData.groupId
        };
        const playInfo: AnimationPlayInfo = { targetName: 'connect', loop: true, timeScale: 1.2, useCompleteListen: false };
        const bgAddPlayInfoData: playIAniData = {
            prefabKey: PFB_SYMBOL_AWARD_BOX,
            tokenID: '',
            containerNodeId: CONTAINER_ANI_AWARD_B,
            groupID: aniIconData.groupId,
            wPos: aniIconData.globalPos,
            aniInfo: playInfo,
            SymbolIconInfoData: reelInfoAndGroup
        };
        return this._showAniController.addAnimationData(bgAddPlayInfoData);
    }


    public reSetWildNodeDataWithComponent(comp: IAnimationControl, wildData: RPSWildData): void {
        const targetNode = this._showAniController.getAniNodeByTokenId(comp.tokenID);
        wildData.camp = 0;
        const reelInfoAndGroup: SlotMachineIndexInfo = {
            reelIndex: wildData.reelIndex,
            iconIndex: wildData.iconIndex,
            iconID: wildData.wild,
            groupID: 99
        };
        targetNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO] = reelInfoAndGroup;
        targetNode[DYN_NODE_PROPERTIES.GROUP_ID] = [99];
        comp.groupID = [99];
        comp.slotMachineIndexInfo = reelInfoAndGroup;
        //leftWildComp.campData = wildData.camp;
    }



    public getFGBonusData(reelID: number, campData: number, symbolData: number[][]): ShowAniData {
        const returnData: ShowAniData =
        {
            reelIndex: -1,
            iconIndex: -1,
            iconID: -1,
            camp: campData
        };

        let targetReel: number[] = symbolData[reelID];//--會有不同的遊戲狀態(reSpin/freeGame)的資料,不能直接取結果的盤面
        for (let i: number = 0; i < targetReel.length; i++) {
            if (SPECIAL_SYMBOL_LIST.includes(targetReel[i])) {
                returnData.reelIndex = reelID;
                returnData.iconIndex = i;
                returnData.iconID = targetReel[i];
                break;
            }
        }
        return returnData;
    }

    //private getWildIconData(reelID: number, symbolData: number[][], campData: number = -1): RPSWildData {
    private getWildIconData(reelIndex: number, iconIndex: number, symbolId: number, campData: number = -1): RPSWildData {

        const returnData: RPSWildData =
        {
            reelIndex: reelIndex,
            iconIndex: iconIndex,
            wild: symbolId,
            camp: campData
        };

        /*
        let targetReel: number[] = symbolData[reelID];//--會有不同的遊戲狀態(reSpin/freeGame)的資料,不能直接取結果的盤面
        for (let i: number = 0; i < targetReel.length; i++) {
            if (WILD_LIST.includes(targetReel[i])) {
                returnData.reelIndex = reelID;
                returnData.iconIndex = i;
                returnData.wild = targetReel[i];
                break;
            }
        }*/
        return returnData;
    }


}