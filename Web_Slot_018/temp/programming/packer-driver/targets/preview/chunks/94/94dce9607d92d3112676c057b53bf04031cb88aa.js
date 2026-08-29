System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, DefinitionGameConfigData, GameState, DYN_NODE_PROPERTIES, Vec3, GameUtils, AnimationControllersPoolManager, AniSysTools, AniCtrlPropDef, ProcessSymbolData, _crd, WILD_LIST, SPECIAL_SYMBOL_LIST, PFB_SYMBOL_ANI, PFB_ANI_LIST, PFB_SPINE_SKIN_ID, PFB_SYMBOL_AWARD_BOX, CONTAINER_ANI_SYMBOL, CONTAINER_ANI_AWARD_B;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfShowAniController(extras) {
    _reporterNs.report("ShowAniController", "../GameDisplay/ShowAniController/ShowAniController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDefinitionGameConfigData(extras) {
    _reporterNs.report("DefinitionGameConfigData", "../DefinitionGameData/DefinitionGameConfigData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotMachineIndexInfo(extras) {
    _reporterNs.report("SlotMachineIndexInfo", "../MyUtils/AnimationSystem/Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationPlayInfo(extras) {
    _reporterNs.report("AnimationPlayInfo", "../MyUtils/AnimationSystem/Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayIAniData(extras) {
    _reporterNs.report("playIAniData", "../MyUtils/AnimationSystem/Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPSWildData(extras) {
    _reporterNs.report("RPSWildData", "../GameDisplay/RPSWild/RPSWildDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolIconAinData(extras) {
    _reporterNs.report("SymbolIconAinData", "../DefinitionGameData/GameDataDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../DefinitionGameData/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowAniData(extras) {
    _reporterNs.report("ShowAniData", "../GameDisplay/ShowAniController/ShowAniDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAnimationControl(extras) {
    _reporterNs.report("IAnimationControl", "../MyUtils/AnimationSystem/Definitions/IAnimationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDYN_NODE_PROPERTIES(extras) {
    _reporterNs.report("DYN_NODE_PROPERTIES", "../MyUtils/AnimationSystem/Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../MyUtils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationControllersPoolManager(extras) {
    _reporterNs.report("AnimationControllersPoolManager", "../MyUtils/AnimationSystem/AnimationControllersPoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniSysTools(extras) {
    _reporterNs.report("AniSysTools", "../MyUtils/AnimationSystem/AniTools/AniSysTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniCtrlPropDef(extras) {
    _reporterNs.report("AniCtrlPropDef", "../MyUtils/AnimationSystem/Components/AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  _export("ProcessSymbolData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      DefinitionGameConfigData = _unresolved_2.DefinitionGameConfigData;
    }, function (_unresolved_3) {
      GameState = _unresolved_3.GameState;
    }, function (_unresolved_4) {
      DYN_NODE_PROPERTIES = _unresolved_4.DYN_NODE_PROPERTIES;
    }, function (_unresolved_5) {
      GameUtils = _unresolved_5.GameUtils;
    }, function (_unresolved_6) {
      AnimationControllersPoolManager = _unresolved_6.AnimationControllersPoolManager;
    }, function (_unresolved_7) {
      AniSysTools = _unresolved_7.AniSysTools;
    }, function (_unresolved_8) {
      AniCtrlPropDef = _unresolved_8.AniCtrlPropDef;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "708d5XOKbdJ6p+w3TYv1LYJ", "ProcessSymbolData", undefined);

      __checkObsolete__(['Vec3', 'Node']);

      ({
        WILD_LIST,
        SPECIAL_SYMBOL_LIST,
        PFB_SYMBOL_ANI,
        //--prefab id(動態)
        PFB_ANI_LIST,
        //--prefab id(動態)
        PFB_SPINE_SKIN_ID,
        //--spine skin id
        PFB_SYMBOL_AWARD_BOX,
        //--prefab id
        CONTAINER_ANI_SYMBOL,
        //--containerNode id
        CONTAINER_ANI_AWARD_B //--containerNode id

      } = _crd && DefinitionGameConfigData === void 0 ? (_reportPossibleCrUseOfDefinitionGameConfigData({
        error: Error()
      }), DefinitionGameConfigData) : DefinitionGameConfigData);

      _export("ProcessSymbolData", ProcessSymbolData = class ProcessSymbolData {
        //-1:ng(用原本的camp資料),0:阿里巴巴,1:瑪姬娜
        set currentCamp(value) {
          this._currentCamp = value;
        }

        set showAniController(value) {
          this._showAniController = value;
        }

        set processGameState(value) {
          this._processGameState = value;
        }

        constructor() {
          var _this = this;

          this._showAniController = void 0;
          this._processGameState = void 0;
          this._currentCamp = -1;
          this.getWildIconDataAniBeforeRollEnd = /*#__PURE__*/_asyncToGenerator(function* (symbolId, reelIndex, iconIndex, camp) {
            var wildPrefabId = 'Icon_0678'; //--動態wild的prefab id

            var wildData = _this.getWildIconData(reelIndex, iconIndex, symbolId, camp);

            var reelInfoAndGroup = {
              reelIndex: wildData.reelIndex,
              iconIndex: wildData.iconIndex,
              iconID: wildData.wild,
              groupID: 99
            };
            var token = Date.now();
            var targetNode = (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
              error: Error()
            }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().getPrefabNode(wildPrefabId);
            targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID] = wildPrefabId;
            targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID] = [reelInfoAndGroup.groupID];
            targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID] = token + "_" + (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).getRangeRandom(0, 100);
            targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO] = reelInfoAndGroup;
            var aniInterfaceComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(targetNode);

            if (aniInterfaceComponent) {
              aniInterfaceComponent.tokenID = targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID];
              aniInterfaceComponent.groupID = [reelInfoAndGroup.groupID];
            }

            return null;
          });

          /**
           * 20250611
           * 這邊產生出來的高賠率spineAniNode是用來在FG結束後播放的
           * 不會在塞回aniController裡面的runningPool裡面了.
           * 會直接塞回gameIcon裡面,且一開始spin就會移除
           * PS:這只是在FG後拿來帶機等待進入新一輪用的表演
           */
          this.getHighOddSpineAniAfterFGEnd = /*#__PURE__*/_asyncToGenerator(function* (prefabId, symbolId, reelIndex, iconIndex) {
            var {
              symbolIndex,
              scoreState,
              showGroup
            } = _this.getSymbolAnimationDataBeforeRollEnd(symbolId);

            var reelInfoAndGroup = _this.createReelInfoAndGroup(reelIndex, iconIndex, symbolIndex, showGroup);

            var addPlayInfoData = {
              prefabKey: prefabId,
              tokenID: '',
              containerNodeId: '',
              groupID: showGroup,
              wPos: null,
              aniInfo: {
                targetName: 'idle',
                loop: true,
                timeScale: 1
              },
              SymbolIconInfoData: reelInfoAndGroup
            };
            var targetNode = (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
              error: Error()
            }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().getPrefabNode(prefabId);
            targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID] = addPlayInfoData.prefabKey;
            targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID] = [];
            targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID] = '';
            targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO] = addPlayInfoData.SymbolIconInfoData;
            var aniInterfaceComponent = null;
            aniInterfaceComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(targetNode);

            if (aniInterfaceComponent) {
              aniInterfaceComponent.init();
              aniInterfaceComponent.slotMachineIndexInfo = addPlayInfoData.SymbolIconInfoData;
              var playData = new (_crd && AniCtrlPropDef === void 0 ? (_reportPossibleCrUseOfAniCtrlPropDef({
                error: Error()
              }), AniCtrlPropDef) : AniCtrlPropDef)();
              playData.targetName = 'idle';
              playData.loop = true;
              playData.timeScale = 1;
              aniInterfaceComponent.setAniDataInfo(playData);
              aniInterfaceComponent.tokenID = '';
              aniInterfaceComponent.groupID = [];
            } else {
              console.warn('No compatible animation controller found on targetNode.', targetNode.name);
            }

            return targetNode;
          });
          this.getSymbolIconAniBeforeRollEnd = /*#__PURE__*/_asyncToGenerator(function* (symbolId, reelIndex, iconIndex, camp) {
            var token = Date.now();

            var {
              symbolIndex,
              scoreState,
              showGroup
            } = _this.getSymbolAnimationDataBeforeRollEnd(symbolId);

            var reelInfoAndGroup = _this.createReelInfoAndGroup(reelIndex, iconIndex, symbolIndex, showGroup);

            var addPlayInfoData = _this.createPlayAniData(new Vec3(0, 0, 0), reelInfoAndGroup, showGroup); //this._processGameState === GameState.FREE_GAME ? this._currentCamp : (reelIndex <= 2 ? 0 : 1)


            var targetCamp = _this._processGameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME ? _this._currentCamp : camp;
            addPlayInfoData.prefabKey = _this.getPrefabKey(symbolId, targetCamp);
            addPlayInfoData.aniInfo = _this.getAnimationPlayInfo(symbolIndex, scoreState, 0, targetCamp);
            addPlayInfoData.containerNodeId = '';
            var tokenID = token + "_" + (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).getRangeRandom(0, 100);
            var targetNode = (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
              error: Error()
            }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().getPrefabNode(addPlayInfoData.prefabKey);
            targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID] = addPlayInfoData.prefabKey;
            targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID] = [];
            targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID] = tokenID;
            targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO] = addPlayInfoData.SymbolIconInfoData;
            var aniInterfaceComponent = null;
            aniInterfaceComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(targetNode);

            if (aniInterfaceComponent) {
              aniInterfaceComponent.init();
              aniInterfaceComponent.slotMachineIndexInfo = addPlayInfoData.SymbolIconInfoData;
              aniInterfaceComponent.setAniDataInfo(addPlayInfoData.aniInfo);
              aniInterfaceComponent.tokenID = tokenID;
              aniInterfaceComponent.groupID = [];
            } else {
              console.warn('No compatible animation controller found on targetNode.', targetNode.name);
            }

            return targetNode;
          });
        }

        createWildIconData(wildData, wpos) {
          /*
          const iconAniData: SymbolIconAinData = {
              outIndex: wildData.reelIndex,
              groupId: 99,
              globalPos: wpos,
              score: 0,
              iconIndex: wildData.iconIndex,
              camp: wildData.camp
          };*/
          //---這樣不行啦--有wild不一定有中線
          //this.setSymbolAwardBoxAnimation(iconAniData);
          var slotData = {
            reelIndex: wildData.reelIndex,
            iconIndex: wildData.iconIndex,
            iconID: wildData.wild,
            camp: wildData.camp
          };

          var wildNode = this._showAniController.addSPNodeInRunning('Icon_0678', slotData, 99);

          return wildNode;
        }

        getCampData(reelIndex) {
          return this._processGameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME ? this._currentCamp : reelIndex <= 2 ? 0 : 1;
        }

        setSymbolIconAnimation(aniIconData, symbolData) {
          /**
           * symbolIndex-symbol的server編號(iconID)
           * iconIndex---icon在reel當中的index
           * reelOutIndex---reel的index(迴圈外層)
           * scoreState動態prefab要播放的ani name
           * showGroup---表演群組輪播編號
           * aniTrackName---這邊是要播放的trackTarget name
           * aniLoop---有得分的情況下需要輪播所以在該狀態下的loop=false
           */
          var {
            symbolIndex,
            scoreState,
            showGroup
          } = this.getSymbolAnimationData(aniIconData, symbolData);
          var reelInfoAndGroup = this.createReelInfoAndGroup(aniIconData.outIndex, aniIconData.iconIndex, symbolIndex, showGroup);
          var addPlayInfoData = this.createPlayAniData(aniIconData.globalPos, reelInfoAndGroup, showGroup);
          addPlayInfoData.prefabKey = this.getPrefabKey(symbolIndex, aniIconData.camp);
          addPlayInfoData.aniInfo = this.getAnimationPlayInfo(symbolIndex, scoreState, aniIconData.score, aniIconData.camp); //console.log('setSymbolIconAnimation', addPlayInfoData);

          this._showAniController.addAnimationData(addPlayInfoData);
        }
        /**
         *2025-0525 
         *將之前先塞進gameIcon的spineNode塞回表演控制器
         */


        setExistIconAniToAniController(symbolAniNode, aniIconData, symbolId) {
          //--這裡原本就有了,要替換group的資料而已
          var {
            scoreState,
            showGroup
          } = this.getAnimationDataAfterRollEnd(aniIconData);
          var reelInfoAndGroup = this.createReelInfoAndGroupAfterRollEnd(aniIconData.outIndex, aniIconData.iconIndex, showGroup, symbolId);
          var addPlayInfoData = this.createPlayAniData(aniIconData.globalPos, reelInfoAndGroup, showGroup);
          addPlayInfoData.aniInfo = this.getAnimationPlayInfo(symbolId, scoreState, aniIconData.score, aniIconData.camp); //console.log('setExistIconAniToAniController', addPlayInfoData, symbolId);

          this._showAniController.setExistAniNode(symbolAniNode, addPlayInfoData);
        }

        getSymbolAnimationDataBeforeRollEnd(symbolId) {
          var scoreState = 'idle';
          var showGroup = -1;
          var symbolIndex = symbolId;
          return {
            symbolIndex,
            scoreState,
            showGroup
          };
        } //--resetAniPlayData


        getAnimationDataAfterRollEnd(aniIconData) {
          var scoreState = aniIconData.score > 0 ? 'connect' : 'idle';
          var showGroup = aniIconData.score > 0 ? aniIconData.groupId : 0;
          return {
            scoreState,
            showGroup
          };
        }

        getSymbolAnimationData(aniIconData, symbolData) {
          var scoreState = aniIconData.score > 0 ? 'connect' : 'idle';
          var showGroup = aniIconData.score > 0 ? aniIconData.groupId : 0;
          var symbolIndex = symbolData[aniIconData.outIndex][aniIconData.iconIndex];
          return {
            symbolIndex,
            scoreState,
            showGroup
          };
        }

        createReelInfoAndGroupAfterRollEnd(reelOutIndex, iconIndex, showGroup, iconId) {
          return {
            reelIndex: reelOutIndex,
            iconIndex: iconIndex,
            iconID: iconId,
            groupID: showGroup
          };
        }

        createReelInfoAndGroup(reelOutIndex, iconIndex, symbolIndex, showGroup) {
          return {
            reelIndex: reelOutIndex,
            iconIndex: iconIndex,
            iconID: symbolIndex,
            groupID: showGroup
          };
        }

        createPlayAniData(wpos, reelInfoAndGroup, showGroup) {
          return {
            prefabKey: '',
            tokenID: "",
            containerNodeId: CONTAINER_ANI_SYMBOL,
            groupID: showGroup,
            wPos: wpos,
            aniInfo: null,
            SymbolIconInfoData: reelInfoAndGroup
          };
        }

        getPrefabKey(symbolIndex, camp) {
          //--阿里巴巴/盜賊首領 or 瑪姬娜/強盜
          //-server 0(阿里巴巴(camp=0)/盜賊首領(camp=1)),1(瑪姬娜(camp=0)/強盜(camp=1))
          //-prefab 0=阿里(camp=0),1=姬瑪娜(camp=0),2=盜賊首領(camp=1),3=強盜(camp=1)
          if (symbolIndex <= 1) {
            return camp === 0 ? symbolIndex === 0 ? PFB_SYMBOL_ANI + '00' : PFB_SYMBOL_ANI + '01' : symbolIndex === 0 ? PFB_SYMBOL_ANI + '02' : PFB_SYMBOL_ANI + '03';
          } else if (symbolIndex >= 2 && symbolIndex <= 5) {
            //--2黑桃/3紅心/4梅花/5方塊--server資料
            //--prefab Icon04_07,
            // animation name:icon_04_connect(黑桃),icon_05_connect(紅心),icon_06_connect(方塊),icon_07_connect(梅花) 
            return PFB_SYMBOL_ANI + '04_07';
          }

          return '';
        }

        getAnimationPlayInfo(symbolIndex, scoreState, score, camp) {
          var aniLoop = score <= 0; //let ts = 1.2;//-timeScale

          var ts = 1; //--先回復美術原先設定的速度20250505

          var spineSkinName = ''; //----2黑桃/3紅心/4梅花/5方塊--server資料
          // animation name:icon_04_connect(黑桃),icon_05_connect(紅心),icon_06_connect(方塊),icon_07_connect(梅花) 

          if (symbolIndex >= 2 && symbolIndex <= 5 && score > 0) {
            /**
             *因為2黑桃/3紅心/4梅花/5方塊在非得分idle狀態根本不會動.就使用原先的symbol的圖片即可
            不需要額外在播放idle的動畫
            */
            if (this._processGameState != (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).BEGIN) {
              spineSkinName = camp === 0 ? PFB_SPINE_SKIN_ID + 1 : PFB_SPINE_SKIN_ID + 2;
            }

            var aniName = PFB_ANI_LIST[symbolIndex] + '_' + scoreState;
            return {
              targetName: aniName,
              loop: aniLoop,
              timeScale: ts,
              skinName: spineSkinName,
              useCompleteListen: false
            };
          } //----阿里巴巴/盜賊首領 or 瑪姬娜/強盜
          //ts = score > 0 ? 1.5 : 3.5;


          ts = score > 0 ? 1 : 1; //--先回復美術原先設定的速度20250505

          return {
            targetName: scoreState,
            loop: aniLoop,
            timeScale: ts,
            useCompleteListen: false
          };
        }

        setSymbolAwardBoxAnimation(aniIconData) {
          var reelInfoAndGroup = {
            reelIndex: aniIconData.outIndex,
            iconIndex: aniIconData.iconIndex,
            iconID: -1,
            groupID: aniIconData.groupId
          };
          var playInfo = {
            targetName: 'connect',
            loop: true,
            timeScale: 1.2,
            useCompleteListen: false
          };
          var bgAddPlayInfoData = {
            prefabKey: PFB_SYMBOL_AWARD_BOX,
            tokenID: '',
            containerNodeId: CONTAINER_ANI_AWARD_B,
            groupID: aniIconData.groupId,
            wPos: aniIconData.globalPos,
            aniInfo: playInfo,
            SymbolIconInfoData: reelInfoAndGroup
          };
          return this._showAniController.addAnimationData(bgAddPlayInfoData);
        }

        reSetWildNodeDataWithComponent(comp, wildData) {
          var targetNode = this._showAniController.getAniNodeByTokenId(comp.tokenID);

          wildData.camp = 0;
          var reelInfoAndGroup = {
            reelIndex: wildData.reelIndex,
            iconIndex: wildData.iconIndex,
            iconID: wildData.wild,
            groupID: 99
          };
          targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO] = reelInfoAndGroup;
          targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID] = [99];
          comp.groupID = [99];
          comp.slotMachineIndexInfo = reelInfoAndGroup; //leftWildComp.campData = wildData.camp;
        }

        getFGBonusData(reelID, campData, symbolData) {
          var returnData = {
            reelIndex: -1,
            iconIndex: -1,
            iconID: -1,
            camp: campData
          };
          var targetReel = symbolData[reelID]; //--會有不同的遊戲狀態(reSpin/freeGame)的資料,不能直接取結果的盤面

          for (var i = 0; i < targetReel.length; i++) {
            if (SPECIAL_SYMBOL_LIST.includes(targetReel[i])) {
              returnData.reelIndex = reelID;
              returnData.iconIndex = i;
              returnData.iconID = targetReel[i];
              break;
            }
          }

          return returnData;
        } //private getWildIconData(reelID: number, symbolData: number[][], campData: number = -1): RPSWildData {


        getWildIconData(reelIndex, iconIndex, symbolId, campData) {
          if (campData === void 0) {
            campData = -1;
          }

          var returnData = {
            reelIndex: reelIndex,
            iconIndex: iconIndex,
            wild: symbolId,
            camp: campData
          };
          /*
          let targetReel: number[] = symbolData[reelID];//--會有不同的遊戲狀態(reSpin/freeGame)的資料,不能直接取結果的盤面
          for (let i: number = 0; i < targetReel.length; i++) {
              if (WILD_LIST.includes(targetReel[i])) {
                  returnData.reelIndex = reelID;
                  returnData.iconIndex = i;
                  returnData.wild = targetReel[i];
                  break;
              }
          }*/

          return returnData;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=94dce9607d92d3112676c057b53bf04031cb88aa.js.map