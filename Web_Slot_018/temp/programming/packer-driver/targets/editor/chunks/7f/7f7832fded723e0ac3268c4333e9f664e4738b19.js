System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GameDropResultData, RoundRemoveData, IconMoveData, RoundMoveData, _crd;

  _export({
    GameDropResultData: void 0,
    RoundRemoveData: void 0,
    IconMoveData: void 0,
    RoundMoveData: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a927eg8vnBJqKcLNatmn5Ih", "DropReelDataStructure", undefined);

      /**
       * Game: 整局遊戲從start到全部表演完成
       * Round: Game裡面一盤面一盤面的結果
       *  
      */
      __checkObsolete__(['_decorator', 'Node']);

      _export("GameDropResultData", GameDropResultData = class GameDropResultData {
        get firstRoundData() {
          return this._firstRoundData;
        }

        get roundRemoveDataList() {
          return this._roundRemoveDataList;
        }

        constructor(firstRoundData, roundRemoveDataList) {
          this._firstRoundData = [];
          this._roundRemoveDataList = [];
          this._firstRoundData = firstRoundData;
          this._roundRemoveDataList = roundRemoveDataList;
        }

      });

      _export("RoundRemoveData", RoundRemoveData = class RoundRemoveData {
        get removeIconData() {
          return this._removeIconData;
        }
        /**
         * 此資料為每輪按removeIconData順序新增的Icon
         * 沿用上面的範例 [[11, 13], [12, 14], [15, 16], [], []]
         * 表示第一輪新增11&13，第二輪新增12&14，第三輪新增15&16
         */


        get newIconData() {
          return this._newIconData;
        }

        constructor(removeIconData, newIconData) {
          /**
           * 此資料為消除Icon在Reel上的Index
           * 例如消除第1~3輪第1&第2個Icon = [[0, 1], [0, 1], [0, 1], [], []] (假設共5輪)
           */
          this._removeIconData = [];
          this._newIconData = [];
          this._removeIconData = removeIconData;
          this._newIconData = newIconData;
        }

      });
      /**
       * 以下資料型態為公版自動產生&計算出來的，若沒有需要不用特地改寫
       */


      _export("IconMoveData", IconMoveData = class IconMoveData {
        constructor(node, moveCount, resetCount) {
          this._node = void 0;
          this._moveCount = 0;
          this._resetCount = 0;
          this._node = node;
          this._moveCount = moveCount;
          this._resetCount = resetCount;
        }

        get node() {
          return this._node;
        }

        set node(node) {
          this._node = node;
        }

        set moveCount(newCount) {
          this._moveCount = newCount;
        }

        get moveCount() {
          return this._moveCount;
        }

        set resetCount(newCount) {
          this._resetCount = newCount;
        }

        get resetCount() {
          return this._resetCount;
        }

      });

      _export("RoundMoveData", RoundMoveData = class RoundMoveData {
        constructor() {
          this._roundIconMoveData = [];
          this._roundIconMoveDataReverse = [];
        }

        get roundIconMoveData() {
          return this._roundIconMoveData;
        }

        set roundIconMoveData(roundIconMoveData) {
          this._roundIconMoveData = roundIconMoveData;
        }

        set roundMoveCount(newMoveCount) {
          if (Array.isArray(newMoveCount)) {
            for (let i = 0; i < newMoveCount.length; i++) {
              for (let j = 0; j < this._roundIconMoveData[i].length; j++) {
                this._roundIconMoveData[i][j].moveCount = newMoveCount[i];
              }
            }
          } else {
            for (let i = 0; i < this._roundIconMoveData.length; i++) {
              for (let j = 0; j < this._roundIconMoveData[i].length; j++) {
                this._roundIconMoveData[i][j].moveCount = newMoveCount;
              }
            }
          }
        }

        set roundResetCount(newResetCount) {
          if (Array.isArray(newResetCount)) {
            for (let i = 0; i < newResetCount.length; i++) {
              for (let j = 0; j < this._roundIconMoveData[i].length; j++) {
                this._roundIconMoveData[i][j].resetCount = newResetCount[i];
              }
            }
          } else {
            for (let i = 0; i < this._roundIconMoveData.length; i++) {
              for (let j = 0; j < this._roundIconMoveData[i].length; j++) {
                this._roundIconMoveData[i][j].resetCount = newResetCount;
              }
            }
          }
        }

        addReelMoveData(reelMoveData) {
          this._roundIconMoveData.push(reelMoveData);
        }

        getReelMoveDataByIndex(index) {
          return this._roundIconMoveData[index];
        }

        checkIfReelHasIconNeedToMove(index) {
          for (let i = 0; i < this._roundIconMoveData[index].length; i++) {
            if (this._roundIconMoveData[index][i].moveCount > 0) {
              return true;
            }
          }

          return false;
        }

        generateReverseOrderIndexList() {
          for (let i = 0; i < this._roundIconMoveData.length; i++) {
            this._roundIconMoveDataReverse[i] = [...this._roundIconMoveData[i]].reverse();
          }
        }

        getReverseOrderIndex(nodeData, reelID) {
          return this._roundIconMoveDataReverse[reelID].findIndex(data => data === nodeData);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7f7832fded723e0ac3268c4333e9f664e4738b19.js.map