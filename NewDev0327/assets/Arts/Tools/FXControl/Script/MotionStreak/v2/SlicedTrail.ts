import { _decorator, CCBoolean, CCFloat, CCInteger, Enum, GradientRange, RenderData, SpriteFrame, UIRenderer, UITransform, Vec2 } from 'cc';
import { EDITOR_NOT_IN_PREVIEW, JSB } from 'cc/env';
const { ccclass, property } = _decorator;

export enum TrailEffect {
    None = 0,
    RandomOffset = 1,
    Mosaic = 2,
}
Enum(TrailEffect);

export class Point {
    public point: Vec2 = new Vec2();
    public dir: Vec2 = new Vec2();
    public distance: number = 0;
    public time: number = 0;

    constructor(point?: Vec2, dir?: Vec2) {
        if (point) this.point.set(point);
        if (dir) this.dir.set(dir);
    }

    public setPoint(x: number, y: number): void {
        this.point.x = x;
        this.point.y = y;
    }

    public setDir(x: number, y: number): void {
        this.dir.x = x;
        this.dir.y = y;
    }
}

@ccclass('SlicedTrail')
export class SlicedTrail extends UIRenderer {
    public static Point: typeof Point = Point;
    public static trans: UITransform;

    constructor() {
        super();
    }

    /**
    * @en The texture of the MotionStreak.
    * @zh 拖尾的贴图。
    * @example
    * motionStreak.texture = newTexture;
    */
    @property(SpriteFrame)
    private _spriteFrame: SpriteFrame | null = null;
    @property({ type: SpriteFrame, displayName: '贴图' })
    public get spriteFrame(): SpriteFrame | null {
        return this._spriteFrame;
    }

    public set spriteFrame(val: SpriteFrame | null) {
        if (this._spriteFrame === val) return;
        this._spriteFrame = val;
    }

    /**
     * @en Preview the trailing effect in editor mode.
     * @zh 在编辑器模式下预览拖尾效果。
     */
    @property
    private _preview: boolean = false;
    @property({ displayName: '是否预览拖尾' })
    public get preview(): boolean {
        return this._preview;
    }

    public set preview(val: boolean) {
        this._preview = val;
        this.reset();
    }

    @property({ type: GradientRange, displayName: '起始顏色漸變', tooltip: '使用 GradientRange 控制殘影 (顏色 + 透明度) 隨 age 的變化', visible(this: SlicedTrail) { return true; } })
    public _startColorGradient: GradientRange = new GradientRange();
    public get startColorGradient(): GradientRange { return this._startColorGradient; }
    public set startColorGradient(val: GradientRange) { this._startColorGradient = val; }

    // --- 殘影(回聲) 開關與參數 ---
    @property
    private _isEcho: boolean = false;
    @property({ displayName: '殘影' })
    public get isEcho(): boolean { return this._isEcho; }
    public set isEcho(val: boolean) { this._isEcho = val; this.reset(); }

    @property
    private _echoDistance: number = 15;
    @property({ type: CCFloat, displayName: '殘影距離', tooltip: '殘影圖片之間的距離', visible(this: SlicedTrail) { return this._isEcho; } })
    public get echoDistance(): number { return this._echoDistance; }
    public set echoDistance(val: number) { this._echoDistance = Math.max(val, 1); }

    @property
    private _isTailTaper: boolean = false;
    @property({ type: CCBoolean, displayName: '拖尾收尖' })
    public get isTailTaper(): boolean { return this._isTailTaper; }
    public set isTailTaper(val: boolean) {
        this._isTailTaper = val;
    }

    /**
     * @en The fade time to fade.
     * @zh 拖尾的渐隐时间，以秒为单位。
     * @example
     * motionStreak.fadeTime = 3;
     */
    @property
    private _fadeTime: number = 1;
    @property({ type: CCFloat, displayName: '淡出時間' })
    public get fadeTime(): number {
        return this._fadeTime;
    }

    public set fadeTime(val: number) {
        this._fadeTime = val;
    }

    /**
     * @en The stroke's width.
     * @zh 拖尾的宽度。
     * @example
     * motionStreak.stroke = 64;
     */
    @property
    private _stroke: number = 64;
    @property({ type: CCInteger, displayName: '寬度' })
    public get stroke(): number {
        return this._stroke;
    }
    public set stroke(val: number) {
        this._stroke = val;
    }

    @property
    private _headWidth: number = 3;
    @property({ displayName: '頭部長度' })
    public get headWidth(): number { return this._headWidth; }
    public set headWidth(val: number) {
        this._headWidth = Math.max(val, 2);
    }

