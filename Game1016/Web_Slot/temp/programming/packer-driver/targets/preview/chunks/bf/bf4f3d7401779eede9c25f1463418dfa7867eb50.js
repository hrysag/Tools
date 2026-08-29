System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../GameStateConfigDef/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProcessSlotData(extras) {
    _reporterNs.report("IProcessSlotData", "./IProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicProcessSlotData(extras) {
    _reporterNs.report("BasicProcessSlotData", "./IProcessSlotData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "039c9Za5lBGzIjwzMW4yBZm", "IBasicProcessServerData", undefined); //export type RoundStep = { state: GameState; data: IProcessSlotData };
      // 讓 S 帶著伺服器封包需要的欄位

      /**
       * S :計算資料必要的欄位
       * P:
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bf4f3d7401779eede9c25f1463418dfa7867eb50.js.map