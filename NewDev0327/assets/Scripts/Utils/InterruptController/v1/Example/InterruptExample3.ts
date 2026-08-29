/**
 * ============================================================================
 * InterruptController 範例 3：延遲允許中斷
 * ============================================================================
 * 
 * ## 本範例展示的核心概念
 * 
 * 1. **register/unregister 低階 API**
 *    當需要精確控制「何時可以開始中斷」時，使用低階 API：
 *    - register() - 手動註冊中斷處理
 *    - unregister() - 手動移除註冊
 * 
 * 2. **延遲註冊模式**
 *    ```typescript
 *    // 前 N 秒不註冊
 *    await Utility.waitPromise(delaySeconds);
 *    
 *    // N 秒後才註冊中斷處理
 *    const token = controller.register(() => { ... });
 *    ```
 * 
 * 3. **防止過早註冊**
 *    使用 registrationAllowed flag 確保：
 *    - 如果動畫在延遲期間就結束了，不要再註冊
 *    - 避免註冊後沒有清理導致的記憶體洩漏
 * 
 * ## 使用場景
 * 
 * - 重要劇情動畫（前幾秒必看）
 * - 廣告或教學內容（需觀看一定時間）
 * - 付費內容的防止誤觸跳過
 * 
 * ## 與 withInterrupt 的差異
 * 
 * | 特性 | withInterrupt | register/unregister |
 * |------|---------------|---------------------|
 * | 註冊時機 | 立即 | 可延遲 |
 * | 清理方式 | 自動 | 手動 |
 * | 複雜度 | 簡單 | 較高 |
 * | 適用場景 | 一般情況 | 需精確控制時 |
 * 
 * ## 關鍵學習點
 * 
 * 1. **兩個狀態標記的用途**
 *    - canInterrupt: 控制 UI 顯示（使用者可見）
 *    - registrationAllowed: 控制內部邏輯（防止延遲註冊）
 * 
 * 2. **必須手動清理**
 *    使用 register 後一定要 unregister，否則可能記憶體洩漏
 * 
 * 3. **延遲註冊的時機處理**
 *    如果動畫很短，可能在延遲完成前就結束了，
 *    需要用 registrationAllowed 避免無效註冊
 * 
 * ## 實作細節
 * 
 * 延遲註冊使用 .then() 而非 await，是為了：
 * - 讓註冊邏輯在背景執行
 * - 動畫播放不會被延遲阻塞
 * - 但要注意在清理前確保延遲已完成
 * 
 * ============================================================================
 */

import { _decorator, Button, Component, Label, Node, sp } from 'cc';
import { InterruptController, InterruptToken } from '../InterruptController';
import { Utility } from '../../../Core';
const { ccclass, property } = _decorator;

@ccclass('InterruptExample3')
export class InterruptExample3 extends Component {
    @property(sp.Skeleton)
    public skeleton: sp.Skeleton = null!;

    @property(Button)
    public playButton: Button = null!;

    @property({ tooltip: '幾秒後才允許中斷' })
    public delaySeconds: number = 0.5;

    protected interruptController = new InterruptController();
    protected isPlaying = false;
    protected canInterrupt = false;
    protected registrationAllowed = true; // 控制是否允許註冊（內部邏輯）

    /**
     * 範例 3：延遲中斷註冊 - 「前 N 秒不可跳過」機制
     * 
     * 使用場景：
     * - 重要演出必須播放至少 N 秒
     * - 前 N 秒強制觀看，之後才能跳過
     * - 例如：老虎機的大獎動畫、遊戲劇情過場
     * 
     * 為什麼需要 register/unregister 低階 API：
     * - withInterrupt 在呼叫時就註冊，無法「延遲註冊」
     * - 需要在動畫播放到一半時才註冊中斷處理
     * - 必須手動管理 token 以便後續清理
     * 
     * 實現技巧：
     * 
     * 1. 使用 registrationAllowed 旗標控制註冊時機：
     *    ```typescript
     *    this.registrationAllowed = true;  // 動畫開始
     *    
     *    Utility.waitPromise(N).then(() => {
     *        if (this.registrationAllowed) {  // 檢查動畫是否還在播放
     *            token = interruptController.register(() => { ... });
     *        }
     *    });
     *    
     *    // 動畫結束時
     *    this.registrationAllowed = false;  // 阻止延遲註冊執行
     *    ```
     * 
     * 2. 區分兩個旗標的用途：
     *    - registrationAllowed：控制「是否應該註冊」（內部邏輯）
     *    - canInterrupt：控制「UI 是否顯示可跳過」（外部呈現）
     * 
     * 3. token 管理：
     *    ```typescript
     *    let token: InterruptToken | null = null;
     *    token = interruptController.register(...);  // 註冊時儲存
     *    if (token) interruptController.unregister(token);  // 結束時清理
     *    ```
     * 
     * 執行流程：
     * - 0~N 秒：canInterrupt=false，玩家點擊無效（trigger 無處理函數）
     * - N 秒後：register() 註冊處理函數，canInterrupt=true，玩家可跳過
     * - 正常完成：registrationAllowed=false → 阻止延遲註冊 → unregister 清理
     * - 提早中斷：trigger() → 執行處理函數 → unregister 清理
     * 
     * 注意事項：
     * - 一定要在 finally 中 unregister(token)，避免記憶體洩漏
     * - registrationAllowed 檢查避免「動畫已結束但延遲註冊才執行」的競態條件
     * - 使用 Promise.race 模式配合 interruptResolve 實現中斷
     */
    public async example3(interruptController: InterruptController) {
        if (this.isPlaying) return;

        this.isPlaying = true;
        this.canInterrupt = false;
        this.registrationAllowed = true; // 允許延遲後註冊
        console.log('開始播放 Spine Connect 動畫');

        let interruptResolve: (() => void) | null = null;
        const interruptPromise = new Promise<void>((resolve) => {
            interruptResolve = resolve;
        });

        // 播放動畫
        const playPromise = this.skeleton.playPromise('Connect');

        // 延遲註冊中斷處理
        console.log(`前 ${this.delaySeconds} 秒不可中斷...`);

        let token: InterruptToken | null = null;
        Utility.waitPromise(this.delaySeconds).then(() => {
            // 檢查動畫是否還在播放（你的原始邏輯）
            if (this.registrationAllowed) {
                console.log('現在可以中斷了！');
                this.canInterrupt = true; // UI 顯示可中斷
                token = interruptController.register(() => {
                    console.log('中斷 Spine 動畫');
                    this.skeleton.playAnimPromise('Default');
                    interruptResolve?.();
                });
            } else {
                console.log('動畫已結束，不需要註冊');
            }
        });

        // 等待動畫完成或被中斷
        await Promise.race([playPromise, interruptPromise]);
        console.log('Connect 動畫結束');

        this.canInterrupt = false;
        this.registrationAllowed = false; // 阻止延遲完成後的註冊（你的原始設計）

        // 清理註冊
        if (token) {
            interruptController.unregister(token);
        }
        this.isPlaying = false;
    }

    protected update(dt: number): void {
        if (!this.playButton) return;

        const label = this.playButton.getComponentInChildren(Label);
        if (!label) return;

        if (this.isPlaying) {
            if (this.canInterrupt) {
                label.string = 'Stop Animation';
            } else {
                label.string = `${this.delaySeconds} 後可中斷`;
            }
        } else {
            label.string = 'Play Animation';
        }
    }

    public playButtonClick() {
        if (!this.isPlaying) {
            this.interruptController.reset();
            this.example3(this.interruptController);
        } else {
            console.log('觸發中斷...');
            this.interruptController.trigger();
        }
    }
}


