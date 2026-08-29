import { _decorator, Component, Node, CCString } from 'cc';
import { BtnController } from './Components/BtnController';
import { BuyFGGuiController } from './Components/BuyFGGuiController';
import { NotifyCation } from '../../MyUtils/EventSystem/NotifyCation';
import { NotifySubject } from '../../DefinitionGameData/EventTypesDefinition';
import { GameViewEvents } from '../../DefinitionGameData/EventTypesDefinition';
import { Orientation } from '../../../../../Scripts/Utils/Config';
import { AutoOrientAndSetPos } from '../ShowContainer/Components/AutoOrientAndSetPos';
import { IWindowResize } from 'db://assets/Scripts/Utils/IWindowResize';
const { ccclass, property } = _decorator;

@ccclass('BuyFgController')
//export class BuyFgController extends IWindowResize {
export class BuyFgController extends AutoOrientAndSetPos {

    @property({ type: BtnController, visible: true, displayName: 'BuyFgBtnNode', tooltip: 'BuyFgNode' })
    private _btnController: BtnController = null;

    @property({ type: BuyFGGuiController, visible: true, displayName: 'BuyFgNode', tooltip: 'BuyFgNode' })
    private _buyFGGuiController: BuyFGGuiController = null;

    private _isBuyFG: boolean = false;

    set isBuyFG(value: boolean) {
        this._isBuyFG = value;
    }

    public init(betValueList: number[]): void {
        this._btnController.clickCallback = this.btnClickCallback;
        this._buyFGGuiController.confirmCallback = this.fgGuiConFirmCallback;
        this._buyFGGuiController.closeCallback = this.fgCloseCallback;
        this._buyFGGuiController.init(betValueList);
        //this._btnController.init();
        this._btnController.openContainer();
        //this.openContainer();
    }

    protected override otherProcessForOrientation(orientation: Orientation): void {
        this._btnController.changeRotationResolution(orientation);
    }

    private moveTargetTo(target: Node, container: Node): void {
        if (!target || !container) return;
        target.removeFromParent(); // 強制脫離當前 parent
        container.addChild(target);
        target.setPosition(0, 0, 0);
    }

    protected override changeToLandscape(): void {
        const target = this.landscape[0].children[0] || this.portrait[0].children[0];

        if (target) {
            this.landscape[0].active = true;
            this.portrait[0].active = false;
            this.moveTargetTo(target, this.landscape[0]);
        }
    }

    protected override changeToPortrait(): void {

        const target = this.landscape[0].children[0] || this.portrait[0].children[0];
        if (target) {
            this.portrait[0].active = true;
            this.landscape[0].active = false;
            this.moveTargetTo(target, this.portrait[0]);
        }
    }

    public setPlayerBetValue(value: number): void {
        this._buyFGGuiController.baseBet = value;
        this._btnController.setPlayerBetValue(value);
    }

    public closeForFG(): void {
        this.node.active = false;
    }

    public openForFGFinish(): void {
        this.node.active = true;
    }
    public disableBuyFgBtn(): void {
        this._btnController.disableBuyFgBtn();
    }

    public enableBuyFgBtn(): void {
        this._btnController.enableBuyFgBtn();
    }

    public reOpenBuyFgBtn(): void {
        this._isBuyFG = false;
        this.enableBuyFgBtn();
    }

    public setCurrentBetAndOpenBuyFG(betValue: number): void {
        this.setPlayerBetValue(betValue);
        this._buyFGGuiController.open();
    }

    //--空白按鍵判斷使用(當面板開啟時,空白按鍵不能啟動spin)
    public getBuyFgPanelIsOpen(): boolean {
        return this._buyFGGuiController.buyFGPanelIsOpen;
    }
    //--關閉buyFG的頁面按鈕的遮蔽或是開啟的處理
    private fgCloseCallback = () => {
        this.enableBuyFgBtn();//--先開啟
        if (this._isBuyFG) {
            this.disableBuyFgBtn();
        }
    }
    //---_buyFGGuiController會再接著執行fgCloseCallback
    private fgGuiConFirmCallback = (betValue: number, totalMultiplierValue: number) => {
        //--打事件強call
        const evtData = {
            eventType: GameViewEvents.BUY_FG,
            eventData: {
                betValue: betValue,
                totalBetValue: totalMultiplierValue,
            }
        }
        this._isBuyFG = true;
        NotifyCation.getInstance().emitSync(NotifySubject.GAME_VIEW_SUBJECT, evtData.eventType, evtData);
    }

    //--buyBtn的callback(按下去的時候本身就會disable)
    private btnClickCallback = () => {
        //--要去拿bet的資料
        const evtData = {
            eventType: GameViewEvents.GET_CURRENT_BET
        }
        NotifyCation.getInstance().emitSync(NotifySubject.GAME_VIEW_SUBJECT, evtData.eventType);
        //this._buyFGGuiController.open();
    };

}


