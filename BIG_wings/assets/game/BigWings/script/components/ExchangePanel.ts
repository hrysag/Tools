import { AbstractExchangePanel, ExchangeInfo, ExchangePanelEventMap, ExchangePanelEventName, IfExchangePanel } from "@casino-mono/mvc";
import { Button, CCFloat, CCInteger, CCObject, CCString, Component, Label, _decorator, Node, warn, Input, Toggle, CCBoolean } from "cc";
import { Emitter } from "strict-event-emitter";
import { customButton } from "../../../../common/script/ui/customButton";
const { ccclass, menu, property } = _decorator;

const GROUP_FORM = { name: 'Form', style: 'section' };
const AUTO_EXCHANGE_GROUP = { name: 'AutoExchange', style: 'section', id: '3' };
const QUICK_EXCHANGE_GROUP = { name: 'QuickExchangeToolbar', style: 'section', id: '2' };
const SUBMIT_GROUP = { name: 'Submit Button', style: 'section', id: '4' };

export type UserAutoExchange = {
    // 是否打開自動換分
    IsAuto: boolean,
    // 自換分分數
    Credit: number,
    // 自動換分比例
    BetBase: string,
    // 手動輸入歷史紀錄
    Record: string[]
}

// 無法繼承IfExchangePanel update 事件衝突
@ccclass('ExchangePanel')
@menu(`BigWings/ExchangePanel`)
export class CocosExchangePanel extends Component {
    
    protected exchangePanel: ExchangePanel = new ExchangePanel();
    
    @property( { type: CCObject, visible: false, tooltip:'介面暫存資訊' } ) 
    protected exchangeInfo: ExchangeInfo = {
        balance: 3000.12,
        base: '1:1,1:10',
        betBase: '1:1',
    };

    @property( { type: CCObject, visible: false, tooltip:'介面暫存資訊' } )
    protected dataElements: { userName: string, exchange: number, isAuto: boolean } = { userName: '', exchange: 0, isAuto: false };

    @property( { type:CCString, displayName: "UserName" } )
    public get userName(): string {
        return this.exchangePanel.userName;
    }
    public set userName(value: string) {
        const { dataElements, exchangePanel } = this;
        dataElements.userName = exchangePanel.userName = value;
    }

    @property( { type:CCString, displayName: "BetBase", tooltip:'換分比例' } )
    public get betBase(): string {
        return this.exchangePanel.betBase;
    }
    public set betBase(value: string) {
        const { exchangeInfo, exchangePanel } = this;
        exchangeInfo.betBase = exchangePanel.betBase = value;
    }
    @property( { type:CCString } )
    public get base(): string {
        return this.exchangeInfo.base;
    }
    public set base(value: string) {
        const { exchangeInfo, exchangePanel } = this;
        exchangeInfo.base = value;
        exchangePanel.update(this.exchangeInfo);
        console.log(`exchangeInfo.base = ${exchangePanel.base}`);
    }
    @property( { type:CCFloat, group: { name: 'washInfo', style: 'section' } } )
    public get transCredit(): number {
        return this.exchangeInfo.washInfo?.transCredit || 0;
    }
    public set transCredit(value: number) {
        const { exchangeInfo } = this;
        if (!exchangeInfo.washInfo) {
            exchangeInfo.washInfo = { transCredit: 0, amount: 0 };
        }
        exchangeInfo.washInfo.transCredit = value;

        const { transCredit, amount } = exchangeInfo.washInfo;

        if (transCredit === 0 && amount === 0) {
            delete exchangeInfo.washInfo;
        }
    }

