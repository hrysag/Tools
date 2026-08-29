System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ProgressBar, resources, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, loading_Test;

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
      ProgressBar = _cc.ProgressBar;
      resources = _cc.resources;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "31e10Q8GEJAVYK8ZYlFJrwT", "loading_Test", undefined);

      __checkObsolete__(['_decorator', 'Component', 'ProgressBar', 'resources']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("loading_Test", loading_Test = (_dec = ccclass('loading_Test'), _dec2 = property({
        type: ProgressBar
      }), _dec(_class = (_class2 = class loading_Test extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "loadingBar", _descriptor, this);
        }

        start() {
          resources.preloadDir("loadingPage", (err, assets) => {
            console.log(err, assets);
          });
          this.loadingBar = this.node.getChildByName("ProgressBar").getComponent(ProgressBar);
          this.loadingBar.progress = 1; //    this.loadingBar = this.getComponent(ProgressBar)
          //    if (this.loadingBar) {
          //    } else {
          //     console.log(123123, this.loadingBar)
          //    } 
          //    this.loadingBar.progress = 1
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loadingBar", [_dec2], {
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
//# sourceMappingURL=ee52e1158648328869e1bac991a8be15a49a5875.js.map