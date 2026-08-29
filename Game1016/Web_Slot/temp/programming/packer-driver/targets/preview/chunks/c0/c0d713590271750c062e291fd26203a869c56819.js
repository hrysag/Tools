System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Enum, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, SymbolEventType, SymbolEvent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Enum = _cc.Enum;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1ef7fn0f0pJRZSFQA3sTYf3", "SymbolEvent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Enum', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SymbolEventType", SymbolEventType = /*#__PURE__*/function (SymbolEventType) {
        SymbolEventType[SymbolEventType["OnBounceMax"] = 0] = "OnBounceMax";
        SymbolEventType[SymbolEventType["ReadyHand"] = 1] = "ReadyHand";
        SymbolEventType[SymbolEventType["RollEnd"] = 2] = "RollEnd";
        SymbolEventType[SymbolEventType["Connect"] = 3] = "Connect";
        SymbolEventType[SymbolEventType["Default"] = 4] = "Default";
        return SymbolEventType;
      }({}));

      _export("SymbolEvent", SymbolEvent = (_dec = ccclass('SymbolEvent'), _dec2 = property({
        type: Enum(SymbolEventType),
        displayName: '事件類型'
      }), _dec3 = property({
        displayName: '動畫名稱'
      }), _dec(_class = (_class2 = class SymbolEvent {
        constructor() {
          _initializerDefineProperty(this, "eventType", _descriptor, this);

          _initializerDefineProperty(this, "animName", _descriptor2, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "eventType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SymbolEventType.Connect;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "animName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c0d713590271750c062e291fd26203a869c56819.js.map