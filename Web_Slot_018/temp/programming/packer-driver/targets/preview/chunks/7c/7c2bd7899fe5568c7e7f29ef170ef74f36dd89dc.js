System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Label, Utility, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, BuyFeatureUIBase;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../../Scripts/Utils/Utility", _context.meta, extras);
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
    }, function (_unresolved_2) {
      Utility = _unresolved_2.Utility;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "487dfBv3fNLzKUfueqUZ6bJ", "BuyFeatureUIBase", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BuyFeatureUIBase", BuyFeatureUIBase = (_dec = ccclass('BuyFeatureUIBase'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Label), _dec7 = property(Label), _dec(_class = (_class2 = class BuyFeatureUIBase extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "confirmBtn", _descriptor, this);

          _initializerDefineProperty(this, "closeBtn", _descriptor2, this);

          _initializerDefineProperty(this, "increaseBtn", _descriptor3, this);

          _initializerDefineProperty(this, "decreaseBtn", _descriptor4, this);

          _initializerDefineProperty(this, "betValueLabel", _descriptor5, this);

          _initializerDefineProperty(this, "featureTotalLabel", _descriptor6, this);

          this.onConfirmBtnClickCallback = void 0;
          this.onCloseBtnClickCallback = void 0;
          this.betValueList = [];
          this.maxBetIndex = 0;
          this.currentBetIndex = 0;
          this.currentBetValue = 0;
          this.currentFeatureTotal = 0;
          this.featureMultiplier = 100;
        }

        init(betValueList) {
          if (this.confirmBtn) {
            (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).addEventHandlerToButton(this.confirmBtn.node, this, 'onConfirmBtnClick');
          }

          if (this.closeBtn) {
            (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).addEventHandlerToButton(this.closeBtn.node, this, 'onCloseBtnClick');
          }

          if (this.increaseBtn) {
            (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).addEventHandlerToButton(this.increaseBtn.node, this, 'onIncreaseBtnClick');
          }

          if (this.decreaseBtn) {
            (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).addEventHandlerToButton(this.decreaseBtn.node, this, 'onDecreaseBtnClick');
          }

          this.betValueList = [...betValueList];
          this.maxBetIndex = this.betValueList.length - 1;
          this.currentBetIndex = 0;
          this.updateBetValue();
        }

        onConfirmBtnClick() {
          var _this$onConfirmBtnCli;

          //此處可以override，讓子類別先表演完關閉的特效後
          //再呼叫父類別的onConfirmBtnClickCallback
          (_this$onConfirmBtnCli = this.onConfirmBtnClickCallback) == null || _this$onConfirmBtnCli.call(this, this.currentFeatureTotal);
        }

        onCloseBtnClick() {
          var _this$onCloseBtnClick;

          (_this$onCloseBtnClick = this.onCloseBtnClickCallback) == null || _this$onCloseBtnClick.call(this);
        }

        onIncreaseBtnClick() {
          this.resetBetValueBtnInteractable();
          this.currentBetIndex++;

          if (this.currentBetIndex === this.maxBetIndex) {
            this.increaseBtn.interactable = false;
          }

          this.updateBetValue();
        }

        onDecreaseBtnClick() {
          this.resetBetValueBtnInteractable();
          this.currentBetIndex--;

          if (this.currentBetIndex === 0) {
            this.decreaseBtn.interactable = false;
          }

          this.updateBetValue();
        }

        btnInteractable(interactable) {
          this.confirmBtn.interactable = interactable;
          this.closeBtn.interactable = interactable;
          this.increaseBtn.interactable = interactable;
          this.decreaseBtn.interactable = interactable;
        }

        resetBetValueBtnInteractable() {
          this.increaseBtn.interactable = true;
          this.decreaseBtn.interactable = true;
        }

        setBetValueLabel(betValue) {
          this.betValueLabel.string = betValue.numberComma();
        }

        setFeatureTotalLabel(featureTotal) {
          this.featureTotalLabel.string = featureTotal.numberComma();
        }

        updateBetValue() {
          this.currentBetValue = this.betValueList[this.currentBetIndex];
          this.currentFeatureTotal = (this.currentBetValue * this.featureMultiplier).fixed();
          this.setBetValueLabel(this.currentBetValue);
          this.setFeatureTotalLabel(this.currentFeatureTotal);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "confirmBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "closeBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "increaseBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "decreaseBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "betValueLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "featureTotalLabel", [_dec7], {
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
//# sourceMappingURL=7c2bd7899fe5568c7e7f29ef170ef74f36dd89dc.js.map