System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GameUtilsTools, AsyncScope, _crd, DEBUG_TITLE;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfGameUtilsTools(extras) {
    _reporterNs.report("GameUtilsTools", "../GameUtilsTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimeoutResult(extras) {
    _reporterNs.report("TimeoutResult", "../GameUtilsTool", _context.meta, extras);
  }

  _export("AsyncScope", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      GameUtilsTools = _unresolved_2.GameUtilsTools;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8f4e6/1j9ZKO4P5OZ8UoD0K", "AsyncScope", undefined);

      __checkObsolete__(['Component']);

      /** 可取消任務結構 */
      DEBUG_TITLE = 'AsyncScope';
      /**
       * @author Eric
       * AsyncScope 
       * ------------------------------------------------------------
       *  保留穩定版 withTimeout
       * 支援多組 AbortController
       * abortAll('key') 可中止指定群組任務並安全 resolve
       * 向下相容舊版本
       */

      _export("AsyncScope", AsyncScope = class AsyncScope {
        static getInstance() {
          return AsyncScope._instance ? AsyncScope._instance : new AsyncScope();
        }

        constructor() {
          this._timeoutCallbacks = new Set();
          this._cancelList = [];
          this._resolveMap = new Map();
          //private _trackedTasks = new Set<{ label: string; promise: Promise<any>; skip?: () => void }>();
          this._parent = null;
          // 秒
          this._abortControllers = new Map();

          if (AsyncScope._instance != null) {
            throw new Error('plz use getInstance() to get AsyncScope');
          }

          AsyncScope._instance = this;
        } // ===========================================================
        //  get 相關map區域
        // ===========================================================


        get abortControllers() {
          return this._abortControllers;
        }
        /*
        get trackedTasks(): Set<{ label: string; promise: Promise<any>; skip?: () => void }> {
            return this._trackedTasks;
        }*/


        get cancelList() {
          return this._cancelList;
        }

        get resolveMap() {
          return this._resolveMap;
        } // ===========================================================
        //  初始化
        // ===========================================================

        /*
        public init(host: Component): AsyncScope {
            this._parent = host;
            return this;
        }*/
        // ===========================================================
        //  Abort 控制區 (多組)
        // ===========================================================

        /**
         * 建立新的 Abort 範圍
         * @param key 群組 key
         * @param onAbort 當 abortAll() 被觸發時要呼叫的 callback
         * @returns AbortSignal
         * @example
         * const signalA = this._async.createAbortScope(
            'ShowWin',
            (key) => console.log(` Abort callback: ${key} 被中止！`)
            );
             const signalB = this._async.createAbortScope(
            'ReSpin',
            (key) => console.log(` ${key} 群組動畫中止，執行 UI reset。`)
            );
         * // 傳入 signal 給可取消的任務
         * 1.runWithAbort-你可以使用這個
         * 2.你也可以塞到其他的通用等待方法
         *  await this._async.waitSecondsCancelable(2, signalA, 'ShowWin');
            await this._async.withTimeout(this.playWinInThisRound(), 5, { phase: 'win' }, 'playWin', false, undefined, signalB, 'ReSpin');
         * 中止指定群組
            1.this._async.abortAll('ShowWin');--單一
            2.this._async.abortAll();//--全部
         */


        createAbortScope(key, onAbort) {
          var ctrl = new AbortController();

          this._abortControllers.set(key, {
            controller: ctrl,
            onAbort
          });
          /*
          let ctrl: AbortController;
          if (this._abortControllers.has(key)) {
              ctrl = this._abortControllers.get(key)!.controller;
          } else {
              ctrl = new AbortController();
              this._abortControllers.set(key, { controller: ctrl, onAbort });
          }*/
          //GameUtilsTools.debugLog(DEBUG_TITLE, `[createAbortScope] 建立 ${key}`, { key });


          return ctrl.signal;
        }

        getAbortKey(abortSignal) {
          for (var [_key, entry] of this._abortControllers) {
            if (entry.controller.signal === abortSignal) {
              return _key;
            }
          }

          return null;
        }
        /** 取得指定 AbortController */


        getAbortController(key) {
          var _this$_abortControlle, _this$_abortControlle2;

          return (_this$_abortControlle = (_this$_abortControlle2 = this._abortControllers.get(key)) == null ? void 0 : _this$_abortControlle2.controller) != null ? _this$_abortControlle : null;
        }
        /** 取得 signal（預設第一個） */


        get signal() {
          //const first = this._abortControllers.entries().next().value;
          var firstEntry = this._abortControllers.entries().next().value;

          if (!firstEntry) return null;
          var [, group] = firstEntry;
          return group.controller.signal;
        }

        removeAbortScope(key) {
          if (this._abortControllers.has(key)) {
            this._abortControllers.delete(key);

            this.removeTrackTaskByLabel(key);
          }
        }
        /** 廣播中止（可指定 key 或全部） */


        abortAll(targetKey) {
          if (targetKey) {
            var entry = this._abortControllers.get(targetKey);

            if (!entry) return; //GameUtilsTools.debugLog(DEBUG_TITLE, `[abortAll] 中止 ${targetKey}`, { targetKey });
            // === 1️ 執行中止 ===

            entry.controller.abort(); // === 2️ 執行 abort callback ===

            try {
              entry.onAbort == null || entry.onAbort(targetKey); //GameUtilsTools.debugLog(DEBUG_TITLE, `[abortAllCallback]`, { key: targetKey });
            } catch (err) {//GameUtilsTools.debugLog(DEBUG_TITLE, `[abortAllCallbackError]`, { key: targetKey, err }, 'warn');
            } // === 3️ 從列表移除 ===


            this._abortControllers.delete(targetKey); // === 4️ 清除相關任務 ===


            for (var t of this._cancelList) {
              if (t.signal === entry.controller.signal || t.abortKey === targetKey) {
                try {
                  t.cancel();
                } catch (_unused) {}
              }
            }

            this._cancelList = this._cancelList.filter(t => t.signal !== entry.controller.signal && t.abortKey !== targetKey);
          } else {
            //GameUtilsTools.debugLog(DEBUG_TITLE, `[abortAll] 中止全部`, { total: this._abortControllers.size });
            //  全部 abort
            for (var [_key2, _entry] of this._abortControllers) {
              try {
                _entry.controller.abort();

                _entry.onAbort == null || _entry.onAbort(_key2); // 呼叫每個 callback
                //GameUtilsTools.debugLog(DEBUG_TITLE, `[abortAllCallback]`, { key });
              } catch (err) {//GameUtilsTools.debugLog(DEBUG_TITLE, `[abortAllCallbackError]`, { key, err }, 'warn');
              }
            }

            this._abortControllers.clear();

            this.cancelAll();
          }
        }
        /** 建立一個等待 signal.aborted 的 Promise */


        makeCancelGate(signal) {
          var handler = null;
          var promise = new Promise(resolve => {
            if (signal.aborted) {
              resolve();
              return;
            }

            handler = () => resolve();

            signal.addEventListener('abort', handler, {
              once: true
            });
          });

          var off = () => {
            if (handler) {
              signal.removeEventListener('abort', handler);
              handler = null;
            }
          };

          return {
            promise,
            off
          };
        } // ===========================================================
        // Cancel 基本控制區
        // ===========================================================


        trackCancel(task) {
          //this._cancelList.push(task);
          var original = task.cancel;

          task.cancel = () => {
            try {
              original == null || original();
              /*
              GameUtilsTools.debugLog(DEBUG_TITLE, `[cancel] ${task.label ?? 'unknown'}`, {
                  label: task.label,
                  abortKey: task.abortKey,
                  meta: task.meta
              });*/
            } catch (err) {//GameUtilsTools.debugLog(DEBUG_TITLE, `[cancelError] ${task.label}`, err, 'warn');
            }
          };

          this._cancelList.push(task);
        }

        untrackCancel(task) {
          var i = this._cancelList.indexOf(task);

          if (i >= 0) this._cancelList.splice(i, 1);
        }

        getTrackTaskByLabel(label) {
          var tasks = this._cancelList.filter(task => task.label === label);

          return tasks;
        } //--不執行cancel，只是移除追蹤


        removeTrackTaskByLabel(label) {
          this._cancelList = this._cancelList.filter(task => task.label !== label);
        }

        cancelAll() {
          if (this._cancelList.length > 0) {//GameUtilsTools.debugLog(DEBUG_TITLE, `[cancelAll]`, { taskCount: this._cancelList.length });
          }

          for (var t of this._cancelList) {
            try {
              t.cancel();
            } catch (_unused2) {}
          }

          this._cancelList = [];
        }

        cancelBySource(source) {
          for (var t of this._cancelList) {
            if (t.source === source) {
              try {
                t.cancel();
              } catch (_unused3) {}
            }
          }

          this._cancelList = this._cancelList.filter(t => t.source !== source);
        }

        cancelByLabel(label) {
          for (var t of this._cancelList) {
            if (t.label === label) {
              try {
                t.cancel();
              } catch (_unused4) {}
            }
          }

          this._cancelList = this._cancelList.filter(t => t.label !== label);
        }

        clearAllTimeouts() {
          for (var cb of this._timeoutCallbacks) {
            var _this$_parent;

            (_this$_parent = this._parent) == null || _this$_parent.unschedule(cb);
          }

          this._timeoutCallbacks.clear();
        }

        reset() {
          this.cancelAll();
          this.clearAllTimeouts();
          this.abortAll(); //this._trackedTasks.clear();

          this.safeResolve();
        }

        dispose() {
          this.reset();
        } // ===========================================================
        // Deferred 任務管理區
        // ===========================================================


        createDeferredFor(key) {
          var resolveFn;
          var p = new Promise(res => {
            resolveFn = res;
          });
          this.setPendingResolveFor(key, resolveFn);
          return {
            promise: p,
            resolve: resolveFn
          };
        }

        setPendingResolveFor(key, res) {
          this.safeResolve(key);

          var cancel = () => {
            var entry = this._resolveMap.get(key);

            if (!entry) return;

            this._resolveMap.delete(key);

            try {
              entry.resolve();
            } catch (_unused5) {}
          };

          var entry = {
            resolve: res,
            cancel
          };

          this._resolveMap.set(key, entry);
        }

        clearPending(key) {
          if (key === undefined) {
            for (var lb of Array.from(this._resolveMap.keys())) {
              this.clearPending(lb);
            }

            return;
          }

          var entry = this._resolveMap.get(key);

          if (!entry) return;

          this._resolveMap.delete(key);

          try {
            this.untrackCancel(entry.cancel);
          } catch (_unused6) {}
        }

        safeResolve(key) {
          if (key === undefined) {
            for (var k of Array.from(this._resolveMap.keys())) this.safeResolve(k);

            return;
          }

          var entry = this._resolveMap.get(key);

          if (!entry) return;

          this._resolveMap.delete(key);

          try {
            entry.resolve();
          } catch (_unused7) {}
        } // ===========================================================
        // 通用等待功能區
        // ===========================================================


        waitSecondsCancelable(sec, signal, abortKey) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var h = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
              error: Error()
            }), GameUtilsTools) : GameUtilsTools).DeferByTweenPromiseWithCancel(sec);
            var task = {
              cancel: h.forceCancelAndResolve,
              label: 'waitSecondsCancelable',
              source: 'AsyncScope',
              meta: {
                duration: sec
              },
              signal,
              abortKey
            };

            _this.trackCancel(task);

            try {
              yield h.promise;
            } finally {
              _this.untrackCancel(task);
            }
          })();
        }
        /**  純延遲（不可取消、受 timeScale 影響） */


        waitSecondsRaw(sec) {
          return _asyncToGenerator(function* () {
            yield (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
              error: Error()
            }), GameUtilsTools) : GameUtilsTools).DeferByTweenPromise(sec);
          })();
        }
        /**
         * <<延遲可取消 (cancel() / forceCancelAndResolve())>>
         * <單純延遲count使用>
         * 與 DeferByTweenPromise 相同,但可以取消
         * @param duration 延遲秒數
         * @param label 追蹤輸出使用
         * @param autoResolveOnSkip Skip 時是否強制 resolve（預設 true）
         * @param signal 
         * @param abortKey 
         * @example
         * 1.等待 1.2 秒（過程可被中止或 skip）
         * await this._async.waitSecondsTracked(1.2, 'showScatterFX');
           
           2.
            await this._async.waitSecondsTracked(1.0, 'stage_reelStop', true);
            GameUtilsTools.debugLog('AsyncScope', ' 第一階段完成（reelStop）');
             // 第二階段：得分跳字
            await this._async.waitSecondsTracked(2.0, 'stage_scoreJump', true);
            GameUtilsTools.debugLog('AsyncScope', ' 第二階段完成（scoreJump）')
             this._async.cancelByLabel('stage_reelStop');
            //-此時會resolve 第一個promise,繼續往下一個 流程走
         */


        waitSecondsTracked(duration, label, cancelCallBack, autoResolveOnSkip, signal, abortKey) {
          var _this2 = this;

          if (autoResolveOnSkip === void 0) {
            autoResolveOnSkip = true;
          }

          var h = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).DeferByTweenPromiseWithCancel(duration);

          var cancelWrapper = () => {
            h.forceCancelAndResolve();
            cancelCallBack == null || cancelCallBack();
          };

          var task = {
            cancel: cancelWrapper,
            //--強制 resolve
            label,
            source: 'AsyncScope',
            meta: {
              duration
            },
            signal,
            abortKey
          };
          this.trackCancel(task);

          var promise = _asyncToGenerator(function* () {
            try {
              yield h.promise;
            } finally {
              _this2.untrackCancel(task);
            }
          })();

          return {
            promise,
            cancel: cancelWrapper
          }; //const promise = h.promise.finally(() => this.untrackCancel(task));
          //if (autoResolveOnSkip) this.trackTask(label, promise, () => h.forceCancelAndResolve());
          //await promise;
        }
        /**
         * <<延遲執行 Promise 任務，允許提前取消延遲>>
         * 取消延遲時會立即執行任務
         * 適合用於 Promise.all 流程中
         * @param label 
         * @param task 要執行的 Promise function（會被 await）
         * @param delayTime 延遲時間（單位：秒）
         * @param args 任務參數
         * @returns 
         * @example
         * 1.使用 AsyncScope 延遲 0.8 秒後執行
            await this._async.deferTaskWithCancelableDelay(
                'showBigWin',                   // 任務名稱（用於追蹤）
                this.playWinAnimation.bind(this), // 任務方法
                0.8                             // 延遲秒數
            );
            2.還可以騷包的多個達成依序執行
            await Promise.all([
                this._async.deferTaskWithCancelableDelay('fx1', this.playParticleEffect.bind(this), 0.2, 'coinBurst'),
                this._async.deferTaskWithCancelableDelay('fx2', this.playWinText.bind(this), 0.5, 'EpicWin'),
                this._async.deferTaskWithCancelableDelay('fx3', this.playShineEffect.bind(this), 0.8)
            ]);
         */

        /**
         * <<延遲執行 Promise 任務，允許提前取消延遲>>
         * @param label flowKey(給list追蹤用的)
         * @param task promise
         * @param delayTime 延遲時間（單位：秒）
         * @param args promise需要的參數
         * @returns promise=promise的結果, cancel=取消延遲並立即執行 task
         */


        deferTaskWithCancelableDelay(label, task, delayTime) {
          for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key3 = 3; _key3 < _len; _key3++) {
            args[_key3 - 3] = arguments[_key3];
          }

          //): Promise<T> {
          var handle = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).DeferTaskWithCancelableDelay(task, delayTime, ...args); //const t: ICancelableTask = { cancel: handle.forceCancelAndResolve, label, source: 'AsyncScope' };

          var t = {
            cancel: handle.cancelDelay,
            label,
            source: 'AsyncScope'
          };
          this.trackCancel(t);
          var promiseTask = handle.promise.finally(() => this.untrackCancel(t));
          return {
            promise: promiseTask,
            cancel: handle.cancelDelay
          }; //return handle.promise.finally(() => this.untrackCancel(t));
          //this.trackTask(label, handle.promise, handle.forceCancelAndResolve);
          //return handle.promise;
        } // ===========================================================
        // 穩定版 withTimeout（只加 signal 綁定）
        // ===========================================================

        /**
         * <<為原始 promise 設置超時機制>>
         * <<有需要在時限內結束的非同步操作可使用此方法>>
         * <!!超時會 reject 或 resolve 特定值-保底promise不死>
         * @param ogPromise Original Promise
         * @param seconds 
         * @param meta 附加在 Error 物件上的資訊
         * @param label 變更辨識標籤，會附加在 Error 物件上
         * @param resolveOnTimeout 超時是否強制 resolve(false=reject, true=resolve)
         * @param timeoutValue 超時要回傳的值(當 resolveOnTimeout=true 時有效)
         * @param signal 對應 AbortController.signal
         * @param abortKey 辨識 ，對應 AbortController map 的 key
         * @returns 
         * @example
         * 1.
         * const playPromise = aniCtrl.playAniInPromise({ aniState: 'Win' });
         * const result = await this._async.withTimeout(
            playPromise,
            2.0,
            { node: aniCtrl.node.name, phase: 'showWin' },
            'playAniGroup'
            );
            if (result.status === 'timeout') {
                GameUtilsTools.debugLog('AsyncScope', ' 動畫播放超時', result.meta);
            }
            else if (result.status === 'error') {
                GameUtilsTools.debugLog('AsyncScope', ' 動畫執行錯誤', result.meta, 'error');
            }
            else {
                GameUtilsTools.debugLog('AsyncScope', ' 動畫播放完成', result.meta);
            }
            如果動畫在 2 秒內結束 → status="ok"
            如果動畫超過 2 秒仍未 resolve → status="timeout"
            如果動畫本身 throw error → status="error"
            
            2.
            const promises = [
            this._async.withTimeout( this.playScatterAnimation(),
                1.5,{ type: 'Scatter' },'playScatter'
            ),
            this._async.withTimeout(this.playWildAnimation(),
                2.0,{ type: 'Wild' },'playWild'
            ),
            this._async.withTimeout(this.showWinText(),
                3.0,{ type: 'Text' },'showWinText'
            ),
            ];
             const results = await Promise.all(promises);
            for (const r of results) {
            if (r.status === 'timeout') {
                GameUtilsTools.debugLog('AsyncScope', `[TIMEOUT] ${r.meta?.type}`, r.meta);
                } else {
                    GameUtilsTools.debugLog('AsyncScope', `[OK] ${r.meta?.type}`, r.meta);
                }
            }
            
            3.
            const signal = this._async.createAbortScope('ShowWin', key => {
                GameUtilsTools.debugLog('AsyncScope', `[AbortCallback] ${key} 被中止`);
            });
            const result = await this._async.withTimeout(
                this.playBigWinAnimation(signal),
                5.0,
                { phase: 'ShowWin', node: this.node.name },
                'playBigWin',
                true,                     // 超時時也 resolve（不噴錯）
                { forced: true },         // 超時時要回傳的值
            );
            // 玩家按下 Skip → 統一中止群組
            this._async.abortAll('ShowWin');
            4.
            async function fetchServerResult(): Promise<string> {
                // 模擬網路請求
                return new Promise<string>(res => setTimeout(() => res('ok'), 3000));
            }
            // 若 2 秒內未回應 → 超時
            const result = await this._async.withTimeout(
                fetchServerResult(),
                2,
                { request: 'serverCheck' },
                'serverTimeout',
                true,
                'timeout_default_value'
            );
             if (result.status === 'timeout') {
                GameUtilsTools.debugLog('AsyncScope', ' 網路請求超時', result.meta);
            }
         */


        withTimeout(ogPromise, //--原始 Promise
        seconds, //--race 時間
        meta, //--附加資訊
        label, resolveOnTimeout, //--false=timeout 時回傳 error reject, true=timeout 還是走resolve
        timeoutValue, //--你需要的辨識資訊(除錯用)
        signal, //--新增：對應 AbortController.signal
        abortKey, //--新增：對應 AbortController map 的 key
        cancelFn, cancelBackValue) {
          if (label === void 0) {
            label = 'timeout';
          }

          if (resolveOnTimeout === void 0) {
            resolveOnTimeout = false;
          }

          var adjusted = seconds + AsyncScope.TIMEOUT_TOLERANCE;
          var p = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).withTimeout(ogPromise, adjusted, meta, label, resolveOnTimeout, timeoutValue);

          var wrappedCancel = resultOverride => {
            try {
              // 1) 先結束 timeout（會停掉計時器並 resolve 外層結果）
              p.cancel(resultOverride);
            } catch (err) {//GameUtilsTools.debugLog(DEBUG_TITLE, `[withTimeout][innerCancelError] ${label}`, err, 'warn');
            }

            try {
              // 2) 再執行 callback
              cancelFn == null || cancelFn({
                type: label,
                outValue: cancelBackValue
              });
            } catch (err) {//GameUtilsTools.debugLog(DEBUG_TITLE, `[withTimeout][cancelFnError] ${label}`, err, 'warn');
            }
          };

          var task = {
            cancel: wrappedCancel,
            label,
            source: 'AsyncScope',
            meta: {
              adjusted
            },
            signal,
            abortKey
          };
          this.trackCancel(task);
          p.promise.finally(() => this.untrackCancel(task));
          return {
            promise: p.promise,
            cancel: wrappedCancel
          };
        }
        /**
         * <註冊可中斷的 Promise>
         * TIPS:
         * 1.他會在開始執行promise方法後才註冊
         * OTHER:
         * 1.把它註冊進 _cancelList 或 _trackedTasks
         * 2.可被 abortAll() 中止(執行 cancelFn)
         * 3.可被 cancelByLabel() 中止
         * 4.可被 cancelAll() 中止(cancel() 不能 reject，只能「強制 resolve」)
         * @param label 
         * @param promise 
         * @param cancelFn 
         * @param signal 
         * @param abortKey 
         * @returns 
         */


        registerCancelablePromise(label, promise, cancelFn, signal, abortKey, cancelBackValue) {
          var wrappedCancel = () => {
            try {
              cancelFn({
                type: label,
                outValue: cancelBackValue
              });
            } catch (err) {//GameUtilsTools.debugLog(DEBUG_TITLE, `[registerCancelablePromise][cancelError] ${label}`, err, 'warn');
            }
          };

          var task = {
            cancel: wrappedCancel,
            label,
            signal,
            abortKey
          };
          this.trackCancel(task);
          var safePromise = promise.finally(() => {
            this.untrackCancel(task);
          }); //this.trackTask(label, safePromise, wrappedCancel);

          return safePromise;
        }
        /**
         * <註冊可中斷的 Promise 任務>
         * TIPS:
         * 1.他會在註冊後才開始執行promise方法
         * @param label 
         * @param task 
         * @param signal 
         * @param abortKey 
         * @returns 
         */


        runCancelable(label, task, signal, abortKey) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var cancelFn = () => {
              /* do nothing, or safe resolve */
            };

            var promise = task();
            return yield _this3.registerCancelablePromise(label, promise, cancelFn, signal, abortKey);
          })();
        } // ===========================================================
        // 其他輔助功能
        // ===========================================================


        nextTick() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var p = Promise.resolve();
            var finished = false;
            var task = {
              cancel: () => {
                finished = true;
              },
              label: 'nextTick',
              source: 'AsyncScope'
            };

            _this4.trackCancel(task);

            try {
              yield p;
            } finally {
              finished = true;

              _this4.untrackCancel(task);
            }
          })();
        }

        nextFrame() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            var h = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
              error: Error()
            }), GameUtilsTools) : GameUtilsTools).DeferByTweenPromiseWithCancel(0);
            var task = {
              cancel: h.forceCancelAndResolve,
              label: 'nextFrame',
              source: 'AsyncScope'
            };

            _this5.trackCancel(task); //this.trackTask('nextFrame', h.promise, () => h.forceCancelAndResolve());


            try {
              yield h.promise;
            } finally {
              _this5.untrackCancel(task);
            }
          })();
        }
        /**
         * 
         * @param task 要執行的 Promise function（會被 await）
         * @param signal AbortSignal object
         * @param label 輸出便識標籤
         * @param fallbackSeconds 保底秒數（超過這時間會強制中止並噴錯）
         * @returns 
         * @example
         * 1.有防掛 Timeout
         *  async function doSomethingHeavy(): Promise<string> {
                return new Promise((resolve) => setTimeout(() => resolve("任務完成"), 3000));
            }
            // 在 2 秒內未完成即超時
            try {
                const result = await this._async.runWithAbort(doSomethingHeavy, undefined, 'heavyTask', 2);
                GameUtilsTools.debugLog('AsyncScope', '[heavyTask] 完成', { result });
            } catch (err) {
                GameUtilsTools.debugLog('AsyncScope', '[heavyTask] 超時或中止', { err }, 'warn');
            }
           2.
           const signal = this._async.createAbortScope('ShowWin', key => {
                GameUtilsTools.debugLog('AsyncScope', `[AbortCallback] ${key} 被中止`);
            }); 
           
            async function playBigWin(): Promise<void> {
                const aniCtrl = this.node.getComponent(AnimationController);
                await aniCtrl.playAniInPromise({ aniState: 'BigWin' });
                GameUtilsTools.debugLog('AsyncScope', ' BigWin 播放完成');
            } 
            this._async.runWithAbort(playBigWin.bind(this), signal, 'BigWinPlay', 5)
            .then(() => GameUtilsTools.debugLog('AsyncScope', 'BigWin 結束'))
            .catch((err) => GameUtilsTools.debugLog('AsyncScope', 'BigWin 被中止或超時', { err }, 'warn'));
             // 玩家點 Skip 時
            this._async.abortAll('ShowWin');
             3.
            const signalA = this._async.createAbortScope('FG_Intro');
            const signalB = this._async.createAbortScope('FG_Bonus');
             // 定義任務
            const introTask = () => this._async.waitSecondsRaw(3).then(() => 'Intro Done');
            const bonusTask = () => this._async.waitSecondsRaw(5).then(() => 'Bonus Done');
             // 同時啟動
            const results = await Promise.allSettled([
                this._async.runWithAbort(introTask, signalA, 'Intro', 10),
                this._async.runWithAbort(bonusTask, signalB, 'Bonus', 10),
            ]);
             // 模擬只中止第一個
            this._async.abortAll('FG_Intro');
         */


        runWithAbort(task, signal, label, fallbackSeconds) {
          if (label === void 0) {
            label = 'runWithAbort';
          }

          if (fallbackSeconds === void 0) {
            fallbackSeconds = 30;
          }

          if (!signal) return task();
          var {
            promise: cancelP,
            off
          } = this.makeCancelGate(signal);
          var taggedCancel = cancelP.then(() => ({
            winner: "cancel"
          }));
          var taggedPlay = task().then(res => ({
            winner: "play",
            result: res
          }), error => ({
            winner: "play",
            error
          }));
          var timeout = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).DeferByTweenPromise(fallbackSeconds).then(() => ({
            winner: "timeout"
          }));
          return Promise.race([taggedCancel, taggedPlay, timeout]).then(outcome => {
            if (outcome.winner === "cancel") throw new DOMException("Operation aborted", "AbortError");
            if (outcome.winner === "timeout") throw new Error("[" + label + "] Timeout after " + fallbackSeconds + "s");
            if ("error" in outcome) throw outcome.error;
            return outcome.result;
          }).finally(() => off());
        }

        resolveAllPending() {
          this.safeResolve();
          this.cancelAll();
          this.abortAll(); //this._trackedTasks.forEach(t => { try { t.skip?.(); } catch { } });
          //this._trackedTasks.clear();
        }
        /*
        public trackTask(label: string, promise: Promise<any>, skipCallback?: () => void): void {
            const task = { label, promise, skip: skipCallback };
            this._trackedTasks.add(task);
            promise.finally(() => this._trackedTasks.delete(task));
        }*/
        //=============output log===================================================================

        /** 取得並（可選）輸出 _cancelList 現況：每個任務的 label/source/abortKey 等 */


        dumpCancelList(log) {
          if (log === void 0) {
            log = true;
          }

          var snapshot = Object.freeze(this._cancelList.map((t, idx) => {
            var _t$label, _t$source, _t$abortKey;

            return {
              idx,
              label: (_t$label = t.label) != null ? _t$label : null,
              source: (_t$source = t.source) != null ? _t$source : null,
              abortKey: (_t$abortKey = t.abortKey) != null ? _t$abortKey : null,
              hasSignal: !!t.signal,
              meta: t.meta ? _extends({}, t.meta) : undefined
            };
          }));
          if (log) (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).debugLog(DEBUG_TITLE, '[dumpCancelList]', snapshot);
          return snapshot;
        }
        /** 取得並（可選）輸出 _resolveMap 現況：有哪些 pending key 尚未 resolve */


        dumpResolveMap(log) {
          if (log === void 0) {
            log = true;
          }

          var snapshot = Object.freeze(Array.from(this._resolveMap.keys()).map((key, idx) => ({
            idx,
            key,
            pending: this._resolveMap.has(key)
          })));
          if (log) (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).debugLog(DEBUG_TITLE, '[dumpResolveMap]', snapshot);
          return snapshot;
        }
        /** 取得並（可選）輸出 _abortControllers 現況：每個 key 的 aborted 與是否註冊 onAbort */


        dumpAbortControllers(log) {
          if (log === void 0) {
            log = true;
          }

          var snapshot = Object.freeze(Array.from(this._abortControllers.entries()).map((_ref2, idx) => {
            var [key, group] = _ref2;
            return {
              idx,
              key,
              aborted: group.controller.signal.aborted,
              hasOnAbort: typeof group.onAbort === 'function'
            };
          }));
          if (log) (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).debugLog(DEBUG_TITLE, '[dumpAbortControllers]', snapshot);
          return snapshot;
        }
        /** 一次輸出三大區塊現況 */


        dumpAllAsyncState(log) {
          if (log === void 0) {
            log = true;
          }

          var cancelList = this.dumpCancelList(false);
          var resolveMap = this.dumpResolveMap(false);
          var abortCtrls = this.dumpAbortControllers(false);
          var snapshot = Object.freeze({
            cancelList,
            resolveMap,
            abortCtrls
          });
          if (log) (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).debugLog(DEBUG_TITLE, '[dumpAllAsyncState]', snapshot);
          return snapshot;
        }

      });

      AsyncScope.TIMEOUT_TOLERANCE = 0.05;
      AsyncScope._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e644fd985c378b65a084260ced184b2d805676ba.js.map