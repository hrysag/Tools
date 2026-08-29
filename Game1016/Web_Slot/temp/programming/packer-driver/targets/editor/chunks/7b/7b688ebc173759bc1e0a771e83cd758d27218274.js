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
          let fakeData = new FakeDataExample();
          let inputDiskData = this.getInputDiskData();
          let diskData = [];
          let standByIconPos = [];
          let winIconPos = [];

          if (inputDiskData.length > 0) {
            diskData = inputDiskData;
            standByIconPos = this.getWinInputDiskData();
            winIconPos = this.handleWinIconPos(standByIconPos);
          } else {
            let testData = this.createTestData(reelIDs);
            diskData = this.convertTo2D(testData[0]);
            standByIconPos = testData[1];
            winIconPos = this.handleWinIconPos(standByIconPos);
          }

          let oddData = this.calculateOdd(standByIconPos);
          let totalOdd = oddData[0];
          let symbolOdds = oddData[1];
          let symbolScores = symbolOdds.map(odd => (odd * betValue).fixed());
          fakeData.resultData = diskData;
          fakeData.standbyIconPos = standByIconPos;
          fakeData.winIconPos = winIconPos;
          fakeData.totalOdd = totalOdd;
          fakeData.symbolScores = symbolScores;
          return fakeData;
        }

        getInputDiskData() {
          let inputDisk = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
            error: Error()
          }), RunTimeData) : RunTimeData).instance.controllerData.diskData;
          let diskData = [];
          let iconCount = 0;

          if (inputDisk.length > 0) {
            for (let index = 0; index < inputDisk.length; index++) {
              let data = inputDisk[index];
              data = data.replace(/\s+/g, ''); //移除所有空格，換行，tab

              let splitData = data.split(',');
              splitData = splitData.filter(data => data !== '');

              if (splitData.length > 0) {
                let intDiskData = splitData.map(data => parseInt(data));
                diskData.push(intDiskData);
                iconCount += intDiskData.length;
              }
            }

            let iconLength = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
              error: Error()
            }), RunTimeData) : RunTimeData).instance.reelData.iconAmount * (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
              error: Error()
            }), RunTimeData) : RunTimeData).instance.reelData.reelAmount;

            if (iconCount !== iconLength) {
              console.error(`輸入盤面與icon設定數量不符，目前icon數量為${iconLength}，輸入數量為${iconCount}`);
              return [];
            }
          }

          return diskData;
        }

        getWinInputDiskData() {
          let inputWinLine = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
            error: Error()
          }), RunTimeData) : RunTimeData).instance.controllerData.winLineData;
          let standByIconPos = [];

          if (inputWinLine.length > 0) {
            let iconLength = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
              error: Error()
            }), RunTimeData) : RunTimeData).instance.reelData.iconAmount * (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
              error: Error()
            }), RunTimeData) : RunTimeData).instance.reelData.reelAmount;

            for (let index = 0; index < inputWinLine.length; index++) {
              let winLine = inputWinLine[index];

              if (winLine !== '') {
                winLine = winLine.replace(/\s+/g, ''); //移除所有空格，換行，tab

                let winLineData = winLine.split(',');
                winLineData = winLineData.filter(data => data !== '');
                let intWinLineData = winLineData.map(data => parseInt(data));
                intWinLineData = intWinLineData.filter(data => data < iconLength);
                let winLineData1D = intWinLineData.map((data, index) => {
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
          let testData = [];
          let symbolList = Array.from({
            length: this.reelSetting.symbolDataList.length
          }, (_, index) => index);
          let winIconPos2D = Array.from({
            length: symbolList.length
          }, () => []);

          if (this.controllerSetting.forceWin || this.controllerSetting.forceBigWin) {
            let lineCount = randomRangeInt(1, this.reelSetting.iconAmount);
            this.winSymbol = this.random(symbolList, lineCount);

            for (let reelID = 0; reelID < reelIDs.length; reelID++) {
              let winPosList = this.random(Array.from({
                length: this.reelSetting.iconAmount
              }, (_, index) => index), lineCount);

              for (let index = 0; index < this.winSymbol.length; index++) {
                let winPos = winPosList[index] + reelID * this.reelSetting.iconAmount;
                const symbol = this.winSymbol[index];
                testData[winPos] = symbol;
                winIconPos2D[symbol].push(winPos);
              }
            }

            symbolList = symbolList.filter(symbol => !this.winSymbol.includes(symbol));
          }

          for (let reelID = 0; reelID < reelIDs.length; reelID++) {
            for (let index = 0; index < this.reelSetting.iconAmount; index++) {
              let randomIndex = randomRangeInt(0, symbolList.length);
              let pos = index + reelID * this.reelSetting.iconAmount;

              if (testData[pos] === undefined) {
                testData[pos] = symbolList[randomIndex];
              }
            }
          }

          winIconPos2D = winIconPos2D.filter(posList => posList.length > 0); // console.log(winIconPos2D);

          return [testData, winIconPos2D];
        }

        convertTo2D(data) {
          let resultData = [];

          for (let index = 0; index < this.reelSetting.reelAmount; index++) {
            let iconAmount = this.reelSetting.iconAmount;
            resultData[index] = data.slice(index * iconAmount, (index + 1) * iconAmount);
          }

          return resultData;
        }

        handleWinIconPos(winIconPos2D) {
          let winIconPos = Array.from({
            length: this.reelSetting.reelAmount
          }, () => []);

          for (let index = 0; index < winIconPos2D.length; index++) {
            const line = winIconPos2D[index];

            for (let i = 0; i < line.length; i++) {
              let pos = line[i];
              let reelID = Math.floor(pos / this.reelSetting.iconAmount);
              let inReelPos = Math.floor(pos % this.reelSetting.iconAmount);

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
          let odd = 0;
          let symbolOdds = [];

          for (let index = 0; index < winIconPos2D.length; index++) {
            let symbolOdd = randomRangeInt(10, 50);
            odd += symbolOdd;
            symbolOdds.push(symbolOdd);
          }

          return [odd, symbolOdds];
        }

        random(originData, count) {
          let clone = [...originData];
          let scatterSymbols = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
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
          let result = [];

          for (let index = 0; index < count; index++) {
            let randomIndex = randomRangeInt(0, clone.length);
            let data = originData[clone[randomIndex]];
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