System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, IteratorFactory, List, _crd;

  function _reportPossibleCrUseOfIterator(extras) {
    _reporterNs.report("Iterator", "./Iterator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIteratorFactory(extras) {
    _reporterNs.report("IteratorFactory", "./IteratorFactory", _context.meta, extras);
  }

  _export("List", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      IteratorFactory = _unresolved_2.IteratorFactory;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "89969O8cEZPbLmMBTbxLJ2k", "List", undefined);

      /**
       * 列陣儲存類別
       */
      _export("List", List = class List {
        constructor(array) {
          this.m_arItem = void 0;
          this.m_arItem = array ? array : [];
        }

        get array() {
          return this.m_arItem;
        }

        get Count() {
          return this.m_arItem ? this.m_arItem.length : 0;
        } // 在串列頭新增.


        insert(value) {
          this.m_arItem.unshift(value);
        } // 任意地方新增. 不要太常用.


        insertAt(iIndexAt, value) {
          var iTotalCount = this.getCount();

          if (iIndexAt <= 0) {
            this.insert(value);
          } else if (iIndexAt >= iTotalCount) {
            this.add(value);
          } else {
            var arPart1 = this.m_arItem.slice(0, iIndexAt);
            var arPart2 = this.m_arItem.slice(iIndexAt, iTotalCount);
            this.m_arItem = arPart1.concat([value], arPart2);
          }
        } // 新增物件.


        add(value) {
          this.m_arItem.push(value);
        } // 取出物件, 找不到傳回undefined.


        get(index) {
          if (index < 0 || index >= this.getCount()) {
            return undefined;
          }

          return this.m_arItem[index];
        } // 在指定位置設定數值


        set(index, value) {
          this.m_arItem[index] = value;
        } // 移除一個項目(第一個遇到的項目).


        remove(value) {
          var iIndex = this.indexOf(value);

          if (iIndex >= 0) {
            this.m_arItem[iIndex] = null;
            this.m_arItem.splice(iIndex, 1);
          }
        } // 移除第iIndex個項目.


        removeAt(iIndex) {
          if (iIndex < 0 || iIndex >= this.m_arItem.length) {
            return;
          } else if (iIndex == 0) {
            this.removeFirst();
          } else if (iIndex == this.m_arItem.length - 1) {
            this.removeLast();
          } else {
            this.m_arItem[iIndex] = null;
            this.m_arItem.splice(iIndex, 1);
          }
        }
        /**
         * 移除第一項
         */


        removeFirst() {
          this.m_arItem.shift();
        }

        removeLast() {
          this.m_arItem.pop();
        } // 取出數量.


        getCount() {
          return this.m_arItem.length;
        } // 反查value在第幾個index.


        indexOf(value) {
          return this.m_arItem.indexOf(value);
        } // 清除全部.


        clear() {
          if (this.m_arItem && this.m_arItem.length > 0) {
            var iCount = this.m_arItem.length;

            for (var i = 0; i < iCount; ++i) {
              this.m_arItem[i] = null;
            }

            this.m_arItem = null;
            this.m_arItem = new Array();
          }
        } // 取出Iterator.


        getIterator() {
          return (_crd && IteratorFactory === void 0 ? (_reportPossibleCrUseOfIteratorFactory({
            error: Error()
          }), IteratorFactory) : IteratorFactory).createListIterator(this);
        } // 轉成陣列.


        toArray() {
          var iCount = this.getCount();
          var arDuplicate = Array(iCount);

          for (var i = 0; i < iCount; ++i) {
            arDuplicate[i] = this.m_arItem[i];
          }

          return arDuplicate;
        }

        forEach(callbackfn, thisArg) {
          this.m_arItem.forEach(callbackfn, thisArg);
        }

        contains(value) {
          return this.m_arItem.indexOf(value) < 0 ? false : true;
        }

        copyTo(target) {
          if (target) {
            this.m_arItem.forEach(item => {
              target.add(item);
            });
          }

          return target;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=580ddb7feb4d464ffe15be19de40e22eab5ef352.js.map