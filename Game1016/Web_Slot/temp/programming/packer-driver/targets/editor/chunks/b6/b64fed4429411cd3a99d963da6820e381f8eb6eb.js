System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, GameState, ShowBottomTextStatus, NotifyCation, GameViewEvents, NotifySubject, GameUtilsTools, GenericUIManager, FlowAbortManager, BasicGameFlowProcessKey, AsyncScope, UniSlotMachine, BasicSlotWithBuyFG, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, BasicSlotGameViewManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIBasicGameViewManager(extras) {
    _reporterNs.report("IBasicGameViewManager", "./IBasicGameViewManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGameProcess(extras) {
    _reporterNs.report("IGameProcess", "./IBasicGameViewManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIBuyFgProcess(extras) {
    _reporterNs.report("IBuyFgProcess", "./IBasicGameViewManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfITestMode(extras) {
    _reporterNs.report("ITestMode", "./IBasicGameViewManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinScoreData(extras) {
    _reporterNs.report("WinScoreData", "../../MyUtils/BasicGameDataDefinition/BasicGameDataDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProcessSlotData(extras) {
    _reporterNs.report("IProcessSlotData", "../BasicProcessServerData/IProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicProcessSlotData(extras) {
    _reporterNs.report("BasicProcessSlotData", "../BasicProcessServerData/IProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIBasicProcessServerData(extras) {
    _reporterNs.report("IBasicProcessServerData", "../BasicProcessServerData/IBasicProcessServerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoundStep(extras) {
    _reporterNs.report("RoundStep", "../BasicProcessServerData/IBasicProcessServerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../GameStateConfigDef/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowBottomTextStatus(extras) {
    _reporterNs.report("ShowBottomTextStatus", "../GameStateConfigDef/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifyCation(extras) {
    _reporterNs.report("NotifyCation", "../EventSystem/NotifyCation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewEvents(extras) {
    _reporterNs.report("GameViewEvents", "../BasicGameEvent/EventTypesDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifySubject(extras) {
    _reporterNs.report("NotifySubject", "../BasicGameEvent/EventTypesDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtilsTools(extras) {
    _reporterNs.report("GameUtilsTools", "../GameUtilsTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUIManager(extras) {
    _reporterNs.report("GenericUIManager", "../ReferencePathForMyUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIBasicGameModeManager(extras) {
    _reporterNs.report("IBasicGameModeManager", "./IBasicGameModeManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicGameStepDelayTime(extras) {
    _reporterNs.report("BasicGameStepDelayTime", "../BasicStepDelayTimeList/BasicGameStepDelayTime", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFlowAbortManager(extras) {
    _reporterNs.report("FlowAbortManager", "../AsyncScope/FlowAbortManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAsyncProcess(extras) {
    _reporterNs.report("IAsyncProcess", "../AsyncScope/Definitions/IAsyncProcess", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFlowProcess(extras) {
    _reporterNs.report("IFlowProcess", "../AsyncScope/Definitions/IFlowProcess", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIBaseGameProcessKey(extras) {
    _reporterNs.report("IBaseGameProcessKey", "../AsyncScope/Definitions/IFlowProcessKeys", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicGameFlowProcessKey(extras) {
    _reporterNs.report("BasicGameFlowProcessKey", "../AsyncScope/Definitions/BasicGameFlowProcessKey", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAsyncScope(extras) {
    _reporterNs.report("AsyncScope", "../AsyncScope/AsyncScope", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniSlotMachine(extras) {
    _reporterNs.report("UniSlotMachine", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniReelView(extras) {
    _reporterNs.report("UniReelView", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReel(extras) {
    _reporterNs.report("IReel", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNewFlashModeEnum(extras) {
    _reporterNs.report("NewFlashModeEnum", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  _export("BasicSlotWithBuyFG", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GameState = _unresolved_2.GameState;
      ShowBottomTextStatus = _unresolved_2.ShowBottomTextStatus;
    }, function (_unresolved_3) {
      NotifyCation = _unresolved_3.NotifyCation;
    }, function (_unresolved_4) {
      GameViewEvents = _unresolved_4.GameViewEvents;
      NotifySubject = _unresolved_4.NotifySubject;
    }, function (_unresolved_5) {
      GameUtilsTools = _unresolved_5.GameUtilsTools;
    }, function (_unresolved_6) {
      GenericUIManager = _unresolved_6.GenericUIManager;
    }, function (_unresolved_7) {
      FlowAbortManager = _unresolved_7.FlowAbortManager;
    }, function (_unresolved_8) {
      BasicGameFlowProcessKey = _unresolved_8.BasicGameFlowProcessKey;
    }, function (_unresolved_9) {
      AsyncScope = _unresolved_9.AsyncScope;
    }, function (_unresolved_10) {
      UniSlotMachine = _unresolved_10.UniSlotMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c5a4fsLvJNKc5Y+ULVR+IRC", "BasicGameViewManager", undefined);
      /**
       * @author Eric 20250805
       * @description: 基本遊戲流程管理介面
       */


      __checkObsolete__(['Component', '_decorator']);

      /*
          P extends BasicProcessSlotData,
          S extends IProcessSlotData,
          G extends GameState = GameState,
          D extends IBasicProcessServerData<P, S, G> = IBasicProcessServerData<P, S, G>
          */

      /*
      export enum GameProcess {
          CORE_MAIN_PROCESS = 'CORE_MAIN_PROCESS',//-主要遊戲流程
      }*/
      ({
        ccclass,
        property
      } = _decorator);

      _export("BasicSlotGameViewManager", BasicSlotGameViewManager = (_dec = ccclass('BasicSlotGameViewManager'), _dec2 = property({
        type: _crd && UniSlotMachine === void 0 ? (_reportPossibleCrUseOfUniSlotMachine({
          error: Error()
        }), UniSlotMachine) : UniSlotMachine,
        visible: true,
        displayName: 'Slot Machine',
        tooltip: 'slotMachine'
      }), _dec(_class = (_class2 = class BasicSlotGameViewManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_slotMachine", _descriptor, this);

          this._gameModeManager = void 0;

          /**移動與紀錄處理後的ServerProcessData */
          this._processedServerData = null;

          /** 是否為這一輪的狀態*/
          this._isThisRound = false;

          /**是否開始計算這一輪的得分 */
          this._startGetScoreInThisRound = false;

          /** 延遲動畫取消函式(for 延遲中斷時,阻斷tweenPromise resolve) */
          this._delayTweenCancel = void 0;

          /** 遊戲步驟延遲時間列表 */
          this._gameStepDelayTimeList = void 0;
          this._flowMgr = void 0;
          this._flowKeys = void 0;
          this._currentTurboSpeed = false;
          //---是否為Turbo模式
          this._isStop = false;
          //--是否已經按下stop按鈕(startSpin會關閉)
          this._isRollEnd = false;
          //--是否已經全部滾輪停止
          this._isInterrupting = false;
          this._async = void 0;
          //--註冊管理使用promise/delayTime工具  
          //protected _autoSpinDelay:boolean=false;//--auto的計時器   
          this._autoTimerPromise = null;
          this._testTime = 0;
          this.isAutoSpinMode = false;

          //==================interface<IAsyncProcess>========================
          this.onFlowAbortCallback = flowKey => {};
        } //---是否為自動模式---

        /**在初始化之前執行的邏輯 */


        /** 初始化遊戲流程管理器*/
        init() {
          this._flowMgr = (_crd && FlowAbortManager === void 0 ? (_reportPossibleCrUseOfFlowAbortManager({
            error: Error()
          }), FlowAbortManager) : FlowAbortManager).getInstance();
          this._flowKeys = _crd && BasicGameFlowProcessKey === void 0 ? (_reportPossibleCrUseOfBasicGameFlowProcessKey({
            error: Error()
          }), BasicGameFlowProcessKey) : BasicGameFlowProcessKey;
          this._async = (_crd && AsyncScope === void 0 ? (_reportPossibleCrUseOfAsyncScope({
            error: Error()
          }), AsyncScope) : AsyncScope).getInstance();
        }

        registerSystem() {//const flowKey = this._flowKeys.CORE_MAIN_PROCESS;
          //const signal = this._async.createAbortScope(flowKey, this.onFlowAbortCallback);
        } //============================== 測試模式狀態 ==============================


        runTest(value) {
          const evtData = {
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
          return null;
        } //============================== 模式與狀態 ==============================
        //---返回大廳的邏輯<目前沒用到,之後用到再補吧>---


        goBackLobby() {} //---切換場景的邏輯<目前沒用到,之後再補吧>---


        changeScene(sceneName) {} //---在初始化之前執行的邏輯---
        //============================== 模式與狀態 ==============================
        //==================interface<IFlowProcess>========================
        //--取消


        getFlowKeyGroups(processKey) {
          const defaultProcessGroup = [];

          switch (processKey) {
            case this._flowKeys.CORE_MAIN_PROCESS:
              //--這邊要照順序塞,代表這是主要的遊戲流程(有順序性)
              defaultProcessGroup.push([(_crd && BasicGameFlowProcessKey === void 0 ? (_reportPossibleCrUseOfBasicGameFlowProcessKey({
                error: Error()
              }), BasicGameFlowProcessKey) : BasicGameFlowProcessKey).START_ROLL, (_crd && BasicGameFlowProcessKey === void 0 ? (_reportPossibleCrUseOfBasicGameFlowProcessKey({
                error: Error()
              }), BasicGameFlowProcessKey) : BasicGameFlowProcessKey).STOP_ROLL, (_crd && BasicGameFlowProcessKey === void 0 ? (_reportPossibleCrUseOfBasicGameFlowProcessKey({
                error: Error()
              }), BasicGameFlowProcessKey) : BasicGameFlowProcessKey).BEFORE_ALL_REEL_ROLL_END, (_crd && BasicGameFlowProcessKey === void 0 ? (_reportPossibleCrUseOfBasicGameFlowProcessKey({
                error: Error()
              }), BasicGameFlowProcessKey) : BasicGameFlowProcessKey).SHOW_RESULT_AFTER_ROLL, (_crd && BasicGameFlowProcessKey === void 0 ? (_reportPossibleCrUseOfBasicGameFlowProcessKey({
                error: Error()
              }), BasicGameFlowProcessKey) : BasicGameFlowProcessKey).PROCESS_ROUND, (_crd && BasicGameFlowProcessKey === void 0 ? (_reportPossibleCrUseOfBasicGameFlowProcessKey({
                error: Error()
              }), BasicGameFlowProcessKey) : BasicGameFlowProcessKey).PROCESS_NORMAL_ROUND //BasicGameFlowProcessKey.OTHER
              ]);
              break;
          }

          return defaultProcessGroup;
        }

        buildFlowStages(processKey) {
          const stages = [];

          for (const group of this.getFlowKeyGroups(processKey)) {
            for (const key of group) {
              const val = this._flowKeys[key];
              if (val) stages.push(val);
            }
          }

          return stages;
        } //============================== 加速timeScale狀態 ==============================
        //--這邊單純通知就好了,因為GameTimeScale是靜態的直接取值即可


        //============================== 加速timeScale狀態 ==============================
        //============================== 盤面資料接收 =============================
        //---寫入server新的資料---
        setServerReceiveData(processData) {
          //--重置資料
          this._processedServerData.setServerReceiveData(processData);
        } //----重置資料準備新一輪


        resetDataForNewRound() {} //============================== 盤面資料接收 =============================
        //============================== 下注與FG面板 =============================
        //---玩家下注金額改變時,更新下注金額
        //============================== 下注與FG面板 =============================
        //============================== slotMachine控制 =========================
        //---玩家按下自動按鈕---


        //--在向Server要資料前開啟轉動計時,在Server資料回來後要等這個計時器結束才會繼續流程
        setAutoModeTimer() {
          const gameState = this._processedServerData.getCurrentStep();

          let currentState;

          if (gameState == null) {
            currentState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).NORMAL;
          } else {
            currentState = gameState.state;
          } //--這邊因為要踩在全部停止的時間是要吻合企劃在做停止的時間點(這邊1階段是0.8秒,2階段是0.5秒.....)


          let delayTime = this.processRollToStopTime(currentState); //GameUtilsTools.debugLog('CHECK_TIME', 'ROLL_time', { delayTime }, 'log');

          this._testTime = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).getTimeStamp();
          this._autoTimerPromise = this.addTweenDelay(delayTime).then(() => {
            //--delay---
            this._autoTimerPromise = null;
          });
          return this._autoTimerPromise;
        } //--寫完server新的資料後會呼叫這個方法(gameController要接起來)


        async newRoundDataToStopSpin() {
          if (this._autoTimerPromise) {
            await this._autoTimerPromise;
          } //const oldTime = this._testTime;
          //const endT = GameUtilsTools.getTimeStamp();
          //GameUtilsTools.debugLog('CHECK_TIME', 'finishRollTime', { oldTime, endT, during: endT - oldTime }, 'log');


          const step = this._processedServerData.getCurrentData();

          this.stopSpin(step);
        } //---玩家按下spin按鈕(空白按鍵)---


        startSpin() {
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setMainUIToSpinMode(); //---spin按鈕上鎖,變成stopSpin按鈕

          this.reSetDataForBeforeSpin().then(() => {
            this.doStartSpin();
          });
        } //--接上slotMachine.startRoll


        doStartSpin() {
          this._isStop = false; //---每次spin都要重置這個

          this._isRollEnd = false;
          this._isInterrupting = false; //---重置中斷狀態
        } //--清除相關資料
        //--全部停止後的處理(在表演前)


        //---玩家按下stop按鈕(空白按鍵)---
        async stopSpin(slotData, other) {
          if (this._isStop) return;
          if (!slotData) return; // slotData 為 null，直接退出（不會設 _isStop）

          this._isStop = true;
          this.beforeStopSpin();
          await this.doStopSpin(slotData);
          this._isRollEnd = true;
          await this.beforeAllReelRollEnd(); //--20250827---

          /**
           * 這裡要再多一個表演前要處理的事情
           * 例如:秀甚麼鬼東西或是特殊模式的開啟(再算分前)
           */

          this.processAfterAllReelRollEnd();
        } //---玩家按下stop按鈕---

        /**
         * 需要檢查流程再進行相對的處理,目前這樣是等於每次都去getCurrentStepForClick
         */


        onStopBtnClickHandler() {
          //--玩家按下後gameRoot會處理...
          //--20251016--現在stop按鈕都要常駐狀態
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setMainUIStopBtnEnabled(); //...直接被拿掉了..真的很機掰

          if (this._isRollEnd) {
            if (!this._isInterrupting) {
              this._isInterrupting = true;
              this.changeInterruptingStatus();

              this._async.abortAll(); //--可取消


              (_crd && NotifyCation === void 0 ? (_reportPossibleCrUseOfNotifyCation({
                error: Error()
              }), NotifyCation) : NotifyCation).getInstance().emitSync((_crd && NotifySubject === void 0 ? (_reportPossibleCrUseOfNotifySubject({
                error: Error()
              }), NotifySubject) : NotifySubject).GAME_VIEW_SUBJECT, (_crd && GameViewEvents === void 0 ? (_reportPossibleCrUseOfGameViewEvents({
                error: Error()
              }), GameViewEvents) : GameViewEvents).INTERRUPT_PROCESS, true);
            }
          } else {
            this._slotMachine.stopRollCallBack();
          }
        } //--這裡會開始真的呼叫stopSpin


        beforeStopSpin() {
          //---在玩家按下stop之前要做的事
          //--要拿該局資料直接跟_processedServerData.getCurrentData拿
          //---例如:擷取資料之類的
          return null;
        } //============================== slotMachine控制 =========================
        //============================== 回合處理(after stopRoll) =================


        async processAfterAllReelRollEnd() {
          //--await處理完的slot停止
          const totalWinScore = this.calculateTotalWinScore(); //--感覺可以省了

          if (totalWinScore > 0) {
            //--關閉面板按鈕準備接表演 
            this._startGetScoreInThisRound = true;
          } else {
            //--通知下一把 
            //---沒有中獎的情況下要做的事情
            if (!this._startGetScoreInThisRound) {
              const evtData = {
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
          } //return;
          //--統一處理表演(不管有沒有得分)


          await this.doShowResultAfterStopRoll(); //return;

          this.checkNextRound();
        } //---表演處理一定要實作


        /**
         * 正常結束這一round的處理
         * 當fg和reSpine的資料都清空後(或是為空)即進入結束這一round的處理
         */
        async processNormalRound(freeEnd) {
          this._isThisRound = false; //--這一輪結束後要重置為false

          this._isInterrupting = false; //---重置中斷狀態

          this.resetDataForNewRound(); //--重置資料相關處理

          const delayRoundStep = this.checkConditionForRoundStep(true); //const startT = GameUtilsTools.getTimeStamp();

          await this.addTweenDelay(delayRoundStep); //const endT = GameUtilsTools.getTimeStamp();
          //GameUtilsTools.debugLog('CHECK_ROUND_STOP_TIME_FINISH_ROUND', 'RoundStopTime', { state: GameUtilsTools.roundDelayState, delayRoundStep: delayRoundStep, startT, endT, during: endT - startT }, 'log');
          //--通知gameController 開始下一round

          (_crd && NotifyCation === void 0 ? (_reportPossibleCrUseOfNotifyCation({
            error: Error()
          }), NotifyCation) : NotifyCation).getInstance().emitSync((_crd && NotifySubject === void 0 ? (_reportPossibleCrUseOfNotifySubject({
            error: Error()
          }), NotifySubject) : NotifySubject).GAME_VIEW_SUBJECT, (_crd && GameViewEvents === void 0 ? (_reportPossibleCrUseOfGameViewEvents({
            error: Error()
          }), GameViewEvents) : GameViewEvents).SHOW_END, null);
        } //--freeGame/reSpine的處理 


        async processRound(gameState, slotData) {
          var _this$_processedServe;

          this.prepareForNextFGandReSpin();

          if (!this._startGetScoreInThisRound) {
            (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.showBottomTextStartSpin(); //-spin按鈕狀態
          } //--局間停頓時間


          const delayRoundStep = this.checkConditionForRoundStep();

          const signal = this._async.createAbortScope(this._flowKeys.PROCESS_ROUND);

          const cancel = () => {}; //const startT = GameUtilsTools.getTimeStamp();


          const waitPromise = this._async.waitSecondsTracked(delayRoundStep, this._flowKeys.PROCESS_ROUND, cancel, true, signal, this._flowKeys.PROCESS_ROUND);

          await waitPromise.promise; //const endT = GameUtilsTools.getTimeStamp();
          //GameUtilsTools.debugLog('CHECK_TIME', 'processRound_Time', { state: GameUtilsTools.roundDelayState, delayRoundStep, startT, endT, during: endT - startT }, 'log');

          this._isInterrupting = false; //---重置中斷狀態
          //await this.addTweenDelay(delayRoundStep);

          /**
           * 這是給 this._slotMachineController.stopRollCallBack
           * 使用的資料,因為他會直接灌進stopSpin裡面
           */
          //this.changeGameMode(gameState);

          this._processedServerData.setSpinIndexForTemporary();

          this.startSpin(); //--要滾多久的時間

          let delay = this.processRollToStopTime(gameState).fixed(); //const startTRoller = GameUtilsTools.getTimeStamp();

          await this.addTweenDelay(delay); //const endTRoller = GameUtilsTools.getTimeStamp();
          //GameUtilsTools.debugLog('CHECK_TIME', 'processRound_Roller_Time', { state: GameUtilsTools.roundDelayState, delay, startTRoller, endTRoller, during: endTRoller - startTRoller }, 'log');

          this.stopSpin((_this$_processedServe = this._processedServerData.getCurrentStepForClick()) == null ? void 0 : _this$_processedServe.data);
        } //--取得滾動到停止的時間處理(就是要滾動多久的時間-20251214)
        //--計算下一輪開始要暫停多久
        //--20260129-new因78企劃新的需求要將計算FG/RS次數提前算


        async checkNextRound() {
          //--移動資料index
          if (this._processedServerData.setRoundIdx()) {
            //--注意NG->FG的狀況
            this.beforeProcessNewRoundData(); //--提前處理相關局之中的特殊計次資料

            const step = this._processedServerData.getCurrentStep();

            switch (step.state) {
              case (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).RE_SPINE:
                // ... re-spin 邏輯
                await this.beforeProcessReSpinRound(step);
                this.processRound(step.state, step.data);
                break;

              case (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).FREE_GAME:
                // ... FG 邏輯
                await this.beforeProcessFGRound(step);
                this.processRound(step.state, step.data);
                break;
              //--第一筆資料就被取走了,所以這邊是不可能進到case:NORMAL
              //--若之後如果要在 timeline 尾端塞 NORMAL 當終止步，就會走到這裡(目前沒有)

              default:
                console.warn('[GameViewManager] Unknown GameState:', step.state);
                this.finalizeToNormal(); // 視情況做降級處理
                //this.changeGameMode(GameState.NORMAL);
                //this.processRound(GameState.NORMAL, step.data);

                break;
            }
          } else {
            //--結束
            this.finalizeToNormal();
          }
        }

        async finalizeToNormal() {
          await this.beforeProcessNormalRound();
          this.processNormalRound();
        }

        prepareForNextFGandReSpin() {
          //--準備下一個FG或ReSpin的資料
          return null;
        } //--已經是新round的資料了


        beforeProcessReSpinRound(value) {
          //--處理ReSpin之前要做的事
          //---例如:擷取資料之類的
          return Promise.resolve();
        } //--結束該round資料前處理.準備跟Server要下一round的資料


        beforeProcessNormalRound() {
          //--處理回到Normal(整把結束FG->NG要資料)之前要做的事
          //---例如:擷取資料之類的
          return Promise.resolve();
        } //--已經是新round的資料了


        beforeProcessFGRound(value) {
          //--處理FG之前要做的事
          //---例如:擷取資料之類的
          return Promise.resolve();
        } //============================== 回合處理(after stopRoll) =================
        //============================== 分數相關資料處理 ==========================


        calculateTotalWinScore() {
          //---計算這一輪的總分---
          const roundScore = this._processedServerData.getThisRoundTotalWinScore();

          return roundScore;
        }

        createWinScoreData() {
          const thisRoundBetInfo = this._processedServerData.getRoundBetAndOdds();

          return {
            baseOdds: 0,
            // 待刪除
            totalOdd: thisRoundBetInfo.odds,
            //--裡面的資料如果是fg的話,他已經是乘上倍率的值(每一輪)
            betValue: thisRoundBetInfo.betValue,
            multiplier: null //--有的話自己接出來時做

          };
        } //============================== 分數相關資料處理 ==========================
        //============================== other ====================================


        async addTweenDelay(time) {
          let t = time;

          if (!time) {
            t = 0;
          }

          const delay = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).DeferByTweenPromiseWithCancel(t);
          this._delayTweenCancel = delay.cancel;
          await delay.promise; // 等待延遲完成

          this._delayTweenCancel = null; // 清掉
        } //============================== other ====================================
        //======testMode 狀態 ========


        testHideIcon(reelIndex, iconIndex) {}

        testAddSymbol(reelIndex, iconIndex) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_slotMachine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class)); //--擁有購買FG功能的遊戲流程管理器


      _export("BasicSlotWithBuyFG", BasicSlotWithBuyFG = class BasicSlotWithBuyFG extends BasicSlotGameViewManager {
        constructor(...args) {
          super(...args);
          this.isBuyFG = void 0;
        } //---是否購買FG的狀態


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b64fed4429411cd3a99d963da6820e381f8eb6eb.js.map