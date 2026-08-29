System.register(["__unresolved_0", "cc", "__unresolved_1", "cc/env"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Vec2, SlicedTrail, Point, JSB, SlicedTrailAssembler, _crd, _normal, _vec2, QUAD_INDICES, newMotionStreakAssembler, SlicedTrailAssemblerManager;

  function normal(out, dir) {
    // get perpendicular
    out.x = -dir.y;
    out.y = dir.x;
    return out;
  }

  function _reportPossibleCrUseOfSlicedTrail(extras) {
    _reporterNs.report("SlicedTrail", "./SlicedTrail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoint(extras) {
    _reporterNs.report("Point", "./SlicedTrail", _context.meta, extras);
  }

  _export("SlicedTrailAssembler", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      SlicedTrail = _unresolved_2.SlicedTrail;
      Point = _unresolved_2.Point;
    }, function (_ccEnv) {
      JSB = _ccEnv.JSB;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "81018hIPUpFJqP60nWpHBj0", "SlicedTrailAssembler", undefined);

      __checkObsolete__(['_decorator', 'Color', 'IAssembler', 'IAssemblerManager', 'Mat4', 'MeshBuffer', 'MotionStreak', 'RenderData', 'UITransform', 'Vec2', 'Vec3']);

      _normal = new Vec2();
      _vec2 = new Vec2();
      QUAD_INDICES = null;

      _export("SlicedTrailAssembler", SlicedTrailAssembler = class SlicedTrailAssembler {
        createData(comp) {
          var renderData = comp.requestRenderData();
          renderData.dataLength = 16;
          renderData.resize(16, (16 - 2) * 3);
          return renderData;
        }

        updateRenderData(comp) {}

        updateColor(comp) {}

        update(comp, dt) {
          if (comp.isPlay) {
            this.showTrail(comp, dt);
          }
        }

        showTrail(comp, dt) {
          var stroke = comp.stroke / 2;
          var node = comp.node;
          var matrix = node.worldMatrix;
          var tx = matrix.m12;
          var ty = matrix.m13;
          var points = comp.points;
          var cur;

          if (points.length > 1) {
            var point = points[0];
            var difx = point.point.x - tx;
            var dify = point.point.y - ty;

            if (difx * difx + dify * dify < 0.01) {
              cur = point;
            }
          }

          if (!cur) {
            cur = new (_crd && Point === void 0 ? (_reportPossibleCrUseOfPoint({
              error: Error()
            }), Point) : Point)();
            points.unshift(cur);
          }

          cur.setPoint(tx, ty);
          cur.time = comp.fadeTime + dt;
          var vertexCount = 0;
          var indexCount = 0;
          var renderData = comp.renderData;

          if (points.length < 2 || !renderData) {
            return;
          }

          var color = comp.color;
          var cr = color.r;
          var cg = color.g;
          var cb = color.b;
          var ca = node._uiProps.opacity * color.a;
          var prev = points[1];
          prev.distance = Vec2.subtract(_vec2, cur.point, prev.point).length();

          _vec2.normalize();

          prev.setDir(_vec2.x, _vec2.y);
          cur.setDir(_vec2.x, _vec2.y);
          renderData.dataLength = points.length * 2 + 2;
          var data = renderData.data;
          var fadeTime = comp.fadeTime;
          var findLast = false;
          var slicedUVBounds = this.getSlicedUVBounds(comp.spriteFrame.uvSliced);
          var uMax = comp.isUseUV ? slicedUVBounds.uRightSlice : 1;
          var vMin = comp.isUseUV ? slicedUVBounds.vBottomSlice : 0;
          var vMax = comp.isUseUV ? slicedUVBounds.vTopSlice : 1;

          for (var i = points.length - 1; i >= 0; i--) {
            var p = points[i];
            var _point = p.point;
            var dir = p.dir;
            p.time -= dt;

            if (p.time < 0) {
              points.splice(i, 1);
              continue;
            }

            var progress = p.time / fadeTime;
            var next = points[i - 1];

            if (!findLast) {
              if (!next) {
                points.splice(i, 1);
                continue;
              }

              _point.x = next.point.x - dir.x * progress;
              _point.y = next.point.y - dir.y * progress;
            }

            findLast = true;
            normal(_normal, dir);
            var da = progress * ca;
            var offset = vertexCount;
            var tailTaper = comp.isTailTaper ? progress : 1;
            var headPoint = new Vec2(_point.x + _normal.x * stroke * tailTaper, _point.y + _normal.y * stroke * tailTaper);
            var tailPoint = new Vec2(_point.x - _normal.x * stroke * tailTaper, _point.y - _normal.y * stroke * tailTaper);
            var prevHead = offset >= 2 ? data[offset - 2] : null;

            if (prevHead) {
              var dot = (headPoint.x - prevHead.x) * dir.x + (headPoint.y - prevHead.y) * dir.y;

              if (dot < 0) {
                headPoint.x = prevHead.x;
                headPoint.y = prevHead.y;
              }
            }

            var prevTail = offset >= 1 ? data[offset - 1] : null;

            if (prevTail) {
              var _dot = (tailPoint.x - prevTail.x) * dir.x + (tailPoint.y - prevTail.y) * dir.y;

              if (_dot < 0) {
                tailPoint.x = prevTail.x;
                tailPoint.y = prevTail.y;
              }
            }

            data[offset].x = headPoint.x;
            data[offset].y = headPoint.y;
            data[offset].u = progress * uMax;
            data[offset].v = vMin;
            data[offset].color.set(cr, cg, cb, da);
            offset += 1;
            data[offset].x = tailPoint.x;
            data[offset].y = tailPoint.y;
            data[offset].u = progress * uMax;
            data[offset].v = vMax;
            data[offset].color.set(cr, cg, cb, da);
            vertexCount += 2;
          } //畫超出頭部的部分


          if (points.length >= 2 && comp.isUseUV) {
            var newVec2 = new Vec2();
            var outHeadPoint = new Vec2(comp.headWidth * points[0].point.x - (comp.headWidth - 1) * points[1].point.x, comp.headWidth * points[0].point.y - (comp.headWidth - 1) * points[1].point.y);
            Vec2.subtract(newVec2, outHeadPoint, points[0].point);
            newVec2.normalize();
            var perp = new Vec2(-newVec2.y, newVec2.x);
            var _offset = vertexCount;
            data[_offset].x = outHeadPoint.x + stroke * perp.x;
            data[_offset].y = outHeadPoint.y + stroke * perp.y;
            data[_offset].u = slicedUVBounds.uMax;
            data[_offset].v = slicedUVBounds.vBottomSlice;

            data[_offset].color.set(cr, cg, cb, ca);

            _offset += 1;
            data[_offset].x = outHeadPoint.x - stroke * perp.x;
            data[_offset].y = outHeadPoint.y - stroke * perp.y;
            data[_offset].u = slicedUVBounds.uMax;
            data[_offset].v = slicedUVBounds.vTopSlice;

            data[_offset].color.set(cr, cg, cb, ca);

            vertexCount += 2;
          }

          indexCount = vertexCount <= 2 ? 0 : (vertexCount - 2) * 3;
          renderData.resize(vertexCount, indexCount); // resize

          if (JSB) {
            var _indexCount = renderData.indexCount;
            this.createQuadIndices(comp, _indexCount);
            renderData.chunk.setIndexBuffer(QUAD_INDICES);
            this.updateWorldVertexAllData(comp);
            renderData.updateRenderData(comp, comp.spriteFrame);
            comp.markForUpdateRenderData();
          }
        }

        getSlicedUVBounds(uvSliced) {
          if (!uvSliced || uvSliced.length < 16) {
            // 通常是 4x4 = 16 個點
            console.error("Invalid uvSliced array format for 9-slice. Expected at least 16 elements.");
            return {
              uMin: 0,
              uLeftSlice: 0,
              uRightSlice: 1,
              uMax: 1,
              vMin: 0,
              vBottomSlice: 0,
              vTopSlice: 1,
              vMax: 1
            };
          }

          var uMin = uvSliced[0].u;
          var uLeftSlice = uvSliced[1].u;
          var uRightSlice = uvSliced[2].u;
          var uMax = uvSliced[3].u;
          var vMin = uvSliced[12].v;
          var vBottomSlice = uvSliced[8].v;
          var vTopSlice = uvSliced[4].v;
          var vMax = uvSliced[0].v;
          return {
            uMin,
            uLeftSlice,
            uRightSlice,
            uMax,
            vMin,
            vBottomSlice,
            vTopSlice,
            vMax
          };
        }

        updateWorldVertexAllData(comp) {
          if (!JSB) return;
          var renderData = comp.renderData;
          if (!renderData) return;
          var stride = renderData.floatStride;
          var dataList = renderData.data;
          var vData = renderData.chunk.vb;
          var vertexCount = renderData.vertexCount;

          for (var i = 0; i < vertexCount; i++) {
            var offset = i * stride;
            vData[offset + 0] = dataList[i].x;
            vData[offset + 1] = dataList[i].y;
            vData[offset + 2] = dataList[i].z;
            vData[offset + 3] = dataList[i].u;
            vData[offset + 4] = dataList[i].v;
            Color.toArray(vData, dataList[i].color, offset + 5);
          }
        }

        createQuadIndices(comp, indexCount) {
          if (!JSB) return;
          var renderData = comp.renderData;
          if (!renderData) return;
          var chunk = renderData.chunk;
          var vid = 0;
          var meshBuffer = chunk.meshBuffer;
          var indexOffset = meshBuffer.indexOffset;
          QUAD_INDICES = null;
          QUAD_INDICES = new Uint16Array(indexCount);

          for (var i = 0, l = indexCount; i < l; i += 2) {
            var start = vid + i;
            QUAD_INDICES[indexOffset++] = start;
            QUAD_INDICES[indexOffset++] = start + 2;
            QUAD_INDICES[indexOffset++] = start + 1;
            QUAD_INDICES[indexOffset++] = start + 1;
            QUAD_INDICES[indexOffset++] = start + 2;
            QUAD_INDICES[indexOffset++] = start + 3;
          }
        }

        updateRenderDataCache(comp, renderData) {
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

        fillBuffers(comp, renderer) {
          var renderData = comp.renderData;
          if (!renderData) return;
          var chunk = renderData.chunk;
          var dataList = renderData.data;
          var vertexCount = renderData.vertexCount;
          var indexCount = renderData.indexCount;
          var vData = chunk.vb;
          var vertexOffset = 0;

          for (var i = 0; i < vertexCount; i++) {
            var vert = dataList[i];
            vData[vertexOffset++] = vert.x;
            vData[vertexOffset++] = vert.y;
            vData[vertexOffset++] = vert.z;
            vData[vertexOffset++] = vert.u;
            vData[vertexOffset++] = vert.v;
            Color.toArray(vData, vert.color, vertexOffset);
            vertexOffset += 4;
          } // fill index data


          var bid = chunk.bufferId;
          var vid = chunk.vertexOffset;
          var meshBuffer = chunk.meshBuffer;
          var ib = chunk.meshBuffer.iData;
          var indexOffset = meshBuffer.indexOffset;

          for (var _i = 0, l = indexCount; _i < l; _i += 2) {
            var start = vid + _i;
            ib[indexOffset++] = start;
            ib[indexOffset++] = start + 2;
            ib[indexOffset++] = start + 1;
            ib[indexOffset++] = start + 1;
            ib[indexOffset++] = start + 2;
            ib[indexOffset++] = start + 3;
          }

          meshBuffer.indexOffset += renderData.indexCount;
          meshBuffer.setDirty();
        }

      });

      newMotionStreakAssembler = new SlicedTrailAssembler();

      _export("SlicedTrailAssemblerManager", SlicedTrailAssemblerManager = {
        getAssembler(comp) {
          return newMotionStreakAssembler;
        }

      });

      (_crd && SlicedTrail === void 0 ? (_reportPossibleCrUseOfSlicedTrail({
        error: Error()
      }), SlicedTrail) : SlicedTrail).Assembler = SlicedTrailAssemblerManager;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8f2f8fc2e72238e723255223afec741fccd529a5.js.map