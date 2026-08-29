/**
 * Created by EricHuang on 2023/9/20.
 */
import {GameMainAbstractView,gameMainAbstractView} from '../game/GameMainAbstractView'
import {FishCoordinatesFormMode} from '../logic/coordinates/FishCoordinatesFormMode'
import {LoadingProgress} from '../game/loading/LoadingProgress';
import {LoadingManager} from '../game/loading/LoadingManager';
import {LoadingEvent,GUIEvent} from '../game/events/eventBase';
import {LoadingResProgress} from '../logic/loading/LoadingResProgress';
import {FishView} from '../logic/views/fishView/FishView';
import {FishData} from '../logic/views/fishView/FishData';
import {BulletView} from '../logic/views/bulletView/BulletView';
import {GuisSystemView} from '../logic/views/guisSystemView/GuisSystemView';
import {AniEffectView} from '../logic/views/aniEffectView/AniEffectView';
import {LoadingResManager} from '../logic/loading/LoadingResManager';
import {ResizeTool} from '../logic/resize/ResizeTool';
import {FileConfigLoadingOption,LoadingPageInfo} from '../game/loading/LoadingDefinitions';
import {CocosGameSetting} from '../utils/CocosGameSetting';
import {i18n} from '../utils/i18n/LanguageData';
import {Notifycation,NotifycationSubbscriptionSubject} from '../abstract/mvvm/Notifycation';
import {FacadeForGameView} from '../abstract/mvvm/Facade';
import {AbstractViewModel} from '../abstract/mvvm/AbstractViewModel';
import {ServerSendCode,ServerResCode} from '../logic/connect/ConnectBaseDefinitions';
import {GuiNotifycationSubbscriptionSubject} from '../game/guiCore/GuiDefinitionsBase';
import {GameCoordinateMode} from '../game/coordinates/CoordinateDefinitions';
import {GameViewMediatorUser} from '../logic/gameLogic/FishGameLogicDefinitions';
import {FishGameMainLogic} from '../logic/gameLogic/FishGameMainLogic';
import {FishCollisionSystem} from '../logic/collision/FishCollisionSystem';
import {FishCollisionBase} from '../logic/collision/FishCollisionBase';
import {STAcollisionStrategy} from '../logic/collision/fishCollisionStrategy/STAcollisionStrategy';
import {BulletActionType} from '../game/model/ModelDefinitionsBase';
import {BaseCollisionType,CollisionKey} from '../game/collision/CollisionBase';


import {EventTarget, find,Node,director,Director, CameraComponent, Rect,Game,game} from 'cc';
import { CCClass,_decorator,log} from 'cc';
import { BUILD  } from 'cc/env';
import { SoundsManager } from './audio/SoundsManager';


//--裝飾器的執行是由下往上,由左往右(在class被定義的時候運作)
/**
 * 1.裝飾器的執行是由下往上,由左往右執行
 * 2.在class被定義的時候運作
 * 所以使用者在繼承FishGameMain的時候需要呼叫裝飾器@gameMainAbstractView
 * 藉此來去定義相關內容
 * 3.因為裝飾器他一旦經過定義class的動作後,隨即會啟動,在繼承的關係下,
 * 他已經沒辦法再次被定義了
 */
//--這一行要使用者來呼叫,用來定義相關的class
//@gameMainAbstractView('vm名稱',vmclass(未實體化),modelClass(未實體化),connectClass(未實體化),connectstrategy(未實體化))

//--20230921--前面的建構式不能這樣寫,因為這支是掛在cocos creator裡面的node,不是從外面new的
//export class FishGameMain<TFishSystem extends FishView<FishData>> extends GameMainAbstractView{


export class FishGameMain extends GameMainAbstractView
{
    
    //protected _fishSystem:FishView<FishData>;
    protected _fishSystem:FishView;

    protected _bulletSystem:BulletView;

    protected _fishNodeId:string;

    protected _bulletNodeId:string;

    protected _coordinate:FishCoordinatesFormMode;

    protected _aniEffectViewSystem:AniEffectView;

    protected _gameLogic:FishGameMainLogic;

    protected _beforeInit;

    protected _guiSystem:GuisSystemView;

    protected _collisionSystem:FishCollisionSystem;

    //property _mapCollision

    //---這2個loading要整併
    private _loadingProgress:LoadingProgress;

    //private _loadingManager:LoadingManager;

