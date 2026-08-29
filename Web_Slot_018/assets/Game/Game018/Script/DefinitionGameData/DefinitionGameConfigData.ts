/**
 * @author eric
 * @file 定義遊戲的設定資料
 * @create date 2025-02-07
 */
export namespace DefinitionGameConfigData {

    export const REEL_SYMBOL_AMOUNT: number = 3; // reel會顯示出來的icon數量 

    export const REEL_AMOUNT: number = 6; // 幾個reel(幾個軸)

    export const ICONS_LENGTH = REEL_SYMBOL_AMOUNT * REEL_AMOUNT;

    //--以下兩個由server的協定來定義(詳見server的協定文件)--
    //--0-5是一般symbol--
    export const NORMAL_SYMBOL_LIST: number[] = [0, 1, 2, 3, 4, 5];

    export const NO_MOTIONICON_LIST: number[] = [2, 3, 4, 5]; //不會動的icon id(沒有appear狀態)+FG2特殊狀態要刪除的

    export const SPECIAL_SYMBOL_LIST: number[] = [9];  // freeGame 才會出現的

    export const DEFAULT_FG_ROUNDS: number = 5;  // FG預設的次數

    export const INSTEAD_WILD: number = 10;  // 取代wild顯示的symbol id

    export const CLEAR_SYMBOL_LIST: number[] = [6, 7, 8, 10];  // 在旋轉期間必須保持清晰狀態的symbol id

    export const HIGH_ODDS_SYMBOL_LIST: number[] = [0, 1]; // 高賠率的icon id(0-1) (wild不算在內)

    //--6-8是特殊wild--freeGame不出現轉輪
    export const WILD_LIST: number[] = [6, 7, 8];  // wild icon id

    export const WILD_ID: number = 0;   // wild icon i

    export const STOP_CHECK: boolean = true; // 停止檢查
    //--預設的中線格式(它是分成三軸每個index代表其中一軸,012=每一軸的index)
    //--所以會有5種情況(看企劃書)--沒用到

    /**
     * symbol的賠率(企劃書有寫)
     * 0=wild=5odd,1=符=4odd,2=眼=3odd,3=草=2.4odd,4=A=2odd,5=K=1.6odd,6=Q=1odd,7=J=0.4odd
     */
    export const ODD: number[] =
        [
            5, 4, 3, 2.4, 2, 1.6, 1, 0.4
        ];

    export enum SOUND { };
    export const SPECIAL_WIN_THRESHOLD: number = 25; //--大獎的門檻值(25倍(包含)以上才算大獎)    
    //--聽牌的門檻值--
    export const FORECAST_FOR_REEL: number = 1; // 聽牌的條件(企劃書註記-左盤面第二軸出現wild時啟動,陣列開始index=0)

    export const FORECAST_REEL: number = 4;//-聽牌的軸(陣列開始index=0)

    //---第四軸滾輪的倍數資料---(沒用到)
    //export const MULTIPLIER: number[] = [1, 2, 3, 5, 10, 15];//--滾輪和四重彩?

    export const BUY_FG_MULTIPLIER: number = 70; //--購買FG的倍數

    export const PFB_SYMBOL: string = 'Symbol';//--靜態的symbol要在後面加上後綴_XX..

    export const PFB_SYMBOL_ANI: string = 'Icon_';//--靜態的symbol要在後面加上後綴_XX..

    export const PFB_ANI_LIST: { [key: number]: string } = {
        2: 'icon_04',
        3: 'icon_05',
        5: 'icon_07',//--美術做的方塊和梅花的編號和server相反
        4: 'icon_06'
    };//--靜態的symbol要在後面加上後綴_XX..
    //--bonus次數:bonus倍數
    export const BONUS_MULTIPLIER: { [key: number]: number } = {
        1: 2,
        5: 3,
        9: 5,
        13: 10
    }
    //--FG2 multiplier的值=要刪除的盤面資料
    export const BONUS_MULTIPLIER_REDUCE: { [key: number]: number } = {
        2: 5,
        3: 4,
        5: 3,
        10: 2
    }
    export const PFB_SPINE_SKIN_ID: string = 'FG_0';//--spine的skin id

    export const PFB_SYMBOL_AWARD_BOX: string = 'ConnectBox';//-prefab id

    export const CONTAINER_ANI_SYMBOL: string = 'SymbolAniDisplayNode';//--container node id

    export const CONTAINER_ANI_AWARD_B: string = 'AwardBoxNode';//--container node id

    export const CONTAINER_SCORE: string = 'WinScoreNode';//--container node id

    export const CONTAINER_FORECAST: string = 'ForecastNode';//--container node id    

    export const NG_TIPS: string[] = [
        'GameMsg_018_1_1',
        'GameMsg_018_1_2',
        'FreeGameMsg_018_1_1',
        'FreeGameMsg_018_1_2'
    ];

}




