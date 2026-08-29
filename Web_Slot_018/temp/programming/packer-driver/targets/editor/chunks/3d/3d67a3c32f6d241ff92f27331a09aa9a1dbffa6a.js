System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, UniReel, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, UniReelView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUniReel(extras) {
    _reporterNs.report("UniReel", "../../../ReelTemplate/ReelTemplate_3/Scripts/UniReel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReel(extras) {
    _reporterNs.report("IReel", "../../../ReelTemplate/ReelTemplate_3/Scripts/Interface/IReel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      UniReel = _unresolved_2.UniReel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c111W77dBNI5m0M8oRuj3o", "UniReelView", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 負責一局的滾輪表演
       */

      _export("UniReelView", UniReelView = (_dec = ccclass('UniReelView'), _dec2 = property(_crd && UniReel === void 0 ? (_reportPossibleCrUseOfUniReel({
        error: Error()
      }), UniReel) : UniReel), _dec3 = property({
        type: CCFloat,
        tooltip: '開始滾動間隔的時間，小於0代表一起滾動'
      }), _dec(_class = (_class2 = class UniReelView extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "reelList", _descriptor, this);

          _initializerDefineProperty(this, "startSpaceTime", _descriptor2, this);

          this.isFastModeCallback = null;
          this.setReelDataCallback = null;
          this.showReadyHandCallback = null;
          this.hideReadyHandCallback = null;
          this._currentRollingReelIDs = [];
          this._reelHaveReadyHandList = [];
          //紀錄滾輪是否需要進入ReadyHand的狀態
          this._reelIsReadyHandList = [];
          //紀錄滾輪是否進入ReadyHand的狀態
          this._defaultRollingReelIDs = [];
          this._currentReadyHandReelID = -1;
          this.reelsIsRollEnd = [];
        }

        get reelAmount() {
          return this.reelList.length;
        }

        //紀錄當前滾動的滾輪ID
        get currentRollingReelIDs() {
          return this._currentRollingReelIDs;
        }

        get defaultRollingReelIDs() {
          return this._defaultRollingReelIDs;
        }

        init() {
          this._reelHaveReadyHandList = Array.from({
            length: this.reelAmount
          }, () => false);
          this._reelIsReadyHandList = Array.from({
            length: this.reelAmount
          }, () => false);
          this.reelsIsRollEnd = Array.from({
            length: this.reelAmount
          }, () => false);

          for (let index = 0; index < this.reelList.length; index++) {
            let reel = this.reelList[index];
            reel.init(index);
            reel.onMoveOnceStart = this.onReelMoveOneStart.bind(this, index);
          }

          for (let index = 0; index < this.reelAmount; index++) {
            this._defaultRollingReelIDs[index] = index;
          }
        }

        async startRoll(reelIDs = this._defaultRollingReelIDs) {
          this.reset();
          this._currentRollingReelIDs = reelIDs;

          for (let index = 0; index < this._currentRollingReelIDs.length; index++) {
            let reelID = this._currentRollingReelIDs[index];
            this.reelList[reelID].startRoll();

            if (this.startSpaceTime >= 0 && !this.isFastModeCallback()) {
              await this.waitStartSpace(this.startSpaceTime);
            }
          }
        }
        /**
         * 只是呼叫滾輪暫停，並不是直接停下
         */


        async stopRoll(resultData, stopType) {
          let promiseList = [];

          for (let index = 0; index < this.currentRollingReelIDs.length; index++) {
            let reelID = this.currentRollingReelIDs[index];
            promiseList.push(this.stopOneReel(reelID, resultData[reelID], stopType));
          }

          if (this.isFastModeCallback()) {
            this.fastStopRoll();
          }

          await Promise.all(promiseList);
        }
        /**
         * 按下即停的時候呼叫
         */


        fastStopRoll() {
          for (let index = 0; index < this._currentRollingReelIDs.length; index++) {
            let reelID = this._currentRollingReelIDs[index];
            this.reelList[reelID].fastStopRoll();
          }
        }

        getIconAmount(reelID) {
          return this.reelList[reelID].iconAmount;
        }

        setReadyHand(currentReadyHandReelID) {
          if (currentReadyHandReelID >= 0) {
            this._currentReadyHandReelID = currentReadyHandReelID;

            let currentReadyHandReelIndex = this._currentRollingReelIDs.indexOf(currentReadyHandReelID);

            if (currentReadyHandReelIndex !== -1) {
              for (let reelID = 0; reelID < this.reelAmount; reelID++) {
                let index = this._currentRollingReelIDs.indexOf(reelID);

                let haveReadyHand = false;

                if (index !== -1) {
                  haveReadyHand = index >= currentReadyHandReelIndex;
                }

                this._reelHaveReadyHandList[reelID] = haveReadyHand;
              }
            }
          }
        }

        async stopOneReel(reelID, resultData, stopType) {
          this.setReelDataCallback(reelID, resultData);
          await this.reelList[reelID].stopRollAsync(stopType);
          this.oneReelRollEnd(reelID);
        }
        /**
         * 預設是從聽牌滾輪開始聽到最後輪，如果要更改條件可以在reelHaveReadyHand這個function裡面修改
         * @param reelID 滾輪ID
         */


        checkShowReadyHand(reelID) {
          if (!this._reelIsReadyHandList[reelID]) {
            if (!this.isFastModeCallback()) {
              let haveReadyHand = this._reelHaveReadyHandList[reelID];

              let index = this._currentRollingReelIDs.indexOf(reelID);

              let previousReelID = this._currentRollingReelIDs[index - 1];
              let checkPreviousReelIsRollEnd = index === 0 ? true : this.reelsIsRollEnd[previousReelID]; // 0是第一輪，所以不用檢查上一輪

              let canShowReadyHand = haveReadyHand && checkPreviousReelIsRollEnd;

              if (canShowReadyHand) {
                this.showReadyHandCallback(reelID);
                this._reelIsReadyHandList[reelID] = true;
              }
            }
          }
        }

        checkHideReadyHand(reelID) {
          if (this._reelIsReadyHandList[reelID]) {
            this.hideReadyHandCallback(reelID);
            this._reelIsReadyHandList[reelID] = false;
          }
        }

        oneReelRollEnd(reelID) {
          this.checkHideReadyHand(reelID);
          this.reelsIsRollEnd[reelID] = true;
        }

        reset() {
          this._reelHaveReadyHandList = Array.from({
            length: this.reelAmount
          }, () => false);
          this._reelIsReadyHandList = Array.from({
            length: this.reelAmount
          }, () => false);
          this.reelsIsRollEnd = Array.from({
            length: this.reelAmount
          }, () => false);
          this._currentReadyHandReelID = -1;
        }

        onReelMoveOneStart(reelID) {
          this.checkShowReadyHand(reelID);
        }

        waitStartSpace(time) {
          return new Promise(resolve => {
            this.scheduleOnce(() => {
              resolve();
            }, time);
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "reelList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startSpaceTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3d67a3c32f6d241ff92f27331a09aa9a1dbffa6a.js.map