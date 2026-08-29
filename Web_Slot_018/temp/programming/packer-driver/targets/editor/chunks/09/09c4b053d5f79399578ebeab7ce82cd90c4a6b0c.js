System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Color, Component, Sprite, SpriteFrame, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, SpriteDissolveHandler;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7a89a22kfxPyITqC0D6+H9t", "SpriteDissolveHandler", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Color', 'Component', 'debug', 'Material', 'Node', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpriteDissolveHandler", SpriteDissolveHandler = (_dec = ccclass('SpriteDissolveHandler'), _dec2 = property(Sprite), _dec3 = property({
        type: SpriteFrame,
        tooltip: "dissolve texture"
      }), _dec4 = property({
        tooltip: "edgeColour1 color"
      }), _dec5 = property({
        tooltip: "edgeColour1 color"
      }), _dec6 = property({
        tooltip: "edgeColour2 color"
      }), _dec7 = property({
        tooltip: "edgeColour2 color"
      }), _dec8 = property({
        type: CCFloat,
        tooltip: "dissolve level"
      }), _dec9 = property({
        type: CCFloat,
        tooltip: "dissolve level"
      }), _dec10 = property({
        type: CCFloat,
        tooltip: "edge width"
      }), _dec11 = property({
        type: CCFloat,
        tooltip: "edge width"
      }), _dec12 = property({
        type: CCFloat,
        tooltip: "fade width1"
      }), _dec13 = property({
        type: CCFloat,
        tooltip: "fade width1"
      }), _dec14 = property({
        type: CCFloat,
        tooltip: "fade width2"
      }), _dec15 = property({
        type: CCFloat,
        tooltip: "fade width2"
      }), _dec(_class = (_class2 = class SpriteDissolveHandler extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "sprite", _descriptor, this);

          _initializerDefineProperty(this, "dissolveTexture", _descriptor2, this);

          _initializerDefineProperty(this, "_edgeColour1", _descriptor3, this);

          _initializerDefineProperty(this, "_edgeColour2", _descriptor4, this);

          _initializerDefineProperty(this, "_level", _descriptor5, this);

          _initializerDefineProperty(this, "_edgeWidth", _descriptor6, this);

          _initializerDefineProperty(this, "_fadeWidth1", _descriptor7, this);

          _initializerDefineProperty(this, "_fadeWidth2", _descriptor8, this);

          this.material = null;
        }

        get edgeColour1() {
          return this._edgeColour1;
        }

        set edgeColour1(value) {
          this._edgeColour1 = value;

          if (this.material) {
            this.material.setProperty('edgeColour1', this._edgeColour1);
          }
        }

        get edgeColour2() {
          return this._edgeColour2;
        }

        set edgeColour2(value) {
          this._edgeColour2 = value;

          if (this.material) {
            this.material.setProperty('edgeColour2', this._edgeColour2);
          }
        }

        get level() {
          return this._level;
        }

        set level(value) {
          this._level = value;

          if (this.material) {
            this.material.setProperty('level', this._level);
          }
        }

        get edgeWidth() {
          return this._edgeWidth;
        }

        set edgeWidth(value) {
          this._edgeWidth = value;

          if (this.material) {
            this.material.setProperty('edgeWidth', this._edgeWidth);
          }
        }

        get fadeWidth1() {
          return this._fadeWidth1;
        }

        set fadeWidth1(value) {
          this._fadeWidth1 = value;

          if (this.material) {
            this.material.setProperty('fadeWidth1', this._fadeWidth1);
          }
        }

        get fadeWidth2() {
          return this._fadeWidth2;
        }

        set fadeWidth2(value) {
          this._fadeWidth2 = value;

          if (this.material) {
            this.material.setProperty('fadeWidth2', this._fadeWidth2);
          }
        }

        start() {
          this.sprite.material = this.sprite.getMaterialInstance(0);
          this.material = this.sprite.material;
          this.material.setProperty('noiseTexture', this.dissolveTexture.texture); //set property first

          this.edgeColour1 = this._edgeColour1;
          this.edgeColour2 = this._edgeColour2;
          this.level = this._level;
          this.edgeWidth = this._edgeWidth;
          this.fadeWidth1 = this._fadeWidth1;
          this.fadeWidth2 = this._fadeWidth2;
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dissolveTexture", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_edgeColour1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Color(255, 255, 255, 255);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "edgeColour1", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "edgeColour1"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_edgeColour2", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Color(255, 255, 255, 255);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "edgeColour2", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "edgeColour2"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_level", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2.prototype, "level", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "level"), _class2.prototype), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_edgeWidth", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2.prototype, "edgeWidth", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "edgeWidth"), _class2.prototype), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_fadeWidth1", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2.prototype, "fadeWidth1", [_dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "fadeWidth1"), _class2.prototype), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_fadeWidth2", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2.prototype, "fadeWidth2", [_dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "fadeWidth2"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=09c4b053d5f79399578ebeab7ce82cd90c4a6b0c.js.map