System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, GameGlobalKeys;

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTransitionsState(extras) {
    _reporterNs.report("TransitionsState", "../ReferencePath", _context.meta, extras);
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


      /**
       * GameGlobalData的key值
       * 直接定義屬性為了去寫上面interface的資料.
       * 這些屬性要能夠去對應interface所定義的內容
       * https://pjchender.dev/typescript/ts-type-manipulation/
       * https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
       */
      _export("GameGlobalKeys", GameGlobalKeys = {
        GameState: "GameState",
        TransitionsState: "TransitionsState" //ShowBottomTextStatus: "ShowBottomTextStatus"

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=375261c47c941546ee719a601cd10ce2aa978c68.js.map