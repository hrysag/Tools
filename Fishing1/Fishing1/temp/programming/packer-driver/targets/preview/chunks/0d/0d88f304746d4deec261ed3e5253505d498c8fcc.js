System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GameConnectBase, log, TestConnect, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
          var _this;

          super(strategyClass);
          _this = this;
          this.getConnectDataFromPomelo = /*#__PURE__*/_asyncToGenerator(function* (code, data) {
            var serverdata = yield _this._strategy.strategyConnectDataFromPomelo(code, data); //---dispatchEvent  
          });
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
//# sourceMappingURL=0d88f304746d4deec261ed3e5253505d498c8fcc.js.map