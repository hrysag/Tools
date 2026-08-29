System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UITransform, IconReelView, ReelRoundState, GameIcon018, GameState, DefinitionGameConfigData, DYN_NODE_PROPERTIES, AnimationControllersPoolManager, AniSysTools, AniCtrlPropDef, _dec, _class, _crd, ccclass, property, CLEAR_SYMBOL_LIST, FORECAST_FOR_REEL, FORECAST_REEL, WILD_LIST, REEL_AMOUNT, HIGH_ODDS_SYMBOL_LIST, PFB_SYMBOL_ANI, ReelView018;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfIconReelView(extras) {
    _reporterNs.report("IconReelView", "db://assets/Scripts/ReelTemplate/ReelTemplate_2/Scripts/IconReelView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelRoundState(extras) {
    _reporterNs.report("ReelRoundState", "db://assets/Scripts/ReelTemplate/ReelTemplate_2/Scripts/Model/ReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelEvent(extras) {
    _reporterNs.report("ReelEvent", "db://assets/Scripts/ReelTemplate/ReelTemplate_2/Scripts/Model/ReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameReel(extras) {
    _reporterNs.report("GameReel018", "./GameReel018", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameIcon(extras) {
    _reporterNs.report("GameIcon018", "./GameIcon018", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../DefinitionGameData/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDefinitionGameConfigData(extras) {
    _reporterNs.report("DefinitionGameConfigData", "../DefinitionGameData/DefinitionGameConfigData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "db://assets/Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDYN_NODE_PROPERTIES(extras) {
    _reporterNs.report("DYN_NODE_PROPERTIES", "../MyUtils/AnimationSystem/Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationControllersPoolManager(extras) {
    _reporterNs.report("AnimationControllersPoolManager", "../MyUtils/AnimationSystem/AnimationControllersPoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniSysTools(extras) {
    _reporterNs.report("AniSysTools", "../MyUtils/AnimationSystem/AniTools/AniSysTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAnimationControl(extras) {
    _reporterNs.report("IAnimationControl", "../MyUtils/AnimationSystem/Definitions/IAnimationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniCtrlPropDef(extras) {
    _reporterNs.report("AniCtrlPropDef", "../MyUtils/AnimationSystem/Components/AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineController(extras) {
    _reporterNs.report("SpineController", "../MyUtils/AnimationSystem/Components/SpineController", _context.meta, extras);
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
    }, function (_unresolved_2) {
      IconReelView = _unresolved_2.IconReelView;
    }, function (_unresolved_3) {
      ReelRoundState = _unresolved_3.ReelRoundState;
    }, function (_unresolved_4) {
      GameIcon018 = _unresolved_4.GameIcon018;
    }, function (_unresolved_5) {
      GameState = _unresolved_5.GameState;
    }, function (_unresolved_6) {
      DefinitionGameConfigData = _unresolved_6.DefinitionGameConfigData;
    }, function (_unresolved_7) {
      DYN_NODE_PROPERTIES = _unresolved_7.DYN_NODE_PROPERTIES;
    }, function (_unresolved_8) {
      AnimationControllersPoolManager = _unresolved_8.AnimationControllersPoolManager;
    }, function (_unresolved_9) {
      AniSysTools = _unresolved_9.AniSysTools;
    }, function (_unresolved_10) {
      AniCtrlPropDef = _unresolved_10.AniCtrlPropDef;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "df73d2LeGpF/7NNmxEMQjev", "ReelView018", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'UITransform', 'Game', 'game']);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        CLEAR_SYMBOL_LIST,
        FORECAST_FOR_REEL,
        FORECAST_REEL,
        WILD_LIST,
        REEL_AMOUNT,
        HIGH_ODDS_SYMBOL_LIST,
        PFB_SYMBOL_ANI
      } = _crd && DefinitionGameConfigData === void 0 ? (_reportPossibleCrUseOfDefinitionGameConfigData({
        error: Error()
      }), DefinitionGameConfigData) : DefinitionGameConfigData);

      _export("ReelView018", ReelView018 = (_dec = ccclass('ReelView018'), _dec(_class = class ReelView018 extends (_crd && IconReelView === void 0 ? (_reportPossibleCrUseOfIconReelView({
        error: Error()
      }), IconReelView) : IconReelView) {
        set processAniSymbolData(value) {
          this._processAniSymbolData = value;
        } //--20250611 FG結束後待機表演的高賠率spineAni


        set processHighOddSpineAniAfterFGEnd(value) {
          this._processHighOddSpineAniAfterFGEnd = value;
        }

        set fastStopClick(value) {
          this._fastStopClick = value;
        }

        get fastStopClick() {
          return this._fastStopClick;
        }

        constructor() {
          var _this;

          super();
          _this = this;

          /**
           * ReelView,接收slotMachineController的資料,負責顯示滾輪的圖示
           * 範例當中是繼承ReelView,但功能比較齊全的是繼承IconReelView
           * 兩者都是繼承SlotMachineViewBase
           * slotController<->reelView->reel(每一軸)->gameIcon
           * (-PS-)
           * 1.收資料
           * 2.負責reel和icon的表演
           * 3.原本的公版設計是繼承reelView,這邊是繼承iconReelView但基礎功能相同
           * 多了額外的功能而已
           * 4.每一軸的reel和icon都要分別綁近來它的property資料裡面
           * 5.symbol的產生表演都在裡面了
           * 6.每個reel的node放在this._reelNodeList裡面
           * 7.但是又很反常的把每個reel裡面的gameicon放在this._resultIconList裡面
           * 
           * reelView.createIcon
           * 在一開始的時候會先把icon的prefab產生出來,然後再去控制他的行為(reelView.createIcon)--會透過你掛載的prefabList去產生
           * PS--view.createIcon這邊還是照你的count數量去產生(尚未多一個)
           * 
           * //--reelView頗重要的...他會去控制
           * reelView.initReel()
           * init reel(掛載事件和reel.init)
           * 1.在過程中就會透過 createShowIcon產生額外兩個(上下)的icon
           * 2.iconReel.init--->
           * 先拷貝一個那一軸的iconNodeList(就是預先產生的3個)
           * 在initShowIcon的時候會初始化剛剛丟進來的兩個showIcon.最後會將這兩個分別指給endBounceIcon|startPullIcon(看你編輯器選啥模式)
           * 最後將endBounceIcon推到iconNodeList的最前面
           * movement 會座移動的相關處理
           * 
           * reelOneRoundStart-->每一軸啟動會call(他會一直call start...但這個會判斷是否為該run第一次啟動)
           * <ReelRoundState.FirstRoll>
           * 可以在這邊換模糊的圖
           * 
           * getIconSymbolData--->最後一輪會換成真的資料
           * 
           */
          this._gameReels = void 0;
          this._aryNgSymbolWorldPosition = void 0;
          this._aryFGSymbolWorldPosition = void 0;
          this._orientation = null;
          this._fastStopClick = false;
          //--考慮移出去做成global
          this._gameState = void 0;
          this._isForecastMode = void 0;
          this._processAniSymbolData = null;
          this._processHighOddSpineAniAfterFGEnd = null;

          this.getAndRemoveSymbolAniNodeWithWorldPos = (reelIndex, iconIndex) => {
            var targetNode = this.getAndRemoveSymbolAniNodeInReel(reelIndex, iconIndex);
            var worldPos = this.getSymbolWorldPosition(reelIndex, iconIndex);
            return {
              target: targetNode,
              worldPos: worldPos
            };
          };

          this.addBackToGameIcon = (reelID, iconIndex, spineAniNode) => {
            this._resultIconList[reelID][iconIndex].addSymbolAniNode(spineAniNode);
          };

          //--這邊完成亂數產生初始盤面

          /*
          public override initIconSymbol(iconSymbolData: number[][]): void {
              super.initIconSymbol(iconSymbolData);
              console.log('finish initIconSymbol in ReelView018', this._processAniSymbolData);
              console.log();
          }*/
          this.changeInitSpineAniNode = () => {
            var campIndex = 0;

            var _loop = function _loop(i) {
              if (i > 2) {
                campIndex = 1;
              }

              var _loop2 = function _loop2(j) {
                var gameIconData = _this._resultIconList[i][j].iconData;

                _this.getSymbolAniNode(gameIconData.iconID, i, j, campIndex).then(node => {
                  if (node) {
                    // 處理 node
                    _this._resultIconList[i][j].addSymbolAniNode(node);
                  }
                });
              };

              for (var j = 0; j < _this._resultIconList[i].length; j++) {
                _loop2(j);
              }
            };

            for (var i = 0; i < this._resultIconList.length; i++) {
              _loop(i);
            }
          };

          this._aryNgSymbolWorldPosition = [];
          this._aryFGSymbolWorldPosition = [];
          this._gameState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL;
        }

        init() {
          super.init();
          this._gameReels = this._reels;
          this._isForecastMode = false;
        }

        updateIconCamp(campIndex) {
          for (var i = 0; i < this._gameReels.length; i++) {
            for (var icon of this._gameReels[i].iconNodeList) {
              icon.getComponent(_crd && GameIcon018 === void 0 ? (_reportPossibleCrUseOfGameIcon({
                error: Error()
              }), GameIcon018) : GameIcon018).nowFgCamp = campIndex;
            }
          }
        }

        initIcon() {
          for (var reelID = 0; reelID < this._reels.length; reelID++) {
            //--camp=0是阿里巴巴, camp=1是四十大盜
            var campIndex = this._reels[reelID].camp;

            for (var index = 0; index < this.getIconAmount(reelID); index++) {
              this._resultIconList[reelID][index].init(); //-寫到reelId和iconIndexInReel,camp


              this._resultIconList[reelID][index].setGameIconData(reelID, index, campIndex);
            } //--這個就slotMachine tool 多複製出來做為表演的


            this._reels[reelID].startPullIcon.getComponent(_crd && GameIcon018 === void 0 ? (_reportPossibleCrUseOfGameIcon({
              error: Error()
            }), GameIcon018) : GameIcon018).setGameIconData(reelID, -1, campIndex); //--會被unshift到iconNodeList的最前面


            this._reels[reelID].endBounceIcon.getComponent(_crd && GameIcon018 === void 0 ? (_reportPossibleCrUseOfGameIcon({
              error: Error()
            }), GameIcon018) : GameIcon018).setGameIconData(reelID, -1, campIndex);
          }

          this.initSymbolWorldPosition(this._aryNgSymbolWorldPosition);
        } //--預先算好每個symbol的世界座標


        initSymbolWorldPosition(aryEmptyTarget) {
          for (var i = 0; i < this._resultIconList.length; i++) {
            aryEmptyTarget[i] = [];

            for (var j = 0; j < this._resultIconList[i].length; j++) {
              /*
              let targetNode: Node = this._resultIconList[i][j].node;//--這是產生的prefab 
               let pos: Vec3 = targetNode.position;
               let uiTransformComponent: UITransform = targetNode.parent.getComponent(UITransform);
               let worldPos: Vec3 = uiTransformComponent.convertToWorldSpaceAR(pos);
              */
              var worldPos = this.reGetRealIconWorldPosition(i, j);
              aryEmptyTarget[i].push(worldPos);
            }
          }
        } //--取得不同模式下的symbol世界座標

        /**
         * 20250423 每次都重算一次比較保險,免得再取出座標後玩家旋轉螢幕
         */


        getSymbolWorldPosition(reelIndex, iconIndex) {
          /*
          let targetAryWorldPosition: Vec3[][] = (this._gameState == GameState.NORMAL || this._gameState == GameState.RE_SPINE) ? this._aryNgSymbolWorldPosition : this._aryFGSymbolWorldPosition;
           return targetAryWorldPosition[reelIndex][iconIndex];
          */
          return this.reGetRealIconWorldPosition(reelIndex, iconIndex);
          /*
          const testPos = this.reGetRealIconWorldPosition(reelIndex, iconIndex);
          console.log('getSymbolWorldPosition:', reelIndex, iconIndex + '\n' +
              'reNew::' + testPos + '\n' +
              'preNew::' + targetAryWorldPosition[reelIndex][iconIndex]
          );
           return this.reGetRealIconWorldPosition(reelIndex, iconIndex);
          */
        } //--重新算一次


        reGetRealIconWorldPosition(reelIndex, iconIndex) {
          var targetNode = this._resultIconList[reelIndex][iconIndex].node; //--這是產生的prefab

          var pos = targetNode.position;
          var uiTransformComponent = targetNode.parent.getComponent(UITransform);
          var worldPos = uiTransformComponent.convertToWorldSpaceAR(pos);
          return worldPos;
        }

        changeGameMode(gameState, campIndex) {
          this._gameState = gameState;

          for (var reel of this._reels) {
            reel.changeGameMode(gameState, campIndex);
          }

          if (gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME && this._aryFGSymbolWorldPosition.length == 0) {
            this.initSymbolWorldPosition(this._aryFGSymbolWorldPosition);
          }
        }

        changeRotationResolution(value) {
          if (this._orientation == value) return;
          this._orientation = value;
          return; //--改為每次都是重新算一次不先預先算了

          if (this._gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME) {
            this._aryFGSymbolWorldPosition = [];
            this.scheduleOnce(() => {
              this.initSymbolWorldPosition(this._aryFGSymbolWorldPosition);
            }, 0);
            this.initSymbolWorldPosition(this._aryFGSymbolWorldPosition);
          } else if (this._gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL || this._gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).RE_SPINE) {
            this._aryNgSymbolWorldPosition = [];
            this.scheduleOnce(() => {
              this.initSymbolWorldPosition(this._aryNgSymbolWorldPosition);
            }, 0);
          }
        }
        /**
         * 1.從icon裡面把spineAni抽出來到表演層去使用(該高賠率icon有中線)
         * 2.回收回物件池
         * @returns 
         */


        getAndRemoveSymbolAniNodeInReel(reelIndex, iconIndex) {
          return this._resultIconList[reelIndex][iconIndex].getSymbolAniNodeAndRemove();
        }

        //--將高賠率且沒有得分的icon的spineAni關閉
        closeSymbolAniNode(reelIndex, iconIndex) {
          this._resultIconList[reelIndex][iconIndex].closeSymbolAniNode();
        } //--播放高賠率icon的spineAni


        playSymbolAni(reelIndex, iconIndex, aniName) {
          this._resultIconList[reelIndex][iconIndex].playSymbolAni(aniName);
        }

        closeAllSymbolAniNode() {
          for (var i = 0; i < this._resultIconList.length; i++) {
            for (var j = 0; j < this._resultIconList[i].length; j++) {
              this.closeSymbolAniNode(i, j);
            }
          }
        }

        playAllSymbolAni() {
          for (var i = 0; i < this._resultIconList.length; i++) {
            for (var j = 0; j < this._resultIconList[i].length; j++) {
              this.playSymbolAni(i, j);
            }
          }
        }

        setSingleGameIconBrightness(reelID, iconIndex, brightnessFlag) {
          this._resultIconList[reelID][iconIndex].setBrightness(brightnessFlag);
        }

        checkGameIconForTest() {
          var testReels = this._reels; //--裡面有沒刪掉的(index 1)

          var prepareIconList = this._prepareIconList; //--這邊正常

          var resultIconList = this._resultIconList; //--這裡也有沒刪的

          console.log(); //this._reels[reelID].startPullIcon.getComponent(GameIcon018).setGameIconData(reelID, -1, campIndex);
        } //--要換高賠率的spine skin 在結束FG回到NG時20250610


        changeSpineAniNodeSkinAfterFG() {
          var _this2 = this;

          for (var i = 0; i < this._resultIconList.length; i++) {
            var _loop3 = function _loop3() {
              var gameIcon = _this2._resultIconList[i][j];
              var spineAniNodeName = gameIcon.getSymbolAniNodeName();
              var iconData = gameIcon.getGameIconData(); //-iconData.camp會對應到原本所屬的陣營,iconData.iconID會對應到icon的id(or symbolID)
              //--ps 00,01,02,03這些在資料裡面會是 0 1 2 3

              if (spineAniNodeName != '') {
                var checkSameData = _this2.isIconIdMatched(iconData.iconID, iconData.camp, spineAniNodeName);

                var aniInterfaceComponent = null;
                var spineAniNode;

                if (!checkSameData.sameSpine && checkSameData.prefabKey != '') {
                  //--移除舊的spineAni換新的並且進入idle狀態
                  spineAniNode = gameIcon.getSymbolAniNodeAndRemove();
                  var prefabAniId = spineAniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                    error: Error()
                  }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID];
                  aniInterfaceComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                    error: Error()
                  }), AniSysTools) : AniSysTools).findAndGetIAniComponent(spineAniNode);
                  spineAniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                    error: Error()
                  }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID] = [];
                  spineAniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                    error: Error()
                  }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID] = '';
                  spineAniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                    error: Error()
                  }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO] = null;
                  spineAniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                    error: Error()
                  }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID] = '';
                  aniInterfaceComponent.slotMachineIndexInfo = null;
                  aniInterfaceComponent.tokenID = '';
                  aniInterfaceComponent.groupID = [];
                  (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
                    error: Error()
                  }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().pushInstancePrefabNodeToPool(prefabAniId, spineAniNode);

                  _this2.getHighOddSpineAniNode(checkSameData.prefabKey, iconData.symbolID, i, j).then(node => {
                    if (node) {
                      // 處理 node
                      gameIcon.addSymbolAniNode(node);
                    }
                  });
                } else if (checkSameData.sameSpine) {
                  //--同一個spineAni就不需要換了,直接切換動畫狀態到idle
                  spineAniNode = gameIcon.getSymbolAniNode();
                  aniInterfaceComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                    error: Error()
                  }), AniSysTools) : AniSysTools).findAndGetIAniComponent(spineAniNode);
                  var plaData = aniInterfaceComponent.getCustomizeSpineTrackEntry('idle');

                  if (!plaData) {
                    var playData = new (_crd && AniCtrlPropDef === void 0 ? (_reportPossibleCrUseOfAniCtrlPropDef({
                      error: Error()
                    }), AniCtrlPropDef) : AniCtrlPropDef)();
                    playData.targetName = 'idle';
                    playData.loop = true;
                    playData.timeScale = 1;
                    aniInterfaceComponent.setAniDataInfo(playData);
                  }

                  gameIcon.playSymbolAni();
                }
              }
            };

            for (var j = 0; j < this._resultIconList[i].length; j++) {
              _loop3();
            }
          }
        } //--準備把所有的icon的spineAni關閉,並且回收到物件池
        //--這邊是沒有中線的高賠率spineAni,會留在gameIcon裡面所以要回收掉


        cleanIdleSymbolAnis() {
          for (var i = 0; i < this._resultIconList.length; i++) {
            for (var j = 0; j < this._resultIconList[i].length; j++) {
              var spineNode = this.getAndRemoveSymbolAniNodeInReel(i, j);
              this.clearAndRecycleSpineNode(spineNode);
            }
          } //--裡面已經是gameIcon的node了


          for (var icon of this._prepareIconList) {
            var _spineNode = icon.getSymbolAniNodeAndRemove();

            this.clearAndRecycleSpineNode(_spineNode);
          }
        }

        clearAndRecycleSpineNode(spineNode) {
          if (!spineNode) return;
          var prefabId = spineNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID]; // 重置 spineNode 自訂屬性

          spineNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID] = [];
          spineNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID] = '';
          spineNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO] = null;
          spineNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID] = ''; // 重置 spineNode 上的動畫控制介面資料

          var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
            error: Error()
          }), AniSysTools) : AniSysTools).findAndGetIAniComponent(spineNode);

          if (aniComp) {
            aniComp.slotMachineIndexInfo = null;
            aniComp.tokenID = '';
            aniComp.groupID = [];
          } // 推回物件池


          (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
            error: Error()
          }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().pushInstancePrefabNodeToPool(prefabId, spineNode);
        }

        changePrepareIconSymbol(reelID) {
          var symbolID = this.getIconSymbolData(reelID); //--原諒我為了拿到這個區域變數才這麼下幹不用super.changePrepareIconSymbol

          var prepareIcon = this._prepareIconList[reelID];
          prepareIcon.updateSymbol(symbolID);

          if (this._reelStateList[reelID] === (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
            error: Error()
          }), ReelRoundState) : ReelRoundState).FinalRoll) {
            prepareIcon.closeBlur();
            prepareIcon.rollState = (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
              error: Error()
            }), ReelRoundState) : ReelRoundState).FinalRoll; //--20250524-從這裡換大賠率的spine塞進去

            /**
             * 因為父類別的changePrepareIconSymbo他不是async的方法,但是要等getSymbolNode(promise)的結果.
             * 除了在拆出一支方法外,也可以用then來處理
             */

            var currentCamp = prepareIcon.getCurrentCamp();
            var iconReelInfo = prepareIcon.getIconReelInfo();
            this.getSymbolAniNode(symbolID, iconReelInfo.reelIndex, iconReelInfo.iconIndex, currentCamp).then(node => {
              if (node) {
                // 處理 node
                prepareIcon.addSymbolAniNode(node);
              }
            });
          } else {
            //--CLEAR_SYMBOL_LIST=[6,7,8,10]--這些不會有模糊
            if (!CLEAR_SYMBOL_LIST.includes(symbolID)) {
              prepareIcon.openBlur(symbolID);
            } else {
              //--特殊符號不會有模糊
              prepareIcon.closeBlur();
            }
          }
        }

        isIconIdMatched(symbolIndex, camp, iconId) {
          var returnData = {
            sameSpine: false,
            prefabKey: ''
          };

          if (symbolIndex <= 1) {
            var _prefabId;

            if (camp === 0) {
              _prefabId = symbolIndex === 0 ? PFB_SYMBOL_ANI + '00' : PFB_SYMBOL_ANI + '01';
            } else {
              _prefabId = symbolIndex === 0 ? PFB_SYMBOL_ANI + '02' : PFB_SYMBOL_ANI + '03';
            }

            returnData.prefabKey = _prefabId;

            if (iconId === _prefabId) {
              returnData.sameSpine = true;
            } else {
              returnData.sameSpine = false;
            }

            return returnData;
          } else {
            return returnData;
          }
        } //--create symbol node


        getSymbolAniNode(symbolId, reelIndex, iconIndex, camp) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (HIGH_ODDS_SYMBOL_LIST.includes(symbolId)) {
              var symbolNode = yield _this3._processAniSymbolData(symbolId, reelIndex, iconIndex, camp);
              return symbolNode;
            } else {
              // 如果不是高賠率符號，則返回 null 或其他處理
              return null;
            }
          })();
        } //--20250611 在FG結束後創造一個全新的spineAniNode用來待機(不推入aniController裡面的runningPool)


        getHighOddSpineAniNode(prefabId, symbolId, reelIndex, iconIndex) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var symbolNode = yield _this4._processHighOddSpineAniAfterFGEnd(prefabId, symbolId, reelIndex, iconIndex);
            return symbolNode;
          })();
        } //protected override stopAllReelRoll(): void {-----feature 1.0 的方法已經被移除


        fastStopAllReel() {
          this._fastStopClick = true;
          super.fastStopAllReel();
        }
        /**
         * 狀態改變事件，可以在這裡做狀態的判斷
         * @param reelID 滾輪ID 
         * @param reelEvent 單輪滾的狀態
         * @returns 
         */


        receiveReelEvent(reelID, reelEvent) {
          if (this._reelStateList[reelID] == (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
            error: Error()
          }), ReelRoundState) : ReelRoundState).FirstRoll) {//reset陣營資料+寫入滾輪狀態
          } else if (this._reelStateList[reelID] == (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
            error: Error()
          }), ReelRoundState) : ReelRoundState).FinalRoll) {//--寫入最後一輪的狀態--wild要再換牌處理(不顯示結果用特殊符號代替symbol_index=10)
            //console.log('final_roll_state', reelID);
          } else if (this._reelStateList[reelID] == (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
            error: Error()
          }), ReelRoundState) : ReelRoundState).RollEnd && this._currentReadyHandReelID != 99) {
            //--有聽牌
            if (reelID == FORECAST_FOR_REEL || reelID == FORECAST_REEL) {//--聽牌狀況下第二軸或是第五軸轉完(要接appear的表演)
            }
          }

          for (var gameIcon of this._reels[reelID].iconNodeList) {
            gameIcon.getComponent(_crd && GameIcon018 === void 0 ? (_reportPossibleCrUseOfGameIcon({
              error: Error()
            }), GameIcon018) : GameIcon018).rollState = this._reelStateList[reelID];
          }

          this._reels[reelID].startPullIcon.getComponent(_crd && GameIcon018 === void 0 ? (_reportPossibleCrUseOfGameIcon({
            error: Error()
          }), GameIcon018) : GameIcon018).rollState = this._reelStateList[reelID];
          super.receiveReelEvent(reelID, reelEvent);
        } //--20250429-78美術壓黑有兩種不同的明亮度,wild猜拳的明亮度更暗


        setWildModeForGameIconDarkness() {
          var targetLength = this._resultIconList.length;

          for (var i = 0; i < targetLength; i++) {
            for (var j = 0; j < this._resultIconList[i].length; j++) {
              var gameIcon = this._resultIconList[i][j];
              gameIcon.setWildBrightness();
            }
          }
        }
        /**
        * 關閉/開啟指定的全部(整個盤面)的亮度(true=變暗/false=正常) 
        * @param brightnessFlag 
        */


        closeOrOpenAllGameIconBright(brightnessFlag) {
          var targetLength = this._resultIconList.length;

          for (var i = 0; i < targetLength; i++) {
            this.setIconBrightness(i, brightnessFlag);
          }
        }
        /**
        * 關閉/開啟指定的指定軸的亮度(true=變暗/false=正常)
        * @param reelIndex 
        * @param brightnessFlag 
        */


        openOrCloseWholeReelIconBright(reelIndex, brightnessFlag) {
          this.setIconBrightness(reelIndex, brightnessFlag);
        }
        /**
         * 關閉/開啟指定的指定軸的指定icon的亮度(true=變暗/false=正常)
         * @param value 
         */


        openOrCloseSingleGameIconBright(value) {
          for (var i = 0; i < value.length; i++) {
            this.setIconBrightness(value[i].reelIndex, value[i].brightnessFlag, value[i].iconIndex);
          }
        }

        setTweenDarkForForecast() {
          var targetLength = this._resultIconList.length;

          for (var i = 0; i < targetLength; i++) {
            for (var j = 0; j < this._resultIconList[i].length; j++) {
              if (i == FORECAST_FOR_REEL) {
                var gameIcon = this._resultIconList[i][j];

                if (!WILD_LIST.includes(gameIcon.iconData.iconID)) {
                  gameIcon.setTweenDark();
                }
              } else if (i != FORECAST_REEL) {
                this._resultIconList[i][j].setTweenDark();
              }
            }
          }
        } //--取消最後一軸的dark效果(給聽牌結束時,聽牌軸後面那軸要打開)


        cancelTweenDarkForForecast() {
          for (var gameIcon of this._resultIconList[REEL_AMOUNT - 1]) {
            gameIcon.setBrightness(false);
          }
        }
        /**
         * 
         * @param reelIndex 
         * @param iconIndex 
         * @param colorAlpha 0-255 不指定為預設恢復原本的spriteFrame color
         */


        setIconAlpha(reelIndex, iconIndex, colorAlpha) {
          this._resultIconList[reelIndex][iconIndex].setAlpha(colorAlpha);
        }

        changeReadyHandMode(reelID, enter) {
          if (enter) {
            this._isForecastMode = true;

            this._gameReels[reelID].enterReadyHandMode();
          } else {
            this._isForecastMode = false;

            this._gameReels[reelID].exitReadyHandMode();
          }
        }
        /**
         *  
         * protected isStopAllReel(): boolean {
            let isStop: boolean = this.isFastModeCallback() || this.checkFloatIsZero(this._stopSpaceTime);
            return isStop;}
         這邊就會return true的情況下就不會走this.showReadyHandCallback?.(reelID);  
        
         */

        /*
         protected override checkShowReadyHand(reelID: number): void {
            //--for test
            let haveReadyHand: boolean = this.reelHaveReadyHand(reelID);
            let checkPreviousReelIsRollEnd = reelID === 0 ? true : this._reelStateList[reelID - 1] === ReelRoundState.RollEnd; // 0是第一輪，所以不用檢查上一輪
            let canShowReadyHand: boolean = haveReadyHand && checkPreviousReelIsRollEnd;
            let isStopAllReel: boolean = this.isStopAllReel();
            console.log('isStopAllReel', isStopAllReel, 'checkShowReadyHand', reelID, 'haveReadyHand:', haveReadyHand, 'checkPreviousReelIsRollEnd:', checkPreviousReelIsRollEnd, 'canShowReadyHand:', canShowReadyHand);
             super.checkShowReadyHand(reelID);
        }*/

        /**
         * 聽牌軸的變速度,不去影響到下一軸的速度
         * 原本的判斷是reelID>=this._currentReadyHandReelID
         * 這樣聽牌軸後面的軸會變速度
         */


        reelHaveReadyHand(reelID) {
          return reelID === this._currentReadyHandReelID;
        }
        /**
         * 只是我要檢查資料所以這樣override掉
         * 之後要拿掉202250304
         */

        /*
        protected override reelOneRoundStart(reelID: number): void {
             if (this._reelStateList[reelID] === ReelRoundState.FirstRoll) {
                //--全部滾輪啟動的時候會觸發一次(一軸觸發一次)
                console.log('reelOneRoundStart', this._resultIconList);
                console.log('reelOneRoundStart@@');
            }
            super.reelOneRoundStart(reelID);
        }*/
        //-test function


        closeAllIconBright() {
          /**
           * this._reels==>放全部的reel
           * [[reel,reel,reel,reel]]
           * 每個reel裡面的node=reelNode(掛載reel的node..就是_reelNodeList裡面的node)
           * 
           * 每一個reel裡面的iconNodeList就是就是裝個別gameIcon的node(有幾個icon就有幾個node)
           * e.g
           * this._reels[1].iconNodeList=[[icon,icon,icon,icon]]
           * this._reels[1].iconNodeList[3]---這個是抓到第二軸的第四個icon node
           * this._reels[1].iconNodeList[3].parent=iconRoot
           * this._reels[1].iconNodeList[3].getComponent(GameIcon)--->這就是symbol的component
           * 
           * 這些掛著icon的node(prefab),會被add在你在編輯器裡面掛載的IconRoot 這個node裡面
           * (所以他們的parent就是IconRoot)
           * 
           * 而裝iconPrefabNode裡面的component就是GameIcon
           * 
           * PS--這邊要小心,因為會多產生一個prefab(一上一下),所以你要自己去過濾
           * 舉例如果你的一軸有3個icon,那這個list會有4個實體(其中一個不會出現在畫面中間(上下移動))
           * 
           * _reelNodeList==>[reelNode,reelNode,reelNode,reelNode]
           * 
           * 
           * _resultIconList==>裝最終結果的gameIcon[[icon,icon,icon],[icon,icon,icon],[icon,icon,icon],[icon,icon,icon]]
           * 這個是裝整理過後的最終結果icon
           * 
           * 你要控制symbol的一些行為(換圖啦(可能你的symbol會疊很多層)..之類的)
           * 需要透過這個gameIcon去控制,你要更多行為的話需要繼承gameIcon來做額外的操作
           * 目前只有提供基本的Active,SetPosition,SetParent,SetAnchor,Hide,Show,updateSymbol,SetBrightness
           * 基礎功能
           * 
           * 
           */
          console.log('this._reels', this._reels, this._reels[0].node);
          console.log('this._reelNodeList', this._reelNodeList);
          console.log('this._resultIconList', this._resultIconList);

          this._resultIconList[0][0].setBrightness(true);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c498f29c8f2c2d104abb98e43195324d31eac967.js.map