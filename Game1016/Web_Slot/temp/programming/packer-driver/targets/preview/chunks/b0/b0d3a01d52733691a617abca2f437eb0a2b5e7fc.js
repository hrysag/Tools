System.register(["cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCBoolean, CCFloat, CCInteger, SpriteFrame, UIRenderer, Vec2, EDITOR_NOT_IN_PREVIEW, JSB, Point, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class4, _crd, ccclass, property, SlicedTrail;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  _export("Point", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCBoolean = _cc.CCBoolean;
      CCFloat = _cc.CCFloat;
      CCInteger = _cc.CCInteger;
      SpriteFrame = _cc.SpriteFrame;
      UIRenderer = _cc.UIRenderer;
      Vec2 = _cc.Vec2;
    }, function (_ccEnv) {
      EDITOR_NOT_IN_PREVIEW = _ccEnv.EDITOR_NOT_IN_PREVIEW;
      JSB = _ccEnv.JSB;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "abdfbcjdJ5ET6vBYYTX3Jsb", "SlicedTrail", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'CCFloat', 'CCInteger', 'Graphics', 'RenderData', 'SpriteFrame', 'UIRenderer', 'UITransform', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Point", Point = class Point {
        constructor(point, dir) {
          this.point = new Vec2();
          this.dir = new Vec2();
          this.distance = 0;
          this.time = 0;
          if (point) this.point.set(point);
          if (dir) this.dir.set(dir);
        }

        setPoint(x, y) {
          this.point.x = x;
          this.point.y = y;
        }

        setDir(x, y) {
          this.dir.x = x;
          this.dir.y = y;
        }

      });

      _export("SlicedTrail", SlicedTrail = (_dec = ccclass('SlicedTrail'), _dec2 = property(SpriteFrame), _dec3 = property({
        type: SpriteFrame,
        displayName: '贴图'
      }), _dec4 = property({
        displayName: '是否预览拖尾'
      }), _dec5 = property({
        type: CCBoolean,
        displayName: '拖尾收尖'
      }), _dec6 = property({
        type: CCFloat,
        displayName: '淡出時間'
      }), _dec7 = property({
        type: CCInteger,
        displayName: '寬度'
      }), _dec8 = property({
        displayName: '頭部長度'
      }), _dec9 = property({
        displayName: '是否使用UV'
      }), _dec10 = property({
        displayName: '是否播放'
      }), _dec(_class2 = (_class3 = (_class4 = class SlicedTrail extends UIRenderer {
        constructor() {
          super();

          /**
          * @en The texture of the MotionStreak.
          * @zh 拖尾的贴图。
          * @example
          * motionStreak.texture = newTexture;
          */
          _initializerDefineProperty(this, "_spriteFrame", _descriptor, this);

          /**
           * @en Preview the trailing effect in editor mode.
           * @zh 在编辑器模式下预览拖尾效果。
           */
          _initializerDefineProperty(this, "_preview", _descriptor2, this);

          _initializerDefineProperty(this, "_isTailTaper", _descriptor3, this);

          /**
           * @en The fade time to fade.
           * @zh 拖尾的渐隐时间，以秒为单位。
           * @example
           * motionStreak.fadeTime = 3;
           */
          _initializerDefineProperty(this, "_fadeTime", _descriptor4, this);

          /**
           * @en The stroke's width.
           * @zh 拖尾的宽度。
           * @example
           * motionStreak.stroke = 64;
           */
          _initializerDefineProperty(this, "_stroke", _descriptor5, this);

          _initializerDefineProperty(this, "_headWidth", _descriptor6, this);

          _initializerDefineProperty(this, "_isUseUV", _descriptor7, this);

          _initializerDefineProperty(this, "_isPlay", _descriptor8, this);

          this._points = [];
        }

        get spriteFrame() {
          return this._spriteFrame;
        }

        set spriteFrame(val) {
          if (this._spriteFrame === val) return;
          this._spriteFrame = val;
        }

        get preview() {
          return this._preview;
        }

        set preview(val) {
          this._preview = val;
          this.reset();
        }

        get isTailTaper() {
          return this._isTailTaper;
        }

        set isTailTaper(val) {
          this._isTailTaper = val;
        }

        get fadeTime() {
          return this._fadeTime;
        }

        set fadeTime(val) {
          this._fadeTime = val;
        }

        get stroke() {
          return this._stroke;
        }

        set stroke(val) {
          this._stroke = val;
        }

        get headWidth() {
          return this._headWidth;
        }

        set headWidth(val) {
          this._headWidth = Math.max(val, 2);
        }

        get isUseUV() {
          return this._isUseUV;
        }

        set isUseUV(val) {
          this._isUseUV = val;
          this.reset();
        }

        get isPlay() {
          return this._isPlay;
        }

        set isPlay(val) {
          this._isPlay = val;
          this.reset();
        }

        get points() {
          return this._points;
        }

        onEnable() {
          super.onEnable();
          this.reset();
        }

        onDisable() {
          super.onDisable();
          this.isPlay = false;
        }

        _flushAssembler() {
          var assembler = SlicedTrail.Assembler.getAssembler(this);

          if (this._assembler !== assembler) {
            this._assembler = assembler;
          }

          if (!this._renderData) {
            if (this._assembler && this._assembler.createData) {
              this._renderData = this._assembler.createData(this);
              this._renderData.material = this.material;

              if (JSB) {//this._renderData.renderDrawInfo.setVertexPositionInWorld(true);
              }

              this.markForUpdateRenderData();

              if (this.spriteFrame) {
                this._assembler.updateRenderData(this);

                this._assembler.updateColor(this);
              }
            }
          }
        }

        onFocusInEditor() {
          if (this._preview) {
            this.reset();
          }
        }

        onLostFocusInEditor() {
          if (this._preview) {
            this.reset();
          }
        }
        /**
         * @en Remove all living segments of the ribbon.
         * @zh 删除当前所有的拖尾片段。
         * @example
         * // Remove all living segments of the ribbon.
         * myMotionStreak.reset();
         */


        reset() {
          if (this._renderData) {
            this._renderData.clear();

            this._points.length = 0;
          }
        }

        lateUpdate(dt) {
          if (EDITOR_NOT_IN_PREVIEW && !this._preview) return;

          if (this._assembler && this._assembler.update) {
            this._assembler.update(this, dt);
          }
        }
        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */


        _render(render) {
          render.commitComp(this, this._renderData, this._spriteFrame, this._assembler, null);
        }

      }, _class4.Point = Point, _class4.trans = void 0, _class4), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "_spriteFrame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class3.prototype, "spriteFrame", [_dec3], Object.getOwnPropertyDescriptor(_class3.prototype, "spriteFrame"), _class3.prototype), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "_preview", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class3.prototype, "preview", [_dec4], Object.getOwnPropertyDescriptor(_class3.prototype, "preview"), _class3.prototype), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "_isTailTaper", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class3.prototype, "isTailTaper", [_dec5], Object.getOwnPropertyDescriptor(_class3.prototype, "isTailTaper"), _class3.prototype), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "_fadeTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class3.prototype, "fadeTime", [_dec6], Object.getOwnPropertyDescriptor(_class3.prototype, "fadeTime"), _class3.prototype), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "_stroke", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 64;
        }
      }), _applyDecoratedDescriptor(_class3.prototype, "stroke", [_dec7], Object.getOwnPropertyDescriptor(_class3.prototype, "stroke"), _class3.prototype), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, "_headWidth", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _applyDecoratedDescriptor(_class3.prototype, "headWidth", [_dec8], Object.getOwnPropertyDescriptor(_class3.prototype, "headWidth"), _class3.prototype), _descriptor7 = _applyDecoratedDescriptor(_class3.prototype, "_isUseUV", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class3.prototype, "isUseUV", [_dec9], Object.getOwnPropertyDescriptor(_class3.prototype, "isUseUV"), _class3.prototype), _descriptor8 = _applyDecoratedDescriptor(_class3.prototype, "_isPlay", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class3.prototype, "isPlay", [_dec10], Object.getOwnPropertyDescriptor(_class3.prototype, "isPlay"), _class3.prototype)), _class3)) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b0d3a01d52733691a617abca2f437eb0a2b5e7fc.js.map