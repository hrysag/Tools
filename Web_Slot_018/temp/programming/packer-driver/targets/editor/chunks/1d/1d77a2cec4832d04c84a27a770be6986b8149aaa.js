System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, Vec2, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, SpriteBlurHandler;

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
      Sprite = _cc.Sprite;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c6ac8BnGoRADYA9WnsEyXhb", "SpriteBlurHandler", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Color', 'Component', 'Graphics', 'Material', 'RenderTexture', 'Sprite', 'SpriteFrame', 'Vec2', 'Node', 'Texture2D', 'Camera', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpriteBlurHandler", SpriteBlurHandler = (_dec = ccclass('SpriteBlurHandler'), _dec2 = property(Sprite), _dec3 = property({
        tooltip: "resolution"
      }), _dec4 = property({
        tooltip: "resolution"
      }), _dec5 = property({
        tooltip: "sigma"
      }), _dec6 = property({
        tooltip: "sigma"
      }), _dec(_class = (_class2 = class SpriteBlurHandler extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "sprite", _descriptor, this);

          //blur direction

          /*
          @property({ tooltip: "blur direction" })
          _dir: Vec2 = new Vec2(1, 0);
            @property({ tooltip: "blur direction" })
          get dir(): Vec2 { return this._dir; }
          set dir(value: Vec2) {
              this._dir = value;
              if (this.material) {
                  this.material.setProperty('dir', this._dir);
              }
          }
              */
          //resolution
          _initializerDefineProperty(this, "_resolution", _descriptor2, this);

          //resolution
          _initializerDefineProperty(this, "_sigma", _descriptor3, this);

          this.material = null;
        }

        get resolution() {
          return this._resolution;
        }

        set resolution(value) {
          this._resolution = value;

          if (this.material) {
            this.material.setProperty('resolution', this._resolution);
          }
        }

        get sigma() {
          return this._sigma;
        }

        set sigma(value) {
          this._sigma = value;

          if (this.material) {
            this.material.setProperty('sigma', this._sigma);
          }
        }

        start() {
          this.material = this.sprite.getSharedMaterial(0);
          this._resolution = new Vec2(this.sprite.spriteFrame.width, this.sprite.spriteFrame.height); //initial value
          //this.dir = this._dir;

          this.resolution = this._resolution;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_resolution", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec2(100, 100);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "resolution", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "resolution"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_sigma", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.5;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "sigma", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "sigma"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1d77a2cec4832d04c84a27a770be6986b8149aaa.js.map