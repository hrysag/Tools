System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _crd, FG_BonusSkinState, FG_BonusAniState, FG_BonusLevel;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b17b9TThXFMUaI+o39tLprq", "FG_bonusDataDef", undefined);

      __checkObsolete__(['Vec3']);

      _export("FG_BonusSkinState", FG_BonusSkinState = /*#__PURE__*/function (FG_BonusSkinState) {
        FG_BonusSkinState["Sub_01"] = "_sub_01";
        FG_BonusSkinState["Sub_05"] = "_sub_05";
        FG_BonusSkinState["Sub_09"] = "_sub_09";
        FG_BonusSkinState["Sub_13"] = "_sub_13";
        FG_BonusSkinState["Sub_normal"] = "_sub_normal";
        return FG_BonusSkinState;
      }({}));

      _export("FG_BonusAniState", FG_BonusAniState = /*#__PURE__*/function (FG_BonusAniState) {
        FG_BonusAniState["ON"] = "on";
        FG_BonusAniState["OFF"] = "off";
        FG_BonusAniState["ON_TO_OFF"] = "on_to_off";
        FG_BonusAniState["OFF_TO_ON"] = "off_to_on";
        return FG_BonusAniState;
      }({}));

      _export("FG_BonusLevel", FG_BonusLevel = /*#__PURE__*/function (FG_BonusLevel) {
        FG_BonusLevel[FG_BonusLevel["L1"] = 0] = "L1";
        FG_BonusLevel[FG_BonusLevel["L2"] = 4] = "L2";
        FG_BonusLevel[FG_BonusLevel["L3"] = 8] = "L3";
        FG_BonusLevel[FG_BonusLevel["L4"] = 12] = "L4";
        return FG_BonusLevel;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9f27a018f1bcba7141ca0e5d71ac7b75faf05e1a.js.map