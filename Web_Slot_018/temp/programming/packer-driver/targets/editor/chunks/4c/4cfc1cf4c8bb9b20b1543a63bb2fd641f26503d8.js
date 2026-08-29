System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, WaysWinScoreAnalyzer, WaysWinScoreAnalyzerTest, MapWinLineInfo, ClientLineData, TestConfig, _class4, _crd;

  function _reportPossibleCrUseOfWaysWinData(extras) {
    _reporterNs.report("WaysWinData", "./WaysWinScoreAnalyzer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaysWinScoreAnalyzer(extras) {
    _reporterNs.report("WaysWinScoreAnalyzer", "./WaysWinScoreAnalyzer", _context.meta, extras);
  }

  _export({
    WaysWinScoreAnalyzerTest: void 0,
    MapWinLineInfo: void 0,
    ClientLineData: void 0,
    TestConfig: void 0
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

      _cclegacy._RF.push({}, "70a3cMsFGVKupW/XhkuqCdK", "WaysWinScoreAnalyzerTest", undefined);

      _export("WaysWinScoreAnalyzerTest", WaysWinScoreAnalyzerTest = class WaysWinScoreAnalyzerTest extends (_crd && WaysWinScoreAnalyzer === void 0 ? (_reportPossibleCrUseOfWaysWinScoreAnalyzer({
        error: Error()
      }), WaysWinScoreAnalyzer) : WaysWinScoreAnalyzer) {
        constructor() {
          super(TestConfig.WILD_LIST, TestConfig.SCORE_ICON_LIST, TestConfig.ODDS_LIST, TestConfig.PAY_TABLE);

          /**如果有WILD展開倍率 請修改wildMultiplier變成WILD展開倍率 ex:第三輪展開 有5倍 則 wildMultiplier = [1,1,5,1,1] */
          this.wildMultiplier = Array.from({
            length: TestConfig.REEL_AMOUNT
          }, () => 1);
        }

        getWinData(iconList) {
          let totalOdd = 0;
          let winPos = [];
          const lineWinDataList = [];
          const winData = this.getWaysWinData(iconList, TestConfig.REEL_AMOUNT, TestConfig.SYMBOL_LENGTH);
          const maxOddMap = new Map();

          for (const data of winData) {
            if (!maxOddMap.has(data.WinLineID) || maxOddMap.get(data.WinLineID).WinPos.length < data.Pos.length) {
              //找最長長度
              const winLineInfo = new MapWinLineInfo(data.SymbolID, data.Odd, data.Pos, data.Win2DPos);
              maxOddMap.set(data.WinLineID, winLineInfo);
            }
          }

          for (let item of maxOddMap) {
            const lineWinOdd = (item[1].WinOdds * this.getLineWildMultiplier(item[1].WinPos.length)).fixed();
            const lineWinData = new ClientLineData(item[0], item[1].WinSymbolID, lineWinOdd, item[1].WinPos, item[1].Win2DPos);
            console.log(`第${item[0] + 1}線,贏線圖示:${item[1].WinSymbolID},贏線賠率:${lineWinOdd},贏線位置:${item[1].WinPos},贏線2D位置:${item[1].Win2DPos}`);
            lineWinDataList.push(lineWinData);
          }

          for (let item of lineWinDataList) {
            totalOdd = (totalOdd + item.WinOdds).fixed();

            for (let itemPos of item.WinPos) {
              winPos.push(itemPos);
              winPos = winPos.set();
              winPos.sort((a, b) => a - b);
            }
          }

          console.log(`總贏分:${totalOdd},贏線位置${winPos}`);
        }

        getLineWildMultiplier(length) {
          let totalMultiplier = 1;

          for (let i = 0; i < length; i++) {
            totalMultiplier *= this.wildMultiplier[i];
          }

          return totalMultiplier;
        }

      });

      _export("MapWinLineInfo", MapWinLineInfo = class MapWinLineInfo {
        constructor(winSymbolID, winOdds, winPos, win2DPos) {
          this.WinSymbolID = 0;
          this.WinOdds = 0;
          this.WinPos = [];
          this.Win2DPos = [];
          this.WinSymbolID = winSymbolID;
          this.WinOdds = winOdds;
          this.WinPos = winPos;
          this.Win2DPos = win2DPos;
        }

      });

      ;

      _export("ClientLineData", ClientLineData = class ClientLineData {
        constructor(winLineID, winSymbolID, winOdds, winPos, win2DPos) {
          this.WinLineID = 0;
          this.WinSymbolID = 0;
          this.WinOdds = 0;
          this.WinPos = [];
          this.Win2DPos = [];
          this.WinLineID = winLineID;
          this.WinSymbolID = winSymbolID;
          this.WinOdds = winOdds;
          this.WinPos = winPos;
          this.Win2DPos = win2DPos;
        }

      });

      _export("TestConfig", TestConfig = class TestConfig {});

      _class4 = TestConfig;
      TestConfig.REEL_AMOUNT = 5;
      TestConfig.SYMBOL_LENGTH = 3;
      TestConfig.WILD_LIST = [8];
      TestConfig.SCORE_ICON_LIST = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      TestConfig.SYMBOL_0_ODDS = [0, 0, 1.5, 7.5, 25];
      TestConfig.SYMBOL_1_ODDS = [0, 0, 1, 5, 20];
      TestConfig.SYMBOL_2_ODDS = [0, 0, 0.5, 2.5, 7.5];
      TestConfig.SYMBOL_3_ODDS = [0, 0, 0.4, 2, 5];
      TestConfig.SYMBOL_4_ODDS = [0, 0, 0.1, 0.5, 2.5];
      TestConfig.SYMBOL_5_ODDS = [0, 0, 0.1, 0.5, 2.5];
      TestConfig.SYMBOL_6_ODDS = [0, 0, 0.1, 0.5, 2.5];
      TestConfig.SYMBOL_7_ODDS = [0, 0, 0.1, 0.5, 2.5];
      TestConfig.SYMBOL_8_ODDS = [0, 0, 2.5, 12.5, 50];
      TestConfig.ODDS_LIST = [_class4.SYMBOL_0_ODDS, _class4.SYMBOL_1_ODDS, _class4.SYMBOL_2_ODDS, _class4.SYMBOL_3_ODDS, _class4.SYMBOL_4_ODDS, _class4.SYMBOL_5_ODDS, _class4.SYMBOL_6_ODDS, _class4.SYMBOL_7_ODDS, _class4.SYMBOL_8_ODDS];
      TestConfig.PAY_LINE_1 = [1, 4, 7, 10, 13];
      TestConfig.PAY_LINE_2 = [0, 3, 6, 9, 12];
      TestConfig.PAY_LINE_3 = [2, 5, 8, 11, 14];
      TestConfig.PAY_LINE_4 = [0, 4, 8, 10, 12];
      TestConfig.PAY_LINE_5 = [2, 4, 6, 10, 14];
      TestConfig.PAY_LINE_6 = [1, 3, 6, 9, 13];
      TestConfig.PAY_LINE_7 = [1, 5, 8, 11, 13];
      TestConfig.PAY_LINE_8 = [0, 3, 7, 11, 14];
      TestConfig.PAY_LINE_9 = [2, 5, 7, 9, 12];
      TestConfig.PAY_LINE_10 = [1, 5, 7, 9, 13];
      TestConfig.PAY_LINE_11 = [1, 3, 7, 11, 13];
      TestConfig.PAY_LINE_12 = [0, 4, 7, 10, 12];
      TestConfig.PAY_LINE_13 = [2, 4, 7, 10, 14];
      TestConfig.PAY_LINE_14 = [0, 4, 6, 10, 12];
      TestConfig.PAY_LINE_15 = [2, 4, 8, 10, 14];
      TestConfig.PAY_LINE_16 = [1, 4, 6, 10, 13];
      TestConfig.PAY_LINE_17 = [1, 4, 8, 10, 13];
      TestConfig.PAY_LINE_18 = [0, 3, 8, 9, 12];
      TestConfig.PAY_LINE_19 = [2, 5, 6, 11, 14];
      TestConfig.PAY_LINE_20 = [0, 5, 8, 11, 12];
      TestConfig.PAY_LINE_21 = [2, 3, 6, 9, 14];
      TestConfig.PAY_LINE_22 = [1, 5, 6, 11, 13];
      TestConfig.PAY_LINE_23 = [1, 3, 8, 9, 13];
      TestConfig.PAY_LINE_24 = [0, 5, 6, 11, 12];
      TestConfig.PAY_LINE_25 = [2, 3, 8, 9, 14];
      TestConfig.PAY_TABLE = [_class4.PAY_LINE_1, _class4.PAY_LINE_2, _class4.PAY_LINE_3, _class4.PAY_LINE_4, _class4.PAY_LINE_5, _class4.PAY_LINE_6, _class4.PAY_LINE_7, _class4.PAY_LINE_8, _class4.PAY_LINE_9, _class4.PAY_LINE_10, _class4.PAY_LINE_11, _class4.PAY_LINE_12, _class4.PAY_LINE_13, _class4.PAY_LINE_14, _class4.PAY_LINE_15, _class4.PAY_LINE_16, _class4.PAY_LINE_17, _class4.PAY_LINE_18, _class4.PAY_LINE_19, _class4.PAY_LINE_20, _class4.PAY_LINE_21, _class4.PAY_LINE_22, _class4.PAY_LINE_23, _class4.PAY_LINE_24, _class4.PAY_LINE_25];

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4cfc1cf4c8bb9b20b1543a63bb2fd641f26503d8.js.map