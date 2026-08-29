System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbstractBasicGameController, ProcessSlotDataCore, Utility, GameUtilsTools, GenericUIManager, GameGlobalKeys, GlobalAccessWriter, AudioSourceList, SoundList, DefinitionGameConfigData, PlayerInfo, AudioManager, SOUND_TYPE, _dec, _class, _crd, ccclass, property, SCROLLING_TEXT, GameController016;

  function _reportPossibleCrUseOfAbstractBasicGameController(extras) {
    _reporterNs.report("AbstractBasicGameController", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProcessSlotDataCore(extras) {
    _reporterNs.report("ProcessSlotDataCore", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicProcessSlotData(extras) {
    _reporterNs.report("BasicProcessSlotData", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProcessSlotData(extras) {
    _reporterNs.report("IProcessSlotData", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtilsTools(extras) {
    _reporterNs.report("GameUtilsTools", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUIManager(extras) {
    _reporterNs.report("GenericUIManager", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameGlobalKeys(extras) {
    _reporterNs.report("GameGlobalKeys", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalAccessWriter(extras) {
    _reporterNs.report("GlobalAccessWriter", "../DefinitionGameData1016/AccessDefs/GlobalAccessWriter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioSourceList(extras) {
    _reporterNs.report("AudioSourceList", "../DefinitionGameData1016/SoundList1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../DefinitionGameData1016/SoundList1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDefinitionGameConfigData(extras) {
    _reporterNs.report("DefinitionGameConfigData", "../DefinitionGameData1016/GameConfigInstance", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerInfo(extras) {
    _reporterNs.report("PlayerInfo", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNewFlashModeEnum(extras) {
    _reporterNs.report("NewFlashModeEnum", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOUND_TYPE(extras) {
    _reporterNs.report("SOUND_TYPE", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AbstractBasicGameController = _unresolved_2.AbstractBasicGameController;
      ProcessSlotDataCore = _unresolved_2.ProcessSlotDataCore;
      Utility = _unresolved_2.Utility;
      GameUtilsTools = _unresolved_2.GameUtilsTools;
      GenericUIManager = _unresolved_2.GenericUIManager;
      GameGlobalKeys = _unresolved_2.GameGlobalKeys;
    }, function (_unresolved_3) {
      GlobalAccessWriter = _unresolved_3.GlobalAccessWriter;
    }, function (_unresolved_4) {
      AudioSourceList = _unresolved_4.AudioSourceList;
      SoundList = _unresolved_4.SoundList;
    }, function (_unresolved_5) {
      DefinitionGameConfigData = _unresolved_5.DefinitionGameConfigData;
    }, function (_unresolved_6) {
      PlayerInfo = _unresolved_6.PlayerInfo;
      AudioManager = _unresolved_6.AudioManager;
      SOUND_TYPE = _unresolved_6.SOUND_TYPE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7f86YdvUZAHJfiVFUitBNZ", "GameController016", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Animation', 'Game', 'director', 'AudioSource', 'profiler']);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        SCROLLING_TEXT
      } = _crd && DefinitionGameConfigData === void 0 ? (_reportPossibleCrUseOfDefinitionGameConfigData({
        error: Error()
      }), DefinitionGameConfigData) : DefinitionGameConfigData);

      _export("GameController016", GameController016 = (_dec = ccclass('GameController016'), _dec(_class = class GameController016 extends (_crd && AbstractBasicGameController === void 0 ? (_reportPossibleCrUseOfAbstractBasicGameController({
        error: Error()
      }), AbstractBasicGameController) : AbstractBasicGameController) {
        constructor(...args) {
          super(...args);
          this._testIndex = -1;
          //--for do cycle data test
          this._useServerDelayTest = false;
          this._currentSlotInfo = void 0;
          this._autoNextDataForGui = {
            hasFGOthers: false,
            odd: 0
          };
        }

        init(gameNumber, isOnline) {
          super.init(gameNumber, isOnline);
          this.setTwoLevelTurboMode(true);
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.addGamingShowTexts(SCROLLING_TEXT);

          if (!isOnline) {
            (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
              error: Error()
            }), PlayerInfo) : PlayerInfo).balance = 1000000; //--for testing
          }

          this._strVersion = '1.0.1.20260212'; //this._strVersion = 'testMode-5-0128';
          //--新版公版UI設定自適應

          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setAutoResize(true);
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setAutoResizeMaximumSize(1920, 2000);
        }
        /**
         * override gameController method---
         * <2階段加速>
         * TIPS:
         * 原先的規劃是會直接setting engine的timeScale
         * 但企劃另有神奇的想法,所以就要整個override掉原先設計的onNewFlashBtnSwitch
         * (不要去super.onNewFlashBtnSwitch(mode),這樣會更改到engine timeScale)
         * 
         * @param mode 0=normal,1=Lv1 speed up,2=Lv2 speed up
         * PS:每次在操作按鈕ui會set currentTurboMode,所以這邊可以直接拿來用
         */


        onNewFlashBtnSwitch(mode) {
          this._gameViewManager.setTwoLevelTurboMode(mode); //-一般模式0.2-0.3/快速模式0.1的新局間延遲時間設定是不同的時間


          this._gameCycleDelay = (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList).get(cfg => {
            var _cfg$round;

            return (_cfg$round = cfg.round) == null ? void 0 : _cfg$round.interRoundDelay_AUTO;
          });
          /*
          super.onNewFlashBtnSwitch(mode);
          const currentTurboMode = GenericUIManager.instance.getCurrentTurboMode();
          const gameTimeScale = GameTimeScale.timeScale;
          console.log('<onNewFlashBtnSwitch>_currentMode:', currentTurboMode, 'gameTimeScale:', gameTimeScale);
          this._gameViewManager.setTwoLevelTurboMode(currentTurboMode);
          this._gameViewManager.setGameTimeScale();
          */
        }

        randomRangeVoiceForBegin() {
          const targetPool = [(_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).Start_01, (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).Start_02, (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).Start_03];
          const index = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).getRangeRandomInt(0, targetPool.length - 1);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound(targetPool[index], (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
            error: Error()
          }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).Voice);
        }
        /**
        * 20251105
        * 繼承後可以覆寫此方法，實作點擊繼續按鈕後的邏輯
        * 例如Start 頁面按下進入後要發出語音
        */


        onContinueBtnClick() {
          this.randomRangeVoiceForBegin();
        }

        initForOtherSystem() {
          this._currentSlotInfo = new (_crd && ProcessSlotDataCore === void 0 ? (_reportPossibleCrUseOfProcessSlotDataCore({
            error: Error()
          }), ProcessSlotDataCore) : ProcessSlotDataCore)();

          this._gameViewManager.beforeInit();

          this._gameViewManager.init();

          this._gameViewManager.registerSystem();

          const currentTurboMode = (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.getCurrentTurboMode(); //const gameTimeScale = GameTimeScale.timeScale;

          this._gameViewManager.setTwoLevelTurboMode(currentTurboMode);

          this._gameViewManager.setGameTimeScale();

          this._gameCycleDelay = (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList).get(cfg => {
            var _cfg$round2;

            return (_cfg$round2 = cfg.round) == null ? void 0 : _cfg$round2.interRoundDelay_AUTO;
          });
        }

        testAEP() {
          /*
          let testTarget: ActionEventPlayer = FindComponent.findComponentInChildren(this._testAEP, ActionEventPlayer);
          if (testTarget) {
              testTarget
          }*/
          //let testTarget: Animation = FindComponent.findComponentInChildren(this._testAEP, Animation);
          //if (testTarget) {
          //--這個是勾選-is For Animation Event的情況下 那就走美術定義的Animation

          /**
           * 把它當作animation(他們在時間軸都有定義事件)
           */
          //testTarget.OnAnimEvent(Animation.EventType.FINISHED)
          //testTarget.on(Animation.EventType.FINISHED, () => {
          //    console.log('Animation finished');
          //});
          //testTarget.play('icon_10_Appear_Ani');

          /**
           * 如果沒有勾選-is For Animation Event
           * 那就走ActionEventPlayer的事件
           * 會在下面建立EventList 裡面的東西有相關的event type可以作為操作
           * 那麼那一包EventList就會被當作你要播放的內容來動態產生clip
           * 最後,你幾乎都是呼叫play
           * 差別只是在事件要透過OnAnimEvent來assign進去
           * 因為裡面會幫你做好監聽
           * 然後用OnAnimEvent來拿到事件
           * 
           */
        } //-after <onGameViewShowEndEventHandler>


        async processInShowEndEvent() {//--準備要下一局的資料
          //--不能做在這裡
          //await GameUtilsTools.DeferByTweenPromise(this._gameCycleDelay);

          /**
           * 結束一round後view通知
           * 主要集中在處理PlayerInfo.balance的資料,看情況要不要處理
           */
        } //-after <onReceiveBet>


        processReceiveBet(betData) {
          var _this$_currentSlotInf, _this$_currentSlotInf2;

          (_this$_currentSlotInf = this._currentSlotInfo) == null || _this$_currentSlotInf.setNewRoundData(betData.slotDataBinaryBuffer, betData.bet);
          const roundData = (_this$_currentSlotInf2 = this._currentSlotInfo) == null ? void 0 : _this$_currentSlotInf2.getCloneData(); //=======公版GUI需要的每一局的資料========
          //--其他款的話還要再判斷是否有其他符合條件的遊戲流程-20251219

          const hasFGOthers = roundData.freeGameReelInfo.length > 0 ? true : false;
          const roundTotalOdds = roundData.allRoundOdds;
          this._autoNextDataForGui = {
            hasFGOthers: hasFGOthers,
            odd: roundTotalOdds
          }; //=======公版GUI需要的每一局的資料========

          this._gameViewManager.setServerReceiveData(roundData); //=====進入主要遊戲流程開始新round(準備接stopSpin)========


          this._gameViewManager.newRoundDataToStopSpin();
        }
        /**
         * 在checkAutoNext呼叫前執行(公版UI需要的)
         * isEnterFeatureGame===>這邊指的是有<轉場切換的那一個東西(機制?流程)>
         * 就是屬於特色遊戲,所以有可能是FG,也有可能是bonus game之類的
         */


        setAutoNextRound() {
          this.checkAutoNextData = {
            //---是否進入FG/特色遊戲(不一定只有FG)
            isEnterFeatureGame: this._autoNextDataForGui.hasFGOthers,
            //--單一局的總odds(整駝的賠率,就是你在checkScore的totalOdds)
            odd: this._autoNextDataForGui.odd,
            balance: (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
              error: Error()
            }), PlayerInfo) : PlayerInfo).balance
          }; //console.log();
        } //--before startSpin


        resetRoundData() {
          var _this$_currentSlotInf3;

          (_this$_currentSlotInf3 = this._currentSlotInfo) == null || _this$_currentSlotInf3.resetRoundData();
        }

        callServerInLocalTest() {
          //--local mode 模擬server 延遲---
          if (this._useServerDelayTest) {
            if (this._testIndex == 0) {
              (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
                error: Error()
              }), GameUtilsTools) : GameUtilsTools).DeferByTweenPromise(2).then(() => {
                this.testReceiveBetData(); //---local mode 模擬server 延遲---
              });
              return;
            } else {
              this.testReceiveBetData(); //---local mode 模擬送資料---this.testReceiveBetData();//---local mode 模擬送資料---
            }
          } else {
            this.testReceiveBetData();
          }
        }

        async testReceiveBetData() {
          var _this$_currentSlotInf4;

          //await GameUtilsTools.DeferByTweenPromise(0.1);//--原本單位是毫秒現在換算成秒
          this.testServerData();
          const cloneData = (_this$_currentSlotInf4 = this._currentSlotInfo) == null ? void 0 : _this$_currentSlotInf4.getCloneData(); //console.log('cloneData:', cloneData);
          //this._gameViewManager.runTest(cloneData);
          //return;//-測試先關閉往下

          this._gameViewManager.setServerReceiveData(cloneData);

          this._gameViewManager.newRoundDataToStopSpin();
        }
        /**
         * 維多利亞強開：
         * 這個是測試用的,會直接觸發遊戲流程
         *  BIGWIN：1000
            SUPERWIN：1500
            MEGAWIN：2000
            EPICWIN：2500
            達成WILD推動但未觸發：3000
            WILD推動觸發RESPIN：5000
            RESPIN：5500
            RESPIN中觸發FG：6000
            FG：6500
            最大倍：7000
           
            */


        testServerData() {
          var _this$_currentSlotInf5;

          const testBase64Data = [//'AQAAAAAICAoBCAgICQkJBQUFBQICAAA=',//--沒有位移的2個wild
          //'AQMKAAAFBQUCBwcDAwUFAwMEBAQEAAA='//--未中獎時scatter沒有loop
          //--scatter沒有送出累計次數的動畫(有Scatter,有連線但非Scatter)
          //'AwMDAwoICAcJCAkJCQAFBQcBAQEAAgIBAwgKBQkJCQkJCQkJAQgICAICAgIABwcICAkJCQkJCQkJBgYDAwEBAQIAEAMDBQUCAgEECAgGBgEHBgYEBAQHAAUFBQIHBwcGCAgCAgAAAQEDAwMGAAcHBAQHBwYGAQEICAcHCAgEBAQGAAcHAQEBAQEICAgIAggHBwcBAQEFAAcHBwYDAwMHBwcHBgcHBwUCAgcHAAQEBAgEBAQIAAAABQMDAwMCAgUFAAcIBgYEBAQIAQEICAUFBQIDAwgFAAYGBAQHBwUCBgYGAQcHAAAHBwcCAAQEBAcDAwcHBQcHBwQEBAEGBggIAAIDAwcEAAAABgYICAcHAAAAAQEHAAUFAAABAQgIAgICBQgICAYGBgcHAAICCAgHBwAABgYHBwEBAQEGAQEHAAcHBwMBAQEGCAgDAwkJAwMICAgGAQMHBwcACAQEAAgIBgAJCQkJAgICBQAICAgHCQABAQYGAQgJCQkJCAgHBQEBBQUBAQkJCQkHBwECCQkJCQQEBAUA'
          //--沒有RS-直接進FG
          //'AQEKAgIICAoACgUFBQACAgIBAQAAAAgICAQECQYGCAEBAQUICAcHBAQEBwEBAgICBgkJCQkHBwMBBQUFBgICAgIACAAABgkJCQkAAAQEAgICBgcHBwQABgYGBAkJCQkGBAQIAAAAAAQEAgcABwcHBwkJCQkHBwcHAQEBCAcHAgIACAgIBgkJCQkDAwUFAQEBBAgIAAAACAgHBwkJCQkDAwEBBAQEBAYHBwIABAQEAQkJCQkEBAEBCAgIBwYICAgA'
          //--SC沒有反灰
          //'AwICAgUHBwkJCQkJCQEBAAABAQAKAQEFCgAACQkJCQkJCQkAAAgIAAAKBwAAAAYGCQkJCQkJCQkAAAgIAwMDBgAHAgIGBgAAAAEHBwcABAQEAQgICAMABgYHBwUFBQUHBwYGBAQEBAgAAAcABQUFAAICAgAHBwcABwcHAQgIBwYABAQGBggFBQIFBQUFBwcICAMDCAgABwcHAwAAAAcHBwUCAgAABggIBwcABQUFCAICBAQAAAABBwcGCAICAQEABgYAAAgICAMGBgEBAgIICAMAAAcA'
          //--有中獎輪播..盤面上剛好有Scatter
          //'AQgIBQUAAAgICQkJCQICAgoKAAAGAAA='
          //'AQAAAAAICAoBCAgICQkJBQUFBQICAAA',//--沒有位移的2個wild(2個都沒中獎)

          /**
           * 2軸wild進行非位移動態+
           * 其中1個wild中獎,另1個wild沒有中(缺灰階)
           */
          //'AQYGBgYEBAYGBwcHCQkAAAcGBgYEAAA='
          //-有特殊玩法(位移/非位移)+scatter的盤面 順序 特殊玩法>>SC>wild>symbol
          //'BAAKAQEJAwMDCQEBAQkJCQkBAQAAAgECCAgACgkJCQkJCQkJCQkJCQYGBAQACAgKAQkJCQkJCQkJCQkJCQMDAwMABgYGBgkJCQkJCQkJCQkJCQgICAEAHgQEBwcHBwAACAEBAwICAAADAQEEAAgICAUDAwcHAwMDCAUCAgICAgIHAAcHAwMHBwcFBQcHBwgIBgYGBgUFAAUFAAAFBQQECQEBBQYGBQUIAwMFAQIGBgYHBgYEAwkJCQkICAcHBwcGBgAHBwICBwcGBgkJCQkICAUFBAQCAgAICAEBBQUCCQkJCQkJCQkJBQUGBgEBBgYGCAkJCQkJCQkJCQkJCQgIBAQABwcHAgkJCQkJCQkJCQkJCQMDAwQAAgICAQkJCQkJCQkJCQkJCQICCAgAAgICAgkJCQkJCQkJCQkJCQAABAQACAgDAwkJCQkJCQkJCQkJCQUGBgYACAgICAkJCQkJCQkJCQkJCQICAQEAAwMGBgkJCQkJCQkJCQkJCQUFAQQAAQEBBwkJCQkJCQkJCQkJCQQEBAMABwcIBQkJCQkJCQkJCQkJCQgICAYABgYGAwkJCQkJCQkJCQkJCQIBAQcABgYICAkJCQkJCQkJCQkJCQEBAQEACAgEBAkJCQkJCQkJCQkJCQgHBwIABAQEBAkJCQkJCQkJCQkJCQMDCAgACAgEBAkJCQkJCQkJCQkJCQICBAQABAQEAQkJCQkJCQkJCQkJCQQHBwcABQUFBgkJCQkJCQkJCQkJCQMDAwIACAgBAQkJCQkJCQkJCQkJCQICAggABwcHBwkJCQkJCQkJCQkJCQICAgIAAQEBBgkJCQkJCQkJCQkJCQgICAcABwAICAkJCQkJCQkJCQkJCQAACAgABwcHAgkJCQkJCQkJCQkJCQcHBQEABwcDAwkJCQkJCQkJCQkJCQUFAwMACAgIAAkJCQkJCQkJCQkJCQgICAQA'
          //--SC有聽牌+不完全的wild
          //'AQoICAQAAAoCCgMDAwkJCQQCCgMDAA4DAwMEAAAEBAgICAcHBwgIBwcHBgADAwcHCAgIBwcHBAQCAgIHBwcDAwAICAgIBwcFBQUFCQkIAAAABwcFBQECBAQECAMDCQkJCQkJCAgFBQEBAQQBAQMDAwQJCQkJCQkJCQMEBAEFBQgIAAICAgIJCQkJCQkJCQMDAwMDAwMCAAcHBAQJCQkJCQkJCQICAgUICAYGAAEBAQIJCQkJCQkJCQkFBQUCAggIAQMHBwcBCQkJCQkJCQkJCQkJAQECAgAAAAAACQkJCQkJCQkJCQkJAwMBAQAICAUFCQkJCQkJCQkJCQkJBgcHBwAICAgICQkJCQkJCQkJCQkJCAgHBwAICAgACQkJCQkJCQkJCQkJAwgIBQAHBwcICQkJCQkJCQkJCQkJAwMDAQA='
          //--測試使用的資料
          //'AQUFCAgFBQUFAAAFBQAAAgIFAgIBAAA='//--一般中獎
          //--轉交回去排序錯誤
          //'AQAAAQIEBAQDBwcHBwkHAQEAAAAAAAA=',//--wild未中獎
          'AQAAAAgHBwEBAAAACgICAQEAAAQEAAA=' //--未中獎有SC
          //'AQMKBQUDAwMDBgYGBQcJCQkICAgAAAA'
          //'AQAAAgUKAAAACQMDAwICAgIBCgUFAAA=',//--沒有RS/FG/wild位移,有得分
          //--要處理scatterappear5軸停後沒得分的情況..要等第五軸停後才能接idle
          //'AQAACggACgYGCAQEBAQKAwMAAAAHAAA=',//--亂數產生的scatter他只是路過--所以他聽牌沒錯..但下一軸在聽牌失敗後要取消
          //--scatter中獎
          //'AQQECAoHBwoAAgIBCgYGBgoAAAoCAA0HBwcEBwcBAQgIBwcICAgHCAgHAAAAAAAGAgICAgMDAwMHBwMDBgYIBwAICAYFBggICAgICAgEBAUHAwMDBAAAAAAEAQEEBAAACAgHBwcIAQECAgAGBggIAQEBAwgICAgBCAgICAgIBgAFBQEBCAgICAkFBQIHBwgIBgYGCAECAgIBAQkAAAAJCQkJBAQCAgEBAwMBAQQEBAIJCQkJCQkJCQEBAQEFBQUAAAUFBQUJCQkJCQkJCQICBwcFBQYGAAgICAQJCQkJCQkJCQAACAgICAgIAAUICAMJCQkJCQkJCQQEAgIFBQgIAAEEBAUJCQkJCQkJCQcHAQEBBwcFAAQEBAIJCQkJCQkJCQUBAQgFBQgIAA=='
          //--wild爆框 bet 6000
          //'AwEBAQMJCQkECQkJBgkJAwMBAQEIAgIDCgAAAQgIAAoJCQkJCQkJCQIFBQMABQUHCgUKAAAJCQkJCQkJCQICAgAAFAUFAwMDCAgFAAAABwgICAQHBwAAAAgEBAQHBwcHAwMAAAYICAcHBwcHAAgIAQEGBggIBgYEBAYGBgUAAAAHAAMDAwIICAAAAQEBBQUFBQUFBQICAAcHAQEHBwcICAgGAgMDAwcHBwcDAAcHBAQBAQQEAQEICAYGBgYAAAADAAcCAwAHBwAAAQEHBwUFBQUGBgEIAAICAggFBQUICQkICAQEAAAGBgcHAQIDAwMEAQEBAAkJCQkICAgAAQEBAQAHBwICAQEBBAkJCQkICAgIAgICAwAICAEABgYEBAkJCQkICAgBAgIICAADCAQEBQUHBwkJCQkICAcFAwMGBgAGBgYBCQkICAkJCQkFBQEIAAAGBgEBAwMDCAkJCQkJCQkJCAgIBQUFAQEACAICBQkJCQkJCQkJBwYGAwEBCAgACAgIBwkJCQkJCQkJBAcHAAYGAQEACAgIAQkJCQkJCQkJBwcEBAQEBgYAAwMHBwkJCQkJCQkJCAgHBwcHBwcAAQEBBgkJCQkJCQkJBwcHBwQECAgAAAAIBgkJCQkJCQkJBwcHCAEHBwcA'
          //--wild上來位置不對 bet 6000
          //'AwICAwMAAAkJAgIJCQYGAAkCAgICAgMBAgEKAwkJCQkBAQEKCQkJCQcHBwYAAgIBAQkJCQkHBwcGCQkJCQAAAAIADAQEBwcEBAMDAwMDAwIICAcEBAQDAAUFBgYICAgFBAQEBgkJCQkGBgYGAAgIAAQICAcHAQEEBAkJCQkGBgMDAAEBBAQHBwgICAgAAAkJCQkDAwMHAAQEAAAHBwcBAgICCAkJCQkDAwMGAAcHBwgFBQUIAgICBgkJCQkICAcHAAgICAQEBAADAgAAAAkJCQkFAQEBAAAACAIFBQUABwcGBgkJCQkFBQUEAAgICAAHBwcGAwgICAkJCQkGBgYAAAYGBgMJCQkECQkFBgkJCQkFBQQIAgIBBwcHBwkJCQkJCQkJCQkJCQICBwcAAwMHBwkJCQkJCQkJCQkJCQYGBgQA'
          //'AwcHBwcDAwIJCAkJCQEBBgYHBwcCAgECCgICAQkJCQkJCQkJBQUKAwICAgoAAAAACgkJCQkJCQkJCgIBAQAAAAEAFgAAAAcICAQFBAQHBwUFBQcHBwcFAAAAAAgDAwMICAgIAwEBCAgCAgIEAAMDAwUHAwMIBwcICAgBAQEBAQgIAAUFBQMDAwMDBwcHBAgIBAQICAcGAAMDAwMICAUFAwMICAUFBQQICAAAAAAABAQBAQEBBAQEBAcHBwgBAwgIAAIFBQUAAAYGAwMGBgYGBgYICAgCAAQEBAUHBwcBBwcHAwQEAwMIBwcHAAICAgMBAQEIBQUICAcHBwgDBAQHAAgICAUDAwgIAwMDAwYGCAgDAwEBAAcHBQUCAggIAAAABwICAQkFBQUDAQMCAgIGBQUFAgYGBwcJCQkJBAQEBgAIBwcHAAAICAgICAYJCQkJCAEBBwAAAAcHBgYEBAAAAQUJCQkJAgIICAAEBAcHBQUICAYGBgUJCQkJBwcGBgAICAgHCQkJCQMDAwgJCQkJBQUDAwAGBgYHCQkJCQAAAgIJCQkJAAAABAAEAAEBCQkJCQYGBgYJCQkJAwMDBQAHBwcGCQkJCQMDBgYJCQkJAwMDAAADAwYGCQkJCQcHAgIJCQkJAQEAAAAIBQUHCQkJCQcHBwgJCQkJBgYGBgAICAgGCQkJCQYGBggJCQkJCAgICAA'
          //'AQICAgMJCQkICQkEBAkJCQkAAAQEAAA='//--bet 3000 
          //'AQQEBAAJCQkJAAAACQICAgcBAQoEAAA=',//---全軸+露頭
          //'AQEBAAAGBgYGAAkJCQcHCQkCBAQAAAA=',//---兩個露頭
          //'AQMDAAAJCQQCAwMAAAICAggBAQEDAAA=',//--wild腳在上面
          //'AQYGBAQGBggIBAQCCQYICAgAAAYEAAA=',//--wild露頭
          //'AQcEBAQFBQMJCQcHBAgIBwcHBwcIAAA',//---頭/腳 各一
          //--RS聽牌-沒有FG--
          //'AwAAAAoJCQkJAwICAQIJCQkAAAMDAQMGBgICCQkJCQICAgMJCQkJBAQEAAAGBgYDCQkJCQQEBAAJCQkJAwMDBwAA'
          //--聽牌要再修
          //'BAEBCgACAgIKAgIJCQkJCQQAAAAAAgMCAwMAAAkFBQYJCQkJCQkJCQoEBAABAQcAAAUJCQkJCQkJCQkJCQkBAQEBAAEBAQAJCQkJCQkJCQkJCQkCAgcHAAsEBAQCAgICCAcHCAgFBQUICAgIBAADAwMHCAgJCQcHBwIBAQECBAQHAQEBBgYBAQkJCQkHBwUFBwAAAwUFBAQABwAACAkJCQkBAQgICAgIAAcHBwgACAgIAwkJCQkDAwgIBgYGBgcHBAQAAQEBBAkJCQkHBwAABQUFBAMDBgYABQUAAAkJCQkEBAkJBwcHBAQEBAIBAgcHBAQJCQkJCQkJCQEBBwcAAAEBAAAABQUJCQkJCQkJCQMDAwcGBgYHAAUFBQcJCQkJCQkJCQICCAgHBwcAAAEBBwcJCQkJCQkJCQcHBgYEBAQHAA=='
          //--出場
          //'BAICAgQJCQEBAgICAQkBAQEAAAAAAgMBBwoEBAkJCQkCAgoACQkJCQEBCgMAAwMAAAkJCQkAAAkJCQkJCQQEAwMBAgECAgoJCQkJCQkJCQkJCQkAAQcHABYFBQQEAAAABAcHBwYDAwAAAwMAAAAAAgIFAgIICAEBCAkAAAAIBwcHCAECAwMICAcHBAQJCQkJAgMDCAEAAAAABwcHAAQEAwMJCQkJBwcHAwYGBgYABwcFBQAAAAEJCQkJCAgGBgMDBAQABQcHBwgIAQEJCQkJBgYGAAICAgcABQgICAQEBAQJCQkJAggEBAgICAQACAgCAgcHBwMJCQkJBgYGBgcHBwEABQUGBgcHBwcJCQkJAwMICAcHCAgABwcHBgICAggJCQkJAQEBBwgIBAQAAwMDAwgICAQJCQkJBAQEBAcHAwMAAgIICAAAAAAJCQkJBAQCAgMDCAgAAAAAAwQECAgJCQkJAAAAAAYGBggABQUFAgYGBggJCQkJCAgIAQMDAwMAAQEBBwEHBwgJCQkJBwYDAwICAgIABwcHBQkJAQEJCQkJBwcICAICCAgBAQEBAQUJCQkJCQkJCQMDAwcHBwIGAAcHBwYJCQkJCQkJCQQHBwEGBgcHAAAAAQEJCQkJCQkJCQEBBgYGBgcCAAUFBQUJCQkJCQkJCQcHAAAEBAcHAAcHCAgJCQkJCQkJCQgAAAAHBwcIAAgIBQUJCQkJCQkJCQcDCAgHBwYGAA=='

          /**
           * NG 2+3軸轉出W/S 再進到RS時第一軸在開始沒有觸發聽牌(黃色框) 
           */
          //'AwICAQEJAgICAAAGCQICBAQHBwcAAgECAwMDCgkJCQkJCQkJBgYAAAQBAQEACAgIBAkJCQkJCQkJAQEDAwMDAgIACQcHBAQECAgDAQEJCQcHBAQFBQYGAQIHBwgIBwkJCQkJCQkBAQEBAAAAAwEBAQECAgkJCQkJCQkJBwcGBgYGBQUAAgIHBwkJCQkJCQkJAgICBAcHBwAABAYGBwkJCQkJCQkJBgYGBgYGCAgAAQEBAwkJCQkJCQkJAQAAAAUFBQUAAQYGBQkJCQkJCQkJBwcHBwYGBgYAAAAGBgkJCQkJCQkJBwcHBAgIAgIACAgIBAkJCQkJCQkJAAAAAAMBAQEA'
          //'BAAABAQBAQkJAAQECQMDAwIHBwoIAgIBAAAABAkJCQkJCQkJCQkJCQcAAAAAAQEDAwkJCQkJCQkJCQkJCQICAwMABwcEBAkJCQkJCQkJCQkJCQEBAAAAAA=='
          //--catter中線
          //'AQMDCgQBCgMDAAEBCgAAAAoEBAMDAAsEBAUIAQkJCQMDAwIEBAQHBwcHBwEBCAgGBgkJCQkGBgYJCAgAAAYGBQUBAgQEBQUJCQkJCQkJCQAAAAAFBQYGAAcHBgYJCQkJCQkJCQcHAAACAgIAAAQEBQUJCQkJCQkJCQQECAgBBQUAAAYGBgQJCQkJCQkJCQUFBgYEBAcHAAQEBAgJCQkJCQkJCQAAAQEBBwcHAAgICAgJCQkJCQkJCQcHBwcHBwcBAAMDAwUJCQkJCQkJCQcHBwQDAwMFAAMDBwcJCQkJCQkJCQcHBwIHBwICAAgIAQcJCQkJCQkJCQUFBQgDAwMFAA=='
          //--FG test--
          //'AQAKAgIAAAoCBwcKAwMDAwQICAgIAAkFBQUICQkAAAEBAQUFBQcHBwcHAQEBBwcHAgkJCQkICAgEAAAHAQgAAAAAAwMDAQkJCQkHBwgICAgCBwICCAgABgYGCAkJCQkHBwcDBAQICAMDAwcAAgICBgkJCQkJCQkJAAADAwgIBgYAAAAABQkJCQkJCQkJBQUFCAgICAcABAQEBQkJCQkJCQkJAgICCAEBBQUAAwMDAwkJCQkJCQkJCAgIAQgIAgIABQUHAwkJCQkJCQkJCAgFBQMDBQUA'
          //--表演聽牌效果時,wild也要押在一般軸前面-M01_01_1763023541897
          //'BAQKAAAKAwMDCQkDAwAACQkICAAAAgMCBAYGAgkJAAAJCQkJCQkJCQcHAwMBAQAACgEJCQkJCQkJCQkJCQkFCgYGAAMDBwcJCQkJCQkJCQkJCQkCAwMHABcFBQUFAgIFBQgIBwcHBwcAAgIEBAADAwcHCAgIBAUFBQUEBAIJCAgHBwEDAwMDBAAACAYGBgcHCQkJCQcHBwUABwcBAQcHBwgFBQQECQkJCQYGCAgABAQEBAcHBAQHBwcHCQkJCQQEBAIAAAEBAQkJAwMBAQEDCQkJCQICBwcBAQICBgYJCQkJCAUFBwkJCQkGBgMDAAcHBwMJCQkJBAQEBAkJCQkICAICAAMDAAAJCQkJAAABBgkJCQkAAAYGAAAAAAAJCQkJBwcFBQkJCQkBAQgIAAEBAAAJCQkJCQkEBAkJCQkHBwEBAQIFBQUGCQkJCQkJCQkJCQkJAAAAAwACAgIBCQkJCQkJCQkJCQkJAAAGBgAEBwcICQkJCQkJCQkJCQkJCAgFBQACAgIICQkJCQkJCQkJCQkJCAgHBwABAAAACQkJCQkJCQkJCQkJBwcHAgAFBQUHCQkJCQkJCQkJCQkJAAADAwABAQECCQkJCQkJCQkJCQkJBwcHBgAFAQcHCQkJCQkJCQkJCQkJAQEEBAAFBQUDCQkJCQkJCQkJCQkJBwcGBgAEBAQHCQkJCQkJCQkJCQkJAAAABAAHBwcDCQkJCQkJCQkJCQkJAgcHBwAGBgUFCQkJCQkJCQkJCQkJAAAABAA'
          //'AQMDAwMCCgcDAAAABgkCAgIBAQYGAAA'
          //-圖示層級顯示錯誤：第2輪WILD應該在第3輪一般圖示上層。M01_01_1763023318280
          //'BAQEAgIJCQkJCQICCAQKBQUEBAQAAQIBBAQECQkJCQkJCQkDBwcEAwMDAwAGBQUKCQkJCQkJCQkBAQkJAgIDAQEDAgICBQkJCQkJCQkJCQkJCQcHAgIADAcHAwMFBQcHAAAABgUFAAABAQEIAAYGCAgDAwMACAgHBwEBAQECAgEBAAIFBAQBBQMDCAgJCQgICAAAAAAIAQIDAwMIBwICCAkJCQkCAgMDBgYHBwAHBwEBCQkJBQkJCQkIAAAEAwMBAQEBAggFBQkJCQkJCQkJCQAAAgEBAQgBAwUFAwMJCQkJCQkJCQkJCQkICAgDAAcHBwMJCQkJCQkJCQkJCQkICAAAAAEBCAgJCQkJCQkJCQkJCQkABAQIAAYGBggJCQkJCQkJCQkJCQkFBQUFAAEEBAcJCQkJCQkJCQkJCQkFBQUIAAICAQEJCQkJCQkJCQkJCQkHBwcFAA'
          //--M01_01_1763023274624-NG圖示中獎到中獎輪播前，要移除盤面壓黑效果。
          //'AQQEBAYJCQkJBAQFBQMDAwMCAgICAAA'
          //'AQYGBggEBAoCCQAAAAkGBgYAAAEBAAA=',
          //--未中獎SC
          //'AQICAgIGAgIBAAoFBQEBAQAFAAAAAAA=',
          //--未中獎SC+wild
          //'AQgIAAAFBQkJBgYGAAoBAQQFBQUDAAA='
          //-wild+scatter
          //'AQYGAwMDAwAAAAAEBAcHBwcICAYGAAA=',//--未中獎沒有SC
          //'AQMDAwEGCggICAgCCQAAAQEECgAAAAA=',
          //'AQMDAwEGBgUFBQMDBggICAgGBgMDAAA=',//--未中獎沒有SC
          //'AQMDAwYFBQUGAAAICgEBAQoEBAQAAAA='
          //--初始2個RS,之後累計
          //'BAICAAAACQkJBwcAAAkJAAAAAAUFAgEDCAgACgkJCQkJCQkACQkJCQICAggBAgEBAQoJCQkJCQkJCQkJCQkAAAAFAAEBAwMJCQkJCQkJCQkJCQkDAwICABMCAwMDAAAAAgAAAgICAgIBBAQBAQAABAQCAAAAAAEIBAQDAwMBAgQEBAAEBAQABQUFAwEBBQUCAgUFAAAABQAAAAACAQEBBQEBAgIAAAABBgYICAACAgIBAgIAAAEBAQEAAAAHAQICBAAHBwcBAQEBAQQEBAMCAgAABAQHBwAAAAADAgIBAQgICAQDAwEBAwMDBAACAgIAAgICAwICAgIBAQECBgYGBAAEBAcHAwMEBAEBAQAAAAAAAAACAgADAwMCAQEBAQAAAAQBAQQEAgICBQAAAAAABgYFBQAAAAYBAQICAAACAgAAAAACAwMAAAEBAQAAAAMDAAAAAQACAgIGAQEAAAgICAgAAAEBAwMCAgACAgIIAwMFBQQEBAEEAQUFBAQEBAAEBAAAAggIAQYGBwAAAAAIAAABAQABAQEEAAACAgcHBwIAAAAAAAADAwADAwAAAgICAwUFBQECAQEAAwMBAQAEBAICCQkJCQcHAgIEBAQAAwMDAQAGBgYCCQkJCQAAAAEICAgAAQUFAAA='
          //--王夫symbol中線---0-1軸沒有跟上速度((前兩軸滿足條件)5軸聽牌)--沒有RS
          //'AQoBAQAKAAAABgYKAAIAAAkBAQAAAAsHBwcFAwMGBgMDCQkHBwMJBwcBAQICAwgIBgYFBQUFCQkJCQkJCQkHBwUFAAUFCAgHBwICCQkJCQkJCQkICAcHAAUFAAAIAwMACQkJCQkJCQkHBwcFAAgABQUICAgHCQkJCQkJCQkBAQEFAAQEBAQDAwEBCQkJCQkJCQkICAgGAAAAAAgCAgcHCQkJCQkJCQkHBAQAAAcHBwIICAQECQkJCQkJCQkFBQUBAAgIAQEGBggICQkJCQkJCQkHBwYGAAcHAQQHBwcGCQkJCQkJCQkICAcHAAMDAwMEBAQECQkJCQkJCQkFBQAAAA=='
          //--有SC但當下沒有FG累計
          //'AwAACAgBAQkJCQkJCAoBAQECAgIIAgECAgoBAQkJCQkJCQkJBAoDBgEBAQMABgYGBAkJCQkJCQkJAgIGBgICAgMACwAAAwMAAAEBAAACCQQECAgICAgBAQIICAcHAgIEBAkJCQkEBAEBAAAABgABAQICAQEAAAkJCQkCAgAAAgICAAABAQgIBAQECAkJCQkHBwcHAgICAgABAQEBBAQCAgkJCQkHBwcCBgYGBgADAwAABgICBwkJCQkAAAEECAgIAgAAAAACBAQBAQkJCQkHCQkJCAgIAwEDAgIDAwYGAAEJCQkJCQkJCQICBQUABAQBAQMDAgIJCQkJCQkJCQMDAwEAAAAABgICAgIJCQkJCQkJCQQEAgIABAQBAwgIAgIJCQkJCQkJCQEICAIA'
          //-輪播處理
          //'AQQEBgYJAAADCQcHAQAAAAEAAAEBAAA='
          //--有sc+wild進FG(沒有RS)
          //'AQcKBAQGBgoEBwcFCgkJBgYHBwcHAAwEBAgIBAQEBAgJCQkJCQkFAQEHBwICAwgIAgIICAgICQkJCQkJCQkFBQUBAAUFAQEBAQEBCQkJCQkJCQkGBgICAAACAgQEBAYGCQkJCQkJCQkICAcHAAYGAwMFBQUHCQkJCQkJCQkBAQUFAAYGBgcFBQcHCQkJCQkJCQkGBgMDAAUFBQUEBAUFCQkJCQkJCQkGBgYAAAMDCAgFAwMHCQkJCQkJCQkHBwgIAAcHCAgICAUFCQkJCQkJCQkEBAQGAAgIBAQJBAQFCQkJCQkJCQkEBAQEAQEFBQUDCQkJCQkJCQkJCQkJCAgICAAICAAACQkJCQkJCQkJCQkJBQUGBgA'
          //'AQYGBgoGBgADCAkJCQQEBgYHBwgIAAA'//---有wild補牌資料reel塞錯  
          //'AQYGAgIBAQEBAwkJCQgIBwcICAEBAAA',
          //'AQAAAAUFBQUKAwcHBwkJBgYGBgYGAAA'
          //'AQUFBQIDAwMIAgICBgUFBQkEBAQCAAA'
          //'AQICAgYHBwMDCAgBAQkGBggCBQUHAAA=',
          //'AQUFBQMAAAAAAAAFBQcHBwcAAAgIAAA=',
          //'AQUFBwcHCQkJAwMGBgQEAwMGBgYDAAA',
          //'AQYGBggEBAQBCgQEBQkJCQIHBwcHAAA=',
          //-只有RS
          //'AwUFBgYCAgICBwQECQkJCQcICAgIAgIDAwMDCAUFAgIJCQkJCQkJCQgICAgABgYDAwUFBgYJCQkJCQkJCQQEBQUAAA',
          //-中間看起來是Server資料延遲-下一盤就會詭異狀態
          //'AQcHBAQDAwMECQgICAYGAAAGBgYGAAA'
          //--觸發位移白色動畫
          //'AQgICAYEBAYGCAgBCQkJCQMEBAQEAAA'
          //'AQYGBgUICAYJBgYDAwEBBQUICAICAAA',
          //'AQYGBgMDAwkJCAgIBgUFBQgGBgcHAAA'
          //'AQUFBQYHBwgGAwMDAwMDAwMHBwcHAAA',
          //'AQoICAgICAgFCAgIAwAABQUDAwMFAAA'
          //--NG+RS+FG
          //'AwoCAgIJBQUFBAoDAwQEBAkGBgYGAgMBBwcKBQkJCQkGCgUFCQkJCQYGBQoAAAADCgkJCQkHBwoICQkJCQgICAQAIAAAAQEDAwMDBAQEBQcHBgYEBAEBAAgIBQUFBQgICAgBAQkDAwgHBwcDAQMHBQUFBQUGBgkJBAQJCQkJAgICAgECBQUEBAQEAQYJCQkJCQkJCQgIBQUAAAAHBwUAAAQJCQkJCQkJCQQEAwMAAgIGBgYGCAgJCQkJCQkJCQgIAQEABgYGBgYGBAQJCQkJCQkJCQICAwMAAwMEBAcHBwkJCQkJCQkJCQUFBQcBAQMDAwgJCQkJCQkJCQkJCQkBAgICAAYGBgQJCQkJCQkJCQkJCQkDBwcCAAgIBAQJCQkJCQkJCQkJCQkFBQUHAAcHBwUJCQkJCQkJCQkJCQkGBgICAAUFBQYJCQkJCQkJCQkJCQkHBwAAAAQEBAIJCQkJCQkJCQkJCQkGBgUFAAcHAAAJCQkJCQkJCQkJCQkEBAQEAAgICAQJCQkJCQkJCQkJCQkEBAAAAAcHBwMJCQkJCQkJCQkJCQkDAwMDAAgIBQUJCQkJCQkJCQkJCQkAAAYDAAcHBgYJCQkJCQkJCQkJCQkAAAgIAAcHBgYJCQkJCQkJCQkJCQkGBgYBAAgICAAJCQkJCQkJCQkJCQkEBAQEAAYGAQEJCQkJCQkJCQkJCQkICAYGAAUFBQIJCQkJCQkJCQkJCQkHBwICAAUFBQUJCQkJCQkJCQkJCQkICAgDAAMDBAQJCQkJCQkJCQkJCQkFBQUFAAcHBgYJCQkJCQkJCQkJCQkBAQEFAAUFBQUJCQkJCQkJCQkJCQkGBgAAAAUFAgIJCQkJCQkJCQkJCQkAAAAAAAMDAwYJCQkJCQkJCQkJCQkEBAQCAAMDAwMJCQkJCQkJCQkJCQkHBwgIAAgICAUJCQkJCQkJCQkJCQkCAgIBAAMDAwYJCQkJCQkJCQkJCQkDAwEBAA'
          //--節奏出牌測試資料-auto-1階
          //'AQUHBwcJCQkHBQUFCAMKBgYDCggIAAA',
          //'AQQEAAAHBwYGBgYGBgkBAQEDAwMBAAA'
          //--直接NG-FG
          //'AQMDCgUDCgQECgQEBQEBBAQICAAAAAgGBgQEBAQDAwcHAwMICAUFBAQEBQAEBAQDAAAFBQgIBQUFBQQEAAAEBAAAAAAACAAABAgICAAJBwcHBAQDAwEDAAAAAAAABwcAAAYGCQkJCQMDBgYACAgGBgYGAAAGBAQECQkJCQcHBwcAAgICAgMDBgIEBAQCCQkJCQcHBwcABAQAAAYEBAEDBAQGCQkJCQYGBgUACAgICAAACAgDCAgHCQkJCQcHAwMA'
          //--0204-測試
          //--整軸上面會少一個圖示
          //'AwYGBwcEBAkJBAQECQQEBQUDAwQEAgIBAgIACgkJCQkJCQkJCAcHAwcHBwcACAgIBwkJCQkJCQkJBQUABAUFBQUACAUFAwMDAwgIBgYGBwUFBgYAAAAIAAEBAQUDAwUFCAgIBwcHBQUDAwMFAAMDBAQBBAQICQAAAAUFBQUDAwICAQIHBwYGAQEHBwkJCQkEBAQDBAQEBgAICAUFCAgGBgkJCQkFBQYGBAQDAwAGBgYIBAYGCAkJCQkCAgMDAwMDCAAICAgFAwUFBAkJCQkDAwcHAQEBBAAAAAQEBAQAAAkJCQkHBwMDBQUFAAA',
          //--旋轉中會變成黑的
          //'AQQECgMECgYGCggFBQcKBAQDAwMDAAwICAgIBwcHCAQEBAMHBwkJBAQDAwEDAgIFBQQEBAQICAgICQkJCQcHAwMABwgIAgAAAAIGCQkJCQkJCQcHBwcBAgYGBgYEBAQJCQkJCQkJCQkICAMDAQEBAQEBCQkJCQkJCQkJCQkJBAQICAABAQEBCQkJCQkJCQkJCQkJAgIICAAFAwMICQkJCQkJCQkJCQkJBQUHBwAICAgGCQkJCQkJCQkJCQkJBgYICAAGBgcHCQkJCQkJCQkJCQkJCAICAwAEBAQFCQkJCQkJCQkJCQkJBgYGBgAFBQYGCQkJCQkJCQkJCQkJBgYDAwAGBgUFCQkJCQkJCQkJCQkJAgICCAA'
          //--NG-RS-FG
          //'BAYGCgcJCQQEBQoHBwkJBAQFBQUFAgEDBAQEBAkJCQkGCgMDCQkJCQgIBwcABgYBAQkJCQkGCQkJCQkJCQUFAwMBAgQEBAQJCQkJCQkJCQkJCQkGBggIAAwFBQgICAgFBQYGBgYDAwQEBQUEBAAGBgYGBwcHCAgICQkAAAAAAQEICAECAQEBAQcHCQkJCQkJCAgIBAgIBwcBAQgICAgJCQkJCQkJCQICAgUECAgHAAQEBgYJCQkJCQkJCQcHAAAICAYGAAgIBwcJCQkJCQkJCQgIBgYHBwcGAAEBCAgJCQkJCQkJCQAABQcHBwcHAAYGBgYJCQkJCQkJCQYGBggDAwEBAAgIAgIJCQkJCQkJCQgICQkICAgIAQMICAgICQkJCQkJCQkJCQkJAwMGBgAFBQUACQkJCQkJCQkJCQkJAwMDBwAGBgUFCQkJCQkJCQkJCQkJBQUFBQA'
          ];
          this._testIndex++;

          if (this._testIndex > testBase64Data.length - 1) {
            this._testIndex = 0;
          }

          this.resetRoundData();
          const itemBase64 = testBase64Data[this._testIndex];
          const aryBuffer = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).base64ToBinaryBuffer(itemBase64);
          (_this$_currentSlotInf5 = this._currentSlotInfo) == null || _this$_currentSlotInf5.setNewRoundData(aryBuffer, 1000); //-this._currentSlotInfo.setNewRoundData(item, 100);
        } //=====test code end=====


        testHideIcon() {
          this._gameViewManager.testHideIcon(0, 1);
        }

        testAddSymbol() {
          this._gameViewManager.testAddSymbol(0, 1);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=77db0c1c0d3afbc24b0da6fa3e353b3be34f730e.js.map