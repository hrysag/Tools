import * as localforage from 'localforage';


export class IndexedDBManager {

    private store: LocalForage | null = null;

    private _error: boolean = null;

    async init(config?: {
        storeName: string,
    }) {
        //已經初始化過且有錯誤
        if (this._error) return;

        if (!this.store) {
            this.store = localforage.createInstance({
                driver: localforage.INDEXEDDB,
                name: 'casino_frontend',
                storeName: config?.storeName,
            });
        }
        await this.store.ready().catch((err) => {
            console.error(`[Index] :: init error`, err);
            this._error = true;
        });
    }

    async setItem<T>(key: string, value: T) {
        if (!this.store) { await this.init(); }
        if (this._error) return null;
        console.log(`idb :: setItem ${key} `, value);
        return this.store?.setItem(key, value);
    }

    async getItem<T>(key: string): Promise<T | null | undefined> {
        if (!this.store) { await this.init(); }
        if (this._error) return null;
        return this.store?.getItem<T>(key);
    }

    async deleteItem(key: string) {
        if (!this.store) { await this.init(); }
        if (this._error) return null;
        return this.store?.removeItem(key);
    }

    async clear() {
        if (!this.store) { await this.init(); }
        if (this._error) return null;
        return this.store?.clear();
    }

}


