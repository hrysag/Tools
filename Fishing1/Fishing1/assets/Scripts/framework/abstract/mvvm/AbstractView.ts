/**
 * Created by EricHuang on 2023/9/06.
 */

import { Component } from "cc";
import { AbstractViewModel } from "./AbstractViewModel";
import { FacadeForGameView } from "./Facade";
import { SchedulableTool } from "./SchedulableTool";
import { Notifycation,NotifycationSubbscriptionSubject} from "./Notifycation";
import { MediatorViewUser ,GameMediator} from "./Mediator";
import { PropertyDecorator} from "../PropertyDecorator";
import {ISchedulable} from 'cc';
import {log} from 'cc';
//import { Notifycation,NotifycationSubbscriptionSubject} from "./Notifycation";


export abstract class AbstractView extends Component implements MediatorViewUser
{
   
   protected _viewModel:AbstractViewModel;

   protected _gameMediator:GameMediator;

   protected _vmId:string;

   protected _schedulableTool:SchedulableTool;

   protected _classId:string;

   get schedulableTool():SchedulableTool
   {
     return this._schedulableTool;
   }

   public id:string;//--wtf..沒用到?


   constructor()
   {
       super();

       this.id='';
       
       this._classId='';


   }

   protected onLoad():void
   {
      
       this._viewModel =FacadeForGameView.getInstance().getClassInstance();
       
       log('testAbstractView_onLoad',this._viewModel);

       log('check_viewBind!!',this.constructor['viewBinds']);
       
       //--有綁定資料的情況下直接掛上監聽
       if(this.constructor['viewBinds'])
       {
            this.initRegisterNotifyFromVM();
       }
      
   }

   //--註冊你要聽的VM資料回傳事件(從notify拿)---使用者自己監聽
   /**
    * view 每new一個就會產生一個,只有vm和model是單一實體
    * 所以就讓使用view的使用者去override掉modeleChangeHandler
    */
   protected initRegisterNotifyFromVM():void
   {
       
      //Notifycation.getInstance().on(NotifycationSubbscriptionSubject.AbstractViewModel,'事件名稱',callbackfun,observerID=你的classID)
      
      for(let i of this.constructor['viewBinds'])
       {
          if(i!=undefined && i!=null)
          {
             log('check_initRegisterNotifyFromVM',this._classId,i,this.constructor.name);
             /**
              * 不要用constructor.name..再用Uglify處理後,因為沒辦法設定--keep-fnames
              * 所以function name會被拿掉..很雷20240328
              */
             Notifycation.getInstance().on(NotifycationSubbscriptionSubject.AbstractViewModel,i,this.modeleChangeHandler,this._classId);
          }
       }
       
   }

   /**
    * override it
    * 你可以將sub當作key值,switch case他來做相關的處理
    * @param sub 屬性變數的字串
    * @param value 傳送的資料
    */
   protected modeleChangeHandler=(sub,value)=>
   {
       
   }

   
  
   /**
    *  this._gameMediator.getViewUserData(viewid,viewfunkey,funvalue)--
    * @param mediator 塞入中介者,你可以反過來藉由中介者的方法去拿別的view的資料
    */
   public setMediator(mediator: GameMediator): void
   {
       this._gameMediator=mediator;
      
   }

   
   //---interface 別的view拿你的資料
   /**
    * view向中介者拿其他view的資料會執行
    * @param dataKey 用來分辨要拿啥資料
    * @param value 用來給拿資料需要的參數
    */
   abstract getData(dataKey:string,value?:any):any;

   /**
    * 中介者要統一執行view的方法會用
    * @param value 用來分辨要執行哪個方法
    */
   abstract excute(value?:any):any;
  
    

}

export let viewBind = PropertyDecorator.bind(null, 'viewBinds');

export function viewfun(viewModelId:string ) 
{
    return function (target) {
        target.prototype._vmId= viewModelId;  
    };
}