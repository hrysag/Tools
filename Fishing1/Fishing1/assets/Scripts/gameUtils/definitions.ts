// see -> https://vgjira.atlassian.net/jira/software/c/projects/GT7/pages

export enum Requests {
    SelectRoom = 'fh.fhHandler.ChoiceLobby',
    GetBalance = 'fh.fhHandler.GetBalance',
    Exchange = 'fh.fhHandler.Exchange',
    CashOut = 'fh.fhHandler.Recompensate',
    LeaveRoom = 'fh.fhHandler.LeaveRoom',
}

export enum ResponseCodes {
    EnterLobby = '1',                   // 進入大廳
    EnterRoom = '2',                    // 進房結果通知
    WeaponSettings = '3',               // 武器設定
    FishSettings = '4',                 // 魚隻設定
    InitPlayerInfo = '5',               // 更新房內玩家資訊
    SerialNumber = '6',                 // 更新局號
    Balance = '7',                      // 更新資產/餘額
    Exchange = '8',                     // 換分結果通知
    Point = '9',                        // 更新分數
    LeaveRoom = '10',                   // 離開房間
    CashOut = '11',                     // 洗分結果通知
    NewFish = '12',                     // 新增魚隻
}

export enum ErrorCode {
    AlreadyEnterRoom = 1,   // 已進房
    NoRoomFound,            // 找不到房型倍率/換分比
    UnsupportedCurrency,    // 找不到幣別
}

export type EnterLobbyData = {
    s: [string]
}

export type EnterRoomData = {
    error: number | null | undefined,
    r: string
}

export type WeaponSettingsData = {
    s: number,
    sp: number,
    fc: number,
    pur: number
}

// TODO the rest