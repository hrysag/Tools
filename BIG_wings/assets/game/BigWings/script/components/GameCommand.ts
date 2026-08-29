import { CommandEventName } from "@casino-mono/mvc";
import { Component, _decorator, Node, CCBoolean, log, js, EventHandler, Button, Animation, Label, animation, AnimationState, AnimationClip, UITransform, tween, Vec3, debug } from "cc";
import { BaseAutoSet } from "./BaseAutoSet";
import { BetSetPanel } from "./BetSetPanel";
import { SymbolInfo } from "../wheel/SymbolInfo";
import AudioMgr from "../tools/audio/AudioMgr";
import { UtilsKit } from "../lib/UtilsKit";
import { BuyFreeGamePanel } from "./BuyFreeGamePanel";
const { ccclass, property, menu } = _decorator;

export enum GameCommandMode {
    BETTING = "betting", // 可下注狀態
    SPINNING = "spinning", // 等待 BEGIN_GAME_DATA(輪軸旋轉)狀態
    CAN_STOP = "can_stop" // 收到 BEGIN_GAME_DATA(輪軸旋轉)可以停止狀態
}

@ccclass('GameCommand')
@menu('BigWings/GameCommand')
export class GameCommand extends Component {

    @property({ type: Button, tooltip: "spin 按鈕" })
    protected btnSpin: Button = null;

    @property({ type: Button, tooltip: "BFG 按鈕" })
    protected buyFreeGame: Button = null;

    @property({ type: BuyFreeGamePanel, tooltip: "BuyFreeGame 面板" })
    protected buyFreeGamePanel: BuyFreeGamePanel = null;

    @property({ type: Button, tooltip: "+ 按鈕" })
    protected betPlus: Button = null;

    @property({ type: Button, tooltip: "- 按鈕" })
    protected betMinus: Button = null;

    @property({ type: Button, tooltip: "押注列表按鈕" })
    protected betSetPanelBtn: Button = null;

    @property({ type: BetSetPanel, tooltip: "押注列表" })
    protected betSetPanel: BetSetPanel = null;

    @property({ type: Button, tooltip: "加速按鈕" })
    protected btnSpeedUp: Button = null;

    @property({ type: Button, tooltip: "取消加速按鈕" })
    protected btnSpeedUpStop: Button = null;

    @property({ type: Button, tooltip: "auto 按鈕" })
    protected btnAuto: Button = null;

    @property({ type: Button, tooltip: "auto stop 按鈕" })
    protected btnAutoStop: Button = null;

    @property({ type: Node, tooltip: "auto 次數 Node" })
    protected autoSetNode: Node = null;

    @property({ type: BaseAutoSet, tooltip: "auto 次數設定面板" })
    protected autoSetPanel: BaseAutoSet = null;

    @property({ type: Node, tooltip: "目前 auto 次數 Node" })
    protected currentAutoNumberNode: Node = null;

    @property({ type: Node, tooltip: "彈出設定面板" })
    protected popUpPanel: Node = null;

    @property({ type: SymbolInfo, tooltip: '賠率表' })
    protected symbolInfo: SymbolInfo;

    protected _gameMode: GameCommandMode; // 遊戲按鈕模式
    protected _isAuto: boolean = false; // 是否為自動狀態
    protected _currentAutoNumber: number = 0; // 目前自動次數
    protected _doSpeedUp: boolean = false; // 是否加速


    get event(): Node {
        return this.node;
    }

    get gameMode(): GameCommandMode {
        return this._gameMode;
    }

    get isAuto(): boolean {
        return this._isAuto;
    }

    set currentAutoNumber(n: number) {
        this._currentAutoNumber = n;

        const lableNode: Node = this.currentAutoNumberNode.getChildByName("label");
        const infinityNode: Node = this.currentAutoNumberNode.getChildByName("infinite");
        if (n >= 0) {
            infinityNode.active = false;
            lableNode.active = true;
            lableNode.getComponent(Label).string = n.toString();
        } else {
            infinityNode.active = true;
            lableNode.active = false;
        }

        if (n == 0) {
            this._isAuto = false;
        } else {
            this._isAuto = true;
        }
        this.btnSpin.node.active = !this._isAuto;
        this.btnAutoStop.node.active = this._isAuto;
        this.currentAutoNumberNode.active = this._isAuto;
    }

