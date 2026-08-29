System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, sp, UIOpacity, Node, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, prefabInit_TA;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      sp = _cc.sp;
      UIOpacity = _cc.UIOpacity;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e3ecc1CyU5Onpu7B93IQT9p", "prefabInit_TA", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'sp', 'UIOpacity', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("prefabInit_TA", prefabInit_TA = (_dec = ccclass('prefabInit_TA'), _dec2 = property({
        type: [Node],
        tooltip: "事先隱藏的物件"
      }), _dec3 = property({
        type: [sp.Skeleton],
        tooltip: "spine透明度初始化"
      }), _dec(_class = (_class2 = class prefabInit_TA extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nodeHide", _descriptor, this);

          _initializerDefineProperty(this, "spineColorHide", _descriptor2, this);
        }

        init() {
          this.node.getComponent(UIOpacity).opacity = 0;

          for (var i = 0; i < this.spineColorHide.length; i++) {
            this.spineColorHide[i].color = new Color(0, 0, 0, 0);
          }

          for (var _i = 0; _i < this.nodeHide.length; _i++) {
            this.nodeHide[_i].active = false;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeHide", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spineColorHide", [_dec3], {
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
//# sourceMappingURL=40151f12dffc1ff47362a7795e8f5d8f1895cbce.js.map