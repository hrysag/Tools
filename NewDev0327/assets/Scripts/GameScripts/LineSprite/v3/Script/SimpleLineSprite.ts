import {
    _decorator,
    CCBoolean,
    CCFloat,
    CCInteger,
    Color,
    Enum,
    gfx,
    Graphics,
    log,
    Node,
    RenderData,
    Sprite,
    UITransform,
    Vec2,
} from "cc";
import { simpleLineSpriteAssembler } from "./SimpleLineSpriteAssembler";

const { ccclass, property } = _decorator;

const EPSILON = 1e-6;
const MITER_LIMIT = 4.0;

const VERTEX_FORMAT = [
    new gfx.Attribute(gfx.AttributeName.ATTR_POSITION, gfx.Format.RGB32F),
    new gfx.Attribute(gfx.AttributeName.ATTR_TEX_COORD, gfx.Format.RG32F),
    new gfx.Attribute(gfx.AttributeName.ATTR_COLOR, gfx.Format.RGBA32F),
    new gfx.Attribute(gfx.AttributeName.ATTR_TEX_COORD2, gfx.Format.RG32F),
];

enum LineSpritePointType { Head, Body, Tail }
enum LineSpriteUvType {
    /** 正反貼 */   Simple,
    /** 連續重複 */ Repeat,
    /** 九宮格 */   Sliced,
}

/** 預計算頂點（幾何改變時建立，之後不再修改） */
interface PrecomputedVertex {
    origin: Vec2;
    top: Vec2;
    bottom: Vec2;
    /** 歸一化弧長 t ∈ [0, 1] */
    t: number;
    /** Repeat 模式預計算 UV（bottom 側） */
    uBottom: number;
    /** Repeat 模式預計算 UV（top 側） */
    uTop: number;
}

/** 可見頂點（每次 fill 更新時由預計算資料裁切產生） */
interface VisibleVertex {
    origin: Vec2;
    top: Vec2;
    bottom: Vec2;
    t: number;
    type?: LineSpritePointType;
    uBottom: number;
    uTop: number;
}

/** findSegmentByT 回傳值 */
interface SegmentHit {
    segIndex: number;
    localT: number;
}

// =====================================================================
//  純函數
// =====================================================================

function normal2D(dir: Vec2): Vec2 {
    return new Vec2(-dir.y, dir.x);
}

function lerp(a: number, b: number, t: number): number {
    return a + (b - a) * t;
}

function lerpVec2(a: Vec2, b: Vec2, t: number): Vec2 {
    return new Vec2(lerp(a.x, b.x, t), lerp(a.y, b.y, t));
}

/** 使用向量法線 + miter 角平分線計算控制點兩側的延伸點 */
function computeMiterJoin(
    prev: Vec2 | null, curr: Vec2, next: Vec2 | null, halfWidth: number,
): { top: Vec2; bottom: Vec2 } {
    // 端點：只有一條鄰線，用法線直接延伸
    if (!prev || !next) {
        const dir = prev
            ? curr.clone().subtract(prev)
            : next!.clone().subtract(curr);
        dir.normalize();
        const n = normal2D(dir);
        return {
            top: curr.clone().add(n.clone().multiplyScalar(halfWidth)),
            bottom: curr.clone().subtract(n.clone().multiplyScalar(halfWidth)),
        };
    }

    const dirA = curr.clone().subtract(prev).normalize();
    const dirB = next.clone().subtract(curr).normalize();
    const nA = normal2D(dirA);
    const nB = normal2D(dirB);

    // 幾乎 180° 折返 → 退回用單段法線
    const cross = dirA.x * dirB.y - dirA.y * dirB.x;
    const dot = dirA.dot(dirB);
    if (Math.abs(cross) < EPSILON && dot < 0) {
        return {
            top: curr.clone().add(nA.clone().multiplyScalar(halfWidth)),
            bottom: curr.clone().subtract(nA.clone().multiplyScalar(halfWidth)),
        };
    }

    const miter = nA.clone().add(nB).normalize();
    const rawLen = halfWidth / Math.max(miter.dot(nA), EPSILON);
    const clampedLen = Math.min(rawLen, halfWidth * MITER_LIMIT);

    return {
        top: curr.clone().add(miter.clone().multiplyScalar(clampedLen)),
        bottom: curr.clone().subtract(miter.clone().multiplyScalar(clampedLen)),
    };
}

