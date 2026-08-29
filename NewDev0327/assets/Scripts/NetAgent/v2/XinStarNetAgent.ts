import { askHistoryBodyFormat, AskHistoryFail, AskHistoryRetryCount, HistoryErrorCode, historyHeightFormat, HistoryHeightMax, ICommonSetting, IGameConfig, IGameSetting, IHistory, IPlatformSetting, IPlayerInfo, LoginReDispatcherConnectFail, PARSER_URL_FAIL, REQUEST_TIMEOUT, REQUEST_TIMEOUT_ERROR_CODE, SpinReDispatcherConnectFail } from "./XinStar/AgentDefine";
import { MainServiceID, MaxRetryCount, RetryIntervalSeconds } from "../CConnectManager/CConncetConfig";
import { AdditionalPurchaseType, CCommand, CCommandStatus } from "../CConnectManager/CConnectDefine";
import { ConfigType, Environment, MessageHeadCode } from "./NetAgentBase/IBaseNetAgent";
import { ByteReaderHelper, ByteWriterHelper } from "../CConnectManager/ByteArray";
import { GameType, NetAgentVersion } from "./XinStar/NetAgentDefine";
import { HistoryItemInfo } from "../../GameScripts/Networks/v2/HistoryItemInfo";
import { ErrorHandler } from "../../ErrorHandler/ErrorHandler";
import { BaseNetAgent } from "./NetAgentBase/BaseNetAgent";
import { CConnectLog } from "../CConnectManager/CConnectLog";
import { PlayerInfo } from "../../GameScripts/Networks/v2/PlayerInfo";
import { ErrorCode } from "../../ErrorHandler/ErrorHandleDefine";
import { NetEvent } from "./Tool/NetObserver";
import { Utility } from "../../Utils/Core";
import { BetData } from "../../GameScripts/Networks/v2/BetData";
import CConnectManager from "../CConnectManager/CConnectManager";
import GameMachineInfo from "./XinStar/GameMachineInfo";
import SpinAck from "./XinStar/SpinAck";
import * as cc from "cc"

export class XinStarNetAgent extends BaseNetAgent {
    //PlayerInfo
    protected _playerInfo: IPlayerInfo = {
        game_code: "",
        platform: "",
        name: "",
        serviceId: "",
        awKey: "",
        webConfigUrl: "",
        ParserSuccess: false
    };

    private gameType: GameType = GameType.Slot;

    //歷程
    private _history: IHistory[] = [];

    public constructor(gameID: string) {
        console.log(`[NetAgent] Version: ${NetAgentVersion}`);
        super(gameID);
    }

    public override getPlayerInfo(): IPlayerInfo {
        return this._playerInfo;
    }

    public override getHistoryURL(): string {
        let historyURL = super.getHistoryURL();
        let recordJsonString = this.changeIHistoryToJson();
        historyURL = historyURL.replace("[json]", recordJsonString);

        return historyURL;
    }

    /**
     * 解析網址參數
     * @param url game Url
     * @returns true if parsing is successful, false otherwise
     */
    public override parserBaseConfig(url: string): void {
        try {
            this._playerInfo.webConfigUrl = this.getURLParameter(url, "webconfigurl");
            this._playerInfo.serviceId = this.getURLParameter(url, "serviceid");
            this._playerInfo.game_code = this.getURLParameter(url, "game_code");
            this._playerInfo.platform = this.getURLParameter(url, "platform");
            this._playerInfo.awKey = this.getURLParameter(url, "awkey");
            this._playerInfo.ParserSuccess = true;

            this._demo = this.getURLParameter(url, "demo") === "True";
            let lang = this.getURLParameter(url, "lang");
            this._language = lang === "" ? "tw" : lang;
            this.gameCode = this._playerInfo.game_code;
            this._platform = parseInt(this._playerInfo.platform);
        }
        catch (error) {
            cc.error("LegacyParserBaseConfig Fail", error);
        }
    }
    //取得網址參數
    private getURLParameter(Url: string, searchElement: string): string {
        let firstParameters = Url.split(("?"));
        let parameters = firstParameters.pop().split("&");
        for (let index = 0; index < parameters.length; index++) {
            const pair = parameters[index].split("=");

            if (pair.shift() === searchElement) {
                return pair.shift();
            }
        }
        console.error(`GetURLParameter ${Url} not ${searchElement}`);
        return "";
    }

