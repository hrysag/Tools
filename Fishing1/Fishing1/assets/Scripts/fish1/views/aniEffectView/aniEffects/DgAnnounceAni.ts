/**
 * Created by EricHuang on 2023/10/23.
 */

import { LoadingResManager } from "../../../../framework/logic/loading/LoadingResManager";
import {Digits} from '../../../../framework/utils/Digits';
import {GameUtils} from '../../../../framework/utils/GameUtils';
import {v3,Layers,color,Node,instantiate,SpriteFrame,Sprite, Vec3, Label} from 'cc';
import { TweenMaxCocosPlugin } from "../../../../framework/utils/TweenMaxPlugin";
import {log} from 'cc';

export class DgAnnounceAni
{
    private _containerNode:Node;

    private _allContainerNode:Node;

    private _bg:Node;

    private _lBar:Node;

    private _rBar:Node;

    private _congratulate:Node;

    private _get:Node;

    private _digitsNode:Node;

    private _userLabelNode:Node;
    
    private _ogfinalEndPos:{lx:number,rx:number};

    private _tweenObj:any;

    constructor(...args)
    {
        
        this._containerNode=args[0].container;

        this._allContainerNode=instantiate(LoadingResManager.getInstance().getPrefab(args[0].other.prefabId));

        this._bg=this._allContainerNode.getChildByName('reelMid');

        this._bg.addComponent(TweenMaxCocosPlugin);
        
        this._lBar=this._allContainerNode.getChildByName('reelRodL');

        this._lBar.addComponent(TweenMaxCocosPlugin);
        
        this._rBar=this._allContainerNode.getChildByName('reelRodR');

        this._rBar.addComponent(TweenMaxCocosPlugin);

        this._ogfinalEndPos={lx:this._lBar.position.x,rx:this._rBar.position.x};

        let languageNode:Node=this._allContainerNode.getChildByName('winTx');

        this._congratulate=languageNode.getChildByName('congratulateTx');

        let spriteFrame:SpriteFrame=LoadingResManager.getInstance().getSpriteFrameFromSpriteAtlas(args[0].other.tx_congratulate_atlasId,args[0].other.tx_congratulate);

        this._congratulate.getComponent(Sprite).spriteFrame=spriteFrame;

        this._get=languageNode.getChildByName('getTx');

        spriteFrame=LoadingResManager.getInstance().getSpriteFrameFromSpriteAtlas(args[0].other.tx_get_atlasId,args[0].other.tx_get);
        
        this._get.getComponent(Sprite).spriteFrame=spriteFrame;

        this._digitsNode=this._allContainerNode.getChildByName('score');

        //let digitsNode:Node=new Node('digitsNode');

        //let dg:Digits=digitsNode.addComponent(Digits);
        let dg:Digits=this._digitsNode.addComponent(Digits);

        let textures:SpriteFrame[]=LoadingResManager.getInstance().getSpriteFrames(args[0].other.digitsTexturePath).sort(GameUtils.sortDigitsSpriteFrames);
       

        dg.textures=textures;

        //dg.padding=-10;
        dg.padding=1;

        dg.digitScale=.7;

        dg.useCommand=true;

        dg.symbolStr=[','];

        dg.symbolIndex=[10];

        log('_DgKillDragonTitleAni_',args[0],this._allContainerNode);

        //--這個要在處理,因為討厭的label
        this._userLabelNode=this._allContainerNode.getChildByName('playerName');

        this._tweenObj={};
        
        this._allContainerNode.active=false;

    }

    public async showAnnounceForGD(id:string,payOff:number):Promise<void>
    {
        
        if(TweenMax.isTweening(this._bg.getComponent(TweenMaxCocosPlugin)))
        {
            TweenMax.killTweensOf(this._bg.getComponent(TweenMaxCocosPlugin));
        }

        if(TweenMax.isTweening(this._lBar.getComponent(TweenMaxCocosPlugin)))
        {
            TweenMax.killTweensOf(this._lBar.getComponent(TweenMaxCocosPlugin));
        }

        if(TweenMax.isTweening(this._rBar.getComponent(TweenMaxCocosPlugin)))
        {
            TweenMax.killTweensOf(this._rBar.getComponent(TweenMaxCocosPlugin));
        }

        if(TweenMax.isTweening(this._tweenObj))
        {
            TweenMax.killTweensOf(this._tweenObj);
            
            this.destory();
        }
        
        
        this._containerNode.addChild(this._allContainerNode); 
        
        this._allContainerNode.active=true;
        
        this._digitsNode.getComponent(Digits).display(payOff,'center');

        this._userLabelNode.getComponent(Label).string=id;

        this._digitsNode.active=this._userLabelNode.active=this._congratulate.active=this._get.active=false;

        this._bg.setScale(v3(0.05,1,1));

        await Promise.all([this.showBg(), this.showLbar(),this.showRbar()]);
       
        TweenMax.to(this._tweenObj,3,
        {
            onComplete:()=>
            {
                this.destory();
            }
        });

        
           
    }

    private async showBg():Promise<void>
    {
        return new Promise<void>((resolve)=>
        {
            TweenMax.to(this._bg.getComponent(TweenMaxCocosPlugin),.8,
            {
                scaleX:1,
                ease:Elastic.easeOut,
                onComplete:()=>
                {
                   //--show payoff and id
                   this._digitsNode.active=this._userLabelNode.active=this._congratulate.active=this._get.active=true;
                   
                   resolve();
                }
                
            });
          
        })
    }

    private async showLbar():Promise<void>
    {
        return new Promise<void>((resolve)=>
        {
            //let lp:Vec3=this._lBar.getPosition();

            this._lBar.setPosition(v3(0,0,0));
            
            TweenMax.to(this._lBar.getComponent(TweenMaxCocosPlugin),.8,
            {
                x:this._ogfinalEndPos.lx,
                ease:Elastic.easeOut,
                onComplete:()=>
                {
                    resolve();
                }

            });
    
          
        })
    }


    private async showRbar():Promise<void>
    {
        return new Promise<void>((resolve)=>
        {
            //let rp:Vec3=this._rBar.getPosition();

            this._rBar.setPosition(v3(0,0,0));
            
            TweenMax.to(this._rBar.getComponent(TweenMaxCocosPlugin),.8,
            {
                x:this._ogfinalEndPos.rx,
                ease:Elastic.easeOut,
                onComplete:()=>
                {
                    resolve();
                }
            });
          
        })
    }


    private destory():void
    {
        this._allContainerNode.active=true;

        this._digitsNode.active=this._userLabelNode.active=this._congratulate.active=this._get.active=false;

        this._containerNode.removeChild(this._allContainerNode); 

    }







}