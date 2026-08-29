System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GameConnectBase, log, TestConnect, _crd;

  function _reportPossibleCrUseOfGameConnectBase(extras) {
    _reporterNs.report("GameConnectBase", "../game/connect/ConnectBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfConnectStrategy(extras) {
    _reporterNs.report("IfConnectStrategy", "../game/strategy/Strategy", _context.meta, extras);
  }

  _export("TestConnect", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      GameConnectBase = _unresolved_2.GameConnectBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "77af8ZLuGBMDoHj10ur1cJb", "TestConnect", undefined);
      /**
       * Created by EricHuang on 2023/9/12.
       * 
       */


      __checkObsolete__(['log']);

      _export("TestConnect", TestConnect = class TestConnect extends (_crd && GameConnectBase === void 0 ? (_reportPossibleCrUseOfGameConnectBase({
        error: Error()
      }), GameConnectBase) : GameConnectBase) {
        constructor(strategyClass) {
          super(strategyClass);

          this.getConnectDataFromPomelo = async (code, data) => {
            let serverdata = await this._strategy.strategyConnectDataFromPomelo(code, data); //---dispatchEvent  
          };

          log('helloooo_TestConnect');
        }

        connect(ip) {
          if (!this._connector) {} //--do something
          //--再不回傳的情況下      


          return Promise.resolve();
        }

        sendServer(key, value) {
          switch (key) {
            case 'XXX':
              //this._connector.login();
              break;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=037004a5b41214f1a7d3c460c06581058ef28d96.js.map