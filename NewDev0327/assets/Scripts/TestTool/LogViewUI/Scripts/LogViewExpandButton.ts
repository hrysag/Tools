import { _decorator, Button, Component, EventTouch, Label, Layout, RichText, UITransform } from 'cc';
import { IObjPool } from '../../../Utils/Core';
import { ExpandButtonClickData } from './LogViewDefine';
import { IVirtualScrollViewItem } from './VirtualScrollView/IVirtualScrollViewItem';
import { addEventHandlerToButton } from '../../../Utils/Core/CCExtension';
const { ccclass, property } = _decorator;

@ccclass('LogViewExpandButton')
export class LogViewExpandButton extends Component implements IObjPool, IVirtualScrollViewItem {
    @property({ type: Button })
    protected button: Button = null;
    @property({ type: Label })
    protected spreadLabel: Label = null;
    @property({ type: RichText })
    protected nameLabel: RichText = null;

    private _isSpread: boolean = false;
    public get isExpanding(): boolean {
        return this._isSpread;
    }
    public set isExpanding(value: boolean) {
        this._isSpread = value;
        this.setSpreadLabel(value);
    }

    public get canExpand(): boolean {
        return this.spreadLabel.string !== '';
    }
    public index: number = 0;
    public onButtonClickCallback: (data: ExpandButtonClickData) => void = null;

    // ===== IObjPool 方法 =====
    public onObjLoad(): void {
        this.setVisible(false);
        // 必須直接從 CCExtension 引用，否則在測試站作為 bundle 載入時會抓不到
        addEventHandlerToButton(this.button.node, this, 'onButtonClick');
    }
    public onObjInstance(): void {
        this.setVisible(true);
    }
    public onObjRecycle(): void {
        this.setVisible(false);
        this.onButtonClickCallback = null;
    }
    public onObjUnLoad(): void {
        this.node.destroy();
    }

    public setVisible(value: boolean): void {
        // 關掉 render 組件取代設置 active，避免 layout 重排
        this.button.enabled = value;
        this.nameLabel.enabled = value;
        this.spreadLabel.enabled = value;

        this.node.name = value ? `LogViewExpandButton*` : `LogViewExpandButton`;
    }

    public setLabel(name: string, valueString: string): void {
        this.nameLabel.string = `${name}   <color=#ffff00>${valueString}</color>`;
    }

    public hideSpreadLabel(): void {
        this.spreadLabel.string = '';
    }

    protected setSpreadLabel(isSpread: boolean): void {
        this.spreadLabel.string = isSpread ? '-' : '+';
    }

    protected onButtonClick(e: EventTouch): void {
        if (this.canExpand) {
            this.isExpanding = !this.isExpanding;
            const data = new ExpandButtonClickData();
            data.isExpand = this.isExpanding;
            data.index = this.index;
            this.onButtonClickCallback?.(data);
        }
    }

    public getContentWidth(): number {
        // 有需要拿contentSize時，才強刷Layout
        this.button.getComponent(Layout).updateLayout();
        return this.button.getComponent(UITransform).contentSize.width;
    }

    public debugGetText(): string {
        return this.nameLabel.string;
    }
}
