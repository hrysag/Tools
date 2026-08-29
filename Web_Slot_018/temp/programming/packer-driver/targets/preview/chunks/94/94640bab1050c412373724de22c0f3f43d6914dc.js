System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, DefinitionGameConfigData;

  _export("DefinitionGameConfigData", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f5989A0HqpLdINo+mt3f3gO", "DefinitionGameConfigData", undefined);

      (function (_DefinitionGameConfigData) {
        var REEL_SYMBOL_AMOUNT = _DefinitionGameConfigData.REEL_SYMBOL_AMOUNT = 3;
        var REEL_AMOUNT = _DefinitionGameConfigData.REEL_AMOUNT = 6;
        var ICONS_LENGTH = _DefinitionGameConfigData.ICONS_LENGTH = REEL_SYMBOL_AMOUNT * REEL_AMOUNT;
        var NORMAL_SYMBOL_LIST = _DefinitionGameConfigData.NORMAL_SYMBOL_LIST = [0, 1, 2, 3, 4, 5];
        var NO_MOTIONICON_LIST = _DefinitionGameConfigData.NO_MOTIONICON_LIST = [2, 3, 4, 5];
        var SPECIAL_SYMBOL_LIST = _DefinitionGameConfigData.SPECIAL_SYMBOL_LIST = [9];
        var DEFAULT_FG_ROUNDS = _DefinitionGameConfigData.DEFAULT_FG_ROUNDS = 5;
        var INSTEAD_WILD = _DefinitionGameConfigData.INSTEAD_WILD = 10;
        var CLEAR_SYMBOL_LIST = _DefinitionGameConfigData.CLEAR_SYMBOL_LIST = [6, 7, 8, 10];
        var HIGH_ODDS_SYMBOL_LIST = _DefinitionGameConfigData.HIGH_ODDS_SYMBOL_LIST = [0, 1];
        var WILD_LIST = _DefinitionGameConfigData.WILD_LIST = [6, 7, 8];
        var WILD_ID = _DefinitionGameConfigData.WILD_ID = 0;
        var STOP_CHECK = _DefinitionGameConfigData.STOP_CHECK = true;
        var ODD = _DefinitionGameConfigData.ODD = [5, 4, 3, 2.4, 2, 1.6, 1, 0.4];

        var SOUND = /*#__PURE__*/function (SOUND) {
          return SOUND;
        }({});

        _DefinitionGameConfigData.SOUND = SOUND;
        ;
        var SPECIAL_WIN_THRESHOLD = _DefinitionGameConfigData.SPECIAL_WIN_THRESHOLD = 25;
        var FORECAST_FOR_REEL = _DefinitionGameConfigData.FORECAST_FOR_REEL = 1;
        var FORECAST_REEL = _DefinitionGameConfigData.FORECAST_REEL = 4;
        var BUY_FG_MULTIPLIER = _DefinitionGameConfigData.BUY_FG_MULTIPLIER = 70;
        var PFB_SYMBOL = _DefinitionGameConfigData.PFB_SYMBOL = 'Symbol';
        var PFB_SYMBOL_ANI = _DefinitionGameConfigData.PFB_SYMBOL_ANI = 'Icon_';
        var PFB_ANI_LIST = _DefinitionGameConfigData.PFB_ANI_LIST = {
          2: 'icon_04',
          3: 'icon_05',
          5: 'icon_07',
          //--美術做的方塊和梅花的編號和server相反
          4: 'icon_06'
        };
        var BONUS_MULTIPLIER = _DefinitionGameConfigData.BONUS_MULTIPLIER = {
          1: 2,
          5: 3,
          9: 5,
          13: 10
        };
        var BONUS_MULTIPLIER_REDUCE = _DefinitionGameConfigData.BONUS_MULTIPLIER_REDUCE = {
          2: 5,
          3: 4,
          5: 3,
          10: 2
        };
        var PFB_SPINE_SKIN_ID = _DefinitionGameConfigData.PFB_SPINE_SKIN_ID = 'FG_0';
        var PFB_SYMBOL_AWARD_BOX = _DefinitionGameConfigData.PFB_SYMBOL_AWARD_BOX = 'ConnectBox';
        var CONTAINER_ANI_SYMBOL = _DefinitionGameConfigData.CONTAINER_ANI_SYMBOL = 'SymbolAniDisplayNode';
        var CONTAINER_ANI_AWARD_B = _DefinitionGameConfigData.CONTAINER_ANI_AWARD_B = 'AwardBoxNode';
        var CONTAINER_SCORE = _DefinitionGameConfigData.CONTAINER_SCORE = 'WinScoreNode';
        var CONTAINER_FORECAST = _DefinitionGameConfigData.CONTAINER_FORECAST = 'ForecastNode';
        var NG_TIPS = _DefinitionGameConfigData.NG_TIPS = ['GameMsg_018_1_1', 'GameMsg_018_1_2', 'FreeGameMsg_018_1_1', 'FreeGameMsg_018_1_2'];
      })(DefinitionGameConfigData || _export("DefinitionGameConfigData", DefinitionGameConfigData = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=94640bab1050c412373724de22c0f3f43d6914dc.js.map