/**
 * Created by EricHuang on 2023/11/20.
 */

import { LoadingResManager } from "../../../../framework/logic/loading/LoadingResManager";
import { BaseEvent } from "../../../../framework/game/events/eventBase";
import { CocosGameSetting } from "../../../../framework/utils/CocosGameSetting";
import {Component, EventTarget, Node,UITransform,v3, Vec3} from 'cc';
import {instantiate} from 'cc';
import {find} from 'cc';
import {Animation} from 'cc';
import {Scene} from 'cc';
import {log} from 'cc';
import { TweenMaxCocosPlugin } from "../../../../framework/utils/TweenMaxPlugin";




export class SummonExploation extends Component
{
    
    public isPlaying:boolean;

    private _topAnimation:Animation;

    private _contentAnimation:Animation;

    //private _useTable:number[];//--紀錄使用的桌號
    private _useTable:number;//--紀錄使用的桌號
    
    get useTable():number
    {
        return this._useTable;
    }

    

    constructor()
    {
        super();

        this._useTable=-1;

        this.isPlaying=false;
    }

    protected onLoad():void
    {
        //-//----上面一層是縮放,下面一層是透明度,所以要播兩段
        
        this._topAnimation=this.node.getComponent(Animation);

        let clip=this._topAnimation.clips;

        this._topAnimation.defaultClip=clip[0];

        this._topAnimation.stop();


        this._contentAnimation=this.node.getChildByName('FX_arrow').getComponent(Animation);

        clip=this._contentAnimation.clips;

        this._contentAnimation.defaultClip=clip[0];

        this._contentAnimation.stop();

        log('check_callPropEffect',this.node,this._topAnimation,this._contentAnimation);

        //log('check_animationClip',clip);
    }


    private onComplete=(type,state)=>
    {
        //log('SummonExploation_aniComplete',type,state);
       

        //this.node.emit(BaseEvent.COMPLETE,this._useTable.shift());
        //this.node.emit(BaseEvent.COMPLETE,{target:this.node,table:this._useTable});
        this.node.emit(BaseEvent.COMPLETE,this._useTable);


        //this.closeAndStop();

    }


    public openAndPlay(table:number):void
    {
        this._topAnimation.on(Animation.EventType.FINISHED,this.onComplete);

        this.isPlaying=true;

        this._useTable=table;
        
        this.node.active=true;

        this._topAnimation.play();

        this._contentAnimation.play();

    }

    public closeAndStop():void
    {
        this._topAnimation.off(Animation.EventType.FINISHED,this.onComplete);

        this.isPlaying=false;
        
        this.node.active=false;

        this._topAnimation.stop();

        this._contentAnimation.stop();

        //this._useTable=-1;
    }

    public clean():void
    {
        this._useTable=-1;
    }

   

}

export class DiscAni extends Component
{
    public id:number;

    public isPlaying:boolean;

    private _animation:Animation;
    

    constructor()
    {
        super();

        this.isPlaying=false;
    }

    protected onLoad():void
    {
        this._animation=this.node.getComponent(Animation);

        let clip=this._animation.clips;

        this._animation.defaultClip=clip[0];

        this.closeAndStop();
        //this._animation.stop();

        //log('check_animationClip',clip);
    }

    public openAndPlay():void
    {
        this.node.active=true;

        this.isPlaying=true;

        this._animation.play();

    }

    public closeAndStop():void
    {
        this.node.active=false;

        this.isPlaying=false;

        this._animation.stop();
    }
}

//export class CallAniEffect extends EventTarget
export class CallAniEffect
{
    private _container:Node;

    private _scene:Scene;
    //--每個玩家都會顯示
    //private _summonPokeBalls:Node[];//--丟出去的球

    private _summonDiscs:Node[];//--砲塔上的

    //private _exprostationFx:Node;//---中間爆開的

    private _aryPoolExprostationFx:Node[];

    private _aryRunningExprostationFx:Node[];

    private _strExprostationFxPrefabId:string;

