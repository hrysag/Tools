System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SlotDataGameModeType, SlotDataParser, SlotDataStringType, TestExpansionAndIconText, GameResultData, RoundData, ReadyHandData, GameWinData, DetailWinData, ReelIconIndexData, FlagData, _crd, icons, GameMode, IconList, GameConfig;

  function _reportPossibleCrUseOfGameRecordAST(extras) {
    _reporterNs.report("GameRecordAST", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconConfig(extras) {
    _reporterNs.report("IconConfig", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconDataProcessor(extras) {
    _reporterNs.report("IconDataProcessor", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItem(extras) {
    _reporterNs.report("Item", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLine(extras) {
    _reporterNs.report("Line", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotDataGameModeType(extras) {
    _reporterNs.report("SlotDataGameModeType", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotDataIconData(extras) {
    _reporterNs.report("SlotDataIconData", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotDataParser(extras) {
    _reporterNs.report("SlotDataParser", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotDataStringType(extras) {
    _reporterNs.report("SlotDataStringType", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  _export({
    TestExpansionAndIconText: void 0,
    GameResultData: void 0,
    RoundData: void 0,
    ReadyHandData: void 0,
    GameWinData: void 0,
    DetailWinData: void 0,
    ReelIconIndexData: void 0,
    FlagData: void 0,
    GameConfig: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      SlotDataGameModeType = _unresolved_2.SlotDataGameModeType;
      SlotDataParser = _unresolved_2.SlotDataParser;
      SlotDataStringType = _unresolved_2.SlotDataStringType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f5d97+YaaxFQ6wS6esJTxL2", "TestExpansionAndIconText", undefined);

      _export("icons", icons = {
        0: {
          src: "/images/game1014/Symbol_0.png",
          width: 152,
          height: 156
        },
        1: {
          src: "/images/game1014/Symbol_1.png",
          width: 152,
          height: 156
        },
        2: {
          src: "/images/game1014/Symbol_2.png",
          width: 152,
          height: 156
        },
        3: {
          src: "/images/game1014/Symbol_3.png",
          width: 152,
          height: 156
        },
        4: {
          src: "/images/game1014/Symbol_4.png",
          width: 152,
          height: 156
        },
        5: {
          src: "/images/game1014/Symbol_5.png",
          width: 152,
          height: 156
        },
        6: {
          src: "/images/game1014/Symbol_6.png",
          width: 152,
          height: 156
        },
        7: {
          src: "/images/game1014/Symbol_7.png",
          width: 152,
          height: 156
        },
        8: {
          src: "/images/game1014/Symbol_8.png",
          width: 152,
          height: 156
        },
        9: {
          src: "/images/game1014/Symbol_9.png",
          width: 152,
          height: 156
        },
        10: {
          src: "/images/game1014/Symbol_10.png",
          width: 152,
          height: 156
        },
        11: {
          src: "/images/game1014/Symbol_11_mini.png",
          width: 152,
          height: 156
        },
        12: {
          src: "/images/game1014/Symbol_11_major.png",
          width: 152,
          height: 156
        }
      });

      _export("TestExpansionAndIconText", TestExpansionAndIconText = class TestExpansionAndIconText {
        game1014SlotParserExample(gameResult) {
          var parser = new (_crd && SlotDataParser === void 0 ? (_reportPossibleCrUseOfSlotDataParser({
            error: Error()
          }), SlotDataParser) : SlotDataParser)(gameResult.Bet);
          var freeGameCount = 0;
          var bonusGameCount = 0;
          var totalWin = 0;
          var currentGameMode = (_crd && SlotDataGameModeType === void 0 ? (_reportPossibleCrUseOfSlotDataGameModeType({
            error: Error()
          }), SlotDataGameModeType) : SlotDataGameModeType).normal;

          for (var i = 0; i < gameResult.RoundData.length; i++) {
            var roundData = gameResult.RoundData[i];
            var isFGOverToBG = i > gameResult.LastFGIndex;
            var roundTitle = this.getGameTitle(roundData.GameMode, currentGameMode, bonusGameCount, freeGameCount);
            var lineList = this.getDetailDescriptionList(roundData.WinData.DetailWinData, gameResult.Bet);
            var iconList = roundData.IconList.length !== 7 ? roundData.IconList : this.elongatedArray(roundData.IconList);
            var merges = roundData.IconList.length !== 7 ? Array(15).fill(0) : [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0];
            var hasBigGameIcon = roundData.IconList.length === 7;
            var win = (roundData.WinData.AllWinOdd * gameResult.Bet).fixed();
            totalWin += win;
            var roundWinItem = this.getWinDescription("單次贏分", win);
            var totalWinItem = this.getWinDescription("總贏分", totalWin);

            if (roundData.GameMode === GameMode.NormalGame || isFGOverToBG) {
              currentGameMode = (_crd && SlotDataGameModeType === void 0 ? (_reportPossibleCrUseOfSlotDataGameModeType({
                error: Error()
              }), SlotDataGameModeType) : SlotDataGameModeType).normal;
              parser.setGameMode(currentGameMode);
            } else if (roundData.GameMode === GameMode.FreeGame && currentGameMode !== (_crd && SlotDataGameModeType === void 0 ? (_reportPossibleCrUseOfSlotDataGameModeType({
              error: Error()
            }), SlotDataGameModeType) : SlotDataGameModeType).free) {
              currentGameMode = (_crd && SlotDataGameModeType === void 0 ? (_reportPossibleCrUseOfSlotDataGameModeType({
                error: Error()
              }), SlotDataGameModeType) : SlotDataGameModeType).free;
              parser.setGameMode(currentGameMode);
            } else if (roundData.GameMode === GameMode.BonusGame && currentGameMode !== (_crd && SlotDataGameModeType === void 0 ? (_reportPossibleCrUseOfSlotDataGameModeType({
              error: Error()
            }), SlotDataGameModeType) : SlotDataGameModeType).bonus) {
              currentGameMode = (_crd && SlotDataGameModeType === void 0 ? (_reportPossibleCrUseOfSlotDataGameModeType({
                error: Error()
              }), SlotDataGameModeType) : SlotDataGameModeType).bonus;
              parser.setGameMode(currentGameMode);
            }

            parser.setTitle(roundTitle);
            parser.processIconData(GameConfig.ROW, GameConfig.COLUMNS, iconList, [parser.setMark(roundData.WinData.AllWin2DPos, '#97aadfff'), parser.mergesIconData(merges), this.setIconText(gameResult.Bet, hasBigGameIcon)]);
            parser.setDetailDescription(lineList);
            parser.setSummary(roundWinItem);
            parser.setSummary(totalWinItem);
            parser.combineOneRoundData();
            parser.setRecords();
          }

          var finalSltData = parser.getFinalSlotData();
          var gameRecordAST = {
            ast: finalSltData,
            icons: icons
          };
          return gameRecordAST;
        }

        getGameTitle(gameMode, currentGameMode, bonusGameCount, freeGameCount) {
          if (gameMode === GameMode.FreeGame) {
            bonusGameCount = 0;
            freeGameCount++;
            return [[(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).text, currentGameMode], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).number, freeGameCount.toString()]];
          } else if (gameMode === GameMode.BonusGame) {
            bonusGameCount++;
            return [[(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).text, currentGameMode], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).number, bonusGameCount.toString()]];
          } else {
            return [[(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).text, currentGameMode]];
          }
        }

        getDetailDescriptionList(detailData, bet) {
          var descriptionList = [];

          for (var i = 0; i < detailData.length; i++) {
            if (detailData[i].WinLineNumber !== -1) {
              var line = [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).line, [[(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).icon, detailData[i].WinIcon], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).number, bet], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).symbol, "*"], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).number, detailData[i].WinOdd], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).symbol, "="], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).number, (detailData[i].WinOdd * bet).fixed()], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).symbol, "("], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).text, "線"], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).number, detailData[i].WinLineNumber + 1], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).symbol, ")"]]];
              descriptionList.push(line);
            }
          }

          return descriptionList;
        }

        getWinDescription(text, score) {
          return [[(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
            error: Error()
          }), SlotDataStringType) : SlotDataStringType).text, text], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
            error: Error()
          }), SlotDataStringType) : SlotDataStringType).symbol, "="], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
            error: Error()
          }), SlotDataStringType) : SlotDataStringType).number, score]];
        }

        elongatedArray(data) {
          var newData = [...data];
          var thirdElement = newData[3];
          newData.splice(4, 0, ...Array(8).fill(thirdElement));
          return newData;
        }

        setIconText(bet, hasBigGameIcon) {
          return list => {
            var newIconLIst = [...list];

            for (var i = 0; i < newIconLIst.length; i++) {
              if (newIconLIst[i].icon >= IconList.BG1) {
                var isBigIcon = hasBigGameIcon && i === 3;
                var text = this.formatScoreWithSuffix(newIconLIst[i].icon, bet, isBigIcon);

                if (newIconLIst[i].icon === IconList.BG_MAJOR) {
                  newIconLIst[i].icon = 12;
                } else if (newIconLIst[i].icon === IconList.BG_MINI) {
                  newIconLIst[i].icon = 11;
                } else {
                  newIconLIst[i].icon = IconList.BG1;
                }

                newIconLIst[i].text = text;
                newIconLIst[i].textSize = isBigIcon ? 6 : 2;
              }
            }

            return newIconLIst;
          };
        }

        formatScoreWithSuffix(symbolId, bet, isBigIcon) {
          var suffixes = ['', 'k', 'm', 't'];
          var suffixIndex = 0;
          var multiple = isBigIcon ? GameConfig.BigMoonIconMultiplier : 1;
          var score = GameConfig.getBGMultiplier(symbolId) * bet * multiple;

          while (score >= GameConfig.Thousand && suffixIndex < suffixes.length - 1) {
            score /= GameConfig.Thousand;
            suffixIndex++;
          }

          return score.fixed() + suffixes[suffixIndex];
        }

      });

      _export("GameResultData", GameResultData = class GameResultData {
        constructor(roundData, finalWinOdds, lastFGIndex, bet) {
          this.RoundData = [];
          this.LastFGIndex = 0;
          this.FinalWin = 0;
          this.Bet = 0;
          this.FinalWinOdds = 0;
          this.RoundData = roundData;
          this.FinalWinOdds = finalWinOdds;
          this.LastFGIndex = lastFGIndex;
          this.Bet = bet;
          this.FinalWin = (finalWinOdds * bet).fixed();
        }

      });

      _export("RoundData", RoundData = class RoundData {
        constructor(gameMode, iconList, readyHandIndex, winData, reelSingleData, flagData, showGameCount, bgTriggerData) {
          this.GameMode = void 0;
          this.IconList = [];
          this.ReadyHandData = null;
          this.WinData = null;
          this.ReelSingleData = null;
          this.FlagData = null;
          this.SpecialGameCount = 0;
          this.BGTriggerData = [];
          this.GameMode = gameMode;
          this.IconList = iconList;
          this.ReadyHandData = readyHandIndex;
          this.WinData = winData;
          this.ReelSingleData = reelSingleData;
          this.FlagData = flagData;
          this.SpecialGameCount = showGameCount;
          this.BGTriggerData = bgTriggerData;
        }

      });

      _export("ReadyHandData", ReadyHandData = class ReadyHandData {
        constructor(readyHandIndex, fgReadyHand, bgReadyHand) {
          this.ReadyHandIndex = 0;
          this.FGReadyHandIndex = 0;
          this.BGReadyHandIndex = 0;
          this.ReadyHandIndex = readyHandIndex;
          this.FGReadyHandIndex = fgReadyHand;
          this.BGReadyHandIndex = bgReadyHand;
        }

      });

      _export("GameWinData", GameWinData = class GameWinData {
        constructor(winIndex, winOdd, allWin2DPos, detailWinData) {
          this.AllWinPos = [];
          this.AllWinOdd = 0;
          this.AllWin2DPos = [];
          this.DetailWinData = [];
          this.AllWinPos = winIndex;
          this.AllWinOdd = winOdd;
          this.AllWin2DPos = allWin2DPos;
          this.DetailWinData = detailWinData;
        }

      });

      _export("DetailWinData", DetailWinData = class DetailWinData {
        constructor(winIcon, winOdd, winLineNumber, winPos, win2DPos) {
          this.WinIcon = 0;
          this.WinOdd = 0;
          this.WinLineNumber = 0;
          this.WinPos = [];
          this.Win2DPos = [];
          this.WinIcon = winIcon;
          this.WinOdd = winOdd;
          this.WinLineNumber = winLineNumber;
          this.WinPos = winPos;
          this.Win2DPos = win2DPos;
        }

      });

      _export("ReelIconIndexData", ReelIconIndexData = class ReelIconIndexData {
        constructor(fgIndex, bgIndex) {
          this.FGIcon = [];
          this.BGIcon = [];
          this.FGIcon = fgIndex;
          this.BGIcon = bgIndex;
        }

      });

      _export("FlagData", FlagData = class FlagData {
        constructor(hasFG, hasBG, hasBGFull) {
          if (hasBGFull === void 0) {
            hasBGFull = false;
          }

          this.HasFG = false;
          this.HasBG = false;
          this.HasBGFull = false;
          this.HasFG = hasFG;
          this.HasBG = hasBG;
          this.HasBGFull = hasBGFull;
        }

      });

      _export("GameMode", GameMode = /*#__PURE__*/function (GameMode) {
        GameMode[GameMode["NormalGame"] = 0] = "NormalGame";
        GameMode[GameMode["FreeGame"] = 1] = "FreeGame";
        GameMode[GameMode["BonusGame"] = 2] = "BonusGame";
        return GameMode;
      }({}));

      _export("IconList", IconList = /*#__PURE__*/function (IconList) {
        IconList[IconList["Man"] = 0] = "Man";
        IconList[IconList["Woman"] = 1] = "Woman";
        IconList[IconList["Gun"] = 2] = "Gun";
        IconList[IconList["Shoe"] = 3] = "Shoe";
        IconList[IconList["A"] = 4] = "A";
        IconList[IconList["K"] = 5] = "K";
        IconList[IconList["Q"] = 6] = "Q";
        IconList[IconList["J"] = 7] = "J";
        IconList[IconList["DoubleGun"] = 8] = "DoubleGun";
        IconList[IconList["Badge"] = 9] = "Badge";
        IconList[IconList["BG1"] = 10] = "BG1";
        IconList[IconList["BG2"] = 11] = "BG2";
        IconList[IconList["BG3"] = 12] = "BG3";
        IconList[IconList["BG4"] = 13] = "BG4";
        IconList[IconList["BG5"] = 14] = "BG5";
        IconList[IconList["BG6"] = 15] = "BG6";
        IconList[IconList["BG7"] = 16] = "BG7";
        IconList[IconList["BG8"] = 17] = "BG8";
        IconList[IconList["BG10"] = 18] = "BG10";
        IconList[IconList["BG14"] = 19] = "BG14";
        IconList[IconList["BG16"] = 20] = "BG16";
        IconList[IconList["BG18"] = 21] = "BG18";
        IconList[IconList["BG20"] = 22] = "BG20";
        IconList[IconList["BG_MINI"] = 23] = "BG_MINI";
        IconList[IconList["BG_MAJOR"] = 24] = "BG_MAJOR";
        IconList[IconList["BGNull"] = 25] = "BGNull";
        return IconList;
      }({}));

      (function (_GameConfig) {
        var ROW = _GameConfig.ROW = 3;
        var COLUMNS = _GameConfig.COLUMNS = 5;
        var FREE_GAME_COLUMNS = _GameConfig.FREE_GAME_COLUMNS = 3;
        var SECOND_ROUND_INIT = _GameConfig.SECOND_ROUND_INIT = 2;
        var Thousand = _GameConfig.Thousand = 1000;
        var BigMoonIconMultiplier = _GameConfig.BigMoonIconMultiplier = 9;
        var ICON_NUMBER = _GameConfig.ICON_NUMBER = [0, 1, 2, 3, 4, 5, 6, 7, 9];
        var BG_RandomICON_NUMBER = _GameConfig.BG_RandomICON_NUMBER = [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7];
        var WILD_NUMBER = _GameConfig.WILD_NUMBER = [IconList.Badge];
        var FREE_GAME_ICON_START_IDX = _GameConfig.FREE_GAME_ICON_START_IDX = IconList.DoubleGun;
        var BONUS_GAME_ICON_START_IDX = _GameConfig.BONUS_GAME_ICON_START_IDX = IconList.BG1;
        var NG_Icon_Number = _GameConfig.NG_Icon_Number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var BG_Icon_Number = _GameConfig.BG_Icon_Number = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
        var Free_GAME_ODDS = _GameConfig.Free_GAME_ODDS = [1];
        var BONUS_GAME_ODDS = _GameConfig.BONUS_GAME_ODDS = [1, 2, 3, 4, 5, 6, 7, 8, 10, 14, 16, 18, 20, 30, 100, 0];
        var MegaWIN_ODDS = _GameConfig.MegaWIN_ODDS = [1000];
        var SYMBOL_0_ODDS = _GameConfig.SYMBOL_0_ODDS = [0, 0, 1, 10, 20];
        var SYMBOL_1_ODDS = _GameConfig.SYMBOL_1_ODDS = [0, 0, 0.8, 6, 16];
        var SYMBOL_2_ODDS = _GameConfig.SYMBOL_2_ODDS = [0, 0, 0.6, 4, 12];
        var SYMBOL_3_ODDS = _GameConfig.SYMBOL_3_ODDS = [0, 0, 0.4, 2, 8];
        var SYMBOL_4_ODDS = _GameConfig.SYMBOL_4_ODDS = [0, 0, 0.4, 0.8, 2];
        var SYMBOL_5_ODDS = _GameConfig.SYMBOL_5_ODDS = [0, 0, 0.2, 0.8, 2];
        var SYMBOL_6_ODDS = _GameConfig.SYMBOL_6_ODDS = [0, 0, 0.2, 0.8, 2];
        var SYMBOL_7_ODDS = _GameConfig.SYMBOL_7_ODDS = [0, 0, 0.2, 0.8, 2];
        var SYMBOL_8_ODDS = _GameConfig.SYMBOL_8_ODDS = [0, 0, 0, 0, 0];
        var SYMBOL_9_ODDS = _GameConfig.SYMBOL_9_ODDS = [0, 0, 1, 10, 20];
        var ODDS_LIST = _GameConfig.ODDS_LIST = [SYMBOL_0_ODDS, SYMBOL_1_ODDS, SYMBOL_2_ODDS, SYMBOL_3_ODDS, SYMBOL_4_ODDS, SYMBOL_5_ODDS, SYMBOL_6_ODDS, SYMBOL_7_ODDS, SYMBOL_8_ODDS, SYMBOL_9_ODDS];
        var PAY_LINE_1 = _GameConfig.PAY_LINE_1 = [1, 4, 7, 10, 13];
        var PAY_LINE_2 = _GameConfig.PAY_LINE_2 = [0, 3, 6, 9, 12];
        var PAY_LINE_3 = _GameConfig.PAY_LINE_3 = [2, 5, 8, 11, 14];
        var PAY_LINE_4 = _GameConfig.PAY_LINE_4 = [0, 4, 8, 10, 12];
        var PAY_LINE_5 = _GameConfig.PAY_LINE_5 = [2, 4, 6, 10, 14];
        var PAY_LINE_6 = _GameConfig.PAY_LINE_6 = [1, 3, 6, 9, 13];
        var PAY_LINE_7 = _GameConfig.PAY_LINE_7 = [1, 5, 8, 11, 13];
        var PAY_LINE_8 = _GameConfig.PAY_LINE_8 = [0, 3, 7, 11, 14];
        var PAY_LINE_9 = _GameConfig.PAY_LINE_9 = [2, 5, 7, 9, 12];
        var PAY_LINE_10 = _GameConfig.PAY_LINE_10 = [1, 5, 7, 9, 13];
        var PAY_LINE_11 = _GameConfig.PAY_LINE_11 = [1, 3, 7, 11, 13];
        var PAY_LINE_12 = _GameConfig.PAY_LINE_12 = [0, 4, 7, 10, 12];
        var PAY_LINE_13 = _GameConfig.PAY_LINE_13 = [2, 4, 7, 10, 14];
        var PAY_LINE_14 = _GameConfig.PAY_LINE_14 = [0, 4, 6, 10, 12];
        var PAY_LINE_15 = _GameConfig.PAY_LINE_15 = [2, 4, 8, 10, 14];
        var PAY_LINE_16 = _GameConfig.PAY_LINE_16 = [1, 4, 6, 10, 13];
        var PAY_LINE_17 = _GameConfig.PAY_LINE_17 = [1, 4, 8, 10, 13];
        var PAY_LINE_18 = _GameConfig.PAY_LINE_18 = [0, 3, 8, 9, 12];
        var PAY_LINE_19 = _GameConfig.PAY_LINE_19 = [2, 5, 6, 11, 14];
        var PAY_LINE_20 = _GameConfig.PAY_LINE_20 = [0, 5, 8, 11, 12];
        var PAY_LINE_21 = _GameConfig.PAY_LINE_21 = [2, 3, 6, 9, 14];
        var PAY_LINE_22 = _GameConfig.PAY_LINE_22 = [1, 5, 6, 11, 13];
        var PAY_LINE_23 = _GameConfig.PAY_LINE_23 = [1, 3, 8, 9, 13];
        var PAY_LINE_24 = _GameConfig.PAY_LINE_24 = [0, 5, 6, 11, 12];
        var PAY_LINE_25 = _GameConfig.PAY_LINE_25 = [2, 3, 8, 9, 14];
        var PAY_TABLE = _GameConfig.PAY_TABLE = [PAY_LINE_1, PAY_LINE_2, PAY_LINE_3, PAY_LINE_4, PAY_LINE_5, PAY_LINE_6, PAY_LINE_7, PAY_LINE_8, PAY_LINE_9, PAY_LINE_10, PAY_LINE_11, PAY_LINE_12, PAY_LINE_13, PAY_LINE_14, PAY_LINE_15, PAY_LINE_16, PAY_LINE_17, PAY_LINE_18, PAY_LINE_19, PAY_LINE_20, PAY_LINE_21, PAY_LINE_22, PAY_LINE_23, PAY_LINE_24, PAY_LINE_25];

        function getBGMultiplier(icon) {
          return BONUS_GAME_ODDS[icon - BONUS_GAME_ICON_START_IDX];
        }

        _GameConfig.getBGMultiplier = getBGMultiplier;
      })(GameConfig || _export("GameConfig", GameConfig = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6e04ac5448eec9592c69cfc74a472ed4da338b35.js.map