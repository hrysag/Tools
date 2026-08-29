System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26", "__unresolved_27"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UITransform, EventTarget, v3, UIOpacity, SlotMachineController018, ShowContainerController, GameState, GameUtils, NotifyCation, NotifySubject, GameViewEvents, DefinitionGameConfigData, WinScore, ShowAniController, DYN_NODE_PROPERTIES, AniSysTools, RPSWildState, RPSWildSystem, GateN2FTransition, BonusManager, TransitionsState, ProcessSymbolData, BuyFgController, JpShowController, FG_BkgController, FG2_BkgController, FindNode, GenericUIManager, PlayerInfo, ShowBottomTextStatus, AudioManager, SOUND_TYPE, SoundList, AudioSourceList, MusicList, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, FORECAST_REEL, WILD_LIST, FORECAST_FOR_REEL, REEL_AMOUNT, SPECIAL_SYMBOL_LIST, PFB_SYMBOL_ANI, NO_MOTIONICON_LIST, HIGH_ODDS_SYMBOL_LIST, SPIN_DELAY, FG_DELAY, NO_CAMP_DATA, GameViewManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSlotMachineController(extras) {
    _reporterNs.report("SlotMachineController018", "../Slot/SlotMachineController018", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowContainerController(extras) {
    _reporterNs.report("ShowContainerController", "../GameDisplay/ShowContainer/ShowContainerController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../DefinitionGameData/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProcessSlotData(extras) {
    _reporterNs.report("IProcessSlotData", "../ServerBackSlotInfoData/ProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProcessFGData(extras) {
    _reporterNs.report("IProcessFGData", "../ServerBackSlotInfoData/ProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconData(extras) {
    _reporterNs.report("IconData", "../ServerBackSlotInfoData/ProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicProcessSlotData(extras) {
    _reporterNs.report("BasicProcessSlotData", "../ServerBackSlotInfoData/ProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatchInfoForRound(extras) {
    _reporterNs.report("MatchInfoForRound", "../ServerBackSlotInfoData/ProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../MyUtils/GameUtils", _context.meta, extras);
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

  function _reportPossibleCrUseOfWinScoreData(extras) {
    _reporterNs.report("WinScoreData", "../DefinitionGameData/GameDataDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinScore(extras) {
    _reporterNs.report("WinScore", "../GameDisplay/WinScore/WinScore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowAniController(extras) {
    _reporterNs.report("ShowAniController", "../GameDisplay/ShowAniController/ShowAniController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroupAniData(extras) {
    _reporterNs.report("GroupAniData", "../MyUtils/AnimationSystem/Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDYN_NODE_PROPERTIES(extras) {
    _reporterNs.report("DYN_NODE_PROPERTIES", "../MyUtils/AnimationSystem/Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAnimationControl(extras) {
    _reporterNs.report("IAnimationControl", "../MyUtils/AnimationSystem/Definitions/IAnimationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniSysTools(extras) {
    _reporterNs.report("AniSysTools", "../MyUtils/AnimationSystem/AniTools/AniSysTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPSWildAnimationController(extras) {
    _reporterNs.report("RPSWildAnimationController", "../GameDisplay/RPSWild/RPSWildAnimationController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPSWildData(extras) {
    _reporterNs.report("RPSWildData", "../GameDisplay/RPSWild/RPSWildDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPSWildState(extras) {
    _reporterNs.report("RPSWildState", "../GameDisplay/RPSWild/RPSWildDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPSWildSystem(extras) {
    _reporterNs.report("RPSWildSystem", "../GameDisplay/RPSWild/RPSWildSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGateN2FTransition(extras) {
    _reporterNs.report("GateN2FTransition", "../GameDisplay/Transitions/GateN2FTransition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBonusManager(extras) {
    _reporterNs.report("BonusManager", "../GameDisplay/FGController/BonusManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowAniData(extras) {
    _reporterNs.report("ShowAniData", "../GameDisplay/ShowAniController/ShowAniDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTransitionsState(extras) {
    _reporterNs.report("TransitionsState", "../DefinitionGameData/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineController(extras) {
    _reporterNs.report("SpineController", "../MyUtils/AnimationSystem/Components/SpineController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProcessSymbolData(extras) {
    _reporterNs.report("ProcessSymbolData", "./ProcessSymbolData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolIconAinData(extras) {
    _reporterNs.report("SymbolIconAinData", "../DefinitionGameData/GameDataDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuyFgController(extras) {
    _reporterNs.report("BuyFgController", "../GameDisplay/BuyFgController/BuyFgController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJpShowController(extras) {
    _reporterNs.report("JpShowController", "../GameDisplay/JpShowController/JpShowController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFG_BkgController(extras) {
    _reporterNs.report("FG_BkgController", "../GameDisplay/ShowContainer/Components/FG_BkgController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFG2_BkgController(extras) {
    _reporterNs.report("FG2_BkgController", "../GameDisplay/ShowContainer/Components/FG2_BkgController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindNode(extras) {
    _reporterNs.report("FindNode", "../MyUtils/FindNode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUIManager(extras) {
    _reporterNs.report("GenericUIManager", "db://assets/GenericUI/Scripts/GenericUIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerInfo(extras) {
    _reporterNs.report("PlayerInfo", "db://assets/Scripts/Player/PlayerInfo", _context.meta, extras);
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

  function _reportPossibleCrUseOfMusicList(extras) {
    _reporterNs.report("MusicList", "../DefinitionGameData/SoundList", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      UITransform = _cc.UITransform;
      EventTarget = _cc.EventTarget;
      v3 = _cc.v3;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      SlotMachineController018 = _unresolved_2.SlotMachineController018;
    }, function (_unresolved_3) {
      ShowContainerController = _unresolved_3.ShowContainerController;
    }, function (_unresolved_4) {
      GameState = _unresolved_4.GameState;
    }, function (_unresolved_5) {
      GameUtils = _unresolved_5.GameUtils;
    }, function (_unresolved_6) {
      NotifyCation = _unresolved_6.NotifyCation;
    }, function (_unresolved_7) {
      NotifySubject = _unresolved_7.NotifySubject;
      GameViewEvents = _unresolved_7.GameViewEvents;
    }, function (_unresolved_8) {
      DefinitionGameConfigData = _unresolved_8.DefinitionGameConfigData;
    }, function (_unresolved_9) {
      WinScore = _unresolved_9.WinScore;
    }, function (_unresolved_10) {
      ShowAniController = _unresolved_10.ShowAniController;
    }, function (_unresolved_11) {
      DYN_NODE_PROPERTIES = _unresolved_11.DYN_NODE_PROPERTIES;
    }, function (_unresolved_12) {
      AniSysTools = _unresolved_12.AniSysTools;
    }, function (_unresolved_13) {
      RPSWildState = _unresolved_13.RPSWildState;
    }, function (_unresolved_14) {
      RPSWildSystem = _unresolved_14.RPSWildSystem;
    }, function (_unresolved_15) {
      GateN2FTransition = _unresolved_15.GateN2FTransition;
    }, function (_unresolved_16) {
      BonusManager = _unresolved_16.BonusManager;
    }, function (_unresolved_17) {
      TransitionsState = _unresolved_17.TransitionsState;
    }, function (_unresolved_18) {
      ProcessSymbolData = _unresolved_18.ProcessSymbolData;
    }, function (_unresolved_19) {
      BuyFgController = _unresolved_19.BuyFgController;
    }, function (_unresolved_20) {
      JpShowController = _unresolved_20.JpShowController;
    }, function (_unresolved_21) {
      FG_BkgController = _unresolved_21.FG_BkgController;
    }, function (_unresolved_22) {
      FG2_BkgController = _unresolved_22.FG2_BkgController;
    }, function (_unresolved_23) {
      FindNode = _unresolved_23.FindNode;
    }, function (_unresolved_24) {
      GenericUIManager = _unresolved_24.GenericUIManager;
    }, function (_unresolved_25) {
      PlayerInfo = _unresolved_25.PlayerInfo;
    }, function (_unresolved_26) {
      ShowBottomTextStatus = _unresolved_26.ShowBottomTextStatus;
    }, function (_unresolved_27) {
      AudioManager = _unresolved_27.AudioManager;
      SOUND_TYPE = _unresolved_27.SOUND_TYPE;
    }, function (_unresolved_28) {
      SoundList = _unresolved_28.SoundList;
      AudioSourceList = _unresolved_28.AudioSourceList;
      MusicList = _unresolved_28.MusicList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9669eXSZm1PqI3LaAQG/+6+", "GameViewManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'randomRangeInt', 'UITransform', 'EventTarget', 'Vec3', 'v3', 'Sprite', 'find', 'Size', 'Layers', 'Game', 'UIOpacity']); //import { BonusData } from '../GameDisplay/FGController/BonusComponent/FG_bonusDataDef';


      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 這個自己乖乖寫吧
       */

      ({
        FORECAST_REEL,
        WILD_LIST,
        FORECAST_FOR_REEL,
        REEL_AMOUNT,
        SPECIAL_SYMBOL_LIST,
        PFB_SYMBOL_ANI,
        //--prefab id(動態)
        NO_MOTIONICON_LIST,
        HIGH_ODDS_SYMBOL_LIST
      } = _crd && DefinitionGameConfigData === void 0 ? (_reportPossibleCrUseOfDefinitionGameConfigData({
        error: Error()
      }), DefinitionGameConfigData) : DefinitionGameConfigData);
      SPIN_DELAY = 1000; // 定義延遲常數

      FG_DELAY = 500; // 定義延遲常數

      NO_CAMP_DATA = -1; // 定義無陣營資料(NG_game)

      _export("GameViewManager", GameViewManager = (_dec = ccclass('GameViewManager'), _dec2 = property({
        type: _crd && SlotMachineController018 === void 0 ? (_reportPossibleCrUseOfSlotMachineController({
          error: Error()
        }), SlotMachineController018) : SlotMachineController018,
        visible: true,
        displayName: 'SlotMachineController'
      }), _dec3 = property({
        type: _crd && ShowContainerController === void 0 ? (_reportPossibleCrUseOfShowContainerController({
          error: Error()
        }), ShowContainerController) : ShowContainerController,
        visible: true,
        displayName: 'ShowContainerController',
        tooltip: '用來控制顯示的容器(切換模式使用)'
      }), _dec4 = property({
        type: _crd && ShowAniController === void 0 ? (_reportPossibleCrUseOfShowAniController({
          error: Error()
        }), ShowAniController) : ShowAniController,
        visible: true,
        displayName: 'GameAniShowSystem',
        tooltip: '動畫控制器'
      }), _dec5 = property({
        type: _crd && WinScore === void 0 ? (_reportPossibleCrUseOfWinScore({
          error: Error()
        }), WinScore) : WinScore,
        visible: true,
        displayName: 'WinScore',
        tooltip: '得分顯示動畫'
      }), _dec6 = property({
        type: _crd && RPSWildSystem === void 0 ? (_reportPossibleCrUseOfRPSWildSystem({
          error: Error()
        }), RPSWildSystem) : RPSWildSystem,
        visible: true,
        displayName: 'RPSWildSystem',
        tooltip: 'wild系統'
      }), _dec7 = property({
        type: _crd && GateN2FTransition === void 0 ? (_reportPossibleCrUseOfGateN2FTransition({
          error: Error()
        }), GateN2FTransition) : GateN2FTransition,
        visible: true,
        displayName: 'GateN2FTransition',
        tooltip: '轉場效果控制'
      }), _dec8 = property({
        type: _crd && BonusManager === void 0 ? (_reportPossibleCrUseOfBonusManager({
          error: Error()
        }), BonusManager) : BonusManager,
        visible: true,
        displayName: 'FG_BonusManagerController',
        tooltip: 'FG_bonus系統'
      }), _dec9 = property({
        type: _crd && BuyFgController === void 0 ? (_reportPossibleCrUseOfBuyFgController({
          error: Error()
        }), BuyFgController) : BuyFgController,
        visible: true,
        displayName: 'BuyFGGuiController',
        tooltip: 'BuyFG系統'
      }), _dec10 = property({
        type: _crd && JpShowController === void 0 ? (_reportPossibleCrUseOfJpShowController({
          error: Error()
        }), JpShowController) : JpShowController,
        visible: true,
        displayName: 'JpShowController',
        tooltip: 'jp動畫控制器'
      }), _dec11 = property({
        type: _crd && FG_BkgController === void 0 ? (_reportPossibleCrUseOfFG_BkgController({
          error: Error()
        }), FG_BkgController) : FG_BkgController,
        visible: true,
        displayName: 'FG_Ali_ShowVertical_ANI_Node',
        tooltip: 'fg阿里直板使用的動畫'
      }), _dec12 = property({
        type: _crd && FG2_BkgController === void 0 ? (_reportPossibleCrUseOfFG2_BkgController({
          error: Error()
        }), FG2_BkgController) : FG2_BkgController,
        visible: true,
        displayName: 'FG_Thieves_ShowVertical_ANI_Node',
        tooltip: 'fg盜賊直板使用的動畫'
      }), _dec(_class = (_class2 = class GameViewManager extends EventTarget {
        //---是否為自動旋轉模式
        set isBuyFG(value) {
          this._isBuyFG = value;
        }

        set isAutoSpinMode(value) {
          this._isAutoSpinMode = value;

          if (this._isAutoSpinMode) {
            this._buyFGController.disableBuyFgBtn();
          } else {
            this.reOpenFgBtn();
          }
        }

        constructor() {
          var _this;

          super();
          _this = this;

          _initializerDefineProperty(this, "_slotMachineController", _descriptor, this);

          //--不同遊戲下的陣營相關背景變化(包含資料的寫入)
          _initializerDefineProperty(this, "_showContainerController", _descriptor2, this);

          //--動畫控制器
          _initializerDefineProperty(this, "_showAniSystem", _descriptor3, this);

          _initializerDefineProperty(this, "_winScore", _descriptor4, this);

          //--wild系統
          _initializerDefineProperty(this, "_rpsWildSystem", _descriptor5, this);

          //--轉場效果控制
          _initializerDefineProperty(this, "_gateN2FTransition", _descriptor6, this);

          //--FG_bonus系統
          _initializerDefineProperty(this, "_fgBonusManager", _descriptor7, this);

          _initializerDefineProperty(this, "_buyFGController", _descriptor8, this);

          _initializerDefineProperty(this, "_JpShowController", _descriptor9, this);

          _initializerDefineProperty(this, "_fgAliShowVerticalAniNode", _descriptor10, this);

          _initializerDefineProperty(this, "_fgThievesShowVerticalAniNode", _descriptor11, this);

          this._processSymbolData = void 0;
          this._currentSlotInfo = void 0;
          //--目標資料
          this._serverBackSlotInfo = void 0;
          //---server結算的資料
          this._currentGameState = void 0;
          this._currentCampData = void 0;
          //--NG模式=-1
          this._isBuyFG = false;
          //--已購買FG的狀態
          this._currentOpenFgCampData = -1;
          //--FG的陣營資料
          this._currentTurboSpeed = false;
          //--是否為turbo模式
          this._isThisRound = false;
          //--是否為這一輪的狀態
          this._startGetScoreInThisRound = false;
          //--是否開始計算這一輪的得分
          this._isStop = false;
          //--是否已經按下stop按鈕(startSpin會關閉)
          this._temporaryIProcessSlotData = void 0;
          this._bonusShowAniData = [];
          this._isAutoSpinMode = false;
          this.testPromiseFunc = /*#__PURE__*/_asyncToGenerator(function* () {
            yield (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).DeferByTweenPromise(3);
            console.log('testFunc_tweenReady');
          });

          //--轉場關門換圖
          this.allTransitionCloseDoorReadyHandler = () => {
            this._rpsWildSystem.closeWildSystemVisible();

            this._slotMachineController.setGameState((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME, this._currentCampData);

            this.changeGameMode((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME, this._currentCampData); //--整個轉完再做changeGameMode

            this._showContainerController.changeContainerStateForTransition((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME, this._currentCampData);
          };

          //--fg結算完畢後的callback(click的時候不會進來)
          this.fgCloseToChangeForCloseHandler = () => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playMusic((_crd && MusicList === void 0 ? (_reportPossibleCrUseOfMusicList({
              error: Error()
            }), MusicList) : MusicList).NgBgm); //--都完成後回復到NG要call this._gateN2FTransition.resetState()

            this._gateN2FTransition.cleanTransition();

            this.reOpenFgBtn();

            this._buyFGController.openForFGFinish();
          };

          this.changeLayerDuringTransition = () => {
            this._showContainerController.changeBGContainerLayerDuringTransition(this._currentCampData);
          };

          /**
           *滾輪全部停止後的callback--這邊要做的事情 
          * 用gameState來判斷資料的outReelIndex要怎麼給(this._currentGameState)
          * 因為NG/ReSpin模式兩個盤面會分開給(塞在同一個陣列以一個盤面的基礎去給)
          * 去判斷campData來給予不同的reelIndex
          * freeGame的話就直接用outReelIndex
          * 做三層迴圈是要應付如果連線一條以上且是重複單位的情況下(資料會塞成一筆進來)
          * matchPos裡面放的是reel裡面的index(他不是symbol的id)                 
          */
          this.allReelRollEndHandler = /*#__PURE__*/_asyncToGenerator(function* () {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.stopSound([(_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
              error: Error()
            }), AudioSourceList) : AudioSourceList).BasicAS]);

            if (_this._slotMachineController.getFastStopClick()) {
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

            yield _this.handleRpsWildSystem();

            _this.checkIsLastWildRound();

            var totalWinScore = _this.calculateTotalWinScore();

            var winScoreData = _this.createWinScoreData();

            var allIconAniDataForRound = [];
            yield _this.checkAndLoadBonusData(); //--等待所有的bonus動畫都抓完
            //--0708取消
            //this._rpsWildSystem.checkWildIsCampDecidedAndPlay();//--0702新增(猜拳當下不管有沒有中線都要播放connect的wild動畫(拳頭晃一下))

            if (totalWinScore > 0) {
              _this._startGetScoreInThisRound = true; //--強迫關閉右側操作面板按鈕
              //NotifyCation.getInstance().emitSync(NotifySubject.GAME_VIEW_SUBJECT, GameViewEvents.ALL_REEL_END, null);

              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.forceClickMainUIStopBtn();
              yield _this.handleWinCase(winScoreData, allIconAniDataForRound);
            } else {
              //---沒有中獎的情況下要做的事情
              if (!_this._startGetScoreInThisRound) {
                var evtData = {
                  eventType: (_crd && GameViewEvents === void 0 ? (_reportPossibleCrUseOfGameViewEvents({
                    error: Error()
                  }), GameViewEvents) : GameViewEvents).SET_BOTTOM_TEXT,
                  eventData: {
                    status: (_crd && ShowBottomTextStatus === void 0 ? (_reportPossibleCrUseOfShowBottomTextStatus({
                      error: Error()
                    }), ShowBottomTextStatus) : ShowBottomTextStatus).NO_WIN //value: totalMultiplierValue,

                  }
                };
                (_crd && NotifyCation === void 0 ? (_reportPossibleCrUseOfNotifyCation({
                  error: Error()
                }), NotifyCation) : NotifyCation).getInstance().emitSync((_crd && NotifySubject === void 0 ? (_reportPossibleCrUseOfNotifySubject({
                  error: Error()
                }), NotifySubject) : NotifySubject).GAME_VIEW_SUBJECT, evtData.eventType, evtData);
              }

              yield _this.handleNoWinCase();
            }

            _this.checkNextRound();
          });

          this.oneReelRollEndCallBackFromSlot = reelID => {
            if (this._currentSlotInfo.reelInfo.haveForecast) {
              //--第二軸
              if (!this._rpsWildSystem.isWorking) {
                var campData = 0;

                if (reelID == FORECAST_FOR_REEL) {
                  campData = 0;
                } else if (reelID == FORECAST_REEL) {
                  campData = 1;
                }

                var wildData = this.getWildIconData(reelID, this._currentSlotInfo.reelInfo.symbolData);

                if (wildData.wild != -1) {
                  wildData.camp = campData;

                  this._rpsWildSystem.addWildIconCount();

                  this.createWildIconData(wildData);
                }
              }
            } else if (this._fgBonusManager.isWorking) {
              var bonusData = this.getFGBonusData(reelID, this._currentSlotInfo.reelInfo.symbolData);

              if (bonusData.length > 0) {
                this._bonusShowAniData = this._bonusShowAniData.concat(bonusData);
                var soundTarget = bonusData[0].camp == 0 ? (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                  error: Error()
                }), SoundList) : SoundList).TreasureDebut : (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                  error: Error()
                }), SoundList) : SoundList).MoneyDebut;
                (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                  error: Error()
                }), AudioManager) : AudioManager).instance.playSound(soundTarget, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
                  error: Error()
                }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                  error: Error()
                }), AudioSourceList) : AudioSourceList).BtnAS);
                /*
                for (const bonus of bonusData) {
                    let soundTarget;
                    if (bonus.camp == 0) {
                        soundTarget = SoundList.TreasureDebut; //--10箱子
                    } else {
                        soundTarget = SoundList.MoneyDebut;//--11錢袋
                    }
                    AudioManager.instance.playSound(soundTarget, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
                }*/
              }
            } else {
              //---第二軸沒有出現wild但是第5軸出現wild的情況下(沒有聽牌但有wild)
              //---第二軸出現必定聽牌haveForecast=true,所以只需要檢查第5軸
              if (!this._rpsWildSystem.isWorking) {
                var normalWildCampData = 1;

                var _wildData = this.getWildIconData(reelID, this._currentSlotInfo.reelInfo.symbolData);

                if (_wildData.wild != -1) {
                  _wildData.camp = normalWildCampData;

                  this._rpsWildSystem.addWildIconCount();

                  this.createWildIconData(_wildData);
                }
              }
            } //20250610企劃要求又又又又又要改回來啦

            /*
            if (reelID == REEL_AMOUNT - 1) {
                GenericUIManager.instance.forceClickMainUIStopBtn();
            }*/


            if (!this._slotMachineController.getFastStopClick()) {
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
          };

          this.getLoadLanguageSpine = /*#__PURE__*/_asyncToGenerator(function* (prefabKey, bonusData) {
            var spineLanguageNode = yield _this._showAniSystem.addSPNodeInRunningForAwait(prefabKey, bonusData, 98);
            return spineLanguageNode;
          });

          this.setWildIconDarkness = () => {
            this._slotMachineController.setWildModeForGameIconDarkness();
          };
        }

        init() {
          this._currentSlotInfo = null;
          this._serverBackSlotInfo = null;
          this._temporaryIProcessSlotData = null;

          this._slotMachineController.init();

          this._showContainerController.init();

          this._gateN2FTransition.init();

          this._gateN2FTransition.changeSlotStateForCloseFG = this.fgCloseToChangeForCloseHandler;
          this._gateN2FTransition.changeLayerDuringTransition = this.changeLayerDuringTransition; //--showAniSystem的初始化

          this._showAniSystem.init();

          this._winScore.init();

          this._rpsWildSystem.init();

          this._fgBonusManager.init();

          this._buyFGController.init((_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
            error: Error()
          }), PlayerInfo) : PlayerInfo).betValueList);

          this._JpShowController.init();

          this._showAniSystem.winScore = this._winScore;
          this._showAniSystem.wildRPSSystem = this._rpsWildSystem;
          this._showAniSystem.fgBonusSystem = this._fgBonusManager;
          this._showAniSystem.JpShowController = this._JpShowController;
          this._showAniSystem.fgAliShowVerticalAniNode = this._fgAliShowVerticalAniNode;
          this._showAniSystem.fgThievesShowVerticalAniNode = this._fgThievesShowVerticalAniNode;
          this._showAniSystem.slotControllerWildDarkness = this.setWildIconDarkness;
          this._currentGameState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL;
          this._currentCampData = NO_CAMP_DATA; //---slot all stop callback---

          this._slotMachineController.allReelRollEndCallBack = this.allReelRollEndHandler;
          this._slotMachineController.oneReelRollEndCallBack = this.oneReelRollEndCallBackFromSlot;

          this._slotMachineController.setGameState(this._currentGameState, -1);

          this._showContainerController.closeAllShowContainer();

          this._showContainerController.changeGameMode(this._currentGameState, -1); //--處理獲取prefab的icon動畫資料


          this._processSymbolData = new (_crd && ProcessSymbolData === void 0 ? (_reportPossibleCrUseOfProcessSymbolData({
            error: Error()
          }), ProcessSymbolData) : ProcessSymbolData)();
          this._processSymbolData.processGameState = this._currentGameState;
          this._processSymbolData.showAniController = this._showAniSystem; //--20250524

          this._slotMachineController.setProcessAniSymbolData(this._processSymbolData.getSymbolIconAniBeforeRollEnd);

          this._slotMachineController.setGetHighOddSpineAniAfterFGEnd(this._processSymbolData.getHighOddSpineAniAfterFGEnd);

          this._showAniSystem.slotControllerReAddToGameIcon = this._slotMachineController.addBackToGameIcon;
          this._showAniSystem.getAndRemoveSymbolAniNodeWithWorldPos = this._slotMachineController.getAndRemoveSymbolAniNodeWithWorldPos;
          this._showAniSystem.setSingleGameIconBrightness = this._slotMachineController.setSingleGameIconBrightness;
          this._showAniSystem.closeOrOpenAllGameIconBright = this._slotMachineController.closeOrOpenAllGameIconBright;

          this._slotMachineController.changeInitSpineAniNode();
        }

        changeGameMode(gameState, camp) {
          if (this._currentGameState === gameState) {
            return; // 如果狀態沒有改變，則不執行任何操作
          }

          this._currentGameState = gameState;
          this._currentCampData = camp != undefined ? camp : NO_CAMP_DATA;
          this._processSymbolData.processGameState = this._currentGameState;

          this._showAniSystem.changeGameMode(this._currentGameState, this._currentCampData);
        }
        /**
         * 1.gameRoot有更新都會送進來更新
         * 2.在購買FG後要顯示總購買金額,當FG結束後要回復預設金額
         * @param value 
         */


        setPlayerBetValue(value) {
          this._buyFGController.setPlayerBetValue(value);
        }
        /**
         * 開啟購買FG的介面,需要更新玩家當前的下注額度
         * @param betValue 玩家當前的下注額度
         */


        setCurrentBetAndOpenBuyFG(betValue) {
          this._buyFGController.setCurrentBetAndOpenBuyFG(betValue);
        } //========<test code for test>=========


        testCall(value) {
          return;
          this.setSeverReceiveData(value);
          this.allReelRollEndHandler();
        }

        //========<test code for test>=========
        //-----新的一輪都會reset _serverBackSlotInfo
        setSeverReceiveData(data) {
          this.resetDataForNewRound(); //-上保險再重置一次資料狀態

          this._currentCampData = -1;
          this._processSymbolData.currentCamp = -1;
          this._showAniSystem.currentCampFg = -1;
          this._serverBackSlotInfo = data; //-最原始的server資料

          this._isThisRound = true;
          this._startGetScoreInThisRound = false; //--會隨著ng/fg/reSpin的資料變化的每一round的資料(一局內有多個round)

          this._currentSlotInfo = this._serverBackSlotInfo.ngReelInfo;

          if (this._rpsWildSystem) {
            this._rpsWildSystem.resetWild();
          }
        }

        resetDataForNewRound() {
          this._serverBackSlotInfo = null;
          this._currentSlotInfo = null;
          this._temporaryIProcessSlotData = null;
        }

        onBetSelectBtnClickCallback(value) {
          this._buyFGController.setPlayerBetValue(value);
        }

        reOpenFgBtn() {
          if (!(_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.isAutoMode) {
            this._buyFGController.reOpenBuyFgBtn();
          }
        } //--空白按鍵判斷使用(當面板開啟時,空白按鍵不能啟動spin)


        getBuyFgPanelIsOpen() {
          return this._buyFGController.getBuyFgPanelIsOpen();
        }

        startSpin(isTurboMode) {
          //----停止中獎動畫的撥放----

          /**
           * 需要補的部分(播放的中獎動畫寫在別的class)
           * 1.停止中獎動畫的撥放
           * 2.回復滾輪的效果狀態(setIconBrightness/setAllReelBrightness)
           *  */
          this._bonusShowAniData = [];
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSoundLoop((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).SpinRoll, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).BasicAS);
          this._isStop = false;

          this._buyFGController.disableBuyFgBtn();

          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setMainUIToSpinMode(); //---spin按鈕上鎖,變成stopSpin按鈕

          this._currentTurboSpeed = false;

          if (this._isBuyFG) {
            this._currentTurboSpeed = this._isBuyFG;
          } else if ((_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.isTurboOn) {
            this._currentTurboSpeed = true;
          } else {
            this._currentTurboSpeed = isTurboMode;
          }

          this._showAniSystem.cleanAllPlayingAniForNewRound(); //--有條件的混合清除(其他同round接續的表演會用)


          this._slotMachineController.cleanIdleSymbolAnis(); //--上保險,在確保全新round開始前(server資料還沒回來時,清除掉全部的動畫資料)


          if (!this._isThisRound) {
            this._showAniSystem.cleanAllRunningNodesForNewRound();
          }

          if (this._fgBonusManager.isWorking) {
            var reduceMultiplier = this._fgBonusManager.getCamp2MultiplierForReduce();

            this._slotMachineController.calulateFGSymbolList(reduceMultiplier);
          }

          this._slotMachineController.closeOrOpenAllGameIconBright(false);

          this._slotMachineController.startRoll(this._currentTurboSpeed); //--湊滿兩個wild的情況下isWorking會是true


          if (this._rpsWildSystem.isWorking) {
            //--自轉--
            this._rpsWildSystem.setSlotMaxnumTime();

            this._rpsWildSystem.checkRoundAndStartRollWild();
          }
        } //--購買fg的時候資料塞這裡--0627廢棄


        stopSpinForFG(slotData) {
          this._isBuyFG = true; //-忽略resultData.reelInfo.haveForecast,直接停直接猜
        }

        onStopBtnClickHandler() {
          //--玩家按下後gameRoot會處理...
          //--第一筆資料會再onReceiveBet裡面call stopSpin
          this.stopSpin(this._temporaryIProcessSlotData);

          this._slotMachineController.stopRollCallBack();
        } //--寫完server新的資料後會呼叫這個方法


        newRoundDataToStopSpin() {
          this.stopSpin(this._currentSlotInfo);
        } //---滾輪停止---


        stopSpin(slotData) {
          if (this._isStop) return;
          if (!slotData) return; // slotData 為 null，直接退出（不會設 _isStop）

          this._isStop = true;
          /**
           * 第一把currentSlotInfo是NG的資料(onReceiveBet)
           * this._currentSlotInfo = this._serverBackSlotInfo.ngReelInfo;
           * _currentSlotInfo隨著NG/FG/reSpin的資料會變化
           */

          var reelInfo = slotData.reelInfo;

          if (reelInfo.haveForecast && (!this._isBuyFG || !this._currentTurboSpeed)) {
            var canTriggerForecast = !this._rpsWildSystem.isWorking && !this._fgBonusManager.isWorking;

            if (canTriggerForecast) {
              this._slotMachineController.setReadyHand(FORECAST_REEL);
            } //---有聽牌的情況下要做的事情(整條的轉輪要各種騷操作的演)---

            /**
             * 需要送入聽牌的那一軸的index
             * slotMachine 會依序播聽的動畫
             * PS--他會依序加速轉,直到最後一軸停下來
             * ex:slotMachineController.setReadyHand(0);
             * 就會依序從0>1>2>3軸加速轉,直到3軸停下來
             * 如果slotMachineController.setReadyHand(2);
             * 就會依序從0(正常)>1(正常)>2>3軸加速轉,直到3軸停下來
             * 如果slotMachineController.setReadyHand(3);
             * 就會依序從0(正常)>1(正常)>2(正常)>3軸加速轉,直到3軸停下來
             * 正常來說都是最後一軸聽牌
             */

          } //--reelInfo的資料來自_currentSlotInfo(是server資料_serverBackSlotInfo的參照)


          var rawSymbol2D = this.getIconIDTo2DArray(reelInfo.symbolData); //---這邊要給showAniSystem的2d陣列資料

          var clonedSymbol2D = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).deepClone(rawSymbol2D); //--slotMachineController會移除掉原本的symbolData

          this._showAniSystem.ary2dCards = clonedSymbol2D;

          this._slotMachineController.stopRoll(clonedSymbol2D);
        }

        //--20250602為了等所有的bonus動畫的語系都抓完才能進後續動作,不能一軸結束就開始判斷會太快了
        checkAndLoadBonusData() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var allBonusLoadPromises = [];

            for (var bonusItem of _this2._bonusShowAniData) {
              allBonusLoadPromises.push(_this2.createBonusIconData(bonusItem));
            } // 等全部 createBonusIconData 完成後再 resolve


            yield Promise.all(allBonusLoadPromises);
          })();
        }

        /**
         * 20250731新增
         * 確認是否為wild的最後一把,要處理最後一把的動畫
         * Y:持續輪播+取消燈號
         * N:照舊有流程
         */
        checkIsLastWildRound() {
          var isLastWild = false;

          if (this._serverBackSlotInfo.reSpinReelInfo.length == 0 && this._serverBackSlotInfo.freeGameReelInfo.length == 0) {
            isLastWild = true;
          }

          if (this._rpsWildSystem.isWorking) {
            this._rpsWildSystem.isLastWildRound = isLastWild;
          }
        }

        handleRpsWildSystem() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (_this3._rpsWildSystem.isWorking && _this3._rpsWildSystem.isRolling) {
              yield _this3._rpsWildSystem.stopSlotRolling();
            }
          })();
        }

        calculateTotalWinScore() {
          var totalWinScore = this._currentSlotInfo.totalOdd * this._currentSlotInfo.betValue;
          return parseFloat(totalWinScore.toFixed(2));
        }

        createWinScoreData() {
          return {
            baseOdds: 0,
            // 待刪除
            totalOdd: this._currentSlotInfo.totalOdd,
            //--裡面的資料如果是fg的話,他已經是乘上倍率的值(每一輪)
            betValue: this._currentSlotInfo.betValue,
            multiplier: this.getMultiplier()
          };
        }

        getMultiplier() {
          if ('multiplier' in this._currentSlotInfo && typeof this._currentSlotInfo.multiplier === 'number') {
            return this._currentSlotInfo.multiplier;
          } else {
            return -1;
          }
        }

        handleWinCase(winScoreData, allIconAniDataForRound) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var targetData = _this4._currentSlotInfo.winLine;

            _this4.processWinLineData(targetData, allIconAniDataForRound);

            _this4._showAniSystem.sortAnimationLayer(); //----sort layer


            _this4._slotMachineController.closeOrOpenAllGameIconBright(true); //--遮蔽icon的亮度


            var winLineDataForBright = _this4.getWinSymbolDataForBright(allIconAniDataForRound);

            _this4._slotMachineController.openOrCloseSingleGameIconBright(winLineDataForBright);

            var expandData = _this4.expandWinLineDataForGroup(allIconAniDataForRound); //--做得分的表演
            //console.log('check_expandData:', expandData);


            _this4._showAniSystem.winLinesGroupData = expandData;
            yield _this4._showAniSystem.playWinInThisRound(winScoreData);
          })();
        }

        processWinLineData(targetData, allIconAniDataForRound) {
          for (var i = 0; i < targetData.length; i++) {
            for (var j = 0; j < targetData[i].matchPos.length; j++) {
              for (var k = 0; k < targetData[i].matchPos[j].length; k++) {
                var outIndex = this.getOutIndex(targetData, i, k); // 傳遞 targetData

                var inIconIndex = targetData[i].matchPos[j][k];
                this.processIconAnimation(targetData, outIndex, inIconIndex, i, targetData[i].camp, allIconAniDataForRound);
              }
            }
          }
        }

        getOutIndex(targetData, groupIndex, iconIndex) {
          var isNormalOrReSpine = this._currentGameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL || this._currentGameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).RE_SPINE;
          var currentCamp = targetData[groupIndex].camp; //--NG/ReSpin模式是兩個盤面,且要連續3個才會連線,所以資料最少長度一定是3

          if (isNormalOrReSpine) {
            //--盤面長度=3
            if (currentCamp === 0) {
              return iconIndex;
            } else {
              return iconIndex + 3;
            }
          } else {
            //--盤面長度=6
            return iconIndex;
          }
        }
        /**
         * 20250525--
         * 在這邊處理已經先推進去gameIcon的spineNode
         * 
         */


        processIconAnimation(targetData, outIndex, inIconIndex, groupId, camp, allIconAniDataForRound) {
          //-fg的bonus他不會進來連線這裡的分類判斷
          var symbol2ds = this.getIconIDTo2DArray(this._currentSlotInfo.reelInfo.symbolData);

          var pos = this._slotMachineController.getSymbolWorldPosition(outIndex, inIconIndex);

          var symbolId = symbol2ds[outIndex][inIconIndex];
          var iconAniData = {
            outIndex,
            groupId,
            globalPos: pos,
            score: targetData[groupId].odd,
            iconIndex: inIconIndex,
            camp
          };

          if (!WILD_LIST.includes(symbolId)) {
            var existSpineAniNode = null;

            if (HIGH_ODDS_SYMBOL_LIST.includes(symbolId)) {
              //--這邊之前已經在finalRoll的時候塞到gameIcon裡面了..現在要把他抽回來  
              existSpineAniNode = this._slotMachineController.getAndRemoveSymbolAniNodeInReel(outIndex, inIconIndex);
            }

            allIconAniDataForRound.push(iconAniData); //-播放群組[{groupId,reelindex,iocnindex,odd}]PS--同樣群組的會放在一起
            //--這邊要在測試再檢查發現已經有重複的物件在_aryRunningNode裡面會變怎樣,是否如同bug那樣就不拉上來了--20250623

            if (existSpineAniNode) {
              this._processSymbolData.setExistIconAniToAniController(existSpineAniNode, iconAniData, symbol2ds[outIndex][inIconIndex]);
            } else {
              this.setSymbolIconAnimation(iconAniData, symbol2ds);
            }

            this.setSymbolAwardBoxAnimation(iconAniData);
          } else {
            //--wild的icon在oneRollEnd的時候已經推進去了(這邊要塞group的資料)

            /**
            自己挖得巨坑..算分工具是會給予wild的位置資料
            只是因為早期開發時,wild與表演層是在不同的層級當中也不會進入runningNode
            所以送進來的資料是挑掉wild的(沒有推到allIconAniDataForRound裡面,所以在playWinInThisRound的資料中是沒有wild的)
            再送QA時要需要重新再把wild的資料放回runningNode裡面..所以變成自己要再檢查補資料回去
            PS-下個專案不要再把wild與表演層分開了..
             */
            //--connectbox
            //--這邊要在處理如果已經有connectbox的話的下一步...
            //--這邊其實是不會進來的
            var connectBox = this.setSymbolAwardBoxAnimation(iconAniData);

            if (connectBox) {
              connectBox[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].push(99);
            } //--這邊其實是不會進來的
            //--wild


            this._showAniSystem.addGroupByReelIndexAndIconIndexWithIconID({
              reelIndex: outIndex,
              iconIndex: inIconIndex,
              iconID: this.getWildIconData(outIndex, this._currentSlotInfo.reelInfo.symbolData).wild,
              groupId
            });
          }
        } //--沒得分也要秀其他的icon動畫


        handleNoWinCase() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            _this5._showAniSystem.sortAnimationLayer(); //--sort layer


            yield _this5._showAniSystem.playNoWinInThisRound();
          })();
        }

        createBonusIconData(bonusData) {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            var aniShowNode = (_crd && FindNode === void 0 ? (_reportPossibleCrUseOfFindNode({
              error: Error()
            }), FindNode) : FindNode).findChildByNameRecursive(_this6._showAniSystem.node, 'SymbolAniDisplayNode');
            var targetShowAniData = bonusData;
            var prefabKey = targetShowAniData.camp == 0 ? PFB_SYMBOL_ANI + '10' : PFB_SYMBOL_ANI + '11';
            var bonusDataWithLanguage = yield _this6.getLoadLanguageSpine(prefabKey, targetShowAniData);
            var cop = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(bonusDataWithLanguage.spNode);
            cop.init();

            var wPos = _this6._slotMachineController.getSymbolWorldPosition(bonusDataWithLanguage.aniData.reelIndex, bonusDataWithLanguage.aniData.iconIndex);

            _this6._fgBonusManager.setSingleWorldPosByIndex(bonusDataWithLanguage.aniData.reelIndex, bonusDataWithLanguage.aniData.iconIndex, wPos);

            var localPos = aniShowNode.getComponent(UITransform).convertToNodeSpaceAR(wPos);
            bonusDataWithLanguage.spNode.setPosition(localPos);
            bonusDataWithLanguage.spNode.getComponent(UIOpacity).opacity = 255;
            cop.playAni('appear'); //await GameUtils.Defer(200);

            yield (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).DeferByTweenPromise(200 / 1000); //--原本單位是毫秒現在換算成秒
          })();
        }

        createWildIconData(wildData) {
          //-get world position
          var wpos = this._slotMachineController.getSymbolWorldPosition(wildData.reelIndex, wildData.iconIndex);

          var wildNode = this._processSymbolData.createWildIconData(wildData, wpos);

          var wildDisplayNode = this._rpsWildSystem.singleSlotItemNode;
          var localPos = wildDisplayNode.getComponent(UITransform).convertToNodeSpaceAR(wpos);
          wildNode.active = true;
          wildDisplayNode.addChild(wildNode);
          var aniInterfaceComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
            error: Error()
          }), AniSysTools) : AniSysTools).findAndGetIAniComponent(wildNode); //--20250619(因為wildSystem會在這邊關閉wild的icon,所以要先打開(closeWildAniNodeWithoutDoubleWild))

          aniInterfaceComponent.node.active = true;

          this._rpsWildSystem.setWildIcon(aniInterfaceComponent, wildData, {
            reelIndex: wildData.reelIndex,
            iconIndex: wildData.iconIndex,
            iconID: wildData.wild,
            groupID: 99
          });

          wildNode.setPosition(localPos);

          this._rpsWildSystem.playWildFirstAppearAni(wildData.camp);
        }

        setSymbolIconAnimation(aniIconData, symbolData) {
          this._processSymbolData.setSymbolIconAnimation(aniIconData, symbolData);
        }

        setSymbolAwardBoxAnimation(aniIconData) {
          var connectBox = this._processSymbolData.setSymbolAwardBoxAnimation(aniIconData);

          if (connectBox) {
            if (this._fgBonusManager.isWorking) {
              connectBox.active = false;
            } else if (this._rpsWildSystem.isWorking) {
              return connectBox;
            }
          } //--wild的connectBox這時候會是回傳null


          return null;
        }

        checkNextRound() {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            if (_this7._serverBackSlotInfo.reSpinReelInfo.length > 0) {
              _this7._rpsWildSystem.setResultTitle(3);

              var data = _this7._serverBackSlotInfo.reSpinReelInfo.shift(); //======這邊要小心,直接換資料了============================================================


              _this7._currentSlotInfo = data; //-_currentSlotInfo

              var round = _this7._rpsWildSystem.guess_Round;
              _this7._rpsWildSystem.guess_Round = round + 1;

              _this7.changeWildState(data);

              yield _this7._showAniSystem.changeWildFrame();

              _this7.changeGameMode((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).RE_SPINE);

              _this7.processRound((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).RE_SPINE, data);
            } else if (_this7._serverBackSlotInfo.freeGameReelInfo.length > 0) {
              var fgData = _this7._serverBackSlotInfo.freeGameReelInfo.shift();

              var symbol2dsAndCamp = _this7.getIconIDTo2DArrayWithCamp(fgData.reelInfo.symbolData);

              if (!_this7._fgBonusManager.isWorking) {
                _this7._isBuyFG = false;
                _this7._currentCampData = symbol2dsAndCamp.camp; //--開啟FG的陣營

                _this7._showAniSystem.currentCampFg = symbol2dsAndCamp.camp;
                _this7._processSymbolData.currentCamp = symbol2dsAndCamp.camp; //--第一次進FG.準備開啟轉場

                _this7._slotMachineController.reSetCurrentAllSymbolList_FG();

                _this7._gateN2FTransition.openStartTransition();

                yield _this7._gateN2FTransition.setCamp(symbol2dsAndCamp.camp); //--這個要用算的,在serverBack的時候算

                _this7._rpsWildSystem.closeWildSymbolItemForTransition();

                _this7._buyFGController.closeForFG();

                yield _this7._gateN2FTransition.playAinForStart(_this7.allTransitionCloseDoorReadyHandler); //---轉場結束相關的資料重設(in)

                _this7._showContainerController.reSetContainerLayer();

                _this7._fgBonusManager.openFGBonus(symbol2dsAndCamp.camp);
              } else {
                _this7._fgBonusManager.cleanThisRoundForNext();
              } //======這邊要小心,直接換資料了============================================================


              _this7._currentSlotInfo = fgData; //--每一輪的盤面資料都要倒進去

              _this7._fgBonusManager.setSingleRoundData(symbol2dsAndCamp.symbol2ds);

              _this7.processRound((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).FREE_GAME, fgData);
            } else {
              if (_this7._fgBonusManager.isWorking) {
                //--結算轉場+移除fg
                _this7._gateN2FTransition.resetState();

                _this7._gateN2FTransition.transitionState = (_crd && TransitionsState === void 0 ? (_reportPossibleCrUseOfTransitionsState({
                  error: Error()
                }), TransitionsState) : TransitionsState).OUT; //--舊版只計算FG的獎金
                //let totalWinScore: number = (this._serverBackSlotInfo.totalOddsForFG * this._serverBackSlotInfo.betValue).fixed();
                //--新版是會計算FG+NG的獎金(跟幽靈旅店相同)-20250523

                var totalWinScore = (_this7._serverBackSlotInfo.allRoundOdds * _this7._serverBackSlotInfo.betValue).fixed();

                yield _this7._gateN2FTransition.closeFG(totalWinScore);

                _this7._showAniSystem.cleanAllPlayingAniForNewRound();

                _this7._showAniSystem.stopShowVerticalAni(); //--20250610這邊要換掉FG陣營的spine skin圖片


                _this7._slotMachineController.resetSpineAniNodeSkinForCampAfterFG();

                _this7._showAniSystem.currentCampFg = -1;
                _this7._processSymbolData.currentCamp = -1;

                _this7._fgBonusManager.closeFGBonus();

                _this7._rpsWildSystem.openWildSystemVisible();

                _this7._showContainerController.reSetBkgContainerAni();

                _this7._slotMachineController.closeOrOpenAllGameIconBright(false);
              }

              _this7._rpsWildSystem.checkWildWithoutReSpin();

              _this7.changeGameMode((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).NORMAL);

              _this7.processNormalRound();
            }
          })();
        } //--freeGame/reSpine的處理


        processRound(gameState, data) {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            //--盤面reel重新排列
            var fgCampData = _this8.getIconCampForIcon2DArray(data.reelInfo.symbolData);

            var delayTime = 0;

            if (gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).RE_SPINE) {
              _this8._slotMachineController.setGameState(gameState);

              _this8._rpsWildSystem.startWildSystem(); //--每一輪都進入且檢查是否吻合開始計算勝場條件


              delayTime = SPIN_DELAY;
            } else {
              _this8._slotMachineController.setGameState(gameState, fgCampData);

              _this8._fgBonusManager.changeTotalRounds(); //--進行下一輪的FG


              delayTime = FG_DELAY; // 使用定義的延遲常數
            }

            _this8._showContainerController.changeGameMode(gameState, fgCampData);

            if (!_this8._startGetScoreInThisRound) {
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.showBottomTextStartSpin();
            }
            /**
             * 這是給 this._slotMachineController.stopRollCallBack
             * 使用的資料,因為他會直接灌進stopSpin裡面
             */


            _this8._temporaryIProcessSlotData = data;

            _this8.startSpin(false); //await GameUtils.Defer(delayTime); // 使用定義的延遲常數


            yield (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).DeferByTweenPromise(delayTime / 1000); // 使用定義的延遲常數

            _this8.stopSpin(data);
          })();
        } //---wild重置資料


        changeWildState(data) {
          if (this._rpsWildSystem.isWorking) {
            if (this._rpsWildSystem.wildState >= (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
              error: Error()
            }), RPSWildState) : RPSWildState).WILD_2) {
              var connectBox = this._showAniSystem.getWildConnectBoxNode();

              for (var item of connectBox) {
                item.setScale(v3(1.2, 1.2, 1.2));
              }
            }

            this._rpsWildSystem.resetSingleSlot(); //----左邊的wild


            var leftWildComp = this._rpsWildSystem.wild_left;
            var wildData = this.getWildIconData(FORECAST_FOR_REEL, data.reelInfo.symbolData);
            wildData.camp = 0;

            this._processSymbolData.reSetWildNodeDataWithComponent(leftWildComp, wildData);

            leftWildComp.campData = wildData.camp; //----右邊的wild

            var rightWildComp = this._rpsWildSystem.wild_right;
            var wildData_R = this.getWildIconData(FORECAST_REEL, data.reelInfo.symbolData);

            this._processSymbolData.reSetWildNodeDataWithComponent(rightWildComp, wildData_R);

            wildData_R.camp = 1;
            rightWildComp.campData = wildData_R.camp;
          }
        } //--正常NG的處理

        /**
         * 正常結束這一round的處理
         * 當fg和reSpine的資料都清空後(或是為空)即進入結束這一round的處理
         */


        processNormalRound(freeEnd) {
          var _this9 = this;

          return _asyncToGenerator(function* () {
            if (freeEnd === void 0) {
              freeEnd = false;
            }

            //--盤面reel重新排列 
            _this9._isThisRound = false; //--這一輪結束後要重置為false

            _this9.resetDataForNewRound(); //-結束這一round後重置資料0624(新增)


            _this9._slotMachineController.setGameState((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).NORMAL);

            _this9._showContainerController.changeGameMode((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).NORMAL, NO_CAMP_DATA); // 使用定義的常數


            if (!_this9._gateN2FTransition.isRunning && !(_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.isAutoMode) {
              _this9._buyFGController.enableBuyFgBtn();
            }

            (_crd && NotifyCation === void 0 ? (_reportPossibleCrUseOfNotifyCation({
              error: Error()
            }), NotifyCation) : NotifyCation).getInstance().emitSync((_crd && NotifySubject === void 0 ? (_reportPossibleCrUseOfNotifySubject({
              error: Error()
            }), NotifySubject) : NotifySubject).GAME_VIEW_SUBJECT, (_crd && GameViewEvents === void 0 ? (_reportPossibleCrUseOfGameViewEvents({
              error: Error()
            }), GameViewEvents) : GameViewEvents).SHOW_END, null);
          })();
        } //--依照group分類


        expandWinLineDataForGroup(value) {
          if (!value || value.length === 0) {
            return [];
          }

          var result = [];
          var currentGroup = [];
          var currentGroupId = null;

          for (var item of value) {
            if (currentGroupId === null) {
              currentGroupId = item.groupId;
              currentGroup.push({
                groupID: item.groupId,
                reelIndex: item.outIndex,
                iconIndex: item.iconIndex,
                odd: item.score
              });
            } else if (currentGroupId === item.groupId) {
              currentGroup.push({
                groupID: item.groupId,
                reelIndex: item.outIndex,
                iconIndex: item.iconIndex,
                odd: item.score
              });
            } else {
              result.push(currentGroup);
              currentGroup = [{
                groupID: item.groupId,
                reelIndex: item.outIndex,
                iconIndex: item.iconIndex,
                odd: item.score
              }];
              currentGroupId = item.groupId;
            }
          }

          if (currentGroup.length > 0) {
            result.push(currentGroup);
          }

          return result;
        }
        /**
        * 滿足openOrCloseSingleGameIconBright的資料格式
        * 用來開關icon的亮度
        * @returns 
        */


        getWinSymbolDataForBright(value) {
          var returnData = [];
          var reelDataMap = new Map();

          for (var iconData of value) {
            if (!reelDataMap.has(iconData.outIndex)) {
              reelDataMap.set(iconData.outIndex, {
                reelIndex: iconData.outIndex,
                iconIndex: new Set(),
                brightnessFlag: false
              });
            }

            var reelData = reelDataMap.get(iconData.outIndex);

            if (!reelData.iconIndex.has(iconData.iconIndex)) {
              // 如果 iconIndex 不存在，則添加到 reelData.iconIndex 中
              reelData.iconIndex.add(iconData.iconIndex);
            }
          }

          return returnData;
        }

        getFGBonusData(reelID, iconData) {
          var symbol2dsAndCamp = this.getIconIDTo2DArrayWithCamp(iconData);
          var symbolData = symbol2dsAndCamp.symbol2ds;
          var bonusDatas = [];
          var returnData = {
            reelIndex: -1,
            iconIndex: -1,
            iconID: -1,
            camp: symbol2dsAndCamp.camp
          };
          var targetReel = symbolData[reelID]; //--會有不同的遊戲狀態(reSpin/freeGame)的資料,不能直接取結果的盤面

          for (var i = 0; i < targetReel.length; i++) {
            if (SPECIAL_SYMBOL_LIST.includes(targetReel[i])) {
              returnData = {
                reelIndex: reelID,
                iconIndex: i,
                iconID: targetReel[i],
                camp: symbol2dsAndCamp.camp
              };
              bonusDatas.push(returnData); //break;
            }
          }

          return bonusDatas;
        }
        /**
         * 20250417
         * 78為了細單要取得陣營,所以將原本的ReelInfo.symbolData改成IconData(原本是number[][])
         * ps--slotMachine需要的是number[][]的資料,所以要將IconData[][]轉出number[][]
         * @param iconData2DArray {iconID: number, camp: number}[][] 2D陣列
         * @returns 
         */


        getIconIDTo2DArray(iconData2DArray) {
          var ary2d = [];

          for (var row of iconData2DArray) {
            var newRow = [];

            for (var iconData of row) {
              newRow.push(iconData.iconID);
            }

            ary2d.push(newRow);
          }

          return ary2d;
        }

        getIconIDTo2DArrayWithCamp(iconData2DArray) {
          var ary2d = this.getIconIDTo2DArray(iconData2DArray);
          var campData = iconData2DArray[0][0].camp;
          return {
            symbol2ds: ary2d,
            camp: campData
          };
        }

        getIconCampForIcon2DArray(iconData2DArray) {
          return iconData2DArray[0][0].camp;
        }

        getWildIconData(reelID, iconData) {
          var symbol2dsAndCamp = this.getIconIDTo2DArrayWithCamp(iconData);
          var symbolData = symbol2dsAndCamp.symbol2ds;
          var returnData = {
            reelIndex: -1,
            iconIndex: -1,
            wild: -1,
            camp: -1
          }; //let targetReel: number[] = this._currentSlotInfo.reelInfo.symbolData[reelID];

          var targetReel = symbolData[reelID]; //--會有不同的遊戲狀態(reSpin/freeGame)的資料,不能直接取結果的盤面

          for (var i = 0; i < targetReel.length; i++) {
            if (WILD_LIST.includes(targetReel[i])) {
              returnData.reelIndex = reelID;
              returnData.iconIndex = i;
              returnData.wild = targetReel[i];
              break;
            }
          }

          return returnData;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_slotMachineController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_showContainerController", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_showAniSystem", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_winScore", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_rpsWildSystem", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_gateN2FTransition", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_fgBonusManager", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_buyFGController", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_JpShowController", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_fgAliShowVerticalAniNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_fgThievesShowVerticalAniNode", [_dec12], {
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
//# sourceMappingURL=1ecde92ff2456602185f29f99d58b3db5e698634.js.map