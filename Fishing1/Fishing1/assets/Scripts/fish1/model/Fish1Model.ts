/**
 * Created by EricHuang on 2023/9/22.
 */
import {FishModelBase} from '../../framework/logic/model/FishModel';
import {fishMeshState,TableInfo} from '../../framework/game/model/ModelDefinitionsBase';
import {FishRotationState} from '../../framework/game/model/ModelDefinitionsBase';
import {BulletActionType} from '../../framework/game/model/ModelDefinitionsBase';
import {ResultForConnect} from '../../framework/game/strategy/Strategy';
import {GUIEvent} from '../../framework/game/events/eventBase';
import {ServerResCode,ServerSendCode} from '../../framework/logic/connect/ConnectBaseDefinitions';
import {addbullet} from './Fish1ModelDefinitions';
import {addFish,PropType} from './Fish1ModelDefinitions';
import {Mutable} from '../../framework/abstract/mvvm/AbstractModel';
import {director, macro, Scheduler,log} from 'cc';

export class Fish1Model extends FishModelBase
{
    //--資料都要包裝成要送出去後的樣子,直接觸發setter
    //--這個就是server要寫回去的資料
    //=====bullet=========
    @Mutable _addbullets:addbullet;

    @Mutable _mapCannonInfo:{[key:number]:{score:number,speed:number,powerup:number}};
    
    @Mutable _refundBullets:number[];//--退款退的子彈(ServerResCode.RefundBullet)


    //=====fish=========
    @Mutable _addFishs:addFish[];

    @Mutable _addPopFishs:addFish[];
    
    @Mutable _hitFishs:any;

   
    //=====Lobby==========
   
    @Mutable _lobbyData:{loginName:string,playerRoomBase:string[]};
    
    @Mutable _setPlayerRoomforLocalDebug:string;

    @Mutable _roomTableInfo:{tables:TableInfo[],firstIntoRoom:boolean};
    
    //=====roomstatus========
    @Mutable _roomStatus:{status:number,startTime:number,endTime:number};

   

    //===props==============
    @Mutable _props:{[key:number]:{time:number,count:number}};//--server送進來的初始資料
    //--道具讀秒計時用的
    @Mutable _propRunData:{[key:number]:{time:number,timeCount:number,isRunning:boolean,isFinish:boolean}}

    @Mutable _useProp:{propType:number,index:number}//--使用道具通知
    
    @Mutable _useSummonProp:{index:number}//--召喚道具使用通知

    @Mutable _useCrazyProp:{index:number,open:boolean}//--狂暴道具使用通知
    
    //===boss=================
    @Mutable _bossStatus:string;//--檢查龍的離場狀態 

    //========reset focus================
    //@Mutable _resetFocusTime:number;
   
    //@Mutable _freeze:boolean;//--使用冰凍道具(不限玩家)
    
    //========test data===================
    @Mutable _testData:number;//--用來通知測試程式驅動相關功能

   
    private _firstIntoRoom:boolean;

    private _scheduler:Scheduler;
    
    //--其他玩家道具讀秒計時用的(狂暴才會用到)
    private _otherPlayerUseProp:{table:number,time:number,timeCount:number,isRunning:boolean,isFinish:boolean}[]
    

    
    constructor()
    {
        super();

        this._loginName='test_loginname';

        this._lobbyData={loginName:this._loginName,playerRoomBase:[]};

        this._roomTableInfo=null;

        this._firstIntoRoom=false;

        
        this._refundBullets=[];

        this._roomStatus=null;

        this._props={};

        this._propRunData={};

        this._otherPlayerUseProp=[];

        this._testData=-1;


        
        //this._propsInfo={};

    
        //this._gameBase='';


        

    }

