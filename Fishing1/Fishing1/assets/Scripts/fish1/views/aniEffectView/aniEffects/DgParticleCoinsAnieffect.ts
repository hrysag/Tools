/**
 * Created by EricHuang on 2023/10/24.
 */

import { LoadingResManager } from "../../../../framework/logic/loading/LoadingResManager";
import {GameUtils,frustumInfoData} from '../../../../framework/utils/GameUtils';
import {AnimationEffectEvent,EventSendObject} from '../../../../framework/game/events/eventBase';
import {Fish1AniEffectID} from '../Fish1AniEffectDefinitions';
import {Scene,instantiate,Node,ParticleSystem, EventTarget} from 'cc';
import {log} from 'cc';


export class DgParticleCoinsAnieffect extends EventTarget
{
    private _containerNode:Scene;

    private _allParticleContainer:Node;

    private _topParticleEmitter:ParticleSystem;

    private _bottomParticleEmitter:ParticleSystem;

    private _frustum:frustumInfoData;

    private _interval:number;

    private _tweenObj:any;

   
    constructor(...args)
    {
        
        super();

        this._containerNode=args[0].container;

        this._frustum=GameUtils.getFrustumData();

        this._allParticleContainer=instantiate(LoadingResManager.getInstance().getPrefab(args[0].other.prefabId));

        this._topParticleEmitter=this._allParticleContainer.getComponent(ParticleSystem);
        
        this._bottomParticleEmitter=this._allParticleContainer.children[0].getComponent(ParticleSystem);

        //this._topParticleEmitter.node.on(ParticleSystem.Ev);
        

        log('check_DgParticleCoinsAnieffect',args[0],this._allParticleContainer,this._topParticleEmitter,this._bottomParticleEmitter); 

        //this._containerNode.addChild(this._allParticleContainer);

        this._allParticleContainer.setPosition(0,this._frustum.topPoint);

        this._allParticleContainer.active=false;
      
        this._interval=null;
        
        this._tweenObj={};

    }


    private checkParticleCount=()=>
    {
        //-ParticleCount=0播放完畢...哀.超爛
        if(this._topParticleEmitter.getParticleCount()==0 && this._bottomParticleEmitter.getParticleCount()==0)
        {
            window.clearInterval(this._interval);

            this._interval=null;
            
            //log('check_DgParticleCoinsAnieffect_finish!!!!',this._interval);

            this.destory();

            this.emit(AnimationEffectEvent.COMPLETE,{type:AnimationEffectEvent.COMPLETE,sendObj:Fish1AniEffectID.ANI_GD_KILL_PARTICLE_COINS});
        }
    }

    private destory():void
    {
        this._topParticleEmitter.stop();

        this._bottomParticleEmitter.stop();

        this._topParticleEmitter.clear();

        this._topParticleEmitter.stopEmitting();

        this._bottomParticleEmitter.clear();

        this._bottomParticleEmitter.stopEmitting();

        this._containerNode.removeChild(this._allParticleContainer);

        this._allParticleContainer.active=false;

    } 

    public showParticleCoins():void
    {
       
        if(TweenMax.isTweening(this._tweenObj))
        {
            TweenMax.killTweensOf(this._tweenObj);

            this.destory();
        
        }else if(this._interval!=null)
        {
            window.clearInterval(this._interval);

            this._interval=null;

            this.destory();
        }

        this._containerNode.addChild(this._allParticleContainer);

        this._allParticleContainer.active=true;//--這行爆掉

        
        this._topParticleEmitter.play();

        this._bottomParticleEmitter.play();

        TweenMax.to(this._tweenObj,2.5,
        {
            onComplete:()=>
            {
                this._interval=window.setInterval(this.checkParticleCount,16);
            }
        });

       
    }

    







}