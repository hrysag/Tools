import { AdditionalPurchaseType } from "../../CConnectManager/CConnectDefine";
import { NetListener } from "../Tool/NetObserver";
import { BetData } from "../../../GameScripts/Networks/v2";

export const HistoryURL: string = "https://dev-gamerecord.apex-win.com/#/game-list?lang=[lang]&history=[json]";
export const PayTableURL: string = "https://gameapi.apex-win.com/ApexWin?gameID=[gameID]&lang=[lang]&page=introduction&mode=dark";
export const RuleURL: string = "https://gameapi.apex-win.com/ApexWin?gameID=[gameID]&lang=[lang]&page=operation&mode=dark";

//PlayerInfo
export interface IPlayerInfoBase {
    game_code: string,
    platform: string,
    name: string,
    serviceId: string,
    awKey: string,
    webConfigUrl: string,
    ParserSuccess: boolean,
}

//環境
export enum Environment {
    Test = 0,
    Release = 1
}

//ConfigType
export enum ConfigType {
    SLOT = "Slot",
    Fish = "Fish",
}

export enum MessageHeadCode {
    OtherAction = 40,
    OtherActionWithBet = 41,
}

export interface IBaseNetAgent {
    update(dt: number): void;

    //獲得資訊
    getIsDemo(): boolean;
    getIsLogin(): boolean;
    getLanguage(): string;
    getPlatform(): number;
    getPlayerInfo(): IPlayerInfoBase;

    setLanguage(lang: string): void;

    //URL相關
    parserBaseConfig(url: string): void;
    askWebConfig(configType: ConfigType): Promise<void>;
    getHistoryURL(): string;
    getPayTableURL(): string;
    getRuleURL(): string;

    //觀察者
    registerObserver(listener: NetListener): void;
    registerCustomCommand(handleCustomCommand: (command: MessageHeadCode, args: any[]) => void): void;
    removeObserver(name: string): void;

    //斷線
    disconnect(msg: string): void;

    //登入指令
    login(env: Environment, version: string): Promise<boolean>;

    //下注指令
    spin(bet: number, additionalPurchaseType: number | AdditionalPurchaseType, otherParameter: number, gameNumber?: number, balance?: number, playerToken?: string): Promise<BetData>;
    buyFeature(bet: number, additionalPurchaseType: AdditionalPurchaseType): Promise<BetData>;
    sendOtherAction(gameNumber: number, playerToken: string, action: number, content: number[]): void;
    sendOtherActionWithBet(gameNumber: number, bet: number, balance: number, playerToken: string, action: number, content: number[]): void;

    //與_cConnectManager相關，有開出來給外部使用，但沒用到
    getConnectManagerState(): number;
    transConnectManagerToOnline(): void;

    //測試站專屬
    sendGameLoginFetch(playerToken: string, gameNumber: number): Promise<string>;
}