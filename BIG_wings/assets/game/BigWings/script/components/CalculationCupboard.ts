import { _decorator, Component, math, Node, Prefab, tween, Vec3 } from 'cc';
import { symbolSet_TA } from '../../../../techArt/game/mahjong/script/symbolSet_TA';
import { PrefabInstancePoolManager } from '../tools/PrefabInstancePoolManager';
import { BigWingsSymbol } from '../wheel/BigWingsSymbol';
import { UtilsKit } from '../lib/UtilsKit';
const { ccclass, property } = _decorator;

export enum WinLineType {
    FLOWER = "flower", // 補花
    KONG = "kong", // 槓
    PONG = "pong", // 碰
    PAIR = "pair", // 眼
}

@ccclass('CalculationCupboard')
export class CalculationCupboard extends Component {
    
    @property({ type: Node, tooltip: "free置牌區" })
    private freeArea: Node = null;
    @property({ type: Node, tooltip: "花牌置牌區" })
    private flowerArea: Node = null;
    @property({ type: Node, tooltip: "碰/槓/眼睛置牌區" })
    private setArea: Node = null;
    @property({ type: Prefab, tooltip: "(算牌區)牌型 prefab" })
    private symbolSet: Prefab = null;

    /**
     * 放置算牌區
     * @param typeName 牌型名稱
     * @param elementID symbol ID
     * @param symbols 中獎 symbol
     * @returns 
     */
    public async place(typeName: string, elementID: number, symbols: Array<BigWingsSymbol>) {
        let symbolNode: Array<Node> = [];//紀錄symbol移動的位置
        let len: number = symbols.length;
        let symbolSetInst: Node
       
        //判斷是否是中途槓牌(不新增牌組)
        if (typeName === WinLineType.KONG && symbols.length === 1) {
            //中途槓牌類型(要移到置牌區)
            let len: number = this.setArea.children.length;
            for (let i:number = 0; i < len; i++) {
                symbolSetInst = this.setArea.children[i];
                if (symbolSetInst.getComponent(symbolSet_TA).symID === elementID) {
                    symbolNode.push(symbolSetInst.children[3]);//要移動的牌型位置
                    symbolSetInst.getComponent(symbolSet_TA).tileNum = 4;
                    break;
                }
            }
        } else {
            symbolSetInst = PrefabInstancePoolManager.instance.takeOut(this.symbolSet);
            switch (typeName) {
                // case 'free':
                //     instSymbolSet.parent = this.freeArea;//免費置牌區
                //     this.scatterSym = [];//清空scatter節點紀錄資料(全刷掉才要清空)
                //     break;
                case WinLineType.FLOWER:
                    symbolSetInst.parent = this.flowerArea; //花牌置牌區
                    break;
                case WinLineType.KONG:
                case WinLineType.PONG:
                case WinLineType.PAIR:
                    symbolSetInst.parent = this.setArea; //眼、碰、槓牌置牌區
                    break;
            }
            symbolSetInst.getComponent(symbolSet_TA).init(symbols.length, elementID); //初始化(張數，symbol編號)
            symbolSetInst.getComponent(symbolSet_TA).setType(); //設置牌型與貼圖
            for (let j = 0; j < len; j++) {
                symbolNode.push(symbolSetInst.children[j]);//要移動的牌型位置
            }
        }
        
        let winScale: number = 0.28; //移動到置牌區的尺寸
        for (let i = 0; i < len; i++) {
            let symbolWinNode: Node = symbols[i].node;

            let m1: math.Mat4 = symbolWinNode.parent.worldMatrix;
            let m2: math.Mat4 = symbolNode[i].parent.worldMatrix.clone().invert();
            let m: math.Mat4 = m2.multiply(m1);
            Vec3.transformMat4(symbolWinNode.position, symbolWinNode.position, m);

            symbolWinNode.parent = symbolNode[i].parent;

            tween(symbolWinNode).to(0.5, { position: symbolNode[i].getPosition() }, { easing: 'quartOut' }).start();
            tween(symbolWinNode).to(0.5, { scale: new Vec3(winScale + 0.03, winScale + 0.03, 1) }, { easing: 'quartOut' })
                .then(tween(symbolWinNode).to(0.2, { scale: new Vec3(winScale, winScale, 1) }, { easing: 'sineOut' }))
                .call(() => {
                    symbolWinNode.getComponent(BigWingsSymbol).reset();
                    symbolWinNode.scale = new Vec3(1, 1, 1);
                    symbolWinNode.parent = null;
                    symbolWinNode.active = false;
                }).start();
        }

        await UtilsKit.Defer(700);

        symbolSetInst.getComponent(symbolSet_TA).showChildren();
    }

    /**
     * 清除算牌區
     */
    public clean() {
        while (this.setArea.children.length > 0) {
            let symbolSetInst: Node = this.setArea.children[0];
            this.setArea.removeChild(symbolSetInst);
            PrefabInstancePoolManager.instance.pushIn(symbolSetInst);
        }

        while (this.flowerArea.children.length > 0) {
            let symbolSetInst: Node = this.flowerArea.children[0];
            this.flowerArea.removeChild(symbolSetInst);
            PrefabInstancePoolManager.instance.pushIn(symbolSetInst);
        }
    }

    /**
     * 是否聽牌
     * @returns 是/否
     */
    public isReady(): boolean {
        return this.setArea.children.length == 4;
    }
}

