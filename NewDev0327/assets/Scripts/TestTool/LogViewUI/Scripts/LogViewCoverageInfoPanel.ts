import { _decorator, instantiate, Prefab, Node } from 'cc';
import { ExpandButtonClickData, VirtualCoverageInfoData } from './LogViewDefine';
import { Debug, ObjPoolMgr } from '../../../Utils/Core';
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

@ccclass('LogViewCoverageInfoPanel')
export class LogViewCoverageInfoPanel extends VirtualScrollView<LogViewExpandButton> {
    @property({ type: Prefab })
    protected buttonPrefab: Prefab = null;

    // 物件池
    protected expandButtonPool: ExpandButtonPool = null;
    protected virtualCoverageInfoList: VirtualCoverageInfoData[] = [];
    protected registeredClassList: string[] = [];

    public init(): void {
        super.init();
        this.expandButtonPool = new ExpandButtonPool(this.buttonPrefab, this.content);
    }

    public registerClass(target: string, functionNameList: string[]): void {
        if (this.registeredClassList.includes(target)) {
            Debug.LogError(`class ${target} 已被註冊過`);
            return;
        }
        this.registeredClassList.push(target);

        const classData = new VirtualCoverageInfoData();
        classData.name = target;
        classData.value = 0;
        classData.index = this.virtualCoverageInfoList.length;
        classData.isClass = true;
        classData.isExpanding = false;
        classData.isShowing = true;
        this.virtualCoverageInfoList.push(classData);

        functionNameList.forEach((name) => {
            const virtualCoverageInfoData = new VirtualCoverageInfoData();
            virtualCoverageInfoData.name = name;
            virtualCoverageInfoData.value = 0;
            virtualCoverageInfoData.index = this.virtualCoverageInfoList.length;
            virtualCoverageInfoData.isClass = false;
            virtualCoverageInfoData.isExpanding = false;
            virtualCoverageInfoData.isShowing = false;
            this.virtualCoverageInfoList.push(virtualCoverageInfoData);
        });

        this.updateDisplayIndexes([classData.index]);
    }

    protected override updateDisplayIndexes(indexes: number[], parentIndex: number = -1, isFold: boolean = false): void {
        if (parentIndex === -1) {
            // 新增資料時的更新
            this.displayIndexes.push(...indexes);
            this.updateContentSize();
            this.checkAllVisible();
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
        }
        this.itemMap.forEach((button, key) => {
            const displayIndex = this.displayIndexes.indexOf(key);
            button.node.setSiblingIndex(displayIndex);
        });
    }

    /**
     * 實例化方法資訊按鈕
     * @param dataIndex 按鈕數據
     * @param siblingIndex 插入位置索引
     * @returns 
     */
    protected instantiateItem(dataIndex: number): LogViewExpandButton {
        const virtualCoverageInfoData = this.virtualCoverageInfoList[dataIndex];
        const displayIndex = this.displayIndexes.indexOf(dataIndex);
        const button = this.expandButtonPool.instance();
        /* ---------- 設置組件 ---------- */

        if (virtualCoverageInfoData.isClass) {
            const coverage = `${virtualCoverageInfoData.value.toFixed(2)}%`;
            button.setLabel(virtualCoverageInfoData.name, coverage);
            button.isExpanding = virtualCoverageInfoData.isExpanding;
        } else {
            button.setLabel(virtualCoverageInfoData.name, virtualCoverageInfoData.value.toString());
            button.hideSpreadLabel();
        }
        button.index = virtualCoverageInfoData.index;
        button.onButtonClickCallback = this.onFunctionButtonClick.bind(this);
        this.itemMap.set(virtualCoverageInfoData.index, button);
        /* ---------- 設置組件 ---------- */

        /* ---------- 設置節點 ---------- */
        const x = virtualCoverageInfoData.isClass ? 0 : this.layerOffset;
        const y = -this.contentPaddingTop - this.itemHeight * displayIndex;
        button.node.setPosition(x, y, 0);
        // 插入到最後一個位置
        button.node.setSiblingIndex(this.content.children.length);
        /* ---------- 設置節點 ---------- */
        return button;
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
        const parent = this.virtualCoverageInfoList[parentIndex];
        parent.isExpanding = data.isExpand;

        const addedIndexList: number[] = [];
        for (let i = parentIndex + 1; i < this.virtualCoverageInfoList.length; i++) {
            const next = this.virtualCoverageInfoList[i];
            if (!next.isClass) {
                next.isShowing = true;
                addedIndexList.push(next.index);
            } else {
                break;
            }
        }

        this.updateDisplayIndexes(addedIndexList, parentIndex);
    }

    protected onFoldLogViewData(data: ExpandButtonClickData): void {
        const parentIndex = data.index;
        const parent = this.virtualCoverageInfoList[parentIndex];
        parent.isExpanding = false;

        const destroyIndexList: number[] = [];
        for (let i = parentIndex + 1; i < this.virtualCoverageInfoList.length; i++) {
            const next = this.virtualCoverageInfoList[i];
            if (!next.isClass) {
                next.isShowing = false;
                destroyIndexList.push(next.index);
            } else {
                break;
            }
        }

        this.updateDisplayIndexes(destroyIndexList, parentIndex, true);
    }

    protected destroyItem(index: number): void {
        const button = this.itemMap.get(index);
        if (button) {
            this.expandButtonPool.destroy(button);
            this.itemMap.delete(index);
        }
    }

    public addFunctionExecutedCount(target: string, functionName: string): void {
        const index = this.virtualCoverageInfoList.findIndex((item) => item.name === target);
        const parent = this.virtualCoverageInfoList[index];
        let totalFunctionCount: number = 0;
        let executedFunctionCount: number = 0;
        for (let i = index + 1; i < this.virtualCoverageInfoList.length; i++) {
            const next = this.virtualCoverageInfoList[i];
            if (next.isClass) {
                break;
            }
            if (next.name === functionName) {
                next.value++;
            }
            if (next.value !== 0) {
                executedFunctionCount++;
            }
            totalFunctionCount++;
        }
        parent.value = (executedFunctionCount / totalFunctionCount) * 100;
    }

    public updateList(): void {
        this.itemMap.forEach((button, key) => {
            const virtualCoverageInfoData = this.virtualCoverageInfoList[key];
            if (virtualCoverageInfoData.isClass) {
                const coverage = `${virtualCoverageInfoData.value.toFixed(2)}%`;
                button.setLabel(virtualCoverageInfoData.name, coverage);
            } else {
                button.setLabel(virtualCoverageInfoData.name, virtualCoverageInfoData.value.toString());
            }
        });
    }
}
