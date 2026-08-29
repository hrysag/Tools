System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Label, sp, Tween, tween, UtilsKit, _dec, _class, _crd, ccclass, property, BigWin;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
      sp = _cc.sp;
      Tween = _cc.Tween;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      UtilsKit = _unresolved_2.UtilsKit;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d46fe4eoutHQrx5x/JhWFPz", "BigWin", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Button', 'Component', 'EventHandler', 'js', 'Label', 'Node', 'Skeleton', 'sp', 'Tween', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BigWin", BigWin = (_dec = ccclass('BigWin'), _dec(_class = class BigWin extends Component {
        constructor() {
          super(...arguments);
          this._bigWinMultiple = [20, 50, 100];
          // 切換bigWin的分數倍率
          this._bigWinSpineAnimName = ['big_win', 'mega_win', 'super_win'];
          // bigWinSpine動態名稱
          this._runScoreTime = [10, 20, 30];
          // 跑分時間(最多)
          this._bet = void 0;
          this._payoff = void 0;
          this.bigWinResolve = void 0;
          this.bg = void 0;
          this.spine = void 0;
          this.coin = void 0;
        }

        get bigWinMultiple() {
          return this._bigWinMultiple;
        }

        start() {
          this.bg = this.node.getChildByName("bg").getComponent(sp.Skeleton);
          this.spine = this.node.getChildByName("spine").getComponent(sp.Skeleton);
          this.coin = this.node.getChildByName("coin").getComponent(sp.Skeleton);
          this.node.on(Button.EventType.CLICK, () => {
            this.endBigWinRun();
          });
        }

        onEnable() {
          this.running(6, 500);
        }

        running(bet, payoff) {
          var _this = this;

          this._bet = bet;
          this._payoff = payoff;
          return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve) {
            _this.bigWinResolve = resolve;

            var runningScoreLabel = _this.node.getChildByName("label").getComponent(Label);

            runningScoreLabel.string = "0"; // 清空跑分

            _this.node.active = true; // 顯示跑分物件

            _this.node.getComponent(Button).interactable = true; // 啟用按鈕
            // this.node.getComponent(Animation).play("bigWinReset");

            var arrayId = 0;

            _this.playBigWinSpin(arrayId); // 等待跑分結束(回傳)


            var runBigWinScore = {
              runScore: 0
            };
            tween(runBigWinScore).to(_this._runScoreTime[2], {
              runScore: _this._payoff
            }, {
              onUpdate: () => {
                runningScoreLabel.string = (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
                  error: Error()
                }), UtilsKit) : UtilsKit).NumberSpecification(runBigWinScore.runScore);

                if (arrayId < _this.bigWinMultiple.length - 1 && runBigWinScore.runScore > _this._bet * _this.bigWinMultiple[arrayId]) {
                  arrayId++; // 判斷下個階段

                  _this.playBigWinSpin(arrayId);
                }
              }
            }).call(() => _this.bigWinOver()).tag(88).start();
          }));
        }

        showBigwin() {
          //現在先綁在turbo上測試用
          this.node.active = true;
        }

        playBigWinSpin(arrayId) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var bigWinSpineNode = _this2.node.getChildByName("spine");

            var bgSpineNode = _this2.node.getChildByName("bg");

            var coinSpineNode = _this2.node.getChildByName("coin");

            if (arrayId == 0) {
              bigWinSpineNode.getComponent(sp.Skeleton).setAnimation(0, _this2._bigWinSpineAnimName[0] + '_begin', false);
              bigWinSpineNode.getComponent(sp.Skeleton).addAnimation(0, _this2._bigWinSpineAnimName[0] + '_loop', true);
              bgSpineNode.getComponent(sp.Skeleton).setAnimation(0, _this2._bigWinSpineAnimName[0] + '_begin', false);
              bgSpineNode.getComponent(sp.Skeleton).addAnimation(0, _this2._bigWinSpineAnimName[0] + '_loop', true);
              coinSpineNode.getComponent(sp.Skeleton).setAnimation(0, _this2._bigWinSpineAnimName[0] + '_begin', false);
              coinSpineNode.getComponent(sp.Skeleton).addAnimation(0, _this2._bigWinSpineAnimName[0] + '_loop', true);
            } else if (arrayId > 0) {
              bigWinSpineNode.getComponent(sp.Skeleton).addAnimation(0, _this2._bigWinSpineAnimName[arrayId] + '_begin', false);
              bigWinSpineNode.getComponent(sp.Skeleton).addAnimation(0, _this2._bigWinSpineAnimName[arrayId] + '_loop', true);
              bgSpineNode.getComponent(sp.Skeleton).addAnimation(0, _this2._bigWinSpineAnimName[arrayId] + '_begin', false);
              bgSpineNode.getComponent(sp.Skeleton).addAnimation(0, _this2._bigWinSpineAnimName[arrayId] + '_loop', true);
              coinSpineNode.getComponent(sp.Skeleton).addAnimation(0, _this2._bigWinSpineAnimName[arrayId] + '_begin', false);
              coinSpineNode.getComponent(sp.Skeleton).addAnimation(0, _this2._bigWinSpineAnimName[arrayId] + '_loop', true);
            }
          })();
        } // 執行bigWin跑分結束


        bigWinOver() {
          var _this3 = this;

          return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve) {
            _this3.node.getComponent(Button).interactable = false; // 禁用按鈕

            var runningScoreLabel = _this3.node.getChildByName("label").getComponent(Label);

            runningScoreLabel.string = (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
              error: Error()
            }), UtilsKit) : UtilsKit).NumberSpecification(_this3._payoff);
            yield (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
              error: Error()
            }), UtilsKit) : UtilsKit).Defer(2000);
            _this3.node.active = false; // 隱藏跑分物件

            var bigWinSpineNode = _this3.node.getChildByName("spine");

            var bgSpineNode = _this3.node.getChildByName("bg");

            var coinSpineNode = _this3.node.getChildByName("coin");

            _this3.resetSpine(bigWinSpineNode);

            _this3.resetSpine(bgSpineNode);

            _this3.resetSpine(coinSpineNode);

            resolve();
          }));
        } //大獎跑分畫面按下觸發


        endBigWinRun() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            Tween.stopAllByTag(88);

            var bigWinSpine = _this4.node.getChildByName("spine").getComponent(sp.Skeleton);

            var bgWinSpine = _this4.node.getChildByName("bg").getComponent(sp.Skeleton);

            var coinWinSpine = _this4.node.getChildByName("coin").getComponent(sp.Skeleton);

            bigWinSpine.setCompleteListener(null); // 結束監聽

            bgWinSpine.setCompleteListener(null); // 結束監聽

            coinWinSpine.setCompleteListener(null); // 結束監聽

            var i = 0;

            while (_this4._payoff > _this4._bet * _this4.bigWinMultiple[i]) {
              if (i == _this4.bigWinMultiple.length - 1) {
                break;
              } else {
                i++;
              }
            }

            bigWinSpine.setAnimation(0, _this4._bigWinSpineAnimName[i] + '_loop', true);
            bgWinSpine.setAnimation(0, _this4._bigWinSpineAnimName[i] + '_loop', true);
            coinWinSpine.setAnimation(0, _this4._bigWinSpineAnimName[i] + '_loop', true);
            yield _this4.bigWinOver();

            _this4.bigWinResolve();
          })();
        }

        resetSpine(spine) {
          spine.getComponent(sp.Skeleton).clearTracks();
          spine.getComponent(sp.Skeleton).clearAnimation();
          spine.getComponent(sp.Skeleton).setCompleteListener(null);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e958e009fcf1700e40a77e71654e7b5e9f0570b5.js.map