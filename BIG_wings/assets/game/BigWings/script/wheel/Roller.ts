import { _decorator, Animation, AnimationClip, Button, CCFloat, Color, Component, Graphics, Input, Node, UIOpacity, UITransform, Vec3 } from 'cc';
import { SlotWheel, SlotWheelEvent } from './SlotWheel';
import { UtilsKit } from '../lib/UtilsKit';
import { SymbolInfo } from "./SymbolInfo";
import { SymbolItem } from './SymbolItem';
const { ccclass, property } = _decorator;

export class RollerEvent {
    public static StopEnd: string = "StopEnd";
    public static DropEnd: string = "DropEnd";
}

@ccclass('Roller')
export class Roller extends Component {

    @property({ type: [SlotWheel] })
    public arrWheel: Array<SlotWheel> = []!;

    @property({ type: CCFloat, tooltip: "啟動延遲間隔時間" })
    protected launchDelayTime: number = 0.2;

    @property({ type: CCFloat, tooltip: "停止延遲間隔時間" })
    protected stopDelayTime: number = 0.2;

    @property({ type: CCFloat, tooltip: "每軸掉落啟動延遲間隔時間" })
    protected wheelDropDelayTime: number = 0.2;

    @property({ type: CCFloat, tooltip: "每軸物件掉落延遲間隔時間" })
    protected symbolDropDelayTime: number = 0.2;

    @property({ type: CCFloat, tooltip: "輪軸聽牌延遲時間" })
    protected listenDelayTime: number = 1.5;

    @property({ type: AnimationClip, tooltip: "輪軸聽牌效果動畫" })
    protected listenAnimationClip: AnimationClip = null;

    @property({ type: Node, tooltip: "輪軸聽牌 Node" })
    protected listenNode: Node = null;

    protected _listenStartIndex: number = -1;
    protected listenLeftBlack: Graphics;
    protected listenRightBlack: Graphics;


    get isRunnung(): boolean {
        let len: number = this.arrWheel.length;
        for (let i: number = 0; i < len; i++) {
            if (this.arrWheel[i].isRunning) {
                return true;
            }
        }
        return false;
    }

    set listenStartIndex(n: number) {
        this._listenStartIndex = n;
    }

    onLoad(): void {
        let len: number = this.arrWheel.length;
        for (let i: number = 0; i < len; i++) {
            // this.arrWheel[i].node.on(SlotWheelEvent.StopEnd, this.checkAllWheelStop, this);
            this.arrWheel[i].node.on(SlotWheelEvent.StopEnd, this.checkAllWheelStop, this);
        }

        if (this.listenAnimationClip) {
            let animation: Animation = this.addComponent(Animation);
            animation.addClip(this.listenAnimationClip, this.listenAnimationClip.name);
        }

        if (this.listenNode) {
            this.listenNode.active = false;
        }

    }

    createListenItem(symInfo: SymbolInfo): void {
        console.log("createListenItem");

        let listenSymbol: Node[] = [];
        let con = new Node('Container');
        con.active = true;
        this.node.addChild(con);
        let cardAmount: number = 4;

        for (let i = 0; i < this.arrWheel.length; i++) {
            for (let j = 0; j < cardAmount; j++) {
                let sym = this.arrWheel[i].getMainSymbolByIndex(j);

                let listenCon = new Node('ListenCon');
                listenCon.active = true;
                con.addChild(listenCon);

                listenCon.addComponent(UITransform).contentSize.set(215, 205);
                listenCon.position.set(sym.node.position.x + this.arrWheel[i].node.position.x, sym.node.position.y);

                listenCon.on(Node.EventType.TOUCH_START, e => {
                    e.propagationStopped = true;
                    symInfo.showInfo(this.arrWheel[i].getMainSymbolByIndex(j).symbolID, listenCon.position, i);
                });
                listenSymbol.push(listenCon);
                console.log("createListenItem -- end", i, j, sym.node.position.x + this.arrWheel[i].node.position.x, sym.node.position.y);
            }
        }
        symInfo.listenSymbol = listenSymbol;

        console.log("createListenItem -- end");
    }

    protected checkAllWheelStop(): void {
        if (!this.isRunnung) {
            this.node.emit(RollerEvent.StopEnd);
        }
    }
    /**
     * 
     * @param index starts from 1
     * 
     */
    public getSymbolByIndex(index: number): SymbolItem {
        let wheelID: number = Math.floor((index - 1) / this.arrWheel[0].mainSymbolAmount);
        let symbolIndex: number = (index - 1) % this.arrWheel[0].mainSymbolAmount;
        return this.arrWheel[wheelID].getMainSymbolByIndex(symbolIndex);
    }

    async launch() {
        let len: number = this.arrWheel.length;
        for (let i: number = 0; i < len; i++) {

            if (!this.arrWheel[i].isRunning) {
                this.arrWheel[i].launch();
            }

            //--執行一個之後,等待Defer一段時間再執行下一個.(delay),最後一個不執行delay
            if (i < len - 1) {
                await UtilsKit.Defer(1000 * this.launchDelayTime);
            }
        }
    }

    async stop(cards: Array<Array<number>>, extendedCards?: Array<Array<number>>) {

        if (extendedCards) {
            extendedCards = extendedCards;
        }

        let len: number = this.arrWheel.length;
        for (let i: number = 0; i < len; i++) {

            if (!this.arrWheel[i].isRunning) {
                this.arrWheel[i].launch();
            }

            if (this._listenStartIndex != -1 && i >= this._listenStartIndex) {
                this.playListenEffect(i);
                await UtilsKit.Defer(1000 * this.listenDelayTime);
            }

            this.arrWheel[i].stop(cards[i], extendedCards ? extendedCards[i] : null);

            if (i < len - 1) {
                await UtilsKit.Defer(1000 * this.stopDelayTime);
                this.stopListenEffect();
            }
        }
        this.stopListenEffect();
    }

