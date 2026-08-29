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

      _cclegacy._RF.push({}, "ac30fXtb1ZF94+sacF/1tkb", "EliminationWinScoreAnalyzer", undefined);

      _export("EliminationWinScoreAnalyzer", EliminationWinScoreAnalyzer = class EliminationWinScoreAnalyzer {
        /**
         * @param wild WILD圖示
         * @param iconList 中獎圖示表 (將有賠率的連線中獎圖示放入，SCATTER請另外算)
         * @param oddList 賠率表
         * @param connectNum 連線數量
         * @param directions 連線方向(默認為上下左右)
         */
        constructor(wild, iconList, oddList, connectNum, directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
          this.wild = void 0;
          this.iconList = void 0;
          this.oddList = void 0;
          this.connectNum = void 0;
          this.directions = void 0;
          this.grid = void 0;
          this.reelAmount = void 0;
          this.symbolLength = void 0;
          this.normalBroad = void 0;
          this.wildBroad = void 0;
          this.wild = wild;
          this.iconList = iconList;
          this.oddList = oddList;
          this.connectNum = connectNum;
          this.directions = directions;
        }

        getEliminationWinData(iconData, reelAmount, symbolLength) {
          this.reelAmount = reelAmount;
          this.symbolLength = symbolLength;
          this.grid = this.convertSymbolTo2DArray(iconData);
          this.normalBroad = Array.from({
            length: this.reelAmount
          }, () => Array(this.symbolLength).fill(false));

          if (this.iconListHasWild()) {
            this.wildBroad = Array.from({
              length: this.reelAmount
            }, () => Array(this.symbolLength).fill(false));
            this.setWildBroad();
          }

          return this.getEliminationWinDataList();
        }

        convertSymbolTo2DArray(iconData) {
          let resultData = [];

          for (let index = 0; index < this.reelAmount; index++) {
            resultData[index] = iconData.slice(index * this.symbolLength, (index + 1) * this.symbolLength);
          }

          return resultData;
        }

        getEliminationWinDataList() {
          const WinDataList = [];
          const blocks = this.getEliminationBlocks();

          for (let i = 0; i < blocks.length; i++) {
            const symbol = blocks[i].symbol;
            const length = blocks[i].cells.length;
            const index = this.getWinLength(length);
            const odd = this.oddList[symbol][index];

            if (length >= this.connectNum[0] && odd > 0) {
              const pos = this.getPosList(blocks[i].cells);
              const win2DPos = this.get2DPosList(blocks[i].cells);
              blocks[i].cells.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
              const winData = new EliminationWinData(symbol, odd, pos, win2DPos);
              WinDataList.push(winData);
            }
          }

          return WinDataList;
        }

        getEliminationBlocks() {
          const blocks = [];
          this.normalConnect(blocks);

          if (this.iconListHasWild()) {
            for (let r = 0; r < this.reelAmount; r++) {
              for (let c = 0; c < this.symbolLength; c++) {
                if (this.wildBroad[r][c]) {
                  continue;
                }

                const currentValue = this.grid[r][c];
                let targetValue = currentValue;
                const block = new Block(targetValue, []);
                this.dfs(r, c, targetValue, this.wildBroad, block.cells);

                if (block.cells.length >= 0) {
                  blocks.push(block);
                }
              }
            }
          }

          return blocks;
        }

        normalConnect(blocks) {
          for (let r = 0; r < this.reelAmount; r++) {
            for (let c = 0; c < this.symbolLength; c++) {
              this.resetWild();

              if (this.normalBroad[r][c]) {
                continue;
              }

              const currentValue = this.grid[r][c];
              let targetValue = currentValue;

              if (this.isWild(currentValue)) {
                let foundTarget = false;

                for (let [dr, dc] of this.directions) {
                  const nr = r + dr;
                  const nc = c + dc;

                  if (this.canConnect(nr, nc)) {
                    targetValue = this.grid[nr][nc];
                    foundTarget = true;
                    break;
                  }
                }

                if (!foundTarget) {
                  this.normalBroad[r][c] = true;
                  continue;
                }
              }

              const block = new Block(targetValue, []);
              this.dfs(r, c, targetValue, this.normalBroad, block.cells);

              if (block.cells.length >= 0) {
                blocks.push(block);
              }
            }
          }
        }

        dfs(r, c, targetValue, broad, block) {
          if (!this.isValidCoordinate(r, c) || broad[r][c]) {
            return;
          }

          const val = this.grid[r][c];

          if (val !== targetValue && !this.isWild(val)) {
            return;
          }

          broad[r][c] = true;
          block.push([r, c]);

          for (let [dr, dc] of this.directions) {
            this.dfs(r + dr, c + dc, targetValue, broad, block);
          }
        }

        resetWild() {
          for (let r = 0; r < this.reelAmount; r++) {
            for (let c = 0; c < this.symbolLength; c++) {
              if (this.isWild(this.grid[r][c])) {
                this.normalBroad[r][c] = false;
              }
            }
          }
        }

        setWildBroad() {
          for (let r = 0; r < this.reelAmount; r++) {
            for (let c = 0; c < this.symbolLength; c++) {
              if (!this.isWild(this.grid[r][c])) {
                this.wildBroad[r][c] = true;
              }
            }
          }
        }

        canConnect(nr, nc) {
          return this.isValidCoordinate(nr, nc) && !this.normalBroad[nr][nc] && !this.isWild(this.grid[nr][nc]);
        }

        isValidCoordinate(r, c) {
          return r >= 0 && c >= 0 && r < this.reelAmount && c < this.symbolLength;
        }

        isWild(val) {
          return this.wild.includes(val);
        }

        iconListHasWild() {
          return this.iconList.some(val => this.wild.includes(val));
        }

        getWinLength(cellLength) {
          for (let i = 0; i < this.connectNum.length; i++) {
            const isMaxConnectNum = i === this.connectNum.length - 1 && cellLength >= this.connectNum[i];
            const isEqualConnectNum = cellLength >= this.connectNum[i] && cellLength < this.connectNum[i + 1];

            if (isMaxConnectNum || isEqualConnectNum) {
              return i;
            }
          }
        }

        getPosList(cell) {
          const posList = [];

          for (let i = 0; i < cell.length; i++) {
            posList.push(cell[i][0] * this.symbolLength + cell[i][1]);
          }

          posList.sort((a, b) => a - b);
          return posList;
        }

        get2DPosList(cell) {
          const result = Array.from({
            length: this.reelAmount
          }, () => []);

          for (const [x, y] of cell) {
            if (result[x]) {
              result[x].push(y);
              result[x].sort((a, b) => a - b);
            }
          }

          return result;
        }

      });

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

      _export("Block", Block = class Block {
        constructor(symbol, cells) {
          this.symbol = void 0;
          this.cells = void 0;
          this.symbol = symbol;
          this.cells = cells;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=638d0390c1e3b709d347b3a949121261566a148b.js.map