    //--override--寫model初始預設資料
    protected initModelData():void
    {
        ('initModelData');
        /**
         * setter的改變是要整個值取代,而不是新增或是改變某個屬性
         * ex:
         * this._fishTypeKeyMap[0]={}
         * 這樣是不會觸發setter 而推送事件
         * 要整個取代才會
         * ex
         * this._fishTypeKeyMap={};
         */
         let fishtypeMap={};
        //-黃色小吻仔魚
        fishtypeMap[0]={meshId:'fish_01',level:false,fishMeshState:fishMeshState.fish2D,rotationState:FishRotationState.normalRotation,lv:1,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:1,speed:1};
        //--海星
        fishtypeMap[1]={meshId:'fish_02',level:false,fishMeshState:fishMeshState.fish2D,rotationState:FishRotationState.noRotation,lv:1,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:1,speed:1};
        //--粉紅雜魚
        fishtypeMap[2]={meshId:'fish_03',level:false,fishMeshState:fishMeshState.fish2D,rotationState:FishRotationState.normalRotation,lv:1,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:1,speed:1};
        //---大眼雜魚
        fishtypeMap[3]={meshId:'fish_04',level:false,fishMeshState:fishMeshState.fish2D,rotationState:FishRotationState.normalRotation,lv:1,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:1,speed:1};
        //--黃色雜魚
        fishtypeMap[4]={meshId:'fish_05',level:false,fishMeshState:fishMeshState.fish2D,rotationState:FishRotationState.normalRotation,lv:1,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:1,speed:1};
        //--黃色小丑魚
        fishtypeMap[5]={meshId:'fish_06',level:false,fishMeshState:fishMeshState.fish2D,rotationState:FishRotationState.normalRotation,lv:1,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:1,speed:1};
        //--紫色水母
        fishtypeMap[6]={meshId:'fish_07',level:false,fishMeshState:fishMeshState.fish2D,rotationState:FishRotationState.noRotation,lv:1,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:1,speed:1};
        //--白色吻仔魚
        fishtypeMap[7]={meshId:'fish_08',level:false,fishMeshState:fishMeshState.fish2D,rotationState:FishRotationState.normalRotation,lv:1,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:1,speed:1};
        //--海龜
        fishtypeMap[8]={meshId:'fish_09',level:false,fishMeshState:fishMeshState.fish2D,rotationState:FishRotationState.normalRotation,lv:1,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:1,speed:1};
        //--魷魚
        fishtypeMap[9]={meshId:'fish_10',level:false,fishMeshState:fishMeshState.fish2D,rotationState:FishRotationState.normalRotation,lv:1,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:1,speed:1};
        //--蝴蝶魚
        fishtypeMap[10]={meshId:'fish_11',level:false,fishMeshState:fishMeshState.fish2D,rotationState:FishRotationState.normalRotation,lv:1,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:1,speed:1};
        //--綠色比目魚
        fishtypeMap[11]={meshId:'fish_12',level:false,fishMeshState:fishMeshState.fish2D,rotationState:FishRotationState.normalRotation,lv:1,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:1,speed:1};
        //--尾巴很大的粉紅色和藍色的魚
        fishtypeMap[12]={meshId:'fish_13',level:false,fishMeshState:fishMeshState.fish2D,rotationState:FishRotationState.normalRotation,lv:1,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:1,speed:1};
        //--黃色捻魚
        fishtypeMap[13]={meshId:'fish_14',level:false,fishMeshState:fishMeshState.fish2D,rotationState:FishRotationState.normalRotation,lv:1,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:1,speed:1};
        //--閃電魚
        fishtypeMap[22]={meshId:'fish_15',level:false,fishMeshState:fishMeshState.fish2D,rotationState:FishRotationState.normalRotation,lv:90,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:1,speed:1};
        
        //======3D魚種===============================
       
        //--炸彈
        fishtypeMap[23]={meshId:'fish_16',level:false,fishMeshState:fishMeshState.fish3D,rotationState:FishRotationState.noRotation,lv:91,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:1,speed:1,zindex:0};
        
        //--彩色鯉魚
        fishtypeMap[14]={meshId:'fish_17',level:false,fishMeshState:fishMeshState.fish3D,rotationState:FishRotationState.normalRotation,lv:92,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:1,speed:1,zindex:-200};
        //--彩色劍魚
        fishtypeMap[15]={meshId:'fish_18',level:false,fishMeshState:fishMeshState.fish3D,rotationState:FishRotationState.normalRotation,lv:93,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:1,speed:1,zindex:-400};
        //--魟魚
        fishtypeMap[16]={meshId:'fish_19',level:false,fishMeshState:fishMeshState.fish3D,rotationState:FishRotationState.normalRotation,lv:94,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:1,speed:1,zindex:-600};
        //-金海龜
        fishtypeMap[17]={meshId:'fish_20',level:false,fishMeshState:fishMeshState.fish3D,rotationState:FishRotationState.normalRotation,lv:95,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:1,speed:1,zindex:-800};
        //--鱷魚
        fishtypeMap[18]={meshId:'fish_21',level:false,fishMeshState:fishMeshState.fish3D,rotationState:FishRotationState.normalRotation,lv:96,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:1,speed:1,zindex:-1000};
        //--鯨魚
        fishtypeMap[19]={meshId:'fish_22',level:false,fishMeshState:fishMeshState.fish3D,rotationState:FishRotationState.normalRotation,lv:97,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:1,speed:1,zindex:-1500};
        //--金色鬼頭鯊
        fishtypeMap[20]={meshId:'fish_23',level:false,fishMeshState:fishMeshState.fish3D,rotationState:FishRotationState.normalRotation,lv:98,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:10,speed:1,zindex:-2000};
        //--boss龍
        fishtypeMap[21]={meshId:'fish_24',level:false,fishMeshState:fishMeshState.fish3D,rotationState:FishRotationState.normalRotation,lv:99,hitms:0.3,fps:0.5,collisionW:0,collisionH:0,meshScale:1,speed:1,zindex:-500};
 
        this._fishTypeKeyMap=fishtypeMap;
         
        //--id=fishtype
        this._aryOddsInfo=[
            //-黃色小吻仔魚
            {id:0,odds:"2",name:'fish_01',sortNum:0,atkPriority:0,isCanHit:true},
            //--海星
            {id:1,odds:"3",name:'fish_02',sortNum:0,atkPriority:0,isCanHit:true},
            //--粉紅雜魚
            {id:2,odds:"4",name:'fish_03',sortNum:0,atkPriority:0,isCanHit:true},
            //---大眼雜魚
            {id:3,odds:"5",name:'fish_04',sortNum:0,atkPriority:0,isCanHit:true},
            //--黃色雜魚
            {id:4,odds:"6",name:'fish_05',sortNum:0,atkPriority:0,isCanHit:true},
            //--黃色小丑魚
            {id:5,odds:"7",name:'fish_06',sortNum:0,atkPriority:0,isCanHit:true},
            //--紫色水母
            {id:6,odds:"8",name:'fish_07',sortNum:0,atkPriority:0,isCanHit:true},
            //--白色吻仔魚
            {id:7,odds:"9",name:'fish_08',sortNum:0,atkPriority:0,isCanHit:true},
            //--海龜
            {id:8,odds:"15",name:'fish_09',sortNum:0,atkPriority:0,isCanHit:true},
            //--魷魚
            {id:9,odds:"20",name:'fish_10',sortNum:0,atkPriority:0,isCanHit:true},
            //--蝴蝶魚
            {id:10,odds:"30",name:'fish_11',sortNum:0,atkPriority:0,isCanHit:true},
            //--綠色比目魚
            {id:11,odds:"40",name:'fish_12',sortNum:0,atkPriority:0,isCanHit:true},
            //--尾巴很大的粉紅色和藍色的魚
            {id:12,odds:"50",name:'fish_13',sortNum:0,atkPriority:0,isCanHit:true},
            //--黃色捻魚
            {id:13,odds:"60",name:'fish_14',sortNum:0,atkPriority:0,isCanHit:true},
            //--彩色鯉魚
            {id:14,odds:"80",name:'fish_17',sortNum:0,atkPriority:0,isCanHit:true},
            //--彩色劍魚
            {id:15,odds:"90",name:'fish_18',sortNum:0,atkPriority:0,isCanHit:true},
            //--魟魚
            {id:16,odds:"100",name:'fish_19',sortNum:0,atkPriority:0,isCanHit:true},
            //-金海龜
            {id:17,odds:"120",name:'fish_20',sortNum:0,atkPriority:0,isCanHit:true},
            //--鱷魚
            {id:18,odds:"150",name:'fish_21',sortNum:0,atkPriority:0,isCanHit:true},
            //--鯨魚
            {id:19,odds:"180",name:'fish_22',sortNum:0,atkPriority:0,isCanHit:true},
            //--金色鬼頭鯊
            {id:20,odds:"200",name:'fish_23',sortNum:0,atkPriority:0,isCanHit:true},
            //--boss龍
            {id:21,odds:"500",name:'fish_24',sortNum:0,atkPriority:0,isCanHit:true},
            //--閃電魚
            {id:22,odds:"20~50",name:'fish_15',sortNum:0,atkPriority:0,isCanHit:true},
            //--炸彈
            {id:23,odds:"80~100",name:'fish_16',sortNum:0,atkPriority:0,isCanHit:true}   
        ];

        let speedInitData={};

        speedInitData[0]=1.5;
        speedInitData[1]=1.5;
        speedInitData[2]=1.5;
        speedInitData[3]=1.5;
        speedInitData[4]=1.5;
        speedInitData[5]=1.5;
        speedInitData[6]=1.5;
        speedInitData[7]=1.5;
        speedInitData[8]=1.3;
        speedInitData[9]=1.3;
        speedInitData[10]=1.3;
        speedInitData[11]=1.3;
        speedInitData[12]=1.3;
        speedInitData[13]=1.2;
        speedInitData[14]=1.2;
        speedInitData[15]=1.2;
        speedInitData[16]=1;
        speedInitData[17]=1;
        speedInitData[18]=1;
        speedInitData[19]=1;
        speedInitData[20]=1;
        speedInitData[21]=1;
        speedInitData[22]=1.5;
        speedInitData[23]=1.5;

        this._fishTypeSpeedMap=speedInitData;

        this._aryScorePool=[[2],[5],[10],[20],[50]];
        //-{score:number,type:number,pu:number}[][]
        
        /*this._aryScorePool=[
            [{score:2,type:1,pu:0}],
            [{score:5,type:2,pu:0}],
            [{score:10,type:3,pu:0}],
            [{score:20,type:4,pu:0}],
            [{score:50,type:2,pu:0}]
        ];*/

        this._defualtGunValue=5;

        this._aryActionInfo[0]=[
            //---rd7 客端不主動用子彈生存時間做回收處理(所以lifetime=-1),由server 來做 
            {systemId:BulletActionType.BULLET_ACTION_PREFAB,amount:1,sound:'sounds/fire1',system2Dor3D:1,effect2DAssetsID:"prefab/bullet/bullet1",strFishNetId:"fishNet_1",effectFishNetAtlasID:'prefab/textures/fishHunterGui',collisionW:0.5,collisionH:0.5,fishNetW:0,fishNetH:0,lifeTime:-1,speed:2000,fps:30},//-正式要改回來秒數
            {systemId:BulletActionType.BULLET_ACTION_PREFAB,amount:1,sound:'sounds/fire2',system2Dor3D:1,effect2DAssetsID:"prefab/bullet/bullet2",strFishNetId:"fishNet_2",effectFishNetAtlasID:'prefab/textures/fishHunterGui',collisionW:0.5,collisionH:0.5,fishNetW:0,fishNetH:0,lifeTime:-1,speed:2000,fps:30},//-正式要改回來秒數
            {systemId:BulletActionType.BULLET_ACTION_PREFAB,amount:1,sound:'sounds/fire3',system2Dor3D:1,effect2DAssetsID:"prefab/bullet/bullet3",strFishNetId:"fishNet_3",effectFishNetAtlasID:'prefab/textures/fishHunterGui',collisionW:0.5,collisionH:0.5,fishNetW:0,fishNetH:0,lifeTime:-1,speed:2000,fps:30},//-正式要改回來秒數
            {systemId:BulletActionType.BULLET_ACTION_PREFAB,amount:1,sound:'sounds/fire4',system2Dor3D:1,effect2DAssetsID:"prefab/bullet/bullet4",strFishNetId:"fishNet_4",effectFishNetAtlasID:'prefab/textures/fishHunterGui',collisionW:0.5,collisionH:0.5,fishNetW:0,fishNetH:0,lifeTime:-1,speed:2000,fps:30},//-正式要改回來秒數
            {systemId:BulletActionType.BULLET_ACTION_PREFAB,amount:1,sound:'sounds/fire5',system2Dor3D:1,effect2DAssetsID:"prefab/bullet/bullet5",strFishNetId:"fishNet_5",effectFishNetAtlasID:'prefab/textures/fishHunterGui',collisionW:0.5,collisionH:0.5,fishNetW:0,fishNetH:0,lifeTime:-1,speed:2000,fps:30}//-正式要改回來秒數
        ];

        this._aryActionInfo[1]=[];//--成就系統用的

        this._roomTableMax=4;//--4人為上限

        this._uid=456052319;//---for test

        //---預設值(匯率(基注)列表_base)/ 預設匯率(基注)_defaultBase
        this._defaultBase=this._base=this._betBase='99999:99999';

        this._balance=-10074160;

        //---玩家使用的匯率
        let aryRatio:string[] = this._base.split(':');

        this._exchangeRatio = Number(aryRatio[0]) / Number(aryRatio[1]);

        this._credit=-1;

        this._exchangeCredit=0;//--洗分分數

        this._exchangeAmount=0;//---洗分金額

       
        this._props=
        {
            [PropType.PROP_CALL]:{time:5,count:0},
            [PropType.PROP_FREEZE]:{time:10,count:0},
            [PropType.PROP_CRAZY]:{time:10,count:0}
        };

        this._propRunData=
        {
            [PropType.PROP_CALL]:{time:5,timeCount:0,isRunning:false,isFinish:false},
            [PropType.PROP_FREEZE]:{time:10,timeCount:0,isRunning:false,isFinish:false},
            [PropType.PROP_CRAZY]:{time:10,timeCount:0,isRunning:false,isFinish:false} 
        }

        this._useProp={propType:0,index:-1};

        this._useSummonProp={index:-1};

        this._useCrazyProp={index:-1,open:false};

        this._wagersID=0;

        this._errorCode={type:'',code:-1,error:''};

        this._inGameMessage={type:'',code:-1,msg:''}; 

        this._pingInfo='';

        this._bossStatus='';

        this._onCreditExchange=true;

        
    }