// =====================================================================
//  主類：得分線渲染器（弧長參數化）
// =====================================================================
@ccclass('SimpleLineSprite')
export class SimpleLineSprite extends Sprite {

    // ==================== 面板屬性 ====================

    @property({ type: Enum(LineSpriteUvType), serializable: true, visible: false })
    protected _lineSpriteUvType: LineSpriteUvType = LineSpriteUvType.Simple;
    @property({
        type: Enum(LineSpriteUvType), serializable: true, visible: true,
        displayName: "貼圖類型", group: { name: "得分線設定", id: "10" },
        tooltip: "Repeat 需要把貼圖的拼接模式也設置為 Repeat",
    })
    get lineSpriteUvType(): LineSpriteUvType { return this._lineSpriteUvType; }
    set lineSpriteUvType(v: LineSpriteUvType) {
        this._lineSpriteUvType = v;
        this.precomputeRepeatUVs(this._precomputed);
        this.updateClippedMesh();
    }

    @property({ type: Vec2, serializable: true, visible: false })
    protected _posList: Vec2[] = [new Vec2(-50, 0), new Vec2(50, 0)];
    @property({
        type: Vec2, serializable: true, visible: true,
        displayName: "組成線的座標", tooltip: "至少要兩個點",
        group: { name: "得分線設定", id: "10" },
    })
    get posList(): Vec2[] { return [...this._posList]; }
    set posList(v: Vec2[]) {
        if (v.length >= 2) {
            this._posList = v;
            this.rebuildFullMesh();
        }
    }

    @property({ type: CCFloat, serializable: true, visible: false })
    protected _lineWidth: number = 100;
    @property({
        type: CCFloat, serializable: true, visible: true,
        displayName: "線寬", group: { name: "得分線設定", id: "10" },
    })
    get lineWidth(): number { return this._lineWidth; }
    set lineWidth(v: number) {
        this._lineWidth = v;
        this.rebuildFullMesh();
    }

    @property({ type: CCFloat, serializable: true, visible: false })
    protected _fillFirst: number = 0;
    @property({
        type: CCFloat, serializable: true, visible: true,
        displayName: "線段起始比例", step: 0.05,
        group: { name: "得分線設定", id: "10" },
    })
    get fillFirst(): number { return this._fillFirst; }
    set fillFirst(v: number) {
        v = Math.max(0, Math.min(this._fillFinal, v));
        this._fillFirst = v.fixed();
        this.updateClippedMesh();
    }

    @property({ type: CCFloat, serializable: true, visible: false })
    protected _fillFinal: number = 1;
    @property({
        type: CCFloat, serializable: true, visible: true,
        displayName: "線段結束比例", step: 0.05,
        group: { name: "得分線設定", id: "10" },
    })
    get fillFinal(): number { return this._fillFinal; }
    set fillFinal(v: number) {
        v = Math.max(this._fillFirst, Math.min(1, v));
        this._fillFinal = v.fixed();
        this.updateClippedMesh();
    }

    @property({ serializable: true, visible: false })
    protected _isAdditive: boolean = false;
    @property({
        type: CCBoolean, serializable: true, visible: true,
        displayName: "計算刷光UV",
        group: { name: "得分線刷光設定", id: "10" },
    })
    get isAdditive(): boolean { return this._isAdditive; }
    set isAdditive(v: boolean) {
        this._isAdditive = v;
        this.updateClippedMesh();
    }

