import { _decorator, color, Sprite, SpriteFrame, v3, Node, Vec3, CCString, NodeEventType, tween, UITransform } from 'cc';
import { UniIconBase } from './ReferencePathForUniSlot';
import { IWildData } from './ISlotDefinitionData';
import { SymbolNumber } from './SymbolNumber';
import { AnimationStateType } from '../MyUtils/AnimationSystemV2/Components/AniStateLists/AnimationPlayStateBase';
import { DefinitionGameConfigData } from '../DefinitionGameData1016/GameConfigInstance';
import { AnimationController, DYN_NODE_PROPERTIES, GameGlobalKeys, GameUtilsTools, IAnimationControl, IPlayAniData, MultiSpineController, SpineController } from '../ReferencePath';
import { DYN_WILD_INFO } from '../DefinitionGameData1016/GameConfigInstance';
import { AniSysTools } from '../MyUtils/AnimationSystemV2/AniTools/AniSysTools';
import { GlobalAccessReader } from '../DefinitionGameData1016/AccessDefs/GlobalAccess';
import { NewFlashModeEnum } from 'db://assets/Scripts/GameScripts/GenericUI/Scripts/MainUI';
const {
    HIGH_ODDS_SYMBOL_LIST,
    SCATTER_LIST,
    WILD_LIST
} = DefinitionGameConfigData;

const DEBUG_LOG_TITLE = '<UniIcon1016>';
const WILD_EXPECT_ANI_TYPE = 'Expect';
const DEFAULT_SYMBOL_ID = 1;
const { ccclass, property } = _decorator;
@ccclass('UniIcon1016')
export class UniIcon1016 extends UniIconBase<SymbolNumber> {
    /**
     * 就是V2原本的gameIcon
     */

    @property({ range: [0, 255] })
    protected darkBrightness: number = 0;
    //--美術78的要求
    @property({ range: [0, 255], visible: true, tooltip: '美術要求在特殊時期要使用的漸變參數' })
    protected _sp_darkBrightness: number = 0;

    @property(Sprite)
    protected gameSprite: Sprite = null;

    @property(SpriteFrame)
    protected spriteFrameList: SpriteFrame[] = [];
    @property(CCString)
    public isFinalDesIcon: string = '';

    @property(Vec3)
    protected iconSize: Vec3 = v3(0, 0, 0);

    private _wildNode: Node = null;
    private _wildData: IWildData = { isStart: false, isEnd: false, wildIndex: -1, isWild: false, isLock: false, goBack: false };
    private _isScatter: boolean = false;
    private _aniSymbol: Node = null;// 用於存放spine動畫的節點
    private _aniWPos: Vec3 = v3(0, 0, 0);
    private _isMovedWild: boolean = false; // 是否為移動過wild
    private _colorState: boolean = false;
    private _readyHandFlag: boolean = false;
    /** promise resolve 函式**/
    private _resolvePromise: ((value: any) => void) | undefined;
    private _wildContinue: string[] = [];//--空軸是wild系列的時候也要記錄
    private _fakeWildLayerContainer: Node = null;
    //--test--
    public iconId: number = 0;
    //--20260105-2階段會爆開用到這個參數
    //private _cachedWildNodePosition: Vec3 = null;
    //private _isSettingWildPosition: boolean = false; //  添加標記
    private _skipNextTransformUpdate: boolean = false;
    private _lastIconWorldPosition: Vec3 = null; //  記錄上一幀的位置
    private _skipWildSyncFrames: number = 0; // 跳過同步的幀數
    private _wildInsidePos: Vec3 = v3(0, 0, 0);//--用來記錄wildNode裡面包的那個node的位置用的


    //--移動到最上面才會=true,一旦賦予資料後,就會變false,直到下次滾到最上面
    set fakeWildLayerContainer(value: Node) {
        this._fakeWildLayerContainer = value;
    }

    get readyHandFlag(): boolean {
        return this._readyHandFlag;
    }

    get wildContinue(): string[] {
        return this._wildContinue;
    }

    set wildContinue(value: string[]) {
        this._wildContinue = value;
    }

    get isMovedWild(): boolean {
        return this._isMovedWild;
    }

