import { _decorator, CCBoolean, Component, gfx, Node, RenderData, Sprite, UITransform } from 'cc';
import { sliceAdditive } from './SliceAdditiveAssembler';
const { ccclass, property } = _decorator;

export const vfmtPosTwoUvColor = [
    new gfx.Attribute(gfx.AttributeName.ATTR_POSITION, gfx.Format.RGB32F),
    new gfx.Attribute(gfx.AttributeName.ATTR_TEX_COORD, gfx.Format.RG32F),
    new gfx.Attribute(gfx.AttributeName.ATTR_COLOR, gfx.Format.RGBA32F),
    new gfx.Attribute(gfx.AttributeName.ATTR_TEX_COORD2, gfx.Format.RG32F),
];

@ccclass('SliceAdditiveSprite')
export class SliceAdditiveSprite extends Sprite {
    //這邊基本照抄
    protected _flushAssembler() {
        const self = this;
        //只有這段不一樣 官方是用 Sprite.Assembler.getAssembler(self) 來抓到當前圖片類型使用的渲染資料
        //直接改成自己定義的
        const assembler = this.type === Sprite.Type.SLICED && this.material !== null ? sliceAdditive : Sprite.Assembler.getAssembler(this);

        if (self._assembler !== assembler) {
            self.destroyRenderData();
            self._assembler = assembler;
        }

        if (!self._renderData) {
            if (assembler && assembler.createData) {
                const rd = self._renderData = assembler.createData(self) as RenderData;
                rd.material = self.getRenderMaterial(0);
                self.markForUpdateRenderData();
                if (self.spriteFrame) {
                    assembler.updateUVs!(self);
                }
                self._updateColor();
            }
        }
    }

    public override requestRenderData(drawInfoType = 0 /* COMP 用數字替代 因為抓不到那個enum */): RenderData {
        if (this.type !== Sprite.Type.SLICED || this.material === null) {
            return super.requestRenderData(drawInfoType);
        }

        const data = RenderData.add(vfmtPosTwoUvColor);
        data.initRenderDrawInfo(this, drawInfoType);
        this._renderData = data;

        return data;
    }
}