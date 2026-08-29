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
          const {
            randomGroupSource: source,
            totalGroups,
            groupSize: k
          } = value;
          const n = source.length; // --- 基本檢查 ---

          if (totalGroups <= 0) return [];
          if (k <= 0) throw new Error(`groupSize(${k}) 必須 > 0`);
          if (k > n) throw new Error(`groupSize(${k}) 不能大於來源長度(${n})`);

          if (k === n && totalGroups > 1) {
            // 只有一種可能的集合，第二組起一定與上一組相同（就算順序不同，內容依然相同）
            throw new Error(`當 groupSize === source.length 時，只能產生 1 組與上一組內容不同的結果。`);
          }

          const result = [];

          for (let i = 0; i < totalGroups; i++) {
            // 先複製並打散來源
            const bag = this.shuffleArray(source);

            if (i === 0) {
              // 第一組無限制
              result.push(bag.slice(0, k));
              continue;
            } // 之後每一組：先排除上一組，再補到足數


            const prev = result[i - 1];
            const prevSet = new Set(prev); // 1) 先從「不在上一組」的池子拿

            const poolNotPrev = [];
            const poolPrev = [];

            for (const x of bag) {
              (prevSet.has(x) ? poolPrev : poolNotPrev).push(x);
            }

            const group = []; // 先拿盡量多的「非上一組元素」

            const takeFromNotPrev = Math.min(k, poolNotPrev.length);
            group.push(...poolNotPrev.slice(0, takeFromNotPrev)); // 2) 若不夠，再從「上一組」補到足數（因為 group 已含至少 1 個不同元素 → 內容必定不同）

            if (group.length < k) {
              // 為了更隨機，對上一組也打散後補
              const prevShuffled = this.shuffleArray(prev);
              group.push(...prevShuffled.slice(0, k - group.length));
            }

            result.push(group);
          }

          return result;
        }

        removeMatchingElements(arr, toRemove) {
          const setA = new Set(arr);
          return toRemove.filter(element => !setA.has(element));
        } // 隨機取 k 個（不重複）


        sampleK(arr, k) {
          //return this.shuffleArray(arr).slice(0, k);
          return arr.slice(0, k);
        }

        shuffleArray(arr) {
          const a = [...arr];

          for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
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
//# sourceMappingURL=e860429d9003f11a6622676e1844e1604c370af5.js.map