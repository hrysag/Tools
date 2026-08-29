/**
 * Created by EricHuang on 2023/9/25.
 */
import {BulletView} from '../../../framework/logic/views/bulletView/BulletView';
import {startGlobalPositions} from '../../../framework/logic/views/bulletView/BulletDefinitions';
import {AddBulletInfo} from '../../../framework/logic/views/bulletView/BulletDefinitions';
import {EffectFactoryOption} from '../../../framework/logic/views/bulletView/BulletDefinitions';
import {IfEffectBase} from '../../../framework/logic/views/bulletView/BulletDefinitions';
import {IfEffectFactory} from '../../../framework/logic/views/bulletView/BulletDefinitions';
import {EffectOption} from '../../../framework/logic/views/bulletView/BulletDefinitions';
import {FishBulletEffectCenter} from '../../../framework/logic/views/bulletView/bulletEffect/BulletEffectCenter';
import {Fish1BulletData} from './Fish1BulletData';
import {BulletSettingData} from '../../../framework/game/model/ModelDefinitionsBase';
import {Bullet} from '../../../framework/logic/views/bulletView/BulletDefinitions';
import {BulletActionType} from '../../../framework/game/model/ModelDefinitionsBase';
import {Fish1BulletPrefabAction} from './actions/Fish1BulletPrefabAction';
import {Fish1DynamicBulletPrefabAction} from './actions/Fish1DynamicBulletPrefabAction';
import {AbstractBaseBullet} from '../../../framework/logic/views/bulletView/bulletActions/BulletActionBase';
import {LoadingResManager} from '../../../framework/logic/loading/LoadingResManager';
import {TweenMaxCocosPlugin} from '../../../framework/utils/TweenMaxPlugin';
import {find,Node,Vec3,UITransform, Graphics, Label} from 'cc';
//import {viewfun} from '../../../framework/abstract/mvvm/AbstractView';
import {viewBind} from '../../../framework/abstract/mvvm/AbstractView';
import {addbullet} from './../../model/Fish1ModelDefinitions';
import {GuiNotifycationSubbscriptionSubject} from '../../../framework/game/guiCore/GuiDefinitionsBase';
import {Notifycation} from '../../../framework/abstract/mvvm/Notifycation';
import {GUIEvent} from '../../../framework/game/events/eventBase';
import {ServerResCode,ServerSendCode} from '../../../framework/logic/connect/ConnectBaseDefinitions';
import {GameViewMediatorUserDataKey,GameViewMediatorUser} from '../../../framework/logic/gameLogic/FishGameLogicDefinitions';
import {UIOpacity,v3,Sprite} from 'cc';
import {color} from 'cc';
import {Layers} from 'cc';
import {v2} from 'cc';
import {log} from 'cc';
import { SoundsManager } from '../../../framework/logic/audio/SoundsManager';
//export class Fish1BulletView extends BulletView<Fish1BulletData>{
//@viewfun('Fish1VM')

export class Fish1BulletView extends BulletView
{

    //-要監聽model資料改變的變數(名稱與model相同)
    @viewBind _addbullets:addbullet;

    @viewBind _playerTableId:number;

    @viewBind _mapCannonInfo;//-沒有要把資料存下來就直接寫個變數當索引就好了

    @viewBind _refundBullets;//-回收子彈

    @viewBind _hitFishs;

    @viewBind _roomStatus;

    private _layer2DBulletsContainer:Node;

    constructor()
    {
        super();

        this._classId='Fish1BulletView';
        
        
        //this._layer2DBulletsContainer=find('Canvas/bulletNodeContainer/bulletNode');

        //this._layer2DBulletsContainer.addComponent(this);

    }