    @property({ type: Node, serializable: true, visible: true, displayName: "頭部節點", group: { name: "得分線頭部設定", id: "20" } })
    protected arrowHeadNode: Node = null;
    @property({ type: CCFloat, serializable: true, visible: true, displayName: "角度調整", group: { name: "得分線頭部設定", id: "20" }, tooltip: "如果箭頭圖不是正上方朝向，可以調整這個角度讓它對齊線段方向" })
    public get arrowHeadAngle(): number { return this._arrowHeadAngle; }
    public set arrowHeadAngle(v: number) { this._arrowHeadAngle = v; this.updateArrowHead(); }
    @property({ type: CCFloat, serializable: true, visible: false })
    protected _arrowHeadAngle: number = -90;

    @property({ type: Node, serializable: true, visible: true, displayName: "尾部節點", group: { name: "得分線尾部設定", id: "20" } })
    protected arrowTailNode: Node = null;
    @property({ type: CCFloat, serializable: true, visible: true, displayName: "角度調整", group: { name: "得分線尾部設定", id: "20" }, tooltip: "如果箭頭圖不是正上方朝向，可以調整這個角度讓它對齊線段方向" })
    public get arrowTailAngle(): number { return this._arrowTailAngle; }
    public set arrowTailAngle(v: number) { this._arrowTailAngle = v; this.updateArrowTail(); }
    @property({ type: CCFloat, serializable: true, visible: false })
    protected _arrowTailAngle: number = -90;

    // ==================== Assembler 讀取的輸出 ====================

    @property({ type: Vec2, serializable: true, visible: false })
    protected _vertexData: Vec2[] = [];
    get vertexData(): Vec2[] { return this._vertexData; }
    get vertexCount(): number { return this._vertexData.length >> 1; }

    @property({ type: CCInteger, serializable: true, visible: false })
    protected _indexBuffer: number[] = [];
    get indexBuffer(): number[] { return this._indexBuffer; }

    @property({ type: CCFloat, serializable: true, visible: false })
    protected _uvData: number[] = [];
    get uvData(): number[] { return this._uvData; }

    @property({ visible: false })
    protected _addTextureUVVec2Array: Vec2[] = [];
    get addTextureUVs(): Vec2[] { return this._addTextureUVVec2Array; }

    /** 頭端座標 */
    get headPos(): Vec2 {
        const vis = this._lastVisible;
        return vis.length > 0 ? vis[vis.length - 1].origin : Vec2.ZERO;
    }
    /** 頭端朝向角度 */
    get headAngle(): number {
        const vis = this._lastVisible;
        if (vis.length < 2) return 0;
        const a = vis[vis.length - 2].origin, b = vis[vis.length - 1].origin;
        return Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI;
    }
    /** 尾端座標 */
    get tailPos(): Vec2 {
        const vis = this._lastVisible;
        return vis.length > 0 ? vis[0].origin : Vec2.ZERO;
    }
    /** 尾端朝向角度 */
    get tailAngle(): number {
        const vis = this._lastVisible;
        if (vis.length < 2) return 0;
        const a = vis[0].origin, b = vis[1].origin;
        return Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI;
    }

    // ==================== Debug ====================

    @property({ type: CCBoolean, serializable: true, visible: true })
    public set DebugBtn(v: boolean) {
        this.markForUpdateRenderData();
        if (v) this.drawDebugVertices();
    }
    public get DebugBtn(): boolean { return false; }

    protected _debugGraphics: Graphics = null;

