System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, DropReelView, IconMoveData, RoundMoveData, DropMode, DropState, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, DropSlotMachineController;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDropReelView(extras) {
    _reporterNs.report("DropReelView", "./DropReelView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconMoveData(extras) {
    _reporterNs.report("IconMoveData", "./DropReelDataStructure", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameDropResultData(extras) {
    _reporterNs.report("GameDropResultData", "./DropReelDataStructure", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoundMoveData(extras) {
    _reporterNs.report("RoundMoveData", "./DropReelDataStructure", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoundRemoveData(extras) {
    _reporterNs.report("RoundRemoveData", "./DropReelDataStructure", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDropMode(extras) {
    _reporterNs.report("DropMode", "../Model/DropReel/DropReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDropState(extras) {
    _reporterNs.report("DropState", "../Model/DropReel/DropReelData", _context.meta, extras);
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
    }, function (_unresolved_2) {
      DropReelView = _unresolved_2.DropReelView;
    }, function (_unresolved_3) {
      IconMoveData = _unresolved_3.IconMoveData;
      RoundMoveData = _unresolved_3.RoundMoveData;
    }, function (_unresolved_4) {
      DropMode = _unresolved_4.DropMode;
      DropState = _unresolved_4.DropState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "61f8a+8y8pFG4LGXUdAdaFs", "DropSlotMachineController", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DropSlotMachineController", DropSlotMachineController = (_dec = ccclass('DropSlotMachineController'), _dec2 = property(_crd && DropReelView === void 0 ? (_reportPossibleCrUseOfDropReelView({
        error: Error()
      }), DropReelView) : DropReelView), _dec(_class = (_class2 = class DropSlotMachineController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "view", _descriptor, this);

          this.showReadyHand = null;
          this.hideReadyHand = null;
          this.oneReelRollEndCallBack = null;
          this.allReelRollEndCallBack = null;
          this.serverCallback = null;
          this.isPerformResult = false;
          this.defaultMoveCount = 0;
          this.defaultResetCount = 0;
          this.roundMoveData = new (_crd && RoundMoveData === void 0 ? (_reportPossibleCrUseOfRoundMoveData({
            error: Error()
          }), RoundMoveData) : RoundMoveData)();
          this.fillingData = new (_crd && RoundMoveData === void 0 ? (_reportPossibleCrUseOfRoundMoveData({
            error: Error()
          }), RoundMoveData) : RoundMoveData)();
          this.reDropData = new (_crd && RoundMoveData === void 0 ? (_reportPossibleCrUseOfRoundMoveData({
            error: Error()
          }), RoundMoveData) : RoundMoveData)();
          this.totalRoundRemoveData = [];
        }

        // now fake
        init() {
          this.view = this.view;
          this.initView();
          this.initDropData();
          this.setInitResult();
        }

        initView() {
          this.view.init();
          this.view.showReadyHand = this.showReadyHand;
          this.view.hideReadyHand = this.hideReadyHand;
        }
        /**
         * 初始化掉落式滾輪使用的資料格式
         */


        initDropData() {
          this.defaultMoveCount = this.view.iconPrefabList[0].count;
          this.defaultResetCount = this.defaultMoveCount * 2; // 預備掉落位置為掉落距離的兩倍

          for (var i = 0; i < this.view.reelAmount; i++) {
            var reelMoveData = [];

            for (var j = 0; j < this.view.getIconAmount(i); j++) {
              var node = this.view.iconPrefabList[i].nodeList[j];
              var nodeMoveData = new (_crd && IconMoveData === void 0 ? (_reportPossibleCrUseOfIconMoveData({
                error: Error()
              }), IconMoveData) : IconMoveData)(node, this.defaultMoveCount, this.defaultResetCount);
              reelMoveData.push(nodeMoveData);
            }

            this.roundMoveData.addReelMoveData(reelMoveData);
          }
        }

        setInitResult() {
          var initSymbolData = this.generateInitIconData();
          this.view.resultSymbolData = initSymbolData;
          this.view.setRoundResult(this.roundMoveData);
        }

        generateInitIconData() {
          var iconData = [];

          for (var i = 0; i < this.view.reelAmount; i++) {
            var iconCount = this.view.getIconCount(i);
            iconData[i] = [];

            for (var j = 0; j < iconCount; j++) {
              iconData[i][j] = 2;
            }
          }

          return iconData;
        } // 這是滾輪時間到 DropIn


        stopDrop(resultData) {
          var _this$serverCallback;

          this.view.resultSymbolData = resultData.firstRoundData;
          this.totalRoundRemoveData = resultData.roundRemoveDataList;
          (_this$serverCallback = this.serverCallback) == null || _this$serverCallback.call(this);
        } // public resultUpdate(resultData: GameDropResultData): void {
        //     this.view.resultSymbolData = resultData.firstRoundData;
        //     this.totalRoundRemoveData = resultData.roundRemoveDataList;
        //     this.serverCallback?.();
        // }
        // 這是Stop button的callback


        stopRollCallBack() {
          if (this.isPerformResult) {
            // resultDisplay不讓按stop跳過，可依遊戲需求調整
            return;
          }

          this.view.isStopButtonPressed = true;
        }

        startDrop(isTurbo) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.reelModeSetting(isTurbo); // 等待滾全輪掉落出去，並等待server回傳資料 ( 缺一不可 )


            yield Promise.all([_this.view.startDrop((_crd && DropState === void 0 ? (_reportPossibleCrUseOfDropState({
              error: Error()
            }), DropState) : DropState).DROP_OUT, _this.roundMoveData), _this.waitServerPromise()]); // 等待滾輪重新掉落回來補盤面

            yield _this.view.startDrop((_crd && DropState === void 0 ? (_reportPossibleCrUseOfDropState({
              error: Error()
            }), DropState) : DropState).DROP_IN, _this.roundMoveData);

            _this.resultDisplaySetting();

            yield _this.totalResultDisplay();

            _this.onEnd();
          })();
        }

        reelModeSetting(isTurbo) {
          if (isTurbo) {
            this.view.setReelMode((_crd && DropMode === void 0 ? (_reportPossibleCrUseOfDropMode({
              error: Error()
            }), DropMode) : DropMode).TURBO);
          } else {
            this.view.setReelMode((_crd && DropMode === void 0 ? (_reportPossibleCrUseOfDropMode({
              error: Error()
            }), DropMode) : DropMode).IDLE);
          }
        }

        waitServerPromise() {
          return new Promise(resolve => {
            this.serverCallback = resolve;
          });
        }
        /**
         * 要開始表演消除盤面的前設置，可依遊戲需求調整
         */


        resultDisplaySetting() {
          this.view.isStopButtonPressed = false;
          this.isPerformResult = true; // resultDisplay不讓按stop跳過
          // 重設表演速度，讓Result表演速度變回一般

          this.view.setReelMode((_crd && DropMode === void 0 ? (_reportPossibleCrUseOfDropMode({
            error: Error()
          }), DropMode) : DropMode).IDLE);
        }
        /**
         * 消除結果分次顯示，每次包含每盤消除 + 補盤面到完整
         */


        totalResultDisplay() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            for (var i = 0; i < _this2.totalRoundRemoveData.length; i++) {
              _this2.calculateDropDownData(_this2.totalRoundRemoveData[i]);

              yield _this2.view.showRemoveIconAnim(_this2.totalRoundRemoveData[i].removeIconData);

              _this2.view.resetToTop(_this2.reDropData); //使用重置距離將被削除的Icon位子重置到上方預備掉落


              yield _this2.displayRoundResult();

              _this2.resetRoundMoveData(); // 將兩份資料合併成目前最新的盤面資料

            }
          })();
        }

        calculateDropDownData(roundRemoveData) {
          this.generateDropDownData(roundRemoveData.removeIconData);
          this.view.resultSymbolData = roundRemoveData.newIconData; // 更新要替換的結果

          this.updateDropDownDataCount(this.fillingData); // 更新補盤面移動的距離

          this.updateDropDownDataCount(this.reDropData, true); // 更新重置距離與掉落距離
        }

        displayRoundResult() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            yield _this3.view.startDrop((_crd && DropState === void 0 ? (_reportPossibleCrUseOfDropState({
              error: Error()
            }), DropState) : DropState).FILL, _this3.fillingData); // 開始補盤面

            yield _this3.view.startDrop((_crd && DropState === void 0 ? (_reportPossibleCrUseOfDropState({
              error: Error()
            }), DropState) : DropState).DROP_IN, _this3.reDropData); // Icon更新結果並掉落進來補滿盤面
          })();
        }
        /**
         * 將原有資料分開成兩份，一份為fillingData，一份為reDropData
         * @param roundRemoveData 要消除的資料
         * @returns fillingData 仍留在盤面上，準備要掉落填補空缺的資料
         * @returns reDropData 被消除後，要移到上面並更換結果重新掉落的資料
         */


        generateDropDownData(roundRemoveData) {
          for (var i = 0; i < roundRemoveData.length; i++) {
            var originalData = this.roundMoveData.getReelMoveDataByIndex(i);
            var fillingDataInReel = [...this.roundMoveData.getReelMoveDataByIndex(i)];
            var reDropDataInReel = [];

            for (var j = 0; j < roundRemoveData[i].length; j++) {
              var removeDataIndex = roundRemoveData[i][j];
              var targetData = originalData[removeDataIndex]; // 要消除的Node

              fillingDataInReel.remove(targetData);
              reDropDataInReel.push(targetData);
            }

            this.fillingData.roundIconMoveData[i] = fillingDataInReel;
            this.reDropData.roundIconMoveData[i] = reDropDataInReel;
          }
        }
        /**
         * 更新資料要移動或重置的距離(Count): 
         * - 若為fillIconData (!isReset) => moveCount = 舊資料(roundMoveData)掉落順序 - 新資料(fillData)掉落順序
         * - 若為resetIconData (isReset) => moveCount = 每個Reel有幾個NodeData的長度
         * - resetCount = 原完整盤面長度 - 舊資料(roundMoveData)掉落順序 + 新資料(reDropData)的掉落順序
         */


        updateDropDownDataCount(dropData, isReset) {
          if (isReset === void 0) {
            isReset = false;
          }

          this.roundMoveData.generateReverseOrderIndexList();
          dropData.generateReverseOrderIndexList();

          for (var i = 0; i < dropData.roundIconMoveData.length; i++) {
            var targetReelData = dropData.roundIconMoveData[i];

            for (var j = 0; j < targetReelData.length; j++) {
              var targetNodeData = targetReelData[j];
              var originalDropOrder = this.roundMoveData.getReverseOrderIndex(targetNodeData, i);
              var newDropOrder = dropData.getReverseOrderIndex(targetNodeData, i);
              var newCount = 0;

              if (isReset) {
                // 預設每輪都是相同Icon個數
                newCount = this.view.getIconAmount(0) - originalDropOrder + newDropOrder;
                targetNodeData.resetCount = newCount;
                targetNodeData.moveCount = targetReelData.length;
              } else {
                newCount = originalDropOrder - newDropOrder;
                targetNodeData.moveCount = newCount;
              }
            }
          }
        }

        onEnd() {
          var _this$allReelRollEndC;

          this.isPerformResult = false;
          this.view.isStopButtonPressed = false;
          this.resetDropCount();
          (_this$allReelRollEndC = this.allReelRollEndCallBack) == null || _this$allReelRollEndC.call(this);
        }

        resetDropCount() {
          this.roundMoveData.roundMoveCount = this.defaultMoveCount;
          this.roundMoveData.roundResetCount = this.defaultResetCount;
        }

        resetRoundMoveData() {
          for (var i = 0; i < this.reDropData.roundIconMoveData.length; i++) {
            for (var j = 0; j < this.fillingData.roundIconMoveData[i].length; j++) {
              this.reDropData.roundIconMoveData[i].push(this.fillingData.roundIconMoveData[i][j]);
            }
          }

          this.roundMoveData.roundIconMoveData = [...this.reDropData.roundIconMoveData];
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "view", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f4d4bbd64456fc7955156a371e120e497a4d31d2.js.map