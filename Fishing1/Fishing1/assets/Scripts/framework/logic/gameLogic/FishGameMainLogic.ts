/**
 * Created by EricHuang on 2023/10/01.
 * 射擊/自動射擊/鎖定/定向射擊
 */
import { GameMainLogicBase } from '../../game/logic/GameMainLogicBase';
import { ServerResCode, ServerSendCode } from '../../logic/connect/ConnectBaseDefinitions';
import { GameEventBase } from '../../game/events/eventBase';
import { Notifycation } from '../../abstract/mvvm/Notifycation';
import { LoadingEvent, GUIEvent } from '../../game/events/eventBase';
import { MouseBehaviorNotifycationSubbscriptionSubject } from "../evtDefinitions/EvtDefinitions";
import { GameViewMediatorUser, GameViewMediatorUserDataKey } from "./FishGameLogicDefinitions";
import { GuiNotifycationSubbscriptionSubject } from '../../game/guiCore/GuiDefinitionsBase';
import { MouseBehaviorBase } from "../../game/mouseBehavior/mouseBehaviorBase";
import { IFClickShoot, IFDirectionShoot } from "../../game/mouseBehavior/MouseBehaviorDefinitionsBase";
import { MouseBehaviorClick } from "../mouseBehavior/MouseBehaviorClick";
import { MouseBehaviorAutoClick } from "../mouseBehavior/MouseBehaviorAutoClick";
import { FishGameAutoAndLockData } from './FishGameAutoAndLockData';
import { CollisionInfo } from '../../game/collision/CollisionBase';
import { AutoAndLockEvent } from '../../game/events/eventBase';
import { Vec2, Node, find, Vec3, UITransform, v2, CameraComponent } from 'cc';
import { FishData } from '../views/fishView/FishData';
import { AREA_BOUNDARY } from "../../game/mouseBehavior/MouseBehaviorDefinitionsBase";
import { viewBind } from '../../../framework/abstract/mvvm/AbstractView';
import { fishMeshState } from '../../game/model/ModelDefinitionsBase';
import { GameUtils } from '../../utils/GameUtils';
import { SchedulableTool } from '../../abstract/mvvm/SchedulableTool';
import { i18n } from '../../utils/i18n/LanguageData';
import { director } from 'cc';
import { Scheduler, macro } from 'cc';
import {log} from 'cc';




export abstract class FishGameMainLogic extends GameMainLogicBase {
    
    @viewBind _hitFishs;

    @viewBind _roomStatus;

    @viewBind _noExchange;

    @viewBind _onCreditExchange;

    @viewBind _errorCode;//--錯誤訊息

    @viewBind _enterRoom;//--進房

    @viewBind _refundBullets;//--回收子彈

    protected _autoShootStatus: boolean;//---自動打擊

    protected _aryAutoLock: any[];//---自動射擊資料

    protected _directionTargetPoint: Vec2;//--20230207--定向射擊

    protected _enoughGunBet: boolean;//--20230504--玩家當前的餘額無法擊發當前炮分,但可以擊發較低分的炮分

    protected _isLocking: boolean;//--鎖定狀態(doubleClick)--好像沒有用到

    protected _lockModeFlag: boolean;//---確認是否進入lockmod(aim btn)

    protected _shootFlag: boolean;//--發射鎖(魚群離場-魚潮開始前這段時間上鎖)

    protected _isfreeGame: boolean;
    //---20211127--雙擊手動鎖定
    protected _manualDoubleClickLock: { fishId: number, flag: boolean };

    protected _doubleTween: any;

    protected _doubleTweenObj: any;

    protected _doubleFlag: boolean;

    protected _doubleTweenTimer: number;//----計算滑鼠雙擊的功能--這個要拿去滑鼠那邊

    protected _mouseBehavior: MouseBehaviorBase;

    protected _autoFlagBynoExchange: boolean;

    protected _fishGameAutoAndLockData: FishGameAutoAndLockData;

    protected _arySpFishType: number[];//---特殊魚種的邊界檢測

    protected _fish2DContainerNode: Node;

    protected _sceneCameraNode: Node;

    protected _canvasCameraNode: Node;

    protected _mouseContainerNode: Node;

    protected _bulletContainerNode: Node;

    protected _aryAutoUseProps: number[];//---自動使用道具列表

    protected _autoUsePropCount: number;//---自動使用道具計數器

    protected _autoUsePropsTime: number;//---自動使用道具間格時間

    protected _scheduler: Scheduler;

    protected _frozenStatus: boolean;

    protected _spBossId:number;//--20240308

    public canUpdate: boolean;

    private _playerTable: number;//--0-3

   



    constructor() {
        
        super();

        this._classId='FishGameMainLogic';

        this._shootFlag = true;//--發射鎖(魚群離場-魚潮開始前這段時間上鎖)

        this._manualDoubleClickLock = { fishId: -1, flag: false };

        this._aryAutoLock = [];

        this._arySpFishType = [];

        this._playerTable = -1;

        this._isfreeGame = false;

        this.canUpdate = false;

        this._lockModeFlag = false;

        this._enoughGunBet = false;//--這個好像也沒有用到?

        this._aryAutoUseProps = [];

        this._autoUsePropCount = 0;

        this._autoUsePropsTime = 0.6;//--sec

        this._frozenStatus = false;//--房間使用冰凍狀態

        this._spBossId=0;

        this._directionTargetPoint = v2(-1, -1);

        
    }


    public setAfterInitPlayerSeatData(table:number): void
    {
        
        this.setPlayerIndex();

        if (!this._fishGameAutoAndLockData) {
            this._fishGameAutoAndLockData = new FishGameAutoAndLockData();
        }

        //this._fishGameAutoAndLockData.on(AutoAndLockEvent.REMOVE_FISH_AIMLOCK,this.fishGameAutoAndLockDataEventHandler);

        //this._fishGameAutoAndLockData.on(AutoAndLockEvent.KILL_TARGET_BULLETS,this.fishGameAutoAndLockDataEventHandler);

        //this._fishGameAutoAndLockData.on(AutoAndLockEvent.FISH_LOCK_IS_CLEAN,this.fishGameAutoAndLockDataEventHandler);

        //--好像沒用到
        if(!this._fishGameAutoAndLockData.hasEventListener(AutoAndLockEvent.FISH_ADD_LOCK_AIM,this.fishGameAutoAndLockDataEventHandler))
        {
            this._fishGameAutoAndLockData.on(AutoAndLockEvent.FISH_ADD_LOCK_AIM, this.fishGameAutoAndLockDataEventHandler);
        }

        //this._fishGameAutoAndLockData.on(AutoAndLockEvent.UPDATE_BULLET_LOCK_TARGET,this.fishGameAutoAndLockDataEventHandler);

        if(!this._fishGameAutoAndLockData.fishNode)
        {
            this._fishGameAutoAndLockData.fishNode = this._fish2DContainerNode;
        }

        if(!this._fishGameAutoAndLockData.mouseNode)
        {
            this._fishGameAutoAndLockData.mouseNode = this._mouseContainerNode;
        }
       
        if(!this._fishGameAutoAndLockData.bulletNode)
        {
            this._fishGameAutoAndLockData.bulletNode = this._bulletContainerNode;
        }
       
        if(!this._fishGameAutoAndLockData.sceneCameraNode)
        {
            this._fishGameAutoAndLockData.sceneCameraNode = this._sceneCameraNode;
        }

        if(!this._fishGameAutoAndLockData.canvasCameraNode)
        {
            this._fishGameAutoAndLockData.canvasCameraNode = this._canvasCameraNode;
        }

        if(!this._fishGameAutoAndLockData.view)
        {
            this._fishGameAutoAndLockData.view = this;//--無言的作法
        }
       
        this.canUpdate = true;
    }



