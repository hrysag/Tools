System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, NodePool, instantiate, poolHandler, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      NodePool = _cc.NodePool;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9a31dauA2NOcZQUyqrOHppn", "poolHandler", undefined);

      /**
       * @api {class} poolHandler prefab節點創建回收
       * @apiName poolHandler
       * @apiGroup data
       * @apiDescription prefab節點創建回收
       */
      __checkObsolete__(['NodePool', 'instantiate', 'Node', 'Prefab']);

      _export("default", poolHandler = class poolHandler {
        constructor() {
          this.poolTable = null;
        }

        /**取得 */
        get(pre) {
          if (this.poolTable === null) {
            this.poolTable = new Map([[pre.name, new NodePool()]]);
          }

          var pool = this.poolTable.get(pre.name);

          if (pool === undefined) {
            this.poolTable.set(pre.name, new NodePool());
            pool = this.poolTable.get(pre.name);
          }

          if (pool.size() > 0) {
            return pool.get();
          } else {
            pool.put(instantiate(pre));
          }

          return pool.get();
        }
        /**退還 */


        put(node) {
          if (this.poolTable === null) {
            return;
          }

          var pool = this.poolTable.get(node.name);

          if (pool === null) {
            return;
          }

          pool.put(node);
        }

        destroy() {
          for (var tab in this.poolTable) {
            var pool = this.poolTable.get(tab);
            pool.clear();
          }

          this.poolTable.clear();
          this.poolTable = null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=03a461dce0a3c9a749830fdfdcf41415969709bf.js.map