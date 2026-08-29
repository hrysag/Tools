import {
    BinaryBuffer,
    Utility,
    IntArray,
    CalculatePayTable016,
    AwardData,
    ClientData
} from '../ReferencePath';
import {
    IMatchInfoForRound,
    IMachPosInfo,
    IProcessSlotData,
    IMovementGridData,
    Direction,
    IMatchWildGroupResult,
    IRoundDataReelInfo,
    BasicProcessSlotData
} from '../MyUtils/BasicProcessServerData/IProcessSlotData';

//--這個比較特殊一點要解構的方式抽出config裡面的變數就要單獨出來免得造成循環引用
import { DefinitionGameConfigData } from '../DefinitionGameData1016/GameConfigInstance';

const {
    REEL_AMOUNT,
    REEL_SYMBOL_AMOUNT,
    WILD_LIST,
    FORECAST_CONDITION_REEL,
    FORECAST_REEL,
    SCATTER_LIST
} = DefinitionGameConfigData;
//--scatter換算FG的次數
const FG_TIMES_FOR_SCATTER: { [key: number]: number } =
{
    3: 7,
    4: 9,
    5: 11
}


/*
export class BasicProcessSlotData {
    public reSpinReelInfo: IProcessSlotData[] = [];//--reSpine 這邊有多少就塞多少IProcessSlotData進去
    public freeGameReelInfo: IProcessSlotData[] = []; //--freeGame 這邊有多少就塞多少IProcessFGData
    public ngReelInfo: IProcessSlotData;//--NG只會有一個IProcessSlotData
    public allRoundOdds: number = 0;//----這個是目前這個資料的總賠率(NG+FG+reSpine)
    public totalOddsForReSpin: number = 0;//--reSpin的總賠率
    public totalOddsForFG: number = 0;//--fg的總賠率
    public betValue: number = 0;//--default=0
}*/


export class ProcessSlotDataCore extends BasicProcessSlotData {

    private _currentBonusCount: number = 0;//--bonus目前的數量
    private _currentScatterCount: number = 0;//--scatter目前的數量
    private _currentNGCardsInfo: IMovementGridData[];//--ng的盤面資料(parse後拆完盤面資料2ds)
    private _currentReSpinCardsInfo: IMovementGridData[];//--reSpin的盤面資料(parse後拆完盤面資料2ds)
    private _currentFGCardsInfo: IMovementGridData[];//--FG的盤面資料(parse後拆完盤面資料2ds)
    private _currentBase64Data: string = '';//--for test check
    private _cloneOgDataIntAry: IntArray;
    private _calculatePayTable016: CalculatePayTable016;
    private _lockedWildReelSet: Set<number> = new Set();//--鎖定wild的軸不在列入fg獲取的累進中

    constructor() {
        super();
        this._calculatePayTable016 = new CalculatePayTable016();
    }

    //--外部拿資料透過這裡
    public getCloneData(): BasicProcessSlotData {

        const cloneData: BasicProcessSlotData = new BasicProcessSlotData();
        cloneData.betValue = this.betValue;
        //--test ngData--
        const ngData: IProcessSlotData[] = this.getGameRoundData(this._currentNGCardsInfo, false);
        const reSpineData: IProcessSlotData[] = this.getGameRoundData(this._currentReSpinCardsInfo, false);
        const fgData: IProcessSlotData[] = this.getGameRoundData(this._currentFGCardsInfo, true);
        //--calculate total odds
        const totalOddsForNG: number = this.getTotalOddsForRound(ngData);
        const totalOddsForReSpin: number = this.getTotalOddsForRound(reSpineData);
        const totalOddsForFG: number = this.getTotalOddsForRound(fgData);
        const totalOdds: number = (totalOddsForNG + totalOddsForReSpin + totalOddsForFG).fixed();

        cloneData.allRoundOdds = totalOdds;
        cloneData.totalOddsForReSpin = totalOddsForReSpin;
        cloneData.totalOddsForFG = totalOddsForFG;
        cloneData.ngReelInfo = ngData[0];
        cloneData.reSpinReelInfo = reSpineData;
        cloneData.freeGameReelInfo = fgData;

        console.log('checkCloneData:', cloneData, this._currentBase64Data);

        return cloneData;
    }

