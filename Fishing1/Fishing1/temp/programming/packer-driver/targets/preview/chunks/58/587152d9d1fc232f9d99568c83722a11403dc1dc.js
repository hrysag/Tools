System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BaseEffectFactory, EffectData, BulletEffectSourceType, LoadingResManager, Node, Animation, AnimationClip, UITransform, McEffectFactory, _crd;

  function _reportPossibleCrUseOfBaseEffectFactory(extras) {
    _reporterNs.report("BaseEffectFactory", "./BasicBulletEffectData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectData(extras) {
    _reporterNs.report("EffectData", "./BasicBulletEffectData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletEffectSourceType(extras) {
    _reporterNs.report("BulletEffectSourceType", "./../BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfEffectBase(extras) {
    _reporterNs.report("IfEffectBase", "./../BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectOption(extras) {
    _reporterNs.report("EffectOption", "./../BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChangeEffectSourceOption(extras) {
    _reporterNs.report("ChangeEffectSourceOption", "./../BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../loading/LoadingResManager", _context.meta, extras);
  }

  _export("McEffectFactory", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      Animation = _cc.Animation;
      AnimationClip = _cc.AnimationClip;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      BaseEffectFactory = _unresolved_2.BaseEffectFactory;
    }, function (_unresolved_3) {
      EffectData = _unresolved_3.EffectData;
    }, function (_unresolved_4) {
      BulletEffectSourceType = _unresolved_4.BulletEffectSourceType;
    }, function (_unresolved_5) {
      LoadingResManager = _unresolved_5.LoadingResManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6e8beHECrRM0qrcNaUz+JTX", "McEffectFactory", undefined);
      /**
       * Created by EricHuang on 2023/08/14.
       */


      __checkObsolete__(['SpriteFrame', 'Node', 'Animation', 'AnimationClip', 'UITransform']);

      _export("McEffectFactory", McEffectFactory = class McEffectFactory extends (_crd && BaseEffectFactory === void 0 ? (_reportPossibleCrUseOfBaseEffectFactory({
        error: Error()
      }), BaseEffectFactory) : BaseEffectFactory) {
        constructor() {
          super((_crd && BulletEffectSourceType === void 0 ? (_reportPossibleCrUseOfBulletEffectSourceType({
            error: Error()
          }), BulletEffectSourceType) : BulletEffectSourceType).EFFECTSOURCE_MOVIECLIP);
        }

        createEffect(effectInfo) {
          var effect = this._aryPoolEffects.length > 0 ? this._aryPoolEffects.pop() : new (_crd && EffectData === void 0 ? (_reportPossibleCrUseOfEffectData({
            error: Error()
          }), EffectData) : EffectData)();
          effect.id = effectInfo.id;
          effect.strSystemId = this.strSystemId;
          var speed = 1; //--ps 已經取完素材了

          if (effectInfo.fps) {
            effect.fps = effectInfo.fps;
            speed = Math.floor(effectInfo.assets.length / effectInfo.fps / effectInfo.assets.length * 1000); //--以毫秒為單位  
          }

          var effectNode = new Node();
          var uiTransFormComponent = effectNode.addComponent(UITransform);
          var ani = effectNode.addComponent(Animation);
          var clip = AnimationClip.createWithSpriteFrames(effectInfo.assets, speed);
          clip.name = effectInfo.id + '';
          clip.speed = speed;
          clip.wrapMode = AnimationClip.WrapMode.Loop;
          ani.addClip(clip);
          effect.effectObj = effectNode;
          effect.texture = effectInfo.assets;
          effect.original_Width = uiTransFormComponent.width;
          effect.original_Height = uiTransFormComponent.height; //ani.play(clip.name);

          return effect;
        }

        changeEffectSource(option) {
          var rData = null;

          if (option.baseEffect) {
            if (option.assetsId) {
              var aryTextures = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                error: Error()
              }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames(option.assetsId);

              if (aryTextures.length > 0) {
                var aniComponent = option.baseEffect.effectObj.getComponent(Animation);
                var oldClip = aniComponent.clips[0];
                aniComponent.stop();
                aniComponent.removeClip(oldClip);
                var speed = 1;

                if (option.fps) {
                  option.baseEffect.fps = option.fps;
                  speed = Math.floor(aryTextures.length / option.fps / aryTextures.length * 1000); //--以毫秒為單位  
                }

                var newClip = AnimationClip.createWithSpriteFrames(aryTextures, speed);
                newClip.name = oldClip.name;
                newClip.speed = speed;
                newClip.wrapMode = AnimationClip.WrapMode.Loop;
                aniComponent.addClip(newClip);
                var uiTransform = option.baseEffect.effectObj.getComponent(UITransform);
                option.baseEffect.texture = aryTextures;
                option.baseEffect.original_Width = uiTransform.width;
                option.baseEffect.original_Height = uiTransform.height;
              }
            }
          }

          return rData;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=587152d9d1fc232f9d99568c83722a11403dc1dc.js.map