    private drawDebugVertices(): void {
        if (this._debugGraphics) {
            this._debugGraphics.clear();
        } else {
            let debugNode = this.node.getChildByName('__debug_vertices__');
            if (!debugNode) {
                debugNode = new Node('__debug_vertices__');
                debugNode.parent = this.node;
                debugNode.addComponent(UITransform);
            }
            this._debugGraphics = debugNode.getComponent(Graphics) || debugNode.addComponent(Graphics);
        }

        const g = this._debugGraphics;
        g.clear();

        const verts = this._vertexData;
        const count = this.vertexCount;
        if (count === 0) return;
        const R = 3;

        // bottom (藍)
        g.strokeColor = new Color(0, 120, 255, 200);
        g.fillColor = new Color(0, 120, 255, 200);
        g.lineWidth = 2;
        for (let i = 0; i < count; i++) {
            const p = verts[i];
            g.circle(p.x, p.y, R); g.fill();
            if (i > 0) { g.moveTo(verts[i - 1].x, verts[i - 1].y); g.lineTo(p.x, p.y); g.stroke(); }
        }

        // top (紅)
        g.strokeColor = new Color(255, 60, 60, 200);
        g.fillColor = new Color(255, 60, 60, 200);
        for (let i = 0; i < count; i++) {
            const p = verts[count + i];
            g.circle(p.x, p.y, R); g.fill();
            if (i > 0) { g.moveTo(verts[count + i - 1].x, verts[count + i - 1].y); g.lineTo(p.x, p.y); g.stroke(); }
        }

        // origin (綠)
        const vis = this._lastVisible;
        if (vis.length > 0) {
            g.strokeColor = new Color(0, 220, 80, 200);
            g.fillColor = new Color(0, 220, 80, 200);
            for (let i = 0; i < vis.length; i++) {
                const p = vis[i].origin;
                g.circle(p.x, p.y, R * 0.6); g.fill();
                if (i > 0) { g.moveTo(vis[i - 1].origin.x, vis[i - 1].origin.y); g.lineTo(p.x, p.y); g.stroke(); }
            }
        }

        // top-bottom 對應線 (灰)
        g.strokeColor = new Color(180, 180, 180, 120);
        g.lineWidth = 1;
        for (let i = 0; i < count; i++) {
            g.moveTo(verts[i].x, verts[i].y);
            g.lineTo(verts[count + i].x, verts[count + i].y);
            g.stroke();
        }

        log(`[Debug] Drew ${count} vertex pairs (blue=bottom, red=top, green=origin)`);
    }

    // ==================== 內部狀態 ====================

    private _precomputed: PrecomputedVertex[] = [];
    private _totalArcLength: number = 0;
    private _lastVisible: VisibleVertex[] = [];
    private _prevVisibleCount: number = -1;
    private _selfUITransform: UITransform = null;

    // ==================== 生命週期 ====================

    onLoad(): void {
        super.onLoad();
        this._flushAssembler();
        this.rebuildFullMesh();
    }

    // ==================== Assembler 管理 ====================

    protected resetAssembler(): void {
        this._assembler = null;
        this._flushAssembler();
    }

    protected _flushAssembler(): void {
        const assembler = simpleLineSpriteAssembler;
        if (this._assembler !== assembler) {
            this.destroyRenderData();
            this._assembler = assembler;
        }
        if (!this._renderData && assembler?.createData) {
            const rd = this._renderData = assembler.createData(this) as RenderData;
            rd.material = this.getRenderMaterial(0);
            this.markForUpdateRenderData();
            if (this.spriteFrame) assembler.updateUVs!(this);
            this._updateColor();
        }
    }

    public override requestRenderData(drawInfoType = 0): RenderData {
        if (this._isAdditive) {
            const data = RenderData.add(VERTEX_FORMAT);
            data.initRenderDrawInfo(this, drawInfoType);
            this._renderData = data;
            return data;
        }
        return super.requestRenderData(drawInfoType);
    }

    // =================================================================
    //  幾何重建（posList / lineWidth 改變時）
    // =================================================================

