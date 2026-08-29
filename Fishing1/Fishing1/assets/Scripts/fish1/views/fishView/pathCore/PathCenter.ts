/**
 * Created by EricHuang on 2023/7/12.
 */

import { EventTarget, path, Vec3 } from "cc";
import { JsonAsset } from "cc";
import { PathActionBase } from './PathActionBase';
import {LoadingResManager} from '../../../../framework/logic/loading/LoadingResManager';
import { Flock } from "./basePath/BasePath";
import { PathFlockInfo } from "./basePath/BasePath";
import { PathFlockUnit } from "./basePath/BasePath";
import { CocosGameSetting } from "../../../../framework/utils/CocosGameSetting";
import {log} from 'cc';
//import { HFFishPath } from './testPath';

export type PathGroup=
{
    id?:string,
    path?:PathActionBase[],
    bornTime?:number
}

export type ResetPathData=
{
    pathTokenID:string,//--要抽出actionBase
    reNewBornTime:number//--重算之後的目前存活時間
    flockUnit:PathFlockUnit
}


export class PathCenter extends EventTarget
{

    private _aryPlayingPathAction:PathGroup[];
    //private _countId:number;
    //private _stageWH:{w:number,h:number};//---座標轉換在路徑之外做
    
    //private _frustum:FrustumInfo;//---3d frustum
    //private _createFlockInfo:CreateFlockInfo;//----產生基本路徑
    
    //----2016/11/28--用來比對參照的
    //private _mapFlockInfoTarget:any;//---hasmap--預先創造的flockinfo
    
    //---2020-05-28
    private _hasMapPaths:{[key:string]:PathFlockInfo[]};//---server送進來的指定路徑包
    
    //private _pathIndex:string;//--每個專案都會變---這邊用來搜尋專案路徑(與一般基本路徑的差別)
    private pathList: any[]  = [];
    private reversePath: any[] = [];


     

    //constructor(boundary:{x:number,y:number,w:number,h:number})
    constructor()
    {
        super();
        //this._stageWH={w:boundary.w,h:boundary.h};
        Flock.bound={x:0,y:0,width:CocosGameSetting.Game_Width,height:CocosGameSetting.Game_Height};
        this._hasMapPaths={};
        this._aryPlayingPathAction=[];
        //-groupPath--小隻魚
        /**
         * 20230925-以下呼叫兩次this.setPath,先關閉
         * 還沒處理完loadingmanager的問題
         */
        this.setPath(LoadingResManager.getInstance().getJsonData('pathCommon'),100000,13);
        //-middle--大隻魚
        this.setPath(LoadingResManager.getInstance().getJsonData('pathCommonMiddle'),200000,13);
        //--20231018-特殊路徑(召喚/boss)
        

        //log('check_pathSp',LoadingResManager.getInstance().getJsonData('pathCommonSp'));
        //--20231018-特殊路徑(召喚)
        this.setPath(LoadingResManager.getInstance().getJsonData('pathCommonSp'),300000,6);
        //--20231127-特殊路徑(boss)
        this.setPath(LoadingResManager.getInstance().getJsonData('pathCommonBoss'),400000,1);
        
        log('check_map',this._hasMapPaths);
        //this.testOldPath();
        //this.testPathPos();

    }


    private testPathPos():void
    {
        let count:any[]=[];

        for(let i in this._hasMapPaths)
        {
            let len:number=this._hasMapPaths[i].length;
            
            for(let j:number=0;j<len;j++)
            {
                
                
                /*
                if(this._hasMapPaths[i][j].position.x<0 || this._hasMapPaths[i][j].position.y<0 || this._hasMapPaths[i][j].position.x>1920 || this._hasMapPaths[i][j].position.y>1080)
                {
                    if(j>1)
                    {
                        log('overPath_',i,'index_',j,'_data_',this._hasMapPaths[i][j].position);
                        
                        if(count[count.length-1]!=i)
                        {
                            count.push(i);
                        }
                    }
                    
                }*/
            }
        }

        log('total_overpath',count.length,count);
    }


