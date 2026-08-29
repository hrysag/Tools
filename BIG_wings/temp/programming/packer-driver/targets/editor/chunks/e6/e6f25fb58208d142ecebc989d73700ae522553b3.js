System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, URLParameter, ServerSendAction, isSeverError, Connector, JPType, DataModel, Model, _crd;

  function _reportPossibleCrUseOfURLParameter(extras) {
    _reporterNs.report("URLParameter", "../../../../share-tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfValuesType(extras) {
    _reporterNs.report("ValuesType", "utility-types", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerSendAction(extras) {
    _reporterNs.report("ServerSendAction", "../../connection/connector/receive/SeverAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerSendActionEventMap(extras) {
    _reporterNs.report("ServerSendActionEventMap", "../../connection/connector/receive/SeverAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisSeverError(extras) {
    _reporterNs.report("isSeverError", "../../connection/connector/receive/SeverAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConnector(extras) {
    _reporterNs.report("Connector", "../../connection/connector/Connector", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonBalanceExchange(extras) {
    _reporterNs.report("onBalanceExchange", "../../connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonBeginGame(extras) {
    _reporterNs.report("onBeginGame", "../../connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonCreditExchange(extras) {
    _reporterNs.report("onCreditExchange", "../../connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonGetMachineDetail(extras) {
    _reporterNs.report("onGetMachineDetail", "../../connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJPType(extras) {
    _reporterNs.report("JPType", "../../connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonHitJackpot(extras) {
    _reporterNs.report("onHitJackpot", "../../connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonLogin(extras) {
    _reporterNs.report("onLogin", "../../connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonLoadInfo(extras) {
    _reporterNs.report("onLoadInfo", "../../connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonTakeMachine(extras) {
    _reporterNs.report("onTakeMachine", "../../connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateJP(extras) {
    _reporterNs.report("updateJP", "../../connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataModel(extras) {
    _reporterNs.report("DataModel", "./DataModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMap(extras) {
    _reporterNs.report("EventMap", "strict-event-emitter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseSendActionParams(extras) {
    _reporterNs.report("BaseSendActionParams", "../../connection/connector/send/ClientAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientSendActionParams(extras) {
    _reporterNs.report("ClientSendActionParams", "../../connection/connector/send/ClientAction", _context.meta, extras);
  }

  _export("Model", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      URLParameter = _unresolved_2.URLParameter;
    }, function (_unresolved_3) {
      ServerSendAction = _unresolved_3.ServerSendAction;
      isSeverError = _unresolved_3.isSeverError;
    }, function (_unresolved_4) {
      Connector = _unresolved_4.Connector;
    }, function (_unresolved_5) {
      JPType = _unresolved_5.JPType;
    }, function (_unresolved_6) {
      DataModel = _unresolved_6.DataModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f7334unOiBLyb2RwYoRP1E3", "Model", undefined);

      _export("Model", Model = class Model {
        constructor() {
          this.dataModel = void 0;
          this.connection = void 0;

          /**
           * 要監聽的sever 事件名稱 array
           */
          this.receiverEvents = [(_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
            error: Error()
          }), ServerSendAction) : ServerSendAction).Ready, (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
            error: Error()
          }), ServerSendAction) : ServerSendAction).UpdateJP, (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
            error: Error()
          }), ServerSendAction) : ServerSendAction).UpdateMarquee, (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
            error: Error()
          }), ServerSendAction) : ServerSendAction).Login, (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
            error: Error()
          }), ServerSendAction) : ServerSendAction).TakeMachine, (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
            error: Error()
          }), ServerSendAction) : ServerSendAction).LoadInfo, (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
            error: Error()
          }), ServerSendAction) : ServerSendAction).GetMachineDetail, (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
            error: Error()
          }), ServerSendAction) : ServerSendAction).BalanceExchange, (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
            error: Error()
          }), ServerSendAction) : ServerSendAction).CreditExchange, (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
            error: Error()
          }), ServerSendAction) : ServerSendAction).BeginGame, (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
            error: Error()
          }), ServerSendAction) : ServerSendAction).HitJackpot, (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
            error: Error()
          }), ServerSendAction) : ServerSendAction).DoubleGame, (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
            error: Error()
          }), ServerSendAction) : ServerSendAction).EndGame, (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
            error: Error()
          }), ServerSendAction) : ServerSendAction).KeepMachineStatus];
          this.connection = this.initConnection();
          this.dataModel = this.initDataModel();
        }

        initDataModel() {
          return new (_crd && DataModel === void 0 ? (_reportPossibleCrUseOfDataModel({
            error: Error()
          }), DataModel) : DataModel)();
        }

        initConnection() {
          return new (_crd && Connector === void 0 ? (_reportPossibleCrUseOfConnector({
            error: Error()
          }), Connector) : Connector)();
        }

        configReceiveEvent() {
          if (this.connection) {
            const {
              receiver
            } = this.connection;
            this.receiverEvents.forEach(action => {
              receiver.on(action, this.handleReceiveEvent.bind(this));
            });
          }
        }

        handleReceiveEvent(...datas) {
          const message = datas[0];
          const {
            action,
            result
          } = message;
          console.log('[model] handleReceiveEvent', action, result);

          if ((_crd && isSeverError === void 0 ? (_reportPossibleCrUseOfisSeverError({
            error: Error()
          }), isSeverError) : isSeverError)(message)) {
            //錯誤的事件不需要將資料更新到model
            return;
          } else {
            switch (action) {
              case (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
                error: Error()
              }), ServerSendAction) : ServerSendAction).UpdateJP:
                this.updateJP(result);
                break;

              case (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
                error: Error()
              }), ServerSendAction) : ServerSendAction).UpdateMarquee:
                this.updateMarquee(result);
                break;

              case (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
                error: Error()
              }), ServerSendAction) : ServerSendAction).Login:
                result.event && this.onLogin(result.data);
                break;

              case (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
                error: Error()
              }), ServerSendAction) : ServerSendAction).TakeMachine:
                result.event && this.onTakeMachine(result.data);
                break;

              case (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
                error: Error()
              }), ServerSendAction) : ServerSendAction).LoadInfo:
                result.event && this.onLoadInfo(result.data);
                break;

              case (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
                error: Error()
              }), ServerSendAction) : ServerSendAction).GetMachineDetail:
                result.event && this.onGetMachineDetail(result.data);
                break;

              case (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
                error: Error()
              }), ServerSendAction) : ServerSendAction).BalanceExchange:
                result.event && this.onBalanceExchange(result.data);
                break;

              case (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
                error: Error()
              }), ServerSendAction) : ServerSendAction).CreditExchange:
                result.event && this.onCreditExchange(result.data);
                break;

              case (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
                error: Error()
              }), ServerSendAction) : ServerSendAction).BeginGame:
                result.event && this.onBeginGame(result.data);
                break;

              case (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
                error: Error()
              }), ServerSendAction) : ServerSendAction).HitJackpot:
                result.event && this.onHitJackpot(result.data);
                break;

              case (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
                error: Error()
              }), ServerSendAction) : ServerSendAction).DoubleGame:
                result.event && this.onDoubleGame(result.data);
                break;

              case (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
                error: Error()
              }), ServerSendAction) : ServerSendAction).EndGame:
                result.event && this.onEndGame(result.data);
                break;

              case (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
                error: Error()
              }), ServerSendAction) : ServerSendAction).KeepMachineStatus:
                result.event && this.onKeepMachineStatus(result.data);
                break;
            }
          }
        }

        onReady() {}

        updateJP(result) {
          this.dataModel.jpValue = result;
        }

        updateMarquee(result) {
          this.dataModel.marquee = result;
        }

        onLogin(data) {
          if (data && data.UserID != null) {
            this.dataModel.userId = String(data.UserID);
          }
        }

        onTakeMachine(data) {
          if (data && data.gameCode != null) {
            this.dataModel.gameCode = String(data.gameCode);
          }
        }

        onLoadInfo(data) {
          if (data) {
            const {
              dataModel
            } = this;
            dataModel.isCash = data.isCash;
            dataModel.loginName = data.LoginName;
            if (data.UserID != null) dataModel.userId = String(data.UserID);
            if (data.Credit != null) dataModel.credit = this.getNumber(data.Credit);
            if (data.Balance != null) dataModel.balance = this.getNumber(data.Balance);
            if (data.Rates != null) dataModel.rates = data.Rates;
            if (data.LineList) dataModel.lineList = data.LineList;
            dataModel.base = data.Base;
            dataModel.betBase = data.BetBase;
            dataModel.defaultBase = data.DefaultBase;

            if (data.BetCreditList) {
              //所見即所得版本
              const {
                BetCreditList
              } = data;

              if (BetCreditList) {
                dataModel.creditList = BetCreditList.map(item => {
                  return this.getNumber(item);
                });
                dataModel.maxLineBet = dataModel.creditList[dataModel.creditList.length - 1];
              }

              let {
                DefaultBetCredit
              } = data;

              if (DefaultBetCredit != null) {
                DefaultBetCredit = this.getNumber(DefaultBetCredit);
                dataModel.bet = DefaultBetCredit;
                dataModel.lineBet = DefaultBetCredit;
                dataModel.defaultBetCredit = DefaultBetCredit;
              }
            }

            if (data.UserName != null) {
              dataModel.loginName = data.UserName; //go+ 唯一額度 , 故把 balance 設為 credit

              dataModel.credit = this.getNumber(data.Balance);
              dataModel.betBase = data.DefaultBase;
            }

            dataModel.currency = data.Currency;
            dataModel.noExchange = !!data.noExchange;
          }
        }

        onGetMachineDetail(data) {
          if (data) {
            const {
              dataModel
            } = this;
            dataModel.balance = this.getNumber(data.Balance);
            dataModel.credit = this.getNumber(data.Credit);
            dataModel.base = data.Base;
            dataModel.betBase = data.BetBase;
          }
        }

        onCreditExchange(data) {
          if (data) {
            const {
              dataModel
            } = this;
            dataModel.credit = this.getNumber(data.Credit);
            dataModel.balance = this.getNumber(data.Balance);
            dataModel.betBase = data.BetBase;
          }
        }

        onBalanceExchange(data) {
          if (data) {
            const {
              dataModel
            } = this;
            dataModel.washInfo = {
              transCredit: this.getNumber(data.TransCredit),
              amount: this.getNumber(data.Amount)
            };
            dataModel.balance = this.getNumber(data.Balance);
            dataModel.credit = 0;
            dataModel.betBase = data.BetBase;
          }
        }

        onHitJackpot(data) {
          if (data) {
            const {
              dataModel
            } = this;
            dataModel.winJPType = this.getNumber(data.JPType);
            dataModel.winJPAmount = this.getNumber(data.JPAmount);
          }
        }

        onBeginGame(data) {}

        onDoubleGame(data) {}

        onEndGame(data) {}

        onKeepMachineStatus(data) {}

        async connect(path) {
          console.log('[model] connect', path);

          if (!path) {
            await (_crd && URLParameter === void 0 ? (_reportPossibleCrUseOfURLParameter({
              error: Error()
            }), URLParameter) : URLParameter).init();
            path = await this.getConnectPath();
          }

          if (path) {
            this.configReceiveEvent();
            return this.connection.connect(path);
          }

          return Promise.resolve(false);
        }

        async getConnectPath() {
          return Promise.resolve((_crd && URLParameter === void 0 ? (_reportPossibleCrUseOfURLParameter({
            error: Error()
          }), URLParameter) : URLParameter).serverHost);
        }

        getNumber(data) {
          return typeof data == 'number' ? data : typeof data == 'string' ? parseFloat(data) : 0;
        }

        init() {
          const {
            dataModel
          } = this;
          dataModel.payoff = 0;
          dataModel.cards = [];
          dataModel.lines = "";
          dataModel.scatter = "";
          dataModel.bonus = "";
          dataModel.winJPType = (_crd && JPType === void 0 ? (_reportPossibleCrUseOfJPType({
            error: Error()
          }), JPType) : JPType).None;
          dataModel.winJPAmount = 0;

          if (dataModel.freeTimes == 0) {
            // dataModel.be
            const {
              line,
              lineBet
            } = dataModel;

            if (line && lineBet) {
              dataModel.bet = line * lineBet;
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e6f25fb58208d142ecebc989d73700ae522553b3.js.map