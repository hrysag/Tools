System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, CurveRange, Vec2, SimpleLineSprite, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, CurveLineSprite;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSimpleLineSprite(extras) {
    _reporterNs.report("SimpleLineSprite", "../../Simple/SimpleLineSprite", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
      CurveRange = _cc.CurveRange;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      SimpleLineSprite = _unresolved_2.SimpleLineSprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b76d27JsJNZalupiPXMG3H", "CurveLineSprite", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'CCInteger', 'Component', 'CurveRange', 'log', 'Node', 'tween', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CurveLineSprite", CurveLineSprite = (_dec = ccclass('CurveLineSprite'), _dec2 = property({
        type: CurveRange,
        serializable: true,
        visible: false
      }), _dec3 = property({
        type: CurveRange,
        serializable: true,
        visible: true,
        displayName: "曲線",
        group: ""
      }), _dec4 = property({
        serializable: true,
        visible: false
      }), _dec5 = property({
        serializable: true,
        visible: true,
        displayName: "範圍最大值",
        group: ""
      }), _dec6 = property({
        serializable: true,
        visible: false
      }), _dec7 = property({
        serializable: true,
        visible: true,
        displayName: "範圍最小值",
        group: ""
      }), _dec8 = property({
        type: CCInteger,
        serializable: true,
        visible: false
      }), _dec9 = property({
        type: CCInteger,
        serializable: true,
        visible: true,
        displayName: "段數",
        group: ""
      }), _dec(_class = (_class2 = class CurveLineSprite extends (_crd && SimpleLineSprite === void 0 ? (_reportPossibleCrUseOfSimpleLineSprite({
        error: Error()
      }), SimpleLineSprite) : SimpleLineSprite) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_curve", _descriptor, this);

          _initializerDefineProperty(this, "_rangeMax", _descriptor2, this);

          _initializerDefineProperty(this, "_rangeMin", _descriptor3, this);

          _initializerDefineProperty(this, "_count", _descriptor4, this);
        }

        get curve() {
          return this._curve;
        }

        set curve(value) {
          this._curve = value;
        }

        get rangeMax() {
          return this._rangeMax;
        }

        set rangeMax(value) {
          this._rangeMax = value;
        }

        get rangeMin() {
          return this._rangeMin;
        }

        set rangeMin(value) {
          this._rangeMin = value;
        }

        get count() {
          return this._count;
        }

        set count(value) {
          if (value >= 2) {
            this._count = value;
          }
        }

        updateFullLineGeometry() {
          let posList = [];

          for (let i = 0; i < this.count; i++) {
            let x = i / (this.count - 1);

            let y = this._curve.evaluate(x, 0);

            posList.push(this.mapCurveToRange(x, y, this.rangeMin, this.rangeMax));
          }

          this._posList = posList;
          super.updateFullLineGeometry();
        }

        mapCurveToRange(x, y, min, max) {
          return new Vec2(min.x + x * (max.x - min.x), min.y + y * (max.y - min.y));
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_curve", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new CurveRange();
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "curve", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "curve"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_rangeMax", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec2();
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "rangeMax", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "rangeMax"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_rangeMin", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec2();
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "rangeMin", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "rangeMin"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_count", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "count", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "count"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0f4f9a08b97648f54a64db62e0d78c7b073033f0.js.map