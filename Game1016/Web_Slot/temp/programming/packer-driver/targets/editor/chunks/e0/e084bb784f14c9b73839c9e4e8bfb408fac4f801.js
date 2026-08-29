System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EliminationWinScoreAnalyzer, EliminationWinScoreAnalyzerTest, ClientData, TestConfig, _class2, _crd;

  function _reportPossibleCrUseOfEliminationWinData(extras) {
    _reporterNs.report("EliminationWinData", "../../../Scripts/GameScripts/BoardAnalysis/v1/EliminationWinScoreAnalyzer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEliminationWinScoreAnalyzer(extras) {
    _reporterNs.report("EliminationWinScoreAnalyzer", "../../../Scripts/GameScripts/BoardAnalysis/v1/EliminationWinScoreAnalyzer", _context.meta, extras);
  }

  _export({
    EliminationWinScoreAnalyzerTest: void 0,
    ClientData: void 0,
    TestConfig: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EliminationWinScoreAnalyzer = _unresolved_2.EliminationWinScoreAnalyzer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "55f9dq26lVOSZo0vo3SZ/0m", "EliminationWinScoreAnalyzerTest", undefined);

      _export("EliminationWinScoreAnalyzerTest", EliminationWinScoreAnalyzerTest = class EliminationWinScoreAnalyzerTest extends (_crd && EliminationWinScoreAnalyzer === void 0 ? (_reportPossibleCrUseOfEliminationWinScoreAnalyzer({
        error: Error()
      }), EliminationWinScoreAnalyzer) : EliminationWinScoreAnalyzer) {
        constructor() {
          super(TestConfig.WILD_LIST, TestConfig.SCORE_ICON_LIST, TestConfig.ODDS_LIST, TestConfig.ConnectNumber);
        }

        getWinData(iconData) {
          let totalOdd = 0;
          let winPos = [];
          const dataList = [];
          const winData = this.getEliminationWinData(iconData, TestConfig.REEL_AMOUNT, TestConfig.SYMBOL_LENGTH);

          for (let item of winData) {
            const winData = new ClientData(item.SymbolID, item.Odd, item.Pos, item.Win2DPos);
            console.log(`第${item.SymbolID}個圖示，贏的賠率${item.Odd}，贏的位置${item.Pos}，2D位置${item.Win2DPos}`);
            dataList.push(winData);
          }

          for (let item of dataList) {
            totalOdd = (totalOdd + item.WinOdds).fixed();

            for (let itemPos of item.WinPos) {
              winPos.push(itemPos);
              winPos = winPos.set();
              winPos.sort((a, b) => a - b);
            }
          }

          console.log(`總贏分:${totalOdd},贏線位置${winPos} `);
          console.log(JSON.stringify(winData));
        }

      });

      _export("ClientData", ClientData = class ClientData {
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

      _export("TestConfig", TestConfig = class TestConfig {});

      _class2 = TestConfig;
      TestConfig.REEL_AMOUNT = 5;
      TestConfig.SYMBOL_LENGTH = 5;
      TestConfig.WILD_LIST = [8];
      TestConfig.SCORE_ICON_LIST = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      TestConfig.ConnectNumber = [5, 6, 7, 8, 9, 11, 13];
      TestConfig.SYMBOL_0_ODDS = [1, 1.5, 2, 3, 10, 30, 100];
      TestConfig.SYMBOL_1_ODDS = [0.5, 0.7, 1, 1.5, 5, 15, 50];
      TestConfig.SYMBOL_2_ODDS = [0.5, 0.7, 1, 1.5, 5, 15, 50];
      TestConfig.SYMBOL_3_ODDS = [0.3, 0.4, 0.5, 0.7, 2.5, 7.5, 25];
      TestConfig.SYMBOL_4_ODDS = [0.3, 0.4, 0.5, 0.7, 2.5, 7.5, 25];
      TestConfig.SYMBOL_5_ODDS = [0.1, 0.2, 0.3, 0.5, 1.5, 5, 15];
      TestConfig.SYMBOL_6_ODDS = [0.1, 0.2, 0.3, 0.5, 1.5, 5, 15];
      TestConfig.SYMBOL_7_ODDS = [0.1, 0.2, 0.3, 0.5, 1.5, 5, 15];
      TestConfig.SYMBOL_8_ODDS = [1, 1, 1, 1, 1, 1, 1];
      TestConfig.ODDS_LIST = [_class2.SYMBOL_0_ODDS, _class2.SYMBOL_1_ODDS, _class2.SYMBOL_2_ODDS, _class2.SYMBOL_3_ODDS, _class2.SYMBOL_4_ODDS, _class2.SYMBOL_5_ODDS, _class2.SYMBOL_6_ODDS, _class2.SYMBOL_7_ODDS, _class2.SYMBOL_8_ODDS];

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e084bb784f14c9b73839c9e4e8bfb408fac4f801.js.map