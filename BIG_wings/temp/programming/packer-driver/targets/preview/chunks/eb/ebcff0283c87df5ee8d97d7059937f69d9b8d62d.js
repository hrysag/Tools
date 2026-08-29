System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, WebSocketCore, Receive, Controller, Model, DataModel, View, CommandEventName, ToolBarEventName, CostumeEventName, ExchangePanelEventName, ExchangePanelEventDispatcher, AbstractExchangePanel, _crd, MVCVersion;

  function _reportPossibleCrUseOfWebSocketCore(extras) {
    _reporterNs.report("WebSocketCore", "./src/connection/ws/WebSocketCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSocketCoreEvent(extras) {
    _reporterNs.report("WebSocketCoreEvent", "./src/connection/ws/WebSocketCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebsocketCoreConfig(extras) {
    _reporterNs.report("WebsocketCoreConfig", "./src/connection/ws/WebSocketCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReceive(extras) {
    _reporterNs.report("Receive", "./src/connection/connector/receive/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfController(extras) {
    _reporterNs.report("IfController", "./src/mvc/controller/Controller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfController(extras) {
    _reporterNs.report("Controller", "./src/mvc/controller/Controller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModel(extras) {
    _reporterNs.report("Model", "./src/mvc/model/Model", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfDataModel(extras) {
    _reporterNs.report("IfDataModel", "./src/mvc/model/DataModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataModel(extras) {
    _reporterNs.report("DataModel", "./src/mvc/model/DataModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfCasinoView(extras) {
    _reporterNs.report("IfCasinoView", "./src/mvc/view/View", _context.meta, extras);
  }

  function _reportPossibleCrUseOfView(extras) {
    _reporterNs.report("View", "./src/mvc/view/View", _context.meta, extras);
  }

  function _reportPossibleCrUseOfError_Result(extras) {
    _reporterNs.report("Error_Result", "./src/connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonBalanceExchange(extras) {
    _reporterNs.report("onBalanceExchange", "./src/connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonBeginGame(extras) {
    _reporterNs.report("onBeginGame", "./src/connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonCreditExchange(extras) {
    _reporterNs.report("onCreditExchange", "./src/connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonGetMachineDetail(extras) {
    _reporterNs.report("onGetMachineDetail", "./src/connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonHitJackpot(extras) {
    _reporterNs.report("onHitJackpot", "./src/connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinJPType(extras) {
    _reporterNs.report("WinJPType", "./src/connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonLogin(extras) {
    _reporterNs.report("onLogin", "./src/connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonLoadInfo(extras) {
    _reporterNs.report("onLoadInfo", "./src/connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonTakeMachine(extras) {
    _reporterNs.report("onTakeMachine", "./src/connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateJP(extras) {
    _reporterNs.report("updateJP", "./src/connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommandEventName(extras) {
    _reporterNs.report("CommandEventName", "./src/interface/Command", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommandEventMap(extras) {
    _reporterNs.report("CommandEventMap", "./src/interface/Command", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfCommand(extras) {
    _reporterNs.report("IfCommand", "./src/interface/Command", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfToolBar(extras) {
    _reporterNs.report("IfToolBar", "./src/interface/Toolbar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToolbarEventMap(extras) {
    _reporterNs.report("ToolbarEventMap", "./src/interface/Toolbar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToolBarEventName(extras) {
    _reporterNs.report("ToolBarEventName", "./src/interface/Toolbar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfCostume(extras) {
    _reporterNs.report("IfCostume", "./src/interface/Costume", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCostumeEventMap(extras) {
    _reporterNs.report("CostumeEventMap", "./src/interface/Costume", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCostumeEventName(extras) {
    _reporterNs.report("CostumeEventName", "./src/interface/Costume", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExchangePanelEventName(extras) {
    _reporterNs.report("ExchangePanelEventName", "./src/interface/Exchange", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfExchangePanel(extras) {
    _reporterNs.report("IfExchangePanel", "./src/interface/Exchange", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExchangePanelEventMap(extras) {
    _reporterNs.report("ExchangePanelEventMap", "./src/interface/Exchange", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExchangePanelEventDispatcher(extras) {
    _reporterNs.report("ExchangePanelEventDispatcher", "./src/interface/Exchange", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExchangeInfo(extras) {
    _reporterNs.report("ExchangeInfo", "./src/interface/Exchange", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbstractExchangePanel(extras) {
    _reporterNs.report("AbstractExchangePanel", "./src/interface/Exchange", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfAlertPanel(extras) {
    _reporterNs.report("IfAlertPanel", "./src/interface/Alert", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAlertOptions(extras) {
    _reporterNs.report("AlertOptions", "./src/interface/Alert", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAlertPanelEventMap(extras) {
    _reporterNs.report("AlertPanelEventMap", "./src/interface/Alert", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseSeverEventMap(extras) {
    _reporterNs.report("BaseSeverEventMap", "./src/connection/connector/receive/SeverAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseSendActionParams(extras) {
    _reporterNs.report("BaseSendActionParams", "./src/connection/connector/send/ClientAction.ts", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      WebSocketCore = _unresolved_2.WebSocketCore;
    }, function (_unresolved_3) {
      Receive = _unresolved_3.Receive;
    }, function (_unresolved_4) {
      Controller = _unresolved_4.Controller;
    }, function (_unresolved_5) {
      Model = _unresolved_5.Model;
    }, function (_unresolved_6) {
      DataModel = _unresolved_6.DataModel;
    }, function (_unresolved_7) {
      View = _unresolved_7.View;
    }, function (_unresolved_8) {
      CommandEventName = _unresolved_8.CommandEventName;
    }, function (_unresolved_9) {
      ToolBarEventName = _unresolved_9.ToolBarEventName;
    }, function (_unresolved_10) {
      CostumeEventName = _unresolved_10.CostumeEventName;
    }, function (_unresolved_11) {
      ExchangePanelEventName = _unresolved_11.ExchangePanelEventName;
      ExchangePanelEventDispatcher = _unresolved_11.ExchangePanelEventDispatcher;
      AbstractExchangePanel = _unresolved_11.AbstractExchangePanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ebf1859Za5OqpAJwYYqVVg9", "index", undefined);

      _export("MVCVersion", MVCVersion = '1.0.0a');

      _export("WebSocketCore", WebSocketCore);

      _export("Receive", Receive);

      _export("DataModel", DataModel);

      _export("Controller", Controller);

      _export("Model", Model);

      _export("View", View);

      _export("CommandEventName", CommandEventName);

      _export("CostumeEventName", CostumeEventName);

      _export("ToolBarEventName", ToolBarEventName);

      _export("ExchangePanelEventName", ExchangePanelEventName);

      _export("AbstractExchangePanel", AbstractExchangePanel);

      _export("ExchangePanelEventDispatcher", ExchangePanelEventDispatcher);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ebcff0283c87df5ee8d97d7059937f69d9b8d62d.js.map