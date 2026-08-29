System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ByteReaderHelper, CDispatcherAddr, _crd, WSSPortOffset;

  function _reportPossibleCrUseOfByteReaderHelper(extras) {
    _reporterNs.report("ByteReaderHelper", "./ByteArray", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ByteReaderHelper = _unresolved_2.ByteReaderHelper;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a7fe4QlblBJTI2f8Mz7XRwX", "CDispatcherAddr", undefined);

      //Cocos 目前都使用WSS
      WSSPortOffset = 2;

      _export("default", CDispatcherAddr = class CDispatcherAddr {
        constructor(arg1, arg2) {
          this.m_sKey = '';
          this.m_sIP = '';
          this.m_iPort = 13200;

          if (typeof arg1 === 'string' && typeof arg2 === 'undefined') {
            //constructor( ipPort: string ) process
            const splits = arg1.split(':');

            if (splits.length > 1) {
              this._sIP = splits[0];
              this._iPort = parseInt(splits[1], 10);
            } else {
              this._sIP = arg1;
            }
          } else if (typeof arg1 === 'string' && typeof arg2 === 'number') {
            //constructor( ip: string, port: number ) process
            this._sIP = arg1;
            this._iPort = arg2;
          } else if (arg1 instanceof Uint8Array) {
            //constructor( bt: ByteArray ) process
            const byteReader = new (_crd && ByteReaderHelper === void 0 ? (_reportPossibleCrUseOfByteReaderHelper({
              error: Error()
            }), ByteReaderHelper) : ByteReaderHelper)(arg1.buffer);
            const ip1 = byteReader.ReadByte();
            const ip2 = byteReader.ReadByte();
            const ip3 = byteReader.ReadByte();
            const ip4 = byteReader.ReadByte();
            this._sIP = `${ip1}.${ip2}.${ip3}.${ip4}`;
            this._iPort = byteReader.ReadInt(2);
            console.log(`CDispatcherAddr: ${this._sIP}:${this._iPort}`);
          }
        }

        get _sKey() {
          return this.m_sKey;
        }

        set _sKey(value) {
          this.m_sKey = value;
        }

        get _sIP() {
          return this.m_sIP;
        }

        set _sIP(value) {
          this.m_sIP = value;
          this.m_sKey = `${this.m_sIP}:${this.m_iPort}`;
        }

        get _iPort() {
          return this.m_iPort;
        }

        set _iPort(value) {
          this.m_iPort = value + WSSPortOffset;
          this.m_sKey = `${this.m_sIP}:${this.m_iPort}`;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e692b0a8810c31b78a3fef4a67d1043600c4a7c1.js.map