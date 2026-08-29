import { _decorator, CCFloat, Color, Component, debug, Material, Node, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpriteDissolveHandler')
export class SpriteDissolveHandler extends Component {
    @property(Sprite)
    sprite !: Sprite;

    @property({ type: SpriteFrame, tooltip: "dissolve texture" })
    public dissolveTexture: SpriteFrame;

    @property({ tooltip: "edgeColour1 color" })
    _edgeColour1: Color = new Color(255, 255, 255, 255);

    @property({ tooltip: "edgeColour1 color" })
    get edgeColour1(): Color { return this._edgeColour1; }
    set edgeColour1(value: Color) {
        this._edgeColour1 = value;
        if (this.material) {
            this.material.setProperty('edgeColour1', this._edgeColour1);
        }
    }

    @property({ tooltip: "edgeColour2 color" })
    private _edgeColour2: Color = new Color(255, 255, 255, 255);

    @property({ tooltip: "edgeColour2 color" })
    get edgeColour2(): Color { return this._edgeColour2; }
    set edgeColour2(value: Color) {
        this._edgeColour2 = value;
        if (this.material) {
            this.material.setProperty('edgeColour2', this._edgeColour2);
        }
    }

    @property({ type: CCFloat, tooltip: "dissolve level" })
    private _level: number = 0;

    @property({ type: CCFloat, tooltip: "dissolve level" })
    get level() { return this._level; }
    set level(value: number) {
        this._level = value;
        if (this.material) {
            this.material.setProperty('level', this._level);
        }
    }

    @property({ type: CCFloat, tooltip: "edge width" })
    private _edgeWidth: number = 0;

    @property({ type: CCFloat, tooltip: "edge width" })
    get edgeWidth() { return this._edgeWidth; }
    set edgeWidth(value: number) {
        this._edgeWidth = value;
        if (this.material) {
            this.material.setProperty('edgeWidth', this._edgeWidth);
        }
    }


    @property({ type: CCFloat, tooltip: "fade width1" })
    private _fadeWidth1: number = 0;

    @property({ type: CCFloat, tooltip: "fade width1" })
    get fadeWidth1() { return this._fadeWidth1; }
    set fadeWidth1(value: number) {
        this._fadeWidth1 = value;
        if (this.material) {
            this.material.setProperty('fadeWidth1', this._fadeWidth1);
        }
    }

    @property({ type: CCFloat, tooltip: "fade width2" })
    private _fadeWidth2: number = 0;

    @property({ type: CCFloat, tooltip: "fade width2" })
    get fadeWidth2() { return this._fadeWidth2; }
    set fadeWidth2(value: number) {
        this._fadeWidth2 = value;
        if (this.material) {
            this.material.setProperty('fadeWidth2', this._fadeWidth2);
        }
    }

    private material: Material = null!;

    start() {
        this.sprite.material = this.sprite.getMaterialInstance(0);
        this.material = this.sprite.material;
        this.material.setProperty('noiseTexture', this.dissolveTexture.texture);

        //set property first
        this.edgeColour1 = this._edgeColour1;
        this.edgeColour2 = this._edgeColour2;
        this.level = this._level;
        this.edgeWidth = this._edgeWidth;
        this.fadeWidth1 = this._fadeWidth1;
        this.fadeWidth2 = this._fadeWidth2;

    }

    update(deltaTime: number) {

    }
}


