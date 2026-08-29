System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, v3, SpineController, _dec, _class, _crd, ccclass, property, ConnectBoxSpineComponent;

  function _reportPossibleCrUseOfSpineController(extras) {
    _reporterNs.report("SpineController", "../../MyUtils/AnimationSystem/Components/SpineController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      SpineController = _unresolved_2.SpineController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a261aR4RpLqZ7WjViXjkTZ", "ConnectBoxSpineComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ConnectBoxSpineComponent", ConnectBoxSpineComponent = (_dec = ccclass('ConnectBoxSpineComponent'), _dec(_class = class ConnectBoxSpineComponent extends (_crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
        error: Error()
      }), SpineController) : SpineController) {
        //--在wild狀態時,不同的wild會在scale上面有不同的表現
        resetData() {
          let parentNode = this.node.parent;
          parentNode.setScale(v3(1, 1, 1));
          super.resetData();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3ef6d56a6ca81db602306cb32a1d9b0ae30efafd.js.map