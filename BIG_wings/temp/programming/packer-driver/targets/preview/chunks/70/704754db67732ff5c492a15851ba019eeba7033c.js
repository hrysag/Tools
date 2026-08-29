System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, creat;

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

      _cclegacy._RF.push({}, "77cfcBCo+NDKqCMcS6RF2I1", "creat", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Animation', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("creat", creat = (_dec = ccclass('creat'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = class creat extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "coins", _descriptor, this);
        }

        start() {
          this.show(); // this.scheduleOnce(() => {
          //     this.coins.getComponent(coinDropAnim).readyHide();
          // }, 3)
          // this.loopRun();
          // for (let i = 0; i < 2; i++) {
          //     const instcoin = instantiate(this.coins);
          //     instcoin.parent = this.node;
          // }
        }

        show() {
          this.scheduleOnce(() => {
            this.coins.active = true;
            this.scheduleOnce(() => {
              this.coins.active = false;
              this.show();
            }, 3.2);
          }, 1);
        } // private loopRun() {
        //     tween(this.node).to(1, { position: new Vec3(10, 10, 0) }).call(() => {
        //         console.log("結束動態2");
        //         this.loopRun();
        //     }).tag(123).start();//執行動態
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coins", [_dec2], {
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
//# sourceMappingURL=704754db67732ff5c492a15851ba019eeba7033c.js.map