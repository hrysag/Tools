/**
 * Created by EricHuang on 2023/10/18.
 */
import { LoadingResManager } from "../../../../framework/logic/loading/LoadingResManager";
import {Scene,instantiate,Node,Animation,AnimationClip, AnimationState} from 'cc';
import {v3} from 'cc';
import {log} from 'cc';

export class DgOpenAniEffect
{
    private _scene:Scene;
    
    private _openNode:Node;

    private _animationTop:Animation; //--控制 in/out/waitting的狀態
    
    private _animationBgEffect:Animation;//--控制bg的動態效果

    private _nowStatus:string;

    constructor(...args)
    {
       this._scene=args[0].container;
       
       this._openNode=instantiate(LoadingResManager.getInstance().getPrefab(args[0].other.prefabId));
       
       this._animationTop=this._openNode.children[0].getComponent(Animation);
        
       this._animationBgEffect=this._openNode.children[0].getChildByName('DragonOpeningDummy').getComponent(Animation);

       log('DgOpenAniEffect_check',args,this._openNode,this._animationTop);   
       
       this._animationTop.on(Animation.EventType.FINISHED,this.aniOnComplete);
       
       this._nowStatus='';
    }


    private aniOnComplete=(type,state)=>
    {
        //log('check__animationTop_Complete',type,state.name); 

        if(state.name=='in')
        {
            this._animationBgEffect.stop();

            this._nowStatus='idle';

            let aniClipTop:AnimationClip=this.getAnimationClip(this._animationTop,'idle');

            this._animationTop.defaultClip=aniClipTop;

            this._animationTop.play(aniClipTop.name);

        
        }else if(state.name=='out')
        {
            //aniClipTop=this.getAnimationClip(this._animationTop,'out');
            this._nowStatus='finish';

            this._animationTop.stop(); 

            this._scene.removeChild(this._openNode);
            
            this._openNode.active=false;

        }
   
    }

    private getAnimationClip(target:Animation,index:string):AnimationClip
    {
       let clip:AnimationClip=null;

       let clips:AnimationClip[]=target.clips;

       log('getAnimationClip',target);

       for(let i:number=0;i<clips.length;i++)
       {
          if(clips[i].name==index)
          {
            clip=clips[i];
            break;
          }
       }

       return clip;

    }
    
    

    public bossOpenInInitGame():void
    {
        this._nowStatus='in';
        
        this._scene.addChild(this._openNode);

        this._openNode.active=true;

        this._openNode.setPosition(v3(0,0,0));
        
        //--opening--
        let aniClipTop:AnimationClip=this.getAnimationClip(this._animationTop,'in');

        this._animationTop.defaultClip=aniClipTop;

        this._animationTop.play(aniClipTop.name);

        //--bg
        let aniClipBg:AnimationClip=this.getAnimationClip(this._animationBgEffect,'fishFx24Opening');

        this._animationBgEffect.defaultClip=aniClipBg;

        this._animationBgEffect.play(aniClipBg.name);

        
 

    }

    public bossWaitting():void
    {
        this._nowStatus='idle';
        
        let aniClipTop:AnimationClip=this.getAnimationClip(this._animationTop,'idle');

        this._animationTop.defaultClip=aniClipTop;

        this._animationTop.play(aniClipTop.name);
    }

    public bossOut():void
    {
        
        if(this._nowStatus=='out')
        {

            this._animationTop.stop(); 

            this._scene.removeChild(this._openNode);
            
            this._openNode.active=false;


        }else if( this._nowStatus!='finish')
        {

            this._nowStatus='out';
        
            let aniClipTop:AnimationClip=this.getAnimationClip(this._animationTop,'out');
    
            this._animationTop.defaultClip=aniClipTop;
    
            this._animationTop.play(aniClipTop.name);
    
        }
        
      
        
    }

}