    //--20240129--實在不想開出這個方法(用來執行model裡面的方法)
    public executeModelMethod(id: string, value: any): void 
    {
        if(id=='resetFocus')
        {
            this.resetPropColdDown(value);
        }    
    }

    protected serverPingBack=(value:string)=>
    {
        //('serverPingBack@@@__',value);
        this._pingInfo=value;
    }
 

   

    //--server回來的資料
    protected serverResBack=(value:ResultForConnect)=>
    {
       
        log('check_serverResBack_fish1Model',value);


        switch(value.type)
        {
            case ServerResCode.ErrorCode:
                log('Fish1model_ErrorCode',value); 
                //--開黑色的面板
                this._errorCode={type:value.sendObject.type,code:value.sendObject.code,error:value.sendObject.error};  
                
            break;
           
           
            case ServerResCode.InitLocalDebug:
                //---localdebug端啟動程序(寫入大廳的資料)    
                log('Fish1model_resback',value);
                this._lobbyData={loginName:value.sendObject.playerId,playerRoomBase:value.sendObject.playerRoomBase};
                //--weapon setting
                this._mapCannonInfo={
                    
                    1:{score:2,speed:2500,powerup:1.01},

                    2:{score:5,speed:2500,powerup:1.03},
                    
                    3:{score:10,speed:2500,powerup:1.06},
                    
                    4:{score:20,speed:2500,powerup:1.08},
                    
                    5:{score:50,speed:2500,powerup:1.10}
                };

                
           break;

           
           case ServerResCode.EnterRoomLocalDebug:
            
            //---localdebug端啟動程序(寫入大廳的資料)    
            log('Fish1model_resback_EnterRoomLocalDebug',value);

            this._setPlayerRoomforLocalDebug=GUIEvent.SET_PLAYER_ROOM;
            
            //--寫入道具的數量
            let propDataDebug=
            {
                [PropType.PROP_CALL]:{time:5,count:10},
                [PropType.PROP_FREEZE]:{time:10,count:100},
                [PropType.PROP_CRAZY]:{time:10,count:100}
            }

            this._props=propDataDebug;
            
           break;
           
           //--正式連線啟動從這邊開始回資料
           case ServerResCode.LoginInfo:
             
            this._uid=value.sendObject.id;

            this._loginName=value.sendObject.account;

            this._hallID=value.sendObject.hallID;

            //--true=直接給他的錢包一次換完, false=正常換分(目前都只會送false)
            this._noExchange=value.sendObject.isTransferAll;

            log('check_ServerResCode.LoginInfo',value);
           
           break;

           case ServerResCode.EnterLobby:
            
            this._lobbyData=
            {
                loginName:this._loginName,

                playerRoomBase:value.sendObject.base
            };
           
           break;

           case ServerResCode.FishSettings:
            
            log('model_ServerResCode.FishSettings',value);

           let speedData={};

           for(let i in value.sendObject)
           {
                speedData[i]=value.sendObject[i].s;
           }

           this._fishTypeSpeedMap=speedData;

           log('finish fishsetting',speedData);

           
           

           break;

           case ServerResCode.EnterRoom:
            //---這裡只會給玩家使用的倍率,房間的資料會在InitPlayerInfo回來
            log('ServerResCode.EnterRoom',value);

            if(value.sendObject.error)
            {
                //--要做錯誤處理 
                if(value.sendObject.error==1)
                {
                    //--已經進房了
                    //this._errorCode={type:'connectClose',code:-1,error:'MSG.ALREADY_ENTERED'};
                    this._errorCode={type:'connectClose',code:1786601,error:'MSG.ALREADY_ENTERED'};

                }else if(value.sendObject.error==2)
                {
                    //--找不到房型倍率/換分比
                    //this._errorCode={type:'connectClose',code:-1,error:'MSG.NOT_FIND_RATIO'};
                    this._errorCode={type:'connectClose',code:1786601,error:'MSG.NOT_FIND_RATIO'};

                }else if(value.sendObject.error==3)
                {
                   //-找不到幣別 
                   //this._errorCode={type:'connectClose',code:-1,error:'MSG.NOT_FIND_CURRENCY'};
                   this._errorCode={type:'connectClose',code:1786601,error:'MSG.NOT_FIND_CURRENCY'};
                }


            }else{
                
                this._defaultBase=value.sendObject.r;

                this._base=value.sendObject.r;//--正式打開
                //this._base='5000:1';//--測試用的

                this._betBase=value.sendObject.r;

                //---玩家使用的匯率
                let aryRatio:string[] = this._base.split(':');
    
                this._exchangeRatio = Number(aryRatio[0]) / Number(aryRatio[1]);

                this._enterRoom=true;

                log('check__exchangeRatio',aryRatio,this._exchangeRatio);
            }
           
          
           break;

           //--房間變更狀態(一般0/冰凍1/金龍來襲2/金龍死亡3)
           //--狀態改變會先送,再送出魚(金龍)
           case ServerResCode.UpdateRoomStatus:
            log('ServerResCode.UpdateRoomStatus_model',value.sendObject,Date.now());
              
           //---魚潮或是boss(JP魚)啟動時,限制道具要鎖住,cd計時與道具效果要關閉
              
              if(value.sendObject.status==0)
              {
                //this._freeze=false;
                this._bossStatus='';

              }else if(value.sendObject.status==1)
              {
                //--冰凍狀態
                //this._freeze=true;


              }else if(value.sendObject.status==2)
              {
                //--金龍來襲(召喚冰凍上鎖,停止計時)
                //this._exitAllFish=true; 
                //--20231121---在此狀態下所有道具CD結束,並且上鎖
                this.stopPropColdDown(PropType.PROP_CALL);
                
                this.stopPropColdDown(PropType.PROP_FREEZE);

                this._bossStatus='in';
                  

              }else if(value.sendObject.status==3)
              {
                    //--金龍死亡
                    this._bossStatus='';
              }

              this._roomStatus={
                
                status:value.sendObject.status,
                
                startTime:value.sendObject.startTime,
                
                endTime:value.sendObject.endTime
            }
                
           
           break;

           case ServerResCode.WeaponSettings:

             
              
              let cannondata:{[key:number]:{score:number,speed:number,powerup:number}}={};
              //-_mapCannonInfo
              //-{[key:number]:{score:number,speed:number,powerup:number}};
              for(let i in value.sendObject)
              {
                cannondata[i]={
                    
                    score:value.sendObject[i].s,

                    speed:value.sendObject[i].sp,
                    
                    powerup:value.sendObject[i].pur
                };
              }

              this._mapCannonInfo=cannondata;


              log('Fish1model_resback_WeaponSettings',value.sendObject,this._mapCannonInfo);  
              

           break;

           case ServerResCode.InitPlayerInfo:
            
            log('Fish1model_resback_InitPlayerInfo',value.sendObject);
            //--有玩家進房間就會送
            //--他是只會送該房間有幾個人就送幾個
            
            this.setRoom(value.sendObject);//--準備寫異動座位的資料

            this._roomTableInfo={tables:this._aryRoomInfo,firstIntoRoom:this._firstIntoRoom};
           
            //--它是一個物件,key屬性就是作位編號{0:{XXX}1:{XXX}}---有多少玩家就送多少近來
            /**
             * 新增put屬性=put:{3: 1705047140742}
             * key:道具代碼,value:timestamp()---就是 Date.getTime()
             * 用來記錄其它玩家使用道具的情況
             * 如果沒有使用的話他會是一個put:{}空的object
             * 
             */
            this.firstInGamePropforOtherPlayer(value.sendObject);
            

            if(!this._firstIntoRoom)
            {
                this._firstIntoRoom=true;//--第一次進遊戲

                this._cleanAllRoom=false;
                
                if(!this._debug)
                {
                    this.sendServer( ServerSendCode.GetBalance,null);
                }
              
            }

           break;

           case ServerResCode.LeaveRoom:

            log('Fish1model_resback_LeaveRoom',value.sendObject,this._playerTableId);

            if(value.sendObject.index==this._playerTableId)
            {
                //--玩家返回大廳
                this.cleanRoom();

                this._cleanAllRoom=true;

                this._firstIntoRoom=false;

            }else{

                //--清除座位,清除鎖定/自動打擊資料--後面兩個要在處理
                this.cleanRoomTable(value.sendObject.index);

                this._roomTableInfo={tables:this._aryRoomInfo,firstIntoRoom:this._firstIntoRoom};
            }

           
           

           break;

           

           case ServerResCode.Balance:
               //--玩家餘額回來
               log('check_ServerResCode.Balance',value.sendObject);
               
               this._balance=value.sendObject;

               this._getMatchineDetial=true;

               /*
               if(!this._firstgetAutoCreditExchange)
               {
                    this._firstgetAutoCreditExchange=true;
               }*/

               

           break;

           case ServerResCode.RefundBullet:
               //--退子彈(場上有子彈才會退)
               log('check_ServerResCode.RefundBullet',value.sendObject);
               /**
                * //-s座位號(0-3) p 玩家砲台面板的餘額 isd回收子彈的id列表
                returnObj=
                {
                    siteIndex:data.s,

                    credit: data.p,

                    bids:data.ids
                }
                */
                //--要再補<回收自動打擊/鎖定的子彈>
                this._refundBullets =value.sendObject.bids;

                this.setRoomCredit(value.sendObject.siteIndex,value.sendObject.credit);
                //--異動分數
                this._exchangePlayerCredit={credits:this._aryRoomInfo};
              
           break;


           
           case ServerResCode.Exchange:
              
            
            //--要開的分數是0分的話server不會回..20240221    
            
            //---開分
            /**
             * //--開分錯誤讓model接續處理
                //- { b: 999800, p: 1000, error: null }
                returnObj=
                {
                    balance:data.b,

                    credit:data.p,//--玩家遊戲面板的餘額

                    error:data.error
                }
             */

             //--for test 20240129   
             /*
             this._errorCode={type:'exchangeError',code:-1,error:'MSG.BALANCE_IS_NOT_ENOUGH'};
             return;
             */

            
             if(value.sendObject.error)
             {
                //--錯誤處理-待補-20231005
                //this._errorCode={type:'exchangeError',code:-1,error:'MSG.BALANCE_IS_NOT_ENOUGH'};
                /**
                 * 20240312,再多開的情況下,把分數換到上限後(隨即換分),另一個也開到上限再去開分
                 * 會送出01錯誤碼.但舊版的_onCreditExchange是要等到正確完成換分動作後才會異動資料
                 * 導致他在有自動換分的情況下是不能幫玩家自動換分
                 */
                
                if(this._noExchange)
                {

                    //this._errorCode={type:'exchangeError',code:-1,error:'MSG.BALANCE_IS_NOT_ENOUGH'};
                    this._errorCode={type:'exchangeError',code:1786601,error:'MSG.BALANCE_IS_NOT_ENOUGH'};

                }else{
                    
                    //this._inGameMessage={type:'exchangeError',code:-1,msg:'MSG.BALANCE_IS_NOT_ENOUGH'}; 
                    this._inGameMessage={type:'exchangeError',code:1786601,msg:'MSG.BALANCE_IS_NOT_ENOUGH'}; 
                }


             }else{

                this._credit =value.sendObject.credit;

                //this._balance = value.sendObject.balance; 
                this._balance = value.sendObject.balance; 
                
                this.setRoomCredit(this._playerTableId,value.sendObject.credit);
                
                this._exchangePlayerCredit={credits:this._aryRoomInfo};

                //this._onCreditExchange=true;

                //--還要做後續處理讓view變動--20231005
                //---第一次換分回來不會送ServerResCode.Point = '9'(更新分數)
                //---所以你要自己更新玩家自己的顯示分數

             }
             log('check_ServerResCode.Exchange',value.sendObject, this._balance ); 
             this._onCreditExchange=true;

           break;


           case ServerResCode.Point:
                
                log('Fish1Modle_serverResBack_Point',value);
                //--玩家開洗分後會回來
                this.setRoomCredit(value.sendObject.index,value.sendObject.credit);

                this._exchangePlayerCredit={credits:this._aryRoomInfo};
                
           break;


           case ServerResCode.ShootBullet:
                //---test-20230926
                log('Fish1Modle_serverResBack_ShootBullet',value);
                //-siteIndex=0-3
                this.setRoomCredit(value.sendObject.siteIndex,value.sendObject.credit);
                //this._addbullets=value.sendObject.data.p;
                this._addbullets=value.sendObject;

                this._exchangePlayerCredit={credits:this._aryRoomInfo};

                //--要去更新玩家餘額,看起來不會從ServerResCode.Point(9)這邊進來

                //--20240109--test
                //this._inGameMessage={type:'',code:-1,msg:'MSG.FE_BOSS_WAVE_ALERT'}; 
                

           break;

           case ServerResCode.NewFish:

                log('Fish1Modle_serverResBack_newFish',value,Date.now());

                this._addFishs=value.sendObject;

           break;

           case ServerResCode.HitFish:

                log('Fish1Modle_serverResBack_hitFish',value);
                //---要把玩家的分數寫回去
                this._hitFishs=value.sendObject;//--先送畫面處理

                this.setRoomCredit(value.sendObject.siteIndex,value.sendObject.credit);
                //--異動分數
                this._exchangePlayerCredit={credits:this._aryRoomInfo};
           
           break;


           case ServerResCode.UpdateProp:

            log('Fish1Modle_serverResBack_UpdateProp',value);
            //--20240126--玩家沒有持有任何道具就是一個空物件
            //-{time:5,count:0} 
            let call_count:number=(value.sendObject[PropType.PROP_CALL])?value.sendObject[PropType.PROP_CALL]:0;
            let freeze_count:number=(value.sendObject[PropType.PROP_FREEZE])?value.sendObject[PropType.PROP_FREEZE]:0;
            let crazy_count:number=(value.sendObject[PropType.PROP_CRAZY])?value.sendObject[PropType.PROP_CRAZY]:0;

            let propData=
            {
                [PropType.PROP_CALL]:{time:this._props[PropType.PROP_CALL].time,count:call_count},
                [PropType.PROP_FREEZE]:{time:this._props[PropType.PROP_FREEZE].time,count:freeze_count},
                [PropType.PROP_CRAZY]:{time:this._props[PropType.PROP_CRAZY].time,count:crazy_count},
            } 

            this._props=propData;

            log('check_fish1Model_Prop',propData,this._props);
           
            //--for test
            //this.usePropByTime(1);

           break;


           case ServerResCode.UseProp:

            log('Fish1Modle_serverResBack_UseProp',value,this._playerTableId);
            //--1.更新數量(server會送到UpdateProp) 2.設定dcd時間.3.啟動canuseProp(這個不確定?) 4.啟動timer  
            if(value.sendObject.error!=null)
            {
                //--原因目前沒說明
                this._inGameMessage={type:'',code:-1,msg:'MSG.CANT_NOT_USE_PROPS'}; 

            }else{

                if(value.sendObject.propType==PropType.PROP_CALL)
                {
                    //--使用召喚道具
                    this._useSummonProp={index:value.sendObject.tableIndex}; 

                    this._addFishs=[value.sendObject.callFish];

                    //--這個砲台效果在叫出魚的瞬間就結束了
                }

                if(value.sendObject.propType==PropType.PROP_CRAZY)
                {
                    this._useCrazyProp={index:value.sendObject.tableIndex,open:true}; 

                    //--這個效果會持續--
                }


                
                if(value.sendObject.tableIndex==this._playerTableId)
                {
                    if(this._props[value.sendObject.propType].time!=value.sendObject.coldDownTime)
                    {
                        let propDataAfterUse=
                        {
                            [PropType.PROP_CALL]:{time:this._props[PropType.PROP_CALL].time,count:this._props[PropType.PROP_CALL].count},
                            [PropType.PROP_FREEZE]:{time:this._props[PropType.PROP_FREEZE].time,count:this._props[PropType.PROP_FREEZE].count},
                            [PropType.PROP_CRAZY]:{time:this._props[PropType.PROP_CRAZY].time,count:this._props[PropType.PROP_CRAZY].count}
                        }
                        
                        //--這邊的秒數都已經除以1000變成秒了
                        propDataAfterUse[value.sendObject.propType].time=value.sendObject.coldDownTime;
        
                        this._props=propDataAfterUse;
                    }

                    //--這邊做canUsePropBefore
                    this._useProp={propType:value.sendObject.propType,index:value.sendObject.tableIndex};

                    //--這邊要做後續處理
                    this.usePropByTime(value.sendObject.propType);
   
                }else if(value.sendObject.propType==PropType.PROP_CRAZY)
                {
                    //--其他玩家啟動狂暴,啟動專屬計時器
                    this.otherUseCrazyPropByTime(value.sendObject.tableIndex);

                }

            }
            
              
           break;

           case ServerResCode.SerialNumber:
            log('Fish1Modle_serverResBack_SerialNumber',value);
            this._wagersID=value.sendObject;


           break;


           case ServerResCode.BossWillComeIn:
            log('Fish1Modle_serverResBack_BossWillComeIn',value);
            //this._wagersID=value.sendObject;

            //this._inGameMessage={type:'',code:-1,msg:'MSG.FE_BOSS_WAVE_ALERT'}; 
            this._inGameMessage={type:'',code:1786601,msg:'MSG.FE_BOSS_WAVE_ALERT'}; 


           break;


        }
    }



