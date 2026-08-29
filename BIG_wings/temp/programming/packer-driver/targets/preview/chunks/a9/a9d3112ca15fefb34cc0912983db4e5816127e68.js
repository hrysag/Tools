System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "@casino-mono/mvc", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BaseView, Component, _decorator, CCBoolean, CCString, Application, BaseModel, CostumeEventName, AlertPanel, CocosExchangePanel, GameManager, Roller, CommandEventName, BigWingsPresenter, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, menu, BigWingsView;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseView(extras) {
    _reporterNs.report("BaseView", "../lib/BaseView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApplication(extras) {
    _reporterNs.report("Application", "../Applicaiton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseModel(extras) {
    _reporterNs.report("BaseModel", "../lib/BaseModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBigWingsRoller(extras) {
    _reporterNs.report("BigWingsRoller", "../wheel/BigWingsRoller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCostumeEventName(extras) {
    _reporterNs.report("CostumeEventName", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAlertPanel(extras) {
    _reporterNs.report("AlertPanel", "./AlertPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCocosExchangePanel(extras) {
    _reporterNs.report("CocosExchangePanel", "./ExchangePanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoller(extras) {
    _reporterNs.report("Roller", "../wheel/Roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommandEventName(extras) {
    _reporterNs.report("CommandEventName", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBigWingsPresenter(extras) {
    _reporterNs.report("BigWingsPresenter", "./BigWingsPresenter", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
      CCBoolean = _cc.CCBoolean;
      CCString = _cc.CCString;
    }, function (_unresolved_2) {
      BaseView = _unresolved_2.BaseView;
    }, function (_unresolved_3) {
      Application = _unresolved_3.Application;
    }, function (_unresolved_4) {
      BaseModel = _unresolved_4.BaseModel;
    }, function (_casinoMonoMvc) {
      CostumeEventName = _casinoMonoMvc.CostumeEventName;
      CommandEventName = _casinoMonoMvc.CommandEventName;
    }, function (_unresolved_5) {
      AlertPanel = _unresolved_5.AlertPanel;
    }, function (_unresolved_6) {
      CocosExchangePanel = _unresolved_6.CocosExchangePanel;
    }, function (_unresolved_7) {
      GameManager = _unresolved_7.GameManager;
    }, function (_unresolved_8) {
      Roller = _unresolved_8.Roller;
    }, function (_unresolved_9) {
      BigWingsPresenter = _unresolved_9.BigWingsPresenter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "400bcNKZmlGD5kthKfn3jlP", "BigWingsView", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'CCBoolean', 'CCString']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      _export("BigWingsView", BigWingsView = (_dec = ccclass('BigWingsView'), _dec2 = menu('BigWings/BigWingsView'), _dec3 = property({
        type: _crd && AlertPanel === void 0 ? (_reportPossibleCrUseOfAlertPanel({
          error: Error()
        }), AlertPanel) : AlertPanel,
        tooltip: '警告面板'
      }), _dec4 = property({
        tooltip: '使用換分面板'
      }), _dec5 = property({
        type: _crd && CocosExchangePanel === void 0 ? (_reportPossibleCrUseOfCocosExchangePanel({
          error: Error()
        }), CocosExchangePanel) : CocosExchangePanel,
        tooltip: '換分面板',
        visible: function visible() {
          return this.exchangeOption;
        }
      }), _dec6 = property({
        type: Component,
        tooltip: '遊戲邏輯管理物件'
      }), _dec7 = property({
        type: _crd && Roller === void 0 ? (_reportPossibleCrUseOfRoller({
          error: Error()
        }), Roller) : Roller,
        tooltip: '遊戲滾輪'
      }), _dec8 = property({
        type: CCBoolean,
        tooltip: '使用自訂資料'
      }), _dec9 = property({
        type: CCString,
        tooltip: '自訂連線位址',
        displayName: 'wsUrl',
        visible: function visible() {
          return this.loginOption;
        }
      }), _dec10 = property({
        type: CCString,
        tooltip: '測試:登入Session',
        displayName: '🔸 Session',
        visible: function visible() {
          return this.loginOption;
        }
      }), _dec11 = property({
        type: CCString,
        tooltip: '測試:遊戲編號',
        displayName: '🔸 GameType',
        visible: function visible() {
          return this.loginOption;
        }
      }), _dec(_class = _dec2(_class = (_class2 = class BigWingsView extends (_crd && BaseView === void 0 ? (_reportPossibleCrUseOfBaseView({
        error: Error()
      }), BaseView) : BaseView) {
        constructor() {
          super(); // console.log(`Application:`, Application.getInstance());

          _initializerDefineProperty(this, "alertPanel", _descriptor, this);

          _initializerDefineProperty(this, "exchangeOption", _descriptor2, this);

          _initializerDefineProperty(this, "exchangePanel", _descriptor3, this);

          _initializerDefineProperty(this, "gameManager", _descriptor4, this);

          _initializerDefineProperty(this, "roller", _descriptor5, this);

          _initializerDefineProperty(this, "loginOption", _descriptor6, this);

          _initializerDefineProperty(this, "wsUrl", _descriptor7, this);

          _initializerDefineProperty(this, "session", _descriptor8, this);

          _initializerDefineProperty(this, "gameType", _descriptor9, this);

          this.presenter = void 0;
          this.presenter = this.createPresenter();
        }

        onLoad() {
          (_crd && Application === void 0 ? (_reportPossibleCrUseOfApplication({
            error: Error()
          }), Application) : Application).getInstance().onLoad(); // 初始化GameManager

          this.initGameManager('gameManager', _crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager);
          console.log("initGameManager: " + this.gameManager);
          this.gameManager.node.on((_crd && CostumeEventName === void 0 ? (_reportPossibleCrUseOfCostumeEventName({
            error: Error()
          }), CostumeEventName) : CostumeEventName).END, () => {
            this.presenter.endGame();
          });
        }

        start() {
          // console.log(this.rollor, this.rollor.getChildByName('roller'));
          // console.log(this.rollor.getChildByName('roller').getComponent(BigWingsRoller));
          super.start();
          console.log("loginOption", this.loginOption);

          if (this.loginOption) {
            if (this.session) this.presenter.sid = this.session;
            if (this.gameType) this.presenter.gameType = this.gameType;
            this.startPresenter(this.wsUrl);
          } else {
            this.startPresenter();
          }
        } // 建立MVP - Presenter


        createPresenter() {
          var presenter = new (_crd && BigWingsPresenter === void 0 ? (_reportPossibleCrUseOfBigWingsPresenter({
            error: Error()
          }), BigWingsPresenter) : BigWingsPresenter)(new (_crd && BaseModel === void 0 ? (_reportPossibleCrUseOfBaseModel({
            error: Error()
          }), BaseModel) : BaseModel)(), this); // 註冊遊戲事件

          presenter.registerRecvEvents(); // 百分比事件

          presenter.registerHandleProgressEvents();
          return presenter;
        } // 進入遊戲服務


        startPresenter(address) {
          var _superprop_getStartPresenter = () => super.startPresenter,
              _this = this;

          return _asyncToGenerator(function* () {
            var {
              presenter
            } = _this;
            if ((yield _superprop_getStartPresenter().call(_this, address)) === false) return false;
            var loginResult = yield presenter.login().catch(e => e.error);
            console.log("login:", loginResult); // 這邊是等待 接收到 takeMachine

            console.log("gameCode:", yield presenter.takeMachine());
            var loadInfo = yield presenter.onLoadInfo();
            console.log("onLoadInfo:", loadInfo); //test

            console.log("getMechineDetail:", yield presenter.getMachineDetail());
            console.log("creditExchange:", yield presenter.creditExchange('1:1', 10000)); // console.log(`onBeginGame:`, await presenter.beginGame({ "BetCredit": 6, "HitFree": true }));
            // console.log(`gamble`, await presenter.gamble());
            // console.log(`endGame:`, await presenter.endGame());
            // console.log(`balanceExchange:`, await presenter.balanceExchange());

            return true;
          })();
        } // 離開遊戲服務


        exit() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var {
              presenter
            } = _this2; // await presenter.leaveGame();

            yield presenter.balanceExchange();
            yield presenter.exit();
          })();
        } // 初始化 - 如果沒有GameManager


        initGameManager(childeName, CConstructor) {
          // TODO: Game Initialized
          if (!this.gameManager) {
            this.gameManager = this.node.getChildByName(childeName).getComponent(CConstructor);
          }
        }

        configCommandEvent() {
          var _this$gameManager,
              _this3 = this;

          super.configCommandEvent();
          var command = (_this$gameManager = this.gameManager) == null ? void 0 : _this$gameManager.command;

          if (command) {
            var {
              presenter
            } = this;
            command.event.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).BUY_FREEGAME, /*#__PURE__*/_asyncToGenerator(function* (betInfo) {
              var data = yield presenter.beginGame(betInfo);

              _this3.gameManager.begin(data.result.data);
            }));
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "alertPanel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "exchangeOption", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "exchangePanel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gameManager", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "roller", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "loginOption", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "wsUrl", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "wss://fx8ec8.casinovir999.net/fxCasino/fxLB?gameType=5269";
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "session", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'bb8c8b08da49b4d86120a9913ba12c89c051ca280c';
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "gameType", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '5269';
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a9d3112ca15fefb34cc0912983db4e5816127e68.js.map