import { WaysWinScoreAnalyzer } from '../ReferencePath';

export class CalculatePayTable016 extends WaysWinScoreAnalyzer {

    constructor() {
        super(
            Game016PayConfig.WILD_LIST,
            Game016PayConfig.SCORE_ICON_LIST,
            Game016PayConfig.ODDS_LIST,
            Game016PayConfig.PAY_TABLE
        );
    }

    public getWindData(iconData: number[]): AwardData {
        const clientDataList: ClientData[] = [];
        let totalOdd = 0;
        const machMap = this.getWaysWinData(iconData, Game016PayConfig.REEL_AMOUNT, Game016PayConfig.SYMBOL_LENGTH);
        //console.log(`中獎線數量:${machMap.length}`, machMap);
        //--winData{pos=一維陣列的位置,win2DPos=二維陣列的位置(依照順序從頭開始排列)}
        /**
         * Win2DPos=[1][2][3][4][5]
         * 每個陣列表示每個reel依照順序(要相連才會達成.所以一定照順序排列)
         * 每個陣列表示每個reel,裡面的數字表示該symbol在reel裡面的index的圖示位置
         */

        for (let i: number = 0; i < machMap.length; i++) {
            const item = machMap[i];
            //--攤平2dPos
            const flatWin2DPos = item.Win2DPos.reduce((acc, row) => acc.concat(row), []);
            //--WinLineID起始位置是0,企劃資料編號從1開始所以+1
            const winData = new ClientData(item.WinLineID + 1, item.SymbolID, item.Odd, item.Pos, flatWin2DPos);
            totalOdd = (totalOdd + item.Odd).fixed();
            clientDataList.push(winData);
        }

        const finalData = new AwardData();
        finalData.totalOdd = totalOdd;
        finalData.dataList = clientDataList;

        return finalData;
    }

}

export class AwardData {
    public totalOdd: number = 0;//--該局中線的總賠率
    public dataList: ClientData[] = [];

}

export class ClientData {
    public readonly WinLineID: number = 0;//--對應連線的編號清單
    public readonly WinSymbolID: number = 0;
    public readonly WinOdds: number = 0;//--該連線的賠率
    public readonly WinPos: number[] = [];//--一維陣列的位置
    public readonly Win2DPos: number[] = []; //--二維陣列攤平後的位置

    //public readonly Win2DPos: number[][] = [];

    constructor(winLineID: number, winSymbolID: number, winOdds: number, winPos: number[], win2DPos: number[]) {
        this.WinLineID = winLineID;
        this.WinSymbolID = winSymbolID;
        this.WinOdds = winOdds;
        this.WinPos = winPos;
        this.Win2DPos = win2DPos;
    }
}

export class Game016PayConfig {
    /**
     * 1.與算分無關的symbol可以不用塞到SCORE_ICON_LIST
     * 2.與算分有關的symbol必須塞到SCORE_ICON_LIST
     * 3.wild必須塞到WILD_LIST和SCORE_ICON_LIST(儘管你的wild沒有賠率)
     * 4.如果wild沒有賠率,則wild的賠率表設定為[0, 0, 0, 0, 0]
     */

