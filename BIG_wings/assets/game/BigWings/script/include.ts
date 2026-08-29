
import { ExchangeInfo, ToolBarEventName,
    onLogin, onTakeMachine, onLoadInfo, onGetMachineDetail, onCreditExchange, onBalanceExchange, onHitJackpot,
    AlertOptions, IfAlertPanel, 
    AlertPanelEventMap,
    CommandEventName, AbstractExchangePanel, ExchangePanelEventMap,
    CostumeEventMap,
    IfToolBar,
    ToolbarEventMap,
    Model, 
    DataModel,
    IfController,
    ExchangePanelEventName,
    MVCVersion
 } from "./framework/mvc";
/**
 * @type { URLParameter }  URLParameter 網址中的參數
 * @type { Dict } Dict 多國語言文字檔案
 */
import { URLParameter, Dict, AIOBridge, Device, DeviceInfo, ToolsVersion } from "./framework/share-tools";

// import { UserAnalysis } from './lib/analytics/UserAnalysis';
// import userAnalysis = UserAnalysis.Instance;

// export { Device, ToolBarEventName, URLParameter, Dict, AIOBridge, userAnalysis, DataModel, Model, CommandEventName, AbstractExchangePanel, ExchangePanelEventName };
export { Device, ToolBarEventName, URLParameter, Dict, AIOBridge, DataModel, Model, CommandEventName, AbstractExchangePanel, ExchangePanelEventName };
// mvc
export type { 
    ExchangeInfo, 
    onLogin, 
    onTakeMachine, 
    onLoadInfo, 
    onGetMachineDetail, 
    onCreditExchange, 
    onBalanceExchange, 
    onHitJackpot,
    AlertOptions, 
    IfAlertPanel, 
    AlertPanelEventMap, 
    ExchangePanelEventMap,
    CostumeEventMap,
    IfToolBar,
    ToolbarEventMap,
    IfController
 };
// share-tools
export type { DeviceInfo };

console.log(`MVP: ${MVCVersion} ToolsVersion: ${ToolsVersion}`);
