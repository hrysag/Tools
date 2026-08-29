import { SymbolAniHandoffManager, IReelInfo } from '../../ReferencePath';
import { FunctionType, IFunctionOwnerAgent } from './IFunctionOwnerAgent';
export class DirtyHandoffManager<I extends IReelInfo, Owner extends IFunctionOwnerAgent> extends SymbolAniHandoffManager<I, Owner> {
    /**
     * 這個DirtyHandoffManager是為了處理那些需要跨系統呼叫的dirty handoff
     * 主要是為了讓某些系統可以在不直接依賴其他系統的情況下進行操作
     */

    constructor() {
        super();
    }

    public processOwnerFunction(processType: FunctionType): void {
        // 在這裡實現跨系統呼叫owner的邏輯
        // 例如，根據processType的類型來決定要執行什麼操作
        const owner = this.getOwnerById(processType.ownerId);
        if (!owner) {
            console.warn(`Owner with ID ${processType.ownerId} not found.`);
            return;
        }
        owner.crossProcess(processType);
    }

    public processMultiOwnerFunction(processTypes: FunctionType[]): void {
        // 處理多個擁有者的函數呼叫
        for (const processType of processTypes) {
            this.processOwnerFunction(processType);
        }
    }

    public processMultiFunctionBySameOwner(processTypes: FunctionType[], owner: number): void {
        // 處理同一個擁有者的多個函數呼叫
        const ownerAgent = this.getOwnerById(owner);
        if (!ownerAgent) {
            console.warn(`Owner with ID ${owner} not found.`);
            return;
        }
        ownerAgent.crossMultiProcess(processTypes);
    }

    // 可以在這裡添加特定於DirtyHandoffManager的方法
}