    private firstInGamePropforOtherPlayer(roomData:any):void
    {
        //--把整個server的資料丟進來
        log('check_firstInGamePropforOtherPlayer',roomData);
        for(let i in roomData)
        {
            if(roomData[i].put[3])
            {
                
                //--效果開啟
                this._useCrazyProp={index:Number(i),open:true}; 
                
                this.otherUseCrazyPropByTime(Number(i),roomData[i].put['3']); 
            }
            /*
            for(let j in roomData[i].put)
            {
                ('check_put_key',j);
                if(j=='3')
                {
                   //--效果開啟
                    this._useCrazyProp={index:Number(i),open:true}; 
                    
                    this.otherUseCrazyPropByTime(Number(i),roomData[i].put['3']);     
                }
            }*/
           
        }
    }

    //--for test
    private setScheduler():void
    {
        this._scheduler=director.getScheduler();

        //--20231116沒有uuid or id的cocos會幫你建立一個
        Scheduler.enableForTarget(this);

        this._scheduler.schedule(this.updateScheduler,this,1,macro.REPEAT_FOREVER,0,true);

        //this._scheduler.resumeTarget(this);
    }

    //--call server前檢查數量是否足夠或是還在運作當中
    private checkPropStatus(propType:number):boolean
    {
        return (this._props[propType].count>0 && !this._propRunData[propType].isRunning)?true:false;
    }

