System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, WaysWinScoreAnalyzer, CalculatePayTable016, AwardData, ClientData, Game016PayConfig, _class3, _crd;

  function _reportPossibleCrUseOfWaysWinScoreAnalyzer(extras) {
    _reporterNs.report("WaysWinScoreAnalyzer", "../ReferencePath", _context.meta, extras);
  }

  _export({
    CalculatePayTable016: void 0,
    AwardData: void 0,
    ClientData: void 0,
    Game016PayConfig: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      WaysWinScoreAnalyzer = _unresolved_2.WaysWinScoreAnalyzer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "14022Nv439Ft5JECB7bZ4xq", "CalculatePayTable016", undefined);

      _export("CalculatePayTable016", CalculatePayTable016 = class CalculatePayTable016 extends (_crd && WaysWinScoreAnalyzer === void 0 ? (_reportPossibleCrUseOfWaysWinScoreAnalyzer({
        error: Error()
      }), WaysWinScoreAnalyzer) : WaysWinScoreAnalyzer) {
        constructor() {
          super(Game016PayConfig.WILD_LIST, Game016PayConfig.SCORE_ICON_LIST, Game016PayConfig.ODDS_LIST, Game016PayConfig.PAY_TABLE);
        }

        getWindData(iconData) {
          var clientDataList = [];
          var totalOdd = 0;
          var machMap = this.getWaysWinData(iconData, Game016PayConfig.REEL_AMOUNT, Game016PayConfig.SYMBOL_LENGTH); //console.log(`中獎線數量:${machMap.length}`, machMap);
          //--winData{pos=一維陣列的位置,win2DPos=二維陣列的位置(依照順序從頭開始排列)}

          /**
           * Win2DPos=[1][2][3][4][5]
           * 每個陣列表示每個reel依照順序(要相連才會達成.所以一定照順序排列)
           * 每個陣列表示每個reel,裡面的數字表示該symbol在reel裡面的index的圖示位置
           */

          for (var i = 0; i < machMap.length; i++) {
            var item = machMap[i]; //--攤平2dPos

            var flatWin2DPos = item.Win2DPos.reduce((acc, row) => acc.concat(row), []); //--WinLineID起始位置是0,企劃資料編號從1開始所以+1

            var winData = new ClientData(item.WinLineID + 1, item.SymbolID, item.Odd, item.Pos, flatWin2DPos);
            totalOdd = (totalOdd + item.Odd).fixed();
            clientDataList.push(winData);
          }

          var finalData = new AwardData();
          finalData.totalOdd = totalOdd;
          finalData.dataList = clientDataList;
          return finalData;
        }

      });

      _export("AwardData", AwardData = class AwardData {
        constructor() {
          this.totalOdd = 0;
          //--該局中線的總賠率
          this.dataList = [];
        }

      });

      _export("ClientData", ClientData = class ClientData {
        //--二維陣列攤平後的位置
        //public readonly Win2DPos: number[][] = [];
        constructor(winLineID, winSymbolID, winOdds, winPos, win2DPos) {
          this.WinLineID = 0;
          //--對應連線的編號清單
          this.WinSymbolID = 0;
          this.WinOdds = 0;
          //--該連線的賠率
          this.WinPos = [];
          //--一維陣列的位置
          this.Win2DPos = [];
          this.WinLineID = winLineID;
          this.WinSymbolID = winSymbolID;
          this.WinOdds = winOdds;
          this.WinPos = winPos;
          this.Win2DPos = win2DPos;
        }

      });

      _export("Game016PayConfig", Game016PayConfig = class Game016PayConfig {});

      _class3 = Game016PayConfig;

      /**
       * 1.與算分無關的symbol可以不用塞到SCORE_ICON_LIST
       * 2.與算分有關的symbol必須塞到SCORE_ICON_LIST
       * 3.wild必須塞到WILD_LIST和SCORE_ICON_LIST(儘管你的wild沒有賠率)
       * 4.如果wild沒有賠率,則wild的賠率表設定為[0, 0, 0, 0, 0]
       */
      Game016PayConfig.REEL_AMOUNT = 5;
      Game016PayConfig.SYMBOL_LENGTH = 4;
      Game016PayConfig.WILD_LIST = [9];
      //--WILD(scatter 10不放)
      Game016PayConfig.SCORE_ICON_LIST = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      //--0~9(bonus不放,wild要放)
      //--賠率表(對照symbolId中線的多寡來決定)
      //--規則是<連續3個連線才開始算,前兩個就是0,0>
      Game016PayConfig.SYMBOL_0_ODDS = [0, 0, 0.75, 1.5, 10];
      //--symbolId=0
      Game016PayConfig.SYMBOL_1_ODDS = [0, 0, 0.5, 1, 5];
      //--symbolId=1
      Game016PayConfig.SYMBOL_2_ODDS = [0, 0, 0.4, 1, 3];
      //--symbolId=2   
      Game016PayConfig.SYMBOL_3_ODDS = [0, 0, 0.3, 0.75, 2];
      //--symbolId=3
      Game016PayConfig.SYMBOL_4_ODDS = [0, 0, 0.3, 0.6, 2];
      //--symbolId=4
      Game016PayConfig.SYMBOL_5_ODDS = [0, 0, 0.2, 0.5, 1.25];
      //--symbolId=5
      Game016PayConfig.SYMBOL_6_ODDS = [0, 0, 0.2, 0.5, 1.25];
      //--symbolId=6
      Game016PayConfig.SYMBOL_7_ODDS = [0, 0, 0.15, 0.4, 1];
      //--symbolId=7
      Game016PayConfig.SYMBOL_8_ODDS = [0, 0, 0.15, 0.4, 1];
      //--symbolId=8
      Game016PayConfig.SYMBOL_9_ODDS = [0, 0, 0, 0, 0];
      //--symbolId=9(by 老燈說WILD沒賠率)
      Game016PayConfig.ODDS_LIST = [_class3.SYMBOL_0_ODDS, _class3.SYMBOL_1_ODDS, _class3.SYMBOL_2_ODDS, _class3.SYMBOL_3_ODDS, _class3.SYMBOL_4_ODDS, _class3.SYMBOL_5_ODDS, _class3.SYMBOL_6_ODDS, _class3.SYMBOL_7_ODDS, _class3.SYMBOL_8_ODDS, _class3.SYMBOL_9_ODDS];
      //--連線種類(40線)
      Game016PayConfig.PAY_LINE_1 = [0, 4, 8, 12, 16];
      Game016PayConfig.PAY_LINE_2 = [1, 5, 9, 13, 17];
      Game016PayConfig.PAY_LINE_3 = [2, 6, 10, 14, 18];
      Game016PayConfig.PAY_LINE_4 = [3, 7, 11, 15, 19];
      Game016PayConfig.PAY_LINE_5 = [0, 5, 8, 13, 16];
      Game016PayConfig.PAY_LINE_6 = [1, 6, 9, 14, 17];
      Game016PayConfig.PAY_LINE_7 = [2, 7, 10, 15, 18];
      Game016PayConfig.PAY_LINE_8 = [1, 4, 9, 12, 17];
      Game016PayConfig.PAY_LINE_9 = [2, 5, 10, 13, 18];
      Game016PayConfig.PAY_LINE_10 = [3, 6, 11, 14, 19];
      Game016PayConfig.PAY_LINE_11 = [0, 4, 9, 12, 16];
      Game016PayConfig.PAY_LINE_12 = [1, 5, 10, 13, 17];
      Game016PayConfig.PAY_LINE_13 = [2, 6, 11, 14, 18];
      Game016PayConfig.PAY_LINE_14 = [1, 5, 8, 13, 17];
      Game016PayConfig.PAY_LINE_15 = [2, 6, 9, 14, 18];
      Game016PayConfig.PAY_LINE_16 = [3, 7, 10, 15, 19];
      Game016PayConfig.PAY_LINE_17 = [0, 5, 9, 13, 16];
      Game016PayConfig.PAY_LINE_18 = [1, 6, 10, 14, 17];
      Game016PayConfig.PAY_LINE_19 = [2, 7, 11, 15, 18];
      Game016PayConfig.PAY_LINE_20 = [1, 4, 8, 12, 17];
      Game016PayConfig.PAY_LINE_21 = [2, 5, 9, 13, 18];
      Game016PayConfig.PAY_LINE_22 = [3, 6, 10, 14, 19];
      Game016PayConfig.PAY_LINE_23 = [0, 5, 10, 13, 16];
      Game016PayConfig.PAY_LINE_24 = [1, 6, 11, 14, 17];
      Game016PayConfig.PAY_LINE_25 = [2, 5, 8, 13, 18];
      Game016PayConfig.PAY_LINE_26 = [3, 6, 9, 14, 19];
      //
      Game016PayConfig.PAY_LINE_27 = [0, 4, 9, 13, 17];
      Game016PayConfig.PAY_LINE_28 = [1, 5, 10, 14, 18];
      Game016PayConfig.PAY_LINE_29 = [2, 6, 9, 13, 17];
      Game016PayConfig.PAY_LINE_30 = [3, 7, 10, 14, 18];
      Game016PayConfig.PAY_LINE_31 = [0, 6, 8, 14, 16];
      Game016PayConfig.PAY_LINE_32 = [1, 7, 9, 15, 17];
      Game016PayConfig.PAY_LINE_33 = [3, 5, 11, 13, 19];
      Game016PayConfig.PAY_LINE_34 = [2, 4, 10, 12, 18];
      Game016PayConfig.PAY_LINE_35 = [0, 4, 10, 12, 16];
      Game016PayConfig.PAY_LINE_36 = [1, 5, 11, 13, 17];
      Game016PayConfig.PAY_LINE_37 = [3, 7, 9, 15, 19];
      Game016PayConfig.PAY_LINE_38 = [2, 6, 8, 14, 18];
      Game016PayConfig.PAY_LINE_39 = [2, 4, 8, 12, 18];
      Game016PayConfig.PAY_LINE_40 = [1, 7, 11, 15, 17];
      Game016PayConfig.PAY_TABLE = [_class3.PAY_LINE_1, _class3.PAY_LINE_2, _class3.PAY_LINE_3, _class3.PAY_LINE_4, _class3.PAY_LINE_5, _class3.PAY_LINE_6, _class3.PAY_LINE_7, _class3.PAY_LINE_8, _class3.PAY_LINE_9, _class3.PAY_LINE_10, _class3.PAY_LINE_11, _class3.PAY_LINE_12, _class3.PAY_LINE_13, _class3.PAY_LINE_14, _class3.PAY_LINE_15, _class3.PAY_LINE_16, _class3.PAY_LINE_17, _class3.PAY_LINE_18, _class3.PAY_LINE_19, _class3.PAY_LINE_20, _class3.PAY_LINE_21, _class3.PAY_LINE_22, _class3.PAY_LINE_23, _class3.PAY_LINE_24, _class3.PAY_LINE_25, _class3.PAY_LINE_26, _class3.PAY_LINE_27, _class3.PAY_LINE_28, _class3.PAY_LINE_29, _class3.PAY_LINE_30, _class3.PAY_LINE_31, _class3.PAY_LINE_32, _class3.PAY_LINE_33, _class3.PAY_LINE_34, _class3.PAY_LINE_35, _class3.PAY_LINE_36, _class3.PAY_LINE_37, _class3.PAY_LINE_38, _class3.PAY_LINE_39, _class3.PAY_LINE_40];

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e27d49830c4e478b29f944ba2b824bc69831d17f.js.map