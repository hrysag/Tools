/**
 * Created by EricHuang on 2023/10/31.
 */

import { TweenMaxCocosPlugin } from "../../../../framework/utils/TweenMaxPlugin";
import { LoadingResManager } from "../../../../framework/logic/loading/LoadingResManager";
import { AniEffectID } from "../../../../framework/logic/views/aniEffectView/AniEffectDefinitions";
import {GameUtils,frustumInfoData} from '../../../../framework/utils/GameUtils';
import {Fish1AniEffectID} from '../Fish1AniEffectDefinitions';
import {AnimationEffectEvent,EventSendObject} from '../../../../framework/game/events/eventBase';
import {AnimationClip, Component, EventTarget, instantiate, Material, Node,ParticleSystem2D,Sprite,Texture2D, UITransform} from 'cc';
import {Scene} from 'cc';
import {Line} from 'cc';
import {v2,v3} from 'cc';
import {Layers} from 'cc';
import {CurveRange} from 'cc';
import {Animation} from 'cc';
import {color} from 'cc';
import {find} from 'cc';
import {Vec3,Vec2} from 'cc';
import {CameraComponent} from 'cc';
import {log} from 'cc';
import { CocosGameSetting } from "../../../../framework/utils/CocosGameSetting";

export class LinghtningBall extends Component
{
     
    private _glowNode:Node;

    private _circleNode:Node;

    private _particle2d:ParticleSystem2D;

    constructor()
    {
        super();
    }

    protected onLoad():void
    {
        this._glowNode=this.node.getChildByName('lightningCircle');

        this._glowNode.getComponent(Sprite).color=color(255,255,255,0);

        this._glowNode.addComponent(TweenMaxCocosPlugin);

        TweenMax.to( this._glowNode.getComponent(TweenMaxCocosPlugin),0.2,
        {
            sprColorAlpha:255,
            repeat:-1,
            yoyo:true 
        });


        this._circleNode=this.node.getChildByName('lightningGlow');

        this._circleNode.getComponent(Sprite).color=color(255,255,255,200);

        this._circleNode.addComponent(TweenMaxCocosPlugin);

        TweenMax.to(this._circleNode.getComponent(TweenMaxCocosPlugin),0.2,
        {
            sprColorAlpha:255,
            repeat:-1,
            yoyo:true 
        });


        this._particle2d=this.node.getChildByName('lightningParticle').getComponent(ParticleSystem2D);
        
        this._particle2d.stopSystem();

        this._particle2d.resetSystem();
    }

    public destory():void
    {
        TweenMax.killTweensOf(this._glowNode.getComponent(TweenMaxCocosPlugin));

        TweenMax.killTweensOf(this._circleNode.getComponent(TweenMaxCocosPlugin));

        this._particle2d.stopSystem();

        this._particle2d.destroy();

    }
}


//export class LightningLine extends Line
export class LightningLine extends Component
{
    private _startAndEndPos:{startPos:Vec3,endPos:Vec3};

    private _linecomponent:Line;

    private _targetTexture:Texture2D;

    set startAndEndPos(value: { startPos: Vec3,endPos:Vec3}) 
    {
        this._startAndEndPos = value;

        if(value)
        {
            this.createLine();
        }
        
    }

    set targetTexture(value:Texture2D)
    {
       this._targetTexture=value;
    }


    constructor()
    {
        super();

        this.startAndEndPos=null;

        this._targetTexture=null;

        this._linecomponent=null;
    }

    protected onLoad():void
    {
        this._linecomponent=this.node.addComponent(Line);

        this.node.addComponent(TweenMaxCocosPlugin);

    }

