System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Localization, ErrorCodeToMsg, ErrorCodeToTitle, ErrorCodeEventProcess, MessageReplaceFlag, ShowErrorCodeFlag, DefaultTitle, DefaultMsg, ErrorMessageLanguageKey, ErrorTitleLanguageKey, ErrorHandler, _crd, ImportantErrorCountMax;

  function _reportPossibleCrUseOfLocalization(extras) {
    _reporterNs.report("Localization", "../GameScripts/Localization", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCode(extras) {
    _reporterNs.report("ErrorCode", "./ErrorHandleDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodeToMsg(extras) {
    _reporterNs.report("ErrorCodeToMsg", "./ErrorHandleDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodeToTitle(extras) {
    _reporterNs.report("ErrorCodeToTitle", "./ErrorHandleDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCodeEventProcess(extras) {
    _reporterNs.report("ErrorCodeEventProcess", "./ErrorHandleDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageReplaceFlag(extras) {
    _reporterNs.report("MessageReplaceFlag", "./ErrorHandleDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowErrorCodeFlag(extras) {
    _reporterNs.report("ShowErrorCodeFlag", "./ErrorHandleDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDefaultTitle(extras) {
    _reporterNs.report("DefaultTitle", "./ErrorHandleDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDefaultMsg(extras) {
    _reporterNs.report("DefaultMsg", "./ErrorHandleDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorMessageLanguageKey(extras) {
    _reporterNs.report("ErrorMessageLanguageKey", "./ErrorHandleDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorTitleLanguageKey(extras) {
    _reporterNs.report("ErrorTitleLanguageKey", "./ErrorHandleDefine", _context.meta, extras);
  }

  _export("ErrorHandler", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Localization = _unresolved_2.Localization;
    }, function (_unresolved_3) {
      ErrorCodeToMsg = _unresolved_3.ErrorCodeToMsg;
      ErrorCodeToTitle = _unresolved_3.ErrorCodeToTitle;
      ErrorCodeEventProcess = _unresolved_3.ErrorCodeEventProcess;
      MessageReplaceFlag = _unresolved_3.MessageReplaceFlag;
      ShowErrorCodeFlag = _unresolved_3.ShowErrorCodeFlag;
      DefaultTitle = _unresolved_3.DefaultTitle;
      DefaultMsg = _unresolved_3.DefaultMsg;
      ErrorMessageLanguageKey = _unresolved_3.ErrorMessageLanguageKey;
      ErrorTitleLanguageKey = _unresolved_3.ErrorTitleLanguageKey;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f7886N1jmBLB7mqUerKS1vp", "ErrorHandler", undefined);

      //最多顯示重要錯誤的次數
      ImportantErrorCountMax = 1; // 定義顯示錯誤訊息的回調函數類型

      _export("ErrorHandler", ErrorHandler = class ErrorHandler {
        constructor() {
          this._importantErrorCount = 0;
          this.showErrorMessageCallback = null;
        }

        static get Instance() {
          if (ErrorHandler.s_Instance == null) {
            ErrorHandler.s_Instance = new ErrorHandler();
          }

          return ErrorHandler.s_Instance;
        }
        /**
         * 設定顯示錯誤訊息的回調函數
         * 應該在 GameRoot 初始化時調用，將 MessageBox.instance.showMsgBox 注入
         * @param callback 顯示錯誤訊息的回調函數
         */


        setShowErrorMessageCallback(callback) {
          this.showErrorMessageCallback = callback;
        } //觸發 Error Code


        TriggerError(errorCode, isShowConfirm = false, callback) {
          const title = this.getTitle(errorCode);
          const content = this.getContent(errorCode);
          const confirm = this.getConfirmEvent(errorCode); // 使用注入的回調函數顯示錯誤訊息

          if (this.showErrorMessageCallback) {
            this.showErrorMessageCallback(title, content, isShowConfirm, callback);
          } else {
            // 如果沒有設定回調，至少在 console 顯示錯誤
            console.error(`[ErrorHandler] ${title}: ${content} (ErrorCode: ${errorCode})`);
          }
        } //取得Error title


        getTitle(errorCode) {
          let title = (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
            error: Error()
          }), Localization) : Localization).instance.t((_crd && ErrorTitleLanguageKey === void 0 ? (_reportPossibleCrUseOfErrorTitleLanguageKey({
            error: Error()
          }), ErrorTitleLanguageKey) : ErrorTitleLanguageKey) + (_crd && DefaultTitle === void 0 ? (_reportPossibleCrUseOfDefaultTitle({
            error: Error()
          }), DefaultTitle) : DefaultTitle));

          for (let errorTitle in _crd && ErrorCodeToTitle === void 0 ? (_reportPossibleCrUseOfErrorCodeToTitle({
            error: Error()
          }), ErrorCodeToTitle) : ErrorCodeToTitle) {
            const errorCodeArray = ErrorCodeToTitle[errorTitle];

            if (errorCodeArray.indexOf(errorCode) != -1) {
              title = (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
                error: Error()
              }), Localization) : Localization).instance.t((_crd && ErrorTitleLanguageKey === void 0 ? (_reportPossibleCrUseOfErrorTitleLanguageKey({
                error: Error()
              }), ErrorTitleLanguageKey) : ErrorTitleLanguageKey) + errorTitle);

              if (title == "") {
                title = errorTitle;
              }

              return title;
            }
          }

          return title;
        } //Get Error Message


        getContent(errorCode) {
          let content = (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
            error: Error()
          }), Localization) : Localization).instance.t((_crd && ErrorMessageLanguageKey === void 0 ? (_reportPossibleCrUseOfErrorMessageLanguageKey({
            error: Error()
          }), ErrorMessageLanguageKey) : ErrorMessageLanguageKey) + (_crd && DefaultMsg === void 0 ? (_reportPossibleCrUseOfDefaultMsg({
            error: Error()
          }), DefaultMsg) : DefaultMsg));

          for (let errorContent in _crd && ErrorCodeToMsg === void 0 ? (_reportPossibleCrUseOfErrorCodeToMsg({
            error: Error()
          }), ErrorCodeToMsg) : ErrorCodeToMsg) {
            const errorCodeArray = ErrorCodeToMsg[errorContent];

            if (errorCodeArray.indexOf(errorCode) != -1) {
              content = (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
                error: Error()
              }), Localization) : Localization).instance.t((_crd && ErrorMessageLanguageKey === void 0 ? (_reportPossibleCrUseOfErrorMessageLanguageKey({
                error: Error()
              }), ErrorMessageLanguageKey) : ErrorMessageLanguageKey) + errorContent);

              if (content == "") {
                content = errorContent;
              }
            }
          }

          if (_crd && ShowErrorCodeFlag === void 0 ? (_reportPossibleCrUseOfShowErrorCodeFlag({
            error: Error()
          }), ShowErrorCodeFlag) : ShowErrorCodeFlag) {
            content = content.replace(_crd && MessageReplaceFlag === void 0 ? (_reportPossibleCrUseOfMessageReplaceFlag({
              error: Error()
            }), MessageReplaceFlag) : MessageReplaceFlag, `(${errorCode})`);
          } else {
            content = content.replace(_crd && MessageReplaceFlag === void 0 ? (_reportPossibleCrUseOfMessageReplaceFlag({
              error: Error()
            }), MessageReplaceFlag) : MessageReplaceFlag, ``);
          }

          return content;
        } //取得對應的Error Handle 處理事件


        getConfirmEvent(errorCode) {
          return this.triggerConfirmEvent.bind((_crd && ErrorCodeEventProcess === void 0 ? (_reportPossibleCrUseOfErrorCodeEventProcess({
            error: Error()
          }), ErrorCodeEventProcess) : ErrorCodeEventProcess).Default);
        } //Trigger Error event


        triggerConfirmEvent(event) {
          switch (event) {
            case (_crd && ErrorCodeEventProcess === void 0 ? (_reportPossibleCrUseOfErrorCodeEventProcess({
              error: Error()
            }), ErrorCodeEventProcess) : ErrorCodeEventProcess).Back:
              location.reload();
              break;

            default:
              console.log("[triggerConfirmEvent] default event");
              break;
          }
        }
        /*
            //檢查是否需要 取消按鈕
            private isNeedCancel(errorCode: ErrorCode): boolean {
                for (let event in ErrorCodeCancelEvent) {
                    const errorCodeArray: number[] = ErrorCodeCancelEvent[event]
                    if (errorCodeArray.indexOf(errorCode) != -1) {
                        return true
                    }
                }
                return false;
            }
        
            //檢查是否需要顯示背景
            private isShowBG(errorCode: ErrorCode): boolean {
                return ErrorCodeNoShowBGEvent.indexOf(errorCode) == -1;
            }
        */


      });

      ErrorHandler.s_Instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1a299fe524cf877e47fcb32de7bc84229177f88e.js.map