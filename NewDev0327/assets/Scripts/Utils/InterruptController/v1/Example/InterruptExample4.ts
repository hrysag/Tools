/**
 * ============================================================================
 * InterruptController 範例 4：多階段流程串聯
 * ============================================================================
 * 
 * ## 本範例展示的核心概念
 * 
 * 1. **多階段順序執行**
 *    展示 InterruptController 的核心價值：
 *    一個 trigger() 控制整個長流程中的所有可中斷點
 * 
 * 2. **共享 Controller 的設計**
 *    ```typescript
 *    // 所有階段共享同一個 controller
 *    await stage1(this.interruptController);
 *    await stage2(this.interruptController);
 *    await stage3(this.interruptController);
 *    
 *    // 一次 trigger() 影響所有階段
 *    this.interruptController.trigger();
 *    ```
 * 
 * 3. **中斷策略：加速 vs 跳過**
 *    本範例採用「加速播完」而非「直接跳過」：
 *    - 正在執行的階段：加速播完（0.4 秒內完成）
 *    - 尚未開始的階段：仍會執行，但如果被中斷會加速
 *    - 好處：玩家能看到完整流程，只是很快
 * 
 * ## 使用場景
 * 
 * - 老虎機贏分演出（顯示贏分線 → 慶祝動畫 → 分數跳動）
 * - Free Game 進入流程（提示 → 閃爍 → 轉場 → 開場）
 * - 教學流程（步驟 1 → 步驟 2 → 步驟 3 → 完成）
 * - 任何需要「一鍵跳過整段演出」的場景
 * 
 * ## 關鍵學習點
 * 
 * 1. **高層流程看起來很簡潔**
 *    ```typescript
 *    await stage1();
 *    await stage2();
 *    await stage3();
 *    ```
 *    雖然每個階段內部可能很複雜，但流程控制清晰易讀
 * 
 * 2. **中斷處理的複雜度封裝**
 *    每個階段自己處理如何中斷：
 *    - Spine 動畫：切換到 Default
 *    - Tween 動畫：停止並加速播完
 *    - 各專案可根據需求自訂策略
 * 
 * 3. **Tween 加速的實作技巧**
 *    ```typescript
 *    // 中斷時
 *    currentTween.stop();  // 停止當前 tween
 *    
 *    // 創建加速版本（原本 2 秒 → 現在 0.4 秒）
 *    tween(target)
 *        .to(0.2, { ... })
 *        .to(0.2, { ... })
 *        .call(() => interruptResolve?.())
 *        .start();
 *    ```
 * 
 * ## 設計哲學
 * 
 * InterruptController 是一種「複雜度轉移」：
 * - 高層流程複雜度 ↓（簡潔清晰）
 * - 底層實作複雜度 ↑（封裝在各階段內）
 * 
 * 值不值得？取決於：
 * - ✅ 如果有 3+ 個可中斷階段 → 值得
 * - ✅ 如果流程會在多處重複使用 → 值得
 * - ❌ 如果只有 1-2 個簡單操作 → 可能不值得
 * 
 * ## Tween 整合注意事項
 * 
 * Cocos Creator 的 Tween 無法被外部直接中斷：
 * - tween.stop() 只是停止，不會 resolve Promise
 * - 需要用 Promise.race + 手動 resolve 模式
 * - 這是第三方 API 整合的常見模式（參考 Example2）
 * 
 * ============================================================================
 */

import { _decorator, Button, Component, Label, Node, Tween, tween, UITransform, Vec3 } from 'cc';
import { InterruptExample3 } from './InterruptExample3';
import { InterruptController } from '../InterruptController';
const { ccclass, property } = _decorator;

@ccclass('InterruptExample4')
export class InterruptExample4 extends Component {
    @property([InterruptExample3])
    public skeletons: InterruptExample3[] = [];

    @property(UITransform)
    public line: UITransform = null!;

    @property(Node)
    public point: Node = null!;

    @property(Button)
    public playButton: Button = null!;

    protected interruptController: InterruptController = new InterruptController();
    protected isPlaying = false;

    protected update(dt: number): void {
        if (this.isPlaying) {
            this.playButton.getComponentInChildren(Label)!.string = 'Stop Animation';
        } else {
            this.playButton.getComponentInChildren(Label)!.string = 'Play Animation';
        }
    }

