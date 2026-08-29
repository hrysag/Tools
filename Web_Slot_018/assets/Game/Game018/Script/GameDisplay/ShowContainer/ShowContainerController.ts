import { _decorator, Component, Game, Node } from 'cc';
import { GameModeNode, GameNodeHashInfo } from '../../DefinitionGameData/ChangeGameModeNodeDef';
import { GameState } from '../../DefinitionGameData/GameStateConfigDef';
import { FindComponent } from '../../MyUtils/FindComponent';
import { BasicDisplayContainer } from './Components/IBG_Ani';
import { FG_BkgController } from './Components/FG_BkgController';
import { FG2_BkgController } from './Components/FG2_BkgController';
import { Orientation } from '../../../../../Scripts/Utils/Config';
import { BasicGameStateAndRotationResolution } from './Components/IGameState';
import { IWindowResize } from 'db://assets/Scripts/Utils/IWindowResize';
import { FG_SpriteController } from './Components/FG_SpriteController';
import { FindNode } from '../../MyUtils/FindNode';
const { ccclass, property } = _decorator;

@ccclass('ShowContainerController')
export class ShowContainerController extends IWindowResize {

    @property({ type: GameModeNode, visible: true, displayName: 'NG_顯示系統', group: 'normal_view', tooltip: 'NG相關會顯示的東西' })
    private _ng_Show_Sys: GameModeNode = null;

    @property({ type: GameModeNode, visible: true, displayName: 'FG_阿里顯示系統', group: 'alibaba_view', tooltip: 'FG阿里相關會顯示的東西' })
    private _fg_Alibaba_Show_Sys: GameModeNode = null;

    @property({ type: GameModeNode, visible: true, displayName: 'FG_盜賊顯示系統', group: 'thieves_view', tooltip: 'FG盜賊相關會顯示的東西' })
    private _fg_Thieves_Show_Sys: GameModeNode = null;

    @property({ type: Node, visible: true, displayName: 'SlotFrame', tooltip: 'SlotFrame_遊戲使用的frame_Node' })
    private _slotFrameNode: Node = null;

    @property({ type: Node, visible: true, displayName: 'Bg_container', tooltip: '裝全部bg的container' })
    private _bgContainerNode: Node = null;

    @property({ type: Node, visible: true, displayName: 'FakeTrasitionNode', tooltip: '轉場使用的fake_Node' })
    private _fakeTransitionNode: Node = null;

    @property({ type: Node, visible: true, displayName: 'FakeNgVerticalNode', tooltip: '轉場使用的直版FGfake_Node' })
    private _fakeNgVerticalNode: Node = null;

    //private _showContainerMap: { [key: number]: GameModeNode[] };
    private _showContainerMap: Map<GameState, GameModeNode[]>;
    private _currentGameState: GameState;
    private _currentRotation: Orientation = null;
    private _dirtyInitFlag: boolean = false;
    private _finishInit: boolean = false;
    //private _currentCamp: number = -1; // 預設為-1，表示未設定陣營,0表示阿里，1表示盜賊

    constructor() {
        super();
        this._currentGameState = GameState.BEGIN;
    }

    public init(): void {
        this._showContainerMap = new Map();
        this._showContainerMap.set(GameState.NORMAL, [this._ng_Show_Sys]);
        this._showContainerMap.set(GameState.RE_SPINE, [this._ng_Show_Sys]);
        this._showContainerMap.set(GameState.FREE_GAME, [this._fg_Alibaba_Show_Sys, this._fg_Thieves_Show_Sys]);
        this.initComps();
        this._finishInit = true;
        this.changeRotationResolution();
    }

    public override onWindowResize(orientation: Orientation): void {
        if (this._currentRotation == orientation) return;
        this._currentRotation = orientation;
        if (this._finishInit) {
            this.changeRotationResolution();
        }

    }


