import { IReelInfo } from "../../BasicGameDataDefinition/BasicGameDataDefinition";
import { Node } from "cc";
/**
 * 針對動畫跨越不同系統(slot machine/showAniController/GameManager)
 * 在不同系統之間交互傳遞動畫資料的介面。
 * 這樣可以免去像之前這樣塞一堆call back方法散落在slotMachine/showAniController/GameManager裡面。
 * 目前操作動畫物件的
 */
//--需要交換動畫持有者需要實作這個interface
export interface ISymbolOwnerAgent {
   readonly ownerId: number; // 唯一識別碼
   beforeRelease(info: Pick<IReelInfo, "reelIndex" | "iconIndex">): Node | null; // 交出前要做的事
   afterAcquire(info: Pick<IReelInfo, "reelIndex" | "iconIndex">, node: Node): Promise<void>;  // 接手後要做的事
   afterMultiAcquire(mapInfo: Map<string, { data: Pick<IReelInfo, "reelIndex" | "iconIndex">, node: Node }>): Promise<void>; // 接手多個後要做的事
   //registerYourself(owner: ISymbolOwnerAgent): void; // 註冊自己為擁有者
   //handoffSingleByOwnerId(info: Pick<IReelInfo, 'reelIndex' | 'iconIndex' | 'symbolId'>, targetOwnerId: number): void
}


