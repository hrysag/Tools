System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Layers, _crd, SlotRelayLang, OrientationMode, GenericSound, WinType, GameMode, Orientation, BuyFGType, MyLayer, ButtonStatus;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Layers = _cc.Layers;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "50eb2rO2G5GsqDW2GI9N8ro", "Config", undefined);

      __checkObsolete__(['Layers']);

      _export("SlotRelayLang", SlotRelayLang = /*#__PURE__*/function (SlotRelayLang) {
        SlotRelayLang[SlotRelayLang["tw"] = 0] = "tw";
        SlotRelayLang[SlotRelayLang["cn"] = 1] = "cn";
        SlotRelayLang[SlotRelayLang["en"] = 2] = "en";
        SlotRelayLang[SlotRelayLang["vn"] = 3] = "vn";
        SlotRelayLang[SlotRelayLang["jp"] = 4] = "jp";
        SlotRelayLang[SlotRelayLang["th"] = 5] = "th";
        SlotRelayLang[SlotRelayLang["es"] = 6] = "es";
        SlotRelayLang[SlotRelayLang["kr"] = 7] = "kr";
        return SlotRelayLang;
      }({}));

      _export("OrientationMode", OrientationMode = /*#__PURE__*/function (OrientationMode) {
        OrientationMode[OrientationMode["Both"] = 0] = "Both";
        OrientationMode[OrientationMode["Landscape"] = 1] = "Landscape";
        OrientationMode[OrientationMode["Portrait"] = 2] = "Portrait";
        return OrientationMode;
      }({}));

      _export("GenericSound", GenericSound = /*#__PURE__*/function (GenericSound) {
        GenericSound[GenericSound["Public_Choice"] = 0] = "Public_Choice";
        GenericSound[GenericSound["Public_On"] = 1] = "Public_On";
        GenericSound[GenericSound["Public_Off"] = 2] = "Public_Off";
        return GenericSound;
      }({}));

      _export("WinType", WinType = /*#__PURE__*/function (WinType) {
        WinType[WinType["EpicWin"] = 0] = "EpicWin";
        WinType[WinType["MegaWin"] = 1] = "MegaWin";
        WinType[WinType["SuperWin"] = 2] = "SuperWin";
        WinType[WinType["BigWin"] = 3] = "BigWin";
        return WinType;
      }({}));

      _export("GameMode", GameMode = /*#__PURE__*/function (GameMode) {
        GameMode[GameMode["OfflineDemo"] = 0] = "OfflineDemo";
        GameMode[GameMode["OnlineTest"] = 1] = "OnlineTest";
        GameMode[GameMode["Online"] = 2] = "Online";
        return GameMode;
      }({}));

      _export("Orientation", Orientation = /*#__PURE__*/function (Orientation) {
        Orientation[Orientation["Landscape"] = 1] = "Landscape";
        Orientation[Orientation["Portrait"] = 2] = "Portrait";
        return Orientation;
      }({}));

      _export("BuyFGType", BuyFGType = /*#__PURE__*/function (BuyFGType) {
        BuyFGType[BuyFGType["None"] = 0] = "None";
        BuyFGType[BuyFGType["OddsUpFG"] = 1] = "OddsUpFG";
        BuyFGType[BuyFGType["BuyFG"] = 2] = "BuyFG";
        BuyFGType[BuyFGType["BuyBG"] = 3] = "BuyBG";
        BuyFGType[BuyFGType["BuyFGTwoHitOne"] = 4] = "BuyFGTwoHitOne";
        BuyFGType[BuyFGType["BuySuperFG"] = 5] = "BuySuperFG";
        BuyFGType[BuyFGType["BuyOther1"] = 101] = "BuyOther1";
        BuyFGType[BuyFGType["BuyOther2"] = 102] = "BuyOther2";
        BuyFGType[BuyFGType["BuyOther3"] = 103] = "BuyOther3";
        return BuyFGType;
      }({})); // 自定義的Layer，可以直接指定給node.layer使用 


      _export("MyLayer", MyLayer = function (MyLayer) {
        MyLayer[MyLayer["LAYER_18"] = 1 << Layers.nameToLayer("LAYER_18")] = "LAYER_18";
        MyLayer[MyLayer["LAYER_19"] = 1 << Layers.nameToLayer("LAYER_19")] = "LAYER_19";
        return MyLayer;
      }({}));

      _export("ButtonStatus", ButtonStatus = /*#__PURE__*/function (ButtonStatus) {
        ButtonStatus["Normal"] = "normal";
        ButtonStatus["Pressed"] = "pressed";
        ButtonStatus["Hover"] = "hover";
        ButtonStatus["Disabled"] = "disabled";
        return ButtonStatus;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=485b8de332a52e45eb3e8ed469b7775cf01e831f.js.map