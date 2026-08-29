import { ISymbolOwnerAgent } from "../../ReferencePath";

//--註冊使用的FunctionType
export interface FunctionType {
    name: string; // 函數名稱
    processType?: string; // 處理類型
    ownerId: number; // 擁有者ID
    targetOwnerId?: number; // 目標擁有者ID (可選)
    args?: any[]; // 傳遞的參數
}
/**
 * 我其實沒有很想要這樣做..太秀下限了.
 * 但因為時間有限下次再處理^_^
 * <擁有跨系統呼叫owner的獨有方法,寄生在handoff內> 
 */
export interface IFunctionOwnerAgent extends ISymbolOwnerAgent {
    crossProcess(processType: FunctionType): void;  // 接手後要做的事
    crossMultiProcess(processType: FunctionType[]): void;
}
