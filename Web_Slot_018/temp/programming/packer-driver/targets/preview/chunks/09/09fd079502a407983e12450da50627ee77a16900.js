System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, profiler, director, ProcessSlotDataCore, PlayerInfo, NotifyCation, NotifySubject, GameViewEvents, DefinitionGameConfigData, GameUtils, GameController, GenericUIManager, GameView018, AdditionalPurchaseType, NetworkHandler, ShowBottomTextStatus, AudioManager, SOUND_TYPE, SoundList, AudioSourceList, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, NG_TIPS, GameController018;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "db://assets/Scripts/Networks/BetData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicProcessSlotData(extras) {
    _reporterNs.report("BasicProcessSlotData", "../ServerBackSlotInfoData/ProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProcessSlotDataCore(extras) {
    _reporterNs.report("ProcessSlotDataCore", "../ServerBackSlotInfoData/ProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerInfo(extras) {
    _reporterNs.report("PlayerInfo", "db://assets/Scripts/Player/PlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifyCation(extras) {
    _reporterNs.report("NotifyCation", "../MyUtils/EventSystem/NotifyCation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifySubject(extras) {
    _reporterNs.report("NotifySubject", "../DefinitionGameData/EventTypesDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewEvents(extras) {
    _reporterNs.report("GameViewEvents", "../DefinitionGameData/EventTypesDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDefinitionGameConfigData(extras) {
    _reporterNs.report("DefinitionGameConfigData", "../DefinitionGameData/DefinitionGameConfigData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../MyUtils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "db://assets/Scripts/GameScripts/GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUIManager(extras) {
    _reporterNs.report("GenericUIManager", "db://assets/GenericUI/Scripts/GenericUIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameView(extras) {
    _reporterNs.report("GameView018", "./GameView018", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdditionalPurchaseType(extras) {
    _reporterNs.report("AdditionalPurchaseType", "db://assets/Scripts/NetAgent/CConnectManager/CConnectDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkHandler(extras) {
    _reporterNs.report("NetworkHandler", "db://assets/Scripts/Networks/NetworkHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowBottomTextStatus(extras) {
    _reporterNs.report("ShowBottomTextStatus", "../DefinitionGameData/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOUND_TYPE(extras) {
    _reporterNs.report("SOUND_TYPE", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../DefinitionGameData/SoundList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioSourceList(extras) {
    _reporterNs.report("AudioSourceList", "../DefinitionGameData/SoundList", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      profiler = _cc.profiler;
      director = _cc.director;
    }, function (_unresolved_2) {
      ProcessSlotDataCore = _unresolved_2.ProcessSlotDataCore;
    }, function (_unresolved_3) {
      PlayerInfo = _unresolved_3.PlayerInfo;
    }, function (_unresolved_4) {
      NotifyCation = _unresolved_4.NotifyCation;
    }, function (_unresolved_5) {
      NotifySubject = _unresolved_5.NotifySubject;
      GameViewEvents = _unresolved_5.GameViewEvents;
    }, function (_unresolved_6) {
      DefinitionGameConfigData = _unresolved_6.DefinitionGameConfigData;
    }, function (_unresolved_7) {
      GameUtils = _unresolved_7.GameUtils;
    }, function (_unresolved_8) {
      GameController = _unresolved_8.GameController;
    }, function (_unresolved_9) {
      GenericUIManager = _unresolved_9.GenericUIManager;
    }, function (_unresolved_10) {
      GameView018 = _unresolved_10.GameView018;
    }, function (_unresolved_11) {
      AdditionalPurchaseType = _unresolved_11.AdditionalPurchaseType;
    }, function (_unresolved_12) {
      NetworkHandler = _unresolved_12.NetworkHandler;
    }, function (_unresolved_13) {
      ShowBottomTextStatus = _unresolved_13.ShowBottomTextStatus;
    }, function (_unresolved_14) {
      AudioManager = _unresolved_14.AudioManager;
      SOUND_TYPE = _unresolved_14.SOUND_TYPE;
    }, function (_unresolved_15) {
      SoundList = _unresolved_15.SoundList;
      AudioSourceList = _unresolved_15.AudioSourceList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "90df1A9WodOarrXh69duqJX", "GameController018", undefined);

      __checkObsolete__(['_decorator', 'profiler', 'Component', 'Node', 'randomRangeInt', 'director', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        NG_TIPS
      } = _crd && DefinitionGameConfigData === void 0 ? (_reportPossibleCrUseOfDefinitionGameConfigData({
        error: Error()
      }), DefinitionGameConfigData) : DefinitionGameConfigData);

      _export("GameController018", GameController018 = (_dec = ccclass('GameController018'), _dec2 = property({
        type: _crd && GameView018 === void 0 ? (_reportPossibleCrUseOfGameView({
          error: Error()
        }), GameView018) : GameView018,
        visible: true,
        displayName: 'GameView'
      }), _dec(_class = (_class2 = class GameController018 extends (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_gameView", _descriptor, this);

          this._gameCycleDelay = void 0;
          //--遊戲延遲的時間(ms)
          //--這一局的slot資料
          this._currentSlotInfo = void 0;
          this._beforeBuyFgBetValue = 0;
          //---轉完FG之後要回復的下注金額
          this._isBuyFg = false;
          //---是否是購買FG的狀態
          this._fgFinalBet = 0;
          //---購買FG的倍率
          this._accumulationScoreBySingleRound = 0;
          //---有FG的狀態下,底下顯示的得分數需要累加
          this._gettingFgInRound = false;

          /**
          * GenericUIManager會call這個function
          * 玩家主動按下stopSpin按鈕(空白按鍵也會啟動,一次啟動spin下一次啟動stopSpin)
          */
          this.onStopBtnClickHandler = () => {
            this._gameView.onStopBtnClickHandler();
          };

          //=======================<GameRoot call back>==================================================================
          //==============<view NotifyCation>=======================================================================================
          // 結束一局，沒有自動，回到Idle狀態時，要Call這個Function，隨機顯示一個文字
          this.onGameViewManualEndEventHandler = () => {
            //console.log('onGameViewManualEndEventHandler_back________');
            this.showBottomText((_crd && ShowBottomTextStatus === void 0 ? (_reportPossibleCrUseOfShowBottomTextStatus({
              error: Error()
            }), ShowBottomTextStatus) : ShowBottomTextStatus).NO_WIN);
          };

          //--view表演完畢之後將spin按鈕切回正常狀態

          /**
           * 這邊要等到全部的動作都做完(得分的表演)
           * 才會call這個function
           */
          this.onGameViewShowEndEventHandler = () => {
            //console.log('onGameViewShowEndEventHandler_back________');
            if (!this.isOnline) {
              var winMoney = (this._currentSlotInfo.allRoundOdds * this._currentSlotInfo.betValue).fixed();

              (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
                error: Error()
              }), PlayerInfo) : PlayerInfo).balance += winMoney;
            }

            if (this._isBuyFg) {
              this._isBuyFg = false;
              this._fgFinalBet = 0;
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.setBetValue(this._beforeBuyFgBetValue);

              this._gameView.setPlayerBetValue(this._beforeBuyFgBetValue);

              this._beforeBuyFgBetValue = 0;
            }

            (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.setBalance((_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
              error: Error()
            }), PlayerInfo) : PlayerInfo).balance);
            this._gettingFgInRound = false;
            this._accumulationScoreBySingleRound = 0;
            /*
            GameUtils.Defer(this._gameCycleDelay).then(() => {
                this.checkAutoNext();
            });
            */

            (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).DeferByTweenPromise(this._gameCycleDelay / 1000).then(() => {
              this.checkAutoNext();
            });
          };

          /**
           * 全部的軸停止之後會call這個function
           * 強迫進入按下stopSpin按鈕的狀態
           * 20250604--廢棄
           */

          /*
          private onGameViewALLRollEndEventHandler = () => {
              GenericUIManager.instance.forceClickMainUIStopBtn();
          }*/
          this.onGameViewBuyFgEventHandler = (sub, value) => {
            //--購買FG的基本駐額,在FG運行時要顯示在下面
            var isEnough = this.checkBuyFGBalanceAndProcessBtn(value[0].eventData.totalBetValue);

            if (isEnough) {
              //--購買餘額不足
              this._gameView.reOpenFgBtn();

              return;
            }

            this._fgFinalBet = value[0].eventData.totalBetValue;
            (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.setBetValue(value[0].eventData.betValue);

            this._currentSlotInfo.resetRoundData();

            this.sendDataToServer(true, value[0].eventData.betValue);
            (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.setMainUIToSpinMode(); //---spin按鈕上鎖

            this.showBottomText((_crd && ShowBottomTextStatus === void 0 ? (_reportPossibleCrUseOfShowBottomTextStatus({
              error: Error()
            }), ShowBottomTextStatus) : ShowBottomTextStatus).ROLLING);

            this._gameView.startSpin(true);
          };

          //---遊戲中顯示底下的文字
          this.onSetBottomTextEventHandler = (sub, value) => {
            this.showBottomText(value[0].eventData.status, value[0].eventData.value);
          };

          this.onGetCurrentBetEventHandler = (sub, value) => {
            //console.log('onGetCurrentBetEventHandler', value);
            this._gameView.setCurrentBetAndOpenBuyFG(this.betValue);
          };

          this._testIndex = -1;
        }

        //---是否在FG的狀態下,底下顯示的得分數需要累加
        init(gameNumber, isOnline) {
          super.init(gameNumber, isOnline);
          profiler.hideStats(); //--關閉相關測試面板

          this._currentSlotInfo = new (_crd && ProcessSlotDataCore === void 0 ? (_reportPossibleCrUseOfProcessSlotDataCore({
            error: Error()
          }), ProcessSlotDataCore) : ProcessSlotDataCore)();
          this._gameCycleDelay = 300;

          this._gameView.init(); //---stop btn from gameUI callback---


          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.onStopBtnClickCallback = this.onStopBtnClickHandler; //onAutoSpinStartClickCallback
          //GenericUIManager.instance.onAutoSpinStartClickCallback = this.onAutoStartBtnClickCallback;
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
          }), GameViewEvents) : GameViewEvents).GET_CURRENT_BET, this.onGetCurrentBetEventHandler, this); //NotifyCation.getInstance().on(NotifySubject.GAME_VIEW_SUBJECT, GameViewEvents.ALL_REEL_END, this.onGameViewALLRollEndEventHandler, this);

          this._gameView.setPlayerBetValue(this.betValue); //----跑馬燈需求自己需要添加近來


          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.addGamingShowTexts(NG_TIPS); //GenericUIManager.instance.showBottomTextIdle();//--用這個去播放
          //-一開始不要call這個,gameRoot會先call showBottomTextFirst(GameMsg_000_0_1)
          //this.showBottomText(ShowBottomTextStatus.IDLE);--

          /*
          //--移除示範/收參數示範--
                   NotifyCation.getInstance().off(NotifySubject.GAME_VIEW_SUBJECT, GameViewEvents.ALL_REEL_END, this.onGameViewALLRollEndEventHandler);
           
           NotifyCation.getInstance().on('','',(sub,callBackValue)=>{
               console.log('testCallback',sub,callBackValue);
              })
          */
          //-----訂閱view的NotifyCation的事件---
        } //--在gameRoot init的最末端會呼叫


        setupBeforeGame() {
          var testVersion = '1.0.1-qa.20250731'; //--暫時的

          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setVersion(testVersion); //profiler.showStats();
          //this.moveProfilerToTopRight();

          return Promise.resolve();
        }

        moveProfilerToTopRight() {
          var scene = director.getScene();
          if (!scene) return;

          if (profiler.offsetData) {
            var offsetData = profiler.offsetData;
            offsetData[0] = -0.95; // x NDC

            offsetData[1] = 0.9; // y NDC

            offsetData[3] = -1; // 強制重算 transform
          }
          /*
          const profilerRoot = scene.getChildByName('PROFILER_NODE');
          if (profilerRoot) {
              const profilerUI = profilerRoot.getChildByName('Profiler_Root');
              if (profilerUI) {
                  const visibleSize = view.getVisibleSize();
                  const halfW = visibleSize.width / 2;
                  const halfH = visibleSize.height / 2;
                  //const x = -halfW + 10; // 左邊留點邊距
                  //const y = halfH - 10;  // 上邊留點邊距
                   profilerUI.setPosition(new Vec3(100, 100, 0));
              }
          }*/

        } //=======================<GenericUI EVENT>=====================================================================

        /**
         * gameRoot會call這個function
         * onGenericUISpinClick(spin按鈕被按下時啟動),
         * 空白按鍵也會啟動這個(空白按鍵也會啟動,一次啟動spin下一次啟動stopSpin)
         * 
         */


        onStartSpin() {
          if (!this._gameView.getBuyFgPanelIsOpen()) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).SpinStart, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
              error: Error()
            }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
              error: Error()
            }), AudioSourceList) : AudioSourceList).BtnAS);
            (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.resetMainUIStopBtn();
            this.startSpin();
          }
        }

        /**
         * GenericUIManager會call這個function
         * 玩家主動按下autoStart按鈕
         */

        /*
        private onAutoStartBtnClickCallback = () => {
            console.log();
        }*/
        //=======================<GenericUI EVENT>=====================================================================
        //=======================<GameRoot call back>==================================================================

        /**
        * autoSpin按鈕被按下時啟動
        */
        onStartAuto() {
          this._gameView.setStartAutoSpinMode(true);

          this.checkAutoNext();
        }
        /**
         * networkManager會call這個function
         * @param betData 
         * 收到結果準備stopRoll and show出結果
         *   
         * 資料結構如下:
         * bet=看起來是玩家下注的金額
           coin=餘額
           score=這把的得分
           slotData=base64 data(要解出來然後再計算-會長這樣AAcCAAMHBAcCDAwI….之類的)--這個資料是原本server送進來的
           slotDataBinaryBuffer=這段binary做處理(這邊會把base64弄成binary給你)
           slotData & slotDataBinaryBuffer 這2個的資料是一樣的,只是差在一個已經把你弄成binary了
        * */


        onReceiveBet(betData) {
          //super.onReceiveBet(betData);
          this.finalBalance = betData.coin;

          if (this._isBuyFg) {
            //--FG狀態
            var buyFGtotalBet = this._fgFinalBet;

            this._gameView.setFGTotalBetForThisRound(betData.bet);

            this.balanceAfterSpin = (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
              error: Error()
            }), PlayerInfo) : PlayerInfo).balance - buyFGtotalBet;
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

          this._currentSlotInfo.setNewRoundData(betData.slotData, betData.bet);

          var roundData = this._currentSlotInfo.getCloneData();

          this.checkServerDataAfterReceiveForShowScoreOnBottom(roundData);

          this._gameView.setSeverReceiveData(roundData);

          this._gameView.newRoundDataToStopSpin();
        }

        //==============<view NotifyCation>=======================================================================================
        onUpdateBetValue(betValue) {
          super.onUpdateBetValue(betValue);

          this._gameView.setPlayerBetValue(betValue);
        }

        checkAutoNext() {
          //-確認是否還有下一局的freeGame
          if ((_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.checkAutoStatus()) {
            this.startSpin();
          } else {
            //--沒有下一局的freeGame就要停止auto mode,將spin按鈕切回正常狀態
            (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.setMainUIToNormalMode();

            this._gameView.setStartAutoSpinMode(false);
          }
        } //--FG專用的檢查餘額是否足夠的流程


        checkBuyFGBalanceEnough(totalBet) {
          if ((_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
            error: Error()
          }), PlayerInfo) : PlayerInfo).balance < totalBet) {
            this.showBankruptcyError();
            return false;
          }

          return true;
        }

        checkBuyFGBalanceAndProcessBtn(totalBet) {
          if (!this.checkBuyFGBalanceEnough(totalBet)) {
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

        sendDataToServer(isBuyFG, buyFGBetValue) {
          if (isBuyFG === void 0) {
            isBuyFG = false;
          }

          this._gameView.setFgState(isBuyFG);

          if (!this.isOnline) {
            //--local mode 模擬server 延遲---

            /*
            if (this._testIndex == -1) {
                GameUtils.Defer(2000).then(() => {
                    this.testReceiveBetData();//---local mode 模擬server 延遲---
                })
                return;
            } else {
                this.testReceiveBetData();//---local mode 模擬送資料---this.testReceiveBetData();//---local mode 模擬送資料---
            }*/
            //--以上local mode 模擬server 延遲---
            this.testReceiveBetData();
          } else {
            //---online mode 向server送資料---
            if (isBuyFG) {
              //--FG結束後要更改回購買FG之前的下注金額
              this._beforeBuyFgBetValue = this.betValue;
              this._isBuyFg = true; //console.log('sendBet_buyFG', buyFGBetValue,);

              this.sendBet(buyFGBetValue, (_crd && AdditionalPurchaseType === void 0 ? (_reportPossibleCrUseOfAdditionalPurchaseType({
                error: Error()
              }), AdditionalPurchaseType) : AdditionalPurchaseType).FG);
            } else {
              //console.log('sendBet_NG', this.betValue);
              this.sendBet(this.betValue);
            }
          }
        }

        startSpin(reelIds) {
          this._currentSlotInfo.resetRoundData();

          var isEnough = this.checkBalanceAndProcessBtn();
          if (isEnough) return;
          this.sendDataToServer();
          this.showBottomText((_crd && ShowBottomTextStatus === void 0 ? (_reportPossibleCrUseOfShowBottomTextStatus({
            error: Error()
          }), ShowBottomTextStatus) : ShowBottomTextStatus).ROLLING); //---顯示開始spin的字樣(中間下面顯示遊戲流程狀態?的label)

          /**
           * 就是GenericUI右下角的<閃電>標誌...快速停軸模式
           * 1.on:快速停軸模式(全部一起停)
           * 2.off:正常停軸模式(一軸一軸停)
           */

          this._gameView.startSpin((_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.isTurboOn); //console.log('resultData', resultData);

          /**
           * 就是GenericUI右下角的<閃電>標誌...快速停軸模式
           * 1.on:快速停軸模式(全部一起停)
           * 2.off:正常停軸模式(一軸一軸停)
           */

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
        }

        checkServerDataAfterReceiveForShowScoreOnBottom(serverData) {
          //---有FG的狀態,bottomText要顯示從NG一路開始的累加分數
          //---透過事件送出來的win它只會有單輪的金額
          if (serverData.freeGameReelInfo.length > 0) {
            this._gettingFgInRound = true;
            this._accumulationScoreBySingleRound = 0;
          }
        } //--寫local mode的測試資料---


        testReceiveBetData() {
          var _this = this;

          return _asyncToGenerator(function* () {
            //await GameUtils.Defer(100);
            yield (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).DeferByTweenPromise(100 / 1000); //--原本單位是毫秒現在換算成秒

            _this.testServerData();

            var testData = _this._currentSlotInfo.getCloneData();

            _this.checkServerDataAfterReceiveForShowScoreOnBottom(testData);

            _this._gameView.setSeverReceiveData(testData); //this._gameView.stopSpin();


            _this._gameView.newRoundDataToStopSpin();
          })();
        }

        testServerData() {
          //-NBJQExIzIDdV--只有一邊有wild
          var testBase64Data = [//'BHFTUwQzU1cz',//--平手有得分
          //'VUCEUhQBFDhF'
          //'I0ImQkBFUwc1VUEmQ1Q0ADgR'
          //'QlNCQwRTIRMj'
          //--QA
          //'MFMGVFE0WEATU0VHFVMgBxETMRAIAUEhFgBS',//-一勝一敗
          //"FBA4EyIREyg1",//--首局平手--O
          //"IoBEUVIhYUBUEYBUFVE0dTMR"//--一勝一敗OK
          //--還沒找到原因(~無法重現~)776(待確認是否為死掉的wild promise動畫)--ok wild promise pending
          //"IoAABBJDMiYkBXIwUQUkNVgkQWVQNCIjRQdDUwAQBBE1ARRVEgFDAUEDISRCFFMgERMCI1MkUjATEAJCEwIBVSM1NUFAAxUB",
          //'ARQlVCUyVjNC',//-右盤面wild沒亮起--OK
          //'MlBCEkUyFlVU',//--右盤面wild沒亮起2--OK
          //'IoVRMwUyIgME',//--右盤面wild沒亮起3--OK
          //'EmQhUwBSUiEk',//--沒中線,wild沒亮起

          /**
           * 輪播物件沒起來(766)--沒辦法重現?-第一次全播有起來.輪播就沒起來了
           * check processIconAnimation
           * setExistIconAniToAniController裡面重複的資料會不拉起來(待測試)
           * 測試再檢查發現已經有重複的物件在_aryRunningNode裡面會變怎樣,是否如同bug那樣就不拉上來了--20250623
           * IVIUBTIQNBFD
           */
          //'IVIUBTIQNBFD'
          //'EmQhUwBSUiEk'//--773 wild沒有中線卻亮起來(?)(checkAndSetWildDataInScoreData取直軸判斷錯誤)--OK
          //'BINUUkVTESAA'//--769--有聽牌卻沒中線+急停盤面還是黑的-OK
          //'QlNCQwRTIRMj'//-765(第一則) 兩邊同時有得分，只會演繹一邊(promise pending動畫沒起來)--有待觀察
          //'QiMDQTFRMSQw',//--765(第二則)第一輪
          //'I0ImQkBFUwc1VUEmQ1Q0ADgR'//765(第二則)第二輪--763(一勝一敗)--看起來是左邊的wild動畫沒有起來-OK
          //'VBBgMwAShCNVEgCAQSEBcyAiQhVxMhVSYREiIFJQBVAkQzEUVFBSNFBAIzRCJSUBJQEQFVQDQANDIgAzBSESIgAkUCEQIEIy'
          //'QIAFFDBAIgAl',//--0777 bigWin沒跳(10000下注額)promise動畫pending--OK
          //---767(第一則,server data還沒回來就先Stop,資料就取用上一輪的)--ok
          //'BBJFIAQjIRVS',//-第一round 細單M01_01_1750175529946正確(影片看起來是中獎輪播後按下spin按鈕)
          //'ABUURDRUQgEw',//-第二round 細單M01_01_1750175532646正確(無中獎)
          //'NQESAEMVBTNA'//-第三round 細單M01_01_1750175533757正確(無中獎)(第3輪顯示第2輪的盤面資料)
          //--767(第二則...ㄟ幹遊戲盤面顯示上一把與這一把交錯)
          //'ISKAMFUTIxVC',//--第一round 細單M01_01_1750174220697 (無中獎)(影片開頭)
          //'NAEUBTIBFTID',//--第二round 細單M01_01_1750174221849(無中獎)

          /**
           * 第三round 細單M01_01_1750174223205(盤面資料錯誤)
           *  右盤面顯示上一把右盤面,左盤面下3上一把其他混和,
           * 左盤面上一把的高賠率物件被回收(0,2),(1,0),(1,2),(2,1) ,在這一把顯示
           * (0,2)-上一把的資料
           * (1,2)-上一把的資料
           * (1,0)-這一把的資料
           * (1,1)-上一把的資料
           * (2,1)-這一把的資料
           * ---------
           * (0,1)--這一把的資料
           * (1,1)
           * 其餘顯示上一把的資料
           */
          //'VFQgUVQUQUQy',
          //--767(第三則...ㄟ幹遊戲當下注單錯誤??)
          //--注單M01_01_1750174221849 目前顯示正常與影片的內容不符合(影片顯示FG)
          //--注單M01_01_1750174223205 
          //'BESEVRFUMCcVJCVhUxIiUwhUUhJwFQJBIiYBMBUDAABBkUI0AzFAETQRVVJFVUEiFQJFAVFVUCMwIUVTIAkhEwGUVFkgOSUjkERDMUQEUzQjECM1JTNEMCMiAQJTJEQFUyMgQkGQQQVDUEUEkBRRUiJVIRBFIEUUIwMkI1GRJUQiAEIARVFBIgMEFFUlQVEBU0AVIhMRIFMg'
          //754:(與755同一把,可是居然在第6把跳出大獎) 盤面得分有誤。得分時，FG 1上方的倍數相加且寶箱算做WILD
          //--bug
          //'ARByFCAQZSBTUhViJFACYTAUJFJjUEIjZURCVTRkIBEkgzA0QQFlMSQwgkEyAxMlMhU1EjQBITMCUhIlERJRAlIBQREBNVMDVUISFUMBRTEVNEQiEQE5AgOTQEASEiIgBQVSIEQgIgMhkUQkFBQkNRRURJWTECIlIVNSUTVRVAQQQ0A0IDU0'
          //---無得分
          //'I0JREkJCJQIF',
          //'VBSAMCVQVgAgM0VyBSEFVwAzEVJzBUQjOAUlBVVzVVFFCAUjKRAAA1UCFQMzMiIAMiETMDJDAiAAkEQyAwQiKUBAIkQwQjkBIAMgEkQCABQENAMDIzJCQwMSBBRCAxMREUIkQSABA5BCQEMxACAQIBADExMRITACIiAhETMA',
          //--bug
          //'IBJAQwNCQhJS',//---右盤面得分
          //--正確NG
          //'NSJFUEMzWBI1'//---未聽牌wild
          //--
          //'NBJQExIzIDdV',//---未聽牌wild
          //'AQMxUDUiNUEz',//--有高賠率圖示中線
          //--正確FG
          //'JTQXQBEUFUgkEzIoAQFBADYSAVEYEwAUUxYyQVIFMRAxRBIzFVIQUkMVMjVAUBBQNBE1AERDRCNRNDQQFZMUMUQzFBMwNCMkQUIyMkEgEUMQ'
          //--buyfg2
          //'QGAENARSdFMVEWRTU1QEYlREMWIkUQETdVIBJIQDAEUBhQUhAYNQI0BQhEVFUGEFMkAjczVQEwNQRSQ1AhMDJTM0VAEyUxMCBQIlMCJDASQVREUwMDVVAQESJCM1AxMTABIx'
          //--FG盜賊測試(猜拳有平手)
          //'NUNwU1AVhTQBUFNlVBVVYhQkACVhUQUSY0IhVTKFVUMBZDAFAVWCMDEBgkRUNTB0NDMQdTQRRFODEBFQZTRAVRA0QwmRIREzADAEMiMSMZE0EhEjNDABMkNCQSQzMhExMEBEIQIDFDIxQElACUJCQxAhJAACEjECMTAZAxAwkCATESEhAjMgATACEzICISADIQMRMTMwIBERADASEyMxMzEyMQMBMSMxMgAx',
          //--buyFG1
          //'RARjQCIhEEgzMgB0QBMkMUdDEVWAFABEECcUAjFgIRIkJSYQVFRjJRVRRSZBEkJzUTFFRVZQAkAlFFIgJBAAIDUiUEU0VCRBkDIiIDM1EVEFMiMEBDIkEQJEADQxIUEEIxFEQzRVU1Q1FTEj'
          //--驗分錯誤(沒有乘上倍率)-阿里
          //--這邊回到一般模式下賠率的icon要換圖換掉..不然在不同的陣營顯示會錯誤
          'ABAWFVVSSFURBRQ3UzBBRjNCEgA4IlAiWFQCFDU3M1UURlIzEDNCEFExFQMSETAQUUNCMSMRAyMUMFMJNQUSBDUFkUNVAFMjIgFDNSUFWTMxU0MTE0IUJSWUEQGQNCE1MFAhEiIAQyNEMUREUAIDkSU0AkMkIQEgMwNEE1BVEDITQzUARAMB' //'NUNwU1AVhTQBUFNlVBVVYhQkACVhUQUSY0IhVTKFVUMBZDAFAVWCMDEBgkRUNTB0NDMQdTQRRFODEBFQZTRAVRA0QwmRIREzADAEMiMSMZE0EhEjNDABMkNCQSQzMhExMEBEIQIDFDIxQElACUJCQxAhJAACEjECMTAZAxAwkCATESEhAjMgATACEzICISADIQMRMTMwIBERADASEyMxMzEyMQMBMSMxMgAx'
          //--精準度bug--猜拳位置跑掉-盜賊
          //--wild右邊在中線沒有反黑
          //'VBSAMCVQVgAgM0VyBSEFVwAzEVJzBUQjOAUlBVVzVVFFCAUjKRAAA1UCFQMzMiIAMiETMDJDAiAAkEQyAwQiKUBAIkQwQjkBIAMgEkQCABQENAMDIzJCQwMSBBRCAxMREUIkQSABA5BCQEMxACAQIBADExMRITACIiAhETMA'
          //--錯誤
          //'JRFjEVQAKDIUIyKBIkI1NyJBQwVxESIjV0ACURF0JBEiByUhUjJgUiUFBhBBMgBkEAU0WDIENRR0AlQjV0M0ABVjUFMjFjBRMFOCIzUUKCFFMxBzIiEkRzQkAwByIxREFlMzVUQRVTATVSNSI0RTBFESUxA1USlRIVMRJTQyAUU0ExSSUwJQVBQRQRBFM0REI1EgGQETQVMBFQUkIDAQAkIzUTBBNDUgEANT'
          //--FG注單測試
          //'BCVGU1MEVRc0IFQoJBQEM1hUMyQGRAAyUgcyUlEHURNANAdCUAMXAlEhFCgCEzGVMgMRVBBQATQCIyAQEAkRNEQzMRIQIzEhIBQxMwAhGQEAIDlDEkAkIkMDQyMjQ0RCAQJBRCRDFEEhNAIRARISAwMgNEEUIRAQQTQjQkJB'
          ];
          this._testIndex++;

          if (this._testIndex > testBase64Data.length - 1) {
            this._testIndex = 0;
          } //this._currentSlotInfo.testNGCards = this.getNGTestCards();
          //this._currentSlotInfo.testReSpinCards = this.getReSpinCards();
          //this._currentSlotInfo.testFGCards = this.getFGCards();

          /*
          for (let item of testBase64Data) {
              this._currentSlotInfo.resetRoundData();
              console.log('check_testBase64Data', item);
              this._currentSlotInfo.setNewRoundData(item, 3000);
          }*/


          this._currentSlotInfo.resetRoundData();

          var item = testBase64Data[this._testIndex];

          this._currentSlotInfo.setNewRoundData(item, 100);
        }

        getNGTestCards() {
          return [5, 0, 3, 6, 4, 2, 2, 3, 1, 1, 2, 3, 4, 1, 8, 1, 1, 4];
        }

        getReSpinCards() {
          return [[0, 1, 0, 7, 5, 0, 0, 0, 3, 2, 4, 1, 3, 5, 6, 3, 0, 0], [0, 0, 2, 6, 5, 1, 4, 1, 3, 4, 0, 5, 4, 0, 8, 2, 0, 0]];
        }

        getFGCards() {
          return [[2, 1, 2, 2, 3, 9, 2, 1, 3, 1, 1, 9, 1, 0, 9, 1, 4, 1], [4, 5, 0, 4, 0, 3, 5, 2, 4, 3, 1, 1, 4, 3, 2, 2, 4, 0], [1, 0, 3, 3, 5, 5, 2, 0, 2, 4, 0, 3, 5, 0, 4, 4, 1, 3], [1, 3, 5, 2, 2, 5, 1, 2, 3, 2, 3, 0, 2, 1, 3, 2, 0, 9], [3, 0, 5, 0, 0, 2, 0, 5, 0, 5, 5, 2, 5, 5, 5, 3, 4, 2], [3, 0, 0, 0, 4, 2, 0, 0, 2, 1, 3, 0, 4, 0, 5, 5, 3, 0], [3, 3, 4, 3, 3, 3, 5, 0, 2, 3, 3, 4, 5, 1, 5, 3, 0, 4], [2, 0, 1, 5, 4, 9, 3, 0, 3, 1, 5, 4, 2, 3, 4, 4, 1, 0], [1, 1, 3, 3, 2, 2, 0, 1, 4, 0, 4, 3, 1, 2, 0, 3, 4, 1], [0, 2, 9, 0, 1, 1, 0, 1, 4, 3, 0, 2, 2, 5, 1, 2, 0, 0], [3, 4, 2, 5, 5, 4, 0, 5, 1, 2, 0, 1, 9, 2, 2, 2, 5, 3], [4, 4, 2, 1, 1, 4, 5, 5, 4, 4, 1, 4, 2, 5, 3, 3, 1, 2]];
          /*
          return [
              [0, 9, 3, 9, 9, 9, 0, 9, 1, 5, 1, 3, 5, 1, 9, 0, 2, 1],
              [1, 1, 0, 3, 9, 1, 1, 9, 3, 4, 2, 4, 1, 3, 3, 2, 1, 1],
              [3, 0, 3, 2, 4, 1, 0, 3, 3, 5, 9, 0, 5, 3, 5, 0, 2, 1],
              [4, 0, 5, 3, 5, 0, 1, 9, 3, 4, 5, 5, 0, 0, 3, 5, 3, 2],
              [2, 2, 1, 0, 3, 4, 5, 3, 5, 2, 5, 0, 9, 5, 3, 3, 1, 3],
              [3, 5, 3, 4, 3, 1, 3, 1, 2, 4, 4, 1, 5, 2, 5, 2, 4, 9],
              [3, 5, 3, 4, 3, 1, 3, 1, 2, 4, 4, 1, 5, 2, 5, 2, 4, 9],
              [3, 5, 3, 4, 3, 9, 3, 1, 2, 4, 4, 1, 5, 2, 5, 2, 4, 2],
              [3, 5, 3, 4, 3, 9, 3, 1, 2, 4, 4, 1, 5, 2, 5, 2, 4, 2]
              /*
              [1, 1, 1, 0, 0, 9, 4, 3, 1, 2, 5, 3, 0, 3, 0, 5, 1, 2],
              [2, 1, 2, 2, 0, 0, 3, 4, 3, 2, 4, 4, 1, 3, 4, 4, 4, 4],
              [0, 5, 2, 0, 3, 0, 1, 9, 5, 2, 4, 3, 2, 0, 3, 4, 4, 2],
              [1, 2, 1, 0, 0, 2, 3, 3, 3, 0, 4, 4, 3, 1, 0, 5, 5, 5],
              [0, 1, 2, 3, 3, 1, 3, 4, 5, 3, 0, 0, 4, 4, 3, 0, 1, 0]]*/
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_gameView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=09fd079502a407983e12450da50627ee77a16900.js.map