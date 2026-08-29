import { askHistoryBodyFormat, AskHistoryFail, AskHistoryRetryCount, ExtraInfoReDispatcherConnectFail, HistoryErrorCode, historyHeightFormat, HistoryHeightMax, ICommonSetting, IGameConfig, IGameSetting, IHistory, IPlatformSetting, IPlayerInfo, LoginReDispatcherConnectFail, PARSER_URL_FAIL, REQUEST_TIMEOUT, REQUEST_TIMEOUT_ERROR_CODE, SpinReDispatcherConnectFail, SwitchType, ThousandPlaceType } from "./FanTa/AgentDefine";
import { MainServiceID, MaxRetryCount, RetryIntervalSeconds } from "../CConnectManager/CConncetConfig";
import { AdditionalPurchaseType, CCommand, CCommandStatus } from "../CConnectManager/CConnectDefine";
import { ConfigType, Environment, MessageHeadCode } from "./NetAgentBase/IBaseNetAgent";
import { ByteReaderHelper, ByteWriterHelper } from "../CConnectManager/ByteArray";
import { FanTaVersion, GameType } from "./FanTa/NetAgentDefine";
import { HistoryItemInfo } from "../../GameScripts/Networks/v2/HistoryItemInfo";
import { BaseNetAgent } from "./NetAgentBase/BaseNetAgent";
import { ErrorHandler } from "../../ErrorHandler/ErrorHandler";
import { CConnectLog } from "../CConnectManager/CConnectLog";
import { FanTaHelper } from "./FanTa/FanTaHelper";
import { PlayerInfo } from "../../GameScripts/Networks/v2/PlayerInfo";
import { ErrorCode } from "../../ErrorHandler/ErrorHandleDefine";
import { NetEvent } from "./Tool/NetObserver";
import { BetData } from "../../GameScripts/Networks/v2/BetData";
import { Utility } from "../../Utils/Core";
import CConnectManager from "../CConnectManager/CConnectManager";
import GameMachineInfo from "./FanTa/GameMachineInfo";
import ExtraInfoAck from "./FanTa/ExtraInfoAck";
import SpinAck from "./FanTa/SpinAck";
import * as cc from "cc"

export class FanTaAgent extends BaseNetAgent {
    protected _playerInfo: IPlayerInfo = {
        game_code: "",
        platform: "",
        name: "",
        serviceId: "",
        awKey: "",
        webConfigUrl: "",
        ParserSuccess: false,
        optionSettings: {
            back_url: '',
            logo_page_url: '',
            timezone: '+08:00'
        },
        extraInfo: {
            exchangeRateA2C: 1.0  // 預設匯率為1.0
        },
        moneyDecimal: 0  // 預設小數點位數為0
    };

    private gameType: GameType = GameType.Slot;

    //歷程
    private _history: IHistory[] = [];

