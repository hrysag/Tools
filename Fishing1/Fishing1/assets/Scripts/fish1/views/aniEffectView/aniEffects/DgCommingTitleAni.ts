/**
 * Created by EricHuang on 2023/10/17.
 */
import { LoadingResManager } from "../../../../framework/logic/loading/LoadingResManager";
import { TweenMaxCocosPlugin } from "../../../../framework/utils/TweenMaxPlugin";
import {Prefab,instantiate,Node, Sprite,SpriteFrame,UIOpacity,v3} from 'cc';
import {log} from 'cc';

export class DgCommingTitleAni 
{
     
    private _titleNode:Node;

    private _languageSpr:Node;

    private _bg:Node;

    private _containerNode:Node;
    
    constructor(...args)
    {
        
        log('check_DgCommingTitleAni',args);

        this._titleNode=instantiate(LoadingResManager.getInstance().getPrefab(args[0].other.prefabId));
        
        this._titleNode.addComponent(TweenMaxCocosPlugin);

        this._bg=this._titleNode.getChildByName('bg');

        this._bg.addComponent(TweenMaxCocosPlugin);

        this._languageSpr=this._titleNode.getChildByName(args[0].other.languageNodeId);

        this._languageSpr.addComponent(TweenMaxCocosPlugin);  

        let spr:Sprite=this._languageSpr.getComponent(Sprite);
        
        let spriteFrame:SpriteFrame=LoadingResManager.getInstance().getSpriteFrameFromSpriteAtlas(args[0].other.atlasId,args[0].other.frameId);

        if(spriteFrame)
        {
            spr.spriteFrame=spriteFrame;
        }

        this._containerNode=args[0].container;

        this._containerNode.addChild(this._titleNode);

        this._titleNode.active=false;
    }


    //--show title of gd
    public async showOpenEffect():Promise<void>
    {
        if(this._titleNode  && this._languageSpr)
        {
           
            this._titleNode.active=true;
            
            this._bg.setScale(v3(0.8,0.2,1));

            this._titleNode.getComponent(UIOpacity).opacity=0;

            await Promise.all([this.allOpacityAction(), this.bgAction(),this.languageSprAction()]);
            
            TweenMax.to({},2,
            {
               onComplete:()=>
               {
                    
                    this._titleNode.active=false;

                    this._bg.setScale(v3(1,1,1));
                    
                    this._languageSpr.setScale(v3(1,1,1));


               } 
            })


        }

    }


    private async allOpacityAction ():Promise<void>
    {
        return new Promise<void>((resolve)=>
        {
            TweenMax.to(this._titleNode.getComponent(TweenMaxCocosPlugin),
            0.2,
            {
                opacity:255,
                
                onComplete:()=>
                {
                    resolve();
                }
            
            });
            
        }) 
    }


    private async bgAction ():Promise<void>
    {
        return new Promise<void>((resolve)=>
        {
            TweenMax.to(
                this._bg.getComponent(TweenMaxCocosPlugin),
                0.2,
                {
                    scaleX:1.05,
                    scaleY:1.2,
                    //repeat:2,
                    //yoyo:true,
                    //ease:Elastic.easeOut,
                    onCompleteParams:[this._bg.getComponent(TweenMaxCocosPlugin)],
                    onComplete:(value)=>
                    {
                        //--remove
                        TweenMax.to(value,0.2,{
                            
                            scaleX:0.95,
                            scaleY:0.95,
                            onComplete:()=>
                            {
                                resolve();
                            }
                        
                        });
                    } 
                }

            )
        })
    }

    private async languageSprAction ():Promise<void>
    {
        return new Promise<void>((resolve)=>
        {
            TweenMax.to(
                this._languageSpr.getComponent(TweenMaxCocosPlugin),
                0.2,
                {
                    scaleX:2,
                    scaleY:1.2,
                    //repeat:2,
                    //yoyo:true,
                    //ease:Elastic.easeOut,
                    onCompleteParams:[this._languageSpr.getComponent(TweenMaxCocosPlugin)],
                    onComplete:(value)=>
                    {
                        //--remove

                        TweenMax.to(value,0.2,{
                            
                            scaleX:0.95,
                            scaleY:0.95,
                            onComplete:()=>
                            {
                                resolve();
                            }
                        
                        });

                    } 
                }

            )
        }) 
    }







}