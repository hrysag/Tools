import { _decorator, Button, CCFloat, Component, Label, Node, UITransform } from 'cc';
import { IObjPool } from 'db://assets/Scripts/ModuleEntry';
const { ccclass, property } = _decorator;

@ccclass('UnitTestUINodeListItem')
export class UnitTestUINodeListItem extends Component implements IObjPool {
    @property({ type: Button, group: { name: '按鈕', id: '0' } })
    protected button: Button = null;
    @property({ type: UITransform, group: { name: '按鈕', id: '0' } })
    protected buttonTransform: UITransform = null;
    @property({ type: CCFloat, group: { name: '按鈕', id: '0' } })
    protected buttonPadding: number = 10;

    @property({ type: Label, group: { name: '按鈕', id: '0' } })
    protected buttonLabel: Label = null;
    @property({ type: UITransform, group: { name: '按鈕', id: '0' } })
    protected buttonLabelTransform: UITransform = null;

    // ===== IObjPool 方法 =====
    onObjLoad(): void {
        this.node.active = false;
    }
    onObjInstance(): void {
        this.node.active = true;
        this.node.setSiblingIndex(this.node.parent.children.length - 1);
    }
    onObjRecycle(): void {
        this.node.active = false;
        this.button.node.off(Button.EventType.CLICK);
    }
    onObjUnLoad(): void {
        this.node.destroy();
    }

    // ===== 對外 API =====
    public setText(text: string): void {
        this.buttonLabel.string = text;
    }

    public getWidth(): number {
        return this.buttonLabelTransform.contentSize.width;
    }

    public setWidth(width: number): void {
        this.buttonTransform.setContentSize(width + this.buttonPadding, this.buttonTransform.contentSize.y);
    }

    public bindClick(callback: () => void) {
        this.button.node.off(Button.EventType.CLICK);
        this.button.node.on(Button.EventType.CLICK, callback);
    }
}


