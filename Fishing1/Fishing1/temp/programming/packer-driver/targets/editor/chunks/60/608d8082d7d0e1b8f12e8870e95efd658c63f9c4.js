System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LoadingProgress, LoadingEvent, LoadingResManager, LoadingResPage, LoadingResProgress, _crd;

  function _reportPossibleCrUseOfLoadingProgress(extras) {
    _reporterNs.report("LoadingProgress", "../../game/loading/LoadingProgress", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingPageInfo(extras) {
    _reporterNs.report("LoadingPageInfo", "../../game/loading/LoadingDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFileConfigLoadingOption(extras) {
    _reporterNs.report("FileConfigLoadingOption", "../../game/loading/LoadingDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingEvent(extras) {
    _reporterNs.report("LoadingEvent", "../../game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "./LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingResPage(extras) {
    _reporterNs.report("LoadingResPage", "./LoadingResPage", _context.meta, extras);
  }

  _export("LoadingResProgress", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      LoadingProgress = _unresolved_2.LoadingProgress;
    }, function (_unresolved_3) {
      LoadingEvent = _unresolved_3.LoadingEvent;
    }, function (_unresolved_4) {
      LoadingResManager = _unresolved_4.LoadingResManager;
    }, function (_unresolved_5) {
      LoadingResPage = _unresolved_5.LoadingResPage;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b1ca7pt0kNIcqrX6cNzxdXh", "LoadingResProgress", undefined);
      /**
       * Created by EricHuang on 2024/01/16.
       */


      __checkObsolete__(['log']);

      _export("LoadingResProgress", LoadingResProgress = class LoadingResProgress extends (_crd && LoadingProgress === void 0 ? (_reportPossibleCrUseOfLoadingProgress({
        error: Error()
      }), LoadingProgress) : LoadingProgress) {
        set loadingPageInfo(value) {
          this._loadingPageInfo = value;

          this._loadingPage.init(value);
        }

        set loadingQuene(value) {
          this._loadingQuene = value;
          this._loadingManager.loadingQueue = this._loadingQuene;
        }

        static getInstance() {
          return LoadingResProgress._instance ? LoadingResProgress._instance : new LoadingResProgress();
        }

        constructor() {
          super();
          this._loadingPageInfo = void 0;
          this._loadingQuene = void 0;
          this._count = void 0;

          this.onAssetsLoadComplete = () => {
            this._loadingManager.off((_crd && LoadingEvent === void 0 ? (_reportPossibleCrUseOfLoadingEvent({
              error: Error()
            }), LoadingEvent) : LoadingEvent).ASSETS_IS_READY, this.onAssetsLoadComplete);

            this._loadingManager.off((_crd && LoadingEvent === void 0 ? (_reportPossibleCrUseOfLoadingEvent({
              error: Error()
            }), LoadingEvent) : LoadingEvent).ASSETS_IS_UPDATE, this.onAssetsUpdate);

            this.emit((_crd && LoadingEvent === void 0 ? (_reportPossibleCrUseOfLoadingEvent({
              error: Error()
            }), LoadingEvent) : LoadingEvent).ASSETS_IS_READY);
          };

          this.onAssetsUpdate = () => {
            this._count += 1;
            this.onUpdateAssetsProgress(this._count);
          };

          this.onUpdateAssetsProgress = progress => {
            let ratio = progress / this._loadingQuene.length * 100 * 0.9; //log('check_assetsIsUpdate',ratio,this._count,this._loadingQuene.length);

            this.updateLoaingPageProgress(ratio);
          };

          if (LoadingResProgress._instance != null) {
            throw new Error('plz use getInstance()');
          }

          LoadingResProgress._instance = this; //-_laodingPage要在這裡定義

          this._loadingPageInfo = null;
          this._loadingManager = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance();
          this._loadingPage = (_crd && LoadingResPage === void 0 ? (_reportPossibleCrUseOfLoadingResPage({
            error: Error()
          }), LoadingResPage) : LoadingResPage).getInstance();

          if (!this._enableLoaingPage) {
            this._loadingPage.remove();
          }

          this._count = 0;
        }

        startLoading() {
          this._assetsFinish = false;
          this.onUpdateAssetsProgress(0);

          this._loadingManager.on((_crd && LoadingEvent === void 0 ? (_reportPossibleCrUseOfLoadingEvent({
            error: Error()
          }), LoadingEvent) : LoadingEvent).ASSETS_IS_READY, this.onAssetsLoadComplete);

          this._loadingManager.on((_crd && LoadingEvent === void 0 ? (_reportPossibleCrUseOfLoadingEvent({
            error: Error()
          }), LoadingEvent) : LoadingEvent).ASSETS_IS_UPDATE, this.onAssetsUpdate);

          this._loadingManager.startLoad();
        }

        finish() {
          this.updateLoaingPageProgress(100); //this._loadingPage.close();
        }

        hideLoadingUI() {
          this._loadingPage.hideLoadingUI();
        }

        showLoadingUI() {
          this._loadingPage.showLoadingUI();
        }

        remove() {
          this._loadingPage.remove();
        }

        showLoadingTxt(txt) {
          this._loadingPage.updateText(txt);
        }

        updateLoaingPageProgress(progress) {
          this._loadingPage.updateText(progress.toFixed(0) + '%');
        }

      });

      LoadingResProgress._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=608d8082d7d0e1b8f12e8870e95efd658c63f9c4.js.map