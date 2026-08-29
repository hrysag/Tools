System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Label, Node, Sprite, Utility, Debug, GenericUIRes, MainUIBtnState, AudioManager, GenericSound, AUTO_INFINITY_NUMBER, ButtonKeyboardTrigger, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _crd, ccclass, property, NewFlashModeEnum, MainUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../../Scripts/Utils/Utility", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../../Scripts/Utils/Debug", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUIRes(extras) {
    _reporterNs.report("GenericUIRes", "./GenericUIRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainUIBtnState(extras) {
    _reporterNs.report("MainUIBtnState", "./GenericUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericSound(extras) {
    _reporterNs.report("GenericSound", "../../Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAUTO_INFINITY_NUMBER(extras) {
    _reporterNs.report("AUTO_INFINITY_NUMBER", "./AutoSpinSelectUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonKeyboardTrigger(extras) {
    _reporterNs.report("ButtonKeyboardTrigger", "../../Scripts/GameScripts/ButtonKeyboardTrigger", _context.meta, extras);
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
      Debug = _unresolved_3.Debug;
    }, function (_unresolved_4) {
      GenericUIRes = _unresolved_4.GenericUIRes;
    }, function (_unresolved_5) {
      MainUIBtnState = _unresolved_5.MainUIBtnState;
    }, function (_unresolved_6) {
      AudioManager = _unresolved_6.AudioManager;
    }, function (_unresolved_7) {
      GenericSound = _unresolved_7.GenericSound;
    }, function (_unresolved_8) {
      AUTO_INFINITY_NUMBER = _unresolved_8.AUTO_INFINITY_NUMBER;
    }, function (_unresolved_9) {
      ButtonKeyboardTrigger = _unresolved_9.ButtonKeyboardTrigger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9bc49EoEuJCfJWfv/0zAKs3", "MainUI", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EventTouch', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NewFlashModeEnum", NewFlashModeEnum = /*#__PURE__*/function (NewFlashModeEnum) {
        NewFlashModeEnum[NewFlashModeEnum["None"] = 0] = "None";
        NewFlashModeEnum[NewFlashModeEnum["NewFlash1"] = 1] = "NewFlash1";
        NewFlashModeEnum[NewFlashModeEnum["NewFlash2"] = 2] = "NewFlash2";
        return NewFlashModeEnum;
      }({}));

      _export("MainUI", MainUI = (_dec = ccclass('MainUI'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Sprite), _dec13 = property(Sprite), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Label), _dec(_class = (_class2 = class MainUI extends Component {
        constructor(...args) {
          super(...args);
          this.onMainBGClickCallback = null;
          this.onMenuBtnClickCallback = null;
          this.onBetBtnClickCallback = null;
          this.onAutoBtnClickCallback = null;
          this.onStopAutoBtnClickCallback = null;
          this.onSpinBtnClickCallback = null;
          this.onStopBtnClickCallback = null;
          this.onSpecialBtnClickCallback = null;
          this.onNewFlashBtnSwitchCallback = null;
          this.isStopBtnEnabled = true;

          // @property(Node)
          // private mainBGBtn: Node;
          _initializerDefineProperty(this, "menuBtn", _descriptor, this);

          _initializerDefineProperty(this, "betBtn", _descriptor2, this);

          _initializerDefineProperty(this, "newBetBtn", _descriptor3, this);

          _initializerDefineProperty(this, "autoBtn", _descriptor4, this);

          _initializerDefineProperty(this, "stopAutoBtn", _descriptor5, this);

          _initializerDefineProperty(this, "autoCntLabel", _descriptor6, this);

          _initializerDefineProperty(this, "spinBtnRoot", _descriptor7, this);

          _initializerDefineProperty(this, "spinBtn", _descriptor8, this);

          _initializerDefineProperty(this, "stopBtn", _descriptor9, this);

          _initializerDefineProperty(this, "specialBtn", _descriptor10, this);

          _initializerDefineProperty(this, "stopIcon", _descriptor11, this);

          _initializerDefineProperty(this, "stopArrow", _descriptor12, this);

          _initializerDefineProperty(this, "autoCntInfNode", _descriptor13, this);

          _initializerDefineProperty(this, "flashBtn", _descriptor14, this);

          _initializerDefineProperty(this, "newFlashBtn", _descriptor15, this);

          _initializerDefineProperty(this, "flashBtnRoot", _descriptor16, this);

          _initializerDefineProperty(this, "spinBtnDisabled", _descriptor17, this);

          _initializerDefineProperty(this, "landscapeRightBtnGroup", _descriptor18, this);

          _initializerDefineProperty(this, "buyFeatureLabelNode", _descriptor19, this);

          _initializerDefineProperty(this, "buyFeatureLabel", _descriptor20, this);

          this.screenBtn = void 0;
          this.isFlashOn = false;
          this.newFlashMode = NewFlashModeEnum.None;
        }

        init() {
          (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Log("MainUI init"); // Utility.addEventHandlerToButton(this.mainBGBtn, this, 'onMainBGBtnClick');

          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.menuBtn, this, 'onMenuBtnClick');

          if (this.betBtn) {
            (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).addEventHandlerToButton(this.betBtn, this, 'onBetBtnClick');
          }

          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.autoBtn, this, 'onAutoBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.stopAutoBtn, this, 'onStopAutoBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.spinBtn, this, 'onSpinBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.stopBtn, this, 'onStopBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.flashBtn, this, 'onFlashBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.specialBtn, this, 'onSpecialBtnClick');

          if (this.newBetBtn) {
            (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).addEventHandlerToButton(this.newBetBtn, this, 'onBetBtnClick');
          }

          if (this.newFlashBtn) {
            (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).addEventHandlerToButton(this.newFlashBtn, this, 'onNewFlashBtnClick');
          } // input.on(Input.EventType.KEY_PRESSING, this.onKeyDownOrPressing, this);
          // input.on(Input.EventType.KEY_DOWN, this.onKeyDownOrPressing, this);

        }

        setScreenBtnRoot(screenBtnRoot) {
          if (this.screenBtn) {
            return;
          }

          this.screenBtn = screenBtnRoot.getComponentInChildren(Button).node;
          this.screenBtn.on(Node.EventType.TOUCH_START, event => {
            event.preventSwallow = true;
          }, this, true);
          this.screenBtn.on(Node.EventType.TOUCH_END, event => {
            event.preventSwallow = true;
          }, this, true);
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.screenBtn, this, 'onStopBtnClick');
          this.screenBtn.setActive(false);
        }

        onMainBGBtnClick() {
          var _this$onMainBGClickCa;

          (_this$onMainBGClickCa = this.onMainBGClickCallback) == null || _this$onMainBGClickCa.call(this);
        }

        onMenuBtnClick() {
          var _this$onMenuBtnClickC;

          (_this$onMenuBtnClickC = this.onMenuBtnClickCallback) == null || _this$onMenuBtnClickC.call(this);
        }

        onBetBtnClick() {
          var _this$onBetBtnClickCa;

          (_this$onBetBtnClickCa = this.onBetBtnClickCallback) == null || _this$onBetBtnClickCa.call(this);
        }

        onAutoBtnClick() {
          var _this$onAutoBtnClickC;

          (_this$onAutoBtnClickC = this.onAutoBtnClickCallback) == null || _this$onAutoBtnClickC.call(this);
        }

        onStopAutoBtnClick() {
          var _this$onStopAutoBtnCl;

          (_this$onStopAutoBtnCl = this.onStopAutoBtnClickCallback) == null || _this$onStopAutoBtnCl.call(this);
        }

        onSpinBtnClick() {
          var _this$onSpinBtnClickC;

          (_this$onSpinBtnClickC = this.onSpinBtnClickCallback) == null || _this$onSpinBtnClickC.call(this);
        }

        setStopBtnEnabled() {
          this.isStopBtnEnabled = true;
        }

        onStopBtnClick() {
          var _this$onStopBtnClickC;

          if (!this.isStopBtnEnabled) {
            return;
          }

          this.isStopBtnEnabled = false;
          (_this$onStopBtnClickC = this.onStopBtnClickCallback) == null || _this$onStopBtnClickC.call(this);
        }

        forceClickStopBtn() {
          this.onStopBtnClick();
        }

        onSpecialBtnClick() {
          var _this$onSpecialBtnCli;

          (_this$onSpecialBtnCli = this.onSpecialBtnClickCallback) == null || _this$onSpecialBtnCli.call(this);
        }

        onNewFlashBtnClick() {
          var _this$onNewFlashBtnSw;

          switch (this.newFlashMode) {
            case NewFlashModeEnum.None:
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
                error: Error()
              }), GenericSound) : GenericSound).Public_On);
              this.newFlashMode = NewFlashModeEnum.NewFlash1;
              this.newFlashBtn.getComponent(Button).normalSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
                error: Error()
              }), GenericUIRes) : GenericUIRes).instance.newFlash_1;
              this.newFlashBtn.getComponent(Button).hoverSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
                error: Error()
              }), GenericUIRes) : GenericUIRes).instance.newFlash_1_hover;
              break;

            case NewFlashModeEnum.NewFlash1:
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
                error: Error()
              }), GenericSound) : GenericSound).Public_On);
              this.newFlashMode = NewFlashModeEnum.NewFlash2;
              this.newFlashBtn.getComponent(Button).normalSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
                error: Error()
              }), GenericUIRes) : GenericUIRes).instance.newFlash_2;
              this.newFlashBtn.getComponent(Button).hoverSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
                error: Error()
              }), GenericUIRes) : GenericUIRes).instance.newFlash_2_hover;
              break;

            case NewFlashModeEnum.NewFlash2:
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
                error: Error()
              }), GenericSound) : GenericSound).Public_Off);
              this.newFlashMode = NewFlashModeEnum.None;
              this.newFlashBtn.getComponent(Button).normalSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
                error: Error()
              }), GenericUIRes) : GenericUIRes).instance.newFlash_0;
              this.newFlashBtn.getComponent(Button).hoverSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
                error: Error()
              }), GenericUIRes) : GenericUIRes).instance.newFlash_0_hover;
              break;

            default:
              break;
          }

          (_this$onNewFlashBtnSw = this.onNewFlashBtnSwitchCallback) == null || _this$onNewFlashBtnSw.call(this, this.newFlashMode);
        }

        onFlashBtnClick() {
          if (this.isFlashOn) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
              error: Error()
            }), GenericSound) : GenericSound).Public_Off);
            this.flashBtn.getComponent(Button).normalSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
              error: Error()
            }), GenericUIRes) : GenericUIRes).instance.flashOffSprite;
            this.flashBtn.getComponent(Button).hoverSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
              error: Error()
            }), GenericUIRes) : GenericUIRes).instance.flashOffHover;
          } else {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
              error: Error()
            }), GenericSound) : GenericSound).Public_On);
            this.flashBtn.getComponent(Button).normalSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
              error: Error()
            }), GenericUIRes) : GenericUIRes).instance.flashOnSprite;
            this.flashBtn.getComponent(Button).hoverSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
              error: Error()
            }), GenericUIRes) : GenericUIRes).instance.flashOnSprite;
          }

          this.isFlashOn = !this.isFlashOn;
        }

        setToSpinMode() {
          this.spinBtn.setActive(false);
          this.setStopBtnActive(true); // this.setStopBtnInteractable(true);
          // this.setScreenStopBtnInteractable(true);

          this.setAutoBtnState((_crd && MainUIBtnState === void 0 ? (_reportPossibleCrUseOfMainUIBtnState({
            error: Error()
          }), MainUIBtnState) : MainUIBtnState).Disabled);
          this.setBetBtnState((_crd && MainUIBtnState === void 0 ? (_reportPossibleCrUseOfMainUIBtnState({
            error: Error()
          }), MainUIBtnState) : MainUIBtnState).Disabled);
          this.menuBtn.getComponent(Button).interactable = false;
          this.isStopBtnEnabled = true;
        }

        setToIdleMode() {
          this.spinBtn.setActive(true);
          this.setStopBtnActive(false);
          this.setAutoBtnState((_crd && MainUIBtnState === void 0 ? (_reportPossibleCrUseOfMainUIBtnState({
            error: Error()
          }), MainUIBtnState) : MainUIBtnState).Normal);
          this.setBetBtnState((_crd && MainUIBtnState === void 0 ? (_reportPossibleCrUseOfMainUIBtnState({
            error: Error()
          }), MainUIBtnState) : MainUIBtnState).Normal);
          this.menuBtn.getComponent(Button).interactable = true;
        }

        openAutoMode() {
          this.stopAutoBtn.setActive(true);
          this.autoBtn.setActive(false);
        }

        closeAutoMode() {
          this.stopAutoBtn.setActive(false);
          this.autoBtn.setActive(true);
        }

        isTurboOn() {
          return this.isFlashOn || this.newFlashMode !== NewFlashModeEnum.None;
        }

        isTurbo2On() {
          return this.newFlashMode === NewFlashModeEnum.NewFlash2;
        }

        setAutoBtnState(state) {
          switch (state) {
            case (_crd && MainUIBtnState === void 0 ? (_reportPossibleCrUseOfMainUIBtnState({
              error: Error()
            }), MainUIBtnState) : MainUIBtnState).Normal:
              this.autoBtn.getComponent(Button).normalSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
                error: Error()
              }), GenericUIRes) : GenericUIRes).instance.autoBtnNormal;
              this.autoBtn.getComponent(Button).hoverSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
                error: Error()
              }), GenericUIRes) : GenericUIRes).instance.autoBtnHover;
              this.autoBtn.getComponent(Button).interactable = true;
              break;

            case (_crd && MainUIBtnState === void 0 ? (_reportPossibleCrUseOfMainUIBtnState({
              error: Error()
            }), MainUIBtnState) : MainUIBtnState).UIOpen:
              this.autoBtn.getComponent(Button).normalSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
                error: Error()
              }), GenericUIRes) : GenericUIRes).instance.autoBtnUIOpen;
              this.autoBtn.getComponent(Button).hoverSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
                error: Error()
              }), GenericUIRes) : GenericUIRes).instance.autoBtnUIOpen;
              this.autoBtn.getComponent(Button).interactable = true;
              break;

            case (_crd && MainUIBtnState === void 0 ? (_reportPossibleCrUseOfMainUIBtnState({
              error: Error()
            }), MainUIBtnState) : MainUIBtnState).Disabled:
              this.autoBtn.getComponent(Button).normalSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
                error: Error()
              }), GenericUIRes) : GenericUIRes).instance.autoBtnDisabled;
              this.autoBtn.getComponent(Button).interactable = false;
              break;
          }
        }

        setBetBtnState(state) {
          switch (state) {
            case (_crd && MainUIBtnState === void 0 ? (_reportPossibleCrUseOfMainUIBtnState({
              error: Error()
            }), MainUIBtnState) : MainUIBtnState).Normal:
              if (this.betBtn) {
                this.betBtn.getComponent(Button).normalSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
                  error: Error()
                }), GenericUIRes) : GenericUIRes).instance.betBtnNormal;
                this.betBtn.getComponent(Button).hoverSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
                  error: Error()
                }), GenericUIRes) : GenericUIRes).instance.betBtnHover;
                this.betBtn.getComponent(Button).interactable = true;
              }

              if (this.newBetBtn) {
                this.newBetBtn.getComponent(Button).normalSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
                  error: Error()
                }), GenericUIRes) : GenericUIRes).instance.newBetBtnNormal;
                this.newBetBtn.getComponent(Button).hoverSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
                  error: Error()
                }), GenericUIRes) : GenericUIRes).instance.newBetBtnHover;
                this.newBetBtn.getComponent(Button).interactable = true;
              }

              break;

            case (_crd && MainUIBtnState === void 0 ? (_reportPossibleCrUseOfMainUIBtnState({
              error: Error()
            }), MainUIBtnState) : MainUIBtnState).UIOpen:
              if (this.betBtn) {
                this.betBtn.getComponent(Button).normalSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
                  error: Error()
                }), GenericUIRes) : GenericUIRes).instance.betBtnUIOpen;
                this.betBtn.getComponent(Button).hoverSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
                  error: Error()
                }), GenericUIRes) : GenericUIRes).instance.betBtnUIOpen;
                this.betBtn.getComponent(Button).interactable = true;
              }

              if (this.newBetBtn) {
                this.newBetBtn.getComponent(Button).normalSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
                  error: Error()
                }), GenericUIRes) : GenericUIRes).instance.newBetBtnUIOpen;
                this.newBetBtn.getComponent(Button).hoverSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
                  error: Error()
                }), GenericUIRes) : GenericUIRes).instance.newBetBtnUIOpen;
                this.newBetBtn.getComponent(Button).interactable = true;
              }

              break;

            case (_crd && MainUIBtnState === void 0 ? (_reportPossibleCrUseOfMainUIBtnState({
              error: Error()
            }), MainUIBtnState) : MainUIBtnState).Disabled:
              if (this.betBtn) {
                this.betBtn.getComponent(Button).normalSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
                  error: Error()
                }), GenericUIRes) : GenericUIRes).instance.betBtnNormal;
                this.betBtn.getComponent(Button).interactable = false;
              }

              if (this.newBetBtn) {
                this.newBetBtn.getComponent(Button).normalSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
                  error: Error()
                }), GenericUIRes) : GenericUIRes).instance.newBetBtnNormal;
                this.newBetBtn.getComponent(Button).interactable = false;
              }

              break;
          }
        }

        setAutoCntLabel(num) {
          if (num === (_crd && AUTO_INFINITY_NUMBER === void 0 ? (_reportPossibleCrUseOfAUTO_INFINITY_NUMBER({
            error: Error()
          }), AUTO_INFINITY_NUMBER) : AUTO_INFINITY_NUMBER)) {
            this.autoCntLabel.string = '∞';
            this.autoCntLabel.node.setActive(false);
            this.autoCntInfNode.setActive(true);
          } else {
            this.autoCntLabel.string = `${num}`;
            this.autoCntLabel.node.setActive(true);
            this.autoCntInfNode.setActive(false);
          }
        }

        setStopBtnActive(b) {
          var _this$screenBtn;

          this.stopBtn.setActive(b);
          (_this$screenBtn = this.screenBtn) == null || _this$screenBtn.setActive(b);
        }

        setBetSpinAutoBtnInteractable(b) {
          if (b) {
            this.setBetBtnState((_crd && MainUIBtnState === void 0 ? (_reportPossibleCrUseOfMainUIBtnState({
              error: Error()
            }), MainUIBtnState) : MainUIBtnState).Normal);
            this.setAutoBtnState((_crd && MainUIBtnState === void 0 ? (_reportPossibleCrUseOfMainUIBtnState({
              error: Error()
            }), MainUIBtnState) : MainUIBtnState).Normal);
          } else {
            this.setBetBtnState((_crd && MainUIBtnState === void 0 ? (_reportPossibleCrUseOfMainUIBtnState({
              error: Error()
            }), MainUIBtnState) : MainUIBtnState).Disabled);
            this.setAutoBtnState((_crd && MainUIBtnState === void 0 ? (_reportPossibleCrUseOfMainUIBtnState({
              error: Error()
            }), MainUIBtnState) : MainUIBtnState).Disabled);
          }

          this.setSpinBtnInteractable(b);
        }

        setSpinBtnInteractable(b) {
          if (b) {
            this.spinBtn.active = true;
            this.spinBtnDisabled.active = false;
          } else {
            this.spinBtn.active = false;
            this.spinBtnDisabled.active = true;
          }
        }

        setLandscapeRightBtnGroupVisible(b) {
          if (b) {
            this.landscapeRightBtnGroup.setScale(1, 1);
          } else {
            this.landscapeRightBtnGroup.setScale(0, 0);
          }
        }

        setMenuBtnActive(b) {
          this.menuBtn.active = b;
        }
        /*
        public setMainBGActive(b: boolean): void {
            this.mainBGBtn.active = b;
        }
        */


        setKeyboardLock(b) {
          this.spinBtn.getComponent(_crd && ButtonKeyboardTrigger === void 0 ? (_reportPossibleCrUseOfButtonKeyboardTrigger({
            error: Error()
          }), ButtonKeyboardTrigger) : ButtonKeyboardTrigger).setTriggerActive(!b);
          this.stopBtn.getComponent(_crd && ButtonKeyboardTrigger === void 0 ? (_reportPossibleCrUseOfButtonKeyboardTrigger({
            error: Error()
          }), ButtonKeyboardTrigger) : ButtonKeyboardTrigger).setTriggerActive(!b);
        }

        setSpinBtnActive(isActive) {
          this.spinBtnRoot.setActive(isActive);
        }

        setRightDownBtnActive(isActive) {
          if (this.flashBtnRoot) {
            this.flashBtnRoot.setActive(isActive);
          }
        }

        setAutoBtnActive(isActive) {
          this.autoBtn.setActive(isActive);
        }

        setTwoLevelTurboMode(isActive) {
          if (!this.newFlashBtn) {
            return;
          } else {
            this.flashBtn.setActive(!isActive);
            this.newFlashBtn.setActive(isActive);
          }
        }

        setBuyFeatureLabelActive(isActive) {
          this.buyFeatureLabelNode.active = isActive;
        }

        setBuyFeatureBet(bet) {
          this.buyFeatureLabel.string = bet.fixed().numberComma();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "menuBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "betBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "newBetBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "autoBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "stopAutoBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "autoCntLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "spinBtnRoot", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "spinBtn", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "stopBtn", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "specialBtn", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "stopIcon", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "stopArrow", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "autoCntInfNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "flashBtn", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "newFlashBtn", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "flashBtnRoot", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "spinBtnDisabled", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "landscapeRightBtnGroup", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "buyFeatureLabelNode", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "buyFeatureLabel", [_dec21], {
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
//# sourceMappingURL=dbcd4b6b9d008a69bfc89bb53dd9c87551d4e79b.js.map