/**
 * @author Eric
 * 2025/02/10
 */
import { _decorator, log } from 'cc';
import { DefinitionGameConfigData } from '../DefinitionGameData/DefinitionGameConfigData';
import { AllMachPayNG018 } from './AllMachPay018';
import { AllMachPayFG018 } from './AllMachPay018';
import { AwardData, ClientData } from './AllMachPay018';

const {
    SPECIAL_SYMBOL_LIST,
    FORECAST_FOR_REEL,
    REEL_SYMBOL_AMOUNT,
    BONUS_MULTIPLIER,
    BONUS_MULTIPLIER_REDUCE,
    FORECAST_REEL,
    REEL_AMOUNT,
    //MULTIPLIER,//---四重彩?(第四軸的倍數)
    WILD_LIST

} = DefinitionGameConfigData;

export class MatchInfoForRound {
    public odd: number;//--這條線中獎的賠率
    /**
     * 有可是多維陣列的情況
     * 在重複相同的symbol的情況下,會把相同的symbol的連線資料放在一起
     */
    public matchPos: number[][];
    public winSymbolID: number;//--匹配到的那個symbol id
    public camp: number = -1;

}

export class IconData {
    public iconID: number = -1;
    public camp: number = -1;
}

export class ReelInfo {
    public symbolData: IconData[][] = [];//--盤面資料
    public haveForecast: boolean = false;
}

export class RPSGuessRoundData {
    public camp_L: number = 0;//--阿里(累計結果)
    public camp_R: number = 0;//--盜賊(累計結果)
    public draw: number = 0;//--平局(累計結果)
    public singleResult: number = 0;//--單局的結果
}

export interface IProcessSlotData {
    betValue: number;
    totalOdd: number;//-這個是目前這個資料的總賠率(在FG當中是要乘上multiplier)
    winLine: MatchInfoForRound[];
    reelInfo: ReelInfo;//---一般正常狀態下會存的資料
    guessResult: RPSGuessRoundData;//--猜拳累計結果
    /**
     * 細單:
     * 累積倍數=IProcessSlotData.multiplier
     * (中線)圖示 *IProcessSlotData.betValue*IProcessSlotData.ogTotalOdd*IProcessSlotData.multiplier
     * 
     * 
     */
}

export interface IProcessFGData extends IProcessSlotData {
    multiplier: number;//--每round的倍數(累加)
    ogTotalOdd: number;//--原始的賠率(尚未乘上multiplier)
    roundSingleScore: number;//--單局的總額(金額)
    totalFGRoundScore: number;//--總額(所有局數的總額(累積))
    symbolsToExclude: number[];//---這個是FG盜賊中的排除圖示(不會顯示在盤面上)
}


export class BasicProcessSlotData {

    public reSpinReelInfo: IProcessSlotData[] = [];//--reSpine 這邊有多少就塞多少IProcessSlotData進去
    public freeGameReelInfo: IProcessFGData[] = []; //--freeGame 這邊有多少就塞多少IProcessFGData
    public ngReelInfo: IProcessSlotData;//--NG只會有一個IProcessSlotData
    public allRoundOdds: number = 0;//----這個是目前這個資料的總賠率(NG+FG+reSpine)
    public totalOddsForReSpin: number = 0;//--reSpin的總賠率(有乘上multiplier=1)
    public totalOddsForFG: number = 0;//--fg的總賠率(有乘上multiplier(multiplier只有FG阿里陣營才有))
    public betValue: number = 0;//--default=0
}
export class ProcessSlotDataCore extends BasicProcessSlotData {

    //-AwardData裡面的totalOdd(資料在roundForMach裡面)
    private _ngAllMachPay: AllMachPayNG018;
    private _fgAllMachPay: AllMachPayFG018;
    private _maximumCount: number = 13;//--bonus最大數量
    private _currentBonusCount: number = 0;//--bonus目前的數量
    private _currentNGCards: number[];
    private _currentReSpinCards: number[][];
    private _currentFGCards: number[][];
    private _guessResult: RPSGuessRoundData;

    private _testFGCards: number[][] = [];//--測試用的FG資料(3*6的盤面,目前只會有一個陣營的資料,所以不需要陣營資料)
    private _testNGCards: number[] = [];//--測試用的NG資料(3*3的盤面,目前只會有一個陣營的資料,所以不需要陣營資料)
    private _testReSpinCards: number[][] = [];//--測試用的reSpin資料(3*3的盤面,目前只會有一個陣營的資料,所以不需要陣營資料)
    private _curryBase64Data: string = '';//--for test check

