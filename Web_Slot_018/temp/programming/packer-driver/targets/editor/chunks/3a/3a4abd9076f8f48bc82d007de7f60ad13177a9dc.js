System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCBoolean, CCFloat, CCInteger, CCString, Color, Enum, StringExt, EaseType, _dec, _dec2, _class, _class2, _descriptor, _dec3, _dec4, _dec5, _dec6, _class4, _class5, _descriptor2, _descriptor3, _descriptor4, _dec7, _class7, _dec8, _class8, _dec9, _class9, _dec10, _class10, _dec11, _dec12, _class11, _class12, _descriptor5, _dec13, _class14, _dec14, _dec15, _class15, _class16, _descriptor6, _dec16, _dec17, _dec18, _dec19, _dec20, _class18, _class19, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _dec21, _dec22, _dec23, _class21, _class22, _descriptor11, _descriptor12, _descriptor13, _dec24, _dec25, _dec26, _class24, _class25, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _dec27, _class27, _class28, _descriptor18, _dec28, _dec29, _class30, _class31, _descriptor19, _descriptor20, _dec30, _dec31, _class33, _class34, _descriptor21, _descriptor22, _dec32, _dec33, _class36, _class37, _descriptor23, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _class39, _class40, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _dec41, _dec42, _dec43, _dec44, _dec45, _class42, _class43, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _dec46, _dec47, _dec48, _class45, _class46, _descriptor34, _descriptor35, _dec49, _class48, _dec50, _class49, _dec51, _class50, _dec52, _dec53, _dec54, _class51, _class52, _descriptor36, _descriptor37, _dec55, _class54, _dec56, _class55, _dec57, _class56, _dec58, _dec59, _dec60, _class57, _class58, _descriptor38, _descriptor39, _dec61, _class60, _dec62, _class61, _dec63, _class62, _dec64, _class63, _dec65, _class64, _dec66, _dec67, _dec68, _dec69, _dec70, _dec71, _class65, _class66, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _dec72, _class68, _class69, _descriptor45, _dec73, _class71, _class72, _descriptor46, _crd, ccclass, property, ActionEventType, EventParamsBase, SpinePlayParams, SpineResetSlotParams, SpinePauseParams, SpineContinueParams, SpineResetParams, SpineClearTrackParams, SpineSetToSetupPoseParams, SpineClearAnimationParams, SpineFadingParams, SpineMixParams, SpineAddParams, SpineTimeScaleParams, SpineTrackTimeScaleParams, SpineAlphaParams, NodeActiveParams, NodeEventParams, UIOpacityParams, AnimPlayParams, AnimStopParams, AnimPauseParams, AnimResumeParams, SKAnimPlayParams, SKAnimStopParams, SKAnimPauseParams, SKAnimResumeParams, ParticlePlayParams, ParticleStopParams, ParticleResetParams, ParticlePauseParams, ParticleClearParams, ParticleStopEmittParams, ParticleTintParams, ParticleCapacityParams, ParticleRateOverTimeParams;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfStringExt(extras) {
    _reporterNs.report("StringExt", "db://assets/Scripts/Core/StringExt", _context.meta, extras);
  }

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
      CCInteger = _cc.CCInteger;
      CCString = _cc.CCString;
      Color = _cc.Color;
      Enum = _cc.Enum;
    }, function (_unresolved_2) {
      StringExt = _unresolved_2.StringExt;
    }, function (_unresolved_3) {
      EaseType = _unresolved_3.EaseType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "df0e60R0ENMGqZd2l5j8HZL", "ActionEventType", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'CCFloat', 'CCInteger', 'CCString', 'Color', 'Enum']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ActionEventType", ActionEventType = /*#__PURE__*/function (ActionEventType) {
        ActionEventType[ActionEventType["NONE"] = 0] = "NONE";
        ActionEventType[ActionEventType["ANIM_PLAY"] = 1] = "ANIM_PLAY";
        ActionEventType[ActionEventType["ANIM_STOP"] = 2] = "ANIM_STOP";
        ActionEventType[ActionEventType["ANIM_PAUSE"] = 3] = "ANIM_PAUSE";
        ActionEventType[ActionEventType["ANIM_RESUME"] = 4] = "ANIM_RESUME";
        ActionEventType[ActionEventType["SPINE_PLAY"] = 5] = "SPINE_PLAY";
        ActionEventType[ActionEventType["SPINE_PAUSE"] = 6] = "SPINE_PAUSE";
        ActionEventType[ActionEventType["SPINE_CONTINUE"] = 7] = "SPINE_CONTINUE";
        ActionEventType[ActionEventType["SPINE_RESET"] = 8] = "SPINE_RESET";
        ActionEventType[ActionEventType["SPINE_CLEARTRACK"] = 9] = "SPINE_CLEARTRACK";
        ActionEventType[ActionEventType["SPINE_SET_TO_SETUP_POSE"] = 10] = "SPINE_SET_TO_SETUP_POSE";
        ActionEventType[ActionEventType["SPINE_CLEAR_ANIMATION"] = 11] = "SPINE_CLEAR_ANIMATION";
        ActionEventType[ActionEventType["SPINE_FADING"] = 12] = "SPINE_FADING";
        ActionEventType[ActionEventType["SPINE_RESET_SLOT"] = 13] = "SPINE_RESET_SLOT";
        ActionEventType[ActionEventType["SPINE_MIX"] = 14] = "SPINE_MIX";
        ActionEventType[ActionEventType["SPINE_ADD"] = 15] = "SPINE_ADD";
        ActionEventType[ActionEventType["SPINE_TIMESCALE"] = 16] = "SPINE_TIMESCALE";
        ActionEventType[ActionEventType["SPINE_TRACK_TIMESCALE"] = 17] = "SPINE_TRACK_TIMESCALE";
        ActionEventType[ActionEventType["SPINE_ALPHA"] = 18] = "SPINE_ALPHA";
        ActionEventType[ActionEventType["NODE_ACTIVE"] = 19] = "NODE_ACTIVE";
        ActionEventType[ActionEventType["NODE_EVENT"] = 20] = "NODE_EVENT";
        ActionEventType[ActionEventType["UI_OPACITY"] = 21] = "UI_OPACITY";
        ActionEventType[ActionEventType["SK_ANIM_PLAY"] = 22] = "SK_ANIM_PLAY";
        ActionEventType[ActionEventType["SK_ANIM_STOP"] = 23] = "SK_ANIM_STOP";
        ActionEventType[ActionEventType["SK_ANIM_PAUSE"] = 24] = "SK_ANIM_PAUSE";
        ActionEventType[ActionEventType["SK_ANIM_RESUME"] = 25] = "SK_ANIM_RESUME";
        ActionEventType[ActionEventType["PARTICLE_PLAY"] = 26] = "PARTICLE_PLAY";
        ActionEventType[ActionEventType["PARTICLE_STOP"] = 27] = "PARTICLE_STOP";
        ActionEventType[ActionEventType["PARTICLE_STOPEMITT"] = 28] = "PARTICLE_STOPEMITT";
        ActionEventType[ActionEventType["PARTICLE_RESET"] = 29] = "PARTICLE_RESET";
        ActionEventType[ActionEventType["PARTICLE_PAUSE"] = 30] = "PARTICLE_PAUSE";
        ActionEventType[ActionEventType["PARTICLE_CLEAR"] = 31] = "PARTICLE_CLEAR";
        ActionEventType[ActionEventType["PARTICLE_TINT_COLOR"] = 32] = "PARTICLE_TINT_COLOR";
        ActionEventType[ActionEventType["PARTICLE_CAPACITY"] = 33] = "PARTICLE_CAPACITY";
        ActionEventType[ActionEventType["PARTICLE_RATE_OVER_TIME"] = 34] = "PARTICLE_RATE_OVER_TIME";
        return ActionEventType;
      }({})); //處理Node Name參數


      _export("EventParamsBase", EventParamsBase = (_dec = ccclass('EventParamsBase'), _dec2 = property({
        tooltip: '要控制的Node名稱'
      }), _dec(_class = (_class2 = class EventParamsBase {
        constructor(params) {
          _initializerDefineProperty(this, "nodeName", _descriptor, this);

          this.FromStrings(params);
        }

        FromStrings(params) {
          if (params.length < 1) {
            return false;
          }

          this.nodeName = params[0];
          return true;
        }

        ToStrings() {
          return [this.nodeName];
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      })), _class2)) || _class)); //#region spine


      _export("SpinePlayParams", SpinePlayParams = (_dec3 = ccclass('SpinePlayParams'), _dec4 = property(CCString), _dec5 = property(CCBoolean), _dec6 = property(CCInteger), _dec3(_class4 = (_class5 = class SpinePlayParams extends EventParamsBase {
        constructor(params) {
          super(params);

          _initializerDefineProperty(this, "clipName", _descriptor2, this);

          _initializerDefineProperty(this, "loop", _descriptor3, this);

          _initializerDefineProperty(this, "track", _descriptor4, this);

          this.FromStrings(params);
        }

        FromStrings(params) {
          if (params.length != 4) {
            return false;
          }

          let ttrack = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(params[3]);

          if (ttrack[0] === false) {
            return false;
          }

          this.nodeName = params[0];
          this.clipName = params[1];
          this.loop = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToBoolean(params[2]);
          this.track = ttrack[1];
          return true;
        }

        ToStrings() {
          return [this.nodeName, this.clipName, this.loop ? 'true' : 'false', String(this.track)];
        }

      }, (_descriptor2 = _applyDecoratedDescriptor(_class5.prototype, "clipName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "loop", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "track", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class5)) || _class4));

      _export("SpineResetSlotParams", SpineResetSlotParams = (_dec7 = ccclass('SpineResetSlotParams'), _dec7(_class7 = class SpineResetSlotParams extends EventParamsBase {}) || _class7));

      _export("SpinePauseParams", SpinePauseParams = (_dec8 = ccclass('SpinePauseParams'), _dec8(_class8 = class SpinePauseParams extends EventParamsBase {}) || _class8));

      _export("SpineContinueParams", SpineContinueParams = (_dec9 = ccclass('SpineContinueParams'), _dec9(_class9 = class SpineContinueParams extends EventParamsBase {}) || _class9));

      _export("SpineResetParams", SpineResetParams = (_dec10 = ccclass('SpineResetParams'), _dec10(_class10 = class SpineResetParams extends EventParamsBase {}) || _class10));

      _export("SpineClearTrackParams", SpineClearTrackParams = (_dec11 = ccclass('SpineClearTrackParams'), _dec12 = property(CCInteger), _dec11(_class11 = (_class12 = class SpineClearTrackParams extends EventParamsBase {
        constructor(params) {
          super(params);

          _initializerDefineProperty(this, "track", _descriptor5, this);

          this.FromStrings(params);
        }

        FromStrings(params) {
          if (params.length != 2) {
            return false;
          }

          let ttrack = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(params[1]);

          if (ttrack[0] === false) {
            return false;
          }

          this.nodeName = params[0];
          this.track = ttrack[1];
          return true;
        }

        ToStrings() {
          return [this.nodeName, String(this.track)];
        }

      }, (_descriptor5 = _applyDecoratedDescriptor(_class12.prototype, "track", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class12)) || _class11));

      _export("SpineSetToSetupPoseParams", SpineSetToSetupPoseParams = (_dec13 = ccclass('SpineSetToSetupPoseParams'), _dec13(_class14 = class SpineSetToSetupPoseParams extends EventParamsBase {}) || _class14));

      _export("SpineClearAnimationParams", SpineClearAnimationParams = (_dec14 = ccclass('SpineClearAnimationParams'), _dec15 = property(CCInteger), _dec14(_class15 = (_class16 = class SpineClearAnimationParams extends EventParamsBase {
        constructor(params) {
          super(params);

          _initializerDefineProperty(this, "track", _descriptor6, this);

          this.FromStrings(params);
        }

        FromStrings(params) {
          if (params.length != 2) {
            return false;
          }

          let ttrack = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(params[1]);

          if (ttrack[0] === false) {
            return false;
          }

          this.nodeName = params[0];
          this.track = ttrack[1];
          return true;
        }

        ToStrings() {
          return [this.nodeName, String(this.track)];
        }

      }, (_descriptor6 = _applyDecoratedDescriptor(_class16.prototype, "track", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class16)) || _class15));

      _export("SpineFadingParams", SpineFadingParams = (_dec16 = ccclass('SpineFadingParams'), _dec17 = property(CCFloat), _dec18 = property(CCFloat), _dec19 = property({
        type: Enum(_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType)
      }), _dec20 = property({
        tooltip: '是否在結束時關閉'
      }), _dec16(_class18 = (_class19 = class SpineFadingParams extends EventParamsBase {
        constructor(params) {
          super(params);

          _initializerDefineProperty(this, "alphaTo", _descriptor7, this);

          _initializerDefineProperty(this, "duration", _descriptor8, this);

          _initializerDefineProperty(this, "easeType", _descriptor9, this);

          _initializerDefineProperty(this, "disableOnEnd", _descriptor10, this);

          this.FromStrings(params);
        }

        FromStrings(params) {
          if (params.length != 5) {
            return false;
          }

          let talpha = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(params[1]);
          let tduration = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(params[2]);
          let teasyType = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(params[3]);
          let tdisableOnEnd = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToBoolean(params[4]);

          if (talpha[0] === false || tduration[0] === false || teasyType[0] === false) {
            return false;
          }

          this.nodeName = params[0];
          this.alphaTo = talpha[1];
          this.duration = tduration[1];
          this.easeType = teasyType[1];
          this.disableOnEnd = tdisableOnEnd;
          return true;
        }

        ToStrings() {
          return [this.nodeName, String(this.alphaTo), String(this.duration), String(this.easeType), this.disableOnEnd ? 'true' : 'false'];
        }

      }, (_descriptor7 = _applyDecoratedDescriptor(_class19.prototype, "alphaTo", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 255.0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class19.prototype, "duration", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class19.prototype, "easeType", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
            error: Error()
          }), EaseType) : EaseType).Linear;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class19.prototype, "disableOnEnd", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class19)) || _class18));

      _export("SpineMixParams", SpineMixParams = (_dec21 = ccclass('SpineMixParams'), _dec22 = property(CCString), _dec23 = property(CCString), _dec21(_class21 = (_class22 = class SpineMixParams extends EventParamsBase {
        constructor(params) {
          super(params);

          _initializerDefineProperty(this, "fromAnim", _descriptor11, this);

          _initializerDefineProperty(this, "toAnim", _descriptor12, this);

          _initializerDefineProperty(this, "duration", _descriptor13, this);

          this.FromStrings(params);
        }

        FromStrings(params) {
          if (params.length != 4) {
            return false;
          }

          let tduration = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(params[3]);
          this.nodeName = params[0];
          this.fromAnim = params[1];
          this.toAnim = params[2];
          this.duration = tduration[1];
          return true;
        }

        ToStrings() {
          return [this.nodeName, this.fromAnim, this.toAnim, String(this.duration)];
        }

      }, (_descriptor11 = _applyDecoratedDescriptor(_class22.prototype, "fromAnim", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class22.prototype, "toAnim", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class22.prototype, "duration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.0;
        }
      })), _class22)) || _class21));

      _export("SpineAddParams", SpineAddParams = (_dec24 = ccclass('SpineAddParams'), _dec25 = property(CCString), _dec26 = property(CCBoolean), _dec24(_class24 = (_class25 = class SpineAddParams extends EventParamsBase {
        constructor(params) {
          super(params);

          _initializerDefineProperty(this, "clipName", _descriptor14, this);

          _initializerDefineProperty(this, "loop", _descriptor15, this);

          _initializerDefineProperty(this, "track", _descriptor16, this);

          _initializerDefineProperty(this, "delayTime", _descriptor17, this);

          this.FromStrings(params);
        }

        FromStrings(params) {
          if (params.length != 5) {
            return false;
          }

          this.nodeName = params[0];
          this.clipName = params[1];
          this.loop = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToBoolean(params[2]);
          let ttrack = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(params[3]);

          if (ttrack[0] === false) {
            return false;
          }

          this.track = ttrack[1];
          let tdelayTime = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(params[4]);

          if (tdelayTime[0] === false) {
            return false;
          }

          this.delayTime = tdelayTime[1];
          return true;
        }

        ToStrings() {
          return [this.nodeName, this.clipName, this.loop ? 'true' : 'false', String(this.track), String(this.delayTime)];
        }

      }, (_descriptor14 = _applyDecoratedDescriptor(_class25.prototype, "clipName", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class25.prototype, "loop", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class25.prototype, "track", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class25.prototype, "delayTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.0;
        }
      })), _class25)) || _class24));

      _export("SpineTimeScaleParams", SpineTimeScaleParams = (_dec27 = ccclass('SpineTimeScaleParams'), _dec27(_class27 = (_class28 = class SpineTimeScaleParams extends EventParamsBase {
        constructor(params) {
          super(params);

          _initializerDefineProperty(this, "scale", _descriptor18, this);

          this.FromStrings(params);
        }

        FromStrings(params) {
          if (params.length != 2) {
            return false;
          }

          let tscle = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(params[1]);

          if (tscle[0] === false) {
            return false;
          }

          this.nodeName = params[0];
          this.scale = tscle[1];
          return true;
        }

        ToStrings() {
          return [this.nodeName, String(this.scale)];
        }

      }, (_descriptor18 = _applyDecoratedDescriptor(_class28.prototype, "scale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class28)) || _class27));

      _export("SpineTrackTimeScaleParams", SpineTrackTimeScaleParams = (_dec28 = ccclass('SpineTrackTimeScaleParams'), _dec29 = property(CCInteger), _dec28(_class30 = (_class31 = class SpineTrackTimeScaleParams extends EventParamsBase {
        constructor(params) {
          super(params);

          _initializerDefineProperty(this, "track", _descriptor19, this);

          _initializerDefineProperty(this, "scale", _descriptor20, this);

          this.FromStrings(params);
        }

        FromStrings(params) {
          if (params.length != 3) {
            return false;
          }

          let ttrack = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(params[1]);

          if (ttrack[0] === false) {
            return false;
          }

          let tscale = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(params[2]);

          if (tscale[0] === false) {
            return false;
          }

          this.nodeName = params[0];
          this.track = ttrack[1];
          this.scale = tscale[1];
          return true;
        }

        ToStrings() {
          return [this.nodeName, String(this.track), String(this.scale)];
        }

      }, (_descriptor19 = _applyDecoratedDescriptor(_class31.prototype, "track", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class31.prototype, "scale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class31)) || _class30));

      _export("SpineAlphaParams", SpineAlphaParams = (_dec30 = ccclass('SpineAlphaParams'), _dec31 = property(CCInteger), _dec30(_class33 = (_class34 = class SpineAlphaParams extends EventParamsBase {
        constructor(params) {
          super(params);

          _initializerDefineProperty(this, "track", _descriptor21, this);

          _initializerDefineProperty(this, "alpha", _descriptor22, this);

          this.FromStrings(params);
        }

        FromStrings(params) {
          if (params.length != 3) {
            return false;
          }

          let ttrack = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(params[1]);

          if (ttrack[0] === false) {
            return false;
          }

          let talpha = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(params[2]);

          if (talpha[0] === false) {
            return false;
          }

          this.nodeName = params[0];
          this.track = ttrack[1];
          this.alpha = talpha[1];
          return true;
        }

        ToStrings() {
          return [this.nodeName, String(this.track), String(this.alpha)];
        }

      }, (_descriptor21 = _applyDecoratedDescriptor(_class34.prototype, "track", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class34.prototype, "alpha", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class34)) || _class33)); //#endregion
      //#region node & opacity


      _export("NodeActiveParams", NodeActiveParams = (_dec32 = ccclass('NodeActiveParams'), _dec33 = property(CCBoolean), _dec32(_class36 = (_class37 = class NodeActiveParams extends EventParamsBase {
        constructor(params) {
          super(params);

          _initializerDefineProperty(this, "active", _descriptor23, this);

          this.FromStrings(params);
        }

        FromStrings(params) {
          if (params.length != 2) {
            return false;
          }

          this.nodeName = params[0];
          this.active = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToBoolean(params[1]);
          return true;
        }

        ToStrings() {
          return [this.nodeName, this.active ? 'true' : 'false'];
        }

      }, (_descriptor23 = _applyDecoratedDescriptor(_class37.prototype, "active", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class37)) || _class36));

      _export("NodeEventParams", NodeEventParams = (_dec34 = ccclass('NodeEventParams'), _dec35 = property(CCString), _dec36 = property(CCString), _dec37 = property(CCString), _dec38 = property(CCString), _dec39 = property(CCString), _dec40 = property(CCString), _dec34(_class39 = (_class40 = class NodeEventParams extends EventParamsBase {
        constructor(params) {
          super(params);

          _initializerDefineProperty(this, "eventName", _descriptor24, this);

          _initializerDefineProperty(this, "arg0", _descriptor25, this);

          _initializerDefineProperty(this, "arg1", _descriptor26, this);

          _initializerDefineProperty(this, "arg2", _descriptor27, this);

          _initializerDefineProperty(this, "arg3", _descriptor28, this);

          _initializerDefineProperty(this, "arg4", _descriptor29, this);

          this.FromStrings(params);
        }

        FromStrings(params) {
          if (params.length < 2) {
            return false;
          }

          this.nodeName = params[0];
          this.eventName = params[1];
          this.arg0 = params[2];
          this.arg1 = params[3];
          this.arg2 = params[4];
          this.arg3 = params[5];
          this.arg4 = params[6];
          return true;
        }

        ToStrings() {
          return [this.nodeName, this.eventName, this.arg0, this.arg1, this.arg2, this.arg3, this.arg4];
        }

      }, (_descriptor24 = _applyDecoratedDescriptor(_class40.prototype, "eventName", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class40.prototype, "arg0", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class40.prototype, "arg1", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class40.prototype, "arg2", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class40.prototype, "arg3", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class40.prototype, "arg4", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      })), _class40)) || _class39));

      _export("UIOpacityParams", UIOpacityParams = (_dec41 = ccclass('UIOpacityParams'), _dec42 = property(CCFloat), _dec43 = property(CCFloat), _dec44 = property({
        type: Enum(_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType)
      }), _dec45 = property(CCBoolean), _dec41(_class42 = (_class43 = class UIOpacityParams extends EventParamsBase {
        constructor(params) {
          super(params);

          _initializerDefineProperty(this, "alphaTo", _descriptor30, this);

          _initializerDefineProperty(this, "duration", _descriptor31, this);

          _initializerDefineProperty(this, "easeType", _descriptor32, this);

          _initializerDefineProperty(this, "disableOnEnd", _descriptor33, this);

          this.FromStrings(params);
        }

        FromStrings(params) {
          if (params.length != 5) {
            return false;
          }

          let talpha = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(params[1]);
          let tduration = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(params[2]);
          let teasyType = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(params[3]);
          let tdisableOnEnd = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToBoolean(params[4]);

          if (talpha[0] === false || tduration[0] === false || teasyType[0] === false) {
            return false;
          }

          this.nodeName = params[0];
          this.alphaTo = talpha[1];
          this.duration = tduration[1];
          this.easeType = teasyType[1];
          this.disableOnEnd = tdisableOnEnd;
          return true;
        }

        ToStrings() {
          return [this.nodeName, String(this.alphaTo), String(this.duration), String(this.easeType), this.disableOnEnd ? 'true' : 'false'];
        }

      }, (_descriptor30 = _applyDecoratedDescriptor(_class43.prototype, "alphaTo", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 255.0;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class43.prototype, "duration", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class43.prototype, "easeType", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
            error: Error()
          }), EaseType) : EaseType).Linear;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class43.prototype, "disableOnEnd", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class43)) || _class42)); //#endregion
      //#region Animation


      _export("AnimPlayParams", AnimPlayParams = (_dec46 = ccclass('AnimPlayParams'), _dec47 = property(CCString), _dec48 = property(CCBoolean), _dec46(_class45 = (_class46 = class AnimPlayParams extends EventParamsBase {
        constructor(params) {
          super(params);

          _initializerDefineProperty(this, "clipName", _descriptor34, this);

          _initializerDefineProperty(this, "loop", _descriptor35, this);

          this.FromStrings(params);
        }

        FromStrings(params) {
          if (params.length < 3) {
            return false;
          }

          this.nodeName = params[0];
          this.clipName = params[1];
          this.loop = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToBoolean(params[2]);
          return true;
        }

        ToStrings() {
          return [this.nodeName, this.clipName, this.loop ? 'true' : 'false'];
        }

      }, (_descriptor34 = _applyDecoratedDescriptor(_class46.prototype, "clipName", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class46.prototype, "loop", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class46)) || _class45));

      _export("AnimStopParams", AnimStopParams = (_dec49 = ccclass('AnimStopParams'), _dec49(_class48 = class AnimStopParams extends EventParamsBase {}) || _class48));

      _export("AnimPauseParams", AnimPauseParams = (_dec50 = ccclass('AnimPauseParams'), _dec50(_class49 = class AnimPauseParams extends EventParamsBase {}) || _class49));

      _export("AnimResumeParams", AnimResumeParams = (_dec51 = ccclass('AnimResumeParams'), _dec51(_class50 = class AnimResumeParams extends EventParamsBase {}) || _class50)); //#endregion
      //#region SKAnimation


      _export("SKAnimPlayParams", SKAnimPlayParams = (_dec52 = ccclass('SKAnimPlayParams'), _dec53 = property(CCString), _dec54 = property(CCBoolean), _dec52(_class51 = (_class52 = class SKAnimPlayParams extends EventParamsBase {
        constructor(params) {
          super(params);

          _initializerDefineProperty(this, "clipName", _descriptor36, this);

          _initializerDefineProperty(this, "loop", _descriptor37, this);

          this.FromStrings(params);
        }

        FromStrings(params) {
          if (params.length < 3) {
            return false;
          }

          this.nodeName = params[0];
          this.clipName = params[1];
          this.loop = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToBoolean(params[2]);
          return true;
        }

        ToStrings() {
          return [this.nodeName, this.clipName, this.loop ? 'true' : 'false'];
        }

      }, (_descriptor36 = _applyDecoratedDescriptor(_class52.prototype, "clipName", [_dec53], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class52.prototype, "loop", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class52)) || _class51));

      _export("SKAnimStopParams", SKAnimStopParams = (_dec55 = ccclass('SKAnimStopParams'), _dec55(_class54 = class SKAnimStopParams extends EventParamsBase {}) || _class54));

      _export("SKAnimPauseParams", SKAnimPauseParams = (_dec56 = ccclass('SKAnimPauseParams'), _dec56(_class55 = class SKAnimPauseParams extends EventParamsBase {}) || _class55));

      _export("SKAnimResumeParams", SKAnimResumeParams = (_dec57 = ccclass('SKAnimResumeParams'), _dec57(_class56 = class SKAnimResumeParams extends EventParamsBase {}) || _class56)); //#endregion
      //#region Particle


      _export("ParticlePlayParams", ParticlePlayParams = (_dec58 = ccclass('ParticlePlayParams'), _dec59 = property(CCBoolean), _dec60 = property({
        type: CCFloat,
        tooltip: '目前持續時間並不準確，斟酌使用'
      }), _dec58(_class57 = (_class58 = class ParticlePlayParams extends EventParamsBase {
        constructor(params) {
          super(params);

          _initializerDefineProperty(this, "loop", _descriptor38, this);

          _initializerDefineProperty(this, "duration", _descriptor39, this);

          this.FromStrings(params);
        }

        FromStrings(params) {
          if (params.length < 3) {
            return false;
          }

          let tduration = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(params[2]);

          if (tduration[0] === false) {
            return false;
          }

          this.nodeName = params[0];
          this.loop = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToBoolean(params[1]);
          this.duration = tduration[1];
          return true;
        }

        ToStrings() {
          return [this.nodeName, this.loop ? 'true' : 'false', String(this.duration)];
        }

      }, (_descriptor38 = _applyDecoratedDescriptor(_class58.prototype, "loop", [_dec59], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class58.prototype, "duration", [_dec60], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
        }
      })), _class58)) || _class57));

      _export("ParticleStopParams", ParticleStopParams = (_dec61 = ccclass('ParticleStopParams'), _dec61(_class60 = class ParticleStopParams extends EventParamsBase {}) || _class60));

      _export("ParticleResetParams", ParticleResetParams = (_dec62 = ccclass('ParticleResetParams'), _dec62(_class61 = class ParticleResetParams extends EventParamsBase {}) || _class61));

      _export("ParticlePauseParams", ParticlePauseParams = (_dec63 = ccclass('ParticlePauseParams'), _dec63(_class62 = class ParticlePauseParams extends EventParamsBase {}) || _class62));

      _export("ParticleClearParams", ParticleClearParams = (_dec64 = ccclass('ParticleClearParams'), _dec64(_class63 = class ParticleClearParams extends EventParamsBase {}) || _class63));

      _export("ParticleStopEmittParams", ParticleStopEmittParams = (_dec65 = ccclass('ParticleStopEmittParams'), _dec65(_class64 = class ParticleStopEmittParams extends EventParamsBase {}) || _class64));

      _export("ParticleTintParams", ParticleTintParams = (_dec66 = ccclass('ParticleTintParams'), _dec67 = property(CCFloat), _dec68 = property(Color), _dec69 = property(Color), _dec70 = property({
        type: Enum(_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType)
      }), _dec71 = property({
        tooltip: '是否在結束時關閉'
      }), _dec66(_class65 = (_class66 = class ParticleTintParams extends EventParamsBase {
        constructor(params) {
          super(params);

          _initializerDefineProperty(this, "duration", _descriptor40, this);

          _initializerDefineProperty(this, "startTintColor", _descriptor41, this);

          _initializerDefineProperty(this, "endTintColor", _descriptor42, this);

          _initializerDefineProperty(this, "easeType", _descriptor43, this);

          _initializerDefineProperty(this, "disableOnEnd", _descriptor44, this);

          this.FromStrings(params);
        }

        FromStrings(params) {
          if (params.length !== 6) {
            return false;
          }

          this.nodeName = params[0];
          let tduration = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(params[1]);
          let tstartColor = new Color(params[2]);
          let tendColor = new Color(params[3]);
          let teasyType = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(params[4]);
          let tdisableOnEnd = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToBoolean(params[5]);

          if (tduration[0] === false || teasyType[0] === false) {
            return false;
          }

          this.nodeName = params[0];
          this.startTintColor = tstartColor;
          this.endTintColor = tendColor;
          this.duration = tduration[1];
          this.easeType = teasyType[1];
          this.disableOnEnd = tdisableOnEnd;
          return true;
        }

        ToStrings() {
          return [this.nodeName, String(this.duration), this.startTintColor.toHEX("#rrggbbaa"), this.endTintColor.toHEX("#rrggbbaa"), String(this.easeType), this.disableOnEnd ? 'true' : 'false'];
        }

      }, (_descriptor40 = _applyDecoratedDescriptor(_class66.prototype, "duration", [_dec67], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class66.prototype, "startTintColor", [_dec68], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Color();
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class66.prototype, "endTintColor", [_dec69], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Color();
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class66.prototype, "easeType", [_dec70], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
            error: Error()
          }), EaseType) : EaseType).Linear;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class66.prototype, "disableOnEnd", [_dec71], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class66)) || _class65));

      _export("ParticleCapacityParams", ParticleCapacityParams = (_dec72 = ccclass('ParticleCapacityParams'), _dec72(_class68 = (_class69 = class ParticleCapacityParams extends EventParamsBase {
        constructor(params) {
          super(params);

          _initializerDefineProperty(this, "capacity", _descriptor45, this);

          this.FromStrings(params);
        }

        FromStrings(params) {
          if (params.length < 2) {
            return false;
          }

          let tcapacity = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(params[1]);

          if (tcapacity[0] === false) {
            return false;
          }

          this.nodeName = params[0];
          this.capacity = tcapacity[1];
          return true;
        }

        ToStrings() {
          return [this.nodeName, String(this.capacity)];
        }

      }, (_descriptor45 = _applyDecoratedDescriptor(_class69.prototype, "capacity", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class69)) || _class68));

      _export("ParticleRateOverTimeParams", ParticleRateOverTimeParams = (_dec73 = ccclass('ParticleRateOverTimeParams'), _dec73(_class71 = (_class72 = class ParticleRateOverTimeParams extends EventParamsBase {
        constructor(params) {
          super(params);

          _initializerDefineProperty(this, "rateOverTime", _descriptor46, this);

          this.FromStrings(params);
        }

        FromStrings(params) {
          if (params.length < 2) {
            return false;
          }

          let trateOverTime = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(params[1]);

          if (trateOverTime[0] === false) {
            return false;
          }

          this.nodeName = params[0];
          this.rateOverTime = trateOverTime[1];
          return true;
        }

        ToStrings() {
          return [this.nodeName, String(this.rateOverTime)];
        }

      }, (_descriptor46 = _applyDecoratedDescriptor(_class72.prototype, "rateOverTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class72)) || _class71)); //#endregion


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3a4abd9076f8f48bc82d007de7f60ad13177a9dc.js.map