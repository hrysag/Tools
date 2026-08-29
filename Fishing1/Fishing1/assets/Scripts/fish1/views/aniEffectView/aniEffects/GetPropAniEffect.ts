/**
 * Created by EricHuang on 2023/11/20.
 */

import { LoadingResManager } from "../../../../framework/logic/loading/LoadingResManager";
import {Layers, Node,Size,SpriteFrame,UITransform,v2, v3, Vec3} from 'cc';
import {Sprite} from 'cc';
import {UIOpacity} from 'cc';
import {CameraComponent} from 'cc';
import { TweenMaxCocosPlugin } from "../../../../framework/utils/TweenMaxPlugin";
import { GameUtils } from "../../../../framework/utils/GameUtils";
import { PropType } from "../../../model/Fish1ModelDefinitions";
import {log} from 'cc';


//export class GetPropAniEffect extends EventTarget
export class GetPropAniEffect
{
    private _container:Node;

    private _spriteFrames:{[key:number]:SpriteFrame};

    private _poolSpiteNode:Node[];

    private _menuPositions:{[key:string]:{x:number,y:number,width:number,height:number}}

    //private _canvasCameraGUI:CameraComponent;

    //private _canvasCameraFish:CameraComponent;

    constructor(...args)
    {
        
        //super();
        
        
        log('check_GetPropAniEffect',args[0]);
        //-container:find('Canvas/topAniEffectNode')--在UI之上
        this._container=args[0].container;

        //this._canvasCameraGUI=args[0].cameraGuiNode.getComponent(CameraComponent);
        
        //this._canvasCameraFish=args[0].cameraFishNode.getComponent(CameraComponent);
        
        //--1 summon 2 frozen 3 crazy
        this._spriteFrames={
            [PropType.PROP_CALL]:LoadingResManager.getInstance().getSpriteFrames(args[0].propSpriteFrames[0])[0],
            [PropType.PROP_FREEZE]:LoadingResManager.getInstance().getSpriteFrames(args[0].propSpriteFrames[1])[0],
            [PropType.PROP_CRAZY]:LoadingResManager.getInstance().getSpriteFrames(args[0].propSpriteFrames[2])[0]
        }

        //this._menuPositions=args[0].menuPositions;
        
        this._poolSpiteNode=[];    
    }

    public setDataAfterSetRoom(menuPositions:{[key:string]:{x:number,y:number,width:number,height:number}}):void
    {
        this._menuPositions=menuPositions; 
    }



    public async showGetPropEffect(propType:number,worldV3:Vec3):Promise<void>
    {
        let sprNode:Node;

        if(this._poolSpiteNode.length>0)
        {
            sprNode=this._poolSpiteNode.pop();

            sprNode.setScale(v3(1,1));

            sprNode.getComponent(Sprite).spriteFrame=this._spriteFrames[propType];
        
            sprNode.setScale(v3(0.6,0.6));

            sprNode.addComponent(UIOpacity).opacity=255;

            //log('showGetPropEffect',propType,this._spriteFrames[propType],);

        }else{
            
            sprNode=new Node();

            sprNode.layer=Layers.Enum.UI_2D;

            sprNode.addComponent(TweenMaxCocosPlugin);
    
            let spr=sprNode.addComponent(Sprite);
            
            spr.spriteFrame= this._spriteFrames[propType];

            let uiTransFrom=sprNode.addComponent(UITransform);

            uiTransFrom.contentSize=new Size(this._spriteFrames[propType].originalSize.width,this._spriteFrames[propType].originalSize.height);
            
            uiTransFrom.anchorPoint=v2(0.5,0.5);

            let opacityComponent=sprNode.addComponent(UIOpacity);

            opacityComponent.opacity=255;

            sprNode.setScale(v3(0.6,0.6));

        }

        //log('check_showGetPropEffect_worldV3',worldV3);

        
        //let spos=this._canvasCameraFish.worldToScreen(worldV3);

        //let localpos=this._canvasCameraGUI.screenToWorld(spos);


        //let localStartPosition=this._container.getComponent(UITransform).convertToNodeSpaceAR(localpos);
        let localStartPosition=this._container.getComponent(UITransform).convertToNodeSpaceAR(worldV3);

        this._container.addChild(sprNode);

        sprNode.setPosition(localStartPosition);

        //---menu的位置
        let localEndPosition=this._container.getComponent(UITransform).convertToNodeSpaceAR(v3(this._menuPositions[propType].x,this._menuPositions[propType].y));

        let endXY={x:GameUtils.getRangeRandom(localStartPosition.x-150,localStartPosition.x+150),y:localStartPosition.y};

        let midXY:{x:number,y:number}={x:0,y:0};

        if(endXY.x>=localStartPosition.x){
        
            midXY.x=GameUtils.getRangeRandom(localStartPosition.x,localStartPosition.x+150);
        
        }else{

            midXY.x=GameUtils.getRangeRandom(localStartPosition.x-150,localStartPosition.x);
        }

        midXY.y=GameUtils.getRangeRandom(localStartPosition.y+300,localStartPosition.y+200);

        let tweenComponent:TweenMaxCocosPlugin=sprNode.getComponent(TweenMaxCocosPlugin);

        let t1:TweenMaxCocosPlugin= await this.jumpTween(tweenComponent,localStartPosition,midXY,endXY);

        let t2:TweenMaxCocosPlugin= await this.goBacktoMenu(t1,localEndPosition); 

        this._container.removeChild(t2.node);

        if(this._poolSpiteNode.length<10)
        {
            this._poolSpiteNode.push(t2.node);
        }

    }



    private async jumpTween(target:TweenMaxCocosPlugin,localStartPosition:Vec3,midXY:{x:number,y:number},endXY:{x:number,y:number}):Promise<TweenMaxCocosPlugin>
    {
        return new Promise((resolve)=>
        {
            TweenMax.to(target,0.5,{
                bezier: {
                    type:"soft",
                    values:[{x:localStartPosition.x,y:localStartPosition.y},{x:midXY.x,y:midXY.y},{x:endXY.x, y:endXY.y}]
                },
                ease:Bounce.easeOut,
                //delay:i*0.04,
                onCompleteParams:[target],
                onComplete:(value)=>
                {
                    resolve(value);
                }
    
            });
        });
    }


    private async goBacktoMenu(target:TweenMaxCocosPlugin,endLocalPosition:Vec3):Promise<TweenMaxCocosPlugin>
    {
        return new Promise ((resolve)=>
        {
            TweenMax.to(target,.4,{
            
                x:endLocalPosition.x,
                y:endLocalPosition.y,
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










}
   
               