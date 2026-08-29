System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, ToolBarEventName;

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

      _cclegacy._RF.push({}, "47091dtyBFAVaJjsl/dg4EC", "Toolbar", undefined);

      _export("ToolBarEventName", ToolBarEventName = /*#__PURE__*/function (ToolBarEventName) {
        ToolBarEventName["EXIT"] = "exit";
        ToolBarEventName["HELP"] = "help";
        ToolBarEventName["HISTORY"] = "history";
        ToolBarEventName["MUSIC"] = "music";
        ToolBarEventName["MUTE"] = "mute";
        ToolBarEventName["DEPOSIT"] = "deposit";
        ToolBarEventName["TAPMENU"] = "tapmenu";
        ToolBarEventName["ONEXCHANGE"] = "onexchange";
        ToolBarEventName["GAMEINFO"] = "gameinfo";
        return ToolBarEventName;
      }({}));

      ;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fb1137b5f0cf716215062120ca9554c5acab508d.js.map