import { _decorator, Component, UITransform, Node, Sprite, Size, Label, Font, HorizontalTextAlignment, math, Prefab, SpriteFrame } from 'cc';
import { SymbolItem } from './SymbolItem';
import { BigWingsRoller } from './BigWingsRoller';
import { PrefabInstancePoolManager } from '../tools/PrefabInstancePoolManager';
const { ccclass, property } = _decorator;

@ccclass('SymbolInfo')
export class SymbolInfo extends Component {

    static SpecifyID = { wild: 12, scatter: 13 }

    protected _infoData: SymbolInfoData
    protected _lastCard: number;
    protected _card: number;
    protected _symboleOriginWidth: number;
    protected _symboleOriginHeight: number;

    @property({ type: BigWingsRoller, tooltip: "Roller" })
    protected roller: BigWingsRoller = null;
    @property({ type: Node, tooltip: "SymbolInfo背景" })
    protected bg: Node = null;
    @property({ type: Node, tooltip: "文字賠率" })
    protected text: Node = null;
    @property({ type: Node, tooltip: "數字賠率表" })
    protected numContainer: Node = null;
    @property({ type: Node, tooltip: "數字(數量)" })
    protected count: Node = null;
    @property({ type: Node, tooltip: "數字(倍率)" })
    protected value: Node = null;
    @property({ type: Prefab, tooltip: "符號 prefab" })
    protected symbolPrefab: Prefab = null;

    @property({ type: [SpriteFrame], tooltip: "文字賠率表圖片" })
    protected textFrame: SpriteFrame[] = [];

    /** 賠率 */
    protected _rates: { [key: string]: number[]; };

    /** 開始向左顯示的輪軸 */
    protected _startRightIndex: number = 3;

    protected _oddsTextValueXPos: number = 80;

    /** 所有字型 */
    protected font: Font[];

    /** 所有數字 */
    protected _oddsText: Node[][];

    /** 符號 */
    protected _symbol: SymbolItem;

    /** 觸發符號感應區 */
    protected _listenSymbol: Node[] = [];

    /** 各符號背景大小 */
    protected _bgSize: Object;

    set rates(v: { [key: string]: number[]; }) {
        this._rates = v;
    }

    set listenSymbol(arr: Node[]) {
        this._listenSymbol = arr;
    }

    set enable(b: boolean) {
        this.node.active = b;
    }

    start() {
        this.init();

        // this.showInfo(2, new math.Vec3(540, 1210), 2)
    }

    update(deltaTime: number) {

    }

    showInfo(card: number, position: math.Vec3, wheelIndex: number): void {
        this._lastCard = this._card;
        this._card = card;
        // this.interactive = this.buttonMode = true;
        // this.alpha = 1;

        this.setSymbol(position);
        this.setBg(wheelIndex);
        this.setContent(wheelIndex);

        // this.emit(SymbolInfoEvent.OPEN);
    }

    close(): void {
        if (this.node.active == false) return;
        this.node.active = false;
        // this.emit(SymbolInfoEvent.CLOSE);
    }

    protected init(): void {
        this._infoData = {
            bgSize: {
                13: [710, 874], // expanded wild
                1: [705, 314], // scatter
                12: [670, 314], // purple wild
                0: [710, 314], // golden wild
                "else": [546, 302]
            },
            bgLXPadding: 138,
            bgYPadding: 0
        }

        SymbolInfo.SpecifyID.wild = 12;
        SymbolInfo.SpecifyID.scatter = 13;
        SymbolInfo.SpecifyID['wild1'] = 0;
        SymbolInfo.SpecifyID['wild2'] = 1;

        this._bgSize = this._infoData.bgSize;

        // let oriSize = this.bg.getComponent(Sprite).spriteFrame.originalSize;

        // this.bg.getComponent(UITransform).setContentSize(new Size(oriSize.width * 1.5, oriSize.height));

        this.font = [];
        this.font.push(this.count.getComponent(Label).font);
        this.font.push(this.value.getComponent(Label).font);

        this.initOddText();

        this.roller.getSymbolByIndex(0);
    }

    /** 初始化數字 */
    protected initOddText(): void {
        this._oddsText = [];
        this._oddsText.push([this.count, this.value]);
        for (let i = 1; i < 4; i++) {

            let count = new Node();
            count.active = true;
            let cl = count.addComponent(Label);
            cl.useSystemFont = false;
            cl.font = this.font[0];
            cl.fontSize = this.count.getComponent(Label).fontSize;
            cl.string = "5";
            this.numContainer.addChild(count)

            let value = new Node();
            value.active = true;
            let vl = value.addComponent(Label);
            vl.useSystemFont = false;
            vl.font = this.font[1];
            vl.fontSize = this.value.getComponent(Label).fontSize;
            vl.string = "999";
            value.setPosition(this._oddsTextValueXPos, 0, 0);
            this.numContainer.addChild(value)

            this._oddsText.push([count, value]);
        }
    }

