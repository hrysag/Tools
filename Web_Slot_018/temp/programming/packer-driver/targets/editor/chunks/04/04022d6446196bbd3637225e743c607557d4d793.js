System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, Label, tween, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, JpDigiAniNumber;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
      Label = _cc.Label;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1b466F9rlJGlYX69SgtVa6L", "JpDigiAniNumber", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Component', 'Label', 'Node', 'Tween', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("JpDigiAniNumber", JpDigiAniNumber = (_dec = ccclass('JpDigiAniNumber'), _dec2 = property({
        type: CCFloat,
        visible: true,
        displayName: '數字表演持續時間',
        tooltip: 'JP數字顯示'
      }), _dec(_class = (_class2 = class JpDigiAniNumber extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_duration", _descriptor, this);

          this._resolvePromise = void 0;
          // promise resolve 函式
          this._targetLabel = null;
          this._tweenAction = void 0;
          this._totalWinScore = 0;
        }

        onLoad() {//super.onLoad();
        }

        init() {
          this._targetLabel = this.getComponent(Label);
          this.node.active = false;
        }

        showJpDigiAniNumber(value) {
          this.node.active = true;
          this._totalWinScore = value;
          this.clearData();
          return new Promise((resolve, reject) => {
            this._resolvePromise = resolve;
            const updateTarget = {
              value: 0
            };
            this._tweenAction = tween(updateTarget).to(this._duration, {
              value: value
            }, {
              onUpdate: (v, ratio) => {
                this.updateLabelValue(Math.floor(value * ratio));
              },
              onComplete: () => {
                //this.updateLabelValue(value);
                if (this._resolvePromise) {
                  this._resolvePromise(false);

                  this._resolvePromise = undefined;
                }

                this._tweenAction = null;
              }
            }).start();
          });
        }

        async checkFinishWinScoreShow() {
          if (this._tweenAction) {
            this._tweenAction.stop();

            this._tweenAction = null;
            this.updateLabelValue(this._totalWinScore);
            this._resolvePromise = undefined;
          }
        }

        clearData() {
          if (this._tweenAction) {
            this._tweenAction.stop();

            this._tweenAction = null;
          }

          if (this._resolvePromise) {
            this._resolvePromise(false); // 可視需求給 true/false


            this._resolvePromise = undefined;
          }
        }

        stopJpDigiAniNumber() {
          this.clearData();
          this._totalWinScore = 0;
          this.node.active = false;
        }

        updateLabelValue(value) {
          this._targetLabel.string = value.numberComma();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_duration", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.5;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=04022d6446196bbd3637225e743c607557d4d793.js.map