/**
 * Created by EricHuang on 2023/08/15.
 */

import {BulletEffectSourceType} from '../BulletDefinitions';
import {IfEffectFactory} from '../BulletDefinitions';
import {EffectFactoryOption} from '../BulletDefinitions';
import {ImageEffectFactory} from './ImageEffectFactory';
import {McEffectFactory} from './McEffectFactory';
import {PrefabEffectFactory} from './PrefabEffectFactory';
import { LoadingResManager } from '../../../loading/LoadingResManager';
import {log} from 'cc';


export class FishBulletEffectCenter 
{

   private _mapFactorys:{[key:number]:IfEffectFactory}; 

   private static instance:FishBulletEffectCenter;


   public static getInstance():FishBulletEffectCenter
   {
       return (FishBulletEffectCenter.instance==null)?new FishBulletEffectCenter():FishBulletEffectCenter.instance;
   }
   
   constructor()
   {
       if(FishBulletEffectCenter.instance!=null)
        {
            throw new Error("please use getInstance_BulletEffectCenter");
        }

        FishBulletEffectCenter.instance=this;

        this._mapFactorys={};
   }


   public getEffectProduceFactory(value:EffectFactoryOption):IfEffectFactory
   {
       let typeId:number=-1;

       let effectFactory:IfEffectFactory=null;
    
       if(value.assetsId)
       {
          if(LoadingResManager.getInstance().getSpriteFrames(value.assetsId).length==1)
          {
                typeId=BulletEffectSourceType.EFFECTSOURC_IMAGE;

          }else if(LoadingResManager.getInstance().getSpriteFrames(value.assetsId).length>1)
          {
                typeId=BulletEffectSourceType.EFFECTSOURCE_MOVIECLIP;
          }
       
        }

        if(value.prefabId)
        {
           if(LoadingResManager.getInstance().getPrefab(value.prefabId))
           {
                typeId=BulletEffectSourceType.EFFECTSOURCE_PREFAB;
           }

        }

        if(value.effectObjType)
        {
            typeId=value.effectObjType;
        }

        log('check_factory_creator',typeId);

        if(!this._mapFactorys[typeId])
        {
            if(typeId==BulletEffectSourceType.EFFECTSOURCE_MOVIECLIP)
            {

                effectFactory=new McEffectFactory();

            }else if(typeId==BulletEffectSourceType.EFFECTSOURC_IMAGE)
            {
                effectFactory=new ImageEffectFactory(); 

            }else if(typeId==BulletEffectSourceType.EFFECTSOURCE_PREFAB)
            {
                effectFactory=new PrefabEffectFactory();

            }else if(typeId==BulletEffectSourceType.EFFECTSOURCE_GRAPHIC)
            {
                //--測試使用的,有空再做..20230815
            }

            this._mapFactorys[typeId]=effectFactory;

        }else{

            effectFactory=this._mapFactorys[typeId];
        }

        return effectFactory;
   }











}