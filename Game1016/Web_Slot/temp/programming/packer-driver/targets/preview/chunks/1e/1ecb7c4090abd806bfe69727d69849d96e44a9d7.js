System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, FunctionRegistry, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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


        execute(key) {
          var _arguments = arguments,
              _this = this;

          return _asyncToGenerator(function* () {
            var fn = _this.registry.get(key);

            if (!fn) {
              throw new Error("No function found with key \"" + key + "\".");
            }

            for (var _len = _arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = _arguments[_key];
            }

            var result = fn(...args);
            return result instanceof Promise ? yield result : result;
          })();
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