import { onBalanceExchange, onGetMachineDetail, onHitJackpot, onLoadInfo, onTakeMachine, onLogin, onBeginGame, onCreditExchange } from "@casino-mono/mvc";
import { BaseSeverEventMap } from "@casino-mono/mvc";

export interface ClientRecvEventMap extends BaseSeverEventMap {
    [ClientRecvAction.Ready]: [RecvMessage.Ready];
    [ClientRecvAction.Login]: [RecvMessage.LoginMessage],
    [ClientRecvAction.UpdateMarquee]: [RecvMessage.UpdateMarqueeMessage],
    [ClientRecvAction.TakeMachine]: [RecvMessage.TakeMachineMessage],
    [ClientRecvAction.LoadInfo]: [RecvMessage.LoadInfoMessage],
    [ClientRecvAction.GetMachineDetail]: [RecvMessage.GetMachineDetailMessage],
    [ClientRecvAction.BalanceExchange]: [RecvMessage.BalanceExchangeMessage],
    [ClientRecvAction.CreditExchange]: [RecvMessage.CreditExchangeMessage],
    [ClientRecvAction.BeginGame]: [RecvMessage.BeginGameMessage],
    [ClientRecvAction.EndGame]: [RecvMessage.EndGameMessage],
    [ClientRecvAction.Gamble]: [RecvMessage.GambleMessage],
    [ClientRecvAction.HitJackpot]: [RecvMessage.HitJackpotMessage],
    [ClientRecvAction.Exit]: [RecvMessage.ExitMessage],
    [ClientRecvAction.Error]: [RecvMessage.ErrorMessage];
}
/**
 * 泛型: 定義Recvice資料內容
 * 預設參數 { action: T, event: boolean, gameType?:string }
 */
export type RecvEventMassage<T extends keyof ClientRecvEventMap> = { action: T, event: boolean, gameType?: string; } & (ClientRecvEventMap[T] extends Record<string, any> ? ClientRecvEventMap[T] : {}) | null;

export enum ClientRecvAction {
    WSOpen = 'open',
    WSClose = 'close',
    WSError = 'error',
    Ready = 'ready',
    Login = 'onLogin',
    UpdateJP = 'updateJP',
    UpdateMarquee = 'updateMarquee',
    TakeMachine = 'onTakeMachine',
    LoadInfo = 'onOnLoadInfo2',
    GetMachineDetail = 'onGetMachineDetail',
    CreditExchange = 'onCreditExchange',
    BalanceExchange = 'balanceExchange',
    HitJackpot = 'onHitJackpot',
    BeginGame = 'onBeginGame',
    EndGame = 'onEndGame',
    Gamble = 'onHitFree',

    MachineLeave = 'machineLeave',
    Exit = 'exit',
    Error = 'error',
    SaveUserAutoExchange = 'saveUserAutoExchange',
}

export namespace RecvMessage {
    export interface WSOpen {
        event: boolean;
    }
    export interface WSClose {
        event: boolean;
        data: {
            code: number;
            reason: string;
        };
    }
    export interface WSError {
        event: boolean;
        data: {
            code: number;
            reason: string;
        };
    }
    export interface Ready {
        action: ClientRecvAction.Ready | 'ready';
        data: ReadyData;
    }
    export interface ReadyData {
        /** 伺服器timestamp */
        ts: number;
        /** 服務版本 */
        version: string;
    }
    /** 錯誤訊息 */
    export interface ErrorMessage {
        action: string;
        event: boolean;
        error?: string;
        errCode?: number;
        /** 舊版API會回傳這個 */
        ErrorID?: string;
        data: null;
    }

    export interface LoginMessage {
        action: ClientRecvAction.Login | 'login';
        result: {
            data: onLogin,
            event: boolean;
        };
    }
    export interface UpdateJPMessage {
        action: ClientRecvAction.UpdateJP | 'updateJP';
        data: number[];
    }
    export interface UpdateMarqueeMessage {
        action: ClientRecvAction.UpdateMarquee | 'updateMarquee';
        data: string;
    }
    export interface TakeMachineData {
        event: boolean;
        GameCode: number;
    }
    export interface TakeMachineMessage {
        action: ClientRecvAction.TakeMachine | 'takeMachine';
        result: {
            data: TakeMachineData,
            event: boolean;
        };
    }

