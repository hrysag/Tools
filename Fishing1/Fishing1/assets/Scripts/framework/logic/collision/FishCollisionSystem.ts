/**
 * Created by EricHuang on 2023/10/03.
 * 
 */
import {CollisionSystemBase} from '../../game/collision/CollisionBase';
import {CollisionTarget} from '../../game/collision/CollisionBase';
import {CollisionKey} from '../../game/collision/CollisionBase';
import {CollisionInfo} from '../../game/collision/CollisionBase';
import {CollisionBase} from '../../game/collision/CollisionBase';
import {BaseCollisionType} from '../../game/collision/CollisionBase';
import {FishData} from '../views/fishView/FishData';
import {Bullet} from '../views/bulletView/BulletDefinitions';
import {GameViewMediatorUserDataKey,GameViewMediatorUser} from '../../../framework/logic/gameLogic/FishGameLogicDefinitions';
import {ServerResCode,ServerSendCode} from '../../logic/connect/ConnectBaseDefinitions';
import { Vec2 } from 'cc';
import {log} from 'cc';

export class FishCollisionSystem extends CollisionSystemBase
{
    protected _aryFish:FishData[];

    protected _aryBullets:Bullet[];

    private _testTime:number;
    
    constructor()
    {
        super();

        this._classId='FishCollisionSystem';
        
        this._aryFish=[];
        
        this._testTime=0;
    }

    



    //--這邊要改掉原本的使用方式..20231024
    public async checkCollision(collisionData?:CollisionTarget):Promise<CollisionInfo>
    {
        
        return new Promise<CollisionInfo>(async (resolve)=>
        {
            let cf:CollisionInfo=null;

            switch(collisionData.collisionKey)
            {
                case BaseCollisionType.SAT_Collision:
                
                    cf=await this.baseCollision();

                break;

                case BaseCollisionType.PICKUP_Collision:
                
                    cf=this.pickUpCollision(collisionData.target);

                break;
                
            }
            
        
            resolve(cf); 

        });
            
    }

    protected pickUpCollision(wposition:{x:number,y:number}):CollisionInfo
    {
        let cf:CollisionInfo=null;

        this._aryFish=this._gameMediator.getViewUserData(GameViewMediatorUser.FishView,GameViewMediatorUserDataKey.Fish_getFishs);

        if(this._aryFish.length>0)
        {
            //--這邊塞入攝影機的資訊
            let c:CollisionBase=this.getCollision(CollisionKey.SELECTION);

            c.aryCompairs=this._aryFish;

            cf=c.checkCollision({target:wposition});

            
        }

        log('pickUpCollision',cf);

        return cf;

    }


    //--這個要再拔出來20231024
    protected async baseCollision():Promise<CollisionInfo>
    {
        //--要把原本checkCollision的內容搬過來,在checkCollision裡面做一個篩選分水嶺20231024
        return new Promise<CollisionInfo>((resolve)=>
        {
            let cf:CollisionInfo=null;

            /**
             *isCollisions={
                fishDatas:[{fishSn:this._aryCompairs[j].id,fishType:this._aryCompairs[j].fishType}],
                bulletSn:target.id
                }; 
             */
            

            this._aryBullets=this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_getBullets);

            this._aryFish=this._gameMediator.getViewUserData(GameViewMediatorUser.FishView,GameViewMediatorUserDataKey.Fish_getFishs);
            
            if(this._aryBullets.length>0)
            {

                for(let b of this._aryBullets)
                {
                    //if(b.strSystemId!=-1 && !b.isDead && !b.useFishingNets && b.isBorn && b.isPlayerTarget)
                    //if(b.strSystemId!=-1 && !b.isDead  && b.isBorn)
                    if(b.strSystemId!=-1 && !b.isDead && !b.useFishingNets && b.isBorn)
                    {
                        if(this._aryFish.length>0)
                        {
                            //log('check_this',this.getCollision);
                            let c:CollisionBase=this.getCollision(b.strSystemId);
        
                            c.aryCompairs=this._aryFish;
                            
                            //log('check_allBullets',this._aryBullets);
                            
                            /*
                            let nt=new Date().getTime();

                            if(this._testTime>0)
                            {
                                let t=nt-this._testTime;

                                b.collisions[0].impl.update(t);
                            }

                            this._testTime=nt;
                            */

                            cf=c.checkCollision({target:b}); 

                            if(cf)
                            {
                                //--這是有撞到的情況
                                
                                cf['isPlayer']=b.isPlayerTarget;
                                
                                break;
                            }
                          
                            //break;
        
                        }


                    }
                    
                }

            }
        
            resolve(cf); 

        })

    }




    //======給其他平行的view拿資料用的(透過mediator去拿)
    //--interface abstract
    public  getData(dataKey:string,value?:any):any
    {
        let data:any=null;

        log('Collision_PickUp_getData');

        switch(dataKey)
        {
            case GameViewMediatorUserDataKey.Collision_PickUp:
            
            data=this.pickUpCollision(value);
            
            //data=this.checkCollision({collisionKey:BaseCollisionType.PICKUP_Collision,target:{x:value.x,y:value.y}});

            break;
        }

        return data
    }
    //--interface abstract
    public excute(value?:any):any
    {
        
        
    }


}