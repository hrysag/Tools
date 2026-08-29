import { Vec3 } from "cc";
export type WinScoreData =
    {
        
        baseOdds: number,
        totalOdd: number,
        betValue: number,
        multiplier: number,
    }

export  type SymbolIconAinData =
    {
        outIndex: number,//--reel out index
        groupId: number,//---show group id
        globalPos: Vec3,//--position
        score: number,//--score for way
        iconIndex: number,//--index for icon
        camp: number//--0=阿里陣營,1=盜賊陣營(processSlotData會處理掉)
    }   