System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EliminationWinScoreAnalyzer, EliminationWinScoreAnalyzerTest, ClientData, TestConfig, _class2, _crd;

  function _reportPossibleCrUseOfEliminationWinData(extras) {
    _reporterNs.report("EliminationWinData", "./EliminationWinScoreAnalyzer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEliminationWinScoreAnalyzer(extras) {
    _reporterNs.report("EliminationWinScoreAnalyzer", "./EliminationWinScoreAnalyzer", _context.meta, extras);
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

      _cclegacy._RF.push({}, "a3ad7m7qQtIK4IR9D1vhJQ7", "EliminationWinScoreAnalyzerTest", undefined);

      _export("EliminationWinScoreAnalyzerTest", EliminationWinScoreAnalyzerTest = class EliminationWinScoreAnalyzerTest extends (_crd && EliminationWinScoreAnalyzer === void 0 ? (_reportPossibleCrUseOfEliminationWinScoreAnalyzer({
        error: Error()
      }), EliminationWinScoreAnalyzer) : EliminationWinScoreAnalyzer) {
        constructor() {
          super(TestConfig.WILD_LIST, TestConfig.SCORE_ICON_LIST, TestConfig.ODDS_LIST, TestConfig.ConnectNumber);
        }

        getWinData(iconData) {
          var totalOdd = 0;
          var winPos = [];
          var dataList = [];
          var winData = this.getEliminationWinData(iconData, TestConfig.REEL_AMOUNT, TestConfig.SYMBOL_LENGTH);

          for (var item of winData) {
            var _winData = new ClientData(item.SymbolID, item.Odd, item.Pos, item.Win2DPos);

            console.log("\u7B2C" + item.SymbolID + "\u500B\u5716\u793A\uFF0C\u8D0F\u7684\u8CE0\u7387" + item.Odd + "\uFF0C\u8D0F\u7684\u4F4D\u7F6E" + item.Pos + "\uFF0C2D\u4F4D\u7F6E" + item.Win2DPos);
            dataList.push(_winData);
          }

          for (var _item of dataList) {
            totalOdd = (totalOdd + _item.WinOdds).fixed();

            for (var itemPos of _item.WinPos) {
              winPos.push(itemPos);
              winPos = winPos.set();
              winPos.sort((a, b) => a - b);
            }
          }

          console.log("\u7E3D\u8D0F\u5206:" + totalOdd + ",\u8D0F\u7DDA\u4F4D\u7F6E" + winPos + " ");
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
//# sourceMappingURL=22bf7515178594c17fef7c3f706a7cc1a324e38f.js.map