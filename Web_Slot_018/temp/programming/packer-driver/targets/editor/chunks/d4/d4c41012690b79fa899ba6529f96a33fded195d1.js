System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CConnectLog, CSocket, _crd, CConnectManagerTrigger;

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

        CloseSocket(reason = '') {
          (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
            error: Error()
          }), CConnectLog) : CConnectLog).Instance.WarningLog(`Socket self CloseSocket code:${CConnectManagerTrigger}`);

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

        async Connect(address) {
          try {
            var _this$_socket;

            const wsUrl = `wss://${address._sIP}:${address._iPort}`;
            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.InfoLog(`Socket Connect : ${address._sIP}:${address._iPort}`);
            this.m_RcvConnectResult = 0;
            (_this$_socket = this._socket) == null || _this$_socket.close();
            this._socket = null;
            this._socket = new WebSocket(wsUrl, []);
            this._socket.binaryType = 'arraybuffer';

            this._socket.onopen = () => {
              (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
                error: Error()
              }), CConnectLog) : CConnectLog).Instance.InfoLog(`Socket Connect Success : ${address._sIP}:${address._iPort}`);
              this.onConnect(this._socket);
              this.IPPort = `${address._sIP}:${address._iPort}`;
              this.m_RcvConnectResult = -1;
            };

            this._socket.onerror = error => {
              (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
                error: Error()
              }), CConnectLog) : CConnectLog).Instance.ErrorLog(`Socket Connect onerror : ${address._sIP}:${address._iPort}`);
              console.error(error);
            };

            this._socket.onclose = function (ev) {
              (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
                error: Error()
              }), CConnectLog) : CConnectLog).Instance.WarningLog(`Socket Connect onclose from(${address._sIP}:${address._iPort}) \n reason: ${ev.reason} \n code:${ev.code}`);
            };
          } catch (ex) {
            console.error(`IPPort : ${address._sIP}:${address._iPort} ${ex.message}.`);
          }
        }

        Send(data) {
          var _this$_socket2;

          //送出資料長度
          const arrayLengthBytes = new Uint8Array([data.length >> 16 & 0xFF, // 第一個字節
          data.length >> 8 & 0xFF, // 第二個字節
          data.length & 0xFF // 第三個字節
          ]);
          const combinedData = new Uint8Array(arrayLengthBytes.length + data.length);
          combinedData.set(arrayLengthBytes, 0);
          combinedData.set(data, arrayLengthBytes.length);
          (_this$_socket2 = this._socket) == null || _this$_socket2.send(combinedData.buffer);
        }

        onConnect(socket) {
          socket.onmessage = event => {
            let dataSize = 0;
            const SizeOffset = 3;
            const result = new Uint8Array(event.data); //取得封包大小

            for (let x = 0; x < SizeOffset; x++) {
              dataSize += result[x] << 8 * (SizeOffset - x - 1);
            }

            const receiveData = new Uint8Array(result.slice(SizeOffset, result.length));
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
//# sourceMappingURL=d4c41012690b79fa899ba6529f96a33fded195d1.js.map