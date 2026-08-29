import { IReelInfo } from '../../MyUtils/BasicGameDataDefinition/BasicGameDataDefinition';
import { ICrossSystemSymbolAniService } from '../../MyUtils/AniHandoffManager/CrossSystemAniServiceFacade/ICrossSystemAniServiceFacade';
import { ISymbolOwnerAgent } from '../../MyUtils/AniHandoffManager/AniHandoff/IAniHandoff';
import { Node } from 'cc';
import { IDIAgentFactory } from './IDIAgentFactory';

export class DIAgentFactory implements IDIAgentFactory {

    /**
     * 因為實際產生動畫物件的服務是跨系統的,所以這裡需要注入一個跨系統的動畫服務
     * 且是從reel裡面去執行產生的動作
     * 但是slotMachine本身才是實踐ISymbolOwnerAgent的物件,
     * 如果直接將ISymbolOwnerAgent注入到reel裡面,(也就是this=slotMachine)
     * 雖然注入reel是interface會保護住上層的slotMachine不會被reel改變,
     * 但這樣低層級的物件卻會持有高層級的物件的控制權有違依賴反轉原則.
     * 所以這裡需要一個DI的工廠來注入這個服務,且讓reel不知道握有這個控制權的物件是誰.就可以切割開來
     * 將耦合集中在factory上,而不是reel上.
     * @param aniService 
     * @param owner 
     */
    constructor(
        private _aniService: ICrossSystemSymbolAniService<IReelInfo, Node, string>,
        private _owner: ISymbolOwnerAgent
    ) { }

    //public async createAndRegister(info: IReelInfo): Promise<Node> {
    public createAndRegister(info: IReelInfo): Node {
        return this._aniService.createAndRegister(info, this._owner);
    }

    public unRegister(info: IReelInfo): void {
        this._aniService.unRegisterData(info);
    }

    public multiUnRegister(infos: Pick<IReelInfo, 'reelIndex' | 'iconIndex' | 'symbolId'>[]): void {
        this._aniService.multiUnRegister(infos);
    }

    public register(info: IReelInfo): void {
        //console.log('check_register_____reelIndex', info.reelIndex,'iconIndex__', info.iconIndex,'_symbolId__', info.symbolId);
        this._aniService.registerData(info, this._owner);
    }

    public handoffSingleByOwnerId(info: IReelInfo, targetOwnerId: number): void {
        this._aniService.handoffSingleByOwnerId(info, targetOwnerId);
    }

    public getInfoByOwnerAgent(info: IReelInfo): IReelInfo | null {
        return this._aniService.getInfoByOwnerAgent(info, this._owner);
    }

    public debugCheckAllOwners(): void {
        this._aniService.debugCheckAllOwners();
    }

    //public async multiRegisty(info: IReelInfo[]): Promise<void> {
    public multiRegisty(info: IReelInfo[]): void {
        //await this._aniService.multiRegisty(info, this._owner);
        this._aniService.multiRegisty(info, this._owner);
    }

    public async multiRegistryByID(info: Pick<IReelInfo, 'reelIndex' | 'iconIndex' | 'symbolId'>[], targetOwnerId: number): Promise<void> {
        await this._aniService.multiRegistryByID(info, targetOwnerId);
    }
}