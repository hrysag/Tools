import { _decorator, Component, Node } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('shadowFollow_TA')
@executeInEditMode
export class shadowFollow_TA extends Component {
    @property({ type: Node })
    shadow: Node = null!;
    update() {
        this.shadow.scale = this.node.scale;//同步比例
        this.shadow.children[0].scale = this.node.scale;//同步比例
        this.shadow.children[0].angle = this.node.angle;//魚影子物件跟隨魚正向旋轉
        if (this.node.scale.x * this.node.scale.y < 0)
            this.shadow.angle = this.node.angle;//影子物件跟隨魚正向旋轉
        else
            this.shadow.angle = -this.node.angle;//影子物件跟隨魚反向旋轉
    }
}