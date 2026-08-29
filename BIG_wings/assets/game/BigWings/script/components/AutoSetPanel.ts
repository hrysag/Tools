import { _decorator, Component, Event, EventHandler, js, Label, Node, Toggle } from 'cc';
import { BaseAutoSet } from './BaseAutoSet';
const { ccclass, property } = _decorator;

@ccclass('AutoSetPanel')
export class AutoSetPanel extends BaseAutoSet {

    private arrToggle: Array<Toggle> = [];

    start() {
        this.init();
        console.log('start');
    }

    onEnable() {
        console.log('onEnable');
        this._currentAutoNumber = 0;

        let len: number = this.arrToggle.length;
        for (let i: number = 0; i < len; i++) {
            this.arrToggle[i].isChecked = false;
        }

        if (this._currentAutoNumberNode) {
            const lableNode: Node = this._currentAutoNumberNode.getChildByName("label");
            lableNode.active = false;
        }
    }

    private init() {
        const content: Node = this.node.getChildByName("content");
        const autoToggle: Node = content.getChildByName("autoToggle");
        console.log("init")
        
        let len: number = autoToggle.children.length;
        console.log(len)
        for (let i: number = 0; i < len; i++) {
            let toggleNode: Node = autoToggle.children[i];
            let toggle: Toggle = toggleNode.getComponent(Toggle);
            let labelNode: Node = toggleNode.getChildByName("label");
            let autoNumber: string;
            if (labelNode) {
                autoNumber = labelNode.getComponent(Label).string;
            } else {
                autoNumber = "-1"; // which means infinity;
            }
            console.log(toggle)
            toggle.node.on("click", () => { 
                this.clickTogglt(toggle, autoNumber) })
            this.arrToggle.push(toggle);
        }
    }


    private clickTogglt(toggle: Toggle, autoNumber: string) {
        if (toggle.isChecked) {
            this._currentAutoNumber = Number(autoNumber);
        } else {
            this._currentAutoNumber = 0;
        }

        if (this._currentAutoNumberNode) {
            const lableNode: Node = this._currentAutoNumberNode.getChildByName("label");
            if (this._currentAutoNumber >= 0) {
                lableNode.active = true;
                lableNode.getComponent(Label).string = this._currentAutoNumber.toString();
            } else {
                lableNode.getComponent(Label).string = "@";
            }
        }
    }
}


