System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, instantiate, Prefab, randomRange, Sprite, Vec3, UniMovement, EaseType, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, MovementTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUniMovement(extras) {
    _reporterNs.report("UniMovement", "./UniMovement", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEaseType(extras) {
    _reporterNs.report("EaseType", "db://assets/Scripts/Core/TweenExt", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      randomRange = _cc.randomRange;
      Sprite = _cc.Sprite;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      UniMovement = _unresolved_2.UniMovement;
    }, function (_unresolved_3) {
      EaseType = _unresolved_3.EaseType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c45e4jc2xdJ57Np/qSzRXR1", "MovementTest", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'instantiate', 'Node', 'Prefab', 'random', 'randomRange', 'Sprite', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MovementTest", MovementTest = (_dec = ccclass('MovementTest'), _dec2 = property(Prefab), _dec(_class = (_class2 = class MovementTest extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "prefab", _descriptor, this);

          this.movements = null;
          this.interval = 0.1;
        }

        start() {
          this.movements = [];

          for (let i = 0; i < 6; i++) {
            let icon = instantiate(this.prefab);
            icon.setParent(this.node);
            icon.position = new Vec3(0, i * 100 + 100, 0);
            icon.getComponent(Sprite).color = new Color(randomRange(0, 255), randomRange(0, 255), randomRange(0, 255), 255);
            this.movements.push(icon.getComponent(_crd && UniMovement === void 0 ? (_reportPossibleCrUseOfUniMovement({
              error: Error()
            }), UniMovement) : UniMovement));
          }
          /*
          this.movements[0].OnMoveStart = this.logStart.bind(this);
          this.movements[0].OnMoveComplete = this.logComplete.bind(this);
          this.movements[0].moveBy(new Vec3(0.0, 100.0, 0.0), 1.0, EaseType.Linear);
          this.movements[0].addCallback(this.f1);
          this.movements[0].moveBy(new Vec3(100.0, 0.0, 0.0), 0.01, EaseType.Linear);
          this.movements[0].moveBy(new Vec3(-100.0, 0.0, 0.0), 0.033, EaseType.Linear);
          this.movements[0].moveBy(new Vec3(100.0, 0.0, 0.0), 0.01, EaseType.Linear);
          this.movements[0].moveBy(new Vec3(-100.0, 0.0, 0.0), 0.01, EaseType.Linear);
          this.movements[0].addCallback(this.f2);
          this.movements[0].addCallback(this.f3);
          this.movements[0].moveBy(new Vec3(0.0, -100.0, 0.0), 1.0, EaseType.Linear);
          */


          this.movements[0].onMoveStart = this.logStart.bind(this);
          this.movements[0].onMoveComplete = this.logComplete.bind(this);
          this.rollonce();
        }

        logStart(p) {
          console.log('MoveStart ' + p.curParam.cmdType);
        }

        logComplete(p) {
          console.log('MoveComplete ' + p.curParam.cmdType);
        }

        f1() {
          console.log('f1');
        }

        f2() {
          console.log('f2');
        }

        f3() {
          console.log('f3');
        }

        rollonce() {
          for (let i = 0; i < this.movements.length; i++) {
            this.movements[i].moveBy(new Vec3(0, -100, 0), this.interval, (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
              error: Error()
            }), EaseType) : EaseType).Linear);
            this.movements[i].addCallback(this.checkPos);

            if (i === 0) {
              this.movements[i].onLastMoveComplete = this.rollComplete.bind(this);
            }
          }
        }

        checkPos(m) {
          if (m.node.position.y <= -100) {
            m.node.setPosition(new Vec3(0, 5 * 100, 0));
          }
        }

        rollComplete(move) {
          this.rollonce();
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9b37557ec21b23c781466d4864599dc16236ddb9.js.map