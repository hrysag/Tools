System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ByteWriterHelper, CPacket, CService, _crd;

  function _reportPossibleCrUseOfByteWriterHelper(extras) {
    _reporterNs.report("ByteWriterHelper", "./ByteArray", _context.meta, extras);
  }

  _export("CService", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ByteWriterHelper = _unresolved_2.ByteWriterHelper;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b1863kFmu9BzrH4vRvFhyDg", "CSService", undefined); // CSServer.ts


      CPacket = class CPacket {
        constructor(packetNo, packet, time) {
          this.packetNo = packetNo;
          this.packet = packet;
          this.time = time;
        }

      };

      _export("CService", CService = class CService {
        constructor(num, lifeCycle) {
          this.serviceID = void 0;
          this.serviceIDBytes = void 0;
          this.m_iSendNum = void 0;
          this.recvNum = void 0;
          this.sendHistory = void 0;
          this.packetKeepTime = void 0;
          this.L_Packet = {};
          this.c群組_編號 = new Map();
          this.c群組_名稱 = new Map();
          this.L_群組Sync = {};
          this.serviceID = num;
          this.serviceIDBytes = (_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
            error: Error()
          }), ByteWriterHelper) : ByteWriterHelper).ConvertToIntByte(this.serviceID, 2);
          this.sendHistory = [];
          this.m_iSendNum = 0;
          this.recvNum = 1;
          this.packetKeepTime = lifeCycle;
        }

        getNewSendNumber() {
          this.m_iSendNum += 1;
          if (this.m_iSendNum > 60000) this.m_iSendNum = 1;
          return this.m_iSendNum;
        }

        AddPacket(data) {
          var now = Date.now(); //移除過期的封包

          while (this.sendHistory.length > 0) {
            var firstPacket = this.sendHistory[0];

            if (firstPacket && now - firstPacket.time <= this.packetKeepTime * 1000) {
              this.sendHistory.shift();
            } else {
              break;
            }
          }

          var sendNum = this.getNewSendNumber();
          var bt = new (_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
            error: Error()
          }), ByteWriterHelper) : ByteWriterHelper)(1);
          bt.WriteByte(30);
          bt.WriteBytes(this.serviceIDBytes);
          bt.WriteBytes((_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
            error: Error()
          }), ByteWriterHelper) : ByteWriterHelper).ConvertToIntByte(sendNum, 2));
          bt.WriteBytes(data);
          this.sendHistory.push(new CPacket(sendNum, bt.Buffer, now));
          return bt.Buffer;
        } //無序包


        getNoOrderPacket(data) {
          var bt = new (_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
            error: Error()
          }), ByteWriterHelper) : ByteWriterHelper)(1);
          bt.WriteByte(30);
          bt.WriteBytes(this.serviceIDBytes);
          bt.WriteBytes((_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
            error: Error()
          }), ByteWriterHelper) : ByteWriterHelper).ConvertToIntByte(0, 2));
          bt.WriteBytes(data);
          return bt.Buffer;
        }

        GetSendHistory(serverRecvNum) {
          //移除已經收到過的封包
          while (this.sendHistory.length > 0) {
            if (this.sendHistory[0].packetNo !== serverRecvNum) {
              this.sendHistory.shift();
            } else {
              break;
            }
          }

          this.sendHistory = this.sendHistory.filter(packet => packet.packetNo === serverRecvNum);
          return this.sendHistory;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=163d659e6b424d1961f2389b702fe9c8f0aab0ae.js.map