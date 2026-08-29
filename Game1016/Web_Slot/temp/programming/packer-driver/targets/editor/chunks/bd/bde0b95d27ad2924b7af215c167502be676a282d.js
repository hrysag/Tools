System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Label, Node, Sprite, Toggle, UIOpacity, UITransform, Widget, AudioManager, Utility, GenericSound, GameStatus, LocalizationButton, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _crd, ccclass, property, FeatureSettingUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/Utils/Audio", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "db://assets/Scripts/Utils/Core", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericSound(extras) {
    _reporterNs.report("GenericSound", "db://assets/Scripts/GameScripts/Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "db://assets/Scripts/GameScripts/Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalizationButton(extras) {
    _reporterNs.report("LocalizationButton", "db://assets/Scripts/GameScripts/Localization", _context.meta, extras);
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
      Toggle = _cc.Toggle;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }, function (_unresolved_3) {
      Utility = _unresolved_3.Utility;
    }, function (_unresolved_4) {
      GenericSound = _unresolved_4.GenericSound;
      GameStatus = _unresolved_4.GameStatus;
    }, function (_unresolved_5) {
      LocalizationButton = _unresolved_5.LocalizationButton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d723etqqntLA4pVFOvQFB9y", "FeatureSettingUI", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'Component', 'EventTouch', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'UIOpacity', 'UITransform', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FeatureSettingUI", FeatureSettingUI = (_dec = ccclass('FeatureSettingUI'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(UIOpacity), _dec6 = property(Node), _dec7 = property(Sprite), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(UITransform), _dec11 = property(Label), _dec12 = property(Node), _dec13 = property(Widget), _dec14 = property(Widget), _dec15 = property(Widget), _dec16 = property(Widget), _dec(_class = (_class2 = class FeatureSettingUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "rootNode", _descriptor, this);

          _initializerDefineProperty(this, "buyBonusBtn", _descriptor2, this);

          _initializerDefineProperty(this, "buyBonusIcon", _descriptor3, this);

          _initializerDefineProperty(this, "buyBonusIconBGOpacity", _descriptor4, this);

          _initializerDefineProperty(this, "buyBonusIconCloseBtn", _descriptor5, this);

          _initializerDefineProperty(this, "buyBonusIconSprite", _descriptor6, this);

          _initializerDefineProperty(this, "extraBetToggle", _descriptor7, this);

          _initializerDefineProperty(this, "extraBetTipNode", _descriptor8, this);

          _initializerDefineProperty(this, "extraBetTipBG", _descriptor9, this);

          _initializerDefineProperty(this, "extraBetTipLabel", _descriptor10, this);

          _initializerDefineProperty(this, "extraBetTipBGBtnNode", _descriptor11, this);

          _initializerDefineProperty(this, "extraBetLandscapeWidget", _descriptor12, this);

          _initializerDefineProperty(this, "extraBetPortraitWidget", _descriptor13, this);

          _initializerDefineProperty(this, "buyBonusLandscapeWidget", _descriptor14, this);

          _initializerDefineProperty(this, "buyBonusPortraitWidget", _descriptor15, this);

          this.isShowTipFirstTime = true;
          this._extraBetMultiply = 1;
          this.onBuyBonusBtnClickCallback = null;
          this.onExtraBetToggleChangeCallback = null;
          this.onBuyBonusIconCloseClickCallback = null;
          this.disableOpacity = 153;
        }

        // 60% opacity
        init() {
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.buyBonusBtn, this, 'onBuyBonusBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.buyBonusIconCloseBtn, this, 'onBuyBonusIconCloseClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToToggle(this.extraBetToggle, this, 'onExtraBetToggleChange');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.extraBetTipBGBtnNode, this, 'onTipBGClick');
          this.extraBetToggle.on(Node.EventType.MOUSE_ENTER, event => {
            event.preventSwallow = true;
            this.showExtraBetTip();
          }, this, true);
          this.setExtraBetTipText("");
        }

        onBuyBonusBtnClick() {
          var _this$onBuyBonusBtnCl;

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
            error: Error()
          }), GenericSound) : GenericSound).Public_On);
          (_this$onBuyBonusBtnCl = this.onBuyBonusBtnClickCallback) == null || _this$onBuyBonusBtnCl.call(this);
        }

        onBuyBonusIconCloseClick() {
          var _this$onBuyBonusIconC;

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
            error: Error()
          }), GenericSound) : GenericSound).Public_Off);
          this.setBuyBonusOn(false, null);
          (_this$onBuyBonusIconC = this.onBuyBonusIconCloseClickCallback) == null || _this$onBuyBonusIconC.call(this);
        }

        onExtraBetToggleChange(toggle) {
          var _this$onExtraBetToggl;

          let isOn = toggle.isChecked;

          if (isOn) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
              error: Error()
            }), GenericSound) : GenericSound).Public_On);
            this.showExtraBetTip();
          } else {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
              error: Error()
            }), GenericSound) : GenericSound).Public_Off);
          }

          (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).isExtraBetOn = isOn;

          if ((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).isBuyBonusOpen) {
            this.setBuyBonusBtnInteractable(!isOn);
          }

          (_this$onExtraBetToggl = this.onExtraBetToggleChangeCallback) == null || _this$onExtraBetToggl.call(this, isOn);
        }

        setBuyBonusBtnActive(isActive) {
          this.buyBonusBtn.active = isActive;
        }

        setExtraBetToggleActive(isActive) {
          this.extraBetToggle.active = isActive;
        }

        setBuyBonusIconActive(isActive) {
          this.buyBonusIcon.active = isActive;
        }

        setBuyBonusBtnInteractable(b) {
          this.buyBonusBtn.getComponents(Button).forEach(btn => {
            btn.interactable = b;
          });
          let uiOpacity = this.buyBonusBtn.getComponent(UIOpacity);

          if (b) {
            uiOpacity.opacity = 255;
          } else {
            uiOpacity.opacity = this.disableOpacity;
          }
        }

        setExtraBetToggleInteractable(b) {
          this.extraBetToggle.getComponent(Toggle).interactable = b;
          let uiOpacity = this.extraBetToggle.getComponent(UIOpacity);

          if (b) {
            uiOpacity.opacity = 255;
            this.extraBetToggle.getComponent(Sprite).enabled = true;
          } else {
            uiOpacity.opacity = this.disableOpacity;

            if ((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).isExtraBetOn) {
              this.extraBetToggle.getComponent(Sprite).enabled = false;
            }
          }
        }

        setBuyBonusIconInteractable(b) {
          let uiOpacity = this.buyBonusIcon.getComponent(UIOpacity);
          this.buyBonusIconCloseBtn.active = b;

          if (b) {
            uiOpacity.opacity = 255;
          } else {
            uiOpacity.opacity = this.disableOpacity;
          }
        }

        setBuyBonusIconSpriteFrame(spriteFrame) {
          this.buyBonusIconSprite.spriteFrame = spriteFrame;
        } // 開啟購買特色的功能


        setBuyBonusOpen() {
          this.buyBonusBtn.active = true;
        }

        setExtraBetOpen(multiply) {
          this.setExtraBetToggleActive(true);
          this._extraBetMultiply = multiply;
        }

        setBuyBonusOn(isOn, iconSpriteFrame) {
          (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).isBuyBonusOn = isOn;
          this.setBuyBonusIconSpriteFrame(iconSpriteFrame);
          this.setBuyBonusIconActive(isOn);
          this.buyBonusIconCloseBtn.active = isOn;
          this.setBuyBonusBtnActive(!isOn);

          if ((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).isExtraBetOpen) {
            this.setExtraBetToggleActive(!isOn);
          }
        }

        get extraBetMultiply() {
          return this._extraBetMultiply;
        }

        showExtraBetTip() {
          if (!this.extraBetToggle.getComponent(Toggle).interactable) {
            return;
          }

          this.extraBetTipNode.active = true;
          this.unscheduleAllCallbacks();
          this.scheduleOnce(() => {
            this.extraBetTipNode.active = false;
          }, 2); // 顯示2秒後自動隱藏

          if (this.isShowTipFirstTime) {
            this.isShowTipFirstTime = false;
            this.extraBetTipNode.getComponent(UIOpacity).opacity = 0;
            this.scheduleOnce(() => {
              this.extraBetTipNode.getComponent(UIOpacity).opacity = 255;
              let labelHeight = this.extraBetTipLabel.getComponent(UITransform).height;
              this.extraBetTipBG.height = 15 + labelHeight;
            }, 0);
          }
        }

        hideExtraBetTip() {
          this.unscheduleAllCallbacks();
          this.extraBetTipNode.active = false;
        }

        setToSpinMode() {
          if ((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).isBuyBonusOn && !(_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).isExtraBetOn) {
            // 購買特色開啟
            this.setBuyBonusIconInteractable(false);
          } else if (!(_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).isBuyBonusOn && (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).isExtraBetOn) {
            //額外下注開啟
            this.setExtraBetToggleInteractable(false);
          } else if (!(_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).isBuyBonusOn && !(_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).isExtraBetOn) {
            // 兩者皆未開啟
            this.setBuyBonusBtnInteractable(false);
            this.setExtraBetToggleInteractable(false);
          } else {
            console.error(`出現未知狀態 isBuyBonusOn: ${(_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).isBuyBonusOn}, isExtraBetOn: ${(_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).isExtraBetOn}`);
          }
        }

        setToNormalMode() {
          if ((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).isBuyBonusOn && !(_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).isExtraBetOn) {
            // 購買特色開啟
            this.setBuyBonusIconInteractable(true);
          } else if (!(_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).isBuyBonusOn && (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).isExtraBetOn) {
            //額外下注開啟
            this.setExtraBetToggleInteractable(true);
          } else if (!(_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).isBuyBonusOn && !(_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).isExtraBetOn) {
            // 兩者皆未開啟
            this.setBuyBonusBtnInteractable(true);
            this.setExtraBetToggleInteractable(true);
          } else {
            console.error(`出現未知狀態 isBuyBonusOn: ${(_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).isBuyBonusOn}, isExtraBetOn: ${(_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).isExtraBetOn}`);
          }
        }

        setAllIconsActive(active) {
          this.rootNode.active = active;
        }

        onTipBGClick() {
          this.hideExtraBetTip();
        }

        setBuyBonusIconBGInfo(opacity, color) {
          this.buyBonusIconBGOpacity.opacity = opacity;
          this.buyBonusIconBGOpacity.getComponent(Sprite).color = color;
        }

        setBuyBonusBtnCustomSprite(normalSpriteBG, pressedSpriteBG, hoverSpriteBG, disabledSpriteBG, normalSpriteCrown, pressedSpriteCrown, hoverSpriteCrown, disabledSpriteCrown, textPath) {
          let buttonComponents = this.buyBonusBtn.getComponents(Button);
          let buttonBG = buttonComponents[1];
          let buttonCrown = buttonComponents[2];
          buttonBG.normalSprite = normalSpriteBG;
          buttonBG.pressedSprite = pressedSpriteBG;
          buttonBG.hoverSprite = hoverSpriteBG;
          buttonBG.disabledSprite = disabledSpriteBG;
          buttonCrown.normalSprite = normalSpriteCrown;
          buttonCrown.pressedSprite = pressedSpriteCrown;
          buttonCrown.hoverSprite = hoverSpriteCrown;
          buttonCrown.disabledSprite = disabledSpriteCrown;
          buttonBG.target.getComponent(Sprite).spriteFrame = normalSpriteBG;
          buttonCrown.target.getComponent(Sprite).spriteFrame = normalSpriteCrown;
          let textLocalization = this.buyBonusBtn.getComponent(_crd && LocalizationButton === void 0 ? (_reportPossibleCrUseOfLocalizationButton({
            error: Error()
          }), LocalizationButton) : LocalizationButton);
          textLocalization.resourcePath = textPath;
          textLocalization.updateLocalization();
        }

        setExtraBetTipText(text) {
          this.extraBetTipLabel.string = text;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rootNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buyBonusBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "buyBonusIcon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "buyBonusIconBGOpacity", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "buyBonusIconCloseBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "buyBonusIconSprite", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "extraBetToggle", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "extraBetTipNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "extraBetTipBG", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "extraBetTipLabel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "extraBetTipBGBtnNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "extraBetLandscapeWidget", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "extraBetPortraitWidget", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "buyBonusLandscapeWidget", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "buyBonusPortraitWidget", [_dec16], {
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
//# sourceMappingURL=bde0b95d27ad2924b7af215c167502be676a282d.js.map