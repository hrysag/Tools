System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, macro, UniSlotMachine, DIAgentFactory, IdiotInitRandomGenerator, SlotRequestEvent, SlotNotifySubject, SlotResponseSubject, Call_Function_Type, NotifyCation, SymbolOwnerAgentID, GameUtilsTools, SlotMediator, GlobalAccessReader, GameGlobalKeys, _dec, _class, _crd, DEBUG_TITLE, ccclass, property, UniSlotMachine1016;

  function _reportPossibleCrUseOfUniSlotMachine(extras) {
    _reporterNs.report("UniSlotMachine", "./ReferencePathForUniSlot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDIAgentFactory(extras) {
    _reporterNs.report("DIAgentFactory", "./DIFactory/DIAgentFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniReelView(extras) {
    _reporterNs.report("UniReelView1016", "./UniReelView1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIStrategyRandomGenerator(extras) {
    _reporterNs.report("IStrategyRandomGenerator", "../MyUtils/BasicRandomGenerator/IStrategyRandomGenerator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIdiotInitRandomGenerator(extras) {
    _reporterNs.report("IdiotInitRandomGenerator", "../MyUtils/BasicRandomGenerator/IdiotInitRandomGenerator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRandomData(extras) {
    _reporterNs.report("IRandomData", "../MyUtils/BasicRandomGenerator/IdiotInitRandomGenerator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIWildMovementData(extras) {
    _reporterNs.report("IWildMovementData", "./ISlotDefinitionData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIBasicMovementData(extras) {
    _reporterNs.report("IBasicMovementData", "./ISlotDefinitionData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIWildMovementDataNew(extras) {
    _reporterNs.report("IWildMovementDataNew", "./ISlotDefinitionData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotRequestEvent(extras) {
    _reporterNs.report("SlotRequestEvent", "../EventData1016/DefinitionEventData1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotNotifySubject(extras) {
    _reporterNs.report("SlotNotifySubject", "../EventData1016/DefinitionEventData1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotResponseSubject(extras) {
    _reporterNs.report("SlotResponseSubject", "../EventData1016/DefinitionEventData1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFunctionOwnerAgent(extras) {
    _reporterNs.report("IFunctionOwnerAgent", "../AniMediator1016/CrossSystemFun/IFunctionOwnerAgent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunctionType(extras) {
    _reporterNs.report("FunctionType", "../AniMediator1016/CrossSystemFun/IFunctionOwnerAgent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIDirtyCrossSysServiceFacade(extras) {
    _reporterNs.report("IDirtyCrossSysServiceFacade", "../AniMediator1016/CrossSystemFun/IDirtyCrossSysServiceFacade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCall_Function_Type(extras) {
    _reporterNs.report("Call_Function_Type", "../AniMediator1016/CrossSystemFun/DefinitionFunctionType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifyCation(extras) {
    _reporterNs.report("NotifyCation", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReelInfo(extras) {
    _reporterNs.report("IReelInfo", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayAniData(extras) {
    _reporterNs.report("IPlayAniData", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchWildGroupResult(extras) {
    _reporterNs.report("IMatchWildGroupResult", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolOwnerAgentID(extras) {
    _reporterNs.report("SymbolOwnerAgentID", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtilsTools(extras) {
    _reporterNs.report("GameUtilsTools", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotMediator(extras) {
    _reporterNs.report("SlotMediator", "./SlotMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMediatorColleague(extras) {
    _reporterNs.report("IMediatorColleague", "./IMediator/ISlotCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISlotCommand(extras) {
    _reporterNs.report("ISlotCommand", "./IMediator/ISlotCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalAccessReader(extras) {
    _reporterNs.report("GlobalAccessReader", "../DefinitionGameData1016/AccessDefs/GlobalAccess", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameGlobalKeys(extras) {
    _reporterNs.report("GameGlobalKeys", "../DefinitionGameData1016/GameGlobalData1016", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      macro = _cc.macro;
    }, function (_unresolved_2) {
      UniSlotMachine = _unresolved_2.UniSlotMachine;
    }, function (_unresolved_3) {
      DIAgentFactory = _unresolved_3.DIAgentFactory;
    }, function (_unresolved_4) {
      IdiotInitRandomGenerator = _unresolved_4.IdiotInitRandomGenerator;
    }, function (_unresolved_5) {
      SlotRequestEvent = _unresolved_5.SlotRequestEvent;
      SlotNotifySubject = _unresolved_5.SlotNotifySubject;
      SlotResponseSubject = _unresolved_5.SlotResponseSubject;
    }, function (_unresolved_6) {
      Call_Function_Type = _unresolved_6.Call_Function_Type;
    }, function (_unresolved_7) {
      NotifyCation = _unresolved_7.NotifyCation;
      SymbolOwnerAgentID = _unresolved_7.SymbolOwnerAgentID;
      GameUtilsTools = _unresolved_7.GameUtilsTools;
    }, function (_unresolved_8) {
      SlotMediator = _unresolved_8.SlotMediator;
    }, function (_unresolved_9) {
      GlobalAccessReader = _unresolved_9.GlobalAccessReader;
    }, function (_unresolved_10) {
      GameGlobalKeys = _unresolved_10.GameGlobalKeys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "37239NGAiRIrb/64SDPB6FH", "UniSlotMachine1016", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Vec3', 'game', 'macro']); //import { IRandomData, InitRandomGenerator } from '../MyUtils/BasicRandomGenerator/InitRandomGenerator';


      DEBUG_TITLE = 'UniSlotMachine1016';
      ({
        ccclass,
        property
      } = _decorator);

      _export("UniSlotMachine1016", UniSlotMachine1016 = (_dec = ccclass('UniSlotMachine1016'), _dec(_class = class UniSlotMachine1016 extends (_crd && UniSlotMachine === void 0 ? (_reportPossibleCrUseOfUniSlotMachine({
        error: Error()
      }), UniSlotMachine) : UniSlotMachine) {
        //--DI轉接facade的動畫服務
        set aryReelAmountIds(value) {
          this._aryReelAmountIds = value;
        } //--確認是否為快速即停模式


        get isFastStopClick() {
          return this._isFastStopClick;
        }

        constructor() {
          super();
          this.onStartRollCallBack = null;
          this.oneReelFinalStartCallBack = null;
          this.oneReelRollEndCallBack = null;
          this._aniCrossServiceProxyFactory = null;
          this._crossSystemSymbolAniService = null;
          this._aryReelAmountIds = [];
          //--盤面預定顯示的軸數量分布
          //--ISymbolOwnerAgent
          this.ownerId = (_crd && SymbolOwnerAgentID === void 0 ? (_reportPossibleCrUseOfSymbolOwnerAgentID({
            error: Error()
          }), SymbolOwnerAgentID) : SymbolOwnerAgentID).SlotMachine;
          //--slotMediator
          this._mediator = null;
          this._interruptFlag = false;
          this._cancelTimeDelay = void 0;
          this._currentCards = [];
          this._onlyOnceToSort = false;
          //--checkFastStopMode
          this._isFastStopClick = false;
          this._doStop = false;
          this._testTime = 0;
          this._testEndTime = 0;
          this._previousCards = [];

          //===================interface<IBasicShowAniProcess>===================
          //--抽取wild/scatter位移資料
          this.getWildMovementDataFromEvent = payload => {
            const wildMovementData = this.getWildMovementData(payload.reelIndex); //--這邊要再補判斷

            (_crd && NotifyCation === void 0 ? (_reportPossibleCrUseOfNotifyCation({
              error: Error()
            }), NotifyCation) : NotifyCation).getInstance().emitSync((_crd && SlotResponseSubject === void 0 ? (_reportPossibleCrUseOfSlotResponseSubject({
              error: Error()
            }), SlotResponseSubject) : SlotResponseSubject).RES_GAME_SLOT_SUBJECT, (_crd && SlotRequestEvent === void 0 ? (_reportPossibleCrUseOfSlotRequestEvent({
              error: Error()
            }), SlotRequestEvent) : SlotRequestEvent).GET_SP_MOVEMENT, wildMovementData);
          };

          //--抽取世界座標from showAniController
          this.handleGetWorldPosition = payload => {
            const pos = this._reelView.getExistingAniWPos(payload.reelIndex, payload.iconIndex);

            (_crd && NotifyCation === void 0 ? (_reportPossibleCrUseOfNotifyCation({
              error: Error()
            }), NotifyCation) : NotifyCation).getInstance().emitSync((_crd && SlotResponseSubject === void 0 ? (_reportPossibleCrUseOfSlotResponseSubject({
              error: Error()
            }), SlotResponseSubject) : SlotResponseSubject).RES_GAME_SLOT_SUBJECT, (_crd && SlotRequestEvent === void 0 ? (_reportPossibleCrUseOfSlotRequestEvent({
              error: Error()
            }), SlotRequestEvent) : SlotRequestEvent).GET_WORLD_POSITION, pos);
          };

          this.onOneReelStopRoll = reelID => {
            var _this$oneReelRollEndC;

            if (!this._onlyOnceToSort) {
              this._onlyOnceToSort = true;
              this.sortReelLayerIndex(this._currentCards, true); //--進場
              //GameUtilsTools.debugLog(DEBUG_TITLE, 'onOneReelStopRoll', { reelID });
            } //const endTime = Date.now();
            //GameUtilsTools.debugLog('CHECK_TIME', 'SingleReel_Stop_Time', { reelID, endTime, start: this._testEndTime, during: endTime - this._testEndTime }, 'log');


            (_this$oneReelRollEndC = this.oneReelRollEndCallBack) == null || _this$oneReelRollEndC.call(this, reelID);
          };
        }

        update(dt) {
          //super.update(dt);
          this._reelView.updateIcons(dt);
        }

        init() {
          super.init(); //--掛載跨組件呼叫服務事件

          (_crd && NotifyCation === void 0 ? (_reportPossibleCrUseOfNotifyCation({
            error: Error()
          }), NotifyCation) : NotifyCation).getInstance().on((_crd && SlotNotifySubject === void 0 ? (_reportPossibleCrUseOfSlotNotifySubject({
            error: Error()
          }), SlotNotifySubject) : SlotNotifySubject).GAME_SLOT_SUBJECT, (_crd && SlotRequestEvent === void 0 ? (_reportPossibleCrUseOfSlotRequestEvent({
            error: Error()
          }), SlotRequestEvent) : SlotRequestEvent).GET_WORLD_POSITION, this.handleGetWorldPosition, this);
          (_crd && NotifyCation === void 0 ? (_reportPossibleCrUseOfNotifyCation({
            error: Error()
          }), NotifyCation) : NotifyCation).getInstance().on((_crd && SlotNotifySubject === void 0 ? (_reportPossibleCrUseOfSlotNotifySubject({
            error: Error()
          }), SlotNotifySubject) : SlotNotifySubject).GAME_SLOT_SUBJECT, (_crd && SlotRequestEvent === void 0 ? (_reportPossibleCrUseOfSlotRequestEvent({
            error: Error()
          }), SlotRequestEvent) : SlotRequestEvent).GET_SP_MOVEMENT, this.getWildMovementDataFromEvent, this); //--產生盤面首盤資料

          this.setGenericRandomCreator();
        }

        registerService(value) {
          this._crossSystemSymbolAniService = value;

          this._crossSystemSymbolAniService.registerYourself(this); //--再產生盤面首盤資料前要先注入


          this._aniCrossServiceProxyFactory = new (_crd && DIAgentFactory === void 0 ? (_reportPossibleCrUseOfDIAgentFactory({
            error: Error()
          }), DIAgentFactory) : DIAgentFactory)(this._crossSystemSymbolAniService, this);

          this._reelView.injectAniService(this._aniCrossServiceProxyFactory);

          this._mediator = new (_crd && SlotMediator === void 0 ? (_reportPossibleCrUseOfSlotMediator({
            error: Error()
          }), SlotMediator) : SlotMediator)(this, this._reelView);

          this._reelView.registerMediator(this._mediator);
        } //===================interface<IBasicShowAniProcess>===================

        /**
         * 再產生的時候就會動態產生IPlayAniData
         * PS-會把世界座標產生好
         * @param info IPlayAniData
         * @returns 
         */


        beforeRelease(info) {
          //--抽出動畫物件
          const {
            reAssign,
            aniNode
          } = this._reelView.getExistingAniDataNode(info); //GameUtilsTools.debugLog(DEBUG_TITLE, 'beforeRelease', { info, reAssign, aniNode });


          return aniNode;
        }
        /**
         * <<接手後要做的事>>
         * 跟showAniController交接動畫物件,交接完成會把AniNode,轉送進來這裡
         * <單筆資料>
         * @param info
         * @param node
         */


        afterAcquire(info, node) {
          return this._reelView.setAniNodeBackToReel(info, node);
        }
        /**
         * <<接手後要做的事>>
         * 跟showAniController交接動畫物件,交接完成會把AniNode,轉送進來這裡
         * <多筆資料>
         * @param mapInfo --這個是從showAniController接手多個動畫物件的資料
         */


        async afterMultiAcquire(mapInfo) {
          //GameUtilsTools.debugLog(DEBUG_TITLE, 'afterMultiAcquire', mapInfo);
          const promises = [];

          for (const [key, {
            data,
            node
          }] of mapInfo.entries()) {
            promises.push(this._reelView.setAniNodeBackToReel(data, node));
          }

          await Promise.all(promises);
        }

        crossProcess(processType) {
          switch (processType.name) {
            case (_crd && Call_Function_Type === void 0 ? (_reportPossibleCrUseOfCall_Function_Type({
              error: Error()
            }), Call_Function_Type) : Call_Function_Type).GET_WORLD_POSITION:
              break;

            case (_crd && Call_Function_Type === void 0 ? (_reportPossibleCrUseOfCall_Function_Type({
              error: Error()
            }), Call_Function_Type) : Call_Function_Type).SET_ICON_BRIGHTNESS:
              this.setIconLight(processType.args[0], processType.args[1], processType.args[2]);
              break;

            case (_crd && Call_Function_Type === void 0 ? (_reportPossibleCrUseOfCall_Function_Type({
              error: Error()
            }), Call_Function_Type) : Call_Function_Type).SET_ALL_REEL_BRIGHTNESS:
              this.setAllLight(processType.args[0]);
              break;
          }
        }

        crossMultiProcess(processType) {//-懶得寫了,因為沒有用到這個功能^_^
        } //===================interface<IMediatorColleague>===================


        onMediatorCommand(cmd) {
          //GameUtilsTools.debugLog(DEBUG_TITLE, 'onMediatorCommand', cmd);
          // Handle commands from the mediator 
          //這邊直接透過crossProcess 反向呼叫showAniController的方法
          switch (cmd.type) {
            case (_crd && Call_Function_Type === void 0 ? (_reportPossibleCrUseOfCall_Function_Type({
              error: Error()
            }), Call_Function_Type) : Call_Function_Type).CALL_SHOW_WILD_EXPECT:
              this._crossSystemSymbolAniService.processOwnerFunction({
                name: (_crd && Call_Function_Type === void 0 ? (_reportPossibleCrUseOfCall_Function_Type({
                  error: Error()
                }), Call_Function_Type) : Call_Function_Type).CALL_SHOW_WILD_EXPECT,
                ownerId: (_crd && SymbolOwnerAgentID === void 0 ? (_reportPossibleCrUseOfSymbolOwnerAgentID({
                  error: Error()
                }), SymbolOwnerAgentID) : SymbolOwnerAgentID).ShowAniController,
                args: [cmd.data.reelIndex]
              });

              break;

            case (_crd && Call_Function_Type === void 0 ? (_reportPossibleCrUseOfCall_Function_Type({
              error: Error()
            }), Call_Function_Type) : Call_Function_Type).CALL_HIDE_WILD_EXPECT:
              this._crossSystemSymbolAniService.processOwnerFunction({
                name: (_crd && Call_Function_Type === void 0 ? (_reportPossibleCrUseOfCall_Function_Type({
                  error: Error()
                }), Call_Function_Type) : Call_Function_Type).CALL_HIDE_WILD_EXPECT,
                ownerId: (_crd && SymbolOwnerAgentID === void 0 ? (_reportPossibleCrUseOfSymbolOwnerAgentID({
                  error: Error()
                }), SymbolOwnerAgentID) : SymbolOwnerAgentID).ShowAniController,
                args: [cmd.data.reelIndex]
              });

              break;

            case (_crd && Call_Function_Type === void 0 ? (_reportPossibleCrUseOfCall_Function_Type({
              error: Error()
            }), Call_Function_Type) : Call_Function_Type).CALL_HIDE_ALL_WILD_EXPECT:
              this._crossSystemSymbolAniService.processOwnerFunction({
                name: (_crd && Call_Function_Type === void 0 ? (_reportPossibleCrUseOfCall_Function_Type({
                  error: Error()
                }), Call_Function_Type) : Call_Function_Type).CALL_HIDE_ALL_WILD_EXPECT,
                ownerId: (_crd && SymbolOwnerAgentID === void 0 ? (_reportPossibleCrUseOfSymbolOwnerAgentID({
                  error: Error()
                }), SymbolOwnerAgentID) : SymbolOwnerAgentID).ShowAniController,
                args: []
              });

              break;
          }
        }

        testFunction() {
          this._reelView.testFunction();
        }

        registerStartRollCallBack() {
          this._reelView.oneReelRollEndCallBack = this.onOneReelStopRoll; //--單軸停止

          this._reelView.oneReelFinalStartCallBack = this.oneReelFinalStartCallBack; //--單軸最後一次開始(顯示結果)
        } //--之後要改成透過繼承的方式塞進來


        setGenericRandomCreator() {
          //--20260105改用笨蛋亂數產生器--企劃要求要與遊戲設計相符合<有機率的連續性>
          const randomInit = this.initIconSymbol(new (_crd && IdiotInitRandomGenerator === void 0 ? (_reportPossibleCrUseOfIdiotInitRandomGenerator({
            error: Error()
          }), IdiotInitRandomGenerator) : IdiotInitRandomGenerator)(), {
            groupSize: 6,
            totalGroups: 5
          });

          this._reelView.initIconSymbol(randomInit);
          /*
          const randomInit = this.initIconSymbol<IRandomData, number[][]>(new InitRandomGenerator(), {
              groupSize: 6,//--一軸有幾個icon就送幾個(要多產2個因為上下會生出來,不然資料不夠)
              totalGroups: 5,//--有幾軸就送幾軸的資料
              randomGroupSource: [0, 1, 2, 3, 4, 5, 6, 7, 8],
          });
           (<UniReelView1016>this._reelView).initIconSymbol(randomInit);
          */

        }

        initIconSymbol(generator, value) {
          //--要產出亂數初始盤面2ds
          return generator.generate(value);
        }

        //========================override 父類別方法========================
        async startRoll(isTurboMode, reelIDs) {
          var _this$onStartRollCall;

          let currentReelIDs = reelIDs ? reelIDs : this._aryReelAmountIds;
          this._onlyOnceToSort = false;
          this._testTime = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).getTimeStamp();
          await super.startRoll(isTurboMode, currentReelIDs);
          (_this$onStartRollCall = this.onStartRollCallBack) == null || _this$onStartRollCall.call(this);
        }
        /**
         * 
         * @param resultData --每一軸的資料(原本方法是number[][])
         * @param option ---這個是情非得已的override..option只能給自己用
         * 這邊全部停軸後會resolve,全停就寫在這個後面就好了
         * stopRollCallBack---快速停(guiBtn會接到這個function)
         */


        async stopRoll(resultData, option) {
          this.beforeStopSetWildData(option);
          this._currentCards = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).deepClone(resultData);
          this.setScatterInReelData(resultData); //await super.stopRoll(resultData);

          this._iconResultData = [...resultData];
          await this.canStopRoll();
          this._doStop = true;
          await this._reelView.stopRoll(this._iconResultData, this.stopType); //const lastTime = this._testTime;
          //const currentTime = GameUtilsTools.getTimeStamp();
          //this._testEndTime = currentTime;
          //GameUtilsTools.debugLog('CHECK_TIME', 'TotalRollTime', { lastTime, currentTime, during: currentTime - lastTime }, 'log');
          //const finish = GameUtilsTools.getTimeStamp();
          //GameUtilsTools.debugLog('CHECK_TIME', 'ALLREEL_Stop_Time', { currentTime, finish, during: finish - currentTime }, 'log');
          //GameUtilsTools.debugLog('CHECK_TIME', 'ALL_RUNTIME_TO_END', { lastTime, finish, during: finish - lastTime }, 'log');
        }

        async canStopRoll() {
          /*
          const timeList = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList);
          const timeBase = (this.isFastMode()) ?
              this._fastRollTime :
              timeList.get(cfg => cfg.roll?.totalRoll);//--這邊要再分是哪一階段的加速
           const timeDefer = GameUtilsTools.DeferByTweenPromiseWithCancel(timeBase);
          this._cancelTimeDelay = timeDefer.forceCancelAndResolve; // 暫存取消方法供 stopRollCallBack 使用 
          */
          const dataPromise = new Promise(resolve => {
            const check = () => {
              if (this._iconResultData.length > 0 && this._startRoll) {
                this.unschedule(check);
                resolve();
              }
            };

            this.schedule(check, 0, macro.REPEAT_FOREVER);
          }); //const testStartTime = Date.now();
          //await Promise.all([timeDefer.promise, dataPromise]);

          await dataPromise; //const testEndTime = Date.now();
          //const testTime = testEndTime - testStartTime;
          //GameUtilsTools.debugLog('GameViewManager1016_TimeBase', 'RollingTime', { testTime }, 'log');

          this._canStop = true; //const gameTimeMode = GlobalAccessReader.getGlobalData(GameGlobalKeys.TurboMode);

          if (this._interruptFlag) {
            this._isFastStopClick = true; //this._reelView.fastStopRoll();

            this.manualStopClickProcess();
          }

          this._cancelTimeDelay = null;
        }

        manualStopClickProcess() {
          this._reelView.fastStopRoll();

          const speed = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList).get(cfg => {
            var _cfg$roll;

            return (_cfg$roll = cfg.roll) == null ? void 0 : _cfg$roll.superMoveInterval;
          });

          this._reelView.changeReelMoveInterval(speed);
        } //--玩家按下stop按鈕會呼叫這個


        stopRollCallBack() {
          if (this._isStopClick && this._doStop) return;
          this._isStopClick = true;

          if (this._canStop) {
            this._isFastStopClick = true; //this._reelView.fastStopRoll();

            this.manualStopClickProcess();
          } else {
            this._interruptFlag = true;

            if (this._cancelTimeDelay) {
              // 提前結束 DeferByTweenPromiseWithCancel
              this._cancelTimeDelay();
            }
          }
        }
        /**
         * 重設reel的wild資料
         * @param value --wild的資料
         */


        beforeStopSetWildData(value) {
          this._reelView.beforeStopSetWildData(value);
        }
        /**
         * 重設盤面軸深度排序<廢棄->維持原設定<右壓左>>
         * @param cards --每一軸的資料
         */


        sortReelLayerIndex(cards, isAsc) {
          this._reelView.reSortReelLayerIndex(cards, isAsc); //this._reelView.reSortReelLayerIndex(this._currentCards, isAsc);

        }

        reset() {
          super.reset();
          this.resetWildData();
          this._interruptFlag = false;
          this._isFastStopClick = false;
          this._doStop = false;
          this._previousCards = [];
        }

        resetReelViewData() {
          this._reelView.resetReelViewData();
        }

        multiSetReadyHand(currentReadyHandReelID) {
          this._reelView.multiSetReadyHand(currentReadyHandReelID);
        } //--播放wild出現動畫


        async playWildAppearAnimation(reelIndex) {
          await this._reelView.playWildAppearAnimation(reelIndex);
        }
        /**
         * 20260120-新增
         * 這邊是沒有wild中獎的情況,<但是滿足湊滿scatter進入fg的條件>
         * 會啟動播放wild的win動畫(這邊還在fake的wildLayer裡面)
         * 如果是有中獎的狀態下,直接去showAniProcessCtrl那邊操作
         */


        async playWildAniToFg(reels) {
          await this._reelView.playWildAniToFg(reels);
        }

        playWildIdleAnimation() {
          this._reelView.playWildIdleAnimation();
        }
        /**
         * 
         * @param reels 獲取FG的reel
         * @returns 
         */


        checkWildIsExistInBoard(reels) {
          return this._reelView.checkWildIsExistInBoard(reels);
        }
        /**
         * <新的wild movement流程>
         * 對外拆成兩個API
         */


        async processDataBeforeWildMovement(reelIndex) {
          const wildMovementData = this._reelView.getWildMovementDataNew(reelIndex);

          const cloneIPlayData = await this.processWildMovementData(wildMovementData.iplayData);
          return {
            movement: wildMovementData.movement,
            iplayData: cloneIPlayData,
            reelWpos: wildMovementData.reelWpos
          };
        }
        /**
         * <新的wild NoMovement流程>
         * 對外拆成兩個API
         */


        async processDataBeforeWildNoMovement(reelIndex) {
          const wildMovementData = this._reelView.getWildMovementDataNew(reelIndex, true);

          const cloneIPlayData = await this.processWildMovementData(wildMovementData.iplayData);
          return {
            movement: wildMovementData.movement,
            iplayData: cloneIPlayData,
            reelWpos: wildMovementData.reelWpos
          };
        } //-beforeRelease會再透過getExistingAniDataNode方法重新寫過WPos


        async processWildMovementData(iPlay) {
          const cloneIPlayData = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).deepClone(iPlay);
          await this._crossSystemSymbolAniService.handoffSingleByOwnerId(iPlay, (_crd && SymbolOwnerAgentID === void 0 ? (_reportPossibleCrUseOfSymbolOwnerAgentID({
            error: Error()
          }), SymbolOwnerAgentID) : SymbolOwnerAgentID).ShowAniController);
          return cloneIPlayData;
        }

        async reSetWildDataAfterMove(reelIndex) {
          await this._reelView.reSetWildDataAfterMove(reelIndex);
        }

        async reSetWildDataAfterWithoutMove(reelIndex, iconIndex) {
          await this._reelView.reSetWildDataAfterWithoutMove(reelIndex, iconIndex);
        }

        getWildMovementData(reelIndex) {
          return this._reelView.getWildMovementData(reelIndex);
        } //--20251022新增取得bounce結束的promise


        getEndBouncePromise(reelIndex) {
          return this._reelView.getEndBouncePromise(reelIndex);
        }
        /**
         * 檢查指定軸是否有scatter(oneReelRollEndCallBack每一軸結束就檢查)
         * @param reelIndex 
         * @returns boolean
         */


        checkHasScatter(reelIndex) {
          return this._reelView.checkHasScatter(reelIndex);
        }

        setScatterInReelData(cards) {
          this._reelView.setScatterInReelData(cards);
        }
        /**
         * 取得scatter的位移資料--沒用到阿20260127
         * @param reelIndex 
         * @returns IBasicMovementData
         */


        getScatterMovementData(reelIndex) {
          return this._reelView.getScatterMovementData(reelIndex);
        } //--取得的gameIcon世界座標--沒再用到20260127


        getSymbolWorldPosition(reelIndex, iconIndex) {
          return this._reelView.getSymbolWorldPosition(reelIndex, iconIndex);
        }

        getParticleWorldPosition(reelIndex) {
          return this._reelView.getParticleWorldPosition(reelIndex);
        }

        getMultiScatterWorldPosition(reelIndex) {
          return this._reelView.getMultiScatterWorldPosition(reelIndex);
        } //--gameManager強行交換scatter的控制權(多軸)--表演RS次數粒子使用


        async forceToHandoffScatter(reelIndex) {
          const handoffScatterData = this._reelView.getScatterHandoffData(reelIndex, true);

          return handoffScatterData;
        } //--gameManager強行交換scatter的控制權(單一軸)


        async forceToHandoffSingleScatter(reelIndex) {
          const handoffScatterData = this._reelView.getScatterHandoffData([reelIndex])[0]; //GameUtilsTools.debugLog(DEBUG_TITLE, 'forceToHandoffSingleScatter', { reelIndex, handoffScatterData });


          await this._crossSystemSymbolAniService.handoffSingleByOwnerId(handoffScatterData, (_crd && SymbolOwnerAgentID === void 0 ? (_reportPossibleCrUseOfSymbolOwnerAgentID({
            error: Error()
          }), SymbolOwnerAgentID) : SymbolOwnerAgentID).ShowAniController);
        } //--gameManager強行交換wild的控制權


        async forceToHandoffWild(reelIndex) {
          const handoffWildData = this._reelView.getWildHandoffData(reelIndex);

          const cloneData = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).deepClone(handoffWildData); //--這邊在handoff會再寫過一次座標--

          await this._crossSystemSymbolAniService.multiHandoffBySameOwnerID(handoffWildData, (_crd && SymbolOwnerAgentID === void 0 ? (_reportPossibleCrUseOfSymbolOwnerAgentID({
            error: Error()
          }), SymbolOwnerAgentID) : SymbolOwnerAgentID).ShowAniController);
          return cloneData;
        } //--重置lockReel(整round結束)


        reSetLockReels() {
          this._reelView.reSetLockReels();
        }

        checkMovedReel(groupResult) {
          const reel = [];

          for (let i = 0; i < groupResult.length; i++) {
            reel.push(groupResult[i].reelIndex);
          }

          return this._reelView.checkMovedReel(reel);
        }

        getSingleReelIsFirstRoundLock(reelIndex) {
          return this._reelView.getSingleReelIsFirstRoundLock(reelIndex);
        }

        getSingleReelIsLock(reelIndex) {
          return this._reelView.getSingleReelIsLock(reelIndex);
        }

        resetWildData() {
          this._reelView.resetWildData();
        } //--將動畫物件塞回gameIcon(symbolAni物件)--沒用到20260128


        addBackAniNodeToGameIcon(reelIndex, iconIndex, aniNode) {
          this._reelView.addBackAniNodeToGameIcon(reelIndex, iconIndex, aniNode);
        } //====================盤面亮度控制相關===================
        //--設定單一個gameIcon的亮度(關閉/開啟)


        setIconLight(reelIndex, iconIndex, isDark) {
          this._reelView.setIconLight(reelIndex, iconIndex, isDark);
        } //--設定單一個gameIcon的亮度(關閉/開啟)(TWEEN驅動)


        setIconLightTween(reelIndex, iconIndex, isDark) {
          this._reelView[reelIndex].setIconLightTween(reelIndex, iconIndex, isDark);
        } //--關閉/開啟指定的指定軸的亮度(true=變暗/false=正常)


        setReelLight(reelIndex, brightnessFlag) {
          this._reelView.setReelLight(reelIndex, brightnessFlag);
        } //--關閉/開啟指定的指定軸<單軸>的亮度(true=變暗/false=正常)(TWEEN驅動)


        setReelLightTween(reelIndex, brightnessFlag) {
          this._reelView.setReelLightTween(reelIndex, brightnessFlag);
        } //--關閉/開啟多軸的亮度(true=變暗/false=正常)


        setReelsLight(reelIndex, brightnessFlag) {
          this._reelView.setReelsLight(reelIndex, brightnessFlag);
        } //--關閉/開啟多軸的亮度(true=變暗/false=正常)(TWEEN驅動)


        async setReelsLightTween(reelIndex, brightnessFlag) {
          await this._reelView.setReelsLightTween(reelIndex, brightnessFlag);
        }

        async setReelsLightTweenExcludeIds(reelIndex, isDark, excludeSymbolIds) {
          await this._reelView.setReelsLightTweenExcludeIds(reelIndex, isDark, excludeSymbolIds);
        } //--關閉/開啟整個盤面亮度(true=變暗/false=正常)


        setAllLight(isDark) {
          this._reelView.setAllLight(isDark);
        } //--關閉/開啟整個盤面亮度(true=變暗/false=正常)(TWEEN驅動)


        async setAllLightTween(isDark) {
          await this._reelView.setAllLightTween(isDark);
        } //=======test用=======


        testHideIcon(reelIndex, iconIndex) {
          this._reelView.testHideIcon(reelIndex, iconIndex);
        }

        testAddSymbol(reelIndex, iconIndex) {
          this._reelView.testAddSymbol(reelIndex, iconIndex);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=62df82e05043a9e28b6b1a0bba5d16842a4d720e.js.map