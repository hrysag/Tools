System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, UITransform, AdaptWindowSize, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, AutoBGScaler;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAdaptWindowSize(extras) {
    _reporterNs.report("AdaptWindowSize", "db://assets/Scripts/Utils/AdaptWindowSize", _context.meta, extras);
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

      _cclegacy._RF.push({}, "d0de6v/VBdGba718xWCq5q5", "AutoBGScaler", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Size', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AutoBGScaler", AutoBGScaler = (_dec = ccclass('AutoBGScaler'), _dec2 = property({
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
      }), _dec(_class = (_class2 = class AutoBGScaler extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "WindowAdapter", _descriptor, this);

          _initializerDefineProperty(this, "LandscapeNode", _descriptor2, this);

          _initializerDefineProperty(this, "PortraitNode", _descriptor3, this);
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
          var activeNode = this.LandscapeNode;

          if (newSize.width > newSize.height) {
            var _this$LandscapeNode, _this$PortraitNode;

            (_this$LandscapeNode = this.LandscapeNode) == null || _this$LandscapeNode.setActive(true);
            (_this$PortraitNode = this.PortraitNode) == null || _this$PortraitNode.setActive(false);
          } else {
            if (this.PortraitNode) {
              var _this$PortraitNode2, _this$LandscapeNode2;

              (_this$PortraitNode2 = this.PortraitNode) == null || _this$PortraitNode2.setActive(true);
              (_this$LandscapeNode2 = this.LandscapeNode) == null || _this$LandscapeNode2.setActive(false);
              activeNode = this.PortraitNode;
            }
          }

          var widthRatio = newSize.width / activeNode.getComponent(UITransform).width;
          var heightRatio = newSize.height / activeNode.getComponent(UITransform).height;
          var scale = Math.max(widthRatio, heightRatio);
          activeNode.setScale(scale, scale, 1);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "WindowAdapter", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "LandscapeNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "PortraitNode", [_dec4], {
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
//# sourceMappingURL=8cd724e192c1ca868f1c576124d6a7cff91ccedf.js.map