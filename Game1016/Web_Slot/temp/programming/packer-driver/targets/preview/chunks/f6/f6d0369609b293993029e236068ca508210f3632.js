System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, CCInteger, Component, randomRangeInt, UniSlotMachineExample, PublicReelConfigTest, SimpleUI, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, NORMAL_SYMBOLS_LIST, MAGNIFICATION_SYMBOLS_LIST, ICON_AMOUNT, GameControllerSimple;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUniSlotMachineExample(extras) {
    _reporterNs.report("UniSlotMachineExample", "../Reel/UniSlotMachineExample", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicReelConfigTest(extras) {
    _reporterNs.report("PublicReelConfigTest", "../../../../v2/Example/Scripts/PublicReelConfigTest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimpleUI(extras) {
    _reporterNs.report("SimpleUI", "./SimpleUI", _context.meta, extras);
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
      Component = _cc.Component;
      randomRangeInt = _cc.randomRangeInt;
    }, function (_unresolved_2) {
      UniSlotMachineExample = _unresolved_2.UniSlotMachineExample;
    }, function (_unresolved_3) {
      PublicReelConfigTest = _unresolved_3.PublicReelConfigTest;
    }, function (_unresolved_4) {
      SimpleUI = _unresolved_4.SimpleUI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3c9bcTZHD1DWYzRotsUhqwb", "GameControllerSimple", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'CCInteger', 'Component', 'Node', 'randomRangeInt']);

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

      _export("GameControllerSimple", GameControllerSimple = (_dec = ccclass('GameControllerSimple'), _dec2 = property(_crd && SimpleUI === void 0 ? (_reportPossibleCrUseOfSimpleUI({
        error: Error()
      }), SimpleUI) : SimpleUI), _dec3 = property({
        type: _crd && UniSlotMachineExample === void 0 ? (_reportPossibleCrUseOfUniSlotMachineExample({
          error: Error()
        }), UniSlotMachineExample) : UniSlotMachineExample,
        visible: true
      }), _dec4 = property(CCFloat), _dec5 = property({
        type: CCInteger,
        min: -1,
        visible: true,
        tooltip: '用來測試聽牌效果'
      }), _dec6 = property(CCInteger), _dec(_class = (_class2 = class GameControllerSimple extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "simpleUI", _descriptor, this);

          _initializerDefineProperty(this, "slotMachine", _descriptor2, this);

          _initializerDefineProperty(this, "serverDelayTime", _descriptor3, this);

          _initializerDefineProperty(this, "readyHandReel", _descriptor4, this);

          _initializerDefineProperty(this, "rollingReelIDs", _descriptor5, this);
        }

        start() {
          this.simpleUI.onSpinBtnClickCallback = this.onSpinBtnClick.bind(this);
          this.simpleUI.onAutoBtnClickCallback = this.onAutoBtnClick.bind(this);
          this.simpleUI.onTurboBtnClickCallback = this.onTurboBtnClick.bind(this);
          this.simpleUI.onStopBtnClickCallback = this.onStopBtnClick.bind(this);
          this.slotMachine.init();
        }

        onSpinBtnClick() {
          this.startSpin(this.rollingReelIDs);
        }

        onAutoBtnClick() {
          this.autoSpin();
        }

        onTurboBtnClick() {}

        autoSpin() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this.simpleUI.isAuto) {
              _this.startSpin(_this.rollingReelIDs);
            }
          })();
        }

        startSpin(reelIDs) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var testData = _this2.createTestData(reelIDs);

            var resultData = _this2.handleData(testData);

            console.log(resultData);
            var isTurboMode = _this2.simpleUI.isTurbo;

            _this2.slotMachine.startRoll(isTurboMode, reelIDs);

            yield _this2.delay(_this2.serverDelayTime); // 模擬接收伺服器資料的延遲

            _this2.slotMachine.setReadyHand(_this2.readyHandReel);

            yield _this2.slotMachine.stopRoll(resultData);

            if (_this2.simpleUI.isAuto) {
              yield _this2.delay(0.5);

              _this2.startSpin(_this2.rollingReelIDs);
            } else {
              _this2.simpleUI.setNormalMode();
            }
          })();
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
          var remainSymbolList = reelID === this.slotMachine.reelAmount - 1 ? [...MAGNIFICATION_SYMBOLS_LIST] : [...NORMAL_SYMBOLS_LIST];
          var uniqueSymbolIDList = reelID === this.slotMachine.reelAmount - 1 ? [...MAGNIFICATION_SYMBOLS_LIST] : [0];
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

          for (var index = 0; index < this.slotMachine.reelAmount; index++) {
            var iconAmount = this.slotMachine.getIconAmount(index);
            resultData[index] = data.slice(index * iconAmount, (index + 1) * iconAmount);
          }

          return resultData;
        }

        onStopBtnClick() {
          this.slotMachine.stopRollCallBack();
        }

        delay(time) {
          return new Promise(resolve => {
            this.scheduleOnce(() => {
              resolve();
            }, time);
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "simpleUI", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "slotMachine", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "serverDelayTime", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "readyHandReel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 99;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rollingReelIDs", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [0, 1, 2, 3];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f6d0369609b293993029e236068ca508210f3632.js.map