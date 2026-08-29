import { _decorator, CCInteger, Node, tween, Vec3, v3, UITransform, color, Tween, UIOpacity } from 'cc';
import { ClassicalSlotAniController } from '../../MyUtils/AnimationSystem/ClassicalSlotAniController';
import { playIAniData, DYN_NODE_PROPERTIES } from "../../MyUtils/AnimationSystem/Definitions/AnimationDataOptions";
import { IAnimationControl } from '../../MyUtils/AnimationSystem/Definitions/IAnimationControl';
import { AniSysTools } from '../../MyUtils/AnimationSystem/AniTools/AniSysTools';
import { WinScoreData, GroupAniData } from '../../MyUtils/AnimationSystem/Definitions/AnimationDataOptions';
import { WinScore } from '../WinScore/WinScore';
import { GameUtils } from '../../MyUtils/GameUtils';
import { RPSWildSystem } from '../RPSWild/RPSWildSystem';
import { RPSWildState, RPSGuessRoundData, RPSWild_AniState } from '../RPSWild/RPSWildDef';
import { AnimationControllersPoolManager } from '../../MyUtils/AnimationSystem/AnimationControllersPoolManager';
import { ShowAniData } from './ShowAniDef';
import { SlotMachineIndexInfo } from '../../MyUtils/AnimationSystem/Definitions/AnimationDataOptions';
import { BonusManager } from '../FGController/BonusManager';
import { SpineController } from '../../MyUtils/AnimationSystem/Components/SpineController';
import { SkeletonExtension } from '../../../../../Scripts/GameScripts/SkeletonExtension';
import { AnimationPlayStateList, AniCtrlPropDef, IAniWithAniCtrl } from '../../MyUtils/AnimationSystem/Components/AniStateLists/AnimationPlayStateBase';
import { DefinitionGameConfigData } from '../../DefinitionGameData/DefinitionGameConfigData';
import { RPSWildAnimationController } from '../RPSWild/RPSWildAnimationController';
import { JpShowController } from '../JpShowController/JpShowController';
import { GenericUIManager } from '../../../../../GenericUI/Scripts/GenericUIManager';
import { FG_BkgController } from '../ShowContainer/Components/FG_BkgController';
import { FG2_BkgController } from '../ShowContainer/Components/FG2_BkgController';
import { NotifyCation } from '../../MyUtils/EventSystem/NotifyCation';
import { NotifySubject } from '../../DefinitionGameData/EventTypesDefinition';
import { ShowBottomTextStatus } from '../../DefinitionGameData/GameStateConfigDef';
import { GameViewEvents } from '../../DefinitionGameData/EventTypesDefinition';
import { FindComponent } from '../../MyUtils/FindComponent';
import { FindNode } from '../../MyUtils/FindNode';
import { Localization } from 'db://assets/Scripts/GameScripts/Localization';
import { LocalizationSpine } from 'db://assets/Scripts/GameScripts/LocalizationSpine';
import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
import { SoundList, AudioSourceList } from '../../DefinitionGameData/SoundList';
import { GameState } from '../../DefinitionGameData/GameStateConfigDef';
const { ccclass, property } = _decorator;
const {
    PFB_ANI_LIST,
    SPECIAL_WIN_THRESHOLD,
    HIGH_ODDS_SYMBOL_LIST,
    CONTAINER_ANI_SYMBOL,
    WILD_LIST
} = DefinitionGameConfigData;
@ccclass('ShowAniController')

export class ShowAniController extends ClassicalSlotAniController {

    @property({ type: Node, visible: true, displayName: 'SingleSlotItemNode', tooltip: 'Wild容器放的地方' })
    private _singleSlotItemNode: Node = null;

    private _winScore: WinScore;
    private _wildRPSSystem: RPSWildSystem;
    private _fgBonusSystem: BonusManager;
    private _JpShowController: JpShowController;
    private _fgAliShowVerticalAniNode: FG_BkgController;
    private _fgThievesShowVerticalAniNode: FG2_BkgController;
    private _delayTweenCancel: (() => void) | undefined; // 延遲動畫取消函式(for 延遲中斷時,阻斷tweenPromise resolve)
    private _currentGameState: GameState;
    private _currentCampData: number;//--NG模式=-1

    private _slotControllerWildDarkness: () => void = null;
    /**
     *  1.在猜拳過程中,秀完中線後要再把高賠率塞回gameIcon裡面
     *  2.NG當中多條線分開跑分,跑分結束後要塞回gameIcon裡面
     */
    private _slotControllerReAddToGameIcon: (reelIndex: number, iconIndex: number, aniNode: Node) => void = null
    private _getAndRemoveSymbolAniNodeWithWorldPos: (reelIndex: number, iconIndex: number) => { target: Node | null, worldPos: Vec3 } = null; //-(reelIndex: number, iconIndex: number): Node | null
    private _setSingleGameIconBrightness: (reelIndex: number, iconIndex: number, value: boolean) => void = null;
    private _closeOrOpenAllGameIconBright: (brightnessFlag: boolean) => void = null
    private _currentCampFg: number = -1; //-目前FG的陣營
    private _resolvePromise: (() => void) | undefined; // promise resolve 函式 
    private _ary2dCards: number[][];
    private _singleScoreCycle: number = 0; //-是否單線得分循環
    private _hasPlayedPostWinSequence = false;//-輪播鎖
    private _abortPlaySequence: boolean = false; //-是否中止輪播

    set currentCampFg(value: number) {
        this._currentCampFg = value;//-0阿里 1 盜賊 -1 NG
    }

    set ary2dCards(value: number[][]) {
        this._ary2dCards = value;
    }

    set winScore(showScore: WinScore) {
        this._winScore = showScore;
    }

    set wildRPSSystem(value: RPSWildSystem) {
        this._wildRPSSystem = value;
    }

    set fgBonusSystem(value: BonusManager) {
        this._fgBonusSystem = value;
    }

    set JpShowController(value: JpShowController) {
        this._JpShowController = value;
    }

    set fgAliShowVerticalAniNode(value: FG_BkgController) {
        this._fgAliShowVerticalAniNode = value;
    }

    set fgThievesShowVerticalAniNode(value: FG2_BkgController) {
        this._fgThievesShowVerticalAniNode = value;
    }

    set slotControllerWildDarkness(value: () => void) {
        this._slotControllerWildDarkness = value;
    }

    set slotControllerReAddToGameIcon(value: (reelIndex: number, iconIndex: number, aniNode: Node) => void) {
        this._slotControllerReAddToGameIcon = value;
    }

    set getAndRemoveSymbolAniNodeWithWorldPos(value: (reelIndex: number, iconIndex: number) => { target: Node | null, worldPos: Vec3 }) {
        this._getAndRemoveSymbolAniNodeWithWorldPos = value;
    }

    set setSingleGameIconBrightness(value: (reelIndex: number, iconIndex: number, value: boolean) => void) {
        this._setSingleGameIconBrightness = value;
    }

    set closeOrOpenAllGameIconBright(value: (brightnessFlag: boolean) => void) {
        this._closeOrOpenAllGameIconBright = value;
    }

    constructor() {
        super();
    }

    public override init(): void {

        this._currentGameState = GameState.NORMAL;
        this._currentCampData = -1;
    }

    public setWinScoreNode(winScoreNode: Node): void {
        //console.log();
    }

    public changeGameMode(gameState: GameState, camp?: number): void {

        this._currentGameState = gameState;
        this._currentCampData = camp;
        this._JpShowController.changeGameMode(gameState, camp);
    }


