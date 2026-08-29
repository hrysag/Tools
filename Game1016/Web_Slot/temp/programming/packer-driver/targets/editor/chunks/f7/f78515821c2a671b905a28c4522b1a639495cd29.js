System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameState, ProcessDataAfterServer, _crd;

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../GameStateConfigDef/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoundStep(extras) {
    _reporterNs.report("RoundStep", "./IBasicProcessServerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIBasicProcessServerData(extras) {
    _reporterNs.report("IBasicProcessServerData", "./IBasicProcessServerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProcessSlotData(extras) {
    _reporterNs.report("IProcessSlotData", "./IProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicProcessSlotData(extras) {
    _reporterNs.report("BasicProcessSlotData", "./IProcessSlotData", _context.meta, extras);
  }

  _export("ProcessDataAfterServer", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GameState = _unresolved_2.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e217b6X0FJD054obpoIuOV1", "ProcessDataAfterServer", undefined);

      _export("ProcessDataAfterServer", ProcessDataAfterServer = class ProcessDataAfterServer {
        constructor() {
          this._server = null;
          this._timeline = [];
          this._roundIdx = -1;
          // 指向目前 round（-1 表示尚未開始）
          this._pendingStopIdx = -1;
          // 給 stop 按鈕用（記住 startSpin 當下的索引<原本的temporary要拿的>）
          //private _currentStep: RoundStep | null = null;
          this._firstIndexByState = new Map();
          this._lastIndexByState = new Map();
          this._countByState = new Map();
          this._orderInStateByIndex = [];
        }

        get length() {
          return this._timeline.length;
        }

        get hasNext() {
          return this._roundIdx + 1 < this._timeline.length;
        }

        get hasPrev() {
          return this._roundIdx - 1 >= 0;
        }

        recomputeStateCaches() {
          this._firstIndexByState.clear();

          this._lastIndexByState.clear();

          this._countByState.clear();

          this._orderInStateByIndex = new Array(this._timeline.length);
          const seen = new Map();

          for (let i = 0; i < this._timeline.length; i++) {
            var _seen$get;

            const st = this._timeline[i].state;
            if (!this._firstIndexByState.has(st)) this._firstIndexByState.set(st, i);

            this._lastIndexByState.set(st, i);

            const ord = ((_seen$get = seen.get(st)) != null ? _seen$get : 0) + 1;
            seen.set(st, ord);
            this._orderInStateByIndex[i] = ord;

            this._countByState.set(st, ord);
          }
        }

        isFirstOfCurrentState() {
          const step = this.getCurrentStep();
          if (!step) return false;

          const first = this._firstIndexByState.get(step.state);

          return first !== undefined && first === this._roundIdx;
        }

        isFirstReSpin() {
          if (this.getCurrentState() !== (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).RE_SPINE) return false;

          const first = this._firstIndexByState.get((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).RE_SPINE);

          return first !== undefined && first === this._roundIdx;
        }

        isFirstFreeGame() {
          if (this.getCurrentState() !== (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME) return false;

          const first = this._firstIndexByState.get((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME);

          return first !== undefined && first === this._roundIdx;
        }

        getOrderInCurrentState() {
          var _this$_orderInStateBy;

          if (this._roundIdx < 0 || this._roundIdx >= this._orderInStateByIndex.length) return 0;
          return (_this$_orderInStateBy = this._orderInStateByIndex[this._roundIdx]) != null ? _this$_orderInStateBy : 0;
        }

        getTotalCountOfState(state) {
          var _this$_countByState$g;

          return (_this$_countByState$g = this._countByState.get(state)) != null ? _this$_countByState$g : 0;
        }

        getReSpinTotalCount() {
          return this.getTotalCountOfState((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).RE_SPINE);
        }

        getFreeGameTotalCount() {
          return this.getTotalCountOfState((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME);
        }

        isLastOfCurrentState() {
          const step = this.getCurrentStep();
          if (!step) return false;

          const last = this._lastIndexByState.get(step.state);

          return last !== undefined && last === this._roundIdx;
        }

        buildTimeline(server) {
          const steps = []; // NG 一定是第一筆

          if (server != null && server.ngReelInfo) {
            steps.push({
              state: (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).NORMAL,
              data: server.ngReelInfo
            });
          } // reSpin


          if (Array.isArray(server == null ? void 0 : server.reSpinReelInfo)) {
            for (let i = 0; i < server.reSpinReelInfo.length; i++) {
              const r = server.reSpinReelInfo[i];
              steps.push({
                state: (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                  error: Error()
                }), GameState) : GameState).RE_SPINE,
                data: r
              });
            }
          } // FG


          if (Array.isArray(server == null ? void 0 : server.freeGameReelInfo)) {
            for (let j = 0; j < server.freeGameReelInfo.length; j++) {
              const f = server.freeGameReelInfo[j];
              steps.push({
                state: (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                  error: Error()
                }), GameState) : GameState).FREE_GAME,
                data: f
              });
            }
          }

          return steps;
        }

        getNextStepGameState() {
          if (!this.hasNext) return null;
          return this._timeline[this._roundIdx + 1].state;
        }

        checkHasNextState(state) {
          return this.getNextStepGameState() === state;
        } //--考慮一下要不要對外可見


        peekNextStep() {
          if (!this.hasNext) return null;
          return this._timeline[this._roundIdx + 1];
        }

        hasUpcomingState(state) {
          for (let i = this._roundIdx + 1; i < this._timeline.length; i++) {
            if (this._timeline[i].state === state) return true;
          }

          return false;
        } // 目前這步（沒有就回 null）


        getCurrentStep() {
          const i = this._roundIdx;
          let currentStep = null;

          if (i >= 0 && i < this._timeline.length) {
            currentStep = this._timeline[i];
          }

          return currentStep;
        }

        getCurrentData() {
          var _this$getCurrentStep$, _this$getCurrentStep;

          return (_this$getCurrentStep$ = (_this$getCurrentStep = this.getCurrentStep()) == null ? void 0 : _this$getCurrentStep.data) != null ? _this$getCurrentStep$ : null;
        }

        getCurrentState() {
          var _this$getCurrentStep$2, _this$getCurrentStep2;

          return (_this$getCurrentStep$2 = (_this$getCurrentStep2 = this.getCurrentStep()) == null ? void 0 : _this$getCurrentStep2.state) != null ? _this$getCurrentStep$2 : null;
        }

        getPrevData() {
          var _this$getPrevStep$dat, _this$getPrevStep;

          return (_this$getPrevStep$dat = (_this$getPrevStep = this.getPrevStep()) == null ? void 0 : _this$getPrevStep.data) != null ? _this$getPrevStep$dat : null;
        }

        getPrevState() {
          // 先取得前一步的 RoundStep 物件
          const prevStep = this.getPrevStep();
          return prevStep ? prevStep.state : null;
        }

        getPrevStep() {
          if (!this.hasPrev) return null;
          return this._timeline[this._roundIdx - 1];
        } // 給 Stop 按鈕使用：優先用 pending 索引，沒有就用現在的 round 索引


        getCurrentStepForClick() {
          const i = this._pendingStopIdx >= 0 ? this._pendingStopIdx : this._roundIdx;
          let step = null;

          if (i >= 0 && i < this._timeline.length) {
            step = this._timeline[i];
          }

          return step;
        } // 是否最後一步（用來取代「看 reSpin/freeGame 陣列還剩多少」）


        getIsLastStep() {
          if (this._timeline.length > 0 && this._roundIdx === this._timeline.length - 1) {
            return true;
          }

          return false;
        }

        setRoundIdx() {
          if (this._roundIdx + 1 < this._timeline.length) {
            this._roundIdx++;
            return true;
          }

          return false;
        } //--每次spin都會呼叫,用來記錄這一局的索引,之後 stop 可用


        setSpinIndexForTemporary() {
          this._pendingStopIdx = this._roundIdx;
        } // stop 完成後清掉，避免殘留


        clearPendingStopIndex() {
          this._pendingStopIdx = -1;
        }

        setServerReceiveData(data) {
          // 重置顯示&旗標
          // 存 server、不變資料化
          this._server = data != null ? data : null;
          this._timeline = this._server ? this.buildTimeline(this._server) : [];
          this._roundIdx = this._timeline.length > 0 ? 0 : -1; // 指到 NG（或空）

          this._pendingStopIdx = -1;
          this.recomputeStateCaches(); //this._isThisRound = true;
          //this._startGetScoreInThisRound = false;
        }

        getThisRoundTotalWinScore() {
          if (!this._server) return 0;
          const currentData = this.getCurrentData();
          let totalWinScore = 0;

          if (currentData) {
            totalWinScore = (currentData.totalOdd * this._server.betValue).fixed();
          }

          return totalWinScore;
        }

        getRoundBetAndOdds() {
          let roundBetAndOdds = {
            betValue: 0,
            odds: 0
          };

          if (this._server) {
            const currentData = this.getCurrentData();
            const odds = currentData ? currentData.totalOdd : 0;
            roundBetAndOdds.betValue = this._server.betValue;
            roundBetAndOdds.odds = odds;
          }

          return roundBetAndOdds;
        }

        getRoundBet() {
          return this._server ? this._server.betValue : 0;
        }

        getCurrentBet() {
          return this._server.betValue;
        }

        getReSpinRoundTotalScoreFixed() {
          if (!this._server) return 0;
          return (this._server.totalOddsForReSpin * this._server.betValue).fixed();
        }

        getFGRoundTotalScoreFixed() {
          if (!this._server) return 0;
          return (this._server.totalOddsForFG * this._server.betValue).fixed();
        }

        getAllRoundTotalScoreFixed() {
          if (!this._server) return 0; // fixed() 是原型擴充
          // @ts-ignore

          return (this._server.allRoundOdds * this._server.betValue).fixed();
        }

        getALLRoundTotalScoreAndBetFixed() {
          if (!this._server) return {
            betValue: 0,
            odds: 0,
            score: 0
          };

          const score = (this._server.allRoundOdds * this._server.betValue).fixed();

          return {
            betValue: this._server.betValue,
            odds: this._server.allRoundOdds,
            score: score
          };
        }

        getReSpinRoundTotalScoreAndBetFixed() {
          if (!this._server) return {
            betValue: 0,
            odds: 0,
            score: 0
          };

          const score = (this._server.totalOddsForReSpin * this._server.betValue).fixed();

          return {
            betValue: this._server.betValue,
            odds: this._server.totalOddsForReSpin,
            score: score
          };
        }

        getFGRoundTotalScoreAndBetFixed() {
          if (!this._server) return {
            betValue: 0,
            odds: 0,
            score: 0
          };

          const score = (this._server.totalOddsForFG * this._server.betValue).fixed();

          return {
            betValue: this._server.betValue,
            odds: this._server.totalOddsForFG,
            score: score
          };
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f78515821c2a671b905a28c4522b1a639495cd29.js.map