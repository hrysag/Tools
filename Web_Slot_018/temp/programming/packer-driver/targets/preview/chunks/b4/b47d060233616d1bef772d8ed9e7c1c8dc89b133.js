System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, WaysWinScoreAnalyzer, WaysWinData, PayLineData, _crd;

  _export({
    WaysWinScoreAnalyzer: void 0,
    WaysWinData: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7dda0RktwNIFoytvnUKaNJV", "WaysWinScoreAnalyzer", undefined);

      _export("WaysWinScoreAnalyzer", WaysWinScoreAnalyzer = class WaysWinScoreAnalyzer {
        /**
         * @param wild WILD圖示
         * @param iconList 中獎圖示表 (將有賠率的連線中獎圖示放入，一定要丟WILD!，SCATTER請另外算)
         * @param oddList  賠率表 (一定要丟入WILD的賠率表，如果WILD沒有賠率,則WILD的賠率表設定為[0, 0, 0, 0, 0])
         * @param payTable 連線表
         */
        constructor(wild, iconList, oddList, payTable) {
          this.wild = void 0;
          this.iconList = void 0;
          this.payLine = void 0;
          this.payTable = void 0;
          this.reelAmount = void 0;
          this.symbolLength = void 0;
          this.isGetAllConnect = false;
          this.wild = wild;
          this.iconList = iconList;
          this.payTable = oddList;
          this.payLine = payTable;
        }
        /**
         * @param iconData 盤面
         * @param reelAmount 滾輪數量
         * @param symbolLength 單一輪有幾個圖示
         * @returns 中獎線號,圖示中獎，賠率，位置,2D位置
         */


        getWaysWinData(iconData, reelAmount, symbolLength, getAllConnect) {
          if (getAllConnect === void 0) {
            getAllConnect = false;
          }

          this.reelAmount = reelAmount;
          this.symbolLength = symbolLength;
          this.isGetAllConnect = getAllConnect;
          return this.getWaysWinDataList(iconData);
        }

        getWaysWinDataList(iconData) {
          var winDataList = [];

          for (var i = 0; i < this.payLine.length; i++) {
            var line = this.payLine[i];
            var result = this.calculateOneLine(line, iconData);

            if (result) {
              for (var [key, value] of result) {
                var pos2DData = this.convertWinIndexTo2DArray(value.Pos);
                var winData = new WaysWinData(i, key, value.Odd, value.Pos, pos2DData);
                winDataList.push(winData);
              }
            }
          }

          return winDataList;
        }
        /**
         * @param line 單一連線位置
         * @param iconData 盤面
         * @returns 單一條線中，中獎圖示，中獎圖示的賠率，位置
         */


        calculateOneLine(line, iconData) {
          var lineMap = new Map();
          var initPos = line[0];
          var tempOdds = 0;
          var tempSymbolId = iconData[initPos];

          for (var i = 1; i < line.length; i++) {
            var linePos = line[i];
            var symbolID = iconData[linePos];
            var isEqual = this.wild.includes(symbolID) || tempSymbolId === symbolID || this.wild.includes(tempSymbolId);
            var isLegal = this.iconList.includes(symbolID) && this.iconList.includes(tempSymbolId);

            if (isLegal && isEqual) {
              tempSymbolId = this.wild.includes(symbolID) ? tempSymbolId : symbolID;
              var newLineOdds = this.payTable[tempSymbolId][i];

              if (newLineOdds >= tempOdds || this.isGetAllConnect) {
                tempOdds = this.payTable[tempSymbolId][i];
                var posList = [];
                posList.push(...line.slice(0, i + 1));
                posList = posList.set();
                var payLineData = new PayLineData(posList, tempOdds);

                if (tempOdds > 0) {
                  lineMap.set(tempSymbolId, payLineData);
                }
              }
            } else {
              break;
            }
          }

          return lineMap;
        }

        convertWinIndexTo2DArray(winIconPos) {
          var resultData = Array.from({
            length: this.reelAmount
          }, () => []);

          for (var index = 0; index < winIconPos.length; index++) {
            var reelID = Math.floor(winIconPos[index] / this.symbolLength);
            var pos = winIconPos[index] % this.symbolLength;
            resultData[reelID].push(pos);
          }

          return resultData;
        }

      });

      _export("WaysWinData", WaysWinData = class WaysWinData {
        constructor(winLineID, symbolID, odd, pos, Win2DPos) {
          this.WinLineID = void 0;
          this.SymbolID = void 0;
          this.Odd = void 0;
          this.Pos = void 0;
          this.Win2DPos = void 0;
          this.WinLineID = winLineID;
          this.SymbolID = symbolID;
          this.Odd = odd;
          this.Pos = pos;
          this.Win2DPos = Win2DPos;
        }

      });

      PayLineData = class PayLineData {
        constructor(pos, odd) {
          this.Pos = void 0;
          this.Odd = void 0;
          this.Pos = pos;
          this.Odd = odd;
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b47d060233616d1bef772d8ed9e7c1c8dc89b133.js.map