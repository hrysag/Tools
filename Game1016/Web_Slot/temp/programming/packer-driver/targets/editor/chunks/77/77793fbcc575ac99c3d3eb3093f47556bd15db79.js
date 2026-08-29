System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DefinitionGameConfigData016, _crd, DefinitionGameConfigData;

  function _reportPossibleCrUseOfDefinitionGameConfigData(extras) {
    _reporterNs.report("DefinitionGameConfigData016", "./DefinitionGameConfigData016", _context.meta, extras);
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
      }), DefinitionGameConfigData016) : DefinitionGameConfigData016)());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=77793fbcc575ac99c3d3eb3093f47556bd15db79.js.map