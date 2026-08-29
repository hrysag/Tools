System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, CCBoolean, Component, Enum, Input, input, KeyCode, GameSetting, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, requireComponent, ButtonKeyboardTrigger;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameSetting(extras) {
    _reporterNs.report("GameSetting", "./GameSetting", _context.meta, extras);
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
      CCBoolean = _cc.CCBoolean;
      Component = _cc.Component;
      Enum = _cc.Enum;
      Input = _cc.Input;
      input = _cc.input;
      KeyCode = _cc.KeyCode;
    }, function (_unresolved_2) {
      GameSetting = _unresolved_2.GameSetting;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3283aqFBh5DGbqrzjWb/eUU", "ButtonKeyboardTrigger", undefined);

      __checkObsolete__(['_decorator', 'Button', 'CCBoolean', 'Component', 'Enum', 'EventKeyboard', 'Input', 'input', 'KeyCode', 'Node']);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("ButtonKeyboardTrigger", ButtonKeyboardTrigger = (_dec = ccclass('ButtonKeyboardTrigger'), _dec2 = requireComponent(Button), _dec3 = property(CCBoolean), _dec4 = property({
        type: Enum(KeyCode)
      }), _dec(_class = _dec2(_class = (_class2 = class ButtonKeyboardTrigger extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "triggerActive", _descriptor, this);

          // 是否啟用觸發
          _initializerDefineProperty(this, "keyCodeArray", _descriptor2, this);

          this.enableLock = true;
        }

        start() {
          input.on(Input.EventType.KEY_PRESSING, this.onKeyBoardEvent, this);
          input.on(Input.EventType.KEY_DOWN, this.onKeyBoardEvent, this);
        }

        onKeyBoardEvent(event) {
          if (this.enableLock) {
            return;
          }

          if ((_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
            error: Error()
          }), GameSetting) : GameSetting).keyboardLock) {
            return; // 如果鍵盤被鎖定，則不執行任何操作
          }

          if (!this.triggerActive) {
            return; // 如果觸發被禁用，則不執行任何操作
          }

          let btn = this.getComponent(Button);

          if (this.node.activeInHierarchy && btn.enabled && btn.interactable && this.enabled) {
            if (this.keyCodeArray.includes(event.keyCode)) {
              this.getComponent(Button).emitEvents(); // 觸發按鈕事件
            }
          }
        }

        onEnable() {
          this.enableLock = true; // 設置冷卻鎖定，防止重複觸發

          this.scheduleOnce(() => {
            this.enableLock = false; // 在一段時間後解除冷卻鎖
          }); // 0.1秒後解除冷卻鎖
        }

        setTriggerActive(active) {
          this.triggerActive = active; // 設置觸發是否啟用
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "triggerActive", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "keyCodeArray", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=76aacf028a07d431fc4357634a26d497d7717f2d.js.map