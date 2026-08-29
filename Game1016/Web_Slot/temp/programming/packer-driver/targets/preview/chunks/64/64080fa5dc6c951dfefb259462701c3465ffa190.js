System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Decoder, _crd, NetAgentVersion, GameType;

  function _reportPossibleCrUseOfByteReaderHelper(extras) {
    _reporterNs.report("ByteReaderHelper", "./CConnectManager/ByteArray", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "159c5HW0yFBbb9wPj5eXOCH", "NetAgentDefine", undefined);

      // NetAgent Version
      _export("NetAgentVersion", NetAgentVersion = "1.0.14"); // console.log(`[NetAgent] Version: ${NetAgentVersion}`);


      _export("GameType", GameType = /*#__PURE__*/function (GameType) {
        GameType[GameType["Slot"] = 0] = "Slot";
        GameType[GameType["Bingo"] = 1] = "Bingo";
        return GameType;
      }({})); //Decode Interface


      //Decoder abstract class
      _export("default", Decoder = class Decoder {
        //ServerAck
        constructor(serverAck) {
          this.serverAck = serverAck;
        } //Implement Decode method


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=64080fa5dc6c951dfefb259462701c3465ffa190.js.map