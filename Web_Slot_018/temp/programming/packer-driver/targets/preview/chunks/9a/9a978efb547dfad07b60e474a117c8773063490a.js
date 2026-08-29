System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AllMatchPayTable, ClientData, TestConfig, _dec, _class, _class3, _crd, ccclass, property, AllMatchPayTableTest;

  function _reportPossibleCrUseOfAllMatchPayTable(extras) {
    _reporterNs.report("AllMatchPayTable", "./AllMatchPayTable", _context.meta, extras);
  }

  _export({
    ClientData: void 0,
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
      AllMatchPayTable = _unresolved_2.AllMatchPayTable;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d012ewSW/dNtLxvEQNuLFCZ", "AllMatchPayTableTest", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AllMatchPayTableTest", AllMatchPayTableTest = (_dec = ccclass('AllMatchPayTableTest'), _dec(_class = class AllMatchPayTableTest extends (_crd && AllMatchPayTable === void 0 ? (_reportPossibleCrUseOfAllMatchPayTable({
        error: Error()
      }), AllMatchPayTable) : AllMatchPayTable) {
        constructor() {
          super(TestConfig.WILD_LIST, TestConfig.ODDS_LIST, TestConfig.NORMAL_SYMBOL_LIST);
        }

        getWinData(iconList) {
          var totalOdd = 0;
          var winPos = [];
          var dataList = [];
          var matchMap = this.getAllMatchWinData(iconList, TestConfig.REEL_AMOUNT, TestConfig.SYMBOL_LENGTH);

          for (var item of matchMap) {
            var winData = new ClientData(item.WinSymbolID, item.Odd, item.Pos, item.OneMatchPos);
            console.log("\u7B2C" + item.WinSymbolID + "\u500B\u5716\u793A\uFF0C\u8D0F\u7684\u8CE0\u7387" + item.Odd + "\uFF0C\u8D0F\u7684\u4F4D\u7F6E" + item.Pos + "\uFF0C\u8F2A\u64AD\u4F4D\u7F6E" + item.OneMatchPos + "\uFF0C2D\u4F4D\u7F6E" + item.Win2DPos);
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

      }) || _class));

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

      _class3 = TestConfig;
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
      TestConfig.ODDS_LIST = [_class3.SYMBOL_0_ODDS, _class3.SYMBOL_1_ODDS, _class3.SYMBOL_2_ODDS, _class3.SYMBOL_3_ODDS, _class3.SYMBOL_4_ODDS, _class3.SYMBOL_5_ODDS, _class3.SYMBOL_6_ODDS, _class3.SYMBOL_7_ODDS, _class3.SYMBOL_8_ODDS, _class3.SYMBOL_9_ODDS];

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9a978efb547dfad07b60e474a117c8773063490a.js.map