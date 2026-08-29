System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BaseEffectFactory, EffectData, BulletEffectSourceType, LoadingResManager, Sprite, Node, UITransform, ImageEffectFactory, _crd;

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

  _export("ImageEffectFactory", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Sprite = _cc.Sprite;
      Node = _cc.Node;
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

      _cclegacy._RF.push({}, "db983z92CNO8oo7q5wuDKQJ", "ImageEffectFactory", undefined);
      /**
       * Created by EricHuang on 2023/08/14.
       */


      __checkObsolete__(['Sprite', 'SpriteFrame', 'Node', 'UITransform']);

      _export("ImageEffectFactory", ImageEffectFactory = class ImageEffectFactory extends (_crd && BaseEffectFactory === void 0 ? (_reportPossibleCrUseOfBaseEffectFactory({
        error: Error()
      }), BaseEffectFactory) : BaseEffectFactory) {
        constructor() {
          super((_crd && BulletEffectSourceType === void 0 ? (_reportPossibleCrUseOfBulletEffectSourceType({
            error: Error()
          }), BulletEffectSourceType) : BulletEffectSourceType).EFFECTSOURC_IMAGE);
        } //--在bullet 裡面


        createEffect(effectInfo) {
          let effect = this._aryPoolEffects.length > 0 ? this._aryPoolEffects.pop() : new (_crd && EffectData === void 0 ? (_reportPossibleCrUseOfEffectData({
            error: Error()
          }), EffectData) : EffectData)();
          effect.id = effectInfo.id;
          effect.strSystemId = this.strSystemId; //effect.effectObj=new PIXI.Sprite(effectInfo.assets[0]);

          let effectNode = new Node();
          let spr = effectNode.addComponent(Sprite);
          let UITransformComponent = effectNode.addComponent(UITransform);
          effect.effectObj = effectNode;
          spr.spriteFrame = effectInfo.assets[0];
          effect.effectObj.name = effectInfo.id + '';
          effect.original_Width = UITransformComponent.width;
          effect.original_Height = UITransformComponent.height;
          effect.texture.push(effectInfo.assets[0]);
          return effect;
        }

        changeEffectSource(option) {
          let r = null;

          if (option.baseEffect) {
            let aryTextures = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames(option.assetsId);

            if (aryTextures.length == 1) {
              option.baseEffect.texture = aryTextures;
              let uiTransform = option.baseEffect.effectObj.getComponent(UITransform);
              option.baseEffect.original_Width = uiTransform.width;
              option.baseEffect.original_Height = uiTransform.height;
            }
          }

          return r; //--有資料異動要回傳effect data--
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2a97b236137f0f6ed82022d8757a385f904b383e.js.map