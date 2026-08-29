System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GameState, TransitionsState, ShowBottomTextStatus;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc268RydedGdZg8SlhVcJ3L", "GameStateConfigDef", undefined);

      _export("GameState", GameState = /*#__PURE__*/function (GameState) {
        GameState[GameState["NORMAL"] = 0] = "NORMAL";
        GameState[GameState["RE_SPINE"] = 1] = "RE_SPINE";
        GameState[GameState["FREE_GAME"] = 2] = "FREE_GAME";
        GameState[GameState["BEGIN"] = 3] = "BEGIN";
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
      /*
      export class GAME_CURRENT_STATE {
          
          private static _currentGameState: GameState = GameState.BEGIN; // 設定初始值
      
          public static get currentGameState(): GameState {
              return this.currentGameState;
          }
      
          public static set currentGameState(value: GameState) {
              this._currentGameState = value;
          }
      }*/


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f6bea245d8870d01958a04e4b9e4a1ef69b263c1.js.map