System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GenericUIConfig, _crd, MainUIBtnState, AUTO_INFINITY_NUMBER;

  _export("GenericUIConfig", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f33b76o0O1OFINQHcwgjery", "GenericUIConfig", undefined);

      // auto與betSelect專用
      __checkObsolete__(['_decorator', 'Component', 'Node']);

      _export("MainUIBtnState", MainUIBtnState = /*#__PURE__*/function (MainUIBtnState) {
        MainUIBtnState[MainUIBtnState["Normal"] = 0] = "Normal";
        MainUIBtnState[MainUIBtnState["UIOpen"] = 1] = "UIOpen";
        MainUIBtnState[MainUIBtnState["Disabled"] = 2] = "Disabled";
        return MainUIBtnState;
      }({}));

      _export("AUTO_INFINITY_NUMBER", AUTO_INFINITY_NUMBER = 9999);

      _export("GenericUIConfig", GenericUIConfig = class GenericUIConfig {});

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2ef1c76d7b1930a53f5ddcd8916c7561a7181e00.js.map