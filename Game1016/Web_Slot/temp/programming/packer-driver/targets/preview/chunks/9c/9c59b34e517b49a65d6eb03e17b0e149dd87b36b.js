System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, BasicGameBoardUI, GameUtilsTools, AnimationStateType, _dec, _class, _crd, ccclass, property, BasicJpUIBoard;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfBasicGameBoardUI(extras) {
    _reporterNs.report("BasicGameBoardUI", "../../../MyUtils/BasicFGUIBoard/BasicGameBoardUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtilsTools(extras) {
    _reporterNs.report("GameUtilsTools", "../../../MyUtils/GameUtilsTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationStateType(extras) {
    _reporterNs.report("AnimationStateType", "../../../ReferencePath", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BasicGameBoardUI = _unresolved_2.BasicGameBoardUI;
    }, function (_unresolved_3) {
      GameUtilsTools = _unresolved_3.GameUtilsTools;
    }, function (_unresolved_4) {
      AnimationStateType = _unresolved_4.AnimationStateType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d7791tu4zZFe6kCx9ZEdH0L", "BasicJpUIBoard", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'CCFloat']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BasicJpUIBoard", BasicJpUIBoard = (_dec = ccclass('BasicJpUIBoard'), _dec(_class = class BasicJpUIBoard extends (_crd && BasicGameBoardUI === void 0 ? (_reportPossibleCrUseOfBasicGameBoardUI({
        error: Error()
      }), BasicGameBoardUI) : BasicGameBoardUI) {
        constructor() {
          super(...arguments);
          //延遲動畫取消函式(for 延遲中斷時,阻斷tweenPromise resolve)
          this._resolveDelayOnCancel = void 0;
          this._isClosing = false;
          this._closeRequested = false;
          this._closeOncePromise = null;
          this._closingPromise = null;
          this._isInLoop = false;
          //--標記動畫啟動loop states
          this._isInLoopStage = false;
          //--標記是否進入loop流程-20251231(只是不甩節奏表再改回原本的方式)
          this._loopOncePromise = null;
          this._isGoIn = false;
          this._firstClickAborted = false;

          /*
          @property({ type: CCFloat, visible: true, displayName: '大獎Loop動畫時間', tooltip: '大獎Loop動畫時間' })
          protected _jackpotLoopDuration: number = 0;
          */
          this._jackpotLoopDuration = 0;
          //--loop time
          this._fastLoopDuration = 0;
          //--快速loop時間
          //--退場是0.5s
          this._jackpotInterruptEndTime = 0;
        }

        //--阻斷後移動到的末端時間點
        // ==================== Getter 方法 ====================
        get isGoIn() {
          return this._isGoIn;
        }

        get isInLoop() {
          return this._isInLoop;
        }

        get isInLoopStage() {
          return this._isInLoopStage;
        }

        get isClosing() {
          return this._isClosing;
        }

        get closeRequested() {
          return this._closeRequested;
        } // ==================== Setter 方法 ====================


        set fastLoopDuration(value) {
          this._fastLoopDuration = value;
        }

        get fastLoopDuration() {
          return this._fastLoopDuration;
        }

        set jackpotLoopDuration(value) {
          this._jackpotLoopDuration = value;
        }

        get jackpotLoopDuration() {
          return this._jackpotLoopDuration;
        }

        set jackpotInterruptEndTime(value) {
          this._jackpotInterruptEndTime = value;
        }

        get jackpotInterruptEndTime() {
          return this._jackpotInterruptEndTime;
        }

        openUIBoard(value) {
          var _this = this;

          return _asyncToGenerator(function* () {
            // 重置關閉狀態
            _this._closeRequested = false;
            _this._closeOncePromise = null;
            _this._loopOncePromise = null;
            _this._isGoIn = true;
            _this._isInLoop = false;
            _this._isInLoopStage = false;
            _this._firstClickAborted = false;
            _this.node.active = true; //this.openBtnActive();

            var playKey = (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
              error: Error()
            }), AnimationStateType) : AnimationStateType).In;
            yield _this.playBoardIn(value, {
              aniState: playKey
            });
            _this._isGoIn = false;

            if (_this._closeRequested || _this._isClosing) {
              yield _this.requestCloseOnce();
              return;
            }

            var playLoopKey = (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
              error: Error()
            }), AnimationStateType) : AnimationStateType).Loop; // 正常進入 loop，但不自動關閉

            _this._isInLoop = true; //--PS此時的 _isInLoopStage尚未改變尚未進入LOOP階段

            var loopP = _this.setPlayPromise({
              aniState: playLoopKey
            });

            void loopP.catch(err => _this.logLoopPlayReject(err, (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
              error: Error()
            }), AnimationStateType) : AnimationStateType).Loop)); // 正常路徑：切入 Loop、等計時、然後一次性關閉
            //await this.ensureLoopThenClose(playLoopKey);
          })();
        } // 新增方法：等待 Loop 阶段

        /**
         * 20251231-NEW-等待進入Loop階段
         * @param loopDurationTime loop time
         */


        waitLoopDuration(loopDurationTime) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            _this2._isInLoopStage = true;
            var delay = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
              error: Error()
            }), GameUtilsTools) : GameUtilsTools).DeferByTweenPromiseWithCancel(loopDurationTime);
            _this2._resolveDelayOnCancel = delay.forceCancelAndResolve;

            try {
              yield delay.promise;
            } finally {
              _this2._resolveDelayOnCancel = undefined; // Loop end

              _this2._isInLoopStage = false;
            }
          })();
        }

        goLoopAndClose() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            /**
             *---20251231-直接給ensureLoopThenClose處理-不然這邊會關掉又在ensureLoopThenClose播放一次 
             */

            /*
            if (!this._isInLoop) {
                this.cancelBoardAni(false);
                this._isGoIn = false;
                this._isInLoop = true;
                const loopP = this.setPlayPromise({ aniState: AnimationStateType.Loop });
                void loopP.catch((err) => this.logLoopPlayReject(err, AnimationStateType.Loop));
            }*/
            // loop → out
            yield _this3.ensureLoopThenClose((_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
              error: Error()
            }), AnimationStateType) : AnimationStateType).Loop);
          })();
        } //--old click process


        onClickDuringJpAni() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            _this4.forceCancelLoopDelay(); // 先取消舊的計時（避免重疊）


            if (_this4._isGoIn || _this4._isInLoop) {
              // In 階段點擊 → 強切 loop，然後等計時 → out
              // Loop 階段點擊 → 重新進行 loop 計時 → out
              var playLoopKey = (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                error: Error()
              }), AnimationStateType) : AnimationStateType).Loop;
              yield _this4.ensureLoopThenClose(playLoopKey);
            } else {
              // 已經在 out 中或已關閉 → 等待共用的 close
              yield _this4.requestCloseOnce();
            }
          })();
        }

        onClickForceOutJpAni() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            _this5.forceCancelLoopDelay();

            if (_this5._isGoIn && !_this5._isInLoopStage) {
              //GameUtilsTools.debugLog('BasicJpUIBoard', '[Click] Case1: In → Loop → Out');
              _this5._firstClickAborted = false;

              _this5.cancelBoardAni(false);

              _this5._isGoIn = false;
              _this5._isInLoop = true;

              var loopP = _this5.setPlayPromise({
                aniState: (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                  error: Error()
                }), AnimationStateType) : AnimationStateType).Loop
              });

              void loopP.catch(err => _this5.logLoopPlayReject(err, (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                error: Error()
              }), AnimationStateType) : AnimationStateType).Loop));
              _this5._isInLoopStage = true;
              var loopDelay = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
                error: Error()
              }), GameUtilsTools) : GameUtilsTools).DeferByTweenPromiseWithCancel(_this5._jackpotLoopDuration);
              _this5._resolveDelayOnCancel = loopDelay.forceCancelAndResolve;

              try {
                yield loopDelay.promise;
              } finally {
                _this5._resolveDelayOnCancel = undefined;
                _this5._isInLoopStage = false;
              }

              if (_this5._firstClickAborted) {
                //GameUtilsTools.debugLog('BasicJpUIBoard', '[Click] Case1 aborted');
                return;
              }

              _this5.cancelBoardAni(false);

              yield _this5.requestCloseOnce();
              return;
            } // === 情况 2: 跑分期間click ===


            if (_this5._isInLoop && !_this5._isInLoopStage) {
              //GameUtilsTools.debugLog('BasicJpUIBoard', '[Click] Case2: RunScore → Loop → Out');
              _this5._firstClickAborted = false;
              _this5._isInLoopStage = true;

              var _loopDelay = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
                error: Error()
              }), GameUtilsTools) : GameUtilsTools).DeferByTweenPromiseWithCancel(_this5._jackpotLoopDuration);

              _this5._resolveDelayOnCancel = _loopDelay.forceCancelAndResolve;

              try {
                yield _loopDelay.promise;
              } finally {
                _this5._resolveDelayOnCancel = undefined;
                _this5._isInLoopStage = false;
              }

              if (_this5._firstClickAborted) {
                //GameUtilsTools.debugLog('BasicJpUIBoard', '[Click] Case2 aborted after delay');
                return;
              }

              _this5.cancelBoardAni(false);

              if (_this5._firstClickAborted) {
                //GameUtilsTools.debugLog('BasicJpUIBoard', '[Click] Case2 aborted before requestClose');
                return;
              }

              yield _this5.requestCloseOnce();
              return;
            } // === 情况 3:LOOP-click ===


            if (_this5._isInLoop && _this5._isInLoopStage) {
              //GameUtilsTools.debugLog('BasicJpUIBoard', '[Click] Case3: Second Click → Force Out');
              _this5._firstClickAborted = true; // 取消第一次click的延遲

              _this5.forceCancelLoopDelay(); //等第一次的click結束


              yield Promise.resolve(); // 清空舊的 _closeOncePromise，強制重新創建

              _this5._closeOncePromise = null;
              _this5._closeRequested = false; // 取消 Loop 動畫

              _this5.cancelBoardAni(false); // 重置狀態


              _this5._isInLoop = false;
              _this5._isInLoopStage = false; // 直接調用 closeBoard()，重新播放 Out 動畫

              yield _this5.closeBoard();
              return;
            } //GameUtilsTools.debugLog('BasicJpUIBoard', '[Click] Case4: Other → Close');


            yield _this5.requestCloseOnce();
          })();
        }

        forceOutBoard() {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            _this6.forceCancelLoopDelay();

            if (_this6._isGoIn || _this6._isInLoop) {
              yield _this6.requestCloseOnce();
            } else if (!_this6._isClosing) {
              // 如果已經在關閉中就共用 closingPromise
              yield _this6.closeBoard();
            } else if (_this6._isClosing) {
              yield _this6._closingPromise;
              return;
            }
          })();
        }

        closeBoard() {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            _this7._closeRequested = true;
            if (_this7._isClosing) return _this7._closingPromise; //this.closeBtnActive();

            _this7.forceCancelLoopDelay();

            var playKey = (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
              error: Error()
            }), AnimationStateType) : AnimationStateType).Out;
            _this7._isClosing = true;
            _this7._closingPromise = _this7.playBoardOut(playKey).finally(() => {
              _this7.node.active = false;
              _this7._isClosing = false;
              _this7._closeRequested = false;
              _this7._closingPromise = null;
              _this7._isInLoop = false;
              _this7._isInLoopStage = false;
              _this7._isGoIn = false;
              _this7._firstClickAborted = false;
            });
            return _this7._closingPromise;
          })();
        }

        forceCancelLoopDelay() {
          var _this$_resolveDelayOn;

          (_this$_resolveDelayOn = this._resolveDelayOnCancel) == null || _this$_resolveDelayOn.call(this);
          this._resolveDelayOnCancel = undefined;
        }

        setLoopTimeStep() {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            var time = _this8._jackpotLoopDuration;
            var delay = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
              error: Error()
            }), GameUtilsTools) : GameUtilsTools).DeferByTweenPromiseWithCancel(time);
            _this8._resolveDelayOnCancel = delay.forceCancelAndResolve;

            try {
              yield delay.promise; // 等待延遲完成
            } finally {
              _this8._resolveDelayOnCancel = undefined; // 清掉
            }
          })();
        }

        requestCloseOnce() {
          /*
          this._closeRequested = true;
          if (this._closeOncePromise) return this._closeOncePromise;
          */
          if (this._firstClickAborted) {
            //GameUtilsTools.debugLog('BasicJpUIBoard', '[requestCloseOnce] Aborted, return empty promise');
            return Promise.resolve();
          }

          this._closeRequested = true;

          if (this._closeOncePromise) {
            //GameUtilsTools.debugLog('BasicJpUIBoard', '[requestCloseOnce] Reuse existing promise');
            return this._closeOncePromise;
          }

          this._closeOncePromise = this.closeBoard().finally(() => {
            this._closeRequested = false;
            this._closeOncePromise = null;
          });
          return this._closeOncePromise;
        }

        ensureLoopThenClose(playLoopKey) {
          var _this9 = this;

          if (this._loopOncePromise) return this._loopOncePromise; // 若有要求關閉或正在關閉 → 不再啟 Loop，直接加入那次關閉

          if (this._closeRequested || this._isClosing) return this.requestCloseOnce();
          this._loopOncePromise = _asyncToGenerator(function* () {
            if (!_this9._isInLoop) {
              // 不是在loop中，先切loop
              // 取消當前(In)動畫，切 Loop（非阻塞播放）
              _this9.cancelBoardAni(false); // 中斷 In


              _this9._isGoIn = false; // 中斷後到啟動前<再檢查一次>是否有人要求關閉

              if (_this9._closeRequested || _this9._isClosing) {
                yield _this9.requestCloseOnce();
                return;
              }

              _this9._isInLoop = true; // 啟動 Loop，不 await

              var loopP = _this9.setPlayPromise({
                aniState: playLoopKey
              });

              void loopP.catch(err => _this9.logLoopPlayReject(err, playLoopKey));
            } // 啟動延遲前<再檢查一次>：若已要求關閉，就不要開延遲


            if (_this9._closeRequested || _this9._isClosing) {
              yield _this9.requestCloseOnce();
              return;
            }

            yield _this9.setLoopTimeStep(); // 2 等待可强制取消的计时
            //停止 Loop ,讓loop播放完不要直接應切到out

            _this9.cancelBoardAni(false);

            yield _this9.requestCloseOnce(); // 4 计时完成 → 一次性关闭
          })().finally(() => {
            this._isInLoop = false;
            this._isInLoopStage = false;
            this._loopOncePromise = null;
          });
          return this._loopOncePromise;
        } //=============<debug log>===================================================
        // 判斷是不是「可預期的取消」


        isLikelyCancel(err) {
          var _this$_abort$signal$a, _this$_abort, _message, _name, _this$_abort2;

          if (!err) return (_this$_abort$signal$a = (_this$_abort = this._abort) == null || (_this$_abort = _this$_abort.signal) == null ? void 0 : _this$_abort.aborted) != null ? _this$_abort$signal$a : false;
          var msg = (_message = err == null ? void 0 : err.message) != null ? _message : String(err);
          var name = (_name = err == null ? void 0 : err.name) != null ? _name : '';
          return ((_this$_abort2 = this._abort) == null || (_this$_abort2 = _this$_abort2.signal) == null ? void 0 : _this$_abort2.aborted) === true || /abort|cancell?ed|stopped|interrupted/i.test(msg) || /AbortError|CanceledError/i.test(name);
        } // 播放 promise 的拒絕資訊


        logLoopPlayReject(err, playLoopKey) {
          var _this$_abort$signal$a2, _this$_abort3;

          var snapshot = {
            playLoopKey,
            isInLoop: this._isInLoop,
            isClosing: this._isClosing,
            closeRequested: this._closeRequested,
            abortedSignal: (_this$_abort$signal$a2 = (_this$_abort3 = this._abort) == null || (_this$_abort3 = _this$_abort3.signal) == null ? void 0 : _this$_abort3.aborted) != null ? _this$_abort$signal$a2 : false,
            ts: Date.now()
          };

          if (this.isLikelyCancel(err)) {
            console.debug('[BoardUI] loop promise rejected (likely cancel)', snapshot, err);
          } else {
            console.warn('[BoardUI] loop promise rejected (UNEXPECTED)', snapshot, err);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9c59b34e517b49a65d6eb03e17b0e149dd87b36b.js.map