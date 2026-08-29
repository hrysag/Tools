System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, Animation, Vec3, Mat4, Quat, Node, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _dec5, _dec6, _dec7, _dec8, _dec9, _class4, _class5, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, PathList, PathAnimationPlayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      tween = _cc.tween;
      Animation = _cc.Animation;
      Vec3 = _cc.Vec3;
      Mat4 = _cc.Mat4;
      Quat = _cc.Quat;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "971f0BTGEtPQZhsjXS6Z2gn", "PathAnimationPlayer", undefined);

      __checkObsolete__(['_decorator', 'Component', 'tween', 'Animation', 'Vec3', 'Mat4', 'Quat', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PathList", PathList = (_dec = ccclass('PathList'), _dec2 = property(Node), _dec3 = property({
        tooltip: '是否有跟隨拖尾'
      }), _dec4 = property({
        type: Node,

        visible() {
          return this.hasFollowNode;
        },

        tooltip: '跟隨拖尾'
      }), _dec(_class = (_class2 = class PathList {
        constructor() {
          _initializerDefineProperty(this, "targetNode", _descriptor, this);

          _initializerDefineProperty(this, "hasFollowNode", _descriptor2, this);

          _initializerDefineProperty(this, "followNode", _descriptor3, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hasFollowNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "followNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _export("PathAnimationPlayer", PathAnimationPlayer = (_dec5 = ccclass('PathAnimationPlayer'), _dec6 = property(Animation), _dec7 = property({
        type: PathList,
        tooltip: "連續軌跡的組件列表"
      }), _dec8 = property({
        tooltip: '動畫開始位置'
      }), _dec9 = property({
        tooltip: '動畫開始位置'
      }), _dec5(_class4 = (_class5 = class PathAnimationPlayer extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "moveAnimation", _descriptor4, this);

          _initializerDefineProperty(this, "pathAnimationList", _descriptor5, this);

          _initializerDefineProperty(this, "aniStartPos", _descriptor6, this);

          _initializerDefineProperty(this, "aniEndPos", _descriptor7, this);
        }

        async play(AnimationName, rootStartWorldPos, rootEndWorldPos) {
          this.playMotionStreak();
          this.animateWithOffsets(rootStartWorldPos.clone(), rootEndWorldPos.clone());
          await this.moveAnimation.playPromise(AnimationName);
        }

        animateWithOffsets(rootStartWorldPos, rootEndWorldPos) {
          const chLocalStart = this.aniStartPos.clone();
          const chLocalEnd = this.aniEndPos.clone();
          const chDelta = chLocalEnd.subtract(chLocalStart);
          const chLength = chDelta.length();
          const chDir = chDelta.normalize();
          const targetDelta = rootEndWorldPos.subtract(rootStartWorldPos);
          const targetLength = targetDelta.length();
          const targetDir = targetDelta.normalize();
          const scaleRatio = targetLength / chLength;
          const angleRad = Math.atan2(targetDir.y, targetDir.x) - Math.atan2(chDir.y, chDir.x);
          const angleDeg = angleRad * 180 / Math.PI;
          const offsetLocal = chLocalStart.clone().multiplyScalar(scaleRatio);
          const rotMat = new Mat4();
          Mat4.fromRT(rotMat, Quat.fromEuler(new Quat(), 0, 0, angleDeg), new Vec3(0, 0, 0));
          const offsetWorld = new Vec3();
          Vec3.transformMat4(offsetWorld, offsetLocal, rotMat);
          const finalRootPos = rootStartWorldPos.clone().subtract(offsetWorld);
          this.node.setWorldPosition(finalRootPos);
          this.node.setRotationFromEuler(0, 0, angleDeg);
          this.node.setWorldScale(new Vec3(scaleRatio, scaleRatio, 1));
        }

        playMotionStreak() {
          for (let item of this.pathAnimationList) {
            if (item.hasFollowNode) {
              this.follow(item.followNode, item.targetNode);
            }
          }
        }

        follow(follower, target) {
          const duration = this.moveAnimation.getState(this.moveAnimation.defaultClip.name).duration;
          const repeatCount = Math.ceil(duration * 60);
          const tempPos = new Vec3();
          tween(follower).repeat(repeatCount, tween().call(() => {
            target.getWorldPosition(tempPos);
            follower.setWorldPosition(tempPos);
          }).delay(0.016) //一偵
          ).call(() => {
            target.getWorldPosition(tempPos);
            follower.setWorldPosition(tempPos);
          }).start();
        }

      }, (_descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "moveAnimation", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "pathAnimationList", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "aniStartPos", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3();
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "aniEndPos", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3();
        }
      })), _class5)) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=05dec556d8c871123f007b0bad05c5b0c9995363.js.map