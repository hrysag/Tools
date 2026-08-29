/**
 * Created by EricHuang on 2023/9/021.
 *
 */
import {Node,SpriteFrame,Prefab,Collider2D,Vec3,Label} from 'cc';


//---槍口的位置
export type startGlobalPositions=
{
    p:Vec3,
    cannonP:Vec3,
    cannonR:Vec3,
    cannonH:number
}



//--基本的bullet interface
export interface Bullet
{
    table:number;
    id:number;
    //==========life data=======================
    age:number;//--當前生命值
    lifeTime:number;//--預計的存活時間
    isBorn:boolean;//---子彈是否完全產生 
    isDead:boolean;
    amount:number;//---單發子彈的數量
    isFree:boolean;//--免費子彈
    isHitFlag:boolean;//--20240227--碰撞漏網之魚要直接引爆子彈

    //=========position and motion data==========
    position:{x:number,y:number};
    ePosition:{x:number,y:number};//---終點(滑鼠座標)
    vx:number;
    vy:number;
    speed:number;//--速度
 
    //========player ststus=========================
    state:number;//--判斷目前使用成像的系統是2D還是3D//--1=2D/2=3D
    strSystemId:number;//---ifAction ID(BulletEffectSourceType)
    isPlayerTarget:boolean;//--是否為玩家本身擊發的子彈
    useProp:number;//---1,2,3,4(0代表未使用道具)
    isCrazy:boolean;//-----是否狂暴狀態
    roomState:number;//--房間當前狀態(0=一般,1=冰凍,2=boss,3=bossDeath)

    //=========lock fish data========================

    lockFishTarget:number;//---鎖定魚隻資料(單一識別碼ID)
    unLockFishTarget:boolean;//--是否在鎖定擊發後,目標魚隻死亡的狀態
    lockFishType:number;//---鎖定魚種

    //=========hit data and bullet effect==============================
    collisions:Collider2D[];//--紀錄碰撞盒(需手動更新)
    isCollision:boolean;
    hitfishType:number;//--20220919--打中的魚種
    useFishingNets:boolean;//--擊中後是否使用漁網(外部接資料)
    bulletShell:Node;//---彈殼 20181016
    strFishNetId:string;//---漁網的檔案名稱
    bulletEffect:IfEffectBase[];//--可以掛多個效果
    effectFactoryID:number;
    effectFishNetAtlasID:string;//---漁網的Atlas檔案名稱
    actionEffectID:number;
    
    //==========others==========================================
    angleOriginal:number//--糾正值
    isTweening:boolean;
    show:Node;
   

    init(d:number):void;
    clean():void;
}

//---子彈的動作行為,可以透過實踐多種不同的interface來達到不同的子彈動作
export interface IfBulletAction
{
    strSystemId:number;
    container:Node;//--effect container
    collisionContainer:Node;
    actionEffectID:number;
    effectFactoryID:string;//---...effect控制中心
 
    initBulletEffect():void;
    initBulletState(bullet:Bullet[]):void;//--20181019
    initEmitter():void;
    cleanStates():void;
    changBulletPosition(x:number,y:number):void;
    setMultiTargetPosition(p:any):void;//--閃電專用
    updateAction(t:number,b?:Bullet):void;//--更新數值(可空參數執行)
    changeSensor(b:Bullet):void;//---替換感應區
    //changeEffect(b:Bullet,id?:string):void;//---替換素材(子彈換漁網)
    changeEffect(b:Bullet):void;//---替換素材(子彈換漁網)
    reNewBounding(b:Bullet):void//--2020-04-03重新計算子彈的bounding
    initBounding(b:Bullet):void
 
}


//--辨識工廠用的
export type EffectFactoryOption=
{
    assetsId?:string,
    prefabId?:string,
    effectObjType?:BulletEffectSourceType
}

