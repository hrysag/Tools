System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BulletEffectSourceType, ImageEffectFactory, McEffectFactory, PrefabEffectFactory, LoadingResManager, log, FishBulletEffectCenter, _crd;

  function _reportPossibleCrUseOfBulletEffectSourceType(extras) {
    _reporterNs.report("BulletEffectSourceType", "../BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfEffectFactory(extras) {
    _reporterNs.report("IfEffectFactory", "../BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectFactoryOption(extras) {
    _reporterNs.report("EffectFactoryOption", "../BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfImageEffectFactory(extras) {
    _reporterNs.report("ImageEffectFactory", "./ImageEffectFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMcEffectFactory(extras) {
    _reporterNs.report("McEffectFactory", "./McEffectFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabEffectFactory(extras) {
    _reporterNs.report("PrefabEffectFactory", "./PrefabEffectFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../loading/LoadingResManager", _context.meta, extras);
  }

  _export("FishBulletEffectCenter", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      BulletEffectSourceType = _unresolved_2.BulletEffectSourceType;
    }, function (_unresolved_3) {
      ImageEffectFactory = _unresolved_3.ImageEffectFactory;
    }, function (_unresolved_4) {
      McEffectFactory = _unresolved_4.McEffectFactory;
    }, function (_unresolved_5) {
      PrefabEffectFactory = _unresolved_5.PrefabEffectFactory;
    }, function (_unresolved_6) {
      LoadingResManager = _unresolved_6.LoadingResManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0951fRPWH1DRLL5ffSrhHb2", "BulletEffectCenter", undefined);
      /**
       * Created by EricHuang on 2023/08/15.
       */


      __checkObsolete__(['log']);

      _export("FishBulletEffectCenter", FishBulletEffectCenter = class FishBulletEffectCenter {
        static getInstance() {
          return FishBulletEffectCenter.instance == null ? new FishBulletEffectCenter() : FishBulletEffectCenter.instance;
        }

        constructor() {
          this._mapFactorys = void 0;

          if (FishBulletEffectCenter.instance != null) {
            throw new Error("please use getInstance_BulletEffectCenter");
          }

          FishBulletEffectCenter.instance = this;
          this._mapFactorys = {};
        }

        getEffectProduceFactory(value) {
          let typeId = -1;
          let effectFactory = null;

          if (value.assetsId) {
            if ((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames(value.assetsId).length == 1) {
              typeId = (_crd && BulletEffectSourceType === void 0 ? (_reportPossibleCrUseOfBulletEffectSourceType({
                error: Error()
              }), BulletEffectSourceType) : BulletEffectSourceType).EFFECTSOURC_IMAGE;
            } else if ((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames(value.assetsId).length > 1) {
              typeId = (_crd && BulletEffectSourceType === void 0 ? (_reportPossibleCrUseOfBulletEffectSourceType({
                error: Error()
              }), BulletEffectSourceType) : BulletEffectSourceType).EFFECTSOURCE_MOVIECLIP;
            }
          }

          if (value.prefabId) {
            if ((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getPrefab(value.prefabId)) {
              typeId = (_crd && BulletEffectSourceType === void 0 ? (_reportPossibleCrUseOfBulletEffectSourceType({
                error: Error()
              }), BulletEffectSourceType) : BulletEffectSourceType).EFFECTSOURCE_PREFAB;
            }
          }

          if (value.effectObjType) {
            typeId = value.effectObjType;
          }

          log('check_factory_creator', typeId);

          if (!this._mapFactorys[typeId]) {
            if (typeId == (_crd && BulletEffectSourceType === void 0 ? (_reportPossibleCrUseOfBulletEffectSourceType({
              error: Error()
            }), BulletEffectSourceType) : BulletEffectSourceType).EFFECTSOURCE_MOVIECLIP) {
              effectFactory = new (_crd && McEffectFactory === void 0 ? (_reportPossibleCrUseOfMcEffectFactory({
                error: Error()
              }), McEffectFactory) : McEffectFactory)();
            } else if (typeId == (_crd && BulletEffectSourceType === void 0 ? (_reportPossibleCrUseOfBulletEffectSourceType({
              error: Error()
            }), BulletEffectSourceType) : BulletEffectSourceType).EFFECTSOURC_IMAGE) {
              effectFactory = new (_crd && ImageEffectFactory === void 0 ? (_reportPossibleCrUseOfImageEffectFactory({
                error: Error()
              }), ImageEffectFactory) : ImageEffectFactory)();
            } else if (typeId == (_crd && BulletEffectSourceType === void 0 ? (_reportPossibleCrUseOfBulletEffectSourceType({
              error: Error()
            }), BulletEffectSourceType) : BulletEffectSourceType).EFFECTSOURCE_PREFAB) {
              effectFactory = new (_crd && PrefabEffectFactory === void 0 ? (_reportPossibleCrUseOfPrefabEffectFactory({
                error: Error()
              }), PrefabEffectFactory) : PrefabEffectFactory)();
            } else if (typeId == (_crd && BulletEffectSourceType === void 0 ? (_reportPossibleCrUseOfBulletEffectSourceType({
              error: Error()
            }), BulletEffectSourceType) : BulletEffectSourceType).EFFECTSOURCE_GRAPHIC) {//--測試使用的,有空再做..20230815
            }

            this._mapFactorys[typeId] = effectFactory;
          } else {
            effectFactory = this._mapFactorys[typeId];
          }

          return effectFactory;
        }

      });

      FishBulletEffectCenter.instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ebc9ac2d051873c557ca28f683cdedd630150d1f.js.map