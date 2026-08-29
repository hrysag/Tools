System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Queue, ObjPoolMgr, _crd;

  function _reportPossibleCrUseOfIObjPool(extras) {
    _reporterNs.report("IObjPool", "./IObjPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQueue(extras) {
    _reporterNs.report("Queue", "./Queue", _context.meta, extras);
  }

  _export("ObjPoolMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      Queue = _unresolved_2.Queue;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "77ec1QHlsxAjp4LZEWLDcN6", "ObjPoolMgr", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      _export("ObjPoolMgr", ObjPoolMgr = class ObjPoolMgr {
        get usedCount() {
          return this.usedPool.size;
        }

        get unUsedCount() {
          return this.unUsedPool.count;
        }

        constructor() {
          this.countLimit = -1;
          this.usedPool = new Set();
          this.unUsedPool = new (_crd && Queue === void 0 ? (_reportPossibleCrUseOfQueue({
            error: Error()
          }), Queue) : Queue)();
          this.createPoolObj = void 0;
        }

        init(poolCount, createPoolObjFunc) {
          this.createPoolObj = createPoolObjFunc;

          for (var index = 0; index < poolCount; index++) {
            var newObj = this.createPoolObj();
            this.unUsedPool.enqueue(newObj);
            newObj.onObjLoad();
          }
        }
        /**
         * 取出一個物件
         * @returns 
         */


        instance() {
          var newObj;

          if (this.unUsedPool.count > 0) {
            newObj = this.unUsedPool.dequeue();
          } else {
            newObj = this.createPoolObj();
            newObj.onObjLoad();
          }

          this.usedPool.add(newObj);
          newObj.onObjInstance();
          return newObj;
        }

        destroy(obj) {
          obj.onObjRecycle();

          if (this.usedPool.delete(obj)) {
            if (this.countLimit >= 0 && this.usedCount + this.unUsedCount >= this.countLimit) {
              obj.onObjUnLoad();
            } else {
              this.unUsedPool.enqueue(obj);
            }
          }
        }

        dispose() {
          for (var _obj of this.usedPool) {
            this.destroy(_obj);
          }

          while (this.unUsedPool.count > 0) {
            var _obj2 = this.unUsedPool.dequeue();

            _obj2.onObjUnLoad();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=85bdbf83725cbc280c07479697f5a4ab2ff26ea1.js.map