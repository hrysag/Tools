System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Label, Node, UITransform, Utility, AudioManager, GenericSound, WebViewH5, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, MessageBoxUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../../Scripts/Utils/Utility", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericSound(extras) {
    _reporterNs.report("GenericSound", "../../Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebViewH(extras) {
    _reporterNs.report("WebViewH5", "./WebViewH5", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      Utility = _unresolved_2.Utility;
    }, function (_unresolved_3) {
      AudioManager = _unresolved_3.AudioManager;
    }, function (_unresolved_4) {
      GenericSound = _unresolved_4.GenericSound;
    }, function (_unresolved_5) {
      WebViewH5 = _unresolved_5.WebViewH5;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa8a4/1P6VPAKXEpX5WwgCJ", "MessageBoxUI", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Label', 'Node', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MessageBoxUI", MessageBoxUI = (_dec = ccclass('MessageBoxUI'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = class MessageBoxUI extends Component {
        constructor(...args) {
          super(...args);

          // @property(Node)
          // private closeBtn: Node;
          _initializerDefineProperty(this, "confirmBtn", _descriptor, this);

          _initializerDefineProperty(this, "titleText", _descriptor2, this);

          _initializerDefineProperty(this, "contentText", _descriptor3, this);

          this.onCloseBtnClickCallback = null;
          this.isInit = false;
          this.temporarilyHideWebviewList = [];
        }

        init() {
          if (this.isInit) {
            return;
          }

          this.hideUI(); // Utility.addEventHandlerToButton(this.closeBtn, this, 'onCloseBtnClick');

          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.confirmBtn, this, 'onCloseBtnClick');
          this.isInit = true;
        }

        showUI(title, content, isShowConfirm, confirmCallback = null) {
          this.hideWebview();
          this.setCloseAndConfirmBtnActive(isShowConfirm);
          this.titleText.string = title;
          this.contentText.string = content;
          this.node.setActive(true);
          this.onCloseBtnClickCallback = confirmCallback;
        }

        hideUI() {
          this.showWebview();
          this.node.setActive(false);
        }

        onCloseBtnClick() {
          var _instance, _this$onCloseBtnClick;

          (_instance = (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance) == null || _instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
            error: Error()
          }), GenericSound) : GenericSound).Public_Off);
          this.hideUI();
          (_this$onCloseBtnClick = this.onCloseBtnClickCallback) == null || _this$onCloseBtnClick.call(this);
        }

        setCloseAndConfirmBtnActive(active) {
          // this.closeBtn.setActive(active);
          this.confirmBtn.setActive(active);

          if (active) {
            this.contentText.getComponent(UITransform).setContentSize(380, 130);
          } else {
            this.contentText.getComponent(UITransform).setContentSize(380, 240);
          }
        }

        hideWebview() {
          let webviews = director.getScene().getComponentsInChildren(_crd && WebViewH5 === void 0 ? (_reportPossibleCrUseOfWebViewH({
            error: Error()
          }), WebViewH5) : WebViewH5);

          for (let item of webviews) {
            if (item.node.active) {
              item.node.setActive(false);
              this.temporarilyHideWebviewList.push(item);
            }
          }
        }

        showWebview() {
          for (let item of this.temporarilyHideWebviewList) {
            item.node.setActive(true);
          }

          this.temporarilyHideWebviewList = [];
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "confirmBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "titleText", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "contentText", [_dec4], {
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
//# sourceMappingURL=f20fa419e011fa1f547da268760fcd61221510e4.js.map