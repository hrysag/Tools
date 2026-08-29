System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, WaysWinScoreAnalyzer, WaysWinData, _crd;

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

      _cclegacy._RF.push({}, "b74d2qys75DtpdEwwsW7ckh", "WaysWinScoreAnalyzer", undefined);
      /**
       * 處理一條線內最終結果
       */

      /**
       * 連線條件
       */


      _export("WaysWinScoreAnalyzer", WaysWinScoreAnalyzer = class WaysWinScoreAnalyzer {
        /**
         * 初始化解析工具所需參數,iconList跟oddList的長度要一樣,工具會是抓相對位置 
         * @param iconList 中獎圖示表
         * @param oddList  賠率表
         * @param waysTable 連線表
         * @param connectCondition 連線條件{@link ConnectConditionDelegate}初始化可以放Null後續可以再修改,連線失敗請回傳負數
         */
        constructor(iconList, oddList, waysTable, connectCondition) {
          /** 中獎圖示 */
          this.iconList = void 0;

          /** 賠率表   */
          this.oddList = void 0;

          /** 連線表 */
          this.waysTable = void 0;

          /** 滾輪數量 */
          this.reelAmount = void 0;

          /** 單一輪有幾個圖示 */
          this.symbolLength = void 0;

          /** 請實作方法處理一條線內最終結果 */
          this.outPutCondition = void 0;

          /** 請實作方法處理連線條件 */
          this.connectCondition = void 0;
          this.iconList = iconList;
          this.oddList = oddList;
          this.waysTable = waysTable;
          this.connectCondition = connectCondition;
        }
        /**
         * 輸入的盤面資料，回傳盤面所有得分連線
         * @param iconData 盤面資料
         * @param reelAmount 滾輪數量
         * @param symbolLength 單一輪有幾個圖示
         * @param outPutCondition 自定義方法處理一條線內最終結果{@link OutputConditionDelegate}
         * @returns 盤面所有得分連線
         */


        getWaysAllWinData(iconData, reelAmount, symbolLength, outPutCondition) {
          this.reelAmount = reelAmount;
          this.symbolLength = symbolLength;
          this.outPutCondition = outPutCondition;
          return this.getAllWaysWinDataList(iconData);
        }
        /**
         * 回傳盤面所有得分連線
         * @param iconData 盤面資料
         * @returns 盤面所有中線組合
         */


        getAllWaysWinDataList(iconData) {
          const winDataList = [];

          for (let i = 0; i < this.waysTable.length; i++) {
            const line = this.waysTable[i];
            const oneLineAllData = this.getOneLineData(i, line, iconData);

            if (oneLineAllData.length > 0) {
              const result = this.outPutCondition(oneLineAllData);
              winDataList.push(result);
            }
          }

          return winDataList;
        }
        /**
         * 獲取單一條線中獎資訊,並根據{@link OutputConditionDelegate}決定最終結果
         * @param lineID 線號
         * @param line 單一連線所有位置
         * @param iconData 盤面
         * @returns 單一條線中最終中獎資訊(中獎線號,中獎圖示,中獎圖示的賠率,位置,2D位置)
         */


        getOneLineData(lineID, line, iconData) {
          const lineMap = [];
          const initPos = line[0];
          let tempSymbolId = iconData[initPos];

          for (let i = 1; i < line.length; i++) {
            const linePos = line[i];
            const symbolID = iconData[linePos];
            const newSymbolID = this.connectCondition(tempSymbolId, symbolID);

            if (newSymbolID > -1) {
              tempSymbolId = newSymbolID;
              const iconIndex = this.iconList.indexOf(tempSymbolId);
              const newLineOdds = this.oddList[iconIndex][i];

              if (newLineOdds > 0) {
                const posList = line.slice(0, i + 1);
                const pos2DData = this.convertWinIndexTo2DArray(posList);
                const oneLineWinData = new WaysWinData(lineID, tempSymbolId, newLineOdds, posList, pos2DData);
                lineMap.push(oneLineWinData);
              }
            } else {
              break;
            }
          }

          return lineMap;
        }
        /**
         * 將中獎位置轉為2D位置
         * @param winIconPos 中獎位置
         * @returns 2D位置
         */


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
      /**
       * 中獎資訊
       */


      _export("WaysWinData", WaysWinData = class WaysWinData {
        constructor(winLineID, symbolID, odd, pos, Win2DPos) {
          /** 中獎線號 */
          this._winLineID = void 0;

          /** 中獎圖示 */
          this._symbolID = void 0;

          /** 中獎賠率 */
          this._odd = void 0;

          /** 中獎位置 */
          this._pos = void 0;

          /** 中獎2D位置 */
          this._win2DPos = void 0;
          this._winLineID = winLineID;
          this._symbolID = symbolID;
          this._odd = odd;
          this._pos = pos;
          this._win2DPos = Win2DPos;
        }
        /** 取得中獎線號 */


        get winLineID() {
          return this._winLineID;
        }
        /** 設定中獎線號 */


        set winLineID(value) {
          this._winLineID = value;
        }
        /** 取得中獎圖示 */


        get symbolID() {
          return this._symbolID;
        }
        /** 設定中獎圖示 */


        set symbolID(value) {
          this._symbolID = value;
        }
        /** 取得中獎賠率 */


        get odd() {
          return this._odd;
        }
        /** 設定中獎賠率 */


        set odd(value) {
          this._odd = value;
        }
        /** 取得中獎位置 */


        get pos() {
          return this._pos;
        }
        /** 設定中獎位置 */


        set pos(value) {
          this._pos = value;
        }
        /** 取得中獎2D位置 */


        get win2DPos() {
          return this._win2DPos;
        }
        /** 設定中獎2D位置 */


        set win2DPos(value) {
          this._win2DPos = value;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f483c934011b261b010c5ccea32d1097f006a4b2.js.map