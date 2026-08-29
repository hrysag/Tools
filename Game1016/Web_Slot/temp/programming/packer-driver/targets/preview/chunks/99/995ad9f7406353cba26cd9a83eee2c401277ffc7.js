System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, ParticleSystem, AutoOrientation, PathAnimationPlayer, SlicedTrail, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _dec6, _dec7, _dec8, _dec9, _dec10, _class4, _class5, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, MotionDataList, SlicedTrailTest;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAutoOrientation(extras) {
    _reporterNs.report("AutoOrientation", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPathAnimationPlayer(extras) {
    _reporterNs.report("PathAnimationPlayer", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlicedTrail(extras) {
    _reporterNs.report("SlicedTrail", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
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
      Node = _cc.Node;
      ParticleSystem = _cc.ParticleSystem;
    }, function (_unresolved_2) {
      AutoOrientation = _unresolved_2.AutoOrientation;
      PathAnimationPlayer = _unresolved_2.PathAnimationPlayer;
      SlicedTrail = _unresolved_2.SlicedTrail;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c9b95btUVNjKWk2lqU5qiG", "SlicedTrailTest", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ParticleSystem']);

      ({
        ccclass,
        property
      } = _decorator);
      MotionDataList = (_dec = ccclass('MotionDataList'), _dec2 = property({
        visible: true
      }), _dec3 = property({
        type: Node,
        visible: true
      }), _dec4 = property({
        type: Node,
        visible: true
      }), _dec5 = property(_crd && PathAnimationPlayer === void 0 ? (_reportPossibleCrUseOfPathAnimationPlayer({
        error: Error()
      }), PathAnimationPlayer) : PathAnimationPlayer), _dec(_class = (_class2 = class MotionDataList {
        constructor() {
          _initializerDefineProperty(this, "aniName", _descriptor, this);

          _initializerDefineProperty(this, "startNode", _descriptor2, this);

          _initializerDefineProperty(this, "endNode", _descriptor3, this);

          _initializerDefineProperty(this, "motionPathController", _descriptor4, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "aniName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "endNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "motionPathController", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class);

      _export("SlicedTrailTest", SlicedTrailTest = (_dec6 = ccclass('SlicedTrailTest'), _dec7 = property(_crd && AutoOrientation === void 0 ? (_reportPossibleCrUseOfAutoOrientation({
        error: Error()
      }), AutoOrientation) : AutoOrientation), _dec8 = property(MotionDataList), _dec9 = property(ParticleSystem), _dec10 = property(_crd && SlicedTrail === void 0 ? (_reportPossibleCrUseOfSlicedTrail({
        error: Error()
      }), SlicedTrail) : SlicedTrail), _dec6(_class4 = (_class5 = class SlicedTrailTest extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "autoOrientation", _descriptor5, this);

          _initializerDefineProperty(this, "motionDataList", _descriptor6, this);

          _initializerDefineProperty(this, "trailParticleSystem", _descriptor7, this);

          _initializerDefineProperty(this, "motionStreakList", _descriptor8, this);
        }

        start() {
          this.autoOrientation.onResizeCall = this.resetMotionStreakAuxiliary.bind(this);
        }

        resetMotionStreakAuxiliary() {
          this.trailParticleSystem.forEach(ps => {
            ps.clear();
          });
          this.motionStreakList.forEach(ms => {
            ms.reset();
          });
        }

        onclick() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.playMotionStreak();
          })();
        }

        playMotionStreak() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            for (var i = 0; i < _this2.motionDataList.length; i++) {
              var item = _this2.motionDataList[i];

              _this2.resetMotionStreak(true); //一定要清空軌跡組件畫的點


              yield item.motionPathController.play(item.aniName, item.startNode.getWorldPosition(), item.endNode.getWorldPosition());

              _this2.resetMotionStreak(false); //一定要清空軌跡組件畫的點

            }
          })();
        }

        resetMotionStreak(isPlay) {
          for (var item of this.motionStreakList) {
            item.reset();
            item.isPlay = isPlay;
          }
        }

      }, (_descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "autoOrientation", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "motionDataList", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "trailParticleSystem", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class5.prototype, "motionStreakList", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class5)) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=995ad9f7406353cba26cd9a83eee2c401277ffc7.js.map