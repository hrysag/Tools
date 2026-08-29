System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, CCString, Enum, ActionEventType, AnimPauseParams, AnimPlayParams, AnimResumeParams, AnimStopParams, NodeActiveParams, NodeEventParams, ParticleClearParams, ParticleTintParams, ParticlePauseParams, ParticlePlayParams, ParticleResetParams, ParticleStopEmittParams, ParticleStopParams, SKAnimPauseParams, SKAnimPlayParams, SKAnimResumeParams, SKAnimStopParams, SpineClearTrackParams, SpineContinueParams, SpineFadingParams, SpinePauseParams, SpinePlayParams, SpineResetParams, UIOpacityParams, SpineResetSlotParams, SpineMixParams, SpineAddParams, SpineSetToSetupPoseParams, SpineClearAnimationParams, ParticleCapacityParams, SpineAlphaParams, SpineTimeScaleParams, SpineTrackTimeScaleParams, ParticleRateOverTimeParams, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, ActionEvent, getDuration;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfActionEventType(extras) {
    _reporterNs.report("ActionEventType", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimPauseParams(extras) {
    _reporterNs.report("AnimPauseParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimPlayParams(extras) {
    _reporterNs.report("AnimPlayParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimResumeParams(extras) {
    _reporterNs.report("AnimResumeParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimStopParams(extras) {
    _reporterNs.report("AnimStopParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeActiveParams(extras) {
    _reporterNs.report("NodeActiveParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeEventParams(extras) {
    _reporterNs.report("NodeEventParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfParticleClearParams(extras) {
    _reporterNs.report("ParticleClearParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfParticleTintParams(extras) {
    _reporterNs.report("ParticleTintParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfParticlePauseParams(extras) {
    _reporterNs.report("ParticlePauseParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfParticlePlayParams(extras) {
    _reporterNs.report("ParticlePlayParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfParticleResetParams(extras) {
    _reporterNs.report("ParticleResetParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfParticleStopEmittParams(extras) {
    _reporterNs.report("ParticleStopEmittParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfParticleStopParams(extras) {
    _reporterNs.report("ParticleStopParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKAnimPauseParams(extras) {
    _reporterNs.report("SKAnimPauseParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKAnimPlayParams(extras) {
    _reporterNs.report("SKAnimPlayParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKAnimResumeParams(extras) {
    _reporterNs.report("SKAnimResumeParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKAnimStopParams(extras) {
    _reporterNs.report("SKAnimStopParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineClearTrackParams(extras) {
    _reporterNs.report("SpineClearTrackParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineContinueParams(extras) {
    _reporterNs.report("SpineContinueParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineFadingParams(extras) {
    _reporterNs.report("SpineFadingParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpinePauseParams(extras) {
    _reporterNs.report("SpinePauseParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpinePlayParams(extras) {
    _reporterNs.report("SpinePlayParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineResetParams(extras) {
    _reporterNs.report("SpineResetParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIOpacityParams(extras) {
    _reporterNs.report("UIOpacityParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineResetSlotParams(extras) {
    _reporterNs.report("SpineResetSlotParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineMixParams(extras) {
    _reporterNs.report("SpineMixParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineAddParams(extras) {
    _reporterNs.report("SpineAddParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineSetToSetupPoseParams(extras) {
    _reporterNs.report("SpineSetToSetupPoseParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineClearAnimationParams(extras) {
    _reporterNs.report("SpineClearAnimationParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfParticleCapacityParams(extras) {
    _reporterNs.report("ParticleCapacityParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineAlphaParams(extras) {
    _reporterNs.report("SpineAlphaParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineTimeScaleParams(extras) {
    _reporterNs.report("SpineTimeScaleParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineTrackTimeScaleParams(extras) {
    _reporterNs.report("SpineTrackTimeScaleParams", "./ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfParticleRateOverTimeParams(extras) {
    _reporterNs.report("ParticleRateOverTimeParams", "./ActionEventType", _context.meta, extras);
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
      CCString = _cc.CCString;
      Enum = _cc.Enum;
    }, function (_unresolved_2) {
      ActionEventType = _unresolved_2.ActionEventType;
      AnimPauseParams = _unresolved_2.AnimPauseParams;
      AnimPlayParams = _unresolved_2.AnimPlayParams;
      AnimResumeParams = _unresolved_2.AnimResumeParams;
      AnimStopParams = _unresolved_2.AnimStopParams;
      NodeActiveParams = _unresolved_2.NodeActiveParams;
      NodeEventParams = _unresolved_2.NodeEventParams;
      ParticleClearParams = _unresolved_2.ParticleClearParams;
      ParticleTintParams = _unresolved_2.ParticleTintParams;
      ParticlePauseParams = _unresolved_2.ParticlePauseParams;
      ParticlePlayParams = _unresolved_2.ParticlePlayParams;
      ParticleResetParams = _unresolved_2.ParticleResetParams;
      ParticleStopEmittParams = _unresolved_2.ParticleStopEmittParams;
      ParticleStopParams = _unresolved_2.ParticleStopParams;
      SKAnimPauseParams = _unresolved_2.SKAnimPauseParams;
      SKAnimPlayParams = _unresolved_2.SKAnimPlayParams;
      SKAnimResumeParams = _unresolved_2.SKAnimResumeParams;
      SKAnimStopParams = _unresolved_2.SKAnimStopParams;
      SpineClearTrackParams = _unresolved_2.SpineClearTrackParams;
      SpineContinueParams = _unresolved_2.SpineContinueParams;
      SpineFadingParams = _unresolved_2.SpineFadingParams;
      SpinePauseParams = _unresolved_2.SpinePauseParams;
      SpinePlayParams = _unresolved_2.SpinePlayParams;
      SpineResetParams = _unresolved_2.SpineResetParams;
      UIOpacityParams = _unresolved_2.UIOpacityParams;
      SpineResetSlotParams = _unresolved_2.SpineResetSlotParams;
      SpineMixParams = _unresolved_2.SpineMixParams;
      SpineAddParams = _unresolved_2.SpineAddParams;
      SpineSetToSetupPoseParams = _unresolved_2.SpineSetToSetupPoseParams;
      SpineClearAnimationParams = _unresolved_2.SpineClearAnimationParams;
      ParticleCapacityParams = _unresolved_2.ParticleCapacityParams;
      SpineAlphaParams = _unresolved_2.SpineAlphaParams;
      SpineTimeScaleParams = _unresolved_2.SpineTimeScaleParams;
      SpineTrackTimeScaleParams = _unresolved_2.SpineTrackTimeScaleParams;
      ParticleRateOverTimeParams = _unresolved_2.ParticleRateOverTimeParams;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d7ba2aSX05GVoxmJd83w8L+", "ActionEvent", undefined);

      __checkObsolete__(['_decorator', 'AnimationClip', 'CCFloat', 'CCString', 'Enum']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ActionEvent", ActionEvent = (_dec = ccclass('ActionEvent'), _dec2 = property({
        type: CCFloat,
        visible: true,
        tooltip: '秒數'
      }), _dec3 = property({
        visible: false
      }), _dec4 = property({
        type: Enum(_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
          error: Error()
        }), ActionEventType) : ActionEventType),
        visible: false
      }), _dec5 = property({
        type: Enum(_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
          error: Error()
        }), ActionEventType) : ActionEventType),
        visible: true,
        tooltip: '功能'
      }), _dec6 = property({
        type: CCString,
        visible: false
      }), _dec7 = property({
        type: _crd && SpinePlayParams === void 0 ? (_reportPossibleCrUseOfSpinePlayParams({
          error: Error()
        }), SpinePlayParams) : SpinePlayParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).SPINE_PLAY === this._eventType;
        }

      }), _dec8 = property({
        type: _crd && SpinePauseParams === void 0 ? (_reportPossibleCrUseOfSpinePauseParams({
          error: Error()
        }), SpinePauseParams) : SpinePauseParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).SPINE_PAUSE === this._eventType;
        }

      }), _dec9 = property({
        type: _crd && SpineContinueParams === void 0 ? (_reportPossibleCrUseOfSpineContinueParams({
          error: Error()
        }), SpineContinueParams) : SpineContinueParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).SPINE_CONTINUE === this._eventType;
        }

      }), _dec10 = property({
        type: _crd && SpineResetParams === void 0 ? (_reportPossibleCrUseOfSpineResetParams({
          error: Error()
        }), SpineResetParams) : SpineResetParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).SPINE_RESET === this._eventType;
        }

      }), _dec11 = property({
        type: _crd && SpineClearTrackParams === void 0 ? (_reportPossibleCrUseOfSpineClearTrackParams({
          error: Error()
        }), SpineClearTrackParams) : SpineClearTrackParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).SPINE_CLEARTRACK === this._eventType;
        }

      }), _dec12 = property({
        type: _crd && SpineSetToSetupPoseParams === void 0 ? (_reportPossibleCrUseOfSpineSetToSetupPoseParams({
          error: Error()
        }), SpineSetToSetupPoseParams) : SpineSetToSetupPoseParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).SPINE_SET_TO_SETUP_POSE === this._eventType;
        }

      }), _dec13 = property({
        type: _crd && SpineClearAnimationParams === void 0 ? (_reportPossibleCrUseOfSpineClearAnimationParams({
          error: Error()
        }), SpineClearAnimationParams) : SpineClearAnimationParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).SPINE_CLEAR_ANIMATION === this._eventType;
        }

      }), _dec14 = property({
        type: _crd && SpineFadingParams === void 0 ? (_reportPossibleCrUseOfSpineFadingParams({
          error: Error()
        }), SpineFadingParams) : SpineFadingParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).SPINE_FADING === this._eventType;
        }

      }), _dec15 = property({
        type: _crd && SpineResetSlotParams === void 0 ? (_reportPossibleCrUseOfSpineResetSlotParams({
          error: Error()
        }), SpineResetSlotParams) : SpineResetSlotParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).SPINE_RESET_SLOT === this._eventType;
        }

      }), _dec16 = property({
        type: _crd && SpineMixParams === void 0 ? (_reportPossibleCrUseOfSpineMixParams({
          error: Error()
        }), SpineMixParams) : SpineMixParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).SPINE_MIX === this._eventType;
        }

      }), _dec17 = property({
        type: _crd && SpineAddParams === void 0 ? (_reportPossibleCrUseOfSpineAddParams({
          error: Error()
        }), SpineAddParams) : SpineAddParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).SPINE_ADD === this._eventType;
        }

      }), _dec18 = property({
        type: _crd && SpineTimeScaleParams === void 0 ? (_reportPossibleCrUseOfSpineTimeScaleParams({
          error: Error()
        }), SpineTimeScaleParams) : SpineTimeScaleParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).SPINE_TIMESCALE === this._eventType;
        }

      }), _dec19 = property({
        type: _crd && SpineTrackTimeScaleParams === void 0 ? (_reportPossibleCrUseOfSpineTrackTimeScaleParams({
          error: Error()
        }), SpineTrackTimeScaleParams) : SpineTrackTimeScaleParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).SPINE_TRACK_TIMESCALE === this._eventType;
        }

      }), _dec20 = property({
        type: _crd && SpineAlphaParams === void 0 ? (_reportPossibleCrUseOfSpineAlphaParams({
          error: Error()
        }), SpineAlphaParams) : SpineAlphaParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).SPINE_ALPHA === this._eventType;
        }

      }), _dec21 = property({
        type: _crd && NodeActiveParams === void 0 ? (_reportPossibleCrUseOfNodeActiveParams({
          error: Error()
        }), NodeActiveParams) : NodeActiveParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).NODE_ACTIVE === this._eventType;
        }

      }), _dec22 = property({
        type: _crd && NodeEventParams === void 0 ? (_reportPossibleCrUseOfNodeEventParams({
          error: Error()
        }), NodeEventParams) : NodeEventParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).NODE_EVENT === this._eventType;
        }

      }), _dec23 = property({
        type: _crd && UIOpacityParams === void 0 ? (_reportPossibleCrUseOfUIOpacityParams({
          error: Error()
        }), UIOpacityParams) : UIOpacityParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).UI_OPACITY === this._eventType;
        }

      }), _dec24 = property({
        type: _crd && AnimPlayParams === void 0 ? (_reportPossibleCrUseOfAnimPlayParams({
          error: Error()
        }), AnimPlayParams) : AnimPlayParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).ANIM_PLAY === this._eventType;
        }

      }), _dec25 = property({
        type: _crd && AnimStopParams === void 0 ? (_reportPossibleCrUseOfAnimStopParams({
          error: Error()
        }), AnimStopParams) : AnimStopParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).ANIM_STOP === this._eventType;
        }

      }), _dec26 = property({
        type: _crd && AnimPauseParams === void 0 ? (_reportPossibleCrUseOfAnimPauseParams({
          error: Error()
        }), AnimPauseParams) : AnimPauseParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).ANIM_PAUSE === this._eventType;
        }

      }), _dec27 = property({
        type: _crd && AnimResumeParams === void 0 ? (_reportPossibleCrUseOfAnimResumeParams({
          error: Error()
        }), AnimResumeParams) : AnimResumeParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).ANIM_RESUME === this._eventType;
        }

      }), _dec28 = property({
        type: _crd && SKAnimPlayParams === void 0 ? (_reportPossibleCrUseOfSKAnimPlayParams({
          error: Error()
        }), SKAnimPlayParams) : SKAnimPlayParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).SK_ANIM_PLAY === this._eventType;
        }

      }), _dec29 = property({
        type: _crd && SKAnimStopParams === void 0 ? (_reportPossibleCrUseOfSKAnimStopParams({
          error: Error()
        }), SKAnimStopParams) : SKAnimStopParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).SK_ANIM_STOP === this._eventType;
        }

      }), _dec30 = property({
        type: _crd && SKAnimPauseParams === void 0 ? (_reportPossibleCrUseOfSKAnimPauseParams({
          error: Error()
        }), SKAnimPauseParams) : SKAnimPauseParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).SK_ANIM_PAUSE === this._eventType;
        }

      }), _dec31 = property({
        type: _crd && SKAnimResumeParams === void 0 ? (_reportPossibleCrUseOfSKAnimResumeParams({
          error: Error()
        }), SKAnimResumeParams) : SKAnimResumeParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).SK_ANIM_RESUME === this._eventType;
        }

      }), _dec32 = property({
        type: _crd && ParticlePlayParams === void 0 ? (_reportPossibleCrUseOfParticlePlayParams({
          error: Error()
        }), ParticlePlayParams) : ParticlePlayParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).PARTICLE_PLAY === this._eventType;
        }

      }), _dec33 = property({
        type: _crd && ParticleStopParams === void 0 ? (_reportPossibleCrUseOfParticleStopParams({
          error: Error()
        }), ParticleStopParams) : ParticleStopParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).PARTICLE_STOP === this._eventType;
        }

      }), _dec34 = property({
        type: _crd && ParticlePauseParams === void 0 ? (_reportPossibleCrUseOfParticlePauseParams({
          error: Error()
        }), ParticlePauseParams) : ParticlePauseParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).PARTICLE_PAUSE === this._eventType;
        }

      }), _dec35 = property({
        type: _crd && ParticleClearParams === void 0 ? (_reportPossibleCrUseOfParticleClearParams({
          error: Error()
        }), ParticleClearParams) : ParticleClearParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).PARTICLE_CLEAR === this._eventType;
        }

      }), _dec36 = property({
        type: _crd && ParticleStopEmittParams === void 0 ? (_reportPossibleCrUseOfParticleStopEmittParams({
          error: Error()
        }), ParticleStopEmittParams) : ParticleStopEmittParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).PARTICLE_STOPEMITT === this._eventType;
        }

      }), _dec37 = property({
        type: _crd && ParticleResetParams === void 0 ? (_reportPossibleCrUseOfParticleResetParams({
          error: Error()
        }), ParticleResetParams) : ParticleResetParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).PARTICLE_RESET === this._eventType;
        }

      }), _dec38 = property({
        type: _crd && ParticleTintParams === void 0 ? (_reportPossibleCrUseOfParticleTintParams({
          error: Error()
        }), ParticleTintParams) : ParticleTintParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).PARTICLE_TINT_COLOR === this._eventType;
        }

      }), _dec39 = property({
        type: _crd && ParticleCapacityParams === void 0 ? (_reportPossibleCrUseOfParticleCapacityParams({
          error: Error()
        }), ParticleCapacityParams) : ParticleCapacityParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).PARTICLE_CAPACITY === this._eventType;
        }

      }), _dec40 = property({
        type: _crd && ParticleRateOverTimeParams === void 0 ? (_reportPossibleCrUseOfParticleRateOverTimeParams({
          error: Error()
        }), ParticleRateOverTimeParams) : ParticleRateOverTimeParams,

        visible() {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).PARTICLE_RATE_OVER_TIME === this._eventType;
        }

      }), _dec(_class = (_class2 = class ActionEvent {
        constructor() {
          // start time
          _initializerDefineProperty(this, "frame", _descriptor, this);

          // function name
          _initializerDefineProperty(this, "func", _descriptor2, this);

          // event type
          _initializerDefineProperty(this, "_eventType", _descriptor3, this);

          //儲存參數
          _initializerDefineProperty(this, "eventParams", _descriptor4, this);
        }

        set eventType(value) {
          this._eventType = value;
          this.func = (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType)[this._eventType];
        }

        get eventType() {
          return this._eventType;
        }

        //for AnimationClip.IEvent
        get params() {
          return this.eventParams;
        } //SPINE PLAY PARAMS


        get spinePlayParams() {
          return new (_crd && SpinePlayParams === void 0 ? (_reportPossibleCrUseOfSpinePlayParams({
            error: Error()
          }), SpinePlayParams) : SpinePlayParams)(this.eventParams);
        }

        set spinePlayParams(value) {
          this.eventParams = value.ToStrings();
        } //SPINE PAUSE PARAMS


        get spinePauseParams() {
          return new (_crd && SpinePauseParams === void 0 ? (_reportPossibleCrUseOfSpinePauseParams({
            error: Error()
          }), SpinePauseParams) : SpinePauseParams)(this.eventParams);
        }

        set spinePauseParams(value) {
          this.eventParams = value.ToStrings();
        } //SPINE CONTINUE PARAMS


        get spineContinueParams() {
          return new (_crd && SpineContinueParams === void 0 ? (_reportPossibleCrUseOfSpineContinueParams({
            error: Error()
          }), SpineContinueParams) : SpineContinueParams)(this.eventParams);
        }

        set spineContinueParams(value) {
          this.eventParams = value.ToStrings();
        } //SPINE RESET PARAMS


        get spineResetParams() {
          return new (_crd && SpineResetParams === void 0 ? (_reportPossibleCrUseOfSpineResetParams({
            error: Error()
          }), SpineResetParams) : SpineResetParams)(this.eventParams);
        }

        set spineResetParams(value) {
          this.eventParams = value.ToStrings();
        } //SPINE CLEARTRACK PARAMS


        get spineClearTrackParams() {
          return new (_crd && SpineClearTrackParams === void 0 ? (_reportPossibleCrUseOfSpineClearTrackParams({
            error: Error()
          }), SpineClearTrackParams) : SpineClearTrackParams)(this.eventParams);
        }

        set spineClearTrackParams(value) {
          this.eventParams = value.ToStrings();
        }

        get spineSetToSetupPoseParams() {
          return new (_crd && SpineSetToSetupPoseParams === void 0 ? (_reportPossibleCrUseOfSpineSetToSetupPoseParams({
            error: Error()
          }), SpineSetToSetupPoseParams) : SpineSetToSetupPoseParams)(this.eventParams);
        }

        set spineSetToSetupPoseParams(value) {
          this.eventParams = value.ToStrings();
        }

        get spineClearAnimationParams() {
          return new (_crd && SpineClearAnimationParams === void 0 ? (_reportPossibleCrUseOfSpineClearAnimationParams({
            error: Error()
          }), SpineClearAnimationParams) : SpineClearAnimationParams)(this.eventParams);
        }

        set spineClearAnimationParams(value) {
          this.eventParams = value.ToStrings();
        } //SPINE FADING PARAMS


        get spineFadingParams() {
          return new (_crd && SpineFadingParams === void 0 ? (_reportPossibleCrUseOfSpineFadingParams({
            error: Error()
          }), SpineFadingParams) : SpineFadingParams)(this.eventParams);
        }

        set spineFadingParams(value) {
          this.eventParams = value.ToStrings();
        }

        get spineResetSlotParams() {
          return new (_crd && SpineResetSlotParams === void 0 ? (_reportPossibleCrUseOfSpineResetSlotParams({
            error: Error()
          }), SpineResetSlotParams) : SpineResetSlotParams)(this.eventParams);
        }

        set spineResetSlotParams(value) {
          this.eventParams = value.ToStrings();
        }

        get spineMixParams() {
          return new (_crd && SpineMixParams === void 0 ? (_reportPossibleCrUseOfSpineMixParams({
            error: Error()
          }), SpineMixParams) : SpineMixParams)(this.eventParams);
        }

        set spineMixParams(value) {
          this.eventParams = value.ToStrings();
        }

        get spineAddParams() {
          return new (_crd && SpineAddParams === void 0 ? (_reportPossibleCrUseOfSpineAddParams({
            error: Error()
          }), SpineAddParams) : SpineAddParams)(this.eventParams);
        }

        set spineAddParams(value) {
          this.eventParams = value.ToStrings();
        }

        get spineTimeScaleParams() {
          return new (_crd && SpineTimeScaleParams === void 0 ? (_reportPossibleCrUseOfSpineTimeScaleParams({
            error: Error()
          }), SpineTimeScaleParams) : SpineTimeScaleParams)(this.eventParams);
        }

        set spineTimeScaleParams(value) {
          this.eventParams = value.ToStrings();
        }

        get spineTrackTimeScaleParams() {
          return new (_crd && SpineTrackTimeScaleParams === void 0 ? (_reportPossibleCrUseOfSpineTrackTimeScaleParams({
            error: Error()
          }), SpineTrackTimeScaleParams) : SpineTrackTimeScaleParams)(this.eventParams);
        }

        set spineTrackTimeScaleParams(value) {
          this.eventParams = value.ToStrings();
        }

        get spineAlphaParams() {
          return new (_crd && SpineAlphaParams === void 0 ? (_reportPossibleCrUseOfSpineAlphaParams({
            error: Error()
          }), SpineAlphaParams) : SpineAlphaParams)(this.eventParams);
        }

        set spineAlphaParams(value) {
          this.eventParams = value.ToStrings();
        } //NODE ACTIVE PARAMS


        get nodeActiveParams() {
          return new (_crd && NodeActiveParams === void 0 ? (_reportPossibleCrUseOfNodeActiveParams({
            error: Error()
          }), NodeActiveParams) : NodeActiveParams)(this.eventParams);
        }

        set nodeActiveParams(value) {
          this.eventParams = value.ToStrings();
        } //NODE EVENT PARAMS


        get nodeEventParams() {
          return new (_crd && NodeEventParams === void 0 ? (_reportPossibleCrUseOfNodeEventParams({
            error: Error()
          }), NodeEventParams) : NodeEventParams)(this.eventParams);
        }

        set nodeEventParams(value) {
          this.eventParams = value.ToStrings();
        } //UI OPACITY PARAMS


        get uIOpacityParams() {
          return new (_crd && UIOpacityParams === void 0 ? (_reportPossibleCrUseOfUIOpacityParams({
            error: Error()
          }), UIOpacityParams) : UIOpacityParams)(this.eventParams);
        }

        set uIOpacityParams(value) {
          this.eventParams = value.ToStrings();
        } //ANIMATION PLAY PARAMS


        get animPlayParams() {
          return new (_crd && AnimPlayParams === void 0 ? (_reportPossibleCrUseOfAnimPlayParams({
            error: Error()
          }), AnimPlayParams) : AnimPlayParams)(this.eventParams);
        }

        set animPlayParams(value) {
          this.eventParams = value.ToStrings();
        } //ANIMATION STOP PARAMS


        get animStopParams() {
          return new (_crd && AnimStopParams === void 0 ? (_reportPossibleCrUseOfAnimStopParams({
            error: Error()
          }), AnimStopParams) : AnimStopParams)(this.eventParams);
        }

        set animStopParams(value) {
          this.eventParams = value.ToStrings();
        } //ANIMATION PAUSE PARAMS


        get animPauseParams() {
          return new (_crd && AnimPauseParams === void 0 ? (_reportPossibleCrUseOfAnimPauseParams({
            error: Error()
          }), AnimPauseParams) : AnimPauseParams)(this.eventParams);
        }

        set animPauseParams(value) {
          this.eventParams = value.ToStrings();
        } //ANIMATION RESUME PARAMS


        get animResumeParams() {
          return new (_crd && AnimResumeParams === void 0 ? (_reportPossibleCrUseOfAnimResumeParams({
            error: Error()
          }), AnimResumeParams) : AnimResumeParams)(this.eventParams);
        }

        set animResumeParams(value) {
          this.eventParams = value.ToStrings();
        } //SKELETON ANIMATION PLAY PARAMS


        get sKAnimPlayParams() {
          return new (_crd && SKAnimPlayParams === void 0 ? (_reportPossibleCrUseOfSKAnimPlayParams({
            error: Error()
          }), SKAnimPlayParams) : SKAnimPlayParams)(this.eventParams);
        }

        set sKAnimPlayParams(value) {
          this.eventParams = value.ToStrings();
        } //SKELETON ANIMATION STOP PARAMS


        get sKAnimStopParams() {
          return new (_crd && SKAnimStopParams === void 0 ? (_reportPossibleCrUseOfSKAnimStopParams({
            error: Error()
          }), SKAnimStopParams) : SKAnimStopParams)(this.eventParams);
        }

        set sKAnimStopParams(value) {
          this.eventParams = value.ToStrings();
        } //SKELETON ANIMATION PAUSE PARAMS


        get sKAnimPauseParams() {
          return new (_crd && SKAnimPauseParams === void 0 ? (_reportPossibleCrUseOfSKAnimPauseParams({
            error: Error()
          }), SKAnimPauseParams) : SKAnimPauseParams)(this.eventParams);
        }

        set sKAnimPauseParams(value) {
          this.eventParams = value.ToStrings();
        } //SKELETON ANIMATION RESUME PARAMS


        get sKAnimResumeParams() {
          return new (_crd && SKAnimResumeParams === void 0 ? (_reportPossibleCrUseOfSKAnimResumeParams({
            error: Error()
          }), SKAnimResumeParams) : SKAnimResumeParams)(this.eventParams);
        }

        set sKAnimResumeParams(value) {
          this.eventParams = value.ToStrings();
        } //PARTICLE PLAY PARAMS


        get particlePlayParams() {
          return new (_crd && ParticlePlayParams === void 0 ? (_reportPossibleCrUseOfParticlePlayParams({
            error: Error()
          }), ParticlePlayParams) : ParticlePlayParams)(this.eventParams);
        }

        set particlePlayParams(value) {
          this.eventParams = value.ToStrings();
        } //PARTICLE STOP PARAMS


        get particleStopParams() {
          return new (_crd && ParticleStopParams === void 0 ? (_reportPossibleCrUseOfParticleStopParams({
            error: Error()
          }), ParticleStopParams) : ParticleStopParams)(this.eventParams);
        }

        set particleStopParams(value) {
          this.eventParams = value.ToStrings();
        } //PARTICLE PAUSE PARAMS


        get particlePauseParams() {
          return new (_crd && ParticlePauseParams === void 0 ? (_reportPossibleCrUseOfParticlePauseParams({
            error: Error()
          }), ParticlePauseParams) : ParticlePauseParams)(this.eventParams);
        }

        set particlePauseParams(value) {
          this.eventParams = value.ToStrings();
        } //PARTICLE CLEAR PARAMS


        get particleClearParams() {
          return new (_crd && ParticleClearParams === void 0 ? (_reportPossibleCrUseOfParticleClearParams({
            error: Error()
          }), ParticleClearParams) : ParticleClearParams)(this.eventParams);
        }

        set particleClearParams(value) {
          this.eventParams = value.ToStrings();
        } //PARTICLE STOPEMITT PARAMS


        get particleStopEmittParams() {
          return new (_crd && ParticleStopEmittParams === void 0 ? (_reportPossibleCrUseOfParticleStopEmittParams({
            error: Error()
          }), ParticleStopEmittParams) : ParticleStopEmittParams)(this.eventParams);
        }

        set particleStopEmittParams(value) {
          this.eventParams = value.ToStrings();
        } //PARTICLE RESET PARAMS


        get particleResetParams() {
          return new (_crd && ParticleResetParams === void 0 ? (_reportPossibleCrUseOfParticleResetParams({
            error: Error()
          }), ParticleResetParams) : ParticleResetParams)(this.eventParams);
        }

        set particleResetParams(value) {
          this.eventParams = value.ToStrings();
        } //PARTICLE TINT COLOR PARAMS


        get particleColorParams() {
          return new (_crd && ParticleTintParams === void 0 ? (_reportPossibleCrUseOfParticleTintParams({
            error: Error()
          }), ParticleTintParams) : ParticleTintParams)(this.eventParams);
        }

        set particleColorParams(value) {
          this.eventParams = value.ToStrings();
        } //PARTICLE CAPACITY PARAMS


        get particleCapacityParams() {
          return new (_crd && ParticleCapacityParams === void 0 ? (_reportPossibleCrUseOfParticleCapacityParams({
            error: Error()
          }), ParticleCapacityParams) : ParticleCapacityParams)(this.eventParams);
        }

        set particleCapacityParams(value) {
          this.eventParams = value.ToStrings();
        } //PARTICLE CAPACITY PARAMS


        get particleRateOverTimeParams() {
          return new (_crd && ParticleRateOverTimeParams === void 0 ? (_reportPossibleCrUseOfParticleRateOverTimeParams({
            error: Error()
          }), ParticleRateOverTimeParams) : ParticleRateOverTimeParams)(this.eventParams);
        }

        set particleRateOverTimeParams(value) {
          this.eventParams = value.ToStrings();
        }
        /*
        //PARTICLE 2D PLAY PARAMS
        @property({ type: ParticlePlayParams, visible() { return ActionEventType.PARTICLE_2D_PLAY === (this as ActionEvent)._eventType; } })
        get particle2DPlayParams(): ParticlePlayParams {
            return new ParticlePlayParams(this.eventParams);
        }
        set particle2DPlayParams(value: ParticlePlayParams) {
            this.eventParams = value.ToStrings();
        }
          //PARTICLE 2D STOPEMITT PARAMS
        @property({ type: ParticleStopEmittParams, visible() { return ActionEventType.PARTICLE_2D_STOPEMITT === (this as ActionEvent)._eventType; } })
        get particle2DStopEmittParams(): ParticleStopEmittParams {
            return new ParticleStopEmittParams(this.eventParams);
        }
        set particle2DStopEmittParams(value: ParticleStopEmittParams) {
            this.eventParams = value.ToStrings();
        }
          //PARTICLE 2D RESET PARAMS
        @property({ type: ParticleResetParams, visible() { return ActionEventType.PARTICLE_2D_RESET === (this as ActionEvent)._eventType; } })
        get particle2DResetParams(): ParticleResetParams {
            return new ParticleResetParams(this.eventParams);
        }
        set particle2DResetParams(value: ParticleResetParams) {
            this.eventParams = value.ToStrings();
        }
        */


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "frame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "func", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_eventType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).NONE;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "eventType", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "eventType"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "eventParams", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "spinePlayParams", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "spinePlayParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spinePauseParams", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "spinePauseParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spineContinueParams", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "spineContinueParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spineResetParams", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "spineResetParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spineClearTrackParams", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "spineClearTrackParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spineSetToSetupPoseParams", [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "spineSetToSetupPoseParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spineClearAnimationParams", [_dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "spineClearAnimationParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spineFadingParams", [_dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "spineFadingParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spineResetSlotParams", [_dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "spineResetSlotParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spineMixParams", [_dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "spineMixParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spineAddParams", [_dec17], Object.getOwnPropertyDescriptor(_class2.prototype, "spineAddParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spineTimeScaleParams", [_dec18], Object.getOwnPropertyDescriptor(_class2.prototype, "spineTimeScaleParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spineTrackTimeScaleParams", [_dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "spineTrackTimeScaleParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spineAlphaParams", [_dec20], Object.getOwnPropertyDescriptor(_class2.prototype, "spineAlphaParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "nodeActiveParams", [_dec21], Object.getOwnPropertyDescriptor(_class2.prototype, "nodeActiveParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "nodeEventParams", [_dec22], Object.getOwnPropertyDescriptor(_class2.prototype, "nodeEventParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "uIOpacityParams", [_dec23], Object.getOwnPropertyDescriptor(_class2.prototype, "uIOpacityParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "animPlayParams", [_dec24], Object.getOwnPropertyDescriptor(_class2.prototype, "animPlayParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "animStopParams", [_dec25], Object.getOwnPropertyDescriptor(_class2.prototype, "animStopParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "animPauseParams", [_dec26], Object.getOwnPropertyDescriptor(_class2.prototype, "animPauseParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "animResumeParams", [_dec27], Object.getOwnPropertyDescriptor(_class2.prototype, "animResumeParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "sKAnimPlayParams", [_dec28], Object.getOwnPropertyDescriptor(_class2.prototype, "sKAnimPlayParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "sKAnimStopParams", [_dec29], Object.getOwnPropertyDescriptor(_class2.prototype, "sKAnimStopParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "sKAnimPauseParams", [_dec30], Object.getOwnPropertyDescriptor(_class2.prototype, "sKAnimPauseParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "sKAnimResumeParams", [_dec31], Object.getOwnPropertyDescriptor(_class2.prototype, "sKAnimResumeParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "particlePlayParams", [_dec32], Object.getOwnPropertyDescriptor(_class2.prototype, "particlePlayParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "particleStopParams", [_dec33], Object.getOwnPropertyDescriptor(_class2.prototype, "particleStopParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "particlePauseParams", [_dec34], Object.getOwnPropertyDescriptor(_class2.prototype, "particlePauseParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "particleClearParams", [_dec35], Object.getOwnPropertyDescriptor(_class2.prototype, "particleClearParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "particleStopEmittParams", [_dec36], Object.getOwnPropertyDescriptor(_class2.prototype, "particleStopEmittParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "particleResetParams", [_dec37], Object.getOwnPropertyDescriptor(_class2.prototype, "particleResetParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "particleColorParams", [_dec38], Object.getOwnPropertyDescriptor(_class2.prototype, "particleColorParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "particleCapacityParams", [_dec39], Object.getOwnPropertyDescriptor(_class2.prototype, "particleCapacityParams"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "particleRateOverTimeParams", [_dec40], Object.getOwnPropertyDescriptor(_class2.prototype, "particleRateOverTimeParams"), _class2.prototype)), _class2)) || _class));

      _export("getDuration", getDuration = function (events) {
        let duration = 0;

        for (let index = 0; index < events.length; index++) {
          const event = events[index];

          if (event.frame > duration) {
            duration = event.frame;
          }
        } //avoid duration equals frame time


        return duration + 0.01;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0e3c690e04958963a143563e19a4e1bf8df3a292.js.map