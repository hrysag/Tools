System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, _dec, _class, _crd, ccclass, property, JpDigitsAniNumber;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8228kn10tPWp3EgISQu65B", "JpDigitsAniNumber", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Component', 'Label', 'Node', 'Tween', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("JpDigitsAniNumber", JpDigitsAniNumber = (_dec = ccclass('JpDigitsAniNumber'), _dec(_class = class JpDigitsAniNumber extends Component {
        constructor() {
          super(...arguments);
          //@property({ type: CCFloat, visible: true, displayName: '數字表演持續時間', tooltip: 'JP數字顯示' })
          this._duration = 0.5;
          this._resolvePromise = void 0;
          // promise resolve 函式
          this._targetLabel = null;
          this._tweenAction = void 0;
          this._totalWinScore = 0;
        }

        set duration(value) {
          this._duration = value;
        }

        get duration() {
          return this._duration;
        }

        get totalWinScore() {
          return this._totalWinScore;
        }

        setLabelNode(label) {
          if (label) this._targetLabel = label;
        }

        showJpDigitsAniNumber(value) {
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
        /**
         * 會阻斷原先的跑分動畫,直接顯示最終值
         * PS:promise resolve 會直接忽略吞掉!
         */


        showFinishWinScore() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this._tweenAction) {
              _this._tweenAction.stop();

              _this._tweenAction = null;

              _this.updateLabelValue(_this._totalWinScore);

              _this._resolvePromise = undefined; //-promise resolve 會直接忽略吞掉!
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

        stopJpDigitsAniNumber() {
          this.clearData();
          this._totalWinScore = 0;
          this.node.active = false;
        }

        updateLabelValue(value) {
          this._targetLabel.string = value.numberComma();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c5e6af3a719af3d360335ea0f9565d609a631b2d.js.map