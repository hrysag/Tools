System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ServerSendAction, ClientSendAction, DataModel, Controller, _crd;

  function _reportPossibleCrUseOfonBalanceExchange(extras) {
    _reporterNs.report("onBalanceExchange", "../../connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonCreditExchange(extras) {
    _reporterNs.report("onCreditExchange", "../../connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonGetMachineDetail(extras) {
    _reporterNs.report("onGetMachineDetail", "../../connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerSendAction(extras) {
    _reporterNs.report("ServerSendAction", "../../connection/connector/receive/SeverAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientSendAction(extras) {
    _reporterNs.report("ClientSendAction", "../../connection/connector/send/ClientAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataModel(extras) {
    _reporterNs.report("DataModel", "../model/DataModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModel(extras) {
    _reporterNs.report("Model", "../model/Model", _context.meta, extras);
  }

  _export("Controller", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ServerSendAction = _unresolved_2.ServerSendAction;
    }, function (_unresolved_3) {
      ClientSendAction = _unresolved_3.ClientSendAction;
    }, function (_unresolved_4) {
      DataModel = _unresolved_4.DataModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1abccFsh21Oa7zteNUdL9NV", "Controller", undefined);

      _export("Controller", Controller = class Controller {
        get sender() {
          var _this$model;

          return (_this$model = this.model) == null || (_this$model = _this$model.connection) == null ? void 0 : _this$model.sender;
        }

        get receiver() {
          var _this$model2;

          return (_this$model2 = this.model) == null || (_this$model2 = _this$model2.connection) == null ? void 0 : _this$model2.receiver;
        }

        constructor(model) {
          this.model = model;
        }

        setLine(line) {
          this.model.dataModel.line = line;
        }

        setLineBet(lineBet) {
          this.model.dataModel.lineBet = lineBet;
        }

        addLine(loop) {
          const {
            line,
            maxLine
          } = this.model.dataModel;

          if (line != null) {
            let newLine = line + 1;

            if (maxLine && newLine > maxLine) {
              if (loop) newLine = 1;else newLine = maxLine;
            }

            this.setLine(newLine);
          }
        }

        minusLine(loop = true) {
          const {
            line,
            maxLine
          } = this.model.dataModel;

          if (line != null) {
            let newLine = line - 1;

            if (maxLine && newLine < 1) {
              if (loop) newLine = maxLine;else newLine = 1;
            }

            this.setLine(newLine);
          }
        }

        maxBet() {
          const {
            maxLineBet,
            lineBet
          } = this.model.dataModel;

          if (maxLineBet != null && lineBet != null) {
            this.setLineBet(maxLineBet);
          }

          const {
            maxLine,
            line
          } = this.model.dataModel;

          if (maxLine != null && line != null) {
            this.setLine(maxLine);
          }
        }

        mute() {}

        backgroundMusic() {}

        history() {}

        help() {}

        deposit() {}

        gameInfo() {}

        exit() {} //以下是連線相關事件


        beginGame(opts) {
          this.sender.callServer((_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
            error: Error()
          }), ClientSendAction) : ClientSendAction).BeginGame4, opts);
        }

        endGame() {
          const {
            wagersID,
            sid
          } = this.model.dataModel;

          if (wagersID && sid) {
            this.sender.callServer((_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
              error: Error()
            }), ClientSendAction) : ClientSendAction).EndGame, {
              wagersID,
              sid
            });
          }
        }

        double() {
          this.sender.callServer((_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
            error: Error()
          }), ClientSendAction) : ClientSendAction).DoubleGame);
        }

        hitFree() {
          this.sender.callServer((_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
            error: Error()
          }), ClientSendAction) : ClientSendAction).HitFree);
        }

        leaveMachine() {
          this.sender.callServer((_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
            error: Error()
          }), ClientSendAction) : ClientSendAction).LeaveMachine);
        }

        async getMachineDetail() {
          return new Promise((resolve, reject) => {
            this.sender.callServer((_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
              error: Error()
            }), ClientSendAction) : ClientSendAction).GetMachineDetail);
            this.receiver.once((_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
              error: Error()
            }), ServerSendAction) : ServerSendAction).GetMachineDetail, data => {
              (data.result.event ? resolve : reject)(data);
            });
          });
        }

        async creditExchange(betBase, credit) {
          return new Promise((resolve, reject) => {
            this.sender.callServer((_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
              error: Error()
            }), ClientSendAction) : ClientSendAction).CreditExchange, {
              rate: betBase,
              credit: String(credit)
            });
            this.receiver.once((_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
              error: Error()
            }), ServerSendAction) : ServerSendAction).CreditExchange, data => {
              (data.result.event ? resolve : reject)(data);
            });
          });
        }

        async balanceExchange() {
          return new Promise((resolve, reject) => {
            this.sender.callServer((_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
              error: Error()
            }), ClientSendAction) : ClientSendAction).BalanceExchange);
            this.receiver.once((_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
              error: Error()
            }), ServerSendAction) : ServerSendAction).BalanceExchange, data => {
              (data.result.event ? resolve : reject)(data);
            });
          });
        }

        async fastExchange(betBase) {
          //@TODO async function reject case handle, view層相關事件解耦
          if (this.model.dataModel.credit && this.model.dataModel.betBase) {
            const onBalanceExchangeData = await this.balanceExchange();
            const onGatMachineDetail = await this.getMachineDetail();

            if (this.model.dataModel.washInfo) {
              const amount = Math.min(this.model.dataModel.balance, this.model.dataModel.washInfo.amount);
              const new_credit = Math.floor(amount * (_crd && DataModel === void 0 ? (_reportPossibleCrUseOfDataModel({
                error: Error()
              }), DataModel) : DataModel).BaseToRatio(betBase));
              const onCreditExchangeData = await this.creditExchange(betBase, new_credit);
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c8d83c1a94450ca5b790b17a67819004776186a7.js.map