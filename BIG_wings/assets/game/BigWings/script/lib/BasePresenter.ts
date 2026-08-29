import { AIOBridge } from "@casino-mono/share-tools";
import { BaseModel } from "./BaseModel";
import { BaseView } from "./BaseView";
import { ClientRecvAction, RecvMessage } from "./RecvMessage";
import { ClientSendAction } from "./SendMessage";
import { DataModel, ExchangeInfo, IfController, onBalanceExchange, onCreditExchange, onGetMachineDetail } from "@casino-mono/mvc";
/**
 * Presenter interface
 */
export class BasePresenter implements IfController {
    /** 遊戲事件觸發對應事件 */
    protected TriggerConnectionTypes: any[] = [
        ClientRecvAction.Ready,
        ClientRecvAction.UpdateJP,
        ClientRecvAction.LoadInfo,
        ClientRecvAction.GetMachineDetail,
        ClientRecvAction.CreditExchange,
        ClientRecvAction.BalanceExchange
    ];
    /** 遊戲連線處理百分比 */
    protected TriggerConnectionProgression: any[][] = [
        [ClientRecvAction.WSOpen, 91],
        [ClientRecvAction.Ready, 92],
        [ClientRecvAction.Login, 93],
        [ClientRecvAction.TakeMachine, 94],
        [ClientRecvAction.LoadInfo, 95]
    ];
    /** main Model Interface */
    protected model: BaseModel;
    /** @protected main View Interface */
    protected view: BaseView;
    get sender() { return this.model?.connection.sender; }
    get receiver() { return this.model?.connection.receiver; }

    /** 覺得event應該是放在這裡 */
    get event() {
        return this.model?.connection.event;
    }

    get gameCode(): string {
        return this.model.dataModel.gameCode;
    }
    set gameType(value: string) {
        this.model.dataModel.gameType = value;
    }
    get gameType() {
        return this.model.dataModel.gameType;
    }
    set sid(value: string) {
        this.model.dataModel.sid = value;
    }
    get sid() {
        return this.model.dataModel.sid;
    }
    get isJoinGame(): boolean {
        return this.model.data.isJoinGame;
    }
    get rates() {
        return this.model.dataModel.rates;
    }
    get lineList() {
        return this.model.dataModel.lineList;
    }
    get creditList() {
        return this.model.dataModel.creditList;
    }
    get defaultBetCredit() {
        return this.model.dataModel.defaultBetCredit;
    }
    get credit() {
        return this.model.dataModel.credit;
    }
    get bet() {
        return this.model.dataModel.bet;
    }
    public get connected(): boolean {
        return this.model?.data?.connected || false;
    }

    constructor(model: BaseModel, view: BaseView) {
        this.model = model;
        this.view = view;
        this.model.dataModel.sid = "";
        this.model.dataModel.gameType = "";
    }
    addLineBet(): void {
        throw new Error("Method not implemented.");
    }
    minusLineBet(): void {
        throw new Error("Method not implemented.");
    }
    end(): void {
        throw new Error("Method not implemented.");
    }
    double(): void {
        throw new Error("Method not implemented.");
    }
    free(): void {
        throw new Error("Method not implemented.");
    }
    leaveMachine(): void {
        throw new Error("Method not implemented.");
    }
    connect(address?: string): Promise<boolean> {
        return this.model.connect(address);
    }
    /**
     * 連線遊戲
     * @param line 
     */
    setLine(line: number): void {
        this.model.dataModel.line = line;
    }
    /**
     * 連線遊戲
     * @param lineBet 
     */
    setLineBet(lineBet: number): void {
        this.model.dataModel.lineBet = lineBet;
    }
    /**
     * 連線遊戲
     * @param loop 
     */
    addLine(loop?: boolean): void {

        const { line, maxLine } = this.model.dataModel;

        if (line != null) {
            let newLine = line + 1;
            if (maxLine && newLine > maxLine) {
                if (loop) newLine = 1;
                else newLine = maxLine;
            }
            this.setLine(newLine);
        }
    }
    /**
     * 連線遊戲
     * @param loop 
     */
    minusLine(loop: boolean = true) {
        const { line, maxLine } = this.model.dataModel;
        if (line != null) {
            let newLine = line - 1;
            if (maxLine && newLine < 1) {
                if (loop) newLine = maxLine;
                else newLine = 1;
            }
            this.setLine(newLine);
        }
    }

    maxBet(): void {
        const { maxLineBet, lineBet } = this.model.dataModel;
        if (maxLineBet != null && lineBet != null) {
            this.setLineBet(maxLineBet);
        }

        const { maxLine, line } = this.model.dataModel;
        if (maxLine != null && line != null) {
            this.setLine(maxLine);
        }
    }
    // 靜音？
    public mute(): void { }

    public backgroundMusic(): void { }

    public history(): void { }

    public help(): void { }

