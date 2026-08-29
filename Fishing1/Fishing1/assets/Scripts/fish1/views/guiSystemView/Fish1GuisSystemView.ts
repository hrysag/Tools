/**
 * Created by EricHuang on 2023/9/28.
 */
import {Notifycation} from '../../../framework/abstract/mvvm/Notifycation';
import {TableInfo} from '../../../framework/game/model/ModelDefinitionsBase';
import {IfGuiCore} from '../../../framework/game/guiCore/GuiDefinitionsBase';
import {IfGui} from '../../../framework/game/guiCore/GuiDefinitionsBase';
import {GuiOption} from '../../../framework/game/guiCore/GuiDefinitionsBase';
import {GuiBasic} from '../../../framework/game/guiCore/GuiBase';
import {addbullet,PropType} from './../../model/Fish1ModelDefinitions';
import {Fish1LobbyGuiView} from './guis/Fish1LobbyGuiView';
import {FastBtn, Fish1CannonGuiView} from './guis/Fish1CannonGuiView';
import {Fish1MenuGuiView} from './guis/Fish1MenuGuiView';
import {Fish1CreditExchangeGuiView} from './guis/Fish1CreditExchangeGuiView';
import {Fish1PropGuiView} from './guis/Fish1PropGuiView';
import {Fish1AutoShootGuiView} from './guis/Fish1AutoShootGuiView';
import {IframeGuiView} from '../../../framework/logic/views/guisSystemView/basicGuis/IframeGuiView';
import {ToolBarGuiView} from '../../../framework/logic/views/guisSystemView/basicGuis/ToolBarGuiView';
import {SystemMessageGuiView} from '../../../framework/logic/views/guisSystemView/basicGuis/SystemMessageGuiView';
import {InGameMessageGuiView} from '../../../framework/logic/views/guisSystemView/basicGuis/InGameMessageGuiView';

//import {viewfun,viewBind} from '../../../framework/abstract/mvvm/AbstractView';
import {viewBind} from '../../../framework/abstract/mvvm/AbstractView';
import {EventSendObject} from '../../../framework/game/events/eventBase';
import {GUIEvent} from '../../../framework/game/events/eventBase';
import {GuiNotifycationSubbscriptionSubject} from '../../../framework/game/guiCore/GuiDefinitionsBase';
import {ServerSendCode,ServerResCode} from '../../../framework/logic/connect/ConnectBaseDefinitions';
import {GameViewMediatorUserDataKey,GameViewMediatorUser} from '../../../framework/logic/gameLogic/FishGameLogicDefinitions';
import {find,Intersection2D,Vec2,Node,Layers, instantiate} from 'cc';
import {LoadingResManager} from '../../../framework/logic/loading/LoadingResManager';
import { SoundsManager } from '../../../framework/logic/audio/SoundsManager';
import { GuisSystemView } from '../../../framework/logic/views/guisSystemView/GuisSystemView';
import { CocosGameSetting } from '../../../framework/utils/CocosGameSetting';
import { i18n } from '../../../framework/utils/i18n/LanguageData';
import {log} from 'cc';



//@viewfun('Fish1VM')
export class Fish1GuisSystemView extends GuisSystemView
{
    //-要監聽model資料改變的變數(名稱與model相同)
    @viewBind _lobbyData:{loginName:string,playerRoomBase:string[]};

    @viewBind _roomTableInfo:{tables:TableInfo[],firstIntoRoom:boolean,cleanRoom:boolean};

    //@viewBind _cleanAllRoom:boolean;

    @viewBind _addbullets:addbullet;

    @viewBind _getMatchineDetial;

    @viewBind _exchangePlayerCredit;// 可用分數(第一次進房間更新用的)

    @viewBind _base;// 寫匯率

    @viewBind _props;// 道具

    @viewBind _useProp;// 使用道具

    @viewBind _propRunData;// 道具啟動用

    @viewBind _roomStatus;//--改變房間的狀態(道具使用)

    @viewBind _wagersID;//--局號

    @viewBind _errorCode;//--錯誤訊息

    @viewBind _inGameMessage;//--系統通知(server)訊息

    @viewBind _pingInfo;//--ping info

    @viewBind _exchangeRatio;//--_exchangeRatio

    //@viewBind _autoCreditExchange;//--auto exchange 沒有要聽異動的事件可以不用註冊了

    //@viewBind _autoCreditMoney;//--auto exchange



    //public static BGMask:Node;

    private _propGui:Fish1PropGuiView;

    private _firstOpen:boolean;//--檢查是否第一次展開開洗分面板(自動開洗分的)

    private _openExchangePanel:boolean;//--由選單開啟開洗分按鈕

    private _rebuildFlag:boolean;

    /**
     * 20240111
     * 因為server送<房間狀態>的順序在<更新房間玩家資訊>之前
     * 會導致玩家的座位尚未被設定的情況,缺乏_playerIndex的資料
     * 所以用這個來紀錄是否需要變更roomstatu的情況下,_playerIndex還沒準備好.
     * 如果=true(準備好),=false(還沒準備好)
     * 在資料異動後,回過頭來再檢查一次房間狀態再作後續變更
     */
    private _flagReadySetPlayerIndex:boolean;

     
    constructor()
    {
        super();

        this._classId='Fish1GuisSystemView';

        this._propGui=null;

        this._firstOpen=false;

        this._openExchangePanel=false;

        this._flagReadySetPlayerIndex=false;
    }

    //--step1(外部啟動)

