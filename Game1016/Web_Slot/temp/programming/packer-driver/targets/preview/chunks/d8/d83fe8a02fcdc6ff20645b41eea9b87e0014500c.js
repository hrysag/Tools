System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Label, Vec2, Vec4, BmfAdditiveAssembler, _crd, tempColor, _addTextureUv, _col, bmfAdditiveAssembler;

  function fillMeshVertices3D(node, renderer, renderData, color) {
    if (!renderData) return;
    var chunk = renderData.chunk;
    var dataList = renderData.data;
    var vData = chunk.vb;
    var vertexCount = renderData.vertexCount;
    var m = node.worldMatrix;
    var m00 = m.m00;
    var m01 = m.m01;
    var m02 = m.m02;
    var m03 = m.m03;
    var m04 = m.m04;
    var m05 = m.m05;
    var m06 = m.m06;
    var m07 = m.m07;
    var m12 = m.m12;
    var m13 = m.m13;
    var m14 = m.m14;
    var m15 = m.m15; // convert to 0 ~ 1

    _col.set(color.r / 255, color.g / 255, color.b / 255, color.a / 255);

    var vertexOffset = 0;

    for (var i = 0; i < vertexCount; ++i) {
      var vert = dataList[i];
      var x = vert.x;
      var y = vert.y;
      var rhw = m03 * x + m07 * y + m15;
      rhw = rhw ? 1 / rhw : 1;
      vData[vertexOffset + 0] = (m00 * x + m04 * y + m12) * rhw;
      vData[vertexOffset + 1] = (m01 * x + m05 * y + m13) * rhw;
      vData[vertexOffset + 2] = (m02 * x + m06 * y + m14) * rhw;
      Vec4.toArray(vData, _col, vertexOffset + 5);
      vertexOffset += renderData.floatStride;
    } // fill index data


    var bid = chunk.bufferId;
    var vid = chunk.vertexOffset;
    var meshBuffer = chunk.meshBuffer;
    var ib = chunk.meshBuffer.iData;
    var indexOffset = meshBuffer.indexOffset;

    for (var _i = 0, count = vertexCount / 4; _i < count; _i++) {
      var start = vid + _i * 4;
      ib[indexOffset++] = start;
      ib[indexOffset++] = start + 1;
      ib[indexOffset++] = start + 2;
      ib[indexOffset++] = start + 1;
      ib[indexOffset++] = start + 3;
      ib[indexOffset++] = start + 2;
    }

    meshBuffer.indexOffset += renderData.indexCount;
    meshBuffer.setDirty(); //addUV

    var stride = renderData.floatStride;
    var addUvOffset = 9;

    for (var _i2 = 0; _i2 < vertexCount; _i2++) {
      vData[addUvOffset] = _addTextureUv[_i2].x;
      vData[addUvOffset + 1] = _addTextureUv[_i2].y;
      addUvOffset += stride;
    } //uv


    var originUvOffset = 3;

    for (var _i3 = 0; _i3 < vertexCount; _i3++) {
      var _vert = dataList[_i3];
      vData[originUvOffset] = _vert.u;
      vData[originUvOffset + 1] = _vert.v;
      originUvOffset += stride;
    }
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      Label = _cc.Label;
      Vec2 = _cc.Vec2;
      Vec4 = _cc.Vec4;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "18c666gzoBNoZlNBjgxomiB", "BmfAdditiveAssembler", undefined);

      __checkObsolete__(['_decorator', 'Color', 'IAssembler', 'Label', 'RenderData', 'UITransform', 'Vec2', 'Vec4', 'Node']);

      tempColor = new Color(255, 255, 255, 255);
      _addTextureUv = [];
      _col = new Vec4();
      BmfAdditiveAssembler = class BmfAdditiveAssembler {
        createData(comp) {
          var originalAssembler = Label.Assembler.getAssembler(comp);
          return originalAssembler.createData(comp);
        }

        fillBuffers(comp, renderer) {
          var node = comp.node;
          tempColor.set(comp.color);
          tempColor.a = node._uiProps.opacity * 255; // Fill All

          fillMeshVertices3D(node, renderer, comp.renderData, tempColor);
        }

        updateRenderData(comp) {
          var originalAssembler = Label.Assembler.getAssembler(comp);
          originalAssembler.updateRenderData(comp);
          this.updateAddTextureUVs(comp);
        }

        updateUVs(label) {
          var originalAssembler = Label.Assembler.getAssembler(label);
          originalAssembler.updateUVs(label);
        }

        updateColor(label) {
          var originalAssembler = Label.Assembler.getAssembler(label);
          originalAssembler.updateColor(label);
        }

        updateAddTextureUVs(comp) {
          var renderData = comp.renderData;
          if (!renderData) return;
          _addTextureUv.length = 0;
          var quadCount = renderData.vertexCount / 4; //計算BMF UV總值 和 距離

          var offset = 0;
          var distance = []; //let totalHigh: number = 0;

          var totalWidth = 0;

          for (var index = 0; index < quadCount; index++) {
            var topLeft = renderData.data[offset + 2];
            var bottomRight = renderData.data[offset + 1]; //let high = bottomRight.v - topLeft.v;

            var width = bottomRight.u - topLeft.u;
            offset += 4; //totalHigh += high;

            totalWidth += width;
            distance.push(width);
          }

          var previousWidth = 0;

          for (var _index = 0; _index < quadCount; _index++) {
            var proportion = distance[_index] / totalWidth;
            var currentWidth = previousWidth + proportion; //左下

            _addTextureUv.push(new Vec2(previousWidth, 0)); //右下


            _addTextureUv.push(new Vec2(currentWidth, 0)); //左上


            _addTextureUv.push(new Vec2(previousWidth, 1)); //右上


            _addTextureUv.push(new Vec2(currentWidth, 1));

            previousWidth = currentWidth;
          }
        }

      };

      _export("bmfAdditiveAssembler", bmfAdditiveAssembler = new BmfAdditiveAssembler());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d83fe8a02fcdc6ff20645b41eea9b87e0014500c.js.map