/**
 * Created by EricHuang on 2023/9/06.
 */
import {ObserverSubjectClassical} from'./Observer';
import {ObserverClassical} from'./Observer';
import {PropertyDecorator} from'../PropertyDecorator';
import {GameConnectBase} from'../../game/connect/ConnectBase';
import {IfConnectStrategy} from'../../game/strategy/Strategy';
import {ISchedulable} from 'cc';
import {log} from 'cc';

/**
 * 繼承AbstractModel的class
 * 透過裝飾器@ mutables 將屬性映射上去 添加get/set方法
 */
export class AbstractModel implements ObserverSubjectClassical,ISchedulable
{
    id?: string;
    uuid?: string;

    private _listeners: ObserverClassical[];

    protected _debug:boolean;

    set debug(value:boolean)
    {
        this._debug=value;
    }
   
    set netConnect(value:GameConnectBase<IfConnectStrategy>)
    {
        this._netConnect=value;
    }
    //--給繼承的來做
    protected _netConnect:GameConnectBase<IfConnectStrategy>;

    constructor()
    {   
        log('AbstractModel_init',this);
        this._listeners=[];

        this._debug=false;
    }

    public loaded():void
    {
        this.mutables(this.constructor['mutables'] || []);
        log('AbstractModel_loaded');
    }

    public getMutables():string[]
    {
        return this.constructor['mutables']; 
    }

    //--override it(該方法不對VM開放,直接由mediator操作)
    public async prepareBeforeConnect(gameType:number):Promise<any>
    {
       return  await this._netConnect.prepareBeforeConnect(gameType);
    }
     
    //--override it(該方法不對VM開放,直接由mediator操作)
    public async connect():Promise<void>
    {
        //await this._netConnect.prepareBeforeConnect();

        this._netConnect.connect();
        //log('NOOOOConnectGOGO');  
    }
    //--notify再針對特定函示
    //public addObserver(callback: Handler,contextID: string):void
    public addObserver(o:ObserverClassical):void
    {
       
        let index = this._listeners.findIndex(item => this.compar(o))
        
        if (index === -1)
        {
            this._listeners.push(o);
        }

        log('cgheck_addobserver',this._listeners);
    }

    
    public compar(o:ObserverClassical):boolean
    {
      
        return this._listeners.some(existingObserver => 
        {
            //--檢查ObserverClassical的id是否相同
            return existingObserver.id === o.id;
        });
    }
    
    
    //public removeObserver(callback: Handler,contextID: string):void
    public removeObserver(o:ObserverClassical):void
    {
        
        for(let i=0;i<this._listeners.length;i++)
        {
           //let ob:Observer=this._listeners[i];
           if(this.compar(this._listeners[i]))
           {
               this._listeners.splice(i,1);
               i--;
           }
        }
    }
    
    
    public hasObserverListen(o:ObserverClassical):boolean
    {
       return this.compar(o);
       //return false;
    }

   
    public notify(key: string, value: any):void
    {
        this._listeners.forEach(observer => observer.notify(key, value));
    }

    public destroy():void
    {
       //--清空觀察者?

    }

    public sendServer(key:string,value:any):void
    {
        this._netConnect.sendServer(key,value);
    }

    //--20240129--實在不想開出這個方法(用來執行model裡面的方法)
    public executeModelMethod(id:string,value:any):void
    {

    }

    //--local端的測試流程20230927 
    public localDebugMode(key:string,value:any,localDebugResType?:string):void
    {
        this._netConnect.localDebugMode(key,value,localDebugResType); 
    }

    /**
     * 
     *  @Command onBind() {
        this.onBindHandler()
    }
     */

    //--在vm再用同樣的方式把屬性動態的映射到vm當中,只會給get方法
    private mutables(keys: string[] = []): void
    {
        keys.forEach(key => {
            //-  await this.module.notify.emit('bankCardManag', 'close')
            //let value = this.observable(key, this[key]);
            let value=this[key];
            Object.defineProperty(this, key, {
                
                get: () => value,
                set: newValue => {
                    if (value === newValue) return
                    value = newValue;
                    this.notify(key, value); 
                },
                //configurable:true
                
            })
        })
    }

    
    /**
     * 添加觀察者的對象
     * @param key 
     * @param value 
     */
    /*
    private observable(key: string, value: any):any
    {
        if (this.isObservable(value))
        {
            
            (value as IObservable).addObserver((subKey, value) => {
                
                this.notify(`${key}.${subKey}`, value)
            
            }, this.constructor.name);
        }
        return value
    }*/
    
    /**
     * 檢察屬性對象(value)是否為觀察者的觀察對象
     * @param value 
     * @returns 
     */
    /*
    private isObservable(value: any): boolean 
    {
        return !!(undefined !== value && null !== value && value['addObserver'])
    }*/


}

//--動態把要觀察的屬性灌進去model裡面
export let Mutable = PropertyDecorator.bind(null, 'mutables');

/*export let Mutable = function (target: any, key: string) {
    
    log('check_Mutable',target,key,target.constructor.prototype);
    //let test=Object.getPrototypeOf(target.prototype.constructor);
    
    if (!target.constructor.hasOwnProperty('mutables')) {
        target.constructor['mutables'] = [];
    }
    if (target.constructor['mutables'].indexOf(key) === -1) {
        target.constructor['mutables'].push(key);
    }
}*/
//export let MutableArray = PropertyDecorator.bind(null, 'mutablesArray');