    set arrBet(arr: Array<number>) {
        this.betSetPanel.BetCreditList = arr;
    }

    set currentBet(n: number) {
        this.betSetPanel.currentBet = n;
    }

    get currentBet(): number {
        return this.betSetPanel.currentBet;
    }
    get currentAutoNumber(): number {
        return this._currentAutoNumber;
    }

    get doSpeedUp(): boolean {
        return this._doSpeedUp;
    }

    public onLoad(): void {
        console.log(`command onload`);

        this.autoSetPanel.currentAutoLabel = this.autoSetNode;


        UtilsKit.BindEvents([
            { bindTarget: this.btnSpin, callback: this.handleSpin },
            { bindTarget: this.btnAuto, callback: this.handleAuto },
            { bindTarget: this.btnAutoStop, callback: this.handleAutoStop },
            { bindTarget: this.betPlus, callback: this.handlePlus },
            { bindTarget: this.betMinus, callback: this.handleMinus },
            { bindTarget: this.btnSpeedUp, callback: this.handleSpeedUp },
            { bindTarget: this.btnSpeedUpStop, callback: this.handleSpeedUp },
            { bindTarget: this.buyFreeGame, callback: this.openBuyFreeGamePanel },
            { bindTarget: this.betSetPanel, event: CommandEventName.UPDATE_LINEBET, callback: this.handleLineBet },
            { bindTarget: this.betSetPanelBtn, callback: this.handleBet },
            { bindTarget: this.buyFreeGamePanel, event: CommandEventName.BUY_FREEGAME, callback: this.handleBuyFreeGame },
        ], { defaultEvent: "click", defaultTarget: this });


    }

    // public setup(): void {
    //     // Trigger testcase
    //     this.event.emit(CommandEventName.SPIN);
    //     this.event.emit(CommandEventName.MAX_BET);
    //     let loop: boolean = false;
    //     this.event.emit(CommandEventName.LINE_BET, loop);
    //     this.event.emit(CommandEventName.LINE_BET_MINUS, loop);
    //     this.event.emit(CommandEventName.LINE, loop);
    //     this.event.emit(CommandEventName.LINE_MINUS, loop);
    //     this.event.emit(CommandEventName.DOUBLE);
    //     let lineBet = 0;
    //     this.event.emit(CommandEventName.UPDATE_LINEBET, lineBet);
    //     let line = 0;
    //     this.event.emit(CommandEventName.UPDATE_LINE, line);
    //     let betBae: string = '1:1'
    //     this.event.emit(CommandEventName.CHANGE_RATIO, betBae);

    //     this.event.emit(CommandEventName.EXCHANGE);
    // }

    protected handleSpin(): void {
        console.log("那這邊有嗎");
        if (this._gameMode == GameCommandMode.CAN_STOP) {
            this.event.emit(CommandEventName.STOP);
        } else {
            // if (this.autoSetPanel.node.active) {
            //     this.currentAutoNumber = this.autoSetPanel.currentAutoNumber;
            //     this.autoSetPanel.node.active = false;
            //     this.autoSetNode.active = false;
            // } else {
            //     this.currentAutoNumber = 0;
            // }
            this.event.emit(CommandEventName.SPIN, 2);// 要改bet

        }
    }

    protected handleAuto(): void {
        this.betPanelOpen = false;
        this.autoPanelOpen = !this.autoPanelOpen;
        this.popPanelVis();
        this.autoSetPanel.node.active = true;
        this.betSetPanel.node.active = false;

    }

