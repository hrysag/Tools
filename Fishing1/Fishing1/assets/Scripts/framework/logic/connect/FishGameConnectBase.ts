/**
 * Created by EricHuang on 2023/9/19.
 */
import {GameConnectBase} from '../../game/connect/ConnectBase'
import {IfConnectStrategy} from '../../game/strategy/Strategy'
import {ServerResCode,ServerSendCode} from './ConnectBaseDefinitions'
import {Util} from '../../../../Libs/fish-common-lib/types/definitions';
import {CocosGameSetting} from '../../utils/CocosGameSetting';
import {ResultForConnect } from '../../game/strategy/Strategy';
import {GameEventBase } from '../../game/events/eventBase';
import {InitialSetting,PomeloDisconnectEvents,CodeMapFunction,LoginInfo,LoginResponse,SendWithSync} from '../../../../Libs/fish-common-lib/types/networking/definitions';
import {log} from 'cc';

export abstract class FishGameConnectBase<T extends IfConnectStrategy> extends GameConnectBase<T>{
   
    
    //--塞入尚未實體化的strategy
    constructor(ifStratege:new () => T)
    {
       super(ifStratege);
       
       this.definConstForServer();
    }

    //--這邊去定義server的參數(或是交由strategy來定義)
    protected definConstForServer():void
    {
        /**
         * ServerResCode.LoginInfo='-1',
         * ServerResCode.EnterLobby ='1',
         * ......
         * 諸如此類的
         */
        ServerSendCode.ChoiceLobby ='fh.fhHandler.ChoiceLobby';  //--選房
        ServerSendCode.GetBalance = 'fh.fhHandler.GetBalance';   //--取餘額
        ServerSendCode.Exchange = 'fh.fhHandler.Exchange';       //--開分
        ServerSendCode.CashOut = 'fh.fhHandler.Recompensate';    //--洗分
        ServerSendCode.LeaveRoom = 'fh.fhHandler.LeaveRoom';     //--離開房間
        ServerSendCode.ShootBullet='fh.fhHandler.Shoot';         //--擊發
        ServerSendCode.changBullet='fh.fhHandler.WeaponChange';  //--換子彈(不需要用)
        ServerSendCode.hitFish='fh.fhHandler.Spin';              //--打到魚
        ServerSendCode.useProp='fh.fhHandler.UseProp';           //--使用道具
         
        //--server init順序1
        ServerResCode.LoginInfo='-1';                     // login資訊
        //--server init順序2
        ServerResCode.EnterLobby = '1';                   // 進入大廳
        //--server init順序3
        ServerResCode.WeaponSettings = '3';               // 武器設定
        //--server init順序4
        ServerResCode.FishSettings = '4';                 // 魚隻設定
        //--server init順序5
        ServerResCode.SerialNumber = '6';                 // 更新局號
        //--server init順序6
        ServerResCode.NewFish = '12';                     // 新增魚隻
        //--server init順序7
        ServerResCode.UpdateProp = '17';                  //更新道具 
        //--server init順序8
        ServerResCode.UpdateRoomStatus = '18';            //更新房間狀態
        //--server init順序9
        ServerResCode.InitPlayerInfo = '5';               // 更新房內玩家資訊(玩家進房間就會送) 
        //--server init順序10
        ServerResCode.EnterRoom = '2';                    // 進房結果通知
        //--server init順序11
        ServerResCode.Balance = '7';                      // 更新資產/餘額
       
        ServerResCode.Exchange = '8';                     // 換分結果通知
        ServerResCode.Point = '9';                        // 更新分數
        //--PS會接著送EnterLobby的資訊進來
        ServerResCode.LeaveRoom = '10';                   // 離開房間(玩家離開房間就會送)
        ServerResCode.CashOut = '11';                     // 洗分結果通知
       
        ServerResCode.ShootBullet = '14';                 // 擊發子彈
        ServerResCode.RefundBullet = '15';                // 回收子彈退分通知(call balance後,會再送這個出來)
        ServerResCode.HitFish = '16';                     // 擊中魚
       
        
        ServerResCode.UseProp = '19';                     //使用道具 
        ServerResCode.BossWillComeIn = '20';               //boss即將來襲 
        ServerResCode.ErrorCode='-999'                     //errorCode
    }
    

