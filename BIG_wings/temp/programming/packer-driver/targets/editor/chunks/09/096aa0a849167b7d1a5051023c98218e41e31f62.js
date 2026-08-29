System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Graphics, Vec2, Color, UIVertexFormat, gfx, warnID, director, RenderingSubMesh, Vec3, v2, Texture2D, Material, log, earcut, Point, _dec, _dec2, _dec3, _class2, _class3, _descriptor, _descriptor2, _crd, ccclass, property, attributes, componentPerVertex, stride, attrBytes, _impl, MAX_VERTEX, MAX_INDICES, PI, min, max, ceil, acos, cos, sin, atan2, _tempV2, _renderData, _curColor, vec3_temps, i, lineC, gAssembler, lineAssembler, TextureLineAssembler, TextureLineGraphics;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function curveDivs(r, arc, tol) {
    const da = acos(r / (r + tol)) * 2.0;
    return max(2, ceil(arc / da));
  }

  function clamp(v, minNum, maxNum) {
    if (v < minNum) {
      return minNum;
    } else if (v > maxNum) {
      return maxNum;
    }

    return v;
  }

  function _reportPossibleCrUseOfearcut(extras) {
    _reporterNs.report("earcut", "./earcut", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Graphics = _cc.Graphics;
      Vec2 = _cc.Vec2;
      Color = _cc.Color;
      UIVertexFormat = _cc.UIVertexFormat;
      gfx = _cc.gfx;
      warnID = _cc.warnID;
      director = _cc.director;
      RenderingSubMesh = _cc.RenderingSubMesh;
      Vec3 = _cc.Vec3;
      v2 = _cc.v2;
      Texture2D = _cc.Texture2D;
      Material = _cc.Material;
      log = _cc.log;
    }, function (_unresolved_2) {
      earcut = _unresolved_2.earcut;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d25a6qlioxChZB7uPKnt4fs", "TextureLineGraphics", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Graphics', 'UI', 'graphicsAssembler', 'IAssembler', 'Vec2', 'Color', '__private', 'UIVertexFormat', 'gfx', 'warnID', 'director', 'RenderingSubMesh', 'Vec3', 'v2', 'Texture2D', 'Size', 'size', 'Material', 'MeshRenderData', 'log']);

      ({
        ccclass,
        property
      } = _decorator);
      attributes = UIVertexFormat.vfmtPosColor.concat([new gfx.Attribute('a_dist', gfx.Format.R32F), new gfx.Attribute('a_line', gfx.Format.R32F)]);
      componentPerVertex = UIVertexFormat.getComponentPerVertex(attributes);
      stride = UIVertexFormat.getAttributeStride(attributes);
      Point = class Point extends Vec2 {
        constructor(x, y) {
          super(x, y);
          this.dx = 0;
          this.dy = 0;
          this.dmx = 0;
          this.dmy = 0;
          this.flags = 0;
          this.len = 0;
          this.lineLength = 0;
          this.reset();
        }

        reset() {
          this.dx = 0;
          this.dy = 0;
          this.dmx = 0;
          this.dmy = 0;
          this.flags = 0;
          this.len = 0;
          this.lineLength = 0;
        }

      };
      attrBytes = 9;
      _impl = null;
      MAX_VERTEX = 65535;
      MAX_INDICES = MAX_VERTEX * 2;
      PI = Math.PI;
      min = Math.min;
      max = Math.max;
      ceil = Math.ceil;
      acos = Math.acos;
      cos = Math.cos;
      sin = Math.sin;
      atan2 = Math.atan2;
      _tempV2 = v2();
      _renderData = null;
      _curColor = new Color();
      vec3_temps = [];

      for (i = 0; i < 4; i++) {
        vec3_temps.push(new Vec3());
      }

      lineC = 1;
      gAssembler = Graphics.Assembler.getAssembler(null);
      lineAssembler = {
        stroke(graphics) {
          Color.copy(_curColor, graphics.strokeColor); // graphics.node.getWorldMatrix(_currMatrix);

          if (!graphics.impl) {
            return;
          }

          this._flattenPaths(graphics.impl);

          this._expandStroke(graphics);

          graphics.impl.updatePathOffset = true;
          this.end(graphics);
        },

        fill(graphics) {
          Color.copy(_curColor, graphics.fillColor); // graphics.node.getWorldMatrix(_currMatrix);

          this._expandFill(graphics);

          if (graphics.impl) {
            graphics.impl.updatePathOffset = true;
          }

          this.end(graphics);
        },

        _flattenPaths(impl) {
          const paths = impl.paths;

          for (let i = impl.pathOffset, l = impl.pathLength; i < l; i++) {
            const path = paths[i];
            const pts = path.points;
            let p0 = pts[pts.length - 1];
            let p1 = pts[0]; // if (pts.length > 2 && p0.equals(p1)) {
            //     path.closed = true;
            //     pts.pop();
            //     p0 = pts[pts.length - 1];
            // }

            /******** */

            let lineLength = 0;
            pts[0]["lineLength"] = lineLength;
            let p00 = null;
            let p11 = pts[0];
            let subPos = v2();
            /********* */

            for (let j = 0, size = pts.length; j < size; j++) {
              // Calculate segment direction and length
              const dPos = new Point(p1.x, p1.y);
              dPos.subtract(p0);
              p0.len = dPos.length();

              if (dPos.x || dPos.y) {
                dPos.normalize();
              }

              p0.dx = dPos.x;
              p0.dy = dPos.y; //***** */

              p11 = pts[j];

              if (j != 0) {
                // p0 is previous point, 
                // p1 is current point
                //p00 & p11 is similar to p0 & p1
                // calculate the distance between points 
                Vec2.subtract(subPos, p11, p00);
                lineLength += subPos.length() * lineC;
                p11["lineLength"] = lineLength;
              }

              p00 = pts[j]; //******* */
              // Advance

              p0 = p1;
              p1 = pts[j + 1];
            } // if (pts.length > 3 && pts[pts.length-1].len != pts[pts.length-2].len){
            //     pts[pts.length - 1].len = pts[pts.length-2].len;
            // }


            log(pts);
          }
        },

        getRenderData(graphics, vertexCount) {
          if (!_impl) {
            return null;
          }

          const renderDataList = _impl.getRenderDataList();

          let renderData = renderDataList[_impl.dataOffset];

          if (!renderData) {
            return null;
          }

          let meshBuffer = renderData;
          const maxVertexCount = meshBuffer ? meshBuffer.vertexStart + vertexCount : 0;

          if (maxVertexCount > MAX_VERTEX || maxVertexCount * 3 > MAX_INDICES) {
            ++_impl.dataOffset;

            if (_impl.dataOffset < renderDataList.length) {
              renderData = renderDataList[_impl.dataOffset];
            } else {
              renderData = _impl.requestRenderData();
              renderDataList[_impl.dataOffset] = renderData;
            }

            meshBuffer = renderData;
          }

          if (meshBuffer && meshBuffer.vertexCount < maxVertexCount) {
            meshBuffer.request(vertexCount, vertexCount * 3);
          }

          return renderData;
        },

        _expandStroke(graphics) {
          const w = graphics.lineWidth * 0.5;
          const lineCap = graphics.lineCap;
          const lineJoin = graphics.lineJoin;
          const miterLimit = graphics.miterLimit;
          _impl = graphics.impl;

          if (!_impl) {
            return;
          }

          const nCap = curveDivs(w, PI, _impl.tessTol);

          this._calculateJoins(_impl, w, lineJoin, miterLimit);

          const paths = _impl.paths; // Calculate max vertex usage.

          let vertexCount = 0;

          for (let i = _impl.pathOffset, l = _impl.pathLength; i < l; i++) {
            const path = paths[i];
            const pointsLength = path.points.length;

            if (lineJoin == 1) {
              vertexCount += (pointsLength + path.bevel * (nCap + 2) + 1) * 2;
            } else {
              vertexCount += (pointsLength + path.bevel * 5 + 1) * 2;
            } // plus one for loop


            if (!path.closed) {
              // space for caps
              if (lineCap == 1) {
                vertexCount += (nCap * 2 + 2) * 2;
              } else {
                vertexCount += (3 + 3) * 2;
              }
            }
          }

          const meshBuffer = _renderData = this.getRenderData(graphics, vertexCount);

          if (!meshBuffer) {
            return;
          }

          const vData = meshBuffer.vData;
          const iData = meshBuffer.iData;

          for (let i = _impl.pathOffset, l = _impl.pathLength; i < l; i++) {
            const path = paths[i];
            const pts = path.points;
            const pointsLength = pts.length;
            const offset = meshBuffer.vertexStart;
            let p0;
            let p1;
            let start = 0;
            let end = 0;
            const loop = path.closed;
            let startEndL = 0;

            if (loop) {
              // Looping
              p0 = pts[pointsLength - 1];
              p1 = pts[0];
              start = 0;
              end = pointsLength;
              Vec2.subtract(_tempV2, p1, p0);
              startEndL = _tempV2.length();
            } else {
              // Add cap
              p0 = pts[0];
              p1 = pts[1];
              start = 1;
              end = pointsLength - 1;
            }

            p1 = p1 || p0;

            if (!loop) {
              // Add cap
              const dPos = new Point(p1.x, p1.y);
              dPos.subtract(p0);
              dPos.normalize();
              const dx = dPos.x;
              const dy = dPos.y;

              if (lineCap == 0) {
                this._buttCapStart(p0, dx, dy, w, 0);
              } else if (lineCap == 2) {
                this._buttCapStart(p0, dx, dy, w, w);
              } else if (lineCap == 1) {
                this._roundCapStart(p0, dx, dy, w, nCap);
              }
            }

            for (let j = start; j < end; ++j) {
              if (lineJoin == 1) {
                this._roundJoin(p0, p1, w, w, nCap);
              } else if ((p1.flags & (0x04 | 0x08)) !== 0) {
                this._bevelJoin(p0, p1, w, w);
              } else {
                this._vSet(p1.x + p1.dmx * w, p1.y + p1.dmy * w, 1, p1.lineLength);

                this._vSet(p1.x - p1.dmx * w, p1.y - p1.dmy * w, -1, p1.lineLength);
              }

              p0 = p1;
              p1 = pts[j + 1];
            }

            if (loop) {
              // Loop it
              const vDataOffset = offset * attrBytes;

              this._vSet(vData[vDataOffset], vData[vDataOffset + 1], 1, startEndL);

              this._vSet(vData[vDataOffset + attrBytes], vData[vDataOffset + attrBytes + 1], -1, startEndL);
            } else {
              // Add cap
              const dPos = new Point(p1.x, p1.y);
              dPos.subtract(p0);
              dPos.normalize();
              const dx = dPos.x;
              const dy = dPos.y;

              if (lineCap == 0) {
                this._buttCapEnd(p1, dx, dy, w, 0);
              } else if (lineCap == 2) {
                this._buttCapEnd(p1, dx, dy, w, w);
              } else if (lineCap == 1) {
                this._roundCapEnd(p1, dx, dy, w, nCap);
              }
            } // stroke indices


            let indicesOffset = meshBuffer.indexStart;

            for (let begin = offset + 2, over = meshBuffer.vertexStart; begin < over; begin++) {
              iData[indicesOffset++] = begin - 2;
              iData[indicesOffset++] = begin - 1;
              iData[indicesOffset++] = begin;
            }

            meshBuffer.indexStart = indicesOffset;
          }

          _renderData = null;
          _impl = null;
        },

        _expandFill(graphics) {
          _impl = graphics.impl;

          if (!_impl) {
            return;
          }

          const paths = _impl.paths; // Calculate max vertex usage.

          let vertexCount = 0;

          for (let i = _impl.pathOffset, l = _impl.pathLength; i < l; i++) {
            const path = paths[i];
            const pointsLength = path.points.length;
            vertexCount += pointsLength;
          }

          const renderData = _renderData = this.getRenderData(graphics, vertexCount);

          if (!renderData) {
            return;
          }

          const meshBuffer = renderData;
          const vData = meshBuffer.vData;
          const iData = meshBuffer.iData;

          for (let i = _impl.pathOffset, l = _impl.pathLength; i < l; i++) {
            const path = paths[i];
            const pts = path.points;
            const pointsLength = pts.length;

            if (pointsLength === 0) {
              continue;
            } // Calculate shape vertices.


            const vertexOffset = renderData.vertexStart;

            for (let j = 0; j < pointsLength; ++j) {
              if (pts[j].y > 0) {
                this._vSet(pts[j].x, pts[j].y, 0, pts[j]["lineLength"]);
              } else {
                this._vSet(pts[j].x, pts[j].y, 60, pts[j]["lineLength"]);
              }
            }

            let indicesOffset = renderData.indexStart;

            if (path.complex) {
              const earcutData = [];

              for (let j = vertexOffset, end = renderData.vertexStart; j < end; j++) {
                let vDataOffset = j * attrBytes;
                earcutData.push(vData[vDataOffset++]);
                earcutData.push(vData[vDataOffset++]);
                earcutData.push(vData[vDataOffset++]);
              }

              const newIndices = (_crd && earcut === void 0 ? (_reportPossibleCrUseOfearcut({
                error: Error()
              }), earcut) : earcut)(earcutData, null, 3);

              if (!newIndices || newIndices.length === 0) {
                continue;
              }

              for (let j = 0, nIndices = newIndices.length; j < nIndices; j++) {
                iData[indicesOffset++] = newIndices[j] + vertexOffset;
              }
            } else {
              const first = vertexOffset;

              for (let start = vertexOffset + 2, end = meshBuffer.vertexStart; start < end; start++) {
                iData[indicesOffset++] = first;
                iData[indicesOffset++] = start - 1;
                iData[indicesOffset++] = start;
              }
            }

            meshBuffer.indexStart = indicesOffset;
          }

          _renderData = null;
          _impl = null;
        },

        _buttCapStart(p, dx, dy, w, d) {
          const px = p.x - dx * d;
          const py = p.y - dy * d;
          const dlx = dy;
          const dly = -dx;

          this._vSet(px + dlx * w, py + dly * w, 1, p.lineLength);

          this._vSet(px - dlx * w, py - dly * w, -1, p.lineLength);
        },

        _buttCapEnd(p, dx, dy, w, d) {
          const px = p.x + dx * d;
          const py = p.y + dy * d;
          const dlx = dy;
          const dly = -dx;

          this._vSet(px + dlx * w, py + dly * w, 1, p.lineLength);

          this._vSet(px - dlx * w, py - dly * w, -1, p.lineLength);
        },

        _roundCapStart(p, dx, dy, w, nCap) {
          const px = p.x;
          const py = p.y;
          const dlx = dy;
          const dly = -dx;

          for (let i = 0; i < nCap; i++) {
            const a = i / (nCap - 1) * PI;
            const ax = cos(a) * w;
            const ay = sin(a) * w;

            this._vSet(px - dlx * ax - dx * ay, py - dly * ax - dy * ay, 1, p.lineLength);

            this._vSet(px, py, 0, p.lineLength);
          }

          this._vSet(px + dlx * w, py + dly * w, 1, p.lineLength);

          this._vSet(px - dlx * w, py - dly * w, -1, p.lineLength);
        },

        _roundCapEnd(p, dx, dy, w, nCap) {
          const px = p.x;
          const py = p.y;
          const dlx = dy;
          const dly = -dx;

          this._vSet(px + dlx * w, py + dly * w, 1, p.lineLength);

          this._vSet(px - dlx * w, py - dly * w, -1, p.lineLength);

          for (let i = 0; i < nCap; i++) {
            const a = i / (nCap - 1) * PI;
            const ax = cos(a) * w;
            const ay = sin(a) * w;

            this._vSet(px, py, 0, p.lineLength);

            this._vSet(px - dlx * ax + dx * ay, py - dly * ax + dy * ay, 1, p.lineLength);
          }
        },

        _roundJoin(p0, p1, lw, rw, nCap) {
          const dlx0 = p0.dy;
          const dly0 = -p0.dx;
          const dlx1 = p1.dy;
          const dly1 = -p1.dx;
          const p1x = p1.x;
          const p1y = p1.y;

          if ((p1.flags & 0x02) !== 0) {
            const out = this._chooseBevel(p1.flags & 0x08, p0, p1, lw);

            const lx0 = out[0];
            const ly0 = out[1];
            const lx1 = out[2];
            const ly1 = out[3];
            const a0 = atan2(-dly0, -dlx0);
            let a1 = atan2(-dly1, -dlx1);

            if (a1 > a0) {
              a1 -= PI * 2;
            }

            this._vSet(lx0, ly0, 1, p1.lineLength);

            this._vSet(p1x - dlx0 * rw, p1.y - dly0 * rw, -1, p1.lineLength);

            const n = clamp(ceil((a0 - a1) / PI) * nCap, 2, nCap);

            for (let i = 0; i < n; i++) {
              const u = i / (n - 1);
              const a = a0 + u * (a1 - a0);
              const rx = p1x + cos(a) * rw;
              const ry = p1y + sin(a) * rw;

              this._vSet(p1x, p1y, 0, p1.lineLength);

              this._vSet(rx, ry, -1, p1.lineLength);
            }

            this._vSet(lx1, ly1, 1, p1.lineLength);

            this._vSet(p1x - dlx1 * rw, p1y - dly1 * rw, -1, p1.lineLength);
          } else {
            const out = this._chooseBevel(p1.flags & 0x08, p0, p1, -rw);

            const rx0 = out[0];
            const ry0 = out[1];
            const rx1 = out[2];
            const ry1 = out[3];
            const a0 = atan2(dly0, dlx0);
            let a1 = atan2(dly1, dlx1);

            if (a1 < a0) {
              a1 += PI * 2;
            }

            this._vSet(p1x + dlx0 * rw, p1y + dly0 * rw, 1, p1.lineLength);

            this._vSet(rx0, ry0, -1, p1.lineLength);

            const n = clamp(ceil((a1 - a0) / PI) * nCap, 2, nCap);

            for (let i = 0; i < n; i++) {
              const u = i / (n - 1);
              const a = a0 + u * (a1 - a0);
              const lx = p1x + cos(a) * lw;
              const ly = p1y + sin(a) * lw;

              this._vSet(lx, ly, 1, p1.lineLength);

              this._vSet(p1x, p1y, 0, p1.lineLength);
            }

            this._vSet(p1x + dlx1 * rw, p1y + dly1 * rw, 1, p1.lineLength);

            this._vSet(rx1, ry1, -1, p1.lineLength);
          }
        },

        _bevelJoin(p0, p1, lw, rw) {
          let rx0 = 0;
          let ry0 = 0;
          let rx1 = 0;
          let ry1 = 0;
          let lx0 = 0;
          let ly0 = 0;
          let lx1 = 0;
          let ly1 = 0;
          const dlx0 = p0.dy;
          const dly0 = -p0.dx;
          const dlx1 = p1.dy;
          const dly1 = -p1.dx;

          if (p1.flags & 0x02) {
            const out = this._chooseBevel(p1.flags & 0x08, p0, p1, lw);

            lx0 = out[0];
            ly0 = out[1];
            lx1 = out[2];
            ly1 = out[3];

            this._vSet(lx0, ly0, 1, p1.lineLength);

            this._vSet(p1.x - dlx0 * rw, p1.y - dly0 * rw, -1, p1.lineLength);

            this._vSet(lx1, ly1, 1, p1.lineLength);

            this._vSet(p1.x - dlx1 * rw, p1.y - dly1 * rw, -1, p1.lineLength);
          } else {
            const out = this._chooseBevel(p1.flags & 0x08, p0, p1, -rw);

            rx0 = out[0];
            ry0 = out[1];
            rx1 = out[2];
            ry1 = out[3];

            this._vSet(p1.x + dlx0 * lw, p1.y + dly0 * lw, 1, p1.lineLength);

            this._vSet(rx0, ry0, -1, p1.lineLength);

            this._vSet(p1.x + dlx1 * lw, p1.y + dly1 * lw, 1, p1.lineLength);

            this._vSet(rx1, ry1, -1, p1.lineLength);
          }
        },

        _vSet(x, y, distance = 0, lineLong = 0) {
          if (!_renderData) {
            return;
          }

          const meshBuffer = _renderData;
          let dataOffset = meshBuffer.vertexStart * attrBytes;
          const vData = meshBuffer.vData; // vec3.set(_tempVec3, x, y, 0);
          // vec3.transformMat4(_tempVec3, _tempVec3, _currMatrix);

          vData[dataOffset++] = x;
          vData[dataOffset++] = y;
          vData[dataOffset++] = 0;
          Color.toArray(vData, _curColor, dataOffset);
          dataOffset += 4;
          vData[dataOffset++] = distance;
          vData[dataOffset++] = lineLong;
          meshBuffer.vertexStart++;
        }

      };
      TextureLineAssembler = Object.assign({}, gAssembler, lineAssembler);
      /**
       * 記得將strokeColor 設定為FFFFFF 
       */

      _export("TextureLineGraphics", TextureLineGraphics = (_dec = ccclass('TextureLineGraphics'), _dec2 = property({
        type: Texture2D,
        visible: true,
        displayName: "Line Rope Texture"
      }), _dec3 = property({
        type: Material,
        visible: true,
        displayName: "Line Rope Material",
        tooltip: "手動綁 textureLine.mtl"
      }), _dec(_class2 = (_class3 = class TextureLineGraphics extends Graphics {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "texture", _descriptor, this);

          _initializerDefineProperty(this, "lineMaterial", _descriptor2, this);
        }

        onLoad() {
          if (this.texture) {
            this.lineWidth = this.texture.height;
            lineC = this.lineWidth / (this.texture.height * 2 * this.texture.width);
          }

          if (this.lineMaterial) {
            this.setMaterial(this.lineMaterial, 0);
            if (this.texture) this.getMaterial(0).setProperty("texture1", this.texture);
          }

          super.onLoad();
        }

        onEnable() {
          if (this.lineMaterial) {
            this.setMaterial(this.lineMaterial, 0);
            if (this.texture) this.getMaterial(0).setProperty("texture1", this.texture);
          }
        }

        _flushAssembler() {
          const assembler = TextureLineAssembler;

          if (this._assembler != assembler) {
            this._assembler = assembler;
          }
        }

        activeSubModel(idx) {
          if (!this.model) {
            warnID(4500, this.node.name);
            return;
          }

          if (this.model.subModels.length <= idx) {
            const gfxDevice = director.root.device;
            const vertexBuffer = gfxDevice.createBuffer(new gfx.BufferInfo(gfx.BufferUsageBit.VERTEX | gfx.BufferUsageBit.TRANSFER_DST, gfx.MemoryUsageBit.DEVICE, 65535 * stride, stride));
            const indexBuffer = gfxDevice.createBuffer(new gfx.BufferInfo(gfx.BufferUsageBit.INDEX | gfx.BufferUsageBit.TRANSFER_DST, gfx.MemoryUsageBit.DEVICE, 65535 * Uint16Array.BYTES_PER_ELEMENT * 2, Uint16Array.BYTES_PER_ELEMENT));
            const renderMesh = new RenderingSubMesh([vertexBuffer], attributes, gfx.PrimitiveMode.TRIANGLE_LIST, indexBuffer);
            renderMesh.subMeshIdx = 0;
            this.model.initSubModel(idx, renderMesh, this.getMaterialInstance(0));
            this["_graphicsUseSubMeshes"].push(renderMesh);
          }
        }

        _uploadData() {
          const impl = this.impl;

          if (!impl) {
            return;
          }

          const renderDataList = impl && impl.getRenderDataList();

          if (renderDataList.length <= 0 || !this.model) {
            return;
          }

          const subModelList = this.model.subModels;

          for (let i = 0; i < renderDataList.length; i++) {
            const renderData = renderDataList[i];
            const ia = subModelList[i].inputAssembler;

            if (renderData.lastFilledVertex === renderData.vertexStart) {
              continue;
            }

            const vb = new Float32Array(renderData.vData.buffer, 0, renderData.vertexStart * componentPerVertex);
            ia.vertexBuffers[0].update(vb);
            ia.vertexCount = renderData.vertexStart;
            const ib = new Uint16Array(renderData.iData.buffer, 0, renderData.indexStart);
            ia.indexBuffer.update(ib);
            ia.indexCount = renderData.indexStart;
            renderData.lastFilledVertex = renderData.vertexStart;
            renderData.lastFilledIndex = renderData.indexStart;
          }

          this._isNeedUploadData = false;
        }

        _render(render) {
          super._render(render);

          if (this.node._uiProps.colorDirty || this._isNeedUploadData) {
            this._updateOpacity();
          }
        }

        _updateOpacity() {
          const impl = this.impl;

          if (!impl) {
            return;
          }

          const render_datas = impl.getRenderDataList();

          if (render_datas.length <= 0) {
            return;
          }

          const sub_models = this.model.subModels;
          render_datas.forEach((render_data, idx) => {
            const data_amount = render_data.vertexStart * componentPerVertex;
            const buffer = new Float32Array(data_amount);
            const alphaIndex = 6;

            for (let j = 0; j < data_amount; j++) {
              buffer[j] = j % componentPerVertex === alphaIndex ? render_data.vData[j] * this.node._uiProps.opacity : render_data.vData[j];
            }

            sub_models[idx].inputAssembler.vertexBuffers[0].update(buffer);
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "texture", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "lineMaterial", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class3)) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=096aa0a849167b7d1a5051023c98218e41e31f62.js.map