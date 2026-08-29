System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SlotDataIconData, SlotDataParser, SlotDataStringType, TestReSpinWithIconLayers, GameDataGame, RoundResult, WinData, _crd, icons, SymbolType, ConfigGame;

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
    TestReSpinWithIconLayers: void 0,
    GameDataGame: void 0,
    RoundResult: void 0,
    WinData: void 0,
    ConfigGame: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      SlotDataIconData = _unresolved_2.SlotDataIconData;
      SlotDataParser = _unresolved_2.SlotDataParser;
      SlotDataStringType = _unresolved_2.SlotDataStringType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "356b80cH3tGcaq6Vtoa49ZQ", "TestReSpinWithIconLayers", undefined);

      _export("icons", icons = {
        0: {
          src: "/images/game1015/Symbol_0.png",
          width: 152,
          height: 156
        },
        1: {
          src: "/images/game1015/Symbol_1.png",
          width: 152,
          height: 156
        },
        2: {
          src: "/images/game1015/Symbol_2.png",
          width: 152,
          height: 156
        },
        3: {
          src: "/images/game1015/Symbol_3.png",
          width: 152,
          height: 156
        },
        4: {
          src: "/images/game1015/Symbol_4.png",
          width: 152,
          height: 156
        },
        5: {
          src: "/images/game1015/Symbol_5.png",
          width: 152,
          height: 156
        },
        6: {
          src: "/images/game1015/Symbol_6.png",
          width: 152,
          height: 156
        },
        7: {
          src: "/images/game1015/Symbol_7.png",
          width: 152,
          height: 156
        },
        8: {
          src: "/images/game1015/Symbol_8.png",
          width: 152,
          height: 156
        },
        9: {
          src: "/images/game1015/Symbol_9.png",
          width: 152,
          height: 156
        },
        10: {
          src: "/images/game1015/Symbol_10.png",
          width: 152,
          height: 156
        },
        11: {
          src: "/images/game1015/Symbol_11.png",
          width: 152,
          height: 156
        },
        12: {
          src: "/images/game1015/Symbol_12.png",
          width: 152,
          height: 156
        },
        13: {
          src: "/images/game1015/Symbol_13.png",
          width: 152,
          height: 156
        },
        14: {
          src: "/images/game1015/Symbol_14.png",
          width: 152,
          height: 156
        }
      });

      _export("TestReSpinWithIconLayers", TestReSpinWithIconLayers = class TestReSpinWithIconLayers {
        game1015SlotParserExample(gameData, bet) {
          var test = new (_crd && SlotDataParser === void 0 ? (_reportPossibleCrUseOfSlotDataParser({
            error: Error()
          }), SlotDataParser) : SlotDataParser)(bet);
          var totalWin = 0;
          test.setGameMode("一般遊戲"); //設置遊戲模式

          for (var i = 0; i < gameData.ng.length; i++) {
            totalWin += gameData.ng[i].score;
            var winIconSymbolList = gameData.ng[i].winData.map(winData => winData.winIconSymbolID);
            var odds = gameData.ng[i].winData.map(winData => winData.winOdds.fixed());
            var winCombination = gameData.ng[i].winData.map(winData => winData.winCombination.fixed());
            var winIcon2DPos = this.convertIconPosInToReelPos(gameData.ng[i].winIconPos); //設置細單標題

            if (i === 0) {
              test.setTitle([[(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).text, "一般遊戲"]]);
            } else {
              test.setTitle([[(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).text, "一般遊戲"], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).symbol, "-"], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).text, "重新旋轉"], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).number, i]]);
            }

            var items = gameData.ng[i].lockIconPos.length - gameData.ng[i].winIconPos.length > 0 ? [[(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).icon, 10], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).symbol, "="], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).symbol, "("], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).number, 12 - gameData.ng[i].lockIconPos.length], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).symbol, "/"], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).number, 12], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).symbol, ")"]] : [[(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).icon, 10], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).symbol, "="], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).number, 2], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).text, "免費遊戲"]]; //設置細單

            test.processIconData(ConfigGame.REEL_AMOUNT, ConfigGame.REEL_ICON_AMOUNT, gameData.ng[i].result, [test.setMark(winIcon2DPos, "#ff0000")]).setSummary(items).setDetail(gameData.ng[i].isWin, {
              winIconSymbolList: winIconSymbolList,
              odds: odds,
              megaWayCombinationCount: winCombination
            }).setSummary([[(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).text, "單次贏分"], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).symbol, "="], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).number, gameData.ng[i].score]]).setLineSummary([[(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).line, [[(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).text, "總贏分"], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).symbol, "="], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).number, totalWin]]], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).line, [[(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).text, "Test"], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).symbol, "="], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
              error: Error()
            }), SlotDataStringType) : SlotDataStringType).number, 3]]]]).combineOneRoundData();
          }

          test.setRecords();
          test.setGameMode("免費遊戲");

          for (var _i = 0; _i < gameData.fg.length; _i++) {
            for (var j = 0; j < gameData.fg[_i].length; j++) {
              totalWin += gameData.fg[_i][j].score;

              var _winIconSymbolList = gameData.fg[_i][j].winData.map(winData => winData.winIconSymbolID);

              var _odds = gameData.fg[_i][j].winData.map(winData => winData.winOdds.fixed());

              var _winCombination = gameData.fg[_i][j].winData.map(winData => winData.winCombination.fixed());

              var _winIcon2DPos = this.convertIconPosInToReelPos(gameData.fg[_i][j].winIconPos);

              if (j === 0) {
                test.setTitle([[(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                  error: Error()
                }), SlotDataStringType) : SlotDataStringType).text, "免費遊戲"], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                  error: Error()
                }), SlotDataStringType) : SlotDataStringType).number, _i + 1]]);
              } else {
                test.setTitle([[(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                  error: Error()
                }), SlotDataStringType) : SlotDataStringType).text, "免費遊戲"], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                  error: Error()
                }), SlotDataStringType) : SlotDataStringType).number, _i + 1], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                  error: Error()
                }), SlotDataStringType) : SlotDataStringType).symbol, "-"], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                  error: Error()
                }), SlotDataStringType) : SlotDataStringType).text, "重新旋轉"], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                  error: Error()
                }), SlotDataStringType) : SlotDataStringType).number, j]]);
              }

              var addIconList = this.getAddIconList(gameData.fg[_i][j].winIconPos, gameData.fg[_i][j].result);
              test.processIconData(ConfigGame.REEL_AMOUNT, ConfigGame.REEL_ICON_AMOUNT, gameData.fg[_i][j].result, [test.setMark(_winIcon2DPos, "#FF0000"), test.addIconList(2, ConfigGame.REEL_AMOUNT, gameData.fg[_i][j].winIconPos, addIconList) //this.addIconList2Example(gameData.fg[i][j].winIconPos, gameData.fg[i][j].result)
              ]).setSummary([[(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).text, "加成倍數"], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).symbol, "="], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).number, gameData.fg[_i][j].multiplyOdds], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).symbol, "("], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).number, gameData.fg[_i][j].orangeHandPrintCount], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).symbol, "/"], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).number, 5], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).symbol, ")"]]).setSummary([[(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).text, "免費旋轉局數"], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).symbol, "="], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).number, gameData.fg[_i][j].remainCount], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).symbol, "("], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).number, gameData.fg[_i][j].purpleHandPrintCount], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).symbol, "/"], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).number, 5], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).symbol, ")"]]).setDetail(gameData.fg[_i][j].isWin, {
                winIconSymbolList: _winIconSymbolList,
                odds: _odds,
                megaWayCombinationCount: _winCombination
              }).setSummary([[(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).text, "單次贏分"], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).symbol, "="], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).number, gameData.fg[_i][j].score]]).setSummary([[(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).text, "總贏分"], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).symbol, "="], [(_crd && SlotDataStringType === void 0 ? (_reportPossibleCrUseOfSlotDataStringType({
                error: Error()
              }), SlotDataStringType) : SlotDataStringType).number, totalWin]]).combineOneRoundData();
            }

            test.setRecords();
          }

          var result = test.getFinalSlotData();
          var gameRecordAST = {
            ast: result,
            icons: icons
          };
          return gameRecordAST;
        }

        addIconList2Example(posList, result) {
          return list => {
            var newList = [...list];

            for (var i = 0; i < posList.length; i++) {
              var pos = posList[i];
              var MeowData = new (_crd && SlotDataIconData === void 0 ? (_reportPossibleCrUseOfSlotDataIconData({
                error: Error()
              }), SlotDataIconData) : SlotDataIconData)();
              MeowData.x = Math.floor(pos / ConfigGame.REEL_AMOUNT) + 1;
              MeowData.y = pos % ConfigGame.REEL_AMOUNT + 1;
              MeowData.icon = ConfigGame.ORANGE_SYMBOL.includes(result[pos]) ? 13 : 14;
              MeowData.z = 2;
              newList.push(MeowData);
            }

            return newList;
          };
        }

        getAddIconList(posList, result) {
          var addIconList = [];

          for (var i = 0; i < posList.length; i++) {
            var pos = posList[i];
            addIconList.push(ConfigGame.ORANGE_SYMBOL.includes(result[pos]) ? 13 : 14);
          }

          return addIconList;
        }

        convertIconPosInToReelPos(iconPos) {
          var returnPos = Array.from({
            length: ConfigGame.REEL_AMOUNT
          }, () => []);

          for (var i = 0; i < iconPos.length; i++) {
            var reelID = Math.floor(iconPos[i] / ConfigGame.REEL_ICON_AMOUNT);
            returnPos[reelID].push(iconPos[i] % ConfigGame.REEL_ICON_AMOUNT);
          }

          return returnPos;
        }

      });

      _export("GameDataGame", GameDataGame = class GameDataGame {
        constructor() {
          this.ng = [];
          this.fg = [];
          this.fgWin = 0;
          this.coin = 0;
          this.bet = 0;
          this.score = 0;
        }

      });

      _export("RoundResult", RoundResult = class RoundResult {
        constructor() {
          this.result = [];
          this.lockIconPos = [];
          this.unLockStartPos = [];
          this.unLockPos = [];
          this.orangeHandPrintCount = 0;
          this.purpleHandPrintCount = 0;
          this.multiplyOdds = 0;
          this.remainCount = 0;
          this.isWin = false;
          this.winIconPos = [];
          this.winData = [];
          this.score = 0;
          this.odds = 0;
        }

      });

      _export("WinData", WinData = class WinData {
        constructor() {
          this.winIconSymbolID = 0;
          this.winOdds = 0;
          this.winCombination = 0;
          this.orangePos = [];
          this.purplePos = [];
        }

      });

      _export("SymbolType", SymbolType = /*#__PURE__*/function (SymbolType) {
        SymbolType[SymbolType["AUMO"] = 0] = "AUMO";
        SymbolType[SymbolType["SIAMESE"] = 1] = "SIAMESE";
        SymbolType[SymbolType["ERHU"] = 2] = "ERHU";
        SymbolType[SymbolType["DAJU"] = 3] = "DAJU";
        SymbolType[SymbolType["D_K"] = 4] = "D_K";
        SymbolType[SymbolType["C_K"] = 5] = "C_K";
        SymbolType[SymbolType["D_Q"] = 6] = "D_Q";
        SymbolType[SymbolType["C_Q"] = 7] = "C_Q";
        SymbolType[SymbolType["D_J"] = 8] = "D_J";
        SymbolType[SymbolType["C_J"] = 9] = "C_J";
        SymbolType[SymbolType["INFORMATION"] = 10] = "INFORMATION";
        return SymbolType;
      }({}));

      (function (_ConfigGame) {
        var PROJECT_NAME = _ConfigGame.PROJECT_NAME = "Game1015";
        var REEL_AMOUNT = _ConfigGame.REEL_AMOUNT = 5;
        var REEL_ICON_AMOUNT = _ConfigGame.REEL_ICON_AMOUNT = 5;
        var ALL_ICONS_AMOUNT = _ConfigGame.ALL_ICONS_AMOUNT = REEL_AMOUNT * REEL_ICON_AMOUNT;
        var SYMBOL_LIST = _ConfigGame.SYMBOL_LIST = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var INFORMATION_SYMBOL = _ConfigGame.INFORMATION_SYMBOL = SymbolType.INFORMATION;
        var BOARD_ORDER = _ConfigGame.BOARD_ORDER = [0, 5, 10, 15, 20, 1, 6, 11, 16, 21, 2, 7, 12, 17, 22, 3, 8, 13, 18, 23, 4, 9, 14, 19, 24];
        var DEFAULT_LOCK_POS = _ConfigGame.DEFAULT_LOCK_POS = [0, 1, 3, 4, 5, 9, 15, 19, 20, 21, 23, 24];
        var FG_DEFAULT_MULTIPLE = _ConfigGame.FG_DEFAULT_MULTIPLE = 2;
        var FG_DEFAULT_FREE_SPIN = _ConfigGame.FG_DEFAULT_FREE_SPIN = 2;
        var COLLECT_MAX_HAND_PRINT = _ConfigGame.COLLECT_MAX_HAND_PRINT = 5;
        var HIGH_SCORE_SYMBOL = _ConfigGame.HIGH_SCORE_SYMBOL = [SymbolType.AUMO, SymbolType.SIAMESE, SymbolType.ERHU, SymbolType.DAJU];
        var ORANGE_SYMBOL = _ConfigGame.ORANGE_SYMBOL = [SymbolType.AUMO, SymbolType.ERHU, SymbolType.D_K, SymbolType.D_Q, SymbolType.D_J];
        var PURPLE_SYMBOL = _ConfigGame.PURPLE_SYMBOL = [SymbolType.SIAMESE, SymbolType.DAJU, SymbolType.C_K, SymbolType.C_Q, SymbolType.C_J];
        var FG_TRANSITION_WAIT_TIME = _ConfigGame.FG_TRANSITION_WAIT_TIME = 5;
        var NORMAL_NEXT_ROUND_DELAY_TIME = _ConfigGame.NORMAL_NEXT_ROUND_DELAY_TIME = 0.5;
        var TURBO_NEXT_ROUND_DELAY_TIME = _ConfigGame.TURBO_NEXT_ROUND_DELAY_TIME = 0.4;
        var SYMBOL_0_ODDS = _ConfigGame.SYMBOL_0_ODDS = [0, 0, 2, 6, 20];
        var SYMBOL_1_ODDS = _ConfigGame.SYMBOL_1_ODDS = [0, 0, 2, 6, 20];
        var SYMBOL_2_ODDS = _ConfigGame.SYMBOL_2_ODDS = [0, 0, 1, 3, 10];
        var SYMBOL_3_ODDS = _ConfigGame.SYMBOL_3_ODDS = [0, 0, 1, 3, 10];
        var SYMBOL_4_ODDS = _ConfigGame.SYMBOL_4_ODDS = [0, 0, 0.32, 0.8, 1.6];
        var SYMBOL_5_ODDS = _ConfigGame.SYMBOL_5_ODDS = [0, 0, 0.32, 0.8, 1.6];
        var SYMBOL_6_ODDS = _ConfigGame.SYMBOL_6_ODDS = [0, 0, 0.28, 0.6, 1.2];
        var SYMBOL_7_ODDS = _ConfigGame.SYMBOL_7_ODDS = [0, 0, 0.28, 0.6, 1.2];
        var SYMBOL_8_ODDS = _ConfigGame.SYMBOL_8_ODDS = [0, 0, 0.24, 0.48, 1];
        var SYMBOL_9_ODDS = _ConfigGame.SYMBOL_9_ODDS = [0, 0, 0.24, 0.48, 1];
        var ODDS_LIST = _ConfigGame.ODDS_LIST = [SYMBOL_0_ODDS, SYMBOL_1_ODDS, SYMBOL_2_ODDS, SYMBOL_3_ODDS, SYMBOL_4_ODDS, SYMBOL_5_ODDS, SYMBOL_6_ODDS, SYMBOL_7_ODDS, SYMBOL_8_ODDS, SYMBOL_9_ODDS];
      })(ConfigGame || _export("ConfigGame", ConfigGame = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a171299efb4ac58a45c023119c1e5c8c264e1cc9.js.map