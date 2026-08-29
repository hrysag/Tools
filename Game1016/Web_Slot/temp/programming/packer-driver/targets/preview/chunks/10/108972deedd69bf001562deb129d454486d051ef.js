System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Enum, SpriteFrame, SlotRelayLang, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, LangKeyButtonFramePair;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSlotRelayLang(extras) {
    _reporterNs.report("SlotRelayLang", "./Config", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Enum = _cc.Enum;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      SlotRelayLang = _unresolved_2.SlotRelayLang;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cadc921kJFCr4A3N63dlcZN", "LangKeyButtonFramePair", undefined);

      __checkObsolete__(['_decorator', 'CCString', 'Component', 'Enum', 'Node', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LangKeyButtonFramePair", LangKeyButtonFramePair = (_dec = ccclass('LangKeyButtonFramePair'), _dec2 = property({
        displayName: "Key",
        type: Enum(_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
          error: Error()
        }), SlotRelayLang) : SlotRelayLang),
        serializable: true
      }), _dec3 = property({
        displayName: "NormalSpriteFrame",
        type: SpriteFrame,
        serializable: true
      }), _dec4 = property({
        displayName: "PressedSpriteFrame",
        type: SpriteFrame,
        serializable: true
      }), _dec5 = property({
        displayName: "HoverSpriteFrame",
        type: SpriteFrame,
        serializable: true
      }), _dec6 = property({
        displayName: "DisabledSpriteFrame",
        type: SpriteFrame,
        serializable: true
      }), _dec(_class = (_class2 = class LangKeyButtonFramePair {
        constructor() {
          _initializerDefineProperty(this, "lang", _descriptor, this);

          _initializerDefineProperty(this, "normalSpriteFrame", _descriptor2, this);

          _initializerDefineProperty(this, "pressedSpriteFrame", _descriptor3, this);

          _initializerDefineProperty(this, "hoverSpriteFrame", _descriptor4, this);

          _initializerDefineProperty(this, "disabledSpriteFrame", _descriptor5, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lang", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
            error: Error()
          }), SlotRelayLang) : SlotRelayLang).en;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "normalSpriteFrame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pressedSpriteFrame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hoverSpriteFrame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "disabledSpriteFrame", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=108972deedd69bf001562deb129d454486d051ef.js.map