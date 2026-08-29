/**
 * 中斷令牌類型
 * 用於識別已註冊的中斷處理函數
 */
export type InterruptToken = object;

/**
 * 中斷控制器 - 水閘模式
 * 
 * ## 設計理念
 * 
 * 像水閘一樣控制流程的中斷機制：
 * - **水閘關閉**（初始狀態）：可以註冊中斷處理函數，流程正常執行
 * - **水閘開啟**（觸發中斷）：調用 `trigger()` 後，按照 LIFO（後進先出）順序執行所有已註冊的處理函數
 * - **水閘關閉**（重置狀態）：調用 `reset()` 後，清空所有註冊，準備開始新的流程
 * 
 * ## 使用場景
 * 
 * 適用於需要「跳過」或「中斷」長流程的場景，例如：
 * - 遊戲開場動畫的跳過功能
 * - 對話系統的快進功能
 * - 教學流程的中斷處理
 * 
 * ## API 選擇指南
 * 
 * ### withInterrupt - 高階 API（推薦優先使用）
 * - 自動管理註冊與清理
 * - 適合單一非同步操作
 * - 從開始就可以被中斷
 * 
 * ```typescript
 * await controller.withInterrupt(
 *     async () => await playAnimation(),
 *     () => stopAnimation()
 * );
 * ```
 * 
 * ### register/unregister - 低階 API（需要精確控制時使用）
 * - 手動管理註冊與清理
 * - 可以精確控制「從什麼時候開始」可以被中斷
 * - 適合需要延遲註冊的場景
 * 
 * ```typescript
 * // 前 1 秒不可中斷
 * await delay(1000);
 * 
 * // 之後才可以中斷
 * const token = controller.register(() => cleanup());
 * await doWork();
 * controller.unregister(token);
 * ```
 * 
 * ## 執行順序
 * 
 * 中斷觸發時，按照 **LIFO（後進先出）** 順序執行：
 * ```typescript
 * controller.register(() => console.log('1'));
 * controller.register(() => console.log('2'));
 * controller.register(() => console.log('3'));
 * controller.trigger();  // 輸出: 3, 2, 1
 * ```
 * 
 * 這樣的順序設計符合清理邏輯：後建立的資源先清理。
 * 
 * @example
 * ```typescript
 * // 創建控制器
 * const controller = new InterruptController();
 * 
 * // 開始長流程
 * async function longGameFlow() {
 *     // 多個可中斷的步驟
 *     await controller.withInterrupt(
 *         async () => await playIntro(),
 *         () => stopIntro()
 *     );
 *     
 *     await controller.withInterrupt(
 *         async () => await showDialogue(),
 *         () => hideDialogue()
 *     );
 * }
 * 
 * // 觸發中斷（例如：跳過按鈕）
 * skipButton.onClick = () => controller.trigger();
 * 
 * // 流程結束後重置
 * controller.reset();
 * ```
 */
export class InterruptController {
    private _interrupted = false;
    private _listenerStack: { token: InterruptToken; fn: () => void }[] = [];

    /**
     * 查詢是否已觸發中斷
     */
    public get isInterrupted(): boolean {
        return this._interrupted;
    }

    /**
     * 註冊中斷處理函數
     * 
     * 當 `trigger()` 被調用時，會執行此處理函數。
     * 
     * **注意事項：**
     * - 必須手動調用 `unregister()` 來清理，否則可能造成記憶體洩漏
     * - 如果已經觸發中斷，註冊時會立即執行處理函數
     * - 大部分情況下建議使用 `withInterrupt()`，它會自動處理清理
     * 
     * **使用時機：**
     * - 需要精確控制「從什麼時候開始」可以被中斷
     * - 需要在非同步操作外部管理生命週期
     * - 需要條件式註冊中斷處理
     * 
     * @param fn 中斷時要執行的處理函數
     * @returns 中斷令牌，用於後續的 `unregister()` 調用
     * 
     * @example
     * ```typescript
     * // 延遲註冊：前 1 秒不可中斷
     * await delay(1000);
     * const token = controller.register(() => stopAnimation());
     * await playRestOfAnimation();
     * controller.unregister(token);
     * ```
     */
    public register(fn: () => void): InterruptToken {
        if (this._interrupted) {
            fn();
            return {}; // 仍回傳無效 token 以防 null
        }

        const token: InterruptToken = {};
        this._listenerStack.push({ token, fn });
        return token;
    }

    /**
     * 移除已註冊的中斷處理函數
     * 
     * @param token 由 `register()` 回傳的中斷令牌
     * 
     * @example
     * ```typescript
     * const token = controller.register(() => cleanup());
     * // ... 做一些工作
     * controller.unregister(token);  // 清理註冊
     * ```
     */
    public unregister(token: InterruptToken): void {
        const idx = this._listenerStack.findIndex(entry => entry.token === token);
        if (idx !== -1) {
            this._listenerStack.splice(idx, 1);
        }
    }

