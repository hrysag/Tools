import { _decorator, BitmapFont, CacheMode, CCBoolean, Color, gfx, IAssembler, Label, log, RenderData, Vec2 } from 'cc';
import { bmfAdditiveAssembler } from './BmfAdditiveAssembler';

const { ccclass, property } = _decorator;

export const vfmtPosTwoUvColor = [
    new gfx.Attribute(gfx.AttributeName.ATTR_POSITION, gfx.Format.RGB32F),
    new gfx.Attribute(gfx.AttributeName.ATTR_TEX_COORD, gfx.Format.RG32F),
    new gfx.Attribute(gfx.AttributeName.ATTR_COLOR, gfx.Format.RGBA32F),
    new gfx.Attribute(gfx.AttributeName.ATTR_TEX_COORD2, gfx.Format.RG32F),
];

@ccclass('BmfAdditiveLabel')
export class BmfAdditiveLabel extends Label {
    protected _flushAssembler(): void {
        const assembler = this.font instanceof BitmapFont && this._isAdditive ? bmfAdditiveAssembler : Label.Assembler.getAssembler(this);

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
                this._renderData = this._assembler.createData(this) as RenderData;
                this.renderData!.material = this.material;
                this._updateColor();
            }
        }
    }

    @property({ serializable: true, visible: false })
    private _isAdditive: boolean = false;

    @property({ type: CCBoolean, serializable: true, visible: true, displayName: "啟用加色(設定好再勾選)" })
    get isAdditive(): boolean {
        return this._isAdditive;
    }
    set isAdditive(value: boolean) {
        this._isAdditive = value;
        this._flushAssembler();
    }

    public override requestRenderData(drawInfoType = 0 /* COMP 用數字替代 因為抓不到那個enum */): RenderData {
        if (!this._isAdditive) {
            return super.requestRenderData(drawInfoType);
        }

        const data = RenderData.add(vfmtPosTwoUvColor);
        data.initRenderDrawInfo(this, drawInfoType);
        this._renderData = data;

        return data;
    }
}