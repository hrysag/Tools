/**
 * Created by EricHuang on 2023/9/20.
 * 抽象類別,讓使用者繼承來擴展
 */
import {FishViewBase} from '../../../game/views/fishViewBase/FishViewBase';
import {FishData} from './FishData';
import {Node} from 'cc';
import {log} from 'cc';



//export abstract class FishView <TFishData extends FishData>extends FishViewBase{ 
export abstract class FishView extends FishViewBase{ 
   
    protected _aryFishData:FishData[];

    protected _poolFishData:FishData[];//--objPool

    protected _fishContainer:Node;

    protected _fishShadowContainer:Node;
    
    protected _fishAimContainer:Node;

    protected _lockFish:FishData;//--被鎖定的魚

    
   
    constructor()
    {
        super(); 
        
        this._classId='FishView';
    }
    
    //===================about fish===================================================================================================
    
    abstract createFish(fishInfo:any):void

    abstract removeAllFish():Promise<void>

    abstract cleanTable():Promise<void>
   

    abstract removeFishById(id:number):Promise<void>

    abstract getOutsideFish(fid:number):number[]

    //--秀出禁止打擊的符號在魚身上
    protected abstract displayProhibitSign(fd:FishData):void

    protected abstract unDisplayProhibitSign(fd:FishData):void
    
    abstract setPlayerIdAfterCoordinateMode(playerId:number):void
   
    //--持續改變顯示魚的賠率 
    abstract updateOddsForSPFish(value:{fishSn:number,odds:number}):void
    
     
    public init():void
    {
        //拿魚種的設定資料
        this.fishTypeKeyMap=this._viewModel['_fishTypeKeyMap'];

        this.fishTypeSpeedMap=this._viewModel['_fishTypeSpeedMap'];
        //拿賠率表(這邊是要clone出來的資料)
        this.oddsList=this._viewModel['_aryOddsInfo'];

        this._poolFishData=[];

        this._aryFishData=[];

        log('check_fishData_init',this._fishTypeSpeedMap,this._fishTypeKeyMap,this._oddsList);

    } 
 
    //--假死狀態
    //---魚隻假死(不受碰撞/打擊/更新/路徑)影響.但存在場上..
    public setFishisDead(id:number):void
    {
        for(let i:number=0;i<this._aryFishData.length;i++)
        {
            if(this._aryFishData[i].id==id)
            {
                this._aryFishData[i].isDead=true;

                this._aryFishData[i].countHitAni=0;

                this.hitFishAniComplete(this._aryFishData[i]);

                break;
            }

        }
    }

     //-----禁止打擊某種type的魚隻
    public prohibitFish(type:number):void
    {
        for(var i:number=0;i<this._aryFishData.length;i++)
        {
           
            if(this._aryFishData[i].fishType==type)
            {
                this._aryFishData[i].prohibit=true;

                this.displayProhibitSign(this._aryFishData[i]);
                    
                /*   
                if(this._aryFishData[i].fishMesh.constructor==FishCenter.FishCustomAnimation)
                {
                    (<FishCenter.FishCustomAnimation>this._aryFishData[i].fishMesh).stopShooting();

                }else{
                        
                    this._aryFishData[i].stopShooting();
                }*/
            }
        }
    }

    //-----解鎖某種類型的魚隻
    public unProhibitFish(type:number):void
    {
        for(var i:number=0;i<this._aryFishData.length;i++)
        {
           
            if(this._aryFishData[i].fishType==type)
            {
                this._aryFishData[i].prohibit=false;

                this.unDisplayProhibitSign(this._aryFishData[i]);
              
            }
        }
    }
    
    

    public getFishTypeById(id:number):number
    {
        
        let returnType:number=-1;
        
        let fd:FishData=this.getFishById(id);
        
        if(fd!=null)
        {
            returnType=fd.fishType;
        }

        return returnType;
        
          
    }

    public getFishById(id:number):FishData
    {
        let len:number=this._aryFishData.length;

        let f:FishData=null;
        
        for(let i:number=0;i<len;i++)
        {

            if(this._aryFishData[i].id==id)
            {
                f=this._aryFishData[i];
                break;
            }
        }

        return f;
    }



    public getSchoolOfFishByType(type:number):FishData[]
    {
      
        let len:number=this._aryFishData.length;

        let schoolOfFish:FishData[]=[];
        
        for(let i:number=0;i<len;i++)
        {

            if(this._aryFishData[i].fishType==type)
            {
                schoolOfFish.push(this._aryFishData[i]);
            }
        }

        return schoolOfFish;
    }

