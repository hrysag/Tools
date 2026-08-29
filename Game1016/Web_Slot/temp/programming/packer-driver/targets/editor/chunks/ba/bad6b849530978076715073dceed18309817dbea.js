System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UniSlotMachine, _dec, _class, _crd, ccclass, property, UniSlotMachineTempo;

  function _reportPossibleCrUseOfUniReelViewExample(extras) {
    _reporterNs.report("UniReelViewExample", "./UniReelViewTempo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniSlotMachine(extras) {
    _reporterNs.report("UniSlotMachine", "../../../../ReelTemplate/v3", _context.meta, extras);
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

      _cclegacy._RF.push({}, "87302Lw9i9B5KHG22DeXX9o", "UniSlotMachineTempo", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UniSlotMachineTempo", UniSlotMachineTempo = (_dec = ccclass('UniSlotMachineTempo'), _dec(_class = class UniSlotMachineTempo extends (_crd && UniSlotMachine === void 0 ? (_reportPossibleCrUseOfUniSlotMachine({
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
//# sourceMappingURL=bad6b849530978076715073dceed18309817dbea.js.map