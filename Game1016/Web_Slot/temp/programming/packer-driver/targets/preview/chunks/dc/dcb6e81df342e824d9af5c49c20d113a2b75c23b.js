System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, UITransform, AdaptWindowSize, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, AutoBGScalerWithMin;

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
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      AdaptWindowSize = _unresolved_2.AdaptWindowSize;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "62d6dvnk35OvrHoYY2qFJA9", "AutoBGScalerWithMin", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Size', 'UITransform', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AutoBGScalerWithMin", AutoBGScalerWithMin = (_dec = ccclass('AutoBGScalerWithMin'), _dec2 = property({
        type: _crd && AdaptWindowSize === void 0 ? (_reportPossibleCrUseOfAdaptWindowSize({
          error: Error()
        }), AdaptWindowSize) : AdaptWindowSize,
        visible: true
      }), _dec3 = property({
        type: Node,
        visible: true
      }), _dec4 = property({
        type: Node,
        visible: true
      }), _dec(_class = (_class2 = class AutoBGScalerWithMin extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "windowAdapter", _descriptor, this);

          _initializerDefineProperty(this, "landscapeNode", _descriptor2, this);

          _initializerDefineProperty(this, "portraitNode", _descriptor3, this);
        }

        start() {
          var _this$windowAdapter;

          (_this$windowAdapter = this.windowAdapter) == null || _this$windowAdapter.addResizeListener(this.onResize.bind(this));
        }

        onDestroy() {
          var _this$windowAdapter2;

          (_this$windowAdapter2 = this.windowAdapter) == null || _this$windowAdapter2.removeResizeListener(this.onResize.bind(this));
        }

        onResize(newSize) {
          var activeNode = this.landscapeNode;

          if (newSize.width > newSize.height) {
            var _this$landscapeNode, _this$portraitNode;

            (_this$landscapeNode = this.landscapeNode) == null || _this$landscapeNode.setActive(true);
            (_this$portraitNode = this.portraitNode) == null || _this$portraitNode.setActive(false);
          } else {
            if (this.portraitNode) {
              var _this$portraitNode2, _this$landscapeNode2;

              (_this$portraitNode2 = this.portraitNode) == null || _this$portraitNode2.setActive(true);
              (_this$landscapeNode2 = this.landscapeNode) == null || _this$landscapeNode2.setActive(false);
              activeNode = this.portraitNode;
            }
          }

          var currentUITransform = activeNode.getComponent(UITransform);
          var widthRatio = newSize.width / currentUITransform.width;
          var heightRatio = newSize.height / currentUITransform.height;
          var scale = Math.max(widthRatio, heightRatio);
          var targetScale = scale < 1 ? 1 : scale;
          activeNode.setScale(targetScale, targetScale);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "windowAdapter", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "landscapeNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "portraitNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dcb6e81df342e824d9af5c49c20d113a2b75c23b.js.map