/**
 * Created by EricHuang on 2023/11/14.
 */

import { GuiBasic } from '../../../../framework/game/guiCore/GuiBase';
import { GUIEvent } from '../../../../framework/game/events/eventBase';
import { GuiOption } from '../../../../framework/game/guiCore/GuiDefinitionsBase';
import {Digits} from '../../../../framework/utils/Digits';
import { LoadingResManager } from '../../../../framework/logic/loading/LoadingResManager';
import {GameUtils} from '../../../../framework/utils/GameUtils';
import {TweenMaxCocosPlugin} from '../../../../framework/utils/TweenMaxPlugin';
import {Notifycation} from '../../../../framework/abstract/mvvm/Notifycation';
import { GuiNotifycationSubbscriptionSubject } from '../../../../framework/game/guiCore/GuiDefinitionsBase';
import {AnimationClip, Button, find, Layers, UIOpacity, Vec2, Vec3} from'cc';
import {Node} from'cc';
import {Component} from'cc';
import {SpriteFrame} from'cc';
import {instantiate} from'cc';
import {Animation} from'cc';
import {Sprite} from'cc';
import {v3} from'cc';
import {v2} from'cc';
import {Size} from'cc';
import {UITransform} from'cc';
import {color} from'cc';
import {log} from 'cc';
import { PropType } from '../../../model/Fish1ModelDefinitions';
import { SoundsManager } from '../../../../framework/logic/audio/SoundsManager';



export class PropBtn extends Component
{
    public id:number;//--0=召喚,1=冰凍,2=狂暴

    public isRunning:boolean;

    public isLock:boolean;

    public ogPosition:Vec3;

    private _digits:Digits;

    private _effectDigits:Digits;

    private _animation:Animation;

    private _coldDownMask:Node;

    private _defaultColdDownTime:number;//--秒為單位

    private _amount:number;

    private _lightCount:Node;//---黃色亮點

    private _light:Node;//--黃色框框

    private _ogLightCountPos:Vec2;

    

    //--test--
    /*
    private totalTimeInSeconds:number=10;
    
    private updateIntervalInMillis:number=1000/60;

    private fillRange:number=0;
    */



    set defaultColdDownTime(value:number)
    {
        this._defaultColdDownTime=value;
        log('resetcolddownTime',this._defaultColdDownTime);
    }

    

    get defaultColdDownTime():number
    {
        return this._defaultColdDownTime;
    }
    
    constructor()
    {
        super();

        this._defaultColdDownTime=0;

        this.isRunning=false;

        this.isLock=false;

        this._amount=-1;

        this.ogPosition=null;

        
    }

    protected onLoad():void
    {
       
        this._digits=this.node.getChildByName('sprite').getChildByName('count').getChildByName('label').addComponent(Digits);
        
        this._digits.diplayLayer=Layers.Enum.UI_2D;

        let textures:SpriteFrame[]=LoadingResManager.getInstance().getSpriteFrames('num_props1_').sort(GameUtils.sortDigitsSpriteFrames);

        this._digits.textures=textures;

        this._digits.digitScale=0.9;

        this._digits.padding=1;

        //--effect digits
        this._effectDigits=this.node.getChildByName('lightCount').getChildByName('label').addComponent(Digits);
        
        this._effectDigits.node.addComponent(TweenMaxCocosPlugin);

        this._effectDigits.diplayLayer=Layers.Enum.UI_2D;

        textures=LoadingResManager.getInstance().getSpriteFrames('num_props2_').sort(GameUtils.sortDigitsSpriteFrames);

        this._effectDigits.textures=textures;

        this._effectDigits.digitScale=0.9;

        this._effectDigits.padding=1;

        /*
        this._animation=this.node.getComponent(Animation);

        let clips:AnimationClip[]=this._animation.clips;

        this._animation.defaultClip=clips[0];

        log('check_animation_data_prop',clips);
        */

        this.updatePropCount(0);

        this._coldDownMask=this.node.getChildByName('cdTime');

        this._coldDownMask.getComponent(Sprite).fillRange=0;

        this._coldDownMask.active=false;

        this._lightCount=this.node.getChildByName('lightCount');

        this._lightCount.addComponent(TweenMaxCocosPlugin);

        this._lightCount.active=false;


        this._light=this.node.getChildByName('light');

        this._light.addComponent(TweenMaxCocosPlugin);

        this._light.active=false;

        //this._ogLightCountPos=v2(this._lightCount.position.x,this._lightCount.position.y);


        log('hello_prop_gui_Component',this._coldDownMask,this._ogLightCountPos);

        //this._coldDownMask.addComponent(TweenMaxCocosPlugin);

        this.node.on(Node.EventType.TOUCH_START,this.propBtnHandler);
    }

