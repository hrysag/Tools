System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GameViewEvents, NotifySubject;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a65c6DroVVPZa3yH8Ozy4Zm", "EventTypesDefinition", undefined);

      _export("GameViewEvents", GameViewEvents = /*#__PURE__*/function (GameViewEvents) {
        GameViewEvents["ALL_REEL_END"] = "reelRollEnd";
        GameViewEvents["SHOW_END"] = "showEnd";
        GameViewEvents["MANUAL_NO_WIN"] = "manualNoWin";
        GameViewEvents["BUY_FG"] = "BuyFgToBet";
        GameViewEvents["SET_BOTTOM_TEXT"] = "SetBottomText";
        GameViewEvents["GET_CURRENT_BET"] = "GetCurrentBet";
        GameViewEvents["RUN_TEST_MODE"] = "RunTestMode";
        GameViewEvents["INTERRUPT_PROCESS"] = "InterruptProcess";
        return GameViewEvents;
      }({}));

      _export("NotifySubject", NotifySubject = /*#__PURE__*/function (NotifySubject) {
        NotifySubject["GAME_VIEW_SUBJECT"] = "GameView_Subject";
        NotifySubject["GAME_ANI_PROCESS_SUBJECT"] = "GameAniProcess_Subject";
        return NotifySubject;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f18ab1d1827a03bb0bb0a2bbbd4bd49d79254fa1.js.map