System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BasicShowResultProcessKey, _crd, ShowResultProcessKey1016;

  function extendProcessKeys(base, ext) {
    return { ...base,
      ...ext
    };
  }

  function _reportPossibleCrUseOfBasicShowResultProcessKey(extras) {
    _reporterNs.report("BasicShowResultProcessKey", "../MyUtils/AsyncScope/Definitions/BasicGameFlowProcessKey", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BasicShowResultProcessKey = _unresolved_2.BasicShowResultProcessKey;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e4684jPQlRITaSNO3u4R2Ds", "FlowProcessKey1016", undefined);

      _export("ShowResultProcessKey1016", ShowResultProcessKey1016 = extendProcessKeys(_crd && BasicShowResultProcessKey === void 0 ? (_reportPossibleCrUseOfBasicShowResultProcessKey({
        error: Error()
      }), BasicShowResultProcessKey) : BasicShowResultProcessKey, {
        Wild_MOVEMENT: 'WILD_MOVEMENT',
        Wild_NO_MOVEMENT: 'WILD_NO_MOVEMENT'
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ffe5291aabae77b797a3c72ad93b4d572d4e0d74.js.map