    //--開始啟動計時器(數量的改變已經會在server res的方法裡面更新)
    private usePropByTime(propType:number):void
    {
        if(!this._scheduler)
        {
            this._scheduler=director.getScheduler();

            //--20231116沒有uuid or id的cocos會幫你建立一個
            Scheduler.enableForTarget(this);
            //--以秒為單位(60FPS)
            this._scheduler.schedule(this.updateScheduler,this,1/60,macro.REPEAT_FOREVER,0,true);     
        }

        this._propRunData[propType].timeCount=0;
        
        this._propRunData[propType].isRunning=true;

        this._propRunData[propType].isFinish=false;

        log('check_schedule_before',this._scheduler.isTargetPaused(this));

        if(this._scheduler.isTargetPaused(this))
        {
            
            this._scheduler.resumeTarget(this);

            log('check_schedule_after',this._scheduler.isTargetPaused(this));

        }

    }

    //private _otherPlayerUseProp:{table:number,time:number,timeCount:number,isRunning:boolean,isFinish:boolean}[]
    /**
     * 
     * @param table 0-3
     * @param druingTime 初始進房後,他桌玩家使用狂暴道具所消耗的時間(ms)
     */
    private otherUseCrazyPropByTime(table:number,druingTime?:number):void
    {
        
        if(!this._scheduler)
        {
            this._scheduler=director.getScheduler();

            //--20231116沒有uuid or id的cocos會幫你建立一個
            Scheduler.enableForTarget(this);
            //--以秒為單位(60FPS)
            this._scheduler.schedule(this.updateScheduler,this,1/60,macro.REPEAT_FOREVER,0,true);     
        }

        let countTime:number=0;

        if(druingTime)
        {
            //--要換算成秒數
            let nowTime=new Date().getTime();

            countTime=(nowTime-druingTime)/1000;

        }

        
        let otherPlayerUseProp:{table:number,time:number,timeCount:number,isRunning:boolean,isFinish:boolean}=
        {
            table:table,
            time:this._props[PropType.PROP_CRAZY].time,
            timeCount:countTime,
            isRunning:true,
            isFinish:false
        }

        this._otherPlayerUseProp.push(otherPlayerUseProp);

        if(this._scheduler.isTargetPaused(this))
        {
            this._scheduler.resumeTarget(this);
        }



    }



