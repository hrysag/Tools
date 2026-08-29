System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, WinType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "536f2X1BbdMSbhfy7hIewTd", "ShowWinDef", undefined);

      _export("WinType", WinType = /*#__PURE__*/function (WinType) {
        WinType[WinType["EpicWin"] = 0] = "EpicWin";
        WinType[WinType["MegaWin"] = 1] = "MegaWin";
        WinType[WinType["SuperWin"] = 2] = "SuperWin";
        WinType[WinType["BigWin"] = 3] = "BigWin";
        return WinType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f867758e2392edb0a9a9cf78edc5dc49a3ddb458.js.map