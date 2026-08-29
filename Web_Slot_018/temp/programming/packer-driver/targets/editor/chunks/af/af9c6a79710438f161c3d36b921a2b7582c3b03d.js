System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Animation, Vec3, Label, AnimationClip, tween, BindTarget, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, WinScoreState, WinSingle;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Animation = _cc.Animation;
      Vec3 = _cc.Vec3;
      Label = _cc.Label;
      AnimationClip = _cc.AnimationClip;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "585ad5JvOdLzJWKWdNsvMqt", "WinSingle", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Animation', 'Vec3', 'Label', 'AnimationClip', 'tween', 'Tween']);

      ({
        ccclass,
        property
      } = _decorator);

      WinScoreState = /*#__PURE__*/function (WinScoreState) {
        WinScoreState[WinScoreState["None"] = 0] = "None";
        WinScoreState[WinScoreState["Start"] = 1] = "Start";
        WinScoreState[WinScoreState["IdleLoop"] = 2] = "IdleLoop";
        WinScoreState[WinScoreState["End"] = 3] = "End";
        return WinScoreState;
      }(WinScoreState || {});

      _export("WinSingle", WinSingle = (_dec = ccclass('WinSingle'), _dec2 = property(Animation), _dec3 = property(Node), _dec4 = property(AnimationClip), _dec5 = property(AnimationClip), _dec6 = property(AnimationClip), _dec7 = property(AnimationClip), _dec(_class = (_class2 = class WinSingle extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "winAnimation", _descriptor, this);

          _initializerDefineProperty(this, "numberRoot", _descriptor2, this);

          _initializerDefineProperty(this, "showWinDefault", _descriptor3, this);

          _initializerDefineProperty(this, "ShowWinIn", _descriptor4, this);

          _initializerDefineProperty(this, "ShowWinLoop", _descriptor5, this);

          _initializerDefineProperty(this, "ShowWinOut", _descriptor6, this);

          this.scoreLabelNode = null;
          this.currentState = WinScoreState.Start;
          this.idleLoopDuration = 1;
          this.scoreRunDuration = 2;
          this.onShowWinEnd = null;
          this.onScoreRunEnd = null;
          this.onBGClickCB = null;
          this.score = 0;
          this.scoreRunTween = null;
        }

        showWin(score, scoreRunDuration, idleLoopDuration, onScoreRunEnd, onEnd = null) {
          this.score = score;
          this.onBGClickCB = this.onBGClick;
          this.scoreRunDuration = scoreRunDuration;
          this.idleLoopDuration = idleLoopDuration;
          this.onShowWinEnd = onEnd;
          this.onScoreRunEnd = onScoreRunEnd;
          this.node.setActive(true);
          this.currentState = WinScoreState.None;
          this.winAnimation.playWithCallback(this.showWinDefault.name, () => {
            this.currentState = WinScoreState.Start;
            this.winAnimation.playWithCallback(this.ShowWinIn.name, () => {
              this.winAnimation.play(this.ShowWinLoop.name);
            });
            this.runScore(score, this.scoreRunDuration);
          });
        }

        onRunScoreTweenEnd(isClickEnd) {
          var _this$onScoreRunEnd;

          (_this$onScoreRunEnd = this.onScoreRunEnd) == null || _this$onScoreRunEnd.call(this, isClickEnd);
          this.currentState = WinScoreState.IdleLoop;
          this.scheduleOnce(this.onIdleLoopEnd, this.idleLoopDuration);
        }

        onIdleLoopEnd() {
          this.currentState = WinScoreState.End;
          this.winAnimation.playWithCallback(this.ShowWinOut.name, () => {
            var _this$onShowWinEnd;

            this.node.setActive(false);
            (_this$onShowWinEnd = this.onShowWinEnd) == null || _this$onShowWinEnd.call(this);
          });
        }

        runScore(score, duration) {
          this.scoreLabelNode.setActive(true);
          let target = new BindTarget();
          this.scoreRunTween = tween(target).to(duration, {
            score: score
          }, {
            onUpdate: (v, ratio) => {
              let current = Math.floor(score * ratio);
              this.setScore(current);
            },
            onComplete: target => {
              // 回调，当缓动动作更新时触发。
              this.setScore(score);
              this.onRunScoreTweenEnd(false);
            }
          }).start();
        }

        setScore(score) {
          this.scoreLabelNode.getComponent(Label).string = `${score.numberComma()}`;
        }

        setScoreLabel(scoreLabelNode) {
          scoreLabelNode.setParent(this.numberRoot);
          scoreLabelNode.setPosition(Vec3.ZERO);
          scoreLabelNode.setScale(Vec3.ONE);
          scoreLabelNode.setActive(false);
          scoreLabelNode.getComponent(Label).string = '';
          this.scoreLabelNode = scoreLabelNode;
        }

        onBGClick() {
          switch (this.currentState) {
            case WinScoreState.Start:
              this.unscheduleAllCallbacks();
              this.stopScoreRunTween();
              this.setScore(this.score);
              this.onRunScoreTweenEnd(true);
              break;

            case WinScoreState.IdleLoop:
              this.unscheduleAllCallbacks();
              this.onIdleLoopEnd();
              break;

            default:
              break;
          }
        }

        stopScoreRunTween() {
          if (this.scoreRunTween) {
            this.scoreRunTween.stop();
            this.scoreRunTween = null;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "winAnimation", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "numberRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "showWinDefault", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ShowWinIn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ShowWinLoop", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ShowWinOut", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      BindTarget = class BindTarget {
        constructor() {
          this.score = 0;
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=af9c6a79710438f161c3d36b921a2b7582c3b03d.js.map