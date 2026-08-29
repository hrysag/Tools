import { _decorator, CCFloat, Component, Enum, instantiate, Prefab, v3, Vec2, Vec3, } from 'cc';
import { Queue } from '../../../Core/Queue';
import { UniMovement } from './Movement/UniMovement';
import { UniIconBase } from './UniIconBase';
import { Debug } from '../../../Utils/Debug';
import { SymbolBase } from './Interface/SymbolBase';
import { IReel } from './Interface/IReel';

const { ccclass, property } = _decorator;

export enum LayoutType {
    Vertical,
    Horizontal,
}

export enum StopType {
    NoStop,
    Immediate,
    RunoutData,
    StopBySymbol,
}

@ccclass('UniReel')
export abstract class UniReel<S extends SymbolBase, Icon extends UniIconBase<S>> extends Component implements IReel {
    @property({ readonly: true, tooltip: '第幾個滾輪' })
    public reelID: number = 0;

    @property({ type: Enum(LayoutType), visible: true, tooltip: '滾輪方向' })
    protected layoutType: LayoutType = LayoutType.Vertical;

    @property({ visible: true, tooltip: '翻轉方向' })
    protected inverseDirection: boolean = false;

    @property({ visible: true, tooltip: 'icon尺寸' })
    protected iconSize: Vec2 = new Vec2(0, 0);

    @property({ type: CCFloat, visible: true, tooltip: 'icon相隔距離' })
    protected iconSpacing: number = 0;

    @property({ type: CCFloat, visible: true, tooltip: '滾輪滾一格的時間' })
    protected moveInterval: number = 0.01;

    @property({ type: Prefab, visible: true })
    protected iconPrefab = null;

    @property({ visible: true })
    protected _iconAmount: number = 0;

    @property({ type: Enum(StopType), visible: true, readonly: true })
    protected _stopType: StopType = StopType.Immediate;

    @property({ type: UniIconBase, visible: true })
    protected _iconList: Icon[] = [];

    public get iconList(): Icon[] {
        return this._iconList;
    }

    public onStartRoll: () => void;
    public onStopRoll: () => void;
    public onMoveOnceStart: () => void;
    public onMoveOnceComplete: () => void;
    public onSetIconData: <S extends SymbolBase>(symbol: S, iconIndex: number) => void;

    protected waitForRollComplete: () => void = null;

    public data: Queue<S> = new Queue<S>();

    protected dequeueSymbol: S;

    protected abstract createRandomSymbol(): S;
    protected abstract destroySymbol(symbol: S): void;

    public get stopType(): StopType {
        return this._stopType;
    }

    public get iconAmount(): number {
        return this._iconAmount;
    }

    public get isVertical(): boolean {
        return this.layoutType === LayoutType.Vertical;
    }

    public get moveDis(): number {
        let iconSize = this.isVertical ? this.iconSize.y : this.iconSize.x;
        return iconSize + this.iconSpacing;
    }

    public get moveDir(): Vec3 {
        let dir = this.inverseDirection ? -1 : 1;

        return this.isVertical ?
            Vec3.UP.clone().negative().multiplyScalar(dir) :
            Vec3.RIGHT.clone().negative().multiplyScalar(dir);
    }

    public get IconDis(): Vec3 {
        return this.isVertical ? Vec3.UP.clone().multiplyScalar(this.moveDis) : Vec3.RIGHT.clone().multiplyScalar(this.moveDis);
    }

    public get deltaDis(): Vec3 {
        return this.moveDir.multiplyScalar(this.moveDis * 0.5);
    }

    public get topPos(): Vec3 {
        let dir = this.inverseDirection ? -1 : 1;
        return this.IconDis.multiplyScalar(0.5 * this.iconList.length * dir);
    }

    public init(reelID: number): void {
        this.reelID = reelID;
        this.createIcon(this.iconAmount + 2); // 預備兩個icon，上跟下
        this.initLayout();
        this.initIconSymbol();
    }

    protected initIconSymbol(): void {
        for (let index = 0; index < this.iconList.length; index++) {
            const icon = this.iconList[index];
            let randomSymbol = this.createRandomSymbol();
            icon.symbol = randomSymbol;
        }
    }

    public movementUpdate(deltaTime: number): void {
        for (let index = 0; index < this.iconList.length; index++) {
            const icon = this.iconList[index];
            icon.updateMove(deltaTime);
        }
    }

    public interrupt(): void {
        this.stopRoll(StopType.Immediate);

        for (let index = 0; index < this.iconList.length; index++) {
            const icon = this.iconList[index];
            icon.stop();
        }
    }

    public addIcon(iconList: Icon[]): void {
        for (let index = 0; index < iconList.length; index++) {
            const icon = iconList[index];
            iconList.push(icon);
        }
    }

