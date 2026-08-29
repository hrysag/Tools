/**
 * Created by EricHuang on 2023/10/09
 * 
 */

import {Digits} from '../../../../utils/Digits';
import {CocosGameSetting} from '../../../../utils/CocosGameSetting';
import {GameUtils} from '../../../../utils/GameUtils';
import {TweenMaxCocosPlugin} from '../../../../utils/TweenMaxPlugin';
import {LoadingResManager} from '../../../loading/LoadingResManager';
import {SpriteFrame,UITransform,Node,Vec3, UIOpacity, v3, Layout} from 'cc';
import {log} from 'cc';

export class BasicDigits extends Node
{
    public id:number;
    public scaleData:number;
    public _textures:SpriteFrame[];

    constructor()
    {
        super();
        this.id=0;
        this.scaleData=1;
        //this._textures=textures;
        //this.getComponent(Digits).textures=textures;
    }

    public seteTextures(value:SpriteFrame[]):void
    {
        //this._textures=value;
        this.getComponent(Digits).textures=value;  

    }

}
   



export class JumpDigitsEffect
{

    private _strdefultTexture:string;
    
    private _stage:Node;
    
    private _textureHashMap:{[key:string]:string};

    private _aryDigitsEffectPool:BasicDigits[];


    constructor(...args)
    {
        log('check_JumpDigitsEffect',args);
        
        this._textureHashMap={};

        this._aryDigitsEffectPool=[];

        this._stage=args[0].container;

        this._strdefultTexture=args[0].other.strDefultTexturePath;
    }

    /**
     * 
     * @param showNumber 
     * @param x global
     * @param y blobal
     * @param textureIndex 要用的圖片索引,沒有填寫則是使用預設的 
     * 要注意因為這個stage他是只有一層,所以上下左右邊界是要/2的+-值,0,0在中心點
     */
    public async showJumpDigits(showNumber:number,x:number,y:number,textureIndex?:string):Promise<void>
    {
        
        let localPoint:Vec3=this._stage.getComponent(UITransform).convertToNodeSpaceAR(v3(x,y));
        
        let dg:BasicDigits;
        
        let texturePath:string=this.getTextureIndex(textureIndex);
        
        let textures:SpriteFrame[]=this.createTexture(texturePath);

        log('jumpDigitsTexture',textures);
        
        if(this._aryDigitsEffectPool.length>0)
        {
            dg=this._aryDigitsEffectPool.pop();

            //dg.reSteTextures(textures);

        }else{
        

            dg=new BasicDigits();

            dg.addComponent(UITransform);

            dg.addComponent(Digits);

            dg.addComponent(UIOpacity);

            dg.addComponent(TweenMaxCocosPlugin);
        }

        this._stage.addChild(dg);

        dg.seteTextures(textures);

        dg.getComponent(Digits).useCommand=true;

        dg.getComponent(Digits).symbolStr=[',','+'];
        
        dg.getComponent(Digits).symbolIndex=[10,12];


        dg.getComponent(Layout).resizeMode=Layout.ResizeMode.CONTAINER;
         

        dg.scaleData=1;

        dg.getComponent(UIOpacity).opacity=255;

        dg.getComponent(Digits).displayWithStr('+'+showNumber,'center');

        let c=dg.getComponent(UITransform).contentSize;


        let position:{x:number,y:number}={x:localPoint.x,y:localPoint.y};

        //log('-----------@@@@',position.y,c.height,CocosGameSetting.Game_Height/2,-CocosGameSetting.Game_Height/2);
        
        if(position.x+(c.width/2)>=CocosGameSetting.Game_Width/2)
        {
            position.x=CocosGameSetting.Game_Width/2-(c.width/2);

        }else if(position.x-(c.width/2)<=-CocosGameSetting.Game_Width/2)
        {
            position.x=-CocosGameSetting.Game_Width/2+c.width/2;
        }


        if(position.y+(c.height/2)>CocosGameSetting.Game_Height/2)
        {
            position.y=position.y-c.height;
          
            
        }else if(position.y-(c.height/2)-50<=-CocosGameSetting.Game_Height/2){
            
            position.y=position.y+c.height;

        }
        
       

        //dg.x=position.x;
        //dg.y=position.y;
        //dg.setPosition(v3(localPoint.x,localPoint.y));
        dg.setPosition(v3(position.x,position.y));

        let target:TweenMaxCocosPlugin=dg.getComponent(TweenMaxCocosPlugin);
       
        let t1:TweenMaxCocosPlugin=await this.scaleYoyoTween(target);

        let t2:TweenMaxCocosPlugin=await this.goOut(t1);

        this._stage.removeChild(t2.node);

        if(this._aryDigitsEffectPool.length<=10)
        {
           this._aryDigitsEffectPool.push(t2.node as BasicDigits);
        }


    }

    //--1
    private async scaleYoyoTween(target:TweenMaxCocosPlugin):Promise<TweenMaxCocosPlugin>
    {
        return new Promise ((resolve)=>
        {
            TweenMax.to(target,0.1,{
                //scaleData:2,
                scale:2,
                yoyo:true,
                repeat:1,
                onCompleteParams:[target],
                onComplete:(value)=>
                {
                    resolve(value);
                }
    
            });
        });
    }

    //--step 2
    private async goOut(target:TweenMaxCocosPlugin):Promise<TweenMaxCocosPlugin>
    {
        return new Promise ((resolve)=>
        {
            TweenMax.to(target,.8,{
            
                y:target.node.position.y-50,
                opacity:0, 
                ease:Power0.easeIn,
                //ease:Elastic.easeIn,
                onCompleteParams:[target],
                //onComplete:this.remove
                onComplete:(value)=>
                {
                    resolve(value);
                }
    
            });
        });
    }


    /*
    private goOut=(value)=>
    {
        TweenMax.to(value,.8,{
            
            y:value.position.y-50,
            opacity:0, 
            ease:Power0.easeIn,
            //ease:Elastic.easeIn,
            onCompleteParams:[value],
            onComplete:this.remove

        });

    }*/
    
    /*
    private remove=(dg)=>
    {
       //-DigitsEffectCenter.aryDigitsEffectPool.length 長度要限制
       this._stage.removeChild(dg.node);
       if(this._aryDigitsEffectPool.length<=10)
       {
          this._aryDigitsEffectPool.push(dg);
       }
    }*/

    private getTextureIndex(value:string):string
    {
       let r:string=(value)?value:this._strdefultTexture;

       if(this._textureHashMap[value])
       {
          r=this._textureHashMap[value];
       }
       return r;
    }

    private createTexture(value:string):SpriteFrame[]
    {
       let textures:SpriteFrame[]=LoadingResManager.getInstance().getSpriteFrames(value).sort(GameUtils.sortDigitsSpriteFrames);
       return textures;         
    }






}