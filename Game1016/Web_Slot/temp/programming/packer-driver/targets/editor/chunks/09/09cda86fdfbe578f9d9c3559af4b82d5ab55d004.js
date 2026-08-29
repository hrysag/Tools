System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UITransform, Vec2, AdaptWindowSize, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, WidgetRefHelper;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAdaptWindowSize(extras) {
    _reporterNs.report("AdaptWindowSize", "db://assets/Scripts/Utils/Adaptive", _context.meta, extras);
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
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      AdaptWindowSize = _unresolved_2.AdaptWindowSize;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5bb4d0CWz1Iqqj7EV89B1PD", "WidgetRefHelper", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Size', 'UITransform', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WidgetRefHelper", WidgetRefHelper = (_dec = ccclass('WidgetRefHelper'), _dec2 = property(_crd && AdaptWindowSize === void 0 ? (_reportPossibleCrUseOfAdaptWindowSize({
        error: Error()
      }), AdaptWindowSize) : AdaptWindowSize), _dec3 = property(Vec2), _dec4 = property(Vec2), _dec(_class = (_class2 = class WidgetRefHelper extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "WindowAdapter", _descriptor, this);

          _initializerDefineProperty(this, "minSize", _descriptor2, this);

          _initializerDefineProperty(this, "maxSize", _descriptor3, this);
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
          let targetSize = new Vec2(0, 0);

          if (newSize.width < this.minSize.x) {
            targetSize.x = this.minSize.x;
          } else if (newSize.width > this.maxSize.x) {
            targetSize.x = this.maxSize.x;
          } else {
            targetSize.x = newSize.width;
          }

          if (newSize.height < this.minSize.y) {
            targetSize.y = this.minSize.y;
          } else if (newSize.height > this.maxSize.y) {
            targetSize.y = this.maxSize.y;
          } else {
            targetSize.y = newSize.height;
          }

          this.node.getComponent(UITransform).setContentSize(targetSize.x, targetSize.y);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "WindowAdapter", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "minSize", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec2(0, 0);
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maxSize", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec2(0, 0);
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=09cda86fdfbe578f9d9c3559af4b82d5ab55d004.js.map