    /**
     * 範例 4：多階段流程串聯 - 加速策略的實踐
     * 
     * 展示如何用單一 InterruptController 管理複雜的多階段流程：
     * - 階段 1：Spine 動畫（Connect）
     * - 階段 2：Line 動畫（寬度 0→100）
     * - 階段 3：Point 動畫（縮放 0→1）
     * 
     * 中斷策略：加速完成 vs 直接跳過
     * 
     * ❌ 「跳過」策略（不推薦）：
     * ```typescript
     * interruptFn: () => {
     *     if (isCurrentStage) {
     *         // 跳過當前階段，執行下一階段
     *     }
     * }
     * ```
     * 問題：玩家看到不連貫的視覺體驗（突然跳到下個階段）
     * 
     * ✅ 「加速」策略（本範例採用）：
     * ```typescript
     * interruptFn: () => {
     *     // 立即將動畫設定為完成狀態
     *     tweenTarget.stop();  // 停止 Tween
     *     obj.width = targetValue;  // 直接設定目標值
     *     interruptResolve?.();  // 釋放 Promise
     * }
     * ```
     * 優點：每個階段都會「快速完成」，玩家能看到完整流程
     * 
     * 實現細節：
     * 
     * 1. 共用單一 InterruptController：
     *    - reset() 只在流程開始時呼叫一次
     *    - 所有階段都使用同一個 controller
     *    - trigger() 會同時觸發所有已註冊的階段
     * 
     * 2. 每個階段使用 withInterrupt：
     *    ```typescript
     *    await this.interruptController.withInterrupt(
     *        async (isInterrupted) => {
     *            // workFn: 正常執行動畫
     *            await someTween();
     *        },
     *        () => {
     *            // interruptFn: 加速完成
     *            tweenTarget.stop();
     *            setFinalValue();
     *            interruptResolve?.();  // 關鍵！讓 race 結束
     *        }
     *    );
     *    ```
     * 
     * 3. 為什麼需要 interruptResolve：
     *    - Tween/Spine 等第三方 API 無法直接中斷 Promise
     *    - stop() 只是停止動畫，不會讓 Promise resolve
     *    - 需要用 Promise.race + 手動 resolve 來實現
     * 
     * 執行流程範例：
     * 
     * 正常情況（無中斷）：
     * 1. Spine 播放 1 秒 → 完成
     * 2. Line 動畫 1 秒 → 完成
     * 3. Point 動畫 1 秒 → 完成
     * 總時間：3 秒
     * 
     * 在階段 2 觸發中斷：
     * 1. Spine 播完（已完成）
     * 2. Line 立即完成（interruptFn 設定最終值）
     * 3. Point 立即完成（LIFO 執行，已註冊）
     * 總時間：~1 秒 + 瞬間
     * 
     * 設計哲學：
     * - 高層簡單：example4() 只需順序寫出 3 個階段，一目了然
     * - 低層複雜：每個階段的 workFn/interruptFn 需處理加速邏輯
     * - 這是「複雜度轉移」：整體流程簡潔，細節交給 withInterrupt 處理
     * 
     * 為何不用 if (isInterrupted()) return：
     * - 那會產生「跳過」效果，不是「加速」
     * - 玩家會看到某些階段消失（視覺不連貫）
     * - 加速策略讓每個階段都執行，只是瞬間完成
     */
    public async example4() {
        if (this.isPlaying) return;

        this.isPlaying = true;
        this.interruptController.reset();
        this.line.width = 0;
        this.point.setScale(0, 0, 1);

        console.log('=== 開始多階段流程 ===');

        // 階段 1：播放 Spine 動畫
        console.log('階段 1: Spine 動畫');
        let promiseList: Promise<void>[] = [];
        for (const skeleton of this.skeletons) {
            promiseList.push(skeleton.example3(this.interruptController));
        }
        await Promise.all(promiseList);

        promiseList = [];
        // 階段 2：Line 動畫（中斷時會加速）
        console.log('階段 2: Line 動畫');
        promiseList.push(this.playLineAnimation());

        // 階段 3：Point 動畫（中斷時會加速）
        console.log('階段 3: Point 動畫');
        promiseList.push(this.showPointAnimation());

        await Promise.all(promiseList);

        console.log('=== 多階段流程結束 ===');
        this.isPlaying = false;
    }

    protected async playLineAnimation(): Promise<void> {
        let lineTween: Tween<UITransform> | null = null;
        let interruptResolve: (() => void) | null = null;
        const interruptPromise = new Promise<void>((resolve) => {
            interruptResolve = resolve;
        });

        await this.interruptController.withInterrupt(
            async (isInterrupted) => {
                const tweenPromise = new Promise<void>((resolve) => {
                    if (!isInterrupted()) {
                        lineTween = tween(this.line)
                            .to(0.5, { width: 600 })
                            .delay(1)
                            .set({ width: 0 })
                            .call(() => resolve())
                            .start();
                    }
                });

                await Promise.race([tweenPromise, interruptPromise]);
            },
            () => {
                console.log('中斷 Line 動畫 - 加速播完');
                if (lineTween) {
                    lineTween.stop();
                }

                // 加速播完剩餘動畫（0.2 秒內完成）
                tween(this.line)
                    .to(0.2, { width: 600 })
                    .set({ width: 0 })
                    .call(() => {
                        interruptResolve?.();
                    })
                    .start();
            }
        );
    }

    protected async showPointAnimation(): Promise<void> {
        let pointTween: Tween<Node> | null = null;
        let interruptResolve: (() => void) | null = null;
        const interruptPromise = new Promise<void>((resolve) => {
            interruptResolve = resolve;
        });

        let isMaxScaleReached = false;
        await this.interruptController.withInterrupt(
            async (isInterrupted) => {
                if (!isInterrupted()) {
                    const tweenPromise = new Promise<void>((resolve) => {
                        pointTween = tween(this.point)
                            .delay(0.5)
                            .to(0.5, { scale: new Vec3(1, 1, 1) })
                            .call(() => {
                                isMaxScaleReached = true;
                            })
                            .to(0.5, { scale: new Vec3(0, 0, 1) })
                            .call(() => resolve())
                            .start();
                    });

                    await Promise.race([tweenPromise, interruptPromise]);
                }
            },
            () => {
                console.log('中斷 Point 動畫 - 加速播完');
                if (pointTween) {
                    pointTween.stop();
                }
                if (!isMaxScaleReached) {
                    this.point.setScale(1, 1, 1);
                }
                // 加速播完剩餘動畫（0.2 秒內完成）
                tween(this.point)
                    .to(0.2, { scale: new Vec3(0, 0, 1) })
                    .call(() => {
                        interruptResolve?.();
                    })
                    .start();

            }
        );
    }

    public playButtonClick() {
        if (!this.isPlaying) {
            this.example4();
        } else {
            this.interruptController.trigger();
        }
    }
}