    @property( { type:CCFloat, group: { name: 'washInfo', style: 'section' } } )
    public get amount(): number {
        return this.exchangeInfo.washInfo?.amount || 0;
    }
    public set amount(value: number) {
        const { exchangeInfo } = this;
        if (!exchangeInfo.washInfo) {
            exchangeInfo.washInfo = { transCredit: 0, amount: 0 };
        }
        exchangeInfo.washInfo.amount = value;

        const { transCredit, amount } = exchangeInfo.washInfo;

        if (transCredit === 0 && amount === 0) {
            delete exchangeInfo.washInfo;
        }
    }
    // 標題
    @property( { type: Label, group: GROUP_FORM } )
    protected title: Label = null;
    @property( { type: CCString, group: GROUP_FORM, visible: function () { return !!this.title; } } )
    protected get titleText(): string { 
        return (this.title) ? this.title.string : ''; }
    protected set titleText(value: string) {
        if (this.title) this.title.string = value;
    }
    // 餘額
    @property( { type: Label, group: GROUP_FORM } )
    protected balanceLabel: Label = null;
    @property( { type:CCFloat, tooltip:'可用餘額', displayName: 'Balance Text', group: { name: 'Form', style: 'section' }, visible: function () { return !!this.balanceLabel; } } )
    public get balance(): number {
        return this.exchangeInfo.balance;
    }
    public set balance(value: number) {
        const { exchangeInfo, exchangePanel } = this;
        exchangePanel.balance = value;
        this.balanceLabel.string = String(value);
    }
    // 分數
    @property( { type: Label, group: GROUP_FORM } )
    protected creditLabel: Label = null;
    @property( { type:CCFloat, tooltip:'目前分數', displayName: 'Credit Text', group: GROUP_FORM, visible: function () { return !!this.creditLabel; } } )
    public get credit(): number {
        return this.exchangePanel.credit;
    }
    public set credit(value: number) {
        const { exchangeInfo, exchangePanel } = this;
        exchangePanel.credit = value;
        this.creditLabel.string = String(value);
    }
    // 兌換分數
    @property( { type: Label, group: { name: 'Excahnge', style: 'section', id: '3' } } )
    protected exchangeLabel: Label = null;
    @property( { type:CCInteger, tooltip:'兌換分數', displayName: 'Exchange.Text', group: { name: 'Excahnge', style: 'section', id: '3' }, visible: function () { return !!this.exchangeLabel; } } )
    public get exchange(): number {
        return this.exchangePanel.exchange;
    }
    public set exchange(value: number) {
        const { dataElements, exchangePanel, resetButton, exchangeInvalidFeedback } = this;
        exchangePanel.exchange = value;
        this.exchangeLabel.string = String(value);
        let isValid: boolean = (exchangePanel.exchange > 0);
        if (resetButton != null) {
            resetButton.node.active = isValid;
        }
        
        if (exchangeInvalidFeedback && isValid) {
            exchangeInvalidFeedback.node.parent.active = false;
        }
    }
    @property( { type: Button, tooltip: '重製按鈕', group: { name: 'Excahnge', style: 'section', id: '3' } } )
    protected resetButton: Button = null;

    @property( { type: Label, displayName: 'Invalid', tooltip: "換分提示", group: { name: 'Excahnge', style: 'section', id: '3' } } )
    protected exchangeInvalidFeedback: Label = null;

    @property( { type: Node, displayName: "Button Group", tooltip: '快速換分按鈕列', group: QUICK_EXCHANGE_GROUP } )
    protected quickExBar: Node[] = [];
    
    @property( { type: CCString, displayName: "Value List", group: QUICK_EXCHANGE_GROUP })
    protected quickExBarValues: string[] = ['50', '500', '5000'];
    
    protected quickExBarLabels: Label[] = [];

    @property( { type: Toggle, tooltip: '自動換分切換按鈕', group: AUTO_EXCHANGE_GROUP } )
    protected autoExchangeToggle: Toggle = null;

    @property( { type: CCBoolean, tooltip: '是否開啟自動換分', group: AUTO_EXCHANGE_GROUP } )
    protected get isAutoExchange(): boolean {
        return this.dataElements.isAuto;
    }
    protected set isAutoExchange(value: boolean) {
        if (this.autoExchangeToggle && value != this.dataElements.isAuto) {
            this.autoExchangeToggle.isChecked = value;
        }
        this.dataElements.isAuto = value;
    }

    @property( { type: Node, tooltip: '提示按鈕', group: AUTO_EXCHANGE_GROUP } )
    protected autoTipButton: Node = null;

    @property( { type: Label, tooltip: '自動換分', group: AUTO_EXCHANGE_GROUP } )
    protected autoExchangeLabelOn: Label = null;
    
    @property( { type: Label, tooltip: '自動換分', group: AUTO_EXCHANGE_GROUP } )
    protected autoExchangeLabelOff: Label = null;
    
