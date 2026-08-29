/**
 * Created by EricHuang on 2023/9/20.
 * VM主要控制
 * 1.拿model的映射資料
 * 2.call server
 * 3.派送server responde data
 * 4.控制流程(call server的流程,或是相關與server的流程(例如斷線後的處理))
 * 5.也可以對映射資料做操作
 */
import {AbstractViewModel,Bindable,viewModel} from '../../abstract/mvvm/AbstractViewModel';
import {FishInitData,OddsInfo,BulletSettingData,TableInfo,BulletActionType} from'../../game/model/ModelDefinitionsBase';
import {ServerSendCode,ServerResCode} from '../../logic/connect/ConnectBaseDefinitions';
import {log} from 'cc';


export  class FishVM extends AbstractViewModel
{
   //====預設資料,view不需要綁定,因為他不會變化
    
   @Bindable _fishTypeKeyMap:{[key:number]:FishInitData};

   @Bindable _fishTypeSpeedMap:{[key:number]:number};

   @Bindable _aryOddsInfo:OddsInfo[];//---賠率資訊

   @Bindable _aryScorePool:number[][];//--砲塔的分數與樣式的分布
   
   @Bindable _mapCannonInfo:{[key:number]:{score:number,speed:number,powerup:number}};

   @Bindable _defualtGunValue:number;//--預設分數

   @Bindable _aryActionInfo:BulletSettingData[][];

   @Bindable _enterRoom:boolean;//--進房通知

   @Bindable _aryRoomInfo:TableInfo[];//---房間內桌位資訊(一個房間四個位置)--紀錄桌位

   @Bindable _playerTableId:number;//--userTable id  0-3

   @Bindable _cleanAllRoom:boolean;

   @Bindable _credit:number;			 // 可用分數

   @Bindable _balance:number;			 // 可用餘額

   @Bindable _base:string;				// 匯率(基注)列表

   @Bindable _loginName:string;		// 會員帳號

   @Bindable _getMatchineDetial:boolean;		// 拿會員的機台資訊(餘額)
   
   @Bindable _autoCreditExchange:boolean;	//--玩家啟動自動換分(2022預設值=true) 

   @Bindable _autoCreditMoney:number;		//----玩家需要自動換分的金額
   
   @Bindable _onCreditExchange:boolean;		//----玩家開洗分來回
   
   @Bindable _hallID:number;			 //_hallID

   @Bindable _strErrorCode:string; // error

   //====預設資料,view不需要綁定,因為他不會變化
   @Bindable _setPlayerRoomforLocalDebug:string;//--localyDebug

   @Bindable _testData:number;
    
    
    constructor()
    {
      super();
      
    }

    protected onLoad():void
    {
      //super.onLoad();
      //---do something
    }

    public async notify(key:string, value: any):Promise<void>
    {
      //---接收model資料改變的派送
      log('vm get notify',key,value);
      super.notify (key,value);

      if(key=='_setPlayerRoomforLocalDebug')
      {
        await this.localDebugInitRoom(key);

        await this.setBalance();
 
        this.localDebugCreateFish();

      }

      if(key=='_testData')
      {
        this.localDebugTestData(); 
      }


        
    }

    /*
    protected localDebugInit():void
    {

    }*/

    protected localDebugTestData():void
    {

    }

    protected localDebugCreateFish():void
    {

    }

    protected  async localDebugInitRoom(key:string):Promise<void>
    {
      //--call server(把資料寫回去繼續下一步驟)
    }


    protected async setBalance():Promise<void>
    {
      //--模擬進房後第一次server送進來的balance
    }



    /*
    public noChangeSetErrCode(value:string):void
    {
      //this._mo=value;
      this._model['_strErrorCode']=value;
    }*/
  

    public sendServer(key:string,value:any,localDebugResType?:string):void
    {
       if(this._localDebug)
       {
         //---走lcoal端的測試流程
         if(key==ServerSendCode.ChoiceLobby)
         {
            localDebugResType=ServerSendCode.EnterRoomLocalDebug;
            localDebugResType=ServerResCode.EnterRoomLocalDebug;
         }

         log('check_localDebug_sendServer',key,value,localDebugResType);

         this.localDebugMode(key,value,localDebugResType);

         this.afterFirstSendServerDebug(key,value,localDebugResType);

        }else{
          
          super.sendServer(key,value);
        }
       
    }

    
    /**
     * 用於localdebug要分兩次驅動不同的server
     * @param key 
     * @param value 
     * @param localDebugResType 
     */
    protected afterFirstSendServerDebug(key:string,value:any,localDebugResType?:string):void
    {

    }

    //--override or pending completion--20230920
    public gameLogout():void
    {

    }

    //--override or pending completion--20230920
    public closeAIOtoGameMenu():void
    {

    }

    
 

}