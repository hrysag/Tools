System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCString, SpineController, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _class4, _class5, _descriptor3, _crd, ccclass, property, SpineMultiPropertyDef, MultiSpineControllerProperties;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSpineController(extras) {
    _reporterNs.report("SpineController", "../SpineController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCString = _cc.CCString;
    }, function (_unresolved_2) {
      SpineController = _unresolved_2.SpineController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cde581JZ6pL5b95B8K9dpvz", "MultiSpineControllerProperties", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'CCString']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpineMultiPropertyDef", SpineMultiPropertyDef = (_dec = ccclass('SpineMultiPropertyDef'), _dec2 = property({
        type: CCString,
        visible: true,
        displayName: 'Key',
        tooltip: '用來索引的key'
      }), _dec3 = property({
        type: _crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
          error: Error()
        }), SpineController) : SpineController,
        visible: true,
        displayName: 'SpineController',
        tooltip: 'SpineController的Prefab'
      }), _dec(_class = (_class2 = class SpineMultiPropertyDef {
        constructor() {
          _initializerDefineProperty(this, "key", _descriptor, this);

          _initializerDefineProperty(this, "spineController", _descriptor2, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "key", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spineController", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _export("MultiSpineControllerProperties", MultiSpineControllerProperties = (_dec4 = ccclass('MultiSpineControllerProperties'), _dec5 = property({
        type: SpineMultiPropertyDef,
        visible: true,
        displayName: 'Prefab List',
        tooltip: '塞入尚未實體化的prefab,依照key當作索引'
      }), _dec4(_class4 = (_class5 = class MultiSpineControllerProperties {
        constructor() {
          _initializerDefineProperty(this, "spineControllerPropertyList", _descriptor3, this);
        }

      }, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "spineControllerPropertyList", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class5)) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7a3709ce858d2172db5ce7dfd336fc390023abee.js.map