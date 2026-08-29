import { _decorator, Component, Event, EventHandler, js, Label, Node, Toggle } from 'cc';
import { BaseAutoSet } from './BaseAutoSet';
import { CommandEventName } from "@casino-mono/mvc"

const { ccclass, property } = _decorator;

@ccclass('BetSetPanel')
export class BetSetPanel extends BaseAutoSet {

    private arrToggle: Array<Toggle> = [];
    protected _currentBetNode: Node;
    protected _currentBet: number;

    private betCreditList: Array<number> = [];
    protected toggleIndex: number = 1;

    set BetCreditList(n) {
        this.betCreditList = n;
        if (this.arrToggle.length == 0) {
            this.init();
            console.log(this._currentBet)
            this.clickToggle(this._currentBet)
        }
    }

    set currentBet(n) {
        this._currentBet = n;
    }

    private init(): void {
        if (this.betCreditList.length == 0) { this.betCreditList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] }

        const betToggle: Node = this.node.getChildByName("toggle");
        let len: number = betToggle.children.length;
        // console.log(betToggle, len)
        for (let i: number = 0; i < len; i++) {
            let toggleNode: Node = betToggle.children[i];
            let toggle: Toggle = toggleNode.getComponent(Toggle);
            let labelNode: Node = toggleNode.getChildByName("label");
            let checkmarkLabel: Node = toggleNode.getChildByName("checkmark").getChildByName("label");
            this.arrToggle.push(toggle);
            let betNumber: string = `${this.betCreditList[i]}`;
            labelNode.getComponent(Label).string = betNumber;
            checkmarkLabel.getComponent(Label).string = betNumber;
            toggle.node.on("click", () => { this.clickToggle(this.betCreditList[i]); });

            // console.log(this.arrToggle)

        }


    }

    protected clickToggle(bet: number): void {
        // if (this._currentBetNode) {
        //     this._currentBetNode.getComponent(Toggle).isChecked = false;
        // }
        const index = this.betCreditList.indexOf(bet);

        const toggle = this.arrToggle[index]
        this._currentBetNode = toggle.node;

        // this._currentBetNode.getComponent(Toggle).isChecked = true;

        this._currentBet = bet;
        this.toggleIndex = index
        this.node.emit(CommandEventName.UPDATE_LINEBET, this._currentBet);
    }


    private setBetBytoggleIndex(index: number) {
        console.log('this.setBetBytoggleIndex')
        if (this._currentBetNode) {
            this._currentBetNode.getComponent(Toggle).isChecked = false;
            console.log('this._currentBetNode')
            console.log(this._currentBetNode)
        }
        console.log("this.arrToggle[index].node", index,this.arrToggle[index])
        this._currentBetNode = this.arrToggle[index].node;
        this._currentBetNode.getComponent(Toggle).isChecked = true;
        console.log(this._currentBetNode)
        this._currentBet = this.betCreditList[index];
        console.log(this._currentBet)
        this.node.emit(CommandEventName.UPDATE_LINEBET, this._currentBet);
    }

    public next() {
        this.toggleIndex++;
        if (this.toggleIndex > this.betCreditList.length - 1) {
            this.toggleIndex = 0;
        }
        this.setBetBytoggleIndex(this.toggleIndex);
    }

    public previous() {
        this.toggleIndex--;
        if (this.toggleIndex < 0) {
            this.toggleIndex = this.betCreditList.length - 1;
        }
        this.setBetBytoggleIndex(this.toggleIndex);
    }



}
