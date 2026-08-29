import { _decorator, Component, ScrollView, UITransform } from 'cc';
import { IVirtualScrollViewItem } from './IVirtualScrollViewItem';
import { addEventHandlerToScrollEvent } from '../Util/LogViewUtility';
const { ccclass, property } = _decorator;

@ccclass('VirtualScrollView')
export abstract class VirtualScrollView<Item extends Component & IVirtualScrollViewItem> extends ScrollView {
    protected itemMap: Map<number, Item> = new Map();
    protected displayIndexes: number[] = [];

    protected oldContentY: number = 0;
    protected scrollThreshold: number = 5;

    protected layerOffset: number = 20;
    protected contentPaddingTop: number = 20;
    protected itemHeight: number = 40;

    protected contentUITransform: UITransform = null;

    public init(): void {
        this.contentUITransform = this.content.getComponent(UITransform);
        addEventHandlerToScrollEvent(this.node, this, 'onScrollEvent');
        this.oldContentY = this.content.position.y;
        this.updateContentSize();
    }

    protected onScrollEvent(scrollView: ScrollView): void {
        // 設定滾動閥值，降低檢查頻率
        if (Math.abs(this.content.position.y - this.oldContentY) < this.scrollThreshold) {
            return;
        }
        this.oldContentY = this.content.position.y;
        this.checkAllVisible(true);
    }

    protected updateContentSize(): void {
        const width = this.contentUITransform.contentSize.width;
        const height = this.contentPaddingTop + this.displayIndexes.length * this.itemHeight;
        this.contentUITransform.setContentSize(width, height);
    }

    protected checkAllVisible(isScrolling: boolean = false): void {
        const { startIndex, endIndex } = this.getRangeIndex();

        for (let displayIndex = startIndex; displayIndex <= endIndex; displayIndex++) {
            const dataIndex = this.displayIndexes[displayIndex];
            const button = this.itemMap.get(dataIndex);
            if (!button) {
                this.instantiateItem(dataIndex);
                this.updateContentWidth([dataIndex]);
            }
        }

        if (isScrolling) {
            const topDataIndex = this.displayIndexes[startIndex - 1];
            const bottomDataIndex = this.displayIndexes[endIndex + 1];
            this.destroyItem(topDataIndex);
            this.destroyItem(bottomDataIndex);
        } else {
            for (let displayIndex = 0; displayIndex < startIndex; displayIndex++) {
                const dataIndex = this.displayIndexes[displayIndex];
                this.destroyItem(dataIndex);
            }
            for (let displayIndex = endIndex + 1; displayIndex < this.displayIndexes.length; displayIndex++) {
                const dataIndex = this.displayIndexes[displayIndex];
                this.destroyItem(dataIndex);
            }
        }
    }

    protected getRangeIndex(): { startIndex: number; endIndex: number } {
        const contentTop = this.content.position.y + this.view.contentSize.height / 2;
        const contentBottom = this.content.position.y - this.view.contentSize.height / 2;
        const start = Math.min(contentTop, contentBottom) - this.contentPaddingTop;
        const end = Math.max(contentTop, contentBottom) - this.contentPaddingTop;
        let startIndex = Math.floor(start / this.itemHeight);
        let endIndex = Math.ceil(end / this.itemHeight);
        startIndex = Math.max(startIndex, 0);
        endIndex = Math.min(endIndex, this.displayIndexes.length - 1);
        return { startIndex, endIndex };
    }

    protected updateDisplayIndexes(indexes: number[]): void {
        this.displayIndexes.push(...indexes);
        this.updateContentSize();
        this.checkAllVisible();
    }

    protected updateDisplayPos(baseDisplayIndex: number): void {
        const { endIndex } = this.getRangeIndex();
        for (let displayIndex = baseDisplayIndex + 1; displayIndex <= endIndex; displayIndex++) {
            const dataIndex = this.displayIndexes[displayIndex];
            const item = this.itemMap.get(dataIndex);
            if (item) {
                const y = -this.contentPaddingTop - this.itemHeight * displayIndex;
                item.node.setPosition(item.node.position.x, y, 0);
            }
        }
    }

    protected updateContentWidth(indexes: number[]): void {

    }

    protected abstract instantiateItem(dataIndex: number): Item;
    protected abstract destroyItem(dataIndex: number): void;
}