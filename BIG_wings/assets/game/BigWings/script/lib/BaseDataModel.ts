// import { nanoid } from "nanoid";
import * as mvc from '@casino-mono/mvc';
export class BaseDataModel extends mvc.DataModel {
    // 分析資料
    public analysisInfo: AnalysisInfo = new AnalysisInfo();
    //
    public reqConunter: number = 0;
    // 進入遊戲
    public isJoinGame: boolean = false;

    public lang: string = "";

    get requestId(): string {
        return `${this.uuid}/${++this.reqConunter}`;
    }
    public connected: boolean = false;

    constructor() {

        super();
    }
}

export interface AnalysisMetricData {
    // 自動點擊次數
    autoTimes?: Record<number, number>;
    // 每局下注行為
    beginGameCount?: Record<number, number>;
    // 換分
    exchange?: number[];
    // 押注“＋”
    betPlus?: number;
    // 押注“-”
    betMinus?: number;
    // 押注選單
    betOption?: number;
    //快速旋轉， 0:未設定， 1:沒跳 <-- 手動設定turbo， 2:跳了按確定， 3:跳了按取消， 4:跳了沒按
    turboOption?: number;
    // 遊戲功能”?”
    uiHelp?: number;
    // 內層漢堡JP按鈕
    innerJP?: number;
    // 外層換分按鈕
    outterJP?: number;
    // 外層JP按鈕
    innerEx?: number;
    // 內層漢堡換分按鈕
    outterEx?: number;
    // 漢堡展開按鈕
    burgerMenu?: number;
    // 下注紀錄按鈕
    betRecordBtn?: number;
    // 規則說明按鈕
    ruleBtn?: number;
    // 設定頁面按鈕
    settingBtn?: number;
    // 靜音按鈕（只記錄一次）
    muteBtn?: number;
    // 音樂按鈕（只記錄一次）
    musicBtn?: number;

    //踩地雷專用 ，自動模式 止盈 止損統計
    advancedSettings_confirm?: {
        //止損
        stopLoss: number,
        //止盈
        takeProfit: number,
        //自動次數
        autoTimes: number;
    }[];
}

export class AnalysisInfo {

    public metricData: AnalysisMetricData = {};

    constructor() {
        this.init();
    }
    // 初始化
    private init(): void {
        // TODO: 初始值

    }
    // 設定資料
    public setData<T extends keyof AnalysisMetricData>(key: T, value: AnalysisMetricData[T]): void {
        this.metricData[key] = value;
    }
    // 產生資料
    public report(): AnalysisMetricData {
        return this.metricData;
    }
    // 清除
    public clear(): void {
        this.metricData = {};
    }
}