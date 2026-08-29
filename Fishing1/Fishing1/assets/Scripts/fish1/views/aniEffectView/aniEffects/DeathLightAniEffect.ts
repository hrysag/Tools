/**
 * Created by EricHuang on 2023/10/18.
 */
import { LoadingResManager } from "../../../../framework/logic/loading/LoadingResManager";
import { BaseEvent } from "../../../../framework/game/events/eventBase";
import { AniEffectID } from "../../../../framework/logic/views/aniEffectView/AniEffectDefinitions";
import {AnimationEffectEvent,EventSendObject} from '../../../../framework/game/events/eventBase';
import {Scene,instantiate,Node,Animation,AnimationClip, AnimationState, UITransform} from 'cc';
import {v3,EventTarget,Component} from 'cc';
import {SkeletalAnimation} from 'cc';
import {find} from 'cc';
import {CameraComponent} from 'cc';
import {Vec3} from 'cc';
import {log} from 'cc';



export class DeathEffect extends Component
{
    private _animationTop:Animation; 
    
    private _animationInsideEffect:Animation;
    
    constructor()
    {
        super();
    }

    protected onLoad():void
    {
        
        this._animationTop=this.node.getComponent(Animation);

        this._animationInsideEffect=this.node.children[0].getComponent(Animation);

        let topClips=this._animationTop.clips;

        topClips[0].wrapMode=AnimationClip.WrapMode.Normal; 

        this._animationTop.defaultClip=topClips[0];


        let insideClips=this._animationInsideEffect.clips;

        insideClips[0].wrapMode=AnimationClip.WrapMode.Normal; 
        
        this._animationInsideEffect.defaultClip=insideClips[0];
        
        this._animationTop.on(Animation.EventType.FINISHED,this.onComplete);
    }

    
    private onComplete=(type,state)=>
    {
        log('check_Bomb_aniComplete',type,state);

        this.node.emit(BaseEvent.COMPLETE);
    }


    public play():void
    {
        log('playBomb@@@');
        
        this._animationTop.play();

        this._animationInsideEffect.play();


    }

    public destory():void
    {
        //--fuck up
        this._animationTop.off(Animation.EventType.FINISHED,this.onComplete);

        this._animationTop.stop();

        this._animationInsideEffect.stop();

        this._animationTop.destroy();

        this._animationInsideEffect.destroy();

    }

}

export class DeathLightAniEffect extends EventTarget
{
    private _scene:Scene;

    private _aryDeathLightNodes:Node[];

    private _prefabId:string;

    private _containerNode:Node;

    private _canvasCameraFx:CameraComponent;

    private _afterAnimationDataId:number;

    private _maximumDeathLight:number;

    constructor(...args)
    {
        
        super();

        this._aryDeathLightNodes=[];

        this._scene=args[0].scene;

        this._containerNode=args[0].container;

        this._prefabId=args[0].prefabId;

        this._afterAnimationDataId=0;

        this._maximumDeathLight=0;

        this._canvasCameraFx=find(args[0].cameraId).getComponent(CameraComponent);

       
        
    
        //this._openNode=instantiate(LoadingResManager.getInstance().getPrefab(args[0].other.prefabId));
    

        //--for test---
        /*
        let node=instantiate(LoadingResManager.getInstance().getPrefab(this._prefabId));

        let ani=node.getComponent(Animation);

        let topClips=ani.clips;

        ani.defaultClip=topClips[0];


        let ani2=node.children[0].getComponent(Animation);

        let topClips2=ani2.clips;

        ani2.defaultClip=topClips2[0];

        this._containerNode.addChild(node);

        node.setPosition(v3(0,0,0));

        TweenMax.to({},2,
        {
            onComplete:()=>
            {
                ani.play();
    
                ani2.play();
            }
        })*/
        
       
        log('check_deathLightNode',args[0]);

    }


    public showDeathLight(data:any):void
    {
        //this._afterAnimationDataId=data.id;
        log();

        let pos:Vec3[]=this.getPosData(data.chainFishDatas);

        log('check_showLightningEffect_pos',pos);
        
        let len:number=pos.length;

        this._maximumDeathLight=len;
        
        let deathLightNode:Node;

        let deathLightEffect:DeathEffect;
        
        let wpos:Vec3;

        let localpos:Vec3;

        for(let i:number=0;i<len;i++)
        {

            deathLightNode=instantiate(LoadingResManager.getInstance().getPrefab(this._prefabId));
        
            deathLightEffect=deathLightNode.addComponent(DeathEffect);

            this._containerNode.addChild(deathLightNode);

            //--送進來的fish座標已經是canvas 下的world positions
            wpos=pos[i];
            
            localpos=this._containerNode.getComponent(UITransform).convertToNodeSpaceAR(wpos);
    
            deathLightNode.setPosition(localpos);

            deathLightNode.on(BaseEvent.COMPLETE,this.onCompleteBomb);

            this._aryDeathLightNodes.push(deathLightNode);

            deathLightEffect.play();

        }

        
    }


    private getPosData(data:any[]):Vec3[]
    {
        //-{fpos:Vec3,sn:number,type:number,payoff:number}
        let pos:Vec3[]=[];

        let len:Number=data.length;

        for(let i:number=0;i<len;i++)
        {
            pos.push(data[i].fpos);
        }

        return pos;
    }



   


    private onCompleteBomb=()=>
    {
        this._maximumDeathLight--;
        
        if(this._maximumDeathLight<=0)
        {
            //--all finish
            log('all deathLight complete');

            for(let i:number=0;i<this._aryDeathLightNodes.length;i++)
            {
                //this._scene.removeChild(this._aryBombs[i]);

                this._containerNode.removeChild(this._aryDeathLightNodes[i]);

                this._aryDeathLightNodes[i].destroy();

                this._aryDeathLightNodes[i].off(BaseEvent.COMPLETE,this.onCompleteBomb);

            }

            this._aryDeathLightNodes.length=0;

            /*
            this.emit(AnimationEffectEvent.COMPLETE,{
            
                type:AnimationEffectEvent.COMPLETE,
                
                sendObj:{
                    
                    id:AniEffectID.ANI_BombEffect,
    
                    afterId:this._afterAnimationDataId
                }
            
            });
            */


        }
    }

  

    

}