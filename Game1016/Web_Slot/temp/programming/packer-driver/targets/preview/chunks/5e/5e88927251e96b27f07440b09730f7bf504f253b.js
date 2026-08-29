System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SpriteFrame, Label, Toggle, EditBox, Color, Node, ErrorHandler, UnitTest, ErrorCode, BuyFeatureCardInfo, GenericUIManager, MessageBox, GameSetting, SlotRelayLang, PlayerInfo, Utility, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _crd, ccclass, property, GenericUISceneUnitTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfErrorHandler(extras) {
    _reporterNs.report("ErrorHandler", "db://assets/Scripts/ErrorHandler/ErrorHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUnitTest(extras) {
    _reporterNs.report("UnitTest", "db://assets/Scripts/TestTool/TestableFunction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCode(extras) {
    _reporterNs.report("ErrorCode", "db://assets/WaninPlayer/WaninPlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuyFeatureCardInfo(extras) {
    _reporterNs.report("BuyFeatureCardInfo", "../BuyFeatureCard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUIManager(extras) {
    _reporterNs.report("GenericUIManager", "../GenericUIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageBox(extras) {
    _reporterNs.report("MessageBox", "../MessageBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSetting(extras) {
    _reporterNs.report("GameSetting", "../../../Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotRelayLang(extras) {
    _reporterNs.report("SlotRelayLang", "../../../Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerInfo(extras) {
    _reporterNs.report("PlayerInfo", "../../../Networks", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "db://assets/Scripts/Utils/Core", _context.meta, extras);
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
      SpriteFrame = _cc.SpriteFrame;
      Label = _cc.Label;
      Toggle = _cc.Toggle;
      EditBox = _cc.EditBox;
      Color = _cc.Color;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      ErrorHandler = _unresolved_2.ErrorHandler;
    }, function (_unresolved_3) {
      UnitTest = _unresolved_3.UnitTest;
    }, function (_unresolved_4) {
      ErrorCode = _unresolved_4.ErrorCode;
    }, function (_unresolved_5) {
      BuyFeatureCardInfo = _unresolved_5.BuyFeatureCardInfo;
    }, function (_unresolved_6) {
      GenericUIManager = _unresolved_6.GenericUIManager;
    }, function (_unresolved_7) {
      MessageBox = _unresolved_7.MessageBox;
    }, function (_unresolved_8) {
      GameSetting = _unresolved_8.GameSetting;
      SlotRelayLang = _unresolved_8.SlotRelayLang;
    }, function (_unresolved_9) {
      PlayerInfo = _unresolved_9.PlayerInfo;
    }, function (_unresolved_10) {
      Utility = _unresolved_10.Utility;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e388fiBqIBPMort5rJggxiE", "GenericUISceneUnitTest", undefined);

      __checkObsolete__(['_decorator', 'Component', 'SpriteFrame', 'Label', 'Toggle', 'EditBox', 'Color', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GenericUISceneUnitTest", GenericUISceneUnitTest = (_dec = ccclass('GenericUISceneUnitTest'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(SpriteFrame), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Toggle), _dec9 = property(EditBox), _dec10 = property(EditBox), _dec11 = property(EditBox), _dec12 = property(EditBox), _dec13 = property(EditBox), _dec14 = property(EditBox), _dec15 = property(EditBox), _dec16 = property(EditBox), _dec17 = property(SpriteFrame), _dec18 = property(SpriteFrame), _dec19 = property(SpriteFrame), _dec20 = property(SpriteFrame), _dec21 = property(SpriteFrame), _dec22 = property(SpriteFrame), _dec23 = property(SpriteFrame), _dec24 = property(SpriteFrame), _dec25 = (_crd && UnitTest === void 0 ? (_reportPossibleCrUseOfUnitTest({
        error: Error()
      }), UnitTest) : UnitTest)(), _dec26 = (_crd && UnitTest === void 0 ? (_reportPossibleCrUseOfUnitTest({
        error: Error()
      }), UnitTest) : UnitTest)(), _dec27 = (_crd && UnitTest === void 0 ? (_reportPossibleCrUseOfUnitTest({
        error: Error()
      }), UnitTest) : UnitTest)(), _dec28 = (_crd && UnitTest === void 0 ? (_reportPossibleCrUseOfUnitTest({
        error: Error()
      }), UnitTest) : UnitTest)(), _dec29 = (_crd && UnitTest === void 0 ? (_reportPossibleCrUseOfUnitTest({
        error: Error()
      }), UnitTest) : UnitTest)(), _dec30 = (_crd && UnitTest === void 0 ? (_reportPossibleCrUseOfUnitTest({
        error: Error()
      }), UnitTest) : UnitTest)(), _dec31 = (_crd && UnitTest === void 0 ? (_reportPossibleCrUseOfUnitTest({
        error: Error()
      }), UnitTest) : UnitTest)(), _dec(_class = (_class2 = class GenericUISceneUnitTest extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "button", _descriptor, this);

          _initializerDefineProperty(this, "spriteNode", _descriptor2, this);

          _initializerDefineProperty(this, "featureSpriteFrame", _descriptor3, this);

          _initializerDefineProperty(this, "canvasNode", _descriptor4, this);

          _initializerDefineProperty(this, "testGroupNode", _descriptor5, this);

          _initializerDefineProperty(this, "testGroupActiveButtonLabel", _descriptor6, this);

          _initializerDefineProperty(this, "twoTurboToggle", _descriptor7, this);

          _initializerDefineProperty(this, "winScoreEditBox", _descriptor8, this);

          _initializerDefineProperty(this, "bottomTextEditBox", _descriptor9, this);

          _initializerDefineProperty(this, "updateBalanceEditBox", _descriptor10, this);

          _initializerDefineProperty(this, "minBetValueEditBox", _descriptor11, this);

          _initializerDefineProperty(this, "maxBetValueEditBox", _descriptor12, this);

          _initializerDefineProperty(this, "cardTitleEditBox", _descriptor13, this);

          _initializerDefineProperty(this, "cardContentEditBox", _descriptor14, this);

          _initializerDefineProperty(this, "cardMultipleEditBox", _descriptor15, this);

          _initializerDefineProperty(this, "normalSpriteBG", _descriptor16, this);

          _initializerDefineProperty(this, "pressedSpriteBG", _descriptor17, this);

          _initializerDefineProperty(this, "hoverSpriteBG", _descriptor18, this);

          _initializerDefineProperty(this, "disabledSpriteBG", _descriptor19, this);

          _initializerDefineProperty(this, "normalSpriteCrown", _descriptor20, this);

          _initializerDefineProperty(this, "pressedSpriteCrown", _descriptor21, this);

          _initializerDefineProperty(this, "hoverSpriteCrown", _descriptor22, this);

          _initializerDefineProperty(this, "disabledSpriteCrown", _descriptor23, this);

          this.spinIndex = 0;
          this.betValue = -1;
          this.cardInfoList = [];
        }

        start() {
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.init((_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
            error: Error()
          }), SlotRelayLang) : SlotRelayLang).tw, this.canvasNode); // 為了測試，直接把GameSetting裡面的下注金額列表設定進去，一般要透過PlayerInfo來設定

          this.betValue = (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
            error: Error()
          }), GameSetting) : GameSetting).platformBetValueList[0];
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setBetSelectInfos((_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
            error: Error()
          }), GameSetting) : GameSetting).platformBetValueList);
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setBetValue((_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
            error: Error()
          }), GameSetting) : GameSetting).platformBetValueList[0]);
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.onBetSelectBtnClickCallback = this.onGenericUIBetSelectBtnClick.bind(this);
          (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
            error: Error()
          }), PlayerInfo) : PlayerInfo).updateBetValueList((_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
            error: Error()
          }), GameSetting) : GameSetting).platformBetValueList);
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setExtraBetTipText("GenericUI/ExtraBet_info");
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setBuyBonusIconBGInfo(153, new Color(1, 255, 1)); // 60% opacity

          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.onAutoSpinStartClickCallback = this.onGenericUIAutoSpinStartClick.bind(this);
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.onSpinBtnClickCallback = this.onGenericUISpinClick.bind(this);
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setBuyBonusOpen();
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setExtraBetOpen(1.2);

          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.onBuyFeatureModeChangeCallback = (mode, multiply, cardIndex) => {
            console.log("Buy Feature Mode Changed: " + mode + ", Multiply: " + multiply + ", Card Index: " + cardIndex);
          }; // GenericUIManager.instance.setBuyBonusBtnCustomSprite(
          //     this.normalSpriteBG, this.pressedSpriteBG, this.hoverSpriteBG, this.disabledSpriteBG,
          //     this.normalSpriteCrown, this.pressedSpriteCrown, this.hoverSpriteCrown, this.disabledSpriteCrown,
          //     "BuyFG_btn_txt"
          // );


          this.testGroupNode.active = false;
          (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
            error: Error()
          }), MessageBox) : MessageBox).instance.init();
        }

        setTestGroupActive() {
          this.testGroupNode.active = !this.testGroupNode.active;

          if (this.testGroupNode.active) {
            this.testGroupActiveButtonLabel.string = "關閉測試按鈕";
          } else {
            this.testGroupActiveButtonLabel.string = "開啟測試按鈕";
          }
        }

        setTwoTurboActive(isOpen) {
          if (typeof isOpen !== "boolean") {
            isOpen = "";
          }

          var isTwoLevelTurboOpen;

          if (isNaN(isOpen) || isOpen === "") {
            isTwoLevelTurboOpen = this.twoTurboToggle.isChecked;
          } else {
            isTwoLevelTurboOpen = isOpen;
          }

          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setTwoLevelTurboMode(isTwoLevelTurboOpen);
        }

        showBottomTextWinScore(input) {
          var score;

          if (typeof input === "number") {
            score = input;
          } else {
            score = Number(this.winScoreEditBox.string);
          }

          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.showBottomTextWinScore(score);
        }

        showBottomText(input) {
          var text;

          if (typeof input === "string") {
            var trimmed = input.trim();

            if (trimmed === "") {
              text = this.bottomTextEditBox.string.trim();
            } else {
              text = trimmed;
            }
          } else {
            text = this.bottomTextEditBox.string.trim();
          }

          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setBottomText(text);
        }

        setBalance(input) {
          var balance;

          if (typeof input === "number") {
            balance = input;
          } else {
            balance = Number(this.updateBalanceEditBox.string);
          }

          (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
            error: Error()
          }), PlayerInfo) : PlayerInfo).balance = balance;
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setBalance((_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
            error: Error()
          }), PlayerInfo) : PlayerInfo).balance);
        }

        setBuyFeatureCardInfo(title, content, multiply) {
          var _multiply;

          var isButtonEvent = v => v && typeof v === "object" && "type" in v;

          if (isButtonEvent(title)) title = undefined;
          if (isButtonEvent(content)) content = undefined;
          if (isButtonEvent(multiply)) multiply = undefined;
          var finalTitle = typeof title === "string" ? title.trim() : this.cardTitleEditBox.string.trim();
          var finalContent = typeof content === "string" ? content.trim() : this.cardContentEditBox.string.trim();
          var multipleStr = String(typeof multiply === "number" ? multiply : (_multiply = multiply) != null ? _multiply : this.cardMultipleEditBox.string).trim();
          var finalMultiply = Number(multipleStr);

          if (!finalTitle) {
            console.warn("⚠️ 請輸入卡片標題！");
            return;
          }

          if (!finalContent) {
            console.warn("⚠️ 請輸入卡片內容！");
            return;
          }

          if (finalMultiply <= 0) {
            console.warn("⚠️ 倍率必須大於 0！");
            return;
          }

          var cardInfo = new (_crd && BuyFeatureCardInfo === void 0 ? (_reportPossibleCrUseOfBuyFeatureCardInfo({
            error: Error()
          }), BuyFeatureCardInfo) : BuyFeatureCardInfo)();
          cardInfo.title = finalTitle;
          cardInfo.content = finalContent;
          cardInfo.icon = this.featureSpriteFrame;
          cardInfo.multiply = finalMultiply;
          this.cardInfoList.push(cardInfo);
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setBuyFeatureCardInfo(this.cardInfoList);
        }

        removeBuyFeatureCardInfo() {
          this.cardInfoList = [];
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setBuyFeatureCardInfo(this.cardInfoList);
        }

        setBetSelectInfos(minInput, maxInput) {
          var _minInput, _maxInput;

          var isButtonEvent = v => v && typeof v === "object" && "type" in v;

          if (isButtonEvent(minInput)) minInput = undefined;
          if (isButtonEvent(maxInput)) maxInput = undefined;
          var minStr = String((_minInput = minInput) != null ? _minInput : this.minBetValueEditBox.string).trim();
          var maxStr = String((_maxInput = maxInput) != null ? _maxInput : this.maxBetValueEditBox.string).trim();

          if (!minStr || !maxStr) {
            console.warn("⚠️ 請輸入最小值與最大值！");
            return;
          }

          var min = Number(minStr);
          var max = Number(maxStr);

          if (min > max) {
            console.warn("⚠️ 最小值不可大於最大值！");
            return;
          }

          if (max >= (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
            error: Error()
          }), GameSetting) : GameSetting).platformBetValueList[0]) {
            var filtered = this.updateBetValueList(min, max, (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
              error: Error()
            }), GameSetting) : GameSetting).platformBetValueList);
            (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.setBetSelectUIBetValue(filtered[0]);
            (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.setBetSelectInfos(filtered);
          } else {
            console.warn("⚠️ 輸入的最大值小於押注額列表的最小值！");
          }
        }

        onGenericUIAutoSpinStartClick(autoTimes) {
          this.autoSpin();
        }

        autoSpin() {
          if ((_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.checkAutoStatus()) {
            this.spinIndex++;
            this.spin();

            if (this.checkBalanceEnough()) {
              (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
                error: Error()
              }), Utility) : Utility).waitPromise(1).then(() => {
                this.autoSpin();
              });
            }
          } else {
            this.spinIndex = 0;
            (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.setMainUIToNormalMode();
          }
        }

        onGenericUISpinClick() {
          this.spin();
        }

        spin() {
          if (!this.checkBalanceEnough()) {
            if ((_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.isAutoMode) {
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.stopAutoMode();
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.setMainUIToNormalMode();
            }

            return;
          }

          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setMainUIStopBtnEnabled();
          console.log("spin: " + this.spinIndex);
        }

        checkBalanceEnough() {
          if ((_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
            error: Error()
          }), PlayerInfo) : PlayerInfo).balance < this.betValue) {
            (_crd && ErrorHandler === void 0 ? (_reportPossibleCrUseOfErrorHandler({
              error: Error()
            }), ErrorHandler) : ErrorHandler).Instance.TriggerError((_crd && ErrorCode === void 0 ? (_reportPossibleCrUseOfErrorCode({
              error: Error()
            }), ErrorCode) : ErrorCode).Client_BetBankruptcy, true);
            return false;
          }

          return true;
        }

        onGenericUIBetSelectBtnClick(bet) {
          this.betValue = bet;
        }

        updateBetValueList(min, max, totalBetValueList) {
          var betValueList = [];

          for (var value of totalBetValueList) {
            if (value >= min && value <= max) {
              betValueList.push(value);
            }
          }

          return betValueList;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spriteNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "featureSpriteFrame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "canvasNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "testGroupNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "testGroupActiveButtonLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "twoTurboToggle", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "winScoreEditBox", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bottomTextEditBox", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "updateBalanceEditBox", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "minBetValueEditBox", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "maxBetValueEditBox", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "cardTitleEditBox", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "cardContentEditBox", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "cardMultipleEditBox", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "normalSpriteBG", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "pressedSpriteBG", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "hoverSpriteBG", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "disabledSpriteBG", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "normalSpriteCrown", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "pressedSpriteCrown", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "hoverSpriteCrown", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "disabledSpriteCrown", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2.prototype, "setTwoTurboActive", [_dec25], Object.getOwnPropertyDescriptor(_class2.prototype, "setTwoTurboActive"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "showBottomTextWinScore", [_dec26], Object.getOwnPropertyDescriptor(_class2.prototype, "showBottomTextWinScore"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "showBottomText", [_dec27], Object.getOwnPropertyDescriptor(_class2.prototype, "showBottomText"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "setBalance", [_dec28], Object.getOwnPropertyDescriptor(_class2.prototype, "setBalance"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "setBuyFeatureCardInfo", [_dec29], Object.getOwnPropertyDescriptor(_class2.prototype, "setBuyFeatureCardInfo"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "removeBuyFeatureCardInfo", [_dec30], Object.getOwnPropertyDescriptor(_class2.prototype, "removeBuyFeatureCardInfo"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "setBetSelectInfos", [_dec31], Object.getOwnPropertyDescriptor(_class2.prototype, "setBetSelectInfos"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5e88927251e96b27f07440b09730f7bf504f253b.js.map