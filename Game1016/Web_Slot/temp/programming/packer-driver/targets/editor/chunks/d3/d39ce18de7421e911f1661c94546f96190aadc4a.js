System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Enum, Label, Node, Sprite, Toggle, Utility, StringExt, KeyboardData, GenericUIRes, AutoSpinSelectButton, GenericSound, AudioManager, ConditionLineData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class4, _crd, ccclass, property, ConditionType, ConditionLine;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConditionContext(extras) {
    _reporterNs.report("ConditionContext", "./ConditionContext", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../../../../Utils/Core", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStringExt(extras) {
    _reporterNs.report("StringExt", "../../../../Utils/Core", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeyboardData(extras) {
    _reporterNs.report("KeyboardData", "./Enum/KeyboardData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUIRes(extras) {
    _reporterNs.report("GenericUIRes", "../../Scripts/GenericUIRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoSpinSelectButton(extras) {
    _reporterNs.report("AutoSpinSelectButton", "./AutoSpinSelectButton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericSound(extras) {
    _reporterNs.report("GenericSound", "../../../Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/Utils/Audio", _context.meta, extras);
  }

  _export("ConditionLineData", void 0);

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
      Enum = _cc.Enum;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      Utility = _unresolved_2.Utility;
      StringExt = _unresolved_2.StringExt;
    }, function (_unresolved_3) {
      KeyboardData = _unresolved_3.KeyboardData;
    }, function (_unresolved_4) {
      GenericUIRes = _unresolved_4.GenericUIRes;
    }, function (_unresolved_5) {
      AutoSpinSelectButton = _unresolved_5.AutoSpinSelectButton;
    }, function (_unresolved_6) {
      GenericSound = _unresolved_6.GenericSound;
    }, function (_unresolved_7) {
      AudioManager = _unresolved_7.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca38e3HuyBHl734UJrjC97H", "ConditionLine", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Enum', 'Label', 'Node', 'Sprite', 'Toggle', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator); // 條件類型

      _export("ConditionType", ConditionType = /*#__PURE__*/function (ConditionType) {
        ConditionType[ConditionType["Equal"] = 0] = "Equal";
        ConditionType[ConditionType["GreaterThan"] = 1] = "GreaterThan";
        ConditionType[ConditionType["GreaterThanOrEqualTo"] = 2] = "GreaterThanOrEqualTo";
        ConditionType[ConditionType["LessThan"] = 3] = "LessThan";
        ConditionType[ConditionType["LessThanOrEqualTo"] = 4] = "LessThanOrEqualTo";
        ConditionType[ConditionType["IsTrue"] = 5] = "IsTrue";
        ConditionType[ConditionType["IsFalse"] = 6] = "IsFalse";
        return ConditionType;
      }({}));

      _export("ConditionLineData", ConditionLineData = class ConditionLineData {
        constructor() {
          this.enable = void 0;
          this.targetAttributeKey = void 0;
          this.conditionType = void 0;
          this.threshold = void 0;
        }

      });

      _export("ConditionLine", ConditionLine = (_dec = ccclass('ConditionLine'), _dec2 = property(Toggle), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property({
        displayName: '比較數值最大長度'
      }), _dec6 = property({
        displayName: '比較數值顯示 × 前綴'
      }), _dec7 = property({
        displayName: '比較數值使用千分位分隔'
      }), _dec8 = property({
        displayName: '比較屬性名稱'
      }), _dec9 = property({
        type: Enum(ConditionType),
        displayName: '比較類型'
      }), _dec(_class2 = (_class3 = (_class4 = class ConditionLine extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "checkbox", _descriptor, this);

          _initializerDefineProperty(this, "thresholdBtn", _descriptor2, this);

          _initializerDefineProperty(this, "thresholdLabel", _descriptor3, this);

          _initializerDefineProperty(this, "thresholdMaxLength", _descriptor4, this);

          _initializerDefineProperty(this, "addPrefixX", _descriptor5, this);

          // 預設不顯示 × 前綴
          _initializerDefineProperty(this, "useNumberComma", _descriptor6, this);

          // 預設使用千分位分隔
          _initializerDefineProperty(this, "targeAttributeKey", _descriptor7, this);

          _initializerDefineProperty(this, "conditionType", _descriptor8, this);

          this.onShowKeyboardCallback = null;
          this.pureString = '';
          this.canShowKeyboard = true;
        }

        init() {
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToToggle(this.checkbox.node, this, 'onCheckboxClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.thresholdBtn, this, 'onThresholdBtnClick');

          if (this.isValidThresholdString()) {
            this.pureString = this.thresholdLabel.string;
          } else {
            this.pureString = '0';
          }

          this.setThresholdLabelString();
          this.checkbox.getComponent(_crd && AutoSpinSelectButton === void 0 ? (_reportPossibleCrUseOfAutoSpinSelectButton({
            error: Error()
          }), AutoSpinSelectButton) : AutoSpinSelectButton).setNormalStatus();
          this.thresholdBtn.getComponent(_crd && AutoSpinSelectButton === void 0 ? (_reportPossibleCrUseOfAutoSpinSelectButton({
            error: Error()
          }), AutoSpinSelectButton) : AutoSpinSelectButton).setNormalStatus();
        }

        setThresholdLabelString() {
          let result = '';

          if (this.useNumberComma) {
            const dotChar = (_crd && KeyboardData === void 0 ? (_reportPossibleCrUseOfKeyboardData({
              error: Error()
            }), KeyboardData) : KeyboardData).KEY_DOT;
            const intergerPart = this.pureString.split(dotChar)[0];
            const decimalPart = this.pureString.split(dotChar)[1];
            const hasDot = this.pureString.includes(dotChar);
            const commaInterger = Number(intergerPart).numberComma();
            result = `${commaInterger}${hasDot ? dotChar : ''}${decimalPart || ''}`;
          } else {
            result = this.pureString;
          }

          this.thresholdLabel.string = this.addPrefixX ? `×${result}` : result;
        }

        onCheckboxClick() {
          if (this.checkbox.isChecked) {
            this.checkbox.getComponent(_crd && AutoSpinSelectButton === void 0 ? (_reportPossibleCrUseOfAutoSpinSelectButton({
              error: Error()
            }), AutoSpinSelectButton) : AutoSpinSelectButton).setSelectedStatus();

            if (this.needShowKeyboard()) {
              this.showKeyboard();
            } else {
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
                error: Error()
              }), GenericSound) : GenericSound).Public_On);
            }
          } else {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
              error: Error()
            }), GenericSound) : GenericSound).Public_Off);
            this.checkbox.getComponent(_crd && AutoSpinSelectButton === void 0 ? (_reportPossibleCrUseOfAutoSpinSelectButton({
              error: Error()
            }), AutoSpinSelectButton) : AutoSpinSelectButton).setNormalStatus();
          }
        }

        needShowKeyboard() {
          return this.canShowKeyboard && this.conditionType !== ConditionType.IsTrue && this.conditionType !== ConditionType.IsFalse;
        }

        onThresholdBtnClick() {
          this.showKeyboard();
        }

        showKeyboard() {
          var _this$onShowKeyboardC;

          this.thresholdBtn.getComponent(Button).transition = Button.Transition.NONE;
          this.thresholdBtn.getComponent(Sprite).spriteFrame = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
            error: Error()
          }), GenericUIRes) : GenericUIRes).instance.autoFormBtnHold;
          (_this$onShowKeyboardC = this.onShowKeyboardCallback) == null || _this$onShowKeyboardC.call(this, this);
        }

        isValidThresholdString() {
          const string = this.thresholdLabel.string;
          const toNumberResult = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(string);
          const isValid = toNumberResult[0];
          const nonMinusNumber = toNumberResult[1] >= 0;
          return string.length > 0 && isValid && nonMinusNumber;
        }
        /**
         * 檢查自訂物件資料是否符合停止條件
         * @param context 自訂物件資料，將判斷所需資料包裝成物件後傳入
         * @returns 
         */


        isMeetsStopConditionWithChecked(context) {
          return this.checkbox.isChecked && this.isMeetsStopCondition(context);
        }

        isMeetsStopCondition(context) {
          const threshold = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(this.pureString)[1];
          const target = context[this.targeAttributeKey];
          const evaluator = ConditionLine.Evaluator[this.conditionType];
          if (!evaluator) throw new Error(`Unknown operator: ${this.conditionType}`);
          return evaluator(target, threshold);
        } // 條件判斷式
        // target: 資料值，由外部傳入
        // threshold: 目標值，可在組件裡設定


        getConditionLineData() {
          const conditionLineData = new ConditionLineData();
          conditionLineData.enable = this.checkbox.isChecked;
          conditionLineData.targetAttributeKey = this.targeAttributeKey;
          conditionLineData.conditionType = this.conditionType;

          if (this.conditionType === ConditionType.IsTrue) {
            conditionLineData.threshold = true;
          } else if (this.conditionType === ConditionType.IsFalse) {
            conditionLineData.threshold = false;
          } else {
            conditionLineData.threshold = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
              error: Error()
            }), StringExt) : StringExt).ToNumber(this.pureString)[1];
          }

          return conditionLineData;
        }

        onKeyboardBtnClick(customData) {
          var _this$pureString$matc;

          const numberDigit = ((_this$pureString$matc = this.pureString.match(/\d/g)) == null ? void 0 : _this$pureString$matc.length) || 0;

          if (customData === (_crd && KeyboardData === void 0 ? (_reportPossibleCrUseOfKeyboardData({
            error: Error()
          }), KeyboardData) : KeyboardData).KEY_DELETE) {
            if (this.pureString.length > 0) {
              this.pureString = this.pureString.slice(0, -1);
            }

            if (this.pureString.length === 0) {
              this.pureString = '0';
            }
          } else if (numberDigit < this.thresholdMaxLength) {
            const dotChar = (_crd && KeyboardData === void 0 ? (_reportPossibleCrUseOfKeyboardData({
              error: Error()
            }), KeyboardData) : KeyboardData).KEY_DOT;

            if (customData === dotChar) {
              if (!this.pureString.includes(dotChar)) {
                this.pureString += dotChar;
              }
            } else if (this.pureString === '0') {
              this.pureString = customData;
            } else {
              this.pureString += customData;
            }
          }

          this.setThresholdLabelString();
        }

        isThresholdMaxLength() {
          var _this$pureString$matc2;

          const numberDigit = ((_this$pureString$matc2 = this.pureString.match(/\d/g)) == null ? void 0 : _this$pureString$matc2.length) || 0;
          return numberDigit >= this.thresholdMaxLength;
        }

        onKeyboardFinishClick() {
          this.thresholdBtn.getComponent(Button).transition = Button.Transition.SPRITE;
          this.thresholdBtn.getComponent(Sprite).spriteFrame = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
            error: Error()
          }), GenericUIRes) : GenericUIRes).instance.autoFormBtnNormal; // 小數點號結尾時移除掉小數點

          if (this.pureString.endsWith((_crd && KeyboardData === void 0 ? (_reportPossibleCrUseOfKeyboardData({
            error: Error()
          }), KeyboardData) : KeyboardData).KEY_DOT)) {
            this.pureString = this.pureString.slice(0, -1);
            this.setThresholdLabelString();
          }
        }

        enableCheckWhenValidInput() {
          // 輸入框有數字時自動勾選
          if (this.pureString !== '0') {
            this.canShowKeyboard = false;
            this.checkbox.isChecked = true; // 會觸發 onCheckboxClick 事件

            this.canShowKeyboard = true;
          }
        }

        disableCheck() {
          this.checkbox.isChecked = false;
        }

        getThresholdLabelWorldPosition() {
          return this.thresholdBtn.getWorldPosition();
        }

      }, _class4.Evaluator = {
        [ConditionType.Equal]: (target, threshold) => target === threshold,
        [ConditionType.GreaterThan]: (target, threshold) => target > threshold,
        [ConditionType.GreaterThanOrEqualTo]: (target, threshold) => target >= threshold,
        [ConditionType.LessThan]: (target, threshold) => target < threshold,
        [ConditionType.LessThanOrEqualTo]: (target, threshold) => target <= threshold,
        [ConditionType.IsTrue]: target => !!target,
        [ConditionType.IsFalse]: target => !target
      }, _class4), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "checkbox", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "thresholdBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "thresholdLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "thresholdMaxLength", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "addPrefixX", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, "useNumberComma", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class3.prototype, "targeAttributeKey", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class3.prototype, "conditionType", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return ConditionType.Equal;
        }
      })), _class3)) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d39ce18de7421e911f1661c94546f96190aadc4a.js.map