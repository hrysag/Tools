import { IReelInfo } from '../../MyUtils/BasicGameDataDefinition/BasicGameDataDefinition';
import { ICrossSystemSymbolAniService } from '../../MyUtils/AniHandoffManager/CrossSystemAniServiceFacade/ICrossSystemAniServiceFacade';
import { ISymbolOwnerAgent } from '../../MyUtils/AniHandoffManager/AniHandoff/IAniHandoff';
import { Node } from 'cc';

export interface IDIAgentFactory {
    //createAndRegister(info: IReelInfo): Promise<Node>;
    createAndRegister(info: IReelInfo): Node;
    //multiRegisty(info: IReelInfo[]): Promise<void>
    multiRegisty(info: IReelInfo[]): void;
    register(info: IReelInfo): void;
    unRegister(info: IReelInfo): void;
    multiUnRegister(infos: Pick<IReelInfo, 'reelIndex' | 'iconIndex' | 'symbolId'>[]): void
    getInfoByOwnerAgent(info: IReelInfo): IReelInfo | null;
    handoffSingleByOwnerId(info: IReelInfo, targetOwnerId: number): void;
    //multiRegistyByID(info: Pick<IReelInfo, 'reelIndex' | 'iconIndex' | 'symbolId'>[], targetOwnerId: number): Promise<void>;
    multiRegistryByID(info: Pick<IReelInfo, 'reelIndex' | 'iconIndex' | 'symbolId'>[], targetOwnerId: number): Promise<void>;
    debugCheckAllOwners(): void;//--除錯使用(查看列表狀態)
}