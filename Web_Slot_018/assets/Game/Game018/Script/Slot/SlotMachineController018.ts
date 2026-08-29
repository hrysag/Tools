import { _decorator, Component, Node, Vec3, randomRangeInt, sp } from 'cc';
import { IconSlotMachine } from 'db://assets/Scripts/ReelTemplate/ReelTemplate_2/Scripts/IconSlotMachine';
import { ReelView018 } from './ReelView018';
import { GameState } from '../DefinitionGameData/GameStateConfigDef';
import { SlotMachineData018 } from './SlotMachineData018';
import { DefinitionGameConfigData } from '../DefinitionGameData/DefinitionGameConfigData';
import { Orientation } from 'db://assets/Scripts/Utils/Config';
import { FindComponent } from '../MyUtils/FindComponent';
import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
import { SoundList, AudioSourceList } from '../DefinitionGameData/SoundList';
import { SpineController } from '../MyUtils/AnimationSystem/Components/SpineController';

const { ccclass, property } = _decorator;
const {
    FORECAST_REEL,
    REEL_AMOUNT
} = DefinitionGameConfigData;

@ccclass('SlotMachineController018')
export class SlotMachineController018 extends IconSlotMachine {

    //--聽牌效果的滾輪
    @property({ type: Node, visible: true, displayName: 'ReadyBox' })
    private _forecastEffectNode: Node = null;
    private _forecastSpineController: SpineController = null;

    private _rollerStateForGame: GameState;

    //private _reelVewGame018: ReelView018 = null;
    /**
     * 滾輪系統的管理者.管理reelView,負責傳輸數據和對外接口
     * 所有的(我指的是全部的輪軸)滾輪事件會在這裡被管理,以下為4種狀態
     * 1.showReadyHandCallback
     * 2.hideReadyHandCallback
     * 3.oneReelRollEndCallBack
     * 4.allReelRollEndCallBack
     * 個別的輪軸事件會在reelView裡面自己去override相關的function
     * (iconReelView.receiveReelEvent)
     * reelIDs 要表演的滾輪的順序，沒有傳入預設全部滾輪表演 ex:[2, 1, 0]代表從2開始停，0最後停
     * 你可以在這邊自己改變滾輪的順序
     * 要秀幾軸來自reelNodeList的長度(reelView面板塞的)
     * this._reels = ComponentExt.getComps<IconReel>(this._reelNodeList, 'IconReel');
     */

    //--for test--
    public allReelRollEndCallBackToView: () => void = null;

    constructor() {
        super();
        this._rollerStateForGame = GameState.NORMAL;
    }

    public override init(): void {
        super.init();
        //--聽牌的開啟&關閉
        this.hideReadyHandCallback = this.stopShowReadyHand;
        this.showReadyHandCallback = this.startShowReadyHand;
        this._forecastSpineController = FindComponent.findComponentInChildren(this._forecastEffectNode, SpineController);
        if (this._forecastSpineController) {
            this._forecastSpineController.init();
            this._forecastEffectNode.active = false;
        }
    }

    public setProcessAniSymbolData(value: (symbolId: number, reelIndex: number, iconIndex: number, camp: number) => Promise<Node | null>): void {
        (<ReelView018>this._reelView).processAniSymbolData = value;
    }

    //--20250611 FG結束後待機表演的高賠率spineAni
    public setGetHighOddSpineAniAfterFGEnd(value: (prefabId: string, symbolId: number, reelIndex: number, iconIndex: number) => Promise<Node | null>): void {
        (<ReelView018>this._reelView).processHighOddSpineAniAfterFGEnd = value;
    }


    /**
     * 
     * @param reel 每一個reel(0-X)從左邊開始
     * @param iconId 每一個reel裡面的icon(0-X)從上到下-ps-公版會產生多兩個(一上一下,所以自己的index不能從0開始,和最後一個)
     * @returns 
     */
    public getSymbolWorldPosition(reel: number, iconId: number): Vec3 {

        return (<ReelView018>this._reelView).getSymbolWorldPosition(reel, iconId);
    }


    /**
     * 關閉/開啟指定的全部(整個盤面)的亮度(true=變暗/false=正常) 
     * @param brightnessFlag 
     */
    public closeOrOpenAllGameIconBright = (brightnessFlag: boolean): void => {

        (<ReelView018>this._reelView).closeOrOpenAllGameIconBright(brightnessFlag);
    }

    /**
     * 20240429
     * 告知gameIcon現在是否啟動wild模式(背景的壓黑會有兩種不同的狀態)  
     */
    public setWildModeForGameIconDarkness(): void {
        (<ReelView018>this._reelView).setWildModeForGameIconDarkness();
    }


