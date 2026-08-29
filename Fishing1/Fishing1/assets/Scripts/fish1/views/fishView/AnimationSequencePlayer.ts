/**
 * Created by EricHuang on 2023/9/13.
 * 控制有多組動畫的魚種播放腳本
 */
import { Animation,AnimationClip,Component, EventTarget, ParticleSystem } from "cc";
import {BaseEvent} from '../../../framework/game/events/eventBase';
import { SoundsManager } from "../../../framework/logic/audio/SoundsManager";
import {log} from 'cc';

export enum AnimationStatus
{
    start='start',//--進場
    sequence='sequence',//--要穿插播放的動作
    standby='standby',//--循環等待的動作
    end='end',//--離場
    effect='effect'//--特殊效果的動作--取消(塞在循環動作裡面即可)

}

export class AnimationSequencePlayer extends Component
{
    public _animation:Animation;

    public eventTarget:EventTarget;

    /**
     * index-->目前播放到哪了(指的是父類群下轄的序列組start,sequence,standby,end)
     */
    private _sequenceData:
    {
        start:{index:number,sequence:{keyframe:string,clip:AnimationClip,loop:number,count:number,sendEvtFrame?:number}[]},
        //--只播一次的序列
        sequence:{index:number,sequence:{keyframe:string,clip:AnimationClip,loop:number,count:number,sendEvtFrame?:number}[]},
        standby:{index:number,sequence:{keyframe:string,clip:AnimationClip,loop:number,count:number,sendEvtFrame?:number}[]},
        end:{index:number,sequence:{keyframe:string,clip:AnimationClip,loop:number,count:number,sendEvtFrame?:number}[]}
       
    };

    private _status:AnimationStatus;//--目前播放序列到哪的狀態  
    
    private _countsingleIntervalTime:number;//--個別的序列當下的持續時間
    
    private _countContinueTime:number;//--目前經過的時間
    
    private _lastTimeForSequence:number;
    
    private _interval:any;//--timer

    private _beforEndTime:number;//--結束前幾秒(意思是整個total總時間的前幾秒)
    
    private _loopWaitTime:number;//--再進行下個區間播放時,需要等待的時間
    
    private _totalScriptTime:number;//---整個表演需要的總時間

    private _isPlay:boolean;

    private _nowLoopCount:number;

    private _otherData:any;

    private _particleIsPlay:boolean;

    
    get isPlay():boolean
    {
       return this.isPlay;  
    }

    set otherData(value:any)
    {
        this._otherData=value;
        
        this._otherData.activeNode.active=true;
    }

    set beforEndTime(value:number)
    {
        this._beforEndTime=value;  
    }

    set totalScriptTime(value:number)
    {
        this._totalScriptTime=value;  
    }

    set sequenceData(value: {
        start:{index:number,sequence:{keyframe:string,clip:AnimationClip,loop:number,count:number,sendEvtFrame?:number}[]},
        //--只播一次的序列
        sequence:{index:number,sequence:{keyframe:string,clip:AnimationClip,loop:number,count:number,sendEvtFrame?:number}[]},
        standby:{index:number,sequence:{keyframe:string,clip:AnimationClip,loop:number,count:number,sendEvtFrame?:number}[]},
        end:{index:number,sequence:{keyframe:string,clip:AnimationClip,loop:number,count:number,sendEvtFrame?:number}[]}
    })
    {
        this._sequenceData=value; 

        for(let i in this._sequenceData)
        {
           
            
            for(let j of this._sequenceData[i].sequence)
            {
                
                if(j.sendEvtFrame)
                {
                    let durationInSeconds:number=j.clip.duration;//-totaltime
                    
                    let totalFrame:number=Math.floor(durationInSeconds*j.clip.frameRate);
                    
                    let triggerTime:number=j.sendEvtFrame/ totalFrame;

                    j.clip.events=
                    [
                        {
                            frame:triggerTime,

                            func:'onAniTriggerEvt',

                            params:[j.clip.name]
                        }
                    ];

                    //log('clip',j.clip,'check_totalFrame',totalFrame,'triggerTime',triggerTime);
                    //--幹你媽超爛的,要再重新指回去
                    this._animation.clips=this._animation.clips;
                }
            }
 

        }
        
       
        
    }


