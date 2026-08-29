/**
 * Created by EricHuang on 2023/08/14.
 */
import { AnimationClip, Prefab, Size, Sprite, SpriteFrame, UITransform } from 'cc';
import { Animation } from 'cc';
import { Node } from 'cc';
import { color } from 'cc';
import { v3 } from 'cc';
import { UIOpacity } from 'cc';
import { math } from 'cc';
import {IfEffectBase} from '../BulletDefinitions';
import {BulletEffectSourceType} from '../BulletDefinitions';
import {IfEffectFactory} from '../BulletDefinitions';
import {EffectOption} from '../BulletDefinitions';
import {ChangeEffectSourceOption} from '../BulletDefinitions';
import {log} from 'cc';

export class EffectData implements IfEffectBase
{
    public id:number;
    public effectObj:Node;
    public strSystemId:number;
    public original_Width:number;
    public original_Height:number;
    public fps:number;
    public texture:SpriteFrame[];
    public prefab:Prefab;
    public assetsId:string;
    public ogSpriteFrame:SpriteFrame;
    public ogUiTransFormData:{w:number,h:number,x:number,y:number};


    constructor()
    {
       this.init();
    }

    public init():void
    {
        this.id=-1;
        this.strSystemId=-1;
        this.effectObj=null;
        this.fps=undefined;
        this.original_Width=0;
        this.original_Height=0;
        this.texture=[];
        this.prefab=null;
        this.assetsId='';
        this.ogSpriteFrame=null;
        this.ogUiTransFormData={w:0,h:0,x:0,y:0};
    }

     
    public updtae(t:number):void
    {
       
    }

    public getWidth():number
    {
        //--這邊要改掉~在旋轉過後~原本的長寬是不準確的
        let m:number=0;
        if(this.effectObj!=null){
            let uiTransForm:UITransform=this.effectObj.getComponent(UITransform);
            m=uiTransForm.width;
        }

        return m;
    }

    public getHeight():number
    {
        //var img:Layer2D.Image=(this.mc==null)?this.image:this.mc;
        //return img.height;
        let m:number=0;
        if(this.effectObj!=null)
        {
            let uiTransForm:UITransform=this.effectObj.getComponent(UITransform);
            m=uiTransForm.height;
        }

        return m;

    }

    public clean():{id:string,node:Node}
    {
        
        let spr:Sprite;
        let ani:Animation;
        let clip:AnimationClip;
        let returnData:{id:string,node:Node}={id:'',node:null};

        if(this.strSystemId==BulletEffectSourceType.EFFECTSOURCE_MOVIECLIP)
        {
            //--ps這裡的effectObj型別是node---所以沒辦法用this.effectObj instanceof Animation之類的來判斷
            ani=this.effectObj.getComponent(Animation);
            log('bullet_movieClip is stop');//--這邊要測20230814
            
            ani.stop();
            
            clip=ani.defaultClip;
            
            clip.removeTrack(0);
            
            ani.removeClip(clip);  
             
           
        }else if(this.strSystemId==BulletEffectSourceType.EFFECTSOURC_IMAGE)
        {
            spr=this.effectObj.getComponent(Sprite);

            spr.spriteFrame.destroy();

        }else if(this.strSystemId==BulletEffectSourceType.EFFECTSOURCE_PREFAB)
        {
            /*
            if(this.effectObj.getComponent(Animation))
            {
                
                //ani=this.effectObj.getComponent(Animation);

                //ani.stop();

                //clip=ani.defaultClip;

                //----不能直接刪除defaultClip,會出警告訊息 clip is defaultClip, set force to true to force remove clip and animation state
                //clip.removeTrack(0);

                //ani.removeClip(clip);

                

                ani=this.effectObj.getComponent(Animation);

                ani.stop();

                ani.destroy();//--??? 

                

            }else if(this.effectObj.getComponent(Sprite))
            {
                spr=this.effectObj.getComponent(Sprite);

                //spr.spriteFrame.destroy();
            }*/

            if(this.effectObj.getComponent(Animation))
            {
                ani=this.effectObj.getComponent(Animation);

                ani.stop(); 
            }

            if(this.ogSpriteFrame)
            {
                spr=this.effectObj.getComponent(Sprite);
                
                //--把替換的子彈擠回去
                spr.spriteFrame=this.ogSpriteFrame;
            }

            if(this.effectObj.getComponent(UITransform))
            {
                let uiTransForm=this.effectObj.getComponent(UITransform);

                uiTransForm.contentSize=new Size(this.ogUiTransFormData.w,this.ogUiTransFormData.h);

                uiTransForm.anchorX=this.ogUiTransFormData.x;

                uiTransForm.anchorY=this.ogUiTransFormData.y;

            }

            if(this.effectObj.getComponent(Sprite))
            {
                this.effectObj.getComponent(Sprite).color=color(255,255,255,255);
            
            }else if(this.effectObj.getComponent(UIOpacity))
            {
                this.effectObj.getComponent(UIOpacity).opacity=255;
            }

            this.effectObj.setPosition(v3(0,0,0));

            this.effectObj.setScale(v3(1,1,1));

            this.effectObj.angle=0;

            this.effectObj.active=false;

            returnData.id=this.assetsId;

            returnData.node=this.effectObj;
        }
        //this.effectObj.destroy();

        this.init();

        return returnData;
          
    }

   
}

