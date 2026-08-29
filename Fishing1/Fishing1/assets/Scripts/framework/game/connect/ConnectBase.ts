/**
 * Created by EricHuang on 2023/9/11.
 * 
 */
import {EventTarget } from 'cc';
import {ResultForConnect } from '../strategy/Strategy';
import {IfConnectStrategy } from '../strategy/Strategy';
import {GameEventBase } from '../events/eventBase';
import {InitialSetting,PomeloDisconnectEvents,CodeMapFunction,LoginInfo,LoginResponse,SendWithSync} from '../../../../Libs/fish-common-lib/types/networking/definitions';
import Connector from '../../../../Libs/fish-common-lib/types/networking/connector';
import {log} from 'cc';

export interface IfConnectBase
{
    connect(ip?:string):Promise<void>
    sendServer(key:string,value:any):void
    //--本地端測試,不連線,直接走寫入資料的流程
    localDebugMode(key:string,value:any,localDebugResType?:string):void
}



/**
 * 使用者要另外實作這個抽象類別
 */

export abstract class GameConnectBase <T extends IfConnectStrategy>extends EventTarget implements IfConnectBase,PomeloDisconnectEvents{
    
    protected _strategy:IfConnectStrategy;

    protected _connector:Connector;

    protected _sid:string;

    protected _gameType:number;

    /**
     * <T extends IfConnectStrategy>-->約束傳進來的參數
     * @param strategy 必須是要實踐IfConnectStrategy的class
     */
    constructor(strategy: new () => T)
    {
        super();

        this._strategy=new strategy();
    }

    //--連線前準備
    abstract prepareBeforeConnect(gameType:number):Promise<any>

    abstract connect(ip?:string):Promise<void>
   
    
    abstract sendServer(key:string,value:any):void

    //--local端的測試流程 
    abstract localDebugMode(key:string,value:any,localDebugResType?:string):void
    
    //--async ():Promise<void>=>
    //protected getConnectDataFromPomelo= async (code: string, data: any):Promise<void>=>
    //--不需要等待了因為這是直接被動的等資料回來
    protected getConnectDataFromPomelo=  (code: string, data: any)=>
    {
        let serverData:ResultForConnect=this._strategy.strategyConnectDataFromPomelo(code,data);
        
        log('chec_fish1_ConnectBaseGetConnectDataFromPomelo@',serverData);
        //--準備打事件出去
        this.emit(GameEventBase.CONNECTOR_EVT,serverData);
    }

    
    //=============IF PomeloDisconnectEvents=========================================================

    public onDisconnected= (info: object)=>
    {
        log('onDisconnected@@',info,this);
        this.disconnectedMsg(info);
    }

    public onError=(error: object)=>
    {
        log('onError',error,this);
        this.errorMsg(error);
    }

    //---錯誤訊息主要會從這邊來
    public onKick=(msg:{reason: string})=>
    {
        this.kickMsg(msg);
    }

    public onPing=(quality: 'good' | 'adequate' | 'poor')=>
    {
        this.onPingMsg(quality);
    }

    //--箭頭涵式不能夠複寫..他的this就是自己本身
    abstract disconnectedMsg(info: object):void
    abstract errorMsg(error: object):void
    abstract kickMsg(msg:{reason: string}):void
    abstract onPingMsg(pingData:string):void

}
