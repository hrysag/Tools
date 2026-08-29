System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GlobalAccessFacade, _crd, globalAccessImpl;

  function _reportPossibleCrUseOfGlobalAccessFacade(extras) {
    _reporterNs.report("GlobalAccessFacade", "../../MyUtils/BasicGlobalDataState/GlobalAccessFacade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameGlobalData(extras) {
    _reporterNs.report("GameGlobalData", "../GameGlobalData1016", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GlobalAccessFacade = _unresolved_2.GlobalAccessFacade;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "64e24FhWz5Jxo930FNo2GX0", "GlobalAccessImpl", undefined);

      _export("globalAccessImpl", globalAccessImpl = new (_crd && GlobalAccessFacade === void 0 ? (_reportPossibleCrUseOfGlobalAccessFacade({
        error: Error()
      }), GlobalAccessFacade) : GlobalAccessFacade)());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c32d3b5da544c223bc901fb47172c76b4b454539.js.map