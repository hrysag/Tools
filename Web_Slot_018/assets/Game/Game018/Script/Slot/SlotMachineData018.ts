import { _decorator, Component, Node } from 'cc';
import { SlotMachineData } from 'db://assets/Scripts/ReelTemplate/ReelTemplate_2/Scripts/Model/SlotMachineData';
import { DefinitionGameConfigData } from '../DefinitionGameData/DefinitionGameConfigData';
import { GameState } from '../DefinitionGameData/GameStateConfigDef';

const { ccclass, property } = _decorator;

@ccclass('SlotMachineData018')
export class SlotMachineData018 extends SlotMachineData {

    /**
     * 繼承slotMachineData,儲存有關產生隨機的symbol的資料,
     * 並且提供給slotMachineController使用(會依照設定的資料隨機產生symbol)
     * (-PS-)
     * 譬如每一輪有可能出現的符號or每一輪只會出現一次的符號之類的
     * 
     * allSymbolList--number[] 所有可能出現的符號
     * everyReelAllSymbolList---number[][]每輪所有可能出現的符號，會根據每輪不能出現的符號來運算最終的符號 
     * uniqueSymbolList---number[][]每輪只會出現一次的符號
     * noAppearSymbolList--number[][]<每輪-這邊要單獨填寫每一輪不能show出來的symbol>不能出現的符號
     * noSameReelSymbolList--number[][]每輪不能同時出現這個陣列裡面的符號
     * initSymbolList--number[][]每輪初始的符號，沒有資料的話就是隨機生成
     * 
     */

    private _uniqueSymbolList_NG: number[][] = [];
    private _uniqueSymbolList_RE: number[][] = [];//--ReSpin不能出現wild
    private _uniqueSymbolList_FG: number[][] = [];
    private _allSymbolList_NG: number[] = [];
    private _allSymbolList_FG: number[] = [];
    private _currentAllSymbolList_FG: number[] = [];//--當前FG的符號列表


    /**
     * @param reelAmount 輪軸數量
     * ps--寫資料進去SlotMachineData,讓SlotMachineController1003可以使用
     */
    public override init(reelAmount: number): void {


        //this.allSymbolList = [...NORMAL_SYMBOL_LIST, ...WILD_LIST, ...SPECIAL_SYMBOL_LIST];

        //--wild只會出現在左右盤當中的第2軸!而且每次只會出現1個


        //--wild只會出現在左右盤當中的第2軸!而且每次只會出現1個
        /**每輪只會出現一次的符號 */
        /*
        this._uniqueSymbolList_NG = [[], [...WILD_LIST], [], [], [...WILD_LIST], []];

        this._uniqueSymbolList_FG = [[], [], [], [], [], []];

        //每輪不能同時出現這個陣列裡面的符號 
        this._noSameReelSymbolList_NG = [[], [...WILD_LIST], [], [], [...WILD_LIST], []];

        this._noSameReelSymbolList_FG = [[...SPECIAL_SYMBOL_LIST], [...SPECIAL_SYMBOL_LIST], [...SPECIAL_SYMBOL_LIST], [...SPECIAL_SYMBOL_LIST], [...SPECIAL_SYMBOL_LIST], []];

        this.clearEveryReelAllSymbolList();
        */


        //--一般軸不出現第四軸的東西
        /**
         * 1.一般軸不出現第四軸的東西
         * 2.他的資料放法式依照每一軸一個陣列組成的長度4的多維陣列
            [   
                [8, 9, 10, 11, 12, 13],
                [8, 9, 10, 11, 12, 13],
                [0, 1, 2, 3, 4, 5, 6, 7]
            ]
          ---大概會像這樣      
         * 3.這邊的規則是前三軸為一般軸,他不會出現第四軸的東西
         * 4.第四軸也不會出現前三軸的東西(企劃書沒寫)
         */
        this.initSymbolList = this.generateRandomGroups();
        //-10=wild的取代圖案
        this._allSymbolList_NG = [0, 1, 2, 3, 4, 5];

        this._allSymbolList_FG = [0, 1, 2, 3, 4, 5, 9];

        this._uniqueSymbolList_NG = [[], [10], [], [], [10], []];//--取代wild的圖案
        this._uniqueSymbolList_RE = [[], [], [], [], [], []];
        this._uniqueSymbolList_FG = [[], [], [], [], [], []];


    }

    //---重置當前的FG符號列表
    public reSetCurrentAllSymbolList_FG(): void {
        this._currentAllSymbolList_FG = [...this._allSymbolList_FG];
    }

    //---清空準備重塞資料
    public clearEveryReelAllSymbolList(): void {

        this.everyReelAllSymbolList = Array.from({ length: this.everyReelAllSymbolList.length }, () => []);

        this.updateEveryReelAllSymbolList();

    }

    public calulateFGSymbolList(multiplier: number): void {

        if (multiplier != -1) {
            for (let i: number = 0; i < this._currentAllSymbolList_FG.length; i++) {
                if (this._currentAllSymbolList_FG[i] == multiplier) {
                    this._currentAllSymbolList_FG.splice(i, 1);
                    break;
                }
            }
        }
        //console.log('calulateFGSymbolList', multiplier + "\n" + '剔除亂數盤面:' + this._currentAllSymbolList_FG.join(","));
    }



    public getTargetAllSymbolList(type: GameState): number[] {
        if (type == GameState.NORMAL) {
            return this._allSymbolList_NG;

        } else if (type == GameState.FREE_GAME) {
            return this._currentAllSymbolList_FG;

        } else if (type == GameState.RE_SPINE) {
            return this._allSymbolList_NG;
        }

    }

    public getTargetUniqueSymbolList(index: number, type: GameState): number[] {

        let targetList;
        if (type == GameState.NORMAL) {
            targetList = this._uniqueSymbolList_NG;
        } else if (type == GameState.FREE_GAME) {
            targetList = this._uniqueSymbolList_FG;
        } else if (type == GameState.RE_SPINE) {
            targetList = this._uniqueSymbolList_RE;
        }


        return targetList[index];
    }

    public getAllSymbolList_NG(): number[] {

        return this._allSymbolList_NG;
    }

    public getAllSymbolList_FG(): number[] {

        return this._allSymbolList_FG;
    }

    public getUniqueSymbolList_NG(): number[][] {
        return this._uniqueSymbolList_NG;
    }

    public getUniqueSymbolList_FG(): number[][] {
        return this._uniqueSymbolList_FG;
    }

    private generateRandomGroups(): number[][] {
        const source = [0, 1, 2, 3, 4, 5];
        const totalGroups = 6;
        const groupSize = 3;

        const result: number[][] = [];

        for (let i = 0; i < totalGroups; i++) {
            let group: number[];
            let attempts = 0;

            do {
                group = this.shuffleArray(source).slice(0, groupSize);
                attempts++;
                if (attempts > 100) throw new Error("Too many retries to avoid duplicates.");
            } while (
                i > 1 && this.arraysAreEqualIgnoreOrder(group, result[i - 1], result[i - 2])
            );

            result.push(group);
        }

        //console.log('generateRandomGroups', result);
        return result;
    }

    private shuffleArray(arr: number[]): number[] {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    private arraysAreEqualIgnoreOrder(current: number[], prev1: number[], prev2: number[]): boolean {
        for (const num of current) {
            if (prev1.includes(num) && prev2.includes(num)) {
                return true; // num 出現在連續兩組裡，這一組也出現 → 違規
            }
        }
        return false;
    }




}


