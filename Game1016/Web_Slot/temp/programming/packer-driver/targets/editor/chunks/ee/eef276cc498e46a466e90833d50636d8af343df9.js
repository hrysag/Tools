System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CCommandStatus, Decoder, SpinAck, _crd;

  function _reportPossibleCrUseOfByteReaderHelper(extras) {
    _reporterNs.report("ByteReaderHelper", "./CConnectManager/ByteArray", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCCommandStatus(extras) {
    _reporterNs.report("CCommandStatus", "./CConnectManager/CConnectDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDecoder(extras) {
    _reporterNs.report("Decoder", "./NetAgentDefine", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      CCommandStatus = _unresolved_2.CCommandStatus;
    }, function (_unresolved_3) {
      Decoder = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d5a8ew7vJHXZOsFlAhi5Xt", "SpinAck", undefined);

      _export("default", SpinAck = class SpinAck extends (_crd && Decoder === void 0 ? (_reportPossibleCrUseOfDecoder({
        error: Error()
      }), Decoder) : Decoder) {
        //==========================外部接口=======================================

        /**
        * FG可購買數量
        */
        get BuyFG() {
          return this.buyFG;
        }
        /**
         * 餘額
         */


        get Balance() {
          return this.balance;
        }
        /**
         * Bet
         */


        get BaseBet() {
          return this.baseBet;
        }
        /*
        * 加購
        */


        get AdditionalPurchase() {
          return this.additionalPurchase;
        }
        /**
         * Win 贏分
         */


        get Win() {
          return this.win;
        }
        /**
         * SerialId 押注序號
         */


        get SerialId() {
          return this.serialId;
        }
        /**
         * Plant 盤面
         */


        get Plant() {
          return this.plant;
        }
        /**
         * 時間 UTC 0
         */


        get Time() {
          return this.time;
        }
        /**
         * Result 結果
         */


        get Result() {
          return this.result;
        } //==========================內部處理=======================================


        constructor(serverAck) {
          super(serverAck);
          //可購買免費遊戲數量
          this.buyFG = 0;
          //Balance
          this.balance = 0;
          //Bet
          this.baseBet = 0;
          //additionalPurchase
          this.additionalPurchase = 0;
          //win
          this.win = 0;
          //SerialId
          this.serialId = '';
          //Plant
          this.plant = '';
          //Time
          this.time = '';
          //result
          this.result = -(_crd && CCommandStatus === void 0 ? (_reportPossibleCrUseOfCCommandStatus({
            error: Error()
          }), CCommandStatus) : CCommandStatus).None;
          this.Decode();
        }

        Decode() {
          if (this.serverAck == null) return;
          this.result = this.serverAck.ReadByte();

          if (this.result !== (_crd && CCommandStatus === void 0 ? (_reportPossibleCrUseOfCCommandStatus({
            error: Error()
          }), CCommandStatus) : CCommandStatus).Success) {
            this.serialId = this.serverAck.ReadString();
            return;
          }

          this.buyFG = this.serverAck.ReadByte();
          this.balance = this.serverAck.ReadDouble();
          this.baseBet = this.serverAck.ReadDouble();
          this.additionalPurchase = this.serverAck.ReadDouble();
          this.win = this.serverAck.ReadDouble();
          this.serialId = this.serverAck.ReadString();
          this.plant = this.serverAck.ReadLongString();
          this.time = this.serverAck.ReadString();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eef276cc498e46a466e90833d50636d8af343df9.js.map