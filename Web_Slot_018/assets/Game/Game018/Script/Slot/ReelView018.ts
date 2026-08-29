import { _decorator, Component, Node, Vec3, UITransform, Game, game } from 'cc';
import { IconReelView } from 'db://assets/Scripts/ReelTemplate/ReelTemplate_2/Scripts/IconReelView';
import { ReelRoundState, ReelEvent } from 'db://assets/Scripts/ReelTemplate/ReelTemplate_2/Scripts/Model/ReelData';
import { GameReel018 } from './GameReel018';
import { GameIcon018 } from './GameIcon018';
import { GameState } from '../DefinitionGameData/GameStateConfigDef';
import { DefinitionGameConfigData } from '../DefinitionGameData/DefinitionGameConfigData';
import { Orientation } from 'db://assets/Scripts/Utils/Config';
import { DYN_NODE_PROPERTIES } from '../MyUtils/AnimationSystem/Definitions/AnimationDataOptions';
import { AnimationControllersPoolManager } from '../MyUtils/AnimationSystem/AnimationControllersPoolManager';
import { AniSysTools } from '../MyUtils/AnimationSystem/AniTools/AniSysTools';
import { IAnimationControl } from '../MyUtils/AnimationSystem/Definitions/IAnimationControl';
import { AniCtrlPropDef } from '../MyUtils/AnimationSystem/Components/AniStateLists/AnimationPlayStateBase';
import { SpineController } from '../MyUtils/AnimationSystem/Components/SpineController';
const { ccclass, property } = _decorator;

const {
    CLEAR_SYMBOL_LIST,
    FORECAST_FOR_REEL,
    FORECAST_REEL,
    WILD_LIST,
    REEL_AMOUNT,
    HIGH_ODDS_SYMBOL_LIST,
    PFB_SYMBOL_ANI
} = DefinitionGameConfigData;

@ccclass('ReelView018')
export class ReelView018 extends IconReelView {

    /**
     * ReelView,接收slotMachineController的資料,負責顯示滾輪的圖示
     * 範例當中是繼承ReelView,但功能比較齊全的是繼承IconReelView
     * 兩者都是繼承SlotMachineViewBase
     * slotController<->reelView->reel(每一軸)->gameIcon
     * (-PS-)
     * 1.收資料
     * 2.負責reel和icon的表演
     * 3.原本的公版設計是繼承reelView,這邊是繼承iconReelView但基礎功能相同
     * 多了額外的功能而已
     * 4.每一軸的reel和icon都要分別綁近來它的property資料裡面
     * 5.symbol的產生表演都在裡面了
     * 6.每個reel的node放在this._reelNodeList裡面
     * 7.但是又很反常的把每個reel裡面的gameicon放在this._resultIconList裡面
     * 
     * reelView.createIcon
     * 在一開始的時候會先把icon的prefab產生出來,然後再去控制他的行為(reelView.createIcon)--會透過你掛載的prefabList去產生
     * PS--view.createIcon這邊還是照你的count數量去產生(尚未多一個)
     * 
     * //--reelView頗重要的...他會去控制
     * reelView.initReel()
     * init reel(掛載事件和reel.init)
     * 1.在過程中就會透過 createShowIcon產生額外兩個(上下)的icon
     * 2.iconReel.init--->
     * 先拷貝一個那一軸的iconNodeList(就是預先產生的3個)
     * 在initShowIcon的時候會初始化剛剛丟進來的兩個showIcon.最後會將這兩個分別指給endBounceIcon|startPullIcon(看你編輯器選啥模式)
     * 最後將endBounceIcon推到iconNodeList的最前面
     * movement 會座移動的相關處理
     * 
     * reelOneRoundStart-->每一軸啟動會call(他會一直call start...但這個會判斷是否為該run第一次啟動)
     * <ReelRoundState.FirstRoll>
     * 可以在這邊換模糊的圖
     * 
     * getIconSymbolData--->最後一輪會換成真的資料
     * 
     */
    private _gameReels: GameReel018[];
    private _aryNgSymbolWorldPosition: Vec3[][];
    private _aryFGSymbolWorldPosition: Vec3[][];
    private _orientation: Orientation = null;
    private _fastStopClick: boolean = false;
    //--考慮移出去做成global
    private _gameState: number;
    private _isForecastMode: boolean;
    private _processAniSymbolData: (symbolId: number, reelIndex: number, iconIndex: number, camp: number) => Promise<Node | null> = null;
    private _processHighOddSpineAniAfterFGEnd: (prefabId: string, symbolId: number, reelIndex: number, iconIndex: number) => Promise<Node | null> = null;

