System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CCommandStatus, Decoder, GameMachineInfo, _crd;

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

      _cclegacy._RF.push({}, "33f5fS/CxlAWbGQ4rX14hRv", "GameMachineInfo", undefined);

      _export("default", GameMachineInfo = class GameMachineInfo extends (_crd && Decoder === void 0 ? (_reportPossibleCrUseOfDecoder({
        error: Error()
      }), Decoder) : Decoder) {
        //==========================外部接口=======================================

        /**
         * 玩家暱稱
         */
        get Nickname() {
          return this.nickname;
        }
        /**
         * 玩家財產
         */


        get Balance() {
          return this.balance;
        }
        /**
         * 最大押注
         */


        get MaxBet() {
          return this.maxBet;
        }
        /**
         * 最小押注
         */


        get MinBet() {
          return this.minBet;
        }
        /**
         * 可購買免費遊戲數量
         */


        get BuyFG() {
          return this.buyFG;
        }
        /**
         * 機台ID
         */


        get Id() {
          return this.id;
        }
        /**
         * 最後遊戲盤面
         */


        get LastPlant() {
          return this.lastPlant;
        }
        /**
         * 遊戲紀錄
         */


        get Record() {
          return this.record;
        }
        /**
         * JP
         */


        get JP() {
          return this.jp;
        }
        /**
         * 最後歷史紀錄
         */


        get LastHistory() {
          return this.lastHistory;
        }
        /**
         * 歷程高度
         */


        get HistoryHeight() {
          return this.historyHeight;
        }
        /**
         * 登入結果
         * 參考 @CCommandLoginStatus
         * @return CCommandLoginStatus
         */


        get Result() {
          return this.result;
        } //==========================內部處理=======================================


        constructor(serverAck) {
          super(serverAck);
          //玩家暱稱
          this.nickname = '';
          //玩家財產
          this.balance = 0;
          //最大押注
          this.maxBet = 0;
          //最小押注
          this.minBet = 0;
          //可購買免費遊戲數量
          this.buyFG = 0;
          //機台ID
          this.id = 0;
          //LastPlant
          this.lastPlant = void 0;
          //Record
          this.record = void 0;
          //JP
          this.jp = [];
          //lastHistory
          this.lastHistory = void 0;
          //歷程高度
          this.historyHeight = 0;
          //登入結果
          this.result = (_crd && CCommandStatus === void 0 ? (_reportPossibleCrUseOfCCommandStatus({
            error: Error()
          }), CCommandStatus) : CCommandStatus).None;
          this.Decode();
        }

        Decode() {
          if (this.serverAck == null) {
            return;
          }

          this.result = this.serverAck.ReadByte();

          if (this.result != (_crd && CCommandStatus === void 0 ? (_reportPossibleCrUseOfCCommandStatus({
            error: Error()
          }), CCommandStatus) : CCommandStatus).Success) {
            return;
          }

          this.nickname = this.serverAck.ReadString();
          this.balance = this.serverAck.ReadDouble();
          this.maxBet = this.serverAck.ReadDouble();
          this.minBet = this.serverAck.ReadDouble();
          this.buyFG = this.serverAck.ReadByte();
          this.id = this.serverAck.ReadInt(3);
          this.lastPlant = this.serverAck.ReadByteIncludeLength();
          this.record = this.serverAck.ReadByteIncludeLength();
          this.jp = this.serverAck.ReadDoubleArray();
          this.historyHeight = this.serverAck.ReadLong();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=240bcf54cd89c54f4ad39b56be43e7aa83512f07.js.map