    set testFGCards(value: number[][]) {
        this._testFGCards = value;
    }

    set testNGCards(value: number[]) {
        this._testNGCards = value;
    }

    set testReSpinCards(value: number[][]) {
        this._testReSpinCards = value;
    }
    constructor() {

        super();
        this._ngAllMachPay = new AllMachPayNG018();//3*3
        this._fgAllMachPay = new AllMachPayFG018();//--3*6
    }

    //--20250311測試使用..正是直接就塞整個class進去
    public getCloneData(): BasicProcessSlotData {

        let cloneData: BasicProcessSlotData = new BasicProcessSlotData();

        cloneData.betValue = this.betValue;
        const ary2d: number[][] = this.get2DArray(this._currentNGCards);
        const ngData = this.getNgCardsData(this._currentNGCards, ary2d);
        cloneData.ngReelInfo = ngData.ngReelInfo;
        //--注單要使用的
        cloneData.allRoundOdds = this.getAfterCalculate(cloneData.allRoundOdds, ngData.roundTotalOdd, 'add');

        let fgCampData = -1;
        if (ngData.forecast) {
            //--找出進入FG的陣營
            fgCampData = this.getStartCampToFG(ary2d);
            if (fgCampData != -1) {
                //--有猜拳的情況下,需要塞回第一把(開啟陣營的猜拳勝負資料) 
                const singleResult = this.getStartCampToFG(ary2d);
                let singleResult_draw = 0;//--平局(累計結果)
                let singleResult_campL = 0;//--阿里(累計結果)
                let singleResult_campR = 0;//--盜賊(累計結果)
                if (singleResult == -1) {
                    singleResult_draw++;
                } else if (singleResult == 0) {
                    singleResult_campL++;
                } else if (singleResult == 1) {
                    singleResult_campR++;
                }
                this._guessResult = {
                    camp_L: singleResult_campL,
                    camp_R: singleResult_campR,
                    draw: singleResult_draw,
                    singleResult: singleResult
                }
                cloneData.ngReelInfo.guessResult = this._guessResult;
            }
        }

        const reSpinData: { IProcessData: IProcessSlotData[], RSTotalOdds: number } = this.getReSpinCardsData(this._currentReSpinCards);
        cloneData.reSpinReelInfo = reSpinData.IProcessData;
        cloneData.allRoundOdds = this.getAfterCalculate(cloneData.allRoundOdds, reSpinData.RSTotalOdds, 'add');
        cloneData.totalOddsForReSpin = reSpinData.RSTotalOdds;

        const fgData: { IProcessData: IProcessFGData[], FGTotalOdds: number } = this.getFgCardsData(this._currentFGCards, fgCampData);
        cloneData.freeGameReelInfo = fgData.IProcessData;
        cloneData.allRoundOdds = this.getAfterCalculate(cloneData.allRoundOdds, fgData.FGTotalOdds, 'add');
        cloneData.totalOddsForFG = fgData.FGTotalOdds;//--這是累加後的總數量(每一局的賠率* multiplier的總累加)

        console.log('check_testPayRound', this._curryBase64Data, cloneData);
        return cloneData;
    }

    //-this._currentNGCards塞進來
    private getNgCardsData(cards: number[], ary2d: number[][]): { ngReelInfo: IProcessSlotData, roundTotalOdd: number, forecast: boolean } {
        const ary2dIconData: IconData[][] = this.getIconDataTo2DArray(cards);
        const thisNGRoundData = this.getNgGameRoundData(cards);
        const isForecast = this.checkHaveForecast(ary2d);
        let ngReelInfo = {
            betValue: this.betValue,
            totalOdd: thisNGRoundData.roundTotalOdd,
            winLine: thisNGRoundData.match,
            reelInfo: {
                symbolData: ary2dIconData,
                haveForecast: isForecast
            },
            guessResult: null
        };

        return { ngReelInfo: ngReelInfo, roundTotalOdd: thisNGRoundData.roundTotalOdd, forecast: isForecast };

    }

