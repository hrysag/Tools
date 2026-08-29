System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MegaWaysWinScoreAnalyzer, AllMachPayNG018, AllMachPayFG018, ClientData, AwardData, Game018NGPayConfig, Game018FGPayConfig, _class3, _class4, _crd;

  function _reportPossibleCrUseOfMegaWaysWinScoreAnalyzer(extras) {
    _reporterNs.report("MegaWaysWinScoreAnalyzer", "db://assets/Scripts/GameScripts/BoardAnalysis/MegaWaysWinScoreAnalyzer", _context.meta, extras);
  }

  _export({
    AllMachPayNG018: void 0,
    AllMachPayFG018: void 0,
    ClientData: void 0,
    AwardData: void 0,
    Game018NGPayConfig: void 0,
    Game018FGPayConfig: void 0
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

      _cclegacy._RF.push({}, "4c1d7JniGZJf4vDLNlM13pI", "AllMachPay018", undefined);

      _export("AllMachPayNG018", AllMachPayNG018 = class AllMachPayNG018 extends (_crd && MegaWaysWinScoreAnalyzer === void 0 ? (_reportPossibleCrUseOfMegaWaysWinScoreAnalyzer({
        error: Error()
      }), MegaWaysWinScoreAnalyzer) : MegaWaysWinScoreAnalyzer) {
        constructor() {
          super(Game018NGPayConfig.WILD_LIST, Game018NGPayConfig.ODDS_LIST, Game018NGPayConfig.NORMAL_SYMBOL_LIST);
        }

        getWinData(iconList) {
          let totalOdd = 0;
          const dataList = [];
          const matchMap = this.getMegaWaysWinData(iconList, Game018NGPayConfig.REEL_AMOUNT, Game018NGPayConfig.SYMBOL_LENGTH);

          for (let item of matchMap) {
            // 將 Win2DPos 轉換為二維陣列座標
            const convertedWin2DPos = item.OneMatchPos.map(machPos => machPos.map(pos => pos % Game018NGPayConfig.SYMBOL_LENGTH)); //console.log('checkRowData', convertedWin2DPos);
            //const winData = new ClientData(item.WinSymbolID, item.Odd, item.Pos, item.OneMatchPos);
            //const ogWinData = new ClientData(item.WinSymbolID, item.Odd, item.Pos, item.OneMatchPos);
            //console.log(`OG_第${item.WinSymbolID}個圖示，贏的賠率${item.Odd}，贏的位置${item.Pos}，輪播位置${item.OneMatchPos}，2D位置`);

            const winData = new ClientData(item.WinSymbolID, item.Odd, item.Pos, convertedWin2DPos); //console.log(`第${item.WinSymbolID}個圖示，贏的賠率${item.Odd}，贏的位置${item.Pos}，輪播位置${item.OneMatchPos}，2D位置`);

            dataList.push(winData);
            totalOdd = (totalOdd + item.Odd).fixed(); //--每一輪中線的個別賠率都在ClientData.WinOdds裡面
          }

          let finalData = new AwardData();
          finalData.totalOdd = totalOdd;
          finalData.dataList = dataList; //console.log(`總贏分NG:${totalOdd}`, finalData, matchMap);

          return finalData;
        }

      });

      _export("AllMachPayFG018", AllMachPayFG018 = class AllMachPayFG018 extends (_crd && MegaWaysWinScoreAnalyzer === void 0 ? (_reportPossibleCrUseOfMegaWaysWinScoreAnalyzer({
        error: Error()
      }), MegaWaysWinScoreAnalyzer) : MegaWaysWinScoreAnalyzer) {
        constructor() {
          super(Game018FGPayConfig.WILD_LIST, Game018FGPayConfig.ODDS_LIST, Game018FGPayConfig.NORMAL_SYMBOL_LIST);
        }

        getWinData(iconList) {
          let totalOdd = 0;
          const dataList = [];
          const matchMap = this.getMegaWaysWinData(iconList, Game018FGPayConfig.REEL_AMOUNT, Game018FGPayConfig.SYMBOL_LENGTH);

          for (let item of matchMap) {
            // 將 Win2DPos 轉換為二維陣列座標
            const convertedWin2DPos = item.OneMatchPos.map(machPos => machPos.map(pos => pos % Game018FGPayConfig.SYMBOL_LENGTH)); //console.log('checkRowData', convertedWin2DPos);
            //const winData = new ClientData(item.WinSymbolID, item.Odd, item.Pos, item.OneMatchPos);

            const winData = new ClientData(item.WinSymbolID, item.Odd, item.Pos, convertedWin2DPos); //console.log(`第${item.WinSymbolID}個圖示，贏的賠率${item.Odd}，贏的位置${item.Pos}，輪播位置${item.OneMatchPos}，2D位置`);

            dataList.push(winData);
            totalOdd = (totalOdd + item.Odd).fixed(); //--每一輪中線的個別賠率都在ClientData.WinOdds裡面
          }

          let finalData = new AwardData();
          finalData.totalOdd = totalOdd;
          finalData.dataList = dataList;
          return finalData;
        }

      });

      _export("ClientData", ClientData = class ClientData {
        //-陣列索引
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

      _export("AwardData", AwardData = class AwardData {
        constructor() {
          this.totalOdd = 0;
          this.dataList = [];
        }

      }); //--NG賠率表(阿里巴巴與盜賊首領陣營都用相同的表3*3)


      _export("Game018NGPayConfig", Game018NGPayConfig = class Game018NGPayConfig {}); //--FG賠率表(阿里巴巴與盜賊首領陣營都用相同的表3*6)


      _class3 = Game018NGPayConfig;
      Game018NGPayConfig.REEL_AMOUNT = 3;
      Game018NGPayConfig.SYMBOL_LENGTH = 3;
      Game018NGPayConfig.WILD_LIST = [6, 7, 8];
      //--WILD 剪刀石頭布
      Game018NGPayConfig.NORMAL_SYMBOL_LIST = [0, 1, 2, 3, 4, 5];
      Game018NGPayConfig.SYMBOL_0_ODDS = [0, 0, 5];
      //--阿里巴巴/盜賊首領
      Game018NGPayConfig.SYMBOL_1_ODDS = [0, 0, 3];
      //--瑪姬娜/強盜
      Game018NGPayConfig.SYMBOL_2_ODDS = [0, 0, 1];
      //--黑桃
      Game018NGPayConfig.SYMBOL_3_ODDS = [0, 0, 0.7];
      //--愛心
      Game018NGPayConfig.SYMBOL_4_ODDS = [0, 0, 0.5];
      //--方塊
      Game018NGPayConfig.SYMBOL_5_ODDS = [0, 0, 0.3];
      //--梅花
      Game018NGPayConfig.ODDS_LIST = [_class3.SYMBOL_0_ODDS, _class3.SYMBOL_1_ODDS, _class3.SYMBOL_2_ODDS, _class3.SYMBOL_3_ODDS, _class3.SYMBOL_4_ODDS, _class3.SYMBOL_5_ODDS];

      _export("Game018FGPayConfig", Game018FGPayConfig = class Game018FGPayConfig {});

      _class4 = Game018FGPayConfig;
      Game018FGPayConfig.REEL_AMOUNT = 6;
      Game018FGPayConfig.SYMBOL_LENGTH = 3;
      Game018FGPayConfig.WILD_LIST = [6, 7, 8];
      //--WILD 剪刀石頭布
      Game018FGPayConfig.NORMAL_SYMBOL_LIST = [0, 1, 2, 3, 4, 5];
      Game018FGPayConfig.SYMBOL_0_ODDS = [0, 0, 5, 6, 9, 13.5];
      //--阿里巴巴/盜賊首領
      Game018FGPayConfig.SYMBOL_1_ODDS = [0, 0, 3, 3.6, 5.4, 8.1];
      //--瑪姬娜/強盜
      Game018FGPayConfig.SYMBOL_2_ODDS = [0, 0, 1, 1.2, 1.8, 2.7];
      //--黑桃
      Game018FGPayConfig.SYMBOL_3_ODDS = [0, 0, 0.7, 0.85, 1.25, 1.9];
      //--愛心
      Game018FGPayConfig.SYMBOL_4_ODDS = [0, 0, 0.5, 0.6, 0.9, 1.35];
      //--方塊
      Game018FGPayConfig.SYMBOL_5_ODDS = [0, 0, 0.3, 0.35, 0.55, 0.8];
      //--梅花
      Game018FGPayConfig.ODDS_LIST = [_class4.SYMBOL_0_ODDS, _class4.SYMBOL_1_ODDS, _class4.SYMBOL_2_ODDS, _class4.SYMBOL_3_ODDS, _class4.SYMBOL_4_ODDS, _class4.SYMBOL_5_ODDS];

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f8c8fc19de2e5386029503681f8b25f131a49776.js.map