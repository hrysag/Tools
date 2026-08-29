System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, WaninPlayer, ErrorCode, PlayMode, _crd;

  function _reportPossibleCrUseOfWaninPlayer(extras) {
    _reporterNs.report("WaninPlayer", "./index.mjs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCode(extras) {
    _reporterNs.report("ErrorCode", "./index.mjs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayMode(extras) {
    _reporterNs.report("PlayMode", "./index.mjs", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      WaninPlayer = _unresolved_2.default;
    }, function (_unresolved_3) {
      ErrorCode = _unresolved_3.ErrorCode;
      PlayMode = _unresolved_3.PlayMode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa045wlDlZK5aOZObnvEGnK", "WaninPlayer", undefined);

      _export("PlayMode", PlayMode);

      _export("ErrorCode", ErrorCode);

      _export("WaninPlayer", WaninPlayer);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=53692d16e02a4ca0c13779d41a4c42048919cc7f.js.map