System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EliminationWinScoreAnalyzer, EliminationWinData, Block, _crd;

  _export({
    EliminationWinScoreAnalyzer: void 0,
    EliminationWinData: void 0,
    Block: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "40889ojTVpCjbDnOsUdJcJ9", "EliminationWinScoreAnalyzer", undefined);
      /**
       * 消除成功條件
       */


      _export("EliminationWinScoreAnalyzer", EliminationWinScoreAnalyzer = class EliminationWinScoreAnalyzer {
        /**
         * 初始化解析工具所需參數，{@link iconList}跟{@link oddList}的總數長度以及{@link connectNum}跟{@link oddList}裡的賠率長度要一樣，工具會是抓相對位置，SCATTER請另外算
         * @param oddList 賠率表
         * @param connectNum 連線數量
         * @param directions 連線方向(默認為上下左右)
         */
        constructor(oddList, connectNum, eliminationCondition, directions) {
          if (directions === void 0) {
            directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
          }

          /** WILD圖示 */
          this.wild = void 0;

          /** 賠率表 */
          this.oddList = void 0;

          /** 連線數量 */
          this.connectNum = void 0;

          /** 連線方向 */
          this.directions = void 0;

          /** 紀錄2D盤面Icon */
          this.grid = void 0;

          /** 滾輪數量 */
          this.reelAmount = void 0;

          /** 單一輪有幾個圖示 */
          this.symbolLength = void 0;

          /** 一般圖示紀錄是否處理過 */
          this.normalBroad = void 0;

          /** WILD圖示紀錄是否處理過 */
          this.wildBroad = void 0;

          /** 請實作方法處理連線條件 */
          this.eliminationCondition = void 0;
          this.oddList = oddList;
          this.connectNum = connectNum;
          this.directions = directions;
          this.eliminationCondition = eliminationCondition;
        }
        /**
         * 輸入的盤面資料，回傳盤面所有消除得分連線
         * @param iconData 盤面
         * @param reelAmount 滾輪數量
         * @param symbolLength 單一輪有幾個圖示
         * @param wildList WILD圖示
         * @return 盤面所有Icon消除得分資訊
         */


        getEliminationWinData(iconData, reelAmount, symbolLength, wildList) {
          if (wildList === void 0) {
            wildList = [];
          }

          this.reelAmount = reelAmount;
          this.symbolLength = symbolLength;
          this.wild = wildList;
          this.grid = this.convertSymbolTo2DArray(iconData);
          this.normalBroad = Array.from({
            length: this.reelAmount
          }, () => Array(this.symbolLength).fill(false));

          if (this.wild.length > 0) {
            this.setWildBroad();
          }

          return this.getEliminationWinDataList();
        }
        /**
         * 將盤面資訊轉成2D陣列
         * @param iconData 盤面資訊
         * @returns 2D盤面
         */


        convertSymbolTo2DArray(iconData) {
          var resultData = [];

          for (var index = 0; index < this.reelAmount; index++) {
            resultData[index] = iconData.slice(index * this.symbolLength, (index + 1) * this.symbolLength);
          }

          return resultData;
        }
        /**
         * 獲取盤面所有Icon消除得分資訊
         * @returns 盤面所有Icon消除得分資訊
         */


        getEliminationWinDataList() {
          var WinDataList = [];
          var blocks = this.getEliminationBlocks();

          for (var i = 0; i < blocks.length; i++) {
            var symbol = blocks[i].mainSymbol;
            var length = blocks[i].cells.length;
            var index = this.getWinConnectIndex(length);
            var odd = this.oddList[symbol][index];

            if (length >= this.connectNum[0] && odd > 0) {
              var pos = this.getPosList(blocks[i].cells);
              var win2DPos = this.get2DPosList(blocks[i].cells);
              blocks[i].cells.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
              var winData = new EliminationWinData(symbol, odd, pos, win2DPos);
              WinDataList.push(winData);
            }
          }

          return WinDataList;
        }
        /**
         * 獲取盤面所有Icon消除資訊
         * @returns 盤面所有Icon消除資訊
         */


        getEliminationBlocks() {
          var blocks = [];
          this.normalSymbolConnect(blocks); //一般連線

          if (this.wild.length > 0) {
            //有WILD 去計算WILD連線
            for (var r = 0; r < this.reelAmount; r++) {
              for (var c = 0; c < this.symbolLength; c++) {
                if (this.wildBroad[r][c]) {
                  continue;
                }

                var currentSymbol = this.grid[r][c];
                var mainSymbol = currentSymbol;
                var block = new Block(mainSymbol, []);
                this.dfs(r, c, mainSymbol, this.wildBroad, block.cells);

                if (block.cells.length >= 0) {
                  blocks.push(block);
                }
              }
            }
          }

          return blocks;
        }
        /**
         * 一般Symbol連線
         * @param blocks 盤面所有Icon消除資訊
         */


        normalSymbolConnect(blocks) {
          for (var r = 0; r < this.reelAmount; r++) {
            for (var c = 0; c < this.symbolLength; c++) {
              this.updateNormalBoardForWild();

              if (this.normalBroad[r][c]) {
                continue;
              }

              var currentSymbol = this.grid[r][c];
              var mainSymbol = currentSymbol;

              if (!this.eliminationCondition(mainSymbol)) {
                continue;
              }

              if (this.isWild(currentSymbol)) {
                var foundTarget = false;

                for (var [dr, dc] of this.directions) {
                  var nr = r + dr;
                  var nc = c + dc;

                  if (this.canConnect(nr, nc)) {
                    mainSymbol = this.grid[nr][nc];
                    foundTarget = true;
                    break;
                  }
                }

                if (!foundTarget) {
                  this.normalBroad[r][c] = true;
                  continue;
                }
              }

              var block = new Block(mainSymbol, []);
              this.dfs(r, c, mainSymbol, this.normalBroad, block.cells);

              if (block.cells.length >= 0) {
                blocks.push(block);
              }
            }
          }
        }
        /**
         * 深度優先搜尋
         * @param r row
         * @param c column
         * @param mainSymbol 當前搜尋值 
         * @param broad 版面
         * @param block 紀錄方塊座標
         */


        dfs(r, c, mainSymbol, broad, block) {
          if (!this.isValidCoordinate(r, c) || broad[r][c]) {
            return;
          }

          var val = this.grid[r][c];

          if (val !== mainSymbol && !this.isWild(val)) {
            return;
          }

          broad[r][c] = true;
          block.push([r, c]);

          for (var [dr, dc] of this.directions) {
            this.dfs(r + dr, c + dc, mainSymbol, broad, block);
          }
        }
        /**
         * 更新一般Bool版面
         */


        updateNormalBoardForWild() {
          for (var r = 0; r < this.reelAmount; r++) {
            for (var c = 0; c < this.symbolLength; c++) {
              if (this.isWild(this.grid[r][c])) {
                this.normalBroad[r][c] = false;
              }
            }
          }
        }
        /**
         * 設置WildBool版面
         */


        setWildBroad() {
          this.wildBroad = Array.from({
            length: this.reelAmount
          }, () => Array(this.symbolLength).fill(false));

          for (var r = 0; r < this.reelAmount; r++) {
            for (var c = 0; c < this.symbolLength; c++) {
              if (!this.isWild(this.grid[r][c])) {
                this.wildBroad[r][c] = true;
              }
            }
          }
        }
        /**
         * 判斷是否可以連線
         * @param nr 下一個row座標
         * @param nc 下一個column座標
         * @returns 是否可以連線
         */


        canConnect(nr, nc) {
          return this.isValidCoordinate(nr, nc) && !this.normalBroad[nr][nc] && !this.isWild(this.grid[nr][nc]);
        }
        /**
         * 判斷是否為有效座標
         * @param r row
         * @param c column
         * @returns 是否為有效座標
         */


        isValidCoordinate(r, c) {
          return r >= 0 && c >= 0 && r < this.reelAmount && c < this.symbolLength;
        }
        /**
         * val是否為Wild
         * @param val 盤面資料
         * @returns  是否為Wild
         */


        isWild(val) {
          return this.wild.includes(val);
        }
        /**
         * 獲取方格連線長度在連線數量中的相對應位置
         * @param cellLength 中獎位置的長度 
         * @returns 連線長度在連線數量中的相對應位置
         */


        getWinConnectIndex(cellLength) {
          for (var i = 0; i < this.connectNum.length; i++) {
            var isMaxConnectNum = i === this.connectNum.length - 1 && cellLength >= this.connectNum[i];
            var isEqualConnectNum = cellLength >= this.connectNum[i] && cellLength < this.connectNum[i + 1];

            if (isMaxConnectNum || isEqualConnectNum) {
              return i;
            }
          }
        }
        /**
         * 獲取單一Symbol中獎位置
         * @param cell 方塊位置
         * @returns 中獎位置
         */


        getPosList(cell) {
          var posList = [];

          for (var i = 0; i < cell.length; i++) {
            posList.push(cell[i][0] * this.symbolLength + cell[i][1]);
          }

          posList.sort((a, b) => a - b);
          return posList;
        }
        /**
         * 獲取單一Symbol中獎的2D位置
         * @param cell 方塊位置
         * @returns 中獎的2D位置
         */


        get2DPosList(cell) {
          var result = Array.from({
            length: this.reelAmount
          }, () => []);

          for (var [x, y] of cell) {
            if (result[x]) {
              result[x].push(y);
              result[x].sort((a, b) => a - b);
            }
          }

          return result;
        }

      });
      /**
       * 中獎資訊
       */


      _export("EliminationWinData", EliminationWinData = class EliminationWinData {
        constructor(symbolID, odd, pos, Win2DPos) {
          this.SymbolID = void 0;
          this.Odd = void 0;
          this.Pos = void 0;
          this.Win2DPos = void 0;
          this.SymbolID = symbolID;
          this.Odd = odd;
          this.Pos = pos;
          this.Win2DPos = Win2DPos;
        }

      });
      /**
       * 所有Icon消除資訊
       */


      _export("Block", Block = class Block {
        constructor(mainSymbol, cells) {
          /** 當前符號 */
          this.mainSymbol = void 0;

          /** 方塊位置 [[x,y],[x,y]...]*/
          this.cells = void 0;
          this.mainSymbol = mainSymbol;
          this.cells = cells;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e71cd112d8249c421e721fd4aa16336ebd595834.js.map