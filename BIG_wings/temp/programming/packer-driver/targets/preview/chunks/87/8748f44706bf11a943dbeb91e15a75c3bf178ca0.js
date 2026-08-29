System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, typeAward, lineAward, huAward, awardGroup, _dec, _class5, _crd, ccclass, property, demoInfo_TA;

  _export({
    typeAward: void 0,
    lineAward: void 0,
    huAward: void 0,
    awardGroup: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48cffh8Va1Dj4PRMlft7Iwk", "demoInfo_TA", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator); //牌型獎項

      _export("typeAward", typeAward = class typeAward {
        //中獎的位置[排序][位置]
        constructor(name, symID, winPos) {
          this.name = void 0;
          //牌型名稱
          this.symID = void 0;
          //中獎編號[排序]
          this.symPos = void 0;
          this.name = name;
          this.symID = [...symID];
          this.symPos = [...winPos];
        }

        destroy() {
          this.name = '';
          this.symID = [];
          this.symPos = [];
        }

      }); //線的獎項


      _export("lineAward", lineAward = class lineAward {
        //牌型資料
        constructor(typeAward) {
          this.typeAward = [];
          this.typeAward = typeAward;
        }

        destroy() {
          this.typeAward = [];
        }

      }); //胡牌獎項


      _export("huAward", huAward = class huAward {
        //總台數
        constructor(setSym, flower, huType, allPoints) {
          this.setSym = void 0;
          //胡牌sym編號[牌][編號]
          this.flower = void 0;
          //中獎花色[編號]
          this.huType = void 0;
          //中獎的牌型[牌型編號][台數]
          this.allPoints = void 0;
          this.setSym = [...setSym];
          this.flower = [...flower];
          this.huType = [...huType];
          this.allPoints = allPoints;
        }

        destroy() {
          this.setSym = [];
          this.flower = [];
          this.huType = [];
          this.allPoints = 0;
        }

      }); //一回合slot的資料


      _export("awardGroup", awardGroup = class awardGroup {
        constructor() {
          this.slotNumber = [];
          //symbol盤面
          this.lineAward = [];
          //線的獎項
          this.huAward = null;
          //胡牌獎項
          this.bta = 100;
          //押注值
          this.ws = void 0;
          //得分(所有線的總和)
          this.bala = void 0;
          //totalWin(最終分數)
          this.freeGameLeft = 0;
          //剩餘免費遊戲次數
          this.freeGameMultiples = 0;
        }

        //免費遊戲倍率
        destroy() {
          this.lineAward = [];
        }

      });

      _export("demoInfo_TA", demoInfo_TA = (_dec = ccclass('demoInfo_TA'), _dec(_class5 = class demoInfo_TA extends Component {
        constructor() {
          super(...arguments);
          //***************仿gameInfo的腳本 ****************/
          this.antes = [100, 200, 500, 1000];

          /**押注的antes索引 */
          this.nowBetIndex = 0;

          /**每局下注金額 */
          this.betScore = 100;

          /**遊戲demo幾局 */
          this.demoRound = 6;

          /**遊戲中獎表演資料*/
          this.symData = [];
        }

        //設置demo表演資料
        setWinData() {
          for (var i = 0; i < this.demoRound; i++) {
            var awardGroupData = new awardGroup(); //本局參數

            switch (i) {
              case 0:
                //表演free牌未中，表演花牌，後續不補牌
                //symbol盤面
                awardGroupData.slotNumber = [[22, 43, 2, 9, 41, 18, 19, 3, 2, 17, 14, 10, 20, 43, 28, 23, 3, 14, 21, 22, 13, 28, 29, 11, 23], [1, 22, 43, 2, 9, 18, 19, 3, 2, 17, 14, 10, 20, 43, 28, 23, 3, 14, 21, 22, 13, 28, 29, 11, 23]]; //盤面連線獎項

                awardGroupData.lineAward = [new lineAward([new typeAward('flower', [41], [[4]])])];
                awardGroupData.ws = 10; //該回合總贏分

                break;

              case 1:
                //表演free牌，雙重聽牌，進freeGame
                //symbol盤面
                awardGroupData.slotNumber = [[22, 23, 28, 9, 41, 18, 19, 15, 2, 17, 14, 10, 29, 3, 28, 23, 29, 14, 21, 22, 13, 28, 29, 11, 23], [32, 28, 22, 23, 9, 18, 19, 34, 19, 17, 16, 33, 14, 10, 16, 2, 23, 14, 21, 22, 3, 1, 13, 19, 24], [7, 43, 31, 13, 10, 8, 6, 43, 31, 14, 25, 33, 21, 31, 20, 27, 43, 34, 11, 12, 3, 22, 25, 18, 23], [12, 22, 19, 43, 40, 18, 43, 13, 2, 30, 2, 12, 34, 10, 2, 18, 30, 34, 43, 22, 1, 11, 14, 30, 30]]; //盤面連線獎項

                awardGroupData.lineAward = [new lineAward([new typeAward('flower', [41], [[4]]), new typeAward('pong', [28, 29], [[2, 14, 21], [12, 16, 22]])]), new lineAward([new typeAward('kong', [28], [[1]]), new typeAward('pong', [19], [[6, 8, 23]])]), new lineAward([new typeAward('free', [43, 43, 43], [[1], [7], [16]]), new typeAward('pong', [31], [[2, 8, 13]])]), new lineAward([new typeAward('free', [43, 43, 43], [[3], [6], [18]]), new typeAward('pong', [30], [[9, 16, 23]]), new typeAward('eye', [34], [[12, 17]])])];
                awardGroupData.huAward = new huAward([[28, 28, 28, 28], [29, 29, 29], [30, 30, 30], [31, 31, 31], [34, 34]], [41], [[1, 2, 8, 11, 12, 13], [16, 16, 4, 1, 1, 5]], 43);
                awardGroupData.ws = 8888; //該回合總贏分

                awardGroupData.freeGameLeft = 11; //剩餘免費遊戲次數

                break;

              case 2:
                //進入免費遊戲，表演複數碰牌，補空缺掉落
                //symbol盤面
                awardGroupData.slotNumber = [[29, 8, 4, 9, 41, 18, 19, 13, 2, 17, 14, 10, 15, 3, 4, 28, 15, 14, 21, 22, 13, 4, 15, 11, 23], [11, 22, 29, 8, 9, 18, 19, 13, 2, 17, 2, 12, 14, 10, 3, 17, 28, 14, 21, 22, 1, 31, 13, 11, 23]]; //盤面連線獎項

                awardGroupData.lineAward = [new lineAward([new typeAward('flower', [41], [[4]]), new typeAward('pong', [4, 15], [[2, 14, 21], [12, 16, 22]])])];
                awardGroupData.ws = 90; //該回合總贏分

                awardGroupData.freeGameLeft = 10; //剩餘免費遊戲次數

                break;

              case 3:
                //symbol盤面
                awardGroupData.slotNumber = [[22, 28, 28, 9, 41, 43, 19, 15, 19, 17, 34, 10, 29, 3, 28, 23, 29, 14, 21, 27, 25, 28, 29, 11, 33], [43, 19, 1, 22, 9, 43, 19, 15, 19, 17, 7, 1, 34, 10, 3, 1, 23, 14, 21, 27, 24, 43, 25, 11, 33], [12, 43, 1, 22, 9, 5, 1, 43, 15, 17, 7, 1, 34, 10, 3, 16, 23, 14, 21, 27, 24, 43, 25, 11, 33], [6, 13, 12, 22, 9, 20, 13, 5, 13, 17, 21, 7, 34, 13, 3, 16, 23, 14, 21, 27, 28, 24, 25, 11, 33]]; //盤面連線獎項

                awardGroupData.lineAward = [new lineAward([new typeAward('flower', [41], [[4]]), new typeAward('kong', [28], [[1, 2, 14, 21]]), new typeAward('pong', [29], [[12, 16, 22]])]), new lineAward([new typeAward('pong', [19], [[1, 6, 8]])]), new lineAward([new typeAward('free', [43, 43, 43], [[1], [7], [21]]), new typeAward('pong', [1], [[2, 6, 11]])]), new lineAward([new typeAward('pong', [13], [[1, 6, 8]])])];
                awardGroupData.huAward = new huAward([[28, 28, 28, 28], [29, 29, 29], [19, 19, 19], [1, 1, 1], [13, 13]], [41], [[8, 11, 12, 13], [4, 1, 1, 2]], 8);
                awardGroupData.ws = 8888; //該回合總贏分
                // awardGroupData.bala = 17866;//totalWin(最終分數)

                awardGroupData.freeGameLeft = 20; //剩餘免費遊戲次數

                break;

              case 4:
                //進入免費遊戲，表演複數碰牌，補空缺掉落
                //symbol盤面
                awardGroupData.slotNumber = [[29, 8, 4, 9, 41, 18, 19, 13, 2, 17, 14, 10, 15, 3, 4, 28, 15, 14, 21, 22, 13, 4, 15, 11, 23], [11, 22, 29, 8, 9, 18, 19, 13, 2, 17, 2, 12, 14, 10, 3, 17, 28, 14, 21, 22, 1, 31, 13, 11, 23]]; //盤面連線獎項

                awardGroupData.lineAward = [new lineAward([new typeAward('flower', [41], [[4]]), new typeAward('pong', [4, 15], [[2, 14, 21], [12, 16, 22]])])];
                awardGroupData.ws = 90; //該回合總贏分

                awardGroupData.freeGameLeft = 1; //剩餘免費遊戲次數

                break;

              case 5:
                //進入免費遊戲，表演複數碰牌，補空缺掉落
                //symbol盤面
                awardGroupData.slotNumber = [[22, 43, 2, 9, 41, 18, 19, 3, 2, 17, 14, 10, 20, 43, 28, 23, 3, 14, 21, 22, 13, 28, 29, 11, 23], [1, 22, 43, 2, 9, 18, 19, 3, 2, 17, 14, 10, 20, 43, 28, 23, 3, 14, 21, 22, 13, 28, 29, 11, 23]]; //盤面連線獎項

                awardGroupData.lineAward = [new lineAward([new typeAward('flower', [41], [[4]])])];
                awardGroupData.ws = 10; //該回合總贏分

                awardGroupData.bala = 17886; //totalWin(最終分數)

                break;
            }

            this.symData.push(awardGroupData); //設置一般遊戲中獎表演資料
          }
        }

        onLoad() {
          this.setWinData(); //設置一般遊戲中獎表演參數(demo)
        }

      }) || _class5));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8748f44706bf11a943dbeb91e15a75c3bf178ca0.js.map