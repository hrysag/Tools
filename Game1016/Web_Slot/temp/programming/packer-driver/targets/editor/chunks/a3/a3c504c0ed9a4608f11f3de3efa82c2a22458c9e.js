System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, Node, AnimationStateType, AniSysTools, GameUtilsTools, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, DEBUG_TITLE, BasicGameBoardUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIFGBoardUI(extras) {
    _reporterNs.report("IFGBoardUI", "./IFGBoardUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationController(extras) {
    _reporterNs.report("AnimationController", "../AnimationSystemV2/ReferencePathForAnimationSysV2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAnimationControl(extras) {
    _reporterNs.report("IAnimationControl", "../AnimationSystemV2/ReferencePathForAnimationSysV2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationStateType(extras) {
    _reporterNs.report("AnimationStateType", "../AnimationSystemV2/ReferencePathForAnimationSysV2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniCtrlPropDef(extras) {
    _reporterNs.report("AniCtrlPropDef", "../AnimationSystemV2/ReferencePathForAnimationSysV2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniSysTools(extras) {
    _reporterNs.report("AniSysTools", "../AnimationSystemV2/AniTools/AniSysTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlaySelector(extras) {
    _reporterNs.report("PlaySelector", "../AnimationSystemV2/Definitions/IPlayOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../ReferencePathForMyUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtilsTools(extras) {
    _reporterNs.report("GameUtilsTools", "../ReferencePathForMyUtils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      AnimationStateType = _unresolved_2.AnimationStateType;
    }, function (_unresolved_3) {
      AniSysTools = _unresolved_3.AniSysTools;
    }, function (_unresolved_4) {
      GameUtilsTools = _unresolved_4.GameUtilsTools;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "adae2ZX8hJBnLcqTIkNls6N", "BasicGameBoardUI", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'Game']);

      ({
        ccclass,
        property
      } = _decorator);
      DEBUG_TITLE = "BasicGameBoardUI";

      _export("BasicGameBoardUI", BasicGameBoardUI = (_dec = ccclass('BasicGameBoardUI'), _dec2 = property({
        type: Node,
        visible: true,
        tooltip: "設定此物件的動畫物件"
      }), _dec(_class = (_class2 = class BasicGameBoardUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_aniNode", _descriptor, this);

          this._iAnimationController = null;
          // Abort handling
          this._abort = new AbortController();
          // State
          this._initialized = false;
          this._isPlaying = false;
          this._playMode = '';
        }

        onLoad() {
          if (this._initialized) return;

          if (!this._aniNode) {
            console.error("BasicGameBoardUI need AnimationController");
          } else {
            this._iAnimationController = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(this._aniNode);
          }

          this.init();
          this._initialized = true;
        }

        onDisable() {
          this.cancelBoardAni(true);
        }

        onDestroy() {
          this.cancelBoardAni(true);
        }

        init() {
          var _this$_iAnimationCont;

          (_this$_iAnimationCont = this._iAnimationController) == null || _this$_iAnimationCont.init == null || _this$_iAnimationCont.init();
        } //--設定狀態（如果要記錄板子當前模式/文案）


        setBoardMode(state) {// no-op for now
        } //--寫入分數/次數


        setResultLabel(value) {// implement your label updates here
        } // --- 等待 abort signal的promise


        makeCancelGate(signal) {
          let handler = null;
          const promise = new Promise(resolve => {
            if (signal.aborted) {
              resolve();
              return;
            }

            handler = () => resolve();

            signal.addEventListener('abort', handler, {
              once: true
            });
          });

          const off = () => {
            if (handler) {
              signal.removeEventListener('abort', handler);
              handler = null;
            }
          };

          return {
            promise,
            off
          };
        }

        setSpeedforPlay(mode, dt) {
          if (dt && dt > 0) {
            const aniCtrl = this._iAnimationController;
            const targetState = aniCtrl.peakAniDataInfo(mode);
            const originalDuration = targetState.duration;

            if (originalDuration != dt) {
              const speed = originalDuration / dt;
              const changeSpeed = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
                error: Error()
              }), GameUtilsTools) : GameUtilsTools).deepClone(targetState);
              changeSpeed.speed = speed;

              if (aniCtrl.isAEP_SPINE && aniCtrl.aepSpines.length > 0) {
                for (let i = 0; i < aniCtrl.aepSpines.length; i++) {
                  var _aniState, _sp$findAnimation;

                  const sp = aniCtrl.aepSpines[i];
                  const spAniName = typeof mode === 'string' ? mode : (_aniState = mode == null ? void 0 : mode.aniState) != null ? _aniState : '';
                  const duration = (_sp$findAnimation = sp.findAnimation(spAniName)) == null ? void 0 : _sp$findAnimation.duration;

                  if (duration) {
                    const speed = duration / dt;
                    sp.timeScale = speed;
                    break;
                  }
                }
              }

              this._iAnimationController.setAniDataInfo(changeSpeed);
            }
          }
        }

        setPlayPromise(mode = (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
          error: Error()
        }), AnimationStateType) : AnimationStateType).Default, dt) {
          let returnP; //const targetAni=this._iAnimationController

          this.setSpeedforPlay(mode, dt);

          if (this._iAnimationController) {
            returnP = this._iAnimationController.playAniInPromise(mode != null ? mode : (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
              error: Error()
            }), AnimationStateType) : AnimationStateType).Default);
          } else {
            returnP = Promise.resolve();
          }

          return returnP;
        } // === 共用封裝：包裝 cancel + race ===


        runAniWithAbort(task, cancelValue) {
          // 取消前一個任務
          this.cancelBoardAni(false); // 建立新的 abort 範圍

          this._abort = new AbortController();
          const signal = this._abort.signal;
          const {
            promise: cancelP,
            off
          } = this.makeCancelGate(signal); // 包裝 Promise：播放與取消

          const taggedCancel = cancelP.then(() => ({
            winner: "cancel"
          }));
          const taggedPlay = task().then(res => ({
            winner: "play",
            result: res
          }), error => ({
            winner: "play",
            error
          })); // === 狀態紀錄 ===

          this._isPlaying = true; // === 執行競賽（誰先完成誰贏） ===

          return Promise.race([taggedCancel, taggedPlay]).then(outcome => {
            const winner = outcome.winner;
            const hasError = ("error" in outcome);
            /*
            GameUtilsTools.debugLog(DEBUG_TITLE, 'race settled:', {
                mode: this._playMode,
                winner: winner,
                hasError: hasError,
                outcome: outcome
            });*/
            // 若 play promise 拋錯，則繼續拋出讓外層 catch

            if (hasError) throw outcome.error;

            if (outcome.winner === "cancel") {
              // 原本是 throw回傳想要的中斷值
              return cancelValue;
            } // 若被 cancel 則丟出中斷錯誤（讓外層可選擇忽略或捕捉）
            //if (winner === "cancel") throw new Error("Animation aborted");
            // 正常播放結束 → 回傳結果


            return outcome.result;
          }).catch(err => {
            if (err && err.isAbort || String((err == null ? void 0 : err.message) || err) === "Animation aborted") {
              return cancelValue; // swallow → resolved
            }

            throw err; // 其他非取消錯照拋
          }).finally(() => {
            off();
            this._isPlaying = false;
          });
        } // === 播放一般動畫 ===
        //--預設播放


        playWithAbort(mode, dt) {
          return this.runAniWithAbort(() => this.setPlayPromise(mode, dt));
        } //--20251006新增(要接影格事件)


        playWithFrameEvt(mode, onFrame, onFinish, opt) {
          var _aniState2;

          this._playMode = typeof mode === "string" ? mode : (_aniState2 = mode == null ? void 0 : mode.aniState) != null ? _aniState2 : JSON.stringify(mode);
          return this.runAniWithAbort(() => new Promise((resolve, reject) => {
            try {
              var _this$_iAnimationCont2, _opt$backDefault;

              (_this$_iAnimationCont2 = this._iAnimationController) == null || _this$_iAnimationCont2.playAniWithFrameEvtCallBack == null || _this$_iAnimationCont2.playAniWithFrameEvtCallBack((...args) => {
                try {
                  onFrame == null || onFrame(...args);
                } catch {}
              }, () => {
                try {
                  onFinish == null || onFinish();
                } catch {}

                resolve();
              }, (_opt$backDefault = opt == null ? void 0 : opt.backDefault) != null ? _opt$backDefault : false, mode, opt);
            } catch (e) {
              reject(e);
            }
          }));
        }
        /**
         * 用race來防堵promise死掉,誰先完成就算數
         */

        /*
        protected playWithAbort(mode: PlaySelector, value?: number): Promise<void> {
            // 取消舊的
            this.cancelBoardAni(false);//resetToDefault
             // new abort scope
            this._abort = new AbortController();
            const signal = this._abort.signal;
             const { promise: cancelP, off } = this.makeCancelGate(signal);
            const playRaw = this.setPlayPromise(mode);
             type RaceOutcome =
                | { winner: 'cancel' }
                | { winner: 'play'; error?: unknown };
             const taggedCancel: Promise<RaceOutcome> =
                cancelP.then(() => ({ winner: 'cancel' as const }));
             const taggedPlay: Promise<RaceOutcome> = playRaw.then(
                () => ({ winner: 'play' as const }),
                (error) => ({ winner: 'play' as const, error }) // ← 把錯誤轉成「已處理的結果物件」
            );
             this._isPlaying = true;
             const modeName =
                typeof mode === 'string'
                    ? mode
                    : (mode as any)?.aniState ?? JSON.stringify(mode);
            this._playMode = String(modeName);
             // 進行帶標籤的race
            return Promise.race<RaceOutcome>([taggedCancel, taggedPlay])
                .then((outcome) => {
                    const winner = outcome.winner;
                    const hasError = 'error' in outcome;
                    console.log(
                        `[BasicGameBoardUI] race settled: mode=${this._playMode}, winner=${winner}${hasError ? ', playP rejected' : ''}`
                    );
                     // 若是 play 先結束但它是 reject，繼續把錯往外拋
                    if (hasError) throw (outcome as any).error;
                })
                .finally(() => {
                    off();
                    this._isPlaying = false;
                });
         }*/
        //-讓繼承的人可以修改要選擇哪一種播放方式playWithAbort/playWithFrameEvt
        //-如需改變複寫這些方法即可,原本的playBoardIn/Loop/Out不需改變


        getInPlayTask(mode, dt) {
          return this.playWithAbort(mode, dt);
        }

        getLoopPlayTask(mode, dt) {
          return this.playWithAbort(mode, dt);
        }

        getOutPlayTask(mode, dt) {
          return this.playWithAbort(mode, dt);
        } // ================================ 對外 API ===============================
        //進場：外部直接 await 


        async playBoardIn(value = 0, mode = (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
          error: Error()
        }), AnimationStateType) : AnimationStateType).In, dt = 0) {
          // 0 也是有效值；直接寫
          this.setResultLabel(value); //return this.playWithAbort(mode, value);

          await this.getInPlayTask(mode, dt);
        }
        /**
         * 取消目前板子動畫。
         * @param resetToDefault true → 嘗試停掉動畫並回 Default；false → 只 abort，不強制回 Default
         */


        cancelBoardAni(resetToDefault = false) {
          try {
            var _this$_abort;

            (_this$_abort = this._abort) == null || _this$_abort.abort();
          } catch {}

          try {
            if (resetToDefault) {
              var _this$_iAnimationCont3;

              (_this$_iAnimationCont3 = this._iAnimationController) == null || _this$_iAnimationCont3.goBackToDefault == null || _this$_iAnimationCont3.goBackToDefault();
            } else {
              var _stopAni, _this$_iAnimationCont4, _this$_iAnimationCont5;

              // 若有 stop API，優先使用；沒有再退回 default
              (_stopAni = (_this$_iAnimationCont4 = this._iAnimationController) == null || _this$_iAnimationCont4.stopAni == null ? void 0 : _this$_iAnimationCont4.stopAni()) != null ? _stopAni : (_this$_iAnimationCont5 = this._iAnimationController) == null || _this$_iAnimationCont5.goBackToDefault == null ? void 0 : _this$_iAnimationCont5.goBackToDefault();
            }
          } catch {}
        } //待機：啟動 Loop，直到外部呼叫 cancelBoardAni 才結束 


        async playBoardLoop(mode = (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
          error: Error()
        }), AnimationStateType) : AnimationStateType).Loop) {
          // 開始 loop
          // 如果底層 playAniInPromise 對 loop 也「永不 resolve」，這會在 cancel 時結束
          //return this.playWithAbort(mode);
          await this.getLoopPlayTask(mode);
        } //退場：完成後（且未被取消）回到 Default 


        async playBoardOut(mode = (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
          error: Error()
        }), AnimationStateType) : AnimationStateType).Out, dt = 0) {
          //await this.playWithAbort(mode);
          await this.getOutPlayTask(mode, dt); // 若中途被 cancel，就不要動 default；交給呼叫端自行決定

          if (!this._abort.signal.aborted) {
            try {
              var _this$_iAnimationCont6;

              (_this$_iAnimationCont6 = this._iAnimationController) == null || _this$_iAnimationCont6.goBackToDefault == null || _this$_iAnimationCont6.goBackToDefault();
            } catch {}
          }
        } //強制回到預設狀態


        goBackToDefault() {
          this.cancelBoardAni(true);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_aniNode", [_dec2], {
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
//# sourceMappingURL=a3c504c0ed9a4608f11f3de3efa82c2a22458c9e.js.map