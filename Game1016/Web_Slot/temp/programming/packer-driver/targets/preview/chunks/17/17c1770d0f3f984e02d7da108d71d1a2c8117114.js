System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, FlowTracker, FlowTrackerManager, _crd;

  function _reportPossibleCrUseOfFlowTracker(extras) {
    _reporterNs.report("FlowTracker", "./FlowTracker/FlowTracker", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFlowTrackerInfo(extras) {
    _reporterNs.report("IFlowTrackerInfo", "./FlowTracker/IFlowTrackerInfo", _context.meta, extras);
  }

  _export("FlowTrackerManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      FlowTracker = _unresolved_2.FlowTracker;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "84726cPXshPb7g9G9gF9gw1", "FlowTrackerManager", undefined);

      /**
       * FlowTrackerManager 用於管理多個 FlowTracker 實例，每個實例對應一個獨立的異步操作流程。
       * 用decorator 來修飾需要追蹤的非同步方法
       * TIPS:這裡只是單純的管理流程追蹤器,不會去管理AbortSignal的生命週期 
       * 外面在封裝一層facade 來管理AbortSignal的生命週期
       * https://juejin.cn/post/7366441097583984680
       * https://juejin.cn/post/7202812701440589881
       * https://oldmo860617.medium.com/%E5%8D%81%E5%88%86%E9%90%98%E5%B8%B6%E4%BD%A0%E4%BA%86%E8%A7%A3-typescript-decorator-48c2ae9e246d
       * 
       * 
       * 
       */
      _export("FlowTrackerManager", FlowTrackerManager = class FlowTrackerManager {
        static getInstance() {
          return FlowTrackerManager._instance ? FlowTrackerManager._instance : new FlowTrackerManager();
        }

        constructor() {
          this._flowTrackerMap = new Map();

          if (FlowTrackerManager._instance != null) {
            throw new Error('plz use getInstance() to get FlowTrackerManager');
          }

          FlowTrackerManager._instance = this;
        }

        createFlowTracker(abortSignalKey) {
          if (this._flowTrackerMap.has(abortSignalKey)) {
            console.warn("FlowTrackerManager: FlowTracker with key [" + abortSignalKey + "] already exists. Overwriting.");
          }

          this._flowTrackerMap.set(abortSignalKey, new Map());
        }

        reset() {
          this._flowTrackerMap.clear();
        }
        /**
         * 
         * @param abortSignalKey 
         * @param flowKey 流程名稱(外部呼叫的方法名稱)
         */


        startFlow(abortSignalKey, flowKey) {
          var trackerMap = this._flowTrackerMap.get(abortSignalKey);

          if (!trackerMap) {
            throw new Error("FlowTrackerManager: No FlowTracker found for key [" + abortSignalKey + "]. Please create one first.");
          }

          var tracker = new (_crd && FlowTracker === void 0 ? (_reportPossibleCrUseOfFlowTracker({
            error: Error()
          }), FlowTracker) : FlowTracker)();
          tracker.startFlow(flowKey);
          trackerMap.set(flowKey, tracker);
        }

        recordStep(abortSignalKey, flowKey, stepKey) {
          var tracker = this.getCurrentTracker(abortSignalKey, flowKey);

          if (tracker) {
            tracker.recordStep(stepKey);
          }
        }
        /**
         * 終止整個流程(呼叫的方法)
         * TIPS:結束後會刪除目前的tracker資料
         * @param abortSignalKey 
         * @param flowKey 
         * @returns 
         */


        endFlow(abortSignalKey, flowKey) {
          var trackerMap = this._flowTrackerMap.get(abortSignalKey);

          if (!trackerMap) {
            throw new Error("FlowTrackerManager: No FlowTracker found for key [" + abortSignalKey + "]. Please create one first.");
          }

          if (!trackerMap.has(flowKey)) {
            console.warn("FlowTrackerManager: No FlowTracker for flow [" + flowKey + "] under key [" + abortSignalKey + "]. Cannot end flow.");
            return;
          } else {
            var tracker = trackerMap.get(flowKey);
            tracker.endFlow();
            trackerMap.delete(flowKey);
          }
        }
        /**
         * 中止目前的流程(呼叫的方法)
         * 有被標註的狀態下,直接透過asyncScop去阻斷後續的步驟
         * @param abortSignalKey 
         * @param flowKey 
         * @returns 
         */


        abortFlow(abortSignalKey, flowKey) {
          var tracker = this.getCurrentTracker(abortSignalKey, flowKey);

          if (tracker) {
            tracker.abortFlow();
          }
        }
        /**
         * 紀錄阻斷但不刪除資料
         * @param abortSignalKey 
         * @param flowKey 
         */


        stopFlow(abortSignalKey, flowKey) {
          var tracker = this.getCurrentTracker(abortSignalKey, flowKey);

          if (tracker) {
            tracker.stopFlow();
          }
        }
        /**
         * 有被呼叫的才會被記錄進去,可以透過記錄到哪個方法來知道目前的進度
         * @param abortSignalKey 
         * @param flowKey 
         * @returns 
         */


        getProgress(abortSignalKey, flowKey) {
          var tracker = this.getCurrentTracker(abortSignalKey, flowKey);

          if (tracker) {
            return tracker.getProgress();
          }

          return null;
        }

        getCurrentTracker(abortSignalKey, flowKey) {
          var trackerMap = this._flowTrackerMap.get(abortSignalKey);

          if (!trackerMap || trackerMap.size === 0) {
            console.warn("FlowTrackerManager: No active FlowTracker for key [" + abortSignalKey + "]. Cannot record step.");
            return null;
          }

          if (!trackerMap.has(flowKey)) {
            console.warn("FlowTrackerManager: No FlowTracker for flow [" + flowKey + "] under key [" + abortSignalKey + "]. Cannot record step.");
            return null;
          } else {
            return trackerMap.get(flowKey);
          }
        }

      });

      FlowTrackerManager._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=17c1770d0f3f984e02d7da108d71d1a2c8117114.js.map