    public static readonly REEL_AMOUNT = 5;
    public static readonly SYMBOL_LENGTH = 4;
    public static readonly WILD_LIST: number[] = [9];//--WILD(scatter 10不放)
    public static readonly SCORE_ICON_LIST: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];//--0~9(bonus不放,wild要放)
    //--賠率表(對照symbolId中線的多寡來決定)
    //--規則是<連續3個連線才開始算,前兩個就是0,0>
    public static readonly SYMBOL_0_ODDS: number[] = [0, 0, 0.75, 1.5, 10];//--symbolId=0
    public static readonly SYMBOL_1_ODDS: number[] = [0, 0, 0.5, 1, 5];//--symbolId=1
    public static readonly SYMBOL_2_ODDS: number[] = [0, 0, 0.4, 1, 3];//--symbolId=2   
    public static readonly SYMBOL_3_ODDS: number[] = [0, 0, 0.3, 0.75, 2];//--symbolId=3
    public static readonly SYMBOL_4_ODDS: number[] = [0, 0, 0.3, 0.6, 2];//--symbolId=4
    public static readonly SYMBOL_5_ODDS: number[] = [0, 0, 0.2, 0.5, 1.25];//--symbolId=5
    public static readonly SYMBOL_6_ODDS: number[] = [0, 0, 0.2, 0.5, 1.25];//--symbolId=6
    public static readonly SYMBOL_7_ODDS: number[] = [0, 0, 0.15, 0.4, 1];//--symbolId=7
    public static readonly SYMBOL_8_ODDS: number[] = [0, 0, 0.15, 0.4, 1];//--symbolId=8
    public static readonly SYMBOL_9_ODDS: number[] = [0, 0, 0, 0, 0];//--symbolId=9(by 老燈說WILD沒賠率)

    public static readonly ODDS_LIST: number[][] = [
        this.SYMBOL_0_ODDS,
        this.SYMBOL_1_ODDS,
        this.SYMBOL_2_ODDS,
        this.SYMBOL_3_ODDS,
        this.SYMBOL_4_ODDS,
        this.SYMBOL_5_ODDS,
        this.SYMBOL_6_ODDS,
        this.SYMBOL_7_ODDS,
        this.SYMBOL_8_ODDS,
        this.SYMBOL_9_ODDS
    ];

    //--連線種類(40線)
    public static readonly PAY_LINE_1: number[] = [0, 4, 8, 12, 16];
    public static readonly PAY_LINE_2: number[] = [1, 5, 9, 13, 17];
    public static readonly PAY_LINE_3: number[] = [2, 6, 10, 14, 18];
    public static readonly PAY_LINE_4: number[] = [3, 7, 11, 15, 19];
    public static readonly PAY_LINE_5: number[] = [0, 5, 8, 13, 16];
    public static readonly PAY_LINE_6: number[] = [1, 6, 9, 14, 17];
    public static readonly PAY_LINE_7: number[] = [2, 7, 10, 15, 18];
    public static readonly PAY_LINE_8: number[] = [1, 4, 9, 12, 17];
    public static readonly PAY_LINE_9: number[] = [2, 5, 10, 13, 18];
    public static readonly PAY_LINE_10: number[] = [3, 6, 11, 14, 19];
    public static readonly PAY_LINE_11: number[] = [0, 4, 9, 12, 16];
    public static readonly PAY_LINE_12: number[] = [1, 5, 10, 13, 17];
    public static readonly PAY_LINE_13: number[] = [2, 6, 11, 14, 18];
    public static readonly PAY_LINE_14: number[] = [1, 5, 8, 13, 17];
    public static readonly PAY_LINE_15: number[] = [2, 6, 9, 14, 18];
    public static readonly PAY_LINE_16: number[] = [3, 7, 10, 15, 19];
    public static readonly PAY_LINE_17: number[] = [0, 5, 9, 13, 16];
    public static readonly PAY_LINE_18: number[] = [1, 6, 10, 14, 17];
    public static readonly PAY_LINE_19: number[] = [2, 7, 11, 15, 18];
    public static readonly PAY_LINE_20: number[] = [1, 4, 8, 12, 17];
    public static readonly PAY_LINE_21: number[] = [2, 5, 9, 13, 18];
    public static readonly PAY_LINE_22: number[] = [3, 6, 10, 14, 19];
    public static readonly PAY_LINE_23: number[] = [0, 5, 10, 13, 16];
    public static readonly PAY_LINE_24: number[] = [1, 6, 11, 14, 17];
    public static readonly PAY_LINE_25: number[] = [2, 5, 8, 13, 18];
    public static readonly PAY_LINE_26: number[] = [3, 6, 9, 14, 19];//
    public static readonly PAY_LINE_27: number[] = [0, 4, 9, 13, 17];
    public static readonly PAY_LINE_28: number[] = [1, 5, 10, 14, 18];
    public static readonly PAY_LINE_29: number[] = [2, 6, 9, 13, 17];
    public static readonly PAY_LINE_30: number[] = [3, 7, 10, 14, 18];
    public static readonly PAY_LINE_31: number[] = [0, 6, 8, 14, 16];
    public static readonly PAY_LINE_32: number[] = [1, 7, 9, 15, 17];
    public static readonly PAY_LINE_33: number[] = [3, 5, 11, 13, 19];
    public static readonly PAY_LINE_34: number[] = [2, 4, 10, 12, 18];
    public static readonly PAY_LINE_35: number[] = [0, 4, 10, 12, 16];
    public static readonly PAY_LINE_36: number[] = [1, 5, 11, 13, 17];
    public static readonly PAY_LINE_37: number[] = [3, 7, 9, 15, 19];
    public static readonly PAY_LINE_38: number[] = [2, 6, 8, 14, 18];
    public static readonly PAY_LINE_39: number[] = [2, 4, 8, 12, 18];
    public static readonly PAY_LINE_40: number[] = [1, 7, 11, 15, 17];

    public static readonly PAY_TABLE: number[][] = [
        this.PAY_LINE_1,
        this.PAY_LINE_2,
        this.PAY_LINE_3,
        this.PAY_LINE_4,
        this.PAY_LINE_5,
        this.PAY_LINE_6,
        this.PAY_LINE_7,
        this.PAY_LINE_8,
        this.PAY_LINE_9,
        this.PAY_LINE_10,
        this.PAY_LINE_11,
        this.PAY_LINE_12,
        this.PAY_LINE_13,
        this.PAY_LINE_14,
        this.PAY_LINE_15,
        this.PAY_LINE_16,
        this.PAY_LINE_17,
        this.PAY_LINE_18,
        this.PAY_LINE_19,
        this.PAY_LINE_20,
        this.PAY_LINE_21,
        this.PAY_LINE_22,
        this.PAY_LINE_23,
        this.PAY_LINE_24,
        this.PAY_LINE_25,
        this.PAY_LINE_26,
        this.PAY_LINE_27,
        this.PAY_LINE_28,
        this.PAY_LINE_29,
        this.PAY_LINE_30,
        this.PAY_LINE_31,
        this.PAY_LINE_32,
        this.PAY_LINE_33,
        this.PAY_LINE_34,
        this.PAY_LINE_35,
        this.PAY_LINE_36,
        this.PAY_LINE_37,
        this.PAY_LINE_38,
        this.PAY_LINE_39,
        this.PAY_LINE_40
    ];

}