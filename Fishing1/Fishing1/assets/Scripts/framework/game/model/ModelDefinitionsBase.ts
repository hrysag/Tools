/**
 * Created by EricHuang on 2023/9/18.
 * 如果要擴充屬性可以採用以下方式
 * export interface ExtendedOddsInfo extends OddsInfo {
    additionalProperty?: string,
    // 添加其他属性
}
 * 
 */
 export enum FishRotationState
 {
    //--魚的旋轉狀態
    normalRotation=0,//--需要旋轉的魚(跟隨路徑旋轉)
    horizontalRotation=1,//-需要水平翻轉的魚(不旋轉,但水平翻轉)
    noRotation=2//--完全不做旋轉
 }
  
 export type FishInitData=
 {
   lv?:number,//--layer index
   level?:boolean,//--growup fish
   hitms?:number,//---the time of hit animation
   fps?:number,//--fps for spritesheet
   collisionW?:number,//--bbox width
   collisionH?:number,//--bbox height
   abbscale?:number,//--boundary of fish(bbox area)
   meshScale?:number,//--boundary of fish(only fish)
   fishMeshState?:fishMeshState,//--2d or 3d type
   meshId?:string,//--prefab id
   rotationState?:FishRotationState,//--rotation status
   zindex?:number//---20240223--3D物件用的zindex
   //speed?:number,//--20240220--每條魚的速率都不同
    
 }
 
 export type OddsInfo=
 {
     id?:number,
     odds?:string,
     name?:string,
     sortNum?:number,
     atkPriority?:number,//--攻擊優先順序20240424
     isCanHit?:boolean
 }
 
 
 export type TableInfo=
 {
     tableID?:number,//--桌位編號 index 0-3
     userID?:number,
     isPlayer?:boolean,//--是否為玩家本人
     userLoginName?:string,
     nowWatchTable?:number,
     isWatched?:boolean,
     credit?:number,
     goldPanel?:number[]//--成就系統(玩家背包道具使用狀態)
 }
 
//--fish mesh的狀態2D/3D
export enum fishMeshState
{
    fish2D=0,
    fish3D=1
}

//---子彈的運動函式改到model(原本在bullet)
export enum BulletActionType
{
   BULLET_ACTION_PREFAB=0,
   BULLET_ACTION_DYNAMIC=1
}


/**
 * 送到bullet裡面會是2維的array
 * index=0---一般系統的子彈
 * index=1---成就系統的子彈
 * 改到model(原本在bullet)
 */

export type BulletSettingData=
{
   systemId:BulletActionType,//"BulletImage",
   amount:number,//1,
   sound:string,//"fire1",
   system2Dor3D:number//1,
   effect2DAssetsID:string,//"7pic_bullet0001",
   strFishNetId:string,//"ani_actionhit",
   effectFishNetAtlasID?:string,//--prefab/textures/fishHunterPopup
   collisionW:number//0.5,
   collisionH:number//0.5,
   fishNetW:number//0,
   fishNetH:number//0,
   lifeTime:number//5000,
   speed:number//2000,
   fps:number//30
}