    private autoPanelOpen: boolean = false;
    private betPanelOpen: boolean = false;
    private popPanelVis(): void {
        //原本大雄的寫法 但是因爲底層用tween 如果y已經在彈出狀態不會改變 而cocos因為是播Animation一定執行一次y從最小值到最大值
        // console.log(this.popUpPanel.getChildByName('content').position)
        // if (this.betPanelOpen || this.autoPanelOpen) this.popUpPanel.getComponent(Animation).getState('setShow').wrapMode = AnimationClip.WrapMode.Normal
        // else this.popUpPanel.getComponent(Animation).getState('setShow').wrapMode = AnimationClip.WrapMode.Reverse;
        // this.popUpPanel.getComponent(Animation).play();

        if ((this.betPanelOpen || this.autoPanelOpen)) { tween(this.popUpPanel).to(0.2, { position: new Vec3(this.popUpPanel.position.x, 1390, 0) }).start(); }
        else tween(this.popUpPanel).to(0.2, { position: new Vec3(this.popUpPanel.position.x, 0, 0) }).start();
    }
    public hideAllPopPanel(): void {
        tween(this.popUpPanel).to(0.2, { position: new Vec3(this.popUpPanel.position.x, 0, 0) }).start();
        this.autoPanelOpen = false;
        this.betPanelOpen = false;
    }

    protected handleBet(): void {
        this.autoPanelOpen = false;
        this.betPanelOpen = !this.betPanelOpen;
        this.popPanelVis();
        this.autoSetPanel.node.active = false;
        this.betSetPanel.node.active = true;
    }


    protected handleAutoStop(): void {
        this.currentAutoNumber = 0;
    }

    protected handlePlus(): void {
        this.betSetPanel.next();
    }

    protected handleMinus(): void {
        this.betSetPanel.previous();

    }

    protected handleLineBet(bet: number): void {
        console.log(bet);
        this.node.emit(CommandEventName.UPDATE_LINEBET, bet);
    }

    protected openBuyFreeGamePanel(): void {
        this.buyFreeGamePanel.openPanel();
    }

    protected handleSpeedUp(): void {
        this.btnSpeedUp.node.active = !this.btnSpeedUp.node.active;
        this.btnSpeedUpStop.node.active = !this.btnSpeedUpStop.node.active;
        this._doSpeedUp = !this.btnSpeedUp.node.active;
    }

    protected handleBuyFreeGame(): void {
        console.log("handle BuyFreeGame");
        // 後面參數是 [betCredit: "這個是bet", HitFree: true]
        this.event.emit(CommandEventName.BUY_FREEGAME, [2, true]);
    }

    /**
    * 按鈕模式
    * @param mode 模式
    */
    public mode(gameMode: GameCommandMode): void {
        this._gameMode = gameMode;
        switch (gameMode) {
            case GameCommandMode.BETTING:
                this.bettingMode();
                break;
            case GameCommandMode.SPINNING:
                this.spinningMode();
                break;
            case GameCommandMode.CAN_STOP:
                this.canStopMode();
                break;
        }
    }

    private bettingMode(): void {
        this.btnSpin.interactable = true;
        this.betPlus.interactable = true;
        this.betMinus.interactable = true;
        this.betSetPanelBtn.interactable = true;
        this.btnAuto.interactable = true;
        this.buyFreeGame.interactable = true;
        this.symbolInfo.enable = true;
    }

    private spinningMode(): void {
        this.btnSpin.interactable = false;
        this.betPlus.interactable = false;
        this.betMinus.interactable = false;
        this.betSetPanelBtn.interactable = false;
        this.btnAuto.interactable = false;
        this.buyFreeGame.interactable = false;
    }

    private canStopMode(): void {
        this.btnSpin.interactable = true;
        this.betPlus.interactable = false;
        this.betMinus.interactable = false;
        this.betSetPanelBtn.interactable = false;
        this.btnAuto.interactable = false;
        this.buyFreeGame.interactable = false;
    }

    public lock(): void {
        this.btnSpin.interactable = false;
        this.betPlus.interactable = false;
        this.betMinus.interactable = false;
        this.betSetPanelBtn.interactable = false;
        this.btnAuto.interactable = false;
        this.buyFreeGame.interactable = false;
        this.symbolInfo.enable = false;
    }

}