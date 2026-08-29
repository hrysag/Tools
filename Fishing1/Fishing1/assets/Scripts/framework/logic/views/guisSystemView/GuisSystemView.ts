/**
 * Created by EricHuang on 2023/9/27.
 */

import {GuisCenterFWBase} from '../../../game/guiCore/GuisCenterFWBase';
import {GuiBasic} from '../../../game/guiCore/GuiBase';
import {Notifycation} from '../../../abstract/mvvm/Notifycation';
import {GuiNotifycationSubbscriptionSubject} from '../../../game/guiCore/GuiDefinitionsBase';
import {GUIEvent} from '../../../game/events/eventBase';
import {EventSendObject} from '../../../game/events/eventBase';
import {TableInfo} from '../../../game/model/ModelDefinitionsBase';
import {Node} from 'cc';
import {log} from 'cc';



export abstract class GuisSystemView extends GuisCenterFWBase
{
    protected _cannonGuiCenter:GuiBasic;

    protected _creditExchange:GuiBasic;

    protected _menuToolGui:GuiBasic;

    protected _autoShootGui:GuiBasic;

    protected _gameMessageGui:GuiBasic;

    protected _gameLobbyGui:GuiBasic;
    
    //---以下的做預設
    protected _gameIframeGui:GuiBasic;
    
    protected _toolbarGui:GuiBasic;

    //--遊戲提示(無關閉按鈕,時間到自行關閉)
    protected _inGameMessageGui:GuiBasic;
    //--錯誤訊息(有關閉按鈕)
    protected _systemMessageGui:GuiBasic;

    public static _webView_key_rule:string='webview_rule';

    public static _webView_key_history:string='webview_history';

    //---以上的做預設

    public static BGMask:Node;

    /*---這樣寫會爆
    set playerIndex(value:number)
    {
       super.playerIndex=value;

       this.setDataAfterreadySetPlayerIndex();
    }*/
    
    constructor()
    {
        super();

        this._classId='GuisSystemView';
    }


    public setPlayerIndex(value:number):void
    {
        this._playerIndex=value;

        this.setDataAfterreadySetPlayerIndex();
    }



   

    //--step1(外部啟動)
    public settingGuiInit():void
    {
        log('layout@@ settingInit');
          
        this.setLayoutData();
        //this.setJsondata('position');//---目前沒有用到輸出排版
        //this.startLayout();
        this.startProcessing();
    }
    
    
    //--這邊插在連線前完成
    abstract init(value?:any):any

    abstract resetRoom():void

    abstract reBuildRoom():void

    //--這個是在takeseat的時候用的
    protected abstract setRoomData(room:TableInfo[] ,uid?:number):void//--考慮拿掉

    protected abstract cleanAllRoom():void
    
    //--step2 call setLayoutData(override)

    //--重新獲取class並且重新導向變數
    //--step3 
    //override it
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
    protected afterAllGuiComplete():void
    {

    }

