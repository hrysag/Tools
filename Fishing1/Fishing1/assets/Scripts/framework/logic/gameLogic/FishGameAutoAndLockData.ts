/**
 * Created by EricHuang on 2023/10/10.
 */

import { FishData } from "../views/fishView/FishData";
import { AREA_BOUNDARY } from "../../game/mouseBehavior/MouseBehaviorDefinitionsBase";
import {GameMainLogicBase} from '../../game/logic/GameMainLogicBase';
import {fishMeshState} from '../../game/model/ModelDefinitionsBase';
import {AutoAndLockEvent} from '../../game/events/eventBase';
import {AbstractView} from '../../abstract/mvvm/AbstractView';
import { GameViewMediatorUser, GameViewMediatorUserDataKey} from "../gameLogic/FishGameLogicDefinitions";
import {EventTarget,find,Node,UITransform, Vec3,CameraComponent, v3} from 'cc';
import { GameUtils } from "../../utils/GameUtils";
import { Bullet } from "../views/bulletView/BulletDefinitions";
import {log} from 'cc';

export class FishGameAutoAndLockData extends EventTarget
{
    
    protected _aryLockFishBullets:{lockFish:number,lockBullets:number[]}[];//--物件陣列--鎖定用的子彈與魚種
    
    protected _view:GameMainLogicBase;

    protected _userTableIndex:number;//-0-3
    //protected _view:AbstractView;

    protected _spUpdateFishTypeforBullet:number[];//--特殊魚種的動態子彈更新與邊界計算

    //--座標轉換要用的

    protected _fishNode:Node;

    protected _bulletNode:Node;

    protected _mouseNode:Node;

    protected _sceneCameraNode:Node;

    protected _canvasCameraNode:Node;

    set fishNode(value:Node)
    {
        this._fishNode=value;
    }

    set mouseNode(value:Node)
    {
        this._mouseNode=value;
    }

    set bulletNode(value:Node)
    {
        this._bulletNode=value;
    }

    set sceneCameraNode(value:Node)
    {
        this._sceneCameraNode=value;
    }

    set canvasCameraNode(value:Node)
    {
        this._canvasCameraNode=value;
    }

    set spUpdateFishTypeforBullet(value:number[])
    {
        this._spUpdateFishTypeforBullet=value;
    }

    set view(value:GameMainLogicBase)
    {
        this._view=value;
    }

    set userTableIndex(value:number)
    {
        this._userTableIndex=value;
        
        log('FishGameAutoAndLockData__userTableIndex',this._userTableIndex);
    }

    get aryLockFishBullets():{lockFish:number,lockBullets:number[]}[]
    {
        return this._aryLockFishBullets;
    }

    get fishNode():Node
    {
        return this._fishNode;
    }

    get mouseNode():Node
    {
        return this._mouseNode;
    }

    get bulletNode():Node
    {
        return this._bulletNode;
    }

    get sceneCameraNode():Node
    {
        return this._sceneCameraNode;
    }

    get canvasCameraNode():Node
    {
        return this._canvasCameraNode;
    }

    get view():GameMainLogicBase
    {
        return this._view;
    }

    constructor()
    {

        super();
        
        this._aryLockFishBullets=[
            
            {lockFish:0,lockBullets:[]},
            
            {lockFish:0,lockBullets:[]},
            
            {lockFish:0,lockBullets:[]},
            
            {lockFish:0,lockBullets:[]}
        ];

        this._spUpdateFishTypeforBullet=[];

        this._fishNode=null;
        
        this._bulletNode=null;

        this._mouseNode=null;
        
        this._sceneCameraNode=null;

        this._canvasCameraNode=null;

        this._view=null;
        
    }


