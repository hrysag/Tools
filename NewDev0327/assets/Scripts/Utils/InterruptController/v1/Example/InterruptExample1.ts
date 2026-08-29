/**
 * ============================================================================
 * InterruptController 範例 1：基礎滾輪快停
 * ============================================================================
 * 
 * ## 本範例展示的核心概念
 * 
 * 1. **withInterrupt() 的基本使用**
 *    - 高階 API，自動管理註冊與清理
 *    - 適合大部分可中斷的異步操作
 * 
 * 2. **水閘模式的基本流程**
 *    - reset() → 關閉水閘，準備新流程
 *    - withInterrupt() → 註冊中斷處理
 *    - trigger() → 開啟水閘，觸發所有中斷
 * 
 * 3. **簡單的快停實作**
 *    - 正常流程：iconAmount 從 10 逐步減到 0
 *    - 快停流程：立即將 iconAmount 設為 0
 * 
 * ## 使用場景
 * 
 * - 老虎機滾輪快停
 * - 簡單的計數動畫跳過
 * - 任何需要「等待一段時間」且可中斷的操作
 * 
 * ## 關鍵學習點
 * 
 * 1. **一個 Controller 控制整個流程**
 *    所有的 withInterrupt 共享同一個 interruptController，
 *    只需調用一次 trigger() 就能中斷所有正在執行的操作。
 * 
 * 2. **isInterrupted() 用於檢查狀態**
 *    在 while 迴圈中定期檢查，確保中斷後能立即停止。
 * 
 * 3. **interruptFn 處理快停邏輯**
 *    當 trigger() 被調用時，interruptFn 會立即執行，
 *    可以在這裡實作「跳到最終狀態」的邏輯。
 * 
 * ============================================================================
 */

import { _decorator, Button, Component, Label, Node } from 'cc';
import { InterruptController } from '../InterruptController';
import { Utility } from '../../../Core';
const { ccclass, property } = _decorator;

@ccclass('InterruptExample1')
export class InterruptExample1 extends Component {
    @property(Label)
    public reel_0_iconAmount: Label = null!;

    @property(Label)
    public reel_1_iconAmount: Label = null!;

    @property(Label)
    public reel_2_iconAmount: Label = null!;

    @property(Button)
    public spinButton: Button = null!;

    protected interruptController: InterruptController = new InterruptController();
    protected iconAmount: number[] = [0, 0, 0];
    protected isRolling = false;

    protected update(dt: number): void {
        this.reel_0_iconAmount.string = `Reel 0 Icon Amount: ${this.iconAmount[0]}`;
        this.reel_1_iconAmount.string = `Reel 1 Icon Amount: ${this.iconAmount[1]}`;
        this.reel_2_iconAmount.string = `Reel 2 Icon Amount: ${this.iconAmount[2]}`;
        if (this.isRolling) {
            this.spinButton.getComponentInChildren(Label)!.string = 'Fast Stop';
        } else {
            this.spinButton.getComponentInChildren(Label)!.string = 'Spin';
        }
    }

    public async example1() {
        this.isRolling = true;
        this.startRoll();
        await Utility.waitPromise(1);
        await this.stopRoll();
        this.isRolling = false;
    }

    public fastStop() {
        this.interruptController.trigger();
    }

    public spinButtonClick() {
        if (!this.isRolling) {
            this.example1();
        } else {
            this.fastStop();
        }
    }

    /**
     * 開始滾動：初始化狀態
     * 
     * 1. reset() - 關閉水閘，清空之前的註冊
     * 2. 設定初始值
     */
    private startRoll() {
        this.interruptController.reset();
        this.iconAmount = [10, 10, 10];
        console.log('開始滾動，iconAmount 設為 10');
    }

    /**
     * 停輪動畫：依序啟動每個輪的停止動畫
     * 
     * 模擬老虎機的停輪效果：
     * - 輪 0 先開始停止
     * - 延遲 0.2 秒後輪 1 開始停止
     * - 再延遲 0.2 秒後輪 2 開始停止
     * - 等待所有輪停止完成
     * 
     * 注意：trigger() 可以在任何時候觸發，會影響所有正在停止的輪
     */
    private async stopRoll() {
        console.log('開始停輪動畫...');

        const promiseList = [];
        const abortController = new AbortController();
        const token = this.interruptController.register(() => {
            abortController.abort();
        });

        try {
            for (let i = 0; i < 3; i++) {
                promiseList.push(this.stopReel(i));
                if (!this.interruptController.isInterrupted) {
                    await Utility.waitPromise(0.2, abortController.signal);
                }
            }
            await Promise.all(promiseList);
        } finally {
            this.interruptController.unregister(token);
        }

        console.log('所有輪都已停止');
    }

    /**
     * 單個輪的停止動畫
     * 
     * 使用 withInterrupt 包裝停輪邏輯：
     * 
     * workFn（正常流程）：
     * - iconAmount 從 10 逐步減到 0
     * - 每減 1 等待 0.25 秒
     * - 定期檢查 isInterrupted() 以便提早結束
     * 
     * interruptFn（中斷處理）：
     * - 直接將 iconAmount 設為 0
     * - 實現「快停」效果
     * 
     * 注意：while 迴圈中一定要檢查 isInterrupted()，
     * 否則即使觸發中斷，迴圈仍會繼續執行完。
     */
    private async stopReel(index: number): Promise<void> {
        await this.interruptController.withInterrupt(
            async (isInterrupted) => {
                while (this.iconAmount[index] > 0 && !isInterrupted()) {
                    this.iconAmount[index]--;
                    await Utility.waitPromise(0.25);
                }
                console.log(`Reel ${index} 停止`);
            },
            () => {
                console.log(`觸發 Reel ${index} 快停！`);
                this.iconAmount[index] = 0;
            }
        );
    }
}


