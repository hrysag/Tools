import { _decorator, Component, Label, Node, RichText, UIOpacity, UITransform, Vec3 } from 'cc';
import { KeySpriteFramePair, Utility } from '../../../Utils/Core';
import { Localization } from '../../Localization';

const { ccclass, property } = _decorator;
const TIP_WIDTH: number = 588;
enum TipMode {
    Empty = 0,
    First = 1,
    Idle = 2,
    Gaming = 3,
}

@ccclass('BottomBarUI')
export class BottomBarUI extends Component {

    @property(RichText)
    private tipRichText: RichText;

    @property(Node)
    private winGroup: Node;

    @property(Label)
    private winScoreLabel: Label;

    @property(Label)
    private totalBetCurrencyLabel: Label;

    @property(Label)
    private totalBetLabel: Label;

    @property(Label)
    private balanceCurrencyLabel: Label;

    @property(Label)
    private balanceLabel: Label;

    @property(Node)
    private logoNode: Node;

    @property(Label)
    private debugLabels: Label[] = [];

    @property(Label)
    private logoLabels: Label[] = [];

    @property(Label)
    private versionLabels: Label[] = [];

    private bottomFistShowText: string = "";

    private bottomIdleShowTexts: string[] = [];

    private bottomGamingShowTexts: string[] = [];

    private tipMode: TipMode = TipMode.Empty;

    private currencySymbol: string = '';

    public init(): void {
        // console.log("BottomBarUI init");
        // 關閉 Logo顯示功能
        this.logoLabels.forEach(label => {
            label.node.active = false;
        });
        this.bottomFistShowText = 'GameMsg_000_0_1';

        this.bottomIdleShowTexts = [
            'GameMsg_000_2_1',
            'GameMsg_000_2_2',
            'GameMsg_000_2_3',
        ];

        this.bottomGamingShowTexts = ['GameMsg_000_1_1'];

        this.showWinScore(0);
        this.setTotalBet(0);
        this.setBalance(0);

        this.tipRichText.getComponent(UITransform).width = TIP_WIDTH;
    }

    public showWinScore(score: number): void {
        let originalActive = this.winGroup.active;
        this.setWinScoreActive();
        this.winScoreLabel.string = `${score.numberComma()}`;
        if (!originalActive) {
            this.winGroup.getComponent(UIOpacity).opacity = 0;
            this.scheduleOnce(() => {
                this.winGroup.getComponent(UIOpacity).opacity = 255;
            }, 0);
        }
    }

    // 一進入遊戲時要先Call這個Function，顯示歡迎文字
    public showBottomTextFirst(): void {
        this.setTipTextWithKey(this.bottomFistShowText);
    }

    // 開始一局，沒有自動，進入Gaming狀態時，要Call這個Function，隨機顯示一個文字
    public showBottomTextGaming(): void {
        let len = this.bottomGamingShowTexts.length;
        let id = Utility.getRandomInt(len);
        this.setTipTextWithKey(this.bottomGamingShowTexts[id]);
    }

    // 結束一局，沒有自動，回到Idle狀態時，要Call這個Function，隨機顯示一個文字
    public showBottomTextIdle(): void {
        let len = this.bottomIdleShowTexts.length;
        let id = Utility.getRandomInt(len);
        this.setTipTextWithKey(this.bottomIdleShowTexts[id]);
    }

    public addGamingShowTexts(texts: string[]): void {
        for (let text of texts) {
            this.bottomGamingShowTexts.push(text);
        }
    }

    public showBottomTextEmpty(): void {
        this.setTipText('');
    }

    public setTotalBet(totalBet: number): void {
        this.totalBetLabel.string = `${totalBet.numberComma()}`;
    }

    public setBalance(balance: number): void {
        this.balanceLabel.string = `${balance.numberComma()}`;
    }

    public addBottomRichTextSprite(spriteFrameMap: KeySpriteFramePair[]): void {
        this.tipRichText.addSpriteFrame(spriteFrameMap);
    }

    private setWinScoreActive(): void {
        this.winGroup.active = true;
        this.tipRichText.node.active = false;
    }

    private setTipActive(): void {
        this.winGroup.active = false;
        this.tipRichText.node.active = true;
    }

    public setDebugText(text: string): void {
        for (let label of this.debugLabels) {
            label.string = text;
        }
    }

    public setVersionText(text: string): void {
        for (let label of this.versionLabels) {
            label.string = text;
        }
    }

    public setLogoText(text: string): void {
        for (let label of this.logoLabels) {
            label.string = text;
        }
    }

    public setLogoActive(active: boolean): void {
        this.logoNode.active = active;
    }

    public setCurrencySymbol(symbol: string): void {
        this.currencySymbol = symbol;
        this.totalBetCurrencyLabel.string = symbol;
        this.balanceCurrencyLabel.string = symbol;
    }

    private setTipText(text: string): void {
        this.setTipActive();
        this.tipRichText.string = Utility.replaceRichTextImgKey(text); //588
        let tipTransform = this.tipRichText.getComponent(UITransform);
        if (tipTransform.width <= TIP_WIDTH) {
            this.tipRichText.node.scale = Vec3.ONE;
        }
        else {
            let scaleNum = TIP_WIDTH / tipTransform.width;
            this.tipRichText.node.scale = new Vec3(scaleNum, scaleNum, 1);
            if ((tipTransform.width / TIP_WIDTH) > 1.2) {
                console.error("tipRichText is too much");
            }
        }
    }

    public setTipTextWithKey(textKey: string): void {
        let text = Localization.instance.t(textKey);
        this.setTipText(text);
    }
}