    public async prepareBeforeConnect(gameType:number):Promise<any>
    {
        return new Promise<void>(async (resolve)=>
        {
            let utilTool:Util=window.util;

            log('utilTool',utilTool);
            
            let host:string=window.location.host;
            
            let url;
            
            if(host.indexOf('localhost')==-1)
            {
              url=utilTool.general.urlGet('d');
              //url=window.location.href;
                
            }else{
    
              log('prepare_gameType',gameType);

              url=await utilTool.general.loginWithDemo(
              {
                  //account: 'nathan1',//--測試換到底,一次換光餘額顯示跑版帳號
                  //account: 'nathan1',
                  //account: 'nathan8',//--換分餘額不足測試帳號
                  account: 'test123',
                  lang: 'cn',
                  env: 'DEV',
                  //env: 'TEST',
                  gameType: gameType+''
              });
              
              log('check_urlData',url);
    
              url=url.split('d=')[1];
              
              //url='d=eyJzaWQiOiJmNDM0ZDkzNjY5OWY4ZWM3NzNlNzIzOTYwZDUyNjdhOSIsImxhbmciOiJ6aC1jbiIsImV4aXRfb3B0aW9uIjoiMSIsIm9yaWdpbl9kb21haW4iOm51bGwsImNpZCI6MTEsImdhbWVfdHlwZSI6IjM4MDAzIiwiZ3Nfc3ViZG9tYWluIjoid3MwMTozMDEwIiwid2FnZXJzX3BhdGgiOiJcL2JldC1yZWNvcmRcL2Zpc2hcL2NsaWVudFwvd2FnZXIiLCJydWxlX3BhdGgiOiJcL2dhbWUtcnVsZVwvaGVscC5waHAifQ==';
            }

            /**
             * {
             *   cid:11,
             *   exit_option:'1',
             *   game_type:"38003",
             *   gs_subdomain:"ws01:3010",
             *   lang:"zh-cn",
             *   origin_domain:null,
             *   rule_path:"/game-rule/help.php",
             *   sid:"fee72639f05b00978064c48ed88a64f9",
             *   wagers_path:"/bet-record/fish/client/wager"
             * }
            */
            let data: any = utilTool.general.parseEntryData(url);
            Object.keys(data).forEach(k => {
                window.util.general.setCookie(k, data[k]);
            });

            this._sid=data.sid;//--從這邊拿相關的資料

            resolve(data);
           
        }); 
    }

    public async connect(ip?:string):Promise<void>
    {
       
      log('fishGameConnect');
      
      let port;

      if(!this._connector)
      {
        this._connector = window.util.network.connector; 
      }
      
      if(!ip)
      {
        //if(window.util.general.isLocalTesting())
            if(CocosGameSetting.isLocal)
            {
                /*
                let pathData=window.util.general.getLocalTestDomain('DEV');
                ip=pathData.gsSubDomain+'.'+pathData.domain;
                */

                //let pathData=window.util.general.getLocalTestDomain('DEV');
                ip=CocosGameSetting.localPathData.gsSubDomain+'.'+CocosGameSetting.localPathData.domain;

                /**
                 * 規則說明(local)
                 * path=pathData.domain+data.rule_path
                 */

            }else{
                //-??
                //let host=window.location.hostname;

                let gsSubDomain=CocosGameSetting.Game_GsSubdomain.split(':');
                //  固定使用一級域名與二級域名
                ip=gsSubDomain[0]+'.'+CocosGameSetting.host.split('.').splice(-2).join('.');
                port = gsSubDomain[1];

                //--要去拿let test=data.gs_subdomain.split(':')
                /**
                 * ip=test[0]+'.'+host+':'+test[1]
                 */
                /**
                 * 規則說明(local)
                 * path=host+data.rule_path
                 */
            }
        }
       
        
       
       //--這邊要再改...20230919--
       let connectSetting:InitialSetting=
       {
            host:ip,
            ssl:true,
            port: (port == null || port == 'null') ? undefined : parseInt(port, 10),// get it from cookie(sub-domain)
            timeout: 5, // for every request
            codeMap:this.createPomeloResHandler()
       }

       this._connector.init(connectSetting,this);

       let resultforConnect = await this._connector.connect();

       if(resultforConnect)
       {
            let loginInfo:LoginInfo=
            {
                sid:this._sid,
                cid:CocosGameSetting.Game_Cid,
                //gid:this._gameType,
                gid:CocosGameSetting.GameType,
                entry: window.util.general.device.getPlatformDeviceEntryInfo(),
            }; 

            //--這邊會有相關的變數
            /**
             * account:"test123RMB"
               hallID:99999999
               id:456052319
               isTransferAll:false
            */
            let resultforLogin:LoginResponse=await this._connector.login(loginInfo);
            
            this.getConnectDataFromPomelo(ServerResCode.LoginInfo,resultforLogin);



       }else{
         
        //--錯誤相關處理

       }


       
    }

