System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Component, Label, Node, sp, tween, BindTarget, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, CountTestMain;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      sp = _cc.sp;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "676f5BaB8dASasv6f6L8BBa", "CountTestMain", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Component', 'Label', 'Node', 'sp', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CountTestMain", CountTestMain = (_dec = ccclass('CountTestMain'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(sp.Skeleton), _dec(_class = (_class2 = class CountTestMain extends Component {
        constructor() {
          super(...arguments);
          this.intervalCount = 0;
          this.scheduleCount = 0;

          _initializerDefineProperty(this, "intervalCountLabel", _descriptor, this);

          _initializerDefineProperty(this, "scheduleCountLabel", _descriptor2, this);

          _initializerDefineProperty(this, "tweenCountLabel", _descriptor3, this);

          _initializerDefineProperty(this, "animationShowNode", _descriptor4, this);

          _initializerDefineProperty(this, "spineCount", _descriptor5, this);
        }

        start() {}

        update(deltaTime) {}

        startIntervalCount() {
          var key = setInterval(() => {
            this.intervalCount++;
            this.intervalCountLabel.string = "" + this.intervalCount;

            if (this.intervalCount === 10) {
              clearInterval(key);
            }
          }, 1000);
        }

        startScheduleCount() {
          var scheduleCB = () => {
            this.scheduleCount++;
            this.scheduleCountLabel.string = "" + this.scheduleCount;
          };

          this.schedule(scheduleCB, 1, 10);
        }

        startAnimation() {
          this.animationShowNode.getComponent(Animation).play();
        }

        startTweenCount() {
          var target = new BindTarget();
          tween(target).to(10, {
            count: 10
          }, {
            onUpdate: (v, ratio) => {
              var current = Math.floor(10 * ratio);
              this.tweenCountLabel.string = "" + current;
            }
          }).start();
        }

        startSpineCount() {
          this.spineCount.setAnimation(0, 'default', false);
        }

        onStartButtonClick() {
          this.startIntervalCount();
          this.startScheduleCount();
          this.startAnimation();
          this.startTweenCount();
          this.startSpineCount();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "intervalCountLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scheduleCountLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tweenCountLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "animationShowNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spineCount", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      BindTarget = class BindTarget {
        constructor() {
          this.count = 0;
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c375deaefddd7b096da506c2896917d65074b53b.js.map