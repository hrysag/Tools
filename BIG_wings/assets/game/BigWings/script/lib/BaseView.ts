import { BasePresenter } from "./BasePresenter";
import { BaseModel } from "./BaseModel";
import { ClientRecvAction } from "./RecvMessage";
import {
    AbstractExchangePanel,
    CommandEventName,
    ExchangeInfo,
    ExchangePanelEventName,
    IfAlertPanel,
    IfCostume,
    ToolBarEventName
} from "@casino-mono/mvc";
import { GameManager } from "../components/GameManager";
import { Component, warn } from "cc";
import { CocosExchangePanel } from "../components/ExchangePanel";

export class BaseView extends Component {

    protected presenter: BasePresenter;

    public alertPanel?: IfAlertPanel;

    public exchangePanel?: CocosExchangePanel;

    public gameManager: GameManager;

    constructor() {
        super();
    }
    start(): void {
        this.configCommandEvent();
        this.configToolbarEvent();
    }
    // Splash Screen or Launch Screen
    public updateProgress(progress: number): void {
        console.info(`progress: ${progress}`);
    }

    public hideHTMLUI(): void { }

    protected configCommandEvent(): void {

        const command = this.gameManager?.command;

        if (command) {

            const { presenter } = this;
            command.event.on(CommandEventName.SPIN, async (betInfo: any) => {
                let data = await presenter.beginGame(betInfo);
                this.gameManager.begin(data.result.data);
            });
            command.event.on(CommandEventName.MAX_BET, presenter.maxBet.bind(presenter));
            command.event.on(CommandEventName.LINE_BET, presenter.addLine.bind(presenter));
            command.event.on(CommandEventName.LINE_BET_MINUS, presenter.minusLine.bind(presenter));
            command.event.on(CommandEventName.LINE, presenter.addLine.bind(presenter));
            command.event.on(CommandEventName.LINE_MINUS, presenter.minusLine.bind(presenter));
            command.event.on(CommandEventName.DOUBLE, presenter.double.bind(presenter));
            command.event.on(CommandEventName.UPDATE_LINEBET, presenter.setLineBet.bind(presenter));
            command.event.on(CommandEventName.UPDATE_LINE, presenter.setLine.bind(presenter));
            command.event.on(CommandEventName.CHANGE_RATIO, presenter.fastExchange.bind(presenter));
            //開分事件另外處理
            command.event.on(CommandEventName.EXCHANGE, presenter.openCreditExchangePanel.bind(presenter));
        }
    }
    /**
     * @description 改寫configToolbarEvent
     */
    protected configToolbarEvent(): void {
        // TODO: Need Implement Settings Panel
        const toolbar = this.gameManager?.toolbar;
        if (toolbar) {
            const { presenter } = this;
            //簡單邏輯 , 就不再透過 switch case 來處理了
            toolbar.event.on(ToolBarEventName.MUSIC, presenter.backgroundMusic.bind(presenter));
            toolbar.event.on(ToolBarEventName.MUTE, presenter.mute.bind(presenter));
            toolbar.event.on(ToolBarEventName.EXIT, presenter.exit.bind(presenter));
            toolbar.event.on(ToolBarEventName.HELP, presenter.help.bind(presenter));
            toolbar.event.on(ToolBarEventName.HISTORY, presenter.history.bind(presenter));
            toolbar.event.on(ToolBarEventName.DEPOSIT, presenter.deposit.bind(presenter));
            toolbar.event.on(ToolBarEventName.GAMEINFO, presenter.gameInfo.bind(presenter));
            //開分事件另外處理
            toolbar.event.on(ToolBarEventName.ONEXCHANGE, presenter.openCreditExchangePanel.bind(presenter));
        }
    }
    // Notification: 更新彩池資訊
    public updateJackpot(jpValue: number[]): boolean {
        if (!(this.gameManager && this.gameManager.updateJackpot instanceof Function)) return false;
        if (jpValue) {
            this.gameManager.updateJackpot(jpValue);
            return true;
        } else return false;
    }
    // Notification: 更新跑馬燈資訊
    public updateMarquee(marquee: string): boolean {
        if (marquee) {
            if (this.gameManager && this.gameManager.updateMarquee instanceof Function) {
                this.gameManager.updateMarquee(marquee);
                return true;
            }
        } else {
            return false;
        }
    }
    /** 換分面板: 取機台資訊 */
    public updateMachineInfo(info: ExchangeInfo): void {
        if (this.exchangePanel) {
            this.exchangePanel.dataUpdate(info);
        }
    }
    /** 換分面板: 換分更新 */
    public updateCreditExchangeInfo(info: ExchangeInfo): void {
        if (this.exchangePanel) {
            this.exchangePanel.dataUpdate(info);
        }
    }
    /** 換分面板: 洗分更新 */
    public updateBalanceExhchangeInfo(info: ExchangeInfo): void {
        if (this.exchangePanel) {
            this.exchangePanel.dataUpdate(info);
        }
    }
    /** 換分面板: 顯示 */
    public showExchangePanel(): void {
        if (this.exchangePanel) {
            this.exchangePanel.show();
        }
    }
    /** 開啟換分頁面：更新 */
    public updateExchangePanel(info: ExchangeInfo): void {
        if (this.exchangePanel) {
            this.exchangePanel.dataUpdate(info);
        }
    }
    /**
     * GameManager: 初始化
     * @description 取代initCostume
     */
    public initGameManager(...args: any): void {
        // TODO: Game Initialized
    }
    /**
     * GameManager: 取得OnLoadInfo後設定
     * @description 取代setupCostume
     */
    public setupGameManager(): void {
        // OnLoadInfo completed successfully
        // TODO: Game Started
        if (this.gameManager) {
            this.gameManager.rates = this.presenter.rates;
            this.gameManager.lineList = this.presenter.lineList;
            this.gameManager.betCreditList = this.presenter.creditList;
            this.gameManager.defaultBetCredit = this.presenter.defaultBetCredit;
            this.gameManager.setupGame();
        } else {
            console.warn(`gameManager not initialized`);
        }

    }
    public initAlert(): void {
        // TODO: alertPanel Initialized
    }
    // 處理Alert訊息
    public alert(dict_key: string, id?: string): void {
        if (this.alertPanel) {
            this.alertPanel.alert({
                title: 'Alert',
                message: `${dict_key} ${id}`,
                duration: 5.0
            });
        }
    }
    // 建立Presenter
    public createPresenter(): BasePresenter {
        let presenter = new BasePresenter(new BaseModel(), this);
        // 註冊遊戲事件
        presenter.registerRecvEvents();
        // 百分比事件
        presenter.registerHandleProgressEvents();
        return presenter;
    }
    // 開始連線
    public async startPresenter(address?: string): Promise<boolean> {
        const { presenter } = this;
        let event: any = await presenter.connect(address).catch(() => { return false; });
        console.log(`Connect:`, event);

        if (event === false) return false;

        return true;
    }
    // 離開遊戲服務
    public async exit(): Promise<void> {
        const { presenter } = this;
        await presenter.exit();
    }
    /**
     * 處理換分面板事件 與 controller 之間的溝通
     */
    protected handleExchanePanelEvent() {

        const { exchangePanel } = this;
        const { presenter } = this;
        if (exchangePanel) {

            exchangePanel.event.on(ExchangePanelEventName.CREDIT_EXCHANGE, async (data) => {
                await presenter.creditExchange(data.betBase, data.amount);
            });
            exchangePanel.event.on(ExchangePanelEventName.BALANCE_EXCHANGE, async () => {
                await presenter.balanceExchange();
            });
            exchangePanel.event.on(ExchangePanelEventName.CHANGE_RATIO, async (data) => {
                await presenter.fastExchange(data.ratio);
            });
            exchangePanel.event.on(ExchangePanelEventName.LEAVE_GAME, async () => this.exit());
        }
    }
}
