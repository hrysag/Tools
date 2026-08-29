/**
 * Created by EricHuang on 2023/9/23.
 * 
 */

import {FishVM} from '../../framework/logic/viewModel/FishVM';
import {TableInfo} from '../../framework/game/model/ModelDefinitionsBase';
import {addbullet,addFish} from './../model/Fish1ModelDefinitions';
import {ServerSendCode,ServerResCode} from '../../framework/logic/connect/ConnectBaseDefinitions';
import {log} from 'cc';
import {Bindable,viewModel} from '../../framework/abstract/mvvm/AbstractViewModel';

@viewModel('Fish1VM')

export class Fish1VM extends FishVM
{
  //--透過 @Bindable註冊要拿的變數(向VM拿,不拿只是單純收到通知就不用在這註冊了)
  @Bindable _addbullets:addbullet;

  //====fish===========
  
  @Bindable _addFishs:addFish[];
  
  @Bindable _addPopFishs:addFish[];
  
  @Bindable _hitFishs:any;

  //=====Lobby==========
  @Bindable _lobbyData:{loginName:string,playerRoomBase:string[]};

  @Bindable _loginName:string;// 會員帳號

  //======room=======
  @Bindable _roomTableInfo:{tables:TableInfo[],firstIntoRoom:boolean};

  //---credit for after exchange
  @Bindable _exchangePlayerCredit:{credits:TableInfo[]};
  
  @Bindable _credit:number;
  
  @Bindable _firstgetAutoCreditExchange;

  @Bindable _roomStatus:{status:number,startTime:number,endTime:number};



  //=====bullets==========
  @Bindable _refundBullets:number[];

  //====props=============
  @Bindable _props;

  @Bindable _propRunData;

  //====boss=============
  @Bindable _bossStatus:string;//--檢查龍的離場狀態 

  @Bindable _exchangeRatio;

    
  constructor()
  {
    super();
  }
  
 
  protected async localDebugInitRoom(key:string):Promise<void>
  {
    //--call server(把資料寫回去繼續下一步驟)
    log('localDebugInitRoom_Fish1VM',key);

    this.changeRoomStatus(0);//--server這個會比換座位送的還要快,所以要先做
    
    return new Promise<void>((resolve,reject)=>
    {
      this.sendServer(
        ServerSendCode.InitPlayerInfoLocalDebug,
         {
            
          //'0':{a:'testEric',bt:0,n:"testEric",p:456052319,po:12345,s:0,si:null,put:{},w:1},
          //'0':{a:'testOtherX',bt:0,n:"testOtherx",p:456052300,po:124,s:0,si:null,put:{},w:1},
          '0':{a:'',bt:0,n:"",p:0,po:0,s:0,si:null,put:{},w:1},
          //'1':{a:'testEric',bt:0,n:"testEric",p:456052319,po:12345,s:1,si:null,put:{},w:1},
          '1':{a:'',bt:0,n:"",p:0,po:0,s:1,si:null,put:{},w:1},
          '2':{a:'',bt:0,n:"",p:0,po:0,s:2,si:null,put:{},w:1},
          //'2':{a:'testOther1',bt:0,n:"testOther1",p:456052300,po:124,s:2,si:null,put:{},w:1},
          '3':{a:'testEric',bt:0,n:"testEric",p:456052319,po:12345,s:3,si:null,put:{},w:1}
          //'3':{a:'',bt:0,n:"",p:0,po:0,s:3,si:null,put:{},w:1}
          //'3':{a:'testOther2',bt:0,n:"testOther2",p:456052319,po:12345.658,s:3,si:null,put:{},w:1}
        },
        ServerResCode.InitPlayerInfo
  
      );
      

      resolve();
  
    });
    
  }

  //--模擬進房後第一次server送進來的balance
  protected async setBalance():Promise<void>
  {
    return new Promise<void>((resolve)=>
    {
      this.sendServer
      (
        ServerSendCode.GetBalance,
        null,//--(實際上不用代資料)
        ServerResCode.Balance
      )

      resolve();

    });
  }


  private changeRoomStatus(value:number):void
  {
      /**
       * 房間狀態server回送的
          et: 1697522412269
          s: 2
          st: 1697522345269
      *
        ps狀態代碼資訊
        0=正常/一般狀態,
        1=冰凍,
        2=金龍來襲,
        3=金龍死亡(禁止進房)
      */
     /**
      returnObj=
      {
        status:data.s,//--狀態
        startTime:data.st,//--開始時間(毫秒?)
        endTime:data.et//---結束時間(毫秒?)
      }
      */
    
      this.sendServer
      (
        ServerSendCode.UpdateRoomStsteLocalDebug,
        {
          s:value,
          st:0,
          et:0
        },
        ServerResCode.UpdateRoomStatus
      )
  }

  //--這邊就是localdebug用的

  protected afterFirstSendServerDebug(key:string,value:any,localDebugResType?:string):void
  {
    log('afterFirstSendServerDebug',key,value,localDebugResType);
    if(localDebugResType==ServerResCode.UseProp )
    {
        if(value.pt==2)
        {
          //---冰凍
          this.changeRoomStatus(1);

          this.testPropRoomStateTimer(value.dcd);
        }

    }else if(localDebugResType==ServerResCode.HitFish)
    {
        this.sendServer(ServerSendCode.UpdatePropLocalDebug,{pl: { '1': Math.floor(Math.random()*100), '2':  Math.floor(Math.random()*100),'3':  Math.floor(Math.random()*100) }},ServerResCode.UpdateProp)
    }
  }

