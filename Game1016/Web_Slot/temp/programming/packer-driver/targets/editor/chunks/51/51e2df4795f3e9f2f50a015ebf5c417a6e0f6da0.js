System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, MessageBoxUI, Debug, _dec, _dec2, _class, _class2, _descriptor, _class3, _crd, ccclass, property, MessageBox;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMessageBoxUI(extras) {
    _reporterNs.report("MessageBoxUI", "./MessageBoxUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../../../Utils/Core", _context.meta, extras);
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
      director = _cc.director;
    }, function (_unresolved_2) {
      MessageBoxUI = _unresolved_2.MessageBoxUI;
    }, function (_unresolved_3) {
      Debug = _unresolved_3.Debug;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c031bLMtMVIeqhGpPB5sNQA", "MessageBox", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MessageBox", MessageBox = (_dec = ccclass('MessageBox'), _dec2 = property(_crd && MessageBoxUI === void 0 ? (_reportPossibleCrUseOfMessageBoxUI({
        error: Error()
      }), MessageBoxUI) : MessageBoxUI), _dec(_class = (_class2 = (_class3 = class MessageBox extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "msgBoxUI", _descriptor, this);
        }

        static get instance() {
          let component = director.getScene().getComponentInChildren(MessageBox);

          if (this._instance === null || this._instance !== component) {
            if (component) {
              this._instance = component;
            } else {
              (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
                error: Error()
              }), Debug) : Debug).LogError("MessageBox _instance is null");
              return null;
            }
          }

          return this._instance;
        }

        init() {
          this.msgBoxUI.init();
        }

        showMsgBox(title, content, isShowConfirm = true, confirmCallback = null, isShowClose = false, closeCallback = null) {
          (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Log("showMsgBox");
          this.msgBoxUI.showUI(title, content, isShowConfirm, confirmCallback, isShowClose, closeCallback);
        }
        /*
        public showNetworkError(reason: string = '') {
            Debug.Log("showNetworkError");
            let content = Localization.instance.t('ErrorMessage.UnstableConnection');
            content = content.replace(MessageReplaceFlag, `\n(${reason})`);
            this.showMsgBox(Localization.instance.t('ErrorTitle.UnstableConnection'), content, false, () => {
                //location.reload();
            });
        }
        */


      }, _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "msgBoxUI", [_dec2], {
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
//# sourceMappingURL=51e2df4795f3e9f2f50a015ebf5c417a6e0f6da0.js.map