    protected getCanvasWorldPosition(type:number,p:Vec3):Vec3
    {
        //let rpos:Vec3;
        
        let wp:Vec3;

        if(type==fishMeshState.fish2D)
        {
            //--2d 
            //wp=this._fishNode.getComponent(UITransform).convertToWorldSpaceAR(p);
            
            wp=GameUtils.cover3dor2dToWorldPos(this._fishNode,p);

        }else{
        
            //--3d
            //-worldPos=(f.fishMeshState==fishMeshState.fish2D)?GameUtils.cover3dor2dToWorldPos(this._fish2DContainerNode,f.fishMesh.position):GameUtils.cover3dor2dToWorldPos(this._sceneCameraNode,f.fishMesh.position,this._canvasCameraNode);
            wp=GameUtils.cover3dor2dToWorldPos(this._sceneCameraNode,p,this._canvasCameraNode);

            //let sceneCameraNode:Node=find('Main Camera');
            /*
            let cameraComponent=this._sceneCameraNode.getComponent(CameraComponent);
            //---world to screen
            let wts:Vec3=cameraComponent.worldToScreen(p);
            //--canvas camera cameracomponent
            let canvasCameraComponent=this._canvasCameraNode.getComponent(CameraComponent);

            //--screen to world
            wp=canvasCameraComponent.screenToWorld(wts);
            */

        }

        return wp;
    }

    //---刪除鎖定的子彈(在使用狀態下已經集中判定的)

    private removeLockBulletData(value:number[]):void
    {
        let len:number=value.length;
        //---每次碰撞成立只會有一個子彈進來阿
        //--魚種被擊殺後,其餘的子彈狀態隨之改變--這是打到不是打死
        //let bulletId:number[]=[];

        for(var i:number=0;i<len;i++)
        {

            for(var j:number=0;j<4;j++)//--this._aryLockFishBullets
            {

                var index:number=this._aryLockFishBullets[j].lockBullets.indexOf(value[i]);

                if(index!=-1){

                    //---這邊只是view的資料先拔掉...子彈卻無後續給予死亡bug!!!
                    this._aryLockFishBullets[j].lockBullets.splice(index,1);
                }


                //this._bulletsSystem.cleanFishTarget(value[i]);

                //this.emit(AutoAndLockEvent.KILL_TARGET_BULLET,{type:AutoAndLockEvent.KILL_TARGET_BULLET,sendObj:value[i]});

            }
        }

    }

    
    public removeAllLockData():void
    {
        for(var i:number=0;i<4;i++)
        {
           
            this._aryLockFishBullets[i].lockFish=0;

            this._aryLockFishBullets[i].lockBullets=[];
        }
    }

    public removeAllLockDataAndGetLockFishs():number[]
    {
        let lockFishs:number[]=[];

        for(var i:number=0;i<4;i++)
        {
            if(this._aryLockFishBullets[i].lockFish!=0)
            {
                lockFishs.push(this._aryLockFishBullets[i].lockFish);
            }
            
            this._aryLockFishBullets[i].lockFish=0;

            this._aryLockFishBullets[i].lockBullets=[];
        }

        return lockFishs

    }

    /*
    public removeSpBossLockData(spBossId:number):number[]
    {
        let cancelLockBulletTarget:number[]=[];
        
        for(var i:number=0;i<4;i++)
        {
            if(this._aryLockFishBullets[i].lockFish==spBossId)
            {
                cancelLockBulletTarget=cancelLockBulletTarget.concat(GameUtils.deepCloneForObject(this._aryLockFishBullets[i].lockBullets));
                
                this._aryLockFishBullets[i].lockFish=0;

                this._aryLockFishBullets[i].lockBullets=[];
            }
        }

        return cancelLockBulletTarget;
    }*/

    //-cleanAutoLockCooldown 原 gameplayerMode 裡面的cleanAutoLockCooldown 要改名成claeanAutoLockData
    //-原來的lockColdDownReady改名cleanLockdDtaByTable
    /**
     * 
     * @param tableId 0-3
     */
    //public async cleanLockdDataByTable(tableId:number):Promise<void>
    public cleanLockdDataByTable(tableId:number):void
    {
        
        //let lockBullets:number[]=GameUtils.deepCloneForObject(this._aryLockFishBullets[tableId].lockBullets);
        
        //log('check_cloneLockBullets',lockBullets);
        log('check_cloneLockBullets');

        this._aryLockFishBullets[tableId].lockFish=0;

        this._aryLockFishBullets[tableId].lockBullets=[];


    }

