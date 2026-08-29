/**
 * Created by EricHuang on 2023/9/06.
 */
import {Observer} from'./Observer';
import {log} from 'cc';

export interface IListener {
   
    [main:string]:{[sub:string]:Observer[]}   
}

//--預設限定監聽的群組
export enum NotifycationSubbscriptionSubject
{
    AbstractViewModel='AbstractViewModelSubject',//--VM發出來的主題群
    ModelChangeData='ModleChangeDataSubtopic'    //--model資料異動的副主題
}
/**
 * 採用訂閱<主題 or module名稱>為分類,下轄再增訂<副主題>
 * ex:Connect為主題,副主題為updatePlayerIndex.
 * ex:FishModule 為module名稱,副主題為getViewModel(其實就是這個module的訂閱主題啦)
 */
export class Notifycation
{
    private _listeners: IListener;

    private static _instance: Notifycation = null;

    public static getInstance(): Notifycation { return (Notifycation._instance) ? Notifycation._instance : new Notifycation(); };
    
    constructor()
    {
        if (Notifycation._instance != null)
        {
            throw new Error('plz use getInstance() to get Notifycation');
        }

        this._listeners={};
        
        Notifycation._instance = this;
    }


    /**
     * 開啟訂閱專欄的功能
     * @param subbscriptionSubjectMainId 訂閱的主題名稱
     * @param subtopicSubId 訂閱的副主題名稱
     */
    public addSubbscriptionSubject(subbscriptionSubjectMainId:string,subtopicSubId?:string):void
    {
        if(!this._listeners[subbscriptionSubjectMainId])
        {
           this._listeners[subbscriptionSubjectMainId]={};
        }

        if(subtopicSubId)
        {
            if(!this._listeners[subbscriptionSubjectMainId][subtopicSubId])
            {
               this._listeners[subbscriptionSubjectMainId][subtopicSubId]=[];
            }
        }
    }

    /**
     * 
     * @param mainName module名稱/主題名稱
     * @param subjectName 訂閱副主題名稱
     * @param callback 
     * @param once 
     * @returns 
     */
    public on(mainName:string,subjectName:string,callback:Function,observerID:string,once?: boolean):void
    {
       if(!callback)
       {
          return;
       };

       if(!this._listeners[mainName])
       {
          this._listeners[mainName]={};
       }

       if(!this._listeners[mainName][subjectName])
       {
          this._listeners[mainName][subjectName]=[];
       }

       this._listeners[mainName][subjectName].push(new Observer(callback,observerID,once))
    }

    public once(main: string, sub: string, callback: Function,observerID:string): void
    {
        
        this.on(main, sub, callback,observerID,true);
    }

    //--20230906--先想一下要不要給module這個功能,這樣就是讓module有溝通的能力
    public async emitModulle():Promise<any>
    {
       
    }

    
    /**
     * 一個做完接一個
     * @param main module名稱/主題名稱
     * @param sub 訂閱副主題名稱
     * @param args 要回傳的東西
     * @returns 
     */
    public async emit(main: string, sub: string, ...args: any[]):Promise<any>
    {
        let observers:Observer[] = this.getObservers(main, sub);

        
        if (!observers) return;

        for (let i = 0; i < observers.length; i++)
        {
            
            let observer:Observer = observers[i];
            
            if (observer.isOnce) 
            {
                observers.splice(i, 1)
                i--
            }
            
            await observer.notify(sub,...args) as any;
        }
    }


    /**
     * 一個我管你去死的概念,不管你處理得如何,一口氣通知
     * @param main module名稱/主題名稱
     * @param sub 訂閱副主題名稱
     * @param args 要回傳的東西
     * 也不用管訂閱者要不要回傳
     */
    public emitSync(main: string, sub: string, ...args: any[]):void
    //public emitSync(main: string, sub: string,args: any):void
    {
        let observers:Observer[] = this.getObservers(main, sub);
        
        if (!observers) return;

        for (let i = 0; i < observers.length; i++)
        {
            
            let observer:Observer = observers[i];
            
            if (observer.isOnce) 
            {
                observers.splice(i, 1)
                i--
            }
            
            observer.notify(sub,...args);
            //observer.notify(sub,args);
        }

    }

   /*
   ---requestData demo----
   class testA { 
        constructor() {}

        async requestData() {
            try {
                const response = await notification.requestData();
                log("testA received data:", response);
              
            } catch (error) {
                console.error("Error in testA:", error);
            }
        }
    }

    class testB {
        constructor() {
            notification.on("dataRequest", "subtopic", this.handleDataRequest.bind(this));
        }

        async handleDataRequest() {
            try {
                
                await new Promise((resolve) => setTimeout(resolve, 2000));
                const responseData = "Data from testB";
               
                notification.emit("dataResponse", "subtopic", responseData);
            } catch (error) {
                console.error("Error in testB:", error);
            }
        }
    }
     */

    public async requestData(mainResponse: string,subRes:string, mainRequest:string,observerID:string): Promise<any> 
    {
        
        return new Promise((resolve, reject) => {
            //- public once(main: string, sub: string, callback: Function,observerID:string): void
            //notification.on("dataResponse", "subtopic", (data: any) => {
            this.on(mainResponse, subRes, (data: any) => {
                resolve(data);
            },observerID);
    
            //notification.emit("dataRequest", "subtopic");
            this.emitSync(mainRequest,subRes);
        });
    }



    /**
     * 
     * @param mainName module名稱/主題名稱
     * @param subjectName 訂閱副主題名稱
     * @param callback 
     * @returns 
     */
    public hasCallback(mainName: string, subjectName: string, callback: Function): boolean {
        
        if (
            this._listeners[mainName] &&
            this._listeners[mainName][subjectName] &&
            this._listeners[mainName][subjectName].some(observer => observer.callback === callback)
        ) {
            return true;
        }
        return false;
    }

    /**
     * 取消指定的訂閱
     * @param mainName module名稱/主題名稱
     * @param subjectName 訂閱副主題名稱
     * @param callback 
     * @returns 
     */
    public off(mainName: string, subjectName: string,callback: Function,observerID:string):boolean
    {
        
        if (!this._listeners[mainName]) return false;

        if (!this._listeners[mainName][subjectName]) return false;

        let observers: Observer[] = this._listeners[mainName][subjectName];

        if (!observers) return false;

        let index = observers.findIndex(observer => 
        {
            return observer.compar(callback,observerID);
        });

        
        if (-1 !== index) 
        {
            observers.splice(index, 1);
        
        }else{
            
            return false;
        }
        
        if (observers.length === 0)
        {
            delete this._listeners[mainName][subjectName];
        }

        return true;

    }

    public offMainListens(mainName:string):void
    {
        if (this._listeners[mainName])
        {
            delete this._listeners[mainName];
        }
    }

    public offSubListens(mainName: string, subjectName: string):void
    {

        if (this._listeners[mainName])
        {
            delete this._listeners[mainName][subjectName];
        }

    }

    private getObservers(mainName: string, subjectName: string): Observer[]
    {
        log('check_getObservers',mainName,subjectName,this._listeners);
        if (!this._listeners[mainName])
        {
            return
        }
        
        let observers: Observer[] = this._listeners[mainName][subjectName];
        
        if (!observers) {
            
            return
        }
        return observers;
    }





    



    
}