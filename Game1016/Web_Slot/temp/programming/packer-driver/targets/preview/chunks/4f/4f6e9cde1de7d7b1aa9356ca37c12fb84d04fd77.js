System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AnimationPrefabPropertyDef, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, PrefabAdapter;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAnimationPrefabPropertyDef(extras) {
    _reporterNs.report("AnimationPrefabPropertyDef", "../AnimationSystemV2/Definitions/AnimationPrefabPropertyDef", _context.meta, extras);
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
      AnimationPrefabPropertyDef = _unresolved_2.AnimationPrefabPropertyDef;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "23a53T9MPFAJIbWvI7Wm6l1", "PrefabAdapter", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);
      /**.
       * 就算沒有繼承component但是你不這樣寫你透過其他的Component在編輯器裡面會找不到!
       * 所以還是乖乖繼承component吧.雖然很幹
       */

      _export("PrefabAdapter", PrefabAdapter = (_dec = ccclass('PrefabAdapter'), _dec2 = property({
        type: [_crd && AnimationPrefabPropertyDef === void 0 ? (_reportPossibleCrUseOfAnimationPrefabPropertyDef({
          error: Error()
        }), AnimationPrefabPropertyDef) : AnimationPrefabPropertyDef],
        visible: true,
        displayName: 'Prefab List',
        tooltip: '塞入尚未實體化的prefab,依照key當作索引'
      }), _dec(_class = (_class2 = class PrefabAdapter {
        constructor() {
          _initializerDefineProperty(this, "_prefabForPropertyList", _descriptor, this);
        }

        get prefabForPropertyList() {
          return this._prefabForPropertyList;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_prefabForPropertyList", [_dec2], {
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
//# sourceMappingURL=4f6e9cde1de7d7b1aa9356ca37c12fb84d04fd77.js.map