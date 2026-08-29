System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec2, Size, screen, Material, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, windowSizeToEffect;

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
      Vec2 = _cc.Vec2;
      Size = _cc.Size;
      screen = _cc.screen;
      Material = _cc.Material;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "01f7bgoXrdNmJ+lvrofjDgr", "windowSizeToEffect", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec2', 'Size', 'screen', 'Material']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("windowSizeToEffect", windowSizeToEffect = (_dec = ccclass('windowSizeToEffect'), _dec2 = property({
        type: Material
      }), _dec(_class = (_class2 = class windowSizeToEffect extends Component {
        constructor(...args) {
          super(...args);
          this.size = new Size(1920, 1080);

          _initializerDefineProperty(this, "material", _descriptor, this);
        }

        //設置當前畫面尺寸給material的effect
        setSize() {
          let resolution = new Vec2(this.size.width, this.size.height);
          this.material.setProperty('u_resolution', resolution);
        }

        update() {
          if (this.size.width != screen.windowSize.width || this.size.height != screen.windowSize.height) {
            this.size = screen.windowSize;
            this.setSize(); //將當前畫面尺寸給material的effect
            // console.log("目前畫面尺寸",this.size)
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "material", [_dec2], {
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
//# sourceMappingURL=9cf2bb3d38107994b052f187829c32273a0c0201.js.map