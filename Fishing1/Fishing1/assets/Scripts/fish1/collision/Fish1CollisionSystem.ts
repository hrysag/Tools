/**
 * Created by EricHuang on 2023/11/05.
 * 
 */

import {FishCollisionSystem} from '../../framework/logic/collision/FishCollisionSystem';
import {CollisionTarget} from '../../framework/game/collision/CollisionBase';
import {CollisionInfo} from '../../framework/game/collision/CollisionBase';
import {BaseCollisionType} from '../../framework/game/collision/CollisionBase';
import {GameViewMediatorUserDataKey,GameViewMediatorUser} from '../../framework/logic/gameLogic/FishGameLogicDefinitions';
import {ServerResCode,ServerSendCode} from '../../framework/logic/connect/ConnectBaseDefinitions';
import { Vec3,v3,log} from 'cc';

export class Fish1CollisionSystem extends FishCollisionSystem
{
    private _aryRangeHitFishType:number[];//--範圍挑選

    set aryRangeHitFishType(value:number[])
    {
        this._aryRangeHitFishType=value;
    }
    
    constructor()
    {
        super(); 

        this._classId='Fish1CollisionSystem';

        this._aryRangeHitFishType=[];
    }


    public async checkpickData(wp:Vec3):Promise<CollisionInfo>
    {
        let result:CollisionInfo=await this.checkCollision(
        {
            collisionKey:BaseCollisionType.PICKUP_Collision,
            target:wp
        });

        return result;
    }


    public async checkCollisionData(collisionData?:CollisionTarget):Promise<CollisionInfo>
    {
        let result:CollisionInfo=await this.checkCollision(collisionData);
        
        if(result)
        {
            if(collisionData.collisionKey==BaseCollisionType.SAT_Collision)
            {
                
                let hitFishs:{fishSn:number,fishType:number}[]=result.fishDatas;

                let bulletSn:number=result.bulletSn;

                //--開漁網openfishNet
                let getbulletdata=this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_openfishNet,bulletSn);

                if(getbulletdata!=-1)
                {
                    //--沒找到子彈(要直接硬刪資料了)
                    this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_cleanFishTarget,getbulletdata);

                }else{

                    for(let i:number=0;i<hitFishs.length;i++)
                    {
                       
                        //--changeFishesAnimation
                        this._gameMediator.getViewUserData(GameViewMediatorUser.FishView,GameViewMediatorUserDataKey.Fish_changeSingleFishAnimation,hitFishs[i].fishSn);
                        
    
                        //--玩家本身即發的子彈..通知server
                        if(result.isPlayer)
                        {
                            //--fh.fhHandler.Spin
                            /**
                             * 
                             * id=子彈id
                             * fid=魚的id
                             * cf=連鎖魚隻[fid,fid,fid...]--特殊魚才帶
                            */
    
                            let sendData=
                            {
                                id:bulletSn,
                                fid:hitFishs[i].fishSn,
                                //--debug用的
                                dft:hitFishs[i].fishType,
                                dw:1,
                                dseatIndex:this._viewModel['_playerTableId'] 
                            }
    
                            if(this._aryRangeHitFishType.indexOf(hitFishs[i].fishType)!=-1)
                            {
                                //--要送範圍內的連鎖範圍
                                let inSideFish:number[]=this._gameMediator.getViewUserData(GameViewMediatorUser.FishView,GameViewMediatorUserDataKey.Fish_getOutsideFish,hitFishs[i].fishSn);
                                                
                                if(inSideFish.length>0)
                                {
                                    sendData['cf']=inSideFish;
                                }   
                            }
                            log('check_hitfishSendData',sendData);
                            this._viewModel.sendServer(ServerSendCode.hitFish,sendData,ServerResCode.HitFish);
            
                        }
    
                    }

                }

                //log('check_checkCollisionData',result);
                
                //--準備回收自動打擊的資料(子彈-鎖定用的)
                this._gameMediator.getViewUserData(GameViewMediatorUser.GameLogicSystem,GameViewMediatorUserDataKey.GameLogic_afterHitRemoveLockBulletData,[bulletSn]);

                //--這個只是最後的保底措施(子彈-bullet用的)-上面已經做過了,沒找到子彈張網就直接銷毀
                //this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_cleanFishTarget,bulletSn);


                
            }else if(collisionData.collisionKey==BaseCollisionType.PICKUP_Collision)
            {

                //--點選
            }
    
        }

        return result;
    }

    /*
    public getData(dataKey:string,value?:any):any
    {
        let r:any=null;

        switch(dataKey)
        {
            case GameViewMediatorUserDataKey.Collision_PickUp:

            r=this.checkpickData(v3(value.x,value.y));

            break;
        }

        return r;
    }*/

}