    private createLine():void
    {
        let dxy:{x:number,y:number}={x:this._startAndEndPos.endPos.x-this._startAndEndPos.startPos.x,y:this._startAndEndPos.endPos.y-this._startAndEndPos.startPos.y};
        
        let dist=Math.sqrt(dxy.x*dxy.x+dxy.y*dxy.y);
        
        let numberOfTile:number=Math.ceil(dist/this._targetTexture.width);

        //@ts-ignore 
        this._linecomponent.texture=this._targetTexture;

        this._linecomponent.worldSpace=true;

        let w=new CurveRange();
    
        w.mode=0;//--引擎限制是0-1
        //w.constant=texture.height;
        w.constant=150;//--美術設定150
        this._linecomponent.width=w;

        //linecomponent.tile=v2(numberOfTile,1);
        this._linecomponent.tile=v2(numberOfTile,1);

        //let posData=[v3(this._startAndEndPos.startPos.x,this._startAndEndPos.startPos.y),v3(this._startAndEndPos.endPos.x,this._startAndEndPos.endPos.y)];
        let posData=[this._startAndEndPos.startPos,this._startAndEndPos.endPos];
        //--for test
        //let posData=[v3(startPos.x,startPos.y),v3(startPos.x,startPos.y)];

        this._linecomponent.positions=posData as never;

        this._linecomponent.offset=new Vec2(0,0);

         
        //--延伸生長
        TweenMax.to(this.node.getComponent(TweenMaxCocosPlugin),.5,
        {
            linePosEndX:this._startAndEndPos.endPos.x,
            linePosEndY:this._startAndEndPos.endPos.y,
            onComplete:()=>
            {
               
               //--不能一開始沒塞好後面動態新增,且一開始塞好3個點,轉角會不平滑
               
            }

        });
        
        TweenMax.to(this.node.getComponent(TweenMaxCocosPlugin),0.25,
        {
            lineOffestX:1,
            repeat:-1
           
        });

    }

    public destory():void
    {
        TweenMax.killTweensOf(this.node.getComponent(TweenMaxCocosPlugin));

    }


  


}


export class LightningEffect extends EventTarget
{
    private _scene:Scene;

    private _container:Node;

    private _aryLightningPartNodes:Node[];

    private _lightningLineTexture:Texture2D;

    private _prefabId:string;

    private _afterAnimationDataId:number;

    private _canvasCameraFx:CameraComponent;

    constructor(...args)
    {
        super();

        this._afterAnimationDataId=0;
        
        this._scene=args[0].scene;

        this._container=args[0].container;

        this._prefabId=args[0].prefabId;

        this._canvasCameraFx=find(args[0].cameraId).getComponent(CameraComponent);

        this._aryLightningPartNodes=[];
        
        this._lightningLineTexture=LoadingResManager.getInstance().getTexture2d(args[0].textureId);

        log('check_lightningEffectNode',args[0]);
        
        //let texture:Texture2D=LoadingResManager.getInstance().getTexture2d(args[0].textureId);
 
        //---test
        
     
        //--for test--
        /*--這是以scene為主的視錐體範圍(scene上的一般的攝影機)
        let startPos={x:testfrustum.leftPoint,y:0};
        let endPos={x:testfrustum.rightPoint,y:0};
        */
        /*
        let startPos={x:0,y:1080/2};
        let endPos={x:1920,y:1080/2};
        //--ps 起點與終點的座標需要換算到scene
        let dxy:{x:number,y:number}={x:endPos.x-startPos.x,y:endPos.y-startPos.y};
        
        let dist=Math.sqrt(dxy.x*dxy.x+dxy.y*dxy.y);
        
        let numberOfTile:number=Math.ceil(dist/texture.width);
        */

        //let testNode:Node=new Node('lightningTest');

        //--要檢查攝影機的Z軸 20231031
        //-https://forum.cocos.org/t/topic/101343
        //-https://forum.cocos.org/t/topic/128594

        /**
         * (1(固定值) << 1(索引值))
         * ex:
         * 以預設UI_2D來看,他在layer 25,所以表示就是
         * (1<<25)
         */
        //testNode.layer=1 << Layers.nameToLayer('fx');//--test for fx

        //testNode.layer=Layers.Enum.UI_2D;//--test for fx
        //log('check_effectLayer',Layers.nameToLayer('fx'),testNode.layer);
        /*
        testNode.addComponent(TweenMaxCocosPlugin);
        
        let linecomponent:Line=testNode.addComponent(Line);
        //@ts-ignore 
        linecomponent.texture=texture;

        linecomponent.worldSpace=true;

        let w=new CurveRange();
      
        w.mode=0;//--引擎限制是0-1
        //w.constant=texture.height;
        w.constant=150;//--美術設定150
        linecomponent.width=w;

        //linecomponent.tile=v2(numberOfTile,1);
        linecomponent.tile=v2(numberOfTile,1);
        
       

        let posData=[v3(startPos.x,startPos.y),v3(endPos.x,endPos.y)];
        //--for test
        //let posData=[v3(startPos.x,startPos.y),v3(startPos.x,startPos.y)];

        linecomponent.positions=posData as never;

        linecomponent.offset=new Vec2(0,0);
        */
        
        /*
        let lineComponent=testNode.addComponent(LightningLine); 
        
        lineComponent.targetTexture=this._lightningLineTexture;

        this._scene.addChild(testNode);

        testNode.setPosition(v3(0,0,0));

        //--for test--
        //--{ startPos: {x:number,y:number},endPos:{x:number,y:number}}
        lineComponent.startAndEndPos=
        {
            startPos:v3(0,1080/2),
            endPos:v3(1920,1080/2)
        };*/
       

        /*
        TweenMax.to(testNode.getComponent(TweenMaxCocosPlugin),0.25,
        {
            lineOffestX:1,
            repeat:-1
           
        });*/

        /*
        log('LightningEffect@@Node',args[0],testNode);

        let lightningBall:Node=instantiate(LoadingResManager.getInstance().getPrefab(args[0].prefabId));
        
        lightningBall.addComponent(LinghtningBall);
        //lightningBall.layer=1 << Layers.nameToLayer('fx');

        log('lightningBall',lightningBall);

        this._container.addChild(lightningBall);

    
        lightningBall.setPosition(v3(0,200,0));
        */

    }

