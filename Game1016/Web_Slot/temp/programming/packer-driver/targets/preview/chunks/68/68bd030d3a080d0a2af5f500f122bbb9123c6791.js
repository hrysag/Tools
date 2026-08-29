System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseGameConfig, DefinitionGameConfigData016, _crd;

  function _reportPossibleCrUseOfBaseGameConfig(extras) {
    _reporterNs.report("BaseGameConfig", "../MyUtils/BasicGameConfig/BasicGameConfig", _context.meta, extras);
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

      _cclegacy._RF.push({}, "df2cbplwvdEOqn9FOav8Fnc", "DefinitionGameConfigData016", undefined);

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
          this.FORECAST_CONDITION_REEL = 1;
          // 從0開始(之後的軸依序聽牌)
          this.FORECAST_REEL = 2;
          // 從0開始(2-3軸依序聽牌)
          this.FORECAST_APPEAR_REEL = [1, 2, 3];
          // 從0開始 (1-3軸可以出現wild)
          this.ALL_SYMBOL_LIST_NG = [0, 1, 2, 3, 4, 5, 6, 7, 8];
          //--ng模式當中會出現的牌組
          this.ALL_SYMBOL_LIST_RE = [0, 1, 2, 3, 4, 5, 6, 7, 8];
          //--reSpin模式當中會出現的牌組
          this.ALL_SYMBOL_LIST_FG = [0, 1, 2, 3, 4, 5, 6, 7, 8];
          //--fg模式當中會出現的牌組
          this.UNIQUE_SYMBOL_LIST_NG = [[10], [], [], [], [10]];
          //--NG模式當中會出現的特殊牌組(包含wild和scatter)
          this.UNIQUE_SYMBOL_LIST_RE = [[], [], [], [], []];
          //--RE模式當中會出現的特殊牌組(包含wild和scatter)
          this.UNIQUE_SYMBOL_LIST_FG = [[], [], [], [], []];
        } //--FG模式當中會出現的特殊牌組(包含wild和scatter)


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=68bd030d3a080d0a2af5f500f122bbb9123c6791.js.map