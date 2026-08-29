import { _decorator, Component, Node, Prefab } from 'cc';
import { AnimationPrefabPropertyDef } from './Definitions/AnimationPrefabPropertyDef';
const { ccclass, property } = _decorator;

@ccclass('PrefabAdapter')

export class PrefabAdapter {
    @property({ type: [AnimationPrefabPropertyDef], visible: true, displayName: 'Prefab List', tooltip: '塞入尚未實體化的prefab,依照key當作索引' })
    private _prefabForPropertyList: AnimationPrefabPropertyDef[] = [];

    get prefabForPropertyList(): AnimationPrefabPropertyDef[] {
        return this._prefabForPropertyList;
    }
}