System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, find, Node, Utility, NumberSelectBtn, AudioManager, GenericSound, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, AUTO_INFINITY_NUMBER, ccclass, property, AUTO_VALUE_LIST, AUTO_VALUE_LENGTH, AutoSpinSelectUI;

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
    }, function (_unresolved_2) {
      Utility = _unresolved_2.Utility;
    }, function (_unresolved_3) {
      NumberSelectBtn = _unresolved_3.NumberSelectBtn;
    }, function (_unresolved_4) {
      AudioManager = _unresolved_4.AudioManager;
    }, function (_unresolved_5) {
      GenericSound = _unresolved_5.GenericSound;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "828f2bIq7BCX53Y6FL1JmAH", "AutoSpinSelectUI", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'find', 'Node']);

      _export("AUTO_INFINITY_NUMBER", AUTO_INFINITY_NUMBER = 9999);

      ({
        ccclass,
        property
      } = _decorator);
      AUTO_VALUE_LIST = [10, 25, 50, 100, 250, 500, 750, 1000, AUTO_INFINITY_NUMBER];
      AUTO_VALUE_LENGTH = 9;

      _export("AutoSpinSelectUI", AutoSpinSelectUI = (_dec = ccclass('AutoSpinSelectUI'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class AutoSpinSelectUI extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "maskBG", _descriptor, this);

          _initializerDefineProperty(this, "closeBtn", _descriptor2, this);

          _initializerDefineProperty(this, "startBtn", _descriptor3, this);

          _initializerDefineProperty(this, "bgBtn", _descriptor4, this);

          _initializerDefineProperty(this, "numberSelectBtnGroup", _descriptor5, this);

          this.numberSelectBtn = new Array(9);
          this.selectedID = 8;
          this.onStartBtnClickCallback = null;
          this.onUIActiveChange = null;
          this.onBGBtnClickCallback = null;

          this.onCloseBtnClick = () => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
              error: Error()
            }), GenericSound) : GenericSound).Public_Off);
            this.hideUI();
          };

          this.onAutoSelectBtnClick = (event, customEventData) => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
              error: Error()
            }), GenericSound) : GenericSound).Public_Choice);
            var id = parseInt(customEventData);
            this.setSelectedBtn(id);
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
          }), Utility) : Utility).addEventHandlerToButton(this.startBtn, this, 'onStartBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.bgBtn, this, 'onBGBtnClick');

          for (var i = 0; i < AUTO_VALUE_LENGTH; i++) {
            this.numberSelectBtn[i] = find("NumberSelectBtn_" + i, this.numberSelectBtnGroup).getComponent(Button);
            this.numberSelectBtn[i].getComponent(_crd && NumberSelectBtn === void 0 ? (_reportPossibleCrUseOfNumberSelectBtn({
              error: Error()
            }), NumberSelectBtn) : NumberSelectBtn).init();
            this.numberSelectBtn[i].getComponent(_crd && NumberSelectBtn === void 0 ? (_reportPossibleCrUseOfNumberSelectBtn({
              error: Error()
            }), NumberSelectBtn) : NumberSelectBtn).setLabel(AUTO_VALUE_LIST[i].toString());
            (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).addEventHandlerToButton(this.numberSelectBtn[i].node, this, 'onAutoSelectBtnClick', i.toString());
          }

          this.setSelectedBtn(this.selectedID);
        }

        setSelectedBtn(id) {
          this.selectedID = id;

          for (var i = 0; i < AUTO_VALUE_LENGTH; i++) {
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

        onStartBtnClick() {
          var _this$onStartBtnClick;

          (_this$onStartBtnClick = this.onStartBtnClickCallback) == null || _this$onStartBtnClick.call(this, AUTO_VALUE_LIST[this.selectedID]);
        }

        onBGBtnClick() {
          var _this$onBGBtnClickCal;

          (_this$onBGBtnClickCal = this.onBGBtnClickCallback) == null || _this$onBGBtnClickCal.call(this);
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bgBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "numberSelectBtnGroup", [_dec6], {
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
//# sourceMappingURL=f5c49efedd7b500aa9be551e8805fa1dee01d9c9.js.map