    /**
     * 請求webConfigUrl
     * @returns 
     */
    public override async askWebConfig(configType: ConfigType): Promise<void> {
        try {
            const askUrl = this._playerInfo.webConfigUrl;
            const connectSetting: any = await this.get(
                `${askUrl}?platform=${this._playerInfo.platform}&gamecode=${this._playerInfo.game_code}&rangetag=${configType}`);
            if (connectSetting == null) {
                throw Error(`Get webConfigUrl ${this._playerInfo.webConfigUrl} Fail`);
            }
            if (!this.parserWebConfig(connectSetting)) {
                throw Error(`parser webConfigUrl ${connectSetting} Fail`);
            }
        }
        catch (error) {
            console.error("AskWebConfig Fail", error);
            throw error;
        }
    }
    /**
     * Parser WebConfig data
     * @param connectSetting 
     * @returns 
     */
    private parserWebConfig(connectSetting: string): boolean {
        const response = JSON.parse(connectSetting) as IGameConfig;

        if (!response || !(response.Result == 0)) {
            return false;
        }
        response.CommonSetting = JSON.parse(atob(response.CommonSetting as unknown as string)) as ICommonSetting;
        response.GameSetting = JSON.parse(atob(response.GameSetting as unknown as string)) as IGameSetting;
        response.PlatformSetting = JSON.parse(atob(response.PlatformSetting as unknown as string)) as IPlatformSetting;
        this._playerInfo.webConfig = response;
        return true;
    }

    /**
    * 登入遊戲
    * @param env AgentDefine.Environment
    * @param href Link Url
    * @returns 
    */
    public override async login(env: Environment, version: string, gameType: GameType = GameType.Slot): Promise<boolean> {
        return new Promise<boolean>(async (resolve, reject) => {
            try {
                this._isLogin = true;
                this.gameType = gameType;
                if (this._cConnectManager == null) {
                    if (await this.initCConnectManager(env) == false) {
                        resolve(false);
                        return;
                    }
                }
                const DeviceCollection =
                {
                    BrowserType: cc.sys.browserType,
                    BrowserVersion: cc.sys.browserVersion,
                    Platform: cc.sys.platform,
                    Language: cc.sys.language,
                    Os: cc.sys.os,
                    OsVersion: cc.sys.osVersion,
                };

                CConnectLog.Instance.InfoLog(`Login awKey:${this._playerInfo.awKey} serviceId:${this._playerInfo.serviceId} version:${version}`);
                this._cConnectManager.Connect(this._playerInfo.awKey, Number(this._playerInfo.serviceId),
                    `v${this._playerInfo.platform}.${version}`, JSON.stringify(DeviceCollection));
                this.askCommand(CCommand.Login, resolve, reject);
            }
            catch (error) {
                this._isLogin = false;
                reject(PARSER_URL_FAIL);
            }
        });
    }