    constructor(/*value:Animation*/)
    {
        super();
        /*
        this.sequenceData={
            start:{index:-1,sequence:[]},
            sequence:{index:-1,sequence:[]},
            standby:{index:-1,sequence:[]},
            end:{index:-1,sequence:[]},
            effect:{index:-1,sequence:[]}
        };*/

        
        
        //---這個是限定時間內輪播的系統----

        this._beforEndTime=0;
        
        this._loopWaitTime=0;

        this._totalScriptTime=0;
        
        this._countsingleIntervalTime=0;
        
        this._countContinueTime=0;
        
        this._lastTimeForSequence=0;
        
        this._interval=null;
        
        //---這個是限定時間內輪播的系統----
        this._nowLoopCount=0;

        this._isPlay=false;

        this._otherData=null;

        this._particleIsPlay=false;

        this.eventTarget=new EventTarget();
    }

    //-https://docs.cocos.com/creator/manual/zh/animation/animation-component.html#%E5%B8%A7%E4%BA%8B%E4%BB%B6
    /**
     * 目前的frame event只支援String、Number、Boolean這三種的回傳值
     * 要把他加到乘載animation component的node上面
     */ 
    private onAniTriggerEvt=(value:string)=>
    {
        log('onAniTriggerEvt',value);

        if(value=='roar')
        {
            if(!this._particleIsPlay)
            {
                //SoundsManager.getInstance().play('sounds/dragonflame');
                
                //this._otherData.activeNode.active=true;

                SoundsManager.getInstance().play('sounds/dragonflame');

                this._particleIsPlay=true;

                (<ParticleSystem>this._otherData.particle['particleCoin']).loop=true;

                (<ParticleSystem>this._otherData.particle['particleIngot']).loop=true;

                (<ParticleSystem>this._otherData.particle['particleCoin']).play();

                (<ParticleSystem>this._otherData.particle['particleIngot']).play();



            }
            
            log('check_particle',this._otherData);
           
        }else if(value=='attack01' || value=='attack02')
        {
            //SoundsManager.getInstance().play('sounds/dragonattack');
            SoundsManager.getInstance().play('sounds/dragonattack');
            
            this.eventTarget.emit(BaseEvent.PLAY_ANI,{type:BaseEvent.PLAY_ANI,sendObj:value});
        }
    }


    public setAnimation(value:Animation):void
    {
        this._animation=value;
        
        this._animation.on(Animation.EventType.FINISHED,this.onComplete);
        
        this._animation.on(Animation.EventType.LASTFRAME,this.onLoopLast);
    }



    

    public play(status?:AnimationStatus):void
    {
        if(!status)
        {
           this._status= AnimationStatus.start;
        
        }else{
            
            this._status=status;
        }

        //--採用以時間為單位來進行腳本播放
        //--在_totalScriptTime<=0的情況採用腳本count數來播放
        if(this._totalScriptTime>0 && !this._interval)
        {
            this._interval=window.setInterval(this.timeInterval,16);
        }

        if(this._status==AnimationStatus.end)
        {
            if(this._particleIsPlay)
            {
                
                this._particleIsPlay=false;

                //(<ParticleSystem>this._otherData.particle['particleCoin']).stop();

                //(<ParticleSystem>this._otherData.particle['particleIngot']).stop();

                //(<ParticleSystem>this._otherData.particle['particleCoin']).clear();

                //(<ParticleSystem>this._otherData.particle['particleIngot']).clear();

                (<ParticleSystem>this._otherData.particle['particleCoin']).stopEmitting();

                (<ParticleSystem>this._otherData.particle['particleIngot']).stopEmitting();

                //this._otherData.activeNode.active=false;

            }
             
        }
        
        this.checkandPlay(); 
    }

    public stop():void
    {
       this._animation.stop();

       this._isPlay=false;
    }

   //--移除前銷毀
   public destory():void
   {
        this._animation.off(Animation.EventType.FINISHED,this.onComplete);
            
        this._animation.off(Animation.EventType.LASTFRAME,this.onLoopLast);
        
        if(this._interval)
        {
            window.clearInterval(this._interval); 

            this._interval=null;
        }

        if(this._otherData)
        {
            log('removeBossParticle');

            (<ParticleSystem>this._otherData.particle['particleCoin']).stop();

            (<ParticleSystem>this._otherData.particle['particleIngot']).stop();
    
            (<ParticleSystem>this._otherData.particle['particleCoin']).clear();
    
            (<ParticleSystem>this._otherData.particle['particleIngot']).clear();

            (<ParticleSystem>this._otherData.particle['particleCoin']).stopEmitting();

            (<ParticleSystem>this._otherData.particle['particleIngot']).stopEmitting();
    
            //this._otherData.activeNode.active=false;
        }

        this._particleIsPlay=false;
    
       

        this._sequenceData=null;
   }


