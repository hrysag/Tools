System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BoardAnalysis, MegaWaysWinScoreAnalyzerTest, ClientData, TestConfig, _class2, _crd, MegaWaysWinScoreAnalyzer;

  function _reportPossibleCrUseOfBoardAnalysis(extras) {
    _reporterNs.report("BoardAnalysis", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  _export({
    MegaWaysWinScoreAnalyzerTest: void 0,
    ClientData: void 0,
    TestConfig: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BoardAnalysis = _unresolved_2.BoardAnalysis;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0e077kV87VNxIoHUGMPPvH8", "MegaWaysWinScoreAnalyzerTest", undefined);

      MegaWaysWinScoreAnalyzer = (_crd && BoardAnalysis === void 0 ? (_reportPossibleCrUseOfBoardAnalysis({
        error: Error()
      }), BoardAnalysis) : BoardAnalysis).MegaWaysWinScoreAnalyzer;

      _export("MegaWaysWinScoreAnalyzerTest", MegaWaysWinScoreAnalyzerTest = class MegaWaysWinScoreAnalyzerTest extends MegaWaysWinScoreAnalyzer {
        /**
         * 建構子
         */
        constructor() {
          super(TestConfig.WILD_LIST, TestConfig.ODDS_LIST, TestConfig.NORMAL_SYMBOL_LIST);
        }
        /**
         * 測試單次盤面贏分資訊
         * @param iconList 盤面資料
         */


        getWinData(iconList) {
          var totalOdd = 0;
          var winPos = [];
          var dataList = [];
          var matchMap = this.getMegaWaysWinData(iconList, TestConfig.REEL_AMOUNT, TestConfig.SYMBOL_LENGTH);

          for (var item of matchMap) {
            var winData = new ClientData(item.winSymbolID, item.odd, item.pos, item.win2DPos);
            console.log("\u7B2C" + item.winSymbolID + "\u500B\u5716\u793A\uFF0C\u8D0F\u7684\u8CE0\u7387" + item.odd + "\uFF0C\u8D0F\u7684\u4F4D\u7F6E" + item.pos + "\uFF0C\u8F2A\u64AD\u4F4D\u7F6E" + item.oneMatchPos + "\uFF0C2D\u4F4D\u7F6E" + item.win2DPos);
            dataList.push(winData);
          }

          for (var _item of dataList) {
            totalOdd = (totalOdd + _item.WinOdds).fixed();

            for (var itemPos of _item.WinPos) {
              winPos.push(itemPos);
              winPos = winPos.set();
              winPos.sort((a, b) => a - b);
            }

            for (var _itemPos of _item.Win2DPos) {
              console.log("\u8F2A\u64AD" + _itemPos);
            }
          }

          console.log("\u7E3D\u8D0F\u5206:" + totalOdd + ",\u8D0F\u7DDA\u4F4D\u7F6E" + winPos + " ");
        }

      });
      /**
       * 測試用Data
       */


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
      /**
       * 測試用config
       */


      _export("TestConfig", TestConfig = class TestConfig {});

      _class2 = TestConfig;
      TestConfig.REEL_AMOUNT = 6;
      TestConfig.SYMBOL_LENGTH = 4;
      TestConfig.WILD_LIST = [10];
      TestConfig.NORMAL_SYMBOL_LIST = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      TestConfig.SYMBOL_0_ODDS = [0, 0, 0.5, 1, 1.5, 2.5];
      TestConfig.SYMBOL_1_ODDS = [0, 0, 0.45, 0.9, 1.35, 1.8];
      TestConfig.SYMBOL_2_ODDS = [0, 0, 0.4, 0.8, 1.2, 1.6];
      TestConfig.SYMBOL_3_ODDS = [0, 0, 0.35, 0.7, 1.05, 1.4];
      TestConfig.SYMBOL_4_ODDS = [0, 0, 0.3, 0.6, 0.9, 1.2];
      TestConfig.SYMBOL_5_ODDS = [0, 0, 0.25, 0.5, 0.75, 1];
      TestConfig.SYMBOL_6_ODDS = [0, 0, 0.2, 0.4, 0.6, 0.8];
      TestConfig.SYMBOL_7_ODDS = [0, 0, 0.15, 0.3, 0.45, 0.6];
      TestConfig.SYMBOL_8_ODDS = [0, 0, 0.1, 0.2, 0.3, 0.4];
      TestConfig.SYMBOL_9_ODDS = [0, 0, 0.05, 0.1, 0.15, 0.2];
      TestConfig.ODDS_LIST = [_class2.SYMBOL_0_ODDS, _class2.SYMBOL_1_ODDS, _class2.SYMBOL_2_ODDS, _class2.SYMBOL_3_ODDS, _class2.SYMBOL_4_ODDS, _class2.SYMBOL_5_ODDS, _class2.SYMBOL_6_ODDS, _class2.SYMBOL_7_ODDS, _class2.SYMBOL_8_ODDS, _class2.SYMBOL_9_ODDS];

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=215687710beb3b81f17b9615cd106816ececfdde.js.map