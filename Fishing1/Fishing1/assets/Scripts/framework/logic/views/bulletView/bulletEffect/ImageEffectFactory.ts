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
import { Sprite,SpriteFrame,Node, UITransform} from 'cc';

export class ImageEffectFactory extends BaseEffectFactory
{
    constructor()
    {
       super(BulletEffectSourceType.EFFECTSOURC_IMAGE);
    }

    //--在bullet 裡面
    public createEffect(effectInfo:EffectOption):IfEffectBase
    {
        let effect:IfEffectBase= (this._aryPoolEffects.length>0)?this._aryPoolEffects.pop():new EffectData();
        effect.id=effectInfo.id; 
        effect.strSystemId=this.strSystemId;
        //effect.effectObj=new PIXI.Sprite(effectInfo.assets[0]);
        let effectNode:Node=new Node();
        let spr:Sprite=effectNode.addComponent(Sprite);
        let UITransformComponent:UITransform=effectNode.addComponent(UITransform);
        effect.effectObj=effectNode;
        spr.spriteFrame=effectInfo.assets[0];
        effect.effectObj.name=effectInfo.id+'';
        effect.original_Width=UITransformComponent.width;
        effect.original_Height=UITransformComponent.height;
        effect.texture.push(effectInfo.assets[0]);
        return effect;

    }


    public changeEffectSource(option:ChangeEffectSourceOption):any
    {
        let r:any=null;

        if(option.baseEffect)
        {
            
            let aryTextures:SpriteFrame[]=LoadingResManager.getInstance().getSpriteFrames(option.assetsId);
            
            if(aryTextures.length==1)
            {
                (<IfEffectBase>option.baseEffect).texture=aryTextures;
                
                let uiTransform:UITransform=option.baseEffect.effectObj.getComponent(UITransform);

                option.baseEffect.original_Width=uiTransform.width;
                
                option.baseEffect.original_Height=uiTransform.height;

            }
        }

        return r;//--有資料異動要回傳effect data--
    }



}