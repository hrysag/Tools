import { _decorator, Component } from 'cc';
import { IProcessSlotData, BasicProcessSlotData } from '../ServerBackSlotInfoData/ProcessSlotData';
import { NotifySubject } from '../DefinitionGameData/EventTypesDefinition';
import { NotifyCation } from '../MyUtils/EventSystem/NotifyCation';
import { GameViewManager } from '../GameManager/GameViewManager';
import { EVENT_DATA } from '../MyUtils/EventSystem/EventData';
const { ccclass, property } = _decorator;

//--這個78的裝飾器要在這個常數宣告完再做..不然會噴錯

export type TestDirector =
    {
        testFlag: boolean;
    }

@ccclass('GameView018')

export class GameView018 extends Component {

    @property({ type: GameViewManager, visible: true, displayName: 'GameViewManager', tooltip: '用來控制遊戲中相關表演的管理器' })
    private _gameViewManager: GameViewManager = null;

    //private _currentSlotInfo: BasicProcessSlotData;
    private _betValue: number = 0;
    //private _testFlagCount: number = 0;


    public init(): void {
        this._gameViewManager.init();
    }

    //---玩家按下spin按鈕(空白按鍵)---
    public startSpin(isTurboMode: boolean): void {
        //--併入gameViewManager
        this._gameViewManager.startSpin(isTurboMode);
    }

    //---玩家按下stop按鈕---
    public onStopBtnClickHandler(): void {
        this._gameViewManager.onStopBtnClickHandler();
        //this.testCall();
    }

    //---購買FG資格不符合or結束FG,重新開啟按鈕
    public reOpenFgBtn(): void {
        this._gameViewManager.reOpenFgBtn();
    }

    //---開啟購買FG的介面,需要更新玩家當前的下注額度
    public setCurrentBetAndOpenBuyFG(betValue: number): void {
        this._gameViewManager.setCurrentBetAndOpenBuyFG(betValue);
    }


    //=======<test code for test>=========

    public testCall(value?: any): void {
        //NotifyCation.getInstance().emitSync(NotifySubject.GAME_VIEW_SUBJECT, 'testHello', { test: 'hello' });
        /*
        let symbolData = [
            [0, 1, 9], [3, 4, 5], [6, 7, 8], [9, 0, 1], [2, 3, 4], [6, 7, 8]
        ]

        this._slotMachineController.stopRoll(symbolData);
        */
        //this._slotMachineController.setGameState(GameState.FREE_GAME, 1);

        //this._showContainerController.changeGameMode(GameState.FREE_GAME, 1);

        //this._gameViewManager.testCall(value);
        this.testCallWithPromise();

        /*
        let rootNode: Node = find('Root', this._testSpineNode);
        let SkeletonNode: Node = rootNode.children[0];
        let componentSkeleton = SkeletonNode.getComponent(SkeletonExtension);
        //--有掛載SkeletonExtension的spine去換語系圖片要摳這個QQ
        componentSkeleton.updateSlotTexture();

        console.log('check_testSpineNode:', componentSkeleton);
        */
    }

    public async testCallWithPromise(value?: any): Promise<void> {

        //console.log('finishASYNC', this._spineAniTestComponent, this._animationControllersPoolManager);
        //--需要測試移除推回pool的情況
        await this._gameViewManager.testPromiseFunc();


    }

    //========<test code for test>=========

    public setPlayerBetValue(value: number): void {
        this._betValue = value;
        this._gameViewManager.setPlayerBetValue(value);
    }

    public setFGTotalBetForThisRound(value: number): void {
        this._gameViewManager.setPlayerBetValue(value);
    }

    public setSeverReceiveData(data: BasicProcessSlotData): void {
        this._gameViewManager.setSeverReceiveData(data);
    }
    //--空白按鍵判斷使用(當面板開啟時,空白按鍵不能啟動spin)
    public getBuyFgPanelIsOpen(): boolean {
        return this._gameViewManager.getBuyFgPanelIsOpen();
    }

    public setFgState(value: boolean): void {
        this._gameViewManager.isBuyFG = value;
    }
    //---滾輪停止---
    public stopSpin(slotData?: IProcessSlotData): void {
        this._gameViewManager.stopSpin(slotData);
    }

    public setStartAutoSpinMode(value: boolean): void {
        this._gameViewManager.isAutoSpinMode = value;
    }

    //--寫完server新的資料後會呼叫這個方法
    public newRoundDataToStopSpin(): void {
        this._gameViewManager.newRoundDataToStopSpin();
    }

}


