/**
 * Created by EricHuang on 2023/10/20.
 */
import { LoadingResManager } from "../../../../framework/logic/loading/LoadingResManager";
import {Scene,instantiate,Node,Animation,AnimationClip, AnimationState} from 'cc';
import {v3,EventTarget} from 'cc';
import {AnimationEffectEvent,EventSendObject} from '../../../../framework/game/events/eventBase';
import {Fish1AniEffectID} from '../Fish1AniEffectDefinitions';
import {log} from 'cc';

export class DgExplosionAniEffect extends EventTarget
{
    private _scene:Scene;

    private _explosionNode:Node;

    private _animationTop:Animation;

    private _animationBottom:Animation;



    constructor(...args)
    {
        super();
        
        this._scene=args[0].container;

        this._explosionNode=instantiate(LoadingResManager.getInstance().getPrefab(args[0].other.prefabId));

        log('check_DgExplosionAniEffect_data',args,this._explosionNode);

        this._animationTop=this._explosionNode.getComponent(Animation);
        
        this._animationBottom=this._explosionNode.children[0].getComponent(Animation);
        
        this._animationTop.on(Animation.EventType.FINISHED,this.aniOnComplete);

        this._explosionNode.active=false;
    }

    private aniOnComplete=(type,state)=>
    //private onEffectAniTriggerEvt=(value:string)=>
    {
        
        //log('DgExplosionAniEffectSendEvent_');
         
        this.destory();
    }


    public playexplosion():void
    {
        log('playexplosion__EFFECT')
        
        this._scene.addChild(this._explosionNode);

        this._explosionNode.active=true;

        this._explosionNode.setPosition(v3(0,0,0));

        let clip:AnimationClip=this._animationTop.clips[0];

        this._animationTop.defaultClip=clip;

        this._animationTop.play(clip.name);

        clip=this._animationBottom.clips[0];

        this._animationBottom.defaultClip=clip;

        this._animationBottom.play(clip.name);

        TweenMax.to({},3,{
           onComplete:()=>
           {
                this.emit(AnimationEffectEvent.COMPLETE,{type:AnimationEffectEvent.COMPLETE,sendObj:Fish1AniEffectID.ANI_GD_EXPLOSION});
           } 
        });


    }

    public destory():void
    {
        this._animationTop.stop(); 

        this._animationBottom.stop(); 

        this._scene.removeChild(this._explosionNode);
        
        this._explosionNode.active=false;  
    }

}