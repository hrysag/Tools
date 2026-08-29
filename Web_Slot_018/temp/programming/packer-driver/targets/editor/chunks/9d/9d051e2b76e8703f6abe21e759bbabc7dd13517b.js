System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tween, v3, Vec3, ReelBase, DropState, DropMode, _dec, _class, _crd, ccclass, property, DropReel;

  function _reportPossibleCrUseOfReelBase(extras) {
    _reporterNs.report("ReelBase", "../ReelBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDropState(extras) {
    _reporterNs.report("DropState", "./SettingData/DropReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDropReelData(extras) {
    _reporterNs.report("DropReelData", "./SettingData/DropReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDropMode(extras) {
    _reporterNs.report("DropMode", "./SettingData/DropReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconMoveData(extras) {
    _reporterNs.report("IconMoveData", "./DropReelDataStructure", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      tween = _cc.tween;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ReelBase = _unresolved_2.ReelBase;
    }, function (_unresolved_3) {
      DropState = _unresolved_3.DropState;
      DropMode = _unresolved_3.DropMode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d30acXBIDZIbYiWbSOyemTY", "DropReel", undefined);

      __checkObsolete__(['_decorator', 'Node', 'tween', 'TweenEasing', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DropReel", DropReel = (_dec = ccclass('DropReel'), _dec(_class = class DropReel extends (_crd && ReelBase === void 0 ? (_reportPossibleCrUseOfReelBase({
        error: Error()
      }), ReelBase) : ReelBase) {
        constructor(...args) {
          super(...args);
          this._dropReelData = null;
          this._dropDistance = new Vec3(0, 0, 0);
          this._resetDistance = new Vec3(0, 0, 0);
          this._curMode = (_crd && DropMode === void 0 ? (_reportPossibleCrUseOfDropMode({
            error: Error()
          }), DropMode) : DropMode).IDLE;
          this._curDuration = 0;
          this._curDropSpacingTime = 0;
          this._curEasingType = null;
        }

        get dropDistance() {
          return this._dropDistance;
        }

        get resetDistance() {
          return this._resetDistance;
        }

        set curMode(status) {
          this._curMode = status;
        }

        init(reelID, iconNodes, havePrepareIcon = false) {
          super.init(reelID, iconNodes, havePrepareIcon);
          this._dropDistance = this._isVertical ? v3(0, -this._unitDis, 0) : v3(-this._unitDis, 0, 0);
          Vec3.negate(this.resetDistance, this._dropDistance);
          this._dropReelData = this._reelData;
        }

        startOneRoundRoll() {
          console.warn("Not support startOneRoundRoll in DropReel");
        }

        async startDropTween(data, state) {
          let mode = this._curMode;
          this.rollSetting(state, mode);
          let promiseList = [];
          let delayCount = 0;

          for (let i = data.length - 1; i >= 0; i--) {
            // 由下往上逐一掉落
            if (data[i].moveCount === 0) {
              continue; // 這個Node沒有移動
            }

            let delayTime = this._curDropSpacingTime * delayCount;
            let tweenPromise = this.delayDropTween(delayTime, data[i].node, data[i].moveCount, this._curEasingType);
            promiseList.push(tweenPromise);
            delayCount++;
          }

          await Promise.all(promiseList);
        }

        async delayDropTween(delay, node, moveCount, easingType) {
          await this.delay(delay);
          await this.dropTween(node, moveCount, easingType);
        }

        delay(seconds) {
          return new Promise(resolve => setTimeout(resolve, seconds * 1000));
        }

        rollSetting(state, mode) {
          switch (state) {
            case (_crd && DropState === void 0 ? (_reportPossibleCrUseOfDropState({
              error: Error()
            }), DropState) : DropState).DROP_IN:
              this._curEasingType = this._dropReelData.autoDropInCurve ? "cubicOut" : time => {
                return this._dropReelData.inCurve.evaluate(time);
              };
              break;

            case (_crd && DropState === void 0 ? (_reportPossibleCrUseOfDropState({
              error: Error()
            }), DropState) : DropState).DROP_OUT:
              this._curEasingType = this._dropReelData.autoDropOutCurve ? "cubicIn" : time => {
                return this._dropReelData.outCurve.evaluate(time);
              };
              break;

            case (_crd && DropState === void 0 ? (_reportPossibleCrUseOfDropState({
              error: Error()
            }), DropState) : DropState).FILL:
              this._curEasingType = this._dropReelData.autoFillCurve ? "cubicOut" : time => {
                return this._dropReelData.fillCurve.evaluate(time);
              };
              break;
          }

          switch (mode) {
            case (_crd && DropMode === void 0 ? (_reportPossibleCrUseOfDropMode({
              error: Error()
            }), DropMode) : DropMode).IDLE:
              this._curDuration = this._dropReelData.dropDuration;
              this._curDropSpacingTime = this._dropReelData.dropSpacingTime;
              break;

            case (_crd && DropMode === void 0 ? (_reportPossibleCrUseOfDropMode({
              error: Error()
            }), DropMode) : DropMode).STOP:
              this._curDuration = this._dropReelData.stopDropDuration;
              this._curDropSpacingTime = this._dropReelData.stopDropSpacingTime;
              break;

            case (_crd && DropMode === void 0 ? (_reportPossibleCrUseOfDropMode({
              error: Error()
            }), DropMode) : DropMode).TURBO:
              this._curDuration = this._dropReelData.turboDropDuration;
              this._curDropSpacingTime = this._dropReelData.turboDropSpacingTime;
              break;

            case (_crd && DropMode === void 0 ? (_reportPossibleCrUseOfDropMode({
              error: Error()
            }), DropMode) : DropMode).READY_HAND:
              this._curDuration = this._dropReelData.readyHandDropDuration;
              this._curDropSpacingTime = this._dropReelData.readyHandDropSpacingTime;
              break;
          }
        }
        /**
         * 任何滾輪掉落的動畫都是由此來呼叫
         * @param node 要表演掉落的node
         * @param count 掉落的距離倍數(單位的倍數)
         * @param mode 表演掉落的模式(會決定easing curve的設定)
         * @returns 
         */


        dropTween(node, moveCount, easingType) {
          return new Promise((resolve, reject) => {
            let dropDistance = new Vec3();
            Vec3.multiplyScalar(dropDistance, this._dropDistance, moveCount);
            tween(node).by(this._curDuration, {
              position: dropDistance
            }, {
              easing: easingType
            }).call(() => {
              resolve();
            }).start();
          });
        }

        resetDropOutIconPos(data) {
          let resetDistance = new Vec3();
          let resetPos = new Vec3();

          for (let i = data.length - 1; i >= 0; i--) {
            Vec3.multiplyScalar(resetDistance, this._resetDistance, data[i].resetCount);
            Vec3.add(resetPos, data[i].node.position, resetDistance);
            data[i].node.setPosition(resetPos);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9d051e2b76e8703f6abe21e759bbabc7dd13517b.js.map