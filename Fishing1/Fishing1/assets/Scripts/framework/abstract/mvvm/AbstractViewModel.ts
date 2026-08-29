/**
 * Created by EricHuang on 2023/9/07.
 */

import {ObserverClassical} from'./Observer';
import {Notifycation,NotifycationSubbscriptionSubject} from'./Notifycation';
import {AbstractModel} from'./AbstractModel';
import {PropertyDecorator} from'../PropertyDecorator';
import {Component} from'cc';
import {log} from 'cc';
//import {restrictToGameMain } from'../mvvm/';


//export class AbstractViewModel extends Component implements ObserverClassical
export class AbstractViewModel  implements ObserverClassical
{
    public id:string;//--實作他的類別名稱

    private _model:AbstractModel=null;

    //--local端測試模式
    protected _localDebug:boolean;

    /*
    protected _gameType:string;

    set gameType(value:string)
    {
      this._gameType=value; 
    }*/

    set localDebug(value:boolean)
    {
      this._localDebug=value;
    }

    get localDebug():boolean
    {
      return this._localDebug;
    }
     
    //-@Bindable stopGame
    constructor()
    {
        //super();
        this._localDebug=false;
        //--觀察者比對需要用的
        this.id=this.constructor.prototype['id'] || null;
        //--繼承過來的model
        //this._model =new (this.constructor.prototype['_model'])();
        //this._model =this.constructor.prototype['_model'];

        //log('check_vmData',this._model,this.id);
       

        /*
        this._model =new (this.constructor.prototype['_model'])();
        
        this._model.addObserver(this);
        log('check_vmData',this._model,this.id);
        (<TestModel>this._model).testChangeValue();
        */
       //this.bindables(this.constructor['bindables'] || [])
    }

    public addModel<T extends AbstractModel>(value:T):void
    {
       this._model=value;
    }

    /*
    protected onLoad():void
    {
        this.bindables(this.constructor['bindables'] || [])
        //--新增給view訂閱的model資料異動主題
        //Notifycation.getInstance().addSubbscriptionSubject(NotifycationSubbscriptionSubject.AbstractViewModel,NotifycationSubbscriptionSubject.ModelChangeData);
        
        this._model.addObserver(this);
        
        this._model.loaded();
        
        this.onModelChangeSubject();
        //--this._model.getMutables可以取得model註冊的屬性(這個要給view監聽用的)
        log('check_vmData',this._model,this.id,this._model.getMutables(),this);
        //log('check_vmData_instance',this._model instanceof TestModel);
        //(<TestModel>this._model).testChangeValue('sfasfsasdadsadsa');
    }*/

    public init():void
    {
        this.bindables(this.constructor['bindables'] || [])
        //--新增給view訂閱的model資料異動主題
        //Notifycation.getInstance().addSubbscriptionSubject(NotifycationSubbscriptionSubject.AbstractViewModel,NotifycationSubbscriptionSubject.ModelChangeData);
        
        this._model.addObserver(this);
        
        this._model.loaded();
        
        this.onModelChangeSubject();

        log('check_vmData',this._model,this.id,this._model.getMutables(),this);
    }


    
    public async notify(key:string, value: any):Promise<void>
    {
        //---接收model資料改變的派送
        log('vm get notify',key,value);
        Notifycation.getInstance().emit
        ( 
            NotifycationSubbscriptionSubject.AbstractViewModel,
            key,
            value
        );
        
    }

    //--local端的測試流程20230927 
    public localDebugMode(key:string,value:any,localDebugResType?:string):void
    {
        this._model.localDebugMode(key,value,localDebugResType); 
    }

    public sendServer(key:string,value:any,localDebugResType?:string):void
    {
        log('check_VM_sendServer',key,value);
       
        this._model.sendServer(key,value);
    }

    //--20240129--實在不想開出這個方法(用來執行model裡面的方法)
    public executeModelMethod(id:string,value:any):void
    {
        this._model.executeModelMethod(id,value);
    }

   
 
    //---給View訂閱的,要拿model的變化事件
    
    private onModelChangeSubject():void
    {
        let ary:string[]=this._model.getMutables();

        for(let i:number=0;i<ary.length;i++)
        {
            //--view 自己去註冊變動的屬性名稱(變動的屬性也是使用者自己定義的)
            Notifycation.getInstance().addSubbscriptionSubject(
                
                NotifycationSubbscriptionSubject.AbstractViewModel,
                ary[i]  
            );
           
        }
    }

    public setModelData(key: string,value:any):void
    {
        this._model[key] = value;
    }

    /**
     * view只需要透過vm.XXX就可以拿資料了
     * PS這些動態的屬性是透過 @Bindable _testTestModeValue2
     * (這是在model透過@Mutable _testTestModeValue2:string綁上去的)
     * 所以vm 在綁的時候名字要跟model綁的名稱相同.
     * 且,拿的時候也要用相同的名稱
     * @param keys 綁定的屬性
     */
    private bindables(keys: string[] = []) :void
    {
        keys.forEach((key: string) => {
            const parent = this.getDescriptor(key)
            if (!parent) {
                Object.defineProperty(this, key, {
                    get: () => {
                        //log('get vm data form modle',key);
                        //log('check_model_data',this._model[key]);
                        return this._model[key];
                    }
                    ,
                    set: value => {
                        this._model[key] = value
                    },
                    configurable: true
                })
            }
        })
    }

    //--檢查VM裡面是否已經綁過了
    private getDescriptor(key: string): PropertyDescriptor | null
    {
        let object = this, descriptor
        do {
            //返回指定对象所有自身屬性（非继承屬性）的指定描述對象
            //--return 
            descriptor = Object.getOwnPropertyDescriptor(object, key);

            object = Object.getPrototypeOf(object);

            if (descriptor) 
            {
                return descriptor.get || descriptor.set ? descriptor : null;
            }
        
        } while (object)
        
        return null;
    }

}
//--在vm上透過裝飾器將要取model的變數給綁近來,vm再透過model去拿
export let Bindable = PropertyDecorator.bind(null, 'bindables');


export function viewModel(observerid:string,model?:any ) 
{
    return function (target) {
        //target.prototype._model= model;
        target.prototype.id=observerid;
        //log('check_dectator',target,model,target.prototype._model);
    };
}
/*
export function restrictToGameMediator(target: any, key: string, descriptor: PropertyDescriptor)
{
    const connect = descriptor.value;
  
    descriptor.value = function (...args: any[])
    {
      // 檢查call function是否為GameMainAbstractView(GameMediator)
      log('check_restrictToGameMediator',this,args);
      if (this instanceof GameMainAbstractView) 
      {
        return connect.apply(this, args);
      
      } else {
        
        throw new Error("Access to this method is restricted.");
      }
    
    };
}*/

/*
export function restrictToGameMain() {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            if (this instanceof GameMainAbstractView) {
                return originalMethod.apply(this, args);
            } else {
                throw new Error("Access to this method is restricted.");
            }
        };

        return descriptor;
    };
}*/