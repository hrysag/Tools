/**
 * Created by EricHuang on 2023/10/01.
 * 
 */
import {AbstractView} from '../../abstract/mvvm/AbstractView';

export abstract class GameMainLogicBase extends AbstractView
{
   
   constructor()
   {
      super();
   }
   
   abstract init():void;

   abstract cleanTable():void;

   public getDataFromgameMediator(viewUserId:string,dataKey:string,value?:any):any
   {
      return this._gameMediator.getViewUserData(viewUserId,dataKey,value);
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