System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, math, Node, RealCurve, Tween, tween, Vec3, bezierEase, Debug, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, TweenTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfbezierEase(extras) {
    _reporterNs.report("bezierEase", "../../Lib/cubic-bezier", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../../Scripts/Utils/Debug", _context.meta, extras);
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
      math = _cc.math;
      Node = _cc.Node;
      RealCurve = _cc.RealCurve;
      Tween = _cc.Tween;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      bezierEase = _unresolved_2.bezierEase;
    }, function (_unresolved_3) {
      Debug = _unresolved_3.Debug;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5c3280i0zNGh7FbKRXF5a4q", "TweenTest", undefined);

      __checkObsolete__(['_decorator', 'bezier', 'Color', 'color', 'Component', 'easing', 'log', 'math', 'Node', 'RealCurve', 'Sprite', 'Tween', 'tween', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TweenTest", TweenTest = (_dec = ccclass('TweenTest'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(RealCurve), _dec5 = property(RealCurve), _dec(_class = (_class2 = class TweenTest extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Node1", _descriptor, this);

          _initializerDefineProperty(this, "Node2", _descriptor2, this);

          _initializerDefineProperty(this, "realCurve", _descriptor3, this);

          _initializerDefineProperty(this, "realCurve2", _descriptor4, this);

          this.baz = (_crd && bezierEase === void 0 ? (_reportPossibleCrUseOfbezierEase({
            error: Error()
          }), bezierEase) : bezierEase)({
            x: 1,
            y: 0.85
          }, {
            x: 0.56,
            y: 1.3
          });
          this.b = void 0;
        }

        start() {//this.Node1.getComponent(Sprite).color = Color.RED;
        }

        update(deltaTime) {}

        onButtonClick() {
          this.test();
        }

        onButtonClick2() {
          // this.Node1._destroyImmediate();
          this.b.stop();
        }

        func1() {
          (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Log("func1");
          tween().target(this.Node1).delay(2).to(1, {
            position: new Vec3(0, 10, 0)
          }).call(() => {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).Log("call!!!");
          }).delay(1).by(1, {
            position: new Vec3(0, -200, 0)
          }).start();
          Tween;
        }

        func2() {
          (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Log("func2");
          tween().target(this.Node1).by(1, {
            position: new Vec3(300, 0, 0)
          }, {
            easing: 'backOut'
          }).start();
        }

        func3() {
          (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Log("func2");
          tween().target(this.Node1).by(1, {
            position: new Vec3(300, 0, 0)
          }, {
            progress: (start, end, current, ratio) => {
              //this.baz(ratio)
              //easing.backOut(ratio)
              console.log("ratio", ratio);
              return math.lerp(start, end, this.realCurve.evaluate(ratio));
            }
          }).repeatForever().start();
        }

        func5() {
          let t1 = tween().target(this.Node1).by(1, {
            position: new Vec3(300, 0, 0)
          });
          let t2 = tween().target(this.Node1).by(1, {
            scale: new Vec3(1, 1, 1)
          }).by(1, {
            scale: new Vec3(1, 1, 1)
          });
          tween().target(this.Node1).parallel(t2, t1).call(() => {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).Log("call111!!!");
          }).start();
        }

        test() {
          this.b = tween(this.Node1).by(0.5, {
            position: new Vec3(100, 0, 0)
          }).by(0.5, {
            position: new Vec3(-100, 0, 0)
          }).delay(0.3).call(() => {
            console.log("call");
          }).union().repeatForever().start(); // let tween1 = tween(this.Node1)
          //     .call(() => { })
          //     .then(b)
          // .by(0.5, { position: new Vec3(1000, 0, 0) })
          // let c = tween(this.Node1)
          //     .repeatForever(b)
          // .start();
          // let b2 = tween(this.Node1)
          //     .by(1, { position: new Vec3(0, 100, 0) })
          //     .delay(0.01)
          //     .then(b)
          //     .repeatForever()
          //     .start();
          // c.start();
          // let c = tween(this.Node1).sequence(b2, b).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "realCurve", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new RealCurve();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "realCurve2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new RealCurve();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d27483a30b3a9df125024d800b834c8320427bd5.js.map