import { _decorator, Component, Node, Pool, RealCurve, v3, Vec3 } from 'cc';
import { UniMovement } from './UniMovement';
import { EaseType } from 'db://assets/Scripts/Core/TweenExt';
import { ObjPoolMgr } from 'db://assets/Scripts/Core/ObjPoolMgr';
import { IObjPool } from 'db://assets/Scripts/Core/IObjPool';
const { ccclass, property } = _decorator;

export enum Command {
    MoveTo,
    MoveFrom,
    MoveBy,
    Callback,
}

export enum State {
    None,
    Moving,
    Pause,
}

@ccclass('MoveParam')
export class MoveParam implements IObjPool {
    public static pool = new class extends ObjPoolMgr<MoveParam> {
        public constructor() {
            super();
            this.init(10, () => new MoveParam());
        }
    }

    public startPos: Vec3 = new Vec3();
    public endPos: Vec3 = new Vec3();
    public offset: Vec3 = new Vec3();
    public duration: number = 0.0;
    public curTime: number = 0.0;
    public cmdType: Command = Command.MoveTo;
    public _easeType: EaseType = EaseType.Linear;
    public moveState: State = State.None;
    public isLocal: boolean = false;
    public callback: (m: UniMovement) => void = null;
    public easedValueCustom: RealCurve = new RealCurve();

    /**
     * 只透過物件池產生
     */
    protected constructor() {

    }

    set easeType(easeType: EaseType) {
        if (easeType === null || easeType === undefined) {
            easeType = EaseType.Linear;
        }

        this._easeType = easeType;
    }

    get easeType(): EaseType {
        return this._easeType;
    }

    get isDone(): boolean {
        return this.curTime >= this.duration;
    }

    get remainDuration(): number {
        return this.duration - this.curTime;
    }

    public onObjLoad(): void {

    }

    onObjInstance(): void {

    }

    onObjRecycle(): void {
        this.startPos = v3(0, 0, 0);
        this.endPos = v3(0, 0, 0);
        this.offset = v3(0, 0, 0);
        this.duration = 0.0;
        this.curTime = 0.0;
        this.cmdType = Command.MoveTo;
        this._easeType = EaseType.Linear;
        this.moveState = State.None;
        this.isLocal = false;
        this.callback = null;
        this.easedValueCustom = new RealCurve();
    }

    onObjUnLoad(): void {

    }
}


