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

  function _reportPossibleCrUseOfIReelInfo(extras) {
    _reporterNs.report("IReelInfo", "../../BasicGameDataDefinition/BasicGameDataDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniCtrlInfoDef(extras) {
    _reporterNs.report("AniCtrlInfoDef", "./AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlaySelector(extras) {
    _reporterNs.report("PlaySelector", "../Definitions/IPlayOptions", _context.meta, extras);
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

      _cclegacy._RF.push({}, "f7261yztaJE/Kf3KU6TC93c", "CustomAnimationController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CustomAnimationController", CustomAnimationController = (_dec = ccclass('CustomAnimationController'), _dec(_class = class CustomAnimationController extends Component {
        constructor() {
          super(...arguments);
          //--PS這裡不要用抽象類別..查找工具是指定可以實例化的component
          this.tokenID = void 0;
          //--單一的識別碼
          this.prefabKey = void 0;
          //--prefab的key
          this.slotMachineIndexInfo = void 0;
          this.groupID = void 0;
          //--會有同一個物件在不同的group裡面(第四軸重複的)
          this.isPlaying = void 0;
          this.particleSystem = void 0;
          this.goBackDefaultWithoutDestroy = void 0;
          this.keep = void 0;
        }

        //--不刪除且持續留在場景中
        init() {}

        onObjInstance() {}

        onAfterDestroy() {}

        onAniComplete() {}

        goBackToDefault(flag) {
          if (flag === void 0) {
            flag = true;
          }
        }

        stopNow(backDefault) {
          if (backDefault === void 0) {
            backDefault = false;
          }
        }

        stopAni(backDefault) {}

        stopPromiseAni(backDefault) {}

        pauseAni() {}

        resumeAni() {}

        setAniDataInfo(value) {}

        beforeDestroy() {}

        resetData() {}

        playAniWithAniCtrDef(value) {}

        playAni(value) {}

        playAniWithCallBack(callBack, backDefault, value) {}

        // Implementation here
        playAniInPromise(value) {
          return null;
        } //--20251011-新增直接查詢播放資料的功能(他不會改變當前播放狀態)


        peakAniDataInfo(value) {
          return null;
        } //-不能用onDestroy這個字component拿去用了

        /*
        public onAfterDestroy(): void
        abstract onAniComplete(): void;
        abstract stopAni(backDefault?: boolean): void;//--是否回到預設狀態動畫,預設=false
        abstract stopPromiseAni(backDefault?: boolean): void;//--強制中止promise動畫(ex:表演到一半的時候直接停止進行下面的動作(中斷輪播之類的))
        abstract pauseAni(): void
        abstract resumeAni(): void
        abstract setAniDataInfo(value: AnimationPlayInfo): void
        abstract beforeDestroy(): void
        abstract resetData(): void
        abstract playAniWithAniCtrDef(value: AniCtrlInfoDef): void
        abstract playAni(value?: PlaySelector): void
        abstract playAniWithCallBack(callBack: Function, backDefault?: boolean, value?: PlaySelector): void;
        // Implementation here
        abstract playAniInPromise(value?: PlaySelector): Promise<void>
        */


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=95a9a47fbac0cfdd6f53604b369ce6766f639c67.js.map