    //--測試用~要刪掉
    /*
    private testOldPath():void
    {
        for (const groupmidkey of Object.keys(FBSFMMIDDLE_PATH)) {
            const group = FBSFMMIDDLE_PATH[parseInt(groupmidkey)];
            const groupID: number = group.type;
            let startPathID = (1 + groupID) * 1000 + 200000;
            log('startPathID',startPathID,'_groupID_',groupID);
            const paths = group.pathData;
            for (const pathkey of Object.keys(paths)) {
                const path = paths[parseInt(pathkey)];
                const nodeData = path.NodeData;
                const pointList = [];
                const reversepointList = [];
                for (const nodeKey of Object.keys(nodeData)) {
                    const node = nodeData[parseInt(nodeKey)];
                    const point = {x : 0, y : 0, time : 0};
                    point.x = node.x;
                    point.y = node.y;
                    point.time = node.time * 1000;
                    pointList.push(point);

                    const point2 = {x : 0, y : 0, time : 0};
                    point2.x = node.x;
                    point2.y = node.y;
                    point2.time = node.time * 1000;
                    reversepointList.push(point2);
                }

                //this.pathList[startPathID] = new HFFishPath(pointList, false);
                //this.reversePath[startPathID] = new HFFishPath(reversepointList, true);

                this.pathList[startPathID] = pointList
                this.reversePath[startPathID] =reversepointList;

                startPathID++;
            }
        }

        log('check_path_testOld',this.pathList);

    }*/

   
    /**
     * 
     * @param pathId server 送進來的pathId
     * @param pathTokenID 自己創的單一識別碼的pathid
     * @param reverse 是否反轉路徑
     * @param gloupSN 群組路徑(目前沒有用到)
     */
    //--step1
    public createPath(pathId:number,pathTokenID:string,reverse:boolean,gloupSN?:string):void
    {
        
        let pathGroup:PathGroup;
        let pathData:PathFlockInfo[]=this.getPathData(pathId,reverse);
        log('check_createPath',pathData,pathId,pathTokenID,reverse,gloupSN);
        if(pathData)
        {
            let p:PathActionBase=new PathActionBase(pathTokenID);
            p.setReverse(reverse);
            p.setPath(pathData);
            p.setFlock();//--沒再用20240403
            //--因為現在幾乎沒有使用群的關係,所以路徑群的ID幾乎用pathTokenID來儲存
            let gloupId:string=(gloupSN)?gloupSN:pathTokenID;
            pathGroup={id:gloupId,path:[p],bornTime:0};
            //pathGroup.path.push(p);
            this._aryPlayingPathAction.push(pathGroup);

        }
    }

    
    /**
     * 初始後啟動路徑
     * @param id 表演群單一識別id
     * @param ary PathFlockUnit[](通常一隻魚掛一個,但也可以是一群魚掛一個(但這是以群為單位,目前應該是移除該機制))
     * @param t 時間(單位-秒) 
     * @param fishType 魚的形式(2d/3d)
     * @param transforme 縮放的比例依據
     */
    //--step2
    public setUnitInFlock(id:string,ary:PathFlockUnit[],t:number,fishType:number,transforme:number):void
    {
        let a:PathActionBase=this.getPlayingPathClass(id);

        log('setUnitInFlock',a);
        
        if(a)
        {
            a.injectUnitInFlocks(ary,t,fishType,transforme);//---送進去就啟動魚群
        }
    }


    //---新產生的表演群校正時間
    public reSetNewFishBronTime(value:ResetPathData[]):void
    {
        let len:number=value.length;

        for(let i:number=0;i<len;i++)
        {
            for(let j:number=0;j<this._aryPlayingPathAction.length;j++)
            {
                if(this._aryPlayingPathAction[j].id==value[i].pathTokenID)
                {
                    let  lenPath:number=this._aryPlayingPathAction[i].path.length; 

                    for(let k:number=0;k<lenPath;k++)
                    {
                        this._aryPlayingPathAction[j].path[k].reSetAllFlockUnits([value[i].flockUnit],value[i].reNewBornTime);
                    }
                }

            }
        }
    }

    //---因網頁凍結重設路徑位置與時
    public reSetPathTime(fishInfo:any,groupPath:any):void
    {
    
    }


    //--秒為單位
    public updataPath(t:number):void
    {
        let len:number= this._aryPlayingPathAction.length;

        if(len>0)
        {
            let lenPath:number;
            for(var i:number=0;i<len;i++)
            {
                lenPath=this._aryPlayingPathAction[i].path.length;
                for(var j:number=0;j<lenPath;j++)
                {
                    this._aryPlayingPathAction[i].path[j].updatePathAction(t);
                }
            }
        }
    }


    /**
     * ps-這是刪除表演群裡面的一個路徑
     * @param pathId  單一識別碼
     * @param flockunit 魚隻本身的flock參照
     * @returns 在表演群中flock當下的flockunit總量
     */
    public removeSingleUnit(pathId:string,flockunit:PathFlockUnit):number
    {
        let a:PathActionBase=this.getPlayingPathClass(pathId);
        
        if(a)
        {
            let len:number=a.removeSingleUnit(flockunit);
            return len;
        }else{
            
            return -1;
        }
    }

    
    /**
     * 在尚未發生退場時,移除該路徑(這是刪除整個路徑)
     * @param pathId 單一識別碼
     */
    public removeAllPath(pathId:string):void
    {
        let a:PathActionBase=this.getPlayingPathClass(pathId);
        if(a)
        {
            a.cleanAll();
        }

    }

    //--直接將整個表演群剃除更新序列
    public deleteGroupPath(pathId:string):void
    {
        let len:number=this._aryPlayingPathAction.length;

        for(let i:number=0;i<len;i++)
        {
            if(this._aryPlayingPathAction[i].id==pathId)
            {
                let pathLen:number=this._aryPlayingPathAction[i].path.length;
                for(let j:number=0;j<pathLen;j++)
                {
                    this._aryPlayingPathAction[i].path[j].beforeRemoveToClean();
                }
                
                this._aryPlayingPathAction.splice(i,1);

                //log('removeFishGroupPath_',pathId,'\n'+'paths',this._aryPlayingPathAction,'\n'+'len',this._aryPlayingPathAction.length);
                break;
            }
        }
    }


