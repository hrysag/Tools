import { _decorator, randomRangeInt, v3, Node, UITransform, Vec3, game } from 'cc';
import { UniMovement } from './ReferencePathForUniSlot';
import { AnimationController, GameState } from '../ReferencePath';
import { UniIcon1016 } from './UniIcon1016';
import { SymbolNumber } from './SymbolNumber';
import { IDIAgentFactory } from './DIFactory/IDIAgentFactory';
import { ReelBounceConfig1016 } from './ReelBounceConfig1016';
import { IBasicMovementData, IWildMovementDataNew } from './ISlotDefinitionData';
import { GameUtilsTools } from '../MyUtils/GameUtilsTool';
//--這個比較特殊一點要解構的方式抽出config裡面的變數就要單獨出來免得造成循環引用
import { DefinitionGameConfigData } from '../DefinitionGameData1016/GameConfigInstance';
import { GameGlobalKeys } from '../DefinitionGameData1016/GameGlobalData1016';
import { AnimationStateType } from '../MyUtils/AnimationSystemV2/Components/AniStateLists/AnimationPlayStateBase';
import { BasicReel } from './BasicSlotMachine/BasicReel';
import {
    IReelInfo,
    IPlayAniData,
    AnimationControllersPoolManager,
    DYN_NODE_PROPERTIES,
    //AniSysTools,
    IAnimationControl,
    IMatchWildGroupResult,
    SymbolOwnerAgentID,
    Direction
} from '../ReferencePath';
import { GlobalAccessReader } from '../DefinitionGameData1016/AccessDefs/GlobalAccess';

const { ccclass, property } = _decorator;

const {
    ALL_SYMBOL_LIST_NG,
    ALL_SYMBOL_LIST_RE,
    ALL_SYMBOL_LIST_FG,
    UNIQUE_SYMBOL_LIST_NG,
    UNIQUE_SYMBOL_LIST_RE,
    UNIQUE_SYMBOL_LIST_FG,
    WILD_LIST,
    SCATTER_LIST,
} = DefinitionGameConfigData;

const DEBUG_TITLE = 'UniReel1016';

@ccclass('UniReel1016')

export class UniReel1016 extends BasicReel<SymbolNumber, UniIcon1016> {
    @property(ReelBounceConfig1016)
    private bounceConfig: ReelBounceConfig1016 = null;

    private _currentRandomData: number[] = [];
    private _hasScatter: boolean = false;
    private _isLock: boolean = false; //--是否鎖定軸(不讓他動)
    public oneReelFinalStartCallBack: (reelID: number) => void = null;
    private _singleWildGroupResultData: IMatchWildGroupResult[];
    private _upConsecutiveExtraCardsData: number[];//--向上連續補牌庫
    private _wildCount: number = 0;
    private _hasWholeWild: boolean = false;//--整軸都是wild
    private _hasWildMoved: boolean = false;//--wild有沒有移動過
    protected _resultStarted = false;//--為了拿最開始播放一輪的(到定位)的事件通知
    private _aniCrossServiceProxyFactory: IDIAgentFactory;//--代理擁有者
    private _endCardCount: number = 0;//--補牌的數量fastMode會用到
    private _defaultReelLayerIndex: number = 0;//--原本的軸層級
    private _currentReelLayerIndex: number = 0;//--目前的軸層級
    private _flagForFastStop: boolean = false;//--快速停止的旗標
    private _isReadyHand: boolean = false;//--該round是否是聽牌的軸
    private _isFastMode: boolean = false;//--是否為快速模式
    private _isWholeBoardReadyHand: boolean = false;//--該round是否是在該盤面有任意軸聽牌
    //private _endBouncePromise: Promise<void> | null = null;//---20251022新增
    private _endBouncePromise: Promise<number> | null = null;//---20251022新增
    private _takeExtraCardsInRound: { end: { len: number, index: number }, start: { len: number, index: number } } = null;
    private _fakeWildLayerContainer: Node = null;//--用來放fake wild的容器
    private _isFirstLockInRound: boolean = false;//--是否為該round第一次鎖定
    private _wholeReelDark: boolean = false;//--整軸變暗/亮

    set wholeReelDark(value: boolean) {
        this._wholeReelDark = value;
    }

    set fakeWildLayerContainer(value: Node) {
        this._fakeWildLayerContainer = value;
        this.setIconFakeWildNode();
    }
    //--該輪最大補牌數量
    set takeExtraCardsInRound(value: { end: { len: number, index: number }, start: { len: number, index: number } }) {
        this._takeExtraCardsInRound = value;
    }
    //--該輪出場補牌數量(用在新一輪開始的時候(上一輪的出場補牌))
    get upConsecutiveExtraCardsData(): number[] {
        return this._upConsecutiveExtraCardsData;
    }

    get defaultReelLayerIndex(): number {
        return this._defaultReelLayerIndex;
    }

    set defaultReelLayerIndex(value: number) {
        this._defaultReelLayerIndex = value;
    }

    get currentReelLayerIndex(): number {
        return this._currentReelLayerIndex;
    }

    set currentReelLayerIndex(value: number) {
        this._currentReelLayerIndex = value;
    }

    get isLock(): boolean {
        return this._isLock;
    }

    set isLock(value: boolean) {
        this._isLock = value;
    }

    get isFirstLockInRound(): boolean {
        return this._isFirstLockInRound;
    }

    set isFirstLockInRound(value: boolean) {
        this._isFirstLockInRound = value;
    }

    get hasWholeWild(): boolean {
        return this._hasWholeWild;
    }

    set hasWholeWild(value: boolean) {
        this._hasWholeWild = value;
    }

    set hasWildMoved(value: boolean) {
        this._hasWildMoved = value;
    }

    set hasScatter(value: boolean) {
        this._hasScatter = value;
    }

    get hasScatter(): boolean {
        return this._hasScatter;
    }
    set singleWildGroupResultData(value: IMatchWildGroupResult[]) {
        this._singleWildGroupResultData = value;

    }

    get singleWildGroupResultData(): IMatchWildGroupResult[] {
        return this._singleWildGroupResultData;
    }

    public override init(reelID: number): void {
        //--阻止UniReel的initIconSymbol呼叫
        this.reelID = reelID;
        //--紀錄原本的軸層級
        this._defaultReelLayerIndex = this.node.getSiblingIndex();
        //-PS:6=下面多4個+2個預備牌(原本用5)
        this.createIcon(this.iconAmount + 5); // 預備兩個icon，上跟下
        this.initLayout();
        this.onStartRoll = this.upBouncing;
        this._upConsecutiveExtraCardsData = [];

    }

    private setIconFakeWildNode(): void {

        for (let index = 0; index < this._iconList.length; index++) {
            const icon = this._iconList[index];
            icon.fakeWildLayerContainer = this._fakeWildLayerContainer;
        }
    }

    //--在init完之後馬上接著做要在initIconSymbol之前做..不然他就會透過initIconSymbol產生出首盤盤面
    public injectAniService(proxyOwner: IDIAgentFactory): void {
        this._aniCrossServiceProxyFactory = proxyOwner;
    }

