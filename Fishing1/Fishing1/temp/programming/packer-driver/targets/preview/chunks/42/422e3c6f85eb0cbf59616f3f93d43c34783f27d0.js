System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, MouseBehaviorClick, GameEventBase, ShootSpeedRate, log, MouseBehaviorAutoClick, _crd;

  function _reportPossibleCrUseOfMouseBehaviorClick(extras) {
    _reporterNs.report("MouseBehaviorClick", "./MouseBehaviorClick", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEventBase(extras) {
    _reporterNs.report("GameEventBase", "../../game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShootSpeedRate(extras) {
    _reporterNs.report("ShootSpeedRate", "../../game/mouseBehavior/MouseBehaviorDefinitionsBase", _context.meta, extras);
  }

  _export("MouseBehaviorAutoClick", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      MouseBehaviorClick = _unresolved_2.MouseBehaviorClick;
    }, function (_unresolved_3) {
      GameEventBase = _unresolved_3.GameEventBase;
    }, function (_unresolved_4) {
      ShootSpeedRate = _unresolved_4.ShootSpeedRate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "596d5yGbYBKcY4dLYQb368R", "MouseBehaviorAutoClick", undefined);
      /**
       * Created by EricHuang on 2023/10/05.
       */


      __checkObsolete__(['EventTouch', 'input']);

      __checkObsolete__(['log']);

      _export("MouseBehaviorAutoClick", MouseBehaviorAutoClick = class MouseBehaviorAutoClick extends (_crd && MouseBehaviorClick === void 0 ? (_reportPossibleCrUseOfMouseBehaviorClick({
        error: Error()
      }), MouseBehaviorClick) : MouseBehaviorClick) {
        //--這邊被鎖住了---
        set autoShoot(value) {
          this._autoShoot = value;

          if (value) {
            //---open
            this._testTimeStemp = Date.now();
            this._dirtyFlag = false;

            this._tween.restart();
          } else {
            this._dirtyFlag = true;
            this._testTimeStemp = 0;

            this._tween.pause();
          }
        }

        get autoShoot() {
          return this._autoShoot;
        }

        constructor() {
          super();
          this._tween = void 0;
          this._tweenObj = void 0;
          this._moveData = void 0;
          this._autoTime = void 0;
          this._autoShoot = void 0;
          this._testTimeStemp = void 0;

          /**
           * 20240318--用來限制完成與暫停之間的時間差空檔
           * 就是在tweenmax剛好完成,又呼叫暫停的時候,此時的istweening=false
           */
          this._dirtyFlag = void 0;
          this._autoTime = (_crd && ShootSpeedRate === void 0 ? (_reportPossibleCrUseOfShootSpeedRate({
            error: Error()
          }), ShootSpeedRate) : ShootSpeedRate).SHOOTING_RATE_STAND; //---一秒7

          this._autoShoot = false;
          this._tweenObj = {};
          this._testTimeStemp = 0;
          this._moveData = null;
          this._dirtyFlag = false; //---ts lambda function 沒有自己的上下文,要執行父類別的lambda function只能這樣

          /*
          this._mouseStartHandler=this.mouseEndHandler;
           this._mouseLeaveHandler=this.mouseLeaveHandler;
          
          this._mouseEndHandler=this.mouseEndHandler;
          
          this._mouseMoveHandler=this.mouseMoveHandler;
          */

          this._tween = new TweenMax(this._tweenObj, this._autoTime, {
            onComplete: () => {
              if (!this._autoShoot) {
                var clickObj = {};
                var directData = false; //--20230417如果計時器運作期間內,關閉定向射擊,他會打出最後一發

                if (!this._directionShoot && this._directionPoint.x == -1 && this._directionPoint.y == -1) {
                  clickObj = this._mobilePositions != null ? this._mobilePositions : this.getInputMousePos();

                  if (clickObj) {
                    clickObj.longPress = true;
                  } //clickObj.direction=false;

                } else {
                  clickObj = {
                    endX: this._directionPoint.x,
                    endY: this._directionPoint.y
                  };
                  clickObj.direction = true;
                  directData = true;
                }

                if (this._lastShootForDirection) {
                  this._lastShootForDirection = false;
                } else {
                  var emitTimLongPress = Date.now(); //log('autoShootTimeStemp',emitTimLongPress-this._testTimeStemp);

                  if (emitTimLongPress - this._testTimeStemp >= this._autoTime * 1000) {
                    this.node.emit((_crd && GameEventBase === void 0 ? (_reportPossibleCrUseOfGameEventBase({
                      error: Error()
                    }), GameEventBase) : GameEventBase).CLICK_SHOOT, clickObj);
                  }
                }

                if (this._strMouse2dAction == "down" || directData) {
                  //--鎖定道具在非使用的狀態下才會啟動
                  this._testTimeStemp = Date.now();

                  this._tween.restart();
                }
              } else {
                //log('finishAutoShoot');
                var emitTim = Date.now(); //log('autoShootTimeStemp',emitTim-this._testTimeStemp);

                if (emitTim - this._testTimeStemp >= this._autoTime * 1000) {
                  this.node.emit((_crd && GameEventBase === void 0 ? (_reportPossibleCrUseOfGameEventBase({
                    error: Error()
                  }), GameEventBase) : GameEventBase).AUTO_SHOOT);
                }

                this._testTimeStemp = Date.now();

                if (!this._dirtyFlag) {
                  this._tween.restart(); //log('finishAutoShoot');

                }
              }
            }
          });
          this._testTimeStemp = 0; //log('check_InitTween',TweenMax.isTweening(this._tweenObj));

          this._tween.pause();
        }

        init() {
          super.init();
        }

        unBlockALL() {
          this._block = false;

          if (this._drillblock == true && this._flagLongpress == true && this._leaveClick == false) {
            this._drillblock = false;
            this._strMouse2dAction = "down";

            if (!TweenMax.isTweening(this._tweenObj) && !this._autoShoot) {
              //---鎖定道具沒有使用才會啟動
              //log("RRRRRRRRRRRRRRRRRRRRRRR");
              this._testTimeStemp = Date.now();

              this._tween.restart();
            }
          } else if (this._drillblock == true) {
            this._drillblock = false;
          }
        }

        checkClickStatus() {
          var value = this._strMouse2dAction == "down" && this._flagLongpress ? true : false;
          return value;
        }

        resetClickStatus() {
          this._strMouse2dAction = "up";
          this._flagLongpress = false;
        }

        resetDitrectShoot() {
          this._directionShoot = false;
          this._directionPoint.x = -1;
          this._directionPoint.y = -1;
          this._lastShootForDirection = true;
        }

        getAutoUpdatStstus() {
          return TweenMax.isTweening(this._tweenObj);
        }

        pauseAutoShootTime() {
          log('check_pauseAutoShootTime', TweenMax.isTweening(this._tweenObj));
          this._dirtyFlag = true;

          if (TweenMax.isTweening(this._tweenObj)) {
            log("pause___pauseKeepShootTime");
            this._testTimeStemp = 0;

            this._tween.pause();
          }
        }

        reStartAutoShoot() {
          log("reStartAutoShoot>>>>" + TweenMax.isTweening(this._tweenObj));
          this._dirtyFlag = false;

          if (!TweenMax.isTweening(this._tweenObj)) {
            log("restart_@@@@@@@@");
            this._testTimeStemp = Date.now();

            this._tween.restart();
          }
        } //----玩家被斷線的情況


        removeAutoShoot() {
          log("pause___removeAutoShoot");
          this._testTimeStemp = 0;

          this._tween.pause();

          TweenMax.killTweensOf(this._tweenObj);
        } //---2019/09/05--change shooting rate----


        changeShootingrate(rate) {
          log("changeShootingrate>>" + rate, this._autoTime);

          if (rate != this._autoTime) {
            if (TweenMax.isTweening(this._tweenObj)) {
              //---啟動鎖定道具 & 連發正在進行中
              this._testTimeStemp = 0;

              this._tween.pause();
            }

            this._autoTime = rate;

            this._tween.duration(this._autoTime);

            this._testTimeStemp = Date.now();

            this._tween.restart();
          }
        }

        setCrazyTime(value) {
          log("pause___setCrazyTime");

          if (TweenMax.isTweening(this._tweenObj)) {
            //---啟動鎖定道具 & 連發正在進行中
            this._testTimeStemp = 0;

            this._tween.pause();
          } //--stand=0.14=1秒7,crazy=0.07=1秒14


          this._autoTime = value ? (_crd && ShootSpeedRate === void 0 ? (_reportPossibleCrUseOfShootSpeedRate({
            error: Error()
          }), ShootSpeedRate) : ShootSpeedRate).SHOOTING_RATE_CRAZY : (_crd && ShootSpeedRate === void 0 ? (_reportPossibleCrUseOfShootSpeedRate({
            error: Error()
          }), ShootSpeedRate) : ShootSpeedRate).SHOOTING_RATE_STAND; //---一秒14

          this._tween.duration(this._autoTime);
        }

        mouseStartHandler(e) {
          super.mouseStartHandler(e); //this._mouseStartHandler(e);

          if (!TweenMax.isTweening(this._tweenObj) && !this._autoShoot) {
            //---mouse up的時候會puase
            log('@@@_mouseDown_starTween', this._autoTime);
            this._testTimeStemp = Date.now();

            this._tween.restart();

            if (!this._directionShoot) {
              this._flagLongpress = true;
            }
          }
        }

        mouseLeaveHandler(e) {
          if (TweenMax.isTweening(this._tweenObj) && !this._autoShoot) {
            if (!this._directionShoot && this._directionPoint.x == -1 && this._directionPoint.y == -1) {
              this._testTimeStemp = 0;

              this._tween.pause();
            }

            if (!this._drillblock) {
              this._flagLongpress = false;
            }
          }

          super.mouseLeaveHandler(e);
        }

        mouseEndHandler(e) {
          if (TweenMax.isTweening(this._tweenObj) && !this._autoShoot) {
            //log("mouse_up_pause");
            if (!this._directionShoot && this._directionPoint.x == -1 && this._directionPoint.y == -1) {
              this._testTimeStemp = 0;

              this._tween.pause();
            }

            if (!this._drillblock) {
              this._flagLongpress = false;
            }
          }

          super.mouseEndHandler(e);
        }

        mouseMoveHandler(e) {
          log('mouseMoveHandler', e);
          this._moveData = e;
          super.mouseMoveHandler(e);
        }

        getInputMousePos() {
          //let pos=v2(input.)
          return this.getMousePosition(this._moveData);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=422e3c6f85eb0cbf59616f3f93d43c34783f27d0.js.map