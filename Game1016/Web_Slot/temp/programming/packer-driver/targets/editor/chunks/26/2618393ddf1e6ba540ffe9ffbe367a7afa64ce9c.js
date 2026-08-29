System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, SymbolOwnerAgentID, GameGlobalKeys;

  function _reportPossibleCrUseOfNewFlashModeEnum(extras) {
    _reporterNs.report("NewFlashModeEnum", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTransitionsState(extras) {
    _reporterNs.report("TransitionsState", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicGameStepDelayTime(extras) {
    _reporterNs.report("BasicGameStepDelayTime", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFGorRSCount(extras) {
    _reporterNs.report("IFGorRSCount", "./IRoundDataRecord1016", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5791cSvQPxEhqazfdw1oBQE", "GameGlobalData1016", undefined); //--定義要用的global變數
      //import { NewFlashModeEnum } from 'db://assets/GenericUI/Scripts/MainUI';


      _export("SymbolOwnerAgentID", SymbolOwnerAgentID = /*#__PURE__*/function (SymbolOwnerAgentID) {
        SymbolOwnerAgentID[SymbolOwnerAgentID["SlotMachine"] = 0] = "SlotMachine";
        SymbolOwnerAgentID[SymbolOwnerAgentID["ShowAniController"] = 1] = "ShowAniController";
        return SymbolOwnerAgentID;
      }({}));

      /**
       * 太假掰的寫法了,下個專案要換一招...20250813.....
       * keyof就可以直接映射屬性
       * GameGlobalData的key值
       * 直接定義屬性為了去寫上面interface的資料.
       * 這些屬性要能夠去對應interface所定義的內容
       * https://pjchender.dev/typescript/ts-type-manipulation/
       * https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
       */
      _export("GameGlobalKeys", GameGlobalKeys = {
        GameState: "GameState",
        TransitionsState: "TransitionsState",
        DelayTimeList: 'DelayTimeList',
        TurboMode: "TurboMode",
        GameTimeScale: "GameTimeScale",
        InterruptProcess: "InterruptProcess",
        RoundTotalOdds: "RoundTotalOdds",
        CurrentRoundSpeed: "CurrentRoundSpeed",
        CurrentFGAndRSRecord: 'CurrentFGAndRSRecord' //--目前只會紀錄FG count data
        //ShowBottomTextStatus: "ShowBottomTextStatus"

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2618393ddf1e6ba540ffe9ffbe367a7afa64ce9c.js.map