    private propBtnHandler=(e)=>
    {
        log('check_prop_id',this.id);
        
        SoundsManager.getInstance().play('sounds/button');

        this.node.emit(GUIEvent.USE_PROP,{type:GUIEvent.USE_PROP,sendObj:this.id});
    }

    public updateColdDownTime(elapsedTimeInSeconds:number):void
    {
        
        let percentageElapsed = ((this._defaultColdDownTime - elapsedTimeInSeconds) / this._defaultColdDownTime) * 100;
       
        let value:number=percentageElapsed / 100; // 將百分比轉換為 fillRange 的值
        
        this._coldDownMask.getComponent(Sprite).fillRange=Number(value.toFixed(2));
        
        if (elapsedTimeInSeconds >= this._defaultColdDownTime) 
        {
            //log('finish colddown_propID',this.id);

            this._coldDownMask.getComponent(Sprite).fillRange=0;

            this._coldDownMask.active=false;
            //--finish
            this.isRunning=false;

            this.unLock();
            //this.isLock=false;

            this.node.emit('fihishColdDown',this.id);

        }
        
        //--test-
        //let tweenComponent=this._coldDownMask.getComponent(TweenMaxCocosPlugin);


        
        /*
        TweenMax.to(testObj,10,{
            x:10,
            onUpdateParams:[testObj],
            onUpdate:(value)=>
            {
                log('testObj_precent',value);

            }
        });
        */
        //log('check_updateTimeFrequency',1000/60);
        /*
        let elapsedTimeInSeconds: number = 0;

        let timer=window.setInterval(()=>
        {
            elapsedTimeInSeconds += this.updateIntervalInMillis / 1000;
            const percentageElapsed = (elapsedTimeInSeconds / this.totalTimeInSeconds) * 100;
            this.fillRange = percentageElapsed / 100; // 將百分比轉換為 fillRange 的值

            log('check_elapsedTimeInSeconds',elapsedTimeInSeconds);
            log(`Elapsed Time: ${elapsedTimeInSeconds.toFixed(2)} seconds`);
            log(`Fill Range: ${this.fillRange.toFixed(2)}`);
            
            if (elapsedTimeInSeconds >= this.totalTimeInSeconds) 
            {
                clearInterval(timer);
                log('Time limit reached!');
                // 可以在這裡添加您想要的其他操作
            }

        },this.updateIntervalInMillis);
        */

        /*
        TweenMax.to(tweenComponent,this._defaultColdDownTime,
        {
            fillRange:0,
            onComplete:()=>
            {
                log('coldDown is reday',this._defaultColdDownTime);

                this.isRunning=false;

                this.isLock=false;

                this.node.on(Node.EventType.MOUSE_DOWN,this.propBtnHandler);

            }
        });
        */
    }



    public canUsePropBefore():void
    {
        //--lock down
        this._coldDownMask.getComponent(Sprite).fillRange=1;

        this._coldDownMask.active=true;

        //this.node.off(Node.EventType.MOUSE_DOWN,this.propBtnHandler);

        this.isRunning=true;

        //this.isLock=true;

        this.lock();

    }

    public updatePropCount(value:number):void
    {
        log('updatePropCount_',this.id,value);
        
       

        if(this._amount!=value)
        {
            
            this._amount=value;

            this.lightTween();
            //---更新道具數量
            this._effectDigits.display(value,'center');

            this.digitsTween();

            //this._animation.play();

            this._digits.display(value,'center');
        }
    }


    private digitsTween():void
    {
        let tweenComponent=this._effectDigits.node.getComponent(TweenMaxCocosPlugin);
        
        if(this._effectDigits)
        {
            log('run_tween_prop_digits');

            let tweenComponent=this._effectDigits.node.getComponent(TweenMaxCocosPlugin);
            
            if(TweenMax.isTweening(tweenComponent))
            {
                TweenMax.killTweensOf(tweenComponent);

                this._effectDigits.node.active=false;
            }

            this._effectDigits.node.active=true;

        
            this._effectDigits.node.setScale(v3(1.5,1.5,1.5));
    
            TweenMax.to(tweenComponent,.3,
            {
                scale:1,
                onCompleteParams:[tweenComponent],
                onComplete:(value)=>
                {
                    TweenMax.to(value,.2,
                    {
                        onCompleteParams:[value],
                        onComplete:(target)=>
                        {
                            target.node.active=false;
                        }
                    });
                }
            })
        }


    }


