System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, RichText, error, i18n, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, menu, property, PrefixLocalizedText;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfi18n(extras) {
    _reporterNs.report("i18n", "./LanguageData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      RichText = _cc.RichText;
      error = _cc.error;
    }, function (_unresolved_2) {
      i18n = _unresolved_2.i18n;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f1974WfX+JNPJ3YgcdoyFsH", "PrefixLocalizedText", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'RichText', 'error']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);

      _export("default", PrefixLocalizedText = (_dec = ccclass('PrefixLocalizedText'), _dec2 = menu('i18n/PrefixLocalizedText'), _dec(_class = _dec2(_class = (_class2 = class PrefixLocalizedText extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "dataID", _descriptor, this);

          _initializerDefineProperty(this, "prefix", _descriptor2, this);
        }

        onLoad() {
          this.updateLabel();
        }

        updateLabel() {
          const label = this.getComponent(Label);
          const richText = this.getComponent(RichText);

          if (!label && !richText) {
            error('Failed to update localized label, label component is invalid!');
            return;
          }

          const localizedString = (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
            error: Error()
          }), i18n) : i18n).t(this.dataID, {});

          if (localizedString) {
            if (label) {
              label.string = this.prefix + localizedString;
            } else if (richText) {
              richText.string = this.prefix + localizedString;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dataID", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefix", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3f6781afcdad83999996c05aa859c0c66cbf1d1f.js.map