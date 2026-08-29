import { _decorator, Button, EventTouch, Node, UITransform, Vec3 } from 'cc';
import { IWindowResize } from '../../../Utils/Orientation';
import { Orientation } from '../../../GameScripts/Definition';
const { ccclass, property, requireComponent } = _decorator;

@ccclass('DraggableButton')
@requireComponent(Button)
export class DraggableButton extends IWindowResize {
    @property(UITransform)
    private draggableRange: UITransform = null;
    @property
    private dragThreshold: number = 10;
    @property([Node])
    private followNodes: Node[] = [];

    private button: Button = null;
    private isDragging: boolean = false;
    private isPointerDown: boolean = false;
    private clickListeners: Array<{ callback: Function, target: any }> = [];

    protected start(): void {
        this.button = this.getComponent(Button);
        this.init();
    }

    private init(): void {
        this.button.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.button.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.button.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    private onTouchStart(event: EventTouch): void {
        this.isPointerDown = true;
    }

    private onTouchEnd(): void {
        this.isPointerDown = false;

        if (this.isDragging) {
            this.isDragging = !this.isDragging;
        }
        else {
            // 如果沒有拖曳，則觸發點擊事件
            this.onButtonClick();
        }
    }

    private onTouchMove(event: EventTouch): void {
        if (!this.isPointerDown) return;

        const mousePos: Vec3 = new Vec3(event.getUILocation().x, event.getUILocation().y, 0);
        const worldScale: Vec3 = this.node.getWorldScale();
        const mouseWorldPos: Vec3 = this.draggableRange.convertToNodeSpaceAR(mousePos).divide(worldScale);

        //限制在顯示範圍內
        if (this.isOutOfViewRange(mousePos)) {
            return;
        }

        const distance: number = Vec3.distance(this.button.node.position, mouseWorldPos);
        if (distance > this.dragThreshold || this.isDragging) {
            this.isDragging = true;

            // 計算位移量
            const oldPosition = this.button.node.position.clone();
            const delta = new Vec3(
                mouseWorldPos.x - oldPosition.x,
                mouseWorldPos.y - oldPosition.y,
                mouseWorldPos.z - oldPosition.z
            );

            // 移動按鈕
            this.button.node.setPosition(mouseWorldPos);

            // 根據位移量移動跟隨節點
            this.followNodes.forEach(node => {
                const currentPos = node.position.clone();
                node.setPosition(
                    currentPos.x + delta.x,
                    currentPos.y + delta.y,
                    currentPos.z + delta.z
                );
            });
        }
    }

    private isOutOfViewRange(mouseWorldPos: Vec3, isRootPos: boolean = false): boolean {
        if (!this.draggableRange) return false; // 沒設置範圍就不判斷

        // 1. 轉 mouseWorldPos 到 viewRange 的本地座標
        const localPos = isRootPos ? mouseWorldPos : this.draggableRange.convertToNodeSpaceAR(mouseWorldPos);

        // 2. 取得 viewRange 節點大小
        const width = this.draggableRange.contentSize.width;
        const height = this.draggableRange.contentSize.height;

        // 3. 判斷是否超出範圍
        if (localPos.x < -width / 2 || localPos.x > width / 2) return true;
        if (localPos.y < -height / 2 || localPos.y > height / 2) return true;

        return false;
    }

    public override onWindowResize(orientation: Orientation): void {
        this.scheduleOnce(() => {
            // 延遲一幀再檢查
            if (this.isOutOfViewRange(this.button.node.position, true)) {
                const offset = this.button.node.position.clone();
                this.button.node.setPosition(Vec3.ZERO);
                this.followNodes.forEach(node => {
                    node.setPosition(
                        node.position.x - offset.x,
                        node.position.y - offset.y,
                        node.position.z - offset.z
                    );
                });
            }
        });
    }

    public registerClickEvent(callback: Function, target?: any): void {
        if (!callback) {
            console.warn('[DraggableButton] registerClickEvent: callback is null or undefined');
            return;
        }

        const existingIndex = this.clickListeners.findIndex(
            listener => listener.callback === callback && listener.target === target
        );

        if (existingIndex !== -1) {
            console.warn('[DraggableButton] registerClickEvent: 此回調已經註冊過');
            return;
        }

        // 添加新的監聽器
        this.clickListeners.push({ callback, target });
    }

    public unregisterClickEvent(callback: Function, target?: any): void {
        if (!callback) {
            console.warn('[DraggableButton] unregisterClickEvent: callback is null or undefined');
            return;
        }

        const index = this.clickListeners.findIndex(
            listener => listener.callback === callback && listener.target === target
        );

        if (index !== -1) {
            this.clickListeners.splice(index, 1);
        }
    }

    public unregisterAllClickEvents(): void {
        this.clickListeners = [];
    }

    private onButtonClick(): void {
        // 執行所有註冊的回調函數
        for (const listener of this.clickListeners) {
            if (listener.target) {
                listener.callback.call(listener.target);
            } else {
                listener.callback();
            }
        }
    }

    protected onDestroy(): void {
        // 移除所有事件監聽
        this.button?.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.button?.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.button?.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);

        // 清理所有點擊回調
        this.unregisterAllClickEvents();
    }
}
