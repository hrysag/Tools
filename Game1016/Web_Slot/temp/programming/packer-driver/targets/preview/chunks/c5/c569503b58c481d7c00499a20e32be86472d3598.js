System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Label, Node, Sprite, Utility, Orientation, ScreenAdapter, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, FinalBuyFeatureCard;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBuyFeatureCardInfo(extras) {
    _reporterNs.report("BuyFeatureCardInfo", "./BuyFeatureCard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../../../Utils/Core", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "../../Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScreenAdapter(extras) {
    _reporterNs.report("ScreenAdapter", "../../../Utils/Orientation/ScreenAdapter", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      Utility = _unresolved_2.Utility;
    }, function (_unresolved_3) {
      Orientation = _unresolved_3.Orientation;
    }, function (_unresolved_4) {
      ScreenAdapter = _unresolved_4.ScreenAdapter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "01f59m9fEhOx7KBb+RwwVKn", "FinalBuyFeatureCard", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'Node', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FinalBuyFeatureCard", FinalBuyFeatureCard = (_dec = ccclass('FinalBuyFeatureCard'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Sprite), _dec9 = property(Sprite), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec(_class = (_class2 = class FinalBuyFeatureCard extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "cardNodeLandscape", _descriptor, this);

          _initializerDefineProperty(this, "cardNodePortrait", _descriptor2, this);

          _initializerDefineProperty(this, "titleLandscape", _descriptor3, this);

          _initializerDefineProperty(this, "titlePortrait", _descriptor4, this);

          _initializerDefineProperty(this, "contentLandscape", _descriptor5, this);

          _initializerDefineProperty(this, "contentPortrait", _descriptor6, this);

          _initializerDefineProperty(this, "bonusIconSpriteLandscape", _descriptor7, this);

          _initializerDefineProperty(this, "bonusIconSpritePortrait", _descriptor8, this);

          _initializerDefineProperty(this, "betLabelLandscape", _descriptor9, this);

          _initializerDefineProperty(this, "betLabelPortrait", _descriptor10, this);

          _initializerDefineProperty(this, "finalConfirmBtnLandscape", _descriptor11, this);

          _initializerDefineProperty(this, "finalConfirmBtnPortrait", _descriptor12, this);

          _initializerDefineProperty(this, "backBtnLandscape", _descriptor13, this);

          _initializerDefineProperty(this, "backBtnPortrait", _descriptor14, this);

          this.index = -1;
          // 卡片的索引
          this.multiply = 1;
          // Bet 的乘數
          this.cardInfo = null;
          this.onFinalConfirmBtnClickCallback = null;
          this.onBackBtnClickCallback = null;
        }

        onEnable() {
          this.resetBtnStatus();
        }

        resetBtnStatus() {
          this.finalConfirmBtnLandscape.getComponents(Button).forEach(btn => btn.interactable = false);
          this.finalConfirmBtnPortrait.getComponents(Button).forEach(btn => btn.interactable = false);
          this.backBtnLandscape.getComponents(Button).forEach(btn => btn.interactable = false);
          this.backBtnPortrait.getComponents(Button).forEach(btn => btn.interactable = false);
          this.finalConfirmBtnLandscape.getComponents(Button).forEach(btn => btn.interactable = true);
          this.finalConfirmBtnPortrait.getComponents(Button).forEach(btn => btn.interactable = true);
          this.backBtnLandscape.getComponents(Button).forEach(btn => btn.interactable = true);
          this.backBtnPortrait.getComponents(Button).forEach(btn => btn.interactable = true);
        }

        init() {
          this.resetByRotate((_crd && ScreenAdapter === void 0 ? (_reportPossibleCrUseOfScreenAdapter({
            error: Error()
          }), ScreenAdapter) : ScreenAdapter).UI_Orientation);
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.finalConfirmBtnLandscape, this, 'onFinalConfirmBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.finalConfirmBtnPortrait, this, 'onFinalConfirmBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.backBtnLandscape, this, 'onBackBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.backBtnPortrait, this, 'onBackBtnClick');
        }

        setTitle(title) {
          this.titleLandscape.string = title;
          this.titlePortrait.string = title;
        }

        setContent(content) {
          this.contentLandscape.string = content;
          this.contentPortrait.string = content;
        }

        setBonusIcon(icon) {
          this.bonusIconSpriteLandscape.spriteFrame = icon;
          this.bonusIconSpritePortrait.spriteFrame = icon;
        }

        setBet(bet) {
          var finalBet = bet * this.multiply;
          this.betLabelLandscape.string = finalBet.fixed().numberComma();
          this.betLabelPortrait.string = finalBet.fixed().numberComma();
        }

        resetByRotate(orientation) {
          if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            this.cardNodeLandscape.active = true;
            this.cardNodePortrait.active = false;
          } else {
            this.cardNodeLandscape.active = false;
            this.cardNodePortrait.active = true;
          }
        }

        setInfo(index, cardInfo) {
          this.index = index;
          this.setTitle(cardInfo.title);
          this.setContent(cardInfo.content);
          this.setBonusIcon(cardInfo.icon);
          this.multiply = cardInfo.multiply;
          this.cardInfo = cardInfo;
        }

        onFinalConfirmBtnClick() {
          var _this$onFinalConfirmB;

          (_this$onFinalConfirmB = this.onFinalConfirmBtnClickCallback) == null || _this$onFinalConfirmB.call(this, this.cardInfo, this.index);
        }

        onBackBtnClick() {
          var _this$onBackBtnClickC;

          (_this$onBackBtnClickC = this.onBackBtnClickCallback) == null || _this$onBackBtnClickC.call(this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardNodeLandscape", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cardNodePortrait", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "titleLandscape", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "titlePortrait", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "contentLandscape", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "contentPortrait", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bonusIconSpriteLandscape", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bonusIconSpritePortrait", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "betLabelLandscape", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "betLabelPortrait", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "finalConfirmBtnLandscape", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "finalConfirmBtnPortrait", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "backBtnLandscape", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "backBtnPortrait", [_dec15], {
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
//# sourceMappingURL=c569503b58c481d7c00499a20e32be86472d3598.js.map