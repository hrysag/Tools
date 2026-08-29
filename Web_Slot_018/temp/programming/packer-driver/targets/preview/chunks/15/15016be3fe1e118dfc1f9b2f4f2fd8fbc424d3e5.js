System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, game, instantiate, macro, Node, Debug, ReelEvent, ReelRoundState, ComponentExt, SlotMachineViewBase, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, IconReelView;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "db://assets/Scripts/Utils/Debug", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameIcon(extras) {
    _reporterNs.report("GameIcon", "../GameIcon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelEvent(extras) {
    _reporterNs.report("ReelEvent", "../Model/ReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelRoundState(extras) {
    _reporterNs.report("ReelRoundState", "../Model/ReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentExt(extras) {
    _reporterNs.report("ComponentExt", "../Util/ComponentExt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotMachineViewBase(extras) {
    _reporterNs.report("SlotMachineViewBase", "../SlotMachineViewBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconReel(extras) {
    _reporterNs.report("IconReel", "./IconReel", _context.meta, extras);
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
      game = _cc.game;
      instantiate = _cc.instantiate;
      macro = _cc.macro;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Debug = _unresolved_2.Debug;
    }, function (_unresolved_3) {
      ReelEvent = _unresolved_3.ReelEvent;
      ReelRoundState = _unresolved_3.ReelRoundState;
    }, function (_unresolved_4) {
      ComponentExt = _unresolved_4.ComponentExt;
    }, function (_unresolved_5) {
      SlotMachineViewBase = _unresolved_5.SlotMachineViewBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "07c4aRjEu9INZQlsSuvGXn/", "IconReelView", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'game', 'instantiate', 'macro', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 負責一局的滾輪表演
       */

      _export("IconReelView", IconReelView = (_dec = ccclass('IconReelView'), _dec2 = property({
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
      }), _dec(_class = (_class2 = class IconReelView extends (_crd && SlotMachineViewBase === void 0 ? (_reportPossibleCrUseOfSlotMachineViewBase({
        error: Error()
      }), SlotMachineViewBase) : SlotMachineViewBase) {
        constructor() {
          super(...arguments);

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
          this._comingStopReelIndex = 0;
          //紀錄當前要停下的滾輪在currentRollingReelIDs中的索引
          this._currentStopReelID = 0;
          //紀錄當前停下的滾輪ID
          this._reelIsStopList = [];
          // 呼叫滾輪停下
          this._reelIsReadyHandList = [];
          //紀錄滾輪是否進入ReadyHand的狀態
          this._isReceiveData = false;
          this._randomSymbolData = [];
          //隨機盤面
          this._finalResultData = [];
          //最終盤面
          this._nextResultData = [];
          //下一輪盤面，為了回彈
          this._currentReadyHandReelID = 99;
        }

        get reelAmount() {
          return this._reels.length;
        }

        // 紀錄滾輪目前的狀態
        get reelStateList() {
          return this._reelStateList;
        }

        //紀錄當前滾動的滾輪ID
        get currentRollingReelIDs() {
          return this._currentRollingReelIDs;
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
          }), ComponentExt) : ComponentExt).getComps(this._reelNodeList, 'IconReel');
          this._reelIsStopList = Array.from({
            length: this.reelAmount
          }, () => false);
          this._reelStateList = Array.from({
            length: this.reelAmount
          }, () => (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
            error: Error()
          }), ReelRoundState) : ReelRoundState).Unknown);
          this._resultIconList = Array.from({
            length: this.reelAmount
          }, () => []);
          this._reelIsReadyHandList = Array.from({
            length: this.reelAmount
          }, () => false);
          this._finalResultData = Array.from({
            length: this.reelAmount
          }, () => []);
          this._randomSymbolData = Array.from({
            length: this.reelAmount
          }, () => []);
          this._nextResultData = Array.from({
            length: this.reelAmount
          }, () => []);
          this.createIcon();
          this.initReel();
          this.initIcon();
          this._currentRollingReelIDs = this._reels.map(reel => reel.reelID);

          var initIsDone = this._reelStateList.every(reelState => reelState === (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
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

        startRoll(reelIDs) {
          if (reelIDs === void 0) {
            reelIDs = this._reels.map(reel => reel.reelID);
          }

          this.reset();
          this._currentRollingReelIDs = reelIDs;
          this.scheduleOnce(() => {
            //延遲一禎，確保全部滾輪一起tween
            for (var index = 0; index < this._currentRollingReelIDs.length; index++) {
              var _reelID = this._currentRollingReelIDs[index];
              this._reelStateList[_reelID] = (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
                error: Error()
              }), ReelRoundState) : ReelRoundState).FirstRoll;

              this._reels[_reelID].startOneRoundRoll();
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
          this.fastStopAllReel();
        }

        initIconSymbol(iconSymbolData) {
          for (var _reelID2 = 0; _reelID2 < this._resultIconList.length; _reelID2++) {
            var iconList = this._resultIconList[_reelID2];

            for (var index = 0; index < iconList.length; index++) {
              var icon = iconList[index];
              icon.updateSymbol(iconSymbolData[_reelID2][index]);
            }
          }
        }
        /**
         * 最一開始沒有上一局，所以拉條icon顯示的symbol要自己設定
         * @param startPullData 滾輪開始拉條顯示的symbol
         */


        initStartPullSymbol(startPullData) {
          for (var _reelID3 = 0; _reelID3 < this._reels.length; _reelID3++) {
            this._startPullIconSymbols[_reelID3] = startPullData[_reelID3];
          }
        }

        getIconAmount(reelID) {
          var iconAmount = this._iconPrefabList[reelID].count;
          return iconAmount;
        }
        /**
         * 設置icon明亮度
         * @param reelID 滾輪ID
         * @param isDark true為暗，false為亮
         * @param iconIndex 指定要變更的icon，不傳入代表全部
         */


        setIconBrightness(reelID, isDark, iconIndex) {
          var reelIconList = this._resultIconList[reelID];

          if (iconIndex) {
            for (var i = 0; i < iconIndex.length; i++) {
              var index = iconIndex[i];
              reelIconList[index].setBrightness(isDark);
            }
          } else {
            for (var _index = 0; _index < this._iconPrefabList[reelID].count; _index++) {
              reelIconList[_index].setBrightness(isDark);
            }

            this._reels[reelID].startPullIcon.setBrightness(isDark);

            this._reels[reelID].endBounceIcon.setBrightness(isDark);
          }
        }

        createIcon() {
          for (var _reelID4 = 0; _reelID4 < this._reels.length; _reelID4++) {
            var iconInReelAmount = this._iconPrefabList[_reelID4].count;

            this._iconPrefabList[_reelID4].createInstance(this._reels[_reelID4].rootNode, iconInReelAmount);
          }
        }

        createShowIcon(reelID) {
          var showIcons = [];

          for (var index = 0; index < 2; index++) {
            //生成專門負責表演回拉跟回彈的icon
            var icon = instantiate(this._iconPrefabList[reelID].prefab);
            icon.setParent(this._reels[reelID].rootNode);
            showIcons.push(icon);
          }

          return showIcons;
        }

        initReel() {
          for (var _reelID5 = 0; _reelID5 < this._reels.length; _reelID5++) {
            var showIcons = this.createShowIcon(_reelID5);
            this._reels[_reelID5].onReelEvent = this.receiveReelEvent.bind(this);

            this._reels[_reelID5].init(_reelID5, this._iconPrefabList[_reelID5].nodeList, false, showIcons);

            this.updateIconList(_reelID5);
          }
        }

        initIcon() {
          for (var _reelID6 = 0; _reelID6 < this._reels.length; _reelID6++) {
            for (var index = 0; index < this.getIconAmount(_reelID6); index++) {
              this._resultIconList[_reelID6][index].init();
            }
          }
        }

        reelHaveReadyHand(reelID) {
          var isReadyHand = reelID >= this._currentReadyHandReelID;
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
            var startPullSymbol = this._startPullIconSymbols[reelID];

            this._reels[reelID].rollSetting(this._reelStateList[reelID], startPullSymbol);
          }
        }

        reelOneRoundEnd(reelID) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.updateIconList(reelID);

            if (_this.checkReelIsFinalRoll(reelID)) {
              yield _this.reelStartBounce(reelID);

              _this.oneReelRollEnd(reelID);

              _this.checkAllReelRollEnd();
            } else {
              if (_this._reelIsStopList[reelID]) {
                _this._reelStateList[reelID] = (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
                  error: Error()
                }), ReelRoundState) : ReelRoundState).FinalRoll;
              } else {
                _this._reelStateList[reelID] = (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
                  error: Error()
                }), ReelRoundState) : ReelRoundState).Rolling;
              }

              _this._reels[reelID].startOneRoundRoll();
            }
          })();
        }

        reelStartBounce(reelID) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (_this2._reels[reelID].gameReelData.endBounce) {
              _this2._nextResultData[reelID] = _this2.getNextRoundDataCallback(reelID);
              var length = _this2._nextResultData[reelID].length;
              var bounceSymbol = _this2._nextResultData[reelID][length - 1];

              _this2._prepareIconList[reelID].updateSymbol(bounceSymbol);

              yield _this2._reels[reelID].startBounce();
            }
          })();
        }
        /**
         * 預設是從聽牌滾輪開始聽到最後輪，如果要更改條件可以在reelHaveReadyHand這個function裡面修改
         * @param reelID 滾輪ID
         */


        checkShowReadyHand(reelID) {
          if (!this._reelIsReadyHandList[reelID]) {
            if (!this.isStopAllReel()) {
              var haveReadyHand = this.reelHaveReadyHand(reelID);
              var checkPreviousReelIsRollEnd = reelID === 0 ? true : this._reelStateList[reelID - 1] === (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
                error: Error()
              }), ReelRoundState) : ReelRoundState).RollEnd; // 0是第一輪，所以不用檢查上一輪

              var canShowReadyHand = haveReadyHand && checkPreviousReelIsRollEnd;

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

          this.updateIconOriginSiblingIndex(reelID);
          this.checkHideReadyHand(reelID);
          this._reelStateList[reelID] = (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
            error: Error()
          }), ReelRoundState) : ReelRoundState).RollEnd;
          (_this$oneReelRollEndC = this.oneReelRollEndCallback) == null || _this$oneReelRollEndC.call(this, reelID);
        }

        updateIconList(reelID) {
          var iconList = (_crd && ComponentExt === void 0 ? (_reportPossibleCrUseOfComponentExt({
            error: Error()
          }), ComponentExt) : ComponentExt).getComps(this._reels[reelID].iconNodeList, 'GameIcon');
          this._resultIconList[reelID] = iconList.slice(1, iconList.length);
          this._prepareIconList[reelID] = this._reels[reelID].endBounceIcon;
        }

        updateIconOriginSiblingIndex(reelID) {
          var iconList = this._resultIconList[reelID];

          for (var index = 0; index < iconList.length; index++) {
            var icon = iconList[index];
            icon.originSiblingIndex = icon.node.getSiblingIndex();
          }
        }

        checkReelIsFinalRoll(reelID) {
          var isFinalRoll = this._reelStateList[reelID] === (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
            error: Error()
          }), ReelRoundState) : ReelRoundState).FinalRoll;
          var isLastIcon = this._finalResultData[reelID].length <= 0; //資料全部被取走，那就是最後一輪了

          return isFinalRoll && isLastIcon;
        }

        checkStopNextReel() {
          if (!this.isStopAllReel()) {
            var _this$_currentRolling;

            this._comingStopReelIndex++; // 下一輪開始停止

            var _reelID7 = (_this$_currentRolling = this._currentRollingReelIDs) == null ? void 0 : _this$_currentRolling[this._comingStopReelIndex];

            if (_reelID7 !== undefined) {
              this._currentStopReelID = _reelID7;
              this.startDelayTimer();
            }
          }
        }

        checkAllReelRollEnd() {
          var _currentReelStateList = this.reelStateList.map((reelState, index) => {
            if (this._currentRollingReelIDs.includes(index)) {
              return reelState;
            } else {
              return null;
            }
          });

          _currentReelStateList = _currentReelStateList.filter(reelState => reelState !== null);

          var isAllReelRollEnd = _currentReelStateList.every(reelState => reelState === (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
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
          var symbolID = this.getIconSymbolData(reelID);
          var prepareIcon = this._prepareIconList[reelID];
          prepareIcon.updateSymbol(symbolID);
        }

        getIconSymbolData(reelID) {
          var symbolData = [];

          if (this._reelStateList[reelID] === (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
            error: Error()
          }), ReelRoundState) : ReelRoundState).FinalRoll) {
            if (this._finalResultData[reelID].length <= 0) {
              //最後一輪，要拿伺服器的資料
              this._finalResultData[reelID] = this.getIconDataCallback(reelID);
              this._startPullIconSymbols[reelID] = this._resultIconList[reelID][0].iconData.symbolID;
              this.checkStopNextReel();
            }

            symbolData = this._finalResultData[reelID];
          } else if (this._nextResultData[reelID].length > 0) {
            // 如果有下一輪的資料，那就先換
            symbolData = this._nextResultData[reelID];
          } else {
            if (this._randomSymbolData[reelID].length <= 0) {
              this._randomSymbolData[reelID] = this.getIconDataCallback(reelID);
            }

            symbolData = this._randomSymbolData[reelID];
          }

          return symbolData.pop();
        }

        reset() {
          for (var index = 0; index < this._currentRollingReelIDs.length; index++) {
            var _reelID8 = this._currentRollingReelIDs[index];
            this._reelIsStopList[_reelID8] = false;
            this._reelIsReadyHandList[_reelID8] = false;
          }

          this._finalResultData = Array.from({
            length: this.reelAmount
          }, () => []);
          this._randomSymbolData = Array.from({
            length: this.reelAmount
          }, () => []);
          this._currentReadyHandReelID = 99;
          this._isReceiveData = false;
          this._currentStopReelID = 0;
        }

        isStopAllReel() {
          var isStop = this.isFastModeCallback() || this.checkFloatIsZero(this._stopSpaceTime);
          return isStop;
        }

        stopReel() {
          if (this.isStopAllReel()) {
            this.fastStopAllReel();
          } else {
            this._comingStopReelIndex = 0;
            this._currentStopReelID = this._currentRollingReelIDs[this._comingStopReelIndex];
            this.startDelayTimer(); // 第一輪開始停止
          }
        }

        fastStopAllReel() {
          for (var index = 0; index < this._currentRollingReelIDs.length; index++) {
            var _reelID9 = this._currentRollingReelIDs[index];
            this._reelIsStopList[_reelID9] = true;
          }
        }

        stopOneReel() {
          this._reelIsStopList[this._currentStopReelID] = true;
        }
        /**
         * 開始滾動的計時器
         */


        startTimer() {
          var startTime = game.totalTime;
          var standardTime = this.isStopAllReel() ? this._fastRollTime : this._normalRollTime;
          standardTime *= 1000;

          var callback = () => {
            var isStop = game.totalTime - startTime >= standardTime && this._isReceiveData;

            if (isStop) {
              this.stopReel();
              this.unschedule(callback);
            }
          };

          this.schedule(callback, 0, macro.REPEAT_FOREVER);
        }
        /**
        * 呼叫延遲停止的計時器
        * @param reelID 滾輪ID
        */


        startDelayTimer() {
          var haveReadyHand = this.reelHaveReadyHand(this._currentStopReelID);
          var reelStopSpaceTime = this._comingStopReelIndex === 0 ? 0 : this._stopSpaceTime; //第一輪如果沒有聽牌的話就不用延遲

          var finalStopSpaceTime = haveReadyHand ? this._readyHandRollTime : reelStopSpaceTime;
          finalStopSpaceTime *= 1000;
          var startTime = game.totalTime;

          var callback = () => {
            var fillTime = game.totalTime - startTime >= finalStopSpaceTime;

            if (fillTime) {
              this.stopOneReel();
              this.unschedule(callback);
            }
          };

          this.schedule(callback, 0, macro.REPEAT_FOREVER);
        }

        checkFloatIsZero(floatValue) {
          return Math.abs(floatValue) < 0.0001;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_reelNodeList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_normalRollTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_fastRollTime", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_stopSpaceTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_readyHandRollTime", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=15016be3fe1e118dfc1f9b2f4f2fd8fbc424d3e5.js.map