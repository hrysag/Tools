import { bits, Color, GradientRange, IAssembler, IAssemblerManager, randomRangeInt, RenderData, Vec2 } from 'cc';
import { SlicedTrail, Point } from './SlicedTrail';
import { JSB } from 'cc/env';
const _normal = new Vec2();
const _vec2 = new Vec2();
let QUAD_INDICES: Uint16Array | null = null;
let _layerStripVertexCounts: number[] = [];

// 簡單的伪隨機函數
function pseudoRandom(seed: number): number {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

// Value Noise 3D（有空間連續性，頻率參數能正確控制密度）
function valueNoise3D(x: number, y: number, z: number): number {
    const ix = Math.floor(x), iy = Math.floor(y), iz = Math.floor(z);
    const fx = x - ix, fy = y - iy, fz = z - iz;
    const tx = fx * fx * (3 - 2 * fx);
    const ty = fy * fy * (3 - 2 * fy);
    const tz = fz * fz * (3 - 2 * fz);
    const hash = (a: number, b: number, c: number) => pseudoRandom(a + b * 157 + c * 113);
    const x00 = hash(ix, iy, iz) + (hash(ix + 1, iy, iz) - hash(ix, iy, iz)) * tx;
    const x10 = hash(ix, iy + 1, iz) + (hash(ix + 1, iy + 1, iz) - hash(ix, iy + 1, iz)) * tx;
    const x01 = hash(ix, iy, iz + 1) + (hash(ix + 1, iy, iz + 1) - hash(ix, iy, iz + 1)) * tx;
    const x11 = hash(ix, iy + 1, iz + 1) + (hash(ix + 1, iy + 1, iz + 1) - hash(ix, iy + 1, iz + 1)) * tx;
    const y0 = x00 + (x10 - x00) * ty;
    const y1 = x01 + (x11 - x01) * ty;
    return y0 + (y1 - y0) * tz;
}

function normal(out: Vec2, dir: Vec2): Vec2 {
    // get perpendicular
    out.x = -dir.y;
    out.y = dir.x;
    return out;
}

function evalGradientToRGBA(grad: GradientRange, t: number): { r: number, g: number, b: number, a: number } | null {
    if (!grad) return null;
    let col: Color = null;
    const rand = pseudoRandom(randomRangeInt(0, bits.INT_MAX));
    col = grad.evaluate(t, rand);
    const r = col.r
    const g = col.g
    const b = col.b
    const a = col.a

    if (r > 1 || g > 1 || b > 1 || a > 1) {
        return { r: r / 255, g: g / 255, b: b / 255, a: a / 255 };
    }
    return { r, g, b, a };
}

// 將 Gradient + 基底顏色 + alpha 縮放，組合成 0..255 的 RGBA
function sampleTrailColor(
    grad: GradientRange,
    t: number,
    baseR: number,
    baseG: number,
    baseB: number,
    alphaScale: number,   // 最終 alpha 的基底縮放 (0..255)
    brightness: number = 1,
): { r: number, g: number, b: number, a: number } {
    const evaled = evalGradientToRGBA(grad, t);

    // 預設用 comp.color 當底色
    let r = baseR * brightness;
    let g = baseG * brightness;
    let b = baseB * brightness;
    let a = alphaScale;

    if (evaled) {
        const sum = evaled.r + evaled.g + evaled.b;
        if (sum === 0) {
            // RGB 全 0 視為未設定顏色，退回 baseColor
            r = baseR * brightness;
            g = baseG * brightness;
            b = baseB * brightness;
        } else {
            r = evaled.r * 255 * brightness;
            g = evaled.g * 255 * brightness;
            b = evaled.b * 255 * brightness;
        }

        const evalAlpha = (typeof evaled.a === 'number' && evaled.a > 0) ? evaled.a : 1;
        a = alphaScale * evalAlpha;
    }

    return { r, g, b, a };
}

export class SlicedTrailAssembler implements IAssembler {
    public createData(comp: SlicedTrail): RenderData {
        const renderData = comp.requestRenderData();
        renderData.dataLength = 16;
        renderData.resize(16, (16 - 2) * 3);
        return renderData;
    }

    public updateRenderData(comp: SlicedTrail) {
    }

    public updateColor(comp: SlicedTrail) {
    }

    public update(comp: SlicedTrail, dt: number): void {
        if (comp.isPlay) {
            this.showTrail(comp, dt);
        }
    }

    private showTrail(comp: SlicedTrail, dt: number): void {
        const stroke = comp.stroke / 2;

        const node = comp.node;
        const matrix = node.worldMatrix;
        const tx = matrix.m12;
        const ty = matrix.m13;

        const points = comp.points;

        let cur: Point | undefined;
        if (points.length > 1) {
            const point = points[0];
            const difx = point.point.x - tx;
            const dify = point.point.y - ty;
            if ((difx * difx + dify * dify) < 0.01) {
                cur = point;
            }
        }

        if (!cur) {
            cur = new Point();
            points.unshift(cur);
        }

        cur.setPoint(tx, ty);
        cur.time = comp.fadeTime + dt;

        let vertexCount = 0;
        let indexCount = 0;
        const renderData = comp.renderData;
        if (points.length < 2 || !renderData) {
            return;
        }

        const nodeOpacity = node._uiProps.opacity;
        const baseColor = comp.color;
        const baseR = baseColor.r;
        const baseG = baseColor.g;
        const baseB = baseColor.b;

        const prev = points[1];
        prev.distance = Vec2.subtract(_vec2, cur.point, prev.point).length();
        _vec2.normalize();
        prev.setDir(_vec2.x, _vec2.y);
        cur.setDir(_vec2.x, _vec2.y);

        const fadeTime = comp.fadeTime;

        let slicedUVBounds = this.getSlicedUVBounds(comp.spriteFrame!.uvSliced);
        let uMax = comp.isUseUV ? slicedUVBounds.uRightSlice : 1;
        let vMin = comp.isUseUV ? slicedUVBounds.vBottomSlice : 0;
        let vMax = comp.isUseUV ? slicedUVBounds.vTopSlice : 1;

        _layerStripVertexCounts.length = 0;

        if (comp.isEcho) {
            // Echo mode: render sampled images along the trail spaced by echoDistance
            // update times and remove expired
            for (let i = points.length - 1; i >= 0; i--) {
                const p = points[i];
                p.time -= dt;
                if (p.time < 0) { points.splice(i, 1); }
            }

            if (points.length < 1) return;

            // sample positions by distance threshold
            const samples: Vec2[] = [];
            let last = new Vec2(points[0].point.x, points[0].point.y);
            samples.push(new Vec2(last.x, last.y));
            for (let i = 1; i < points.length; i++) {
                const p = points[i].point;
                const d = Vec2.subtract(_vec2, p, last).length();
                if (d >= comp.echoDistance) {
                    samples.push(new Vec2(p.x, p.y));
                    last.x = p.x; last.y = p.y;
                }
            }

            const quadCount = samples.length;
            if (quadCount === 0) return;

            vertexCount = quadCount * 4;
            indexCount = quadCount * 6;
            renderData.dataLength = vertexCount;
            const data = renderData.data;

            const uMin = comp.isUseUV ? slicedUVBounds.uMin : 0;
            const uMaxLocal = comp.isUseUV ? slicedUVBounds.uMax : 1;
            const vMinLocal = comp.isUseUV ? slicedUVBounds.vMin : 0;
            const vMaxLocal = comp.isUseUV ? slicedUVBounds.vMax : 1;

            let off = 0;
            const half = stroke;
            const denom = Math.max(1, samples.length - 1);
            for (let s = samples.length - 1; s >= 0; s--) {
                const p = samples[s];
                const ageT = (samples.length - 1 - s) / denom;
                const brightness = 0.5 + 0.5 * ageT;
                const grad = comp.startColorGradient;
                const { r: rVal, g: gVal, b: bVal, a: aVal } = sampleTrailColor(
                    grad,
                    ageT,
                    baseR,
                    baseG,
                    baseB,
                    255 * nodeOpacity * brightness,
                    brightness,
                );

                const lx = p.x - half;
                const rx = p.x + half;
                const ty = p.y + half;
                const by = p.y - half;

                data[off].x = lx; data[off].y = ty; data[off].u = uMin; data[off].v = vMaxLocal; data[off].color.set(rVal, gVal, bVal, aVal);
                off++;
                data[off].x = lx; data[off].y = by; data[off].u = uMin; data[off].v = vMinLocal; data[off].color.set(rVal, gVal, bVal, aVal);
                off++;
                data[off].x = rx; data[off].y = ty; data[off].u = uMaxLocal; data[off].v = vMaxLocal; data[off].color.set(rVal, gVal, bVal, aVal);
                off++;
                data[off].x = rx; data[off].y = by; data[off].u = uMaxLocal; data[off].v = vMinLocal; data[off].color.set(rVal, gVal, bVal, aVal);
                off++;
            }
        }
        else {
            // === 原始單層模式 ===
            renderData.dataLength = points.length * 2 + 2;
            const data = renderData.data;
            let findLast = false;
            for (let i = points.length - 1; i >= 0; i--) {
                const p = points[i];
                const point = p.point;
                const dir = p.dir;
                p.time -= dt;

                if (p.time < 0) {
                    points.splice(i, 1);
                    continue;
                }

                const progress = p.time / fadeTime;
                const next = points[i - 1];

                if (!findLast) {
                    if (!next) {
                        points.splice(i, 1);
                        continue;
                    }
                    point.x = next.point.x - dir.x * progress;
                    point.y = next.point.y - dir.y * progress;
                }
                findLast = true;

                normal(_normal, dir);

                let offset = vertexCount;
                const tailTaper = comp.isTailTaper ? progress : 1;

                // 計算混合效果偏移
                let normalOffset = 0;   // 法線方向的中心偏移
                let widthScale = 1;     // 寬度縮放倍率

                // 閃電效果：尖銳鋸齒狀中心線偏移
                if (comp.enableLightning && comp.lightningOffset > 0) {
                    const wavelength = Math.max(comp.lightningWaveLength || 1, 0.0001);
                    const freq = 1 / wavelength;
                    const timeScale = comp.lightningFrequency ?? 0.2;
                    const noiseVal = valueNoise3D(point.x * freq, point.y * freq, p.time * freq * timeScale);
                    normalOffset += (noiseVal - 0.5) * 2 * comp.lightningOffset;
                }

                const effectiveStroke = stroke * tailTaper * widthScale;
                let headPoint = new Vec2(
                    point.x + _normal.x * effectiveStroke + _normal.x * normalOffset,
                    point.y + _normal.y * effectiveStroke + _normal.y * normalOffset
                );
                let tailPoint = new Vec2(
                    point.x - _normal.x * effectiveStroke + _normal.x * normalOffset,
                    point.y - _normal.y * effectiveStroke + _normal.y * normalOffset
                );

                // 馬賽克效果：將頂點吸附到方塊網格，產生數位像素感
                if (comp.enableMosaic) {
                    const bs = comp.mosaicBlockSize;
                    headPoint.x = Math.round(headPoint.x / bs) * bs;
                    headPoint.y = Math.round(headPoint.y / bs) * bs;
                    tailPoint.x = Math.round(tailPoint.x / bs) * bs;
                    tailPoint.y = Math.round(tailPoint.y / bs) * bs;
                }

                const prevHead = offset >= 2 ? data[offset - 2] : null;
                if (prevHead) {
                    const dot = (headPoint.x - prevHead.x) * dir.x + (headPoint.y - prevHead.y) * dir.y;
                    if (dot < 0) {
                        headPoint.x = prevHead.x;
                        headPoint.y = prevHead.y;
                    }
                }

                const prevTail = offset >= 1 ? data[offset - 1] : null;
                if (prevTail) {
                    const dot = (tailPoint.x - prevTail.x) * dir.x + (tailPoint.y - prevTail.y) * dir.y;
                    if (dot < 0) {
                        tailPoint.x = prevTail.x;
                        tailPoint.y = prevTail.y;
                    }
                }

                data[offset].x = headPoint.x;
                data[offset].y = headPoint.y;
                data[offset].u = progress * uMax;
                data[offset].v = vMin;

                // 使用與 echo 相同邏輯，依 age 及 gradient 取顏色
                const gradPoint = comp.startColorGradient;
                const ageT = (points.length - 1 - i) / Math.max(points.length - 1, 1); // 0 oldest .. 1 newest
                const { r: rValPoint, g: gValPoint, b: bValPoint, a: aValPoint } = sampleTrailColor(
                    gradPoint,
                    ageT,
                    baseR,
                    baseG,
                    baseB,
                    255 * nodeOpacity,
                );
                data[offset].color.set(rValPoint, gValPoint, bValPoint, aValPoint);

                offset += 1;

                data[offset].x = tailPoint.x;
                data[offset].y = tailPoint.y;
                data[offset].u = progress * uMax;
                data[offset].v = vMax;
                data[offset].color.set(rValPoint, gValPoint, bValPoint, aValPoint);

                vertexCount += 2;
            }
            //畫超出頭部的部分
            if (points.length >= 2 && comp.isUseUV) {
                const newVec2 = new Vec2();
                let outHeadPoint = new Vec2(comp.headWidth * points[0].point.x - (comp.headWidth - 1) * points[1].point.x, comp.headWidth * points[0].point.y - (comp.headWidth - 1) * points[1].point.y);
                Vec2.subtract(newVec2, outHeadPoint, points[0].point);
                newVec2.normalize();
                const perp = new Vec2(-newVec2.y, newVec2.x);
                let offset = vertexCount;
                data[offset].x = outHeadPoint.x + stroke * perp.x;
                data[offset].y = outHeadPoint.y + stroke * perp.y;
                data[offset].u = slicedUVBounds.uMax;
                data[offset].v = slicedUVBounds.vBottomSlice;
                const gradPoint = comp.startColorGradient;
                const { r: rValPoint, g: gValPoint, b: bValPoint, a: aValPoint } = sampleTrailColor(
                    gradPoint,
                    1,
                    baseR,
                    baseG,
                    baseB,
                    255 * nodeOpacity,
                );
                data[offset].color.set(rValPoint, gValPoint, bValPoint, aValPoint);

                offset += 1;

                data[offset].x = outHeadPoint.x - stroke * perp.x;
                data[offset].y = outHeadPoint.y - stroke * perp.y;
                data[offset].u = slicedUVBounds.uMax;
                data[offset].v = slicedUVBounds.vTopSlice;
                data[offset].color.set(rValPoint, gValPoint, bValPoint, aValPoint);
                vertexCount += 2;
            }

            indexCount = vertexCount <= 2 ? 0 : (vertexCount - 2) * 3;
        }

        renderData.resize(vertexCount, indexCount); // resize

        if (JSB) {
            const indexCount = renderData.indexCount;
            this.createQuadIndices(comp, indexCount);
            renderData.chunk.setIndexBuffer(QUAD_INDICES!);

            this.updateWorldVertexAllData(comp);

            renderData.updateRenderData(comp, comp.spriteFrame!);
            comp.markForUpdateRenderData();
        }
    }

    private getSlicedUVBounds(uvSliced: any[]): {
        uMin: number, uLeftSlice: number, uRightSlice: number, uMax: number,
        vMin: number, vBottomSlice: number, vTopSlice: number, vMax: number
    } {
        if (!uvSliced || uvSliced.length < 16) { // 通常是 4x4 = 16 個點
            console.error("Invalid uvSliced array format for 9-slice. Expected at least 16 elements.");
            return {
                uMin: 0, uLeftSlice: 0, uRightSlice: 1, uMax: 1,
                vMin: 0, vBottomSlice: 0, vTopSlice: 1, vMax: 1
            };
        }

        const uMin = uvSliced[0].u;
        const uLeftSlice = uvSliced[1].u;
        const uRightSlice = uvSliced[2].u;
        const uMax = uvSliced[3].u;

        const vMin = uvSliced[12].v;
        const vBottomSlice = uvSliced[8].v;
        const vTopSlice = uvSliced[4].v;
        const vMax = uvSliced[0].v;

        return { uMin, uLeftSlice, uRightSlice, uMax, vMin, vBottomSlice, vTopSlice, vMax };
    }

    private updateWorldVertexAllData(comp: SlicedTrail): void {
        if (!JSB) return;
        const renderData = comp.renderData;
        if (!renderData) return;
        const stride = renderData.floatStride;
        const dataList = renderData.data;
        const vData = renderData.chunk.vb;
        const vertexCount = renderData.vertexCount;
        for (let i = 0; i < vertexCount; i++) {
            const offset = i * stride;
            vData[offset + 0] = dataList[i].x;
            vData[offset + 1] = dataList[i].y;
            vData[offset + 2] = dataList[i].z;
            vData[offset + 3] = dataList[i].u;
            vData[offset + 4] = dataList[i].v;
            Color.toArray(vData, dataList[i].color, offset + 5);
        }
    }

    private createQuadIndices(comp: SlicedTrail, indexCount: number): void {
        if (!JSB) return;
        const renderData = comp.renderData;
        if (!renderData) return;
        const chunk = renderData.chunk;
        const vid = 0;
        const meshBuffer = chunk.meshBuffer;
        let indexOffset = meshBuffer.indexOffset;
        QUAD_INDICES = null;
        QUAD_INDICES = new Uint16Array(indexCount);
        if (comp.isEcho) {
            const quadCount = Math.floor(renderData.vertexCount / 4);
            for (let q = 0; q < quadCount; q++) {
                const start = vid + q * 4;
                QUAD_INDICES[indexOffset++] = start;
                QUAD_INDICES[indexOffset++] = start + 1;
                QUAD_INDICES[indexOffset++] = start + 2;
                QUAD_INDICES[indexOffset++] = start + 2;
                QUAD_INDICES[indexOffset++] = start + 1;
                QUAD_INDICES[indexOffset++] = start + 3;
            }
        } else if (_layerStripVertexCounts.length > 0) {
            let vertexBase = 0;
            for (const stripVertCount of _layerStripVertexCounts) {
                for (let i = 0; i < stripVertCount - 2; i += 2) {
                    const start = vid + vertexBase + i;
                    QUAD_INDICES[indexOffset++] = start;
                    QUAD_INDICES[indexOffset++] = start + 2;
                    QUAD_INDICES[indexOffset++] = start + 1;
                    QUAD_INDICES[indexOffset++] = start + 1;
                    QUAD_INDICES[indexOffset++] = start + 2;
                    QUAD_INDICES[indexOffset++] = start + 3;
                }
                vertexBase += stripVertCount;
            }
        } else {
            for (let i = 0, l = indexCount; i < l; i += 2) {
                const start = vid + i;
                QUAD_INDICES[indexOffset++] = start;
                QUAD_INDICES[indexOffset++] = start + 2;
                QUAD_INDICES[indexOffset++] = start + 1;
                QUAD_INDICES[indexOffset++] = start + 1;
                QUAD_INDICES[indexOffset++] = start + 2;
                QUAD_INDICES[indexOffset++] = start + 3;
            }
        }
    }

    private updateRenderDataCache(comp: SlicedTrail, renderData: RenderData): void {
        if (renderData.passDirty) {
            renderData.updatePass(comp);
        }
        if (renderData.nodeDirty) {
            renderData.updateNode(comp);
        }
        if (renderData.textureDirty && comp.spriteFrame.texture) {
            renderData.updateTexture(comp.spriteFrame.texture);
            renderData.material = comp.getRenderMaterial(0);
        }
        if (renderData.hashDirty) {
            renderData.updateHash();
        }
    }

    public fillBuffers(comp: SlicedTrail, renderer: any): void {
        const renderData = comp.renderData;
        if (!renderData) return;
        const chunk = renderData.chunk;
        const dataList = renderData.data;

        const vertexCount = renderData.vertexCount;
        const indexCount = renderData.indexCount;

        const vData = chunk.vb;
        let vertexOffset = 0;
        for (let i = 0; i < vertexCount; i++) {
            const vert = dataList[i];
            vData[vertexOffset++] = vert.x;
            vData[vertexOffset++] = vert.y;
            vData[vertexOffset++] = vert.z;
            vData[vertexOffset++] = vert.u;
            vData[vertexOffset++] = vert.v;
            Color.toArray(vData, vert.color, vertexOffset);
            vertexOffset += 4;
        }

        // fill index data
        const bid = chunk.bufferId;
        const vid = chunk.vertexOffset;
        const meshBuffer = chunk.meshBuffer;
        const ib = chunk.meshBuffer.iData;
        let indexOffset = meshBuffer.indexOffset;
        if (comp.isEcho) {
            const quadCount = Math.floor(renderData.vertexCount / 4);
            for (let q = 0; q < quadCount; q++) {
                const start = vid + q * 4;
                ib[indexOffset++] = start;
                ib[indexOffset++] = start + 1;
                ib[indexOffset++] = start + 2;
                ib[indexOffset++] = start + 2;
                ib[indexOffset++] = start + 1;
                ib[indexOffset++] = start + 3;
            }
        } else if (_layerStripVertexCounts.length > 0) {
            let vertexBase = 0;
            for (const stripVertCount of _layerStripVertexCounts) {
                for (let i = 0; i < stripVertCount - 2; i += 2) {
                    const start = vid + vertexBase + i;
                    ib[indexOffset++] = start;
                    ib[indexOffset++] = start + 2;
                    ib[indexOffset++] = start + 1;
                    ib[indexOffset++] = start + 1;
                    ib[indexOffset++] = start + 2;
                    ib[indexOffset++] = start + 3;
                }
                vertexBase += stripVertCount;
            }
        } else {
            for (let i = 0, l = indexCount; i < l; i += 2) {
                const start = vid + i;
                ib[indexOffset++] = start;
                ib[indexOffset++] = start + 2;
                ib[indexOffset++] = start + 1;
                ib[indexOffset++] = start + 1;
                ib[indexOffset++] = start + 2;
                ib[indexOffset++] = start + 3;
            }
        }

        meshBuffer.indexOffset += renderData.indexCount;
        meshBuffer.setDirty();
    }
}

const newMotionStreakAssembler = new SlicedTrailAssembler();

export const SlicedTrailAssemblerManager: IAssemblerManager = {
    getAssembler(comp: SlicedTrail): IAssembler {
        return newMotionStreakAssembler;
    },
};
SlicedTrail.Assembler = SlicedTrailAssemblerManager;
