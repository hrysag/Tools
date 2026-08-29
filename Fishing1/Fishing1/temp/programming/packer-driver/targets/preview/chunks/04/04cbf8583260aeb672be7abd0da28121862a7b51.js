System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, executeInEditMode, shadowFollow_TA;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8945ARPPdAN4eEyFqTak/W", "shadowFollow_TA", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator);

      _export("shadowFollow_TA", shadowFollow_TA = (_dec = ccclass('shadowFollow_TA'), _dec2 = property({
        type: Node
      }), _dec(_class = executeInEditMode(_class = (_class2 = class shadowFollow_TA extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "shadow", _descriptor, this);
        }

        update() {
          this.shadow.scale = this.node.scale; //同步比例

          this.shadow.children[0].scale = this.node.scale; //同步比例

          this.shadow.children[0].angle = this.node.angle; //魚影子物件跟隨魚正向旋轉

          if (this.node.scale.x * this.node.scale.y < 0) this.shadow.angle = this.node.angle; //影子物件跟隨魚正向旋轉
          else this.shadow.angle = -this.node.angle; //影子物件跟隨魚反向旋轉
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "shadow", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=04cbf8583260aeb672be7abd0da28121862a7b51.js.map