System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AIOBridge, GetErrorInfo, ServerSendAction, isSeverError, CommandEventName, ExchangePanelEventName, ToolBarEventName, View, CasinoView, _crd;

  function _reportPossibleCrUseOfAIOBridge(extras) {
    _reporterNs.report("AIOBridge", "../../../../share-tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfController(extras) {
    _reporterNs.report("Controller", "../controller/Controller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModel(extras) {
    _reporterNs.report("Model", "../model/Model", _context.meta, extras);
  }

  function _reportPossibleCrUseOfValuesType(extras) {
    _reporterNs.report("ValuesType", "utility-types", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetErrorInfo(extras) {
    _reporterNs.report("GetErrorInfo", "../../connection/connector/receive/SeverAction", _context.meta, extras);
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

  function _reportPossibleCrUseOfAbstractExchangePanel(extras) {
    _reporterNs.report("AbstractExchangePanel", "../../interface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommandEventName(extras) {
    _reporterNs.report("CommandEventName", "../../interface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExchangePanelEventName(extras) {
    _reporterNs.report("ExchangePanelEventName", "../../interface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfAlertPanel(extras) {
    _reporterNs.report("IfAlertPanel", "../../interface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfCostume(extras) {
    _reporterNs.report("IfCostume", "../../interface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToolBarEventName(extras) {
    _reporterNs.report("ToolBarEventName", "../../interface", _context.meta, extras);
  }

  _export({
    View: void 0,
    CasinoView: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AIOBridge = _unresolved_2.AIOBridge;
    }, function (_unresolved_3) {
      GetErrorInfo = _unresolved_3.GetErrorInfo;
      ServerSendAction = _unresolved_3.ServerSendAction;
      isSeverError = _unresolved_3.isSeverError;
    }, function (_unresolved_4) {
      CommandEventName = _unresolved_4.CommandEventName;
      ExchangePanelEventName = _unresolved_4.ExchangePanelEventName;
      ToolBarEventName = _unresolved_4.ToolBarEventName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68d87Y6a3FPKr7u36tO11Ti", "View", undefined);

      _export("View", View = class View {
        constructor(model, controller) {
          this.alertPanel = void 0;
          this.exchangePanel = void 0;
          this.costume = void 0;
          this.model = model;
          this.controller = controller;
          this.configCommandEvent();
          this.configToolbarEvent();
          this.configReceiveEvent();
        }

        initCostume() {//@TODO 遊戲
        }

        alert(dict_key, id) {
          console.error(`[View::alert]`, dict_key, id);
        }

        hideHTMLUI() {}

        updateProgress(progress) {}

        configCommandEvent() {
          var _this$costume;

          const command = (_this$costume = this.costume) == null ? void 0 : _this$costume.command;

          if (command) {
            const {
              controller
            } = this;
            command.event.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).SPIN, controller.beginGame.bind(controller));
            command.event.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).MAX_BET, controller.maxBet.bind(controller));
            command.event.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).LINE_BET, controller.addLine.bind(controller));
            command.event.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).LINE_BET_MINUS, controller.minusLine.bind(controller));
            command.event.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).LINE, controller.addLine.bind(controller));
            command.event.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).LINE_MINUS, controller.minusLine.bind(controller));
            command.event.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).DOUBLE, controller.double.bind(controller));
            command.event.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).UPDATE_LINEBET, controller.setLineBet.bind(controller));
            command.event.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).UPDATE_LINE, controller.setLine.bind(controller));
            command.event.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).CHANGE_RATIO, controller.fastExchange.bind(controller)); //開分事件另外處理

            command.event.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).EXCHANGE, this.openCreditExchangePanel.bind(this));
          }
        }

        configToolbarEvent() {
          var _this$costume2;

          if ((_this$costume2 = this.costume) != null && _this$costume2.toolbar) {
            const {
              toolbar
            } = this.costume;
            const {
              controller
            } = this; //簡單邏輯 , 就不再透過 switch case 來處理了

            toolbar.event.on((_crd && ToolBarEventName === void 0 ? (_reportPossibleCrUseOfToolBarEventName({
              error: Error()
            }), ToolBarEventName) : ToolBarEventName).MUSIC, controller.backgroundMusic.bind(this.controller));
            toolbar.event.on((_crd && ToolBarEventName === void 0 ? (_reportPossibleCrUseOfToolBarEventName({
              error: Error()
            }), ToolBarEventName) : ToolBarEventName).MUTE, controller.mute.bind(this.controller));
            toolbar.event.on((_crd && ToolBarEventName === void 0 ? (_reportPossibleCrUseOfToolBarEventName({
              error: Error()
            }), ToolBarEventName) : ToolBarEventName).EXIT, controller.exit.bind(this.controller));
            toolbar.event.on((_crd && ToolBarEventName === void 0 ? (_reportPossibleCrUseOfToolBarEventName({
              error: Error()
            }), ToolBarEventName) : ToolBarEventName).HELP, controller.help.bind(this.controller));
            toolbar.event.on((_crd && ToolBarEventName === void 0 ? (_reportPossibleCrUseOfToolBarEventName({
              error: Error()
            }), ToolBarEventName) : ToolBarEventName).HISTORY, controller.history.bind(this.controller));
            toolbar.event.on((_crd && ToolBarEventName === void 0 ? (_reportPossibleCrUseOfToolBarEventName({
              error: Error()
            }), ToolBarEventName) : ToolBarEventName).DEPOSIT, controller.deposit.bind(this.controller));
            toolbar.event.on((_crd && ToolBarEventName === void 0 ? (_reportPossibleCrUseOfToolBarEventName({
              error: Error()
            }), ToolBarEventName) : ToolBarEventName).GAMEINFO, controller.gameInfo.bind(this.controller)); //開分事件另外處理

            toolbar.event.on((_crd && ToolBarEventName === void 0 ? (_reportPossibleCrUseOfToolBarEventName({
              error: Error()
            }), ToolBarEventName) : ToolBarEventName).ONEXCHANGE, this.openCreditExchangePanel.bind(this));
          }
        } //監聽 server websocket 接收的事件


        configReceiveEvent() {
          const {
            connection
          } = this.model;
          [(_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
            error: Error()
          }), ServerSendAction) : ServerSendAction).Ready, (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
            error: Error()
          }), ServerSendAction) : ServerSendAction).UpdateJP, (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
            error: Error()
          }), ServerSendAction) : ServerSendAction).FullMachine, (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
            error: Error()
          }), ServerSendAction) : ServerSendAction).LoadInfo, (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
            error: Error()
          }), ServerSendAction) : ServerSendAction).GetMachineDetail, (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
            error: Error()
          }), ServerSendAction) : ServerSendAction).CreditExchange, (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
            error: Error()
          }), ServerSendAction) : ServerSendAction).BalanceExchange].forEach(action => {
            connection.event.on(action, this.handelConnectionEvent.bind(this));
          });
        }

        handelConnectionEvent(evt) {
          //@TODO 這邊還沒處理 error event 相關事宜
          if (this.isServerError(evt)) return;

          switch (evt.action) {
            case (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
              error: Error()
            }), ServerSendAction) : ServerSendAction).Ready:
              (_crd && AIOBridge === void 0 ? (_reportPossibleCrUseOfAIOBridge({
                error: Error()
              }), AIOBridge) : AIOBridge).onLoaded();
              break;

            case (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
              error: Error()
            }), ServerSendAction) : ServerSendAction).UpdateJP:
              this.updateJackpot();
              break;

            case (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
              error: Error()
            }), ServerSendAction) : ServerSendAction).FullMachine:
              this.showWaiting();
              break;

            case (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
              error: Error()
            }), ServerSendAction) : ServerSendAction).LoadInfo:
              this.setupCostume();
              break;

            case (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
              error: Error()
            }), ServerSendAction) : ServerSendAction).GetMachineDetail:
              this.updateMachineInfo();
              break;

            case (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
              error: Error()
            }), ServerSendAction) : ServerSendAction).CreditExchange:
              this.updateCreditExchangeInfo();
              break;

            case (_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
              error: Error()
            }), ServerSendAction) : ServerSendAction).BalanceExchange:
              this.updateBalanceExchangeInfo();
              break;

            default:
              break;
          }
        }

        isServerError(evt) {
          if ((_crd && isSeverError === void 0 ? (_reportPossibleCrUseOfisSeverError({
            error: Error()
          }), isSeverError) : isSeverError)(evt)) {
            const error_info = (_crd && GetErrorInfo === void 0 ? (_reportPossibleCrUseOfGetErrorInfo({
              error: Error()
            }), GetErrorInfo) : GetErrorInfo)(evt);
            this.alert(error_info.key, error_info.id);
            return true;
          }

          return false;
        }

        handleProgress() {
          const {
            connection
          } = this == null ? void 0 : this.model;

          if (connection) {
            connection.socket.once("open", this.updateProgress.bind(this, 91)); //91

            connection.receiver.once((_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
              error: Error()
            }), ServerSendAction) : ServerSendAction).Ready, this.updateProgress.bind(this, 92)); //92

            connection.receiver.once((_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
              error: Error()
            }), ServerSendAction) : ServerSendAction).Login, this.updateProgress.bind(this, 93)); //93

            connection.receiver.once((_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
              error: Error()
            }), ServerSendAction) : ServerSendAction).TakeMachine, this.updateProgress.bind(this, 94)); //94

            connection.receiver.once((_crd && ServerSendAction === void 0 ? (_reportPossibleCrUseOfServerSendAction({
              error: Error()
            }), ServerSendAction) : ServerSendAction).LoadInfo, this.updateProgress.bind(this, 95)); //95
          }
        }

        updateJackpot() {
          var _this$model$dataModel;

          if ((_this$model$dataModel = this.model.dataModel) != null && _this$model$dataModel.jpValue) {
            var _this$costume3;

            (_this$costume3 = this.costume) == null || _this$costume3.updateJackpot == null ? void 0 : _this$costume3.updateJackpot(this.model.dataModel.jpValue);
          }
        }

        updateMarquee() {
          var _this$model$dataModel2;

          if ((_this$model$dataModel2 = this.model.dataModel) != null && _this$model$dataModel2.marquee) {
            var _this$costume4;

            (_this$costume4 = this.costume) == null || _this$costume4.updateMarquee == null ? void 0 : _this$costume4.updateMarquee(this.model.dataModel.marquee);
          }
        }

        showWaiting() {
          this.alert("FULLY_OCCUPIED");
        }

        setupCostume() {}

        updateMachineInfo() {
          if (this.exchangePanel) {
            const {
              credit,
              balance,
              betBase,
              base
            } = this.model.dataModel;
            this.exchangePanel.update({
              credit,
              balance,
              betBase,
              base
            });
          }
        }

        updateCreditExchangeInfo() {
          if (this.exchangePanel) {
            const {
              credit,
              balance,
              betBase,
              base
            } = this.model.dataModel;
            this.exchangePanel.update({
              credit,
              balance,
              betBase,
              base
            });
          }
        }

        updateBalanceExchangeInfo() {
          if (this.exchangePanel) {
            const {
              credit,
              balance,
              betBase,
              base,
              washInfo
            } = this.model.dataModel;
            this.exchangePanel.update({
              credit,
              balance,
              betBase,
              base,
              washInfo
            });
          }
        }
        /**
         * 處理換分面板事件 與 controller 之間的溝通
         */


        handleExchangePanelEvent() {
          const {
            exchangePanel
          } = this;

          if (exchangePanel) {
            const {
              controller
            } = this;
            exchangePanel.event.on((_crd && ExchangePanelEventName === void 0 ? (_reportPossibleCrUseOfExchangePanelEventName({
              error: Error()
            }), ExchangePanelEventName) : ExchangePanelEventName).CREDIT_EXCHANGE, data => {
              controller.creditExchange(data.betBase, data.amount);
            });
            exchangePanel.event.on((_crd && ExchangePanelEventName === void 0 ? (_reportPossibleCrUseOfExchangePanelEventName({
              error: Error()
            }), ExchangePanelEventName) : ExchangePanelEventName).BALANCE_EXCHANGE, controller.balanceExchange.bind(controller));
            exchangePanel.event.on((_crd && ExchangePanelEventName === void 0 ? (_reportPossibleCrUseOfExchangePanelEventName({
              error: Error()
            }), ExchangePanelEventName) : ExchangePanelEventName).CHANGE_RATIO, data => {
              controller.fastExchange(data.ratio);
            });
            exchangePanel.event.on((_crd && ExchangePanelEventName === void 0 ? (_reportPossibleCrUseOfExchangePanelEventName({
              error: Error()
            }), ExchangePanelEventName) : ExchangePanelEventName).LEAVE_GAME, controller.leaveMachine.bind(controller));
          }
        }

        async openCreditExchangePanel() {
          console.log('[View::openCreditExchangePanel]');
          await this.controller.getMachineDetail();

          if (this.exchangePanel) {
            const {
              credit,
              balance,
              betBase,
              base
            } = this.model.dataModel;
            this.exchangePanel.show();
            this.exchangePanel.update({
              credit,
              balance,
              betBase,
              base
            });
          }
        }

      });

      _export("CasinoView", CasinoView = class CasinoView extends View {});

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c5229e7f938ca6e85ba4d14cf666bff2dcbfc855.js.map