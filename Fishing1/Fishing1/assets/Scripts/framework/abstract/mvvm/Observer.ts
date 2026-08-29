/**
 * Created by EricHuang on 2023/9/06.
 */
import {log} from 'cc';

//--傳統的ObserverSubject
export interface ObserverSubjectClassical
{
    addObserver(o:ObserverClassical):void
    removeObserver(o:ObserverClassical):void
    hasObserverListen(o:ObserverClassical):boolean
    compar(o:ObserverClassical):boolean
    notify(key:string, value: any):void
}

//--傳統的Observer
export interface ObserverClassical
{
    id:string;//--實作他的類別名稱
    notify(key:string, value: any):void
}

export type Handler=(...params: any[]) => any


export interface IObservable 
{
    //--context=class自己
    addObserver(callback: Handler,contextID: string): void
    removeObserver(callback: Handler,contextID: string): void
    hasObserverListen(callback: Handler,contextID: string):boolean
    notify(key:string, value: any):void
    //compar(callback: Function, contextID: string):boolean
}

export class Observer implements ObserverClassical
{
   /**
    * 
    * @param callBackFun 只能使用lambda function
    * @param once 是否只送一次
    * 
    */
    private _callback: Function;

   
    private _once: boolean;
    
    public id:string;
     
    get isOnce():boolean
    {
       return this._once;
    }

    get callback():Function
    {
       return this._callback;
    }


    constructor(callBackFun:Function,contextID:string,once?:boolean)
    {
        this._callback=callBackFun;
        this._once=once;
        this.id=contextID;
    }

    /*
    public compar(callback: Function):boolean
    {
        return this._callback === callback;
    }*/

    public compar(callback: Function, observerID: string): boolean 
    {
        
        if (callback)
        {
            return observerID == this.id && callback == this.callback;
        
        } else {
            
            return observerID == this.id;
        }
    }

    public async notify(sub:string,...args: any[]):Promise<any> 
    //public async notify(sub:string,...args: any):Promise<any> 
    {
        log('check_notify@@',sub,args);
        return this._callback.call(this,sub,args);
    }


}




