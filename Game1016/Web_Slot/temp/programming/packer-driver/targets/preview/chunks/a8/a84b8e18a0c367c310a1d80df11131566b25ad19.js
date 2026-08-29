System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseGameConfig, DefinitionGameConfigData016, _crd;

  function _reportPossibleCrUseOfBaseGameConfig(extras) {
    _reporterNs.report("BaseGameConfig", "../ReferencePath", _context.meta, extras);
  }

  _export("DefinitionGameConfigData016", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BaseGameConfig = _unresolved_2.BaseGameConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "df2cbplwvdEOqn9FOav8Fnc", "DefinitionGameConfigData", undefined);

      _export("DefinitionGameConfigData016", DefinitionGameConfigData016 = class DefinitionGameConfigData016 extends (_crd && BaseGameConfig === void 0 ? (_reportPossibleCrUseOfBaseGameConfig({
        error: Error()
      }), BaseGameConfig) : BaseGameConfig) {
        constructor() {
          super(...arguments);
          this.REEL_AMOUNT = 5;
          this.REEL_SYMBOL_AMOUNT = 4;
          this.ICONS_LENGTH = this.REEL_AMOUNT * this.REEL_SYMBOL_AMOUNT;
          this.WILD_LIST = [9];
          // Wild symbol ID
          this.SCATTER_LIST = [10];
          // Scatter symbol ID
          this.FORECAST_REEL = [2];
        } // 從0開始(2-4軸依序聽牌)


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a84b8e18a0c367c310a1d80df11131566b25ad19.js.map