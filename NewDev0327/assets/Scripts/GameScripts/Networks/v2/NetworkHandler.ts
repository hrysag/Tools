import { ConfigType, Environment, IBaseNetAgent, IPlayerInfoBase, MessageHeadCode } from '../../../NetAgent/v2/NetAgentBase/IBaseNetAgent';
import { NetEvent, NetListener } from '../../../NetAgent/v2/Tool/NetObserver';
import { ExhibitionNetAgent } from '../../../NetAgent/v2/ExhibitionNetAgent';
import { XinStarNetAgent } from '../../../NetAgent/v2/XinStarNetAgent';
import { INetworkHandler } from './INetworkHandler';
import { Debug, Utility } from '../../../Utils/Core';
import { CCommandStatus } from '../../../NetAgent/CConnectManager/CConnectDefine';
import { ErrorHandler } from '../../../ErrorHandler/ErrorHandler';
import { FanTaAgent } from '../../../NetAgent/v2/FanTaAgent';
import { ErrorCode } from '../../../ErrorHandler/ErrorHandleDefine';
import { BetData } from './BetData';

export enum NetworkEvent {
    Login = 'Login', // 登入
    Bet = 'Bet', // 下注
    SpinFail = 'SpinFail', // 下注失敗
    OtherAction = 'OtherAction', // 40 額外動作
    OtherActionWithBet = 'OtherActionWithBet', // 41 額外押注
}

export enum FeatureType {
    BuyBonus,
    ExtraBet
}

export class NetworkHandler implements INetworkHandler {
    private static _instance: NetworkHandler = null;
    private callbacks: any = {};
    private gameID: string = ''; // 遊戲編號 Game1001, Game002 等
    private isInit: boolean = false;
    private localNetworkTimeoutNumber: number = 600;
    private timestampInSeconds: number = 0;
    private isExhibition: boolean = true;
    private timeoutTimerFlag: boolean = true; // 是否啟用閒置斷線計時器
    private agentInstance: IBaseNetAgent = null;

    /**
     * 獲取實例
     * @returns NetworkHandler
     */
    public static get instance(): NetworkHandler {
        if (this._instance === null) {
            this._instance = new NetworkHandler();

        }
        return this._instance;
    }

    /**
     * 是否為 demo 模式
     * @returns true or false
     */
    public get demo(): boolean {
        return this.getIsDemo();
    }

    /**
     * 是否為登入狀態
     * @returns true or false
     */
    public get isLogin(): boolean {
        return this.getIsLogin();
    }

    /**
     * 獲取平台
     * @returns 平台編號
     */
    public get platform(): number {
        return this.getPlatform();
    }

    /**
    * 建構
    */
    constructor() {
        let keys = Object.keys(NetworkEvent);
        for (let item of keys) {
            this.callbacks[item] = [];
        }
    }

    public getIsDemo(): boolean {
        return this.agentInstance ? this.agentInstance.getIsDemo() : false;
    }

    public getIsLogin(): boolean {
        return this.agentInstance ? this.agentInstance.getIsLogin() : false;
    }

    public getLanguage(): string {
        return this.agentInstance ? this.agentInstance.getLanguage() : "en";
    }

    public getPlatform(): number {
        return this.agentInstance ? this.agentInstance.getPlatform() : 0;
    }

    public getPlayerInfo(): IPlayerInfoBase {
        return this.agentInstance ? this.agentInstance.getPlayerInfo() : null;
    }

    public getBackURL(): string {
        return "";
    }

    public isFeatureEnabled(feature: FeatureType): boolean {
        return true; // 預設全部功能開啟，之後可依需求改為向 agentInstance 查詢
    }

    public setLanguage(lang: string): void {
        this.agentInstance.setLanguage(lang);
    }


    /**
     * 初始化
     * @param gameID 遊戲編號
     * @param timeoutSecond idle時間上限(單位秒)
     * @param isExhibition 是否為展示模式(展示模式會使用直連總部取牌館連線)
     * @param agentType NetAgent 類型
     */
    public init(gameID: string, timeoutSecond: number = 600, isExhibition: boolean, agentType: number): void {
        if (this.isInit) {
            return;
        }
        this.gameID = gameID;
        this.isExhibition = isExhibition;
        Debug.Log("NetworkHandler init");
        this.isInit = true;
        this.localNetworkTimeoutNumber = timeoutSecond;
        this.setupAgent(agentType);
        this.updateTimeStamp();

        setInterval(() => {
            this.checkIsTimeout()
        }, 1000);

        window.addEventListener('offline', () => {
            if (!this.isExhibition && !Utility.isDev()) {
                this.agentInstance.disconnect("網路斷線");
            }
        });
    }

    /**
     * 實例化 NetAgent
     * @param agentType NetAgent 類型
     */
    private setupAgent(agentType: number): void {
        switch (agentType) {
            case 0:
                this.agentInstance = new XinStarNetAgent(this.gameID);
                break;
            case 1:
                this.agentInstance = new ExhibitionNetAgent(this.gameID);
                break;
            case 2:
                this.agentInstance = new FanTaAgent(this.gameID);
                break;
            default:
                console.error(`未知的配置類型: ${agentType}`);
                this.agentInstance = new ExhibitionNetAgent(this.gameID);
                break;
        }
    }