    /**
     * 請求 Spin
     * @param bet 押注
     * @returns @SpinAck
     */
    public override async spin(bet: number, additionalPurchaseType: number | AdditionalPurchaseType = AdditionalPurchaseType.None, otherParameter: number = 0): Promise<BetData> {
        return new Promise<BetData>((resolve, reject) => {
            if (this._cConnectManager == null) {
                console.error("Spin Fail _cConnectManager is null");
                resolve(new BetData());
                return;
            }

            const bt = new ByteWriterHelper();
            bt.WriteByte(CCommand.Spin);
            bt.WriteByte(additionalPurchaseType);
            bt.WriteBytes(ByteWriterHelper.ConvertToDoubleByte(bet));
            bt.WriteByte(otherParameter);
            this._cConnectManager.MainSend(bt.Buffer);
            this.askCommand(CCommand.Spin, resolve, reject);
        });
    }
    /**
     * 傳送<額外動作> 40 的自定義指令
     * @param gameNumber 取牌館使用 遊戲編號
     * @param playerToken 取牌館使用 玩家令牌
     * @param action
     * @param content 
     */
    public override sendOtherAction(gameNumber: number, playerToken: string, action: number, content: number[]): void {
        const bt = new ByteWriterHelper();
        bt.WriteByte(MessageHeadCode.OtherAction);
        bt.WriteByte(action);

        let len = content.length;
        let bytes: number[] = this.toBigEndianBytes(len);
        // server 此處接收的byte含長度是的長度格式是兩個byte
        bt.WriteByte(bytes[0]);
        bt.WriteByte(bytes[1]);
        for (let item of content) {
            bt.WriteByte(item);
        }

        this._cConnectManager.MainSend(bt.Buffer);
    }
    /**
     * 傳送<額外押注> 41 的自定義指令
     * @param gameNumber 取牌館使用 遊戲編號
     * @param bet
     * @param balance 取牌館使用 玩家餘額
     * @param playerToken 取牌館使用 玩家令牌
     * @param action 
     * @param content 
     */
    public override sendOtherActionWithBet(gameNumber: number, bet: number, balance: number, playerToken: string, action: number, content: number[]): void {
        const bt = new ByteWriterHelper();
        bt.WriteByte(MessageHeadCode.OtherActionWithBet);
        bt.WriteByte(action);
        bt.WriteBytes(ByteWriterHelper.ConvertToDoubleByte(bet));

        let len = content.length;
        let bytes: number[] = this.toBigEndianBytes(len);
        // server 此處接收的byte含長度是的長度格式是兩個byte
        bt.WriteByte(bytes[0]);
        bt.WriteByte(bytes[1]);
        for (let item of content) {
            bt.WriteByte(item);
        }

        this._cConnectManager.MainSend(bt.Buffer);
    }
    /**
     * 將數字轉換為大端字節
     * @param num 數字
     * @returns 大端字節陣列 [高位, 低位]
     */
    private toBigEndianBytes(num: number): [number, number] {
        if (num < 0 || num > 0xFFFF) {
            console.error("數字必須在 0 ~ 65535 之間");
        }
        // 取高位 (右移 8 bits) 和低位 (取最低 8 bits)
        const high = (num >> 8) & 0xFF;
        const low = num & 0xFF;
        return [high, low];
    }

    /**
     * 初始化連線管理元件
     * @param gatewayList   分流清單
     */
    protected async initCConnectManager(env: Environment) {
        if (this._cConnectManager != null) {
            //已經完成初始化
            return true;
        }

        //需要初始化連線元件
        try {
            if (env == Environment.Release) {
                //Release 版本只能看到 Error Log
                // CConnectLog.Instance.SetVisibleLevel( LogLevel.Error );
            }


            this._cConnectManager = new CConnectManager(
                //分流清單
                this.getPlayerInfo().webConfig.CommonSetting.ConnectSetting,
                //分流 ServiceID
                MainServiceID,
                //存活時間
                this.getPlayerInfo().webConfig.CommonSetting.LifeSecond,
                //最大重試次數
                MaxRetryCount,
                //重試間隔時間
                RetryIntervalSeconds);
            this._cConnectManager.FunErrorMsg = this.onCConnectError.bind(this);
            this._cConnectManager.FunDisconnectService = this.onCConnectDisConnect.bind(this);
            this._cConnectManager.FunRecv = this.onCConnectRecv.bind(this);
            return true;
        }
        catch (error) {
            cc.error("Login initCConnectManager Fail", error);

            return false;
        }
    }