    public constructor(gameID: string) {
        console.log(`[NetAgent] Version: ${FanTaVersion}`);
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
     * 替換原有的ParserBaseConfig方法
     * 原方法: 從URL提取基礎參數 (webconfigurl, serviceid, game_code, platform, awkey)
     * 新方法: 使用FanTaHelper直接解析所有參數
     */
    public override parserBaseConfig(url: string): void {
        this._playerInfo.originalUrl = url;

        try {
            // 使用FanTaHelper解析URL參數
            const basicParams = FanTaHelper.getBasicGameParams(url);

            // 映射到NetAgent的PlayerInfo結構
            this._playerInfo.serviceId = basicParams.serviceid;
            this._playerInfo.game_code = basicParams.game_code;
            this._playerInfo.platform = basicParams.platform;
            this._playerInfo.awKey = basicParams.awkey;

            // webConfigUrl不再需要，但為了兼容性暫時保留
            this._playerInfo.webConfigUrl = "";

            // 設定選項設定
            this._playerInfo.optionSettings = this.getOptionSettings(url);

            // 標記解析成功
            this._playerInfo.ParserSuccess = true;

            this._platform = parseInt(this._playerInfo.platform);
            this._demo = basicParams.demo;
            this.gameCode = this._playerInfo.game_code;

            // 在 FanTa 解析完成後設定 語系 及 小數點位數
            this.setLangFromFanTa();
            this.setupMoneyDecimalFromFanTa();
        }
        catch (error) {
            console.error("ParserBaseConfig Fail", error);
            this._playerInfo.ParserSuccess = false;
            throw error;
        }
    }

    /**
     * 獲取選項設定參數
     */
    private getOptionSettings(url: string): { back_url: string; logo_page_url: string; timezone: string; } {
        try {
            const optionSettings = FanTaHelper.getOptionSettings(url);
            return optionSettings;
        }
        catch (error) {
            console.error("GetOptionSettings error:", error);
            return {
                back_url: '',
                logo_page_url: '',
                timezone: '+08:00'
            };
        }
    }

    /**
     * 從 FanTa 參數設定語系
     */
    private setLangFromFanTa(): void {
        try {
            // 從 NetAgent 的 PlayerInfo 取得原始 URL（這是正確的來源）
            const originalUrl = this._playerInfo.originalUrl;
            if (originalUrl) {
                const basicParams = this.getBasicGameParams(originalUrl);
                this._language = basicParams.lang;
            }
        }
        catch (error) {
            console.warn(`[NetAgent] 設定語系失敗: ${error}，使用預設值 ${this._language}`);
        }
    }

    /**
     * 獲取基本遊戲參數（替換直接調用 FanTaHelper.getBasicGameParams）
     */
    private getBasicGameParams(url: string): { game_code: string; lang: string; awkey: string; platform: string; demo: boolean; serviceid: string; decimal: number; } {
        try {
            const basicParams = FanTaHelper.getBasicGameParams(url);
            return basicParams;
        }
        catch (error) {
            console.error("GetBasicGameParams error:", error);
            return {
                game_code: '',
                lang: '',
                awkey: '',
                platform: '',
                demo: false,
                serviceid: '',
                decimal: 0
            };
        }
    }

    /**
     * 從 FanTa 參數設定小數點顯示位數
     */
    private setupMoneyDecimalFromFanTa(): void {
        try {
            // 從 NetAgent 的 PlayerInfo 取得原始 URL（這是正確的來源）
            const originalUrl = this._playerInfo.originalUrl;
            if (originalUrl) {
                const basicParams = this.getBasicGameParams(originalUrl);
                this._playerInfo.moneyDecimal = basicParams.decimal;
            }
            else {
                // 如果 PlayerInfo.originalUrl 為空，回退到使用當前頁面 URL
                const fallbackUrl = window.location.href;

                const basicParams = this.getBasicGameParams(fallbackUrl);
                this._playerInfo.moneyDecimal = basicParams.decimal;
            }
        }
        catch (error) {
            console.warn(`[NetAgent] 設定小數點位數失敗: ${error}，使用預設值 0`);
            this._playerInfo.moneyDecimal = 0;
        }
    }

    public override async askWebConfig(configType: ConfigType): Promise<void> {
        const originalUrl = this._playerInfo.originalUrl || window.location.href;
        try {
            // 直接從FanTaHelper獲取各類配置
            const connectionParams = FanTaHelper.getConnectionParams(originalUrl);

            const apiUrls = FanTaHelper.getApiUrls(originalUrl);

            const platformSettings = FanTaHelper.getPlatformSettings(originalUrl);

            // 構建IGameConfig結構
            const gameConfig: IGameConfig = {
                Result: 0,
                CommonSetting: this.buildCommonSetting(connectionParams),
                GameSetting: this.buildGameSetting(apiUrls),
                PlatformSetting: this.buildPlatformSetting(platformSettings)
            };

            // 設定到NetAgent的PlayerInfo
            this._playerInfo.webConfig = gameConfig;
        }
        catch (error) {
            console.error("AskWebConfig Fail", error);
            throw error;
        }
    }

    /**
     * 構建CommonSetting配置
     */
    private buildCommonSetting(connectionParams: any): ICommonSetting {
        return {
            ClientKey: connectionParams.ClientKey || "",
            Client_GameEvent_API: connectionParams.Client_GameEvent_API || "",
            Client_GameIssue_API: connectionParams.Client_GameIssue_API || "",
            ConnectSetting: connectionParams.ConnectSetting || [],
            LifeSecond: connectionParams.LifeSecond || 30,
            CustomData: connectionParams.CustomData || "",
            ESAPIHistory_UrlList: connectionParams.ESAPIHistory_UrlList || []
        };
    }

    /**
     * 構建GameSetting配置
     */
    private buildGameSetting(apiUrls: any): IGameSetting {
        return {
            GameRule_Url: apiUrls.GameRule_Url || "",
            PayTable_Url: apiUrls.PayTable_Url || "",
            PlayerHistory_Url: apiUrls.PlayerHistory_Url || "",
            CustomData: apiUrls.CustomData || ""
        };
    }

    /**
     * 構建PlatformSetting配置
     */
    private buildPlatformSetting(platformSettings: any): IPlatformSetting {
        return {
            LoadingLogoType: platformSettings.LoadingLogoType === "Normal" ? SwitchType.Normal : SwitchType.Close,
            GameBottomLogoType: platformSettings.GameBottomLogoType === "Normal" ? SwitchType.Normal : SwitchType.Close,
            BuyFeatureLogoType: platformSettings.BuyFeatureLogoType === "Normal" ? SwitchType.Normal : SwitchType.Close,
            ThousandPlace: platformSettings.ThousandPlace === "ENG" ? ThousandPlaceType.ENG : ThousandPlaceType.EUR,
            Range: [100, 200, 300] //Fanta改從ExtraInfo取得級距
        };
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
    public override async spin(bet: number, additionalPurchaseType: number | AdditionalPurchaseType = AdditionalPurchaseType.None): Promise<BetData> {
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
                let errorCode: number;
                switch (command) {
                    case CCommand.Login:
                        errorCode = LoginReDispatcherConnectFail;
                        break;
                    case CCommand.Spin:
                        errorCode = SpinReDispatcherConnectFail;
                        break;
                    case CCommand.ExtraInfo:
                        errorCode = ExtraInfoReDispatcherConnectFail;
                        break;
                    default:
                        errorCode = REQUEST_TIMEOUT_ERROR_CODE;
                        break;
                }
                reject(errorCode);
                return;
            }

            reject(REQUEST_TIMEOUT_ERROR_CODE);
        };

        const timeoutId = setTimeout(timeoutProcess, REQUEST_TIMEOUT);
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
            case CCommand.ExtraInfo:
                this.handleExtraInfo(ack);
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
            await this.requestAndProcessExtraInfo();
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
     * 請求並處理 ExtraInfo 數據
     */
    private async requestAndProcessExtraInfo(): Promise<void> {
        try {
            const extraInfo = await this.RequestExtraInfo();
            this.processExtraInfoData(extraInfo);
        } catch (error) {
            console.error(`[NetAgent] ExtraInfo 請求錯誤:`, error);
            this._cConnectManager.Disconnect(`ExtraInfo請求錯誤: ${error}`);
            return;
        }
    }

    /**
     * 請求額外資訊 (ExtraInfo)
     * @returns ExtraInfoAck
     */
    private async RequestExtraInfo(): Promise<ExtraInfoAck> {
        return new Promise<ExtraInfoAck>((resolve, reject) => {
            if (this._cConnectManager == null) {
                console.error("RequestExtraInfo Fail _cConnectManager is null");
                resolve(new ExtraInfoAck(null));
                return;
            }

            const bt = new ByteWriterHelper();
            bt.WriteByte(CCommand.ExtraInfo);
            // ExtraInfo 不需要額外參數
            this._cConnectManager.MainSend(bt.Buffer);
            this.askCommand(CCommand.ExtraInfo, resolve, reject);
        });
    }
    /**
     * 處理 ExtraInfo 數據並記錄到 PlayerInfo.extraInfo
     * @param extraInfo ExtraInfoAck 數據
     */
    private processExtraInfoData(extraInfo: ExtraInfoAck): void {
        // 確保 extraInfo 物件存在
        if (!this._playerInfo.extraInfo) {
            this._playerInfo.extraInfo = {};
        }

        // 記錄所有 ExtraInfo 數據到 PlayerInfo.extraInfo
        // PlayerId
        if (extraInfo.PlayerId && extraInfo.PlayerId.trim() !== "") {
            this._playerInfo.extraInfo.playerId = extraInfo.PlayerId;
        }

        // 預設下注額
        if (extraInfo.DefaultBet > 0) {
            this._playerInfo.extraInfo.defaultBet = extraInfo.DefaultBet;
        }

        // 幣符號
        if (extraInfo.CurrencySymbol && extraInfo.CurrencySymbol.trim() !== "") {
            this._playerInfo.extraInfo.currencySymbol = extraInfo.CurrencySymbol;
        }

        // A2C 匯率
        if (extraInfo.ExchangeRateA2C > 0) {
            this._playerInfo.extraInfo.exchangeRateA2C = extraInfo.ExchangeRateA2C;
        }
        else {
            this._playerInfo.extraInfo.exchangeRateA2C = 1.0;
        }

        // 下注級距
        if (extraInfo.BetLevels && extraInfo.BetLevels.length > 0) {
            this._playerInfo.extraInfo.betLevels = extraInfo.BetLevels;
        }
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
                .replace("{暱稱}", this.getPlayerInfo().extraInfo?.playerId || this.getPlayerInfo().name)
                .replace("{GameCode}", this.getPlayerInfo().game_code)
                .replace("{歷程高度}", `${i}`);
        });

