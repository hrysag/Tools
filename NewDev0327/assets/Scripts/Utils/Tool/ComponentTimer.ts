import { _decorator, Component, Node, tween, Tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ComponentTimer')
export class ComponentTimer {
    private _idCounter: number = 0;
    private _timers = new Map<number, Tween<any>>();
    private _cocosComponent: Component;

    constructor(cocosComponent: Component) {
        this._cocosComponent = cocosComponent;
    }

    /** 等同 component schedule */
    schedule(callback: () => void, interval: number, repeat: number = -1, delay: number = 0): number {
        const id = ++this._idCounter;

        const loopCount = repeat < 0 ? Number.MAX_SAFE_INTEGER : repeat + 1;

        const t = tween({})
            .delay(delay)
            .repeat(
                loopCount,
                tween({})
                    .call(() => {
                        if (!this._cocosComponent.isValid) {
                            this.unscheduleAll();
                            return;
                        }
                        callback();
                    })
                    .delay(interval)
            )
            .call(() => {
                this._timers.delete(id);
            })
            .start();

        this._timers.set(id, t);
        return id;
    }

    /** 等同 scheduleOnce */
    scheduleOnce(callback: () => void, delay: number): number {
        const id = ++this._idCounter;

        const t = tween({})
            .delay(delay)
            .call(() => {
                if (!this._cocosComponent.isValid) {
                    this.unscheduleAll();
                    return;
                }
                callback();
            })
            .call(() => {
                this._timers.delete(id);
            })
            .start();

        this._timers.set(id, t);
        return id;
    }

    /** 取消指定 timer */
    unschedule(id: number) {
        const t = this._timers.get(id);
        if (t) {
            t.stop();
            this._timers.delete(id);
        }
        else {
            // console.warn("unschedule id doesn't exist", id);
        }
    }

    /** 全清（例如場景切換） */
    unscheduleAll() {
        this._timers.forEach(t => t.stop());
        this._timers.clear();
    }
}

