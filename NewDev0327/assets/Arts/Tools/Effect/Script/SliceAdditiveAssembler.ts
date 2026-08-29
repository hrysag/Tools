import { _decorator, Component, director, IAssembler, Node, RenderData, Sprite, spriteAssembler, Vec2 } from 'cc';
import { SliceAdditiveSprite } from './SliceAdditiveSprite';
const { ccclass, property } = _decorator;
const _addTextureUv: Vec2[] = Array.from({ length: 16 }, () => new Vec2(0, 0));
const _xProportion: number[] = [0, 0, 0, 1]
const _yProportion: number[] = [1, 0, 0, 0]

//九宮格使用的頂點數是寫死16個的 一行就固定4個點 有4行
const singleGroupPointCount = 4;
const totalPointCount = 16;

class SliceAdditiveAssembler implements IAssembler {
    createData(sprite: Sprite): RenderData {
        let currAssembler = spriteAssembler.getAssembler(sprite);
        return currAssembler.createData(sprite) as RenderData;
    }

    updateRenderData(sprite: Sprite): void {
        let currAssembler = spriteAssembler.getAssembler(sprite);
        currAssembler.updateRenderData(sprite);
        this.updateAddTextureUVs(sprite);

        if (sprite.type === Sprite.Type.SLICED && sprite.material !== null) {
            //addUV
            const renderData = sprite.renderData;
            const chunk = renderData.chunk;
            const vData = chunk.vb;
            const stride = renderData.floatStride;
            const vertexCount = renderData.vertexCount

            let addUvOffset = 9;
            for (let i = 0; i < vertexCount; i++) {
                vData[addUvOffset] = _addTextureUv[i].x;
                vData[addUvOffset + 1] = _addTextureUv[i].y;
                addUvOffset += stride;
            }
        }
    }

    fillBuffers(sprite: Sprite, renderer): void {
        let currAssembler = spriteAssembler.getAssembler(sprite);
        currAssembler.fillBuffers(sprite, renderer);
    }

    updateUVs(sprite: Sprite): void {
        let currAssembler = spriteAssembler.getAssembler(sprite);
        currAssembler.updateUVs(sprite);
    }

    updateColor(sprite: Sprite): void {
        let currAssembler = spriteAssembler.getAssembler(sprite);
        currAssembler.updateColor(sprite);
    }

    updateAddTextureUVs(sprite: Sprite) {
        const renderData = sprite.renderData;
        if (!renderData) return;
        const data = renderData.data;
        const width: number = Math.abs(data[0].x - data[totalPointCount - 1].x);
        const height: number = Math.abs(data[0].y - data[totalPointCount - 1].y);

        let forwardDistanceX: number = Math.abs(data[0].x - data[1].x);
        let middleDistanceX: number = Math.abs(data[0].x - data[2].x);
        _xProportion[1] = forwardDistanceX / width;
        _xProportion[2] = middleDistanceX / width;

        let forwardDistanceY: number = Math.abs(data[0].y - data[1 * singleGroupPointCount].y);
        let middleDistanceY: number = Math.abs(data[0].y - data[2 * singleGroupPointCount].y);
        _yProportion[2] = forwardDistanceY / height;
        _yProportion[1] = middleDistanceY / height;

        for (let yIndex = 0; yIndex < singleGroupPointCount; yIndex++) {
            let index: number = yIndex * singleGroupPointCount;
            for (let xIndex = 0; xIndex < singleGroupPointCount; xIndex++) {
                _addTextureUv[index + xIndex].x = _xProportion[xIndex];
                _addTextureUv[index + xIndex].y = _yProportion[yIndex];
            }
        }
    }
}

export const sliceAdditive = new SliceAdditiveAssembler();