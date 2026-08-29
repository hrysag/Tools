import { _decorator, Component, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PrefabListReference')
export class PrefabListReference extends Component {
    @property([Prefab])
    prefabList: Prefab[] = [];
}


