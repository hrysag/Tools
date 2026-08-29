/**
 * ============================================================================
 * InterruptController 範例 2：Spine 動畫中斷
 * ============================================================================
 * 
 * ## 本範例展示的核心概念
 * 
 * 1. **Promise.race 模式**
 *    當第三方 API（如 Spine.playPromise）無法被外部中斷時，
 *    使用 Promise.race + 手動控制的 Promise 來實現中斷功能。
 * 
 * 2. **處理無法中斷的 Promise**
 *    - skeleton.playPromise() 只在動畫完成時 resolve
 *    - 如果中途切換動畫，原 Promise 永遠不會 resolve（卡住）
 *    - 解決方案：創建一個可以手動 resolve 的 Promise，用 race 競爭
 * 
 * 3. **interruptResolve 模式**
 *    ```typescript
 *    let interruptResolve: (() => void) | null = null;
 *    const interruptPromise = new Promise<void>((resolve) => {
 *        interruptResolve = resolve;
 *    });
 *    
 *    // 在 interruptFn 中調用
 *    interruptResolve?.();  // 讓 Promise.race 完成
 *    ```
 * 
 * ## 使用場景
 * 
 * - Spine 動畫的跳過功能
 * - 任何使用 Promise 但無法被外部中斷的異步操作
 * - 需要在中斷時執行清理邏輯（切換動畫、重置狀態等）
 * 
 * ## 關鍵學習點
 * 
 * 1. **這是整合第三方 API 的標準模式**
 *    當第三方工具不支援中斷時，用 Promise.race 包裝
 * 
 * 2. **interruptFn 必須調用 interruptResolve**
 *    否則 workFn 會卡在 await Promise.race 那一行
 * 
 * 3. **防止重複執行**
 *    使用 isPlaying flag 防止動畫播放期間重複觸發
 * 
 * ## 延伸思考
 * 
 * 這個模式同樣適用於：
 * - Animation 組件的 playPromise
 * - 自訂的異步動畫系統
 * - 任何「等待某事完成」但無法被中斷的場景
 * 
 * ============================================================================
 */

import { _decorator, Button, Component, Label, Node, sp } from 'cc';
import { InterruptController } from '../InterruptController';
const { ccclass, property } = _decorator;

@ccclass('InterruptExample2')
export class InterruptExample2 extends Component {
    @property(sp.Skeleton)
    public skeleton: sp.Skeleton = null!;

    @property(Button)
    public playButton: Button = null!;

    protected interruptController = new InterruptController();
    protected isPlaying = false;

    /**
     * 範例 2：播放 Spine 動畫並支援中斷
     * 
     * 核心挑戰：Spine 的 playPromise() 不支援中斷
     * 解決方案：使用 Promise.race 模式
     * 
     * 實現步驟：
     * 
     * 1. 創建可控制的 interruptPromise：
     *    ```typescript
     *    let interruptResolve: (() => void) | null = null;
     *    const interruptPromise = new Promise<void>((resolve) => {
     *        interruptResolve = resolve;  // 保存 resolve 函數以便後續調用
     *    });
     *    ```
     * 
     * 2. workFn 使用 Promise.race 競速：
     *    ```typescript
     *    await Promise.race([
     *        this.skeleton.playPromise('Connect'),  // 原本無法中斷的 API
     *        interruptPromise                        // 我們控制的 Promise
     *    ]);
     *    ```
     *    只要其中一個完成，race 就會返回
     * 
     * 3. interruptFn 觸發 interruptResolve：
     *    ```typescript
     *    interruptResolve?.();  // ⚠️ 這是關鍵！讓 race 立即完成
     *    ```
     * 
     * 執行流程：
     * - 正常完成：Spine 動畫播完 → race 返回 → 流程結束
     * - 觸發中斷：trigger() → interruptFn → interruptResolve() → race 返回 → 流程結束
     * 
     * 注意事項：
     * - 中斷後 Spine 可能仍在播放（需手動呼叫 playAnimPromise('Default') 停止）
     * - 這個模式適用於所有無法中斷的第三方 API
     * - 使用 ?. 安全調用 resolve 以避免重複觸發時的錯誤
     */
    public async example2() {
        if (this.isPlaying) {
            console.warn('動畫正在播放中，請勿重複觸發');
            return;
        }

        this.interruptController.reset();
        this.isPlaying = true;
        console.log('開始播放 Spine Connect 動畫');

        let interruptResolve: (() => void) | null = null;
        const interruptPromise = new Promise<void>((resolve) => {
            interruptResolve = resolve;
        });
        await this.interruptController.withInterrupt(
            async (isInterrupted) => {
                await Promise.race([this.skeleton.playPromise('Connect'), interruptPromise]);

                console.log('Connect 動畫播放完成');
            },
            () => {
                // 中斷時的處理：立即停止動畫
                console.log('中斷 Spine 動畫');
                this.skeleton.playAnimPromise('Default');
                interruptResolve?.();
            }
        );
        this.isPlaying = false;
    }

    /**
     * 觸發中斷
     */
    public stopAnimation() {
        this.interruptController.trigger();
    }

    protected update(dt: number): void {
        if (this.isPlaying) {
            this.playButton.getComponentInChildren(Label)!.string = 'Stop Animation';
        } else {
            this.playButton.getComponentInChildren(Label)!.string = 'Play Animation';
        }
    }

    public playButtonClick() {
        if (!this.isPlaying) {
            this.example2();
        } else {
            this.stopAnimation();
        }
    }
}


