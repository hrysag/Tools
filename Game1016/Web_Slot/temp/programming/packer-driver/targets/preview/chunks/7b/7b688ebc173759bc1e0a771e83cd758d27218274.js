System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, randomRangeInt, RunTimeData, FakeDataExample, _dec, _class2, _crd, ccclass, property, FakeServerExample;

  function _reportPossibleCrUseOfControllerSettingData(extras) {
    _reporterNs.report("ControllerSettingData", "./DataSetting/ControllerSettingData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelSettingData(extras) {
    _reporterNs.report("ReelSettingData", "./DataSetting/ReelSettingData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRunTimeData(extras) {
    _reporterNs.report("RunTimeData", "./DataSetting/RunTimeData", _context.meta, extras);
  }

  _export("FakeDataExample", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      randomRangeInt = _cc.randomRangeInt;
    }, function (_unresolved_2) {
      RunTimeData = _unresolved_2.RunTimeData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e4651P+NK9F/rXADgG2jHW7", "FakeServerExample", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'randomRangeInt']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FakeDataExample", FakeDataExample = class FakeDataExample {
        constructor() {
          this.resultData = [];
          this.winIconPos = [];
          this.standbyIconPos = [];
          this.totalOdd = 0;
          this.symbolScores = [];
        }

      });

      _export("FakeServerExample", FakeServerExample = (_dec = ccclass('FakeServerExample'), _dec(_class2 = class FakeServerExample {
        constructor() {
          this.winSymbol = [];
          this.controllerSetting = null;
          this.reelSetting = null;
        }

        init() {
          this.controllerSetting = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
            error: Error()
          }), RunTimeData) : RunTimeData).instance.controllerData;
          this.reelSetting = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
            error: Error()
          }), RunTimeData) : RunTimeData).instance.reelData;
        }

        createFakeData(reelIDs, betValue) {
          var fakeData = new FakeDataExample();
          var inputDiskData = this.getInputDiskData();
          var diskData = [];
          var standByIconPos = [];
          var winIconPos = [];

          if (inputDiskData.length > 0) {
            diskData = inputDiskData;
            standByIconPos = this.getWinInputDiskData();
            winIconPos = this.handleWinIconPos(standByIconPos);
          } else {
            var testData = this.createTestData(reelIDs);
            diskData = this.convertTo2D(testData[0]);
            standByIconPos = testData[1];
            winIconPos = this.handleWinIconPos(standByIconPos);
          }

          var oddData = this.calculateOdd(standByIconPos);
          var totalOdd = oddData[0];
          var symbolOdds = oddData[1];
          var symbolScores = symbolOdds.map(odd => (odd * betValue).fixed());
          fakeData.resultData = diskData;
          fakeData.standbyIconPos = standByIconPos;
          fakeData.winIconPos = winIconPos;
          fakeData.totalOdd = totalOdd;
          fakeData.symbolScores = symbolScores;
          return fakeData;
        }

        getInputDiskData() {
          var inputDisk = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
            error: Error()
          }), RunTimeData) : RunTimeData).instance.controllerData.diskData;
          var diskData = [];
          var iconCount = 0;

          if (inputDisk.length > 0) {
            for (var index = 0; index < inputDisk.length; index++) {
              var data = inputDisk[index];
              data = data.replace(/\s+/g, ''); //移除所有空格，換行，tab

              var splitData = data.split(',');
              splitData = splitData.filter(data => data !== '');

              if (splitData.length > 0) {
                var intDiskData = splitData.map(data => parseInt(data));
                diskData.push(intDiskData);
                iconCount += intDiskData.length;
              }
            }

            var iconLength = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
              error: Error()
            }), RunTimeData) : RunTimeData).instance.reelData.iconAmount * (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
              error: Error()
            }), RunTimeData) : RunTimeData).instance.reelData.reelAmount;

            if (iconCount !== iconLength) {
              console.error("\u8F38\u5165\u76E4\u9762\u8207icon\u8A2D\u5B9A\u6578\u91CF\u4E0D\u7B26\uFF0C\u76EE\u524Dicon\u6578\u91CF\u70BA" + iconLength + "\uFF0C\u8F38\u5165\u6578\u91CF\u70BA" + iconCount);
              return [];
            }
          }

          return diskData;
        }

        getWinInputDiskData() {
          var inputWinLine = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
            error: Error()
          }), RunTimeData) : RunTimeData).instance.controllerData.winLineData;
          var standByIconPos = [];

          if (inputWinLine.length > 0) {
            var iconLength = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
              error: Error()
            }), RunTimeData) : RunTimeData).instance.reelData.iconAmount * (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
              error: Error()
            }), RunTimeData) : RunTimeData).instance.reelData.reelAmount;

            for (var index = 0; index < inputWinLine.length; index++) {
              var winLine = inputWinLine[index];

              if (winLine !== '') {
                winLine = winLine.replace(/\s+/g, ''); //移除所有空格，換行，tab

                var winLineData = winLine.split(',');
                winLineData = winLineData.filter(data => data !== '');
                var intWinLineData = winLineData.map(data => parseInt(data));
                intWinLineData = intWinLineData.filter(data => data < iconLength);
                var winLineData1D = intWinLineData.map((data, index) => {
                  return data + index * (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
                    error: Error()
                  }), RunTimeData) : RunTimeData).instance.reelData.iconAmount;
                });

                if (intWinLineData.length > 0) {
                  standByIconPos.push(winLineData1D);
                }
              }
            }
          }

          return standByIconPos;
        }

        createTestData(reelIDs) {
          var testData = [];
          var symbolList = Array.from({
            length: this.reelSetting.symbolDataList.length
          }, (_, index) => index);
          var winIconPos2D = Array.from({
            length: symbolList.length
          }, () => []);

          if (this.controllerSetting.forceWin || this.controllerSetting.forceBigWin) {
            var lineCount = randomRangeInt(1, this.reelSetting.iconAmount);
            this.winSymbol = this.random(symbolList, lineCount);

            for (var reelID = 0; reelID < reelIDs.length; reelID++) {
              var winPosList = this.random(Array.from({
                length: this.reelSetting.iconAmount
              }, (_, index) => index), lineCount);

              for (var index = 0; index < this.winSymbol.length; index++) {
                var winPos = winPosList[index] + reelID * this.reelSetting.iconAmount;
                var symbol = this.winSymbol[index];
                testData[winPos] = symbol;
                winIconPos2D[symbol].push(winPos);
              }
            }

            symbolList = symbolList.filter(symbol => !this.winSymbol.includes(symbol));
          }

          for (var _reelID = 0; _reelID < reelIDs.length; _reelID++) {
            for (var _index = 0; _index < this.reelSetting.iconAmount; _index++) {
              var randomIndex = randomRangeInt(0, symbolList.length);
              var pos = _index + _reelID * this.reelSetting.iconAmount;

              if (testData[pos] === undefined) {
                testData[pos] = symbolList[randomIndex];
              }
            }
          }

          winIconPos2D = winIconPos2D.filter(posList => posList.length > 0); // console.log(winIconPos2D);

          return [testData, winIconPos2D];
        }

        convertTo2D(data) {
          var resultData = [];

          for (var index = 0; index < this.reelSetting.reelAmount; index++) {
            var iconAmount = this.reelSetting.iconAmount;
            resultData[index] = data.slice(index * iconAmount, (index + 1) * iconAmount);
          }

          return resultData;
        }

        handleWinIconPos(winIconPos2D) {
          var winIconPos = Array.from({
            length: this.reelSetting.reelAmount
          }, () => []);

          for (var index = 0; index < winIconPos2D.length; index++) {
            var line = winIconPos2D[index];

            for (var i = 0; i < line.length; i++) {
              var pos = line[i];
              var reelID = Math.floor(pos / this.reelSetting.iconAmount);
              var inReelPos = Math.floor(pos % this.reelSetting.iconAmount);

              if (!winIconPos[reelID].includes(inReelPos)) {
                winIconPos[reelID].push(inReelPos);
              }
            }
          }

          winIconPos = winIconPos.filter(posList => posList.length > 0);
          winIconPos = winIconPos.map(posList => posList.sort((a, b) => a - b));
          return winIconPos;
        }

        calculateOdd(winIconPos2D) {
          var odd = 0;
          var symbolOdds = [];

          for (var index = 0; index < winIconPos2D.length; index++) {
            var symbolOdd = randomRangeInt(10, 50);
            odd += symbolOdd;
            symbolOdds.push(symbolOdd);
          }

          return [odd, symbolOdds];
        }

        random(originData, count) {
          var clone = [...originData];
          var scatterSymbols = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
            error: Error()
          }), RunTimeData) : RunTimeData).instance.reelData.symbolDataList.map((data, index) => {
            if (data.isScatter) {
              return index;
            } else {
              return -1;
            }
          });
          scatterSymbols = scatterSymbols.filter(symbol => symbol !== -1);
          clone = clone.filter(symbol => !scatterSymbols.includes(symbol));
          var result = [];

          for (var index = 0; index < count; index++) {
            var randomIndex = randomRangeInt(0, clone.length);
            var data = originData[clone[randomIndex]];
            clone.splice(randomIndex, 1);
            result.push(data);
          }

          return result;
        }

      }) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7b688ebc173759bc1e0a771e83cd758d27218274.js.map