        const body = askBody.join('\r\n');
        return this.tryAskHistory(0, body, historyHeight);
    }
    /**
         * 嘗試請求歷程資料
         * @param retryCount retry 次數
         * @param body 
         */
    private async tryAskHistory(retryCount: number, body: string, height: number): Promise<void> {
        const urlList = this._playerInfo.webConfig.CommonSetting.ESAPIHistory_UrlList;
        const currentIndex = retryCount % urlList.length;
        let result: string = "";

        try {
            result = await this.post<string>(urlList[currentIndex], body);
            if (!result || result === "") {
                throw AskHistoryFail;
            }
            if (HistoryErrorCode[result]) {
                throw HistoryErrorCode[result];
            }
            // 檢查回傳格式是否正確
            const parsed = JSON.parse(result) as historyHeightFormat[];
            if (!Array.isArray(parsed)) {
                console.error(`Invalid history format result ${result}`);
                throw AskHistoryFail;
            }
            this.parserHistoryHeight(parsed);
        }
        catch (error) {
            if (retryCount < AskHistoryRetryCount * urlList.length) {
                return await this.tryAskHistory(retryCount + 1, body, height);
            }
            else {
                console.error(`AskHistory Fail, retry ${retryCount} times`, error);
                // 超過重試次數，記錄錯誤並斷線
                this._cConnectManager.Disconnect(`${error}`);
                this._observer.Notify(NetEvent.HistoryError, {
                    ErrorCode: error,
                    HistoryHeight: height,
                    Url: urlList[currentIndex],
                    Response: result
                } as {
                    ErrorCode: string;
                    HistoryHeight: number;
                    Url: string;
                    Response: string;
                });
            }
        }
    }
    /**
     * Parser 歷程高度資料
     * @param historyHeight 
     */
    private parserHistoryHeight(historyHeight: historyHeightFormat[]) {
        if (!historyHeight || historyHeight.length === 0) {
            console.error("parserHistoryHeight Fail, historyHeight is null");
            throw AskHistoryFail;
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
    private spinAckToBetData(spinAck: SpinAck): BetData {
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

    //ExtraInfo process
    private handleExtraInfo(ack: ByteReaderHelper) {
        const processIndex = this._processCommandArray.findIndex(item => item.command === CCommand.ExtraInfo);
        if (processIndex === -1) return;

        const [process] = this._processCommandArray.splice(processIndex, 1);
        if (!process) return;

        clearTimeout(process.timeoutId);
        const extraInfoAck = new ExtraInfoAck(ack);
        process.process(extraInfoAck);
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
    private transformHistoryData(spinAck: SpinAck): IHistory {
        const date = new Date(spinAck.Time);
        const timestamp = Math.floor(date.getTime());

        // SpinAck 的 BaseBet, AdditionalPurchase, Win 已經是實際貨幣，可直接使用
        const baseBetCurrency = spinAck.BaseBet;
        const additionalPurchaseCurrency = spinAck.AdditionalPurchase;
        const winCurrency = spinAck.Win;

        const history: IHistory = {
            Bet: additionalPurchaseCurrency > baseBetCurrency ? additionalPurchaseCurrency : baseBetCurrency,
            Win: winCurrency,
            Time: Number(timestamp),
            異動前: spinAck.Balance - winCurrency + additionalPurchaseCurrency,
            異動後: spinAck.Balance,
            盤面演繹: spinAck.Plant,
            遊戲館: this._playerInfo.game_code,
            編號: spinAck.SerialId.toString(),
            暱稱: this._playerInfo.name,
            加購: additionalPurchaseCurrency,
            扣幣倍: parseFloat((additionalPurchaseCurrency / baseBetCurrency).toFixed(2)),
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

        const timezone = this.getPlayerInfo().optionSettings.timezone;
        const currency_symbol = this.getPlayerInfo().extraInfo.currencySymbol;
        const a2c = this.getPlayerInfo().extraInfo.exchangeRateA2C;
        const thousandplacetype = this.getPlayerInfo().webConfig?.PlatformSetting.ThousandPlace;
        const hideFields = this.getPlayerInfo().platform === '7' ? "before_total,total" : "\"\"";
        const label = this.getPlayerInfo().platform;
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
                    timezone: timezone,
                    currency_symbol: currency_symbol,
                    a2c: a2c,
                    thousandplacetype: thousandplacetype,
                    hide_fields: hideFields,
                    label: label
                }
            })
        }

        return JSON.stringify(result);
    }

    /**
     * 將AW幣轉換為實際貨幣
     * @param awAmount AW幣數量
     * @returns 轉換後的實際貨幣金額
     */
    public ConvertAwToCurrency(awAmount: number): number {
        try {
            // 從 PlayerInfo.extraInfo.exchangeRateA2C 取得匯率
            const exchangeRate = this._playerInfo.extraInfo?.exchangeRateA2C;

            if (exchangeRate && exchangeRate > 0) {
                return awAmount * exchangeRate;
            }
            else {
                // 如果匯率取得失敗或無效，使用預設轉換率 1
                console.warn(`[NetAgent] ConvertAwToCurrency: 匯率取得失敗或無效 (${exchangeRate})，使用預設轉換率 1`);
                return awAmount * 1;
            }
        }
        catch (error) {
            // 如果發生錯誤，使用預設轉換率 1
            console.error(`[NetAgent] ConvertAwToCurrency: 轉換過程發生錯誤: ${error}，使用預設轉換率 1`);
            return awAmount * 1;
        }
    }
}


