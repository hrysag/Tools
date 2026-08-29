System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, MotionStreak, tween, Animation, Vec3, Mat4, Quat, Node, Utility, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class4, _class5, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, MotionStreakList, MotionStreakAuxiliary;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      tween = _cc.tween;
      Animation = _cc.Animation;
      Vec3 = _cc.Vec3;
      Mat4 = _cc.Mat4;
      Quat = _cc.Quat;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Utility = _unresolved_2.Utility;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "56ea5kuSQ9DnZJaIBf+sih6", "MotionStreakAuxiliary", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Component', 'MotionStreak', 'tween', 'Animation', 'Vec3', 'Mat4', 'Quat', 'Node', 'CCBoolean', 'Sprite', 'Tween']);

      ({
        ccclass,
        property
      } = _decorator);
      MotionStreakList = (_dec = ccclass('MotionStreakList'), _dec2 = property(MotionStreak), _dec3 = property({
        type: CCFloat,
        tooltip: '拖尾寬度'
      }), _dec4 = property({
        tooltip: '是否有跟隨物件'
      }), _dec5 = property({
        type: Node,

        visible() {
          return this.hasFollowNode;
        },

        tooltip: '跟隨物件'
      }), _dec(_class = (_class2 = class MotionStreakList {
        constructor() {
          _initializerDefineProperty(this, "motionStreak", _descriptor, this);

          _initializerDefineProperty(this, "lineWidth", _descriptor2, this);

          _initializerDefineProperty(this, "hasFollowNode", _descriptor3, this);

          _initializerDefineProperty(this, "followNode", _descriptor4, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "motionStreak", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lineWidth", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hasFollowNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "followNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class);

      _export("MotionStreakAuxiliary", MotionStreakAuxiliary = (_dec6 = ccclass('MotionStreakAuxiliary'), _dec7 = property(Animation), _dec8 = property({
        type: MotionStreakList,
        tooltip: "連續軌跡的組件列表"
      }), _dec9 = property({
        tooltip: '動畫開始位置'
      }), _dec10 = property({
        tooltip: '動畫開始位置'
      }), _dec11 = property({
        type: CCFloat,
        tooltip: '拖尾的FadeTime'
      }), _dec12 = property({
        type: CCFloat,
        tooltip: '拖尾移動到結束位置所需時間(不包含拖尾淡出時間)'
      }), _dec13 = property({
        type: CCFloat,
        tooltip: '拖尾到達目標點後的寬度縮短時間'
      }), _dec6(_class4 = (_class5 = class MotionStreakAuxiliary extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "moveAnimation", _descriptor5, this);

          _initializerDefineProperty(this, "motionStreakList", _descriptor6, this);

          _initializerDefineProperty(this, "aniStartPos", _descriptor7, this);

          _initializerDefineProperty(this, "aniEndPos", _descriptor8, this);

          _initializerDefineProperty(this, "fadeTime", _descriptor9, this);

          _initializerDefineProperty(this, "currentDuration", _descriptor10, this);

          _initializerDefineProperty(this, "motionStreakZoomTime", _descriptor11, this);
        }

        play(AnimationName, rootStartPos, rootEndPos) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var promiseList = [];

            _this.animateWithOffsets(rootStartPos.clone(), rootEndPos.clone());

            _this.moveAnimation.play(AnimationName);

            _this.resetMotionStreak();

            for (var item of _this.motionStreakList) {
              item.motionStreak.stroke = item.lineWidth;
              item.motionStreak.fadeTime = _this.fadeTime;

              if (item.hasFollowNode) {
                _this.scriptFollow(item.followNode, item.motionStreak.node);
              }
            }

            yield (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).waitPromise(_this.currentDuration);

            for (var _item of _this.motionStreakList) {
              promiseList.push(_this.scaleZoom(_item.motionStreak));
            }

            yield Promise.all(promiseList);

            _this.resetMotionStreak();
          })();
        }

        animateWithOffsets(startPos, endPos) {
          var chLocalStart = this.aniStartPos.clone();
          var chLocalEnd = this.aniEndPos.clone();
          var chDelta = chLocalEnd.subtract(chLocalStart);
          var chLength = chDelta.length();
          var chDir = chDelta.normalize();
          var worldMatrix = this.node.parent.getWorldMatrix();
          var targetWorldStart = new Vec3();
          var targetWorldEnd = new Vec3();
          Vec3.transformMat4(targetWorldStart, startPos, worldMatrix);
          Vec3.transformMat4(targetWorldEnd, endPos, worldMatrix);
          var targetDelta = targetWorldEnd.subtract(targetWorldStart);
          var targetLength = targetDelta.length();
          var targetDir = targetDelta.normalize();
          var scaleRatio = targetLength / chLength;
          var angleRad = Math.atan2(targetDir.y, targetDir.x) - Math.atan2(chDir.y, chDir.x);
          var angleDeg = angleRad * 180 / Math.PI;
          var offsetLocal = chLocalStart.clone().multiplyScalar(scaleRatio);
          var rotMat = new Mat4();
          Mat4.fromRT(rotMat, Quat.fromEuler(new Quat(), 0, 0, angleDeg), new Vec3(0, 0, 0));
          var offsetWorld = new Vec3();
          Vec3.transformMat4(offsetWorld, offsetLocal, rotMat);
          var finalRootPos = targetWorldStart.clone().subtract(offsetWorld);
          this.node.setWorldPosition(finalRootPos);
          this.node.setRotationFromEuler(0, 0, angleDeg);
          this.node.setWorldScale(new Vec3(scaleRatio, scaleRatio, 1));
        }

        scriptFollow(follower, target) {
          var repeatCount = Math.ceil(this.currentDuration * 60);
          var tempPos = new Vec3();
          tween(follower).repeat(repeatCount, tween().call(() => {
            target.getWorldPosition(tempPos);
            follower.setWorldPosition(tempPos);
          }).delay(0.016) //一偵
          ).call(() => {
            target.getWorldPosition(tempPos);
            follower.setWorldPosition(tempPos);
          }).start();
        }

        scaleZoom(motionStreak) {
          return new Promise((resolve, reject) => {
            tween(motionStreak).to(this.motionStreakZoomTime, {
              stroke: 0
            }).call(() => {
              resolve();
            }).start();
          });
        }

        resetMotionStreak() {
          for (var item of this.motionStreakList) {
            item.motionStreak.reset();
          }
        }

      }, (_descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "moveAnimation", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "motionStreakList", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "aniStartPos", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class5.prototype, "aniEndPos", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class5.prototype, "fadeTime", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class5.prototype, "currentDuration", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class5.prototype, "motionStreakZoomTime", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class5)) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f0bd4d8c6dca24f221987c847b7584764929e2d7.js.map