    private getGameRoundData(target: IMovementGridData[], isFreeGame: boolean): IProcessSlotData[] {

        const gameRoundData: IProcessSlotData[] = [];

        //let accumulatedScore = 0;//--累積的分數
        let scatterCount = 0;//----scatter的數量(總數量)
        let fgCount = 0;//--freeGame的次數(總數量)

        for (let i: number = 0; i < target.length; i++) {

            const targetRoundCardsInfo: IMovementGridData = target[i];
            let checkTarget1ds: number[] = targetRoundCardsInfo.symbolData1ds;
            let checkTarget2ds: number[][] = targetRoundCardsInfo.symbolData2ds;
            if (targetRoundCardsInfo.wildCount > 0) {
                checkTarget1ds = targetRoundCardsInfo.afterMovedSymbolData1ds;
                checkTarget2ds = targetRoundCardsInfo.afterMovedSymbolData2ds;
            }

            const awardData = this._calculatePayTable016.getWindData(checkTarget1ds);
            //console.log('Game Round Award Data:', awardData);
            let matchInfo: IMatchInfoForRound[] = [];
            //--都要拿移動後的盤面做算分
            if (awardData.totalOdd > 0 && awardData.dataList.length > 0) {
                const target1ds = (targetRoundCardsInfo.wildCount > 0) ? targetRoundCardsInfo.afterMovedSymbolData1ds : targetRoundCardsInfo.symbolData1ds;
                matchInfo = this.getWinLineData(awardData, target1ds);
            }
            //accumulatedScore += (awardData.totalOdd).fixed();
            const gameRoundReelInfo: IProcessSlotData = this.createNewEmptyProcessSlotData();
            const haveForecast = (!isFreeGame) ? this.checkHaveForecast(targetRoundCardsInfo.symbolData2ds) : false;
            this._lockedWildReelSet.clear(); //--清除鎖定wild的軸集合(每次都要清除)
            //--注單要用的
            const beginningWholeWildCount = this.getWholeConsecutiveWildCount(targetRoundCardsInfo.symbolData2ds);
            //--這個是確實新增的數量
            const afterMovedWholeWildCount = (targetRoundCardsInfo.wildCount > 0) ? this.getWholeConsecutiveWildCount(targetRoundCardsInfo.afterMovedSymbolData2ds) : 0;
            //const afterMovedReSpinCount = (afterMovedWholeWildCount >= 2) ? afterMovedWholeWildCount : 0;

            let beginningReSpinCount = 0;//--fg當中就不是用reSpin(fg當中使用fgCount)
            let afterMovedReSpinCount = 0;//--fg當中就不是用reSpin(fg當中使用fgCount)
            let scatterCountTotal = 0;//--每一輪的scatter數量(這是整個盤面的總量(該局))
            let currentScatterCount = 0;//--當前輪的scatter數量(用來計算新增的scatter數量)
            let fgCountTotal = 0;//---fg的總數量(這是整個盤面的總量(該局))
            let currentFgCount = 0;//--當前輪的fg數量(用來計算新增的fg數量)

            if (!isFreeGame) {
                //--摘取reSpin和FG的次數
                //--要兩個整輪的wild才算啟動reSpin(NG當中是這樣,只有在reSpin(中整輪才會算reSpin+1)/FG(當中整輪會算fg+1))

                beginningReSpinCount = (beginningWholeWildCount >= 2) ? beginningWholeWildCount : 0;
                afterMovedReSpinCount = (afterMovedWholeWildCount >= 2) ? afterMovedWholeWildCount : 0;
                //--摘取FG的資料
                //-1.確認是否有連續3軸相連的scatter
                const checkScatterCondition = this.checkScatterCondition(checkTarget2ds, SCATTER_LIST[0]);
                //-2.確認是否有連續3軸相連的wild+scatter(混合型)
                const checkMixedCondition = this.checkMixedScatterOrWild(checkTarget2ds, SCATTER_LIST[0], WILD_LIST[0]);
                //-上述條件滿足一個即可開啟FG(這是整個盤面的總數量),
                fgCountTotal = (checkScatterCondition || checkMixedCondition) ? this.getFgTimesWithScatterAndWild(checkTarget2ds) : 0;
                //-與前一次相減取得當前總數
                currentFgCount = (fgCount > 0) ? fgCountTotal - fgCount : fgCountTotal;
                //-如果有FG的話就要計算scatter的次數(這是總數量)
                scatterCountTotal = (fgCountTotal > 0) ? this.getScatterCountWithScatterAndWild(checkTarget2ds) : 0;
                //-與前一次總數量相減取得當前新增數量
                currentScatterCount = (scatterCount > 0) ? scatterCountTotal - scatterCount : scatterCountTotal;

            } else {
                //--整輪wild的數量=增加幾局FG
                fgCountTotal = beginningWholeWildCount + afterMovedWholeWildCount;//--總wild數量(當前這局)
                currentFgCount = (fgCount > 0) ? fgCountTotal - fgCount : fgCountTotal;//---當前新增的wild數量(這一輪)
            }


            targetRoundCardsInfo.haveForecast = haveForecast;
            gameRoundReelInfo.betValue = this.betValue;
            //gameRoundReelInfo.accumulatedScore = accumulatedScore;
            gameRoundReelInfo.totalOdd = awardData.totalOdd;
            gameRoundReelInfo.winLine = matchInfo;
            gameRoundReelInfo.reelInfo = targetRoundCardsInfo;//--這邊是盤面資料
            gameRoundReelInfo.beginningWholeWildCount = beginningWholeWildCount;
            gameRoundReelInfo.beginningReSpinCount = beginningReSpinCount;
            gameRoundReelInfo.afterMovedWholeWildCount = afterMovedWholeWildCount;
            gameRoundReelInfo.afterMovedReSpinCount = afterMovedReSpinCount;
            gameRoundReelInfo.scatterCount = scatterCount;//--結至前一輪的總數量
            gameRoundReelInfo.scatterCountForNew = currentScatterCount;//-該輪當前獲得的scatter數量
            gameRoundReelInfo.freeGameCount = fgCount;//--結至前一輪的總次數
            gameRoundReelInfo.freeGameCountForNew = currentFgCount;//-該輪當前獲得的fg次數

            gameRoundData.push(gameRoundReelInfo);
            //countWholeWild += afterMovedWholeWildCount; //--累加整輪wild的數量
            scatterCount = scatterCountTotal; //--累加scatter的數量(總數量)
            fgCount = fgCountTotal; //--累加fg的數量(總數量)
        }

        return gameRoundData;
    }


