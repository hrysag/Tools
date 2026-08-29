System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GameState, IWindowResize, Orientation, BasicGameStateAndRotationResolution, _crd;

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../../../DefinitionGameData/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIWindowResize(extras) {
    _reporterNs.report("IWindowResize", "db://assets/Scripts/Utils/IWindowResize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "db://assets/Scripts/Utils/Config", _context.meta, extras);
  }

  _export("BasicGameStateAndRotationResolution", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      GameState = _unresolved_2.GameState;
    }, function (_unresolved_3) {
      IWindowResize = _unresolved_3.IWindowResize;
    }, function (_unresolved_4) {
      Orientation = _unresolved_4.Orientation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "33765SKSpdB77OONZQFFp7Q", "IGameState", undefined);

      __checkObsolete__(['Component']);

      _export("BasicGameStateAndRotationResolution", BasicGameStateAndRotationResolution = class BasicGameStateAndRotationResolution extends (_crd && IWindowResize === void 0 ? (_reportPossibleCrUseOfIWindowResize({
        error: Error()
      }), IWindowResize) : IWindowResize) {
        constructor(...args) {
          super(...args);
          this._gameState = null;
          this._currentResizeOrientation = null;
        }

        /*
        protected onLoad(): void {
            super.onLoad();
          }*/
        init() {
          if (!this._gameState) {
            this.changeGameState((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).NORMAL);
          }
        }

        onWindowResize(orientation) {
          if (this._currentResizeOrientation == orientation) return;
          this._currentResizeOrientation = orientation;

          if (orientation == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            this.landscapeChange();
          } else if (orientation == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Portrait) {
            this.portraitChange();
          }
        }

        changeGameState(gameState, camp) {
          // Implement the method here
          if (this._gameState == gameState) return;
          this._gameState = gameState;
        }

        closeAllShowContainer() {
          this.node.active = false;
        }

        openAllShowContainer() {
          this.node.active = true;
        } //--不寫抽象類別是因為getComponent他不允許直接抽取抽象類別


        landscapeChange() {}

        portraitChange() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=239906a0bcad79274c7c7b7a41031ca0938dba60.js.map