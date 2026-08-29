/**
 * Created by EricHuang on 2023/9/19.
 */
import {AbstractModel,Mutable} from'../../abstract/mvvm/AbstractModel';
import {GameEventBase} from'../../game/events/eventBase';
import {ResultForConnect} from'../../game/strategy/Strategy';
import {FishInitData,OddsInfo,BulletSettingData,TableInfo,BulletActionType} from'../../game/model/ModelDefinitionsBase';
import { GameUtils } from '../../utils/GameUtils';
import {log} from 'cc';

export class FishModelBase extends AbstractModel
{
   //====預設資料,view不需要綁定,因為他不會變化
   
   @Mutable _fishTypeKeyMap:{[key:number]:FishInitData};

   @Mutable _fishTypeSpeedMap:{[key:number]:number};

   @Mutable _aryOddsInfo:OddsInfo[];//---賠率資訊

   //@Mutable _aryScorePool:number[][];//--砲塔的分數與樣式的分布
   /**
    * scoer-分數
    * type-子彈的樣式(server吃這個資料)
    * pu=powerup
    */
   //@Mutable _aryScorePool:{score:number,type:number,pu:number}[][];//--砲塔的分數與樣式的分布
   @Mutable _aryScorePool:number[][];//--砲塔的分數與樣式的分布
   
   @Mutable _mapCannonInfo:{[key:number]:{score:number,speed:number,powerup:number}};

   @Mutable _cleanAllRoom:boolean;//--20240301--玩家離開房間回到選聽畫面
   
   //@Mutable _aryScore:number[][];//--砲塔的分數與樣式的分布

   @Mutable _defualtGunValue:number;//--預設分數

   @Mutable _aryActionInfo:BulletSettingData[][];//--這邊要做兩層,一層成就子彈,一層一般子彈

   @Mutable _aryRoomInfo:TableInfo[];//---房間內桌位資訊(一個房間四個位置)--紀錄桌位

   //====預設資料,view不需要綁定,因為他不會變化
  
   @Mutable _uid:number;//--user id

   @Mutable _hallID:number;//--hall id

   @Mutable _loginName:string;		// 會員帳號
   
   @Mutable _playerTableId:number;//--userTable id 0-3

   @Mutable _noExchange:boolean;//--true=該版本(直接換分換完),false正常版本

   @Mutable _exchangeCredit:number;//--洗分分數

   @Mutable _exchangeAmount:number;//---洗分金額

   @Mutable _balance:number;			// 會員餘額

   @Mutable _getMatchineDetial:boolean;

   @Mutable _base:string;				// 匯率(基注)列表

   @Mutable _defaultBase:string;		// 預設匯率(基注)

   @Mutable _betBase:string;			// 匯率(基注)

   @Mutable _wagersID:number;			// 局號
   
   @Mutable _payoff:number;			// 得分

   @Mutable _autoCreditExchange:boolean;//--玩家是否啟動自動換分

   @Mutable _autoCreditMoney:number;//---玩家自動換分的金額

   @Mutable _firstgetAutoCreditExchange:boolean;//--紀錄第一次取用autoCreditExchange資料
   
   @Mutable _exchangeRatio:number;//----玩家使用的匯率

   //@Mutable _strErrorCode:string;//----error code
   
   @Mutable _hadMission:boolean;//----任務系統

   @Mutable _onCreditExchange:boolean;//----開洗分回來(要開洗分通知=false,成功返回=true)

   @Mutable _exchangePlayerCredit:{credits:TableInfo[]};//----開分後,尚未擊發子彈玩家所有的餘額

   @Mutable _credit:number;			// 可用分數
   //--errorcode---這邊的type是要來判斷開啟哪一個面板
   //@Mutable _errorCode:{type:string,code:number,error:string};     
   @Mutable _errorCode:{type:string,code:number,error:string}; 

   @Mutable _inGameMessage:{type:string,code:number,msg:string};   
   
   @Mutable _pingInfo:string;

   @Mutable _enterRoom:boolean;
     

   //@Mutable _exitAllFish:boolean;   //--魚群離場
   
   protected _roomTableMax:number;//--房間人數上限

   

   //protected _balance:number;

  
     
   constructor()
   {
      super(); 

      this._fishTypeKeyMap={};

      this._fishTypeSpeedMap={};
      
      this._aryOddsInfo=[];  

      this._aryScorePool=[];

      this._mapCannonInfo={};//--20231004新增

      this._defualtGunValue=0;

      this._aryActionInfo=[];

      this._aryRoomInfo=[];

      this._cleanAllRoom=false;//--20240301 玩家離開房間回到選聽畫面

      this._uid=0;

      this._hallID=-99999;

      this._exchangeRatio=1;

      this._noExchange=false;

      this._exchangeCredit=0;//--洗分分數
      
      this._exchangeAmount=0;//---洗分金額
      
      this._loginName="";		// 會員帳號
      
      this._balance=0;			// 會員餘額
      
      this._credit=0;			// 可用分數
      
      this._base="";				// 匯率(基注)列表
      
      this._defaultBase="";		// 預設匯率(基注)
      
      this._betBase="";			// 匯率(基注)

      this._getMatchineDetial=false;
      
      this._wagersID=0;			// 局號
      
      this._payoff=0;
      
      this._autoCreditExchange=true;//--玩家啟動自動換分(2022預設值=true) 
      
      this._autoCreditMoney=0;//----玩家需要自動換分的金額
      
      this._firstgetAutoCreditExchange=false;

      this._playerTableId=-1;

      this._onCreditExchange=true;

      this._enterRoom=false;

      this._hadMission=false;//--任務系統

   }