    //--停止cd計時
    private stopPropColdDown(propType:number):void
    {
        this._propRunData[propType].isRunning=false;

        this._propRunData[propType].timeCount=0;

        this._propRunData[propType].isFinish=true;

        //--其他玩家的顯示也要停(crazy prop)嗎?
        
    }


    /**
     * 待補功能:20231122
     * 失去焦點之後又再度回復的狀態下,要更新CD
     * t代表失去焦點經過的時間(ms)
     * 
     * Scheduler他是基於RAF的更新機制更新,在失去焦點隨即停止
     * 這邊是以1/60 'Sec'為單位去更新的
     */
    private resetPropColdDown(time:number):void
    {
        log('resetPropColdDown',time);

        let f:boolean=false;

        for(let i in this._propRunData)
        {
            if(this._propRunData[Number(i)].isRunning)
            {
                f=true;
                break;
            }
        }

        if(this._otherPlayerUseProp.length>0 || f)
        {
            this.updateScheduler(time);
        }
       
    }
   



    //--其他玩家啟動狂暴道具
    private otherPlayerUseCrazyPropTimer(dt:number):boolean
    {
        let r:boolean=false;
        
        //--啟動相關的計時器
        if(this._otherPlayerUseProp.length>0)
        {
            for(let i:number=0;i<this._otherPlayerUseProp.length;i++)
            {
                if(this._otherPlayerUseProp[i].isRunning)
                {
                    r=true;
                    
                    this._otherPlayerUseProp[i].timeCount+=dt;

                    if(this._otherPlayerUseProp[i].timeCount>=this._otherPlayerUseProp[i].time)
                    {
                        //---刪除+通知
                        this._useCrazyProp={index:this._otherPlayerUseProp[i].table,open:false}; 

                        this._otherPlayerUseProp.splice(i,1);
                        
                        i=i-1;
                    }

                }

               
            }

            if(this._otherPlayerUseProp.length==0)
            {
                r=false;
            }

        }

        return r;

    }