    /** miter join → 歸一化弧長 → 修正自交 */
    protected rebuildFullMesh(): void {
        const pts = this._posList;
        if (pts.length < 2) return;

        const halfW = this._lineWidth * 0.5;
        const precomputed: PrecomputedVertex[] = [];
        let arcLen = 0;

        for (let i = 0; i < pts.length; i++) {
            if (i > 0) arcLen += Vec2.distance(pts[i - 1], pts[i]);
            const { top, bottom } = computeMiterJoin(
                pts[i - 1] ?? null, pts[i], pts[i + 1] ?? null, halfW,
            );
            precomputed.push({ origin: pts[i], top, bottom, t: 0, uBottom: 0, uTop: 0 });
        }

        this._totalArcLength = arcLen;

        if (arcLen > EPSILON) {
            let acc = 0;
            for (let i = 0; i < pts.length; i++) {
                if (i > 0) acc += Vec2.distance(pts[i - 1], pts[i]);
                precomputed[i].t = acc / arcLen;
            }
        }

        this._precomputed = precomputed;
        this.fixSelfIntersection(precomputed, 'top');
        this.fixSelfIntersection(precomputed, 'bottom');
        this.precomputeRepeatUVs(precomputed);
        this.updateClippedMesh();
    }

    /** 預算 Repeat UV：各側用自身邊累積距離，歸一化到中心線弧長範圍 */
    private precomputeRepeatUVs(data: PrecomputedVertex[]): void {
        const n = data.length;
        if (n < 2 || this._lineSpriteUvType !== LineSpriteUvType.Repeat) return;
        const spriteW = this.spriteFrame?.originalSize.width;
        if (!spriteW || spriteW < EPSILON) return;

        let bottomCum = 0, topCum = 0;
        data[0].uBottom = 0;
        data[0].uTop = 0;
        for (let i = 1; i < n; i++) {
            bottomCum += Vec2.distance(data[i - 1].bottom, data[i].bottom);
            topCum += Vec2.distance(data[i - 1].top, data[i].top);
            data[i].uBottom = bottomCum;
            data[i].uTop = topCum;
        }

        const totalU = this._totalArcLength / spriteW;
        const bScale = bottomCum > EPSILON ? totalU / bottomCum : 0;
        const tScale = topCum > EPSILON ? totalU / topCum : 0;
        for (let i = 0; i < n; i++) {
            data[i].uBottom *= bScale;
            data[i].uTop *= tScale;
        }
    }

    // =================================================================
    //  自交修正
    // =================================================================

    /** 找最外層交叉邊對，將區域內同側點收束到交叉點 */
    private fixSelfIntersection(data: PrecomputedVertex[], side: 'top' | 'bottom'): void {
        const n = data.length;
        if (n < 3) return;

        for (let iter = 0; iter < n; iter++) {
            const pts = data.map(v => side === 'top' ? v.top : v.bottom);

            let bestI = -1, bestJ = -1;
            for (let i = 0; i < n - 1; i++) {
                for (let j = i + 2; j < n - 1; j++) {
                    if (this.segmentsIntersect(pts[i], pts[i + 1], pts[j], pts[j + 1])) {
                        if (bestI < 0 || (j - i) > (bestJ - bestI)) {
                            bestI = i; bestJ = j;
                        }
                    }
                }
            }
            if (bestI < 0) break;

            const crossPt = this.lineIntersection(
                pts[bestI], pts[bestI + 1], pts[bestJ], pts[bestJ + 1],
            );
            if (!crossPt) break;

            for (let k = bestI + 1; k <= bestJ; k++) {
                if (side === 'top') data[k].top = crossPt.clone();
                else data[k].bottom = crossPt.clone();
            }
        }
    }

    private segmentsIntersect(A: Vec2, B: Vec2, C: Vec2, D: Vec2): boolean {
        const o1 = this.orient(A, B, C), o2 = this.orient(A, B, D);
        const o3 = this.orient(C, D, A), o4 = this.orient(C, D, B);
        return (o1 * o2 < 0) && (o3 * o4 < 0);
    }