    //--startSpin的時候都會進來
    public cleanAllPlayingAniForNewRound(): void {

        this._abortPlaySequence = true;
        this._winScore.stopWinScoreAni();
        this.winLinesGroupData = [];//-終止while迴圈
        this._singleScoreCycle = 0;//--單線得分循環
        this._hasPlayedPostWinSequence = false;//-輪播鎖

        if (this._wildRPSSystem.isWorking) {
            //--只有在wild的狀態下才會進來
            if (this._wildRPSSystem.canRemoveAndCloseWild) {
                this.stopAndRemoveAllAnis();
                this._wildRPSSystem.resetWild();//--將wild的isWorking設為false
            }
        } else {
            //--FG和NG走這裡
            this.stopAndRemoveAllAnisWithOutHighOdds();
        }

    }

    //--買保險(新的一局開始轉的時候就清空)
    public cleanAllRunningNodesForNewRound(): void {

        if (this._delayTweenCancel) {
            this._delayTweenCancel();//--強制終止 GameUtils.DeferByTweenPromiseWithCancel
            this._delayTweenCancel = undefined;
        }
        this.stopAndRemoveAllAnis();
    }

    public stopShowVerticalAni(): void {
        if (this._currentCampFg == 0) {
            this._fgAliShowVerticalAniNode.cleanAniState();
        } else if (this._currentCampFg == 1) {
            this._fgThievesShowVerticalAniNode.cleanAniState();
        }
    }


