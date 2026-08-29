System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CalculatePayTable, MapWinLineInfo, ClientLineData, TestConfig, _dec, _class, _class5, _crd, ccclass, property, CalculatePayTableTest;

  function _reportPossibleCrUseOfCalculatePayTable(extras) {
    _reporterNs.report("CalculatePayTable", "./CalculatePayTable", _context.meta, extras);
  }

  _export({
    MapWinLineInfo: void 0,
    ClientLineData: void 0,
    TestConfig: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      CalculatePayTable = _unresolved_2.CalculatePayTable;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "96526bmhN5DsY+dbYJ4s5bz", "CalculatePayTableTest", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CalculatePayTableTest", CalculatePayTableTest = (_dec = ccclass('CalculatePayTableTest'), _dec(_class = class CalculatePayTableTest extends (_crd && CalculatePayTable === void 0 ? (_reportPossibleCrUseOfCalculatePayTable({
        error: Error()
      }), CalculatePayTable) : CalculatePayTable) {
        constructor() {
          super(TestConfig.WILD_LIST, TestConfig.SCORE_ICON_LIST, TestConfig.ODDS_LIST, TestConfig.PAY_TABLE);

          /**如果有WILD展開倍率 請修改wildMultiplier變成WILD展開倍率 ex:第三輪展開 有5倍 則 wildMultiplier = [1,1,5,1,1] */
          this.wildMultiplier = Array.from({
            length: TestConfig.REEL_AMOUNT
          }, () => 1);
        }

        getWinData(iconList) {
          var totalOdd = 0;
          var winPos = [];
          var lineWinDataList = [];
          var winData = this.getConnectWinData(iconList, TestConfig.REEL_AMOUNT, TestConfig.SYMBOL_LENGTH);
          var maxOddMap = new Map();

          for (var data of winData) {
            if (!maxOddMap.has(data.WinLineID) || maxOddMap.get(data.WinLineID).WinPos.length < data.Pos.length) {
              //找最長長度
              var winLineInfo = new MapWinLineInfo(data.SymbolID, data.Odd, data.Pos, data.Win2DPos);
              maxOddMap.set(data.WinLineID, winLineInfo);
            }
          }

          for (var item of maxOddMap) {
            var lineWinOdd = (item[1].WinOdds * this.getLineWildMultiplier(item[1].WinPos.length)).fixed();
            var lineWinData = new ClientLineData(item[0], item[1].WinSymbolID, lineWinOdd, item[1].WinPos, item[1].Win2DPos);
            console.log("\u7B2C" + (item[0] + 1) + "\u7DDA,\u8D0F\u7DDA\u5716\u793A:" + item[1].WinSymbolID + ",\u8D0F\u7DDA\u8CE0\u7387:" + lineWinOdd + ",\u8D0F\u7DDA\u4F4D\u7F6E:" + item[1].WinPos + ",\u8D0F\u7DDA2D\u4F4D\u7F6E:" + item[1].Win2DPos);
            lineWinDataList.push(lineWinData);
          }

          for (var _item of lineWinDataList) {
            totalOdd = (totalOdd + _item.WinOdds).fixed();

            for (var itemPos of _item.WinPos) {
              winPos.push(itemPos);
              winPos = winPos.set();
              winPos.sort((a, b) => a - b);
            }
          }

          console.log("\u7E3D\u8D0F\u5206:" + totalOdd + ",\u8D0F\u7DDA\u4F4D\u7F6E" + winPos);
        }

        getLineWildMultiplier(length) {
          var totalMultiplier = 1;

          for (var i = 0; i < length; i++) {
            totalMultiplier *= this.wildMultiplier[i];
          }

          return totalMultiplier;
        }

      }) || _class));

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

      _class5 = TestConfig;
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
      TestConfig.ODDS_LIST = [_class5.SYMBOL_0_ODDS, _class5.SYMBOL_1_ODDS, _class5.SYMBOL_2_ODDS, _class5.SYMBOL_3_ODDS, _class5.SYMBOL_4_ODDS, _class5.SYMBOL_5_ODDS, _class5.SYMBOL_6_ODDS, _class5.SYMBOL_7_ODDS, _class5.SYMBOL_8_ODDS];
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
      TestConfig.PAY_TABLE = [_class5.PAY_LINE_1, _class5.PAY_LINE_2, _class5.PAY_LINE_3, _class5.PAY_LINE_4, _class5.PAY_LINE_5, _class5.PAY_LINE_6, _class5.PAY_LINE_7, _class5.PAY_LINE_8, _class5.PAY_LINE_9, _class5.PAY_LINE_10, _class5.PAY_LINE_11, _class5.PAY_LINE_12, _class5.PAY_LINE_13, _class5.PAY_LINE_14, _class5.PAY_LINE_15, _class5.PAY_LINE_16, _class5.PAY_LINE_17, _class5.PAY_LINE_18, _class5.PAY_LINE_19, _class5.PAY_LINE_20, _class5.PAY_LINE_21, _class5.PAY_LINE_22, _class5.PAY_LINE_23, _class5.PAY_LINE_24, _class5.PAY_LINE_25];

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4ff3868b9138066379ac0abb4b5bd7ffb9303fd4.js.map