    //abstract  createPomeloResHandler():{[key:string]:CodeMapFunction}
    protected createPomeloResHandler():Map<string, CodeMapFunction>{
        const m = new Map<string, CodeMapFunction>();
        
        m.set(ServerResCode.EnterLobby,this.getConnectDataFromPomelo);
        m.set(ServerResCode.EnterRoom,this.getConnectDataFromPomelo);
        m.set(ServerResCode.WeaponSettings,this.getConnectDataFromPomelo);
        m.set(ServerResCode.FishSettings,this.getConnectDataFromPomelo);
        m.set(ServerResCode.InitPlayerInfo,this.getConnectDataFromPomelo);
        m.set(ServerResCode.SerialNumber,this.getConnectDataFromPomelo);
        m.set(ServerResCode.Balance,this.getConnectDataFromPomelo);
        m.set(ServerResCode.Exchange,this.getConnectDataFromPomelo);
        m.set(ServerResCode.Point,this.getConnectDataFromPomelo);
        m.set(ServerResCode.LeaveRoom,this.getConnectDataFromPomelo);
        m.set(ServerResCode.CashOut,this.getConnectDataFromPomelo);
        m.set(ServerResCode.NewFish,this.getConnectDataFromPomelo);
        m.set(ServerResCode.HitFish,this.getConnectDataFromPomelo);
        m.set(ServerResCode.ShootBullet,this.getConnectDataFromPomelo);
        m.set(ServerResCode.UpdateProp,this.getConnectDataFromPomelo);
        m.set(ServerResCode.UpdateRoomStatus,this.getConnectDataFromPomelo);
        m.set(ServerResCode.UseProp,this.getConnectDataFromPomelo);
        m.set(ServerResCode.BossWillComeIn,this.getConnectDataFromPomelo);
        m.set(ServerResCode.RefundBullet,this.getConnectDataFromPomelo);
        
        return m;
    }
      
      

    
    public sendServer(key:string,value:any,sync?:SendWithSync):void
    {
        if(this._connector)
        {

            let data=this.process(key,value);

            if(data==null)
            {
               //--免帶參數的類型
               //this._connector.send(key,data,sync);

            }else{

                //this._connector.send(key,data,sync);
            }

            log('check_sendServeR',key,value);
            
            this._connector.send(key,data,sync);
        }

    }

    //--override
    public disconnectedMsg(info: object):void
    {
        //let returnObj={type:'connectClose',code:-1,error:'MSG.DISCONNECTED'};
        let returnObj={type:'connectClose',code:1786601,error:'MSG.DISCONNECTED'};

        let sendEvent:ResultForConnect={type:ServerResCode.ErrorCode,sendObject:returnObj};
        //-ServerResCode
        this.emit(GameEventBase.CONNECTOR_EVT,sendEvent);

    }

    //--override
    public errorMsg(error: object):void
    {
        
    }

