System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, math, UITransform, Orientation, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, RotationContentResize;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "./Config", _context.meta, extras);
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
      math = _cc.math;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      Orientation = _unresolved_2.Orientation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a42aet5mVRKNYBqmeXXaF8r", "RotationContentResize", undefined);

      __checkObsolete__(['_decorator', 'Component', 'math', 'Node', 'Rect', 'UITransform', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RotationContentResize", RotationContentResize = (_dec = ccclass('RotationContentResize'), _dec2 = property(math.Size), _dec3 = property(math.Size), _dec(_class = (_class2 = class RotationContentResize extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "landscapeContent", _descriptor, this);

          _initializerDefineProperty(this, "portraitContent", _descriptor2, this);
        }

        onRotationResize(orientation) {
          if (orientation == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            this.getComponent(UITransform).setContentSize(this.landscapeContent.width, this.landscapeContent.height);
          } else {
            this.getComponent(UITransform).setContentSize(this.portraitContent.width, this.portraitContent.height);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "landscapeContent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new math.Size(0, 0);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "portraitContent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new math.Size(0, 0);
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3c94c7da365e0adb8f658e6ea28699cba4d6836f.js.map