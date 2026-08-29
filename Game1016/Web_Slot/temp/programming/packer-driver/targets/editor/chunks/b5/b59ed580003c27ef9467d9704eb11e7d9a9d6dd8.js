System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MegaWaysWinScoreAnalyzer, MegaWaysWinScoreAnalyzerTest, ClientData, TestConfig, _class2, _crd;

  function _reportPossibleCrUseOfMegaWaysWinData(extras) {
    _reporterNs.report("MegaWaysWinData", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMegaWaysWinScoreAnalyzer(extras) {
    _reporterNs.report("MegaWaysWinScoreAnalyzer", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
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
      MegaWaysWinScoreAnalyzer = _unresolved_2.MegaWaysWinScoreAnalyzer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6d77epdBvVB/6ed4DwWB3eY", "MegaWaysWinScoreAnalyzerTest", undefined);

      _export("MegaWaysWinScoreAnalyzerTest", MegaWaysWinScoreAnalyzerTest = class MegaWaysWinScoreAnalyzerTest extends (_crd && MegaWaysWinScoreAnalyzer === void 0 ? (_reportPossibleCrUseOfMegaWaysWinScoreAnalyzer({
        error: Error()
      }), MegaWaysWinScoreAnalyzer) : MegaWaysWinScoreAnalyzer) {
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
          let totalOdd = 0;
          let winPos = [];
          const dataList = [];
          const matchMap = this.getMegaWaysWinData(iconList, TestConfig.REEL_AMOUNT, TestConfig.SYMBOL_LENGTH);

          for (let item of matchMap) {
            const winData = new ClientData(item.winSymbolID, item.odd, item.pos, item.win2DPos);
            console.log(`第${item.winSymbolID}個圖示，贏的賠率${item.odd}，贏的位置${item.pos}，輪播位置${item.oneMatchPos}，2D位置${item.win2DPos}`);
            dataList.push(winData);
          }

          for (let item of dataList) {
            totalOdd = (totalOdd + item.WinOdds).fixed();

            for (let itemPos of item.WinPos) {
              winPos.push(itemPos);
              winPos = winPos.set();
              winPos.sort((a, b) => a - b);
            }

            for (let itemPos of item.Win2DPos) {
              console.log(`輪播${itemPos}`);
            }
          }

          console.log(`總贏分:${totalOdd},贏線位置${winPos} `);
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
//# sourceMappingURL=b59ed580003c27ef9467d9704eb11e7d9a9d6dd8.js.map