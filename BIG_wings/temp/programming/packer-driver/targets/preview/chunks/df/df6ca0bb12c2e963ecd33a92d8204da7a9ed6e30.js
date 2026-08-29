System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, error, PoolConfig, ObjectPool, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      error = _cc.error;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a38c6a5KhxL+Z366m2U4cRe", "ObjectPool", undefined);

      __checkObsolete__(['error']);

      _export("PoolConfig", PoolConfig = class PoolConfig {
        constructor(init_) {
          this.create = void 0;

          /**
           * 重置物件 , call after create and put 
           */
          this.reset = void 0;
          this.clear = void 0;
          this.destroy = void 0;

          /** object pool 中不足多少數量自動擴容 */
          this.fillCount = void 0;

          /** object pool 中最大數量 , -1 不限制數量*/
          this.maxHoldCount = void 0;

          /** 初始化 auto fill in count */
          this.initFillCount = void 0;
          Object.assign(this, init_);
        }

      });

      _export("ObjectPool", ObjectPool = class ObjectPool {
        get valid() {
          return this._valid;
        }

        constructor(config) {
          this._initData = void 0;
          this._objects = [];
          this._valid = true;
          this._initData = new PoolConfig(config);

          if (this._initData.initFillCount > 0) {
            this._add(this._initData.initFillCount);
          }
        }

        put(obj) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this._valid) {
              error('ObjectPool is invalid');
              return;
            }

            if (!obj) {
              error('ObjectPool put obj is null');
              return;
            }

            if (_this._initData.reset) {
              yield _this._initData.reset(obj, false);
            }

            _this._objects.push(obj); //check max hold count


            if (_this._initData.maxHoldCount !== -1 && _this._objects.length > _this._initData.maxHoldCount) {
              _this._del(0, _this._objects.length - _this._initData.maxHoldCount);
            }

            if (!_this._valid) {}
          })();
        }

        get() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (!_this2._valid) {
              error('ObjectPool is invalid');
              return null;
            }

            if (_this2._objects.length === 0) {
              yield _this2._add();
            }

            if (!_this2._valid) {
              error("ObjectPool is invalid");

              _this2.clear();

              return null;
            }

            var obj = _this2._objects.pop(); // if (this._initData.reset) {
            //     await this._initData.reset(obj, false);
            // }


            return obj;
          })();
        }

        clear() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var objs = _this3._objects.splice(0, _this3._objects.length);

            if (objs.length) {
              if (_this3._initData.clear) {
                _this3._initData.clear(objs);
              }
            }
          })();
        }

        destroy() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            _this4._valid = false;
            yield _this4.clear();
            yield _this4._initData.destroy == null ? void 0 : _this4._initData.destroy();
          })();
        }

        _del(startIdx, endIdx) {
          var objs = this._objects.splice(startIdx, endIdx - startIdx);

          if (objs.length) {
            if (this._initData.clear) {
              this._initData.clear(objs);
            } // if (this._initData.destroy) {
            //     objs.forEach(obj => this._initData.destroy!(obj));
            // }

          }
        }

        _add(fillCount) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            if (fillCount === void 0) {
              fillCount = _this5._initData.fillCount;
            }

            if (_this5._initData.reset) {
              for (var n = 0; n < fillCount; n++) {
                var _obj = yield _this5._initData.create();

                yield _this5._initData.reset(_obj, true);

                _this5._objects.push(_obj);
              }
            } else {
              for (var _n = 0; _n < fillCount; _n++) {
                _this5._objects.push(yield _this5._initData.create());
              }
            }
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=df6ca0bb12c2e963ecd33a92d8204da7a9ed6e30.js.map