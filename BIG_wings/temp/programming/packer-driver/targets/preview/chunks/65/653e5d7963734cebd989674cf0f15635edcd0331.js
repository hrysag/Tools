System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, WebSocketCore, deserializer, serializer, stringify, Receive, Send, Connector, _crd;

  function _reportPossibleCrUseOfBaseSendActionParams(extras) {
    _reporterNs.report("BaseSendActionParams", "./send/ClientAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientSendActionParams(extras) {
    _reporterNs.report("ClientSendActionParams", "./send/ClientAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerSendActionEventMap(extras) {
    _reporterNs.report("ServerSendActionEventMap", "./receive/SeverAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSocketCore(extras) {
    _reporterNs.report("WebSocketCore", "../ws/WebSocketCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebsocketCoreConfig(extras) {
    _reporterNs.report("WebsocketCoreConfig", "../ws/WebSocketCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdeserializer(extras) {
    _reporterNs.report("deserializer", "../ws/deserializer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfserializer(extras) {
    _reporterNs.report("serializer", "../ws/serializer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstringify(extras) {
    _reporterNs.report("stringify", "../ws/serializer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReceive(extras) {
    _reporterNs.report("Receive", "./receive/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSend(extras) {
    _reporterNs.report("Send", "./send/Send", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMap(extras) {
    _reporterNs.report("EventMap", "strict-event-emitter", _context.meta, extras);
  }

  _export("Connector", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      WebSocketCore = _unresolved_2.WebSocketCore;
    }, function (_unresolved_3) {
      deserializer = _unresolved_3.deserializer;
    }, function (_unresolved_4) {
      serializer = _unresolved_4.serializer;
      stringify = _unresolved_4.stringify;
    }, function (_unresolved_5) {
      Receive = _unresolved_5.Receive;
    }, function (_unresolved_6) {
      Send = _unresolved_6.Send;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a656eQ3X9AKKXHXiPCkk0J", "Connector", undefined);

      /**
       * 連線中心
       * 
       * 1. socket 主控 websocket 連線實體
       * 2. receiver 接收server端訊息 並轉換成事件發出
       * 3. sender 發送訊息給server端
       */
      _export("Connector", Connector = class Connector {
        get socket() {
          return this._socket;
        }

        get receiver() {
          return this._receiver;
        }

        get sender() {
          return this._sender;
        }

        get event() {
          return this._receiver;
        }

        constructor() {
          this._socket = void 0;
          this._receiver = void 0;
          this._sender = void 0;
          this._socket = this.initWebSocket();
          this._receiver = this.initReceiver();
          this._sender = this.initSender();

          this._receiver.on('connect', () => {
            console.log('connect');
          });
        }

        initWebSocket() {
          var websocketCore = new (_crd && WebSocketCore === void 0 ? (_reportPossibleCrUseOfWebSocketCore({
            error: Error()
          }), WebSocketCore) : WebSocketCore)();
          return websocketCore;
        }

        initReceiver() {
          return new (_crd && Receive === void 0 ? (_reportPossibleCrUseOfReceive({
            error: Error()
          }), Receive) : Receive)(this._socket);
        }

        initSender() {
          return new (_crd && Send === void 0 ? (_reportPossibleCrUseOfSend({
            error: Error()
          }), Send) : Send)(this._socket);
        }

        connect(url, binary) {
          var _this$_socket;

          if (binary === void 0) {
            binary = true;
          }

          var config = {
            deserializer: _crd && deserializer === void 0 ? (_reportPossibleCrUseOfdeserializer({
              error: Error()
            }), deserializer) : deserializer,
            serializer: binary ? _crd && serializer === void 0 ? (_reportPossibleCrUseOfserializer({
              error: Error()
            }), serializer) : serializer : _crd && stringify === void 0 ? (_reportPossibleCrUseOfstringify({
              error: Error()
            }), stringify) : stringify
          };

          if (binary) {
            config.binaryType = 'arraybuffer';
          }

          return (_this$_socket = this._socket) == null ? void 0 : _this$_socket.connect(url, config);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=653e5d7963734cebd989674cf0f15635edcd0331.js.map