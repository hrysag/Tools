import { _decorator, Component, Node } from 'cc';

/**
 * 如果有重複的symbol會被單獨截出來存成多個WinData
 * 原本的會合併成一個
 * 20250318-企劃有這種需求再換這個
 * 原本的就一口氣秀出來即可
 * for test
 */
export class AllMatchPayTable018 {
    protected readonly wild: number[];
    protected readonly payTable: number[][];
    protected readonly iconList: number[];
    protected reelAmount: number;
    protected symbolLength: number;

    /**
     * @param wild WILD圖示
     * @param payTable 賠率表(要有Wild的賠率) 
     * @param iconList 中獎圖示表 (將有賠率的連線中獎圖示放入，SCATTER請另外算)
     */
    constructor(wild: number[], payTable: number[][], iconList: number[]) {
        this.wild = wild;
        this.iconList = iconList;
        this.payTable = payTable;
    }

    /**
     * @param iconData 盤面
     * @param reelAmount 滾輪數量
     * @param symbolLength 單一輪有幾個圖示
     * @return 中獎圖示,賠率,贏的位置,輪播位置，中獎2D位置
     */
    protected getAllMatchWinData(iconData: number[], reelAmount: number, symbolLength: number): WinData[] {
        this.reelAmount = reelAmount;
        this.symbolLength = symbolLength;
        const icon2DData = this.convertSymbolTo2DArray(iconData);
        return this.allMatchWinData(icon2DData);
    }

    protected allMatchWinData(icon2DData: number[][]): WinData[] {
        let matchWinData: WinData[] = [];
        for (let icon of this.iconList) {
            const oneIconMatchMap = this.calculateOneIconAllMatch(icon, icon2DData);
            for (const [key, value] of oneIconMatchMap) {

                for (let item of value) {
                    const Win2DPos = this.convertWinIndexTo2DArray(item.Pos);
                    const winData = new WinData(key, item.Odd, item.Pos, item.OneMatchPos, Win2DPos);
                    matchWinData.push(winData);
                }

            }
        }
        return matchWinData;
    }

    protected calculateOneIconAllMatch(icon: number, icon2DData: number[][]): Map<number, PayLineData[]> {
        const oneIconMatchMap = new Map<number, PayLineData[]>();
        let combinedWire: number[][] = Array.from({ length: 0 }, () => []);
        let AllPosList: number[] = [];
        let tempOdds = 0;
        let tempCount = 1;//計算分出去的條數
        for (let i = 0; i < this.reelAmount; i++) {
            const newLineOdds = this.payTable[icon][i];
            const hasWild = this.wild.some(value => icon2DData[i].includes(value));//如果需要WILD都要匹配 some=>every
            if (icon2DData[i].includes(icon) || hasWild) {
                let winPos: number[] = [];
                //console.log('check_winPos', winPos);
                const pos = icon2DData[i].indexesOf(icon).map((x) => x + (i * this.symbolLength));
                //console.log('check_pos', pos);
                AllPosList = this.mergeTwoArrays(AllPosList, pos);
                //console.log('check_AllPosList', AllPosList);
                winPos = this.mergeTwoArrays(winPos, pos);
                //console.log('check_winPos', winPos);
                if (hasWild) {
                    const wildPos = this.getWildPos(icon2DData[i], (i * this.symbolLength));
                    AllPosList = this.mergeTwoArrays(AllPosList, wildPos);
                    winPos = this.mergeTwoArrays(winPos, wildPos);
                }
                combinedWire = this.getCombinedWireArray(combinedWire, winPos);
                const oneReelMatchCount = icon2DData[i].count(icon) + this.getWildCount(icon2DData[i]);
                tempCount = (tempCount * oneReelMatchCount).fixed();
                tempOdds = (newLineOdds * tempCount).fixed();
                if (tempOdds > 0) {


                    let ary: PayLineData[] = [];
                    for (let combinedWireTarget of combinedWire) {
                        const payLineData = new PayLineData(AllPosList, newLineOdds, [combinedWireTarget]);
                        ary.push(payLineData);
                    }

                    oneIconMatchMap.set(icon, ary);


                    //const payLineData = new PayLineData(AllPosList, tempOdds, combinedWire);
                    //oneIconMatchMap.set(icon, payLineData);
                }
            }
            else {
                break;
            }
        }
        return oneIconMatchMap;
    }

    protected getWildPos(iconList: number[], startPos: number): number[] {
        let wildPosList: number[] = [];
        for (let i = 0; i < this.wild.length; i++) {
            const wildPos: number[] = iconList.indexesOf(this.wild[i]).map((x) => x + startPos);
            wildPosList = wildPosList.concat(wildPos);
        }
        return wildPosList;
    }

    protected getWildCount(iconList: number[]): number {
        let wildTotal: number = 0;;
        for (let i = 0; i < this.wild.length; i++) {
            const wildCount: number = iconList.count(this.wild[i]);
            wildTotal += wildCount;
        }
        return wildTotal;
    }

    protected convertSymbolTo2DArray(iconData: number[]): number[][] {
        let resultData: number[][] = [];

        for (let index = 0; index < this.reelAmount; index++) {
            resultData[index] = iconData.slice(index * this.symbolLength, (index + 1) * this.symbolLength);
        }
        return resultData;
    }

    protected getCombinedWireArray(combinedWire: number[][], posList: number[]): number[][] {
        if (combinedWire.length === 0) {
            combinedWire = posList.map((value) => [value]);
            return combinedWire;
        }
        const newArray: number[][] = [];

        for (let item of combinedWire) {
            for (let pos of posList) {
                newArray.push([...item, pos]);
            }
        }
        combinedWire = newArray.map((arr) => [...arr]);
        return combinedWire;
    }

    private mergeTwoArrays(targetArray: number[], inputArray: number[]): number[] {
        targetArray = targetArray.concat(inputArray);
        targetArray = targetArray.set();
        return targetArray;
    }

    protected convertWinIndexTo2DArray(winIconPos: number[]): number[][] {
        let resultData: number[][] = Array.from({ length: this.reelAmount }, () => []);
        for (let index = 0; index < winIconPos.length; index++) {
            let reelID = Math.floor(winIconPos[index] / this.symbolLength);
            let pos = winIconPos[index] % this.symbolLength;
            resultData[reelID].push(pos);
        }

        return resultData;
    }
}

class WinData {
    public readonly WinSymbolID: number;
    public readonly Odd: number;
    public readonly Pos: number[];
    public readonly Win2DPos: number[][];
    public readonly OneMatchPos: number[][];

    constructor(winSymbolIDodd: number, odd: number, pos: number[], oneMatchPos: number[][], win2DPos: number[][]) {
        this.WinSymbolID = winSymbolIDodd;
        this.Odd = odd;
        this.Pos = pos;
        this.OneMatchPos = oneMatchPos;
        this.Win2DPos = win2DPos;
    }
}

class PayLineData {
    public readonly Pos: number[] = [];
    public readonly Odd: number = 0;
    public readonly OneMatchPos: number[][] = [];

    constructor(pos: number[], odd: number, oneMatchPos: number[][]) {
        this.Pos = pos;
        this.Odd = odd;
        this.OneMatchPos = oneMatchPos;
    }
}

