System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, v3, UITransform, color, UIOpacity, ClassicalSlotAniController, DYN_NODE_PROPERTIES, AniSysTools, GameUtils, RPSWildState, AnimationControllersPoolManager, SpineController, IAniWithAniCtrl, DefinitionGameConfigData, GenericUIManager, NotifyCation, NotifySubject, ShowBottomTextStatus, GameViewEvents, FindComponent, FindNode, Localization, LocalizationSpine, AudioManager, SOUND_TYPE, SoundList, AudioSourceList, GameState, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, PFB_ANI_LIST, SPECIAL_WIN_THRESHOLD, HIGH_ODDS_SYMBOL_LIST, CONTAINER_ANI_SYMBOL, WILD_LIST, ShowAniController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfClassicalSlotAniController(extras) {
    _reporterNs.report("ClassicalSlotAniController", "../../MyUtils/AnimationSystem/ClassicalSlotAniController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayIAniData(extras) {
    _reporterNs.report("playIAniData", "../../MyUtils/AnimationSystem/Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDYN_NODE_PROPERTIES(extras) {
    _reporterNs.report("DYN_NODE_PROPERTIES", "../../MyUtils/AnimationSystem/Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAnimationControl(extras) {
    _reporterNs.report("IAnimationControl", "../../MyUtils/AnimationSystem/Definitions/IAnimationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniSysTools(extras) {
    _reporterNs.report("AniSysTools", "../../MyUtils/AnimationSystem/AniTools/AniSysTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinScoreData(extras) {
    _reporterNs.report("WinScoreData", "../../MyUtils/AnimationSystem/Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroupAniData(extras) {
    _reporterNs.report("GroupAniData", "../../MyUtils/AnimationSystem/Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinScore(extras) {
    _reporterNs.report("WinScore", "../WinScore/WinScore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../MyUtils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPSWildSystem(extras) {
    _reporterNs.report("RPSWildSystem", "../RPSWild/RPSWildSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPSWildState(extras) {
    _reporterNs.report("RPSWildState", "../RPSWild/RPSWildDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationControllersPoolManager(extras) {
    _reporterNs.report("AnimationControllersPoolManager", "../../MyUtils/AnimationSystem/AnimationControllersPoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowAniData(extras) {
    _reporterNs.report("ShowAniData", "./ShowAniDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotMachineIndexInfo(extras) {
    _reporterNs.report("SlotMachineIndexInfo", "../../MyUtils/AnimationSystem/Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBonusManager(extras) {
    _reporterNs.report("BonusManager", "../FGController/BonusManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineController(extras) {
    _reporterNs.report("SpineController", "../../MyUtils/AnimationSystem/Components/SpineController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletonExtension(extras) {
    _reporterNs.report("SkeletonExtension", "../../../../../Scripts/GameScripts/SkeletonExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationPlayStateList(extras) {
    _reporterNs.report("AnimationPlayStateList", "../../MyUtils/AnimationSystem/Components/AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniCtrlPropDef(extras) {
    _reporterNs.report("AniCtrlPropDef", "../../MyUtils/AnimationSystem/Components/AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAniWithAniCtrl(extras) {
    _reporterNs.report("IAniWithAniCtrl", "../../MyUtils/AnimationSystem/Components/AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDefinitionGameConfigData(extras) {
    _reporterNs.report("DefinitionGameConfigData", "../../DefinitionGameData/DefinitionGameConfigData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPSWildAnimationController(extras) {
    _reporterNs.report("RPSWildAnimationController", "../RPSWild/RPSWildAnimationController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJpShowController(extras) {
    _reporterNs.report("JpShowController", "../JpShowController/JpShowController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUIManager(extras) {
    _reporterNs.report("GenericUIManager", "../../../../../GenericUI/Scripts/GenericUIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFG_BkgController(extras) {
    _reporterNs.report("FG_BkgController", "../ShowContainer/Components/FG_BkgController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFG2_BkgController(extras) {
    _reporterNs.report("FG2_BkgController", "../ShowContainer/Components/FG2_BkgController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifyCation(extras) {
    _reporterNs.report("NotifyCation", "../../MyUtils/EventSystem/NotifyCation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifySubject(extras) {
    _reporterNs.report("NotifySubject", "../../DefinitionGameData/EventTypesDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowBottomTextStatus(extras) {
    _reporterNs.report("ShowBottomTextStatus", "../../DefinitionGameData/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewEvents(extras) {
    _reporterNs.report("GameViewEvents", "../../DefinitionGameData/EventTypesDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../../MyUtils/FindComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindNode(extras) {
    _reporterNs.report("FindNode", "../../MyUtils/FindNode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalization(extras) {
    _reporterNs.report("Localization", "db://assets/Scripts/GameScripts/Localization", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalizationSpine(extras) {
    _reporterNs.report("LocalizationSpine", "db://assets/Scripts/GameScripts/LocalizationSpine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOUND_TYPE(extras) {
    _reporterNs.report("SOUND_TYPE", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../../DefinitionGameData/SoundList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioSourceList(extras) {
    _reporterNs.report("AudioSourceList", "../../DefinitionGameData/SoundList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../../DefinitionGameData/GameStateConfigDef", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      v3 = _cc.v3;
      UITransform = _cc.UITransform;
      color = _cc.color;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      ClassicalSlotAniController = _unresolved_2.ClassicalSlotAniController;
    }, function (_unresolved_3) {
      DYN_NODE_PROPERTIES = _unresolved_3.DYN_NODE_PROPERTIES;
    }, function (_unresolved_4) {
      AniSysTools = _unresolved_4.AniSysTools;
    }, function (_unresolved_5) {
      GameUtils = _unresolved_5.GameUtils;
    }, function (_unresolved_6) {
      RPSWildState = _unresolved_6.RPSWildState;
    }, function (_unresolved_7) {
      AnimationControllersPoolManager = _unresolved_7.AnimationControllersPoolManager;
    }, function (_unresolved_8) {
      SpineController = _unresolved_8.SpineController;
    }, function (_unresolved_9) {
      IAniWithAniCtrl = _unresolved_9.IAniWithAniCtrl;
    }, function (_unresolved_10) {
      DefinitionGameConfigData = _unresolved_10.DefinitionGameConfigData;
    }, function (_unresolved_11) {
      GenericUIManager = _unresolved_11.GenericUIManager;
    }, function (_unresolved_12) {
      NotifyCation = _unresolved_12.NotifyCation;
    }, function (_unresolved_13) {
      NotifySubject = _unresolved_13.NotifySubject;
    }, function (_unresolved_14) {
      ShowBottomTextStatus = _unresolved_14.ShowBottomTextStatus;
    }, function (_unresolved_15) {
      GameViewEvents = _unresolved_15.GameViewEvents;
    }, function (_unresolved_16) {
      FindComponent = _unresolved_16.FindComponent;
    }, function (_unresolved_17) {
      FindNode = _unresolved_17.FindNode;
    }, function (_unresolved_18) {
      Localization = _unresolved_18.Localization;
    }, function (_unresolved_19) {
      LocalizationSpine = _unresolved_19.LocalizationSpine;
    }, function (_unresolved_20) {
      AudioManager = _unresolved_20.AudioManager;
      SOUND_TYPE = _unresolved_20.SOUND_TYPE;
    }, function (_unresolved_21) {
      SoundList = _unresolved_21.SoundList;
      AudioSourceList = _unresolved_21.AudioSourceList;
    }, function (_unresolved_22) {
      GameState = _unresolved_22.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c91d3GRg7lAv5pxagTlkH5h", "ShowAniController", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Node', 'tween', 'Vec3', 'v3', 'UITransform', 'color', 'Tween', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        PFB_ANI_LIST,
        SPECIAL_WIN_THRESHOLD,
        HIGH_ODDS_SYMBOL_LIST,
        CONTAINER_ANI_SYMBOL,
        WILD_LIST
      } = _crd && DefinitionGameConfigData === void 0 ? (_reportPossibleCrUseOfDefinitionGameConfigData({
        error: Error()
      }), DefinitionGameConfigData) : DefinitionGameConfigData);

      _export("ShowAniController", ShowAniController = (_dec = ccclass('ShowAniController'), _dec2 = property({
        type: Node,
        visible: true,
        displayName: 'SingleSlotItemNode',
        tooltip: 'Wild容器放的地方'
      }), _dec(_class = (_class2 = class ShowAniController extends (_crd && ClassicalSlotAniController === void 0 ? (_reportPossibleCrUseOfClassicalSlotAniController({
        error: Error()
      }), ClassicalSlotAniController) : ClassicalSlotAniController) {
        //-是否中止輪播
        set currentCampFg(value) {
          this._currentCampFg = value; //-0阿里 1 盜賊 -1 NG
        }

        set ary2dCards(value) {
          this._ary2dCards = value;
        }

        set winScore(showScore) {
          this._winScore = showScore;
        }

        set wildRPSSystem(value) {
          this._wildRPSSystem = value;
        }

        set fgBonusSystem(value) {
          this._fgBonusSystem = value;
        }

        set JpShowController(value) {
          this._JpShowController = value;
        }

        set fgAliShowVerticalAniNode(value) {
          this._fgAliShowVerticalAniNode = value;
        }

        set fgThievesShowVerticalAniNode(value) {
          this._fgThievesShowVerticalAniNode = value;
        }

        set slotControllerWildDarkness(value) {
          this._slotControllerWildDarkness = value;
        }

        set slotControllerReAddToGameIcon(value) {
          this._slotControllerReAddToGameIcon = value;
        }

        set getAndRemoveSymbolAniNodeWithWorldPos(value) {
          this._getAndRemoveSymbolAniNodeWithWorldPos = value;
        }

        set setSingleGameIconBrightness(value) {
          this._setSingleGameIconBrightness = value;
        }

        set closeOrOpenAllGameIconBright(value) {
          this._closeOrOpenAllGameIconBright = value;
        }

        constructor() {
          super();

          _initializerDefineProperty(this, "_singleSlotItemNode", _descriptor, this);

          this._winScore = void 0;
          this._wildRPSSystem = void 0;
          this._fgBonusSystem = void 0;
          this._JpShowController = void 0;
          this._fgAliShowVerticalAniNode = void 0;
          this._fgThievesShowVerticalAniNode = void 0;
          this._delayTweenCancel = void 0;
          // 延遲動畫取消函式(for 延遲中斷時,阻斷tweenPromise resolve)
          this._currentGameState = void 0;
          this._currentCampData = void 0;
          //--NG模式=-1
          this._slotControllerWildDarkness = null;

          /**
           *  1.在猜拳過程中,秀完中線後要再把高賠率塞回gameIcon裡面
           *  2.NG當中多條線分開跑分,跑分結束後要塞回gameIcon裡面
           */
          this._slotControllerReAddToGameIcon = null;
          this._getAndRemoveSymbolAniNodeWithWorldPos = null;
          //-(reelIndex: number, iconIndex: number): Node | null
          this._setSingleGameIconBrightness = null;
          this._closeOrOpenAllGameIconBright = null;
          this._currentCampFg = -1;
          //-目前FG的陣營
          this._resolvePromise = void 0;
          // promise resolve 函式 
          this._ary2dCards = void 0;
          this._singleScoreCycle = 0;
          //-是否單線得分循環
          this._hasPlayedPostWinSequence = false;
          //-輪播鎖
          this._abortPlaySequence = false;

          /**
          * 特殊的檢查條件(同軸同格不重複相同元素)
          * @param args 
          * @returns 
          */
          this.checkSpRuleForExist = (...args) => {
            const data = args[0];
            const iconIndex = data.SymbolIconInfoData.iconIndex;
            const iconID = data.SymbolIconInfoData.iconID;
            const reelIndex = data.SymbolIconInfoData.reelIndex;
            let returnData = {
              flag: false,
              tokenId: ''
            };

            for (let aniNode of this._aryRunningNode) {
              //--檢查每一軸上的相同位置的icon是否相同
              if (aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex === reelIndex) {
                if (aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconIndex === iconIndex && aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconID === iconID) {
                  returnData = {
                    flag: true,
                    tokenId: aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                      error: Error()
                    }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID]
                  };
                  return returnData;
                }
              }
            }

            return returnData;
          };
        }

        init() {
          this._currentGameState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL;
          this._currentCampData = -1;
        }

        setWinScoreNode(winScoreNode) {//console.log();
        }

        changeGameMode(gameState, camp) {
          this._currentGameState = gameState;
          this._currentCampData = camp;

          this._JpShowController.changeGameMode(gameState, camp);
        } //--startSpin的時候都會進來


        cleanAllPlayingAniForNewRound() {
          this._abortPlaySequence = true;

          this._winScore.stopWinScoreAni();

          this.winLinesGroupData = []; //-終止while迴圈

          this._singleScoreCycle = 0; //--單線得分循環

          this._hasPlayedPostWinSequence = false; //-輪播鎖

          if (this._wildRPSSystem.isWorking) {
            //--只有在wild的狀態下才會進來
            if (this._wildRPSSystem.canRemoveAndCloseWild) {
              this.stopAndRemoveAllAnis();

              this._wildRPSSystem.resetWild(); //--將wild的isWorking設為false

            }
          } else {
            //--FG和NG走這裡
            this.stopAndRemoveAllAnisWithOutHighOdds();
          }
        } //--買保險(新的一局開始轉的時候就清空)


        cleanAllRunningNodesForNewRound() {
          if (this._delayTweenCancel) {
            this._delayTweenCancel(); //--強制終止 GameUtils.DeferByTweenPromiseWithCancel


            this._delayTweenCancel = undefined;
          }

          this.stopAndRemoveAllAnis();
        }

        stopShowVerticalAni() {
          if (this._currentCampFg == 0) {
            this._fgAliShowVerticalAniNode.cleanAniState();
          } else if (this._currentCampFg == 1) {
            this._fgThievesShowVerticalAniNode.cleanAniState();
          }
        }
        /**
         * 這邊只產生,並且塞到runningNode裡面
         * 相關的init要自己做
         * @param prefabKey 
         * @param aniData 
         * @returns 
         */


        addSPNodeInRunning(prefabKey, aniData, groupId) {
          let reelInfoAndGroup = {
            reelIndex: aniData.reelIndex,
            iconIndex: aniData.iconIndex,
            iconID: aniData.iconID,
            groupID: groupId
          };
          let token = Date.now();
          let node = this.getPrefabNode(prefabKey);
          node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID] = prefabKey;
          node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID] = [groupId];
          node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID] = token + "_" + (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).getRangeRandom(0, 100);
          node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO] = reelInfoAndGroup;
          let aniInterfaceComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
            error: Error()
          }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
          aniInterfaceComponent.tokenID = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID];
          aniInterfaceComponent.groupID = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID];
          this.aryRunningNode.push(node); //--強塞進去

          return node;
        }

        async addSPNodeInRunningForAwait(prefabKey, aniData, groupId) {
          let reelInfoAndGroup = {
            reelIndex: aniData.reelIndex,
            iconIndex: aniData.iconIndex,
            iconID: aniData.iconID,
            groupID: groupId
          };
          let token = Date.now();
          let aniShowNode = (_crd && FindNode === void 0 ? (_reportPossibleCrUseOfFindNode({
            error: Error()
          }), FindNode) : FindNode).findChildByNameRecursive(this.node, 'SymbolAniDisplayNode');
          let node = await this.createSpineNodeUI(prefabKey, aniShowNode);
          const currentLanguageKey = (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
            error: Error()
          }), Localization) : Localization).instance.currentLangKey;
          const localizationSpine = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
            error: Error()
          }), FindComponent) : FindComponent).findComponentInChildren(node, _crd && LocalizationSpine === void 0 ? (_reportPossibleCrUseOfLocalizationSpine({
            error: Error()
          }), LocalizationSpine) : LocalizationSpine);

          if (localizationSpine) {
            await localizationSpine.loadAllSpine(currentLanguageKey);
          }

          node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID] = prefabKey;
          node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID] = [groupId];
          node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID] = token + "_" + (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).getRangeRandom(0, 100);
          node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO] = reelInfoAndGroup;
          let aniInterfaceComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
            error: Error()
          }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
          aniInterfaceComponent.tokenID = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID];
          aniInterfaceComponent.groupID = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID];
          this.aryRunningNode.push(node); //--強塞進去

          return {
            spNode: node,
            aniData: aniData
          };
        }

        createSpineNodeUI(prefabKey, container) {
          return new Promise((resolve, reject) => {
            let spineNode = (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
              error: Error()
            }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().getPrefabNode(prefabKey);
            container.once(Node.EventType.CHILD_ADDED, () => {
              resolve(spineNode);
            });
            spineNode.getComponent(UIOpacity).opacity = 0; //--會先讀取多語系的spine圖片,所以先關閉opacity

            spineNode.active = true;
            container.addChild(spineNode);
          });
        }

        safeResolve() {
          if (this._resolvePromise) {
            this._resolvePromise();

            this._resolvePromise = undefined;
          }
        }
        /**
         * 播放沒有得分的動畫(appear) 
         * @param lines 
         */


        async playNoWinInThisRound(lines) {
          return new Promise(async (resolve, reject) => {
            this._resolvePromise = resolve; //const groupID = [0];
            //--現在不需要了,因為在finalRoll時已經將高賠率的spineNode塞進去gameIcon裡面了
            //this.playAnisByGroupWithTimeStepPromise(groupID, 800);
            //--沒有中線但是有wild/bonus的情況

            if (this._wildRPSSystem.isWorking || this._fgBonusSystem.isWorking) {
              this.stopAndRemoveAniWithoutWild();

              if (this._wildRPSSystem.wildState != (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
                error: Error()
              }), RPSWildState) : RPSWildState).WILD_3) {
                //this.playOtherWinShowAni();
                await this.playWildAni();

                if (this._wildRPSSystem.isWorking) {
                  if (this._wildRPSSystem.isLastWildRound) {
                    this._wildRPSSystem.hideCollectionLights(); //--關閉燈號

                  }
                }

                this.safeResolve();
              } else if (this._fgBonusSystem.isWorking) {
                await this.playBonusAni();
                this.safeResolve();
              }
            } else {
              //--20250623-急停的話reelView他就不會驅動startShowReadyHand(slotMachineController.startShowReadyHand,就不會啟動相關流程與反黑)
              this._closeOrOpenAllGameIconBright(false); //--不反黑(處理有聽牌的情況+不急停)


              this.safeResolve();
            }
          });
        }
        /**
         *  當局分數到大獎時
            會先演得分框後直接跳出大獎
            不會跳得分數字
            演完大獎之後
            如果是FG或者NG有開自動旋轉 就會直接下一局 (依然不演得分數字)
            如果是NG沒開自動旋轉 玩家也沒動作 就會正常演逐線輪播+得分數字動畫
         */


        async playWinInThisRound(winScoreData, lines) {
          this._scoreData = winScoreData;
          return new Promise(async (resolve, reject) => {
            this._resolvePromise = resolve;
            if (lines) this.winLinesGroupData = lines;
            const totalScore = (winScoreData.totalOdd * winScoreData.betValue).fixed();

            if (this._fgBonusSystem.isWorking) {
              this.playFGProcessAni(totalScore);
            } else {
              //--依照winLine的長度產生對應的aryGroupIDs
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                error: Error()
              }), SoundList) : SoundList).IconWin, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
                error: Error()
              }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                error: Error()
              }), AudioSourceList) : AudioSourceList).BasicAS);
              const groupID = this.generateArray(this._winLinesGroupData.length); //---以下為測試資料
              //this.checkAndSetWildDataInScoreData();//--有wild的情況下會被推進去
              //---以上為測試資料
              //this._scoreData.totalOdd = 230;//--test

              this.processWildWithOutSameRange();

              if (this._scoreData.totalOdd >= SPECIAL_WIN_THRESHOLD) {
                await this.playAniGroupsWithPromise(groupID);
                await this.showBigWinAni(this._scoreData, totalScore);
              } else {
                this.playAniGroupsWithPromise(groupID);
                await this.showWinScoreAni(totalScore);
              }

              this.showScoreForBottomText(totalScore); //await GameUtils.Defer(650);
              //await GameUtils.DeferByTweenPromise(650 / 1000);//--原本單位是毫秒現在換算成秒

              const delay = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                error: Error()
              }), GameUtils) : GameUtils).DeferByTweenPromiseWithCancel(650 / 1000);
              this._delayTweenCancel = delay.cancel;
              await delay.promise; // 等待延遲完成

              this._delayTweenCancel = null; // 清掉

              this.stopAndHideConnectBoxAni();

              this._closeOrOpenAllGameIconBright(false); //--不反黑


              this.changeGroupAniInSameState(groupID, 'idle'); //--將group的動畫狀態改成idle
              //--將其他的動畫系統開啟播放(非icon表演的動畫)

              if (this._wildRPSSystem.isWorking) {
                //--刪掉其它的中線動畫
                this._closeOrOpenAllGameIconBright(true); //--反黑


                this._winScore.stopWinScoreAni();

                if (this._wildRPSSystem.isLastWildRound) {
                  this.stopAndPauseAniWithoutWild();
                  await this.playWildAni(); //--進入輪播 +關閉燈號+背景壓暗取消20250731

                  this._closeOrOpenAllGameIconBright(false); //--反黑


                  this._wildRPSSystem.hideCollectionLights(); //--關閉燈號


                  this.postWinCleanupAndPlaySequence({
                    skipPushWild: true,
                    skipPlayOtherWin: true,
                    skipCloseWildNode: true
                  });
                  this.safeResolve();
                } else {
                  this.stopAndRemoveAniWithoutWild();
                  await this.playWildAni();
                  this.safeResolve();
                }
              } else {
                this.safeResolve();
                this.postWinCleanupAndPlaySequence();
              }
            }
          });
        }

        sortAnimationLayer() {
          const level1Nodes = []; // iconID = 2, 3, 4, 5 (最下層)

          const level2Nodes = []; // iconID = 0, 1 (在 2-5 之上)

          const level3Nodes = []; // iconID = 6, 7, 8 (_wildID，在 0-1 之上)

          const level4Nodes = []; // iconID = 9 (_bonusID，在最上層)

          for (const target of this._aryRunningNode) {
            const iconID = target[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconID;

            if ([2, 3, 4, 5].includes(iconID)) {
              level1Nodes.push(target);
            } else if ([0, 1].includes(iconID)) {
              level2Nodes.push(target);
            } else if (this._wildID.includes(iconID)) {
              level3Nodes.push(target);
            } else if (this._bonusID.includes(iconID)) {
              level4Nodes.push(target);
            }
          }

          let currentIndex = 0; // 設定 level 1 (最下層)

          level1Nodes.forEach(node => {
            node.setSiblingIndex(currentIndex++);
          }); // 設定 level 2

          level2Nodes.forEach(node => {
            node.setSiblingIndex(currentIndex++);
          }); // 設定 level 3 (_wildID)

          level3Nodes.forEach(node => {
            node.setSiblingIndex(currentIndex++);
          }); // 設定 level 4 (_bonusID，最上層)

          level4Nodes.forEach(node => {
            node.setSiblingIndex(node.parent.children.length - 1);
          });
        }
        /**
         * 自己挖得坑..在一開始時,算分工具是會給予wild的位置資料
         * 只是因為早期開發時,wild與表演層是在不同的層級當中也不會進入runningNode
         * 所以送進來的資料是挑掉wild的
         * 再送QA時要需要重新再把wild的資料放回runningNode裡面..所以變成自己要再檢查補資料回去
         * PS-下個專案不要再把wild與表演層分開了..
         */


        checkAndSetWildDataInScoreData() {
          const additionalWildData = [];
          const originalWinLines = JSON.parse(JSON.stringify(this._winLinesGroupData));

          for (let i = 0; i < this._ary2dCards.length; i++) {
            for (let j = 0; j < this._ary2dCards[i].length; j++) {
              const iconID = this._ary2dCards[i][j];
              if (!WILD_LIST.includes(iconID)) continue;

              for (let k = 0; k < originalWinLines.length; k++) {
                for (let l = 0; l < originalWinLines[k].length; l++) {
                  const winItem = originalWinLines[k][l]; // 對第2列(i==1) 做補 wild

                  if (i === 1 && winItem.reelIndex >= 0 && winItem.reelIndex <= 2) {
                    //---錯誤的判斷(inItem.iconIndex)-測試用的資料
                    //if (i === 1 && winItem.reelIndex >= 0 && winItem.iconIndex <= 2) {
                    additionalWildData.push({
                      reelIndex: i,
                      iconIndex: j,
                      iconID: iconID,
                      groupID: winItem.groupID,
                      odd: winItem.odd
                    });
                    break; // 避免重複 push 同一格 wild
                  } // 對第5列(i==4) 做補 wild


                  if (i === 4 && winItem.reelIndex >= 3 && winItem.reelIndex <= 5) {
                    //---錯誤的判斷(inItem.iconIndex)-測試用的資料
                    //if (i === 4 && winItem.reelIndex >= 3 && winItem.iconIndex <= 5) {
                    additionalWildData.push({
                      reelIndex: i,
                      iconIndex: j,
                      iconID: iconID,
                      groupID: winItem.groupID,
                      odd: winItem.odd
                    });
                    break;
                  }
                }
              }
            }
          } // 統一補上 wild 資料


          for (const wildItem of additionalWildData) {
            const group = this._winLinesGroupData[wildItem.groupID];

            if (group) {
              group.push(wildItem);
            }
          }
        }

        isWildOutsideWinLineRange() {
          const wildPositions = this.getWildPositions(); // 僅當 Wild 數量為 1 時才處理，其餘直接 return false

          if (wildPositions.length !== 1) return false;
          const wildPos = wildPositions[0];
          const isWildInFront = wildPos.reelIndex >= 0 && wildPos.reelIndex <= 2;
          const isWildInBack = wildPos.reelIndex >= 3 && wildPos.reelIndex <= 5;
          const originalWinLines = JSON.parse(JSON.stringify(this._winLinesGroupData));

          for (const group of originalWinLines) {
            for (const winItem of group) {
              const reelIndex = winItem.reelIndex;
              const isWinInFront = reelIndex >= 0 && reelIndex <= 2;
              const isWinInBack = reelIndex >= 3 && reelIndex <= 5;

              if (isWildInFront && isWinInFront || isWildInBack && isWinInBack) {
                return false;
              }
            }
          }

          return true;
        }

        playShowVerticalAni() {
          if (this._currentCampFg == 0) {
            var _this$_fgAliShowVerti;

            (_this$_fgAliShowVerti = this._fgAliShowVerticalAniNode) == null || _this$_fgAliShowVerti.playWinAni();
          } else if (this._currentCampFg == 1) {
            var _this$_fgThievesShowV;

            (_this$_fgThievesShowV = this._fgThievesShowVerticalAniNode) == null || _this$_fgThievesShowV.playWinAni();
          }
        }

        async showAndWaitForVerticalAni(totalScore) {
          if (this._currentCampFg == 0) {
            var _this$_fgAliShowVerti2;

            await Promise.all([(_this$_fgAliShowVerti2 = this._fgAliShowVerticalAniNode) == null ? void 0 : _this$_fgAliShowVerti2.playWinAni(), this.showWinScoreAni(totalScore)]);
          } else if (this._currentCampFg == 1) {
            var _this$_fgThievesShowV2;

            await Promise.all([(_this$_fgThievesShowV2 = this._fgThievesShowVerticalAniNode) == null ? void 0 : _this$_fgThievesShowV2.playWinAni(), this.showWinScoreAni(totalScore)]);
          }
        }

        showScoreForBottomText(totalScore) {
          if (totalScore > 0) {
            const evtData = {
              eventType: (_crd && GameViewEvents === void 0 ? (_reportPossibleCrUseOfGameViewEvents({
                error: Error()
              }), GameViewEvents) : GameViewEvents).SET_BOTTOM_TEXT,
              eventData: {
                status: (_crd && ShowBottomTextStatus === void 0 ? (_reportPossibleCrUseOfShowBottomTextStatus({
                  error: Error()
                }), ShowBottomTextStatus) : ShowBottomTextStatus).WIN,
                value: totalScore
              }
            };
            (_crd && NotifyCation === void 0 ? (_reportPossibleCrUseOfNotifyCation({
              error: Error()
            }), NotifyCation) : NotifyCation).getInstance().emitSync((_crd && NotifySubject === void 0 ? (_reportPossibleCrUseOfNotifySubject({
              error: Error()
            }), NotifySubject) : NotifySubject).GAME_VIEW_SUBJECT, evtData.eventType, evtData);
          }
        }

        async playFGProcessAni(totalScore) {
          const groupID = this.generateArray(this._winLinesGroupData.length);
          this.changeGroupAniInSameState(groupID, 'idle'); //--將group的動畫狀態改成idle(20250730)

          await this.playBonusAni();
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).IconWin, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
            error: Error()
          }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).BasicAS); //this._scoreData.totalOdd = 60;//--test

          if (this._scoreData.totalOdd >= SPECIAL_WIN_THRESHOLD) {
            await this.playAniGroupsWithPromise(groupID);
            await this.showBigWinAni(this._scoreData, totalScore);
          } else {
            this.playAniGroupsWithPromise(groupID);
            await this.showAndWaitForVerticalAni(totalScore);
          }

          this.showScoreForBottomText(totalScore);
          this.safeResolve();
        }

        showBigWinAni(winScoreData, totalScore) {
          return new Promise(async (resolve, reject) => {
            //--jp
            await this._JpShowController.showJPWin(winScoreData.totalOdd, winScoreData.betValue);
            resolve();
          });
        }
        /**
         * 1.顯示得分的金額(這邊只是betValue*baseOdds)
         * 
         * a-->如果小於特殊得分的賠率極限值:
         * 顯示->1.移動multiNum到定位
         *       2.顯示爆炸動畫
         *       2.multiNum賠率+最後的總額
         * 
         * b-->如果大於特殊得分的賠率極限值:
         * 顯示-->1.關閉顯示得分的金額框
         *        2.顯示爆炸動畫
         *       2.顯示特殊得分的動畫
         * 
         */


        async showWinScoreAni(totalScore) {
          await this._winScore.showFinalScoreInAndOut(totalScore);
        } //public stopMultiFrameAni():void
        //--這裡可以用來停止其他非icon表演的動畫系統


        stopOtherWinShowAni() {} //--這裡可以用來播放其他非icon表演的動畫系統
        //--做await async的處理
        //--20250731 --廢棄


        async playOtherWinShowAni() {
          //--用來播放icon 9的動畫表演
          if (this._wildRPSSystem.isWorking) {
            await this.playWildAni();
          } else if (this._fgBonusSystem.isWorking) {
            await this.playBonusAni();
          }
        } //--應付一軸出現多個bonus的情況


        setPlayGroupForReelIndex(group) {
          const reelGroup = new Map();

          for (const node of group) {
            const reelIndex = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex;

            if (!reelGroup.has(reelIndex)) {
              reelGroup.set(reelIndex, []);
            }

            reelGroup.get(reelIndex).push(node);
          }

          return reelGroup;
        }

        async playBonusAni() {
          const groups = this.getAniNodesByGroupId(98);
          const reelGroupMap = this.setPlayGroupForReelIndex(groups);
          const sortedReelIndices = Array.from(reelGroupMap.keys()).sort((a, b) => a - b);
          const allGroupPromises = [];

          for (let index = 0; index < sortedReelIndices.length; index++) {
            const reelIndex = sortedReelIndices[index];
            const nodeArray = reelGroupMap.get(reelIndex);

            for (let multiIndex = 0; multiIndex < nodeArray.length; multiIndex++) {
              const node = nodeArray[multiIndex];
              const ani = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
              node.active = true; // 正確延遲時間 (秒 -> 毫秒)

              const delaySec = index * 0.2 + multiIndex * 0.8; //--PS 1.5為動畫spine+1字樣出現時間點
              //const promise = GameUtils.Defer(delaySec * 1000).then(() => this.playSingleBonusAni(node, ani));

              const promise = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                error: Error()
              }), GameUtils) : GameUtils).DeferByTweenPromise(delaySec).then(() => this.playSingleBonusAni(node, ani));
              allGroupPromises.push(promise);
            }
          }

          await Promise.all(allGroupPromises); // 等全部完成
        }

        playSingleBonusAni(node, ani) {
          return new Promise(resolve => {
            let resolveFrame;
            let resolveAnim;

            let frameCallBack = (...args) => {
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                error: Error()
              }), SoundList) : SoundList).MoneyCollect, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
                error: Error()
              }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                error: Error()
              }), AudioSourceList) : AudioSourceList).BtnAS);
              const symbolData = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO];

              this._fgBonusSystem.playSingleBonusEffect(symbolData.reelIndex, symbolData.iconIndex).then(() => {
                resolveFrame();
              });
            };

            let animationCallBack = async (...args) => {
              args[0].updateSlotTexture();
              resolveAnim();
            };

            const frameEventPromise = new Promise(res => {
              resolveFrame = res;
              node.setSiblingIndex(node.parent.children.length);
              ani.spineSequencePlayFrameEventCallBack = frameCallBack;
            });
            const animationCompletePromise = new Promise(res => {
              resolveAnim = res;
              ani.playSequenceWithCallBack(animationCallBack, 'trigger');
            });
            Promise.all([frameEventPromise, animationCompletePromise]).then(() => {
              ani.spineSequencePlayFrameEventCallBack = null; // 清除引用

              resolve();
            });
          });
        }

        async playWildAni() {
          var _this$_slotController;

          if (!this._wildRPSSystem.isCampDecided) {
            this._wildRPSSystem.setOpenWildForBegin();

            await this._wildRPSSystem.changeWildOutFrame(); //0 to 1

            await this._wildRPSSystem.checkRoundAndStartRollWild();
          }

          const strBattle = this._wildRPSSystem.getWildIconAniType();

          (_this$_slotController = this._slotControllerWildDarkness) == null || _this$_slotController.call(this); //--猜拳的底要比中線時的壓黑更黑

          await this._wildRPSSystem.guessRPS(strBattle); //--更新level和wild數據+猜拳飛行的動畫
          //this.safeResolve();
        }

        async changeWildFrame() {
          return new Promise(async (resolve, reject) => {
            /*
            if (this._wildRPSSystem.wildState >= RPSWildState.WILD_1) {
                //---猜拳第二輪(不需要轉了..只有第一輪要在這邊轉)
                await this._wildRPSSystem.changeWildOutFrame({ round: this._wildRPSSystem.wildState, targetTokenIds: null });
                resolve();
            } else {
                resolve();
            }*/
            this._wildRPSSystem.checkWildStateToNextRound(); //await this._wildRPSSystem.changeWildOutFrame({ round: this._wildRPSSystem.wildState, targetTokenIds: null });
            //--每局結束後


            await this._wildRPSSystem.changeWildOutFrame(); //--wildState

            resolve();
          });
        }

        async playSequenceAniByGroupWithPromise(groupId, sequenceId) {
          return new Promise(async (resolve, reject) => {
            let promises = [];

            for (let node of this._aryRunningNode) {
              if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].indexOf(groupId) != -1) {
                let aniExtensionComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                  error: Error()
                }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
                node.active = true;
                promises.push(aniExtensionComponent.playSequenceInPromise(sequenceId));
              }
            }

            try {
              await Promise.all(promises);
              resolve();
            } catch (e) {
              reject(e);
            }
          });
        } //--有得分的時候會播放得分的動畫,但在同時,其他沒中的icon也會有自己的idle狀態動畫
        //--如果企劃要這麼78要求的話,這邊要再調整


        playWinAndIdleInThisRound(winScoreData, lines) {}

        async postWinCleanupAndPlaySequence(options) {
          if (this._hasPlayedPostWinSequence) return;
          this._hasPlayedPostWinSequence = true;

          if (!(options != null && options.skipPushWild)) {
            this.checkAndSetWildDataInScoreData(); //--有wild的情況下會被推進去
          } //--接上停止wild的動畫狀態


          if (!(options != null && options.skipCloseWildNode)) {
            this._wildRPSSystem.closeWildAniNodeWithoutDoubleWild();
          }

          if (!(options != null && options.skipPlayOtherWin)) {
            this.playOtherWinShowAni(); //--202507315這段方法在這裡是沒有意義的
          }

          if (!(_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.isAutoMode) {
            //await GameUtils.Defer(400);
            //await GameUtils.DeferByTweenPromise(400 / 1000);//--原本單位是毫秒現在換算成秒
            const delay = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).DeferByTweenPromiseWithCancel(400 / 1000); //--終止時阻斷延遲promise的resolve

            this._delayTweenCancel = delay.cancel;
            await delay.promise; // 等待延遲完成

            this._delayTweenCancel = null; // 清掉

            this._closeOrOpenAllGameIconBright(true); //--反黑


            this.playAniGroupInSequence();
          }
        }

        async playAniGroupInSequence() {
          /*
          if (this._winLinesGroupData.length > 1) {
              this.playMultipleSequence();//--多個
          } else {
              //this.playAnisBySequence(0);//--單個
              this.playMultipleSequence();
          }*/
          this.playMultipleSequence();
        }

        async playMultipleSequence() {
          let playIndex = 0;
          this._abortPlaySequence = false; //--這個改法很不好..但殺傷力已經是最小的改法了0731

          let hotfix = false;

          if (this._wildRPSSystem.isWorking) {
            hotfix = this._wildRPSSystem.isLastWildRound;
          } //--這個改法很不好..但殺傷力已經是最小的改法了0731


          while (this._winLinesGroupData.length > 0) {
            const lineScore = (this._winLinesGroupData[playIndex][0].odd * this._scoreData.betValue).fixed(); //--這邊要改成顯示的connectBox用loop


            try {
              if (hotfix) {
                this.removeAndCloseNodeSequenceBackToGameIconWithoutWild();
                this.openNodeByIconsWithReelIndexInArrayWithoutWild(this._winLinesGroupData[playIndex]);
                await Promise.all([//--排除wild本身不要播放
                this.withTimeout(this.playAnisByGroupWithExclusion(playIndex, [99]), 6, playIndex, 'playAniWithOutWild'), this.withTimeout(this.showWinScoreAni(lineScore), 6, '', 'score')]);
              } else {
                this.removeAndCloseNodeSequenceBackToGameIcon();
                this.openNodeByIconsWithReelIndexInArray(this._winLinesGroupData[playIndex]);
                await Promise.all([this.withTimeout(this.playAnisByGroupWithPromise(playIndex), 6, playIndex, 'playAni'), this.withTimeout(this.showWinScoreAni(lineScore), 6, '', 'score')]);
              }
            } catch (e) {
              //--動畫被中斷掉的情況promise會被reject掉,要回過頭來處理還在播放的動畫,要強制停止
              console.log('<cleanAll_playMultipleSequence_ERROR', e.label, this._abortPlaySequence);
              console.warn(`[playMultipleSequence] 輪播發生錯誤，跳過此條播放:`, e); //playIndex++;
              //continue; 
            }

            if (this._abortPlaySequence) break; //--外部中斷時,直接切斷流程

            this.stopAndHideConnectBoxAni();
            playIndex++;

            if (playIndex >= this._winLinesGroupData.length) {
              playIndex = 0; //await GameUtils.Defer(400);

              await (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                error: Error()
              }), GameUtils) : GameUtils).DeferByTweenPromise(400 / 1000); //--原本單位是毫秒現在換算成秒
            } else {
              //await GameUtils.Defer(200);
              await (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                error: Error()
              }), GameUtils) : GameUtils).DeferByTweenPromise(200 / 1000); //--原本單位是毫秒現在換算成秒
            }

            this._abortPlaySequence = false;
          }
        }
        /**
         * 20250723
         * 雙保險,在promise死掉後還能依照設定時間自己resolve或reject
         * (不過應該不太可能啦..因為在每一輪的清空都會呼叫stopPromiseAni)
         */


        withTimeout(promise, seconds, meta, label = 'timeout') {
          return new Promise((resolve, reject) => {
            let finished = false; //--動畫撥放逾時了

            const onTimeout = () => {
              if (finished) return;
              finished = true;
              const error = new Error(`[${label}] Timeout after ${seconds}s`);
              error.meta = meta;
              error.label = label;
              reject(error);
            };

            this.scheduleOnce(onTimeout, seconds);
            promise.then(result => {
              if (finished) return;
              finished = true;
              this.unschedule(onTimeout);
              resolve(result);
            }).catch(err => {
              if (finished) return;
              finished = true;
              this.unschedule(onTimeout);
              err.meta = meta;
              err.label = label;
              reject(err);
            });
          });
        }

        async singlePlayWinScoreInCycle(singleScoreCycle) {
          while (this._singleScoreCycle) {
            await this._winScore.showFinalScoreIn(singleScoreCycle); //--單獨顯示每條百搭成線的得分
            //await GameUtils.Defer(400);//--等待0.4秒

            await (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).DeferByTweenPromise(400 / 1000); //--原本單位是毫秒現在換算成秒
          }
        }

        compareTargetName(list) {
          let aniDataTarget; //--resetData<AnimationPlayStateList會保留>

          for (let aniData of list.clipsInfo) {
            for (const key in PFB_ANI_LIST) {
              const prefabIndexKey = PFB_ANI_LIST[key];

              if (aniData.targetName.includes(prefabIndexKey)) {
                return aniDataTarget = aniData;
              }
            }

            if (aniData.targetName.includes('connect')) {
              return aniDataTarget = aniData;
            }
          }
        } //---取消該功能


        setSpineAniNodeLoopByGroup(groupId) {
          const returnData = [];
          const nodes = this.getAniNodesByGroupId(groupId);

          for (let node of nodes) {
            let iAniData = new (_crd && IAniWithAniCtrl === void 0 ? (_reportPossibleCrUseOfIAniWithAniCtrl({
              error: Error()
            }), IAniWithAniCtrl) : IAniWithAniCtrl)();
            let aniExtensionComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node); //console.log('setSpineAniNodeLoopByGroup', node[DYN_NODE_PROPERTIES.PREFAB_ID]);

            if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID] == 'ConnectBox') {
              iAniData.aniCtrl = aniExtensionComponent.getCustomizeSpineTrackEntry('connect');
            } else if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID] == 'Icon_0678') {
              //--wild--
              //(<RPSWildAnimationController>aniExtensionComponent).getConnectAniData('connect');
              //(<RPSWildAnimationController>aniExtensionComponent).animationPlayStateList;//-要去比對有沒有含有'_clone'
              //--直接寫在RPSWildAnimationController裡面比對查找
              iAniData.aniCtrl = aniExtensionComponent.createCloneAniConnectData();
              iAniData.IAni = aniExtensionComponent;
            } else {
              let aniCtrlPropDef;

              if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID] == 'Icon_04_07') {
                aniCtrlPropDef = aniExtensionComponent.defaultTarget;
              } else {
                let list = aniExtensionComponent.animationPlayStateList;
                aniCtrlPropDef = this.compareTargetName(list);
              } //--每次都複製一個


              const cloneAniCtrlPropDef = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                error: Error()
              }), GameUtils) : GameUtils).deepCloneForObject(aniCtrlPropDef);
              cloneAniCtrlPropDef.loop = true;
              iAniData.aniCtrl = cloneAniCtrlPropDef; //--如果該狀態已經是loop=true的話就不需要再複製了

              /*
              if (!aniCtrlPropDef.aniData.loop) {
                  //--deepClone一個原本沒有loop的連線動畫出來,然後改變loop的狀態塞回去撥放清單
                  let cloneAniCtrlPropDef: AniCtrlPropDef = GameUtils.deepCloneForObject(aniCtrlPropDef.aniData);
                  cloneAniCtrlPropDef.loop = true;
                  cloneAniCtrlPropDef.targetName = aniCtrlPropDef.aniData.targetName + '_clone';
                  aniExtensionComponent.setAniDataInfo(cloneAniCtrlPropDef);
                  iAniData.aniCtrl = cloneAniCtrlPropDef;
              } else {
                  iAniData.aniCtrl = aniCtrlPropDef.aniData;
              }*/
            } //console.log('setSpineAniNodeLoopByGroup_iAniData', iAniData);


            iAniData.IAni = aniExtensionComponent;
            node.active = true;
            returnData.push(iAniData);
          }

          return returnData;
        }

        addGroupByReelIndexAndIconIndexWithIconID(data) {
          let node = this.getAniNodeByReelIndexAndIconIndexWithIconID(data.reelIndex, data.iconIndex, data.iconID);

          if (node) {
            node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].push(data.groupId);
          }
        }

        getAniNodeByReelIndexAndIconIndexWithIconID(reelIndex, iconIndex, iconID) {
          for (let node of this._aryRunningNode) {
            if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex == reelIndex && node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconIndex == iconIndex && node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconID == iconID) {
              return node;
            }
          }

          return null;
        }

        getWildConnectBoxNode() {
          let returnNode = [];

          for (let item of this._aryRunningNode) {
            if (item.name == 'ConnectBox' && item[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].includes(99)) {
              returnNode.push(item);
            }
          }

          return returnNode;
        }

        changeGroupAniInSameState(groupIds, key) {
          for (let node of this._aryRunningNode) {
            const nodeGroupIds = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID];

            if (nodeGroupIds.some(id => groupIds.includes(id)) && node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID] != 'ConnectBox') {
              //--低賠率是靜態圖且04-07他的動畫名稱不叫 'idle'(他是'icon_XX_idle')
              if (!HIGH_ODDS_SYMBOL_LIST.includes(node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconID)) {
                var _this$_setSingleGameI;

                (_this$_setSingleGameI = this._setSingleGameIconBrightness) == null || _this$_setSingleGameI.call(this, node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex, node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconIndex, false);
              } else {
                const aniExtensionComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                  error: Error()
                }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
                node.active = true;
                aniExtensionComponent.playAni(key);
              }
            }
          }
        } //確認是否存在running裡面 


        checkIsLowOddsSymbol(reelIndex, iconIndex) {
          for (let node of this._aryRunningNode) {
            const rIndex = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex;
            const iIndex = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconIndex;

            if (rIndex == reelIndex && iIndex == iconIndex) {
              const iconId = this._ary2dCards[rIndex][iIndex];

              if (WILD_LIST.includes(iconId) || HIGH_ODDS_SYMBOL_LIST.includes(iconId)) {
                //--如果是wild或者高賠率的icon就不會是低賠率的
                return false;
              }

              return true;
            }
          }

          return true;
        }

        getWildPositions() {
          const wildPositions = [];

          for (let i = 0; i < this._ary2dCards.length; i++) {
            for (let j = 0; j < this._ary2dCards[i].length; j++) {
              const iconID = this._ary2dCards[i][j];

              if (WILD_LIST.includes(iconID)) {
                wildPositions.push({
                  reelIndex: i,
                  iconIndex: j
                });
              }
            }
          }

          return wildPositions;
        }

        checkWild(reelIndex, iconIndex) {
          const iconId = this._ary2dCards[reelIndex][iconIndex];

          if (WILD_LIST.includes(iconId)) {
            return true;
          }

          return false;
        }

        checkWildInWinLinesGroupData() {
          for (let i = 0; i < this._winLinesGroupData.length; i++) {
            for (let j = 0; j < this._winLinesGroupData[i].length; j++) {
              if (WILD_LIST.includes(this._winLinesGroupData[i][j].iconID)) {
                return true;
              }
            }
          }

          return false;
        }

        checkWildInRunningNode() {
          for (let i = 0; i < this._aryRunningNode.length; i++) {
            if (WILD_LIST.includes(this._aryRunningNode[i][(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconID)) {
              return true;
            }
          }

          return false;
        } //--這邊限於猜拳第一把(尚未開始猜拳的時候,第一輪的中線檢查)


        processWildWithOutSameRange() {
          const isWildOutsideRange = this.isWildOutsideWinLineRange(); //---wild只有一個且,在中線的範位在不同區間

          const wildInRunningNode = this.checkWildInRunningNode(); //--- 這是原本給要輪播的使用
          //--有wild的情況下,但中線的不在wild區間,秀全部的動畫要把wild關掉

          if (isWildOutsideRange && wildInRunningNode) {
            if (!this._wildRPSSystem.isWorking) {
              //--找出wild的動畫節點,然後關掉
              this._wildRPSSystem.closeWildAniNodeWithoutDoubleWild();
            }
          }
        } //--沒有FG沒有猜拳進來的(其中一盤會有wild的情況)


        openNodeByIconsWithReelIndexInArrayWithoutWild(iconIndexs) {
          //--幹 wild的東西不會在GroupAniData裡面,所以這個判斷根本進不去else
          for (let i = 0; i < iconIndexs.length; i++) {
            //--低賠率
            let nodeAni = this.getAniNodeByReelIndexAndIconIndex(iconIndexs[i].reelIndex, iconIndexs[i].iconIndex);

            if (nodeAni) {
              nodeAni.active = true;

              if (nodeAni[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID] == 'ConnectBox' && !this.checkIsLowOddsSymbol(iconIndexs[i].reelIndex, iconIndexs[i].iconIndex)) {
                //--高賠率被拔去gameIcon裡面的
                const nodeAndWPos = this._getAndRemoveSymbolAniNodeWithWorldPos(iconIndexs[i].reelIndex, iconIndexs[i].iconIndex);

                const localNodeContainer = this._aniNodeStageContainerMap[CONTAINER_ANI_SYMBOL];
                nodeAni = nodeAndWPos.target;

                if (nodeAni && localNodeContainer) {
                  localNodeContainer.addChild(nodeAni);

                  this._aryRunningNode.push(nodeAni);

                  let localPos = v3(0, 0, 0);

                  if (nodeAndWPos.worldPos) {
                    localPos = localNodeContainer.getComponent(UITransform).convertToNodeSpaceAR(nodeAndWPos.worldPos);
                  }

                  nodeAni.active = true;
                  nodeAni.setPosition(localPos);
                  const spAniNode = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                    error: Error()
                  }), FindComponent) : FindComponent).findComponentInChildren(nodeAni, _crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
                    error: Error()
                  }), SpineController) : SpineController).spine;

                  if (spAniNode) {
                    spAniNode.color = color(255, 255, 255, spAniNode.color.a);
                  }
                }
              }
            }
          }
        } //--沒有FG沒有猜拳進來的(其中一盤會有wild的情況)


        openNodeByIconsWithReelIndexInArray(iconIndexs) {
          //--幹 wild的東西不會在GroupAniData裡面,所以這個判斷根本進不去else
          for (let i = 0; i < iconIndexs.length; i++) {
            //--低賠率
            let nodeAni = this.getAniNodeByReelIndexAndIconIndex(iconIndexs[i].reelIndex, iconIndexs[i].iconIndex);

            if (nodeAni) {
              if (this.checkWild(iconIndexs[i].reelIndex, iconIndexs[i].iconIndex)) {
                this._wildRPSSystem.openWildAniNodeWithoutDoubleWild();

                this._wildRPSSystem.playWildConnectAniWithoutDoubleWild();
              } else {
                nodeAni.active = true;

                if (nodeAni[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID] == 'ConnectBox' && !this.checkIsLowOddsSymbol(iconIndexs[i].reelIndex, iconIndexs[i].iconIndex)) {
                  //--高賠率被拔去gameIcon裡面的
                  const nodeAndWPos = this._getAndRemoveSymbolAniNodeWithWorldPos(iconIndexs[i].reelIndex, iconIndexs[i].iconIndex);

                  const localNodeContainer = this._aniNodeStageContainerMap[CONTAINER_ANI_SYMBOL];
                  nodeAni = nodeAndWPos.target;

                  if (nodeAni && localNodeContainer) {
                    localNodeContainer.addChild(nodeAni);

                    this._aryRunningNode.push(nodeAni);

                    let localPos = v3(0, 0, 0);

                    if (nodeAndWPos.worldPos) {
                      localPos = localNodeContainer.getComponent(UITransform).convertToNodeSpaceAR(nodeAndWPos.worldPos);
                    }

                    nodeAni.active = true;
                    nodeAni.setPosition(localPos);
                    const spAniNode = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                      error: Error()
                    }), FindComponent) : FindComponent).findComponentInChildren(nodeAni, _crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
                      error: Error()
                    }), SpineController) : SpineController).spine;

                    if (spAniNode) {
                      spAniNode.color = color(255, 255, 255, spAniNode.color.a);
                    }
                  }
                }
              }
            }
          }
        }

        stopAndHideConnectBoxAni() {
          for (let i = 0; i < this._aryRunningNode.length; i++) {
            let node = this._aryRunningNode[i];

            if (node.name == 'ConnectBox') {
              let aniExtensionComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node); //aniExtensionComponent.stopAni();--並無終止promise的功能

              aniExtensionComponent.stopPromiseAni(); //--新功能(不等待回收,直接停止與拔除promise和終止resolve)

              node.active = false;
            }
          }
        } //--78新增 20250731(打破輪播的條件wild沒有勝負最後一把的狀態)


        removeAndCloseNodeSequenceBackToGameIconWithoutWild() {
          let flag = false;

          for (let i = 0; i < this._aryRunningNode.length; i++) {
            flag = false;
            let node = this._aryRunningNode[i];
            let aniExtensionComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node); //--wild的group=99 bonus的group=98

            if (!node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].includes(98) && !node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].includes(99)) {
              if (HIGH_ODDS_SYMBOL_LIST.includes(node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconID)) {
                var _node$parent, _this$_slotController2, _this$_setSingleGameI2;

                //--高賠率的spineNode要塞回去gameIcon裡面
                (_node$parent = node.parent) == null || _node$parent.removeChild(node);

                this._aryRunningNode.splice(i, 1);

                aniExtensionComponent == null || aniExtensionComponent.stopAni();
                (_this$_slotController2 = this._slotControllerReAddToGameIcon) == null || _this$_slotController2.call(this, node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex, node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconIndex, node); //--反黑

                (_this$_setSingleGameI2 = this._setSingleGameIconBrightness) == null || _this$_setSingleGameI2.call(this, node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex, node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconIndex, true); //setBrightness

                flag = true;
              } else {
                if (node.name == 'ConnectBox') {
                  aniExtensionComponent == null || aniExtensionComponent.stopAni();
                  node.active = false;
                } else {
                  aniExtensionComponent == null || aniExtensionComponent.stopAni();
                  node.active = false;
                }
              }
            } else {
              if (node.name == 'ConnectBox') {
                aniExtensionComponent == null || aniExtensionComponent.stopAni();
                node.active = false;
              }
            }

            if (flag) {
              i = i - 1;
            }
          }
        } //---這邊是沒有猜拳會進來的地方(輪播wild要留著)


        removeAndCloseNodeSequenceBackToGameIcon() {
          let flag = false;

          for (let i = 0; i < this._aryRunningNode.length; i++) {
            flag = false;
            let node = this._aryRunningNode[i];
            let aniExtensionComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node); //--wild的group=99 bonus的group=98

            if (!node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].includes(98)) {
              if (HIGH_ODDS_SYMBOL_LIST.includes(node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconID) || WILD_LIST.includes(node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconID)) {
                //--高賠率的spineNode要塞回去gameIcon裡面
                if (WILD_LIST.includes(node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconID)) {
                  this._wildRPSSystem.closeWildAniNodeWithoutDoubleWild();
                } else {
                  var _node$parent2, _this$_slotController3, _this$_setSingleGameI3;

                  (_node$parent2 = node.parent) == null || _node$parent2.removeChild(node);

                  this._aryRunningNode.splice(i, 1);

                  aniExtensionComponent == null || aniExtensionComponent.stopAni();
                  (_this$_slotController3 = this._slotControllerReAddToGameIcon) == null || _this$_slotController3.call(this, node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                    error: Error()
                  }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex, node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                    error: Error()
                  }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconIndex, node); //--反黑

                  (_this$_setSingleGameI3 = this._setSingleGameIconBrightness) == null || _this$_setSingleGameI3.call(this, node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                    error: Error()
                  }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex, node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                    error: Error()
                  }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconIndex, true); //setBrightness

                  flag = true;
                }
              } else {
                if (node.name == 'ConnectBox') {
                  aniExtensionComponent == null || aniExtensionComponent.stopAni();
                  node.active = false;
                } else {
                  aniExtensionComponent == null || aniExtensionComponent.stopAni();
                  node.active = false;
                }
              }
            } else {
              if (node.name == 'ConnectBox') {
                aniExtensionComponent == null || aniExtensionComponent.stopAni();
                node.active = false;
              }
            }

            if (flag) {
              i = i - 1;
            }
          }
        } //--wild會進來 20250731新增


        stopAndPauseAniWithoutWild() {
          for (let i = 0; i < this._aryRunningNode.length; i++) {
            let node = this._aryRunningNode[i];
            let aniExtensionComponent; //--99=wild, 98=bonus

            if (!node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].includes(99) && !node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].includes(98)) {
              aniExtensionComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);

              if (aniExtensionComponent) {
                aniExtensionComponent.stopPromiseAni();
              }

              node.active = false;
            } else {
              if (node.name == 'ConnectBox') {
                aniExtensionComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                  error: Error()
                }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
                aniExtensionComponent.stopPromiseAni();
                node.active = false;
              }
            }
          }
        } //--wild會進來


        stopAndRemoveAniWithoutWild(usePool = true) {
          for (let i = 0; i < this._aryRunningNode.length; i++) {
            let node = this._aryRunningNode[i];
            let aniExtensionComponent; //--99=wild, 98=bonus

            if (!node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].includes(99) && !node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].includes(98)) {
              var _node$parent3;

              aniExtensionComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
              (_node$parent3 = node.parent) == null || _node$parent3.removeChild(node);

              this._aryRunningNode.splice(i, 1);

              if (aniExtensionComponent) {
                aniExtensionComponent.stopAni();
              }

              if (HIGH_ODDS_SYMBOL_LIST.includes(node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconID)) {
                var _this$_slotController4, _this$_setSingleGameI4;

                //--高賠率的spineNode要塞回去gameIcon裡面
                (_this$_slotController4 = this._slotControllerReAddToGameIcon) == null || _this$_slotController4.call(this, node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex, node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconIndex, node); //--反黑

                (_this$_setSingleGameI4 = this._setSingleGameIconBrightness) == null || _this$_setSingleGameI4.call(this, node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex, node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconIndex, true);
              } else {
                if (usePool) {
                  (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
                    error: Error()
                  }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().pushInstancePrefabNodeToPool(node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                    error: Error()
                  }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID], node);
                }
              }

              i = i - 1;
            } else {
              if (node.name == 'ConnectBox') {
                aniExtensionComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                  error: Error()
                }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
                aniExtensionComponent.stopAni();
                node.active = false;
              }
            }
          }
        }
        /**
         * 20250610
         * 這邊是每輪結束後(非wild模式)近來刪除物件用的
         * 它會讓中線的spineNode回到gameIcon裡面,並且重置狀態到idle
         * (因為有中線的spineNode在舊有的呼叫stopAndRemoveAllAnis會直接刪除
         * 並且推到pool裡面,這樣會導致中線的spineNode被刪除,畫面只剩下靜態的symbol圖片
         * )
         */


        stopAndRemoveAllAnisWithOutHighOdds() {
          for (let i = this._aryRunningNode.length - 1; i >= 0; i--) {
            const node = this._aryRunningNode[i];
            const aniExtensionComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
            const prefabId = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID];
            const groupId = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID];
            const symbolInfo = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO];
            const iconID = symbolInfo.iconID;
            const isBonusGroup = groupId.includes(98);
            const isHighOdds = HIGH_ODDS_SYMBOL_LIST.includes(iconID);
            const isWild = WILD_LIST.includes(iconID); // Wild but not bonus → 執行 wild reset 並回收

            if (!isBonusGroup && isWild) {
              this._wildRPSSystem.resetWild();

              this.recycleNode(node, aniExtensionComponent, prefabId);
              continue;
            } // High odds (not bonus or wild) → 回傳至 gameIcon


            if (!isBonusGroup && isHighOdds) {
              var _node$parent4, _this$_slotController5;

              (_node$parent4 = node.parent) == null || _node$parent4.removeChild(node);
              aniExtensionComponent == null || aniExtensionComponent.stopAni();
              (_this$_slotController5 = this._slotControllerReAddToGameIcon) == null || _this$_slotController5.call(this, symbolInfo.reelIndex, symbolInfo.iconIndex, node);

              this._aryRunningNode.splice(i, 1);

              continue;
            }

            this.recycleNode(node, aniExtensionComponent, prefabId);
          }
        }

        recycleNode(node, aniComponent, prefabId) {
          var _node$parent5;

          aniComponent == null || aniComponent.stopAni();
          (_node$parent5 = node.parent) == null || _node$parent5.removeChild(node);
          this.removeSingleNodeData(node);
          (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
            error: Error()
          }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().pushInstancePrefabNodeToPool(prefabId, node);

          const index = this._aryRunningNode.indexOf(node);

          if (index !== -1) {
            this._aryRunningNode.splice(index, 1);

            console.log();
          }
        }

        getAniNodeByReelIndexAndIconIndex(reelIndex, iconIndex) {
          for (let node of this._aryRunningNode) {
            if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex == reelIndex && node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconIndex == iconIndex) {
              return node;
            }
          }

          return null;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_singleSlotItemNode", [_dec2], {
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
//# sourceMappingURL=513b61e8055d4d15ee0fbd3ac197934db5ea2d36.js.map