System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CConnectLog, CSocket, _crd, CConnectManagerTrigger;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfCConnectLog(extras) {
    _reporterNs.report("CConnectLog", "./CConnectLog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCDispatcherAddr(extras) {
    _reporterNs.report("CDispatcherAddr", "./CDispatcherAddr", _context.meta, extras);
  }

  _export("CSocket", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      CConnectLog = _unresolved_2.CConnectLog;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5a4ccug7bJBUJLmrU/hJj8f", "CSocket", undefined);

      CConnectManagerTrigger = 4000;

      _export("CSocket", CSocket = class CSocket {
        constructor() {
          this._socket = null;
          this.m_queue = [];
          this.m_RcvConnectResult = -1;
          this.IPPort = '';
        }

        CloseSocket(reason) {
          if (reason === void 0) {
            reason = '';
          }

          (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
            error: Error()
          }), CConnectLog) : CConnectLog).Instance.WarningLog("Socket self CloseSocket code:" + CConnectManagerTrigger);

          if (this._socket == null) {
            return Promise.resolve();
          }

          return new Promise(resolve => {
            this._socket.onopen = null;
            this._socket.onerror = null;

            this._socket.onclose = () => {
              resolve();
            };

            this._socket.close(CConnectManagerTrigger, reason);
          });
        }

        toString() {
          return this.IPPort;
        }

        IsConnected() {
          return this._socket != null && this._socket.readyState === WebSocket.OPEN;
        }

        Connect(address) {
          var _this = this;

          return _asyncToGenerator(function* () {
            try {
              var _this$_socket;

              var wsUrl = "wss://" + address._sIP + ":" + address._iPort;
              (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
                error: Error()
              }), CConnectLog) : CConnectLog).Instance.InfoLog("Socket Connect : " + address._sIP + ":" + address._iPort);
              _this.m_RcvConnectResult = 0;
              (_this$_socket = _this._socket) == null || _this$_socket.close();
              _this._socket = null;
              _this._socket = new WebSocket(wsUrl, []);
              _this._socket.binaryType = 'arraybuffer';

              _this._socket.onopen = () => {
                (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
                  error: Error()
                }), CConnectLog) : CConnectLog).Instance.InfoLog("Socket Connect Success : " + address._sIP + ":" + address._iPort);

                _this.onConnect(_this._socket);

                _this.IPPort = address._sIP + ":" + address._iPort;
                _this.m_RcvConnectResult = -1;
              };

              _this._socket.onerror = error => {
                (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
                  error: Error()
                }), CConnectLog) : CConnectLog).Instance.ErrorLog("Socket Connect onerror : " + address._sIP + ":" + address._iPort);
                console.error(error);
              };

              _this._socket.onclose = function (ev) {
                (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
                  error: Error()
                }), CConnectLog) : CConnectLog).Instance.WarningLog("Socket Connect onclose from(" + address._sIP + ":" + address._iPort + ") \n reason: " + ev.reason + " \n code:" + ev.code);
              };
            } catch (ex) {
              console.error("IPPort : " + address._sIP + ":" + address._iPort + " " + ex.message + ".");
            }
          })();
        }

        Send(data) {
          var _this$_socket2;

          //送出資料長度
          var arrayLengthBytes = new Uint8Array([data.length >> 16 & 0xFF, // 第一個字節
          data.length >> 8 & 0xFF, // 第二個字節
          data.length & 0xFF // 第三個字節
          ]);
          var combinedData = new Uint8Array(arrayLengthBytes.length + data.length);
          combinedData.set(arrayLengthBytes, 0);
          combinedData.set(data, arrayLengthBytes.length);
          (_this$_socket2 = this._socket) == null || _this$_socket2.send(combinedData.buffer);
        }

        onConnect(socket) {
          socket.onmessage = event => {
            var dataSize = 0;
            var SizeOffset = 3;
            var result = new Uint8Array(event.data); //取得封包大小

            for (var x = 0; x < SizeOffset; x++) {
              dataSize += result[x] << 8 * (SizeOffset - x - 1);
            }

            var receiveData = new Uint8Array(result.slice(SizeOffset, result.length));
            this.onReceived(receiveData);
          };
        }

        onReceived(binaryData) {
          this.m_queue.push(binaryData);
        }

        GetQueue() {
          return this.m_queue.shift() || null;
        }

        ClearQueue() {
          this.m_queue.length = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bb7b614edce07c9c75eb934249aad65d2ccbcf14.js.map