    private getTotalOddsForRound(targetRounds: IProcessSlotData[]): number {

        let totalOdds = 0;
        for (let item of targetRounds) {
            totalOdds = (totalOdds + item.totalOdd).fixed(); //--累加每一局的賠率
        }
        return totalOdds;
    }

    private getScatterCountForSingleRound(): number {
        return 0;
    }

    private createNewEmptyProcessSlotData(): IProcessSlotData {
        return {
            betValue: 0,
            totalOdd: 0,
            //accumulatedScore: 0,
            winLine: [],
            scatterCount: 0,
            scatterCountForNew: 0,
            beginningWholeWildCount: 0,
            beginningReSpinCount: 0,
            afterMovedWholeWildCount: 0,
            afterMovedReSpinCount: 0,
            freeGameCount: 0,
            freeGameCountForNew: 0,
            reelInfo: null
        };
    }

    private getWinLineData(aw: AwardData, card1ds: number[]): IMatchInfoForRound[] {

        const returnAry: IMatchInfoForRound[] = [];
        const aryTargetData: ClientData[] = aw.dataList;
        for (let clientData of aryTargetData) {
            const matchInfo: IMatchInfoForRound = {
                winLineID: clientData.WinLineID,
                odd: clientData.WinOdds,
                matchPos: this.getMachPosInfo(clientData, card1ds),
                winSymbolID: clientData.WinSymbolID,
                isWild: this.checkIsWildExist(card1ds, clientData.WinPos)
            };
            returnAry.push(matchInfo);
        }

        return returnAry;
    }