    protected _loadingQuene:FileConfigLoadingOption[];

    protected _loadingPageInfo:LoadingPageInfo;

    protected _useGuiSystem:boolean;

    protected _gameCoordinatesMode:string;

    protected _loadingNode:Node;//--20240116--暫時的

    protected _focusFalseTime:number;//--20240125-失去焦點
    
    protected _focus:boolean;//--20240125-失去焦點

    protected _webWorker:Worker;




    set loadingQuene(value:FileConfigLoadingOption[])
    {
        this._loadingQuene=value;
    }

    set loadingPageInfo(value:LoadingPageInfo)
    {
        this._loadingPageInfo=value;
    }

    set gameCoordinatesMode(value:string)
    {
        this._gameCoordinatesMode=value;
    }


    /**
     * 這隻主要用來掛載在cocos的node上的,是程式進入點用來啟動整個流程
     * 繼承練上的父物件會幫你完成建構vm model modelstrategy物件
     * 前提是在繼承該物件的使用者必須執行裝飾器來定義相關物件
     * 裝飾器>>@gameMainAbstractView
     */
    constructor()
    {
       super();

       this._classId='FishGameMain';

       this._useGuiSystem=false;

       this._gameCoordinatesMode='';

       this._loadingQuene=[];

       log('check_director_status_',this.constructor.prototype);
       
       this._loadingNode=null;

       this._focusFalseTime=0;

       this._focus=false;

       this._webWorker=null;
       /**
        * 啟動順序
        * 1.beforeinit()
        * 2.定義每個layer是甚麼(可省?)
        * 3.掛監聽(laoding)LAYOUT_IS_READY/ASSETS_IS_READY
        * 4.定義下載的資料集
        * 5.啟動下載
        * 6.ASSETS_IS_READY-->
        * 7.初始啟動GUIsystem
        * 8.啟動layout
        * 9.LAYOUT_IS_READY-->
        * 10.啟動後續系統initUserViews
        * 11.連線
        */
    }