    /**
     * 收到斷線
     * @param msg 斷線訊息
     */
    protected onCConnectError(msg: string) {
        cc.log("[NetAgent onCConnectError] msg", msg);
        this._observer.Notify(NetEvent.Disconnected, msg);
    }
    /**
     * 收到服務器踢人
     * @param serviceID 服務ID
     * @param msg 斷線訊息
     */
    protected onCConnectDisConnect(serviceID: number, msg: string) {
        cc.log("[NetAgent onCCConnectDisConnect] serviceID", serviceID, "msg", msg);
        this._observer.Notify(NetEvent.ServiceKick, msg);
    }
    /**
     * 收到資料
     * @param _  
     * @param data 資料
     */
    protected onCConnectRecv(_: number, data: Uint8Array) {
        const bt = new ByteReaderHelper(data.buffer as ArrayBuffer);
        this.processCommand(bt.ReadByte(), bt);
        this.processCustomCommand(bt);
    }
    /**
     * 斷線處理
     * @param msg 斷線訊息
     * @returns 
     */
    public override disconnect(msg: string) {
        if (this._cConnectManager == null) {
            //如果連線元件為空，則直接通知斷線
            this._observer.Notify(NetEvent.Disconnected, msg);
            return;
        }
        this._cConnectManager.Disconnect(msg);
    }

    /**
     * 請求指令
     * @param command 指令
     * @param resolve 成功回調
     * @param reject 失敗回調
     */
    private askCommand(command: CCommand, resolve: any, reject: any): void {
        const timeoutProcess = () => {
            clearTimeout(timeoutId);
            const commandProcessIndex = this._processCommandArray.findIndex(item => item.command === command);
            const commandProcess = this._processCommandArray[commandProcessIndex];
            if (commandProcess && this._cConnectManager.IsWaitReconnect()) {
                // If the connection manager is reconnecting, reset the timeout
                commandProcess.timeoutId = setTimeout(timeoutProcess, REQUEST_TIMEOUT);
                return;
            }

            if (commandProcess && this._cConnectManager.IsDisconnect()) {
                // If the connection manager is disconnected, remove the command and reject
                this._processCommandArray.splice(commandProcessIndex, 1);
                reject(command === CCommand.Login ? LoginReDispatcherConnectFail : SpinReDispatcherConnectFail);
                return;
            }

            reject(REQUEST_TIMEOUT_ERROR_CODE);
        };
        const REQUEST_TIMEOUT_20 = 20000;
        const timeoutId = setTimeout(timeoutProcess, REQUEST_TIMEOUT_20);
        this._processCommandArray.push({ command, process: resolve, timeoutId });
    }
    /**
     * 處裡指令
     * @param command 指令
     * @param ack 回應資料
     */
    private processCommand(command: CCommand, ack: ByteReaderHelper) {
        switch (command) {
            case CCommand.Login:
                this.handleLogin(ack);
                break;
            case CCommand.Spin:
                this.handleSpin(ack);
                break;
            default:
                break;
        }
    }
    /**
     * 處理自訂義指令
     * @param ack 回應資料
     */
    private processCustomCommand(ack: ByteReaderHelper) {
        ack.Position = 0;
        let command = ack.ReadByte();
        let action = ack.ReadByte();

        switch (command) {
            case MessageHeadCode.OtherAction:
                // OtherAction 額外動作
                let otherActionStatusCode = ack.ReadByte();
                if (otherActionStatusCode === CCommandStatus.Success) {
                    let base64: string = '';
                    if (ack.Position < ack.length) {
                        let byteUint8Array = ack.ReadByteIncludeLength();
                        base64 = Utility.uint8ArrayToBase64(byteUint8Array);
                    }
                    this.handleCustomCommand?.(MessageHeadCode.OtherAction, action, base64, null);
                }
                else {
                    console.error(`額外動作失敗 (spinResponse): ${ack}`);
                    if (typeof otherActionStatusCode === 'number') {
                        ErrorHandler.Instance.TriggerError(Number(otherActionStatusCode));
                    }
                    else {
                        ErrorHandler.Instance.TriggerError(ErrorCode.Client_BetError);
                    }
                }
                break;
            case MessageHeadCode.OtherActionWithBet:
                // OtherActionWithBet 額外押注
                let spinResponse = new SpinAck(ack);
                if (spinResponse.Result === CCommandStatus.Success) {
                    this.insertHistory(spinResponse); // 自行更新玩家歷史紀錄
                    let jsonData: Map<string, string | number> = new Map<string, string | number>();
                    jsonData.set('bet', spinResponse.BaseBet);
                    jsonData.set('coin', spinResponse.Balance);
                    jsonData.set('score', spinResponse.Win);
                    jsonData.set('slotData', spinResponse.Plant);
                    jsonData.set('spinId', spinResponse.SerialId);
                    let betData = new BetData(jsonData);
                    this.handleCustomCommand?.(MessageHeadCode.OtherActionWithBet, action, betData, null);
                }
                else {
                    console.error(`額外押注失敗 (ack): ${ack}`);
                    if (typeof spinResponse.Result === 'number') {
                        ErrorHandler.Instance.TriggerError(Number(spinResponse.Result));
                    }
                    else {
                        ErrorHandler.Instance.TriggerError(ErrorCode.Client_BetError);
                    }
                }
                break;
            case CCommand.Login:
            case CCommand.Spin:
                // 忽略 已知的 Login 與 Spin 指令
                break;
            default:
                console.error(`未知的CustomCommand command : ${command}`);
                break;
        }
    }

