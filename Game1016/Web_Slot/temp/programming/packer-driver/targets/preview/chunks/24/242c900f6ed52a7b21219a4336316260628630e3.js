System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, BitmapFont, CCBoolean, gfx, Label, RenderData, bmfAdditiveAssembler, _dec, _dec2, _dec3, _class, _class2, _descriptor, _crd, ccclass, property, vfmtPosTwoUvColor, BmfAdditiveLabel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfbmfAdditiveAssembler(extras) {
    _reporterNs.report("bmfAdditiveAssembler", "./BmfAdditiveAssembler", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      BitmapFont = _cc.BitmapFont;
      CCBoolean = _cc.CCBoolean;
      gfx = _cc.gfx;
      Label = _cc.Label;
      RenderData = _cc.RenderData;
    }, function (_unresolved_2) {
      bmfAdditiveAssembler = _unresolved_2.bmfAdditiveAssembler;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dc86epogdRBbLwo57CoD7Hy", "BmfAdditiveLabel", undefined);

      __checkObsolete__(['_decorator', 'BitmapFont', 'CacheMode', 'CCBoolean', 'Color', 'gfx', 'IAssembler', 'Label', 'log', 'RenderData', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("vfmtPosTwoUvColor", vfmtPosTwoUvColor = [new gfx.Attribute(gfx.AttributeName.ATTR_POSITION, gfx.Format.RGB32F), new gfx.Attribute(gfx.AttributeName.ATTR_TEX_COORD, gfx.Format.RG32F), new gfx.Attribute(gfx.AttributeName.ATTR_COLOR, gfx.Format.RGBA32F), new gfx.Attribute(gfx.AttributeName.ATTR_TEX_COORD2, gfx.Format.RG32F)]);

      _export("BmfAdditiveLabel", BmfAdditiveLabel = (_dec = ccclass('BmfAdditiveLabel'), _dec2 = property({
        serializable: true,
        visible: false
      }), _dec3 = property({
        type: CCBoolean,
        serializable: true,
        visible: true,
        displayName: "啟用加色(設定好再勾選)"
      }), _dec(_class = (_class2 = class BmfAdditiveLabel extends Label {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_isAdditive", _descriptor, this);
        }

        _flushAssembler() {
          var assembler = this.font instanceof BitmapFont && this._isAdditive ? _crd && bmfAdditiveAssembler === void 0 ? (_reportPossibleCrUseOfbmfAdditiveAssembler({
            error: Error()
          }), bmfAdditiveAssembler) : bmfAdditiveAssembler : Label.Assembler.getAssembler(this);

          if (this._assembler !== assembler) {
            this.destroyRenderData();
            this._assembler = assembler;

            this._textStyle.reset();

            this._textLayout.reset();

            this._textLayoutData.reset();

            this._textRenderData.reset();
          }

          if (!this.renderData) {
            if (this._assembler && this._assembler.createData) {
              this._renderData = this._assembler.createData(this);
              this.renderData.material = this.material;

              this._updateColor();
            }
          }
        }

        get isAdditive() {
          return this._isAdditive;
        }

        set isAdditive(value) {
          this._isAdditive = value;

          this._flushAssembler();
        }

        requestRenderData(drawInfoType
        /* COMP 用數字替代 因為抓不到那個enum */
        ) {
          if (drawInfoType === void 0) {
            drawInfoType = 0;
          }

          if (!this._isAdditive) {
            return super.requestRenderData(drawInfoType);
          }

          var data = RenderData.add(vfmtPosTwoUvColor);
          data.initRenderDrawInfo(this, drawInfoType);
          this._renderData = data;
          return data;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_isAdditive", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "isAdditive", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "isAdditive"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=242c900f6ed52a7b21219a4336316260628630e3.js.map