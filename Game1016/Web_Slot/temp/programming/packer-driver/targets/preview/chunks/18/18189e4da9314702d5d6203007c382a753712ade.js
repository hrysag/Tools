System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, DropSlotMachineController, GameDropResultData, RoundRemoveData, GameController, GenericUIManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, DropReelGameMainTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDropSlotMachineController(extras) {
    _reporterNs.report("DropSlotMachineController", "../../../Scripts/DropReel/DropSlotMachineController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameDropResultData(extras) {
    _reporterNs.report("GameDropResultData", "../../../Scripts/DropReel/DropReelDataStructure", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoundRemoveData(extras) {
    _reporterNs.report("RoundRemoveData", "../../../Scripts/DropReel/DropReelDataStructure", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "db://assets/Scripts/GameScripts/Controller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMode(extras) {
    _reporterNs.report("GameMode", "db://assets/Scripts/GameScripts/Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUIManager(extras) {
    _reporterNs.report("GenericUIManager", "db://assets/Scripts/GameScripts/GenericUI/Scripts", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
    }, function (_unresolved_2) {
      DropSlotMachineController = _unresolved_2.DropSlotMachineController;
    }, function (_unresolved_3) {
      GameDropResultData = _unresolved_3.GameDropResultData;
      RoundRemoveData = _unresolved_3.RoundRemoveData;
    }, function (_unresolved_4) {
      GameController = _unresolved_4.GameController;
    }, function (_unresolved_5) {
      GenericUIManager = _unresolved_5.GenericUIManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1fa5b5xRv1BDqjXuLGQv3sQ", "DropReelGameMainTest", undefined);

      __checkObsolete__(['_decorator', 'CCInteger']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DropReelGameMainTest", DropReelGameMainTest = (_dec = ccclass('DropReelGameMainTest'), _dec2 = property(_crd && DropSlotMachineController === void 0 ? (_reportPossibleCrUseOfDropSlotMachineController({
        error: Error()
      }), DropSlotMachineController) : DropSlotMachineController), _dec3 = property({
        type: CCInteger,
        min: -1,
        tooltip: '用來測試server延遲效果'
      }), _dec(_class = (_class2 = class DropReelGameMainTest extends (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "slotMachine", _descriptor, this);

          _initializerDefineProperty(this, "serverDelay", _descriptor2, this);
        }

        init(gameMode, isOnline) {
          super.init(gameMode, isOnline);
          this.slotMachine.init();
          this.slotMachine.allReelRollEndCallBack = this.autoSpin.bind(this);
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.onStopBtnClickCallback = this.slotMachine.stopRollCallBack.bind(this.slotMachine);
        }

        onStartSpin() {
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.resetMainUIStopBtn();
          this.startSpin();
        }

        onStartAuto(autoTimes) {
          this.autoSpin();
        }

        autoSpin() {
          if ((_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.checkAutoStatus()) {
            this.startSpin();
          } else {
            (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.setMainUIToNormalMode();
          }
        }

        startSpin() {
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setMainUIToSpinMode();
          var isTurbo = (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.isTurboOn;
          this.slotMachine.startDrop(isTurbo);
          this.scheduleOnce(() => {
            // 模擬接收伺服器資料的延遲
            // this._slotMachine.setReadyHand(this._readyHandReel);  ==> readyHand 可自行設定
            var fakeResult = this.generateFakeData();
            this.slotMachine.stopDrop(fakeResult);
          }, this.serverDelay);
        }

        generateFakeData() {
          // fakeData
          var firstRoundData = [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]];
          var removeIndex = [[[1], [0, 2], [1, 2], []], [[2], [2], [2], []], [[0], [0], [0], []]];
          var newIconSymbol = [[[5], [5, 5], [5, 5], []], [[6], [6], [6], []], [[7], [7], [7], []]];
          var totalRemoveResult = [];
          var totalResult;

          for (var i = 0; i < removeIndex.length; i++) {
            var newRoundRemoveData = new (_crd && RoundRemoveData === void 0 ? (_reportPossibleCrUseOfRoundRemoveData({
              error: Error()
            }), RoundRemoveData) : RoundRemoveData)(removeIndex[i], newIconSymbol[i]);
            totalRemoveResult.push(newRoundRemoveData);
          }

          totalResult = new (_crd && GameDropResultData === void 0 ? (_reportPossibleCrUseOfGameDropResultData({
            error: Error()
          }), GameDropResultData) : GameDropResultData)(firstRoundData, totalRemoveResult);
          return totalResult;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "slotMachine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "serverDelay", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=18189e4da9314702d5d6203007c382a753712ade.js.map