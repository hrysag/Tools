import { ProbabilitySettingData } from './ProbabilitySettingData';

export class FakeBoardProbability {
    private _probabilitySettingData: ProbabilitySettingData = null;

    protected lastSymbolID: number = -1;
    protected consecutiveCount: number = 0;
    protected noRepeatCoolDowns: Map<number, number> = new Map();

    public init(probabilitySettingData: ProbabilitySettingData): void {
        this._probabilitySettingData = probabilitySettingData;
        this.noRepeatCoolDowns.clear();
        this._probabilitySettingData.symbolProbabilityDataList.forEach((symbolData, index) => {
            if (symbolData.noRepeat) {
                this.noRepeatCoolDowns.set(index, 0);
            }
        });
    }

    public getSettingData(): ProbabilitySettingData {
        return this._probabilitySettingData;
    }

    public setLastData(topSymbolID: number, secondSymbolID: number): void {
        this.lastSymbolID = topSymbolID;
        this.consecutiveCount = (topSymbolID === secondSymbolID) ? 2 : 1;
    }

    public generateRandomSymbolData(dataLength: number, offset: number = 0): number[] {
        let resultSymbols: number[] = [];
        const excludedIDs: Set<number> = new Set();
        this.noRepeatCoolDowns.forEach((count, symbolID) => {
            if (count > 0) {
                excludedIDs.add(symbolID);
            }
        });

        for (let index = 0; index < dataLength + offset; index++) {
            const symbolID = this.generateNextSymbolID(excludedIDs);
            resultSymbols.unshift(symbolID);

            this.updateStateAfterGeneration(symbolID, excludedIDs, dataLength);
        }

        return resultSymbols;
    }

    protected generateNextSymbolID(excludedIDs: Set<number>): number {
        const consecutiveSymbolID = this.getConsecutiveSymbolID();
        if (consecutiveSymbolID !== null) {
            return consecutiveSymbolID;
        }

        const tempExcludedIDs = new Set(excludedIDs);
        const { symbolProbabilityDataList } = this._probabilitySettingData;

        if (this.lastSymbolID !== -1 && !symbolProbabilityDataList[this.lastSymbolID].noRepeat) {
            tempExcludedIDs.add(this.lastSymbolID);
        }

        return this.selectSymbolByProbability(tempExcludedIDs);
    }

    protected getConsecutiveSymbolID(): number | null {
        const { symbolProbabilityDataList, useStackRate, stackRateData } = this._probabilitySettingData;

        if (this.lastSymbolID === -1 || symbolProbabilityDataList[this.lastSymbolID].noRepeat) {
            return null;
        }

        if (useStackRate) {
            const stackRate = stackRateData.find(rate => rate.consecutiveCount === this.consecutiveCount + 1)?.rate / 100 || 0;
            return Math.random() < stackRate ? this.lastSymbolID : null;
        } else {
            const maxConsecutive = symbolProbabilityDataList[this.lastSymbolID].maxConsecutiveCount;
            return (maxConsecutive > 0 && this.consecutiveCount < maxConsecutive) ? this.lastSymbolID : null;
        }
    }

    protected selectSymbolByProbability(excludedSymbolIDs: Set<number>): number {
        const { symbolProbabilityDataList } = this._probabilitySettingData;

        const availableSymbols: { id: number, probability: number }[] = [];
        let totalProbability = 0;
        for (let i = 0; i < symbolProbabilityDataList.length; i++) {
            if (!excludedSymbolIDs.has(i)) {
                const probData = symbolProbabilityDataList[i];
                availableSymbols.push({ id: i, probability: probData.probability });
                totalProbability += probData.probability;
            }
        }

        if (availableSymbols.length === 0) {
            return 0;
        }
        if (totalProbability <= 0) {
            const randomIndex = Math.floor(Math.random() * availableSymbols.length);
            return availableSymbols[randomIndex].id;
        }

        const random = Math.random() * totalProbability;
        let accumulator = 0;
        for (const symbol of availableSymbols) {
            accumulator += symbol.probability;
            if (random <= accumulator) {
                return symbol.id;
            }
        }

        return availableSymbols[availableSymbols.length - 1].id;
    }

    protected updateStateAfterGeneration(newSymbolID: number, excludedIDs: Set<number>, dataLength: number): void {
        this.consecutiveCount = (newSymbolID === this.lastSymbolID) ? this.consecutiveCount + 1 : 1;
        this.lastSymbolID = newSymbolID;

        const isNoRepeat = this._probabilitySettingData.symbolProbabilityDataList[newSymbolID].noRepeat;
        if (isNoRepeat && !excludedIDs.has(newSymbolID)) {
            this.noRepeatCoolDowns.set(newSymbolID, dataLength + 1);
            excludedIDs.add(newSymbolID);
        }

        this.noRepeatCoolDowns.forEach((count, symbol) => {
            if (count > 0) {
                this.noRepeatCoolDowns.set(symbol, count - 1);
                if (this.noRepeatCoolDowns.get(symbol) <= 0) {
                    excludedIDs.delete(symbol);
                }
            }
        });
    }
}
