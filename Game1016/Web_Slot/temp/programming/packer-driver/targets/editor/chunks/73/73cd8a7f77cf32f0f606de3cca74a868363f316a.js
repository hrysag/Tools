System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, color, Sprite, SpriteFrame, UniDropIconBase, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, UniDropIconExample;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSymbolNumber(extras) {
    _reporterNs.report("SymbolNumber", "../SymbolNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniDropIconBase(extras) {
    _reporterNs.report("UniDropIconBase", "../../../Scripts/DropReel/UniDropIconBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      color = _cc.color;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      UniDropIconBase = _unresolved_2.UniDropIconBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6a5dduPb8ZHWqeufMznswxS", "UniDropIconExample", undefined);

      __checkObsolete__(['_decorator', 'color', 'Component', 'Node', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UniDropIconExample", UniDropIconExample = (_dec = ccclass('DropUniIconExample'), _dec2 = property({
        range: [0, 255]
      }), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec(_class = (_class2 = class UniDropIconExample extends (_crd && UniDropIconBase === void 0 ? (_reportPossibleCrUseOfUniDropIconBase({
        error: Error()
      }), UniDropIconBase) : UniDropIconBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "darkBrightness", _descriptor, this);

          _initializerDefineProperty(this, "gameSprite", _descriptor2, this);

          _initializerDefineProperty(this, "spriteFrameList", _descriptor3, this);
        }

        init() {
          super.init();
        }

        get symbol() {
          //假如覆寫get or set，兩者都要override
          return this._symbol;
        }

        set symbol(symbol) {
          this._symbol = symbol;
          this.updateSymbol(symbol);
        }

        updateSymbol(symbol) {
          this.gameSprite.spriteFrame = this.spriteFrameList[symbol.symbolID];
        }

        setBrightness(isDark) {
          let darkBrightness = this.darkBrightness;

          if (isDark) {
            this.gameSprite.color = color(darkBrightness, darkBrightness, darkBrightness, this.gameSprite.color.a);
          } else {
            this.gameSprite.color = color(255, 255, 255, this.gameSprite.color.a);
          }
        }

        show() {
          if (!this.node.active) {
            this.node.active = true;
          }
        }

        hide() {
          if (this.node.active) {
            this.node.active = false;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "darkBrightness", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameList", [_dec4], {
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
//# sourceMappingURL=73cd8a7f77cf32f0f606de3cca74a868363f316a.js.map