System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, Environment, REQUEST_TIMEOUT, REQUEST_TIMEOUT_ERROR_CODE, PARSER_URL_FAIL, LoginReDispatcherConnectFail, SpinReDispatcherConnectFail, AskHistoryFail, AskHistoryRetryCount, askHistoryBodyFormat, HistoryHeightMax, ConfigType, SwitchType, ThousandPlaceType, HistoryErrorCode;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "09abcaCIfFKuoe8i4YNyb0X", "AgentDefine", undefined);

      /**
       * 環境
       */
      _export("Environment", Environment = /*#__PURE__*/function (Environment) {
        Environment[Environment["Test"] = 0] = "Test";
        Environment[Environment["Release"] = 1] = "Release";
        return Environment;
      }({})); //Default Timeout


      _export("REQUEST_TIMEOUT", REQUEST_TIMEOUT = 6000); //Default Timeout Error Code


      _export("REQUEST_TIMEOUT_ERROR_CODE", REQUEST_TIMEOUT_ERROR_CODE = -9999); //Parser Url Fail Error Code


      _export("PARSER_URL_FAIL", PARSER_URL_FAIL = -9998); //分流登入連線時敗


      _export("LoginReDispatcherConnectFail", LoginReDispatcherConnectFail = -9997); //分流Spin連線時敗


      _export("SpinReDispatcherConnectFail", SpinReDispatcherConnectFail = -9996); //歷史紀錄請求失敗


      _export("AskHistoryFail", AskHistoryFail = -9995); //歷程請求重試次數


      _export("AskHistoryRetryCount", AskHistoryRetryCount = 3); //ConnectSettingList
      //PlayerInfo
      //歷史紀錄
      //遊戲相關web設定


      //遊戲歷程請求格式
      _export("askHistoryBodyFormat", askHistoryBodyFormat = "{平台}:{暱稱}:{GameCode}:{歷程高度}"); //遊戲歷程高度最大值


      _export("HistoryHeightMax", HistoryHeightMax = 100); //歷程高度回傳格式


      //ConfigType
      _export("ConfigType", ConfigType = /*#__PURE__*/function (ConfigType) {
        ConfigType["SLOT"] = "Slot";
        ConfigType["Fish"] = "Fish";
        return ConfigType;
      }({})); //開關類型


      _export("SwitchType", SwitchType = /*#__PURE__*/function (SwitchType) {
        SwitchType["Normal"] = "Normal";
        SwitchType["Close"] = "Close";
        return SwitchType;
      }({})); //千分位類型


      _export("ThousandPlaceType", ThousandPlaceType = /*#__PURE__*/function (ThousandPlaceType) {
        ThousandPlaceType["ENG"] = "ENG";
        ThousandPlaceType["EUR"] = "EUR";
        return ThousandPlaceType;
      }({}));

      _export("HistoryErrorCode", HistoryErrorCode = {
        "0\tdata is nothing": -9994,
        "0\taccount error": -9993,
        "0\ttable error": -9992,
        "0\tid error": -9991,
        "0\tdb error": -9990
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=55c08423a6e495f5181c7588593ba2fb12cef486.js.map