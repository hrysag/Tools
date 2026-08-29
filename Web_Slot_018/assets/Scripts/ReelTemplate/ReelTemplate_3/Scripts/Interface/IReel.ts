import { StopType } from "../UniReel";
import { SymbolBase } from "./SymbolBase";

export interface IReel {
    get iconAmount(): number;

    init(reelID: number): void;

    startRoll(): void;
    startRollAsync(): Promise<void>;
    stopRoll(stopType: StopType): void;
    stopRollAsync(stopType: StopType): Promise<void>;
    fastStopRoll(): void;

    onStartRoll: () => void;
    onStopRoll: () => void;
    onMoveOnceStart: () => void;
    onMoveOnceComplete: () => void;
    onSetIconData: (symbol: SymbolBase, iconIndex: number) => void;
}

