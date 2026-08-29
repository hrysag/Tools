System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Utility, _crd;

  // import { dataParser016 } from "db://assets/Game/Game016/Scripts/Config/SlotDataParser016";
  // import { SlotInfo016 } from "db://assets/Game/Game016/Scripts/ServerData/SlotInfo016";
  function historyParser(base64Str, bet) {
    var binaryBuffer = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
      error: Error()
    }), Utility) : Utility).base64ToBinaryBuffer(base64Str); // let slotInfo016 = new SlotInfo016(binaryBuffer);
    // return dataParser016(slotInfo016, bet);
  }
  /*
  使用教學
  
  1. 
  將上方historyParser 函數內容改成自己的細單解析邏輯
  
  2. 
  先用下面指令在終端機打包出來 SlotDataParserXXX.js 檔案 (檔名記得改自己的GameCode)
  // 打包指令
  // npx esbuild ./assets/Scripts/Utils/CheckScoreESBuild/entryHistory.ts --bundle --platform=browser --format=iife --global-name=MyLib --outfile=./assets/Scripts/Utils/CheckScoreESBuild/dist/SlotDataParserXXX.js
  
  打包前記得進入
  ./assets/Scripts/ModuleEntry.ts
  將下方 //有CC 的部分 import 全部註解起來 以免錯誤
  
  3.
  在打包出來的 SlotDataParserXXX.js 中，可以使用 MyLib.historyParser(base64Str) 來調用 historyParser 函數
  為了方便sever使用 在最下面加入
  
  function slotDataParserXXX(base64Str, bet, featureRatio) {
    let realBet = (bet / featureRatio).fixed();;
    return MyLib.historyParser(base64Str, realBet);
  }
  
  4.
  上傳細單FTP後 可使用下方網址測試 更改 gamecode 與 slotdata 參數即可
  // 測試網址
  
  https://dev-gamerecord.apex-win.com/#/game-list?lang=tw&history=
  {
      "gamecode": "game016",
          "history": [
              {
                  "gamecode": "game016",
                  "slotdata": "pDuctlSjWwgBAQIGAWAZp2Y3p1gKQqaIdIpZpwR1N1dpZSWpCYdERGg4OWgEaBc0NxMXaQRIyHBHondEBTLGhyyGiXUDZsVWLHKqVAp4yjdcnBZKCnfGRJyMKXgGNsaUXKx4pQQ=",
                  "id": "NG無得分",
                  "time": "",
                  "version": "",
                  "bet": 100,
                  "win": 6000,
                  "before_total": "0",
                  "total": "0",
                  "account": "0"
              }
          ]
  }
  
  
  */


  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  _export("historyParser", historyParser);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Utility = _unresolved_2.Utility;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cabd0e5x6xKJ7edzb6r/61e", "entryHistory", undefined);

      /* globals define */
      Array.prototype.count = function (value) {
        return this.filter(x => x == value).length;
      }; //計算陣列中，所有參數陣列元素出現的次數 例如 arr = [1,2,3,3,4] arr.countOccurrencesOfArray([2,3]) 會等於 3 


      Array.prototype.countOccurrencesOfArray = function (arr) {
        return arr.reduce((count, elem) => {
          return count + this.filter(x => x === elem).length;
        }, 0);
      };

      Array.prototype.indexesOf = function (value) {
        var positions = this.map(function (e, i) {
          return e === value ? i : -1;
        }).filter(function (e) {
          return e !== -1;
        });
        return positions;
      };

      Array.prototype.set = function () {
        var set = new Set(this);
        var arr = Array.from(set);
        return arr;
      };

      Array.prototype.setSelf = function () {
        var uniqueValues = Array.from(new Set(this)); // 取得去重後的陣列

        this.length = 0; // 清空原陣列

        this.push(...uniqueValues); // 將去重後的元素推回原陣列

        return this; // 返回修改後的陣列（可選）
      }; // 為 Array.prototype 添加一個名為 remove 的方法


      Array.prototype.remove = function (value) {
        // 找到元素的索引
        var index = this.indexOf(value); // 如果找到該元素

        if (index > -1) {
          // 使用 splice 方法從數組中移除該元素
          this.splice(index, 1);
        } // 返回數組自身以便方法鏈接


        return this;
      };

      Array.prototype.getRandomElement = function () {
        var len = this.length;
        var index = Math.floor(Math.random() * len);
        return this[index];
      };

      Number.prototype.fixed = function () {
        return parseFloat(this.toFixed(4));
      };

      Number.prototype.readByte = function (start, length) {
        var byte = this.valueOf();

        if (byte < 0 || byte > 255) {
          console.error('Number out of range');
          return byte;
        }

        var mask = (1 << length) - 1; // 右移，使 start 位置的 bit 变成最低位

        return byte >> 8 - start - length & mask;
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dc834245e2649d5629dec05024ade3816f3b63cc.js.map