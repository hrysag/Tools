/**
 * Created by EricHuang on 2023/9/17.
 * 初始與啟動流程會用到的方法與資料
 */
import {AbstractView} from '../../../abstract/mvvm/AbstractView';
import {FishInitData} from '../../model/ModelDefinitionsBase';
import {OddsInfo} from '../../model/ModelDefinitionsBase';
import {GameCoordinateMode} from '../../../game/coordinates/CoordinateDefinitions';


export class FishViewBase<T extends FishInitData=FishInitData,U extends OddsInfo=OddsInfo> extends AbstractView{
    
    protected _playerTableCoordinate:number;
    
    protected _rotateValue:number;

    protected _coordinateMode:string;

   
    protected _fishTypeSpeedMap:{[key:number]:number};
    //--產生魚用的資料 
    protected _fishTypeKeyMap:{[key:number]:T};
    //--odds list
    protected _oddsList:U[];
    
    protected _canUpdate:boolean;

    protected _aryblockBoundaryTest:number[];//--剔除邊界檢測


    set aryblockBoundaryTest(value:number[])
    {
        this._aryblockBoundaryTest=value;
    }

    //--可以override掉
    set playerTableCoordinate(value:number)
    {
        this._playerTableCoordinate=value;
        //--因座位不同判定旋轉用的  
        this._rotateValue=(value==1 || value==2)?-1:1;
        
    }

    set coordinateMode(value:string)
    {
        //--會先做set playerTableCoordinate,之後才做set coordinateMode
        this._coordinateMode=value;
        
        if(this._coordinateMode==GameCoordinateMode.GameViewMode_Four_in_one_noRotation)
        {
            this._rotateValue=1;    
        }
    }
    
    //--可以override掉
    set fishTypeKeyMap(value:{[key:number]:T})
    {
       this._fishTypeKeyMap=value;
    }

    set fishTypeSpeedMap(value:{[key:number]:number})
    {
       this._fishTypeSpeedMap=value;
    }

    set oddsList(value:U[])
    {
       this._oddsList=value;
    }

    get canUpdate():boolean
    {
        return this._canUpdate;
    }

    set canUpdate(value:boolean)
    {
        this._canUpdate=value;
    }

    
    constructor()
    {
        super();
    }

    //--以秒為單位
    public updateFish=(t:number)=>
    {

    }

    //======給其他平行的view拿資料用的(透過mediator去拿)
    //--interface abstract
    public getData(dataKey:string,value?:any):any
    {
       
    }
    //--interface abstract
    public excute(value?:any):any
    {
        
        
    }

    
}