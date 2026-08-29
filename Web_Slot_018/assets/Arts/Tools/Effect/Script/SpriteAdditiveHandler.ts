import { _decorator, CCFloat, Color, Component, Material, Sprite, SpriteFrame, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpriteAttiveHandler')
export class SpriteAttiveHandler extends Component {
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

    //additive texture
    @property({ type: SpriteFrame, tooltip: "additive texture" })
    public add_texture: SpriteFrame;

    //additive texture offset
    @property({ tooltip: "additive texture offset" })
    _add_offset: Vec2 = new Vec2(0, 0);

    @property({ tooltip: "additive texture offset" })
    get add_offset(): Vec2 { return this._add_offset; }
    set add_offset(value: Vec2) {
        this._add_offset = value;
        if (this.material) {
            this.material.setProperty('add_offset', this._add_offset);
        }
    }

    //additive texture color
    @property({ tooltip: "additive texture color" })
    _add_color: Color = new Color(255, 255, 255, 255);

    @property({ tooltip: "additive texture color" })
    get add_color(): Color { return this._add_color; }
    set add_color(value: Color) {
        this._add_color = value;
        if (this.material) {
            this.material.setProperty('add_color', this.add_color);
        }
    }

    //獨立alpha channel，但共用_add_color
    @property({ type: CCFloat, tooltip: "additive texture alpha" })
    get add_alpha() { return this._add_color.a; }
    set add_alpha(value: number) {
        this._add_color.a = value;
        if (this.material) {
            this.material.setProperty('add_color', this.add_color);
        }
    }

    //additive texture offset
    @property({ tooltip: "additive texture scale" })
    _add_scale: Vec2 = new Vec2(1, 1);

    @property({ tooltip: "additive texture scale" })
    get add_scale(): Vec2 { return this._add_scale; }
    set add_scale(value: Vec2) {
        this._add_scale = value;
        if (this.material) {
            this.material.setProperty('add_scale', this._add_scale);
        }
    }

    //additive texture rotate
    @property({ tooltip: "additive texture rotate" })
    _add_rotate: number = 0;

    @property({ tooltip: "additive texture rotate" })
    get add_rotate(): number { return this._add_rotate; }
    set add_rotate(value: number) {
        this._add_rotate = value;
        if (this.material) {
            this.material.setProperty('add_rotate', this._add_rotate);
        }
    }

    private material: Material = null!;

    start() {
        this.sprite.material = this.sprite.getMaterialInstance(0);
        this.material = this.sprite.material;
        this.material.setProperty('add_texture', this.add_texture.texture);

        //initial value
        this.main_offset = this._main_offset;
        this.add_offset = this._add_offset;
        this.add_color = this._add_color;
        this.add_scale = this._add_scale;
        this.add_rotate = this._add_rotate;
    }

    update(deltaTime: number) {
    }
}

