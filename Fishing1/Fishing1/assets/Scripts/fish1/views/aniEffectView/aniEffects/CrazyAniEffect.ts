/**
 * Created by EricHuang on 2023/11/22.
 */

import { LoadingResManager } from "../../../../framework/logic/loading/LoadingResManager";
import { CocosGameSetting } from "../../../../framework/utils/CocosGameSetting";
import {Component, EventTarget, Node,UITransform,v3, Vec3} from 'cc';
import {instantiate} from 'cc';
import {find} from 'cc';
import {Animation} from 'cc';
import {Scene} from 'cc';
import {log} from 'cc';
import { TweenMaxCocosPlugin } from "../../../../framework/utils/TweenMaxPlugin";



export class DiscAni extends Component
{
    public id:number;

    private _animation:Animation;
    
    constructor()
    {
        super();
    }

    protected onLoad():void
    {
        this._animation=this.node.getComponent(Animation);

        let clip=this._animation.clips;

        this._animation.defaultClip=clip[0];

        this.closeAndStop();
       
    }

    public openAndPlay():void
    {
        this.node.active=true;

        this._animation.play();

    }

    public closeAndStop():void
    {
        this.node.active=false;

        this._animation.stop();
    }
}

//export class CallAniEffect extends EventTarget
export class CrazyAniEffect
{
    private _container:Node;

    private _crazyDiscs:Node[];//--砲塔上的

    constructor(...args)
    {
        
        //super();
        
        //let awardNode=instantiate(LoadingResManager.getInstance().getPrefab(args[0].prefabId));
        log('check_CrazyAniEffect',args[0]);

        //-container:find('Canvas/topAniEffectNode')--在UI之上
        this._container=args[0].container;

        this._crazyDiscs=[];

        let discComponent:DiscAni;

        for(let i:number=0;i<4;i++)
        {
            let dsicFX:Node=instantiate(LoadingResManager.getInstance().getPrefab(args[0].crazyTowerPrefabId));

            log('check_crazy_dsicFX_',dsicFX);

            discComponent=dsicFX.addComponent(DiscAni);

            discComponent.id=i;

            this._container.addChild(dsicFX);

            /*
            let worldVec3=v3(args[0].playerPositions[i].x,args[0].playerPositions[i].y);
            
            let localV3=this._container.getComponent(UITransform).convertToNodeSpaceAR(worldVec3);

            dsicFX.setPosition(localV3);
            */

            this._crazyDiscs[i]=dsicFX;
            
        }

    }

   

    public setDataAfterSetRoom(playerPositions:{x:number,y:number}[]):void
    {
        let len:number=this._crazyDiscs.length;

        let dsicFX:Node;
        
        for(let i:number=0;i<len;i++)
        {
            dsicFX=this._crazyDiscs[i];

            //log('check_crazy_dsicFX_',dsicFX);

            let worldVec3=v3(playerPositions[i].x,playerPositions[i].y);
            
            let localV3=this._container.getComponent(UITransform).convertToNodeSpaceAR(worldVec3);

            dsicFX.setPosition(localV3);
            
        }
    }

    public resetRoomData(value?:any):void
    {
        let len:number=this._crazyDiscs.length;

        let dsicFX:Node;
        
        for(let i:number=0;i<len;i++)
        {
            dsicFX=this._crazyDiscs[i];

            dsicFX.setPosition(v3(0,0));    
        }
    }


    /**
     * 
     * @param table 0-3
     */
    public openCrazyPropEffect(table:number):void
    {
        this._crazyDiscs[table].getComponent(DiscAni).openAndPlay();
    }

    /**
     * 
     * @param table 0-3
     */
    public closeCrazyPropEffect(table:number):void
    {
        this._crazyDiscs[table].getComponent(DiscAni).closeAndStop();
    }





}
   
               