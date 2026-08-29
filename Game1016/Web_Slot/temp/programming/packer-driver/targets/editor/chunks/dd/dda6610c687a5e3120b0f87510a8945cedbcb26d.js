System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, Sprite, SpriteFrame, Vec2, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, SpriteDistortionHandler;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8b526ov/cRDVb/b5l44TDvd", "SpriteDistortionHandler", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Color', 'Component', 'Material', 'Sprite', 'SpriteFrame', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpriteDistortionHandler", SpriteDistortionHandler = (_dec = ccclass('SpriteDistortionHandler'), _dec2 = property(Sprite), _dec3 = property({
        tooltip: "main texture offset"
      }), _dec4 = property({
        tooltip: "main texture offset"
      }), _dec5 = property({
        type: SpriteFrame,
        tooltip: "noise texture, RG channel為偏移量, Alpha channel為偏移強度"
      }), _dec6 = property({
        tooltip: "noise texture offset"
      }), _dec7 = property({
        tooltip: "noise texture offset"
      }), _dec8 = property({
        type: CCFloat,
        tooltip: "noise intensity"
      }), _dec9 = property({
        type: CCFloat,
        tooltip: "noise intensity"
      }), _dec(_class = (_class2 = class SpriteDistortionHandler extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "sprite", _descriptor, this);

          //main texture offset
          _initializerDefineProperty(this, "_main_offset", _descriptor2, this);

          //distortion texture
          _initializerDefineProperty(this, "distort_texture", _descriptor3, this);

          //distortion texture offset
          _initializerDefineProperty(this, "_distort_offset", _descriptor4, this);

          _initializerDefineProperty(this, "_distort_intensity", _descriptor5, this);

          this.material = null;
        }

        get main_offset() {
          return this._main_offset;
        }

        set main_offset(value) {
          this._main_offset = value;

          if (this.material) {
            this.material.setProperty('main_offset', this._main_offset);
          }
        }

        get distort_offset() {
          return this._distort_offset;
        }

        set distort_offset(value) {
          this._distort_offset = value;

          if (this.material) {
            this.material.setProperty('distort_offset', this._distort_offset);
          }
        }

        get distort_intensity() {
          return this._distort_intensity;
        }

        set distort_intensity(value) {
          this._distort_intensity = value;

          if (this.material && typeof value === 'number') {
            this.material.setProperty('distort_intensity', this._distort_intensity);
          }
        }

        start() {
          this.sprite.material = this.sprite.getMaterialInstance(0);
          this.material = this.sprite.material;
          this.material.setProperty('distort_texture', this.distort_texture.texture); //initial value

          this.main_offset = this._main_offset;
          this.distort_offset = this._distort_offset;
          this.distort_intensity = this._distort_intensity;
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_main_offset", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec2(0, 0);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "main_offset", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "main_offset"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "distort_texture", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_distort_offset", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec2(0, 0);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "distort_offset", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "distort_offset"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_distort_intensity", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "distort_intensity", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "distort_intensity"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dda6610c687a5e3120b0f87510a8945cedbcb26d.js.map