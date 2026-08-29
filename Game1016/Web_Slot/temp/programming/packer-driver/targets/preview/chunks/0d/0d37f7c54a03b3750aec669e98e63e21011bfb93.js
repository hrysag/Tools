System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, easing, v3, DEBUG, ReelEvent, ReelRoundState, ReelState, TweenEasingType, ComponentExt, ReelBase, rollDirection, Movement, _dec, _class, _crd, ccclass, property, IconReel;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfGameIcon(extras) {
    _reporterNs.report("GameIcon", "../GameIcon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelData(extras) {
    _reporterNs.report("ReelData", "../Model/ReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelEvent(extras) {
    _reporterNs.report("ReelEvent", "../Model/ReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelRoundState(extras) {
    _reporterNs.report("ReelRoundState", "../Model/ReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelState(extras) {
    _reporterNs.report("ReelState", "../Model/ReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTweenEasingType(extras) {
    _reporterNs.report("TweenEasingType", "../Model/ReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentExt(extras) {
    _reporterNs.report("ComponentExt", "../Util/ComponentExt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelBase(extras) {
    _reporterNs.report("ReelBase", "../ReelBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrollDirection(extras) {
    _reporterNs.report("rollDirection", "../Model/ReelDataBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMovement(extras) {
    _reporterNs.report("Movement", "../Util/Movement", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      easing = _cc.easing;
      v3 = _cc.v3;
    }, function (_ccEnv) {
      DEBUG = _ccEnv.DEBUG;
    }, function (_unresolved_2) {
      ReelEvent = _unresolved_2.ReelEvent;
      ReelRoundState = _unresolved_2.ReelRoundState;
      ReelState = _unresolved_2.ReelState;
      TweenEasingType = _unresolved_2.TweenEasingType;
    }, function (_unresolved_3) {
      ComponentExt = _unresolved_3.ComponentExt;
    }, function (_unresolved_4) {
      ReelBase = _unresolved_4.ReelBase;
    }, function (_unresolved_5) {
      rollDirection = _unresolved_5.rollDirection;
    }, function (_unresolved_6) {
      Movement = _unresolved_6.Movement;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5a06e2mudpMOZ7rRMFUxRqW", "IconReel", undefined);

      __checkObsolete__(['_decorator', 'easing', 'log', 'Node', 'TweenEasing', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("IconReel", IconReel = (_dec = ccclass('IconReel'), _dec(_class = class IconReel extends (_crd && ReelBase === void 0 ? (_reportPossibleCrUseOfReelBase({
        error: Error()
      }), ReelBase) : ReelBase) {
        constructor() {
          super(...arguments);
          this.iconNodeList = [];
          this.startPullIcon = null;
          // 紀錄開始滾的拉條效果icon
          this.endBounceIcon = null;
          // 紀錄結束的彈跳效果icon以及prepareIcon
          this.onBounceMaxCallback = null;
          this.currentDuration = 0;
          this._gameReelData = null;
          this._startPullOriginPos = v3(0, 0, 0);
          this._unitTargetPos = v3(0, 0, 0);
          this._iconInitPos = v3(0, 0, 0);
          this._isStartPullRoll = false;
          this._bounceTargetPos = v3(0, 0, 0);
          this.iconMovementList = [];
        }

        get gameReelData() {
          return this._gameReelData;
        }

        init(reelID, iconNodes, havePrepareIcon, showIcons) {
          var _this$onReelEvent;

          super.init(reelID, iconNodes, havePrepareIcon);
          this._unitTargetPos = this._isVertical ? v3(0, this._unitDis * this._currentDirUnit[1], 0) : v3(this._unitDis * this._currentDirUnit[0], 0, 0);
          this._gameReelData = this._reelData;
          this.currentDuration = 1 / this._gameReelData.rollSpeed;
          this.iconNodeList = [...iconNodes];
          this.initShowIcon(showIcons);
          this.iconNodeList.unshift(this.endBounceIcon.node); //回彈icon做為prepareIcon

          this.initIconMovement();
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

            if (showSymbol) {
              this.startPullIcon.updateSymbol(showSymbol);
            }
          }
        }

        startOneRoundRoll() {
          var _this$onReelEvent2;

          (_this$onReelEvent2 = this.onReelEvent) == null || _this$onReelEvent2.call(this, this.reelID, (_crd && ReelEvent === void 0 ? (_reportPossibleCrUseOfReelEvent({
            error: Error()
          }), ReelEvent) : ReelEvent).Start);

          if (this._isStartPullRoll) {
            this.startPullRollTween();
          }

          for (var index = 0; index < this.iconNodeList.length; index++) {
            this.startRollTween(index);
          }
        }

        startRollTween(index) {
          var movement = this.iconMovementList[index];
          movement.moveBy(this._unitTargetPos, this.currentDuration, true, time => {
            if (this._isStartPullRoll) {
              return this._gameReelData.startCurve.evaluate(time);
            } else {
              return easing.linear(time);
            }
          });
          movement.play(() => {
            this.oneIconRollEnd(this.iconNodeList[index]);
          });
        }

        startPullRollTween() {
          var movement = this.startPullIcon.getComponent(_crd && Movement === void 0 ? (_reportPossibleCrUseOfMovement({
            error: Error()
          }), Movement) : Movement);
          this.startPullIcon.setPosition(this._startPullOriginPos);
          movement.moveBy(this._unitTargetPos, this.currentDuration, true, time => {
            return this._gameReelData.startCurve.evaluate(time);
          });
          movement.play();
        }

        calculateBounceTargetPos() {
          if (this._gameReelData.endBounce) {
            var dis = this._gameReelData.bounceDis;
            this._bounceTargetPos = this._isVertical ? v3(0, dis * this._currentDirUnit[1], 0) : v3(dis * this._currentDirUnit[0], 0, 0);
          }
        }
        /**
         * 回彈額外由view去呼叫，跟startOneRoundRoll切開，這樣bounceMax才能操作正確的icon
         */


        startBounce() {
          var _this = this;

          return _asyncToGenerator(function* () {
            yield _this.bouncePromise(true);

            _this.onBounceMax();

            yield _this.bouncePromise(false);
          })();
        }

        bouncePromise(isBounceDown) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var promiseList = [];

            for (var index = 0; index < _this2.iconNodeList.length; index++) {
              if (isBounceDown) {
                promiseList.push(_this2.startBounceDownTween(index));
              } else {
                promiseList.push(_this2.startBounceUpTween(index));
              }
            }

            yield Promise.all(promiseList);
          })();
        }

        startBounceDownTween(index) {
          return new Promise((resolve, reject) => {
            if (DEBUG) {
              this.calculateBounceTargetPos();
            }

            var movement = this.iconMovementList[index];
            var downDuration = this._gameReelData.downBounceDuration;
            var downEasing = (_crd && TweenEasingType === void 0 ? (_reportPossibleCrUseOfTweenEasingType({
              error: Error()
            }), TweenEasingType) : TweenEasingType)[this._gameReelData.downBounceEasing];
            movement.moveBy(this._bounceTargetPos, downDuration, true, downEasing);
            movement.play(() => {
              resolve();
            });
          });
        }

        startBounceUpTween(index) {
          return new Promise((resolve, reject) => {
            var movement = this.iconMovementList[index];
            var upDuration = this._gameReelData.upBounceDuration;
            var upEasing = (_crd && TweenEasingType === void 0 ? (_reportPossibleCrUseOfTweenEasingType({
              error: Error()
            }), TweenEasingType) : TweenEasingType)[this._gameReelData.upBounceEasing];
            var bounceUpTargetPos = v3(-this._bounceTargetPos.x, -this._bounceTargetPos.y, 0);
            movement.moveBy(bounceUpTargetPos, upDuration, true, upEasing);
            movement.play(() => {
              resolve();
            });
          });
        }
        /**
         * 回彈到最大值時觸發
         */


        onBounceMax() {
          var _this$onBounceMaxCall;

          (_this$onBounceMaxCall = this.onBounceMaxCallback) == null || _this$onBounceMaxCall.call(this, this.reelID);
        }

        oneIconRollEnd(node) {
          if (this.checkAllIconRollEnd(node)) {
            this.changeIconPos();
            this.allIconRollEnd();
          }
        }

        checkAllIconRollEnd(node) {
          switch (this.gameReelData.reelDir) {
            case (_crd && rollDirection === void 0 ? (_reportPossibleCrUseOfrollDirection({
              error: Error()
            }), rollDirection) : rollDirection).Up:
              if (node.position.y >= this._startPullOriginPos.y) {
                return true;
              }

              break;

            case (_crd && rollDirection === void 0 ? (_reportPossibleCrUseOfrollDirection({
              error: Error()
            }), rollDirection) : rollDirection).Down:
              if (node.position.y <= this._startPullOriginPos.y) {
                return true;
              }

              break;

            case (_crd && rollDirection === void 0 ? (_reportPossibleCrUseOfrollDirection({
              error: Error()
            }), rollDirection) : rollDirection).Left:
              if (node.position.x <= this._startPullOriginPos.x) {
                return true;
              }

              break;

            case (_crd && rollDirection === void 0 ? (_reportPossibleCrUseOfrollDirection({
              error: Error()
            }), rollDirection) : rollDirection).Right:
              if (node.position.x >= this._startPullOriginPos.x) {
                return true;
              }

              break;

            default:
              break;
          }

          return false;
        }

        allIconRollEnd() {
          var _this$onReelEvent3;

          if (this._isStartPullRoll) {
            this._isStartPullRoll = false;
          }

          this.currentDuration = 1 / this._gameReelData.rollSpeed;
          this.currentState = (_crd && ReelState === void 0 ? (_reportPossibleCrUseOfReelState({
            error: Error()
          }), ReelState) : ReelState).Idle;
          (_this$onReelEvent3 = this.onReelEvent) == null || _this$onReelEvent3.call(this, this.reelID, (_crd && ReelEvent === void 0 ? (_reportPossibleCrUseOfReelEvent({
            error: Error()
          }), ReelEvent) : ReelEvent).End);
        }

        changeIconPos() {
          var lastIconNode = this.iconNodeList.pop();
          lastIconNode.setPosition(this._iconInitPos);
          lastIconNode.setSiblingIndex(0);
          this.iconNodeList.unshift(lastIconNode);
          this.endBounceIcon = (_crd && ComponentExt === void 0 ? (_reportPossibleCrUseOfComponentExt({
            error: Error()
          }), ComponentExt) : ComponentExt).getComp(lastIconNode, 'GameIcon');
          this.endBounceIcon.originSiblingIndex = lastIconNode.getSiblingIndex();
          var lastMovement = this.iconMovementList.pop();
          this.iconMovementList.unshift(lastMovement);
        }

        initIconMovement() {
          for (var i = 0; i < this.iconNodeList.length; i++) {
            var movement = this.iconNodeList[i].getComponent(_crd && Movement === void 0 ? (_reportPossibleCrUseOfMovement({
              error: Error()
            }), Movement) : Movement);

            if (!movement) {
              this.iconMovementList[i] = this.iconNodeList[i].addComponent(_crd && Movement === void 0 ? (_reportPossibleCrUseOfMovement({
                error: Error()
              }), Movement) : Movement);
            } else {
              this.iconMovementList[i] = movement;
            }
          }

          this.startPullIcon.addComponent(_crd && Movement === void 0 ? (_reportPossibleCrUseOfMovement({
            error: Error()
          }), Movement) : Movement);
        }

        initShowIcon(showIcons) {
          for (var index = 0; index < showIcons.length; index++) {
            var icon = (_crd && ComponentExt === void 0 ? (_reportPossibleCrUseOfComponentExt({
              error: Error()
            }), ComponentExt) : ComponentExt).getComp(showIcons[index], 'GameIcon');
            var isStartPull = index === 0;
            var totalIconAmount = this.iconNodeList.length;

            if (!this._reelData.useLayout) {
              var initPos = isStartPull ? this.calculateIconPos(totalIconAmount) : this.calculateIconPos(-1);
              icon.setPosition(initPos);
            }

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

          this.scheduleOnce(() => {
            //如果使用layout排版，等待layout更新
            this._iconInitPos = this.endBounceIcon.node.position.clone();
            this._startPullOriginPos = this.startPullIcon.node.position.clone();
          }, 0);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0d37f7c54a03b3750aec669e98e63e21011bfb93.js.map