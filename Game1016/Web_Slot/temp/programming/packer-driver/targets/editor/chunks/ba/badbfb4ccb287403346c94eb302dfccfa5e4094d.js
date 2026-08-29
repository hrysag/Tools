System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCString, error, warn, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _crd, ccclass, property, CustomTestButton;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCString = _cc.CCString;
      error = _cc.error;
      warn = _cc.warn;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2332eh2979HXK/VwCqYkYH0", "CustomTestButton", undefined);

      __checkObsolete__(['_decorator', 'CCString', 'error', 'warn']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CustomTestButton", CustomTestButton = (_dec = ccclass('CustomTestButton'), _dec2 = property({
        displayName: '執行方法'
      }), _dec3 = property({
        displayName: '方法名稱'
      }), _dec4 = property({
        type: [CCString],
        displayName: '參數'
      }), _dec(_class = (_class2 = class CustomTestButton {
        constructor() {
          this._runFunction = false;
          this._targetComponent = null;
          this._functionName = '';

          _initializerDefineProperty(this, "functionArgs", _descriptor, this);
        }

        get runFunction() {
          return this._runFunction;
        }

        set runFunction(value) {
          if (this._targetComponent) {
            const targetFunction = this._targetComponent[this.functionName];

            if (targetFunction) {
              const jsonString = `[${this.functionArgs.join(',')}]`.replace(/'/g, '"');
              const args = JSON.parse(jsonString);
              targetFunction.apply(this._targetComponent, args);
            } else {
              warn(`方法名稱不存在: ${this.functionName}`);
            }
          } else if (value) {
            error('錯誤，target 不存在');
          }
        }

        set targetComponent(target) {
          this._targetComponent = target;
        }

        get functionName() {
          return this._functionName;
        }

        set functionName(name) {
          this._functionName = name;

          if (name && this._targetComponent[name]) {
            this.functionArgs = new Array(this._targetComponent[name].length).fill('');
          } else {
            this.functionArgs.length = 0;
          }
        }

      }, (_applyDecoratedDescriptor(_class2.prototype, "runFunction", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "runFunction"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "functionName", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "functionName"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "functionArgs", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=badbfb4ccb287403346c94eb302dfccfa5e4094d.js.map