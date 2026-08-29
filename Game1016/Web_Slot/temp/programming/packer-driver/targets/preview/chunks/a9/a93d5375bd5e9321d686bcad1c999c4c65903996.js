System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCBoolean, CCFloat, Component, Enum, RealCurve, EaseType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, ReelBounceConfig;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEaseType(extras) {
    _reporterNs.report("EaseType", "db://assets/Scripts/Core/TweenExt", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCBoolean = _cc.CCBoolean;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
      Enum = _cc.Enum;
      RealCurve = _cc.RealCurve;
    }, function (_unresolved_2) {
      EaseType = _unresolved_2.EaseType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "56c34RU6WRKpL3s1nwe3i/O", "ReelBounceConfig", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'CCFloat', 'CCInteger', 'Component', 'Enum', 'Node', 'RealCurve', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ReelBounceConfig", ReelBounceConfig = (_dec = ccclass('ReelBounceConfig'), _dec2 = property(CCBoolean), _dec3 = property(CCBoolean), _dec4 = property(CCBoolean), _dec5 = property({
        type: Enum(_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType),

        visible() {
          var data = this;
          return !data.useRealCurve;
        },

        tooltip: '回彈掉落的easing，可以參考PublicReel\\Example\\Arts\Atlases\\TweenEasing.png'
      }), _dec6 = property({
        type: RealCurve,

        visible() {
          var data = this;
          return data.useRealCurve;
        },

        tooltip: '回彈掉落的easing，可以參考PublicReel\\Example\\Arts\Atlases\\TweenEasing.png'
      }), _dec7 = property({
        type: CCFloat,
        tooltip: '回彈掉落的時間'
      }), _dec8 = property({
        type: Enum(_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType),

        visible() {
          var data = this;
          return !data.useRealCurve;
        },

        tooltip: '回彈上升的easing，可以參考PublicReel\\Example\\Arts\\Atlases\\TweenEasing.png'
      }), _dec9 = property({
        type: RealCurve,

        visible() {
          var data = this;
          return data.useRealCurve;
        },

        tooltip: '回彈上升的easing，可以參考PublicReel\\Example\\Arts\Atlases\\TweenEasing.png'
      }), _dec10 = property({
        type: CCFloat,
        tooltip: '回彈上升的時間'
      }), _dec11 = property({
        type: CCFloat,
        tooltip: '回彈掉落的距離'
      }), _dec(_class = (_class2 = class ReelBounceConfig extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "startBounce", _descriptor, this);

          _initializerDefineProperty(this, "endBounce", _descriptor2, this);

          _initializerDefineProperty(this, "useRealCurve", _descriptor3, this);

          _initializerDefineProperty(this, "downBounceEasing", _descriptor4, this);

          _initializerDefineProperty(this, "downBounceRealCurve", _descriptor5, this);

          _initializerDefineProperty(this, "downBounceDuration", _descriptor6, this);

          _initializerDefineProperty(this, "upBounceEasing", _descriptor7, this);

          _initializerDefineProperty(this, "upBounceRealCurve", _descriptor8, this);

          _initializerDefineProperty(this, "upBounceDuration", _descriptor9, this);

          _initializerDefineProperty(this, "bounceDis", _descriptor10, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "startBounce", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "endBounce", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "useRealCurve", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "downBounceEasing", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
            error: Error()
          }), EaseType) : EaseType).CubicOut;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "downBounceRealCurve", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new RealCurve();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "downBounceDuration", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "upBounceEasing", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
            error: Error()
          }), EaseType) : EaseType).Linear;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "upBounceRealCurve", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new RealCurve();
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "upBounceDuration", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "bounceDis", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 50;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a93d5375bd5e9321d686bcad1c999c4c65903996.js.map