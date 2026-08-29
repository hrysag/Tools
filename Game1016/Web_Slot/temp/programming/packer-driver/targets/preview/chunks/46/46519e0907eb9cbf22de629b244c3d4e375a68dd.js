System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, tween, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, JpDigiAniNumber;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d91d1g9FVFOzLKuVE070P7D", "JpDigiAniNumber", undefined);

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
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_duration", _descriptor, this);

          this._resolvePromise = void 0;
          // promise resolve 函式
          this._targetLabel = null;
          this._tweenAction = void 0;
          this._totalWinScore = 0;
        }

        setLabelNode(label) {
          if (label) this._targetLabel = label;
        }

        showJpDigiAniNumber(value) {
          this.node.active = true;
          this._totalWinScore = value;
          this.clearData();
          return new Promise((resolve, reject) => {
            this._resolvePromise = resolve;
            var updateTarget = {
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

        checkFinishWinScoreShow() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this._tweenAction) {
              _this._tweenAction.stop();

              _this._tweenAction = null;

              _this.updateLabelValue(_this._totalWinScore);

              _this._resolvePromise = undefined;
            }
          })();
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
        initializer: function initializer() {
          return 0.5;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=46519e0907eb9cbf22de629b244c3d4e375a68dd.js.map