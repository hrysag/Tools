import { _decorator, CCString, Component, director } from 'cc';
import { BetData } from '../Networks/BetData';
import { PlayerInfo } from '../Player/PlayerInfo';
import { NetworkEvent, NetworkHandler } from '../Networks/NetworkHandler';
import { GenericUIManager } from '../../GenericUI/Scripts/GenericUIManager';
import { ErrorHandler } from '../ErrorHandler/ErrorHandler';
import { ErrorCode } from '../ErrorHandler/ErrorHandleDefine';
import { SlotRelayLang } from '../Utils/Config';
import { AdditionalPurchaseType } from '../NetAgent/CConnectManager/CConnectDefine';
import { GameTimeScale } from '../Utils/GameTimeScale';
import { SpineTimeScaleTuner } from './SpineTimeScaleTuner';
import { NewFlashModeEnum } from '../../GenericUI/Scripts/MainUI';
import { Utility } from '../Utils/Utility';
import { GameSetting } from './GameSetting';
import { AnimationTimeScaleTuner } from './AnimationTimeScaleTuner';

const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {

    public betValue: number = -1; // 下注金額，初始先設定為-1，要設定下注額度列表後才能決定
    public finalBalance: number = 0;
    public balanceAfterSpin: number = 0; // 下注後得分前的餘額
    protected gameNumber: number = 0;
    protected isOnline: boolean = true;


    @property(CCString)
    protected playerToken: string = "TestPlayer001"


    // 疾速模式時的快轉倍速 如果要調整可以繼承後在override此屬性
    protected maxSpeedMultiplier: number = 2;

    public onReceiveBetCallback: (betData: BetData) => void = null;
    public forceChangeLanguage: (langKey: SlotRelayLang) => void = null;


    public init(gameNumber: number, isOnline: boolean) {
        this.gameNumber = gameNumber;
        this.isOnline = isOnline;
        this.betValue = PlayerInfo.betValueList[0];
        GenericUIManager.instance.setBetValue(this.betValue)
        NetworkHandler.instance.addEventListener(NetworkEvent.Bet, this.onReceiveBet.bind(this));
        NetworkHandler.instance.addEventListener(NetworkEvent.SpinFail, this.onSpinFail.bind(this));
        GameTimeScale.onTimeScaleChangeCallback = this.onTimeScaleChange.bind(this);
        GenericUIManager.instance.onSetMainUIToSpinModeCallback = this.onSetMainUIToSpinMode.bind(this);
        GenericUIManager.instance.onSetMainUIToNormalModeCallback = this.onSetMainUIToNormalMode.bind(this);
    }

    public onUpdateBetValue(betValue: number) {
        this.betValue = betValue;
    }

    public onStartSpin() {

    }

    public onStartAuto(autoTimes: number) {

    }

    public sendBet(bet: number, additionalPurchaseType: AdditionalPurchaseType = AdditionalPurchaseType.None) {
        NetworkHandler.instance.send(NetworkEvent.Bet, this.gameNumber, bet, PlayerInfo.balance, additionalPurchaseType, this.playerToken);
    }

    public onReceiveBet(betData: BetData) {
        this.finalBalance = betData.coin;
        // 下注後得分前的餘額 先計算為balance減掉下注金額，如果還有購買FG等機制要重新計算
        this.balanceAfterSpin = PlayerInfo.balance - betData.bet;
        PlayerInfo.balance = this.finalBalance;

        if (this.isOnline) {
            let debugText = `${betData.spinId}`;
            if (NetworkHandler.instance.demo !== true) {
                GenericUIManager.instance.setBottomText(debugText);
            }
        }

        this.onReceiveBetCallback?.(betData);
    }


    public onSpinFail(spinId: string) {
        // 下注失敗時紀錄單號
        GenericUIManager.instance.setBottomText(spinId);
    }

    protected checkBalanceEnough(): boolean {
        if (PlayerInfo.balance < this.betValue) {
            this.showBankruptcyError();
            return false;
        }
        return true;
    }

    protected showBankruptcyError() {
        ErrorHandler.Instance.TriggerError(ErrorCode.Client_BetBankruptcy, true);
    }

    public setupBeforeGame() {
        // 繼承之後可以複寫此方法，自定義出現Continue按鈕前的遊戲初始化
        // 這個Promise完成後才會出現Continue按鈕
        return Promise.resolve();
    }

    protected onTimeScaleChange() {
        // 當遊戲時間縮放改變時，可以在這裡做一些處理
        // 例如更新UI或是其他需要根據時間縮放調整的邏輯
        let items = director.getScene().getComponentsInChildren(SpineTimeScaleTuner);
        for (let item of items) {
            item.tuneAnimationByTimeScale();
        }

        let animationsItems = director.getScene().getComponentsInChildren(AnimationTimeScaleTuner);
        for (let item of animationsItems) {
            item.tuneAnimationByTimeScale();
        }
    }

    protected onSetMainUIToSpinMode() {
        // 當主UI進入Spin模式時，可以在這裡做一些處理

        // 當遊戲開始時，關閉Timeout計時器
        NetworkHandler.instance.setTimeoutTimerFlag(false);
    }

    protected onSetMainUIToNormalMode() {
        // 當主UI回到Normal模式時，可以在這裡做一些處理

        // 當遊戲結束時，開啟Timeout計時器
        NetworkHandler.instance.setTimeoutTimerFlag(true);
    }

    public onNewFlashBtnSwitch(mode: NewFlashModeEnum) {
        if (mode === NewFlashModeEnum.NewFlash2) {
            GameTimeScale.timeScale = this.maxSpeedMultiplier;
        }
        else {
            GameTimeScale.timeScale = 1;
        }
    }

    public get langEnum(): SlotRelayLang {
        return GameSetting.gameLang;
    }

    protected fetchLastPlantData(): Promise<string> {
        return new Promise((resolve, reject) => {
            if (NetworkHandler.instance.isLogin) {
                let base64Data = Utility.uint8ArrayToBase64(PlayerInfo.lastPlant);
                resolve(base64Data);
            }
            else {
                NetworkHandler.instance.sendGameLoginFetch(this.playerToken, this.gameNumber)
                    .then((base64Data: string) => {
                        resolve(base64Data);
                    });
            }
        });



    }

    public onContinueBtnClick(): void {
        // 繼承後可以覆寫此方法，實作點擊繼續按鈕後的邏輯
        // 例如Start 頁面按下進入後要發出語音
    }
}


