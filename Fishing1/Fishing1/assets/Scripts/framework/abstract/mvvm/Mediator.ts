/**
 * Created by EricHuang on 2023/9/11.
 * 中介者模式(mediator pattern)+命令模式(command pattern)
 * command 用來限縮 加入中介者的類別倒過來亂使用中介者的方法
 */
export interface CommandMediator
{
    _dataForGetViewData:{viewUserId:string,dataKey:string,value?:any};
    _dataForExecute:{viewUserId:string,value:any};
    execute(value:any): any;
    getData(dataKey:string,value?:any):any;
}


export interface MediatorViewUser
{
    id:string;
    setMediator(mediator: GameMediator): void;
    //--dataKey 要取的資料方法索引(使用者自訂),value 取資料要帶入的參數(使用者自訂)
    getData(dataKey:string,value?:any):any;
    excute(value?:any):any;
}

export interface GameMediator 
{
    setViewUser(id:string,view:MediatorViewUser):void;
    //--dataKey 要取的資料方法索引(使用者自訂),value 取資料要帶入的參數(使用者自訂)
    getViewUserData(viewUserId:string,dataKey:string,value?:any):any    
    //getViewUserData(command:CommandMediator):any    
    excute(viewUserId:string,value?:any):any;
    //excute(command:CommandMediator):any;
}


export class CommandforMediatorViewUser implements CommandMediator 
{
    protected _viewUser:MediatorViewUser;

    //--interface
    public _dataForGetViewData:{viewUserId:string,dataKey:string,value?:any};
    //--interface
    public _dataForExecute:{viewUserId:string,value:any};

    constructor(value:MediatorViewUser)
    {
        this._viewUser=value; 
    }
    
    //--override-
    public execute(): any
    {
        //this._viewUser.excute()
    }

    //--override-
    public getData():any
    {
       //this._viewUser.
    }
}

