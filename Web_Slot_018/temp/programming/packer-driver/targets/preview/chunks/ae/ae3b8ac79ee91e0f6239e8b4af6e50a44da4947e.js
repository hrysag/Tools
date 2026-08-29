System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, CCInteger, Sprite, Vec2, LineSpriteAssembler, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _crd, ccclass, property, LineSprite;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLineSpriteAssembler(extras) {
    _reporterNs.report("LineSpriteAssembler", "./LineSpriteAssembler", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCFloat = _cc.CCFloat;
      CCInteger = _cc.CCInteger;
      Sprite = _cc.Sprite;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      LineSpriteAssembler = _unresolved_2.LineSpriteAssembler;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "347faFv3VpIlZ9A2/3KZvLr", "LineSprite", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'CCFloat', 'CCInteger', 'IUV', 'log', 'Sprite', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator); //enum LineType {
      //  tiled,
      //  repeat,
      //}

      _export("LineSprite", LineSprite = (_dec = ccclass("LineSprite"), _dec2 = property({
        type: Vec2,
        serializable: true,
        visible: false
      }), _dec3 = property({
        type: Vec2,
        serializable: true,
        visible: true,
        displayName: "連線圖示位置",
        tooltip: ""
      }), _dec4 = property({
        type: CCFloat,
        serializable: true,
        visible: false
      }), _dec5 = property({
        type: CCFloat,
        serializable: true,
        visible: true,
        displayName: "線段起始比例",
        step: 0.05
      }), _dec6 = property({
        type: CCFloat,
        serializable: true,
        visible: false
      }), _dec7 = property({
        type: CCFloat,
        serializable: true,
        visible: true,
        displayName: "線段結束比例",
        step: 0.05
      }), _dec8 = property({
        type: CCFloat,
        serializable: true,
        visible: false
      }), _dec9 = property({
        type: CCFloat,
        serializable: true,
        visible: true,
        displayName: "線寬"
      }), _dec10 = property({
        type: Vec2,
        serializable: true,
        visible: false
      }), _dec11 = property({
        type: Vec2,
        serializable: true,
        visible: false
      }), _dec12 = property({
        type: CCFloat,
        serializable: true,
        visible: false
      }), _dec13 = property({
        type: CCFloat,
        serializable: true,
        visible: false
      }), _dec14 = property({
        type: CCFloat,
        serializable: true,
        visible: false
      }), _dec15 = property({
        type: CCFloat,
        serializable: true,
        visible: false
      }), _dec16 = property({
        type: CCFloat,
        serializable: true,
        visible: false
      }), _dec17 = property({
        type: CCFloat,
        serializable: true,
        visible: false
      }), _dec18 = property({
        type: CCFloat,
        serializable: true,
        visible: false
      }), _dec19 = property({
        type: Vec2,
        serializable: true,
        visible: false
      }), _dec20 = property({
        type: Vec2,
        serializable: true,
        visible: false
      }), _dec21 = property({
        type: Vec2,
        serializable: true,
        visible: false
      }), _dec22 = property({
        type: CCInteger,
        serializable: true,
        visible: false
      }), _dec23 = property({
        type: CCInteger,
        serializable: true,
        visible: false
      }), _dec24 = property({
        type: CCFloat,
        serializable: true,
        visible: false
      }), _dec25 = property({
        type: CCFloat,
        serializable: true,
        visible: false
      }), _dec(_class = (_class2 = class LineSprite extends Sprite {
        constructor() {
          super(...arguments);

          //可設定參數
          //@property({ type: LineType, serializable: true, visible: false })
          //private _lineType: LineType = LineType.tiled;
          ////@property({ type: Vec2, serializable: true, visible: true, displayName: "線條類型", tooltip: "tiled 無花紋線條\nrepeat 無作用" })
          //get lineType(): LineType {
          //  return this._lineType;
          //}
          //set lineType(value: LineType) {
          //  this._lineType = value;
          //}
          _initializerDefineProperty(this, "_posList", _descriptor, this);

          _initializerDefineProperty(this, "_fillFirst", _descriptor2, this);

          _initializerDefineProperty(this, "_fillFinal", _descriptor3, this);

          _initializerDefineProperty(this, "_lineWidth", _descriptor4, this);

          //不可設定參數 資料
          //頂點資料
          _initializerDefineProperty(this, "_topPoints", _descriptor5, this);

          _initializerDefineProperty(this, "_bottomPoints", _descriptor6, this);

          _initializerDefineProperty(this, "_topLineLength", _descriptor7, this);

          _initializerDefineProperty(this, "_topLineTotalLength", _descriptor8, this);

          _initializerDefineProperty(this, "_bottomLineLength", _descriptor9, this);

          _initializerDefineProperty(this, "_bottomLineTotalLength", _descriptor10, this);

          _initializerDefineProperty(this, "_lineLength", _descriptor11, this);

          _initializerDefineProperty(this, "_lineTotalLength", _descriptor12, this);

          _initializerDefineProperty(this, "_lineDistanceX", _descriptor13, this);

          //標示結尾的指標
          this.finalPointIndex = 0;
          //圖片資料
          this.spriteStart = 0;
          this.spriteEnd = 1;
          this.spriteRange = 1;
          this.headWidth = 10;
          this.repeatWidth = 10;
          this.backWidth = 10;

          //頂點資訊
          _initializerDefineProperty(this, "_vertexData", _descriptor14, this);

          _initializerDefineProperty(this, "_topVertexData", _descriptor15, this);

          _initializerDefineProperty(this, "_bottomVertexData", _descriptor16, this);

          //
          _initializerDefineProperty(this, "_indexBuffer", _descriptor17, this);

          _initializerDefineProperty(this, "_uvData", _descriptor18, this);

          this.radianOffset = Math.PI / 2;
          this.angleCache = new Map();
          this.sinCache = new Map();
          this.cosCache = new Map();
        }

        onLoad() {
          super.onLoad();

          this._flushAssembler();
        }

        resetAssembler() {
          this._assembler = null;

          this._flushAssembler();
        }

        _flushAssembler() {
          var assembler = _crd && LineSpriteAssembler === void 0 ? (_reportPossibleCrUseOfLineSpriteAssembler({
            error: Error()
          }), LineSpriteAssembler) : LineSpriteAssembler; //this.setTransform();

          if (this._assembler !== assembler) {
            this.destroyRenderData();
            this._assembler = assembler;
          }

          if (!this._renderData) {
            if (this._assembler && this._assembler.createData) {
              this._renderData = this._assembler.createData(this);
              this._renderData.material = this.getRenderMaterial(0);
              this.markForUpdateRenderData();

              if (this.spriteFrame) {
                this._assembler.updateRenderData(this);
              }

              this._updateColor();
            }
          }
        }

        get posList() {
          return [...this._posList];
        }

        set posList(value) {
          this._posList = value;
          this.updateLinePoints();
          this.updateSprite();
        }

        get fillFirst() {
          return this._fillFirst;
        }

        set fillFirst(value) {
          value = value > this._fillFinal ? this._fillFinal : value;
          value = value < 0 ? 0 : value;
          value = value > 1 ? 1 : value;
          this._fillFirst = value.fixed();
          this.updateSprite();
        }

        get fillFinal() {
          return this._fillFinal;
        }

        set fillFinal(value) {
          value = value < this._fillFirst ? this._fillFirst : value;
          value = value < 0 ? 0 : value;
          value = value > 1 ? 1 : value;
          this._fillFinal = value.fixed();
          this.updateSprite();
        }

        get lineWidth() {
          return this._lineWidth;
        }

        set lineWidth(value) {
          this._lineWidth = value;
          this.updateLinePoints();
          this.updateSprite();
        }

        setSpriteRange() {
          var uvSliced = this.spriteFrame.uvSliced;
          var spriteWidth = this.spriteFrame.width;
          this.spriteStart = uvSliced[1].u;
          this.spriteEnd = uvSliced[1].u + (uvSliced[2].u - uvSliced[1].u);
          this.spriteRange = (this.spriteEnd - this.spriteStart).fixed();
          this.headWidth = this.spriteStart * spriteWidth;
          this.repeatWidth = this.spriteRange * spriteWidth;
          this.backWidth = (1 - this.spriteEnd) * spriteWidth;
        }

        get haveLineEnds() {
          if (!this.spriteFrame) {
            return false;
          }

          return this.headWidth !== 0;
        }

        get vertexData() {
          return this._vertexData;
        }

        get vertexCount() {
          return Math.ceil(this.vertexData.length / 2);
        }

        get indexBuffer() {
          if (this._indexBuffer.length === 0) {
            this.updateSprite();
          }

          return this._indexBuffer;
        }

        get uvData() {
          if (this._uvData.length === 0) {
            this.updateSprite();
          }

          return this._uvData;
        }

        //
        updateLinePoints() {
          this._topPoints = [];
          this._bottomPoints = [];
          var data = this.posList;

          for (var i = 0; i < data.length; i++) {
            var points = this.calculateExtendedPoints(data[i - 1], data[i], data[i + 1]);

            this._bottomPoints.push(points.bottom);

            this._topPoints.push(points.top);
          }

          this.calculateLineSegmentLength();
        }

        calculateLineSegmentLength() {
          this._lineDistanceX = 0;
          this._lineTotalLength = 0;
          this._topLineTotalLength = 0;
          this._bottomLineTotalLength = 0; //長度

          this._topLineLength = [];

          for (var i = 0; i < this._topPoints.length - 1; i++) {
            var segmentLength = Vec2.distance(this._topPoints[i], this._topPoints[i + 1]);

            this._topLineLength.push(segmentLength);

            this._topLineTotalLength += segmentLength;
          }

          this._bottomLineLength = [];

          for (var _i = 0; _i < this._bottomPoints.length - 1; _i++) {
            var _segmentLength = Vec2.distance(this._bottomPoints[_i], this._bottomPoints[_i + 1]);

            this._bottomLineLength.push(_segmentLength);

            this._bottomLineTotalLength += _segmentLength;
          }

          var posData = this._posList;
          var finalDataIndex = posData.length - 1;
          this._lineLength = [];

          for (var _i2 = 0; _i2 < finalDataIndex; _i2++) {
            var _segmentLength2 = Vec2.distance(posData[_i2], posData[_i2 + 1]);

            this._lineLength.push(_segmentLength2);

            this._lineTotalLength += _segmentLength2;
          }

          this._lineDistanceX = Math.abs(this._posList[0].x - this._posList[finalDataIndex].x);
        }

        updateSprite() {
          //參數
          this.setSpriteRange(); //頂點填充

          this.fillLine(); //UV

          this.fillUV(); //頂點順序索引

          this.GetIndexBuffer(); //標記此圖需重新渲染

          this.markForUpdateRenderData();
          this.resetAssembler();
        }

        fillLine() {
          //只計算X軸 線兩端所在X
          var fillFirst = this._lineDistanceX * this.fillFirst + this._posList[0].x;
          var fillFinal = this._lineDistanceX * this.fillFinal + this._posList[0].x; //根據X查找 線兩端具體位置

          var fillFirstPos = this.findPointByX(fillFirst);
          var fillFinalPos = this.findPointByX(fillFinal); //額外點

          var centerPos = []; //如果需要頭尾部分

          if (this.haveLineEnds) {
            //檢查長度是否足夠 容許完整頭尾呈現
            var currentLineLength = this._lineTotalLength * (this.fillFinal - this.fillFirst);

            if (currentLineLength > this.headWidth + this.backWidth) {
              //長度足夠就切出位置
              centerPos.push(this.findPointByDistance(false, this.headWidth, fillFirstPos));
              centerPos.push(this.findPointByDistance(true, this.backWidth, fillFinalPos));
            } else if (currentLineLength > 0) {
              //不夠的話從中間分半
              centerPos.push(this.findPointByDistance(false, currentLineLength / 2, fillFirstPos));
              centerPos.push(this.findPointByDistance(true, currentLineLength / 2, fillFinalPos));
            }
          }

          this.fillVertex(fillFirstPos, fillFinalPos, centerPos);
        }

        splitLineByLength() {
          var resultPoints = [];
          var accumulatedLength = 0; // 当前累积的长度

          var currentPoint = this._posList[0]; // 当前点

          var lastPoint = this._posList[0]; // 上一个点

          resultPoints.push(currentPoint); // 首先把起始点加入结果
          // 遍历每一段线段

          for (var i = 1; i < this._posList.length; i++) {
            var nextPoint = this._posList[i];
            var segmentDistance = this._lineLength[i];
            accumulatedLength += segmentDistance; // 在当前线段上插值，直到长度大于指定的段长

            while (accumulatedLength >= this.repeatWidth) {
              var ratio = this.repeatWidth / segmentDistance;
              var newX = lastPoint.x + (nextPoint.x - lastPoint.x) * ratio;
              var newY = lastPoint.y + (nextPoint.y - lastPoint.y) * ratio; // 插值后的点

              resultPoints.push(new Vec2(newX, newY)); // 更新累积长度，保持剩余部分继续插值

              accumulatedLength -= this.repeatWidth;
            }

            lastPoint = nextPoint; // 更新上一个点
          }

          return resultPoints;
        }

        fillVertex(fillFirstPos, fillFinalPos, centerPos) {
          this._vertexData = []; //多補的頭尾點

          var newFirst = null;
          var newFinal = null; //中間點

          var topCenter = [];
          var bottomCenter = [];

          for (var i = 0; i < centerPos.length; i++) {
            if (centerPos[i].index === null) {
              var newCenter = this.calculateExtendedPoints(this._posList[centerPos[i].indexLeft], centerPos[i].point, this._posList[centerPos[i].indexRight]);
              topCenter.push(newCenter.top);
              bottomCenter.push(newCenter.bottom);
            }
          } //要推入的原始資料範圍


          var firstIndex = 0;
          var finalIndex = 0; //index=空 就代表線兩端是新的點不存在原始資料裡

          if (fillFirstPos.index === null) {
            newFirst = this.calculateExtendedPoints(this._posList[fillFirstPos.indexLeft], fillFirstPos.point, this._posList[fillFirstPos.indexRight]);
            newFirst.bottom = this.extendedCheck(this._bottomPoints[fillFirstPos.indexLeft], newFirst.bottom, this._bottomPoints[fillFirstPos.indexRight]);
            newFirst.top = this.extendedCheck(this._topPoints[fillFirstPos.indexLeft], newFirst.top, this._topPoints[fillFirstPos.indexRight]);
            firstIndex = fillFirstPos.indexRight;
          } else {
            firstIndex = fillFirstPos.index;
          }

          if (fillFinalPos.index === null) {
            newFinal = this.calculateExtendedPoints(this._posList[fillFinalPos.indexLeft], fillFinalPos.point, this._posList[fillFinalPos.indexRight]);
            newFinal.bottom = this.extendedCheck(this._bottomPoints[fillFinalPos.indexLeft], newFinal.bottom, this._bottomPoints[fillFinalPos.indexRight]);
            newFinal.top = this.extendedCheck(this._topPoints[fillFinalPos.indexLeft], newFinal.top, this._topPoints[fillFinalPos.indexRight]);
            finalIndex = fillFinalPos.indexLeft;
          } else {
            finalIndex = fillFinalPos.index;
          } //先推底部


          if (newFirst) {
            this._vertexData.push(newFirst.bottom);
          }

          for (var index = firstIndex, centerIndex = 0; index <= finalIndex; index++) {
            var currentData = this._bottomPoints[index]; //中間的新點

            if (bottomCenter.length > 0) {
              while (currentData.x > bottomCenter[centerIndex].x) {
                var currentNewPoint = bottomCenter[centerIndex];

                if (centerIndex > 0 && fillFinalPos.index === null) {
                  currentNewPoint = this.extendedCheck(currentData, currentNewPoint, this._topPoints[fillFinalPos.indexRight]);
                }

                this._vertexData.push(currentNewPoint);

                centerIndex++;

                if (centerIndex >= bottomCenter.length) {
                  this.finalPointIndex = this._vertexData.length - 1;
                  break;
                }
              }
            } //原始資料


            this._vertexData.push(currentData); //新點 但比最後的原始資料位置靠後


            while (index === finalIndex && centerIndex < bottomCenter.length) {
              var nextPoint = newFinal ? newFinal.bottom : this._bottomPoints[finalIndex];

              var _currentNewPoint = this.extendedCheck(currentData, bottomCenter[centerIndex], nextPoint);

              this._vertexData.push(_currentNewPoint);

              this.finalPointIndex = this._vertexData.length - 1;
              centerIndex++;
            }
          }

          if (newFinal) {
            this._vertexData.push(newFinal.bottom);
          } //只推一個點 同時沒有新點


          if (firstIndex === finalIndex && !newFirst && !newFinal) {
            this._vertexData.push(this._bottomPoints[firstIndex]);
          } //再推頂部


          if (newFirst) {
            this._vertexData.push(newFirst.top);
          }

          for (var _index = firstIndex, _centerIndex = 0; _index <= finalIndex; _index++) {
            var _currentData = this._topPoints[_index]; //中間的新點

            if (topCenter.length > 0) {
              while (_currentData.x > topCenter[_centerIndex].x) {
                var _currentNewPoint2 = topCenter[_centerIndex];

                if (_centerIndex > 0 && fillFinalPos.index === null) {
                  _currentNewPoint2 = this.extendedCheck(_currentData, _currentNewPoint2, this._topPoints[fillFinalPos.indexRight]);
                }

                this._vertexData.push(_currentNewPoint2);

                _centerIndex++;

                if (_centerIndex >= topCenter.length) {
                  break;
                }
              }
            } //原始資料      


            this._vertexData.push(_currentData); //新點 但比最後的原始資料位置靠後


            while (_index === finalIndex && _centerIndex < topCenter.length) {
              var _nextPoint = newFinal ? newFinal.top : this._topPoints[finalIndex];

              var _currentNewPoint3 = this.extendedCheck(_currentData, topCenter[_centerIndex], _nextPoint);

              this._vertexData.push(_currentNewPoint3);

              _centerIndex++;
            }
          }

          if (newFinal) {
            this._vertexData.push(newFinal.top);
          } //只推一個點 同時沒有新點


          if (firstIndex === finalIndex && !newFirst && !newFinal) {
            this._vertexData.push(this._topPoints[firstIndex]);
          }
        }

        calculateExtendedPoints(previousPoint, currentPoint, nextPoint) {
          var previousRadian = 0;
          var nextRadian = 0;
          var gap = this._lineWidth / 2;

          if (previousPoint) {
            // 上個點和當前點的連線弧度
            previousRadian = this.calculateAngleBetweenTwoPoints(previousPoint, currentPoint);
          }

          if (nextPoint) {
            // 當前點和下個點的連線弧度
            nextRadian = this.calculateAngleBetweenTwoPoints(currentPoint, nextPoint);
          } // 計算垂直弧度


          var previousPerpendicular = previousRadian - this.radianOffset;
          var nextPerpendicular = nextRadian - this.radianOffset; // 計算延伸點

          var previousPoints = this.getPointsFromAngleAndLength(currentPoint, gap, previousPerpendicular);
          var nextPoints = this.getPointsFromAngleAndLength(currentPoint, gap, nextPerpendicular); // 計算交點

          var top = this.findIntersection(previousPoints.top, previousRadian, nextPoints.top, nextRadian + Math.PI);
          var bottom = this.findIntersection(previousPoints.bottom, previousRadian + Math.PI, nextPoints.bottom, nextRadian);
          return {
            top,
            bottom
          };
        }

        extendedCheck(previousPoint, currentPoint, nextPoint) {
          if (currentPoint.x < previousPoint.x) {
            return previousPoint;
          }

          if (currentPoint.x > nextPoint.x) {
            return nextPoint;
          }

          return currentPoint;
        }

        findPointByX(targetX) {
          var left = 0;
          var right = this._posList.length - 1; // 二分查找确定范围

          while (left < right - 1) {
            var mid = Math.floor((left + right) / 2);

            if (this._posList[mid].x < targetX) {
              left = mid;
            } else {
              right = mid;
            }
          }

          var point1 = this._posList[left];
          var point2 = this._posList[right]; // 如果目标 X 值是数组中的某个点，返回 null

          if (point1.x === targetX) {
            return {
              index: left,
              indexLeft: null,
              indexRight: null,
              point: point1
            }; // 精确命中
          }

          if (point2.x === targetX) {
            return {
              index: right,
              indexLeft: null,
              indexRight: null,
              point: point2
            }; // 精确命中
          } // 线性插值


          var t = (targetX - point1.x) / (point2.x - point1.x);
          var interpolatedY = point1.y + t * (point2.y - point1.y); // 返回 right 索引和插值点

          return {
            index: null,
            indexLeft: left,
            indexRight: right,
            point: new Vec2(targetX, interpolatedY) // 线性插值点

          };
        }

        findPointByDistance(startFromEnd, distance, startPoint) {
          var points = this._posList; // 點數組

          var totalPoints = points.length; // 初始化起點

          var currentIndex = startPoint.index !== null ? startPoint.index : startFromEnd ? startPoint.indexRight : startPoint.indexLeft;
          var remainingDistance = distance;
          var currentPoint = startPoint.index === null ? startPoint.point : points[currentIndex];

          while (true) {
            var nextIndex = startFromEnd ? currentIndex - 1 : currentIndex + 1; // 檢查是否超出範圍

            if (nextIndex < 0 || nextIndex >= totalPoints) {
              throw new Error("移動距離超出線段範圍");
            }

            var nextPoint = points[nextIndex]; // 計算當前段的距離

            var dx = nextPoint.x - currentPoint.x;
            var dy = nextPoint.y - currentPoint.y;
            var segmentDistanceSquared = dx * dx + dy * dy;
            var segmentDistance = Math.sqrt(segmentDistanceSquared);

            if (remainingDistance === segmentDistance) {
              // 剛好命中下一個點
              return {
                index: nextIndex,
                indexLeft: startFromEnd ? nextIndex : currentIndex,
                indexRight: startFromEnd ? currentIndex : nextIndex,
                point: nextPoint
              };
            } else if (remainingDistance < segmentDistance) {
              // 目標點在當前段內，插值計算
              var ratio = remainingDistance / segmentDistance; // 計算插值點

              var interpolatedPoint = new Vec2(currentPoint.x + dx * ratio, currentPoint.y + dy * ratio);
              return {
                index: null,
                indexLeft: startFromEnd ? nextIndex : currentIndex,
                indexRight: startFromEnd ? currentIndex : nextIndex,
                point: interpolatedPoint
              };
            } // 剩餘距離大於當前段，繼續前進


            remainingDistance -= segmentDistance;
            currentPoint = nextPoint;
            currentIndex = nextIndex;
          }
        }

        fillUV() {
          //先推底部再推頂部
          this._uvData = [];

          if (this._vertexData.length === 0) {
            return;
          }

          var uvData = [];

          if (this.haveLineEnds
          /* || 是重複類型 */
          ) {
            uvData = this.tiledHaveLineEndsUV(this._vertexData);
          } else {
            uvData = this.tiledUV(this._vertexData.length / 2);
          }

          this._uvData = [...uvData, ...uvData];
        }

        tiledUV(length) {
          var result = [];

          for (var i = 0; i < length; i++) {
            result.push(i % 2 === 0 ? 0 : 1);
          }

          return result;
        }

        tiledHaveLineEndsUV(vertexData) {
          this._uvData = [];
          var result = [0, this.spriteStart];
          var spriteWidth = this.spriteFrame.width;
          var currentLineLength = this._lineTotalLength * (this.fillFinal - this.fillFirst);

          if (currentLineLength <= this.headWidth + this.backWidth) {
            var halfLength = currentLineLength * 0.5;
            var uvRatioInRepeatSegment = halfLength / spriteWidth;
            var headCenter = 0 + uvRatioInRepeatSegment;
            var backCenter = 1 - uvRatioInRepeatSegment;
            return [0, headCenter, backCenter, 1];
          }

          for (var index = 1; index < vertexData.length / 2 - 2; index++) {
            var current = vertexData[index];
            var next = vertexData[index + 1];
            var distance = Vec2.distance(current, next).fixed();

            if (index === this.finalPointIndex - 1) {
              result.push(this.spriteEnd);
            } else if (index === this.finalPointIndex) {
              var previousResult = result[result.length - 1];

              if (distance === 0) {
                result.push(1);
              } else {
                var _uvRatioInRepeatSegment = distance / spriteWidth;

                var fillPos = (previousResult + (1 - this.spriteEnd - _uvRatioInRepeatSegment)).fixed();

                result.push(fillPos);
              }
            } else {
              result.push(index % 2 === 0 ? this.spriteStart : this.spriteEnd);
            }
          }

          result.push(1);
          return result;
        }

        repeatUV(length) {
          var result = [];

          for (var i = 0; i < length; i++) {
            result.push(i % 2 === 0 ? 0 : 1);
          }

          return result;
        } // 构造网格的顶点索引列表


        GetIndexBuffer() {
          var rows = 2;
          var cols = this.vertexCount;
          var indexBuffer = [];
          var index = 0;

          for (var i = 0; i < rows - 1; i++) {
            for (var j = 0; j < cols - 1; j++) {
              var p1 = i * cols + j;
              var p2 = i * cols + j + 1;
              var p3 = (i + 1) * cols + j;
              var p4 = (i + 1) * cols + j + 1;
              indexBuffer[index++] = p1;
              indexBuffer[index++] = p2;
              indexBuffer[index++] = p3;
              indexBuffer[index++] = p2;
              indexBuffer[index++] = p4;
              indexBuffer[index++] = p3;
            }
          }

          this._indexBuffer = [...indexBuffer];
        }

        calculateAngleBetweenTwoPoints(A, B) {
          if (!A || !B) {
            return 0;
          }

          var key = this.createKey(A, B);

          if (this.angleCache.has(key)) {
            return this.angleCache.get(key);
          }

          var deltaX = B.x - A.x;
          var deltaY = B.y - A.y;
          var angleInRadians = Math.atan2(deltaY, deltaX);
          this.angleCache.set(key, angleInRadians);
          return angleInRadians;
        }

        createKey(A, B) {
          if (A.x > B.x || A.x === B.x && A.y > B.y) {
            [A, B] = [B, A];
          }

          return A.x + "," + A.y + "-" + B.x + "," + B.y;
        }

        getSinAndCos(theta) {
          if (this.sinCache.has(theta) && this.cosCache.has(theta)) {
            return {
              sin: this.sinCache.get(theta),
              cos: this.cosCache.get(theta)
            };
          }

          var sin = Math.sin(theta);
          var cos = Math.cos(theta);
          this.sinCache.set(theta, sin);
          this.cosCache.set(theta, cos);
          return {
            sin,
            cos
          };
        }

        findIntersection(p1, theta1, p2, theta2) {
          if (p1.equals(p2)) {
            return p1;
          }

          var dx = p2.x - p1.x;
          var dy = p2.y - p1.y;
          var {
            sin: sin1,
            cos: cos1
          } = this.getSinAndCos(theta1);
          var {
            sin: sin2,
            cos: cos2
          } = this.getSinAndCos(theta2);
          var det = -sin2 * cos1 + sin1 * cos2;
          var EPSILON = 1e-6;

          if (Math.abs(det) < EPSILON) {
            console.warn("Lines are nearly parallel: det=" + det);
            return null;
          }

          var t1 = (-sin2 * dx + cos2 * dy) / det;
          return new Vec2(p1.x + t1 * cos1, p1.y + t1 * sin1);
        }

        getPointsFromAngleAndLength(startPoint, width, theta) {
          var {
            sin,
            cos
          } = this.getSinAndCos(theta);
          var top = new Vec2(startPoint.x - width * cos, startPoint.y - width * sin);
          var bottom = new Vec2(startPoint.x + width * cos, startPoint.y + width * sin);
          return {
            top,
            bottom
          };
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_posList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [new Vec2(-50, 0), new Vec2(50, 0)];
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "posList", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "posList"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_fillFirst", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "fillFirst", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "fillFirst"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_fillFinal", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "fillFinal", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "fillFinal"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_lineWidth", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "lineWidth", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "lineWidth"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_topPoints", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [new Vec2(-50, 50), new Vec2(50, 50)];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_bottomPoints", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [new Vec2(-50, -50), new Vec2(50, -50)];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_topLineLength", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [100];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_topLineTotalLength", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_bottomLineLength", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [100];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_bottomLineTotalLength", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_lineLength", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [100];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "_lineTotalLength", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "_lineDistanceX", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "_vertexData", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [new Vec2(-50, -50), new Vec2(50, -50), new Vec2(-50, 50), new Vec2(50, 50)];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "_topVertexData", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [new Vec2(-50, 50), new Vec2(50, 50)];
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "_bottomVertexData", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [new Vec2(-50, -50), new Vec2(50, -50)];
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "_indexBuffer", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [0, 1, 2, 1, 3, 2];
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "indexBuffer", [_dec23], Object.getOwnPropertyDescriptor(_class2.prototype, "indexBuffer"), _class2.prototype), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "_uvData", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "uvData", [_dec25], Object.getOwnPropertyDescriptor(_class2.prototype, "uvData"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ae3b8ac79ee91e0f6239e8b4af6e50a44da4947e.js.map