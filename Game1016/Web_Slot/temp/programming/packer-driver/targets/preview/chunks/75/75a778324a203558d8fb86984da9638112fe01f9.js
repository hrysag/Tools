System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, StateBase, TestSpinState, _crd;

  function _reportPossibleCrUseOfStateBase(extras) {
    _reporterNs.report("StateBase", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  _export("TestSpinState", void 0);

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

      _cclegacy._RF.push({}, "4bca1ashFtJfrXNEnmIHRnE", "TestSpinState", undefined);

      _export("TestSpinState", TestSpinState = class TestSpinState extends (_crd && StateBase === void 0 ? (_reportPossibleCrUseOfStateBase({
        error: Error()
      }), StateBase) : StateBase) {
        constructor(stateName, view) {
          if (view === void 0) {
            view = null;
          }

          super(stateName);
        }

        onEnter() {
          console.log("\u9032\u5165" + this.stateName + "\u72C0\u614B, \u4E0A\u4E00\u500B\u72C0\u614B\u662F" + this.previousStateName);
        }

        onExit() {
          console.log("\u96E2\u958B" + this.stateName + "\u72C0\u614B, \u4E0B\u4E00\u500B\u72C0\u614B\u662F" + this.nextStateName);
        }

        onUpdate(dt) {// 閒置中更新邏輯（通常不會有）
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=75a778324a203558d8fb86984da9638112fe01f9.js.map