    set isMovedWild(value: boolean) {
        this._isMovedWild = value;
    }

    get aniWPos(): Vec3 {
        return this._aniWPos;
    }

    set aniWPos(value: Vec3) {
        this._aniWPos = value;
    }

    get isScatter(): boolean {
        return this._isScatter;
    }

    set isScatter(value: boolean) {
        this._isScatter = value;
    }

    get wildData(): IWildData {
        return this._wildData;
    }



    public init(): void {

        super.init();
    }

    public updateIcon(dt: number): void {

        //super.update(dt);
        this.updateMove(dt);
        if (!this._wildNode || !this._wildNode.isValid) {
            return;
        }

        /*
        if (this._skipWildSyncFrames > 0) {
            this._skipWildSyncFrames--;
            return;
        }*/

        const currentIconWorldPos = this.node.worldPosition;
        if (!this._lastIconWorldPosition || !this._lastIconWorldPosition.equals(currentIconWorldPos)) {

            //this._wildNode.worldPosition = v3(currentIconWorldPos.x, currentIconWorldPos.y + 10, this._wildNode.worldPosition.z);
            this._wildNode.worldPosition = v3(currentIconWorldPos.x, currentIconWorldPos.y, this._wildNode.worldPosition.z);
            this._lastIconWorldPosition = currentIconWorldPos.clone();
            this.offsetIconPos(this._wildNode);//---20260303測試關閉

            /*
            let targetNode: Node = this._wildNode.children[0];//--外面再包一層node用來改變位置用的
            targetNode.setPosition(v3(0, 0, 0));
            const offsetY = 160 / 2;
            const uiTransform: UITransform = this._wildNode.getComponent(UITransform);
            const changeV3 = v3(v3(0, (uiTransform.contentSize.height / 2) - offsetY, 0))
            targetNode.setPosition(changeV3);*/
        }

    }

    public checkSpriteFrameExist(): boolean {
        if (!this.gameSprite.spriteFrame) {
            return false;
        } else {
            return true;
        }
    }

    public getGameSpriteNode(): Node {
        return this.gameSprite.node;
    }
    //---for debug
    public getSiblingIndex(): { last: number, current: number } {
        return { last: this._lastSiblingIndex, current: this._siblingIndex };
    }
    /*
    //假如覆寫get or set，兩者都要override
    public override get symbol(): SymbolNumber { 
        return this._symbol;
    }
    
    //分開兩段來寫資料,換圖規換圖,寫symbolNum歸symbolNum
    public override set symbol(symbol: SymbolNumber) {
        this._symbol = symbol;
        this.updateSymbol(symbol);
    }*/


    public getIconReelInfo(): { reelIndex: number, iconIndex: number } {

        const reelData =
        {
            reelIndex: this._symbol.reelIndex, //從SymbolNumber取得reelIndex
            iconIndex: this._symbol.iconIndex //從SymbolNumber取得iconIndex
        }
        return reelData;
    }

    public resetWildData(): void {

        this._wildData.isStart = false;
        this._wildData.isEnd = false;
        this._wildData.wildIndex = -1;
        this._wildData.isWild = false;
        this._wildData.isLock = false;
        this._wildData.goBack = false;
    }

    public resetData(): void {

        this.resetWildData();
        this._wildContinue = [];
        this._aniWPos = v3(0, 0, 0);
        this._isScatter = false;
        this.gameSprite.spriteFrame = null; // 清除圖像
        //this.gameSprite.color = color(255, 255, 255, 0);
        this.gameSprite.node.active = true;
        this._readyHandFlag = false;
        this._lastIconWorldPosition = null; // 重置位置記錄
        this._skipWildSyncFrames = 0; // 重置跳過計數
        this._wildInsidePos = v3(0, 0, 0);//--重置wild裡面包的那個node的位置
        //this._cachedWildNodePosition = null;//--清空2階段加速wild位置資料
        this.safeResolve();//--清除殘留的promise
    }

