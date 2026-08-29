System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, randomRangeInt, SlotMachineControllerBase, SlotMachineData, ReelRoundState, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, IconSlotMachine;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSlotMachineControllerBase(extras) {
    _reporterNs.report("SlotMachineControllerBase", "./SlotMachineControllerBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotMachineData(extras) {
    _reporterNs.report("SlotMachineData", "./Model/SlotMachineData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconReelView(extras) {
    _reporterNs.report("IconReelView", "./IconReelView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelRoundState(extras) {
    _reporterNs.report("ReelRoundState", "./Model/ReelData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      randomRangeInt = _cc.randomRangeInt;
    }, function (_unresolved_2) {
      SlotMachineControllerBase = _unresolved_2.SlotMachineControllerBase;
    }, function (_unresolved_3) {
      SlotMachineData = _unresolved_3.SlotMachineData;
    }, function (_unresolved_4) {
      ReelRoundState = _unresolved_4.ReelRoundState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "955c351qvRIUpQ3iTt5l0ov", "IconSlotMachine", undefined);

      __checkObsolete__(['_decorator', 'randomRangeInt']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("IconSlotMachine", IconSlotMachine = (_dec = ccclass('IconSlotMachine'), _dec2 = property({
        type: _crd && SlotMachineData === void 0 ? (_reportPossibleCrUseOfSlotMachineData({
          error: Error()
        }), SlotMachineData) : SlotMachineData,
        visible: true
      }), _dec(_class = (_class2 = class IconSlotMachine extends (_crd && SlotMachineControllerBase === void 0 ? (_reportPossibleCrUseOfSlotMachineControllerBase({
        error: Error()
      }), SlotMachineControllerBase) : SlotMachineControllerBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_slotMachineData", _descriptor, this);

          this.showReadyHandCallback = null;
          this.hideReadyHandCallback = null;
          this.oneReelRollEndCallBack = null;
          this.allReelRollEndCallBack = null;
          this._reelView = null;
          this._iconResultDataIndex = 0;
          this._previousResultData = [];
          //儲存上一輪的資料
          this._currentRollingReelIDs = [];
        }

        get reelAmount() {
          return this._reelView.reelAmount;
        }

        //紀錄當前滾動的滾輪ID
        init() {
          this._reelView = this._view;
          this.initView();

          this._slotMachineData.init(this.reelAmount);

          this.initIconSymbol();
        }

        startRoll(isTurboMode, reelIDs) {
          super.startRoll(isTurboMode, reelIDs);
          this._currentRollingReelIDs = this._reelView.currentRollingReelIDs;
        }

        setReadyHand(reelID) {
          if (reelID >= 0) {
            this._reelView.currentReadyHandReelID = reelID;
          }
        }

        getIconAmount(reelID) {
          let iconAmount = this._reelView.getIconAmount(reelID);

          return iconAmount;
        }

        stopRollCallBack() {
          this._isStopClick = true;

          if (this._isReceiveData) {
            this._reelView.fastStopRoll();
          }
        }

        initView() {
          this._reelView.isFastModeCallback = this.isFastMode.bind(this);
          this._reelView.showReadyHandCallback = this.showReadyHand.bind(this);
          this._reelView.hideReadyHandCallback = this.hideReadyHand.bind(this);
          this._reelView.getIconDataCallback = this.sendIconData.bind(this);
          this._reelView.getNextRoundDataCallback = this.sendNextRoundData.bind(this);
          this._reelView.oneReelRollEndCallback = this.oneReelRollEnd.bind(this);
          this._reelView.allReelRollEndCallback = this.allReelRollEnd.bind(this);

          this._reelView.init();
        }

        initIconSymbol() {
          let haveInitData = this._slotMachineData.initSymbolList.length > 0;
          let initSymbolData = haveInitData ? [...this._slotMachineData.initSymbolList] : this.generateInitIconData();

          this._reelView.initIconSymbol(initSymbolData);
        }
        /**
         * 隨機產生初始盤面
         * @returns 初始盤面
         */


        generateInitIconData() {
          let iconData = [];

          for (let reelID = 0; reelID < this._reelView.reelAmount; reelID++) {
            iconData[reelID] = this.generateRandomIconData(reelID);
          }

          this._previousResultData = iconData;
          return iconData;
        }
        /**
        * 產生滾輪要顯示的icon
        * @param reelID 滾輪ID
        * @returns number[] 要顯示的icon
        */


        sendIconData(reelID) {
          let iconData = [];
          let reelState = this._reelView.reelStateList[reelID];
          let isFinal = reelState === (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
            error: Error()
          }), ReelRoundState) : ReelRoundState).FinalRoll && this._isReceiveData;

          if (isFinal) {
            iconData = [...this._iconResultData[this._iconResultDataIndex]];
            this._iconResultDataIndex++;
          } else {
            iconData = this.generateRandomIconData(reelID, this._previousResultData[reelID]);
          }

          this._previousResultData[reelID] = [...iconData];
          return iconData;
        }
        /**
        * 最後一輪要先產生下一輪的資料才能執行回彈
        * @param reelID 滾輪ID
        * @returns 下一輪顯示的icon
        */


        sendNextRoundData(reelID) {
          let index = this._currentRollingReelIDs.indexOf(reelID);

          let resultData = [...this._iconResultData[index]];
          let nextResultData = this.generateRandomIconData(reelID, resultData); // 預先產生下一輪的icon是因為要先執行回彈

          this._previousResultData[reelID] = [...nextResultData];
          return nextResultData;
        }

        reset() {
          super.reset();
          this._iconResultDataIndex = 0;
        }
        /** 
        * 滾輪要換圖的時候呼叫，長度為iconAmount，變化大，請自行改寫
        * @param reelID 第幾個滾輪
        * @param reelState 目前滾輪的狀態
        * @param previousIcons 前一局的盤面 
        */


        generateRandomIconData(reelID, previousIcons) {
          let allSymbolList = this._slotMachineData.getAllSymbols(reelID);

          let uniqueSymbolIDList = this._slotMachineData.getUniqueSymbols(reelID);

          let noSameReelSymbolList = this._slotMachineData.getNoSameReelSymbols(reelID);

          let resultSymbols = [];
          let iconAmount = this.getIconAmount(reelID);

          for (let index = 0; index < iconAmount; index++) {
            let randomIndex = randomRangeInt(0, allSymbolList.length);
            let symbolID = allSymbolList[randomIndex];

            if (uniqueSymbolIDList.length > 0 && uniqueSymbolIDList.includes(symbolID)) {
              let uniqueSymbolIndex = allSymbolList.indexOf(symbolID);
              allSymbolList.splice(uniqueSymbolIndex, 1);
            }

            if (noSameReelSymbolList.includes(symbolID)) {
              for (let index = 0; index < noSameReelSymbolList.length; index++) {
                const noSameSymbol = noSameReelSymbolList[index];
                let noSameReelSymbolIndex = allSymbolList.indexOf(noSameSymbol);
                allSymbolList.splice(noSameReelSymbolIndex, 1);
              }
            }

            resultSymbols.push(symbolID);
          }

          return resultSymbols;
        }

        oneReelRollEnd(reelID) {
          var _this$oneReelRollEndC;

          (_this$oneReelRollEndC = this.oneReelRollEndCallBack) == null || _this$oneReelRollEndC.call(this, reelID);
        }

        allReelRollEnd() {
          var _this$allReelRollEndC;

          (_this$allReelRollEndC = this.allReelRollEndCallBack) == null || _this$allReelRollEndC.call(this);
        }

        showReadyHand(reelID) {
          var _this$showReadyHandCa;

          (_this$showReadyHandCa = this.showReadyHandCallback) == null || _this$showReadyHandCa.call(this, reelID);
        }

        hideReadyHand(reelID) {
          var _this$hideReadyHandCa;

          (_this$hideReadyHandCa = this.hideReadyHandCallback) == null || _this$hideReadyHandCa.call(this, reelID);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_slotMachineData", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=76d001ea861f205fb6bb995f53717c9ba21ffe31.js.map