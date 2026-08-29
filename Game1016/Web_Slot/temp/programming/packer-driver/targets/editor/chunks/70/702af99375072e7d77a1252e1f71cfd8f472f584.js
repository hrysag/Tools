System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, BasicProcessSlotData, _crd, Direction;

  _export("BasicProcessSlotData", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7508aNhsFZADYXdibGXWdGy", "IProcessSlotData", undefined);

      //export type Direction = 'upward' | 'downward' | 'unknown';
      _export("Direction", Direction = /*#__PURE__*/function (Direction) {
        Direction["UPWARD"] = "upward";
        Direction["DOWNWARD"] = "downward";
        Direction["UNKNOWN"] = "unknown";
        return Direction;
      }({})); //--放變形前後的資料(算分前準備..算分要拿位移後的資料)
      //--移動後才開始算分


      _export("BasicProcessSlotData", BasicProcessSlotData = class BasicProcessSlotData {
        constructor() {
          this.reSpinReelInfo = [];
          //--reSpine 這邊有多少就塞多少IProcessSlotData進去
          this.freeGameReelInfo = [];
          //--freeGame 這邊有多少就塞多少IProcessFGData
          this.ngReelInfo = void 0;
          //--NG只會有一個IProcessSlotData
          this.allRoundOdds = 0;
          //----這個是目前這個資料的總賠率(NG+FG+reSpine)
          this.totalOddsForReSpin = 0;
          //--reSpin的總賠率
          this.totalOddsForFG = 0;
          //--fg的總賠率
          this.betValue = 0;
        } //--default=0


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=702af99375072e7d77a1252e1f71cfd8f472f584.js.map