
import { BaseView } from "../lib/BaseView";
import { Component, _decorator, Node, CCBoolean, CCString } from "cc";
import { Application } from "../Applicaiton";
import { BasePresenter } from "../lib/BasePresenter";
import { BaseModel } from "../lib/BaseModel";
import { BigWingsRoller } from "../wheel/BigWingsRoller";
import { IfAlertPanel, IfExchangePanel, CostumeEventName } from "@casino-mono/mvc";
import { AlertPanel } from "./AlertPanel";
import { CocosExchangePanel } from "./ExchangePanel";
import { GameManager } from "./GameManager";
import { Roller } from "../wheel/Roller";
import { CommandEventName } from "@casino-mono/mvc";
import { BigWingsPresenter } from "./BigWingsPresenter";

const { ccclass, property, menu } = _decorator;

@ccclass('BigWingsView')
@menu('BigWings/BigWingsView')
export class BigWingsView extends BaseView {

    @property({ type: AlertPanel, tooltip: '警告面板' })
    public alertPanel: AlertPanel;

    @property({ tooltip: '使用換分面板' })
    public exchangeOption: boolean = true;

    @property({
        type: CocosExchangePanel, tooltip: '換分面板', visible: function () {
            return this.exchangeOption;
        }
    })
    public exchangePanel: CocosExchangePanel;

    @property({ type: Component, tooltip: '遊戲邏輯管理物件' })
    public gameManager: GameManager;

    @property({ type: Roller, tooltip: '遊戲滾輪' })
    public roller: BigWingsRoller;

    @property({ type: CCBoolean, tooltip: '使用自訂資料' })
    public loginOption: boolean = true;

    @property({ type: CCString, tooltip: '自訂連線位址', displayName: 'wsUrl', visible: function () { return this.loginOption; } })
    public wsUrl: string = `wss://fx8ec8.casinovir999.net/fxCasino/fxLB?gameType=5269`;

    @property({ type: CCString, tooltip: '測試:登入Session', displayName: '🔸 Session', visible: function () { return this.loginOption; } })
    public session: string = 'bb8c8b08da49b4d86120a9913ba12c89c051ca280c';

    @property({ type: CCString, tooltip: '測試:遊戲編號', displayName: '🔸 GameType', visible: function () { return this.loginOption; } })
    public gameType: string = '5269';

    protected presenter: BigWingsPresenter;

    constructor() {
        super();
        // console.log(`Application:`, Application.getInstance());
        this.presenter = this.createPresenter();
    }
    protected onLoad(): void {
        Application.getInstance().onLoad();
        // 初始化GameManager
        this.initGameManager('gameManager', GameManager);
        console.log(`initGameManager: ${this.gameManager}`);
        this.gameManager.node.on(CostumeEventName.END, () => {
            this.presenter.endGame();
        });
    }
    public start() {
        // console.log(this.rollor, this.rollor.getChildByName('roller'));
        // console.log(this.rollor.getChildByName('roller').getComponent(BigWingsRoller));
        super.start();
        console.log(`loginOption`, this.loginOption);

        if (this.loginOption) {
            if (this.session) this.presenter.sid = this.session;
            if (this.gameType) this.presenter.gameType = this.gameType;
            this.startPresenter(this.wsUrl);
        } else {
            this.startPresenter();
        }
    }
    // 建立MVP - Presenter
    public createPresenter(): BigWingsPresenter {
        let presenter = new BigWingsPresenter(new BaseModel(), this);
        // 註冊遊戲事件
        presenter.registerRecvEvents();
        // 百分比事件
        presenter.registerHandleProgressEvents();
        return presenter;
    }
    // 進入遊戲服務
    public async startPresenter(address?: string): Promise<boolean> {
        const { presenter } = this;

        if (await super.startPresenter(address) === false) return false;

        let loginResult = await presenter.login().catch(e => e.error);

        console.log(`login:`, loginResult);
        // 這邊是等待 接收到 takeMachine
        console.log(`gameCode:`, await presenter.takeMachine());

        let loadInfo = await presenter.onLoadInfo();
        console.log(`onLoadInfo:`, loadInfo);

        //test
        console.log(`getMechineDetail:`, await presenter.getMachineDetail());
        console.log(`creditExchange:`, await presenter.creditExchange('1:1', 10000));
        // console.log(`onBeginGame:`, await presenter.beginGame({ "BetCredit": 6, "HitFree": true }));
        // console.log(`gamble`, await presenter.gamble());
        // console.log(`endGame:`, await presenter.endGame());

        // console.log(`balanceExchange:`, await presenter.balanceExchange());

        return true;
    }
    // 離開遊戲服務
    public async exit(): Promise<void> {
        const { presenter } = this;

        // await presenter.leaveGame();

        await presenter.balanceExchange();

        await presenter.exit();
    }
    // 初始化 - 如果沒有GameManager
    public initGameManager(childeName: string, CConstructor: any): void {
        // TODO: Game Initialized
        if (!this.gameManager) {
            this.gameManager = this.node.getChildByName(childeName).getComponent(CConstructor);
        }
    }

    protected configCommandEvent(): void {
        super.configCommandEvent();
        const command = this.gameManager?.command;

        if (command) {
            const { presenter } = this;
            command.event.on(CommandEventName.BUY_FREEGAME, async (betInfo: any) => {
                let data = await presenter.beginGame(betInfo);
                this.gameManager.begin(data.result.data);
            });
        }
    }
}