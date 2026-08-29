/**
 * 動態的函數註冊與執行系統
 */
export type AnyFunction = (...args: any[]) => any;

export class FunctionRegistry {
    private registry = new Map<string, AnyFunction>();

    public register(key: string, fn: AnyFunction): void {
        this.registry.set(key, fn);
    }

    /**
     * 執行函數，支援同步與 Promise
     */
    public async execute<T = any>(key: string, ...args: any[]): Promise<T> {
        const fn = this.registry.get(key);
        if (!fn) {
            throw new Error(`No function found with key "${key}".`);
        }
        const result = fn(...args);
        return result instanceof Promise ? await result : (result as T);
    }

    /**
     * 移除
     */
    public unregister(key: string): void {
        this.registry.delete(key);
    }

    /**
     * 清空
     */
    public clear(): void {
        this.registry.clear();
    }
}
