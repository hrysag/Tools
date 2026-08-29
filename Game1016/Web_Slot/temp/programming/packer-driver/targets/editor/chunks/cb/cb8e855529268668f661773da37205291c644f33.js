System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, instantiate, macro, Node, ComponentExt, SlotMachineViewBase, ReelEvent, ReelRoundState, Debug, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, TIMER_UNIT, ReelView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfComponentExt(extras) {
    _reporterNs.report("ComponentExt", "./Util/ComponentExt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotMachineViewBase(extras) {
    _reporterNs.report("SlotMachineViewBase", "./SlotMachineViewBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelEvent(extras) {
    _reporterNs.report("ReelEvent", "./Model/ReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelRoundState(extras) {
    _reporterNs.report("ReelRoundState", "./Model/ReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../../Utils/Debug", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameIcon(extras) {
    _reporterNs.report("GameIcon", "./GameIcon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameReel(extras) {
    _reporterNs.report("GameReel", "./GameReel", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      macro = _cc.macro;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      ComponentExt = _unresolved_2.ComponentExt;
    }, function (_unresolved_3) {
      SlotMachineViewBase = _unresolved_3.SlotMachineViewBase;
    }, function (_unresolved_4) {
      ReelEvent = _unresolved_4.ReelEvent;
      ReelRoundState = _unresolved_4.ReelRoundState;
    }, function (_unresolved_5) {
      Debug = _unresolved_5.Debug;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7b9e5Bse79OBIRcbaTwOSXr", "ReelView", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'instantiate', 'log', 'macro', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      TIMER_UNIT = 0.1;
      /**
       * 負責一局的滾輪表演
       */

      _export("ReelView", ReelView = (_dec = ccclass('ReelView'), _dec2 = property({
        type: Node,
        visible: true,
        tooltip: '滾輪列表'
      }), _dec3 = property({
        type: CCFloat,
        visible: true,
        tooltip: '正常模式滾動時間，單位:秒',
        min: 0
      }), _dec4 = property({
        type: CCFloat,
        visible: true,
        tooltip: '快速模式滾動時間，單位:秒',
        min: 0
      }), _dec5 = property({
        type: CCFloat,
        visible: true,
        tooltip: '滾輪停下相隔的時間，單位:秒',
        min: 0
      }), _dec6 = property({
        type: CCFloat,
        visible: true,
        tooltip: '滾輪聽牌停下相隔的時間，如果聽牌會取代stopSpaceTime，單位:秒',
        min: 0
      }), _dec(_class = (_class2 = class ReelView extends (_crd && SlotMachineViewBase === void 0 ? (_reportPossibleCrUseOfSlotMachineViewBase({
        error: Error()
      }), SlotMachineViewBase) : SlotMachineViewBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_reelNodeList", _descriptor, this);

          _initializerDefineProperty(this, "_normalRollTime", _descriptor2, this);

          _initializerDefineProperty(this, "_fastRollTime", _descriptor3, this);

          _initializerDefineProperty(this, "_stopSpaceTime", _descriptor4, this);

          _initializerDefineProperty(this, "_readyHandRollTime", _descriptor5, this);

          this.isFastModeCallback = null;
          this.showReadyHandCallback = null;
          this.hideReadyHandCallback = null;
          this.getIconDataCallback = null;
          this.getNextRoundDataCallback = null;
          this.oneReelRollEndCallback = null;
          this.allReelRollEndCallback = null;
          this._reels = [];
          this._prepareIconList = [];
          this._resultIconList = [];
          this._reelStateList = [];
          this._startPullIconSymbols = [];
          this._currentRollingReelIDs = [];
          //紀錄當前滾動的滾輪ID
          this._comingStopReelIndex = 0;
          //紀錄當前要停下的滾輪在currentRollingReelIDs中的索引
          this._currentStopReelID = 0;
          //紀錄當前停下的滾輪ID
          this._reelIsStopList = [];
          // 呼叫滾輪停下
          this._reelIsReadyHandList = [];
          //紀錄滾輪是否進入ReadyHand的狀態
          this._timing = 0;
          this._isReceiveData = false;
          this._nextResultData = [];
          this._currentReadyHandReelID = 99;
        }

        get reelAmount() {
          return this._reels.length;
        }

        // 紀錄滾輪目前的狀態
        get reelStateList() {
          return this._reelStateList;
        }

        //>=_currentReadyHandReelID的滾輪代表有ReadyHand
        set currentReadyHandReelID(value) {
          if (value < this.reelAmount) {
            this._currentReadyHandReelID = value;
          }
        }

        init() {
          this._reels = (_crd && ComponentExt === void 0 ? (_reportPossibleCrUseOfComponentExt({
            error: Error()
          }), ComponentExt) : ComponentExt).getComps(this._reelNodeList, 'GameReel');
          this._reelIsStopList = Array.from({
            length: this.reelAmount
          }, () => false);
          this._reelStateList = Array.from({
            length: this.reelAmount
          }, () => (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
            error: Error()
          }), ReelRoundState) : ReelRoundState).Unknown);
          this._prepareIconList = Array.from({
            length: this.reelAmount
          }, () => []);
          this._resultIconList = Array.from({
            length: this.reelAmount
          }, () => []);
          this._reelIsReadyHandList = Array.from({
            length: this.reelAmount
          }, () => false);
          this._nextResultData = Array.from({
            length: this.reelAmount
          }, () => []);
          this.createIcon();
          this.initReel();
          this.initIcon();
          this._currentRollingReelIDs = this._reels.map(reel => reel.reelID);

          let initIsDone = this._reelStateList.every(reelState => reelState === (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
            error: Error()
          }), ReelRoundState) : ReelRoundState).Init);

          if (initIsDone) {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).Log('ReelView init done');
          } else {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).LogError('ReelView init fail');
          }
        }

        startRoll(reelIDs = this._reels.map(reel => reel.reelID)) {
          this.reset();
          this._currentRollingReelIDs = reelIDs;
          this.scheduleOnce(() => {
            //延遲一禎，確保全部滾輪一起tween
            for (let index = 0; index < this._currentRollingReelIDs.length; index++) {
              let reelID = this._currentRollingReelIDs[index];
              this._reelStateList[reelID] = (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
                error: Error()
              }), ReelRoundState) : ReelRoundState).FirstRoll;

              this._reels[reelID].startOneRoundRoll();
            }

            this.startTimer();
          }, 0);
        }
        /**
         * 只是呼叫滾輪暫停，並不是直接停下
         */


        stopRoll() {
          this._isReceiveData = true;
        }

        fastStopRoll() {
          this.stopAllTimer(); // 因為按下暫停會立即執行StopRoll，但正常停止的間隔時間會持續跑到callback，導致有可能會跑StopRoll兩次

          this.stopAllReelRoll();
        }

        initIconSymbol(iconSymbolData) {
          for (let reelID = 0; reelID < this._reels.length; reelID++) {
            this.changeIconSymbol(reelID, iconSymbolData[reelID], true);
          }
        }
        /**
         * 最一開始沒有上一局，所以拉條icon顯示的symbol要自己設定
         * @param startPullData 滾輪開始拉條顯示的symbol
         */


        initStartPullSymbol(startPullData) {
          for (let reelID = 0; reelID < this._reels.length; reelID++) {
            this._startPullIconSymbols[reelID] = startPullData[reelID];
          }
        }

        getIconAmount(reelID) {
          let iconAmount = this._iconPrefabList[reelID].count;
          return iconAmount;
        }
        /**
         * 設置icon明亮度
         * @param reelID 滾輪ID
         * @param isDark true為暗，false為亮
         * @param iconIndex 指定要變更的icon，不傳入代表全部
         */


        setIconBrightness(reelID, isDark, iconIndex) {
          let reelIconList = this._resultIconList[reelID];

          if (iconIndex) {
            for (let i = 0; i < iconIndex.length; i++) {
              let index = iconIndex[i];
              reelIconList[index].setBrightness(isDark);
            }
          } else {
            let prepareIconList = this._prepareIconList[reelID];
            let resultIconList = this._resultIconList[reelID];

            for (let index = 0; index < this._iconPrefabList[reelID].count; index++) {
              resultIconList[index].setBrightness(isDark);
              prepareIconList[index].setBrightness(isDark);
            }

            this._reels[reelID].startPullIcon.setBrightness(isDark);

            this._reels[reelID].endBounceIcon.setBrightness(isDark);
          }
        }

        createIcon() {
          for (let reelID = 0; reelID < this._reels.length; reelID++) {
            const iconInReelAmount = this._iconPrefabList[reelID].count * 2;

            this._iconPrefabList[reelID].createInstance(this._reels[reelID].rootNode, iconInReelAmount);
          }
        }

        createShowIcon(reelID) {
          let showIcons = [];

          for (let index = 0; index < 2; index++) {
            //生成專門負責表演回拉跟回彈的icon
            let icon = instantiate(this._iconPrefabList[reelID].prefab);
            icon.setParent(this._reels[reelID].rootNode);
            showIcons.push(icon);
          }

          return showIcons;
        }

        initReel() {
          for (let reelID = 0; reelID < this._reels.length; reelID++) {
            let showIcons = this.createShowIcon(reelID);
            this._reels[reelID].onReelEvent = this.receiveReelEvent.bind(this);

            this._reels[reelID].init(reelID, this._iconPrefabList[reelID].nodeList, true, showIcons);

            this._prepareIconList[reelID] = (_crd && ComponentExt === void 0 ? (_reportPossibleCrUseOfComponentExt({
              error: Error()
            }), ComponentExt) : ComponentExt).getComps(this._reels[reelID].prepareIconList, 'GameIcon');
            this._resultIconList[reelID] = (_crd && ComponentExt === void 0 ? (_reportPossibleCrUseOfComponentExt({
              error: Error()
            }), ComponentExt) : ComponentExt).getComps(this._reels[reelID].resultIconList, 'GameIcon');
          }
        }

        initIcon() {
          for (let reelID = 0; reelID < this._reels.length; reelID++) {
            for (let index = 0; index < this._iconPrefabList[reelID].count; index++) {
              this._prepareIconList[reelID][index].init();

              this._resultIconList[reelID][index].init();
            }
          }
        }

        reelHaveReadyHand(reelID) {
          let isReadyHand = reelID >= this._currentReadyHandReelID;
          return isReadyHand;
        }
        /**
         * 狀態改變事件，可以在這裡做狀態的判斷
         * @param reelID 滾輪ID 
         * @param reelEvent 單輪滾的狀態
         * @returns 
         */


        receiveReelEvent(reelID, reelEvent) {
          if (reelEvent === (_crd && ReelEvent === void 0 ? (_reportPossibleCrUseOfReelEvent({
            error: Error()
          }), ReelEvent) : ReelEvent).Init) {
            this._reelStateList[reelID] = (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
              error: Error()
            }), ReelRoundState) : ReelRoundState).Init; //Debug.Log(`第${reelID}滾輪: 初始化完成`);
          } else if (reelEvent === (_crd && ReelEvent === void 0 ? (_reportPossibleCrUseOfReelEvent({
            error: Error()
          }), ReelEvent) : ReelEvent).Start) {
            this.reelOneRoundStart(reelID);
          } else if (reelEvent === (_crd && ReelEvent === void 0 ? (_reportPossibleCrUseOfReelEvent({
            error: Error()
          }), ReelEvent) : ReelEvent).Update) {} else if (reelEvent === (_crd && ReelEvent === void 0 ? (_reportPossibleCrUseOfReelEvent({
            error: Error()
          }), ReelEvent) : ReelEvent).End) {
            this.reelOneRoundEnd(reelID);
          }
        }

        reelOneRoundStart(reelID) {
          this.changePrepareIconSymbol(reelID);
          this.checkShowReadyHand(reelID);

          if (this._reelStateList[reelID] === (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
            error: Error()
          }), ReelRoundState) : ReelRoundState).FirstRoll) {
            this._reels[reelID].rollSetting(this._reelStateList[reelID]);
          } else if (this._reelStateList[reelID] === (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
            error: Error()
          }), ReelRoundState) : ReelRoundState).FinalRoll) {
            this._nextResultData[reelID] = this.getNextRoundDataCallback(reelID);
            let bounceIconPos = this.getIconAmount(reelID) - 1;
            let bounceIconData = this._nextResultData[reelID][bounceIconPos];

            this._reels[reelID].rollSetting(this._reelStateList[reelID], bounceIconData);

            this._startPullIconSymbols[reelID] = this._resultIconList[reelID][0].iconData.symbolID;
            this.checkStopNextReel();
          }
        }

        reelOneRoundEnd(reelID) {
          this._startPullIconSymbols[reelID] = this._resultIconList[reelID][0].iconData.symbolID;

          this._reels[reelID].startPullIcon.updateSymbol(this._startPullIconSymbols[reelID]);

          let symbolData = this._prepareIconList[reelID].map(icon => icon.iconData.symbolID);

          this.changeIconSymbol(reelID, symbolData, true);

          if (this._reelStateList[reelID] === (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
            error: Error()
          }), ReelRoundState) : ReelRoundState).FinalRoll) {
            this.oneReelRollEnd(reelID);
            this.checkAllReelRollEnd();
          } else {
            if (this._reelIsStopList[reelID]) {
              this._reelStateList[reelID] = (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
                error: Error()
              }), ReelRoundState) : ReelRoundState).FinalRoll;
            } else {
              this._reelStateList[reelID] = (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
                error: Error()
              }), ReelRoundState) : ReelRoundState).Rolling;
            }

            this._reels[reelID].startOneRoundRoll();
          }
        }
        /**
         * 預設是從聽牌滾輪開始聽到最後輪，如果要更改條件可以在reelHaveReadyHand這個function裡面修改
         * @param reelID 滾輪ID
         */


        checkShowReadyHand(reelID) {
          if (!this._reelIsReadyHandList[reelID]) {
            if (!this.isStopAllReel()) {
              let haveReadyHand = this.reelHaveReadyHand(reelID);
              let checkPreviousReelIsRollEnd = reelID === 0 ? true : this._reelStateList[reelID - 1] === (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
                error: Error()
              }), ReelRoundState) : ReelRoundState).RollEnd; // 0是第一輪，所以不用檢查上一輪

              let canShowReadyHand = haveReadyHand && checkPreviousReelIsRollEnd;

              if (canShowReadyHand) {
                var _this$showReadyHandCa;

                (_this$showReadyHandCa = this.showReadyHandCallback) == null || _this$showReadyHandCa.call(this, reelID);
                this._reelIsReadyHandList[reelID] = true;
              }
            }
          }
        }

        checkHideReadyHand(reelID) {
          if (this._reelIsReadyHandList[reelID]) {
            var _this$hideReadyHandCa;

            (_this$hideReadyHandCa = this.hideReadyHandCallback) == null || _this$hideReadyHandCa.call(this, reelID);
            this._reelIsReadyHandList[reelID] = false;
          }
        }

        oneReelRollEnd(reelID) {
          var _this$oneReelRollEndC;

          let nextRoundData = this._nextResultData[reelID]; // 因為回彈會看到下一輪的資料，所以先把prepareIcon的symbol換成下一輪

          this.changeIconSymbol(reelID, nextRoundData, false);
          this.checkHideReadyHand(reelID);
          this._reelStateList[reelID] = (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
            error: Error()
          }), ReelRoundState) : ReelRoundState).RollEnd;
          (_this$oneReelRollEndC = this.oneReelRollEndCallback) == null || _this$oneReelRollEndC.call(this, reelID);
        }

        checkStopNextReel() {
          if (!this.isStopAllReel()) {
            var _this$_currentRolling;

            this._comingStopReelIndex++; // 下一輪開始停止

            let reelID = (_this$_currentRolling = this._currentRollingReelIDs) == null ? void 0 : _this$_currentRolling[this._comingStopReelIndex];

            if (reelID !== undefined) {
              this._currentStopReelID = reelID;
              this.startDelayTimer();
            }
          }
        }

        checkAllReelRollEnd() {
          let _currentReelStateList = this.reelStateList.map((reelState, index) => {
            if (this._currentRollingReelIDs.includes(index)) {
              return reelState;
            } else {
              return null;
            }
          });

          _currentReelStateList = _currentReelStateList.filter(reelState => reelState !== null);

          let isAllReelRollEnd = _currentReelStateList.every(reelState => reelState === (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
            error: Error()
          }), ReelRoundState) : ReelRoundState).RollEnd);

          if (isAllReelRollEnd) {
            this.allReelRollEnd();
          }
        }

        allReelRollEnd() {
          var _this$allReelRollEndC;

          (_this$allReelRollEndC = this.allReelRollEndCallback) == null || _this$allReelRollEndC.call(this);
        }

        changePrepareIconSymbol(reelID) {
          if (this._nextResultData[reelID].length > 0) {
            // 如果有下一輪的資料，代表他在上一輪結束的時候就已經更換了，不用再跟controller要資料
            this._nextResultData[reelID].length = 0;
          } else {
            let symbolData = this.getIconDataCallback(reelID);
            this.changeIconSymbol(reelID, symbolData, false);
          }
        }

        changeIconSymbol(reelID, symbolData, isChangeResultIcon) {
          let allIconList = isChangeResultIcon ? this._resultIconList : this._prepareIconList;
          let reelIconList = allIconList[reelID];

          for (let index = 0; index < reelIconList.length; index++) {
            reelIconList[index].updateSymbol(symbolData[index]);
          }
        }

        reset() {
          for (let index = 0; index < this._currentRollingReelIDs.length; index++) {
            let reelID = this._currentRollingReelIDs[index];
            this._reelIsStopList[reelID] = false;
            this._reelIsReadyHandList[reelID] = false;
          }

          this._currentReadyHandReelID = 99;
          this._isReceiveData = false;
          this._currentStopReelID = 0;
        }

        isStopAllReel() {
          let isStop = this.isFastModeCallback() || this.checkFloatIsZero(this._stopSpaceTime);
          return isStop;
        }

        checkDelayStopReelRoll() {
          this._timing += TIMER_UNIT;
          let isStopAllReel = this.isStopAllReel();
          let standardTime = isStopAllReel ? this._fastRollTime : this._normalRollTime;
          let isStop = this._timing >= standardTime && this._isReceiveData;

          if (isStop) {
            if (isStopAllReel) {
              this.stopAllReelRoll();
            } else {
              this._comingStopReelIndex = 0;
              this._currentStopReelID = this._currentRollingReelIDs[this._comingStopReelIndex];
              this.startDelayTimer(); // 第一輪開始停止
            }

            this.unschedule(this.checkDelayStopReelRoll);
            this._timing = 0;
          }
        }

        stopAllReelRoll() {
          for (let index = 0; index < this._currentRollingReelIDs.length; index++) {
            let reelID = this._currentRollingReelIDs[index];
            this._reelIsStopList[reelID] = true;
          }
        }

        delayStopRoll() {
          this._reelIsStopList[this._currentStopReelID] = true;
          this.unschedule(this.delayStopRoll);
        }
        /**
         * 開始滾動的計時器
         */


        startTimer() {
          this.schedule(this.checkDelayStopReelRoll, TIMER_UNIT, macro.REPEAT_FOREVER);
        }
        /**
        * 呼叫延遲停止的計時器
        * @param reelID 滾輪ID
        */


        startDelayTimer() {
          let haveReadyHand = this.reelHaveReadyHand(this._currentStopReelID);
          let reelStopSpaceTime = this._comingStopReelIndex === 0 ? 0 : this._stopSpaceTime; //第一輪如果沒有聽牌的話就不用延遲

          let finalStopSpaceTime = haveReadyHand ? this._readyHandRollTime : reelStopSpaceTime;
          this.scheduleOnce(this.delayStopRoll, finalStopSpaceTime);
        }

        stopAllTimer() {
          this.unschedule(this.checkDelayStopReelRoll);
          this.unschedule(this.delayStopRoll);
        }

        checkFloatIsZero(floatValue) {
          return Math.abs(floatValue) < 0.0001;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_reelNodeList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_normalRollTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_fastRollTime", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.2;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_stopSpaceTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.2;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_readyHandRollTime", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cb8e855529268668f661773da37205291c644f33.js.map