    //--這邊要再補啟動前的class
    /**
     * 1.寫入game width/height
     * 2.檢查webgl
     * 3.檢查平台(mobile/pc)
     * 4.定義引擎基本資訊
     * 5.啟動resize
     * 6.啟動螢幕旋轉
     * 7.啟動焦點移入移出偵測
     * 
     */
    protected async beforeinit():Promise<void>
    {
        log('fish1_gameMain_beforeinit');
        //super.beforeinit();
       
        return new Promise<void>(async (resolve,reject)=>
        {
            
            let data:any;

            let gameSetting:CocosGameSetting=new CocosGameSetting(this._gameType,1920,1080);

            //if(!this._localDebug)
            //{
               data=await this.prepareBeforeConnect(this._gameType);
               
            //}else{

                //--這是資料回來的狀態(local需要模擬)
                /**
                 * {
                 *  analytics_path:"/client/resource/fish/system/analytics"
                    cid: 11
                    deposit_url: ""
                    exit_option: "1"
                    exit_url: ""
                    fish_jwt: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbGllbnQiLCJpYXQiOjE2OTY1NzMxMTQsImV4cCI6MTY5NjYwNTUxNCwidG9rZW4iOiI5YzBkYjg3ZGY5NWIxOTVhNWMzMjMyNDY1OTgwZDUzYiIsImp0aSI6ImpkZGoiLCJkb3VibGVDaGVjayI6eyJjb21wYW55X2lkIjoxMSwidXNlcl9pZCI6NDU2MDUyMzE5fX0.2hotsTKpJuDmpZ6NN0MHL8533AlSH9RZ8NdPRo1qql4"
                    game_type: "38003"
                    gs_subdomain: "ws01:3010"
                    information_path: "/client/resource/information"
                    lang: "zh-cn"
                    props_path: "/client/resource/fish/system/props"
                    rule_path: "/client/resource/fish/game-rule"
                    sid: "6a3b74a65d1ec81494e7dba0176ca9bb"
                    task_path: "/client/resource/fish/system/task"
                    wagers_path: "/bet-record/fish/client/wager"
                 * }
                 */
                //--不做連線 
                /*
                data=
                {
                    cid:'',
                    exit_option:1,
                    game_type:this._gameType,
                    gs_subdomain:"ws01:3010",
                    lang:"zh-cn",
                    origin_domain:null,
                    rule_path:"/game-rule/help.php",
                    sid:"fee72639f05b00978064c48ed88a64f9",
                    wagers_path:"/bet-record/fish/client/wager"
                }*/ 



            //}

            log('check_data',data);

            //data.lang='th';
            
            //let gameSetting=new CocosGameSetting('2022222',1920,1080);
            CocosGameSetting.isLocal=window.util.general.isLocalTesting();

            if(CocosGameSetting.isLocal)
            {
                CocosGameSetting.localPathData=window.util.general.getLocalTestDomain('DEV');//--開發站
                //CocosGameSetting.localPathData=window.util.general.getLocalTestDomain('TEST');--測試站
            }

            CocosGameSetting.host=window.location.hostname;
            
            CocosGameSetting.Game_Lang=CocosGameSetting.GetGameLang(data.lang);//---正式

            //log('check_dataLanguage',CocosGameSetting.Game_Lang);
            //CocosGameSetting.Game_Lang='en';
            
            CocosGameSetting.Game_Cid=data.cid;
            //--
            CocosGameSetting.Game_GsSubdomain=data.gs_subdomain;
            
            CocosGameSetting.Game_ExitOption=data.exit_option;
            
            CocosGameSetting.Game_OriginDomain=data.origin_domain;
            
            CocosGameSetting.Game_RulePath=data.rule_path;
            
            CocosGameSetting.Game_Sid=data.sid;
            
            CocosGameSetting.Game_WagersPath=data.wagers_path;

            CocosGameSetting.Game_RulePath=data.rule_path;

            CocosGameSetting.Game_WagersPath=data.wagers_path;

            //log('check_CocosGameSetting',CocosGameSetting);

            //--要再補Game_OriginDomain-20231220-alan要

            await i18n.init(CocosGameSetting.Game_Lang);

            /**
             * 要拿字典檔裡面的東西這樣用>
             * i18n.t(objname.objvalue)
             * ex i18n.t(Uppercase.MUSIC)
             * 
             * 以純字串送進去可以長這樣
             * i18n.t('Uppercase.MUSIC')
             */


            this._coordinate?.initNodeContainer();

            //let cameraNode=find('Main Camera');

            //let cameraComponent=cameraNode.getComponent(CameraComponent);

            //let resizeTool:ResizeTool=new ResizeTool();
            
            ResizeTool.getInstance().cameraComponent=find('Main Camera').getComponent(CameraComponent);
            
            ResizeTool.getInstance().newWidth=1240;

            ResizeTool.getInstance().originalWidth=CocosGameSetting.Game_Width;

            ResizeTool.getInstance().init();
            
            
            resolve();
        }
        
        );
        
    }

    /**
     * 在這邊建立laodingManager
     * 1.建立loading的過程要移過來這邊做(不要給使用者來處理)
     * 2.使用者要setLoadingQuene
     * 3.使用者保留可以start laoding 的能力
     * 4.以上過程均先在initloading完成,使用者自行override
     * ps-
     * 你也可以override掉整個內容,自己另外介入處理loading的過程
     */
    protected initloading():void
    {
        log('fish1_gameMain_initloading');
        //--for test-20230926-要刪掉initUserViews
        //this.initUserViews();
        //--for test-20230926-要刪掉initUserViews
        
        //this._loadingManager=LoadingResManager.getInstance();
        //--createLoading--
        //this._loadingManager && this._loadingManager.on(LoadingEvent.ASSETS_IS_READY,this.assetsisReady);
        this._loadingProgress=LoadingResProgress.getInstance();

        this._loadingProgress && this._loadingProgress.on(LoadingEvent.ASSETS_IS_READY,this.assetsisReady)

        this.setLoadingResourceMap();

    }

    //--寫入laoding資料--override-
    protected setLoadingResourceMap():void
    {
        if(this._loadingPageInfo)
        {
            (<LoadingResProgress>this._loadingProgress).loadingPageInfo=this._loadingPageInfo;
        }
        
        if(this._loadingQuene.length>0)
        {
            (<LoadingResProgress>this._loadingProgress).loadingQuene=this._loadingQuene;
        }
    }

    protected startLoad():void
    {
        this._loadingProgress.startLoading();
    }


