System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, PrefabAdapter, BasicSlotGameViewManager, BasicGameModeManager, AnimationControllersPoolManager, ProcessSlotDataCore, BinaryBuffer, AdditionalPurchaseType, CalculatePayTable016, AwardData, ClientData, ShowAniProcessController1016, UniSlotMachine1016, SymbolOwnerAgentID, GameGlobalKeys, AbstractBasicGameController, ProcessDataAfterServer, Direction, NotifySubject, GameViewEvents, BasicGameStepDelayTime, Utility, IntArray, SlotRelayLang, _crd;

  function _reportPossibleCrUseOfPrefabAdapter(extras) {
    _reporterNs.report("PrefabAdapter", "./MyUtils/ObjectPoolManager/PrefabAdapter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicSlotGameViewManager(extras) {
    _reporterNs.report("BasicSlotGameViewManager", "./MyUtils/BasicGameViewManager/BasicGameViewManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicGameModeManager(extras) {
    _reporterNs.report("BasicGameModeManager", "./MyUtils/BasicGameViewManager/BasicGameModeManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchInfoForRound(extras) {
    _reporterNs.report("IMatchInfoForRound", "./MyUtils/BasicProcessServerData/IProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMachPosInfo(extras) {
    _reporterNs.report("IMachPosInfo", "./MyUtils/BasicProcessServerData/IProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicProcessSlotData(extras) {
    _reporterNs.report("BasicProcessSlotData", "./MyUtils/BasicProcessServerData/IProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProcessSlotData(extras) {
    _reporterNs.report("IProcessSlotData", "./MyUtils/BasicProcessServerData/IProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationControllersPoolManager(extras) {
    _reporterNs.report("AnimationControllersPoolManager", "./MyUtils/ObjectPoolManager/AnimationControllersPoolManager/AnimationControllersPoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProcessSlotDataCore(extras) {
    _reporterNs.report("ProcessSlotDataCore", "./ServerBackSlotInfoData/ProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBinaryBuffer(extras) {
    _reporterNs.report("BinaryBuffer", "db://assets/Scripts/Communication/BinaryBuffer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdditionalPurchaseType(extras) {
    _reporterNs.report("AdditionalPurchaseType", "db://assets/Scripts/NetAgent/CConnectManager/CConnectDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCalculatePayTable(extras) {
    _reporterNs.report("CalculatePayTable016", "./ServerBackSlotInfoData/CalculatePayTable016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAwardData(extras) {
    _reporterNs.report("AwardData", "./ServerBackSlotInfoData/CalculatePayTable016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientData(extras) {
    _reporterNs.report("ClientData", "./ServerBackSlotInfoData/CalculatePayTable016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowAniProcessController(extras) {
    _reporterNs.report("ShowAniProcessController1016", "./GameDisplay1016/ShowAniProcessController1016/ShowAniProcessController1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniSlotMachine(extras) {
    _reporterNs.report("UniSlotMachine1016", "./Slot/UniSlotMachine1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolOwnerAgentID(extras) {
    _reporterNs.report("SymbolOwnerAgentID", "./DefinitionGameData1016/GameGlobalData1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameGlobalData(extras) {
    _reporterNs.report("GameGlobalData", "./DefinitionGameData1016/GameGlobalData1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameGlobalKeys(extras) {
    _reporterNs.report("GameGlobalKeys", "./DefinitionGameData1016/GameGlobalData1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbstractBasicGameController(extras) {
    _reporterNs.report("AbstractBasicGameController", "./MyUtils/ReferencePathForMyUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProcessDataAfterServer(extras) {
    _reporterNs.report("ProcessDataAfterServer", "./MyUtils/BasicProcessServerData/ProcessDataAfterServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchWildGroupResult(extras) {
    _reporterNs.report("IMatchWildGroupResult", "./MyUtils/BasicProcessServerData/IProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDirection(extras) {
    _reporterNs.report("Direction", "./MyUtils/BasicProcessServerData/IProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifySubject(extras) {
    _reporterNs.report("NotifySubject", "./MyUtils/BasicGameEvent/EventTypesDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewEvents(extras) {
    _reporterNs.report("GameViewEvents", "./MyUtils/BasicGameEvent/EventTypesDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGameStepDelayTimeList(extras) {
    _reporterNs.report("IGameStepDelayTimeList", "./MyUtils/BasicStepDelayTimeList/IGameStepDelayTimeList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelDelayMap(extras) {
    _reporterNs.report("ReelDelayMap", "./MyUtils/BasicStepDelayTimeList/IGameStepDelayTimeList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMs(extras) {
    _reporterNs.report("Ms", "./MyUtils/BasicStepDelayTimeList/IGameStepDelayTimeList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIOtherDelayMap(extras) {
    _reporterNs.report("IOtherDelayMap", "./MyUtils/BasicStepDelayTimeList/IGameStepDelayTimeList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDelayLevel(extras) {
    _reporterNs.report("DelayLevel", "./MyUtils/BasicStepDelayTimeList/IGameStepDelayTimeList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicGameStepDelayTime(extras) {
    _reporterNs.report("BasicGameStepDelayTime", "./MyUtils/BasicStepDelayTimeList/BasicGameStepDelayTime", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIntArray(extras) {
    _reporterNs.report("IntArray", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotRelayLang(extras) {
    _reporterNs.report("SlotRelayLang", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      var _exportObj = {};

      for (var _key in _unresolved_2) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _unresolved_2[_key];
      }

      _export(_exportObj);
    }, function (_unresolved_3) {
      var _exportObj2 = {};

      for (var _key2 in _unresolved_3) {
        if (_key2 !== "default" && _key2 !== "__esModule") _exportObj2[_key2] = _unresolved_3[_key2];
      }

      _export(_exportObj2);
    }, function (_unresolved_4) {
      var _exportObj3 = {};

      for (var _key3 in _unresolved_4) {
        if (_key3 !== "default" && _key3 !== "__esModule") _exportObj3[_key3] = _unresolved_4[_key3];
      }

      _export(_exportObj3);
    }, function (_unresolved_5) {
      var _exportObj4 = {};

      for (var _key4 in _unresolved_5) {
        if (_key4 !== "default" && _key4 !== "__esModule") _exportObj4[_key4] = _unresolved_5[_key4];
      }

      _export(_exportObj4);
    }, function (_unresolved_6) {
      var _exportObj5 = {};

      for (var _key5 in _unresolved_6) {
        if (_key5 !== "default" && _key5 !== "__esModule") _exportObj5[_key5] = _unresolved_6[_key5];
      }

      _export(_exportObj5);
    }, function (_unresolved_7) {
      var _exportObj6 = {};

      for (var _key6 in _unresolved_7) {
        if (_key6 !== "default" && _key6 !== "__esModule") _exportObj6[_key6] = _unresolved_7[_key6];
      }

      _export(_exportObj6);
    }, function (_unresolved_8) {
      PrefabAdapter = _unresolved_8.PrefabAdapter;
    }, function (_unresolved_9) {
      BasicSlotGameViewManager = _unresolved_9.BasicSlotGameViewManager;
    }, function (_unresolved_10) {
      BasicGameModeManager = _unresolved_10.BasicGameModeManager;
    }, function (_unresolved_11) {
      AnimationControllersPoolManager = _unresolved_11.AnimationControllersPoolManager;
    }, function (_unresolved_12) {
      ProcessSlotDataCore = _unresolved_12.ProcessSlotDataCore;
    }, function (_unresolved_13) {
      BinaryBuffer = _unresolved_13.BinaryBuffer;
    }, function (_unresolved_14) {
      AdditionalPurchaseType = _unresolved_14.AdditionalPurchaseType;
    }, function (_unresolved_15) {
      CalculatePayTable016 = _unresolved_15.CalculatePayTable016;
      AwardData = _unresolved_15.AwardData;
      ClientData = _unresolved_15.ClientData;
    }, function (_unresolved_16) {
      ShowAniProcessController1016 = _unresolved_16.ShowAniProcessController1016;
    }, function (_unresolved_17) {
      UniSlotMachine1016 = _unresolved_17.UniSlotMachine1016;
    }, function (_unresolved_18) {
      SymbolOwnerAgentID = _unresolved_18.SymbolOwnerAgentID;
    }, function (_unresolved_19) {
      GameGlobalKeys = _unresolved_19.GameGlobalKeys;
    }, function (_unresolved_20) {
      AbstractBasicGameController = _unresolved_20.AbstractBasicGameController;
    }, function (_unresolved_21) {
      ProcessDataAfterServer = _unresolved_21.ProcessDataAfterServer;
    }, function (_unresolved_22) {
      Direction = _unresolved_22.Direction;
    }, function (_unresolved_23) {
      NotifySubject = _unresolved_23.NotifySubject;
      GameViewEvents = _unresolved_23.GameViewEvents;
    }, function (_unresolved_24) {
      BasicGameStepDelayTime = _unresolved_24.BasicGameStepDelayTime;
    }, function (_unresolved_25) {
      Utility = _unresolved_25.Utility;
      IntArray = _unresolved_25.IntArray;
      SlotRelayLang = _unresolved_25.SlotRelayLang;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "74911fnzZ5DG49UioqrxEcK", "ReferencePath", undefined); //import { Utility } from 'db://assets/Scripts/Utils/Utility';
      //import { IntArray } from 'db://assets/Scripts/Utils/BinaryBufferParser';
      //import { SlotRelayLang } from 'db://assets/Scripts/Utils/Config';
      //--要拿掉
      //--要拿掉


      _export("ProcessDataAfterServer", ProcessDataAfterServer);

      _export("GameGlobalKeys", GameGlobalKeys);

      _export("BasicGameModeManager", BasicGameModeManager);

      _export("BasicSlotGameViewManager", BasicSlotGameViewManager);

      _export("AbstractBasicGameController", AbstractBasicGameController);

      _export("ProcessSlotDataCore", ProcessSlotDataCore);

      _export("Utility", Utility);

      _export("BinaryBuffer", BinaryBuffer);

      _export("IntArray", IntArray);

      _export("CalculatePayTable016", CalculatePayTable016);

      _export("ShowAniProcessController1016", ShowAniProcessController1016);

      _export("AwardData", AwardData);

      _export("ClientData", ClientData);

      _export("AdditionalPurchaseType", AdditionalPurchaseType);

      _export("AnimationControllersPoolManager", AnimationControllersPoolManager);

      _export("UniSlotMachine1016", UniSlotMachine1016);

      _export("PrefabAdapter", PrefabAdapter);

      _export("SymbolOwnerAgentID", SymbolOwnerAgentID);

      _export("Direction", Direction);

      _export("SlotRelayLang", SlotRelayLang);

      _export("NotifySubject", NotifySubject);

      _export("GameViewEvents", GameViewEvents);

      _export("BasicGameStepDelayTime", BasicGameStepDelayTime);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b1b4d8aea7e2d8aad18cc3dc8f2e54ef910533c2.js.map