System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _crd, ccclass, property, ComponentExt;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "160c39Rvu1KDaB+Rneg01Qg", "ComponentExt", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ComponentExt", ComponentExt = (_dec = ccclass('ComponentExt'), _dec(_class = class ComponentExt {
        static getComp(node, typename) {
          return node.getComponent(typename);
        }

        static getComps(nodes, typename) {
          let comps = [];

          for (let i = 0; i < nodes.length; i++) {
            let comp = nodes[i].getComponent(typename);

            if (comp) {
              comps.push(comp);
            }
          }

          return comps;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bd3e92f5dd481a3dd8352a4ab13c4bf5a19bfbe9.js.map