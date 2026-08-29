System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AllMatchPayTable, WinData, PayLineData, _crd;

  _export({
    AllMatchPayTable: void 0,
    WinData: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "54ee5QRqU9CTaNrNbyZOKOQ", "AllMatchPayTable", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      _export("AllMatchPayTable", AllMatchPayTable = class AllMatchPayTable {
        /**
         * @param wild WILD圖示
         * @param oddList 賠率表
         * @param iconList 中獎圖示表 (將有賠率的連線中獎圖示放入，SCATTER請另外算)
         */
        constructor(wild, oddList, iconList) {
          this.wild = void 0;
          this.payTable = void 0;
          this.iconList = void 0;
          this.reelAmount = void 0;
          this.symbolLength = void 0;
          this.wild = wild;
          this.iconList = iconList;
          this.payTable = oddList;
        }
        /**
         * @param iconData 盤面
         * @param reelAmount 滾輪數量
         * @param symbolLength 單一輪有幾個圖示
         * @return 中獎圖示,賠率,贏的位置,輪播位置，中獎2D位置
         */


        getAllMatchWinData(iconData, reelAmount, symbolLength) {
          this.reelAmount = reelAmount;
          this.symbolLength = symbolLength;
          const icon2DData = this.convertSymbolTo2DArray(iconData);
          return this.allMatchWinData(icon2DData);
        }

        allMatchWinData(icon2DData) {
          let matchWinData = [];

          for (let icon of this.iconList) {
            const oneIconMatchMap = this.calculateOneIconAllMatch(icon, icon2DData);

            for (const [key, value] of oneIconMatchMap) {
              const Win2DPos = this.convertWinIndexTo2DArray(value.Pos);
              const winData = new WinData(key, value.Odd, value.Pos, value.OneMatchPos, Win2DPos);
              matchWinData.push(winData);
            }
          }

          return matchWinData;
        }

        calculateOneIconAllMatch(icon, icon2DData) {
          const oneIconMatchMap = new Map();
          let combinedWire = Array.from({
            length: 0
          }, () => []);
          let AllPosList = [];
          let tempOdds = 0;
          let tempCount = 1; //計算分出去的條數

          for (let i = 0; i < this.reelAmount; i++) {
            const newLineOdds = this.payTable[icon][i];
            const hasWild = this.wild.some(value => icon2DData[i].includes(value)); //如果需要WILD都要匹配 some=>every

            if (icon2DData[i].includes(icon) || hasWild) {
              let winPos = [];
              const pos = icon2DData[i].indexesOf(icon).map(x => x + i * this.symbolLength);
              AllPosList = this.mergeTwoArrays(AllPosList, pos);
              winPos = this.mergeTwoArrays(winPos, pos);

              if (hasWild) {
                const wildPos = this.getWildPos(icon2DData[i], i * this.symbolLength);
                AllPosList = this.mergeTwoArrays(AllPosList, wildPos);
                winPos = this.mergeTwoArrays(winPos, wildPos);
              }

              combinedWire = this.getCombinedWireArray(combinedWire, winPos);
              const oneReelMatchCount = icon2DData[i].count(icon) + this.getWildCount(icon2DData[i]);
              tempCount = (tempCount * oneReelMatchCount).fixed();
              tempOdds = (newLineOdds * tempCount).fixed();

              if (tempOdds > 0) {
                const payLineData = new PayLineData(AllPosList, tempOdds, combinedWire);
                oneIconMatchMap.set(icon, payLineData);
              }
            } else {
              break;
            }
          }

          return oneIconMatchMap;
        }

        getWildPos(iconList, startPos) {
          let wildPosList = [];

          for (let i = 0; i < this.wild.length; i++) {
            const wildPos = iconList.indexesOf(this.wild[i]).map(x => x + startPos);
            wildPosList = wildPosList.concat(wildPos);
          }

          return wildPosList;
        }

        getWildCount(iconList) {
          let wildTotal = 0;
          ;

          for (let i = 0; i < this.wild.length; i++) {
            const wildCount = iconList.count(this.wild[i]);
            wildTotal += wildCount;
          }

          return wildTotal;
        }

        convertSymbolTo2DArray(iconData) {
          let resultData = [];

          for (let index = 0; index < this.reelAmount; index++) {
            resultData[index] = iconData.slice(index * this.symbolLength, (index + 1) * this.symbolLength);
          }

          return resultData;
        }

        getCombinedWireArray(combinedWire, posList) {
          if (combinedWire.length === 0) {
            combinedWire = posList.map(value => [value]);
            return combinedWire;
          }

          const newArray = [];

          for (let item of combinedWire) {
            for (let pos of posList) {
              newArray.push([...item, pos]);
            }
          }

          combinedWire = newArray.map(arr => [...arr]);
          return combinedWire;
        }

        mergeTwoArrays(targetArray, inputArray) {
          targetArray = targetArray.concat(inputArray);
          targetArray = targetArray.set();
          return targetArray;
        }

        convertWinIndexTo2DArray(winIconPos) {
          let resultData = Array.from({
            length: this.reelAmount
          }, () => []);

          for (let index = 0; index < winIconPos.length; index++) {
            let reelID = Math.floor(winIconPos[index] / this.symbolLength);
            let pos = winIconPos[index] % this.symbolLength;
            resultData[reelID].push(pos);
          }

          return resultData;
        }

      });

      _export("WinData", WinData = class WinData {
        constructor(winSymbolIDodd, odd, pos, oneMatchPos, win2DPos) {
          this.WinSymbolID = void 0;
          this.Odd = void 0;
          this.Pos = void 0;
          this.Win2DPos = void 0;
          this.OneMatchPos = void 0;
          this.WinSymbolID = winSymbolIDodd;
          this.Odd = odd;
          this.Pos = pos;
          this.OneMatchPos = oneMatchPos;
          this.Win2DPos = win2DPos;
        }

      });

      PayLineData = class PayLineData {
        constructor(pos, odd, oneMatchPos) {
          this.Pos = [];
          this.Odd = 0;
          this.OneMatchPos = [];
          this.Pos = pos;
          this.Odd = odd;
          this.OneMatchPos = oneMatchPos;
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2232575e94166cbb1cab8802079a0c45dabaa6bc.js.map