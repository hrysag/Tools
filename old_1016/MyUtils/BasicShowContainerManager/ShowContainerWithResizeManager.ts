import { Node, _decorator } from 'cc';
//import { IWindowResize } from "db://assets/Scripts/Utils/IWindowResize";
//import { Orientation } from "db://assets/Scripts/Utils/Config";
import { BasicShowContainerManager } from "./BasicShowContainerManager";
import { ContainerWholeBehavior } from "./Component/ContainerWholeBehavior";
import { ContainerBasicBehavior } from './Component/ContainerBasicBehavior'
import { IBasicShowContainerManager } from "./IBasicShowContainerManager";
import { GameNodeContainer } from './Definitions/GameNodeContainer';
import { IGameMode } from '../BasicGameViewManager/IBasicGameModeManager';
import { GameState } from "../GameStateConfigDef/GameStateConfigDef";
import { IWindowResize, Orientation } from 'db://assets/Scripts/ModuleEntry';

/**
 * 裡面做委派給BasicShowContainerManager
 * 因為TS裡面不能做多重繼承的動作, IWindowResize他是component必須繼承
 * 因此沒有辦法再做一次繼承BasicShowContainerManager.
 * 所以用組合的方式來達成
 */
const { ccclass, property } = _decorator;

@ccclass('ShowContainerWithResizeManager')
export class ShowContainerWithResizeManager extends IWindowResize implements IBasicShowContainerManager, IGameMode {

    /*
    @property({
        type: BasicShowContainerManager,
        visible: true,
        displayName: 'Show Container Manager',
        tooltip: '在場景中拖入已經配置好的 BasicShowContainerManager 元件'
    })
    private _basicShowContainerManager: BasicShowContainerManager<ContainerBasicBehavior> = null;
    */

    //--原諒我..情非得已的苦衷
    /*
    @property({ type: ContainerWholeBehavior, visible: true, displayName: 'NG_顯示系統', group: 'normal_view', tooltip: 'NG相關會顯示的東西' })
    protected _ng_Show_Sys: ContainerWholeBehavior = new ContainerWholeBehavior();

    @property({ type: ContainerWholeBehavior, visible: true, displayName: 'FG_顯示系統', group: 'fg_view', tooltip: 'FG相關會顯示的東西' })
    protected _fg_Show_Sys: ContainerWholeBehavior = new ContainerWholeBehavior();


    @property({ type: Node, visible: true, displayName: 'Bg_container', tooltip: '裝全部bg的container' })
    protected _bgContainerNode: Node = new Node();

    protected _basicShowContainerManager: BasicShowContainerManager<ContainerWholeBehavior> | null = null;
    */
    /*
    @property({
        type: BasicShowContainerManager,
        visible: true,
        displayName: 'Show Container Manager',
        tooltip: '在場景中拖入已經好的 BasicShowContainerManager 元件'
    })
    private _basicShowContainerManager: BasicShowContainerManager<ContainerWholeBehavior> = null;
    */

    public _basicShowContainerManager: BasicShowContainerManager = new BasicShowContainerManager();

    @property({ type: GameNodeContainer, visible: true, displayName: 'NG_顯示系統', group: 'normal_view', tooltip: 'NG相關會顯示的東西' })
    protected _ng_Show_Sys: GameNodeContainer = new GameNodeContainer();

    @property({ type: GameNodeContainer, visible: true, displayName: 'RS_顯示系統', group: 'rs_view', tooltip: 'RS相關會顯示的東西' })
    protected _rs_Show_Sys: GameNodeContainer = new GameNodeContainer();

    @property({ type: GameNodeContainer, visible: true, displayName: 'FG_顯示系統', group: 'fg_view', tooltip: 'FG相關會顯示的東西' })
    protected _fg_Show_Sys: GameNodeContainer = new GameNodeContainer();


    //protected _showContainerMap: Map<GameState, GameNodeContainer<ContainerWholeBehavior>[]> = new Map();
    private _currentRotation: Orientation = null;
    private _finishInit: boolean = false;
    private _currentGameState: GameState = GameState.NULL;
    private _dirtyFlag: boolean = false;

    protected onLoad(): void {

        this.init();
    }

    public init(): void {

        if (this._finishInit) return;
        this._dirtyFlag = true;
        this._basicShowContainerManager = new BasicShowContainerManager();
        this._basicShowContainerManager.ng_Show_Sys = this._ng_Show_Sys;
        this._basicShowContainerManager.rs_Show_Sys = this._rs_Show_Sys;
        this._basicShowContainerManager.fg_Show_Sys = this._fg_Show_Sys;
        this._basicShowContainerManager.initMap();
    }

    public afterRegister(): void {
        if (!this._dirtyFlag) return;
        this._finishInit = true;
        this.initGameMode();
        this.changeRotationResolution(this._currentRotation);
    }

