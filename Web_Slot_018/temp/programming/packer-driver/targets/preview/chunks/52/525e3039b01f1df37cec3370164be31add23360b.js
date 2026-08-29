System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, _dec, _class, _crd, ccclass, property, BasicRotationResolution;

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "../../../../../../Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRotationResolution(extras) {
    _reporterNs.report("IRotationResolution", "./IBG_Ani", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bca22Fj33VO8I76zgfKPDVA", "BasicRotationResolution", undefined);

      __checkObsolete__(['Component', 'Enum', '_decorator', 'CCBoolean', 'sp', 'Node', 'CCString']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BasicRotationResolution", BasicRotationResolution = (_dec = ccclass('BasicRotationResolution'), _dec(_class = class BasicRotationResolution extends Component {
        changeRotationResolution(value) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=525e3039b01f1df37cec3370164be31add23360b.js.map