    //--每次旋轉就會呼叫
    public reset(): void {

        this.data.clear();
        this._flagForFastStop = false;
        this._hasScatter = false;
        this._resultStarted = false;
        this._isReadyHand = false;
        this._isFastMode = false;
        this._isWholeBoardReadyHand = false;
        this._wholeReelDark = false;
        const moveIntervalDefault = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.roll?.moveInterval) as number;
        this.checkIndexZeroSpriteFrame();
        this.setmoveInterval(moveIntervalDefault);
    }


    public setmoveInterval(speed: number): void {
        this.moveInterval = speed;
    }

    public getmoveInterval(): number {
        return this.moveInterval;
    }

    //--設定初始盤面的資料
    public setInitIconData(data: number[]): void {

        for (let index = 0; index < this.iconList.length; index++) {
            //const sym = SymbolNumber.pool.instance();
            const sym = new SymbolNumber();
            sym.symbolID = data[index];
            const icon = this.iconList[index];
            icon.symbol = sym;
            icon.updateSymbol();
        }
    }

    public setIconLight(isDark: boolean, iconIndex?: number[]): void {

        if (iconIndex) {
            for (let i = 0; i < iconIndex.length; i++) {
                let index: number = iconIndex[i];
                this._iconList[index].setIconLight(isDark);
            }
        } else {
            for (let index = 0; index < this._iconList.length; index++) {
                this._iconList[index].setIconLight(isDark);
            }
        }
    }

    /**
     * 
     * @param isDark true=開啟變暗效果 false=關閉變暗效果
     * @param excludeSymbolIds 不參與效果的symbolID陣列
     */
    public setAllLightExcludeSymbolIds(isDark: boolean, excludeSymbolIds: number[]): void {

        if (isDark === this._wholeReelDark) return;
        this._wholeReelDark = isDark;
        for (let index = 0; index < this._iconList.length; index++) {
            const icon = this._iconList[index];
            const id = icon.symbol?.symbolID ?? -1;
            if (!excludeSymbolIds.includes(id)) {
                icon.setIconLight(isDark);
            }
        }
    }

    /**
     * 
     * @param isDark true=開啟變暗效果 false=關閉變暗效果
     * @param iconIndex 哪一個icon要改變,不給值的話則是全部改變
     */
    public async setIconLightTween(isDark: boolean, iconIndex?: number[]): Promise<void> {

        const promises: Promise<void>[] = [];
        if (iconIndex !== undefined) {
            for (let i = 0; i < iconIndex.length; i++) {
                let index: number = iconIndex[i];
                promises.push(this._iconList[index].setTweenBrightness(isDark));
            }
        } else {
            for (let index = 0; index < this._iconList.length; index++) {
                promises.push(this._iconList[index].setTweenBrightness(isDark));
            }
        }
        await Promise.all(promises);
    }

    public async setIconLightTweenExcludeSymbolIds(isDark: boolean, excludeSymbolIds: number[]): Promise<void> {

        const promises: Promise<void>[] = [];
        for (let index = 0; index < this._iconList.length; index++) {
            const icon = this._iconList[index];
            const id = icon.symbol?.symbolID ?? -1;
            if (!excludeSymbolIds.includes(id)) {
                promises.push(icon.setTweenBrightness(isDark));
            }
        }
        await Promise.all(promises);
    }

    //private _pendingWildTask: Promise<void> = Promise.resolve();

    protected override setIconData(movement: UniMovement): void {

        const moveOutIndex = this.inverseDirection ? 0 : this.iconList.length - 1;
        const target = this.getData();
        const reelData: IReelInfo = {
            reelIndex: this.reelID,
            iconIndex: target.iconIndex,
            symbolId: target.symbolID
        };

        const targetNode: UniIcon1016 = this.iconList[moveOutIndex];
        // 1. 清除舊資料（wild / scatter / spine）
        this.removeAndRecycleImmediately(targetNode);

        // 2. 設定新符號基礎資料
        target.reelIndex = this.reelID;
        targetNode.symbol = target;
        targetNode.isScatter = false;
        targetNode.wildData.isWild = false;

        const beforeCut = this.data.count;//--test
        const reelID = this.reelID;//--test
        console.log();

        if (target.symbolID === WILD_LIST[0]) {

            this._wildCount++;
            targetNode.wildData.isWild = true;
            targetNode.wildData.wildIndex = this._wildCount;
            targetNode.clearSymbolSpriteFrame();

            // 交由背景流程跑 wild attach
            //this._pendingWildTask = this.processSetWildIconData(targetNode, reelData, this._wildCount);
            this.processSetWildIconData(targetNode, reelData, this._wildCount);

        } else if (target.symbolID === SCATTER_LIST[0]) {

            targetNode.isScatter = true;
            this.attachScatterSymbol(targetNode, reelData);

        } else {

            this.attachNormalSymbol(targetNode, reelData);
        }

        // 4. callback
        /*
        try {
            this.onSetIconData?.(targetNode.symbol, moveOutIndex);
        } catch (e) {
            //GameUtilsTools.debugLog(DEBUG_TITLE, 'setIconData_onSetIconData_error', { e, reelData }, 'error');
        }*/
    }

    private async attachScatterSymbol(targetNode: UniIcon1016, reelData: IReelInfo): Promise<void> {

        //const aniNode = await this.getPrefabNodeFromProxy(reelData);
        const aniNode = this.getPrefabNodeFromProxy(reelData);

        if (!aniNode) {

            //GameUtilsTools.debugLog(DEBUG_TITLE, 'attachScatterSymbol_error', { reelData }, 'error');
            return;
        }

        try {

            const spineTarget = aniNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL] as IAnimationControl;
            const { leftover } = targetNode.addSymbolAniNode(aniNode);
            if (leftover) this.clearAndRecycleWildNodes(leftover);

            aniNode.active = true;
            spineTarget.init();

        } catch (e) {
            //GameUtilsTools.debugLog(DEBUG_TITLE, 'attachScatterSymbol_error', { e, reelData }, 'error');
        }
    }

    //private async attachNormalSymbol(targetNode: UniIcon1016, reelData: IReelInfo): Promise<void> {
    private attachNormalSymbol(targetNode: UniIcon1016, reelData: IReelInfo): void {

        //const aniNode = await this.getPrefabNodeFromProxy(reelData);
        const aniNode = this.getPrefabNodeFromProxy(reelData);

        if (!aniNode) {
            targetNode.updateSymbol();
            return;
        }

        try {

            const spineTarget = aniNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL] as IAnimationControl;
            const { leftover } = targetNode.addSymbolAniNode(aniNode, 0, this._wholeReelDark);
            if (leftover) this.clearAndRecycleWildNodes(leftover);
            aniNode.active = true;
            spineTarget.init();
            targetNode.playSymbolAni();

        } catch (e) {
            //GameUtilsTools.debugLog(DEBUG_TITLE, 'attachNormalSymbol_error', { e, reelData }, 'error');
        }
    }

    //private async processSetWildIconData(targetIcon: UniIcon1016, reelData: IReelInfo, wildCount: number): Promise<void> {
    private processSetWildIconData(targetIcon: UniIcon1016, reelData: IReelInfo, wildCount: number): void {

        let spineTarget: IAnimationControl;
        const offsetY = this.iconSize.y / 2;
        let aniNode: Node | null = null;

        if (wildCount == 1) {

            aniNode = this.getPrefabNodeFromProxy(reelData);

            /*
            //--20260126移動到icon裡面addWildNode做掉
            let targetNode: Node = aniNode.children[0];//--外面再包一層node用來改變位置用的
            targetNode.setPosition(v3(0, 0, 0));
            const uiTransform: UITransform = aniNode.getComponent(UITransform);
            const changeV3 = v3(v3(0, (uiTransform.contentSize.height / 2) - offsetY, 0))
            targetNode.setPosition(changeV3);
            */

            spineTarget = aniNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL] as IAnimationControl;
            targetIcon.wildData.isStart = true;
            aniNode.active = true;
            spineTarget.init();

            const { leftover } = targetIcon.addWildNode(aniNode);
            if (leftover) this.clearAndRecycleWildNodes(leftover);


        } else if (wildCount == 4) {

            this._wildCount = 0;
            //---wild最後一格
            //-最後一張補的預備牌剛好是wild...這時候資料會對不上來0902...

        }
    }

    private getPrefabNodeFromProxy = (reelData): Node => {
        return this._aniCrossServiceProxyFactory.createAndRegister(reelData);
    }

    private removeAndRecycleImmediately(icon: UniIcon1016): void {

        try {

            const wildNode = icon.checkAndRemoveWildNode();
            if (wildNode) {
                this.clearAndRecycleSpineNode(wildNode); //--清空spineNode的資料 
            }
            const aniNode = icon.checkAniSymbolAndRemove();
            if (aniNode) {
                this.clearAndRecycleSpineNode(aniNode);
            }
            icon.isScatter = false;

        } catch (error) {
            //GameUtilsTools.debugLog(DEBUG_TITLE, 'removeAndRecycleImmediately_error', { error }, 'error');
        }
    }
    /**
     * 在wild的狀態下(掛腳的情況).
     * 原始產生wild流程:
     * 1.清除掛載的spriteFrame
     * 2.只有wild index=1的時候會去產生wild spine node並掛載
     * 3.其他wild index的icon只會顯示空的wild spriteFrame
     * 此時停止的狀態下(畫面上呈現掛腳的wild),不會有icon移動到top的位置
     * 也就不會有getData的動作,當此時開始下一輪後,就會出現空一格的畫面
     */
    private checkIndexZeroSpriteFrame(): void {

        if (!this.iconList[0].checkSpriteFrameExist() &&
            !this.iconList[0].checkAniSymbolIsExist()
        ) {
            let randomData = this.createRandomNumber();
            const sym: SymbolNumber = new SymbolNumber();
            sym.symbolID = randomData;
            this.iconList[0].updateSymbol(sym);
        }
    }


    //--你媽的要拿每一軸的最後一次表演開始
    protected override getData(): SymbolNumber {
        //--在下面setData的時候會有一個隨機icon在前面讓他可以擠下來
        if (!this._resultStarted && this.data.count === this.iconAmount + 1) {
            this._resultStarted = true;
            this.oneReelFinalStartCallBack?.(this.reelID); // --通知最後一次表演開始
        }
        //--這邊已經是移動上去的icon
        if (this.data.count > 0) {

            this.dequeueSymbol = this.data.dequeue();

        } else {

            const sym: SymbolNumber = new SymbolNumber();
            if (this._upConsecutiveExtraCardsData.length > 0) {
                sym.symbolID = this._upConsecutiveExtraCardsData.pop(); //--退場補牌 
            } else {

                let randomData = this.createRandomNumber();
                sym.symbolID = randomData;
            }
            this.dequeueSymbol = sym;
        }
        return this.dequeueSymbol;
    }

    public override fastStopRoll(): void {
        //--2=預設頭尾兩個捕牌
        if (this._flagForFastStop) return;
        this._flagForFastStop = true;
        //let dataKeepCount = this._iconAmount + 2 + this._endCardCount;//--頭尾兩個
        /**
        因為在createIcon的時候多做了4個預備牌
        PS:(下面多3個+原本的預備牌1個=4)+1個上面預備牌=6張牌(包含上下兩個預備牌)
        this.createIcon(this.iconAmount + 5);
        原始的fastStopRoll--->
        this.data.count > this.iconAmount + 2-->切除保留的範圍
        因為這是針對尚未出現的牌做切割...對這款來說不需要下面的牌..
        只需要切割到盤面顯示+上方預備+補牌數量就好
         */
        let dataKeepCount = this._iconAmount + 1 + this._endCardCount;
        //GameUtilsTools.debugLog(DEBUG_TITLE, 'calculateRandomDataLength', { fastStopRoll: 'fastStopRoll' }, 'log');

        while (this.data.count > dataKeepCount) {
            this.data.dequeue();
        }
        const beforeCut = this.data.count;//--test
        console.log(beforeCut);

        /*
        GameUtilsTools.debugLog(DEBUG_TITLE, 'fastStopRoll_info====calculateRandomDataLength', {
            reelID: this.reelID,
            dataKeepCount: dataKeepCount,
            currentDataCount: this.data.count,
            beforeCut: beforeCut
        }, 'log');
        */
        //--for test---
        /*
        const snapshot: number[] = [];
        const size = this.data.count;

        for (let i = 0; i < size; i++) {
            const item = this.data.dequeue();
            if (item !== undefined) {
                snapshot.push(item.symbolID);
                this.data.enqueue(item); // 放回去，維持原本順序
            }
        }
        //--哀哀哀哀..這邊要改成從補牌庫拿牌
        if (this.reelID == 1) {
            GameUtilsTools.debugLog(DEBUG_TITLE, 'fastStopRoll_info====', { snapshot }, 'log');
        }*/

    }

    //---改變icon symbol資料的地方
    public setData(symbolData: number[], randomDataLength: number): void {

        this.data.clear();
        //const testRId = this.reelID;//--test code
        let randomData: number[] = [];
        //根據randomDataLength生成隨機資料-要演多久決定在此資料的長度
        for (let index = 0; index < randomDataLength; index++) {
            const symbol = this.createRandomNumber();
            randomData.push(symbol);
        }

        //--頭尾要補的牌
        const { startCards, endCards } = this.getAddExtraCardsForStart();

        const testStartLen = startCards.length;//--test code
        const testEndLen = endCards.length;//--test code

        let downConsecutiveExtraCardsData = endCards;//--頭開始往下連續

        //--20251104去算最大的補牌數--要達到急停每一軸一起停的效果,所以補牌數要整盤都相同
        let limit = 0;
        let takeCardsOut: number[] = [];
        if (this._takeExtraCardsInRound != null) {

            //--進場的補牌是該局使用的
            if (endCards.length < this._takeExtraCardsInRound.end.len) {
                limit = this._takeExtraCardsInRound.end.len - endCards.length;
                const takeCards = this.getTakeCardsRandomList(limit);
                downConsecutiveExtraCardsData = [...endCards, ...takeCards];
            }

            /**
             * 出場的補牌是給下一round用的(所以出場的補牌要壘算到下一局)
             * this._upConsecutiveExtraCardsData.pop()
             * 要注意順序,補的牌是從屁股開始給--[補,補,9,9]要讓wild先拿才會連續
             */
            if (startCards.length < this._takeExtraCardsInRound.start.len) {
                limit = this._takeExtraCardsInRound.start.len - startCards.length;
                takeCardsOut = this.getTakeCardsRandomList(limit);
            }
        }

        this._endCardCount = downConsecutiveExtraCardsData.length;
        //--處理還沒退場完畢的wild出場補牌
        if (this._upConsecutiveExtraCardsData.length > 0) {
            symbolData.push(...this._upConsecutiveExtraCardsData);
            this._endCardCount += this._upConsecutiveExtraCardsData.length;
        }
        const testOutPrevious: number[] = GameUtilsTools.deepClone(this._upConsecutiveExtraCardsData);
        //--取新的補牌庫(出場要的補牌<後面的會先拿>)
        this._upConsecutiveExtraCardsData = [...takeCardsOut, ...startCards];
        /**
         *  因為前面擠一格表演用的亂數icon,且是逆迴圈去塞資料..所以資料要這樣塞
         *  [this.createRandomSymbol(),...前方補牌(頭往下連續),...symbolData,...randomData];
         *  尾巴補牌=腳露出來而已,身體在外面的情況下..下一輪轉下去的時候再補
         */
        let lastRandomSymbol: number;
        if (this._upConsecutiveExtraCardsData.length > 0) {
            lastRandomSymbol = this._upConsecutiveExtraCardsData.pop();
        } else {
            lastRandomSymbol = this.createRandomNumber();
        }

        const resultData: number[] = [lastRandomSymbol, ...symbolData, ...downConsecutiveExtraCardsData, ...randomData];

        //---這邊要新增補牌的資料-iconList也要補牌

        for (let i = resultData.length - 1; i >= 0; i--) {
            const sym = new SymbolNumber();
            sym.symbolID = resultData[i];
            this.data.enqueue(sym);
        }

        /*
        const dataLen = this.data.count;
        GameUtilsTools.debugLog('CHECK_TIME', 'REEL_SET_Data_Info', {
            reelID: this.reelID,
            ogEndLen: testEndLen,
            ogStartLen: testStartLen,
            ogEXStart: testOutPrevious.length,
            newEXStartOut: this._upConsecutiveExtraCardsData.length,
            extraCardLen: this._takeExtraCardsInRound?.end.len,
            limit: limit,
            dataLen: dataLen,
            finalEnd__endCardCount: this._endCardCount,
            randomDataLength: randomDataLength,
            downConsecutiveExtraCardsDataLen: downConsecutiveExtraCardsData.length,
            totalDataLen_final: this.data.count,
            resultData_final: resultData.length,
            to_1: 1,
            to_2: symbolData.length,
            to_3: downConsecutiveExtraCardsData.length,
            to_4: randomData.length
        }, 'log');
        */


    }

    private clearAndRecycleWildNodes(ani: Node[] | null): void {

        if (!ani) return;
        for (let i = 0; i < ani.length; i++) {
            const node = ani[i];
            this.clearAndRecycleSpineNode(node);
        }
    }

    //--recycle
    private clearAndRecycleSpineNode(spineNode: Node | null): void {

        if (!spineNode) return;
        let prefabId = spineNode[DYN_NODE_PROPERTIES.PREFAB_ID];
        const symbolId = spineNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId;
        // 重置 spineNode 自訂屬性
        spineNode[DYN_NODE_PROPERTIES.GROUP_ID] = [];
        spineNode[DYN_NODE_PROPERTIES.TOKEN_ID] = '';
        spineNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO] = null;
        spineNode[DYN_NODE_PROPERTIES.PREFAB_ID] = '';
        spineNode[DYN_NODE_PROPERTIES.ADDED] = null;//--是否被創造出來加入過表演層
        spineNode[DYN_NODE_PROPERTIES.LOCKED] = null;//--是否鎖定軸
        spineNode[DYN_NODE_PROPERTIES.SWITCH] = null;//--是否為往上長3連續的補牌換位
        spineNode[DYN_NODE_PROPERTIES.OTHER] = null;//--在showProcess被汙染了
        spineNode[DYN_NODE_PROPERTIES.READY_HAND_STATUS] = null;
        spineNode[DYN_NODE_PROPERTIES.FAST_MODE] = null;
        spineNode[DYN_NODE_PROPERTIES.WHOLE_BOARD_READY_HAND] = null;
        spineNode[DYN_NODE_PROPERTIES.PLAY_COUNT] = 0;
        spineNode[DYN_NODE_PROPERTIES.IS_PLAYING_EXPECT] = false;
        spineNode[DYN_NODE_PROPERTIES.REFERENCE_TARGET] = null;//--2026-0129-new

        if (symbolId == WILD_LIST[0]) {
            /**
             * wild的node是包在一個container裡面,回收的時候殼要丟掉(取消,殼現在做到prefab裡面)
             * 它的殼本身直接從prefabNode映射相同的屬性資料用於對外識別與操作-取消
             */
            let realSpine = spineNode.children[0];
            realSpine.setPosition(v3(0, 0, 0));
        }
        // 重置 spineNode 上的動畫控制介面資料
        const aniComp = spineNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL] as IAnimationControl;
        if (aniComp) {
            aniComp.slotMachineIndexInfo = null;
            aniComp.tokenID = '';
            aniComp.groupID = [];
            spineNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL] = null;
        }
        AnimationControllersPoolManager.getInstance().pushInstanceToPool(prefabId, spineNode);
    }

    /**
     * 取得要位移的wild資料
     *  wildNode:Node;
        finalDestinationWPos:Vec3;
        offsetYLocal:number;
        startIconIndex:number;//--出發的iconIndex
     * 
     */
    /**
     * 
     * @param yoyo true來回,false直衝終點
     * @returns 
     */
    public getWildMovementData(yoyo: boolean = false): IWildMovementDataNew {
        /**
         * 整軸出現1個以上的wild的情況下(上下各出現一組連續wild)
         * 則亂數取出一個,若長度=1則取出唯一的那個(因為會有兩個wild相連的情況,所以要隨機取一個)
         */
        let index = 0;
        if (this._singleWildGroupResultData.length > 1) {
            index = Math.floor(Math.random() * 2);
        }
        const wildData: IMatchWildGroupResult = this._singleWildGroupResultData[index];
        //--wild的起始位置(這邊startIndex要+1,因為算的時候沒有上下兩個預備位)
        const wildContinuoData = this._iconList[wildData.startIndex + 1].wildContinue;
        const strLastMapKey = wildContinuoData[wildContinuoData.length - 1];
        const parts = strLastMapKey.split(':');
        const indexTarget = Number(parts[1]);
        //--取出(這邊startIndex要+1,因為算的時候沒有上下兩個預備位)
        //const targetIcon = this._iconList[wildData.startIndex + 1];
        const targetIcon = this._iconList[indexTarget];//--一開始加入的容器

        const result: { finalDesIcon: UniIcon1016, offsetY: number } = this.resolveFinalDesIconAndOffset(wildData, targetIcon, yoyo);
        let finalDesIcon: UniIcon1016 = result.finalDesIcon;
        let offsetY: number = result.offsetY;
        finalDesIcon.isFinalDesIcon = 'isFinalDesIcon';//--debug
        let finalPos: Vec3 = finalDesIcon.node.position.clone();
        if (yoyo) {
            finalPos.add(new Vec3(0, offsetY, 0));
        }
        //let finalWPos: Vec3 = finalDesIcon.node.getComponent(UITransform).convertToWorldSpaceAR(finalPos);
        let finalWPos: Vec3 = finalDesIcon.node.parent.getComponent(UITransform).convertToWorldSpaceAR(finalPos);//--reel node
        const returnData: IWildMovementDataNew = {

            reelIndex: targetIcon.symbol.reelIndex,//--抽取動畫要的<起點格>
            iconIndex: targetIcon.symbol.iconIndex,//--抽取動畫要的<起點格>
            symbolId: targetIcon.symbol.symbolID,//--抽取動畫要的<起點格>
            finalDestinationWPos: finalWPos,
            finalDestinationLPos: finalPos,
            offsetYLocal: offsetY,
            startIconIndex: indexTarget,//--所在位置
            finalIconIndex: finalDesIcon.symbol.iconIndex,//--終點位置
            startWpos: null

        };
        return returnData;
    }

    private resolveFinalDesIconAndOffset(wildData: IMatchWildGroupResult, targetIcon: UniIcon1016, yoyo: boolean): { finalDesIcon: UniIcon1016, offsetY: number } {

        let resultOffsetY = this.iconSize.y / 2;
        let resultFinalDesIcon: UniIcon1016;
        //--檢查現在的anchorPoint狀態(確認目前是掛在哪一種狀態的node(頭相連/腳相連))
        if (yoyo) {
            // yoyo 模式：終點就是 targetIcon
            resultFinalDesIcon = targetIcon;
            resultOffsetY = wildData.direction === Direction.DOWNWARD ? 20 : -20;
        } else {
            // 非 yoyo 模式：終點要看方向取邊界 icon
            resultFinalDesIcon = this._iconList[4];//--改為一掛進去的地方就是最下面
            //resultOffsetY = -10;
            resultOffsetY = 0;
            /*
            if (wildData.direction === Direction.DOWNWARD) {
                //resultFinalDesIcon = this._iconList[1]; // 下往上
                resultOffsetY = -10;

            } else {
                //resultFinalDesIcon = this._iconList[4]; // 上往下
                resultOffsetY = -10;
            }*/
        }
        return { finalDesIcon: resultFinalDesIcon, offsetY: resultOffsetY };
    }

    /**
     * <moveWild 新的流程>
     * step1,拿到startIndex.
     * 先移除handoff舊的
     * 重寫wildData(連續資料)
     * 
     * @returns 
     */
    public getNewWildMovementData(yoyo: boolean = false): IWildMovementDataNew {

        const wildMovementData: IWildMovementDataNew = this.getWildMovementData(yoyo);
        wildMovementData.isYoyo = yoyo;
        const gameIcon = this._iconList[wildMovementData.startIconIndex];
        /*
        if (gameIcon.checkWildIsExist()) {
            
        }*/
        //let startPos: Vec3 = gameIcon.getWildNode().position.clone();
        //--使用備案位置取得方式(2階段加速會跟不上)
        let startPos: Vec3 = gameIcon.getWildNodePosition();
        let startWPos: Vec3 = this._fakeWildLayerContainer.getComponent(UITransform).convertToWorldSpaceAR(startPos);//--78企劃
        wildMovementData.startWpos = startWPos;
        //wildMovementData.startWpos = gameIcon.getWildNodePosition();
        return wildMovementData;
    }

    /**
     * <moveWild 新的流程>
     * step2.取得要handoff的資料
     * @param iconIndex 
     * @returns 
     */
    public getHandoffWildMoveAniNode(iconIndex: number): IPlayAniData | null {

        const gameIcon = this._iconList[iconIndex];
        const continueData = gameIcon.wildContinue;
        //const wildNode = gameIcon.getWildNode();
        const wildNodeWPos = gameIcon.getWildNodePosition();//--20260105
        let maxIndex = -1; // 預設沒找到

        for (const data of continueData) {
            const parts = data.split(':');
            const iconIndex = Number(parts[1]); // 取出 iconIndex
            if (iconIndex >= 1 && iconIndex <= 4) {
                if (iconIndex > maxIndex) {
                    //---要去找出連續的Wild且在顯示範圍內(1-4)的最大index
                    maxIndex = iconIndex;
                }
            }
        }

        if (maxIndex != -1) {
            const registerData: IPlayAniData = {
                reelIndex: this.reelID,
                iconIndex: maxIndex,
                symbolId: 9,
                tokenId: "",
                aniId: '',
                //--這邊是出發點的位置
                wPos: this.getWildNodePosAfterMoved(wildNodeWPos, gameIcon.node),
                //wPos: wildNodeWPos,
            };
            return registerData;
        }
        return null;
    }

    //--棄用
    private getWildNodePosAfterMoved(wildTargetPos: Vec3, currentContainer: Node): Vec3 {

        //let localPos: Vec3 = wildTarget.position;
        //this._fakeWildLayerContainer.getComponent(UITransform);
        let localPos: Vec3 = wildTargetPos;
        //let uiTransform: UITransform = currentContainer.getComponent(UITransform);
        //--20251116 78企劃
        let uiTransform: UITransform = this._fakeWildLayerContainer.getComponent(UITransform);
        let wPos: Vec3 = uiTransform.convertToWorldSpaceAR(localPos);
        return wPos;
    }

    //---播放wild出現動畫
    public async playWildAppearAnimation(): Promise<void> {

        let targetIcon: UniIcon1016 = null;
        for (let i = 0; i < this._iconList.length; i++) {
            const icon = <UniIcon1016>this._iconList[i];
            if (icon.wildData.isWild && icon.checkWildIsExist()) {
                targetIcon = icon;
                break;
            }
        }
        if (targetIcon) {
            await targetIcon.playWildAppearAnimation();
            //--中途有可能被取消掉了
            //const reel = this.reelID;//--debug
            if (this._isReadyHand && targetIcon.readyHandFlag) {
                targetIcon.playWildExpectAni();
            }
        }
    }

    public playWildIdle(): void {

        let targetIcon: UniIcon1016 = null;
        for (let i = 0; i < this._iconList.length; i++) {
            const icon = <UniIcon1016>this._iconList[i];
            if (icon.wildData.isWild && icon.checkWildIsExist()) {
                targetIcon = icon;
                break;
            }
        }

        if (targetIcon) {
            targetIcon.playWildIdle();
        }
    }


    /**
     * 20260120新增
     * 這邊是沒有wild中獎的情況,<但是滿足湊滿scatter進入fg的條件>
     * 會播放wild中獎的動畫
     * PS:如果是有wild中獎要call showAniProcessCtrl來處理(因為被拔出去了) 
     */
    public async playWildAniToFg(): Promise<void> {

        let targetIcon: UniIcon1016 = null;
        for (let i = 0; i < this._iconList.length; i++) {
            const icon = <UniIcon1016>this._iconList[i];
            if (icon.wildData.isWild && icon.checkWildIsExist()) {
                targetIcon = icon;
                break;
            }
        }

        if (targetIcon) {
            await targetIcon.playWildToFgAnimation();
        }
    }

    //--這一定是1*4的狀態且lock=true才會進來檢查
    public checkWildIsExist(): boolean {

        const wildTarget = this._iconList[4];
        if (wildTarget.wildData.isWild && wildTarget.checkWildIsExist()) {
            return true;
        }
        //const testReel = this.reelID;//--debug
        //const testIconList = this._iconList;//--debug
        return false;
    }

    //-停止wild 聽牌動畫(這個要進來執行其實不太可能)
    //-就是進來了.一次轉出來,未轉交的狀態下就會進來(沒有中線沒有位移)
    public stopAllExpectAni(): void {

        const reel = this.reelID;//--debug
        for (let i = 0; i < this._iconAmount; i++) {
            const icon = this._iconList[i];
            icon.setReadyHandState(false);
            if (icon.wildData.isWild && icon.wildContinue.length > 0) {
                const continueData = icon.wildContinue;
                const lastMapKey = continueData[continueData.length - 1];
                const parts = lastMapKey.split(':');
                const indexTarget = Number(parts[1]);
                const targetIcon = this._iconList[indexTarget];//--一開始加入的容器
                const wildAni = targetIcon.getWildAniCtrl();
                if (wildAni != null) {

                    const playInfo = (wildAni as AnimationController).currentTarget;
                    if (playInfo?.targetName === 'Expect_Ani') {
                        targetIcon.stopWildExpectAni();
                        targetIcon.playWildIdle();
                    }
                }

            }
        }
    }

    public getWPosWithTargetIcon(icon: UniIcon1016, targetNode?: Node): Vec3 {

        const targetIcon = icon;
        const tn = (targetNode) ? targetNode : targetIcon.node;
        let pos: Vec3 = tn.position.clone();
        let uiTransformComponent: UITransform = targetIcon.getComponent(UITransform);
        let wPos: Vec3 = uiTransformComponent.getComponent(UITransform).convertToWorldSpaceAR(pos);
        return wPos;
    }


    //--[[預備start],[1],[2],[3],[4],[預備end]]--實際上this._iconList內容的分布
    public getIconNodeWorldPosition(iconIndex: number, targetNode?: Node): Vec3 {

        const targetIcon = this._iconList[iconIndex];
        const tn = (targetNode) ? targetNode : targetIcon.node;
        let pos: Vec3 = tn.position.clone();
        let uiTransformComponent: UITransform = targetIcon.getComponent(UITransform);
        let wPos: Vec3 = uiTransformComponent.getComponent(UITransform).convertToWorldSpaceAR(pos);
        return wPos;
    }

    //--取得軸的world position(用於位移特效)
    public getReelWorldPosition(): Vec3 {

        return this.node.parent.getComponent(UITransform).convertToWorldSpaceAR(this.node.position);
    }

    public getParticleWorldPosition(): Vec3 {

        const targetIcon = this._iconList[2];
        const tn = targetIcon.node;
        let pos: Vec3 = tn.position.clone().add(v3(0, -this.iconSize.y / 2, 0));
        let uiTransformComponent: UITransform = targetIcon.getComponent(UITransform);
        let wPos: Vec3 = uiTransformComponent.getComponent(UITransform).convertToWorldSpaceAR(pos);

        /*
        let testNode: Node = new Node();
        let graphic: Graphics = testNode.addComponent(Graphics);
        //-graphic 不受到UIOpacity組件影響~有夠78(color 0-255)       
        graphic.fillColor = color(255, 0, 0, 255);
        graphic.rect(-10, -10, 20, 20);
        graphic.fill();
        testNode.layer = Layers.Enum.UI_2D;
        this.node.addChild(testNode);
        testNode.setPosition(tn.position.clone());
        */


        return wPos;
    }

    public getScatterWorldPosition(): Vec3 {

        if (!this._hasScatter) return v3(0, 0, 0);
        for (const targetIcon of this._iconList) {
            if (targetIcon.isScatter) {
                const tn = targetIcon.node;
                let pos: Vec3 = tn.position.clone();
                let uiTransformComponent: UITransform = targetIcon.getComponent(UITransform);
                let wPos: Vec3 = uiTransformComponent.getComponent(UITransform).convertToWorldSpaceAR(pos);
                return wPos;
            }
        }
    }

    //--沒用到
    public async getWildAniNode(): Promise<{ reAssign: IPlayAniData, aniNode: Node }> {

        for (const icon of this.iconList) {
            const { symbolID } = icon.symbol;

            if (symbolID == WILD_LIST[0] && icon.wildData.isWild) {
                //--直接拿實體那個
                const registerData: IPlayAniData = {
                    reelIndex: icon.symbol.reelIndex,
                    iconIndex: icon.symbol.iconIndex,
                    symbolId: icon.symbol.symbolID,
                    tokenId: "",
                    aniId: ''
                };

                let data: { reAssign: IPlayAniData, aniNode: Node } = this.getExistingAniDataNode(registerData);
                if (data.aniNode) {
                    this._aniCrossServiceProxyFactory.unRegister(registerData);
                    await this._aniCrossServiceProxyFactory.multiRegistryByID([registerData], SymbolOwnerAgentID.ShowAniController);
                } else {
                    //--為整條Wild且被拿走的情況,直接拿end=true的資料回去
                    //--被拿走的情況下node會是null
                    registerData.iconIndex = 1;
                    const uiTransform = this.node.getComponent(UITransform);
                    //--index=1是整條wild被釘住的end位置
                    const targetIconPos = this._iconList[1].node.position.clone();
                    const wPos = uiTransform.convertToWorldSpaceAR(targetIconPos);
                    registerData.wPos = wPos;
                    data = { reAssign: registerData, aniNode: null };
                }
                return data;
            }
        }
    }


    /**
     * 沒有得分的情況是不會在runningPool.
     * 這邊要小心,如果是位移的情況,他註冊的iocnIndex是原本的index,而不是位移後的index
     * 而在位移後, iconList的index是被rewrite過的
     */
    public getForceToHandoffWild(): IPlayAniData | null {

        for (const icon of this.iconList) {
            const { symbolID } = icon.symbol;
            if (symbolID == 9 && icon.wildData.isWild && icon.wildContinue.length > 0) {
                const continueData = icon.wildContinue;
                const lastMapKey = continueData[continueData.length - 1];
                const parts = lastMapKey.split(':');
                const iconIndex = Number(parts[1]);//--key='reel:iocn:symbol';
                const registerData: IPlayAniData = {
                    reelIndex: this.reelID,
                    iconIndex: iconIndex,
                    symbolId: 9,
                    tokenId: "",
                    aniId: '',
                    wPos: this.getParticleWorldPosition()
                };
                return registerData;
            }
        }
        return null;
    }


    public async getScatterAniNode(): Promise<{ reAssign: IPlayAniData, aniNode: Node }> {

        for (const icon of this.iconList) {

            if (icon.isScatter) {
                const registerData: IPlayAniData = {
                    reelIndex: icon.symbol.reelIndex,
                    iconIndex: icon.symbol.iconIndex,
                    symbolId: icon.symbol.symbolID,
                    tokenId: "",
                    aniId: ''
                };
                //--如果是null代表被拿去runningPool裡面了
                let data: { reAssign: IPlayAniData, aniNode: Node } = this.getExistingAniDataNode(registerData);

                if (data.aniNode) {
                    this._aniCrossServiceProxyFactory.unRegister(registerData);
                    await this._aniCrossServiceProxyFactory.multiRegistryByID([registerData], SymbolOwnerAgentID.ShowAniController);
                }
                return data;
            }
        }
        return null;
    }

    public setReadyHandState(): void {
        this._isReadyHand = true;
    }

    public setFastModeState(): void {
        this._isFastMode = true;
    }

    public setWholeReelToReadyHandState(): void {
        this._isWholeBoardReadyHand = true;
    }

    /**
     * 表演計算RS/FG次數噴發粒子使用(此時的Scatter已經強行被轉移到表層,所以不能檢查aniNode是否存在)
     * @returns 
     */
    public getForceToHandoffScatterForCountEffect(): IPlayAniData | null {

        for (let i: number = 0; i < this._iconList.length; i++) {
            const icon = this._iconList[i];
            if (i > 0 && icon.symbol.iconIndex > 0) {

                if (icon.isScatter && icon.symbol.symbolID == SCATTER_LIST[0]) {

                    const registerData: IPlayAniData = {
                        reelIndex: icon.symbol.reelIndex,
                        iconIndex: icon.symbol.iconIndex,
                        symbolId: icon.symbol.symbolID,
                        tokenId: "",
                        aniId: '',
                        wPos: this.getScatterWorldPosition()
                    };
                    return registerData;
                }
            }
        }
        return null;
    }

    public getForceToHandoffScatter(): IPlayAniData | null {

        for (let i: number = 0; i < this._iconList.length; i++) {

            const icon = this._iconList[i];
            if (i > 0 && icon.symbol.iconIndex > 0) {

                if (icon.isScatter && icon.symbol.symbolID == SCATTER_LIST[0] && icon.checkAniSymbolIsExist()) {

                    const registerData: IPlayAniData = {
                        reelIndex: icon.symbol.reelIndex,
                        iconIndex: icon.symbol.iconIndex,
                        symbolId: icon.symbol.symbolID,
                        tokenId: "",
                        aniId: ''
                    };
                    return registerData;
                }
            }
        }
        return null;
    }

    public getScatterMovementData(): IBasicMovementData {

        let scatterMovementData: IBasicMovementData;
        for (let i: number = 0; i < this._iconList.length; i++) {
            const targetIcon = <UniIcon1016>this._iconList[i];
            if (targetIcon.isScatter) {
                //targetIcon.symbol.symbolID = 10; // 設定為scatter  
                const finalPos: Vec3 = targetIcon.node.position.clone();
                const localFinalPos: Vec3 = targetIcon.node.getComponent(UITransform).convertToWorldSpaceAR(finalPos);
                scatterMovementData = {
                    finalDestinationWPos: localFinalPos,
                    finalDestinationLPos: finalPos, //--local position
                    startIconIndex: -1, //--出發的iconIndex
                    finalIconIndex: i//--終點的iconIndex(這邊就是有上下兩個預備位)
                };
                break;//-一軸只會有一個
            }
        }
        return scatterMovementData;
    }


    private findRealWild(): { node: Node, iconIndex: number } | null {

        let wildNode: Node = null;

        let iconIndex: number = -1;
        for (let i: number = 0; i < this._iconList.length; i++) {
            const iconTarget = this._iconList[i];
            if (iconTarget.wildData.isWild && iconTarget.checkWildIsExist()) {
                wildNode = iconTarget.getAndRemoveWildNode();
                iconIndex = i;
                break;
            }
        }
        return wildNode ? { node: wildNode, iconIndex } : null;
    }

    private processWildDataAfterMove(playAniData: IPlayAniData): { wildNode: Node } {


        let wildTargetNode: Node = null;
        //--直接要算world座標寫回資料
        //--因為每一格都會寫資料進去,所以得分的時候他會去跟handoff要資料(但不是每個都是wild實體,所以這邊要找實體出來)

        let resultWildData: { node: Node, iconIndex: number } = this.findRealWild();
        if (resultWildData != null) {
            wildTargetNode = resultWildData.node;
            let iconTarget: UniIcon1016 = this._iconList[resultWildData.iconIndex];
            const wildWPos = iconTarget.getWildNodePosition();//--20260105
            let wPos: Vec3 = this.getWildNodePosAfterMoved(wildWPos, iconTarget.node);
            //let wPos: Vec3 = wildWPos;
            playAniData.wPos = wPos;
            playAniData.prefabKey = wildTargetNode[DYN_NODE_PROPERTIES.PREFAB_ID];
            playAniData.tokenId = wildTargetNode[DYN_NODE_PROPERTIES.TOKEN_ID];
        }

        return { wildNode: wildTargetNode };
    }

    public getExistingAniWPos(iconIndex: number): Vec3 {

        const targetIcon: UniIcon1016 = this._iconList[iconIndex];
        return targetIcon.aniWPos;
    }



    //---透過SymbolAniHandoffManager 操作ISymbolOwnerAgent來拿動畫資料
    public getExistingAniDataNode(data: IPlayAniData): { reAssign: IPlayAniData, aniNode: Node } {

        const targetIcon: UniIcon1016 = this._iconList[data.iconIndex];
        const symbolId = targetIcon.symbol.symbolID;
        let targetNode: Node | null = null;
        let assignData: IPlayAniData = data;
        if (symbolId == WILD_LIST[0])//--這邊要做  wild的特殊處理
        {
            //--是有可能回傳null物件的(因為有可能是兩個wild相連的情況,所以會有一個被刪掉)

            let changeData: { wildNode: Node } = this.processWildDataAfterMove(data);
            targetNode = changeData.wildNode;
            //--targetNode已經在processWildDataAfterMove裡面增加寫入其他屬性了

        } else {

            targetNode = targetIcon.handoffSymbolAniNode();
            //assignData.wPos = this.getIconNodeWorldPosition(data.iconIndex, targetNode);
            assignData.wPos = targetIcon.node.worldPosition.clone();
            assignData.tokenId = targetNode[DYN_NODE_PROPERTIES.TOKEN_ID];
            if (symbolId == SCATTER_LIST[0]) {
                //assignData.otherData = targetIcon.node;
                //--太沒下限了.抽取wpos的時候iconNode有可能還在位移當中.所以只能直接把node reference給他用
                targetNode[DYN_NODE_PROPERTIES.REFERENCE_TARGET] = targetIcon.node;//--2026-0129-new
            }
        }
        targetIcon.aniWPos = assignData.wPos;
        return { reAssign: assignData, aniNode: targetNode };
    }

    //-跟showAniController交接動畫物件,交接完成會把AniNode,轉送進來這裡
    public async setAniNodeBackToReel(data: IPlayAniData, node_tag: Node): Promise<void> {

        if (data.symbolId == WILD_LIST[0]) {
            if (!node_tag) {
                return;
            } else {

                node_tag.setPosition(v3(0, 0, 0));
                const continueData = this._iconList[data.iconIndex].wildContinue;
                const lastMapKey = continueData[continueData.length - 1];
                const parts = lastMapKey.split(':');
                const indexTarget = Number(parts[1]);
                const { leftover } = await this.iconList[indexTarget].addWildNode(node_tag);
                if (leftover) {
                    this.clearAndRecycleWildNodes(leftover);
                }
            }

        } else {

            const { leftover } = this.iconList[data.iconIndex].addSymbolAniNode(node_tag);
            if (leftover) {
                this.clearAndRecycleWildNodes(leftover);
            }
            //this.addBackAniNodeToGameIcon(data.iconIndex, node);
            let aniPlayer = node_tag[DYN_NODE_PROPERTIES.ANIMATION_CTRL] as IAnimationControl;
            if (data.symbolId == SCATTER_LIST[0]) {
                aniPlayer?.goBackToDefault();
            } else {
                aniPlayer?.playAni(AnimationStateType.Idle);
            }

        }
    }

    //---透過SymbolAniHandoffManager 操作ISymbolOwnerAgent來拿動畫資料

    //---將動畫物件重新塞回gameIcon
    public addBackAniNodeToGameIcon(iconIndex: number, aniNode: Node): void {
        this._iconList[iconIndex].addSymbolAniNode(aniNode);
    }

    private getAddExtraCardsForStart(): { startCards: number[], endCards: number[] } {
        //--注意!因為塞資料會是逆迴圈反過來塞..所以這兩筆資料要塞對位置
        let startCards: number[] = [];//--從腳開始往上長
        let endCards: number[] = [];//--從頭開始往下長
        const maxLength = 4;//--wild的最大長度(1*4) 
        const targetValue = WILD_LIST[0];//--wild的值

        for (const wildData of this.singleWildGroupResultData) {

            let len = maxLength - wildData.matchIndices.length;

            if (wildData.direction === Direction.UPWARD) {
                //--從腳開始往上長(拿腳的)--往上連續-補牌在末端
                startCards = new Array(len).fill(targetValue);

            } else if (wildData.direction === Direction.DOWNWARD) {
                //--從頭開始往下長(拿頭的)--往下連續-補牌在前端
                endCards = new Array(len).fill(targetValue);
            }
        }
        return { startCards, endCards };
    }



    //---測試用模板
    private _debugSortMap: Map<number, {
        scatter: number[],
        wildLeader: number[],
        wild: number[],
        normal: number[]
    }> = new Map<number, {
        scatter: number[],
        wildLeader: number[],
        wild: number[],
        normal: number[]
    }>();
    //---測試用模板
    private processSortIcons(icons: UniIcon1016[]): {
        scatterIcons: UniIcon1016[],
        wildLeaderIcons: UniIcon1016[],
        wildIcons: UniIcon1016[],
        normalIcons: UniIcon1016[]
    } {
        const sc: UniIcon1016[] = [];
        const wLeader: UniIcon1016[] = [];
        const wIcons: UniIcon1016[] = [];
        const nIcons: UniIcon1016[] = [];
        //===debugList====
        const debugSc = [];
        const debugWLeader = [];
        const debugWIcons = [];
        const debugNIcons = [];
        //===debugList====
        for (let i = 0; i < icons.length; i++) {
            const icon = icons[i];
            if (icon.isScatter) {
                // 1. Scatter 永遠最高
                sc.push(icon);
                debugSc.push(icon.symbol.iconIndex);
            } else if (icon.wildData.isWild) {
                // 2. Wild → 再區分 Leader 與一般 Wild
                if (icon.checkWildIsExist()) {
                    wLeader.push(icon); // Wild Leader
                    debugWLeader.push(icon.symbol.iconIndex);
                } else {
                    wIcons.push(icon);       // 普通 Wild
                    debugWIcons.push(icon.symbol.iconIndex);
                }
            } else {
                // 3. 普通 Icon
                nIcons.push(icon);
                debugNIcons.push(icon.symbol.iconIndex);
            }
        }
        /*
        this._debugSortMap.set(this.reelID, {
            scatter: debugSc,
            wildLeader: debugWLeader,
            wild: debugWIcons,
            normal: debugNIcons
        });*/
        //console.log('===Reel Sort Map===', this._debugSortMap);
        return {
            scatterIcons: sc,
            wildLeaderIcons: wLeader,
            wildIcons: wIcons,
            normalIcons: nIcons
        };
    }

    //--強迫的把wild那一格拉到最上面
    protected override changeSibling(icons: UniIcon1016[]): void {

        const { scatterIcons, wildLeaderIcons, wildIcons, normalIcons } = this.processSortIcons(icons);
        const parent = icons[0].node.parent!;
        //const parent = this.node.parent!;
        let topIndex = parent.children.length - 1;
        //console.log('check_reelChildren==>', this.node.children.length, parent.children.length);
        // 1. Normal → 依 _iconList 原始順序，最底層
        for (let i = 0; i < normalIcons.length; i++) {
            normalIcons[i].siblingIndex = i;
            //normalIcons[i].currentSiblingIndex = i;
        }

        // 2. Wild 普通 → 疊在 Normal 之上
        for (const icon of wildIcons) {
            icon.siblingIndex = topIndex--;
            //icon.currentSiblingIndex = icon.siblingIndex;
        }

        // 3. Wild Leader → 疊在 Wild 普通之上
        for (const icon of wildLeaderIcons) {
            icon.siblingIndex = topIndex--;
            //icon.currentSiblingIndex = icon.siblingIndex;
        }

        // 4. Scatter → 永遠最高
        for (const icon of scatterIcons) {
            icon.siblingIndex = topIndex--;
        }

        // 5. 原始 swap：下方預備 icon 與畫面最下面的可見 icon 交換
        /*
        if (icons.length > 1) {
            const lastVisible = icons[icons.length - 2];
            const reserved = icons[icons.length - 1];
            const temp = lastVisible.siblingIndex;
            lastVisible.siblingIndex = reserved.siblingIndex;
            reserved.siblingIndex = temp;
        }*/

        //=====debug用=====
        /*
        for (let i = 0; i < icons.length; i++) {
            const icon = icons[i];
            const siblingData = icon.getSiblingIndex();
            console.log(`=====reelSort=======>>Reel ${this.reelID} Icon Index ${icon.symbol.iconIndex} SymbolID ${icon.symbol.symbolID} isScatter ${icon.isScatter} isWild ${icon.wildData.isWild} checkWildIsExist ${icon.checkWildIsExist()} siblingCur ${siblingData.current} siblingLast ${siblingData.last}`);
        }*/



        //=====debug用=====


        /*
        super.changeSibling(icons);
        const wildIcons = icons.filter(icon => icon.wildData.isWild && icon.checkWildIsExist());
        if (wildIcons.length === 0) return;
        //-parent.children.length - 1 是最上層
        const parent = wildIcons[0].node.parent!;
        let topIndex = parent.children.length - 1;

        for (const icon of wildIcons) {
            icon.siblingIndex = topIndex--;
        }*/
    }





    private checkSortIconList(): void {
        //return;
        for (let i = 0; i < this._iconList.length; i++) {
            const icon = this._iconList[i];
            const siblingData = icon.getSiblingIndex();
            //console.log(`=====checkSortIconList======='+this.reelID+'\n'
            //    //Reel ${this.reelID} IconIndex ${icon.symbol.iconIndex} SymbolID ${icon.symbol.symbolID} isScatter ${icon.isScatter} isWild ${icon.wildData.isWild} checkWildIsExist ${icon.checkWildIsExist()} siblingCur ${siblingData.current} siblingLast ${siblingData.last}`, this._iconList);
            console.log("=====checkSortIconList=======" + this.reelID + "\n"
                + "aryIndex=  " + i + "\n"
                + "iconIndex=  " + icon.symbol.iconIndex + "\n"
                + " symbolID=  " + icon.symbol.symbolID + "\n"
                + " isScatter= " + icon.isScatter + "\n"
                + " isWild=  " + icon.wildData.isWild + "\n"
                + " checkWildIsExist= " + icon.checkWildIsExist() + "\n"
                + " siblingCur= " + siblingData.current + "\n"
                + " siblingLast= " + siblingData.last + "\n",
                this._iconList, this._debugSortMap);
        }
    }

    public onStopRoll = async (): Promise<void> => {

        /*
        GameUtilsTools.debugLog(DEBUG_TITLE, 'onStopRoll', {
            reelTarget: this,
            iconList: this._iconList
        });*/
        //const reelFinishStopTime = Date.now();//--debug
        //GameUtilsTools.debugLog('CHECK_TIME', 'SINGLE_FINISH_STOP', { reel: this.reelID, during: reelFinishStopTime - this._testStopTime }, 'log');
        //--檢查列表狀態
        //await this._pendingWildTask;
        //await this.setIconDataAfterRollEnd();
        this.setIconDataAfterRollEnd();
        this.writeContinueWildData();
        //await this.regiestMultipleReelData();
        this.regiestMultipleReelData();

        this._endBouncePromise = (async () => {
            await this.onEndBounceMotion();
            return this.reelID;
        })();
        /*
        this._endBouncePromise = this.onEndBounceMotion()
            .catch(e => console.warn(`[BounceError][Reel${this.reelID}]`, e));
        */
    }



    public getEndBouncePromise(): Promise<number> | null {
        return this._endBouncePromise ?? null;
    }

    //private async setIconDataAfterRollEnd(): Promise<void> {
    private setIconDataAfterRollEnd(): void {

        for (let i: number = 0; i < this._iconList.length; i++) {

            const iconTarget = this._iconList[i];
            iconTarget.symbol.iconIndex = i;
            iconTarget.setResultSymData();
            iconTarget.setReadyHandState(this._isReadyHand);
            iconTarget.setFastModeState(this._isFastMode);
            iconTarget.setWholeBoardReadyHandState(this._isWholeBoardReadyHand);
            //--檢查如果最後一張牌是隨機牌scatter的話,要換牌
            if (i == 0 && iconTarget.isScatter) {
                iconTarget.isScatter = false;
                this.removeAndRecycleImmediately(iconTarget);
                const newSymbolID = this.getSpRandomOnce(ALL_SYMBOL_LIST_NG);
                iconTarget.symbol.symbolID = newSymbolID;
                const reelData: IReelInfo = {
                    reelIndex: iconTarget.symbol.reelIndex,
                    iconIndex: iconTarget.symbol.iconIndex,
                    symbolId: iconTarget.symbol.symbolID
                };
                //await this.attachNormalSymbol(iconTarget, reelData);
                this.attachNormalSymbol(iconTarget, reelData);
            }

            //isScatter
            if (i == 4 && iconTarget.wildData.isWild && iconTarget.checkWildIsExist()) {
                //--一次下來就是一整條的1*4 wild---橋一下位置
                const wildNode = iconTarget.getWildNode();
                const targetNode = wildNode.children[0];
                const pos = targetNode.position.clone();
                //const resultOffsetY = -10;
                const resultOffsetY = 0;
                targetNode.setPosition(v3(pos.x, pos.y + resultOffsetY, pos.z));//---正常的做法
            }
            if (i > this._iconAmount) {
                iconTarget.aniNodeGoBackToDefault();
                if (i == this._iconList.length - 1) {
                    /**
                     * 避免最後一格是wild開頭的情況,尚未刪除(要拿到上面才會刪除).
                     * 導致顯示錯誤與表演時候整個被拉上來
                     * ex:[9,9,0,1,9,9,9,9]
                     */
                    const wildNode = iconTarget.checkAndRemoveWildNode();
                    if (wildNode) {
                        this.clearAndRecycleSpineNode(wildNode);
                    }
                }
            }
        }
    }

    /**
     * 這樣寫應該會有bug..遇到即使是滿足條件但是中間有斷掉的情況
     * <就上下各兩格獨立的狀態這樣就會炸開>
     * 20250904-FIX
     */
    private setLockReel(): void {

        const r1 = this._iconList[1].symbol.symbolID == 9 ? true : false;
        const r2 = this._iconList[2].symbol.symbolID == 9 ? true : false;
        const r3 = this._iconList[3].symbol.symbolID == 9 ? true : false;
        const r4 = this._iconList[4].symbol.symbolID == 9 ? true : false;
        const onlyOneWholeWild = (
            this._singleWildGroupResultData.length == 1 &&
            //--連續長度與icon數量匹配=整軸wild
            this._singleWildGroupResultData[0].matchIndices.length == this._iconAmount
        ) ? true : false;

        if (r1 && r2 && r3 && r4 && (onlyOneWholeWild || this._hasWildMoved)) {
            this._isLock = true;
            this._hasWholeWild = true;
        } else {
            this._isLock = false;
            this._hasWholeWild = false;
        }

        for (let icon of this._iconList) {
            icon.wildData.isLock = this._isLock;
            icon.setDynWildLockReelData();
        }
    }

    /**
     * 已經拉到外層表演,但是為了得分表演的流程,需要將wild資料寫map
     * 為的就是改變owenr(如果要轉移的owner與持有相同將會忽略)
     * @param reelIndex 
     * @param iconIndex 
     */
    public async reSetWildDataAfterWithoutMove(reelIndex: number, iconIndex: number): Promise<void> {
        const playData: IPlayAniData = {
            reelIndex: reelIndex,
            iconIndex: iconIndex,
            symbolId: 9,
            tokenId: '',
            aniId: ''
        };

        this._aniCrossServiceProxyFactory.unRegister(playData);
        await this._aniCrossServiceProxyFactory.multiRegisty([playData]);//--自己為註冊者
        this._aniCrossServiceProxyFactory.debugCheckAllOwners();

    }

    /**
     * 20251005-NEW
     * 此時的wild已經被拔到外面了
     */
    public async reSetWildDataAfterMove(reelId: number): Promise<void> {
        //--如果牌是[9,*,*,*]之後又位移[9,9,9,9],再重新整理資料後,第0格的9要處理
        await this.reWriteWildDataAfterMovement();//--回收註冊,並將沒有參與位移的wild移除
        this.setWildDataAfterMoveAndAdd(reelId);
        this._aniCrossServiceProxyFactory.debugCheckAllOwners();

    }
    /**
     * 這邊的動作是位移完畢後,把wild資料寫回去
     * (已經移除舊的註冊表,並且註冊新的註冊表)
     */
    private setWildDataAfterMoveAndAdd(reelId?: number): void {

        const iconTarget = this._iconList[reelId];
        iconTarget.setDynWildLockReelData();
        iconTarget.setWildDynamicData();
        //GameUtilsTools.debugLog(DEBUG_TITLE, 'setWildDataAfterMoveAndAdd', { list: this._iconList }, 'log');

    }



    /**
     * 重寫入移動後全軸wild資料
     * 1.取消移動前註冊的wild位置資料
     * 2.reset Iocn裡面的wildData
     * 3.重新寫入wild位置資料
     * 4.重新註冊wild位置資料
     * @param wildMoveInfo 要移動的wild資料
     */
    private async reWriteWildDataAfterMovement(): Promise<void> {
        //--1.先找出來取消註冊的wild位置資料
        const removeWildMap: IPlayAniData[] = [];
        const registerDataList: IPlayAniData[] = [];
        const continueWild: string[] = [];
        //--
        /**
         * 1.先洗掉整軸的資料(此時位移後的Wild還在reel上面,還沒回到icon裡面)
         * a-<清理iconlist資料>洗掉還有的wild(有可能一軸2個獨立的wild)和aniNode的全部資料
         * b-<清理註冊資料>把這一軸盤面的註冊資料洗掉
         * 2.icon重新寫入wild資料(位移後的)
         * a-<寫入iconlist資料>把位移後的wild資料寫回iconlist
         * b-<寫入註冊資料>把位移後的wild資料重新註冊
         */
        for (let i: number = 0; i < this._iconList.length; i++) {

            const iconTarget = this._iconList[i];

            //--如果牌是[9,*,*,*]之後又位移[9,9,9,9],再重新整理資料後,第0格的9要處理
            if (i > 0) {
                //--預備位的不要處理
                this.removeAndRecycleImmediately(iconTarget);
                iconTarget.resetData();
            }
            if (i > 0 && i <= 4) {
                const targetSymbol = iconTarget.symbol;
                removeWildMap.push({
                    reelIndex: targetSymbol.reelIndex,
                    iconIndex: targetSymbol.iconIndex,
                    symbolId: targetSymbol.symbolID,
                    tokenId: "",
                    aniId: ''
                });
                iconTarget.wildData.isWild = true;
                iconTarget.wildData.wildIndex = i;
                const key = `${this.reelID}:${i}:${9}`;//--擠到node裡面
                continueWild.push(key);

                registerDataList.push(
                    {
                        reelIndex: this.reelID,
                        iconIndex: targetSymbol.iconIndex,
                        symbolId: 9,
                        tokenId: '',
                        aniId: ''
                    }
                );
                //targetSymbol.symbolID = 9; 
            }
            iconTarget.wildData.isLock = true;
        }

        for (let j: number = 0; j < this._iconAmount; j++) {
            this._iconList[j + 1].wildContinue = continueWild;
            this._iconList[j + 1].symbol.symbolID = 9;
            this._iconList[j + 1].wildData.isWild = true;
            this._iconList[j + 1].wildData.wildIndex = j + 1;
        }

        this._wildCount = 0; //--wild的計數器歸零
        this._upConsecutiveExtraCardsData = [];
        this._hasWildMoved = true;
        this._isLock = true;
        this._aniCrossServiceProxyFactory.multiUnRegister(removeWildMap);
        await this._aniCrossServiceProxyFactory.multiRegisty(registerDataList);//--自己為註冊者
        this._aniCrossServiceProxyFactory.debugCheckAllOwners();

    }

    private writeContinueWildData(): void {

        for (let i: number = 0; i < this._singleWildGroupResultData.length; i++) {

            let wildDataTarget = this._singleWildGroupResultData[i];
            let targetData = wildDataTarget.matchIndices;
            let startIndex = wildDataTarget.startIndex + 1;
            const indexInfo = [];
            const continueWild: string[] = [];

            //--直接搜到底*4--從頭開始往下長(拿頭的)--往下連續-補牌在前端
            if (wildDataTarget.direction == Direction.DOWNWARD) {
                for (let i: number = 0; i < 4; i++) {

                    const iconDataIndex = startIndex + i;
                    const key = `${this.reelID}:${iconDataIndex}:${9}`;//--擠到node裡面
                    continueWild.push(key);
                    indexInfo.push(iconDataIndex);

                }

            } else if (wildDataTarget.direction == Direction.UPWARD) {
                //---從腳開始往上長(拿腳的)--往上連續-補牌在末端
                for (let j: number = 0; j < targetData.length; j++) {

                    const iconDataIndex = targetData[j] + 1;
                    const key = `${this.reelID}:${iconDataIndex}:${9}`;//--擠到node裡面
                    continueWild.push(key);
                    indexInfo.push(iconDataIndex);
                }
            }

            for (let iconDataIndex of indexInfo) {

                const target = this._iconList[iconDataIndex];
                target.wildContinue = continueWild;
                target.setWildDynamicData();

            }
        }

    }


    private regiestMultipleReelData(): void {

        const registerDataList: IPlayAniData[] = [];

        for (let i: number = 0; i < this._iconAmount; i++) {
            const iconTarget = this._iconList[i + 1];//--因為iconList[0]是預備牌()
            /**
             * 要全部都註冊在handoff的時候wild才會有辦法回來(因為有些是不完整的狀態),
             * 但是註冊的位置都是在這個wild的開頭部分
             */

            const registerData: IPlayAniData = {
                reelIndex: iconTarget.symbol.reelIndex,
                iconIndex: iconTarget.symbol.iconIndex,
                symbolId: iconTarget.symbol.symbolID,
                tokenId: "",
                aniId: ''
            };
            registerDataList.push(registerData);
        }

        this.setLockReel();
        //await this._aniCrossServiceProxyFactory.multiRegisty(registerDataList);
        this._aniCrossServiceProxyFactory.multiRegisty(registerDataList);

    }

    public override startRoll(): void {
        //if (this._isLock) return;//--在盤面鎖定的狀態下就別浪費時間轉了
        if (this._isLock) {
            if (!this._isFirstLockInRound) {
                this._isFirstLockInRound = true;
            }
            return;
        }

        super.startRoll();
    }

    private async onEndBounceMotion(): Promise<void> {

        if (this.bounceConfig.endBounce) {
            this.resetMovements();
            //GameUtilsTools.debugLog(DEBUG_TITLE, 'onEndBounceMotion', { reel: this.reelID });
            await this.bouncingAsync(this.bounceConfig.bounceDis, 'down');
        }
    }
    /**
     * 在IDE上面去開關它
     */
    public upBouncing(): void {
        if (this.bounceConfig.startBounce) {
            this.resetMovements();
            this.bouncingAsync(this.bounceConfig.bounceDis, 'up');
        }
    }

    public async bouncingAsync(dis: number, upDown?: 'up' | 'down'): Promise<void> {

        return new Promise((resolve, reject) => {

            let downEasing = this.bounceConfig.downBounceEasing;
            let downDuration = this.bounceConfig.downBounceDuration;
            let upEasing = this.bounceConfig.upBounceEasing;
            let upDuration = this.bounceConfig.upBounceDuration;
            let downRealCurve = this.bounceConfig.useRealCurve ? this.bounceConfig.downBounceRealCurve : null;
            let upRealCurve = this.bounceConfig.useRealCurve ? this.bounceConfig.upBounceRealCurve : null;

            for (let i = 0; i < this._iconList.length; ++i) {

                if (upDown == 'up') {
                    //--down往上提
                    this._iconList[i].moveBy(this.moveDir.multiplyScalar(dis).negative(), downDuration, downEasing, downRealCurve);
                    //--up往下沉
                    this._iconList[i].moveBy(this.moveDir.multiplyScalar(dis), upDuration, upEasing, upRealCurve);

                } else {
                    //--up往下沉
                    this._iconList[i].moveBy(this.moveDir.multiplyScalar(dis), upDuration, upEasing, upRealCurve);
                    //--down往上提
                    this._iconList[i].moveBy(this.moveDir.multiplyScalar(dis).negative(), downDuration, downEasing, downRealCurve);
                }

            }
            this._iconList[0].addCallback(() => resolve());
        })
    }

    /**
     * 抽象方法..
     * 在動態改變symbolnumber數量的時候,在清空引用導致數據錯亂
     * 這種方法只能在固定長度下來這樣引用,如果是動態改變icon數量的話
     * 需要改成每次產生的時候再產生新的
     * @returns null
     */
    protected createRandomSymbol(): SymbolNumber | null {
        return null;
    }

    private createRandomNumber(): number {

        if (this._currentRandomData.length <= 0) {
            this._currentRandomData = this.generateRandomSymbolList();
        }
        return this._currentRandomData.pop();
    }


    private getTakeCardsRandomList(amount: number): number[] {
        return this.generateRandomSymbolList(amount);
    }

    protected destroySymbol(symbol: SymbolNumber) {
        //SymbolNumber.pool.destroy(symbol);

    }

    //--產生隨機符號列表-20260105-NEW企劃要求的白痴方法
    protected generateRandomSymbolList(amount?: number): number[] {

        // 依照遊戲模式取得符號列表
        const sourceList = this.getTargetAllSymbolList();
        const uniqueList = this.getTargetUniqueSymbolList();

        // 混合亂數池 (一般符號 + 特殊符號)
        const randomSingleList: number[] = [...sourceList, ...uniqueList];

        // 初始化 randomMap (使用 sourceList 的符號)
        const randomMap: Record<number, number[][]> = {
            2: sourceList.map(s => [s, s]),
            3: sourceList.map(s => [s, s, s]),
            4: sourceList.map(s => [s, s, s, s])
        };

        // 依照機率決定 pattern 大小
        // 30%: size 2, 40%: size 3, 20%: size 4, 10%: default size 3
        const rand = Math.random();
        let patternSize: number;
        if (rand < 0.3) {
            patternSize = 2;
        } else if (rand < 0.7) {
            patternSize = 3;
        } else if (rand < 0.9) {
            patternSize = 4;
        } else {
            patternSize = 3; // 預設
        }

        // 從對應的 map 中隨機取得一組 pattern
        const patterns = randomMap[patternSize];
        const pattern = patterns[Math.floor(Math.random() * patterns.length)];

        // 決定補牌位置 (頭或尾)
        const fillPosition: 'head' | 'tail' = Math.random() < 0.5 ? 'head' : 'tail';

        // 計算需要補多少張牌 (中間部分 index 1-4 共 4 格)
        const singlesNeeded = 4 - patternSize;

        // 從 randomSingleList 中隨機抽取不重複的值
        const availableSingles = [...randomSingleList];
        const fillerValues: number[] = [];
        for (let i = 0; i < singlesNeeded; i++) {
            const singleIndex = Math.floor(Math.random() * availableSingles.length);
            fillerValues.push(availableSingles[singleIndex]);
            availableSingles.splice(singleIndex, 1);
        }

        // 組合中間部分 (index 1-4)
        const middlePart: number[] = [];
        if (fillPosition === 'head') {
            // 補牌在頭部, pattern 在尾部
            middlePart.push(...fillerValues);
            middlePart.push(...pattern);
        } else {
            // pattern 在頭部, 補牌在尾部
            middlePart.push(...pattern);
            middlePart.push(...fillerValues);
        }

        // 組合完整的 reel (index 0 和 index 5 隨意填充)
        const reel: number[] = [
            randomSingleList[Math.floor(Math.random() * randomSingleList.length)], // index 0
            ...middlePart,
            randomSingleList[Math.floor(Math.random() * randomSingleList.length)]  // index 5
        ];

        // 如果 amount 有值且小於 reel 陣列的長度，則從 reel 陣列取出符合 amount 數量的資料回傳
        // 如果 amount 沒有值或大於等於 reel 陣列的長度，就直接回傳 reel 陣列
        if (amount !== undefined && amount < reel.length) {
            return reel.slice(0, amount);
        } else {
            return reel;
        }


    }
    //--抽取一次隨機符號不包含scatter(用來在scatter進場前的取代,進場完成後要再塞回真正的資料)
    private getSpRandomOnce(randomSource: number[]): number {
        const sourceList = randomSource;
        const randomIndex = randomRangeInt(0, sourceList.length - 1);
        return sourceList[randomIndex];

    }


    private getTargetAllSymbolList(): number[] {
        //const globalGameState = BasicGameGlobalData.getInstance<GameGlobalData>().getGlobalData(GameGlobalKeys.GameState);
        const globalGameState = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);

        if (globalGameState == GameState.NORMAL) {
            return ALL_SYMBOL_LIST_NG;
        } else if (globalGameState == GameState.FREE_GAME) {
            return ALL_SYMBOL_LIST_FG;
        } else if (globalGameState == GameState.RE_SPINE) {
            return ALL_SYMBOL_LIST_RE;
        }
    }

    private getTargetUniqueSymbolList(): number[] {
        //const globalGameState = BasicGameGlobalData.getInstance<GameGlobalData>().getGlobalData(GameGlobalKeys.GameState);
        const globalGameState = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);
        let targetList;
        if (globalGameState == GameState.NORMAL) {
            targetList = UNIQUE_SYMBOL_LIST_NG;
        } else if (globalGameState == GameState.FREE_GAME) {
            targetList = UNIQUE_SYMBOL_LIST_FG;
        } else if (globalGameState == GameState.RE_SPINE) {
            targetList = UNIQUE_SYMBOL_LIST_RE;
        }
        return targetList[this.reelID];
    }


    public updateIcons(dt: number): void {
        for (let i = 0; i < this._iconList.length; i++) {
            const iconTarget = this._iconList[i];
            iconTarget.updateIcon(dt);
        }
    }

    public testHideIcon(iconIndex: number): void {
        const iconTarget = this._iconList[iconIndex];
        iconTarget.testHideIcon();
    }

    public testAddSymbol(iconIndex: number): void {
        let node = AnimationControllersPoolManager.getInstance().getInstantiatedObjFromPool('icon_10_inGame');
        const iconTarget = this._iconList[iconIndex];
        iconTarget.addSymbolAniNode(node);

    }

}