    @property( { type: CCString, tooltip: '自動換分標題文字', group: AUTO_EXCHANGE_GROUP, visible: function () { 
        return !!this.autoExchangeLabelOff || !!this.autoExchangeLabelOn; 
    } } )
    protected get autoExchangeLabelText(): string {
        if (this.autoExchangeLabelOff) {
            return this.autoExchangeLabelOff.string;
        } else if (this.autoExchangeLabelOn) {
            return this.autoExchangeLabelOn.string;
        } else {
            return '';
        }
    }
    protected set autoExchangeLabelText(value: string) {
        const { autoExchangeLabelOff, autoExchangeLabelOn } = this;
        if (autoExchangeLabelOff) {
            autoExchangeLabelOff.string = value;
        }
        if (autoExchangeLabelOn) {
            autoExchangeLabelOn.string = value;
        }
    }
    
    @property( { type: Label, tooltip: '自動換分提示框:物件', group: AUTO_EXCHANGE_GROUP } )
    protected autoExchangeTooltip: Label = null;
    
    @property( { type: CCString, tooltip: '自動換分提示框:說明文字', group: AUTO_EXCHANGE_GROUP, visible: function () { return !!this.autoExchangeTooltip; } } )
    protected autoExchangeTooltipText: String = '進入遊戲或餘額不足時，將自動兌換(預設分數)。';

    @property( { type: customButton, tooltip: '送出按鈕', group: SUBMIT_GROUP } )
    protected submitButton: Button = null;
   
    @property( { type: Label, tooltip: '送出按鈕文字', group: SUBMIT_GROUP } )
    protected submitButtonLabel: Label = null;

    @property( { type: CCString, group: SUBMIT_GROUP, visible: function () { return !!this.submitButtonLabel; } } )
    protected get submitButtonText(): string {
        if (this.submitButtonLabel) {
            return this.submitButtonLabel.string;
        }
    };
    protected set submitButtonText(value: string) { 
        if (this.submitButtonLabel) {
            this.submitButtonLabel.string = value;
        }
    };

    protected backdrop: Node = null;

    public get isShow(): boolean { return this.exchangePanel.isShow; }

    public get exBalance(): number { return this.exchangePanel.exBalance; }

    public get nowMaxChange(): number { return this.exchangePanel.nowMaxChange; }

    public get event(): Emitter<ExchangePanelEventMap> {
        return this.exchangePanel.event;
    }

