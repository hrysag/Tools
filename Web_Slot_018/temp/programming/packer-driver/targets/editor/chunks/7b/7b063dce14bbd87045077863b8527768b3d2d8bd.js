System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCString, Component, director, PlayerInfo, NetworkEvent, NetworkHandler, GenericUIManager, ErrorHandler, ErrorCode, AdditionalPurchaseType, GameTimeScale, SpineTimeScaleTuner, NewFlashModeEnum, Utility, GameSetting, AnimationTimeScaleTuner, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GameController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "../Networks/BetData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerInfo(extras) {
    _reporterNs.report("PlayerInfo", "../Player/PlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkEvent(extras) {
    _reporterNs.report("NetworkEvent", "../Networks/NetworkHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkHandler(extras) {
    _reporterNs.report("NetworkHandler", "../Networks/NetworkHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUIManager(extras) {
    _reporterNs.report("GenericUIManager", "../../GenericUI/Scripts/GenericUIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorHandler(extras) {
    _reporterNs.report("ErrorHandler", "../ErrorHandler/ErrorHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCode(extras) {
    _reporterNs.report("ErrorCode", "../ErrorHandler/ErrorHandleDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotRelayLang(extras) {
    _reporterNs.report("SlotRelayLang", "../Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdditionalPurchaseType(extras) {
    _reporterNs.report("AdditionalPurchaseType", "../NetAgent/CConnectManager/CConnectDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTimeScale(extras) {
    _reporterNs.report("GameTimeScale", "../Utils/GameTimeScale", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineTimeScaleTuner(extras) {
    _reporterNs.report("SpineTimeScaleTuner", "./SpineTimeScaleTuner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNewFlashModeEnum(extras) {
    _reporterNs.report("NewFlashModeEnum", "../../GenericUI/Scripts/MainUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../Utils/Utility", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSetting(extras) {
    _reporterNs.report("GameSetting", "./GameSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationTimeScaleTuner(extras) {
    _reporterNs.report("AnimationTimeScaleTuner", "./AnimationTimeScaleTuner", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCString = _cc.CCString;
      Component = _cc.Component;
      director = _cc.director;
    }, function (_unresolved_2) {
      PlayerInfo = _unresolved_2.PlayerInfo;
    }, function (_unresolved_3) {
      NetworkEvent = _unresolved_3.NetworkEvent;
      NetworkHandler = _unresolved_3.NetworkHandler;
    }, function (_unresolved_4) {
      GenericUIManager = _unresolved_4.GenericUIManager;
    }, function (_unresolved_5) {
      ErrorHandler = _unresolved_5.ErrorHandler;
    }, function (_unresolved_6) {
      ErrorCode = _unresolved_6.ErrorCode;
    }, function (_unresolved_7) {
      AdditionalPurchaseType = _unresolved_7.AdditionalPurchaseType;
    }, function (_unresolved_8) {
      GameTimeScale = _unresolved_8.GameTimeScale;
    }, function (_unresolved_9) {
      SpineTimeScaleTuner = _unresolved_9.SpineTimeScaleTuner;
    }, function (_unresolved_10) {
      NewFlashModeEnum = _unresolved_10.NewFlashModeEnum;
    }, function (_unresolved_11) {
      Utility = _unresolved_11.Utility;
    }, function (_unresolved_12) {
      GameSetting = _unresolved_12.GameSetting;
    }, function (_unresolved_13) {
      AnimationTimeScaleTuner = _unresolved_13.AnimationTimeScaleTuner;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "178e4voMA5Cg4lTxe05cao5", "GameController", undefined);

      __checkObsolete__(['_decorator', 'CCString', 'Component', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec2 = property(CCString), _dec(_class = (_class2 = class GameController extends Component {
        constructor(...args) {
          super(...args);
          this.betValue = -1;
          // 下注金額，初始先設定為-1，要設定下注額度列表後才能決定
          this.finalBalance = 0;
          this.balanceAfterSpin = 0;
          // 下注後得分前的餘額
          this.gameNumber = 0;
          this.isOnline = true;

          _initializerDefineProperty(this, "playerToken", _descriptor, this);

          // 疾速模式時的快轉倍速 如果要調整可以繼承後在override此屬性
          this.maxSpeedMultiplier = 2;
          this.onReceiveBetCallback = null;
          this.forceChangeLanguage = null;
        }

        init(gameNumber, isOnline) {
          this.gameNumber = gameNumber;
          this.isOnline = isOnline;
          this.betValue = (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
            error: Error()
          }), PlayerInfo) : PlayerInfo).betValueList[0];
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setBetValue(this.betValue);
          (_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
            error: Error()
          }), NetworkHandler) : NetworkHandler).instance.addEventListener((_crd && NetworkEvent === void 0 ? (_reportPossibleCrUseOfNetworkEvent({
            error: Error()
          }), NetworkEvent) : NetworkEvent).Bet, this.onReceiveBet.bind(this));
          (_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
            error: Error()
          }), NetworkHandler) : NetworkHandler).instance.addEventListener((_crd && NetworkEvent === void 0 ? (_reportPossibleCrUseOfNetworkEvent({
            error: Error()
          }), NetworkEvent) : NetworkEvent).SpinFail, this.onSpinFail.bind(this));
          (_crd && GameTimeScale === void 0 ? (_reportPossibleCrUseOfGameTimeScale({
            error: Error()
          }), GameTimeScale) : GameTimeScale).onTimeScaleChangeCallback = this.onTimeScaleChange.bind(this);
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.onSetMainUIToSpinModeCallback = this.onSetMainUIToSpinMode.bind(this);
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.onSetMainUIToNormalModeCallback = this.onSetMainUIToNormalMode.bind(this);
        }

        onUpdateBetValue(betValue) {
          this.betValue = betValue;
        }

        onStartSpin() {}

        onStartAuto(autoTimes) {}

        sendBet(bet, additionalPurchaseType = (_crd && AdditionalPurchaseType === void 0 ? (_reportPossibleCrUseOfAdditionalPurchaseType({
          error: Error()
        }), AdditionalPurchaseType) : AdditionalPurchaseType).None) {
          (_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
            error: Error()
          }), NetworkHandler) : NetworkHandler).instance.send((_crd && NetworkEvent === void 0 ? (_reportPossibleCrUseOfNetworkEvent({
            error: Error()
          }), NetworkEvent) : NetworkEvent).Bet, this.gameNumber, bet, (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
            error: Error()
          }), PlayerInfo) : PlayerInfo).balance, additionalPurchaseType, this.playerToken);
        }

        onReceiveBet(betData) {
          var _this$onReceiveBetCal;

          this.finalBalance = betData.coin; // 下注後得分前的餘額 先計算為balance減掉下注金額，如果還有購買FG等機制要重新計算

          this.balanceAfterSpin = (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
            error: Error()
          }), PlayerInfo) : PlayerInfo).balance - betData.bet;
          (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
            error: Error()
          }), PlayerInfo) : PlayerInfo).balance = this.finalBalance;

          if (this.isOnline) {
            let debugText = `${betData.spinId}`;

            if ((_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
              error: Error()
            }), NetworkHandler) : NetworkHandler).instance.demo !== true) {
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.setBottomText(debugText);
            }
          }

          (_this$onReceiveBetCal = this.onReceiveBetCallback) == null || _this$onReceiveBetCal.call(this, betData);
        }

        onSpinFail(spinId) {
          // 下注失敗時紀錄單號
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setBottomText(spinId);
        }

        checkBalanceEnough() {
          if ((_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
            error: Error()
          }), PlayerInfo) : PlayerInfo).balance < this.betValue) {
            this.showBankruptcyError();
            return false;
          }

          return true;
        }

        showBankruptcyError() {
          (_crd && ErrorHandler === void 0 ? (_reportPossibleCrUseOfErrorHandler({
            error: Error()
          }), ErrorHandler) : ErrorHandler).Instance.TriggerError((_crd && ErrorCode === void 0 ? (_reportPossibleCrUseOfErrorCode({
            error: Error()
          }), ErrorCode) : ErrorCode).Client_BetBankruptcy, true);
        }

        setupBeforeGame() {
          // 繼承之後可以複寫此方法，自定義出現Continue按鈕前的遊戲初始化
          // 這個Promise完成後才會出現Continue按鈕
          return Promise.resolve();
        }

        onTimeScaleChange() {
          // 當遊戲時間縮放改變時，可以在這裡做一些處理
          // 例如更新UI或是其他需要根據時間縮放調整的邏輯
          let items = director.getScene().getComponentsInChildren(_crd && SpineTimeScaleTuner === void 0 ? (_reportPossibleCrUseOfSpineTimeScaleTuner({
            error: Error()
          }), SpineTimeScaleTuner) : SpineTimeScaleTuner);

          for (let item of items) {
            item.tuneAnimationByTimeScale();
          }

          let animationsItems = director.getScene().getComponentsInChildren(_crd && AnimationTimeScaleTuner === void 0 ? (_reportPossibleCrUseOfAnimationTimeScaleTuner({
            error: Error()
          }), AnimationTimeScaleTuner) : AnimationTimeScaleTuner);

          for (let item of animationsItems) {
            item.tuneAnimationByTimeScale();
          }
        }

        onSetMainUIToSpinMode() {
          // 當主UI進入Spin模式時，可以在這裡做一些處理
          // 當遊戲開始時，關閉Timeout計時器
          (_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
            error: Error()
          }), NetworkHandler) : NetworkHandler).instance.setTimeoutTimerFlag(false);
        }

        onSetMainUIToNormalMode() {
          // 當主UI回到Normal模式時，可以在這裡做一些處理
          // 當遊戲結束時，開啟Timeout計時器
          (_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
            error: Error()
          }), NetworkHandler) : NetworkHandler).instance.setTimeoutTimerFlag(true);
        }

        onNewFlashBtnSwitch(mode) {
          if (mode === (_crd && NewFlashModeEnum === void 0 ? (_reportPossibleCrUseOfNewFlashModeEnum({
            error: Error()
          }), NewFlashModeEnum) : NewFlashModeEnum).NewFlash2) {
            (_crd && GameTimeScale === void 0 ? (_reportPossibleCrUseOfGameTimeScale({
              error: Error()
            }), GameTimeScale) : GameTimeScale).timeScale = this.maxSpeedMultiplier;
          } else {
            (_crd && GameTimeScale === void 0 ? (_reportPossibleCrUseOfGameTimeScale({
              error: Error()
            }), GameTimeScale) : GameTimeScale).timeScale = 1;
          }
        }

        get langEnum() {
          return (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
            error: Error()
          }), GameSetting) : GameSetting).gameLang;
        }

        fetchLastPlantData() {
          return new Promise((resolve, reject) => {
            if ((_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
              error: Error()
            }), NetworkHandler) : NetworkHandler).instance.isLogin) {
              let base64Data = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
                error: Error()
              }), Utility) : Utility).uint8ArrayToBase64((_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
                error: Error()
              }), PlayerInfo) : PlayerInfo).lastPlant);
              resolve(base64Data);
            } else {
              (_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
                error: Error()
              }), NetworkHandler) : NetworkHandler).instance.sendGameLoginFetch(this.playerToken, this.gameNumber).then(base64Data => {
                resolve(base64Data);
              });
            }
          });
        }

        onContinueBtnClick() {// 繼承後可以覆寫此方法，實作點擊繼續按鈕後的邏輯
          // 例如Start 頁面按下進入後要發出語音
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playerToken", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "TestPlayer001";
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7b063dce14bbd87045077863b8527768b3d2d8bd.js.map