    private getMachPosInfo(iconData: ClientData, card1ds: number[]): IMachPosInfo[] {

        const machPosInfoList: IMachPosInfo[] = [];
        const targetWinPos = iconData.WinPos;

        for (let i: number = 0; i < targetWinPos.length; i++) {
            //const item = iconData[i];
            const pos = targetWinPos[i];//--一維陣列的位置
            const reelIndex2ds = Math.floor(pos / REEL_SYMBOL_AMOUNT);//--reel的indexREEL_AMOUNT
            const symbolIndex = pos % REEL_SYMBOL_AMOUNT;//--圖示在reel上的位置REEL_SYMBOL_AMOUNT
            const machPosInfo: IMachPosInfo = {
                realSymbolID: card1ds[pos], //--圖示id(真實的盤面圖片)
                reelIndex: reelIndex2ds,
                iconIndex: symbolIndex
            };
            machPosInfoList.push(machPosInfo);
        }
        return machPosInfoList;
    }

    //--檢查連線的牌組當中是否有wild去取代的(表演需要使用)
    private checkIsWildExist(card1ds: number[], winLine: number[]): boolean {

        for (let item of winLine) {
            if (WILD_LIST.includes(card1ds[item])) {
                return true;
            }
        }
        return false;
    }

    private checkHaveForecast(cards: number[][]): boolean {
        return cards[FORECAST_CONDITION_REEL].some((item) => WILD_LIST.includes(item));
    }

    private getWildInReel(reel: number[], compareTarget: number): number[] {

        const hasWild = [];
        for (let i = 0; i < reel.length; i++) {
            if (reel[i] === compareTarget) {
                hasWild.push(i);
            }
        }
        return hasWild;
    }

    //--檢查wild相連的方向性(注單和gameClient要用到)
    /**
     * 檢查wild相連的索引與相連起始的方向性(注單和gameClient要用到)
     * 取得顯示wild的起始方向(腳開始/頭開始)
     * @param cards 盤面資料
     * @param compareTarget 比較目標
     * @returns 
     */
    private getSlotReelDirectionWithWild(cards: number[][], compareTarget: number): IMatchWildGroupResult[] {

        const result: IMatchWildGroupResult[] = [];

        for (let reelIndex = 0; reelIndex < cards.length; reelIndex++) {
            const reel = cards[reelIndex];
            const matchedIndices = this.getWildInReel(reel, compareTarget);

            if (matchedIndices.length === 0) continue;
            //--整軸就不在處理
            if (matchedIndices.length === reel.length) {
                result.push({
                    reelIndex,
                    groupIndex: 0,
                    matchIndices: matchedIndices,
                    direction: Direction.UPWARD,
                    startIndex: 0
                });
                continue; // 不再進行後續分組
            }

            const continuousGroups: number[][] = [];
            let currentGroup: number[] = [];

            for (let i = 0; i < matchedIndices.length; i++) {

                const current = matchedIndices[i];
                const previous = matchedIndices[i - 1];

                const isFirst = i === 0;
                const isConsecutive = !isFirst && current === previous + 1;

                if (isFirst || isConsecutive) {
                    currentGroup.push(current);
                } else {
                    continuousGroups.push(currentGroup);
                    currentGroup = [current];
                }
            }

            if (currentGroup.length > 0) {
                continuousGroups.push(currentGroup);
            }

            for (let groupIndex = 0; groupIndex < continuousGroups.length; groupIndex++) {
                const group = continuousGroups[groupIndex];
                const first = group[0];
                const last = group[group.length - 1];
                let direction: Direction = Direction.UNKNOWN;

                if (group.length === 1) {
                    if (first === 0) direction = Direction.UPWARD;//頂端(下往上)
                    else if (first === reel.length - 1) direction = Direction.DOWNWARD; // 底部(上往下)
                } else {

                    if (first === 0) direction = Direction.UPWARD;// 起始為最上(下往上)
                    else if (last === reel.length - 1) direction = Direction.DOWNWARD; // 結尾為最下(上往下)
                }

                if (direction !== Direction.UNKNOWN) {
                    const startIndex = direction === Direction.UPWARD ? last : first;
                    result.push({
                        reelIndex,
                        groupIndex,
                        matchIndices: group,
                        direction,
                        startIndex
                    });

                }
            }

        }

        return result;
    }