    /**
     * 關閉/開啟指定的指定軸的亮度(true=變暗/false=正常)
     * @param reelIndex 
     * @param brightnessFlag 
     */
    public openOrCloseWholeReelIconBright(reelIndex: number, brightnessFlag: boolean): void {

        (<ReelView018>this._reelView).openOrCloseWholeReelIconBright(reelIndex, brightnessFlag);
    }

    /**
     * 關閉/開啟指定的指定軸的指定icon的亮度(true=變暗/false=正常)
     * @param value 
     */
    public openOrCloseSingleGameIconBright(value: { reelIndex: number, iconIndex: number[], brightnessFlag: boolean }[]): void {

        (<ReelView018>this._reelView).openOrCloseSingleGameIconBright(value);

    }

    /**
     * 
     * @param reelIndex 
     * @param iconIndex 
     * @param colorAlpha 0-255 不指定為預設恢復原本的spriteFrame color
     */
    public setIconAlpha(reelIndex: number, iconIndex: number, colorAlpha?: number): void {
        (<ReelView018>this._reelView).setIconAlpha(reelIndex, iconIndex, colorAlpha);
    }

    /**
     * 主要用於FG切換時,寫入陣營資料
     * 當遊戲從NG->FG時,會將全局陣營資料寫入
     * 當遊戲從FG->NG時,會將全局陣營資料reset=-1
     * @param value GameState
     * @param campIndex FG的陣營資料
     * @returns 
     */
    public setGameState(value: GameState, campIndex?: number): boolean {

        if (value == this._rollerStateForGame) return false;
        if (value === GameState.NORMAL || value === GameState.RE_SPINE) {
            (<ReelView018>this._reelView).updateIconCamp(-1);
        } else if (value === GameState.FREE_GAME && campIndex !== undefined) {
            (<ReelView018>this._reelView).updateIconCamp(campIndex);
        }

        (<ReelView018>this._reelView).changeGameMode(value, campIndex);
        this._rollerStateForGame = value;
        return true;
    }

    public changeRotationResolution(value: Orientation): void {
        (<ReelView018>this._reelView)?.changeRotationResolution(value);
    }

    //--FG2模式下盤面的計算
    public calulateFGSymbolList(multiplier: number): void {
        (<SlotMachineData018>this._slotMachineData).calulateFGSymbolList(multiplier);
    }
    //----重置FG2
    public reSetCurrentAllSymbolList_FG(): void {
        (<SlotMachineData018>this._slotMachineData).reSetCurrentAllSymbolList_FG();
    }

    //--取得之前先塞進gameIcon裡面的spineNode,並且從顯示節點拔掉
    public getAndRemoveSymbolAniNodeInReel(reelIndex: number, iconIndex: number): Node | null {
        return (<ReelView018>this._reelView)?.getAndRemoveSymbolAniNodeInReel(reelIndex, iconIndex);
    }

    //--關閉前先塞進gameIcon裡面的spineNode(沒有得分要反黑了)
    public closeSymbolAniNode(): void {
        (<ReelView018>this._reelView)?.closeAllSymbolAniNode();
    }

    public playAllSymbolAni(): void {
        (<ReelView018>this._reelView)?.playAllSymbolAni();
    }

    /**
     * 準備把所有的icon的spineAni關閉,並且回收到物件池
     * 這邊是沒有中線的高賠率spineAni,會留在gameIcon裡面所以要回收掉
     * startSpin used to call this function
     */
    public cleanIdleSymbolAnis(): void {
        (<ReelView018>this._reelView)?.cleanIdleSymbolAnis();
    }

    /**
     * 20250610 當FG結束時需要切換spineAniNode的skin
     * (因為FG他的陣營已經決定了,切換回NG要再換回來正確陣營的skin)
     */
    public resetSpineAniNodeSkinForCampAfterFG(): void {
        (<ReelView018>this._reelView)?.changeSpineAniNodeSkinAfterFG();
    }

    public addBackToGameIcon = (reelIndex: number, iconIndex: number, aniNode: Node): void => {
        (<ReelView018>this._reelView)?.addBackToGameIcon(reelIndex, iconIndex, aniNode);
    }

    public setSingleGameIconBrightness = (reelIndex: number, iconIndex: number, value: boolean): void => {
        (<ReelView018>this._reelView)?.setSingleGameIconBrightness(reelIndex, iconIndex, value);
    }


    public getAndRemoveSymbolAniNodeWithWorldPos = (reelIndex: number, iconIndex: number): { target: Node | null, worldPos: Vec3 } => {
        return (<ReelView018>this._reelView)?.getAndRemoveSymbolAniNodeWithWorldPos(reelIndex, iconIndex);
    }

