import { _decorator, Component, Node, Sprite, Prefab, Layout, Label } from 'cc';
import { LineInfoSprite } from './LineInfoSprite';
import { PrefabInstancePoolManager } from '../tools/PrefabInstancePoolManager';
import { BigWingsSymbol } from '../wheel/BigWingsSymbol';

const { ccclass, property } = _decorator;

@ccclass('LineInfo')
export class LineInfo extends Component {


    @property({ type: Prefab, tooltip: "滾輪內物件 prefab" })
    protected symbolPrefab: Prefab = null;

    private lineImage: LineInfoSprite = null;
    private lineSym: Node = null;
    private label: Label = null;

    private symbolList: Array<BigWingsSymbol> = [];

    start() {
        this.lineImage = this.node.getChildByName('LineImage').getComponent(LineInfoSprite);
        this.lineSym = this.node.getChildByName('sym');
        this.label = this.node.getChildByName('label').getComponent(Label);

        for (let i = 0; i < 5; i++) {
            let symbol: BigWingsSymbol = PrefabInstancePoolManager.instance.takeOut(this.symbolPrefab).getComponent(BigWingsSymbol);
            symbol.changeSymbolID(1)
            symbol.node.scale.set(0.3, 0.3, 1);
            this.symbolList.push(symbol)
            this.lineSym.addChild(symbol.node);
        }
        this.lineSym.getComponent(Layout).spacingX = 170 * 0.3;


    }

    public updateElement(id: number, element: number[], payoff: number): void {
        console.log('id: ' + id + ' element: ' + element + 'payoff: ' + payoff)
        this.lineImage.updateLine(id);

        for (let i = 0; i < 5; i++) {
            this.lineSym.children[i].active = false;
        }

        for (let i = 0; i < element.length; i++) {
            this.lineSym.children[i].active = true;
            this.symbolList[i].changeSymbolID(element[i]);
        }

        this.label.string = '= ' + payoff;


    }

}