/**
 * 這邊只負責產生,保留就是由bulletsystem來完成
 */
export class BaseEffectFactory implements IfEffectFactory
{
    public strSystemId:number;
    
    //--回收佔存要重複使用的
    protected _aryPoolEffects:IfEffectBase[];//--effectData

    protected _poolMaxValue:number;//--objpool的長度限制

    //protected _prefabPool:{[key:string]:NodePool}; 
    protected _prefabPool:{[key:string]:Node[]}; 

    constructor(id:number)
    {
        this.strSystemId=id;
        this._aryPoolEffects=[];
        this._poolMaxValue=20;
        this._prefabPool={};
    }

    /**
     * 20240325
     * @param prefabId 要重複利用的prefab
     * @returns Node
     */
    protected getRecyclePrefab(prefabId:string):Node
    {
        let returnPrefab:Node=null;

        if(this.checkPrefabPool(prefabId)>0)
        {
            returnPrefab=this._prefabPool[prefabId].pop();
        }

        //log('getRecyclePrefab',returnPrefab);

        return returnPrefab
        //return null
    }


    protected checkPrefabPool(prefabId:string):number
    {
        let returnPrefabPoolLength:number=-1;

        if(this._prefabPool[prefabId])
        {
            returnPrefabPoolLength=this._prefabPool[prefabId].length; 
        }

        return returnPrefabPoolLength
    }

    
    public recyclePrefab(recycleId:string,prefabNode:Node):void
    {
        //return;

        if(!this._prefabPool[recycleId])
        {
            this._prefabPool[recycleId]=[];
        }

        if(this._prefabPool[recycleId].length<this._poolMaxValue)
        {
            this._prefabPool[recycleId].push(prefabNode);
        }

        log('check_prefabPool',this._prefabPool,recycleId,prefabNode);

    }

    public createEffect(effectInfo:EffectOption):IfEffectBase
    {
    
       return null;
    }

    public cloneEffect(clone:EffectOption):IfEffectBase
    {
       
       let cloneObject:IfEffectBase=this.createEffect(clone); 
       return cloneObject;
    }

    public pushEffectBase(b:IfEffectBase):void
    {
        if(b!=null)
        {
            if(this._aryPoolEffects.length< this._poolMaxValue)
            {
                this._aryPoolEffects.push(b);
            }
        }
    }

    public changeEffectSource(option:ChangeEffectSourceOption):any
    {
       return null;
        
    }

    public updateAnimation(t?:number):void
    {

    }


    public clean():void
    {
       this._aryPoolEffects.length=0;
    }

}