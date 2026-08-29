import { _decorator, CCFloat, Color, Component, Graphics, Material, RenderTexture, Sprite, SpriteFrame, Vec2, Node, Texture2D, Camera, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpriteBlurHandler')
export class SpriteBlurHandler extends Component {
    @property(Sprite)
    sprite !: Sprite;

    //blur direction
    /*
    @property({ tooltip: "blur direction" })
    _dir: Vec2 = new Vec2(1, 0);

    @property({ tooltip: "blur direction" })
    get dir(): Vec2 { return this._dir; }
    set dir(value: Vec2) {
        this._dir = value;
        if (this.material) {
            this.material.setProperty('dir', this._dir);
        }
    }
        */

    //resolution
    @property({ tooltip: "resolution" })
    _resolution: Vec2 = new Vec2(100, 100);

    @property({ tooltip: "resolution" })
    get resolution(): Vec2 { return this._resolution; }
    set resolution(value: Vec2) {
        this._resolution = value;
        if (this.material) {
            this.material.setProperty('resolution', this._resolution);
        }
    }

    //resolution
    @property({ tooltip: "sigma" })
    _sigma: number = 1.5;

    @property({ tooltip: "sigma" })
    get sigma(): number { return this._sigma; }
    set sigma(value: number) {
        this._sigma = value;
        if (this.material) {
            this.material.setProperty('sigma', this._sigma);
        }
    }

    private material: Material = null!;

    start() {
        this.material = this.sprite.getSharedMaterial(0);
        this._resolution = new Vec2(this.sprite.spriteFrame.width, this.sprite.spriteFrame.height);
        //initial value
        //this.dir = this._dir;
        this.resolution = this._resolution;
    }
}