    public changeInitSpineAniNode = (): void => {
        (<ReelView018>this._reelView)?.changeInitSpineAniNode();
    }

    //--20250526--for test
    public checkGameIconForTest(): void {
        (<ReelView018>this._reelView)?.checkGameIconForTest();
    }

    //--20250609--for check fast stop 
    public getFastStopClick(): boolean {
        return (<ReelView018>this._reelView).fastStopClick;
    }

    //- (<ReelView018>this._reelView).fastStopClick = false;
    public override startRoll(isTurboMode: boolean, reelIDs?: number[]): void {
        (<ReelView018>this._reelView).fastStopClick = false;
        super.startRoll(isTurboMode, reelIDs);
    }

    protected override generateRandomIconData(reelID: number, previousIcons?: number[]): number[] {

        const sourceList = (<SlotMachineData018>this._slotMachineData).getTargetAllSymbolList(this._rollerStateForGame);
        const uniqueList = (<SlotMachineData018>this._slotMachineData).getTargetUniqueSymbolList(reelID, this._rollerStateForGame);
        const pickedSymbols: number[] = [];
        const possibleSymbols: number[] = [];
        const usedUniqueSymbols: number[] = [];

        let iconAmount = this.getIconAmount(reelID);
        // 產生所有可能的符號組合
        for (let i = 0; i < sourceList.length; i++) {
            possibleSymbols.push(sourceList[i]);
        }

        possibleSymbols.push(...uniqueList);
        // 隨機選擇符號
        for (let i = 0; i < iconAmount; i++) {
            if (possibleSymbols.length === 0) {
                break; // 如果沒有剩餘的符號，則跳出迴圈
            }

            let randomIndex = Math.floor(Math.random() * possibleSymbols.length);
            let symbol = possibleSymbols[randomIndex];

            // 檢查唯一性
            if (uniqueList && uniqueList.includes(symbol)) {
                if (usedUniqueSymbols.includes(symbol)) {
                    // 如果已經使用過，則重新選擇
                    i--;
                    possibleSymbols.splice(randomIndex, 1); // 移除已經使用過的符號
                    continue;
                } else {
                    usedUniqueSymbols.push(symbol);
                }
            }

            pickedSymbols.push(symbol);
            possibleSymbols.splice(randomIndex, 1); // 移除已經選取的符號
        }

        //console.log('checkGenerateRandomIconData:', sourceList.join(","), pickedSymbols.join(","));
        return pickedSymbols;
    }




    protected override allReelRollEnd(): void {
        super.allReelRollEnd();
        this.allReelRollEndCallBackToView?.();

        //---來抓每個icon的資料---
        //console.log('this.reelViewList:', (<ReelView1003>this._reelView).testGetReels());

    }


    private startShowReadyHand = (reelID: number) => {
        //--急停不會進來
        if (reelID == FORECAST_REEL) {
            (<ReelView018>this._reelView).setTweenDarkForForecast();
            (<ReelView018>this._reelView).changeReadyHandMode(reelID, true);
            /*
            const forecastSpine = FindComponent.findComponentInChildren(this._forecastEffectNode, sp.Skeleton);
            if (forecastSpine) {
                //-預設anikey不是default會在scene上面開播
                AudioManager.instance.playSound(SoundList.FgIconSpin, SOUND_TYPE.ONE_SHOT, AudioSourceList.BasicAS);
                forecastSpine.setAnimation(0, 'expect');
            }*/

            AudioManager.instance.playSound(SoundList.FgIconSpin, SOUND_TYPE.ONE_SHOT, AudioSourceList.BasicAS);
            this._forecastEffectNode.active = true;
            //-預設anikey不是default會在scene上面開播
            this._forecastSpineController.playAni('expect');

        } else if (reelID == REEL_AMOUNT - 1) {
            //--聽牌情況下的最後一軸
            (<ReelView018>this._reelView).cancelTweenDarkForForecast();
        }

    }

    private stopShowReadyHand = (reelID: number) => {
        (<ReelView018>this._reelView).changeReadyHandMode(reelID, false);
        /*
        const forecastSpine = FindComponent.findComponentInChildren(this._forecastEffectNode, sp.Skeleton);
        if (forecastSpine) {
            forecastSpine.getState().setEmptyAnimation(0, 0);
        }*/
        this._forecastSpineController.forceToDoBeforeDestroy();
        this._forecastEffectNode.active = false;
    }

    /*
    public closeAllGameIconBright(): void {
        //this._reelView.
        (<ReelView1003>this._reelView).closeAllIconBright();
    }*/



}


