System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Sprite, color, IconBase, IconData, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GameIcon;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIconBase(extras) {
    _reporterNs.report("IconBase", "./IconBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconData(extras) {
    _reporterNs.report("IconData", "./Model/IconData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Sprite = _cc.Sprite;
      color = _cc.color;
    }, function (_unresolved_2) {
      IconBase = _unresolved_2.IconBase;
    }, function (_unresolved_3) {
      IconData = _unresolved_3.IconData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b796bSxbeJKOoADujP99nRj", "GameIcon", undefined);

      __checkObsolete__(['_decorator', 'Sprite', 'color']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameIcon", GameIcon = (_dec = ccclass('GameIcon'), _dec2 = property({
        type: _crd && IconData === void 0 ? (_reportPossibleCrUseOfIconData({
          error: Error()
        }), IconData) : IconData,
        visible: true
      }), _dec3 = property({
        type: Sprite,
        visible: true
      }), _dec(_class = (_class2 = class GameIcon extends (_crd && IconBase === void 0 ? (_reportPossibleCrUseOfIconBase({
        error: Error()
      }), IconBase) : IconBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_iconData", _descriptor, this);

          _initializerDefineProperty(this, "_gameSprite", _descriptor2, this);
        }

        get iconData() {
          return this._iconData;
        }

        init() {
          super.init();
        }

        updateSymbol(symbolID) {
          this._iconData.symbolID = symbolID;
          this._gameSprite.spriteFrame = this._iconData.spriteFrameList[symbolID];
        }

        setBrightness(isDark) {
          var darkBrightness = this._iconData.darkBrightness;

          if (isDark) {
            this._gameSprite.color = color(darkBrightness, darkBrightness, darkBrightness, this._gameSprite.color.a);
          } else {
            this._gameSprite.color = color(255, 255, 255, this._gameSprite.color.a);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_iconData", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_gameSprite", [_dec3], {
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
//# sourceMappingURL=5a465e95c07aaeddb108c479b2e9ed64b9ed76d0.js.map