    //private _pokeballPrefabId:string;

    //private _effectPokeBallContainer:Node;//--UI之下寶貝球用的container
    //private _summonDataId:number;//--紀錄要丟出來的魚的資料id

    constructor(...args)
    {
        
        //super();
        
        //let awardNode=instantiate(LoadingResManager.getInstance().getPrefab(args[0].prefabId));
        //log('check_CallAniEffect',args[0]);

        //-container:find('Canvas/topAniEffectNode')--在UI之上
        this._container=args[0].container;

        //this._effectPokeBallContainer=args[0].aniEffectContainer;

        this._scene=args[0].scene;

        this._summonDiscs=[];

        //this._summonPokeBalls=[];

        //this._pokeballPrefabId=args[0].callSymbolPrefabId;

        this._aryPoolExprostationFx=[];

        this._aryRunningExprostationFx=[];

        this._strExprostationFxPrefabId=args[0].callFxPrefabId;


        let discComponent:DiscAni;

        for(let i:number=0;i<4;i++)
        {
            let dsicFX:Node=instantiate(LoadingResManager.getInstance().getPrefab(args[0].callTowerPrefabId));

            log('check_discFXData',dsicFX);

            discComponent=dsicFX.addComponent(DiscAni);

            discComponent.id=i;

            this._container.addChild(dsicFX);

            /*
            let worldVec3=v3(args[0].playerPositions[i].x,args[0].playerPositions[i].y);
            
            let localV3=this._container.getComponent(UITransform).convertToNodeSpaceAR(worldVec3);

            dsicFX.setPosition(localV3);
            */

            this._summonDiscs[i]=dsicFX;
            //dsicFX.setPosition(v3(args[0].playerPositions[args[0].playerTable].x,args[0].playerPositions[args[0].playerTable].y));

        }

        
       
    }


    private finishEffectHandler=(e)=>
    {
        log('finishEffectHandler',e);

        let nodeTarget:Node;

        for(let i:number=0;i<this._aryRunningExprostationFx.length;i++)
        {
            if(this._aryRunningExprostationFx[i].getComponent(SummonExploation).useTable==e)
            {
                nodeTarget=this._aryRunningExprostationFx[i];

                this._aryRunningExprostationFx.splice(i,1);

                nodeTarget.off(BaseEvent.COMPLETE,this.finishEffectHandler);

                nodeTarget.getComponent(SummonExploation).closeAndStop();
                
                nodeTarget.getComponent(SummonExploation).clean();

                this._summonDiscs[e].getComponent(DiscAni).closeAndStop();
        
                this._scene.removeChild(nodeTarget);

                this._aryPoolExprostationFx.push(nodeTarget);

                break;
            }
        }

    }

   

    public setDataAfterSetRoom(playerPositions:{x:number,y:number}[]):void
    {
        let len:number=this._summonDiscs.length;

        let dsicFX:Node;

        for(let i:number=0;i<len;i++)
        {
            dsicFX=this._summonDiscs[i];

            let worldVec3=v3(playerPositions[i].x,playerPositions[i].y);
            
            let localV3=this._container.getComponent(UITransform).convertToNodeSpaceAR(worldVec3);

            //dsicFX.setPosition(v3(0,0));
            dsicFX.setPosition(localV3);
        }
    }

    public resetRoomData(value?:any):void
    {
        this._aryPoolExprostationFx.length=0;
        
        let len:number=this._summonDiscs.length;

        let dsicFX:Node;

        for(let i:number=0;i<len;i++)
        {
            dsicFX=this._summonDiscs[i];

            dsicFX.setPosition(v3(0,0));
        }
    }

