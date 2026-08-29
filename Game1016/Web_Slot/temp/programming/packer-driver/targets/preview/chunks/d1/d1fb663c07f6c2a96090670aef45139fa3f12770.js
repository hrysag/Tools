System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AnimationNodesControllerBase, NotifyCation, GameViewEvents, NotifySubject, ShowBottomTextStatus, GameUtilsTools, DYN_NODE_PROPERTIES, AsyncScope, FlowAbortManager, BasicShowResultProcessKey, BasicShowAniProcess, _crd, DEBUG_TITLE, DEBUG_TITLE2, ShowFlowKeyGroups, ProcessConditions;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfIBasicShowAniProcess(extras) {
    _reporterNs.report("IBasicShowAniProcess", "./IBasicShowAniProcess", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationNodesControllerBase(extras) {
    _reporterNs.report("AnimationNodesControllerBase", "../AnimationSystemV2/AnimationNodesControllerBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGameMode(extras) {
    _reporterNs.report("IGameMode", "../BasicGameViewManager/IBasicGameModeManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../GameStateConfigDef/GameStateConfigDef", _context.meta, extras);
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

  function _reportPossibleCrUseOfShowBottomTextStatus(extras) {
    _reporterNs.report("ShowBottomTextStatus", "../GameStateConfigDef/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtilsTools(extras) {
    _reporterNs.report("GameUtilsTools", "../GameUtilsTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDYN_NODE_PROPERTIES(extras) {
    _reporterNs.report("DYN_NODE_PROPERTIES", "../AnimationSystemV2/ReferencePathForAnimationSysV2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAsyncScope(extras) {
    _reporterNs.report("AsyncScope", "../AsyncScope/AsyncScope", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFlowAbortManager(extras) {
    _reporterNs.report("FlowAbortManager", "../AsyncScope/FlowAbortManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicShowResultProcessKey(extras) {
    _reporterNs.report("BasicShowResultProcessKey", "../AsyncScope/Definitions/BasicGameFlowProcessKey", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIShowResultProcessKey(extras) {
    _reporterNs.report("IShowResultProcessKey", "../AsyncScope/Definitions/IFlowProcessKeys", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicGameStepDelayTime(extras) {
    _reporterNs.report("BasicGameStepDelayTime", "../BasicStepDelayTimeList/BasicGameStepDelayTime", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAsyncProcess(extras) {
    _reporterNs.report("IAsyncProcess", "../AsyncScope/Definitions/IAsyncProcess", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFlowProcess(extras) {
    _reporterNs.report("IFlowProcess", "../AsyncScope/Definitions/IFlowProcess", _context.meta, extras);
  }

  _export("BasicShowAniProcess", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      AnimationNodesControllerBase = _unresolved_2.AnimationNodesControllerBase;
    }, function (_unresolved_3) {
      NotifyCation = _unresolved_3.NotifyCation;
    }, function (_unresolved_4) {
      GameViewEvents = _unresolved_4.GameViewEvents;
      NotifySubject = _unresolved_4.NotifySubject;
    }, function (_unresolved_5) {
      ShowBottomTextStatus = _unresolved_5.ShowBottomTextStatus;
    }, function (_unresolved_6) {
      GameUtilsTools = _unresolved_6.GameUtilsTools;
    }, function (_unresolved_7) {
      DYN_NODE_PROPERTIES = _unresolved_7.DYN_NODE_PROPERTIES;
    }, function (_unresolved_8) {
      AsyncScope = _unresolved_8.AsyncScope;
    }, function (_unresolved_9) {
      FlowAbortManager = _unresolved_9.FlowAbortManager;
    }, function (_unresolved_10) {
      BasicShowResultProcessKey = _unresolved_10.BasicShowResultProcessKey;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7608eRWwZEiJxjplyZTvKF", "BasicShowAniProcess", undefined);

      __checkObsolete__(['Node']);

      //--要在繼承AnimationNodesControllerBase的類別中實作這個介面
      _export("DEBUG_TITLE", DEBUG_TITLE = 'BasicShowAniProcess');

      _export("DEBUG_TITLE2", DEBUG_TITLE2 = 'BasicShowAniProcess_debug'); //--這邊作抽象流程控制,上面透過繼承和加入轉接器的介面來實作

      /**
       * T=IMatchInfoForRound
       * W=WinScoreData
       * P=IProcessInput
       */


      //--流程群組的key
      _export("ShowFlowKeyGroups", ShowFlowKeyGroups = /*#__PURE__*/function (ShowFlowKeyGroups) {
        ShowFlowKeyGroups["PASS_SEQUENCE"] = "PASS_SEQUENCE";
        ShowFlowKeyGroups["RUN_SHOW_PROCESS"] = "RUN_SHOW_PROCESS";
        ShowFlowKeyGroups["TEST"] = "TEST";
        return ShowFlowKeyGroups;
      }({})); //--流程中會用到的條件key


      _export("ProcessConditions", ProcessConditions = /*#__PURE__*/function (ProcessConditions) {
        ProcessConditions["IS_PASS_SEQUENCE"] = "IS_PASS_SEQUENCE";
        ProcessConditions["IS_BIG_WIN"] = "IS_BIG_WIN";
        ProcessConditions["IS_SHOW_WIN"] = "IS_SHOW_WIN";
        return ProcessConditions;
      }({}));

      _export("BasicShowAniProcess", BasicShowAniProcess = class BasicShowAniProcess extends AnimationNodesControllerBase {
        //--前一輪是否得分(節奏企劃78的需求)
        constructor() {
          super();
          this._arySortLayerSymbol = [];
          this._async = void 0;
          //--註冊管理使用promise/delayTime工具       
          this._abortPlaySequence = false;
          // 是否中止播放序列
          this._scoreData = void 0;
          // 當前得分資料
          this._linesData = [];
          // 當前中線資料
          this._gameStepDelayTimeList = void 0;
          // 遊戲步驟延遲時間列表
          this._flowMgr = void 0;
          // FlowAbortManager 
          //--基礎流程keyMap
          this._flowKeys = void 0;
          this._processTimeCount = new Map();
          this._mapInterruptProcess = new Map();
          this._cloneScoreData = null;
          this._previousHasWin = false;

          //===================  流程 Abort 管理 ===================
          //==================interface<IAsyncProcess>========================
          this.onFlowAbortCallback = flowKey => {
            //GameUtilsTools.debugLog('BasicShowAniProcess', `[AbortCallback] 流程 ${flowKey} 被中止`);
            if (this._mapInterruptProcess.has(flowKey)) {
              this._mapInterruptProcess.set(flowKey, true);
            }

            if (flowKey === 'RunShowProcess') this._abortPlaySequence = true;
          };

          //--註冊取消的函示
          this.onCancelAsync = label => {//GameUtilsTools.debugLog(DEBUG_TITLE, `[onCancel] 取消函式被呼叫`, { label });
          };

          /** 
           * 延遲動畫取消函式(for 延遲中斷時,阻斷tweenPromise resolve)
           * --這個是不會注入asyncScope的,要自己管理(不受asyncScope影響)
           */
          this._delayTweenCancel = void 0;

          /** promise resolve 函式**/
          this._resolvePromise = void 0;
        } //-註冊時間計時器


        registerTimeCount(tK) {
          if (!this._processTimeCount.has(tK)) {
            this._processTimeCount.set(tK, {
              time: 0,
              end: false
            });
          }
        }

        removeTimeCount(tK) {
          if (this._processTimeCount.has(tK)) {
            this._processTimeCount.delete(tK);
          }
        }

        startTimeCount(tK) {
          if (this._processTimeCount.has(tK)) {
            this._processTimeCount.set(tK, {
              time: Date.now(),
              end: false
            });
          }
        }

        endTimeCount(tK) {
          if (this._processTimeCount.has(tK)) {
            var target = this._processTimeCount.get(tK);

            if (target.time && target.time > 0 && !target.end) {
              var duration = Date.now() - target.time;

              this._processTimeCount.set(tK, {
                time: duration,
                end: true
              });

              return duration;
            } else if (target.time && target.time > 0 && target.end) {
              return target.time;
            }
          }

          return null;
        }

        handleFlowAbort(flowKey) {
          switch (flowKey) {
            case 'RunShowProcess':
              this._abortPlaySequence = true; //GameUtilsTools.debugLog(DEBUG_TITLE, `[HandleAbort] RunShowProcess 被中止`);

              break;

            case 'CleanAllPlaying':
              //GameUtilsTools.debugLog(DEBUG_TITLE, `[HandleAbort] CleanAllPlaying 被中止`);
              break;

            default: //GameUtilsTools.debugLog(DEBUG_TITLE, `[HandleAbort] 未知流程中止`, { flowKey });

          }
        } //==================interface<IFlowProcess>========================

        /**
         * <目前先擱置>
         * override 你可以自己定義要註冊的流程關鍵字群組
         * TIPS:
         * 這裡是定義「流程群組」的地方
         * 每個群組內是「多個流程關鍵字」的陣列
         * 每個群組代表一個完整的流程
         * 每個流程內的關鍵字會依序執行
         * 你可以各種花式組合
         * e.g:
         * [[ABCD],[ACF]...]=一個流程
         * @returns 
         */


        getFlowKeyGroups(processKey) {
          var defaultProcessGroup = [];

          switch (processKey) {
            case ShowFlowKeyGroups.RUN_SHOW_PROCESS:
              defaultProcessGroup.push([(_crd && BasicShowResultProcessKey === void 0 ? (_reportPossibleCrUseOfBasicShowResultProcessKey({
                error: Error()
              }), BasicShowResultProcessKey) : BasicShowResultProcessKey).playNoWinInThisRound, (_crd && BasicShowResultProcessKey === void 0 ? (_reportPossibleCrUseOfBasicShowResultProcessKey({
                error: Error()
              }), BasicShowResultProcessKey) : BasicShowResultProcessKey).ShowBigWin, (_crd && BasicShowResultProcessKey === void 0 ? (_reportPossibleCrUseOfBasicShowResultProcessKey({
                error: Error()
              }), BasicShowResultProcessKey) : BasicShowResultProcessKey).PlayWinRound, (_crd && BasicShowResultProcessKey === void 0 ? (_reportPossibleCrUseOfBasicShowResultProcessKey({
                error: Error()
              }), BasicShowResultProcessKey) : BasicShowResultProcessKey).ShowWinScore, (_crd && BasicShowResultProcessKey === void 0 ? (_reportPossibleCrUseOfBasicShowResultProcessKey({
                error: Error()
              }), BasicShowResultProcessKey) : BasicShowResultProcessKey).ShowWinScoreForBottomText, (_crd && BasicShowResultProcessKey === void 0 ? (_reportPossibleCrUseOfBasicShowResultProcessKey({
                error: Error()
              }), BasicShowResultProcessKey) : BasicShowResultProcessKey).ProcessResetAni, (_crd && BasicShowResultProcessKey === void 0 ? (_reportPossibleCrUseOfBasicShowResultProcessKey({
                error: Error()
              }), BasicShowResultProcessKey) : BasicShowResultProcessKey).ProcessBeforePlaySequence]);
              break;
          }

          return defaultProcessGroup;
        } //-建立流程階段陣列--<目前先擱置>


        buildFlowStages(processKey) {
          var stages = [];

          for (var group of this.getFlowKeyGroups(processKey)) {
            for (var key of group) {
              var val = this._flowKeys[key];
              if (val) stages.push(val);
            }
          }

          return stages;
        } //===================interface<IGameMode>===================


        //===================interface<IBasicShowAniProcess>===================
        //--初始化流程
        init() {
          this._async = (_crd && AsyncScope === void 0 ? (_reportPossibleCrUseOfAsyncScope({
            error: Error()
          }), AsyncScope) : AsyncScope).getInstance(); //this._flowMgr = new FlowAbortManager(this._async, this._onFlowAbortCallback);

          this._flowMgr = (_crd && FlowAbortManager === void 0 ? (_reportPossibleCrUseOfFlowAbortManager({
            error: Error()
          }), FlowAbortManager) : FlowAbortManager).getInstance();
          this._flowKeys = _crd && BasicShowResultProcessKey === void 0 ? (_reportPossibleCrUseOfBasicShowResultProcessKey({
            error: Error()
          }), BasicShowResultProcessKey) : BasicShowResultProcessKey;
        }

        cancelAllDelays() {
          var _this$_async;

          (_this$_async = this._async) == null || _this$_async.cancelAll();
        } // 註冊流程其他的系統從這邊初始起來


        /**
         * server資料回來後新一局開始start spin時可以呼叫
         * (這邊可以開始做不同的狀態判斷)
         */
        cleanAllPlayingAniForNewStart() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this._abortPlaySequence = true; // 3) 通用：清 winLines、重置旗標

            _this.stopMultipleSequence(); // 例：this.winLinesGroupData = [];


            _this.stopAndPauseWinAni(); //--強制暫停所有得分動畫


            _this.stopAndHideConnectBoxAni(); //--強制中斷連線中動畫(單純的指線/框的動畫)
            // 4) 通用：取消延遲/timeout、解掉懸掛 promise（base 已提供工具）


            _this.cancelAllDelays == null || _this.cancelAllDelays();
            _this.safeResolve == null || _this.safeResolve(); // 5) 分支：由子類決定「特殊」或「一般」清理

            if (_this.isSpecialCleanupNeededForNewStart()) {
              yield _this.doSpecialCleanupForNewStart();
            } else {
              yield _this.doRegularCleanupForNewStart();
            }
          })();
        } //--重置資料(還在該局內)


        resetRoundData() {
          this._scoreData = null;
          this._linesData = [];

          this._flowMgr.reset();
        } //=====跳過流程=====
        //--跳過目前的流程(包含動畫)


        skipCurrentProcess() {
          //GameUtilsTools.debugLog(DEBUG_TITLE, 'skipCurrentProcess', '手動跳過目前流程');
          this._async.resolveAllPending();

          this.safeResolve();
          this._abortPlaySequence = true;
        } //--重置所有資料(包含該局內的)
        //--在新一局開始前，清除所有正在播放的動畫(尚未交還動畫,只有停止播放)
        //子類決定這回合是否需要「特殊清理」（例：Wild 正在工作）
        //子類實作：特殊清理（例：可移除/關 Wild → 全清 + resetWild）
        //子類實作：一般清理（例：NG/FG → 刪但保留高賠率回 GameIcon）
        //子類實作：強制停止分數/框線等（原本的 _winScore.stopWinScoreAni + 其他）
        //--強制移除所有動畫
        //--強制中斷連線中動畫(單純的指線/框的動畫)


        //--顯示底部文字
        showScoreForBottomText(score) {
          if (score > 0) {
            var evtData = {
              eventType: (_crd && GameViewEvents === void 0 ? (_reportPossibleCrUseOfGameViewEvents({
                error: Error()
              }), GameViewEvents) : GameViewEvents).SET_BOTTOM_TEXT,
              eventData: {
                status: (_crd && ShowBottomTextStatus === void 0 ? (_reportPossibleCrUseOfShowBottomTextStatus({
                  error: Error()
                }), ShowBottomTextStatus) : ShowBottomTextStatus).WIN,
                value: score
              }
            };
            (_crd && NotifyCation === void 0 ? (_reportPossibleCrUseOfNotifyCation({
              error: Error()
            }), NotifyCation) : NotifyCation).getInstance().emitSync((_crd && NotifySubject === void 0 ? (_reportPossibleCrUseOfNotifySubject({
              error: Error()
            }), NotifySubject) : NotifySubject).GAME_VIEW_SUBJECT, evtData.eventType, evtData);
          }
        } //===================interface<IBasicShowAniProcess>===================


        //=====資料處理與交換=====
        beforeProcessWinScoreData(winScoreData, lines) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            //--在處理得分資料前的動作(可修改資料)
            if (winScoreData == null) {//GameUtilsTools.debugLog('BasicShowAniProcess_debug', 'beforeProcessWinScoreData', { winScoreData });
            }

            _this2._cloneScoreData = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
              error: Error()
            }), GameUtilsTools) : GameUtilsTools).deepClone(winScoreData);
            _this2._scoreData = winScoreData;
            _this2._linesData = lines || [];

            _this2.resetWinSore(); //---先解析資料,這樣中斷流程時才好處理


            var checkScoreProcess = _this2.hasWin(winScoreData);

            var bigWinCondition = _this2.checkBigWinCondition(winScoreData);

            if (checkScoreProcess) {
              yield _this2.processWinScoreData(lines); // 處理得分資料
            }

            return {
              hasWin: checkScoreProcess,
              bigWin: bigWinCondition
            };
          })();
        }
        /**外部統一入口,解析得分,T=IMatchInfoForRound */
        //public async runShowProcess(winScoreData?: W, lines?: T[]): Promise<boolean> {


        runShowProcess(showWinFlag) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            //---建立流程
            var flowKey = (_crd && BasicShowResultProcessKey === void 0 ? (_reportPossibleCrUseOfBasicShowResultProcessKey({
              error: Error()
            }), BasicShowResultProcessKey) : BasicShowResultProcessKey).RunShowProcess;

            var passSequence = _this3.checkGoThroughCondition();

            var bigWinCondition = _this3.checkBigWinCondition(_this3._scoreData); //--實際用的
            //@ts-ignore
            //this._scoreData.totalOdd = 210;//--測試用
            //const bigWinCondition = true;
            //--流程計時器開啟


            _this3.registerTimeCount(flowKey);

            _this3.startTimeCount(flowKey);

            if (!showWinFlag) {
              _this3._previousHasWin = false;
              yield _this3.playNoWinInThisRound();
              return false;
            } //==============================<基礎全播流程>===============================================
            // 有得分 → 播放當局得分流程<全播>


            if (bigWinCondition) {
              // === 有大獎 ===
              _this3._previousHasWin = true;
              yield _this3.processBigWin();
            } else {
              _this3._previousHasWin = true;

              var playWinPromise = _this3.playWinInThisRound(_this3._scoreData, _this3._linesData);

              var showScorePromise = _this3.showWinScoreAni(_this3.getTotalScore(_this3._scoreData), true); //-讓兩個都完成


              var testStart = Date.now();
              yield Promise.allSettled([playWinPromise, showScorePromise]);
              var testEnd = Date.now();
              (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
                error: Error()
              }), GameUtilsTools) : GameUtilsTools).debugLog('CHECK_TIME', 'runShowProcess-TIME', {
                msg: '播放得分與顯示得分同時進行',
                time: testEnd - testStart
              });
            } //=======20251118:修改流程結束後的輪播條件=======


            var sequenceFlag = passSequence ? false : true;
            yield _this3.processResetAni();

            _this3.endTimeCount(flowKey);

            _this3.removeTimeCount(flowKey);

            return sequenceFlag;
          })();
        } //--輪播動畫


        playMultipleSequence() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            yield _this4.processBeforePlaySequence();
          })();
        } //--顯示得分動畫


        showWinScoreAni(score, showBottomText) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            //--顯示得分動畫
            if (showBottomText) {
              _this5.showScoreForBottomText(_this5.calculateCurrentRoundOdds(_this5._scoreData));
            }
          })();
        } //--處理大贏動畫的流程


        processBigWin() {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            yield _this6.showBigWinAni(_this6._scoreData);
            yield _this6.playWinInThisRound(_this6._scoreData, _this6._linesData);
          })();
        } //--處理一般贏動畫的流程


        processNormalWin() {
          return _asyncToGenerator(function* () {
            return null;
          })();
        } //--是否直接跳過輪播
        //--輪播前的準備工作(如果是FG就直接resolve,讓外面解鎖開始按鈕)
        //--重置動畫狀態
        //--停止輪播
        //--重置得分
        //--在全秀之後要走的分支
        //--播放wild動畫
        //--播放bonus動畫
        //--顯示大獎動畫
        //--播放垂直的動畫


        //========================<testMode>=====================================
        runTest(value) {} // ==============================
        // ===== 可選擴充的工具方法 =====
        // ==============================

        /** 確保動畫層級排序正確 */

        /**
         *  interface LayerSpec
            {
                level:number,//--排列的順序權
                conditionSymbolGroup:number[]
            }
            按照 level 升序排列，並將符合條件的節點放入對應的層級中。    
         */


        sortAnimationLayer() {
          if (this._arySortLayerSymbol.length > 0) {
            //-按層級降冪排列(level越小,顯示越上面)
            var sortedLayers = [...this._arySortLayerSymbol].sort((a, b) => b.level - a.level);
            var buckets = new Map();

            for (var layer of sortedLayers) {
              buckets.set(layer.level, []);
            }

            for (var item of this._aryRunningNode) {
              var id = item[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId;
              if (id === undefined) continue;

              for (var _layer of sortedLayers) {
                if (_layer.conditionSymbolGroup.includes(id)) {
                  buckets.get(_layer.level).push(item);
                  break;
                }
              }
            }

            var idx = 0;

            for (var _layer2 of sortedLayers) {
              var nodes = buckets.get(_layer2.level);
              if (!nodes) continue;

              for (var n of nodes) {
                n.setSiblingIndex(idx++);
              }
            }
          }
        } //取得總得分，預設從 winScoreData 解析(這一Round的單獨這一把)
        //依照企劃要求不同可以自己決定要秀累計的分數或是單獨這一把的分數


        //檢查是否有得分，預設 >0 即視為中獎 
        hasWin(winScoreData) {
          return this.getTotalScore(winScoreData) > 0;
        }
        /**
         * 取消全部改用 async scope 的 promise
         * @param t 單位:秒
         */


        addTweenDelay(t) {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            var delay = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
              error: Error()
            }), GameUtilsTools) : GameUtilsTools).DeferByTweenPromiseWithCancel(t);
            _this7._delayTweenCancel = delay.cancel;
            yield delay.promise; // 等待延遲完成

            _this7._delayTweenCancel = null; // 清掉
          })();
        }
        /**統一把global promise方法掛進同個地方處理,不要散落一地 */


        setPendingResolve(res) {
          this.safeResolve();
          this._resolvePromise = res;
        }
        /**你懂得.... */


        safeResolve() {
          if (this._resolvePromise) {
            var r = this._resolvePromise;
            this._resolvePromise = undefined;

            try {
              r();
            } catch (_unused) {}
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d1fb663c07f6c2a96090670aef45139fa3f12770.js.map