    set processAniSymbolData(value: (symbolId: number, reelIndex: number, iconIndex: number, camp: number) => Promise<Node | null>) {
        this._processAniSymbolData = value;
    }
    //--20250611 FG結束後待機表演的高賠率spineAni
    set processHighOddSpineAniAfterFGEnd(value: (prefabId: string, symbolId: number, reelIndex: number, iconIndex: number) => Promise<Node | null>) {
        this._processHighOddSpineAniAfterFGEnd = value;
    }

    set fastStopClick(value: boolean) {
        this._fastStopClick = value;
    }

    get fastStopClick(): boolean {
        return this._fastStopClick;
    }

    constructor() {

        super();
        this._aryNgSymbolWorldPosition = [];
        this._aryFGSymbolWorldPosition = [];
        this._gameState = GameState.NORMAL;

    }

    public override init(): void {
        super.init();
        this._gameReels = this._reels as GameReel018[];
        this._isForecastMode = false;
    }


    public updateIconCamp(campIndex: number): void {
        for (let i = 0; i < this._gameReels.length; i++) {
            for (let icon of this._gameReels[i].iconNodeList) {
                icon.getComponent(GameIcon018).nowFgCamp = campIndex;
            }
        }
    }

    protected override initIcon(): void {

        for (let reelID = 0; reelID < this._reels.length; reelID++) {

            //--camp=0是阿里巴巴, camp=1是四十大盜
            let campIndex: number = (<GameReel018>this._reels[reelID]).camp;

            for (let index = 0; index < this.getIconAmount(reelID); index++) {

                this._resultIconList[reelID][index].init();
                //-寫到reelId和iconIndexInReel,camp
                (<GameIcon018>this._resultIconList[reelID][index]).setGameIconData(reelID, index, campIndex);

            }
            //--這個就slotMachine tool 多複製出來做為表演的

            this._reels[reelID].startPullIcon.getComponent(GameIcon018).setGameIconData(reelID, -1, campIndex);

            //--會被unshift到iconNodeList的最前面
            this._reels[reelID].endBounceIcon.getComponent(GameIcon018).setGameIconData(reelID, -1, campIndex);

        }

        this.initSymbolWorldPosition(this._aryNgSymbolWorldPosition);
    }

    //--預先算好每個symbol的世界座標
    private initSymbolWorldPosition(aryEmptyTarget: Vec3[][]): void {

        for (let i: number = 0; i < this._resultIconList.length; i++) {

            aryEmptyTarget[i] = [];

            for (let j: number = 0; j < this._resultIconList[i].length; j++) {

                /*
                let targetNode: Node = this._resultIconList[i][j].node;//--這是產生的prefab 

                let pos: Vec3 = targetNode.position;

                let uiTransformComponent: UITransform = targetNode.parent.getComponent(UITransform);

                let worldPos: Vec3 = uiTransformComponent.convertToWorldSpaceAR(pos);
                */

                let worldPos: Vec3 = this.reGetRealIconWorldPosition(i, j);

                aryEmptyTarget[i].push(worldPos);
            }

        }

    }