    public getWildAniCtrl(): IAnimationControl | null {

        if (this._wildNode) {
            return this._wildNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL] as IAnimationControl;
        }
        return null;
    }

    public getAndRemoveWildNode(handoff: boolean = true): Node {

        if (handoff) {
            if (this._colorState) {
                this.changeSpineColor(255);
            }
        }

        const node = this._wildNode;
        if (node?.isValid) node.removeFromParent(); // 比 removeChild 穩定
        this._wildNode = null;
        this._lastIconWorldPosition = null; // 重置位置記錄
        this._skipWildSyncFrames = 0; //  重置跳過計數
        return node ?? null;
    }

    //--沒有刪除還保留在這個容器之中
    public getWildNode(): Node {

        return this._wildNode;
    }

    public getSymbolAniNode(): Node | null {

        if (!this._aniSymbol) {
            return null;
        } else {
            return this._aniSymbol;
        }
    }

    //--new 0925
    public checkAndRemoveWildNode(): Node {

        let returnNode: Node = null;

        if (this._wildData.isWild) {
            if (this.checkWildIsExist()) {
                returnNode = this.getAndRemoveWildNode();
            }
            this.resetData();//--裡面自己會做清空spriteFrame的動作
            /*
            this.testIsWildEnd = 'false';
            this.testIsWildStart = 'false';
            this.testIsWild = 'false';//--debug
            this.testISAddWildNode = 'REMOVED';//--debug 
            */
        }
        return returnNode;
    }

    //--new 0925
    public checkAniSymbolAndRemove(): Node {

        let returnNode: Node = null;
        if (this.checkAniSymbolIsExist()) {
            returnNode = this.getSymbolAniNodeAndRemove();
        }
        this.gameSprite.spriteFrame = null; // 清除圖像
        //this.gameSprite.color = color(255, 255, 255, 0);
        this.gameSprite.node.active = true;
        this._aniWPos = v3(0, 0, 0);
        return returnNode;
    }

    public checkWildIsExist(): boolean {

        if (this._wildNode !== null) {
            return true;
        } else {
            return false;
        }
    }

    public checkAniSymbolIsExist(): boolean {

        if (this._aniSymbol !== null) {
            return true;
        } else {
            return false;
        }
    }

    private offsetIconPos(wildNode: Node): void {

        //const offsetY = this.iconSize.y / 2;
        const offsetY = (this.iconSize.y / 2) + 10;
        let targetNode: Node = wildNode.children[0];//--外面再包一層node用來改變位置用的
        targetNode.setPosition(v3(0, 0, 0));
        const uiTransform: UITransform = wildNode.getComponent(UITransform);
        const changeV3 = v3(v3(0, (uiTransform.contentSize.height / 2) - offsetY, 0))
        targetNode.setPosition(changeV3);
        this._wildInsidePos = targetNode.worldPosition.clone();//--20260303
    }

    public addWildNode(wildNode: Node): { leftover?: Node[] } {

        let leftover: Node[] = this.findAndRemoveLeftoverNode(wildNode);
        this._wildNode = wildNode;
        this._fakeWildLayerContainer.addChild(wildNode);//--先用假的容器來放

        const iconTargetWpos = this.node.worldPosition.clone();
        //const iconWorldPos = v3(iconTargetWpos.x, iconTargetWpos.y + 10, iconTargetWpos.z);
        const iconWorldPos = v3(iconTargetWpos.x, iconTargetWpos.y, iconTargetWpos.z);
        this.offsetIconPos(this._wildNode);//--移動prefab裡面的icon9這個node到微調位置使用的

        //  轉換座標
        const containerTransform = this._fakeWildLayerContainer.getComponent(UITransform);
        const targetLocalPos = containerTransform.convertToNodeSpaceAR(iconWorldPos);

        this._wildNode.position = targetLocalPos;
        this._lastIconWorldPosition = iconWorldPos.clone();


        //this.gameSprite.node.active = false;---測試關閉
        this.reSetWildLayerAndSort();

        return { leftover: leftover };
    }

    //---20260105-2階段會爆開用到這個方法
    public getWildNodePosition(): Vec3 {

        /*
        if (this._wildNode) {
            return this._wildNode.position.clone();
        }
        // 使用緩存的位置作為備用
        return this._cachedWildNodePosition?.clone() ?? v3(0, 0, 0);
        */

        const uiTransform: UITransform = this._fakeWildLayerContainer.getComponent(UITransform);
        let targetWorldPos;

        if (this._wildNode) {

            targetWorldPos = this._wildNode.worldPosition.clone();

        } else {
            const targetNodeWpos = this.node.worldPosition.clone();
            //targetWorldPos = v3(targetNodeWpos.x, targetNodeWpos.y + 10, targetNodeWpos.z);
            targetWorldPos = v3(targetNodeWpos.x, targetNodeWpos.y, targetNodeWpos.z);
        }
        //targetWorldPos = this._wildInsidePos.clone();//--20260303測試關閉微調後的wild位置

        const localPos = uiTransform.convertToNodeSpaceAR(targetWorldPos);
        return localPos;
        // 使用緩存的位置作為備用
        //const uiTransform: UITransform = this._fakeWildLayerContainer.getComponent(UITransform);
        //const targetWorldPos = this.node.worldPosition.clone();
        /*
        const localPos = uiTransform.convertToNodeSpaceAR(targetWorldPos);
        return localPos;
        */
    }

    private reSetWildLayerAndSort(): void {


        const children = this._fakeWildLayerContainer.children;
        children.sort((a, b) => {
            const aReelIndex = a[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex;
            const bReelIndex = b[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex;
            return aReelIndex - bReelIndex;
        });
        /**
         * 這裡有點雷,因為上一步node.parent = wildContainer;
         * 會直接把node push到後面...
         * 然後再用 setSiblingIndex(i)，它會重新排列陣列，畫的順序仍照內部的 index 走（從 0 開始畫）
         */
        for (let i = 0; i < children.length; i++) {
            children[i].setSiblingIndex(children.length - 1 - i);
        }
    }

    public testHideIcon(): void {
        this.gameSprite.node.active = false;
        console.log();
    }

    private testDebug(): void {
        this.gameSprite.color = color(255, 255, 255, 100);
    }

    public addSymbolAniNode(aniSymbol: Node, offsetY: number = 0, isDark: boolean = false): { leftover?: Node[] } {

        const leftover: Node[] = this.findAndRemoveLeftoverNode(aniSymbol);
        this._aniSymbol = aniSymbol;
        this._aniSymbol.active = true;

        //this.gameSprite.node.active = false;---test 關閉

        this.node.addChild(this._aniSymbol);
        this._aniSymbol.setPosition(v3(0, offsetY, 0));

        const darkValue = this.getDarkBrightness(this._colorState);
        if (this._symbol.symbolID != SCATTER_LIST[0]) {
            if (darkValue != 255) {
                this.changeSpineColor(darkValue);
            } else if (isDark) {
                this.setIconLight(isDark);
            }
        }

        return { leftover: leftover };
    }

    public setDynWildLockReelData(isLock?: boolean): void {

        if (this._wildNode) {
            //this._wildNode[DYN_NODE_PROPERTIES.LOCKED] = isLock;
            this._wildNode[DYN_NODE_PROPERTIES.LOCKED] = this.wildData.isLock;
        }

    }

    public setResultSymData(): void {

        if (this._aniSymbol) {

            this._aniSymbol[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO] = {
                symbolId: this._symbol.symbolID,
                reelIndex: this._symbol.reelIndex,
                iconIndex: this._symbol.iconIndex
            }
        }
    }



    public setReadyHandState(isReadyHand: boolean): void {
        //--這裡是不管快速模式與否每軸有吻合條件就會寫入,在外層要判斷擋掉
        this._readyHandFlag = isReadyHand;
        if (this._aniSymbol) {
            this._aniSymbol[DYN_NODE_PROPERTIES.READY_HAND_STATUS] = isReadyHand;
        }
    }

    public setFastModeState(isFastMode: boolean): void {

        if (this._aniSymbol) {
            this._aniSymbol[DYN_NODE_PROPERTIES.FAST_MODE] = isFastMode;
        }
    }

    public setWholeBoardReadyHandState(isWholeBoardReadyHand: boolean): void {

        if (this._aniSymbol) {
            this._aniSymbol[DYN_NODE_PROPERTIES.WHOLE_BOARD_READY_HAND] = isWholeBoardReadyHand;
        }
    }

    public setWildDynamicData(data?: IPlayAniData): void {

        if (this._wildNode) {
            this._wildNode[DYN_WILD_INFO.WILD_CONTINUE] = this._wildContinue;
            this._wildNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO] =
            {
                symbolId: this._symbol.symbolID,
                reelIndex: this._symbol.reelIndex,
                iconIndex: this._symbol.iconIndex
            };
        }
    }

    public aniNodeGoBackToDefault(): void {

        if (this.checkAniSymbolIsExist()) {
            const iAnimationControl: IAnimationControl = AniSysTools.findAndGetIAniComponent(this._aniSymbol) as IAnimationControl;
            iAnimationControl?.goBackToDefault();
        }

    }

    private findAndRemoveLeftoverNode(aniSymbol?: Node): Node[] {

        const leftover: Node[] = [];

        if (this._aniSymbol && this._aniSymbol.isValid) {
            /*
            GameUtilsTools.debugLog(DEBUG_LOG_TITLE, 'addSymbolAniNode_發現殘留 aniSymbol 強制移除', {
                iconID: this.iconId,
                reelIndex: this.symbol.reelIndex,
                iconIndex: this.symbol.iconIndex,
                symbolId: this.symbol.symbolID,
                replace: aniSymbol[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId,
                prefabID: aniSymbol[DYN_NODE_PROPERTIES.PREFAB_ID]
            }, 'warn');
            */

            const aniLeftover = this._aniSymbol;
            leftover.push(aniLeftover);
            this._aniSymbol.removeFromParent();
            this._aniSymbol = null;
            this.gameSprite.spriteFrame = null; // 清除圖像
            //this.gameSprite.color = color(255, 255, 255, 0);
            this.gameSprite.node.active = true;
            this._aniWPos = v3(0, 0, 0);
        }

        if (this._wildNode && this._wildNode.isValid) {

            /*
            GameUtilsTools.debugLog(DEBUG_LOG_TITLE, 'addSymbolAniNode_發現殘留 wildNode 強制移除', {
                iconID: this.iconId,
                reelIndex: this.symbol.reelIndex,
                iconIndex: this.symbol.iconIndex,
                symbolId: this.symbol.symbolID,
                replace: aniSymbol[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId,
                prefabID: aniSymbol[DYN_NODE_PROPERTIES.PREFAB_ID]
            }, 'warn');
            */

            const wildLeftover = this._wildNode;
            leftover.push(wildLeftover);
            this._wildNode.removeFromParent();
            this._wildNode = null;
            this.resetData();//--裡面自己會做清空spriteFrame的動作
            /*
            this.testIsWildEnd = 'false';
            this.testIsWildStart = 'false';
            this.testIsWild = 'false';//--debug
            this.testISAddWildNode = 'REMOVED';//--debug  
            */
        }
        return leftover;
    }



    private getSymbolAniNodeAndRemove(handoff: boolean = true): Node | null {

        if (!this._aniSymbol) {
            return null;
        } else {

            if (handoff) {
                if (this._colorState) {
                    this.changeSpineColor(255);
                }
            }

            const iAnimationControl: IAnimationControl = AniSysTools.findAndGetIAniComponent(this._aniSymbol) as IAnimationControl;
            iAnimationControl.goBackToDefault();
            this.node.removeChild(this._aniSymbol);
            let returnAniNode = this._aniSymbol;
            this._aniSymbol = null;

            /*
            GameUtilsTools.debugLog(DEBUG_LOG_TITLE, 'getSymbolAniNodeAndRemove_移除', {
                iconID: this.iconId,
                reelIndex: this.symbol.reelIndex,
                iconIndex: this.symbol.iconIndex,
                symbolId: this.symbol.symbolID
            })*/

            return returnAniNode;
        }

    }

    public handoffSymbolAniNode(): Node | null {

        if (!this._aniSymbol) {
            return null;
        } else {

            this.changeSpineColor(255);
            const iAnimationControl: IAnimationControl = AniSysTools.findAndGetIAniComponent(this._aniSymbol) as IAnimationControl;
            if (this._symbol.symbolID != 10) {
                iAnimationControl.goBackToDefault();
            }
            this.node.removeChild(this._aniSymbol);
            let returnAniNode = this._aniSymbol;
            this._aniSymbol = null;
            return returnAniNode;
        }
    }



    //--0-8沒有idle的狀態,9,10則有default和idle
    public playSymbolAni(aniName?: string): void {

        if (this._aniSymbol) {

            this._aniSymbol.active = true;
            let iAnimationControl: IAnimationControl = AniSysTools.findAndGetIAniComponent(this._aniSymbol) as IAnimationControl;
            if (iAnimationControl) {
                iAnimationControl.playAni(AnimationStateType.Default);
            }
        }
    }

    public async playWildToFgAnimation(): Promise<void> {

        if (this._wildNode) {
            const speed = GlobalAccessReader.getGlobalData(GameGlobalKeys.CurrentRoundSpeed);
            const iAnimationControl: AnimationController = this._wildNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL] as AnimationController;
            if (speed == NewFlashModeEnum.NewFlash2 || speed == NewFlashModeEnum.NewFlash1) {
                iAnimationControl.playAni({ aniState: 'Connect_1' });
                return;
            } else {
                await iAnimationControl.playAniInPromise({ aniState: 'Connect_1' });
            }

        }
    }

    public async playWildAppearAnimation(): Promise<void> {

        if (this._wildNode) {
            const speed = GlobalAccessReader.getGlobalData(GameGlobalKeys.CurrentRoundSpeed);
            const iAnimationControl: AnimationController = this._wildNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL] as AnimationController;
            iAnimationControl.goBackToDefault();
            if (speed == NewFlashModeEnum.NewFlash2 || speed == NewFlashModeEnum.NewFlash1) {
                //iAnimationControl.playAni({ aniState: 'Appear' });
                return;
            } else {
                await iAnimationControl.playAniInPromise({ aniState: 'Appear' });
            }

        }
    }

    public playWildExpectAni(): void {

        if (this._wildNode) {

            if (this._colorState) this.changeSpineColor(255);
            const iAnimationControl: IAnimationControl = this._wildNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL];
            iAnimationControl.playAni({ aniState: WILD_EXPECT_ANI_TYPE });
        }
    }

    public stopWildExpectAni(): void {

        if (this._wildNode) {
            const iAnimationControl: IAnimationControl = this._wildNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL];
            iAnimationControl.goBackToDefault();
        }
    }

    public playWildIdle(): void {

        if (this._wildNode) {
            const iAnimationControl: AnimationController = this._wildNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL];
            if (iAnimationControl.currentTarget == null) {
                //--還沒播過任何動畫
                iAnimationControl.playAni(AnimationStateType.Idle);
            } else if (iAnimationControl.currentTarget.targetName !== 'Idle_Ani') {
                const testCT = iAnimationControl.currentTarget;
                iAnimationControl.playAni(AnimationStateType.Idle);
            }
        }
    }

    public clearSymbolSpriteFrame(): void {
        this.gameSprite.spriteFrame = null;
        //this.gameSprite.color = color(255, 255, 255, 100);
    }

    public updateSymbol(symbol?: SymbolNumber): void {
        /**
         * PS symbolID=9是特殊物件,裡面也不會有東西,symbolID=10=scatter,為了吻合這個順序
         * 所以prefab裡面的spriteFrameList在index=9的時候會是空的,10才有東西
         * 因為9是wild特殊物件不會進來這裡吧?
         */
        if (!symbol) {
            symbol = this.symbol;
        }
        //this.testDebug();
        //this.gameSprite.node.active = false;//--20260128
        if (!this.spriteFrameList[symbol.symbolID]) {
            //--初始沒有值
            this.gameSprite.spriteFrame = this.spriteFrameList[DEFAULT_SYMBOL_ID];
            //console.warn(`SpriteFrame for symbolID ${symbol.symbolID} not found.`);
            return;
        } else if (symbol.symbolID === 9) {
            this.gameSprite.spriteFrame = null; // Wild icon does not have a sprite frame
            //this.gameSprite.color = color(255, 255, 255, 0);
            //his.gameSprite.color = color(255, 255, 255, 100);
            return;
        }
        this.gameSprite.spriteFrame = this.spriteFrameList[symbol.symbolID];
    }

    //--這裡只有在特殊模式下才會進來
    public setTweenBrightness(isDark: boolean): Promise<void> {

        this._colorState = isDark;
        this.doBasicColorChange();

        let darkBrightness = this.getDarkBrightness(isDark, true);
        let colorNumber = (isDark) ? { value: darkBrightness } : { value: 255 };
        const value = colorNumber.value.toString();

        return new Promise((resolve) => {
            tween(colorNumber)
                .to(0.5,
                    { value: darkBrightness },
                    {
                        onUpdate: (t, r) => {
                            this.gameSprite.color = color(colorNumber.value, colorNumber.value, colorNumber.value, this.gameSprite.color.a);
                            this.changeSpineColor(colorNumber.value);
                        }
                    }
                )
                .call(() => {
                    resolve();
                })
                .start();
        });

    }


    public setIconLight(isDark: boolean): void {

        this._colorState = isDark;
        this.doBasicColorChange();
        this.changeSpineColor(this.getDarkBrightness(isDark));
    }

    private getDarkBrightness(isDark: boolean, isSpColor?: boolean): number {

        let returnvalue = 255;
        if (isDark) {
            returnvalue = (isSpColor) ? this._sp_darkBrightness : this.darkBrightness;
        }
        return returnvalue;
    }

    private doBasicColorChange(): void {

        const darkBrightness = this.getDarkBrightness(this._colorState);
        if (this.gameSprite != null) {
            this.gameSprite.color = color(darkBrightness, darkBrightness, darkBrightness, this.gameSprite.color.a);
        }
    }


    private changeSpineColor(colorValue: number): void {

        if (this._aniSymbol) {

            const baseComponent = AniSysTools.findAndGetIAniComponent(this._aniSymbol) as IAnimationControl;
            if (HIGH_ODDS_SYMBOL_LIST.includes(this._symbol.symbolID)) {
                if (baseComponent && baseComponent instanceof MultiSpineController) {
                    let spineMap = baseComponent.getMultiSpineController();
                    for (const controller of spineMap) {
                        const sp = controller.spine;
                        sp.color = color(colorValue, colorValue, colorValue, sp.color.a);
                    }
                }
            } else if (SCATTER_LIST.includes(this._symbol.symbolID)) {

                if (baseComponent && baseComponent instanceof AnimationController) {
                    // 使用aniCtrl獨有的API
                    const aniCtrl: AnimationController = baseComponent as AnimationController;
                    if (aniCtrl && aniCtrl.isAEP_SPINE && aniCtrl.aepSpines.length > 0) {
                        for (const sp of aniCtrl.aepSpines) {
                            sp.color = color(colorValue, colorValue, colorValue, sp.color.a);
                        }
                    }
                }
            } else {
                //---??fuck..可能是wild這邊要在處理非MultiSpineController的型別(特別是animationController的狀態)
                if (baseComponent) {

                    if (!(<SpineController>baseComponent).spine) {
                        //console.log('wtf');
                    } else {
                        (<SpineController>baseComponent).spine.color = color(colorValue, colorValue, colorValue, (<SpineController>baseComponent).spine.color.a);
                    }
                }
            }
        } else if (this.checkWildIsExist() && this._symbol.symbolID == WILD_LIST[0]) {
            //有在包裝一層,且它是用AEP去控制spine
            const skeletons = this._wildNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL].aepSpines;
            for (const sp of skeletons) {
                sp.color = color(colorValue, colorValue, colorValue, sp.color.a);
            }

        }
    }

    protected setPendingResolve<T>(res: (value: T) => void): void {

        this.safeResolve();
        this._resolvePromise = res as any; // 暫時用 any 存
    }

    //--把殘留參數帶出去
    protected safeResolve<T>(value?: T): void {

        if (this._resolvePromise) {
            const r = this._resolvePromise as (value?: T) => void;
            this._resolvePromise = undefined;
            try { r(value); } catch { }
        }
    }

}


