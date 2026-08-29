System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, CCommand, CCommandStatus, AdditionalPurchaseType, CConnectError;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "91e0du7dVZA7aZq5QmY4/gs", "CConnectDefine", undefined);

      _export("CCommand", CCommand = /*#__PURE__*/function (CCommand) {
        CCommand[CCommand["Login"] = 1] = "Login";
        CCommand[CCommand["Spin"] = 2] = "Spin";
        CCommand[CCommand["Join"] = 31] = "Join";
        CCommand[CCommand["LeaveService"] = 32] = "LeaveService";
        CCommand[CCommand["Logout"] = 33] = "Logout";
        CCommand[CCommand["Connect"] = 112] = "Connect";
        CCommand[CCommand["ReConnect"] = 113] = "ReConnect";
        CCommand[CCommand["Life"] = 255] = "Life";
        return CCommand;
      }({})); //Login Status


      _export("CCommandStatus", CCommandStatus = /*#__PURE__*/function (CCommandStatus) {
        CCommandStatus[CCommandStatus["Failure"] = 0] = "Failure";
        CCommandStatus[CCommandStatus["Success"] = 1] = "Success";
        CCommandStatus[CCommandStatus["PlayerNotFound"] = 2] = "PlayerNotFound";
        CCommandStatus[CCommandStatus["PlatformNOResponse"] = 3] = "PlatformNOResponse";
        CCommandStatus[CCommandStatus["ParameterError"] = 4] = "ParameterError";
        CCommandStatus[CCommandStatus["ServerSettingError"] = 5] = "ServerSettingError";
        CCommandStatus[CCommandStatus["PlatformNotFound"] = 6] = "PlatformNotFound";
        CCommandStatus[CCommandStatus["InsufficientBalance"] = 7] = "InsufficientBalance";
        CCommandStatus[CCommandStatus["Timeout"] = 8] = "Timeout";
        CCommandStatus[CCommandStatus["BalanceError"] = 9] = "BalanceError";
        CCommandStatus[CCommandStatus["AlreadyLoggedIn"] = 10] = "AlreadyLoggedIn";
        CCommandStatus[CCommandStatus["PlatformResponseParameterError"] = 11] = "PlatformResponseParameterError";
        CCommandStatus[CCommandStatus["PlatformVerificationFailure"] = 12] = "PlatformVerificationFailure";
        CCommandStatus[CCommandStatus["SubPlatformVerificationFailure"] = 13] = "SubPlatformVerificationFailure";
        CCommandStatus[CCommandStatus["PlatformExceptionError"] = 254] = "PlatformExceptionError";
        CCommandStatus[CCommandStatus["None"] = 255] = "None";
        return CCommandStatus;
      }({})); //加購類型


      _export("AdditionalPurchaseType", AdditionalPurchaseType = /*#__PURE__*/function (AdditionalPurchaseType) {
        AdditionalPurchaseType[AdditionalPurchaseType["None"] = 0] = "None";
        AdditionalPurchaseType[AdditionalPurchaseType["RiseFGRate"] = 1] = "RiseFGRate";
        AdditionalPurchaseType[AdditionalPurchaseType["FG"] = 2] = "FG";
        AdditionalPurchaseType[AdditionalPurchaseType["BG"] = 3] = "BG";
        AdditionalPurchaseType[AdditionalPurchaseType["FG_2"] = 4] = "FG_2";
        AdditionalPurchaseType[AdditionalPurchaseType["SuperFG"] = 5] = "SuperFG";
        AdditionalPurchaseType[AdditionalPurchaseType["Other_1"] = 101] = "Other_1";
        AdditionalPurchaseType[AdditionalPurchaseType["Other_2"] = 102] = "Other_2";
        AdditionalPurchaseType[AdditionalPurchaseType["Other_3"] = 103] = "Other_3";
        return AdditionalPurchaseType;
      }({}));

      _export("CConnectError", CConnectError = /*#__PURE__*/function (CConnectError) {
        CConnectError[CConnectError["DispatcherNotFound"] = -9981] = "DispatcherNotFound";
        CConnectError[CConnectError["DispatcherConnectFail"] = -9982] = "DispatcherConnectFail";
        CConnectError[CConnectError["DispatcherConnectTimeout"] = -9983] = "DispatcherConnectTimeout";
        CConnectError[CConnectError["ReDispatcherNotFound"] = -9971] = "ReDispatcherNotFound";
        CConnectError[CConnectError["ReDispatcherConnectFail"] = -9972] = "ReDispatcherConnectFail";
        CConnectError[CConnectError["ReDispatcherConnectTimeout"] = -9973] = "ReDispatcherConnectTimeout";
        return CConnectError;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cb450ce9065f43eb05f0a9fc4cd6e62c636edd9b.js.map