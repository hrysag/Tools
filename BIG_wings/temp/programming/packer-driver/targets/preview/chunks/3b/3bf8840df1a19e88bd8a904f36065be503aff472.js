System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, TextureLineGraphics, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, LineRope;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTextureLineGraphics(extras) {
    _reporterNs.report("TextureLineGraphics", "../components/TextureLineGraphics/script/TextureLineGraphics", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      TextureLineGraphics = _unresolved_2.TextureLineGraphics;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b4c330/7AhGM41rd76RViHd", "LineRope", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LineRope", LineRope = (_dec = ccclass('LineRope'), _dec2 = property({
        type: Number,
        tooltip: "left and right segment length"
      }), _dec3 = property({
        type: Number,
        tooltip: "width between wheelItems"
      }), _dec4 = property({
        type: Number,
        tooltip: "height between wheelItems"
      }), _dec5 = property({
        type: Number,
        tooltip: "num of wheelItems in one wheel"
      }), _dec(_class = (_class2 = class LineRope extends Component {
        constructor() {
          super(...arguments);
          this.ropeGraphic = void 0;
          this.points = void 0;
          this.segmentSide = void 0;
          this.eachSegmentHeight = void 0;
          this.tempPointUpDownLength = void 0;
          this.tempPointsLength = void 0;
          this.tempCheckUpDown = void 0;
          this.tempNowSideLength = void 0;

          _initializerDefineProperty(this, "segmentLengthLR", _descriptor, this);

          _initializerDefineProperty(this, "segmentWidth", _descriptor2, this);

          _initializerDefineProperty(this, "segmentHeight", _descriptor3, this);

          _initializerDefineProperty(this, "wheelItemNum", _descriptor4, this);
        }

        /**
         * Fold the Line
         * @param foldAry array length based on wheel length, ex: [0,1,2,2,1] as 5 wheels 3 items
         */
        foldLine(foldAry) {
          this.points = [];

          for (var index = 0; index < foldAry.length; index++) {
            this.eachSegmentHeight = -foldAry[index] * this.segmentHeight;

            if (index == 0) {
              for (var i = 0; i < 2; i++) {
                this.points[i] = new Vec3(i * this.segmentLengthLR, this.eachSegmentHeight);
              }
            } else {
              this.tempPointsLength = this.points.length;
              this.tempCheckUpDown = foldAry[index] - foldAry[index - 1];
              this.tempNowSideLength = this.segmentSide[Math.abs(this.tempCheckUpDown)];

              if (this.tempCheckUpDown > 0) {
                this.tempPointUpDownLength = -this.segmentHeight * Math.abs(this.tempCheckUpDown);
              } else if (this.tempCheckUpDown < 0) {
                this.tempPointUpDownLength = this.segmentHeight * Math.abs(this.tempCheckUpDown);
              } else {
                this.tempPointUpDownLength = 0;
              }

              for (var _i = 0; _i < 1; _i++) {
                this.points[this.tempPointsLength + _i] = new Vec3(this.points[this.tempPointsLength - 1].x + this.segmentWidth / this.tempNowSideLength * (_i + 1) * this.tempNowSideLength, this.points[this.tempPointsLength - 1].y + this.tempPointUpDownLength * (_i + 1));
              }
            }
          }

          this.tempPointsLength = this.points.length;
          this.points[this.tempPointsLength] = new Vec3(this.points[this.tempPointsLength - 1].x + this.segmentLengthLR, this.points[this.tempPointsLength - 1].y);
          this.ropeGraphic.clear();
          this.ropeGraphic.moveTo(this.points[0].x, this.points[1].y);

          for (var _i2 = 1; _i2 < this.points.length; _i2++) {
            this.ropeGraphic.lineTo(this.points[_i2].x, this.points[_i2].y);
          }

          this.ropeGraphic.stroke();
        }

        getSideLength(a, b) {
          return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        }

        onLoad() {
          this.segmentSide = [];
          this.segmentSide[0] = 1;

          for (var i = 1; i < this.wheelItemNum; i++) {
            this.segmentSide[i] = this.getSideLength(this.segmentWidth, this.segmentHeight * (i + 1));
          }

          this.ropeGraphic = this.getComponent(_crd && TextureLineGraphics === void 0 ? (_reportPossibleCrUseOfTextureLineGraphics({
            error: Error()
          }), TextureLineGraphics) : TextureLineGraphics);
        }

        start() {}

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "segmentLengthLR", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "segmentWidth", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "segmentHeight", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "wheelItemNum", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3bf8840df1a19e88bd8a904f36065be503aff472.js.map