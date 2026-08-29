System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BaseEffectFactory, EffectData, BulletEffectSourceType, instantiate, UITransform, Sprite, Layers, v2, LoadingResManager, log, PrefabEffectFactory, _crd;

  function _reportPossibleCrUseOfBaseEffectFactory(extras) {
    _reporterNs.report("BaseEffectFactory", "./BasicBulletEffectData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectData(extras) {
    _reporterNs.report("EffectData", "./BasicBulletEffectData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletEffectSourceType(extras) {
    _reporterNs.report("BulletEffectSourceType", "../BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfEffectBase(extras) {
    _reporterNs.report("IfEffectBase", "../BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectOption(extras) {
    _reporterNs.report("EffectOption", "../BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChangeEffectSourceOption(extras) {
    _reporterNs.report("ChangeEffectSourceOption", "../BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../loading/LoadingResManager", _context.meta, extras);
  }

  _export("PrefabEffectFactory", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      UITransform = _cc.UITransform;
      Sprite = _cc.Sprite;
      Layers = _cc.Layers;
      v2 = _cc.v2;
      log = _cc.log;
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

      _cclegacy._RF.push({}, "0752fEMupdCz6vL9h8Z9wRf", "PrefabEffectFactory", undefined);
      /**
       * Created by EricHuang on 2023/08/15.
       */


      __checkObsolete__(['instantiate', 'UITransform', 'Sprite', 'SpriteFrame', 'Layers', 'v2']);

      __checkObsolete__(['log']);

      _export("PrefabEffectFactory", PrefabEffectFactory = class PrefabEffectFactory extends (_crd && BaseEffectFactory === void 0 ? (_reportPossibleCrUseOfBaseEffectFactory({
        error: Error()
      }), BaseEffectFactory) : BaseEffectFactory) {
        constructor() {
          super((_crd && BulletEffectSourceType === void 0 ? (_reportPossibleCrUseOfBulletEffectSourceType({
            error: Error()
          }), BulletEffectSourceType) : BulletEffectSourceType).EFFECTSOURCE_PREFAB);
        }

        createEffect(effectInfo) {
          let effect = this._aryPoolEffects.length > 0 ? this._aryPoolEffects.pop() : new (_crd && EffectData === void 0 ? (_reportPossibleCrUseOfEffectData({
            error: Error()
          }), EffectData) : EffectData)();
          effect.id = effectInfo.id;
          effect.strSystemId = this.strSystemId;
          effect.assetsId = effectInfo.assetsId; //--20240325

          effect.effectObj = this.getRecyclePrefab(effectInfo.assetsId);

          if (!effect.effectObj) {
            effect.effectObj = instantiate(effectInfo.prefab);
          }

          let spr = effect.effectObj.getComponent(Sprite); //--reset用的

          effect.ogSpriteFrame = spr.spriteFrame;
          effect.effectObj.layer = Layers.Enum.UI_2D;
          effect.effectObj.active = true;
          /**
           * 用來辨識是哪個東西,後綴加上_bullet用來表示是子彈
           * effectInfo.id=子彈的id(server送進來的)
           */

          effect.effectObj.name = effectInfo.id + '_bullet';
          let UITransformComponent = effect.effectObj.getComponent(UITransform);

          if (!UITransformComponent) {
            UITransformComponent = effect.effectObj.addComponent(UITransform);
          }

          let contanSize = UITransformComponent.contentSize; //--reset用的

          effect.ogUiTransFormData = {
            w: contanSize.width,
            h: contanSize.height,
            x: UITransformComponent.anchorX,
            y: UITransformComponent.anchorY
          };
          effect.original_Width = UITransformComponent.width;
          effect.original_Height = UITransformComponent.height;
          effect.prefab = effectInfo.prefab;
          return effect;
        } //--換網子的material


        changeEffectSource(option) {
          //--step1檢查prefab裡面的東西
          let targetEffect = option.baseEffect; //--換單張圖-prefab/textures/fishHunterPopup

          if (option.assetsId && option.spriteAtlas == '') {
            //--在檢查能不能換,不能換就要產生一個新的
            let texture = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrame(option.assetsId);
            let spr = targetEffect.effectObj.getComponent(Sprite);

            if (spr) {
              //targetEffect.ogSpriteFrame=spr.spriteFrame;
              spr.spriteFrame = texture;
            }
          }

          if (option.assetsId && option.spriteAtlas != '') {
            //--在檢查能不能換,不能換就要產生一個新的
            let texture2 = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrameFromSpriteAtlas(option.spriteAtlas, option.assetsId);
            let spr2 = targetEffect.effectObj.getComponent(Sprite);
            log('changeEffectSource_texture', texture2, spr2, targetEffect.effectObj);

            if (spr2) {
              //targetEffect.ogSpriteFrame=spr2.spriteFrame;
              spr2.spriteFrame = texture2;
            }
          } //--整個prefab替換掉


          if (option.prefab) {
            let parent = option.baseEffect.effectObj.parent;
            parent.removeChild(option.baseEffect.effectObj);
            option.baseEffect.effectObj = instantiate(option.prefab);
          }

          let UITransformComponent = option.baseEffect.effectObj.getComponent(UITransform);

          if (!UITransformComponent) {
            UITransformComponent = option.baseEffect.effectObj.addComponent(UITransform);
          }

          UITransformComponent.anchorPoint = v2(0.5, 0.5);
          option.baseEffect.original_Width = UITransformComponent.width;
          option.baseEffect.original_Height = UITransformComponent.height;
          return null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a12fbe2bced665517945eb9295d1d472873ae42c.js.map