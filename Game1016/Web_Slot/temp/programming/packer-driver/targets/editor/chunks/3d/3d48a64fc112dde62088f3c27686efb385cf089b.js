System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Label, Vec2, Vec4, BmfAdditiveAssembler, _crd, tempColor, _addTextureUv, _col, bmfAdditiveAssembler;

  function fillMeshVertices3D(node, renderer, renderData, color) {
    if (!renderData) return;
    const chunk = renderData.chunk;
    const dataList = renderData.data;
    const vData = chunk.vb;
    const vertexCount = renderData.vertexCount;
    const m = node.worldMatrix;
    const m00 = m.m00;
    const m01 = m.m01;
    const m02 = m.m02;
    const m03 = m.m03;
    const m04 = m.m04;
    const m05 = m.m05;
    const m06 = m.m06;
    const m07 = m.m07;
    const m12 = m.m12;
    const m13 = m.m13;
    const m14 = m.m14;
    const m15 = m.m15; // convert to 0 ~ 1

    _col.set(color.r / 255, color.g / 255, color.b / 255, color.a / 255);

    let vertexOffset = 0;

    for (let i = 0; i < vertexCount; ++i) {
      const vert = dataList[i];
      const x = vert.x;
      const y = vert.y;
      let rhw = m03 * x + m07 * y + m15;
      rhw = rhw ? 1 / rhw : 1;
      vData[vertexOffset + 0] = (m00 * x + m04 * y + m12) * rhw;
      vData[vertexOffset + 1] = (m01 * x + m05 * y + m13) * rhw;
      vData[vertexOffset + 2] = (m02 * x + m06 * y + m14) * rhw;
      Vec4.toArray(vData, _col, vertexOffset + 5);
      vertexOffset += renderData.floatStride;
    } // fill index data


    const bid = chunk.bufferId;
    const vid = chunk.vertexOffset;
    const meshBuffer = chunk.meshBuffer;
    const ib = chunk.meshBuffer.iData;
    let indexOffset = meshBuffer.indexOffset;

    for (let i = 0, count = vertexCount / 4; i < count; i++) {
      const start = vid + i * 4;
      ib[indexOffset++] = start;
      ib[indexOffset++] = start + 1;
      ib[indexOffset++] = start + 2;
      ib[indexOffset++] = start + 1;
      ib[indexOffset++] = start + 3;
      ib[indexOffset++] = start + 2;
    }

    meshBuffer.indexOffset += renderData.indexCount;
    meshBuffer.setDirty(); //addUV

    const stride = renderData.floatStride;
    let addUvOffset = 9;

    for (let i = 0; i < vertexCount; i++) {
      vData[addUvOffset] = _addTextureUv[i].x;
      vData[addUvOffset + 1] = _addTextureUv[i].y;
      addUvOffset += stride;
    } //uv


    let originUvOffset = 3;

    for (let i = 0; i < vertexCount; i++) {
      const vert = dataList[i];
      vData[originUvOffset] = vert.u;
      vData[originUvOffset + 1] = vert.v;
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
          let originalAssembler = Label.Assembler.getAssembler(comp);
          return originalAssembler.createData(comp);
        }

        fillBuffers(comp, renderer) {
          const node = comp.node;
          tempColor.set(comp.color);
          tempColor.a = node._uiProps.opacity * 255; // Fill All

          fillMeshVertices3D(node, renderer, comp.renderData, tempColor);
        }

        updateRenderData(comp) {
          let originalAssembler = Label.Assembler.getAssembler(comp);
          originalAssembler.updateRenderData(comp);
          this.updateAddTextureUVs(comp);
        }

        updateUVs(label) {
          let originalAssembler = Label.Assembler.getAssembler(label);
          originalAssembler.updateUVs(label);
        }

        updateColor(label) {
          let originalAssembler = Label.Assembler.getAssembler(label);
          originalAssembler.updateColor(label);
        }

        updateAddTextureUVs(comp) {
          const renderData = comp.renderData;
          if (!renderData) return;
          _addTextureUv.length = 0;
          const quadCount = renderData.vertexCount / 4; //計算BMF UV總值 和 距離

          let offset = 0;
          let distance = []; //let totalHigh: number = 0;

          let totalWidth = 0;

          for (let index = 0; index < quadCount; index++) {
            let topLeft = renderData.data[offset + 2];
            let bottomRight = renderData.data[offset + 1]; //let high = bottomRight.v - topLeft.v;

            let width = bottomRight.u - topLeft.u;
            offset += 4; //totalHigh += high;

            totalWidth += width;
            distance.push(width);
          }

          let previousWidth = 0;

          for (let index = 0; index < quadCount; index++) {
            let proportion = distance[index] / totalWidth;
            let currentWidth = previousWidth + proportion; //左下

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
//# sourceMappingURL=3d48a64fc112dde62088f3c27686efb385cf089b.js.map