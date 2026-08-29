System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Node, UITransform, Widget, WebViewH5, Utility, RotationResize, GenericSound, Orientation, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, HistoryUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfWebViewH(extras) {
    _reporterNs.report("WebViewH5", "../../../Utils/WebView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../../../Utils/Core", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRotationResize(extras) {
    _reporterNs.report("RotationResize", "../../../Utils/Orientation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericSound(extras) {
    _reporterNs.report("GenericSound", "../../Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "../../Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../../Utils/Audio", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      WebViewH5 = _unresolved_2.WebViewH5;
    }, function (_unresolved_3) {
      Utility = _unresolved_3.Utility;
    }, function (_unresolved_4) {
      RotationResize = _unresolved_4.RotationResize;
    }, function (_unresolved_5) {
      GenericSound = _unresolved_5.GenericSound;
      Orientation = _unresolved_5.Orientation;
    }, function (_unresolved_6) {
      AudioManager = _unresolved_6.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f0affFmP95FA58W3RShDg23", "HistoryUI", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node', 'UITransform', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HistoryUI", HistoryUI = (_dec = ccclass('HistoryUI'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class HistoryUI extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "closeBtn", _descriptor, this);

          _initializerDefineProperty(this, "BGNode", _descriptor2, this);

          _initializerDefineProperty(this, "webviewRoot", _descriptor3, this);

          _initializerDefineProperty(this, "webviewNode", _descriptor4, this);

          _initializerDefineProperty(this, "bgBtn", _descriptor5, this);

          this.url = '';
          this.onBGBtnClickCallback = null;

          this.onCloseBtnClick = () => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
              error: Error()
            }), GenericSound) : GenericSound).Public_Off);
            this.hideUI();
          };
        }

        init() {
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.closeBtn, this, 'onCloseBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.bgBtn, this, 'onBGBtnClick');
          this.getComponent(_crd && RotationResize === void 0 ? (_reportPossibleCrUseOfRotationResize({
            error: Error()
          }), RotationResize) : RotationResize).onRotationResize = this.onRotationResize.bind(this);
          this.webviewNode.getComponent(_crd && WebViewH5 === void 0 ? (_reportPossibleCrUseOfWebViewH({
            error: Error()
          }), WebViewH5) : WebViewH5).init();
          this.webviewNode.getComponent(Widget).updateAlignment();
        }

        onRotationResize(orientation) {
          if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            this.BGNode.getComponent(UITransform).setContentSize(665, 568);
            this.webviewRoot.getComponent(UITransform).setContentSize(650, 493);
          } else if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Portrait) {
            this.BGNode.getComponent(UITransform).setContentSize(665, 747);
            this.webviewRoot.getComponent(UITransform).setContentSize(650, 673);
          }
        }

        showUI() {
          this.node.setActive(true);
          this.webviewNode.getComponent(_crd && WebViewH5 === void 0 ? (_reportPossibleCrUseOfWebViewH({
            error: Error()
          }), WebViewH5) : WebViewH5).setUrl(this.url);
        }

        setHistoryUrl(url) {
          this.webviewNode.getComponent(_crd && WebViewH5 === void 0 ? (_reportPossibleCrUseOfWebViewH({
            error: Error()
          }), WebViewH5) : WebViewH5).setUrl(url);
          this.url = url;
        }

        hideUI() {
          this.node.setActive(false);
          this.closeBtn.getComponent(Button).resetStatus();
          this.webviewNode.getComponent(_crd && WebViewH5 === void 0 ? (_reportPossibleCrUseOfWebViewH({
            error: Error()
          }), WebViewH5) : WebViewH5).setUrl('');
        }

        onBGBtnClick() {
          var _this$onBGBtnClickCal;

          (_this$onBGBtnClickCal = this.onBGBtnClickCallback) == null || _this$onBGBtnClickCal.call(this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "closeBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "BGNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "webviewRoot", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "webviewNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bgBtn", [_dec6], {
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
//# sourceMappingURL=0545e88a1be0202c9df3c5dbf3b8716cbd0dce96.js.map