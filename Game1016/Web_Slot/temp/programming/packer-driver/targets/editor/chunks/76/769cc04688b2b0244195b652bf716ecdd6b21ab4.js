System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, CCInteger, Enum, RealCurve, EaseType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _crd, ccclass, property, ReelTempoConfig;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEaseType(extras) {
    _reporterNs.report("EaseType", "../../Core/TweenExt", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCFloat = _cc.CCFloat;
      CCInteger = _cc.CCInteger;
      Enum = _cc.Enum;
      RealCurve = _cc.RealCurve;
    }, function (_unresolved_2) {
      EaseType = _unresolved_2.EaseType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "79bdep8T79F55nEZ/ocPKil", "ReelTempoConfig", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'CCInteger', 'Component', 'Enum', 'Node', 'RealCurve']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ReelTempoConfig", ReelTempoConfig = (_dec = ccclass('ReelTempoConfig'), _dec2 = property({
        displayName: '滾輪啟動時回彈',
        group: {
          name: '回彈配置',
          displayOrder: 1
        }
      }), _dec3 = property({
        displayName: '滾輪停止時回彈',
        group: {
          name: '回彈配置',
          displayOrder: 1
        }
      }), _dec4 = property({
        displayName: '滾輪回彈使用自定義曲線',
        group: {
          name: '回彈配置',
          displayOrder: 1
        }
      }), _dec5 = property({
        type: Enum(_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType),
        displayName: '滾輪回彈掉落曲線',

        visible() {
          return !this.useRealCurve;
        },

        tooltip: '回彈掉落的easing，可以參考PublicReel\\Example\\Arts\Atlases\\TweenEasing.png'
      }), _dec6 = property({
        type: RealCurve,
        displayName: '滾輪回彈掉落曲線',

        visible() {
          return this.useRealCurve;
        }

      }), _dec7 = property({
        type: CCFloat,
        displayName: '回彈掉落的時間',
        group: {
          name: '回彈配置',
          displayOrder: 1
        }
      }), _dec8 = property({
        type: Enum(_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType),
        displayName: '滾輪回彈向上曲線',

        visible() {
          return !this.useRealCurve;
        },

        tooltip: '回彈上升的easing，可以參考PublicReel\\Example\\Arts\\Atlases\\TweenEasing.png'
      }), _dec9 = property({
        type: RealCurve,
        displayName: '滾輪回彈向上曲線',

        visible() {
          return this.useRealCurve;
        }

      }), _dec10 = property({
        type: CCFloat,
        displayName: '回彈上升的時間',
        group: {
          name: '回彈配置',
          displayOrder: 1
        }
      }), _dec11 = property({
        type: CCFloat,
        displayName: '滾輪滾動一格',
        min: 0,
        max: 99,
        step: 0.01,
        slide: true,
        group: {
          name: '時間配置',
          id: '1'
        }
      }), _dec12 = property({
        type: CCFloat,
        displayName: '滾輪滾動',
        min: 0,
        max: 99,
        step: 0.01,
        slide: true,
        group: {
          name: '時間配置',
          id: '1'
        }
      }), _dec13 = property({
        type: CCFloat,
        displayName: '滾輪啟動間隔',
        min: 0,
        max: 99,
        step: 0.01,
        slide: true,
        group: {
          name: '時間配置',
          id: '1'
        }
      }), _dec14 = property({
        type: CCFloat,
        displayName: '滾輪停止間隔',
        min: 0,
        max: 99,
        step: 0.01,
        slide: true,
        group: {
          name: '時間配置',
          id: '1'
        }
      }), _dec15 = property({
        type: CCFloat,
        displayName: '滾輪聽牌間隔',
        min: 0,
        max: 99,
        step: 0.01,
        slide: true,
        group: {
          name: '時間配置',
          id: '1'
        }
      }), _dec16 = property({
        type: RealCurve,
        displayName: '滾輪滾動曲線',
        group: {
          name: '時間配置',
          id: '1'
        }
      }), _dec17 = property({
        type: CCInteger,
        displayName: '滾輪隨機資料長度',
        min: 0,
        max: 99,
        step: 1,
        slide: true,
        group: {
          name: '其他配置',
          id: '3'
        }
      }), _dec18 = property({
        type: CCFloat,
        displayName: '滾輪聽牌隨機資料長度',
        min: 0,
        max: 99,
        step: 1,
        slide: true,
        group: {
          name: '其他配置',
          id: '3'
        }
      }), _dec(_class = (_class2 = class ReelTempoConfig {
        constructor() {
          _initializerDefineProperty(this, "startBounce", _descriptor, this);

          _initializerDefineProperty(this, "endBounce", _descriptor2, this);

          _initializerDefineProperty(this, "useRealCurve", _descriptor3, this);

          _initializerDefineProperty(this, "downBounceEasing", _descriptor4, this);

          _initializerDefineProperty(this, "downBounceRealCurve", _descriptor5, this);

          _initializerDefineProperty(this, "downBounceDuration", _descriptor6, this);

          _initializerDefineProperty(this, "upBounceEasing", _descriptor7, this);

          _initializerDefineProperty(this, "upBounceRealCurve", _descriptor8, this);

          _initializerDefineProperty(this, "upBounceDuration", _descriptor9, this);

          _initializerDefineProperty(this, "rollingOnceTime", _descriptor10, this);

          _initializerDefineProperty(this, "rollingTime", _descriptor11, this);

          _initializerDefineProperty(this, "startSpaceTime", _descriptor12, this);

          _initializerDefineProperty(this, "stopSpaceTime", _descriptor13, this);

          _initializerDefineProperty(this, "readyHandSpaceTime", _descriptor14, this);

          _initializerDefineProperty(this, "rollingCurve", _descriptor15, this);

          _initializerDefineProperty(this, "randomDataLength", _descriptor16, this);

          _initializerDefineProperty(this, "readyHandDataLength", _descriptor17, this);

          this.rollingCurve.addKeyFrame(0, 0);
          this.rollingCurve.addKeyFrame(1, 1);
          this.downBounceRealCurve.addKeyFrame(0, 0);
          this.downBounceRealCurve.addKeyFrame(1, 1);
          this.upBounceRealCurve.addKeyFrame(0, 0);
          this.upBounceRealCurve.addKeyFrame(1, 1);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "startBounce", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "endBounce", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "useRealCurve", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "downBounceEasing", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
            error: Error()
          }), EaseType) : EaseType).CubicOut;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "downBounceRealCurve", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new RealCurve();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "downBounceDuration", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.2;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "upBounceEasing", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
            error: Error()
          }), EaseType) : EaseType).Linear;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "upBounceRealCurve", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new RealCurve();
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "upBounceDuration", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.1;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "rollingOnceTime", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.05;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "rollingTime", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.5;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "startSpaceTime", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.05;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "stopSpaceTime", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.1;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "readyHandSpaceTime", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.1;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "rollingCurve", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new RealCurve();
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "randomDataLength", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 4;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "readyHandDataLength", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 12;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=769cc04688b2b0244195b652bf716ecdd6b21ab4.js.map