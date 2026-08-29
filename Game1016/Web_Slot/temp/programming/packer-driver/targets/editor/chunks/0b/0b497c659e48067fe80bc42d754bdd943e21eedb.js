System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BoardAnalysis, WaysWinScoreAnalyzerTest, ClientLineData, TestConfig, _class3, _crd, WaysWinScoreAnalyzer;

  function _reportPossibleCrUseOfBoardAnalysis(extras) {
    _reporterNs.report("BoardAnalysis", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  _export({
    WaysWinScoreAnalyzerTest: void 0,
    ClientLineData: void 0,
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

      _cclegacy._RF.push({}, "cf1f5ER2fpAT7FHhGSNe9xX", "WaysWinScoreAnalyzerTest", undefined);

      WaysWinScoreAnalyzer = (_crd && BoardAnalysis === void 0 ? (_reportPossibleCrUseOfBoardAnalysis({
        error: Error()
      }), BoardAnalysis) : BoardAnalysis).WaysWinScoreAnalyzer;

      _export("WaysWinScoreAnalyzerTest", WaysWinScoreAnalyzerTest = class WaysWinScoreAnalyzerTest extends WaysWinScoreAnalyzer {
        /**
         * 建構子
         */
        constructor() {
          super(TestConfig.SCORE_ICON_LIST, TestConfig.ODDS_LIST, TestConfig.PAY_TABLE, WaysWinScoreAnalyzerTest.getConnectCondition);

          /**先算完分後乘倍率 請修改wildMultiplier變成WILD展開倍率 ex:第三輪展開 有5倍 則 wildMultiplier = [1,1,5,1,1] */
          this.multiplierList = Array.from({
            length: TestConfig.REEL_AMOUNT
          }, () => 1);

          /** 如果有WILD要先承上賠率倍數 請修改multipleWildPosList */
          this.multipleWildPosList = [];
        }
        /**
         * 獲取單條線上(最大賠率)的中獎資訊
         * @param dataList 工具回傳的單條線上所有的中獎資訊
         * @returns 最終結果
         */


        getBiggerWinData(dataList) {
          let temp = null;

          for (let item of dataList) {
            if (temp === null || temp.odd < item.odd) {
              temp = item;
            }
          }

          return temp;
        }
        /**
         * 獲取單條線上(同倍率取最長 或者 取倍率最高)的中獎資訊
         * @param dataList 工具回傳的單條線上所有的中獎資訊
         * @returns 最終結果
         */


        getLongerWinData(dataList) {
          let temp = null;

          for (let item of dataList) {
            if (temp === null || temp.pos.length < item.pos.length && temp.odd === item.odd || temp.odd < item.odd) {
              temp = item;
            }
          }

          return temp;
        }
        /**
         * 獲取單條線上(先乘上賠率倍數 再做賠率比較 取最大中獎)的中獎資訊
         * @param dataList 工具回傳的單條線上所有的中獎資訊
         * @returns 最終結果
         */


        getHasWildMultiplierWinData(dataList) {
          let temp = null;

          for (let item of dataList) {
            const lineWildOdd = this.getHasLineWildMultiplier(item.pos, this.multipleWildPosList);
            item.odd = (item.odd * lineWildOdd).fixed();

            if (temp === null || temp.odd < item.odd) {
              temp = item;
            }
          }

          return temp;
        }
        /**
         * 獲取單條線上有特殊圖示的賠率倍數
         * @param winPos 贏線位置
         * @param multipleWildPosList WILD位置 
         * @returns 最終賠率倍數
         */


        getHasLineWildMultiplier(winPos, multipleWildPosList) {
          let wildOdd = 1;
          const wildMultiplierPos = new Set(multipleWildPosList);

          for (let i = 0; i < winPos.length; i++) {
            if (wildMultiplierPos.has(winPos[i])) {
              wildOdd = (wildOdd * 2).fixed();
            }
          }

          return wildOdd.fixed();
        }
        /**
         * 取得連線條件,並回傳贏的圖示,若是不中則回傳負數
         * @param mainSymbolID 當前圖示
         * @param nextSymbolID 下一個圖示
         * @returns 贏的圖示
         */


        static getConnectCondition(mainSymbolID, nextSymbolID) {
          const wild = [8];
          const isEqual = wild.includes(nextSymbolID) || mainSymbolID === nextSymbolID || wild.includes(mainSymbolID);
          const isLegal = TestConfig.SCORE_ICON_LIST.includes(nextSymbolID) && TestConfig.SCORE_ICON_LIST.includes(mainSymbolID);

          if (!isLegal || !isEqual) {
            return -1; //回傳負數代表不中
          } else {
            return wild.includes(nextSymbolID) ? mainSymbolID : nextSymbolID;
          }
        }
        /**
         * 測試單次盤面贏線資訊
         * @param iconList 中獎圖示表
         */


        getWinData(iconList) {
          let totalOdd = 0;
          let winPos = [];
          const lineWinDataList = [];
          this.multipleWildPosList = []; //如果有WILD要先承上倍數 請先修改multipleWildPosList

          const winData = this.getWaysAllWinData(iconList, TestConfig.REEL_AMOUNT, TestConfig.SYMBOL_LENGTH, this.getBiggerWinData.bind(this));

          for (let item of winData) {
            const lineWinOdd = (item.odd * this.getLineMultiplier(item.pos.length)).fixed();
            const lineWinData = new ClientLineData(item.winLineID, item.symbolID, lineWinOdd, item.pos, item.win2DPos);
            console.log(`第${item.winLineID}線,贏線圖示:${item.symbolID},贏線賠率:${lineWinOdd},贏線位置:${item.pos},贏線2D位置:${item.win2DPos}`);
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
        /**
         * 取得最後的加權倍數
         * @param length 
         * @returns 當條線的加權過後的倍數
         */


        getLineMultiplier(length) {
          let totalMultiplier = 1;

          for (let i = 0; i < length; i++) {
            totalMultiplier *= this.multiplierList[i];
          }

          return totalMultiplier;
        }

      });
      /**
       * 測試用ClientLineData
       */


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
      /**
       * 測試用config
       */


      _export("TestConfig", TestConfig = class TestConfig {});

      _class3 = TestConfig;
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
      TestConfig.ODDS_LIST = [_class3.SYMBOL_0_ODDS, _class3.SYMBOL_1_ODDS, _class3.SYMBOL_2_ODDS, _class3.SYMBOL_3_ODDS, _class3.SYMBOL_4_ODDS, _class3.SYMBOL_5_ODDS, _class3.SYMBOL_6_ODDS, _class3.SYMBOL_7_ODDS, _class3.SYMBOL_8_ODDS];
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
      TestConfig.PAY_TABLE = [_class3.PAY_LINE_1, _class3.PAY_LINE_2, _class3.PAY_LINE_3, _class3.PAY_LINE_4, _class3.PAY_LINE_5, _class3.PAY_LINE_6, _class3.PAY_LINE_7, _class3.PAY_LINE_8, _class3.PAY_LINE_9, _class3.PAY_LINE_10, _class3.PAY_LINE_11, _class3.PAY_LINE_12, _class3.PAY_LINE_13, _class3.PAY_LINE_14, _class3.PAY_LINE_15, _class3.PAY_LINE_16, _class3.PAY_LINE_17, _class3.PAY_LINE_18, _class3.PAY_LINE_19, _class3.PAY_LINE_20, _class3.PAY_LINE_21, _class3.PAY_LINE_22, _class3.PAY_LINE_23, _class3.PAY_LINE_24, _class3.PAY_LINE_25];

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0b497c659e48067fe80bc42d754bdd943e21eedb.js.map