    /**
     * 這是開啟進入FG的條件(1.從左算起,連續3軸獲得scatter)
     * wild只會在123軸出現
     * PS-先檢查是否連續三軸開出scatter
     * @param cards 盤面資料
     * @param conditionTarget 目標條件(可能是wild或scatter)
     * @returns 
     */
    private checkScatterCondition(cards: number[][], conditionTarget: number): boolean {

        let count = 0;
        let flag = false;
        //const compareTarget = SCATTER_LIST[0];
        const compareTarget = conditionTarget;
        for (let i = 0; i <= cards.length - 3; i++) {
            const hasTargetInRow1 = cards[i].some(val => val === compareTarget);
            const hasTargetInRow2 = cards[i + 1].some(val => val === compareTarget);
            const hasTargetInRow3 = cards[i + 2].some(val => val === compareTarget);

            if (hasTargetInRow1 && hasTargetInRow2 && hasTargetInRow3) {
                count++;
                //但目前允許重疊，例如 i=0,1,2 和 i=1,2,3
            }
        }
        if (count > 0) {
            flag = true;
        }
        return flag;
    }

    //--混和型
    /**
     * PS:wild只會在123軸出現
     * 所以要計算第0軸是否為scatter否則連續3個scatter不成立
     * @param cards 
     * @param scatter 
     * @param wild 
     * @returns 
     */
    private checkMixedScatterOrWild(cards: number[][], scatter: number, wild: number): boolean {
        for (let i = 0; i <= cards.length - 3; i++) {
            const row0 = cards[i];
            const row1 = cards[i + 1];
            const row2 = cards[i + 2];
            const hasScatter = (row: number[]) => row.includes(scatter);
            const hasScatterOrWild = (row: number[]) => row.includes(scatter) || row.includes(wild);
            if (hasScatter(row0) && hasScatterOrWild(row1) && hasScatterOrWild(row2)) {
                return true; //--有連續3軸滿足條件
            }
        }
        return false;
    }



    /**
     * 檢查盤面的scatter數量(scatter僅會出現在一般遊戲當中)
     * @param cards 盤面資料
     * @returns 
     */
    private checkScatterCount(cards: number[][]): number {
        let count = 0;
        for (let i = 0; i < cards.length; i++) {
            for (let j: number = 0; j < cards[i].length; j++) {
                if (SCATTER_LIST.includes(cards[i][j])) {
                    count++;
                }
            }
        }
        return count;
    }

    //---抽出wild的數量(這是零散的)
    private checkWildCount(cards: number[][]): number {
        let count = 0;
        for (let i = 0; i < cards.length; i++) {
            for (let j: number = 0; j < cards[i].length; j++) {
                if (WILD_LIST.includes(cards[i][j])) {
                    count++;
                }
            }
        }
        return count;
    }

    /**
     * 獲取整輪wild的數量(只有整輪滿足才會併入計算)
     * 一但這一個盤面有整輪的wild就會鎖定這一軸,避免重複計算
     * 直到下一個盤面進來後清掉鎖定資料
     * @param cards 
     * @returns 
     */
    private getWholeConsecutiveWildCount(cards: number[][]): number {
        let count = 0;
        const targetWild = WILD_LIST[0];
        for (let i: number = 0; i < cards.length; i++) {
            if (this._lockedWildReelSet.has(i)) continue;
            const row = cards[i];
            //--檢查整輪是否都是wild
            if (row[0] === targetWild && row[1] === targetWild && row[2] === targetWild && row[3] === targetWild) {
                count++;
                this._lockedWildReelSet.add(i); //--將這個軸加入鎖定wild的軸集合中
            }
        }
        return count;
    }


    /**
     * 抽出相連的wild數量(這是計算單軸相連的數量)
     * @param row 目標軸
     * @param target 指定檢查相連的值
     * @returns 
     */
    private getAllConsecutiveCounts(row: number[], target: number): number[] {
        const result: number[] = [];
        let count = 0;
        for (let i = 0; i < row.length; i++) {
            if (row[i] === target) {
                count++;
            } else {
                if (count > 0) {
                    result.push(count);
                    count = 0;
                }
            }
        }
        // 處理結尾是連續值的情況(ex:[9,1,9,9],result=[1,2])
        if (count > 0) {
            result.push(count);
        }
        return result;
    }

    //--直接整個盤面去檢查相連的wild數量
    private getConsecutiveCountsForGrid(cards: number[][], target: number): number[][] {
        return cards.map(row => this.getAllConsecutiveCounts(row, target));
    }


