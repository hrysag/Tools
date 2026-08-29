import { _decorator, Button, Camera, CCFloat, Component, director, EditBox, EventMouse, Input, input, instantiate, Label, Mask, Node, Prefab, ScrollView, UITransform, Vec2, Vec3 } from 'cc';
import { IObjPool, IWindowResize, ObjPoolMgr, Orientation, PropertyTestButton, TestScriptUnit, UnitTestComponent, Utility } from 'db://assets/Scripts/ModuleEntry';
import { UnitTestUINodeListItem } from './UnitTestUINodeListItem';
import { UnitTestUIMethodListItem } from './UnitTestUIMethodListItem';
const { ccclass, property } = _decorator;

class UnitTestUINodeListItemPool extends ObjPoolMgr<UnitTestUINodeListItem> {
    private prefab: Prefab;
    private parent: Node;

    constructor(prefab: Prefab, parent: Node, initCount: number = 5) {
        super();
        this.prefab = prefab;
        this.parent = parent;
        this.init(initCount, this.createPoolObject.bind(this));
    }

    private createPoolObject(): UnitTestUINodeListItem {
        const node = instantiate(this.prefab);
        node.parent = this.parent;
        return node.getComponent(UnitTestUINodeListItem);
    }
}

class UnitTestUIMethodListItemPool extends ObjPoolMgr<UnitTestUIMethodListItem> {
    private prefab: Prefab;
    private parent: Node;

    constructor(prefab: Prefab, parent: Node, initCount: number = 5) {
        super();
        this.prefab = prefab;
        this.parent = parent;
        this.init(initCount, this.createPoolObject.bind(this));
    }

    private createPoolObject(): UnitTestUIMethodListItem {
        const node = instantiate(this.prefab);
        node.parent = this.parent;
        return node.getComponent(UnitTestUIMethodListItem);
    }
}

@ccclass('UnitTestUIPanel')
export class UnitTestUIPanel extends IWindowResize {
    @property({ type: Button, group: { name: '介面整體', id: '0' } })
    private toggleListButton: Button = null;
    @property({ type: Label, group: { name: '介面整體', id: '0' } })
    private toggleListButtonLabel: Label = null;
    @property({ type: Node, group: { name: '介面整體', id: '0' } })
    private root: Node = null;
    @property({ type: CCFloat, group: { name: '介面整體', id: '0' } })
    private dragThreshold: number = 10;

    private isDragging: boolean = false;
    private isPointerDown: boolean = false;
    private toggleBtnLabelString: string[] = ["關閉UnitTest頁面", "開啟UnitTest頁面"];


    @property({ type: Prefab, group: { name: '節點清單區塊', id: '0' } })
    private nodeListItemPrefab: Prefab = null;
    @property({ type: ScrollView, group: { name: '節點清單區塊', id: '0' } })
    private nodeListScrollView: ScrollView = null;
    @property({ type: UITransform, group: { name: '節點清單區塊', id: '0' } })
    private nodeListScrollViewMask: UITransform = null;
    @property({ type: UITransform, group: { name: '節點清單區塊', id: '0' } })
    private nodeListScrollViewTransform: UITransform = null;

    private unitTestComponents: UnitTestComponent[] = [];
    private nodeListItemList: UnitTestUINodeListItem[] = [];
    private nodeListItemPool: UnitTestUINodeListItemPool = null;

    @property({ type: Prefab, group: { name: '可呼叫方法區塊', id: '0' } })
    private methodListItemPrefab: Prefab = null;
    @property({ type: ScrollView, group: { name: '可呼叫方法區塊', id: '0' } })
    private methodListScrollView: ScrollView = null;
    @property({ type: UITransform, group: { name: '可呼叫方法區塊', id: '0' } })
    private methodListScrollViewMask: UITransform = null;
    @property({ type: UITransform, group: { name: '可呼叫方法區塊', id: '0' } })
    private methodListScrollViewUITransform: UITransform = null;

    private methodListItemPool: UnitTestUIMethodListItemPool = null;
    private methodListItemList: UnitTestUIMethodListItem[] = [];


    @property({ type: UITransform, group: { name: '拖曳範圍', id: '0' } })
    private viewRange: UITransform = null;


    private nodeListViewPadding: number = 71.5;
    private methodListViewPadding: number = 71.5;
    private currentItem: UnitTestComponent = null;

    start() {
        this.init();
    }

