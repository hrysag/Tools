import { _decorator, CCInteger, Animation, AnimationClip, CCFloat, Color, Component, Graphics, Node, UIOpacity, UITransform, Vec3, Prefab } from 'cc';

import { BigWingsWheel } from './BigWingsWheel';
import { BigWingsRoller } from './BigWingsRoller';
import { BigWingsSymbol } from './BigWingsSymbol';
import { PrefabInstancePoolManager } from '../tools/PrefabInstancePoolManager';

const { ccclass, property } = _decorator;

@ccclass('SymbolSpine')
export class SymbolSpine extends Component {

    @property({ type: Prefab, tooltip: "滾輪內物件 prefab" })
    protected symbolPrefab: Prefab = null;

    public symArr: BigWingsSymbol[] = [];

    onLoad(): void {
        const wheelCount = this.node.parent.getComponent(BigWingsRoller).arrWheel.length;
        const mainSymCount = this.node.parent.getComponentInChildren(BigWingsWheel).mainSymbolAmount;
        for (let i = 0; i < wheelCount; i++) {
            for (let j = 0; j < mainSymCount; j++) {
                let sym: BigWingsSymbol = PrefabInstancePoolManager.instance.takeOut(this.symbolPrefab).getComponent(BigWingsSymbol);
                sym.changeSymbolID(0);
                this.node.addChild(sym.node);
                sym.node.setPosition((i - 2) * 215, (3 - j + 0.5) * sym.height - 438);
                this.symArr.push(sym);
                sym.node.active = false;
            }
        }

        let wildArr: BigWingsSymbol[] = [];
        for (let i = 0; i < wheelCount; i++) {

            let sym: BigWingsSymbol = PrefabInstancePoolManager.instance.takeOut(this.symbolPrefab).getComponent(BigWingsSymbol);
            sym.changeSymbolID(13);
            this.node.addChild(sym.node);
            sym.node.setPosition((i - 2) * 215, -37);
            wildArr.push(sym);
            sym.node.active = false;
        }

        this.node.parent.getComponent(BigWingsRoller).setSymSpine(this.symArr, wildArr);

    }
}


