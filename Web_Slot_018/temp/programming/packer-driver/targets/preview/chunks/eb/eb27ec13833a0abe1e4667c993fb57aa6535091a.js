System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, RealCurve, ReelDataBase, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, DropState, DropMode, DropReelData;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfReelDataBase(extras) {
    _reporterNs.report("ReelDataBase", "db://assets/Scripts/ReelTemplate/ReelTemplate_2/Scripts/Model/ReelDataBase", _context.meta, extras);
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
      RealCurve = _cc.RealCurve;
    }, function (_unresolved_2) {
      ReelDataBase = _unresolved_2.ReelDataBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b84d9OK6DVGO5CrHEXv0s0S", "DropReelData", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'RealCurve']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 滾輪掉落狀態分為：
       * DROP_IN：由上方掉落進入盤面
       * DROP_OUT：由盤面掉落離開
       * FILL：保持在盤面上，因消除而往下掉落的狀態
       */

      _export("DropState", DropState = /*#__PURE__*/function (DropState) {
        DropState[DropState["DROP_IN"] = 0] = "DROP_IN";
        DropState[DropState["DROP_OUT"] = 1] = "DROP_OUT";
        DropState[DropState["FILL"] = 2] = "FILL";
        return DropState;
      }({}));

      _export("DropMode", DropMode = /*#__PURE__*/function (DropMode) {
        DropMode[DropMode["IDLE"] = 0] = "IDLE";
        DropMode[DropMode["STOP"] = 1] = "STOP";
        DropMode[DropMode["TURBO"] = 2] = "TURBO";
        DropMode[DropMode["READY_HAND"] = 3] = "READY_HAND";
        return DropMode;
      }({}));

      _export("DropReelData", DropReelData = (_dec = ccclass('DropReelData'), _dec2 = property({
        type: CCFloat,
        visible: true,
        tooltip: "一個Icon完整掉落的時間",
        group: "Idle"
      }), _dec3 = property({
        type: CCFloat,
        visible: true,
        tooltip: "Icon之間,掉落的間隔時間",
        group: "Idle"
      }), _dec4 = property({
        type: CCFloat,
        visible: true,
        tooltip: "按下停止後,一個Icon完整掉落的時間",
        group: "Stop"
      }), _dec5 = property({
        type: CCFloat,
        visible: true,
        tooltip: "按下停止後,Icon之間,掉落的間隔時間",
        group: "Stop"
      }), _dec6 = property({
        type: CCFloat,
        visible: true,
        tooltip: "Turbo模式下,一個Icon完整掉落的時間",
        group: "Turbo"
      }), _dec7 = property({
        type: CCFloat,
        visible: true,
        tooltip: "Turbo模式下,Icon之間掉落的間隔時間",
        group: "Turbo"
      }), _dec8 = property({
        type: CCFloat,
        visible: true,
        tooltip: "ReadyHand模式下,一個Icon完整掉落的時間",
        group: "ReadyHand"
      }), _dec9 = property({
        type: CCFloat,
        visible: true,
        tooltip: "ReadyHand模式下,Icon之間掉落的間隔時間",
        group: "ReadyHand"
      }), _dec10 = property({
        visible: true,
        tooltip: "是否使用預設DropIn曲線"
      }), _dec11 = property({
        type: RealCurve,

        visible() {
          return !this._autoDropInCurve;
        }

      }), _dec12 = property({
        visible: true,
        tooltip: "是否使用預設DropOut曲線"
      }), _dec13 = property({
        type: RealCurve,

        visible() {
          return !this._autoDropOutCurve;
        }

      }), _dec14 = property({
        visible: true,
        tooltip: "是否使用預設Fill曲線"
      }), _dec15 = property({
        type: RealCurve,

        visible() {
          return !this._autoFillCurve;
        }

      }), _dec(_class = (_class2 = class DropReelData extends (_crd && ReelDataBase === void 0 ? (_reportPossibleCrUseOfReelDataBase({
        error: Error()
      }), ReelDataBase) : ReelDataBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_dropDuration", _descriptor, this);

          _initializerDefineProperty(this, "_dropSpacingTime", _descriptor2, this);

          _initializerDefineProperty(this, "_stopDropDuration", _descriptor3, this);

          _initializerDefineProperty(this, "_stopDropSpacingTime", _descriptor4, this);

          _initializerDefineProperty(this, "_turboDropDuration", _descriptor5, this);

          _initializerDefineProperty(this, "_turboDropSpacingTime", _descriptor6, this);

          _initializerDefineProperty(this, "_readyHandDropDuration", _descriptor7, this);

          _initializerDefineProperty(this, "_readyHandDropSpacingTime", _descriptor8, this);

          _initializerDefineProperty(this, "_autoDropInCurve", _descriptor9, this);

          _initializerDefineProperty(this, "_inCurve", _descriptor10, this);

          _initializerDefineProperty(this, "_autoDropOutCurve", _descriptor11, this);

          _initializerDefineProperty(this, "_outCurve", _descriptor12, this);

          _initializerDefineProperty(this, "_autoFillCurve", _descriptor13, this);

          _initializerDefineProperty(this, "_fillCurve", _descriptor14, this);
        }

        get dropDuration() {
          return this._dropDuration;
        }

        set dropDuration(duration) {
          this._dropDuration = duration;
        }

        get dropSpacingTime() {
          return this._dropSpacingTime;
        }

        set dropSpacingTime(time) {
          this._dropSpacingTime = time;
        }

        get stopDropDuration() {
          return this._stopDropDuration;
        }

        set stopDropDuration(duration) {
          this._stopDropDuration = duration;
        }

        get stopDropSpacingTime() {
          return this._stopDropSpacingTime;
        }

        set stopDropSpacingTime(time) {
          this._stopDropSpacingTime = time;
        }

        get turboDropDuration() {
          return this._turboDropDuration;
        }

        set turboDropDuration(duration) {
          this._turboDropDuration = duration;
        }

        get turboDropSpacingTime() {
          return this._turboDropSpacingTime;
        }

        set turboDropSpacingTime(time) {
          this._turboDropSpacingTime = time;
        }

        get readyHandDropDuration() {
          return this._readyHandDropDuration;
        }

        set readyHandDropDuration(duration) {
          this._readyHandDropDuration = duration;
        }

        get readyHandDropSpacingTime() {
          return this._readyHandDropSpacingTime;
        }

        set readyHandDropSpacingTime(time) {
          this._readyHandDropSpacingTime = time;
        }

        get autoDropInCurve() {
          return this._autoDropInCurve;
        }

        set autoDropInCurve(value) {
          this._autoDropInCurve = value;
        }

        get inCurve() {
          return this._inCurve;
        }

        set inCurve(curve) {
          this._inCurve = curve;
        }

        get autoDropOutCurve() {
          return this._autoDropOutCurve;
        }

        set autoDropOutCurve(value) {
          this._autoDropOutCurve = value;
        }

        get outCurve() {
          return this._outCurve;
        }

        set outCurve(curve) {
          this._outCurve = curve;
        }

        get autoFillCurve() {
          return this._autoFillCurve;
        }

        set autoFillCurve(value) {
          this._autoFillCurve = value;
        }

        get fillCurve() {
          return this._fillCurve;
        }

        set fillCurve(curve) {
          this._fillCurve = curve;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_dropDuration", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_dropSpacingTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_stopDropDuration", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_stopDropSpacingTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_turboDropDuration", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_turboDropSpacingTime", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_readyHandDropDuration", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_readyHandDropSpacingTime", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_autoDropInCurve", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_inCurve", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new RealCurve();
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_autoDropOutCurve", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "_outCurve", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new RealCurve();
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "_autoFillCurve", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "_fillCurve", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new RealCurve();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eb27ec13833a0abe1e4667c993fb57aa6535091a.js.map