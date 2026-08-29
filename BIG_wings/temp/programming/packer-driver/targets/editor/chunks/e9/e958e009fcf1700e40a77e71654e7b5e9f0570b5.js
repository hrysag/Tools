System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Label, sp, Tween, tween, UtilsKit, _dec, _class, _crd, ccclass, property, BigWin;

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
        constructor(...args) {
          super(...args);
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
          this._bet = bet;
          this._payoff = payoff;
          return new Promise(async resolve => {
            this.bigWinResolve = resolve;
            const runningScoreLabel = this.node.getChildByName("label").getComponent(Label);
            runningScoreLabel.string = "0"; // 清空跑分

            this.node.active = true; // 顯示跑分物件

            this.node.getComponent(Button).interactable = true; // 啟用按鈕
            // this.node.getComponent(Animation).play("bigWinReset");

            let arrayId = 0;
            this.playBigWinSpin(arrayId); // 等待跑分結束(回傳)

            const runBigWinScore = {
              runScore: 0
            };
            tween(runBigWinScore).to(this._runScoreTime[2], {
              runScore: this._payoff
            }, {
              onUpdate: () => {
                runningScoreLabel.string = (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
                  error: Error()
                }), UtilsKit) : UtilsKit).NumberSpecification(runBigWinScore.runScore);

                if (arrayId < this.bigWinMultiple.length - 1 && runBigWinScore.runScore > this._bet * this.bigWinMultiple[arrayId]) {
                  arrayId++; // 判斷下個階段

                  this.playBigWinSpin(arrayId);
                }
              }
            }).call(() => this.bigWinOver()).tag(88).start();
          });
        }

        showBigwin() {
          //現在先綁在turbo上測試用
          this.node.active = true;
        }

        async playBigWinSpin(arrayId) {
          const bigWinSpineNode = this.node.getChildByName("spine");
          const bgSpineNode = this.node.getChildByName("bg");
          const coinSpineNode = this.node.getChildByName("coin");

          if (arrayId == 0) {
            bigWinSpineNode.getComponent(sp.Skeleton).setAnimation(0, this._bigWinSpineAnimName[0] + '_begin', false);
            bigWinSpineNode.getComponent(sp.Skeleton).addAnimation(0, this._bigWinSpineAnimName[0] + '_loop', true);
            bgSpineNode.getComponent(sp.Skeleton).setAnimation(0, this._bigWinSpineAnimName[0] + '_begin', false);
            bgSpineNode.getComponent(sp.Skeleton).addAnimation(0, this._bigWinSpineAnimName[0] + '_loop', true);
            coinSpineNode.getComponent(sp.Skeleton).setAnimation(0, this._bigWinSpineAnimName[0] + '_begin', false);
            coinSpineNode.getComponent(sp.Skeleton).addAnimation(0, this._bigWinSpineAnimName[0] + '_loop', true);
          } else if (arrayId > 0) {
            bigWinSpineNode.getComponent(sp.Skeleton).addAnimation(0, this._bigWinSpineAnimName[arrayId] + '_begin', false);
            bigWinSpineNode.getComponent(sp.Skeleton).addAnimation(0, this._bigWinSpineAnimName[arrayId] + '_loop', true);
            bgSpineNode.getComponent(sp.Skeleton).addAnimation(0, this._bigWinSpineAnimName[arrayId] + '_begin', false);
            bgSpineNode.getComponent(sp.Skeleton).addAnimation(0, this._bigWinSpineAnimName[arrayId] + '_loop', true);
            coinSpineNode.getComponent(sp.Skeleton).addAnimation(0, this._bigWinSpineAnimName[arrayId] + '_begin', false);
            coinSpineNode.getComponent(sp.Skeleton).addAnimation(0, this._bigWinSpineAnimName[arrayId] + '_loop', true);
          }
        } // 執行bigWin跑分結束


        bigWinOver() {
          return new Promise(async resolve => {
            this.node.getComponent(Button).interactable = false; // 禁用按鈕

            const runningScoreLabel = this.node.getChildByName("label").getComponent(Label);
            runningScoreLabel.string = (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
              error: Error()
            }), UtilsKit) : UtilsKit).NumberSpecification(this._payoff);
            await (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
              error: Error()
            }), UtilsKit) : UtilsKit).Defer(2000);
            this.node.active = false; // 隱藏跑分物件

            const bigWinSpineNode = this.node.getChildByName("spine");
            const bgSpineNode = this.node.getChildByName("bg");
            const coinSpineNode = this.node.getChildByName("coin");
            this.resetSpine(bigWinSpineNode);
            this.resetSpine(bgSpineNode);
            this.resetSpine(coinSpineNode);
            resolve();
          });
        } //大獎跑分畫面按下觸發


        async endBigWinRun() {
          Tween.stopAllByTag(88);
          const bigWinSpine = this.node.getChildByName("spine").getComponent(sp.Skeleton);
          const bgWinSpine = this.node.getChildByName("bg").getComponent(sp.Skeleton);
          const coinWinSpine = this.node.getChildByName("coin").getComponent(sp.Skeleton);
          bigWinSpine.setCompleteListener(null); // 結束監聽

          bgWinSpine.setCompleteListener(null); // 結束監聽

          coinWinSpine.setCompleteListener(null); // 結束監聽

          let i = 0;

          while (this._payoff > this._bet * this.bigWinMultiple[i]) {
            if (i == this.bigWinMultiple.length - 1) {
              break;
            } else {
              i++;
            }
          }

          bigWinSpine.setAnimation(0, this._bigWinSpineAnimName[i] + '_loop', true);
          bgWinSpine.setAnimation(0, this._bigWinSpineAnimName[i] + '_loop', true);
          coinWinSpine.setAnimation(0, this._bigWinSpineAnimName[i] + '_loop', true);
          await this.bigWinOver();
          this.bigWinResolve();
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