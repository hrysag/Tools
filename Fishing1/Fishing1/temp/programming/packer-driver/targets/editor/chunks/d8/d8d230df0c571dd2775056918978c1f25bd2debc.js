System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, log, error, EDITOR, i18n, _dec, _dec2, _class, _class2, _descriptor, _class3, _crd, ccclass, property, menu, LocalizedLabel;

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
      log = _cc.log;
      error = _cc.error;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      i18n = _unresolved_2.i18n;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1d9fflY4ixAhIAv8HdrKqf5", "LocalizedLabel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'log', 'error']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      _export("default", LocalizedLabel = (_dec = ccclass("LocalizedLabel"), _dec2 = menu('i18n/LocalizedLabel'), _dec(_class = _dec2(_class = (_class2 = (_class3 = class LocalizedLabel extends Component {
        constructor(...args) {
          super(...args);
          this._debouncedUpdateLabel = null;
          this.label = null;

          _initializerDefineProperty(this, "_dataID", _descriptor, this);
        }

        set dataID(val) {
          if (this._dataID !== val) {
            this._dataID = val;

            if (EDITOR) {
              this._debouncedUpdateLabel && this._debouncedUpdateLabel();
            } else {
              this.updateLabel();
            }
          }
        }

        get dataID() {
          return this._dataID;
        }

        onLoad() {
          if (EDITOR) {
            this._debouncedUpdateLabel = this.debounce(this.updateLabel, 200);
          }

          if (!(_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
            error: Error()
          }), i18n) : i18n).inst) {
            (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
              error: Error()
            }), i18n) : i18n).init();
          }

          log('dataID: ' + this.dataID + ' value: ' + (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
            error: Error()
          }), i18n) : i18n).t(this.dataID));
          this.fetchRender();
        }

        fetchRender() {
          let label = this.getComponent(Label);

          if (label) {
            this.label = label;
            this.updateLabel();
            return;
          }
        }

        updateLabel() {
          if (!this.label) {
            error('Failed to update localized label, label component is invalid!');
            return;
          }

          let localizedString = (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
            error: Error()
          }), i18n) : i18n).t(this.dataID, {});

          if (localizedString) {
            this.label.string = (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
              error: Error()
            }), i18n) : i18n).t(this.dataID, {});
          }
        }

        debounce(func, wait, immediate) {
          let timeout = -1;
          return ((...args) => {
            const later = (() => {
              timeout = -1;
              if (!immediate) func.apply(this, args);
            }).bind(this);

            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(this, args);
          }).bind(this);
        }

      }, _class3.editor = {
        executeInEditMode: true,
        menu: 'i18n/LocalizedLabel'
      }, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_dataID", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "dataID", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "dataID"), _class2.prototype)), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d8d230df0c571dd2775056918978c1f25bd2debc.js.map