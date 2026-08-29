import { _decorator, Component, Node, Size, UITransform } from 'cc';
import { AdaptWindowSize } from 'db://assets/Scripts/Utils/AdaptWindowSize';
const { ccclass, property } = _decorator;

@ccclass('AutoBGScaler')
export class AutoBGScaler extends Component {
    @property({ type: AdaptWindowSize, visible: true })
    public WindowAdapter: AdaptWindowSize | null = null;

    @property({ type: Node, visible: true })
    public LandscapeNode: Node | null = null;

    @property({ type: Node, visible: true })
    public PortraitNode: Node | null = null;

    start() {
        this.WindowAdapter?.addResizeListener(this.onResize.bind(this));
    }

    onDestroy() {
        this.WindowAdapter?.removeResizeListener(this.onResize.bind(this));
    }

    onResize(newSize: Size) {
        let activeNode = this.LandscapeNode;
        if (newSize.width > newSize.height) {
            this.LandscapeNode?.setActive(true);
            this.PortraitNode?.setActive(false);
        } else {
            if (this.PortraitNode) {
                this.PortraitNode?.setActive(true);
                this.LandscapeNode?.setActive(false);
                activeNode = this.PortraitNode;
            }
        }

        const widthRatio = newSize.width / activeNode!.getComponent(UITransform).width;
        const heightRatio = newSize.height / activeNode!.getComponent(UITransform).height;
        const scale = Math.max(widthRatio, heightRatio);
        activeNode.setScale(scale, scale, 1);
    }
}


