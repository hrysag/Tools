System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, DefinitionGameConfigData, AllMachPayNG018, AllMachPayFG018, MatchInfoForRound, IconData, ReelInfo, RPSGuessRoundData, BasicProcessSlotData, ProcessSlotDataCore, _crd, SPECIAL_SYMBOL_LIST, FORECAST_FOR_REEL, REEL_SYMBOL_AMOUNT, BONUS_MULTIPLIER, BONUS_MULTIPLIER_REDUCE, FORECAST_REEL, REEL_AMOUNT, WILD_LIST;

  function _reportPossibleCrUseOfDefinitionGameConfigData(extras) {
    _reporterNs.report("DefinitionGameConfigData", "../DefinitionGameData/DefinitionGameConfigData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAllMachPayNG(extras) {
    _reporterNs.report("AllMachPayNG018", "./AllMachPay018", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAllMachPayFG(extras) {
    _reporterNs.report("AllMachPayFG018", "./AllMachPay018", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAwardData(extras) {
    _reporterNs.report("AwardData", "./AllMachPay018", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientData(extras) {
    _reporterNs.report("ClientData", "./AllMachPay018", _context.meta, extras);
  }

  _export({
    MatchInfoForRound: void 0,
    IconData: void 0,
    ReelInfo: void 0,
    RPSGuessRoundData: void 0,
    BasicProcessSlotData: void 0,
    ProcessSlotDataCore: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      DefinitionGameConfigData = _unresolved_2.DefinitionGameConfigData;
    }, function (_unresolved_3) {
      AllMachPayNG018 = _unresolved_3.AllMachPayNG018;
    }, function (_unresolved_4) {
      AllMachPayFG018 = _unresolved_4.AllMachPayFG018;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "707621Ek55GFoSsNEnMx5hS", "ProcessSlotData", undefined);

      /**
       * @author Eric
       * 2025/02/10
       */
      __checkObsolete__(['_decorator', 'log']);

      ({
        SPECIAL_SYMBOL_LIST,
        FORECAST_FOR_REEL,
        REEL_SYMBOL_AMOUNT,
        BONUS_MULTIPLIER,
        BONUS_MULTIPLIER_REDUCE,
        FORECAST_REEL,
        REEL_AMOUNT,
        //MULTIPLIER,//---四重彩?(第四軸的倍數)
        WILD_LIST
      } = _crd && DefinitionGameConfigData === void 0 ? (_reportPossibleCrUseOfDefinitionGameConfigData({
        error: Error()
      }), DefinitionGameConfigData) : DefinitionGameConfigData);

      _export("MatchInfoForRound", MatchInfoForRound = class MatchInfoForRound {
        constructor() {
          this.odd = void 0;
          //--這條線中獎的賠率

          /**
           * 有可是多維陣列的情況
           * 在重複相同的symbol的情況下,會把相同的symbol的連線資料放在一起
           */
          this.matchPos = void 0;
          this.winSymbolID = void 0;
          //--匹配到的那個symbol id
          this.camp = -1;
        }

      });

      _export("IconData", IconData = class IconData {
        constructor() {
          this.iconID = -1;
          this.camp = -1;
        }

      });

      _export("ReelInfo", ReelInfo = class ReelInfo {
        constructor() {
          this.symbolData = [];
          //--盤面資料
          this.haveForecast = false;
        }

      });

      _export("RPSGuessRoundData", RPSGuessRoundData = class RPSGuessRoundData {
        constructor() {
          this.camp_L = 0;
          //--阿里(累計結果)
          this.camp_R = 0;
          //--盜賊(累計結果)
          this.draw = 0;
          //--平局(累計結果)
          this.singleResult = 0;
        } //--單局的結果


      });

      _export("BasicProcessSlotData", BasicProcessSlotData = class BasicProcessSlotData {
        constructor() {
          this.reSpinReelInfo = [];
          //--reSpine 這邊有多少就塞多少IProcessSlotData進去
          this.freeGameReelInfo = [];
          //--freeGame 這邊有多少就塞多少IProcessFGData
          this.ngReelInfo = void 0;
          //--NG只會有一個IProcessSlotData
          this.allRoundOdds = 0;
          //----這個是目前這個資料的總賠率(NG+FG+reSpine)
          this.totalOddsForReSpin = 0;
          //--reSpin的總賠率(有乘上multiplier=1)
          this.totalOddsForFG = 0;
          //--fg的總賠率(有乘上multiplier(multiplier只有FG阿里陣營才有))
          this.betValue = 0;
        } //--default=0


      });

      _export("ProcessSlotDataCore", ProcessSlotDataCore = class ProcessSlotDataCore extends BasicProcessSlotData {
        //--for test check
        set testFGCards(value) {
          this._testFGCards = value;
        }

        set testNGCards(value) {
          this._testNGCards = value;
        }

        set testReSpinCards(value) {
          this._testReSpinCards = value;
        }

        constructor() {
          super();
          //-AwardData裡面的totalOdd(資料在roundForMach裡面)
          this._ngAllMachPay = void 0;
          this._fgAllMachPay = void 0;
          this._maximumCount = 13;
          //--bonus最大數量
          this._currentBonusCount = 0;
          //--bonus目前的數量
          this._currentNGCards = void 0;
          this._currentReSpinCards = void 0;
          this._currentFGCards = void 0;
          this._guessResult = void 0;
          this._testFGCards = [];
          //--測試用的FG資料(3*6的盤面,目前只會有一個陣營的資料,所以不需要陣營資料)
          this._testNGCards = [];
          //--測試用的NG資料(3*3的盤面,目前只會有一個陣營的資料,所以不需要陣營資料)
          this._testReSpinCards = [];
          //--測試用的reSpin資料(3*3的盤面,目前只會有一個陣營的資料,所以不需要陣營資料)
          this._curryBase64Data = '';
          this._ngAllMachPay = new (_crd && AllMachPayNG018 === void 0 ? (_reportPossibleCrUseOfAllMachPayNG({
            error: Error()
          }), AllMachPayNG018) : AllMachPayNG018)(); //3*3

          this._fgAllMachPay = new (_crd && AllMachPayFG018 === void 0 ? (_reportPossibleCrUseOfAllMachPayFG({
            error: Error()
          }), AllMachPayFG018) : AllMachPayFG018)(); //--3*6
        } //--20250311測試使用..正是直接就塞整個class進去


        getCloneData() {
          var cloneData = new BasicProcessSlotData();
          cloneData.betValue = this.betValue;
          var ary2d = this.get2DArray(this._currentNGCards);
          var ngData = this.getNgCardsData(this._currentNGCards, ary2d);
          cloneData.ngReelInfo = ngData.ngReelInfo; //--注單要使用的

          cloneData.allRoundOdds = this.getAfterCalculate(cloneData.allRoundOdds, ngData.roundTotalOdd, 'add');
          var fgCampData = -1;

          if (ngData.forecast) {
            //--找出進入FG的陣營
            fgCampData = this.getStartCampToFG(ary2d);

            if (fgCampData != -1) {
              //--有猜拳的情況下,需要塞回第一把(開啟陣營的猜拳勝負資料) 
              var singleResult = this.getStartCampToFG(ary2d);
              var singleResult_draw = 0; //--平局(累計結果)

              var singleResult_campL = 0; //--阿里(累計結果)

              var singleResult_campR = 0; //--盜賊(累計結果)

              if (singleResult == -1) {
                singleResult_draw++;
              } else if (singleResult == 0) {
                singleResult_campL++;
              } else if (singleResult == 1) {
                singleResult_campR++;
              }

              this._guessResult = {
                camp_L: singleResult_campL,
                camp_R: singleResult_campR,
                draw: singleResult_draw,
                singleResult: singleResult
              };
              cloneData.ngReelInfo.guessResult = this._guessResult;
            }
          }

          var reSpinData = this.getReSpinCardsData(this._currentReSpinCards);
          cloneData.reSpinReelInfo = reSpinData.IProcessData;
          cloneData.allRoundOdds = this.getAfterCalculate(cloneData.allRoundOdds, reSpinData.RSTotalOdds, 'add');
          cloneData.totalOddsForReSpin = reSpinData.RSTotalOdds;
          var fgData = this.getFgCardsData(this._currentFGCards, fgCampData);
          cloneData.freeGameReelInfo = fgData.IProcessData;
          cloneData.allRoundOdds = this.getAfterCalculate(cloneData.allRoundOdds, fgData.FGTotalOdds, 'add');
          cloneData.totalOddsForFG = fgData.FGTotalOdds; //--這是累加後的總數量(每一局的賠率* multiplier的總累加)

          console.log('check_testPayRound', this._curryBase64Data, cloneData);
          return cloneData;
        } //-this._currentNGCards塞進來


        getNgCardsData(cards, ary2d) {
          var ary2dIconData = this.getIconDataTo2DArray(cards);
          var thisNGRoundData = this.getNgGameRoundData(cards);
          var isForecast = this.checkHaveForecast(ary2d);
          var ngReelInfo = {
            betValue: this.betValue,
            totalOdd: thisNGRoundData.roundTotalOdd,
            winLine: thisNGRoundData.match,
            reelInfo: {
              symbolData: ary2dIconData,
              haveForecast: isForecast
            },
            guessResult: null
          };
          return {
            ngReelInfo: ngReelInfo,
            roundTotalOdd: thisNGRoundData.roundTotalOdd,
            forecast: isForecast
          };
        }

        getFgCardsData(cards, campValue) {
          var returnData = [];
          var returnFgTotalOdds = 0; //--每局所獲得的賠率* multiplier的累加

          var totalFGRoundScores = 0; //--每局的總額(賠率*下注金額)

          var arySymbolsToExclude = [];

          for (var cardData of cards) {
            var ary2d = this.get2DArray(cardData);
            var ary2dIconData = this.getIconDataTo2DArray(cardData, campValue);
            this.getRoundForCountBonus(cardData); //--計算每一輪bonus的數量

            var reelInfo = {
              symbolData: ary2dIconData,
              haveForecast: false
            };
            var roundData = this.getFgGameRoundData(cardData, campValue);
            var winLine = roundData.match;
            var roundTotalOdd = roundData.roundTotalOdd;
            var multiplier = this.getMultiplierData(campValue);
            var roundMultiplier = campValue == 0 ? multiplier : 1;
            var oddsWithMultiplier = this.getAfterCalculate(roundTotalOdd, roundMultiplier, 'mul');
            var currentRoundScore = this.getAfterCalculate(this.betValue, oddsWithMultiplier, 'mul');
            totalFGRoundScores = this.getAfterCalculate(totalFGRoundScores, currentRoundScore, 'add');
            returnFgTotalOdds = this.getAfterCalculate(returnFgTotalOdds, oddsWithMultiplier, 'add');
            var aryCurrentSymbolsToExclude = [];
            aryCurrentSymbolsToExclude = [...arySymbolsToExclude];

            if (campValue == 1) {
              var excludeSymbol = this.getCamp2MultiplierForReduce(multiplier);

              if (excludeSymbol != -1 && !arySymbolsToExclude.includes(excludeSymbol)) {
                //--這個是FG盜賊中的排除圖示(不會顯示在盤面上)
                arySymbolsToExclude.push(excludeSymbol);
              }
            }
            /**
             *  multiplier: number;//--每round的倍數(累加)
                ogTotalOdd: number;//--原始的賠率(尚未乘上multiplier)
                roundSingleScore: number;//--單局的總額(金額)
                totalFGRoundScore: number;//--總額(所有局數的總額(累積))
             */


            returnData.push({
              betValue: this.betValue,
              totalOdd: oddsWithMultiplier,
              //--已經乘上所獲得的bonus倍率
              winLine: winLine,
              reelInfo: reelInfo,
              guessResult: null,
              //--FG沒有猜拳
              roundSingleScore: currentRoundScore,
              totalFGRoundScore: totalFGRoundScores,
              multiplier: roundMultiplier,
              ogTotalOdd: roundTotalOdd,
              //-尚未乘上multiplier
              symbolsToExclude: aryCurrentSymbolsToExclude //--這個是FG盜賊中的排除圖示(不會顯示在盤面上)

            });
          }

          return {
            IProcessData: returnData,
            FGTotalOdds: returnFgTotalOdds
          };
        }

        getRoundForCountBonus(cards) {
          var singleRoundCount = 0;

          for (var card of cards) {
            if (SPECIAL_SYMBOL_LIST.includes(card)) {
              this._currentBonusCount++;
              singleRoundCount++;
            }
          }

          if (this._currentBonusCount > this._maximumCount) {
            this._currentBonusCount = this._maximumCount;
          }

          if (singleRoundCount > this._maximumCount) {
            singleRoundCount = this._maximumCount;
          }

          return singleRoundCount;
        }

        getMultiplierData(camp) {
          /*
          if (camp == 1 || camp == -1) {
              return 1;
          }*/
          var multiplier = undefined;
          var maxKey = -1; // 找到小於等於 targetCount 的最大鍵

          for (var key in BONUS_MULTIPLIER) {
            var numKey = parseInt(key);

            if (numKey <= this._currentBonusCount && numKey > maxKey) {
              maxKey = numKey;
              multiplier = BONUS_MULTIPLIER[numKey];
            }
          }

          if (multiplier == undefined) {
            multiplier = 1;
          }

          return multiplier;
        }

        getCamp2MultiplierForReduce(currentMultiplier) {
          if (BONUS_MULTIPLIER_REDUCE[currentMultiplier]) {
            return BONUS_MULTIPLIER_REDUCE[currentMultiplier];
          } else {
            return -1;
          }
        } //--產生reSpin的資料


        getReSpinCardsData(cards) {
          var returnData = [];
          var returnTotalOdds = 0;
          var singleResult_campL = 0; //--阿里(累計結果)

          var singleResult_campR = 0; //--盜賊(累計結果) 

          var singleResult_draw = 0; //--平局(累計結果)

          var singleResult = 0; //----單局的結果(不累計)

          if (cards.length > 0 && this._guessResult) {
            singleResult_campL = this._guessResult.camp_L;
            singleResult_campR = this._guessResult.camp_R;
            singleResult_draw = this._guessResult.draw;
          }

          for (var cardData of cards) {
            var ary2d = this.get2DArray(cardData);
            var ary2dIconData = this.getIconDataTo2DArray(cardData); //const winLine = this.getNgGameRoundData(cardData);

            var roundData = this.getNgGameRoundData(cardData);
            var winLine = roundData.match;
            var roundTotalOdd = roundData.roundTotalOdd;
            singleResult = this.getStartCampToFG(ary2d);

            if (singleResult == -1) {
              singleResult_draw++;
            } else if (singleResult == 0) {
              singleResult_campL++;
            } else if (singleResult == 1) {
              singleResult_campR++;
            }

            returnTotalOdds = this.getAfterCalculate(returnTotalOdds, roundTotalOdd, 'add');
            ;
            var reelInfo = {
              //symbolData: ary2d,
              symbolData: ary2dIconData,
              haveForecast: false
            };
            returnData.push({
              betValue: this.betValue,
              totalOdd: roundTotalOdd,
              winLine: winLine,
              reelInfo: reelInfo,
              //multiplier: 0,
              guessResult: {
                camp_L: singleResult_campL,
                camp_R: singleResult_campR,
                draw: singleResult_draw,
                singleResult: singleResult
              } //campData: this.campData,
              //ogTotalOdd: roundTotalOdd//-尚未乘上multiplier

            });
          }

          return {
            IProcessData: returnData,
            RSTotalOdds: returnTotalOdds
          };
        }

        getFgGameRoundData(cards, camp) {
          var match = [];

          var roundForFg = this._fgAllMachPay.getWinData(cards);

          var fgRoundData;
          var roundTotalOdd = 0;

          if (roundForFg.totalOdd > 0 && roundForFg.dataList.length > 0) {
            //roundTotalOdd += roundForFg.totalOdd;--不能直接加總在NG的totalOdd上面(FG/reSpine的總賠率要分別塞資料)
            roundTotalOdd = this.getAfterCalculate(roundTotalOdd, roundForFg.totalOdd, 'add'); //--這是3*6的盤面

            fgRoundData = this.getWinLineData(roundForFg, camp);
            match.push(...fgRoundData);
          }

          return {
            roundTotalOdd: roundTotalOdd,
            match: match
          };
        }

        getNgGameRoundData(cards) {
          var match = [];
          var firstRound = cards.slice(0, 9);
          var secondRound = cards.slice(-9);

          var roundForMach_first = this._ngAllMachPay.getWinData(firstRound);

          var roundForMach_second = this._ngAllMachPay.getWinData(secondRound);

          var roundTotalOdd = 0;
          var firstRoundData;

          if (roundForMach_first.totalOdd > 0 && roundForMach_first.dataList.length > 0) {
            //this.totalOdds += roundForMach_first.totalOdd;
            //roundTotalOdd += roundForMach_first.totalOdd;
            roundTotalOdd = this.getAfterCalculate(roundTotalOdd, roundForMach_first.totalOdd, 'add'); //--這是3*3的盤面
            //cloneData.winLine = [[0, 0, 0], [0, 1, 2]];

            firstRoundData = this.getWinLineData(roundForMach_first, 0);
            match.push(...firstRoundData);
          }

          var secondRoundData;

          if (roundForMach_second.totalOdd > 0 && roundForMach_second.dataList.length > 0) {
            //this.totalOdds += roundForMach_second.totalOdd;
            //roundTotalOdd += roundForMach_second.totalOdd;
            roundTotalOdd = this.getAfterCalculate(roundTotalOdd, roundForMach_second.totalOdd, 'add'); //--這是3*3的盤面
            //cloneData.winLine = [[0, 0, 0], [0, 1, 2]];

            secondRoundData = this.getWinLineData(roundForMach_second, 1);
            match.push(...secondRoundData);
          }

          return {
            roundTotalOdd: roundTotalOdd,
            match: match
          };
        }

        getWinLineData(aw, camp) {
          var returnAry = [];
          var aryTargetData = aw.dataList;

          for (var clientData of aryTargetData) {
            var matchInfo = new MatchInfoForRound();
            matchInfo.odd = clientData.WinOdds;
            matchInfo.matchPos = [...clientData.Win2DPos];
            matchInfo.winSymbolID = clientData.WinSymbolID;
            matchInfo.camp = camp;
            returnAry.push(matchInfo);
          }

          return returnAry;
        }

        resetRoundData() {
          this.betValue = 0;
          this.allRoundOdds = 0;
          this.totalOddsForReSpin = 0;
          this.totalOddsForFG = 0; //--記在FG自己的資料裡面totalOdd

          this._currentNGCards = [];
          this._currentReSpinCards = [];
          this._currentFGCards = [];
          this._currentBonusCount = 0; //--reSpine 這邊有多少就塞多少IProcessSlotData進去

          this.reSpinReelInfo = []; //--freeGame 這邊有多少就塞多少IProcessSlot

          this.freeGameReelInfo = [];
          this.ngReelInfo = null;
          this._guessResult = null;
          this._curryBase64Data = ''; //--for test check
        }

        setNewRoundData(slotData, betValue) {
          this._curryBase64Data = slotData; //--for test check

          this.betValue = betValue; //--number[]將牌面換成數字

          var serverResult = this.getBoardResult(slotData);
          var slicedData = this.sliceAryToCards(serverResult, 18);
          this._currentNGCards = slicedData.shift();
          var otherCards = this.getReSpinData(slicedData);
          this._currentReSpinCards = otherCards.reSpinData;
          this._currentFGCards = otherCards.fgData; //--for test

          if (this._testFGCards.length > 0) {
            this._currentFGCards = this._testFGCards;
          }

          if (this._testNGCards.length > 0) {
            this._currentNGCards = this._testNGCards;
          }

          if (this._testReSpinCards.length > 0) {
            this._currentReSpinCards = this._testReSpinCards;
          }

          console.log('setNewRoundData', this._curryBase64Data, this._currentNGCards, this._currentReSpinCards, this._currentFGCards); //--20250310新增
          //--reSpine 這邊有多少就塞多少IProcessSlotData進去

          this.ngReelInfo = null;
          this.reSpinReelInfo = []; //--freeGame 這邊有多少就塞多少IProcessSlot

          this.freeGameReelInfo = [];
        }

        getBoardResult(base64Data) {
          var uint8Array = this.base64ToUint8Array(base64Data); // 解碼 Base64

          var unpackedData = this.unpack4BitPairs(uint8Array); // 解壓縮 4 位元數值對

          return unpackedData;
        }

        base64ToUint8Array(base64String) {
          var binaryString = atob(base64String); // 解碼 Base64

          var length = binaryString.length;
          var bytes = new Uint8Array(length);

          for (var i = 0; i < length; i++) {
            bytes[i] = binaryString.charCodeAt(i); // 將字元轉換為位元組
          }

          return bytes;
        }

        unpack4BitPairs(binaryBuffer) {
          var unpackedValues = []; //--ps server的資料放法:2個4bit的數字放在一起變成1個byte
          //--n和n+1(低位放前面)

          for (var byte of binaryBuffer) {
            var highNibble = byte >> 4 & 0x0F; // 提取高 4 位元

            var lowNibble = byte & 0x0F; // 提取低 4 位元

            unpackedValues.push(lowNibble);
            unpackedValues.push(highNibble);
          }

          return unpackedValues;
        }

        sliceAryToCards(cards, chunkSize) {
          var result = [];
          var currentIndex = 0;

          while (currentIndex < cards.length) {
            var chunk = cards.slice(currentIndex, currentIndex + chunkSize);
            result.push(chunk);
            currentIndex += chunkSize;
          }

          return result;
        }

        getReSpinData(cards) {
          var result_reSpin = [];
          var result_fg = [];

          for (var list of cards) {
            var target_1List = list.slice(3, 6); // 起始索引 3，長度 3

            var target_2List = list.slice(list.length - 6, list.length - 3); // 從倒數第六個開始，長度3

            var hasWild_1 = target_1List.some(item => WILD_LIST.includes(item));
            var hasWild_2 = target_2List.some(item => WILD_LIST.includes(item));

            if (hasWild_1 && hasWild_2) {
              result_reSpin.push(list);
            } else {
              result_fg.push(list);
            }
          }

          return {
            reSpinData: result_reSpin,
            fgData: result_fg
          };
        }

        checkHaveForecast(cards) {
          return cards[FORECAST_FOR_REEL].some(item => WILD_LIST.includes(item));
        } //--找出哪個陣營發動FG(wild猜拳第一把的贏家)


        getStartCampToFG(cards) {
          if (cards[FORECAST_REEL].some(item => WILD_LIST.includes(item))) {
            var L = this.getWildIconId(cards, FORECAST_FOR_REEL);
            var R = this.getWildIconId(cards, FORECAST_REEL);

            if (L != -1 && R != -1) {
              //-6=剪刀,7=石頭,8=布
              if (L === R) {
                return -1; // 平手
              } else if (L === 6 && R === 8 || L === 7 && R === 6 || L === 8 && R === 7) {
                return 0; // L 贏
              } else {
                return 1; // R 贏
              }
            }
          } else {
            return -1;
          }
        }

        getWildIconId(cards, reelIndex) {
          var targetReel = cards[reelIndex];
          var foundWildCard = targetReel.find(element => WILD_LIST.includes(element));
          return foundWildCard !== undefined ? foundWildCard : -1;
        }

        getIconDataTo2DArray(card, camp) {
          var aryIcon2ds = [];

          for (var i = 0; i < REEL_AMOUNT; i++) {
            var row = [];

            for (var j = 0; j < REEL_SYMBOL_AMOUNT; j++) {
              var campData = camp !== undefined ? camp : this.getNGCampData(i);
              row.push({
                iconID: card[i * REEL_SYMBOL_AMOUNT + j],
                camp: campData
              });
            }

            aryIcon2ds.push(row);
          }

          return aryIcon2ds;
        }

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

        getNGCampData(reelIndex) {
          return reelIndex <= 2 ? 0 : 1;
        }

        getAfterCalculate(num1, num2, type) {
          var decimal = 2;

          var getFixed = (num, decimal) => {
            var regex = new RegExp("\\.([\\d]{" + decimal + "})");
            var format = num.toString().padEnd(decimal + num.toString().length, '0');
            return format.replace(regex, '$1.') * 1;
          };

          var result = 0;

          switch (type) {
            case 'add':
              result = Number(getFixed(num1, decimal) + getFixed(num2, decimal)) / 100;
              break;

            case 'sub':
              result = Number(getFixed(num1, decimal) - getFixed(num2, decimal)) / 100;
              break;

            case 'mul':
              result = Number(getFixed(num1, decimal) * getFixed(num2, decimal)) / 10000;
              break;

            case 'div':
              result = Number(getFixed(num1, decimal) / getFixed(num2, decimal));
              break;

            default:
              break;
          }

          return result;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=56fcd7a04961ed3e721eb54bccad017b526580c0.js.map