/**
 * Created by EricHuang on 2023/10/05.
 */

import {MouseBehaviorClick} from './MouseBehaviorClick';
import {GameEventBase} from "../../game/events/eventBase";
import {ShootSpeedRate} from '../../game/mouseBehavior/MouseBehaviorDefinitionsBase';
import {EventTouch, input} from 'cc';
import {log} from 'cc';


export class MouseBehaviorAutoClick extends MouseBehaviorClick
{
    
    protected _tween:any;

    protected _tweenObj:any;
    

    protected _moveData:any;

    public _autoTime:number;
    
    protected _autoShoot:boolean;

    private _testTimeStemp:number;

    /**
     * 20240318--用來限制完成與暫停之間的時間差空檔
     * 就是在tweenmax剛好完成,又呼叫暫停的時候,此時的istweening=false
     */
    private _dirtyFlag:boolean;

    //--這邊被鎖住了---
    set autoShoot(value:boolean)
    {
        this._autoShoot=value;
        
        if(value)
        {
            //---open
            this._testTimeStemp=Date.now();

            this._dirtyFlag=false;

            this._tween.restart();


        }else{

            this._dirtyFlag=true;
            
            this._testTimeStemp=0;
            
            this._tween.pause();
        }

    }


    get autoShoot():boolean
    {
        return this._autoShoot;
    }



    constructor()
    {
        super();

        this._autoTime=ShootSpeedRate.SHOOTING_RATE_STAND;//---一秒7

        this._autoShoot=false;

        this._tweenObj={};

        this._testTimeStemp=0;

        this._moveData=null;

        this._dirtyFlag=false;

        //---ts lambda function 沒有自己的上下文,要執行父類別的lambda function只能這樣

        /*
        this._mouseStartHandler=this.mouseEndHandler;

        this._mouseLeaveHandler=this.mouseLeaveHandler;
        
        this._mouseEndHandler=this.mouseEndHandler;
        
        this._mouseMoveHandler=this.mouseMoveHandler;
        */

        this._tween = new TweenMax(this._tweenObj, this._autoTime, 
        {
            onComplete: () => 
            {
                if(!this._autoShoot)
                {
                    let clickObj:any={};
                    
                    let directData:boolean=false;

                    //--20230417如果計時器運作期間內,關閉定向射擊,他會打出最後一發
                    if(!this._directionShoot && this._directionPoint.x==-1 && this._directionPoint.y==-1)
                    {
                        clickObj=(this._mobilePositions!=null)?this._mobilePositions:this.getInputMousePos();
                        
                        if(clickObj)
                        {
                            clickObj.longPress=true;
                        }
                        
                        //clickObj.direction=false;
                        

                    }else{
                        
                        clickObj={endX:this._directionPoint.x,endY:this._directionPoint.y};
                        
                        clickObj.direction=true;
                        
                        directData=true;
                    }

                    if(this._lastShootForDirection)
                    {
                        this._lastShootForDirection=false;
                    
                    }else{

                        let emitTimLongPress=Date.now();

                        //log('autoShootTimeStemp',emitTimLongPress-this._testTimeStemp);
                        
                        if(emitTimLongPress-this._testTimeStemp>=this._autoTime*1000)
                        {
                            this.node.emit(GameEventBase.CLICK_SHOOT,clickObj);
                        }
                        
                       
                    }

                    if(this._strMouse2dAction=="down"  || directData)
                    {
                        //--鎖定道具在非使用的狀態下才會啟動
                        this._testTimeStemp=Date.now();

                        this._tween.restart();
                    }


                }else{

                    //log('finishAutoShoot');

                    let emitTim=Date.now();

                    //log('autoShootTimeStemp',emitTim-this._testTimeStemp);

                    if(emitTim-this._testTimeStemp>=this._autoTime*1000)
                    {
                        this.node.emit(GameEventBase.AUTO_SHOOT);
                    }


                    this._testTimeStemp=Date.now();

                    if(!this._dirtyFlag)
                    {
                        this._tween.restart();

                        //log('finishAutoShoot');
                    }

                   

                }
            }
            
        });

        this._testTimeStemp=0;

        //log('check_InitTween',TweenMax.isTweening(this._tweenObj));

        this._tween.pause();

    }

    public init():void
    {
        super.init();
    }

    public unBlockALL():void
    {
        this._block=false;

        if( this._drillblock==true && this._flagLongpress==true && this._leaveClick==false)
        {
            this._drillblock=false;
            
            this._strMouse2dAction="down";
            
            if(!TweenMax.isTweening(this._tweenObj) && !this._autoShoot)
            {
                //---鎖定道具沒有使用才會啟動
                //log("RRRRRRRRRRRRRRRRRRRRRRR");
                this._testTimeStemp=Date.now();

                this._tween.restart();    
            }

        }else if(this._drillblock==true){
            this._drillblock=false;
        }

    }

