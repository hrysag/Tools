System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Node, tween, UIOpacity, SpineController, FindComponent, DefinitionGameConfigData, BuyFeatureUIBase, MultiLanguageBtn, AudioManager, SOUND_TYPE, SoundList, AudioSourceList, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, BUY_FG_MULTIPLIER, BuyFGGuiController;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSpineController(extras) {
    _reporterNs.report("SpineController", "../../../MyUtils/AnimationSystem/Components/SpineController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../../../MyUtils/FindComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDefinitionGameConfigData(extras) {
    _reporterNs.report("DefinitionGameConfigData", "../../../DefinitionGameData/DefinitionGameConfigData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuyFeatureUIBase(extras) {
    _reporterNs.report("BuyFeatureUIBase", "db://assets/GenericUI/Scripts/BuyFeatureUIBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMultiLanguageBtn(extras) {
    _reporterNs.report("MultiLanguageBtn", "../../../MyUtils/MultiLanguageBtn/MultiLanguageBtn", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOUND_TYPE(extras) {
    _reporterNs.report("SOUND_TYPE", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../../../DefinitionGameData/SoundList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioSourceList(extras) {
    _reporterNs.report("AudioSourceList", "../../../DefinitionGameData/SoundList", _context.meta, extras);
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
      Node = _cc.Node;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      SpineController = _unresolved_2.SpineController;
    }, function (_unresolved_3) {
      FindComponent = _unresolved_3.FindComponent;
    }, function (_unresolved_4) {
      DefinitionGameConfigData = _unresolved_4.DefinitionGameConfigData;
    }, function (_unresolved_5) {
      BuyFeatureUIBase = _unresolved_5.BuyFeatureUIBase;
    }, function (_unresolved_6) {
      MultiLanguageBtn = _unresolved_6.MultiLanguageBtn;
    }, function (_unresolved_7) {
      AudioManager = _unresolved_7.AudioManager;
      SOUND_TYPE = _unresolved_7.SOUND_TYPE;
    }, function (_unresolved_8) {
      SoundList = _unresolved_8.SoundList;
      AudioSourceList = _unresolved_8.AudioSourceList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2f33bv/AnZKlpTt7O3g+vq3", "BuyFGGuiController", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'Node', 'tween', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        BUY_FG_MULTIPLIER
      } = _crd && DefinitionGameConfigData === void 0 ? (_reportPossibleCrUseOfDefinitionGameConfigData({
        error: Error()
      }), DefinitionGameConfigData) : DefinitionGameConfigData);

      _export("BuyFGGuiController", BuyFGGuiController = (_dec = ccclass('BuyFGGuiController'), _dec2 = property({
        type: Node,
        visible: true,
        displayName: 'spineBuyBgUI',
        tooltip: 'spineBuyBgUI'
      }), _dec3 = property({
        type: Node,
        visible: true,
        displayName: 'confirmBtnLanguageNode',
        tooltip: '確認按鈕語系'
      }), _dec4 = property({
        type: Button,
        visible: true,
        displayName: 'blockBtn',
        tooltip: '遮擋底部的隱形按鈕'
      }), _dec(_class = (_class2 = class BuyFGGuiController extends (_crd && BuyFeatureUIBase === void 0 ? (_reportPossibleCrUseOfBuyFeatureUIBase({
        error: Error()
      }), BuyFeatureUIBase) : BuyFeatureUIBase) {
        constructor() {
          var _this;

          super(...arguments);
          _this = this;

          _initializerDefineProperty(this, "_spineBuyBgUI", _descriptor, this);

          _initializerDefineProperty(this, "_confirmButtonLanguageNode", _descriptor2, this);

          _initializerDefineProperty(this, "_blockBtn", _descriptor3, this);

          this._addAmountButton = null;
          this._subtractAmountButton = null;
          this._confirmButton = null;
          this._cancelButton = null;
          this._totalBetNode = null;
          this._totalFGAmount = null;
          this._buyFGPanelIsOpen = false;
          this._spController = null;
          this._openFinish = false;
          this.confirmCallback = null;
          this.closeCallback = null;
          this.confirmClickHandler = /*#__PURE__*/_asyncToGenerator(function* () {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).BuyButton, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
              error: Error()
            }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
              error: Error()
            }), AudioSourceList) : AudioSourceList).BasicAS);
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).BuyFGLeave, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
              error: Error()
            }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
              error: Error()
            }), AudioSourceList) : AudioSourceList).BtnAS);
            yield _this._spController.playAniInPromise('out_confirm'); //this.node.active = false;

            _this.close();

            _this.confirmCallback == null || _this.confirmCallback(_this.currentBetValue, _this.currentFeatureTotal);
            _this.closeCallback == null || _this.closeCallback();
          });
          this.cancelClickHandler = /*#__PURE__*/_asyncToGenerator(function* () {
            _this.btnInteractable(false);

            _this.unRegisterEvtHandler();

            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).BuyFGLeave, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
              error: Error()
            }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
              error: Error()
            }), AudioSourceList) : AudioSourceList).BasicAS);
            yield _this._spController.playAniInPromise('out_back');

            _this.close();

            _this.closeCallback == null || _this.closeCallback(); //this.node.active = false;
          });

          this.blockBtnClickHandler = () => {
            this.cancelClickHandler();
          };

          this.spControllerKeyFrameEvtHandler = function () {
            //console.log('spControllerKeyFrameEvtHandler', args[0]);
            switch (arguments.length <= 0 ? undefined : arguments[0]) {
              case 'StartChange':
                break;

              case 'On':
                break;

              case 'Off':
                break;

              case 'FadeOut':
                _this.fadeOutGui();

                break;

              case 'FadeIn':
                //--進場
                _this.fadeInGui();

                break;
            }
          };
        }

        get buyFGPanelIsOpen() {
          return this._buyFGPanelIsOpen;
        } //--gameRoot有異動的時候都會進來更新


        set baseBet(value) {
          this.setBetValueLabel(value);
          this.calculateBaseForFgBet(value);
          this.updateBetValue();
        }

        onLoad() {//this._spineBuyBgUI.active = false;
        }

        init(betValueList) {
          super.init(betValueList);
          this.featureMultiplier = BUY_FG_MULTIPLIER; //this._betValueList = [...PlayerInfo.betValueList];
          //this._maxBetIndex = this._betValueList.length - 1;

          this._spController = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
            error: Error()
          }), FindComponent) : FindComponent).findComponentInChildren(this._spineBuyBgUI, _crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
            error: Error()
          }), SpineController) : SpineController);

          this._spController.init(); //-StartChange


          this._spController.setKeyFrameEvent('On', this.spControllerKeyFrameEvtHandler);

          this._spController.setKeyFrameEvent('Off', this.spControllerKeyFrameEvtHandler);

          this._spController.setKeyFrameEvent('FadeOut', this.spControllerKeyFrameEvtHandler);

          this._spController.setKeyFrameEvent('FadeIn', this.spControllerKeyFrameEvtHandler);

          this._spController.setKeyFrameEvent('StartChange', this.spControllerKeyFrameEvtHandler);

          this._confirmButton = this.confirmBtn.node;
          this._cancelButton = this.closeBtn.node;
          this._addAmountButton = this.increaseBtn.node;
          this._subtractAmountButton = this.decreaseBtn.node;
          this._totalBetNode = this.betValueLabel.node;
          this._totalFGAmount = this.featureTotalLabel.node;
          this.confirmBtn.node.getComponent(_crd && MultiLanguageBtn === void 0 ? (_reportPossibleCrUseOfMultiLanguageBtn({
            error: Error()
          }), MultiLanguageBtn) : MultiLanguageBtn).init();
          this.updateBetValue();
          this.node.active = false;
          this._buyFGPanelIsOpen = false;
        }

        open() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            _this2._openFinish = false;

            _this2.checkBtnStateWithCurrentBetIndex();

            _this2.node.active = true;
            _this2._buyFGPanelIsOpen = true;
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).BuyFGBoard, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
              error: Error()
            }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
              error: Error()
            }), AudioSourceList) : AudioSourceList).BasicAS);
            yield _this2._spController.playAniInPromise('in');

            _this2.registerEvtHandler();

            _this2._spController.playAni('loop');

            _this2._openFinish = true;

            _this2.btnInteractable(true);
          })();
        }

        close() {
          this.node.active = false;
          this._buyFGPanelIsOpen = false; //--20250620

          this._spController.spine.getState().setEmptyAnimation(0, 0);
        }

        onCloseBtnClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).public_choice, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
            error: Error()
          }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).BtnAS);
          this.cancelClickHandler();
        }

        onConfirmBtnClick() {
          if (this._openFinish) {
            this.unRegisterEvtHandler();
            this.btnInteractable(false);
            this.confirmClickHandler();
          }
        } //--[+]按鈕點擊事件


        onIncreaseBtnClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).public_choice, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
            error: Error()
          }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).BtnAS);
          super.onIncreaseBtnClick();
        } //--[-]按鈕點擊事件


        onDecreaseBtnClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).public_choice, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
            error: Error()
          }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).BtnAS);
          super.onDecreaseBtnClick();
        }

        checkBtnStateWithCurrentBetIndex() {
          if (this.currentBetIndex === 0) {
            this.decreaseBtn.interactable = false;
          } else if (this.currentBetIndex === this.maxBetIndex) {
            this.increaseBtn.interactable = false;
          } else {
            this.decreaseBtn.interactable = true;
            this.increaseBtn.interactable = true;
          }
        }

        getBetValueIndex(value) {
          var index = 0;

          for (var i = 0; i < this.betValueList.length; i++) {
            if (this.betValueList[i] == value) {
              index = i;
              break;
            }
          }

          return index;
        }

        calculateBaseForFgBet(value) {
          this.currentBetIndex = this.getBetValueIndex(value);
        }

        registerEvtHandler() {
          /*
          this._addAmountButton.on(Node.EventType.TOUCH_END, this.addAmountClickHandler);
          this._subtractAmountButton.on(Node.EventType.TOUCH_END, this.subtractAmountClickHandler);
          this._confirmButton.on(Node.EventType.TOUCH_END, this.confirmClickHandler);
          this._cancelButton.on(Node.EventType.TOUCH_END, this.cancelClickHandler);
          */
          this._blockBtn.interactable = true;

          this._blockBtn.node.on(Node.EventType.TOUCH_END, this.blockBtnClickHandler);
        }

        unRegisterEvtHandler() {
          /*
          this._addAmountButton.off(Node.EventType.TOUCH_END, this.addAmountClickHandler);
          this._subtractAmountButton.off(Node.EventType.TOUCH_END, this.subtractAmountClickHandler);
          this._confirmButton.off(Node.EventType.TOUCH_END, this.confirmClickHandler);
          this._cancelButton.off(Node.EventType.TOUCH_END, this.cancelClickHandler);
          */
          this._blockBtn.interactable = false;

          this._blockBtn.node.off(Node.EventType.TOUCH_END, this.blockBtnClickHandler);
        }

        fadeOutGui() {
          var target = [this._confirmButton, this._cancelButton, this._addAmountButton, this._subtractAmountButton, this._totalBetNode, this._totalFGAmount, this._confirmButtonLanguageNode];

          for (var item of target) {
            var targetOpacity = item.getComponent(UIOpacity);
            tween(targetOpacity).to(0.5, {
              opacity: 0
            }).start();
          }
        }

        fadeInGui() {
          var target = [this._confirmButton, this._cancelButton, this._addAmountButton, this._subtractAmountButton, this._totalBetNode, this._totalFGAmount, this._confirmButtonLanguageNode];

          for (var item of target) {
            var targetOpacity = item.getComponent(UIOpacity);
            tween(targetOpacity).to(0.2, {
              opacity: 255
            }).start();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_spineBuyBgUI", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_confirmButtonLanguageNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_blockBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e353bec29f4f58f4113ad411f34c336e69478b99.js.map