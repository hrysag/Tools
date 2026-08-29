
import { Vec3 } from "cc";


//--用來記錄for slotMachine的索引資料
export type SlotMachineIndexInfo =
    {
        reelIndex?: number;//--reel index
        iconIndex?: number;//--icon index
        iconID?: number;   //--icon id
        groupID?: number;//--group id

    }

export type GroupAniData = SlotMachineIndexInfo & {
    odd?: number
}

export type WinScoreData =
    {
        //multiNum: number,//-additionalMultiplier
        baseOdds: number,
        totalOdd: number,
        betValue: number,
        multiplier: number
    }

export const DYN_NODE_PROPERTIES = {
    PREFAB_ID: 'prefabId',
    TOKEN_ID: 'tokenId',
    GROUP_ID: 'groupId',
    SYMBOL_ICON_INFO: 'symbolIconInfo',
}

export enum CleanTrackType {
    All_TRACKS = 0,
    CURRENT_TRACK = 1
}


//---這個是用來設定要播放的動畫資料
export type playIAniData =
    {

        prefabKey: string,//--改名較好辨識(用來抽物件池物物件的key)
        tokenID: string,//--這個是用來識別這個prefabNode的唯一識別碼
        containerNodeId: string,//--這個是用來放置prefab的node id
        groupID: number,//--會有同一個物件在不同的group裡面(第四軸重複的)
        duplicateTokenId?: string,//--重複的tokenID
        wPos?: Vec3,//--要把gameIcon的位置傳進來(要轉換成世界座標)
        aniInfo: AnimationPlayInfo //--(聯合型別)這個是用來設定要播放的動畫資料
        SymbolIconInfoData?: SlotMachineIndexInfo,//--這個是用來設定要播放的<群組>動畫資料
        multiAniInfo?: AnimationPlayInfo[],
        otherData?: any//--其他的資料..自己塞吧
    }

//--基礎共用的播放定義屬性
export interface BaseAnimationParams {
    repeatCount?: number;
    delay?: number;
    targetName: string;
    useCompleteListen: boolean;
};

//--for animation
//--animation 特有的參數...

export interface AnimationPlayParams extends BaseAnimationParams {
    wrapMode?: number;
    speed?: number;
    //loop?: boolean;
    //clipName?: string;
};


export interface AnimationCtrlPlayData extends AnimationPlayParams {
    targetNodeId?: string;//--prefab(放component的nodeId)的node id
    tokenID?: string;//---prefab單一識別碼
}

// Spine 特有的參數...
export interface SpinePlayParams extends BaseAnimationParams {
    //spineName?: string;
    timeScale?: number;
    loop?: boolean;
    skinName?: string;
};

// MixedAnimation 特有的參數...
export interface MixedAnimationPlayParams extends BaseAnimationParams {

};

/*
export type BaseAnimationParams = {
    timeScale?: number;
    loop?: boolean;
    repeatCount?: number;
    delay?: number;
    targetNodeId?: string;//--prefab(放component的nodeId)的node id
    tokenID?: string;//---prefab單一識別碼
    rootNode?: Node;//--乘載這個animation的最上頭根結點(這樣做很危險啊)

};

//--for animation
//--animation 特有的參數...

export type AnimationPlayParams = BaseAnimationParams & {
    wrapMode?: number;
    clipName?: string;
};

// Spine 特有的參數...
export type SpinePlayParams = BaseAnimationParams & {
    spineName?: string;
};

// MixedAnimation 特有的參數...
export type MixedAnimationPlayParams = BaseAnimationParams & {

};
*/

export type AnimationPlayInfo =
    AnimationCtrlPlayData |
    SpinePlayParams |
    MixedAnimationPlayParams;