    private getFgCardsData(cards: number[][], campValue: number): { IProcessData: IProcessFGData[], FGTotalOdds: number } {

        let returnData: IProcessFGData[] = [];
        let returnFgTotalOdds: number = 0;//--每局所獲得的賠率* multiplier的累加
        let totalFGRoundScores: number = 0;//--每局的總額(賠率*下注金額)
        const arySymbolsToExclude: number[] = [];
        for (let cardData of cards) {
            const ary2d: number[][] = this.get2DArray(cardData);
            const ary2dIconData: IconData[][] = this.getIconDataTo2DArray(cardData, campValue);
            this.getRoundForCountBonus(cardData);//--計算每一輪bonus的數量
            const reelInfo = {
                symbolData: ary2dIconData,
                haveForecast: false
            };
            const roundData = this.getFgGameRoundData(cardData, campValue);
            const winLine = roundData.match;
            const roundTotalOdd = roundData.roundTotalOdd;
            const multiplier = this.getMultiplierData(campValue);
            const roundMultiplier = (campValue == 0) ? multiplier : 1;
            const oddsWithMultiplier = this.getAfterCalculate(roundTotalOdd, roundMultiplier, 'mul');
            const currentRoundScore = this.getAfterCalculate(this.betValue, oddsWithMultiplier, 'mul');

            totalFGRoundScores = this.getAfterCalculate(totalFGRoundScores, currentRoundScore, 'add');
            returnFgTotalOdds = this.getAfterCalculate(returnFgTotalOdds, oddsWithMultiplier, 'add');
            let aryCurrentSymbolsToExclude: number[] = [];
            aryCurrentSymbolsToExclude = [...arySymbolsToExclude];
            if (campValue == 1) {
                const excludeSymbol = this.getCamp2MultiplierForReduce(multiplier);
                if (excludeSymbol != -1 && !arySymbolsToExclude.includes(excludeSymbol)) {
                    //--這個是FG盜賊中的排除圖示(不會顯示在盤面上)
                    arySymbolsToExclude.push(excludeSymbol);
                }
            }

            /**
             *  multiplier: number;//--每round的倍數(累加)
                ogTotalOdd: number;//--原始的賠率(尚未乘上multiplier)
                roundSingleScore: number;//--單局的總額(金額)
                totalFGRoundScore: number;//--總額(所有局數的總額(累積))
             */
            returnData.push(
                {
                    betValue: this.betValue,
                    totalOdd: oddsWithMultiplier,//--已經乘上所獲得的bonus倍率
                    winLine: winLine,
                    reelInfo: reelInfo,
                    guessResult: null,//--FG沒有猜拳
                    roundSingleScore: currentRoundScore,
                    totalFGRoundScore: totalFGRoundScores,
                    multiplier: roundMultiplier,
                    ogTotalOdd: roundTotalOdd,//-尚未乘上multiplier
                    symbolsToExclude: aryCurrentSymbolsToExclude//--這個是FG盜賊中的排除圖示(不會顯示在盤面上)
                });
        }
        return { IProcessData: returnData, FGTotalOdds: returnFgTotalOdds };
    }




    private getRoundForCountBonus(cards: number[]): number {
        let singleRoundCount: number = 0;
        for (let card of cards) {
            if (SPECIAL_SYMBOL_LIST.includes(card)) {
                this._currentBonusCount++;
                singleRoundCount++;
            }
        }
        if (this._currentBonusCount > this._maximumCount) {
            this._currentBonusCount = this._maximumCount;
        }
        if (singleRoundCount > this._maximumCount) {
            singleRoundCount = this._maximumCount
        }
        return singleRoundCount;
    }

    private getMultiplierData(camp: number): number {
        /*
        if (camp == 1 || camp == -1) {
            return 1;
        }*/
        let multiplier: number | undefined = undefined;
        let maxKey: number = -1;// 找到小於等於 targetCount 的最大鍵
        for (const key in BONUS_MULTIPLIER) {
            const numKey: number = parseInt(key);
            if (numKey <= this._currentBonusCount && numKey > maxKey) {
                maxKey = numKey;
                multiplier = BONUS_MULTIPLIER[numKey];
            }
        }
        if (multiplier == undefined) {
            multiplier = 1;
        }
        return multiplier;
    }

    public getCamp2MultiplierForReduce(currentMultiplier: number): number {

        if (BONUS_MULTIPLIER_REDUCE[currentMultiplier]) {
            return BONUS_MULTIPLIER_REDUCE[currentMultiplier];
        } else {
            return -1;
        }
    }