    private lineIntersection(A: Vec2, B: Vec2, C: Vec2, D: Vec2): Vec2 | null {
        const dx1 = B.x - A.x, dy1 = B.y - A.y;
        const dx2 = D.x - C.x, dy2 = D.y - C.y;
        const denom = dx1 * dy2 - dy1 * dx2;
        if (Math.abs(denom) < EPSILON) return null;
        const t = ((C.x - A.x) * dy2 - (C.y - A.y) * dx2) / denom;
        return new Vec2(A.x + dx1 * t, A.y + dy1 * t);
    }

    private orient(a: Vec2, b: Vec2, c: Vec2): number {
        return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
    }

    // =================================================================
    //  裁切更新（fillFirst / fillFinal 改變時，動畫熱路徑）
    // =================================================================

    /** 依 fill 範圍裁切預計算頂點 → 輸出到各 buffer */
    protected updateClippedMesh(): void {
        if (this._precomputed.length < 2) return;

        const tFirst = this._fillFirst;
        const tFinal = this._fillFinal;
        const firstHit = this.findSegmentByT(tFirst);
        const finalHit = this.findSegmentByT(tFinal);
        const precomputed = this._precomputed;

        const visible: VisibleVertex[] = [this.interpolateAtT(firstHit, tFirst)];

        for (let i = 0; i < precomputed.length; i++) {
            const v = precomputed[i];
            if (v.t > tFirst + EPSILON && v.t < tFinal - EPSILON) {
                visible.push({ origin: v.origin, top: v.top, bottom: v.bottom, t: v.t, uBottom: v.uBottom, uTop: v.uTop });
            }
        }

        visible.push(this.interpolateAtT(finalHit, tFinal));

        if (this._lineSpriteUvType === LineSpriteUvType.Sliced && this._spriteFrame) {
            this.insertSlicedBoundaries(visible);
        }

        this._lastVisible = visible;
        const count = visible.length;
        this.outputVertexBuffer(visible, count);
        this.outputUVBuffer(visible, count);
        this.outputIndexBuffer(count);
        this.updateUITransformData(visible);
        if (this._isAdditive) this.updateAdditiveUVs(visible, count);

        this.markForUpdateRenderData();

        if (count !== this._prevVisibleCount) {
            this._prevVisibleCount = count;
            this.resetAssembler();
        }

        this.updateArrowHead();
        this.updateArrowTail();
    }

    private updateArrowHead(): void {
        if (!this.arrowHeadNode) return;
        this.arrowHeadNode.setPosition(this.headPos.x, this.headPos.y, 0);
        this.arrowHeadNode.setRotationFromEuler(0, 0, this.headAngle + this._arrowHeadAngle);
    }

    private updateArrowTail(): void {
        if (!this.arrowTailNode) return;
        this.arrowTailNode.setPosition(this.tailPos.x, this.tailPos.y, 0);
        this.arrowTailNode.setRotationFromEuler(0, 0, this.tailAngle + this._arrowTailAngle);
    }

    // =================================================================
    //  搜尋 & 插值
    // =================================================================

    /** 二分搜尋：找弧長 t 所在的線段及局部比例 */
    private findSegmentByT(t: number): SegmentHit {
        const data = this._precomputed;
        if (t <= data[0].t + EPSILON) return { segIndex: 0, localT: 0 };
        if (t >= data[data.length - 1].t - EPSILON) return { segIndex: data.length - 2, localT: 1 };

        let lo = 0, hi = data.length - 1;
        while (lo < hi - 1) {
            const mid = (lo + hi) >> 1;
            if (data[mid].t < t) lo = mid; else hi = mid;
        }

        const tA = data[lo].t, tB = data[hi].t;
        return { segIndex: lo, localT: (tB - tA) > EPSILON ? (t - tA) / (tB - tA) : 0 };
    }

