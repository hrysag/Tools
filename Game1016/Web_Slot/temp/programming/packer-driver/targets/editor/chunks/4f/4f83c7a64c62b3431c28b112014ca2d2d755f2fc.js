System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameState, TransitionsState, ShowBottomTextStatus, InitRandomGenerator, GameUtilsTools, BasicShowAniProcess, AbstractBasicGameController, BasicGameGlobalData, NotifyCation, GenericUIManager, WaysWinScoreAnalyzer, _crd;

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../MyUtils/GameStateConfigDef/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTransitionsState(extras) {
    _reporterNs.report("TransitionsState", "../MyUtils/GameStateConfigDef/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowBottomTextStatus(extras) {
    _reporterNs.report("ShowBottomTextStatus", "../MyUtils/GameStateConfigDef/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGameMode(extras) {
    _reporterNs.report("IGameMode", "../MyUtils/BasicGameViewManager/IBasicGameModeManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRandomData(extras) {
    _reporterNs.report("IRandomData", "../MyUtils/BasicRandomGenerator/InitRandomGenerator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitRandomGenerator(extras) {
    _reporterNs.report("InitRandomGenerator", "../MyUtils/BasicRandomGenerator/InitRandomGenerator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIStrategyRandomGenerator(extras) {
    _reporterNs.report("IStrategyRandomGenerator", "../MyUtils/BasicRandomGenerator/IStrategyRandomGenerator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtilsTools(extras) {
    _reporterNs.report("GameUtilsTools", "../MyUtils/GameUtilsTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicShowAniProcess(extras) {
    _reporterNs.report("BasicShowAniProcess", "../MyUtils/BasicShowAniProcess/BasicShowAniProcess", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbstractBasicGameController(extras) {
    _reporterNs.report("AbstractBasicGameController", "../MyUtils/BasicGameController/AbstractBasicGameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicGameGlobalData(extras) {
    _reporterNs.report("BasicGameGlobalData", "../MyUtils/BasicGlobalDataState/BasicGameGlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReelInfo(extras) {
    _reporterNs.report("IReelInfo", "../MyUtils/BasicGameDataDefinition/BasicGameDataDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroupAniData(extras) {
    _reporterNs.report("GroupAniData", "../MyUtils/BasicGameDataDefinition/BasicGameDataDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinScoreData(extras) {
    _reporterNs.report("WinScoreData", "../MyUtils/BasicGameDataDefinition/BasicGameDataDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifyCation(extras) {
    _reporterNs.report("NotifyCation", "../MyUtils/EventSystem/NotifyCation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUIManager(extras) {
    _reporterNs.report("GenericUIManager", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaysWinScoreAnalyzer(extras) {
    _reporterNs.report("WaysWinScoreAnalyzer", "db://assets/Scripts/GameScripts/BoardAnalysis/v1", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GameState = _unresolved_2.GameState;
      TransitionsState = _unresolved_2.TransitionsState;
      ShowBottomTextStatus = _unresolved_2.ShowBottomTextStatus;
    }, function (_unresolved_3) {
      InitRandomGenerator = _unresolved_3.InitRandomGenerator;
    }, function (_unresolved_4) {
      GameUtilsTools = _unresolved_4.GameUtilsTools;
    }, function (_unresolved_5) {
      BasicShowAniProcess = _unresolved_5.BasicShowAniProcess;
    }, function (_unresolved_6) {
      AbstractBasicGameController = _unresolved_6.AbstractBasicGameController;
    }, function (_unresolved_7) {
      BasicGameGlobalData = _unresolved_7.BasicGameGlobalData;
    }, function (_unresolved_8) {
      NotifyCation = _unresolved_8.NotifyCation;
    }, function (_unresolved_9) {
      GenericUIManager = _unresolved_9.GenericUIManager;
    }, function (_unresolved_10) {
      WaysWinScoreAnalyzer = _unresolved_10.WaysWinScoreAnalyzer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "55c1fYGQrpD0ojhDOr4hcBr", "ReferencePathForMyUtils", undefined); //import { GenericUIManager } from 'db://assets/GenericUI/Scripts/GenericUIManager';
      //import { WaysWinScoreAnalyzer } from 'db://assets/Scripts/GameScripts/BoardAnalysis/WaysWinScoreAnalyzer';


      _export("ShowBottomTextStatus", ShowBottomTextStatus);

      _export("TransitionsState", TransitionsState);

      _export("GenericUIManager", GenericUIManager);

      _export("WaysWinScoreAnalyzer", WaysWinScoreAnalyzer);

      _export("GameState", GameState);

      _export("InitRandomGenerator", InitRandomGenerator);

      _export("AbstractBasicGameController", AbstractBasicGameController);

      _export("GameUtilsTools", GameUtilsTools);

      _export("BasicShowAniProcess", BasicShowAniProcess);

      _export("BasicGameGlobalData", BasicGameGlobalData);

      _export("NotifyCation", NotifyCation); //---interface


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4f83c7a64c62b3431c28b112014ca2d2d755f2fc.js.map