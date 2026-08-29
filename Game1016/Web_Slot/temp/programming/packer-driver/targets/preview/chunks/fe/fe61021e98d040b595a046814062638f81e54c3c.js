System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BinaryBuffer, Utility, IntArray, CalculatePayTable016, Direction, BasicProcessSlotData, DefinitionGameConfigData, ProcessSlotDataCore, _crd, REEL_AMOUNT, REEL_SYMBOL_AMOUNT, WILD_LIST, FORECAST_CONDITION_REEL, FORECAST_REEL, SCATTER_LIST, FG_TIMES_FOR_SCATTER;

  function _reportPossibleCrUseOfBinaryBuffer(extras) {
    _reporterNs.report("BinaryBuffer", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIntArray(extras) {
    _reporterNs.report("IntArray", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCalculatePayTable(extras) {
    _reporterNs.report("CalculatePayTable016", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAwardData(extras) {
    _reporterNs.report("AwardData", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientData(extras) {
    _reporterNs.report("ClientData", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchInfoForRound(extras) {
    _reporterNs.report("IMatchInfoForRound", "../MyUtils/BasicProcessServerData/IProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMachPosInfo(extras) {
    _reporterNs.report("IMachPosInfo", "../MyUtils/BasicProcessServerData/IProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProcessSlotData(extras) {
    _reporterNs.report("IProcessSlotData", "../MyUtils/BasicProcessServerData/IProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMovementGridData(extras) {
    _reporterNs.report("IMovementGridData", "../MyUtils/BasicProcessServerData/IProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDirection(extras) {
    _reporterNs.report("Direction", "../MyUtils/BasicProcessServerData/IProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchWildGroupResult(extras) {
    _reporterNs.report("IMatchWildGroupResult", "../MyUtils/BasicProcessServerData/IProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRoundDataReelInfo(extras) {
    _reporterNs.report("IRoundDataReelInfo", "../MyUtils/BasicProcessServerData/IProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicProcessSlotData(extras) {
    _reporterNs.report("BasicProcessSlotData", "../MyUtils/BasicProcessServerData/IProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDefinitionGameConfigData(extras) {
    _reporterNs.report("DefinitionGameConfigData", "../DefinitionGameData1016/GameConfigInstance", _context.meta, extras);
  }

  _export("ProcessSlotDataCore", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BinaryBuffer = _unresolved_2.BinaryBuffer;
      Utility = _unresolved_2.Utility;
      IntArray = _unresolved_2.IntArray;
      CalculatePayTable016 = _unresolved_2.CalculatePayTable016;
    }, function (_unresolved_3) {
      Direction = _unresolved_3.Direction;
      BasicProcessSlotData = _unresolved_3.BasicProcessSlotData;
    }, function (_unresolved_4) {
      DefinitionGameConfigData = _unresolved_4.DefinitionGameConfigData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5a13fdG9nFGnIIChaDtXi5T", "ProcessSlotData", undefined); //--這個比較特殊一點要解構的方式抽出config裡面的變數就要單獨出來免得造成循環引用


      ({
        REEL_AMOUNT,
        REEL_SYMBOL_AMOUNT,
        WILD_LIST,
        FORECAST_CONDITION_REEL,
        FORECAST_REEL,
        SCATTER_LIST
      } = _crd && DefinitionGameConfigData === void 0 ? (_reportPossibleCrUseOfDefinitionGameConfigData({
        error: Error()
      }), DefinitionGameConfigData) : DefinitionGameConfigData); //--scatter換算FG的次數

      FG_TIMES_FOR_SCATTER = {
        3: 7,
        4: 9,
        5: 11
      };
      /*
      export class BasicProcessSlotData {
          public reSpinReelInfo: IProcessSlotData[] = [];//--reSpine 這邊有多少就塞多少IProcessSlotData進去
          public freeGameReelInfo: IProcessSlotData[] = []; //--freeGame 這邊有多少就塞多少IProcessFGData
          public ngReelInfo: IProcessSlotData;//--NG只會有一個IProcessSlotData
          public allRoundOdds: number = 0;//----這個是目前這個資料的總賠率(NG+FG+reSpine)
          public totalOddsForReSpin: number = 0;//--reSpin的總賠率
          public totalOddsForFG: number = 0;//--fg的總賠率
          public betValue: number = 0;//--default=0
      }*/

      _export("ProcessSlotDataCore", ProcessSlotDataCore = class ProcessSlotDataCore extends (_crd && BasicProcessSlotData === void 0 ? (_reportPossibleCrUseOfBasicProcessSlotData({
        error: Error()
      }), BasicProcessSlotData) : BasicProcessSlotData) {
        //--鎖定wild的軸不在列入fg獲取的累進中
        constructor() {
          super();
          this._currentBonusCount = 0;
          //--bonus目前的數量
          this._currentScatterCount = 0;
          //--scatter目前的數量
          this._currentNGCardsInfo = void 0;
          //--ng的盤面資料(parse後拆完盤面資料2ds)
          this._currentReSpinCardsInfo = void 0;
          //--reSpin的盤面資料(parse後拆完盤面資料2ds)
          this._currentFGCardsInfo = void 0;
          //--FG的盤面資料(parse後拆完盤面資料2ds)
          this._currentBase64Data = '';
          //--for test check
          this._cloneOgDataIntAry = void 0;
          this._calculatePayTable016 = void 0;
          this._lockedWildReelSet = new Set();
          this._calculatePayTable016 = new (_crd && CalculatePayTable016 === void 0 ? (_reportPossibleCrUseOfCalculatePayTable({
            error: Error()
          }), CalculatePayTable016) : CalculatePayTable016)();
        } //--外部拿資料透過這裡


        getCloneData() {
          var cloneData = new (_crd && BasicProcessSlotData === void 0 ? (_reportPossibleCrUseOfBasicProcessSlotData({
            error: Error()
          }), BasicProcessSlotData) : BasicProcessSlotData)();
          cloneData.betValue = this.betValue; //--test ngData--

          var ngData = this.getGameRoundData(this._currentNGCardsInfo, false);
          var reSpineData = this.getGameRoundData(this._currentReSpinCardsInfo, false);
          var fgData = this.getGameRoundData(this._currentFGCardsInfo, true); //--calculate total odds

          var totalOddsForNG = this.getTotalOddsForRound(ngData);
          var totalOddsForReSpin = this.getTotalOddsForRound(reSpineData);
          var totalOddsForFG = this.getTotalOddsForRound(fgData);
          var totalOdds = (totalOddsForNG + totalOddsForReSpin + totalOddsForFG).fixed();
          cloneData.allRoundOdds = totalOdds;
          cloneData.totalOddsForReSpin = totalOddsForReSpin;
          cloneData.totalOddsForFG = totalOddsForFG;
          cloneData.ngReelInfo = ngData[0];
          cloneData.reSpinReelInfo = reSpineData;
          cloneData.freeGameReelInfo = fgData;
          console.log('checkCloneData:', cloneData, this._currentBase64Data);
          return cloneData;
        }

        getGameRoundData(target, isFreeGame) {
          var gameRoundData = []; //let accumulatedScore = 0;//--累積的分數

          var scatterCount = 0; //----scatter的數量(總數量)

          var fgCount = 0; //--freeGame的次數(總數量)

          for (var i = 0; i < target.length; i++) {
            var targetRoundCardsInfo = target[i];
            var checkTarget1ds = targetRoundCardsInfo.symbolData1ds;
            var checkTarget2ds = targetRoundCardsInfo.symbolData2ds;

            if (targetRoundCardsInfo.wildCount > 0) {
              checkTarget1ds = targetRoundCardsInfo.afterMovedSymbolData1ds;
              checkTarget2ds = targetRoundCardsInfo.afterMovedSymbolData2ds;
            }

            var awardData = this._calculatePayTable016.getWindData(checkTarget1ds); //console.log('Game Round Award Data:', awardData);


            var matchInfo = []; //--都要拿移動後的盤面做算分

            if (awardData.totalOdd > 0 && awardData.dataList.length > 0) {
              var target1ds = targetRoundCardsInfo.wildCount > 0 ? targetRoundCardsInfo.afterMovedSymbolData1ds : targetRoundCardsInfo.symbolData1ds;
              matchInfo = this.getWinLineData(awardData, target1ds);
            } //accumulatedScore += (awardData.totalOdd).fixed();


            var gameRoundReelInfo = this.createNewEmptyProcessSlotData();
            var haveForecast = !isFreeGame ? this.checkHaveForecast(targetRoundCardsInfo.symbolData2ds) : false;

            this._lockedWildReelSet.clear(); //--清除鎖定wild的軸集合(每次都要清除)
            //--注單要用的


            var beginningWholeWildCount = this.getWholeConsecutiveWildCount(targetRoundCardsInfo.symbolData2ds); //--這個是確實新增的數量

            var afterMovedWholeWildCount = targetRoundCardsInfo.wildCount > 0 ? this.getWholeConsecutiveWildCount(targetRoundCardsInfo.afterMovedSymbolData2ds) : 0; //const afterMovedReSpinCount = (afterMovedWholeWildCount >= 2) ? afterMovedWholeWildCount : 0;

            var beginningReSpinCount = 0; //--fg當中就不是用reSpin(fg當中使用fgCount)

            var afterMovedReSpinCount = 0; //--fg當中就不是用reSpin(fg當中使用fgCount)

            var scatterCountTotal = 0; //--每一輪的scatter數量(這是整個盤面的總量(該局))

            var currentScatterCount = 0; //--當前輪的scatter數量(用來計算新增的scatter數量)

            var fgCountTotal = 0; //---fg的總數量(這是整個盤面的總量(該局))

            var currentFgCount = 0; //--當前輪的fg數量(用來計算新增的fg數量)

            if (!isFreeGame) {
              //--摘取reSpin和FG的次數
              //--要兩個整輪的wild才算啟動reSpin(NG當中是這樣,只有在reSpin(中整輪才會算reSpin+1)/FG(當中整輪會算fg+1))
              beginningReSpinCount = beginningWholeWildCount >= 2 ? beginningWholeWildCount : 0;
              afterMovedReSpinCount = afterMovedWholeWildCount >= 2 ? afterMovedWholeWildCount : 0; //--摘取FG的資料
              //-1.確認是否有連續3軸相連的scatter

              var checkScatterCondition = this.checkScatterCondition(checkTarget2ds, SCATTER_LIST[0]); //-2.確認是否有連續3軸相連的wild+scatter(混合型)

              var checkMixedCondition = this.checkMixedScatterOrWild(checkTarget2ds, SCATTER_LIST[0], WILD_LIST[0]); //-上述條件滿足一個即可開啟FG(這是整個盤面的總數量),

              fgCountTotal = checkScatterCondition || checkMixedCondition ? this.getFgTimesWithScatterAndWild(checkTarget2ds) : 0; //-與前一次相減取得當前總數

              currentFgCount = fgCount > 0 ? fgCountTotal - fgCount : fgCountTotal; //-如果有FG的話就要計算scatter的次數(這是總數量)

              scatterCountTotal = fgCountTotal > 0 ? this.getScatterCountWithScatterAndWild(checkTarget2ds) : 0; //-與前一次總數量相減取得當前新增數量

              currentScatterCount = scatterCount > 0 ? scatterCountTotal - scatterCount : scatterCountTotal;
            } else {
              //--整輪wild的數量=增加幾局FG
              fgCountTotal = beginningWholeWildCount + afterMovedWholeWildCount; //--總wild數量(當前這局)

              currentFgCount = fgCount > 0 ? fgCountTotal - fgCount : fgCountTotal; //---當前新增的wild數量(這一輪)
            }

            targetRoundCardsInfo.haveForecast = haveForecast;
            gameRoundReelInfo.betValue = this.betValue; //gameRoundReelInfo.accumulatedScore = accumulatedScore;

            gameRoundReelInfo.totalOdd = awardData.totalOdd;
            gameRoundReelInfo.winLine = matchInfo;
            gameRoundReelInfo.reelInfo = targetRoundCardsInfo; //--這邊是盤面資料

            gameRoundReelInfo.beginningWholeWildCount = beginningWholeWildCount;
            gameRoundReelInfo.beginningReSpinCount = beginningReSpinCount;
            gameRoundReelInfo.afterMovedWholeWildCount = afterMovedWholeWildCount;
            gameRoundReelInfo.afterMovedReSpinCount = afterMovedReSpinCount;
            gameRoundReelInfo.scatterCount = scatterCount; //--結至前一輪的總數量

            gameRoundReelInfo.scatterCountForNew = currentScatterCount; //-該輪當前獲得的scatter數量

            gameRoundReelInfo.freeGameCount = fgCount; //--結至前一輪的總次數

            gameRoundReelInfo.freeGameCountForNew = currentFgCount; //-該輪當前獲得的fg次數

            gameRoundData.push(gameRoundReelInfo); //countWholeWild += afterMovedWholeWildCount; //--累加整輪wild的數量

            scatterCount = scatterCountTotal; //--累加scatter的數量(總數量)

            fgCount = fgCountTotal; //--累加fg的數量(總數量)
          }

          return gameRoundData;
        }

        getTotalOddsForRound(targetRounds) {
          var totalOdds = 0;

          for (var item of targetRounds) {
            totalOdds = (totalOdds + item.totalOdd).fixed(); //--累加每一局的賠率
          }

          return totalOdds;
        }

        getScatterCountForSingleRound() {
          return 0;
        }

        createNewEmptyProcessSlotData() {
          return {
            betValue: 0,
            totalOdd: 0,
            //accumulatedScore: 0,
            winLine: [],
            scatterCount: 0,
            scatterCountForNew: 0,
            beginningWholeWildCount: 0,
            beginningReSpinCount: 0,
            afterMovedWholeWildCount: 0,
            afterMovedReSpinCount: 0,
            freeGameCount: 0,
            freeGameCountForNew: 0,
            reelInfo: null
          };
        }

        getWinLineData(aw, card1ds) {
          var returnAry = [];
          var aryTargetData = aw.dataList;

          for (var clientData of aryTargetData) {
            var matchInfo = {
              winLineID: clientData.WinLineID,
              odd: clientData.WinOdds,
              matchPos: this.getMachPosInfo(clientData, card1ds),
              winSymbolID: clientData.WinSymbolID,
              isWild: this.checkIsWildExist(card1ds, clientData.WinPos)
            };
            returnAry.push(matchInfo);
          }

          return returnAry;
        }

        getMachPosInfo(iconData, card1ds) {
          var machPosInfoList = [];
          var targetWinPos = iconData.WinPos;

          for (var i = 0; i < targetWinPos.length; i++) {
            //const item = iconData[i];
            var pos = targetWinPos[i]; //--一維陣列的位置

            var reelIndex2ds = Math.floor(pos / REEL_SYMBOL_AMOUNT); //--reel的indexREEL_AMOUNT

            var symbolIndex = pos % REEL_SYMBOL_AMOUNT; //--圖示在reel上的位置REEL_SYMBOL_AMOUNT

            var machPosInfo = {
              realSymbolID: card1ds[pos],
              //--圖示id(真實的盤面圖片)
              reelIndex: reelIndex2ds,
              iconIndex: symbolIndex
            };
            machPosInfoList.push(machPosInfo);
          }

          return machPosInfoList;
        } //--檢查連線的牌組當中是否有wild去取代的(表演需要使用)


        checkIsWildExist(card1ds, winLine) {
          for (var item of winLine) {
            if (WILD_LIST.includes(card1ds[item])) {
              return true;
            }
          }

          return false;
        }

        checkHaveForecast(cards) {
          return cards[FORECAST_CONDITION_REEL].some(item => WILD_LIST.includes(item));
        }

        getWildInReel(reel, compareTarget) {
          var hasWild = [];

          for (var i = 0; i < reel.length; i++) {
            if (reel[i] === compareTarget) {
              hasWild.push(i);
            }
          }

          return hasWild;
        } //--檢查wild相連的方向性(注單和gameClient要用到)

        /**
         * 檢查wild相連的索引與相連起始的方向性(注單和gameClient要用到)
         * 取得顯示wild的起始方向(腳開始/頭開始)
         * @param cards 盤面資料
         * @param compareTarget 比較目標
         * @returns 
         */


        getSlotReelDirectionWithWild(cards, compareTarget) {
          var result = [];

          for (var reelIndex = 0; reelIndex < cards.length; reelIndex++) {
            var reel = cards[reelIndex];
            var matchedIndices = this.getWildInReel(reel, compareTarget);
            if (matchedIndices.length === 0) continue; //--整軸就不在處理

            if (matchedIndices.length === reel.length) {
              result.push({
                reelIndex,
                groupIndex: 0,
                matchIndices: matchedIndices,
                direction: (_crd && Direction === void 0 ? (_reportPossibleCrUseOfDirection({
                  error: Error()
                }), Direction) : Direction).UPWARD,
                startIndex: 0
              });
              continue; // 不再進行後續分組
            }

            var continuousGroups = [];
            var currentGroup = [];

            for (var i = 0; i < matchedIndices.length; i++) {
              var current = matchedIndices[i];
              var previous = matchedIndices[i - 1];
              var isFirst = i === 0;
              var isConsecutive = !isFirst && current === previous + 1;

              if (isFirst || isConsecutive) {
                currentGroup.push(current);
              } else {
                continuousGroups.push(currentGroup);
                currentGroup = [current];
              }
            }

            if (currentGroup.length > 0) {
              continuousGroups.push(currentGroup);
            }

            for (var groupIndex = 0; groupIndex < continuousGroups.length; groupIndex++) {
              var group = continuousGroups[groupIndex];
              var first = group[0];
              var last = group[group.length - 1];
              var direction = (_crd && Direction === void 0 ? (_reportPossibleCrUseOfDirection({
                error: Error()
              }), Direction) : Direction).UNKNOWN;

              if (group.length === 1) {
                if (first === 0) direction = (_crd && Direction === void 0 ? (_reportPossibleCrUseOfDirection({
                  error: Error()
                }), Direction) : Direction).UPWARD; //頂端(下往上)
                else if (first === reel.length - 1) direction = (_crd && Direction === void 0 ? (_reportPossibleCrUseOfDirection({
                  error: Error()
                }), Direction) : Direction).DOWNWARD; // 底部(上往下)
              } else {
                if (first === 0) direction = (_crd && Direction === void 0 ? (_reportPossibleCrUseOfDirection({
                  error: Error()
                }), Direction) : Direction).UPWARD; // 起始為最上(下往上)
                else if (last === reel.length - 1) direction = (_crd && Direction === void 0 ? (_reportPossibleCrUseOfDirection({
                  error: Error()
                }), Direction) : Direction).DOWNWARD; // 結尾為最下(上往下)
              }

              if (direction !== (_crd && Direction === void 0 ? (_reportPossibleCrUseOfDirection({
                error: Error()
              }), Direction) : Direction).UNKNOWN) {
                var startIndex = direction === (_crd && Direction === void 0 ? (_reportPossibleCrUseOfDirection({
                  error: Error()
                }), Direction) : Direction).UPWARD ? last : first;
                result.push({
                  reelIndex,
                  groupIndex,
                  matchIndices: group,
                  direction,
                  startIndex
                });
              }
            }
          }

          return result;
        }
        /**
         * 這是開啟進入FG的條件(1.從左算起,連續3軸獲得scatter)
         * wild只會在123軸出現
         * PS-先檢查是否連續三軸開出scatter
         * @param cards 盤面資料
         * @param conditionTarget 目標條件(可能是wild或scatter)
         * @returns 
         */


        checkScatterCondition(cards, conditionTarget) {
          var count = 0;
          var flag = false; //const compareTarget = SCATTER_LIST[0];

          var compareTarget = conditionTarget;

          for (var i = 0; i <= cards.length - 3; i++) {
            var hasTargetInRow1 = cards[i].some(val => val === compareTarget);
            var hasTargetInRow2 = cards[i + 1].some(val => val === compareTarget);
            var hasTargetInRow3 = cards[i + 2].some(val => val === compareTarget);

            if (hasTargetInRow1 && hasTargetInRow2 && hasTargetInRow3) {
              count++; //但目前允許重疊，例如 i=0,1,2 和 i=1,2,3
            }
          }

          if (count > 0) {
            flag = true;
          }

          return flag;
        } //--混和型

        /**
         * PS:wild只會在123軸出現
         * 所以要計算第0軸是否為scatter否則連續3個scatter不成立
         * @param cards 
         * @param scatter 
         * @param wild 
         * @returns 
         */


        checkMixedScatterOrWild(cards, scatter, wild) {
          for (var i = 0; i <= cards.length - 3; i++) {
            var row0 = cards[i];
            var row1 = cards[i + 1];
            var row2 = cards[i + 2];

            var hasScatter = row => row.includes(scatter);

            var hasScatterOrWild = row => row.includes(scatter) || row.includes(wild);

            if (hasScatter(row0) && hasScatterOrWild(row1) && hasScatterOrWild(row2)) {
              return true; //--有連續3軸滿足條件
            }
          }

          return false;
        }
        /**
         * 檢查盤面的scatter數量(scatter僅會出現在一般遊戲當中)
         * @param cards 盤面資料
         * @returns 
         */


        checkScatterCount(cards) {
          var count = 0;

          for (var i = 0; i < cards.length; i++) {
            for (var j = 0; j < cards[i].length; j++) {
              if (SCATTER_LIST.includes(cards[i][j])) {
                count++;
              }
            }
          }

          return count;
        } //---抽出wild的數量(這是零散的)


        checkWildCount(cards) {
          var count = 0;

          for (var i = 0; i < cards.length; i++) {
            for (var j = 0; j < cards[i].length; j++) {
              if (WILD_LIST.includes(cards[i][j])) {
                count++;
              }
            }
          }

          return count;
        }
        /**
         * 獲取整輪wild的數量(只有整輪滿足才會併入計算)
         * 一但這一個盤面有整輪的wild就會鎖定這一軸,避免重複計算
         * 直到下一個盤面進來後清掉鎖定資料
         * @param cards 
         * @returns 
         */


        getWholeConsecutiveWildCount(cards) {
          var count = 0;
          var targetWild = WILD_LIST[0];

          for (var i = 0; i < cards.length; i++) {
            if (this._lockedWildReelSet.has(i)) continue;
            var row = cards[i]; //--檢查整輪是否都是wild

            if (row[0] === targetWild && row[1] === targetWild && row[2] === targetWild && row[3] === targetWild) {
              count++;

              this._lockedWildReelSet.add(i); //--將這個軸加入鎖定wild的軸集合中

            }
          }

          return count;
        }
        /**
         * 抽出相連的wild數量(這是計算單軸相連的數量)
         * @param row 目標軸
         * @param target 指定檢查相連的值
         * @returns 
         */


        getAllConsecutiveCounts(row, target) {
          var result = [];
          var count = 0;

          for (var i = 0; i < row.length; i++) {
            if (row[i] === target) {
              count++;
            } else {
              if (count > 0) {
                result.push(count);
                count = 0;
              }
            }
          } // 處理結尾是連續值的情況(ex:[9,1,9,9],result=[1,2])


          if (count > 0) {
            result.push(count);
          }

          return result;
        } //--直接整個盤面去檢查相連的wild數量


        getConsecutiveCountsForGrid(cards, target) {
          return cards.map(row => this.getAllConsecutiveCounts(row, target));
        }
        /**
         * 這是取得Scatter的數量
         * 規則:(這是NG和reSpin的規則--在FG當中獲得freeSpin的次數累加是要整條的wild(不需要scatter))
         * 1. 連續三輪出現(左->右) scatter(scatter圖示)--只在NG/reSpin當中會有scatter
         * 2. 一個wild(不用全軸(整輪和非整輪都算))=1 scatter 
         * 3. 要檢查wild是否相連的狀態..ex:整輪wild他有4個相同的symbol 但這個只會算成1個
         * 
         */


        getScatterCountWithScatterAndWild(cards) {
          //--拿scatter數量
          var scatterCount = this.checkScatterCount(cards); //--拿相連的wild數量

          var wildCount = this.getConsecutiveCountsForGrid(cards, WILD_LIST[0]);
          var totalWildToScatterForConsecutive = 0;

          for (var i = 0; i < wildCount.length; i++) {
            totalWildToScatterForConsecutive += wildCount[i].length;
          }

          var finalScatterCount = scatterCount + totalWildToScatterForConsecutive; //const finalFgCount = this.getFinalFGTimes(finalScatterCount);
          //return finalFgCount;

          return finalScatterCount;
        }

        getFgTimesWithScatterAndWild(cards) {
          var scatterCount = this.getScatterCountWithScatterAndWild(cards);
          var finalFgCount = this.getFinalFGTimes(scatterCount);
          return finalFgCount;
        }

        getFinalFGTimes(value) {
          var finalFgCount = undefined;
          var maxKey = -1; // 找到小於等於 targetCount 的最大鍵

          for (var _key in FG_TIMES_FOR_SCATTER) {
            var numKey = parseInt(_key);

            if (numKey <= value && numKey > maxKey) {
              maxKey = numKey;
              finalFgCount = FG_TIMES_FOR_SCATTER[numKey];
            }
          }

          if (finalFgCount == undefined) {
            finalFgCount = 0;
          }

          return finalFgCount;
        }

        resetRoundData() {
          //--father class by BasicProcessSlotData--//
          this.betValue = 0;
          this.allRoundOdds = 0;
          this.totalOddsForReSpin = 0;
          this.totalOddsForFG = 0; //--記在FG自己的資料裡面totalOdd

          this.reSpinReelInfo = []; //--reSpine 這邊有多少就塞多少IProcessSlotData進去

          this.freeGameReelInfo = []; //--freeGame 這邊有多少就塞多少IProcessSlot

          this.ngReelInfo = null; //--father class by BasicProcessSlotData--//

          this._currentNGCardsInfo = [];
          this._currentReSpinCardsInfo = [];
          this._currentFGCardsInfo = [];
          this._currentBonusCount = 0;
          this._currentBase64Data = ''; //--for test check

          this._cloneOgDataIntAry = null; //--for test check

          this._lockedWildReelSet.clear(); //--清除鎖定wild的軸(fg使用的累計計算)

        }
        /**
         * symbolId=>0~10
         * 9=wild,10=scatter
         */


        setNewRoundData(buffer, betValue) {
          //console.log('raw', buffer);
          this.resetRoundData();
          this.betValue = betValue;
          this._currentBase64Data = this.getBase64Data(buffer);
          var cloneBuffer = this.cloneBinaryBuffer(buffer);
          var totalLength = cloneBuffer.getCount();
          this._cloneOgDataIntAry = new (_crd && IntArray === void 0 ? (_reportPossibleCrUseOfIntArray({
            error: Error()
          }), IntArray) : IntArray)();

          this._cloneOgDataIntAry.Parse(cloneBuffer, totalLength); //===========parse data============//


          var ngCardInfo = [];
          var reSpinCardInfo = [];
          var fgCardInfo = []; //--大於1就是包含了NG+reSpin

          var totalRoundForNGAndReSpin = buffer.getUint8()[1]; //--ng+reSpin

          for (var i = 0; i < totalRoundForNGAndReSpin; i++) {
            if (i == 0) {
              ngCardInfo.push(this.parseSingleRoundData(buffer));
            } else {
              reSpinCardInfo.push(this.parseSingleRoundData(buffer));
            }
          } //--fg


          var [okFgCount, fgRoundCount] = buffer.getUint8(); //-FG回合數

          if (!okFgCount) throw new Error("無法讀取 FG 回合數");

          for (var _i = 0; _i < fgRoundCount; _i++) {
            var fgRound = this.parseSingleRoundData(buffer);
            fgCardInfo.push(fgRound);
          } //===========parse data============//
          //========process data(展開位移遞補)============//
          //--吻合位移條件的狀態下moved2dsCards,flatMovedCards都會有資料,否則就是空陣列


          this._currentNGCardsInfo = this.processBasicCardData(ngCardInfo);
          this._currentReSpinCardsInfo = reSpinCardInfo.length == 0 ? [] : this.processBasicCardData(reSpinCardInfo);
          this._currentFGCardsInfo = fgCardInfo.length == 0 ? [] : this.processBasicCardData(fgCardInfo); //console.log('afterParse:', ngCardInfo, reSpinCardInfo, fgCardInfo);
          //console.log('currentBase64Data:', this._currentBase64Data);
          //this.testCheckScore();
          //--for test check(實際要拿到外部去呼叫)---
          //this.getCloneData();
        }

        testCheckScore() {
          //----test check---
          //--test cards--
          //const testCards = [6, 6, 8, 8, 9, 9, 9, 9, 0, 4, 2, 6, 9, 9, 9, 9, 8, 8, 5, 5];
          var testCards = [6, 6, 8, 8, 9, 9, 9, 9, 0, 4, 2, 6, 9, 9, 9, 9, 8, 8, 5, 5];

          var awardData = this._calculatePayTable016.getWindData(testCards); //const matchInfo = this.getWinLineData(awardData, testCards);
          //console.log('testMachInfo:', matchInfo);


          var targetWinPos = [0, 4, 8, 12, 16];

          for (var i = 0; i < targetWinPos.length; i++) {
            //const item = iconData[i];
            var pos = targetWinPos[i]; //--一維陣列的位置

            var reelIndex2ds = Math.floor(pos / REEL_AMOUNT); //--reel的indexREEL_AMOUNT

            var symbolIndex = pos % REEL_SYMBOL_AMOUNT; //--圖示在reel上的位置REEL_SYMBOL_AMOUNT
          }
          /*
          this._calculatePayTable016.getWindData(this._currentNGCardsInfo[0].flatMovedCards);
          if (this._currentReSpinCardsInfo.length > 0) {
              for (let i: number = 0; i < this._currentReSpinCardsInfo.length; i++) {
                  const target: IMovementGridData = this._currentReSpinCardsInfo[i];
                  const targetCards = (target.flatMovedCards.length == 0) ? target.cards : target.flatMovedCards;
                  this._calculatePayTable016.getWindData(targetCards);
              }
           }*/

        }
        /**
         * export interface IRoundDataReelInfo {
            symbolData1ds: number[];//--盤面資料(原始的一維陣列)
            wildCount: number;//--wild的數量
            wildIndex: number[];//--wild的index
            haveForecast: boolean;//--是否有預測
            }
             //--放變形前後的資料(算分前準備..算分要拿位移後的資料)
            export interface IMovementGridData extends IRoundDataReelInfo {
                symbolData2ds: number[][];//--原始盤面資料(2D陣列)
                afterMovedSymbolData2ds: number[][];//--移動後的盤面資料(2D陣列)
                afterMovedSymbolData1ds: number[];//--攤平後的盤面資料(1D陣列)
            }
         */


        processBasicCardData(raw) {
          var len = raw.length;
          var result = [];

          for (var i = 0; i < len; i++) {
            var item = raw[i];
            var og2dsCards = this.get2DArray(item.symbolData1ds); //--原始盤面資料(2D陣列)

            var moved2dsCards = item.wildCount == 0 ? [] : this.getAfterMove2DsData(og2dsCards, item.wildCount, item.wildIndex);
            var flatMovedCards = item.wildCount == 0 ? [] : this.getFlatArrayFrom2Ds(moved2dsCards); //--攤平後的盤面資料(1D陣列)

            var gridData = {
              symbolData1ds: item.symbolData1ds,
              //--盤面資料(原始的一維陣列)
              wildCount: item.wildCount,
              //--wild的數量
              wildIndex: item.wildIndex,
              //--wild的index
              haveForecast: false,
              //--是否有預測
              symbolData2ds: og2dsCards,
              //--原始盤面資料(2D陣列)
              wildGroup: this.getSlotReelDirectionWithWild(og2dsCards, WILD_LIST[0]),
              //--wild的group(這個是用來計算FG的累進賠率)
              //--以下兩筆資料在沒有位移的狀態下是空陣列
              afterMovedSymbolData2ds: moved2dsCards,
              //--移動後的盤面資料(2D陣列)
              afterMovedSymbolData1ds: flatMovedCards //--攤平後的盤面資料(1D陣列)        

            };
            result.push(gridData);
          }

          return result;
        } //--移動後的盤面資料


        getAfterMove2DsData(card2ds, wildCount, wildIndex) {
          var clone2ds = this.getClone2DArray(card2ds);

          if (wildCount > 0) {
            for (var i = 0; i < wildCount; i++) {
              var index = wildIndex[i];

              if (index >= 0 && index < REEL_AMOUNT) {
                clone2ds[index] = this.replaceValueToAllReel(WILD_LIST[0], clone2ds[index]); //--wild
              } else {
                console.error('Wild index out of bounds:', index);
              }
            }
          }

          return clone2ds; //return null;
        }
        /**
         * 
         export interface IRoundDataReelInfo {
            symbolData1ds: number[];//--盤面資料(原始的一維陣列)
            wildCount: number;//--wild的數量
            wildIndex: number[];//--wild的index
            haveForecast: boolean;//--是否有預測
        }
        //--放變形前後的資料(算分前準備..算分要拿位移後的資料)
        export interface IMovementGridData extends IRoundDataReelInfo {
            symbolData2ds: number[][];//--原始盤面資料(2D陣列)
            afterMovedSymbolData2ds: number[][];//--移動後的盤面資料(2D陣列)
            afterMovedSymbolData1ds: number[];//--攤平後的盤面資料(1D陣列)
        }
         */


        parseSingleRoundData(buffer) {
          var round = {
            symbolData1ds: [],
            wildCount: 0,
            //--wild的數量
            wildIndex: [],
            haveForecast: false,
            //--是否有預測
            wildGroup: [] //--wild的group(這個是用來計算FG的累進賠率)

          };
          var panelParser = new (_crd && IntArray === void 0 ? (_reportPossibleCrUseOfIntArray({
            error: Error()
          }), IntArray) : IntArray)();
          panelParser.Parse(buffer, 20); //--盤面總數4*5

          round.symbolData1ds = panelParser.value;
          var [success, wildCount] = buffer.getUint8();
          round.wildCount = wildCount;

          if (success && wildCount > 0) {
            for (var i = 0; i < wildCount; i++) {
              var [ok, wildIndex] = buffer.getUint8();

              if (ok) {
                round.wildIndex.push(wildIndex);
              } else {
                console.error('Failed to read wild index at index:', i);
              }
            }
          }

          return round;
        }
        /**
        * 這個是用來把所有的值都換成一樣的值
        *例如: 盤面資料全部換成wild/scatter/bonus
        * @param replace 要換成的值
         */


        replaceValueToAllReel(replace, targetReel) {
          return targetReel.map(() => replace);
        } //--攤平


        getFlatArrayFrom2Ds(original) {
          return original.reduce((acc, row) => acc.concat(row), []);
        } //--拷貝


        getClone2DArray(original) {
          return original.map(row => row.slice());
        } //--展開


        get2DArray(card) {
          var ary2d = [];

          for (var i = 0; i < REEL_AMOUNT; i++) {
            var row = [];

            for (var j = 0; j < REEL_SYMBOL_AMOUNT; j++) {
              row.push(card[i * REEL_SYMBOL_AMOUNT + j]);
            }

            ary2d.push(row);
          }

          return ary2d;
        }

        getBase64Data(buffer) {
          var arrayBuffer = buffer.getArrayBuffer();
          var uint8Array = new Uint8Array(arrayBuffer);
          return (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).uint8ArrayToBase64(uint8Array);
        }

        cloneBinaryBuffer(original) {
          var bufferCopy = original.getArrayBuffer().slice(0); // clone the buffer

          var clone = new (_crd && BinaryBuffer === void 0 ? (_reportPossibleCrUseOfBinaryBuffer({
            error: Error()
          }), BinaryBuffer) : BinaryBuffer)(bufferCopy);
          clone.setReadPosition(original.getReadIndex());
          clone.USE_LITTLE_ENDIAN = original.USE_LITTLE_ENDIAN;
          return clone;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fe61021e98d040b595a046814062638f81e54c3c.js.map