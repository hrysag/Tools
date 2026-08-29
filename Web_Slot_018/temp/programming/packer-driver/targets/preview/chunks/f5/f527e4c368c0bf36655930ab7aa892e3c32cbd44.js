System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, Component, NetworkEvent, NetworkHandler, AdditionalPurchaseType, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, CheckScoreTool;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfNetworkEvent(extras) {
    _reporterNs.report("NetworkEvent", "../../Scripts/Networks/NetworkHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkHandler(extras) {
    _reporterNs.report("NetworkHandler", "../../Scripts/Networks/NetworkHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "../../Scripts/Networks/BetData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdditionalPurchaseType(extras) {
    _reporterNs.report("AdditionalPurchaseType", "../../Scripts/NetAgent/CConnectManager/CConnectDefine", _context.meta, extras);
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
      Component = _cc.Component;
    }, function (_unresolved_2) {
      NetworkEvent = _unresolved_2.NetworkEvent;
      NetworkHandler = _unresolved_2.NetworkHandler;
    }, function (_unresolved_3) {
      AdditionalPurchaseType = _unresolved_3.AdditionalPurchaseType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1db37S9K4pLy6c4jM6knigX", "CheckScoreTool", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CheckScoreTool", CheckScoreTool = (_dec = ccclass('CheckScoreTool'), _dec2 = property(CCInteger), _dec(_class = (_class2 = class CheckScoreTool extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "gameNumber", _descriptor, this);
        }

        start() {
          (_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
            error: Error()
          }), NetworkHandler) : NetworkHandler).instance.addEventListener((_crd && NetworkEvent === void 0 ? (_reportPossibleCrUseOfNetworkEvent({
            error: Error()
          }), NetworkEvent) : NetworkEvent).Bet, this.onReceiveBet.bind(this));
        }

        onBtnClick() {
          (_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
            error: Error()
          }), NetworkHandler) : NetworkHandler).instance.send((_crd && NetworkEvent === void 0 ? (_reportPossibleCrUseOfNetworkEvent({
            error: Error()
          }), NetworkEvent) : NetworkEvent).Bet, this.gameNumber, 100, 10000, (_crd && AdditionalPurchaseType === void 0 ? (_reportPossibleCrUseOfAdditionalPurchaseType({
            error: Error()
          }), AdditionalPurchaseType) : AdditionalPurchaseType).None);
        }

        onReceiveBet(betData) {
          var base64Result = betData.slotData;
          var binaryBufferResult = betData.slotDataBinaryBuffer;
          var serverOdds = (betData.score / betData.bet).fixed(); // 這行要加入自己計算Odds的邏輯

          var myOdds = 0;

          if (serverOdds === myOdds) {
            console.log("Server Odds: " + serverOdds + " My Odds: " + myOdds + ", OK!!!!!");
            (_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
              error: Error()
            }), NetworkHandler) : NetworkHandler).instance.send((_crd && NetworkEvent === void 0 ? (_reportPossibleCrUseOfNetworkEvent({
              error: Error()
            }), NetworkEvent) : NetworkEvent).Bet, this.gameNumber, 100, 10000, (_crd && AdditionalPurchaseType === void 0 ? (_reportPossibleCrUseOfAdditionalPurchaseType({
              error: Error()
            }), AdditionalPurchaseType) : AdditionalPurchaseType).None);
          } else {
            console.error("Server Odds: " + serverOdds + " My Odds: " + myOdds + ", Please check your code!");
            console.error("base64Result: " + base64Result);
            return;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameNumber", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 12099;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f527e4c368c0bf36655930ab7aa892e3c32cbd44.js.map