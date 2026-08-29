import { _decorator, CCBoolean, CCFloat, Component, Node, RealCurve, Vec3 } from 'cc';
import { Command, MoveParam, State } from '../../../../ReelTemplate/ReelTemplate_3/Scripts/Movement/MoveParam';
import { Queue } from 'db://assets/Scripts/Core/Queue';
import { easeFunctions, EaseType } from 'db://assets/Scripts/Core/TweenExt';
const { ccclass, property } = _decorator;

@ccclass('UniMovement')
export class UniMovement extends Component {
    @property(CCBoolean)
    private updateSelf: boolean = true;

    @property(CCFloat)
    public timeScale: number = 1.0;

    public params: Queue<MoveParam> = new Queue<MoveParam>();

    public onMoveStart: (move: UniMovement) => void = null!;
    public onMoveComplete: (move: UniMovement) => void = null!;
    public onLastMoveComplete: (move: UniMovement) => void = null!;

    public onMoveStartOnce: (move: UniMovement) => void = null!;
    public onMoveCompleteOnce: (move: UniMovement) => void = null!;
    public onLastMoveCompleteOnce: (move: UniMovement) => void = null!;

    private _curParam: MoveParam = null;
    private _leftDeltaTime: number = 0.0;

    public get curParam(): MoveParam | null {
        return this._curParam;
    }

    public moveTo(dest: Vec3, duration: number, isLocal: boolean = true, ease: EaseType = EaseType.Linear, easedValueCustom: RealCurve = null): void {
        if (duration < 0) return;

        const moveParam = MoveParam.pool.instance();
        moveParam.endPos = dest;
        moveParam.duration = duration;
        moveParam.easeType = ease;
        moveParam.cmdType = Command.MoveTo;
        moveParam.isLocal = isLocal;
        moveParam.easedValueCustom = easedValueCustom;

        this._addMoveParams(moveParam);
    }

    public moveFrom(from: Vec3, dest: Vec3, duration: number, isLocal: boolean = true, ease: EaseType = EaseType.Linear, easedValueCustom: RealCurve = null): void {
        if (duration < 0) return;

        const moveParam = MoveParam.pool.instance();
        moveParam.startPos = from;
        moveParam.endPos = dest;
        moveParam.duration = duration;
        moveParam.easeType = ease;
        moveParam.cmdType = Command.MoveFrom;
        moveParam.isLocal = isLocal;
        moveParam.easedValueCustom = easedValueCustom;

        this._addMoveParams(moveParam);
    }

    public moveBy(offset: Vec3, duration: number, ease: EaseType = EaseType.Linear, easedValueCustom: RealCurve = null): void {
        if (duration < 0) return;

        const moveParam = MoveParam.pool.instance();
        moveParam.offset = offset;
        moveParam.duration = duration;
        moveParam.easeType = ease;
        moveParam.cmdType = Command.MoveBy;
        //MoveBy must be local move
        moveParam.isLocal = true;
        moveParam.easedValueCustom = easedValueCustom;

        this._addMoveParams(moveParam);
    }

    public addCallback(callback: (movement: UniMovement) => void): void {
        const moveParam = MoveParam.pool.instance();
        moveParam.cmdType = Command.Callback;
        moveParam.callback = callback;
        this._addMoveParams(moveParam);
    }

    public pause(): void {
        if (this._curParam !== null && this._curParam.moveState === State.Moving) {
            this._curParam.moveState = State.Pause;
        }
    }

    public resume(): void {
        if (this._curParam !== null && this._curParam.moveState === State.Pause) {
            this._curParam.moveState = State.Moving;
        }
    }

    public stop(): void {
        while (this.params.count > 0) {
            let param = this.params.dequeue();
            MoveParam.pool.destroy(param);
        }

        this.params.clear();

        if (this._curParam !== null) {
            MoveParam.pool.destroy(this._curParam);
            this._curParam = null;
        }

        this.clearLeftDeltaTime();
    }

    public clearCallbacks(): void {
        this.onMoveStart = null;
        this.onMoveComplete = null;
        this.onLastMoveComplete = null;
    }

    private _addMoveParams(p: MoveParam): void {
        this.params.enqueue(p);
        this._updateMoveParams();
        this._onMoveUpdate();
    }

