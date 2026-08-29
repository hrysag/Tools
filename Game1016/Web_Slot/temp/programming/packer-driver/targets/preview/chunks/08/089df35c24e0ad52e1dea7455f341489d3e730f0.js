System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Tween, tween, v3, RunTimeData, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ScoreViewExample;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRunTimeData(extras) {
    _reporterNs.report("RunTimeData", "./DataSetting/RunTimeData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProcessSettingData(extras) {
    _reporterNs.report("ProcessSettingData", "./DataSetting/ProcessSettingData", _context.meta, extras);
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
      Label = _cc.Label;
      Tween = _cc.Tween;
      tween = _cc.tween;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      RunTimeData = _unresolved_2.RunTimeData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c47b7fwGplLv5OZXPtF1+sK", "ScoreViewExample", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Tween', 'tween', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ScoreViewExample", ScoreViewExample = (_dec = ccclass('ScoreViewExample'), _dec2 = property(Label), _dec(_class = (_class2 = class ScoreViewExample extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "normalScoreLabel", _descriptor, this);

          this.processData = null;
        }

        showScore(finalScore) {
          var _this = this;

          return _asyncToGenerator(function* () {
            return new Promise(resolve => {
              _this.normalScoreLabel.string = "";
              _this.processData = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
                error: Error()
              }), RunTimeData) : RunTimeData).instance.processData;
              var scoreObj = {
                score: 0
              };
              var needRunScore = _this.processData.needRunScore;
              var runScoreTime = needRunScore ? _this.processData.runScoreTime : 0;

              if (needRunScore) {
                tween(scoreObj).to(_this.processData.runScoreTime, {
                  score: finalScore
                }, {
                  onUpdate: v => {
                    _this.normalScoreLabel.string = Math.floor(scoreObj.score.fixed()).numberComma();
                  }
                }).start();
              } else {
                _this.normalScoreLabel.string = finalScore.fixed().numberComma();
              }

              tween(_this.normalScoreLabel.node).set({
                active: true
              }).set({
                scale: v3(0, 0, 0)
              }).to(_this.processData.showScoreTime, {
                scale: v3(1, 1, 1)
              }, {
                easing: "smooth"
              }).delay(runScoreTime).delay(_this.processData.scoreShowTime).to(_this.processData.hideScoreTime, {
                scale: v3(0, 0, 0)
              }).call(() => {
                _this.normalScoreLabel.node.active = false;
                resolve();
              }).start();
            });
          })();
        }

        hideScore() {
          this.normalScoreLabel.node.active = false;
          Tween.stopAllByTarget(this.normalScoreLabel.node);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "normalScoreLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=089df35c24e0ad52e1dea7455f341489d3e730f0.js.map