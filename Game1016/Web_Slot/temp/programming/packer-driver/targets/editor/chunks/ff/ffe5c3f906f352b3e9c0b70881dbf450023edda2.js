System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Color, Component, Label, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, SimpleUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Color = _cc.Color;
      Component = _cc.Component;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d011ctGvbBFRIUgstbVbIdl", "SimpleUI", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SimpleUI", SimpleUI = (_dec = ccclass('SimpleUI'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Button), _dec(_class = (_class2 = class SimpleUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spinBtn", _descriptor, this);

          _initializerDefineProperty(this, "autoBtn", _descriptor2, this);

          _initializerDefineProperty(this, "turboBtn", _descriptor3, this);

          this.onSpinBtnClickCallback = null;
          this.onAutoBtnClickCallback = null;
          this.onTurboBtnClickCallback = null;
          this.onStopBtnClickCallback = null;
          this.isTurbo = false;
          this.isAuto = false;
          this.isAutoSpin = false;
          this._isSpin = false;
        }

        set isSpin(value) {
          this._isSpin = value;
          this.updateSpinBtnText();
        }

        get isSpin() {
          return this._isSpin;
        }

        start() {
          this.spinBtn.node.on(Button.EventType.CLICK, this.onSpinBtnClick, this);
          this.autoBtn.node.on(Button.EventType.CLICK, this.onAutoBtnClick, this);
          this.turboBtn.node.on(Button.EventType.CLICK, this.onTurboBtnClick, this);
          this.updateSpinBtnText();
          this.updateAutoBtnColor();
          this.updateTurboBtnColor();
        }

        setNormalMode() {
          this.isAutoSpin = false;
          this.isSpin = false;
          this.autoBtn.interactable = true;
        }

        onSpinBtnClick() {
          var _this$onSpinBtnClickC;

          if (this.isSpin || this.isAutoSpin) {
            var _this$onStopBtnClickC;

            this.isSpin = false;
            (_this$onStopBtnClickC = this.onStopBtnClickCallback) == null || _this$onStopBtnClickC.call(this);
            return;
          }

          (_this$onSpinBtnClickC = this.onSpinBtnClickCallback) == null || _this$onSpinBtnClickC.call(this);
          this.isSpin = true;
          this.autoBtn.interactable = false;
        }

        onAutoBtnClick() {
          var _this$onAutoBtnClickC;

          this.isAuto = !this.isAuto;

          if (this.isAuto) {
            this.isAutoSpin = true;
          } else {
            this.autoBtn.interactable = false;
          }

          this.updateSpinBtnText();
          this.updateAutoBtnColor();
          (_this$onAutoBtnClickC = this.onAutoBtnClickCallback) == null || _this$onAutoBtnClickC.call(this);
        }

        onTurboBtnClick() {
          var _this$onTurboBtnClick;

          this.isTurbo = !this.isTurbo;
          this.updateTurboBtnColor();
          (_this$onTurboBtnClick = this.onTurboBtnClickCallback) == null || _this$onTurboBtnClick.call(this);
        }

        updateSpinBtnText() {
          let str = this.isSpin || this.isAutoSpin ? 'Stop' : 'Spin';
          this.spinBtn.getComponentInChildren(Label).string = str;
        }

        updateTurboBtnColor() {
          this.turboBtn.normalColor = this.isTurbo ? Color.RED : Color.WHITE;
          this.turboBtn.hoverColor = this.isTurbo ? Color.RED : Color.GRAY;
          this.turboBtn.pressedColor = this.isTurbo ? Color.RED : Color.WHITE;
          this.turboBtn.disabledColor = this.isTurbo ? Color.RED : Color.GRAY;
        }

        updateAutoBtnColor() {
          this.autoBtn.normalColor = this.isAuto ? Color.RED : Color.WHITE;
          this.autoBtn.hoverColor = this.isAuto ? Color.RED : Color.GRAY;
          this.autoBtn.pressedColor = this.isAuto ? Color.RED : Color.WHITE;
          this.autoBtn.disabledColor = this.isAuto ? Color.RED : Color.GRAY;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spinBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "autoBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "turboBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ffe5c3f906f352b3e9c0b70881dbf450023edda2.js.map