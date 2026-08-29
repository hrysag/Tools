System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, BaseAutoSet;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6edafO6ZA9Fs651/27h++x2", "BaseAutoSet", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BaseAutoSet", BaseAutoSet = (_dec = ccclass('BaseAutoSet'), _dec(_class = class BaseAutoSet extends Component {
        constructor() {
          super(...arguments);
          this._currentAutoNumberNode = void 0;
          this._currentAutoNumber = void 0;
        }

        set currentAutoLabel(node) {
          this._currentAutoNumberNode = node;
        }

        get currentAutoNumber() {
          return this._currentAutoNumber;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=05a8538fe4854863f1e654180674cd45f9d2a4bf.js.map