/**
 * Created by EricHuang on 2023/10/01.
 * 射擊/自動射擊/鎖定/定向射擊
 */
//import {viewfun} from '../../framework/abstract/mvvm/AbstractView';
import {FishGameMainLogic} from '../../framework/logic/gameLogic/FishGameMainLogic';
import {Fish1GameAutoAndLockData} from './Fish1GameAutoAndLockData';
import {MouseBehaviorAutoClick} from "../../framework/logic/mouseBehavior/MouseBehaviorAutoClick";
import {viewBind} from '../../framework/abstract/mvvm/AbstractView';
import { PropType } from '../model/Fish1ModelDefinitions';
import { FishData } from '../../framework/logic/views/fishView/FishData';
import {addFish} from '../model/Fish1ModelDefinitions';
import {GameViewMediatorUser,GameViewMediatorUserDataKey} from "../../framework/logic/gameLogic/FishGameLogicDefinitions";
import { BoxCollider, find, UITransform } from 'cc';
import { Vec3,v3,log} from 'cc';
import { BuiltinBoxShape } from 'cc';
import { Fish1FishData } from '../views/fishView/Fish1FishData';
import {GameUtils} from '../../framework/utils/GameUtils';
import { AREA_BOUNDARY,ShootSpeedRate} from "../../framework/game/mouseBehavior/MouseBehaviorDefinitionsBase";



export class Fish1GameMainLogic extends FishGameMainLogic
{
    //-_playerTableId  0-3
    @viewBind _useCrazyProp;//--使用狂暴道具

    @viewBind _addFishs:addFish[];

    private _shootDebugTimestamp:number;//--20240123-

    constructor()
    {
        super();

        this._classId='Fish1GameMainLogic';

        this._fish2DContainerNode=find('Canvas/fishNodeContainer/fishNode');

        this._mouseContainerNode=find('Canvas/mouseNode');

        this._bulletContainerNode=find('Canvas/bulletNodeContainer/bulletNode');

        this._sceneCameraNode=find('Main Camera');//--scene camera

        this._canvasCameraNode=find('Canvas/CameraGUI');//--gui_2D layer

        //--for debug--
        this._shootDebugTimestamp=0;
        
    }

    

    //--override--
    public setAfterInitPlayerSeatData(table:number):void
    {
        this._fishGameAutoAndLockData=new Fish1GameAutoAndLockData();
        
        super.setAfterInitPlayerSeatData(table);

        //--設定特殊檢測的魚隻type(boss)
        this._arySpFishType=[21];

        this._fishGameAutoAndLockData.spUpdateFishTypeforBullet=[21];

        //--設定滑鼠感應區域(這也是邊界檢測的區域)
        //this.setGameBoundary(50,90,100,50);
        //this.setGameBoundary(1750,940);
        this.setGameBoundary(1850,960);

        //this.afterRotationPos(40);--20240306 編輯器來做
    }

     
    /**
    * override it
    * 你可以將sub當作key值,switch case他來做相關的處理
    * @param sub 屬性變數的字串
    * @param value 傳送的資料
    */
    protected processModelData(sub,value):void
    {
        super.processModelData(sub,value);
        
        switch(sub)
        {
            case'_useCrazyProp':

            log('fish1GameLogic___useCrazyProp',value[0],this._viewModel['_playerTableId']);

            //--玩家自己啟動/關閉狂暴
            if(value[0].index==this._viewModel['_playerTableId'])
            {
                this.pauseAutoShootTime();
                
                (<MouseBehaviorAutoClick>this._mouseBehavior).setCrazyTime(value[0].open);

                if(this._autoShootStatus)
                {
                    //--送進去就重新啟動計時器
                    (<MouseBehaviorAutoClick>this._mouseBehavior).autoShoot=true; 
                }
            }


            break;


            case '_addFishs':

                log('Fish1Logic__addFishs',value[0]);

                let bossId=this.checkSpBossId(value[0]);

                if(bossId!=0)
                {
                    this._spBossId=bossId;
                }

            break;    
        }
    }

