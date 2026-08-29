System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UITransform, AdaptWindowSize, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, PortraitBGWidthModify;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAdaptWindowSize(extras) {
    _reporterNs.report("AdaptWindowSize", "../../../Utils/Adaptive", _context.meta, extras);
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
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      AdaptWindowSize = _unresolved_2.AdaptWindowSize;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "22b23//BSRNF5KcmH6HHf3L", "PortraitBGWidthModify", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Size', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PortraitBGWidthModify", PortraitBGWidthModify = (_dec = ccclass('PortraitBGWidthModify'), _dec2 = property({
        type: _crd && AdaptWindowSize === void 0 ? (_reportPossibleCrUseOfAdaptWindowSize({
          error: Error()
        }), AdaptWindowSize) : AdaptWindowSize,
        visible: true
      }), _dec3 = property({
        type: UITransform,
        visible: true
      }), _dec4 = property({
        type: UITransform,
        visible: true
      }), _dec(_class = (_class2 = class PortraitBGWidthModify extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "WindowAdapter", _descriptor, this);

          _initializerDefineProperty(this, "LeftNode", _descriptor2, this);

          _initializerDefineProperty(this, "RightNode", _descriptor3, this);

          this._centerNodeWidth = 720;
        }

        start() {
          var _this$WindowAdapter;

          (_this$WindowAdapter = this.WindowAdapter) == null || _this$WindowAdapter.addResizeListener(this.onResize.bind(this));
        }

        onDestroy() {
          var _this$WindowAdapter2;

          (_this$WindowAdapter2 = this.WindowAdapter) == null || _this$WindowAdapter2.removeResizeListener(this.onResize.bind(this));
        }

        onResize(newSize) {
          const newWidth = (newSize.width - this._centerNodeWidth) / 2;
          this.LeftNode.width = newWidth;
          this.RightNode.width = newWidth;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "WindowAdapter", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "LeftNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "RightNode", [_dec4], {
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
//# sourceMappingURL=6a667bcb938da03b434119e7199d398c65eeda2c.js.map