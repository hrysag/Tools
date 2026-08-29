System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Component, Node, Debug, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, AniMain;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../../Scripts/Utils/Debug", _context.meta, extras);
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
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Debug = _unresolved_2.Debug;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4f2cagMiVxMx4rgY6Qyruz1", "AniMain", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'animation', 'AnimationClip', 'Component', 'log', 'Node', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AniMain", AniMain = (_dec = ccclass('AniMain'), _dec2 = property(Node), _dec(_class = (_class2 = class AniMain extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "node1", _descriptor, this);
        }

        start() {
          (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Log(this.node1); //this.node1.getComponent(animation.AnimationController).setValue("PlayMove", true);

          this.node1.getComponent(Animation).on(Animation.EventType.FINISHED, this.onAnimationEvent, this);
          let ac = this.node1.getComponent(Animation).clips[0];
          (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Log("time");
          (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Log(ac.duration);
        }

        update(deltaTime) {}

        onButtonClick(str) {
          (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Log(str);
          this.node1.getComponent(Animation).play("move");
        }

        onAnimationEvent() {
          (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Log("onAnimationEvent END");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=91cd0b5aaaa47568393acb30f123676131ed99c7.js.map