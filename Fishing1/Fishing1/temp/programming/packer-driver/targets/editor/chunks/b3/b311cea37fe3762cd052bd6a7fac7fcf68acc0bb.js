System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, Requests, ResponseCodes, ErrorCode;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7e122sDiJ9J6KDsgxJhM0dO", "definitions", undefined);

      // see -> https://vgjira.atlassian.net/jira/software/c/projects/GT7/pages
      _export("Requests", Requests = /*#__PURE__*/function (Requests) {
        Requests["SelectRoom"] = "fh.fhHandler.ChoiceLobby";
        Requests["GetBalance"] = "fh.fhHandler.GetBalance";
        Requests["Exchange"] = "fh.fhHandler.Exchange";
        Requests["CashOut"] = "fh.fhHandler.Recompensate";
        Requests["LeaveRoom"] = "fh.fhHandler.LeaveRoom";
        return Requests;
      }({}));

      _export("ResponseCodes", ResponseCodes = /*#__PURE__*/function (ResponseCodes) {
        ResponseCodes["EnterLobby"] = "1";
        ResponseCodes["EnterRoom"] = "2";
        ResponseCodes["WeaponSettings"] = "3";
        ResponseCodes["FishSettings"] = "4";
        ResponseCodes["InitPlayerInfo"] = "5";
        ResponseCodes["SerialNumber"] = "6";
        ResponseCodes["Balance"] = "7";
        ResponseCodes["Exchange"] = "8";
        ResponseCodes["Point"] = "9";
        ResponseCodes["LeaveRoom"] = "10";
        ResponseCodes["CashOut"] = "11";
        ResponseCodes["NewFish"] = "12";
        return ResponseCodes;
      }({}));

      _export("ErrorCode", ErrorCode = /*#__PURE__*/function (ErrorCode) {
        ErrorCode[ErrorCode["AlreadyEnterRoom"] = 1] = "AlreadyEnterRoom";
        ErrorCode[ErrorCode["NoRoomFound"] = 2] = "NoRoomFound";
        ErrorCode[ErrorCode["UnsupportedCurrency"] = 3] = "UnsupportedCurrency";
        return ErrorCode;
      }({}));

      // TODO the rest
      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b311cea37fe3762cd052bd6a7fac7fcf68acc0bb.js.map