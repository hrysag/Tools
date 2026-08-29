System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Prefab, SpriteFrame, SymbolEvent, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, SymbolData;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSymbolEvent(extras) {
    _reporterNs.report("SymbolEvent", "./SymbolEvent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Prefab = _cc.Prefab;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      SymbolEvent = _unresolved_2.SymbolEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ba843sEFI5Gm67jqs6CZFiJ", "SymbolData", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SymbolData", SymbolData = (_dec = ccclass('SymbolData'), _dec2 = property({
        type: SpriteFrame,
        displayName: '模糊圖'
      }), _dec3 = property({
        type: Prefab,
        displayName: 'prefab'
      }), _dec4 = property({
        displayName: '是否是scatter'
      }), _dec5 = property({
        type: _crd && SymbolEvent === void 0 ? (_reportPossibleCrUseOfSymbolEvent({
          error: Error()
        }), SymbolEvent) : SymbolEvent,
        displayName: '事件列表'
      }), _dec(_class = (_class2 = class SymbolData {
        constructor() {
          _initializerDefineProperty(this, "blurSpriteFrame", _descriptor, this);

          _initializerDefineProperty(this, "prefab", _descriptor2, this);

          _initializerDefineProperty(this, "isScatter", _descriptor3, this);

          _initializerDefineProperty(this, "eventList", _descriptor4, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "blurSpriteFrame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isScatter", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "eventList", [_dec5], {
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
//# sourceMappingURL=278b4b4c87d9d344cf0bc4850e60138a888274c7.js.map