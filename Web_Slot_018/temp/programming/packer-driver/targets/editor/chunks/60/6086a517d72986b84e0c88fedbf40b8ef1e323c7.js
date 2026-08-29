System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _crd;

  function _reportPossibleCrUseOfAnimationPlayInfo(extras) {
    _reporterNs.report("AnimationPlayInfo", "./AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotMachineIndexInfo(extras) {
    _reporterNs.report("SlotMachineIndexInfo", "./AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniCtrlPropDef(extras) {
    _reporterNs.report("AniCtrlPropDef", "../Components/AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfParticleExtension(extras) {
    _reporterNs.report("ParticleExtension", "../Components/ParticleExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIBasicPoolObject(extras) {
    _reporterNs.report("IBasicPoolObject", "../../ObjectPoolManager/Definitions/IBasicPoolObject", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ba426ttF+5HuYTrsT5Itmul", "IAnimationControl", undefined);

      __checkObsolete__(['Component']);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6086a517d72986b84e0c88fedbf40b8ef1e323c7.js.map