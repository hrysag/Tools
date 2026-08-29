export enum RPSWildResult {
    P,//--paper
    S,//--scissors
    R//--rock
}

export enum RPSWildValue {
    P = 8,//--paper
    S = 6,//--scissors
    R = 7//--rock
}

//---動畫的狀態
export enum RPSWild_AniState {
    APPEAR = 'appear',
    IDLE = 'idle',
    CONNECT = 'connect',
    BATTLE = 'battle',
    ROLL = 'roll',
    NEXT = 'next',
    PREV = 'prev',
    NUN = ''
}

export enum RPSWildState {
    WILD_0,//--第一次猜拳
    WILD_1,//--第二次猜拳
    WILD_2,//---第三次猜拳
    WILD_3//----無猜拳狀態
}

export type RPSGuessRoundData =
    {
        round: RPSWildState,//--目前猜拳的回合
        targetTokenIds: { L: string, R: string }//--左右兩邊的tokenID
    }

export type RPSWildData =
    {
        reelIndex: number,
        iconIndex: number,
        wild: number,
        camp: number
    }

