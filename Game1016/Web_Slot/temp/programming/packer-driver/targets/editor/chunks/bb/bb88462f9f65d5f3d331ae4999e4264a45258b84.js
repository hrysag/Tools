System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Button, color, instantiate, Label, Node, view, getCustomArea, Utility, IWindowResize, AudioManager, AutoSpinAreaType, KeyboardData, GameSetting, GenericSound, AUTO_INFINITY_NUMBER, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, AUTO_VALUE_LIST, AutoSpinAreaUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAutoSpinAreaBase(extras) {
    _reporterNs.report("AutoSpinAreaBase", "./AutoSpinAreaBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetCustomArea(extras) {
    _reporterNs.report("getCustomArea", "./AutoSpinAreaBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../../../../Utils/Core", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIWindowResize(extras) {
    _reporterNs.report("IWindowResize", "../../../../Utils/Orientation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../../../Utils/Audio", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoSpinAreaType(extras) {
    _reporterNs.report("AutoSpinAreaType", "./Interface/IAutoSpinArea", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToggleGroupArea(extras) {
    _reporterNs.report("ToggleGroupArea", "./ToggleGroupArea", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConditionContext(extras) {
    _reporterNs.report("ConditionContext", "./ConditionContext", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConditionArea(extras) {
    _reporterNs.report("ConditionArea", "./ConditionArea", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeyboardData(extras) {
    _reporterNs.report("KeyboardData", "./Enum/KeyboardData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSetting(extras) {
    _reporterNs.report("GameSetting", "../../../Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericSound(extras) {
    _reporterNs.report("GenericSound", "../../../Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "../../../Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAUTO_INFINITY_NUMBER(extras) {
    _reporterNs.report("AUTO_INFINITY_NUMBER", "../GenericUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConditionLine(extras) {
    _reporterNs.report("ConditionLine", "./ConditionLine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Button = _cc.Button;
      color = _cc.color;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      view = _cc.view;
    }, function (_unresolved_2) {
      getCustomArea = _unresolved_2.getCustomArea;
    }, function (_unresolved_3) {
      Utility = _unresolved_3.Utility;
    }, function (_unresolved_4) {
      IWindowResize = _unresolved_4.IWindowResize;
    }, function (_unresolved_5) {
      AudioManager = _unresolved_5.AudioManager;
    }, function (_unresolved_6) {
      AutoSpinAreaType = _unresolved_6.AutoSpinAreaType;
    }, function (_unresolved_7) {
      KeyboardData = _unresolved_7.KeyboardData;
    }, function (_unresolved_8) {
      GameSetting = _unresolved_8.GameSetting;
      GenericSound = _unresolved_8.GenericSound;
    }, function (_unresolved_9) {
      AUTO_INFINITY_NUMBER = _unresolved_9.AUTO_INFINITY_NUMBER;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cce366eV1RPn407c4H5HTdd", "AutoSpinAreaUI", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Button', 'color', 'Component', 'EventTouch', 'find', 'instantiate', 'Label', 'Node', 'Prefab', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      AUTO_VALUE_LIST = [10, 50, 100, 250, 500, 750, 1000, _crd && AUTO_INFINITY_NUMBER === void 0 ? (_reportPossibleCrUseOfAUTO_INFINITY_NUMBER({
        error: Error()
      }), AUTO_INFINITY_NUMBER) : AUTO_INFINITY_NUMBER];

      _export("AutoSpinAreaUI", AutoSpinAreaUI = (_dec = ccclass('AutoSpinAreaUI'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Animation), _dec7 = property(Animation), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec(_class = (_class2 = class AutoSpinAreaUI extends (_crd && IWindowResize === void 0 ? (_reportPossibleCrUseOfIWindowResize({
        error: Error()
      }), IWindowResize) : IWindowResize) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "maskBG", _descriptor, this);

          _initializerDefineProperty(this, "closeBtn", _descriptor2, this);

          _initializerDefineProperty(this, "startBtn", _descriptor3, this);

          _initializerDefineProperty(this, "areaContentLayout", _descriptor4, this);

          _initializerDefineProperty(this, "spinBtnAnimation", _descriptor5, this);

          _initializerDefineProperty(this, "startBtnAnimation", _descriptor6, this);

          _initializerDefineProperty(this, "keyboardRefNode", _descriptor7, this);

          _initializerDefineProperty(this, "keyboardNode", _descriptor8, this);

          _initializerDefineProperty(this, "keyboardBgBtn", _descriptor9, this);

          _initializerDefineProperty(this, "keyboardBtnRootNode", _descriptor10, this);

          this.autoSpinAmountArea = null;
          this.customAreas = [];
          this.selectedConditionArea = null;
          this.onStartBtnClickCallback = null;
          this.onUIActiveChange = null;
          this.checkConditionValid = null;
          this.onBGBtnClickCallback = null;

          this.onCloseBtnClick = () => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
              error: Error()
            }), GenericSound) : GenericSound).Public_Off);
            this.hideUI();
          };
        }

        init(areasPrefab = []) {
          this.hideUI();
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.maskBG, this, 'onCloseBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.closeBtn, this, 'onCloseBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.startBtn, this, 'onStartBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.keyboardBgBtn, this, 'onKeyboardBgBtnClick');
          this.createAreas(areasPrefab);
          this.setKeyboardBtnEvent();
          this.keyboardRefNode.active = false;
        }

        showUI() {
          var _this$onUIActiveChang;

          this.node.setActive(true);
          (_this$onUIActiveChang = this.onUIActiveChange) == null || _this$onUIActiveChang.call(this, true);
          const spinBtnState = this.spinBtnAnimation.getState('spinRotate');
          const startBtnState = this.startBtnAnimation.getState('spinRotate');
          startBtnState.setTime(spinBtnState.current);
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

        onWindowResize(orientation) {
          this.calculateKeyboardPosition();
        }

        onStartBtnClick() {
          var _this$onStartBtnClick;

          let autoTimes = 0;

          if (this.autoSpinAmountArea) {
            const autoSpinAmountSelectedID = this.autoSpinAmountArea.getCustomData();
            autoTimes = AUTO_VALUE_LIST[autoSpinAmountSelectedID];
          } else {
            autoTimes = _crd && AUTO_INFINITY_NUMBER === void 0 ? (_reportPossibleCrUseOfAUTO_INFINITY_NUMBER({
              error: Error()
            }), AUTO_INFINITY_NUMBER) : AUTO_INFINITY_NUMBER;
          }

          (_this$onStartBtnClick = this.onStartBtnClickCallback) == null || _this$onStartBtnClick.call(this, autoTimes);
        }

        onKeyboardBgBtnClick() {
          this.onKeyboardFinishClick();
        }

        hideKeyboard() {
          this.setKeyboardDarkLabel(false);
          this.keyboardRefNode.active = false;
          this.selectedConditionArea = null;
        }

        createAreas(customAreaPrefabs) {
          customAreaPrefabs.forEach(areaPrefab => {
            const areaNode = instantiate(areaPrefab);
            const area = (_crd && getCustomArea === void 0 ? (_reportPossibleCrUseOfgetCustomArea({
              error: Error()
            }), getCustomArea) : getCustomArea)(areaNode);
            area.init == null || area.init();

            if (this.autoSpinAmountArea === null && area.autoSpinAreaType === (_crd && AutoSpinAreaType === void 0 ? (_reportPossibleCrUseOfAutoSpinAreaType({
              error: Error()
            }), AutoSpinAreaType) : AutoSpinAreaType).Auto) {
              this.autoSpinAmountArea = area;
            }

            if (area.autoSpinAreaType === (_crd && AutoSpinAreaType === void 0 ? (_reportPossibleCrUseOfAutoSpinAreaType({
              error: Error()
            }), AutoSpinAreaType) : AutoSpinAreaType).Condition) {
              area.onShowKeyboardCallback = this.showKeyboard.bind(this);
            }

            this.areaContentLayout.addChild(areaNode);
            this.customAreas.push(area);
          });
        }

        setKeyboardBtnEvent() {
          this.setKeyDot();
          const keyboardDataList = [(_crd && KeyboardData === void 0 ? (_reportPossibleCrUseOfKeyboardData({
            error: Error()
          }), KeyboardData) : KeyboardData).KEY_0, (_crd && KeyboardData === void 0 ? (_reportPossibleCrUseOfKeyboardData({
            error: Error()
          }), KeyboardData) : KeyboardData).KEY_1, (_crd && KeyboardData === void 0 ? (_reportPossibleCrUseOfKeyboardData({
            error: Error()
          }), KeyboardData) : KeyboardData).KEY_2, (_crd && KeyboardData === void 0 ? (_reportPossibleCrUseOfKeyboardData({
            error: Error()
          }), KeyboardData) : KeyboardData).KEY_3, (_crd && KeyboardData === void 0 ? (_reportPossibleCrUseOfKeyboardData({
            error: Error()
          }), KeyboardData) : KeyboardData).KEY_4, (_crd && KeyboardData === void 0 ? (_reportPossibleCrUseOfKeyboardData({
            error: Error()
          }), KeyboardData) : KeyboardData).KEY_5, (_crd && KeyboardData === void 0 ? (_reportPossibleCrUseOfKeyboardData({
            error: Error()
          }), KeyboardData) : KeyboardData).KEY_6, (_crd && KeyboardData === void 0 ? (_reportPossibleCrUseOfKeyboardData({
            error: Error()
          }), KeyboardData) : KeyboardData).KEY_7, (_crd && KeyboardData === void 0 ? (_reportPossibleCrUseOfKeyboardData({
            error: Error()
          }), KeyboardData) : KeyboardData).KEY_8, (_crd && KeyboardData === void 0 ? (_reportPossibleCrUseOfKeyboardData({
            error: Error()
          }), KeyboardData) : KeyboardData).KEY_9, (_crd && KeyboardData === void 0 ? (_reportPossibleCrUseOfKeyboardData({
            error: Error()
          }), KeyboardData) : KeyboardData).KEY_DELETE, (_crd && KeyboardData === void 0 ? (_reportPossibleCrUseOfKeyboardData({
            error: Error()
          }), KeyboardData) : KeyboardData).KEY_DOT, (_crd && KeyboardData === void 0 ? (_reportPossibleCrUseOfKeyboardData({
            error: Error()
          }), KeyboardData) : KeyboardData).KEY_FINISH];
          const keyboardBtns = this.keyboardBtnRootNode.getComponentsInChildren(Button);
          keyboardBtns.forEach((btn, index) => {
            (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).addEventHandlerToButton(btn.node, this, 'onKeyboardBtnClick', keyboardDataList[index]);

            if (keyboardDataList[index] === (_crd && KeyboardData === void 0 ? (_reportPossibleCrUseOfKeyboardData({
              error: Error()
            }), KeyboardData) : KeyboardData).KEY_DOT) {
              btn.node.getComponentInChildren(Label).string = (_crd && KeyboardData === void 0 ? (_reportPossibleCrUseOfKeyboardData({
                error: Error()
              }), KeyboardData) : KeyboardData).KEY_DOT;
            }
          });
        }

        setKeyDot() {
          if ((_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
            error: Error()
          }), GameSetting) : GameSetting).shouldSwapThousandAndDecimalSeparators) {
            KeyboardData.KEY_DOT = ',';
          }
        }

        showKeyboard(selectedConditionArea) {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
            error: Error()
          }), GenericSound) : GenericSound).Public_On);
          this.keyboardRefNode.active = true;
          this.selectedConditionArea = selectedConditionArea;
          this.calculateKeyboardPosition();
          const isDark = this.selectedConditionArea.selectedLine.isThresholdMaxLength();
          this.setKeyboardDarkLabel(isDark);
        }

        calculateKeyboardPosition() {
          if (!this.selectedConditionArea) {
            return;
          }

          const worldPosition = this.selectedConditionArea.selectedLine.getThresholdLabelWorldPosition();
          const heightThreshold = view.getDesignResolutionSize().height / 2 * 0.6;
          const realY = worldPosition.y < heightThreshold ? worldPosition.y + 100 : worldPosition.y - 100;
          this.keyboardNode.setWorldPosition(this.keyboardNode.worldPosition.x, realY, 0);
        }

        onKeyboardBtnClick(event, customData) {
          if (customData !== (_crd && KeyboardData === void 0 ? (_reportPossibleCrUseOfKeyboardData({
            error: Error()
          }), KeyboardData) : KeyboardData).KEY_FINISH) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
              error: Error()
            }), GenericSound) : GenericSound).Public_On);
            this.selectedConditionArea.selectedLine.onKeyboardBtnClick(customData);
            const isDark = this.selectedConditionArea.selectedLine.isThresholdMaxLength();
            this.setKeyboardDarkLabel(isDark);
          } else {
            this.onKeyboardFinishClick();
          }
        }

        onKeyboardFinishClick() {
          var _this$checkConditionV;

          this.selectedConditionArea.selectedLine.onKeyboardFinishClick();

          if ((_this$checkConditionV = this.checkConditionValid) != null && _this$checkConditionV.call(this, this.selectedConditionArea.selectedLine)) {
            this.selectedConditionArea.selectedLine.enableCheckWhenValidInput();
          } else {
            this.selectedConditionArea.selectedLine.disableCheck();
          }

          this.hideKeyboard();
        }

        setKeyboardDarkLabel(isDark) {
          const keyBoardLabels = this.keyboardBtnRootNode.getComponentsInChildren(Label);
          const lightness = isDark ? 127 : 255;
          keyBoardLabels.forEach(label => {
            if (label.string && /^[0-9,.]$/.test(label.string)) {
              label.color = color(lightness, lightness, lightness);
            }
          });
        }
        /**
         * 獲取所有區塊的自訂資料
         * @returns 所有區塊自訂資料陣列 (按區塊順序排序)
         */


        getAreasCustomData() {
          const autoSpinAreaSelections = [];
          this.customAreas.forEach(area => {
            if (area.node.active) {
              const customData = area.getCustomData();
              autoSpinAreaSelections.push(customData);
            }
          });
          return autoSpinAreaSelections;
        }
        /**
         * 回傳自訂遊戲資料是否滿足任意一項自動停止條件
         * @param context 自訂資料物件
         * @returns true: 其中一項條件滿足 false: 所有條件都不滿足 
         */


        isMeetsAnyStopCondition(context) {
          const conditionAreas = this.customAreas.filter(area => area.autoSpinAreaType === (_crd && AutoSpinAreaType === void 0 ? (_reportPossibleCrUseOfAutoSpinAreaType({
            error: Error()
          }), AutoSpinAreaType) : AutoSpinAreaType).Condition);
          return conditionAreas.some(conditionArea => conditionArea.isMeetsAnyStopCondition(context));
        }

        disableConditionLines(autoAreaIndex, shouldCloseConditionIndexes) {
          this.customAreas[autoAreaIndex].disableConditionLines(shouldCloseConditionIndexes);
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "startBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "areaContentLayout", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spinBtnAnimation", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "startBtnAnimation", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "keyboardRefNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "keyboardNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "keyboardBgBtn", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "keyboardBtnRootNode", [_dec11], {
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
//# sourceMappingURL=bb88462f9f65d5f3d331ae4999e4264a45258b84.js.map