    //---功能與cleanLockdDataByTable重疊,可能要整併 2023-1014
    //---功能與舊版cleanPlayerLockData重疊,取消cleanPlayerLockData
    //--等等這是針對特定的魚,cleanPlayerLockData是針對玩家自己
    //--這個只有玩家自己會call
    
    /**
     * 舊版是gameplayerMode會call cleanAutoLockCooldown,裡面再call removeLockFishData
     * 新版直接call cleanLockdDataByTable送入玩家自己的桌號
     * 
     */
    
    //public removeLockFishData():void
    public removeLockFishData(fishid:number):void
    {
        //let id:number=this._aryLockFishBullets[this._userTableIndex].lockFish;
       
        for(var i:number=0;i<4;i++)
        {
            if(this._aryLockFishBullets[i].lockFish==fishid)
            {
                
                this._aryLockFishBullets[i].lockFish=0;

                this._aryLockFishBullets[i].lockBullets=[];

                //--持續掃完整個迴圈~可能會有瞄準相同的狀況
            }
        }

    }


    public async cleanPlayerLockData():Promise<void>
    {
        
        this.cleanLockdDataByTable(this._userTableIndex);
        
        return;
    }


    /**
     * 功能與舊版的lockFishTarget相同,且lockFishTarget沒有人呼叫
     * 故移植就刪除lockFishTarget
     * @param value fish id
     */
    //public async addFishAimTarget(value:number,table?:number):Promise<void>
    public addFishAimTarget(value:number,table?:number):number
    {
        
        //-this._userTableIndex 0-3

        //---fishview裡面再add的時候就會把前一個移除
        let returnLockFish:number=this._aryLockFishBullets[this._userTableIndex].lockFish;

        this._aryLockFishBullets[this._userTableIndex].lockFish=value;
    
        this._aryLockFishBullets[this._userTableIndex].lockBullets=[];
  
        return returnLockFish;
    

    }

    //public async setLockFishBullet(fishSn:number,bulletSn:number,index:number,isPlayer:boolean):Promise<{position:{x:number,y:number},dragon:string}>
    //--ps fishData 找不到就不要送進來
    //public async setLockFishBullet(fishData:FishData,bulletSn:number,index:number,isPlayer:boolean):Promise<{position:{x:number,y:number},sp:number}>
    
