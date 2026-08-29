System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, ContainerBehaviour, _crd;

  function _reportPossibleCrUseOfIBasicShowContainer(extras) {
    _reporterNs.report("IBasicShowContainer", "../IBasicShowContainerManager", _context.meta, extras);
  }

  _export("ContainerBehaviour", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f8111IrUr5L076ehDHXVyjz", "ContainerBehaviour", undefined);

      __checkObsolete__(['Component']);

      _export("ContainerBehaviour", ContainerBehaviour = class ContainerBehaviour extends Component {
        // Implementation
        openContainer() {// Open container logic
        }

        closeContainer() {// Close container logic
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=86123bcce12f6a246e31dc857dd2673a5b4c40fe.js.map