    /**
     * 單一表演路徑退場
     * @param pathId 表演系統單一識別碼
     * @param f PathFlockUnit
     */
    public exitPath(pathId:string,f:PathFlockUnit[]):void
    {
        let a:PathActionBase=this.getPlayingPathClass(pathId);
        if(a)
        {
            a.exitPath(f);
        }

    }

    //--全部表演路徑退場
    public exitAllPath():void
    {
       for(let i:number=0;i<this._aryPlayingPathAction.length;i++)
       {
            let a:PathActionBase=this.getPlayingPathClass(this._aryPlayingPathAction[i].id);
            if(a)
            {
               a.exitAllPath();
            }
       }
    }


    //-單一表演群離場(要思考一下,因為現在沒有群了)
    public exitSingleGloupPath(groupId:string,obj:{f:PathFlockUnit,pathId:string}[]):void
    //public exitSingleGloupPath(pathId:string):void
    {
        let len:number=this._aryPlayingPathAction.length;
        
        for(let i:number=0;i<len;i++)
        {
            if(this._aryPlayingPathAction[i].id==groupId)
            {
            
                var pathLen:number=this._aryPlayingPathAction[i].path.length;
                var groupdataLen:number=obj.length;
                for(var k:number=0;k<groupdataLen;k++)
                {
                    for(var p:number=0;p<pathLen;p++)
                    {
                        if(this._aryPlayingPathAction[i].path[p].tokenID==obj[k].pathId)
                        {
                            //log("get_groupExit");
                            this._aryPlayingPathAction[i].path[p].exitPath([obj[k].f]);
                            break;
                        }

                    }

                }

                    break;
            }
        }
        /*
       for(let i:number=0;i<this._aryPlayingPathAction.length;i++)
       {
            if(this._aryPlayingPathAction[i].id==pathId)
            {
                let a:PathActionBase;
                for(let j:number=0;j<this._aryPlayingPathAction[i].path.length;j++)
                {
                   a=this._aryPlayingPathAction[i].path[j];
                   a.exitAllPath();
                } 
            }
       }*/

    }


    /**
     * 
     * @param jsonData jsondata
     * @param newIndex 路徑編碼的類群(base-100000/midele-200000/sp-300000)
     * @param len 要抽取的數量
     */
    private setPath(jsonData:JsonAsset,newIndex:number,len:number):void
    {
        //let jsonDatas=LoadManager.getInstance().getJsonData('pathCommonMiddle');
        let jsonDatas=jsonData;
        //let keys:string=['type1'];
        log('check_JsonDatas',jsonDatas);
        let maxLen:number=len;
        let key:string;
        let data:{type:number,pathData:any};
        let paths:PathFlockInfo[];
        let pd:PathFlockInfo;
        let d:any;
        let pathIdKey:number=0;
        
        
        for(let i:number=0;i<maxLen;i++)
        {
            key='type'+i+'.json';
            
            data=jsonDatas[key];
            //--sp path是3000開頭的編號(所以加300000)
            //--midele path 是2000開頭的編號(所以加200000)
            //--base path是1000開頭的編號(所以加100000)
            pathIdKey=(1 + data.type) * 1000 + newIndex;
            
            for(let j:number=0;j<data.pathData.length;j++)
            {
                paths=[];
                
                for(let k:number=0;k<data.pathData[j].NodeData.length;k++)
                {
                    d=data.pathData[j].NodeData[k];
                    pd=new PathFlockInfo();
                    pd.position=new Vec3(d.x,d.y,0);
                    pd.time=d.time;
                    pd.gloupId=key;
                    pd.id=data.type;
                    paths.push(pd); 
                } 
                //log('index_',pathIdKey+j,'check_node_len:',data.type,data.pathData[j].NodeData.length);
                this._hasMapPaths[pathIdKey+j]=paths;
            }
            
        }

    }



    //--取得該路徑的名稱
    private getPathData(id:number,reverse:boolean):PathFlockInfo[]
    {
       let r:PathFlockInfo[]=this._hasMapPaths[id];
       if(r)
       {
           r= JSON.parse(JSON.stringify(r));//-deep clone objects
           if(reverse)
           {
              r=r.reverse();
           }
       }

       return r;
    }


    /**
     * 
     * @param id 單一識別碼
     * @returns PathActionBase
     */
    private getPlayingPathClass(id:string):PathActionBase
    {
        let t:PathActionBase=null;
        let len:number=this._aryPlayingPathAction.length;
        //-{id:string,path:PathActionBase[],bornTime:number}
        for(var i:number=0;i<len;i++)
        {
            if(this._aryPlayingPathAction[i].id==id)
            {
                let aryPaths=this._aryPlayingPathAction[i].path;
                
                for(let j:number=0;j<aryPaths.length;j++)
                {
                   if(aryPaths[j].tokenID==id)
                   {
                      t=aryPaths[j];
                      break;
                   }
                }
            }
            if(t!=null)
            {
               break;
            }
        }

        return t;
    }





    

}



