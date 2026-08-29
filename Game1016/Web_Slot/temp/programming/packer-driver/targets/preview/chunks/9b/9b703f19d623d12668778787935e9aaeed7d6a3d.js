System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCBoolean, CCFloat, CCInteger, gfx, RenderData, Sprite, UITransform, Vec2, simpleLineSpriteAssembler, BasePointData, ExtendedPointData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _class3, _class4, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _crd, ccclass, property, RADIAN_OFFSET, vfmtPosTwoUvColor, SimpleLineSprite;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfsimpleLineSpriteAssembler(extras) {
    _reporterNs.report("simpleLineSpriteAssembler", "./SimpleLineSpriteAssembler", _context.meta, extras);
  }

  _export({
    BasePointData: void 0,
    ExtendedPointData: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCBoolean = _cc.CCBoolean;
      CCFloat = _cc.CCFloat;
      CCInteger = _cc.CCInteger;
      gfx = _cc.gfx;
      RenderData = _cc.RenderData;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      simpleLineSpriteAssembler = _unresolved_2.simpleLineSpriteAssembler;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "03e62gr31VBn52R6mpyp3uX", "SimpleLineSprite", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'CCFloat', 'CCInteger', 'Color', 'gfx', 'log', 'Material', 'RenderData', 'Sprite', 'SpriteFrame', 'UITransform', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);
      RADIAN_OFFSET = Math.PI / 2;
      vfmtPosTwoUvColor = [new gfx.Attribute(gfx.AttributeName.ATTR_POSITION, gfx.Format.RGB32F), new gfx.Attribute(gfx.AttributeName.ATTR_TEX_COORD, gfx.Format.RG32F), new gfx.Attribute(gfx.AttributeName.ATTR_COLOR, gfx.Format.RGBA32F), new gfx.Attribute(gfx.AttributeName.ATTR_TEX_COORD2, gfx.Format.RG32F)]; // #region 延伸點資料結構

      /**
       * 描述該點是否為額外產生
       */

      _export("BasePointData", BasePointData = class BasePointData {
        constructor() {
          /**
           * 若為精準命中，為該點的索引，否則為 null
           */
          this.index = null;

          /**
           * 插值左點的索引（若為插值），否則為 null
           */
          this.indexLeft = null;

          /**
           * 插值右點的索引（若為插值），否則為 null
           */
          this.indexRight = null;
        }

      });
      /**
       * 點拓展出的上下兩點
       */


      _export("ExtendedPointData", ExtendedPointData = class ExtendedPointData extends BasePointData {
        constructor() {
          super(...arguments);

          /**
          * 用於拓展的原始點
          */
          this.originPoint = null;

          /**
           * 最終取樣結果的 Vec2 座標 (上)
           */
          this.topPoint = null;

          /**
          * 最終取樣結果的 Vec2 座標 (下)
          */
          this.bottomPoint = null;
        }

      }); // #endregion


      _export("SimpleLineSprite", SimpleLineSprite = (_dec = ccclass('SimpleLineSprite'), _dec2 = property({
        type: Vec2,
        serializable: true,
        visible: false
      }), _dec3 = property({
        type: Vec2,
        serializable: true,
        visible: true,
        displayName: "組成線的座標",
        tooltip: "至少要兩個點",
        group: "得分線設定"
      }), _dec4 = property({
        type: CCFloat,
        serializable: true,
        visible: false
      }), _dec5 = property({
        type: CCFloat,
        serializable: true,
        visible: true,
        displayName: "線寬",
        group: "得分線設定"
      }), _dec6 = property({
        type: Vec2,
        serializable: true,
        visible: false,
        group: "得分線設定"
      }), _dec7 = property({
        type: CCInteger,
        serializable: true,
        visible: false
      }), _dec8 = property({
        type: CCInteger,
        serializable: true,
        visible: false,
        group: "得分線設定"
      }), _dec9 = property({
        type: CCFloat,
        serializable: true,
        visible: false
      }), _dec10 = property({
        type: CCFloat,
        serializable: true,
        visible: false,
        group: "得分線設定"
      }), _dec11 = property({
        type: CCFloat,
        serializable: true,
        visible: false
      }), _dec12 = property({
        type: CCFloat,
        serializable: true,
        visible: true,
        displayName: "線段起始比例",
        step: 0.05,
        group: "得分線設定"
      }), _dec13 = property({
        type: CCFloat,
        serializable: true,
        visible: false
      }), _dec14 = property({
        type: CCFloat,
        serializable: true,
        visible: true,
        displayName: "線段結束比例",
        step: 0.05,
        group: "得分線設定"
      }), _dec15 = property({
        type: CCFloat,
        serializable: true,
        visible: false,
        group: "得分線設定"
      }), _dec16 = property({
        serializable: true,
        visible: false
      }), _dec17 = property({
        serializable: true,
        visible: false
      }), _dec18 = property({
        visible: false
      }), _dec19 = property({
        visible: false,
        displayName: "最大座標",
        group: "得分線設定"
      }), _dec20 = property({
        visible: false
      }), _dec21 = property({
        visible: false,
        displayName: "最小座標",
        group: "得分線設定"
      }), _dec22 = property({
        serializable: true,
        visible: false
      }), _dec23 = property({
        serializable: true,
        visible: false
      }), _dec24 = property({
        type: CCBoolean,
        serializable: true,
        visible: true,
        displayName: "計算刷光UV",
        group: "得分線刷光設定",
        tooltip: ""
      }), _dec25 = property({
        visible: false
      }), _dec26 = property({
        visible: false
      }), _dec27 = property({
        type: Vec2,
        visible: true,
        displayName: "加色貼圖UV",
        group: "得分線刷光設定"
      }), _dec(_class3 = (_class4 = class SimpleLineSprite extends Sprite {
        constructor() {
          super(...arguments);

          // #region 跑線本體
          //設定
          _initializerDefineProperty(this, "_posList", _descriptor, this);

          _initializerDefineProperty(this, "_lineWidth", _descriptor2, this);

          //頂點資訊
          _initializerDefineProperty(this, "_vertexData", _descriptor3, this);

          //頂點順序
          _initializerDefineProperty(this, "_indexBuffer", _descriptor4, this);

          //UV資料
          _initializerDefineProperty(this, "_uvData", _descriptor5, this);

          _initializerDefineProperty(this, "_fillFirst", _descriptor6, this);

          _initializerDefineProperty(this, "_fillFinal", _descriptor7, this);

          _initializerDefineProperty(this, "_lineDistanceX", _descriptor8, this);

          _initializerDefineProperty(this, "_sampledData", _descriptor9, this);

          _initializerDefineProperty(this, "_sampledFinalData", _descriptor10, this);

          _initializerDefineProperty(this, "_maxPos", _descriptor11, this);

          _initializerDefineProperty(this, "_minPos", _descriptor12, this);

          this.minX = Number.POSITIVE_INFINITY;
          this.minY = Number.POSITIVE_INFINITY;
          this.maxX = Number.NEGATIVE_INFINITY;
          this.maxY = Number.NEGATIVE_INFINITY;

          _initializerDefineProperty(this, "selfUITransform", _descriptor13, this);

          // #endregion
          // #region 跑線用刷光的UV計算
          _initializerDefineProperty(this, "_isAdditive", _descriptor14, this);

          _initializerDefineProperty(this, "_addTextureUValues", _descriptor15, this);

          _initializerDefineProperty(this, "_addTextureUVVec2Array", _descriptor16, this);

          // #endregion
          // #region 計算角度 交點
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
        } //這邊基本照抄


        _flushAssembler() {
          var self = this; //只有這段不一樣 官方是用 Sprite.Assembler.getAssembler(self) 來抓到當前圖片類型使用的渲染資料
          //直接改成自己定義的

          var assembler = _crd && simpleLineSpriteAssembler === void 0 ? (_reportPossibleCrUseOfsimpleLineSpriteAssembler({
            error: Error()
          }), simpleLineSpriteAssembler) : simpleLineSpriteAssembler;

          if (self._assembler !== assembler) {
            self.destroyRenderData();
            self._assembler = assembler;
          }

          if (!self._renderData) {
            if (assembler && assembler.createData) {
              var rd = self._renderData = assembler.createData(self);
              rd.material = self.getRenderMaterial(0);
              self.markForUpdateRenderData();

              if (self.spriteFrame) {
                assembler.updateUVs(self);
              }

              self._updateColor();
            }
          }
        }

        requestRenderData(drawInfoType
        /* COMP 用數字替代 因為抓不到那個enum */
        ) {
          if (drawInfoType === void 0) {
            drawInfoType = 0;
          }

          if (!this._isAdditive === null) {
            return super.requestRenderData(drawInfoType);
          }

          var data = RenderData.add(vfmtPosTwoUvColor);
          data.initRenderDrawInfo(this, drawInfoType);
          this._renderData = data;
          return data;
        }

        get posList() {
          return [...this._posList];
        }

        set posList(value) {
          var finalDataIndex = value.length - 1;

          if (finalDataIndex >= 1) {
            this._lineDistanceX = Math.abs(value[0].x - value[finalDataIndex].x);
            this._posList = value;
            this.updateFullLineGeometry();
          }
        }

        get lineWidth() {
          return this._lineWidth;
        }

        set lineWidth(value) {
          this._lineWidth = value;
          this.updateFullLineGeometry();
        }

        get vertexData() {
          return this._vertexData;
        }

        get vertexCount() {
          return Math.ceil(this.vertexData.length / 2);
        }

        get indexBuffer() {
          return this._indexBuffer;
        }

        get uvData() {
          return this._uvData;
        }

        get fillFirst() {
          return this._fillFirst;
        }

        set fillFirst(value) {
          value = value > this._fillFinal ? this._fillFinal : value;
          value = value < 0 ? 0 : value;
          value = value > 1 ? 1 : value;
          this._fillFirst = value.fixed();
          this.updateVisibleSegment();
        }

        get fillFinal() {
          return this._fillFinal;
        }

        set fillFinal(value) {
          value = value < this._fillFirst ? this._fillFirst : value;
          value = value < 0 ? 0 : value;
          value = value > 1 ? 1 : value;
          this._fillFinal = value.fixed();
          this.updateVisibleSegment();
        }

        get maxPos() {
          return this._maxPos;
        }

        get minPos() {
          return this._minPos;
        }

        /**
        * - 根據設定 產生幾何資料
        * - 相當於整條線的資料重新計算
        */
        updateFullLineGeometry() {
          this.minX = Number.POSITIVE_INFINITY;
          this.minY = Number.POSITIVE_INFINITY;
          this.maxX = Number.NEGATIVE_INFINITY;
          this.maxY = Number.NEGATIVE_INFINITY;
          this._sampledData = []; //生成基礎線圖

          for (var i = 0; i < this.posList.length; i++) {
            var sampledData = this.calculateExtendedPoints(this.posList[i - 1], this.posList[i], this.posList[i + 1]);
            sampledData.originPoint = this.posList[i];
            sampledData.index = i;

            this._sampledData.push(sampledData);
          } //做範圍限制 防止破圖


          var dataAmount = this._sampledData.length - 1;

          for (var _i = 0; _i <= dataAmount; _i++) {
            var nextTop = _i >= dataAmount ? null : this._sampledData[_i + 1].topPoint;
            var previousTop = _i === 0 ? null : this._sampledData[_i - 1].topPoint;
            this._sampledData[_i].topPoint = this.extendedCheck(previousTop, this._sampledData[_i].topPoint, nextTop);
            var nextBottom = _i >= dataAmount ? null : this._sampledData[_i + 1].bottomPoint;
            var previousBottom = _i === 0 ? null : this._sampledData[_i - 1].bottomPoint;
            this._sampledData[_i].bottomPoint = this.extendedCheck(previousBottom, this._sampledData[_i].bottomPoint, nextBottom); //獲取這個線的邊界位置

            this.minX = Math.min(this.minX, this._sampledData[_i].topPoint.x, this._sampledData[_i].bottomPoint.x);
            this.minY = Math.min(this.minY, this._sampledData[_i].topPoint.y, this._sampledData[_i].bottomPoint.y);
            this.maxX = Math.max(this.maxX, this._sampledData[_i].topPoint.x, this._sampledData[_i].bottomPoint.x);
            this.maxY = Math.max(this.maxY, this._sampledData[_i].topPoint.y, this._sampledData[_i].bottomPoint.y);
          }

          this._maxPos = new Vec2(this.maxX, this.maxY);
          this._minPos = new Vec2(this.minX, this.minY);
          this.updateVisibleSegment();
        }
        /**
        * - 根據顯示範圍 對幾何資料做切割
        * - 只計算頭尾兩點的資料 再將原資料需要顯示的範圍加入
        */


        updateVisibleSegment() {
          if (this._sampledData.length === 0) {
            this.updateFullLineGeometry();
          } //只計算X軸 線兩端所在X


          var fillFirst = this._lineDistanceX * this.fillFirst + this._posList[0].x;
          var fillFinal = this._lineDistanceX * this.fillFinal + this._posList[0].x; //根據X查找 端點在線上的具體位置
          //要顯示的線最左與最右的點

          var fillFirstPos = this.findPointByX(fillFirst);
          var fillFinalPos = this.findPointByX(fillFinal);
          var firstPoint = this.calculateTwoEndPointsExtendedPoints(fillFirstPos);
          var finalPoint = this.calculateTwoEndPointsExtendedPoints(fillFinalPos);
          this.buildRangeData(firstPoint, finalPoint);
          this.fillVertex();
          this.fillUV();
          this.GetIndexBuffer(); //刷光有修正大小功能需要對應 UITransform 所以算一下
          //不管線如何都視為 高度為線寬的長方形

          this.updateUITransform();
          this.updateAddTextureUVs(); //標記此圖需重新渲染

          this.markForUpdateRenderData();
          this.resetAssembler();
        }

        updateUITransform() {
          if (this.selfUITransform === null) {
            this.selfUITransform = this.node.getComponent(UITransform);
          }

          if (this._sampledFinalData.length === 0) return; // 計算 X 軸總長度

          var firstX = this._sampledFinalData[0].originPoint.x;
          var lastX = this._sampledFinalData[this._sampledFinalData.length - 1].originPoint.x;
          var totalWidth = Math.abs(lastX - firstX); // 更新 UITransform

          this.selfUITransform.width = totalWidth;
          this.selfUITransform.height = this._lineWidth;
        }
        /**
        * - 根據線寬、上一個點、下一個點 拿到該點延伸出的兩點
        */


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


          var previousPerpendicular = previousRadian - RADIAN_OFFSET;
          var nextPerpendicular = nextRadian - RADIAN_OFFSET; // 計算延伸點

          var previousPoints = this.getPointsFromAngleAndLength(currentPoint, gap, previousPerpendicular);
          var nextPoints = this.getPointsFromAngleAndLength(currentPoint, gap, nextPerpendicular); // 計算交點

          var top = this.findIntersection(previousPoints.top, previousRadian, nextPoints.top, nextRadian + Math.PI);
          var bottom = this.findIntersection(previousPoints.bottom, previousRadian + Math.PI, nextPoints.bottom, nextRadian);
          var data = new ExtendedPointData();
          var finalTop = top != null ? top : new Vec2(currentPoint.x, currentPoint.y + gap);
          var finalBottom = bottom != null ? bottom : new Vec2(currentPoint.x, currentPoint.y - gap);

          if (finalTop.y < finalBottom.y) {
            // 可能會顛倒 直接交換
            // 目前的橫向生成 Y軸大就肯定是上面  
            [finalTop, finalBottom] = [finalBottom, finalTop];
          }

          data.topPoint = finalTop;
          data.bottomPoint = finalBottom;
          return data;
        }
        /**
        * - 要保證目標位置最小=第1個點 最大=最後一個點
        * - 如果 targetX 恰好等於某個點的 x 值，則回傳該點。
        * - 否則回傳 targetX 在兩點之間插值得出的 Vec2。
        */


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
          var point2 = this._posList[right];
          var data = new ExtendedPointData(); // 如果目标 X 值是数组中的某个点，返回 null

          if (point1.x === targetX) {
            data.originPoint = point1;
            data.index = left;
            return data; // 精确命中
          }

          if (point2.x === targetX) {
            data.originPoint = point2;
            data.index = right;
            return data; // 精确命中
          } // 线性插值


          var t = (targetX - point1.x) / (point2.x - point1.x);
          var interpolatedY = point1.y + t * (point2.y - point1.y);
          data.indexLeft = left;
          data.indexRight = right;
          data.originPoint = new Vec2(targetX, interpolatedY); // 返回 right 索引和插值点

          return data; // 线性插值点
        }

        calculateTwoEndPointsExtendedPoints(data) {
          var result = null;

          if (data.index !== null) {
            //原來就有的點
            result = this._sampledData[data.index];
          } else {
            //插值點
            var previousPoint = this.posList[data.indexLeft];
            var nextPoint = this.posList[data.indexRight];
            var currentPoint = data.originPoint;
            result = this.calculateExtendedPoints(previousPoint, currentPoint, nextPoint);
            result.originPoint = data.originPoint;
            result.indexRight = data.indexRight;
            result.indexLeft = data.indexLeft; //對新點做範圍限制

            result.topPoint = this.extendedCheck(this._sampledData[data.indexLeft].topPoint, result.topPoint, this._sampledData[data.indexRight].topPoint);
            result.bottomPoint = this.extendedCheck(this._sampledData[data.indexLeft].bottomPoint, result.bottomPoint, this._sampledData[data.indexRight].bottomPoint);
          }

          return result;
        }
        /**
        * - 限制點的範圍
        */


        extendedCheck(previousPoint, currentPoint, nextPoint) {
          if (previousPoint && currentPoint.x < previousPoint.x) {
            return previousPoint;
          }

          if (nextPoint && currentPoint.x > nextPoint.x) {
            return nextPoint;
          }

          return currentPoint;
        }
        /**
        * - 傳入線頭尾 兩個延伸資料
        * - 將原始資料包含在內的取出 = 最終顯示用到的資料
        */


        buildRangeData(firstPoint, finalPoint) {
          this._sampledFinalData = [firstPoint];
          var startIndex = firstPoint.index === null ? firstPoint.indexRight : firstPoint.index + 1;
          var endIndex = finalPoint.index === null ? finalPoint.indexLeft : finalPoint.index - 1;

          while (startIndex <= endIndex) {
            this._sampledFinalData.push(this._sampledData[startIndex]);

            startIndex++;
          }

          this._sampledFinalData.push(finalPoint);
        }
        /**
        * - 填頂點資料
        */


        fillVertex() {
          this._vertexData = []; //先推底部

          for (var i = 0; i < this._sampledFinalData.length; i++) {
            this._vertexData.push(this._sampledFinalData[i].bottomPoint);
          } //再推頂部


          for (var _i2 = 0; _i2 < this._sampledFinalData.length; _i2++) {
            this._vertexData.push(this._sampledFinalData[_i2].topPoint);
          }
        }
        /**
        * - 填UV資料 (這裡只有處理U 在IAssembler才處理V)
        */


        fillUV() {
          //先推底部再推頂部
          this._uvData = [];

          if (this._vertexData.length === 0) {
            return;
          }

          var tiledUV = this.tiledUV(this._vertexData.length / 2);
          this._uvData = [...tiledUV, ...tiledUV];
        }
        /**
        * - 平鋪的UV
        */


        tiledUV(length) {
          var result = [];

          for (var i = 0; i < length; i++) {
            result.push(i % 2 === 0 ? 0 : 1);
          }

          return result;
        }
        /**
        * - 构造网格的顶点索引列表
        */


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

        get isAdditive() {
          return this._isAdditive;
        }

        set isAdditive(value) {
          this._isAdditive = value;
          this.updateAddTextureUVs();
        }

        get addTextureUVs() {
          return this._addTextureUVVec2Array;
        }
        /**
        * - _isAdditive 
        * - 兩個入口(set add_texture) (updateFullLineGeometry)
        */


        updateAddTextureUVs() {
          if (!this._isAdditive) {
            return;
          }

          if (this._sampledFinalData.length === 0) return; //U軸資訊

          var positions = this._sampledFinalData.map(p => p.originPoint.x);

          var max = positions[positions.length - 1];
          var min = positions[0];
          this._addTextureUValues = positions.map(x => (x - min) / (max - min)); //UV 推2次 下面的V是0 上面的V是1 先下後上

          this._addTextureUVVec2Array = [];

          for (var v = 0; v <= 1; v++) {
            for (var index = 0; index < this._addTextureUValues.length; index++) {
              this._addTextureUVVec2Array.push(new Vec2(this._addTextureUValues[index], v));
            }
          }
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
            return null;
          }

          var t1 = (-sin2 * dx + cos2 * dy) / det;
          return new Vec2(p1.x + t1 * cos1, p1.y + t1 * sin1);
        } // #endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class4.prototype, "_posList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [new Vec2(-50, 0), new Vec2(50, 0)];
        }
      }), _applyDecoratedDescriptor(_class4.prototype, "posList", [_dec3], Object.getOwnPropertyDescriptor(_class4.prototype, "posList"), _class4.prototype), _descriptor2 = _applyDecoratedDescriptor(_class4.prototype, "_lineWidth", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _applyDecoratedDescriptor(_class4.prototype, "lineWidth", [_dec5], Object.getOwnPropertyDescriptor(_class4.prototype, "lineWidth"), _class4.prototype), _descriptor3 = _applyDecoratedDescriptor(_class4.prototype, "_vertexData", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [new Vec2(-50, -50), new Vec2(50, -50), new Vec2(-50, 50), new Vec2(50, 50)];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class4.prototype, "_indexBuffer", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [0, 1, 2, 1, 3, 2];
        }
      }), _applyDecoratedDescriptor(_class4.prototype, "indexBuffer", [_dec8], Object.getOwnPropertyDescriptor(_class4.prototype, "indexBuffer"), _class4.prototype), _descriptor5 = _applyDecoratedDescriptor(_class4.prototype, "_uvData", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [0, 1, 0, 1];
        }
      }), _applyDecoratedDescriptor(_class4.prototype, "uvData", [_dec10], Object.getOwnPropertyDescriptor(_class4.prototype, "uvData"), _class4.prototype), _descriptor6 = _applyDecoratedDescriptor(_class4.prototype, "_fillFirst", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class4.prototype, "fillFirst", [_dec12], Object.getOwnPropertyDescriptor(_class4.prototype, "fillFirst"), _class4.prototype), _descriptor7 = _applyDecoratedDescriptor(_class4.prototype, "_fillFinal", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class4.prototype, "fillFinal", [_dec14], Object.getOwnPropertyDescriptor(_class4.prototype, "fillFinal"), _class4.prototype), _descriptor8 = _applyDecoratedDescriptor(_class4.prototype, "_lineDistanceX", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class4.prototype, "_sampledData", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class4.prototype, "_sampledFinalData", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class4.prototype, "_maxPos", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(50, 50);
        }
      }), _applyDecoratedDescriptor(_class4.prototype, "maxPos", [_dec19], Object.getOwnPropertyDescriptor(_class4.prototype, "maxPos"), _class4.prototype), _descriptor12 = _applyDecoratedDescriptor(_class4.prototype, "_minPos", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(-50, -50);
        }
      }), _applyDecoratedDescriptor(_class4.prototype, "minPos", [_dec21], Object.getOwnPropertyDescriptor(_class4.prototype, "minPos"), _class4.prototype), _descriptor13 = _applyDecoratedDescriptor(_class4.prototype, "selfUITransform", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class4.prototype, "_isAdditive", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class4.prototype, "isAdditive", [_dec24], Object.getOwnPropertyDescriptor(_class4.prototype, "isAdditive"), _class4.prototype), _descriptor15 = _applyDecoratedDescriptor(_class4.prototype, "_addTextureUValues", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [0, 1];
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class4.prototype, "_addTextureUVVec2Array", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [new Vec2(0, 0), new Vec2(1, 0), new Vec2(0, 1), new Vec2(1, 1)];
        }
      }), _applyDecoratedDescriptor(_class4.prototype, "addTextureUVs", [_dec27], Object.getOwnPropertyDescriptor(_class4.prototype, "addTextureUVs"), _class4.prototype)), _class4)) || _class3));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9b703f19d623d12668778787935e9aaeed7d6a3d.js.map