System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Toggle, Sprite, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, customToggle;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Toggle = _cc.Toggle;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5f071UjIRlD4qlTZwI6ivSM", "customToggle", undefined);

      __checkObsolete__(['_decorator', 'Toggle', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("customToggle", customToggle = (_dec = ccclass('customToggle'), _dec2 = property([Sprite]), _dec(_class = (_class2 = class customToggle extends Toggle {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "disabledGray", _descriptor, this);
        }

        _updateState() {
          super._updateState();

          for (const data of this.disabledGray) {
            data.grayscale = !this.interactable;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "disabledGray", [_dec2], {
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
//# sourceMappingURL=9271a71e8720f465478b6d85c0a3d415d80e560c.js.map