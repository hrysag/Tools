System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Orientation, GameState, BasicGameStateAndRotationResolution, _dec, _class, _crd, ccclass, property, NG_BGFKRotationAndVisible;

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "db://assets/Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../../../DefinitionGameData/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicGameStateAndRotationResolution(extras) {
    _reporterNs.report("BasicGameStateAndRotationResolution", "./IGameState", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Orientation = _unresolved_2.Orientation;
    }, function (_unresolved_3) {
      GameState = _unresolved_3.GameState;
    }, function (_unresolved_4) {
      BasicGameStateAndRotationResolution = _unresolved_4.BasicGameStateAndRotationResolution;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41296IimdlDobeKR8+A3PFH", "NG_BGFKRotationAndVisible", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Game', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NG_BGFKRotationAndVisible", NG_BGFKRotationAndVisible = (_dec = ccclass('NG_BGFKRotationAndVisible'), _dec(_class = class NG_BGFKRotationAndVisible extends (_crd && BasicGameStateAndRotationResolution === void 0 ? (_reportPossibleCrUseOfBasicGameStateAndRotationResolution({
        error: Error()
      }), BasicGameStateAndRotationResolution) : BasicGameStateAndRotationResolution) {
        /**
         * 這個太靠邀了沒辦法透過container的parent來做
         * @param orientation 
         */
        changeGameState(gameState, camp) {
          // Implement the method here
          super.changeGameState(gameState, camp);

          if (this._gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME) {
            this.node.active = false;
          } //console.log('NG_BGFKRotationAndVisible', this.node.name);


          if ((this._gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL || this._gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).RE_SPINE) && this._currentResizeOrientation == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Portrait) {
            this.node.active = true;
          } else {
            this.node.active = false;
          }
        }

        openAllShowContainer() {
          if ((this._gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL || this._gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).RE_SPINE) && this._currentResizeOrientation == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Portrait) {
            this.node.active = true;
          }
        }

        landscapeChange() {
          this.node.active = false;
        }

        portraitChange() {
          if (this._gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL || this._gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).RE_SPINE) {
            this.node.active = true;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=20aa034fea1806f553c2a1b796daff3a006c30c8.js.map