    constructor() {
        super();
        
        this.exchangePanel.event.on('display', () => this.updateDisplay());
    }
    protected create():void {
        const { quickExBar, exchangeInvalidFeedback, backdrop, submitButton, submitButtonLabel } = this;

        if (!backdrop) {
            this.backdrop = this.node.getChildByName('black');
        }
        if (submitButton && !submitButtonLabel) {
            this.submitButtonLabel = submitButton.node.getChildByName('label').getComponent(Label);
        }
    }
    protected onLoad(): void {
        this.create();
        //this.title = this.node.getChildByName('title').getComponent(Label);
        this.resetButton?.node.on(Button.EventType.CLICK, () => this.exchange = 0);
        console.log(`this.quickExBarValues: ${this.quickExBarValues}`);

        const { quickExBar, submitButton, exchangeInvalidFeedback, backdrop, autoExchangeTooltip, autoExchangeToggle, autoTipButton } = this;

        if (quickExBar) {
            quickExBar.forEach((button: Node, index) => {
                let label: Label = button.getChildByName('label').getComponent(Label);
                this.quickExBarLabels.push(label)
                label.string = this.quickExBarValues[index];
                button.on(Button.EventType.CLICK, () => {
                    const { exchangePanel } = this;
                    console.log(`
                    balance: ${exchangePanel.balance}
                    ${exchangePanel.exchange} + ${(+this.quickExBarValues[index])} = ${exchangePanel.exchange + (+this.quickExBarValues[index])}`);
                    this.addExchange(+this.quickExBarValues[index])
                    this.exchange = exchangePanel.exchange;
                });
            })
        }
        if (submitButton) {
            submitButton.node.on(Button.EventType.CLICK, () => {
                if (this.exchange === 0) exchangeInvalidFeedback.node.parent.active = true;
                const { betBase, exchange } = this.exchangePanel;
                console.warn(`Submited: { betBase: ${ betBase }, amount: ${ exchange } }`);
                this.creditExchange(betBase, exchange);
            });
        }
        if (exchangeInvalidFeedback) {
            exchangeInvalidFeedback.node.parent.active = false;
        }
        
        if (backdrop) {
            backdrop.on(Input.EventType.TOUCH_END, () => {
                if (autoExchangeTooltip) autoExchangeTooltip.node.parent.active = false;
                
            });
        }
        console.log(`toggling`, autoExchangeToggle);
        if (autoExchangeToggle) {
            autoExchangeToggle.node.on(Toggle.EventType.CLICK, () => {
                console.log(`toggling`);
                
            })
        }
        if (autoTipButton) {
            autoTipButton.on(Button.EventType.CLICK, () => {
                if (autoExchangeTooltip) autoExchangeTooltip.node.parent.active = true;
            })
        }

        this.node.on(Node.EventType.ACTIVE_IN_HIERARCHY_CHANGED, () => {
            console.log(`ACTIVE_IN_HIERARCHY_CHANGED`, this.node.active);
            (this.node.active) ? this.show() : this.close();
        });

    }
    protected setup(): void {
    }
    protected clear(): void {
        
    }
    protected start(): void {
        const { exchangeInfo, exchangePanel } = this;
        exchangePanel.update(exchangeInfo);
        // 這邊是將介面設定暫存值寫到物件
        this.updateDisplay();
    }
    /** 換分？ */
    public getChangeCredit(credit: number, fromBase: string, toBase: string) {
        this.exchangePanel.getChangeCredit(credit, fromBase, toBase);
    }
    /** 更新資訊 */
    public dataUpdate(info: ExchangeInfo) {
        this.exchangePanel.update(info);
    }
    public updateDisplay(): void {
        // TODO: should draw be need display
        const { exchangePanel, exchangeInfo, dataElements } = this;
        console.log(`after.updateDisplay
  balance: ${exchangePanel.balance} > ${exchangeInfo.balance}
  credit: ${exchangePanel.credit} > ${exchangeInfo.credit}
  exchange: ${exchangePanel.exchange} > ${dataElements.exchange}`);
        dataElements.exchange   = exchangePanel.exchange;
        exchangeInfo.balance    = exchangePanel.balance;
        exchangeInfo.credit     = exchangePanel.credit;
    }
    
    public addExchange(value: number) {
        this.exchangePanel.addExchange(value);
    }
    /**
     * 最大值換分
     */
    public maxChange() {
        this.exchangePanel.maxChange();
    }
    public show() {
        this.exchangePanel.show();
        // this.node.active = true;
        this.setup();
    }
    public close() {
        this.exchangePanel.close();
        // this.node.active = false;
        this.clear();
    }

    /** 按鈕事件 */
    public creditExchange(ratio: string, amount:number): void {
        this.exchangePanel.creditExchange(ratio, amount);
    }
    /** 按鈕事件 */
    public balanceExchange(): void {
        this.exchangePanel.balanceExchange();
    }
    /** 按鈕事件 */
    public changeRatio(ratio: string): void {
        this.exchangePanel.changeRatio(ratio);
    }
    /** 按鈕事件 */
    public leaveGame(): void {
        this.exchangePanel.leaveGame();
    }
    protected registerEventListener() {

    }
    /** 更新快速換分按鈕 */
    protected updateQuickExchangeBar(values: string[]) {
        const { quickExBar } = this;

        if (quickExBar) {
            quickExBar.forEach((button: Node, index) => {
                this.quickExBarValues[index] = values[index] || "0";
                this.quickExBarLabels[index].string = this.quickExBarValues[index];
            })
        }
    }
}

export class ExchangePanel extends AbstractExchangePanel {
    protected _betBase: string = "1:1";
    protected _userName: string = "****";
    set userName(value: string) {
        this._userName = value;
    }
    get userName(): string {
        return this._userName;
    }
    protected updateDisplay(): void {
        this.event.emit('display')
    }
    public creditExchange(ratio: string, amount: number): void {
        super.creditExchange(ratio, amount);
    }
    public balanceExchange(): void {
        super.balanceExchange();
    }
    public changeRatio(ratio: string): void {
        super.changeRatio(ratio);
    }
    public leaveGame(): void {
        super.leaveGame();
    }
}