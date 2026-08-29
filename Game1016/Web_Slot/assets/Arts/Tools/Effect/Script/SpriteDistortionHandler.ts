import { _decorator, CCFloat, Color, Component, Material, Sprite, SpriteFrame, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpriteDistortionHandler')
export class SpriteDistortionHandler extends Component {
    @property(Sprite)
    sprite !: Sprite;

    //main texture offset
    @property({ tooltip: "main texture offset" })
    _main_offset: Vec2 = new Vec2(0, 0);

    @property({ tooltip: "main texture offset" })
    get main_offset(): Vec2 { return this._main_offset; }
    set main_offset(value: Vec2) {
        this._main_offset = value;
        if (this.material) {
            this.material.setProperty('main_offset', this._main_offset);
        }
    }

    //distortion texture
    @property({ type: SpriteFrame, tooltip: "noise texture, RG channel為偏移量, Alpha channel為偏移強度" })
    public distort_texture: SpriteFrame;

    //distortion texture offset
    @property({ tooltip: "noise texture offset" })
    _distort_offset: Vec2 = new Vec2(0, 0);

    @property({ tooltip: "noise texture offset" })
    get distort_offset(): Vec2 { return this._distort_offset; }
    set distort_offset(value: Vec2) {
        this._distort_offset = value;
        if (this.material) {
            this.material.setProperty('distort_offset', this._distort_offset);
        }
    }

    @property({ type: CCFloat, tooltip: "noise intensity" })
    private _distort_intensity: number = 0;

    @property({ type: CCFloat, tooltip: "noise intensity" })
    get distort_intensity() { return this._distort_intensity; }
    set distort_intensity(value: number) {
        this._distort_intensity = value;
        if (this.material && typeof value === 'number') {
            this.material.setProperty('distort_intensity', this._distort_intensity);
        }
    }

    private material: Material = null!;

    start() {
        this.sprite.material = this.sprite.getMaterialInstance(0);
        this.material = this.sprite.material;
        this.material.setProperty('distort_texture', this.distort_texture.texture);

        //initial value
        this.main_offset = this._main_offset;
        this.distort_offset = this._distort_offset;
        this.distort_intensity = this._distort_intensity;
    }

    update(deltaTime: number) {
    }
}