    /**
     * 這是取得Scatter的數量
     * 規則:(這是NG和reSpin的規則--在FG當中獲得freeSpin的次數累加是要整條的wild(不需要scatter))
     * 1. 連續三輪出現(左->右) scatter(scatter圖示)--只在NG/reSpin當中會有scatter
     * 2. 一個wild(不用全軸(整輪和非整輪都算))=1 scatter 
     * 3. 要檢查wild是否相連的狀態..ex:整輪wild他有4個相同的symbol 但這個只會算成1個
     * 
     */
    private getScatterCountWithScatterAndWild(cards: number[][]): number {
        //--拿scatter數量
        const scatterCount = this.checkScatterCount(cards);
        //--拿相連的wild數量
        const wildCount = this.getConsecutiveCountsForGrid(cards, WILD_LIST[0]);
        let totalWildToScatterForConsecutive: number = 0;
        for (let i: number = 0; i < wildCount.length; i++) {
            totalWildToScatterForConsecutive += wildCount[i].length;
        }
        const finalScatterCount = scatterCount + totalWildToScatterForConsecutive;
        //const finalFgCount = this.getFinalFGTimes(finalScatterCount);

        //return finalFgCount;
        return finalScatterCount;
    }

    private getFgTimesWithScatterAndWild(cards: number[][]): number {
        const scatterCount = this.getScatterCountWithScatterAndWild(cards);
        const finalFgCount = this.getFinalFGTimes(scatterCount);
        return finalFgCount;
    }

    private getFinalFGTimes(value: number): number {
        let finalFgCount: number | undefined = undefined;
        let maxKey: number = -1;// 找到小於等於 targetCount 的最大鍵
        for (const key in FG_TIMES_FOR_SCATTER) {
            const numKey: number = parseInt(key);
            if (numKey <= value && numKey > maxKey) {
                maxKey = numKey;
                finalFgCount = FG_TIMES_FOR_SCATTER[numKey];
            }
        }
        if (finalFgCount == undefined) {
            finalFgCount = 0;
        }
        return finalFgCount;
    }





    public resetRoundData(): void {
        //--father class by BasicProcessSlotData--//
        this.betValue = 0;
        this.allRoundOdds = 0;
        this.totalOddsForReSpin = 0;
        this.totalOddsForFG = 0;//--記在FG自己的資料裡面totalOdd
        this.reSpinReelInfo = [];//--reSpine 這邊有多少就塞多少IProcessSlotData進去
        this.freeGameReelInfo = []; //--freeGame 這邊有多少就塞多少IProcessSlot
        this.ngReelInfo = null;
        //--father class by BasicProcessSlotData--//
        this._currentNGCardsInfo = [];
        this._currentReSpinCardsInfo = [];
        this._currentFGCardsInfo = [];
        this._currentBonusCount = 0;
        this._currentBase64Data = '';//--for test check
        this._cloneOgDataIntAry = null;//--for test check
        this._lockedWildReelSet.clear();//--清除鎖定wild的軸(fg使用的累計計算)
    }


    /**
     * symbolId=>0~10
     * 9=wild,10=scatter
     */
    public setNewRoundData(buffer: BinaryBuffer, betValue: number): void {
        //console.log('raw', buffer);
        this.resetRoundData();
        this.betValue = betValue;
        this._currentBase64Data = this.getBase64Data(buffer);
        const cloneBuffer = this.cloneBinaryBuffer(buffer);
        const totalLength = cloneBuffer.getCount();
        this._cloneOgDataIntAry = new IntArray();
        this._cloneOgDataIntAry.Parse(cloneBuffer, totalLength);

        //===========parse data============//
        const ngCardInfo: IRoundDataReelInfo[] = [];
        const reSpinCardInfo: IRoundDataReelInfo[] = [];
        const fgCardInfo: IRoundDataReelInfo[] = [];
        //--大於1就是包含了NG+reSpin
        const totalRoundForNGAndReSpin = buffer.getUint8()[1];
        //--ng+reSpin
        for (let i: number = 0; i < totalRoundForNGAndReSpin; i++) {
            if (i == 0) {
                ngCardInfo.push(this.parseSingleRoundData(buffer));
            } else {
                reSpinCardInfo.push(this.parseSingleRoundData(buffer));
            }
        }

        //--fg
        const [okFgCount, fgRoundCount] = buffer.getUint8();//-FG回合數
        if (!okFgCount) throw new Error("無法讀取 FG 回合數");

        for (let i: number = 0; i < fgRoundCount; i++) {
            const fgRound = this.parseSingleRoundData(buffer);
            fgCardInfo.push(fgRound);
        }

        //===========parse data============//

        //========process data(展開位移遞補)============//
        //--吻合位移條件的狀態下moved2dsCards,flatMovedCards都會有資料,否則就是空陣列
        this._currentNGCardsInfo = this.processBasicCardData(ngCardInfo);
        this._currentReSpinCardsInfo = (reSpinCardInfo.length == 0) ? [] : this.processBasicCardData(reSpinCardInfo);
        this._currentFGCardsInfo = (fgCardInfo.length == 0) ? [] : this.processBasicCardData(fgCardInfo);

        //console.log('afterParse:', ngCardInfo, reSpinCardInfo, fgCardInfo);
        //console.log('currentBase64Data:', this._currentBase64Data);

        //this.testCheckScore();
        //--for test check(實際要拿到外部去呼叫)---
        //this.getCloneData();
    }


