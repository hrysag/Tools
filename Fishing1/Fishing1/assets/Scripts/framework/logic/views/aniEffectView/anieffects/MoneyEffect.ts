/**
 * Created by EricHuang on 2023/10/08.
 */

import { Sprite, SpriteFrame,Node,color,v3,UIOpacity,Vec2, Vec3,UITransform,Layers, Graphics,Size} from "cc";
import { TweenMaxCocosPlugin } from "../../../../utils/TweenMaxPlugin";
import { GameUtils } from "../../../../utils/GameUtils";
import { LoadingResManager } from "../../../loading/LoadingResManager";
import {log} from 'cc';

export class BasicCoin extends Node
{
    public isPlayer:boolean;
    public id: number;
    public scaleXY:number;
    public endX:number;
    public endY:number;
    constructor()
    {
        super();
        this.init();
    }

    public init():void
    {
        this.isPlayer=false;
        this.id=0;
        this.scaleXY=1;
        this.endX=0;
        this.endY=0;
        //this.pivot.set(0,0);
        /*
        if(this.getComponent(UIOpacity))
        {
            this.getComponent(UIOpacity).opacity=1;
        }
       
        this.scale.set(1);
        */
    }


}

export class MoneyEffect 
{
    
    private _stage:Node;

    private _uITransform:UITransform;

    private _moneyTexturePath:{atlas:string,spriteFrame:string};
    //private _stage:PIXI.Container;
    private _positionInfo:{x:number,y:number,width:number,height:number}[];
    
    //private _jumpMoney:JumpMoney;
    private  _aryMoneyPools:BasicCoin[];

    private _texture:SpriteFrame;

    constructor(...args)
    {
       //---處理資料
       //-把positionInfo的座標轉local座標(stageNode坐標系)
       
       //-money_ani0000
       //-this._toggleTexture={on:this._toggle.spriteFrame,off:LoadingResManager.getInstance().getSpriteFrameFromSpriteAtlas('prefab/textures/fishHunterPopup','btn_switch_off') as SpriteFrame};

       this._stage=args[0].container as Node;

       this._moneyTexturePath=args[0].moneyTexturePath;

       this._texture=LoadingResManager.getInstance().getSpriteFrameFromSpriteAtlas(this._moneyTexturePath.atlas,this._moneyTexturePath.spriteFrame) as SpriteFrame;

       this._uITransform=this._stage.getComponent(UITransform);
       
       /* 
       this._positionInfo=args[0].coinEndinfo;

       let len:number=this._positionInfo.length;

       let lp:Vec3;

       for(let i:number=0;i<len;i++)
       {
           
           lp=this._uITransform.convertToNodeSpaceAR(v3(this._positionInfo[i].x,this._positionInfo[i].y));
           
           this._positionInfo[i].x=lp.x;
           
           this._positionInfo[i].y=lp.y;
       }*/

       this._aryMoneyPools=[];

       log('check_MoneyInit',args,this._texture);
    }

    

    public setDataAfterSetRoom(coinEndinfo:{x:number,y:number,width:number,height:number}[]):void
    {
        this._positionInfo=coinEndinfo;

        let len:number=this._positionInfo.length;
 
        let lp:Vec3;
 
        for(let i:number=0;i<len;i++)
        {
            
            lp=this._uITransform.convertToNodeSpaceAR(v3(this._positionInfo[i].x,this._positionInfo[i].y));
            
            this._positionInfo[i].x=lp.x;
            
            this._positionInfo[i].y=lp.y;
        }
    }


