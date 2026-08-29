System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, FunctionRegistry, _crd;

  _export("FunctionRegistry", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cfc60k4XLBCh4+wBdcojQwr", "FunctionRegistry", undefined);
      /**
       * 動態的函數註冊與執行系統
       */


      _export("FunctionRegistry", FunctionRegistry = class FunctionRegistry {
        constructor() {
          this.registry = new Map();
        }

        register(key, fn) {
          this.registry.set(key, fn);
        }
        /**
         * 執行函數，支援同步與 Promise
         */


        async execute(key, ...args) {
          const fn = this.registry.get(key);

          if (!fn) {
            throw new Error(`No function found with key "${key}".`);
          }

          const result = fn(...args);
          return result instanceof Promise ? await result : result;
        }
        /**
         * 移除
         */


        unregister(key) {
          this.registry.delete(key);
        }
        /**
         * 清空
         */


        clear() {
          this.registry.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1ecb7c4090abd806bfe69727d69849d96e44a9d7.js.map