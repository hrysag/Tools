System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, CCString, Component, GameTimeScale, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, AnimationTimeScaleTuner;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameTimeScale(extras) {
    _reporterNs.report("GameTimeScale", "../Utils/GameTimeScale", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      CCString = _cc.CCString;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      GameTimeScale = _unresolved_2.GameTimeScale;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6fcbdEpQG9Ohr71iy4VLQ52", "AnimationTimeScaleTuner", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'CCString', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AnimationTimeScaleTuner", AnimationTimeScaleTuner = (_dec = ccclass('AnimationTimeScaleTuner'), _dec2 = property(CCString), _dec(_class = (_class2 = class AnimationTimeScaleTuner extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "tuneAnimationName", _descriptor, this);

          this.animation = void 0;
        }

        tuneAnimationByTimeScale(gameTimeScale) {
          if (gameTimeScale === void 0) {
            gameTimeScale = (_crd && GameTimeScale === void 0 ? (_reportPossibleCrUseOfGameTimeScale({
              error: Error()
            }), GameTimeScale) : GameTimeScale).timeScale;
          }

          this.animation = this.getComponent(Animation);
          var speed = 1 / gameTimeScale;

          for (var clipName of this.tuneAnimationName) {
            if (this.animation && this.animation.clips) {
              this.animation.setSpeedByClipName(clipName, speed);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tuneAnimationName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=974390f50aee7dadeccbf73b6659e08731152b01.js.map