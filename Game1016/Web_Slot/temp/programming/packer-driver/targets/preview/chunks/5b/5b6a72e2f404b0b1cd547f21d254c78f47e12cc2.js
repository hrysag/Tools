System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, math, view, Debug, MainUI, NewFlashModeEnum, MenuUI, BetSelectUI, AutoSpinSelectUI, BottomBarUI, GenericUIRes, InfoType, InfoUI, AUTO_INFINITY_NUMBER, MainUIBtnState, AudioManager, BuyFeatureMode, GenericSound, Orientation, SlotRelayLang, GameStatus, Localization, HistoryUI, FeatureSettingUI, BuyFeatureInfoUI, RotationContentResize, ScreenAdapter, AdaptWindowSize, PlayerInfo, AutoSpinAreaUI, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _class3, _crd, ccclass, property, GenericUIManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../../../Utils/Core", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeySpriteFramePair(extras) {
    _reporterNs.report("KeySpriteFramePair", "../../../Utils/Core", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainUI(extras) {
    _reporterNs.report("MainUI", "./MainUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNewFlashModeEnum(extras) {
    _reporterNs.report("NewFlashModeEnum", "./MainUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMenuUI(extras) {
    _reporterNs.report("MenuUI", "./MenuUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetSelectUI(extras) {
    _reporterNs.report("BetSelectUI", "./BetSelectUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoSpinSelectUI(extras) {
    _reporterNs.report("AutoSpinSelectUI", "./AutoSpinSelectUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBottomBarUI(extras) {
    _reporterNs.report("BottomBarUI", "./BottomBarUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUIRes(extras) {
    _reporterNs.report("GenericUIRes", "./GenericUIRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfoType(extras) {
    _reporterNs.report("InfoType", "./InfoUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfoUI(extras) {
    _reporterNs.report("InfoUI", "./InfoUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAUTO_INFINITY_NUMBER(extras) {
    _reporterNs.report("AUTO_INFINITY_NUMBER", "./GenericUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainUIBtnState(extras) {
    _reporterNs.report("MainUIBtnState", "./GenericUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../../Utils/Audio", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuyFeatureMode(extras) {
    _reporterNs.report("BuyFeatureMode", "../../Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericSound(extras) {
    _reporterNs.report("GenericSound", "../../Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "../../Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotRelayLang(extras) {
    _reporterNs.report("SlotRelayLang", "../../Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../../Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalization(extras) {
    _reporterNs.report("Localization", "../../Localization", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHistoryUI(extras) {
    _reporterNs.report("HistoryUI", "./HistoryUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFeatureSettingUI(extras) {
    _reporterNs.report("FeatureSettingUI", "./FeatureSettingUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuyFeatureInfoUI(extras) {
    _reporterNs.report("BuyFeatureInfoUI", "./BuyFeatureInfoUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuyFeatureCardInfo(extras) {
    _reporterNs.report("BuyFeatureCardInfo", "./BuyFeatureCard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRotationContentResize(extras) {
    _reporterNs.report("RotationContentResize", "../../../Utils/Orientation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScreenAdapter(extras) {
    _reporterNs.report("ScreenAdapter", "../../../Utils/Orientation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdaptWindowSize(extras) {
    _reporterNs.report("AdaptWindowSize", "../../../Utils/Adaptive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerInfo(extras) {
    _reporterNs.report("PlayerInfo", "../../Networks", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoSpinAreaUI(extras) {
    _reporterNs.report("AutoSpinAreaUI", "../Scripts/NewAutoSpin/AutoSpinAreaUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConditionLine(extras) {
    _reporterNs.report("ConditionLine", "./NewAutoSpin", _context.meta, extras);
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
      math = _cc.math;
      view = _cc.view;
    }, function (_unresolved_2) {
      Debug = _unresolved_2.Debug;
    }, function (_unresolved_3) {
      MainUI = _unresolved_3.MainUI;
      NewFlashModeEnum = _unresolved_3.NewFlashModeEnum;
    }, function (_unresolved_4) {
      MenuUI = _unresolved_4.MenuUI;
    }, function (_unresolved_5) {
      BetSelectUI = _unresolved_5.BetSelectUI;
    }, function (_unresolved_6) {
      AutoSpinSelectUI = _unresolved_6.AutoSpinSelectUI;
    }, function (_unresolved_7) {
      BottomBarUI = _unresolved_7.BottomBarUI;
    }, function (_unresolved_8) {
      GenericUIRes = _unresolved_8.GenericUIRes;
    }, function (_unresolved_9) {
      InfoType = _unresolved_9.InfoType;
      InfoUI = _unresolved_9.InfoUI;
    }, function (_unresolved_10) {
      AUTO_INFINITY_NUMBER = _unresolved_10.AUTO_INFINITY_NUMBER;
      MainUIBtnState = _unresolved_10.MainUIBtnState;
    }, function (_unresolved_11) {
      AudioManager = _unresolved_11.AudioManager;
    }, function (_unresolved_12) {
      BuyFeatureMode = _unresolved_12.BuyFeatureMode;
      GenericSound = _unresolved_12.GenericSound;
      Orientation = _unresolved_12.Orientation;
      SlotRelayLang = _unresolved_12.SlotRelayLang;
      GameStatus = _unresolved_12.GameStatus;
    }, function (_unresolved_13) {
      Localization = _unresolved_13.Localization;
    }, function (_unresolved_14) {
      HistoryUI = _unresolved_14.HistoryUI;
    }, function (_unresolved_15) {
      FeatureSettingUI = _unresolved_15.FeatureSettingUI;
    }, function (_unresolved_16) {
      BuyFeatureInfoUI = _unresolved_16.BuyFeatureInfoUI;
    }, function (_unresolved_17) {
      RotationContentResize = _unresolved_17.RotationContentResize;
      ScreenAdapter = _unresolved_17.ScreenAdapter;
    }, function (_unresolved_18) {
      AdaptWindowSize = _unresolved_18.AdaptWindowSize;
    }, function (_unresolved_19) {
      PlayerInfo = _unresolved_19.PlayerInfo;
    }, function (_unresolved_20) {
      AutoSpinAreaUI = _unresolved_20.AutoSpinAreaUI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8ca16F5rLJMGatjn4qDQSQh", "GenericUIManager", undefined);

      __checkObsolete__(['_decorator', 'Canvas', 'Color', 'Component', 'director', 'math', 'Node', 'Prefab', 'SpriteFrame', 'view', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GenericUIManager", GenericUIManager = (_dec = ccclass('GenericUIManager'), _dec2 = property(_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
        error: Error()
      }), GenericUIRes) : GenericUIRes), _dec3 = property(_crd && MainUI === void 0 ? (_reportPossibleCrUseOfMainUI({
        error: Error()
      }), MainUI) : MainUI), _dec4 = property(_crd && MenuUI === void 0 ? (_reportPossibleCrUseOfMenuUI({
        error: Error()
      }), MenuUI) : MenuUI), _dec5 = property(_crd && BetSelectUI === void 0 ? (_reportPossibleCrUseOfBetSelectUI({
        error: Error()
      }), BetSelectUI) : BetSelectUI), _dec6 = property(_crd && AutoSpinSelectUI === void 0 ? (_reportPossibleCrUseOfAutoSpinSelectUI({
        error: Error()
      }), AutoSpinSelectUI) : AutoSpinSelectUI), _dec7 = property(_crd && AutoSpinAreaUI === void 0 ? (_reportPossibleCrUseOfAutoSpinAreaUI({
        error: Error()
      }), AutoSpinAreaUI) : AutoSpinAreaUI), _dec8 = property(_crd && BottomBarUI === void 0 ? (_reportPossibleCrUseOfBottomBarUI({
        error: Error()
      }), BottomBarUI) : BottomBarUI), _dec9 = property(_crd && InfoUI === void 0 ? (_reportPossibleCrUseOfInfoUI({
        error: Error()
      }), InfoUI) : InfoUI), _dec10 = property(_crd && HistoryUI === void 0 ? (_reportPossibleCrUseOfHistoryUI({
        error: Error()
      }), HistoryUI) : HistoryUI), _dec11 = property(_crd && FeatureSettingUI === void 0 ? (_reportPossibleCrUseOfFeatureSettingUI({
        error: Error()
      }), FeatureSettingUI) : FeatureSettingUI), _dec12 = property(_crd && BuyFeatureInfoUI === void 0 ? (_reportPossibleCrUseOfBuyFeatureInfoUI({
        error: Error()
      }), BuyFeatureInfoUI) : BuyFeatureInfoUI), _dec(_class = (_class2 = (_class3 = class GenericUIManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "genericUIRes", _descriptor, this);

          _initializerDefineProperty(this, "mainUI", _descriptor2, this);

          _initializerDefineProperty(this, "menuUI", _descriptor3, this);

          _initializerDefineProperty(this, "betSelectUI", _descriptor4, this);

          _initializerDefineProperty(this, "autoSpinSelectUI", _descriptor5, this);

          _initializerDefineProperty(this, "autoSpinAreaUI", _descriptor6, this);

          _initializerDefineProperty(this, "bottomBarUI", _descriptor7, this);

          _initializerDefineProperty(this, "infoUI", _descriptor8, this);

          _initializerDefineProperty(this, "historyUI", _descriptor9, this);

          _initializerDefineProperty(this, "featureSettingUI", _descriptor10, this);

          _initializerDefineProperty(this, "buyFeatureInfoUI", _descriptor11, this);

          this.currentTurboMode = (_crd && NewFlashModeEnum === void 0 ? (_reportPossibleCrUseOfNewFlashModeEnum({
            error: Error()
          }), NewFlashModeEnum) : NewFlashModeEnum).None;
          this.autoSpinUI = null;
          this.onSpinBtnClickCallback = null;
          this.onAutoSpinStartClickCallback = null;
          this.onBetSelectBtnClickCallback = null;
          this.onStopBtnClickCallback = null;
          this.onMenuUIShowCallback = null;
          this.onSetMainUIToSpinModeCallback = null;
          this.onSetMainUIToNormalModeCallback = null;
          this.onNewFlashBtnSwitch = null;
          this.onFeatureSettingUIBuyBonusBtnClickCallback = null;
          this.onBuyFeatureModeChangeCallback = null;
          this.newCheckConditionValidCallback = null;
          this.onShowAutoUICallback = null;
          this._isAutoMode = false;
          this._resizeMaximumSize = new math.Size(0, 0);
          // 剩餘FG的次數，非FG時為-1，無限次數為9999
          this.autoTimes = -1;
          this.langKey = (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
            error: Error()
          }), SlotRelayLang) : SlotRelayLang).tw;
        }

        /**
         * 是否自動模式
         * @returns 是否為自動模式
         */
        get isAutoMode() {
          return this._isAutoMode;
        }
        /**
         * 設定是否為自動模式
         * @param value 是或否
         */


        set isAutoMode(value) {
          this._isAutoMode = value;
        }

        /**
         * 獲取實例
         * @returns GenericUIManager
         */
        static get instance() {
          if (this._instance === null) {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).LogWarning("GenericUIManager _instance 為空");
          }

          return this._instance;
        }
        /**
         * 載入
         */


        onLoad() {
          GenericUIManager._instance = this.node.getComponent(GenericUIManager);
        }
        /**
         *  初始化  
         * @param langKey 語系
         */


        init(langKey, gameCanvasNode, autoSpinAreasPrefab) {
          if (autoSpinAreasPrefab === void 0) {
            autoSpinAreasPrefab = [];
          }

          this.autoSpinUI = this.autoSpinAreaUI ? this.autoSpinAreaUI : this.autoSpinSelectUI;
          this.langKey = langKey;
          this.genericUIRes.init(); // singleton的第一次初始化

          this.mainUI.init();
          this.menuUI.init();
          this.betSelectUI.init();
          this.autoSpinUI.init(autoSpinAreasPrefab);
          this.bottomBarUI.init();
          this.infoUI.init();
          this.historyUI.init();
          this.featureSettingUI.init();
          this.buyFeatureInfoUI.init();
          this.bottomBarUI.addBottomRichTextSprite(this.genericUIRes.bottomTextSpriteFrameMaps);
          this.mainUI.onMenuBtnClickCallback = this.onMainUIMenuBtnClick.bind(this);
          this.mainUI.onBetBtnClickCallback = this.onMainUIBetBtnClick.bind(this);
          this.mainUI.onAutoBtnClickCallback = this.onMainUIAutoBtnClick.bind(this);
          this.mainUI.onSpinBtnClickCallback = this.onMainUIonSpinBtnClick.bind(this);
          this.mainUI.onStopAutoBtnClickCallback = this.onMainUIStopAutoBtnClick.bind(this);
          this.mainUI.onMainBGClickCallback = this.onMainBGClick.bind(this);
          this.mainUI.onSpecialBtnClickCallback = this.onMainUISpecialBtnClick.bind(this);
          this.mainUI.onStopBtnClickCallback = this.onMainUIStopBtnClick.bind(this);
          this.mainUI.onNewFlashBtnSwitchCallback = this.onMainUINewFlashBtnSwitch.bind(this);
          this.menuUI.onRuleBtnClickCallback = this.onMenuUIRuleBtnClick.bind(this);
          this.menuUI.onPayTableBtnClickCallback = this.onMenuUIPayTableBtnClick.bind(this);
          this.menuUI.onHistoryBtnClickCallback = this.onMenuUIHistoryBtnClick.bind(this);
          this.menuUI.onMenuUIHideCallback = this.onMenuUIHide.bind(this);
          this.autoSpinUI.onStartBtnClickCallback = this.onAutoSpinStartClick.bind(this);
          this.autoSpinUI.checkConditionValid = this.checkConditionValid.bind(this);
          this.betSelectUI.onBetSelectBtnClickCallback = this.onBetSelectUIBetSelectBtnClick.bind(this);
          this.betSelectUI.onUIActiveChange = this.onBetSelectUIActiveChange.bind(this);
          this.autoSpinUI.onUIActiveChange = this.onAutoSpinUIActiveChange.bind(this);
          this.menuUI.onBGBtnClickCallback = this.onMainBGClick.bind(this);
          this.infoUI.onBGBtnClickCallback = this.onMainBGClick.bind(this);
          this.historyUI.onBGBtnClickCallback = this.onMainBGClick.bind(this);
          this.betSelectUI.onBGBtnClickCallback = this.onMainBGClick.bind(this);
          this.autoSpinUI.onBGBtnClickCallback = this.onMainBGClick.bind(this);
          this.featureSettingUI.onBuyBonusBtnClickCallback = this.onFeatureSettingUIBuyBonusBtnClick.bind(this);
          this.buyFeatureInfoUI.onChangeBetValueCallback = this.onBuyFeatureInfoUIChangeBetValue.bind(this);
          this.buyFeatureInfoUI.onFinalBuyFeatureCardConfirmBtnClickCallback = this.onBuyFeatureInfoUIFinalBuyFeatureCardConfirmBtnClick.bind(this);
          this.featureSettingUI.onExtraBetToggleChangeCallback = this.onFeatureSettingUIExtraBetToggleChange.bind(this);
          this.featureSettingUI.onBuyBonusIconCloseClickCallback = this.onFeatureSettingUIBuyBonusIconCloseClick.bind(this);
          this.setMainUIKeyboardLock(true);
        }
        /**
         * 點擊主畫面背景
         */


        onMainBGClick() {
          if (this.autoSpinUI.node.active || this.betSelectUI.node.active || this.menuUI.node.active || this.infoUI.node.active || this.historyUI.node.active) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
              error: Error()
            }), GenericSound) : GenericSound).Public_Off);
          }

          this.hideAllUI();
        }
        /**
         * 點擊主畫面選單
         */


        onMainUIMenuBtnClick() {
          var _this$onMenuUIShowCal;

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
            error: Error()
          }), GenericSound) : GenericSound).Public_On);
          this.hideAllUI();
          this.menuUI.showUI();
          this.mainUI.setMenuBtnActive(false);
          (_this$onMenuUIShowCal = this.onMenuUIShowCallback) == null || _this$onMenuUIShowCal.call(this);
        }
        /**
         * 隱藏所有UI
         */


        hideAllUI() {
          this.autoSpinUI.hideUI();
          this.betSelectUI.hideUI();
          this.infoUI.hideUI();
          this.historyUI.hideUI();
          this.menuUI.hideUI();
          this.featureSettingUI.hideExtraBetTip();
        }
        /**
         * 點擊主畫面下注鈕
         */


        onMainUIBetBtnClick() {
          if (this.betSelectUI.node.active === false) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
              error: Error()
            }), GenericSound) : GenericSound).Public_On);
            this.hideAllUI();
            this.betSelectUI.showUI();
          } else {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
              error: Error()
            }), GenericSound) : GenericSound).Public_Off);
            this.betSelectUI.hideUI();
          }
        }
        /**
         * 點擊主畫面自動旋轉
         */


        onMainUIAutoBtnClick() {
          if (this.autoSpinUI.node.active === false) {
            var _this$onShowAutoUICal;

            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
              error: Error()
            }), GenericSound) : GenericSound).Public_On);
            this.hideAllUI();
            (_this$onShowAutoUICal = this.onShowAutoUICallback) == null || _this$onShowAutoUICal.call(this);
            this.autoSpinUI.showUI();
          } else {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
              error: Error()
            }), GenericSound) : GenericSound).Public_Off);
            this.autoSpinUI.hideUI();
          }
        }
        /**
         * 點擊主畫面 Spin 按鈕
         */


        onMainUIonSpinBtnClick() {
          var _this$onSpinBtnClickC;

          this.menuUI.hideUI();
          this.hideUIToSpinMode();
          (_this$onSpinBtnClickC = this.onSpinBtnClickCallback) == null || _this$onSpinBtnClickC.call(this);
        }
        /**
         * 點擊開始自動 Spin
         * @param autoTimes 
         */


        onAutoSpinStartClick(autoTimes) {
          var _this$onAutoSpinStart;

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
            error: Error()
          }), GenericSound) : GenericSound).Public_On);
          this.autoTimes = autoTimes;
          this.hideUIToSpinMode();
          this.isAutoMode = true;
          this.mainUI.openAutoMode();
          (_this$onAutoSpinStart = this.onAutoSpinStartClickCallback) == null || _this$onAutoSpinStart.call(this, autoTimes);
        }

        checkConditionValid(conditionLine) {
          var _this$newCheckConditi, _this$newCheckConditi2;

          return (_this$newCheckConditi = (_this$newCheckConditi2 = this.newCheckConditionValidCallback) == null ? void 0 : _this$newCheckConditi2.call(this, conditionLine)) != null ? _this$newCheckConditi : false;
        }
        /**
         * 點擊主畫面停止自動旋轉
         */


        onMainUIStopAutoBtnClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
            error: Error()
          }), GenericSound) : GenericSound).Public_Off);
          this.stopAutoMode();
        }
        /**
         * 停止自動旋轉
         */


        stopAutoMode() {
          if (this.isAutoMode) {
            this.mainUI.closeAutoMode();
            this.autoTimes = -1;
            this.isAutoMode = false;
          }
        }

        disableAutoSpinConditions(conditionAreaIndex, shouldCloseConditionIndexes) {
          this.autoSpinUI.disableConditionLines(conditionAreaIndex, shouldCloseConditionIndexes);
        }
        /**
         * 更新Auto次數並檢查是否還可以Auto
         * @param context 額外檢查條件的參數
         * @returns 下一局是否還可以Auto
         */


        checkAutoStatus(context) {
          if (this.autoTimes !== (_crd && AUTO_INFINITY_NUMBER === void 0 ? (_reportPossibleCrUseOfAUTO_INFINITY_NUMBER({
            error: Error()
          }), AUTO_INFINITY_NUMBER) : AUTO_INFINITY_NUMBER)) {
            this.autoTimes--;
          }

          this.mainUI.setAutoCntLabel(this.autoTimes);
          var hasAutoNext = this.hasAutoNext(context);

          if (!hasAutoNext) {
            this.stopAutoMode();
          }

          return hasAutoNext;
        }
        /**
         * 檢查自動狀態
         * @param context 額外檢查條件的參數
         * @returns 下一局是否還可以Auto
         */


        hasAutoNext(context) {
          // 滿足任一停止自動 spin 條件
          var isMeetsAnyStopCondition = context ? this.autoSpinUI.isMeetsAnyStopCondition(context) : false; // 下一局是否還可以Auto

          var hasAutoNext = this.autoTimes >= 0 && !isMeetsAnyStopCondition;
          return hasAutoNext;
        }
        /**
         * 點擊下注金額選單裡的金額按鈕
         * @param betValue 
         */


        onBetSelectUIBetSelectBtnClick(betValue) {
          var _this$onBetSelectBtnC;

          this.setBetValue(betValue);
          (_this$onBetSelectBtnC = this.onBetSelectBtnClickCallback) == null || _this$onBetSelectBtnC.call(this, betValue);

          if ((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).isBuyBonusOn) {
            this.mainUI.setBuyFeatureBet(betValue * this.buyFeatureInfoUI.selectedCardInfo.multiply);
          } else if ((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).isExtraBetOn) {
            this.mainUI.setBuyFeatureBet(betValue * this.featureSettingUI.extraBetMultiply);
          }
        }

        onMenuUIRuleBtnClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
            error: Error()
          }), GenericSound) : GenericSound).Public_On);
          this.infoUI.setTitle((_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
            error: Error()
          }), Localization) : Localization).instance.t("GenericUI.GAME_RULES"));
          this.infoUI.showUI((_crd && InfoType === void 0 ? (_reportPossibleCrUseOfInfoType({
            error: Error()
          }), InfoType) : InfoType).Rule);
          this.menuUI.hideUI();
        }

        onMenuUIPayTableBtnClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
            error: Error()
          }), GenericSound) : GenericSound).Public_On);
          this.infoUI.setTitle((_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
            error: Error()
          }), Localization) : Localization).instance.t("GenericUI.PAYTABLE"));
          this.infoUI.showUI((_crd && InfoType === void 0 ? (_reportPossibleCrUseOfInfoType({
            error: Error()
          }), InfoType) : InfoType).PayTable);
          this.menuUI.hideUI();
        }

        onMenuUIHistoryBtnClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
            error: Error()
          }), GenericSound) : GenericSound).Public_On);
          this.menuUI.hideUI();
          this.historyUI.showUI();
        }

        onMenuUIHide() {
          this.mainUI.setMenuBtnActive(true);
        }

        presetHistoryUrl(url) {
          if (this.getHistoryBtnActive()) {
            this.historyUI.setHistoryUrl(url);
          }
        }

        showBottomTextWinScore(score) {
          this.bottomBarUI.showWinScore(score);
        }

        setBetValue(score) {
          this.bottomBarUI.setTotalBet(score);
        }

        setMainUIToSpinMode() {
          this.mainUI.setToSpinMode();
          this.menuUI.setHistoryBtnEnable(false);
          this.featureSettingUI.setToSpinMode();
        }

        setMainUIToNormalMode() {
          this.mainUI.setToIdleMode();
          this.menuUI.setHistoryBtnEnable(true);
          this.featureSettingUI.setToNormalMode();
        }
        /** 
         * @deprecated 請改用 !isStopBtnEnabled ，這個方法將在未來版本移除。
         */


        get isStopClicked() {
          return !this.mainUI.isStopBtnEnabled;
        }

        get isStopBtnEnabled() {
          return this.mainUI.isStopBtnEnabled;
        }

        get isTurboOn() {
          return this.mainUI.isTurboOn();
        }

        hideUIToSpinMode() {
          this.autoSpinUI.hideUI();
          this.betSelectUI.hideUI();
          this.infoUI.hideUI();
          this.historyUI.hideUI();
        }

        setScreenBtnRoot(screenBtn) {
          this.mainUI.setScreenBtnRoot(screenBtn);
        }

        setUrl(urlPayTable, urlRule) {
          this.infoUI.setURL((_crd && InfoType === void 0 ? (_reportPossibleCrUseOfInfoType({
            error: Error()
          }), InfoType) : InfoType).Rule, urlRule);
          this.infoUI.setURL((_crd && InfoType === void 0 ? (_reportPossibleCrUseOfInfoType({
            error: Error()
          }), InfoType) : InfoType).PayTable, urlPayTable);
        }

        showBottomTextFirst() {
          this.bottomBarUI.showBottomTextFirst();
        }

        showBottomTextGaming() {
          this.bottomBarUI.showBottomTextGaming();
        }

        showBottomTextIdle() {
          this.bottomBarUI.showBottomTextIdle();
        }

        showBottomTextEmpty() {
          this.bottomBarUI.showBottomTextEmpty();
        }

        showBottomTextStartSpin() {
          if (!this.isAutoMode) {
            this.showBottomTextGaming();
          } else {
            this.showBottomTextEmpty();
          }
        }

        addBottomRichTextSprite(spriteFrameMap) {
          this.bottomBarUI.addBottomRichTextSprite(spriteFrameMap);
        }

        setBalance(balance) {
          this.bottomBarUI.setBalance(balance);
        }
        /** 
         * @deprecated 請改用 setMainUIStopBtnEnabled，這個方法將在未來版本移除。
         */


        resetMainUIStopBtn() {
          this.mainUI.setStopBtnEnabled();
        }

        setMainUIStopBtnEnabled() {
          this.mainUI.setStopBtnEnabled();
        }

        addGamingShowTexts(text) {
          this.bottomBarUI.addGamingShowTexts(text);
        }

        setBetSelectInfos(betValues) {
          this.betSelectUI.setInfos(betValues);
          this.buyFeatureInfoUI.setBetValueList(betValues);
        }

        onMainUISpecialBtnClick() {}

        onMainUIStopBtnClick() {
          var _this$onStopBtnClickC;

          (_this$onStopBtnClickC = this.onStopBtnClickCallback) == null || _this$onStopBtnClickC.call(this);
        }

        onMainUINewFlashBtnSwitch(mode) {
          var _this$onNewFlashBtnSw;

          this.currentTurboMode = mode;
          (_this$onNewFlashBtnSw = this.onNewFlashBtnSwitch) == null || _this$onNewFlashBtnSw.call(this, mode);
        }

        getCurrentTurboMode() {
          return this.currentTurboMode;
        }

        setBottomText(text) {
          this.bottomBarUI.setDebugText(text);
        }

        setVersion(version) {
          this.bottomBarUI.setVersionText(version);
        }

        setLogoText(logo) {
          this.bottomBarUI.setLogoText(logo);
        }

        onBetSelectUIActiveChange(active) {
          if (active) {
            this.mainUI.setBetBtnState((_crd && MainUIBtnState === void 0 ? (_reportPossibleCrUseOfMainUIBtnState({
              error: Error()
            }), MainUIBtnState) : MainUIBtnState).UIOpen);
          } else {
            this.mainUI.setBetBtnState((_crd && MainUIBtnState === void 0 ? (_reportPossibleCrUseOfMainUIBtnState({
              error: Error()
            }), MainUIBtnState) : MainUIBtnState).Normal);
          }
        }

        onAutoSpinUIActiveChange(active) {
          if (active) {
            this.mainUI.setAutoBtnState((_crd && MainUIBtnState === void 0 ? (_reportPossibleCrUseOfMainUIBtnState({
              error: Error()
            }), MainUIBtnState) : MainUIBtnState).UIOpen);

            if (this.autoSpinAreaUI) {
              this.mainUI.setAutoBtnForNewPanel();
            }
          } else {
            this.mainUI.setAutoBtnState((_crd && MainUIBtnState === void 0 ? (_reportPossibleCrUseOfMainUIBtnState({
              error: Error()
            }), MainUIBtnState) : MainUIBtnState).Normal);
          }
        }

        setHistoryBtnActive(b) {
          this.menuUI.setHistoryBtnActive(b);
        }

        getHistoryBtnActive() {
          return this.menuUI.getHistoryBtnActive();
        }

        setMainBtnInteractable(b) {
          this.mainUI.setBetSpinAutoBtnInteractable(b);
        }
        /*
        public setHistoryBtnEnable(b: boolean) {
            this.menuUI.setHistoryBtnEnable(b);
        }
        */


        forceClickMainUIStopBtn() {
          if (!this.isStopClicked) {
            this.mainUI.forceClickStopBtn();
          }
        }

        setMainUIRightBtnVisible(b) {
          this.mainUI.setLandscapeRightBtnGroupVisible(b);
        } // 設定為true時，鎖上空白鍵 會觸發Spin與Stop的功能


        setMainUIKeyboardLock(b) {
          this.mainUI.setKeyboardLock(b);
        } // 由於MainBG要能穿透點擊下方遊戲的UI 故將 preventSwallow 設定為 true
        // 會造成MainBG與其重疊的UI MouseEnter與MouseLeave事件互相快速交錯被觸發
        // 導致Hover效果無法正常顯示 ，故如果是全螢幕的遊戲被開啟時，有時要將MainBG關閉

        /*
        public setMainBGActive(b: boolean) {
            this.mainUI.setMainBGActive(b);
        }
        */
        // 獨立設定StopBtn的Active


        setMainUIStopBtnActive(b) {
          this.mainUI.setStopBtnActive(b);
        } // public setMainUIStopBtnInteractable(b: boolean) {
        //     this.mainUI.setStopBtnInteractable(b);
        // }


        setMainUISpinBtnActive(b) {
          this.mainUI.setSpinBtnActive(b);
        }

        setMainUIRightDownBtnActive(b) {
          this.mainUI.setRightDownBtnActive(b);
        }

        setMainUIAutoBtnActive(b) {
          this.mainUI.setAutoBtnActive(b);
        }

        setMainUISpinBtnInteractable(b) {
          this.mainUI.setSpinBtnInteractable(b);
        }

        show() {
          this.node.setScale(1, 1);
        }

        hide() {
          this.node.setScale(0, 0);
        }

        setBetUITitleLocalizationKey(key) {
          this.betSelectUI.setBetTitleLocalizationKey(key);
        }

        setTwoLevelTurboMode(b) {
          this.mainUI.setTwoLevelTurboMode(b);
        }

        onFeatureSettingUIBuyBonusBtnClick() {
          var _this$onFeatureSettin;

          this.hideAllUI();
          this.buyFeatureInfoUI.showUI(this.betSelectUI.getSelectedBetValue());
          (_this$onFeatureSettin = this.onFeatureSettingUIBuyBonusBtnClickCallback) == null || _this$onFeatureSettin.call(this);
        }

        onBuyFeatureInfoUIChangeBetValue(betIndex, betValue) {
          this.betSelectUI.setSelectedBtn(betIndex); // 在BuyFeatureInfoUI中選擇下注金額後，是同點選注額改變

          this.onBetSelectUIBetSelectBtnClick(betValue);
        }

        setBetSelectUIBetValue(betValue) {
          var betIndex = (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
            error: Error()
          }), PlayerInfo) : PlayerInfo).betValueList.indexOf(betValue);
          this.betSelectUI.setSelectedBtn(betIndex);
          this.setBetValue(betValue);
        } // BuyFeatureCard的確認按鈕點擊事件


        onBuyFeatureInfoUIFinalBuyFeatureCardConfirmBtnClick(cardInfo, betValue, cardIndex) {
          var _this$onBuyFeatureMod;

          this.buyFeatureInfoUI.hideUI();
          this.featureSettingUI.setBuyBonusOn(true, cardInfo.icon);
          this.mainUI.setBuyFeatureLabelActive(true);
          this.mainUI.setBuyFeatureBet(betValue * cardInfo.multiply);
          (_this$onBuyFeatureMod = this.onBuyFeatureModeChangeCallback) == null || _this$onBuyFeatureMod.call(this, (_crd && BuyFeatureMode === void 0 ? (_reportPossibleCrUseOfBuyFeatureMode({
            error: Error()
          }), BuyFeatureMode) : BuyFeatureMode).BuyBonus, cardInfo.multiply, cardIndex);
        } //  ExtraBetToggle Switch變更事件


        onFeatureSettingUIExtraBetToggleChange(isOn) {
          this.hideAllUI();
          this.mainUI.setBuyFeatureLabelActive(isOn);
          var betValue = this.betSelectUI.getSelectedBetValue();

          if (isOn) {
            var _this$onBuyFeatureMod2;

            this.mainUI.setBuyFeatureBet(betValue * this.featureSettingUI.extraBetMultiply);
            (_this$onBuyFeatureMod2 = this.onBuyFeatureModeChangeCallback) == null || _this$onBuyFeatureMod2.call(this, (_crd && BuyFeatureMode === void 0 ? (_reportPossibleCrUseOfBuyFeatureMode({
              error: Error()
            }), BuyFeatureMode) : BuyFeatureMode).ExtraBet, this.featureSettingUI.extraBetMultiply, null);
            this.featureSettingUI.showExtraBetTip();
          } else {
            var _this$onBuyFeatureMod3;

            (_this$onBuyFeatureMod3 = this.onBuyFeatureModeChangeCallback) == null || _this$onBuyFeatureMod3.call(this, (_crd && BuyFeatureMode === void 0 ? (_reportPossibleCrUseOfBuyFeatureMode({
              error: Error()
            }), BuyFeatureMode) : BuyFeatureMode).None, 1, null);
          }
        } // BuyBonusIcon關閉按鈕點擊事件


        onFeatureSettingUIBuyBonusIconCloseClick() {
          var _this$onBuyFeatureMod4;

          this.mainUI.setBuyFeatureLabelActive(false);
          (_this$onBuyFeatureMod4 = this.onBuyFeatureModeChangeCallback) == null || _this$onBuyFeatureMod4.call(this, (_crd && BuyFeatureMode === void 0 ? (_reportPossibleCrUseOfBuyFeatureMode({
            error: Error()
          }), BuyFeatureMode) : BuyFeatureMode).None, 1, null);
        } // 設定BuyBonos卡片資訊


        setBuyFeatureCardInfo(cardInfoList) {
          this.buyFeatureInfoUI.setCardAmount(cardInfoList.length);

          for (var i = 0; i < cardInfoList.length; i++) {
            this.buyFeatureInfoUI.setCardInfo(i, cardInfoList[i]);
          }
        }

        setBuyBonusOpen() {
          (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).isBuyBonusOpen = true;
          this.featureSettingUI.setBuyBonusOpen();
        }

        setExtraBetOpen(multiply) {
          (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).isExtraBetOpen = true;
          this.featureSettingUI.setExtraBetOpen(multiply);
        }

        setFeatureSettingUIIconsActive(b) {
          this.featureSettingUI.setAllIconsActive(b);
        }

        setAutoResize(isOn) {
          if (isOn) {
            var rotationContentResize = this.getComponent(_crd && RotationContentResize === void 0 ? (_reportPossibleCrUseOfRotationContentResize({
              error: Error()
            }), RotationContentResize) : RotationContentResize);

            if (rotationContentResize != null) {
              rotationContentResize.destroy();
            }

            var adaptWindowSize = this.node.getComponent(_crd && AdaptWindowSize === void 0 ? (_reportPossibleCrUseOfAdaptWindowSize({
              error: Error()
            }), AdaptWindowSize) : AdaptWindowSize);

            if (adaptWindowSize === null) {
              adaptWindowSize = this.node.addComponent(_crd && AdaptWindowSize === void 0 ? (_reportPossibleCrUseOfAdaptWindowSize({
                error: Error()
              }), AdaptWindowSize) : AdaptWindowSize);
            }

            adaptWindowSize.maxSize = this._resizeMaximumSize;
            adaptWindowSize.onWindowResize((_crd && ScreenAdapter === void 0 ? (_reportPossibleCrUseOfScreenAdapter({
              error: Error()
            }), ScreenAdapter) : ScreenAdapter).UI_Orientation);
          } else {
            var _adaptWindowSize = this.getComponent(_crd && AdaptWindowSize === void 0 ? (_reportPossibleCrUseOfAdaptWindowSize({
              error: Error()
            }), AdaptWindowSize) : AdaptWindowSize);

            if (_adaptWindowSize != null) {
              _adaptWindowSize.destroy();
            }

            var _rotationContentResize = this.node.getComponent(_crd && RotationContentResize === void 0 ? (_reportPossibleCrUseOfRotationContentResize({
              error: Error()
            }), RotationContentResize) : RotationContentResize);

            if (_rotationContentResize === null) {
              _rotationContentResize = this.node.addComponent(_crd && RotationContentResize === void 0 ? (_reportPossibleCrUseOfRotationContentResize({
                error: Error()
              }), RotationContentResize) : RotationContentResize);
            }

            var size = view.getDesignResolutionSize();
            _rotationContentResize.landscapeContent = size;
            _rotationContentResize.portraitContent = new math.Size(size.height, size.width);

            _rotationContentResize.onRotationResize((_crd && ScreenAdapter === void 0 ? (_reportPossibleCrUseOfScreenAdapter({
              error: Error()
            }), ScreenAdapter) : ScreenAdapter).UI_Orientation);
          }
        }

        setAutoResizeMaximumSize(width, height) {
          this._resizeMaximumSize.width = width;
          this._resizeMaximumSize.height = height;
          var adaptWindowSize = this.getComponent(_crd && AdaptWindowSize === void 0 ? (_reportPossibleCrUseOfAdaptWindowSize({
            error: Error()
          }), AdaptWindowSize) : AdaptWindowSize);

          if (adaptWindowSize != null) {
            adaptWindowSize.maxSize = this._resizeMaximumSize;
            adaptWindowSize.onWindowResize((_crd && ScreenAdapter === void 0 ? (_reportPossibleCrUseOfScreenAdapter({
              error: Error()
            }), ScreenAdapter) : ScreenAdapter).UI_Orientation);
          }
        }

        setBuyBonusIconBGInfo(opacity, color) {
          this.featureSettingUI.setBuyBonusIconBGInfo(opacity, color);
        }

        setBuyBonusBtnCustomSprite(normalSpriteBG, pressedSpriteBG, hoverSpriteBG, disabledSpriteBG, normalSpriteCrown, pressedSpriteCrown, hoverSpriteCrown, disabledSpriteCrown, textPath) {
          this.featureSettingUI.setBuyBonusBtnCustomSprite(normalSpriteBG, pressedSpriteBG, hoverSpriteBG, disabledSpriteBG, normalSpriteCrown, pressedSpriteCrown, hoverSpriteCrown, disabledSpriteCrown, textPath);
        }

        getFeatureUIWidget(mode, orientation) {
          if (mode === (_crd && BuyFeatureMode === void 0 ? (_reportPossibleCrUseOfBuyFeatureMode({
            error: Error()
          }), BuyFeatureMode) : BuyFeatureMode).ExtraBet) {
            if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
              error: Error()
            }), Orientation) : Orientation).Landscape) {
              return this.featureSettingUI.extraBetLandscapeWidget;
            } else {
              return this.featureSettingUI.extraBetPortraitWidget;
            }
          } else {
            if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
              error: Error()
            }), Orientation) : Orientation).Landscape) {
              return this.featureSettingUI.buyBonusLandscapeWidget;
            } else {
              return this.featureSettingUI.buyBonusPortraitWidget;
            }
          }
        }
        /** 
         * @deprecated 請改用 setExtraBetTipText，這個方法將在未來版本移除。
         */


        updateExtraBetTipSpriteFrame(spritePath) {// 已捨棄
        }

        setExtraBetTipText(text) {
          this.featureSettingUI.setExtraBetTipText(text);
        }

        getAutoSpinAreasCustomData() {
          return this.autoSpinUI.getAreasCustomData();
        }

      }, _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "genericUIRes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mainUI", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "menuUI", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "betSelectUI", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "autoSpinSelectUI", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "autoSpinAreaUI", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bottomBarUI", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "infoUI", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "historyUI", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "featureSettingUI", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "buyFeatureInfoUI", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5b6a72e2f404b0b1cd547f21d254c78f47e12cc2.js.map