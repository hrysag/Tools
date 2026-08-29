System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameState, BasicGameModeManager, _crd;

  function _reportPossibleCrUseOfIBasicGameModeManager(extras) {
    _reporterNs.report("IBasicGameModeManager", "./IBasicGameModeManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGameMode(extras) {
    _reporterNs.report("IGameMode", "./IBasicGameModeManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../GameStateConfigDef/GameStateConfigDef", _context.meta, extras);
  }

  _export("BasicGameModeManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GameState = _unresolved_2.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "896e0CBH+RBn60KaP0ads31", "BasicGameModeManager", undefined);

      /**
       * @author Eric 20250805
       * @description: 管理遊戲模式的狀態
       * - 這個類別負責管理所有遊戲模式的狀態變化。
       * - 可以添加或移除遊戲模式，並且可以改變所有持有IGameMode的物件
       * -gameViewManager當中初始化
       */
      _export("BasicGameModeManager", BasicGameModeManager = class BasicGameModeManager {
        constructor() {
          this._setGameModes = new Set();
          this._currentGameState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NULL;
        }

        addGameMode(gameMode) {
          this._setGameModes.add(gameMode); //console.log();

        }

        removeGameMode(gameMode) {
          this._setGameModes.delete(gameMode);
        }

        cleanAll() {
          this._setGameModes.clear();
        }

        changeAllGameState(value) {
          if (this._currentGameState === value) return;
          this._currentGameState = value;

          for (const gameMode of this._setGameModes) {
            gameMode.changeGameState(value);
          }
        }

        getCurrentGameState() {
          return this._currentGameState;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=df39c3fdbdd9bbbeb152d8b706c00baf96a011c1.js.map