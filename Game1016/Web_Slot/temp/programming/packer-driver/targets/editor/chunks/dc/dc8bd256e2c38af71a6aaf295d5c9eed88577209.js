System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioSource, BasicSlotGameViewManager, GameState, PrefabAdapter, BasicGameGlobalData, GameGlobalKeys, TransitionsState, AnimationControllersPoolManager, ShowAniProcessController1016, BasicGameModeManager, AniBuilderMediator, GameUtilsTools, NotifyCation, GameViewEvents, NotifySubject, ShowContainerWithResizeManager, BasicGameStepDelayTime, GenericUIManager, GameTimeScale, NewFlashModeEnum, AudioManager, SOUND_TYPE, ProcessSlotSymbolAniData1016, SymbolAniMediatorHooks1016, DirtyCrossSysServiceFacade, DirtyHandoffManager, ProcessDataAfterServer1016, DefinitionGameConfigData, NG_UI_Display, RespinBoardController, FGBoardUI1016, GLOBAL_DATA_WRITE_KEY, GlobalAccessWriter, FG_UI_Display, GameStepDelayTimeList1016_List, GameBGSoundCtrl1016, SpeedTimeMode, SoundList, AudioSourceList, RoundDataRecord1016, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, FLATTEN_REEL_ID, SCATTER_LIST, WILD_LIST, DEBUG_TITLE, DEBUG_TITLE_TIME_BASE, ROUND_STEP_CONDITION_KEY, ccclass, property, GameViewManager1016;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasicSlotGameViewManager(extras) {
    _reporterNs.report("BasicSlotGameViewManager", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicProcessSlotData(extras) {
    _reporterNs.report("BasicProcessSlotData", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProcessSlotData(extras) {
    _reporterNs.report("IProcessSlotData", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabAdapter(extras) {
    _reporterNs.report("PrefabAdapter", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicGameGlobalData(extras) {
    _reporterNs.report("BasicGameGlobalData", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameGlobalData(extras) {
    _reporterNs.report("GameGlobalData", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameGlobalKeys(extras) {
    _reporterNs.report("GameGlobalKeys", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTransitionsState(extras) {
    _reporterNs.report("TransitionsState", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationControllersPoolManager(extras) {
    _reporterNs.report("AnimationControllersPoolManager", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowAniProcessController(extras) {
    _reporterNs.report("ShowAniProcessController1016", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicGameModeManager(extras) {
    _reporterNs.report("BasicGameModeManager", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinScoreData(extras) {
    _reporterNs.report("WinScoreData", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayAniData(extras) {
    _reporterNs.report("IPlayAniData", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniBuilderMediator(extras) {
    _reporterNs.report("AniBuilderMediator", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISymbolAniKey(extras) {
    _reporterNs.report("ISymbolAniKey", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProcessInput(extras) {
    _reporterNs.report("IProcessInput", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniSlotMachine(extras) {
    _reporterNs.report("UniSlotMachine1016", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtilsTools(extras) {
    _reporterNs.report("GameUtilsTools", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifyCation(extras) {
    _reporterNs.report("NotifyCation", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewEvents(extras) {
    _reporterNs.report("GameViewEvents", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifySubject(extras) {
    _reporterNs.report("NotifySubject", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchWildGroupResult(extras) {
    _reporterNs.report("IMatchWildGroupResult", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowContainerWithResizeManager(extras) {
    _reporterNs.report("ShowContainerWithResizeManager", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicGameStepDelayTime(extras) {
    _reporterNs.report("BasicGameStepDelayTime", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUIManager(extras) {
    _reporterNs.report("GenericUIManager", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTimeScale(extras) {
    _reporterNs.report("GameTimeScale", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
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

  function _reportPossibleCrUseOfProcessSlotSymbolAniData(extras) {
    _reporterNs.report("ProcessSlotSymbolAniData1016", "../../Script/AniMediator1016/ProcessSlotSymbolAniData1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolAniMediatorHooks(extras) {
    _reporterNs.report("SymbolAniMediatorHooks1016", "../../Script/AniMediator1016/SymbolAniMediatorHooks1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDirtyCrossSysServiceFacade(extras) {
    _reporterNs.report("DirtyCrossSysServiceFacade", "../../Script/AniMediator1016/CrossSystemFun/DirtyCrossSysServiceFacade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDirtyHandoffManager(extras) {
    _reporterNs.report("DirtyHandoffManager", "../../Script/AniMediator1016/CrossSystemFun/DirtyHandoffManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFunctionOwnerAgent(extras) {
    _reporterNs.report("IFunctionOwnerAgent", "../AniMediator1016/CrossSystemFun/IFunctionOwnerAgent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProcessDataAfterServer(extras) {
    _reporterNs.report("ProcessDataAfterServer1016", "../ProcessDataAfterServer1016/ProcessDataAfterServer1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDefinitionGameConfigData(extras) {
    _reporterNs.report("DefinitionGameConfigData", "../DefinitionGameData1016/GameConfigInstance", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNG_UI_Display(extras) {
    _reporterNs.report("NG_UI_Display", "../GameDisplay1016/UI/NG/NG_UI_Display", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIStateCondition(extras) {
    _reporterNs.report("IStateCondition", "../DefinitionGameData1016/GameConfigInstance", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRespinBoardController(extras) {
    _reporterNs.report("RespinBoardController", "../GameDisplay1016/RespinBoardController/RespinBoardController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFGBoardUI(extras) {
    _reporterNs.report("FGBoardUI1016", "../GameDisplay1016/FGBoardUI1016/FGBoardUI1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGLOBAL_DATA_WRITE_KEY(extras) {
    _reporterNs.report("GLOBAL_DATA_WRITE_KEY", "../MyUtils/BasicGlobalDataState/GlobalDataWriteKey", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalAccessWriter(extras) {
    _reporterNs.report("GlobalAccessWriter", "../DefinitionGameData1016/AccessDefs/GlobalAccessWriter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFG_UI_Display(extras) {
    _reporterNs.report("FG_UI_Display", "../GameDisplay1016/UI/FG/FG_UI_Display", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIBasicGUI(extras) {
    _reporterNs.report("IBasicGUI", "../GameDisplay1016/UI/IBasicGUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIBkgDisplay(extras) {
    _reporterNs.report("IBkgDisplay", "../GameDisplay1016/UI/IBkgDisplay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStepDelayTimeList1016_List(extras) {
    _reporterNs.report("GameStepDelayTimeList1016_List", "../DefinitionGameData1016/GameStepDelayTimeList1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameBGSoundCtrl(extras) {
    _reporterNs.report("GameBGSoundCtrl1016", "../GameBGSoundCtrl1016/GameBGSoundCtrl1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpeedTimeMode(extras) {
    _reporterNs.report("SpeedTimeMode", "../MyUtils/BasicStepDelayTimeList/BasicGameStepDelayTime", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../DefinitionGameData1016/SoundList1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioSourceList(extras) {
    _reporterNs.report("AudioSourceList", "../DefinitionGameData1016/SoundList1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoundDataRecord(extras) {
    _reporterNs.report("RoundDataRecord1016", "../DefinitionGameData1016/IRoundDataRecord1016", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      BasicSlotGameViewManager = _unresolved_2.BasicSlotGameViewManager;
      GameState = _unresolved_2.GameState;
      PrefabAdapter = _unresolved_2.PrefabAdapter;
      BasicGameGlobalData = _unresolved_2.BasicGameGlobalData;
      GameGlobalKeys = _unresolved_2.GameGlobalKeys;
      TransitionsState = _unresolved_2.TransitionsState;
      AnimationControllersPoolManager = _unresolved_2.AnimationControllersPoolManager;
      ShowAniProcessController1016 = _unresolved_2.ShowAniProcessController1016;
      BasicGameModeManager = _unresolved_2.BasicGameModeManager;
      AniBuilderMediator = _unresolved_2.AniBuilderMediator;
      GameUtilsTools = _unresolved_2.GameUtilsTools;
      NotifyCation = _unresolved_2.NotifyCation;
      GameViewEvents = _unresolved_2.GameViewEvents;
      NotifySubject = _unresolved_2.NotifySubject;
      ShowContainerWithResizeManager = _unresolved_2.ShowContainerWithResizeManager;
      BasicGameStepDelayTime = _unresolved_2.BasicGameStepDelayTime;
      GenericUIManager = _unresolved_2.GenericUIManager;
    }, function (_unresolved_3) {
      GameTimeScale = _unresolved_3.GameTimeScale;
      NewFlashModeEnum = _unresolved_3.NewFlashModeEnum;
      AudioManager = _unresolved_3.AudioManager;
      SOUND_TYPE = _unresolved_3.SOUND_TYPE;
    }, function (_unresolved_4) {
      ProcessSlotSymbolAniData1016 = _unresolved_4.ProcessSlotSymbolAniData1016;
    }, function (_unresolved_5) {
      SymbolAniMediatorHooks1016 = _unresolved_5.SymbolAniMediatorHooks1016;
    }, function (_unresolved_6) {
      DirtyCrossSysServiceFacade = _unresolved_6.DirtyCrossSysServiceFacade;
    }, function (_unresolved_7) {
      DirtyHandoffManager = _unresolved_7.DirtyHandoffManager;
    }, function (_unresolved_8) {
      ProcessDataAfterServer1016 = _unresolved_8.ProcessDataAfterServer1016;
    }, function (_unresolved_9) {
      DefinitionGameConfigData = _unresolved_9.DefinitionGameConfigData;
    }, function (_unresolved_10) {
      NG_UI_Display = _unresolved_10.NG_UI_Display;
    }, function (_unresolved_11) {
      RespinBoardController = _unresolved_11.RespinBoardController;
    }, function (_unresolved_12) {
      FGBoardUI1016 = _unresolved_12.FGBoardUI1016;
    }, function (_unresolved_13) {
      GLOBAL_DATA_WRITE_KEY = _unresolved_13.GLOBAL_DATA_WRITE_KEY;
    }, function (_unresolved_14) {
      GlobalAccessWriter = _unresolved_14.GlobalAccessWriter;
    }, function (_unresolved_15) {
      FG_UI_Display = _unresolved_15.FG_UI_Display;
    }, function (_unresolved_16) {
      GameStepDelayTimeList1016_List = _unresolved_16.GameStepDelayTimeList1016_List;
    }, function (_unresolved_17) {
      GameBGSoundCtrl1016 = _unresolved_17.GameBGSoundCtrl1016;
    }, function (_unresolved_18) {
      SpeedTimeMode = _unresolved_18.SpeedTimeMode;
    }, function (_unresolved_19) {
      SoundList = _unresolved_19.SoundList;
      AudioSourceList = _unresolved_19.AudioSourceList;
    }, function (_unresolved_20) {
      RoundDataRecord1016 = _unresolved_20.RoundDataRecord1016;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "87171OO0U1AEYVwMhrwwCfa", "GameViewManager1016", undefined);

      __checkObsolete__(['_decorator', 'AudioSource', 'Game', 'Node', 'Vec3']); //--讀寫金鑰-只能讓gamemanager用


      ({
        FLATTEN_REEL_ID,
        SCATTER_LIST,
        WILD_LIST
      } = _crd && DefinitionGameConfigData === void 0 ? (_reportPossibleCrUseOfDefinitionGameConfigData({
        error: Error()
      }), DefinitionGameConfigData) : DefinitionGameConfigData);
      DEBUG_TITLE = 'GameViewManager1016';
      DEBUG_TITLE_TIME_BASE = 'GameViewManager1016_TimeBase';
      ROUND_STEP_CONDITION_KEY = {
        //NO_WIN: 'no_win',
        WIN: 'win',
        WILD_MOVE: 'wild_move',
        JP: 'jp'
      };
      ({
        ccclass,
        property
      } = _decorator);

      _export("GameViewManager1016", GameViewManager1016 = (_dec = ccclass('GameViewManager1016'), _dec2 = property({
        type: _crd && PrefabAdapter === void 0 ? (_reportPossibleCrUseOfPrefabAdapter({
          error: Error()
        }), PrefabAdapter) : PrefabAdapter,
        visible: true,
        displayName: 'PrefabAdapter',
        tooltip: '將要在objPool運作的prefab掛入'
      }), _dec3 = property({
        type: _crd && ShowAniProcessController1016 === void 0 ? (_reportPossibleCrUseOfShowAniProcessController({
          error: Error()
        }), ShowAniProcessController1016) : ShowAniProcessController1016,
        visible: true,
        displayName: 'ShowAniProcessController1016',
        tooltip: '秀動畫流程控制器'
      }), _dec4 = property({
        type: _crd && ShowContainerWithResizeManager === void 0 ? (_reportPossibleCrUseOfShowContainerWithResizeManager({
          error: Error()
        }), ShowContainerWithResizeManager) : ShowContainerWithResizeManager,
        visible: true,
        displayName: 'ShowContainerWithResizeManager',
        tooltip: '管理面板顯示模式'
      }), _dec5 = property({
        type: _crd && NG_UI_Display === void 0 ? (_reportPossibleCrUseOfNG_UI_Display({
          error: Error()
        }), NG_UI_Display) : NG_UI_Display,
        visible: true,
        displayName: 'NG_UI_Display',
        tooltip: 'NG的GUI面板'
      }), _dec6 = property({
        type: _crd && FG_UI_Display === void 0 ? (_reportPossibleCrUseOfFG_UI_Display({
          error: Error()
        }), FG_UI_Display) : FG_UI_Display,
        visible: true,
        displayName: 'FG_UI_Display',
        tooltip: 'FG的GUI面板'
      }), _dec7 = property({
        type: _crd && RespinBoardController === void 0 ? (_reportPossibleCrUseOfRespinBoardController({
          error: Error()
        }), RespinBoardController) : RespinBoardController,
        visible: true,
        displayName: 'ReSpinBoardController',
        tooltip: 'ReSpin獲得GUI面板'
      }), _dec8 = property({
        type: _crd && FGBoardUI1016 === void 0 ? (_reportPossibleCrUseOfFGBoardUI({
          error: Error()
        }), FGBoardUI1016) : FGBoardUI1016,
        visible: true,
        displayName: 'FGBoardUI1016',
        tooltip: 'FG結算/次數面板'
      }), _dec9 = property({
        type: AudioSource,
        visible: true,
        displayName: 'NGBgMusicSource',
        tooltip: 'NG背景音樂AudioSource'
      }), _dec(_class = (_class2 = class GameViewManager1016 extends (_crd && BasicSlotGameViewManager === void 0 ? (_reportPossibleCrUseOfBasicSlotGameViewManager({
        error: Error()
      }), BasicSlotGameViewManager) : BasicSlotGameViewManager) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_prefabAdapter", _descriptor, this);

          _initializerDefineProperty(this, "_basicShowAniProcess", _descriptor2, this);

          _initializerDefineProperty(this, "_showContainerManager", _descriptor3, this);

          _initializerDefineProperty(this, "_ngUI", _descriptor4, this);

          _initializerDefineProperty(this, "_fgUI", _descriptor5, this);

          _initializerDefineProperty(this, "_reSpinBoard", _descriptor6, this);

          _initializerDefineProperty(this, "_fgUIBoard", _descriptor7, this);

          _initializerDefineProperty(this, "_ngBgMusicSource", _descriptor8, this);

          //--symbol builder-IProcessInput
          this._builderMediator = null;
          //--change symbol owner-
          this._handoffManager = null;
          //--跨系統動畫服務
          // _crossAniServiceFacade 的泛型要完整傳入
          // CrossSystemAniServiceFacade<T, N, Key, P, K, I, OwnerAgent, HandoffManager>
          // T: IProcessInput (這裡用 I 代替)
          // N: Node
          // Key: string
          // P: IPlayAniData
          // K: ISymbolAniKey
          // OwnerAgent: OwnerAgent
          // HandoffManager: DirtyHandoffManager<I, OwnerAgent>
          this._crossAniServiceFacade = null;
          this._isNewRound = false;
          //---每次都要重置這個,因為每次都會有新的round資料
          this._waitTask = new Map();
          this._waitScatterTask = new Map();
          this._waitReelBounceTask = new Map();
          //--20251022新增存reel bounce任務
          this._flashToSpeedMap = void 0;
          this._roundStepMapCondition = void 0;
          //--20251021for局間停頓條件判斷
          this._gameBGSoundCtrl1016 = void 0;
          this._currentFGAndRSRecord1016 = new (_crd && RoundDataRecord1016 === void 0 ? (_reportPossibleCrUseOfRoundDataRecord({
            error: Error()
          }), RoundDataRecord1016) : RoundDataRecord1016)();

          //---slot callback(單軸停止)
          this._oneReelRollEndCallBackFromSlot = async reelID => {
            //--20250915 修改:企劃要求Scatter要直接隨著轉輪落下
            const stopMode = (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
              error: Error()
            }), GlobalAccessWriter) : GlobalAccessWriter).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).TurboMode);

            if (!this._slotMachine.isFastStopClick && stopMode == (_crd && NewFlashModeEnum === void 0 ? (_reportPossibleCrUseOfNewFlashModeEnum({
              error: Error()
            }), NewFlashModeEnum) : NewFlashModeEnum).None) {
              //--鎖定狀態下就不播放SpinStop音效
              if (!this._slotMachine.getSingleReelIsFirstRoundLock(reelID)) {
                (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                  error: Error()
                }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                  error: Error()
                }), SoundList) : SoundList).SpinStop, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
                  error: Error()
                }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                  error: Error()
                }), AudioSourceList) : AudioSourceList).BtnAS);
              }
            }

            const checkWildCondition = this._processedServerData.getReelWildData(reelID);

            if (checkWildCondition != null) {
              //--回傳有資料的狀態就是代表這軸匹配wild(showWildAnimation---appear)
              const promiseTask = this._slotMachine.playWildAppearAnimation(reelID).catch(e => console.warn('scatter err', reelID, e));

              this._waitTask.set(reelID, promiseTask); //--存playWildAppearAnimation的任務

            }
            /**
             * 20250919--scatter的呈現要在wild之上,但是在RS或是FG模式中,wild整軸會被拉到表演layer
             * 所以在SlotMachine裡面變換reel的layer index沒有意義了
             * TIPS:直接將scatter拉到表演layer處理
             */


            const checkScatterInReel = this._processedServerData.getReelScatterData(reelID);

            if (checkScatterInReel) {
              const goReel = reelID; //-_waitScatterTask

              const promiseScatterTask = this._slotMachine.forceToHandoffSingleScatter(goReel).catch(e => console.warn('scatter err', goReel, e));

              this._waitScatterTask.set(goReel, promiseScatterTask); //--存scatterAppearAnimation的任務

            } //--20251022新增reel bounce任務存取


            const bouncePromise = this._slotMachine.getEndBouncePromise(reelID);

            if (bouncePromise) {
              this._waitReelBounceTask.set(reelID, bouncePromise);
            } //GameUtilsTools.debugLog(DEBUG_TITLE, 'oneReelRollEndCallBackFromSlot', { reelID }, 'log');

          };

          //============================== 表演流程控制 =============================
          //============================== 需要用到的tool============================
          //============================== testMode 狀態 =========================
          //---for testMode--
          this.evtBackTest = sub => {
            //console.log('Test mode event received:', sub);
            this.runTest();
          };
        }

        //private _timeBaseTest: number = 0;

        /**在初始化之前執行的邏輯 */
        beforeInit() {// Implement specific logic for GameViewManager1016
        }
        /** 初始化遊戲流程管理器*/


        init() {
          // Implement specific logic for GameViewManager1016
          //-做其他你要在註冊系統之前做的事情
          super.init();
          this._flashToSpeedMap = {
            [(_crd && NewFlashModeEnum === void 0 ? (_reportPossibleCrUseOfNewFlashModeEnum({
              error: Error()
            }), NewFlashModeEnum) : NewFlashModeEnum).None]: (_crd && SpeedTimeMode === void 0 ? (_reportPossibleCrUseOfSpeedTimeMode({
              error: Error()
            }), SpeedTimeMode) : SpeedTimeMode).NORMAL,
            [(_crd && NewFlashModeEnum === void 0 ? (_reportPossibleCrUseOfNewFlashModeEnum({
              error: Error()
            }), NewFlashModeEnum) : NewFlashModeEnum).NewFlash1]: (_crd && SpeedTimeMode === void 0 ? (_reportPossibleCrUseOfSpeedTimeMode({
              error: Error()
            }), SpeedTimeMode) : SpeedTimeMode).Lv1,
            [(_crd && NewFlashModeEnum === void 0 ? (_reportPossibleCrUseOfNewFlashModeEnum({
              error: Error()
            }), NewFlashModeEnum) : NewFlashModeEnum).NewFlash2]: (_crd && SpeedTimeMode === void 0 ? (_reportPossibleCrUseOfSpeedTimeMode({
              error: Error()
            }), SpeedTimeMode) : SpeedTimeMode).Lv2
          }; //--條件檢查換出局間停頓時間用的map

          this._roundStepMapCondition = new Map([[ROUND_STEP_CONDITION_KEY.WIN, false], [ROUND_STEP_CONDITION_KEY.WILD_MOVE, false], [ROUND_STEP_CONDITION_KEY.JP, false]]);
          const processor = new (_crd && ProcessSlotSymbolAniData1016 === void 0 ? (_reportPossibleCrUseOfProcessSlotSymbolAniData({
            error: Error()
          }), ProcessSlotSymbolAniData1016) : ProcessSlotSymbolAniData1016)();
          const hooks = new (_crd && SymbolAniMediatorHooks1016 === void 0 ? (_reportPossibleCrUseOfSymbolAniMediatorHooks({
            error: Error()
          }), SymbolAniMediatorHooks1016) : SymbolAniMediatorHooks1016)();
          this._builderMediator = new (_crd && AniBuilderMediator === void 0 ? (_reportPossibleCrUseOfAniBuilderMediator({
            error: Error()
          }), AniBuilderMediator) : AniBuilderMediator)(processor, (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
            error: Error()
          }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance(), hooks);
          this._handoffManager = new (_crd && DirtyHandoffManager === void 0 ? (_reportPossibleCrUseOfDirtyHandoffManager({
            error: Error()
          }), DirtyHandoffManager) : DirtyHandoffManager)();
          this._crossAniServiceFacade = new (_crd && DirtyCrossSysServiceFacade === void 0 ? (_reportPossibleCrUseOfDirtyCrossSysServiceFacade({
            error: Error()
          }), DirtyCrossSysServiceFacade) : DirtyCrossSysServiceFacade)(this._builderMediator, this._handoffManager);

          this._slotMachine.init(); //--server資料查找庫


          this._processedServerData = new (_crd && ProcessDataAfterServer1016 === void 0 ? (_reportPossibleCrUseOfProcessDataAfterServer({
            error: Error()
          }), ProcessDataAfterServer1016) : ProcessDataAfterServer1016)(); //--遊戲狀態管理

          this._gameModeManager = new (_crd && BasicGameModeManager === void 0 ? (_reportPossibleCrUseOfBasicGameModeManager({
            error: Error()
          }), BasicGameModeManager) : BasicGameModeManager)(); //--動畫控制器管理

          this._basicShowAniProcess.init(); //--動畫物件池管理


          (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
            error: Error()
          }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().init(); //--背景音樂控制器

          this._gameBGSoundCtrl1016 = new (_crd && GameBGSoundCtrl1016 === void 0 ? (_reportPossibleCrUseOfGameBGSoundCtrl({
            error: Error()
          }), GameBGSoundCtrl1016) : GameBGSoundCtrl1016)();
          this._gameBGSoundCtrl1016.musicAudioSource = this._ngBgMusicSource;
        }

        registerSystem() {
          // Implement specific logic for GameViewManager1016
          super.registerSystem();

          if (this._prefabAdapter) {
            (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
              error: Error()
            }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().setPrefabForPropertyList(this._prefabAdapter.prefabForPropertyList);
          } //--要在這邊注入mediator(因為slotMachine/_basicShowAniProcess是走property進來的,引擎自己幫我建構了)


          this._basicShowAniProcess.registerService(this._crossAniServiceFacade);

          this._slotMachine.registerService(this._crossAniServiceFacade);

          this._slotMachine.aryReelAmountIds = [0, 1, 2, 3, 4];
          this._slotMachine.oneReelRollEndCallBack = this._oneReelRollEndCallBackFromSlot;

          this._slotMachine.registerStartRollCallBack(); //--註冊狀態管理
          //this._gameModeManager....要在改過..這樣大家都可以讀寫不太對

          /*
          BasicGameGlobalData.getInstance<GameGlobalData>().setGlobalData(
              GameGlobalKeys.GameState, GameState.NORMAL
          );*/


          const gameStepDelayTime = new (_crd && BasicGameStepDelayTime === void 0 ? (_reportPossibleCrUseOfBasicGameStepDelayTime({
            error: Error()
          }), BasicGameStepDelayTime) : BasicGameStepDelayTime)(_crd && GameStepDelayTimeList1016_List === void 0 ? (_reportPossibleCrUseOfGameStepDelayTimeList1016_List({
            error: Error()
          }), GameStepDelayTimeList1016_List) : GameStepDelayTimeList1016_List);
          const globalDataStore = (_crd && BasicGameGlobalData === void 0 ? (_reportPossibleCrUseOfBasicGameGlobalData({
            error: Error()
          }), BasicGameGlobalData) : BasicGameGlobalData).getInstance();
          globalDataStore.init({
            GameState: (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).BEGIN,
            //--遊戲狀態
            TransitionsState: (_crd && TransitionsState === void 0 ? (_reportPossibleCrUseOfTransitionsState({
              error: Error()
            }), TransitionsState) : TransitionsState).NONE,
            //--遊戲轉場狀態
            DelayTimeList: gameStepDelayTime,
            //--遊戲延遲時間列表
            GameTimeScale: (_crd && GameTimeScale === void 0 ? (_reportPossibleCrUseOfGameTimeScale({
              error: Error()
            }), GameTimeScale) : GameTimeScale).timeScale,
            //--遊戲時間縮放控制(2階加速使用)-目前廢棄,但保留framerate的控制
            TurboMode: (_crd && NewFlashModeEnum === void 0 ? (_reportPossibleCrUseOfNewFlashModeEnum({
              error: Error()
            }), NewFlashModeEnum) : NewFlashModeEnum).None,
            //--遊戲加速模式(2階加速使用)
            InterruptProcess: false,
            //--是否中斷流程
            RoundTotalOdds: 0,
            //--本局總倍數
            CurrentRoundSpeed: (_crd && NewFlashModeEnum === void 0 ? (_reportPossibleCrUseOfNewFlashModeEnum({
              error: Error()
            }), NewFlashModeEnum) : NewFlashModeEnum).None,
            //--該回合的遊戲速度設定
            CurrentFGAndRSRecord: this._currentFGAndRSRecord1016.fgCount //--目前只會紀錄FG count data

          });
          const globalDataWriter = globalDataStore.createWriter(_crd && GLOBAL_DATA_WRITE_KEY === void 0 ? (_reportPossibleCrUseOfGLOBAL_DATA_WRITE_KEY({
            error: Error()
          }), GLOBAL_DATA_WRITE_KEY) : GLOBAL_DATA_WRITE_KEY);
          (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).register(globalDataStore, globalDataWriter);
          (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).setGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).GameState, (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL);

          this._basicShowAniProcess.register(); //--註冊遊戲收發狀態改變接收者...


          this._gameModeManager.addGameMode(this._basicShowAniProcess);

          this._gameModeManager.addGameMode(this._showContainerManager);

          this._gameModeManager.addGameMode(this._gameBGSoundCtrl1016); //--你娘的哩----幹----


          this._basicShowAniProcess.bgmCtrl = this._gameBGSoundCtrl1016; //--你娘的哩----幹----
          //--<寫入遊戲步驟延遲時間列表(單位-秒)>--

          this._gameStepDelayTimeList = (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList); //---for testMode---

          (_crd && NotifyCation === void 0 ? (_reportPossibleCrUseOfNotifyCation({
            error: Error()
          }), NotifyCation) : NotifyCation).getInstance().on((_crd && NotifySubject === void 0 ? (_reportPossibleCrUseOfNotifySubject({
            error: Error()
          }), NotifySubject) : NotifySubject).GAME_ANI_PROCESS_SUBJECT, (_crd && GameViewEvents === void 0 ? (_reportPossibleCrUseOfGameViewEvents({
            error: Error()
          }), GameViewEvents) : GameViewEvents).RUN_TEST_MODE, this.evtBackTest, this);

          this._showContainerManager.afterRegister();

          this._gameModeManager.changeAllGameState((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL);
        } //============================== 加速timeScale狀態 ==============================
        //--20251016這邊已經不需要直接修改gameEngine的timeScale


        setGameTimeScale() {
          (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).setGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).GameTimeScale, (_crd && GameTimeScale === void 0 ? (_reportPossibleCrUseOfGameTimeScale({
            error: Error()
          }), GameTimeScale) : GameTimeScale).timeScale);
          const basicGameStepDelayTime = (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList);

          if (basicGameStepDelayTime) {
            //basicGameStepDelayTime.deltaTime = GameTimeScale.timeScale;
            basicGameStepDelayTime.deltaTime = 1; //--目前先固定1(引擎的加速度目前不引入,維持1)
          }
        }

        setTwoLevelTurboMode(turboMode) {
          (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).setGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).TurboMode, turboMode); //---二階段加速啟用20251120

          const speedMode = this._flashToSpeedMap[turboMode]; //--動態映射,將加速模式轉成SpeedTimeMode

          if (speedMode != null) {
            const basicGameStepDelayTime = (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
              error: Error()
            }), GlobalAccessWriter) : GlobalAccessWriter).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList);

            if (basicGameStepDelayTime) {
              basicGameStepDelayTime.currentTimeMode = speedMode;
            }
          } //const test = GlobalAccessWriter.getGlobalData(GameGlobalKeys.DelayTimeList).currentTimeMode;
          //GameUtilsTools.debugLog(DEBUG_TITLE, `[setTwoLevelTurboMode]`, { test });

        } //============================== 加速timeScale狀態 ==============================
        //============================== serverData控制 =========================

        /**寫入新的一round資料 */


        setServerReceiveData(serverData) {
          super.setServerReceiveData(serverData);
          this._isNewRound = true; //---每次都要重置這個,因為每次都會有新的round資料
        } //============================== slotMachine控制 =========================


        setStartAutoSpinMode(isAuto) {// Implement specific logic for GameViewManager1016
        }

        changeInterruptingStatus() {
          (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).setGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).InterruptProcess, this._isInterrupting); //GameUtilsTools.debugLog('TESTBTN', 'onStopBtnClickHandler', { isInterrupting: this._isInterrupting, });
        } //==============開始旋轉前處理=============

        /**
         * 開始旋轉前處理(清除相關資料)
         * step1:清除每一局使用的特殊資料
         * step2:如果是有購買FG的情況,關閉購買按鈕
         * step3:公用面板spin按鈕上鎖(變成stopSpin狀態)
         * step4:清理表演資料
         * step5:重置/清理slotMachine的狀態
         * step6:執行doStartSpin
         */


        async reSetDataForBeforeSpin(isTurboMode) {
          this._currentTurboSpeed = (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.isTurboOn; //--每次startSpin都要更新目前的加速狀態

          await this._basicShowAniProcess.cleanAllPlayingAniForNewStart(); //GameUtilsTools.debugLog('BasicShowAniProcess_debug', 'reSetDataForBeforeSpin', { isTurboMode });

          const currentData = this._processedServerData.getPrevData();

          if (currentData) {
            const cards = currentData.reelInfo.symbolData2ds;

            if (cards) {
              //--退場
              this._slotMachine.sortReelLayerIndex(cards, false);
            } //console.log('check_reSetDataForBeforeSpin_state:', cards);

          }

          this._basicShowAniProcess.resetRoundData();

          this._handoffManager.releaseAll(); //console.log('check_release_handoff_newRound', this._handoffManager.debugCheckAllOwners());
          //--上保險,在確保全新round開始前(server資料還沒回來時,清除掉全部的動畫資料)


          if (!this._isThisRound) {
            this._basicShowAniProcess.stopAndRemoveAllAnis();
          }
        }

        async testFunc() {
          const promises = [this._ngUI.openReSpinCountUI(), this._ngUI.openFGCountUI()];
          await Promise.all(promises);
        } //--接上slotMachine.startRoll


        doStartSpin() {
          super.doStartSpin();
          (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).setGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).InterruptProcess, this._isInterrupting); //this._timeBaseTest = Date.now();
          //--關閉/開啟整個盤面亮度(true=變暗/false=正常)

          this._slotMachine.setAllLight(false); //this._slotMachine.startRoll(turboSpeed, [0]);
          //console.log('====================doStartSpin================');


          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).Spin, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
            error: Error()
          }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).BtnAS);

          this._slotMachine.resetReelViewData(); //--為了做到RS第0軸聽牌效果,提前重置軸資料


          const currentState = (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).GameState);

          if (currentState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).RE_SPINE) {
            const readyHands = this._processedServerData.getReadyToHandForThisRound();

            if (readyHands.length > 0) {
              this._slotMachine.multiSetReadyHand(readyHands);
            }
          }

          const gameSpeed = (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).TurboMode); //--寫入該回合當下的速度值

          (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).setGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).CurrentRoundSpeed, gameSpeed);

          this._slotMachine.startRoll(this._currentTurboSpeed);
        } //--這邊的資料已經是抽出來的資料了


        beforeStopSpin() {
          //---在玩家按下stop之前要做的事
          //--開始設定readyHand
          //--這邊是要找fg的round資料...不是找wild
          //(<UniSlotMachine1016>this._slotMachine).multiSetReadyHand([2, 4]);
          //--放入聽牌軸資訊
          const currentState = this._processedServerData.getCurrentState();

          if (currentState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL) {
            const readyHands = this._processedServerData.getReadyToHandForThisRound();

            if (readyHands.length > 0) {
              this._slotMachine.multiSetReadyHand(readyHands);
            }
          } //---例如:擷取資料之類的算_currentWildCardData的資料
          //--跟_processedServerData.getCurrentData拿該round的資料
          //const currentRoundData: IProcessSlotData = this._processedServerData.getCurrentData();
          //const readyHands = this._processedServerData.getReadyToHandForThisRound();
          //const isHasNex = this._processedServerData.hasNext;
          //const nowStepIndex = this._processedServerData.getOrderInCurrentState();
          //console.log('check_ProcessDataStepInfo:' + currentState + '-<hasNex>-' + isHasNex + '-<index>-' + nowStepIndex);


          return null;
        } //--這裡會開始真的呼叫stopSpin(這邊的資料已經是抽出來的資料了)


        async doStopSpin(slotData, other) {
          if (!slotData) return;
          const wildCardData = slotData.reelInfo.wildGroup; //--20260127-要再算分開始運作前就要知道這把有無獲獎--莫名其妙

          this._basicShowAniProcess.preRoundOddsForAni = this._processedServerData.getRoundBetAndOdds().odds; //--從getCurrentData取該局資料
          //this._currentwildCardData = wildCardData; //--存要塞進去處理的特殊牌資料

          const cloneCards = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).deepClone(slotData.reelInfo.symbolData2ds);
          await this._slotMachine.stopRoll(cloneCards, wildCardData); //let currentTime = Date.now();
          //let testTime = currentTime - this._timeBaseTest;
          //GameUtilsTools.debugLog(DEBUG_TITLE_TIME_BASE, 'beforeAllReelRollEnd_Time', { testTime }, 'log');
        }

        /**
         * <全部停止後在表演前要處理的事情>
         * <例如:秀甚麼鬼東西或是特殊模式的開啟(再算分前)>
         * PROCESS:
         * 1.取位移資訊
         * 2.表演位移/無位移
         * @returns 
         */
        async beforeAllReelRollEnd() {
          //console.log('=======ALL_ROLLENDDDDDDDDDDDD=====');
          const stopMode = (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).TurboMode);

          if (this._slotMachine.isFastStopClick || stopMode != (_crd && NewFlashModeEnum === void 0 ? (_reportPossibleCrUseOfNewFlashModeEnum({
            error: Error()
          }), NewFlashModeEnum) : NewFlashModeEnum).None) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).SpinStop, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
              error: Error()
            }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
              error: Error()
            }), AudioSourceList) : AudioSourceList).BtnAS);
          } //--檢查是否有位移資料
          //-https://medium.com/@quiet_polished_toad_71/js-promise-all-vs-allsettled%E4%BD%A0%E7%9C%9F%E7%9A%84%E6%90%9E%E6%87%82%E4%BA%86%E5%97%8E-bb3ff4c83c3a
          //-https://medium.com/dean-lin/javascript-%E5%A6%82%E4%BD%95%E8%AE%93-await-%E5%87%BD%E5%BC%8F%E4%B8%A6%E8%A1%8C-%E5%BE%9E%E5%AF%A6%E9%9A%9B%E6%A1%88%E4%BE%8B%E4%BA%86%E8%A7%A3-promise-all-%E5%92%8C-promise-allsettled-%E7%9A%84%E5%8D%80%E5%88%A5-bea062893091
          //-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
          //--等待Wild appear動畫徹底完成


          if (this._waitTask.size > 0) {
            //--allSettled=我不管結果如何就算error也繼續往下走,promise.all遇到error會直接reject
            await Promise.allSettled(this._waitTask.values());

            this._waitTask.clear();
          } //--等待scatter動畫(appear)徹底完成


          if (this._waitScatterTask.size > 0) {
            await Promise.allSettled(this._waitScatterTask.values());

            this._waitScatterTask.clear();
          } //--等待reel bounce徹底完成


          if (this._waitReelBounceTask.size > 0) {
            await Promise.allSettled(this._waitReelBounceTask.values());

            this._waitReelBounceTask.clear();
          } //--一階段和二階段Scatter appear不會等待播完就會resolve


          this._basicShowAniProcess.hasScatterAppearInThisRound = false; //--重置scatterAppear狀態

          const nextGameState = this._processedServerData.getNextStepGameState();

          this._basicShowAniProcess.afterWholeReelStopIdleSpAni(nextGameState);

          this._slotMachine.playWildIdleAnimation();

          const needToMove = this._processedServerData.checkNeedToMovement();

          const moveData = this._processedServerData.getWildMovementData(); //--這邊要先算出有沒有wild需要演出的資料(位移or無位移)


          let movedLock = false;

          if (moveData.wildGroup) {
            movedLock = this._slotMachine.checkMovedReel(moveData.wildGroup);
          }

          if (needToMove || movedLock) {
            //-需要啟動wild表演
            const waitTimeForWild = this._gameStepDelayTimeList.get(cfg => {
              var _cfg$wild;

              return (_cfg$wild = cfg.wild) == null ? void 0 : _cfg$wild.beforeWait;
            }); //--設定有wild位移的條件;


            this._roundStepMapCondition.set(ROUND_STEP_CONDITION_KEY.WILD_MOVE, true); //const startWildWaitTime = GameUtilsTools.getTimeStamp();


            await this.addTweenDelay(waitTimeForWild); //const endWildWaitTime = GameUtilsTools.getTimeStamp();
            //GameUtilsTools.debugLog('WILD_TIME', 'wildBeforeWait_Time', { startWildWaitTime, endWildWaitTime, during: endWildWaitTime - startWildWaitTime }, 'log');

            this._isInterrupting = false;
            (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
              error: Error()
            }), GlobalAccessWriter) : GlobalAccessWriter).setGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).InterruptProcess, this._isInterrupting);
          }

          if (needToMove) {
            //--表演有位移的狀態
            await this.processWildMovement(moveData.wildMovement);
          } else if (movedLock) {
            //--20251031表演沒有位移的狀態<處理沒釘死的wild,因為會有包含條件下,需要剔除整軸狀態的wild>
            const filterData = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
              error: Error()
            }), GameUtilsTools) : GameUtilsTools).deepClone(moveData);
            filterData.wildGroup = filterData.wildGroup.filter(item => item.matchIndices.length < 4);
            await this.processWildNoMovement(filterData.wildGroup);
          }
        } //============================== slotMachine控制 =========================
        //============================== 下注與FG面板 =============================
        //---玩家下注金額改變時,更新下注金額


        setPlayerBetValue(betValue) {// Implement specific logic for GameViewManager1016
        } //============================== 下注與FG面板 =============================
        //============================== 表演流程控制 =============================


        async processWildMovement(moveData) {
          //console.log('check_wildMovementData:', moveData);
          //const delayTime = 0.2;
          //const delayTime = 0;
          const promises = [];

          for (let i = 0; i < moveData.length; i++) {
            const reelId = moveData[i];

            const task = async reelIndex => {
              const wildData = await this._slotMachine.processDataBeforeWildMovement(reelId);
              await this._basicShowAniProcess.triggerWildMoveAnimation(wildData);
              await this._slotMachine.reSetWildDataAfterMove(reelIndex); //--reWriteData 
            };

            promises.push(task(reelId));
          }

          const idsExclude = FLATTEN_REEL_ID.filter(id => !moveData.includes(id));
          await this.withReelDarkEffect(idsExclude, async () => {
            await Promise.all(promises);
          });
        } //--統一處理wild位移+開關燈


        async withReelDarkEffect(idsExclude, action) {
          const currentGameState = (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).GameState);

          const currentBGs = this._showContainerManager.getContainerListByState(currentGameState);

          const targetBgAni = currentBGs.find(it => it.isBkgAni === true); //-- Step 1: go dark

          await Promise.all([//(<UniSlotMachine1016>this._slotMachine).setReelsLightTween(idsExclude, true),
          this._slotMachine.setReelsLightTweenExcludeIds(idsExclude, true, WILD_LIST), this._basicShowAniProcess.changeAniCtrlColorBySymbolId(SCATTER_LIST[0], true)]);
          targetBgAni == null || targetBgAni.openDark(); //-- Step 2: wildMove

          await action(); //-- Step 3: goBack normal

          await Promise.all([this._slotMachine.setAllLightTween(false), this._basicShowAniProcess.changeAniCtrlColorBySymbolId(SCATTER_LIST[0], false)]);
          targetBgAni == null || targetBgAni.closeDark();
        }

        async processWildNoMovement(wildGroup) {
          // 處理沒有位移資料,要秀node transfer
          //企劃書要求是出現2個以上才秀(?)
          //--20251031-包含2個的狀況下也算
          //console.log('check_wildMovementData:', wildGroup);
          const promises = [];
          const includes = [];

          for (let i = 0; i < wildGroup.length; i++) {
            const reelId = wildGroup[i].reelIndex;

            const task = async reelIndex => {
              const wildData = await this._slotMachine.processDataBeforeWildNoMovement(reelId);
              await this._basicShowAniProcess.triggerWildNoMoveAnimation(wildData);
              const reel = wildData.movement.reelIndex;
              const index = wildData.movement.iconIndex;
              await this._slotMachine.reSetWildDataAfterWithoutMove(reel, index);
            };

            promises.push(task(reelId));
          }

          const idsExclude = FLATTEN_REEL_ID.filter(id => !includes.includes(id));
          await this.withReelDarkEffect(idsExclude, async () => {
            await Promise.all(promises);
          });
        }

        async processReSpineCount(reSpinData) {
          //--有還沒有抽出來加入aryRunning的情況所以要這樣拿
          //const aniCtrlForReel: IAnimationControl[] = (<UniSlotMachine1016>this._slotMachine).getExistingAniCtrl(reSpinData.reels);
          //const wildIndex = reSpinData.reels;
          const destinationWpos = this._ngUI.getReSpinCountWPos();

          const handoffWildData = await this._slotMachine.forceToHandoffWild(reSpinData.reels);
          await this._ngUI.openReSpinCountUI(); //--開播前的等待時間

          const turboMode = (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).TurboMode);

          if (turboMode != (_crd && NewFlashModeEnum === void 0 ? (_reportPossibleCrUseOfNewFlashModeEnum({
            error: Error()
          }), NewFlashModeEnum) : NewFlashModeEnum).NewFlash2) {
            const beforePlayShootAniDelay = this._gameStepDelayTimeList.get(cfg => {
              var _cfg$wild2;

              return (_cfg$wild2 = cfg.wild) == null ? void 0 : _cfg$wild2.others.beforeParticleWait;
            });

            if (beforePlayShootAniDelay > 0) {
              await this.addTweenDelay(beforePlayShootAniDelay);
            } //--播放特殊wild動畫+開噴粒子


            await this._basicShowAniProcess.showGetReSpinEffect({
              info: handoffWildData,
              endPos: destinationWpos,
              index: reSpinData.reels
            });
          }

          await this._ngUI.triggerReSpinCountUp(reSpinData.total);
        }

        async processScatterFGCount(fgData, usePreviousData) {
          //--會進來一定就是有
          const multiScatterReel = this._processedServerData.getScatterByMultiReel(fgData.reels, usePreviousData);

          let destinationWpos;

          const currentGameState = this._processedServerData.getCurrentState();

          const currentGUI = currentGameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME ? this._fgUI : this._ngUI; //--開播前的等待時間

          const beforePlayShootAniDelay = this._gameStepDelayTimeList.get(cfg => {
            var _cfg$wild3;

            return (_cfg$wild3 = cfg.wild) == null ? void 0 : _cfg$wild3.others.beforeParticleWait;
          });

          if (beforePlayShootAniDelay > 0) {
            await this.addTweenDelay(beforePlayShootAniDelay);
          }

          const turboMode = (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).TurboMode);

          if (multiScatterReel.length > 0) {
            /**
             * TIPS:
             * 1.有scatter就拿scatter
             * 2.aniNode=null的狀態代表他已經先被runningPool拿走了(有中獎,沒有中獎才會從slotMachine當中拿到)
             * 3.如果有拿到實體的話裡面跟handoff一樣有相關的資料可以讓你在showAniProcess裡面使用
             * 4.有一種狀態會是既有scatter又有wild的狀態,這種狀態會優先拿scatter
             * 5.如果是開啟FG條件的當局,那個局數判斷不能拿fgData.reels來判斷Scatter的位置..
             * <因為條件裡面包含scatter+wild=FG的總局數>
             * 如需要正確scatter位置要用multiScatterReel來判斷
             */
            if (turboMode == (_crd && NewFlashModeEnum === void 0 ? (_reportPossibleCrUseOfNewFlashModeEnum({
              error: Error()
            }), NewFlashModeEnum) : NewFlashModeEnum).NewFlash2) {
              await currentGUI.openFGCountUI();
              await currentGUI.triggerFGCountUp(fgData.total);
            } else {
              await currentGUI.openFGCountUI();
              const handoffScatterData = await this._slotMachine.forceToHandoffScatter(multiScatterReel);
              destinationWpos = currentGUI.getFGCountWPos();
              await this._basicShowAniProcess.showGetScatterFGEffect({
                endPos: destinationWpos,
                info: handoffScatterData,
                index: multiScatterReel
              }); //--20260126取消(流程改變..這邊已經變成在RS情況下,得分演完才觸發)
              //this._basicShowAniProcess.gotFGScatterCount = fgData.total;

              await currentGUI.triggerFGCountUp(fgData.total);
            } //--這樣拔出來塞回去的速度太慢了

            /*
            const scatterData: { reAssign: IPlayAniData, aniNode: Node }[] = await (<UniSlotMachine1016>this._slotMachine).getMultiScatterAniNode(multiScatterReel);
            const destinationWpos = this._ngUI.getFGCountWPos();
            await this._ngUI.openFGCountUI();
            await this._basicShowAniProcess.showGetScatterFGEffect({
                endPos: destinationWpos,
                info: scatterData,
                index: multiScatterReel
            });
            currentGUI.triggerFGCountUp(fgData.total);
            */

          } else {
            //--沒有scatter就拿Wild (強行將wild/scatter轉移圖層)
            const handoffWildData = await this._slotMachine.forceToHandoffWild(fgData.reels);

            if (turboMode == (_crd && NewFlashModeEnum === void 0 ? (_reportPossibleCrUseOfNewFlashModeEnum({
              error: Error()
            }), NewFlashModeEnum) : NewFlashModeEnum).NewFlash2) {
              await currentGUI.openFGCountUI();
              await currentGUI.triggerFGCountUp(fgData.total);
            } else {
              //--沒有scatter就拿Wild 
              destinationWpos = currentGUI.getFGCountWPos();
              await currentGUI.openFGCountUI();
              await this._basicShowAniProcess.showGetReSpinEffect({
                endPos: destinationWpos,
                info: handoffWildData,
                index: fgData.reels
              });
              await currentGUI.triggerFGCountUp(fgData.total);
            }
          }
        } //--20260129新增功能:儲存當前round的FG/RS次數資料


        async newRoundDataToStopSpin() {
          this.beforeProcessNewRoundData(); //--第一把資料先算

          await super.newRoundDataToStopSpin();
        }

        beforeProcessNewRoundData() {
          //return;
          const currentSate = this._processedServerData.getCurrentState();

          const nextState = this._processedServerData.getNextStepGameState();

          const prevState = this._processedServerData.getPrevState();
          /**
          * TIPS:在局間交換的時候,第一次需要開啟面板等相關處理交給
          * beforeProcessReSpinRound/ beforeProcessFGRound來處理.
          * 只處理局內的RS/FG次數計算與表演
          * 這邊先算出第一次的RS需要的次數等RS進來時候直接用
          * 阿幹..這裡接在checkNextRound裡面做,資料索引的index已經移動了
          * 但原先的設計是在流程的末端做這件事,所以當時資料索引尚未移動
          */
          //--ng-to->rs

          /*
          if (currentSate != nextState && (nextState == GameState.RE_SPINE)) {
              this._processedServerData.stashRoundResults();//--先計算寫入暫存區
              return;
          }*/

          /**
           * 第一把RS會先checkNextRound ,但此時已經變成RS第一把了(index已經往後移),所以顯示的數字會是下一把的
           * 然後走beforeProcessReSpinRound才會開面板和更改gameState為RS
           */


          const {
            fg,
            rs
          } = this._processedServerData.consumeRoundResults(); //--取出暫存區的資料


          let reSpinCount = null;
          let fgCount = {
            reels: [],
            total: 0,
            hope: []
          }; //--進入FG當下洗掉計算次數,FG內重新累計(2種情況下會進來)

          if (currentSate != prevState) {
            if (prevState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).NORMAL && nextState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME) {
              this._processedServerData.clearCountForFg();
            }
          } else {
            if (currentSate == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).RE_SPINE && nextState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME) {
              this._processedServerData.clearCountForFg();
            }
          }

          if (fg.total > 0 || rs.total > 0) {
            //--這裡已經不會進來了--20260129
            // 已經有 buffer → 用 buffer
            reSpinCount = rs;
            fgCount = fg; //usePreviousData = true;
          } else {
            // 沒有 buffer → 即時計算
            if (currentSate != (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME) {
              reSpinCount = this._processedServerData.getReSpinCountForRound();
            }

            fgCount = this._processedServerData.getFgCountForRound();
          }

          if (currentSate != nextState) {
            //this._processedServerData.stashRoundResults();//--先計算寫入暫存區
            //return;
            if (nextState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).RE_SPINE) {
              this._currentFGAndRSRecord1016.firstNgToRsData = {
                reSpinCount: reSpinCount,
                fgCount: fgCount,
                usePreviousData: true
              };
            } else if (nextState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME) {
              if (currentSate == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).NORMAL) {
                this._currentFGAndRSRecord1016.firstNgToFgData = {
                  fgCount: fgCount
                };
              } else if (currentSate == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).RE_SPINE) {
                this._currentFGAndRSRecord1016.fgCount = fgCount;
                this._currentFGAndRSRecord1016.reSpinCount = reSpinCount;
              }
            } else if (nextState == null) {
              //--最終局-
              this._currentFGAndRSRecord1016.fgCount = fgCount;
              this._currentFGAndRSRecord1016.reSpinCount = reSpinCount;
            }
          } else {
            this._currentFGAndRSRecord1016.fgCount = fgCount;
            this._currentFGAndRSRecord1016.reSpinCount = reSpinCount;
          } //--要檢查NG跳RS的狀態和NG跳FG的狀態


          (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).setGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).CurrentFGAndRSRecord, fgCount);
        }
        /**
         * 中線流程結束後計算要顯示的RS和FG次數與表演
         * TIPS:
         * 1.處理位移後的reSpine獲得欄位顯示
         * 2.處理位移後的fg獲得欄位顯示
         * TIPS2:
         * 在後續的回合中,如果有符合累計的條件,也會觸發欄位上的改變
         */


        async processCalculatingRSandFG() {
          /*
          const currentSate = this._processedServerData.getCurrentState();
          const nextState = this._processedServerData.getNextStepGameState();
           if (currentSate != nextState && (nextState == GameState.RE_SPINE)) {
              this._processedServerData.stashRoundResults();//--先計算寫入暫存區
              return Promise.resolve();
          }
           const { fg, rs } = this._processedServerData.consumeRoundResults();//--取出暫存區的資料
          let reSpinCount: { reels: number[], total: number } | null = null;
          let fgCount: { reels: number[], total: number } = { reels: [], total: 0 };
           const promises: Promise<void>[] = [];
          let usePreviousData = false;
          if (fg.total > 0 || rs.total > 0) {
              // 已經有 buffer → 用 buffer
              reSpinCount = rs;
              fgCount = fg;
              usePreviousData = true;
          } else {
              // 沒有 buffer → 即時計算
              if (currentSate != GameState.FREE_GAME) {
                  reSpinCount = this._processedServerData.getReSpinCountForRound();
              }
              fgCount = this._processedServerData.getFgCountForRound();
          }
          */
          //const nextState = this._processedServerData.getNextStepGameState();

          /*
          if (currentSate != nextState && (nextState == GameState.RE_SPINE)) {
              return;
          }*/
          //--20260129-改用之前算好的資料
          //const { reSpinCount, fgCount, firstNgToRsData } = this._currentFGAndRSRecord1016;
          let reSpinCount;
          let fgCount;
          let usePreviousData = false;

          if (this._currentFGAndRSRecord1016.firstNgToRsData) {
            reSpinCount = this._currentFGAndRSRecord1016.firstNgToRsData.reSpinCount;
            fgCount = this._currentFGAndRSRecord1016.firstNgToRsData.fgCount;
            usePreviousData = this._currentFGAndRSRecord1016.firstNgToRsData.usePreviousData;
            this._currentFGAndRSRecord1016.firstNgToRsData = null;
          } else {
            reSpinCount = this._currentFGAndRSRecord1016.reSpinCount;
            fgCount = this._currentFGAndRSRecord1016.fgCount;
          } //const firstNgToRsData = this._currentFGAndRSRecord1016.firstNgToRsData;
          //const usePreviousData = firstNgToRsData ? true : false;


          const promises = [];

          if (reSpinCount && reSpinCount.total > 0) {
            promises.push(this.processReSpineCount(reSpinCount));
          }

          if (fgCount.total > 0) {
            //-在沒有reSpin觸發FG不需要噴了-直接進位讓資料往下就好
            const currentSate = this._processedServerData.getCurrentState();

            if (currentSate != (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).NORMAL) {
              promises.push(this.processScatterFGCount(fgCount, usePreviousData));
            }
          }

          if (promises.length > 0) {
            this._isInterrupting = false;
            (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
              error: Error()
            }), GlobalAccessWriter) : GlobalAccessWriter).setGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).InterruptProcess, this._isInterrupting);

            const delay = this._gameStepDelayTimeList.get(cfg => {
              var _cfg$wild4;

              return (_cfg$wild4 = cfg.wild) == null ? void 0 : _cfg$wild4.others.beforeCountWait;
            });

            await this.addTweenDelay(delay);
          }

          await Promise.all(promises);
        }
        /**
         * <表演處理一定要實作(這是接在await slot stopRoll之後)
         * 盤面停止後會呼叫這個方法(不管有無得分都會進來)>
         * TIPS:這個步驟是整盤的最後一步,演完這個步驟後會進入checkNextRound
         *   
         * @returns Promise<void>
         */


        async doShowResultAfterStopRoll() {
          //console.log('====================doShowResultAfterStopRoll================');
          const currentRoundData = this._processedServerData.getCurrentData();

          const winScoreData = this.createWinScoreData();

          const currentGameState = this._processedServerData.getCurrentState();

          const nextGameState = this._processedServerData.getNextStepGameState();

          const isFinalRound = this._processedServerData.getIsLastStep();

          const nexNew = currentGameState != nextGameState ? true : false; //--寫入當前與下一把的狀態(是否進入輪播使用)

          const gameStateCondition = {
            currentRoundState: currentGameState,
            nextRoundState: nextGameState,
            isDifferentStateNext: nexNew,
            isFinal: isFinalRound
          };
          this._basicShowAniProcess.gameStateCondition = gameStateCondition;
          let useSequence = false; //let playWinFlag: boolean;

          let roundWinData;
          let beforeShowWinDelay = 0;

          if (currentGameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME || currentGameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).RE_SPINE) {
            //GameUtilsTools.debugLog('BasicShowAniProcessCheck', 'beforeFG', { flag: this._isInterrupting.toString() });
            roundWinData = await this._basicShowAniProcess.beforeProcessWinScoreData(winScoreData, currentRoundData.winLine);

            this._roundStepMapCondition.set(ROUND_STEP_CONDITION_KEY.WIN, roundWinData.hasWin);

            this._roundStepMapCondition.set(ROUND_STEP_CONDITION_KEY.JP, roundWinData.bigWin);

            if (currentGameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).RE_SPINE) {
              /**
               * 1.中線播放
               * 2.計算FG
               * 3.有獲得FG播放FG獲得動畫
               * 4.FG數字異動相關處理
               */
              if (roundWinData.hasWin) {
                beforeShowWinDelay = this._gameStepDelayTimeList.get(cfg => {
                  var _cfg$result;

                  return (_cfg$result = cfg.result) == null ? void 0 : _cfg$result.beforeShowWin;
                });
                await this.addTweenDelay(beforeShowWinDelay);
              }

              this._isInterrupting = false;
              (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
                error: Error()
              }), GlobalAccessWriter) : GlobalAccessWriter).setGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
                error: Error()
              }), GameGlobalKeys) : GameGlobalKeys).InterruptProcess, this._isInterrupting);
              useSequence = await this._basicShowAniProcess.runShowProcess(roundWinData.hasWin);
              /*
              const fgBuffer = this._processedServerData.checkHasFGBufferData();
              let fgCount: { reels: number[], total: number } = { reels: [], total: 0 };
              if (!fgBuffer) {
                  fgCount = this._processedServerData.preCalculateFgCountForRound();
              } else {
                  fgCount = this._processedServerData.getFGBuffer();
              }
              */

              const fgCount = this._currentFGAndRSRecord1016.firstNgToRsData ? this._currentFGAndRSRecord1016.firstNgToRsData.fgCount : this._currentFGAndRSRecord1016.fgCount;

              if (fgCount.total > 0) {
                await this._basicShowAniProcess.showScatterAndWildWinAniBeforeFG(fgCount.reels);
              }
              /**
               * TIPS:20260130-改用之前算好的資料
               */


              await this.processCalculatingRSandFG();
            } else {
              /**
               * 1.FG數字異動相關處理
               * 2.中線播放
               */
              await this.processCalculatingRSandFG();

              if (roundWinData.hasWin) {
                beforeShowWinDelay = this._gameStepDelayTimeList.get(cfg => {
                  var _cfg$result2;

                  return (_cfg$result2 = cfg.result) == null ? void 0 : _cfg$result2.beforeShowWin;
                });
                await this.addTweenDelay(beforeShowWinDelay);
              }

              this._isInterrupting = false;
              (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
                error: Error()
              }), GlobalAccessWriter) : GlobalAccessWriter).setGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
                error: Error()
              }), GameGlobalKeys) : GameGlobalKeys).InterruptProcess, this._isInterrupting);
              useSequence = await this._basicShowAniProcess.runShowProcess(roundWinData.hasWin);
            }
          } else {
            //--runShowProcess會轉移node到表演layer
            //this._isInterrupting = false;
            //GlobalAccessWriter.setGlobalData(GameGlobalKeys.InterruptProcess, this._isInterrupting);
            //GameUtilsTools.debugLog('BasicShowAniProcessCheck', 'beforeNG', { flag: this._isInterrupting.toString() });
            roundWinData = await this._basicShowAniProcess.beforeProcessWinScoreData(winScoreData, currentRoundData.winLine);

            this._roundStepMapCondition.set(ROUND_STEP_CONDITION_KEY.WIN, roundWinData.hasWin);

            this._roundStepMapCondition.set(ROUND_STEP_CONDITION_KEY.JP, roundWinData.bigWin);

            if (roundWinData.hasWin) {
              beforeShowWinDelay = this._gameStepDelayTimeList.get(cfg => {
                var _cfg$result3;

                return (_cfg$result3 = cfg.result) == null ? void 0 : _cfg$result3.beforeShowWin;
              });
              await this.addTweenDelay(beforeShowWinDelay);
            }

            this._isInterrupting = false;
            (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
              error: Error()
            }), GlobalAccessWriter) : GlobalAccessWriter).setGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).InterruptProcess, this._isInterrupting);
            useSequence = await this._basicShowAniProcess.runShowProcess(roundWinData.hasWin); //await this.processCalculatingRSandFG();
          } //await this.runTest();
          //--AUTO模式之下不需要跑輪播了


          if (useSequence && currentGameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL) {
            const isAutoMode = (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.isAutoMode;

            if (!isAutoMode) {
              this._basicShowAniProcess.playMultipleSequence();
            }
          }
        }

        prepareForNextFGandReSpin() {
          //--這邊已經是改變了global變數的情況下
          const state = (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).GameState);

          if (state === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME) {
            this._fgUI.setFGCount(-1); //--count FG

          } else if (state === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).RE_SPINE) {
            // Prepare for ReSpin
            this._ngUI.setReSpinCount(-1); //--count reSpin

          }
        } //--計算取得下一個round step的暫停時間


        checkConditionForRoundStep(isFinalRound = false) {
          /**
           * PS:20251216
           * 1.在auto模式下,在FG結束必定觸發bigWin,但此時資料已經清空啦
           * 所以回過頭來拿到的的是新一輪NG的資料,且是沒有中獎的狀態
           * 2.企劃沒填寫turbo2狀態下FG的局間時間
           * 
           */
          const state = (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).GameState);
          let returnTime = 0;
          this._isInterrupting = true; //--停止按鈕上鎖
          //--如果只有單一把NG他會是NULL

          const previousState = this._processedServerData.getPrevState();

          if (isFinalRound && previousState !== null) {
            returnTime = this._gameStepDelayTimeList.get(cfg => {
              var _cfg$round;

              return (_cfg$round = cfg.round) == null ? void 0 : _cfg$round.interRoundDelay_AUTO;
            });

            this._roundStepMapCondition.set(ROUND_STEP_CONDITION_KEY.WIN, false);

            this._roundStepMapCondition.set(ROUND_STEP_CONDITION_KEY.WILD_MOVE, false);

            this._roundStepMapCondition.set(ROUND_STEP_CONDITION_KEY.JP, false);

            return returnTime;
          }

          const isWin = this._roundStepMapCondition.get(ROUND_STEP_CONDITION_KEY.WIN);

          const isWildMove = this._roundStepMapCondition.get(ROUND_STEP_CONDITION_KEY.WILD_MOVE);

          const isBigWin = this._roundStepMapCondition.get(ROUND_STEP_CONDITION_KEY.JP);

          if (!isWin && !isWildMove) {
            //-沒有中獎的情況下
            if (state === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).NORMAL) {
              (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
                error: Error()
              }), GameUtilsTools) : GameUtilsTools).roundDelayState = 'roundStep_NG_noWin';
              returnTime = this._gameStepDelayTimeList.get(cfg => {
                var _cfg$round2;

                return (_cfg$round2 = cfg.round) == null ? void 0 : _cfg$round2.roundStep_NG_noWin;
              });
            } else if (state == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).RE_SPINE) {
              (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
                error: Error()
              }), GameUtilsTools) : GameUtilsTools).roundDelayState = 'roundStep_RS_noWin';
              returnTime = this._gameStepDelayTimeList.get(cfg => {
                var _cfg$round3;

                return (_cfg$round3 = cfg.round) == null ? void 0 : _cfg$round3.roundStep_RS_noWin;
              });
            } else if (state == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME) {
              (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
                error: Error()
              }), GameUtilsTools) : GameUtilsTools).roundDelayState = 'roundStep_FG_noWin';
              returnTime = this._gameStepDelayTimeList.get(cfg => {
                var _cfg$round4;

                return (_cfg$round4 = cfg.round) == null ? void 0 : _cfg$round4.roundStep_FG_noWin;
              });
            }
          } else if (isBigWin) {
            //-有中獎的情況下
            if (state === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).NORMAL) {
              (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
                error: Error()
              }), GameUtilsTools) : GameUtilsTools).roundDelayState = 'roundStep_NG_JP';
              returnTime = this._gameStepDelayTimeList.get(cfg => {
                var _cfg$round5;

                return (_cfg$round5 = cfg.round) == null ? void 0 : _cfg$round5.roundStep_NG_JP;
              });
            } else if (state == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).RE_SPINE) {
              (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
                error: Error()
              }), GameUtilsTools) : GameUtilsTools).roundDelayState = 'roundStep_RS_JP';
              returnTime = this._gameStepDelayTimeList.get(cfg => {
                var _cfg$round6;

                return (_cfg$round6 = cfg.round) == null ? void 0 : _cfg$round6.roundStep_RS_JP;
              });
            } else if (state == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME) {
              (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
                error: Error()
              }), GameUtilsTools) : GameUtilsTools).roundDelayState = 'roundStep_FG_JP';
              returnTime = this._gameStepDelayTimeList.get(cfg => {
                var _cfg$round7;

                return (_cfg$round7 = cfg.round) == null ? void 0 : _cfg$round7.roundStep_FG_JP;
              });
            }
          } else if (isWin || isWildMove) {
            //-有中獎的情況下
            if (state === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).NORMAL) {
              (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
                error: Error()
              }), GameUtilsTools) : GameUtilsTools).roundDelayState = 'roundStep_NG_win';
              returnTime = this._gameStepDelayTimeList.get(cfg => {
                var _cfg$round8;

                return (_cfg$round8 = cfg.round) == null ? void 0 : _cfg$round8.roundStep_NG_win;
              });
            } else if (state == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).RE_SPINE) {
              (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
                error: Error()
              }), GameUtilsTools) : GameUtilsTools).roundDelayState = 'roundStep_RS_win';
              returnTime = this._gameStepDelayTimeList.get(cfg => {
                var _cfg$round9;

                return (_cfg$round9 = cfg.round) == null ? void 0 : _cfg$round9.roundStep_RS_win;
              });
            } else if (state == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME) {
              (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
                error: Error()
              }), GameUtilsTools) : GameUtilsTools).roundDelayState = 'roundStep_FG_win';
              returnTime = this._gameStepDelayTimeList.get(cfg => {
                var _cfg$round10;

                return (_cfg$round10 = cfg.round) == null ? void 0 : _cfg$round10.roundStep_FG_win;
              });
            }
          } //--重置條件


          this._roundStepMapCondition.set(ROUND_STEP_CONDITION_KEY.WIN, false);

          this._roundStepMapCondition.set(ROUND_STEP_CONDITION_KEY.WILD_MOVE, false);

          this._roundStepMapCondition.set(ROUND_STEP_CONDITION_KEY.JP, false);

          return returnTime;
        } //--取得滾動到停止的時間處理--20251214新增


        processRollToStopTime(gameState) {
          //--這邊的<auto模式要在處理--目前只有處理正常/第一階/第二階>三種狀態的滾動時間
          //--

          /**
           * 這邊的<auto模式要在處理--目前只有處理正常/第一階/第二階>三種狀態的滾動時間
           * 要滿足企劃需要再限定時間內停止全部的軸(包含他的延遲時間,所以要提早進入stop的指令(就是扣除延遲時間啦))
           * TIPS:
           * 所以L0來說是0.8秒內要停完,L1是0.5秒內停完,L2是...
           */
          let delay = 0;

          if (gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL) {
            delay = this._gameStepDelayTimeList.get(cfg => {
              var _cfg$roll;

              return (_cfg$roll = cfg.roll) == null ? void 0 : _cfg$roll.totalRoll;
            }).fixed();
          } else if (gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).RE_SPINE) {
            delay = this._gameStepDelayTimeList.get(cfg => {
              var _cfg$roll2;

              return (_cfg$roll2 = cfg.roll) == null ? void 0 : _cfg$roll2.totalRoll;
            }).fixed();
          } else if (gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME) {
            delay = this._gameStepDelayTimeList.get(cfg => {
              var _cfg$roll3;

              return (_cfg$roll3 = cfg.roll) == null ? void 0 : _cfg$roll3.totalRoll;
            }).fixed();
          }

          let earlyToStopStep = this._gameStepDelayTimeList.get(cfg => {
            var _cfg$stop;

            return (_cfg$stop = cfg.stop) == null ? void 0 : _cfg$stop.earlyStop;
          }).fixed();

          delay = (delay - earlyToStopStep).fixed(); //--正常模式要扣掉要提前的秒

          return delay;
        }
        /**
         * 處理ReSpin之前要做的事<例如:擷取資料之類的關閉面板之類的..>
         * @param value RoundStep<Out, G>
         * TIPS:已經是新round的資料了
         */


        async beforeProcessReSpinRound(value) {
          if (this._processedServerData.isFirstReSpin()) {
            var _this$_currentFGAndRS;

            /**
             * 1.第一把就會先取出資料,每把結束走checkNextRound,移動資料index
             * 2.這一步beforeProcessReSpinRound是在checkNextRound之後執行的
             * 所以第一次近來的時候會累積2筆資料,第一筆是firstNgToRsData
             * 第二筆是reSpinCount/fgCount
             * 3.如果下一把資料是有獲得RS的狀態下直接抽getCurrentRSOpenCount會錯
             * 因為此時他已經推進到下一輪了
             */
            //const reSpinTotalTimes = this._processedServerData.getCurrentRSOpenCount();
            const reSpinTotalTimes = ((_this$_currentFGAndRS = this._currentFGAndRSRecord1016) == null || (_this$_currentFGAndRS = _this$_currentFGAndRS.firstNgToRsData) == null ? void 0 : _this$_currentFGAndRS.reSpinCount.total) || 0;

            this._reSpinBoard.setReSpinTimes(reSpinTotalTimes);

            let callBackFlag = false;

            const asyncEvtCallback = async () => {
              //--change gameState
              if (callBackFlag) return;
              callBackFlag = true;
              (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
                error: Error()
              }), GlobalAccessWriter) : GlobalAccessWriter).setGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
                error: Error()
              }), GameGlobalKeys) : GameGlobalKeys).GameState, (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).RE_SPINE);

              this._gameModeManager.changeAllGameState((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).RE_SPINE);
            };

            const beforeOpenBoardDelay = this._gameStepDelayTimeList.get(cfg => {
              var _cfg$respin;

              return (_cfg$respin = cfg.respin) == null ? void 0 : _cfg$respin.beforeBoardWait;
            });

            if (beforeOpenBoardDelay > 0) {
              await this.addTweenDelay(beforeOpenBoardDelay);
            }

            await this._reSpinBoard.openWithEvtAndFinishPromise(asyncEvtCallback);
            this._isInterrupting = false;
            (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
              error: Error()
            }), GlobalAccessWriter) : GlobalAccessWriter).setGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).InterruptProcess, this._isInterrupting);
            await this.processCalculatingRSandFG();
          } //---表演觸發respin次數(上方的UI)

        }
        /**
         * 處理FG之前要做的事<例如:擷取資料之類的關閉面板之類的..>
         * @param value RoundStep<Out, G>
         * TIPS:已經是新round的資料了
         */


        async beforeProcessFGRound(value) {
          if (!this._processedServerData.isFirstFreeGame()) return;
          (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).setGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).GameState, (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME); //step1--有Scatter的狀態下需要播放scatter的connect動畫
          //step2--播放完畢後再接續展開面板後續的流程

          /*
          await Promise.all([
              this._basicShowAniProcess.showScatterWinAni(),
              //--20251125新增需求
              this._gameBGSoundCtrl1016.fadeOutNGorRSWithBGM()
          ]);*/
          //--20251231-FIX修改-20250120 FIX again--
          //--20260122 FIX again again
          //const prevData = this._processedServerData.getPrevData();

          const prevState = this._processedServerData.getPrevState();

          const dt = this._gameStepDelayTimeList.get(cfg => {
            var _cfg$fg;

            return (_cfg$fg = cfg.fg) == null ? void 0 : _cfg$fg.beforeWait;
          });

          if (prevState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL) {
            if (this._currentFGAndRSRecord1016.firstNgToFgData != null) {
              const fgCount = this._currentFGAndRSRecord1016.firstNgToFgData.fgCount;
              this._currentFGAndRSRecord1016.firstNgToFgData = null;

              if (fgCount.total > 0) {
                await this._async.waitSecondsRaw(dt); //--等一等

                await Promise.all([this._basicShowAniProcess.showScatterAndWildWinAniBeforeFG(fgCount.reels), this._slotMachine.playWildAniToFg(fgCount.reels)]); //await this._basicShowAniProcess.showScatterWinAni();

                await this.addTweenDelay(0.2); //--scatter connect動畫的等待時間
              }
            }
          }

          await this._async.waitSecondsRaw(dt); //--等一等

          this._gameBGSoundCtrl1016.fadeOutNGorRSWithBGM(); //--開啟面板....


          const fgTotalTimes = this._processedServerData.getCurrentFGOpenCount(); //-_fgUI


          this._fgUI.setTotalFgCount(fgTotalTimes);

          const boardOutCallBack = () => {
            this._ngUI.closeReSpinCountUI();

            this._gameModeManager.changeAllGameState((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME);
          };

          this._slotMachine.reSetLockReels(); //--LOCK 解鎖
          //this._processedServerData.clearCountForFg();--20260130取消,更改流程再開始前就會檢查清除


          this._fgUIBoard.setBoardMode((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME);

          this._fgUIBoard.setFGPlayTimes(fgTotalTimes);

          await this._fgUIBoard.openFGUIBoard(fgTotalTimes, boardOutCallBack);

          const beforeFirstFgRoundWait = this._gameStepDelayTimeList.get(cfg => {
            var _cfg$other;

            return (_cfg$other = cfg.other) == null ? void 0 : _cfg$other.beforeFirstFgRoundWait;
          });

          await this._async.waitSecondsRaw(beforeFirstFgRoundWait); //--第一把FG開始前的等待時間-20260209

          this._isInterrupting = false;
          (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).setGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).InterruptProcess, this._isInterrupting);
          console.log();
        } //--結束該round資料前處理.準備跟Server要下一round的資料


        async beforeProcessNormalRound() {
          //--處理回到Normal(整把結束FG->NG要資料)之前要做的事
          //---例如:擷取資料之類的關閉面板之類的
          const previousState = this._processedServerData.getPrevState();

          if (previousState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).RE_SPINE) {
            //--關閉reSpin面板
            await this._ngUI.closeReSpinCountUI();
          }

          this._ngUI.closeAllUI(); //--準備把isLock按鈕重新設定


          if (previousState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME) {
            //--秀結算面板
            //--如果要秀面板與FG的JP結算他數字要跟面板對得起來..
            //const totalRoundScoreInfo: { betValue: number, odds: number, score: number } = this._processedServerData.getALLRoundTotalScoreAndBetFixed();
            //--20260306-需求修改要以FG內所獲得的分數為主,所以改成這個方法
            const totalRoundScoreInfo = this._processedServerData.getFGRoundTotalScoreAndBetFixed();

            (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
              error: Error()
            }), GlobalAccessWriter) : GlobalAccessWriter).setGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).RoundTotalOdds, totalRoundScoreInfo.odds);

            this._fgUIBoard.setBoardMode((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).NORMAL);

            this._basicShowAniProcess.cleanAllPlayingBeforeNewStart(); //--切掉輪播


            const endJpRoundDelay = this._gameStepDelayTimeList.get(cfg => {
              var _cfg$fg2;

              return (_cfg$fg2 = cfg.fg) == null ? void 0 : _cfg$fg2.beforeOpenWait;
            });

            const p = this._async.waitSecondsTracked(endJpRoundDelay, 'beforeOpenFGBoardDelay', null, true);

            await p.promise;
            await this._basicShowAniProcess.showBigWinAfterFG(totalRoundScoreInfo.odds, totalRoundScoreInfo.betValue); //--1006新增功能(要結束FG後才秀大獎)

            const endOpenDelay = this._gameStepDelayTimeList.get(cfg => {
              var _cfg$Jackpot;

              return (_cfg$Jackpot = cfg.Jackpot) == null ? void 0 : _cfg$Jackpot.beforeOpenWait;
            });

            await this.addTweenDelay(endOpenDelay); //--關閉FG面板

            await Promise.all([this._fgUIBoard.openFGUIBoard(totalRoundScoreInfo.score), //--20251125新增需求
            this._gameBGSoundCtrl1016.fadeOutFGWithBGM()]); //--將等待大獎畫面秀出時機點放到開啟面板結束後-20260109
            //const endJpRoundDelay = this._gameStepDelayTimeList.get(cfg => cfg.Jackpot?.beforeOpenWait);
            //const p = this._async.waitSecondsTracked(endJpRoundDelay, 'beforeOpenFGBoardDelay', null, true);
            //await p.promise;
            //await this._basicShowAniProcess.showBigWinAfterFG(totalRoundScoreInfo.odds, totalRoundScoreInfo.betValue);//--1006新增功能(要結束FG後才秀大獎)
          }
        } //----重置資料準備新一輪(跟server要資料前)


        resetDataForNewRound() {
          //--要清掉上輪的面板資料
          //console.log('check_resetDataForNewRound', this._processedServerData.getCurrentState());
          (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).setGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).GameState, (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL);
          (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).setGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).RoundTotalOdds, 0);
          this._isInterrupting = false; //---重置中斷狀態

          (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).setGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).InterruptProcess, this._isInterrupting);

          this._slotMachine.reSetLockReels();

          this._basicShowAniProcess.resetAllData();

          this._processedServerData.clearAllData();

          this._currentFGAndRSRecord1016.resetData();

          let currentGameState = (_crd && GlobalAccessWriter === void 0 ? (_reportPossibleCrUseOfGlobalAccessWriter({
            error: Error()
          }), GlobalAccessWriter) : GlobalAccessWriter).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).GameState); //--註冊遊戲收發狀態改變接收者...

          this._gameModeManager.changeAllGameState(currentGameState);
        }

        async runTest(value) {
          //--做stop的時候,看要不要在processAfterAllReelRollEnd接續往下測試
          //return;
          super.runTest(); //(<UniSlotMachine1016>this._slotMachine).testFunction();
          //--開啟面板....

          this._fgUI.setTotalFgCount(10);

          const boardOutCallBack = () => {
            this._ngUI.closeReSpinCountUI();

            this._gameModeManager.changeAllGameState((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME);
          };

          this._slotMachine.reSetLockReels(); //--LOCK 解鎖


          this._fgUIBoard.setBoardMode((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME);

          this._fgUIBoard.setFGPlayTimes(10);

          await this._fgUIBoard.openFGUIBoard(10, boardOutCallBack);
        } //============================== testMode 狀態 =========================


        testHideIcon(reelIndex, iconIndex) {
          this._slotMachine.testHideIcon(reelIndex, iconIndex);
        }

        testAddSymbol(reelIndex, iconIndex) {
          this._slotMachine.testAddSymbol(reelIndex, iconIndex);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_prefabAdapter", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new (_crd && PrefabAdapter === void 0 ? (_reportPossibleCrUseOfPrefabAdapter({
            error: Error()
          }), PrefabAdapter) : PrefabAdapter)();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_basicShowAniProcess", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_showContainerManager", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_ngUI", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_fgUI", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_reSpinBoard", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_fgUIBoard", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_ngBgMusicSource", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dc8bd256e2c38af71a6aaf295d5c9eed88577209.js.map