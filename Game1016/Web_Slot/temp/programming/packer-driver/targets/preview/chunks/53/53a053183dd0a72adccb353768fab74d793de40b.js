System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, Node, tween, UIOpacity, UniReelView, SymbolNumber, AnimationController, AnimationStateType, GameUtilsTools, GameState, Direction, DefinitionGameConfigData, Call_Function_Type, GlobalAccessReader, GameGlobalKeys, SoundList, AudioSourceList, AudioManager, NewFlashModeEnum, SOUND_TYPE, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, WILD_LIST, SCATTER_LIST, DEBUG_TITLE, ccclass, property, UniReelView1016;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUniReelView(extras) {
    _reporterNs.report("UniReelView", "./ReferencePathForUniSlot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniReel(extras) {
    _reporterNs.report("UniReel1016", "./UniReel1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolNumber(extras) {
    _reporterNs.report("SymbolNumber", "./SymbolNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIDIAgentFactory(extras) {
    _reporterNs.report("IDIAgentFactory", "./DIFactory/IDIAgentFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIWildMovementData(extras) {
    _reporterNs.report("IWildMovementData", "./ISlotDefinitionData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIBasicMovementData(extras) {
    _reporterNs.report("IBasicMovementData", "./ISlotDefinitionData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISortReelLayerInfo(extras) {
    _reporterNs.report("ISortReelLayerInfo", "./ISlotDefinitionData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIWildMovementDataNew(extras) {
    _reporterNs.report("IWildMovementDataNew", "./ISlotDefinitionData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReelInfo(extras) {
    _reporterNs.report("IReelInfo", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchWildGroupResult(extras) {
    _reporterNs.report("IMatchWildGroupResult", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayAniData(extras) {
    _reporterNs.report("IPlayAniData", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationController(extras) {
    _reporterNs.report("AnimationController", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationStateType(extras) {
    _reporterNs.report("AnimationStateType", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtilsTools(extras) {
    _reporterNs.report("GameUtilsTools", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDirection(extras) {
    _reporterNs.report("Direction", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDefinitionGameConfigData(extras) {
    _reporterNs.report("DefinitionGameConfigData", "../DefinitionGameData1016/GameConfigInstance", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMediatorColleague(extras) {
    _reporterNs.report("IMediatorColleague", "./IMediator/ISlotCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISlotCommand(extras) {
    _reporterNs.report("ISlotCommand", "./IMediator/ISlotCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISlotMediator(extras) {
    _reporterNs.report("ISlotMediator", "./IMediator/ISlotCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCall_Function_Type(extras) {
    _reporterNs.report("Call_Function_Type", "../AniMediator1016/CrossSystemFun/DefinitionFunctionType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalAccessReader(extras) {
    _reporterNs.report("GlobalAccessReader", "../DefinitionGameData1016/AccessDefs/GlobalAccess", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameGlobalKeys(extras) {
    _reporterNs.report("GameGlobalKeys", "../DefinitionGameData1016/GameGlobalData1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../DefinitionGameData1016/SoundList1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioSourceList(extras) {
    _reporterNs.report("AudioSourceList", "../DefinitionGameData1016/SoundList1016", _context.meta, extras);
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

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
      Node = _cc.Node;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      UniReelView = _unresolved_2.UniReelView;
    }, function (_unresolved_3) {
      SymbolNumber = _unresolved_3.SymbolNumber;
    }, function (_unresolved_4) {
      AnimationController = _unresolved_4.AnimationController;
      AnimationStateType = _unresolved_4.AnimationStateType;
      GameUtilsTools = _unresolved_4.GameUtilsTools;
      GameState = _unresolved_4.GameState;
      Direction = _unresolved_4.Direction;
    }, function (_unresolved_5) {
      DefinitionGameConfigData = _unresolved_5.DefinitionGameConfigData;
    }, function (_unresolved_6) {
      Call_Function_Type = _unresolved_6.Call_Function_Type;
    }, function (_unresolved_7) {
      GlobalAccessReader = _unresolved_7.GlobalAccessReader;
    }, function (_unresolved_8) {
      GameGlobalKeys = _unresolved_8.GameGlobalKeys;
    }, function (_unresolved_9) {
      SoundList = _unresolved_9.SoundList;
      AudioSourceList = _unresolved_9.AudioSourceList;
    }, function (_unresolved_10) {
      AudioManager = _unresolved_10.AudioManager;
      NewFlashModeEnum = _unresolved_10.NewFlashModeEnum;
      SOUND_TYPE = _unresolved_10.SOUND_TYPE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "926c5aTy3VHALs36NL1rdvo", "UniReelView1016", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'game', 'Game', 'Node', 'tween', 'UIOpacity', 'Vec3']); //import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
      //import { NewFlashModeEnum } from 'db://assets/GenericUI/Scripts/MainUI';


      ({
        WILD_LIST,
        SCATTER_LIST
      } = _crd && DefinitionGameConfigData === void 0 ? (_reportPossibleCrUseOfDefinitionGameConfigData({
        error: Error()
      }), DefinitionGameConfigData) : DefinitionGameConfigData);
      DEBUG_TITLE = 'UniReelView1016';
      ({
        ccclass,
        property
      } = _decorator);

      _export("UniReelView1016", UniReelView1016 = (_dec = ccclass('UniReelView1016'), _dec2 = property({
        type: _crd && AnimationController === void 0 ? (_reportPossibleCrUseOfAnimationController({
          error: Error()
        }), AnimationController) : AnimationController
      }), _dec3 = property({
        type: CCInteger,
        tooltip: '隨機資料長度，數值越大滾輪間隔停止越久'
      }), _dec4 = property({
        type: CCInteger,
        tooltip: '聽牌的隨機資料長度，數值越大滾輪間隔停止越久'
      }), _dec5 = property({
        type: Node,
        tooltip: '78企劃無理的需求需要的',
        visible: true
      }), _dec(_class = (_class2 = class UniReelView1016 extends (_crd && UniReelView === void 0 ? (_reportPossibleCrUseOfUniReelView({
        error: Error()
      }), UniReelView) : UniReelView) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "readyHandList", _descriptor, this);

          _initializerDefineProperty(this, "spaceLength", _descriptor2, this);

          _initializerDefineProperty(this, "readyHandLength", _descriptor3, this);

          _initializerDefineProperty(this, "_wildFakeLayerContainer", _descriptor4, this);

          this._wildGroupResultData = [];
          this._isFinalResultRound = false;
          this._countStopReel = 0;
          // 每個 reelID 的 Promise 控制器
          this._waiters = new Map();
          this._mediator = null;
          //--本輪最大補牌數量
          this._currentRoundTakeCardsInfo = null;
          this._isSetRoundTakeCards = false;
          this._roundReadyStatus = [];
          this._roundMaxReadyHandCount = 0;
          this._doResetReadyHand = false;
          //--for debugTest--
          this._testReelStopTime = 0;
          this.oneReelRollEndCallBack = null;
          this.oneReelFinalStartCallBack = null;
          this._roundWaitShowReadyHand = new Set();

          //--每一軸的最後round要開始演了
          this.onStartRollInFinal = reelID => {
            var _this$oneReelFinalSta;

            (_this$oneReelFinalSta = this.oneReelFinalStartCallBack) == null || _this$oneReelFinalSta.call(this, reelID);
          };
        }

        init() {
          super.init(); //--每一軸的最後一次表演開始

          this._roundReadyStatus = Array.from({
            length: this.reelList.length
          }, () => false);
          this._wildGroupResultData = [];
          this.registerReelEventCallbacks();
          this.resetWaiters();
          this.resetReadyAniList();
          this.setFakeWildLayerContainer(); //console.log('hideReadyHandList:', this.readyHandList, this.readyHandList[2].node.parent);
        } //--20251116-臨時添加需求


        setFakeWildLayerContainer() {
          for (var i = 0; i < this.reelList.length; i++) {
            var reel = this.reelList[i];
            reel.fakeWildLayerContainer = this._wildFakeLayerContainer;
          }
        }

        registerReelEventCallbacks() {
          this.setReelDataCallback = this.setReelData; //---改變icon資料的地方

          this.showReadyHandCallback = this.showReadyHand;
          this.hideReadyHandCallback = this.hideReadyHand;

          for (var i = 0; i < this.reelList.length; i++) {
            var reel = this.reelList[i];
            reel.oneReelFinalStartCallBack = this.onStartRollInFinal;
          }
        } //--在init完之後馬上接著做要在initIconSymbol之前做..不然他就會透過initIconSymbol產生出首盤盤面


        injectAniService(proxyOwner) {
          for (var reel of this.reelList) {
            reel.injectAniService(proxyOwner);
          }
        } //--20250805新增初始盤面資料


        initIconSymbol(card2ds) {
          for (var _reelID = 0; _reelID < this.reelList.length; _reelID++) {
            var reel = this.reelList[_reelID];
            reel.setInitIconData(card2ds[_reelID]);
          }
        }

        registerMediator(mediator) {
          this._mediator = mediator;
        } //===================interface<IMediatorColleague>===================


        onMediatorCommand(cmd) {// Handle commands from the mediator 
          //這邊直接透過crossProcess 反向呼叫showAniController的方法

          /*
          switch (cmd.type) {
            }*/
        }

        testFunction() {} //--情非得已的修改20251107-為了要在RS當中實現第0軸聽牌(stop再去呈現第0軸太短暫了)


        resetReelViewData() {
          this.reset();
        } //========================override 父類別方法========================


        startRoll(reelIDs) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (reelIDs === void 0) {
              reelIDs = _this._defaultRollingReelIDs;
            }

            //this.reset();
            _this._isSetRoundTakeCards = false;
            _this._currentRollingReelIDs = reelIDs;
            var timeList = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
              error: Error()
            }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList);
            var startTime = timeList.get(cfg => {
              var _cfg$roll;

              return (_cfg$roll = cfg.roll) == null ? void 0 : _cfg$roll.staggerRoll;
            });

            for (var index = 0; index < _this._currentRollingReelIDs.length; index++) {
              var _reelID2 = _this._currentRollingReelIDs[index];

              _this.reelList[_reelID2].startRoll();

              _this.onStartRollReadyHand(_reelID2); //--特殊條件下啟動聽牌效果軸(要Stop資料才會進來)


              if (startTime > 0 && !_this.isFastModeCallback()) {
                yield (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
                  error: Error()
                }), GameUtilsTools) : GameUtilsTools).DeferByTweenPromise(startTime);
              }
            }
          })();
        }

        updateIcons(dt) {
          for (var i = 0; i < this.reelList.length; i++) {
            this.reelList[i].updateIcons(dt);
          }
        }
        /**
         * 只是呼叫滾輪暫停，並不是直接停下
         */


        stopRoll(resultData, stopType) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            _this2._isFinalResultRound = true; // --標記為最終結果回合

            _this2._currentRoundTakeCardsInfo = _this2.setRoundTakeCards();
            var promiseList = []; //--first do setCards 

            for (var index = 0; index < _this2.currentRollingReelIDs.length; index++) {
              var _reelID3 = _this2.currentRollingReelIDs[index];
              var reel = _this2.reelList[_reelID3];

              if (!reel.isLock) {
                _this2.setReelData(_reelID3, resultData[_reelID3]);
              }
            }

            _this2._isSetRoundTakeCards = true; //--second do stopOneReel

            for (var _index = 0; _index < _this2.currentRollingReelIDs.length; _index++) {
              var _reelID4 = _this2.currentRollingReelIDs[_index];
              promiseList.push(_this2.stopOneReel(_reelID4, resultData[_reelID4], stopType));
            } //--你媽的先做完SetCards再說


            if (_this2.isFastModeCallback()) {
              //--自己停掉或是turbo模式
              _this2.fastStopRoll();
              /*
              //--直接速度歸0就會直接移動到top可以瞬間換盤面
              const turboMode = GlobalAccessReader.getGlobalData(GameGlobalKeys.TurboMode);
              if (turboMode == NewFlashModeEnum.NewFlash2) {
                  const speed = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.roll?.moveInterval) as number;
                  this.changeReelMoveInterval(speed);
              }*/

            }

            yield Promise.all(promiseList);

            _this2.stopAllExpectAni();
          })();
        }

        changeReelMoveInterval(speed) {
          for (var i = 0; i < this.reelList.length; i++) {
            this.reelList[i].setmoveInterval(speed);
          }
        } //--幹--


        fastStopRoll() {
          var _this$_mediator;

          if (!this._isSetRoundTakeCards) return;

          for (var index = 0; index < this._currentRollingReelIDs.length; index++) {
            var _reelID5 = this._currentRollingReelIDs[index];

            this.reelList[_reelID5].fastStopRoll();

            this.reelList[_reelID5].setFastModeState();
          } //SP_ReadyHands_AudioPlayer.getInstance().stopAll();


          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.stopSound([(_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).SP_ReadyHands_0, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).SP_ReadyHands_1, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).SP_ReadyHands_2, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).SP_ReadyHands_3, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).SP_ReadyHands_4]);
          (_this$_mediator = this._mediator) == null || _this$_mediator.sendToMachine({
            type: (_crd && Call_Function_Type === void 0 ? (_reportPossibleCrUseOfCall_Function_Type({
              error: Error()
            }), Call_Function_Type) : Call_Function_Type).CALL_HIDE_ALL_WILD_EXPECT,
            data: {}
          });
        } //--slotMachine.setReadyHand會呼叫這個
        //--可以刪了~沒用到了2025102


        setReadyHand(currentReadyHandReelID) {
          if (currentReadyHandReelID >= 0) {
            this._currentReadyHandReelID = currentReadyHandReelID;

            var currentReadyHandReelIndex = this._currentRollingReelIDs.indexOf(currentReadyHandReelID);

            if (currentReadyHandReelIndex !== -1) {
              for (var _reelID6 = 0; _reelID6 < this.reelAmount; _reelID6++) {
                var index = this._currentRollingReelIDs.indexOf(_reelID6);

                var haveReadyHand = false;

                if (index !== -1) {
                  //haveReadyHand = index >= currentReadyHandReelIndex;
                  haveReadyHand = index === currentReadyHandReelIndex; // --只讓目前聽牌軸亮
                }

                this._reelHaveReadyHandList[_reelID6] = haveReadyHand;
              }
            }
          }
        }

        reset() {
          super.reset();

          this._roundReadyStatus.fill(false);

          this._testReelStopTime = 0;
          this._countStopReel = 0;
          this._currentRoundTakeCardsInfo = null;
          this._isSetRoundTakeCards = false;
          this._isFinalResultRound = false; // --重置最終結果回合 

          for (var i = 0; i < this.reelList.length; i++) {
            this.reelList[i].reset(); //--每一軸都要reset
          }

          this.resetWaiters();
          this.resetReadyAniList();
        }
        /**
         * call stopRoll的時候會promiseAll
         * stopOneReel在promise裡面包裝呼叫等待的方法
         * @param reelID --單軸停下來的時候呼叫
         */


        oneReelRollEnd(reelID) {
          var _this$oneReelRollEndC;

          var stopTime = Date.now();
          var wastTime = reelID == 0 ? 0 : stopTime - this._testReelStopTime;
          this._testReelStopTime = stopTime; //GameUtilsTools.debugLog('calculateRandomDataLength', 'ReelStopTime', { r: reelID, t: wastTime }, 'log');

          (_this$oneReelRollEndC = this.oneReelRollEndCallBack) == null || _this$oneReelRollEndC.call(this, reelID); //--單軸停

          super.oneReelRollEnd(reelID); //--關閉聽牌

          this.checkShowReadyHandFromEnd(reelID); //--從停輪的地方檢查下一軸聽牌
          //GameUtilsTools.debugLog(DEBUG_TITLE, 'oneReelRollEnd:', { finishedReel: reelID, isFinalRound: this._isFinalResultRound });
        } //--處理盤面鎖定的狀態(直接呼叫resolve)


        stopOneReel(reelID, resultData, stopType) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (_this3.reelList[reelID].isLock) {
              _this3.oneReelRollEnd(reelID);

              return;
            } else {
              //--這邊提前做掉
              //this.onStartRollReadyHand(reelID);//--20251107--特殊條件前兩軸聽牌--太短暫了
              yield _this3.reelList[reelID].stopRollAsync(stopType);

              _this3.oneReelRollEnd(reelID);
            }
          })();
        }

        checkHideReadyHand(reelID) {
          this.hideReadyHandCallback(reelID);

          if (this._reelIsReadyHandList[reelID]) {
            this._reelIsReadyHandList[reelID] = false;
          }
        }
        /**
         * onReelMoveOneStart呼叫
         * 20251002--企劃需求是<停輪才開始下一輪的聽牌>
         * 預設是從聽牌滾輪開始聽到最後輪，如果要更改條件可以在reelHaveReadyHand這個function裡面修改
         * @param reelID 滾輪ID
         */


        checkShowReadyHand(reelID) {
          return;
        } //========================override 父類別方法========================
        //---透過SymbolAniHandoffManager 操作ISymbolOwnerAgent來拿動畫資料


        getExistingAniDataNode(data) {
          return this.reelList[data.reelIndex].getExistingAniDataNode(data);
        }

        getExistingAniWPos(reelIndex, iconIndex) {
          return this.reelList[reelIndex].getExistingAniWPos(iconIndex);
        }

        getScatterHandoffData(reelIndex, isEffectUse) {
          if (isEffectUse === void 0) {
            isEffectUse = false;
          }

          var handoffScatterData = [];

          for (var i = 0; i < reelIndex.length; i++) {
            //--表演RS次數粒子使用的API要呼叫不同的方法,因為此時的scatter已經被拔到表演層了
            var data = !isEffectUse ? this.reelList[reelIndex[i]].getForceToHandoffScatter() : this.reelList[reelIndex[i]].getForceToHandoffScatterForCountEffect();

            if (data) {
              handoffScatterData.push(data);
            }
          }
          /*
          GameUtilsTools.debugLog(DEBUG_TITLE, 'getScatterHandoffData___reelIndex:', {
              handoffScatterData: handoffScatterData,
              list: this.reelList
          });*/


          return handoffScatterData;
        }

        getWildHandoffData(reelIndex) {
          var handoffWildData = [];

          for (var i = 0; i < reelIndex.length; i++) {
            var data = this.reelList[reelIndex[i]].getForceToHandoffWild();

            if (data) {
              handoffWildData.push(data);
            }
          }

          return handoffWildData;
        }

        getParticleWorldPosition(reelIndex) {
          return this.reelList[reelIndex].getParticleWorldPosition();
        }

        getMultiScatterWorldPosition(reelIndex) {
          var wPos = [];

          for (var i = 0; i < reelIndex.length; i++) {
            var reel = this.reelList[reelIndex[i]];
            wPos.push(reel.getScatterWorldPosition());
          }

          return wPos;
        } //--取得的gameIcon世界座標


        getSymbolWorldPosition(reelIndex, iconIndex) {
          return this.reelList[reelIndex].getIconNodeWorldPosition(iconIndex);
        } //--轉接器塞回aniNode控制權與交接回給gameIcon


        setAniNodeBackToReel(info, node) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            return _this4.reelList[info.reelIndex].setAniNodeBackToReel(info, node);
          })();
        } //---將動畫物件重新塞回gameIcon


        addBackAniNodeToGameIcon(reelIndex, iconIndex, aniNode) {
          this.reelList[reelIndex].addBackAniNodeToGameIcon(iconIndex, aniNode);
        } //--20251022新增取得bounce結束的promise


        getEndBouncePromise(reelIndex) {
          return this.reelList[reelIndex].getEndBouncePromise();
        }
        /**
        * 取得要位移的wild資料
        *  wildNode:Node;
           finalDestinationWPos:Vec3;
           offsetYLocal:number;
           startIconIndex:number;//--出發的iconIndex
        * 
        */


        getWildMovementData(reelIndex) {
          return this.reelList[reelIndex].getWildMovementData();
        }

        playWildAppearAnimation(reelIndex) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            yield _this5.reelList[reelIndex].playWildAppearAnimation();
          })();
        }

        playWildIdleAnimation() {
          for (var i = 0; i < this.reelList.length; i++) {
            this.reelList[i].playWildIdle();
          }
        }
        /**
         * 20260120-新增
         * 這邊是沒有wild中獎的情況,<但是滿足湊滿scatter進入fg的條件>
         * 會啟動播放wild的win動畫(這邊還在fake的wildLayer裡面)
         * 如果是有中獎的狀態下,直接去showAniProcessCtrl那邊操作
         */


        playWildAniToFg(reels) {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            var promises = [];

            for (var i = 0; i < reels.length; i++) {
              var reelIndex = reels[i];
              promises.push(_this6.reelList[reelIndex].playWildAniToFg());
            }

            yield Promise.all(promises);
          })();
        }
        /**
         * <<新的位移wild資料>>
         * @param reelIndex 觸發的軸
         * @param yoyo 是否為yoyo的動作(位移到完整軸的模式)true=是/false=否
         * @returns 
         */


        getWildMovementDataNew(reelIndex, yoyo) {
          if (yoyo === void 0) {
            yoyo = false;
          }

          var data = this.reelList[reelIndex].getNewWildMovementData(yoyo);
          var iplayData = this.reelList[reelIndex].getHandoffWildMoveAniNode(data.startIconIndex);
          var rWpos = this.reelList[reelIndex].getReelWorldPosition();
          data.reelIndex = iplayData.reelIndex;
          data.iconIndex = iplayData.iconIndex;
          return {
            movement: data,
            iplayData: iplayData,
            reelWpos: rWpos
          };
        }

        reSetWildDataAfterMove(reelIndex) {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            yield _this7.reelList[reelIndex].reSetWildDataAfterMove(reelIndex);
          })();
        }

        reSetWildDataAfterWithoutMove(reelIndex, iconIndex) {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            yield _this8.reelList[reelIndex].reSetWildDataAfterWithoutMove(reelIndex, iconIndex);
          })();
        }

        checkWildIsExistInBoard(reels) {
          for (var i = 0; i < reels.length; i++) {
            var reelIndex = reels[i];

            if (this.reelList[reelIndex].checkWildIsExist()) {
              return true;
            }
          }

          return false;
        }
        /**
         * 檢查指定軸是否有scatter(oneReelRollEndCallBack每一軸結束就檢查)
         * @param reelIndex 
         * @returns boolean
         */


        checkHasScatter(reelIndex) {
          return this.reelList[reelIndex].hasScatter;
        }

        setScatterInReelData(cards) {
          for (var i = 0; i < cards.length; i++) {
            var reel = cards[i];

            if (reel.includes(SCATTER_LIST[0])) {
              this.reelList[i].hasScatter = true;
            }
          }
        }
        /**
         * 取得scatter的位移資料
         * @param reelIndex 
         * @returns IBasicMovementData
         */


        getScatterMovementData(reelIndex) {
          return this.reelList[reelIndex].getScatterMovementData();
        }
        /**
         * <一般>-關閉/開啟指定的指定軸的<指定位置icon>亮度(true=變暗/false=正常)
         * @param reelIndex 軸
         * @param iconIndex 指定位置icon
         * @param isDark 亮度(true=變暗/false=正常)
         */


        setIconLight(reelIndex, iconIndex, isDark) {
          this.reelList[reelIndex].setIconLight(isDark, iconIndex);
        }
        /**
         * <TWEEN驅動>-關閉/開啟指定的指定軸的<指定位置icon>亮度(true=變暗/false=正常)
         * @param reelIndex 軸
         * @param iconIndex 指定位置icon
         * @param isDark 亮度(true=變暗/false=正常)
         */


        setIconLightTween(reelIndex, iconIndex, isDark) {
          this.reelList[reelIndex].setIconLightTween(isDark, iconIndex);
        }
        /**
        * 關閉/開啟指定的指定軸的<整軸>亮度(true=變暗/false=正常)
        * @param reelIndex 
        * @param brightnessFlag 
        */


        setReelLight(reelIndex, brightnessFlag) {
          this.reelList[reelIndex].setIconLight(brightnessFlag);
        }
        /**
        * <TWEEN驅動> 關閉/開啟指定的指定軸的<整軸>亮度(true=變暗/false=正常)
        * @param reelIndex 
        * @param brightnessFlag 
        */


        setReelLightTween(reelIndex, brightnessFlag) {
          var _this9 = this;

          return _asyncToGenerator(function* () {
            yield _this9.reelList[reelIndex].setIconLightTween(brightnessFlag);
          })();
        }

        setReelLightTweenExcludeIds(reelIndex, isDark, excludeSymbolIds) {
          var _this10 = this;

          return _asyncToGenerator(function* () {
            yield _this10.reelList[reelIndex].setIconLightTweenExcludeSymbolIds(isDark, excludeSymbolIds);
          })();
        }

        setReelsLight(reelIndex, brightnessFlag) {
          for (var id of reelIndex) {
            this.setReelLight(id, brightnessFlag);
          }
        }

        setReelsLightTweenExcludeIds(reelIndex, isDark, excludeSymbolIds) {
          var _this11 = this;

          return _asyncToGenerator(function* () {
            var promises = [];

            for (var id of reelIndex) {
              promises.push(_this11.setReelLightTweenExcludeIds(id, isDark, excludeSymbolIds));
            }

            yield Promise.all(promises);
          })();
        }

        setReelsLightTween(reelIndex, brightnessFlag) {
          var _this12 = this;

          return _asyncToGenerator(function* () {
            var promises = [];

            for (var id of reelIndex) {
              promises.push(_this12.setReelLightTween(id, brightnessFlag));
            }

            yield Promise.all(promises);
          })();
        }
        /**
         * <一般>-關閉/開啟指定的全部(整個盤面)的亮度(true=變暗/false=正常) 
         * @param isDark 
         */


        setAllLight(isDark) {
          for (var _reelID7 = 0; _reelID7 < this.reelAmount; _reelID7++) {
            this.reelList[_reelID7].wholeReelDark = isDark;

            this.reelList[_reelID7].setIconLight(isDark);
          }
        }
        /**
         * 
         * @param isDark true=變暗/false=正常
         * @param excludeSymbolIds 不參與改變的symbolID陣列
         */


        setAllLightExcludeSymbolIds(isDark, excludeSymbolIds) {
          for (var _reelID8 = 0; _reelID8 < this.reelAmount; _reelID8++) {
            this.reelList[_reelID8].setAllLightExcludeSymbolIds(isDark, excludeSymbolIds);
          }
        }
        /**
        * <TWEEN驅動> 關閉/開啟指定的全部(整個盤面)的亮度(true=變暗/false=正常) 
        * @param isDark 
        */


        setAllLightTween(isDark) {
          var _this13 = this;

          return _asyncToGenerator(function* () {
            var promises = [];

            for (var _reelID9 = 0; _reelID9 < _this13.reelAmount; _reelID9++) {
              promises.push(_this13.reelList[_reelID9].setIconLightTween(isDark));
            }

            yield Promise.all(promises);
          })();
        }

        resetWaiters() {
          var _this14 = this;

          this._waiters.clear();

          var _loop = function _loop() {
            var resolve;
            var promise = new Promise(r => resolve = r);

            _this14._waiters.set(i, {
              promise,
              resolve
            });
          };

          for (var i = 0; i < this.reelAmount; i++) {
            _loop();
          } // 第一個 index (0) 立即放行


          this._waiters.get(0).resolve();
        }

        resetReadyAniList() {
          //this._turnOnReadyHandEffect = false;
          this._roundWaitShowReadyHand.clear();

          this._roundMaxReadyHandCount = 0;
          this._doResetReadyHand = false;

          for (var i = 0; i < this.reelAmount; i++) {
            if (this.readyHandList[i] != null) {
              this.readyHandList[i].playAni((_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                error: Error()
              }), AnimationStateType) : AnimationStateType).Default);
              this.readyHandList[i].node.parent.active = false;
              this.readyHandList[i].node.parent.getComponent(UIOpacity).opacity = 255;
            }
          }
        } //--喔幹不能這樣做...


        multiSetReadyHand(currentReadyHandReelID) {
          this._reelHaveReadyHandList.fill(false);

          var resultIndex = [];
          var rollingSet = new Set(this._currentRollingReelIDs);
          this._roundMaxReadyHandCount = currentReadyHandReelID.length;

          for (var readyId of currentReadyHandReelID) {
            if (readyId < 0) continue;
            if (!rollingSet.has(readyId)) continue;
            this._reelHaveReadyHandList[readyId] = true; //[false,false,true,false,true]
            //[false,false,true,true,true]

            resultIndex.push(readyId);
          }

          this.setReelReadyHandData(currentReadyHandReelID);
          /*
          GameUtilsTools.debugLog(DEBUG_TITLE, 'multiSetReadyHand', {
              resultIndex: resultIndex,
              haveReadyHandList: this._reelHaveReadyHandList
          });*/
        }

        setReelReadyHandData(currentReadyHandReelID) {
          for (var i = 0; i < this.reelList.length; i++) {
            var targetReel = this.reelList[i];
            targetReel == null || targetReel.setWholeReelToReadyHandState();

            if (currentReadyHandReelID.includes(i)) {
              targetReel == null || targetReel.setReadyHandState();
            }
          }
        }
        /**
         * 特殊條件下啟動的聽牌效果軸
         * TIPS:
         * 只會在RS當下啟動第0軸的效果
         * @param reelID 
         */


        onStartRollReadyHand(reelID) {
          var gameState = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).GameState);
          var fastMode = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).TurboMode);
          if (fastMode !== (_crd && NewFlashModeEnum === void 0 ? (_reportPossibleCrUseOfNewFlashModeEnum({
            error: Error()
          }), NewFlashModeEnum) : NewFlashModeEnum).None) return;

          if (gameState && gameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).RE_SPINE) {
            //--只會在RS當下啟動第0軸的效果(且後兩軸是lock狀態)
            if (reelID === 0 || reelID === 1) {
              if (this._reelHaveReadyHandList[reelID]) {
                //--在檢查是否為lock狀態
                var getRoundLockStatus = this.getRoundLockStatus();
                var canPlayReadyHand = false;

                if (reelID === 0 && getRoundLockStatus[1] && getRoundLockStatus[2]) {
                  canPlayReadyHand = true;
                } else if (reelID === 1 && getRoundLockStatus[0] && getRoundLockStatus[2]) {
                  canPlayReadyHand = true;
                }

                if (canPlayReadyHand) {
                  //--巨尷尬...這個聽牌的時間小於音效的時間阿
                  //SP_ReadyHands_AudioPlayer.getInstance().playSound(reelID);
                  var list = [(_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                    error: Error()
                  }), AudioSourceList) : AudioSourceList).SP_ReadyHands_0, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                    error: Error()
                  }), AudioSourceList) : AudioSourceList).SP_ReadyHands_1, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                    error: Error()
                  }), AudioSourceList) : AudioSourceList).SP_ReadyHands_2, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                    error: Error()
                  }), AudioSourceList) : AudioSourceList).SP_ReadyHands_3, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                    error: Error()
                  }), AudioSourceList) : AudioSourceList).SP_ReadyHands_4];
                  (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                    error: Error()
                  }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                    error: Error()
                  }), SoundList) : SoundList).Sc_Ready, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
                    error: Error()
                  }), SOUND_TYPE) : SOUND_TYPE).NORMAL, list[reelID]); //--直接開啟該軸黃色框效果

                  this.readyHandList[reelID].node.parent.active = true;
                  this.readyHandList[reelID].playAni({
                    aniState: 'Show'
                  });
                  this.processDarkReelWithReadyHand(reelID, true);
                }
              }
            }
          }
        }

        //private _turnOnReadyHandEffect: boolean = false;
        processDarkReelWithReadyHand(reelID, spRuler) {
          if (spRuler === void 0) {
            spRuler = false;
          }

          var state = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).GameState); //--第0軸不會走showReadyHand進來,會走onStartRollReadyHand進來

          var spReelRuler = state == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).RE_SPINE && spRuler ? [0, 1, 2, 3, 4] : [2, 3, 4]; //--黃框固定出現的位置(原始資料)

          if (spReelRuler.includes(reelID)) {
            //--因為啟動聽牌效果(黃色框)的軸,會需要點亮
            this.setAllLightExcludeSymbolIds(true, [...SCATTER_LIST, ...WILD_LIST]); //--全軸變暗    

            this.reelList[reelID].wholeReelDark = false;
            this.setReelLight(reelID, false); //--亮起來
          } else {//this._roundWaitShowReadyHand.add(reelID);
          }
        }

        getWaitReadyHandReelIDs() {
          var result = [];

          for (var id of this._roundWaitShowReadyHand) {
            result.push(id);
          }

          this._roundWaitShowReadyHand.clear();

          return result;
        }
        /**
         * onReelMoveOneStart他是在每一軸的最後round開始滾動前呼叫
         * @param reelID next(聽牌軸的下一軸reelID+1)
         */


        showReadyHand(reelID) {
          //--這邊第0軸是不會進來的,如果第一軸進來也不會執行,X因為this.readyHandList[reelID]會是null
          //--20251117-現在5軸都具備黃色聽牌框
          if (!this.reelList[reelID].isLock) {
            //--特殊物件不參與聽牌的變暗效果
            this.processDarkReelWithReadyHand(reelID); // --20260204修改流程
            //this.setAllLightExcludeSymbolIds(true, [...SCATTER_LIST, ...WILD_LIST]);//--全軸變暗
            //this.setReelLight(reelID, false);//--亮起來

            if (this.readyHandList[reelID] != null) {
              //--巨尷尬...這個聽牌的時間小於音效的時間阿
              //--這邊這樣寫也很尷尬..因為onStartRollReadyHand就會處理0&1這兩軸的狀態
              if (reelID > 1) {
                var list = [(_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                  error: Error()
                }), AudioSourceList) : AudioSourceList).SP_ReadyHands_0, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                  error: Error()
                }), AudioSourceList) : AudioSourceList).SP_ReadyHands_1, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                  error: Error()
                }), AudioSourceList) : AudioSourceList).SP_ReadyHands_2, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                  error: Error()
                }), AudioSourceList) : AudioSourceList).SP_ReadyHands_3, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                  error: Error()
                }), AudioSourceList) : AudioSourceList).SP_ReadyHands_4];
                (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                  error: Error()
                }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                  error: Error()
                }), SoundList) : SoundList).Sc_Ready, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
                  error: Error()
                }), SOUND_TYPE) : SOUND_TYPE).NORMAL, list[reelID]);
                this.readyHandList[reelID].node.parent.active = true;
                this.readyHandList[reelID].playAni({
                  aniState: 'Show'
                });
              }
            }
          } else {
            var _this$_mediator2;

            /**
             * <handoff要新增方法->檢查狀態/owner>
             * 有鎖定軸分兩種情況
             * 1.轉出來就是1*4(尚未handoff到表演層)--->呼叫reel的方法
             * 2.已經在表演層了--->直接呼叫global方法
             */
            //-<TO DO>--scatter也要播放forecast mode animation---
            //--整軸釘死的wild使用的
            (_this$_mediator2 = this._mediator) == null || _this$_mediator2.sendToMachine({
              type: (_crd && Call_Function_Type === void 0 ? (_reportPossibleCrUseOfCall_Function_Type({
                error: Error()
              }), Call_Function_Type) : Call_Function_Type).CALL_SHOW_WILD_EXPECT,
              data: {
                reelIndex: reelID
              }
            });
          }
          /**
           * 78企劃的需求
           * <這是給Scatter/wild物件使用的,非發亮的聽牌框>
           * 處理下列情況:
           * 已經是亮牌的狀態且能夠與檯面上的排組湊出吻合聽牌條件的S/W物件.
           * 將能夠驅動動硬的聽牌動畫效果
           * TIPS:
           * 所以計算聽牌的時候會把這些也算進去,這邊要挑開是否為需要黃色聽牌框的條件
           */


          if (reelID === 2) {
            if (this._reelHaveReadyHandList[0]) {
              var _this$_mediator3;

              (_this$_mediator3 = this._mediator) == null || _this$_mediator3.sendToMachine({
                type: (_crd && Call_Function_Type === void 0 ? (_reportPossibleCrUseOfCall_Function_Type({
                  error: Error()
                }), Call_Function_Type) : Call_Function_Type).CALL_SHOW_WILD_EXPECT,
                data: {
                  reelIndex: 0
                }
              });
            }

            if (this._reelHaveReadyHandList[1]) {
              var _this$_mediator4;

              (_this$_mediator4 = this._mediator) == null || _this$_mediator4.sendToMachine({
                type: (_crd && Call_Function_Type === void 0 ? (_reportPossibleCrUseOfCall_Function_Type({
                  error: Error()
                }), Call_Function_Type) : Call_Function_Type).CALL_SHOW_WILD_EXPECT,
                data: {
                  reelIndex: 1
                }
              });
            }
          }
        }

        hideReadyHand(reelID) {
          //console.log('hideReadyHand:', reelID);
          this._countStopReel++;
          console.log('hideReadyHand_countStopReel:', this._reelHaveReadyHandList);

          if (this._countStopReel === this.reelAmount) {
            var _this$_mediator5;

            this.setAllLight(false);
            this.stopAllExpectAni();
            (_this$_mediator5 = this._mediator) == null || _this$_mediator5.sendToMachine({
              type: (_crd && Call_Function_Type === void 0 ? (_reportPossibleCrUseOfCall_Function_Type({
                error: Error()
              }), Call_Function_Type) : Call_Function_Type).CALL_HIDE_ALL_WILD_EXPECT,
              data: {}
            });
          } else {
            /*
            if (this._countStopReel >= this._roundMaxReadyHandCount && !this._doResetReadyHand) {
                this._doResetReadyHand = true;
                //- this._reelHaveReadyHandList[readyId]   
                this.setAllLight(false);
            }*/
          }

          var list = [(_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).SP_ReadyHands_0, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).SP_ReadyHands_1, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).SP_ReadyHands_2, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).SP_ReadyHands_3, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).SP_ReadyHands_4];
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.stopSound([list[reelID]]);

          if (this.readyHandList[reelID] != null) {
            var uiOpacity = this.readyHandList[reelID].node.parent.getComponent(UIOpacity);
            tween(uiOpacity).to(0.2, {
              opacity: 0
            }).call(() => {
              this.readyHandList[reelID].playAni((_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                error: Error()
              }), AnimationStateType) : AnimationStateType).Default);
              this.readyHandList[reelID].node.parent.active = false;
              uiOpacity.opacity = 255;
            }).start();
          }
        }

        stopAllExpectAni() {
          for (var i = 0; i < this.reelList.length; i++) {
            this.reelList[i].stopAllExpectAni();
          }
        }

        createSymbolData(resultData) {
          var symbolData = [];

          for (var index = 0; index < resultData.length; index++) {
            //let symbol = SymbolNumber.pool.instance();
            var symbol = new (_crd && SymbolNumber === void 0 ? (_reportPossibleCrUseOfSymbolNumber({
              error: Error()
            }), SymbolNumber) : SymbolNumber)();
            symbol.symbolID = resultData[index];
            symbolData.push(symbol);
          }

          return symbolData;
        }
        /**
         * 在呼叫stopRoll之前需要呼叫這個方法
         * 在停輪前設要補牌的資訊
         * type Direction = 'upward' | 'downward' | 'unknown';
         * interface IMatchWildGroupResult {
             reelIndex: number;//--有wild的軸
             groupIndex: number;//--這一組的index
             matchIndices: number[];//--這一組wild相連的index
             direction: Direction;//--這一組wild的方向(向上或向下)
             startIndex: number;//--這一組wild的起始位置
         }
            //--測試盤面1.[9, 8, 8, 0],2.[9, 9, 9, 1],[1,1,1,9]
            [
                {direction: "upward",groupIndex: 0,matchIndices: [0],reelIndex: 1,startIndex: 0},
                {direction: "upward",groupIndex: 0,matchIndices: [0, 1, 2],reelIndex: 2,startIndex: 2}
                {direction: "upward",groupIndex: 0,matchIndices: [3],reelIndex: 0,startIndex: 3}
            ]
         */

        /**
         * 1.有Scatter的軸-->最高
         * 2.有整軸Wild的軸-->次高
         * 4.其他依照原始排序照順序
         * Scatter 最後、Wild 次之、其他最前
         * @param cards 盤面資料
         * @param isAsc 升降排序開關
         * @returns 
         */


        processSortReelLayerIndex(cards, isAsc) {
          if (isAsc === void 0) {
            isAsc = true;
          }

          var defaultLayer = cards.map((card, index) => ({
            reel: index,
            index: 0,
            hasWild: card.includes(WILD_LIST[0]),
            hasScatter: card.includes(SCATTER_LIST[0]),
            //-寫預設Reel的原始layer位置資訊
            defaultReelIndex: this.reelList[index].defaultReelLayerIndex
          }));
          defaultLayer.sort((a, b) => {
            var getPriority = item => {
              if (isAsc) {
                //--進場
                // isAsc 為 true: Scatter 1, Wild 2 (小的在前)
                // --0925修改,因為Scatter在一出現就被強制剝離到表演層
                if (item.hasScatter) return 1;
                if (item.hasWild) return 2;
                return 0;
              } else {
                // isAsc 為 false: Scatter 2, Wild 1 (小的在前)
                // 為了讓 Wild (priority=1) 在 Scatter (priority=2) 前面
                if (item.hasScatter) return 0;
                if (item.hasWild) return 1; //if (item.hasWild) return 1;
                //if (item.hasScatter) return 2;

                return 2;
              }
            };

            var pa = getPriority(a);
            var pb = getPriority(b);

            if (pa !== pb) {
              return pa - pb; // priority 小的在前，大的在後
            } // 如果 priority 一樣，保留原始順序（或用 defaultReelIndex）


            return a.defaultReelIndex - b.defaultReelIndex;
          });
          defaultLayer.forEach((item, index) => {
            item.index = index;
          });
          return defaultLayer;
        }
        /**
         * 進行軸的排序
         * <條件>
         * 1.有Scatter的軸-->最高
         * 2.有整軸Wild的軸-->次高
         * 4.其他依照原始排序照順序
         * @param cards  盤面資料
         */


        reSortReelLayerIndex(cards, isAsc) {
          var defaultLayer = this.processSortReelLayerIndex(cards, isAsc);

          for (var i = 0; i < defaultLayer.length; i++) {
            var reelSort = defaultLayer[i];
            var reel = this.reelList[reelSort.reel];
            reel.currentReelLayerIndex = reelSort.index;
            reel.node.setSiblingIndex(reelSort.index); // 檢查當前深度

            /*
            console.log(
                '=======reelSortInfo=======' + '\n' +
                `Reel=${reelSort.reel}, 排序Index=${reelSort.index}, 當前SiblingIndex=${reel.node.getSiblingIndex()}`
            );*/
          }
        }

        beforeStopSetWildData(value) {
          if (value === void 0) {
            value = [];
          }

          this._wildGroupResultData = value;
        }

        resetWildData() {
          this._wildGroupResultData = [];

          for (var reel of this.reelList) {
            reel.singleWildGroupResultData = []; //--每次旋轉前都清空相關的wild資料

            reel.takeExtraCardsInRound = null;
          }
        }

        reSetLockReels() {
          for (var reel of this.reelList) {
            reel.isLock = false; //--清空相關的lock資料

            reel.hasWholeWild = false;
            reel.hasWildMoved = false;
            reel.isFirstLockInRound = false;
          }
        }
        /**
         * 盤面僅出現1個未完整百搭滾輪時，「不」觸發不移動的動畫
         * 盤面出現2個以上未完整百搭滾輪，須同時表演不移動的動畫
         * @param reelIndex 
         * @returns 
         */


        checkMovedReel(reelIndex) {
          if (reelIndex.length < 1) return false; //---少於1軸不檢查(2軸算是吻合條件)

          var isNotWholeWildReels = [];
          var wholeWildReels = [];

          for (var index of reelIndex) {
            if (!this.reelList[index].isLock) {
              isNotWholeWildReels.push(index);
            } else {
              wholeWildReels.push(index);
            }
          }

          var checkFlag = false;

          if (isNotWholeWildReels.length >= 2) {
            checkFlag = true;
          } else if (isNotWholeWildReels.length === 1 && wholeWildReels.length >= 1) {
            checkFlag = true;
          }

          return checkFlag;
        }

        getSingleReelIsFirstRoundLock(reelIndex) {
          return this.reelList[reelIndex].isFirstLockInRound;
        }

        getSingleReelIsLock(reelIndex) {
          var isLock = this.reelList[reelIndex].isLock;
          return isLock;
        }
        /**
         * 找出這輪最大需要補牌的數量
         * (Direction.UPWARD)--往上連續-補牌在後端(所以是離場的時候才會塞進來)
         * 最後要拿這個>
         * wildData.direction === Direction.DOWNWARD
         * 從頭開始往下長(拿頭的)--往下連續-補牌在前端
         * 
         * @returns 
         */


        getMaximumWildTakeCardNum() {
          var result = null;

          if (this._wildGroupResultData.length > 0) {
            var maxLength = 4; //--wild的最大長度(1*4) 

            var maxData_Down = {
              len: 0,
              index: 0,
              reelIndex: 0
            }; //--往下補牌

            var maxData_Up = {
              len: 0,
              index: 0,
              reelIndex: 0
            }; //--往上補牌

            result = {
              end: maxData_Down,
              start: maxData_Up
            };

            for (var i = 0; i < this._wildGroupResultData.length; i++) {
              //-找出補牌數後,比較最大值
              var wildData = this._wildGroupResultData[i];
              var takeCardNum = maxLength - wildData.matchIndices.length;
              var direction = wildData.direction;

              if (direction === (_crd && Direction === void 0 ? (_reportPossibleCrUseOfDirection({
                error: Error()
              }), Direction) : Direction).DOWNWARD) {
                //-從頭開始往下長(拿頭的)--往下連續-補牌在前端
                if (takeCardNum > maxData_Down.len) {
                  maxData_Down.len = takeCardNum;
                  maxData_Down.index = i;
                  maxData_Down.reelIndex = wildData.reelIndex;
                }
              } else if (direction === (_crd && Direction === void 0 ? (_reportPossibleCrUseOfDirection({
                error: Error()
              }), Direction) : Direction).UPWARD) {
                //-往上連續-補牌在後端(所以是離場的時候才會塞進來)
                if (takeCardNum > maxData_Up.len) {
                  maxData_Up.len = takeCardNum;
                  maxData_Up.index = i;
                  maxData_Up.reelIndex = wildData.reelIndex;
                }
              }
            }
          } else {
            result = null;
          }

          return result;
        }
        /**
         * 去寫每一軸是否需要補牌
         * PS:
         * 為了讓在沒有Wild的軸他的停止速度可以與有wild的軸一致
         * 所以整個盤面在有wild的情況下,非wild的軸也要補牌(亂數補就好了,統一捕尾端)
         * 1.如果沒有Wild出現在該round就不需要整盤補牌
         * 2.有Wild出現在該round,非Wild的軸也要補牌(統一捕尾端-因為Cut牌會累加從尾端cut)
         * 3.有Wild出現在該round,有Wild的軸補牌(補在wild的位置..補滿4個)
         */


        setRoundTakeCards() {
          var maxWildTakeCardNum = this.getMaximumWildTakeCardNum();

          for (var _reelID10 = 0; _reelID10 < this.reelList.length; _reelID10++) {
            this.reelList[_reelID10].takeExtraCardsInRound = maxWildTakeCardNum;
          }

          return maxWildTakeCardNum;
        } //--改變icon symbol資料的地方

        /**
         * stopRoll的時候,盤面資料會塞進去
         * PS:盤面鎖定是不會走這個流程的
         * 裡面每一軸的callback在stop前,會call這個方法並且把那個資料帶進去
         * @param reelID 
         * @param data 
         * 
         */


        setReelData(reelID, data) {
          var length = this.calculateRandomDataLength(reelID); //可以在這裡加隨機資料，實現間隔暫停;

          /*
          if (!this.isFastModeCallback()) {
              length = this.calculateRandomDataLength(reelID);//可以在這裡加隨機資料，實現間隔暫停
          }*/
          //--以下為新增方法

          if (this._wildGroupResultData.length > 0) {
            var targetReel = this._wildGroupResultData.filter(obj => obj.reelIndex === reelID);

            if (targetReel.length > 0) {
              this.reelList[reelID].singleWildGroupResultData = targetReel; //--把要補牌的資料塞進去
            }
          } //--以上為新增方法


          this.reelList[reelID].setData(data, length);
          /*
          if (extraLength > 0) {
              GameUtilsTools.debugLog(
                  DEBUG_TITLE,
                  'setReelData',
                  {
                      title:`reel ${reelID} 延長 ${extraLength} 筆假資料 (因前一軸聽牌)`,
                      extraLength: extraLength,
                      ogLen: length,
                      total:finalLength,
                      readyHand:debugRedayHand
                  }
                  
              );
              console.log();
          }*/
        }

        checkHaveReadyHand() {
          for (var haveReadyHand of this._reelHaveReadyHandList) {
            if (haveReadyHand) return true;
          }

          return false;
        }

        checkShowReadyHandFromEnd(reelID) {
          var _this15 = this;

          return _asyncToGenerator(function* () {
            if (_this15.isFastModeCallback()) {
              if (_this15.checkHaveReadyHand()) {
                var _this15$_mediator;

                _this15.stopAllExpectAni();

                (_this15$_mediator = _this15._mediator) == null || _this15$_mediator.sendToMachine({
                  type: (_crd && Call_Function_Type === void 0 ? (_reportPossibleCrUseOfCall_Function_Type({
                    error: Error()
                  }), Call_Function_Type) : Call_Function_Type).CALL_HIDE_ALL_WILD_EXPECT,
                  data: {}
                });
              }

              return;
            } //---20260205-new 78企劃


            var bouncePromise = _this15.reelList[reelID].getEndBouncePromise();

            if (bouncePromise) {
              var completedReelID = yield bouncePromise; // 等待 bounce，返回 reelID

              /*
              if (completedReelID !== reelID) {
                  console.warn(`Bounce reelID mismatch: expected ${reelID}, got ${completedReelID}`);
              } else {
                  console.log('bounce completed for reelID:', completedReelID);
              }*/
            }

            var nextIndex = reelID + 1;

            if (nextIndex >= _this15._reelIsReadyHandList.length) {
              return; //--最後一軸了啦
            }

            yield _this15._waiters.get(nextIndex - 1).promise;

            if (!_this15._reelIsReadyHandList[nextIndex]) {
              var haveReadyHand = _this15._reelHaveReadyHandList[nextIndex];

              if (haveReadyHand) {
                _this15.showReadyHandCallback(nextIndex); //--這邊是取下一軸


                _this15._reelIsReadyHandList[nextIndex] = true;
              }
            } // 標記自己完成，放行下一個


            _this15._waiters.get(nextIndex).resolve();
          })();
        } //--取得當前每一軸的鎖定狀態


        getRoundLockStatus() {
          var lockStatus = [];

          for (var i = 0; i < this.reelList.length; i++) {
            lockStatus.push(this.reelList[i].isLock);
          }

          return lockStatus;
        } //--取得本輪第一個聽牌軸的ID


        getFirstReadyHandReelID(currentLock) {
          var gameState = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).GameState);

          for (var i = 0; i < this._reelHaveReadyHandList.length; i++) {
            if (this._reelHaveReadyHandList[i]) {
              if (gameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).RE_SPINE && (i === 0 || i === 1)) {
                //---RS狀態下第一軸或第二軸要檢查鎖定狀態
                if (i === 0) {
                  if (currentLock[1] && currentLock[2]) {
                    return i;
                  }
                } else if (i === 1) {
                  if (currentLock[0] && currentLock[2]) {
                    return i;
                  }
                }
              } else {
                return i;
              }
            }
          }

          return -1;
        } //--延遲停止的隨機資料長度計算(因為停止決定在資料的長度...所以就可以自己亂塞藉此增加資料長度來延長停止時間)

        /**
         * 計算每一軸需要補幾筆隨機假資料，用於控制滾動時間與停輪順序。
         * - 依據停輪延遲時間 (delayStopTime) 換算出時間差
         * - 若該軸啟動聽牌效果，則額外延長固定的 readyHandTime
         * - 最終將「時間」換算為「需要補的假資料筆數」
         *
         * @param reelID 目標軸 ID
         * @returns 要補的假資料筆數
         */


        calculateRandomDataLength(reelID) {
          var _this$_currentRoundTa, _this$_currentRoundTa2;

          var orderList = this._currentRollingReelIDs.slice();

          var readySet = new Set();

          for (var id of orderList) {
            if (this._reelHaveReadyHandList[id]) readySet.add(id);
          }

          var gameState = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).GameState);
          var timeList = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList);
          var delayStopTime = timeList.get(cfg => {
            var _cfg$stop;

            return (_cfg$stop = cfg.stop) == null ? void 0 : _cfg$stop.staggerStop;
          }); // 每軸停輪間隔

          var readyHandTime = timeList.get(cfg => {
            var _cfg$forecast;

            return (_cfg$forecast = cfg.forecast) == null ? void 0 : _cfg$forecast.eachReel;
          }); // 每軸聽牌表演時間

          var moveInterval = this.reelList[0].getmoveInterval(); // 每個 icon 移動一格的時間-這邊是0.05秒

          var lockStatus = this.getRoundLockStatus(); //--取得當前每一軸的鎖定狀態

          var firstReadyReelID = this.getFirstReadyHandReelID(lockStatus);
          var previousStatus = lockStatus.slice(0, reelID); // 取得索引值從 0 到 reelID - 1 的子陣列

          var trueCount = previousStatus.filter(isLocked => isLocked === true).length; //--取出該軸之前有幾個鎖定

          /**
           *  const getRoundLockStatus: boolean[] = this.getRoundLockStatus();
                      let canPlayReadyHand: boolean = false;
                      if (reelID === 0 && getRoundLockStatus[1] && getRoundLockStatus[2]) {
                          canPlayReadyHand = true;
                      } else if (reelID === 1 && getRoundLockStatus[0] && getRoundLockStatus[2]) {
                          canPlayReadyHand = true;
                      }
            */

          var index = orderList.indexOf(reelID);
          if (index === -1) throw new Error("reelID=" + reelID + " \u4E0D\u5728 _currentRollingReelIDs \u5167"); // === 找出在該軸之前的所有 ready(聽牌) 軸 ===

          var isReady = readySet.has(reelID);
          var beforeNowLocks = this.checkReelLocksStateBeforeReel(reelID);
          var prevReadyCount = orderList.slice(0, index).filter((id, i) => {
            //--非鎖定軸狀態才會使用聽牌延遲
            //--FG不會有聽牌
            if (gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).NORMAL && i >= 2 && readySet.has(id) && !lockStatus[i]) {
              return true; // 保留( NG-條件：index >= 2 才算(NG不可能具備前兩軸聽牌條件))
            } else if (gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).RE_SPINE) {
              if (i == 0 && lockStatus[1] && lockStatus[2] && readySet.has(id)) {
                return true; // 第一軸特殊條件聽牌
              } else if (i == 1 && lockStatus[0] && lockStatus[2] && readySet.has(id)) {
                return true; // 第二軸特殊條件聽牌
              } else if (i > 1 && readySet.has(id) && !lockStatus[i]) {
                return true; // RS-條件：鎖定軸才算(前兩軸有可能是聽牌軸)-25251124-企劃修改
              }
            }

            return false;
          }).length; // === 累積時間公式 ===
          //--檢查當前軸目前是否為鎖定的狀態

          var isLock = lockStatus[reelID]; //---鎖定不需要累計逐輪停頓時間

          var stopDelay = 0;
          var prevReadyDelay = 0;
          var selfExtraDelay = 0; //--取得當前輪次需要補牌的資訊(這邊是已經算完需要補的牌數)

          var extraCardsNumberEnd = (_this$_currentRoundTa = (_this$_currentRoundTa2 = this._currentRoundTakeCardsInfo) == null ? void 0 : _this$_currentRoundTa2.end.len) != null ? _this$_currentRoundTa : 0; //--主要使用的尾端補牌(進場)

          var extraCardsTimeEnd = (extraCardsNumberEnd * moveInterval).fixed(); //--出場用的補牌數量(他會在下一輪開始的時候使用,所以時間要再扣除這個)

          var extraCardsNumberOut = this.reelList[reelID].upConsecutiveExtraCardsData.length; //--這邊已經在上一輪的時候補過了,會在下一輪開始的時候使用,所以新一輪進場時間要再扣除這個

          var extraCardsNumberOutTime = (extraCardsNumberOut * moveInterval).fixed(); // 確保即便扣除補牌時間後，滾輪依然有最起碼的旋轉感 (例如 0.25秒，約 5 格)
          //const baseSpinTime = (extraCardsNumberEnd > 0) ? delayStopTime : 0;

          var baseSpinTime = 0; //--20251104-TODO-聽牌要再修過-補牌後有點超過一軸2秒

          if (isLock) {
            //--該軸有鎖定整輪的狀態下,不需要累計時間(先這樣寫,免得之後又要改來改去) 
            stopDelay = 0;
            prevReadyDelay = 0;
            selfExtraDelay = 0;
          } else {
            if (isReady) {
              if (reelID <= 1) {
                var targetFinalDelay_ready = (index * delayStopTime).fixed();
                stopDelay = (targetFinalDelay_ready + extraCardsTimeEnd + extraCardsNumberOutTime + baseSpinTime).fixed(); //stopDelay = (targetFinalDelay + extraCardsTimeEnd + extraCardsNumberOutTime).fixed();

                selfExtraDelay = 0;
              } else {
                //stopDelay = 0;//--先遮蔽20251218
                stopDelay = (firstReadyReelID * delayStopTime).fixed();
                selfExtraDelay = readyHandTime; //-2

                this._roundReadyStatus[reelID] = true;
              }

              if (gameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).RE_SPINE) {
                var conditionA = reelID === 0 && lockStatus[1] && lockStatus[2];
                var conditionB = reelID === 1 && lockStatus[0] && lockStatus[2];

                if (conditionA || conditionB) {
                  this._roundReadyStatus[reelID] = true;
                  selfExtraDelay = reelID == 0 ? 1 : readyHandTime; // 自身延遲（若有）
                  // 確保這 1 秒或 readyHandTime 是從補牌結束後才開始算的

                  stopDelay = (extraCardsTimeEnd + extraCardsNumberOutTime).fixed();
                }
              }
              /*
              //--扣掉前面聽牌的軸數(要扣掉自己,自己聽牌的軸不需要疊加delayTime)
              //const delayWithOutReady = index - prevReadyCount - 1;
              // 基礎停輪時間(軸的間隔時間*實際停輪軸數)
              stopDelay = (reelID <= 1) ? (delayStopTime * index).fixed() : 0;
              selfExtraDelay = (reelID > 1) ? readyHandTime : 0;// 自身延遲（若有）
              if (selfExtraDelay > 0) {
                  this._roundReadyStatus[reelID] = true;
              }
               if (gameState === GameState.RE_SPINE) {
                   const conditionA = reelID === 0 && lockStatus[1] && lockStatus[2];
                  const conditionB = reelID === 1 && lockStatus[0] && lockStatus[2];
                   if (conditionA || conditionB) {
                      this._roundReadyStatus[reelID] = true;
                      selfExtraDelay = (reelID == 0) ? 1 : readyHandTime; // 自身延遲（若有）
                      stopDelay = 0;
                  }
              }*/

            } else {
              /**
               * <取消扣除邏輯..直接疊加上去>
               * 在補牌的狀態下,第一軸雖然是0秒但是補上了補牌後,與第2軸的差距所剩無幾
               * e.g:
               * 原本是第0軸0秒,第2軸0.2秒-在全體補3張後,扣除延遲
               * 第0軸=0+(3*0.05)=0.15秒,第2軸=0.2+(3*0.05)=0.35秒
               * 這樣差距就只剩0.2秒-0.15秒=0.05秒
               * 所以index要+1
               */
              // === 核心修改 ：逆向計算公式優化 ===
              var realStopIndex = index;

              if (beforeNowLocks > 0) {
                realStopIndex = index - beforeNowLocks;
              }

              if (beforeNowLocks > 0) {
                realStopIndex = index - beforeNowLocks;
              } else if (prevReadyCount > 0) {
                realStopIndex = index - (prevReadyCount + 1); //--要與最後一次停的時間相同
              }

              if (realStopIndex < 0) realStopIndex = 0; // 目標最終延遲 = (索引間隔 * 間隔時間)

              var targetFinalDelay_noReady = (realStopIndex * delayStopTime).fixed(); // 修正後的 StopDelay = 目標時間 + 補牌補償 + 基礎旋轉保底
              // 這樣在後續統一減去補牌時間後，會剛好剩下 (targetFinalDelay + baseSpinTime)

              stopDelay = (targetFinalDelay_noReady + extraCardsTimeEnd + extraCardsNumberOutTime + baseSpinTime).fixed(); //----還是有相同的問題
              //1. 計算修正後的停輪索引 (跳過前面鎖定軸的時間間隔)
              // 決定 TotalTime_final 應該是多少

              /*
              let realStopIndex = index;
              if (beforeNowLocks > 0) {
                  realStopIndex = index - beforeNowLocks;
              }
               // 確保索引不會小於 0
              if (realStopIndex < 0) realStopIndex = 0;
              // 2. 目標最終延遲時間 (TotalTime_final)
              const targetFinalDelay = (realStopIndex * delayStopTime).fixed();
               // 3. 逆向計算所需的 StopDelay (TotalTime_raw)
              // TotalTime_raw = Target_Final_Delay + ExtraCardsTime_in + ExtraCardsTime_out
              stopDelay = (targetFinalDelay + extraCardsTimeEnd + extraCardsNumberOutTime).fixed();
              selfExtraDelay = 0;
              */

              /*
              let realIndex = index + 1;
              if (beforeNowLocks > 0) {
                  if (index >= 2) {
                      realIndex = index - beforeNowLocks + 1;
                  }
              }
              stopDelay = (realIndex * delayStopTime).fixed();//-在補牌的狀態下,第一軸雖然是0秒但是補上了補牌後,與第2軸的差距所剩無幾    
              selfExtraDelay = 0;
              */
            } //--要檢查第一軸是否有聽牌不然會多一秒-
            //--這邊要算前面如果有聽牌的軸或是他鎖定且聽牌的軸的延遲時間


            prevReadyDelay = (prevReadyCount * readyHandTime).fixed(); // 前面所有聽牌延遲

            if (this._roundReadyStatus[0] && prevReadyDelay > 0) {
              //--第一軸啟用聽牌效果
              prevReadyDelay = prevReadyDelay - 1;
            }
          } //let stopDelay = (delayStopTime * index).fixed(); // 基礎停輪時間
          //let prevReadyDelay = (prevReadyCount * readyHandTime).fixed(); // 前面所有聽牌延遲
          //let selfExtraDelay = (isReady && reelID > 1) ? readyHandTime : 0; // 自身延遲（若有）


          var totalTime = stopDelay + prevReadyDelay + selfExtraDelay;

          if (totalTime > 0) {
            totalTime = (totalTime - extraCardsTimeEnd - extraCardsNumberOutTime).fixed(); // 扣掉補牌時間(reel內部會自己會加回來)
            // 二次保險：確保 totalTime 不會因為精度或特殊情況變成負數

            if (totalTime < baseSpinTime && !isLock) {
              totalTime = baseSpinTime;
            }
          } // === 轉換為假資料長度 ===


          var dataLength = Math.ceil(totalTime / moveInterval);
          /*
          const ogTime = totalTime;
          GameUtilsTools.debugLog('CHECK_TIME', 'calculateRandomDataLength', {
              reelID: reelID,
              roundStatus: this._roundReadyStatus,
              index: index,
              isReady: isReady,
              isLock: isLock,
              lockStatus: lockStatus,
              readyHandList: this._reelHaveReadyHandList,
              prevReadyCount: prevReadyCount,
              stopDelay: stopDelay,
              prevReadyDelay: prevReadyDelay,
              selfExtraDelay: selfExtraDelay,
              readyHandTime: readyHandTime,
              moveInterval: moveInterval,
              trueCount: trueCount,
              extraCardsNumberEnd: extraCardsNumberEnd,
              extraCardsTimeEnd: extraCardsTimeEnd,
              extraCardsNumberOut: extraCardsNumberOut,
              extraCardsNumberOutTime: extraCardsNumberOutTime,
              takeCardsInfo: this._currentRoundTakeCardsInfo,
              ogTime: ogTime,
              totalTime: totalTime,
              dataLength: dataLength
          });*/

          return dataLength;
        }
        /**
         * 檢查自己前面的軸是用過幾次聽牌效果
         * @param reelId 
         */


        checkRoundUseReadyHand(reelId) {
          var count = 0;

          for (var i = 0; i < reelId; i++) {
            if (this._roundReadyStatus[i]) {
              count++;
            }
          }

          return count;
        }

        checkReelLocksStateBeforeReel(reelId) {
          var lockStatus = this.getRoundLockStatus();
          var count = 0;

          for (var i = 0; i < reelId; i++) {
            if (lockStatus[i]) {
              count++;
            }
          }

          return count;
        } //====debug用====


        testHideIcon(reelIndex, iconIndex) {
          this.reelList[reelIndex].testHideIcon(iconIndex);
        }

        testAddSymbol(reelIndex, iconIndex) {
          this.reelList[reelIndex].testAddSymbol(iconIndex);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "readyHandList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spaceLength", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 4;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "readyHandLength", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 12;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_wildFakeLayerContainer", [_dec5], {
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
//# sourceMappingURL=53a053183dd0a72adccb353768fab74d793de40b.js.map