    public deposit(): void { }

    public gameInfo(): void { }

    // 登入
    async login() {
        const { sender, receiver, model } = this;
        const { gameType, sid, lang } = model.data;
        return new Promise((resolve, reject) => {
            // TODO: Need implement dInfo
            sender.callServer(ClientSendAction.Login as any, {
                action: ClientSendAction.Login,
                gtype: gameType,
                dInfo: model.deviceInfo,
                hallID: "1",
                lang,
                sid,
            });

            receiver.once(ClientRecvAction.Login, (result) => {
                (result.result ? resolve : reject)(result);
            });
        });

    }

    /**
     * 佔機台預設在login會呼叫一次
     * @param sendAgain 重試
     * @returns 
     */
    async takeMachine(sendAgain: boolean = false): Promise<string> {
        const { sender, receiver, model } = this;
        return new Promise((resolve, reject) => {
            const { gameType } = model.dataModel;
            const { TakeMachine } = ClientSendAction;
            if (model.gameCode && model.gameCode != "") resolve(model.gameCode);
            if (sendAgain) sender.callServer(TakeMachine, { action: TakeMachine, gameType });
            receiver.once(ClientRecvAction.TakeMachine as any, (result) => {
                (result.error ? reject(model.gameCode) : resolve(model.gameCode));
            });
        });
    }
    // 取得機台資訊
    async getMachineDetail() {
        return new Promise((resolve, reject) => {
            const { sender, receiver, model } = this;
            const { gameType } = model.dataModel;
            const { GetMachineDetail } = ClientSendAction;
            sender.callServer(GetMachineDetail as any, { action: GetMachineDetail, gameType });
            receiver.once(ClientRecvAction.GetMachineDetail, (result) => {
                (result.result.event && result.result.data.event ? resolve : reject)(result);
            });
        });
    }
    // 取得遊戲資訊
    async onLoadInfo(): Promise<RecvMessage.LoadInfoMessage> {
        return new Promise((resolve, reject) => {
            const { sender, receiver, model } = this;
            const { gameType } = model.dataModel;
            const { LoadInfo } = ClientSendAction;

            // return model.send(ClientSendAction.LoadInfo, { action: ClientSendAction.LoadInfo });
            sender.callServer(LoadInfo as any, { action: LoadInfo });
            receiver.once(ClientRecvAction.LoadInfo, (result) => {
                (result.result.event && result.result.data.event ? resolve : reject)(result);
            });
        });
    }
    /**
     * 開始遊戲
     * @param opts 下注參數betInfo
     * @description { BetCredit: number }
     * @returns RecvMessage.MachjongBeginGameData 碰碰胡遊戲結果
     */
    async beginGame(betInfo?: object | number): Promise<RecvMessage.BeginGameMessage> {
        const { sender, receiver, model } = this;
        const { gameType } = model.dataModel;
        const type = (typeof betInfo);

        if (type == "number") {
            betInfo = { BetCredit: betInfo };
        } else if (Array.isArray(betInfo)) {
            return Promise.reject({ event: false, message: `beginGame: Invalid betInfo value for ${betInfo}` });
        }

        return new Promise((resolve, reject) => {
            sender.callServer(ClientSendAction.BeginGame as any, {
                action: ClientSendAction.BeginGame,
                gameType,
                betInfo,
            });
            receiver.once(ClientRecvAction.BeginGame, (result) => {
                (result.result.event ? resolve : reject)(result);
            });
        });
    }

    async endGame(): Promise<RecvMessage.EndGameMessage> {
        return new Promise((resolve, reject) => {
            const { sender, receiver, model } = this;
            const { EndGame } = ClientSendAction;
            const { sid, wagersID } = model.data;

            sender.callServer(EndGame as any, {
                action: EndGame,
                sid,
                wagersID
            });
            receiver.once(ClientRecvAction.EndGame, (result) => {
                (result.result.event ? resolve : reject)(result);
            });
        });
    }

    async gamble(): Promise<RecvMessage.GambleMessage> {
        return new Promise((resolve, reject) => {
            const { sender, receiver, model } = this;
            const { Gamble } = ClientSendAction;
            const { sid, wagersID, gameType, gameCode } = model.data;

            sender.callServer(Gamble as any, {
                action: Gamble,
                sid,
                wagersID,
                gameType,
                gameCode

            });
            receiver.once(ClientRecvAction.Gamble, (result) => {
                (result.result.event ? resolve : reject)(result);
            });
        });
    }


    // 洗分
    async creditExchange(betBase: string, credit: number): Promise<ExchangeInfo> {
        const { sender, receiver, model } = this;
        const { gameType } = model.data;

        await new Promise((resolve, reject) => {
            sender.callServer(ClientSendAction.CreditExchange as any, {
                action: ClientSendAction.CreditExchange,
                rate: betBase,
                credit
            });
            receiver.once(ClientRecvAction.CreditExchange, (result) => {
                (result.result.event ? resolve : reject)(result);
            });
        });
        return this.model.getExchangeInfo();
    }

