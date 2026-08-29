System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, MixedASController;

  function _reportPossibleCrUseOfAniCtrlPropDef(extras) {
    _reporterNs.report("AniCtrlPropDef", "../Components/AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfParticleExtension(extras) {
    _reporterNs.report("ParticleExtension", "./ParticleExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationPlayInfo(extras) {
    _reporterNs.report("AnimationPlayInfo", "../Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotMachineIndexInfo(extras) {
    _reporterNs.report("SlotMachineIndexInfo", "../Definitions/AnimationDataOptions", _context.meta, extras);
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

      _cclegacy._RF.push({}, "72d1ciUfgdKtZcKjXC6OM48", "MixedASController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MixedASController", MixedASController = (_dec = ccclass('MixedASController'), _dec(_class = class MixedASController extends Component {
        constructor() {
          super(...arguments);
          this.tokenID = void 0;
          //--單一的識別碼
          this.slotMachineIndexInfo = void 0;
          this.groupID = void 0;
          //--會有同一個物件在不同的group裡面(第四軸重複的)
          this.isPlaying = void 0;
          this.particleSystem = void 0;
          this.keep = void 0;
          this.onAniComplete = void 0;
        }

        onLoad() {}

        init() {}

        destroyAniController() {}

        /*
        public setAniTarget(value: AnimationPlayInfo): void {
         }*/
        playAniWithAniCtrDef(value) {}

        playAni(value) {}

        stopAni() {}

        pauseAni() {}

        resumeAni() {}

        setAniDataInfo(value) {}

        beforeDestroy() {}

        resetData() {}

        playAniWithCallBack(callBack, value) {} //--20250722-待補


        stopPromiseAni() {}

        playAniInPromise(value) {
          return null;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=84bc43a7145c7938f319c18cb2fccfb7bdc86ba8.js.map