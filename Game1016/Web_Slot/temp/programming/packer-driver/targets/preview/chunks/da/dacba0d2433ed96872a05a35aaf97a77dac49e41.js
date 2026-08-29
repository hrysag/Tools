System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCBoolean, CCFloat, profiler, SpriteFrame, ShowBottomTextStatus, BasicSlotGameViewManager, NotifyCation, GameViewEvents, NotifySubject, GameUtilsTools, AsyncScope, GameController, GenericUIManager, PlayerInfo, NetworkHandler, BuyFeatureMode, Localization, BuyFeatureCardInfo, AdditionalPurchaseType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, AbstractBasicGameController;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../GameStateConfigDef/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowBottomTextStatus(extras) {
    _reporterNs.report("ShowBottomTextStatus", "../GameStateConfigDef/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicSlotGameViewManager(extras) {
    _reporterNs.report("BasicSlotGameViewManager", "../BasicGameViewManager/BasicGameViewManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicProcessSlotData(extras) {
    _reporterNs.report("BasicProcessSlotData", "../BasicProcessServerData/IProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProcessSlotData(extras) {
    _reporterNs.report("IProcessSlotData", "../BasicProcessServerData/IProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifyCation(extras) {
    _reporterNs.report("NotifyCation", "../ReferencePathForMyUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewEvents(extras) {
    _reporterNs.report("GameViewEvents", "../BasicGameEvent/EventTypesDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifySubject(extras) {
    _reporterNs.report("NotifySubject", "../BasicGameEvent/EventTypesDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtilsTools(extras) {
    _reporterNs.report("GameUtilsTools", "../GameUtilsTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAsyncScope(extras) {
    _reporterNs.report("AsyncScope", "../../MyUtils/AsyncScope/AsyncScope", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUIManager(extras) {
    _reporterNs.report("GenericUIManager", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerInfo(extras) {
    _reporterNs.report("PlayerInfo", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkHandler(extras) {
    _reporterNs.report("NetworkHandler", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuyFeatureMode(extras) {
    _reporterNs.report("BuyFeatureMode", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalization(extras) {
    _reporterNs.report("Localization", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuyFeatureCardInfo(extras) {
    _reporterNs.report("BuyFeatureCardInfo", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdditionalPurchaseType(extras) {
    _reporterNs.report("AdditionalPurchaseType", "../../ReferencePath", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCBoolean = _cc.CCBoolean;
      CCFloat = _cc.CCFloat;
      profiler = _cc.profiler;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      ShowBottomTextStatus = _unresolved_2.ShowBottomTextStatus;
    }, function (_unresolved_3) {
      BasicSlotGameViewManager = _unresolved_3.BasicSlotGameViewManager;
    }, function (_unresolved_4) {
      NotifyCation = _unresolved_4.NotifyCation;
    }, function (_unresolved_5) {
      GameViewEvents = _unresolved_5.GameViewEvents;
      NotifySubject = _unresolved_5.NotifySubject;
    }, function (_unresolved_6) {
      GameUtilsTools = _unresolved_6.GameUtilsTools;
    }, function (_unresolved_7) {
      AsyncScope = _unresolved_7.AsyncScope;
    }, function (_unresolved_8) {
      GameController = _unresolved_8.GameController;
      GenericUIManager = _unresolved_8.GenericUIManager;
      PlayerInfo = _unresolved_8.PlayerInfo;
      NetworkHandler = _unresolved_8.NetworkHandler;
      BuyFeatureMode = _unresolved_8.BuyFeatureMode;
      Localization = _unresolved_8.Localization;
      BuyFeatureCardInfo = _unresolved_8.BuyFeatureCardInfo;
    }, function (_unresolved_9) {
      AdditionalPurchaseType = _unresolved_9.AdditionalPurchaseType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7cae7vyB/9OaLEk0okHgoqx", "AbstractBasicGameController", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'CCFloat', 'Component', 'Node', 'profiler', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AbstractBasicGameController", AbstractBasicGameController = (_dec = ccclass('AbstractBasicGameController'), _dec2 = property({
        type: _crd && BasicSlotGameViewManager === void 0 ? (_reportPossibleCrUseOfBasicSlotGameViewManager({
          error: Error()
        }), BasicSlotGameViewManager) : BasicSlotGameViewManager,
        visible: true,
        displayName: 'BasicGameViewManager',
        tooltip: '基本遊戲流程管理器'
      }), _dec3 = property({
        type: CCFloat,
        visible: true,
        displayName: 'Game Cycle Delay',
        tooltip: '遊戲循環延遲時間,單位(秒)'
      }), _dec4 = property({
        type: CCBoolean,
        visible: true,
        displayName: 'LocalTest',
        tooltip: '啟用LocalTest模式'
      }), _dec5 = property({
        type: CCBoolean,
        displayName: 'Use Buy Feature',
        tooltip: '是否啟用購買特色功能',
        visible: true
      }), _dec6 = property({
        type: CCFloat,
        displayName: 'Extra Bet Ratio',
        tooltip: '額外押注倍率(例如80倍就填80)',
        visible: true
      }), _dec7 = property({
        type: [SpriteFrame],
        displayName: 'Buy Feature Icons',
        tooltip: '購買特色圖示(SpriteFrame)',
        visible: true
      }), _dec(_class = (_class2 = class AbstractBasicGameController extends (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController) {
        constructor() {
          var _this;

          super(...arguments);
          _this = this;

          _initializerDefineProperty(this, "_gameViewManager", _descriptor, this);

          _initializerDefineProperty(this, "_gameCycleDelay", _descriptor2, this);

          _initializerDefineProperty(this, "_isLocalTest", _descriptor3, this);

          this._beforeBuyFgBetValue = 0;
          //---轉完FG之後要回復的下注金額
          this._isBuyFg = false;
          //---是否是購買FG的狀態
          this._fgFinalBet = 0;
          //---購買FG的倍率
          this._accumulationScoreBySingleRound = 0;
          //---有FG的狀態下,底下顯示的得分數需要累加
          this._gettingFgInRound = false;
          //---是否在FG的狀態下,底下顯示的得分數需要累加
          this._useVersion = false;
          //---是否使用測試版本號
          this._strVersion = '';
          //---版本號
          this._signalFlowKey = 'GAME_CYCLE_SIGNAL_FLOW_KEY';
          //---遊戲循環signalFlow key 
          this._async = void 0;
          //--註冊管理使用promise/delayTime工具 
          this._interruptingGameCycle = false;

          //--是否在中斷遊戲循環中 
          //--20260309 NEW:購買特色/額外押注
          _initializerDefineProperty(this, "_useBuyFeature", _descriptor4, this);

          //--是否啟用購買特色功能
          _initializerDefineProperty(this, "_extraBetRatio", _descriptor5, this);

          //--額外押注倍率 
          _initializerDefineProperty(this, "_buyFeatureIcons", _descriptor6, this);

          //--購買特色圖示(SpriteFrame)
          this._betRatio = 0;
          //--購買特色後的倍率
          this._purchaseType = (_crd && AdditionalPurchaseType === void 0 ? (_reportPossibleCrUseOfAdditionalPurchaseType({
            error: Error()
          }), AdditionalPurchaseType) : AdditionalPurchaseType).None;
          //==============<view NotifyCation>=======================================================================================

          /**
          * 這邊要等到全部的動作都做完(得分的表演)
          * 才會call這個function
          * <這一round結束,與Server要求下一把的資料>
          */
          this.onGameViewShowEndEventHandler = /*#__PURE__*/_asyncToGenerator(function* () {
            // Handle the event when the game view shows the end state
            _this.processInShowEndEvent();

            _this._interruptingGameCycle = false;
            (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.setBalance((_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
              error: Error()
            }), PlayerInfo) : PlayerInfo).balance);
            /*
            const signal = this._async.createAbortScope(this._signalFlowKey);
            const cancel = () => {
                console.log();
                this._interruptingGameCycle = true;
            }
            const inHandle = this._async.waitSecondsTracked(this._gameCycleDelay, this._signalFlowKey, cancel, true, signal, this._signalFlowKey);
            await inHandle.promise;
            */

            _this.setAutoNextRound();

            _this.checkAutoNext();
          });

          /**遊戲中顯示底下的文字 */
          this.onSetBottomTextEventHandler = sub => {
            //-sub.eventType裡面有eventType可以辨識
            this.showBottomText(sub.eventData.status, sub.eventData.value);
          };

          /**結束一局，沒有自動，回到Idle狀態時，要Call這個Function，隨機顯示一個文字 */
          this.onGameViewManualEndEventHandler = () => {
            this.showBottomText((_crd && ShowBottomTextStatus === void 0 ? (_reportPossibleCrUseOfShowBottomTextStatus({
              error: Error()
            }), ShowBottomTextStatus) : ShowBottomTextStatus).NO_WIN);
          };

          //玩家主動按下stopSpin按鈕(空白按鍵也會啟動,一次啟動spin下一次啟動stopSpin)
          this.onStopBtnClickHandler = () => {
            this._gameViewManager.onStopBtnClickHandler();
          };

          /**購買FG的事件 */
          this.onGameViewBuyFgEventHandler = sub => {};

          /**FG的事件 */
          this.onGetCurrentBetEventHandler = sub => {};
        }

        //--購買類型
        //=======================<GameController function>=============================================================
        onUpdateBetValue(betValue) {
          super.onUpdateBetValue(betValue);

          this._gameViewManager.setPlayerBetValue(betValue);
        } //=======================<GameRoot call back>==================================================================


        init(gameNumber, isOnline) {
          super.init(gameNumber, isOnline);
          this.processGameModeData();
          this.initForOtherSystem();
          this._async = (_crd && AsyncScope === void 0 ? (_reportPossibleCrUseOfAsyncScope({
            error: Error()
          }), AsyncScope) : AsyncScope).getInstance(); //---stop btn from gameUI callback---

          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.onStopBtnClickCallback = this.onStopBtnClickHandler; //---購買特色--

          this.initBuyFeature(); //--這個gameRoot會做別的事情..包含set GameTimeScale--所以直接override 不要另外assign新方法
          //GenericUIManager.instance.onNewFlashBtnSwitch = this.onTestTurboFlashMode;
          //-----訂閱view的NotifyCation的事件--- 

          (_crd && NotifyCation === void 0 ? (_reportPossibleCrUseOfNotifyCation({
            error: Error()
          }), NotifyCation) : NotifyCation).getInstance().on((_crd && NotifySubject === void 0 ? (_reportPossibleCrUseOfNotifySubject({
            error: Error()
          }), NotifySubject) : NotifySubject).GAME_VIEW_SUBJECT, (_crd && GameViewEvents === void 0 ? (_reportPossibleCrUseOfGameViewEvents({
            error: Error()
          }), GameViewEvents) : GameViewEvents).SHOW_END, this.onGameViewShowEndEventHandler, this);
          (_crd && NotifyCation === void 0 ? (_reportPossibleCrUseOfNotifyCation({
            error: Error()
          }), NotifyCation) : NotifyCation).getInstance().on((_crd && NotifySubject === void 0 ? (_reportPossibleCrUseOfNotifySubject({
            error: Error()
          }), NotifySubject) : NotifySubject).GAME_VIEW_SUBJECT, (_crd && GameViewEvents === void 0 ? (_reportPossibleCrUseOfGameViewEvents({
            error: Error()
          }), GameViewEvents) : GameViewEvents).MANUAL_NO_WIN, this.onGameViewManualEndEventHandler, this);
          (_crd && NotifyCation === void 0 ? (_reportPossibleCrUseOfNotifyCation({
            error: Error()
          }), NotifyCation) : NotifyCation).getInstance().on((_crd && NotifySubject === void 0 ? (_reportPossibleCrUseOfNotifySubject({
            error: Error()
          }), NotifySubject) : NotifySubject).GAME_VIEW_SUBJECT, (_crd && GameViewEvents === void 0 ? (_reportPossibleCrUseOfGameViewEvents({
            error: Error()
          }), GameViewEvents) : GameViewEvents).BUY_FG, this.onGameViewBuyFgEventHandler, this);
          (_crd && NotifyCation === void 0 ? (_reportPossibleCrUseOfNotifyCation({
            error: Error()
          }), NotifyCation) : NotifyCation).getInstance().on((_crd && NotifySubject === void 0 ? (_reportPossibleCrUseOfNotifySubject({
            error: Error()
          }), NotifySubject) : NotifySubject).GAME_VIEW_SUBJECT, (_crd && GameViewEvents === void 0 ? (_reportPossibleCrUseOfGameViewEvents({
            error: Error()
          }), GameViewEvents) : GameViewEvents).SET_BOTTOM_TEXT, this.onSetBottomTextEventHandler, this);
          (_crd && NotifyCation === void 0 ? (_reportPossibleCrUseOfNotifyCation({
            error: Error()
          }), NotifyCation) : NotifyCation).getInstance().on((_crd && NotifySubject === void 0 ? (_reportPossibleCrUseOfNotifySubject({
            error: Error()
          }), NotifySubject) : NotifySubject).GAME_VIEW_SUBJECT, (_crd && GameViewEvents === void 0 ? (_reportPossibleCrUseOfGameViewEvents({
            error: Error()
          }), GameViewEvents) : GameViewEvents).GET_CURRENT_BET, this.onGetCurrentBetEventHandler, this);
        } //--test-購買特色---


        initBuyFeature() {
          if (!this._useBuyFeature) return;
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setExtraBetOpen(this._extraBetRatio);
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setExtraBetTipText((_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
            error: Error()
          }), Localization) : Localization).instance.t('ExtraBet_Tip_Text'));
          var card = new (_crd && BuyFeatureCardInfo === void 0 ? (_reportPossibleCrUseOfBuyFeatureCardInfo({
            error: Error()
          }), BuyFeatureCardInfo) : BuyFeatureCardInfo)();
          card.title = (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
            error: Error()
          }), Localization) : Localization).instance.t('BuyFeature_Card_Title');
          card.content = (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
            error: Error()
          }), Localization) : Localization).instance.t('BuyFeature_Card_Content');
          card.icon = this._buyFeatureIcons[0];
          card.multiply = 80; //--不確定每款遊戲選擇的卡片倍率會是多少?(等同extraBetRatio)

          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setBuyFeatureCardInfo([card]);
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setBuyBonusOpen();
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.onBuyFeatureModeChangeCallback = this.onBuyFeatureModeChange.bind(this);
        } //--to U:依照不同牌的情況你可以override


        onBuyFeatureModeChange(mode, multiply, cardIndex) {
          this._betRatio = multiply;

          if (mode === (_crd && BuyFeatureMode === void 0 ? (_reportPossibleCrUseOfBuyFeatureMode({
            error: Error()
          }), BuyFeatureMode) : BuyFeatureMode).BuyBonus) {
            if (cardIndex === 0) {
              this._purchaseType = (_crd && AdditionalPurchaseType === void 0 ? (_reportPossibleCrUseOfAdditionalPurchaseType({
                error: Error()
              }), AdditionalPurchaseType) : AdditionalPurchaseType).FG;
            }
          } else if (mode === (_crd && BuyFeatureMode === void 0 ? (_reportPossibleCrUseOfBuyFeatureMode({
            error: Error()
          }), BuyFeatureMode) : BuyFeatureMode).ExtraBet) {
            this._purchaseType = (_crd && AdditionalPurchaseType === void 0 ? (_reportPossibleCrUseOfAdditionalPurchaseType({
              error: Error()
            }), AdditionalPurchaseType) : AdditionalPurchaseType).RiseFGRate;
          } else {
            this._purchaseType = (_crd && AdditionalPurchaseType === void 0 ? (_reportPossibleCrUseOfAdditionalPurchaseType({
              error: Error()
            }), AdditionalPurchaseType) : AdditionalPurchaseType).None;
          }
        }

        processGameModeData() {
          this._useVersion = true;

          if (this._isLocalTest) {
            (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
              error: Error()
            }), GameUtilsTools) : GameUtilsTools).useDebugLog = true;
            this.isOnline = false;
            profiler.showStats();
          } else {
            profiler.hideStats(); //--關閉相關測試面板

            (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
              error: Error()
            }), GameUtilsTools) : GameUtilsTools).useDebugLog = false;
          }
        }
        /**
         * 設定是否啟用2階加速模式。(預設false)
         * @param value true:開啟2階加速,false:關閉2階加速
         */


        setTwoLevelTurboMode(value) {
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setTwoLevelTurboMode(value);
        }

        setupBeforeGame() {
          this.doSomethingSettingBeforeGame();

          if (this._useVersion) {
            (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.setVersion(this._strVersion);
          }

          return Promise.resolve();
        } //--override it---在setupBeforeGame之前要做的事情


        doSomethingSettingBeforeGame() {}

        //==============<view NotifyCation>=======================================================================================
        //=======================<GenericUI EVENT>=====================================================================
        //空白按鍵也會啟動這個(空白按鍵也會啟動,一次啟動spin下一次啟動stopSpin)
        onStartSpin() {
          this.clickStartSpinProcess();
        }

        clickStartSpinProcess() {
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setMainUIStopBtnEnabled();
          this.startSpin();
        }

        startSpin() {
          this.resetRoundData();

          if (this.checkBalanceAndProcessBtn()) {
            return; //--錢不夠就return
          } //---顯示開始spin的字樣(中間下面顯示遊戲流程狀態?的label)


          this.showBottomText((_crd && ShowBottomTextStatus === void 0 ? (_reportPossibleCrUseOfShowBottomTextStatus({
            error: Error()
          }), ShowBottomTextStatus) : ShowBottomTextStatus).ROLLING);

          this._gameViewManager.startSpin();

          this._gameViewManager.setAutoModeTimer();

          this.sendDataToServer(this._purchaseType);
        } //=======================<GameRoot call back>==================================================================

        /**
        * autoSpin按鈕被按下時啟動
        */


        onStartAuto(autoTimes) {
          super.onStartAuto(autoTimes);

          this._gameViewManager.setStartAutoSpinMode(true);

          this.checkAutoNext();
        }
        /**
         * 在checkAutoNext呼叫前執行(公版UI需要的)
         * isEnterFeatureGame===>這邊指的是有<轉場切換的那一個東西(機制?流程)>
         * 就是屬於特色遊戲,所以有可能是FG,也有可能是bonus game之類的
         */


        setAutoNextRound() {
          this.checkAutoNextData = {
            isEnterFeatureGame: false,
            //---是否進入FG/特色遊戲(不一定只有FG)
            odd: 0,
            //--單一局的總odds(整駝的賠率,就是你在checkScore的totalOdds)
            balance: (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
              error: Error()
            }), PlayerInfo) : PlayerInfo).balance
          };
        }
        /** networkManager會call這個function */


        onReceiveBet(betData) {
          this.finalBalance = betData.coin;

          if (this._isBuyFg) {//--購買fg前的處理
          } else {
            this.balanceAfterSpin = (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
              error: Error()
            }), PlayerInfo) : PlayerInfo).balance - betData.bet;
          }

          (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
            error: Error()
          }), PlayerInfo) : PlayerInfo).balance = this.finalBalance;

          if (this.isOnline) {
            var debugText = "" + betData.spinId;

            if ((_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
              error: Error()
            }), NetworkHandler) : NetworkHandler).instance.demo !== true) {
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.setBottomText(debugText);
            }
          }

          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setBalance(this.balanceAfterSpin);
          this.processReceiveBet(betData);
        } //========================<processServerData>==================================================================
        //protected sendDataToServer(isBuyFG: boolean = false, buyFGBetValue?: number): void {


        sendDataToServer(purchaseType, buyFGBetValue) {
          if (!this.isOnline) {
            //--local test
            this.callServerInLocalTest();
          } else {
            if (purchaseType === (_crd && AdditionalPurchaseType === void 0 ? (_reportPossibleCrUseOfAdditionalPurchaseType({
              error: Error()
            }), AdditionalPurchaseType) : AdditionalPurchaseType).FG) {
              //--do something fo buyFG
              //--購買fg的金額
              if (buyFGBetValue === undefined) {
                buyFGBetValue = this.getBuyFGBetValue();
              }

              this.callServerWithFG(buyFGBetValue);
            } else {
              //--do something for normal spin
              this.callServerWithOutFG(purchaseType);
            }
          }
        }

        checkAutoNext() {
          //-確認是否還有下一局的freeGame
          if ((_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.checkAutoStatus(this.checkAutoNextData)) {
            this.startSpin();
          } else {
            //--沒有下一局的freeGame就要停止auto mode,將spin按鈕切回正常狀態

            /*
            if (this._interruptingGameCycle) {
            //--待觀察..好像是按鈕在切換狀態的瞬間被按下會有問題    
            this._interruptingGameCycle = false;
                this.clickStartSpinProcess();
            } else {
                GenericUIManager.instance.setMainUIToNormalMode();
                this._gameViewManager.setStartAutoSpinMode(false);
            }*/
            (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.setMainUIToNormalMode();

            this._gameViewManager.setStartAutoSpinMode(false);
          }
        } //=======================<others>=====================================================================
        //--20260309-NEW


        checkBalanceEnough() {
          if ((_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
            error: Error()
          }), PlayerInfo) : PlayerInfo).balance < this.betValue * this._betRatio) {
            this.showBankruptcyError();
            return false;
          }

          return true;
        }

        checkBalanceAndProcessBtn() {
          if (!this.checkBalanceEnough()) {
            if ((_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.isAutoMode) {
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.stopAutoMode();
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.setMainUIToNormalMode(); //---spin按鈕回到正常狀態
            }

            return true;
          }

          return false;
        }

        showBottomText(status, value) {
          switch (status) {
            case (_crd && ShowBottomTextStatus === void 0 ? (_reportPossibleCrUseOfShowBottomTextStatus({
              error: Error()
            }), ShowBottomTextStatus) : ShowBottomTextStatus).NO_WIN:
              // 結束一局，沒有自動，回到Idle狀態時，要Call這個Function，隨機顯示一個文字
              if (!(_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.isAutoMode) {
                //-showBottomTextIdle
                (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                  error: Error()
                }), GenericUIManager) : GenericUIManager).instance.showBottomTextIdle(); //--秀跑馬燈
              } else {
                (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                  error: Error()
                }), GenericUIManager) : GenericUIManager).instance.showBottomTextEmpty(); //--清空
              }

              break;

            case (_crd && ShowBottomTextStatus === void 0 ? (_reportPossibleCrUseOfShowBottomTextStatus({
              error: Error()
            }), ShowBottomTextStatus) : ShowBottomTextStatus).ROLLING:
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.showBottomTextStartSpin();
              break;

            case (_crd && ShowBottomTextStatus === void 0 ? (_reportPossibleCrUseOfShowBottomTextStatus({
              error: Error()
            }), ShowBottomTextStatus) : ShowBottomTextStatus).WIN:
              var showScore = 0; //--有FG的情況下FG的得分面板要顯示的跟bottomText一樣(從NG一路累加)

              if (this._gettingFgInRound) {
                this._accumulationScoreBySingleRound += value;
                showScore = this._accumulationScoreBySingleRound;
              } else {
                showScore = value;
              }

              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.showBottomTextWinScore(showScore);
              break;

            case (_crd && ShowBottomTextStatus === void 0 ? (_reportPossibleCrUseOfShowBottomTextStatus({
              error: Error()
            }), ShowBottomTextStatus) : ShowBottomTextStatus).IDLE:
              // 結束一局，沒有自動，回到Idle狀態時，要Call這個Function，隨機顯示一個文字
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.showBottomTextIdle();
              break;

            case (_crd && ShowBottomTextStatus === void 0 ? (_reportPossibleCrUseOfShowBottomTextStatus({
              error: Error()
            }), ShowBottomTextStatus) : ShowBottomTextStatus).DEBUG:
              //GenericUIManager.instance.show(value);
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.setBottomText(value);
              break;
          }
        } //=======================<override abstract function>=====================================================================
        //--game root 在init末端呼叫,你可以override來準備你要處理的事情    
        //public abstract override setupBeforeGame(): Promise<void>
        //--在這邊初始化在此類別當中沒有啟動的系統(processServerData,gameViewManager.....)
        //-after <onGameViewShowEndEventHandler>
        //-after <onReceiveBet>
        //--override it---reset ur server data
        //-e.g:this._currentSlotInfo.resetRoundData();


        //--正常流程會呼叫的方法
        callServerWithOutFG(purchaseType) {
          this.sendBet(this.betValue, purchaseType);
        }
        /**購買FG前的處理 */


        callServerWithFG(buyFGBetValue) {
          //---這邊的buyFGBetValue其實就等於this.betValue
          this.sendBet(buyFGBetValue, (_crd && AdditionalPurchaseType === void 0 ? (_reportPossibleCrUseOfAdditionalPurchaseType({
            error: Error()
          }), AdditionalPurchaseType) : AdditionalPurchaseType).FG);
        } //------override it--------


        getBuyFGBetValue() {
          //---這邊的buyFGBetValue其實就等於this.betValue
          return this.betValue;
        }

        callServerInLocalTest() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_gameViewManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_gameCycleDelay", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_isLocalTest", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_useBuyFeature", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_extraBetRatio", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_buyFeatureIcons", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dacba0d2433ed96872a05a35aaf97a77dac49e41.js.map