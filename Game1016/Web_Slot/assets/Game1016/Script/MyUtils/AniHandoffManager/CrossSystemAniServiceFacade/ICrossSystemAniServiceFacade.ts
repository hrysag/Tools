import { IPlayAniData, ISymbolAniKey } from '../AniBuilder/IAniBuilder';
import { IReelInfo } from '../../BasicGameDataDefinition/BasicGameDataDefinition'
import { ISymbolOwnerAgent } from '../AniHandoff/IAniHandoff';

//---提供注入的介面
export interface ICrossSystemSymbolAniService<
    T,
    N = any,
    Key extends string = string,
    P extends IPlayAniData = IPlayAniData,
    K extends ISymbolAniKey = ISymbolAniKey,
    I extends IReelInfo = IReelInfo
> {

    //createAndRegister(info: T, owner: ISymbolOwnerAgent): Promise<N>;
    createAndRegister(info: T, owner: ISymbolOwnerAgent): N;
    unRegisterData(info: T): void;//--向列表移除註冊(銷毀物件或推回物件池使用)
    multiUnRegister(infos: Pick<I, 'reelIndex' | 'iconIndex' | 'symbolId'>[]): void;
    registerData(info: T, owner: ISymbolOwnerAgent): void;
    //multiRegisty(info: T[], owner: ISymbolOwnerAgent): Promise<void>;
    multiRegisty(info: T[], owner: ISymbolOwnerAgent): void;
    multiRegistryByID(info: Pick<I, 'reelIndex' | 'iconIndex' | 'symbolId'>[], targetOwnerId: number): Promise<void>;
    registerYourself(owner: ISymbolOwnerAgent): void;//- 註冊自己為擁有者
    releaseAll(): void;
    getInfoByOwnerAgent(info: Pick<I, 'reelIndex' | 'iconIndex' | 'symbolId'>, owner: ISymbolOwnerAgent): Pick<I, 'reelIndex' | 'iconIndex' | 'symbolId'> | null;
    handoffSingleByOwnerId(info: Pick<I, 'reelIndex' | 'iconIndex' | 'symbolId'>, targetOwnerId: number): Promise<void>;
    //--轉移控制權與抽取對方持有的物件
    handoff(info: Pick<I, "reelIndex" | "iconIndex">, newOwner: ISymbolOwnerAgent): Promise<void>;
    multiHandoffBySameOwner(infos: Pick<I, 'reelIndex' | 'iconIndex' | 'symbolId'>[], newOwner: ISymbolOwnerAgent): Promise<void>
    multiHandoffBySameOwnerID(infos: Pick<I, 'reelIndex' | 'iconIndex' | 'symbolId'>[], targetOwnerId: number): Promise<void>
    decorateNode(target: N, playData: P): void | Promise<void>;
    //setTargetGroup(target: N, groupId: number): void//--感覺沒啥鳥用
    buildPlayData(info: T): P
    debugCheckAllOwners(): void;//--debug log for handoffOwners

}