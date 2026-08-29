System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, NetAgent, HistoryItemInfo, PlayerInfo, _crd;

  function _reportPossibleCrUseOfIHistory(extras) {
    _reporterNs.report("IHistory", "../../NetAgent/AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCCommandStatus(extras) {
    _reporterNs.report("CCommandStatus", "../../NetAgent/CConnectManager/CConnectDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetAgent(extras) {
    _reporterNs.report("NetAgent", "../../NetAgent/NetAgent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpinAck(extras) {
    _reporterNs.report("SpinAck", "../../NetAgent/SpinAck", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHistoryItemInfo(extras) {
    _reporterNs.report("HistoryItemInfo", "./HistoryItemInfo", _context.meta, extras);
  }

  _export("PlayerInfo", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      NetAgent = _unresolved_2.NetAgent;
    }, function (_unresolved_3) {
      HistoryItemInfo = _unresolved_3.HistoryItemInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7c4eUmgk5M74hoQjz6n4Vc", "PlayerInfo", undefined);

      _export("PlayerInfo", PlayerInfo = class PlayerInfo {
        static get userName() {
          return PlayerInfo._userName;
        }

        static set userName(value) {
          PlayerInfo._userName = value;
        }

        static get balance() {
          return PlayerInfo._balance;
        }

        static set balance(value) {
          PlayerInfo._balance = value;
        }

        static get betMax() {
          return PlayerInfo._betMax;
        }

        static set betMax(value) {
          PlayerInfo._betMax = value;
        }

        static get betMin() {
          return PlayerInfo._betMin;
        }

        static set betMin(value) {
          PlayerInfo._betMin = value;
        }

        static get machineID() {
          return PlayerInfo._machineID;
        }

        static set machineID(value) {
          PlayerInfo._machineID = value;
        }

        static set buyFG(value) {
          PlayerInfo._buyFG = value;
        }

        static get buyFG() {
          return PlayerInfo._buyFG;
        }

        static get lastPlant() {
          return PlayerInfo._lastPlant;
        }

        static set lastPlant(value) {
          PlayerInfo._lastPlant = value;
        }

        static get record() {
          return PlayerInfo._record;
        }

        static set record(value) {
          PlayerInfo._record = value;
        }

        static get JP() {
          return PlayerInfo._JP;
        }

        static set JP(value) {
          PlayerInfo._JP = value;
        }

        static get betValueList() {
          return PlayerInfo._betValueList;
        }

        static get lastHistory() {
          return PlayerInfo._lastHistory;
        }

        static set lastHistory(value) {
          PlayerInfo._lastHistory = value;
        }

        static get result() {
          return PlayerInfo._result;
        }

        static set result(value) {
          PlayerInfo._result = value;
        }

        static updateBetValueList(totalBetValueList) {
          PlayerInfo._betValueList = [];

          for (let value of totalBetValueList) {
            if (value >= PlayerInfo._betMin && value <= PlayerInfo._betMax) {
              PlayerInfo._betValueList.push(value);
            }
          }
        }

        static updateHistoryItemInfos(historyItem) {
          if (!PlayerInfo._historyItemInfos) {
            PlayerInfo._historyItemInfos = [];
          }

          if (PlayerInfo._historyItemInfos.length >= 100) {
            PlayerInfo._historyItemInfos = PlayerInfo._historyItemInfos.slice(0, 99);
          }

          PlayerInfo._historyItemInfos.unshift(historyItem);
        }

        static insertHistory(spinResponse) {
          (_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
            error: Error()
          }), NetAgent) : NetAgent).GetInstance().insertHistory(spinResponse);
        }

        static getHistoryJson(gameID) {
          PlayerInfo._historyItemInfos = (_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
            error: Error()
          }), NetAgent) : NetAgent).GetInstance().CurrentHistoryData.map(item => {
            let historyItemInfoItem = new (_crd && HistoryItemInfo === void 0 ? (_reportPossibleCrUseOfHistoryItemInfo({
              error: Error()
            }), HistoryItemInfo) : HistoryItemInfo)();
            historyItemInfoItem.gameCode = gameID.toLowerCase();
            historyItemInfoItem.date = item.Time;
            historyItemInfoItem.bet = item.Bet;
            historyItemInfoItem.winScore = item.Win;
            historyItemInfoItem.betID = item.編號;
            historyItemInfoItem.slotData = item.盤面演繹;
            historyItemInfoItem.playerId = item.暱稱;
            historyItemInfoItem.beforeTotal = item.異動前;
            historyItemInfoItem.afterTotal = item.異動後;
            historyItemInfoItem.featureRatio = item.扣幣倍;
            historyItemInfoItem.version = '';
            return historyItemInfoItem;
          });
          let result = {
            gamecode: gameID.toLowerCase(),
            history: PlayerInfo._historyItemInfos.map(item => {
              return {
                gamecode: item.gameCode,
                slotdata: item.slotData,
                id: item.betID,
                time: item.date.toString(),
                version: item.version,
                bet: item.bet,
                win: item.winScore,
                before_total: item.beforeTotal,
                total: item.afterTotal,
                account: item.playerId,
                featureRatio: item.featureRatio
              };
            })
          };
          return JSON.stringify(result);
        }

      });

      PlayerInfo._userName = '';
      PlayerInfo._balance = 0;
      PlayerInfo._betMax = 10000;
      PlayerInfo._betMin = 100;
      PlayerInfo._betValueList = [];
      PlayerInfo._machineID = null;
      PlayerInfo._historyItemInfos = null;
      PlayerInfo._buyFG = 0;
      PlayerInfo._lastPlant = null;
      PlayerInfo._record = null;
      PlayerInfo._JP = [];
      PlayerInfo._lastHistory = [];
      PlayerInfo._result = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6a15359e65aafc0df7c39ab8e88a59c497781f1e.js.map