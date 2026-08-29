System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, SpriteFrame, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, SpriteContainer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dc445fsLitC45BbbjsScjBE", "SpriteContainer", undefined);

      // import { Debug } from '../../../Scripts/Utils/Debug';
      __checkObsolete__(['_decorator', 'Component', 'error', 'Node', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpriteContainer", SpriteContainer = (_dec = ccclass('SpriteContainer'), _dec2 = property(SpriteFrame), _dec(_class = (_class2 = class SpriteContainer extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spriteFrameList", _descriptor, this);
        }

        SetSprite(id) {
          if (id < 0 || id > 11) {// Debug.LogError("出現錯誤的IconID")
          }

          this.getComponent(Sprite).spriteFrame = this.spriteFrameList[id];
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameList", [_dec2], {
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
//# sourceMappingURL=d9b2a9d7c8b953eefc01bfb4d9f4703b35d09c90.js.map