    //--step2 call setLayoutData(override)
    public setLayoutData<T extends IfGui,U extends GuiOption>(value?:{id:string,class:new () => T,initData:U,immediateSendEvt:boolean,cloneId?:string}[]):void 
    {
        //--直接寫入要layout的data
        //-{id:string,class:GuiBasic,initData:GuiOption,immediateSendEvt:boolean,cloneId?:string}[]
        /*
        this._aryLayoutData=[
            
            {id:"classname",class:realclass,initData:GuiOption,immediateSendEvt:false},
            {id:"classname",class:realclass,initData:GuiOption,immediateSendEvt:false},
            {id:"classname",class:realclass,initData:GuiOption,immediateSendEvt:false},
            {id:"classname",class:realclass,initData:GuiOption,immediateSendEvt:false},
            {id:"classname",class:realclass,initData:GuiOption,immediateSendEvt:false}   
        ];*/
        //let scene:Scene=director.getScene();
        //--這邊要把GUI的canvas的名字塞進來
        //let canvas:Node=scene.getChildByName('Canvas');
        //let canvas=scene.getComponent(Canvas); 

        //log('check_oddsData',this._viewModel['_aryOddsInfo']);

        this._aryLayoutData=
        [
            //--注意,array裡面的位置決定建立的上下位置
            //-Fish1LobbyGuiView
            // @ts-ignore
            //{id:"GuiTest1",class:GuiTest1,initData:{id:'GuiTest1',other:'hello'},immediateSendEvt:false},
            // @ts-ignore
            {id:"CannonGui",class:Fish1CannonGuiView,initData:{id:'CannonGui'},immediateSendEvt:false},
            // @ts-ignore
            //{id:"CreditExchangeGui",class:CreditExchangeGui,initData:{id:'CreditExchangeGui'},immediateSendEvt:false},
            
            //--propgui--ps-dcd這個要改成從model灌進來..
            {id:"PropGui",class:Fish1PropGuiView,initData:{id:'PropGui',other:{container:'Canvas/guiContainer',dcd:[5,10,10]}},immediateSendEvt:false},
            
            {id:"AutoShootGui",class:Fish1AutoShootGuiView,initData:{id:'AutoShootGui',other:{container:'Canvas/exchangeGuiNode',btnContainer:'Canvas/guiContainer',odds:this._viewModel['_aryOddsInfo'],digitsPath:'num_auto_'}},immediateSendEvt:false},
            
            {id:"MenuGui",class:Fish1MenuGuiView,initData:{id:'MenuGui',other:'Canvas/guiContainer'},immediateSendEvt:false},
            
            {id:"toolBar",class:ToolBarGuiView,initData:{id:'toolBar',other:{prefabId:'prefab/gui/bottomBar',spriteFrameSnId:'tx_sn',snDigitsId:'fnt_arial32_',versionDigitsId:'fnt_arialBd24_',container:'Canvas/guiContainer'}},immediateSendEvt:false},
            
            
            {id:"CreditExchangeGui",class:Fish1CreditExchangeGuiView,initData:{id:'CreditExchangeGui',other:'Canvas/exchangeGuiNode'},immediateSendEvt:false},
            //@ts-ignore
            {id:"LobbyGui",class:Fish1LobbyGuiView,initData:{id:'LobbyGui',other:{lobbyNames:['tx_shark','tx_dragon',''],container:'Canvas/lobbyNode'}},immediateSendEvt:false},

            {id:"IframeGui",class:IframeGuiView,initData:{id:'IframeGui',other:{prefabId:'prefab/gui/webviewbg',titleRule:'tx_GameInstruction',titleHistory:'tx_History',container:'Canvas/guiContainer'}},immediateSendEvt:false},
            
            {id:"InGameMessage",class:InGameMessageGuiView,initData:{id:'InGameMessage',other:{prefabId:'prefab/gui/info',container:'Canvas/guiContainer',labelContainer:'Canvas/PlayerNameText'}},immediateSendEvt:false},
            
            //{id:"SystemMessageGui",class:SystemMessageGuiView,initData:{id:'SystemMessageGui',other:{prefabId:'prefab/gui/systemMessage',container:'Canvas/alertGuiNode',spriteFrameTitleId:'tx_warning',spriteFrameCloseBtnId:'tx_close',labelContainer:'Canvas/PlayerNameText'}},immediateSendEvt:false}
            {id:"SystemMessageGui",class:SystemMessageGuiView,initData:{id:'SystemMessageGui',other:{prefabId:'prefab/gui/systemMessage',container:'Canvas/alertGuiNode',spriteFrameTitleId:'tx_warning',spriteFrameCloseBtnId:'tx_close',labelContainer:'Canvas/alertGuiNode'}},immediateSendEvt:false}
        ]
    }
    

    
    //--重新獲取class並且重新導向變數
    //--step3
    protected afterAllGuiComplete():void
    {
        //--注意,在操作時要使用instance的方式來操作或是直接轉型
       /**
        * 這裡要透過this.getClassById('classid')去取得實際的class
        * 1.
        * this._gui=this._gui as Class1;
        * or u can do this
        * 2.
        * if (test instanceof Class1) {
            test.onlyforClass1();
            }
        */

        this._gameLobbyGui=this.getClassById('LobbyGui') as Fish1LobbyGuiView;

        this._cannonGuiCenter=this.getClassById('CannonGui') as Fish1CannonGuiView;
        
        this._menuToolGui=this.getClassById('MenuGui') as Fish1MenuGuiView;

        this._propGui=this.getClassById('PropGui') as Fish1PropGuiView;

        this._creditExchange=this.getClassById('CreditExchangeGui') as Fish1CreditExchangeGuiView;

        this._autoShootGui=this.getClassById('AutoShootGui') as Fish1AutoShootGuiView;
        
        this._gameIframeGui=this.getClassById('IframeGui') as IframeGuiView;
        
        this._toolbarGui=this.getClassById('toolBar') as ToolBarGuiView;

        this._systemMessageGui=this.getClassById('SystemMessageGui') as SystemMessageGuiView;
        
        this._inGameMessageGui=this.getClassById('InGameMessage') as InGameMessageGuiView;
        
        //@ts-ignore
        //this.setLauncherVersionNumber(window.game_version);

        /*
        this._cannonGuiCenter=this.getClassById('CannonGui') as CannonGui;
        //--lobbyGui
        this._gameLobbyGui=this.getClassById('LobbyGui') as LobbyGui;
        //--creditExchange
        this._creditExchange=this.getClassById('CreditExchangeGui') as CreditExchangeGui;
        this.setCreditExchangePanelActive(false);
        */
        
        //--預設的internal裡面的source無法~
        //internal资源慎用，会导致在原生平台开启动态合图之后出脚本错，而且很难查
        //-https://forum.cocos.org/t/default-sprite-splash/98689/2


        //--loadany的option參數
        //-https://docs.cocos.com/creator/2.4/manual/zh/asset-manager/options.html
        //-https://docs.cocos.com/creator/2.4/manual/zh/asset-manager/downloader-parser.html
        //-https://forum.cocos.org/t/topic/134829/7

        
        GuisSystemView.BGMask=new Node('testMask');
        
        GuisSystemView.BGMask.addChild(instantiate(LoadingResManager.getInstance().getPrefab('prefab/gui/bgMask')));
        
        GuisSystemView.BGMask.layer=Layers.Enum.UI_2D;

        GuisSystemView.BGMask.name='GuiSysBGMask';
        //find('Canvas').addChild(Fish1GuisSystemView.BGMask); 



    }

   