    private init() {
        this.nodeListItemPool = new UnitTestUINodeListItemPool(this.nodeListItemPrefab, this.nodeListScrollView.content);
        this.methodListItemPool = new UnitTestUIMethodListItemPool(this.methodListItemPrefab, this.methodListScrollView.content);

        this.collectUnitTestComponents();
        this.generateList();

        // 開關跟隨
        this.toggleListButton.node.on(Node.EventType.MOUSE_UP, this.onPointerUp, this);
        this.toggleListButton.node.on(Node.EventType.MOUSE_DOWN, this.onPointerDown, this);

        // 用兩個方式跟隨是為了不管鼠標速度多快都跟得上 比較絲滑
        input.on(Input.EventType.MOUSE_MOVE, this.onPointerMoveMouse, this);
        this.toggleListButton.node.on(Node.EventType.MOUSE_MOVE, this.onPointerMoveMouse, this);
    }

    public override onWindowResize(orientation: Orientation): void {
        if (this.isOutOfViewRange(this.root.position, true)) {
            this.root.setPosition(Vec3.ZERO);
        }
    }

    private collectUnitTestComponents() {
        this.unitTestComponents.length = 0;

        const scene = director.getScene();
        if (!scene) return;

        scene.walk((node) => {
            const unitTestComp = node.getComponent(UnitTestComponent);
            if (unitTestComp) {
                this.unitTestComponents.push(unitTestComp);
            }
        });
    }

    private onPointerDown() {
        this.isPointerDown = true;
    }

    private onPointerMoveMouse(event: EventMouse) {
        if (!this.isPointerDown) return;

        let mousePos: Vec3 = new Vec3(event.getUILocation().x, event.getUILocation().y, 0);
        let mouseWorldPos: Vec3 = this.viewRange.convertToNodeSpaceAR(mousePos);

        //限制在顯示範圍內
        if (this.isOutOfViewRange(mousePos)) {
            return;
        }

        let distance: number = Vec3.distance(this.toggleListButton.node.position, mouseWorldPos);
        if (distance > this.dragThreshold) {
            this.isDragging = true;
            this.root.setPosition(mouseWorldPos);
        }
    }

    private onPointerUp() {
        this.isPointerDown = false;

        if (this.isDragging) {
            this.isDragging = !this.isDragging;
        }
        else {
            this.toggleTestComponentListView();
        }
    }

    private isOutOfViewRange(mouseWorldPos: Vec3, isRootPos: boolean = false): boolean {
        if (!this.viewRange) return false; // 沒設置範圍就不判斷

        // 1. 轉 mouseWorldPos 到 viewRange 的本地座標
        const localPos = isRootPos ? mouseWorldPos : this.viewRange.convertToNodeSpaceAR(mouseWorldPos);

        // 2. 取得 viewRange 節點大小
        const width = this.viewRange.contentSize.width;
        const height = this.viewRange.contentSize.height;

        // 3. 判斷是否超出範圍
        if (localPos.x < -width / 2 || localPos.x > width / 2) return true;
        if (localPos.y < -height / 2 || localPos.y > height / 2) return true;

        return false;
    }

    private generateList() {
        for (let index = 0; index < this.unitTestComponents.length; index++) {
            let item: UnitTestUINodeListItem = this.nodeListItemPool.instance();
            let nodeName: string = this.unitTestComponents[index].node.name;

            item.setText(nodeName);
            item.bindClick(() => this.onItemClicked(this.unitTestComponents[index]));
            this.nodeListItemList.push(item);
        }
    }

    /** 第1部分按鈕 → 開關第2部分的 ScrollView */
    private toggleTestComponentListView() {
        if (!this.nodeListScrollView) return;

        const targetNode = this.nodeListScrollView.node;
        this.toggleListButtonLabel.string = this.toggleBtnLabelString[Number(targetNode.active)];
        targetNode.active = !targetNode.active;

        // 如果 ScrollView 被關閉，順便關閉第3部分面板
        if (!targetNode.active) {
            this.methodListScrollView.node.active = false;
        }
        else {
            this.resetListViewSize(this.nodeListItemList, this.nodeListScrollViewMask, this.nodeListScrollViewTransform, this.nodeListViewPadding);
        }
    }

    /** 第2部分按鈕 → 開關第3部分的 面板 */
    private onItemClicked(comp: UnitTestComponent) {
        const panelNode = this.methodListScrollView.node;

        if (!panelNode.active) {
            // 面板關閉 → 打開
            panelNode.active = true;

            if (this.currentItem !== comp) {
                this.currentItem = comp;
                this.updateMethodListContent();
            }
        }
        else {
            // 面板已開
            if (this.currentItem === comp) {
                // 點的是同一個 → 關閉
                panelNode.active = false;
            }
            else {
                // 點的是不同的 → 回收再開啟
                this.currentItem = comp;
                this.updateMethodListContent();
            }
        }
    }

