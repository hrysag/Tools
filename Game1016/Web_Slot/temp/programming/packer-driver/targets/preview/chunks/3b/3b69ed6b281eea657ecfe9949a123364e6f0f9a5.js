System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, BaseGameConfig, _crd;

  _export("BaseGameConfig", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f9666h5GZhIOKv+FuaWacJk", "BasicGameConfig", undefined);

      _export("BaseGameConfig", BaseGameConfig = class BaseGameConfig {
        constructor() {
          this.SPECIAL_SYMBOL_LIST = [];
          //--特殊模式下才會出現的
          this.REEL_SYMBOL_AMOUNT = 0;
          // reel會顯示出來的icon數量 
          this.REEL_AMOUNT = 0;
          // 幾個reel(幾個軸)
          this.ICONS_LENGTH = 0;
          //盤面總數
          this.FLATTEN_REEL_ID = [];
          //攤平盤面軸分布
          this.WILD_LIST = [];
          this.SCATTER_LIST = [];
          this.BONUS_MULTIPLIER = {};
          this.BONUS_MULTIPLIER_REDUCE = {};
          this.FORECAST_REEL = -1;
          //聽牌軸出現位置(從0開始計算)
          this.FORECAST_CONDITION_REEL = -1;
          //啟動聽牌的條件軸(從0開始計算)
          this.FORECAST_APPEAR_REEL = [];
          //wild可以出現的軸
          this.DEFAULT_FG_ROUNDS = 0;
          // FG預設的次數
          this.CLEAR_SYMBOL_LIST = [];
          // 在旋轉期間必須保持清晰狀態的symbol id
          this.HIGH_ODDS_SYMBOL_LIST = [];
          // 高賠率的icon id (wild不算在內)
          this.MIDDLE_ODDS_SYMBOL_LIST = [];
          // 中賠率的icon id (wild不算在內)
          this.LOW_ODDS_SYMBOL_LIST = [];
          // 低賠率的icon id (wild不算在內)
          this.REGULAR_ODDS_SYMBOL_LIST = [];
          // 正常賠率的icon id(扣除wild/bonus/scatter..等其餘特殊牌)
          this.ODD = [];
          //--企劃書寫的賠率表
          this.SCROLLING_TEXT = [];
          //--遊戲下方的跑馬燈訊息
          this.BUY_FG_MULTIPLIER = 70;
          //--購買FG的倍率
          this.SPECIAL_WIN_THRESHOLD = 25;
          //--大獎的門檻值
          this.ALL_SYMBOL_LIST_NG = [];
          //--ng模式當中會出現的牌組
          this.ALL_SYMBOL_LIST_RE = [];
          //--reSpin模式當中會出現的牌組
          this.ALL_SYMBOL_LIST_FG = [];
          //--fg模式當中會出現的牌組
          this.UNIQUE_SYMBOL_LIST_NG = [];
          //--NG模式當中會出現的特殊牌組(包含wild和scatter)
          this.UNIQUE_SYMBOL_LIST_RE = [];
          //--RE模式當中會出現的特殊牌組(包含wild和scatter)
          this.UNIQUE_SYMBOL_LIST_FG = [];
        } //--FG模式當中會出現的特殊牌組(包含wild和scatter)


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3b69ed6b281eea657ecfe9949a123364e6f0f9a5.js.map