    /**
     * 轉場關門狀態(此時可以開始切換畫面的狀態)
     * 會先執行這個,完成後再執行changeGameMode
     * 
     * 
     */
    public changeContainerStateForTransition(gameState: GameState, camp?: number): void {

        if (this._currentGameState === gameState) {
            return; // 如果狀態沒有改變，則不執行任何操作
        }
        if (gameState == GameState.FREE_GAME) {

            const targetList = this._showContainerMap.get(gameState);
            if (!targetList || targetList.length === 0) return;

            let target: GameModeNode;
            if (camp === 0 || camp == null || camp === -1) {
                target = targetList[0];
            } else if (camp === 1 && targetList.length > 1) {
                target = targetList[1];
            }
            //this._currentCamp = camp;
            if (target) {

                for (const node of target.gameNodeHashInfo) {
                    node.displayNode.active = true;
                    //let comp: any = FindComponent.findComponentInChildren(node.displayNode, BasicDisplayContainer);
                    let comp: any;

                    if (node.nodeName == 'FG_Bkg_Ali' || node.nodeName == 'FG_Bkg_Thieves') {
                        //--back(FG_BkgController/FG2_BkgController)
                        //node.displayNode.active = true;
                        if (node.nodeName == 'FG_Bkg_Thieves') {
                            //--檢查FG_Bkg裡面是否有東西
                            if (!this.checkChildrenContains(node.displayNode, 'FG_Bkg')) {
                                //--在當前的container的FG_Bkg裡面沒有子物件代表東西在阿里那邊
                                const shareBGRootContainer = this.getTargetNodeByNameInGameModeNode(this._fg_Alibaba_Show_Sys, 'FG_Bkg_Ali');
                                const fgComp: FG_BkgController = shareBGRootContainer.getComponent(FG_BkgController);
                                if (fgComp) {
                                    //--交換共用背景到相對的container裡面
                                    const shareBG = fgComp.getAndRemoveShareBg();
                                    const targetComponent = node.displayNode.getComponent(FG2_BkgController);
                                    targetComponent.setShareBg(shareBG);
                                }
                            }
                            const fg_Bkg_frontNode = FindNode.findChildByNameRecursive(node.displayNode, 'FG_Bkg_front');
                            //--只有阿里才有的最前面的2搓盆栽
                            if (fg_Bkg_frontNode) {
                                const frameNode = this.getTargetNodeByNameInGameModeNode(this._fg_Thieves_Show_Sys, 'FG_Thieves');
                                //console.log('checkParent', frameNode);
                                //--層級順序要把它掛到slotframe那層
                                fg_Bkg_frontNode.parent = frameNode;
                                fg_Bkg_frontNode.active = false;//--換完之後要關閉因為目前還是在轉場狀態中,打開會穿幫
                            }


                        }
                        //--只會有FG_BkgController/FG2_BkgController
                        comp = FindComponent.findComponentInChildren(node.displayNode, BasicDisplayContainer);
                        if (comp) {

                            //--FG2_BkgController的targetSpine是前景的動畫(在slotFrame裡面)
                            comp.camp = camp;
                            comp.changeGameState(gameState);
                            if (node.nodeName == 'FG_Bkg_Thieves') {
                                comp.playShareBGForTransition();//--因為前景的關閉導致playAni在此時是不會被觸發的  
                            } else {
                                comp.playAni();//--沒塞資料就直接檢查旋轉狀態後播相對的動畫設定(1.第一次旋轉)
                            }

                            comp.startFgAndInitPlaySpPortrait();//--啟動角色動畫
                            comp.checkRotationResolution();
                        }

                    } else if (node.nodeName == 'FG_Ali' || node.nodeName == 'FG_Thieves') {
                        //--把門框在轉場時換到適合的layer表演,轉場結束在交換回來
                        node.displayNode.parent = this._fakeTransitionNode;
                        //--front(FG_SpriteController) 
                        //---底下顯示次數的bar
                        comp = FindComponent.findComponentInChildren(node.displayNode, FG_SpriteController);
                        comp.changeGameState(gameState);
                    }
                }
            }

            //--關閉NG的背景
            const targetNode = this.getTargetNodeByNameInGameModeNode(this._ng_Show_Sys, 'NG_Bkg');
            if (targetNode) {
                targetNode.active = false;
            }
            this.processFGTransitionNode();//--處理假背景+logo的交換圖層
            //console.log();
        }

    }

    //--交換圖層layer
    private processFGTransitionNode(): void {
        const ngNodeContainer = FindNode.findChildByNameRecursive(this._bgContainerNode, 'NG_bkg_pic');
        ngNodeContainer.parent = this._fakeNgVerticalNode;
        const ngLanguageTitleNode = FindNode.findChildByNameRecursive(this._bgContainerNode, 'NG_logo');
        ngLanguageTitleNode.parent = this._fakeNgVerticalNode;
    }

    private getTargetNodeByNameInGameModeNode(value: GameModeNode, name: string): Node {
        for (const item of value.gameNodeHashInfo) {
            if (item.nodeName == name) {
                return item.displayNode;
            }
        }
        return null;
    }


    private getTargetContainerByName(rootNode: Node, targetName: string): Node | null {
        const targetNode = FindNode.findChildByNameRecursive(rootNode, targetName);
        return targetNode ? targetNode : null;
    }

