import { _decorator, Button, Component, EditBox, Label, Node, UITransform } from 'cc';
import { IObjPool } from 'db://assets/Scripts/ModuleEntry';
import { UnitTestUINodeListItem } from './UnitTestUINodeListItem';
const { ccclass, property } = _decorator;

@ccclass('UnitTestUIMethodListItem')
export class UnitTestUIMethodListItem extends UnitTestUINodeListItem implements IObjPool {
    @property({ type: EditBox, group: { name: '輸入框', id: '0' } })
    protected editBox: EditBox = null;
    @property({ type: UITransform, group: { name: '輸入框', id: '0' } })
    protected editBoxTransform: UITransform = null;

    @property({ type: Label, group: { name: '輸入框', id: '0' } })
    protected widthLabel: Label = null;
    @property({ type: UITransform, group: { name: '輸入框', id: '0' } })
    protected widthTransform: UITransform = null;

    // ===== IObjPool 方法 =====
    override onObjRecycle(): void {
        super.onObjRecycle();
        this.editBox.node.off(EditBox.EventType.EDITING_DID_ENDED);
    }

    // ===== 對外 API =====
    public override setText(button: string, editBox: string = "", input: boolean = false): void {
        this.buttonLabel.string = button;

        if (input) {
            this.editBox.string = editBox;
        }
        else {
            this.editBox.string = "";
            this.editBox.placeholder = editBox;
        }

        const measureText = button.length > editBox.length ? button : editBox;
        this.widthLabel.string = measureText;
    }

    public override getWidth(): number {
        return Math.max(this.buttonLabelTransform.contentSize.width, this.widthTransform.contentSize.width);
    }

    public override setWidth(width: number): void {
        super.setWidth(width);
        this.editBoxTransform.setContentSize(width + this.buttonPadding, this.buttonTransform.contentSize.y);
    }

    public override bindClick(click: () => void, inputParameter: ((value: string) => void) = null) {
        super.bindClick(click);

        this.editBox.node.off(EditBox.EventType.EDITING_DID_ENDED);
        if (inputParameter !== null) {
            this.editBox.node.on(
                EditBox.EventType.EDITING_DID_ENDED,
                () => {
                    inputParameter(this.editBox.string);
                }
            );
        }
    }
}