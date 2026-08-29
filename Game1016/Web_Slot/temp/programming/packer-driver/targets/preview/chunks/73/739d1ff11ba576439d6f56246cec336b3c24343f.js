System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, Component, SpriteFrame, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, IconData;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      SpriteFrame = _cc.SpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f1a0apwRFxI87+3HsNARe2U", "IconData", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Component', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("IconData", IconData = (_dec = ccclass('IconData'), _dec2 = property({
        type: CCInteger,
        readonly: true,
        visible: true,
        tooltip: 'ID'
      }), _dec3 = property({
        type: CCInteger,
        visible: true,
        tooltip: 'SymbolID'
      }), _dec4 = property({
        type: CCInteger,
        range: [0, 255],
        visible: true,
        tooltip: '壓黑後的明亮度'
      }), _dec5 = property({
        type: SpriteFrame,
        visible: true
      }), _dec(_class = (_class2 = class IconData extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_iconID", _descriptor, this);

          _initializerDefineProperty(this, "_symbolID", _descriptor2, this);

          _initializerDefineProperty(this, "_darkBrightness", _descriptor3, this);

          _initializerDefineProperty(this, "_spriteFrameList", _descriptor4, this);
        }

        set iconID(id) {
          this._iconID = id;
        }

        get iconID() {
          return this._iconID;
        }

        set symbolID(id) {
          this._symbolID = id;
        }

        get symbolID() {
          return this._symbolID;
        }

        get darkBrightness() {
          return this._darkBrightness;
        }

        set darkBrightness(brightness) {
          this._darkBrightness = brightness;
        }

        get spriteFrameList() {
          return this._spriteFrameList;
        }

        set spriteFrameList(frameList) {
          this._spriteFrameList = frameList;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_iconID", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_symbolID", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_darkBrightness", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_spriteFrameList", [_dec5], {
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
//# sourceMappingURL=739d1ff11ba576439d6f56246cec336b3c24343f.js.map