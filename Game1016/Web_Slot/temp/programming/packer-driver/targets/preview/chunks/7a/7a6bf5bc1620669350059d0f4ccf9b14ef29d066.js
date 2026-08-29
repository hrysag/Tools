System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCString, error, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, PropertyTestButton;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "55206q0NzJL6phtt0dkDGHm", "PropertyTestButton", undefined);

      __checkObsolete__(['_decorator', 'CCString', 'error']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PropertyTestButton", PropertyTestButton = (_dec = ccclass('PropertyTestButton'), _dec2 = property({
        displayName: '執行方法'
      }), _dec3 = property({
        readonly: true,
        displayName: '方法名稱'
      }), _dec4 = property({
        displayName: '使用自訂參數'
      }), _dec5 = property({
        type: [CCString],
        displayName: '自訂參數',

        visible() {
          return this._useInspectorArgs;
        }

      }), _dec(_class = (_class2 = class PropertyTestButton {
        get runFunction() {
          return this._runFunction;
        }

        set runFunction(value) {
          if (this.targetComponent) {
            if (this.targetFunction) {
              if (this._useInspectorArgs) {
                var jsonString = ("[" + this.inspectorArgs.join(',') + "]").replace(/'/g, '"');
                var args = JSON.parse(jsonString);
                this.targetFunction.apply(this.targetComponent, args);
              } else {
                this.targetFunction.apply(this.targetComponent, this.propertyArgs);
              }
            } else if (value) {
              error('待執行方法不存在');
            }
          } else if (value) {
            error('執行 target 不存在');
          }
        }

        get useInspectorArgs() {
          return this._useInspectorArgs;
        }

        set useInspectorArgs(value) {
          this._useInspectorArgs = value;
          this.inspectorArgs = new Array(this.targetFunction.length).fill('');
        }

        constructor(functionName, propertyArgs, targetFunction, targetComponent) {
          this._runFunction = false;
          this.targetComponent = null;
          this.targetFunction = null;
          this.propertyArgs = [];

          _initializerDefineProperty(this, "functionName", _descriptor, this);

          this._useInspectorArgs = false;

          _initializerDefineProperty(this, "inspectorArgs", _descriptor2, this);

          this.functionName = functionName;
          this.propertyArgs = propertyArgs;
          this.targetFunction = targetFunction;
          this.targetComponent = targetComponent;
        }

      }, (_applyDecoratedDescriptor(_class2.prototype, "runFunction", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "runFunction"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "functionName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class2.prototype, "useInspectorArgs", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "useInspectorArgs"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "inspectorArgs", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7a6bf5bc1620669350059d0f4ccf9b14ef29d066.js.map