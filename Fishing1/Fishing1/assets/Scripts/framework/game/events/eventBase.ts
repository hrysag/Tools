/**
 * Created by EricHuang on 2023/9/17.
 * 
 */
export type EventSendObject=
{
    type:string,
    sendObj?:any
}


export enum AnimationEffectEvent
{
    COMPLETE='AnimationEffectEvent_complete'
}


export enum AutoAndLockEvent
{
    FISH_LOCK_IS_CLEAN='AutoAndLockEvent_LockFishIsClean',

    FISH_ADD_LOCK_AIM='AutoAndLockEvent_addLockAim',

    KILL_TARGET_BULLET='AutoAndLockEvent_killtargetBullet',

    KILL_TARGET_BULLETS='AutoAndLockEvent_killtargetBullets',

    REMOVE_FISH_AIMLOCK='AutoAndLockEvent_removeFishAimLock',

    UPDATE_BULLET_LOCK_TARGET='AutoAndLockEvent_resetEndPositionAndFishTargetId'

    
}


export enum GameEventBase{

    CLICK_SHOOT='mouseBehaviorBase_click_shoot',
    AUTO_SHOOT='mouseBehaviorBase_auto_shoot',
    BLOCK_CLICK='mouseBehaviorBase_block_click',
    KEYBOARD_DOWN='mouseBehaviorBase_block_click',

    //--connect evt
    CONNECTOR_EVT='connector_evt',
    CONNECTOR_PING_EVT='connector_evt_Ping',
    

}

export enum BaseEvent{

    COMPLETE='baseEvent_complete',

    CHANGE='baseEvent_change',
    
    REMOVED='baseEvent_removed',
    
    IO_ERROR='baseEvent_ioError',

    PLAY_ANI='baseEvent_playAnimationn', 
}

export enum LoadingEvent
{
    LAYOUT_IS_READY='LoadingEvent_LAYOUT_IS_READY',

    SINGLE_UI_IS_READY='LoadingEvent_SINGLE_UI_IS_READY',
    
    SOUND_IS_READY='LoadingEvent_SOUND_IS_READY',
    
    ASSETS_IS_READY='LoadingEvent_ASSETS_IS_READY',

    ASSETS_IS_UPDATE='LoadingEvent_ASSETS_IS_UPDATE'  
}

export enum GUIEvent
{
    ASSETS_IS_READY="GUI_assetloadComplete",
    SINGLE_UI_IS_READY="GUI_singleUILayoutComplete",
    LAYOUT_IS_READY="GUI_LayoutIsReady",
    LOBBY_IS_READY="GUI_LobbyIsReady",
    CHANG_BULLETS="GUI_ChangeBullets",
    CLEAN_BULLETS="GUI_CleanAll_Bullets",//---備用(清除所有子彈)
    BTNAREA_EVT="GUI_btnAreaEvent",
    //public static AUTOSHOT_EVT:string="GUI_AutoShootEvent";
    OPEN_READY_PLAYERINFO="GUI_openCompleteEvt_PlayerInfo",//--開場GUI動畫完成
    SET_PLAYER_ROOM="GUI_setPlayerRoom",
    SET_PLAYER_ROOM_EXIT="GUI_setPlayerRoom_exit",
    OPEN_EXCHANGE= 'open_creditChange',
    OPEN_EXCHANGE_FIRST= 'open_creditChange_first',//--第一次打開開洗分面板(第一次進遊戲)
    CREDIT_EXCHANGE_ENTER = 'CREDIT_EXCHANGE_ENTER',
    CREDIT_EXCHANGE_EXIT= 'CREDIT_EXCHANGE_EXIT',
    BTN_MUTE = 'GUI_MUTE',
    BTN_HISTORY= 'GUI_HISTORY',//--單量
    BTN_HELP= 'GUI_HELP',
    BTN_DEPOSIT = 'GUI_DEPOSIT',
    BTN_EXIT= 'GUI_EXIT',
    BTN_EXCHANGE = 'GUI_EXCHANGE',
    BTN_AIM = 'GUI_AIM',
    BTN_MENU = 'GUI_MENU',
    //BTN_AUTOSHOOT = 'GUI_AUTOSHOOT',//--???
    USE_PROP='GUI_USEPROP',//--使用道具
    AUTO_SHOOT = 'GUI_AUTO_SHOOT',//--自動射擊
    AIM_SHOOT = 'GUI_AIM_SHOOT',//鎖定位置射擊
    LOCK_DIRECTION_SHOOT= 'GUI_LOCK_DIRECTION_SHOOT',//定點鎖定位置射擊(20230203新功能)
    ALERT_CLOSE = 'GUI_alert_close',
    GUI_READY_CLOSE = 'GUI_readyToClose'//--關閉GUI的提示(適合用於GUI有表演性質的)20230308
} 
