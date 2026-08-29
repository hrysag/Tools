System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, UniMovement, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, UniIconBase;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUniMovement(extras) {
    _reporterNs.report("UniMovement", "./Movement/UniMovement", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolBase(extras) {
    _reporterNs.report("SymbolBase", "./Interface/SymbolBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
    }, function (_unresolved_2) {
      UniMovement = _unresolved_2.UniMovement;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "37bf4bCVXhC9IAYFvj+aDWf", "UniIconBase", undefined);

      __checkObsolete__(['_decorator', 'CCInteger']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UniIconBase", UniIconBase = (_dec = ccclass('UniIconBase'), _dec2 = property({
        type: CCInteger,
        visible: true,
        readonly: true
      }), _dec(_class = (_class2 = class UniIconBase extends (_crd && UniMovement === void 0 ? (_reportPossibleCrUseOfUniMovement({
        error: Error()
      }), UniMovement) : UniMovement) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_siblingIndex", _descriptor, this);

          this._symbol = void 0;
          this._lastSiblingIndex = 0;
        }

        set siblingIndex(index) {
          this._lastSiblingIndex = index;
          this._siblingIndex = index;
          this.node.setSiblingIndex(index);
        }

        get siblingIndex() {
          return this._siblingIndex;
        }

        get symbol() {
          return this._symbol;
        }

        set symbol(value) {
          this._symbol = value;
        }

        get lastSiblingIndex() {
          return this._lastSiblingIndex;
        }

        init() {
          this.siblingIndex = this.node.getSiblingIndex();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_siblingIndex", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c5a8bed031948f61feedac4c425610ddad512ca0.js.map