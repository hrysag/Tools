System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DefinitionGameConfigData016, _crd, DefinitionGameConfigData, DYN_WILD_INFO;

  function _reportPossibleCrUseOfDefinitionGameConfigData(extras) {
    _reporterNs.report("DefinitionGameConfigData016", "./DefinitionGameConfigData016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../MyUtils/GameStateConfigDef/GameStateConfigDef", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      DefinitionGameConfigData016 = _unresolved_2.DefinitionGameConfigData016;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9f0ddedyl9NnYphlc5FKg7c", "GameConfigInstance", undefined);

      //--避免循環依賴(要用解構的方式抽出config裡面的變數)
      _export("DefinitionGameConfigData", DefinitionGameConfigData = new (_crd && DefinitionGameConfigData016 === void 0 ? (_reportPossibleCrUseOfDefinitionGameConfigData({
        error: Error()
      }), DefinitionGameConfigData016) : DefinitionGameConfigData016)()); //--wild 特殊資料用的


      _export("DYN_WILD_INFO", DYN_WILD_INFO = {
        WILD_CONTINUE: 'wildContinue' // Add more dynamic properties as needed

      }); //--判斷目前狀態與下一個狀態


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e1af100b685a6a0b216c96f31e4b11372ef142d2.js.map