    /** 在線段上以局部比例插值出頂點 */
    private interpolateAtT(hit: SegmentHit, globalT: number): VisibleVertex {
        const a = this._precomputed[hit.segIndex];
        const b = this._precomputed[hit.segIndex + 1];
        const lt = hit.localT;
        return {
            origin: lerpVec2(a.origin, b.origin, lt),
            top: lerpVec2(a.top, b.top, lt),
            bottom: lerpVec2(a.bottom, b.bottom, lt),
            t: globalT,
            uBottom: lerp(a.uBottom, b.uBottom, lt),
            uTop: lerp(a.uTop, b.uTop, lt),
        };
    }

    // =================================================================
    //  Sliced 模式
    // =================================================================

    /** 根據 spriteFrame inset 計算頭尾邊界 t 值並插入頂點 */
    private insertSlicedBoundaries(visible: VisibleVertex[]): void {
        const frame = this._spriteFrame;
        if (!frame || this._totalArcLength < EPSILON) return;

        const headLen = frame.insetLeft;
        const tailLen = frame.insetRight;
        const visibleArcLen = this._totalArcLength * (this._fillFinal - this._fillFirst);

        if (visibleArcLen <= headLen + tailLen) {
            this.insertCenterSplit(visible);
            return;
        }

        const headT = this._fillFirst + headLen / this._totalArcLength;
        const tailT = this._fillFinal - tailLen / this._totalArcLength;

        const tailVertex = this.interpolateAtT(this.findSegmentByT(tailT), tailT);
        tailVertex.type = LineSpritePointType.Tail;
        this.insertVertexSorted(visible, tailVertex);

        const headVertex = this.interpolateAtT(this.findSegmentByT(headT), headT);
        headVertex.type = LineSpritePointType.Head;
        this.insertVertexSorted(visible, headVertex);
    }

    /** 長度不足時在中點插入 Head/Tail 分割 */
    private insertCenterSplit(visible: VisibleVertex[]): void {
        const centerT = (this._fillFirst + this._fillFinal) * 0.5;
        const center = this.interpolateAtT(this.findSegmentByT(centerT), centerT);

        const head: VisibleVertex = {
            origin: center.origin.clone(), top: center.top.clone(),
            bottom: center.bottom.clone(), t: center.t,
            uBottom: center.uBottom, uTop: center.uTop,
            type: LineSpritePointType.Head,
        };
        const tail: VisibleVertex = {
            origin: center.origin.clone(), top: center.top.clone(),
            bottom: center.bottom.clone(), t: center.t,
            uBottom: center.uBottom, uTop: center.uTop,
            type: LineSpritePointType.Tail,
        };

        this.insertVertexSorted(visible, tail);
        this.insertVertexSorted(visible, head);
    }

    private insertVertexSorted(list: VisibleVertex[], v: VisibleVertex): void {
        for (let i = 0; i < list.length; i++) {
            if (list[i].t > v.t + EPSILON) { list.splice(i, 0, v); return; }
        }
        list.push(v);
    }

    // =================================================================
    //  輸出 Buffer
    // =================================================================

    /** 頂點佈局：前半 = bottom，後半 = top */
    private outputVertexBuffer(visible: VisibleVertex[], count: number): void {
        const buf: Vec2[] = new Array(count * 2);
        for (let i = 0; i < count; i++) {
            buf[i] = visible[i].bottom;
            buf[count + i] = visible[i].top;
        }
        this._vertexData = buf;
    }

    /** 三角形索引（quad strip） */
    private outputIndexBuffer(count: number): void {
        const needed = (count - 1) * 6;
        if (this._indexBuffer.length === needed) return;

        const buf = new Array<number>(needed);
        for (let j = 0, off = 0; j < count - 1; j++, off += 6) {
            buf[off] = j; buf[off + 1] = j + 1; buf[off + 2] = count + j;
            buf[off + 3] = j + 1; buf[off + 4] = count + j + 1; buf[off + 5] = count + j;
        }
        this._indexBuffer = buf;
    }

