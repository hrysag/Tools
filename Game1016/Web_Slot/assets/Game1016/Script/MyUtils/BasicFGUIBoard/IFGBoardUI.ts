import { PlaySelector } from "../AnimationSystemV2/Definitions/IPlayOptions";
import { GameState } from "../ReferencePathForMyUtils";
export interface IFGBoardUI {
    setBoardMode(state?: GameState): void;//--設定狀態
    setResultLabel(value: number): void;//--寫入分數/次數
    playBoardIn(value?: number, mode?: PlaySelector,dt?:number): Promise<void> //--進場
    playBoardOut(mode?: PlaySelector,dt?:number): Promise<void>//--退場
    playBoardLoop(mode?: PlaySelector): Promise<void>;//--待機
    cancelBoardAni(): void;//--與goBackToDefault完全做一樣的事情
    goBackToDefault(): void;//--回到預設狀態
}