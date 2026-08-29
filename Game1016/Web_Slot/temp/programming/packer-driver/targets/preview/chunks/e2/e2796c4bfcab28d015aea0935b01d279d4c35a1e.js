System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, instantiate, Label, Node, ScrollView, CenterLayout, BuyFeatureCard, FinalBuyFeatureCard, AudioManager, Utility, Orientation, GenericSound, ScreenAdapter, RotationResize, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _crd, ccclass, property, BuyFeatureInfoUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCenterLayout(extras) {
    _reporterNs.report("CenterLayout", "./CenterLayout", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuyFeatureCard(extras) {
    _reporterNs.report("BuyFeatureCard", "./BuyFeatureCard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuyFeatureCardInfo(extras) {
    _reporterNs.report("BuyFeatureCardInfo", "./BuyFeatureCard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFinalBuyFeatureCard(extras) {
    _reporterNs.report("FinalBuyFeatureCard", "./FinalBuyFeatureCard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/Utils/Audio", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "db://assets/Scripts/Utils/Core", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "db://assets/Scripts/GameScripts/Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericSound(extras) {
    _reporterNs.report("GenericSound", "db://assets/Scripts/GameScripts/Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScreenAdapter(extras) {
    _reporterNs.report("ScreenAdapter", "../../../Utils/Orientation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRotationResize(extras) {
    _reporterNs.report("RotationResize", "../../../Utils/Orientation", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      ScrollView = _cc.ScrollView;
    }, function (_unresolved_2) {
      CenterLayout = _unresolved_2.default;
    }, function (_unresolved_3) {
      BuyFeatureCard = _unresolved_3.BuyFeatureCard;
    }, function (_unresolved_4) {
      FinalBuyFeatureCard = _unresolved_4.FinalBuyFeatureCard;
    }, function (_unresolved_5) {
      AudioManager = _unresolved_5.AudioManager;
    }, function (_unresolved_6) {
      Utility = _unresolved_6.Utility;
    }, function (_unresolved_7) {
      Orientation = _unresolved_7.Orientation;
      GenericSound = _unresolved_7.GenericSound;
    }, function (_unresolved_8) {
      ScreenAdapter = _unresolved_8.ScreenAdapter;
      RotationResize = _unresolved_8.RotationResize;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "35881rxiNlDvJusf66EoIaL", "BuyFeatureInfoUI", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'instantiate', 'Label', 'Node', 'ScrollView']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BuyFeatureInfoUI", BuyFeatureInfoUI = (_dec = ccclass('BuyFeatureInfoUI'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(ScrollView), _dec6 = property(ScrollView), _dec7 = property(_crd && CenterLayout === void 0 ? (_reportPossibleCrUseOfCenterLayout({
        error: Error()
      }), CenterLayout) : CenterLayout), _dec8 = property(_crd && CenterLayout === void 0 ? (_reportPossibleCrUseOfCenterLayout({
        error: Error()
      }), CenterLayout) : CenterLayout), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(_crd && FinalBuyFeatureCard === void 0 ? (_reportPossibleCrUseOfFinalBuyFeatureCard({
        error: Error()
      }), FinalBuyFeatureCard) : FinalBuyFeatureCard), _dec(_class = (_class2 = class BuyFeatureInfoUI extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "titleSpriteNode", _descriptor, this);

          _initializerDefineProperty(this, "betGroupNode", _descriptor2, this);

          // 基本卡片 拿來 instantiate 用
          _initializerDefineProperty(this, "buyFeatureCardNode", _descriptor3, this);

          _initializerDefineProperty(this, "scrollViewLandscape", _descriptor4, this);

          _initializerDefineProperty(this, "scrollViewPortrait", _descriptor5, this);

          _initializerDefineProperty(this, "layoutLandscape", _descriptor6, this);

          _initializerDefineProperty(this, "layoutPortrait", _descriptor7, this);

          _initializerDefineProperty(this, "currentBetLabel", _descriptor8, this);

          _initializerDefineProperty(this, "bgBtn", _descriptor9, this);

          _initializerDefineProperty(this, "plusBtn", _descriptor10, this);

          _initializerDefineProperty(this, "minusBtn", _descriptor11, this);

          _initializerDefineProperty(this, "closeBtn", _descriptor12, this);

          _initializerDefineProperty(this, "basicNode", _descriptor13, this);

          _initializerDefineProperty(this, "finalConfirmNode", _descriptor14, this);

          _initializerDefineProperty(this, "finalBuyFeatureCard", _descriptor15, this);

          this._selectedCardInfo = null;
          this.onChangeBetValueCallback = null;
          this.onFinalBuyFeatureCardConfirmBtnClickCallback = null;
          this.cardList = [];
          this.betValueList = [];
          this.currentBetValue = 0;
        }

        get cardAmount() {
          return this.cardList.length;
        }

        init() {
          // Initialization logic here
          this.getComponent(_crd && RotationResize === void 0 ? (_reportPossibleCrUseOfRotationResize({
            error: Error()
          }), RotationResize) : RotationResize).onRotationResize = this.onRotationResize.bind(this);
          this.scrollViewLandscape.enabled = false;
          this.scrollViewPortrait.enabled = false;
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.closeBtn, this, 'onCloseBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.plusBtn, this, 'onPlusBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.minusBtn, this, 'onMinusBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.bgBtn, this, 'onBGBtnClick');
          this.finalBuyFeatureCard.onBackBtnClickCallback = this.onFinalBuyFeatureCardBackBtnClick.bind(this);
          this.finalBuyFeatureCard.onFinalConfirmBtnClickCallback = this.onFinalBuyFeatureCardConfirmBtnClick.bind(this);
          this.finalBuyFeatureCard.init();
        }

        setCardAmount(amount) {
          this.layoutLandscape.node.destroyAllChildren();
          this.layoutPortrait.node.destroyAllChildren();
          this.cardList = [];

          for (var i = 0; i < amount; i++) {
            var card = this.createBuyFeatureCard();
            card.active = true;
            this.cardList.push(card);
            card.getComponent(_crd && BuyFeatureCard === void 0 ? (_reportPossibleCrUseOfBuyFeatureCard({
              error: Error()
            }), BuyFeatureCard) : BuyFeatureCard).index = i;
            card.getComponent(_crd && BuyFeatureCard === void 0 ? (_reportPossibleCrUseOfBuyFeatureCard({
              error: Error()
            }), BuyFeatureCard) : BuyFeatureCard).onConfirmBtnClickCallback = this.onCardConfirmBtnClick.bind(this);
          }

          this.scrollViewPortrait.verticalScrollBar.node.active = amount > 3;
          this.scrollViewLandscape.horizontalScrollBar.node.active = amount > 4;
          this.scrollViewPortrait.enabled = amount > 3;
          this.scrollViewLandscape.enabled = amount > 4;
          this.onRotationResize((_crd && ScreenAdapter === void 0 ? (_reportPossibleCrUseOfScreenAdapter({
            error: Error()
          }), ScreenAdapter) : ScreenAdapter).UI_Orientation);
        }

        setCardInfo(index, cardInfo) {
          if (index < 0 || index >= this.cardList.length) {
            console.error('Invalid card index');
            return;
          }

          var cardItem = this.cardList[index];
          cardItem.getComponent(_crd && BuyFeatureCard === void 0 ? (_reportPossibleCrUseOfBuyFeatureCard({
            error: Error()
          }), BuyFeatureCard) : BuyFeatureCard).setInfo(index, cardInfo);
        }

        createBuyFeatureCard() {
          var cardItem = instantiate(this.buyFeatureCardNode);
          cardItem.setParent(this.layoutLandscape.node);
          cardItem.setPosition(0, 0);
          cardItem.getComponent(_crd && BuyFeatureCard === void 0 ? (_reportPossibleCrUseOfBuyFeatureCard({
            error: Error()
          }), BuyFeatureCard) : BuyFeatureCard).init();
          return cardItem;
        }

        onRotationResize(orientation) {
          for (var i = 0; i < this.cardList.length; i++) {
            var card = this.cardList[i];
            card.getComponent(_crd && BuyFeatureCard === void 0 ? (_reportPossibleCrUseOfBuyFeatureCard({
              error: Error()
            }), BuyFeatureCard) : BuyFeatureCard).resetByRotate(orientation);
          }

          if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            this.titleSpriteNode.setPosition(0, 295);
            this.betGroupNode.setPosition(0, -290);
            this.scrollViewLandscape.node.active = true;
            this.scrollViewPortrait.node.active = false;

            for (var _i = 0; _i < this.cardList.length; _i++) {
              var _card = this.cardList[_i];

              _card.setParent(this.layoutLandscape.node);

              _card.setSiblingIndex(_i);
            }

            this.layoutLandscape.updateLayout();

            if (this.cardList.length > 4) {
              this.scrollViewLandscape.scrollToLeft(0);
            }
          } else if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Portrait) {
            this.titleSpriteNode.setPosition(0, 553);
            this.betGroupNode.setPosition(0, -442);
            this.scrollViewLandscape.node.active = false;
            this.scrollViewPortrait.node.active = true;

            for (var _i2 = 0; _i2 < this.cardList.length; _i2++) {
              var _card2 = this.cardList[_i2];

              _card2.setParent(this.layoutPortrait.node);

              _card2.setSiblingIndex(_i2);
            }

            this.layoutPortrait.updateLayout();

            if (this.cardList.length > 3) {
              this.scrollViewPortrait.scrollToTop(0);
            }
          }

          this.finalBuyFeatureCard.resetByRotate(orientation);
        }

        setBetValueList(betValueList) {
          this.betValueList = betValueList;
        }

        showUI(currentBetValue) {
          this.node.active = true;
          this.basicNode.active = true;
          this.finalConfirmNode.active = false;
          this.currentBetValue = currentBetValue;
          this.checkPlusMinusBtnStatus();
          this.updateCardBetInfo(currentBetValue);
          this.setCurrentBetLabel(currentBetValue);
          this.onRotationResize((_crd && ScreenAdapter === void 0 ? (_reportPossibleCrUseOfScreenAdapter({
            error: Error()
          }), ScreenAdapter) : ScreenAdapter).UI_Orientation);
        }

        hideUI() {
          this.node.active = false;
        }

        updateCardBetInfo(betValue) {
          for (var i = 0; i < this.cardList.length; i++) {
            var card = this.cardList[i].getComponent(_crd && BuyFeatureCard === void 0 ? (_reportPossibleCrUseOfBuyFeatureCard({
              error: Error()
            }), BuyFeatureCard) : BuyFeatureCard);
            card.setBet(betValue);
          }
        }

        onCloseBtnClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
            error: Error()
          }), GenericSound) : GenericSound).Public_Off);
          this.hideUI();
        }

        onPlusBtnClick() {
          var _this$onChangeBetValu;

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
            error: Error()
          }), GenericSound) : GenericSound).Public_On);
          if (this.betValueList.length === 0) return;
          var currentIndex = this.betValueList.indexOf(this.currentBetValue);
          currentIndex += 1;

          if (currentIndex >= this.betValueList.length) {
            currentIndex = this.betValueList.length - 1;
          }

          this.updateUIByBetValue(currentIndex);
          (_this$onChangeBetValu = this.onChangeBetValueCallback) == null || _this$onChangeBetValu.call(this, currentIndex, this.currentBetValue);
        }

        onMinusBtnClick() {
          var _this$onChangeBetValu2;

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
            error: Error()
          }), GenericSound) : GenericSound).Public_On);
          if (this.betValueList.length === 0) return;
          var currentIndex = this.betValueList.indexOf(this.currentBetValue);
          currentIndex -= 1;

          if (currentIndex < 0) {
            currentIndex = 0;
          }

          this.updateUIByBetValue(currentIndex);
          (_this$onChangeBetValu2 = this.onChangeBetValueCallback) == null || _this$onChangeBetValu2.call(this, currentIndex, this.currentBetValue);
        }

        updateUIByBetValue(betIndex) {
          this.currentBetValue = this.betValueList[betIndex];
          this.updateCardBetInfo(this.currentBetValue);
          this.setCurrentBetLabel(this.currentBetValue);
          this.checkPlusMinusBtnStatus();
        }

        setCurrentBetLabel(betValue) {
          this.currentBetLabel.string = betValue.fixed().numberComma();
        } // 卡片列表卡片按下確認


        onCardConfirmBtnClick(cardIndex, cardInfo) {
          // 不進入最後確認視窗，直接確認

          /*
          this.basicNode.active = false;
          this.finalConfirmNode.active = true;
          this.finalBuyFeatureCard.setInfo(cardIndex, cardInfo);
          this.finalBuyFeatureCard.setBet(this.currentBetValue);
          this._selectedCardInfo = cardInfo;
          */
          // 直接走原本最後視窗確認鍵按下後的流程
          this._selectedCardInfo = cardInfo;
          this.onFinalBuyFeatureCardConfirmBtnClick(cardInfo, cardIndex);
        }

        onFinalBuyFeatureCardBackBtnClick() {
          this.basicNode.active = true;
          this.finalConfirmNode.active = false;
          this._selectedCardInfo = null;
        } // 確認卡片按下購買


        onFinalBuyFeatureCardConfirmBtnClick(cardInfo, cardIndex) {
          var _this$onFinalBuyFeatu;

          if (this._selectedCardInfo === null) {
            console.error('No card selected for purchase');
            return;
          }

          (_this$onFinalBuyFeatu = this.onFinalBuyFeatureCardConfirmBtnClickCallback) == null || _this$onFinalBuyFeatu.call(this, cardInfo, this.currentBetValue, cardIndex);
        }

        checkPlusMinusBtnStatus() {
          var currentIndex = this.betValueList.indexOf(this.currentBetValue);
          this.minusBtn.getComponent(Button).interactable = currentIndex > 0;
          this.plusBtn.getComponent(Button).interactable = currentIndex < this.betValueList.length - 1;
        }

        get selectedCardInfo() {
          return this._selectedCardInfo;
        }

        onBGBtnClick() {
          if (this.finalConfirmNode.active) {
            this.onFinalBuyFeatureCardBackBtnClick();
          } else {
            this.onCloseBtnClick();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titleSpriteNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "betGroupNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "buyFeatureCardNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scrollViewLandscape", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scrollViewPortrait", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "layoutLandscape", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "layoutPortrait", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "currentBetLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bgBtn", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "plusBtn", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "minusBtn", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "closeBtn", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "basicNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "finalConfirmNode", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "finalBuyFeatureCard", [_dec16], {
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
//# sourceMappingURL=e2796c4bfcab28d015aea0935b01d279d4c35a1e.js.map