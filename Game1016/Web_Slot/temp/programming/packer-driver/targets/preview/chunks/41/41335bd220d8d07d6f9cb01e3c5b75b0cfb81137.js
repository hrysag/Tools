System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, MegaWaysWinScoreAnalyzer, MegaWaysWinData, _crd;

  _export({
    MegaWaysWinScoreAnalyzer: void 0,
    MegaWaysWinData: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc1efG76LBKfaRgH8y+AXTn", "MegaWaysWinScoreAnalyzer", undefined);

      _export("MegaWaysWinScoreAnalyzer", MegaWaysWinScoreAnalyzer = class MegaWaysWinScoreAnalyzer {
        /**
         * 初始化解析工具所需參數，iconList跟oddList的長度要一樣，工具會是抓相對位置，SCATTER請另外算
         * @param wild WILD圖示
         * @param oddList 賠率表
         * @param iconList 中獎圖示表
         */
        constructor(wild, oddList, iconList) {
          /** WILD圖示 */
          this.wild = void 0;

          /** 賠率表 */
          this.payTable = void 0;

          /** 中獎圖示 */
          this.iconList = void 0;

          /** 滾輪數量 */
          this.reelAmount = void 0;

          /** 單一輪有幾個圖示 */
          this.symbolLength = void 0;
          this.wild = wild;
          this.iconList = iconList;
          this.payTable = oddList;
        }
        /**
         * 輸入的盤面資料，回傳盤面所有得分連線
         * @param iconData 盤面
         * @param reelAmount 滾輪數量
         * @param symbolLength 單一輪有幾個圖示
         * @return 盤面所有Icon百搭得分資訊
         */


        getMegaWaysWinData(iconData, reelAmount, symbolLength) {
          this.reelAmount = reelAmount;
          this.symbolLength = symbolLength;
          return this.megaWaysWinData(iconData);
        }
        /**
         * 輸入的盤面資料，回傳盤面百搭得分資訊
         * @param iconData 盤面資訊
         * @returns 盤面所有Icon百搭得分資訊
         */


        megaWaysWinData(iconData) {
          var icon2DData = this.convertSymbolTo2DArray(iconData);
          var matchWinData = [];

          for (var icon of this.iconList) {
            var oneIconMatchMap = this.calculateOneIconMegaWays(icon, icon2DData);

            if (oneIconMatchMap) {
              matchWinData.push(oneIconMatchMap);
            }
          }

          return matchWinData;
        }
        /**
         * 計算一個icon的百搭連線
         * @param icon 照{@link iconList}順序去找
         * @param icon2DData 2D盤面
         * @returns 單一個icon的百搭連線資訊或者是沒有得獎null
         */


        calculateOneIconMegaWays(icon, icon2DData) {
          var _this = this;

          var expandedWinPaths = Array.from({
            length: 0
          }, () => []);

          var _loop = function _loop(i) {
            var hasWild = _this.wild.some(value => icon2DData[i].includes(value)); //如果需要WILD都要匹配 some=>every


            if (icon2DData[i].includes(icon) || hasWild) {
              var winPos = [];
              var _wildPos = [];
              var pos = icon2DData[i].indexesOf(icon).map(x => x + i * _this.symbolLength);
              winPos = _this.mergeTwoArrays(winPos, pos);

              if (hasWild) {
                _wildPos = _this.getWildPos(icon2DData[i], i * _this.symbolLength);
                winPos = _this.mergeTwoArrays(winPos, _wildPos);
              }

              expandedWinPaths = _this.getExpandedWinPaths(expandedWinPaths, winPos);
            } else {
              return 1; // break
            }
          };

          for (var i = 0; i < this.reelAmount; i++) {
            if (_loop(i)) break;
          }

          if (!this.wild.includes(icon)) {
            var wildPos = this.getWildPos(icon2DData.flat(), 0);
            expandedWinPaths = expandedWinPaths.filter(path => {
              return !path.every(pos => wildPos.includes(pos));
            });
          }

          return this.getOneIconWinData(icon, expandedWinPaths);
        }
        /**
        * 回傳一個icon的百搭連線贏分資料
        * @param icon 照{@link iconList}順序去找
        * @param expandedWinPaths 分裂後的贏分位置
        * @returns 單一個icon的百搭連線資訊或者是沒有得獎null
        */


        getOneIconWinData(icon, expandedWinPaths) {
          if (expandedWinPaths.length !== 0) {
            var tempCount = expandedWinPaths[0].length - 1;
            var targetOdds = this.payTable[icon][tempCount];
            var tempOdds = (targetOdds * expandedWinPaths.length).fixed();

            if (tempOdds > 0) {
              var allPosList = expandedWinPaths.flat().set().sort((a, b) => a - b);
              var win2DPos = this.convertWinIndexTo2DArray(allPosList);
              return new MegaWaysWinData(icon, tempOdds, allPosList, expandedWinPaths, win2DPos);
            }
          }

          return null;
        }
        /**
         * 獲取WILD的位置
         * @param iconList 盤面資訊 
         * @param columnOffset 盤面中該 column 的起始索引
         * @returns 獲取Wild位置
         */


        getWildPos(iconList, columnOffset) {
          var wildPosList = [];

          for (var i = 0; i < this.wild.length; i++) {
            var wildPos = iconList.indexesOf(this.wild[i]).map(x => x + columnOffset);
            wildPosList = wildPosList.concat(wildPos);
          }

          return wildPosList;
        }
        /**
         * 獲取單輪上WILD的數量
         * @param iconList 單輪上的iconList
         * @returns WILD的數量
         */


        getWildCount(iconList) {
          var wildTotal = 0;
          ;

          for (var i = 0; i < this.wild.length; i++) {
            var wildCount = iconList.count(this.wild[i]);
            wildTotal += wildCount;
          }

          return wildTotal;
        }
        /**
         * 將盤面資訊轉成2D陣列
         * @param iconData 盤面資訊
         * @returns 盤面2D陣列
         */


        convertSymbolTo2DArray(iconData) {
          var resultData = [];

          for (var index = 0; index < this.reelAmount; index++) {
            resultData[index] = iconData.slice(index * this.symbolLength, (index + 1) * this.symbolLength);
          }

          return resultData;
        }
        /**
         * 從既有的贏分位置延伸新的配對成功位置
         * EX:combinedWire:[0] posList:[1,2] => [0,1],[0,2]
         * @param combinedWire 先前的中獎位置
         * @param posList 新的中獎位置
         * @returns 合併後的中獎位置
         */


        getExpandedWinPaths(combinedWire, posList) {
          if (combinedWire.length === 0) {
            combinedWire = posList.map(value => [value]);
            return combinedWire;
          }

          var newArray = [];

          for (var item of combinedWire) {
            for (var pos of posList) {
              newArray.push([...item, pos]);
            }
          }

          combinedWire = newArray.map(arr => [...arr]);
          return combinedWire;
        }
        /**
         * 合併兩個陣列
         * @param targetArray 主陣列 
         * @param inputArray  附加陣列
         * @returns 合併後的陣列
         */


        mergeTwoArrays(targetArray, inputArray) {
          targetArray = targetArray.concat(inputArray);
          targetArray = targetArray.set();
          return targetArray;
        }
        /**
         * 將中獎位置轉為2D位置
         * @param winIconPos 贏分位置
         * @returns 贏分2D位置
         */


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
      /**
       * 中獎資訊
       */


      _export("MegaWaysWinData", MegaWaysWinData = class MegaWaysWinData {
        constructor(winSymbolIDodd, odd, pos, oneMatchPosList, win2DPos) {
          /** 中獎IconID */
          this._winSymbolID = void 0;

          /** 中獎賠率 */
          this._odd = void 0;

          /** 中獎位置 */
          this._pos = void 0;

          /** 中獎2D位置 */
          this._win2DPos = void 0;

          /** Icon的中獎位置組合 */
          this._oneMatchPosList = void 0;
          this._winSymbolID = winSymbolIDodd;
          this._odd = odd;
          this._pos = pos;
          this._oneMatchPosList = oneMatchPosList;
          this._win2DPos = win2DPos;
        }
        /** 設定中獎Icon */


        set winSymbolID(value) {
          this._winSymbolID = value;
        }
        /** 獲取中獎Icon */


        get winSymbolID() {
          return this._winSymbolID;
        }
        /** 設定中獎賠率 */


        set odd(value) {
          this._odd = value;
        }
        /** 獲取中獎賠率 */


        get odd() {
          return this._odd;
        }
        /** 設定中獎位置 */


        set pos(value) {
          this._pos = value;
        }
        /** 獲取中獎位置 */


        get pos() {
          return this._pos;
        }
        /** 設定單一種Icon的中獎組合 */


        set oneMatchPos(value) {
          this._oneMatchPosList = value;
        }
        /** 獲取單一種Icon的中獎位置 */


        get oneMatchPos() {
          return this._oneMatchPosList;
        }
        /** 設定中獎2D位置 */


        set win2DPos(value) {
          this._win2DPos = value;
        }
        /** 獲取中獎2D位置 */


        get win2DPos() {
          return this._win2DPos;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=41335bd220d8d07d6f9cb01e3c5b75b0cfb81137.js.map