    public async startRollAsync(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.startRoll();
            this.waitForRollComplete = resolve;
        })
    }

    public startRoll(): void {
        this._stopType = StopType.NoStop;

        this.onStartRoll?.();
        this.resetMovements();
        this.moveOnce();
    }

    public async stopRollAsync(stopType: StopType): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            if (this._stopType !== StopType.NoStop) {
                Debug.Log('UniReel: must call startRoll before stopRoll!');
                resolve();
            }
            else {
                this.stopRoll(stopType);
                this.waitForRollComplete = resolve;
            }
        })
    }

    public stopRoll(stopType: StopType): void {
        if (this._stopType !== StopType.NoStop) {
            Debug.Log('UniReel: must call startRoll before stopRoll!');
        }
        this._stopType = stopType;
    }

    /**
     * 滾輪即停，把queue裡面的資料清空到剩下伺服器資料
     */
    public fastStopRoll(): void {
        while (this.data.count > this.iconAmount + 2) { //把隨機資料直接移除直到剩餘伺服器資料
            this.data.dequeue();
        }
    }

    public resetMovements(): void {
        for (let index = 0; index < this.iconList.length; index++) {
            const icon = this.iconList[index];
            icon.clearLeftDeltaTime();
        }
    }

    protected moveOnce(): void {
        this.onMoveOnceStart?.();

        let moveOutIndex = this.inverseDirection ? 0 : this.iconList.length - 1;

        for (let i = 0; i < this._iconList.length; ++i) {
            this._iconList[i].moveBy(this.deltaDis, this.moveInterval * 0.5);

            if (i === moveOutIndex) {
                this._iconList[i].moveTo(this.topPos, 0);
                this._iconList[i].addCallback(this.setIconData.bind(this));
            }

            this._iconList[i].moveBy(this.deltaDis, this.moveInterval * 0.5);

            if (i === moveOutIndex) {
                this._iconList[i].addCallback(this.moveOnceComplete.bind(this));
            }
        }
    }

    protected moveOnceComplete(move: UniMovement): void {
        this.reArrangeIcon();
        this.changeSibling(this._iconList);

        this.onMoveOnceComplete?.();

        if (this._stopType === StopType.Immediate ||
            (this._stopType === StopType.RunoutData && this.data.count === 0) ||
            (this._stopType === StopType.StopBySymbol && this.dequeueSymbol !== null && this.dequeueSymbol.stopSymbol)) {
            //stop
            this.onStopRoll?.();
            this.waitForRollComplete?.();
        }
        else {
            this.moveOnce();
        }
    }

    protected setIconData(movement: UniMovement): void {
        let moveOutIndex = this.inverseDirection ? 0 : this.iconList.length - 1;

        let moveOutSymbol = this.iconList[moveOutIndex].symbol;
        if (moveOutSymbol !== null) {
            this.destroySymbol(moveOutSymbol);
        }

        this.iconList[moveOutIndex].symbol = this.getData();
        this.onSetIconData?.(this.iconList[moveOutIndex].symbol, moveOutIndex);
    }

    protected getData(): S {
        if (this.data.count > 0) {
            this.dequeueSymbol = this.data.dequeue();
        }
        else {
            this.dequeueSymbol = this.createRandomSymbol();
        }

        return this.dequeueSymbol;
    }

    protected reArrangeIcon(): void {
        if (this.inverseDirection) {
            let firstIcon = this._iconList.shift();
            this._iconList.push(firstIcon);
        }
        else {
            let lastIcon = this._iconList.pop();
            this._iconList.unshift(lastIcon);
        }
    }

    protected changeSibling(icons: Icon[]): void {
        for (let index = 0; index < icons.length; index++) {
            const icon = icons[index];
            icon.siblingIndex = index;
        }

        if (icons.length > 1) { //預設最後面的
            let temp = icons[icons.length - 2].siblingIndex;
            icons[icons.length - 2].siblingIndex = icons[icons.length - 1].siblingIndex;
            icons[icons.length - 1].siblingIndex = temp;
        }
    }

    protected createIcon(amount: number): void {
        this._iconList = [];

        for (let index = 0; index < amount; index++) {
            let icon: Icon = instantiate(this.iconPrefab).getComponent(UniIconBase);
            icon.node.setParent(this.node);
            icon.init();
            this._iconList.push(icon);
        }
    }

    protected initLayout(): void {
        for (let i = 0; i < this.iconList.length; i++) {
            let pos = this.IconDis.multiplyScalar(0.5 * (this.iconList.length - 1) - i);
            this.iconList[i].node.setPosition(pos);
        }
    }
}

/*
    ### Icon List format ###
    [0]------upper prepared icon
    ---------display icon start
    [1]
    [2]------root position
    [3]
    ---------display icon end
    [4]------lower prepared icon

    ### icon move once steps ###
    1.origin:
        [0]
        --------display icon start
        [1]
        [2]
        [3]
        --------display icon end
        [4]

    2.move half icon size:
        [0]-----display icon start
        [1]
        [2]
        [3]-----display icon end
        [4]

    3.move last icon to top, set new data:
        [4]
        [0]-----display icon start
        [1]
        [2]
        [3]-----display icon end

    4.move half icon size:
        [4]
        --------display icon start
        [0]
        [1]
        [2]
        --------display icon end
        [3]

    5.rearrange icon:
        [0]
        --------display icon start
        [1]
        [2]
        [3]
        --------display icon end
        [4]
*/