import { _decorator, instantiate, Node, Prefab } from 'cc';
import { ObjPoolMgr } from '../../../Utils/Core';
import { ExpandButtonClickData, VirtualFunctionLogData } from './LogViewDefine';
import { VirtualScrollView } from './VirtualScrollView/VirtualScrollView';
import { LogViewExpandButton } from './LogViewExpandButton';
const { ccclass, property } = _decorator;

class ExpandButtonPool extends ObjPoolMgr<LogViewExpandButton> {
    private prefab: Prefab;
    private parent: Node;

    constructor(prefab: Prefab, parent: Node, initCount: number = 5) {
        super();
        this.prefab = prefab;
        this.parent = parent;
        this.init(initCount, this.createPoolObject.bind(this));
    }

    private createPoolObject(): LogViewExpandButton {
        const node = instantiate(this.prefab);
        node.parent = this.parent;
        return node.getComponent(LogViewExpandButton);
    }
}

@ccclass('LogViewFunctionStackPanel')
export class LogViewFunctionStackPanel extends VirtualScrollView<LogViewExpandButton> {
    @property({ type: Prefab })
    protected buttonPrefab: Prefab = null;

    // 物件池
    protected expandButtonPool: ExpandButtonPool = null;
    // 完整的 virtualFunctionLogData 列表
    protected virtualFunctionLogDataList: VirtualFunctionLogData[] = [];

    public init(): void {
        super.init();
        this.expandButtonPool = new ExpandButtonPool(this.buttonPrefab, this.content);
    }

    public addVirtualLogData(virtualFunctionLogDataList: VirtualFunctionLogData[]): void {
        this.virtualFunctionLogDataList.push(...virtualFunctionLogDataList);

        const baseLayerList = virtualFunctionLogDataList.filter((item) => item.layer === 0);
        const baseLayerIndexList = baseLayerList.map((item) => item.index);
        this.updateDisplayIndexes(baseLayerIndexList);
    }

    protected override updateDisplayIndexes(indexes: number[], parentIndex: number = -1, isFold: boolean = false): void {
        if (parentIndex === -1) {
            // 新增資料時的更新
            this.displayIndexes.push(...indexes);
            this.updateContentSize();
            this.checkAllVisible();
            if (this.canAutoScrollToBottom(indexes.length)) {
                this.forceScrollToBottom();
            }
            this.updateContentWidth(indexes);
        } else {
            const parentDisplayIndex = this.displayIndexes.indexOf(parentIndex);
            if (isFold) {
                // 摺疊操作時的更新
                this.displayIndexes = this.displayIndexes.filter((index) => !indexes.includes(index));
                indexes.forEach((index) => {
                    this.destroyItem(index);
                });
            } else {
                // 展開操作時的更新
                this.displayIndexes.splice(parentDisplayIndex + 1, 0, ...indexes);
            }
            this.updateContentSize();
            this.updateDisplayPos(parentDisplayIndex);
            this.checkAllVisible();
            this.updateContentWidth();
        }
        this.itemMap.forEach((button, key) => {
            const displayIndex = this.displayIndexes.indexOf(key);
            button.node.setSiblingIndex(displayIndex);
        });
    }

    /**
     * 實例化方法資訊按鈕
     * @param dataIndex 虛擬列表數據索引
     * @returns 
     */
    protected instantiateItem(dataIndex: number): LogViewExpandButton {
        const virtualFunctionLogData = this.virtualFunctionLogDataList[dataIndex];
        const displayIndex = this.displayIndexes.indexOf(dataIndex);
        const button = this.expandButtonPool.instance();
        /* ---------- 設置組件 ---------- */
        const targetWithFunction = `${virtualFunctionLogData.target}.${virtualFunctionLogData.function}`;
        const costTime = `${virtualFunctionLogData.cost}ms`;
        button.setLabel(targetWithFunction, costTime);
        if (!virtualFunctionLogData.canExpand) {
            button.hideSpreadLabel();
        } else {
            button.isExpanding = virtualFunctionLogData.isExpanding;
        }
        button.index = virtualFunctionLogData.index;
        button.onButtonClickCallback = this.onFunctionButtonClick.bind(this);
        this.itemMap.set(virtualFunctionLogData.index, button);
        /* ---------- 設置組件 ---------- */

        /* ---------- 設置節點 ---------- */
        const x = virtualFunctionLogData.layer * this.layerOffset;
        const y = -this.contentPaddingTop - this.itemHeight * displayIndex;
        button.node.setPosition(x, y, 0);
        // 插入到最後一個位置
        button.node.setSiblingIndex(this.content.children.length);
        /* ---------- 設置節點 ---------- */
        return button;
    }

