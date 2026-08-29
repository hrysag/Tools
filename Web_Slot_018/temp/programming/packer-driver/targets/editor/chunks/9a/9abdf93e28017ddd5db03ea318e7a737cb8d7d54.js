System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, ErrorCode, ErrorCodeEventProcess, ErrorCodeToTitle, ErrorCodeToMsg, ErrorCodeCancelEvent, ErrorCodeNoShowBGEvent, DefaultTitle, DefaultMsg, MessageReplaceFlag, ErrorTitleLanguageKey, ErrorMessageLanguageKey, ShowErrorCodeFlag;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b34f9hJu3xCK6z+JXLNJw1o", "ErrorHandleDefine", undefined);

      // import { error } from "console";
      //Error Code
      _export("ErrorCode", ErrorCode = /*#__PURE__*/function (ErrorCode) {
        ErrorCode[ErrorCode["Failure"] = 0] = "Failure";
        ErrorCode[ErrorCode["Success"] = 1] = "Success";
        ErrorCode[ErrorCode["PlayerNotFound"] = 2] = "PlayerNotFound";
        ErrorCode[ErrorCode["PlatformNOResponse"] = 3] = "PlatformNOResponse";
        ErrorCode[ErrorCode["ParameterError"] = 4] = "ParameterError";
        ErrorCode[ErrorCode["ServerSettingError"] = 5] = "ServerSettingError";
        ErrorCode[ErrorCode["PlatformNotFound"] = 6] = "PlatformNotFound";
        ErrorCode[ErrorCode["InsufficientBalance"] = 7] = "InsufficientBalance";
        ErrorCode[ErrorCode["Timeout"] = 8] = "Timeout";
        ErrorCode[ErrorCode["BalanceError"] = 9] = "BalanceError";
        ErrorCode[ErrorCode["AlreadyLoggedIn"] = 10] = "AlreadyLoggedIn";
        ErrorCode[ErrorCode["PlatformResponseParameterError"] = 11] = "PlatformResponseParameterError";
        ErrorCode[ErrorCode["PlatformVerificationFailure"] = 12] = "PlatformVerificationFailure";
        ErrorCode[ErrorCode["SubPlatformVerificationFailure"] = 13] = "SubPlatformVerificationFailure";
        ErrorCode[ErrorCode["PlatformExceptionError"] = 254] = "PlatformExceptionError";
        ErrorCode[ErrorCode["None"] = 255] = "None";
        ErrorCode[ErrorCode["ServerKick"] = -1] = "ServerKick";
        ErrorCode[ErrorCode["PARSER_URL_FAIL"] = -9998] = "PARSER_URL_FAIL";
        ErrorCode[ErrorCode["Client_Timeout"] = -9999] = "Client_Timeout";
        ErrorCode[ErrorCode["Client_LoginFail"] = -10000] = "Client_LoginFail";
        ErrorCode[ErrorCode["Click_ReqUserFail"] = -20000] = "Click_ReqUserFail";
        ErrorCode[ErrorCode["Client_BetError"] = -30000] = "Client_BetError";
        ErrorCode[ErrorCode["Client_BetBankruptcy"] = -30001] = "Client_BetBankruptcy";
        ErrorCode[ErrorCode["Client_IdleTimeout"] = -40002] = "Client_IdleTimeout";
        ErrorCode[ErrorCode["Client_CalculateError"] = -50001] = "Client_CalculateError";
        ErrorCode[ErrorCode["Client_BuyFeatureError"] = -60001] = "Client_BuyFeatureError";
        ErrorCode[ErrorCode["Client_UNKNOWN"] = -7777] = "Client_UNKNOWN";
        ErrorCode[ErrorCode["Client_None"] = -255] = "Client_None";
        return ErrorCode;
      }({})); //Error Event Process


      _export("ErrorCodeEventProcess", ErrorCodeEventProcess = /*#__PURE__*/function (ErrorCodeEventProcess) {
        ErrorCodeEventProcess[ErrorCodeEventProcess["Default"] = 0] = "Default";
        ErrorCodeEventProcess[ErrorCodeEventProcess["Back"] = 1] = "Back";
        return ErrorCodeEventProcess;
      }({})); //錯誤代碼對應要顯示的Title


      _export("ErrorCodeToTitle", ErrorCodeToTitle = {
        Default_Title: [ErrorCode.Client_IdleTimeout, //ok
        ErrorCode.Timeout, //??? 是否為Server發現App無回應斷線
        ErrorCode.AlreadyLoggedIn, //??? 是不是我登入時，線上已有同樣user在線?
        ErrorCode.Client_CalculateError, //ok
        ErrorCode.Client_Timeout, //ok 玩家指令送出無回應
        ErrorCode.Client_LoginFail, //ok
        ErrorCode.Click_ReqUserFail, //ok
        ErrorCode.Client_BetError, //ok
        ErrorCode.BalanceError, // 餘額錯誤
        ErrorCode.ServerSettingError, // 伺服器設定錯誤
        ErrorCode.Failure, // 失敗
        ErrorCode.ParameterError, // 參數錯誤
        ErrorCode.PlayerNotFound, // 玩家不存在
        ErrorCode.PlatformResponseParameterError, // 平台回傳參數錯誤
        ErrorCode.PlatformNotFound, // 無此平台
        ErrorCode.PlatformExceptionError, // 平台例外錯誤
        ErrorCode.PlatformVerificationFailure, // 平台登入驗證失敗
        ErrorCode.SubPlatformVerificationFailure, // 平台Bet驗證失敗
        ErrorCode.PlatformNOResponse, // 平台沒有回應
        ErrorCode.None, // 無
        ErrorCode.ServerKick, // Server端斷線玩家
        ErrorCode.Client_BetBankruptcy, //ok
        ErrorCode.InsufficientBalance, //ok
        ErrorCode.ParameterError, ErrorCode.Client_BuyFeatureError]
      }); //錯誤代碼對應要顯示的訊息


      _export("ErrorCodeToMsg", ErrorCodeToMsg = {
        //閒置過久，請重新進入遊戲
        ConnectTimeout: [ErrorCode.Client_IdleTimeout //ok
        ],
        //連線中斷，請重新進入遊戲 
        Disconnect: [ErrorCode.Client_Timeout, //玩家指令送出無回應
        ErrorCode.None, // 無
        ErrorCode.ServerKick, // Server端斷線玩家
        ErrorCode.SubPlatformVerificationFailure, // 平台Bet驗證失敗
        ErrorCode.Failure, // 失敗
        ErrorCode.PlayerNotFound, // 玩家不存在
        ErrorCode.PlatformNOResponse, // 平台沒有回應
        ErrorCode.PlatformResponseParameterError, // 平台回傳參數錯誤
        ErrorCode.PlatformVerificationFailure, // 平台登入驗證失敗
        ErrorCode.ServerSettingError, // 伺服器設定錯誤
        ErrorCode.PlatformNotFound, // 無此平台
        ErrorCode.InsufficientBalance, //餘額不足
        ErrorCode.Timeout, //Timeout
        ErrorCode.BalanceError, // 餘額錯誤
        ErrorCode.AlreadyLoggedIn, //已登入
        ErrorCode.PlatformExceptionError, // 平台例外錯誤
        ErrorCode.ParameterError, // 參數錯誤
        ErrorCode.PARSER_URL_FAIL //Parser Url Fail Error Code
        ],
        //連線異常，請重新進入遊戲
        UnstableConnection: [ErrorCode.Client_CalculateError, //ok
        ErrorCode.Client_LoginFail, //ok
        ErrorCode.Click_ReqUserFail, //ok
        ErrorCode.Client_BetError //ok
        ],
        //系統異常，請截圖聯繫客服
        SystemException: [],
        //系統維護中
        UnderMaintenance: [],
        //餘額不足無法進行遊戲
        NoMoneyAvailable: [ErrorCode.Client_BetBankruptcy //ok
        ],
        //購買特色失敗的
        BuyFeatureError: [ErrorCode.Client_BuyFeatureError //ok
        ]
      }); //有需要Cancel 處理的 Error


      _export("ErrorCodeCancelEvent", ErrorCodeCancelEvent = {
        CanCancel: [ErrorCode.Client_BetBankruptcy]
      }); //不需要顯示BG 的 Event


      _export("ErrorCodeNoShowBGEvent", ErrorCodeNoShowBGEvent = []); //預設的Error Title


      _export("DefaultTitle", DefaultTitle = "Default_Title"); //預設的 Error Message


      _export("DefaultMsg", DefaultMsg = "Default_Msg"); //Error Message replace flag


      _export("MessageReplaceFlag", MessageReplaceFlag = "{%d}"); //Error Handle 錯誤的語系key資料


      _export("ErrorTitleLanguageKey", ErrorTitleLanguageKey = "ErrorTitle.");

      _export("ErrorMessageLanguageKey", ErrorMessageLanguageKey = "ErrorMessage."); //是否要顯示Error Code


      _export("ShowErrorCodeFlag", ShowErrorCodeFlag = true);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9abdf93e28017ddd5db03ea318e7a737cb8d7d54.js.map