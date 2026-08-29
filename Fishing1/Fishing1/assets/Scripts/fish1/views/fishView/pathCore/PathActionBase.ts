/**
 * Created by EricHuang on 2023/7/12.
 */

import { PathFlockInfo } from "../pathCore/basePath/BasePath";
import { PathFlockUnit } from "../pathCore/basePath/BasePath";
import { Flock } from "../pathCore/basePath/BasePath";
import { EventTarget } from "cc";
import { fishMeshState } from '../../../../framework/game/model/ModelDefinitionsBase';
import {log} from 'cc';

export class PathActionBase extends EventTarget
{
    
    public numActionsID:number;
    public tokenID:string;
    protected _stageWH:{w:number,h:number};//---layer2D stage
    //protected _frustum:{leftPoint:number,rightPoint:number,topPoint:number,bottomPoint:number};//---3d frustum
    //protected _frustum:FrustumInfo;//---3d frustum
    //public strPathID:string;
    protected _fishTypeState:number=fishMeshState.fish2D;
    protected _transforme:number=1;
    protected _jsonPathTarget:any;//---json路徑
    protected _flockInfo:PathFlockInfo[];
    protected _flock:Flock;
    protected _isReverse:boolean;//--是否反轉路徑
    //protected _currentPath:string;

    constructor(id:string)
    {
        super();
        this.tokenID=id;
        this._jsonPathTarget=null;
        this._flockInfo=[];
        this._flock=new Flock();
        this._isReverse=false;
        //this._marchOutPositions=null;
        
    }

    public setReverse(b:boolean):void
    {
        this._isReverse=b;
    }

    /*
     *json:有json產生的路徑就會塞陣列,沒有則是null
     * FlockInfo反正你自定義自己在這裏面搞定..自己銷毀
     *
    */
    public setPath(f?:PathFlockInfo[]):void
    {
        //--這邊改成直接產生路徑(因為jsondata會先set好)
        this._flockInfo=f;
        
    }

    //---重新加回群聚核心裡面(20230712取消群聚)
    public addPath(u:PathFlockUnit[]):void
    {
 
    }

    //---產生路徑override this~flock在這邊自己產生搞定^_<
    public setFlock():void
    {
         
        //---當然你也可以在裡面自定義多組的flock(flock在裡面產生)
        //---一種群聚產生一個flock..在特殊魚群當中,有可能存在1個以上的flock
    }

    /**
     *
     * @param o {aryFish:flockingCore.FlockUnit}[該表演的魚群數量]
     *  @param t 時間
     * @param fishType 魚隻的呈現形式("2D" / "3D")
     * @param transforme 魚隻的變形比例
     */
    //public injectUnitInFlocks(o:{aryFish:flockingCore.FlockUnit[]}[],t:number,fishType:string,transforme:number):void
    public injectUnitInFlocks(o:PathFlockUnit[],t:number,fishType:number,transforme:number):void
    {

        this._fishTypeState=fishType;
        this._transforme=transforme;
        /*
        if (this._jsonPathTarget["summon"]) //招喚用
        {
            var count:number = Math.floor(this._flockInfo.modifyCurve.length / 4);
            var tempArray = this._flockInfo.modifyCurve.splice(count,this._flockInfo.modifyCurve.length - count);
            this._flockInfo.modifyCurve = tempArray.concat(this._flockInfo.modifyCurve);
        }*/

        //log('injectUnitInFlocks',t);
        this.setFlockUnits(o);
        this.behaviorScript(t);

    }

    public reSetAllFlockUnits(o:PathFlockUnit[],t:number):void
    {
        //log("reSetAllFlockUnits*****",o,t);
        this._flock.removeAllFlockUnit();//---clean
        this.setFlockUnits(o);
        this.behaviorScript(t);
    }


    protected setFlockUnits(o:PathFlockUnit[]):void
    {
        let flockUnit:PathFlockUnit;
        let len:number=o.length;
        for(let i:number=0;i<len;i++)
        {
            flockUnit=o[i];
            flockUnit.isReverse=this._isReverse;
            flockUnit.positions=this._flockInfo;
            this._flock.pushFlockUnit(flockUnit);
        }

        //log('setFlockUnits_checkUnits',this._flock.getUnits());

    }

    //----override this---需要回傳flock裡面的flockunit的當前數量
    public removeSingleUnit(u:PathFlockUnit):number
    {
        var n:number = this._flock.removeFlockUnit(u);
        return n;
        //return 0;
    }

    //----移除該路徑(remove flockunits)
    public cleanAll():void
    {
        //---全部移除
        this._flock.removeAllFlockUnit();
    }

    public beforeRemoveToClean():void
    {
        this._flock=null;
        this._jsonPathTarget=null;
        this._flockInfo=null;
        //this._marchOutPositions=null;
    }


    //---行為腳本
    protected behaviorScript(t:number):void
    {
        //log("TTTTTT>>>"+t);
        this._flock.update(t);
    }

    public updatePathAction(t:number):void
    {
        this.behaviorScript(t);
    }

    public exitAllPath():void
    {
        let pathFlockUnits:PathFlockUnit[]=this._flock.getUnits();
        this.exitPath(pathFlockUnits);
        /*
        let len:number=pathFlockUnits.length;
        for(let i:number=0;i<len;i++)
        {

        }
        */

    }

     //---退場要把魚群灌進來
    public exitPath(f:PathFlockUnit[]):void
    {
        //---退場完成移除送REMOVED事件出來
        //this.dispatchEvent(new PathCenter.PathEvent(PathCenter.PathEvent.PATH_REMOVED));
        let len:number=f.length;
        //let random:number=0;
        //let vx:number=0;
        //let vy:number=0;
 
        for(var i:number=0;i<len;i++)
        {
            //random= Math.PI + Math.random() * (Math.PI / 3);
            //vx = Math.cos(random) * 20;
            //vy = Math.sin(random) * 20;
            //f[i].goAway(5, {x:vx, y:vy, z:0});
            f[i].goAway(5);
        }
 
    }



 









}