    private lightTween():void
    {
        if(this._light)
        {
            log('run_tween_prop_btn');
            let tweenComponent=this._light.getComponent(TweenMaxCocosPlugin);
            
            if(TweenMax.isTweening(tweenComponent))
            {
                TweenMax.killTweensOf(tweenComponent);

                this._light.active=false;
            }

            this._light.active=true;

            this._light.getComponent(Sprite).color=color(255,255,255,128);
    
            this._light.setScale(v3(1.5,1.5,1.5));
    
            TweenMax.to(tweenComponent,.3,
            {
                scale:1,
                sprColorAlpha:255,
                onCompleteParams:[tweenComponent],
                onComplete:(value)=>
                {
                    TweenMax.to(value,.2,
                    {
                        onCompleteParams:[value],
                        onComplete:(target)=>
                        {
                            target.node.active=false;
                        }
                    });
                }
            })
        }


        if(this._lightCount)
        {
            log('run_tween_prop_btn');
            let tweenComponent=this._lightCount.getComponent(TweenMaxCocosPlugin);
            
            if(TweenMax.isTweening(tweenComponent))
            {
                TweenMax.killTweensOf(tweenComponent);

                this._lightCount.active=false;
            }

            this._lightCount.active=true;

            this._lightCount.getComponent(Sprite).color=color(255,255,255,128);
    
            //this._lightCount.setScale(v3(1.5,1.5,1.5));
    
            TweenMax.to(tweenComponent,.3,
            {
                //scale:1,
                sprColorAlpha:255,
                onCompleteParams:[tweenComponent],
                onComplete:(value)=>
                {
                    TweenMax.to(value,.2,
                    {
                        onCompleteParams:[value],
                        onComplete:(target)=>
                        {
                            target.node.active=false;
                        }
                    });
                }
            })
        }



      


    }

    public stopColdDown():void
    {
        /*
        let tweenComponent=this._coldDownMask.getComponent(TweenMaxCocosPlugin);
        
        if(TweenMax.isTweening(tweenComponent))
        {
            TweenMax.killTweensOf(tweenComponent);

            this._coldDownMask.getComponent(Sprite).fillRange=0;

            this.unLock();
        }*/

        //if(this.isRunning || this._coldDownMask.getComponent(Sprite).fillRange!=0)
        //{

        
        this._coldDownMask.getComponent(Sprite).fillRange=0;

        log('stopColdDown',this.id,this._coldDownMask.getComponent(Sprite));   

        this._coldDownMask.active=false;
        //--finish
        this.isRunning=false;

        this.unLock();
        //}


    }

    public lock():void
    {
        if(!this.isLock)
        {
            this.node.getComponent(Button).interactable=false;

            //this.node.off(Node.EventType.MOUSE_DOWN,this.propBtnHandler);
            this.node.off(Node.EventType.TOUCH_START,this.propBtnHandler);
    
            this.isLock=true;
        }
   
    }

    public unLock():void
    {
        if(this.isLock)
        {
            this.node.getComponent(Button).interactable=true;

            //this.node.on(Node.EventType.MOUSE_DOWN,this.propBtnHandler);
            this.node.on(Node.EventType.TOUCH_START,this.propBtnHandler);
    
            this.isLock=false;
        }
       
    }


    public getPositionData():{x:number,y:number,width:number,height:number}
    {
        log('getPositionData',this.node);
        
        let uiTransform:UITransform=this.node.getComponent(UITransform);
        
        let coinContainSizeData:Size=uiTransform.contentSize;

        let gp:Vec3=this.node.parent.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(this.ogPosition.x,this.ogPosition.y,0));

        return {x:gp.x,y:gp.y,width:coinContainSizeData.width,height:coinContainSizeData.height};

    }




}



export class Fish1PropGuiView extends GuiBasic
{
    
    //--裝載全部的GUI的node
    private _stageContainer:Node;

    private _props:Node[];

    private _defaultcdTimes:number[];

    private _ogPositions:number[];

    private _isFreeze:boolean;

    private _roomStatus:number;

    set roomStatus(value:number)
    {
       this._roomStatus=value; 
    }

    set defaultcdTimes(value:number[])
    {
        this._defaultcdTimes=value;

        this.reSetDefaultcdTime();
    }

    constructor()
    {
        super();

        this._props=[];

        this._defaultcdTimes=[];

        this._ogPositions=[];

        this._roomStatus=0;
    
    }

    /**
     * step1.
     * overrite it
     * @param value guiData before layout
    */
    public setData(value:GuiOption):void
    {
        super.setData(value);

        this._stageContainer=find(value.other.container);  
        
        this._defaultcdTimes=value.other.dcd;

    }

