System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, FlowAsyncFacade, _crd;

  /**
   * 紀錄流程步驟的裝飾器 <採用裝飾器工廠>
   * TIPS:
   * 1. 需要搭配 AsyncScope 使用,並且在有建立 FlowTracker 的情況下使用
   * 2. 會自動取得 FlowTrackerManager 的單例來操作
   * 
   */

  /**
   * 流程步驟裝飾器
   * 
   * 用於標記 class 中的方法屬於哪個流程（flowKey），
   * 並在執行時自動向 FlowAsyncFacade 記錄步驟進度。
   * 
   * @param flowKey  流程名稱
   * @param stepKey  此方法的步驟名稱
   */
  function FlowStep(flowKey, stepKey) {
    return function (target, propertyKey, descriptor) {
      const original = descriptor.value;

      descriptor.value = async function (...args) {
        const self = this; // 從 this 取出 abortKey

        const abortKey = self._abortKey || self.abortSignalKey || "DefaultAbortKey"; // 使用外觀模式統一操作

        const facade = (_crd && FlowAsyncFacade === void 0 ? (_reportPossibleCrUseOfFlowAsyncFacade({
          error: Error()
        }), FlowAsyncFacade) : FlowAsyncFacade).getInstance();

        try {
          facade.recordStep(abortKey, flowKey, stepKey);
        } catch (err) {
          console.warn(`[FlowStep] Failed to record step '${stepKey}' under flow '${flowKey}' for abortKey '${abortKey}'`, err);
        } // 執行原始方法


        const result = original.apply(this, args); // 若方法回傳 Promise → 等待完成

        if (result instanceof Promise) {
          return result.then(r => r).catch(err => {
            console.error(`[FlowStep] Step '${stepKey}' in flow '${flowKey}' encountered an error:`, err);
            throw err;
          });
        } // 同步方法


        return result;
      };

      return descriptor;
    };
  }

  function _reportPossibleCrUseOfFlowAsyncFacade(extras) {
    _reporterNs.report("FlowAsyncFacade", "../FlowAsyncFacade", _context.meta, extras);
  }

  _export("FlowStep", FlowStep);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      FlowAsyncFacade = _unresolved_2.FlowAsyncFacade;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c0578O4tyREqpjL4apq4vfE", "FlowStep", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3b6af4152de94ecaa11e5f2694578da496262630.js.map