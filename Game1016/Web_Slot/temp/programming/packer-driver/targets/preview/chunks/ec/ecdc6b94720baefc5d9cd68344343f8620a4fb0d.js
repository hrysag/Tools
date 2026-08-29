System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, FlowTrackerManager, AsyncScope, FlowAsyncFacade, _crd;

  function _reportPossibleCrUseOfFlowTrackerManager(extras) {
    _reporterNs.report("FlowTrackerManager", "./FlowTrackerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAsyncScope(extras) {
    _reporterNs.report("AsyncScope", "../AsyncScope/AsyncScope", _context.meta, extras);
  }

  _export("FlowAsyncFacade", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      FlowTrackerManager = _unresolved_2.FlowTrackerManager;
    }, function (_unresolved_3) {
      AsyncScope = _unresolved_3.AsyncScope;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa160VU1klMLYK4pE/oPl7c", "FlowAsyncFacade", undefined);

      _export("FlowAsyncFacade", FlowAsyncFacade = class FlowAsyncFacade {
        static getInstance() {
          return FlowAsyncFacade._instance ? FlowAsyncFacade._instance : new FlowAsyncFacade();
        }

        constructor() {
          this._flowTrackerManager = void 0;
          this._asyncManager = void 0;

          if (FlowAsyncFacade._instance != null) {
            throw new Error('plz use getInstance() to get FlowAsyncFacade');
          }

          FlowAsyncFacade._instance = this;
          this._flowTrackerManager = (_crd && FlowTrackerManager === void 0 ? (_reportPossibleCrUseOfFlowTrackerManager({
            error: Error()
          }), FlowTrackerManager) : FlowTrackerManager).getInstance();
          this._asyncManager = (_crd && AsyncScope === void 0 ? (_reportPossibleCrUseOfAsyncScope({
            error: Error()
          }), AsyncScope) : AsyncScope).getInstance();
        } //============================= Async Scope Methods ============================//

        /**
         * <核心方法>
         * 每個流程(Flow)建立獨立的 AbortSignal 範圍
         * 在阻斷時會中止該流程下的所有非同步操作,並標記該流程為中止狀態
         * 在callback 啟動時,會傳入該流程的 abortSignalKey 以供辨識,
         * 可透過abortSignalKey 取得對應的 FlowTracker 記錄流程狀態,即可辨識該流程目前執行到哪個階段
         * 同時也會觸發 FlowTracker 的 abortFlow 方法來標記該流程為中止狀態??
         * 
         * @param abortSignalKey 
         * @param onAbort callback
         * @returns 
         */


        createAbortScope(abortSignalKey, onAbort) {
          return this._asyncManager.createAbortScope(abortSignalKey, onAbort);
        }

        getAbortController(abortSignalKey) {
          return this._asyncManager.getAbortController(abortSignalKey);
        }

        getAbortKey(abortSignal) {
          return this._asyncManager.getAbortKey(abortSignal);
        } //=============================組合方法============================//


        createTrackerAndAbortScope(abortSignalKey, onAbort) {
          this.createFlowTracker(abortSignalKey);
          return this._asyncManager.createAbortScope(abortSignalKey, onAbort);
        }
        /**
         * <<為原始 promise 設置超時機制>>
         * @param ogPromise Original Promise
         * @param seconds 
         * @param meta  附加在 Error 物件上的資訊
         * @param label 變更辨識標籤，會附加在 Error 物件上
         * @param resolveOnTimeout 超時是否強制 resolve(false=reject, true=resolve)
         * @param timeoutValue 超時要回傳的值(當 resolveOnTimeout=true 時有效)
         * @param signal 對應 AbortController.signal
         * @param abortKey 對應 AbortController map 的 key
         * @param flowKey flow tracker 的流程名稱 
         */


        processWithTimeout(ogPromise, //--原始 Promise
        seconds, //--race 時間
        meta, //--附加資訊
        label, resolveOnTimeout, //--false=timeout 時回傳 error reject, true=timeout 還是走resolve
        timeoutValue, //--你需要的辨識資訊(除錯用)
        signal, //--新增：對應 AbortController.signal
        abortKey, flowKey) {
          if (label === void 0) {
            label = 'timeout';
          }

          if (resolveOnTimeout === void 0) {
            resolveOnTimeout = false;
          }

          if (flowKey && abortKey) {
            this.abortFlow(abortKey, flowKey);
          }

          return this._asyncManager.withTimeout(ogPromise, seconds, meta, label, resolveOnTimeout, timeoutValue, signal, abortKey);
        } //--阻斷流程
        //--TO DO:在callback 時,除了回傳 abortSignalKey，可能需要加上回傳透過該 key 取得的 flowKey 列表


        abortScopeAndFlow(abortSignalKey, flowKey) {
          this._asyncManager.abortAll(abortSignalKey); //--會呼叫callback


          this._flowTrackerManager.abortFlow(abortSignalKey, flowKey); //--標記該流程為中止狀態

        }

        resetScopeAndFlow() {
          this._asyncManager.reset();

          this._flowTrackerManager.reset();
        } //============================= Flow Tracker Methods ============================//


        createFlowTracker(abortSignalKey) {
          this._flowTrackerManager.createFlowTracker(abortSignalKey);
        }

        startFlow(abortSignalKey, flowKey) {
          this._flowTrackerManager.startFlow(abortSignalKey, flowKey);
        }

        recordStep(abortSignalKey, flowKey, stepKey) {
          this._flowTrackerManager.recordStep(abortSignalKey, flowKey, stepKey);
        } //--該方法會delete整個flow tracker資料--//


        endFlow(abortSignalKey, flowKey) {
          this._flowTrackerManager.endFlow(abortSignalKey, flowKey);
        } //--僅停止目前的flow tracker--


        stopFlow(abortSignalKey, flowKey) {
          this._flowTrackerManager.stopFlow(abortSignalKey, flowKey);
        }

        getTrackerProgress(abortSignalKey, flowKey) {
          return this._flowTrackerManager.getProgress(abortSignalKey, flowKey);
        }

        abortFlow(abortSignalKey, flowKey) {
          this._flowTrackerManager.abortFlow(abortSignalKey, flowKey);
        }

      });

      FlowAsyncFacade._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ecdc6b94720baefc5d9cd68344343f8620a4fb0d.js.map