    /**
     * 觸發中斷
     * 
     * 按照 **LIFO（後進先出）** 順序執行所有已註冊的中斷處理函數。
     * 
     * **特性：**
     * - 重複調用 `trigger()` 不會重複執行（只會觸發一次）
     * - 執行過程中的錯誤會被捕獲並記錄，不會中斷其他處理函數
     * - 執行完後會自動清空所有已註冊的處理函數
     * - 之後的 `register()` 調用會立即執行處理函數
     * 
     * @example
     * ```typescript
     * // 通常綁定在跳過按鈕上
     * skipButton.onClick = () => controller.trigger();
     * ```
     */
    public trigger(): void {
        if (this._interrupted) return;
        this._interrupted = true;

        for (let i = this._listenerStack.length - 1; i >= 0; i--) {
            try {
                this._listenerStack[i].fn();
            } catch (e) {
                console.error('Error in InterruptController listener:', e);
            }
        }

        this._listenerStack.length = 0;
    }

    /**
     * 重置控制器
     * 
     * 清空所有已註冊的處理函數，並重置中斷狀態。
     * 
     * **使用時機：**
     * - 當一個完整的流程結束時
     * - 準備開始新的可中斷流程時
     * 
     * **注意：**
     * 外部持有的 token 在 reset 後會變得無效。
     * 
     * @example
     * ```typescript
     * // 流程結束後重置
     * await playFullGameSequence();
     * controller.reset();  // 準備下一輪
     * ```
     */
    public reset(): void {
        this._interrupted = false;
        this._listenerStack.length = 0;
    }

    /**
     * 查詢是否有已註冊的處理函數
     * 
     * @returns 如果有至少一個已註冊的處理函數則回傳 true
     */
    public hasListeners(): boolean {
        return this._listenerStack.length > 0;
    }

    /**
     * 執行可中斷的非同步工作（高階 API）
     * 
     * 自動處理註冊與清理，推薦優先使用此方法。
     * 
     * **執行流程：**
     * 1. 註冊中斷處理函數
     * 2. 執行工作函數
     * 3. 無論成功或失敗，都會自動清理註冊
     * 
     * **注意事項：**
     * - `workFn` 會**一定執行**，即使已經觸發中斷
     * - `interruptFn` 只在中斷觸發時執行
     * - 可以在 `workFn` 內透過 `isInterrupted()` 檢查中斷狀態
     * 
     * @param workFn 要執行的工作函數，接收 `isInterrupted` 檢查函數
     * @param interruptFn 中斷時要執行的處理函數
     * @returns 工作函數的結果，如果被中斷可能為 undefined
     * 
     * @example
     * ```typescript
     * // 基本使用
     * await controller.withInterrupt(
     *     async () => {
     *         await playAnimation();
     *     },
     *     () => {
     *         stopAnimation();
     *     }
     * );
     * 
     * // 在工作中檢查中斷狀態
     * await controller.withInterrupt(
     *     async (isInterrupted) => {
     *         await step1();
     *         if (isInterrupted()) return;  // 提早結束
     *         
     *         await step2();
     *         if (isInterrupted()) return;
     *         
     *         await step3();
     *     },
     *     () => cleanup()
     * );
     * ```
     */
    public async withInterrupt<T>(
        workFn: (isInterrupted: () => boolean) => Promise<T>,
        interruptFn: () => void
    ): Promise<T | undefined> {
        let interrupted = false;
        const listener = () => {
            interruptFn();
            interrupted = true;
        };

        const token = this.register(listener);

        try {
            return await workFn(() => interrupted || this.isInterrupted);
        } finally {
            this.unregister(token);
        }
    }
}

/**
 * 輔助函數：執行可中斷的非同步工作（獨立函數版本）
 * 
 * 這是 `InterruptController.withInterrupt()` 的獨立函數版本，
 * 用於向後兼容或偏好函數式風格的場景。
 * 
 * @param controller 中斷控制器實例
 * @param workFn 要執行的工作函數
 * @param interruptFn 中斷時要執行的處理函數
 * @returns 工作函數的結果，如果被中斷可能為 undefined
 * 
 * @deprecated 建議使用 `controller.withInterrupt()` 方法代替
 */
export async function withInterrupt<T>(
    controller: InterruptController,
    workFn: (isInterrupted: () => boolean) => Promise<T>,
    interruptFn: () => void
): Promise<T | undefined> {
    return controller.withInterrupt(workFn, interruptFn);
}