    private testCheckScore(): void {
        //----test check---
        //--test cards--
        //const testCards = [6, 6, 8, 8, 9, 9, 9, 9, 0, 4, 2, 6, 9, 9, 9, 9, 8, 8, 5, 5];
        const testCards = [6, 6, 8, 8, 9, 9, 9, 9, 0, 4, 2, 6, 9, 9, 9, 9, 8, 8, 5, 5];
        const awardData = this._calculatePayTable016.getWindData(testCards);
        //const matchInfo = this.getWinLineData(awardData, testCards);
        //console.log('testMachInfo:', matchInfo);

        const targetWinPos = [0, 4, 8, 12, 16];
        for (let i: number = 0; i < targetWinPos.length; i++) {
            //const item = iconData[i];
            const pos = targetWinPos[i];//--一維陣列的位置
            const reelIndex2ds = Math.floor(pos / REEL_AMOUNT);//--reel的indexREEL_AMOUNT
            const symbolIndex = pos % REEL_SYMBOL_AMOUNT;//--圖示在reel上的位置REEL_SYMBOL_AMOUNT


        }
        /*
        this._calculatePayTable016.getWindData(this._currentNGCardsInfo[0].flatMovedCards);
        if (this._currentReSpinCardsInfo.length > 0) {
            for (let i: number = 0; i < this._currentReSpinCardsInfo.length; i++) {
                const target: IMovementGridData = this._currentReSpinCardsInfo[i];
                const targetCards = (target.flatMovedCards.length == 0) ? target.cards : target.flatMovedCards;
                this._calculatePayTable016.getWindData(targetCards);
            }

        }*/

    }

    /**
     * export interface IRoundDataReelInfo {
        symbolData1ds: number[];//--盤面資料(原始的一維陣列)
        wildCount: number;//--wild的數量
        wildIndex: number[];//--wild的index
        haveForecast: boolean;//--是否有預測
        }

        //--放變形前後的資料(算分前準備..算分要拿位移後的資料)
        export interface IMovementGridData extends IRoundDataReelInfo {
            symbolData2ds: number[][];//--原始盤面資料(2D陣列)
            afterMovedSymbolData2ds: number[][];//--移動後的盤面資料(2D陣列)
            afterMovedSymbolData1ds: number[];//--攤平後的盤面資料(1D陣列)
        }
     */
    private processBasicCardData(raw: IRoundDataReelInfo[]): IMovementGridData[] {
        const len = raw.length;
        const result: IMovementGridData[] = [];
        for (let i: number = 0; i < len; i++) {
            const item = raw[i];
            const og2dsCards = this.get2DArray(item.symbolData1ds);//--原始盤面資料(2D陣列)
            const moved2dsCards = (item.wildCount == 0) ? [] : this.getAfterMove2DsData(og2dsCards, item.wildCount, item.wildIndex);
            const flatMovedCards = (item.wildCount == 0) ? [] : this.getFlatArrayFrom2Ds(moved2dsCards);//--攤平後的盤面資料(1D陣列)
            const gridData: IMovementGridData = {
                symbolData1ds: item.symbolData1ds,//--盤面資料(原始的一維陣列)
                wildCount: item.wildCount,//--wild的數量
                wildIndex: item.wildIndex,//--wild的index
                haveForecast: false,//--是否有預測
                symbolData2ds: og2dsCards,//--原始盤面資料(2D陣列)
                wildGroup: this.getSlotReelDirectionWithWild(og2dsCards, WILD_LIST[0]), //--wild的group(這個是用來計算FG的累進賠率)
                //--以下兩筆資料在沒有位移的狀態下是空陣列
                afterMovedSymbolData2ds: moved2dsCards,//--移動後的盤面資料(2D陣列)
                afterMovedSymbolData1ds: flatMovedCards//--攤平後的盤面資料(1D陣列)        
            };
            result.push(gridData);
        }
        return result;
    }

