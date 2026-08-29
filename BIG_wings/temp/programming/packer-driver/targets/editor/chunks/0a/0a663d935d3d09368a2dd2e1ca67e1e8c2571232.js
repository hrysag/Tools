System.register(["__unresolved_0", "cc", "@casino-mono/share-tools", "__unresolved_1", "__unresolved_2", "@casino-mono/mvc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AIOBridge, ClientRecvAction, ClientSendAction, DataModel, BasePresenter, _crd;

  function _reportPossibleCrUseOfAIOBridge(extras) {
    _reporterNs.report("AIOBridge", "@casino-mono/share-tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseModel(extras) {
    _reporterNs.report("BaseModel", "./BaseModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseView(extras) {
    _reporterNs.report("BaseView", "./BaseView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientRecvAction(extras) {
    _reporterNs.report("ClientRecvAction", "./RecvMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRecvMessage(extras) {
    _reporterNs.report("RecvMessage", "./RecvMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientSendAction(extras) {
    _reporterNs.report("ClientSendAction", "./SendMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataModel(extras) {
    _reporterNs.report("DataModel", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExchangeInfo(extras) {
    _reporterNs.report("ExchangeInfo", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfController(extras) {
    _reporterNs.report("IfController", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonCreditExchange(extras) {
    _reporterNs.report("onCreditExchange", "@casino-mono/mvc", _context.meta, extras);
  }

  _export("BasePresenter", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_casinoMonoShareTools) {
      AIOBridge = _casinoMonoShareTools.AIOBridge;
    }, function (_unresolved_2) {
      ClientRecvAction = _unresolved_2.ClientRecvAction;
    }, function (_unresolved_3) {
      ClientSendAction = _unresolved_3.ClientSendAction;
    }, function (_casinoMonoMvc) {
      DataModel = _casinoMonoMvc.DataModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c366dVomIdD+KqjKML87ue7", "BasePresenter", undefined);

      /**
       * Presenter interface
       */
      _export("BasePresenter", BasePresenter = class BasePresenter {
        get sender() {
          var _this$model;

          return (_this$model = this.model) == null ? void 0 : _this$model.connection.sender;
        }

        get receiver() {
          var _this$model2;

          return (_this$model2 = this.model) == null ? void 0 : _this$model2.connection.receiver;
        }
        /** 覺得event應該是放在這裡 */


        get event() {
          var _this$model3;

          return (_this$model3 = this.model) == null ? void 0 : _this$model3.connection.event;
        }

        get gameCode() {
          return this.model.dataModel.gameCode;
        }

        set gameType(value) {
          this.model.dataModel.gameType = value;
        }

        get gameType() {
          return this.model.dataModel.gameType;
        }

        set sid(value) {
          this.model.dataModel.sid = value;
        }

        get sid() {
          return this.model.dataModel.sid;
        }

        get isJoinGame() {
          return this.model.data.isJoinGame;
        }

        get rates() {
          return this.model.dataModel.rates;
        }

        get lineList() {
          return this.model.dataModel.lineList;
        }

        get creditList() {
          return this.model.dataModel.creditList;
        }

        get defaultBetCredit() {
          return this.model.dataModel.defaultBetCredit;
        }

        get credit() {
          return this.model.dataModel.credit;
        }

        get bet() {
          return this.model.dataModel.bet;
        }

        get connected() {
          var _this$model4;

          return ((_this$model4 = this.model) == null || (_this$model4 = _this$model4.data) == null ? void 0 : _this$model4.connected) || false;
        }

        constructor(model, view) {
          /** 遊戲事件觸發對應事件 */
          this.TriggerConnectionTypes = [(_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
            error: Error()
          }), ClientRecvAction) : ClientRecvAction).Ready, (_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
            error: Error()
          }), ClientRecvAction) : ClientRecvAction).UpdateJP, (_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
            error: Error()
          }), ClientRecvAction) : ClientRecvAction).LoadInfo, (_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
            error: Error()
          }), ClientRecvAction) : ClientRecvAction).GetMachineDetail, (_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
            error: Error()
          }), ClientRecvAction) : ClientRecvAction).CreditExchange, (_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
            error: Error()
          }), ClientRecvAction) : ClientRecvAction).BalanceExchange];

          /** 遊戲連線處理百分比 */
          this.TriggerConnectionProgression = [[(_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
            error: Error()
          }), ClientRecvAction) : ClientRecvAction).WSOpen, 91], [(_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
            error: Error()
          }), ClientRecvAction) : ClientRecvAction).Ready, 92], [(_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
            error: Error()
          }), ClientRecvAction) : ClientRecvAction).Login, 93], [(_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
            error: Error()
          }), ClientRecvAction) : ClientRecvAction).TakeMachine, 94], [(_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
            error: Error()
          }), ClientRecvAction) : ClientRecvAction).LoadInfo, 95]];

          /** main Model Interface */
          this.model = void 0;

          /** @protected main View Interface */
          this.view = void 0;
          this.model = model;
          this.view = view;
          this.model.dataModel.sid = "";
          this.model.dataModel.gameType = "";
        }

        addLineBet() {
          throw new Error("Method not implemented.");
        }

        minusLineBet() {
          throw new Error("Method not implemented.");
        }

        end() {
          throw new Error("Method not implemented.");
        }

        double() {
          throw new Error("Method not implemented.");
        }

        free() {
          throw new Error("Method not implemented.");
        }

        leaveMachine() {
          throw new Error("Method not implemented.");
        }

        connect(address) {
          return this.model.connect(address);
        }
        /**
         * 連線遊戲
         * @param line 
         */


        setLine(line) {
          this.model.dataModel.line = line;
        }
        /**
         * 連線遊戲
         * @param lineBet 
         */


        setLineBet(lineBet) {
          this.model.dataModel.lineBet = lineBet;
        }
        /**
         * 連線遊戲
         * @param loop 
         */


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
        /**
         * 連線遊戲
         * @param loop 
         */


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
        } // 靜音？


        mute() {}

        backgroundMusic() {}

        history() {}

        help() {}

        deposit() {}

        gameInfo() {} // 登入


        async login() {
          const {
            sender,
            receiver,
            model
          } = this;
          const {
            gameType,
            sid,
            lang
          } = model.data;
          return new Promise((resolve, reject) => {
            // TODO: Need implement dInfo
            sender.callServer((_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
              error: Error()
            }), ClientSendAction) : ClientSendAction).Login, {
              action: (_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
                error: Error()
              }), ClientSendAction) : ClientSendAction).Login,
              gtype: gameType,
              dInfo: model.deviceInfo,
              hallID: "1",
              lang,
              sid
            });
            receiver.once((_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).Login, result => {
              (result.result ? resolve : reject)(result);
            });
          });
        }
        /**
         * 佔機台預設在login會呼叫一次
         * @param sendAgain 重試
         * @returns 
         */


        async takeMachine(sendAgain = false) {
          const {
            sender,
            receiver,
            model
          } = this;
          return new Promise((resolve, reject) => {
            const {
              gameType
            } = model.dataModel;
            const {
              TakeMachine
            } = _crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
              error: Error()
            }), ClientSendAction) : ClientSendAction;
            if (model.gameCode && model.gameCode != "") resolve(model.gameCode);
            if (sendAgain) sender.callServer(TakeMachine, {
              action: TakeMachine,
              gameType
            });
            receiver.once((_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).TakeMachine, result => {
              result.error ? reject(model.gameCode) : resolve(model.gameCode);
            });
          });
        } // 取得機台資訊


        async getMachineDetail() {
          return new Promise((resolve, reject) => {
            const {
              sender,
              receiver,
              model
            } = this;
            const {
              gameType
            } = model.dataModel;
            const {
              GetMachineDetail
            } = _crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
              error: Error()
            }), ClientSendAction) : ClientSendAction;
            sender.callServer(GetMachineDetail, {
              action: GetMachineDetail,
              gameType
            });
            receiver.once((_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).GetMachineDetail, result => {
              (result.result.event && result.result.data.event ? resolve : reject)(result);
            });
          });
        } // 取得遊戲資訊


        async onLoadInfo() {
          return new Promise((resolve, reject) => {
            const {
              sender,
              receiver,
              model
            } = this;
            const {
              gameType
            } = model.dataModel;
            const {
              LoadInfo
            } = _crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
              error: Error()
            }), ClientSendAction) : ClientSendAction; // return model.send(ClientSendAction.LoadInfo, { action: ClientSendAction.LoadInfo });

            sender.callServer(LoadInfo, {
              action: LoadInfo
            });
            receiver.once((_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).LoadInfo, result => {
              (result.result.event && result.result.data.event ? resolve : reject)(result);
            });
          });
        }
        /**
         * 開始遊戲
         * @param opts 下注參數betInfo
         * @description { BetCredit: number }
         * @returns RecvMessage.MachjongBeginGameData 碰碰胡遊戲結果
         */


        async beginGame(betInfo) {
          const {
            sender,
            receiver,
            model
          } = this;
          const {
            gameType
          } = model.dataModel;
          const type = typeof betInfo;

          if (type == "number") {
            betInfo = {
              BetCredit: betInfo
            };
          } else if (Array.isArray(betInfo)) {
            return Promise.reject({
              event: false,
              message: `beginGame: Invalid betInfo value for ${betInfo}`
            });
          }

          return new Promise((resolve, reject) => {
            sender.callServer((_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
              error: Error()
            }), ClientSendAction) : ClientSendAction).BeginGame, {
              action: (_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
                error: Error()
              }), ClientSendAction) : ClientSendAction).BeginGame,
              gameType,
              betInfo
            });
            receiver.once((_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).BeginGame, result => {
              (result.result.event ? resolve : reject)(result);
            });
          });
        }

        async endGame() {
          return new Promise((resolve, reject) => {
            const {
              sender,
              receiver,
              model
            } = this;
            const {
              EndGame
            } = _crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
              error: Error()
            }), ClientSendAction) : ClientSendAction;
            const {
              sid,
              wagersID
            } = model.data;
            sender.callServer(EndGame, {
              action: EndGame,
              sid,
              wagersID
            });
            receiver.once((_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).EndGame, result => {
              (result.result.event ? resolve : reject)(result);
            });
          });
        }

        async gamble() {
          return new Promise((resolve, reject) => {
            const {
              sender,
              receiver,
              model
            } = this;
            const {
              Gamble
            } = _crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
              error: Error()
            }), ClientSendAction) : ClientSendAction;
            const {
              sid,
              wagersID,
              gameType,
              gameCode
            } = model.data;
            sender.callServer(Gamble, {
              action: Gamble,
              sid,
              wagersID,
              gameType,
              gameCode
            });
            receiver.once((_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).Gamble, result => {
              (result.result.event ? resolve : reject)(result);
            });
          });
        } // 洗分


        async creditExchange(betBase, credit) {
          const {
            sender,
            receiver,
            model
          } = this;
          const {
            gameType
          } = model.data;
          await new Promise((resolve, reject) => {
            sender.callServer((_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
              error: Error()
            }), ClientSendAction) : ClientSendAction).CreditExchange, {
              action: (_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
                error: Error()
              }), ClientSendAction) : ClientSendAction).CreditExchange,
              rate: betBase,
              credit
            });
            receiver.once((_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).CreditExchange, result => {
              (result.result.event ? resolve : reject)(result);
            });
          });
          return this.model.getExchangeInfo();
        }

        saveUserAutoExchange(data, exchangeRecord) {
          // TODO:自動換分
          const {
            sender,
            receiver,
            model
          } = this;
          const {
            gameType
          } = model.dataModel;
          return new Promise((resolve, reject) => {
            sender.callServer((_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
              error: Error()
            }), ClientSendAction) : ClientSendAction).SaveUserAutoExchange, {
              action: (_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
                error: Error()
              }), ClientSendAction) : ClientSendAction).SaveUserAutoExchange,
              gameType,
              data,
              exchangeRecord
            });
            receiver.once((_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).SaveUserAutoExchange, result => {
              (result.event ? resolve : reject)(result);
            });
          });
        }

        setAnalysis(key, data) {
          const {
            model
          } = this;
          const {
            analysisInfo
          } = model;
        }

        updateUserAnalysis() {
          // TODO:系統記錄
          const {
            sender,
            receiver,
            model
          } = this;
          const {
            gameType
          } = model.dataModel;
          return new Promise((resolve, reject) => {
            sender.callServer((_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
              error: Error()
            }), ClientSendAction) : ClientSendAction).UpdateUserAnalysis, {
              action: (_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
                error: Error()
              }), ClientSendAction) : ClientSendAction).UpdateUserAnalysis,
              gameType,
              data: model.analysisInfo.report()
            });
            receiver.once((_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).SaveUserAutoExchange, result => {
              (result.event ? resolve : reject)(result);
            });
          });
        } // 綁定事件


        handelConneciontEvent(evt) {
          const {
            view,
            model
          } = this;
          const {
            action,
            event
          } = evt;
          const {
            credit,
            balance,
            betBase,
            base,
            washInfo
          } = model.dataModel; // if (this.isServerError(evt)) return;

          switch (action) {
            case (_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).Ready:
              (_crd && AIOBridge === void 0 ? (_reportPossibleCrUseOfAIOBridge({
                error: Error()
              }), AIOBridge) : AIOBridge).onLoaded();
              break;

            case (_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).UpdateJP:
              view.updateJackpot(model.dataModel.jpValue);
              break;

            case (_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).LoadInfo:
              view.setupGameManager();
              break;

            case (_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).GetMachineDetail:
              view.updateMachineInfo({
                credit,
                balance,
                betBase,
                base
              });
              break;

            case (_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).CreditExchange:
              view.updateCreditExchangeInfo({
                credit,
                balance,
                betBase,
                base
              });
              break;

            case (_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).BalanceExchange:
              view.updateBalanceExhchangeInfo({
                credit,
                balance,
                betBase,
                base,
                washInfo
              });
              break;
          }
        } // 註冊 server websocket 接收的事件


        registerRecvEvents() {
          const {
            event
          } = this;
          this.TriggerConnectionTypes.forEach(action => {
            event.on(action, this.handelConneciontEvent.bind(this));
          });
        } // 連線觸發百分比事件


        registerHandleProgressEvents() {
          const {
            view
          } = this;
          const {
            event
          } = this;

          if (view) {
            this.TriggerConnectionProgression.forEach(([action, value]) => {
              event.once(action, view.updateProgress.bind(this, value));
            });
          }
        } // 開啟換分頁面


        async openCreditExchangePanel() {
          console.log('[Presenter::openCreditExchangePanel]');
          await this.getMachineDetail();
          const {
            view,
            model
          } = this;
          const {
            credit,
            balance,
            betBase,
            base
          } = model.data;

          if (view) {
            view.showExchangePanel();
            view.updateExchangePanel({
              credit,
              balance,
              betBase,
              base
            });
          }
        }

        isServerError(evt) {
          return !evt.event;
        } // ExchangePanel 


        async balanceExchange() {
          const {
            model
          } = this;
          const {
            gameType
          } = model.dataModel;
          await model.send((_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
            error: Error()
          }), ClientSendAction) : ClientSendAction).BalanceExchange, {
            action: (_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
              error: Error()
            }), ClientSendAction) : ClientSendAction).BalanceExchange
          });
          return this.model.getExchangeInfo();
        } // Exit


        async exit() {
          const {
            model,
            view
          } = this;
          const {
            gameType
          } = model.dataModel;
          const data = {
            action: (_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
              error: Error()
            }), ClientSendAction) : ClientSendAction).Exit,
            gameType
          };
          await model.send((_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
            error: Error()
          }), ClientSendAction) : ClientSendAction).Exit, data);
        }

        async fastExchange(betBase) {
          //@TODO async function reject case handle, view層相關事件解耦
          if (this.model.dataModel.credit && this.model.dataModel.betBase) {
            const onBalanceExchangeData = await this.balanceExchange();
            const onGetMachineDetail = await this.getMachineDetail();

            if (this.model.dataModel.washInfo) {
              const amount = Math.min(this.model.dataModel.balance, this.model.dataModel.washInfo.amount);
              const new_credit = Math.floor(amount * (_crd && DataModel === void 0 ? (_reportPossibleCrUseOfDataModel({
                error: Error()
              }), DataModel) : DataModel).BaseToRatio(betBase));
              const onCreditExchangeData = await this.creditExchange(betBase, new_credit);
            }
          }

          return this.model.getExchangeInfo();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0a663d935d3d09368a2dd2e1ca67e1e8c2571232.js.map