    export interface LoadInfoData {
        event: boolean;
        Currency?: string;
        UserID?: number;
        Balance: number;
        Base: string;
        DefaultBase: string;
        AxisCards?: string[];
        AxisLocation?: string;
        ExchangeRate?: number;
        LoginName: string;
        HallID?: number;
        AutoExchange?: boolean;
        Test?: boolean;
        Credit: number;
        BetBase: string;
        WagersID: string;
        noExchange?: boolean;
        BetCreditList?: number[];
        DefaultBetCredit?: number | string;
        LevelList?: number[];
        BetEachLevel?: number;
        isCash?: boolean;
        userSetting?: any;
        SingleBet: number;
        UserName?: string;
    }
    export interface LoadInfoMessage {
        action: ClientRecvAction.LoadInfo | 'onLoadInfo';
        result: {
            data: onLoadInfo,
            event: boolean;
        };
    }

    export interface GetMachineDetailMessage {
        action: ClientRecvAction.GetMachineDetail | 'getMachineDetail';
        result: {
            data: onGetMachineDetail;
            event: boolean;
        };

    }

    export interface CreditExchangeMessage {
        action: ClientRecvAction.CreditExchange | 'creditExchange';
        result: {
            data: onCreditExchange;
            event: boolean;
        };
    }
    export type BalanceExchangeData = {
        event: boolean,
        Amount: number,
        Balance: number,
        BetBase: string,
        ErrorID?: number,
        TransCredit: number;
    };
    export interface BalanceExchangeMessage {
        action: ClientRecvAction.BalanceExchange | 'balanceExchange';
        event: boolean;
        gameType: string;
        data: BalanceExchangeData;
    }
    export interface HitJackpotData extends onHitJackpot {
        TicketNo: string;
        beginGameResult: BeginGameData;
    }
    export interface HitJackpotMessage {
        action: ClientRecvAction.HitJackpot | 'onHitJackpot';
        event: boolean;
        gameType: string;
        data: HitJackpotData;
    }
    export interface BeginGameMessage {
        action: ClientRecvAction.BeginGame | 'beginGame';
        result: {
            data: BeginGameData;
            event: boolean;
        };
    }

    export type BeginGameData = onBeginGame & {
        Cards: number[][];
        BetTotal: number;
        PayTotal: number;
        Lines: DataType.LineData[];
        AxisLocation: string;
        FreeGame: DataType.FreeData;
        FreeGameSpin: DataType.FreeGameSpinData;
        FreeGamePayoffTotal: number;
        Wild: DataType.WildData;
        Credit: number;
        Credit_End: number;
        WagersID: string;
    };


    // 一定會有的參數
    export interface IBeginGameData {
        event: boolean;
        WagersID: string;
        BetInfo: any;
        Credit: number;
        Credit_End: string;
        BetTotal: number;
        PayTotal: number;
        BBJackpot: {
            Pools: any[] | null;
        } | null;
    }


    export interface EndGameMessage {
        action: ClientRecvAction.EndGame;
        result: {
            data: EndGameData;
            event: boolean;
        };
    }
    export interface EndGameData {
        GameCode: number;
        Credit: number;
    }
    export interface GambleMessage {
        action: ClientRecvAction.Gamble;
        result: {
            data: GambleData;
            event: boolean;
        };
    }
    export interface GambleData {
        gambleSuccess: boolean;
        lastFreeTime: number;
        nextFreeTime: number;
    }

    export interface ExitMessage {
        action: ClientRecvAction.Exit | 'exit';
        event: boolean;
        gameType: string;
        data: {
            event: boolean;
        };
    }
}


export namespace DataType {

    export interface LineData {
        LineID: number;
        GridNum: number;
        Grids: number[];
        Payoff: number;
        Element: number[];
        ElementID: number;
    }

    export interface FreeData {
        FreeGamePayoffTotal: number;
        FreeGameTime: number;
        GridNum: number;
        Grids: string;
        HitFree: boolean;
        ID: number;
        Payoff: number;
        WagersID: number;
    }
    export interface FreeGameSpinData {
        FreeGameTime: number;
        WagersID: number;
        FreeGamePayoffTotal: number;
    }

    interface ScatterData {
        ID: number;
        GridNum: number;
        Grids: string;
        Payoff: number;
    }



    export interface WildData {
        Expanding: boolean,
        Reel: number[];
    }

    interface ReelStript {
        Normal: number[][];
        Free: number[][];
    };



}