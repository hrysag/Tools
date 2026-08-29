System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, WebView, _dec, _class, _crd, ccclass, property, WebViewH5;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      WebView = _cc.WebView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "00d2eSw6vJNUL4ldDokGu3h", "WebViewH5", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'WebView']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WebViewH5", WebViewH5 = (_dec = ccclass('WebViewH5'), _dec(_class = class WebViewH5 extends WebView {
        constructor(...args) {
          super(...args);
          this._preloadExecuted = false;
        }

        init() {
          this.__preload();

          this.nativeWebView.parentElement.style.visibility = 'hidden';
        }

        scrollToTop() {
          this.nativeWebView.contentWindow.postMessage('scrollToTop', '*');
        }

        __preload() {
          if (this._preloadExecuted) {
            return;
          }

          super.__preload();

          this._preloadExecuted = true;
        }

        setUrlToSrcdoc(url, onLoaded = null) {
          fetch(url).then(response => response.text()).then(data => {
            this.nativeWebView.srcdoc = data;
            onLoaded == null || onLoaded();
          });
        }

        setUrl(url, onLoaded = null) {
          this.url = url;
          this.node.once(WebView.EventType.LOADED, () => {
            onLoaded == null || onLoaded();
          }, this);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bb3c1dd3406589656bdb4d44890f7f34cf36ab49.js.map