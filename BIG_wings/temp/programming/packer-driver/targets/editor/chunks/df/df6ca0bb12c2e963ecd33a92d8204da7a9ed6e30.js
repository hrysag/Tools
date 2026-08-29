System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, error, PoolConfig, ObjectPool, _crd;

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

        async put(obj) {
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

          this._objects.push(obj); //check max hold count


          if (this._initData.maxHoldCount !== -1 && this._objects.length > this._initData.maxHoldCount) {
            this._del(0, this._objects.length - this._initData.maxHoldCount);
          }

          if (!this._valid) {}
        }

        async get() {
          if (!this._valid) {
            error('ObjectPool is invalid');
            return null;
          }

          if (this._objects.length === 0) {
            await this._add();
          }

          if (!this._valid) {
            error("ObjectPool is invalid");
            this.clear();
            return null;
          }

          let obj = this._objects.pop(); // if (this._initData.reset) {
          //     await this._initData.reset(obj, false);
          // }


          return obj;
        }

        async clear() {
          const objs = this._objects.splice(0, this._objects.length);

          if (objs.length) {
            if (this._initData.clear) {
              this._initData.clear(objs);
            }
          }
        }

        async destroy() {
          var _this$_initData$destr, _this$_initData;

          this._valid = false;
          await this.clear();
          await ((_this$_initData$destr = (_this$_initData = this._initData).destroy) == null ? void 0 : _this$_initData$destr.call(_this$_initData));
        }

        _del(startIdx, endIdx) {
          const objs = this._objects.splice(startIdx, endIdx - startIdx);

          if (objs.length) {
            if (this._initData.clear) {
              this._initData.clear(objs);
            } // if (this._initData.destroy) {
            //     objs.forEach(obj => this._initData.destroy!(obj));
            // }

          }
        }

        async _add(fillCount = this._initData.fillCount) {
          if (this._initData.reset) {
            for (let n = 0; n < fillCount; n++) {
              let obj = await this._initData.create();
              await this._initData.reset(obj, true);

              this._objects.push(obj);
            }
          } else {
            for (let n = 0; n < fillCount; n++) {
              this._objects.push(await this._initData.create());
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=df6ca0bb12c2e963ecd33a92d8204da7a9ed6e30.js.map