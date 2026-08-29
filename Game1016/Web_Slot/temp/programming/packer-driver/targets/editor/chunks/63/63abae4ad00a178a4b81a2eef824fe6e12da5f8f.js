System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UniSlotMachine, _dec, _class, _crd, ccclass, property, UniSlotMachineExample;

  function _reportPossibleCrUseOfUniSlotMachine(extras) {
    _reporterNs.report("UniSlotMachine", "../../Scripts/UniSlotMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniReelViewExample(extras) {
    _reporterNs.report("UniReelViewExample", "./UniReelViewExample", _context.meta, extras);
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

      _cclegacy._RF.push({}, "cde50SMfTlBuI5ZArBRjGJN", "UniSlotMachineExample", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UniSlotMachineExample", UniSlotMachineExample = (_dec = ccclass('UniSlotMachineExample'), _dec(_class = class UniSlotMachineExample extends (_crd && UniSlotMachine === void 0 ? (_reportPossibleCrUseOfUniSlotMachine({
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
//# sourceMappingURL=63abae4ad00a178a4b81a2eef824fe6e12da5f8f.js.map