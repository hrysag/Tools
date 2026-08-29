/**
 * Created by EricHuang on 2023/9/12.
 * 
 */

import {GameConnectBase} from '../game/connect/ConnectBase';
import {IfConnectStrategy} from '../game/strategy/Strategy';
import {TestConnectStrategy} from './TestConnectStrategy';
import {log} from 'cc';

export class TestConnect <T extends IfConnectStrategy>extends GameConnectBase<T>{
    
   constructor(strategyClass: new () => T)
   {
      super(strategyClass);
      log('helloooo_TestConnect');
   }

   public connect(ip?:string):Promise<void>
   {
        if(!this._connector)
        {
         
        }

        //--do something
    
    
        //--再不回傳的情況下      
        return Promise.resolve();
   }


   protected  getConnectDataFromPomelo=async (code: string, data: any)=>
   {
        let serverdata=await this._strategy.strategyConnectDataFromPomelo(code,data);   
        //---dispatchEvent  
   }


    
   public sendServer(key:string,value:any):void
   {
       switch(key)
       {
           case 'XXX':
             //this._connector.login();
           break;
       }
   }

} 