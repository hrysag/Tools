System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UITransform, PrefabInstancePoolManager, _dec, _class, _crd, ccclass, property, SymbolItem;

  function _reportPossibleCrUseOfPrefabInstancePoolManager(extras) {
    _reporterNs.report("PrefabInstancePoolManager", "../tools/PrefabInstancePoolManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      PrefabInstancePoolManager = _unresolved_2.PrefabInstancePoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3a5439jj+xOIqGt0zszCHh0", "SymbolItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SymbolItem", SymbolItem = (_dec = ccclass('SymbolItem'), _dec(_class = class SymbolItem extends Component {
        constructor(...args) {
          super(...args);
          this._symbolID = void 0;
          this._width = void 0;
          this._height = void 0;
        }

        get width() {
          return this.node.getComponent(UITransform).contentSize.width;
        }

        get height() {
          return this.node.getComponent(UITransform).contentSize.height;
        }

        get symbolID() {
          return this._symbolID;
        }

        changeSymbolID(id) {
          this._symbolID = id;
        }

        gettingBlur(b) {}

        recycle() {
          (_crd && PrefabInstancePoolManager === void 0 ? (_reportPossibleCrUseOfPrefabInstancePoolManager({
            error: Error()
          }), PrefabInstancePoolManager) : PrefabInstancePoolManager).instance.pushIn(this.node);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eb84b382df77eacf1b2d37fcc4fd38cd55036de4.js.map