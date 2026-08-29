System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, dynamicAtlasManager, LineSpriteAssembler, _crd, lineSpriteAssembler;

  function _reportPossibleCrUseOfLineSprite(extras) {
    _reporterNs.report("LineSprite", "./LineSprite", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      dynamicAtlasManager = _cc.dynamicAtlasManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0cff3YmutBMIphLEO8zKFnE", "LineSpriteAssembler", undefined);

      __checkObsolete__(['Color', 'dynamicAtlasManager', 'IAssembler', 'IRenderData', 'log', 'RenderData', 'sp', 'Vec2', 'Sprite']);

      LineSpriteAssembler = class LineSpriteAssembler {
        createData(sprite) {
          //log("createData");
          var renderData = sprite.requestRenderData();
          var rows = 2;
          var cols = sprite.vertexCount;
          var vNum = rows * cols;
          renderData.dataLength = vNum;
          renderData.resize(vNum, (rows - 1) * (cols - 1) * 6);
          renderData.chunk.setIndexBuffer(sprite.indexBuffer); //renderData.chunk.vertexOffset();

          return renderData;
        } // 照抄simple的


        updateRenderData(sprite) {
          var frame = sprite.spriteFrame; //log("updateRenderData");

          dynamicAtlasManager.packToDynamicAtlas(sprite, frame);
          this.updateUVs(sprite); // dirty need

          var renderData = sprite.renderData;

          if (renderData && frame) {
            var currentDataSame = !renderData.vertDirty;

            if (currentDataSame) {
              return;
            }

            this.updateUVs(sprite);
            this.updateVertexData(sprite);
            renderData.updateRenderData(sprite, frame);
          }
        } // 更新计算uv


        updateUVs(sprite) {
          if (!sprite.spriteFrame) return; //log("updateUVs");

          var renderData = sprite.renderData;
          var vData = renderData.chunk.vb;
          var uv = sprite.spriteFrame.uv;
          var uv_b = uv[1]; // 纹理左下角

          var uv_t = uv[5]; // 纹理右下角

          var uvCount = 0;
          var uvData = sprite.uvData;
          var halfLength = renderData.dataLength / 2;

          for (var i = 0; i < renderData.dataLength; i++) {
            var v = i < halfLength ? uv_b : uv_t;
            vData[i * renderData.floatStride + 3] = uvData[uvCount];
            vData[i * renderData.floatStride + 4] = v;
            uvCount++;
          }
        } // 计算每个顶点相对于sprite坐标的位置


        updateVertexData(sprite) {
          //log("updateVertexData");
          var renderData = sprite.renderData;

          if (!renderData) {
            return;
          }

          var dataList = renderData.data;
          var rows = 2;
          var cols = sprite.vertexCount; //自己運算的部分

          var dataIndex = 0;
          var selfPoint = sprite.vertexData; //

          var index = 0;

          for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
              var data = dataList[index];

              if (!data) {
                data = dataList[index] = {
                  x: 0,
                  y: 0,
                  z: 0,
                  u: 0,
                  v: 0,
                  color: Color.BLACK
                };
              }

              var x = 0;
              var y = 0;

              if (selfPoint[dataIndex]) {
                x = selfPoint[dataIndex].x;
                y = selfPoint[dataIndex].y;
              }

              data.x = x;
              data.y = y;
              dataIndex++;
              index++;
            }
          }

          renderData.dataLength = rows * cols;
          renderData.vertDirty = true;
        } // 局部坐标转世界坐标 照抄的，不用改


        updateWorldVerts(sprite, chunk) {
          var renderData = sprite.renderData;
          var vData = chunk.vb; //log("updateWorldVerts");

          var dataList = renderData.data;
          var node = sprite.node;
          var m = node.worldMatrix;
          var stride = renderData.floatStride;
          var offset = 0;
          var length = dataList.length;

          for (var i = 0; i < length; i++) {
            var curData = dataList[i];
            var x = curData.x;
            var y = curData.y;
            var rhw = m.m03 * x + m.m07 * y + m.m15;
            rhw = rhw ? 1 / rhw : 1;
            offset = i * stride;
            vData[offset + 0] = (m.m00 * x + m.m04 * y + m.m12) * rhw;
            vData[offset + 1] = (m.m01 * x + m.m05 * y + m.m13) * rhw;
            vData[offset + 2] = (m.m02 * x + m.m06 * y + m.m14) * rhw;
          }
        } // 每帧调用的，把数据和到一整个meshbuffer里


        fillBuffers(sprite) {
          if (!sprite) {
            return;
          }

          var renderData = sprite.renderData;
          var chunk = renderData.chunk;

          if (sprite.node.hasChangedFlags || renderData.vertDirty) {
            this.updateWorldVerts(sprite, chunk);
            renderData.vertDirty = false;
          }

          var meshBuffer = chunk.meshBuffer;
          var ib = meshBuffer.iData;
          var indexOffset = meshBuffer.indexOffset;
          var vidOrigin = chunk.vertexOffset;
          var vid = vidOrigin;
          var indexBuffer = sprite.indexBuffer;

          for (var i = 0; i < renderData.indexCount; i++) {
            ib[indexOffset++] = vid + indexBuffer[i];
          }

          meshBuffer.indexOffset += renderData.indexCount;
        } // 照抄，不用改


        updateColor(sprite) {
          var renderData = sprite.renderData;
          var vData = renderData.chunk.vb;
          var colorOffset = 5;
          var color = sprite.color;
          var colorR = color.r / 255;
          var colorG = color.g / 255;
          var colorB = color.b / 255;
          var colorA = color.a / 255;

          for (var i = 0; i < renderData.dataLength; i++, colorOffset += renderData.floatStride) {
            vData[colorOffset] = colorR;
            vData[colorOffset + 1] = colorG;
            vData[colorOffset + 2] = colorB;
            vData[colorOffset + 3] = colorA;
          }
        }

      };
      ;

      _export("lineSpriteAssembler", lineSpriteAssembler = new LineSpriteAssembler());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fb0543af8def9ef137b3458a94d93d073ab9f390.js.map