    //--檢查當前的container裡面是否有子物件
    private checkChildrenContains(rootNode: Node, rootNodeName: string): boolean {
        const targetNode = FindNode.findChildByNameRecursive(rootNode, rootNodeName);
        if (targetNode) {
            if (targetNode.children.length > 0) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    //--FG結束後要重新設定背景的動畫的layer
    public reSetBkgContainerAni(): void {

        let rootTargetContainer = this.getTargetNodeByNameInGameModeNode(this._fg_Thieves_Show_Sys, 'FG_Bkg_Thieves');
        let bkgComp;
        if (this.checkChildrenContains(rootTargetContainer, 'FG_Bkg')) {
            //--如果有子物件代表是盜賊
            bkgComp = FindComponent.findComponentInChildren(rootTargetContainer, FG2_BkgController);
            bkgComp.stopAllAni();
            const shareBg = bkgComp.getAndRemoveShareBg();
            rootTargetContainer = this.getTargetNodeByNameInGameModeNode(this._fg_Alibaba_Show_Sys, 'FG_Bkg_Ali');
            bkgComp = FindComponent.findComponentInChildren(rootTargetContainer, FG_BkgController);
            bkgComp.setShareBg(shareBg);
        } else {
            rootTargetContainer = this.getTargetNodeByNameInGameModeNode(this._fg_Alibaba_Show_Sys, 'FG_Bkg_Ali');
            bkgComp = FindComponent.findComponentInChildren(rootTargetContainer, FG_BkgController);
            bkgComp.stopAllAni();
        }

        const frontNode = this.getTargetNodeByNameInGameModeNode(this._fg_Thieves_Show_Sys, 'FG_Thieves');
        const fg_Bkg_frontNode = FindNode.findChildByNameRecursive(frontNode, 'FG_Bkg_front');
        if (fg_Bkg_frontNode) {
            const frameNode = this.getTargetNodeByNameInGameModeNode(this._fg_Thieves_Show_Sys, 'FG_Bkg_Thieves');
            fg_Bkg_frontNode.parent = frameNode;
        }

    }

    //--整個換完背景後會進來(轉場中進來)
    public changeBGContainerLayerDuringTransition(camp: number): void {

        const target = FindNode.findChildByNameRecursive(this._fakeNgVerticalNode, 'NG_bkg_pic');
        target.active = false;
        const ng_Bkg = FindNode.findChildByNameRecursive(this._bgContainerNode, 'NG_Bkg');
        const ogContainerNode = FindNode.findChildByNameRecursive(ng_Bkg, 'ng_vertical_bg');

        if (target && ogContainerNode) {
            target.parent = ogContainerNode;
        }

        const ngLanguageTitleNodeTarget = FindNode.findChildByNameRecursive(this._fakeNgVerticalNode, 'NG_logo');
        const ogLanguageContainerNode = FindNode.findChildByNameRecursive(ng_Bkg, 'ng_vertical_logo');
        if (ngLanguageTitleNodeTarget && ogLanguageContainerNode) {
            ngLanguageTitleNodeTarget.parent = ogLanguageContainerNode;
        }

        //--先檢查目前開啟的是哪個陣營的FG
        /*
        const frameNode = this.getTargetNodeByNameInGameModeNode(this._fg_Thieves_Show_Sys, 'FG_Thieves');
        const fg_Bkg_frontNode = FindNode.findChildByNameRecursive(frameNode, 'FG_Bkg_front');
        console.log('checkFG2_front_', fg_Bkg_frontNode,);
        if (fg_Bkg_frontNode) {
            console.log('checkFG2_front_active', fg_Bkg_frontNode.active, fg_Bkg_frontNode.parent.active);
            fg_Bkg_frontNode.active = true;
        }*/

        //-camp=0代表阿里，camp=1代表盜賊
        if (camp == 1) {
            const frameNode = this.getTargetNodeByNameInGameModeNode(this._fg_Thieves_Show_Sys, 'FG_Bkg_Thieves');
            const fg2Comp: FG2_BkgController = FindComponent.findComponentInChildren(frameNode, FG2_BkgController);
            if (fg2Comp) {
                fg2Comp.visibilityForTargetSpineNode(true);//--開啟FG2_BkgController的targetSpineNode
                fg2Comp.playAni();//--播放動畫
            }
        }
        /*
        let rootContainerTarget = this.getTargetNodeByNameInGameModeNode(this._fg_Alibaba_Show_Sys, 'FG_Bkg_Ali');
        if (!this.checkChildrenContains(rootContainerTarget, 'FG_Bkg')) {
            //--如果有子物件代表是阿里
            rootContainerTarget = this.getTargetNodeByNameInGameModeNode(this._fg_Thieves_Show_Sys, 'FG_Bkg_Thieves');
            if (this.checkChildrenContains(rootContainerTarget, 'FG_Bkg')) {
                const frameNode = this.getTargetNodeByNameInGameModeNode(this._fg_Thieves_Show_Sys, 'FG_Thieves');
                const fg_Bkg_frontNode = FindNode.findChildByNameRecursive(frameNode, 'FG_Bkg_front');
                if (fg_Bkg_frontNode) {
                    fg_Bkg_frontNode.active = true;
                }
            }

        }*/
    }


    /**
     * 因為轉場會交換容器的parent，所以要在轉場結束後重新設定parent
     */
    public reSetContainerLayer(): void {

        const nodes: Node[] = this._fakeTransitionNode.children;
        for (const item of nodes) {
            item.parent = this._slotFrameNode;
        }
        const targetChild = this._slotFrameNode.children;
        for (const ngFrameNode of targetChild) {
            if (ngFrameNode.name == 'NG_frame' && ngFrameNode.active) {
                ngFrameNode.active = false;
                break;
            }
        }
    }

    public setFGCamp(camp: number): void {

        const target = this._showContainerMap.get(GameState.FREE_GAME);
        if (!target) return; // 如果沒有對應資料，提前結束

        for (const nodeAry of target) {
            for (const displayItem of nodeAry.gameNodeHashInfo) {
                const testComp = FindComponent.findComponentInChildren(displayItem.displayNode, BasicDisplayContainer);
                if (testComp) {
                    testComp.camp = camp;
                }
            }
        }
    }

    public changeRotationResolution(): void {

        const processed = new Set<GameModeNode>();

        for (const containerList of this._showContainerMap.values()) {

            for (const nodeAry of containerList) {
                //--檢查是否重複操作(NG/RE_SPINE/這兩個hash裝的是同一個東西)
                if (processed.has(nodeAry)) continue;
                processed.add(nodeAry);

                for (const displayItem of nodeAry.gameNodeHashInfo) {
                    const displayNode = displayItem.displayNode;
                    let comp: any = FindComponent.findComponentInChildren(displayNode, BasicDisplayContainer);

                    if (comp) {
                        comp.changeRotationResolution(this._currentRotation);
                        continue;
                    }

                    comp = FindComponent.findComponentInChildren(displayNode, BasicGameStateAndRotationResolution);
                    if (comp) {
                        comp.onWindowResize(this._currentRotation);
                        continue;
                    }

                    comp = FindComponent.findComponentInChildren(displayNode, FG_SpriteController);
                    if (comp) {
                        comp.changeRotationResolution(this._currentRotation);
                    }
                }
            }
        }
    }

    /**
    * 在changeGameMode之前先關閉動畫
    * 執行processNormalRound時機
    * 1.processNormalRound(每一局結束)
    * 2.processRound(reSpin/Fg每一局)
    * 但是只要狀態與上一次相同就不會繼續往下
    */
    public changeGameMode(gameState: GameState, camp?: number): void {
        if (this._currentGameState === gameState) {
            return; // 如果狀態沒有改變，則不執行任何操作
        }
        // 關閉舊狀態的顯示容器
        this.closeContainerByState(this._currentGameState);//--關掉舊的
        // 開啟新狀態的顯示容器

        //抽出目標map
        const mainTarget: GameModeNode | undefined = this.getTargetContainer(gameState, camp);

        const processed = new Set<GameModeNode>();
        //this._currentCamp = camp != null ? camp : -1; // 更新當前陣營

        for (const [mapGameState, containerList] of this._showContainerMap.entries()) {
            for (const group of containerList) {
                if (processed.has(group)) continue;
                processed.add(group);

                const isMainTarget = group === mainTarget;
                for (const node of group.gameNodeHashInfo) {
                    const displayNode = node.displayNode;
                    //-NG_BkgController/NG_FrameController/FG_BkgController/FG2_BkgController/NG_Dec_frame(這個是在前面滾的裝飾性動畫(只有NG有))
                    //--ps-因為NG_Dec_frame有勾選afterPlayDoDrop，所以會在轉場時自動關閉
                    let comp: any = FindComponent.findComponentInChildren(displayNode, BasicDisplayContainer);
                    if (comp) {

                        if (isMainTarget) {

                            displayNode.active = true;
                            comp.isShowing = true;
                            comp.changeGameState(gameState);
                            comp.playAni();
                            continue;

                        } else {
                            //--脫離FG的狀態下camp要更新
                            if (comp.node.name == 'FG_Bkg_Thieves' || comp.node.name == 'FG_Bkg_Ali') {
                                comp.camp = camp;
                            }
                            //--沒辦法isShowing的狀態要在changeGameState之前寫進去
                            displayNode.active = false;
                            comp.isShowing = false;
                            comp.changeGameState(gameState);
                        }
                    }
                    //--直版假的轉場用NG_Bkg/logo
                    comp = FindComponent.findComponentInChildren(displayNode, BasicGameStateAndRotationResolution);
                    if (comp) {

                        if (isMainTarget) {
                            comp.isShowing = true;
                            comp.changeGameState(gameState);
                            displayNode.active = true;
                            comp.openAllShowContainer();
                            continue;
                        } else {
                            comp.isShowing = false;
                            comp.changeGameState(gameState);
                            displayNode.active = false;
                        }

                    }
                    //--FG_Ali / FG_Thieves(在slotFrame裡面)
                    comp = FindComponent.findComponentInChildren(displayNode, FG_SpriteController);
                    if (comp) {

                        comp.isShowing = true;
                        comp.changeGameState(gameState);
                        comp.camp = camp;
                        if (isMainTarget) {
                            comp.isShowing = true;
                            displayNode.active = true;
                        } else {
                            comp.isShowing = false;
                            comp.changeGameState(gameState);
                            displayNode.active = false;
                        }
                    }
                }

            }
        }

        this._currentGameState = gameState; // 更新當前遊戲狀態
    }

    public closeAllShowContainer(): void {

        for (const [gameState] of this._showContainerMap.entries()) {
            this.closeContainerByState(gameState);
        }
        /*
        for (const key in this._showContainerMap) {
            this.closeContainerByState(key);
        }*/
    }

    private closeContainerByState(gameState: GameState): void {

        if (gameState !== null && this._showContainerMap.has(gameState)) {
            const containerList = this._showContainerMap.get(gameState);
            if (!containerList) return; // 如果沒有對應的容器，則直接返回

            for (const aryNodeContainer of containerList) {
                for (const node of aryNodeContainer.gameNodeHashInfo) {
                    let comp: any = FindComponent.findComponentInChildren(node.displayNode, BasicDisplayContainer);
                    if (comp) {
                        //comp.changeGameState(gameState);
                        comp.stopAllAni();
                        comp.isShowing = false;
                        node.displayNode.active = false;
                        continue;
                    }

                    comp = FindComponent.findComponentInChildren(node.displayNode, BasicGameStateAndRotationResolution);
                    if (comp) {
                        comp.closeAllShowContainer();
                        comp.isShowing = false;
                        node.displayNode.active = false;
                        continue;
                    }

                    comp = FindComponent.findComponentInChildren(node.displayNode, FG_SpriteController);
                    if (comp) {
                        comp.stopAllAni();
                        comp.isShowing = false;
                        node.displayNode.active = false;
                    }

                }
            }
        }
        //console.log('關閉狀態:', this._showContainerMap);
    }


    public getContainerNode(key: string): Node | null {

        for (const containerList of this._showContainerMap.values()) {
            for (const aryNodeContainer of containerList) {
                for (const node of aryNodeContainer.gameNodeHashInfo) {
                    if (node.nodeName === key) {
                        return node.displayNode;
                    }
                }
            }
        }
        return null;//--沒找到就null
    }

    //--抽取目標map
    private getTargetContainer(gameState: GameState, camp?: number): GameModeNode | undefined {
        const targetList = this._showContainerMap.get(gameState);
        if (!targetList || targetList.length === 0) return undefined;

        if (gameState === GameState.NORMAL || gameState === GameState.RE_SPINE) {
            return targetList[0];
        }

        if (camp == null || camp === 0 || camp === -1) {
            return targetList[0];
        } else if (camp === 1 && targetList.length > 1) {
            return targetList[1];
        }

        return undefined;
    }

    private initComps(): void {

        let targetComp;

        for (const containerList of this._showContainerMap.values()) {
            for (const aryNodeContainer of containerList) {
                for (const node of aryNodeContainer.gameNodeHashInfo) {
                    node.displayNode.active = true;//--強制觸發onload->init
                    targetComp = FindComponent.findComponentInChildren(node.displayNode, BasicDisplayContainer);
                    if (targetComp) {
                        targetComp.init();//--感覺這些都可以拿掉了(因為onload會自動呼叫)
                    } else {
                        targetComp = FindComponent.findComponentInChildren(node.displayNode, BasicGameStateAndRotationResolution);
                        if (targetComp) {
                            targetComp.init();
                        }
                    }
                    node.displayNode.active = false;
                }
            }
        }
    }


}