    //--產生reSpin的資料
    private getReSpinCardsData(cards: number[][]): { IProcessData: IProcessSlotData[], RSTotalOdds: number } {

        let returnData: IProcessSlotData[] = [];
        let returnTotalOdds: number = 0;
        let singleResult_campL: number = 0;//--阿里(累計結果)
        let singleResult_campR: number = 0;//--盜賊(累計結果) 
        let singleResult_draw: number = 0;//--平局(累計結果)
        let singleResult: number = 0;//----單局的結果(不累計)
        if (cards.length > 0 && this._guessResult) {
            singleResult_campL = this._guessResult.camp_L;
            singleResult_campR = this._guessResult.camp_R;
            singleResult_draw = this._guessResult.draw;
        }

        for (let cardData of cards) {
            const ary2d: number[][] = this.get2DArray(cardData);
            const ary2dIconData: IconData[][] = this.getIconDataTo2DArray(cardData);

            //const winLine = this.getNgGameRoundData(cardData);
            const roundData = this.getNgGameRoundData(cardData);
            const winLine = roundData.match;
            const roundTotalOdd = roundData.roundTotalOdd;
            singleResult = this.getStartCampToFG(ary2d);

            if (singleResult == -1) {
                singleResult_draw++;
            } else if (singleResult == 0) {
                singleResult_campL++;
            } else if (singleResult == 1) {
                singleResult_campR++;
            }

            returnTotalOdds = this.getAfterCalculate(returnTotalOdds, roundTotalOdd, 'add');;
            const reelInfo = {
                //symbolData: ary2d,
                symbolData: ary2dIconData,
                haveForecast: false
            };
            returnData.push(
                {
                    betValue: this.betValue,
                    totalOdd: roundTotalOdd,
                    winLine: winLine,
                    reelInfo: reelInfo,
                    //multiplier: 0,
                    guessResult: {
                        camp_L: singleResult_campL,
                        camp_R: singleResult_campR,
                        draw: singleResult_draw,
                        singleResult: singleResult
                    },
                    //campData: this.campData,
                    //ogTotalOdd: roundTotalOdd//-尚未乘上multiplier
                });
        }
        return { IProcessData: returnData, RSTotalOdds: returnTotalOdds };
    }

    private getFgGameRoundData(cards: number[], camp: number): { roundTotalOdd: number, match: MatchInfoForRound[] } {

        let match = [];
        let roundForFg = this._fgAllMachPay.getWinData(cards);
        let fgRoundData: MatchInfoForRound[];
        let roundTotalOdd: number = 0;

        if (roundForFg.totalOdd > 0 && roundForFg.dataList.length > 0) {
            //roundTotalOdd += roundForFg.totalOdd;--不能直接加總在NG的totalOdd上面(FG/reSpine的總賠率要分別塞資料)
            roundTotalOdd = this.getAfterCalculate(roundTotalOdd, roundForFg.totalOdd, 'add');
            //--這是3*6的盤面
            fgRoundData = this.getWinLineData(roundForFg, camp);
            match.push(...fgRoundData);
        }

        return { roundTotalOdd: roundTotalOdd, match: match };

    }

    private getNgGameRoundData(cards: number[]): { roundTotalOdd: number, match: MatchInfoForRound[] } {

        let match = [];
        let firstRound: number[] = cards.slice(0, 9);
        let secondRound: number[] = cards.slice(-9);
        let roundForMach_first = this._ngAllMachPay.getWinData(firstRound);
        let roundForMach_second = this._ngAllMachPay.getWinData(secondRound);
        let roundTotalOdd: number = 0;

        let firstRoundData: MatchInfoForRound[];
        if (roundForMach_first.totalOdd > 0 && roundForMach_first.dataList.length > 0) {

            //this.totalOdds += roundForMach_first.totalOdd;
            //roundTotalOdd += roundForMach_first.totalOdd;
            roundTotalOdd = this.getAfterCalculate(roundTotalOdd, roundForMach_first.totalOdd, 'add');
            //--這是3*3的盤面
            //cloneData.winLine = [[0, 0, 0], [0, 1, 2]];
            firstRoundData = this.getWinLineData(roundForMach_first, 0);
            match.push(...firstRoundData);
        }


        let secondRoundData: MatchInfoForRound[];
        if (roundForMach_second.totalOdd > 0 && roundForMach_second.dataList.length > 0) {

            //this.totalOdds += roundForMach_second.totalOdd;
            //roundTotalOdd += roundForMach_second.totalOdd;
            roundTotalOdd = this.getAfterCalculate(roundTotalOdd, roundForMach_second.totalOdd, 'add');
            //--這是3*3的盤面
            //cloneData.winLine = [[0, 0, 0], [0, 1, 2]];
            secondRoundData = this.getWinLineData(roundForMach_second, 1);
            match.push(...secondRoundData);
        }

        return { roundTotalOdd: roundTotalOdd, match: match };
    }