    /**
     * 取得延伸(掉落階段物件)牌組
     * "Cards": [
            [1,2,3,4,5,11,11,8,9,10,11,12,11,14,15,40,17,18,19,20],
            [1,2,3,4,5,6,7,8,9,10,11,12,11,14,15,16,17,18,19,20]
        ],
        "Lines": [
                    [
                        {
                            "ElementID": 11,
                            "GridNum": 3,
                            "Grids": [
                                6,
                                7,
                                13
                            ],
                            "Payoff": 0
                        },
                        {
                            "ElementID": 40,
                            "GridNum": 1,
                            "Grids": [
                                16
                            ],
                            "Payoff": 0
                        }
                    ],
                    []
                ]
     * @param cards beginGame cards
     * @param lines beginGame lines
     * @returns 
     */
    takeExtendedCards(cards: Array<Array<number>>, lines: any): Array<Array<number>> {

        let returnCards: Array<Array<number>> = [];
        let wheelLen: number = this.arrWheel.length;
        let len: number = lines.length - 1;

        for (let j: number = 0; j < wheelLen; j++) {
            returnCards.push([]);
        }

        for (let i: number = 0; i < len; i++) {

            let lineLen: number = lines[i].length;
            let nextCards: Array<number> = cards[i + 1];
            let wheelEliminationCount: Array<number> = [0, 0, 0, 0, 0];

            for (let j: number = 0; j < wheelLen; j++) {
                wheelEliminationCount.push(0);
            }

            for (let j: number = 0; j < lineLen; j++) {

                let lineData: Array<any> = lines[i][j];
                let grids: Array<number> = lineData["Grids"];
                let gridsNum: number = lineData["GridNum"];

                for (let k: number = 0; k < gridsNum; k++) {
                    let wheelID: number = Math.floor((grids[k] - 1) / this.arrWheel[0].mainSymbolAmount);
                    let index: number = wheelID * this.arrWheel[0].mainSymbolAmount + wheelEliminationCount[wheelID];
                    returnCards[wheelID].splice(returnCards[wheelID].length - wheelEliminationCount[wheelID], 0, nextCards[index]);
                    wheelEliminationCount[wheelID]++;
                }
            }
        }
        return returnCards;
    }


    protected playListenEffect(wheelIndex: number) {
        if (this.listenNode) {
            this.listenNode.active = true;
            this.listenNode.setPosition(this.arrWheel[wheelIndex].node.getPosition());
        }
        if (this.listenAnimationClip) {
            let animation: Animation = this.getComponent(Animation);
            animation.play(this.listenAnimationClip.name);
        }

        if (!this.listenLeftBlack) {
            let node: Node = new Node("listenLeftBlack");
            this.node.addChild(node);
            this.listenLeftBlack = node.addComponent(Graphics);
            this.listenLeftBlack.clear();
            this.listenLeftBlack.fillColor = new Color(0, 0, 0, 255 * 0.6);
            this.listenLeftBlack.rect(0, 0, 1, 1);
            this.listenLeftBlack.fill();

            node = new Node("listenRightBlack");
            this.node.addChild(node);
            this.listenRightBlack = node.addComponent(Graphics);
            this.listenRightBlack.clear();
            this.listenRightBlack.fillColor = this.listenLeftBlack.fillColor;
            this.listenRightBlack.rect(0, 0, 1, 1);
            this.listenRightBlack.fill();

            this.listenNode.setSiblingIndex(this.node.children.length - 1);
        }

        let x: number;
        let y: number;
        let w: number;
        let h: number;
        if (wheelIndex > 0) {
            this.listenLeftBlack.node.active = true;

            x = this.arrWheel[0].node.position.x - 0.5 * this.arrWheel[0].node.getComponent(UITransform).width;
            y = this.arrWheel[0].node.position.y - 0.5 * this.arrWheel[0].node.getComponent(UITransform).height;
            w = this.arrWheel[wheelIndex].node.position.x - 0.5 * this.arrWheel[wheelIndex].node.getComponent(UITransform).width - x;
            h = this.arrWheel[wheelIndex].node.position.y + 0.5 * this.arrWheel[wheelIndex].node.getComponent(UITransform).height - y;

            this.listenLeftBlack.node.setPosition(new Vec3(x, y));
            this.listenLeftBlack.node.setScale(new Vec3(w, h));
        }

        if (wheelIndex < this.arrWheel.length - 1) {
            this.listenRightBlack.node.active = true;

            let len: number = this.arrWheel.length;
            x = this.arrWheel[wheelIndex].node.position.x + 0.5 * this.arrWheel[wheelIndex].node.getComponent(UITransform).width;
            y = this.arrWheel[wheelIndex].node.position.y - 0.5 * this.arrWheel[wheelIndex].node.getComponent(UITransform).height;
            w = this.arrWheel[len - 1].node.position.x + 0.5 * this.arrWheel[len - 1].node.getComponent(UITransform).width - x;
            h = this.arrWheel[len - 1].node.position.y + 0.5 * this.arrWheel[len - 1].node.getComponent(UITransform).height - y;

            this.listenRightBlack.node.setPosition(new Vec3(x, y));
            this.listenRightBlack.node.setScale(new Vec3(w, h));
        }
    }

    protected stopListenEffect() {
        if (this.listenNode) {
            this.listenNode.active = false;
        }
        if (this.listenAnimationClip) {
            let animation: Animation = this.getComponent(Animation);
            animation.stop();
        }
        if (this.listenLeftBlack) {
            this.listenLeftBlack.node.active = false;
            this.listenRightBlack.node.active = false;
        }
    }
}

