System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Enum, RealCurve, ReelDataBase, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, ReelRoundState, ReelEvent, ReelState, TweenEasingType, ReelData;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfReelDataBase(extras) {
    _reporterNs.report("ReelDataBase", "./ReelDataBase", _context.meta, extras);
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
      Enum = _cc.Enum;
      RealCurve = _cc.RealCurve;
    }, function (_unresolved_2) {
      ReelDataBase = _unresolved_2.ReelDataBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d5b0AW7CdKX7pzRTiu5HkK", "ReelData", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'CCString', 'easing', 'Enum', 'Prefab', 'RealCurve', 'TweenEasing']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 一局的狀態
       */

      _export("ReelRoundState", ReelRoundState = /*#__PURE__*/function (ReelRoundState) {
        ReelRoundState[ReelRoundState["Unknown"] = 0] = "Unknown";
        ReelRoundState[ReelRoundState["Init"] = 1] = "Init";
        ReelRoundState[ReelRoundState["FirstRoll"] = 2] = "FirstRoll";
        ReelRoundState[ReelRoundState["Rolling"] = 3] = "Rolling";
        ReelRoundState[ReelRoundState["FinalRoll"] = 4] = "FinalRoll";
        ReelRoundState[ReelRoundState["RollEnd"] = 5] = "RollEnd";
        return ReelRoundState;
      }({}));

      _export("ReelEvent", ReelEvent = /*#__PURE__*/function (ReelEvent) {
        ReelEvent[ReelEvent["Init"] = 0] = "Init";
        ReelEvent[ReelEvent["Start"] = 1] = "Start";
        ReelEvent[ReelEvent["Update"] = 2] = "Update";
        ReelEvent[ReelEvent["End"] = 3] = "End";
        return ReelEvent;
      }({}));
      /**
       * 滾一輪的狀態
       */


      _export("ReelState", ReelState = /*#__PURE__*/function (ReelState) {
        ReelState[ReelState["Unknown"] = 0] = "Unknown";
        ReelState[ReelState["Idle"] = 1] = "Idle";
        ReelState[ReelState["Rolling"] = 2] = "Rolling";
        return ReelState;
      }({}));
      /**
       * TweenEasing的類型 可以參考PublicReel\Example\Arts\Atlases\TweenEasing.png
       */


      _export("TweenEasingType", TweenEasingType = /*#__PURE__*/function (TweenEasingType) {
        TweenEasingType[TweenEasingType["linear"] = 0] = "linear";
        TweenEasingType[TweenEasingType["smooth"] = 1] = "smooth";
        TweenEasingType[TweenEasingType["fade"] = 2] = "fade";
        TweenEasingType[TweenEasingType["constant"] = 3] = "constant";
        TweenEasingType[TweenEasingType["quadIn"] = 4] = "quadIn";
        TweenEasingType[TweenEasingType["quadOut"] = 5] = "quadOut";
        TweenEasingType[TweenEasingType["quadInOut"] = 6] = "quadInOut";
        TweenEasingType[TweenEasingType["quadOutIn"] = 7] = "quadOutIn";
        TweenEasingType[TweenEasingType["cubicIn"] = 8] = "cubicIn";
        TweenEasingType[TweenEasingType["cubicOut"] = 9] = "cubicOut";
        TweenEasingType[TweenEasingType["cubicInOut"] = 10] = "cubicInOut";
        TweenEasingType[TweenEasingType["cubicOutIn"] = 11] = "cubicOutIn";
        TweenEasingType[TweenEasingType["quartIn"] = 12] = "quartIn";
        TweenEasingType[TweenEasingType["quartOut"] = 13] = "quartOut";
        TweenEasingType[TweenEasingType["quartInOut"] = 14] = "quartInOut";
        TweenEasingType[TweenEasingType["quartOutIn"] = 15] = "quartOutIn";
        TweenEasingType[TweenEasingType["quintIn"] = 16] = "quintIn";
        TweenEasingType[TweenEasingType["quintOut"] = 17] = "quintOut";
        TweenEasingType[TweenEasingType["quintInOut"] = 18] = "quintInOut";
        TweenEasingType[TweenEasingType["quintOutIn"] = 19] = "quintOutIn";
        TweenEasingType[TweenEasingType["sineIn"] = 20] = "sineIn";
        TweenEasingType[TweenEasingType["sineOut"] = 21] = "sineOut";
        TweenEasingType[TweenEasingType["sineInOut"] = 22] = "sineInOut";
        TweenEasingType[TweenEasingType["sineOutIn"] = 23] = "sineOutIn";
        TweenEasingType[TweenEasingType["expoIn"] = 24] = "expoIn";
        TweenEasingType[TweenEasingType["expoOut"] = 25] = "expoOut";
        TweenEasingType[TweenEasingType["expoInOut"] = 26] = "expoInOut";
        TweenEasingType[TweenEasingType["expoOutIn"] = 27] = "expoOutIn";
        TweenEasingType[TweenEasingType["circIn"] = 28] = "circIn";
        TweenEasingType[TweenEasingType["circOut"] = 29] = "circOut";
        TweenEasingType[TweenEasingType["circInOut"] = 30] = "circInOut";
        TweenEasingType[TweenEasingType["circOutIn"] = 31] = "circOutIn";
        TweenEasingType[TweenEasingType["elasticIn"] = 32] = "elasticIn";
        TweenEasingType[TweenEasingType["elasticOut"] = 33] = "elasticOut";
        TweenEasingType[TweenEasingType["elasticInOut"] = 34] = "elasticInOut";
        TweenEasingType[TweenEasingType["elasticOutIn"] = 35] = "elasticOutIn";
        TweenEasingType[TweenEasingType["backIn"] = 36] = "backIn";
        TweenEasingType[TweenEasingType["backOut"] = 37] = "backOut";
        TweenEasingType[TweenEasingType["backInOut"] = 38] = "backInOut";
        TweenEasingType[TweenEasingType["backOutIn"] = 39] = "backOutIn";
        TweenEasingType[TweenEasingType["bounceIn"] = 40] = "bounceIn";
        TweenEasingType[TweenEasingType["bounceOut"] = 41] = "bounceOut";
        TweenEasingType[TweenEasingType["bounceInOut"] = 42] = "bounceInOut";
        TweenEasingType[TweenEasingType["bounceOutIn"] = 43] = "bounceOutIn";
        return TweenEasingType;
      }({}));

      _export("ReelData", ReelData = (_dec = ccclass('ReelData'), _dec2 = property({
        type: CCFloat,
        visible: true,
        tooltip: '滾輪速度，基準值為8'
      }), _dec3 = property({
        tooltip: '是否啟用最開始的回拉效果',
        visible: true,
        group: 'StartPull'
      }), _dec4 = property({
        type: RealCurve,

        visible() {
          return this._startPull;
        },

        group: 'StartPull'
      }), _dec5 = property({
        type: CCFloat,

        visible() {
          return this._startPull;
        },

        tooltip: '在startCurve拉條開始停滯的時間，配合滾動速度',
        group: 'StartPull'
      }), _dec6 = property({
        tooltip: '是否啟用結束的回彈效果',
        visible: true,
        group: 'EndBounce'
      }), _dec7 = property({
        type: Enum(TweenEasingType),

        visible() {
          return this._endBounce;
        },

        tooltip: '回彈掉落的easing，可以參考PublicReel\\Example\\Arts\Atlases\\TweenEasing.png',
        group: 'EndBounce'
      }), _dec8 = property({
        type: CCFloat,

        visible() {
          return this._endBounce;
        },

        tooltip: '回彈掉落的時間',
        group: 'EndBounce'
      }), _dec9 = property({
        type: Enum(TweenEasingType),

        visible() {
          return this._endBounce;
        },

        tooltip: '回彈上升的easing，可以參考PublicReel\\Example\\Arts\\Atlases\\TweenEasing.png',
        group: 'EndBounce'
      }), _dec10 = property({
        type: CCFloat,

        visible() {
          return this._endBounce;
        },

        tooltip: '回彈上升的時間',
        group: 'EndBounce'
      }), _dec11 = property({
        type: CCFloat,

        visible() {
          return this._endBounce;
        },

        tooltip: '在掉落後接上升的延遲',
        group: 'EndBounce'
      }), _dec12 = property({
        type: CCFloat,

        visible() {
          return this._endBounce;
        },

        tooltip: '回彈掉落的距離',
        group: 'EndBounce'
      }), _dec(_class = (_class2 = class ReelData extends (_crd && ReelDataBase === void 0 ? (_reportPossibleCrUseOfReelDataBase({
        error: Error()
      }), ReelDataBase) : ReelDataBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_rollSpeed", _descriptor, this);

          _initializerDefineProperty(this, "_startPull", _descriptor2, this);

          _initializerDefineProperty(this, "_startCurve", _descriptor3, this);

          _initializerDefineProperty(this, "_startPullTime", _descriptor4, this);

          _initializerDefineProperty(this, "_endBounce", _descriptor5, this);

          _initializerDefineProperty(this, "_downBounceEasing", _descriptor6, this);

          _initializerDefineProperty(this, "_downBounceDuration", _descriptor7, this);

          _initializerDefineProperty(this, "_upBounceEasing", _descriptor8, this);

          _initializerDefineProperty(this, "_upBounceDuration", _descriptor9, this);

          _initializerDefineProperty(this, "_bounceDelay", _descriptor10, this);

          _initializerDefineProperty(this, "_bounceDis", _descriptor11, this);
        }

        set rollSpeed(speed) {
          this._rollSpeed = speed;
        }

        get rollSpeed() {
          return this._rollSpeed;
        }

        get startPull() {
          return this._startPull;
        }

        set startPull(value) {
          this._startPull = value;
        }

        get startCurve() {
          return this._startCurve;
        }

        set startCurve(curve) {
          this._startCurve = curve;
        }

        get startPullTime() {
          return this._startPullTime;
        }

        set startPullTime(time) {
          this._startPullTime = time;
        }

        get endBounce() {
          return this._endBounce;
        }

        set endBounce(value) {
          this._endBounce = value;
        }

        get downBounceEasing() {
          return this._downBounceEasing;
        }

        set downBounceEasing(easing) {
          this._downBounceEasing = easing;
        }

        get downBounceDuration() {
          return this._downBounceDuration;
        }

        set downBounceDuration(duration) {
          this._downBounceDuration = duration;
        }

        get upBounceEasing() {
          return this._upBounceEasing;
        }

        set upBounceEasing(easing) {
          this._upBounceEasing = easing;
        }

        get upBounceDuration() {
          return this._upBounceDuration;
        }

        set upBounceDuration(duration) {
          this._upBounceDuration = duration;
        }

        get bounceDelay() {
          return this._bounceDelay;
        }

        set bounceDelay(delay) {
          this._bounceDelay = delay;
        }

        get bounceDis() {
          return this._bounceDis;
        }

        set bounceDis(dis) {
          this._bounceDis = dis;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_rollSpeed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_startPull", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_startCurve", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new RealCurve();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_startPullTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.3;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_endBounce", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_downBounceEasing", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return TweenEasingType.cubicOut;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_downBounceDuration", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_upBounceEasing", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return TweenEasingType.linear;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_upBounceDuration", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_bounceDelay", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_bounceDis", [_dec12], {
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
//# sourceMappingURL=bbcf2416f0056de75d2aa82c54ead0912abd0a75.js.map