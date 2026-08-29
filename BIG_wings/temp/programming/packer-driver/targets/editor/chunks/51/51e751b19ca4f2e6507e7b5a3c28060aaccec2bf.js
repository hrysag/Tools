System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, CommandEventName;

  function _reportPossibleCrUseOfEmitter(extras) {
    _reporterNs.report("Emitter", "strict-event-emitter", _context.meta, extras);
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

      _cclegacy._RF.push({}, "35219hTnPpDOY3SAe2WrLAW", "Command", undefined);

      _export("CommandEventName", CommandEventName = /*#__PURE__*/function (CommandEventName) {
        CommandEventName["SPIN"] = "spin";
        CommandEventName["STOP"] = "stop";
        CommandEventName["SCORE"] = "score";
        CommandEventName["MAX_BET"] = "maxBet";
        CommandEventName["LINE_BET"] = "lineBet";
        CommandEventName["LINE_BET_MINUS"] = "lineBetMinus";
        CommandEventName["LINE"] = "line";
        CommandEventName["LINE_MINUS"] = "lineMinus";
        CommandEventName["EXCHANGE"] = "exchange";
        CommandEventName["DOUBLE"] = "double";
        CommandEventName["UPDATE_LINEBET"] = "updatelinebet";
        CommandEventName["UPDATE_LINE"] = "updateline";
        CommandEventName["CHANGE_RATIO"] = "changeratio";
        CommandEventName["TURBO"] = "turbo";
        CommandEventName["BUY_FREEGAME"] = "buyfreegame";
        return CommandEventName;
      }({}));

      ;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=51e751b19ca4f2e6507e7b5a3c28060aaccec2bf.js.map