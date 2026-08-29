import { _decorator, Component, SpriteFrame, Color, Node } from "cc";
import { ErrorHandler } from "db://assets/Scripts/ErrorHandler/ErrorHandler";
import { UnitTest } from "db://assets/Scripts/TestTool/TestableFunction";
import { ErrorCode } from "db://assets/VideoPlayer/VideoPlayer";
import { BuyFeatureCardInfo } from "../BuyFeatureCard";
import { GenericUIManager } from "../GenericUIManager";
import { MessageBox } from "../MessageBox";
import { GameSetting, SlotRelayLang } from "../../../Definition";
import { PlayerInfo } from "../../../Networks";
import { Utility } from "db://assets/Scripts/Utils/Core";



const { ccclass, property } = _decorator;

@ccclass('GenericUISceneUnitTest')
export class GenericUISceneUnitTest extends Component {

    @property(Node)
    private button: Node;

    @property(Node)
    private spriteNode: Node;

    @property(SpriteFrame)
    private featureSpriteFrame: SpriteFrame;

    @property(Node)
    private canvasNode: Node;

    @property(SpriteFrame)
    private normalSpriteBG: SpriteFrame;

    @property(SpriteFrame)
    private pressedSpriteBG: SpriteFrame;

    @property(SpriteFrame)
    private hoverSpriteBG: SpriteFrame;

    @property(SpriteFrame)
    private disabledSpriteBG: SpriteFrame;

    @property(SpriteFrame)
    private normalSpriteCrown: SpriteFrame;

    @property(SpriteFrame)
    private pressedSpriteCrown: SpriteFrame;

    @property(SpriteFrame)
    private hoverSpriteCrown: SpriteFrame;

    @property(SpriteFrame)
    private disabledSpriteCrown: SpriteFrame;

    private spinIndex: number = 0;
    private betValue: number = -1;
    private cardInfoList: BuyFeatureCardInfo[] = [];

    start() {
        GenericUIManager.instance.init(SlotRelayLang.tw, this.canvasNode);

        // 為了測試，直接把GameSetting裡面的下注金額列表設定進去，一般要透過PlayerInfo來設定
        this.betValue = GameSetting.platformBetValueList[0];
        GenericUIManager.instance.setBetSelectInfos(GameSetting.platformBetValueList);
        GenericUIManager.instance.setBetValue(GameSetting.platformBetValueList[0]);
        GenericUIManager.instance.onBetSelectBtnClickCallback = this.onGenericUIBetSelectBtnClick.bind(this);
        PlayerInfo.updateBetValueList(GameSetting.platformBetValueList);

        GenericUIManager.instance.setExtraBetTipText("GenericUI/ExtraBet_info")
        GenericUIManager.instance.setBuyBonusIconBGInfo(153, new Color(1, 255, 1)); // 60% opacity
        GenericUIManager.instance.onAutoSpinStartClickCallback = this.onGenericUIAutoSpinStartClick.bind(this);
        GenericUIManager.instance.onSpinBtnClickCallback = this.onGenericUISpinClick.bind(this);

        GenericUIManager.instance.setBuyBonusOpen();
        GenericUIManager.instance.setExtraBetOpen(1.2)
        GenericUIManager.instance.onBuyFeatureModeChangeCallback = (mode, multiply, cardIndex) => {
            console.log(`Buy Feature Mode Changed: ${mode}, Multiply: ${multiply}, Card Index: ${cardIndex}`);
        };

        // GenericUIManager.instance.setBuyBonusBtnCustomSprite(
        //     this.normalSpriteBG, this.pressedSpriteBG, this.hoverSpriteBG, this.disabledSpriteBG,
        //     this.normalSpriteCrown, this.pressedSpriteCrown, this.hoverSpriteCrown, this.disabledSpriteCrown,
        //     "BuyFG_btn_txt"
        // );

        MessageBox.instance.init();
    }

    @UnitTest(false)
    public setTwoTurboActive(isOpen?: any) {
        if (typeof isOpen !== "boolean") {
            isOpen = "";
        }

        let isTwoLevelTurboOpen: boolean;
        if (isNaN(isOpen) || isOpen === "") {
            isTwoLevelTurboOpen = false;
        } else {
            isTwoLevelTurboOpen = isOpen;
        }

        GenericUIManager.instance.setTwoLevelTurboMode(isTwoLevelTurboOpen);
    }

    @UnitTest(0)
    public showBottomTextWinScore(input?: any) {
        let score: number;

        if (typeof input === "number") {
            score = input;
        }
        else {
            score = 0;
        }

        GenericUIManager.instance.showBottomTextWinScore(score);
    }