    //--這邊要在新增取消鎖定後(沒有鎖定魚)的檢查(就是玩家取消鎖定,但是server送來最後一發是有鎖定的狀態)
    public setLockFishBullet(fishData:FishData,bulletSn:number,index:number,isPlayer:boolean):{position:{x:number,y:number},sp:number,useBullet:boolean,previousTarget:number}
    {
        //return;
        
        //--這時候子彈還沒新增實體化
        let p:{position:{x:number,y:number},sp:number,useBullet:boolean,previousTarget:number}=null;
        
        let previousLockTarget:number=0;
        //log("setLockFishBullet___fishSn_____"+fishSn);
        //log("setLockFishBullet___bulletSn____"+bulletSn);
        //log("setLockFishBullet___index___"+index);
        //log("setLockFishBullet___isPlayer___"+isPlayer);
        //log("otherPlayer_lockFish_____"+this._aryLockFishBullets[index].lockFish);
 


        if(this._aryLockFishBullets[index].lockFish!=fishData.id)
        {
            if(this._aryLockFishBullets[index].lockFish!=0)
            {
                previousLockTarget=this._aryLockFishBullets[index].lockFish;
            }

            if(!isPlayer)
            {
                this.cleanLockdDataByTable(index);
    
                this._aryLockFishBullets[index].lockFish= fishData.id;
            }
            

            //p={position:{x:0,y:0},sp:0,previousTarget:this._aryLockFishBullets[index].lockFish};s
          
        }

       

        

        if(this._aryLockFishBullets[index].lockFish==fishData.id)
        {

            //--做旋轉砲塔---鎖定的功能
            if(this._spUpdateFishTypeforBullet.indexOf(fishData.fishType)!=-1)
            {
                //--特殊魚的例外處理(boss)
                p=this.spFishSetLockFishBullet(fishData,isPlayer);

                if(p)
                {
                    //---這是模擬click的座標
                    this._aryLockFishBullets[index].lockBullets.push(bulletSn);

                    p.previousTarget=previousLockTarget;

                    p.useBullet=true;
                }

                log('lockFish==fishData.id',p);


            }else{

                let worldPos:Vec3=this.getCanvasWorldPosition(fishData.fishMeshState,fishData.fishMesh.position);
                
                let localPos:Vec3=this._mouseNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
                
                //--這邊要換成滑鼠點擊的座標
                if(isPlayer)
                {
                    if(localPos.x<=AREA_BOUNDARY.w && localPos.x>AREA_BOUNDARY.x)
                    {
                        if(localPos.y<=AREA_BOUNDARY.h && localPos.y>AREA_BOUNDARY.y)
                        {
                        
                            //---這是模擬click的座標
                            this._aryLockFishBullets[index].lockBullets.push(bulletSn);
                            //---mouse click是送world pos
                            p={position:worldPos,sp:0,useBullet:true,previousTarget:previousLockTarget};

                        }
                    }

                }else{

                    /**
                     * 20240326
                     * 其他玩家的子彈依然給予產出,(回收交給玩家自己來做)
                     * 其他玩家只需接收_refundBullets的資料來進行刪除
                     * 避免在某些尷尬的狀況吻合出界(自己),但是在其他玩家卻是沒出界而擊發的情況
                     */
                    this._aryLockFishBullets[index].lockBullets.push(bulletSn);
                    //---mouse click是送world pos
                    p={position:worldPos,sp:0,useBullet:true,previousTarget:previousLockTarget};


                }  
                

                log('setLockFishBullet__', this._aryLockFishBullets);
            
                
            }


        }else{
            
            //--玩家已經更換目標,server回傳的子彈已經改變目標(準備回收)
           
            p={position:{x:0,y:0},sp:0,useBullet:false,previousTarget:0};
            log('server回傳的子彈已經改變目標(準備回收)',previousLockTarget);
            /*
            if(isPlayer)
            {
                p={position:{x:0,y:0},sp:0,previousTarget:previousLockTarget};
            }*/

        }

       

        return p;

    }