    //--取得不同模式下的symbol世界座標
    /**
     * 20250423 每次都重算一次比較保險,免得再取出座標後玩家旋轉螢幕
     */
    public getSymbolWorldPosition(reelIndex: number, iconIndex: number): Vec3 {


        /*
        let targetAryWorldPosition: Vec3[][] = (this._gameState == GameState.NORMAL || this._gameState == GameState.RE_SPINE) ? this._aryNgSymbolWorldPosition : this._aryFGSymbolWorldPosition;

        return targetAryWorldPosition[reelIndex][iconIndex];
        */

        return this.reGetRealIconWorldPosition(reelIndex, iconIndex);
        /*
        const testPos = this.reGetRealIconWorldPosition(reelIndex, iconIndex);
        console.log('getSymbolWorldPosition:', reelIndex, iconIndex + '\n' +
            'reNew::' + testPos + '\n' +
            'preNew::' + targetAryWorldPosition[reelIndex][iconIndex]
        );

        return this.reGetRealIconWorldPosition(reelIndex, iconIndex);
        */
    }


    //--重新算一次
    public reGetRealIconWorldPosition(reelIndex: number, iconIndex: number): Vec3 {

        let targetNode: Node = this._resultIconList[reelIndex][iconIndex].node;//--這是產生的prefab
        let pos: Vec3 = targetNode.position;
        let uiTransformComponent: UITransform = targetNode.parent.getComponent(UITransform);
        let worldPos: Vec3 = uiTransformComponent.convertToWorldSpaceAR(pos);
        return worldPos;
    }

    public changeGameMode(gameState: GameState, campIndex?: number): void {

        this._gameState = gameState;

        for (let reel of this._reels) {
            (<GameReel018>reel).changeGameMode(gameState, campIndex);
        }

        if (gameState == GameState.FREE_GAME && this._aryFGSymbolWorldPosition.length == 0) {
            this.initSymbolWorldPosition(this._aryFGSymbolWorldPosition);
        }
    }

    public changeRotationResolution(value: Orientation): void {
        if (this._orientation == value) return;
        this._orientation = value;
        return;//--改為每次都是重新算一次不先預先算了
        if (this._gameState == GameState.FREE_GAME) {
            this._aryFGSymbolWorldPosition = [];
            this.scheduleOnce(() => {
                this.initSymbolWorldPosition(this._aryFGSymbolWorldPosition);
            }, 0);
            this.initSymbolWorldPosition(this._aryFGSymbolWorldPosition);
        } else if (this._gameState == GameState.NORMAL || this._gameState == GameState.RE_SPINE) {
            this._aryNgSymbolWorldPosition = [];
            this.scheduleOnce(() => {
                this.initSymbolWorldPosition(this._aryNgSymbolWorldPosition);
            }, 0);
        }
    }


    /**
     * 1.從icon裡面把spineAni抽出來到表演層去使用(該高賠率icon有中線)
     * 2.回收回物件池
     * @returns 
     */
    public getAndRemoveSymbolAniNodeInReel(reelIndex: number, iconIndex: number): Node | null {
        return (<GameIcon018>this._resultIconList[reelIndex][iconIndex]).getSymbolAniNodeAndRemove();
    }

    public getAndRemoveSymbolAniNodeWithWorldPos = (reelIndex: number, iconIndex: number): { target: Node | null, worldPos: Vec3 } => {
        let targetNode: Node | null = this.getAndRemoveSymbolAniNodeInReel(reelIndex, iconIndex);
        let worldPos: Vec3 = this.getSymbolWorldPosition(reelIndex, iconIndex);
        return { target: targetNode, worldPos: worldPos };

    }

    //--將高賠率且沒有得分的icon的spineAni關閉
    public closeSymbolAniNode(reelIndex: number, iconIndex: number): void {
        (<GameIcon018>this._resultIconList[reelIndex][iconIndex]).closeSymbolAniNode();
    }

    //--播放高賠率icon的spineAni
    public playSymbolAni(reelIndex: number, iconIndex: number, aniName?: string): void {
        (<GameIcon018>this._resultIconList[reelIndex][iconIndex]).playSymbolAni(aniName);
    }

