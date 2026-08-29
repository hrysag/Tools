System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, ClientSendAction;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0d76bw4dPVAbrKGODFt8Obc", "ClientAction", undefined);

      _export("ClientSendAction", ClientSendAction = /*#__PURE__*/function (ClientSendAction) {
        ClientSendAction["Login"] = "loginBySid";
        ClientSendAction["LoadInfo"] = "onLoadInfo2";
        ClientSendAction["GetMachineDetail"] = "getMachineDetail";
        ClientSendAction["CreditExchange"] = "creditExchange";
        ClientSendAction["BalanceExchange"] = "balanceExchange";
        ClientSendAction["BeginGame"] = "beginGame";
        ClientSendAction["BeginGame2"] = "beginGame2";
        ClientSendAction["BeginGame3"] = "beginGame3";
        ClientSendAction["BeginGame4"] = "beginGame4";
        ClientSendAction["EndGame"] = "endGame";
        ClientSendAction["DoubleGame"] = "doubleGame";
        ClientSendAction["HitFree"] = "hitFree";
        ClientSendAction["LeaveMachine"] = "leaveMachine";
        ClientSendAction["UpdateUserAnalysis"] = "updateUserAnalysis";
        ClientSendAction["SaveUserAutoExchange"] = "saveUserAutoExchange";
        return ClientSendAction;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8f16e70a765ce7323c766d920bf14fa0b6d9b8d8.js.map