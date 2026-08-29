System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, CCInteger, Enum, randomRangeInt, GameController, PublicReelConfigTest, GenericUIManager, Utility, UniDropSlotMachineExample, FillIconData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, NORMAL_SYMBOLS_LIST, MAGNIFICATION_SYMBOLS_LIST, ICON_AMOUNT, REEL_AMOUNT, SlotType, UniDropReelGameControllerTest;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "db://assets/Scripts/GameScripts/GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicReelConfigTest(extras) {
    _reporterNs.report("PublicReelConfigTest", "../../../../ReelTemplate_2/deprecation/Example/Scripts/PublicReelConfigTest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMode(extras) {
    _reporterNs.report("GameMode", "db://assets/Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUIManager(extras) {
    _reporterNs.report("GenericUIManager", "db://assets/GenericUI/Scripts/GenericUIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "db://assets/Scripts/Utils/Utility", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniDropSlotMachineExample(extras) {
    _reporterNs.report("UniDropSlotMachineExample", "./UniDropSlotMachineExample", _context.meta, extras);
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
      Enum = _cc.Enum;
      randomRangeInt = _cc.randomRangeInt;
    }, function (_unresolved_2) {
      GameController = _unresolved_2.GameController;
    }, function (_unresolved_3) {
      PublicReelConfigTest = _unresolved_3.PublicReelConfigTest;
    }, function (_unresolved_4) {
      GenericUIManager = _unresolved_4.GenericUIManager;
    }, function (_unresolved_5) {
      Utility = _unresolved_5.Utility;
    }, function (_unresolved_6) {
      UniDropSlotMachineExample = _unresolved_6.UniDropSlotMachineExample;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f9314/Fv6VPCrm/R+6sMLag", "UniDropReelGameControllerTest", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'CCInteger', 'Enum', 'Node', 'randomRangeInt']);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        NORMAL_SYMBOLS_LIST,
        MAGNIFICATION_SYMBOLS_LIST,
        ICON_AMOUNT,
        REEL_AMOUNT
      } = _crd && PublicReelConfigTest === void 0 ? (_reportPossibleCrUseOfPublicReelConfigTest({
        error: Error()
      }), PublicReelConfigTest) : PublicReelConfigTest);

      SlotType = /*#__PURE__*/function (SlotType) {
        SlotType[SlotType["Drop"] = 0] = "Drop";
        SlotType[SlotType["Rolling"] = 1] = "Rolling";
        return SlotType;
      }(SlotType || {});

      FillIconData = class FillIconData {
        constructor() {
          this.removeIconData = [];
        }

      };

      _export("UniDropReelGameControllerTest", UniDropReelGameControllerTest = (_dec = ccclass('DropUniReelGameControllerTest'), _dec2 = property({
        type: _crd && UniDropSlotMachineExample === void 0 ? (_reportPossibleCrUseOfUniDropSlotMachineExample({
          error: Error()
        }), UniDropSlotMachineExample) : UniDropSlotMachineExample,
        visible: true
      }), _dec3 = property(CCFloat), _dec4 = property({
        type: CCInteger,
        min: -1,
        visible: true,
        tooltip: '用來測試聽牌效果'
      }), _dec5 = property(CCInteger), _dec6 = property({
        type: Enum(SlotType)
      }), _dec(_class2 = (_class3 = class UniDropReelGameControllerTest extends (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_slotMachine", _descriptor, this);

          _initializerDefineProperty(this, "serverDelayTime", _descriptor2, this);

          _initializerDefineProperty(this, "_readyHandReel", _descriptor3, this);

          _initializerDefineProperty(this, "rollingReelIDs", _descriptor4, this);

          _initializerDefineProperty(this, "slotType", _descriptor5, this);

          this.defaultDropIconIdList = [];
        }

        init(gameMode, isOnline) {
          super.init(gameMode, isOnline);

          this._slotMachine.init();

          this.defaultDropIconIdList = this.generateDefaultDropIconIdList();
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
          var _this = this;

          return _asyncToGenerator(function* () {
            if ((_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.checkAutoStatus()) {
              _this.startSpin(_this.rollingReelIDs);
            } else {
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.setMainUIToNormalMode();
            }
          })();
        }

        startSpin(reelIDs) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.setMainUIToSpinMode();

            var testData = _this2.createTestData(reelIDs); //let resultData: number[][] = [[3, 3, 0], [4, 2, 5], [1, 0, 5], [9, 10, 12]]; //固定盤面範例


            var resultData = _this2.handleData(testData);

            var isTurboMode = (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.isTurboOn;
            var refillDropDataList = [];
            refillDropDataList.push(_this2.generateRefillDropData(3));
            refillDropDataList.push(_this2.generateRefillDropData(1));
            refillDropDataList.push(_this2.generateRefillDropData(2));

            if (_this2.slotType === SlotType.Drop) {
              yield _this2._slotMachine.startDropOut(isTurboMode, _this2.defaultDropIconIdList);
            } else {
              yield _this2._slotMachine.startRoll(isTurboMode, _this2.rollingReelIDs);
            }

            yield (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).waitPromise(_this2.serverDelayTime); // 模擬接收伺服器資料的延遲

            if (_this2.slotType === SlotType.Drop) {
              yield _this2._slotMachine.startDropIn(_this2.defaultDropIconIdList, resultData);
            } else {
              _this2._slotMachine.setReadyHand(_this2._readyHandReel);

              yield _this2._slotMachine.stopRoll(resultData);
            }

            yield (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).waitPromise(0.5);

            while (refillDropDataList.length > 0) {
              var data = refillDropDataList.shift();

              var fillResultData = _this2.handleFillData(data.removeIconData, resultData);

              yield _this2._slotMachine.startDropRefill(data.removeIconData, fillResultData);
              yield (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
                error: Error()
              }), Utility) : Utility).waitPromise(0.5);
            }

            if ((_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.isAutoMode) {
              yield (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
                error: Error()
              }), Utility) : Utility).waitPromise(0.5);
            }

            _this2.autoSpin();
          })();
        }

        onStopBtnClick() {
          this._slotMachine.stopRollCallBack();
        }

        generateDefaultDropIconIdList() {
          var dropIconIdList = [];

          for (var j = 0; j < REEL_AMOUNT; j++) {
            var idList = [];

            for (var _j = 0; _j < ICON_AMOUNT; _j++) {
              idList.push(_j + 1);
            }

            dropIconIdList.push(idList);
          }

          return dropIconIdList;
        }

        generateRefillDropData(amount) {
          var data = new FillIconData();

          for (var index = 0; index < REEL_AMOUNT; index++) {
            var indexList = [];
            indexList.push(amount);
            data.removeIconData.push(indexList);
          }

          return data;
        }

        createTestData(reelIDs) {
          if (reelIDs === void 0) {
            reelIDs = [0, 1, 2, 3];
          }

          var testData = [];

          for (var index = 0; index < reelIDs.length; index++) {
            var reelID = reelIDs[index];
            testData.push(...this.createSymbolList(reelID));
          }

          return testData;
        }

        createSymbolList(reelID) {
          var remainSymbolList = reelID === this._slotMachine.reelAmount - 1 ? [...MAGNIFICATION_SYMBOLS_LIST] : [...NORMAL_SYMBOLS_LIST];
          var uniqueSymbolIDList = reelID === this._slotMachine.reelAmount - 1 ? [...MAGNIFICATION_SYMBOLS_LIST] : [0];
          var resultSymbols = [];

          for (var index = 0; index < ICON_AMOUNT; index++) {
            var randomIndex = randomRangeInt(0, remainSymbolList.length);
            var symbolID = remainSymbolList[randomIndex];

            if (uniqueSymbolIDList !== null && uniqueSymbolIDList.includes(symbolID)) {
              var uniqueSymbolIndex = remainSymbolList.indexOf(symbolID);
              remainSymbolList.splice(uniqueSymbolIndex, 1);
            }

            resultSymbols.push(symbolID);
          }

          return resultSymbols;
        }

        handleData(data) {
          var resultData = [];

          for (var index = 0; index < this._slotMachine.reelAmount; index++) {
            var iconAmount = this._slotMachine.getIconAmount(index);

            resultData[index] = data.slice(index * iconAmount, (index + 1) * iconAmount);
          }

          return resultData;
        }

        handleFillData(removeIdList, data) {
          var fillResult = Array.from({
            length: REEL_AMOUNT
          }, () => []);

          for (var i = 0; i < removeIdList.length; i++) {
            var reelID = i;

            for (var j = 0; j < removeIdList[i].length; j++) {
              var remainSymbolList = reelID === this._slotMachine.reelAmount - 1 ? [...MAGNIFICATION_SYMBOLS_LIST] : [...NORMAL_SYMBOLS_LIST]; //fillResult[reelID].push(3); //固定盤面範例

              var randomIndex = randomRangeInt(0, remainSymbolList.length);
              var symbolID = remainSymbolList[randomIndex];
              fillResult[reelID].push(symbolID);
            }
          }

          return fillResult;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "_slotMachine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "serverDelayTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "_readyHandReel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 99;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "rollingReelIDs", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [0, 1, 2, 3];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "slotType", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SlotType.Drop;
        }
      })), _class3)) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3392e819b09ae2d27a7fc1497be2a345b3fa7fb3.js.map