    public closeAllSymbolAniNode(): void {
        for (let i: number = 0; i < this._resultIconList.length; i++) {
            for (let j: number = 0; j < this._resultIconList[i].length; j++) {
                this.closeSymbolAniNode(i, j);
            }
        }
    }

    public playAllSymbolAni(): void {
        for (let i: number = 0; i < this._resultIconList.length; i++) {
            for (let j: number = 0; j < this._resultIconList[i].length; j++) {
                this.playSymbolAni(i, j);
            }
        }
    }

    public addBackToGameIcon = (reelID: number, iconIndex: number, spineAniNode: Node): void => {
        (<GameIcon018>this._resultIconList[reelID][iconIndex]).addSymbolAniNode(spineAniNode);
    }

    public setSingleGameIconBrightness(reelID: number, iconIndex: number, brightnessFlag: boolean): void {
        (<GameIcon018>this._resultIconList[reelID][iconIndex]).setBrightness(brightnessFlag);
    }

    public checkGameIconForTest(): void {
        let testReels = this._reels;//--裡面有沒刪掉的(index 1)
        let prepareIconList = this._prepareIconList;//--這邊正常
        let resultIconList = this._resultIconList;//--這裡也有沒刪的
        console.log();
        //this._reels[reelID].startPullIcon.getComponent(GameIcon018).setGameIconData(reelID, -1, campIndex);
    }

