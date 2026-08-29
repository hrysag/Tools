System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, AutoSpinAreaType, AutoSpinAreaVisible;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d600deu2HxC647m24ONidBv", "IAutoSpinArea", undefined);

      // 區塊類型
      _export("AutoSpinAreaType", AutoSpinAreaType = /*#__PURE__*/function (AutoSpinAreaType) {
        AutoSpinAreaType[AutoSpinAreaType["Auto"] = 0] = "Auto";
        AutoSpinAreaType[AutoSpinAreaType["Condition"] = 1] = "Condition";
        AutoSpinAreaType[AutoSpinAreaType["Other"] = 2] = "Other";
        return AutoSpinAreaType;
      }({})); // 區塊可見設定


      _export("AutoSpinAreaVisible", AutoSpinAreaVisible = /*#__PURE__*/function (AutoSpinAreaVisible) {
        AutoSpinAreaVisible[AutoSpinAreaVisible["Always"] = 0] = "Always";
        AutoSpinAreaVisible[AutoSpinAreaVisible["Extension"] = 1] = "Extension";
        return AutoSpinAreaVisible;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e56f81aa5ccc0fcef3b0d3987d2cdf1a708a99f8.js.map