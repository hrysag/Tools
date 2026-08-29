System.register(["cc", "localforage"], function (_export, _context) {
  "use strict";

  var _cclegacy, localforage, IndexedDBManager, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

        init(config) {
          var _this = this;

          return _asyncToGenerator(function* () {
            //已經初始化過且有錯誤
            if (_this._error) return;

            if (!_this.store) {
              _this.store = localforage.createInstance({
                driver: localforage.INDEXEDDB,
                name: 'casino_frontend',
                storeName: config == null ? void 0 : config.storeName
              });
            }

            yield _this.store.ready().catch(err => {
              console.error("[Index] :: init error", err);
              _this._error = true;
            });
          })();
        }

        setItem(key, value) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var _this2$store;

            if (!_this2.store) {
              yield _this2.init();
            }

            if (_this2._error) return null;
            console.log("idb :: setItem " + key + " ", value);
            return (_this2$store = _this2.store) == null ? void 0 : _this2$store.setItem(key, value);
          })();
        }

        getItem(key) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var _this3$store;

            if (!_this3.store) {
              yield _this3.init();
            }

            if (_this3._error) return null;
            return (_this3$store = _this3.store) == null ? void 0 : _this3$store.getItem(key);
          })();
        }

        deleteItem(key) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var _this4$store;

            if (!_this4.store) {
              yield _this4.init();
            }

            if (_this4._error) return null;
            return (_this4$store = _this4.store) == null ? void 0 : _this4$store.removeItem(key);
          })();
        }

        clear() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            var _this5$store;

            if (!_this5.store) {
              yield _this5.init();
            }

            if (_this5._error) return null;
            return (_this5$store = _this5.store) == null ? void 0 : _this5$store.clear();
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=60fc6e03c918c50d6ebbbbabcf5202cf57e27413.js.map