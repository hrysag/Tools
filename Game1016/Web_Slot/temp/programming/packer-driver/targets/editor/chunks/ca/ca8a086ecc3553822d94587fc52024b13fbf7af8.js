System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, CCInteger, randomRangeInt, PublicReelConfigTest, IconSlotMachine, GameController, GenericUIManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, NORMAL_SYMBOLS_LIST, MAGNIFICATION_SYMBOLS_LIST, ICON_AMOUNT, IconReelGameControllerTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPublicReelConfigTest(extras) {
    _reporterNs.report("PublicReelConfigTest", "./PublicReelConfigTest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconSlotMachine(extras) {
    _reporterNs.report("IconSlotMachine", "../../Scripts/IconSlotMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../../../../Controller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMode(extras) {
    _reporterNs.report("GameMode", "../../../../Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUIManager(extras) {
    _reporterNs.report("GenericUIManager", "../../../../GenericUI/Scripts", _context.meta, extras);
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
      CCInteger = _cc.CCInteger;
      randomRangeInt = _cc.randomRangeInt;
    }, function (_unresolved_2) {
      PublicReelConfigTest = _unresolved_2.PublicReelConfigTest;
    }, function (_unresolved_3) {
      IconSlotMachine = _unresolved_3.IconSlotMachine;
    }, function (_unresolved_4) {
      GameController = _unresolved_4.GameController;
    }, function (_unresolved_5) {
      GenericUIManager = _unresolved_5.GenericUIManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0890817Hp9ElK9ZVUxgV4y3", "IconReelGameControllerTest", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'CCInteger', 'randomRangeInt']);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        NORMAL_SYMBOLS_LIST,
        MAGNIFICATION_SYMBOLS_LIST,
        ICON_AMOUNT
      } = _crd && PublicReelConfigTest === void 0 ? (_reportPossibleCrUseOfPublicReelConfigTest({
        error: Error()
      }), PublicReelConfigTest) : PublicReelConfigTest);

      _export("IconReelGameControllerTest", IconReelGameControllerTest = (_dec = ccclass('IconReelGameControllerTest'), _dec2 = property({
        type: _crd && IconSlotMachine === void 0 ? (_reportPossibleCrUseOfIconSlotMachine({
          error: Error()
        }), IconSlotMachine) : IconSlotMachine,
        visible: true
      }), _dec3 = property(CCFloat), _dec4 = property({
        type: CCInteger,
        min: -1,
        visible: true,
        tooltip: '用來測試聽牌效果'
      }), _dec5 = property(CCInteger), _dec(_class = (_class2 = class IconReelGameControllerTest extends (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_slotMachine", _descriptor, this);

          _initializerDefineProperty(this, "serverDelayTime", _descriptor2, this);

          _initializerDefineProperty(this, "_readyHandReel", _descriptor3, this);

          _initializerDefineProperty(this, "rollingReelIDs", _descriptor4, this);
        }

        init(gameMode, isOnline) {
          super.init(gameMode, isOnline);

          this._slotMachine.init();

          this._slotMachine.allReelRollEndCallBack = this.autoSpin.bind(this);
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.onStopBtnClickCallback = this.onStopBtnClick.bind(this);
        }

        onStartSpin() {
          super.onStartSpin();
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.resetMainUIStopBtn();
          this.startSpin(this.rollingReelIDs);
        }

        onStartAuto(autoTimes) {
          super.onStartAuto(autoTimes);
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

        startSpin(reelIDs) {
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setMainUIToSpinMode();
          let testData = this.createTestData(reelIDs);
          let resultData = this.handleData(testData);
          let isTurboMode = (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.isTurboOn;

          this._slotMachine.startRoll(isTurboMode, reelIDs);

          this.scheduleOnce(() => {
            // 模擬接收伺服器資料的延遲
            this._slotMachine.setReadyHand(this._readyHandReel);

            this._slotMachine.stopRoll(resultData);
          }, this.serverDelayTime);
        }

        createTestData(reelIDs = [0, 1, 2, 3]) {
          let testData = [];

          for (let index = 0; index < reelIDs.length; index++) {
            let reelID = reelIDs[index];
            testData.push(...this.createSymbolList(reelID));
          }

          console.log(`測試資料: ${testData}`);
          return testData;
        }

        createSymbolList(reelID) {
          let remainSymbolList = reelID === this._slotMachine.reelAmount - 1 ? [...MAGNIFICATION_SYMBOLS_LIST] : [...NORMAL_SYMBOLS_LIST];
          let uniqueSymbolIDList = reelID === this._slotMachine.reelAmount - 1 ? [...MAGNIFICATION_SYMBOLS_LIST] : [0];
          let resultSymbols = [];

          for (let index = 0; index < ICON_AMOUNT; index++) {
            let randomIndex = randomRangeInt(0, remainSymbolList.length);
            let symbolID = remainSymbolList[randomIndex];

            if (uniqueSymbolIDList !== null && uniqueSymbolIDList.includes(symbolID)) {
              let uniqueSymbolIndex = remainSymbolList.indexOf(symbolID);
              remainSymbolList.splice(uniqueSymbolIndex, 1);
            }

            resultSymbols.push(symbolID);
          }

          return resultSymbols;
        }

        handleData(data) {
          let resultData = [];

          for (let index = 0; index < this._slotMachine.reelAmount; index++) {
            let iconAmount = this._slotMachine.getIconAmount(index);

            resultData[index] = data.slice(index * iconAmount, (index + 1) * iconAmount);
          }

          return resultData;
        }

        onStopBtnClick() {
          this._slotMachine.stopRollCallBack();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_slotMachine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "serverDelayTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_readyHandReel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 99;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rollingReelIDs", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [0, 1, 2, 3];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ca8a086ecc3553822d94587fc52024b13fbf7af8.js.map