System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, color, UITransform, Vec2, AudioClip, BasicShowAniProcess, GameState, GameUtilsTools, NotifyCation, SymbolOwnerAgentID, DYN_NODE_PROPERTIES, AnimationControllersPoolManager, AnimationStateType, GameGlobalKeys, MultiSpineController, SpineController, AnimationController, SlotRequestEvent, SlotNotifySubject, SlotResponseSubject, AniSysTools, DefinitionGameConfigData, DYN_WILD_INFO, Call_Function_Type, WinScore, WildMoveFXCtrl, CountTimesFXController, GlobalAccessReader, JpShowCtrl1016, BasicShowResultProcessKey, SoundList, AudioSourceList, AudioManager, NewFlashModeEnum, SOUND_TYPE, WildLayerCtrl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, STAGE_ID, DEFAULT_GROUP_AWARD, DEFAULT_GROUP_WILD, DEFAULT_GROUP_SCATTER, PREFAB_ID_AWARD_BOX, WILD_PLAY_COUNT_NAME, SP_SHOWING, WILD_EXPECT_ANI_ID, SCATTER_EXPECT_ANI_ID, SPECIAL_WIN_THRESHOLD, WILD_LIST, SCATTER_LIST, HIGH_ODDS_SYMBOL_LIST, MIDDLE_ODDS_SYMBOL_LIST, LOW_ODDS_SYMBOL_LIST, REGULAR_ODDS_SYMBOL_LIST, REEL_AMOUNT, WILD_SET, WILD_COUNT_ANI_STATE_NAME, SCATTER_FG_ANI_STATE_NAME, DEBUG_TITLE, DEBUG_TITLE2, SIGNAL_KEY, ccclass, property, ShowAniProcessController1016;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasicShowAniProcess(extras) {
    _reporterNs.report("BasicShowAniProcess", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinScoreData(extras) {
    _reporterNs.report("WinScoreData", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchInfoForRound(extras) {
    _reporterNs.report("IMatchInfoForRound", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReelInfo(extras) {
    _reporterNs.report("IReelInfo", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayAniData(extras) {
    _reporterNs.report("IPlayAniData", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMachPosInfo(extras) {
    _reporterNs.report("IMachPosInfo", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtilsTools(extras) {
    _reporterNs.report("GameUtilsTools", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifyCation(extras) {
    _reporterNs.report("NotifyCation", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolOwnerAgentID(extras) {
    _reporterNs.report("SymbolOwnerAgentID", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAnimationControl(extras) {
    _reporterNs.report("IAnimationControl", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDYN_NODE_PROPERTIES(extras) {
    _reporterNs.report("DYN_NODE_PROPERTIES", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationControllersPoolManager(extras) {
    _reporterNs.report("AnimationControllersPoolManager", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationStateType(extras) {
    _reporterNs.report("AnimationStateType", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameGlobalKeys(extras) {
    _reporterNs.report("GameGlobalKeys", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMultiSpineController(extras) {
    _reporterNs.report("MultiSpineController", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineController(extras) {
    _reporterNs.report("SpineController", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationController(extras) {
    _reporterNs.report("AnimationController", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotRequestEvent(extras) {
    _reporterNs.report("SlotRequestEvent", "../../EventData1016/DefinitionEventData1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotNotifySubject(extras) {
    _reporterNs.report("SlotNotifySubject", "../../EventData1016/DefinitionEventData1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotResponseSubject(extras) {
    _reporterNs.report("SlotResponseSubject", "../../EventData1016/DefinitionEventData1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniSysTools(extras) {
    _reporterNs.report("AniSysTools", "../../MyUtils/AnimationSystemV2/AniTools/AniSysTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDefinitionGameConfigData(extras) {
    _reporterNs.report("DefinitionGameConfigData", "../../DefinitionGameData1016/GameConfigInstance", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDYN_WILD_INFO(extras) {
    _reporterNs.report("DYN_WILD_INFO", "../../DefinitionGameData1016/GameConfigInstance", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFunctionOwnerAgent(extras) {
    _reporterNs.report("IFunctionOwnerAgent", "../../AniMediator1016/CrossSystemFun/IFunctionOwnerAgent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunctionType(extras) {
    _reporterNs.report("FunctionType", "../../AniMediator1016/CrossSystemFun/IFunctionOwnerAgent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCall_Function_Type(extras) {
    _reporterNs.report("Call_Function_Type", "../../AniMediator1016/CrossSystemFun/DefinitionFunctionType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIDirtyCrossSysServiceFacade(extras) {
    _reporterNs.report("IDirtyCrossSysServiceFacade", "../../AniMediator1016/CrossSystemFun/IDirtyCrossSysServiceFacade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinScore(extras) {
    _reporterNs.report("WinScore", "../WinScore/WinScore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIWildMovementDataNew(extras) {
    _reporterNs.report("IWildMovementDataNew", "../../Slot/ISlotDefinitionData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWildMoveFXCtrl(extras) {
    _reporterNs.report("WildMoveFXCtrl", "../WildMoveEffectController/WildMoveFXCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIWildMoveData(extras) {
    _reporterNs.report("IWildMoveData", "../WildMoveEffectController/WildMoveFXCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIStateCondition(extras) {
    _reporterNs.report("IStateCondition", "../../DefinitionGameData1016/GameConfigInstance", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCountTimesFXController(extras) {
    _reporterNs.report("CountTimesFXController", "../CountTimesFXController/CountTimesFXController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalAccessReader(extras) {
    _reporterNs.report("GlobalAccessReader", "../../DefinitionGameData1016/AccessDefs/GlobalAccess", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJpShowCtrl(extras) {
    _reporterNs.report("JpShowCtrl1016", "../JpShowController/JpShowCtrl1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicShowResultProcessKey(extras) {
    _reporterNs.report("BasicShowResultProcessKey", "../../MyUtils/AsyncScope/Definitions/BasicGameFlowProcessKey", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../../DefinitionGameData1016/SoundList1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioSourceList(extras) {
    _reporterNs.report("AudioSourceList", "../../DefinitionGameData1016/SoundList1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameBGSoundCtrl(extras) {
    _reporterNs.report("GameBGSoundCtrl1016", "../../GameBGSoundCtrl1016/GameBGSoundCtrl1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNewFlashModeEnum(extras) {
    _reporterNs.report("NewFlashModeEnum", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOUND_TYPE(extras) {
    _reporterNs.report("SOUND_TYPE", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWildLayerCtrl(extras) {
    _reporterNs.report("WildLayerCtrl", "../WildMoveEffectController/WildLayerCtrl", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      color = _cc.color;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      AudioClip = _cc.AudioClip;
    }, function (_unresolved_2) {
      BasicShowAniProcess = _unresolved_2.BasicShowAniProcess;
      GameState = _unresolved_2.GameState;
      GameUtilsTools = _unresolved_2.GameUtilsTools;
      NotifyCation = _unresolved_2.NotifyCation;
      SymbolOwnerAgentID = _unresolved_2.SymbolOwnerAgentID;
      DYN_NODE_PROPERTIES = _unresolved_2.DYN_NODE_PROPERTIES;
      AnimationControllersPoolManager = _unresolved_2.AnimationControllersPoolManager;
      AnimationStateType = _unresolved_2.AnimationStateType;
      GameGlobalKeys = _unresolved_2.GameGlobalKeys;
      MultiSpineController = _unresolved_2.MultiSpineController;
      SpineController = _unresolved_2.SpineController;
      AnimationController = _unresolved_2.AnimationController;
    }, function (_unresolved_3) {
      SlotRequestEvent = _unresolved_3.SlotRequestEvent;
      SlotNotifySubject = _unresolved_3.SlotNotifySubject;
      SlotResponseSubject = _unresolved_3.SlotResponseSubject;
    }, function (_unresolved_4) {
      AniSysTools = _unresolved_4.AniSysTools;
    }, function (_unresolved_5) {
      DefinitionGameConfigData = _unresolved_5.DefinitionGameConfigData;
      DYN_WILD_INFO = _unresolved_5.DYN_WILD_INFO;
    }, function (_unresolved_6) {
      Call_Function_Type = _unresolved_6.Call_Function_Type;
    }, function (_unresolved_7) {
      WinScore = _unresolved_7.WinScore;
    }, function (_unresolved_8) {
      WildMoveFXCtrl = _unresolved_8.WildMoveFXCtrl;
    }, function (_unresolved_9) {
      CountTimesFXController = _unresolved_9.CountTimesFXController;
    }, function (_unresolved_10) {
      GlobalAccessReader = _unresolved_10.GlobalAccessReader;
    }, function (_unresolved_11) {
      JpShowCtrl1016 = _unresolved_11.JpShowCtrl1016;
    }, function (_unresolved_12) {
      BasicShowResultProcessKey = _unresolved_12.BasicShowResultProcessKey;
    }, function (_unresolved_13) {
      SoundList = _unresolved_13.SoundList;
      AudioSourceList = _unresolved_13.AudioSourceList;
    }, function (_unresolved_14) {
      AudioManager = _unresolved_14.AudioManager;
      NewFlashModeEnum = _unresolved_14.NewFlashModeEnum;
      SOUND_TYPE = _unresolved_14.SOUND_TYPE;
    }, function (_unresolved_15) {
      WildLayerCtrl = _unresolved_15.WildLayerCtrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a861dCtwalDkqb29vxW6m7Z", "ShowAniProcessController1016", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Vec3', 'color', 'UITransform', 'Vec2', 'Game', 'AudioClip', 'AudioSource', 'tween']); //import { NewFlashModeEnum } from 'db://assets/GenericUI/Scripts/MainUI';
      //import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';


      /**
       * T=Line中線的資料格式定義
       * W=winScoreData
       * P=playIAniData
       * <T, W, P>
       */
      //--要添加動畫物件的顯示容器清單
      STAGE_ID = {
        SYMBOL_SHOW_CONTAINER: "ShowWinSymbolContainer",
        WILD_SHOW_CONTAINER: "ShowWholeWildContainer",
        WILD_NO_MOVEMENT_SHOW_CONTAINER: "ShowNotMovementWildContainer",
        SCATTER_SHOW_CONTAINER: "ShowScatterContainer",
        AWARD_BOX_SHOW_CONTAINER: "ShowAwardBoxContainer",
        RS_FG_FX_SHOW_CONTAINER: "ShowWildFgCountFXContainer",
        NOT_ROUND_SCATTER_CONTAINER: "NotRoundScatterContainer",
        WILD_SHOW_FX_CONTAINER: "WildShowFXContainer",
        SC_SHOW_FX_CONTAINER: "ScatterShowFXContainer"
      }; //--特殊物件預設群組

      DEFAULT_GROUP_AWARD = 99; //--連線框

      DEFAULT_GROUP_WILD = 98; //--wild

      DEFAULT_GROUP_SCATTER = 97; //--scatter

      PREFAB_ID_AWARD_BOX = 'Iconbox_inGame';
      WILD_PLAY_COUNT_NAME = 'Connect_';
      SP_SHOWING = 'Sp_mode_showing';
      WILD_EXPECT_ANI_ID = 'Expect';
      SCATTER_EXPECT_ANI_ID = 'Expect';
      ({
        SPECIAL_WIN_THRESHOLD,
        WILD_LIST,
        SCATTER_LIST,
        HIGH_ODDS_SYMBOL_LIST,
        MIDDLE_ODDS_SYMBOL_LIST,
        LOW_ODDS_SYMBOL_LIST,
        REGULAR_ODDS_SYMBOL_LIST,
        REEL_AMOUNT //--5

      } = _crd && DefinitionGameConfigData === void 0 ? (_reportPossibleCrUseOfDefinitionGameConfigData({
        error: Error()
      }), DefinitionGameConfigData) : DefinitionGameConfigData);
      WILD_SET = new Set(WILD_LIST); //--查找要用到的

      WILD_COUNT_ANI_STATE_NAME = 'Start';
      SCATTER_FG_ANI_STATE_NAME = 'Start';
      DEBUG_TITLE = 'ShowAniProcessController1016';
      DEBUG_TITLE2 = 'ShowAniProcessController1016_debug';
      SIGNAL_KEY = {
        GET_RS_EFFECT: "GET_RS_EFFECT",
        GET_FG_EFFECT: "GET_FG_EFFECT",
        MULTIPLE_SEQUENCE: "MULTIPLE_SEQUENCE"
      };
      ({
        ccclass,
        property
      } = _decorator);

      _export("ShowAniProcessController1016", ShowAniProcessController1016 = (_dec = ccclass('ShowAniProcessController1016'), _dec2 = property({
        type: _crd && WinScore === void 0 ? (_reportPossibleCrUseOfWinScore({
          error: Error()
        }), WinScore) : WinScore,
        visible: true,
        displayName: "WinScore",
        tooltip: "得分動畫控制器"
      }), _dec3 = property({
        type: _crd && JpShowCtrl1016 === void 0 ? (_reportPossibleCrUseOfJpShowCtrl({
          error: Error()
        }), JpShowCtrl1016) : JpShowCtrl1016,
        visible: true,
        displayName: "JpShowCtrl1016",
        tooltip: "大獎控制器"
      }), _dec4 = property({
        type: _crd && CountTimesFXController === void 0 ? (_reportPossibleCrUseOfCountTimesFXController({
          error: Error()
        }), CountTimesFXController) : CountTimesFXController,
        visible: true,
        displayName: "CountTimesFXController",
        tooltip: "表演計次的粒子動畫"
      }), _dec5 = property({
        type: _crd && WildLayerCtrl === void 0 ? (_reportPossibleCrUseOfWildLayerCtrl({
          error: Error()
        }), WildLayerCtrl) : WildLayerCtrl,
        visible: true,
        displayName: 'WildLayerCtrl',
        tooltip: 'wild專用layer控制器'
      }), _dec6 = property({
        type: _crd && WildMoveFXCtrl === void 0 ? (_reportPossibleCrUseOfWildMoveFXCtrl({
          error: Error()
        }), WildMoveFXCtrl) : WildMoveFXCtrl,
        visible: true,
        displayName: 'WildMoveFXCtrl',
        tooltip: 'wild位移控制器'
      }), _dec7 = property({
        visible: true,
        tooltip: 'icon尺寸'
      }), _dec8 = property({
        type: AudioClip,
        visible: true,
        displayName: "我不想多說甚麼了..低能到不行",
        tooltip: "幹"
      }), _dec(_class = (_class2 = class ShowAniProcessController1016 extends (_crd && BasicShowAniProcess === void 0 ? (_reportPossibleCrUseOfBasicShowAniProcess({
        error: Error()
      }), BasicShowAniProcess) : BasicShowAniProcess) {
        set hasScatterAppearInThisRound(value) {
          this._hasScatterAppearInThisRound = value;
        }

        set preRoundOddsForAni(value) {
          this._preRoundOddsForAni = value;
        }

        set gotFGScatterCount(value) {
          this._gotFGScatterCount = value;
        }

        get gotFGScatterCount() {
          return this._gotFGScatterCount;
        }

        set bgmCtrl(value) {
          this._bgmCtrl = value;
        }

        set gameStateCondition(value) {
          this._gameStateCondition = value;
        } //--這邊不能用建構式塞進去,因為這是component


        constructor() {
          super();

          _initializerDefineProperty(this, "_winScore", _descriptor, this);

          _initializerDefineProperty(this, "_jpShowCtrl", _descriptor2, this);

          _initializerDefineProperty(this, "_countTimesFXController", _descriptor3, this);

          _initializerDefineProperty(this, "_wildLayerCtrl", _descriptor4, this);

          _initializerDefineProperty(this, "_wildMoveFXCtrl", _descriptor5, this);

          _initializerDefineProperty(this, "_iconSize", _descriptor6, this);

          _initializerDefineProperty(this, "_dummyAudioClip", _descriptor7, this);

          /**
           * DI進來的動畫服務facade
           * @param _crossSystemSymbolAniService IDirtyCrossSysServiceFacade
           */
          //--查找使用的ownerID
          this.ownerId = (_crd && SymbolOwnerAgentID === void 0 ? (_reportPossibleCrUseOfSymbolOwnerAgentID({
            error: Error()
          }), SymbolOwnerAgentID) : SymbolOwnerAgentID).ShowAniController;
          this._crossSystemSymbolAniService = null;
          //--清除的時候要清掉
          this._mapWinScoreGroupData = new Map();
          this._mapGroupAniData = new Map();
          this._wildPlayCount = 0;
          //---每round都要重置
          this._gameStateCondition = null;
          // 判斷當前與下一把的狀態關係
          this._moveWildDataMap = new Map();
          //--key:reelIndex
          this._currentRoundOdds = 0;
          //--目前這一局的總賠率(累加用)
          this._gotFGScatterCount = 0;
          //--本局獲得的scatter數量
          this._hasScatterAppearInThisRound = false;
          //--幹--
          this._bgmCtrl = null;
          this._preRoundOddsForAni = 0;
          // 存儲 scatter 出場動畫的 promise-20260205
          this._scatterAppearPromises = new Map();
        } //===================interface<IGameMode>===================


        changeGameState(value) {// 實作遊戲狀態變更邏輯
        } //===================interface<IBasicShowAniProcess>===================
        //--初始化流程


        init() {
          super.init(); //--做其他你要在系統register之前做的事情

          this._countTimesFXController.init(); //--<寫入排序群組分類(level越小會排越上面)>--


          this._arySortLayerSymbol = [{
            level: 1,
            conditionSymbolGroup: [...SCATTER_LIST]
          }, {
            level: 2,
            conditionSymbolGroup: [...WILD_LIST]
          }, {
            level: 3,
            conditionSymbolGroup: [...HIGH_ODDS_SYMBOL_LIST]
          }, {
            level: 4,
            conditionSymbolGroup: [...REGULAR_ODDS_SYMBOL_LIST]
          }];
        }
        /**
         * 還在該局內,只是重置當下的狀態
         */


        resetRoundData() {
          super.resetRoundData();

          this._moveWildDataMap.clear();

          this._wildMoveFXCtrl.reset();

          this._wildPlayCount = 0;
          this._gotFGScatterCount = 0;

          this._scatterAppearPromises.clear(); //--20260205

        }

        resetAllData() {
          this._currentRoundOdds = 0;
          this.resetRoundData();
        }

        registerService(value) {
          this._crossSystemSymbolAniService = value;

          this._crossSystemSymbolAniService.registerYourself(this);
        } // 註冊流程其他的系統從這邊初始起來..
        //-靠北不能從這裡塞....interface沒有定義參數


        register() {
          //--<寫入遊戲步驟延遲時間列表(單位-秒)>--
          this._gameStepDelayTimeList = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList);

          this._jpShowCtrl.register();

          this._winScore.register();

          this._wildMoveFXCtrl.register(this._wildLayerCtrl); //--20260306

        } // 這裡可以擴展或覆寫父類的方法
        //===================interface<IBasicShowAniProcess>===================
        // 交出前要做的事


        beforeRelease(info) {
          let infoAni = info; //--從runningPool裡面拔除

          let target = this.getAniWithRemoveFromPoolByTokenId(infoAni.tokenId);

          if (!target) {
            if (this._wildMoveFXCtrl.checkExistWildNode(infoAni.reelIndex, infoAni.iconIndex)) {
              //--20260306-old流程,取消
              //const wildDataForTransfer = this._wildMoveFXCtrl.getExistWildNodeAndTransferLayer(infoAni.reelIndex);
              const wildDataForTransfer = this._wildMoveFXCtrl.removeAndGetWildMoveData(infoAni.reelIndex);

              target = wildDataForTransfer == null ? void 0 : wildDataForTransfer.wildNode;
            }
          }

          if (target) {
            let aniInterfaceComponent = target[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL];

            if (!aniInterfaceComponent) {
              aniInterfaceComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(target);
            }

            if (target[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId === WILD_LIST[0]) {
              var _aniInterfaceComponen;

              (_aniInterfaceComponen = aniInterfaceComponent) == null || _aniInterfaceComponen.playAni({
                aniState: (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                  error: Error()
                }), AnimationStateType) : AnimationStateType).Idle
              }); //--wild要回到idle    
            } else {
              var _aniInterfaceComponen2;

              (_aniInterfaceComponen2 = aniInterfaceComponent) == null || _aniInterfaceComponen2.goBackToDefault();
            }

            target.removeFromParent(); //--從container移除
          } //aniInterfaceComponent.stopNow();--這樣會壞掉QQ
          //aniInterfaceComponent.playAni(AnimationStateType.Default);


          return target;
        }
        /**
         * <<接手後要做的事>>tokenId一定要留住
         * 跟slotMachine交接動畫物件,交接完成會把AniNode,轉送進來這裡
         * @param info IPlayAniData(裡面有包含世界座標直接可以塞了)
         * @param node 
         */


        async afterAcquire(info, node) {
          let infoAni = info; //GameUtilsTools.debugLog(DEBUG_TITLE, 'afterAcquire', { infoAni, node });

          if (infoAni.symbolId === WILD_LIST[0]) {
            this._moveWildDataMap.set(infoAni.reelIndex, {
              data: infoAni,
              wildNode: node
            });
          } else {
            let containerID = STAGE_ID.SYMBOL_SHOW_CONTAINER;
            let targetGroupId = [];

            if (infoAni.symbolId === SCATTER_LIST[0]) {
              //--scatter出現時放的layer位置
              containerID = STAGE_ID.SCATTER_SHOW_CONTAINER; //...有點怪怪的,雖然寫了layer排序,但太特殊了直接切別的layer做

              targetGroupId = [-999];
            }

            if (!infoAni.containerNodeId) {
              infoAni.containerNodeId = containerID;
            }

            await this.addAnimationData(node, infoAni, targetGroupId);

            if (infoAni.symbolId != SCATTER_LIST[0]) {
              var _node$ANIMATION_CTRL;

              (_node$ANIMATION_CTRL = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL]) == null || _node$ANIMATION_CTRL.playAni({
                aniState: (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                  error: Error()
                }), AnimationStateType) : AnimationStateType).Idle
              });
            } else if (infoAni.symbolId == SCATTER_LIST[0]) {
              //-出場
              this._hasScatterAppearInThisRound = true;
              const gameState = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
                error: Error()
              }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
                error: Error()
              }), GameGlobalKeys) : GameGlobalKeys).GameState); //--當下回合使用的速度值

              const gameSpeed = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
                error: Error()
              }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
                error: Error()
              }), GameGlobalKeys) : GameGlobalKeys).CurrentRoundSpeed);
              const roundFg = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
                error: Error()
              }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
                error: Error()
              }), GameGlobalKeys) : GameGlobalKeys).CurrentFGAndRSRecord);

              if (roundFg.hope.length > 0) {
                if (roundFg.hope.includes(infoAni.reelIndex)) {
                  var _node$ANIMATION_CTRL2;

                  (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                    error: Error()
                  }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                    error: Error()
                  }), SoundList) : SoundList).Sc_in, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
                    error: Error()
                  }), SOUND_TYPE) : SOUND_TYPE).NORMAL, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                    error: Error()
                  }), AudioSourceList) : AudioSourceList).BtnAS);
                  (_node$ANIMATION_CTRL2 = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                    error: Error()
                  }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL]) == null || _node$ANIMATION_CTRL2.goBackToDefault();
                  await this.hotfixChangeProcessScAppear(node, gameSpeed);
                  console.log();
                }
              }

              if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).READY_HAND_STATUS] && gameSpeed == (_crd && NewFlashModeEnum === void 0 ? (_reportPossibleCrUseOfNewFlashModeEnum({
                error: Error()
              }), NewFlashModeEnum) : NewFlashModeEnum).None && !node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).FAST_MODE]) {
                if (infoAni.reelIndex != REEL_AMOUNT - 1) {
                  var _node$ANIMATION_CTRL3;

                  node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                    error: Error()
                  }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).IS_PLAYING_EXPECT] = true;

                  if ((_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                    error: Error()
                  }), AudioManager) : AudioManager).instance.isPlaying((_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                    error: Error()
                  }), AudioSourceList) : AudioSourceList).BtnAS)) {
                    (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                      error: Error()
                    }), AudioManager) : AudioManager).instance.stopSound([(_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                      error: Error()
                    }), AudioSourceList) : AudioSourceList).BtnAS]);
                  } //--巨尷尬...這個聽牌的時間小於音效的時間阿

                  /*
                  if (!AudioManager.instance.isPlaying(AudioSourceList.BasicAS)) {
                      AudioManager.instance.playSound(SoundList.Sc_Ready, SOUND_TYPE.NORMAL, AudioSourceList.BasicAS);
                  }*/


                  (_node$ANIMATION_CTRL3 = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                    error: Error()
                  }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL]) == null || _node$ANIMATION_CTRL3.playAni({
                    aniState: SCATTER_EXPECT_ANI_ID
                  });
                }
              } else if (gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).RE_SPINE) {
                var _node$ANIMATION_CTRL4;

                //--RS模式的scatter不播放idle LOOP
                (_node$ANIMATION_CTRL4 = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL]) == null || _node$ANIMATION_CTRL4.goBackToDefault();
              }
            }
          }
        }

        update(dt) {
          if (this._hasScatterAppearInThisRound) {
            for (const node of this._aryRunningNode) {
              if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId === SCATTER_LIST[0] && node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ADDED] && node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).REFERENCE_TARGET] != null) {
                const targetNode = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).REFERENCE_TARGET];
                node.worldPosition = targetNode == null ? void 0 : targetNode.worldPosition.clone();
              }
            }
          }
        }

        async hotfixChangeProcessScAppear(nodeTarget, speed) {
          const reelIndex = nodeTarget[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex;

          if (speed == (_crd && NewFlashModeEnum === void 0 ? (_reportPossibleCrUseOfNewFlashModeEnum({
            error: Error()
          }), NewFlashModeEnum) : NewFlashModeEnum).NewFlash2 || speed == (_crd && NewFlashModeEnum === void 0 ? (_reportPossibleCrUseOfNewFlashModeEnum({
            error: Error()
          }), NewFlashModeEnum) : NewFlashModeEnum).NewFlash1) {
            var _nodeTarget$ANIMATION;

            //await nodeTarget[DYN_NODE_PROPERTIES.ANIMATION_CTRL]?.playAniInPromise({ aniState: 'Appear' });
            (_nodeTarget$ANIMATION = nodeTarget[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL]) == null || _nodeTarget$ANIMATION.playAni({
              aniState: 'Appear'
            });

            this._scatterAppearPromises.set(reelIndex, Promise.resolve());

            return;
          } else {
            var _nodeTarget$ANIMATION2;

            const appearPromise = (_nodeTarget$ANIMATION2 = nodeTarget[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL]) == null ? void 0 : _nodeTarget$ANIMATION2.playAniInPromise({
              aniState: 'Appear'
            });

            this._scatterAppearPromises.set(reelIndex, appearPromise);

            await appearPromise; //await nodeTarget[DYN_NODE_PROPERTIES.ANIMATION_CTRL]?.playAniInPromise({ aniState: 'Appear' });
          }
        }

        async afterMultiAcquire(mapInfo) {
          await this.processAfterGetAwardSymbols(mapInfo);
        }

        crossProcess(processType) {
          //GameUtilsTools.debugLog(DEBUG_TITLE, 'crossProcess', { processType });
          switch (processType.name) {
            case (_crd && Call_Function_Type === void 0 ? (_reportPossibleCrUseOfCall_Function_Type({
              error: Error()
            }), Call_Function_Type) : Call_Function_Type).CALL_SHOW_WILD_EXPECT:
              this.playForecastWildOrScatterAni(processType.args[0]);
              break;

            case (_crd && Call_Function_Type === void 0 ? (_reportPossibleCrUseOfCall_Function_Type({
              error: Error()
            }), Call_Function_Type) : Call_Function_Type).CALL_HIDE_WILD_EXPECT:
              this.stopForecastWildAni(processType.args[0]);
              break;

            case (_crd && Call_Function_Type === void 0 ? (_reportPossibleCrUseOfCall_Function_Type({
              error: Error()
            }), Call_Function_Type) : Call_Function_Type).CALL_HIDE_ALL_WILD_EXPECT:
              this.stopAllExpectAni();
              break;
          }
        }

        crossMultiProcess(processType) {}
        /**
         * 20251031-
         * 因為美術原本的scatter動畫在appear之後會直接進入idle loop,但現在拆掉
         * 78企劃不知道在那邊龜毛三小要全盤面停止後才接idle loop
         * 所以這邊要補上在整軸停止後,讓scatter進入idle loop
         */


        afterWholeReelStopIdleSpAni(nextState) {
          const gameState = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).GameState);

          for (let i = 0; i < this._aryRunningNode.length; i++) {
            const node = this._aryRunningNode[i];
            const sd = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId;

            if (sd === SCATTER_LIST[0] || sd === WILD_LIST[0]) {
              const aniCtrl = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL];

              if (sd == WILD_LIST[0]) {
                if (aniCtrl.currentTarget.targetName !== 'Idle_Ani') {
                  aniCtrl.playAni((_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                    error: Error()
                  }), AnimationStateType) : AnimationStateType).Idle);
                }
              } else {
                //--剛好有聽牌然後沒中~且在NG狀態+下一把不會進FG
                if (gameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                  error: Error()
                }), GameState) : GameState).NORMAL && node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId === SCATTER_LIST[0] && this._preRoundOddsForAni === 0 && nextState !== (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                  error: Error()
                }), GameState) : GameState).FREE_GAME //nextState !== GameState.RE_SPINE
                ) {
                  aniCtrl == null || aniCtrl.playAni({
                    aniState: (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                      error: Error()
                    }), AnimationStateType) : AnimationStateType).Idle
                  });
                }
              }
            }
          }
        } //================== cross system function ==================================


        async playForecastWildOrScatterAni(reelId) {
          if (this._wildMoveFXCtrl.checkExistWildNode(reelId, 4)) {
            this._wildMoveFXCtrl.playForecastWildAni(reelId);
          } else {
            const wildAniNode = this.getNodeByReelIndexAndIconIndex(reelId, 4);

            if (wildAniNode) {
              const aniCtrl = wildAniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL];
              wildAniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).IS_PLAYING_EXPECT] = true;
              aniCtrl == null || aniCtrl.playAni({
                aniState: WILD_EXPECT_ANI_ID
              });
            } else {
              //--找scatter(但這裡不太可能會執行,因為scatter他是隨著轉輪轉出來的)
              const scatterAniNode = this.getUniqueSymbolNodeInReel(reelId, SCATTER_LIST[0]);

              if (scatterAniNode) {
                //--該軸Scatter appear還沒播完就聽牌了,等他播完
                const appearPromise = this._scatterAppearPromises.get(reelId);

                if (appearPromise) {
                  await appearPromise;
                }

                const aniCtrl = scatterAniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL];
                scatterAniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).IS_PLAYING_EXPECT] = true;
                aniCtrl == null || aniCtrl.playAni({
                  aniState: SCATTER_EXPECT_ANI_ID
                });
              }
            }
          }
        }

        stopForecastWildAni(reelId) {
          //--只有整軸才會有預報啦
          if (this._wildMoveFXCtrl.checkExistWildNode(reelId, 4)) {
            this._wildMoveFXCtrl.stopForecastWildAni(reelId);
          } else {
            const wildAniNode = this.getNodeByReelIndexAndIconIndex(reelId, 4);

            if (wildAniNode) {
              const aniCtrl = wildAniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL];
              aniCtrl == null || aniCtrl.goBackToDefault();
            } else {
              //--找scatter(但這裡不太可能會執行,因為scatter他是隨著轉輪轉出來的)
              const scatterAniNode = this.getUniqueSymbolNodeInReel(reelId, SCATTER_LIST[0]);

              if (scatterAniNode) {
                const aniCtrl = scatterAniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL];
                aniCtrl == null || aniCtrl.goBackToDefault();
              }
            }
          }
        }

        stopAllExpectAni() {
          this._wildMoveFXCtrl.stopAllForecastWildAni();

          for (let i = 0; i < this._aryRunningNode.length; i++) {
            const node = this._aryRunningNode[i];

            if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId === SCATTER_LIST[0] || node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId === WILD_LIST[0]) {
              node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).READY_HAND_STATUS] = false;

              if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).IS_PLAYING_EXPECT] === true) {
                const aniCtrl = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL];
                node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).IS_PLAYING_EXPECT] = false;
                aniCtrl == null || aniCtrl.goBackToDefault();
              }
            }
          }
        }
        /**
         * 處理獲得獎勵符號後的邏輯
         * @param mapInfo 獲得的資訊(從slotMachine拔回來的slot)
         */


        async processAfterGetAwardSymbols(mapInfo) {
          //this._crossSystemSymbolAniService.debugCheckAllOwners();
          let checkExistData;
          const keys = [];
          mapInfo.forEach((_, key) => keys.push(key)); //for (const [key, value] of mapInfo.entries()) {

          for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const value = mapInfo.get(key);
            const {
              node
            } = value;
            const data = value.data;

            if (!node) {
              //--處理有位移的wild(不論是否全軸1*4)
              if (data.symbolId === WILD_LIST[0]) {
                if (this._wildMoveFXCtrl.checkExistWildNode(data.reelIndex, data.iconIndex)) {
                  this.processWildMoveData(data);
                }
              }

              continue;
            }

            let targetGroupId;

            if (data.symbolId == WILD_LIST[0]) {
              //--處理沒有移動的wild(不論是否全軸1*4),因為有可能是轉出來就直接在slotMachine裡面了,所以沒有經過afterAcquire的流程,要直接在這邊處理
              //--20260306-NEW修改流程
              this.processWildNoMove(data, node);
              continue; //--20260306-舊流程,棄用
              //targetGroupId = this.getWildContinuousGroup([...node[DYN_WILD_INFO.WILD_CONTINUE]]);
              //data.containerNodeId = this.getWildContainer(node[DYN_WILD_INFO.WILD_CONTINUE]);
            } else {
              if (this._mapWinScoreGroupData.has(key)) {
                targetGroupId = this._mapWinScoreGroupData.get(key).group;
              } else {
                //--檢查是不是scatter
                const symbolIdKey = this.getSymbolIdByKeyString(key);

                if (symbolIdKey == SCATTER_LIST[0]) {
                  node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                    error: Error()
                  }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).OTHER] = SP_SHOWING;
                  targetGroupId = [-999];
                  data.containerNodeId = STAGE_ID.SCATTER_SHOW_CONTAINER;
                }
              }
            } //const targetGroupId = this._mapWinScoreGroupData.get(key).group;


            await this.addAnimationData(node, data, targetGroupId);
            checkExistData = this.fastCreateIPlayAniData(node);
            checkExistData.symbolId = DEFAULT_GROUP_AWARD;
            const existCheckingData = this.checkIsExistAniNode(checkExistData); //console.log('checkExistData', checkExistData, existCheckingData);
            //--建立連線框--
            //--查找同位置是否有awardBox({ flag: false, tokenId: '' })

            if (data.symbolId != SCATTER_LIST[0] && data.symbolId != WILD_LIST[0] && !existCheckingData.flag && existCheckingData.tokenId == '') {
              const cloneAwardBox = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
                error: Error()
              }), GameUtilsTools) : GameUtilsTools).deepClone(data);
              cloneAwardBox.containerNodeId = STAGE_ID.AWARD_BOX_SHOW_CONTAINER;
              cloneAwardBox.groupId = DEFAULT_GROUP_AWARD;
              cloneAwardBox.prefabKey = PREFAB_ID_AWARD_BOX;
              cloneAwardBox.tokenId = Date.now() + '_' + (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
                error: Error()
              }), GameUtilsTools) : GameUtilsTools).getRangeRandom(0, 100); //--隨機tokenId;

              const aniNode = (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
                error: Error()
              }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().getInstantiatedObjFromPool(cloneAwardBox.prefabKey);
              aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID] = [];
              aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID] = cloneAwardBox.tokenId;
              aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID] = cloneAwardBox.prefabKey;
              aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ADDED] = false;
              aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL] = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(aniNode);
              ; //-slotMachineIndexInfo?: IReelInfo;

              aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO] = {
                reelIndex: cloneAwardBox.reelIndex,
                iconIndex: cloneAwardBox.iconIndex,
                symbolId: DEFAULT_GROUP_AWARD
              };
              await this.addAnimationData(aniNode, cloneAwardBox, targetGroupId); //--先關閉顯示

              const aniInterfaceComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(aniNode);
              aniInterfaceComponent.goBackToDefault(); //--直接回到預設狀態

              aniNode.active = false;
            }
          }

          this.sortAnimationLayer(); //--確保動畫層級排序正確
          //await this.reSetWildLayerAndSort();
          //this.sortForWildNodes(STAGE_ID.WILD_SHOW_CONTAINER, 'processAfterGetAwardSymbols');
          //GameUtilsTools.debugLog(DEBUG_TITLE, 'processAfterGetAwardSymbols_aryRunningNode', this._aryRunningNode);
        }
        /**
         * 20260306 NEW一開始轉出的wild(沒有位移,不論是否為1*4)
         * @param data IPlayAniData
         * @param node wild的node(已經在slotMachine裡面了,但還沒移動過來)
         */


        processWildNoMove(data, node) {
          //--檢查是否為1*4的wild,要分別塞進不同的容器內
          const containerId = this.getWildContainer(node[(_crd && DYN_WILD_INFO === void 0 ? (_reportPossibleCrUseOfDYN_WILD_INFO({
            error: Error()
          }), DYN_WILD_INFO) : DYN_WILD_INFO).WILD_CONTINUE]); //--這邊決定要放在哪個layer裡面(因為有可能是1*4的wild,所以要給整條的layer)

          if (containerId === STAGE_ID.WILD_SHOW_CONTAINER) {
            //--1*4的wild
            this._wildLayerCtrl.setWildToWholeLayer(data.reelIndex, node, data.wPos);
          } else if (containerId === STAGE_ID.WILD_NO_MOVEMENT_SHOW_CONTAINER) {
            //--非1*4的wild
            this._wildLayerCtrl.setWildToNoMoveWholeLayer(data.reelIndex, node, data.wPos);
          }

          this._wildLayerCtrl.sortAllContainer();

          const aniNode = node;
          let targetGroupId = this.getWildContinuousGroup([...aniNode[(_crd && DYN_WILD_INFO === void 0 ? (_reportPossibleCrUseOfDYN_WILD_INFO({
            error: Error()
          }), DYN_WILD_INFO) : DYN_WILD_INFO).WILD_CONTINUE]]); //data.containerNodeId = this.getWildContainer(aniNode[DYN_WILD_INFO.WILD_CONTINUE]);---20260306 old流程

          this._moveWildDataMap.delete(data.reelIndex); //--以下為新的流程(要維持原有的右壓左邏輯,所以直接將分開呈現的不同layer容器,全都統一使用最終呈現的容器.20260304)


          if (data.groupId != null) {
            aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].push(data.groupId);
          }

          if (targetGroupId) {
            aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID] = [...aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID], ...targetGroupId];
          }

          this.initAniComp(aniNode, data);

          this._aryRunningNode.push(aniNode);
        }
        /**
         * 20260306 NEW:處理有位移的wild(不論是否為1*4)
         * @param data IPlayAniData
         */


        processWildMoveData(data) {
          //--轉移wild
          //--20260306-old流程
          //const wildDataForTransfer = this._wildMoveFXCtrl.getExistWildNodeAndTransferLayer(data.reelIndex);
          const wildDataForTransfer = this._wildMoveFXCtrl.removeAndGetWildMoveData(data.reelIndex);

          if (wildDataForTransfer) {
            //--20260306-新的右壓左的邏輯
            const aniNode = wildDataForTransfer.wildNode; //--檢查是否為1*4的wild,要分別塞進不同的容器內

            const containerId = this.getWildContainer(aniNode[(_crd && DYN_WILD_INFO === void 0 ? (_reportPossibleCrUseOfDYN_WILD_INFO({
              error: Error()
            }), DYN_WILD_INFO) : DYN_WILD_INFO).WILD_CONTINUE]);

            if (containerId === STAGE_ID.WILD_SHOW_CONTAINER) {
              //--1*4的wild
              this._wildLayerCtrl.switchLayerToWholeLayer(data.reelIndex);
            } else if (containerId === STAGE_ID.WILD_NO_MOVEMENT_SHOW_CONTAINER) {
              //--非1*4的wild
              this._wildLayerCtrl.switchLayerToNoWholeLayer(data.reelIndex);
            }

            let targetGroupId = this.getWildContinuousGroup([...aniNode[(_crd && DYN_WILD_INFO === void 0 ? (_reportPossibleCrUseOfDYN_WILD_INFO({
              error: Error()
            }), DYN_WILD_INFO) : DYN_WILD_INFO).WILD_CONTINUE]]);

            this._moveWildDataMap.delete(data.reelIndex); //--以下為新的流程(要維持原有的右壓左邏輯,所以直接將分開呈現的不同layer容器,全都統一使用最終呈現的容器.20260304)


            if (data.groupId != null) {
              aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].push(data.groupId);
            }

            if (targetGroupId) {
              aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID] = [...aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID], ...targetGroupId];
            }

            this.initAniComp(aniNode, data);

            this._aryRunningNode.push(aniNode); //--以下為舊的流程(因為在不同的容器當中...20260304)
            //data.wPos = wildDataForTransfer.WildMovementData.startWpos;//--換座標
            //this.addAnimationData(aniNode, data, targetGroupId);

          }
        }
        /**
         * 主動將自己擁有的動畫位置資料交給另一個owner（透過ownerId找）.
         * 找到之後會回到既有流程beforeRelease開始移交處理
         * TIPS:tokenId要塞
         * @param info data extends IReelInfo
         * @param targetOwnerId 指定轉交的 ownerId
         */


        doHandoffSingleByOwnerIdBySelf(info, targetOwnerId) {
          this._crossSystemSymbolAniService.handoffSingleByOwnerId(info, targetOwnerId);
        } //=====================================<清除流程>=================================================

        /**
         * server資料回來後新一局開始start spin時可以呼叫
         * (這邊可以開始做不同的狀態判斷)
         * step1: 清除所有正在播放的動畫
         * step2: 清除輪播資料
         * step3: cancelAllDelays?.();--取消所有延遲
         * step4: 清理safeResolve
         * step5: 依照條件選擇特殊清除(現在在特殊模式下)或是一般清除
        */

        /**step.1 子類實作：停止分數/框線等（原本的 _winScore.stopWinScoreAni + 其他） */


        stopAndPauseWinAni() {
          this._winScore.stopToDefault(); //--停止秀線...


          this._winScore.cleanPreviousAni();
        }
        /**step.2子類決定如何處理清除輪播資料 */


        stopMultipleSequence() {
          this._mapGroupAniData.clear();
        }
        /**step.5-1 子類決定這回合是否需要「特殊清理」（例：Wild 正在工作） */

        /**
         * TIPS:
         * 1.RS模式當中isLock的wild會被釘死在場上,所以不需要交還slotMachine(doSpecialCleanupForNewStart)
         * 2.RS模式結束後isLock的wild需要交還slotMachine(doRegularCleanupForNewStart)
         * 
         * @returns 
         */


        isSpecialCleanupNeededForNewStart() {
          //let gameState = BasicGameGlobalData.getInstance<GameGlobalData>().getGlobalData(GameGlobalKeys.GameState);
          //let gameState = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);
          if (!this._gameStateCondition) {
            return false; //--交還釘死的wild
          } else if (this._gameStateCondition.isDifferentStateNext) {
            if (this._gameStateCondition.nextRoundState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).NORMAL || this._gameStateCondition.nextRoundState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME || this._gameStateCondition.nextRoundState === null //--server資料還沒回來(全新局)
            ) {
              return false; //--交還釘死的wild
            } else {
              return true;
            }
          } else {
            return true; //--不交還wild釘死的
          }
        }
        /**step.5-2 子類實作：特殊清理（例：可移除/關 Wild → 全清 + resetWild） */


        async doSpecialCleanupForNewStart() {
          //--wild為1*4的狀態就會被釘在場上,所以不需要交回slotMachine<排除1*4的wild>
          this.processDataBeforeRemoveByAwardBox(); //--直接拔除awardBox

          const handoffPlayData = [];

          for (const aniNode of this._aryRunningNode) {
            const wild = aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId === WILD_LIST[0];
            const locked = aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).LOCKED];

            if (!wild || wild && !locked) {
              if (wild) {
                const backData = this.createWildContinueIplayData(aniNode);
                handoffPlayData.push(...backData);
              } else {
                const iPlayAniData = this.fastCreateIPlayAniData(aniNode);
                handoffPlayData.push(iPlayAniData);
              }
            } else if (wild && locked) {
              aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID] = []; //--清空得分群組

              const ctrl = aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL];

              if (ctrl.currentTarget == null) {
                aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL].playAni((_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                  error: Error()
                }), AnimationStateType) : AnimationStateType).Idle);
              } else if (ctrl.currentTarget.targetName !== 'Idle_Ani') {
                aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL].playAni((_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                  error: Error()
                }), AnimationStateType) : AnimationStateType).Idle);
              }
            }
          }

          if (handoffPlayData.length > 0) {
            await this._crossSystemSymbolAniService.multiHandoffBySameOwnerID(handoffPlayData, (_crd && SymbolOwnerAgentID === void 0 ? (_reportPossibleCrUseOfSymbolOwnerAgentID({
              error: Error()
            }), SymbolOwnerAgentID) : SymbolOwnerAgentID).SlotMachine);
          }
        }
        /**step.5-3 子類實作：一般清理（例：全部清除） */


        async doRegularCleanupForNewStart() {
          //--1.交回控制權2.清除runningPool+連線框
          this.processDataBeforeRemoveByAwardBox(); //--直接拔除awardBox

          const handoffPlayData = [];
          const reRegisterWholeWild = [];

          for (const aniNode of this._aryRunningNode) {
            let iPlayAniData = this.fastCreateIPlayAniData(aniNode);
            handoffPlayData.push(iPlayAniData);

            if (aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId == WILD_LIST[0]) {
              //--wild
              let wildContinue = [...aniNode[(_crd && DYN_WILD_INFO === void 0 ? (_reportPossibleCrUseOfDYN_WILD_INFO({
                error: Error()
              }), DYN_WILD_INFO) : DYN_WILD_INFO).WILD_CONTINUE]];

              for (let i = 0; i < wildContinue.length; i++) {
                let reBuildData = this.reBuildIPlayDataFromKeyString(wildContinue[i]);

                if (reBuildData) {
                  reRegisterWholeWild.push(reBuildData);

                  if (reBuildData.iconIndex != aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                    error: Error()
                  }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconIndex) {
                    handoffPlayData.push(reBuildData); //--這邊是塞空資料回去
                  }
                }
              }
            }
          } //--註冊回去map


          if (reRegisterWholeWild.length > 0) {
            //await this._crossSystemSymbolAniService.multiRegisty(reRegisterWholeWild, this);
            this._crossSystemSymbolAniService.multiRegisty(reRegisterWholeWild, this);
          }

          if (handoffPlayData.length > 0) {
            //await this._crossSystemSymbolAniService.multiHandoffBySameOwnerID(handoffPlayData, SymbolOwnerAgentID.SlotMachine);
            await this._crossSystemSymbolAniService.multiHandoffBySameOwnerID(handoffPlayData, (_crd && SymbolOwnerAgentID === void 0 ? (_reportPossibleCrUseOfSymbolOwnerAgentID({
              error: Error()
            }), SymbolOwnerAgentID) : SymbolOwnerAgentID).SlotMachine);
          }
        }
        /**
         * TIPS:
         * 1.在新一局開始前，清除所有正在播放的動畫(尚未交還動畫,只有停止播放)
         * 2.不會執行任何交還map的動作
         * 3.不呼叫會持續輪播最後一把的中線輪播(如果有的話)
         */


        async cleanAllPlayingBeforeNewStart() {
          var _this$cancelAllDelays, _this$safeResolve;

          this._abortPlaySequence = true;

          this._async.abortAll(SIGNAL_KEY.MULTIPLE_SEQUENCE);

          this.stopMultipleSequence();
          this.stopAndPauseWinAni();
          (_this$cancelAllDelays = this.cancelAllDelays) == null || _this$cancelAllDelays.call(this);
          (_this$safeResolve = this.safeResolve) == null || _this$safeResolve.call(this);
          this.processResetAni();
        } //--強制移除所有動畫(這邊是直接移除,不交還slotMachine,直接進pool)


        stopAndRemoveAllAnis() {//--先放空好了,目前沒用到
        } //--停止垂直動畫(特殊角色需求)


        stopShowVerticalAni() {
          return;
        } //--停止標準表演動畫(特殊角色需求)


        stopShowAnimation() {
          return;
        } //--強制中斷連線中動畫(單純的指線/框的動畫)


        stopAndHideConnectBoxAni() {
          for (const group of this._aryRunningNode) {
            if (group[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].includes(DEFAULT_GROUP_AWARD)) {
              const aniInterfaceComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(group);
              aniInterfaceComponent.goBackToDefault(); //--直接回到預設狀態

              group.active = false;
            }
          }
        } //=====================================<清除流程>=================================================
        //=====================================<標準表演流程>=================================================

        /**
         * 分數結算統一入口<runShowProcess>
         * step1: 沒有得分直接走playNoWinInThisRound流程
         * step2: 有得分走playWinInThisRound流程<播放全部>
         * step3: 檢查大獎條件checkBigWinCondition
         * step4: 播放得分動畫showWinScoreAni|播放大獎動畫showBigWinAni
         * step5: GUI下方顯示得分showScoreForBottomText(第一階段秀全部完成)
         * step5-2 checkGoThroughCondition是否跳過輪播
         * step6: 輪播檢查(開鎖)processBeforePlaySequence
         * step7: 播放輪播動畫playMultipleSequence
         */

        /**step1. 沒有得分直接走playNoWinInThisRound流程*/


        async playNoWinInThisRound(lines) {
          const wildPlayData = this._wildMoveFXCtrl.getNoWinWildHandoffData();

          if (wildPlayData.length > 0) {
            /**
             * <<handoff拉出來的wild給slotMachine>>
             * TIPS:
             * 1.沒有得分的時候,如果有wild要交還給slotMachine
             * 2.因為在processWildNoMovement/processWildNoMovement的時候最後會將這些轉移的wild資料的owner
             * 重新寫回去slotMachine,等到有得分或是計算FG/RS次數的時候才會從slotMachine轉移到這裡
             * (不然第一次表演位移的時候,已經先將map資料轉移到這裡,這樣會導致handoff的時候自己要求資料轉移給自己會reject)
             * 3.所以這邊要先unregister
             */
            this._crossSystemSymbolAniService.multiUnRegister(wildPlayData);

            await this._crossSystemSymbolAniService.multiRegistryByID(wildPlayData, (_crd && SymbolOwnerAgentID === void 0 ? (_reportPossibleCrUseOfSymbolOwnerAgentID({
              error: Error()
            }), SymbolOwnerAgentID) : SymbolOwnerAgentID).ShowAniController); //--靠邀有位移後沒得分的情況..他在註冊回去再拉出來是拿沒有offset的資料1009

            await this._crossSystemSymbolAniService.multiHandoffBySameOwnerID(wildPlayData, (_crd && SymbolOwnerAgentID === void 0 ? (_reportPossibleCrUseOfSymbolOwnerAgentID({
              error: Error()
            }), SymbolOwnerAgentID) : SymbolOwnerAgentID).SlotMachine);

            this._wildMoveFXCtrl.reset();
          }

          const delayTime = this._gameStepDelayTimeList.get(cfg => {
            var _cfg$result;

            return (_cfg$result = cfg.result) == null ? void 0 : _cfg$result.noWinWait;
          });

          await this._async.waitSecondsRaw(delayTime);
        }

        getScatterTargetNodes() {
          const scatterNodes = [];

          for (let i = 0; i < this._aryRunningNode.length; i++) {
            const node = this._aryRunningNode[i];

            if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId === SCATTER_LIST[0]) {
              scatterNodes.push(node);
            }
          }

          return scatterNodes;
        }
        /**step2. 有得分直接走全部播放流程*/
        //-winScoreData是這一局的全部,每一條線的在lines裡面


        async playWinInThisRound(winScoreData, lines) {
          //--秀全部
          //GameUtilsTools.debugLog(DEBUG_TITLE, 'playWinInThisRound', { winScoreData, lines, mapWinScoreGroupData: this._mapWinScoreGroupData, mapGroupAniData: this._mapGroupAniData });
          //const checkWinScoreData = winScoreData;
          //-關閉全部的亮度
          this._crossSystemSymbolAniService.processOwnerFunction({
            ownerId: (_crd && SymbolOwnerAgentID === void 0 ? (_reportPossibleCrUseOfSymbolOwnerAgentID({
              error: Error()
            }), SymbolOwnerAgentID) : SymbolOwnerAgentID).SlotMachine,
            name: (_crd && Call_Function_Type === void 0 ? (_reportPossibleCrUseOfCall_Function_Type({
              error: Error()
            }), Call_Function_Type) : Call_Function_Type).SET_ALL_REEL_BRIGHTNESS,
            args: [true]
          });

          this.checkScatterWithWin(); //return;

          let showAllGroups = this.getAllGroups();
          const aniGroups = this.getAniNodeListByGroups(showAllGroups);
          const playWinSoundId = this.getPlayWinSoundId_New(winScoreData.totalOdd); //const playWinSoundId = this.getPlayWinSoundId(aniGroups);

          const Promises = []; //const runId = Date.now().toString(36);
          //const totalPlayTime = (this._gameStepDelayTimeList.get(cfg => cfg.result?.totalShowWin) + 0.2).fixed();

          const totalPlayTime = this._gameStepDelayTimeList.get(cfg => {
            var _cfg$result2;

            return (_cfg$result2 = cfg.result) == null ? void 0 : _cfg$result2.totalShowWin;
          });

          const flowKey = (_crd && BasicShowResultProcessKey === void 0 ? (_reportPossibleCrUseOfBasicShowResultProcessKey({
            error: Error()
          }), BasicShowResultProcessKey) : BasicShowResultProcessKey).RunShowProcess;

          const signal = this._async.createAbortScope(flowKey);
          /*
          //--20260126流程取消
          const gameState = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);
          if (gameState === GameState.RE_SPINE && this._gotFGScatterCount > 0) {
              const scatterNodes = this.getScatterTargetNodes();
              for (const aniScNode of scatterNodes) {
                  this.changeSpineColor(aniScNode, 225);
                  this.changeScatterLayer(aniScNode, STAGE_ID.SC_SHOW_FX_CONTAINER);
              }
              aniGroups.push(...scatterNodes);
          }*/


          let aryProcess = [];

          for (const group of aniGroups) {
            const aniInterfaceComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(group);
            const isWild = group[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId !== WILD_LIST[0] ? false : true;
            const isAwardBox = group[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId === DEFAULT_GROUP_AWARD ? true : false; //--在這個模式下都是第一次播放wild的connect動畫

            const aniState = isWild ? {
              aniState: WILD_PLAY_COUNT_NAME + 1
            } : {
              aniState: (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                error: Error()
              }), AnimationStateType) : AnimationStateType).Win
            };

            if (!isAwardBox) {
              const key = group[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId; //--change speedTime

              if (aniInterfaceComponent instanceof (_crd && MultiSpineController === void 0 ? (_reportPossibleCrUseOfMultiSpineController({
                error: Error()
              }), MultiSpineController) : MultiSpineController)) {
                //aniInterfaceComponent?.changeSpeed(aniState, totalPlayTime);
                aniInterfaceComponent == null || aniInterfaceComponent.changeSpeed(aniState, totalPlayTime);
              } else if (aniInterfaceComponent instanceof (_crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
                error: Error()
              }), SpineController) : SpineController)) {
                aniInterfaceComponent == null || aniInterfaceComponent.changePlayInfo(aniState, totalPlayTime);
              } else if (aniInterfaceComponent instanceof (_crd && AnimationController === void 0 ? (_reportPossibleCrUseOfAnimationController({
                error: Error()
              }), AnimationController) : AnimationController)) {
                aniInterfaceComponent == null || aniInterfaceComponent.changeSpeedWithAep(aniState, totalPlayTime);
              }

              const aniPromise = aniInterfaceComponent.playAniInPromise(aniState); //processMap.set(key, { promise: aniPromise, ani: aniInterfaceComponent, target: group });

              aryProcess.push({
                promise: aniPromise,
                ani: aniInterfaceComponent,
                target: group
              });
              const p = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
                error: Error()
              }), GameUtilsTools) : GameUtilsTools).withTimeout( //raced,
              aniPromise, //0.2,
              totalPlayTime, //--防死亡timeout(也是這輪能用的總時間)
              //1.1,
              {
                node: group.name,
                playKey: aniState,
                info: key
              }, 'playAniGroup', true //--超時也resolve---這邊要想一下,NG/FG的差異
              );
              Promises.push(p.promise);
            } else {
              group.active = true;
              aniInterfaceComponent.playAni({
                aniState: (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                  error: Error()
                }), AnimationStateType) : AnimationStateType).Win
              });
            }
          }

          const emptyPromise = new Promise(resolve => {});
          /**
           * 1.NG和FG當中是不同的播放控制
           * NG當中按下停止鍵,會直接從0.3秒開始播到結束
           * FG當中按下停止鍵,會直接結束播放
           */
          //--因為tsconfig "downlevelIteration": true,變成false或是被刪除將不能使用map或是set的擴展運算式
          //const processDataList: { promise: Promise<void>, ani: IAnimationControl, target: Node }[] = [];
          //processMap.forEach(processData => processDataList.push(processData));

          const emptyPromiseCallbackWrapper = value => {
            const gameState = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
              error: Error()
            }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).GameState);

            if (gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME) {
              //--FG模式-直接結束
              //for (const [, processData] of processMap.entries()) {
              for (let i = 0; i < aryProcess.length; i++) {
                const processData = aryProcess[i];
                let targetAni;
                const group = processData.target;

                if (group[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId == WILD_LIST[0] || group[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId == SCATTER_LIST[0]) {
                  targetAni = processData.ani;
                } else {
                  targetAni = processData.ani;
                }

                targetAni.gotoPlayLastFrame();
              }
            } else {
              //--小於0.3秒就直接跳到0.3秒後開始跑,大於0.3秒就不管 
              const t = this.endTimeCount((_crd && BasicShowResultProcessKey === void 0 ? (_reportPossibleCrUseOfBasicShowResultProcessKey({
                error: Error()
              }), BasicShowResultProcessKey) : BasicShowResultProcessKey).RunShowProcess);

              const interruptTime = this._gameStepDelayTimeList.get(cfg => {
                var _cfg$result3;

                return (_cfg$result3 = cfg.result) == null ? void 0 : _cfg$result3.interruptTime;
              });

              if (t < interruptTime) {
                //for (const [, processData] of processMap.entries()) {
                for (let i = 0; i < aryProcess.length; i++) {
                  const processData = aryProcess[i];
                  let targetAni;
                  const group = processData.target;

                  if (group[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                    error: Error()
                  }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId == WILD_LIST[0] || group[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                    error: Error()
                  }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId == SCATTER_LIST[0]) {
                    targetAni = processData.ani;
                  } else {
                    targetAni = processData.ani;
                  }

                  targetAni.changePlayTime(interruptTime);
                }
              }
            }
          }; //--塞空promise進去啦


          this._async.registerCancelablePromise(flowKey, emptyPromise, emptyPromiseCallbackWrapper, signal, flowKey); //AudioManager.instance.playSound(playWinSoundId, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);


          this.playSoundAndVolumeDown(playWinSoundId); //const testStart = Date.now();

          const results = await Promise.all(Promises); //const testEnd = Date.now();
          //GameUtilsTools.debugLog('CHECK_TIME', `runShowProcess-TIME-SYM`, { testStart, testEnd, during: testEnd - testStart });

          this._async.removeAbortScope(flowKey);

          aryProcess = [];

          for (let i = 0; i < results.length; i++) {
            const r = results[i];

            if (r.status === 'timeout') {//GameUtilsTools.debugLog(DEBUG_TITLE, `playWinInThisRound_timeOut`, r);
            }
          }
        }
        /**step3. 檢查大獎條件*/


        checkBigWinCondition(winScoreData) {
          return winScoreData.totalOdd >= SPECIAL_WIN_THRESHOLD;
        }

        /**step4-1. 播放得分動畫*/
        async showWinScoreAni(score, showBottomText = false) {
          this.playWinVoiceId(); //--播放得分語音

          this._winScore.register();

          const gameState = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).GameState);
          const flowKey = (_crd && BasicShowResultProcessKey === void 0 ? (_reportPossibleCrUseOfBasicShowResultProcessKey({
            error: Error()
          }), BasicShowResultProcessKey) : BasicShowResultProcessKey).ShowWinScore;

          const scoreDelay = this._gameStepDelayTimeList.get(cfg => {
            var _cfg$result4;

            return (_cfg$result4 = cfg.result) == null ? void 0 : _cfg$result4.showScoreAppear;
          });

          const loopDelay = this._gameStepDelayTimeList.get(cfg => {
            var _cfg$score;

            return (_cfg$score = cfg.score) == null ? void 0 : _cfg$score.loop;
          }); //--loop時間


          let cancelFlag = false;

          const s0 = this._async.createAbortScope(flowKey);

          const soCancel = async () => {
            if (gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME) {
              cancelFlag = true;
              await this._winScore.processAbortCancel();
            }
          };

          const result = this._async.withTimeout(new Promise(() => {}), //--放空的
          scoreDelay - 0.05, null, 'showWinScoreAni_timeout', true, null, s0, flowKey, async value => {
            if (gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME) {
              cancelFlag = true;
              await this._winScore.processAbortCancel();
            }
          }); //const beforeWait_S = Date.now();
          //const inHandle = this._async.waitSecondsTracked(scoreDelay, flowKey, soCancel, true, s0, flowKey);
          //await inHandle.promise;


          await result.promise; //const beforeWait_E = Date.now();
          //GameUtilsTools.debugLog('CHECK_TIME', `runShowProcess-BEFORE_WAIT`, { beforeWait_during: beforeWait_E - beforeWait_S });
          //======testing=======
          //const test1=GameUtilsTools.testTime;
          //const testc1=GameUtilsTools.getTimeStamp();
          //GameUtilsTools.debugLog('SHOW_SCORE', `beforeShow`, { test1,testc1,during:testc1-test1 },'log');

          const otherProcess = (async () => {
            await this._winScore.showFinalScoreIn(score);
            super.showWinScoreAni(score, showBottomText);
            if (cancelFlag) return;

            const s2 = this._async.createAbortScope(flowKey);

            const loopPromise = this._async.waitSecondsTracked(loopDelay, flowKey, soCancel, true, s2, flowKey);

            await loopPromise.promise;
            if (cancelFlag) return;
            await this._winScore.showFinalScoreOut();
          })();

          const flag = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).InterruptProcess);

          if (flag) {
            this._async.abortAll(flowKey);
          }

          return otherProcess;
        }

        resetWinSore() {
          this._winScore.reset();
        }

        async showWinScoreIn(score) {
          await this._winScore.showFinalScoreIn(score);
        }

        async showWinScoreOut() {
          await this._winScore.showFinalScoreOut();
        } //--20251006-新增功能,要在秀出結算面板後才會顯示


        async showBigWinAfterFG(totalOdds, bet) {
          //--企劃表示:是整個全部的FG內的odds加總來計算
          const wd = {
            baseOdds: 0,
            totalOdd: totalOdds,
            betValue: bet,
            multiplier: 0
          };
          const condition = this.checkBigWinCondition(wd);

          if (condition) {
            this.resetAniDuringWin();
            await this._jpShowCtrl.showJPWin(totalOdds, bet);
          }
        } //**step4-2. 播放大獎動畫*/


        async showBigWinAni(winScoreData, lines) {
          const gameState = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).GameState);

          if (gameState != (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME) {
            this.resetAniDuringWin();
            const odds = winScoreData.totalOdd;
            const betValue = winScoreData.betValue;
            await this._jpShowCtrl.showJPWin(odds, betValue);
          }
        } //--處理大贏動畫的流程


        async processBigWin() {
          const gameState = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).GameState);

          if (gameState != (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME) {
            await this.playWinInThisRound(this._scoreData, this._linesData); //--wait---

            const dt = this._gameStepDelayTimeList.get(cfg => {
              var _cfg$Jackpot;

              return (_cfg$Jackpot = cfg.Jackpot) == null ? void 0 : _cfg$Jackpot.beforeWait;
            }); //const dt = 5;


            await this._async.waitSecondsRaw(dt); //--得分後接大獎

            await this.showBigWinAni(this._scoreData);
            this.showScoreForBottomText(this.calculateCurrentRoundOdds(this._scoreData));
          } else {
            //--20251031-FG大獎會變成整把FG結束才秀,如果遇到大獎機制,就先秀一般得分+框
            const playWinPromise = this.playWinInThisRound(this._scoreData, this._linesData);
            const showScorePromise = this.showWinScoreAni(this.getTotalScore(this._scoreData), true); //-讓兩個都完成

            await Promise.allSettled([playWinPromise, showScorePromise]);
          }
        } //**step4-3. 是否直接跳過輪播*/


        checkGoThroughCondition() {
          if (this._gameStateCondition.isDifferentStateNext && !this._gameStateCondition.isFinal) {
            //--狀態不同
            if (this._gameStateCondition.nextRoundState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME || this._gameStateCondition.nextRoundState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).RE_SPINE) {
              return true;
            }
          } else if (!this._gameStateCondition.isDifferentStateNext) {
            if (this._gameStateCondition.nextRoundState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME || this._gameStateCondition.nextRoundState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).RE_SPINE) {
              return true;
            }
          }

          return false;
        }

        //**step5. 輪播前的準備工作(不輪播就直接resolve開鎖)*/

        /**
         * 1.this._mapGroupAniData(這個只有group/odd/lineType的資料描述) 
         * 2.this._mapWinScoreGroupData(這個有key(在盤面位置)跟groupId的對應/IAniData的資料描述)
         */
        async processBeforePlaySequence() {
          //---要處理FG的狀態下,就不進行輪播了,直接資料全部交還slotMachine
          //GameUtilsTools.debugLog(DEBUG_TITLE, 'processBeforePlaySequence', { resetNode, mapGroupAniData: this._mapGroupAniData, mapWinScoreGroupData: this._mapWinScoreGroupData });
          //--轉移控制權(多個物件)--改成直接reset狀態,控制權轉移在new round才會發生
          const waitTime = this._gameStepDelayTimeList.get(cfg => {
            var _cfg$result5;

            return (_cfg$result5 = cfg.result) == null ? void 0 : _cfg$result5.beforeShowSequence;
          });

          let isCancel = false;

          const cancelCallBack = () => {
            isCancel = true;
          };

          const waitPromise = this._async.waitSecondsTracked(waitTime, 'processBeforePlaySequence', cancelCallBack, true);

          await waitPromise.promise;

          if (!isCancel) {
            //-灰階
            this._crossSystemSymbolAniService.processOwnerFunction({
              ownerId: (_crd && SymbolOwnerAgentID === void 0 ? (_reportPossibleCrUseOfSymbolOwnerAgentID({
                error: Error()
              }), SymbolOwnerAgentID) : SymbolOwnerAgentID).SlotMachine,
              name: (_crd && Call_Function_Type === void 0 ? (_reportPossibleCrUseOfCall_Function_Type({
                error: Error()
              }), Call_Function_Type) : Call_Function_Type).SET_ALL_REEL_BRIGHTNESS,
              args: [true]
            });

            let resetNode = this.getResetNodesDataByCondition(); //--預設排除連線框

            await this.processResetAniCtrNode(resetNode, true);
          } //GameUtilsTools.debugLog(DEBUG_TITLE, 'check_after_handOff_allData_aryRunningNode', { aryRunningNode: this._aryRunningNode });

        } //--特殊需求變色用的(wild移動的時候,會變暗)

        /**
         * 特殊需求變色用的(wild移動的時候,會變暗)
         * 在wild移動的時候使用,因為scatter已經在每一輪rollEnd的時候被拔到這裡來,slotMachine不會有scatter的實體,所以沒辦法控制變色
         * 
         * @param symbolId 要變色的symbolId
         * @param isDark 變暗true/變亮false
         * @returns 
         */


        changeAniCtrlColorBySymbolId(symbolId, isDark) {
          return new Promise(resolve => {
            const targetNodes = this.getAniNodesBySameSymbolId(symbolId);
            const colorValue = isDark ? 120 : 255;

            this._async.setPendingResolveFor('changeColorBySymbolId', resolve);

            for (const node of targetNodes) {
              if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId == SCATTER_LIST[0]) {
                var _node$ANIMATION_CTRL5;

                (_node$ANIMATION_CTRL5 = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL]) == null || _node$ANIMATION_CTRL5.goBackToDefault();
              }

              this.changeSpineColor(node, colorValue);
            }

            this._async.safeResolve('changeColorBySymbolId');
          });
        } //**step5-1. 還原動畫控制器狀態(不交還slotMachine)*/


        async processResetAni() {
          this.stopAndHideConnectBoxAni(); //-關閉連線的框 

          const resetNode = this.passAllAniNodeAndReset(); //--這邊會排除wild+scatter(或是正在撥放累計次數動畫的wild/scatter)

          await this.processResetAniCtrNode(resetNode, false); //-開啟全部的亮度(關閉灰階)

          this._crossSystemSymbolAniService.processOwnerFunction({
            ownerId: (_crd && SymbolOwnerAgentID === void 0 ? (_reportPossibleCrUseOfSymbolOwnerAgentID({
              error: Error()
            }), SymbolOwnerAgentID) : SymbolOwnerAgentID).SlotMachine,
            name: (_crd && Call_Function_Type === void 0 ? (_reportPossibleCrUseOfCall_Function_Type({
              error: Error()
            }), Call_Function_Type) : Call_Function_Type).SET_ALL_REEL_BRIGHTNESS,
            args: [false]
          });
        }

        processResetAniCtrNode(resetNode, isDark) {
          return new Promise(resolve => {
            this._async.setPendingResolveFor('resetAniCtrNode', resolve);

            const colorValue = isDark ? 120 : 255;

            for (const node of resetNode) {
              var _node$ANIMATION_CTRL6;

              //--不在特殊模式下就進行一般的還原/變色
              (_node$ANIMATION_CTRL6 = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL]) == null || _node$ANIMATION_CTRL6.goBackToDefault();

              if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO] != null) {
                if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId == SCATTER_LIST[0]) {
                  //this.changeScatterLayer(node, !isDark);//--還原是isDark=false的狀態,所以要取反2
                  const layer = isDark ? STAGE_ID.NOT_ROUND_SCATTER_CONTAINER : STAGE_ID.SCATTER_SHOW_CONTAINER;
                  this.changeScatterLayer(node, layer); //--換下去
                }

                this.changeSpineColor(node, colorValue);
              }
            }

            this._async.safeResolve('resetAniCtrNode');
          });
        }

        changeSpineColor(target, colorValue) {
          const baseComponent = target[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL];

          if (baseComponent && baseComponent instanceof (_crd && MultiSpineController === void 0 ? (_reportPossibleCrUseOfMultiSpineController({
            error: Error()
          }), MultiSpineController) : MultiSpineController)) {
            let spineMap = baseComponent.getMultiSpineController();

            for (const controller of spineMap) {
              const sp = controller.spine;
              sp.color = color(colorValue, colorValue, colorValue, sp.color.a);
            }
          } else if (baseComponent && baseComponent instanceof (_crd && AnimationController === void 0 ? (_reportPossibleCrUseOfAnimationController({
            error: Error()
          }), AnimationController) : AnimationController)) {
            // 使用aniCtrl獨有的for AEP API
            const aniCtrl = baseComponent;

            if (aniCtrl && aniCtrl.isAEP_SPINE && aniCtrl.aepSpines.length > 0) {
              for (const sp of aniCtrl.aepSpines) {
                sp.color = color(colorValue, colorValue, colorValue, sp.color.a);
              }
            }
          } else if (baseComponent && baseComponent instanceof (_crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
            error: Error()
          }), SpineController) : SpineController)) {
            baseComponent.spine.color = color(colorValue, colorValue, colorValue, baseComponent.spine.color.a);
          }
        } //**step6. 播放輪播動畫*/


        async playMultipleSequence() {
          var _this$_async$getAbort;

          await super.playMultipleSequence(); //============開始執行輪播=================================================

          this._abortPlaySequence = false;

          this._async.reset();

          const runId = Date.now().toString(36);
          let playIndex = 0; //--index就是key值

          let singleLineScore = 0;

          const totalPlayTime = this._gameStepDelayTimeList.get(cfg => {
            var _cfg$result6;

            return (_cfg$result6 = cfg.result) == null ? void 0 : _cfg$result6.totalShowWin;
          }); //--20260126-


          let signal = (_this$_async$getAbort = this._async.getAbortController(SIGNAL_KEY.MULTIPLE_SEQUENCE)) == null ? void 0 : _this$_async$getAbort.signal;

          if (!signal) {
            signal = this._async.createAbortScope(SIGNAL_KEY.MULTIPLE_SEQUENCE, key => {//console.log(`[playMultipleSequence] ${key} 被中止`);
            });
          }

          while (this._mapGroupAniData.size > 0) {
            //--排除wild-
            let aniGroups = this.getAniNodeListByGroups([playIndex]);
            const isWildExist = this.checkWildIndGroupExist(aniGroups);
            let wildPlayState = '';

            if (isWildExist) {
              wildPlayState = this.getRoundWildPlayCountIndex(playIndex);
            }

            const Promises = [];

            for (const group of aniGroups) {
              const aniInterfaceComponent = group[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL];
              group.active = true;
              if (group[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).OTHER] == SP_SHOWING) continue;
              this.changeSpineColor(group, 255);

              if (group[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId == SCATTER_LIST[0]) {
                this.changeScatterLayer(group, STAGE_ID.SYMBOL_SHOW_CONTAINER); //--交換scatter位置到原本的位置1
              }

              const isAwardBox = group[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].includes(DEFAULT_GROUP_AWARD) ? true : false;
              const aniState = group[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId !== WILD_LIST[0] ? {
                aniState: (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                  error: Error()
                }), AnimationStateType) : AnimationStateType).Win
              } : {
                aniState: wildPlayState
              }; //const aniState = (wildPlayState != '') ? { aniState: wildPlayState } : { aniState: AnimationStateType.Win };
              //---實驗功能(你他媽的我就不信這樣還會pending爆開)----

              if (!isAwardBox) {
                const key = `${runId}:${playIndex}:${group.uuid}`;

                const deffer = this._async.createDeferredFor(key);

                const playAniPromise = aniInterfaceComponent.playAniInPromise(aniState).then(() => this._async.safeResolve(key)).catch(err => {
                  this._async.safeResolve(key);

                  throw err;
                });
                const raced = Promise.race([deffer.promise, playAniPromise]);

                const p = this._async.withTimeout(raced, //0.2,
                totalPlayTime, //1.1,
                {
                  playIndex,
                  node: group.name,
                  prefab: group[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                    error: Error()
                  }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID]
                }, 'playAniGroup', true //--超時也resolve
                );

                Promises.push(p.promise);
              } else {
                aniInterfaceComponent.playAni({
                  aniState: (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                    error: Error()
                  }), AnimationStateType) : AnimationStateType).Win
                });
              }
            } //-計算單線得分


            singleLineScore = this._mapGroupAniData.get(playIndex).odd;
            singleLineScore = this.getRoundSingleLineScore(singleLineScore);
            this.showWinScoreIn(singleLineScore);
            /*
            GameUtilsTools.debugLog(DEBUG_TITLE, 'playMultipleSequence', {
                playIndex,
                wildPlayState, singleLineScore,
                mapGroupAniData: this._mapGroupAniData,
                betValue: this._cloneScoreData.betValue
            });*/

            try {
              //--這邊做wild
              //await Promise.allSettled([Promises,showScorePromise]);
              await Promise.all(Promises);
            } catch (e) {//--ZZZZ
            } //--加上外部中斷要切掉流程


            if (this._abortPlaySequence) break; //--外部中斷時,直接切斷流程

            playIndex++;

            if (playIndex >= this._mapGroupAniData.size) {
              playIndex = 0;
            } //await this._async.waitSecondsCancelable(0.3);--可取消會回呼


            let eachWinTime = this._gameStepDelayTimeList.get(cfg => {
              var _cfg$result7;

              return (_cfg$result7 = cfg.result) == null ? void 0 : _cfg$result7.eachWin;
            });

            let finishRound = false;

            if (playIndex == 0) {
              //--結束整輪的循環,重新開啟一輪(2s)
              finishRound = true;
              eachWinTime = this._gameStepDelayTimeList.get(cfg => {
                var _cfg$result8;

                return (_cfg$result8 = cfg.result) == null ? void 0 : _cfg$result8.beforeShowSequence;
              });
            }

            if (finishRound) {
              this._winScore.forceGoDefaultAndReset();

              this.stopAndHideConnectBoxAni();
              let resetNode = this.getResetNodesDataByCondition(); //--剔除連線框

              await this.processResetAniCtrNode(resetNode, false); //-開啟全部的亮度(關閉灰階)

              this._crossSystemSymbolAniService.processOwnerFunction({
                ownerId: (_crd && SymbolOwnerAgentID === void 0 ? (_reportPossibleCrUseOfSymbolOwnerAgentID({
                  error: Error()
                }), SymbolOwnerAgentID) : SymbolOwnerAgentID).SlotMachine,
                name: (_crd && Call_Function_Type === void 0 ? (_reportPossibleCrUseOfCall_Function_Type({
                  error: Error()
                }), Call_Function_Type) : Call_Function_Type).SET_ALL_REEL_BRIGHTNESS,
                args: [false]
              }); //await this._async.waitSecondsRaw(eachWinTime);


              await this._async.waitSecondsCancelable(eachWinTime, signal, SIGNAL_KEY.MULTIPLE_SEQUENCE);
              if (this._abortPlaySequence) return; //console.log("******finishRound reset done*******", this._abortPlaySequence);

              this._abortPlaySequence = false;

              this._crossSystemSymbolAniService.processOwnerFunction({
                ownerId: (_crd && SymbolOwnerAgentID === void 0 ? (_reportPossibleCrUseOfSymbolOwnerAgentID({
                  error: Error()
                }), SymbolOwnerAgentID) : SymbolOwnerAgentID).SlotMachine,
                name: (_crd && Call_Function_Type === void 0 ? (_reportPossibleCrUseOfCall_Function_Type({
                  error: Error()
                }), Call_Function_Type) : Call_Function_Type).SET_ALL_REEL_BRIGHTNESS,
                args: [true]
              });

              await this.processResetAniCtrNode(resetNode, true);
            } else {
              //await this._async.waitSecondsRaw(eachWinTime);//-直接中斷
              await this._async.waitSecondsCancelable(eachWinTime, signal, SIGNAL_KEY.MULTIPLE_SEQUENCE);
              if (this._abortPlaySequence) return; //console.log("******finishRound reset DONE*******", this._abortPlaySequence);

              this.showWinScoreOut();
              this.stopAndHideConnectBoxAni();
              this._abortPlaySequence = false;
              let resetNode = this.getResetNodesDataByCondition(); //--剔除連線框

              await this.processResetAniCtrNode(resetNode, true); //--反黑
            }
          }

          this._async.safeResolve();
        } //--在全秀之後要走的分支


        playOtherWinShowAni() {} //--播放wild動畫


        playWildAni() {} //--播放bonus動畫


        playBonusAni() {} //--播放垂直的動畫


        showAndWaitForVerticalAni(totalScore) {
          return Promise.resolve();
        }

        playShowAnimation() {
          return;
        } //=====================================<標準表演流程>=================================================
        //==================解析winScoreData===========

        /**
         * <<<TODO--LOCK的資料每局要清掉group,再產生新的得分資料時,先檢查是否存在
         * 如果存在把group塞進去>>>
         * slotMachine裡面的gameIcon在上下各有一個的預備格,所以實際索引上要+1
         * 在這裡處理每一行的得分資料
         * PS-在鎖定的狀態下map裡面是不會有wild的資料, groupId要在這邊先塞起來!!!!!
         * reBuildIPlayDataFromKeyString--->這個可以把key塞回IPlayAniData
         * @param winLineData IMatchInfoForRound 中線資料
         * @returns 
         */


        async processWinScoreData(winLineData) {
          //GameUtilsTools.debugLog(DEBUG_TITLE, 'processWinScoreData', { winLineData });
          let aniData;

          this._mapWinScoreGroupData.clear();

          this._mapGroupAniData.clear();

          const handOffObjs = [];

          for (let i = 0; i < winLineData.length; i++) {
            const machPos = winLineData[i].matchPos;

            this._mapGroupAniData.set(i, {
              odd: winLineData[i].odd,
              lineType: winLineData[i].winLineID
            });

            for (let j = 0; j < machPos.length; j++) {
              const symbolData = machPos[j];
              const key = `${symbolData.reelIndex}:${symbolData.iconIndex + 1}:${symbolData.realSymbolID}`; // 檢查是否已經處理過這個位置的資料

              if (this._mapWinScoreGroupData.has(key)) {
                this._mapWinScoreGroupData.get(key).group.push(i); // 如果已經處理過，則將當前的groupId加入到已存在的資料中


                continue; // 已經處理過，跳過
              } else {
                aniData = {
                  reelIndex: symbolData.reelIndex,
                  iconIndex: symbolData.iconIndex + 1,
                  // 要+1(算分工具沒有上下兩個準備位置)
                  symbolId: symbolData.realSymbolID,
                  aniId: '',
                  tokenId: '',
                  // 屬性要寫好(用IPlayAniData)
                  wPos: null,
                  // 屬性要寫好(用IPlayAniData)
                  containerNodeId: STAGE_ID.SYMBOL_SHOW_CONTAINER,
                  otherData: key
                };
                handOffObjs.push(aniData);

                this._mapWinScoreGroupData.set(key, {
                  IAniData: aniData,
                  group: [i]
                });
              }
            }
          } //--這邊在挑過一次資料


          let cutHandoffData = this.cutExistWildAndPushGroup(handOffObjs);
          const goBackNoWinWild = this.findWildWithoutWin(cutHandoffData);
          /*
          GameUtilsTools.debugLog(DEBUG_TITLE, 'processWinScoreData_before_handOff', {
              aryRunningNode: this._aryRunningNode,
              mapWinScoreGroupData: this._mapWinScoreGroupData,
              mapGroupAniData: this._mapGroupAniData,
              handOffObjs: handOffObjs,
              cutHandoffData: cutHandoffData,
              goBackNoWinWild: goBackNoWinWild
          });*/
          //---計算FG內的odds
          //this.calculateBigWinAfterFg();
          //-交回控制權(多個物件)

          await this._crossSystemSymbolAniService.multiHandoffBySameOwner(cutHandoffData, this); //--將沒有中獎的wild還回slotMachine

          if (goBackNoWinWild.length > 0) {
            /**
             * 在表演位移/不位移效果後,會將wild重寫回map,將owner變成slotMachine.
             * 有得獎的狀態下,才會handoff給ShowAniController.
             * 沒有中獎的wild的owner還在slotmachine身上,
             * 在handoff時,因為owner一樣,所以不會做任何動作
             * 所以這邊要再把要轉移回去的wild改變他的owner為ShowAniController
             */
            //this._crossSystemSymbolAniService.debugCheckAllOwners();
            //console.log();
            this._crossSystemSymbolAniService.multiUnRegister(goBackNoWinWild);

            await this._crossSystemSymbolAniService.multiRegistryByID(goBackNoWinWild, (_crd && SymbolOwnerAgentID === void 0 ? (_reportPossibleCrUseOfSymbolOwnerAgentID({
              error: Error()
            }), SymbolOwnerAgentID) : SymbolOwnerAgentID).ShowAniController); //this._crossSystemSymbolAniService.debugCheckAllOwners();
            //console.log();

            await this._crossSystemSymbolAniService.multiHandoffBySameOwnerID(goBackNoWinWild, (_crd && SymbolOwnerAgentID === void 0 ? (_reportPossibleCrUseOfSymbolOwnerAgentID({
              error: Error()
            }), SymbolOwnerAgentID) : SymbolOwnerAgentID).SlotMachine);
          }
        } //============================== 其他需要用到的表演=========================


        async triggerWildNoMoveAnimation(value) {
          const movement = value.movement;
          const aniData = value.iplayData;
          const reelIndex = aniData.reelIndex;

          const wildNode = this._moveWildDataMap.get(aniData.reelIndex).wildNode;

          if (!wildNode) return;
          const move = {
            reelFXWpos: value.reelWpos,
            WildMovementData: movement,
            wildNode: wildNode
          };

          this._wildMoveFXCtrl.setWildMoveData(move); //await this.reSetWildLayerAndSort();


          await this._wildMoveFXCtrl.triggerWildNoMoveAnimation(reelIndex);
        }

        async triggerWildMoveAnimation(value) {
          const movement = value.movement;
          const aniData = value.iplayData;
          const reelIndex = aniData.reelIndex;

          const wildNode = this._moveWildDataMap.get(aniData.reelIndex).wildNode;

          if (!wildNode) return;
          this.reSetScatterDuringWildMove();
          const move = {
            reelFXWpos: value.reelWpos,
            WildMovementData: movement,
            wildNode: wildNode
          };

          this._wildMoveFXCtrl.setWildMoveData(move); //await this.reSetWildLayerAndSort();


          await this._wildMoveFXCtrl.triggerWildMoveAnimation(reelIndex);
        }

        reSetScatterDuringWildMove() {
          const scatterContainer = this._aniNodeStageContainerMap[STAGE_ID.NOT_ROUND_SCATTER_CONTAINER];

          for (const node of this._aryRunningNode) {
            if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId === SCATTER_LIST[0]) {
              node.parent = scatterContainer;
            }
          }
        }
        /**
         * 在大獎表演當下,要把scatter的動畫還原成default狀態
         */


        resetAniDuringWin() {
          for (const node of this._aryRunningNode) {
            var _node$ANIMATION_CTRL7;

            (_node$ANIMATION_CTRL7 = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL]) == null || _node$ANIMATION_CTRL7.goBackToDefault();
          }
        } //--20260120-檢查場面上有沒有scatter/wild(進入FG前需要用的)

        /**
         * 20260130-檢查場面上有沒有scatter/wild(NG-to->FG前需要用的)
         * @param reels 進入FG前最後一把的盤面有獲取FG的軸
         * @returns 
         */


        checkScAndWildExistInRunningNode(reels) {
          for (const node of this._aryRunningNode) {
            const symbolReelIndex = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex;
            if (!reels.includes(symbolReelIndex)) continue;

            if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId === SCATTER_LIST[0] || node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId === WILD_LIST[0]) {
              return true;
            }
          }

          return false;
        }
        /**
         * 20260120-調整需求.
         * 在場面上有scatter/wild且在進入FG前要秀FG的進場動畫
         */


        async showScatterAndWildWinAniBeforeFG(reels) {
          /*
          if (this._previousHasWin) {
              const dt = this._gameStepDelayTimeList.get(cfg => cfg.fg?.beforeWait);
              await this._async.waitSecondsRaw(dt);//--等一等
          }*/
          //const dt = this._gameStepDelayTimeList.get(cfg => cfg.fg?.beforeWait);
          //await this._async.waitSecondsRaw(dt);//--等一等
          const reelSet = new Set(reels);
          const tasks = [];

          for (const node of this._aryRunningNode) {
            const symbolReelIndex = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex; //if (!reels.includes(symbolReelIndex)) continue;

            if (!reelSet.has(symbolReelIndex)) continue;

            if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId === SCATTER_LIST[0] || node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId === WILD_LIST[0]) {
              var _node$ANIMATION_CTRL8;

              const symbolId = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId;
              const aniType = symbolId === WILD_LIST[0] ? 'Connect_1' : (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                error: Error()
              }), AnimationStateType) : AnimationStateType).Win;
              (_node$ANIMATION_CTRL8 = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL]) == null || _node$ANIMATION_CTRL8.goBackToDefault();
              this.changeSpineColor(node, 225);

              if (symbolId === SCATTER_LIST[0]) {
                this.changeScatterLayer(node, STAGE_ID.SC_SHOW_FX_CONTAINER);
              }

              tasks.push(new Promise(async resolve => {
                const ani = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL];

                if (symbolId === SCATTER_LIST[0]) {
                  this.changeScatterLayer(node, STAGE_ID.SC_SHOW_FX_CONTAINER);
                }

                await ani.playAniInPromise({
                  aniState: aniType
                });
                resolve();
              }));
            }
          }

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).Sc_get, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
            error: Error()
          }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).BtnAS);
          await Promise.all(tasks);
        }
        /**
         * Scatter因為一出現就直接被拔出slotMachine
         * 所以在一開始秀<全部中獎>的時候關閉盤面亮度會漏掉scatter
         */


        checkScatterWithWin() {
          for (const node of this._aryRunningNode) {
            if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId === SCATTER_LIST[0]) {
              if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].length <= 1) {
                var _node$ANIMATION_CTRL9;

                //--沒有中獎..反灰
                (_node$ANIMATION_CTRL9 = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL]) == null || _node$ANIMATION_CTRL9.goBackToDefault();
                this.changeSpineColor(node, 120);
                this.changeScatterLayer(node, STAGE_ID.NOT_ROUND_SCATTER_CONTAINER); //-換下去
                //node.parent = notWinRoundSpNodeContainer;
              }
            }
          }
        } //-改變scatter的層級
        //private changeScatterLayer(targetNode: Node, isWin: boolean): void {


        changeScatterLayer(targetNode, layerID) {
          const targetContainer = this._aniNodeStageContainerMap[layerID];
          targetNode.parent = targetContainer;
        }

        async showGetReSpinEffect(value) {
          //---PS-ANI_CTRL_EVT-0.33s
          //const groups = new Map<number, Node[]>();
          const groups = new Map();

          for (let item of value.info) {
            var _groups$get;

            const aniNode = this.getNodeByReelIndexAndIconIndex(item.reelIndex, item.iconIndex);
            aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).OTHER] = SP_SHOWING; //--註記物件現在為特殊播放模式

            const arr = (_groups$get = groups.get(item.reelIndex)) != null ? _groups$get : [];
            arr.push({
              n: aniNode,
              wpos: item.wPos
            });
            groups.set(item.reelIndex, arr);
          }

          const particleTime = this._gameStepDelayTimeList.get(cfg => {
            var _cfg$other;

            return (_cfg$other = cfg.other) == null ? void 0 : _cfg$other.particleTotalDuration;
          });

          const tasks = [];
          let order = 0; // 只用來做可選的錯位延遲

          for (const reel of value.index) {
            const nodes = groups.get(reel); //-配對選取(index索引要與group相符合)

            if (!nodes) continue;

            for (const aniInfo of nodes) {
              const sequence = order++;
              const aniNode = aniInfo.n;
              aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL].goBackToDefault();
              const wPos = aniInfo.wpos; // await this._async.waitSecondsRaw(0.008 * sequence);//--for delay

              const ani = aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL]; //--20260304棄用-因需求改變
              //const targetContainer = this._aniNodeStageContainerMap[STAGE_ID.WILD_SHOW_FX_CONTAINER];
              //aniNode.parent = targetContainer;
              //this.sortForWildNodes(STAGE_ID.WILD_SHOW_FX_CONTAINER, 'showGetReSpinEffect_before');

              let resolveFunc = null;
              const p = new Promise(resolve => {
                /**
                 * <playAniWithFrameEvtCallBack>
                 * 1.本身不是promise它只會呼叫你注入的function
                 * 2.要使用promise除了使用其他的API不然就是自己包一層
                 * 3.原始設計就是要做callback的,已經額外提供complete的callback我不想再新增突破下限的功能了
                 */
                resolveFunc = resolve;
                ani.playAniWithFrameEvtCallBack(async () => {
                  //--這邊拿到的位置一定是在頭頂
                  (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                    error: Error()
                  }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                    error: Error()
                  }), SoundList) : SoundList).wild_in, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
                    error: Error()
                  }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                    error: Error()
                  }), AudioSourceList) : AudioSourceList).BtnAS);
                  await this._countTimesFXController.playCountTimesFX([{
                    startPos: wPos,
                    endPos: value.endPos
                  }], particleTime);
                  aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                    error: Error()
                  }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).OTHER] = null; //--註記物件現在為特殊播放模式

                  if (resolveFunc) {
                    resolveFunc();
                    resolveFunc = null;
                  }
                }, async () => {
                  //-有回來沒反應..
                  //GameUtilsTools.debugLog(DEBUG_TITLE, 'showGetReSpinEffect_comeBack', { aniNode });
                  aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                    error: Error()
                  }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).OTHER] = null; //--註記物件現在為特殊播放模式

                  ani.playAni((_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                    error: Error()
                  }), AnimationStateType) : AnimationStateType).Idle);
                }, false, {
                  aniState: WILD_COUNT_ANI_STATE_NAME
                });
              });

              const cancel = value => {
                ani.playAni((_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                  error: Error()
                }), AnimationStateType) : AnimationStateType).Idle);
                aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).OTHER] = null;

                if (resolveFunc) {
                  resolveFunc();
                  resolveFunc = null;
                }
              };

              const single = this._async.createAbortScope(SIGNAL_KEY.GET_RS_EFFECT);

              this._async.registerCancelablePromise(SIGNAL_KEY.GET_RS_EFFECT + '_' + sequence, p, cancel, single, SIGNAL_KEY.GET_RS_EFFECT);

              tasks.push(p);
              const flag = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
                error: Error()
              }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
                error: Error()
              }), GameGlobalKeys) : GameGlobalKeys).InterruptProcess);

              if (flag) {
                this._async.abortAll(SIGNAL_KEY.GET_RS_EFFECT);
              }
            }
          }

          await Promise.all(tasks); //await this.reSetWildLayerAndSort();
        }

        async showGetScatterFGEffect(value) {
          //--這裡有可能scatter沒有中獎不會在runningPool裡面--直接拔出來
          const groups = new Map();
          let targetContainer = this._aniNodeStageContainerMap[STAGE_ID.SYMBOL_SHOW_CONTAINER];
          let uiTransform = targetContainer.getComponent(UITransform);

          for (let item of value.info) {
            const aniNode = this.getNodeByReelIndexAndIconIndex(item.reelIndex, item.iconIndex);

            if (aniNode) {
              var _groups$get2;

              aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).OTHER] = SP_SHOWING; //--註記物件現在為特殊播放模式

              this.changeSpineColor(aniNode, 255);
              this.changeScatterLayer(aniNode, STAGE_ID.SC_SHOW_FX_CONTAINER); //-3

              const arr = (_groups$get2 = groups.get(item.reelIndex)) != null ? _groups$get2 : [];
              arr.push(aniNode);
              groups.set(item.reelIndex, arr);
            } //GameUtilsTools.debugLog(DEBUG_TITLE, 'check_scatter_aniNode', { aniNode, item, runningNodes: this._aryRunningNode });

          }

          const particleTime = this._gameStepDelayTimeList.get(cfg => {
            var _cfg$other2;

            return (_cfg$other2 = cfg.other) == null ? void 0 : _cfg$other2.particleTotalDuration;
          });

          const tasks = [];
          let order = 0; // 只用來做可選的錯位延遲

          for (const reel of value.index) {
            const nodes = groups.get(reel); //-配對選取(index索引要與group相符合)

            if (!nodes) continue;

            for (const aniNode of nodes) {
              const sequence = order++;
              const ani = aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL];
              let resolveFunc = null;
              const p = new Promise(resolve => {
                resolveFunc = resolve;
                ani.playAniWithFrameEvtCallBack(async () => {
                  let localPos = aniNode.getPosition().clone();
                  const startPos = uiTransform.convertToWorldSpaceAR(localPos);
                  await this._countTimesFXController.playCountTimesFX([{
                    startPos,
                    endPos: value.endPos
                  }], particleTime);

                  if (resolveFunc) {
                    resolveFunc();
                    resolveFunc = null;
                  }
                }, async () => {
                  //-有回來沒反應..
                  //this.changeScatterLayer(aniNode, STAGE_ID.SYMBOL_SHOW_CONTAINER);
                  ani.goBackToDefault(); //await this._async.waitSecondsRaw(0.2);
                  //ani.playAni({ aniState: AnimationStateType.Idle });
                }, false, {
                  aniState: SCATTER_FG_ANI_STATE_NAME
                });
              });

              const cancel = value => {
                ani.playAni((_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                  error: Error()
                }), AnimationStateType) : AnimationStateType).Idle); //this.changeScatterLayer(aniNode, STAGE_ID.SYMBOL_SHOW_CONTAINER);
                //aniNode[DYN_NODE_PROPERTIES.OTHER] = null;

                if (resolveFunc) {
                  resolveFunc();
                  resolveFunc = null;
                }
              };

              const single = this._async.createAbortScope(SIGNAL_KEY.GET_FG_EFFECT);

              this._async.registerCancelablePromise(SIGNAL_KEY.GET_FG_EFFECT + '_' + sequence, p, cancel, single, SIGNAL_KEY.GET_FG_EFFECT);

              tasks.push(p);
              const flag = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
                error: Error()
              }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
                error: Error()
              }), GameGlobalKeys) : GameGlobalKeys).InterruptProcess);

              if (flag) {
                this._async.abortAll(SIGNAL_KEY.GET_FG_EFFECT);
              }
            }
          }

          await Promise.all(tasks);
          /*
          await ani.playAniWithCallBackParameter<[]>(
              () => [],
              false,
              { aniState: SCATTER_FG_ANI_STATE_NAME },
              []
          );*/
          //--目前播放會產生

          /**
           * [.WebGL-0x138410968000] GL_INVALID_OPERATION: glDrawElements: Insufficient buffer size.
           * VBO大小不匹配
           */
        }
        /**
         * 在runningNode當中,查找吻合特定軸與uniqueSymbolId的node
         * @param reelId 
         * @param uniqueSymbolId 
         */


        getUniqueSymbolNodeInReel(reelId, uniqueSymbolId) {
          for (const node of this._aryRunningNode) {
            if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex === reelId && node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId === uniqueSymbolId) {
              return node;
            }
          }

          return null;
        }

        getNodeByReelIndexAndIconIndex(reelIndex, iconIndex) {
          return this._aryRunningNode.find(n => n[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex === reelIndex && n[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconIndex === iconIndex);
        } //--根據不同的獲獎總賠率,播放不同的得分語音


        playWinVoiceId() {
          const roundOdds = this._scoreData.totalOdd;
          let lowVoiceList = [];
          let conditionNumber = 0;

          if (roundOdds >= 5 && roundOdds <= 10) {
            conditionNumber = 20; //--20%的機率

            lowVoiceList = [(_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).Score_01, (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).Score_03, (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).Score_04, (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).Score_05];
          } else if (roundOdds >= 11 && roundOdds <= 24) {
            conditionNumber = 30; //--30%的機率

            lowVoiceList = [(_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).Score_06, (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).Score_07, (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).Score_08, (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).Score_09];
          }

          if (conditionNumber > 0) {
            const checkFlag = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
              error: Error()
            }), GameUtilsTools) : GameUtilsTools).createAndShuffleProbabilityPool(conditionNumber);

            if (checkFlag) {
              const randomIndex = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
                error: Error()
              }), GameUtilsTools) : GameUtilsTools).getRangeRandomInt(0, lowVoiceList.length - 1);
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.playSound(lowVoiceList[randomIndex], (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
                error: Error()
              }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                error: Error()
              }), AudioSourceList) : AudioSourceList).BasicAS);
            }
          }
        }

        async playSoundAndVolumeDown(playWinSoundId) {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound(playWinSoundId, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
            error: Error()
          }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).BtnAS);

          if (playWinSoundId === (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).symWin3) {
            var _this$_dummyAudioClip, _this$_dummyAudioClip2, _this$_dummyAudioClip3;

            //-_dummyAudioClip
            this._bgmCtrl.setMusicVolume(95); //--降低音量


            const runDuration = (_this$_dummyAudioClip = (_this$_dummyAudioClip2 = (_this$_dummyAudioClip3 = this._dummyAudioClip).getDuration) == null ? void 0 : _this$_dummyAudioClip2.call(_this$_dummyAudioClip3)) != null ? _this$_dummyAudioClip : 0;
            await (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
              error: Error()
            }), GameUtilsTools) : GameUtilsTools).DeferByTweenPromise(runDuration); //--等音效進去

            this._bgmCtrl.setMusicVolume(100); //--還原音量
            //--不行,沒辦法知道是否靜音

            /*
            let fuckNode = new Node('dummyNode');
            let audioFuckSource = fuckNode.addComponent(AudioSource);
            audioFuckSource.clip = this._dummyAudioClip;
            audioFuckSource.volume = 1;
            fuckNode.once(AudioSource.EventType.ENDED, () => {
                //-this._bgmCtrl
                fuckNode = null;
                this._bgmCtrl.setMusicVolume(100);//--還原音量
            })*/

          }
        } //--20260209-NEW-


        getPlayWinSoundId_New(odds) {
          let returnId;
          const lowOdds = 9;
          const middleOdds = 19; //const highOdds = 20;

          if (odds <= lowOdds) {
            returnId = (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).symWin1;
          } else if (odds <= middleOdds) {
            returnId = (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).symWin2;
          } else {
            //--odds >= highOdds
            returnId = (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).symWin3;
          }

          return returnId;
        } //--擷取篩選條件用的soundId


        getPlayWinSoundId(aniGroups) {
          let hasHigh = false;
          let hasMiddle = false;
          let hasLow = false;

          for (const group of aniGroups) {
            var _group$SYMBOL_ICON_IN;

            const symbolId = (_group$SYMBOL_ICON_IN = group[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO]) == null ? void 0 : _group$SYMBOL_ICON_IN.symbolId;
            if (symbolId == undefined || symbolId === null) continue; //--因為symbol有一個是0

            if (HIGH_ODDS_SYMBOL_LIST.includes(symbolId)) {
              hasHigh = true;
            }

            if (MIDDLE_ODDS_SYMBOL_LIST.includes(symbolId)) {
              hasMiddle = true;
            }

            if (LOW_ODDS_SYMBOL_LIST.includes(symbolId)) {
              hasLow = true;
            }
          }

          if (hasHigh) {
            return (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).symWin3;
          } else if (hasMiddle) {
            return (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).symWin2;
          } else if (hasLow) {
            return (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).symWin1;
          }
        }

        async createAndPushInPool(IAniData) {
          // 這裡可以實作創建和推入池的邏輯
          IAniData.wPos = await this.createOutSideConnectBox(IAniData);

          if (!IAniData.wPos) {
            return Promise.resolve(null);
          }

          let aniNode = this._crossSystemSymbolAniService.createAndRegister(IAniData, this);

          if (aniNode) {
            await this.addAnimationData(aniNode, IAniData);
            aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].push(DEFAULT_GROUP_AWARD);
            let aniInterfaceComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(aniNode);
            aniInterfaceComponent.playAni((_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
              error: Error()
            }), AnimationStateType) : AnimationStateType).Win);
          }
        } //--產生外部連線框(這裡要進行重複剃除)


        async createOutSideConnectBox(IAniData) {
          const existCheckingData = this.checkIsExistAniNode(IAniData);

          if (existCheckingData.flag) {
            //--已有
            this.setExistAniNode(IAniData);
            return Promise.resolve(null);
          } else {
            //--產新的
            //---或是直接拿一個不存在的id讓slotMachine回傳worldPosition
            let wPos = await (_crd && NotifyCation === void 0 ? (_reportPossibleCrUseOfNotifyCation({
              error: Error()
            }), NotifyCation) : NotifyCation).getInstance().requestData((_crd && SlotResponseSubject === void 0 ? (_reportPossibleCrUseOfSlotResponseSubject({
              error: Error()
            }), SlotResponseSubject) : SlotResponseSubject).RES_GAME_SLOT_SUBJECT, (_crd && SlotRequestEvent === void 0 ? (_reportPossibleCrUseOfSlotRequestEvent({
              error: Error()
            }), SlotRequestEvent) : SlotRequestEvent).GET_WORLD_POSITION, (_crd && SlotNotifySubject === void 0 ? (_reportPossibleCrUseOfSlotNotifySubject({
              error: Error()
            }), SlotNotifySubject) : SlotNotifySubject).GAME_SLOT_SUBJECT, {
              reelIndex: IAniData.reelIndex,
              iconIndex: IAniData.iconIndex
            } // 直接傳 payload
            );
            return Promise.resolve(wPos);
          }
        } //--該局結束回收awardBox


        processDataBeforeRemoveByAwardBox() {
          const awardBox = this.getAniWithRemoveFromPoolByGroupId(DEFAULT_GROUP_AWARD);
          const container = this._aniNodeStageContainerMap[STAGE_ID.AWARD_BOX_SHOW_CONTAINER];

          for (let aniNode of awardBox) {
            const prefabId = aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID];
            aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL].goBackToDefault();
            this.removeSingleNodeData(aniNode);
            container.removeChild(aniNode); //GameUtilsTools.debugLog(DEBUG_TITLE, 'processDataBeforeRemoveByAwardBox', { size: container.children.length });
            //--回收到物件池

            (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
              error: Error()
            }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().pushInstanceToPool(prefabId, aniNode);
          }
        } //--向mediator/handoff取消註冊


        unregisterHandOffByAwardBox(targetGroups) {
          for (let item of targetGroups) {
            const registerData = {
              reelIndex: item[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex,
              iconIndex: item[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconIndex,
              symbolId: item[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId
            };

            this._crossSystemSymbolAniService.unRegisterData(registerData);
          }
        }

        async runTest(value) {
          /*
          let testData = [1, 2, 3, 4];//--外面產出的結果牌組
          let aniData: IPlayAniData;
          aniData = this._crossSystemSymbolAniService.buildPlayData(
              {
                  symbolId: testData[0],
                  reelIndex: 0,
                  iconIndex: 0 + 1,
                  groupId: 0
                   });
          aniData.containerNodeId = STAGE_ID.SYMBOL_SHOW_CONTAINER;
          aniData.groupId = 0;
          this._crossSystemSymbolAniService.handoff(aniData, this);
          */
        }

        async runTest2(value) {// 在這裡執行測試邏輯
        }
        /**測試模式區域 */

        /*
        public override async runTest1(value?: any): Promise<void> {
            // 在這裡執行測試邏輯
            let testData = [0, 1, 2, 3];//--外面產出的結果牌組
            let aniData: IPlayAniData;
            aniData = this._crossSystemSymbolAniService.buildPlayData(
                {
                    symbolId: testData[0],
                    reelIndex: 0,
                    iconIndex: 0 + 1,
                    groupId: 0
                 });
            aniData.containerNodeId = STAGE_ID.SYMBOL_SHOW_CONTAINER;
            aniData.groupId = 0;
            this._crossSystemSymbolAniService.handoff(aniData, this);
             const clone = <IPlayAniData>GameUtilsTools.deepClone(aniData);
            clone.symbolId = 99;
            clone.groupId = 99;
            clone.containerNodeId = STAGE_ID.AWARD_BOX_SHOW_CONTAINER;
            clone.wPos = await this.createOutSideConnectBox(clone);
            //-return await this._aniCrossServiceProxyFactory.createAndRegister(reelData);
            this._crossSystemSymbolAniService.createAndRegister(clone, this).then(async (aniNode: Node | null) => {
                // 在這裡處理aniNode
                 let awardNode = await this.addAnimationData(aniNode, clone);
                let aniInterfaceComponent = AniSysTools.findAndGetIAniComponent(awardNode) as IAnimationControl;
                aniInterfaceComponent.playAni(AnimationStateType.Win);
                console.log('awardBox', aniNode, this._aryRunningNode);
               })
            //--轉移控制權----
            await this.addTweenDelay(5);
            let targetBox = this.getAniNodesByGroupId(0);
            let handoffData =
            {
                reelIndex: targetBox[0][DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex,
                iconIndex: targetBox[0][DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconIndex,
                symbolId: targetBox[0][DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId,
                tokenId: targetBox[0][DYN_NODE_PROPERTIES.TOKEN_ID]
            }
            this.doHandoffSingleByOwnerIdBySelf(handoffData, SymbolOwnerAgentID.SlotMachine);
            this.processDataBeforeRemoveByAwardBox();
            console.log('test', this._aryRunningNode);
             await this.addTweenDelay(2);
            NotifyCation.getInstance().emit(NotifySubject.GAME_ANI_PROCESS_SUBJECT, GameViewEvents.RUN_TEST_MODE);
         } */

        /*
        private getWorldPositionFromSlot = async (IAniData: IPlayAniData): Promise<Vec3> => {
             return await NotifyCation.getInstance().requestData<Vec3>(
                SlotResponseSubject.RES_GAME_SLOT_SUBJECT,
                SlotRequestEvent.GET_WORLD_POSITION,
                SlotNotifySubject.GAME_SLOT_SUBJECT,
                { reelIndex: IAniData.reelIndex, iconIndex: IAniData.iconIndex }
            );
        }*/
        // ==============================
        // ===== 可選擴充的工具方法 =====
        // ==============================
        //-準備將資料交回.
        //--向SlotMachine要資料前的準備(拿資料回來)
        //-this._mapGroupAniData(這個只有group/odd/lineType的資料描述) 
        //-this._mapWinScoreGroupData(這個有key(在盤面位置)跟groupId的對應/IAniData的資料描述)

        /**
         * 基礎自訂義resetData的排除條件(預設條件)
         * 1.wild排除
         * 2.特殊顯示模式排除(需要顯示但又不在中獎輪播清單內)
         * ex: SP_SHOWING當要顯示獲得FG2條件下,scatter卻不在中獎的清單內,這時候就不會被reset
         */


        defaultExcludeFun(data) {
          const info = data[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO];
          const spShowingMode = data[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).OTHER];
          let flag = false;

          if ((info == null ? void 0 : info.symbolId) != undefined) {
            const isWild = WILD_SET.has(info.symbolId);
            const isSpShow = spShowingMode === SP_SHOWING;

            if (!isWild && !isSpShow) {
              flag = true; //console.log('check_defaultExcludeFun', info.symbolId, spShowingMode, isSpShow);
            }
          }

          return flag;
        }
        /**
         * 預設的取得要重置的node(排除條件使用預設條件(排除得分框))
         * @returns 
         */


        passAllAniNodeAndReset() {
          const out = [];
          const ary = this._aryRunningNode;
          const conditionSymbolGroup = [DEFAULT_GROUP_AWARD];

          for (let i = ary.length - 1; i >= 0; i--) {
            var _GROUP_ID;

            const node = ary[i];
            const groups = (_GROUP_ID = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID]) != null ? _GROUP_ID : [];
            let keep;
            const gSet = new Set(groups);
            keep = conditionSymbolGroup.every(g => gSet.has(g));

            if (!keep) {
              node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).OTHER] = null; //--重置特殊顯示模式

              out.push(node);
            }
          }

          return out;
        } //--取得要重置的node(使用自訂的查找規則)
        //-DEFAULT_GROUP_AWARD-->連線框


        getResetNodesDataByCondition(conditionSymbolGroup = [DEFAULT_GROUP_AWARD], excludeFun = this.defaultExcludeFun) {
          const out = [];
          const ary = this._aryRunningNode;

          for (let i = ary.length - 1; i >= 0; i--) {
            var _GROUP_ID2;

            const node = ary[i];
            const groups = (_GROUP_ID2 = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID]) != null ? _GROUP_ID2 : [];
            let keep;

            if (conditionSymbolGroup.length === 1) {
              keep = groups.includes(conditionSymbolGroup[0]);
            } else {
              const gSet = new Set(groups);
              keep = conditionSymbolGroup.every(g => gSet.has(g));
            }

            if (!keep) {
              const isInExclude = excludeFun(node);

              if (isInExclude) {
                out.push(node);
              }
            }
          }

          return out;
        }

        findWildInList(list) {
          const map = new Map(); //-分組

          list.forEach(item => {
            if (item.symbolId === WILD_LIST[0]) {
              if (map.has(item.reelIndex)) {
                var _map$get;

                (_map$get = map.get(item.reelIndex)) == null || _map$get.push(item.otherData);
              } else {
                map.set(item.reelIndex, [item.otherData]);
              }
            }
          });
          return Array.from(map.values());
        }

        findWildAniNodeByKeyString(keysToCompare) {
          const sortedKeysToCompare = [...keysToCompare].sort(); //GameUtilsTools.debugLog(DEBUG_TITLE, 'findWildAniNodeByKeyString', sortedKeysToCompare);

          for (const node of this._aryRunningNode) {
            if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId === WILD_LIST[0]) {
              const wildContinueArray = node[(_crd && DYN_WILD_INFO === void 0 ? (_reportPossibleCrUseOfDYN_WILD_INFO({
                error: Error()
              }), DYN_WILD_INFO) : DYN_WILD_INFO).WILD_CONTINUE];

              if (!Array.isArray(wildContinueArray)) {
                continue;
              }

              const sortedWildContinue = [...wildContinueArray].sort();

              if (this.areArraysEqual(sortedKeysToCompare, sortedWildContinue)) {
                return node;
              }
            }
          }

          return null; // 如果找不到，返回 null
        }

        areArraysEqual(target, compare) {
          // 檢查長度，如果長度不同，內容不可能相同

          /*
          //--有可能會出現兩邊長度不一樣的狀況
          if (arr1.length !== arr2.length) {
              return false;
          }
          // 逐一比較每個元素
          for (let i = 0; i < arr1.length; i++) {
              if (arr1[i] !== arr2[i]) {
                  return false;
              }
          }*/
          const compareSet = new Set(compare);
          return target.every(item => compareSet.has(item));
        }
        /**
         * 查找場面上被keep的icon,比對中線是否存在該物件
         * 如果存在的話直接將中線的groupId塞進去,並且將該筆資料刪除
         * <因為在沒有handoff回去symbol的情況下,owner是不會挖到這筆資料的,浪費時間查找而已>
         * @param list 要處理的資料(winLineData)
         * @returns 
         */


        cutExistWildAndPushGroup(list) {
          const wildGroups = this.findWildInList(list); //GameUtilsTools.debugLog(DEBUG_TITLE, 'wildGroups:', wildGroups);

          const keysToRemoveSet = new Set();
          wildGroups.forEach(keyGroup => {
            const wildAniNode = this.findWildAniNodeByKeyString(keyGroup);

            if (wildAniNode) {
              const group = this.getWildContinuousGroup(keyGroup);
              wildAniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID] = [...group];
              keyGroup.forEach(key => keysToRemoveSet.add(key));
            }
          });
          const returnList = list.filter(item => !keysToRemoveSet.has(item.otherData));
          /*
          GameUtilsTools.debugLog(DEBUG_TITLE, 'cutExistWildAndPushGroup', {
              keysToRemove: [...keysToRemoveSet],
              returnList: returnList,
              runningNodes: this._aryRunningNode,
              winLineGroup: this._mapWinScoreGroupData
          });*/

          return returnList;
        }

        findWildWithoutWin(winData) {
          const noWinWilds = this._wildMoveFXCtrl.findWildWithoutWin(winData);

          return noWinWilds;
        }
        /**
         * 
         * @param key handoffMap的key格式: reelIndex:iconIndex:symbolId
         * @returns symbolId or null
         */


        getSymbolIdByKeyString(key) {
          const parts = key.trim().split(":");

          if (parts.length < 3) {
            throw new Error(`Invalid key format: "${key}"`);
          }

          const symbolId = Number(parts[2]);
          return symbolId;
        } //--根據key重建IPlayAniData

        /**
         * 
         * @param key 
         * @param iconIndexIsPlusOne 要不要-1(預設不要)
         * @returns 
         */


        reBuildIPlayDataFromKeyString(key, iconIndexIsPlusOne = false) {
          const parts = key.trim().split(":");

          if (parts.length < 3) {
            throw new Error(`Invalid key format: "${key}"`);
          }

          const reelIndex = Number(parts[0]);
          let iconIndex = Number(parts[1]);
          const symbolId = Number(parts[2]);

          if (![reelIndex, iconIndex, symbolId].every(Number.isInteger)) {
            throw new Error(`Key must contain integers: "${key}"`);
          }

          if (iconIndexIsPlusOne) {
            iconIndex -= 1;
          }

          const registerData = {
            reelIndex,
            iconIndex,
            symbolId,
            tokenId: ""
          };
          return registerData;
        }

        createWildContinueIplayData(wildNode) {
          const out = [];
          const continueData = wildNode[(_crd && DYN_WILD_INFO === void 0 ? (_reportPossibleCrUseOfDYN_WILD_INFO({
            error: Error()
          }), DYN_WILD_INFO) : DYN_WILD_INFO).WILD_CONTINUE];

          for (let i = 0; i < continueData.length; i++) {
            const parts = continueData[i].split(':');
            let registerData = {
              reelIndex: Number(parts[0]),
              iconIndex: Number(parts[1]),
              symbolId: WILD_LIST[0],
              tokenId: wildNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID] //--在這邊的beforeRelease會用到

            };
            out.push(registerData);
          }

          return out;
        }

        fastCreateIPlayAniData(item) {
          let registerData = {
            reelIndex: item[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex,
            iconIndex: item[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconIndex,
            symbolId: item[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId,
            tokenId: item[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID] //--在這邊的beforeRelease會用到

          };
          return registerData;
        }

        getAllGroups() {
          const groups = [];
          /*
          for (const [groupId, groupData] of this._mapGroupAniData.entries()) {
              groups.push(groupId);
          }*/

          this._mapGroupAniData.forEach((groupData, groupId) => {
            groups.push(groupId);
          });

          return groups;
        } //--一組連續的wild只會抽出一個實體,其他都只是空的位置資訊,交還的時候要反塞回去空的
        //--透過key來抽資料


        getWildContinuousGroup(keys) {
          const cutList = [];

          for (const key of keys) {
            const data = this._mapWinScoreGroupData.get(key);

            if (data == null) continue; // 有可能只是 Wild 的一部分，要判斷

            for (const num of data.group) {
              // 模擬 Set → 不重複才 push
              if (!cutList.includes(num)) {
                cutList.push(num);
              }
            }
          }

          return cutList; //--cocos creator [...new Set()] 會有問題
          //--要用一般的轉陣列的方法不要用語法糖,不然陣列裡面裝的是Set物件

          /*
          let cutSet = new Set<number>();
          for (const key of keys) {
              const data = this._mapWinScoreGroupData.get(key);
              if (data == null) continue;//--有可能連線的群組可能只是Wild的一部分,所以要判斷一下
              for (const num of data.group) {
                  cutSet.add(num);
              }
          }
          return [...cutSet];
          */
        } //---表演完畢後,scatter要放回原本的層級(S>W)


        setScatterLayerAfterShowAllWin() {
          return new Promise(resolve => {
            const scatterContainer = this._aniNodeStageContainerMap[STAGE_ID.SC_SHOW_FX_CONTAINER];

            for (const node of this._aryRunningNode) {
              if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId === SCATTER_LIST[0]) {
                node.parent = scatterContainer;
              }
            }

            resolve();
          });
        } //--20260306-取消該功能,直接做在layer上面了


        reSetWildLayerAndSort() {
          return new Promise(resolve => {
            const wildContainer = this._aniNodeStageContainerMap[STAGE_ID.WILD_SHOW_CONTAINER]; //let reSetChildIndex = false;

            for (const node of this._aryRunningNode) {
              var _node$parent;

              const iconId = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId;
              const currentContainerId = ((_node$parent = node.parent) == null ? void 0 : _node$parent.name) === STAGE_ID.WILD_NO_MOVEMENT_SHOW_CONTAINER ? true : false; //--露頭非完整的已經是整個轉出來了, 資料長度=4
              //const windLens = (node[DYN_WILD_INFO.WILD_CONTINUE]?.length === 4) ? true : false;

              if (iconId === WILD_LIST[0] && !currentContainerId) {
                //--過濾掉非整軸的wild
                node.parent = wildContainer; //reSetChildIndex = true;
                // === Step 1: After parent ===

                /*
                GameUtilsTools.debugLog('reSetWildLayerAndSort', 'After parent assignment', {
                    addedNodes: wildContainer.children.map(n => ({
                        name: n.name,
                        reelIndex: n[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex,
                        siblingIndex: n.getSiblingIndex(),
                    })),
                });*/
              }
            }

            const children = wildContainer.children;
            children.sort((a, b) => {
              const aReelIndex = a[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex;
              const bReelIndex = b[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex;
              return aReelIndex - bReelIndex;
            });
            /**
             * 這裡有點雷,因為上一步node.parent = wildContainer;
             * 會直接把node push到後面...
             * 然後再用 setSiblingIndex(i)，它會重新排列陣列，畫的順序仍照內部的 index 走（從 0 開始畫）
             */

            for (let i = 0; i < children.length; i++) {
              //const index = (reSetChildIndex) ? children.length - 1 - i : i;
              //children[i].setSiblingIndex(index);
              //children[i].setSiblingIndex(i);
              children[i].setSiblingIndex(children.length - 1 - i);
            } // === 組合輸出資訊 ===


            const sortedData = [];

            for (let i = 0; i < children.length; i++) {
              const node = children[i];
              const info = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO];
              sortedData.push({
                order: i,
                name: node.name,
                reelIndex: info.reelIndex,
                symbolId: info.symbolId,
                siblingIndex: node.getSiblingIndex()
              });
            }
            /*
            GameUtilsTools.debugLog('reSetWildLayerAndSort', 'After sorting', {
                sortedResult: sortedData,
            });
            */


            resolve();
          });
        } //--右壓左的Wild排列順序


        sortForWildNodes(layer, testCaller = '') {
          const wildContainer = this._aniNodeStageContainerMap[layer];
          if (!wildContainer) return;
          const children = wildContainer.children;
          children.sort((a, b) => {
            const aReelIndex = a[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex;
            const bReelIndex = b[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex;
            return aReelIndex - bReelIndex;
          });

          for (let i = 0; i < children.length; i++) {
            children[i].setSiblingIndex(i);
          } // === 排序完成後再取得呼叫來源（caller）===


          let callerName = 'unknown';

          try {
            var _Error$stack;

            const stack = (_Error$stack = new Error().stack) == null ? void 0 : _Error$stack.split('\n');

            if (stack && stack.length >= 3) {
              // stack[0] = 'Error'
              // stack[1] = this function (sortForWildNodes)
              // stack[2] = caller function
              const match = stack[2].trim().match(/at\s+(.*)\s+\(/);
              if (match && match[1]) callerName = match[1];
            }
          } catch (e) {
            callerName = 'parse_error';
          } // === 組合輸出資訊 ===


          const layerName = wildContainer.name;
          const sortedData = children.map((node, i) => {
            const info = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO];
            return {
              order: i,
              name: node.name,
              reelIndex: info.reelIndex,
              symbolId: info.symbolId,
              siblingIndex: node.getSiblingIndex()
            };
          });
          /*
          GameUtilsTools.debugLog(
              'sortForWildNodes',
              `layer=${layer}`,
              {
                  caller: testCaller,
                  layerName: layerName,
                  total: children.length,
                  sortedResult: sortedData,
              },
              'log'
          );*/
        }

        getWildContainer(wildContinue) {
          let containerId = STAGE_ID.WILD_SHOW_CONTAINER; //--預設為1*4的wild容器
          //console.log('check_wildContinue', wildContinue);

          const lastKey = wildContinue[wildContinue.length - 1];
          const parts = lastKey.split(':');
          const iconIndex = Number(parts[1]);

          if (iconIndex != 4) {
            containerId = STAGE_ID.WILD_NO_MOVEMENT_SHOW_CONTAINER; //--顯示非1*4的wild容器
          }

          return containerId;
        }

        checkWildIndGroupExist(nodes) {
          const wild = nodes.find(v => v[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId === WILD_LIST[0]);
          return wild != undefined;
          /*
          for (const node of nodes) {
              const id = node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId;
              if (id != undefined) {
                  if (id === WILD_LIST[0]) return true;
              }
          }
          return false;*/
        } //--test for handoff


        testForgetWild() {
          let changeData = {
            reelIndex: 0,
            iconIndex: 1,
            symbolId: 9,
            aniId: '',
            tokenId: '',
            //--屬性要寫好(用IPlayAniData)
            wPos: null //--屬性要寫好(用IPlayAniData)

          };

          this._crossSystemSymbolAniService.handoff(changeData, this);
        } //--log表格工具


        logAniDataSummary(list, group, title = '====AniData Summary====') {
          const rows = list.map(x => {
            var _ref, _x$reelIndex, _x$slotMachineIndexIn, _ref2, _x$iconIndex, _x$slotMachineIndexIn2, _x$symbolId, _ref3, _ref4, _x$aniId, _x$aniKey, _x$prefabKey;

            return {
              reelIndex: (_ref = (_x$reelIndex = x.reelIndex) != null ? _x$reelIndex : (_x$slotMachineIndexIn = x.slotMachineIndexInfo) == null ? void 0 : _x$slotMachineIndexIn.reelIndex) != null ? _ref : '-',
              iconIndex: (_ref2 = (_x$iconIndex = x.iconIndex) != null ? _x$iconIndex : (_x$slotMachineIndexIn2 = x.slotMachineIndexInfo) == null ? void 0 : _x$slotMachineIndexIn2.iconIndex) != null ? _ref2 : '-',
              symbolId: (_x$symbolId = x.symbolId) != null ? _x$symbolId : '-',
              isWild: x.symbolId !== undefined && WILD_SET.has(x.symbolId),
              aniId: (_ref3 = (_ref4 = (_x$aniId = x.aniId) != null ? _x$aniId : (_x$aniKey = x.aniKey) == null ? void 0 : _x$aniKey.aniId) != null ? _ref4 : x.tokenID) != null ? _ref3 : '',
              prefabKey: (_x$prefabKey = x.prefabKey) != null ? _x$prefabKey : ''
            };
          }); //console.info(title + group);
          //console.log('comparedGroup', this._mapWinScoreGroupData);
          //console.table(rows);
        }
        /**
         * 
         * TIPS:
         *  單局只有一次中線-->
            播放Connect_1_Ani,
            單局多次中線--->
            第一次連線--->播放Connect_2_Ani,
            第二次連線(包含以上)--->播放Connect_3_Ani,
            最後一次連線---->播放Connect_4_Ani
         * @returns 當下連續wild的播放target索引
         */


        getRoundWildPlayCountIndex(index) {
          const maximumWildPlayCount = 4; // 最大連續Wild次數為4

          this._wildPlayCount++;

          if (this._mapGroupAniData.size === 1) {
            this._wildPlayCount = 1;
          } else {
            if (index === 0) {
              this._wildPlayCount = 2;
            } else {
              if (index + 1 >= this._mapGroupAniData.size) {
                this._wildPlayCount = maximumWildPlayCount;
              } else {
                this._wildPlayCount = 3;
              }
            }
          }

          return WILD_PLAY_COUNT_NAME + this._wildPlayCount;
        } //--取得這一線的分數


        getRoundSingleLineScore(roundOdd) {
          if (this._scoreData == null) {// GameUtilsTools.debugLog('BasicShowAniProcess_debug', 'getRoundSingleLineScore', {});
          } else if (this._scoreData.betValue == null) {//GameUtilsTools.debugLog('BasicShowAniProcess_debug', 'getRoundSingleLineScore', { data: this._scoreData });
          }

          return (roundOdd * this._cloneScoreData.betValue).fixed();
        }
        /**
         * 因為企劃要求在底下顯示得分的欄位是要在round當中累加的
         * @returns 
         */


        calculateCurrentRoundOdds(winScoreData) {
          var _winScoreData$totalOd;

          this._currentRoundOdds += (_winScoreData$totalOd = winScoreData == null ? void 0 : winScoreData.totalOdd) != null ? _winScoreData$totalOd : 0;
          const wd = {
            baseOdds: winScoreData == null ? void 0 : winScoreData.baseOdds,
            totalOdd: this._currentRoundOdds,
            betValue: winScoreData == null ? void 0 : winScoreData.betValue,
            multiplier: winScoreData == null ? void 0 : winScoreData.multiplier
          };
          const returnScore = this.getTotalScore(wd);
          return returnScore;
        }
        /**
         * 取得總得分，預設從 winScoreData 解析(這一round的這一把)
         * @param winScoreData 
         * @returns 
         */


        getTotalScore(winScoreData) {
          return (winScoreData.totalOdd * winScoreData.betValue).fixed();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_winScore", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_jpShowCtrl", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_countTimesFXController", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_wildLayerCtrl", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_wildMoveFXCtrl", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_iconSize", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec2(0, 0);
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_dummyAudioClip", [_dec8], {
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
//# sourceMappingURL=c9b156e284bafa49d61084adf384c8429711c960.js.map