    //--step4
    //-addEventListener
    protected addEventListener():void
    {
        super.addEventListener();

         /**
         * 不要用constructor.name..再用Uglify處理後,因為沒辦法設定--keep-fnames
         * 所以function name會被拿掉..很雷20240328
         */

        //Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.USE_PROP,this.guiEventHandler,this.constructor.name);
        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.USE_PROP,this.guiEventHandler,this._classId);
    }

    protected guiEvtProcessHandler(sub,value):void
    {
        super.guiEvtProcessHandler(sub,value);
        

        switch(sub)
        {
            case GUIEvent.USE_PROP:
                //--do something
                //log('use_prop_from_guiSystem',sub,value[0]);
                this.usePropCallServer(value[0]);
            break;

            case GUIEvent.OPEN_EXCHANGE_FIRST:
                //log('firstOpen_CreditExchange_from_guiSystem',sub);
                this.showOpenAnimation();

            break;

            case GUIEvent.OPEN_EXCHANGE:
                
                this._openExchangePanel=true;

                (<Fish1MenuGuiView>this._menuToolGui).closeMenuBar();

            break;    


            case GUIEvent.BTN_MUTE:
                
                SoundsManager.getInstance().mute();

                (<Fish1MenuGuiView>this._menuToolGui).closeMenuBar();

            break;

            case GUIEvent.BTN_HELP:
               
                //--會從utilTool.general.urlGet('d');裡面解析出來網址
                
                //--規則說明要串成這樣
                /*
                 url = `https://${host}/${path}?GameType=${FishGameInfo.gameType}&Lang=${FishGameInfo.lang}`;
                
                */
                let path_help_domain=(CocosGameSetting.isLocal)?CocosGameSetting.localPathData.domain:CocosGameSetting.host;
                

                //let protocolData=window.location.protocol.split(':');

                //log('open_help',protocolData,path_help_domain);

                this.openIframeGui('https://'+path_help_domain+CocosGameSetting.Game_RulePath+'?GameType='+CocosGameSetting.GameType+'&Lang='+CocosGameSetting.Game_Lang,GuisSystemView._webView_key_rule);
                //this.openIframeGui('https://demo.in-app.cc/Platform/');
                //this.openIframeGui('http://www.google.com.tw/');

                (<Fish1MenuGuiView>this._menuToolGui).closeMenuBar();

            break;


            case GUIEvent.BTN_HISTORY:
                log('open_history');
                //--會從utilTool.general.urlGet('d');裡面解析出來網址
                //this.openIframeGui('http://www.google.com.tw/?enablejsapi=1');
                let path_history_domain=(CocosGameSetting.isLocal)?CocosGameSetting.localPathData.domain:CocosGameSetting.host;
                const url = 'https://'+path_history_domain+CocosGameSetting.Game_WagersPath+`?pf=${CocosGameSetting.Game_Cid}&sid=${CocosGameSetting.Game_Sid}&gameType=${CocosGameSetting.GameType}&lang=${CocosGameSetting.Game_Lang}`;
                this.openIframeGui(url,GuisSystemView._webView_key_history);
                //this.openIframeGui('https://demo.in-app.cc/Platform/');
                //this.openIframeGui('http://www.google.com.tw/');

                (<Fish1MenuGuiView>this._menuToolGui).closeMenuBar();

            break;

            case GUIEvent.BTN_EXIT:
                
                
            
                log('guiSys_btn_EXIT');
                
                //this._viewModel['_testData']=1;//---for test
                /*
                let fish=this._gameMediator.getViewUserData(GameViewMediatorUser.FishView,GameViewMediatorUserDataKey.Fish_getFishs);

                let bullet=this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_getBullets);


                let dxy:{x:number,y:number}={x:bullet[0].bulletShell.position.x-fish[0].fishMesh.position.x,y:bullet[0].bulletShell.position.y-fish[0].fishMesh.position.y};
            
                //--距離小於35-40已經在附近了
                let dist=Math.sqrt(dxy.x*dxy.x+dxy.y*dxy.y); 


                let bulletColliderPoint=bullet[0].collisions[0].worldPoints as Vec2[];

                let fishColliderPoints=fish[0].collisionArea[0].worldPoints as Vec2[];

                let f:boolean=false;
                
                for(let i:number=0;i<bulletColliderPoint.length;i++)
                {
                    if(Intersection2D.pointInPolygon(bulletColliderPoint[i],fishColliderPoints))
                    {
                        f=true;
                        
                        break;
                    }
                }

                log('check_tesfish',f,dist,bulletColliderPoint,fishColliderPoints,fish[0].collisionArea,bullet[0].collisions);
                */
                //--測試關閉,正式打開20240227
                window.util.general.exit();

                (<Fish1MenuGuiView>this._menuToolGui).closeMenuBar();
                //--測試關閉,正式打開20240227
                
            break;


            case GUIEvent.ALERT_CLOSE:
                
                log('guiSys_AlertClose',value);

                (<InGameMessageGuiView>this._inGameMessageGui).setVisibleForPriority(false);

                
                if(value[0]=='connectClose')
                {
                    window.util.general.exit();
                }
                

            break;

        }


    }

    //===========server respond================================================================
     /**
    * override it
    * 你可以將sub當作key值,switch case他來做相關的處理
    * @param sub 屬性變數的字串
    * @param value 傳送的資料
    */
    protected modeleChangeHandler=(sub,value)=>
    {
        log('modeleChangeHandler_guisSystemView_',sub,value); 
        
        switch(sub)
        {
           case '_lobbyData':
            //--create lobby
            log('lobby_serverResBack');
            this.createLobby(value[0].playerRoomBase,value[0].loginName);
            
            Notifycation.getInstance().emit
            (
                GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,
                GUIEvent.LOBBY_IS_READY
            );
            
           break;

           case '_roomTableInfo':
            
            log('_firstTakeSeatData_serverResBack',value);

            //--只要有玩家進桌就會送近來
            this.setRoomData(value[0].tables);
            
            if(!value[0].firstIntoRoom)
            {
                //--第一次進桌
                
                this.setGuiDataInfo({playerIndex:this._viewModel['_playerTableId']+1});//--1-4
                
                //let gunType:string=this.changeBulletStyle(roomData.gun,roomData.table-1);
                //log('checkChangeData',this._viewModel['_playerTableId'],this._viewModel['_defualtGunValue']);
                let gunType:string= (<Fish1CannonGuiView>this._cannonGuiCenter).changeBulletStyle(this._viewModel['_playerTableId'],this._viewModel['_defualtGunValue']);
                
                if(gunType!="" && gunType!=undefined)
                {
                    //--送事件出去
                    log('changeBullet@@');
                    
                    Notifycation.getInstance().emitSync(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.CHANG_BULLETS,gunType);
                }

            }
            
          
           break;
           

           //case '_addbullets':
             
            //log('fish1Gui__addbullets',value[0]);
            //--20240205你這樣直接轉同時轉換座標還在處理當然會不准

            //(<Fish1CannonGuiView>this._cannonGuiCenter).rotationCannon(value[0].siteIndex,value[0].info.endX,value[0].info.endY);

           //break;

           case '_getMatchineDetial':

            log('fish1Gui__getMatchineDetial',value[0]);

            if(value[0])
            {
                log('loginName',this._viewModel['_loginName'],'_base',this._viewModel['_base'],'_balance',this._viewModel['_balance']);
                //Fish1GuisSystemView.BGMask
                /**
                 * 20240129--目前沒有做泰文換到爽的體系
                 */

                if(!this._firstOpen)
                {
                    this._firstOpen=true;

                    this._openExchangePanel=false;

                    (<Fish1CreditExchangeGuiView>this._creditExchange).base=this._viewModel['_base'];
        
                    (<Fish1CreditExchangeGuiView>this._creditExchange).updateOpenInfo(
                        
                        this._viewModel['_balance'], 
                        
                        this._viewModel['_credit'],
                        
                        this._viewModel['_autoCreditExchange']//--要再確認autoCredit 是否開啟自動換分
                    );
                        
                
                }else{

                    //--this._openExchangePanel是否開啟自動換分的面板
                    //--_autoCreditExchange是否自動換分
                    //--_balance餘額
                    log('check__autoCreditExchange',this._viewModel['_autoCreditExchange']+'\n','_balance',this._viewModel['_balance']+'\n','_openExchangePanel',this._openExchangePanel);

                    if(this._viewModel['_autoCreditExchange'] && this._viewModel['_balance']>0 && !this._openExchangePanel)
                    {
                        //--開洗分面板沒開,且餘額充足+要使用自動開洗分

                        //--點擊區要先上鎖--20231228待補
                        //-(<GameSystemMode.PlayerMode>this._gamePlaySystem).blockALL();--old

                        //--
                        //log('checkAutoShoot',(<Fish1AutoShootGuiView>this._autoShootGui).isAutoShoot);
                        
                        
                            /**
                             *
                             * 玩家沒錢打出一發子彈的情況下才會允許換分(去擋掉短時間內快速點擊要自動換分)
                             * 但是在autoshoot當中則不會檢查
                             */
                            let checkCanExchange:boolean=true;

                            
                            //---沒錢就直接換了20240312
                            /*
                            if(!(<Fish1AutoShootGuiView>this._autoShootGui).isAutoShoot)
                            {
                                checkCanExchange=this.checkPlayerCreditCanAutoExchange();
                            }*/

                            if(checkCanExchange)
                            {
                                this._gameMediator.getViewUserData(GameViewMediatorUser.GameLogicSystem,GameViewMediatorUserDataKey.GameLogic_blockALL);

                                let checkAmount:number=this.checkPlayerAutoExchange();

                                if(checkAmount>0)
                                {
                                    
                                    if(!this._viewModel['_firstgetAutoCreditExchange'])
                                    {
                                        //--第一次預設值=true,且只能是500-50000-50000

                                        this._viewModel['_autoCreditExchange']=true;

                                        
                                        /**
                                         * 第一次都沒有選擇金額兌換的情況下,checkAmount會給預設值500
                                         * 並且寫入
                                         */
                                        if(this._viewModel['_autoCreditMoney']<=0)
                                        {
                                            this._viewModel['_autoCreditMoney']=checkAmount;
                                        }
                                        
                                        
                                        //this._viewModel['_autoCreditMoney']=500;

                                    }

                                    log('check__onCreditExchange',this._viewModel['_onCreditExchange']);
                                    //--確保開洗分流程完成才可以進行下一輪
                                    if(this._viewModel['_onCreditExchange'])
                                    {   
                                        this._viewModel['_onCreditExchange']=false;

                                        let ratio=this._viewModel['_base'];
                                        
                                        //log('check_autoExchangeRatio',ratio);
            
                                        let messageData=i18n.t('MSG.WAIT_EXCHANGING');
            
                                        this.showGameMessage(messageData,'MSG.WAIT_EXCHANGING');
            
                                        this._viewModel['_firstgetAutoCreditExchange']=true;
                                        //--直接幫他換錢
                                        this._viewModel.sendServer
                                        (
                                            ServerSendCode.Exchange,
                                            {
                                                p:checkAmount,
                                
                                                r:ratio
                                            },
                                            //--Exchange--->p=換分分數,r=換分比(string)--換分比,model裡面做掉
                                            ServerResCode.Exchange
                                        );
                                    }

                                    

                                }else{

                                    //--沒錢啦
                                    this.showGameMessage(i18n.t('MSG.BALANCE_IS_NOT_ENOUGH'),'MSG.BALANCE_IS_NOT_ENOUGH');

                                    //---更新餘額,打開開洗分面板
                                    //- (<GameSystemMode.PlayerMode>this._gamePlaySystem).unBlock();
                                    this._gameMediator.getViewUserData(GameViewMediatorUser.GameLogicSystem,GameViewMediatorUserDataKey.GameLogic_unBlockALL);

                                    this._openExchangePanel=false;

                                    (<Fish1CreditExchangeGuiView>this._creditExchange).updateOpenInfo(
                                
                                        this._viewModel['_balance'], 
                                        
                                        this._viewModel['_credit'],
                                        
                                        this._viewModel['_autoCreditExchange']//--要再確認autoCredit 是否開啟自動換分
                                    );


                                }
                            }


                    }else{
                      
                        this._openExchangePanel=false;
                        
                        (<Fish1CreditExchangeGuiView>this._creditExchange).updateOpenInfo(
                        
                            this._viewModel['_balance'], 
                            
                            this._viewModel['_credit'],
                            
                            this._viewModel['_autoCreditExchange']//--要再確認autoCredit 是否開啟自動換分
                        );

                        
                    }
                }
               
            }
            
          

            
           break;

           case '_exchangePlayerCredit':
              
              log('fish1_gui__exchangePlayerCredit',value[0]);
                
              (<Fish1CannonGuiView>this._cannonGuiCenter).changeScore(value[0].credits)

           break;


           case '_base':
             
           log('check_guiSystem_base',this._viewModel['_base']);  
           (<Fish1MenuGuiView>this._menuToolGui).updateRatio(this._viewModel['_base']);
           
           break;


           case '_props':
           
            log('check_guiSystem_fish1_gui__props',value[0],this._viewModel['_props']);

            this.resetPropList(value[0]);
            //-_propRunData

           break;


           case '_useProp':

            log('check_guiSystem_fish1_gui__useProp',value[0]);

            this.useProp(value[0]);

           break;


           case '_propRunData':
           
            log('check_guiSystem_fish1_gui___propRunData',value[0],this._viewModel['_propRunData']);
            
            this.updatePropColdDown(value[0]);
            //-_propRunData

           break;


           case '_roomStatus':

            log('check_guiSystem_fish1_gui___roomStatus',value[0]);

           //--房間變更狀態(一般0/冰凍1/金龍來襲2/金龍死亡3)
            this.setRoomStatus(value[0].status);

            if(value[0].status==0)
            {

                this.unLockPropBtn(PropType.PROP_CALL);

                this.unLockPropBtn(PropType.PROP_FREEZE);

                this.roomToDefault();


            }else if(value[0].status==1)
            {
                this.stopPropcoldDown(PropType.PROP_CALL);

                this.lockPropBtn(PropType.PROP_CALL);

                this.lockPropBtn(PropType.PROP_FREEZE);

            }else if(value[0].status==2)
            {
                
                //--金龍來襲(召喚冰凍上鎖,停止計時)
                this.stopPropcoldDown(PropType.PROP_CALL);

                this.lockPropBtn(PropType.PROP_CALL);

                this.stopPropcoldDown(PropType.PROP_FREEZE);

                this.lockPropBtn(PropType.PROP_FREEZE);

                //---解鎖砲塔(因為使用道具被上鎖)
                /*
                if(this._flagReadySetPlayerIndex)
                {
                    this.unlockPropBtnForCannon(this._playerIndex-1);
                }*/
               

            }else if(value[0].status==3)
            {

            }

           break;



           case '_wagersID':
            log('check_guiSystem_fish1_gui____wagersID',value[0]);

            this.updateWagersID(value[0]);

           break;


           case '_errorCode':
            log('check_guiSystem_fish1_gui___errorCode',value[0]);
            //-_errorCode:{code:number,error:string};  
            //--開黑色的系統訊息 
            /*
            if(this._gameLobbyGui)
            {
                this.removeLobby();
            }*/

            let messageContain=value[0].code+':'+i18n.t(value[0].error); 

            this.showAlert(value[0].type,messageContain);
            //-

           break;

           case '_inGameMessage':
            log('check_guiSystem_fish1_gui___inGameMessage',value[0]);
            //-_errorCode:{code:number,error:string};  
           
            //let ingameMessage=i18n.t(value[0].msg); 

            this.showGameMessage(i18n.t(value[0].msg),value[0].msg);
            //this.showAlert(value[0].type,messageContain);


           break;


           case '_pingInfo':
            log('check_guiSystem_fish1_gui____pingInfo',value[0]);

            this.updatePing(value[0]);

           break;




            

        }
        
        /*
        if(sub=='_addbullets')
        {
            //--do something---
        }*/
  
    }

    //===========server respond================================================================
    
    //===========after server getPlayerIndex================================================================
    protected setDataAfterreadySetPlayerIndex():void
    {
        return;
        this._flagReadySetPlayerIndex=true;
        //-_roomStatus:{status:number,startTime:number,endTime:number};
        let roomStatusData=this._viewModel['_roomStatus'];

        
        if(roomStatusData.status==2)
        {
            //---解鎖砲塔(因為使用道具被上鎖)
            this.unlockPropBtnForCannon(this._playerIndex-1);
        }

        log('setDataAfterreadySetPlayerIndex',roomStatusData,this._playerIndex);

      

    }    
    
    
    //===========after server getPlayerIndex================================================================

    //============get Data==================================================================
    //======給其他平行的view拿資料用的(透過mediator去拿)
    //--interface abstract
    public getData(dataKey:string,value?:any):any
    {
       //--這邊直接拿下面需要拿的資料
       log('getGuiData',dataKey);
       let r:any=null;

       switch(dataKey)
       {
          case GameViewMediatorUserDataKey.Gui_getCannonPosition:
            
            log('Gui_getCannonPosition_fishGuisSystem',value);
            r= (<Fish1CannonGuiView>this._cannonGuiCenter).getCannonPosition(value);

          break;

          case GameViewMediatorUserDataKey.Gui_changeBulletStyle:

            r=(<Fish1CannonGuiView>this._cannonGuiCenter).changeBulletStyle(value.index,value.score);
          
          break;

          case GameViewMediatorUserDataKey.Gui_rotateCannonAndGetPosition:
            
          log('Gui_rotateCannonAndGetPosition@@_',value);
            
          (<Fish1CannonGuiView>this._cannonGuiCenter).rotationCannon(value.index,value.pos.x,value.pos.y);
          
          r=(<Fish1CannonGuiView>this._cannonGuiCenter).getCannonPosition(value.index);

          break;

          case GameViewMediatorUserDataKey.Gui_getIsAutoShoot:

          r=(<Fish1AutoShootGuiView>this._autoShootGui).isAutoShoot;

          log('Gui_getIsAutoShoot',r);

          break;

          case GameViewMediatorUserDataKey.Gui_cleanAllAutoShootData:

            (<Fish1AutoShootGuiView>this._autoShootGui).cleanAllAutoShootData();
            
          break;
          
          case GameViewMediatorUserDataKey.Gui_locakAim:
            
            log('Gui_Gui_locakAim',r);
  
          (<Fish1AutoShootGuiView>this._autoShootGui).locakAim(value);
          
          break;


          case GameViewMediatorUserDataKey.Gui_autoUseProps:

            //(<Fish1PropGuiView>this._propGui).autoUseProps(value);
            this.autoUsePropCheck(value);

          break;


          case GameViewMediatorUserDataKey.Gui_showGameMessage:

            this.showGameMessage(value.message,value.type);
           
          break;

          case GameViewMediatorUserDataKey.Gui_removeMessages:

            this.removeMessages(value);
          
          break;

          case GameViewMediatorUserDataKey.Gui_closeGameMessage:

            this.closeGameMessage(value);
          
          break;

          case GameViewMediatorUserDataKey.Gui_showAlert:
            //---{type:'connectClose',code:-1,error:'MSG.NOT_ENOUGH_CREDIT'};
           
           let messageContain=i18n.t(value[0].error); 

           if(value[0].code>0)
           {
                messageContain=value[0].code+messageContain;
           }

           this.showAlert(value.type,messageContain);

          break;


          case GameViewMediatorUserDataKey.Gui_checkExChangeShow:

            r=this.checkExChangeShow();
 
          break;



       }

       return r;
    }
    //--interface abstract
    public excute(value?:any):any
    {
        
        
    } 
    //============get Data==================================================================


    //============room=========================================================================
    //--這邊插在連線前完成
    public init(value?:any):any
    {
       let r:any;
       //--要寫資料進去
       if(this._cannonGuiCenter)
       {
            (<Fish1CannonGuiView>this._cannonGuiCenter).defaultGunScore=this._viewModel['_defualtGunValue'];
             
            (<Fish1CannonGuiView>this._cannonGuiCenter).setCannonInfo(this._viewModel['_aryActionInfo'],this._viewModel['_aryScorePool']);   
       }

       if(this._propGui)
       {
            let propData=this._viewModel['_props'];
            //-{[key:number]:{time:number,count:number}};
            let times:number[]=[propData[PropType.PROP_CALL].time,propData[PropType.PROP_FREEZE].time,propData[PropType.PROP_CRAZY].time];
            
            //log('check_guiPropInitData',propData,times);

            (<Fish1PropGuiView>this._propGui).defaultcdTimes=times;
       }

       return null;
       
    }

    //--重置房間資料
    public resetRoom():void
    {
        this.cleanAllRoom();

        (<InGameMessageGuiView>this._inGameMessageGui).resetCoordinatesChange();

    }

    //--重新layout房間
    public reBuildRoom():void
    {
        this._aryLayoutData=
        [
            //--注意,array裡面的位置決定建立的上下位置
            {id:"LobbyGui",class:Fish1LobbyGuiView,initData:{id:'LobbyGui',other:{lobbyNames:['tx_shark','tx_dragon',''],container:'Canvas/lobbyNode'}},immediateSendEvt:false}
        ];

        this.startProcessing();
    }

    //--這個是在takeseat的時候用的
    protected setRoomData(room:TableInfo[] ,uid?:number):void//--考慮拿掉
    {
        (<Fish1CannonGuiView>this._cannonGuiCenter).setRoomData(room);
    }

    protected cleanAllRoom():void
    {
        (<Fish1CannonGuiView>this._cannonGuiCenter).cleanAllRoom();
    }

    //============room=========================================================================
    
    //============creditExchange=========================================================================
    
    //--call server
    protected  creditExchangeEnterGame(value:EventSendObject):void
    {
        log('creditExchangeEnterGame',value);

        //--auto exchange

        let lastclickValue:number=(value.sendObj.lastClick>0)?value.sendObj.lastClick:this._viewModel['_autoCreditMoney'];
        
        this._viewModel['_autoCreditExchange']=value.sendObj.isAutoExchange;

        this._viewModel['_autoCreditMoney']=lastclickValue;

        log('check_vmdata after exchange',this._viewModel['_autoCreditExchange'],this._viewModel['_autoCreditMoney']);

        //--開洗分流程結束的狀態
        if(this._viewModel['_onCreditExchange'])
        {
            //--auto exchange
            this._viewModel['_onCreditExchange']=false;

            log('check_notautoExchangeRatio',value.sendObj.exchangeRatio);


            if(value.sendObj.exchangeCredit>0)
            {
                let messageData=i18n.t('MSG.WAIT_EXCHANGING');

                this.showGameMessage(messageData,'MSG.WAIT_EXCHANGING');
            
            }else{

                //--小於0的話server不會回,_onCreditExchange也就不會被回復成true

                this._viewModel['_onCreditExchange']=true;
            }

            this._viewModel.sendServer
            (
                ServerSendCode.Exchange,
                {
                    p:value.sendObj.exchangeCredit,

                    r:value.sendObj.exchangeRatio
                },
                //--Exchange--->p=換分分數,r=換分比(string)--換分比,model裡面做掉
                ServerResCode.Exchange
            );
        }
      

    }

    //--洗分--送出後直接斷線
    protected banlaceExchange():void
    {
        //---to do -20240301
        /*
        this._viewModel.sendServer
        (
            ServerSendCode.LeaveRoom,
            null,
            ServerResCode.LeaveRoom
        );
        */
        
        
        this._viewModel.sendServer
        (
            ServerSendCode.CashOut,
            null,
            ServerResCode.CashOut
        );
        
        //--也不用回了..直接斷線離開(因為沒有回到廳房的功能)
        TweenMax.to({},1,
        {
           onComplete:()=>
           {
                window.util.general.exit();
           } 
        });
        
    }


    protected openCreditExchange():void
    {
        this._viewModel['_getMatchineDetial']=false;

        /*
        let messageData=i18n.t('MSG.WAIT_EXCHANGING');

        this.showGameMessage(messageData,'MSG.WAIT_EXCHANGING');
        */

        this._viewModel.sendServer
        (
          ServerSendCode.GetBalance,
          null,//--(實際上不用代資料)
          ServerResCode.Balance
        )
  
    }

    //--檢查面板是否是開啟狀態
    protected checkExChangeShow():boolean
    {
        return (<Fish1CreditExchangeGuiView>this._creditExchange).checkExChangeShow();
    }


    private checkPlayerAutoExchange():number
    {
        let changeCredit:number;

        let autoCreditMoney:number=this._viewModel['_autoCreditMoney'];

        let balance:number=this._viewModel['_balance'];

        let exchangeRatio:number=this._viewModel['_exchangeRatio'];

        log('checkPlayerAutoExchange',balance,autoCreditMoney,exchangeRatio);

        if(autoCreditMoney<500)
        {
            autoCreditMoney=500;//--第一次沒有手動換分的情況下直接進入遊戲
        }

        if(balance < autoCreditMoney*exchangeRatio && balance>0)
        {
            //-----錢不夠就自動開全部的分數給他換    
            changeCredit = Math.floor(balance/exchangeRatio);
            log('not_enougth',changeCredit,balance,exchangeRatio);
        
        }else{
           
            //---吻合
            changeCredit=autoCreditMoney;

        }
        log("checkPlayerAutoExchange@@",changeCredit);
        
        return changeCredit;
    
    } 

    /**
     * 玩家在沒得打出任何一發子彈的時候才會允許換分
     * @returns boolean
     */
    private checkPlayerCreditCanAutoExchange():boolean
    {
        
        let playerCredit:number=this._viewModel['_aryRoomInfo'][this._playerIndex-1].credit;

        let bulletScore:number[][]=this._viewModel['_aryScorePool'];

        let f:boolean=true;

        //---這邊自動幫玩家換子彈--?

        for(let i:number=0;i<bulletScore.length;i++)
        {
            for(let j:number=0;j<bulletScore[i].length;j++)
            {
                if(bulletScore[i][j]<playerCredit)
                {
                    f=false;
                    break;
                }
            }

            if(!f)
            {
                break;
            }

        }

        log('checkPlayer_credit',f,this._viewModel['_aryRoomInfo'][this._playerIndex-1].credit,this._viewModel['_aryScorePool']);
        
        return f;
    }
    
    /*
    protected  setCreditExchangePanelActive(value:boolean):void
    { 

    }*/



    //============creditExchange=========================================================================
    
    

    //============lobby====================================================================
    protected  lobbySetPlayerRoom(value:EventSendObject):void
    {
        log('Fish1GuiSystemView__',value);

        this._viewModel.sendServer
        (
            ServerSendCode.ChoiceLobby,

            value.sendObj
            
            //ServerResCode.EnterRoom
        );

        this.removeLobby();
        //--要在秀出laoding bar
    }

    protected  lobbySetPlayerRoomExit(value:EventSendObject):void
    {

    }
    

    /**
    * 新增大廳頁
    * @param o 傳入的比例資料
    * @param userID 使用者名稱
    */
    protected createLobby(o:string[] , userID:string):void
    {
       
        if(this._gameLobbyGui)
        {
            (<Fish1LobbyGuiView>this._gameLobbyGui).setRoomData(o,userID);
        }
       
        //this.setUserName(userID);
    }

    public forSPLobbyHost(userID?:string):void
    {
        //--移除大廳,此為無大廳的廳主
        if(this._gameLobbyGui!=null)
        {
           this.removeLobby();
        }

        //this.setUserName(userID);
    }
    
    //============lobby====================================================================

    //---以下的功能可能要改成protected
    //=======cannon===================================================================
     /**
     *override it 
     * @returns 取得玩家炮管的座位位置,作為動畫顯示的依據座標
     * 原本的getGunLocat():{x:number , y:number}[]方法
     */
    public getGunContainerPosition():{x:number , y:number}[]
    {
        
       return (<Fish1CannonGuiView>this._cannonGuiCenter).getGunContainerPosition();
        
    }

     /**
      * override it 
      * @returns 玩家砲塔座位座標
      */
    public getALLPlayerPositions():{x:number , y:number}[]
    {
        return (<Fish1CannonGuiView>this._cannonGuiCenter).getALLPlayerPositions();
    }
     
     /**
      * 取得使用者:"金幣"圖片座標位置和長寬
      * 在前幾代是取玩家砲管資訊上面的金幣圖案位置,作為金幣噴出飛回來的座標
      * 在第6代是採取飛回砲管正中間
      * 記得要toLocal回去喔~~~~
      * PS-回傳的參數都是global
      * 
      *  //return [{x:0 , y:0 , width:0 , height:0},{x:0 , y:0 , width:0 , height:0},{x:0 , y:0 , width:0 , height:0},{x:0 , y:0 , width:0 , height:0}];
         //return this._gunGui.getCreditLocat();
         //return this._cannonGuiCenter.getCreditCoinPosition();
      * override it
     */
    public getCreditCoinPosition():{x:number , y:number , width:number , height:number}[]
    {
        return (<Fish1CannonGuiView>this._cannonGuiCenter).getCreditCoinPosition();
    }
 
      /**
      * @returns 座位的<玩家分數顯示框的資訊(座標(global)/寬高)>
      * override it
      */
    public getPlayerTextDigitsInfoData():{x:number , y:number , width:number , height:number}[]
    {
        return (<Fish1CannonGuiView>this._cannonGuiCenter).getPlayerTextDigitsInfoData();
    }
     
 
      /**
      * override it
      * 舊版本是給spine用的(因為砲座是spine做的)
      * @returns 取得所有cannonMount相關資訊(座標/寬高)
      */
    public getCannonMountPositions():{[key:string]:{x:number,y:number,width:number,height:number}}[]
    {
        return (<Fish1CannonGuiView>this._cannonGuiCenter).getCannonMountPositions();
    }


    
     
 
     /**
      * 旋轉前準備(中心座標的偏移之類的--上下位置會有不同)
      * @param tableId 1-4
      */
    public setPlayerInfoCoordinate(tableId:number):void
    {
        (<Fish1CannonGuiView>this._cannonGuiCenter).setPlayerInfoCoordinate(tableId);

    }

    /**
     * 旋轉後調整砲塔
     * @param tableId 1-4
     */
    public afterCoordinatesChange(tableId:number):void
    {
        (<Fish1CannonGuiView>this._cannonGuiCenter).afterCoordinatesChange(tableId);

        (<InGameMessageGuiView>this._inGameMessageGui).afterCoordinatesChange(tableId);
        
        //(<SystemMessageGuiView>this._systemMessageGui).afterCoordinatesChange(tableId);
    }

    //--使用道具上鎖
    private lockPropBtnForCannon(index:number,scoreValue:number):void
    {
        (<Fish1CannonGuiView>this._cannonGuiCenter).lockPropBtn(index,scoreValue);
    }


    //--使用道具解鎖
    private unlockPropBtnForCannon(index:number):void
    {
        (<Fish1CannonGuiView>this._cannonGuiCenter).unlockPropBtn(index);
    }

    //=======cannon===================================================================

    //=======menu=====================================================================
    public getMenuPositions():{[key:string]:{x:number,y:number,width:number,height:number}}
    {
        let propData=(<Fish1PropGuiView>this._propGui).getPropMenuPositions();
        return propData;
    }
    //=======menu=====================================================================


    //========prop====================================================================
    private autoUsePropCheck(value:number):void
    {
        let props=this._viewModel['_props'];

        let propRunningdata=this._viewModel['_propRunData'];

        if(props[value].count>0 && !propRunningdata[value].isRunning)
        {
            (<Fish1PropGuiView>this._propGui).autoUseProps(value);
        }

    }
    
    
    //--使用道具(玩家本身)call server
    private usePropCallServer(propType:number):void
    {

        let props=this._viewModel['_props'];

        let propRunningdata=this._viewModel['_propRunData'];
 
        let playerCredit:number=this._viewModel['_credit'];

        log('check_beforeUseProp',playerCredit,props,propRunningdata,propType);



        if(props[propType].count>0 && !propRunningdata[propType].isRunning && playerCredit>0)
        {
            
            this._viewModel.sendServer
            (
                ServerSendCode.useProp,
                {
                    pt:propType,
                    //--以下是debug用的
                    dPlayer:this._playerIndex-1,//--0-3
                    dcd:props[propType].time
                },
                ServerResCode.UseProp
            );
    
        }else{
            
            let messageData;
            let type;
            if(playerCredit<=0)
            {
                messageData=i18n.t('MSG.CANT_NOT_USE_PROPS');
                
                type='MSG.CANT_NOT_USE_PROPS';
                
            }else{
                
                messageData=i18n.t('MSG.PROPS_NOT_ENOUGH');

                type='MSG.PROPS_NOT_ENOUGH';
            }

            this.showGameMessage(messageData,type);
            
            /*
            let messageData=i18n.t('MSG.PROPS_NOT_ENOUGH');

            let type='MSG.PROPS_NOT_ENOUGH';
            
            this.showGameMessage(messageData,type);
            */
        }

    }

    private useProp(value:{propType:number,index:number}):void
    {
        log('check_useProp_beforeUseProp',value,this._playerIndex);

        //--20240131取消道具與砲台的上鎖連動
        if(value.index==this._playerIndex-1 && value.propType!=0)
        {
            (<Fish1PropGuiView>this._propGui).beforeUseProp(value);
        }
        /*
        if(value.index==this._playerIndex-1 && value.propType!=0)
        {
            (<Fish1PropGuiView>this._propGui).beforeUseProp(value);

            //--上鎖--
            let gunScoreType=this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_gunScore);
            
            log('check_guiUseProp_gunScoreValue',gunScoreType); 

            this.lockPropBtnForCannon(value.index,gunScoreType);
            

        }else if(value.index==-1 && value.propType==0)
        {
            //--全部結束--魚潮/金龍也要結束
            this.unlockPropBtnForCannon(this._playerIndex-1);
        }*/


    }
    
    
    //-更新背包數量
    private resetPropList(props:{[key:number]:{time:number,count:number}}):void
    {
        (<Fish1PropGuiView>this._propGui).setProps(props);
    }

    //private updatePropColdDown(type:number,time:number):void
    private updatePropColdDown(coldDownValue:{[key:number]:{time:number,timeCount:number,isRunning:boolean,isFinish:boolean}}):void
    {
        (<Fish1PropGuiView>this._propGui).updateColdDownTime(coldDownValue);

    }

    //--強制停止colddown
    private stopPropcoldDown(propType:number):void
    {
        (<Fish1PropGuiView>this._propGui).stopColdDown(propType);
    }

    //--道具按鈕上鎖
    private lockPropBtn(propType:number):void
    {
        (<Fish1PropGuiView>this._propGui).lockPropBtn(propType);
    }

    //--道具按鈕解鎖
    private unLockPropBtn(propType:number):void
    {
        (<Fish1PropGuiView>this._propGui).unLockPropBtn(propType);
    }

    private roomToDefault():void
    {
        (<Fish1PropGuiView>this._propGui).roomToDefault();
    }

    private setRoomStatus(value:number):void
    {
        (<Fish1PropGuiView>this._propGui).roomStatus=value; 
    }

    //========prop====================================================================

    //========openanimation===========================================================
    /**
     * 第一次開洗分面板打開後的時候做
     */
    public showOpenAnimation():void
    {
        //---開場動畫(gun/btns)
        (<Fish1PropGuiView>this._propGui).openShow();

        let menuToolbtn=(<Fish1MenuGuiView>this._menuToolGui).getCompontItem('_menuToolBtn');

        let menuOgPosition=(<Fish1MenuGuiView>this._menuToolGui).ogPosition;

        log('showOpenAnimation',menuToolbtn,menuOgPosition);
        
        (<Fish1AutoShootGuiView>this._autoShootGui).openShow(menuToolbtn.node,menuOgPosition);

    }

    //========openanimation===========================================================

    //========open IframeGui============================================================
    public openIframeGui(url:string,titleKey?:string):void
    {
        (<IframeGuiView>this._gameIframeGui).showWebView(url,titleKey,2);
    }

    public closeIframeGui():void
    {
        (<IframeGuiView>this._gameIframeGui).hideWebView();
    }

    //========toolbarGui============================================================
    private updateWagersID(value:number):void
    {
        (<ToolBarGuiView>this._toolbarGui).updateWagersID(value); 
    }


    private updatePing(value:string):void
    {
        (<ToolBarGuiView>this._toolbarGui).updatePing(value);
    }


    public setGameLauncherVersionNumber(value:string):void
    {
        log('check_setLauncherVersionNumber',value);
        
        if(value!=undefined)
        {
            (<ToolBarGuiView>this._toolbarGui).setLauncherVersionNumber(value);
            
            (<Fish1LobbyGuiView>this._gameLobbyGui).setLauncherVersionNumber(value);
        }
       
    }


    //==========inGameMessage============================================================
    private showGameMessage(message:string,type?:string):void
    {
        (<InGameMessageGuiView>this._inGameMessageGui).showGameMessage(message,type);
    }

    //-removeMessages
    private removeMessages(messages:string[]):void
    {
        (<InGameMessageGuiView>this._inGameMessageGui).removeMessages(messages);
    }

    private closeGameMessage(clean:boolean=false):void
    {
        (<InGameMessageGuiView>this._inGameMessageGui).closeGameMessage(clean);
    }

    private showAlert(errorType:string,dictString: string, autoDisappearTime: number = 0):void
    {
        if((<SystemMessageGuiView>this._systemMessageGui).errorType!=errorType)
        {
            (<InGameMessageGuiView>this._inGameMessageGui).setVisibleForPriority(true);
        }

        //--20240115--cocos 的webview他的引擎是固定畫在最上面的
        if((<IframeGuiView>this._gameIframeGui).active)
        {
            (<IframeGuiView>this._gameIframeGui).hideWebView();
        }
        
        (<SystemMessageGuiView>this._systemMessageGui).showAlert(errorType,dictString,autoDisappearTime);
    }
    


}