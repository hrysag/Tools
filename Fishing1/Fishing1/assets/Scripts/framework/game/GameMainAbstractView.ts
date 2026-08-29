/**
 * Created by EricHuang on 2023/9/11.
 */
import { AbstractView } from "../abstract/mvvm/AbstractView";
import { GameMediator,MediatorViewUser } from "../abstract/mvvm/Mediator";
import { AbstractViewModel } from "../abstract/mvvm/AbstractViewModel";
import { AbstractModel } from "../abstract/mvvm/AbstractModel";
import { FacadeForGameView } from "../abstract/mvvm/Facade";
import { GameConnectBase } from "../game/connect/ConnectBase";
import { IfConnectStrategy } from "../game/strategy/Strategy";
import { Component } from "cc";
import {log} from 'cc';

import { CCClass,_decorator } from 'cc';


export abstract class GameMainAbstractView extends Component implements GameMediator
{
    protected _mediatorViewUserMap:{[key:string]:MediatorViewUser};

    protected _classId:string;

    private _vmInstance:new ()=>AbstractViewModel;
    
    private _connect:GameConnectBase<IfConnectStrategy>;

    private _strategy:IfConnectStrategy 

    protected _model: AbstractModel;//-AbstractModel

    protected _localDebug:boolean;

    protected _gameType:number;

    
    constructor()
    {
        super();

        this._classId='';

        this._localDebug=false;

        this._gameType=0;

        this._mediatorViewUserMap={};
        
        //this._vmid=this.constructor.prototype['_vmid'] || null;
       
        this._vmInstance =this.constructor.prototype['_vmInstance'] || null;

        this._strategy=this.constructor.prototype['_strategy'] || null;


        this._connect=new (this.constructor.prototype['_connect'])(this._strategy);
        
        //--繼承過來的model
        this._model=new (this.constructor.prototype['_model'])();

        this._model.netConnect= this._connect;

        //setModelInstance
        FacadeForGameView.getInstance().setModelInstance(this._model);

        //FacadeForGameView.getInstance().addClassInstance(this._vmid,this._vmInstance); 
        FacadeForGameView.getInstance().addClassInstance(this._vmInstance); 
        //--裝飾器要先執行view的
        //log('helloGameMainAbstractView',this._vmid,this._vmInstance);
        log('helloGameMainAbstractView',this._vmInstance);
    }
    
    //---local端的測試
    protected setLocalDebugMode(value:boolean):void
    {
        this._localDebug=value;

        this._model.debug=value;
        
        FacadeForGameView.getInstance().getClassInstance().localDebug=value;
    }

    /*
    protected setGameType(gameType:string):void
    {
        FacadeForGameView.getInstance().getClassInstance(this._vmid).setModelData('_gameType',gameType);
    }*/


    protected async onLoad():Promise<void>
    {
       log('SUPER_GameMainAbstractView'); 


       
       await this.beforeinit();



       this.initloading();
       //this.initUserViews();
    }

    

    protected async beforeinit():Promise<void>
    {
        
    }

    /**
     * override it 
     * 建立處理loading相關的事宜
     */
    protected initloading():void
    {

    }

    
    /**
     *1. start to create views 
     *2. if u need to get data of otherView in the view,u must to call setViewUser
     * 
     */
    protected initUserViews():void
    {
       
    }
     
    //--local 的啟動程序(就是寫大廳的資料去啟動大廳啦)
    protected localDebugGameInit():void
    {
        
    }

    protected async prepareBeforeConnect(gameType:number):Promise<any>
    {
       return this._model.prepareBeforeConnect(gameType);
    }
    

    protected async connect():Promise<void>
    {
        log('GameMainAbstractView_connect'); 
    
        //await this.prepareBeforeConnect();
        
        this._model.connect();
    }

    
    //---將實踐MediatorViewUser interface的view塞進來
    public setViewUser(id:string,view:MediatorViewUser):void
    {
       if(!this._mediatorViewUserMap[id])
       {
           view.setMediator(this);
           this._mediatorViewUserMap[id]=view;
       }
    }

    //--取得MediatorViewUser 的資料

    public getViewUserData(viewUserId:string,dataKey:string,value?:any):any
    {
        //log('getViewUserData',viewUserId,dataKey,this._mediatorViewUserMap);
        if(!this._mediatorViewUserMap[viewUserId])
        {
           return null;
        
        }else{

            return this._mediatorViewUserMap[viewUserId].getData(dataKey,value);
        }
    }    
    
    public excute(viewUserId:string,value?:any):any
    {
        if(!this._mediatorViewUserMap[viewUserId])
        {
           return null;
        
        }else{

            return this._mediatorViewUserMap[viewUserId].excute(value);
        }
    }

}

//--送進來的參數屬性至少要繼承AbstractViewModel
//export function gameMainAbstractView<T extends new ()=> AbstractViewModel,U extends typeof AbstractModel,Tconnect extends typeof GameConnectBase,TStrategy extends new ()=>IfConnectStrategy>(vmid: string, vmClass: T,modelClass:U,connetClass:Tconnect,strategyClass: TStrategy)
export function gameMainAbstractView<T extends new ()=> AbstractViewModel,U extends typeof AbstractModel,Tconnect extends typeof GameConnectBase,TStrategy extends new ()=>IfConnectStrategy>(vmClass: T,modelClass:U,connetClass:Tconnect,strategyClass: TStrategy)
{
    return function (target: any) 
    {
        target.prototype._vmInstance = vmClass;

        //target.prototype._vmid = vmid;

        target.prototype._model = modelClass;

        target.prototype._connect = connetClass;

        target.prototype._strategy=strategyClass;

    };
}




