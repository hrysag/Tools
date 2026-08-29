System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, WaninAnimation, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, WaninPlayerTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfWaninAnimation(extras) {
    _reporterNs.report("WaninAnimation", "../WaninAnimation", _context.meta, extras);
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
    }, function (_unresolved_2) {
      WaninAnimation = _unresolved_2.WaninAnimation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "659f8ZYzdZC4q7PsblSOsRI", "WaninPlayerTest", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WaninPlayerTest", WaninPlayerTest = (_dec = ccclass('WaninPlayerTest'), _dec2 = property(_crd && WaninAnimation === void 0 ? (_reportPossibleCrUseOfWaninAnimation({
        error: Error()
      }), WaninAnimation) : WaninAnimation), _dec(_class = (_class2 = class WaninPlayerTest extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "waninAnimation", _descriptor, this);
        }

        start() {
          this.waninAnimation.init(() => {
            console.log("WaninAnimation init done");
          });
        }

        onBtnClick() {
          // this.waninAnimation.playOncePromise([0, 0])
          //     .then(() => {
          //         console.log("playOncePromise done")
          //     })
          this.waninAnimation.playOnce([0]);
        }

        onBtnClick2() {
          this.waninAnimation.closeDecoder();
        }

        onBtnClick3() {
          this.waninAnimation.init(() => {
            console.log("WaninAnimation init done");
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "waninAnimation", [_dec2], {
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
//# sourceMappingURL=4c4aa7ac0d8c609cc295c0fa1104447eb50fd690.js.map