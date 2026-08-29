System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, sys, screen, CCBoolean, director, OrientationMode, WebViewH5, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, OrientationTip;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfOrientationMode(extras) {
    _reporterNs.report("OrientationMode", "../Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebViewH(extras) {
    _reporterNs.report("WebViewH5", "../../GenericUI/Scripts/WebViewH5", _context.meta, extras);
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
      Node = _cc.Node;
      sys = _cc.sys;
      screen = _cc.screen;
      CCBoolean = _cc.CCBoolean;
      director = _cc.director;
    }, function (_unresolved_2) {
      OrientationMode = _unresolved_2.OrientationMode;
    }, function (_unresolved_3) {
      WebViewH5 = _unresolved_3.WebViewH5;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b707t6PolIPoxmBFBMJV1N", "OrientationTip", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sys', 'screen', 'CCBoolean', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("OrientationTip", OrientationTip = (_dec = ccclass('OrientationTip'), _dec2 = property(CCBoolean), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property({
        type: _crd && WebViewH5 === void 0 ? (_reportPossibleCrUseOfWebViewH({
          error: Error()
        }), WebViewH5) : WebViewH5,
        readonly: true
      }), _dec(_class = (_class2 = class OrientationTip extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "isStartScene", _descriptor, this);

          _initializerDefineProperty(this, "tipToPortrait", _descriptor2, this);

          _initializerDefineProperty(this, "tipToLandscape", _descriptor3, this);

          _initializerDefineProperty(this, "webviewList", _descriptor4, this);

          this.webviewActiveMap = new Map();
          //紀錄上一個狀態
          this.lastOrientation = (_crd && OrientationMode === void 0 ? (_reportPossibleCrUseOfOrientationMode({
            error: Error()
          }), OrientationMode) : OrientationMode).Landscape;
        }

        init(orientationMode) {
          if (orientationMode === void 0) {
            orientationMode = (_crd && OrientationMode === void 0 ? (_reportPossibleCrUseOfOrientationMode({
              error: Error()
            }), OrientationMode) : OrientationMode).Both;
          }

          if (orientationMode !== (_crd && OrientationMode === void 0 ? (_reportPossibleCrUseOfOrientationMode({
            error: Error()
          }), OrientationMode) : OrientationMode).Both) {
            if (sys.isMobile) {
              this.node.active = true;
            } else {
              this.node.active = false;
            }

            if (!this.isStartScene) {
              this.webviewInit();
            }
          } else {
            console.error("OrientationMode 為 Both 時，不該使用 OrientationTip");
          }
        }
        /**
         * 變更螢幕方向時會檢查
         * @param orientationMode 當前鎖定的螢幕方向 EX: 鎖橫屏的話，這個參數就都是 Landscape
         */


        checkOrientation(orientationMode) {
          var currentOrientation = this.checkCurrentOrientation(); //當前的螢幕方向

          var isChange = this.isChangeOrientation(currentOrientation);

          if (orientationMode === (_crd && OrientationMode === void 0 ? (_reportPossibleCrUseOfOrientationMode({
            error: Error()
          }), OrientationMode) : OrientationMode).Landscape) {
            this.tipToPortrait.active = false;

            if (currentOrientation === (_crd && OrientationMode === void 0 ? (_reportPossibleCrUseOfOrientationMode({
              error: Error()
            }), OrientationMode) : OrientationMode).Portrait) {
              this.tipToLandscape.active = true;
              this.setWebviewActive(false, isChange);
            } else {
              this.tipToLandscape.active = false;
              this.setWebviewActive(true);
            }
          } else if (orientationMode === (_crd && OrientationMode === void 0 ? (_reportPossibleCrUseOfOrientationMode({
            error: Error()
          }), OrientationMode) : OrientationMode).Portrait) {
            this.tipToLandscape.active = false;

            if (currentOrientation === (_crd && OrientationMode === void 0 ? (_reportPossibleCrUseOfOrientationMode({
              error: Error()
            }), OrientationMode) : OrientationMode).Landscape) {
              this.tipToPortrait.active = true;
              this.setWebviewActive(false, isChange);
            } else {
              this.tipToPortrait.active = false;
              this.setWebviewActive(true);
            }
          }
        }

        webviewInit() {
          if (!sys.isMobile) {
            return;
          }

          this.webviewList = director.getScene().getComponentsInChildren(_crd && WebViewH5 === void 0 ? (_reportPossibleCrUseOfWebViewH({
            error: Error()
          }), WebViewH5) : WebViewH5);
          this.webviewList.forEach(webview => {
            this.webviewActiveMap.set(webview, true);
          });
        }

        checkCurrentOrientation() {
          if (screen.windowSize.width >= screen.windowSize.height) {
            return (_crd && OrientationMode === void 0 ? (_reportPossibleCrUseOfOrientationMode({
              error: Error()
            }), OrientationMode) : OrientationMode).Landscape;
          } else {
            return (_crd && OrientationMode === void 0 ? (_reportPossibleCrUseOfOrientationMode({
              error: Error()
            }), OrientationMode) : OrientationMode).Portrait;
          }
        }

        isChangeOrientation(currentOrientation) {
          var isChange = this.lastOrientation !== currentOrientation;

          if (isChange) {
            this.lastOrientation = currentOrientation;
          }

          return isChange;
        }

        setWebviewActive(isActive, isChange) {
          if (isChange === void 0) {
            isChange = false;
          }

          if (!sys.isMobile) {
            return;
          }

          if (isActive) {
            this.webviewList.forEach(webview => {
              webview.enabled = this.webviewActiveMap.get(webview);
            });
          } else {
            this.webviewList.forEach(webview => {
              if (isChange) {
                //因為在editor執行會觸發window resize以及 change orientation 事件，有變更螢幕方向才要記錄上一個狀態
                this.webviewActiveMap.set(webview, webview.enabled);
              }

              webview.enabled = false;
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isStartScene", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tipToPortrait", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tipToLandscape", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "webviewList", [_dec5], {
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
//# sourceMappingURL=a1986b41a45dfa9f006d340b051d1882e0c9780b.js.map