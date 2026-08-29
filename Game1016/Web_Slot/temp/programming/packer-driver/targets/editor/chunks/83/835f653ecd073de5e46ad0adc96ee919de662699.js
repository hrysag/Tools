System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, autoTestRegistry, PropertyTestButton, CustomTestButton, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, TestScriptUnit;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfautoTestRegistry(extras) {
    _reporterNs.report("autoTestRegistry", "./TestableFunction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropertyTestButton(extras) {
    _reporterNs.report("PropertyTestButton", "./PropertyTestButton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCustomTestButton(extras) {
    _reporterNs.report("CustomTestButton", "./CustomTestButton", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      autoTestRegistry = _unresolved_2.autoTestRegistry;
    }, function (_unresolved_3) {
      PropertyTestButton = _unresolved_3.PropertyTestButton;
    }, function (_unresolved_4) {
      CustomTestButton = _unresolved_4.CustomTestButton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eb6edtDMK9EqY8zljDiZXGQ", "TestScriptUnit", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TestScriptUnit", TestScriptUnit = (_dec = ccclass('TestScriptUnit'), _dec2 = property({
        displayName: '組件名稱',
        readonly: true
      }), _dec3 = property({
        type: [_crd && PropertyTestButton === void 0 ? (_reportPossibleCrUseOfPropertyTestButton({
          error: Error()
        }), PropertyTestButton) : PropertyTestButton],
        displayName: '裝飾器方法列表',
        readonly: true
      }), _dec4 = property({
        type: [_crd && CustomTestButton === void 0 ? (_reportPossibleCrUseOfCustomTestButton({
          error: Error()
        }), CustomTestButton) : CustomTestButton],
        displayName: '自訂方法列表'
      }), _dec5 = property({
        type: [_crd && CustomTestButton === void 0 ? (_reportPossibleCrUseOfCustomTestButton({
          error: Error()
        }), CustomTestButton) : CustomTestButton],
        displayName: '自訂方法列表'
      }), _dec(_class = (_class2 = class TestScriptUnit {
        constructor() {
          _initializerDefineProperty(this, "componentNameInput", _descriptor, this);

          _initializerDefineProperty(this, "propertyTestButtons", _descriptor2, this);

          _initializerDefineProperty(this, "_customTestButtons", _descriptor3, this);

          this._targetComponent = null;
        }

        get customTestButtons() {
          return this._customTestButtons;
        }

        set customTestButtons(testButtons) {
          if (this._customTestButtons.length !== testButtons.length) {
            this._customTestButtons = testButtons;
            this.setCustomTestButtonsTarget();
          }
        }

        set targetComponent(component) {
          this._targetComponent = component;
          this.componentNameInput = component.constructor.name;
          this.updatePropertyTestButtons();
        }
        /**
          * 更新 @TestableFunction 裝飾器標記的測試按鈕列表
          */


        updatePropertyTestButtons() {
          this.propertyTestButtons.length = 0;
          const component = this._targetComponent;
          const registry = (_crd && autoTestRegistry === void 0 ? (_reportPossibleCrUseOfautoTestRegistry({
            error: Error()
          }), autoTestRegistry) : autoTestRegistry).get(component.constructor);
          if (!registry) return;

          for (const entry of registry) {
            const testFunction = component[entry.name];
            const newTestButton = new (_crd && PropertyTestButton === void 0 ? (_reportPossibleCrUseOfPropertyTestButton({
              error: Error()
            }), PropertyTestButton) : PropertyTestButton)(entry.name, entry.args, testFunction, component);
            this.propertyTestButtons.push(newTestButton);
          }
        }
        /**
         * 設置自訂測試按鈕的執行 target
         */


        setCustomTestButtonsTarget() {
          this.customTestButtons.forEach(testButton => {
            testButton.targetComponent = this._targetComponent;
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "componentNameInput", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "propertyTestButtons", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_customTestButtons", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "customTestButtons", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "customTestButtons"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=835f653ecd073de5e46ad0adc96ee919de662699.js.map