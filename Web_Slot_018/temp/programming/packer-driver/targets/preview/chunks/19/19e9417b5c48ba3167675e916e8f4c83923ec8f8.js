System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCString, Component, sp, GameTimeScale, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, SpineTimeScaleTuner;

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
      CCString = _cc.CCString;
      Component = _cc.Component;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      GameTimeScale = _unresolved_2.GameTimeScale;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10cc2gDPptKhYj7WWxcsZLc", "SpineTimeScaleTuner", undefined);

      __checkObsolete__(['_decorator', 'CCString', 'Component', 'Node', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpineTimeScaleTuner", SpineTimeScaleTuner = (_dec = ccclass('SpineTimeScaleTuner'), _dec2 = property(CCString), _dec(_class = (_class2 = class SpineTimeScaleTuner extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "tuneAnimationName", _descriptor, this);

          this.spineSkeletons = void 0;
        }

        tuneAnimationByTimeScale(gameTimeScale) {
          if (gameTimeScale === void 0) {
            gameTimeScale = (_crd && GameTimeScale === void 0 ? (_reportPossibleCrUseOfGameTimeScale({
              error: Error()
            }), GameTimeScale) : GameTimeScale).timeScale;
          }

          this.spineSkeletons = this.getComponent(sp.Skeleton);

          if (this.spineSkeletons) {
            var _this$spineSkeletons$;

            var tracks = (_this$spineSkeletons$ = this.spineSkeletons.getState()) == null ? void 0 : _this$spineSkeletons$.tracks;

            if (tracks) {
              for (var trackItem of tracks) {
                if (trackItem && trackItem.animation && this.tuneAnimationName.includes(trackItem.animation.name)) {
                  trackItem.timeScale = 1 / gameTimeScale;
                }
              }
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
//# sourceMappingURL=19e9417b5c48ba3167675e916e8f4c83923ec8f8.js.map