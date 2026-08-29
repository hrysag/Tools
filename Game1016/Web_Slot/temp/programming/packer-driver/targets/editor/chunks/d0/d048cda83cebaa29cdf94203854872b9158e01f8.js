System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UITransform, Widget, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, PortraitBGModifier;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      UITransform = _cc.UITransform;
      Widget = _cc.Widget;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae6d7EKbzZKXZcOhT0j03U4", "PortraitBGModifier", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'UITransform', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PortraitBGModifier", PortraitBGModifier = (_dec = ccclass('PortraitBGModifier'), _dec2 = property(Widget), _dec3 = property(Widget), _dec(_class = (_class2 = class PortraitBGModifier extends Widget {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "leftTarget", _descriptor, this);

          _initializerDefineProperty(this, "rightTarget", _descriptor2, this);
        }

        updateAlignment() {
          super.updateAlignment();
          const parentUITransform = this.node.parent.getComponent(UITransform);
          const currentUITransform = this.node.getComponent(UITransform);

          if (this.leftTarget) {
            this.leftTarget.right = (parentUITransform.width + currentUITransform.width) / 2;
            this.leftTarget.updateAlignment();
          }

          if (this.rightTarget) {
            this.rightTarget.left = (parentUITransform.width + currentUITransform.width) / 2;
            this.rightTarget.updateAlignment();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "leftTarget", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rightTarget", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d048cda83cebaa29cdf94203854872b9158e01f8.js.map