System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, ContainerBasicBehavior;

  function _reportPossibleCrUseOfIBasicShowContainer(extras) {
    _reporterNs.report("IBasicShowContainer", "../IBasicShowContainerManager", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c0a61FBGpNFeqmygux2kRER", "ContainerBasicBehavior", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ContainerBasicBehavior", ContainerBasicBehavior = (_dec = ccclass('ContainerBasicBehavior'), _dec(_class = class ContainerBasicBehavior extends Component {
        init() {} // Implementation


        openContainer() {// Open container logic
        }

        closeContainer() {// Close container logic
        }

        closeContainerTween() {// Close container tween logic
        }

        openContainerTween() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1091a016da3d8d2c947df3ef4cdccc1282087de8.js.map