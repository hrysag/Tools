System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, RPSWildState, RPSWild_AniState, RPSWildResult, SingleSlot, DefinitionGameConfigData, RPSBattle, RPSResultTitle, RPSWildValue, RPSCollection, AudioManager, SOUND_TYPE, SoundList, AudioSourceList, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, WILD_LIST, RPSWildSystem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRPSWildAnimationController(extras) {
    _reporterNs.report("RPSWildAnimationController", "./RPSWildAnimationController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPSWildData(extras) {
    _reporterNs.report("RPSWildData", "./RPSWildDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPSWildState(extras) {
    _reporterNs.report("RPSWildState", "./RPSWildDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPSWild_AniState(extras) {
    _reporterNs.report("RPSWild_AniState", "./RPSWildDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPSWildResult(extras) {
    _reporterNs.report("RPSWildResult", "./RPSWildDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPSGuessRoundData(extras) {
    _reporterNs.report("RPSGuessRoundData", "./RPSWildDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotMachineIndexInfo(extras) {
    _reporterNs.report("SlotMachineIndexInfo", "../../MyUtils/AnimationSystem/Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingleSlot(extras) {
    _reporterNs.report("SingleSlot", "./SingleSlot/SingleSlot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDefinitionGameConfigData(extras) {
    _reporterNs.report("DefinitionGameConfigData", "../../DefinitionGameData/DefinitionGameConfigData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPSBattle(extras) {
    _reporterNs.report("RPSBattle", "./RPSBattle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPSResultTitle(extras) {
    _reporterNs.report("RPSResultTitle", "./RPSResultTitle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPSWildValue(extras) {
    _reporterNs.report("RPSWildValue", "./RPSWildDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPSCollection(extras) {
    _reporterNs.report("RPSCollection", "./RPSCollection", _context.meta, extras);
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

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      RPSWildState = _unresolved_2.RPSWildState;
      RPSWild_AniState = _unresolved_2.RPSWild_AniState;
      RPSWildResult = _unresolved_2.RPSWildResult;
    }, function (_unresolved_3) {
      SingleSlot = _unresolved_3.SingleSlot;
    }, function (_unresolved_4) {
      DefinitionGameConfigData = _unresolved_4.DefinitionGameConfigData;
    }, function (_unresolved_5) {
      RPSBattle = _unresolved_5.RPSBattle;
    }, function (_unresolved_6) {
      RPSResultTitle = _unresolved_6.RPSResultTitle;
    }, function (_unresolved_7) {
      RPSWildValue = _unresolved_7.RPSWildValue;
    }, function (_unresolved_8) {
      RPSCollection = _unresolved_8.RPSCollection;
    }, function (_unresolved_9) {
      AudioManager = _unresolved_9.AudioManager;
      SOUND_TYPE = _unresolved_9.SOUND_TYPE;
    }, function (_unresolved_10) {
      SoundList = _unresolved_10.SoundList;
      AudioSourceList = _unresolved_10.AudioSourceList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "af2ec+puXNLc5xzjuDT+n/n", "RPSWildSystem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        WILD_LIST
      } = _crd && DefinitionGameConfigData === void 0 ? (_reportPossibleCrUseOfDefinitionGameConfigData({
        error: Error()
      }), DefinitionGameConfigData) : DefinitionGameConfigData);

      _export("RPSWildSystem", RPSWildSystem = (_dec = ccclass('RPSWildSystem'), _dec2 = property({
        type: _crd && RPSBattle === void 0 ? (_reportPossibleCrUseOfRPSBattle({
          error: Error()
        }), RPSBattle) : RPSBattle,
        visible: true,
        displayName: 'wildBattle',
        tooltip: '猜拳撞擊動畫'
      }), _dec3 = property({
        type: _crd && RPSResultTitle === void 0 ? (_reportPossibleCrUseOfRPSResultTitle({
          error: Error()
        }), RPSResultTitle) : RPSResultTitle,
        visible: true,
        displayName: 'resultTitle',
        tooltip: '猜拳結果的動畫'
      }), _dec4 = property({
        type: _crd && RPSCollection === void 0 ? (_reportPossibleCrUseOfRPSCollection({
          error: Error()
        }), RPSCollection) : RPSCollection,
        visible: true,
        displayName: 'collection system',
        tooltip: '猜拳燈號顯示系統'
      }), _dec5 = property({
        type: Node,
        visible: true,
        displayName: 'WildCollectionNode',
        tooltip: 'WildCollectionNode'
      }), _dec6 = property({
        type: Node,
        visible: true,
        displayName: 'SingleSlotItemNode',
        tooltip: 'SingleSlotItemNode'
      }), _dec(_class = (_class2 = class RPSWildSystem extends Component {
        constructor(...args) {
          super(...args);

          //--非常危險的東西,只要企劃一改位置就要炸了..美術異想天開搞出這種東西
          _initializerDefineProperty(this, "_wildBattle", _descriptor, this);

          _initializerDefineProperty(this, "_resultTitle", _descriptor2, this);

          _initializerDefineProperty(this, "_collectionLightSystem", _descriptor3, this);

          _initializerDefineProperty(this, "_wildCollectionNode", _descriptor4, this);

          _initializerDefineProperty(this, "_singleSlotItemNode", _descriptor5, this);

          this._wild_left = null;
          this._wild_right = null;
          this._singleSlot_L = null;
          this._singleSlot_R = null;
          this._wildState = (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
            error: Error()
          }), RPSWildState) : RPSWildState).WILD_3;
          //----預設無猜拳狀態
          this._previousValue = void 0;
          this._thisRoundCampForLight = void 0;
          //--reSpin系列的開啟燈號的陣營
          this._isWorking = false;
          //--是否在wild系統當中
          this._resolvePromiseRollEnd = void 0;
          // promise resolve 函式
          this._guess_Round = 0;
          //--猜拳的回合數
          this._wildIconCount = 0;
          //--wild icon的數量(要2個才會啟動)
          this._wildSystemActivationCount = 0;
          //--wild系統啟動的次數(要2第二次才會改變wild state=0)
          this._wildWinCountThreshold = 0;
          //--(不含NG開啟那把)要開始計算勝敗場的臨界值(要wildSystemActivationCount>=2才會開始累計勝場計算)
          this._canNextWildRound = false;
          //--是否可以進入下一回合(猜拳是否可以開始計算勝場回合數)
          this._canRemoveAndCloseWild = false;
          //--是否可以關閉wild系統
          this._isRolling = false;
          //--是否在滾輪當中
          this._isCampDecided = false;
          //--是否已經決定陣營(尚未進行第一次決定陣營的旋轉)
          this._level = 0;
          this._changeIndex = {
            next: (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
              error: Error()
            }), RPSWild_AniState) : RPSWild_AniState).NUN,
            state: (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
              error: Error()
            }), RPSWildState) : RPSWildState).WILD_3
          };
          //--wild狀態的改變(目前只會有next的狀態)
          this._testWildTotalCount = 0;
          this._firstRolling = false;
          //--是否第一次滾輪(用來判斷是否要改變wild狀態)
          this._isForceStopped = false;
          //--0702新增
          this._isLastWildRound = false;
        }

        //--0731新增,是否是最後一輪wild(用來判斷是否要改變wild狀態)
        //private _firstOneAppear: boolean = false;//--是否第一次出現wild(用來判斷是否要改變wild狀態)
        get isLastWildRound() {
          return this._isLastWildRound;
        }

        get isCampDecided() {
          return this._isCampDecided;
        } //--wild3的狀態要移除


        get isRolling() {
          return this._isRolling;
        }

        get canRemoveAndCloseWild() {
          return this._canRemoveAndCloseWild;
        }

        get canNextWildRound() {
          return this._canNextWildRound;
        }

        get wildIconCount() {
          return this._wildIconCount;
        }

        get guess_Round() {
          return this._guess_Round;
        }

        get isWorking() {
          return this._isWorking;
        }

        get wildState() {
          return this._wildState;
        }

        set wildState(value) {
          this._wildState = value;
        }

        get wild_left() {
          return this._wild_left;
        }

        get wild_right() {
          return this._wild_right;
        }

        get singleSlotItemNode() {
          return this._singleSlotItemNode;
        }

        set isLastWildRound(value) {
          this._isLastWildRound = value;
        }

        set guess_Round(value) {
          this._guess_Round = value;
        }

        init() {
          this._wildBattle.init();

          this._resultTitle.init();

          this._collectionLightSystem.init();

          this._previousValue = -1;
          this._thisRoundCampForLight = -1; //new renderer.MaterialInstance()
        } //--每一新局都會resetWild


        resetWild() {
          var _this$_singleSlot_L, _this$_singleSlot_R;

          this._isLastWildRound = false;
          this._wild_left = null;
          this._wild_right = null;
          (_this$_singleSlot_L = this._singleSlot_L) == null || _this$_singleSlot_L.clean();
          this._singleSlot_L = null;
          (_this$_singleSlot_R = this._singleSlot_R) == null || _this$_singleSlot_R.clean();
          this._singleSlot_R = null;
          this._previousValue = -1;
          this._thisRoundCampForLight = -1;
          this._resultTitle.thisRoundCampForLight = -1;
          this._isWorking = false;
          this._wildIconCount = 0;
          this._isCampDecided = false;
          this._wildSystemActivationCount = 0;
          this._canNextWildRound = false;
          this._canRemoveAndCloseWild = false;
          this._isRolling = false; //this._firstOneAppear = false;

          this._level = 0;
          this._firstRolling = false;
          this._changeIndex = {
            next: (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
              error: Error()
            }), RPSWild_AniState) : RPSWild_AniState).NUN,
            state: (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
              error: Error()
            }), RPSWildState) : RPSWildState).WILD_3
          }; //this._guess_Round = 0;

          this._resolvePromiseRollEnd = undefined;

          this._collectionLightSystem.closeCollectionLightSystem();

          this._wildBattle.closeAllRPSItem();
        } //--20250731 新增


        hideCollectionLights() {
          this._collectionLightSystem.hideCollectionLights();
        } //--20250731 新增


        appearCollectionLights() {
          this._collectionLightSystem.appearCollectionLights();
        }
        /**
         * 滿足左右兩個陣營都獲得wild的條件下
         * 即進入wild系統
         * 否則就是聽牌沒有達成的狀態
         */


        addWildIconCount() {
          this._wildIconCount++;

          if (this._wildIconCount >= 2) {
            this._isWorking = true;
            this._wildState = (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
              error: Error()
            }), RPSWildState) : RPSWildState).WILD_0;
          }
        }

        startWildSystem() {
          this._wildSystemActivationCount++; //--開啟wild系統的時候,NG那把也會記入計算

          if (this._wildSystemActivationCount > this._wildWinCountThreshold) {
            //--Wildstate
            //RPSWildState.WILD_3-->要拔掉用working來判斷20250408
            //this._wildState = RPSWildState.WILD_0;

            /**
             * 是否可以開始計算勝場回合數
             * 否則會一直在wild0的狀態
             */
            this._canNextWildRound = true;
          }
        } //--兩邊都有wild卻是平手或是一勝一敗的狀態(沒有freeGame)


        checkWildWithoutReSpin() {
          if (this._wild_left && this._wild_right) {
            this._wildState = (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
              error: Error()
            }), RPSWildState) : RPSWildState).WILD_3;
            this._canRemoveAndCloseWild = true;
          }
        }

        closeWildSymbolItemForTransition() {
          this._singleSlotItemNode.active = false;
          this._wildState = (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
            error: Error()
          }), RPSWildState) : RPSWildState).WILD_3;
          this._canRemoveAndCloseWild = true;
        }

        closeWildSystemVisible() {
          this._wildCollectionNode.active = false;
          this._singleSlotItemNode.active = false;
          this.node.active = false;
        }

        openWildSystemVisible() {
          this._wildCollectionNode.active = true;
          this.node.active = true;
          this._singleSlotItemNode.active = true;
        }

        resetSingleSlot() {
          var _this$_singleSlot_L2, _this$_singleSlot_R2;

          (_this$_singleSlot_L2 = this._singleSlot_L) == null || _this$_singleSlot_L2.reset();
          (_this$_singleSlot_R2 = this._singleSlot_R) == null || _this$_singleSlot_R2.reset();
        } //---滾輪使用最大時間(需要外部介入停止)


        setSlotMaxnumTime() {
          var _this$_singleSlot_L3, _this$_singleSlot_R3;

          (_this$_singleSlot_L3 = this._singleSlot_L) == null || _this$_singleSlot_L3.useMaxnumRollingTime();
          (_this$_singleSlot_R3 = this._singleSlot_R) == null || _this$_singleSlot_R3.useMaxnumRollingTime();
        } //---滾輪使用預設時間


        useSlotDefaultTime() {
          var _this$_singleSlot_L4, _this$_singleSlot_R4;

          (_this$_singleSlot_L4 = this._singleSlot_L) == null || _this$_singleSlot_L4.useDefaultRollingTime();
          (_this$_singleSlot_R4 = this._singleSlot_R) == null || _this$_singleSlot_R4.useDefaultRollingTime();
        } //--設定滾輪時間


        setSlotTime(t) {
          var _this$_singleSlot_L5, _this$_singleSlot_R5;

          (_this$_singleSlot_L5 = this._singleSlot_L) == null || _this$_singleSlot_L5.changeRollingTotalTime(t);
          (_this$_singleSlot_R5 = this._singleSlot_R) == null || _this$_singleSlot_R5.changeRollingTotalTime(t);
        } //--第二輪猜拳開始會走這種停的模式


        async stopSlotRolling() {
          return new Promise(async (resolve, reject) => {
            this._isForceStopped = true;
            const promises = [this._singleSlot_L.stopRolling(), this._singleSlot_R.stopRolling()];

            try {
              await Promise.all(promises); //--如果(rollWild)resolve還活著的話,就釋放掉

              if (this._resolvePromiseRollEnd) {
                this._resolvePromiseRollEnd();

                this._resolvePromiseRollEnd = undefined;
              } //--釋放rollWild的resolve


              this._isRolling = false;
              await this.playWildAppearAni();
              this.changeDefaultTargetSkin(); //--change default ani(for skin)

              resolve(); //--自己的resolve
            } catch (e) {
              reject(e);
            }
          });
        }

        setWildIcon(wildIconComponent, wildData, slotInfo) {
          //this._isWorking = true;
          const targetNode = wildIconComponent.node.parent.children[0].getChildByName('Mask').children[0]; //--這個要想一下怎麼改..這樣很危險

          let singleSlotComponent = targetNode.getComponent(_crd && SingleSlot === void 0 ? (_reportPossibleCrUseOfSingleSlot({
            error: Error()
          }), SingleSlot) : SingleSlot);

          if (wildData.camp == 0) {
            this._wild_left = wildIconComponent;
            this._singleSlot_L = singleSlotComponent;
          } else if (wildData.camp == 1) {
            this._wild_right = wildIconComponent;
            this._singleSlot_R = singleSlotComponent;
          }

          singleSlotComponent.init(wildData.camp);
          singleSlotComponent.node.active = false;
          wildIconComponent.init();
          wildIconComponent.slotMachineIndexInfo = slotInfo;
          wildIconComponent.campData = wildData.camp;
          wildIconComponent.setFrontSpineSkin();
          wildIconComponent.changeSkin(this.getWildRPSData(wildData.wild));
        } //--在wild1 wild2的時候,要重置icon的資料(主要針對slotMachineIndexInfo)
        //--可以刪了..外面做掉了


        reSetWildIconData() {}

        playWildFirstAppearAni(camp) {
          let playWildAniData;

          if (camp == 0) {
            playWildAniData = this._wild_left.getAniNameByWildRoundState((_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
              error: Error()
            }), RPSWildState) : RPSWildState).WILD_0, (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
              error: Error()
            }), RPSWild_AniState) : RPSWild_AniState).APPEAR);

            this._wild_left.playAni(playWildAniData);
          } else if (camp == 1) {
            playWildAniData = this._wild_right.getAniNameByWildRoundState((_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
              error: Error()
            }), RPSWildState) : RPSWildState).WILD_0, (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
              error: Error()
            }), RPSWild_AniState) : RPSWild_AniState).APPEAR);

            this._wild_right.playAni(playWildAniData);
          }
        } //--沒有兩個wild的狀態下,進行的一般中線表演流程


        playWildConnectAniWithoutDoubleWild() {
          let playWildAniData;
          let target;

          if (this._wild_left) {
            target = this._wild_left;
            playWildAniData = this._wild_left.getAniNameByWildRoundState((_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
              error: Error()
            }), RPSWildState) : RPSWildState).WILD_0, (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
              error: Error()
            }), RPSWild_AniState) : RPSWild_AniState).CONNECT);
          } else if (this._wild_right) {
            target = this._wild_right;
            playWildAniData = this._wild_right.getAniNameByWildRoundState((_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
              error: Error()
            }), RPSWildState) : RPSWildState).WILD_0, (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
              error: Error()
            }), RPSWild_AniState) : RPSWild_AniState).CONNECT);
          }

          if (target) {
            target.playAni(playWildAniData);
          }
        } //--沒有兩個wild的狀態下,進行的一般中線表演流程


        closeWildAniNodeWithoutDoubleWild() {
          let target;

          if (this._wild_left) {
            target = this._wild_left;
          } else if (this._wild_right) {
            target = this._wild_right;
          }

          if (target) {
            target.stopAni();
            target.node.active = false;
          }
        } //--沒有兩個wild的狀態下,進行的一般中線表演流程


        openWildAniNodeWithoutDoubleWild() {
          let target;

          if (this._wild_left) {
            target = this._wild_left;
          } else if (this._wild_right) {
            target = this._wild_right;
          }

          if (target) {
            target.node.active = true;
          }
        }

        changeDefaultTargetSkin() {
          var _this$_wild_left, _this$_wild_right;

          //--change default ani(for skin)
          let startIndexState = (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
            error: Error()
          }), RPSWildState) : RPSWildState).WILD_1;

          if (this._isCampDecided) {
            if (this._wildState > (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
              error: Error()
            }), RPSWildState) : RPSWildState).WILD_1) {
              startIndexState = this._wildState;
            }
          }

          const key = this._wild_left.getAniNameByWildRoundState(startIndexState, (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).CONNECT);

          (_this$_wild_left = this._wild_left) == null || _this$_wild_left.changeDefaultTarget(key);
          (_this$_wild_right = this._wild_right) == null || _this$_wild_right.changeDefaultTarget(key);
        }

        async playConnectAni(wildState) {
          let state = wildState ? wildState : this._wildState;

          const playWildAniData_L = this._wild_left.getAniNameByWildRoundState(state, (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).CONNECT);

          const playWildAniData_R = this._wild_right.getAniNameByWildRoundState(state, (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).CONNECT);

          const promises = [this._wild_left.playAniInPromise(playWildAniData_L), this._wild_right.playAniInPromise(playWildAniData_R)];
          await Promise.all(promises);
        }

        async playAniInPromiseForFirstRound(wildState) {
          const playWildAniData_L = this._wild_left.getAniNameByWildRoundState(wildState, (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).CONNECT);

          const playWildAniData_R = this._wild_right.getAniNameByWildRoundState(wildState, (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).CONNECT);

          const promises = [this._wild_left.playAniInPromiseForFirstRound(playWildAniData_L), this._wild_right.playAniInPromiseForFirstRound(playWildAniData_R)];
          await Promise.all(promises);
        }

        async showAppearWithoutCampDecided() {
          const playWildAniData_L = this._wild_left.getAniNameByWildRoundState((_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
            error: Error()
          }), RPSWildState) : RPSWildState).WILD_1, (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).APPEAR);

          const playWildAniData_R = this._wild_right.getAniNameByWildRoundState((_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
            error: Error()
          }), RPSWildState) : RPSWildState).WILD_1, (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).APPEAR);

          const promises = [this._wild_left.playAniInPromise(playWildAniData_L), this._wild_right.playAniInPromise(playWildAniData_R)];
          await Promise.all(promises);
        } //--做完換skin(狀態變更)


        playWildAppearAni() {
          return new Promise(async (resolve, reject) => {
            this._singleSlot_L.node.active = false;
            this._singleSlot_R.node.active = false;
            const leftSkin = this.getWildRPSData(this._wild_left.slotMachineIndexInfo.iconID);
            const rightSkin = this.getWildRPSData(this._wild_right.slotMachineIndexInfo.iconID);

            this._wild_left.changeSkin(leftSkin);

            this._wild_right.changeSkin(rightSkin);

            const playWildAniData_L = this._wild_left.getAniNameByWildRoundState(this._wildState, (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
              error: Error()
            }), RPSWild_AniState) : RPSWild_AniState).APPEAR);

            const playWildAniData_R = this._wild_right.getAniNameByWildRoundState(this._wildState, (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
              error: Error()
            }), RPSWild_AniState) : RPSWild_AniState).APPEAR);

            const promises = [this._wild_left.playAniInPromise(playWildAniData_L), this._wild_right.playAniInPromise(playWildAniData_R)];

            try {
              await Promise.all(promises); //-2 wild2_appear wild2_appear

              resolve();
            } catch (e) {
              reject(e);
            }
          });
        }

        forcePlayConnectAniForRPSStart() {
          //--強制播放連線動畫(拳頭)
          return new Promise(async (resolve, reject) => {
            if (this._wild_left && this._wild_right) {
              this._singleSlot_L.node.active = false;
              this._singleSlot_R.node.active = false;

              try {
                await this.showAppearWithoutCampDecided(); //--0708只留這個
                //await this.playAniInPromiseForFirstRound(RPSWildState.WILD_1);
                //this._singleSlot_L.node.active = true;
                //this._singleSlot_R.node.active = true;

                resolve();
              } catch (e) {
                //this._singleSlot_L.node.active = true;
                //this._singleSlot_R.node.active = true;
                reject(e);
              }
            }
          });
        } //--0701強call (第二輪後的猜拳_isCampDecided=true)


        checkWildIsCampDecidedAndPlay() {
          if (this._isCampDecided && this._wild_left && this._wild_right) {
            this.playConnectAni();
          }
        }

        setResultTitle(resultRound) {
          this._resultTitle.showResultTitle(resultRound);
        } //--這邊可能會修改..


        changeWildOutFrame(guessRoundData) {
          //--如果要呈現輸贏LV的進退.要改成送結果近來比對
          //console.log('check_cahngeWildOutFrame', this._wildState);
          return new Promise(async (resolve, reject) => {
            let promises;

            if (this._changeIndex.next != (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
              error: Error()
            }), RPSWild_AniState) : RPSWild_AniState).NUN) {
              //--第一次放大框的猜拳要播的音效
              if (this._changeIndex.next == (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
                error: Error()
              }), RPSWild_AniState) : RPSWild_AniState).NEXT && this._changeIndex.state == (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
                error: Error()
              }), RPSWildState) : RPSWildState).WILD_0) {
                (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                  error: Error()
                }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                  error: Error()
                }), SoundList) : SoundList).FgIconDebut, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
                  error: Error()
                }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                  error: Error()
                }), AudioSourceList) : AudioSourceList).BasicAS);
              }

              if (this._changeIndex.next == (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
                error: Error()
              }), RPSWild_AniState) : RPSWild_AniState).NEXT && this._changeIndex.state == (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
                error: Error()
              }), RPSWildState) : RPSWildState).WILD_1) {
                (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                  error: Error()
                }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                  error: Error()
                }), SoundList) : SoundList).FgIconLock, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
                  error: Error()
                }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                  error: Error()
                }), AudioSourceList) : AudioSourceList).BtnAS);
              } //--next=1


              promises = [this._wild_left.changeWildOutFrame(this._changeIndex.state, this._changeIndex.next), this._wild_right.changeWildOutFrame(this._changeIndex.state, this._changeIndex.next)];

              try {
                this._singleSlot_L.node.active = false;
                this._singleSlot_R.node.active = false;
                await Promise.all(promises);
                this._changeIndex = {
                  next: (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
                    error: Error()
                  }), RPSWild_AniState) : RPSWild_AniState).NUN,
                  state: this._wildState
                };
                resolve();
              } catch (e) {
                this._changeIndex = {
                  next: (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
                    error: Error()
                  }), RPSWild_AniState) : RPSWild_AniState).NUN,
                  state: this._wildState
                };
                reject(e);
              }
            } else {
              this._changeIndex = {
                next: (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
                  error: Error()
                }), RPSWild_AniState) : RPSWild_AniState).NUN,
                state: this._wildState
              };
              resolve();
            }
          });
        }

        async checkRoundAndStartRollWild() {
          return new Promise(async (resolve, reject) => {
            if (this._wildState == (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
              error: Error()
            }), RPSWildState) : RPSWildState).WILD_0) {
              //this._wildBattle.setRoundData(this._guess_Round);
              let roundData = {
                round: this._wildState,
                targetTokenIds: null
              };
              await this.rollWild(roundData);
              resolve();
            } else {
              await this.rollWild();
              resolve();
            }
          });
        } //--就負責轉而以


        rollWild(guessRoundData) {
          this._isForceStopped = false;
          this._testWildTotalCount++;
          this._isRolling = true; //---s=起始,e=結束(左邊軸的轉輪設定)

          let slotInfo_L = {
            s: 0,
            e: 0
          }; //--s=起始,e=結束(右邊軸的轉輪設定)

          let slotInfo_R = {
            s: 0,
            e: 0
          }; //--滾動播放的ani key

          let playWildAniData_Left;
          let playWildAniData_Right; //--滾動結束後battle的播放icon資料

          let targetRollInfo_L_forBattle;
          let targetRollInfo_R_forBattle;
          /*
          console.log(
              'check_wildState_rollWild\n',
              'this._wildState:', this._wildState, '\n',
              'Left_iconID:', this._wild_left.slotMachineIndexInfo.iconID, '\n',
              'Right_iconID:', this._wild_right.slotMachineIndexInfo.iconID, '\n',
              'guessRoundData:', guessRoundData
          );*/

          if (this._wildState == (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
            error: Error()
          }), RPSWildState) : RPSWildState).WILD_0) {
            //--將icon切換為rolling狀態+設定轉輪的資料
            //--左邊軸
            if (!this._firstRolling) {
              slotInfo_L.s = this.getRandomUniqueItem(WILD_LIST, this._previousValue); //--第一次亂數產生 

              slotInfo_R.s = this.getRandomUniqueItem(WILD_LIST, this._previousValue);
              this._firstRolling = true;
            } else {
              slotInfo_L.s = null;
              slotInfo_R.s = null;
            }

            slotInfo_L.e = this._wild_left.slotMachineIndexInfo.iconID;
            playWildAniData_Left = this._wild_left.getAniNameByWildRoundState(guessRoundData.round, (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
              error: Error()
            }), RPSWild_AniState) : RPSWild_AniState).ROLL);
            targetRollInfo_L_forBattle = this._wild_left.slotMachineIndexInfo; //--右邊軸

            slotInfo_R.e = this._wild_right.slotMachineIndexInfo.iconID;
            playWildAniData_Right = this._wild_right.getAniNameByWildRoundState(guessRoundData.round, (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
              error: Error()
            }), RPSWild_AniState) : RPSWild_AniState).ROLL);
            targetRollInfo_R_forBattle = this._wild_right.slotMachineIndexInfo;
          } else if (this._wildState >= (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
            error: Error()
          }), RPSWildState) : RPSWildState).WILD_1) {
            //-(贏了一次就直接到L2的外框)
            //--<左邊軸>
            slotInfo_L.s = null; //--使用上一個結束的圖片

            slotInfo_L.e = this._wild_left.slotMachineIndexInfo.iconID;
            playWildAniData_Left = this._wild_left.getAniNameByWildRoundState(this._wildState, (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
              error: Error()
            }), RPSWild_AniState) : RPSWild_AniState).ROLL);
            targetRollInfo_L_forBattle = this._wild_left.slotMachineIndexInfo; //--<右邊軸>

            slotInfo_R.s = null; //--使用上一個結束的圖片

            slotInfo_R.e = this._wild_right.slotMachineIndexInfo.iconID;
            playWildAniData_Right = this._wild_right.getAniNameByWildRoundState(this._wildState, (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
              error: Error()
            }), RPSWild_AniState) : RPSWild_AniState).ROLL);
            targetRollInfo_R_forBattle = this._wild_right.slotMachineIndexInfo;
          } //--左邊滾動狀態的ani


          this._wild_left.playAni(playWildAniData_Left); //--設定左邊猜拳


          this._wildBattle.setResultForGuess(targetRollInfo_L_forBattle.reelIndex, targetRollInfo_L_forBattle.iconIndex, targetRollInfo_L_forBattle.iconID); //--右邊滾動狀態的ani


          this._wild_right.playAni(playWildAniData_Right); //--設定右邊猜拳


          this._wildBattle.setResultForGuess(targetRollInfo_R_forBattle.reelIndex, targetRollInfo_R_forBattle.iconIndex, targetRollInfo_R_forBattle.iconID);

          return new Promise(async (resolve, reject) => {
            this._resolvePromiseRollEnd = resolve;
            let promises = [this._singleSlot_L.runPromiseRolling(slotInfo_L.e, slotInfo_L.s), this._singleSlot_R.runPromiseRolling(slotInfo_R.e, slotInfo_R.s)];
            this._singleSlot_L.node.active = true;
            this._singleSlot_R.node.active = true;
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).FgIconSpin, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
              error: Error()
            }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
              error: Error()
            }), AudioSourceList) : AudioSourceList).BtnAS);

            try {
              await Promise.all(promises); //--沒有強制停輪和resolve還活著的情況下才會執行

              if (!this._isForceStopped && this._resolvePromiseRollEnd) {
                //--接上appear+connect
                //--第一輪的處理要額外做(此時_isCampDecided=false,尚未決定陣營)
                //-showAppearWithoutCampDecided
                if (!this._isCampDecided) {
                  await this.forcePlayConnectAniForRPSStart();
                }

                this._resolvePromiseRollEnd();

                this._resolvePromiseRollEnd = undefined;
              }
            } catch (e) {
              reject(e);
            }
          });
        }

        getWildIconAniType(value) {
          let targetWildIcon = this._wild_left;

          if (value) {
            targetWildIcon = value == "L" ? targetWildIcon : this._wild_right;
          } //console.log('getWildIconAniType', this._wildState);


          return targetWildIcon.getAniNameByWildRoundState(this._wildState, (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).BATTLE);
        }

        async guessRPS(battleData) {
          //---0708取消

          /*
          this._wild_left.playAni(battleData);//-只有播放框的狀態(拳頭被拿掉)
          this._wild_right.playAni(battleData);//-只有播放框的狀態(拳頭被拿掉)
          this._singleSlot_L.node.active = false;//--轉軸
          this._singleSlot_R.node.active = false;
          await this._wildBattle.playRPSMotion();//--出拳
          this._singleSlot_L.node.active = true;
          this._singleSlot_R.node.active = true;
          */
          const resultRound = this.getResultForRound();
          const firstCampForLight = this.getThisRoundCampForLight(resultRound);

          if (this._thisRoundCampForLight == -1) {
            this._thisRoundCampForLight = firstCampForLight;
            this._resultTitle.thisRoundCampForLight = firstCampForLight; //--把開啟陣營的資料寫進去
          }

          await this._resultTitle.showResultTitle(resultRound); //--每次都來猜

          if (this._thisRoundCampForLight != -1) {
            this.checkOpenCollectionLightSystem(firstCampForLight);
          } //--滿足累加條件後才開始計算蒐集狀態


          if (this._canNextWildRound) {
            //--接勝敗結果+亮燈顯示
            const levelValue = this.getThisRoundLevelValue(resultRound);
            this.writeEveryRoundForLevel(levelValue);
            await this._collectionLightSystem.setLevel(levelValue);
          }

          if (this._resolvePromiseRollEnd) {
            this._resolvePromiseRollEnd();

            this._resolvePromiseRollEnd = undefined;
          }
        }
        /**
         * 20250408-改變wildState都在這裡改變
         * 有勝負且_canNextWildRound=true的狀態下才會判斷
         * (平手不改變狀態)
            ani wild0=第一次出現
            ani wild0 to wild1--第一次猜拳(決定陣營)
            決定陣營的那一把如果平手的話-->退回wild1 to wild0
            直到分出勝負的那一次(決定陣營)-->開啟wild0 to wild1(一旦決定陣營後就沒有退回了)
            開啟wild1之後的下一把就進入wild2
         */

        /**
         * //--0=平手,1=左邊贏,2=右邊贏,3=重新旋轉
         * @param value 猜拳輸贏結果-0=平手,1=左邊贏,2=右邊贏,3=重新旋轉(目前沒送)
         */


        checkWildStateToNextRound() {
          //--平手狀態不改變
          if (!this._isCampDecided) {
            this._wildState = (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
              error: Error()
            }), RPSWildState) : RPSWildState).WILD_0; //this._previousWildState = 0;

            this._level = 0;
          } else {}
          /*
          console.log(
              'checkWildStateToNextRound--' + this._wildState + '\n' +
              '_canNextWildRound--' + this._canNextWildRound + '\n' +
              '_isCampDecided--' + this._isCampDecided + '\n' +
              '_testWildTotalCount--' + this._testWildTotalCount);
           console.log('breakOut');
          */

        } //-NG一進來的時候


        setOpenWildForBegin() {
          this._changeIndex = {
            next: (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
              error: Error()
            }), RPSWild_AniState) : RPSWild_AniState).NEXT,
            state: this._wildState
          };
        }
        /**
         * 開啟燈號系統只會成立判斷一次,即為NG開啟第一次猜拳的時候
         * PS此時的計數器要更新一次,因為計數器的更新都是在每一輪開始前(checkNextRound)
         * 由於NG啟動的猜拳他並不會進入checkNextRound所以這邊要自己去累加
         * @param firstCampForLight 猜拳結果
         */


        checkOpenCollectionLightSystem(firstCampForLight) {
          if (firstCampForLight != -1 && !this._isCampDecided) {
            this._isCampDecided = true;
            if (this._wild_left) this._wild_left.isCampDecided = true;
            if (this._wild_right) this._wild_right.isCampDecided = true;

            this._collectionLightSystem.openCollectionLightSystem(firstCampForLight);

            this.checkWildStateToNextRound();
            /**
             * startWildSystem是checkNextRound(每局開始)才會去call
             * NG開啟的猜拳他並不會進入checkNextRound
             * 所以這邊要自己去累加
             */

            this.startWildSystem();
            this._testWildTotalCount++;
          }
        } //--猜拳換框都會在call完guessRPS之後來決定是否換框


        writeEveryRoundForLevel(levelValue) {
          const isCanUpgrade = this.isCanUpgradeWildState(levelValue);
          let changeIndex = (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).NUN;

          if (isCanUpgrade.bol) {
            changeIndex = (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
              error: Error()
            }), RPSWild_AniState) : RPSWild_AniState).NEXT;
          }

          this._changeIndex = {
            next: changeIndex,
            state: isCanUpgrade.state
          };
        }

        isCanUpgradeWildState(levelValue) {
          if (levelValue == 0) return {
            bol: false,
            state: (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
              error: Error()
            }), RPSWildState) : RPSWildState).WILD_3
          }; //--平手不處理

          let previousLevel = this._level;
          this._level += levelValue;

          if (this._level < 1) {
            this._level = 0; //--這種情況..有點不太可能會發生
          } //--level正數表示升級,負數表示降級(不處理平手狀態)


          if (previousLevel < this._level) {
            if (!this._isCampDecided || !this._canNextWildRound) {
              this._wildState = (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
                error: Error()
              }), RPSWildState) : RPSWildState).WILD_0; //--0 to 1

              this._level = 0;
              return {
                bol: false,
                state: this._wildState
              };
            } else {
              if (this._wildState == (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
                error: Error()
              }), RPSWildState) : RPSWildState).WILD_0) {
                this._wildState = (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
                  error: Error()
                }), RPSWildState) : RPSWildState).WILD_2; //1 to 2

                return {
                  bol: true,
                  state: (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
                    error: Error()
                  }), RPSWildState) : RPSWildState).WILD_1
                };
              } else {
                return {
                  bol: true,
                  state: (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
                    error: Error()
                  }), RPSWildState) : RPSWildState).WILD_2
                };
              } //--因為2之後的狀態都是一樣的,所以不用寫

            }
          } else {
            return {
              bol: false,
              state: (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
                error: Error()
              }), RPSWildState) : RPSWildState).WILD_3
            };
          }
        }
        /**
         * 
         * @param resultFirstGuess 猜拳結果
         * @returns 本系列的燈號陣營(wildState=0決定)
         */


        getThisRoundCampForLight(resultFirstGuess) {
          //--0=平手,1=左邊贏,2=右邊贏,3=重新旋轉
          if (resultFirstGuess != 0 && resultFirstGuess != 3) {
            return resultFirstGuess == 1 ? 1 : 2;
          }

          return -1;
        }
        /**
         * PS-如果與開啟陣營相同的話,則為1,否則為-1
         * (目前沒做回朔燈號的機制..企劃書沒寫?,但美術有做)
         * @param resultFirstGuess 猜拳結果
         * @returns 要升級(亮燈)累加的分數
         */


        getThisRoundLevelValue(resultFirstGuess) {
          if (resultFirstGuess == 1 || resultFirstGuess == 2) {
            return resultFirstGuess == this._thisRoundCampForLight ? 1 : -1;
          } else if (resultFirstGuess == 0) {
            return 0; //--平手
          }

          return 0; //---例外狀況(反正RPSCollection那邊拿到0就會return)
        }

        getResultForRound() {
          let leftResult = this._wild_left.slotMachineIndexInfo.iconID;
          let rightResult = this._wild_right.slotMachineIndexInfo.iconID;

          if (leftResult === rightResult) {
            return 0; //--平手
          }

          if (leftResult === (_crd && RPSWildValue === void 0 ? (_reportPossibleCrUseOfRPSWildValue({
            error: Error()
          }), RPSWildValue) : RPSWildValue).S && rightResult === (_crd && RPSWildValue === void 0 ? (_reportPossibleCrUseOfRPSWildValue({
            error: Error()
          }), RPSWildValue) : RPSWildValue).P || leftResult === (_crd && RPSWildValue === void 0 ? (_reportPossibleCrUseOfRPSWildValue({
            error: Error()
          }), RPSWildValue) : RPSWildValue).R && rightResult === (_crd && RPSWildValue === void 0 ? (_reportPossibleCrUseOfRPSWildValue({
            error: Error()
          }), RPSWildValue) : RPSWildValue).S || leftResult === (_crd && RPSWildValue === void 0 ? (_reportPossibleCrUseOfRPSWildValue({
            error: Error()
          }), RPSWildValue) : RPSWildValue).P && rightResult === (_crd && RPSWildValue === void 0 ? (_reportPossibleCrUseOfRPSWildValue({
            error: Error()
          }), RPSWildValue) : RPSWildValue).R) {
            return 1; //--左邊贏
          } else {
            return 2; //--右邊贏
          }
        }

        getWildRPSData(iconId) {
          if (iconId == 6) {
            return (_crd && RPSWildResult === void 0 ? (_reportPossibleCrUseOfRPSWildResult({
              error: Error()
            }), RPSWildResult) : RPSWildResult).S; //--剪刀     
          } else if (iconId == 7) {
            return (_crd && RPSWildResult === void 0 ? (_reportPossibleCrUseOfRPSWildResult({
              error: Error()
            }), RPSWildResult) : RPSWildResult).R; //--石頭 
          } else if (iconId == 8) {
            return (_crd && RPSWildResult === void 0 ? (_reportPossibleCrUseOfRPSWildResult({
              error: Error()
            }), RPSWildResult) : RPSWildResult).P; //--布
          }
        }

        getRandomUniqueItem(array, previousItem = null) {
          if (array.length === 0) {
            return undefined; // 如果陣列為空，則返回 undefined
          }

          let randomIndex;
          let randomItem;

          do {
            randomIndex = Math.floor(Math.random() * array.length);
            randomItem = array[randomIndex];
          } while (previousItem !== null && randomItem === previousItem);

          return randomItem;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_wildBattle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_resultTitle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_collectionLightSystem", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_wildCollectionNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_singleSlotItemNode", [_dec6], {
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
//# sourceMappingURL=7d4f9c8d81f5429b57cdfd274551ccf4453ff6c4.js.map