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

      /**
       * 物件池管理
       * @example
       * 實作物件池範例
       * 
       * SymbolNumber實作IObjPool介面
       * ```ts
       * class Pool extends ObjPoolMgr<SymbolNumber> {
           public constructor() {
               super();
               this.init(10, SymbolNumber.createPoolObject);
           }
       }
      
       export class SymbolNumber implements SymbolBase, IObjPool {
          protected constructor() { }
      
          public static createPoolObject(): SymbolNumber {
              return new SymbolNumber();
          }
      
          public static pool: Pool = new Pool();
       }
       * ```
       */
      _export("ObjPoolMgr", ObjPoolMgr = class ObjPoolMgr {
        /**已使用的物件數量 */
        get usedCount() {
          return this.usedPool.size;
        }

        /**未使用的物件數量 */
        get unUsedCount() {
          return this.unUsedPool.count;
        }
        /**最大物件數量 */


        constructor() {
          this.countLimit = -1;

          /**使用中的物件池 */
          this.usedPool = new Set();

          /**未使用的物件池 */
          this.unUsedPool = new (_crd && Queue === void 0 ? (_reportPossibleCrUseOfQueue({
            error: Error()
          }), Queue) : Queue)();

          /**創建物件的方法 */
          this.createPoolObj = void 0;
        }
        /**
         * 初始化，創建初始數量的物件
         * @param poolCount 最初創建的物件數量
         * @param createPoolObjFunc 創建物件的方法
         */


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
        /**
         * 回收一個物件，如果超出最大物件數量則移除
         * @param obj 回收物件
         */


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
        /**
         * 釋放所有物件，清空物件池
         */


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
//# sourceMappingURL=3120d76de22bf272790f1c4985bcc39502fae255.js.map