    /** 更新第3部分面板內容 */
    private updateMethodListContent() {
        if (this.currentItem === null) return;
        let currentUnits: TestScriptUnit[] = this.currentItem.getTestScriptUnits();

        //全部回收
        for (let index = 0; index < this.methodListItemList.length; index++) {
            this.methodListItemPool.destroy(this.methodListItemList[index]);
        }

        //根據數量重新取得 並將原有值填入
        let methodCount: number = currentUnits.length;
        for (let index = 0; index < methodCount; index++) {

            let testMethods: PropertyTestButton[] = currentUnits[index].propertyTestButtons;
            for (let i = 0; i < testMethods.length; i++) {
                const item: UnitTestUIMethodListItem = this.methodListItemPool.instance();
                this.methodListItemList.push(item);

                // 設置 Label 顯示節點名稱
                let methodName: string = testMethods[i].functionName;
                let hasInput: boolean = testMethods[i].inspectorArgs.length > 0;
                let parameter: string = this.getParameterString(testMethods[i], hasInput);
                item.setText(methodName, parameter, hasInput);

                item.bindClick(() => this.callMethod(testMethods[i]), (inputValue) => this.setMethodParams(testMethods[i], inputValue));
            }
        }

        this.resetListViewSize(this.methodListItemList, this.methodListScrollViewMask, this.methodListScrollViewUITransform, this.methodListViewPadding);
    }

    private getParameterString(testMethod: PropertyTestButton, hasInput: boolean): string {
        let result: string = "";

        if (hasInput) {
            result = testMethod.inspectorArgs.join(', ');
        }
        else {
            let name: string[] = this.getParamNames(testMethod.targetFunction);

            for (let i = 0; i < name.length; i++) {
                let type: string = typeof testMethod.propertyArgs[i];
                if (type === 'undefined') {
                    type = 'any';
                }

                result += `${name[i]}(${type})`;
                if (i !== name.length - 1) {
                    result += `, `;
                }
            }
        }
        return result === "" ? "無參數..." : result;
    }

    private getParamNames(func: Function): string[] {
        const fnStr = func.toString().replace(/\/\*.*?\*\//g, '');

        const paramsStr = fnStr
            .slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')'))
            .replace(/=[^,]+/g, ''); // ⭐ 移除預設值

        const result = paramsStr
            .match(/([^\s,]+)/g);

        return result ?? [];
    }

    private async resetListViewSize(
        itemList: { getWidth: () => number; setWidth: (w: number) => void }[],
        scrollViewMask: UITransform,
        scrollViewTransform: UITransform,
        viewPadding: number
    ) {
        if (!itemList || itemList.length === 0) return;
        //剛設定完內容 label大小不會馬上更新
        await Utility.waitPromise(0);

        // 計算最大寬度
        let maxWidth: number = 0;
        for (let i = 0; i < itemList.length; i++) {
            maxWidth = Math.max(itemList[i].getWidth(), maxWidth);
        }

        // 設定每個 item 寬度
        for (let i = 0; i < itemList.length; i++) {
            itemList[i].setWidth(maxWidth);
        }

        // 設定 ScrollView 面板大小
        let viewWidth: number = maxWidth + viewPadding;
        scrollViewMask.setContentSize(viewWidth * 2, scrollViewMask.contentSize.y);
        scrollViewTransform.setContentSize(viewWidth, scrollViewTransform.contentSize.y);
    }

    /** 呼叫方法並解析自訂參數 */
    private callMethod(method: PropertyTestButton) {
        method.runFunction = true;
    }

    /** 解析自訂參數 */
    private setMethodParams(method: PropertyTestButton, inputValue: string) {
        let args: string[] = [];

        // 讀取 EditBox 輸入，逗號分隔
        args = inputValue
            .split(/[\s,]+/)            // 逗號或空格都拆分
            .map(s => s.trim())         // 去掉多餘空格
            .filter(s => s.length > 0); // 忽略空字串

        if (args.length > 0) {
            // 有 有效參數
            method.useInspectorArgs = true;
            method.inspectorArgs = args;
        }
        else {
            // 沒有 有效參數，關閉 useInspectorArgs
            method.useInspectorArgs = false;
            method.inspectorArgs = [];
        }
    }
}