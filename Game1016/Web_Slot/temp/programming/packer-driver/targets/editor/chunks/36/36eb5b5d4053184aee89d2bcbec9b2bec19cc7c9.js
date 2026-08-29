System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, StateBase, TestIdleState, _crd;

  function _reportPossibleCrUseOfStateBase(extras) {
    _reporterNs.report("StateBase", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  _export("TestIdleState", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      StateBase = _unresolved_2.StateBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "750b1q4MDtBCJc6TGPsnNk3", "TestIdleState", undefined);

      _export("TestIdleState", TestIdleState = class TestIdleState extends (_crd && StateBase === void 0 ? (_reportPossibleCrUseOfStateBase({
        error: Error()
      }), StateBase) : StateBase) {
        constructor(stateName, view = null) {
          super(stateName);
        }

        onEnter() {
          console.log(`進入${this.stateName}狀態, 上一個狀態是${this.previousStateName}`);
        }

        onExit() {
          console.log(`離開${this.stateName}狀態, 下一個狀態是${this.nextStateName}`);
        }

        onUpdate(dt) {// 閒置中更新邏輯（通常不會有）
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=36eb5b5d4053184aee89d2bcbec9b2bec19cc7c9.js.map