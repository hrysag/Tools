System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, PrefabInstancePool, PrefabInstancePoolManager, _crd;

  _export("PrefabInstancePoolManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6babbAb1DlBML3M93ScMbTf", "PrefabInstancePoolManager", undefined);

      __checkObsolete__(['Node', 'Prefab', 'instantiate']);

      PrefabInstancePool = class PrefabInstancePool {
        constructor(prefab) {
          this.prefab = void 0;
          this.arr = void 0;
          this.prefab = prefab;
          this.arr = [];
        }

        takeOut() {
          let instance;

          if (this.arr.length > 0) {
            instance = this.arr.pop();
          } else {
            instance = instantiate(this.prefab);
          }

          instance["prefabName"] = this.prefab.name; // console.error("takeOut", this.arr.length);

          return instance;
        }

        pushIn(instance) {
          this.arr.push(instance); // console.error("pushIn", this.arr.length);
        }

      };

      _export("PrefabInstancePoolManager", PrefabInstancePoolManager = class PrefabInstancePoolManager {
        constructor() {
          this.poolTable = {};
        }

        static get instance() {
          if (!PrefabInstancePoolManager._instance) {
            PrefabInstancePoolManager._instance = new PrefabInstancePoolManager();
          }

          return PrefabInstancePoolManager._instance;
        }

        /**
         * 取出物件
         * @param prefab Prefab
         * @returns (實體)物件
         */
        takeOut(prefab) {
          const name = prefab.name;

          if (!this.poolTable[name]) {
            this.poolTable[name] = new PrefabInstancePool(prefab);
          }

          return this.poolTable[name].takeOut();
        }
        /**
         * 存放(回收)物件
         * @param node (實體)物件
         */


        pushIn(node) {
          if (node["prefabName"]) {
            this.poolTable[node["prefabName"]].pushIn(node);
          }
        }

      });

      PrefabInstancePoolManager._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c74056f8c1511d843219cf2fa10dd4e6628aef2f.js.map