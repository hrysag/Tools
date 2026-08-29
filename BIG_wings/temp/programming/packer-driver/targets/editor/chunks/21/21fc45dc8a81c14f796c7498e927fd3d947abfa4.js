System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, ClientSendAction, SendMessage;

  function _reportPossibleCrUseOfBaseSendActionParams(extras) {
    _reporterNs.report("BaseSendActionParams", "@casino-mono/mvc", _context.meta, extras);
  }

  _export("SendMessage", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "46411Tdm8lFQp2X9I4u/kHa", "SendMessage", undefined);
      /**
       * 事件定義操作資料內容
       */

      /**
       * 事件定義操作資料內容
       */


      /**
       * 伺服器操作相關事件
       */
      _export("ClientSendAction", ClientSendAction = /*#__PURE__*/function (ClientSendAction) {
        ClientSendAction["Login"] = "loginBySid";
        ClientSendAction["LoadInfo"] = "onLoadInfo2";
        ClientSendAction["GetMachineDetail"] = "getMachineDetail";
        ClientSendAction["CreditExchange"] = "creditExchange";
        ClientSendAction["BalanceExchange"] = "balanceExchange";
        ClientSendAction["BeginGame"] = "beginGame4";
        ClientSendAction["EndGame"] = "endGame";
        ClientSendAction["Gamble"] = "hitFree";
        ClientSendAction["Exit"] = "exit";
        ClientSendAction["JoinGame"] = "joinGame";
        ClientSendAction["LeaveGame"] = "leaveGame";
        ClientSendAction["SaveUserAutoExchange"] = "saveUserAutoExchange";
        ClientSendAction["UpdateUserAnalysis"] = "updateUserAnalysis";
        ClientSendAction["TakeMachine"] = "takeMachine";
        return ClientSendAction;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=21fc45dc8a81c14f796c7498e927fd3d947abfa4.js.map