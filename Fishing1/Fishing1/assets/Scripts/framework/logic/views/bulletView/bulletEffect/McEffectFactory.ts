/**
 * Created by EricHuang on 2023/08/14.
 */
import {BaseEffectFactory} from './BasicBulletEffectData';
import {EffectData} from './BasicBulletEffectData';
import {BulletEffectSourceType} from './../BulletDefinitions';
import {IfEffectBase} from './../BulletDefinitions';
import {EffectOption} from './../BulletDefinitions';
import {ChangeEffectSourceOption} from './../BulletDefinitions';
import {LoadingResManager} from '../../../loading/LoadingResManager';
import { SpriteFrame,Node,Animation,AnimationClip, UITransform} from 'cc';

export class McEffectFactory extends BaseEffectFactory
{
    constructor()
    {
       super(BulletEffectSourceType.EFFECTSOURCE_MOVIECLIP);
    }

    public createEffect(effectInfo:EffectOption):IfEffectBase
    {
        let effect:IfEffectBase= (this._aryPoolEffects.length>0)?this._aryPoolEffects.pop():new EffectData();
        
        effect.id=effectInfo.id; 

        effect.strSystemId=this.strSystemId;

        let speed:number=1;
        //--ps 已經取完素材了
        if(effectInfo.fps)
        {
            effect.fps=effectInfo.fps;

            speed=Math.floor(((effectInfo.assets.length/effectInfo.fps)/effectInfo.assets.length)*1000);//--以毫秒為單位  
        }

        let effectNode:Node=new Node();
        
        let uiTransFormComponent:UITransform=effectNode.addComponent(UITransform);
        
        let ani:Animation=effectNode.addComponent(Animation);
        
        let clip:AnimationClip=AnimationClip.createWithSpriteFrames(effectInfo.assets,speed);
        
        clip.name=effectInfo.id+'';
        
        clip.speed=speed;
        
        clip.wrapMode=AnimationClip.WrapMode.Loop; 
        
        ani.addClip(clip);

        effect.effectObj=effectNode;
        
        effect.texture=effectInfo.assets;
        
        effect.original_Width=uiTransFormComponent.width;
        
        effect.original_Height=uiTransFormComponent.height;
        //ani.play(clip.name);
        return effect;
    }


    public changeEffectSource(option:ChangeEffectSourceOption):any
    {
        let rData:any=null;
        if(option.baseEffect)
        {
           if(option.assetsId)
           {
              let aryTextures:SpriteFrame[]=LoadingResManager.getInstance().getSpriteFrames(option.assetsId);
              

              if(aryTextures.length>0)
              {
                
                let aniComponent:Animation=option.baseEffect.effectObj.getComponent(Animation);
                
                let oldClip:AnimationClip=aniComponent.clips[0];
                
                aniComponent.stop();

                aniComponent.removeClip(oldClip);

                let speed=1;

                if(option.fps)
                {
                    option.baseEffect.fps=option.fps;

                    speed=Math.floor(((aryTextures.length/option.fps)/aryTextures.length)*1000);//--以毫秒為單位  
                }
                
                let newClip:AnimationClip=AnimationClip.createWithSpriteFrames(aryTextures,speed);
                
                newClip.name=oldClip.name;
                
                newClip.speed=speed;
                
                newClip.wrapMode=AnimationClip.WrapMode.Loop;
                
                aniComponent.addClip(newClip);
                 
                let uiTransform:UITransform=option.baseEffect.effectObj.getComponent(UITransform);
                
                option.baseEffect.texture=aryTextures;
                
                option.baseEffect.original_Width=uiTransform.width;
                
                option.baseEffect.original_Height=uiTransform.height;

              }

           }
        }
        
        return rData;
       
    }

}