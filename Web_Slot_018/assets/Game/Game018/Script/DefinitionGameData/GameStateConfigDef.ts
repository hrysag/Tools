export enum GameState {
    NORMAL,
    RE_SPINE,
    FREE_GAME,
    BEGIN
}

export enum TransitionsState {
    IN,
    OUT,
    NONE
}

export enum ShowBottomTextStatus {
    NO_WIN,
    ROLLING,
    WIN,
    IDLE,
    DEBUG

}

/*
export class GAME_CURRENT_STATE {
    
    private static _currentGameState: GameState = GameState.BEGIN; // 設定初始值

    public static get currentGameState(): GameState {
        return this.currentGameState;
    }

    public static set currentGameState(value: GameState) {
        this._currentGameState = value;
    }
}*/