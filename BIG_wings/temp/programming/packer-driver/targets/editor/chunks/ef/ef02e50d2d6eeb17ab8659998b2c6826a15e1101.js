System.register(["__unresolved_0", "cc", "strict-event-emitter"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Emitter, Receive, _crd;

  function _reportPossibleCrUseOfServerSendActionEventMap(extras) {
    _reporterNs.report("ServerSendActionEventMap", "./SeverAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSocketCore(extras) {
    _reporterNs.report("WebSocketCore", "../../ws/WebSocketCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEmitter(extras) {
    _reporterNs.report("Emitter", "strict-event-emitter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMap(extras) {
    _reporterNs.report("EventMap", "strict-event-emitter", _context.meta, extras);
  }

  _export("Receive", void 0);

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

      _cclegacy._RF.push({}, "a64b9FAL/VDcrV37WnT1SrB", "Receive", undefined);

      /**
       * 針對伺服器端發送的訊息進行監聽 並將轉換成事件送出
       */
      _export("Receive", Receive = class Receive extends (_crd && Emitter === void 0 ? (_reportPossibleCrUseOfEmitter({
        error: Error()
      }), Emitter) : Emitter) {
        constructor(core) {
          super();
          this.core = core;
          this.core.on('message', this.onMessage.bind(this));
        }

        onMessage(data) {
          const {
            action,
            result
          } = data;

          if (action) {
            //@ts-ignore
            this.emit(action, data);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ef02e50d2d6eeb17ab8659998b2c6826a15e1101.js.map