    /**
     * 處理登入回應
     * @param ack 回應資料
     * @returns 
     */
    private async handleLogin(ack: ByteReaderHelper) {
        const processIndex = this._processCommandArray.findIndex(item => item.command === CCommand.Login);
        if (processIndex === -1) return;

        const process = this._processCommandArray.splice(processIndex, 1)[0];
        if (!process) return;

        clearTimeout(process.timeoutId);
        // Non-Slot games handle packets themselves
        if (this.gameType !== GameType.Slot) return;

        const gameMachineInfo = new GameMachineInfo(ack);
        if (gameMachineInfo.Result === CCommandStatus.Success) {
            // Notify cConnectManager Online
            this._cConnectManager.Online();
            this._playerInfo.name = gameMachineInfo.Nickname;
            this.setPlayerInfo(gameMachineInfo);
            await this.askPlayerHistory(gameMachineInfo.HistoryHeight);
        }
        else {
            this._cConnectManager.Disconnect(`${gameMachineInfo.Result}`);
        }

        process.process(true);
    }
    /**
     * 設定玩家資訊
     * @param gameMachineInfo 
     */
    private setPlayerInfo(gameMachineInfo: GameMachineInfo) {
        PlayerInfo.balance = gameMachineInfo.Balance;
        PlayerInfo.userName = gameMachineInfo.Nickname;
        PlayerInfo.betMax = gameMachineInfo.MaxBet;
        PlayerInfo.betMin = gameMachineInfo.MinBet;
        PlayerInfo.machineID = gameMachineInfo.Id;
        PlayerInfo.buyFG = gameMachineInfo.BuyFG;
        PlayerInfo.lastPlant = gameMachineInfo.LastPlant;
        PlayerInfo.record = gameMachineInfo.Record;
        PlayerInfo.JP = gameMachineInfo.JP;
        PlayerInfo.lastHistory = gameMachineInfo.LastHistory;
        PlayerInfo.result = gameMachineInfo.Result;
    }

