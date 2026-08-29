System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Sprite, spriteAssembler, Vec2, SliceAdditiveAssembler, _crd, ccclass, property, _addTextureUv, _xProportion, _yProportion, singleGroupPointCount, totalPointCount, sliceAdditive;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Sprite = _cc.Sprite;
      spriteAssembler = _cc.spriteAssembler;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "36b63vI5IBB6LqJWUAWTRIz", "SliceAdditiveAssembler", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'IAssembler', 'Node', 'RenderData', 'Sprite', 'spriteAssembler', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);
      _addTextureUv = Array.from({
        length: 16
      }, () => new Vec2(0, 0));
      _xProportion = [0, 0, 0, 1];
      _yProportion = [1, 0, 0, 0]; //九宮格使用的頂點數是寫死16個的 一行就固定4個點 有4行

      singleGroupPointCount = 4;
      totalPointCount = 16;
      SliceAdditiveAssembler = class SliceAdditiveAssembler {
        createData(sprite) {
          let currAssembler = spriteAssembler.getAssembler(sprite);
          return currAssembler.createData(sprite);
        }

        updateRenderData(sprite) {
          let currAssembler = spriteAssembler.getAssembler(sprite);
          currAssembler.updateRenderData(sprite);
          this.updateAddTextureUVs(sprite);

          if (sprite.type === Sprite.Type.SLICED && sprite.material !== null) {
            //addUV
            const renderData = sprite.renderData;
            const chunk = renderData.chunk;
            const vData = chunk.vb;
            const stride = renderData.floatStride;
            const vertexCount = renderData.vertexCount;
            let addUvOffset = 9;

            for (let i = 0; i < vertexCount; i++) {
              vData[addUvOffset] = _addTextureUv[i].x;
              vData[addUvOffset + 1] = _addTextureUv[i].y;
              addUvOffset += stride;
            }
          }
        }

        fillBuffers(sprite, renderer) {
          let currAssembler = spriteAssembler.getAssembler(sprite);
          currAssembler.fillBuffers(sprite, renderer);
        }

        updateUVs(sprite) {
          let currAssembler = spriteAssembler.getAssembler(sprite);
          currAssembler.updateUVs(sprite);
        }

        updateColor(sprite) {
          let currAssembler = spriteAssembler.getAssembler(sprite);
          currAssembler.updateColor(sprite);
        }

        updateAddTextureUVs(sprite) {
          const renderData = sprite.renderData;
          if (!renderData) return;
          const data = renderData.data;
          const width = Math.abs(data[0].x - data[totalPointCount - 1].x);
          const height = Math.abs(data[0].y - data[totalPointCount - 1].y);
          let forwardDistanceX = Math.abs(data[0].x - data[1].x);
          let middleDistanceX = Math.abs(data[0].x - data[2].x);
          _xProportion[1] = forwardDistanceX / width;
          _xProportion[2] = middleDistanceX / width;
          let forwardDistanceY = Math.abs(data[0].y - data[1 * singleGroupPointCount].y);
          let middleDistanceY = Math.abs(data[0].y - data[2 * singleGroupPointCount].y);
          _yProportion[2] = forwardDistanceY / height;
          _yProportion[1] = middleDistanceY / height;

          for (let yIndex = 0; yIndex < singleGroupPointCount; yIndex++) {
            let index = yIndex * singleGroupPointCount;

            for (let xIndex = 0; xIndex < singleGroupPointCount; xIndex++) {
              _addTextureUv[index + xIndex].x = _xProportion[xIndex];
              _addTextureUv[index + xIndex].y = _yProportion[yIndex];
            }
          }
        }

      };

      _export("sliceAdditive", sliceAdditive = new SliceAdditiveAssembler());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=94cee08ba24bf8fbf889d8525330e45043d483e6.js.map