    /**
     * step2.
     * overrite it
     */
    public init():void
    {
        //this._defultType=[GUIEvent.BTN_MUTE,GUIEvent.BTN_EXCHANGE,GUIEvent.BTN_HISTORY,GUIEvent.BTN_HELP,GUIEvent.BTN_EXIT];
    }

    public async setLayout(): Promise<void>      
    {
        return new Promise<void>((resolve)=>
        {
            let propPrefabNode=instantiate(LoadingResManager.getInstance().getPrefab('prefab/gui/propBtns'));

            log('propPrefabNode',propPrefabNode);

            this._stageContainer.addChild(propPrefabNode);

            //let targetNodes=propPrefabNode.children;
            let targetNodes=['itemCallBtn','itemFrozenBtn','itemCrazyBtn'];

            let len:number=targetNodes.length;

            let btnNode:Node;

            let btnComponent:PropBtn;

            let ogPosition:Vec3;

            for(let i:number=0;i<len;i++)
            {
                //btnNode=targetNodes[i];
                btnNode=propPrefabNode.getChildByName(targetNodes[i]);

                btnComponent=btnNode.addComponent(PropBtn);
                
                btnComponent.id=i+1;//--PropType(PROP_CALL=1/PROP_FREEZE=2/PROP_CRAZY=3)

                btnComponent.defaultColdDownTime= this._defaultcdTimes[i];

                btnNode.on(GUIEvent.USE_PROP,this.usepropBtnHandler);

                btnNode.addComponent(TweenMaxCocosPlugin);

                ogPosition=btnNode.position;

                btnComponent.ogPosition=v3(btnNode.position.x,btnNode.position.y);

                this._ogPositions[i]=btnNode.position.x;

                btnNode.setPosition(v3(ogPosition.x+200,ogPosition.y));

                this._props[i]=btnNode;

                btnNode.on('fihishColdDown',this.coldDownFinish);

            }

            
            //---完成的時候做
            resolve();

            //--test
            /*
            TweenMax.to({},5,
            {
                onComplete:()=>
                {
                    log('check_test_finish');
                    //this._props[0].getComponent(PropBtn).updatePropCount(45);
                    //this._props[0].getComponent(PropBtn).updateColdDownTime();;
                    this.openShow();
                }
            });
            */
            

        });
    }


    public getPropMenuPositions():{[key:string]:{x:number,y:number,width:number,height:number}}
    {
        let positionData:{x:number,y:number,width:number,height:number};

        let btnComponent:PropBtn;

        let rData={};

        for(let i:number=0;i<this._props.length;i++)
        {
            btnComponent=this._props[i].getComponent(PropBtn);

            positionData=btnComponent.getPositionData();
            
            rData[btnComponent.id]=positionData;
        }

        return rData;
    }


    public checkPropIsRunning(propType:number):boolean
    {
        return this._props[propType-1].getComponent(PropBtn).isRunning;
    }


    public lockPropBtn(propType:number):void
    {
        this._props[propType-1].getComponent(PropBtn).lock();
    }

    public unLockPropBtn(propType:number):void
    {
        this._props[propType-1].getComponent(PropBtn).unLock();
    }

    public openAllProprsBtn():void
    {
        let len:number=this._props.length;
        
        for(let i:number=0;i<len;i++)
        {
            //--房間變更狀態(一般0/冰凍1/金龍來襲2/金龍死亡3)
            if(this._roomStatus!=1 && this._roomStatus!=2)
            {
                this._props[i].getComponent(PropBtn).unLock();
            }
           
        }
    }

    public closeAllPropsBtn():void
    {
        let len:number=this._props.length;
        
        for(let i:number=0;i<len;i++)
        {
            this._props[i].getComponent(PropBtn).lock();
        }
    }

    public stopColdDown(propType:number):void
    {
        log('lock_down_stopColdDown',propType);
        //--ps..陣列是從0開始
        this._props[propType-1].getComponent(PropBtn).stopColdDown();
    }

