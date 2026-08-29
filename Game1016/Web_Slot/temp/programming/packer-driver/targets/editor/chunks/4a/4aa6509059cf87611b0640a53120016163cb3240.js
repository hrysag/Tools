System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _crd;

  function _reportPossibleCrUseOfAnimationPlayInfo(extras) {
    _reporterNs.report("AnimationPlayInfo", "./AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniCtrlInfoDef(extras) {
    _reporterNs.report("AniCtrlInfoDef", "../Components/AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIBasicPoolObjComponent(extras) {
    _reporterNs.report("IBasicPoolObjComponent", "../../ObjectPoolManager/Definitions/IBasicPoolObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReelInfo(extras) {
    _reporterNs.report("IReelInfo", "../../BasicGameDataDefinition/BasicGameDataDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlaySelector(extras) {
    _reporterNs.report("PlaySelector", "./IPlayOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfParticleReset(extras) {
    _reporterNs.report("ParticleReset", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
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

      _cclegacy._RF.push({}, "1c2d92lpEpC34pV8ALQrHqX", "IAnimationControl", undefined);

      //import { ParticleReset } from 'db://assets/Scripts/Utils/ParticleReset';
      __checkObsolete__(['Component']);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4aa6509059cf87611b0640a53120016163cb3240.js.map