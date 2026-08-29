System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, gfx, RenderData, Sprite, sliceAdditive, _dec, _class, _crd, ccclass, property, vfmtPosTwoUvColor, SliceAdditiveSprite;

  function _reportPossibleCrUseOfsliceAdditive(extras) {
    _reporterNs.report("sliceAdditive", "./SliceAdditiveAssembler", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      gfx = _cc.gfx;
      RenderData = _cc.RenderData;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      sliceAdditive = _unresolved_2.sliceAdditive;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f677a4SNsdPLobF45pjtR8H", "SliceAdditiveSprite", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'Component', 'gfx', 'Node', 'RenderData', 'Sprite', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("vfmtPosTwoUvColor", vfmtPosTwoUvColor = [new gfx.Attribute(gfx.AttributeName.ATTR_POSITION, gfx.Format.RGB32F), new gfx.Attribute(gfx.AttributeName.ATTR_TEX_COORD, gfx.Format.RG32F), new gfx.Attribute(gfx.AttributeName.ATTR_COLOR, gfx.Format.RGBA32F), new gfx.Attribute(gfx.AttributeName.ATTR_TEX_COORD2, gfx.Format.RG32F)]);

      _export("SliceAdditiveSprite", SliceAdditiveSprite = (_dec = ccclass('SliceAdditiveSprite'), _dec(_class = class SliceAdditiveSprite extends Sprite {
        //這邊基本照抄
        _flushAssembler() {
          const self = this; //只有這段不一樣 官方是用 Sprite.Assembler.getAssembler(self) 來抓到當前圖片類型使用的渲染資料
          //直接改成自己定義的

          const assembler = this.type === Sprite.Type.SLICED && this.material !== null ? _crd && sliceAdditive === void 0 ? (_reportPossibleCrUseOfsliceAdditive({
            error: Error()
          }), sliceAdditive) : sliceAdditive : Sprite.Assembler.getAssembler(this);

          if (self._assembler !== assembler) {
            self.destroyRenderData();
            self._assembler = assembler;
          }

          if (!self._renderData) {
            if (assembler && assembler.createData) {
              const rd = self._renderData = assembler.createData(self);
              rd.material = self.getRenderMaterial(0);
              self.markForUpdateRenderData();

              if (self.spriteFrame) {
                assembler.updateUVs(self);
              }

              self._updateColor();
            }
          }
        }

        requestRenderData(drawInfoType = 0
        /* COMP 用數字替代 因為抓不到那個enum */
        ) {
          if (this.type !== Sprite.Type.SLICED || this.material === null) {
            return super.requestRenderData(drawInfoType);
          }

          const data = RenderData.add(vfmtPosTwoUvColor);
          data.initRenderDrawInfo(this, drawInfoType);
          this._renderData = data;
          return data;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=67d780c4a9eee24b3af4435b597b19b3b3eca975.js.map