    @UnitTest("")
    public showBottomText(input?: any) {
        let text: string;

        if (typeof input === "string") {
            const trimmed = input.trim();
            text = trimmed;
        }
        else {
            text = "";
        }

        GenericUIManager.instance.setBottomText(text);
    }

    @UnitTest(0)
    public setBalance(input?: any) {
        let balance: number;

        if (typeof input === "number") {
            balance = input;
        }
        else {
            balance = 0;
        }

        PlayerInfo.balance = balance;
        GenericUIManager.instance.setBalance(PlayerInfo.balance);
    }

    @UnitTest("", "", 0)
    public setBuyFeatureCardInfo(title?: any, content?: any, multiply?: any) {
        const finalTitle = typeof title === "string" ? title.trim() : "";
        const finalContent = typeof content === "string" ? content.trim() : "";
        const multipleStr = typeof multiply === "number" ? multiply : 0;
        const finalMultiply = Number(multipleStr);

        if (!finalTitle) {
            console.warn("⚠️ 請輸入卡片標題！");
            return;
        }

        if (!finalContent) {
            console.warn("⚠️ 請輸入卡片內容！");
            return;
        }

        if (finalMultiply <= 0) {
            console.warn("⚠️ 倍率必須大於 0！");
            return;
        }

        const cardInfo = new BuyFeatureCardInfo();
        cardInfo.title = finalTitle;
        cardInfo.content = finalContent;
        cardInfo.icon = this.featureSpriteFrame;
        cardInfo.multiply = finalMultiply;

        this.cardInfoList.push(cardInfo);
        GenericUIManager.instance.setBuyFeatureCardInfo(this.cardInfoList);
    }

    @UnitTest()
    public removeBuyFeatureCardInfo() {
        this.cardInfoList = [];
        GenericUIManager.instance.setBuyFeatureCardInfo(this.cardInfoList);
    }

    @UnitTest(0, 0)
    public setBetSelectInfos(minInput?: any, maxInput?: any) {

        if (typeof (minInput) !== "number" || typeof (maxInput) !== "number") {
            console.warn("⚠️ 請輸入數字！");
            return;
        }

        if (!minInput || !maxInput) {
            console.warn("⚠️ 請輸入最小值與最大值！");
            return;
        }

        if (minInput > maxInput) {
            console.warn("⚠️ 最小值不可大於最大值！");
            return;
        }

        if (maxInput >= GameSetting.platformBetValueList[0]) {
            const filtered = this.updateBetValueList(minInput, maxInput, GameSetting.platformBetValueList);
            GenericUIManager.instance.setBetSelectUIBetValue(filtered[0]);
            GenericUIManager.instance.setBetSelectInfos(filtered);
        } else {
            console.warn("⚠️ 輸入的最大值小於押注額列表的最小值！");
        }
    }

    private onGenericUIAutoSpinStartClick(autoTimes: number) {
        this.autoSpin();
    }

    private autoSpin() {
        if (GenericUIManager.instance.checkAutoStatus()) {
            this.spinIndex++;
            this.spin();
            if (this.checkBalanceEnough()) {
                Utility.waitPromise(1).then(() => {
                    this.autoSpin();
                });
            }
        }
        else {
            this.spinIndex = 0;
            GenericUIManager.instance.setMainUIToNormalMode();
        }
    }

    private onGenericUISpinClick() {
        this.spin();
    }

    private spin() {
        if (!this.checkBalanceEnough()) {
            if (GenericUIManager.instance.isAutoMode) {
                GenericUIManager.instance.stopAutoMode();
                GenericUIManager.instance.setMainUIToNormalMode();
            }
            return;
        }

        GenericUIManager.instance.setMainUIStopBtnEnabled();
        console.log("spin: " + this.spinIndex);
    }

    private checkBalanceEnough(): boolean {
        if (PlayerInfo.balance < this.betValue) {
            ErrorHandler.Instance.TriggerError(ErrorCode.Client_BetBankruptcy, true);
            return false;
        }
        return true;
    }

    private onGenericUIBetSelectBtnClick(bet: number): void {
        this.betValue = bet;
    }

    private updateBetValueList(min: number, max: number, totalBetValueList: number[]): number[] {
        const betValueList: number[] = [];

        for (const value of totalBetValueList) {
            if (value >= min && value <= max) {
                betValueList.push(value);
            }
        }
        return betValueList;
    }
}



