System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Queue, _crd;

  _export("Queue", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b1f96H+PtVJobOhDb3wySgW", "Queue", undefined);

      _export("Queue", Queue = class Queue {
        constructor() {
          this.items = [];
        }

        // 向隊列添加元素
        enqueue(item) {
          this.items.push(item);
        } // 從隊列移除並返回第一個元素


        dequeue() {
          return this.items.shift();
        }

        clear() {
          this.items = [];
        } // 查看隊列中的第一個元素，但不移除


        get peek() {
          return this.items[0];
        } // 檢查隊列是否為空


        get isEmpty() {
          return this.items.length === 0;
        } // 返回隊列的大小


        get count() {
          return this.items.length;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e49cd73ae9b3bd5265d2729a2e64a16ecde69638.js.map