export enum BulletEffectSourceType
{
    EFFECTSOURCE_MOVIECLIP=0,//--序列圖
    EFFECTSOURC_IMAGE=1,//-單張圖
    EFFECTSOURCE_GRAPHIC=2,//--graphic
    EFFECTSOURCE_PREFAB=3,//--cocos prefab
    EFFECTSOURCE_DYNAMIC=4//--鎖定子彈
}

export interface IfEffectBase
{
    id:number;//--子彈的id(單一識別碼)
    strSystemId:number,
    effectObj:Node;//--這邊有可能是prefab
    original_Width:number;
    original_Height:number;
    texture:SpriteFrame[];
    fps?:number,
    prefab?:Prefab,
    assetsId?:string,//---20240325-nodepool用的
    ogSpriteFrame:SpriteFrame//---20240325-儲存原先的SpriteFrame(因為張網會換掉)
    ogUiTransFormData?:{w:number,h:number,x:number,y:number}//---20240325-儲存原先的uitransform(因為張網會換掉)
    updtae(t:number):void;
    getWidth():number;
    getHeight():number;
    clean():{id:string,node:Node};
    init():void;//--resetData 202240326 
    
}

/**
 * 更換原本的子彈貼圖使用,當然也可以直接替換掉
 * PS-目前只支援同種類型換同種類型ex-img2img,ani2ani,graphic2graphic
 * 只有prefab功能可以pre2pre,也支援更換prefab裡面的material或是新創其他的animation
 */
export type ChangeEffectSourceOption=
{
    baseEffect:IfEffectBase,
    assetsId?:string,//-直接拿有使用的spriteframe form prefab
    spriteAtlas?:string,//-使用這個就是從atlas裡面拿spriteframe
    prefab?:Prefab,
    fps?:number,
    color?:any,
    w?:number,
    h?:number
}

export type EffectOption = 
{
    id:number,//---子彈的單一識別碼ID
    fps?:number
    assets?:SpriteFrame[],
    prefab?:Prefab,
    w?:number,
    h?:number,
    assetsId?:string//--20240325-要做nodePool用的
}

export interface IfEffectFactory
{   
    strSystemId:number;
    createEffect(effectInfo:EffectOption):IfEffectBase;
    //--變更子彈素材..(就是把子彈換貼圖變成網子)
    changeEffectSource(option:ChangeEffectSourceOption):any
    cloneEffect(clone:EffectOption):IfEffectBase;
    updateAnimation(t?:number):void
    pushEffectBase(b:IfEffectBase):void
    recyclePrefab(recycleId:string,prefabNode:Node):void//-20240325
}

//--server送進來的子彈資訊
/**
 * 以下為server送進來的子彈資訊
 * {
 *  s: 0,----座位號0-3
 *  p: 970,-該子彈玩家的當前分數餘額
 *  id: 3,--子彈id
 *  w: 3, --武器類別
 * //--si為client 自定義的資料(長度1000內)
 *  si: { x: 77777, y: 66666, r: 8787 }
 *  }
 */
export type AddBulletInfo=
{
    isDrill?:boolean,
    isCrazy?:boolean,
    beforeToLocalEndXY:{x:number,y:number},//--尚未座標轉換的資料6-是global的資料(getUILocation()來的,他是螢幕座標系)
    mouse2D?:{x:number,y:number},
    emitter2D?:{x:number,y:number},
    mouse3D?:{x:number,y:number,z:number},
    emitter3D?:{x:number,y:number,z:number},
    actionId?:string,//---actiontype流水號
    bulletId?:number,//--子彈的流水號
    isPlayer?:boolean,//----是否為玩家(該桌)擊發的子彈
    prop?:number,//--使用道具
    lockTarget?:number,//--瞄準的魚隻
    isFree?:boolean,//---20190305
    tableID?:number,//--20210914--哪一桌擊發出來的子彈
    cannonRotation?:{cannonP:{x:number,y:number},cannonR:{x:number,y:number},cannonH:number},//--20220525--砲管旋轉角度
    c?:any//---測試用子彈顏色
    other?:any//----夾帶測試的資料
}
