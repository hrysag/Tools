import { ByteReaderHelper } from "../../CConnectManager/ByteArray";
import Decoder from "./NetAgentDefine";

/**
 * FTG客製選項結構
 */
export interface IFTGCustomOptions {
    show_game_list: boolean;        // 顯示遊戲列表選單
    buy_free_game: boolean;         // 購買免費遊戲功能
    extra_bet: boolean;             // 額外下注功能
    show_machine_info: boolean;     // 顯示機台資訊
    default_screen_bet: boolean;    // 顯示盤面下注提示窗
    fish_room_shared: boolean;      // 魚機房間共用
    machine_info_shared: boolean;   // 機台資訊共用
    user_multiple_login: boolean;   // 玩家多重登入
}

/**
 * ExtraInfo 回傳封包解析
 */
export default class ExtraInfoAck extends Decoder {
    // 玩家帳號
    private playerId: string = '';

    // 玩家幣別
    private currencyType: string = '';

    // 單局最大下注總和
    private maxBetPerRound: number = 0;

    // 預設下注額
    private defaultBet: number = 0;

    // 幣符號
    private currencySymbol: string = '';

    // 匯率A2C
    private exchangeRateA2C: number = 0;

    // 下注級距陣列
    private betLevels: number[] = [];

    // 客製選項JSON字串
    private customOptionsJson: string = '';

    // 解析後的客製選項
    private customOptions: IFTGCustomOptions = null;

    //==========================外部接口=======================================

    /**
     * 玩家帳號
     */
    public get PlayerId(): string { return this.playerId; }

    /**
     * 玩家幣別
     */
    public get CurrencyType(): string { return this.currencyType; }

    /**
     * 單局最大下注總和
     */
    public get MaxBetPerRound(): number { return this.maxBetPerRound; }

    /**
     * 預設下注額
     */
    public get DefaultBet(): number { return this.defaultBet; }

    /**
     * 幣符號
     */
    public get CurrencySymbol(): string { return this.currencySymbol; }

    /**
     * 匯率A2C
     */
    public get ExchangeRateA2C(): number { return this.exchangeRateA2C; }

    /**
     * 下注級距陣列
     */
    public get BetLevels(): number[] { return [...this.betLevels]; }

    /**
     * 客製選項JSON字串
     */
    public get CustomOptionsJson(): string { return this.customOptionsJson; }

    /**
     * 解析後的客製選項物件
     */
    public get CustomOptions(): IFTGCustomOptions { return this.customOptions; }

    //==========================內部處理=======================================

    constructor(serverAck: ByteReaderHelper) {
        super(serverAck);
        this.Decode();
    }

    Decode(): void {
        if (this.serverAck == null) {
            return;
        }

        try {
            // Byte(CCommand.ExtraInfo) - Command已在上層處理
            // 直接讀取數據，不處理結果狀態

            // Double陣列(玩家.下注級距)

            this.playerId = this.serverAck.ReadString(); // String(玩家.帳號)
            this.currencyType = this.serverAck.ReadString(); // String(玩家.幣別)
            this.maxBetPerRound = this.serverAck.ReadDouble(); // Double(玩家.單局最大下注總和)
            this.defaultBet = this.serverAck.ReadDouble(); // Double(玩家.預設下注額)
            this.currencySymbol = this.serverAck.ReadString(); // String(玩家.幣符號)
            this.exchangeRateA2C = this.serverAck.ReadDouble(); // Double(玩家.匯率A2C)

            this.betLevels = this.serverAck.ReadDoubleArray();

            this.customOptionsJson = this.serverAck.ReadString(); // String(玩家.客製選項)

            // 解析客製選項JSON
            this.parseCustomOptions();
        }
        catch (error) {
            console.error("[ExtraInfoAck] Decode error:", error);
        }
    }

    /**
     * 解析客製選項JSON字串
     */
    private parseCustomOptions(): void {
        try {
            if (this.customOptionsJson && this.customOptionsJson.trim() !== '') {
                this.customOptions = JSON.parse(this.customOptionsJson) as IFTGCustomOptions;
            }
            else {
                // 提供預設的客製選項
                this.customOptions = this.getDefaultCustomOptions();
            }
        }
        catch (error) {
            console.error("[ExtraInfoAck] Parse custom options error:", error);
            // 解析失敗時提供預設值
            this.customOptions = this.getDefaultCustomOptions();
        }
    }

    /**
     * 取得預設的客製選項設定
     */
    private getDefaultCustomOptions(): IFTGCustomOptions {
        return {
            show_game_list: false,        // 顯示遊戲列表選單 - 沒有功能
            buy_free_game: false,         // 購買免費遊戲功能 - 沒有功能
            extra_bet: true,              // 額外下注功能 - 都開啟，因各遊戲館不同，故各遊戲前端自己處理開關
            show_machine_info: false,     // 顯示機台資訊 - 機台登入有帶回給前端，但前端目前沒有此功能
            default_screen_bet: false,    // 顯示盤面下注提示窗 - 只有停止下注點盤面有取消下注，故先關閉
            fish_room_shared: true,       // 魚機房間共用 - 魚機共房(星城不允許，但星城Web館不跟FTG共用錢包)
            machine_info_shared: false,   // 機台資訊共用 - 沒有機台資訊功能
            user_multiple_login: false    // 玩家多重登入 - 不允許多重登入
        };
    }

    /**
     * 檢查是否啟用額外下注功能
     */
    public isExtraBetEnabled(): boolean {
        return this.customOptions?.extra_bet ?? true;
    }

    /**
     * 檢查是否啟用購買免費遊戲功能
     */
    public isBuyFreeGameEnabled(): boolean {
        return this.customOptions?.buy_free_game ?? false;
    }

    /**
     * 檢查是否顯示機台資訊
     */
    public isShowMachineInfoEnabled(): boolean {
        return this.customOptions?.show_machine_info ?? false;
    }

    /**
     * 檢查是否允許多重登入
     */
    public isMultipleLoginEnabled(): boolean {
        return this.customOptions?.user_multiple_login ?? false;
    }

    /**
     * 取得格式化的debug資訊
     */
    public getDebugInfo(): string {
        return [
            `PlayerId: ${this.playerId}`,
            `CurrencyType: ${this.currencyType}`,
            `MaxBetPerRound: ${this.maxBetPerRound}`,
            `DefaultBet: ${this.defaultBet}`,
            `CurrencySymbol: ${this.currencySymbol}`,
            `ExchangeRateA2C: ${this.exchangeRateA2C}`,
            `BetLevels: [${this.betLevels.join(', ')}]`,
            `CustomOptionsJson: ${this.customOptionsJson}`,
            `CustomOptions: ${JSON.stringify(this.customOptions, null, 2)}`
        ].join('\n');
    }
}