   private checkandPlay():void
   {
        this._sequenceData[this._status].index+=1;

        let index=this._sequenceData[this._status].index;

        if(this._sequenceData[this._status].index==this._sequenceData[this._status].sequence.length)
        {
          index=this._sequenceData[this._status].index=0;
        }

        if(this._sequenceData[this._status].sequence[index].loop==-1)
        {
           //--LOOP
           this._nowLoopCount=this._sequenceData[this._status].sequence[index].count;
        }
        
        this._isPlay=true;

        let playId:string=this._sequenceData[this._status].sequence[index].clip.name;

        /*
        if(playId=='attack01' || playId=='attack02' || playId=='attack03' || playId=='attack04')
        {
            //--要塞事件..這樣太慢了20231215
            //SoundsManager.getInstance().play('sounds/dragonattack');
        
        }else if(playId=='roar')
        {
            SoundsManager.getInstance().play('sounds/dragonflame');
        }*/

        //this._animation.defaultClip=this._sequenceData[this._status].sequence[index].clip;
        //log('check_checkandPlay',this._status,index,this._sequenceData[this._status].sequence[index].clip.name);
        //this._animation.play(this._sequenceData[this._status].sequence[index].clip.name);
        this._animation.play(playId);
   }


   private onLoopLast=(type,state)=>
   {
       log('onLoopLast',type,state);

    
       this._nowLoopCount--
       
       if(this._nowLoopCount<=0)
       {
            //--待機
            this._isPlay=false;

            if(state.clip.name=='idle' && this._status==AnimationStatus.standby)
            {
                this._status=AnimationStatus.sequence;
                
                this.checkandPlay();
            
            }else if(state.clip.name=='roar' && this._status==AnimationStatus.sequence)
            {
                //--做效果結束
                if(this._particleIsPlay)
                {
                    
                    this._particleIsPlay=false;
    
                    //(<ParticleSystem>this._otherData.particle['particleCoin']).stop();
    
                    //(<ParticleSystem>this._otherData.particle['particleIngot']).stop();

                    //(<ParticleSystem>this._otherData.particle['particleCoin']).clear();
    
                    //(<ParticleSystem>this._otherData.particle['particleIngot']).clear();

                    (<ParticleSystem>this._otherData.particle['particleCoin']).stopEmitting();

                    (<ParticleSystem>this._otherData.particle['particleIngot']).stopEmitting();

                    //this._otherData.activeNode.active=false;
    
                }
                 

                this._status=AnimationStatus.sequence;

                this.checkandPlay();
            }
       }

      
   }
   
   
    private onComplete=(type,state)=>
    {
      log('check_aniComplete',type,state);

      this._isPlay=false;

      if(this._interval && this._totalScriptTime>0)
      {
        //--使用時間為單位來播放腳本
        if(this.totalScriptTime-this._countContinueTime<=this.beforEndTime)
        {
            this._status=AnimationStatus.end;

            window.clearInterval(this._interval); 
            
            this.checkandPlay(); 
        } 

      }

      if(this._status==AnimationStatus.start)
      {
         
        if(this._sequenceData[this._status].index==this._sequenceData[this._status].sequence.length-1)
        {
            //this._status=AnimationStatus.standby;
            this._status=AnimationStatus.sequence;
            
        }

        this._countsingleIntervalTime=0;

        this.checkandPlay();
 

      }else if(this._status==AnimationStatus.sequence)
      {
        //this._status=AnimationStatus.standby;
        this._status=AnimationStatus.sequence;

        this._countsingleIntervalTime=0;

        this.checkandPlay(); 
     
      }else if(this._status==AnimationStatus.standby)
      {
        if(this._interval && this._totalScriptTime>0)
        {
            if(this._countsingleIntervalTime<this._loopWaitTime)
            {
                this.checkandPlay(); 

              }else{
                   
                this._status=AnimationStatus.sequence;

                this._countsingleIntervalTime=0;

                this.checkandPlay();    
            }

        }
      }


    }


    private timeInterval=()=>
    {
        let timeDelta = (Date.now() - this._lastTimeForSequence)* 0.001
        
        this._countsingleIntervalTime+=timeDelta;
        
        this._countContinueTime+=timeDelta;
        
        this._lastTimeForSequence=Date.now();      
    }

}