    private getWinLineData(aw: AwardData, camp: number): MatchInfoForRound[] {

        let returnAry: MatchInfoForRound[] = [];
        let aryTargetData: ClientData[] = aw.dataList;

        for (let clientData of aryTargetData) {
            let matchInfo: MatchInfoForRound = new MatchInfoForRound();
            matchInfo.odd = clientData.WinOdds;
            matchInfo.matchPos = [...clientData.Win2DPos];
            matchInfo.winSymbolID = clientData.WinSymbolID;
            matchInfo.camp = camp;
            returnAry.push(matchInfo);
        }

        return returnAry;
    }


    public resetRoundData(): void {
        this.betValue = 0;
        this.allRoundOdds = 0;
        this.totalOddsForReSpin = 0;
        this.totalOddsForFG = 0;//--記在FG自己的資料裡面totalOdd
        this._currentNGCards = [];
        this._currentReSpinCards = [];
        this._currentFGCards = [];
        this._currentBonusCount = 0;
        //--reSpine 這邊有多少就塞多少IProcessSlotData進去
        this.reSpinReelInfo = [];
        //--freeGame 這邊有多少就塞多少IProcessSlot
        this.freeGameReelInfo = [];
        this.ngReelInfo = null;
        this._guessResult = null;
        this._curryBase64Data = '';//--for test check
    }

    public setNewRoundData(slotData: string, betValue: number): void {
        this._curryBase64Data = slotData;//--for test check
        this.betValue = betValue;
        //--number[]將牌面換成數字
        let serverResult: number[] = this.getBoardResult(slotData);
        let slicedData: number[][] = this.sliceAryToCards(serverResult, 18);

        this._currentNGCards = slicedData.shift();
        const otherCards: { reSpinData: number[][], fgData: number[][] } = this.getReSpinData(slicedData);
        this._currentReSpinCards = otherCards.reSpinData;
        this._currentFGCards = otherCards.fgData;
        //--for test

        if (this._testFGCards.length > 0) {
            this._currentFGCards = this._testFGCards;
        }

        if (this._testNGCards.length > 0) {
            this._currentNGCards = this._testNGCards;
        }

        if (this._testReSpinCards.length > 0) {
            this._currentReSpinCards = this._testReSpinCards;
        }
        console.log('setNewRoundData', this._curryBase64Data, this._currentNGCards, this._currentReSpinCards, this._currentFGCards);
        //--20250310新增
        //--reSpine 這邊有多少就塞多少IProcessSlotData進去
        this.ngReelInfo = null;
        this.reSpinReelInfo = [];
        //--freeGame 這邊有多少就塞多少IProcessSlot
        this.freeGameReelInfo = [];
    }


    private getBoardResult(base64Data: string): number[] {
        const uint8Array: Uint8Array = this.base64ToUint8Array(base64Data); // 解碼 Base64
        const unpackedData: number[] = this.unpack4BitPairs(uint8Array); // 解壓縮 4 位元數值對
        return unpackedData;
    }

    private base64ToUint8Array(base64String: string): Uint8Array {
        const binaryString = atob(base64String); // 解碼 Base64
        const length = binaryString.length;
        const bytes = new Uint8Array(length);

        for (let i = 0; i < length; i++) {
            bytes[i] = binaryString.charCodeAt(i); // 將字元轉換為位元組
        }

        return bytes;
    }

    private unpack4BitPairs(binaryBuffer: Uint8Array): number[] {
        const unpackedValues: number[] = [];
        //--ps server的資料放法:2個4bit的數字放在一起變成1個byte
        //--n和n+1(低位放前面)
        for (const byte of binaryBuffer) {
            const highNibble: number = (byte >> 4) & 0x0F; // 提取高 4 位元
            const lowNibble: number = byte & 0x0F;          // 提取低 4 位元

            unpackedValues.push(lowNibble);
            unpackedValues.push(highNibble);
        }

        return unpackedValues;
    }

