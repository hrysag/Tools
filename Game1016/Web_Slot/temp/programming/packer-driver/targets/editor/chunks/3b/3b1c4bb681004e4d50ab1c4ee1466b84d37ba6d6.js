System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, TestLibs, _crd;

  _export("TestLibs", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "11c6cIEfklCyop4rSRH88Zp", "TestLibs", undefined);

      /**
       * 測試啟動區域&產生相關測試資料
       * 用來隔離主核心的邏輯
       */
      _export("TestLibs", TestLibs = class TestLibs {
        //--每軸符號數量
        constructor() {
          this._uniqueSymbolList = [];
          this._allSymbolList = [];
          this._reelAmount = 5;
          //--軸數
          this._reelSymbolAmount = 4;
          this._uniqueSymbolList = [[10], [], [], [], [10]];
          this._allSymbolList = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        } //--slotMachine 最終盤面結果測試資料(2Ds)


        getFinalResultData() {
          return [];
        }
        /**
         * 
         * @param reels 送入需要產生資料的盤面軸資訊
         * e.g:[0,1,2,3,4] 代表5軸
         * 沒送資料就只產生一軸的資料
         */


        getRandomDataForStartSpin(reels) {
          const slotBoardData = this.generate2dsData(this.generateFlatAryData(reels));
          return slotBoardData;
        }

        generateFlatAryData(reels) {
          const reelIds = reels == undefined ? [0] : reels;
          const aryRandomData = [];

          for (let i = 0; i < reelIds.length; i++) {
            const reelId = reelIds[i];
            const randomValueData = this.generateRandomSymbolList(reelId);
            aryRandomData.push(...randomValueData);
          }

          return aryRandomData;
        } //--切割1ds資料成2ds資料


        generate2dsData(reelsData) {
          const reelAmount = this._reelAmount;
          const reelSymbolAmount = this._reelSymbolAmount;
          const result = [];

          for (let i = 0; i < reelAmount; i++) {
            const startIndex = i * reelSymbolAmount;
            const endIndex = startIndex + reelSymbolAmount;
            result.push(reelsData.slice(startIndex, endIndex));
          }

          return result;
        } //--亂數池


        generateRandomSymbolList(reelIndex) {
          const sourceList = this.getTargetAllSymbolList();
          const testReelIndex = reelIndex !== undefined ? reelIndex : 0; // 預設為0，如果reelIndex未提供則使用0

          const uniqueList = this.getTargetUniqueSymbolList(testReelIndex);
          const pickedSymbols = [];
          const possibleSymbols = [];
          const usedUniqueSymbols = [];
          const iconAmount = 4; //--要產生幾組
          // 產生所有可能的符號組合

          for (let i = 0; i < sourceList.length; i++) {
            possibleSymbols.push(sourceList[i]);
          }

          possibleSymbols.push(...uniqueList); // 隨機選擇符號

          for (let i = 0; i < iconAmount; i++) {
            if (possibleSymbols.length === 0) {
              break; // 如果沒有剩餘的符號，則跳出迴圈
            }

            const randomIndex = Math.floor(Math.random() * possibleSymbols.length);
            const symbolTarget = possibleSymbols[randomIndex]; // 檢查唯一性

            if (uniqueList && uniqueList.includes(symbolTarget)) {
              if (usedUniqueSymbols.includes(symbolTarget)) {
                // 如果已經使用過，則重新選擇
                i--;
                possibleSymbols.splice(randomIndex, 1); // 移除已經使用過的符號

                continue;
              } else {
                usedUniqueSymbols.push(symbolTarget);
              }
            } //const symbol = SymbolNumber.pool.instance();
            //symbol.symbolID = symbolTarget;


            pickedSymbols.push(symbolTarget);
            possibleSymbols.splice(randomIndex, 1); // 移除已經選取的符號
          }

          return pickedSymbols;
        }

        getTargetAllSymbolList() {
          return this._allSymbolList;
        } //--NG模式當中會出現的特殊牌組(包含wild和scatter)


        getTargetUniqueSymbolList(index) {
          return this._uniqueSymbolList[index];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3b1c4bb681004e4d50ab1c4ee1466b84d37ba6d6.js.map