    //---更新鎖定的子彈
    /**
     * 20231011
     * 在更新bulletsystem的updateAction前
     * 先update這個updateLockBullets
     * 要先處理鎖定的資料再回頭updateAction
     * 在updateAction後,要再回過來處理_aryLockFishBullets的資料
     * //---就是在該frame更新的子彈有死亡的話要拔除_aryLockFishBullets的資料
     */
    public updateLockBullets():{bullets:number[],fishs:number[]}
    {
        
        //return;
        let len:number=this._aryLockFishBullets.length;

        //let testClone=GameUtils.deepCloneForObject(this._aryLockFishBullets);

        //log('updateLockBullets',testClone);
        
        let bulletLen:number=0;
        
        let f:FishData;

        let deathLockFish:number[]=[];

        let deathBullets:number[]=[];

        let returnDeathData:{bullets:number[],fishs:number[]}=null;

        for(let i:number=0;i<len;i++)
        {

            //---鎖定的魚隻尚未死亡~子彈會穿越雜魚

            if(this._aryLockFishBullets[i].lockFish!=0)
            {

                bulletLen=this._aryLockFishBullets[i].lockBullets.length;

                //-this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_setBulletIsDeath,value.bsn);
                f=this._view.getDataFromgameMediator(GameViewMediatorUser.FishView,GameViewMediatorUserDataKey.Fish_getFishById,this._aryLockFishBullets[i].lockFish);
                
                if(f==null || f.isDead)
                {
                    let deathTarget:number=this._aryLockFishBullets[i].lockFish;
                    
                    deathLockFish.push(deathTarget);
                    //---要回收子彈---因為目標結束了
                    this.removeLockFishData(this._aryLockFishBullets[i].lockFish);

                }else{

                   
                    //--出界的狀態要處理..直接銷毀子彈
                    //log("@@@updateLockBullets>>>"+bulletLen);
                    let rp:Vec3;
                    //let fishGlobal:PIXI.Point;
                    //let stageLocalPoint:PIXI.Point;
                    let destoryLockBullet:number[]=[];

                    for(var j:number=0;j<bulletLen;j++)
                    {
                        let bullet:Bullet=this._view.getDataFromgameMediator(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_getBulletById,this._aryLockFishBullets[i].lockBullets[j]);

                        if(this._spUpdateFishTypeforBullet.indexOf(f.fishType)!=-1)
                        {
                            let desbullet:number[];

                            if(bullet)
                            {
                                desbullet=this.spFishupdateLockBullets(f,this._aryLockFishBullets[i].lockBullets[j],bullet.isPlayerTarget);

                            }else{

                                //--取不到bullet的狀況下
                                desbullet=[this._aryLockFishBullets[i].lockBullets[j]];
                            }
 
                            
                            if(desbullet.length>0)
                            {
                                destoryLockBullet=destoryLockBullet.concat(desbullet);
                            
                            }

                        }else{
                            
                        
                            //--要把fish position換成 mouseClickArea local point

                            let worldPos:Vec3=this.getCanvasWorldPosition(f.fishMeshState,f.fishMesh.position);
                
                            let localPos:Vec3=this._mouseNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos);

                            //--這邊要小心,要確認mouseClick node是否為0,0 在左下角,1920,1080 在右下角
                           
                            if(bullet)
                            {
                                if(bullet.isPlayerTarget)
                                {
                                    if(localPos.x<=AREA_BOUNDARY.w && localPos.x>AREA_BOUNDARY.x)
                                    {
                                        if(localPos.y<=AREA_BOUNDARY.h && localPos.y>AREA_BOUNDARY.y)
                                        {
                                                
                                            rp=this._bulletNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
                                            //--要補
                                            //this._bulletsSystem.resetEndPositionAndFishTargetId(rp,this._aryLockFishBullets[i].lockBullets[j]);
                                            this._view.getDataFromgameMediator(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_resetEndPositionAndFishTargetId,
                                            {
                                                pos:rp,

                                                id:this._aryLockFishBullets[i].lockBullets[j],

                                                lockFishId:f.id
                                            });


                                        }else{
                                            
                                            destoryLockBullet.push(this._aryLockFishBullets[i].lockBullets[j]);
                                        }
                                    
                                    }else{
                                        
                                        destoryLockBullet.push(this._aryLockFishBullets[i].lockBullets[j]);
                                    }

                                }else{

                                    /**
                                     * 20240326
                                     * 其他玩家的子彈依然給予產出,(回收交給玩家自己來做)
                                     * 其他玩家只需接收_refundBullets的資料來進行刪除
                                     * 避免在某些尷尬的狀況吻合出界(自己),但是在其他玩家卻是沒出界而擊發的情況
                                     */
                                    
                                    rp=this._bulletNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
                                    //--要補
                                    //this._bulletsSystem.resetEndPositionAndFishTargetId(rp,this._aryLockFishBullets[i].lockBullets[j]);
                                    this._view.getDataFromgameMediator(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_resetEndPositionAndFishTargetId,
                                    {
                                        pos:rp,

                                        id:this._aryLockFishBullets[i].lockBullets[j],

                                        lockFishId:f.id
                                    });

                                }

                            }else{
                                
                                //--取不到bullet的狀況下
                                destoryLockBullet.push(this._aryLockFishBullets[i].lockBullets[j]);
                            }

                            

                        }
                        

                    }

                    if(destoryLockBullet.length>0)
                    {
                        deathBullets=deathBullets.concat(destoryLockBullet);
                        
                        this.removeLockBulletData(destoryLockBullet);
                        //this.removeBulletWithoutNet(destoryLockBullet);
                        
                    }


                }

            }else{

                //log('wtfQQQQQQQQQQ');
            }


        }

