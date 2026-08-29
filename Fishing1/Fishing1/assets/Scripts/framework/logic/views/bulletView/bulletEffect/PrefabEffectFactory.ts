/**
 * Created by EricHuang on 2023/08/15.
 */
import {BaseEffectFactory} from './BasicBulletEffectData';
import {EffectData} from './BasicBulletEffectData';
import {BulletEffectSourceType} from '../BulletDefinitions';
import {IfEffectBase} from '../BulletDefinitions';
import {EffectOption} from '../BulletDefinitions';
import {ChangeEffectSourceOption} from '../BulletDefinitions';
import {instantiate, UITransform,Sprite, SpriteFrame,Layers,v2} from 'cc';
import { LoadingResManager } from '../../../loading/LoadingResManager';
import {log} from 'cc';

export class PrefabEffectFactory extends BaseEffectFactory
{

    constructor()
    {
       super(BulletEffectSourceType.EFFECTSOURCE_PREFAB);
    }


    public createEffect(effectInfo:EffectOption):IfEffectBase
    {
        
        let effect:IfEffectBase= (this._aryPoolEffects.length>0)?this._aryPoolEffects.pop():new EffectData();
    
        effect.id=effectInfo.id; 
        
        effect.strSystemId=this.strSystemId;

        effect.assetsId=effectInfo.assetsId;//--20240325

        effect.effectObj=this.getRecyclePrefab(effectInfo.assetsId);

        if(!effect.effectObj)
        {
            effect.effectObj=instantiate(effectInfo.prefab);
        }

        let spr:Sprite=effect.effectObj.getComponent(Sprite);

        //--reset用的
        effect.ogSpriteFrame=spr.spriteFrame;

        effect.effectObj.layer=Layers.Enum.UI_2D;

        effect.effectObj.active=true;

        /**
         * 用來辨識是哪個東西,後綴加上_bullet用來表示是子彈
         * effectInfo.id=子彈的id(server送進來的)
         */
        effect.effectObj.name=effectInfo.id+'_bullet';
       
        let UITransformComponent:UITransform=effect.effectObj.getComponent(UITransform);

        if(!UITransformComponent)
        {
            UITransformComponent=effect.effectObj.addComponent(UITransform);
        }

        let contanSize=UITransformComponent.contentSize;

        //--reset用的
        effect.ogUiTransFormData={w:contanSize.width,h:contanSize.height,x:UITransformComponent.anchorX,y:UITransformComponent.anchorY};

        effect.original_Width=UITransformComponent.width;

        effect.original_Height=UITransformComponent.height;
        
        effect.prefab=effectInfo.prefab;

        return effect;
    } 

    //--換網子的material
    public changeEffectSource(option:ChangeEffectSourceOption):any
    {
        
        //--step1檢查prefab裡面的東西
        let targetEffect:IfEffectBase=option.baseEffect;
        
        //--換單張圖-prefab/textures/fishHunterPopup
        if(option.assetsId && option.spriteAtlas=='')
        {
           //--在檢查能不能換,不能換就要產生一個新的
           let texture:SpriteFrame=LoadingResManager.getInstance().getSpriteFrame(option.assetsId);
           
           let spr:Sprite=targetEffect.effectObj.getComponent(Sprite);
           
           if(spr)
           {
                //targetEffect.ogSpriteFrame=spr.spriteFrame;

                spr.spriteFrame=texture;
           }

        }


        if(option.assetsId && option.spriteAtlas!='')
        {
            //--在檢查能不能換,不能換就要產生一個新的
            let texture2:SpriteFrame=LoadingResManager.getInstance().getSpriteFrameFromSpriteAtlas(option.spriteAtlas,option.assetsId);
                    
            let spr2:Sprite=targetEffect.effectObj.getComponent(Sprite);
            
            log('changeEffectSource_texture',texture2,spr2,targetEffect.effectObj);
            
            if(spr2)
            {
                //targetEffect.ogSpriteFrame=spr2.spriteFrame;

                spr2.spriteFrame=texture2;
            }


        }

        //--整個prefab替換掉
        if(option.prefab)
        {
            let parent=option.baseEffect.effectObj.parent;
            parent.removeChild(option.baseEffect.effectObj);
            option.baseEffect.effectObj=instantiate(option.prefab);
            
        }

        let UITransformComponent:UITransform=option.baseEffect.effectObj.getComponent(UITransform);

        if(!UITransformComponent)
        {
            UITransformComponent=option.baseEffect.effectObj.addComponent(UITransform); 
        }

        UITransformComponent.anchorPoint=v2(0.5,0.5);

        option.baseEffect.original_Width=UITransformComponent.width;
        option.baseEffect.original_Height=UITransformComponent.height;

        
        return null;
    }

    





}