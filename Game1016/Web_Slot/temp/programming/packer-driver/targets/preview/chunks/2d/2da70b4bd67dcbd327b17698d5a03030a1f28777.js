System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, UITransform, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, MemoryMonitor;

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
      Label = _cc.Label;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "93c03bmB7pNXqKhtC/ZRmiA", "MemoryMonitor", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MemoryMonitor", MemoryMonitor = (_dec = ccclass('MemoryMonitor'), _dec2 = property(Label), _dec3 = property(Node), _dec(_class = (_class2 = class MemoryMonitor extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "textField", _descriptor, this);

          _initializerDefineProperty(this, "bg", _descriptor2, this);
        }

        start() {}

        update(deltaTime) {
          this.updateInfo();
        }

        updateInfo() {
          if (performance.memory) {
            var memory = performance.memory;
            var info = "Heap Used: " + (memory.usedJSHeapSize / 1024 / 1024).toFixed(2) + " MB\n";
            info += "Heap Total: " + (memory.totalJSHeapSize / 1024 / 1024).toFixed(2) + " MB\n";
            info += "Heap Limit: " + (memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2) + " MB";
            this.textField.string = info;
            this.bg.getComponent(UITransform).height = this.textField.node.getComponent(UITransform).height + 20;
            this.bg.getComponent(UITransform).width = this.textField.node.getComponent(UITransform).width + 20;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "textField", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec3], {
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
//# sourceMappingURL=2da70b4bd67dcbd327b17698d5a03030a1f28777.js.map