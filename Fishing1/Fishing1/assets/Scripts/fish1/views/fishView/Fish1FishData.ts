/**
 * Created by EricHuang on 2023/9/24.
 */

import {FishData} from '../../../framework/logic/views/fishView/FishData';

import { Quat } from "cc";
import { Node } from "cc";
import { Collider2D } from "cc";
import { Collider } from "cc";
import { SkinnedMeshRenderer } from "cc";
import { MeshRenderer } from "cc";
import { Animation } from "cc";
import { SkeletalAnimation } from "cc";
import { ParticleSystem } from "cc";
import { fishMeshState } from "../../../framework/game/model/ModelDefinitionsBase";
import { FishRotationState } from "../../../framework/game/model/ModelDefinitionsBase";
import { FishCustomAnimation } from "../../../framework/utils/FishCustomAnimation";
import { AnimationSequencePlayer } from "./AnimationSequencePlayer";
import { PathFlockUnit } from "../fishView/pathCore/basePath/BasePath";

export class Fish1FishData implements FishData
{
    //=======interface==============
    public id:number;
    public glowup:number;
    public isDead:boolean;
    public fishIsFlash:boolean;
    public lv:number;//--layer index 
    public fishType:number;//---辨識魚種在用的(特殊子彈會一口氣擊中所有相同的魚種)
    public pathID:string;//-----魚種的路徑辨識碼
    public pathGroupID:string;
    public prohibit:boolean;//--禁止打擊
    public countHitAni:number;//---擊中表演(變色)的時間
    public freeze:number;//--冰凍道具的持續時間(PS-假設一次10秒,連續使用5次=50秒(以毫秒為單位))
    //=======interface==============

    public fishMesh:Node| FishCustomAnimation;
    public fishAimLock:boolean;//--只會顯示該玩家的鎖定狀態,其他玩家不顯示
    public animation:Animation//|SkeletalAnimation(繼承animation) ;//--cocos 控制動畫的物件
    
    public fishFlockUnit:PathFlockUnit;
    //public fishShadow:PIXI.extras.AnimatedSprite;
    public fishShadow:any;
   
    public fishMeshState:fishMeshState;//---2Dor3D的mesh
   
    
    public bounding:{
           
            transformedMin:{x:number,y:number},
            transformedMax:{x:number,y:number},
            transformedLeftTop:{x:number,y:number},
            transformedRightBottom:{x:number,y:number},
           
    }[];

    public pickBounding:{
           
        transformedMin:{x:number,y:number},
        transformedMax:{x:number,y:number},
        transformedLeftTop:{x:number,y:number},
        transformedRightBottom:{x:number,y:number},
       
    }[];

    public originalSensorSize:{w:number,h:number};//--初始感應區的大小
    //public collisionArea:PIXI.Graphics[];
    public collisionArea:Collider2D[] | Collider[];//--碰撞的感應區(可能要拔掉)
    public odds:string;//---賠率
    public other:any;//----特殊時機用的
    
    public useOtherMesh:boolean;//---使用其他的動畫模式(圓盤)
    
    public isDragonLeader:boolean;//--是否為金龍第一個
    //public dragonId:string;
    
    public hitAniMilliSecond:number;//----擊中的預期表演時間(毫秒)
    public isHit:boolean;
    public hitani:any;


    public spFadeIn:boolean;
    public spFadeOut:boolean;
    public useFlockPositions:boolean;
    //public spFlock:flockingCore.SPflock;
    //public testInfo:any;//---20200929(測試用的數據)
    //private _stopShooting:PIXI.Sprite;
    public spStartPosition:{x:number,y:number};//--取消
    public spEndPosition:{x:number,y:number};//--取消
    public alreadyServerTime:number;//--產生魚的時候再server的時間(當前存活時間)
    public creatTime:number;//--產生的時間
    public createServerTime:number;//--server產生當下的timestamp
    
    public rotationState:FishRotationState;//--魚的旋轉狀態
    public rotationQuaternion:Quat;//--四元數旋轉用的
    //public fishSkinnedMeshRenderer:SkinnedMeshRenderer;//--3D魚用的meshrender載體(沒有bone就用meshRender有bone就用SkinnedMeshRenderer)
    //-SkinnedMeshRenderer extends MeshRenderer
    public fishSkinnedMeshRenderer:MeshRenderer;//--3D魚用的meshrender載體(沒有bone就用meshRender有bone就用SkinnedMeshRenderer)
    public animationSequencePlayer:AnimationSequencePlayer;
    public particle:{activeNode:Node,particle:{[key:string]:ParticleSystem}};//--3D魚在用的particlesystem
    public spBossInStates:{bottom:boolean,bo:boolean,left:boolean,lo:boolean,top:boolean,to:boolean,right:boolean,ro:boolean};//--3D boss用的進場狀態


    constructor()
    {
        this.init();
    }

    public init():void
    {
        this.odds='';
              
        this.fishMesh=null;
        this.id=0;
        this.isDead=false;
        this.pathID="";
        this.pathGroupID="";
        this.freeze=0;
        this.fishType=0;
        this.fishMeshState=fishMeshState.fish2D;
        this.fishShadow=null;
        this.bounding=[];
        this.pickBounding=[];
        this.lv=0;
        this.prohibit=false;
        this.useOtherMesh=false;
        this.originalSensorSize={w:0,h:0};
        this.fishIsFlash=false;
        //this.fishIsFlame=false;
        this.collisionArea=[];
        this.fishAimLock=false;
        this.other=null;
        this.alreadyServerTime=0;
        this.creatTime=0;
        this.glowup=-1;//--如果是成長類型的魚,則為正數
        
        //---擊中動畫相關參數
        this.countHitAni=0;
        this.hitAniMilliSecond=0;
        this.isHit=false;
        this.hitani=null;

        //--魚的旋轉狀態
        this.rotationState=FishRotationState.normalRotation;
        //--四元數旋轉用的
        this.rotationQuaternion=new Quat();
        //--3D物件用的
        this.fishSkinnedMeshRenderer=null;
        //--boss用的
        this.animationSequencePlayer=null;
        //--boss 進場狀態
        this.spBossInStates={bottom:false,bo:false,left:false,lo:false,top:false,to:false,right:false,ro:false};

        this.particle=null;

        
        if(!this.fishFlockUnit)
        {
            this.fishFlockUnit=new PathFlockUnit();

        }else{

            this.fishFlockUnit.reset();
        }
    }
}