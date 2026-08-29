System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, InitRandomGenerator, _crd;

  function _reportPossibleCrUseOfIStrategyRandomGenerator(extras) {
    _reporterNs.report("IStrategyRandomGenerator", "./IStrategyRandomGenerator", _context.meta, extras);
  }

  _export("InitRandomGenerator", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3f3e+gBOJBw7/MKJQ3/0pn", "InitRandomGenerator", undefined);

      _export("InitRandomGenerator", InitRandomGenerator = class InitRandomGenerator {
        generate(value) {
          var {
            randomGroupSource: source,
            totalGroups,
            groupSize: k
          } = value;
          var n = source.length; // --- 基本檢查 ---

          if (totalGroups <= 0) return [];
          if (k <= 0) throw new Error("groupSize(" + k + ") \u5FC5\u9808 > 0");
          if (k > n) throw new Error("groupSize(" + k + ") \u4E0D\u80FD\u5927\u65BC\u4F86\u6E90\u9577\u5EA6(" + n + ")");

          if (k === n && totalGroups > 1) {
            // 只有一種可能的集合，第二組起一定與上一組相同（就算順序不同，內容依然相同）
            throw new Error("\u7576 groupSize === source.length \u6642\uFF0C\u53EA\u80FD\u7522\u751F 1 \u7D44\u8207\u4E0A\u4E00\u7D44\u5167\u5BB9\u4E0D\u540C\u7684\u7D50\u679C\u3002");
          }

          var result = [];

          for (var i = 0; i < totalGroups; i++) {
            // 先複製並打散來源
            var bag = this.shuffleArray(source);

            if (i === 0) {
              // 第一組無限制
              result.push(bag.slice(0, k));
              continue;
            } // 之後每一組：先排除上一組，再補到足數


            var prev = result[i - 1];
            var prevSet = new Set(prev); // 1) 先從「不在上一組」的池子拿

            var poolNotPrev = [];
            var poolPrev = [];

            for (var x of bag) {
              (prevSet.has(x) ? poolPrev : poolNotPrev).push(x);
            }

            var group = []; // 先拿盡量多的「非上一組元素」

            var takeFromNotPrev = Math.min(k, poolNotPrev.length);
            group.push(...poolNotPrev.slice(0, takeFromNotPrev)); // 2) 若不夠，再從「上一組」補到足數（因為 group 已含至少 1 個不同元素 → 內容必定不同）

            if (group.length < k) {
              // 為了更隨機，對上一組也打散後補
              var prevShuffled = this.shuffleArray(prev);
              group.push(...prevShuffled.slice(0, k - group.length));
            }

            result.push(group);
          }

          return result;
        }

        removeMatchingElements(arr, toRemove) {
          var setA = new Set(arr);
          return toRemove.filter(element => !setA.has(element));
        } // 隨機取 k 個（不重複）


        sampleK(arr, k) {
          //return this.shuffleArray(arr).slice(0, k);
          return arr.slice(0, k);
        }

        shuffleArray(arr) {
          var a = [...arr];

          for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
          }

          return a;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4635cfa9d7f6118d195382720c75d3efd98be378.js.map