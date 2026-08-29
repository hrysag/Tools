import { _decorator, CCInteger, CurveRange, Vec2 } from 'cc';
import { SimpleLineSprite } from './SimpleLineSprite';

const { ccclass, property } = _decorator;

/**
 * 根據 Cocos CurveRange 自動取樣產生 posList，
 * 再交由父類 SimpleLineSprite 做弧長參數化的得分線渲染。
 */
@ccclass('CurveLineSprite')
export class CurveLineSprite extends SimpleLineSprite {

    // ==================== 曲線設定 ====================

    @property({ serializable: true, visible: false })
    private _rangeMax: Vec2 = new Vec2();
    @property({
        serializable: true, visible: true,
        displayName: "範圍最大值",
        group: { name: '曲線', id: "0" },
    })
    get rangeMax(): Vec2 { return this._rangeMax; }
    set rangeMax(v: Vec2) {
        this._rangeMax = v;
        this.rebuildFromCurve();
    }

    @property({ serializable: true, visible: false })
    private _rangeMin: Vec2 = new Vec2();
    @property({
        serializable: true, visible: true,
        displayName: "範圍最小值",
        group: { name: '曲線', id: "0" },
    })
    get rangeMin(): Vec2 { return this._rangeMin; }
    set rangeMin(v: Vec2) {
        this._rangeMin = v;
        this.rebuildFromCurve();
    }

    @property({ type: CurveRange, serializable: true, visible: false })
    private _curve: CurveRange = new CurveRange();
    @property({
        type: CurveRange, serializable: true, visible: true,
        displayName: "曲線",
        group: { name: '曲線', id: "0" },
    })
    get curve(): CurveRange { return this._curve; }
    set curve(v: CurveRange) {
        this._curve = v;
        this.rebuildFromCurve();
    }

    @property({ type: CCInteger, serializable: true, visible: false })
    private _maxSegments: number = 32;
    @property({
        type: CCInteger, serializable: true, visible: true,
        displayName: "最大取樣段數",
        group: { name: '曲線', id: "0" },
        tooltip: "段數越大曲線越平滑但頂點越多",
    })
    get maxSegments(): number { return this._maxSegments; }
    set maxSegments(v: number) {
        this._maxSegments = Math.max(2, v);
        this.rebuildFromCurve();
    }

    // ==================== 核心：從曲線產生 posList ====================

    /** 從曲線取樣並設定 posList，觸發父類的 rebuildFullMesh */
    private rebuildFromCurve(): void {
        const spline = this._curve?.spline;
        if (!spline || spline.keyFramesCount < 2) return;

        this.sampleInto(this._posList);
        this.rebuildFullMesh();
    }

    /** 均勻取樣曲線，直接寫入目標陣列（避免每次分配新陣列和 Vec2） */
    private sampleInto(out: Vec2[]): void {
        const count = this._maxSegments + 1;
        const invN = 1 / (count - 1);
        const minX = this._rangeMin.x, minY = this._rangeMin.y;
        const dx = this._rangeMax.x - minX;
        const dy = this._rangeMax.y - minY;
        const curve = this._curve;

        // 調整陣列長度，重用已有的 Vec2 物件
        while (out.length > count) out.pop();

        for (let i = 0; i < count; i++) {
            const t = i * invN;
            const x = minX + t * dx;
            const y = minY + curve.evaluate(t, 0) * dy;
            if (i < out.length) {
                out[i].x = x;
                out[i].y = y;
            } else {
                out.push(new Vec2(x, y));
            }
        }
    }

    // ==================== 生命週期 ====================

    protected override rebuildFullMesh(): void {
        if (this._posList.length < 2 && this._curve?.spline?.keyFramesCount >= 2) {
            this.sampleInto(this._posList);
        }
        super.rebuildFullMesh();
    }
}