    private _updateCurParam(): void {
        if (this._curParam === null && this.params.count > 0) {
            this._curParam = this.params.dequeue();

            this._onMoveStart();

            if (this._curParam.cmdType === Command.Callback) {
                this._curParam.callback?.(this);
            }
        }
    }

    private _updateMoveParams(): void {
        if (this._curParam !== null) {
            if (this._curParam.remainDuration > this._leftDeltaTime) {
                //console.log('remain:' + this._curParam.remainDuration + ' left:' + this._leftDeltaTime);
                this._curParam.curTime += this._leftDeltaTime;
                this._leftDeltaTime = 0.0;
            } else {
                //console.log('remain:' + this._curParam.remainDuration + ' left:' + this._leftDeltaTime);
                this._leftDeltaTime -= this._curParam.remainDuration;
                this._curParam.curTime = this._curParam.duration;
            }

            if (this._curParam.isDone) {
                this._onMoveComplete();
            }
        }

        this._updateCurParam();

        if (this._curParam !== null && this._leftDeltaTime > 0.0) {
            this._updateMoveParams();
        }
    }

    private _onMoveComplete(): void {
        if (this._curParam.cmdType === Command.Callback) {
            // pass position set
        }
        else if (this._curParam.isLocal) {
            this.node.setPosition(this._curParam.endPos);
        }
        else {
            this.node.setWorldPosition(this._curParam.endPos);
        }

        this._curParam.moveState = State.None;

        this.onMoveComplete?.(this);
        this.onMoveCompleteOnce?.(this);
        this.onMoveCompleteOnce = null;

        if (this.params.isEmpty) {
            this.onLastMoveComplete?.(this);
            this.onLastMoveCompleteOnce?.(this);
            this.onLastMoveCompleteOnce = null;
        }

        MoveParam.pool.destroy(this._curParam);
        this._curParam = null;
    }

    private _onMoveStart(): void {
        if (this._curParam.cmdType === Command.MoveFrom) {
            if (this._curParam.isLocal) {
                this.node.setPosition(this._curParam.startPos);
            }
            else {
                this.node.setWorldPosition(this._curParam.startPos);
            }
        }
        else if (this._curParam.cmdType === Command.MoveTo) {
            this._curParam.startPos.set(this._curParam.isLocal ? this.node.position : this.node.worldPosition);
        }
        else if (this._curParam.cmdType === Command.MoveBy) {
            this._curParam.startPos.set(this.node.position);
            this._curParam.endPos.set(this.node.position.add(this._curParam.offset));
        }
        this._curParam.moveState = State.Moving;

        this.onMoveStart?.(this);
        this.onMoveStartOnce?.(this);
        this.onMoveStartOnce = null;
    }

    private _onMoveUpdate(): void {
        if (this._curParam === null || this._curParam.cmdType === Command.Callback) {
            return;
        }

        let progress = 0;
        let currentProgress = this._curParam.curTime / (this._curParam.duration + 0.000001);

        if (this._curParam.easedValueCustom !== null) {
            progress = this._curParam.easedValueCustom.evaluate(currentProgress);
        }
        else {
            progress = easeFunctions[this._curParam.easeType](currentProgress);
        }

        let tempPos = new Vec3();
        Vec3.lerp(tempPos, this._curParam.startPos, this._curParam.endPos, progress);

        if (this._curParam.isLocal) {
            this.node.setPosition(tempPos);
        }
        else {
            this.node.setWorldPosition(tempPos);
        }
    }

    update(deltaTime: number): void {
        if (this.updateSelf) {
            this.updateMove(deltaTime);
        }
    }

    public clearLeftDeltaTime(): void {
        this._leftDeltaTime = 0.0;
    }

    public updateMove(deltaTime: number): void {
        if (this._curParam === null || this._curParam.moveState === State.Pause) {
            return;
        }

        if (this.params.count > 0) {
            this._leftDeltaTime += deltaTime * this.timeScale;
        }
        else {
            this._leftDeltaTime = deltaTime * this.timeScale;
        }
        //this._leftDeltaTime = deltaTime * this.timeScale;

        this._updateMoveParams();
        this._onMoveUpdate();
    }
}