    public initGameMode(): void {
        this._basicShowContainerManager.closeAllShowContainer();
        this._basicShowContainerManager.openContainerByState(GameState.NORMAL);
    }

    public registerContainer(gameState: GameState, container: GameNodeContainer): void {
        this._basicShowContainerManager?.setContainerMap(gameState, container);
    }

    public get showContainerMap(): Map<GameState, GameNodeContainer[]> {
        return this._basicShowContainerManager?.showContainerMap;
    }

    public get slotFrameNode(): Node {
        return this._basicShowContainerManager?.slotFrameNode;
    }
    // ... 其他 getter/setter 也一樣


    protected changeRotationResolution(orientation?: Orientation): void {

        if (orientation) {
            this._currentRotation = orientation;
        }
        const processed = new Set<GameNodeContainer>();
        for (const containerList of this._basicShowContainerManager.showContainerMap.values()) {
            for (const nodeAry of containerList) {
                if (processed.has(nodeAry)) continue;
                processed.add(nodeAry);
                for (const displayItem of nodeAry.gameNodeHashInfo) {
                    const displayNode = displayItem.displayNode;//-ContainerWholeBehavior
                    (<ContainerWholeBehavior>displayNode).changeRotationResolution(orientation);
                }
            }
        }
    }

    //========================<IWindowResize>===========================================================
    public override onWindowResize(orientation: Orientation): void {

        if (this._currentRotation == orientation) return;
        this._currentRotation = orientation;
        if (this._finishInit) {
            this.changeRotationResolution(orientation);
        }
    }


    //========================<interface IGameMode>===========================================================

    public changeGameState(gameState: GameState, condition?: any): void {

        if (this._currentGameState === gameState) {
            return; // 如果狀態沒有改變，則不執行任何操作
        }
        // 關閉舊狀態的顯示容器
        //this._basicShowContainerManager.closeContainerByState(this._currentGameState);//--關掉舊的
        //--暫時先這樣-TO-DO-20251022要補另外的API出來-或是修改原本的API可以吃另一個useTween參數
        this._basicShowContainerManager.closeContainerByStateTween(this._currentGameState);//--關掉舊的
        this._currentGameState = gameState;
        //抽出目標map
        const mainTarget: GameNodeContainer | undefined = this._basicShowContainerManager.getTargetContainer(gameState, condition);
        const showContainerList: Map<GameState, GameNodeContainer[]> = this._basicShowContainerManager.showContainerMap;
        const processed = new Set<GameNodeContainer>();
        for (const [mapGameState, containerList] of showContainerList.entries()) {
            for (const group of containerList) {
                if (processed.has(group)) continue;
                processed.add(group);
                const isMainTarget = group === mainTarget;
                for (const node of group.gameNodeHashInfo) {
                    //--do something(isMainTarget用來判斷是不是主要顯示的那個要做一些處理)
                    const displayNode = <ContainerWholeBehavior>node.displayNode;
                    displayNode.changeGameMode(gameState);
                }
            }
        }
        //this._basicShowContainerManager.openContainerByState(gameState);//--打開新的
        //--暫時先這樣-TO-DO-20251022要補另外的API出來-或是修改原本的API可以吃另一個useTween參數
        this._basicShowContainerManager.openContainerByStateTween(gameState);//--打開新的

    }

    //========================<interface IBasicShowContainerManager>===========================================================

    public showContainer(containerId: string): void {
        this._basicShowContainerManager?.showContainer(containerId);
    }

    public hideContainer(containerId: string): void {
        this._basicShowContainerManager?.hideContainer(containerId);
    }

    public checkChildrenContains(node: Node, rootNodeName: string): boolean {
        if (this._basicShowContainerManager) {
            return this._basicShowContainerManager.checkChildrenContains(node, rootNodeName);
        }
        return false;
    }

    public getContainerNodeByKey(key: string): ContainerWholeBehavior | null {
        return this._basicShowContainerManager?.getContainerNodeByKey(key) ?? null;
    }

    public getContainerListByState(gameState: GameState): ContainerWholeBehavior[] | null {
        return this._basicShowContainerManager?.getContainerListByState(gameState) ?? null;
    }

    public closeAllShowContainer(): void {
        this._basicShowContainerManager?.closeAllShowContainer();
    }
    //--感覺有點多餘的功能=..=||但你要繼承過來在操控container裡面node物件的排列顯示層級也可以啦
    public reSetContainerLayer(): void {

    }

    private initComps(): void {

        const targetMap = this._basicShowContainerManager?.showContainerMap;
        for (const containerList of targetMap.values()) {
            for (const aryNodeContainer of containerList) {
                for (const node of aryNodeContainer.gameNodeHashInfo) {
                    node.displayNode.node.active = true;//--強制觸發onload->init
                }
            }
        }
    }

}
