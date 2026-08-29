System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "@casino-mono/mvc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BasePresenter, BaseModel, CommandEventName, ExchangePanelEventName, ToolBarEventName, Component, BaseView, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfBasePresenter(extras) {
    _reporterNs.report("BasePresenter", "./BasePresenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseModel(extras) {
    _reporterNs.report("BaseModel", "./BaseModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommandEventName(extras) {
    _reporterNs.report("CommandEventName", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExchangeInfo(extras) {
    _reporterNs.report("ExchangeInfo", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExchangePanelEventName(extras) {
    _reporterNs.report("ExchangePanelEventName", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfAlertPanel(extras) {
    _reporterNs.report("IfAlertPanel", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToolBarEventName(extras) {
    _reporterNs.report("ToolBarEventName", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../components/GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCocosExchangePanel(extras) {
    _reporterNs.report("CocosExchangePanel", "../components/ExchangePanel", _context.meta, extras);
  }

  _export("BaseView", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      BasePresenter = _unresolved_2.BasePresenter;
    }, function (_unresolved_3) {
      BaseModel = _unresolved_3.BaseModel;
    }, function (_casinoMonoMvc) {
      CommandEventName = _casinoMonoMvc.CommandEventName;
      ExchangePanelEventName = _casinoMonoMvc.ExchangePanelEventName;
      ToolBarEventName = _casinoMonoMvc.ToolBarEventName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "178782rkHVBarUQc+QpDTFl", "BaseView", undefined);

      __checkObsolete__(['Component', 'warn']);

      _export("BaseView", BaseView = class BaseView extends Component {
        constructor() {
          super();
          this.presenter = void 0;
          this.alertPanel = void 0;
          this.exchangePanel = void 0;
          this.gameManager = void 0;
        }

        start() {
          this.configCommandEvent();
          this.configToolbarEvent();
        } // Splash Screen or Launch Screen


        updateProgress(progress) {
          console.info("progress: " + progress);
        }

        hideHTMLUI() {}

        configCommandEvent() {
          var _this$gameManager,
              _this = this;

          var command = (_this$gameManager = this.gameManager) == null ? void 0 : _this$gameManager.command;

          if (command) {
            var {
              presenter
            } = this;
            command.event.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).SPIN, /*#__PURE__*/_asyncToGenerator(function* (betInfo) {
              var data = yield presenter.beginGame(betInfo);

              _this.gameManager.begin(data.result.data);
            }));
            command.event.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).MAX_BET, presenter.maxBet.bind(presenter));
            command.event.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).LINE_BET, presenter.addLine.bind(presenter));
            command.event.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).LINE_BET_MINUS, presenter.minusLine.bind(presenter));
            command.event.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).LINE, presenter.addLine.bind(presenter));
            command.event.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).LINE_MINUS, presenter.minusLine.bind(presenter));
            command.event.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).DOUBLE, presenter.double.bind(presenter));
            command.event.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).UPDATE_LINEBET, presenter.setLineBet.bind(presenter));
            command.event.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).UPDATE_LINE, presenter.setLine.bind(presenter));
            command.event.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).CHANGE_RATIO, presenter.fastExchange.bind(presenter)); //開分事件另外處理

            command.event.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).EXCHANGE, presenter.openCreditExchangePanel.bind(presenter));
          }
        }
        /**
         * @description 改寫configToolbarEvent
         */


        configToolbarEvent() {
          var _this$gameManager2;

          // TODO: Need Implement Settings Panel
          var toolbar = (_this$gameManager2 = this.gameManager) == null ? void 0 : _this$gameManager2.toolbar;

          if (toolbar) {
            var {
              presenter
            } = this; //簡單邏輯 , 就不再透過 switch case 來處理了

            toolbar.event.on((_crd && ToolBarEventName === void 0 ? (_reportPossibleCrUseOfToolBarEventName({
              error: Error()
            }), ToolBarEventName) : ToolBarEventName).MUSIC, presenter.backgroundMusic.bind(presenter));
            toolbar.event.on((_crd && ToolBarEventName === void 0 ? (_reportPossibleCrUseOfToolBarEventName({
              error: Error()
            }), ToolBarEventName) : ToolBarEventName).MUTE, presenter.mute.bind(presenter));
            toolbar.event.on((_crd && ToolBarEventName === void 0 ? (_reportPossibleCrUseOfToolBarEventName({
              error: Error()
            }), ToolBarEventName) : ToolBarEventName).EXIT, presenter.exit.bind(presenter));
            toolbar.event.on((_crd && ToolBarEventName === void 0 ? (_reportPossibleCrUseOfToolBarEventName({
              error: Error()
            }), ToolBarEventName) : ToolBarEventName).HELP, presenter.help.bind(presenter));
            toolbar.event.on((_crd && ToolBarEventName === void 0 ? (_reportPossibleCrUseOfToolBarEventName({
              error: Error()
            }), ToolBarEventName) : ToolBarEventName).HISTORY, presenter.history.bind(presenter));
            toolbar.event.on((_crd && ToolBarEventName === void 0 ? (_reportPossibleCrUseOfToolBarEventName({
              error: Error()
            }), ToolBarEventName) : ToolBarEventName).DEPOSIT, presenter.deposit.bind(presenter));
            toolbar.event.on((_crd && ToolBarEventName === void 0 ? (_reportPossibleCrUseOfToolBarEventName({
              error: Error()
            }), ToolBarEventName) : ToolBarEventName).GAMEINFO, presenter.gameInfo.bind(presenter)); //開分事件另外處理

            toolbar.event.on((_crd && ToolBarEventName === void 0 ? (_reportPossibleCrUseOfToolBarEventName({
              error: Error()
            }), ToolBarEventName) : ToolBarEventName).ONEXCHANGE, presenter.openCreditExchangePanel.bind(presenter));
          }
        } // Notification: 更新彩池資訊


        updateJackpot(jpValue) {
          if (!(this.gameManager && this.gameManager.updateJackpot instanceof Function)) return false;

          if (jpValue) {
            this.gameManager.updateJackpot(jpValue);
            return true;
          } else return false;
        } // Notification: 更新跑馬燈資訊


        updateMarquee(marquee) {
          if (marquee) {
            if (this.gameManager && this.gameManager.updateMarquee instanceof Function) {
              this.gameManager.updateMarquee(marquee);
              return true;
            }
          } else {
            return false;
          }
        }
        /** 換分面板: 取機台資訊 */


        updateMachineInfo(info) {
          if (this.exchangePanel) {
            this.exchangePanel.dataUpdate(info);
          }
        }
        /** 換分面板: 換分更新 */


        updateCreditExchangeInfo(info) {
          if (this.exchangePanel) {
            this.exchangePanel.dataUpdate(info);
          }
        }
        /** 換分面板: 洗分更新 */


        updateBalanceExhchangeInfo(info) {
          if (this.exchangePanel) {
            this.exchangePanel.dataUpdate(info);
          }
        }
        /** 換分面板: 顯示 */


        showExchangePanel() {
          if (this.exchangePanel) {
            this.exchangePanel.show();
          }
        }
        /** 開啟換分頁面：更新 */


        updateExchangePanel(info) {
          if (this.exchangePanel) {
            this.exchangePanel.dataUpdate(info);
          }
        }
        /**
         * GameManager: 初始化
         * @description 取代initCostume
         */


        initGameManager() {// TODO: Game Initialized
        }
        /**
         * GameManager: 取得OnLoadInfo後設定
         * @description 取代setupCostume
         */


        setupGameManager() {
          // OnLoadInfo completed successfully
          // TODO: Game Started
          if (this.gameManager) {
            this.gameManager.rates = this.presenter.rates;
            this.gameManager.lineList = this.presenter.lineList;
            this.gameManager.betCreditList = this.presenter.creditList;
            this.gameManager.defaultBetCredit = this.presenter.defaultBetCredit;
            this.gameManager.setupGame();
          } else {
            console.warn("gameManager not initialized");
          }
        }

        initAlert() {// TODO: alertPanel Initialized
        } // 處理Alert訊息


        alert(dict_key, id) {
          if (this.alertPanel) {
            this.alertPanel.alert({
              title: 'Alert',
              message: dict_key + " " + id,
              duration: 5.0
            });
          }
        } // 建立Presenter


        createPresenter() {
          var presenter = new (_crd && BasePresenter === void 0 ? (_reportPossibleCrUseOfBasePresenter({
            error: Error()
          }), BasePresenter) : BasePresenter)(new (_crd && BaseModel === void 0 ? (_reportPossibleCrUseOfBaseModel({
            error: Error()
          }), BaseModel) : BaseModel)(), this); // 註冊遊戲事件

          presenter.registerRecvEvents(); // 百分比事件

          presenter.registerHandleProgressEvents();
          return presenter;
        } // 開始連線


        startPresenter(address) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var {
              presenter
            } = _this2;
            var event = yield presenter.connect(address).catch(() => {
              return false;
            });
            console.log("Connect:", event);
            if (event === false) return false;
            return true;
          })();
        } // 離開遊戲服務


        exit() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var {
              presenter
            } = _this3;
            yield presenter.exit();
          })();
        }
        /**
         * 處理換分面板事件 與 controller 之間的溝通
         */


        handleExchanePanelEvent() {
          var _this4 = this;

          var {
            exchangePanel
          } = this;
          var {
            presenter
          } = this;

          if (exchangePanel) {
            exchangePanel.event.on((_crd && ExchangePanelEventName === void 0 ? (_reportPossibleCrUseOfExchangePanelEventName({
              error: Error()
            }), ExchangePanelEventName) : ExchangePanelEventName).CREDIT_EXCHANGE, /*#__PURE__*/_asyncToGenerator(function* (data) {
              yield presenter.creditExchange(data.betBase, data.amount);
            }));
            exchangePanel.event.on((_crd && ExchangePanelEventName === void 0 ? (_reportPossibleCrUseOfExchangePanelEventName({
              error: Error()
            }), ExchangePanelEventName) : ExchangePanelEventName).BALANCE_EXCHANGE, /*#__PURE__*/_asyncToGenerator(function* () {
              yield presenter.balanceExchange();
            }));
            exchangePanel.event.on((_crd && ExchangePanelEventName === void 0 ? (_reportPossibleCrUseOfExchangePanelEventName({
              error: Error()
            }), ExchangePanelEventName) : ExchangePanelEventName).CHANGE_RATIO, /*#__PURE__*/_asyncToGenerator(function* (data) {
              yield presenter.fastExchange(data.ratio);
            }));
            exchangePanel.event.on((_crd && ExchangePanelEventName === void 0 ? (_reportPossibleCrUseOfExchangePanelEventName({
              error: Error()
            }), ExchangePanelEventName) : ExchangePanelEventName).LEAVE_GAME, /*#__PURE__*/_asyncToGenerator(function* () {
              return _this4.exit();
            }));
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a51eae5595ab70187491e9ccd92e41939c71d034.js.map