    @property
    private _isUseUV: boolean = false;
    @property({ displayName: '是否使用UV' })
    public get isUseUV(): boolean {
        return this._isUseUV;
    }
    public set isUseUV(val: boolean) {
        this._isUseUV = val;
        this.reset();
    }

    @property
    private _isPlay: boolean = false;
    @property({ displayName: '是否播放' })
    public get isPlay(): boolean {
        return this._isPlay;
    }
    public set isPlay(val: boolean) {
        this._isPlay = val;
        this.reset();
    }

    // ==================== 效果選擇 ====================
    @property
    private _trailEffect: TrailEffect = TrailEffect.None;
    @property({ type: TrailEffect, displayName: '拖尾效果' })
    public get trailEffect(): TrailEffect { return this._trailEffect; }
    public set trailEffect(val: TrailEffect) { this._trailEffect = val; }

    // --- 隨機偏移參數 ---
    @property
    private _lightningOffset: number = 0;
    @property({ type: CCFloat, displayName: '隨機偏移幅度', visible(this: SlicedTrail) { return this._trailEffect === TrailEffect.RandomOffset; } })
    public get lightningOffset(): number { return this._lightningOffset; }
    public set lightningOffset(val: number) { this._lightningOffset = Math.max(val, 0); }

    @property
    private _lightningFrequency: number = 0.1;
    @property({ type: CCFloat, displayName: '隨機偏移晃動', tooltip: '數值比波長越小晃動越平緩，數值越大晃動越劇烈', visible(this: SlicedTrail) { return this._trailEffect === TrailEffect.RandomOffset; } })
    public get lightningFrequency(): number { return this._lightningFrequency; }
    public set lightningFrequency(val: number) { this._lightningFrequency = Math.max(val, 0.00000001); }

    @property
    private _lightningWaveLength: number = 1;
    @property({ type: CCFloat, displayName: '隨機偏移波長', tooltip: '控制隨機偏移波形的間距（波長）。數值越大波形間距越大', visible(this: SlicedTrail) { return this._trailEffect === TrailEffect.RandomOffset; } })
    public get lightningWaveLength(): number { return this._lightningWaveLength; }
    public set lightningWaveLength(val: number) { this._lightningWaveLength = Math.max(val, 0.0000001); }

    // --- 馬賽克參數 ---
    @property
    private _mosaicBlockSize: number = 10;
    @property({ type: CCFloat, displayName: '方塊大小', tooltip: '每個像素方塊的邊長，數值越大方塊越明顯', visible(this: SlicedTrail) { return this._trailEffect === TrailEffect.Mosaic; } })
    public get mosaicBlockSize(): number { return this._mosaicBlockSize; }
    public set mosaicBlockSize(val: number) { this._mosaicBlockSize = Math.max(val, 1); }

    // 供 assembler 使用的便捷判斷
    public get enableLightning(): boolean { return this._trailEffect === TrailEffect.RandomOffset; }
    public get enableMosaic(): boolean { return this._trailEffect === TrailEffect.Mosaic; }

    private _points: Point[] = [];
    public get points(): Point[] {
        return this._points;
    }

    public onEnable(): void {
        super.onEnable();
        this.reset();
    }

    public onDisable(): void {
        super.onDisable();
        this.isPlay = false;
    }

    protected _flushAssembler(): void {
        const assembler = SlicedTrail.Assembler.getAssembler(this);

        if (this._assembler !== assembler) {
            this._assembler = assembler;
        }

        if (!this._renderData) {
            if (this._assembler && this._assembler.createData) {
                this._renderData = this._assembler.createData(this) as RenderData;
                this._renderData.material = this.material;
                if (JSB) {
                    //this._renderData.renderDrawInfo.setVertexPositionInWorld(true);
                }
                this.markForUpdateRenderData();
                if (this.spriteFrame) {
                    this._assembler.updateRenderData(this);
                    this._assembler.updateColor(this);
                }
            }
        }

    }

    public onFocusInEditor(): void {
        if (this._preview) {
            this.reset();
        }
    }

    public onLostFocusInEditor(): void {
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
    public reset(): void {
        if (this._renderData) {
            this._renderData.clear();
            this._points.length = 0;
        }
    }

    public lateUpdate(dt: number): void {
        if (EDITOR_NOT_IN_PREVIEW && !this._preview) return;
        if (this._assembler && this._assembler.update) {
            this._assembler.update(this, dt);
        }
    }

    /**
     * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
     */
    public _render(render: any): void {
        render.commitComp(this, this._renderData, this._spriteFrame, this._assembler, null);
    }
}