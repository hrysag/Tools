System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, ClientRecvAction, RecvMessage, DataType;

  function _reportPossibleCrUseOfonGetMachineDetail(extras) {
    _reporterNs.report("onGetMachineDetail", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonHitJackpot(extras) {
    _reporterNs.report("onHitJackpot", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonLoadInfo(extras) {
    _reporterNs.report("onLoadInfo", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonLogin(extras) {
    _reporterNs.report("onLogin", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonBeginGame(extras) {
    _reporterNs.report("onBeginGame", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonCreditExchange(extras) {
    _reporterNs.report("onCreditExchange", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseSeverEventMap(extras) {
    _reporterNs.report("BaseSeverEventMap", "@casino-mono/mvc", _context.meta, extras);
  }

  _export({
    RecvMessage: void 0,
    DataType: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b712SKtl1MCqxVIwYwWHiB", "RecvMessage", undefined);
      /**
       * 泛型: 定義Recvice資料內容
       * 預設參數 { action: T, event: boolean, gameType?:string }
       */


      _export("ClientRecvAction", ClientRecvAction = /*#__PURE__*/function (ClientRecvAction) {
        ClientRecvAction["WSOpen"] = "open";
        ClientRecvAction["WSClose"] = "close";
        ClientRecvAction["WSError"] = "error";
        ClientRecvAction["Ready"] = "ready";
        ClientRecvAction["Login"] = "onLogin";
        ClientRecvAction["UpdateJP"] = "updateJP";
        ClientRecvAction["UpdateMarquee"] = "updateMarquee";
        ClientRecvAction["TakeMachine"] = "onTakeMachine";
        ClientRecvAction["LoadInfo"] = "onOnLoadInfo2";
        ClientRecvAction["GetMachineDetail"] = "onGetMachineDetail";
        ClientRecvAction["CreditExchange"] = "onCreditExchange";
        ClientRecvAction["BalanceExchange"] = "balanceExchange";
        ClientRecvAction["HitJackpot"] = "onHitJackpot";
        ClientRecvAction["BeginGame"] = "onBeginGame";
        ClientRecvAction["EndGame"] = "onEndGame";
        ClientRecvAction["Gamble"] = "onHitFree";
        ClientRecvAction["MachineLeave"] = "machineLeave";
        ClientRecvAction["Exit"] = "exit";
        ClientRecvAction["Error"] = "error";
        ClientRecvAction["SaveUserAutoExchange"] = "saveUserAutoExchange";
        return ClientRecvAction;
      }({}));

      (function (_DataType) {
        ;
      })(DataType || _export("DataType", DataType = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8f3762865b0cb68b3d86316fb4a85bdb4d96a70e.js.map