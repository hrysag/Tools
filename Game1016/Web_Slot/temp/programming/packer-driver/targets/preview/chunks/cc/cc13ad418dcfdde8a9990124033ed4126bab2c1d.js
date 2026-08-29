System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, StateMachine, _crd;

  function _reportPossibleCrUseOfStateBase(extras) {
    _reporterNs.report("StateBase", "./StateBase", _context.meta, extras);
  }

  _export("StateMachine", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c69075kx2xEQoXaV3CINlbG", "StateMachine", undefined); // StateMachine.ts


      _export("StateMachine", StateMachine = class StateMachine {
        constructor() {
          this.states = new Map();
          this.currentState = null;
          this.currentStateName = "";
        }

        addState(name, state) {
          if (this.states.get(name)) {
            console.error("State " + name + " already exists.");
            return;
          }

          this.states.set(name, state);
        }

        changeState(stateName) {
          if (!this.states.get(stateName)) {
            console.error("State " + stateName + " does not exist.");
            return;
          }

          if (this.currentStateName === stateName) {
            console.warn("Already in state " + stateName + ".");
            return;
          }

          ; // 離開舊狀態

          if (this.currentState) {
            // 將要離開的狀態的 nextStateName 設為即將進入的狀態名稱
            this.currentState.nextStateName = stateName;
            this.currentState.onExit();
          } // 切換新狀態


          this.currentState = this.states.get(stateName); // 將要進入的狀態的 previousStateName 設為之前的狀態名稱

          this.currentState.previousStateName = this.currentStateName; // 更新目前狀態名稱

          this.currentStateName = stateName;
          this.currentState.onEnter();
        }

        update(dt) {
          if (this.currentState) {
            var _this$currentState;

            (_this$currentState = this.currentState) == null || _this$currentState.onUpdate(dt);
          }
        }

        getCurrentStateName() {
          if (!this.currentState) {
            console.error("Current state is null.");
            return null;
          }

          return this.currentStateName;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cc13ad418dcfdde8a9990124033ed4126bab2c1d.js.map