System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Color, Component, Sprite, SpriteFrame, UITransform, Vec2, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, SpriteAttiveHandler;

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
      Color = _cc.Color;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "81bd1h9U/NDB5HSJoV3t1aD", "SpriteAdditiveHandler", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Color', 'Component', 'debug', 'Material', 'Sprite', 'SpriteFrame', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpriteAttiveHandler", SpriteAttiveHandler = (_dec = ccclass('SpriteAttiveHandler'), _dec2 = property(Sprite), _dec3 = property({
        tooltip: "main texture offset"
      }), _dec4 = property({
        tooltip: "main texture offset"
      }), _dec5 = property({
        type: SpriteFrame,
        tooltip: "additive texture"
      }), _dec6 = property({
        tooltip: "additive texture offset"
      }), _dec7 = property({
        tooltip: "additive texture offset"
      }), _dec8 = property({
        tooltip: "additive texture color"
      }), _dec9 = property({
        tooltip: "additive texture color"
      }), _dec10 = property({
        type: CCFloat,
        tooltip: "additive texture alpha"
      }), _dec11 = property({
        tooltip: "additive texture scale"
      }), _dec12 = property({
        tooltip: "additive texture scale"
      }), _dec13 = property({
        tooltip: "additive texture fix size, don't scale with UITransform"
      }), _dec14 = property({
        tooltip: "additive texture fix size, don't scale with UITransform"
      }), _dec15 = property({
        tooltip: "additive texture rotate"
      }), _dec16 = property({
        tooltip: "additive texture rotate"
      }), _dec(_class = (_class2 = class SpriteAttiveHandler extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "sprite", _descriptor, this);

          /**
           * 目標Sprite的UITransform
           */
          this.spriteUITrans = null;

          /**
           * 目標Sprite的UITransform size
           */
          this.spriteUITransSize = null;

          _initializerDefineProperty(this, "_main_offset", _descriptor2, this);

          _initializerDefineProperty(this, "add_texture", _descriptor3, this);

          _initializerDefineProperty(this, "_add_offset", _descriptor4, this);

          _initializerDefineProperty(this, "_add_color", _descriptor5, this);

          _initializerDefineProperty(this, "_add_scale", _descriptor6, this);

          /**
           * 刷光貼圖維持初始比例的scale，使刷光貼圖不會隨UITransform變化而改變比例
           */
          this._fixSize_scale = new Vec2(1, 1);

          _initializerDefineProperty(this, "_fixSize", _descriptor7, this);

          /**
           * 設定給Material的刷光貼圖最終Scale值 = 刷光貼圖維持初始比例的scale * 刷光貼圖的scale
           */
          this._add_scale_prop = new Vec2(1, 1);

          _initializerDefineProperty(this, "_add_rotate", _descriptor8, this);

          /**
           * 目標Sprite的Material
           */
          this.material = null;
        }

        get main_offset() {
          return this._main_offset;
        }
        /**
         * 主要貼圖的位移量的setter
         */


        set main_offset(value) {
          this._main_offset = value;

          if (this.material) {
            this.material.setProperty('main_offset', this._main_offset);
          }
        }

        get add_offset() {
          return this._add_offset;
        }
        /**
         * 刷光貼圖的位移量的setter
         */


        set add_offset(value) {
          this._add_offset = value;

          if (this.material) {
            this.material.setProperty('add_offset', this._add_offset);
          }
        }

        get add_color() {
          return this._add_color;
        }
        /**
         * 刷光貼圖的Color setter
         */


        set add_color(value) {
          this._add_color = value;

          if (this.material) {
            this.material.setProperty('add_color', this.add_color);
          }
        }

        get add_alpha() {
          return this._add_color.a;
        }
        /**
         * 刷光貼圖的alpha channel setter
         */


        set add_alpha(value) {
          this._add_color.a = value;

          if (this.material) {
            this.material.setProperty('add_color', this.add_color);
          }
        }

        get add_scale() {
          return this._add_scale;
        }
        /**
         * 刷光貼圖的scale setter
         */


        set add_scale(value) {
          this._add_scale = value;

          if (this.material) {
            this.setAddScaleProp();
          }
        }

        /**
         * 刷光貼圖維持初始比例的scale getter
         */
        get fixSize_scale() {
          return this._fixSize_scale;
        }
        /**
         * 刷光貼圖維持初始比例的scale setter
         */


        set fixSize_scale(value) {
          this._fixSize_scale = value;

          if (this.material) {
            this.setAddScaleProp();
          }
        }

        get fixSize() {
          return this._fixSize;
        }
        /**
         * 是否刷光貼圖維持初始比例 setter
         */


        set fixSize(value) {
          this._fixSize = value;

          if (!this._fixSize) {
            this.fixSize_scale = new Vec2(1, 1);
          }

          this.onSpriteUITransSizeChange();
        }

        /**
         * 設定Material的刷光貼圖最終scale值
         */
        setAddScaleProp() {
          this._add_scale_prop.set(this.fixSize_scale);

          this._add_scale_prop.multiply(this.add_scale);

          this.material.setProperty('add_scale', this._add_scale_prop);
        }

        get add_rotate() {
          return this._add_rotate;
        }
        /**
         * 刷光貼圖的旋轉值 setter
         */


        set add_rotate(value) {
          this._add_rotate = value;

          if (this.material) {
            this.material.setProperty('add_rotate', this._add_rotate);
          }
        }

        start() {
          if (this.sprite) {
            this.sprite.material = this.sprite.getMaterialInstance(0);
            this.material = this.sprite.material;
            this.material.setProperty('add_texture', this.add_texture.texture); //get uiTransform of sprite for size

            this.spriteUITrans = this.sprite.node.getComponent(UITransform);
            this.spriteUITransSize = new Vec2(this.spriteUITrans.width, this.spriteUITrans.height);
            this.onSpriteUITransSizeChange(); //initial value

            this.main_offset = this._main_offset;
            this.add_offset = this._add_offset;
            this.add_color = this._add_color;
            this.add_scale = this._add_scale;
            this.add_rotate = this._add_rotate;
          }
        }
        /**
         * 檢查Sprite的UITransform是否變化
         */


        checkSpriteUITransSizeChange() {
          if (this.spriteUITransSize) {
            return !this.spriteUITransSize.equals(new Vec2(this.spriteUITrans.width, this.spriteUITrans.height), 0.0001);
          }

          return false;
        }
        /**
         * 當Sprite的UITransform變化時，更新刷光貼圖維持初始比例的scale
         */


        onSpriteUITransSizeChange() {
          this.spriteUITransSize.set(this.spriteUITrans.width, this.spriteUITrans.height);

          if (this.fixSize && this.sprite) {
            this.fixSize_scale = new Vec2(this.add_texture.rect.width, this.add_texture.rect.height).divide(this.spriteUITransSize);
            console.log(this.fixSize_scale);
          }
        }

        update(deltaTime) {
          if (this.checkSpriteUITransSizeChange()) {
            this.onSpriteUITransSizeChange();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_main_offset", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(0, 0);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "main_offset", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "main_offset"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "add_texture", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_add_offset", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(0, 0);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "add_offset", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "add_offset"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_add_color", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255, 255);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "add_color", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "add_color"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "add_alpha", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "add_alpha"), _class2.prototype), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_add_scale", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(1, 1);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "add_scale", [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "add_scale"), _class2.prototype), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_fixSize", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "fixSize", [_dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "fixSize"), _class2.prototype), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_add_rotate", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "add_rotate", [_dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "add_rotate"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f6eef2de842832e8d46dd5668168b7824f193462.js.map