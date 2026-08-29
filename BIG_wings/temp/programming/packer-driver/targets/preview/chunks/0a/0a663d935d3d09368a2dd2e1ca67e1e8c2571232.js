System.register(["__unresolved_0", "cc", "@casino-mono/share-tools", "__unresolved_1", "__unresolved_2", "@casino-mono/mvc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AIOBridge, ClientRecvAction, ClientSendAction, DataModel, BasePresenter, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
          var {
            line,
            maxLine
          } = this.model.dataModel;

          if (line != null) {
            var newLine = line + 1;

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


        minusLine(loop) {
          if (loop === void 0) {
            loop = true;
          }

          var {
            line,
            maxLine
          } = this.model.dataModel;

          if (line != null) {
            var newLine = line - 1;

            if (maxLine && newLine < 1) {
              if (loop) newLine = maxLine;else newLine = 1;
            }

            this.setLine(newLine);
          }
        }

        maxBet() {
          var {
            maxLineBet,
            lineBet
          } = this.model.dataModel;

          if (maxLineBet != null && lineBet != null) {
            this.setLineBet(maxLineBet);
          }

          var {
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


        login() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var {
              sender,
              receiver,
              model
            } = _this;
            var {
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
          })();
        }
        /**
         * 佔機台預設在login會呼叫一次
         * @param sendAgain 重試
         * @returns 
         */


        takeMachine(sendAgain) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (sendAgain === void 0) {
              sendAgain = false;
            }

            var {
              sender,
              receiver,
              model
            } = _this2;
            return new Promise((resolve, reject) => {
              var {
                gameType
              } = model.dataModel;
              var {
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
          })();
        } // 取得機台資訊


        getMachineDetail() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            return new Promise((resolve, reject) => {
              var {
                sender,
                receiver,
                model
              } = _this3;
              var {
                gameType
              } = model.dataModel;
              var {
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
          })();
        } // 取得遊戲資訊


        onLoadInfo() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            return new Promise((resolve, reject) => {
              var {
                sender,
                receiver,
                model
              } = _this4;
              var {
                gameType
              } = model.dataModel;
              var {
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
          })();
        }
        /**
         * 開始遊戲
         * @param opts 下注參數betInfo
         * @description { BetCredit: number }
         * @returns RecvMessage.MachjongBeginGameData 碰碰胡遊戲結果
         */


        beginGame(betInfo) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            var {
              sender,
              receiver,
              model
            } = _this5;
            var {
              gameType
            } = model.dataModel;
            var type = typeof betInfo;

            if (type == "number") {
              betInfo = {
                BetCredit: betInfo
              };
            } else if (Array.isArray(betInfo)) {
              return Promise.reject({
                event: false,
                message: "beginGame: Invalid betInfo value for " + betInfo
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
          })();
        }

        endGame() {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            return new Promise((resolve, reject) => {
              var {
                sender,
                receiver,
                model
              } = _this6;
              var {
                EndGame
              } = _crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
                error: Error()
              }), ClientSendAction) : ClientSendAction;
              var {
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
          })();
        }

        gamble() {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            return new Promise((resolve, reject) => {
              var {
                sender,
                receiver,
                model
              } = _this7;
              var {
                Gamble
              } = _crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
                error: Error()
              }), ClientSendAction) : ClientSendAction;
              var {
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
          })();
        } // 洗分


        creditExchange(betBase, credit) {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            var {
              sender,
              receiver,
              model
            } = _this8;
            var {
              gameType
            } = model.data;
            yield new Promise((resolve, reject) => {
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
            return _this8.model.getExchangeInfo();
          })();
        }

        saveUserAutoExchange(data, exchangeRecord) {
          // TODO:自動換分
          var {
            sender,
            receiver,
            model
          } = this;
          var {
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
          var {
            model
          } = this;
          var {
            analysisInfo
          } = model;
        }

        updateUserAnalysis() {
          // TODO:系統記錄
          var {
            sender,
            receiver,
            model
          } = this;
          var {
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
          var {
            view,
            model
          } = this;
          var {
            action,
            event
          } = evt;
          var {
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
          var {
            event
          } = this;
          this.TriggerConnectionTypes.forEach(action => {
            event.on(action, this.handelConneciontEvent.bind(this));
          });
        } // 連線觸發百分比事件


        registerHandleProgressEvents() {
          var {
            view
          } = this;
          var {
            event
          } = this;

          if (view) {
            this.TriggerConnectionProgression.forEach(_ref => {
              var [action, value] = _ref;
              event.once(action, view.updateProgress.bind(this, value));
            });
          }
        } // 開啟換分頁面


        openCreditExchangePanel() {
          var _this9 = this;

          return _asyncToGenerator(function* () {
            console.log('[Presenter::openCreditExchangePanel]');
            yield _this9.getMachineDetail();
            var {
              view,
              model
            } = _this9;
            var {
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
          })();
        }

        isServerError(evt) {
          return !evt.event;
        } // ExchangePanel 


        balanceExchange() {
          var _this10 = this;

          return _asyncToGenerator(function* () {
            var {
              model
            } = _this10;
            var {
              gameType
            } = model.dataModel;
            yield model.send((_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
              error: Error()
            }), ClientSendAction) : ClientSendAction).BalanceExchange, {
              action: (_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
                error: Error()
              }), ClientSendAction) : ClientSendAction).BalanceExchange
            });
            return _this10.model.getExchangeInfo();
          })();
        } // Exit


        exit() {
          var _this11 = this;

          return _asyncToGenerator(function* () {
            var {
              model,
              view
            } = _this11;
            var {
              gameType
            } = model.dataModel;
            var data = {
              action: (_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
                error: Error()
              }), ClientSendAction) : ClientSendAction).Exit,
              gameType
            };
            yield model.send((_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
              error: Error()
            }), ClientSendAction) : ClientSendAction).Exit, data);
          })();
        }

        fastExchange(betBase) {
          var _this12 = this;

          return _asyncToGenerator(function* () {
            //@TODO async function reject case handle, view層相關事件解耦
            if (_this12.model.dataModel.credit && _this12.model.dataModel.betBase) {
              var onBalanceExchangeData = yield _this12.balanceExchange();
              var onGetMachineDetail = yield _this12.getMachineDetail();

              if (_this12.model.dataModel.washInfo) {
                var amount = Math.min(_this12.model.dataModel.balance, _this12.model.dataModel.washInfo.amount);
                var new_credit = Math.floor(amount * (_crd && DataModel === void 0 ? (_reportPossibleCrUseOfDataModel({
                  error: Error()
                }), DataModel) : DataModel).BaseToRatio(betBase));
                var onCreditExchangeData = yield _this12.creditExchange(betBase, new_credit);
              }
            }

            return _this12.model.getExchangeInfo();
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0a663d935d3d09368a2dd2e1ca67e1e8c2571232.js.map