    /**
     * NetAgent 更新
     * @param dt NetAgent 的 Update 參數，但實際傳入並未使用
     */
    public update(dt: number): void {
        this.agentInstance.update(dt);
    }

    public parserBaseConfig(url: string): void {
        this.agentInstance.parserBaseConfig(url);
    }

    public askWebConfig(configType: ConfigType): Promise<void> {
        return this.agentInstance.askWebConfig(configType)
    }

    public getHistoryURL(): string {
        if (this.agentInstance) {
            return this.agentInstance.getHistoryURL();
        } else {
            console.error("agentInstance is null");
            return '';
        }
    }

    public getPayTableURL(): string {
        if (this.agentInstance) {
            return this.agentInstance.getPayTableURL();
        } else {
            console.error("agentInstance is null");
            return '';
        }
    }

    public getRuleURL(): string {
        if (this.agentInstance) {
            return this.agentInstance.getRuleURL();
        } else {
            console.error("agentInstance is null");
            return '';
        }
    }

    /**
     * 連線 Server
     */
    public connectServer(): void {
        //NetAgent Observer Listener
        this.agentInstance.registerObserver(new NetListener("Game", this.onDisconnect.bind(this)));
        this.agentInstance.registerCustomCommand(this.onCustomCommandReceived.bind(this));
        if (!this.getIsLogin()) {
            //環境
            let environment = Environment.Release;
            if (Utility.isTestEnvironment()) {
                // 如果是測試環境 使用Environment.Test
                environment = Environment.Test;
            }
            //版本號
            const Version = "1";

            this.agentInstance.login(environment, Version)
                .then((isLogin: boolean) => {
                    Debug.Log(`isLogin = ${this.getIsLogin()}`);
                    if (isLogin) {
                        this.dispatchEvent(NetworkEvent.Login, true);
                    }
                    else {
                        this.dispatchEvent(NetworkEvent.Login, false);
                    }
                })
                .catch((reason: any) => {
                    if (typeof reason === 'number') {
                        ErrorHandler.Instance.TriggerError(Number(reason));
                    }
                    else {
                        console.error(`登入失敗`);
                        console.error(reason);
                        ErrorHandler.Instance.TriggerError(ErrorCode.Client_LoginFail);
                    }
                });
        }
    }

    /**
    * 新增監聽
    * @param type Network 事件
    * @param callback 回呼函數
    */
    public addEventListener(type: NetworkEvent, callback: Function): void {
        if (!this.callbacks[type]) {
            this.callbacks[type] = [];
        }
        this.callbacks[type].push(callback);
    }

    /**
     * 移除監聽
     * @param type Network 事件
     * @param callback 回呼函式
     */
    public removeEventListener(type: NetworkEvent, callback: Function): void {
        const index = this.callbacks[type].indexOf(callback);
        if (index > -1) {
            this.callbacks[type].splice(index, 1);
        }
    }

    /**
    * 發送 Network 事件
    * @param type Network 事件
    * @param args 參數
    */
    public dispatchEvent(type: NetworkEvent, ...args: any[]): void {
        let eventCallbacks: Function[] = this.callbacks[type];
        for (let callback of eventCallbacks) {
            callback?.(...args);
        }
    }

    /**
     * 送出事件 to Server
     * 需區分模式：展示模式(直連總部取牌館連線) vs 正式模式(連線遊戲伺服器)
     * @param event Network 事件
     * @param args 參數
    */
    public send(event: NetworkEvent, ...args: any[]): void {
        switch (event) {
            case NetworkEvent.Bet:
                let gameNumber: number = args[0];
                let bet: number = args[1];
                let balance: number = args[2];
                let additionalPurchaseType: number = args[3];
                let playerToken = args[4];
                if (!playerToken) {
                    playerToken = "試玩";
                    console.error("sendBetFetch 需要 playerToken 參數，請確認是否有傳入");
                }
                let otherParameter: number = args[5] || 0;

                this.sendBet(gameNumber, bet, balance, additionalPurchaseType, playerToken, otherParameter);
                break;
            default:
                console.error(`send error event ${event}`);
                break;

        }
    }
    public sendBet(gameNumber: number, totalBet: number, balance: number, additionalPurchaseType: number = 0, playerToken: string, otherParameter: number = 0): void {
        this.updateTimeStamp();
        this.agentInstance.spin(totalBet, additionalPurchaseType, otherParameter, gameNumber, balance, playerToken)
            .then((betData: BetData) => {
                if (betData.slotData !== undefined) {
                    this.dispatchEvent(NetworkEvent.Bet, betData);
                } else {
                    this.dispatchEvent(NetworkEvent.SpinFail, betData.spinId);
                }
            });
    }