    protected initGuiSystem():void
    {
         /**
         * 不要用constructor.name..再用Uglify處理後,因為沒辦法設定--keep-fnames
         * 所以function name會被拿掉..很雷20240328
         */
        
        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.LAYOUT_IS_READY,this.layoutisReady,this._classId);

        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.LOBBY_IS_READY,this.lobbyIsReady,this._classId);
        //this._loadingManager.on(LoadingEvent.LAYOUT_IS_READY,this.layoutisReady);
        //--do something
        //--create guisystem---
        this._guiSystem.settingGuiInit();
        
    }


    protected lobbyIsReady=()=>
    {
        log('lobby is ready_FishGameMain');

         /**
         * 不要用constructor.name..再用Uglify處理後,因為沒辦法設定--keep-fnames
         * 所以function name會被拿掉..很雷20240328
         */

        Notifycation.getInstance().off(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.LOBBY_IS_READY,this.lobbyIsReady,this._classId);

        this._loadingProgress.remove();

        log('check__hallID',<AbstractViewModel>(FacadeForGameView.getInstance().getClassInstance())['_hallID']);

        //@ts-ignore
        let hallid:number=<AbstractViewModel>(FacadeForGameView.getInstance().getClassInstance())['_hallID'];
        // 範例如何紀錄『加載時間』
        const util: Util = window.util;
        util.analytic.analyze({
            event: 'fishing_enter_game',
            game_type: '38003',
            argument: window.timeMeasureBegin ? Math.ceil(Date.now() / 1000 - window.timeMeasureBegin) : '-1',
            company_id:CocosGameSetting.Game_Cid,// Eric 再看一下怎麼取gs給你的company_id 應該login就給惹
            hall_id: hallid,// 同上
            version: window.game_version || undefined,
        });

        

        const shootAnal = util.analytic.ShootTypeAnalytics;
        shootAnal.start(10); // 每10分鐘採樣一次

        
    }


    protected layoutisReady=()=>
    {
        log('layout is ready_FishGameMain');
        
        this._loadingProgress.finish();

         /**
         * 不要用constructor.name..再用Uglify處理後,因為沒辦法設定--keep-fnames
         * 所以function name會被拿掉..很雷20240328
         */

        Notifycation.getInstance().off(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.LAYOUT_IS_READY,this.layoutisReady,this._classId);
        //this._loadingManager.off(LoadingEvent.LAYOUT_IS_READY,this.layoutisReady);
        
        //--這邊只是要顯示100%的進度,所以延遲1秒
        TweenMax.to({},1,
        {
            onComplete:()=>
            {
                this.initUserViews(); 
            }
        });
        
    }

    protected assetsisReady=()=>
    {
        //--寫入讀取時間
        //--開始建立系統
        //log('FishGameMain_ASSETS_IS_READY');
        this._loadingProgress.off(LoadingEvent.ASSETS_IS_READY,this.assetsisReady);

        if(this._useGuiSystem)
        {
           this.initGuiSystem();

        }else{
          
           this.initUserViews();  
        }

        this.createSounds();

        this.createBgList();

    }

    //--create sounds
    protected createSounds():void
    {
       for(let i of this._loadingQuene)
       {
            if(i.audioId)
            {
                SoundsManager.getInstance().addAudioClip(i.audioId,LoadingResManager.getInstance().getAudio(i.audioId));
                
                SoundsManager.getInstance().createSound(i.audioId,i.audioId);
            }
       }
    }

    //--override---
    protected createBgList():void
    {

    }

    //--override---
    protected playSound():void
    {

    }

    
    //--開始建立你的view--afterlayout
    protected initUserViews():void
    {
        //--這邊要動態塞 node.addComponent(fishSystem);
        //this._fishSystem=new (this.constructor.prototype['_fishSystem'])();
        //this._fishSystem=new (this.constructor as typeof FishGameMain)._fishSystemType();

        //this._bulletSystem=new (this.constructor.prototype['_bulletSystem'])();
        //this._bulletSystem=new (this.constructor as typeof FishGameMain)._bulletSystemType();
        
        

        this._fishSystem.init();

        this._fishSystem.coordinateMode=this._gameCoordinatesMode;

        this._bulletSystem.init();

        //this._mouseBehavior?.init();

        this._gameLogic?.init();

        this._guiSystem?.init();

        this._aniEffectViewSystem?.init();

        this._aniEffectViewSystem?.setCommands();

        /*
        if(this._guiSystem)
        {
            this._guiSystem.init();
        }*/

        //--再從gui裡面call changebullet(看要不要直接從bullet裡面做第一次,Gui裡面自己在做default score)

        //---準備拿資料初始fishsystem and bulletsystem-
       


        //--準備要初始系統的資料  
        //this._fishSystem=new this._fishSystem();

        this.setCollisionSystem();

        this.setMediatorUsers();

        this.registerUpdate();

         /**
         * 不要用constructor.name..再用Uglify處理後,因為沒辦法設定--keep-fnames
         * 所以function name會被拿掉..很雷20240328
         */

        Notifycation.getInstance().on(NotifycationSubbscriptionSubject.AbstractViewModel,'_playerTableId',this.finishTakeSeat,this._classId);
        
        Notifycation.getInstance().on(NotifycationSubbscriptionSubject.AbstractViewModel,'_cleanAllRoom',this.cleanAllRoom,this._classId);

        this.initGameSystemReady();

    }

    //--進桌完成
    protected finishTakeSeat=(sub,value)=>
    {
       log('finish_player_takeseat',sub,value);

        /**
         * 不要用constructor.name..再用Uglify處理後,因為沒辦法設定--keep-fnames
         * 所以function name會被拿掉..很雷20240328
         */
       
       Notifycation.getInstance().off(NotifycationSubbscriptionSubject.AbstractViewModel,'_playerTableId',this.finishTakeSeat,this._classId);
       //-step1
       //this.coordinatesChange(this._gameCoordinatesMode,value[0]+1);
       this.coordinatesChange(value[0]+1);

      

       //--啟動碰撞偵測
       //------以下兩個方法待補
       //-step2
       //this._gameBase.coordinateMode=this._gameCoordinatesMode;
      
     

    }

    //--離開遊戲回到大廳
    protected cleanAllRoom=(sub,value)=>
    {
       log('finish_player_cleanAllRoom',sub,value);

       if(value[0])
       {
            this._coordinate.resetCoordinateMode();

            this._guiSystem.resetRoom();
        
            this._aniEffectViewSystem.setPlayerTableIndex(-1);

            this._aniEffectViewSystem.resetRoomData();

            this._bulletSystem.cleanTable();

            this._fishSystem.cleanTable();

            this._gameLogic.cleanTable();
            
            if(!Notifycation.getInstance().hasCallback(NotifycationSubbscriptionSubject.AbstractViewModel,'_playerTableId',this.finishTakeSeat))
            {
                /**
                 * 不要用constructor.name..再用Uglify處理後,因為沒辦法設定--keep-fnames
                 * 所以function name會被拿掉..很雷20240328
                 */
                Notifycation.getInstance().on(NotifycationSubbscriptionSubject.AbstractViewModel,'_playerTableId',this.finishTakeSeat,this._classId);
            }

            this._guiSystem.reBuildRoom();
       }
       
       
    }

    //protected coordinatesChange(strMode:string,tableID:number):void
    protected coordinatesChange(tableID:number):void
    {
        log("coordinatesChange_render_mode>>>",this._gameCoordinatesMode,tableID);
        
        //this._fishSystem.coordinateMode=strMode;
       
        if(this._gameCoordinatesMode==GameCoordinateMode.GameViewMode_Four_in_one)
        {

            //rd7部門的版本1920*1080,所以不需要縮放了魚場(showGlobalState)
            //this._coordinate?.showGlobalState();//---顯示4合一的座位(縮小魚場)
            this._coordinate?.setContainerCoordinateMode(tableID);
            this._aniEffectViewSystem.setPlayerTableIndex(tableID-1);
            this._guiSystem.afterCoordinatesChange(tableID);//--調整砲塔位置

          
            
            //---旋轉座位後的砲塔座標－－因為中心點有被改變
            //---這邊的已經依照玩家的所在位置將座標換好了
            
        }else if(this._gameCoordinatesMode==GameCoordinateMode.GameViewMode_Four_in_one_noRotation)
        {
            //---無旋轉的模式
            //rd7部門的版本1920*1080,所以不需要縮放了魚場(showGlobalState)
            //this._coordinate?.showGlobalState();//---顯示4合一的座位(縮小魚場)
            this._coordinate?.setContainerCoordinateModeNoRotation(tableID);
            this._aniEffectViewSystem.setPlayerTableIndex(tableID-1);
            
        }
        
        this._guiSystem.afterRotationPos();//--取得調整過後的座標

        this._aniEffectViewSystem.setPositionsInfo(this._guiSystem.getPositionsforGui());

        this._aniEffectViewSystem.setDataAfterSetRoom();


        //this._aniEffectViewSystem.setCommands();

        //@ts-ignore
        //let gameVersion=window.game_version;
        //this._guiSystem.setGameLauncherVersionNumber(gameVersion);

        //this._gameLogic.setPlayerIndex();

        this._gameLogic.setAfterInitPlayerSeatData(tableID);
        
        /**
         * 因為gui和其他的view系統會先建立後,監聽隨之掛載(_playerTableId)
         * 所以fishview就會先收到事件,
         * 在玩家是冰凍狀態進入時,魚群會先更新,之後輪到座標系統收到事件才會旋轉座標.
         * 因此倒置魚的位置始終對不起來
         * 20240315-
         */
        this._fishSystem.setPlayerIdAfterCoordinateMode(tableID);

    }

    protected initGameSystemReady():void
    {
        this.playSound(); 

        this._loadingProgress.showLoadingTxt('connect');

        //@ts-ignore
        let gameVersion=window.game_version;

        this._guiSystem.setGameLauncherVersionNumber(gameVersion);

        
        /**
         * 詳見system-info.ts
         * 根據每個瀏覽器送出的焦點事件字串不同
         */
        /*
        game.on(Game.EVENT_HIDE,this.handleVisibilityChangeHide);

        game.on(Game.EVENT_SHOW,this.handleVisibilityChangeShow);
        */

        let hidden:string, visibilityChange:string;
        if (typeof document.hidden !== "undefined")
        {
            // Opera 12.10 and Firefox 18 and later support
            hidden = "hidden";
            visibilityChange = "visibilitychange";
        } else if (typeof document["mozHidden"] !== "undefined")
        {
            hidden = "mozHidden";
            visibilityChange = "mozvisibilitychange";
        } else if (typeof document['msHidden'] !== "undefined")
        {
            hidden = "msHidden";
            visibilityChange = "msvisibilitychange";
        } else if (typeof document["webkitHidden"] !== "undefined")
        {
            hidden = "webkitHidden";
            visibilityChange = "webkitvisibilitychange";
        }
        
        document.addEventListener(visibilityChange, ()=>{this.handleVisibilityChange(document[hidden])}, false);

        if(this._localDebug)
        {
           this.localDebugGameInit();
        
        }else{
           
           this.connect();
        }
    }

    //--local 的啟動程序(就是寫大廳的資料去啟動大廳啦)
    protected localDebugGameInit():void
    {
        <AbstractViewModel>(FacadeForGameView.getInstance().getClassInstance()).sendServer(
            ServerSendCode.InitLocalDebug,
            {
                playerId:'hello_localTest',
                playerRoomBase:[]
            },
            ServerResCode.InitLocalDebug
        )
    }

    protected handleVisibilityChange(isHidden):void
    {
        if(isHidden)
        {
            //--mobile斷線
            this.handleVisibilityChangeHide();


        }else{

           //--回復焦點
           this.handleVisibilityChangeShow(); 

        }
    }

    //--瀏覽器失去焦點和回復焦點
    protected handleVisibilityChangeHide=()=>
    {
        log('handleVisibilityChangeHide');

        this._focus=true;

        this._focusFalseTime=new Date().getTime();

        if(!this._webWorker)
        {
            //--一旦停止就沒有辦法再啟動了..thread就會被終止
            //--20240423 compiler 發布後他會在js後面加上後綴碼..what the fuck
            /*
            let workPath=(BUILD)?'src/assets/Libs/worker/worker.js':'plugins/assets/Libs/worker/worker.js';
            
            this._webWorker=new Worker(workPath);
            */  
        

            let jsCode = `var timerId=null,elapsedTime=0;function runTimer(){var e=(new Date).getTime(),i=e-elapsedTime;elapsedTime=e,self.postMessage(i),timerId=setTimeout(runTimer,16)}self.onmessage=function(e){"start"===e.data&&(elapsedTime=(new Date).getTime(),runTimer())},self.onclose=function(){null!==timerId&&clearTimeout(timerId)};`;

            let blob = new Blob([jsCode], { type: "application/javascript" });

            this._webWorker = new Worker(URL.createObjectURL(blob));


            this._webWorker.onmessage=(e)=>
            {
                
                this.update(e.data/1000);
            }
        }

        this.loseFocusToCloseTimeStemp();

       
        this._webWorker.postMessage('start');

    }

    //--瀏覽器失去焦點和回復焦點
    protected handleVisibilityChangeShow=()=>
    {
        this._focus=false;

        let nowTimestamp:number=new Date().getTime();

        let missingTime:number=nowTimestamp-this._focusFalseTime;

        log('handleVisibilityChangeShow__missingTime',missingTime);

        if(this._webWorker)
        {
            this._webWorker.terminate();

            this._webWorker=null;
        }

        this.reFocusToOpenTimeStemp(missingTime);
        
    }

    protected loseFocusToCloseTimeStemp():void
    {
        //--暫停autoshoot
        //--暫停自動使用道具this._autoUsePropCount=0;
        this._gameLogic?.loseFocusToCloseTimeStemp();
        
    }

    protected reFocusToOpenTimeStemp(dt:number):void
    {
        //--重啟autoshoot
        //--重啟自動使用道具?
        this._gameLogic?.reFocusToOpenTimeStemp();

       
        /**
         * -洗掉場上所有的子彈--
         * 20240301不主動回收子彈(server沒有lifetime)
         */
        //this._bulletSystem?.cleanTable();

        //this._fishSystem?.reSetFishBronTime();

        //--把時間送進去
        (FacadeForGameView.getInstance().getClassInstance()).executeModelMethod('resetFocus',dt/1000);

    }


    

    protected setMediatorUsers():void
    {
        this.setViewUser(GameViewMediatorUser.FishView,this._fishSystem);
        
        this.setViewUser(GameViewMediatorUser.BulletView,this._bulletSystem);

        this.setViewUser(GameViewMediatorUser.CollisionSystemView,this._collisionSystem);
        
        this.setViewUser(GameViewMediatorUser.AniEffectSystemView,this._aniEffectViewSystem);

        this.setViewUser(GameViewMediatorUser.GameLogicSystem,this._gameLogic);
        
        if(this._useGuiSystem)
        {
            this.setViewUser(GameViewMediatorUser.GuisSystemView,this._guiSystem);
        }

        //--20240416可能要刪掉,因為裡面在setViewUser裡面就會做setMediator
        this._bulletSystem.setMediator(this);
        //-logic 要 setMediator
        this._gameLogic.setMediator(this);

        this._collisionSystem.setMediator(this);

        this._aniEffectViewSystem.setMediator(this);
        //--依此類推
        
    }

    protected setCollisionSystem():void
    {
        /*
        let gameCollisionSystemNode:Node=new Node('gameCollisionSystemNode');

        this._collisionSystem=gameCollisionSystemNode.addComponent(FishCollisionSystem);
        
        director.addPersistRootNode(gameCollisionSystemNode);//--加到node後才會觸發onload

        log('init_collisionSystem',this._collisionSystem);

        this._collisionSystem.setCollisions('satCollision',FishCollisionBase);

        this._collisionSystem.setStrategys('satCollision',STAcollisionStrategy);

        this._collisionSystem.setMapUseCollision('satCollision',BulletActionType.BULLET_ACTION_PREFAB);

        this._collisionSystem.setMapUseCollision('satCollision',BulletActionType.BULLET_ACTION_DYNAMIC);

        this.setCollisionBannedFishType();
        */
       //-InitCollision
        this._collisionSystem.addCollisions({
                
            id:BaseCollisionType.SAT_Collision,
            collisionBaseConstructor:FishCollisionBase,
            strategyConstructor:STAcollisionStrategy,
            strategyConstructorId:'STAcollisionStrategy',
            strategyArgs:null,
            collisionBaseArgs:null
        });

        /**
         * 20231029-CollisionKey.BULLET_ACTION_PREFAB=BulletActionType.BULLET_ACTION_PREFAB
         *  與子彈系統的定義相同
         */

        this._collisionSystem.setMapUseCollision(BaseCollisionType.SAT_Collision,CollisionKey.BULLET_ACTION_PREFAB);

        this._collisionSystem.setMapUseCollision(BaseCollisionType.SAT_Collision,CollisionKey.BULLET_ACTION_DYNAMIC);

        this._collisionSystem.setMapUseCollision(BaseCollisionType.PICKUP_Collision,CollisionKey.SELECTION);

        this.setCollisionBannedFishType();


    }

    //--設定禁止打擊的魚隻type
    protected setCollisionBannedFishType():void
    {

    }

    protected registerUpdate():void
    {
        //--更新啟動
        this._bulletSystem.canUpdate=true;

        this._fishSystem.canUpdate=true;

        this._collisionSystem.canUpdate=true;

        log('registerUpdate');
        director.on(Director.EVENT_AFTER_DRAW,this.afterDraw);
    }

    protected afterDraw= ()=>
    {
        if(this._collisionSystem?.canUpdate)
        {
           //this._collisionSystem.checkCollision();
           this.checkCollisionFrameByFrame();
        }
    }

    protected checkCollisionFrameByFrame():any
    {
       
    }


    //protected update
    /*
    protected lateUpdate():void
    {
        if(this._collisionSystem?.canUpdate)
        {
           //this._collisionSystem.checkCollision();
           this.checkCollisionFrameByFrame();
        } 
    }*/

    /**
     * 
     * @param deltaTime 秒
     */
    protected update(deltaTime: number):void
    {
        //-deltaTime=秒
        //if(this._fishSystem?.canUpdate)
        //log('check_update_deltaTime',deltaTime);
        if(this._fishSystem)
        {
           this._fishSystem.updateFish(deltaTime);
        }

        if(this._gameLogic?.canUpdate)
        {
            this._gameLogic.updateLockBullets();
        }

        if(this._bulletSystem?.canUpdate)
        {
           let updateBulletData:{dead:number[],drillinfo?:any}=this._bulletSystem.updateAction(deltaTime); 
           
           if(updateBulletData.dead.length>0)
           {
                //--生命週期結束
                this._gameLogic.afterUpdateforDeate(updateBulletData.dead);
           }

        }

     
    }




    


    

   

    


}

