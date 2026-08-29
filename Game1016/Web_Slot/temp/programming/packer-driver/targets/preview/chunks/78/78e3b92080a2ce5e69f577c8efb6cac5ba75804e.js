System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, SpriteFrame, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, PageIconGroup;

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

      _cclegacy._RF.push({}, "0cc870/bJtEl6A/hs0eSTgQ", "PageIconGroup", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PageIconGroup", PageIconGroup = (_dec = ccclass('PageIconGroup'), _dec2 = property(Sprite), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec(_class = (_class2 = class PageIconGroup extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pageIcons", _descriptor, this);

          _initializerDefineProperty(this, "pageOffSprite", _descriptor2, this);

          _initializerDefineProperty(this, "pageOnSprite", _descriptor3, this);

          this.currentIndex = 0;
          this.totalPage = 0;
          this.MAX_PAGE = 7;
        }

        init() {
          this.setAllPageIconsActiveOff();
        }

        setAllPageIconsActiveOff() {
          for (var item of this.pageIcons) {
            item.node.active = false;
          }
        }

        setPageOn(index) {
          for (var item of this.pageIcons) {
            item.spriteFrame = this.pageOffSprite;
          }

          this.pageIcons[index].spriteFrame = this.pageOnSprite;
        }

        setTotalPage(totalPage) {
          if (totalPage > this.MAX_PAGE) {
            console.error("Total page exceeds maximum limit of " + this.MAX_PAGE + ". Setting to " + this.MAX_PAGE + ".");
            totalPage = this.MAX_PAGE;
          }

          this.currentIndex = 0;
          this.totalPage = totalPage;
          this.setAllPageIconsActiveOff();

          for (var i = 0; i < this.totalPage; i++) {
            this.pageIcons[i].node.active = true;
          }

          this.setPageOn(this.currentIndex);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pageIcons", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pageOffSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pageOnSprite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=78e3b92080a2ce5e69f577c8efb6cac5ba75804e.js.map