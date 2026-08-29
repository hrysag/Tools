/**
 * Created by EricHuang on 2023/9/25.
 *
 */
import {Bullet} from '../../../framework/logic/views/bulletView/BulletDefinitions';
import {IfEffectBase} from '../../../framework/logic/views/bulletView/BulletDefinitions';

import {Collider2D,Label,Node} from 'cc';

export class Fish1BulletData implements Bullet
{
    //=====================interface==============================
    public table:number;
    public id:number;
    //==========life data=======================
    public age:number;//--當前生命值
    public lifeTime:number;//--預計的存活時間
    public isBorn:boolean;//---子彈是否完全產生 
    public isDead:boolean;
    public amount:number;//---單發子彈的數量
    public isFree:boolean;//---免費子彈
    public isHitFlag:boolean;//---20240227--碰撞漏網之魚要直接引爆子彈

    //=========position and motion data==========
    public position:{x:number,y:number};
    public ePosition:{x:number,y:number};//---終點(滑鼠座標)
    public vx:number;
    public vy:number;
    public speed:number;//--速度
 
    //========player ststus=========================
    public state:number;//--判斷目前使用成像的系統是2D還是3D//--1=2D/2=3D
    public strSystemId:number;//---ifAction ID(BulletEffectSourceType)
    public isPlayerTarget:boolean;//--是否為玩家本身擊發的子彈
    public useProp:number;//---1,2,3,4(0代表未使用道具)
    public isCrazy:boolean;//-----是否狂暴狀態
    public roomState:number;//--房間當前狀態(0=一般,1=冰凍,2=boss,3=bossDeath)//-----是否狂暴狀態

    //=========lock fish data========================

    public lockFishTarget:number;//---鎖定魚隻資料(單一識別碼ID)
    public unLockFishTarget:boolean;//--是否在鎖定擊發後,目標魚隻死亡的狀態
    public lockFishType:number;//---鎖定魚種

    //=========hit data and bullet effect==============================
    public collisions:Collider2D[];//--紀錄碰撞盒(需手動更新)
    public isCollision:boolean;
    public hitfishType:number;//--20220919--打中的魚種
    public useFishingNets:boolean;//--擊中後是否使用漁網(外部接資料)
    public bulletShell:Node;//---彈殼 20181016
    public strFishNetId:string;//---漁網的檔案名稱
    public bulletEffect:IfEffectBase[];//--可以掛多個效果
    public effectFactoryID:number;
    public effectFishNetAtlasID:string;//---漁網的Atlas檔案名稱
    public actionEffectID:number;//--特效用的
    
    //==========others==========================================
    public angleOriginal:number//--糾正值

    //=====================interface==============================
    public gameBoundaryfoBullet:{w:number,h:number};
    public isTweening:boolean;//--使用tweenplugin
    //public aryFishNets:string[];//---漁網擊殺上限(漁網最多一次6隻)

    //=====================test====================================
    public show:Node;


    constructor()
    {
      
    }

    public init(d: number): void 
    {
        this.state=d;
      
        this.actionEffectID=-1;
        this.bulletEffect=null;
        this.id=-1;
        this.vx=0;
        this.vy=0;
        this.age=0;
        this.lifeTime=0;
        this.isHitFlag=false;
       
        this.isDead=false;
        this.isCollision=false;
        this.strSystemId=-1;
        this.ePosition={x:0,y:0};
        //this.aryFishNets=[];
        this.useFishingNets=false;
        this.strFishNetId="";//--漁網的ID(fileName)
        this.effectFishNetAtlasID='';//---漁網的Atlas檔案名稱
        this.lockFishType=-1;
        this.lockFishTarget=-1;
        this.useProp=0;
        //this.originalSensorSize={w:0,h:0};
        //this.collisionfishingNetAreaInfo={w:0,h:0};
        this.collisions=[];
        this.speed=0;
        this.effectFactoryID=-1;
        this.isCrazy=false;
        this.roomState=0;
      
        //this.bounding=null;//---2D測試用
       
        this.isPlayerTarget=false;
        this.unLockFishTarget=false;
        //this.bulletContainer=null;
        this.bulletShell=null;
        this.amount=0;
        this.isBorn=false;
        this.isFree=false;
        //this.isDrill=false;
        this.table=0;
        
        this.position={x:0,y:0};
        //this.scale={x:0,y:0};
        //this.rotation=0;//--徑度(弧度)為單位
        this.angleOriginal=0;

        this.hitfishType=-1;
        

        this.gameBoundaryfoBullet={w:0,h:0};

        this.isTweening=false;


        


    }

    public clean():void
    {
        this.init(-1);
    }
}