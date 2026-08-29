System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../GameStateConfigDef/GameStateConfigDef", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e21efha4xKgKwSEfYykLyj", "IBasicGameModeManager", undefined); //--遊戲改變狀態的時候使用


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=09595e9dee89f17df9584c9682d486c53ca46226.js.map