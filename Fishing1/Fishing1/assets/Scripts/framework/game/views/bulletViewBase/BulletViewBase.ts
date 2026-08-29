/**
 * Created by EricHuang on 2023/9/17.
 * 初始與啟動流程會用到的方法與資料
 */
import {AbstractView} from '../../../abstract/mvvm/AbstractView';
import {BulletSettingData} from '../../model/ModelDefinitionsBase';

export class BulletViewBase <T extends BulletSettingData=BulletSettingData>extends AbstractView{

    protected _playerTableIndex:number;//---玩家所在座位 20210914

    protected _canUpdate:boolean;

    protected _aryActionInfo:T[][];//--基本子彈設定資料

    protected _strNowAction:string;//-local端再用的當前子彈種類資料
    
    //--key就是server 要的子彈種類--20231004
    protected _mapCannonInfo:{[key:number]:{score:number,speed:number,powerup:number}};

     
    /**
     * this._aryScorePool=[[2],[5],[10],[20],[50]]; or
     * this._aryScorePool=[
                [5,10,20,30,40],---共用一個砲座與炮管
                [50,60,70,80,90],
                [100,200,300,400,500]
        ]

     * 每個陣列就代表砲座與炮管的切換單位 
     */
    protected _aryGunScorePool:number[][]//--分數夾的設定(他與砲座變化相關)

    //--可以override掉
    set aryGunScorePool(value:number[][])
    {
        this._aryGunScorePool=value;
    }

    //--可以override掉
    set aryActionInfo(value:T[][])
    {
       //---0=一般系統/1=成就系統
        this._aryActionInfo=value;
    }

    //--可以override掉
    set playerTableIndex(value:number)
    {
        //--index=1-4
        this._playerTableIndex=value;
    }

    set canUpdate(value:boolean)
    {
        this._canUpdate=value; 
    }


    get canUpdate():boolean
    {
        return this._canUpdate;
    }

    constructor()
    {
        super();

        this._playerTableIndex=-1;

        this._canUpdate=false;

        this._aryActionInfo=[];//---子彈種類的相關資訊

        this._strNowAction='';//--當前的運動系統

        this._mapCannonInfo={};

    }

    public changeBullet(id:string):void
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