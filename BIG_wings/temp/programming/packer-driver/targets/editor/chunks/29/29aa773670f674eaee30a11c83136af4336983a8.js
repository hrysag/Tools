System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, tween, UtilsKit, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, Info;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtilsKit(extras) {
    _reporterNs.report("UtilsKit", "../lib/UtilsKit", _context.meta, extras);
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
      Node = _cc.Node;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      UtilsKit = _unresolved_2.UtilsKit;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "55d8908HzBNqbIFR/o2UkcN", "Info", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Info", Info = (_dec = ccclass('Info'), _dec2 = property({
        type: Label,
        tooltip: "玩家分數"
      }), _dec3 = property({
        type: Label,
        tooltip: "玩家下注分數"
      }), _dec4 = property({
        type: Label,
        tooltip: "玩家累積分數"
      }), _dec5 = property({
        type: Label,
        tooltip: "局號"
      }), _dec6 = property({
        type: Label,
        tooltip: "下注比"
      }), _dec7 = property({
        type: Node,
        tooltip: "共贏得分數資訊"
      }), _dec(_class = (_class2 = class Info extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "creditLabel", _descriptor, this);

          _initializerDefineProperty(this, "betLabel", _descriptor2, this);

          _initializerDefineProperty(this, "accumulatedScoreLabel", _descriptor3, this);

          _initializerDefineProperty(this, "snLabel", _descriptor4, this);

          _initializerDefineProperty(this, "betBaseLabel", _descriptor5, this);

          _initializerDefineProperty(this, "winTotalScoreNode", _descriptor6, this);
        }

        start() {
          this.updateCredit(0);
          this.updateBet(0);
          this.updateAccumulatedScore(0);
        } // 顯示共贏得分數


        showWinTotalScore(score) {
          this.winTotalScoreNode.getChildByName('score').getChildByName('label').getComponent(Label).string = score.toString(); // 共贏分設置

          (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
            error: Error()
          }), UtilsKit) : UtilsKit).PlayAnimation(this.winTotalScoreNode); // 顯示共贏得
        }

        updateCredit(n) {
          this.creditLabel.string = (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
            error: Error()
          }), UtilsKit) : UtilsKit).NumberSpecification(n);
        }

        updateBet(n) {
          this.betLabel.string = (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
            error: Error()
          }), UtilsKit) : UtilsKit).NumberSpecification(n);
        }

        updateAccumulatedScore(n) {
          this.runScore(Number(this.accumulatedScoreLabel.string), Number(this.accumulatedScoreLabel.string) + n, this.accumulatedScoreLabel); // 執行小跑分
        }

        updateSN(sn) {
          this.snLabel.string = sn;
        }

        updateBetBase(betBase) {
          this.betBaseLabel.string = betBase;
        } //跑分


        runScore(stratScore, endScore, label) {
          const runScore = {
            score: stratScore
          }; // 設置起始分

          tween(runScore).to(0.5, {
            score: endScore
          }, {
            onUpdate: () => {
              label.string = (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
                error: Error()
              }), UtilsKit) : UtilsKit).NumberSpecification(runScore.score); // 更新分數
            }
          }).call(() => {
            label.string = (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
              error: Error()
            }), UtilsKit) : UtilsKit).NumberSpecification(endScore); // 更新分數
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "creditLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "betLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "accumulatedScoreLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "snLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "betBaseLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "winTotalScoreNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=29aa773670f674eaee30a11c83136af4336983a8.js.map