    //--移動後的盤面資料
    private getAfterMove2DsData(card2ds: number[][], wildCount: number, wildIndex: number[]): number[][] {
        const clone2ds = this.getClone2DArray(card2ds);
        if (wildCount > 0) {
            for (let i: number = 0; i < wildCount; i++) {
                const index = wildIndex[i];
                if (index >= 0 && index < REEL_AMOUNT) {
                    clone2ds[index] = this.replaceValueToAllReel(WILD_LIST[0], clone2ds[index]);//--wild
                } else {
                    console.error('Wild index out of bounds:', index);
                }
            }
        }

        return clone2ds;
        //return null;
    }



    /**
     * 
     export interface IRoundDataReelInfo {
        symbolData1ds: number[];//--盤面資料(原始的一維陣列)
        wildCount: number;//--wild的數量
        wildIndex: number[];//--wild的index
        haveForecast: boolean;//--是否有預測
    }
    //--放變形前後的資料(算分前準備..算分要拿位移後的資料)
    export interface IMovementGridData extends IRoundDataReelInfo {
        symbolData2ds: number[][];//--原始盤面資料(2D陣列)
        afterMovedSymbolData2ds: number[][];//--移動後的盤面資料(2D陣列)
        afterMovedSymbolData1ds: number[];//--攤平後的盤面資料(1D陣列)
    }
     */
    private parseSingleRoundData(buffer: BinaryBuffer): IRoundDataReelInfo {
        const round: IRoundDataReelInfo =
        {
            symbolData1ds: [],
            wildCount: 0, //--wild的數量
            wildIndex: [],
            haveForecast: false, //--是否有預測
            wildGroup: [] //--wild的group(這個是用來計算FG的累進賠率)
        }
        const panelParser = new IntArray();
        panelParser.Parse(buffer, 20);//--盤面總數4*5
        round.symbolData1ds = panelParser.value;
        const [success, wildCount] = buffer.getUint8();
        round.wildCount = wildCount;
        if (success && wildCount > 0) {
            for (let i: number = 0; i < wildCount; i++) {
                const [ok, wildIndex] = buffer.getUint8();
                if (ok) {
                    round.wildIndex.push(wildIndex);
                } else {
                    console.error('Failed to read wild index at index:', i);
                }
            }
        }

        return round;
    }

    /**
    * 這個是用來把所有的值都換成一樣的值
    *例如: 盤面資料全部換成wild/scatter/bonus
    * @param replace 要換成的值
     */
    private replaceValueToAllReel(replace: number, targetReel: number[]): number[] {
        return targetReel.map(() => replace);
    }

    //--攤平
    private getFlatArrayFrom2Ds(original: number[][]): number[] {
        return original.reduce((acc, row) => acc.concat(row), []);
    }

    //--拷貝
    private getClone2DArray(original: number[][]): number[][] {
        return original.map(row => row.slice());
    }

    //--展開
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

    private getBase64Data(buffer: BinaryBuffer): string {
        const arrayBuffer = buffer.getArrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);
        return Utility.uint8ArrayToBase64(uint8Array);
    }


    private cloneBinaryBuffer(original: BinaryBuffer): BinaryBuffer {
        const bufferCopy = original.getArrayBuffer().slice(0); // clone the buffer
        const clone = new BinaryBuffer(bufferCopy);
        clone.setReadPosition(original.getReadIndex());
        clone.USE_LITTLE_ENDIAN = original.USE_LITTLE_ENDIAN;
        return clone;
    }



}