    saveUserAutoExchange(data: { autoEx: boolean, autoValue: number, autoRate: string, lastInput: number[]; }, exchangeRecord?: any): Promise<{ event: boolean, error: string; }> {
        // TODO:自動換分
        const { sender, receiver, model } = this;
        const { gameType } = model.dataModel;
        return new Promise((resolve, reject) => {
            sender.callServer(ClientSendAction.SaveUserAutoExchange, {
                action: ClientSendAction.SaveUserAutoExchange,
                gameType,
                data,
                exchangeRecord
            });
            receiver.once(ClientRecvAction.SaveUserAutoExchange, (result) => {
                (result.event ? resolve : reject)(result);
            });
        });
    }
    setAnalysis(key: string, data: any) {
        const { model } = this;
        const { analysisInfo } = model;

    }
    updateUserAnalysis(): Promise<any> {
        // TODO:系統記錄
        const { sender, receiver, model } = this;
        const { gameType } = model.dataModel;
        return new Promise((resolve, reject) => {
            sender.callServer(ClientSendAction.UpdateUserAnalysis, {
                action: ClientSendAction.UpdateUserAnalysis,
                gameType,
                data: model.analysisInfo.report()
            });
            receiver.once(ClientRecvAction.SaveUserAutoExchange, (result) => {
                (result.event ? resolve : reject)(result);
            });
        });
    }
    // 綁定事件
    protected handelConneciontEvent(evt: any): void {
        const { view, model } = this;
        const { action, event } = evt;
        const { credit, balance, betBase, base, washInfo } = model.dataModel;

        // if (this.isServerError(evt)) return;

        switch (action) {
            case ClientRecvAction.Ready:
                AIOBridge.onLoaded();
                break;
            case ClientRecvAction.UpdateJP:
                view.updateJackpot(model.dataModel.jpValue);
                break;
            case ClientRecvAction.LoadInfo:
                view.setupGameManager();
                break;
            case ClientRecvAction.GetMachineDetail:
                view.updateMachineInfo({ credit, balance, betBase, base });
                break;
            case ClientRecvAction.CreditExchange:
                view.updateCreditExchangeInfo({ credit, balance, betBase, base });
                break;
            case ClientRecvAction.BalanceExchange:
                view.updateBalanceExhchangeInfo({ credit, balance, betBase, base, washInfo });
                break;
        }
    }
    // 註冊 server websocket 接收的事件
    public registerRecvEvents(): void {
        const { event } = this;
        this.TriggerConnectionTypes.forEach((action) => {
            event.on(action, this.handelConneciontEvent.bind(this));
        });
    }
    // 連線觸發百分比事件
    public registerHandleProgressEvents(): void {
        const { view } = this;
        const { event } = this;
        if (view) {
            this.TriggerConnectionProgression.forEach(([action, value]) => {
                event.once(action, view.updateProgress.bind(this, value));
            });
        }
    }
    // 開啟換分頁面
    public async openCreditExchangePanel() {
        console.log('[Presenter::openCreditExchangePanel]');
        await this.getMachineDetail();
        const { view, model } = this;
        const { credit, balance, betBase, base } = model.data;
        if (view) {
            view.showExchangePanel();
            view.updateExchangePanel({ credit, balance, betBase, base });
        }
    }

    protected isServerError(evt: any): boolean {
        return !evt.event;
    }

    // ExchangePanel 
    public async balanceExchange(): Promise<ExchangeInfo> {
        const { model } = this;
        const { gameType } = model.dataModel;
        await model.send(ClientSendAction.BalanceExchange, {
            action: ClientSendAction.BalanceExchange
        } as any);
        return this.model.getExchangeInfo();
    }
    // Exit
    public async exit(): Promise<void> {
        const { model, view } = this;
        const { gameType } = model.dataModel;
        const data = { action: ClientSendAction.Exit, gameType };
        await model.send(ClientSendAction.Exit as any, data);
    }
    public async fastExchange(betBase: string) {

        //@TODO async function reject case handle, view層相關事件解耦

        if (this.model.dataModel.credit && this.model.dataModel.betBase) {

            const onBalanceExchangeData = <RecvMessage.BalanceExchangeData>(await this.balanceExchange());

            const onGetMachineDetail = <onGetMachineDetail>(await this.getMachineDetail());


            if (this.model.dataModel.washInfo) {

                const amount = Math.min(this.model.dataModel.balance, this.model.dataModel.washInfo.amount);

                const new_credit = Math.floor(amount * DataModel.BaseToRatio(betBase));

                const onCreditExchangeData = <onCreditExchange>(await this.creditExchange(betBase, new_credit));

            }

        }

        return this.model.getExchangeInfo();
    }

}