    public closeEffect():void
    {
      
        /*
        if(this._exprostationFx.getComponent(SummonExploation).isPlaying)
        {
            this._exprostationFx.getComponent(SummonExploation).closeAndStop();
        }*/

        for(let j:number=0;j<this._aryRunningExprostationFx.length;j++)
        {
           
            let nodeTarget=this._aryRunningExprostationFx[j];

            nodeTarget.off(BaseEvent.COMPLETE,this.finishEffectHandler);

            this._aryRunningExprostationFx.splice(j,1);

            nodeTarget.getComponent(SummonExploation).closeAndStop();

            nodeTarget.getComponent(SummonExploation).clean();

            this._scene.removeChild(nodeTarget);

            this._aryPoolExprostationFx.push(nodeTarget);

            j=j-1;

        }

        for(let i:number=0;i<this._summonDiscs.length;i++)
        {
            if(this._summonDiscs[i].getComponent(DiscAni).isPlaying)
            {
                this._summonDiscs[i].getComponent(DiscAni).closeAndStop();
            }
        }
    }


    /**
     * 
     * @param table 0-3
     * @param startPositionWorld p:Vec3(worldPos),r:Vec3(shootCenterWp),h:number(containSizeData height)
     * @param endPositionWorld world pos
     * @param summonId data id
     * 
     */
    public showCallPropEffect(table:number,startPositionWorld:{p:Vec3,r:Vec3,h:number},endPositionWorld:Vec3,summonId?:number):void
    {
           
        this._summonDiscs[table].getComponent(DiscAni).openAndPlay();

        //this._exprostationFx.getComponent(SummonExploation).openAndPlay(table);

        let exprostationFx:Node;

        if(this._aryPoolExprostationFx.length<=0)
        {
            
            exprostationFx=instantiate(LoadingResManager.getInstance().getPrefab(this._strExprostationFxPrefabId));
        
            exprostationFx.addComponent(SummonExploation);

            
        }else{

            exprostationFx=this._aryPoolExprostationFx.pop();
        }

        log('check_summonExplotionNode',exprostationFx);
        
        this._aryRunningExprostationFx.push(exprostationFx);

        this._scene.addChild(exprostationFx);

        exprostationFx.setPosition(v3(CocosGameSetting.Game_Width/2,CocosGameSetting.Game_Height/2,-100));
                
        exprostationFx.active=true;

        exprostationFx.on(BaseEvent.COMPLETE,this.finishEffectHandler);

        exprostationFx.getComponent(SummonExploation).openAndPlay(table);
        
        
        

        

        /*---old
        let startLocalPosition=this._effectPokeBallContainer.getComponent(UITransform).convertToNodeSpaceAR(startPositionWorld.r);

        let endLocalPosition=this._effectPokeBallContainer.getComponent(UITransform).convertToNodeSpaceAR(endPositionWorld);

        let pokeball:Node;

        if(this._summonPokeBalls.length>0)
        {
            pokeball=this._summonPokeBalls.pop();
       
        }else{

            pokeball= instantiate(LoadingResManager.getInstance().getPrefab(this._pokeballPrefabId));

            pokeball.addComponent(DiscAni);

            pokeball.addComponent(TweenMaxCocosPlugin);
        }

        this._effectPokeBallContainer.addChild(pokeball);

        pokeball.setPosition(startLocalPosition);

        pokeball.getComponent(DiscAni).openAndPlay();

        this._summonDiscs[table].getComponent(DiscAni).openAndPlay();

        let tweenComponent=pokeball.getComponent(TweenMaxCocosPlugin);

        
        TweenMax.to(tweenComponent,0.3,
        {
            x:endLocalPosition.x,
            y:endLocalPosition.y,
            onCompleteParams:[{index:table,tw:tweenComponent}],
            onComplete:(value)=>
            {
                //--send event 
                this._exprostationFx.getComponent(SummonExploation).openAndPlay();

                value.tw.node.getComponent(DiscAni).closeAndStop();

                this._summonDiscs[value.index].getComponent(DiscAni).closeAndStop();

                this._effectPokeBallContainer.removeChild(value.tw.node);

                if(this._summonPokeBalls.length<15)
                {
                    this._summonPokeBalls.push(value.tw.node);
                }
            }
        });*/

    }



   

}
  
              