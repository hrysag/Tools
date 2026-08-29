System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Label, Node, UIOpacity, UITransform, Widget, Utility, RotationResize, ScreenAdapter, AudioManager, GenericSound, Orientation, WebViewH5, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, InfoType, InfoUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../../Scripts/Utils/Utility", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRotationResize(extras) {
    _reporterNs.report("RotationResize", "../../Scripts/Utils/RotationResize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScreenAdapter(extras) {
    _reporterNs.report("ScreenAdapter", "../../Scripts/Utils/ScreenAdapter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericSound(extras) {
    _reporterNs.report("GenericSound", "../../Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "../../Scripts/Utils/Config", _context.meta, extras);
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
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      Utility = _unresolved_2.Utility;
    }, function (_unresolved_3) {
      RotationResize = _unresolved_3.RotationResize;
    }, function (_unresolved_4) {
      ScreenAdapter = _unresolved_4.ScreenAdapter;
    }, function (_unresolved_5) {
      AudioManager = _unresolved_5.AudioManager;
    }, function (_unresolved_6) {
      GenericSound = _unresolved_6.GenericSound;
      Orientation = _unresolved_6.Orientation;
    }, function (_unresolved_7) {
      WebViewH5 = _unresolved_7.WebViewH5;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "52f9c+gVstBk4kVmO7Uk2lQ", "InfoUI", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'Node', 'UIOpacity', 'UITransform', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("InfoType", InfoType = /*#__PURE__*/function (InfoType) {
        InfoType[InfoType["Rule"] = 0] = "Rule";
        InfoType[InfoType["PayTable"] = 1] = "PayTable";
        return InfoType;
      }({}));

      _export("InfoUI", InfoUI = (_dec = ccclass('InfoUI'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = (_class2 = class InfoUI extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bg", _descriptor, this);

          _initializerDefineProperty(this, "title", _descriptor2, this);

          _initializerDefineProperty(this, "line", _descriptor3, this);

          _initializerDefineProperty(this, "closeBtn", _descriptor4, this);

          _initializerDefineProperty(this, "webviewRoot", _descriptor5, this);

          _initializerDefineProperty(this, "webviewRule", _descriptor6, this);

          _initializerDefineProperty(this, "webviewPayTable", _descriptor7, this);

          _initializerDefineProperty(this, "bgBtn", _descriptor8, this);

          this.currentWebview = void 0;
          this.isLock = false;
          this.ruleHTML = '';
          this.payTableHTML = '';
          this.isLoadRuleReady = false;
          this.isLoadPayTableReady = false;
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
          this.hideUI();
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.closeBtn, this, 'onCloseBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.bgBtn, this, 'onBGBtnClick');
          this.getComponent(_crd && RotationResize === void 0 ? (_reportPossibleCrUseOfRotationResize({
            error: Error()
          }), RotationResize) : RotationResize).onRotationResize = this.onRotationResize.bind(this);
        }

        showUI(infoType) {
          this.onRotationResize((_crd && ScreenAdapter === void 0 ? (_reportPossibleCrUseOfScreenAdapter({
            error: Error()
          }), ScreenAdapter) : ScreenAdapter).UI_Orientation);

          if (this.isLock) {
            return;
          }

          this.webviewRule.setActive(false);
          this.webviewPayTable.setActive(false);
          this.node.setActive(true);
          var targetWebview = null;

          if (infoType === InfoType.Rule) {
            targetWebview = this.webviewRule;
          } else if (infoType === InfoType.PayTable) {
            targetWebview = this.webviewPayTable;
          }

          targetWebview.setActive(true);
          this.currentWebview = targetWebview;
          this.currentWebview.getComponent(_crd && WebViewH5 === void 0 ? (_reportPossibleCrUseOfWebViewH({
            error: Error()
          }), WebViewH5) : WebViewH5).scrollToTop();
        }

        hideUI() {
          if (this.getComponent(UIOpacity).opacity === 0) {
            return;
          }

          this.node.setActive(false);
          this.closeBtn.getComponent(Button).resetStatus();
        }

        setTitle(title) {
          this.title.getComponent(Label).string = title;
        }

        onRotationResize(orientation) {
          if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            this.bg.getComponent(UITransform).setContentSize(950, 568);
            this.title.setPosition(0, 250);
            this.line.setPosition(0, 218);
            this.line.getComponent(UITransform).setContentSize(930, 2);
            this.closeBtn.setPosition(440, 250);
            this.setWebviewContentSize(925, 494);
          } else if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Portrait) {
            this.bg.getComponent(UITransform).setContentSize(670, 750);
            this.title.setPosition(0, 337);
            this.line.setPosition(0, 308);
            this.line.getComponent(UITransform).setContentSize(650, 2);
            this.closeBtn.setPosition(300, 336);
            this.setWebviewContentSize(650, 672.5);
          }
        }

        setWebviewContentSize(width, height) {
          var _this$webviewRoot;

          (_this$webviewRoot = this.webviewRoot) == null || _this$webviewRoot.getComponent(UITransform).setContentSize(width, height);
        }

        setURL(infoType, url) {
          var webviewNode = null;

          if (infoType === InfoType.Rule) {
            webviewNode = this.webviewRule;
          } else if (infoType === InfoType.PayTable) {
            webviewNode = this.webviewPayTable;
          }

          var webview = webviewNode.getComponent(_crd && WebViewH5 === void 0 ? (_reportPossibleCrUseOfWebViewH({
            error: Error()
          }), WebViewH5) : WebViewH5);
          webview.init();
          webviewNode.getComponent(Widget).enabled = true;
          webviewNode.getComponent(Widget).updateAlignment();
          webviewNode.getComponent(_crd && WebViewH5 === void 0 ? (_reportPossibleCrUseOfWebViewH({
            error: Error()
          }), WebViewH5) : WebViewH5).setUrl(url);
        }

        getLoadFlag(infoType) {
          if (infoType === InfoType.Rule) {
            return this.isLoadRuleReady;
          } else if (infoType === InfoType.PayTable) {
            return this.isLoadPayTableReady;
          }
        }

        setLoadFlag(infoType, b) {
          if (infoType === InfoType.Rule) {
            this.isLoadRuleReady = b;
          } else if (infoType === InfoType.PayTable) {
            this.isLoadPayTableReady = b;
          }
        }

        onBGBtnClick() {
          var _this$onBGBtnClickCal;

          (_this$onBGBtnClickCal = this.onBGBtnClickCallback) == null || _this$onBGBtnClickCal.call(this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "line", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "closeBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "webviewRoot", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "webviewRule", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "webviewPayTable", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bgBtn", [_dec9], {
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
//# sourceMappingURL=a0bbc796e5b7b2dec0e866390af1c2b840f3ecc8.js.map