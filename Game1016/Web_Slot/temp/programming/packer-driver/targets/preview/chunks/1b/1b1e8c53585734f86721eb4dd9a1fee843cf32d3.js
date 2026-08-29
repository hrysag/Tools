System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, CCInteger, Component, Enum, RealCurve, Size, SymbolData, EaseType, LayoutType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _crd, ccclass, property, ReelSettingData;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSymbolData(extras) {
    _reporterNs.report("SymbolData", "./SymbolData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEaseType(extras) {
    _reporterNs.report("EaseType", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayoutType(extras) {
    _reporterNs.report("LayoutType", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
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
      Component = _cc.Component;
      Enum = _cc.Enum;
      RealCurve = _cc.RealCurve;
      Size = _cc.Size;
    }, function (_unresolved_2) {
      SymbolData = _unresolved_2.SymbolData;
    }, function (_unresolved_3) {
      EaseType = _unresolved_3.EaseType;
      LayoutType = _unresolved_3.LayoutType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9413diK+FlIgY5Q5DHv3lWF", "ReelSettingData", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'CCFloat', 'CCInteger', 'Component', 'Enum', 'Node', 'Prefab', 'RealCurve', 'Size', 'SpriteFrame', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ReelSettingData", ReelSettingData = (_dec = ccclass('ReelSettingData'), _dec2 = property({
        type: CCInteger,
        displayName: '單個滾輪icon數量',
        group: {
          id: '0',
          name: 'Icon設定'
        },
        min: 0
      }), _dec3 = property({
        displayName: 'icon尺寸',
        group: {
          id: '0',
          name: 'Icon設定'
        }
      }), _dec4 = property({
        type: CCFloat,
        displayName: 'icon相隔距離',
        group: {
          id: '0',
          name: 'Icon設定'
        }
      }), _dec5 = property({
        range: [0, 255],
        displayName: '壓黑的明亮度',
        slide: true,
        group: {
          id: '0',
          name: 'Icon設定'
        }
      }), _dec6 = property({
        type: _crd && SymbolData === void 0 ? (_reportPossibleCrUseOfSymbolData({
          error: Error()
        }), SymbolData) : SymbolData,
        displayName: 'symbol資料列表',
        group: {
          id: '0',
          name: 'Icon設定'
        }
      }), _dec7 = property({
        displayName: '滾輪可視範圍',
        group: {
          id: '1',
          name: '滾輪設定'
        }
      }), _dec8 = property({
        type: CCInteger,
        displayName: '滾輪數量',
        group: {
          id: '1',
          name: '滾輪設定'
        },
        min: 0
      }), _dec9 = property({
        type: Enum(_crd && LayoutType === void 0 ? (_reportPossibleCrUseOfLayoutType({
          error: Error()
        }), LayoutType) : LayoutType),
        displayName: '滾輪方向',
        group: {
          id: '1',
          name: '滾輪設定'
        }
      }), _dec10 = property({
        displayName: '翻轉方向',
        group: {
          id: '1',
          name: '滾輪設定'
        }
      }), _dec11 = property({
        type: CCFloat,
        displayName: '滾輪間隔',
        group: {
          id: '1',
          name: '滾輪設定'
        },
        min: 0
      }), _dec12 = property({
        type: CCFloat,
        displayName: '普通模式滾輪時間',
        group: {
          id: '1',
          name: '滾輪設定'
        },
        min: 0
      }), _dec13 = property({
        type: CCFloat,
        displayName: '快速模式滾輪時間',
        group: {
          id: '1',
          name: '滾輪設定'
        },
        min: 0
      }), _dec14 = property({
        type: CCFloat,
        displayName: '開始滾間隔時間(小於0同時滾)',
        tooltip: '開始滾動間隔的時間，小於0代表一起滾動',
        group: {
          id: '1',
          name: '滾輪設定'
        }
      }), _dec15 = property({
        displayName: '聽牌時是否受即停影響',
        group: {
          id: '1',
          name: '滾輪設定'
        }
      }), _dec16 = property({
        type: CCInteger,
        displayName: '聽牌停輪間隔資料長度',
        group: {
          id: '1',
          name: '滾輪設定'
        },
        min: 0
      }), _dec17 = property({
        type: RealCurve,
        displayName: '聽牌的easing',
        tooltip: '回彈掉落的easing，可以參考PublicReel\\Example\\Arts\Atlases\\TweenEasing.png',
        group: {
          id: '1',
          name: '滾輪設定'
        }
      }), _dec18 = property({
        displayName: '開始回彈, 掉落會變成上升',
        group: 'Bounce'
      }), _dec19 = property({
        displayName: '結束回彈',
        group: 'Bounce'
      }), _dec20 = property({
        displayName: '使用真實曲線',
        group: 'Bounce'
      }), _dec21 = property({
        type: Enum(_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType),

        visible() {
          var data = this;
          return data.isVisible() && !data.useRealCurve;
        },

        displayName: '回彈掉落的easing',
        tooltip: '回彈掉落的easing，可以參考PublicReel\\Example\\Arts\Atlases\\TweenEasing.png',
        group: 'Bounce'
      }), _dec22 = property({
        type: RealCurve,

        visible() {
          var data = this;
          return data.isVisible() && data.useRealCurve;
        },

        displayName: '回彈掉落的easing',
        tooltip: '回彈掉落的easing，可以參考PublicReel\\Example\\Arts\Atlases\\TweenEasing.png',
        group: 'Bounce'
      }), _dec23 = property({
        type: CCFloat,

        visible() {
          return this.isVisible();
        },

        displayName: '回彈掉落的時間',
        group: 'Bounce'
      }), _dec24 = property({
        type: Enum(_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType),

        visible() {
          var data = this;
          return data.isVisible() && !data.useRealCurve;
        },

        displayName: '回彈上升的easing',
        tooltip: '回彈上升的easing，可以參考PublicReel\\Example\\Arts\\Atlases\\TweenEasing.png',
        group: 'Bounce'
      }), _dec25 = property({
        type: RealCurve,

        visible() {
          var data = this;
          return data.isVisible() && data.useRealCurve;
        },

        displayName: '回彈上升的easing',
        tooltip: '回彈上升的easing，可以參考PublicReel\\Example\\Arts\Atlases\\TweenEasing.png',
        group: 'Bounce'
      }), _dec26 = property({
        type: CCFloat,

        visible() {
          return this.isVisible();
        },

        displayName: '回彈上升的時間',
        group: 'Bounce'
      }), _dec27 = property({
        type: CCFloat,

        visible() {
          return this.isVisible();
        },

        displayName: '回彈掉落的距離',
        group: 'Bounce'
      }), _dec28 = property({
        type: CCFloat,
        displayName: 'NG滾輪轉速(越小越快)',
        group: {
          id: '2',
          name: 'NG'
        },
        min: 0.001,
        step: 0.001
      }), _dec29 = property({
        type: CCInteger,
        displayName: 'NG停輪間隔資料長度',
        group: {
          id: '2',
          name: 'NG'
        },
        min: 0
      }), _dec30 = property({
        type: CCFloat,
        displayName: 'FG滾輪轉速(越小越快)',
        group: {
          id: '3',
          name: 'FG'
        },
        min: 0.001,
        step: 0.001
      }), _dec31 = property({
        type: CCInteger,
        displayName: 'FG停輪間隔資料長度',
        group: {
          id: '3',
          name: 'FG'
        },
        min: 0
      }), _dec(_class = (_class2 = class ReelSettingData extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "iconAmount", _descriptor, this);

          _initializerDefineProperty(this, "iconSize", _descriptor2, this);

          _initializerDefineProperty(this, "iconSpacing", _descriptor3, this);

          _initializerDefineProperty(this, "darkBrightness", _descriptor4, this);

          _initializerDefineProperty(this, "symbolDataList", _descriptor5, this);

          _initializerDefineProperty(this, "reelViewSize", _descriptor6, this);

          _initializerDefineProperty(this, "reelAmount", _descriptor7, this);

          _initializerDefineProperty(this, "layoutType", _descriptor8, this);

          _initializerDefineProperty(this, "inverseDirection", _descriptor9, this);

          _initializerDefineProperty(this, "reelSpace", _descriptor10, this);

          _initializerDefineProperty(this, "normalRollTime", _descriptor11, this);

          _initializerDefineProperty(this, "turboRollTime", _descriptor12, this);

          _initializerDefineProperty(this, "startSpaceTime", _descriptor13, this);

          _initializerDefineProperty(this, "readyHandImmediatelyStop", _descriptor14, this);

          _initializerDefineProperty(this, "readyHandDataLength", _descriptor15, this);

          _initializerDefineProperty(this, "readyHandRealCurve", _descriptor16, this);

          _initializerDefineProperty(this, "startBounce", _descriptor17, this);

          _initializerDefineProperty(this, "endBounce", _descriptor18, this);

          _initializerDefineProperty(this, "useRealCurve", _descriptor19, this);

          _initializerDefineProperty(this, "downBounceEasing", _descriptor20, this);

          _initializerDefineProperty(this, "downBounceRealCurve", _descriptor21, this);

          _initializerDefineProperty(this, "downBounceDuration", _descriptor22, this);

          _initializerDefineProperty(this, "upBounceEasing", _descriptor23, this);

          _initializerDefineProperty(this, "upBounceRealCurve", _descriptor24, this);

          _initializerDefineProperty(this, "upBounceDuration", _descriptor25, this);

          _initializerDefineProperty(this, "bounceDis", _descriptor26, this);

          _initializerDefineProperty(this, "ngMoveInterval", _descriptor27, this);

          _initializerDefineProperty(this, "ngStopDataLength", _descriptor28, this);

          _initializerDefineProperty(this, "fgMoveInterval", _descriptor29, this);

          _initializerDefineProperty(this, "fgStopDataLength", _descriptor30, this);
        }

        isVisible() {
          return this.startBounce || this.endBounce;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iconAmount", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconSize", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Size(0, 0);
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconSpacing", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "darkBrightness", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "symbolDataList", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "reelViewSize", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Size(0, 0);
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "reelAmount", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "layoutType", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && LayoutType === void 0 ? (_reportPossibleCrUseOfLayoutType({
            error: Error()
          }), LayoutType) : LayoutType).Vertical;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "inverseDirection", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "reelSpace", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "normalRollTime", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "turboRollTime", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "startSpaceTime", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "readyHandImmediatelyStop", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "readyHandDataLength", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 12;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "readyHandRealCurve", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new RealCurve();
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "startBounce", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "endBounce", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "useRealCurve", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "downBounceEasing", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
            error: Error()
          }), EaseType) : EaseType).CubicOut;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "downBounceRealCurve", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new RealCurve();
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "downBounceDuration", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "upBounceEasing", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
            error: Error()
          }), EaseType) : EaseType).Linear;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "upBounceRealCurve", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new RealCurve();
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "upBounceDuration", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "bounceDis", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "ngMoveInterval", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.05;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "ngStopDataLength", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 4;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "fgMoveInterval", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.06;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "fgStopDataLength", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 4;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1b1e8c53585734f86721eb4dd9a1fee843cf32d3.js.map