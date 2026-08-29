System.register(["cc", "localforage"], function (_export, _context) {
  "use strict";

  var _cclegacy, localforage, IndexedDBManager, _crd;

  _export("IndexedDBManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_localforage) {
      localforage = _localforage;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e70bP68OpAGaFRWbQLHI18", "IndexedDBManager", undefined);

      _export("IndexedDBManager", IndexedDBManager = class IndexedDBManager {
        constructor() {
          this.store = null;
          this._error = null;
        }

        async init(config) {
          //已經初始化過且有錯誤
          if (this._error) return;

          if (!this.store) {
            this.store = localforage.createInstance({
              driver: localforage.INDEXEDDB,
              name: 'casino_frontend',
              storeName: config == null ? void 0 : config.storeName
            });
          }

          await this.store.ready().catch(err => {
            console.error(`[Index] :: init error`, err);
            this._error = true;
          });
        }

        async setItem(key, value) {
          var _this$store;

          if (!this.store) {
            await this.init();
          }

          if (this._error) return null;
          console.log(`idb :: setItem ${key} `, value);
          return (_this$store = this.store) == null ? void 0 : _this$store.setItem(key, value);
        }

        async getItem(key) {
          var _this$store2;

          if (!this.store) {
            await this.init();
          }

          if (this._error) return null;
          return (_this$store2 = this.store) == null ? void 0 : _this$store2.getItem(key);
        }

        async deleteItem(key) {
          var _this$store3;

          if (!this.store) {
            await this.init();
          }

          if (this._error) return null;
          return (_this$store3 = this.store) == null ? void 0 : _this$store3.removeItem(key);
        }

        async clear() {
          var _this$store4;

          if (!this.store) {
            await this.init();
          }

          if (this._error) return null;
          return (_this$store4 = this.store) == null ? void 0 : _this$store4.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=60fc6e03c918c50d6ebbbbabcf5202cf57e27413.js.map