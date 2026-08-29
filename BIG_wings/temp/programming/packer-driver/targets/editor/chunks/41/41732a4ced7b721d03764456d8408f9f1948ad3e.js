System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, Label, UITransform, UIOpacity, Tween, Vec3, sp, SpriteFrame, Sprite, Overflow, scoreGridMarquee, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, WinAndMarquee;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfscoreGridMarquee(extras) {
    _reporterNs.report("scoreGridMarquee", "./scoreGridMarquee", _context.meta, extras);
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
      tween = _cc.tween;
      Label = _cc.Label;
      UITransform = _cc.UITransform;
      UIOpacity = _cc.UIOpacity;
      Tween = _cc.Tween;
      Vec3 = _cc.Vec3;
      sp = _cc.sp;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
      Overflow = _cc.Overflow;
    }, function (_unresolved_2) {
      scoreGridMarquee = _unresolved_2.scoreGridMarquee;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5746elZGytBPpYU8GK/5YlD", "WinAndMarquee", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'Animation', 'AnimationClip', 'Label', 'UITransform', 'UIOpacity', 'Tween', 'Vec3', 'sp', 'SpriteFrame', 'Sprite', 'Overflow']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WinAndMarquee", WinAndMarquee = (_dec = ccclass('WinAndMarquee'), _dec2 = property({
        type: _crd && scoreGridMarquee === void 0 ? (_reportPossibleCrUseOfscoreGridMarquee({
          error: Error()
        }), scoreGridMarquee) : scoreGridMarquee
      }), _dec3 = property({
        type: Sprite
      }), _dec4 = property({
        type: Label
      }), _dec5 = property({
        type: Label
      }), _dec6 = property({
        type: [SpriteFrame],
        tooltip: "win sprite"
      }), _dec(_class = (_class2 = class WinAndMarquee extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "marquee", _descriptor, this);

          _initializerDefineProperty(this, "winSprite", _descriptor2, this);

          _initializerDefineProperty(this, "winScore", _descriptor3, this);

          _initializerDefineProperty(this, "runningScore", _descriptor4, this);

          this._running = false;
          this._frameLevel = void 0;
          this.spine = void 0;
          this.botSpine = void 0;
          this.tagNum = 0;
          this.roundScore = void 0;
          this.totalScore = void 0;
          this.bet = void 0;
          this.inFree = void 0;

          _initializerDefineProperty(this, "winSpriteFrame", _descriptor5, this);

          this.handleKey = e => {
            console.error("KEYYYY");
            if (e.key == " ") this.stop();
          };

          this.stop = () => {
            if (!this._running) return;
            console.error("STOPPPP");
            this.removeListener();
            this._running = false;
            Tween.stopAllByTag(this.tagNum);
            Tween.stopAllByTarget(this.runningScore.node.parent);
            tween().parallel(tween(this.runningScore.node.parent).to(0.1, {
              scale: new Vec3(1.2, 1.2, 1)
            }).to(0.1, {
              scale: new Vec3(1, 1, 1)
            }).start(), tween(this.runningScore.node.parent).call(() => this.updateWinBlock(this.totalScore, this.bet, this.inFree)).start());
            this.runningScore.string = this.roundScore.toFixed(2).toString(); //淡出動畫

            tween(this.runningScore.node.parent).delay(0.8).to(0.2, {
              scale: new Vec3(0.2, 0.2, 1)
            }).tag(this.tagNum).start();
            tween(this.runningScore.node.parent.getComponent(UIOpacity)).delay(0.8).to(0.2, {
              opacity: 0
            }).tag(this.tagNum).start();
          };
        }

        onLoad() {
          this.spine = this.node.getChildByName('spine');
          this.botSpine = this.node.getChildByName('botSpine'); // this.runScore(this.runningScore, 5, 1.2);
          // this.scheduleOnce(() => this.updateScore(1000, 5, true), 1);
          // this.scheduleOnce(() => this.updateScore(1000, 5, true, true), 6);
          // this.updateScore(100);
          // this.changeToFg(1);
          // this.changeToFg(0);
        }
        /** 0 MG 1 FG */


        changeToFg(free) {
          this.winSprite.spriteFrame = this.winSpriteFrame[free];
        }

        playMarquee(play) {
          // this.marquee.node.active = !play;
          if (play && !this.marquee.node.active) {
            // this.marquee.play();
            this.marquee.node.active = play;
          }

          this.winScore.node.parent.active = !play;
        }

        updateScore(score, bet, run = true, inFree = false) {
          // this.playMarquee(false);
          this.roundScore = score;
          this.bet = bet;
          this.inFree = inFree;
          this.winScore.node.parent.active = true;
          this.marquee.node.active = false;

          if (!inFree) {
            this.totalScore = 0;
            this.winScore.string = "0.00";
          }

          this.runningScore.string = "0.00";
          this.updatePosition();
          this.totalScore += this.roundScore;

          if (run) {
            this.addListener();
            this._running = true;
            this.runningScore.node.parent.active = true;
            this.runningScore.node.parent.scale = new Vec3(0.2, 0.2, 1);
            this.runningScore.node.parent.getComponent(UIOpacity).opacity = 255; //出現與滾分

            tween(this.runningScore.node.parent).tag(this.tagNum).parallel(this.runScore(this.runningScore, 1.5, score), tween(this.runningScore.node.parent).to(0.2, {
              scale: new Vec3(1, 1, 1)
            }).start().tag(this.tagNum), tween(this.runningScore.node.parent).delay(1.3).to(0.1, {
              scale: new Vec3(1.2, 1.2, 1)
            }).to(0.1, {
              scale: new Vec3(1, 1, 1)
            }).start().tag(this.tagNum), tween(this.runningScore.node.parent).delay(1.3).call(() => this.updateWinBlock(this.totalScore, bet, inFree)).start().tag(this.tagNum)); //淡出動畫

            tween(this.runningScore.node.parent).delay(1.5).call(() => {
              this.removeListener();
              this._running = false;
            }).delay(0.6).to(0.2, {
              scale: new Vec3(0.2, 0.2, 1)
            }).call(() => {
              this.updatePosition();
            }).tag(this.tagNum).start();
            tween(this.runningScore.node.parent.getComponent(UIOpacity)).delay(2.1).to(0.2, {
              opacity: 0
            }).tag(this.tagNum).start();
          } else {
            this.updateWinBlock(this.totalScore, bet, inFree);
          }
        }

        updatePosition() {
          this.winScore.updateRenderData(true);
          this.winScore.overflow = Overflow.NONE;
          const totalWidth = 900;
          const restWidth = totalWidth - this.winSprite.getComponent(UITransform).width - 50;
          let availableWidth = 0; // console.error("num Width", this.winScore.getComponent(UITransform).width);

          if (this.winScore.getComponent(UITransform).width > restWidth) {
            this.winScore.overflow = Overflow.SHRINK;
            this.winScore.getComponent(UITransform).width = restWidth;
          } else {
            this.winScore.overflow = Overflow.NONE;
            availableWidth = restWidth - this.winScore.getComponent(UITransform).width; // this.winSpriteNode.position = new Vec3(availableWidth / 3, this.winSpriteNode.position.y, 0);
          }

          this.winSprite.node.position = new Vec3(availableWidth / 3 - 450, this.winSprite.node.position.y, 0); // console.log("availableWidth", availableWidth);
          // console.log("tx x:", this.winSpriteNode.position.x);
          // console.log("tx width", this.winSpriteNode.getComponent(UITransform).width);
          // winScore.node.position.set(this.winSpriteNode.position.x + this.winSprite.getComponent(UITransform).width + availableWidth / 3+50, winScore.node.position.y, 0);

          this.winScore.node.position = new Vec3(this.winSprite.node.position.x + this.winSprite.getComponent(UITransform).width + availableWidth / 3 + 20, this.winScore.node.position.y, 0); // console.log("num x", winScore.node.position.x);
        }

        runScore(label, duration, value, float = 2) {
          let nowScore = Number(label.string);
          let o = {
            v: nowScore
          };
          let t = tween(o).to(duration, {
            v: value
          }, {
            onUpdate(target, ratio) {
              label.string = o.v.toFixed(float).toString();
            }

          }).tag(this.tagNum).start();
          return t;
        }

        /**更新贏得分數欄位 */
        async updateWinBlock(score, bet, inFree) {
          let times = score / bet;
          this._frameLevel = times >= 10 ? "03" : times >= 5 ? "02" : ""; // let winNode = this.node.getChildByName('winScore');

          let winNode = this.winScore.node.parent;
          tween(winNode).call(() => {
            this.winScore.string = score.toFixed(2).toString();
            this.updatePosition();
          }).to(0.1, {
            scale: new Vec3(1.2, 1.2, 1)
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).tag(this.tagNum).start();

          if (this._frameLevel) {
            this.spine.getComponent(UIOpacity).opacity = 255;
            this.botSpine.getComponent(UIOpacity).opacity = 255;
            const s = this.spine.getComponent(sp.Skeleton);
            s.setAnimation(0, `${this._frameLevel}_begin`, false);
            s.addAnimation(0, `${this._frameLevel}_loop`, true);
            const bs = this.botSpine.getComponent(sp.Skeleton);
            bs.setAnimation(0, `${this._frameLevel}_begin`, false);
            bs.addAnimation(0, `${this._frameLevel}_loop`, true);
            if (!inFree) tween(this.botSpine.getComponent(UIOpacity)).delay(0.8).to(0.2, {
              opacity: 0
            }).start();
            tween(this.spine.getComponent(UIOpacity)).delay(0.8).to(0.2, {
              opacity: 0
            }).start();
          }
        }

        addListener() {
          document.addEventListener("keypress", this.handleKey);
          document.addEventListener("click", this.stop);
          document.addEventListener("touchend", this.stop);
        }

        removeListener() {
          document.removeEventListener("keypress", this.handleKey);
          document.removeEventListener("click", this.stop);
          document.removeEventListener("touchend", this.stop);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "marquee", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "winSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "winScore", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "runningScore", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "winSpriteFrame", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=41732a4ced7b721d03764456d8408f9f1948ad3e.js.map