    private playerUsePropTimer(dt:number):boolean
    {
        //('check_updateScheduler',dt);
        //--private _propRunData:{[key:number]:{time:number,timeCount:number,isRunning:boolean}}
        let r:boolean=false;
        
        let stopCount:number=0;

        let total:number=0;

        let propRunning={};

        for(let i in this._propRunData)
        {
            total++;

            propRunning[i]={time:this._propRunData[i].time,timeCount:this._propRunData[i].timeCount,isRunning:this._propRunData[i].isRunning};

            if(this._propRunData[i].isRunning)
            {
                propRunning[i].timeCount+=dt;

                if(propRunning[i].timeCount>=propRunning[i].time)
                {
                    propRunning[i].isRunning=false;
                    
                    propRunning[i].isFinish=true;

                    stopCount++;

                    if(Number(i)==PropType.PROP_CRAZY)
                    {
                        this._useCrazyProp={index:this._playerTableId,open:false}; 
                    }
                }


            }else{
                
                propRunning[i].timeCount=0;

                stopCount++;
            } 
        }

        if(stopCount==total)
        {
            //--stop update Scheduler
            log('prop finish');
            //this._scheduler.pauseTarget(this);
            //--道具使用全部結束
            this._useProp={propType:0,index:-1};

            r=false;

        }else{

            r=true;
        }

        this._propRunData=propRunning;

        return r;
    }


    private updateScheduler=(dt:number)=>
    {
        let playerSelf=this.playerUsePropTimer(dt);

        let otherPlayer=this.otherPlayerUseCrazyPropTimer(dt);

        if(!playerSelf && !otherPlayer)
        {
            this._scheduler.pauseTarget(this);

            ('SchedulerTimer_is_stop');


        }

    }


 

}