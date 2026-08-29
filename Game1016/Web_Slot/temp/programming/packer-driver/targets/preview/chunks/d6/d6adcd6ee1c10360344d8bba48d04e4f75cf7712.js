System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UniSlotMachine, _dec, _class, _crd, ccclass, property, UniSlotMachineExample1016;

  function _reportPossibleCrUseOfUniSlotMachine(extras) {
    _reporterNs.report("UniSlotMachine", "./ReferencePathForUniSlot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniReelViewExample(extras) {
    _reporterNs.report("UniReelViewExample1016", "./UniReelViewExample1016", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      UniSlotMachine = _unresolved_2.UniSlotMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "85a28/2e89LCKl4GeXoY+ax", "UniSlotMachineExample1016", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UniSlotMachineExample1016", UniSlotMachineExample1016 = (_dec = ccclass('UniSlotMachineExample1016'), _dec(_class = class UniSlotMachineExample1016 extends (_crd && UniSlotMachine === void 0 ? (_reportPossibleCrUseOfUniSlotMachine({
        error: Error()
      }), UniSlotMachine) : UniSlotMachine) {
        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d6adcd6ee1c10360344d8bba48d04e4f75cf7712.js.map