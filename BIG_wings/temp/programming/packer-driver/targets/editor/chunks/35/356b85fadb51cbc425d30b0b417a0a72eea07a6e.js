System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, CostumeEventName;

  function _reportPossibleCrUseOfEmitter(extras) {
    _reporterNs.report("Emitter", "strict-event-emitter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinJPType(extras) {
    _reporterNs.report("WinJPType", "../connection/connector/data/Receive/onHitJackpot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommandEventMap(extras) {
    _reporterNs.report("CommandEventMap", "./Command", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfCommand(extras) {
    _reporterNs.report("IfCommand", "./Command", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfToolBar(extras) {
    _reporterNs.report("IfToolBar", "./Toolbar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToolbarEventMap(extras) {
    _reporterNs.report("ToolbarEventMap", "./Toolbar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMap(extras) {
    _reporterNs.report("EventMap", "strict-event-emitter", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1d5f3Vw5nRAr5BsQqiJdqJd", "Costume", undefined);

      _export("CostumeEventName", CostumeEventName = /*#__PURE__*/function (CostumeEventName) {
        CostumeEventName["END"] = "end";
        CostumeEventName["FREE"] = "free";
        CostumeEventName["HIT_BONUS"] = "hitBonus";
        CostumeEventName["END_BONUS"] = "endBonus";
        CostumeEventName["DOUBLE_UP"] = "doubleUp";
        return CostumeEventName;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=356b85fadb51cbc425d30b0b417a0a72eea07a6e.js.map