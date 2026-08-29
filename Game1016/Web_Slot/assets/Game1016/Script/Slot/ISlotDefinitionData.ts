import { Node, Vec3 } from "cc";

export interface IBasicMovementData {
    finalDestinationWPos: Vec3;
    finalDestinationLPos: Vec3;
    startIconIndex: number;//--出發的iconIndex
    finalIconIndex: number;//--終點位置
}

export interface IWildMovementData extends IBasicMovementData {
    wildNode?: Node;//-測試資料使用的,正式資料是不拿這個資料
    reelIndex: number,
    iconIndex: number,
    symbolId: number,
    offsetYLocal: number;
}
//--20251004新增,因企劃要求所以修改表現的層級,此介面為修改所需要的資料
export interface IWildMovementDataNew extends IWildMovementData {
    startWpos?: Vec3;//--原始位置(wildNode)
    isYoyo?: boolean;//--是否要做yoyo的動作(可以判斷是否為位移到完整軸的模式依據)    
}

export interface IWildData {
    isStart: boolean;
    isEnd: boolean;
    wildIndex: number;
    isWild: boolean;
    isLock: boolean;
    goBack: boolean;//--應付最腳往上長,且是3連續的情況,會被掛到終點位置脫離原本的位置,這個時候要再回去
}

//--軸排序用的資料定義
export interface ISortReelLayerInfo {
    reel: number;
    index: number;
    hasWild: boolean;
    hasScatter: boolean;
    defaultReelIndex: number;//--原始位置資訊
}
