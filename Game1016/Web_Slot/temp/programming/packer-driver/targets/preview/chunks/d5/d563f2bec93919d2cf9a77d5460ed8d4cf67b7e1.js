System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, IdiotInitRandomGenerator, _crd;

  function _reportPossibleCrUseOfIStrategyRandomGenerator(extras) {
    _reporterNs.report("IStrategyRandomGenerator", "./IStrategyRandomGenerator", _context.meta, extras);
  }

  _export("IdiotInitRandomGenerator", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "80485/Ob7JImJbYI4bD/ncU", "IdiotInitRandomGenerator", undefined);

      _export("IdiotInitRandomGenerator", IdiotInitRandomGenerator = class IdiotInitRandomGenerator {
        constructor() {
          this._randomMap = {};
          this._randomSingleList = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        }

        generate(value) {
          var _this = this;

          this._setRandomToMap();

          var result = [];
          var reelInfos = [];
          var totalReels = 5; // totalGroups = 5

          var groupSize = 6; // groupSize = 6

          for (var reelIndex = 0; reelIndex < totalReels; reelIndex++) {
            var isValid = false;
            var attempts = 0;
            var maxAttempts = 1000;

            var _loop = function _loop() {
              attempts++; // 依照機率決定 pattern 大小

              var patternSize = _this._getPatternSizeByProbability(); // 從對應的 map 中隨機取得一組 pattern


              var patterns = _this._getRandomFromMap(patternSize);

              var pattern = patterns[Math.floor(Math.random() * patterns.length)];
              var patternValue = pattern[0]; // 連續數字的值
              // 決定補牌位置 (頭或尾)

              var fillPosition = Math.random() < 0.5 ? 'head' : 'tail'; // 計算需要補多少張牌

              var singlesNeeded = 4 - patternSize; // 從 _randomSingleList 中隨機抽取不重複的值

              var availableSingles = [..._this._randomSingleList];
              var fillerValues = [];

              for (var i = 0; i < singlesNeeded; i++) {
                var singleIndex = Math.floor(Math.random() * availableSingles.length);
                fillerValues.push(availableSingles[singleIndex]);
                availableSingles.splice(singleIndex, 1);
              } // 驗證是否符合規則 (與前一軸比較)


              if (reelIndex > 0) {
                var prevInfo = reelInfos[reelIndex - 1]; // 規則1: 連續數字的值不能相同

                if (patternValue === prevInfo.patternValue) {
                  return 0; // continue
                } // 規則2: 補牌位置不能相同


                if (fillPosition === prevInfo.fillPosition) {
                  return 0; // continue
                } // 規則3: 補牌的值不能與前一軸的補牌值相同


                var hasCommonFiller = fillerValues.some(v => prevInfo.fillerValues.includes(v));

                if (hasCommonFiller) {
                  return 0; // continue
                }
              } // 組合中間部分 (index 1-4)


              var middlePart = [];

              if (fillPosition === 'head') {
                // 補牌在頭部,pattern 在尾部
                middlePart.push(...fillerValues);
                middlePart.push(...pattern);
              } else {
                // pattern 在頭部,補牌在尾部
                middlePart.push(...pattern);
                middlePart.push(...fillerValues);
              } // 組合完整的 reel (index 0 和 index 5 隨意填充)


              var reel = [_this._randomSingleList[Math.floor(Math.random() * _this._randomSingleList.length)], // index 0
              ...middlePart, _this._randomSingleList[Math.floor(Math.random() * _this._randomSingleList.length)] // index 5
              ]; // 記錄這一軸的資訊

              reelInfos.push({
                pattern: pattern,
                patternValue: patternValue,
                fillPosition: fillPosition,
                fillerValues: fillerValues
              });
              result.push(reel);
              isValid = true;
            },
                _ret;

            while (!isValid && attempts < maxAttempts) {
              _ret = _loop();
              if (_ret === 0) continue;
            } // 如果嘗試次數超過上限,強制產生一組合法資料


            if (!isValid) {
              console.warn("Reel " + reelIndex + " generation exceeded max attempts, forcing generation.");

              var forcedReel = this._forceGenerateReel(reelIndex, reelInfos);

              result.push(forcedReel.reel);
              reelInfos.push(forcedReel.info);
            }
          }

          return result;
        }
        /**
         * 依照機率取得 pattern 大小
         * 30%: size 2
         * 40%: size 3
         * 20%: size 4
         * 10%: default size 3
         */


        _getPatternSizeByProbability() {
          var rand = Math.random();

          if (rand < 0.3) {
            return 2;
          } else if (rand < 0.7) {
            return 3;
          } else if (rand < 0.9) {
            return 4;
          } else {
            return 3; // 預設為 3
          }
        }
        /**
         * 強制產生一組合法的 reel (用於超過嘗試次數時)
         */


        _forceGenerateReel(reelIndex, reelInfos) {
          var patternSize = 3;
          var patternValue = 0;
          var fillPosition = 'head';
          var fillerValues = [1];

          if (reelIndex > 0) {
            var prevInfo = reelInfos[reelIndex - 1]; // 選擇不同的 patternValue

            patternValue = (prevInfo.patternValue + 1) % this._randomSingleList.length; // 選擇不同的 fillPosition

            fillPosition = prevInfo.fillPosition === 'head' ? 'tail' : 'head'; // 選擇不同的 fillerValues

            var availableSingles = this._randomSingleList.filter(v => !prevInfo.fillerValues.includes(v));

            var singlesNeeded = 4 - patternSize;
            fillerValues = availableSingles.slice(0, singlesNeeded);
          }

          var pattern = Array(patternSize).fill(patternValue);
          var middlePart = [];

          if (fillPosition === 'head') {
            middlePart.push(...fillerValues);
            middlePart.push(...pattern);
          } else {
            middlePart.push(...pattern);
            middlePart.push(...fillerValues);
          }

          var reel = [this._randomSingleList[Math.floor(Math.random() * this._randomSingleList.length)], ...middlePart, this._randomSingleList[Math.floor(Math.random() * this._randomSingleList.length)]];
          return {
            reel: reel,
            info: {
              pattern: pattern,
              patternValue: patternValue,
              fillPosition: fillPosition,
              fillerValues: fillerValues
            }
          };
        }

        _setRandomToMap() {
          this._randomMap[2] = [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8]];
          this._randomMap[3] = [[0, 0, 0], [1, 1, 1], [2, 2, 2], [3, 3, 3], [4, 4, 4], [5, 5, 5], [6, 6, 6], [7, 7, 7], [8, 8, 8]];
          this._randomMap[4] = [[0, 0, 0, 0], [1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5], [6, 6, 6, 6], [7, 7, 7, 7], [8, 8, 8, 8]];
        }

        _getRandomFromMap(key) {
          return this._randomMap[key];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d563f2bec93919d2cf9a77d5460ed8d4cf67b7e1.js.map