    protected onLoad():void
    {
        super.onLoad();
        
        this._layer2DBulletsContainer=this.node;

        //Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.CHANG_BULLETS,this.chageBulletFromGui,this.constructor.name);
        /**
         * 不要用constructor.name..再用Uglify處理後,因為沒辦法設定--keep-fnames
         * 所以function name會被拿掉..很雷20240328
         */
        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.CHANG_BULLETS,this.chageBulletFromGui,this._classId);
    }
    
    //--用來塞初始定義的動作庫
    //----使用者自己塞這邊只會塞預設的
    protected  settingActions():void
    {
        this._ifActionClasses[BulletActionType.BULLET_ACTION_PREFAB]=Fish1BulletPrefabAction;
        this._ifActionClasses[BulletActionType.BULLET_ACTION_DYNAMIC]=Fish1DynamicBulletPrefabAction;
        
    }


    private chageBulletFromGui=(sub,value)=>
    {
        //log('Fish1bullet_changeBullet',sub,value[0]);
        this.changeBullet(value[0]);
    }


    public cleanTable():void
    {
        let b:Bullet;

        for(let i:number=0;i<this._aryBullets.length;i++)
        {
            
            b=this._aryBullets[i];

            b.lockFishTarget=0;

            b.useProp=0;

            b.isDead=true; 

            if(b.state==1)
            {
                
                if((<Fish1BulletData>b).isTweening)
                {
                    let tweenComponent:TweenMaxCocosPlugin=b.bulletShell.getComponent(TweenMaxCocosPlugin);
                    if(tweenComponent)
                    {
                        TweenMax.killTweensOf(tweenComponent);
                    }
                }
                
                let factorOption:EffectFactoryOption=
                {
                    effectObjType:b.effectFactoryID
                }
                let effect2DFactory:IfEffectFactory=FishBulletEffectCenter.getInstance().getEffectProduceFactory(factorOption);
                let effectData:IfEffectBase=b.bulletEffect[0];
                this._layer2DBulletsContainer.removeChild(b.bulletShell);
                let recycleData=effectData.clean();
                effect2DFactory.recyclePrefab(recycleData.id,recycleData.node);
                effect2DFactory.pushEffectBase(effectData);//-effectObj
            }

            b.bulletEffect.length=0;
            
            b.collisions.length=0;

            this._aryBullets.splice(i,1);

            if(this._aryBulletsPool.length>=300)
            {
                b=null;

            }else{
                
                b.clean();
                this._aryBulletsPool.push(b);
            }

            //--回收子彈
            //this._viewModel.sendServer(ServerSendCode.hitFish,{id:b.id,fid:-1});

            i=i-1;
        }

    }
    

   
   
    //--override
    public removeBullets():void
    {
        let b:Bullet;

        for(let i:number=0;i<this._aryBullets.length;i++)
        {
            b=this._aryBullets[i];

            if(b.isDead)
            {
                if(b.state==1)
                {
                    
                    if((<Fish1BulletData>b).isTweening)
                    {
                        let tweenComponent:TweenMaxCocosPlugin=b.bulletShell.getComponent(TweenMaxCocosPlugin);
                        if(tweenComponent)
                        {
                            TweenMax.killTweensOf(tweenComponent);
                        }
                    }
                    
                    let factorOption:EffectFactoryOption=
                    {
                        effectObjType:b.effectFactoryID
                    }
                    let effect2DFactory:IfEffectFactory=FishBulletEffectCenter.getInstance().getEffectProduceFactory(factorOption);
                    let effectData:IfEffectBase=b.bulletEffect[0];
                    this._layer2DBulletsContainer.removeChild(b.bulletShell);
                    //effectData.clean();
                    let recycleData=effectData.clean();
                    effect2DFactory.recyclePrefab(recycleData.id,recycleData.node);
                    effect2DFactory.pushEffectBase(effectData);//-effectObj
                }

                //--for test--20240227
                /*
                if(b.show)
                {
                    this._layer2DBulletsContainer.removeChild(b.show);
                    b.show=null;
                }*/

                //b.bulletContainer=null;
                b.bulletEffect.length=0;
                b.collisions.length=0;

                this._aryBullets.splice(i,1);

                if(this._aryBulletsPool.length>=300)
                {
                    b=null;

                }else{
                    
                    b.clean();
                    this._aryBulletsPool.push(b);
                }


                i=i-1;
            }
        }


    }
   
    //--override--

    public addBullet(bullets:AddBulletInfo[]):void
    {
        //--test--
        /*
        let testNode:Node=new Node();
        let graphic:Graphics=testNode.addComponent(Graphics);
        //-graphic 不受到UIOpacity組件影響~有夠78(coloc 0-255)
        graphic.fillColor=color(255,255,255,128);
        graphic.rect(-50,-50,100,100);
        graphic.fill();
        testNode.layer=Layers.Enum.UI_2D;
        this._layer2DBulletsContainer.addChild(testNode);
        testNode.setPosition(v3(bullets[0].mouse2D.x,bullets[0].mouse2D.y));

        let testNode2:Node=new Node();
        let graphic2:Graphics=testNode2.addComponent(Graphics);
        //-graphic 不受到UIOpacity組件影響~有夠78(coloc 0-255)
        graphic2.fillColor=color(247,237,15,128);
        graphic2.rect(-50,-50,100,100);
        graphic2.fill();
        testNode2.layer=Layers.Enum.UI_2D;
        this._layer2DBulletsContainer.addChild(testNode2);
        testNode2.setPosition(v3(bullets[0].emitter2D.x,bullets[0].emitter2D.y));
        */
        //--test--
         
        let len:number=bullets.length;
        //let aryBullets:Bullet[]=[];
        let aryBullets:{[key:string]:Bullet[]}={};
        aryBullets[BulletActionType.BULLET_ACTION_DYNAMIC+'']=[];
        aryBullets[BulletActionType.BULLET_ACTION_PREFAB+'']=[];
        
        log('fish1BulletView_addBullet',bullets);

        for(let i:number=0;i<len;i++)
        {
            let aryAction:string[]=bullets[i].actionId.split("_");
            //BulletImage_2_4_0(actionId的樣子,BulletImage會改成number)
            let id:string=aryAction[0];//--子彈動作與外皮
            let effectId:number;
            let systemIndex:string=aryAction[aryAction.length-1];
            let aryTargetBullet:Bullet[];

            if(systemIndex=='1')
            {
               //--成就系統的子彈

            }else{
               
              //---一般系統的子彈
              effectId=Number(aryAction[1]);//--子彈的樣式index  

            }

            //--取得子彈設定資料
            let obj:BulletSettingData=this.getActionInfo(id,effectId,systemIndex);

            let amount:number=obj.amount; 
            let systemId:number=obj.systemId; 
            //let effectId:number=0; 
            //let sound:string=obj.sound; 
            let system2Dor3D:number=obj.system2Dor3D; 
            //--這邊先用prefab的id
            let effect2DAssetsID:string=obj.effect2DAssetsID; 
            let strFishNetId:string=obj.strFishNetId; 
            let collisionW:number=obj.collisionW; 
            let collisionH:number=obj.collisionH; 
            let fishNetW:number=obj.fishNetW; 
            let fishNetH:number=obj.fishNetH; 
            let lifeTime:number=obj.lifeTime; 
            let speed:number=obj.speed; 
            let fps:number=obj.fps; 
            let effectFishNetAtlasID:string=obj.effectFishNetAtlasID;
            log('check_addbullet_obj_bulletsys::'+'\n'+'obj_',obj,'\n'+'aryAction::',aryAction,'\n'+'id::',id,'\n'+'bullets::',bullets[i],'\n'+'_mapIfaction::',this._mapIfaction);
            //-(4) ['0', '1', '0', '0']0: "0"1: "1"2: "0"3: "0"length: 4[[Prototype]]: Array(0) 0

            if(obj)
            {
                let ifAction:AbstractBaseBullet;
                //--舊版的捕魚達人1,鎖定是要使用道具,現在已經移到常規功能20230816
                //if(bullets[i].prop!=0 || bullets[i].lockTarget!=-1)
                if( bullets[i].lockTarget!=-1)
                {
                   id=BulletActionType.BULLET_ACTION_DYNAMIC+''
                }

                //-找尋子彈的動作系統
                if(!this._mapIfaction[id])
                {
                    
                    ifAction=new this._ifActionClasses[id]();

                    this._mapIfaction[id]=ifAction;

                    log('check_map_mapIfaction',id,this._mapIfaction,this._ifActionClasses);

                    //ifAction.collisionContainer=this._collisionContainer;

                    ifAction.container=this._layer2DBulletsContainer;

                    ifAction.initEmitter();

                }else{

                    ifAction=this._mapIfaction[id];
                }

                aryTargetBullet=aryBullets[id];

                
                let b:Bullet=(this._aryBulletsPool.length>0)?this._aryBulletsPool.pop():new Fish1BulletData();
                
                b.init(system2Dor3D);
                
                b.lockFishTarget=bullets[i].lockTarget;//---鎖定目標魚隻-2017/02/10
               
                b.lifeTime=lifeTime;
                b.speed=speed;
                //b.originalSensorSize={w:collisionW,h:collisionH};
                //b.collisionfishingNetAreaInfo={w:fishNetW,h:fishNetH};
                b.id=bullets[i].bulletId;
                b.amount=amount;//--20181016
                b.isPlayerTarget=bullets[i].isPlayer;//--beforeaddBullets判斷完了
              
                b.useProp=bullets[i].prop;//---使用道具-2017/02/10
                b.lockFishTarget=bullets[i].lockTarget;
               
                b.table=bullets[i].tableID;

                /*
                b.lockDragonId=bullets[i].dragon;//---鎖定的龍20220930
                b.isFree=bullets[i].isFree;
                b.isDrill=bullets[i].isDrill;
                */

                /*
                變色資訊 for test
                if(bullets[i].c)
                {
                    b.testColor=bullets[i].c;
                }*/

                if(b.state==1)
                {
                  //--2D的子彈
                  b.ePosition.x=bullets[i].mouse2D.x;
                  b.ePosition.y=bullets[i].mouse2D.y;
                  b.position.x=bullets[i].emitter2D.x;
                  b.position.y=bullets[i].emitter2D.y;

                  let assetsId:string='';
                  let strNet:string='';
                  
                  if(bullets[i].isCrazy)
                  {
                    //---狂暴狀態
                    
                    assetsId=effect2DAssetsID+"_crazy";
                    //obj.effectId="crazy_"+effectId;
                    strNet=strFishNetId+"_crazy";
                    

                  }else{
                      
                    assetsId=effect2DAssetsID;//---一般狀態

                    strNet=strFishNetId;//--漁網

                  }
                  log('addBullet_check_crazy_',bullets,assetsId,strNet);

                    b.strFishNetId=strNet;//--漁網

                    if(effectFishNetAtlasID!='' && effectFishNetAtlasID!=undefined)
                    {
                        b.effectFishNetAtlasID=effectFishNetAtlasID;
                    }
                    
                   //--找彈殼的效果(先暫時這樣,要在擴增(要去判斷要取哪個變數))
                   
                    let factoryOption:EffectFactoryOption=
                    {
                        prefabId:assetsId
                    }
 
                    let effect2DFactory:IfEffectFactory=FishBulletEffectCenter.getInstance().getEffectProduceFactory(factoryOption);
                    
                    //-EffectOption
                    let effectOption:EffectOption=
                    {
                        id:b.id,
                        prefab:LoadingResManager.getInstance().getPrefab(assetsId),
                        fps:fps,
                        assetsId:assetsId
                    };

                    b.bulletEffect=[];

                    b.bulletEffect.push(effect2DFactory.createEffect(effectOption));

                    b.actionEffectID=effect2DFactory.strSystemId;//--閃電再用的2020-05-25

                    b.effectFactoryID=effect2DFactory.strSystemId;

                  

                    //---play audio
                    if(b.isPlayerTarget)
                    {
                        SoundsManager.getInstance().play(obj.sound);

                    }else{

                        //--非玩家本身採半透明呈現方式
                        
                        if(b.bulletEffect[b.bulletEffect.length-1].effectObj.getComponent(Sprite))
                        {

                            b.bulletEffect[b.bulletEffect.length-1].effectObj.getComponent(Sprite).color=color(255,255,255,128);
                        
                        }else if(b.bulletEffect[b.bulletEffect.length-1].effectObj.getComponent(UIOpacity))
                        {
                            
                            b.bulletEffect[b.bulletEffect.length-1].effectObj.getComponent(UIOpacity).opacity=128;
                        
                        }
                        

                    }


                }else{

                  //---3D的子彈

                }



                aryTargetBullet.push(b);

                this._aryBullets.push(b);


            }else{
                
                throw new Error("bulletData is null");  
            }

        }

       

        for(let a in this._mapIfaction)
        {
           //--這裡只是一次一顆所以才不會爆開..
           if(aryBullets[a].length>0)
           {
                this._mapIfaction[a].initBulletState(aryBullets[a]);

           }
          
        }
        log('checkActionMap',this._mapIfaction,aryBullets,this._aryBullets);

        //ifAction.initBulletState(aryBullets);
    }

    protected openfishNet(bulletId:number):number
    {
        let bullet:Bullet=this.getBulletByID(bulletId);

        let r:number=bulletId;
        log('openfishNet',bullet); 
        if(bullet)
        {
            bullet.isCollision=true;

            bullet.useFishingNets=true;

            r=-1;
            let ifAction:AbstractBaseBullet=this._mapIfaction[bullet.strSystemId];
            
            ifAction.changeEffect(bullet); 
            //let mc:Node=bullet.bulletShell;
            bullet.bulletShell.setScale(v3(0,0,0));
            
            let opacity:UIOpacity=bullet.bulletShell.getComponent(UIOpacity);
            if(!opacity)
            {
                opacity=bullet.bulletShell.addComponent(UIOpacity);
            }
            opacity.opacity=0;//---0-255
            //let targetObj={scaleX:0,scaleY:0,opacity:0};
            //bullet.tweenObj={scaleX:0,scaleY:0};
            let componentTweenMax:TweenMaxCocosPlugin=bullet.bulletShell.addComponent(TweenMaxCocosPlugin);
            componentTweenMax.others=bullet.id;
            bullet.isTweening=true;

            TweenMax.to(componentTweenMax,.5,
                {
                   scale:1,
                   opacity:255,
                   ease:Elastic.easeOut,
                   onCompleteParams:[{bullet:componentTweenMax}],
                   onComplete:(value:any)=>
                   {
                        let b:Bullet=this.getBulletByID(value.bullet.others);
                        //---20171201 fix
                        if(b!=null)
                        {
                            log("isDeadNet");
                            b.isDead=true;
                            b.isTweening=false;
                            //this.removeBullets();//--for test
                        }
                   }
                });
            //-https://forum.cocos.org/t/topic/111957--cocos用tweenmax
            

        }

        return r;
    }

   


    private async beforeaddBullets(bullets:addbullet):Promise<void>
    {
        log('beforeaddBullets__AAAAA',bullets,this._playerTableIndex);
        /**
         * credit: 495
            info: {
                actionId: "0_1_0_0"
                direction: undefined
                endX: 1298.886328125
                endY: 371.7302343749999
                isCrazy: false
                isFree: false
                prop: undefined
                roomStatus: 0
            },
            lockTarget: -1
            siteIndex: 0
            sn: 1
            weaponType: 2
         */
        //--0-3
        let flag:boolean=(this._playerTableIndex==bullets.siteIndex)?true:false;

        //-_playerTableIndex
        
        let shootFlag:boolean=true;//--可以刪了,沒有意義

        if(!flag)
        {
             
            //--處理非玩家本身的子彈

            let changeValue:{index:number,score:number};

            if(bullets.info.isFree)
            {
               //----其他玩家freegame的子彈
               //this.changeBulletStyle(0,value.siteIndex);

               changeValue={index:bullets.siteIndex,score:0} 

               this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView,GameViewMediatorUserDataKey.Gui_changeBulletStyle,changeValue);

            }else{
                
                //------非該玩家擊發的子彈(設定炮管顯示)
                //let gunScore:number=this._renderBase.getGunScore(value.bullet[j].info.actionId);

                let gunScore:number=this.getGunScore(bullets.info.actionId);
                //log("changeBulletStyle",gunScore);
                changeValue={index:bullets.siteIndex,score:gunScore}; 

                //this.changeBulletStyle(gunScore,value.siteIndex);
            }

            this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView,GameViewMediatorUserDataKey.Gui_changeBulletStyle,changeValue);
        }

        if(shootFlag)//--這個判斷不知道在聰沙小
        {
            let p:{position:{x:number,y:number},sp:number,useBullet:boolean,previousTarget:number}=null;

            let addbulletFlag:boolean=true;
            //--寫子彈(server back)
            if(bullets.lockTarget)
            {
                //--鎖定的子彈
                //--這個setLockFishBullet要用別的class 獨立起來去做2023-10-01
                //--要去寫子彈的鎖定data還有砲台的相關旋轉
                //p=this.setLockFishBullet(bullets.lockTarget,bullets.sn,bullets.siteIndex,flag);
                
                //--這邊要檢查此時玩家是否更換鎖定目標,如果更換目標就回收子彈
                if(bullets.lockTarget!=-1 && bullets.lockTarget!=0)
                {
                    //--送出來的座標是世界座標
                    p=await this._gameMediator.getViewUserData(GameViewMediatorUser.GameLogicSystem,GameViewMediatorUserDataKey.GameLogic_setLockFishBullet,bullets);

                    log('bullets.lockTargetAAAAA_',p);

                    if(p!=null)
                    {
                        
                        //--其他玩家換目標了要怎麼處理?
                        if(p.previousTarget!=0)
                        {
                            //--玩家之前鎖定的子彈(現在已經改變目標)
                            //--舊的子彈準備回收,新打出來卻瞄準舊目標的就不打出來了
                            this.cleanPlaerPreviousLockTarget(p.previousTarget,bullets.siteIndex);
                        
                            if(!flag)
                            {
                                addbulletFlag=true; 

                                //-世界座標
                                bullets.info.endX=p.position.x;

                                bullets.info.endY=p.position.y; 

                            }else{

                                addbulletFlag=false; 
                            } 


                        }else{
                            
                            addbulletFlag=true; 

                            //-世界座標
                            bullets.info.endX=p.position.x;

                            bullets.info.endY=p.position.y; 
                        }

                        if(!p.useBullet)
                        {
                            //--就是判定不使用(回收子彈)
                            addbulletFlag=false; 
                            
                            //this._viewModel.sendServer(ServerSendCode.hitFish,{id:this._aryBullets[i].id,fid:-1});
                        }
                    
                    }else{

                        //--找不到鎖定的魚(回收子彈)
                        addbulletFlag=false;  
                        
                        //this._viewModel.sendServer(ServerSendCode.hitFish,{id:this._aryBullets[i].id,fid:-1});
                    }
                
                }else{

                    //--因為點擊是拿localpos
                    //---實際
                    let clickNode=find('Canvas/mouseNode');

                    let wposClick=clickNode.getComponent(UITransform).convertToWorldSpaceAR(v3(bullets.info.endX,bullets.info.endY));
                    
                    p={position:{x:wposClick.x,y:wposClick.y},sp:0,useBullet:true,previousTarget:0};

                    //-世界座標
                    bullets.info.endX=p.position.x;

                    bullets.info.endY=p.position.y; 
                    
                    //--PS--
                    //p={position:{x:bullets.info.endX,y:bullets.info.endY},sp:0,useBullet:true,previousTarget:0};
                }
                

            }


            if(addbulletFlag)
            {
                //--準備換座標資訊(原本的gameplayerMode裡面的addBullets方法)
                        
                //--座標已經是global的體系了
                /**
                 * value.index,value.pos.x,value.pos.y--帶進去的資料
                 * {index:value[0].index,pos:worldEndPosition}
                 * 
                 */

                //--選轉並且回傳旋轉後的發射座標
                let cannonPosition:{p:Vec3,r:Vec3,h:number}=this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView,GameViewMediatorUserDataKey.Gui_rotateCannonAndGetPosition, {index:bullets.siteIndex,pos:p.position});

                //--舊版的會在轉換座標沒做完前就預先旋轉砲塔
                //let cannonPosition:{p:Vec3,r:Vec3,h:number}=this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView,GameViewMediatorUserDataKey.Gui_getCannonPosition,bullets.siteIndex);


                let data:startGlobalPositions={p:cannonPosition.r,cannonP:cannonPosition.p,cannonR:cannonPosition.r,cannonH:cannonPosition.h};

                /*
                let mouseCamera=find('Canvas/CameraGUI').getComponent(CameraComponent);

                let wpos=mouseCamera.getComponent(CameraComponent).screenToWorld(v3(bullets.info.endX,bullets.info.endY));
                */ 

                let bulletData:AddBulletInfo=
                {
                    
                    isCrazy:bullets.info.isCrazy,
                    //--這邊的座標已經是worldpos
                    beforeToLocalEndXY:{x:bullets.info.endX,y:bullets.info.endY},
                    mouse2D:{x:0,y:0},
                    emitter2D:{x:0,y:0},
                    actionId:bullets.info.actionId,
                    bulletId:bullets.sn,
                    isPlayer:flag,
                    prop:0,
                    lockTarget:bullets.lockTarget,
                    isFree:false,
                    tableID:bullets.siteIndex,
                    cannonRotation:data

                }

                log('check_bulletdata',bulletData,cannonPosition,data);

                this.setBulletData(bulletData,data);

            }else{
               
               /**
                *  20240320
                *  因為根本不會推到bulletsPool裡面所以直接call server回收 
                */
               
               this._viewModel.sendServer(ServerSendCode.hitFish,{id:bullets.sn,fid:-1}); 
            }    
        }
    }

    private removeBulletsByIds(ids:number[]):void
    {
        let len:number=ids.length;

        log('remove');
        
        for(let i :number=0;i<len;i++)
        {
            this.removeSingleBullet(ids[i]);
        }
    }

    //======給其他平行的view拿資料用的(透過mediator去拿)
    //--interface abstract
    public getData(dataKey:string,value?:any):any
    {
        let data:any=null;

        switch(dataKey)
        {
           case GameViewMediatorUserDataKey.Bullet_actionId:

           data=this._strNowAction;

           break;

           case GameViewMediatorUserDataKey.Bullet_gunScore:

           data=this.getGunScore(this._strNowAction);

           break;

           case GameViewMediatorUserDataKey.Bullet_getBullets:

           data=this._aryBullets;

           break;

           case GameViewMediatorUserDataKey.Bullet_getBulletById:

            data=this.getBulletByID(value);
 
           break;

           case GameViewMediatorUserDataKey.Bullet_weaponType:
            
            data=this.getScoreWithWeaponType(value);

           break;

           case GameViewMediatorUserDataKey.Bullet_openfishNet:
            
            data=this.openfishNet(value);

           break;


           case GameViewMediatorUserDataKey.Bullet_setBulletIsDeath:
            
            this.setBulletIsDeath(value);

           break;

           case GameViewMediatorUserDataKey.Bullet_cleanMoreFishTarget:
            
            this.cleanMoreFishTarget(value);

           break;


           case GameViewMediatorUserDataKey.Bullet_cleanFishTarget:
            
            this.cleanFishTarget(value);

           break;

           case GameViewMediatorUserDataKey.Bullet_cleanLocakTargetByDeathFishs:
            
            this.cleanLocakTargetByDeathFishs(value);

           break;

           case GameViewMediatorUserDataKey.Bullet_resetEndPositionAndFishTargetId:

            //-{pos:rp,id:this._aryLockFishBullets[i].lockBullets[j]}
            this.resetEndPositionAndFishTargetId(value.pos,value.id,value.lockFishId);
            
           break;

           case GameViewMediatorUserDataKey.Bullet_cleanAllPreviousLockTarget:
           
           log('cleanAllPreviousLockTarget__',value);
           this.cleanAllPreviousLockTarget(value);

           break;

           case GameViewMediatorUserDataKey.Bullet_cleanAllPlayerLockData:
           
            log('Bullet_cleanAllPlayerLockData');
            this.cleanAllPlayerLockData();
 
           break;

           //-cleanFishTarget
           //case GameViewMediatorUserDataKey.Bullet_cleanFishTarget:

           //this.cleanFishTarget(value);

           //break;



          
        }
        
        return data;
    }


    /**
    * override it
    * 你可以將sub當作key值,switch case他來做相關的處理
    * @param sub 屬性變數的字串
    * @param value 傳送的資料
    */
    protected modeleChangeHandler=(sub,value)=>
    {
       log('modeleChangeHandler_bulletview_',sub,value); 
       

       switch(sub)
       {
           case '_addbullets':
            
            //this._addbullets=this._viewModel['_addbullets'];
            this._addbullets=value[0];
            //--do something
            log('addBuFish1bulletView___addbullets',this._addbullets);
            
            //this.beforeaddBullets(this._viewModel['_addbullets']);
            this.beforeaddBullets(value[0]);
           
            break;

           case '_playerTableId':
            //--do something
            //this.playerTableIndex=this._viewModel['_playerTableId'];
            this.playerTableIndex=value[0];
            log('Fish1bulletView__playerTableId',this._playerTableIndex);
            
           break;


           case '_mapCannonInfo':
             
            log('Fish1bulletView__mapCannonInfo',value[0]);

            this._mapCannonInfo=value[0];
            
            //log('after__mapCannonInfo',this._mapCannonInfo);


           break; //-_refundBullets

           case '_refundBullets':

            log('Fish1bulletView___refundBullets',value[0]);

            //let removeData=this._viewModel['_refundBullets'];
 
            this.removeBulletsByIds(value[0]);
            
           break;

           case '_roomStatus':

           /**
             *  ps狀態代碼資訊
                0=正常/一般狀態,
                1=冰凍,
                2=金龍來襲,
                3=金龍死亡(禁止進房)
             */
            if(value[0].status==0)
            {
                //this.cleanAllLockTarget();

            }else if(value[0].status==2)
            {
                //this.cleanAllLockTarget();
                //20240301 因為server會接管回收,client不能主動回收(server 沒有lifetime)
                this.cancelAllLockTarget();
            }

           break;

           case '_hitFishs':
          
            
            let targetBullet=this.getBulletByID(value[0].bsn);

            if(targetBullet)
            {
                if(!targetBullet.useFishingNets)
                {
                    this.openfishNet(value[0].bsn);
                
                }else{
                    
                    //--張開漁網的把它移除
                    this.setBulletIsDeath(value[0].bsn);
                }
            }
            

           break;  
       }

    }

   public test():void
   {
      log('FishBulletView_test');
      this._viewModel.sendServer('fh.fhHandler.Shoot',
      {
        s:1,
        p:124,//-最新餘額
        id:456789,//-子彈id
        w:123,//-砲台型態/武器類別(不會用到)
        si:{a:'hello'}//-前端自定義座位表演參數物件(砲台角度,x,y,....),長度不得大於1000
      })
   }

    /*
    public resetEndPositionAndFishTargetId(position:Vec3,bulletId:number,lockFishId:number):void
    {
        super.resetEndPositionAndFishTargetId(position,bulletId,lockFishId);
        
        let b:Bullet=this.getBulletByID(bulletId);

        if(b)
        {
            if(b.lockFishTarget==lockFishId)
            {
                //--test--
                let testNode:Node;
                if(!this._layer2DBulletsContainer.getChildByName('resetEndposNode'))
                {
                    testNode=new Node('resetEndposNode');
                    let graphic:Graphics=testNode.addComponent(Graphics);
                    //-graphic 不受到UIOpacity組件影響~有夠78(coloc 0-255)
                    graphic.fillColor=color(255,255,255,255);
                    graphic.rect(-50,-50,100,100);
                    graphic.fill();
                    testNode.layer=Layers.Enum.UI_2D;
                    this._layer2DBulletsContainer.addChild(testNode);

                }else{
                    
                    testNode=this._layer2DBulletsContainer.getChildByName('resetEndposNode');
                }

                log('check_resetEndPos',position);
                
                testNode.setPosition(position);


                
                //--test--


            }else{

                log('autoShootBullet_resetEndPos_nothing');
            }
        }

    
    }*/



}