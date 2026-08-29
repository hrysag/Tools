import { MegaWaysWinScoreAnalyzer } from 'db://assets/Scripts/GameScripts/BoardAnalysis/MegaWaysWinScoreAnalyzer';
export class AllMachPayNG018 extends MegaWaysWinScoreAnalyzer {

    constructor() {
        super(Game018NGPayConfig.WILD_LIST, Game018NGPayConfig.ODDS_LIST, Game018NGPayConfig.NORMAL_SYMBOL_LIST);
    }

    public getWinData(iconList: number[]): AwardData {

        let totalOdd = 0;
        const dataList: ClientData[] = []
        const matchMap = this.getMegaWaysWinData(iconList, Game018NGPayConfig.REEL_AMOUNT, Game018NGPayConfig.SYMBOL_LENGTH);
        for (let item of matchMap) {

            // 將 Win2DPos 轉換為二維陣列座標
            const convertedWin2DPos = item.OneMatchPos.map(machPos => machPos.map(pos => pos % Game018NGPayConfig.SYMBOL_LENGTH));
            //console.log('checkRowData', convertedWin2DPos);
            //const winData = new ClientData(item.WinSymbolID, item.Odd, item.Pos, item.OneMatchPos);
            //const ogWinData = new ClientData(item.WinSymbolID, item.Odd, item.Pos, item.OneMatchPos);
            //console.log(`OG_第${item.WinSymbolID}個圖示，贏的賠率${item.Odd}，贏的位置${item.Pos}，輪播位置${item.OneMatchPos}，2D位置`);
            const winData = new ClientData(item.WinSymbolID, item.Odd, item.Pos, convertedWin2DPos);
            //console.log(`第${item.WinSymbolID}個圖示，贏的賠率${item.Odd}，贏的位置${item.Pos}，輪播位置${item.OneMatchPos}，2D位置`);
            dataList.push(winData);
            totalOdd = (totalOdd + item.Odd).fixed();//--每一輪中線的個別賠率都在ClientData.WinOdds裡面
        }

        let finalData = new AwardData();
        finalData.totalOdd = totalOdd;
        finalData.dataList = dataList;
        //console.log(`總贏分NG:${totalOdd}`, finalData, matchMap);

        return finalData;
    }
}

export class AllMachPayFG018 extends MegaWaysWinScoreAnalyzer {
    constructor() {
        super(Game018FGPayConfig.WILD_LIST, Game018FGPayConfig.ODDS_LIST, Game018FGPayConfig.NORMAL_SYMBOL_LIST);
    }

    public getWinData(iconList: number[]): AwardData {

        let totalOdd = 0;
        const dataList: ClientData[] = []
        const matchMap = this.getMegaWaysWinData(iconList, Game018FGPayConfig.REEL_AMOUNT, Game018FGPayConfig.SYMBOL_LENGTH);
        for (let item of matchMap) {

            // 將 Win2DPos 轉換為二維陣列座標
            const convertedWin2DPos = item.OneMatchPos.map(machPos => machPos.map(pos => pos % Game018FGPayConfig.SYMBOL_LENGTH));
            //console.log('checkRowData', convertedWin2DPos);
            //const winData = new ClientData(item.WinSymbolID, item.Odd, item.Pos, item.OneMatchPos);
            const winData = new ClientData(item.WinSymbolID, item.Odd, item.Pos, convertedWin2DPos);
            //console.log(`第${item.WinSymbolID}個圖示，贏的賠率${item.Odd}，贏的位置${item.Pos}，輪播位置${item.OneMatchPos}，2D位置`);
            dataList.push(winData);
            totalOdd = (totalOdd + item.Odd).fixed();//--每一輪中線的個別賠率都在ClientData.WinOdds裡面
        }

        let finalData = new AwardData();
        finalData.totalOdd = totalOdd;
        finalData.dataList = dataList;

        return finalData;
    }
}

export class ClientData {
    public readonly WinSymbolID: number = 0;
    public readonly WinOdds: number = 0;
    public readonly WinPos: number[] = [];
    public readonly Win2DPos: number[][] = [];//-陣列索引

    constructor(winSymbolID: number, winOdds: number, winPos: number[], win2DPos: number[][]) {
        this.WinSymbolID = winSymbolID;
        this.WinOdds = winOdds;
        this.WinPos = winPos;
        this.Win2DPos = win2DPos;
    }
}

export class AwardData {
    public totalOdd: number = 0;
    public dataList: ClientData[] = [];

}

//--NG賠率表(阿里巴巴與盜賊首領陣營都用相同的表3*3)
export class Game018NGPayConfig {
    public static readonly REEL_AMOUNT = 3;
    public static readonly SYMBOL_LENGTH = 3;
    public static readonly WILD_LIST: number[] = [6, 7, 8];//--WILD 剪刀石頭布
    public static readonly NORMAL_SYMBOL_LIST: number[] = [0, 1, 2, 3, 4, 5];

    public static readonly SYMBOL_0_ODDS: number[] = [0, 0, 5];//--阿里巴巴/盜賊首領
    public static readonly SYMBOL_1_ODDS: number[] = [0, 0, 3];//--瑪姬娜/強盜
    public static readonly SYMBOL_2_ODDS: number[] = [0, 0, 1];//--黑桃
    public static readonly SYMBOL_3_ODDS: number[] = [0, 0, 0.7];//--愛心
    public static readonly SYMBOL_4_ODDS: number[] = [0, 0, 0.5];//--方塊
    public static readonly SYMBOL_5_ODDS: number[] = [0, 0, 0.3];//--梅花
    public static readonly ODDS_LIST: number[][] = [
        this.SYMBOL_0_ODDS,
        this.SYMBOL_1_ODDS,
        this.SYMBOL_2_ODDS,
        this.SYMBOL_3_ODDS,
        this.SYMBOL_4_ODDS,
        this.SYMBOL_5_ODDS
    ]

}

//--FG賠率表(阿里巴巴與盜賊首領陣營都用相同的表3*6)
export class Game018FGPayConfig {
    public static readonly REEL_AMOUNT = 6;
    public static readonly SYMBOL_LENGTH = 3;
    public static readonly WILD_LIST: number[] = [6, 7, 8];//--WILD 剪刀石頭布
    public static readonly NORMAL_SYMBOL_LIST: number[] = [0, 1, 2, 3, 4, 5];

    public static readonly SYMBOL_0_ODDS: number[] = [0, 0, 5, 6, 9, 13.5];//--阿里巴巴/盜賊首領
    public static readonly SYMBOL_1_ODDS: number[] = [0, 0, 3, 3.6, 5.4, 8.1];//--瑪姬娜/強盜
    public static readonly SYMBOL_2_ODDS: number[] = [0, 0, 1, 1.2, 1.8, 2.7];//--黑桃
    public static readonly SYMBOL_3_ODDS: number[] = [0, 0, 0.7, 0.85, 1.25, 1.9];//--愛心
    public static readonly SYMBOL_4_ODDS: number[] = [0, 0, 0.5, 0.6, 0.9, 1.35];//--方塊
    public static readonly SYMBOL_5_ODDS: number[] = [0, 0, 0.3, 0.35, 0.55, 0.8];//--梅花
    public static readonly ODDS_LIST: number[][] = [
        this.SYMBOL_0_ODDS,
        this.SYMBOL_1_ODDS,
        this.SYMBOL_2_ODDS,
        this.SYMBOL_3_ODDS,
        this.SYMBOL_4_ODDS,
        this.SYMBOL_5_ODDS
    ]

}