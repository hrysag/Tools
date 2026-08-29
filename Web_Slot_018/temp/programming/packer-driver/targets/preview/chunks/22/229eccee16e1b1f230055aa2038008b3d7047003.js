System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, BlockInputEvents, Button, Component, Node, Utility, GenericUIRes, AudioManager, GenericSound, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, MenuUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../../Scripts/Utils/Utility", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUIRes(extras) {
    _reporterNs.report("GenericUIRes", "./GenericUIRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericSound(extras) {
    _reporterNs.report("GenericSound", "../../Scripts/Utils/Config", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      BlockInputEvents = _cc.BlockInputEvents;
      Button = _cc.Button;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Utility = _unresolved_2.Utility;
    }, function (_unresolved_3) {
      GenericUIRes = _unresolved_3.GenericUIRes;
    }, function (_unresolved_4) {
      AudioManager = _unresolved_4.AudioManager;
    }, function (_unresolved_5) {
      GenericSound = _unresolved_5.GenericSound;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "251e1mxAERJa7J+NqJDQcN2", "MenuUI", undefined);

      __checkObsolete__(['_decorator', 'BlockInputEvents', 'Button', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MenuUI", MenuUI = (_dec = ccclass('MenuUI'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = (_class2 = class MenuUI extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "closeBtn", _descriptor, this);

          _initializerDefineProperty(this, "exitBtn", _descriptor2, this);

          _initializerDefineProperty(this, "historyBtn", _descriptor3, this);

          _initializerDefineProperty(this, "payTableBtn", _descriptor4, this);

          _initializerDefineProperty(this, "ruleBtn", _descriptor5, this);

          _initializerDefineProperty(this, "soundBtn", _descriptor6, this);

          _initializerDefineProperty(this, "bgBtn", _descriptor7, this);

          this.onRuleBtnClickCallback = null;
          this.onPayTableBtnClickCallback = null;
          this.onHistoryBtnClickCallback = null;
          this.onMenuUIHideCallback = null;
          this.onBGBtnClickCallback = null;
          this.isSoundOn = true;
        }

        init() {
          this.hideUI();
          this.addBGBlockInputEvents();
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.closeBtn, this, 'onCloseBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.ruleBtn, this, 'onRuleBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.payTableBtn, this, 'onPayTableBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.soundBtn, this, 'onSoundBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.historyBtn, this, 'onHistoryBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.bgBtn, this, 'onBGBtnClick');
        }

        showUI() {
          this.node.setActive(true);
        }

        hideUI() {
          var _this$onMenuUIHideCal;

          this.node.setActive(false);
          this.resetAllMenuIcons();
          (_this$onMenuUIHideCal = this.onMenuUIHideCallback) == null || _this$onMenuUIHideCal.call(this);
        }

        setHistoryBtnActive(isActive) {
          this.historyBtn.active = isActive;
        }

        getHistoryBtnActive() {
          return this.historyBtn.active;
        }

        setHistoryBtnEnable(isEnable) {
          this.historyBtn.getComponent(Button).interactable = isEnable;
        }

        onCloseBtnClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
            error: Error()
          }), GenericSound) : GenericSound).Public_Off);
          this.hideUI();
        }

        onRuleBtnClick() {
          var _this$onRuleBtnClickC;

          (_this$onRuleBtnClickC = this.onRuleBtnClickCallback) == null || _this$onRuleBtnClickC.call(this);
        }

        onPayTableBtnClick() {
          var _this$onPayTableBtnCl;

          (_this$onPayTableBtnCl = this.onPayTableBtnClickCallback) == null || _this$onPayTableBtnCl.call(this);
        }

        onHistoryBtnClick() {
          var _this$onHistoryBtnCli;

          (_this$onHistoryBtnCli = this.onHistoryBtnClickCallback) == null || _this$onHistoryBtnCli.call(this);
        }

        onSoundBtnClick() {
          var _instance;

          if (this.isSoundOn) {
            this.soundBtn.getComponent(Button).normalSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
              error: Error()
            }), GenericUIRes) : GenericUIRes).instance.soundOff;
            this.soundBtn.getComponent(Button).hoverSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
              error: Error()
            }), GenericUIRes) : GenericUIRes).instance.soundOffHover;
            this.soundBtn.getComponent(Button).pressedSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
              error: Error()
            }), GenericUIRes) : GenericUIRes).instance.soundOffPress;
            this.soundBtn.getComponent(Button).disabledSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
              error: Error()
            }), GenericUIRes) : GenericUIRes).instance.soundOff;
          } else {
            this.soundBtn.getComponent(Button).normalSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
              error: Error()
            }), GenericUIRes) : GenericUIRes).instance.soundOn;
            this.soundBtn.getComponent(Button).hoverSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
              error: Error()
            }), GenericUIRes) : GenericUIRes).instance.soundOn;
            this.soundBtn.getComponent(Button).pressedSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
              error: Error()
            }), GenericUIRes) : GenericUIRes).instance.soundOnPress;
            this.soundBtn.getComponent(Button).disabledSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
              error: Error()
            }), GenericUIRes) : GenericUIRes).instance.soundOn;
          }

          this.isSoundOn = !this.isSoundOn;
          (_instance = (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance) == null || _instance.setAudioEnable(this.isSoundOn);

          if (this.isSoundOn) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
              error: Error()
            }), GenericSound) : GenericSound).Public_On);
          }
        }

        resetAllMenuIcons() {
          this.soundBtn.getComponent(Button).resetStatus();
          this.historyBtn.getComponent(Button).resetStatus();
          this.payTableBtn.getComponent(Button).resetStatus();
          this.ruleBtn.getComponent(Button).resetStatus();
          this.exitBtn.getComponent(Button).resetStatus();
        }

        addBGBlockInputEvents() {
          // MenuUI的背景要擋住後方事件，所以要加上BlockInputEvents
          var bgNode = this.soundBtn.parent;

          if (!bgNode.getComponent(BlockInputEvents)) {
            bgNode.addComponent(BlockInputEvents);
          }
        }

        onBGBtnClick() {
          var _this$onBGBtnClickCal;

          (_this$onBGBtnClickCal = this.onBGBtnClickCallback) == null || _this$onBGBtnClickCal.call(this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "closeBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "exitBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "historyBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "payTableBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ruleBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "soundBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bgBtn", [_dec8], {
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
//# sourceMappingURL=229eccee16e1b1f230055aa2038008b3d7047003.js.map