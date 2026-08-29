System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ReelTempoConfig, ProcessTempoConfig, AnimTempoConfig, JsonSerialization, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _dec5, _dec6, _dec7, _dec8, _class4, _class5, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, TempoConfig, GameTempoConfig;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfReelTempoConfig(extras) {
    _reporterNs.report("ReelTempoConfig", "./ReelTempoConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProcessTempoConfig(extras) {
    _reporterNs.report("ProcessTempoConfig", "./ProcessTempoConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimTempoConfig(extras) {
    _reporterNs.report("AnimTempoConfig", "./AnimTempoConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJsonSerialization(extras) {
    _reporterNs.report("JsonSerialization", "./JsonSerialization", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ReelTempoConfig = _unresolved_2.ReelTempoConfig;
    }, function (_unresolved_3) {
      ProcessTempoConfig = _unresolved_3.ProcessTempoConfig;
    }, function (_unresolved_4) {
      AnimTempoConfig = _unresolved_4.AnimTempoConfig;
    }, function (_unresolved_5) {
      JsonSerialization = _unresolved_5.JsonSerialization;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2cbe5d2REFIrp1j/f293Mzg", "GameTempoConfig", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TempoConfig", TempoConfig = (_dec = ccclass('TempoConfig'), _dec2 = property({
        type: _crd && ProcessTempoConfig === void 0 ? (_reportPossibleCrUseOfProcessTempoConfig({
          error: Error()
        }), ProcessTempoConfig) : ProcessTempoConfig,
        displayName: "流程設定"
      }), _dec3 = property({
        type: _crd && ReelTempoConfig === void 0 ? (_reportPossibleCrUseOfReelTempoConfig({
          error: Error()
        }), ReelTempoConfig) : ReelTempoConfig,
        displayName: "滾輪設定"
      }), _dec4 = property({
        type: _crd && AnimTempoConfig === void 0 ? (_reportPossibleCrUseOfAnimTempoConfig({
          error: Error()
        }), AnimTempoConfig) : AnimTempoConfig,
        displayName: "動畫設定"
      }), _dec(_class = (_class2 = class TempoConfig {
        constructor() {
          _initializerDefineProperty(this, "processTempoConfig", _descriptor, this);

          _initializerDefineProperty(this, "reelTempoConfig", _descriptor2, this);

          _initializerDefineProperty(this, "animTempoConfig", _descriptor3, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "processTempoConfig", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new (_crd && ProcessTempoConfig === void 0 ? (_reportPossibleCrUseOfProcessTempoConfig({
            error: Error()
          }), ProcessTempoConfig) : ProcessTempoConfig)();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "reelTempoConfig", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new (_crd && ReelTempoConfig === void 0 ? (_reportPossibleCrUseOfReelTempoConfig({
            error: Error()
          }), ReelTempoConfig) : ReelTempoConfig)();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "animTempoConfig", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new (_crd && AnimTempoConfig === void 0 ? (_reportPossibleCrUseOfAnimTempoConfig({
            error: Error()
          }), AnimTempoConfig) : AnimTempoConfig)();
        }
      })), _class2)) || _class));

      _export("GameTempoConfig", GameTempoConfig = (_dec5 = ccclass('GameTempoConfig'), _dec6 = property({
        type: TempoConfig,
        displayName: '普通模式設定'
      }), _dec7 = property({
        type: TempoConfig,
        displayName: '快速模式設定'
      }), _dec8 = property({
        type: TempoConfig,
        displayName: '急速模式設定'
      }), _dec5(_class4 = (_class5 = class GameTempoConfig extends (_crd && JsonSerialization === void 0 ? (_reportPossibleCrUseOfJsonSerialization({
        error: Error()
      }), JsonSerialization) : JsonSerialization) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "normalTempoConfig", _descriptor4, this);

          _initializerDefineProperty(this, "turboTempoConfig", _descriptor5, this);

          _initializerDefineProperty(this, "superTempoConfig", _descriptor6, this);
        }

      }, (_descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "normalTempoConfig", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new TempoConfig();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "turboTempoConfig", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new TempoConfig();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "superTempoConfig", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new TempoConfig();
        }
      })), _class5)) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1f0b3fe679335d8d7451522aec9a83b2e28b262f.js.map