    //--要換高賠率的spine skin 在結束FG回到NG時20250610
    public changeSpineAniNodeSkinAfterFG(): void {

        for (let i: number = 0; i < this._resultIconList.length; i++) {
            for (let j: number = 0; j < this._resultIconList[i].length; j++) {
                const gameIcon: GameIcon018 = (<GameIcon018>this._resultIconList[i][j]);
                const spineAniNodeName = gameIcon.getSymbolAniNodeName();
                const iconData = gameIcon.getGameIconData();
                //-iconData.camp會對應到原本所屬的陣營,iconData.iconID會對應到icon的id(or symbolID)
                //--ps 00,01,02,03這些在資料裡面會是 0 1 2 3
                if (spineAniNodeName != '') {
                    const checkSameData: { sameSpine: boolean, prefabKey: string } = this.isIconIdMatched(iconData.iconID, iconData.camp, spineAniNodeName);
                    let aniInterfaceComponent: IAnimationControl | null = null;
                    let spineAniNode: Node;
                    if (!checkSameData.sameSpine && checkSameData.prefabKey != '') {
                        //--移除舊的spineAni換新的並且進入idle狀態
                        spineAniNode = gameIcon.getSymbolAniNodeAndRemove();
                        const prefabAniId = spineAniNode[DYN_NODE_PROPERTIES.PREFAB_ID];
                        aniInterfaceComponent = AniSysTools.findAndGetIAniComponent(spineAniNode) as IAnimationControl;
                        spineAniNode[DYN_NODE_PROPERTIES.GROUP_ID] = [];
                        spineAniNode[DYN_NODE_PROPERTIES.TOKEN_ID] = '';
                        spineAniNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO] = null;
                        spineAniNode[DYN_NODE_PROPERTIES.PREFAB_ID] = '';
                        aniInterfaceComponent.slotMachineIndexInfo = null;
                        aniInterfaceComponent.tokenID = '';
                        aniInterfaceComponent.groupID = [];
                        AnimationControllersPoolManager.getInstance().pushInstancePrefabNodeToPool(prefabAniId, spineAniNode);
                        this.getHighOddSpineAniNode(checkSameData.prefabKey, iconData.symbolID, i, j).then((node) => {
                            if (node) {
                                // 處理 node
                                gameIcon.addSymbolAniNode(node);
                            }
                        });

                    } else if (checkSameData.sameSpine) {
                        //--同一個spineAni就不需要換了,直接切換動畫狀態到idle
                        spineAniNode = gameIcon.getSymbolAniNode();
                        aniInterfaceComponent = AniSysTools.findAndGetIAniComponent(spineAniNode) as IAnimationControl;
                        const plaData: AniCtrlPropDef = (<SpineController>aniInterfaceComponent).getCustomizeSpineTrackEntry('idle');
                        if (!plaData) {
                            const playData: AniCtrlPropDef = new AniCtrlPropDef();
                            playData.targetName = 'idle';
                            playData.loop = true;
                            playData.timeScale = 1;
                            aniInterfaceComponent.setAniDataInfo(playData);
                        }
                        gameIcon.playSymbolAni();
                    }


                }

            }
        }
    }

    //--準備把所有的icon的spineAni關閉,並且回收到物件池
    //--這邊是沒有中線的高賠率spineAni,會留在gameIcon裡面所以要回收掉
    public cleanIdleSymbolAnis(): void {
        for (let i: number = 0; i < this._resultIconList.length; i++) {
            for (let j: number = 0; j < this._resultIconList[i].length; j++) {
                const spineNode = this.getAndRemoveSymbolAniNodeInReel(i, j);
                this.clearAndRecycleSpineNode(spineNode);
            }
        }

        //--裡面已經是gameIcon的node了
        for (const icon of this._prepareIconList) {
            const spineNode = (<GameIcon018>icon).getSymbolAniNodeAndRemove();
            this.clearAndRecycleSpineNode(spineNode);
        }

    }

    private clearAndRecycleSpineNode(spineNode: Node | null): void {
        if (!spineNode) return;
        const prefabId = spineNode[DYN_NODE_PROPERTIES.PREFAB_ID];
        // 重置 spineNode 自訂屬性
        spineNode[DYN_NODE_PROPERTIES.GROUP_ID] = [];
        spineNode[DYN_NODE_PROPERTIES.TOKEN_ID] = '';
        spineNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO] = null;
        spineNode[DYN_NODE_PROPERTIES.PREFAB_ID] = '';

        // 重置 spineNode 上的動畫控制介面資料
        const aniComp = AniSysTools.findAndGetIAniComponent(spineNode) as IAnimationControl;
        if (aniComp) {
            aniComp.slotMachineIndexInfo = null;
            aniComp.tokenID = '';
            aniComp.groupID = [];
        }
        // 推回物件池
        AnimationControllersPoolManager.getInstance().pushInstancePrefabNodeToPool(prefabId, spineNode);
    }

    //--這邊完成亂數產生初始盤面
    /*
    public override initIconSymbol(iconSymbolData: number[][]): void {
        super.initIconSymbol(iconSymbolData);
        console.log('finish initIconSymbol in ReelView018', this._processAniSymbolData);
        console.log();
    }*/

    public changeInitSpineAniNode = (): void => {

        let campIndex: number = 0;
        for (let i = 0; i < this._resultIconList.length; i++) {
            if (i > 2) {
                campIndex = 1;
            }
            for (let j = 0; j < this._resultIconList[i].length; j++) {
                let gameIconData = (<GameIcon018>this._resultIconList[i][j]).iconData;
                this.getSymbolAniNode(gameIconData.iconID, i, j, campIndex).then((node) => {
                    if (node) {
                        // 處理 node
                        (<GameIcon018>this._resultIconList[i][j]).addSymbolAniNode(node);
                    }
                });
            }
        }

    }


    protected override changePrepareIconSymbol(reelID: number): void {

        let symbolID = this.getIconSymbolData(reelID);
        //--原諒我為了拿到這個區域變數才這麼下幹不用super.changePrepareIconSymbol
        let prepareIcon = this._prepareIconList[reelID];

        prepareIcon.updateSymbol(symbolID);
        if (this._reelStateList[reelID] === ReelRoundState.FinalRoll) {
            (<GameIcon018>prepareIcon).closeBlur();
            (<GameIcon018>prepareIcon).rollState = ReelRoundState.FinalRoll;
            //--20250524-從這裡換大賠率的spine塞進去
            /**
             * 因為父類別的changePrepareIconSymbo他不是async的方法,但是要等getSymbolNode(promise)的結果.
             * 除了在拆出一支方法外,也可以用then來處理
             */
            const currentCamp = (<GameIcon018>prepareIcon).getCurrentCamp();
            const iconReelInfo: { reelIndex: number, iconIndex: number } = (<GameIcon018>prepareIcon).getIconReelInfo();
            this.getSymbolAniNode(symbolID, iconReelInfo.reelIndex, iconReelInfo.iconIndex, currentCamp).then((node) => {
                if (node) {
                    // 處理 node
                    (<GameIcon018>prepareIcon).addSymbolAniNode(node);
                }
            });

        } else {
            //--CLEAR_SYMBOL_LIST=[6,7,8,10]--這些不會有模糊
            if (!CLEAR_SYMBOL_LIST.includes(symbolID)) {
                (<GameIcon018>prepareIcon).openBlur(symbolID);
            } else {
                //--特殊符號不會有模糊
                (<GameIcon018>prepareIcon).closeBlur();
            }
        }
    }

    private isIconIdMatched(symbolIndex: number, camp: number, iconId: string): { sameSpine: boolean, prefabKey: string } {

        const returnData = { sameSpine: false, prefabKey: '' };
        if (symbolIndex <= 1) {
            let prefabId;
            if (camp === 0) {
                prefabId = (symbolIndex === 0 ? PFB_SYMBOL_ANI + '00' : PFB_SYMBOL_ANI + '01')
            } else {
                prefabId = (symbolIndex === 0 ? PFB_SYMBOL_ANI + '02' : PFB_SYMBOL_ANI + '03')
            }
            returnData.prefabKey = prefabId;
            if (iconId === prefabId) {
                returnData.sameSpine = true;
            } else {
                returnData.sameSpine = false;

            }
            return returnData;
        } else {
            return returnData;
        }

    }

    //--create symbol node
    private async getSymbolAniNode(symbolId: number, reelIndex: number, iconIndex: number, camp: number): Promise<Node | null> {
        if (HIGH_ODDS_SYMBOL_LIST.includes(symbolId)) {
            const symbolNode = await this._processAniSymbolData(symbolId, reelIndex, iconIndex, camp);
            return symbolNode;
        } else {
            // 如果不是高賠率符號，則返回 null 或其他處理
            return null;
        }
    }

    //--20250611 在FG結束後創造一個全新的spineAniNode用來待機(不推入aniController裡面的runningPool)
    private async getHighOddSpineAniNode(prefabId: string, symbolId: number, reelIndex: number, iconIndex: number): Promise<Node | null> {
        const symbolNode = await this._processHighOddSpineAniAfterFGEnd(prefabId, symbolId, reelIndex, iconIndex);
        return symbolNode;
    }

    //protected override stopAllReelRoll(): void {-----feature 1.0 的方法已經被移除
    protected override fastStopAllReel(): void {
        this._fastStopClick = true;
        super.fastStopAllReel();
    }

    /**
     * 狀態改變事件，可以在這裡做狀態的判斷
     * @param reelID 滾輪ID 
     * @param reelEvent 單輪滾的狀態
     * @returns 
     */
    protected override receiveReelEvent(reelID: number, reelEvent: ReelEvent): void {

        if (this._reelStateList[reelID] == ReelRoundState.FirstRoll) {
            //reset陣營資料+寫入滾輪狀態

        } else if (this._reelStateList[reelID] == ReelRoundState.FinalRoll) {
            //--寫入最後一輪的狀態--wild要再換牌處理(不顯示結果用特殊符號代替symbol_index=10)
            //console.log('final_roll_state', reelID);
        } else if (this._reelStateList[reelID] == ReelRoundState.RollEnd && this._currentReadyHandReelID != 99) {
            //--有聽牌
            if (reelID == FORECAST_FOR_REEL || reelID == FORECAST_REEL) {
                //--聽牌狀況下第二軸或是第五軸轉完(要接appear的表演)
            }
        }

        for (let gameIcon of this._reels[reelID].iconNodeList) {

            gameIcon.getComponent(GameIcon018).rollState = this._reelStateList[reelID];
        }

        this._reels[reelID].startPullIcon.getComponent(GameIcon018).rollState = this._reelStateList[reelID];
        super.receiveReelEvent(reelID, reelEvent);

    }

    //--20250429-78美術壓黑有兩種不同的明亮度,wild猜拳的明亮度更暗
    public setWildModeForGameIconDarkness(): void {
        let targetLength: number = this._resultIconList.length;
        for (let i: number = 0; i < targetLength; i++) {
            for (let j: number = 0; j < this._resultIconList[i].length; j++) {
                let gameIcon: GameIcon018 = <GameIcon018>this._resultIconList[i][j];
                gameIcon.setWildBrightness();
            }
        }
    }

    /**
    * 關閉/開啟指定的全部(整個盤面)的亮度(true=變暗/false=正常) 
    * @param brightnessFlag 
    */
    public closeOrOpenAllGameIconBright(brightnessFlag: boolean): void {

        let targetLength: number = this._resultIconList.length;
        for (let i: number = 0; i < targetLength; i++) {
            this.setIconBrightness(i, brightnessFlag);
        }
    }

    /**
    * 關閉/開啟指定的指定軸的亮度(true=變暗/false=正常)
    * @param reelIndex 
    * @param brightnessFlag 
    */
    public openOrCloseWholeReelIconBright(reelIndex: number, brightnessFlag: boolean): void {

        this.setIconBrightness(reelIndex, brightnessFlag);
    }

    /**
     * 關閉/開啟指定的指定軸的指定icon的亮度(true=變暗/false=正常)
     * @param value 
     */
    public openOrCloseSingleGameIconBright(value: { reelIndex: number, iconIndex: number[], brightnessFlag: boolean }[]): void {

        for (let i: number = 0; i < value.length; i++) {
            this.setIconBrightness(value[i].reelIndex, value[i].brightnessFlag, value[i].iconIndex);
        }
    }

    public setTweenDarkForForecast(): void {

        let targetLength: number = this._resultIconList.length;
        for (let i: number = 0; i < targetLength; i++) {
            for (let j: number = 0; j < this._resultIconList[i].length; j++) {
                if (i == FORECAST_FOR_REEL) {
                    let gameIcon: GameIcon018 = <GameIcon018>this._resultIconList[i][j];
                    if (!WILD_LIST.includes(gameIcon.iconData.iconID)) {
                        gameIcon.setTweenDark();
                    }
                } else if (i != FORECAST_REEL) {
                    (<GameIcon018>this._resultIconList[i][j]).setTweenDark();
                }
            }
        }
    }

    //--取消最後一軸的dark效果(給聽牌結束時,聽牌軸後面那軸要打開)
    public cancelTweenDarkForForecast(): void {

        for (let gameIcon of this._resultIconList[REEL_AMOUNT - 1]) {
            gameIcon.setBrightness(false);
        }
    }


    /**
     * 
     * @param reelIndex 
     * @param iconIndex 
     * @param colorAlpha 0-255 不指定為預設恢復原本的spriteFrame color
     */
    public setIconAlpha(reelIndex: number, iconIndex: number, colorAlpha?: number): void {

        (<GameIcon018>this._resultIconList[reelIndex][iconIndex]).setAlpha(colorAlpha);
    }

    public changeReadyHandMode(reelID: number, enter: boolean) {

        if (enter) {
            this._isForecastMode = true;
            this._gameReels[reelID].enterReadyHandMode();
        }
        else {
            this._isForecastMode = false;
            this._gameReels[reelID].exitReadyHandMode();
        }
    }

    /**
     *  
     * protected isStopAllReel(): boolean {
        let isStop: boolean = this.isFastModeCallback() || this.checkFloatIsZero(this._stopSpaceTime);
        return isStop;}
     這邊就會return true的情況下就不會走this.showReadyHandCallback?.(reelID);  
    
     */
    /*
     protected override checkShowReadyHand(reelID: number): void {
        //--for test
        let haveReadyHand: boolean = this.reelHaveReadyHand(reelID);
        let checkPreviousReelIsRollEnd = reelID === 0 ? true : this._reelStateList[reelID - 1] === ReelRoundState.RollEnd; // 0是第一輪，所以不用檢查上一輪
        let canShowReadyHand: boolean = haveReadyHand && checkPreviousReelIsRollEnd;
        let isStopAllReel: boolean = this.isStopAllReel();
        console.log('isStopAllReel', isStopAllReel, 'checkShowReadyHand', reelID, 'haveReadyHand:', haveReadyHand, 'checkPreviousReelIsRollEnd:', checkPreviousReelIsRollEnd, 'canShowReadyHand:', canShowReadyHand);

        super.checkShowReadyHand(reelID);
    }*/

    /**
     * 聽牌軸的變速度,不去影響到下一軸的速度
     * 原本的判斷是reelID>=this._currentReadyHandReelID
     * 這樣聽牌軸後面的軸會變速度
     */
    protected override reelHaveReadyHand(reelID: number): boolean {
        return reelID === this._currentReadyHandReelID;
    }

    /**
     * 只是我要檢查資料所以這樣override掉
     * 之後要拿掉202250304
     */
    /*
    protected override reelOneRoundStart(reelID: number): void {

        if (this._reelStateList[reelID] === ReelRoundState.FirstRoll) {
            //--全部滾輪啟動的時候會觸發一次(一軸觸發一次)
            console.log('reelOneRoundStart', this._resultIconList);
            console.log('reelOneRoundStart@@');
        }
        super.reelOneRoundStart(reelID);
    }*/

    //-test function
    public closeAllIconBright(): void {

        /**
         * this._reels==>放全部的reel
         * [[reel,reel,reel,reel]]
         * 每個reel裡面的node=reelNode(掛載reel的node..就是_reelNodeList裡面的node)
         * 
         * 每一個reel裡面的iconNodeList就是就是裝個別gameIcon的node(有幾個icon就有幾個node)
         * e.g
         * this._reels[1].iconNodeList=[[icon,icon,icon,icon]]
         * this._reels[1].iconNodeList[3]---這個是抓到第二軸的第四個icon node
         * this._reels[1].iconNodeList[3].parent=iconRoot
         * this._reels[1].iconNodeList[3].getComponent(GameIcon)--->這就是symbol的component
         * 
         * 這些掛著icon的node(prefab),會被add在你在編輯器裡面掛載的IconRoot 這個node裡面
         * (所以他們的parent就是IconRoot)
         * 
         * 而裝iconPrefabNode裡面的component就是GameIcon
         * 
         * PS--這邊要小心,因為會多產生一個prefab(一上一下),所以你要自己去過濾
         * 舉例如果你的一軸有3個icon,那這個list會有4個實體(其中一個不會出現在畫面中間(上下移動))
         * 
         * _reelNodeList==>[reelNode,reelNode,reelNode,reelNode]
         * 
         * 
         * _resultIconList==>裝最終結果的gameIcon[[icon,icon,icon],[icon,icon,icon],[icon,icon,icon],[icon,icon,icon]]
         * 這個是裝整理過後的最終結果icon
         * 
         * 你要控制symbol的一些行為(換圖啦(可能你的symbol會疊很多層)..之類的)
         * 需要透過這個gameIcon去控制,你要更多行為的話需要繼承gameIcon來做額外的操作
         * 目前只有提供基本的Active,SetPosition,SetParent,SetAnchor,Hide,Show,updateSymbol,SetBrightness
         * 基礎功能
         * 
         * 
         */
        console.log('this._reels', this._reels, this._reels[0].node);
        console.log('this._reelNodeList', this._reelNodeList);
        console.log('this._resultIconList', this._resultIconList);
        this._resultIconList[0][0].setBrightness(true);
    }








}