    public getFishAndIndexbyId(id:number):{f:FishData,index:number}
    {
        let fd:{f:FishData,index:number}={f:null,index:-1};
            
        for(let i:number=0;i<this._aryFishData.length;i++)
        {
            if(this._aryFishData[i].id==id)
            {
                fd.f=this._aryFishData[i];

                fd.index=i;
                
                break;
            }
        }

        return fd;
    }

    public getOddsByFishType(type:number):string
    {
        let r:string='';
           
        let len:number=this._oddsList.length;

        for(let i:number=0;i<len;i++)
        {
            if(this._oddsList[i].id==type)
            {
                r=this._oddsList[i].odds;

                break;
            }
        }
        
        return r;
    }

   
    

   

    //===================about path===================================================================================================
    abstract reSetPathTime(fishInfo:any):void
   

    //---新產生的表演群校正時間(送進時間(秒)..重新校正)
    //abstract reSetFishBronTime(value:any[]):void
    abstract reSetFishBronTime(value?:number):void
   

    protected abstract getFishByShowGroupId(id:string):FishData[]
    

    /**
     * 魚群表演系統全部退場
     */

    abstract exitAllFish():void
   

    /**
     * 
     * @param groupId 目前把pathID放在fd.groupID裡面(fd.pathID他是pathid+'_'+Date.now)
     */
    /*
    public exitSingleGloupPath(groupId:string):void
    {
        let  len:number=this._aryFishData.length;

        let aryExit:{f:PathFlockUnit,pathId:string}[]=[];

        for(let i:number=0;i<len;i++)
        {
            if(this._aryFishData[i].pathGroupID==groupId)
            {
                //--fishFlockUnit:PathFlockUnit;
                aryExit.push({f:this._aryFishData[i].fishFlockUnit,pathId:this._aryFishData[i].pathID});
            }
        }
        
        this._pathCenter.exitSingleGloupPath(groupId,aryExit);

    }*/

    //---將魚隻剃除在運動路徑之外
    /*
    public removeSinglePathUnitByFishId(fishId:number):void
    {
        //-this._pathCenter.createPath(unit[3],fd.pathID,unit[4]);
        let len:number=this._aryFishData.length;

        let fishPathLen:number=-1;

        for(let i:number=0;i<len;i++)
        {
            if(this._aryFishData[i].id==fishId)
            {
                
                fishPathLen=this._pathCenter.removeSingleUnit(this._aryFishData[i].pathID,this._aryFishData[i].fishFlockUnit);
                
                if(fishPathLen==0)
                {
                    log('removeGroup!!!!!');
                    this._pathCenter.deleteGroupPath(this._aryFishData[i].pathID);
                    //--該表演群裏頭的魚隻都被移除
                } 

                break;
            }
        }

    }*/

    /**
     * 單一表演群路徑退場(移除單一路徑)
     * @param id 表演路徑單一識別碼
     */
    /*
    public exitSinglePathByPathId(id:string):void
    {
    
        let len:number=this._aryFishData.length;

        let aryFlockUnit:PathFlockUnit[]=[];

        for(let i:number=0;i<len;i++)
        {
            if(this._aryFishData[i].pathID==id)
            {
                aryFlockUnit.push(this._aryFishData[i].fishFlockUnit);
            }
        }

        this._pathCenter.exitPath(id,aryFlockUnit);
    }*/

    //===================hit fish animation===================================================================================================
    public changeFishesAnimation(value:number[]):void
    {
        let len:number=value.length;

        for(let i:number=0;i<len;i++)
        {
            this.changeSingleFishAnimation(value[i]);
        }
    }
    
    //---擊中動畫效果
    protected abstract changeSingleFishAnimation(id:number):void
   

    protected abstract hitFishAniComplete(fd:FishData):void

    abstract updateFrezzeHitAniUpdate(t:number):void
    
    //===================aim target===================================================================================================
    
    abstract addFishAimLock(id:number,isPlayer:boolean,table:number):void
   
 
    //abstract removeFishAimLock(fishId:number,table:number):void
    abstract removeFishAimLock():void
   
 
    abstract removeAllAim():void
   

    //===================sp function of fish===================================================================================================
   

    



    

   

}

