/**
 * Created by EricHuang on 2023/08/16.
 * 子彈運動路徑抽象類別
 */


import {Bullet} from '../BulletDefinitions';
import {FishBulletEffectCenter} from '../bulletEffect/BulletEffectCenter';
import {IfBulletAction} from '../BulletDefinitions';
import {IfEffectBase} from '../BulletDefinitions';
import {EffectFactoryOption} from '../BulletDefinitions';
import {ChangeEffectSourceOption} from '../BulletDefinitions';
//import {BulletEffectSourceType} from '../BulletDefinitions';
import {BulletActionType} from '../../../../game/model/ModelDefinitionsBase';
import {Node,v3,Vec3,math} from 'cc';
import {log} from 'cc';
 
export  abstract class AbstractBaseBullet implements IfBulletAction
{
    //==========interface===========================================================
    public strSystemId:number;
          
    public container:Node;
  
    public collisionContainer:Node;
         
    public actionEffectID:number;
  
    public effectFactoryID:string;
  
    constructor()
    {
        this.strSystemId=-1;
        
        this.actionEffectID=0;
        
        this.container=null;
    }
  
    public initEmitter():void
    {
        //--發射器狀態的初始(生命週期之類的)..碰撞區域本體在這邊建立
        //this.countBullet=0;
        //this.system2Dor3D=1;//--自己填該層的子彈要用啥的1=2D/2=3D
        //--定義子彈的actionEffectID
        //--定義子彈感應區的寬高深
        //--定義2d子彈的assetsID
    }
  
    //---interface(override this)
    public changeSensor(b:Bullet):void 
    {
        //---張開漁網(重新定義sensor的範圍??現在漁網好像沒用了)
    
    }
  
    //---effectId(變化形態,更換素材)
    //--這邊要實作--20230816
    public changeEffect(b:Bullet):void
    {
        let bulletEf:IfEffectBase;//--基本型
          
        let ef:IfEffectBase;
 
        let originalRotation=b.bulletShell.angle;
 
        let effectOption:any=
        {
            baseEffect:null,
            
            assetsId:b.strFishNetId,  
        }
 
        if(b.bulletEffect.length>1 )
        {
 
        }else{
           
           //--子彈只有一個彈體(不是霰彈槍)
           b.bulletShell.angle=0;
           
           bulletEf=b.bulletEffect[0];
           
           effectOption.baseEffect=bulletEf;
           
           let factorOption:EffectFactoryOption=
           {
             effectObjType:b.effectFactoryID
           }
           
           let factory=FishBulletEffectCenter.getInstance().getEffectProduceFactory(factorOption);
           
           let changeData:ChangeEffectSourceOption=
           {
             baseEffect:bulletEf,
           
             assetsId:b.strFishNetId,
           
             spriteAtlas:b.effectFishNetAtlasID
           }
           log('change_bullet_Effect',factory,changeData);
 
           factory.changeEffectSource(changeData);
           
           bulletEf.effectObj.setPosition(v3( b.position.x,b.position.y));
           
           b.bulletShell.angle=originalRotation;
 
        }
 
    }
  
  
    public initBulletEffect():void
    {
        //---建構各類型子彈的控制中心--這邊可以用來初始
    }
  
    //---override this--
    //--這邊要實作--20230816
    public initBulletState(bullet:Bullet[]):void
    {
        let len:number=bullet.length;
 
        let b:Bullet;
 
        for(let i :number=0;i<len;i++)
        {
            b=bullet[i];
            
            if(this.strSystemId!=BulletActionType.BULLET_ACTION_PREFAB)
            {
                //--因為其他的會直接拿這個ePositio當作dx dy來直接算角速度,但是鎖定類型會重算角速度
                 
                b.ePosition.x=b.ePosition.x-b.position.x;
 
                b.ePosition.y=b.ePosition.y-b.position.y;
            }
            
            b.strSystemId=this.strSystemId;
        }
    }
  
    //--這邊要實作--20230816 
    public initBounding(b:Bullet):void
    {
  
    }
     
    //--這邊要實作--20230816
    public reNewBounding(b:Bullet):void
    {
      
    }
  
     public cleanStates():void
     {
      
     }
  
     public updateAction(t:number,b:Bullet):void
     {
         if(!b.isDead)
         {
            //--rd 7 客端不主動藉由生存時間回收子彈,所以生存時間是-1   
            if(b.lifeTime>0)
            {
                //--預設子彈生命週期不是無限的情況下
                //b.age=this.floatAdd(b.age,t);
                //b.age+=Math.floor(t);
                b.age+=t;//-送進來是以秒為單位
                    
                if(b.age>=b.lifeTime && !b.useFishingNets)
                {
                    b.isDead=true;
                }
            }

            if(!b.useFishingNets)
            {
                this.updateBullet(t,b);

            //}else{
            
                //this.openNet(t,b);
            }
 
         }else{
             //log("removeID>>"+b.id);
             //this._testFunction(b.id);
         }
     }
  
     public changBulletPosition(x:number,y:number):void
     {
  
     }
  
     public setMultiTargetPosition(p:any):void
     {
  
     }
 
 
  
     //==========interface===========================================================
     //--這邊要插入像是魚群更新那樣的delay的刷到底的機制
     protected abstract updateBullet(t:number,b?:Bullet):void
    
     //---20230828更新
     protected abstract updateColliders(b:Bullet,t:number):void
   
     protected openNet(t:number,b:Bullet):void
     {
         return;
         /*
         let mc:Node=b.bulletShell;
         let opacityComponent:UIOpacity=mc.getComponent(UIOpacity);
         mc.setScale(v3(b.tweenObj.scaleX,b.tweenObj.scaleY,b.tweenObj.scaleX));
         opacityComponent.opacity=b.tweenObj.opacity;
         */
         b.elapsedTime += t;
         if (b.elapsedTime > b.animationDuration) 
         {
             b.bulletShell.scale = b.targetScale;
             //this.node.emit("animationComplete");
             b.isDead=true;
             b.isTweening=false;
 
         } else {
             
             const t = math.clamp(b.elapsedTime / b.animationDuration, 0, 1);
             const easedT = this.backEaseOut(t);
             Vec3.lerp(b.bulletShell.scale, b.originalScale, b.targetScale, easedT);
         }
 
    }
 
   
              
 }