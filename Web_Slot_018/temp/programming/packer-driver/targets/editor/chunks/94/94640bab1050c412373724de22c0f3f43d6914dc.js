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
        const REEL_SYMBOL_AMOUNT = _DefinitionGameConfigData.REEL_SYMBOL_AMOUNT = 3;
        const REEL_AMOUNT = _DefinitionGameConfigData.REEL_AMOUNT = 6;
        const ICONS_LENGTH = _DefinitionGameConfigData.ICONS_LENGTH = REEL_SYMBOL_AMOUNT * REEL_AMOUNT;
        const NORMAL_SYMBOL_LIST = _DefinitionGameConfigData.NORMAL_SYMBOL_LIST = [0, 1, 2, 3, 4, 5];
        const NO_MOTIONICON_LIST = _DefinitionGameConfigData.NO_MOTIONICON_LIST = [2, 3, 4, 5];
        const SPECIAL_SYMBOL_LIST = _DefinitionGameConfigData.SPECIAL_SYMBOL_LIST = [9];
        const DEFAULT_FG_ROUNDS = _DefinitionGameConfigData.DEFAULT_FG_ROUNDS = 5;
        const INSTEAD_WILD = _DefinitionGameConfigData.INSTEAD_WILD = 10;
        const CLEAR_SYMBOL_LIST = _DefinitionGameConfigData.CLEAR_SYMBOL_LIST = [6, 7, 8, 10];
        const HIGH_ODDS_SYMBOL_LIST = _DefinitionGameConfigData.HIGH_ODDS_SYMBOL_LIST = [0, 1];
        const WILD_LIST = _DefinitionGameConfigData.WILD_LIST = [6, 7, 8];
        const WILD_ID = _DefinitionGameConfigData.WILD_ID = 0;
        const STOP_CHECK = _DefinitionGameConfigData.STOP_CHECK = true;
        const ODD = _DefinitionGameConfigData.ODD = [5, 4, 3, 2.4, 2, 1.6, 1, 0.4];

        let SOUND = /*#__PURE__*/function (SOUND) {
          return SOUND;
        }({});

        _DefinitionGameConfigData.SOUND = SOUND;
        ;
        const SPECIAL_WIN_THRESHOLD = _DefinitionGameConfigData.SPECIAL_WIN_THRESHOLD = 25;
        const FORECAST_FOR_REEL = _DefinitionGameConfigData.FORECAST_FOR_REEL = 1;
        const FORECAST_REEL = _DefinitionGameConfigData.FORECAST_REEL = 4;
        const BUY_FG_MULTIPLIER = _DefinitionGameConfigData.BUY_FG_MULTIPLIER = 70;
        const PFB_SYMBOL = _DefinitionGameConfigData.PFB_SYMBOL = 'Symbol';
        const PFB_SYMBOL_ANI = _DefinitionGameConfigData.PFB_SYMBOL_ANI = 'Icon_';
        const PFB_ANI_LIST = _DefinitionGameConfigData.PFB_ANI_LIST = {
          2: 'icon_04',
          3: 'icon_05',
          5: 'icon_07',
          //--美術做的方塊和梅花的編號和server相反
          4: 'icon_06'
        };
        const BONUS_MULTIPLIER = _DefinitionGameConfigData.BONUS_MULTIPLIER = {
          1: 2,
          5: 3,
          9: 5,
          13: 10
        };
        const BONUS_MULTIPLIER_REDUCE = _DefinitionGameConfigData.BONUS_MULTIPLIER_REDUCE = {
          2: 5,
          3: 4,
          5: 3,
          10: 2
        };
        const PFB_SPINE_SKIN_ID = _DefinitionGameConfigData.PFB_SPINE_SKIN_ID = 'FG_0';
        const PFB_SYMBOL_AWARD_BOX = _DefinitionGameConfigData.PFB_SYMBOL_AWARD_BOX = 'ConnectBox';
        const CONTAINER_ANI_SYMBOL = _DefinitionGameConfigData.CONTAINER_ANI_SYMBOL = 'SymbolAniDisplayNode';
        const CONTAINER_ANI_AWARD_B = _DefinitionGameConfigData.CONTAINER_ANI_AWARD_B = 'AwardBoxNode';
        const CONTAINER_SCORE = _DefinitionGameConfigData.CONTAINER_SCORE = 'WinScoreNode';
        const CONTAINER_FORECAST = _DefinitionGameConfigData.CONTAINER_FORECAST = 'ForecastNode';
        const NG_TIPS = _DefinitionGameConfigData.NG_TIPS = ['GameMsg_018_1_1', 'GameMsg_018_1_2', 'FreeGameMsg_018_1_1', 'FreeGameMsg_018_1_2'];
      })(DefinitionGameConfigData || _export("DefinitionGameConfigData", DefinitionGameConfigData = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=94640bab1050c412373724de22c0f3f43d6914dc.js.map