    /**
     * 這邊只產生,並且塞到runningNode裡面
     * 相關的init要自己做
     * @param prefabKey 
     * @param aniData 
     * @returns 
     */
    public addSPNodeInRunning(prefabKey: string, aniData: ShowAniData, groupId: number): Node {
        let reelInfoAndGroup: SlotMachineIndexInfo = {
            reelIndex: aniData.reelIndex,
            iconIndex: aniData.iconIndex,
            iconID: aniData.iconID,
            groupID: groupId
        };
        let token: number = Date.now();
        let node = this.getPrefabNode(prefabKey);
        node[DYN_NODE_PROPERTIES.PREFAB_ID] = prefabKey;
        node[DYN_NODE_PROPERTIES.GROUP_ID] = [groupId];
        node[DYN_NODE_PROPERTIES.TOKEN_ID] = token + "_" + GameUtils.getRangeRandom(0, 100);
        node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO] = reelInfoAndGroup;
        let aniInterfaceComponent: IAnimationControl = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
        aniInterfaceComponent.tokenID = node[DYN_NODE_PROPERTIES.TOKEN_ID];
        aniInterfaceComponent.groupID = node[DYN_NODE_PROPERTIES.GROUP_ID];
        this.aryRunningNode.push(node);//--強塞進去
        return node;
    }

    public async addSPNodeInRunningForAwait(prefabKey: string, aniData: ShowAniData, groupId: number): Promise<{ spNode: Node, aniData: ShowAniData }> {
        let reelInfoAndGroup: SlotMachineIndexInfo = {
            reelIndex: aniData.reelIndex,
            iconIndex: aniData.iconIndex,
            iconID: aniData.iconID,
            groupID: groupId
        };
        let token: number = Date.now();
        let aniShowNode = FindNode.findChildByNameRecursive(this.node, 'SymbolAniDisplayNode');
        let node = await this.createSpineNodeUI(prefabKey, aniShowNode);
        const currentLanguageKey = Localization.instance.currentLangKey;
        const localizationSpine = FindComponent.findComponentInChildren(node, LocalizationSpine);
        if (localizationSpine) {
            await localizationSpine.loadAllSpine(currentLanguageKey);
        }
        node[DYN_NODE_PROPERTIES.PREFAB_ID] = prefabKey;
        node[DYN_NODE_PROPERTIES.GROUP_ID] = [groupId];
        node[DYN_NODE_PROPERTIES.TOKEN_ID] = token + "_" + GameUtils.getRangeRandom(0, 100);
        node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO] = reelInfoAndGroup;
        let aniInterfaceComponent: IAnimationControl = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
        aniInterfaceComponent.tokenID = node[DYN_NODE_PROPERTIES.TOKEN_ID];
        aniInterfaceComponent.groupID = node[DYN_NODE_PROPERTIES.GROUP_ID];
        this.aryRunningNode.push(node);//--強塞進去

        return { spNode: node, aniData: aniData };
    }

    private createSpineNodeUI(prefabKey: string, container: Node): Promise<Node> {
        return new Promise((resolve, reject) => {
            let spineNode = AnimationControllersPoolManager.getInstance().getPrefabNode(prefabKey);
            container.once(Node.EventType.CHILD_ADDED, () => {
                resolve(spineNode);
            });
            spineNode.getComponent(UIOpacity).opacity = 0;//--會先讀取多語系的spine圖片,所以先關閉opacity
            spineNode.active = true;
            container.addChild(spineNode);
        })
    }

    private safeResolve(): void {
        if (this._resolvePromise) {
            this._resolvePromise();
            this._resolvePromise = undefined;
        }
    }


    /**
     * 播放沒有得分的動畫(appear) 
     * @param lines 
     */
    public async playNoWinInThisRound(lines?: GroupAniData[][]): Promise<void> {
        return new Promise<void>(async (resolve, reject) => {
            this._resolvePromise = resolve;
            //const groupID = [0];
            //--現在不需要了,因為在finalRoll時已經將高賠率的spineNode塞進去gameIcon裡面了
            //this.playAnisByGroupWithTimeStepPromise(groupID, 800);
            //--沒有中線但是有wild/bonus的情況
            if (this._wildRPSSystem.isWorking || this._fgBonusSystem.isWorking) {
                this.stopAndRemoveAniWithoutWild();
                if (this._wildRPSSystem.wildState != RPSWildState.WILD_3) {
                    //this.playOtherWinShowAni();
                    await this.playWildAni();
                    if (this._wildRPSSystem.isWorking) {
                        if (this._wildRPSSystem.isLastWildRound) {
                            this._wildRPSSystem.hideCollectionLights();//--關閉燈號
                        }
                    }
                    this.safeResolve();
                } else if (this._fgBonusSystem.isWorking) {
                    await this.playBonusAni();
                    this.safeResolve();
                }
            } else {
                //--20250623-急停的話reelView他就不會驅動startShowReadyHand(slotMachineController.startShowReadyHand,就不會啟動相關流程與反黑)
                this._closeOrOpenAllGameIconBright(false);//--不反黑(處理有聽牌的情況+不急停)
                this.safeResolve();
            }
        })
    }

    /**
     *  當局分數到大獎時
        會先演得分框後直接跳出大獎
        不會跳得分數字
        演完大獎之後
        如果是FG或者NG有開自動旋轉 就會直接下一局 (依然不演得分數字)
        如果是NG沒開自動旋轉 玩家也沒動作 就會正常演逐線輪播+得分數字動畫
     */
    public override async playWinInThisRound(winScoreData: WinScoreData, lines?: GroupAniData[][]): Promise<void> {

        this._scoreData = winScoreData;
        return new Promise<void>(async (resolve, reject) => {
            this._resolvePromise = resolve;
            if (lines) this.winLinesGroupData = lines;
            const totalScore: number = (winScoreData.totalOdd * winScoreData.betValue).fixed();
            if (this._fgBonusSystem.isWorking) {
                this.playFGProcessAni(totalScore);
            } else {

                //--依照winLine的長度產生對應的aryGroupIDs
                AudioManager.instance.playSound(SoundList.IconWin, SOUND_TYPE.ONE_SHOT, AudioSourceList.BasicAS);
                const groupID = this.generateArray(this._winLinesGroupData.length);
                //---以下為測試資料
                //this.checkAndSetWildDataInScoreData();//--有wild的情況下會被推進去
                //---以上為測試資料
                //this._scoreData.totalOdd = 230;//--test
                this.processWildWithOutSameRange();

                if (this._scoreData.totalOdd >= SPECIAL_WIN_THRESHOLD) {
                    await this.playAniGroupsWithPromise(groupID);
                    await this.showBigWinAni(this._scoreData, totalScore);
                } else {
                    this.playAniGroupsWithPromise(groupID);
                    await this.showWinScoreAni(totalScore);
                }
                this.showScoreForBottomText(totalScore);
                //await GameUtils.Defer(650);
                //await GameUtils.DeferByTweenPromise(650 / 1000);//--原本單位是毫秒現在換算成秒
                const delay = GameUtils.DeferByTweenPromiseWithCancel(650 / 1000);
                this._delayTweenCancel = delay.cancel;
                await delay.promise; // 等待延遲完成
                this._delayTweenCancel = null; // 清掉
                this.stopAndHideConnectBoxAni();
                this._closeOrOpenAllGameIconBright(false);//--不反黑
                this.changeGroupAniInSameState(groupID, 'idle');//--將group的動畫狀態改成idle

                //--將其他的動畫系統開啟播放(非icon表演的動畫)
                if (this._wildRPSSystem.isWorking) {
                    //--刪掉其它的中線動畫
                    this._closeOrOpenAllGameIconBright(true);//--反黑
                    this._winScore.stopWinScoreAni();
                    if (this._wildRPSSystem.isLastWildRound) {
                        this.stopAndPauseAniWithoutWild();
                        await this.playWildAni();
                        //--進入輪播 +關閉燈號+背景壓暗取消20250731
                        this._closeOrOpenAllGameIconBright(false);//--反黑
                        this._wildRPSSystem.hideCollectionLights();//--關閉燈號
                        this.postWinCleanupAndPlaySequence({ skipPushWild: true, skipPlayOtherWin: true, skipCloseWildNode: true });
                        this.safeResolve();
                    } else {
                        this.stopAndRemoveAniWithoutWild();
                        await this.playWildAni();
                        this.safeResolve();
                    }

                } else {
                    this.safeResolve();
                    this.postWinCleanupAndPlaySequence();
                }
            }

        });

    }



    public sortAnimationLayer(): void {
        const level1Nodes: Node[] = []; // iconID = 2, 3, 4, 5 (最下層)
        const level2Nodes: Node[] = []; // iconID = 0, 1 (在 2-5 之上)
        const level3Nodes: Node[] = []; // iconID = 6, 7, 8 (_wildID，在 0-1 之上)
        const level4Nodes: Node[] = []; // iconID = 9 (_bonusID，在最上層)

        for (const target of this._aryRunningNode) {
            const iconID = target[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconID;
            if ([2, 3, 4, 5].includes(iconID)) {
                level1Nodes.push(target);
            } else if ([0, 1].includes(iconID)) {
                level2Nodes.push(target);
            } else if (this._wildID.includes(iconID)) {
                level3Nodes.push(target);
            } else if (this._bonusID.includes(iconID)) {
                level4Nodes.push(target);
            }
        }

        let currentIndex = 0;
        // 設定 level 1 (最下層)
        level1Nodes.forEach(node => {
            node.setSiblingIndex(currentIndex++);
        });

        // 設定 level 2
        level2Nodes.forEach(node => {
            node.setSiblingIndex(currentIndex++);
        });

        // 設定 level 3 (_wildID)
        level3Nodes.forEach(node => {
            node.setSiblingIndex(currentIndex++);
        });

        // 設定 level 4 (_bonusID，最上層)
        level4Nodes.forEach(node => {
            node.setSiblingIndex(node.parent.children.length - 1);
        });
    }


    /**
     * 自己挖得坑..在一開始時,算分工具是會給予wild的位置資料
     * 只是因為早期開發時,wild與表演層是在不同的層級當中也不會進入runningNode
     * 所以送進來的資料是挑掉wild的
     * 再送QA時要需要重新再把wild的資料放回runningNode裡面..所以變成自己要再檢查補資料回去
     * PS-下個專案不要再把wild與表演層分開了..
     */
    private checkAndSetWildDataInScoreData(): void {

        const additionalWildData: any[] = [];
        const originalWinLines = JSON.parse(JSON.stringify(this._winLinesGroupData));

        for (let i = 0; i < this._ary2dCards.length; i++) {
            for (let j = 0; j < this._ary2dCards[i].length; j++) {
                const iconID = this._ary2dCards[i][j];

                if (!WILD_LIST.includes(iconID)) continue;

                for (let k = 0; k < originalWinLines.length; k++) {
                    for (let l = 0; l < originalWinLines[k].length; l++) {
                        const winItem = originalWinLines[k][l];

                        // 對第2列(i==1) 做補 wild
                        if (i === 1 && winItem.reelIndex >= 0 && winItem.reelIndex <= 2) {
                            //---錯誤的判斷(inItem.iconIndex)-測試用的資料
                            //if (i === 1 && winItem.reelIndex >= 0 && winItem.iconIndex <= 2) {
                            additionalWildData.push({
                                reelIndex: i,
                                iconIndex: j,
                                iconID: iconID,
                                groupID: winItem.groupID,
                                odd: winItem.odd
                            });
                            break; // 避免重複 push 同一格 wild
                        }

                        // 對第5列(i==4) 做補 wild
                        if (i === 4 && winItem.reelIndex >= 3 && winItem.reelIndex <= 5) {
                            //---錯誤的判斷(inItem.iconIndex)-測試用的資料
                            //if (i === 4 && winItem.reelIndex >= 3 && winItem.iconIndex <= 5) {
                            additionalWildData.push({
                                reelIndex: i,
                                iconIndex: j,
                                iconID: iconID,
                                groupID: winItem.groupID,
                                odd: winItem.odd
                            });
                            break;
                        }
                    }
                }
            }
        }

        // 統一補上 wild 資料
        for (const wildItem of additionalWildData) {
            const group = this._winLinesGroupData[wildItem.groupID];
            if (group) {
                group.push(wildItem);
            }
        }
    }


    private isWildOutsideWinLineRange(): boolean {
        const wildPositions = this.getWildPositions();

        // 僅當 Wild 數量為 1 時才處理，其餘直接 return false
        if (wildPositions.length !== 1) return false;

        const wildPos = wildPositions[0];
        const isWildInFront = wildPos.reelIndex >= 0 && wildPos.reelIndex <= 2;
        const isWildInBack = wildPos.reelIndex >= 3 && wildPos.reelIndex <= 5;
        const originalWinLines = JSON.parse(JSON.stringify(this._winLinesGroupData));

        for (const group of originalWinLines) {
            for (const winItem of group) {
                const reelIndex = winItem.reelIndex;
                const isWinInFront = reelIndex >= 0 && reelIndex <= 2;
                const isWinInBack = reelIndex >= 3 && reelIndex <= 5;
                if ((isWildInFront && isWinInFront) || (isWildInBack && isWinInBack)) {
                    return false;
                }
            }
        }

        return true;
    }



    private playShowVerticalAni(): void {
        if (this._currentCampFg == 0) {
            this._fgAliShowVerticalAniNode?.playWinAni();
        } else if (this._currentCampFg == 1) {
            this._fgThievesShowVerticalAniNode?.playWinAni();
        }
    }

    private async showAndWaitForVerticalAni(totalScore: number): Promise<void> {
        if (this._currentCampFg == 0) {
            await Promise.all([
                this._fgAliShowVerticalAniNode?.playWinAni(),
                this.showWinScoreAni(totalScore)
            ]);
        } else if (this._currentCampFg == 1) {
            await Promise.all([
                this._fgThievesShowVerticalAniNode?.playWinAni(),
                this.showWinScoreAni(totalScore)
            ]);
        }
    }

    private showScoreForBottomText(totalScore: number): void {
        if (totalScore > 0) {
            const evtData = {
                eventType: GameViewEvents.SET_BOTTOM_TEXT,
                eventData: {
                    status: ShowBottomTextStatus.WIN,
                    value: totalScore
                }
            }
            NotifyCation.getInstance().emitSync(NotifySubject.GAME_VIEW_SUBJECT, evtData.eventType, evtData);
        }
    }

    private async playFGProcessAni(totalScore: number): Promise<void> {

        const groupID = this.generateArray(this._winLinesGroupData.length);
        this.changeGroupAniInSameState(groupID, 'idle');//--將group的動畫狀態改成idle(20250730)
        await this.playBonusAni();
        AudioManager.instance.playSound(SoundList.IconWin, SOUND_TYPE.ONE_SHOT, AudioSourceList.BasicAS);
        //this._scoreData.totalOdd = 60;//--test
        if (this._scoreData.totalOdd >= SPECIAL_WIN_THRESHOLD) {
            await this.playAniGroupsWithPromise(groupID);
            await this.showBigWinAni(this._scoreData, totalScore);
        } else {
            this.playAniGroupsWithPromise(groupID);
            await this.showAndWaitForVerticalAni(totalScore);
        }
        this.showScoreForBottomText(totalScore);
        this.safeResolve();

    }

    private showBigWinAni(winScoreData: WinScoreData, totalScore: number): Promise<void> {
        return new Promise<void>(async (resolve, reject) => {
            //--jp
            await this._JpShowController.showJPWin(winScoreData.totalOdd, winScoreData.betValue);
            resolve();
        })
    }

    /**
     * 1.顯示得分的金額(這邊只是betValue*baseOdds)
     * 
     * a-->如果小於特殊得分的賠率極限值:
     * 顯示->1.移動multiNum到定位
     *       2.顯示爆炸動畫
     *       2.multiNum賠率+最後的總額
     * 
     * b-->如果大於特殊得分的賠率極限值:
     * 顯示-->1.關閉顯示得分的金額框
     *        2.顯示爆炸動畫
     *       2.顯示特殊得分的動畫
     * 
     */
    protected async showWinScoreAni(totalScore: number): Promise<void> {
        await this._winScore.showFinalScoreInAndOut(totalScore);
    }


    //public stopMultiFrameAni():void
    //--這裡可以用來停止其他非icon表演的動畫系統
    public override stopOtherWinShowAni(): void {

    }

    //--這裡可以用來播放其他非icon表演的動畫系統
    //--做await async的處理
    //--20250731 --廢棄
    public override async playOtherWinShowAni(): Promise<void> {
        //--用來播放icon 9的動畫表演
        if (this._wildRPSSystem.isWorking) {
            await this.playWildAni();
        } else if (this._fgBonusSystem.isWorking) {
            await this.playBonusAni();
        }
    }


    //--應付一軸出現多個bonus的情況
    private setPlayGroupForReelIndex(group: Node[]): Map<number, Node[]> {
        const reelGroup = new Map<number, Node[]>();
        for (const node of group) {
            const reelIndex = node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex;
            if (!reelGroup.has(reelIndex)) {
                reelGroup.set(reelIndex, []);
            }
            reelGroup.get(reelIndex).push(node);
        }


        return reelGroup;
    }

    private async playBonusAni(): Promise<void> {

        const groups: Node[] = this.getAniNodesByGroupId(98);
        const reelGroupMap = this.setPlayGroupForReelIndex(groups);
        const sortedReelIndices = Array.from(reelGroupMap.keys()).sort((a, b) => a - b);
        const allGroupPromises: Promise<void>[] = [];

        for (let index = 0; index < sortedReelIndices.length; index++) {
            const reelIndex = sortedReelIndices[index];
            const nodeArray = reelGroupMap.get(reelIndex);

            for (let multiIndex = 0; multiIndex < nodeArray.length; multiIndex++) {
                const node = nodeArray[multiIndex];
                const ani: SpineController = AniSysTools.findAndGetIAniComponent(node) as SpineController;
                node.active = true;
                // 正確延遲時間 (秒 -> 毫秒)
                const delaySec = index * 0.2 + multiIndex * 0.8;//--PS 1.5為動畫spine+1字樣出現時間點
                //const promise = GameUtils.Defer(delaySec * 1000).then(() => this.playSingleBonusAni(node, ani));
                const promise = GameUtils.DeferByTweenPromise(delaySec).then(() => this.playSingleBonusAni(node, ani));
                allGroupPromises.push(promise);
            }
        }

        await Promise.all(allGroupPromises); // 等全部完成
    }

    private playSingleBonusAni(node: Node, ani: SpineController): Promise<void> {

        return new Promise<void>((resolve) => {

            let resolveFrame: () => void;
            let resolveAnim: () => void;
            let frameCallBack = (...args: any[]) => {
                AudioManager.instance.playSound(SoundList.MoneyCollect, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
                const symbolData = node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO];
                this._fgBonusSystem.playSingleBonusEffect(symbolData.reelIndex, symbolData.iconIndex).then(() => {
                    resolveFrame();
                });
            }

            let animationCallBack = async (...args: any[]) => {
                (<SkeletonExtension>args[0]).updateSlotTexture();
                resolveAnim();
            }

            const frameEventPromise = new Promise<void>((res) => {
                resolveFrame = res;
                node.setSiblingIndex(node.parent.children.length);
                ani.spineSequencePlayFrameEventCallBack = frameCallBack;
            });

            const animationCompletePromise = new Promise<void>((res) => {
                resolveAnim = res;
                ani.playSequenceWithCallBack(animationCallBack, 'trigger');
            });

            Promise.all([frameEventPromise, animationCompletePromise]).then(() => {
                ani.spineSequencePlayFrameEventCallBack = null; // 清除引用
                resolve();
            });
        });
    }

    private async playWildAni(): Promise<void> {

        if (!this._wildRPSSystem.isCampDecided) {
            this._wildRPSSystem.setOpenWildForBegin();
            await this._wildRPSSystem.changeWildOutFrame();//0 to 1
            await this._wildRPSSystem.checkRoundAndStartRollWild();
        }

        const strBattle: string = this._wildRPSSystem.getWildIconAniType();
        this._slotControllerWildDarkness?.();//--猜拳的底要比中線時的壓黑更黑
        await this._wildRPSSystem.guessRPS(strBattle);//--更新level和wild數據+猜拳飛行的動畫
        //this.safeResolve();
    }

    public async changeWildFrame(): Promise<void> {
        return new Promise<void>(async (resolve, reject) => {
            /*
            if (this._wildRPSSystem.wildState >= RPSWildState.WILD_1) {
                //---猜拳第二輪(不需要轉了..只有第一輪要在這邊轉)
                await this._wildRPSSystem.changeWildOutFrame({ round: this._wildRPSSystem.wildState, targetTokenIds: null });
                resolve();
            } else {
                resolve();
            }*/

            this._wildRPSSystem.checkWildStateToNextRound();
            //await this._wildRPSSystem.changeWildOutFrame({ round: this._wildRPSSystem.wildState, targetTokenIds: null });
            //--每局結束後
            await this._wildRPSSystem.changeWildOutFrame();//--wildState
            resolve();

        })

    }

    public async playSequenceAniByGroupWithPromise(groupId: number, sequenceId: string): Promise<void> {
        return new Promise<void>(async (resolve, reject) => {

            let promises: Promise<void>[] = [];
            for (let node of this._aryRunningNode) {
                if (node[DYN_NODE_PROPERTIES.GROUP_ID].indexOf(groupId) != -1) {
                    let aniExtensionComponent: SpineController = AniSysTools.findAndGetIAniComponent(node) as SpineController;
                    node.active = true;
                    promises.push(aniExtensionComponent.playSequenceInPromise(sequenceId));
                }
            }

            try {

                await Promise.all(promises);
                resolve();

            } catch (e) {
                reject(e);
            }

        });
    }


    //--有得分的時候會播放得分的動畫,但在同時,其他沒中的icon也會有自己的idle狀態動畫
    //--如果企劃要這麼78要求的話,這邊要再調整
    public playWinAndIdleInThisRound(winScoreData: WinScoreData, lines?: number[][]): void {

    }



    private async postWinCleanupAndPlaySequence(options?: { skipPushWild?: boolean, skipPlayOtherWin?: boolean, skipCloseWildNode?: boolean }): Promise<void> {

        if (this._hasPlayedPostWinSequence) return;
        this._hasPlayedPostWinSequence = true;
        if (!options?.skipPushWild) {
            this.checkAndSetWildDataInScoreData(); //--有wild的情況下會被推進去
        }
        //--接上停止wild的動畫狀態
        if (!options?.skipCloseWildNode) {
            this._wildRPSSystem.closeWildAniNodeWithoutDoubleWild();
        }
        if (!options?.skipPlayOtherWin) {
            this.playOtherWinShowAni();//--202507315這段方法在這裡是沒有意義的
        }

        if (!GenericUIManager.instance.isAutoMode) {
            //await GameUtils.Defer(400);
            //await GameUtils.DeferByTweenPromise(400 / 1000);//--原本單位是毫秒現在換算成秒
            const delay = GameUtils.DeferByTweenPromiseWithCancel(400 / 1000);//--終止時阻斷延遲promise的resolve
            this._delayTweenCancel = delay.cancel;
            await delay.promise; // 等待延遲完成
            this._delayTweenCancel = null; // 清掉
            this._closeOrOpenAllGameIconBright(true);//--反黑
            this.playAniGroupInSequence();
        }
    }

    protected override async playAniGroupInSequence(): Promise<void> {
        /*
        if (this._winLinesGroupData.length > 1) {
            this.playMultipleSequence();//--多個
        } else {
            //this.playAnisBySequence(0);//--單個
            this.playMultipleSequence();
        }*/


        this.playMultipleSequence();
    }

    private async playMultipleSequence(): Promise<void> {
        let playIndex: number = 0;
        this._abortPlaySequence = false;
        //--這個改法很不好..但殺傷力已經是最小的改法了0731
        let hotfix = false;
        if (this._wildRPSSystem.isWorking) {
            hotfix = this._wildRPSSystem.isLastWildRound;
        }
        //--這個改法很不好..但殺傷力已經是最小的改法了0731
        while (this._winLinesGroupData.length > 0) {
            const lineScore = (this._winLinesGroupData[playIndex][0].odd * this._scoreData.betValue).fixed();
            //--這邊要改成顯示的connectBox用loop
            try {

                if (hotfix) {

                    this.removeAndCloseNodeSequenceBackToGameIconWithoutWild();
                    this.openNodeByIconsWithReelIndexInArrayWithoutWild(this._winLinesGroupData[playIndex]);
                    await Promise.all([
                        //--排除wild本身不要播放
                        this.withTimeout(this.playAnisByGroupWithExclusion(playIndex, [99]), 6, playIndex, 'playAniWithOutWild'),
                        this.withTimeout(this.showWinScoreAni(lineScore), 6, '', 'score')
                    ]);

                } else {

                    this.removeAndCloseNodeSequenceBackToGameIcon();
                    this.openNodeByIconsWithReelIndexInArray(this._winLinesGroupData[playIndex]);
                    await Promise.all([
                        this.withTimeout(this.playAnisByGroupWithPromise(playIndex), 6, playIndex, 'playAni'),
                        this.withTimeout(this.showWinScoreAni(lineScore), 6, '', 'score')
                    ]);
                }


            } catch (e) {
                //--動畫被中斷掉的情況promise會被reject掉,要回過頭來處理還在播放的動畫,要強制停止
                console.log('<cleanAll_playMultipleSequence_ERROR', (e as any).label, this._abortPlaySequence);
                console.warn(`[playMultipleSequence] 輪播發生錯誤，跳過此條播放:`, e);
                //playIndex++;
                //continue; 
            }
            if (this._abortPlaySequence) break;//--外部中斷時,直接切斷流程
            this.stopAndHideConnectBoxAni();
            playIndex++;
            if (playIndex >= this._winLinesGroupData.length) {
                playIndex = 0;
                //await GameUtils.Defer(400);
                await GameUtils.DeferByTweenPromise(400 / 1000);//--原本單位是毫秒現在換算成秒
            } else {
                //await GameUtils.Defer(200);
                await GameUtils.DeferByTweenPromise(200 / 1000);//--原本單位是毫秒現在換算成秒
            }
            this._abortPlaySequence = false;
        }
    }

    /**
     * 20250723
     * 雙保險,在promise死掉後還能依照設定時間自己resolve或reject
     * (不過應該不太可能啦..因為在每一輪的清空都會呼叫stopPromiseAni)
     */
    private withTimeout<T, M>(promise: Promise<T>, seconds: number, meta: M, label: string = 'timeout'): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            let finished = false;
            //--動畫撥放逾時了
            const onTimeout = () => {
                if (finished) return;
                finished = true;
                const error = new Error(`[${label}] Timeout after ${seconds}s`);
                (error as any).meta = meta;
                (error as any).label = label;
                reject(error);
            };

            this.scheduleOnce(onTimeout, seconds);
            promise.then((result) => {
                if (finished) return;
                finished = true;
                this.unschedule(onTimeout);
                resolve(result);
            }).catch((err) => {
                if (finished) return;
                finished = true;
                this.unschedule(onTimeout);
                (err as any).meta = meta;
                (err as any).label = label;
                reject(err);
            });
        });
    }


    private async singlePlayWinScoreInCycle(singleScoreCycle: number): Promise<void> {

        while (this._singleScoreCycle) {
            await this._winScore.showFinalScoreIn(singleScoreCycle);//--單獨顯示每條百搭成線的得分
            //await GameUtils.Defer(400);//--等待0.4秒
            await GameUtils.DeferByTweenPromise(400 / 1000);//--原本單位是毫秒現在換算成秒
        }
    }

    private compareTargetName(list: AnimationPlayStateList): AniCtrlPropDef {
        let aniDataTarget: AniCtrlPropDef;//--resetData<AnimationPlayStateList會保留>
        for (let aniData of list.clipsInfo) {
            for (const key in PFB_ANI_LIST) {
                const prefabIndexKey = PFB_ANI_LIST[key];
                if (aniData.targetName.includes(prefabIndexKey)) {
                    return aniDataTarget = aniData;
                }
            }
            if (aniData.targetName.includes('connect')) {
                return aniDataTarget = aniData;
            }
        }
    }

    //---取消該功能
    private setSpineAniNodeLoopByGroup(groupId: number): IAniWithAniCtrl[] {
        const returnData: IAniWithAniCtrl[] = [];
        const nodes: Node[] = this.getAniNodesByGroupId(groupId);

        for (let node of nodes) {
            let iAniData: IAniWithAniCtrl = new IAniWithAniCtrl();
            let aniExtensionComponent = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
            //console.log('setSpineAniNodeLoopByGroup', node[DYN_NODE_PROPERTIES.PREFAB_ID]);
            if (node[DYN_NODE_PROPERTIES.PREFAB_ID] == 'ConnectBox') {
                iAniData.aniCtrl = (<SpineController>aniExtensionComponent).getCustomizeSpineTrackEntry('connect');

            } else if (node[DYN_NODE_PROPERTIES.PREFAB_ID] == 'Icon_0678') {
                //--wild--
                //(<RPSWildAnimationController>aniExtensionComponent).getConnectAniData('connect');
                //(<RPSWildAnimationController>aniExtensionComponent).animationPlayStateList;//-要去比對有沒有含有'_clone'
                //--直接寫在RPSWildAnimationController裡面比對查找
                iAniData.aniCtrl = (<RPSWildAnimationController>aniExtensionComponent).createCloneAniConnectData();
                iAniData.IAni = aniExtensionComponent;

            } else {

                let aniCtrlPropDef: AniCtrlPropDef;
                if (node[DYN_NODE_PROPERTIES.PREFAB_ID] == 'Icon_04_07') {
                    aniCtrlPropDef = (<SpineController>aniExtensionComponent).defaultTarget;
                } else {
                    let list: AnimationPlayStateList = (<SpineController>aniExtensionComponent).animationPlayStateList;
                    aniCtrlPropDef = this.compareTargetName(list);
                }

                //--每次都複製一個
                const cloneAniCtrlPropDef = GameUtils.deepCloneForObject(aniCtrlPropDef);
                cloneAniCtrlPropDef.loop = true;
                iAniData.aniCtrl = cloneAniCtrlPropDef;
                //--如果該狀態已經是loop=true的話就不需要再複製了
                /*
                if (!aniCtrlPropDef.aniData.loop) {
                    //--deepClone一個原本沒有loop的連線動畫出來,然後改變loop的狀態塞回去撥放清單
                    let cloneAniCtrlPropDef: AniCtrlPropDef = GameUtils.deepCloneForObject(aniCtrlPropDef.aniData);
                    cloneAniCtrlPropDef.loop = true;
                    cloneAniCtrlPropDef.targetName = aniCtrlPropDef.aniData.targetName + '_clone';
                    aniExtensionComponent.setAniDataInfo(cloneAniCtrlPropDef);
                    iAniData.aniCtrl = cloneAniCtrlPropDef;
                } else {
                    iAniData.aniCtrl = aniCtrlPropDef.aniData;
                }*/
            }

            //console.log('setSpineAniNodeLoopByGroup_iAniData', iAniData);
            iAniData.IAni = aniExtensionComponent;
            node.active = true;
            returnData.push(iAniData);
        }
        return returnData;
    }


    public addGroupByReelIndexAndIconIndexWithIconID(data: { reelIndex: number, iconIndex: number, iconID: number, groupId: number }): void {
        let node: Node = this.getAniNodeByReelIndexAndIconIndexWithIconID(data.reelIndex, data.iconIndex, data.iconID);
        if (node) {
            node[DYN_NODE_PROPERTIES.GROUP_ID].push(data.groupId);
        }
    }

    public getAniNodeByReelIndexAndIconIndexWithIconID(reelIndex: number, iconIndex: number, iconID: number): Node {
        for (let node of this._aryRunningNode) {
            if (node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex ==
                reelIndex && node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconIndex ==
                iconIndex && node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconID == iconID) {
                return node;
            }
        }
        return null;
    }

    /**
    * 特殊的檢查條件(同軸同格不重複相同元素)
    * @param args 
    * @returns 
    */
    protected override checkSpRuleForExist = (...args): { flag: boolean, tokenId: string } => {

        const data: playIAniData = args[0];
        const iconIndex = data.SymbolIconInfoData.iconIndex;
        const iconID = data.SymbolIconInfoData.iconID;
        const reelIndex = data.SymbolIconInfoData.reelIndex;
        let returnData = { flag: false, tokenId: '' };

        for (let aniNode of this._aryRunningNode) {
            //--檢查每一軸上的相同位置的icon是否相同
            if (aniNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex === reelIndex) {
                if (aniNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconIndex === iconIndex && aniNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconID === iconID) {
                    returnData = { flag: true, tokenId: aniNode[DYN_NODE_PROPERTIES.TOKEN_ID] };
                    return returnData;
                }
            }
        }

        return returnData;
    }

    public getWildConnectBoxNode(): Node[] {
        let returnNode: Node[] = [];
        for (let item of this._aryRunningNode) {
            if (item.name == 'ConnectBox' && item[DYN_NODE_PROPERTIES.GROUP_ID].includes(99)) {
                returnNode.push(item);
            }
        }
        return returnNode;
    }

    public override changeGroupAniInSameState(groupIds: number[], key: string): void {

        for (let node of this._aryRunningNode) {
            const nodeGroupIds = node[DYN_NODE_PROPERTIES.GROUP_ID] as number[];
            if (nodeGroupIds.some(id => groupIds.includes(id)) && node[DYN_NODE_PROPERTIES.PREFAB_ID] != 'ConnectBox') {
                //--低賠率是靜態圖且04-07他的動畫名稱不叫 'idle'(他是'icon_XX_idle')
                if (!HIGH_ODDS_SYMBOL_LIST.includes(node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconID)) {
                    this._setSingleGameIconBrightness?.(node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex, node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconIndex, false);
                } else {
                    const aniExtensionComponent: IAnimationControl = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                    node.active = true;
                    aniExtensionComponent.playAni(key);
                }

            }
        }

    }

    //確認是否存在running裡面 
    private checkIsLowOddsSymbol(reelIndex: number, iconIndex: number): boolean {
        for (let node of this._aryRunningNode) {
            const rIndex = node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex;
            const iIndex = node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconIndex;
            if (rIndex == reelIndex && iIndex == iconIndex) {
                const iconId = this._ary2dCards[rIndex][iIndex];
                if (WILD_LIST.includes(iconId) || HIGH_ODDS_SYMBOL_LIST.includes(iconId)) {
                    //--如果是wild或者高賠率的icon就不會是低賠率的
                    return false;
                }
                return true;
            }
        }
        return true;
    }

    private getWildPositions(): { reelIndex: number; iconIndex: number }[] {

        const wildPositions: { reelIndex: number; iconIndex: number }[] = [];

        for (let i = 0; i < this._ary2dCards.length; i++) {
            for (let j = 0; j < this._ary2dCards[i].length; j++) {
                const iconID = this._ary2dCards[i][j];
                if (WILD_LIST.includes(iconID)) {
                    wildPositions.push({ reelIndex: i, iconIndex: j });
                }
            }
        }

        return wildPositions;
    }



    private checkWild(reelIndex: number, iconIndex: number): boolean {
        const iconId = this._ary2dCards[reelIndex][iconIndex];
        if (WILD_LIST.includes(iconId)) {
            return true;
        }
        return false;
    }

    private checkWildInWinLinesGroupData(): boolean {
        for (let i: number = 0; i < this._winLinesGroupData.length; i++) {
            for (let j: number = 0; j < this._winLinesGroupData[i].length; j++) {
                if (WILD_LIST.includes(this._winLinesGroupData[i][j].iconID)) {
                    return true;
                }
            }
        }
        return false;
    }

    private checkWildInRunningNode(): boolean {
        for (let i: number = 0; i < this._aryRunningNode.length; i++) {
            if (WILD_LIST.includes(this._aryRunningNode[i][DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconID)) {
                return true;
            }
        }
        return false;
    }

    //--這邊限於猜拳第一把(尚未開始猜拳的時候,第一輪的中線檢查)
    private processWildWithOutSameRange(): void {

        const isWildOutsideRange = this.isWildOutsideWinLineRange(); //---wild只有一個且,在中線的範位在不同區間
        const wildInRunningNode = this.checkWildInRunningNode(); //--- 這是原本給要輪播的使用

        //--有wild的情況下,但中線的不在wild區間,秀全部的動畫要把wild關掉
        if (isWildOutsideRange && wildInRunningNode) {
            if (!this._wildRPSSystem.isWorking) {
                //--找出wild的動畫節點,然後關掉
                this._wildRPSSystem.closeWildAniNodeWithoutDoubleWild();
            }
        }
    }

    //--沒有FG沒有猜拳進來的(其中一盤會有wild的情況)
    private openNodeByIconsWithReelIndexInArrayWithoutWild(iconIndexs: GroupAniData[]): void {

        //--幹 wild的東西不會在GroupAniData裡面,所以這個判斷根本進不去else
        for (let i: number = 0; i < iconIndexs.length; i++) {
            //--低賠率
            let nodeAni: Node = this.getAniNodeByReelIndexAndIconIndex(iconIndexs[i].reelIndex, iconIndexs[i].iconIndex);
            if (nodeAni) {

                nodeAni.active = true;
                if (nodeAni[DYN_NODE_PROPERTIES.PREFAB_ID] == 'ConnectBox' &&
                    !this.checkIsLowOddsSymbol(iconIndexs[i].reelIndex, iconIndexs[i].iconIndex)
                ) {
                    //--高賠率被拔去gameIcon裡面的
                    const nodeAndWPos: { target: Node | null, worldPos: Vec3 } = this._getAndRemoveSymbolAniNodeWithWorldPos(iconIndexs[i].reelIndex, iconIndexs[i].iconIndex);
                    const localNodeContainer = this._aniNodeStageContainerMap[CONTAINER_ANI_SYMBOL];
                    nodeAni = nodeAndWPos.target;
                    if (nodeAni && localNodeContainer) {
                        localNodeContainer.addChild(nodeAni);
                        this._aryRunningNode.push(nodeAni);
                        let localPos: Vec3 = v3(0, 0, 0);
                        if (nodeAndWPos.worldPos) {
                            localPos = localNodeContainer.getComponent(UITransform).convertToNodeSpaceAR(nodeAndWPos.worldPos);
                        }
                        nodeAni.active = true;
                        nodeAni.setPosition(localPos);
                        const spAniNode = FindComponent.findComponentInChildren(nodeAni, SpineController).spine;
                        if (spAniNode) {
                            spAniNode.color = color(255, 255, 255, spAniNode.color.a);
                        }

                    }
                }

            }
        }

    }

    //--沒有FG沒有猜拳進來的(其中一盤會有wild的情況)
    protected override openNodeByIconsWithReelIndexInArray(iconIndexs: GroupAniData[]): void {

        //--幹 wild的東西不會在GroupAniData裡面,所以這個判斷根本進不去else
        for (let i: number = 0; i < iconIndexs.length; i++) {
            //--低賠率
            let nodeAni: Node = this.getAniNodeByReelIndexAndIconIndex(iconIndexs[i].reelIndex, iconIndexs[i].iconIndex);
            if (nodeAni) {
                if (this.checkWild(iconIndexs[i].reelIndex, iconIndexs[i].iconIndex)) {
                    this._wildRPSSystem.openWildAniNodeWithoutDoubleWild();
                    this._wildRPSSystem.playWildConnectAniWithoutDoubleWild();
                } else {
                    nodeAni.active = true;
                    if (nodeAni[DYN_NODE_PROPERTIES.PREFAB_ID] == 'ConnectBox' &&
                        !this.checkIsLowOddsSymbol(iconIndexs[i].reelIndex, iconIndexs[i].iconIndex)
                    ) {
                        //--高賠率被拔去gameIcon裡面的
                        const nodeAndWPos: { target: Node | null, worldPos: Vec3 } = this._getAndRemoveSymbolAniNodeWithWorldPos(iconIndexs[i].reelIndex, iconIndexs[i].iconIndex);
                        const localNodeContainer = this._aniNodeStageContainerMap[CONTAINER_ANI_SYMBOL];
                        nodeAni = nodeAndWPos.target;
                        if (nodeAni && localNodeContainer) {
                            localNodeContainer.addChild(nodeAni);
                            this._aryRunningNode.push(nodeAni);
                            let localPos: Vec3 = v3(0, 0, 0);
                            if (nodeAndWPos.worldPos) {
                                localPos = localNodeContainer.getComponent(UITransform).convertToNodeSpaceAR(nodeAndWPos.worldPos);
                            }
                            nodeAni.active = true;
                            nodeAni.setPosition(localPos);
                            const spAniNode = FindComponent.findComponentInChildren(nodeAni, SpineController).spine;
                            if (spAniNode) {
                                spAniNode.color = color(255, 255, 255, spAniNode.color.a);
                            }

                        }
                    }
                }

            }
        }

    }

    private stopAndHideConnectBoxAni(): void {
        for (let i: number = 0; i < this._aryRunningNode.length; i++) {
            let node: Node = this._aryRunningNode[i];
            if (node.name == 'ConnectBox') {
                let aniExtensionComponent: IAnimationControl = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                //aniExtensionComponent.stopAni();--並無終止promise的功能
                aniExtensionComponent.stopPromiseAni();//--新功能(不等待回收,直接停止與拔除promise和終止resolve)
                node.active = false;
            }
        }
    }

    //--78新增 20250731(打破輪播的條件wild沒有勝負最後一把的狀態)
    private removeAndCloseNodeSequenceBackToGameIconWithoutWild(): void {
        let flag: boolean = false;
        for (let i: number = 0; i < this._aryRunningNode.length; i++) {
            flag = false;
            let node: Node = this._aryRunningNode[i];
            let aniExtensionComponent: IAnimationControl = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
            //--wild的group=99 bonus的group=98
            if (!node[DYN_NODE_PROPERTIES.GROUP_ID].includes(98) && !node[DYN_NODE_PROPERTIES.GROUP_ID].includes(99)) {

                if (HIGH_ODDS_SYMBOL_LIST.includes(node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconID)) {
                    //--高賠率的spineNode要塞回去gameIcon裡面

                    node.parent?.removeChild(node);
                    this._aryRunningNode.splice(i, 1);
                    aniExtensionComponent?.stopAni();
                    this._slotControllerReAddToGameIcon?.(node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex, node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconIndex, node);
                    //--反黑
                    this._setSingleGameIconBrightness?.(node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex, node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconIndex, true);
                    //setBrightness
                    flag = true;

                } else {
                    if (node.name == 'ConnectBox') {
                        aniExtensionComponent?.stopAni();
                        node.active = false;
                    } else {
                        aniExtensionComponent?.stopAni();
                        node.active = false;
                    }
                }

            } else {

                if (node.name == 'ConnectBox') {
                    aniExtensionComponent?.stopAni();
                    node.active = false;
                }
            }
            if (flag) {
                i = i - 1;
            }
        }
    }


    //---這邊是沒有猜拳會進來的地方(輪播wild要留著)
    private removeAndCloseNodeSequenceBackToGameIcon(): void {

        let flag: boolean = false;
        for (let i: number = 0; i < this._aryRunningNode.length; i++) {
            flag = false;
            let node: Node = this._aryRunningNode[i];
            let aniExtensionComponent: IAnimationControl = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
            //--wild的group=99 bonus的group=98
            if (!node[DYN_NODE_PROPERTIES.GROUP_ID].includes(98)) {

                if (HIGH_ODDS_SYMBOL_LIST.includes(node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconID) ||
                    WILD_LIST.includes(node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconID)) {
                    //--高賠率的spineNode要塞回去gameIcon裡面
                    if (WILD_LIST.includes(node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconID)) {
                        this._wildRPSSystem.closeWildAniNodeWithoutDoubleWild();
                    } else {

                        node.parent?.removeChild(node);
                        this._aryRunningNode.splice(i, 1);
                        aniExtensionComponent?.stopAni();
                        this._slotControllerReAddToGameIcon?.(node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex, node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconIndex, node);
                        //--反黑
                        this._setSingleGameIconBrightness?.(node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex, node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconIndex, true);
                        //setBrightness
                        flag = true;
                    }



                } else {
                    if (node.name == 'ConnectBox') {
                        aniExtensionComponent?.stopAni();
                        node.active = false;
                    } else {
                        aniExtensionComponent?.stopAni();
                        node.active = false;
                    }
                }

            } else {

                if (node.name == 'ConnectBox') {
                    aniExtensionComponent?.stopAni();
                    node.active = false;
                }
            }
            if (flag) {
                i = i - 1;
            }
        }
    }

    //--wild會進來 20250731新增
    private stopAndPauseAniWithoutWild(): void {

        for (let i: number = 0; i < this._aryRunningNode.length; i++) {

            let node: Node = this._aryRunningNode[i];
            let aniExtensionComponent: IAnimationControl;
            //--99=wild, 98=bonus
            if (!node[DYN_NODE_PROPERTIES.GROUP_ID].includes(99) && !node[DYN_NODE_PROPERTIES.GROUP_ID].includes(98)) {

                aniExtensionComponent = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                if (aniExtensionComponent) {
                    aniExtensionComponent.stopPromiseAni();
                }
                node.active = false;

            } else {

                if (node.name == 'ConnectBox') {
                    aniExtensionComponent = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                    aniExtensionComponent.stopPromiseAni();
                    node.active = false;
                }
            }
        }
    }

    //--wild會進來
    private stopAndRemoveAniWithoutWild(usePool: boolean = true): void {


        for (let i: number = 0; i < this._aryRunningNode.length; i++) {

            let node: Node = this._aryRunningNode[i];
            let aniExtensionComponent: IAnimationControl;
            //--99=wild, 98=bonus
            if (!node[DYN_NODE_PROPERTIES.GROUP_ID].includes(99) && !node[DYN_NODE_PROPERTIES.GROUP_ID].includes(98)) {

                aniExtensionComponent = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                node.parent?.removeChild(node);
                this._aryRunningNode.splice(i, 1);
                if (aniExtensionComponent) {
                    aniExtensionComponent.stopAni();
                }

                if (HIGH_ODDS_SYMBOL_LIST.includes(node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconID)) {
                    //--高賠率的spineNode要塞回去gameIcon裡面
                    this._slotControllerReAddToGameIcon?.(node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex, node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconIndex, node);
                    //--反黑
                    this._setSingleGameIconBrightness?.(node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex, node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconIndex, true);
                } else {
                    if (usePool) {
                        AnimationControllersPoolManager.getInstance().pushInstancePrefabNodeToPool(node[DYN_NODE_PROPERTIES.PREFAB_ID], node);
                    }
                }
                i = i - 1;
            } else {

                if (node.name == 'ConnectBox') {
                    aniExtensionComponent = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
                    aniExtensionComponent.stopAni();
                    node.active = false;
                }
            }
        }

    }

    /**
     * 20250610
     * 這邊是每輪結束後(非wild模式)近來刪除物件用的
     * 它會讓中線的spineNode回到gameIcon裡面,並且重置狀態到idle
     * (因為有中線的spineNode在舊有的呼叫stopAndRemoveAllAnis會直接刪除
     * 並且推到pool裡面,這樣會導致中線的spineNode被刪除,畫面只剩下靜態的symbol圖片
     * )
     */
    private stopAndRemoveAllAnisWithOutHighOdds(): void {

        for (let i = this._aryRunningNode.length - 1; i >= 0; i--) {
            const node = this._aryRunningNode[i];
            const aniExtensionComponent = AniSysTools.findAndGetIAniComponent(node) as IAnimationControl;
            const prefabId = node[DYN_NODE_PROPERTIES.PREFAB_ID];
            const groupId = node[DYN_NODE_PROPERTIES.GROUP_ID];
            const symbolInfo = node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO];
            const iconID = symbolInfo.iconID;

            const isBonusGroup = groupId.includes(98);
            const isHighOdds = HIGH_ODDS_SYMBOL_LIST.includes(iconID);
            const isWild = WILD_LIST.includes(iconID);

            // Wild but not bonus → 執行 wild reset 並回收
            if (!isBonusGroup && isWild) {
                this._wildRPSSystem.resetWild();
                this.recycleNode(node, aniExtensionComponent, prefabId);
                continue;
            }

            // High odds (not bonus or wild) → 回傳至 gameIcon
            if (!isBonusGroup && isHighOdds) {
                node.parent?.removeChild(node);
                aniExtensionComponent?.stopAni();
                this._slotControllerReAddToGameIcon?.(symbolInfo.reelIndex, symbolInfo.iconIndex, node);
                this._aryRunningNode.splice(i, 1);
                continue;
            }
            this.recycleNode(node, aniExtensionComponent, prefabId);
        }
    }

    private recycleNode(node: Node, aniComponent: IAnimationControl | null, prefabId: string): void {
        aniComponent?.stopAni();
        node.parent?.removeChild(node);
        this.removeSingleNodeData(node);
        AnimationControllersPoolManager.getInstance().pushInstancePrefabNodeToPool(prefabId, node);
        const index = this._aryRunningNode.indexOf(node);
        if (index !== -1) {
            this._aryRunningNode.splice(index, 1);
            console.log();
        }
    }



    private getAniNodeByReelIndexAndIconIndex(reelIndex: number, iconIndex: number): Node {
        for (let node of this._aryRunningNode) {
            if (node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex == reelIndex && node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconIndex == iconIndex) {
                return node;
            }
        }
        return null;
    }

}