    public onPingMsg(pingData:string):void
    {
        this.emit(GameEventBase.CONNECTOR_PING_EVT,pingData);
    }
    
    //--override(主要server會送來這邊)
    public kickMsg(msg:{reason: string}):void
    {
        //-- this.emit(GameEventBase.CONNECTOR_EVT,serverData);---事件打出去
        let sendEvent:ResultForConnect;
        //-sendEvent={type:code,sendObject:returnObj};

        let returnObj:{type:'connectClose',code:number|string,error:string}; 

        log('check_oKickMsg',msg);


        switch (msg.reason) 
        {
            case '1786108':
            case '1686108':
                
                returnObj={type:'connectClose',code:parseInt(msg.reason, 10),error:'MSG.RE_LOGIN'};
                break;
            case '1686110':
            case '1786110':
            
                returnObj={type:'connectClose',code:parseInt(msg.reason, 10),error:'MSG.CATEGORY_MAINTAINED'};
                break;
            case '1686112':
            case '1786112':
                
                returnObj={type:'connectClose',code:parseInt(msg.reason, 10),error:'MSG.LOBBYCLOSE'};
                
                break;
            case '1686113':// Connector玩家被停押
            case '1786113':
                
                returnObj={type:'connectClose',code:parseInt(msg.reason, 10),error:'MSG.CANT_BET'};
                break;
            case '1686115':
            case '1786115':
                
                returnObj={type:'connectClose',code:parseInt(msg.reason, 10),error:'MSG.RENT_NOT_OPEN'};

                break;
            case '1686116':
            case '1786116':
                
                returnObj={type:'connectClose',code:parseInt(msg.reason, 10),error:'MSG.ACC_DISABLED'};
                
                break;
            case '1686123':// Game中途被停押
            case '1786123':// Game中途被停押
                
                returnObj={type:'connectClose',code:parseInt(msg.reason, 10),error:'MSG.CANT_BET'};

                break;
            case '1686124':
            case '1786124':
                
                returnObj={type:'connectClose',code:parseInt(msg.reason, 10),error:'MSG.userIP'};

                break;
            case '1786128':
                returnObj={type:'connectClose',code:parseInt(msg.reason, 10),error:'MSG.DISCONNECT_IDLE'};

                break
            case 'NoShootToDisConnect':
                
                returnObj={type:'connectClose',code:'NoShootToDisConnect',error:'MSG.DISCONNECT_IDLE'};

                break;
            case "1686126":
            case "1786126":

                returnObj={type:'connectClose',code:parseInt(msg.reason, 10),error:'MSG.GAMEPLAYERNOBALANCE'};
                
                break;
            case "1686127":
            case "1786127":

                returnObj={type:'connectClose',code:parseInt(msg.reason, 10),error:'MSG.LOBBYCLOSE'};

                break;
            case "connector_connect_timeout":

                //--連線逾時  
                returnObj={type:'connectClose',code:'timeout',error:'MSG.TIMEOUT'};

                break;

            case "connector_login_timeout":

                //--登入逾時  
                returnObj={type:'connectClose',code:'timeout',error:'MSG.TIMEOUT'};

                break;
                
            default :
                //returnObj={type:'connectClose',code:-1,error:'MSG.DISCONNECTED'};
                returnObj={type:'connectClose',code:1786601,error:'MSG.DISCONNECTED'};
                break;
        }

        
        sendEvent={type:ServerResCode.ErrorCode,sendObject:returnObj};
        
        log('kickMsg',msg,sendEvent);
        //-ServerResCode
        this.emit(GameEventBase.CONNECTOR_EVT,sendEvent);
    }

    //--打包資料
    protected abstract process(key:string,value:any,debug?:boolean):any
    /**
     * ex:
     * protected process():any
     * {
     *   let obj;
     *   switch(key)
     *   {
     *     case ServerSendCode.ChoiceLobby:
     *     obj={
            p:value
           };
     *     break;
     * 
     *   }
     * }
     * 
     *  */ 
    
}