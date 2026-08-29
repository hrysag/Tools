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



export class Bomb extends Component
{
    private _animationTop:Animation; 
    
    private _animationInsideEffect:Animation;
    
    constructor()
    {
        super();
    }

    protected onLoad():void
    {
        
        this._animationTop=this.node.getComponent(SkeletalAnimation);

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

export class GiftBombAniEffect extends EventTarget
{
    private _scene:Scene;

    private _aryBombs:Node[];

    private _prefabId:string;

    private _containerNode:Node;

    private _canvasCameraFx:CameraComponent;

    private _afterAnimationDataId:number;

    private _maximumBomb:number;

    constructor(...args)
    {
        
        super();

        this._aryBombs=[];

        this._scene=args[0].scene;

        this._containerNode=args[0].container;

        this._prefabId=args[0].prefabId;

        this._afterAnimationDataId=0;

        this._maximumBomb=0;

        this._canvasCameraFx=find(args[0].cameraId).getComponent(CameraComponent);

        log('check_giftBombNode',args[0]);
        
        /*
        let canvasCamera2d=find(args[0].cameraId).getComponent(CameraComponent);

        let testNode=instantiate(LoadingResManager.getInstance().getPrefab(this._prefabId));
        
        testNode.addComponent(Bomb);

        this._scene.addChild(testNode);

        //--機掰就因為這台攝影機放在canvas下面所以要這樣轉出座標..

        let testwpos=this._containerNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0,0,0));

        let scpos=canvasCamera2d.worldToScreen(testwpos);

        let localpos=canvasCamera2d.screenToWorld(scpos);

        log('wtfFFFFFF',localpos);

        testNode.setPosition(localpos);


        TweenMax.to({},2,
        {
           onComplete:()=>
           {
            testNode.getComponent(Bomb).play();  
           }  
        });
        */

       

        //this._openNode=instantiate(LoadingResManager.getInstance().getPrefab(args[0].other.prefabId));
    
   
    }



    public showBomb(data:any):void
    {
        this._afterAnimationDataId=data.id;

        //--第一個會挑掉(炸彈本身要炸別的效果)
        let pos:Vec3[]=this.getPosData(data.chainFishDatas);

        let len:number=pos.length;

        this._maximumBomb=len;

        let wpos:Vec3;

        let spos:Vec3;

        let localpos:Vec3;

        let bombEffect:Bomb;

        for(let i:number=0;i<len;i++)
        {
            let BombNode=instantiate(LoadingResManager.getInstance().getPrefab(this._prefabId));
        
            bombEffect=BombNode.addComponent(Bomb);
    
            //this._scene.addChild(BombNode);

            //--要去思考到這個3Dmesh到底需不需要執行相關的操作(射線之類的..放到2d層他將會失去這些功能)
            this._containerNode.addChild(BombNode);

            //wpos=this._containerNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0,0,0));
            //--送進來的fish座標已經是canvas 下的world positions
            wpos=pos[i];
            
            localpos=this._containerNode.getComponent(UITransform).convertToNodeSpaceAR(wpos);
            //--機掰就因為這台攝影機放在canvas下面所以要這樣轉出座標..
            /*
            spos=this._canvasCameraFx.worldToScreen(wpos);

            localpos=this._canvasCameraFx.screenToWorld(spos);

            log('wtfFFFFFF',localpos);

            
            */
            BombNode.setPosition(localpos);

            BombNode.on(BaseEvent.COMPLETE,this.onCompleteBomb);

            this._aryBombs.push(BombNode);

            bombEffect.play();

        }

    }


    private onCompleteBomb=()=>
    {
        this._maximumBomb--;
        
        if(this._maximumBomb<=0)
        {
            //--all finish
            log('all bomb complete');

            for(let i:number=0;i<this._aryBombs.length;i++)
            {
                //this._scene.removeChild(this._aryBombs[i]);

                this._containerNode.removeChild(this._aryBombs[i]);

                this._aryBombs[i].destroy();

                this._aryBombs[i].off(BaseEvent.COMPLETE,this.onCompleteBomb);

            }

            this._aryBombs.length=0;

            this.emit(AnimationEffectEvent.COMPLETE,{
            
                type:AnimationEffectEvent.COMPLETE,
                
                sendObj:{
                    
                    id:AniEffectID.ANI_BombEffect,
    
                    afterId:this._afterAnimationDataId
                }
            
            });



        }
    }

    private getPosData(data:any[]):Vec3[]
    {
        //-{fpos:Vec3,sn:number,type:number,payoff:number}
        let pos:Vec3[]=[];

        let len:Number=data.length;

        for(let i:number=0;i<len;i++)
        {
            if(i>0)
            {
                pos.push(data[i].fpos);
            }
           
        }

        return pos;
    }


    

}