System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EventTarget, GameEventBase, log, GameConnectBase, _crd;

  function _reportPossibleCrUseOfResultForConnect(extras) {
    _reporterNs.report("ResultForConnect", "../strategy/Strategy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfConnectStrategy(extras) {
    _reporterNs.report("IfConnectStrategy", "../strategy/Strategy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEventBase(extras) {
    _reporterNs.report("GameEventBase", "../events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPomeloDisconnectEvents(extras) {
    _reporterNs.report("PomeloDisconnectEvents", "../../../../Libs/fish-common-lib/types/networking/definitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConnector(extras) {
    _reporterNs.report("Connector", "../../../../Libs/fish-common-lib/types/networking/connector", _context.meta, extras);
  }

  _export("GameConnectBase", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      EventTarget = _cc.EventTarget;
      log = _cc.log;
    }, function (_unresolved_2) {
      GameEventBase = _unresolved_2.GameEventBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cc680h4yBVEjLaZLdXdKCM4", "ConnectBase", undefined);
      /**
       * Created by EricHuang on 2023/9/11.
       * 
       */


      __checkObsolete__(['EventTarget']);

      __checkObsolete__(['log']);

      /**
       * 使用者要另外實作這個抽象類別
       */
      _export("GameConnectBase", GameConnectBase = class GameConnectBase extends EventTarget {
        /**
         * <T extends IfConnectStrategy>-->約束傳進來的參數
         * @param strategy 必須是要實踐IfConnectStrategy的class
         */
        constructor(strategy) {
          super();
          this._strategy = void 0;
          this._connector = void 0;
          this._sid = void 0;
          this._gameType = void 0;

          //--async ():Promise<void>=>
          //protected getConnectDataFromPomelo= async (code: string, data: any):Promise<void>=>
          //--不需要等待了因為這是直接被動的等資料回來
          this.getConnectDataFromPomelo = (code, data) => {
            var serverData = this._strategy.strategyConnectDataFromPomelo(code, data);

            log('chec_fish1_ConnectBaseGetConnectDataFromPomelo@', serverData); //--準備打事件出去

            this.emit((_crd && GameEventBase === void 0 ? (_reportPossibleCrUseOfGameEventBase({
              error: Error()
            }), GameEventBase) : GameEventBase).CONNECTOR_EVT, serverData);
          };

          //=============IF PomeloDisconnectEvents=========================================================
          this.onDisconnected = info => {
            log('onDisconnected@@', info, this);
            this.disconnectedMsg(info);
          };

          this.onError = error => {
            log('onError', error, this);
            this.errorMsg(error);
          };

          //---錯誤訊息主要會從這邊來
          this.onKick = msg => {
            this.kickMsg(msg);
          };

          this.onPing = quality => {
            this.onPingMsg(quality);
          };

          this._strategy = new strategy();
        } //--連線前準備
        //--local端的測試流程 
        //--箭頭涵式不能夠複寫..他的this就是自己本身


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=54fd0ce34dfef643be4620a49fe92ffbdaa49d0b.js.map