//--請求主題
export enum SlotRequestEvent {

    GET_WORLD_POSITION = 'GetWorldPosition_Event',//--提取座標
    GET_SP_MOVEMENT = 'GetSpMovement_Event',//--提取wild/scatter位移
    SET_W_AFTER_MOVEMENT = 'SetWildAfterMovement_Event',//--位移完畢要換資料
}


//--訂閱回覆主題
export enum SlotResponseSubject {
    RES_GAME_SLOT_SUBJECT = 'ResGameSlotSubject'
}

export enum SlotNotifySubject {
    GAME_SLOT_SUBJECT = 'GameSlot_Subject'
}