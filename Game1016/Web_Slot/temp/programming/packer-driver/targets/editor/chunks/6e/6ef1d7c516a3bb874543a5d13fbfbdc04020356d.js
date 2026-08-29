System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, find, Node, UITransform, Utility, NumberSelectBtn, AudioManager, GenericSound, LocalizationLabel, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, BTN_LENGTH, BetSelectUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../../Scripts/Utils/Utility", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNumberSelectBtn(extras) {
    _reporterNs.report("NumberSelectBtn", "./NumberSelectBtn", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericSound(extras) {
    _reporterNs.report("GenericSound", "../../Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalizationLabel(extras) {
    _reporterNs.report("LocalizationLabel", "../../Scripts/GameScripts/LocalizationLabel", _context.meta, extras);
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
      find = _cc.find;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      Utility = _unresolved_2.Utility;
    }, function (_unresolved_3) {
      NumberSelectBtn = _unresolved_3.NumberSelectBtn;
    }, function (_unresolved_4) {
      AudioManager = _unresolved_4.AudioManager;
    }, function (_unresolved_5) {
      GenericSound = _unresolved_5.GenericSound;
    }, function (_unresolved_6) {
      LocalizationLabel = _unresolved_6.LocalizationLabel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7fc09yZYX9F46ACf+GSZl9h", "BetSelectUI", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EventTouch', 'find', 'Node', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);
      BTN_LENGTH = 24;

      _export("BetSelectUI", BetSelectUI = (_dec = ccclass('BetSelectUI'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = class BetSelectUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "maskBG", _descriptor, this);

          _initializerDefineProperty(this, "closeBtn", _descriptor2, this);

          _initializerDefineProperty(this, "numberSelectBtnGroup", _descriptor3, this);

          _initializerDefineProperty(this, "layoutNode", _descriptor4, this);

          _initializerDefineProperty(this, "bgBtn", _descriptor5, this);

          _initializerDefineProperty(this, "betTitle", _descriptor6, this);

          this.numberSelectBtn = new Array(24);
          this.onBetSelectBtnClickCallback = null;
          this.onUIActiveChange = null;
          this.betValues = [];
          this.onBGBtnClickCallback = null;
          this.selectedID = 0;

          this.onCloseBtnClick = () => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
              error: Error()
            }), GenericSound) : GenericSound).Public_Off);
            this.hideUI();
          };
        }

        init() {
          this.hideUI();
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.maskBG, this, 'onCloseBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.closeBtn, this, 'onCloseBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.bgBtn, this, 'onBGBtnClick'); // 按鈕的回呼只初始化一次

          for (let i = 0; i < BTN_LENGTH; i++) {
            this.numberSelectBtn[i] = find(`NumberSelectBtn_${i}`, this.layoutNode).getComponent(Button);
            this.numberSelectBtn[i].getComponent(_crd && NumberSelectBtn === void 0 ? (_reportPossibleCrUseOfNumberSelectBtn({
              error: Error()
            }), NumberSelectBtn) : NumberSelectBtn).setNormalStatus();
            (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).addEventHandlerToButton(this.numberSelectBtn[i].node, this, 'onBetSelectBtnClick', i.toString());
          }

          this.setSelectedBtn(this.selectedID);
        }

        setInfos(betValues) {
          if (betValues.length === 0) {
            console.error('BetSelectUI: setBetValues: betValues is empty.');
          }

          this.betValues = betValues;

          for (let i = 0; i < BTN_LENGTH; i++) {
            this.numberSelectBtn[i].node.active = false;
          }

          for (let i = 0; i < this.betValues.length; i++) {
            if (i >= BTN_LENGTH) {
              console.error(`BetSelectUI: setBetValues: betValues length is ${this.betValues.length}, but only ${BTN_LENGTH} buttons are available.`);
              break;
            }

            this.numberSelectBtn[i].node.active = true;
            this.numberSelectBtn[i].getComponent(_crd && NumberSelectBtn === void 0 ? (_reportPossibleCrUseOfNumberSelectBtn({
              error: Error()
            }), NumberSelectBtn) : NumberSelectBtn).init();
            this.numberSelectBtn[i].getComponent(_crd && NumberSelectBtn === void 0 ? (_reportPossibleCrUseOfNumberSelectBtn({
              error: Error()
            }), NumberSelectBtn) : NumberSelectBtn).setLabel(this.betValues[i].numberComma());
          }
        }

        setSelectedBtn(id) {
          this.selectedID = id;

          for (let i = 0; i < this.betValues.length; i++) {
            this.numberSelectBtn[i].getComponent(_crd && NumberSelectBtn === void 0 ? (_reportPossibleCrUseOfNumberSelectBtn({
              error: Error()
            }), NumberSelectBtn) : NumberSelectBtn).setNormalStatus();
          }

          this.numberSelectBtn[this.selectedID = id].getComponent(_crd && NumberSelectBtn === void 0 ? (_reportPossibleCrUseOfNumberSelectBtn({
            error: Error()
          }), NumberSelectBtn) : NumberSelectBtn).setSelectedStatus();
        }

        showUI() {
          var _this$onUIActiveChang;

          let activeCnt = this.numberSelectBtn.filter(v => v.node.active).length; // 如果24個按鈕，就縮小按鈕高度從70到60

          let btnHeight = 70;

          if (activeCnt > 21) {
            btnHeight = 60;
          }

          for (let item of this.numberSelectBtn) {
            item.getComponent(UITransform).height = btnHeight;
          }

          this.node.setActive(true);
          (_this$onUIActiveChang = this.onUIActiveChange) == null || _this$onUIActiveChang.call(this, true);
        }

        hideUI() {
          var _this$onUIActiveChang2;

          if (!this.node.active) {
            return;
          }

          this.node.setActive(false);
          this.closeBtn.getComponent(Button).resetStatus();
          (_this$onUIActiveChang2 = this.onUIActiveChange) == null || _this$onUIActiveChang2.call(this, false);
        }

        onBetSelectBtnClick(event, customEventData) {
          var _this$onBetSelectBtnC;

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
            error: Error()
          }), GenericSound) : GenericSound).Public_Choice);
          let id = parseInt(customEventData);
          this.setSelectedBtn(id);
          this.hideUI();
          (_this$onBetSelectBtnC = this.onBetSelectBtnClickCallback) == null || _this$onBetSelectBtnC.call(this, this.betValues[id]);
        }

        onBGBtnClick() {
          var _this$onBGBtnClickCal;

          (_this$onBGBtnClickCal = this.onBGBtnClickCallback) == null || _this$onBGBtnClickCal.call(this);
        }

        setBetTitleLocalizationKey(key) {
          this.betTitle.getComponent(_crd && LocalizationLabel === void 0 ? (_reportPossibleCrUseOfLocalizationLabel({
            error: Error()
          }), LocalizationLabel) : LocalizationLabel).key = key;
        }

        getSelectedBetValue() {
          return this.betValues[this.selectedID];
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "maskBG", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "closeBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "numberSelectBtnGroup", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "layoutNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bgBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "betTitle", [_dec7], {
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
//# sourceMappingURL=6ef1d7c516a3bb874543a5d13fbfbdc04020356d.js.map