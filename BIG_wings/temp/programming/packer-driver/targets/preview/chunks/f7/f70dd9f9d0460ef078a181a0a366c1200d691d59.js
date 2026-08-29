System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Send, _crd;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _reportPossibleCrUseOfClientSendActionParams(extras) {
    _reporterNs.report("ClientSendActionParams", "./ClientAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseSendActionParams(extras) {
    _reporterNs.report("BaseSendActionParams", "./ClientAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSocketCore(extras) {
    _reporterNs.report("WebSocketCore", "../../ws/WebSocketCore", _context.meta, extras);
  }

  _export("Send", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8f80Ou7i1GZIpH7BWHkoon", "Send", undefined);

      _export("Send", Send = class Send {
        constructor(core) {
          this.core = core;
        }
        /*
         * 發送訊息給server端 
         * @param action 發送的動作
         * @param data 發送的資料 可以不傳入 , 會自動合併 action 與 data
         */


        callServer(action, data) {
          var _this$core;

          this == null || (_this$core = this.core) == null ? void 0 : _this$core.send(_extends({
            action
          }, data));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f70dd9f9d0460ef078a181a0a366c1200d691d59.js.map