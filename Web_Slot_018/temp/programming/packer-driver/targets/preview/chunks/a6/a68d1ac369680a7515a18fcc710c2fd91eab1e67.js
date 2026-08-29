System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "cc/env", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _easing, tween, v3, Vec3, ReelBase, ReelEvent, ReelRoundState, ReelState, TweenEasingType, DEBUG, ComponentExt, _dec, _class, _crd, ccclass, property, GameReel;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfReelBase(extras) {
    _reporterNs.report("ReelBase", "../../Scripts/ReelBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameIcon(extras) {
    _reporterNs.report("GameIcon", "../../Scripts/GameIcon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelData(extras) {
    _reporterNs.report("ReelData", "../../Scripts/Model/ReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelEvent(extras) {
    _reporterNs.report("ReelEvent", "../../Scripts/Model/ReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelRoundState(extras) {
    _reporterNs.report("ReelRoundState", "../../Scripts/Model/ReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelState(extras) {
    _reporterNs.report("ReelState", "../../Scripts/Model/ReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTweenEasingType(extras) {
    _reporterNs.report("TweenEasingType", "../../Scripts/Model/ReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentExt(extras) {
    _reporterNs.report("ComponentExt", "../../../../Utils/ComponentExt", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      _easing = _cc.easing;
      tween = _cc.tween;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ReelBase = _unresolved_2.ReelBase;
    }, function (_unresolved_3) {
      ReelEvent = _unresolved_3.ReelEvent;
      ReelRoundState = _unresolved_3.ReelRoundState;
      ReelState = _unresolved_3.ReelState;
      TweenEasingType = _unresolved_3.TweenEasingType;
    }, function (_ccEnv) {
      DEBUG = _ccEnv.DEBUG;
    }, function (_unresolved_4) {
      ComponentExt = _unresolved_4.ComponentExt;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ec9eccdhbZCmre+xPL5/ViM", "GameReel", undefined);

      __checkObsolete__(['_decorator', 'easing', 'Node', 'TweenEasing', 'Tween', 'tween', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameReel", GameReel = (_dec = ccclass('GameReel'), _dec(_class = class GameReel extends (_crd && ReelBase === void 0 ? (_reportPossibleCrUseOfReelBase({
        error: Error()
      }), ReelBase) : ReelBase) {
        constructor() {
          super(...arguments);
          this.prepareIconList = [];
          this.resultIconList = [];
          this.startPullIcon = null;
          // 紀錄開始滾的拉條效果icon
          this.endBounceIcon = null;
          // 紀錄結束的彈跳效果icon
          this.onBounceMaxCallback = null;
          this.currentDuration = 0;
          this._gameReelData = null;
          this._isStartPullRoll = false;
          this._isBounceRoll = false;
          this._bounceTargetPos = v3(0, 0, 0);
          this._originalPos = Vec3.ZERO;
          this._targetPos = Vec3.ZERO;
        }

        get gameReelData() {
          return this._gameReelData;
        }

        init(reelID, iconNodes, havePrepareIcon, showIcons) {
          var _this$onReelEvent;

          super.init(reelID, iconNodes, havePrepareIcon);
          this._originalPos = this.rootNode.getPosition();
          this._targetPos = this._isVertical ? v3(0, this._rollDis * this._currentDirUnit[1], 0) : v3(this._rollDis * this._currentDirUnit[0], 0, 0);
          this._gameReelData = this._reelData;
          this.currentDuration = 1 / this._gameReelData.rollSpeed;
          this.setIconList(iconNodes);
          this.initShowIcon(showIcons);
          this.calculateBounceTargetPos();
          this.currentState = (_crd && ReelState === void 0 ? (_reportPossibleCrUseOfReelState({
            error: Error()
          }), ReelState) : ReelState).Idle;
          (_this$onReelEvent = this.onReelEvent) == null || _this$onReelEvent.call(this, this.reelID, (_crd && ReelEvent === void 0 ? (_reportPossibleCrUseOfReelEvent({
            error: Error()
          }), ReelEvent) : ReelEvent).Init);
        }

        rollSetting(reelRoundState, showSymbol) {
          this.currentDuration = 1 / this._gameReelData.rollSpeed;

          if (this._gameReelData.startPull && reelRoundState === (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
            error: Error()
          }), ReelRoundState) : ReelRoundState).FirstRoll) {
            this._isStartPullRoll = true;
            this.currentDuration *= 1 / this._gameReelData.startPullTime;
          } else if (this._gameReelData.endBounce && reelRoundState === (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
            error: Error()
          }), ReelRoundState) : ReelRoundState).FinalRoll) {
            this._isBounceRoll = true;

            if (showSymbol) {
              this.endBounceIcon.updateSymbol(showSymbol);
            }
          }
        }

        startOneRoundRoll() {
          this.onReelEvent(this.reelID, (_crd && ReelEvent === void 0 ? (_reportPossibleCrUseOfReelEvent({
            error: Error()
          }), ReelEvent) : ReelEvent).Start);
          tween(this._rootNode).by(this.currentDuration, {
            position: this._targetPos
          }, {
            easing: time => {
              this.currentState = (_crd && ReelState === void 0 ? (_reportPossibleCrUseOfReelState({
                error: Error()
              }), ReelState) : ReelState).Rolling;
              this.onReelEvent(this.reelID, (_crd && ReelEvent === void 0 ? (_reportPossibleCrUseOfReelEvent({
                error: Error()
              }), ReelEvent) : ReelEvent).Update);

              if (this._isStartPullRoll) {
                return this._gameReelData.startCurve.evaluate(time);
              } else {
                return _easing.linear(time);
              }
            }
          }).call(() => {
            this.rollOneRoundEnd();
          }).start();
        }

        calculateBounceTargetPos() {
          if (this._gameReelData.endBounce) {
            var dis = this._gameReelData.bounceDis;
            this._bounceTargetPos = this._isVertical ? v3(0, dis * this._currentDirUnit[1], 0) : v3(dis * this._currentDirUnit[0], 0, 0);
          }
        }

        setIconList(iconNodes) {
          for (var index = 0; index < iconNodes.length; index++) {
            var icon = iconNodes[index];

            if (index < this._iconAmount) {
              this.prepareIconList.push(icon);
            } else {
              this.resultIconList.push(icon);
            }
          }
        }

        startBounce() {
          return new Promise((resolve, reject) => {
            var duration = this._gameReelData.downBounceDuration;
            var downEasing = (_crd && TweenEasingType === void 0 ? (_reportPossibleCrUseOfTweenEasingType({
              error: Error()
            }), TweenEasingType) : TweenEasingType)[this._gameReelData.downBounceEasing];

            if (DEBUG) {
              this.calculateBounceTargetPos();
            }

            tween(this._rootNode).by(duration, {
              position: this._bounceTargetPos
            }, {
              easing: downEasing
            }).call(() => {
              this.onBounceMax();
            }).delay(this._gameReelData.bounceDelay).then(this.bounceUpTween()).call(() => {
              resolve(null);
            }).start();
          });
        }

        bounceUpTween() {
          var duration = this._gameReelData.upBounceDuration;
          var upEasing = (_crd && TweenEasingType === void 0 ? (_reportPossibleCrUseOfTweenEasingType({
            error: Error()
          }), TweenEasingType) : TweenEasingType)[this._gameReelData.upBounceEasing];
          var bounceUpTargetPos = v3(-this._bounceTargetPos.x, -this._bounceTargetPos.y, 0);
          var resultTween = tween(this._rootNode).by(duration, {
            position: bounceUpTargetPos
          }, {
            easing: upEasing
          });
          return resultTween;
        }
        /**
         * 回彈到最大值時觸發
         */


        onBounceMax() {
          var _this$onBounceMaxCall;

          (_this$onBounceMaxCall = this.onBounceMaxCallback) == null || _this$onBounceMaxCall.call(this);
        }

        rollOneRoundEnd() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this._isStartPullRoll) {
              _this._isStartPullRoll = false;
            } else if (_this._isBounceRoll) {
              yield _this.startBounce();
              _this._isBounceRoll = false;
            }

            _this.rootNode.setPosition(_this._originalPos);

            _this.currentDuration = 1 / _this._gameReelData.rollSpeed;
            _this.currentState = (_crd && ReelState === void 0 ? (_reportPossibleCrUseOfReelState({
              error: Error()
            }), ReelState) : ReelState).Idle;

            _this.onReelEvent(_this.reelID, (_crd && ReelEvent === void 0 ? (_reportPossibleCrUseOfReelEvent({
              error: Error()
            }), ReelEvent) : ReelEvent).End);
          })();
        }

        initShowIcon(showIcons) {
          for (var index = 0; index < showIcons.length; index++) {
            var icon = (_crd && ComponentExt === void 0 ? (_reportPossibleCrUseOfComponentExt({
              error: Error()
            }), ComponentExt) : ComponentExt).getComp(showIcons[index], 'GameIcon');
            var isStartPull = index === 0;
            var totalIconAmount = this.prepareIconList.length + this.resultIconList.length;
            var initPos = isStartPull ? this.calculateIconPos(totalIconAmount) : this.calculateIconPos(-1);
            icon.setPosition(initPos);
            var siblingIndex = isStartPull ? totalIconAmount + 1 : 0;
            icon.originSiblingIndex = siblingIndex;
            icon.node.setSiblingIndex(siblingIndex);
            icon.init();

            if (isStartPull) {
              this.startPullIcon = icon;
            } else {
              this.endBounceIcon = icon;
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a68d1ac369680a7515a18fcc710c2fd91eab1e67.js.map