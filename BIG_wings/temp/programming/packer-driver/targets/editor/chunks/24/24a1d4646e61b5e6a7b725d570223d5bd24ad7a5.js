System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, ServerSendAction;

  function isSeverError(message) {
    var _message$result, _message$result2;

    //has event in result
    if (((_message$result = message.result) == null ? void 0 : _message$result.event) === false) {
      return true;
    } else if (((_message$result2 = message.result) == null ? void 0 : _message$result2.faultCode) != null) {
      return true;
    } else {
      return false;
    }
  }

  function GetErrorInfo(message) {
    let key = "";
    let id = "";

    if (isSeverError(message)) {
      var _message$result3, _message$result6, _message$result9;

      if ((_message$result3 = message.result) != null && _message$result3.error) {
        var _message$result4, _message$result5;

        key = (_message$result4 = message.result) == null ? void 0 : _message$result4.error;
        id = (_message$result5 = message.result) == null ? void 0 : _message$result5.error_code;
      } else if ((_message$result6 = message.result) != null && _message$result6.errCode) {
        var _message$result7, _message$result8;

        key = (_message$result7 = message.result) == null ? void 0 : _message$result7.errCode;
        id = (_message$result8 = message.result) == null ? void 0 : _message$result8.ErrorID;
      } else if ((_message$result9 = message.result) != null && _message$result9.faultCode) {
        var _message$result10, _message$result11;

        key = (_message$result10 = message.result) == null ? void 0 : _message$result10.faultCode;
        id = (_message$result11 = message.result) == null ? void 0 : _message$result11.faultString;
      }
    }

    return {
      key,
      id
    };
  }
  /**
   * event base 的 message
   */

  /**
   * result 沒有 event 的 message
   */

  /**
   * 針對 sever 送的訊息 轉換後的事件
   */


  function _reportPossibleCrUseOfupdateJP(extras) {
    _reporterNs.report("updateJP", "../data/Receive/updateJP", _context.meta, extras);
  }

  _export({
    isSeverError: isSeverError,
    GetErrorInfo: GetErrorInfo
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41c0a3xYqpMGpuwyghaa4Mc", "SeverAction", undefined);

      _export("ServerSendAction", ServerSendAction = /*#__PURE__*/function (ServerSendAction) {
        ServerSendAction["Ready"] = "ready";
        ServerSendAction["Login"] = "onLogin";
        ServerSendAction["UpdateJP"] = "updateJP";
        ServerSendAction["UpdateMarquee"] = "updateMarquee";
        ServerSendAction["TakeMachine"] = "onTakeMachine";
        ServerSendAction["LoadInfo"] = "onOnLoadInfo2";
        ServerSendAction["FullMachine"] = "onGetMachineList";
        ServerSendAction["GetMachineDetail"] = "onGetMachineDetail";
        ServerSendAction["CreditExchange"] = "onCreditExchange";
        ServerSendAction["BalanceExchange"] = "onBalanceExchange";
        ServerSendAction["HitJackpot"] = "onHitJackpot";
        ServerSendAction["BeginGame"] = "onBeginGame";
        ServerSendAction["DoubleGame"] = "onDoubleGame";
        ServerSendAction["EndGame"] = "onEndGame";
        ServerSendAction["KeepMachineStatus"] = "onKeepMachineStatus";
        ServerSendAction["MachineLeave"] = "onMachineLeave";
        return ServerSendAction;
      }({}));

      ;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=24a1d4646e61b5e6a7b725d570223d5bd24ad7a5.js.map