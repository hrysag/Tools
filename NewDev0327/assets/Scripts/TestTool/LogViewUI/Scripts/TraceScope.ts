import { LogViewMainUI } from "./LogViewMainUI";

type TraceMode = 'sync' | 'async';

export interface TraceNode {
    target: string;
    function: string;
    mode: TraceMode;
    count: number;
    cost: number;
    children: TraceNode[];
    _start?: number;
}

export class TraceScope {
    private static registeredClassSet: Set<string> = new Set();
    private static stack: TraceNode[] = [];

    // ===== 同步 =====

    public static start(name: string, instance: any, asyncParent?: TraceNode): TraceNode {
        let className: string;
        if (typeof instance === 'function') {
            // 靜態 class 本身
            className = instance.name;
        } else if (instance && instance.constructor && instance.constructor.name) {
            // 一般 instance
            className = instance.constructor.name;
        } else {
            className = String(instance);
        }

        let parent = this.stack.length > 0 ? this.stack[this.stack.length - 1] : undefined;
        if (asyncParent) {
            parent = asyncParent;
        }

        if (!this.registeredClassSet.has(className)) {
            this.registeredClassSet.add(className);
            const info = this.collectMethods(instance);
            LogViewMainUI.instance.registerClass(className, info.names);

            // console.log(className);
            // console.log(`方法數量: ${info.count}`);
            // console.log(`方法名稱清單: ${info.names.join(', ')}`);
        }

        const node: TraceNode = {
            target: className,
            function: name,
            mode: asyncParent ? 'async' : 'sync',
            count: 1,
            cost: 0,
            _start: Date.now(),
            children: [],
        };

        if (parent) {
            parent.children.push(node);
        }

        this.stack.push(node);
        return node;
    }

    public static end(asyncParent?: TraceNode): TraceNode {
        let node = this.stack.pop();
        if (asyncParent) {
            node = asyncParent;
        }
        else if (!node) {
            throw new Error('endSync called without matching startSync');
        }
        node.cost = Date.now() - node._start;
        delete node._start;
        return node;
    }

    // ===== 輸出 =====

    public static log(trace: TraceNode): void {
        console.log(JSON.stringify(TraceScope.toJSONObject(trace)));
    }

    public static toJSON(trace: TraceNode): any {
        LogViewMainUI.instance.addFunctionLogData([this.toJSONObject(trace)]);
        this.stack = [];
    }

    public static toJSONObject(trace: TraceNode): any {
        const children: any[] = [];
        for (let i = 0; i < trace.children.length; i++) {
            const child = trace.children[i];
            children.push(this.toJSONObject(child));
        }
        return {
            target: trace.target,
            function: trace.function,
            mode: trace.mode,
            count: trace.count,
            cost: trace.cost.toFixed(2),
            children: children,
        };
    }

    public static collectMethods(instance: any): { count: number, names: string[] } {
        let methodNames: string[] = [];
        if (typeof instance === 'function') {
            // 靜態 class 本身，抓 static 方法
            const props = Object.getOwnPropertyNames(instance);
            for (const prop of props) {
                if (['prototype', 'name', 'length', 'constructor'].includes(prop)) continue;
                const desc = Object.getOwnPropertyDescriptor(instance, prop);
                if (desc?.value && typeof desc.value === 'function') {
                    methodNames.push(prop);
                }
            }
        } else if (instance && instance.constructor && instance.constructor.prototype) {
            // 一般 instance，抓 instance 方法
            const proto = instance.constructor.prototype;
            const props = Object.getOwnPropertyNames(proto);
            for (const prop of props) {
                if (prop === 'constructor') continue;
                const desc = Object.getOwnPropertyDescriptor(proto, prop);
                if (desc?.value && typeof desc.value === 'function') {
                    methodNames.push(prop);
                }
            }
        }
        return { count: methodNames.length, names: methodNames };
    }
}