    public setPlayerIndex(): void {
        
        this._playerTable = this._viewModel['_playerTableId'];

        this._fishGameAutoAndLockData.userTableIndex = this._playerTable;
    }



    public init(): void {
        //--到時候要換掉MouseBehaviorClick,先暫時這樣2023-10-01
        //--這裡要拿去給繼承這個類別的子類別實作
        this._mouseBehavior = this._mouseContainerNode.addComponent(MouseBehaviorAutoClick);
        
        (<MouseBehaviorAutoClick>this._mouseBehavior).cameraComponentForUitransform=this._canvasCameraNode.getComponent(CameraComponent);

        log('init_mouseBehavior', this._mouseBehavior, this._viewModel['']);

        this._mouseBehavior.init();

        //--從大廳進遊戲後再開啟
        this._mouseBehavior.node.on(GameEventBase.CLICK_SHOOT, this.shootHandler);

        this._mouseBehavior.node.on(GameEventBase.AUTO_SHOOT, this.autoShootHandler);

        this._mouseBehavior.node.on(GameEventBase.BLOCK_CLICK, this.blockClickHandler);

        /**
         * 不要用constructor.name..再用Uglify處理後,因為沒辦法設定--keep-fnames
         * 所以function name會被拿掉..很雷20240328
         */

        /*
        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION, GUIEvent.AIM_SHOOT, this.guiEvtGameLogicHandler, this.constructor.name);

        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION, GUIEvent.AUTO_SHOOT, this.guiEvtGameLogicHandler, this.constructor.name);

        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.CHANG_BULLETS,this.guiEvtGameLogicHandler,this.constructor.name);
        */


        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION, GUIEvent.AIM_SHOOT, this.guiEvtGameLogicHandler, this._classId);

        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION, GUIEvent.AUTO_SHOOT, this.guiEvtGameLogicHandler, this._classId);

        Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.CHANG_BULLETS,this.guiEvtGameLogicHandler,this._classId);
       
    }

    /**
     * 以畫面中心點為0,0
     * 左邊的邊界為-gameWidth/2,右邊的邊界為gameWidth/2
     * 上面的邊界為gameheight/2,下面的邊界為-gameHeight/2
     * @param x 距離左邊的距離
     * @param y 距離下面的距離
     * @param w 距離右邊的距離
     * @param h 距離上面的距離
     */
    //public setGameBoundary(x: number, y: number, w: number, h: number): void 
    public setGameBoundary( w: number, h: number): void 
    {
        this._mouseBehavior.setBoundary(w, h);
    }

    public afterRotationPos(value:number):void
    {
        this._mouseBehavior.afterRotationPos(value);
    }

    public cleanTable():void
    {
        this._fishGameAutoAndLockData.removeAllLockData();
    }

    //---失去焦點關閉相關計時
    public loseFocusToCloseTimeStemp():void
    {
        if(this._autoShootStatus)
        {
            (<MouseBehaviorAutoClick>this._mouseBehavior).autoShoot = false;            
        }

        this._autoUsePropCount=0;
    }

    //--重回焦點後回復相關計時
    public reFocusToOpenTimeStemp():void
    {
        if(this._autoShootStatus)
        {
            (<MouseBehaviorAutoClick>this._mouseBehavior).autoShoot=true;
        }
    }


    public updateLockBullets(): void 
    {
        
        if (this._fishGameAutoAndLockData) 
        {
           let data:{bullets:number[],fishs:number[]}=this._fishGameAutoAndLockData.updateLockBullets();

           if(data.bullets.length>0)
           {
               this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_cleanMoreFishTarget,data.bullets); 
           }

           if(data.fishs.length>0)
           {
                this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_cleanLocakTargetByDeathFishs,data.fishs); 
                //--fish自己在exit/kill的時候會做掉刪去鎖定符號
           }

        }
    }

    public afterUpdateforDeate(bullets:number[]):void
    {
        if (this._fishGameAutoAndLockData) 
        {
            this._fishGameAutoAndLockData.afterUpdateforDeate(bullets);
        }
    }

    public async getData(dataKey: string, value?: any): Promise<any> {
        let returnData: any = null;

        switch (dataKey) 
        {
            
            case GameViewMediatorUserDataKey.GameLogic_setLockFishBullet:

                //--serverback 新增子彈
                let fd: FishData = this._gameMediator.getViewUserData(GameViewMediatorUser.FishView, GameViewMediatorUserDataKey.Fish_getFishById, value.lockTarget);

                if (fd) 
                {
                    
                    let isPlayer: boolean = (value.siteIndex == this._playerTable) ? true : false;

                    //returnData = await this._fishGameAutoAndLockData.setLockFishBullet(
                    returnData = this._fishGameAutoAndLockData.setLockFishBullet(
                        fd,
                        value.sn,
                        value.siteIndex,
                        isPlayer
                    )



                } else {

                    returnData = null;
                }

                log('check_GameLogic_getData_GameLogic_setLockFishBullet', value,returnData);


            break;


            case GameViewMediatorUserDataKey.GameLogic_afterHitRemoveLockBulletData:

                log('check_GameLogic_afterHitRemoveLockBulletData', value);
                //--這邊是只要有碰撞就會送進來......
                this._fishGameAutoAndLockData.afterHitRemoveLockBulletData(value);


            break;

            case GameViewMediatorUserDataKey.GameLogic_blockALL:

                (<MouseBehaviorAutoClick>this._mouseBehavior).blockALL();

            break; 
            
            
            case GameViewMediatorUserDataKey.GameLogic_unBlockALL:

                (<MouseBehaviorAutoClick>this._mouseBehavior).unBlockALL();
            break;

            case GameViewMediatorUserDataKey.GameLogic_cleanManualLock:

                log('check_GameLogic_GameLogic_cleanManualLock', value);

                this.cleanManualLock(value);
            break;


            


        }

        return returnData;
    }


    protected fishGameAutoAndLockDataEventHandler = (e) => {
        log('check_fishGameAutoAndLockDataEventHandler', e, e.sendObj);

        switch (e.type) {
            case AutoAndLockEvent.FISH_ADD_LOCK_AIM://--這個好像沒用到


                break;

            /*
            case AutoAndLockEvent.UPDATE_BULLET_LOCK_TARGET:

            this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_resetEndPositionAndFishTargetId,e.sendObj);

            break;


            case AutoAndLockEvent.REMOVE_FISH_AIMLOCK:
             
            this._gameMediator.getViewUserData(GameViewMediatorUser.FishView,GameViewMediatorUserDataKey.Fish_removeFishAimLock); 

            break;
            */

        }
    }

    //---箭頭函式不能用super來overrride

    protected modeleChangeHandler = (sub, value) => {
        this.processModelData(sub, value);
    }


    protected processModelData(sub, value): void 
    {
        log('gameLogic__processModelData', value);


        switch (sub) {
            
            case '_hitFishs':
                //-value[0]
                
                let killData = value[0];

                this._fishGameAutoAndLockData.hitFish([killData.bsn]);

                if (killData.fish.iskill) 
                {
                    this._fishGameAutoAndLockData.removeLockFishData(killData.fish.sn);
                    
                    this.cleanManualLock(killData.fish.sn);

                }

            break;

            case '_roomStatus':
                /**
                 *  ps狀態代碼資訊
                    0=正常/一般狀態,
                    1=冰凍,
                    2=金龍來襲,
                    3=金龍死亡(禁止進房)
                */
                //--鎖定的魚群的資料刪除要在fish/bullet裡面做(拿掉準星/移除子彈)
                if (value[0].status == 0) 
                {
                    this._frozenStatus = false;
                    //--這邊可能要改成魚群的進退場(轉場)
                    //this._fishGameAutoAndLockData?.removeAllLockData();
                    //--刪掉boss的鎖定即可--to do 20240307
                    //--removeAllLockDatabyRoomStatuChange這個方法要檢查,後續被清掉的子彈該何去何從?--to do 20240307
                    //this.removeAllLockDatabyRoomStatuChange();
                    if(this._spBossId>0)
                    {
                        this.removeAllLockDatabyRoomStatuChangeBosssTarget(this._spBossId);

                        this._spBossId=0;
                    }

                } else if (value[0].status == 1) 
                {
                    
                    this._frozenStatus = true;
                
                }else if(value[0].status == 2)
                {
                    this.removeAllLockDatabyRoomStatuChange();
                }

                //-
            break;


            case '_enterRoom':

            log('firstTime_enterRoom');
            (<MouseBehaviorAutoClick>this._mouseBehavior).setCreditToClickArea(0);

            break;


            case '_onCreditExchange':

                //--ps如果是開0分的話server他不會回-20240221
                //--開洗分回來
                if(value[0])
                {
                    //log('logic__onCreditExchange',this._viewModel['_exchangePlayerCredit']);

                    //--因為第一次如果直接不換分進入遊戲,他會沒有相關的資料
                    if(this._viewModel['_exchangePlayerCredit'])
                    {
                        (<MouseBehaviorAutoClick>this._mouseBehavior).unBlockALL();

                        //-MSG.WAIT_EXCHANGING
                        this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView, GameViewMediatorUserDataKey.Gui_removeMessages,['MSG.WAIT_EXCHANGING']);
                        
                        this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView, GameViewMediatorUserDataKey.Gui_closeGameMessage,false);
    
                        let playercredit=this._viewModel['_exchangePlayerCredit'];
    
                        log('check_onCreditExchange',playercredit,playercredit.credits[this._playerTable].credit);
    
                        (<MouseBehaviorAutoClick>this._mouseBehavior).setCreditToClickArea(playercredit.credits[this._playerTable].credit);
    
                        if(this._autoShootStatus)
                        {
                            this._enoughGunBet=false;
    
                            this.reStartAutoShoot();
                        }
                    }

    
                }

            break;


            case '_errorCode':

                if(value[0].error=='MSG.BALANCE_IS_NOT_ENOUGH')
                {
                    (<MouseBehaviorAutoClick>this._mouseBehavior).unBlockALL();
                }

            break;


            case '_refundBullets':

                //let removeBulletids=this._viewModel['']
                log('Fish1GameLogicView___refundBullets',value[0]);
                this._fishGameAutoAndLockData.refundBulletDatas(value[0]);

            break;


        }

       
    }



    protected guiEvtGameLogicHandler = (sub, value) => 
    {
        log('guiEvtGameLogicHandler', sub, value);

        switch(sub)
        {
            case GUIEvent.AIM_SHOOT:

                let previousFish_aim:number=0;

                log('AIMSHOOT',value[0]);
            
                if (value[0])
                {
                    
                    if (this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView, GameViewMediatorUserDataKey.Gui_getIsAutoShoot)) 
                    {
                        log('aimShoot_true');
                        //--有autoshoot
                        this.pauseAutoShootTime();

                        //--有啟動自動使用道具
                        if (this._scheduler) 
                        {
                            this._scheduler.pauseTarget(this._schedulableTool);
                        }

                        this._aryAutoUseProps.length=0;//--清空自動使用道具

                        this._autoUsePropCount=0;//--自動使用道具計數歸0
    
                        previousFish_aim=this._fishGameAutoAndLockData.aryLockFishBullets[this._playerTable].lockFish;
                        
                        if(previousFish_aim!=0)
                        {
                            this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView, GameViewMediatorUserDataKey.Bullet_cleanAllPreviousLockTarget,previousFish_aim);
                        }
    
                        this._fishGameAutoAndLockData.cleanPlayerLockData();
    
    
                        this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView, GameViewMediatorUserDataKey.Gui_cleanAllAutoShootData);
    
                        this._autoShootStatus = false;
    
                        (<MouseBehaviorAutoClick>this._mouseBehavior).autoShoot = false;
    
                        this._aryAutoLock.length = 0;
                        //--清除瞄準圖示
                        this._gameMediator.getViewUserData(GameViewMediatorUser.FishView,GameViewMediatorUserDataKey.Fish_removeFishAimLock);
    
                    }
    
                    log('check_autoshoot_afterAim',this._mouseBehavior,(<MouseBehaviorAutoClick>this._mouseBehavior).autoShoot);
                    
                    if (!(<MouseBehaviorAutoClick>this._mouseBehavior).autoShoot) 
                    {
                        //--這邊直接會再度啟動tween
                        (<MouseBehaviorAutoClick>this._mouseBehavior).autoShoot = true;
                    }
    
                    this._autoShootStatus = true;
    
                    this._lockModeFlag = true;
    
                } else {
    
                    (<MouseBehaviorAutoClick>this._mouseBehavior).autoShoot = false;
    
                    previousFish_aim=this._fishGameAutoAndLockData.aryLockFishBullets[this._playerTable].lockFish;
    
                    log('previousFish_aim',previousFish_aim);
                        
                    if(previousFish_aim!=0)
                    {
                        this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView, GameViewMediatorUserDataKey.Bullet_cleanAllPreviousLockTarget,previousFish_aim);
                        
                        this._gameMediator.getViewUserData(GameViewMediatorUser.FishView, GameViewMediatorUserDataKey.Fish_removeFishAimLockByLockId,previousFish_aim);
    
                    }
    
                    this._fishGameAutoAndLockData.cleanPlayerLockData();
    
                    this._lockModeFlag = false;
    
                    this._autoShootStatus = false;
    
                    //this._isLocking=false;//--20190108新增
    
                    this._enoughGunBet = false;
    
                }


            break;


            case GUIEvent.AUTO_SHOOT:

            //--取value[0]={lockdata:[{id: 21, odds: '500'}],props:[1,2,3,4]}
            this._aryAutoLock = value[0].lockdata;

            this._aryAutoUseProps = value[0].props;


            log('check_setAuto',value[0]);

            

            this.pauseAutoShootTime();

            if (this._scheduler) 
            {
                
                this._scheduler.pauseTarget(this._schedulableTool);

            }

           
            //--直接清掉玩家的資料
            this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView, GameViewMediatorUserDataKey.Bullet_cleanAllPlayerLockData);

            //--清除瞄準圖示
            this._gameMediator.getViewUserData(GameViewMediatorUser.FishView,GameViewMediatorUserDataKey.Fish_removeFishAimLock);

            this._fishGameAutoAndLockData.cleanPlayerLockData(); 
            
            /*
            let previousFish:number=0;

            previousFish=this._fishGameAutoAndLockData.aryLockFishBullets[this._playerTable].lockFish;
            
            if(previousFish!=0)
            {
                this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView, GameViewMediatorUserDataKey.Bullet_cleanAllPreviousLockTarget,previousFish);

                this._gameMediator.getViewUserData(GameViewMediatorUser.FishView, GameViewMediatorUserDataKey.Fish_removeFishAimLockByLockId,previousFish);
            }*/




            if (this._aryAutoLock.length > 0) 
            {
                if ((<MouseBehaviorAutoClick>this._mouseBehavior).directionShoot) 
                {
                    //--啟動鎖定擊關閉定向射擊功能
                    (<MouseBehaviorAutoClick>this._mouseBehavior).resetDitrectShoot();

                    this._directionTargetPoint = v2(-1, -1);

                    //- this._gui.lockDirectionShoot(false);
                    //this._renderBase.removeEnterFrameMouse();
                    //this._renderBase.closeDirectionMouse();

                }

                if (this._lockModeFlag) 
                {
                    
                    this._lockModeFlag = false;

                    this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView, GameViewMediatorUserDataKey.Gui_locakAim, false);

                    this._manualDoubleClickLock.fishId = -1;

                    this._manualDoubleClickLock.flag = false;

                    this._autoShootStatus = false;

                    (<MouseBehaviorAutoClick>this._mouseBehavior).autoShoot = false;

                    //this.cleanAutoLockCooldown();//--裡面也是走cleanLockdDataByTable

                }

                /*
                previousFish=this._fishGameAutoAndLockData.aryLockFishBullets[this._playerTable].lockFish;
                    
                if(previousFish!=0)
                {
                    this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView, GameViewMediatorUserDataKey.Bullet_cleanAllPreviousLockTarget,previousFish);

                    this._gameMediator.getViewUserData(GameViewMediatorUser.FishView, GameViewMediatorUserDataKey.Fish_removeFishAimLockByLockId,previousFish);
                }

                this._fishGameAutoAndLockData.cleanLockdDataByTable(this._playerTable);
                */
                this._autoShootStatus = true;

                //--gamebase的tween就會啟動了
                (<MouseBehaviorAutoClick>this._mouseBehavior).autoShoot = true;

            } else {

                
                log('this._aryAutoLock.length <0',(<MouseBehaviorAutoClick>this._mouseBehavior).directionShoot,this._lockModeFlag);
                
                if (!(<MouseBehaviorAutoClick>this._mouseBehavior).directionShoot && !this._lockModeFlag) 
                {
                    //--只有autoshot的情況
                    (<MouseBehaviorAutoClick>this._mouseBehavior).autoShoot = false;

                    this._autoShootStatus = false;

                    this._enoughGunBet = false;

                    //this._isLocking=false;--好像沒用到
                    //this._fishGameAutoAndLockData.cleanPlayerLockData();//--內容跟cleanLockdDataByTable依樣
                    /*                         
                    previousFish=this._fishGameAutoAndLockData.aryLockFishBullets[this._playerTable].lockFish;

                    if(previousFish!=0)
                    {
                        this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView, GameViewMediatorUserDataKey.Bullet_cleanAllPreviousLockTarget,previousFish);
                        
                        this._gameMediator.getViewUserData(GameViewMediatorUser.FishView, GameViewMediatorUserDataKey.Fish_removeFishAimLockByLockId,previousFish);

                    }
                    
                    this._fishGameAutoAndLockData.cleanLockdDataByTable(this._playerTable);
                    */


                } else {

                    //--定向或是鎖定啟用的情況下(因為在關閉面板時,會先暫停機制)
                    if (this._lockModeFlag) 
                    {
                        
                        this.reStartAutoShoot();

                    } else if ((<MouseBehaviorAutoClick>this._mouseBehavior).directionShoot) 
                    {
                       
                        if (this._directionTargetPoint.x != -1 && this._directionTargetPoint.y != -1) 
                        {
                            this.reStartAutoShoot();
                        }
                    }


                }

            }


            if (this._aryAutoUseProps.length > 0) 
            {
                this._autoUsePropCount=0;
                
                if (!this._scheduler && !this._schedulableTool) 
                {
                    //--註冊在direct裡面的system--當前視窗縮小他就會停了
                    this._scheduler = director.getScheduler();

                    this._schedulableTool = new SchedulableTool();

                    Scheduler.enableForTarget(this._schedulableTool);

                    this._scheduler.schedule(this.autoUsePropUpdate, this._schedulableTool, this._autoUsePropsTime, macro.REPEAT_FOREVER, 0, true);
                }

                if (this._scheduler.isTargetPaused(this._schedulableTool)) 
                {
                    this._scheduler.resumeTarget(this._schedulableTool);
                }

            }

            
            break;



            case GUIEvent.CHANG_BULLETS:

                if(this._enoughGunBet)
                {
                   if(!(<MouseBehaviorAutoClick>this._mouseBehavior).getAutoUpdatStstus() && this._autoShootStatus)
                   {
                       this._enoughGunBet=false;
                       this.reStartAutoShoot();
                   }
                }
            
            break;
        }

      
    }


    protected autoUsePropUpdate = (dt: number) => 
    {
        

        let roomStatus=this._viewModel['_roomStatus'].status;

        log('autoUsePropUpdate_',roomStatus,this._aryAutoUseProps);

        //--this._aryAutoUseProps=[1,2,3]-->道具代號
        
       /**
        PropType.PROP_CALL=1;//----召喚道具(5sec)
        PropType.PROP_FREEZE=2,//--冰凍道具(10sec) 
        PropType.PROP_CRAZY=3//--狂暴道具(10sec)
        *  ps狀態代碼資訊
            0=正常/一般狀態,
            1=冰凍,(禁止使用-召喚)
            2=金龍來襲,(禁止使用-召喚,冰凍)
            3=金龍死亡(禁止進房)
        */

        let target = this._aryAutoUseProps[this._autoUsePropCount];
        
        let originalCount = this._autoUsePropCount;

        while (true) 
        {
            if (this.isDataValid(target,roomStatus)) 
            {
                this._autoUsePropCount++;

                if (this._autoUsePropCount === this._aryAutoUseProps.length) {
                
                    this._autoUsePropCount = 0;
                }

                //log('auto_picked_prop',target);
                
                //this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView, GameViewMediatorUserDataKey.Gui_autoUseProps, this._aryAutoUseProps[this._autoUsePropCount]);
                this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView, GameViewMediatorUserDataKey.Gui_autoUseProps, target);

                break;
                //return target;
            }

            this._autoUsePropCount++;

            if (this._autoUsePropCount === this._aryAutoUseProps.length) {
                this._autoUsePropCount = 0;
            }

            // 如果一輪都沒找到合適的資料，表示沒有符合條件的資料，可以考慮返回 undefined 或拋出錯誤
            if (this._autoUsePropCount === originalCount) 
            {
                break;
                //return undefined;
            }

            target = this._aryAutoUseProps[this._autoUsePropCount];
        }
        
        /*
        if (!this._frozenStatus) 
        {
            this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView, GameViewMediatorUserDataKey.Gui_autoUseProps, this._aryAutoUseProps[this._autoUsePropCount]);
        }

        this._autoUsePropCount++;

        if (this._autoUsePropCount == this._aryAutoUseProps.length) 
        {
            this._autoUsePropCount = 0;
        }*/

    }

    private isDataValid(data: number,roomStatus:number): boolean 
    {
        if (roomStatus === 0) 
        {
            return true;

        } else if (roomStatus === 1) 
        {
            return data !== 1;

        } else if (roomStatus === 2) 
        {
            return data !== 1 && data !== 2;
        }

        return false;
    }



    protected blockClickHandler=(value)=>
    {
        //-Gui_showGameMessage
        log('check_blockClickHandler',value,'_getMatchineDetial',this._viewModel['_getMatchineDetial'],'_onCreditExchange',this._viewModel['_onCreditExchange']);
        if(!this._autoShootStatus || this._lockModeFlag)
        {
            //--沒有call玩家餘額和開洗分
            if(this._viewModel['_getMatchineDetial'] && this._viewModel['_onCreditExchange'])
            {
                if(this._viewModel['_credit']<=0)
                {
                   if(!this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView, GameViewMediatorUserDataKey.Gui_checkExChangeShow))
                   {    
                        //let message=i18n.t('MSG.NOT_ENOUGH_CREDIT');

                        let message={message:i18n.t('MSG.NOT_ENOUGH_CREDIT'),type:'MSG.NOT_ENOUGH_CREDIT'};
    
                        this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView, GameViewMediatorUserDataKey.Gui_showGameMessage,message);
    
                        this._viewModel['_getMatchineDetial']=false;
    
                        this._viewModel.sendServer
                        (
                            ServerSendCode.GetBalance,
                            null,//--(實際上不用代資料)
                            ServerResCode.Balance
                        );
                   } 
                }
            }
        }
        
        
    }


    protected autoShootHandler = (value) => 
    {
        if (!this._shootFlag) {
            return;
        }

        let rp: { pos: Vec3, reLockTarget: number, lockFishType: number } = this.checkLockIsinSide();

        //log('check_autoShootHandler_rp',rp);

        if (rp) {
            //--aim lock--
            this.shootHandler(
                {
                    endX: rp.pos.x,
                    endY: rp.pos.y,
                    reLockTarget: rp.reLockTarget,
                    lockFishType: rp.lockFishType

                });


        } else {

            //-- auto shoot--
            //---目前尚未鎖定任何魚隻,或是鎖定的魚出界了,要換鎖定目標(幫玩家挑一隻)

            //--{id: 21, odds: '500'}
            if (this._autoShootStatus && this._aryAutoLock.length > 0) 
            {
                
                let checkfish: { pos: Vec3, reLockTarget: number, lockFishType: number } = this.checkTargetAndAutoShoot();

                if (checkfish) 
                {
                    this.addFishAimTarget(checkfish.reLockTarget);

                    this.shootHandler(
                    {
                        endX: checkfish.pos.x,
                        endY: checkfish.pos.y,
                        reLockTarget: checkfish.reLockTarget,
                        lockFishType: checkfish.lockFishType

                    });

                }

            }

        }



    }

    protected removeAllLockDatabyRoomStatuChange():void
    {
        if(this._fishGameAutoAndLockData)
        {
            //this._fishGameAutoAndLockData.removeAllLockData();
            let removeLockFishData:number[]=this._fishGameAutoAndLockData.removeAllLockDataAndGetLockFishs();

            if(removeLockFishData.length>0)
            {
                this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_cleanLocakTargetByDeathFishs,removeLockFishData);
            }
        }
    }

    protected removeAllLockDatabyRoomStatuChangeBosssTarget(spBossId:number):void
    {
        if(this._fishGameAutoAndLockData)
        {
            this._fishGameAutoAndLockData.removeLockFishData(spBossId);
            
            this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_cleanLocakTargetByDeathFishs,[this._spBossId]); 
            
        }
    }

    //protected shootAndAutoShoot=(sub,value)=>
    protected shootHandler = (value) => 
    {
        /*
        if((<MouseBehaviorAutoClick>this._mouseBehavior).block)
        {
            return;
        }*/

        log('shootHandler@_click_begin', value);

        //--超出範圍會送null
        if(value)
        {
            let bulletInfo: any = {};

            bulletInfo.actionId = this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView, GameViewMediatorUserDataKey.Bullet_actionId);
    
            bulletInfo.gunCredit = this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView, GameViewMediatorUserDataKey.Bullet_gunScore);
    
            bulletInfo.weaponType = this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView, GameViewMediatorUserDataKey.Bullet_weaponType, bulletInfo.gunCredit);
    
            bulletInfo.reLockTarget = -1;
    
    
            let sendobject =
            {
                info: bulletInfo,
                endX: value.endX,
                endY: value.endY,
                isFree: this._isfreeGame
            };
    
            if (value.reLockTarget != undefined) 
            {
                
                sendobject['reLockTarget'] = value.reLockTarget;
    
                sendobject['lockFishType'] = value.lockFishType;
    
                bulletInfo.reLockTarget = value.reLockTarget;
    
            }
    
    
            log('shootHandler@_click_endAfter', value, bulletInfo);
    
            this.beforeShootCheck(sendobject);
        }

        

    }


    //---check something before shoot bullet 
    protected beforeShootCheck(sendObj: any): void {


        let s: any = sendObj;
        let fishTargetId: number;
        //let evt:GamePlayerModeEvent;

        if (this._autoShootStatus) {

            if (s.reLockTarget != undefined) {

                this.shootBeforCheck(s);
                //---dispatcher event

                //evt=new GamePlayerModeEvent(GamePlayerModeEvent.GAMEPLAYER_MODE_EVENT,GameBaseEvent.CLICK_SHOOT,false,s);

                //this.emit(GamePlayerModeEvent.GAMEPLAYER_MODE_EVENT,evt);


            } else {

                log("玩家手賤", s);

                if (s.endX != undefined && s.endY != undefined) {

                    fishTargetId = this.addLockFishAimTarget(s.endX, s.endY);
                    log('check_clickFish', fishTargetId);


                    if (fishTargetId != -1) {

                        this.pauseAutoShootTime();

                        if (this._manualDoubleClickLock.fishId != -1) {
                            this._manualDoubleClickLock.fishId = fishTargetId;
                            this._manualDoubleClickLock.flag = true;
                        }

                        log("點選到魚", this._manualDoubleClickLock);

                        
                        //this._isLocking=true;
                        this.addFishAimTarget(fishTargetId);

                        this.reStartAutoShoot();

                        //-----市場資料需求20190604--
                        /*
                        if(this._lockModeFlag)
                        {
                           CommandStr.LockTimes+=1;
                           this.emit(GamePlayerModeEvent.GAMEPLAYER_MODE_EVENT,new GamePlayerModeEvent(GamePlayerModeEvent.GAMEPLAYER_MODE_EVENT,CommandStr.SEND_ANALYSIS_CLIENT,false,CommandStr.ANALYSIS_AUTO_LOCK)); 
                        }*/

                    } else {



                        //log("沒選到魚::::"+this._isLocking,this._manualDoubleClickLock);
                        log("沒選到魚::::", this._manualDoubleClickLock);
                        log("check>>>" + this._autoShootStatus);
                        log("_lockModeFlag>>>>" + this._lockModeFlag);



                        if (this._manualDoubleClickLock.fishId != -1 && this._manualDoubleClickLock.flag) {
                            log("@@@@@@@@@@_doubleClick_nothing@@@@@@@@@");
                            //----取消並且發射單發
                            //---點到別處
                            this._lockModeFlag = false;
                            this._manualDoubleClickLock.fishId = -1;
                            this._manualDoubleClickLock.flag = false;
                            if (this._aryAutoLock.length <= 0) {
                                this.autoLockprocess();//---true
                            }

                            this.cleanAutoLockCooldown();
                            //this._gui.lockAni(false);
                            this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView, GameViewMediatorUserDataKey.Gui_locakAim, false);
                            //---原本的單擊發射
                            log("click_enought money_____close");

                            /*
                            if(this.checkSideExChangePanels())
                            {
                                this.closeSideExChangePanels();//--close
                            }  */
                            //---dispatcher event

                            //evt=new GamePlayerModeEvent(GamePlayerModeEvent.GAMEPLAYER_MODE_EVENT,GameBaseEvent.CLICK_SHOOT,false,s);

                            //this.emit(GamePlayerModeEvent.GAMEPLAYER_MODE_EVENT,evt);




                        } else {

                            if (this._aryAutoLock.length > 0)//---auto mode
                            {
                                if (this._lockModeFlag) {
                                    this._lockModeFlag = false;
                                    this.cleanAutoLockCooldown();
                                    //this._gui.lockAni(false);
                                    this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView, GameViewMediatorUserDataKey.Gui_locakAim, false);

                                }

                            }
                        }




                    }

                }

            }

        } else {

            //--手動射擊

            let checkManualShoot: boolean = true;
            if (s.longPress != undefined && s.longPress != null) {
                if (!s.longPress) {
                    if (s.endX != undefined && s.endY != undefined) {

                        fishTargetId = this.addLockFishAimTarget(s.endX, s.endY);

                        if (s.direction != undefined) {
                            if (s.direction) {
                                if (this._directionTargetPoint.x != s.endX || this._directionTargetPoint.y != s.endY) {
                                    //--定向射擊
                                    this._directionTargetPoint.x = s.endX;
                                    this._directionTargetPoint.y = s.endY;
                                    log('direction@@@@>>>', s.endX, s.endY, this._directionTargetPoint);
                                    //--後續處理特效(瞄準的數標放到新的座標)
                                    this.removeEnterFrameMouse();
                                    this.manualSetFollowPosition(s.endX, s.endY);

                                }
                            }

                        }



                        if (!this._doubleFlag) {

                            this._doubleFlag = true;
                            //clickObj.doubleClick=false;
                            //---啟動計時器( 500-700ms)
                            //https://github.com/pixijs/pixi.js/issues/5910
                            //https://github.com/HusakYurii/pixi-additional-events
                            //https://www.pixiplayground.com/#/edit/UvM_wgJh0686y7Pdatx8C
                            //https://www.html5gamedevs.com/topic/27891-does-pixijs-support-double-tap-event-on-mobile-devices/

                            if (this._doubleTween == null) {
                                this._doubleTween = new TweenMax(this._doubleTweenObj, this._doubleTweenTimer,
                                    {
                                        onComplete: () => {
                                            this._doubleFlag = false;
                                            this._doubleTween.pause();
                                            //log("doubleclick_ENDD");
                                            if (this._manualDoubleClickLock.fishId != -1 && !this._manualDoubleClickLock.flag) {
                                                this._manualDoubleClickLock.fishId = -1;
                                                this._manualDoubleClickLock.flag = false;
                                            }
                                            //---double click
                                        }
                                    });

                                this._doubleTween.pause();
                            }

                            log("doubleclick_start");

                            //---第一次點擊(參考對照)
                            //---在時間內再度點擊~即視為double click的狀態
                            this._manualDoubleClickLock.fishId = fishTargetId;
                            this._manualDoubleClickLock.flag = false;
                            this._doubleTween.restart();

                            //--停止direction shoot


                        } else {

                            //---double click---短時間內連擊只會送double click
                            log('double click',fishTargetId);
                            //clickObj.doubleClick=true;
                            if (this._manualDoubleClickLock.fishId != -1 && !this._manualDoubleClickLock.flag) {
                                if (this._manualDoubleClickLock.fishId == fishTargetId) {
                                    checkManualShoot = false;
                                    this._manualDoubleClickLock.fishId = fishTargetId;
                                    this._manualDoubleClickLock.flag = true;

                                    this._autoShootStatus = true;
                                    this._lockModeFlag = true;

                                    this.manualDoubleClickLockProcess();



                                    //---選到魚
                                    this.pauseAutoShootTime();
                                    //this._isLocking=true;
                                    this.addFishAimTarget(fishTargetId);
                                    this.reStartAutoShoot();
                                    //this._gui.lockAni(true);
                                    this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView, GameViewMediatorUserDataKey.Gui_locakAim, true);

                                }

                            }


                        }

                    }
                }

            }




            if (checkManualShoot) {
                //---原本的單擊發射
                log("click_enought money_____close", s);

                this.shootBeforCheck(s);
                /*
                if(this.checkSideExChangePanels())
                {
                    this.closeSideExChangePanels();//--close
                } 
                
                
                //---dispatcher event
                
                evt=new GamePlayerModeEvent(GamePlayerModeEvent.GAMEPLAYER_MODE_EVENT,GameBaseEvent.CLICK_SHOOT,false,s);
                
                this.emit(GamePlayerModeEvent.GAMEPLAYER_MODE_EVENT,evt);
                */
            }



        }


    }

    protected shootBeforCheck(s: any): void {

        let shootflag: boolean = false;

        //log('shootBeforCheck', s)

        //--s裡面的info 已經有actionId
        //let str:string = (<GameSystemMode.PlayerMode>this._gamePlaySystem).getGunNowAction();

        let nowMoney: number = this._viewModel['_credit'];

        if (s.isFree) 
        {
            shootflag = true;

        } else if (nowMoney - s.info.gunCredit >= 0) 
        {

            shootflag = true;

        }

        //log("shootflag>>>",shootflag);
        /**
         * actionId: "BulletImage_0_0"
            endX: 1021.0532823741007
            endY: 575.2863084532374
            gunCredit: 5
            */

        // if (this._gameViewModel.getCredit() - this._gameViewModel.getCannonMoney(str) >= 0)
        if (shootflag) {


            if (this._autoFlagBynoExchange) {
                this._autoFlagBynoExchange = false;

                //this._viewModel.setModelData('_strErrorCode', '');
            }


            let strLockTarget: number = -1;

            //let useProp:number=0;

            if (s.reLockTarget != undefined) {
                strLockTarget = s.reLockTarget;
                //useProp=1;---20231027鎖定現在拔除道具改為常規功能
            }

            /**
             *  ---server 回送我這邊包裝出去的資料
             *  endX:data.si.x,
                endY:data.si.y,
                actionId:data.si.a,
                lockTarget:data.si.l,
                prop:data.si.p,
                isCrazy:data.si.c
             */
            //--實際內容要再修改

            let sendData = this.getShootData(s);


            if (strLockTarget != -1) {
                sendData['l'] = strLockTarget;
            }

            log('check_FishGameLogic_playerIndex', this._viewModel['_playerTableId'], s.info, strLockTarget, sendData);

            this.sendRecordData({data:sendData,lockMode:this._lockModeFlag});

            this._viewModel.sendServer(ServerSendCode.ShootBullet, sendData, ServerResCode.ShootBullet);


        } else {
            
            //--錢不夠的後續處理
            //--關閉面板的狀態下
            if(this._viewModel['_getMatchineDetial'])
            {

                if(! this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView,GameViewMediatorUserDataKey.Gui_checkExChangeShow))
                {
                    //---關閉面板狀態
                    //--20240129--目前沒有一次換到爽的體系,所以是不會進來這裡
                    if(this._viewModel['_noExchange'])
                    {
                        //--換分直接換到完的模式
                        if(!this._autoFlagBynoExchange)
                        {
                            let closeErrorMsg={type:'connectClose',code:-1,error:'MSG.NOT_ENOUGH_CREDIT'};
                            this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView,GameViewMediatorUserDataKey.Gui_showAlert,closeErrorMsg);
                        }
                        
                    
                    }else{
                        
                        //--一般模式
                        if(this._autoShootStatus)
                        {
                            //--自動模式
                            this.pauseAutoShootTime();

                        
                        }else{
                            //--手動模式
                            if(this.checkClickStatus())
                            {
                                //--手動連續打擊的狀態
                                this.resetClickStatus();
                            }
                        }


                        //let messageData=i18n.t('MSG.NOT_ENOUGH_CREDIT');

                        let messageData={message:i18n.t('MSG.NOT_ENOUGH_CREDIT'),type:'MSG.NOT_ENOUGH_CREDIT'};

                        this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView,GameViewMediatorUserDataKey.Gui_showGameMessage,messageData);

                        this._viewModel['_getMatchineDetial']=false;

                        TweenMax.to({},0.5,
                        {
                            onComplete:()=>
                            {
                               
                                //--這裡只是拿機台的資料getmatchingdetail,不是exchange
                                //messageData={message:i18n.t('MSG.WAIT_EXCHANGING'),type:'MSG.WAIT_EXCHANGING'};
                                //this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView,GameViewMediatorUserDataKey.Gui_showGameMessage,messageData);

                                this._viewModel.sendServer
                                (
                                ServerSendCode.GetBalance,
                                null,//--(實際上不用代資料)
                                ServerResCode.Balance
                                );
                            }
                        }); 
                        //---show gamemessage   

                    }
                }



            }
            
            
        }
    }


    //----mouseGameBase相關處理--------
    /*
    protected isIFAutoShoot(obj: any): obj is IFAutoShoot {
        return obj !== undefined && obj._autoShoot !== undefined;
    }*/

    protected autoLockprocess(): void {
        this._autoShootStatus = false;
        //this._isLocking=false;//--20190108新增

        if (this._mouseBehavior instanceof MouseBehaviorAutoClick) {

            (<MouseBehaviorAutoClick>this._mouseBehavior).autoShoot = false;
        }


    }

    protected manualDoubleClickLockProcess(): void {

        if (this._mouseBehavior instanceof MouseBehaviorAutoClick) {
            (<MouseBehaviorAutoClick>this._mouseBehavior).autoShoot = true;

        }



        if (this._mouseBehavior instanceof MouseBehaviorAutoClick) {
            //---取消定向射擊

            (<MouseBehaviorAutoClick>this._mouseBehavior).resetDitrectShoot();
            this._directionTargetPoint.x = -1;
            this._directionTargetPoint.y = -1;
            //this._gui.lockDirectionShoot(false);
            this.removeEnterFrameMouse();
            this.closeDirectionMouse();
            this._enoughGunBet = false;

        }
    }

    //----mouseGameBase相關處理--------

    protected checkClickStatus(): boolean 
    {
        return (<MouseBehaviorAutoClick>this._mouseBehavior).checkClickStatus();
    }

    protected resetClickStatus():void 
    {
        return (<MouseBehaviorAutoClick>this._mouseBehavior).resetClickStatus();
    }


    //--自動打擊用的
    protected pauseAutoShootTime(): void 
    {
        (<MouseBehaviorAutoClick>this._mouseBehavior).pauseAutoShootTime();
    }

    protected reStartAutoShoot(): void 
    {
        //this._gameBase.reStartAutoShoot();---待補
        (<MouseBehaviorAutoClick>this._mouseBehavior).reStartAutoShoot();
    }

    //--定向射擊用的
    protected removeEnterFrameMouse(): void 
    {
        /*
        this._showAnimationSystem.executeAnimation({
            type:CommandStr.ANI_Cid_FollowAimTargetEffectEffect,
            fun:CommandStr.ANI_FollowAimTargetEffect_removeEnterTarget
        });
        */
    }

    //--定向射擊用的
    protected closeDirectionMouse(): void {
        /*
        this._showAnimationSystem.executeAnimation({
            type:CommandStr.ANI_Cid_FollowAimTargetEffectEffect,
            fun:CommandStr.ANI_FollowAimTargetEffect_Close
        });
        */
    }

    //--定向射擊用的
    protected manualSetFollowPosition(x: number, y: number): void 
    {
        /*
        this._showAnimationSystem.executeAnimation({
            type:CommandStr.ANI_Cid_FollowAimTargetEffectEffect,
            fun:CommandStr.ANI_FollowAimTargetEffect_ManualSetPosition,
            other:
            {
                endX:x,
                endY:y
            }
        });
        */
    }

    //---移除前一個鎖定的魚種,並且清空子彈(玩家本身用的)
    /**
     * 
     * @param value fsih id
     */
    protected addFishAimTarget(value: number): void 
    {

        let previousFish:number=this._fishGameAutoAndLockData.addFishAimTarget(value);

        //--20231212
        //--這邊的fishID要寫進去
        //--子彈要回去bullet system刪掉,fishGameAutoAndLockData裡面只是刪掉編號
        if(previousFish!=0)
        {
            this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_cleanAllPreviousLockTarget,previousFish);
        }
        
        this._gameMediator.getViewUserData(GameViewMediatorUser.FishView, GameViewMediatorUserDataKey.Fish_addFishAimLock,
        {
            fid: value,
            isPlayer: true,
            //index:this._viewModel['_playerTableId']
            index: this._playerTable
        });


    }

    protected cleanAutoLockCooldown(): void {
        log("cleanAutoLockCooldown");
        /*
        this._isLocking=false;
        var ary:any[]=this._renderBase.aryLockFishBullets;
        this._renderBase.removeLockFishData(ary[this._playerTable-1].lockFish);
        this.lockColdDownReady(this._playerTable);
        */
        /**
        * 舊版是gameplayerMode會call cleanAutoLockCooldown,裡面再call removeLockFishData
        * 新版直接call cleanLockdDataByTable送入玩家自己的桌號,
        * lockColdDownReady做的事情跟cleanLockdDataByTable一樣,刪除資料拔除子彈資料和魚網資料
        * 所以就直接在cleanLockdDataByTable做完就好
        * 這樣就不用在拿一次子彈 
        */

        //--會打出事件要回過頭來刪除魚支顯示面的資料和子彈的的實體紀錄資料
        //this._fishGameAutoAndLockData.cleanLockdDataByTable(this._viewModel['_playerTableId']);
        let previousFish:number=this._fishGameAutoAndLockData.aryLockFishBullets[this._playerTable].lockFish;
                    
        if(previousFish!=0)
        {
            this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView, GameViewMediatorUserDataKey.Bullet_cleanAllPreviousLockTarget,previousFish);
        }

        this._fishGameAutoAndLockData.cleanLockdDataByTable(this._playerTable);

    }

    //--鎖定時間結束~釋放相關資料(整併到cleanAutoLockCooldown)
    /*
    protected lockColdDownReady(table:number):void
    {
        
        //this._renderBase.lockColdDownReady(table);
    }*/

    protected cleanManualLock(value: number): void {
        if (this._manualDoubleClickLock.fishId == value) {
            this._manualDoubleClickLock.fishId = -1;

            this._manualDoubleClickLock.flag = false;

            if (this._aryAutoLock.length <= 0) {
                this._autoShootStatus = false;

                if (this._mouseBehavior instanceof MouseBehaviorAutoClick) {
                    (<MouseBehaviorAutoClick>this._mouseBehavior).autoShoot = false;
                }
                //this._isLocking=false;//--20190108新增
            }

            this.cleanAutoLockCooldown();
            log('gameLogic_cleanManualLock_locakAim_');
            this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView, GameViewMediatorUserDataKey.Gui_locakAim, false);

        }
    }


    /**
     *
     * @param mouseX 滑鼠點擊座標X
     * @param mouseY 滑鼠點擊座標Y
     * 回傳字串檢核是否與選定魚隻產生碰撞,沒有碰撞及回傳空字串
     */
    protected addLockFishAimTarget(mouseX: number, mouseY: number): number {
        let returnFishId: number = -1;

        /**
         * 20231204-
         * return data={
         * fishDatas:[{fishSn: 1069, fishType: 10}]
         * }
         */

        if (this._shootFlag) {
             
            let checkPickUpData: CollisionInfo = this.checkLockFishAimTarget(mouseX, mouseY) as CollisionInfo;

            log('addLockFishAimTarget_checkPickUpData', checkPickUpData);

            if (checkPickUpData) {
                returnFishId = checkPickUpData.fishDatas[0].fishSn;
            }

        }

        log('addLockFishAimTarget__shootFlag', this._shootFlag, returnFishId);

        return returnFishId;
    }


    //--check 鎖定+自動的物件是否在區域內
    protected checkLockIsinSide(): { pos: Vec3, reLockTarget: number, lockFishType: number } {
        
        let rp: { pos: Vec3, reLockTarget: number, lockFishType: number } = null;

        //let aryFishLockData: { lockFish: number, lockBullets: number[] }[] = this._fishGameAutoAndLockData.aryLockFishBullets;

        //let fishId: number = aryFishLockData[this._playerTable].lockFish;
        let fishId: number =this._fishGameAutoAndLockData.getLockFishData(this._playerTable);

        //log('checkLockIsinSide',aryFishLockData,fishId);
        //let fish2dNode:Node=

        if (fishId != 0) {
            
            let f: FishData = this._gameMediator.getViewUserData(GameViewMediatorUser.FishView, GameViewMediatorUserDataKey.Fish_getFishById, fishId);

            if (f) 
            {
                
                if (!f.prohibit && !f.isDead) 
                {
                    rp = this.checkFishDataInBaundary(f);
                }
            }

            /*
            if(f)
            {
               let worldPos:Vec3;
               let localPos:Vec3;

               if(this._arySpFishType.indexOf(f.fishType)!=-1)
               {
                    rp=this.checkSpFishInSide(f);

               }else{
                  
                 

                  if(!f.prohibit && !f.isDead)
                  {
                        
                       //--這邊要分2D/3D魚
                        worldPos=(f.fishMeshState==fishMeshState.fish2D)?GameUtils.cover3dor2dToWorldPos(this._fish2DContainerNode,f.fishMesh.position):GameUtils.cover3dor2dToWorldPos(this._sceneCameraNode,f.fishMesh.position,this._canvasCameraNode);

                        //worldPos=this._fish2DContainerNode.getComponent(UITransform).convertToWorldSpaceAR(f.fishMesh.position); 

                        localPos=this._mouseContainerNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos);

                        if(localPos.x<=AREA_BOUNDARY.w && localPos.x>AREA_BOUNDARY.x)
                        {
                            if(localPos.y<=AREA_BOUNDARY.h && localPos.y>AREA_BOUNDARY.y)
                            {
                                //--這邊給world座標(滑鼠也是送world pos)
                                //-{pos:Vec3,reLockTarget:number,lockFishType:number}
                                rp=
                                {
                                    pos:worldPos,
                                    reLockTarget:f.id,
                                    lockFishType:f.fishType//--這個好像不會用到阿
                                }
                            }

                        }
                  }

               } 
            }*/

        }

        return rp;
    }

    //--自動選擇
    protected checkTargetAndAutoShoot(): { pos: Vec3, reLockTarget: number, lockFishType: number } 
    {
        //let rp:any=null;

        let rp: { pos: Vec3, reLockTarget: number, lockFishType: number } = null;

        if (this._autoShootStatus && this._aryAutoLock.length > 0) {
            
            let fishs: FishData[] = this._gameMediator.getViewUserData(GameViewMediatorUser.FishView, GameViewMediatorUserDataKey.Fish_getFishs);

            let len: number = this._aryAutoLock.length;

            for (let i: number = 0; i < len; i++) 
            {
                //--{id: 21, odds: '500'}
                for (let j: number = 0; j < fishs.length; j++)
                {
                    if (this._aryAutoLock[i].id == fishs[j].fishType && !fishs[j].fishIsFlash && !fishs[j].prohibit && !fishs[j].isDead) {
                        rp = this.checkFishDataInBaundary(fishs[j]);

                        if (rp) {
                            break;
                        }
                    }
                }

                if (rp != null) break;
            }
        }

        return rp;

    }

    protected checkFishDataInBaundary(f: FishData): { pos: Vec3, reLockTarget: number, lockFishType: number } {
        let rp: { pos: Vec3, reLockTarget: number, lockFishType: number } = null;

        let worldPos: Vec3;

        let localPos: Vec3;

        if (this._arySpFishType.indexOf(f.fishType) != -1) {
            rp = this.checkSpFishInSide(f);

        } else {

            //if(!f.prohibit && !f.isDead)
            //{

            //--這邊要分2D/3D魚
            worldPos = (f.fishMeshState == fishMeshState.fish2D) ? GameUtils.cover3dor2dToWorldPos(this._fish2DContainerNode, f.fishMesh.position) : GameUtils.cover3dor2dToWorldPos(this._sceneCameraNode, f.fishMesh.position, this._canvasCameraNode);

            //worldPos=this._fish2DContainerNode.getComponent(UITransform).convertToWorldSpaceAR(f.fishMesh.position); 

            localPos = this._mouseContainerNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos);

            if (localPos.x <= AREA_BOUNDARY.w && localPos.x > AREA_BOUNDARY.x) {
                if (localPos.y <= AREA_BOUNDARY.h && localPos.y > AREA_BOUNDARY.y) {
                    //--這邊給world座標(滑鼠也是送world pos)
                    //-{pos:Vec3,reLockTarget:number,lockFishType:number}
                    rp =
                    {
                        pos: worldPos,
                        reLockTarget: f.id,
                        lockFishType: f.fishType//--這個好像不會用到阿
                    }
                }

            }
            //}

        }

        return rp;

    }


    //---特殊物件的邊界檢測(autoshoot)
    protected abstract checkSpFishInSide(f: FishData): { pos: Vec3, reLockTarget: number, lockFishType: number }

    //---測試用塞入點擊座標
    protected abstract checkLockFishAimTarget(x: number, y: number): string

    protected abstract getShootData(s: any): any
    //---20240412--塞入紀錄資料
    protected abstract sendRecordData(s: any): void






}
