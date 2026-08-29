import { error } from "cc";



class PoolConfig<T> {


    constructor(init_?: PoolConfig<T>) {
        Object.assign(this, init_);
    }

    create !: () => T | Promise<T>;

    /**
     * 重置物件 , call after create and put 
     */
    reset?: (obj: T, create: boolean) => T ;

    clear?: (objs: T[]) => void | Promise<void>;

    destroy?: () => void | Promise<void>;

    /** object pool 中不足多少數量自動擴容 */
    fillCount?: number;

    /** object pool 中最大數量 , -1 不限制數量*/
    maxHoldCount?: number;

    /** 初始化 auto fill in count */
    initFillCount?: number;
}


class ObjectPool<T> {

    private _initData!: PoolConfig<T>;

    private _objects: T[] = [];

    private _valid: boolean = true;

    get valid() { return this._valid; }

    constructor(config: PoolConfig<T>) {

        this._initData = new PoolConfig(config);

        if (this._initData.initFillCount! > 0) {
            this._add(this._initData.initFillCount);
        }
    }


    async put(obj: T) {

        if (!this._valid) {
            error('ObjectPool is invalid');
            return;
        }


        if (!obj) {
            error('ObjectPool put obj is null');
            return;
        }


        if (this._initData.reset) {
            await this._initData.reset(obj, false);
        }

        this._objects.push(obj);

        //check max hold count

        if (this._initData.maxHoldCount! !== -1 && this._objects.length > this._initData.maxHoldCount!) {
            this._del(0, this._objects.length - this._initData.maxHoldCount!);
        }

        if (!this._valid) {

        }
    }


    async get(): Promise<T> {

        if (!this._valid) {
            error('ObjectPool is invalid');
            return null as any;
        }

        if (this._objects.length === 0) {
            await this._add();
        }


        if (!this._valid) {
            error("ObjectPool is invalid");
            this.clear();
            return null!;
        }

        let obj = this._objects.pop()!;

        // if (this._initData.reset) {
        //     await this._initData.reset(obj, false);
        // }

        return obj;
    }

    async clear(): Promise<void> {

        const objs = this._objects.splice(0, this._objects.length);

        if (objs.length) {
            if (this._initData.clear) {
                this._initData.clear(objs);
            }
        }

    }

    async destroy(): Promise<void> {
        this._valid = false;
        await this.clear();
        await this._initData.destroy?.();
    }


    private _del(startIdx: number, endIdx: number) {

        const objs = this._objects.splice(startIdx, endIdx - startIdx);

        if (objs.length) {
            if (this._initData.clear) {
                this._initData.clear(objs);
            }
            // if (this._initData.destroy) {
            //     objs.forEach(obj => this._initData.destroy!(obj));
            // }
        }
    }


    private async _add(fillCount: number = this._initData.fillCount!) {

        if (this._initData.reset) {
            for (let n = 0; n < fillCount; n++) {
                let obj = await this._initData.create();
                await this._initData.reset(obj, true);
                this._objects.push(obj);
            }
        }
        else {
            for (let n = 0; n < fillCount; n++) {
                this._objects.push(await this._initData.create());
            }
        }
    }

}

export { ObjectPool, PoolConfig };