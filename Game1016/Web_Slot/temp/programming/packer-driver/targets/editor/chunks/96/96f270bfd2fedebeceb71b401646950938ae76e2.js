System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AsyncScope, FlowAbortManager, _crd, DEBUG_TITLE;

  function _reportPossibleCrUseOfAsyncScope(extras) {
    _reporterNs.report("AsyncScope", "../AsyncScope/AsyncScope", _context.meta, extras);
  }

  _export("FlowAbortManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AsyncScope = _unresolved_2.AsyncScope;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "19e81eR9uRJnpNQSsqge3x5", "FlowAbortManager", undefined);

      DEBUG_TITLE = 'FlowAbortManager';

      /**
       * 管理多個流程 (Flow) 的中止 / 階段狀態
       * 每個流程有獨立的 AbortSignal，並支援階段追蹤
       */
      _export("FlowAbortManager", FlowAbortManager = class FlowAbortManager {
        static getInstance() {
          return FlowAbortManager._instance ? FlowAbortManager._instance : new FlowAbortManager((_crd && AsyncScope === void 0 ? (_reportPossibleCrUseOfAsyncScope({
            error: Error()
          }), AsyncScope) : AsyncScope).getInstance());
        }

        /*
        set async(asyncInstance: AsyncScope) {
            this._async = asyncInstance;
        }*/
        constructor(asyncInstance) {
          this._async = void 0;
          //多流程 AbortSignal 集中管理
          this._abortFlowMap = new Map();

          /**
           * 流程狀態追蹤
           * string->該大項流程的名稱
           * IFlowStatus->該流程的狀態
           */
          this._flowStatus = new Map();

          if (FlowAbortManager._instance != null) {
            throw new Error('plz use getInstance() to get FlowAbortManager');
          }

          FlowAbortManager._instance = this;
          this._async = asyncInstance; //this._onFlowAbortCallback = onAbort ?? ((k) => GameUtilsTools.debugLog(DEBUG_TITLE, `Flow [${k}] Aborted`));
        } // 建立新的流程 Abort 範圍 


        createFlowScope(flowKey, onAbort) {
          if (this._abortFlowMap.has(flowKey)) {
            this._async.abortAll(flowKey);

            this._abortFlowMap.delete(flowKey);
          }

          const signal = this._async.createAbortScope(flowKey, onAbort);

          this._abortFlowMap.set(flowKey, signal);

          return signal;
        }

        getFlowAbortSignal(flowKey) {
          return this._abortFlowMap.get(flowKey) || null;
        }

        removeAbortSignal(flowKey) {
          this._async.abortAll(flowKey);

          this._abortFlowMap.delete(flowKey);
        }
        /**
         * 註冊流程階段 (可選)-直接一口氣註冊該流程(flowStatus)的裡面的(stages--主執行階段的細碎流程成員)
         * @param flowKey 大向流程
         * @param processList 細向流程
         */


        registerFlowStatus(flowKey, processList, signalKey) {
          if (!this._flowStatus.has(flowKey)) {
            // 內層 Map (Map<string, IFlowStatus>)
            this._flowStatus.set(flowKey, new Map());
          }

          const stageMap = this._flowStatus.get(flowKey);

          for (const info of processList) {
            if (!stageMap.has(info)) {
              stageMap.set(info, {
                signalKey: signalKey,
                //--該流程的AbortSignal名稱
                started: false,
                finished: false,
                aborted: false
              });
            }
          } //GameUtilsTools.debugLog(DEBUG_TITLE, `[registerFlowStatus]`, this._flowStatus);

        }
        /**
         * 設定流程的 AbortSignal 鍵
         * @param flowKey 流程的唯一識key
         * @param signalKey abortSignal 的key
         */


        setFlowAbortSignalKey(flowKey, signalKey) {
          const flowMap = this._flowStatus.get(flowKey);

          if (flowMap) {
            for (const [_, s] of flowMap.entries()) {
              s.signalKey = signalKey;
            }
          }
        } // =======================================================
        // 階段追蹤 (Stage Tracking)
        // =======================================================


        markProcessStart(currentFlowKey, processKey) {
          const flowMap = this._flowStatus.get(currentFlowKey);

          if (flowMap) {
            const s = flowMap.get(processKey);
            if (s) s.started = true;
          } else {
            flowMap.set(processKey, {
              signalKey: '',
              started: true,
              finished: false,
              aborted: false
            });
          }
        }

        markProcessFinish(currentFlowKey, processKey) {
          const flowMap = this._flowStatus.get(currentFlowKey);

          if (flowMap) {
            const s = flowMap.get(processKey);
            if (s) s.finished = true;
          } else {
            flowMap.set(processKey, {
              signalKey: '',
              started: true,
              finished: true,
              aborted: false
            });
          }
        }

        markProcessAbort(currentFlowKey, processKey) {
          const flowMap = this._flowStatus.get(currentFlowKey);

          if (flowMap) {
            const s = flowMap.get(processKey);
            if (s) s.aborted = true;
          } else {
            flowMap.set(processKey, {
              signalKey: '',
              started: true,
              finished: false,
              aborted: true
            });
          }
        } // 找出第一個未完成的階段


        findFirstUnfinishedProcess(flowKey) {
          const flowMap = this._flowStatus.get(flowKey);

          if (!flowMap) return null;

          for (const [key, s] of flowMap.entries()) {
            if (s.started && !s.finished) return key;
          }

          return null;
        } // 查詢目前所有階段狀態


        getAllFlowStatus() {
          const copiedFlowStatus = new Map();

          for (const [flowKey, innerMap] of this._flowStatus.entries()) {
            const copiedInnerMap = new Map();

            for (const [processKey, status] of innerMap.entries()) {
              //--deep clone
              const copiedStatus = { ...status
              };
              copiedInnerMap.set(processKey, copiedStatus);
            }

            copiedFlowStatus.set(flowKey, copiedInnerMap);
          }

          return copiedFlowStatus;
        }
        /**
         * 移除指定流程的狀態
         * @param flowKey 流程的唯一識別鍵
         * @returns 是否成功移除(false表示沒有此流程)
         */


        removeFlowStatus(flowKey) {
          return this._flowStatus.delete(flowKey);
        } // 清除所有紀錄


        reset() {
          this._abortFlowMap.clear();

          this._flowStatus.clear();
        }

      });

      //流程內階段追蹤
      //private _stageStatusMap: Map<string, { started: boolean; finished: boolean; aborted: boolean }> = new Map();
      //private _onFlowAbortCallback: (key: string) => void;
      FlowAbortManager._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=96f270bfd2fedebeceb71b401646950938ae76e2.js.map