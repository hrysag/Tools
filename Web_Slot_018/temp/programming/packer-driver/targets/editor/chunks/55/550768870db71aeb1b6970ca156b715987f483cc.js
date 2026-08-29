System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, CustomAnimationController;

  function _reportPossibleCrUseOfIAnimationControl(extras) {
    _reporterNs.report("IAnimationControl", "../Definitions/IAnimationControl", _context.meta, extras);
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

  function _reportPossibleCrUseOfAniCtrlPropDef(extras) {
    _reporterNs.report("AniCtrlPropDef", "./AniStateLists/AnimationPlayStateBase", _context.meta, extras);
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

      _cclegacy._RF.push({}, "8f90dofmw1JI4JhZxbEuv4R", "CustomAnimationController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CustomAnimationController", CustomAnimationController = (_dec = ccclass('CustomAnimationController'), _dec(_class = class CustomAnimationController extends Component {
        constructor(...args) {
          super(...args);
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

        //--不刪除且持續留在場景中
        onLoad() {}

        init() {}

        destroyAniController() {}

        playAniWithAniCtrDef(value) {}

        playAni(value) {}

        stopAni() {} //--20250722-待補


        stopPromiseAni() {}

        pauseAni() {}

        resumeAni() {}

        setAniDataInfo(value) {}

        beforeDestroy() {}

        resetData() {}

        playAniWithCallBack(callBack, value) {}

        playAniInPromise(value) {
          return null;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=550768870db71aeb1b6970ca156b715987f483cc.js.map