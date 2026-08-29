System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, ProcessSlotDataCore, AdditionalPurchaseType, CheckScoreTool, NetworkEvent, NetworkHandler, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, TestCheckScore;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfProcessSlotDataCore(extras) {
    _reporterNs.report("ProcessSlotDataCore", "../ServerBackSlotInfoData/ProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdditionalPurchaseType(extras) {
    _reporterNs.report("AdditionalPurchaseType", "db://assets/Scripts/NetAgent/CConnectManager/CConnectDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCheckScoreTool(extras) {
    _reporterNs.report("CheckScoreTool", "db://assets/Tool/CheckScoreESBuild/CheckScoreTool/CheckScoreTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkEvent(extras) {
    _reporterNs.report("NetworkEvent", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkHandler(extras) {
    _reporterNs.report("NetworkHandler", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicProcessSlotData(extras) {
    _reporterNs.report("BasicProcessSlotData", "../MyUtils/BasicProcessServerData/IProcessSlotData", _context.meta, extras);
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
      ProcessSlotDataCore = _unresolved_2.ProcessSlotDataCore;
    }, function (_unresolved_3) {
      AdditionalPurchaseType = _unresolved_3.AdditionalPurchaseType;
    }, function (_unresolved_4) {
      CheckScoreTool = _unresolved_4.CheckScoreTool;
    }, function (_unresolved_5) {
      NetworkEvent = _unresolved_5.NetworkEvent;
      NetworkHandler = _unresolved_5.NetworkHandler;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "43b58w9tbhAtbDEFhyh/yU3", "TestCheckScore", undefined);

      //import { CheckScoreTool } from "db://assets/Tool/CheckScoreTool/CheckScoreTool";
      //import { BetData } from "db://assets/Scripts/Networks/BetData";
      __checkObsolete__(['_decorator', 'CCInteger', 'Component', 'Node']); //import { NetworkEvent, NetworkHandler } from 'db://assets/Scripts/Networks/NetworkHandler';


      ({
        ccclass,
        property
      } = _decorator);

      _export("TestCheckScore", TestCheckScore = (_dec = ccclass('TestCheckScore'), _dec2 = property(CCInteger), _dec3 = property(CCInteger), _dec4 = property(CCInteger), _dec(_class = (_class2 = class TestCheckScore extends (_crd && CheckScoreTool === void 0 ? (_reportPossibleCrUseOfCheckScoreTool({
        error: Error()
      }), CheckScoreTool) : CheckScoreTool) {
        constructor() {
          super();

          _initializerDefineProperty(this, "testBetValue", _descriptor, this);

          //--test bet value
          _initializerDefineProperty(this, "testRound", _descriptor2, this);

          //--test score value
          _initializerDefineProperty(this, "testBetValues", _descriptor3, this);

          //--test win values
          this._currentSlotInfo = void 0;
          this._testCount = 0;
          this._testBetCount = 0;
          this.gameNumber = 12172; //--gameNumber for testing

          this._testCount = 0;
        }

        initProcess() {
          this._currentSlotInfo = new (_crd && ProcessSlotDataCore === void 0 ? (_reportPossibleCrUseOfProcessSlotDataCore({
            error: Error()
          }), ProcessSlotDataCore) : ProcessSlotDataCore)();
        }

        init() {
          this.onBtnClick();
        }

        onBtnClick() {
          var betValue = this.getBetValue();
          (_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
            error: Error()
          }), NetworkHandler) : NetworkHandler).instance.send((_crd && NetworkEvent === void 0 ? (_reportPossibleCrUseOfNetworkEvent({
            error: Error()
          }), NetworkEvent) : NetworkEvent).Bet, this.gameNumber, betValue, this.testRound, (_crd && AdditionalPurchaseType === void 0 ? (_reportPossibleCrUseOfAdditionalPurchaseType({
            error: Error()
          }), AdditionalPurchaseType) : AdditionalPurchaseType).None, 'testPlayer');
        }

        onReceiveBet(betData) {
          var base64Result = betData.slotData;
          var binaryBufferResult = betData.slotDataBinaryBuffer;
          var serverOdds = (betData.score / betData.bet).fixed(); // 這行要加入自己計算Odds的邏輯

          var myOdds = 0;

          this._currentSlotInfo.setNewRoundData(binaryBufferResult, betData.bet);

          var roundData = this._currentSlotInfo.getCloneData();

          myOdds = roundData.allRoundOdds;
          this._testCount++;
          var betValue = this.getBetValue();

          if (serverOdds === myOdds) {
            console.log("Server Odds: " + serverOdds + " My Odds: " + myOdds + " count: " + this._testCount + " bet: " + betValue + ", OK!!!!!");

            if (this._testCount < this.testRound) {
              (_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
                error: Error()
              }), NetworkHandler) : NetworkHandler).instance.send((_crd && NetworkEvent === void 0 ? (_reportPossibleCrUseOfNetworkEvent({
                error: Error()
              }), NetworkEvent) : NetworkEvent).Bet, this.gameNumber, betValue, this.testRound, (_crd && AdditionalPurchaseType === void 0 ? (_reportPossibleCrUseOfAdditionalPurchaseType({
                error: Error()
              }), AdditionalPurchaseType) : AdditionalPurchaseType).None, 'testPlayer');
            } else {
              console.log("Test completed after " + this._testCount + " rounds.");
            }
          } else {
            console.error("Server Odds: " + serverOdds + " My Odds: " + myOdds + ", Please check your code!");
            console.error("base64Result: " + base64Result);
            return;
          }
        }

        getBetValue() {
          if (this.testBetValues.length > 0) {
            this._testBetCount++;

            if (this._testBetCount >= this.testBetValues.length) {
              this._testBetCount = 0;
            }

            return this.testBetValues[this._testBetCount];
          }

          return this.testBetValue;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "testBetValue", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "testRound", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10000;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "testBetValues", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c18b393765a585b1f058a6a05d92bd0687c2d6f0.js.map