System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, MotionStreak, Node, Quat, tween, Vec3, Utility, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, MotionStreakController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
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
      Component = _cc.Component;
      MotionStreak = _cc.MotionStreak;
      Node = _cc.Node;
      Quat = _cc.Quat;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Utility = _unresolved_2.Utility;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0010elEfYVE07L9ttDysy9h", "MotionStreakController", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'CCFloat', 'CCInteger', 'Component', 'macro', 'MotionStreak', 'Node', 'Quat', 'Sprite', 'tween', 'UIOpacity', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MotionStreakController", MotionStreakController = (_dec = ccclass('MotionStreakController'), _dec2 = property(MotionStreak), _dec3 = property({
        type: Node,
        tooltip: '控制點1(開始位置)'
      }), _dec4 = property({
        type: Node,
        tooltip: '控制點1(結束位置)'
      }), _dec5 = property({
        type: Node,
        tooltip: '控制點1(靠近開始位置)'
      }), _dec6 = property({
        type: Node,
        tooltip: '控制點2(靠近結束位置)'
      }), _dec7 = property({
        type: CCFloat,
        tooltip: '移動到結束位置所需時間(不包含拖尾淡出時間)'
      }), _dec8 = property({
        type: CCFloat,
        tooltip: '拖尾寬度'
      }), _dec9 = property({
        type: CCFloat,
        tooltip: '拖尾寬度縮短時間'
      }), _dec(_class = (_class2 = class MotionStreakController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "motionStreak", _descriptor, this);

          _initializerDefineProperty(this, "startNode", _descriptor2, this);

          _initializerDefineProperty(this, "targetNode", _descriptor3, this);

          _initializerDefineProperty(this, "ctrlNode", _descriptor4, this);

          _initializerDefineProperty(this, "ctrlNode2", _descriptor5, this);

          _initializerDefineProperty(this, "currentDuration", _descriptor6, this);

          _initializerDefineProperty(this, "lineWidth", _descriptor7, this);

          _initializerDefineProperty(this, "motionStreakZoomTime", _descriptor8, this);
        }

        onEnable() {
          this.play();
        }

        async play() {
          const startPos = this.startNode.getPosition();
          const endPos = this.targetNode.getPosition();
          const controlX = this.ctrlNode.getPosition().x;
          const controlY = this.ctrlNode.getPosition().y;
          const controlPos = new Vec3(controlX, controlY, 0);
          const controlX2 = this.ctrlNode2.getPosition().x;
          const controlY2 = this.ctrlNode2.getPosition().y;
          const controlPos2 = new Vec3(controlX2, controlY2, 0);
          this.motionStreak.node.setPosition(startPos);
          this.motionStreak.reset();
          this.motionStreak.stroke = this.lineWidth;
          this.playMotion(startPos, controlPos, controlPos2, endPos);
          await (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).waitPromise(this.currentDuration);
          await this.scaleZoom();
          this.motionStreak.reset();
        }

        playMotion(startPos, controlPos, controlPos2, endPos) {
          const points = this.getBezierCurve(startPos, controlPos, controlPos2, endPos, 50);
          const duration = this.currentDuration / points.length;
          this.move(duration, points);
          this.tansFrom(duration, points);
        }

        move(duration, points) {
          let tw = tween(this.motionStreak.node);

          for (let i = 0; i < points.length; i++) {
            tw = tw.to(duration, {
              position: points[i]
            });
          }

          tw.start();
        }

        tansFrom(duration, points) {
          let seq = tween(this.motionStreak.node);

          for (let i = 0; i < points.length - 1; i++) {
            const current = points[i];
            const next = points[i + 1];
            let direction = new Vec3();
            Vec3.subtract(direction, next, current);
            direction.normalize();
            const angle = Math.atan2(direction.y, direction.x);
            const rotation = new Quat();
            Quat.fromEuler(rotation, 0, 0, -angle * (-180 / Math.PI) - 90); // Z 軸旋轉（-angle 是因為旋轉是逆時針）

            seq = seq.to(duration, {
              rotation: rotation
            });
          }

          seq.start();
        }

        getBezierCurve(p0, p1, p2, p3, segments) {
          const points = [];

          for (let i = 0; i <= segments; i++) {
            let t = i / segments;
            let x = Math.pow(1 - t, 3) * p0.x + 3 * Math.pow(1 - t, 2) * t * p1.x + 3 * (1 - t) * Math.pow(t, 2) * p2.x + Math.pow(t, 3) * p3.x;
            let y = Math.pow(1 - t, 3) * p0.y + 3 * Math.pow(1 - t, 2) * t * p1.y + 3 * (1 - t) * Math.pow(t, 2) * p2.y + Math.pow(t, 3) * p3.y;
            let z = Math.pow(1 - t, 3) * p0.z + 3 * Math.pow(1 - t, 2) * t * p1.z + 3 * (1 - t) * Math.pow(t, 2) * p2.z + Math.pow(t, 3) * p3.z;
            points.push(new Vec3(x, y, z));
          }

          return points;
        }

        scaleZoom() {
          return new Promise((resolve, reject) => {
            tween(this.motionStreak).to(this.motionStreakZoomTime, {
              stroke: 0
            }).call(() => {
              resolve();
            }).start();
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "motionStreak", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ctrlNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ctrlNode2", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "currentDuration", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lineWidth", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "motionStreakZoomTime", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b31441c26beed3a76e91f6e352b625171b983a91.js.map