    /** 顯示時Symbol的調整 */
    protected setSymbol(position: math.Vec3) {
        if (this._symbol) {
            this._symbol.changeSymbolID(this._card);
        } else {
            this._symbol = PrefabInstancePoolManager.instance.takeOut(this.symbolPrefab).getComponent(SymbolItem);
            this._symbol.changeSymbolID(this._card);
        }
        this._symbol.node.setPosition(this.roller.node.position.x + position.x, this.roller.node.position.y + position.y);
        // if (this._card == SymbolInfo.SpecifyID.scatter) this._symbol.y = 0
        this.node.addChild(this._symbol.node);

        this._symboleOriginWidth = (this._infoData.symboleOriginWidth) ? this._infoData.symboleOriginWidth : this._symbol.getComponent(UITransform).width;
        this._symboleOriginHeight = (this._infoData.symboleOriginHeight) ? this._infoData.symboleOriginHeight : this._symbol.getComponent(UITransform).height;
    }

    /** 顯示時背景的調整 */
    protected setBg(wheelIndex: number): void {
        this.bg.active = true;

        let [w, h] = this._bgSize[this._card] || this._bgSize["else"];
        this.bg.getComponent(UITransform).setContentSize(new Size(w, h));

        if (wheelIndex < this._startRightIndex) {
            this.bg.setPosition(
                this._symbol.node.position.x - this._infoData.bgLXPadding + this.bg.getComponent(UITransform).contentSize.width / 2,
                this._symbol.node.position.y + ((this._infoData.bgYPadding) ? this._infoData.bgYPadding : 0) + ((this._card == SymbolInfo.SpecifyID.scatter) ? -13 : 0)
            );
        } else {
            this.bg.setPosition(
                this._symbol.node.position.x
                + ((this._infoData.bgRXPadding) ? this._infoData.bgRXPadding : this._infoData.bgLXPadding)
                - this.bg.getComponent(UITransform).contentSize.width / 2,
                this._symbol.node.position.y + ((this._infoData.bgYPadding) ? this._infoData.bgYPadding : 0) + ((this._card == SymbolInfo.SpecifyID.scatter) ? -13 : 0)
            );
        }



    }

    /** 顯示時文字及賠率的調整 */
    protected setContent(wheelIndex: number): void {
        if (Object.values(SymbolInfo.SpecifyID).indexOf(this._card) != -1) {
            this.numContainer.active = false;
            this.text.active = true;

            this.setSpecifyContent(wheelIndex);
        } else {
            this.text.active = false;
            this.numContainer.active = true;

            this.setNormalContent(wheelIndex);
        }
    }

    /** 設定一般符號的賠率表 */
    protected setNormalContent(wheelIndex: number) {
        let data: number[] = this._rates[this._card].slice().reverse();
        let length = data.filter(e => e > 0).length;
        let diff = length > 3 ? 55 : 60;

        for (let i = 0; i < 4; i++) {
            this._oddsText[i][0].getComponent(Label).string = "";
            this._oddsText[i][1].getComponent(Label).string = "";
            this._oddsText[i][1].getComponent(Label).horizontalAlign = HorizontalTextAlignment.LEFT;
            if (i < length) {
                this._oddsText[i][0].getComponent(Label).string = (5 - i).toString();
                this._oddsText[i][1].getComponent(Label).string = data[i].toString();
                this._oddsText[i][0].setPosition(this._oddsText[i][0].position.x, i * diff);
                this._oddsText[i][1].setPosition(this._oddsTextValueXPos, i * diff);
            }
        }

        if (wheelIndex < this._startRightIndex) {
            this.numContainer.setPosition(
                this._symbol.node.position.x + this._symboleOriginWidth + 70,
                this._symbol.node.position.y - this._symboleOriginHeight / 2 - ((length < 4) ? 0 : 30)
            );
        } else {
            this.numContainer.setPosition(
                this._symbol.node.position.x - this._symboleOriginWidth - 70 - this.numContainer.getComponent(UITransform).contentSize.width,
                this._symbol.node.position.y - this._symboleOriginHeight / 2 - ((length < 4) ? 0 : 30)
            );
        }

    }

    /** 設定特殊符號的賠率表 */
    protected setSpecifyContent(wheelIndex: number) {
        this.text.getComponent(Sprite).spriteFrame = (this._card == 1) ? this.textFrame[2] : this.textFrame[1]
        if (this._card == 12) this.text.getComponent(Sprite).spriteFrame = this.textFrame[0];

        if (wheelIndex < this._startRightIndex) {
            this.text.setPosition(
                this._symbol.node.position.x + this._symboleOriginWidth + this.text.getComponent(UITransform).width / 2 + 40,
                this._symbol.node.position.y
            )
        } else {
            this.text.setPosition(
                this._symbol.node.position.x - this._symboleOriginWidth - this.text.getComponent(UITransform).width / 2 - 40,
                this._symbol.node.position.y
            );
        }
    }

}

export interface SymbolInfoData {
    /** 針對各Symbol的背景 EX: {1: [643, 265], 10: [643, 265], else: [419, 265]} */
    bgSize: Object
    /** 背景左顯示時位移 */
    bgLXPadding: number
    /** 背景右顯示時位移 */
    bgRXPadding?: number
    /** 背景下位移 */
    bgYPadding?: number
    symboleOriginWidth?: number
    symboleOriginHeight?: number
}