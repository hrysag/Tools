import { GameState } from '../GameStateConfigDef/GameStateConfigDef';
import { IProcessSlotData, BasicProcessSlotData } from './IProcessSlotData';

//export type RoundStep = { state: GameState; data: IProcessSlotData };
export type RoundStep<P, G> = { state: G; data: P };



// 讓 S 帶著伺服器封包需要的欄位
export type ServerEnvelope<P> = {
    allRoundOdds: number;
    betValue: number;
    ngReelInfo: P;
    reSpinReelInfo: P[];
    freeGameReelInfo: P[];
};

/**
 * S :計算資料必要的欄位
 * P:
 */
export interface IBasicProcessServerData<
    S extends BasicProcessSlotData,   // 直接鎖死
    P extends IProcessSlotData,
    G> {
    setServerReceiveData(data: S): void
    getAllRoundTotalScoreFixed(): number; //--取得所有round的總分
    getFGRoundTotalScoreFixed(): number; //--取得所有FGround的總分
    getALLRoundTotalScoreAndBetFixed(): { betValue: number, odds: number, score: number };
    getReSpinRoundTotalScoreAndBetFixed(): { betValue: number, odds: number, score: number };
    getFGRoundTotalScoreAndBetFixed(): { betValue: number, odds: number, score: number };
    getReSpinRoundTotalScoreFixed(): number; //--取得所有ReSpin的總分
    setRoundIdx(): boolean; //--設定目前的round索引,如果有下一個回合就+1,沒有就不動作
    getIsLastStep(): boolean; //--是否是最後一步(用來取代「看 reSpin/freeGame 陣列還剩多少」)
    getCurrentStepForClick(): RoundStep<P, G> | null;// 給 Stop 按鈕使用：優先用 pending 索引，沒有就用現在的 round 索引
    getCurrentData(): P | null
    getCurrentStep(): RoundStep<P, G> | null;
    clearPendingStopIndex(): void; //--stop 完成後清掉，避免殘留
    setSpinIndexForTemporary(): void//--每次spin都會呼叫,用來記錄這一局的索引,之後 stop 可用
    getThisRoundTotalWinScore(): number; //--取得這一局的總分
    getRoundBetAndOdds(): { betValue: number; odds: number };//--取得這一局的下注金額與賠率
    isFirstOfCurrentState(): boolean;//--是否是目前狀態的第一局
    isFirstReSpin(): boolean;//--是否是第一局respin
    isFirstFreeGame(): boolean;//--是否是第一局freegame
    getOrderInCurrentState(): number;//--取得目前狀態的第幾局
    getTotalCountOfState(state: GameState): number;//--取得目前狀態的總局數
    getReSpinTotalCount(): number;//--取得respin的總局數
    getFreeGameTotalCount(): number;//--取得freegame的總局數
    isLastOfCurrentState(): boolean;//--是否是目前狀態的最後一局
    getNextStepGameState(): GameState | null;//--取得下一局的遊戲狀態,沒有就回傳null
    checkHasNextState(state: GameState): boolean;//--檢查後面是否還有該遊戲狀態
    getPrevData(): IProcessSlotData | null;
    getPrevStep(): RoundStep<IProcessSlotData, GameState> | null

}