    //public usePropStartToColdDown(propType:number,time:number):void
    public updateColdDownTime(coldDownValue:{[key:number]:{time:number,timeCount:number,isRunning:boolean,isFinish:boolean}}):void
    {
        //this._props[propType].getComponent(PropBtn).updateColdDownTime(time);
        //canUsePropBefore
        //log('updateColdDownTime',coldDownValue);

        let propBtnComponent:PropBtn;
        
        for(let i in coldDownValue)
        {
            //log('check_forin',i);
            
            propBtnComponent=this._props[Number(i)-1].getComponent(PropBtn);

            /*
            if(propBtnComponent.isRunning!=coldDownValue[i].isRunning && coldDownValue[i].timeCount!=0 && !coldDownValue[i].isFinish)
            {
                propBtnComponent.canUsePropBefore();
            }*/

            if(propBtnComponent.isRunning && coldDownValue[i].timeCount!=0)
            {
                propBtnComponent.updateColdDownTime(coldDownValue[i].timeCount);
            }

            /*
            if(propBtnComponent.isRunning && coldDownValue[i].isRunning && coldDownValue[i].timeCount!=0)
            {
                propBtnComponent.updateColdDownTime(coldDownValue[i].timeCount);
            
            }else if(coldDownValue[i].timeCount!=0 && coldDownValue[i].isFinish)
            {
                propBtnComponent.updateColdDownTime(coldDownValue[i].timeCount);
            }*/ 
            
            
        }
    }

    /**
     * 
     * @param value propType=道具編號(不是陣列編號),index=座位編號
     */
    public beforeUseProp(value:{propType:number,index:number}):void
    {
        //-canUsePropBefore
        this._props[value.propType-1].getComponent(PropBtn).canUsePropBefore();
        
        if(value.propType==PropType.PROP_FREEZE)
        {
            this._isFreeze=true;

            this.lockPropBtn(PropType.PROP_CALL);
        }

    }

    //--???
    public autoUseProps(propType:number):void
    {
        if(!this._props[propType-1].getComponent(PropBtn).isLock)
        {
            Notifycation.getInstance().emit(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.USE_PROP,propType);

            //Notifycation.getInstance().emit(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.USE_PROP,e.sendObj);
            
        }
    }

    //--要確認一下server進來的資料
    /**
     * 更新背包道具
     * key=PropType(PROP_CALL/PROP_FREEZE/PROP_CRAZY)
     * time--檢查預設時間是否跟server給的cd時間是否相同
     * count=數量
     */
    public setProps(props:{[key:number]:{time:number,count:number}}):void
    {
        
        let len:number=this._props.length;
        
        let propBtnComponent:PropBtn;
        
        for(let i:number=0;i<len;i++)
        {
            propBtnComponent=this._props[i].getComponent(PropBtn);

            propBtnComponent.updatePropCount(props[i+1].count);

            if(propBtnComponent.defaultColdDownTime!=props[i+1].time)
            {
                propBtnComponent.defaultColdDownTime=props[i+1].time;
            }
        }
        
    }

    /**
     * 
     * @param propType 
     * @param dcdTime second
     */
    public setPropDefaultColdDownTime(propType:number,dcdTime:number):void
    {
        this._props[propType].getComponent(PropBtn).defaultColdDownTime=dcdTime;

    }

    public openShow():void
    {
        let len:number=this._props.length;
        
        let tweenComponent:TweenMaxCocosPlugin;

        let count:number=0;

        for(let i:number=0;i<len;i++)
        {
            tweenComponent=this._props[i].getComponent(TweenMaxCocosPlugin);
           
            TweenMax.to(tweenComponent,.7,
            {
                x:this._ogPositions[i],
                delay:i*0.08,
                ease:Bounce.easeOut,
                onComplete:()=>
                {
                    count++;

                    if(count==len)
                    {
                        //--unlockall
                        this.openAllProprsBtn();
                    }
                }
            }); 
        }
    }

    public roomToDefault():void
    {
        this._isFreeze=false;
    }

    private coldDownFinish=(e)=>
    {
        //log('coldDownFinish_check_cdReady',e);

        if(e==PropType.PROP_CALL)
        {
            if( this._isFreeze)
            {
                this._props[PropType.PROP_CALL-1].getComponent(PropBtn).lock(); 
            }

        }else if(e==PropType.PROP_FREEZE)
        {
            this._isFreeze=false;
            this._props[PropType.PROP_CALL-1].getComponent(PropBtn).unLock();
        }
    }

    //----send event
    private usepropBtnHandler=(e)=>
    {
        //-this.node.emit(GUIEvent.USE_PROP,{type:GUIEvent.USE_PROP,sendObj:this.id});
        //this.evt
        Notifycation.getInstance().emit(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.USE_PROP,e.sendObj);
    }


    private reSetDefaultcdTime():void
    {
        let len:number=this._props.length;
        
        for(let i:number=0;i<len;i++)
        {
            let btnComponent:PropBtn=this._props[i].getComponent(PropBtn);

            btnComponent.defaultColdDownTime=this._defaultcdTimes[i];

        }
    }




}