    /**
     * 
     * @param isPlayer 是否為玩家(false要半透明)
     * @param x 出發位置 canvas global pos
     * @param y 出發位置 canvas global pos
     * @param index 玩家座位 0-3
     */
    public showMoneyAnimation(isPlayer:boolean,x:number,y:number,index:number):void
    {
        log('showMoneyAnimation_jumpmoney',isPlayer,x,y,index);
        let len:number=10;
        let scaleXY:number=1;
        
        
        //let localPoint:PIXI.Point=this._stage.toLocal(new PIXI.Point(x,y));
        let localPoint:Vec3=this._stage.getComponent(UITransform).convertToNodeSpaceAR(v3(x,y));

        log('check_jump_local',localPoint); 

        let nodeCoin:BasicCoin;

        for(let i:number=0;i<len;i++)
        {
           
            if( this._aryMoneyPools.length>0)
            {
                nodeCoin= this._aryMoneyPools.pop();
            
            }else{
                
                nodeCoin=new BasicCoin();

                nodeCoin.layer=Layers.Enum.UI_2D;
                
                let spr:Sprite=nodeCoin.addComponent(Sprite);

                /*
                let sprUiTransform=nodeCoin.addComponent(UITransform);

                spr.trim=false;
                
                spr.sizeMode=Sprite.SizeMode.RAW;

                spr.type=Sprite.Type.SIMPLE;
                */

                spr.spriteFrame=this._texture;

                //let ogSize=spr.spriteFrame.originalSize;

                log('check_sizeOG',spr.spriteFrame.originalSize);
                
                //sprUiTransform.contentSize=new Size(ogSize.width,ogSize.height);

                

                nodeCoin.addComponent(UIOpacity);

                nodeCoin.addComponent(TweenMaxCocosPlugin);

                //-sp.sizeMode=Sprite.SizeMode.RAW;
                 
            }

            /*
            let testGNode:Node=new Node('testGNode');
            testGNode.layer=Layers.Enum.UI_2D;
            let gp=testGNode.addComponent(Graphics);
            gp.fillColor=color(255,255,255,128);
            gp.rect(-50/2,-50/2,50,50);
            gp.fill();

            testGNode.addComponent(UITransform);

            this._stage.addChild(testGNode);
            
            testGNode.setPosition(v3(localPoint.x,localPoint.y));
            */
            




            nodeCoin.isPlayer=isPlayer;
            nodeCoin.id=i;
            nodeCoin.endX=this._positionInfo[index].x;
            nodeCoin.endY=this._positionInfo[index].y;
             
            //nodeCoin.pivot.set(nodeCoin.width/2,nodeCoin.height/2);


            //spr.index=i;---沒用到?
            //nodeCoin.scaleXY=scaleXY;
            //nodeCoin.scale.set(scaleXY);
            //--透明度
            //nodeCoin.getComponent(Sprite).color=(nodeCoin.isPlayer)?color(255,255,255,255):color(255,255,255,128);
            nodeCoin.getComponent(UIOpacity).opacity=(nodeCoin.isPlayer)?255:128;
            
            this._stage.addChild(nodeCoin); 

            //nodeCoin.setPosition(0,0,0);
            
            nodeCoin.setPosition(v3(localPoint.x,localPoint.y))
            
            let endXY={x:GameUtils.getRangeRandom(localPoint.x-150,localPoint.x+150),y:localPoint.y};

            let midXY:{x:number,y:number}={x:0,y:0};

            if(endXY.x>=localPoint.x){
            
                midXY.x=GameUtils.getRangeRandom(localPoint.x,localPoint.x+150);
            
            }else{

                midXY.x=GameUtils.getRangeRandom(localPoint.x-150,localPoint.x);
            }


            midXY.y=GameUtils.getRangeRandom(localPoint.y+300,localPoint.y+200);

            log('check_jump_curve',localPoint,endXY,midXY);

            //this._aryRunningObjPools.push(spr);//--沒用到
            //--jump---

            //return;
            let t:TweenMaxCocosPlugin=nodeCoin.getComponent(TweenMaxCocosPlugin);
            TweenMax.to(t,0.5,{
                bezier: {
                    type:"soft",
                    values:[{x:localPoint.x,y:localPoint.y},{x:midXY.x,y:midXY.y},{x:endXY.x, y:endXY.y}]
                },
                ease:Bounce.easeOut,
                delay:i*0.04,
                onCompleteParams:[t],
                onComplete:this.moveCointoPlayerCannon

            });
        }
        
    }


    private moveCointoPlayerCannon=(target:TweenMaxCocosPlugin)=>
    {
        TweenMax.to(target,.4,{
            x:(<BasicCoin>target.node).endX,
            y:(<BasicCoin>target.node).endY,
            opacity:70,
            onCompleteParams:[target],
            onComplete:(value)=>
            {
                this._stage.removeChild(value.node);

                value.node.getComponent(UIOpacity).opacity=255;

                value.node.init();
                
                this._aryMoneyPools.push(value.node);
            }

        });
    }



}