    protected destroyItem(dataIndex: number): void {
        const button = this.itemMap.get(dataIndex);
        if (button) {
            this.expandButtonPool.destroy(button);
            this.itemMap.delete(dataIndex);
        }
    }

    protected onFunctionButtonClick(data: ExpandButtonClickData): void {
        if (data.isExpand) {
            this.onExpandLogViewData(data);
        } else {
            this.onFoldLogViewData(data);
        }
    }

    protected onExpandLogViewData(data: ExpandButtonClickData): void {
        const parentIndex = data.index;
        const parent = this.virtualFunctionLogDataList[parentIndex];
        parent.isExpanding = true;

        const addedIndexList: number[] = [];
        let currentLayer = parent.layer + 1;
        for (let i = parentIndex + 1; i < this.virtualFunctionLogDataList.length; i++) {
            const next = this.virtualFunctionLogDataList[i];
            if (next.layer <= parent.layer) {
                // next.layer 數字小於等於 parent.layer => 和當前操作的按鈕同層級或更上級的資料，不可能被展開
                break;
            } else if (next.layer <= currentLayer) {
                // next.layer 數字小於等於 currentLayer => 需要展開的子layer已檢查完成
                // 重置 currentLayer 並重新判斷 isExpanding
                currentLayer = next.layer;
                next.isShowing = true;
                if (next.isExpanding) {
                    currentLayer++;
                }
                addedIndexList.push(next.index);
            }
        }
        this.updateDisplayIndexes(addedIndexList, parentIndex);
    }

    protected onFoldLogViewData(data: ExpandButtonClickData): void {
        const parentIndex = data.index;
        const parent = this.virtualFunctionLogDataList[parentIndex];
        parent.isExpanding = false;

        const destroyIndexList: number[] = [];
        for (let i = parentIndex + 1; i < this.virtualFunctionLogDataList.length; i++) {
            const next = this.virtualFunctionLogDataList[i];
            if (next.isShowing && next.layer > parent.layer) {
                next.isShowing = false;
                destroyIndexList.push(next.index);
            } else if (next.layer <= parent.layer) {
                // next.layer 數字小於等於 parent.layer => 和當前操作的按鈕同層級或更上級的資料，不可能被折疊
                break;
            }
        }

        this.updateDisplayIndexes(destroyIndexList, parentIndex, true);
    }

    protected canAutoScrollToBottom(addCount: number): boolean {
        const currentY = this.getScrollOffset().y;
        const maxScrollY = this.getMaxScrollOffset().y;
        const isScrolling = this.isScrolling();

        return !isScrolling && maxScrollY - currentY < this.itemHeight * (addCount + 2);
    }

    protected forceScrollToBottom(): void {
        this.stopAutoScroll();
        this.scrollToBottom(0.25);
    }

    protected override updateContentWidth(newDataIndexes: number[] = []): void {
        let width = this.contentUITransform.contentSize.width;
        if (newDataIndexes.length === 0) {
            const { startIndex, endIndex } = this.getRangeIndex();
            newDataIndexes = this.displayIndexes.slice(startIndex, endIndex + 1);
            width = 0;
        }

        newDataIndexes.forEach((index) => {
            const button = this.itemMap.get(index);
            if (button) {
                const buttonTotalWidth = button.node.position.x + button.getContentWidth();
                width = Math.max(width, buttonTotalWidth);
            }
        });
        const height = this.contentUITransform.contentSize.height;
        this.contentUITransform.setContentSize(width, height);
    }
}
