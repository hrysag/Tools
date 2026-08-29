import { IPlayAniData, ISymbolAniKey } from '../AniBuilder/IAniBuilder';
import { IReelInfo } from '../../BasicGameDataDefinition/BasicGameDataDefinition';
import { ISymbolOwnerAgent } from '../AniHandoff/IAniHandoff';
import { AniBuilderMediator } from '../AniBuilder/AniBuilderMediator';
import { SymbolAniHandoffManager } from '../AniHandoff/SymbolAniHandoffManager';
import { ICrossSystemSymbolAniService } from './ICrossSystemAniServiceFacade';
import { Game } from 'cc';
import { GameUtilsTools } from '../../ReferencePathForMyUtils';

export class CrossSystemAniServiceFacade<
    T extends IReelInfo,
    N,
    Key extends string,
    P extends IPlayAniData = IPlayAniData,
    K extends ISymbolAniKey = ISymbolAniKey,
    // I extends IReelInfo
    I extends IReelInfo = IReelInfo,
    OwnerAgent extends ISymbolOwnerAgent = ISymbolOwnerAgent,
    HandoffManager extends SymbolAniHandoffManager<I, OwnerAgent> = SymbolAniHandoffManager<I, OwnerAgent>
> implements ICrossSystemSymbolAniService<T, N, Key, P, K> {

    constructor(
        protected _mediator: AniBuilderMediator<T, N, Key, P, K>,
        protected _handoffManager: HandoffManager
    ) { }
    //--產生並註冊動畫物件
    //public async createAndRegister(info: T, owner: OwnerAgent): Promise<N> {
    public createAndRegister(info: T, owner: OwnerAgent): N {
        const node = this._mediator.requestNodeByInput(info);
        //this._handoffManager.register(info, owner);//--20250925-轉完再一次註冊
        return node;
    }

    /**
     * 由owner主動將自己擁有的動畫位置資料交給另一個owner（透過ownerId找）
     * @param info any extends IReelInfo
     * @param targetOwnerId ISymbolOwnerAgent裡面有ownerId屬性
     */
    public async handoffSingleByOwnerId(info: Pick<I, 'reelIndex' | 'iconIndex' | 'symbolId'>, targetOwnerId: number): Promise<void> {
        return this._handoffManager.handoffSingleByOwnerId(info, targetOwnerId);
    }

    public getInfoByOwnerAgent(info: Pick<I, 'reelIndex' | 'iconIndex' | 'symbolId'>, owner: OwnerAgent):
        Pick<T, 'reelIndex' | 'iconIndex' | 'symbolId'> | null {
        return this._handoffManager.getInfoByOwnerAgent(info, owner);
    }

    //--向列表移除註冊(銷毀物件或推回物件池使用)
    public unRegisterData(info: T): void {
        this._handoffManager.unRegister(info);
    }
    public registerData(info: T, owner: OwnerAgent): void {
        this._handoffManager.register(info, owner);
    }

    public multiUnRegister(infos: Pick<I, 'reelIndex' | 'iconIndex' | 'symbolId'>[]): void {
        this._handoffManager.multiUnRegister(infos);
    }

    //public async multiRegisty(info: T[], owner: OwnerAgent): Promise<void> {
    public multiRegisty(info: T[], owner: OwnerAgent): void {
        //await this._handoffManager.multiRegisty(info, owner);
        this._handoffManager.multiRegisty(info, owner);
    }
    // 註冊自己為擁有者
    public registerYourself(owner: OwnerAgent): void {
        this._handoffManager.registerOwner(owner);
    }

    public releaseAll(): void {
        this._handoffManager.releaseAll();
    }
    /**除錯使用,查看列表狀態 */
    public debugCheckAllOwners(): void {
        /*
        GameUtilsTools.debugLog('DEBUG_TITLE', 'debugCheckAllOwners', {
            message: '==call by CrossAniServer:debugCheckAllOwners==='
        });*/
        this._handoffManager.debugCheckAllOwners();
    }

    /*目前外部應該沒有要使用這個方法
    public getAllOwnersInCell(reelIndex: number, iconIndex: number): Array<{ info: Pick<I, "reelIndex" | "iconIndex" | "symbolId">, owner: ISymbolOwnerAgent }> {
        return this._handoffManager.getAllOwnersInCell(reelIndex, iconIndex);
    }*/

    /*目前外部應該沒有要使用這個方法
    public unRegisterAllBySameOwner(owner: ISymbolOwnerAgent): void {
        this._handoffManager.unRegisterAllBySameOwner(owner);
    }*/

    //--轉移控制權與抽取對方持有的物件
    public async handoff(info: Pick<I, "reelIndex" | "iconIndex">, newOwner: OwnerAgent): Promise<void> {
        await this._handoffManager.handoff(info, newOwner);
    }
    //--轉移多個控制權與抽取對方持有的物件(非持有者要求轉移多個物件)
    public async multiHandoffBySameOwner(infos: Pick<I, 'reelIndex' | 'iconIndex' | 'symbolId'>[], newOwner: OwnerAgent): Promise<void> {
        await this._handoffManager.multiHandoffBySameOwner(infos, newOwner);
    }
    //--轉移多個控制權與抽取對方持有的物件(給持有者本身使用,從自己轉移到別人身上) by ownerId
    public async multiHandoffBySameOwnerID(infos: Pick<I, 'reelIndex' | 'iconIndex' | 'symbolId'>[], targetOwnerId: number): Promise<void> {
        await this._handoffManager.multiHandoffBySameOwnerID(infos, targetOwnerId);
    }
    //--註冊多個物件(非持有者要求註冊多個物件給已知的owner)
    public async multiRegistryByID(info: Pick<I, 'reelIndex' | 'iconIndex' | 'symbolId'>[], targetOwnerId: number): Promise<void> {
        await this._handoffManager.multiRegistryByID(info, targetOwnerId);
    }

    //--取消..沒甚麼意義的功能,且已經超出權責了
    public async decorateNode(target: N, playData: P): Promise<void> {
        this._mediator.decorate(target, playData);
    }

    /*
    public setTargetGroup(target: N, groupId: number): void {
        this._mediator.setAniGroup(target, groupId);
    }*/

    /**
     * 只產動畫資料不產生實體..適合需要檢查是否有同個位置有相同物件的檢查.
     * 如果你有該需求,請透過該方法取出動畫資料後自行比對.
     * 再比對後,如果依然需要產出動畫實體,可以再呼叫createAndRegister方法來產出實體。
     * @param info 
     * @returns
     */
    public buildPlayData(info: T): P {
        return this._mediator.buildPlayData(info);
    }


}