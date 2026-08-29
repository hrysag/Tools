System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sp, Debug, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, SpineTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      Debug = _unresolved_2.Debug;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "359c666rEdCgaYZgKsXpVjm", "SpineTest", undefined);

      __checkObsolete__(['_decorator', 'Component', 'log', 'Node', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpineTest", SpineTest = (_dec = ccclass('SpineTest'), _dec2 = property(sp.Skeleton), _dec(_class = (_class2 = class SpineTest extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "spineNode", _descriptor, this);
        }

        start() {// this.spineNode.setCompleteListener((x: sp.spine.TrackEntry) => {
          //     Debug.Log(x.animation.name);
          //     Debug.Log('setCompleteListener end');
          // });
          // this.spineNode.setTrackCompleteListener(tr, () => {
          //     Debug.Log("completed")
          // })
        }

        update(deltaTime) {}

        Banner() {
          //this.spineNode.setAnimation(0, "Banner", false);
          this.spineNode.clearTrack(0);
          var tr = this.spineNode.setAnimation(1, "Banner", false);
          console.log(tr.trackIndex);
          this.spineNode.setTrackCompleteListener(tr, () => {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).Log("completed");
          });
          tr = this.spineNode.addAnimation(1, "Icon", false);
          this.spineNode.setTrackCompleteListener(tr, () => {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).Log("completed2");
          });
        }

        Icon() {// this.spineNode.setAnimation(0, "Icon", false);
          //this.spineNode.setAnimation(0, "walk", false);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spineNode", [_dec2], {
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
//# sourceMappingURL=ee0a74517b54337f721b446ce1c440b891ca0c45.js.map