    private convertToScreenCoordinates(centerX: number, centerY: number, screenWidth: number, screenHeight: number, targetX: number, targetY: number): Vec3 
    {
        const screenCenterX = screenWidth / 2;
        const screenCenterY = screenHeight / 2;
    
     
        const offsetX = targetX - centerX;
        const offsetY = targetY - centerY;
    
       
        const screenX = screenCenterX + offsetX;
        const screenY = screenCenterY + offsetY;
    
        return v3(screenX,screenY);
    }


    private converToSceneCoordinates(wPos:Vec3):Vec3
    {
        let spos=this._canvasCameraFx.worldToScreen(wPos);

        let localpos=this._canvasCameraFx.screenToWorld(spos);

        return localpos;
    }


    /**
     * ps--會依照塞進來的順序來開始連線(會把閃電魚塞在第一個)
     * PS--魚的座標會先換成world position
     * @param pos fish world position
     */
    //public showLightningEffect(pos:Vec3[]):void
    public showLightningEffect(data:any):void
    {
        this._afterAnimationDataId=data.id;

        //-{fpos:Vec3,sn:number,type:number,payoff:number}[]


        let pos:Vec3[]=this.getPosData(data.chainFishDatas);

        log('check_showLightningEffect_pos',pos);
        
        let len:number=pos.length;
        
        let lightningLineNode:Node;

        let lightningBallNode:Node;

        let lpStart:Vec3;
        
        let lpEnd:Vec3;

        //let startAndEndPos:{startPos:Vec3,endPos:Vec3};

        for(let i:number=0;i<len-1;i++)
        {
           
            lpStart=this._container.getComponent(UITransform).convertToNodeSpaceAR(pos[i]);
            
            lpEnd=this._container.getComponent(UITransform).convertToNodeSpaceAR(pos[i+1]);
            
            //startAndEndPos={startPos:lpStart,endPos:lpEnd};

            lightningLineNode=new Node('lightningLineNode_'+i);

            //--要檢查攝影機的Z軸 20231031
            //-https://forum.cocos.org/t/topic/101343
            //-https://forum.cocos.org/t/topic/128594

            /**
             * (1(固定值) << 1(索引值))
             * ex:
             * 以預設UI_2D來看,他在layer 25,所以表示就是
             * (1<<25)
             */
            lightningLineNode.layer=1 << Layers.nameToLayer('fx');

            let lineComponent=lightningLineNode.addComponent(LightningLine); 
    
            lineComponent.targetTexture=this._lightningLineTexture;
    
            this._scene.addChild(lightningLineNode);
    
            lightningLineNode.setPosition(v3(0,0,0));

            //let lpStartScreen:Vec3=this.convertToScreenCoordinates(0,0,CocosGameSetting.Game_Width,CocosGameSetting.Game_Height,lpStart.x,lpStart.y);
            
            //let lplpEndScreen:Vec3=this.convertToScreenCoordinates(0,0,CocosGameSetting.Game_Width,CocosGameSetting.Game_Height,lpEnd.x,lpEnd.y);

            //-converToSceneCoordinates
            let lpStartScreen:Vec3=this.converToSceneCoordinates(pos[i]);
            
            let lplpEndScreen:Vec3=this.converToSceneCoordinates(pos[i+1]);
    
            //--開始產生 LINE--
            lineComponent.startAndEndPos={startPos:lpStartScreen,endPos:lplpEndScreen};
            //lineComponent.startAndEndPos={startPos:lpStart,endPos:lpEnd};

            log('check_localPointData',lpStart,lpEnd,lpStartScreen,lplpEndScreen);

            //--閃電球
            lightningBallNode=instantiate(LoadingResManager.getInstance().getPrefab(this._prefabId));
    
            lightningBallNode.addComponent(LinghtningBall);
    
            log('lightningBall',lightningBallNode);
    
            this._container.addChild(lightningBallNode);

            lightningBallNode.setPosition(lpStart);

            this._aryLightningPartNodes.push(lightningLineNode);

            this._aryLightningPartNodes.push(lightningBallNode);

        }

        //-- the last one
        lpEnd=this._container.getComponent(UITransform).convertToNodeSpaceAR(pos[len-1]);
        //--閃電球
        lightningBallNode=instantiate(LoadingResManager.getInstance().getPrefab(this._prefabId));
                
        lightningBallNode.addComponent(LinghtningBall);

        //lightningBall.layer=1 << Layers.nameToLayer('fx');

        log('lightningBall',lightningBallNode);

        this._container.addChild(lightningBallNode);

        lightningBallNode.setPosition(lpEnd);   

        this._aryLightningPartNodes.push(lightningBallNode);

        log('check_allLightData',this._aryLightningPartNodes);

        
        TweenMax.to({},1.5,
        {
            onComplete:this.lightningComplete
        });

    }


    private getPosData(data:any[]):Vec3[]
    {
        //-{fpos:Vec3,sn:number,type:number,payoff:number}
        let pos:Vec3[]=[];

        let len:Number=data.length;

        for(let i:number=0;i<len;i++)
        {
            pos.push(data[i].fpos);
        }

        return pos;
    }


    private lightningComplete=()=>
    { 
        let targetNode:Node;

        while(this._aryLightningPartNodes.length>0)
        {
            targetNode=this._aryLightningPartNodes[0];

            if(targetNode.getComponent(LightningLine))
            {
                (<LightningLine>targetNode.getComponent(LightningLine)).destory();

                this._scene.removeChild(targetNode);

            }else if(targetNode.getComponent(LinghtningBall))
            {
                (<LinghtningBall>targetNode.getComponent(LinghtningBall)).destory();

                this._container.removeChild(targetNode);
            }

            this._aryLightningPartNodes.splice(0,1);
            
        }
        
        this.emit(AnimationEffectEvent.COMPLETE,{
            
            type:AnimationEffectEvent.COMPLETE,
            
            sendObj:{
                
                id:AniEffectID.ANI_Flash_Lightning,

                afterId:this._afterAnimationDataId
            }
        
        });
    }

   
}
  
          