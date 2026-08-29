System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ContainerWholeBehavior, GameState, GlobalAccessReader, GameGlobalKeys, _dec, _class, _crd, ccclass, property, NG_UI_BKG_Display;

  function _reportPossibleCrUseOfContainerWholeBehavior(extras) {
    _reporterNs.report("ContainerWholeBehavior", "../../../MyUtils/BasicShowContainerManager/Component/ContainerWholeBehavior", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalAccessReader(extras) {
    _reporterNs.report("GlobalAccessReader", "../../../DefinitionGameData1016/AccessDefs/GlobalAccess", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameGlobalKeys(extras) {
    _reporterNs.report("GameGlobalKeys", "../../../DefinitionGameData1016/GameGlobalData1016", _context.meta, extras);
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
      ContainerWholeBehavior = _unresolved_2.ContainerWholeBehavior;
    }, function (_unresolved_3) {
      GameState = _unresolved_3.GameState;
    }, function (_unresolved_4) {
      GlobalAccessReader = _unresolved_4.GlobalAccessReader;
    }, function (_unresolved_5) {
      GameGlobalKeys = _unresolved_5.GameGlobalKeys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e7e17IUGqpNLoViXuKh2sOs", "NG_UI_BKG_Display", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'v3', 'Label', 'UITransform', 'sp', 'game']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NG_UI_BKG_Display", NG_UI_BKG_Display = (_dec = ccclass('NG_UI_BKG_Display'), _dec(_class = class NG_UI_BKG_Display extends (_crd && ContainerWholeBehavior === void 0 ? (_reportPossibleCrUseOfContainerWholeBehavior({
        error: Error()
      }), ContainerWholeBehavior) : ContainerWholeBehavior) {
        constructor() {
          super();
        } //---給控制器去呼叫使用的(遊戲狀態改變時呼叫)-備用


        changeGameMode(gameState) {//this._currentGameState = gameState;
        }

        closeContainerTween() {
          var gameState = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).GameState);

          if (gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME || gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NULL) {
            super.closeContainerTween();
          }
        }

        openContainerTween() {
          var gameState = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).GameState);

          if (gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL) {
            super.openContainerTween();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9ed1ac26969eedac4d0424c70b76c85f9886d9c9.js.map