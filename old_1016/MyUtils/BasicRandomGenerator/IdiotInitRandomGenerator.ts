import { IStrategyRandomGenerator } from './IStrategyRandomGenerator';

export interface IRandomData {
    groupSize: number; //--每組的大小
    totalGroups: number; //--總共幾組
    //randomGroupSource: number[]; //--亂數來源
}

interface IReelInfo {
    pattern: number[];           // 連續的數字陣列
    patternValue: number;        // 連續數字的值 (例如 [3,3,3] 的值為 3)
    fillPosition: 'head' | 'tail'; // 補牌位置
    fillerValues: number[];      // 補牌的值
}

export class IdiotInitRandomGenerator implements IStrategyRandomGenerator<IRandomData> {

    private _randomMap: Record<number, number[][]> = {};
    private _randomSingleList: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    public generate(value?: IRandomData): number[][] {
        this._setRandomToMap();

        const result: number[][] = [];
        const reelInfos: IReelInfo[] = [];
        const totalReels = 5; // totalGroups = 5
        const groupSize = 6;  // groupSize = 6

        for (let reelIndex = 0; reelIndex < totalReels; reelIndex++) {
            let isValid = false;
            let attempts = 0;
            const maxAttempts = 1000;

            while (!isValid && attempts < maxAttempts) {
                attempts++;

                // 依照機率決定 pattern 大小
                const patternSize = this._getPatternSizeByProbability();

                // 從對應的 map 中隨機取得一組 pattern
                const patterns = this._getRandomFromMap(patternSize);
                const pattern = patterns[Math.floor(Math.random() * patterns.length)];
                const patternValue = pattern[0]; // 連續數字的值

                // 決定補牌位置 (頭或尾)
                const fillPosition: 'head' | 'tail' = Math.random() < 0.5 ? 'head' : 'tail';

                // 計算需要補多少張牌
                const singlesNeeded = 4 - patternSize;

                // 從 _randomSingleList 中隨機抽取不重複的值
                const availableSingles = [...this._randomSingleList];
                const fillerValues: number[] = [];
                for (let i = 0; i < singlesNeeded; i++) {
                    const singleIndex = Math.floor(Math.random() * availableSingles.length);
                    fillerValues.push(availableSingles[singleIndex]);
                    availableSingles.splice(singleIndex, 1);
                }

                // 驗證是否符合規則 (與前一軸比較)
                if (reelIndex > 0) {
                    const prevInfo = reelInfos[reelIndex - 1];

                    // 規則1: 連續數字的值不能相同
                    if (patternValue === prevInfo.patternValue) {
                        continue;
                    }

                    // 規則2: 補牌位置不能相同
                    if (fillPosition === prevInfo.fillPosition) {
                        continue;
                    }

                    // 規則3: 補牌的值不能與前一軸的補牌值相同
                    const hasCommonFiller = fillerValues.some(v => prevInfo.fillerValues.includes(v));
                    if (hasCommonFiller) {
                        continue;
                    }
                }

                // 組合中間部分 (index 1-4)
                const middlePart: number[] = [];
                if (fillPosition === 'head') {
                    // 補牌在頭部,pattern 在尾部
                    middlePart.push(...fillerValues);
                    middlePart.push(...pattern);
                } else {
                    // pattern 在頭部,補牌在尾部
                    middlePart.push(...pattern);
                    middlePart.push(...fillerValues);
                }

                // 組合完整的 reel (index 0 和 index 5 隨意填充)
                const reel: number[] = [
                    this._randomSingleList[Math.floor(Math.random() * this._randomSingleList.length)], // index 0
                    ...middlePart,
                    this._randomSingleList[Math.floor(Math.random() * this._randomSingleList.length)]  // index 5
                ];

                // 記錄這一軸的資訊
                reelInfos.push({
                    pattern: pattern,
                    patternValue: patternValue,
                    fillPosition: fillPosition,
                    fillerValues: fillerValues
                });

                result.push(reel);
                isValid = true;
            }

            // 如果嘗試次數超過上限,強制產生一組合法資料
            if (!isValid) {
                console.warn(`Reel ${reelIndex} generation exceeded max attempts, forcing generation.`);
                const forcedReel = this._forceGenerateReel(reelIndex, reelInfos);
                result.push(forcedReel.reel);
                reelInfos.push(forcedReel.info);
            }
        }

        return result;
    }

    /**
     * 依照機率取得 pattern 大小
     * 30%: size 2
     * 40%: size 3
     * 20%: size 4
     * 10%: default size 3
     */
    private _getPatternSizeByProbability(): number {
        const rand = Math.random();
        if (rand < 0.3) {
            return 2;
        } else if (rand < 0.7) {
            return 3;
        } else if (rand < 0.9) {
            return 4;
        } else {
            return 3; // 預設為 3
        }
    }

    /**
     * 強制產生一組合法的 reel (用於超過嘗試次數時)
     */
    private _forceGenerateReel(reelIndex: number, reelInfos: IReelInfo[]): { reel: number[], info: IReelInfo } {
        let patternSize = 3;
        let patternValue = 0;
        let fillPosition: 'head' | 'tail' = 'head';
        let fillerValues: number[] = [1];

        if (reelIndex > 0) {
            const prevInfo = reelInfos[reelIndex - 1];

            // 選擇不同的 patternValue
            patternValue = (prevInfo.patternValue + 1) % this._randomSingleList.length;

            // 選擇不同的 fillPosition
            fillPosition = prevInfo.fillPosition === 'head' ? 'tail' : 'head';

            // 選擇不同的 fillerValues
            const availableSingles = this._randomSingleList.filter(v => !prevInfo.fillerValues.includes(v));
            const singlesNeeded = 4 - patternSize;
            fillerValues = availableSingles.slice(0, singlesNeeded);
        }

        const pattern = Array(patternSize).fill(patternValue);
        const middlePart: number[] = [];

        if (fillPosition === 'head') {
            middlePart.push(...fillerValues);
            middlePart.push(...pattern);
        } else {
            middlePart.push(...pattern);
            middlePart.push(...fillerValues);
        }

        const reel: number[] = [
            this._randomSingleList[Math.floor(Math.random() * this._randomSingleList.length)],
            ...middlePart,
            this._randomSingleList[Math.floor(Math.random() * this._randomSingleList.length)]
        ];

        return {
            reel: reel,
            info: {
                pattern: pattern,
                patternValue: patternValue,
                fillPosition: fillPosition,
                fillerValues: fillerValues
            }
        };
    }

    private _setRandomToMap(): void {

        this._randomMap[2] = [
            [0, 0],
            [1, 1],
            [2, 2],
            [3, 3],
            [4, 4],
            [5, 5],
            [6, 6],
            [7, 7],
            [8, 8]
        ];

        this._randomMap[3] = [
            [0, 0, 0],
            [1, 1, 1],
            [2, 2, 2],
            [3, 3, 3],
            [4, 4, 4],
            [5, 5, 5],
            [6, 6, 6],
            [7, 7, 7],
            [8, 8, 8]
        ];

        this._randomMap[4] = [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [2, 2, 2, 2],
            [3, 3, 3, 3],
            [4, 4, 4, 4],
            [5, 5, 5, 5],
            [6, 6, 6, 6],
            [7, 7, 7, 7],
            [8, 8, 8, 8]
        ];
    }

    private _getRandomFromMap(key: number): number[][] {
        return this._randomMap[key];
    }


}