    public checkClickStatus():boolean
    {
        var value:boolean=(this._strMouse2dAction=="down" &&  this._flagLongpress)?true:false;
        return value;
    }

    public resetClickStatus():void
    {
        this._strMouse2dAction="up";

        this._flagLongpress=false;
    }

    public resetDitrectShoot():void
    {
        this._directionShoot=false;

        this._directionPoint.x=-1;

        this._directionPoint.y=-1;

        this._lastShootForDirection=true;
    }

    public getAutoUpdatStstus():boolean
    {
        return TweenMax.isTweening(this._tweenObj);
    }

    public pauseAutoShootTime():void
    {
        
        log('check_pauseAutoShootTime',TweenMax.isTweening(this._tweenObj));

        this._dirtyFlag=true;

        if(TweenMax.isTweening(this._tweenObj))
        {
            log("pause___pauseKeepShootTime");

            this._testTimeStemp=0;

            this._tween.pause();
        }
 
    }


    public reStartAutoShoot():void
    {

        log("reStartAutoShoot>>>>"+TweenMax.isTweening(this._tweenObj));

        this._dirtyFlag=false;
        
        if(!TweenMax.isTweening(this._tweenObj))
        {
            log("restart_@@@@@@@@");
            this._testTimeStemp=Date.now();

            this._tween.restart();
        }
    }





    //----玩家被斷線的情況
    public removeAutoShoot():void
    {
        log("pause___removeAutoShoot");
        this._testTimeStemp=0;

        this._tween.pause();

        TweenMax.killTweensOf(this._tweenObj);
       
    }

    //---2019/09/05--change shooting rate----
    public changeShootingrate(rate:number):void
    {
        log("changeShootingrate>>"+rate,this._autoTime);

        if(rate!=this._autoTime)
        {
            if(TweenMax.isTweening(this._tweenObj))
            {
                //---啟動鎖定道具 & 連發正在進行中
                this._testTimeStemp=0;
                
                this._tween.pause();
            }

            this._autoTime=rate;

            this._tween.duration(this._autoTime);

            this._testTimeStemp=Date.now();

            this._tween.restart();

        }

    }

    public setCrazyTime(value:boolean):void
    {

        log("pause___setCrazyTime");
        if(TweenMax.isTweening(this._tweenObj))
        {
            //---啟動鎖定道具 & 連發正在進行中
            this._testTimeStemp=0;
            
            this._tween.pause();
        }

        //--stand=0.14=1秒7,crazy=0.07=1秒14
        this._autoTime=(value)?ShootSpeedRate.SHOOTING_RATE_CRAZY:ShootSpeedRate.SHOOTING_RATE_STAND;//---一秒14
 
        this._tween.duration(this._autoTime);
       
    }


    protected mouseStartHandler(e:EventTouch):void
    {
        
        super.mouseStartHandler(e);
        //this._mouseStartHandler(e);

        if(!TweenMax.isTweening(this._tweenObj) && !this._autoShoot)
        {
            //---mouse up的時候會puase
            log('@@@_mouseDown_starTween',this._autoTime);
            this._testTimeStemp=Date.now();

            this._tween.restart();
        
            if(!this._directionShoot)
            {
                this._flagLongpress=true;
            }
           
        }
 
    }

    protected mouseLeaveHandler(e:EventTouch):void
    {
        
        if(TweenMax.isTweening(this._tweenObj) && !this._autoShoot)
        {

            if(!this._directionShoot && this._directionPoint.x==-1 && this._directionPoint.y==-1)
            {
                this._testTimeStemp=0;
                
                this._tween.pause();    
            }
            
            
            if(!this._drillblock)
            {
                this._flagLongpress=false; 
            }
                
        }
        
        super.mouseLeaveHandler(e);
        
    }

    protected mouseEndHandler(e:EventTouch):void
    {
        
        if(TweenMax.isTweening(this._tweenObj) && !this._autoShoot)
        {
            //log("mouse_up_pause");
            if(!this._directionShoot && this._directionPoint.x==-1 && this._directionPoint.y==-1)
            {
                this._testTimeStemp=0;
                
                this._tween.pause();
            }
           
            if(!this._drillblock)
            {
                this._flagLongpress=false; 
            }
        }
       
        super.mouseEndHandler(e);
    }

    protected mouseMoveHandler(e:any):void
    {
        log('mouseMoveHandler',e);
        
        this._moveData=e;

        super.mouseMoveHandler(e);
    }


    protected getInputMousePos():{endX:number,endY:number}
    {
        
        //let pos=v2(input.)

        return this.getMousePosition(this._moveData);
    }



}