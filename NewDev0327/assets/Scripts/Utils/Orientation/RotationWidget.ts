import { _decorator, Widget } from 'cc';
import { IWindowResize } from './IWindowResize';
import { Orientation } from '../../GameScripts/Definition';
const { ccclass, property } = _decorator;

/**
 * Widget 配置資料類
 * 包含 Widget 組件的所有可配置屬性
 */
@ccclass('WidgetConfig')
export class WidgetConfig {
    @property({ type: Widget.AlignMode, tooltip: '對齊更新模式' })
    alignMode: Widget.AlignMode = Widget.AlignMode.ON_WINDOW_RESIZE;

    // ========== 上邊對齊 ==========
    @property({ tooltip: '是否對齊上邊' })
    isAlignTop: boolean = false;

    @property({ tooltip: '上邊距是否使用百分比（否則使用像素）', visible: function (this: WidgetConfig) { return this.isAlignTop; } })
    isTopPercentage: boolean = false;

    @property({ tooltip: '上邊距數值', visible: function (this: WidgetConfig) { return this.isAlignTop; } })
    top: number = 0;

    // ========== 下邊對齊 ==========
    @property({ tooltip: '是否對齊下邊' })
    isAlignBottom: boolean = false;

    @property({ tooltip: '下邊距是否使用百分比（否則使用像素）', visible: function (this: WidgetConfig) { return this.isAlignBottom; } })
    isBottomPercentage: boolean = false;

    @property({ tooltip: '下邊距數值', visible: function (this: WidgetConfig) { return this.isAlignBottom; } })
    bottom: number = 0;

    // ========== 左邊對齊 ==========
    @property({ tooltip: '是否對齊左邊' })
    isAlignLeft: boolean = false;

    @property({ tooltip: '左邊距是否使用百分比（否則使用像素）', visible: function (this: WidgetConfig) { return this.isAlignLeft; } })
    isLeftPercentage: boolean = false;

    @property({ tooltip: '左邊距數值', visible: function (this: WidgetConfig) { return this.isAlignLeft; } })
    left: number = 0;

    // ========== 右邊對齊 ==========
    @property({ tooltip: '是否對齊右邊' })
    isAlignRight: boolean = false;

    @property({ tooltip: '右邊距是否使用百分比（否則使用像素）', visible: function (this: WidgetConfig) { return this.isAlignRight; } })
    isRightPercentage: boolean = false;

    @property({ tooltip: '右邊距數值', visible: function (this: WidgetConfig) { return this.isAlignRight; } })
    right: number = 0;

    // ========== 水平置中對齊 ==========
    @property({ tooltip: '是否水平置中對齊' })
    isAlignHorizontalCenter: boolean = false;

    @property({ tooltip: '水平置中偏移是否使用百分比（否則使用像素）', visible: function (this: WidgetConfig) { return this.isAlignHorizontalCenter; } })
    isHorizontalCenterPercentage: boolean = false;

    @property({ tooltip: '水平置中偏移數值', visible: function (this: WidgetConfig) { return this.isAlignHorizontalCenter; } })
    horizontalCenter: number = 0;

    // ========== 垂直置中對齊 ==========
    @property({ tooltip: '是否垂直置中對齊' })
    isAlignVerticalCenter: boolean = false;

    @property({ tooltip: '垂直置中偏移是否使用百分比（否則使用像素）', visible: function (this: WidgetConfig) { return this.isAlignVerticalCenter; } })
    isVerticalCenterPercentage: boolean = false;

    @property({ tooltip: '垂直置中偏移數值', visible: function (this: WidgetConfig) { return this.isAlignVerticalCenter; } })
    verticalCenter: number = 0;

    /**
     * 應用配置到 Widget 組件
     */
    applyToWidget(widget: Widget): void {
        // 設置對齊更新模式
        widget.alignMode = this.alignMode;

        // 上邊對齊
        widget.isAlignTop = this.isAlignTop;
        if (this.isTopPercentage) {
            widget.top = this.top / 100; // 百分比需要轉換為 0-1 的小數
        } else {
            widget.top = this.top; // 像素值直接設置
        }

        // 下邊對齊
        widget.isAlignBottom = this.isAlignBottom;
        if (this.isBottomPercentage) {
            widget.bottom = this.bottom / 100;
        } else {
            widget.bottom = this.bottom;
        }

        // 左邊對齊
        widget.isAlignLeft = this.isAlignLeft;
        if (this.isLeftPercentage) {
            widget.left = this.left / 100;
        } else {
            widget.left = this.left;
        }

        // 右邊對齊
        widget.isAlignRight = this.isAlignRight;
        if (this.isRightPercentage) {
            widget.right = this.right / 100;
        } else {
            widget.right = this.right;
        }

        // 水平置中對齊
        widget.isAlignHorizontalCenter = this.isAlignHorizontalCenter;
        if (this.isHorizontalCenterPercentage) {
            widget.horizontalCenter = this.horizontalCenter / 100;
        } else {
            widget.horizontalCenter = this.horizontalCenter;
        }

        // 垂直置中對齊
        widget.isAlignVerticalCenter = this.isAlignVerticalCenter;
        if (this.isVerticalCenterPercentage) {
            widget.verticalCenter = this.verticalCenter / 100;
        } else {
            widget.verticalCenter = this.verticalCenter;
        }

        // 更新對齊
        widget.updateAlignment();
    }
}

@ccclass('RotationWidget')
export class RotationWidget extends IWindowResize {
    @property({ type: WidgetConfig, tooltip: '橫屏時的 Widget 配置' })
    landscapeConfig: WidgetConfig = new WidgetConfig();

    @property({ type: WidgetConfig, tooltip: '豎屏時的 Widget 配置' })
    portraitConfig: WidgetConfig = new WidgetConfig();

    protected widget: Widget = null;

    public onWindowResize(orientation: Orientation): void {
        if (!this.checkWidget()) {
            return;
        }

        if (orientation === Orientation.Landscape) {
            this.landscapeConfig.applyToWidget(this.widget);
        } else {
            this.portraitConfig.applyToWidget(this.widget);
        }
    }

    protected checkWidget(): boolean {
        if (!this.widget) {
            this.widget = this.node.getComponent(Widget);
        }

        return this.widget != null;
    }
}


