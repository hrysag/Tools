System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, RPSWildResult, RPSWildValue, RPSWild_AniState, RPSWildState;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f7637JC7aZAmYLYvUbrzWIb", "RPSWildDef", undefined);

      _export("RPSWildResult", RPSWildResult = /*#__PURE__*/function (RPSWildResult) {
        RPSWildResult[RPSWildResult["P"] = 0] = "P";
        RPSWildResult[RPSWildResult["S"] = 1] = "S";
        RPSWildResult[RPSWildResult["R"] = 2] = "R";
        return RPSWildResult;
      }({}));

      _export("RPSWildValue", RPSWildValue = /*#__PURE__*/function (RPSWildValue) {
        RPSWildValue[RPSWildValue["P"] = 8] = "P";
        RPSWildValue[RPSWildValue["S"] = 6] = "S";
        RPSWildValue[RPSWildValue["R"] = 7] = "R";
        return RPSWildValue;
      }({})); //---動畫的狀態


      _export("RPSWild_AniState", RPSWild_AniState = /*#__PURE__*/function (RPSWild_AniState) {
        RPSWild_AniState["APPEAR"] = "appear";
        RPSWild_AniState["IDLE"] = "idle";
        RPSWild_AniState["CONNECT"] = "connect";
        RPSWild_AniState["BATTLE"] = "battle";
        RPSWild_AniState["ROLL"] = "roll";
        RPSWild_AniState["NEXT"] = "next";
        RPSWild_AniState["PREV"] = "prev";
        RPSWild_AniState["NUN"] = "";
        return RPSWild_AniState;
      }({}));

      _export("RPSWildState", RPSWildState = /*#__PURE__*/function (RPSWildState) {
        RPSWildState[RPSWildState["WILD_0"] = 0] = "WILD_0";
        RPSWildState[RPSWildState["WILD_1"] = 1] = "WILD_1";
        RPSWildState[RPSWildState["WILD_2"] = 2] = "WILD_2";
        RPSWildState[RPSWildState["WILD_3"] = 3] = "WILD_3";
        return RPSWildState;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=92b4a14133a5d559cb2c0f0c70d7a282e55b68ca.js.map