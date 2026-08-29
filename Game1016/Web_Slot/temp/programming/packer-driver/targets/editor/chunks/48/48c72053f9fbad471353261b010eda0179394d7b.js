System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, TestStateEnum, TestIdleState, TestSpinState, TestWinState, StateMachine, _dec, _class, _crd, ccclass, property, StateTest;

  function _reportPossibleCrUseOfTestStateEnum(extras) {
    _reporterNs.report("TestStateEnum", "./StateTestConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTestIdleState(extras) {
    _reporterNs.report("TestIdleState", "./TestIdleState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTestSpinState(extras) {
    _reporterNs.report("TestSpinState", "./TestSpinState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTestWinState(extras) {
    _reporterNs.report("TestWinState", "./TestWinState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      TestStateEnum = _unresolved_2.TestStateEnum;
    }, function (_unresolved_3) {
      TestIdleState = _unresolved_3.TestIdleState;
    }, function (_unresolved_4) {
      TestSpinState = _unresolved_4.TestSpinState;
    }, function (_unresolved_5) {
      TestWinState = _unresolved_5.TestWinState;
    }, function (_unresolved_6) {
      StateMachine = _unresolved_6.StateMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd445ENUgNBgo5X05fIAp2G", "StateTest", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StateTest", StateTest = (_dec = ccclass('StateTest'), _dec(_class = class StateTest extends Component {
        constructor(...args) {
          super(...args);
          this.fsm = new (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine)();
        }

        start() {
          this.fsm.addState((_crd && TestStateEnum === void 0 ? (_reportPossibleCrUseOfTestStateEnum({
            error: Error()
          }), TestStateEnum) : TestStateEnum).Idle, new (_crd && TestIdleState === void 0 ? (_reportPossibleCrUseOfTestIdleState({
            error: Error()
          }), TestIdleState) : TestIdleState)((_crd && TestStateEnum === void 0 ? (_reportPossibleCrUseOfTestStateEnum({
            error: Error()
          }), TestStateEnum) : TestStateEnum).Idle));
          this.fsm.addState((_crd && TestStateEnum === void 0 ? (_reportPossibleCrUseOfTestStateEnum({
            error: Error()
          }), TestStateEnum) : TestStateEnum).Spin, new (_crd && TestSpinState === void 0 ? (_reportPossibleCrUseOfTestSpinState({
            error: Error()
          }), TestSpinState) : TestSpinState)((_crd && TestStateEnum === void 0 ? (_reportPossibleCrUseOfTestStateEnum({
            error: Error()
          }), TestStateEnum) : TestStateEnum).Spin));
          this.fsm.addState((_crd && TestStateEnum === void 0 ? (_reportPossibleCrUseOfTestStateEnum({
            error: Error()
          }), TestStateEnum) : TestStateEnum).Win, new (_crd && TestWinState === void 0 ? (_reportPossibleCrUseOfTestWinState({
            error: Error()
          }), TestWinState) : TestWinState)((_crd && TestStateEnum === void 0 ? (_reportPossibleCrUseOfTestStateEnum({
            error: Error()
          }), TestStateEnum) : TestStateEnum).Win));
          this.fsm.changeState((_crd && TestStateEnum === void 0 ? (_reportPossibleCrUseOfTestStateEnum({
            error: Error()
          }), TestStateEnum) : TestStateEnum).Idle);
        }

        onBtnGoWinClick() {
          this.fsm.changeState((_crd && TestStateEnum === void 0 ? (_reportPossibleCrUseOfTestStateEnum({
            error: Error()
          }), TestStateEnum) : TestStateEnum).Win);
        }

        onBtnGoIdleClick() {
          this.fsm.changeState((_crd && TestStateEnum === void 0 ? (_reportPossibleCrUseOfTestStateEnum({
            error: Error()
          }), TestStateEnum) : TestStateEnum).Idle);
        }

        onBtnGoSpinClick() {
          this.fsm.changeState((_crd && TestStateEnum === void 0 ? (_reportPossibleCrUseOfTestStateEnum({
            error: Error()
          }), TestStateEnum) : TestStateEnum).Spin);
        }

        update(deltaTime) {
          this.fsm.update(deltaTime);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=48c72053f9fbad471353261b010eda0179394d7b.js.map