        return returnDeathData={bullets:deathBullets,fishs:deathLockFish};

    }

    /**
     * 取得玩家鎖定的fish id
     * @param table 0-3
     * @returns fishid
     */
    public getLockFishData(table:number):number
    {
        return this._aryLockFishBullets[table].lockFish;
    }

    //--碰撞後(子彈server)
    public hitFish(bulletIds:number[]):void
    {
        this.removeLockBulletData(bulletIds);

        //--set bullet is death
        //this.cleanFishTarget(bulletIds);
    }


    public refundBulletDatas(bullerIds:number[]):void
    {
        this.removeLockBulletData(bullerIds);
    }




    //--碰撞後(子彈client)--單純的刪自己的資料就好
    public afterHitRemoveLockBulletData(bulletIds:number[]):void
    {
        this.removeLockBulletData(bulletIds);

        //this.removeBulletWithoutNet(bulletIds);

        //--set bullet is death(多此一舉wtf???)
        //--直接在bullet裡面監聽
        //this.cleanFishTarget(bulletIds);
    }


    public afterUpdateforDeate(bulletIds:number[]):void
    {
        this.removeLockBulletData(bulletIds);

        //this.removeBulletWithoutNet(bulletIds);
        //this.cleanFishTarget(bulletIds);
    }


    


    //--找不到漁網的情況下刪除子彈(20240301沒有用到)
    public removeBulletWithoutNet(bulletIds:number[]):void
    {
        //this.removeLockBulletData(bulletIds);

        for(let i of bulletIds)
        { 
            this._view.getDataFromgameMediator(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_cleanFishTarget,i);
        }
    }

    //-this._gameMediator.getViewUserData(GameViewMediatorUser.FishView,GameViewMediatorUserDataKey.Fish_removeFishAimLock); 
    /**
     * 這邊取代本來送出事件的utoAndLockEvent.REMOVE_FISH_AIMLOCK
     */
    /*
    protected removeFishAimLock():void
    {
        this._view.getDataFromgameMediator(GameViewMediatorUser.FishView,GameViewMediatorUserDataKey.Fish_removeFishAimLock);
    }*/ 

    /**
     * 沒有用到20240301
     * 這邊取代本來送出事件的AutoAndLockEvent.KILL_TARGET_BULLETS
     * @param value bullet id 
     */
    protected cleanFishTarget(value:number[]):void
    {
        for(let i of value)
        {
            this._view.getDataFromgameMediator(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_setBulletIsDeath,i);
        }
    }



    protected spFishSetLockFishBullet(f:FishData,isPlayer:boolean):{position:{x:number,y:number},sp:number,useBullet:boolean,previousTarget:number}
    {
        return null;
    }

    //--override
    protected spFishupdateLockBullets(f:FishData,bulletId:number,isPlayer:boolean):number[]
    {
        /*
        let dragonPartId:string=this._bulletsSystem.getDragonPartLockId(this._aryLockFishBullets[i].lockBullets[j]);
        let dragonPart:FishCenter.FishData=this._fishSystem.getDragonPart(dragonPartId);
    
        if(dragonPart!=null)
        {
            let mesh:FishCenter.DragonItem=<FishCenter.DragonItem>dragonPart.fishMesh;
            fishGlobal=c.toGlobal(new PIXI.Point(mesh.x,mesh.y)); 

            stageLocalPoint=CoreRenderMode.RenderCore.app.stage.toLocal(fishGlobal);
            //--算邊境(邊境之外就直接回收啦)
            if(stageLocalPoint.x<=AREA_BOUNDARY.w && stageLocalPoint.x>AREA_BOUNDARY.x)
            {
                if(stageLocalPoint.y<=AREA_BOUNDARY.h && stageLocalPoint.y>AREA_BOUNDARY.y)
                {
                    rp=bc.toLocal(new PIXI.Point(fishGlobal.x,fishGlobal.y));
                    this._bulletsSystem.resetEndPositionAndFishTargetId(rp,this._aryLockFishBullets[i].lockBullets[j]);
                    //log('setDragonBullet',dragonPartId);  
                
                }else{
                    
                    destoryLockBullet.push(this._aryLockFishBullets[i].lockBullets[j]);
                    
                }

            }else{
            
                    destoryLockBullet.push(this._aryLockFishBullets[i].lockBullets[j]);

            } 


        }else{
        
            //--回收~因為找不到
            destoryLockBullet.push(this._aryLockFishBullets[i].lockBullets[j]);
            //log('recycleLockBullet',dragonPartId);
        }
        */

        return [];


    }
}
 
 