    //--step4
    //-override it(ps-addEventListener for gui not for guiCneter)
    protected addEventListener():void
    {
        //--以下監聽的第三個參數指的是target,有填入的話this會變成target..
        //-this.node.on(Node.EventType.TOUCH_START, this.onBtnClick, this);
        //this._cannonGuiCenter.emitter.on(GUIEvent.CHANG_BULLETS,this.guiEventHandler);
        
        /**
         * 不要用constructor.name..再用Uglify處理後,因為沒辦法設定--keep-fnames
         * 所以function name會被拿掉..很雷20240328
         */
        //--這邊有些要改到其他的view裡面做處理
        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.CREDIT_EXCHANGE_ENTER,this.guiEventHandler,this._classId);
        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.CREDIT_EXCHANGE_EXIT,this.guiEventHandler,this._classId);
        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.BTN_MUTE,this.guiEventHandler,this._classId);
        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.BTN_HELP,this.guiEventHandler,this._classId);
        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.BTN_HISTORY,this.guiEventHandler,this._classId);
        //--現在好像沒有儲值的功能?
        //Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.BTN_DEPOSIT,this.guiEventHandler,this.constructor.name);
        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.OPEN_EXCHANGE,this.guiEventHandler,this._classId);
        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.OPEN_EXCHANGE_FIRST,this.guiEventHandler,this._classId);
        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.BTN_EXIT,this.guiEventHandler,this._classId);
        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.AIM_SHOOT,this.guiEventHandler,this._classId);
        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.AUTO_SHOOT,this.guiEventHandler,this._classId);
        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.LOCK_DIRECTION_SHOOT,this.guiEventHandler,this._classId);
        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.SET_PLAYER_ROOM,this.guiEventHandler,this._classId);
        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.SET_PLAYER_ROOM_EXIT,this.guiEventHandler,this._classId);
        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.ALERT_CLOSE,this.guiEventHandler,this._classId);
    }


    protected guiEvtProcessHandler(sub,value):void
    {
        log('guiEvtProcessHandler',sub,value[0]);
        
        switch(sub)
        {

            case GUIEvent.CREDIT_EXCHANGE_ENTER:
        
                this.creditExchangeEnterGame(value[0]);

                //--這裡要改
                //this.setCreditExchangePanelActive(false);
            
            break;


            
            case GUIEvent.CREDIT_EXCHANGE_EXIT:

                this.banlaceExchange();

            break;


            case GUIEvent.SET_PLAYER_ROOM:

                this.lobbySetPlayerRoom(value[0]);

            break;

            case GUIEvent.SET_PLAYER_ROOM_EXIT:

                this.lobbySetPlayerRoomExit(value[0]);

            break;

            case GUIEvent.OPEN_EXCHANGE:

              this.openCreditExchange();

            break;
        }
    }

    //--箭頭函式不能override
    protected guiEventHandler=(sub,value)=>
    {
        log('GuiCenterbase_Evt',sub,value[0]);
        
        this.guiEvtProcessHandler(sub,value);
    
        //this.emit(e.type,e);//--應該也沒必要再送出來了
    }

    public getPositionsforGui():{
        positions:{x:number,y:number}[],
        playerPositions:{x:number,y:number}[],
        coniEndinfo:{x:number,y:number,width:number,height:number}[],
        exchangePositions:{x:number , y:number , width:number , height:number}[],
        mountPositions:{[key:string]:{x:number,y:number,width:number,height:number}}[],
        menuPositions:{[key:string]:{x:number,y:number,width:number,height:number}}
    }
    {
        return this._positionInfo;
    }

    //--提取完相關座標資訊後會再call setPlayerInfoCoordinate
    //--這個也是阿(takeseat之後用的)
    public setGuiDataInfo(value:any):void
    {
        log('after_table',value);
        //--會先set playerIndex(1-4)--setPlayerInfoCoordinate
        //--再取座標資訊--coordinatesChange
        //this._playerIndex=value.playerIndex;//--1-4
        //this.playerIndex=value.playerIndex;//--1-4(去啟動setter方法)--這樣寫在mobile平台會爆炸

        this.setPlayerIndex(value.playerIndex);//-1-4


        /**
         * --這個要旋轉後再拿
         * positions-->砲管出口的位置
         * coniEndinfo--->也是金幣的位置--
         * exchangePositions--->玩家分數顯示框資訊
         * mountPositions-->所有玩家mount資料--20230315新增
         */
        /*
        this._positionInfo={
            positions:this.getGunContainerPosition(),
            playerPositions:this.getALLPlayerPositions(),
            coniEndinfo:this.getCreditCoinPosition(),
            exchangePositions:this.getPlayerTextDigitsInfoData(),
            mountPositions:this.getCannonMountPositions()
        }
        log('chek_guiPositionData',this._positionInfo,this._playerIndex);
        */

        this.useInfoDataGui();

    }

    public afterRotationPos():void
    {
        /**
         * --這個要旋轉後再拿
         * positions-->砲管出口的位置
         * coniEndinfo--->也是金幣的位置--
         * exchangePositions--->玩家分數顯示框資訊
         * mountPositions-->所有玩家mount資料--20230315新增
         */
        this._positionInfo={
            positions:this.getGunContainerPosition(),
            playerPositions:this.getALLPlayerPositions(),
            coniEndinfo:this.getCreditCoinPosition(),
            exchangePositions:this.getPlayerTextDigitsInfoData(),
            mountPositions:this.getCannonMountPositions(),
            menuPositions:this.getMenuPositions()
        }
        log('chek_guiPositionData',this._positionInfo,this._playerIndex);  

    }


    abstract setGameLauncherVersionNumber(value:string):void
   

    protected useInfoDataGui():void
    {
        //---這邊是已經進遊戲後(GUI被初始後),GUI需要玩家相關資訊做後續變動
        this.setPlayerInfoCoordinate(this._playerIndex);    
    }




    //======setDataAfterreadySetPlayerIndex=========
    
    protected abstract setDataAfterreadySetPlayerIndex():void

    
    //======openAnimation=========
    abstract showOpenAnimation():void

    //=======cannon===================================================================
    
   
   
     /**
     *override it 
     * @returns 取得玩家炮管的座位位置,作為動畫顯示的依據座標
     * 原本的getGunLocat():{x:number , y:number}[]方法
     */
    abstract getGunContainerPosition():{x:number , y:number}[]

    /**
     * override it 
     * @returns 玩家砲塔座位座標
     */
    abstract getALLPlayerPositions():{x:number , y:number}[]
    
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
    abstract getCreditCoinPosition():{x:number , y:number , width:number , height:number}[]

     /**
     * @returns 座位的<玩家分數顯示框的資訊(座標(global)/寬高)>
     * override it
     */
    abstract getPlayerTextDigitsInfoData():{x:number , y:number , width:number , height:number}[]
    

     /**
     * override it
     * @returns 取得所有cannonMount相關資訊(座標/寬高)
     */
    abstract getCannonMountPositions():{[key:string]:{x:number,y:number,width:number,height:number}}[]
    

    /**
     * 旋轉前準備(中心座標的偏移之類的--上下位置會有不同)
     * @param tableId 1-4
     */
    abstract setPlayerInfoCoordinate(tableId:number):void

    abstract afterCoordinatesChange(tableId:number):void



    //=======cannon===================================================================

    //========menu=====================================================================
    //--取得其他必要menu的座標資料

    abstract getMenuPositions():{[key:string]:{x:number,y:number,width:number,height:number}}
    //========menu=====================================================================


    //========lobby==========================================================================

    protected abstract lobbySetPlayerRoom(value:EventSendObject):void

    protected abstract lobbySetPlayerRoomExit(value:EventSendObject):void

    protected abstract createLobby(o:string[] , userID:string):void
    
    public checkLobbyStatus():boolean
    {
       
       let f:boolean=true;
       if(this._gameLobbyGui==null)
       {
          f=false;
       }
       
       return f;
       //---因為第三代是等取得loginbysid後再create lobby(泰文換到爽的版本,不需要直接建立lobby)
    }
    
    //--這邊要改成protected--因為由server 回call來關閉?20230927
    public removeLobby():void
    {
        this._gameLobbyGui.off(GUIEvent.SET_PLAYER_ROOM,this.guiEventHandler);
        
        this._gameLobbyGui.off(GUIEvent.SET_PLAYER_ROOM_EXIT,this.guiEventHandler);
        
        this._gameLobbyGui.remove();
        
        this.removeClassById(this._gameLobbyGui.name);
        
        this._gameLobbyGui=null;
    }


    //========lobby==========================================================================
    
    //========creditExchange panel===========================================================
    protected abstract creditExchangeEnterGame(value:EventSendObject):void

    protected abstract banlaceExchange():void
    
    protected abstract openCreditExchange():void
    
    //protected abstract setCreditExchangePanelActive(value:boolean):void
    //{
        //this._creditExchange.active=value;
    //}

    protected abstract checkExChangeShow():boolean
    
    //========creditExchange panel===========================================================


}