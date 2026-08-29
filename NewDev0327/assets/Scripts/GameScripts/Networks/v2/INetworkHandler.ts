import { ConfigType, IPlayerInfo } from "../../../NetAgent/v2/XinStar/AgentDefine";
import { FeatureType, NetworkEvent } from "./NetworkHandler";

export interface INetworkHandler {
    //獲得資訊
    getIsDemo(): boolean;
    getIsLogin(): boolean;
    getLanguage(): string;
    getPlatform(): number;
    getPlayerInfo(): IPlayerInfo;

    isFeatureEnabled(feature: FeatureType): boolean;

    setLanguage(lang: string): void;

    init(gameID: string, timeoutSecond: number, isExhibition: boolean, agentType: number): void;
    update(dt: number): void;

    //URL相關
    parserBaseConfig(url: string): void;
    askWebConfig(configType: ConfigType): Promise<void>;
    getHistoryURL(): string;
    getPayTableURL(): string;
    getRuleURL(): string;

    //連線server，GameStart調用
    connectServer(): void;

    //監聽事件
    addEventListener(type: NetworkEvent, callback: Function): void;
    removeEventListener(type: NetworkEvent, callback: Function): void;
    dispatchEvent(type: NetworkEvent, ...args: any[]): void;

    //下注事件(Obsolete，請改用sendBet)
    send(event: NetworkEvent, ...args: any[]): void;
    //下注事件
    sendBet(gameNumber: number, totalBet: number, balance: number, additionalPurchaseType: number, playerToken: string, otherParameter: number): void;
    //傳送<額外動作> 40 的自定義指令
    sendOtherAction(gameNumber: number, playerToken: string, action: number, content: number[]): void;
    //傳送<額外押注> 41 的自定義指令
    sendOtherActionWithBet(gameNumber: number, bet: number, balance: number, playerToken: string, action: number, content: number[]): void;

    //計時相關 自動斷線相關
    setTimeoutTimerFlag(flag: boolean): void;
    disconnect(): void;

    //取牌館Login功能，可取得進入時的盤面(有的遊戲會需要)
    sendGameLoginFetch(playerToken: string, gameNumber: number): Promise<string>;
}

/*
更改地方
1.新增變量 
    agentInstance NetAgent實例

2.新增方法
    獲取資訊
    GetPlayerInfo(): IPlayerInfo; 
    GetCurrentHistoryData(): IHistory[];

    URL相關 原本是在NetAgent裡直接被GameStart使用
    ParserBaseConfig(url: string): void;
    AskWebConfig(configType: ConfigType): Promise<void>;

    設定NetAgent實例，在init裡面
    private setupAgent

    insertHistory方法，將spinAck轉成HistoryItemInfo後丟給NetAgent處理

3.改動方法
    送出下注 sendBet 原本會分測試與正式，改為統一送回BetData。

    傳送自定義指令 sendOtherAction sendOtherActionWithBet，
    內容統一由NetAgent實作，流程結束後會到 onCustomCommandReceived。

    接收中控客製化消息 onCustomCommandReceived，
    將內容交給NetAgent處理，最後只接收回傳的處裡完資料。

    取牌館Login功能，可取得進入時的盤面，
    sendGameLoginFetch 實作交給NetAgent。
    
    更新時輟 updateTimeStamp 改為私有方法。

4.刪除方法
    private sendBetWebSocket 正式站下注
    private sendBetFetch 測試站下注
    private SendCustomCommand 發送自定義指令
    private checkDemoStatus() 檢查Demo狀態
    private toBigEndianBytes 轉大端，交給NetAgent，與onCustomCommandReceived相關
*/