    // =================================================================
    //  UV
    // =================================================================

    private outputUVBuffer(visible: VisibleVertex[], count: number): void {
        switch (this._lineSpriteUvType) {
            case LineSpriteUvType.Repeat: this._uvData = this.uvRepeat(visible, count); break;
            case LineSpriteUvType.Sliced: this._uvData = this.uvSliced(visible, count); break;
            default: this._uvData = this.uvSimple(count); break;
        }
    }

    /** Simple：交替 0, 1 */
    private uvSimple(count: number): number[] {
        const buf = new Array<number>(count * 2);
        for (let i = 0; i < count; i++) {
            const u = i & 1;
            buf[i] = u;
            buf[count + i] = u;
        }
        return buf;
    }

    /** Repeat：直接讀取預計算的 per-side UV，fill 範圍改變不影響中間頂點 */
    private uvRepeat(visible: VisibleVertex[], count: number): number[] {
        const buf = new Array<number>(count * 2);
        for (let i = 0; i < count; i++) {
            buf[i] = visible[i].uBottom;
            buf[count + i] = visible[i].uTop;
        }
        return buf;
    }

    /** Sliced：依 Head/Tail 標記分三段映射到貼圖的頭/身體/尾 */
    private uvSliced(visible: VisibleVertex[], count: number): number[] {
        const frame = this._spriteFrame;
        if (!frame) return this.uvSimple(count);

        const headU = frame.insetLeft / frame.width;
        const tailU = 1 - frame.insetRight / frame.width;

        let headIdx = -1, tailIdx = -1;
        for (let i = 0; i < count; i++) {
            if (visible[i].type === LineSpritePointType.Head) headIdx = i;
            if (visible[i].type === LineSpritePointType.Tail) tailIdx = i;
        }

        const startT = visible[0].t, endT = visible[count - 1].t;
        const headT = headIdx >= 0 ? visible[headIdx].t : startT;
        const tailT = tailIdx >= 0 ? visible[tailIdx].t : endT;

        const buf = new Array<number>(count * 2);
        for (let i = 0; i < count; i++) {
            const t = visible[i].t;
            let u: number;
            if (headIdx >= 0 && i <= headIdx) {
                const range = headT - startT;
                const p = range > EPSILON ? (t - startT) / range : (i === headIdx ? 1 : 0);
                u = p * headU;
            } else if (tailIdx >= 0 && i >= tailIdx) {
                const range = endT - tailT;
                const p = range > EPSILON ? (t - tailT) / range : (i === count - 1 ? 1 : 0);
                u = tailU + p * (1 - tailU);
            } else {
                const range = tailT - headT;
                const p = range > EPSILON ? (t - headT) / range : 0;
                u = headU + p * (tailU - headU);
            }
            buf[i] = u;
            buf[count + i] = u;
        }
        return buf;
    }

    // =================================================================
    //  UITransform & 刷光
    // =================================================================

    private updateUITransformData(visible: VisibleVertex[]): void {
        if (!this._selfUITransform) {
            this._selfUITransform = this.node.getComponent(UITransform);
        }
        if (visible.length === 0) return;
        this._selfUITransform.width = Math.abs(visible[visible.length - 1].origin.x - visible[0].origin.x);
        this._selfUITransform.height = this._lineWidth;
    }

    private updateAdditiveUVs(visible: VisibleVertex[], count: number): void {
        const xs = new Array<number>(count);
        for (let i = 0; i < count; i++) xs[i] = visible[i].origin.x;
        const min = xs[0], max = xs[count - 1];
        const range = max - min;

        const result: Vec2[] = new Array(count * 2);
        for (let i = 0; i < count; i++) {
            const u = range > EPSILON ? (xs[i] - min) / range : 0;
            result[i] = new Vec2(u, 0);
            result[count + i] = new Vec2(u, 1);
        }
        this._addTextureUVVec2Array = result;
    }
}
