System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ToolBarEventName, CommandEventName, AbstractExchangePanel, Model, DataModel, ExchangePanelEventName, MVCVersion, URLParameter, Dict, AIOBridge, Device, ToolsVersion, _crd;

  function _reportPossibleCrUseOfExchangeInfo(extras) {
    _reporterNs.report("ExchangeInfo", "./framework/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToolBarEventName(extras) {
    _reporterNs.report("ToolBarEventName", "./framework/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonLogin(extras) {
    _reporterNs.report("onLogin", "./framework/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonTakeMachine(extras) {
    _reporterNs.report("onTakeMachine", "./framework/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonLoadInfo(extras) {
    _reporterNs.report("onLoadInfo", "./framework/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonGetMachineDetail(extras) {
    _reporterNs.report("onGetMachineDetail", "./framework/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonCreditExchange(extras) {
    _reporterNs.report("onCreditExchange", "./framework/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonBalanceExchange(extras) {
    _reporterNs.report("onBalanceExchange", "./framework/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonHitJackpot(extras) {
    _reporterNs.report("onHitJackpot", "./framework/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAlertOptions(extras) {
    _reporterNs.report("AlertOptions", "./framework/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfAlertPanel(extras) {
    _reporterNs.report("IfAlertPanel", "./framework/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAlertPanelEventMap(extras) {
    _reporterNs.report("AlertPanelEventMap", "./framework/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommandEventName(extras) {
    _reporterNs.report("CommandEventName", "./framework/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbstractExchangePanel(extras) {
    _reporterNs.report("AbstractExchangePanel", "./framework/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExchangePanelEventMap(extras) {
    _reporterNs.report("ExchangePanelEventMap", "./framework/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCostumeEventMap(extras) {
    _reporterNs.report("CostumeEventMap", "./framework/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfToolBar(extras) {
    _reporterNs.report("IfToolBar", "./framework/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToolbarEventMap(extras) {
    _reporterNs.report("ToolbarEventMap", "./framework/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModel(extras) {
    _reporterNs.report("Model", "./framework/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataModel(extras) {
    _reporterNs.report("DataModel", "./framework/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfController(extras) {
    _reporterNs.report("IfController", "./framework/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExchangePanelEventName(extras) {
    _reporterNs.report("ExchangePanelEventName", "./framework/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMVCVersion(extras) {
    _reporterNs.report("MVCVersion", "./framework/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfURLParameter(extras) {
    _reporterNs.report("URLParameter", "./framework/share-tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDict(extras) {
    _reporterNs.report("Dict", "./framework/share-tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAIOBridge(extras) {
    _reporterNs.report("AIOBridge", "./framework/share-tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDevice(extras) {
    _reporterNs.report("Device", "./framework/share-tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeviceInfo(extras) {
    _reporterNs.report("DeviceInfo", "./framework/share-tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToolsVersion(extras) {
    _reporterNs.report("ToolsVersion", "./framework/share-tools", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ToolBarEventName = _unresolved_2.ToolBarEventName;
      CommandEventName = _unresolved_2.CommandEventName;
      AbstractExchangePanel = _unresolved_2.AbstractExchangePanel;
      Model = _unresolved_2.Model;
      DataModel = _unresolved_2.DataModel;
      ExchangePanelEventName = _unresolved_2.ExchangePanelEventName;
      MVCVersion = _unresolved_2.MVCVersion;
    }, function (_unresolved_3) {
      URLParameter = _unresolved_3.URLParameter;
      Dict = _unresolved_3.Dict;
      AIOBridge = _unresolved_3.AIOBridge;
      Device = _unresolved_3.Device;
      ToolsVersion = _unresolved_3.ToolsVersion;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fd9c3OjPa5JYq/jRVEe6Xck", "include", undefined);
      /**
       * @type { URLParameter }  URLParameter 網址中的參數
       * @type { Dict } Dict 多國語言文字檔案
       */


      // import { UserAnalysis } from './lib/analytics/UserAnalysis';
      // import userAnalysis = UserAnalysis.Instance;
      // export { Device, ToolBarEventName, URLParameter, Dict, AIOBridge, userAnalysis, DataModel, Model, CommandEventName, AbstractExchangePanel, ExchangePanelEventName };
      _export("Device", Device);

      _export("ToolBarEventName", ToolBarEventName);

      _export("URLParameter", URLParameter);

      _export("Dict", Dict);

      _export("AIOBridge", AIOBridge);

      _export("DataModel", DataModel);

      _export("Model", Model);

      _export("CommandEventName", CommandEventName);

      _export("AbstractExchangePanel", AbstractExchangePanel);

      _export("ExchangePanelEventName", ExchangePanelEventName); // mvc
      // share-tools


      console.log(`MVP: ${_crd && MVCVersion === void 0 ? (_reportPossibleCrUseOfMVCVersion({
        error: Error()
      }), MVCVersion) : MVCVersion} ToolsVersion: ${_crd && ToolsVersion === void 0 ? (_reportPossibleCrUseOfToolsVersion({
        error: Error()
      }), ToolsVersion) : ToolsVersion}`);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b0b22ebf17cc80720009930c192d6f8231d4c2a0.js.map