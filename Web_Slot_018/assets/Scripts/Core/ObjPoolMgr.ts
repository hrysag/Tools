import { _decorator, Component, Node } from 'cc';
import { IObjPool } from './IObjPool';
import { Queue } from './Queue';

export class ObjPoolMgr<obj extends IObjPool> {
    public get usedCount(): number {
        return this.usedPool.size;
    };

    public get unUsedCount(): number {
        return this.unUsedPool.count;
    }

    public countLimit: number = -1;


    private usedPool: Set<obj> = new Set<obj>();
    private unUsedPool: Queue<obj> = new Queue<obj>();

    private createPoolObj: () => obj;

    public constructor() {

    }

    public init(poolCount: number, createPoolObjFunc: () => obj): void {
        this.createPoolObj = createPoolObjFunc;

        for (let index = 0; index < poolCount; index++) {
            let newObj: obj = this.createPoolObj();
            this.unUsedPool.enqueue(newObj);
            newObj.onObjLoad();
        }
    }


    /**
     * 取出一個物件
     * @returns 
     */
    public instance(): obj {
        let newObj: obj;

        if (this.unUsedPool.count > 0) {
            newObj = this.unUsedPool.dequeue();
        }
        else {
            newObj = this.createPoolObj();
            newObj.onObjLoad();
        }

        this.usedPool.add(newObj);
        newObj.onObjInstance();

        return newObj;
    }

    public destroy(obj: obj): void {
        obj.onObjRecycle();

        if (this.usedPool.delete(obj)) {
            if (this.countLimit >= 0 && this.usedCount + this.unUsedCount >= this.countLimit) {
                obj.onObjUnLoad();
            }
            else {
                this.unUsedPool.enqueue(obj);
            }
        }
    }

    public dispose(): void {
        for (let obj of this.usedPool) {
            this.destroy(obj);
        }

        while (this.unUsedPool.count > 0) {
            let obj = this.unUsedPool.dequeue();
            obj.onObjUnLoad();
        }
    }
}


