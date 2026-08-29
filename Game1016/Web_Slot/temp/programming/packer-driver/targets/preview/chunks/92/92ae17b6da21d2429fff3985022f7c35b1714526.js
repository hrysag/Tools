System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GameState, TransitionsState, ShowBottomTextStatus;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c9e51cs3S9LyZVi3OhThMHU", "GameStateConfigDef", undefined);

      _export("GameState", GameState = /*#__PURE__*/function (GameState) {
        GameState[GameState["NULL"] = 0] = "NULL";
        GameState[GameState["BEGIN"] = 1] = "BEGIN";
        GameState[GameState["NORMAL"] = 2] = "NORMAL";
        GameState[GameState["RE_SPINE"] = 3] = "RE_SPINE";
        GameState[GameState["FREE_GAME"] = 4] = "FREE_GAME";
        return GameState;
      }({}));

      _export("TransitionsState", TransitionsState = /*#__PURE__*/function (TransitionsState) {
        TransitionsState[TransitionsState["IN"] = 0] = "IN";
        TransitionsState[TransitionsState["OUT"] = 1] = "OUT";
        TransitionsState[TransitionsState["NONE"] = 2] = "NONE";
        return TransitionsState;
      }({}));

      _export("ShowBottomTextStatus", ShowBottomTextStatus = /*#__PURE__*/function (ShowBottomTextStatus) {
        ShowBottomTextStatus[ShowBottomTextStatus["NO_WIN"] = 0] = "NO_WIN";
        ShowBottomTextStatus[ShowBottomTextStatus["ROLLING"] = 1] = "ROLLING";
        ShowBottomTextStatus[ShowBottomTextStatus["WIN"] = 2] = "WIN";
        ShowBottomTextStatus[ShowBottomTextStatus["IDLE"] = 3] = "IDLE";
        ShowBottomTextStatus[ShowBottomTextStatus["DEBUG"] = 4] = "DEBUG";
        return ShowBottomTextStatus;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=92ae17b6da21d2429fff3985022f7c35b1714526.js.map