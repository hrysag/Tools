import {
    ICrossSystemSymbolAniService,
    IPlayAniData,
    ISymbolAniKey,
    IReelInfo,
} from '../../ReferencePath';
import { FunctionType } from './IFunctionOwnerAgent';

export interface IDirtyCrossSysServiceFacade<
    T,
    N = any,
    Key extends string = string,
    P extends IPlayAniData = IPlayAniData,
    K extends ISymbolAniKey = ISymbolAniKey,
    I extends IReelInfo = IReelInfo
> extends ICrossSystemSymbolAniService<T, N, Key, P, K, I> 
{
    processOwnerFunction(processType: FunctionType): void; // 用於臨時註冊資料
    processMultiOwnerFunction(processTypes: FunctionType[]): void
    processMultiFunctionBySameOwner(processTypes: FunctionType[], owner: number): void;
}