    /**
     * 傳送<額外動作> 40 的自定義指令
     */
    public sendOtherAction(gameNumber: number, playerToken: string, action: number, content: number[] = []): void {
        this.updateTimeStamp();
        this.agentInstance.sendOtherAction(gameNumber, playerToken, action, content);
    }
    /**
     * 傳送<額外押注> 41 的自定義指令
     */
    public sendOtherActionWithBet(gameNumber: number, bet: number, balance: number, playerToken: string, action: number, content: number[] = []): void {
        this.updateTimeStamp();
        this.agentInstance.sendOtherActionWithBet(gameNumber, bet, balance, playerToken, action, content);
    }

    /**
    * 接收中控客製化消息
    * @param ack ByteReaderHelper
    */
    private onCustomCommandReceived(command: MessageHeadCode, ...args: any[]): void {
        const action = args[0];

        switch (command) {
            case MessageHeadCode.OtherAction:
                const base64 = args[1];
                this.dispatchEvent(NetworkEvent.OtherAction, action, base64);
                break;
            case MessageHeadCode.OtherActionWithBet:
                // OtherActionWithBet 額外押注
                const betData: BetData = args[1];
                this.dispatchEvent(NetworkEvent.OtherActionWithBet, action, betData);
                break;
            default:
                console.error(`未知的CustomCommand command : ${command}`);
                break;
        }
    }

    /**
     * 更新時戳
     */
    private updateTimeStamp(): void {
        this.timestampInSeconds = Utility.getCurrentTimeStampInSeconds();
    }

    /**
     * 檢查是否 Timeout
     */
    private checkIsTimeout(): void {
        if (this.getIsLogin() && this.timeoutTimerFlag) {
            let stamp = Utility.getCurrentTimeStampInSeconds();
            let idleTime = stamp - this.timestampInSeconds;
            if (idleTime > this.localNetworkTimeoutNumber) {
                this.agentInstance.disconnect("閒置斷線");
            }
        }
    }

    /**
     * 設定閒置斷線計時器的啟用狀態
     * @param flag true 啟用計時器，false 停用計時器
     */
    public setTimeoutTimerFlag(flag: boolean) {
        if (flag) {
            this.updateTimeStamp(); // 啟用計時器時，更新時間戳
        }
        this.timeoutTimerFlag = flag;
    }

    /**
     * 手動斷線
     */
    public disconnect(): void {
        this.agentInstance.disconnect("閒置斷線");
    }

    /**
    * 斷線時提示錯誤訊息
    * @param event Network 事件
    * @param value 錯誤資訊(字串 or 數值)
    */
    private onDisconnect(event: NetEvent, value: any): void {
        if (typeof (value) === 'string') {
            let reason: string = value;
            switch (reason) {
                case "網路斷線":
                    console.error(`網路斷線`);
                    ErrorHandler.Instance.TriggerError(ErrorCode.ServerKick);
                    break;
                case "閒置斷線":
                    ErrorHandler.Instance.TriggerError(ErrorCode.Client_IdleTimeout);
                    break;
                case `${CCommandStatus.Failure}`:
                    console.error(`未知的斷線原因 event : ${event} value : ${value}`);
                    ErrorHandler.Instance.TriggerError(ErrorCode.Client_LoginFail);
                    break;
                default:
                    console.error(`未知的斷線原因: ${reason}`);

                    if (event === NetEvent.Disconnected || event === NetEvent.ServiceKick) {
                        //檢查是否為斷線的 event
                        console.error(`未知的斷線原因 event : ${event} value : ${value}`);
                        if (isNaN(Number(value))) {
                            ErrorHandler.Instance.TriggerError(Number(ErrorCode.ServerKick));
                        }
                        else {
                            ErrorHandler.Instance.TriggerError(Number(value));
                        }
                    }
                    else {
                        //目前缺少該處的事件處理
                        console.error(`未知的斷線原因 event : ${event} value : ${value}`);
                        if (isNaN(Number(value))) {
                            ErrorHandler.Instance.TriggerError(ErrorCode.Client_UNKNOWN);
                            console.error(`未知的斷線原因 event : ${event} value : ${value}`);
                        }
                        else {
                            ErrorHandler.Instance.TriggerError(Number(value));
                        }

                    }

                    break;
            }
        }
        else if (typeof (value) === "number") {
            if (event === NetEvent.Disconnected || event === NetEvent.ServiceKick) {
                ErrorHandler.Instance.TriggerError(value);
            }
            else {
                //目前缺少該處的事件處理
                console.error(`未知的斷線原因 number : ${event}`);
                ErrorHandler.Instance.TriggerError(value);
            }
        }
    }

    /**
     * 取牌館Login功能，可取得進入時的盤面(有的遊戲會需要)
     * 可以放到 NetAgent中
     * @param playerToken 辨別身分的Token
     * @param gameNumber 遊戲號碼(例如 12099)
     */
    public sendGameLoginFetch(playerToken: string, gameNumber: number): Promise<string> {
        return this.agentInstance.sendGameLoginFetch(playerToken, gameNumber);
    }
}