/*
export function fishGameMain<
    TFish extends new () => FishView<FishData>,
    TBullet extends new () => BulletView
>(fishSysClass: TFish, bulletSysClass: TBullet) {
    return function <T extends { new (...args: any[]): {} }>(target: T) {
        return class extends target {
            protected _fishSystem: InstanceType<TFish>;
            protected _bulletSystem: InstanceType<TBullet>;

            constructor(...args: any[]) {
                super(...args);
            }
        };
    };
}*/

/*
export type GameParameters<T extends new () => FishView<FishData>, U extends new () => BulletView> = {
    tf: T,
    tb: U,
    fNodeId?:string,//--給路徑
    bNodeId?:string //--給路徑 
};
*/


export function fishGameMain<Tf extends new ()=> FishView,Tb extends new ()=>BulletView>(fishSysClass:Tf,bulletSysClass:Tb,fNodeId:string,bNodeId:string){
//export function fishGameMain<T extends new () => FishView<FishData>, U extends new () => BulletView>(params: GameParameters<T, U>) {

    return function (target: any) 
    {
        target.prototype._fishSystem = fishSysClass;

        target.prototype._bulletSystem =bulletSysClass;
        
        if(fNodeId!='')
        {
            //--這邊的_fnid是動態給的
            target.prototype._fnid=fNodeId;
        }

        if(bNodeId!='')
        {
            //--這邊的_bnid是動態給的
            target.prototype._bnid=bNodeId;
        }


    };
}
/**
 * 解決-This expression is not constructable.
  Type 'FishView<FishData>' has no construct signatures.
 * 
 * export interface FishSystemConstructor<T extends FishView<FishData>> {
    new (): T;
}

export class FishGameMain<TFishSystem extends FishView<FishData>> extends GameMainAbstractView {
    protected _fishSystem: TFishSystem;

    constructor(fishSystemClass: FishSystemConstructor<TFishSystem>) {
        super();
        this._fishSystem = new fishSystemClass();
    }

    // 其他方法...
}

export class FishViewOne extends FishView {
    // FishViewOne 的实现
}

class MyFishGameMain extends FishGameMain<FishViewOne> {
    constructor() {
        super(FishViewOne); // 通过构造函数传递 FishViewOne 类型参数
    }
}
 */

/**
 * class MyFishGameMain extends FishGameMain<FishViewOne> {
     
    constructor() {
      super();
     }
   }
 */
/**
 * const fishGameMainInstance = new FishGameMain<MyFishView>();
 */

