import { Color, dynamicAtlasManager, IAssembler, IRenderData, RenderData, Vec2, gfx } from "cc";
import { SimpleLineSprite } from "./SimpleLineSprite";

class SimpleLineSpriteAssembler implements IAssembler {
    createData(sprite: SimpleLineSprite): RenderData {
        const renderData = sprite.requestRenderData();
        const rows = 2;
        const cols = sprite.vertexCount;
        const vNum = rows * cols;
        renderData.dataLength = vNum;
        renderData.resize(vNum, (rows - 1) * (cols - 1) * 6);
        renderData.chunk.setIndexBuffer(sprite.indexBuffer);
        return renderData;
    }

    updateRenderData(sprite: SimpleLineSprite): void {
        const frame = sprite.spriteFrame;
        dynamicAtlasManager.packToDynamicAtlas(sprite, frame);
        this.updateUVs(sprite);

        const renderData = sprite.renderData;
        if (renderData && frame) {
            if (!renderData.vertDirty) return;
            this.updateUVs(sprite);
            this.updateVertexData(sprite);
            renderData.updateRenderData(sprite, frame);
        }
    }

    private updateWorldVerts(sprite: SimpleLineSprite, chunk: { vb: any }): void {
        const renderData = sprite.renderData!;
        const vData = chunk.vb;
        const dataList: IRenderData[] = renderData.data;
        const m = sprite.node.worldMatrix;
        const stride = renderData.floatStride;

        for (let i = 0; i < dataList.length; i++) {
            const curData = dataList[i];
            const x = curData.x;
            const y = curData.y;
            let rhw = m.m03 * x + m.m07 * y + m.m15;
            rhw = rhw ? 1 / rhw : 1;

            const offset = i * stride;
            vData[offset + 0] = (m.m00 * x + m.m04 * y + m.m12) * rhw;
            vData[offset + 1] = (m.m01 * x + m.m05 * y + m.m13) * rhw;
            vData[offset + 2] = (m.m02 * x + m.m06 * y + m.m14) * rhw;
        }
    }

    fillBuffers(sprite: SimpleLineSprite): void {
        if (!sprite) return;

        const renderData = sprite.renderData!;
        const chunk = renderData.chunk;

        if (sprite.node.hasChangedFlags || renderData.vertDirty) {
            this.updateWorldVerts(sprite, chunk);
            renderData.vertDirty = false;
        }

        const meshBuffer = chunk.meshBuffer;
        const ib = meshBuffer.iData;
        let indexOffset = meshBuffer.indexOffset;
        const vid = chunk.vertexOffset;
        const indexBuffer = sprite.indexBuffer;

        for (let i = 0; i < renderData.indexCount; i++) {
            ib[indexOffset++] = vid + indexBuffer[i];
        }
        meshBuffer.indexOffset += renderData.indexCount;
    }

    private updateVertexData(sprite: SimpleLineSprite): void {
        const renderData: RenderData | null = sprite.renderData;
        if (!renderData) return;

        const dataList: IRenderData[] = renderData.data;
        const rows = 2;
        const cols = sprite.vertexCount;
        const selfPoint: Vec2[] = sprite.vertexData;

        let dataIndex = 0;
        let index = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                let data = dataList[index];
                if (!data) {
                    data = dataList[index] = { x: 0, y: 0, z: 0, u: 0, v: 0, color: Color.BLACK };
                }

                if (selfPoint[dataIndex]) {
                    data.x = selfPoint[dataIndex].x;
                    data.y = selfPoint[dataIndex].y;
                } else {
                    data.x = 0;
                    data.y = 0;
                }

                dataIndex++;
                index++;
            }
        }

        renderData.dataLength = rows * cols;
        renderData.vertDirty = true;
    }

    updateUVs(sprite: SimpleLineSprite): void {
        if (!sprite.spriteFrame) return;

        const renderData = sprite.renderData!;
        const vData = renderData.chunk.vb;
        const floatStride = renderData.floatStride;
        const uv = sprite.spriteFrame.uv;
        const uv_b = uv[1];
        const uv_t = uv[5];

        let uvCount = 0;
        const uvData = sprite.uvData;
        const halfLength = renderData.dataLength / 2;

        for (let i = 0; i < renderData.dataLength; i++) {
            const v = i < halfLength ? uv_b : uv_t;
            vData[i * floatStride + 3] = uvData[uvCount];
            vData[i * floatStride + 4] = v;
            uvCount++;
        }

        // 刷光 UV2
        const vertexAttrs = renderData.accessor.attributes;
        const hasUv2 = vertexAttrs.some(attr => attr.name === gfx.AttributeName.ATTR_TEX_COORD2);
        if (hasUv2) {
            const addUvData = sprite.addTextureUVs;
            let addUvOffset = 9;
            for (let i = 0; i < addUvData.length; i++) {
                vData[addUvOffset] = addUvData[i].x;
                vData[addUvOffset + 1] = addUvData[i].y;
                addUvOffset += floatStride;
            }
        }
    }

    updateColor(sprite: SimpleLineSprite): void {
        const renderData = sprite.renderData!;
        const vData = renderData.chunk.vb;
        let colorOffset = 5;
        const color = sprite.color;
        const colorR = color.r / 255;
        const colorG = color.g / 255;
        const colorB = color.b / 255;
        const colorA = color.a / 255;

        for (let i = 0; i < renderData.dataLength; i++, colorOffset += renderData.floatStride) {
            vData[colorOffset] = colorR;
            vData[colorOffset + 1] = colorG;
            vData[colorOffset + 2] = colorB;
            vData[colorOffset + 3] = colorA;
        }
    }
}

export const simpleLineSpriteAssembler = new SimpleLineSpriteAssembler();
