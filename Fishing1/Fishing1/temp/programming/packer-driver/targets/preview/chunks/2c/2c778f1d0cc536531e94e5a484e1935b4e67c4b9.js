System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, Requests, ResponseCodes, ConnectToGSDemo, EventHandler, _crd, gsDomain;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfCodeMapFunction(extras) {
    _reporterNs.report("CodeMapFunction", "../Libs/fish-common-lib/types/networking/definitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPomeloDisconnectEvents(extras) {
    _reporterNs.report("PomeloDisconnectEvents", "../Libs/fish-common-lib/types/networking/definitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnterRoomData(extras) {
    _reporterNs.report("EnterRoomData", "../Scripts/gameUtils/definitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRequests(extras) {
    _reporterNs.report("Requests", "../Scripts/gameUtils/definitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResponseCodes(extras) {
    _reporterNs.report("ResponseCodes", "../Scripts/gameUtils/definitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConnector(extras) {
    _reporterNs.report("Connector", "../Libs/fish-common-lib/types/networking/connector", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      Requests = _unresolved_2.Requests;
      ResponseCodes = _unresolved_2.ResponseCodes;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca2d1HE5j5EoJxsFxSUIcFR", "ConnectToGSDemo", undefined);

      __checkObsolete__(['log']);

      _export("default", ConnectToGSDemo = class ConnectToGSDemo {
        constructor() {
          this.connector = void 0;
          this.gid = 38003;
          this.connector = window.util.network.connector;
        }

        connect(sid) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var eventHandler = new EventHandler();

            _this.connector.init({
              host: gsDomain(),
              // should be sub-domain(from cookie) + location.hostname
              port: 3010,
              // get it from cookie
              ssl: true,
              timeout: 5,
              // for every request
              codeMap: _this.getCodeMap(eventHandler)
            }, eventHandler);

            var result = yield _this.connector.connect();
            log('yo1', result);
            var result2 = yield _this.connector.login({
              sid,
              gid: _this.gid,
              cid: 11,
              entry: {
                portal: 1,
                client: 2,
                platform: 3
              } // entry: window.util.general.device.getPlatformDeviceEntryInfo()

            });
            log('yo2', result2);
          })();
        }

        getCodeMap(e) {
          var m = new Map();
          m.set((_crd && ResponseCodes === void 0 ? (_reportPossibleCrUseOfResponseCodes({
            error: Error()
          }), ResponseCodes) : ResponseCodes).EnterLobby, e.onEnterLobby.bind(e));
          m.set((_crd && ResponseCodes === void 0 ? (_reportPossibleCrUseOfResponseCodes({
            error: Error()
          }), ResponseCodes) : ResponseCodes).Balance, e.onBalance.bind(e));
          m.set((_crd && ResponseCodes === void 0 ? (_reportPossibleCrUseOfResponseCodes({
            error: Error()
          }), ResponseCodes) : ResponseCodes).NewFish, e.onNewFish.bind(e));
          m.set((_crd && ResponseCodes === void 0 ? (_reportPossibleCrUseOfResponseCodes({
            error: Error()
          }), ResponseCodes) : ResponseCodes).WeaponSettings, e.onWeaponSettings.bind(e));
          m.set((_crd && ResponseCodes === void 0 ? (_reportPossibleCrUseOfResponseCodes({
            error: Error()
          }), ResponseCodes) : ResponseCodes).FishSettings, e.onFishSettings.bind(e));
          return m;
        }

      });

      EventHandler = class EventHandler {
        constructor() {
          this.connector = void 0;
          this.connector = window.util.network.connector;
        }

        onEnterLobby(code, data) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            log('onEnterLobby', data, _this2);
            var result3 = yield _this2.connector.send((_crd && Requests === void 0 ? (_reportPossibleCrUseOfRequests({
              error: Error()
            }), Requests) : Requests).SelectRoom, {
              p: 0
            }, {
              code: (_crd && ResponseCodes === void 0 ? (_reportPossibleCrUseOfResponseCodes({
                error: Error()
              }), ResponseCodes) : ResponseCodes).EnterRoom,
              timeout: 5
            });
            log('yo3', result3);
          })();
        }

        onBalance(code, data) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            log('onBalance', code, data); // alert(window.util.numeric.prettify.numberWithComma(data['b']))0

            var result = yield _this3.connector.send((_crd && Requests === void 0 ? (_reportPossibleCrUseOfRequests({
              error: Error()
            }), Requests) : Requests).Exchange, {
              p: 500,
              r: '1:5'
            }, {
              code: (_crd && ResponseCodes === void 0 ? (_reportPossibleCrUseOfResponseCodes({
                error: Error()
              }), ResponseCodes) : ResponseCodes).Exchange,
              timeout: 3
            });
            log('onExchange', result);
          })();
        }

        onExistBullets(data) {}

        onWeaponSettings(code, data) {
          log('onWeaponSettings', data);
        }

        onFishSettings(code, data) {
          log('onFishSettings', data);
        }

        onSerialNumber(data) {}

        onUpdateSeat(data) {}

        onRefund(data) {}

        onNewFish(code, data) {
          log(data);
        }

        onFishFormation(data) {}

        onInitSeats(data) {
          log('onInitSeats', data);
        }

        onDisconnected(data) {}

        onKick(msg) {}

        onError(data) {}

        onOtherEvents(code, data) {}

        onEnterRoom(code, data) {
          log('onEnterRoom', code, data);
        }

      };

      gsDomain = () => {
        return 'ws01.fisher-dev.cc'; // return 'ws01.fisher-test.cc';
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2c778f1d0cc536531e94e5a484e1935b4e67c4b9.js.map