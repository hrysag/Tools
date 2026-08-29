System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EventTarget, LoadingProgress, _crd;

  function _reportPossibleCrUseOfLoadingPage(extras) {
    _reporterNs.report("LoadingPage", "./LoadingPage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingManager(extras) {
    _reporterNs.report("LoadingManager", "./LoadingManager", _context.meta, extras);
  }

  _export("LoadingProgress", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      EventTarget = _cc.EventTarget;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f6516ryJldFTIx7LTfOp3Yd", "LoadingProgress", undefined);
      /**
       * Created by EricHuang on 2023/9/20.
       * 定義讀取進度
       */


      __checkObsolete__(['EventTarget']);

      _export("LoadingProgress", LoadingProgress = class LoadingProgress extends EventTarget {
        /*
        protected _loadingPageInfo:LoadingPageInfo;
         set loadingPageInfo(value:LoadingPageInfo)
        {
            this._loadingPageInfo=value;
        }*/
        constructor(_enableLoaingPage = true) {
          super();
          this._keepProgrss = void 0;
          //--定義一次要開幾條urlrequest(網頁他是可以同時開多條的)
          this._loadingPage = void 0;
          //--待定義
          this._assetsFinish = void 0;
          this._loadingManager = void 0;

          this.onUpdateAssetsProgress = progress => {};

          this.onAssetsLoadComplete = () => {};

          this.onAssetsUpdate = () => {};

          this._enableLoaingPage = _enableLoaingPage;
          this._keepProgrss = 0; //--測試先關閉
        }

        updateLoaingPageProgress(progress) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f39de6dff158c0cee5a268a843e4dffe3af52525.js.map