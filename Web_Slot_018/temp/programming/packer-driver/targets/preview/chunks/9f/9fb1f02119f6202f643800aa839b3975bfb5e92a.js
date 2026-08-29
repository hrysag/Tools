System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SlotMachineDataQueue, _dec, _class, _crd, ccclass, property, SlotMachineData;

  _export("SlotMachineDataQueue", void 0);

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

      _cclegacy._RF.push({}, "bd449C/MbtNB46/c/Ad8kTY", "SlotMachineData", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SlotMachineData", SlotMachineData = (_dec = ccclass('SlotMachineData'), _dec(_class = class SlotMachineData extends Component {
        constructor() {
          super(...arguments);

          /**所有可能出現的符號 */
          this.allSymbolList = [];

          /** 每輪所有可能出現的符號，會根據每輪不能出現的符號來運算最終的符號 */
          this.everyReelAllSymbolList = [];

          /**每輪只會出現一次的符號 */
          this.uniqueSymbolList = [];

          /**每輪不能出現的符號 */
          this.noAppearSymbolList = [];

          /**每輪不能同時出現這個陣列裡面的符號 */
          this.noSameReelSymbolList = [];

          /**每輪初始的符號，沒有資料的話就是隨機生成 */
          this.initSymbolList = [];
        }

        /**
         * 
         * @param reelAmount 滾輪總數
         * @param allIconList 所有可能出現的符號
         */
        init(reelAmount) {
          this.everyReelAllSymbolList = Array.from({
            length: reelAmount
          }, () => []);
          this.updateEveryReelAllSymbolList();
        }

        updateEveryReelAllSymbolList() {
          var _this = this;

          var _loop = function _loop(reelID) {
            _this.everyReelAllSymbolList[reelID] = [..._this.allSymbolList];

            if (_this.noAppearSymbolList[reelID]) {
              _this.everyReelAllSymbolList[reelID] = _this.everyReelAllSymbolList[reelID].filter(symbolID => !_this.noAppearSymbolList[reelID].includes(symbolID));
            }
          };

          for (var reelID = 0; reelID < this.everyReelAllSymbolList.length; reelID++) {
            _loop(reelID);
          }
        }

        getAllSymbols(reelID) {
          var allSymbolList = [];

          if (this.everyReelAllSymbolList[reelID]) {
            allSymbolList = [...this.everyReelAllSymbolList[reelID]];
          }

          return allSymbolList;
        }

        getUniqueSymbols(reelID) {
          var uniqueSymbolList = [];

          if (this.uniqueSymbolList[reelID]) {
            uniqueSymbolList = [...this.uniqueSymbolList[reelID]];
          }

          return uniqueSymbolList;
        }

        getNoSameReelSymbols(reelID) {
          var noSameReelSymbolList = [];

          if (this.noSameReelSymbolList[reelID]) {
            noSameReelSymbolList = [...this.noSameReelSymbolList[reelID]];
          }

          return noSameReelSymbolList;
        }

        getNoAppearSymbols(reelID) {
          var noAppearSymbolList = [];

          if (this.noAppearSymbolList[reelID]) {
            noAppearSymbolList = [...this.noAppearSymbolList[reelID]];
          }

          return noAppearSymbolList;
        }

      }) || _class));

      _export("SlotMachineDataQueue", SlotMachineDataQueue = class SlotMachineDataQueue {
        constructor() {
          this._queue = [];
        }

        get queue() {
          return this._queue;
        }

        push(data) {
          this._queue.push(data);
        }

        shift() {
          return this._queue.shift();
        }

        isEmpty() {
          return this._queue.length === 0;
        }

        insert(index, data) {
          this._queue.splice(index, 0, data);
        }

        getData(index) {
          return this._queue[index];
        }

        clear() {
          this._queue = [];
        }

      }); // export class ReelSymbolData {
      //     public symbolData: number[] = [];
      //     public isResultData: boolean = false;
      //     public isEmpty(): boolean {
      //         return this.symbolData.length === 0;
      //     }
      //     public getBounceSymbolID(): number {
      //         return this.symbolData[this.symbolData.length - 1];
      //     }
      //     /**
      //      * 
      //      * @returns 是伺服器資料並且是最後一個
      //      */
      //     public isFinalData(): boolean {
      //         return this.isResultData && this.isEmpty();
      //     }
      // }
      // export class SymbolData {
      //     public symbolID: number = -1;
      //     public bounceSymbolID: number = -1;
      //     public pullSymbolID: number = -1;
      //     public isFinal: boolean = false;
      // }


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9fb1f02119f6202f643800aa839b3975bfb5e92a.js.map