    /**
     * 請求玩家的歷程資料
     * @param historyHeight
     * @returns 
     */
    private async askPlayerHistory(historyHeight: number = 0): Promise<void> {
        const urlList = this._playerInfo.webConfig.CommonSetting.ESAPIHistory_UrlList;
        if (!urlList || urlList.length === 0) {
            console.error("askPlayerHistory Fail, ESAPIHistoryURL is null");
            return;
        }
        if (historyHeight === 0) {
            //歷程高度為0，則不需要請求歷程
            return;
        }

        // 只取 HistoryHeightMax 筆資料
        const askBody = Array.from({ length: Math.min(historyHeight, HistoryHeightMax) }, (_, idx) => {
            const i = historyHeight - idx;
            return askHistoryBodyFormat
                .replace("{平台}", this.getPlayerInfo().platform)
                .replace("{暱稱}", this.getPlayerInfo().name)
                .replace("{GameCode}", this.getPlayerInfo().game_code)
                .replace("{歷程高度}", `${i}`);
        });

        const body = askBody.join('\r\n');
        return this.tryAskHistory(0, body);
    }
    /**
     * 嘗試請求歷程資料
     * @param retryCount retry 次數
     * @param body 
     */
    private async tryAskHistory(retryCount: number, body: string): Promise<void> {
        const urlList = this._playerInfo.webConfig.CommonSetting.ESAPIHistory_UrlList;
        const currentIndex = retryCount % urlList.length;
        try {
            const result = await this.post<string>(urlList[currentIndex], body);
            if (!result || result === "") {
                throw AskHistoryFail;
            }
            if (HistoryErrorCode[result]) {
                throw HistoryErrorCode[result];
            }
            // 檢查回傳格式是否正確
            const parsed = JSON.parse(result) as historyHeightFormat[];
            if (!Array.isArray(parsed)) {
                throw new Error(`Invalid history format result ${result}`,);
            }
            this.parserHistoryHeight(parsed);
        }
        catch (error) {

            if (retryCount < AskHistoryRetryCount * urlList.length) {
                await this.tryAskHistory(retryCount + 1, body);
            }
            else {
                console.error(`AskHistory Fail, retry ${retryCount} times`, error);
                // 超過重試次數，記錄錯誤並斷線
                this._cConnectManager.Disconnect(`${error}`);
            }
        }
    }
    /**
     * Parser 歷程高度資料
     * @param historyHeight 
     */
    private parserHistoryHeight(historyHeight: historyHeightFormat[]) {
        if (!historyHeight || historyHeight.length === 0) {
            throw new Error("parserHistoryHeight Fail, historyHeight is null");
        }
        this._history = this.parserHistory(historyHeight.map(value => value.st))
            .sort((a, b) => b.Time - a.Time);
    }
    /**
     * Parser歷程資料
     * @param history 
     * @returns 
     */
    protected parserHistory(history: string[]): IHistory[] {
        return history.map((item) => {
            const value = typeof item === "string" ? JSON.parse(item) : item;
            let timeStr = value["T"];
            if (!this.isISO8601TimeFormat(timeStr)) {
                timeStr = this.transformISO8601TimeFormat(timeStr);
            }
            const timestamp = new Date(timeStr).getTime();

            return {
                Bet: Number(value["Bet"]),
                Win: Number(value["Win"]),
                Time: timestamp,
                異動前: Number(value["異動前"]),
                異動後: Number(value["異動後"]),
                盤面演繹: value["盤面演繹"],
                遊戲館: value["遊戲館"],
                編號: value["編號"],
                暱稱: value["暱稱"],
                加購: Number(value["加購"]),
                扣幣倍: Number(value["扣幣倍"]),
            };
        });
    }
    //檢查是否為標準的 ISO8601 時間格式
    protected isISO8601TimeFormat(timeString: string): boolean {
        const iso8601Regex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{1,7})([+-]\d{2}:\d{2})$/;
        return iso8601Regex.test(timeString);
    }
    //轉換時間的格式為標準的 ISO8601 時間格式
    protected transformISO8601TimeFormat(timeString: string): string {
        const date = new Date(timeString);

        // 取得年、月、日、時、分、秒、毫秒
        const year = date.getFullYear();
        const month = this.padStartAlternative(String(date.getMonth() + 1), 2, '0');
        const day = this.padStartAlternative(String(date.getDate()), 2, '0');
        const hours = this.padStartAlternative(String(date.getHours()), 2, '0');
        const minutes = this.padStartAlternative(String(date.getMinutes()), 2, '0');
        const seconds = this.padStartAlternative(String(date.getSeconds()), 2, '0');
        const milliseconds = this.padStartAlternative(String(date.getMilliseconds()), 3, '0');

        // 取得時區偏移（以分鐘為單位），並格式化為 +08:00 形式
        const timezoneOffset = -date.getTimezoneOffset();
        const timezoneHours = this.padStartAlternative(String(Math.floor(timezoneOffset / 60)), 2, '0');
        const timezoneMinutes = this.padStartAlternative(String(Math.abs(timezoneOffset % 60)), 2, '0');
        const timezoneSign = timezoneOffset >= 0 ? '+' : '-';

        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${timezoneSign}${timezoneHours}:${timezoneMinutes}`;
    }
    //取代字串功能
    protected padStartAlternative = (input: string, targetLength: number, padString: string): string => {
        while (input.length < targetLength) {
            input = padString + input;
        }
        return input;
    };

    /**
     * Spin process
     * @param ack 
     * @returns 
     */
    protected handleSpin(ack: ByteReaderHelper) {
        const processIndex = this._processCommandArray.findIndex(item => item.command === CCommand.Spin);
        if (processIndex === -1) return;

        const [process] = this._processCommandArray.splice(processIndex, 1);
        if (!process) return;

        clearTimeout(process.timeoutId);
        const spinAck = new SpinAck(ack);
        if (spinAck.Result === CCommandStatus.Success) {
            this.insertHistory(spinAck);
        }
        let betData = this.spinAckToBetData(spinAck);
        process.process(betData);
    }
    /**
     * 將 SpinAck 轉換為 BetData
     * @param spinAck
     * @returns BetData
     */
    protected spinAckToBetData(spinAck: SpinAck): BetData {
        try {
            if (spinAck.Result === CCommandStatus.Success) {
                let jsonData: Map<string, string | number> = new Map<string, string | number>();
                jsonData.set('bet', spinAck.BaseBet);
                jsonData.set('coin', spinAck.Balance);
                jsonData.set('score', spinAck.Win);
                jsonData.set('slotData', spinAck.Plant);
                jsonData.set('spinId', spinAck.SerialId);
                let betData: BetData = new BetData(jsonData);
                return betData;
            } else {
                console.error(`下注失敗:${spinAck.Result}`);
                let SerialId = spinAck.SerialId;
                return new BetData(new Map<string, string | number>([['spinId', SerialId]]));
            }
        }
        catch (error) {
            if (typeof error === "number") {
                ErrorHandler.Instance.TriggerError(Number(error));
            } else {
                ErrorHandler.Instance.TriggerError(ErrorCode.Client_BetError);
            }
        }
    }

    /**
     * 寫入歷史資料
     * @param spinAck 
     * @returns 
     */
    private insertHistory(spinAck: SpinAck) {
        if (spinAck.Result != CCommandStatus.Success) {
            return;
        }
        const history: IHistory = this.transformHistoryData(spinAck);
        this._history.unshift(history);
        // 保持歷程最大數量，移除最舊的一筆
        if (this._history.length > HistoryHeightMax) {
            this._history.length = HistoryHeightMax;
        }

    }
    /**
     * 轉換 historyData
     * @param spinAck 
     * @returns 
     */
    protected transformHistoryData(spinAck: SpinAck): IHistory {
        const date = new Date(spinAck.Time);
        const timestamp = Math.floor(date.getTime());
        const history: IHistory = {
            Bet: spinAck.AdditionalPurchase > spinAck.BaseBet ? spinAck.AdditionalPurchase : spinAck.BaseBet,
            Win: spinAck.Win,
            Time: Number(timestamp),
            異動前: spinAck.Balance - spinAck.Win + spinAck.AdditionalPurchase,
            異動後: spinAck.Balance,
            盤面演繹: spinAck.Plant,
            遊戲館: this._playerInfo.game_code,
            編號: spinAck.SerialId.toString(),
            暱稱: this._playerInfo.name,
            加購: spinAck.AdditionalPurchase,
            扣幣倍: parseFloat((spinAck.AdditionalPurchase / spinAck.BaseBet).toFixed(2)),
        }
        return history;
    }

    /**
     * 發送 GET 請求
     * @param url 
     * @param timeout 
     * @returns 
     */
    protected get<T>(url: string, timeout: number = REQUEST_TIMEOUT): Promise<T> {
        return this.promiseTimeout(new Promise<T>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("get", url);
            xhr.timeout = timeout;
            xhr.onload = function () {
                if (this.status === 200) {
                    resolve(xhr.response);
                }
                else {
                    reject(xhr.response);
                }
            };
            xhr.ontimeout = () => {
                reject(REQUEST_TIMEOUT_ERROR_CODE);
            };
            xhr.send();

        }), REQUEST_TIMEOUT);
    }

    /**
     * 發送 POST 請求
     * @param url 
     * @param data 
     * @param timeout 
     * @returns 
     */
    protected post<T>(url: string, data: Document | XMLHttpRequestBodyInit, timeout: number = REQUEST_TIMEOUT): Promise<T> {
        return this.promiseTimeout(new Promise<T>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("post", url);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.timeout = timeout;
            xhr.onload = function () {
                if (this.status === 200) {
                    resolve(xhr.response);
                }
                else {
                    reject(xhr.response);
                }
            };
            xhr.ontimeout = () => {
                reject(REQUEST_TIMEOUT_ERROR_CODE);
            };
            xhr.send(data);

        }), timeout);
    }
    /**
     * timeout promise
     * @param promise 
     * @param timeout 
     * @returns 
     */
    protected promiseTimeout<T>(promise: Promise<T>, timeout: number): Promise<T> {
        return Promise.race<T>([promise, new Promise<T>((_, reject) => {
            const id = setTimeout(() => {
                clearTimeout(id);
                reject(REQUEST_TIMEOUT_ERROR_CODE);
            }, timeout);
        })]);
    }

    /**
     * 將歷程資料轉換為 JSON 字串
     * @returns 
     */
    protected changeIHistoryToJson(): string {
        let historyItemInfos = this._history.map((item: IHistory) => {
            let historyItemInfoItem = new HistoryItemInfo();
            historyItemInfoItem.gameCode = this.gameID.toLowerCase();
            historyItemInfoItem.date = item.Time;
            historyItemInfoItem.bet = item.Bet;
            historyItemInfoItem.winScore = item.Win;
            historyItemInfoItem.betID = item.編號;
            historyItemInfoItem.slotData = item.盤面演繹;
            historyItemInfoItem.playerId = item.暱稱;
            historyItemInfoItem.beforeTotal = item.異動前;
            historyItemInfoItem.afterTotal = item.異動後;
            historyItemInfoItem.featureRatio = item.扣幣倍;
            historyItemInfoItem.version = '';
            return historyItemInfoItem;
        });

        let result =
        {
            gamecode: this.gameID.toLowerCase(),
            history: historyItemInfos.map((item) => {
                return {
                    gamecode: item.gameCode,
                    slotdata: item.slotData,
                    id: item.betID,
                    time: item.date.toString(),
                    version: item.version,
                    bet: item.bet,
                    win: item.winScore,
                    before_total: item.beforeTotal,
                    total: item.afterTotal,
                    account: item.playerId,
                    featureRatio: item.featureRatio,
                }
            })
        }

        return JSON.stringify(result);
    }
}


