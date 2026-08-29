import { _decorator, Prefab, SpriteFrame, Node, Graphics, Color, Vec3 } from 'cc';
import { Roller, RollerEvent } from './Roller';
import { BigWingsWheel, BigWingsWheelEvent } from './BigWingsWheel';
import { SlotWheelEvent } from './SlotWheel';
import { SymbolItem } from './SymbolItem';
import { UtilsKit } from '../lib/UtilsKit';
import { BigWingsSymbol } from './BigWingsSymbol';
import { SymbolSpine } from './SymbolSpine';
import { FreeGameData } from '../mock/MockData';
const { ccclass, property } = _decorator;

export class BigWingsRollerEvent {

}

@ccclass('BigWingsRoller')
export class BigWingsRoller extends Roller {


    @property({ type: Node, tooltip: "symbolSpine" })
    protected symbolSpine: Node;

    public symArr: BigWingsSymbol[] = [];
    protected wildArr: BigWingsSymbol[] = [];



    get isStopping(): boolean {
        let len: number = this.arrWheel.length;
        for (let i: number = 0; i < len; i++) {
            if (this.arrWheel[i].inStoppingPhase) {
                return true;
            }
        }
        return false;
    }

    async stop(cards: Array<Array<number>>, extendedCards?: Array<Array<number>>, time = null,) {
        
        console.log("BigWingsRoller stop", cards, extendedCards, time);

        this._listenStartIndex = -1;

        let stopDelay = time == null ? this.stopDelayTime : time;
        let scatterCount = 0;
        if (extendedCards) {
            extendedCards = extendedCards;
        }

        let len: number = this.arrWheel.length;
        for (let i: number = 0; i < len; i++) {
            console.log(cards[i]);
            if (cards[i].includes(BigWingsSymbol.scatterId)) {
                scatterCount++;
                if (scatterCount == 2) this._listenStartIndex = i + 1;
            }

            if (!this.arrWheel[i].isRunning) {
                this.arrWheel[i].launch();
            }

            if (this._listenStartIndex != -1 && i >= this._listenStartIndex) {
                this.playListenEffect(i);
                await UtilsKit.Defer(1000 * this.listenDelayTime);
            }

            this.arrWheel[i].stop(cards[i], extendedCards ? extendedCards[i] : null);

            if (i < len - 1) {
                // await UtilsKit.Defer(1000 * this.stopDelayTime);
                await UtilsKit.Defer(1000 * stopDelay);
                // this.stopListenEffect();
            }
        }
        // this.stopListenEffect();
    }

    protected checkAllWheelStop(): void {//改為stoppingPhase也結束之後再發事件
        if (!this.isRunnung && !this.isStopping) {
            this.node.emit(RollerEvent.StopEnd);
            this.stopListenEffect();
        }
    }


    public setSymSpine(symArr, wildArr): void {
        this.symArr = symArr;
        this.wildArr = wildArr;
        for (let i: number = 0; i < this.arrWheel.length; i++) {
            (<BigWingsWheel>this.arrWheel[i]).wildSym = wildArr[i];
        }
    }

    protected playListenEffect(wheelIndex: number) {
        if (this.listenNode) {
            this.listenNode.active = true;
            this.listenNode.position = this.arrWheel[wheelIndex].node.position.add(new Vec3(0, -13, 0));
        }

    }


    public resetSpine(): void {
        // console.error("resetSpine");
        this.symArr.forEach(s => s.node.active = false);

        for (let i: number = 0; i < this.arrWheel.length * this.arrWheel[0].mainSymbolAmount; i++) {

            if (this.getSymbolByIndex(i + 1)) {
                this.getSymbolByIndex(i + 1).node.active = true;
                (<BigWingsSymbol>this.getSymbolByIndex(i + 1)).reset();
            }
        }
    }

    public checkWildStay(): void {
        this.arrWheel.forEach((w: BigWingsWheel) => w.checkStay());

    }


    protected stopListenEffect() {
        if (this.listenNode) {
            this.listenNode.active = false;
        }

    }

}

