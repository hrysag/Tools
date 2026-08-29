import { _decorator, Component, Node, tween, Vec3 } from 'cc';
import { UnitTest } from 'db://assets/Scripts/ModuleEntry';
const { ccclass, property } = _decorator;

@ccclass('Move')
export class Move extends Component {
    @property(Node)
    public targetNode: Node = null!;

    @UnitTest(300, 300)
    public moveXRange(value: number = 300, value2: number = 300) {
        const pos = this.targetNode.position;

        // 從 X -300 移動到 X +300，Y 不變
        tween(this.targetNode)
            .to(0.5, { position: new Vec3(-value, -value2, pos.z) })
            .to(0.5, { position: new Vec3(value, value2, pos.z) })
            .start();
    }


    @UnitTest()
    public moveXRange2(value: number = 50) {
        const pos = this.targetNode.position;

        // 從 X -300 移動到 X +300，Y 不變
        tween(this.targetNode)
            .to(0.5, { position: new Vec3(pos.x, -value, pos.z) })
            .to(0.5, { position: new Vec3(pos.x, value, pos.z) })
            .start();
    }
}