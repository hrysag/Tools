System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCString, Component, RichText, KeySpriteFramePair, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, RichTextIconViewer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfKeySpriteFramePair(extras) {
    _reporterNs.report("KeySpriteFramePair", "db://assets/Scripts/Utils/KeySpriteFramePair", _context.meta, extras);
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
      Component = _cc.Component;
      RichText = _cc.RichText;
    }, function (_unresolved_2) {
      KeySpriteFramePair = _unresolved_2.KeySpriteFramePair;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9a87eLv4llNQp8Ho812VE7j", "RichTextIconViewer", undefined);

      __checkObsolete__(['_decorator', 'CCString', 'Component', 'Node', 'RichText', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RichTextIconViewer", RichTextIconViewer = (_dec = ccclass('RichTextIconViewer'), _dec2 = property(RichText), _dec3 = property(RichText), _dec4 = property([_crd && KeySpriteFramePair === void 0 ? (_reportPossibleCrUseOfKeySpriteFramePair({
        error: Error()
      }), KeySpriteFramePair) : KeySpriteFramePair]), _dec5 = property(CCString), _dec6 = property(CCString), _dec(_class = (_class2 = class RichTextIconViewer extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "myRichText", _descriptor, this);

          _initializerDefineProperty(this, "tipRichText", _descriptor2, this);

          _initializerDefineProperty(this, "keySpriteFramePair", _descriptor3, this);

          _initializerDefineProperty(this, "text", _descriptor4, this);

          _initializerDefineProperty(this, "tipText", _descriptor5, this);
        }

        start() {
          this.myRichText.addSpriteFrame(this.keySpriteFramePair);
          this.myRichText.string = this.text;
          this.tipRichText.addSpriteFrame(this.keySpriteFramePair);
          this.tipRichText.string = this.tipText;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "myRichText", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tipRichText", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "keySpriteFramePair", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "text", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tipText", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=10b751f7bc46a6276a84eda326c4cf345f7c9609.js.map