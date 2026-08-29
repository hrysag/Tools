import { _decorator, Component, Node, v3 } from 'cc';
import { SpineController } from '../../MyUtils/AnimationSystem/Components/SpineController';
const { ccclass, property } = _decorator;

@ccclass('ConnectBoxSpineComponent')
export class ConnectBoxSpineComponent extends SpineController {

    //--在wild狀態時,不同的wild會在scale上面有不同的表現
    public override resetData(): void {
        let parentNode: Node = this.node.parent;
        parentNode.setScale(v3(1, 1, 1));
        super.resetData();
    }
}