    protected getShootData(s:any):any
    {
        log('getShootData',this._viewModel['_roomStatus'],this._viewModel['_playerTableId'],this._viewModel['_propRunData']);
        
        /**
         ---server 回送我這邊包裝出去的資料
        endX:data.si.x,
        endY:data.si.y,
        actionId:data.si.a,
        lockTarget:data.si.l,
        prop:data.si.p,
        isCrazy:data.si.c
        */

        let props=this._viewModel['_propRunData'][PropType.PROP_CRAZY].isRunning;

        log('check_crazy_beforeShoot',props);

        
        /*
        let testNowTimesteap:number=new Date().getTime();

        let previousTime=this._shootDebugTimestamp;

        let checkTime:number=0;

        if(this._shootDebugTimestamp==0)
        {
            checkTime=ShootSpeedRate.SHOOTING_RATE_STAND;
        
        }else{

            checkTime=testNowTimesteap-this._shootDebugTimestamp;
        }

        this._shootDebugTimestamp=testNowTimesteap;
        */

       
        let sendData= {
                
            w:s.info.weaponType,
            
            s:this._viewModel['_playerTableId'],//--正式使用的
            //s:1,//--for test
            //--鎖定( l:--鎖定的魚隻id--沒有就不用了)
            si:
            {
              x:s.endX,
              y:s.endY,
              a:s.info.actionId,
              //l:strLockTarget,//--鎖定( l:--鎖定的魚隻id--沒有就不用了)
              c:props,//--檢查是否用狂暴道具
              //p:useProp,--
              d:s.direction,
              f:s.isFree,
              //--r=roomstatus
              r:this._viewModel['_roomStatus'].status,//--20231027房間狀態
              //--for auto/lock test--
              //t:{pt:previousTime,nt:testNowTimesteap,ct:checkTime}
                
            }
            /*
            credit:s.info.gunCredit,
            isDrill:false,//-之後要補上正確的判斷
            isCrazy: false,
            endX: s.endX,
            endY: s.endY,
            actionId: s.info.actionId,
            prop: useProp,
            lockTarget:strLockTarget,
            isFree:s.isFree,
            direction:s.direction
            */
        };

        log('shootBulletData_logic',sendData);

        return sendData;
    }

    //---20240412--塞入紀錄資料
    protected sendRecordData(s: any): void
    {
        log('sendRecordData',s);


        // 範例如何紀錄『射擊種類』20240412
        /*
        const shootAnal = util.analytic.ShootTypeAnalytics;
        shootAnal.start(1); // 每一分鐘採樣一次
        shootAnal.accumulate('auto'); // 每次射一發自動射擊就紀錄一次
        shootAnal.accumulate('normal'); // 每次射一發手動射擊就紀錄一次
        shootAnal.accumulate('lock'); // 每次射一發鎖定射擊就紀錄一次
        shootAnal.accumulate('lock'); // 第二次鎖定射擊
        */
        // 假設1分鐘到，就會送出1次自動、1次手動、2次鎖定。 然後清空。
        const util: Util = window.util;

        if(s.data['l'])
        {
            if(s.lockMode)
            {
                //--lockmode
                util.analytic.ShootTypeAnalytics.accumulate('lock');

            }else{

                //--automode
                util.analytic.ShootTypeAnalytics.accumulate('auto');
            }

        }else{
            
            //--manual shoot
            util.analytic.ShootTypeAnalytics.accumulate('normal');
        }
    }

    //--boss 用的(直接拿龍頭)
    protected checkSpFishInSide(f:FishData):{pos:Vec3,reLockTarget:number,lockFishType:number}
    {
        
        let returnRp:{pos:Vec3,reLockTarget:number,lockFishType:number}=null;

        let colliders=f.collisionArea;

        let shape:BuiltinBoxShape=(<BoxCollider>colliders[6]).shape;

        let worldobb=shape.worldObb;

        let worldPos:Vec3=GameUtils.cover3dor2dToWorldPos(this._sceneCameraNode,worldobb.center,this._canvasCameraNode);
        
        let localPos:Vec3=this._mouseContainerNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos);

        if(localPos.x<=AREA_BOUNDARY.w && localPos.x>AREA_BOUNDARY.x)
        {
            if(localPos.y<=AREA_BOUNDARY.h && localPos.y>AREA_BOUNDARY.y)
            {
                //--這邊給world座標(滑鼠也是送world pos)
                //-{pos:Vec3,reLockTarget:number,lockFishType:number}
                returnRp=
                {
                    pos:worldPos,
                    reLockTarget:f.id,
                    lockFishType:f.fishType//--這個好像不會用到阿
                }

            }

        } 
        return returnRp;
    }

    /**
     * 這時候送進來的座標是mlouseclick node的local contain的pos
     * @param x local pos
     * @param y local pos
     * @returns 
     */
    public checkLockFishAimTarget(x:number,y:number):string
    {
        //return '';

        let clickNode=find('Canvas/mouseNode');

        let wposClick=clickNode.getComponent(UITransform).convertToWorldSpaceAR(v3(x,y));

        return  this._gameMediator.getViewUserData(GameViewMediatorUser.CollisionSystemView,GameViewMediatorUserDataKey.Collision_PickUp,{x:wposClick.x,y:wposClick.y});
    }

    private checkSpBossId(fishInfo:any):number
    {
        let bossFid:number=0;
        
        for(let fish of fishInfo)
        {
            //--boss
            if(fish.type==21)
            {
                bossFid=fish.id;

                break;
            }
        }

        return bossFid;
    }
}