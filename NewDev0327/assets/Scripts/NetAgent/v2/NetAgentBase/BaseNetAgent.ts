import { ConfigType, Environment, HistoryURL, IBaseNetAgent, IPlayerInfoBase, MessageHeadCode, PayTableURL, RuleURL } from "./IBaseNetAgent";
import { AdditionalPurchaseType, CCommand } from "../../CConnectManager/CConnectDefine";
import { NetListener, NetObserver } from "../Tool/NetObserver";
import { BetData } from "../../../GameScripts/Networks/v2/BetData";
import CConnectManager from "../../CConnectManager/CConnectManager";

export class BaseNetAgent implements IBaseNetAgent {
    //process array 處理結果
    protected _processCommandArray: Array<{ command: CCommand, process: any, timeoutId: any }> = [];
    //連線管理元件
    protected _cConnectManager: CConnectManager = null;
    //觀察者
    protected _observer: NetObserver = new NetObserver();

    protected gameID: string = '';
    protected gameCode: string = '';
    protected _isLogin: boolean = false;
    protected _demo: boolean = false;
    protected _platform: number = 0;
    protected _language: string = "";

    protected handleCustomCommand: (command: MessageHeadCode, ...args: any[]) => void = null;

    public getIsDemo(): boolean {
        return this._demo;
    }

    public getIsLogin(): boolean {
        return this._isLogin;
    }

    public getLanguage(): string {
        return this._language === "" ? "tw" : this._language;
    }

    public getPlatform(): number {
        return this._platform;
    }

    public getPlayerInfo(): IPlayerInfoBase {
        return;
    }

    public setLanguage(lang: string): void {
        this._language = lang;
    }

    public constructor(gameID: string) {
        this.gameID = gameID;
    }

    public update(dt: number) {
        this._cConnectManager?.Update();
    }

    public getPayTableURL(): string {
        let timestamp = new Date().getTime();
        let payTableURL = PayTableURL;
        payTableURL = payTableURL.replace("[gameID]", this.gameID.toLowerCase());
        payTableURL = payTableURL.replace("[lang]", this.getLanguage());
        payTableURL += `&thousandplacetype=${this._playerInfo.webConfig?.PlatformSetting.ThousandPlace}`;
        payTableURL += `&timestamp=${timestamp}`;
        return payTableURL;
    }

    public getRuleURL(): string {
        let timestamp = new Date().getTime();
        let ruleURL = RuleURL;
        ruleURL = ruleURL.replace("[gameID]", this.gameID.toLowerCase());
        ruleURL = ruleURL.replace("[lang]", this.getLanguage());
        ruleURL += `&thousandplacetype=${this._playerInfo.webConfig?.PlatformSetting.ThousandPlace}`;
        ruleURL += `&timestamp=${timestamp}`;

        return ruleURL;
    }

    public getHistoryURL(): string {
        let historyURL = HistoryURL;
        let timestamp = new Date().getTime();
        historyURL = historyURL.replace("[lang]", this.getLanguage());
        historyURL += `&timestamp=${timestamp}`;

        return historyURL;
    }

    /**
     * 解析網址參數
     * @param url game Url
     * @returns true if parsing is successful, false otherwise
     */
    public parserBaseConfig(url: string): void { }
    /**
     * 請求webConfigUrl
     * @returns 
     */
    public async askWebConfig(configType: ConfigType): Promise<void> {
        return Promise.resolve();
    }

    /**
     * 註冊觀察者
     * @param listener NetListener
     */
    public registerObserver(listener: NetListener): void {
        this._observer.Register(listener);
    }
    /**
     * 移除觀察者
     * @param name Listener name
     */
    public removeObserver(name: string): void {
        this._observer.Remove(name);
    }

    /**
     * 註冊自訂義指令
     * @param handleCustomCommand 自訂義指令回傳函數
     */
    public registerCustomCommand(handleCustomCommand: (command: MessageHeadCode, args: any[]) => void): void {
        this.handleCustomCommand = handleCustomCommand;
    }

    /**
    * 登入遊戲
    * @param env AgentDefine.Environment
    * @param href Link Url
    * @returns 
    */
    public async login(env: Environment, version: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    /**
     * 請求 Spin
     * @param bet 押注
     * @returns @SpinAck
     */
    public async spin(bet: number, additionalPurchaseType: number | AdditionalPurchaseType = AdditionalPurchaseType.None, otherParameter: number = 0): Promise<BetData> {
        return Promise.resolve(new BetData());
    }
    /**
     * 購買特色
     * @param bet  
     * @param additionalPurchaseType 
     * @returns 
     */
    public buyFeature(bet: number, additionalPurchaseType: AdditionalPurchaseType): Promise<BetData> {
        return this.spin(bet, additionalPurchaseType);
    }

    /**
     * 傳送<額外動作> 40 的自定義指令
     * @param gameNumber 取牌館使用 遊戲編號
     * @param playerToken 取牌館使用 玩家令牌
     * @param action
     * @param content 
     */
    public sendOtherAction(gameNumber: number, playerToken: string, action: number, content: number[]): void { }
    /**
     * 傳送<額外押注> 41 的自定義指令
     * @param gameNumber 取牌館使用 遊戲編號
     * @param bet
     * @param balance 取牌館使用 玩家餘額
     * @param playerToken 取牌館使用 玩家令牌
     * @param action 
     * @param content 
     */
    public sendOtherActionWithBet(gameNumber: number, bet: number, balance: number, playerToken: string, action: number, content: number[]): void { }

    /**
     * 斷線處理
     * @param msg 斷線訊息
     * @returns 
     */
    public disconnect(msg: string) { }

    /**
     * 取得連線狀態
     * @returns 連線狀態，若無法取得則回傳 -1
     */
    public getConnectManagerState(): number {
        return this._cConnectManager?.getState() || -1;
    }
    /**
     * 轉換ConnectManager 為上線狀態
     */
    public transConnectManagerToOnline(): void {
        this._cConnectManager?.Online();
    }

    /**
     * 測試站專屬功能，發送遊戲登入請求
     * @param playerToken 
     * @param gameNumber 
     */
    public sendGameLoginFetch(playerToken: string, gameNumber: number): Promise<string> {
        return Promise.resolve("");
    }
}


