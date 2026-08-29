import { Node } from 'cc';
import {
    CrossSystemAniServiceFacade,
    IPlayAniData,
    ISymbolAniKey,
    IReelInfo,
} from '../../ReferencePath';
import { IDirtyCrossSysServiceFacade } from './IDirtyCrossSysServiceFacade';
import { FunctionType, IFunctionOwnerAgent } from './IFunctionOwnerAgent';
import { DirtyHandoffManager } from './DirtyHandoffManager';

export class DirtyCrossSysServiceFacade <
T extends IReelInfo,
N,
Key extends string,
P extends IPlayAniData = IPlayAniData,
K extends ISymbolAniKey = ISymbolAniKey,
I extends IReelInfo = IReelInfo,
OwnerAgent extends IFunctionOwnerAgent = IFunctionOwnerAgent,
// HandoffManager 的約束應該是 DirtyHandoffManager<I, OwnerAgent>
HandoffManager extends DirtyHandoffManager<I, OwnerAgent> = DirtyHandoffManager<I, OwnerAgent>
>extends CrossSystemAniServiceFacade<T, N, Key, P, K, I, OwnerAgent, HandoffManager> implements IDirtyCrossSysServiceFacade <T, N, Key, P, K, I>{
   
    public processOwnerFunction(processType: FunctionType): void
    {
        this._handoffManager.processOwnerFunction(processType);
    } 

    public processMultiOwnerFunction(processTypes: FunctionType[]): void
    {
        this._handoffManager.processMultiOwnerFunction(processTypes);
    }
    
    public processMultiFunctionBySameOwner(processTypes: FunctionType[], owner: number): void
    {
        this._handoffManager.processMultiFunctionBySameOwner(processTypes, owner);
    }
}