   public loaded():void
   {
      super.loaded();

      this.initModelData();

      this.initSetRoom();
      
      this._netConnect.on(GameEventBase.CONNECTOR_EVT,this.serverResBack);
      this._netConnect.on(GameEventBase.CONNECTOR_PING_EVT,this.serverPingBack);
   }



   //--初始要設定的資料(遊戲初始化的必要資料(沒有連server))
   protected initModelData():void
   {

   }

   //--可以override--
   protected initSetRoom():void
   {
      let table:TableInfo;

      for(let i:number=0;i<this._roomTableMax;i++)
      {
         table=
         {
            tableID:i,//--桌位編號 index 0-3
            
            userID:0,
            
            isPlayer:false,
            
            userLoginName:'',
            
            credit:0
         };
         
         this._aryRoomInfo[i]=table;
      }
   }

   //---分配座位或是換位置server認可後的資料
   protected setRoom(seats:any):void
   {
      log('check_setroom_fishMode@@@@_start',seats);
      //--這邊送進來是一個object map--20230807-
      /**
    * 進來會是一個object
    * [key:tableIndex--0-3]
    * { 
      a:"test123RMB"---玩家帳號
      bt:0---bonus狀態(?)
      n:"test123RMB"--玩家暱稱
      p:456052319---玩家id
      po:0--玩家分數
      s:0---座位號
      si:null--client自定義的資料
      w:1--砲台型態,武器類別
      }
      */
      for(let i in seats)
      {
         if(seats[i].p==this._uid)
         {
            //--玩家本身
           
            this._aryRoomInfo[seats[i].s].isPlayer=true;  

            this._loginName=seats[i].a;

            this._aryRoomInfo[seats[i].s].userLoginName=seats[i].a;
               
         }else{
            
            this._aryRoomInfo[seats[i].s].userLoginName=GameUtils.processAccountName(seats[i].a);
         }

         this._aryRoomInfo[seats[i].s].credit=seats[i].po;

         this._aryRoomInfo[seats[i].s].userID=seats[i].p;
                  
      }

      this._playerTableId=this.getTableIdByUserId(this._uid);

      //log('setRoom',this._aryRoomInfo,this._playerTableId);
      

   }

   //---房間內玩家金錢異動
   //protected setRoomCredit(a:any[]):void
   /**
    * serverback={ s: 0(座位), p: 1000(餘額) }
    * @param a 
    */
   protected setRoomCredit(index:number,credit:number):void
   {
       
       //----20190221--正式要打開
       let len:number=this._aryRoomInfo.length;

       for(var i:number=0;i<len;i++)
       {
           if(i==index)
           {
               this._aryRoomInfo[i].credit=credit;

               if(this._aryRoomInfo[i].userID==this._uid)
               {
                  this._credit=credit;
                  //log('setRoomCredit',this._aryRoomInfo);
               }

               break;
           }
       }
   }

   //---清空座位
   public cleanRoomTable(table:number):void
   {
      this._aryRoomInfo[table].userID=0;
      
      this._aryRoomInfo[table].credit=0;
      
      this._aryRoomInfo[table].userLoginName="";
      
      this._aryRoomInfo[table].isPlayer=false;
   }

   public cleanRoom():void
   {
      for(let i:number=0;i<this._aryRoomInfo.length;i++)
      {
         this._aryRoomInfo[i].userID=0;
      
         this._aryRoomInfo[i].credit=0;
         
         this._aryRoomInfo[i].userLoginName="";
         
         this._aryRoomInfo[i].isPlayer=false;
      }
   }

   public getTableIdByUserId(id?:number):number
   {
        
      let uid:number=(id==undefined)?this._uid:id;
      //log('getTableIdByUserId',id,uid,this._aryRoomInfo);
      let index:number=-1;
        
      for(let i:number=0;i<this._aryRoomInfo.length;i++)
      {
         if(this._aryRoomInfo[i].userID==uid)
         {
            index=i;
            break;
         }
      }

      //--資料異動他自己會透過setter回傳
      //this._playerTableId=index;
      return index;
   }


   //--erroe code---
   /*
   public getErrorCode():string
   {
      return this._strErrorCode;
   }

   public noChangeSetErrCode(value:string):void
   {
      this._strErrorCode=value;
   }*/

   protected serverPingBack=(value:string)=>
   {

   }


   protected serverResBack=(value:ResultForConnect)=>
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