  private testPropRoomStateTimer(time:number):void
  {
     TweenMax.to({},time,
      {
          onComplete:()=>
          {
             this.changeRoomStatus(0);
          }
      });
  }

  //---test data
  protected localDebugTestData():void
  {
      this.changeRoomStatus(2);
  }


  //--做想要的測試,ex createfish
  protected localDebugCreateFish():void
  {
     //return;
      //--for test
      /*
      let fishData=[
        
         22948,13,0,211000,false,
         22980,4,0,104003,false,
         22982,5,0,113011,false,
         23005,7,0,204002,false
        ];*/
      
     
     /**
       * server 回送的資料
       * fs物件陣列-魚隻陣列(物件陣列)
       * 物件資料->
       * id-魚隻id number
       * type-魚種代碼 number
       * pathID-路徑代碼 number
       * speed-速度(秒) number
       * time-已存活時間/目前移動多久(毫秒) number
       * freeze-被冰凍時間累積(毫秒)number 
       * isReverse-是否路徑反向 boolean
       * 
       * { fs:
            [ { id: 1,
                type: 1,
                pathID: 111000,
                speed: 1,
                time: 6026,
                freeze: 10000,
                isReverse: true },
                { id: 2,
                type: 1,
                pathID: 111006,
                speed: 1,
                time: 6026,
                freeze: 10000,
                isReverse: true }
            ]}
        * 
        * --old
        * 0->fishID 
          1->fishType 
          2->alreadyRunTime--->目前存活的時間 
          3->pathId 
          4->isRevese  
          5->level-->成長魚種(會變大的)..沒有就不代入了
      
        * 
        *  */ 
      //let fishData=[ [22855,21,33170,203004,false,10]];//--3D龍
      //let fishData=[ 22855,16,0,113008,false,10];//--3D黃金鯊
      //let fishData=[ 22855,13,0,113008,false,10];//--3D黃金鯊
      //let fishData=[ 22855,15,33170,203004,false,10];//--2D閃電魚

    
      /*
      let fishData=[ 
        [22855,23,0,113008,false,10],
        [22948,14,0,211000,false],
        [22980,23,0,104003,false],
        [22982,19,0,113011,false],
        [23005,15,0,204002,false],
        [23010,16,0,104003,false],
        [23016,17,0,209002,false],
        [23019,18,0,105005,false],
        [23029,19,0,104010,false]
      ];*/

      //---boss路徑代號-301000
      /*
      let fishData=[
        {fs:[
          {
            id:8905,
            type:6,
            pathID:208004,
            speed:1,
            //time:7009,
            time:0,
            freeze:0,
            isReverse:true
           }
        ]} 
      ]*/

     
      //--3d fish
      /*
      let fishData=[
        {fs:[
          {
            id:8905,
            type:17,
            pathID:208004,
            speed:1,
            //time:7009,
            time:0,
            freeze:0,
            isReverse:false
           }
        ]} 
      ]*/
      //-createServerTime
      let createServerTime=new Date().getTime();
      /*
      let fishData=[{
        fs:[
      {id:1067,type:22,pathID:208004,speed:1,time:0,createTime:createServerTime,freeze:0,isReverse:false},
      {id:10709,type:11,pathID:113010,speed:1,time:47054,createTime:createServerTime,freeze:0,isReverse:true},
      {id:1068,type:12,pathID:208003,speed:1,time:0,createTime:createServerTime,freeze:0,isReverse:false},
      {id:1069,type:19,pathID:207003,speed:1,time:0,createTime:createServerTime,freeze:0,isReverse:false},
      {id:1069,type:14,pathID:113010,speed:1,time:0,createTime:createServerTime,freeze:0,isReverse:false}
       ]
      }];
      */
      
      let fishData=[{
        fs:[
      {id:1067,type:22,pathID:208004,speed:1,time:0,createTime:createServerTime,freeze:0,isReverse:false},
      {id:10709,type:11,pathID:113010,speed:1,time:47054,createTime:createServerTime,freeze:0,isReverse:true},
      {id:1068,type:12,pathID:208003,speed:1,time:0,createTime:createServerTime,freeze:0,isReverse:false},
      {id:1069,type:19,pathID:207003,speed:1,time:0,createTime:createServerTime,freeze:0,isReverse:false},
      {id:1069,type:14,pathID:113010,speed:1,time:0,createTime:createServerTime,freeze:0,isReverse:false}
       ]
      }];
      

      //--single fish
      /*
      let fishData=[{
        fs:[
      {id:3820,type:22,pathID:212003,speed:1,time:0,createTime:0,freeze:0,isReverse:false}
       ]
      }];
      */
      
      //--sp fish(301000~306000)
      /*
      let fishData=[
        {fs:[{ id:8905,type:22,pathID:306000,speed:1,time:0,freeze:0,isReverse:false}]} 
      ]*/

      //--boss test
      
      /*
      let fishData=[
        {fs:[{ id:8905,type:21,pathID:401000,speed:1,time:0,freeze:0,isReverse:false}]} 
      ]*/
      
      
      

      for(let i:number=0;i<fishData.length;i++)
      {
        
        TweenMax.to({},.5,
            {
              delay:i*.2,
              onCompleteParams:[fishData[i]],
              onComplete:(value)=>
              {
                //createfish
                log('check_creatFishData',value,i);
                this.sendServer
                (
                  ServerSendCode.NewFishLocalDebug,
                  value,
                  ServerResCode.NewFish
                )

              }
            })
      }

      //this.changeRoomStatus(2);
  }


  
}