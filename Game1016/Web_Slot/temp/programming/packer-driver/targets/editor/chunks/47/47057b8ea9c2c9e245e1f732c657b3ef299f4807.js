System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, FlowTracker, _crd;

  function _reportPossibleCrUseOfIFlowTrackerInfo(extras) {
    _reporterNs.report("IFlowTrackerInfo", "./IFlowTrackerInfo", _context.meta, extras);
  }

  _export("FlowTracker", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "122ed0GURNNWLA/QjyHPzCt", "FlowTracker", undefined);

      _export("FlowTracker", FlowTracker = class FlowTracker {
        constructor() {
          this._activeFlow = void 0;
          this._steps = [];
          this._isAborted = false;
        }

        startFlow(flowKey) {
          this._activeFlow = flowKey;
          this._steps = [];
          this._isAborted = false;
        }

        recordStep(stepKey) {
          if (this._isAborted) return;

          this._steps.push(stepKey);
        }

        endFlow() {
          this._activeFlow = null;
          this._steps = [];
          this._isAborted = false;
        }

        stopFlow() {
          this._activeFlow = null;
          this._isAborted = false;
        }

        abortFlow() {
          this._isAborted = true;
        }

        getProgress() {
          const progress = {
            activeFlow: this._activeFlow,
            steps: this._steps,
            isAborted: this._isAborted
          };
          return progress;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=47057b8ea9c2c9e245e1f732c657b3ef299f4807.js.map