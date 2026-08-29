System.register(["__unresolved_0", "cc", "strict-event-emitter"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Emitter, WebSocketCore, _crd, DEFAULT_WEBSOCKET_CONFIG;

  function _reportPossibleCrUseOfValuesType(extras) {
    _reporterNs.report("ValuesType", "utility-types", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEmitter(extras) {
    _reporterNs.report("Emitter", "strict-event-emitter", _context.meta, extras);
  }

  _export("WebSocketCore", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_strictEventEmitter) {
      Emitter = _strictEventEmitter.Emitter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2e6b2I57q9Gu5zURkF2SKu6", "WebSocketCore", undefined);

      DEFAULT_WEBSOCKET_CONFIG = {
        deserializer: e => JSON.parse(e.data),
        serializer: value => JSON.stringify(value),
        WebSocketCtor: WebSocket
      };
      /**
       * Websocket 連線核心事件
       */

      /**
       * Websocket 連線核心
       * 
       * @template ServerMessageMap 伺服器訊息格式
       * @template ClientMessageMap 客戶端訊息格式
       * 
       */
      _export("WebSocketCore", WebSocketCore = class WebSocketCore extends (_crd && Emitter === void 0 ? (_reportPossibleCrUseOfEmitter({
        error: Error()
      }), Emitter) : Emitter) {
        get ws() {
          return this._ws;
        }

        get manualClose() {
          return this._manualClose;
        }

        constructor() {
          super(); //將傳入的 config 覆蓋到預設的 config

          this._ws = null;
          this.config = DEFAULT_WEBSOCKET_CONFIG;
          this._manualClose = false;
          this.onopenBinder = this.onOpen.bind(this);
          this.oncloseBinder = this.onClose.bind(this);
          this.onerrorBinder = this.onError.bind(this);
          this.onmessageBinder = this.onMessage.bind(this);
          this._url = '';
        }

        connect(url, config = DEFAULT_WEBSOCKET_CONFIG) {
          return new Promise((resolve, reject) => {
            this.config = { ...this.config,
              ...config
            };
            this._url = url; //如果已經有連線，先關閉連線

            if (this.ws) this.reset();
            this.connectSocket(this.config.binaryType == 'arraybuffer');

            const off = () => {
              this.off('open', onopen);
              this.off('error', onerror);
              this.off('close', onclose);
            };

            const onopen = e => {
              off();
              resolve(true);
            };

            const onerror = e => {
              off();
              reject(e);
            };

            const onclose = e => {
              off();
              reject(e);
            }; // once has be leak !?


            this.on('open', onopen);
            this.once('error', onerror);
            this.once('close', onclose);
          });
        }

        close() {
          var _this$_ws, _this$_ws2;

          if (!this._ws) return;
          if (((_this$_ws = this._ws) == null ? void 0 : _this$_ws.readyState) === WebSocket.CLOSED) return;
          this._manualClose = true;
          (_this$_ws2 = this._ws) == null ? void 0 : _this$_ws2.close();
        }

        send(message) {
          const {
            _ws: ws,
            config
          } = this;

          if (!ws) {
            throw new Error('[WebsocketCore] Can not send data if no connection is established');
          }

          if (ws.readyState !== WebSocket.OPEN) {
            throw new Error('[WebsocketCore] Can not send data if connection is not open');
          }

          try {
            ws.send(config.serializer(message));
          } catch (e) {
            this.emit("error", e);
          }
        }

        connectSocket(binary = false) {
          const binaryType = binary ? 'arraybuffer' : undefined;
          const {
            WebSocketCtor,
            protocol
          } = this.config;
          const {
            _url: url
          } = this;
          let socket;

          try {
            socket = protocol ? new WebSocketCtor(url, protocol) : new WebSocketCtor(url);
            this._ws = socket;
            if (binaryType) this._ws.binaryType = binaryType;
          } catch (e) {
            this.emit('error', e);
            return;
          }

          socket.onopen = this.onopenBinder;
          socket.onclose = this.oncloseBinder;
          socket.onerror = this.onerrorBinder;
          socket.onmessage = this.onmessageBinder;
        }

        onOpen(e) {
          const {
            _ws: ws
          } = this;
          if (!ws) return;
          this._manualClose = false;
          this.emit('open', e);
        }

        onClose(e) {
          const {
            _ws: ws
          } = this;
          if (!ws) return;
          this.reset();
          this.emit('close', e);
        }

        onError(e) {
          const {
            _ws: ws
          } = this;
          if (!ws) return;
          this.emit('error', e);
        }

        onMessage(e) {
          const {
            deserializer
          } = this.config;

          try {
            if (deserializer) {
              const msg = deserializer(e);
              this.emit('message', msg);
            }
          } catch (e) {
            console.error(e);
            this.emit('error', e);
          }
        }

        reset() {
          const ws = this._ws;
          this._ws = null;
          (ws == null ? void 0 : ws.onclose) && (ws.onclose = null);
          (ws == null ? void 0 : ws.onerror) && (ws.onerror = null);
          (ws == null ? void 0 : ws.onmessage) && (ws.onmessage = null);
          (ws == null ? void 0 : ws.onopen) && (ws.onopen = null);

          if (ws && ws.readyState !== WebSocket.CLOSED) {
            ws.close();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0dab9583836262868ef53d1caea31ebafdf427ac.js.map