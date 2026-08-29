System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Queue, UniTask, UniRuntimeTask, UniTimer, _crd, UniTaskState;

  function _reportPossibleCrUseOfQueue(extras) {
    _reporterNs.report("Queue", "../../Core", _context.meta, extras);
  }

  _export({
    UniTask: void 0,
    UniTimer: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Queue = _unresolved_2.Queue;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "49d42qmshBLuZqm6wAaMQya", "UniTimer", undefined);

      /**
       * 任務狀態（內部使用）
       */
      UniTaskState = /*#__PURE__*/function (UniTaskState) {
        UniTaskState[UniTaskState["None"] = 0] = "None";
        UniTaskState[UniTaskState["Running"] = 1] = "Running";
        UniTaskState[UniTaskState["Paused"] = 2] = "Paused";
        UniTaskState[UniTaskState["Completed"] = 3] = "Completed";
        return UniTaskState;
      }(UniTaskState || {});
      /**
       * 任務配置，包含動畫執行所需的配置資訊
       */


      _export("UniTask", UniTask = class UniTask {
        constructor() {
          /**持續時間 */
          this.duration = 0;

          /**更新回調，參數為進度(0-1) */
          this.onUpdate = null;

          /**開始回調 */
          this.onStart = null;

          /**完成回調 */
          this.onComplete = null;

          /**任務 ID，用於精確控制 */
          this.id = null;

          /**任務標籤，用於群組操作 */
          this.tag = null;

          /**使用者自定義資料 */
          this.userData = null;

          /**標記此任務是否應該被跳過 */
          this.shouldSkip = false;
        }

      });
      /**
       * 任務執行狀態（UniTimer 內部使用）
       */


      UniRuntimeTask = class UniRuntimeTask {
        constructor(config) {
          /**任務配置 */
          this.config = void 0;

          /**當前已執行時間 */
          this.currentTime = 0;

          /**狀態 */
          this.state = UniTaskState.None;
          this.config = config;
        }
        /**是否已完成 */


        get isCompleted() {
          return this.currentTime >= this.config.duration;
        }
        /**剩餘時間 */


        get remainingTime() {
          return Math.max(0, this.config.duration - this.currentTime);
        }
        /**當前進度 (0-1) */


        get progress() {
          if (this.config.duration <= 0) return 1;
          return Math.min(1, this.currentTime / this.config.duration);
        }
        /**重置執行狀態 */


        reset() {
          this.currentTime = 0;
          this.state = UniTaskState.None;
        }

      };
      /**
       * 通用計時器
       * 抽取自 UniMovement 的時間管理核心邏輯，提供精確的時間控制和進度管理
       */

      _export("UniTimer", UniTimer = class UniTimer {
        constructor() {
          /**時間縮放，數值越小執行時間越長 */
          this.timeScale = 1.0;

          /**待執行的任務隊列 */
          this._params = new (_crd && Queue === void 0 ? (_reportPossibleCrUseOfQueue({
            error: Error()
          }), Queue) : Queue)();

          /**當前正在執行的任務 */
          this._currentTask = null;

          /**剩餘的deltaTime，用於保持時間精度 */
          this._leftDeltaTime = 0;

          /**跳過動畫的標記 */
          this._pendingSkip = false;

          /**是否跳過所有動畫（而不是只跳過當前） */
          this._skipAll = false;

          /**在所有任務執行完成後觸發 */
          this.onAllComplete = null;

          /**在每個任務開始時觸發 */
          this.onTaskStart = null;

          /**在每個任務完成時觸發 */
          this.onTaskComplete = null;

          /**在所有任務執行完成後觸發（僅觸發一次） */
          this.onAllCompleteOnce = null;

          /**在每個任務開始時觸發（僅觸發一次） */
          this.onTaskStartOnce = null;

          /**在每個任務完成時觸發（僅觸發一次） */
          this.onTaskCompleteOnce = null;
        }

        /**獲取當前執行的任務配置 */
        get currentTask() {
          var _this$_currentTask;

          return ((_this$_currentTask = this._currentTask) == null ? void 0 : _this$_currentTask.config) || null;
        }
        /**獲取隊列中剩餘任務數量 */


        get remainingCount() {
          return this._params.count;
        }
        /**是否正在執行 */


        get isRunning() {
          return this._currentTask !== null && this._currentTask.state === UniTaskState.Running;
        }
        /**是否已暫停 */


        get isPaused() {
          return this._currentTask !== null && this._currentTask.state === UniTaskState.Paused;
        }
        /**
         * 根據 ID 查找任務
         * @param id 任務 ID
         * @returns 找到的任務，如果沒找到則返回 null
         */


        getTaskById(id) {
          var _this$_currentTask2;

          if (!id) return null; // 檢查當前執行的任務

          if (((_this$_currentTask2 = this._currentTask) == null ? void 0 : _this$_currentTask2.config.id) === id) {
            return this._currentTask.config;
          } // 在隊列中查找


          const queueArray = this._params.toArray();

          const found = queueArray.find(task => task.config.id === id);
          return (found == null ? void 0 : found.config) || null;
        }
        /**
         * 檢查是否存在指定 ID 的任務
         * @param id 任務 ID
         * @returns 是否存在
         */


        hasTaskWithId(id) {
          return this.getTaskById(id) !== null;
        }
        /**
         * 根據標籤查找所有任務
         * @param tag 任務標籤
         * @returns 符合標籤的任務陣列
         */


        getTasksByTag(tag) {
          var _this$_currentTask3;

          if (!tag) return [];
          const result = []; // 檢查當前執行的任務

          if (((_this$_currentTask3 = this._currentTask) == null ? void 0 : _this$_currentTask3.config.tag) === tag) {
            result.push(this._currentTask.config);
          } // 在隊列中查找


          const queueArray = this._params.toArray();

          const matchingTasks = queueArray.filter(task => task.config.tag === tag);
          result.push(...matchingTasks.map(task => task.config));
          return result;
        }
        /**
         * 獲取所有任務的摘要資訊
         * @returns 任務摘要陣列
         */


        getTaskSummary() {
          const result = []; // 當前任務

          if (this._currentTask) {
            const config = this._currentTask.config;
            result.push({
              id: config.id,
              tag: config.tag
            });
          } // 隊列中的任務


          const queueArray = this._params.toArray();

          queueArray.forEach(task => {
            const config = task.config;
            result.push({
              id: config.id,
              tag: config.tag
            });
          });
          return result;
        }
        /**
        * 添加任務到隊列 (重載1: 直接傳參數)
        * @param duration 持續時間（秒）
        * @param onUpdate 更新回調
        * @param onComplete 完成回調
        * @param onStart 開始回調
        */

        /**
         * 添加任務到隊列 (重載2: 傳 UniTask 對象)
         * @param task 任務對象
         */


        /**
         * 添加任務到隊列的實現
         */
        addTask(durationOrTask, onUpdate, onComplete, onStart) {
          let task;

          if (typeof durationOrTask === 'number') {
            // 重載1: 傳統方式
            if (durationOrTask < 0) {
              console.warn('UniTimer: duration cannot be negative');
              return;
            }

            task = new UniTask();
            task.duration = durationOrTask;
            task.onUpdate = onUpdate;
            task.onComplete = onComplete;
            task.onStart = onStart;
          } else {
            // 重載2: UniTask 對象
            task = durationOrTask;

            if (task.duration < 0) {
              console.warn('UniTimer: duration cannot be negative');
              return;
            }
          } // 包裝成執行對象


          const execution = new UniRuntimeTask(task);

          this._params.enqueue(execution);

          this._updateCurrentTask();
        }
        /**
         * 添加回調任務（立即執行）
         * @param callback 要執行的回調
         */


        addCallback(callback) {
          this.addTask(0, null, callback);
        }
        /**
         * 添加延遲任務
         * @param delay 延遲時間
         */


        addDelay(delay) {
          this.addTask(delay, null);
        }
        /**
         * 添加並行執行的任務組
         * @param tasks 任務陣列，將同時執行
         * 
         * @example
         * ```typescript
         * const moveTask = new UniTask();
         * moveTask.duration = 1.0;
         * moveTask.onUpdate = (progress) => { 移動邏輯 };
         * 
         * const scaleTask = new UniTask();
         * scaleTask.duration = 1.5;
         * scaleTask.onUpdate = (progress) => { 縮放邏輯 };
         * 
         * timer.addParallel([moveTask, scaleTask]);
         * 整個並行組會在1.5秒(最長的)後完成
         * ```
         */


        addParallel(tasks) {
          if (!tasks || tasks.length === 0) {
            console.warn('UniTimer: Empty parallel group');
            return;
          } // 找出最長的持續時間


          const maxDuration = Math.max(...tasks.map(task => task.duration)); // 為每個任務創建執行對象來跟蹤狀態

          const executions = tasks.map(task => new UniRuntimeTask(task)); // 創建一個包裝的 UniTask 來管理整個並行組

          const parallelParam = new UniTask();
          parallelParam.duration = maxDuration; // 設置並行組的開始回調

          parallelParam.onStart = () => {
            // 初始化所有子執行對象狀態並觸發開始回調
            executions.forEach(execution => {
              execution.state = UniTaskState.Running;
              execution.config.onStart == null || execution.config.onStart();
            });
          }; // 設置並行組的更新回調


          parallelParam.onUpdate = progress => {
            executions.forEach(execution => {
              if (execution.config.duration > 0 && execution.state === UniTaskState.Running) {
                // 計算每個子任務的進度
                const taskProgress = Math.min(1, progress * maxDuration / execution.config.duration);
                execution.config.onUpdate == null || execution.config.onUpdate(taskProgress); // 檢查子任務是否剛完成

                if (taskProgress >= 1) {
                  execution.state = UniTaskState.Completed;
                  execution.config.onComplete == null || execution.config.onComplete();
                }
              }
            });
          }; // 設置並行組的完成回調


          parallelParam.onComplete = () => {
            // 確保所有子任務都已完成
            executions.forEach(execution => {
              if (execution.state !== UniTaskState.Completed) {
                execution.config.onUpdate == null || execution.config.onUpdate(1);
                execution.state = UniTaskState.Completed;
                execution.config.onComplete == null || execution.config.onComplete();
              }
            });
          }; // 添加到隊列


          this.addTask(parallelParam);
        }
        /**
         * 暫停當前執行
         */


        pause() {
          if (this._currentTask && this._currentTask.state === UniTaskState.Running) {
            this._currentTask.state = UniTaskState.Paused;
          }
        }
        /**
         * 恢復執行
         */


        resume() {
          if (this._currentTask && this._currentTask.state === UniTaskState.Paused) {
            this._currentTask.state = UniTaskState.Running;
          }
        }
        /**
         * 跳過當前正在執行的動畫
         * 設置標記，在下次更新時處理
         */


        skipCurrent() {
          this._pendingSkip = true;
          this._skipAll = false; // 只跳過當前
        }
        /**
         * 跳過所有剩餘的動畫
         * 設置標記，在下次更新時處理
         */


        skipAll() {
          this._pendingSkip = true;
          this._skipAll = true; // 跳過所有
        }
        /**
         * 停止並清空所有任務
         */


        stop() {
          // 清空隊列
          while (this._params.count > 0) {
            const execution = this._params.dequeue();

            execution.reset();
          } // 重置當前任務


          if (this._currentTask) {
            this._currentTask.reset();

            this._currentTask = null;
          } // 清空剩餘時間


          this._leftDeltaTime = 0;
        }
        /**
         * 清空剩餘的deltaTime
         */


        clearLeftDeltaTime() {
          this._leftDeltaTime = 0;
        }
        /**
         * 更新時間控制器
         * @param deltaTime 幀時間
         */


        updateTime(deltaTime) {
          if (this._currentTask === null || this._currentTask.state === UniTaskState.Paused) {
            return;
          } // 累積時間，考慮時間縮放


          if (this._params.count > 0) {
            this._leftDeltaTime += deltaTime * this.timeScale;
          } else {
            this._leftDeltaTime = deltaTime * this.timeScale;
          } // 處理任務


          this._processTasks();
        }
        /**
         * 更新當前任務
         */


        _updateCurrentTask() {
          while (this._currentTask === null && this._params.count > 0) {
            var _this$_currentTask$co, _this$_currentTask$co2, _this$triggerTaskStar;

            this._currentTask = this._params.dequeue();
            this._currentTask.state = UniTaskState.Running; // 觸發開始回調

            (_this$_currentTask$co = (_this$_currentTask$co2 = this._currentTask.config).onStart) == null || _this$_currentTask$co.call(_this$_currentTask$co2);
            (_this$triggerTaskStar = this.triggerTaskStart) == null || _this$triggerTaskStar.call(this, this._currentTask.config); // 檢查是否需要跳過（統一條件）

            if (this._pendingSkip || this._currentTask.config.shouldSkip) {
              this._skipCurrentTask(); // 統一的 pendingSkip 清除邏輯


              if (!this._skipAll) {
                this._pendingSkip = false;
              }

              continue; // 繼續循環處理下一個任務
            } // 如果是立即完成的任務（duration為0），直接處理


            if (this._currentTask.config.duration <= 0) {
              var _this$_currentTask$co3, _this$_currentTask$co4;

              (_this$_currentTask$co3 = (_this$_currentTask$co4 = this._currentTask.config).onUpdate) == null || _this$_currentTask$co3.call(_this$_currentTask$co4, 1);

              this._onTaskComplete();

              continue; // 繼續循環處理下一個任務
            } // 正常任務，退出循環


            break;
          } // 處理現有任務的跳過請求


          if (this._currentTask !== null && (this._pendingSkip || this._currentTask.config.shouldSkip)) {
            this._skipCurrentTask(); // 統一的 pendingSkip 清除邏輯


            if (!this._skipAll) {
              this._pendingSkip = false;
            } // 遞迴一次處理後續任務


            this._updateCurrentTask();
          }
        }
        /**
         * 跳過當前任務的實際執行邏輯
         */


        _skipCurrentTask() {
          if (this._currentTask === null) return; // 如果還沒開始，先觸發開始回調

          if (this._currentTask.currentTime === 0) {
            var _this$_currentTask$co5, _this$_currentTask$co6, _this$triggerTaskStar2;

            (_this$_currentTask$co5 = (_this$_currentTask$co6 = this._currentTask.config).onStart) == null || _this$_currentTask$co5.call(_this$_currentTask$co6);
            (_this$triggerTaskStar2 = this.triggerTaskStart) == null || _this$triggerTaskStar2.call(this, this._currentTask.config);
          } // 設置到完成狀態


          this._currentTask.currentTime = this._currentTask.config.duration; // 觸發最終更新回調

          if (this._currentTask.config.onUpdate) {
            this._currentTask.config.onUpdate(1.0);
          } // 完成當前任務


          this._onTaskComplete();
        }
        /**
         * 處理任務隊列
         */


        _processTasks() {
          if (this._currentTask === null) return; // 更新当前参数时间

          if (this._currentTask.remainingTime > this._leftDeltaTime) {
            this._currentTask.currentTime += this._leftDeltaTime;
            this._leftDeltaTime = 0;
          } else {
            this._leftDeltaTime -= this._currentTask.remainingTime;
            this._currentTask.currentTime = this._currentTask.config.duration;
          } // 調用更新回調


          if (this._currentTask.config.onUpdate && this._currentTask.config.duration > 0) {
            this._currentTask.config.onUpdate(this._currentTask.progress);
          } // 檢查是否完成


          if (this._currentTask.isCompleted) {
            this._onTaskComplete();
          } // 更新下一個任務


          this._updateCurrentTask(); // 如果還有剩餘時間且有新任務，繼續處理


          if (this._currentTask !== null && this._leftDeltaTime > 0) {
            this._processTasks();
          }
        }
        /**
         * 處理任務完成
         */


        _onTaskComplete() {
          var _this$_currentTask$co7, _this$_currentTask$co8, _this$triggerTaskComp;

          if (this._currentTask === null) return;
          this._currentTask.state = UniTaskState.Completed; // 觸發完成回調

          (_this$_currentTask$co7 = (_this$_currentTask$co8 = this._currentTask.config).onComplete) == null || _this$_currentTask$co7.call(_this$_currentTask$co8);
          (_this$triggerTaskComp = this.triggerTaskComplete) == null || _this$triggerTaskComp.call(this, this._currentTask.config); // 檢查是否所有任務都已完成

          const allCompleted = this._params.isEmpty; // 重置當前任務

          this._currentTask.reset();

          this._currentTask = null; // 如果是 skipAll 且還有剩餘動畫，保持跳過標記

          if (this._skipAll && !allCompleted) {// 保持 _pendingSkip = true，繼續跳過下一個
          } else {
            // 清除跳過標記
            this._pendingSkip = false;
            this._skipAll = false;
          } // 如果所有任務都已完成，觸發回調


          if (allCompleted) {
            this.triggerAllComplete();
          }
        }

        triggerTaskStart(task) {
          var _this$onTaskStart, _this$onTaskStartOnce;

          (_this$onTaskStart = this.onTaskStart) == null || _this$onTaskStart.call(this, task);
          (_this$onTaskStartOnce = this.onTaskStartOnce) == null || _this$onTaskStartOnce.call(this, task);
          this.onTaskStartOnce = null;
        }

        triggerTaskComplete(task) {
          var _this$onTaskComplete, _this$onTaskCompleteO;

          (_this$onTaskComplete = this.onTaskComplete) == null || _this$onTaskComplete.call(this, task);
          (_this$onTaskCompleteO = this.onTaskCompleteOnce) == null || _this$onTaskCompleteO.call(this, task);
          this.onTaskCompleteOnce = null;
        }

        triggerAllComplete() {
          var _this$onAllComplete, _this$onAllCompleteOn;

          (_this$onAllComplete = this.onAllComplete) == null || _this$onAllComplete.call(this);
          (_this$onAllCompleteOn = this.onAllCompleteOnce) == null || _this$onAllCompleteOn.call(this);
          this.onAllCompleteOnce = null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=768c219dbe9ab3890ad845e3b73a15ac66f144b8.js.map