    private sliceAryToCards(cards: number[], chunkSize: number): number[][] {
        const result: number[][] = [];
        let currentIndex = 0;
        while (currentIndex < cards.length) {
            const chunk = cards.slice(currentIndex, currentIndex + chunkSize);
            result.push(chunk);
            currentIndex += chunkSize;
        }

        return result;
    }

    private getReSpinData(cards: number[][]): { reSpinData: number[][], fgData: number[][] } {
        const result_reSpin: number[][] = [];
        const result_fg: number[][] = [];

        for (const list of cards) {
            const target_1List = list.slice(3, 6); // 起始索引 3，長度 3
            const target_2List = list.slice(list.length - 6, list.length - 3); // 從倒數第六個開始，長度3
            const hasWild_1 = target_1List.some(item => WILD_LIST.includes(item));
            const hasWild_2 = target_2List.some(item => WILD_LIST.includes(item));
            if (hasWild_1 && hasWild_2) {
                result_reSpin.push(list);
            } else {
                result_fg.push(list);
            }
        }
        return { reSpinData: result_reSpin, fgData: result_fg };
    }

    private checkHaveForecast(cards: number[][]): boolean {

        return cards[FORECAST_FOR_REEL].some((item) => WILD_LIST.includes(item));

    }


    //--找出哪個陣營發動FG(wild猜拳第一把的贏家)
    private getStartCampToFG(cards: number[][]): number {
        if (cards[FORECAST_REEL].some((item) => WILD_LIST.includes(item))) {
            const L = this.getWildIconId(cards, FORECAST_FOR_REEL);
            const R = this.getWildIconId(cards, FORECAST_REEL);
            if (L != -1 && R != -1) {
                //-6=剪刀,7=石頭,8=布
                if (L === R) {
                    return -1; // 平手
                } else if (
                    (L === 6 && R === 8) ||
                    (L === 7 && R === 6) ||
                    (L === 8 && R === 7)
                ) {
                    return 0; // L 贏
                } else {
                    return 1; // R 贏
                }
            }

        } else {
            return -1;
        }
    }

    private getWildIconId(cards: number[][], reelIndex: number): number {
        const targetReel = cards[reelIndex];
        const foundWildCard = targetReel.find(element => WILD_LIST.includes(element));
        return foundWildCard !== undefined ? foundWildCard : -1;
    }

    private getIconDataTo2DArray(card: number[], camp?: number): IconData[][] {
        const aryIcon2ds: IconData[][] = [];
        for (let i: number = 0; i < REEL_AMOUNT; i++) {
            const row = [];
            for (let j: number = 0; j < REEL_SYMBOL_AMOUNT; j++) {
                const campData = (camp !== undefined) ? camp : this.getNGCampData(i);
                row.push({ iconID: card[i * REEL_SYMBOL_AMOUNT + j], camp: campData });
            }
            aryIcon2ds.push(row);
        }
        return aryIcon2ds;
    }

    private get2DArray(card: number[]): number[][] {

        const ary2d: number[][] = [];

        for (let i: number = 0; i < REEL_AMOUNT; i++) {
            const row = [];
            for (let j: number = 0; j < REEL_SYMBOL_AMOUNT; j++) {
                row.push(card[i * REEL_SYMBOL_AMOUNT + j]);
            }
            ary2d.push(row);
        }

        return ary2d;
    }

    private getNGCampData(reelIndex: number): number {
        return reelIndex <= 2 ? 0 : 1;
    }

    private getAfterCalculate(num1: number, num2: number, type: string): number {
        const decimal = 2;
        const getFixed = (num, decimal) => {
            let regex = new RegExp(`\\.([\\d]{${decimal}})`)
            let format = num.toString().padEnd(decimal + num.toString().length, '0')
            return format.replace(regex, '$1.') * 1
        }
        let result: number = 0;
        switch (type) {
            case 'add':
                result = Number((getFixed(num1, decimal) + getFixed(num2, decimal))) / 100;
                break;
            case 'sub':
                result = Number((getFixed(num1, decimal) - getFixed(num2, decimal))) / 100;
                break;
            case 'mul':
                result = Number((getFixed(num1, decimal) * getFixed(num2, decimal))) / 10000;
                break;
            case 'div':
                result = Number(getFixed(num1, decimal) / getFixed(num2, decimal));
                break;
            default:
                break;
        }
        return result;
    }

}
