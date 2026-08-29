System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ServerResCode, log, Fish1ConnectStrategy, _crd;

  function _reportPossibleCrUseOfIfConnectStrategy(extras) {
    _reporterNs.report("IfConnectStrategy", "../../../framework/game/strategy/Strategy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerResCode(extras) {
    _reporterNs.report("ServerResCode", "../../../framework/logic/connect/ConnectBaseDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResultForConnect(extras) {
    _reporterNs.report("ResultForConnect", "../../../framework/game/strategy/Strategy", _context.meta, extras);
  }

  _export("Fish1ConnectStrategy", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      ServerResCode = _unresolved_2.ServerResCode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0e2de5EuJVO7LuswXNTUd0k", "Fish1ConnectStrategy", undefined);
      /**
       * Created by EricHuang on 2023/9/13.
       * 拿到外面去做,這個不要在這裡做20230919
       */


      __checkObsolete__(['log']);

      _export("Fish1ConnectStrategy", Fish1ConnectStrategy = class Fish1ConnectStrategy {
        /**
         * 有可能每一代的捕魚產品他傳送的資料差距過大,或是
         * 有新增不同的特殊功能之類的,所以與server來回的這段就直接用策略模式來達到
         * 因不同產品的需求來做抽換
         */
        //public  strategyConnectDataFromPomelo:(code: string, data: any)=>Promise<any> 
        //=async(code: string, data: any):Promise<any> =>
        //--箭頭函是沒辦法在定義成屬性後用async
        constructor() {
          //public async strategyConnectDataFromPomelo(code: string, data: any):Promise<any>
          this.strategyConnectDataFromPomelo = (code, data) => {
            log('check_strategyConnectDataFromPomelo', code, data);
            var sendEvent;
            var returnObj;

            switch (code) {
              case (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).InitLocalDebug:
                //--localdebug mode init back
                returnObj = data;
                break;

              case (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).EnterRoomLocalDebug:
                //--localdebug mode init back
                returnObj = data;
                break;

              case (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).LoginInfo:
                returnObj = data;
                break;

              case (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).EnterLobby:
                //--login完成後會送(內有lobby的資訊)
                returnObj = {
                  base: data.s //userId:'testtest',//--要補---login會拿到
                  //isCash:false,//---要補(好像也不用,因為取消該功能了)
                  //noExchange:false,//---要補--isTransferAll(login會拿到)
                  //loginName:'testtest@'//-----login會拿到

                };
                break;

              case (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).EnterRoom:
                //--ps要在處理送過來的資料{error!=null}的情況    
                returnObj = data; //--舊版是在initgame執行後就會關閉laodingbar(closeLoadingScreen)    

                break;

              case (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).UpdateRoomStatus:
                log('ServerResCode_UpdateRoomStatus_fish1Strategy', data);
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
                 ps--召喚不會送這個近來
                */

                returnObj = {
                  status: data.s,
                  //--狀態
                  startTime: data.st,
                  //--開始時間(毫秒?)
                  endTime: data.et //---結束時間(毫秒?)

                };
                break;

              case (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).WeaponSettings:
                returnObj = data;
                break;

              case (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).FishSettings:
                log('ServerResCode_FishSettings', data);
                returnObj = data;
                break;

              case (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).InitPlayerInfo:
                returnObj = data;
                break;

              case (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).SerialNumber:
                log('ServerResCode_SerialNumber', data);
                returnObj = data.r;
                break;

              case (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).Balance:
                //--更新玩家錢包=等同於舊版的getMatchineDetial
                //--PS-第一次進遊戲server會自動送進來一次
                log('WTFFFFFFF', data);
                returnObj = data.b;
                break;

              case (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).RefundBullet:
                // 回收子彈退分通知(call balance後,會再送這個出來)
                //{ s: 0, p: 980, ids: [ 1 ] }
                //-s座位號(0-3) p 玩家砲台面板的餘額 isd回收子彈的id列表
                log('ServerResCode_RefundBullet_fish1Strategy', data);
                returnObj = {
                  siteIndex: data.s,
                  credit: data.p,
                  bids: data.ids //--array

                };
                break;

              case (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).Exchange:
                //--開分錯誤讓model接續處理
                //- { b: 999800, p: 1000, error: null }
                returnObj = {
                  balance: data.b,
                  credit: data.p,
                  //--玩家遊戲面板的餘額
                  error: data.error
                };
                break;

              case (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).Point:
                //-玩家換錢後會送    
                log('ServerResCode_Point_fish1Strategy', data);
                returnObj = {
                  index: data.s,
                  //-0-3
                  credit: data.p
                };
                break;

              case (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).LeaveRoom:
                //-{ s: 0 }離開房間的座位號0-3
                log('ServerResCode_fish1Strategy_LeaveRoom_', data);
                returnObj = {
                  index: data.s
                };
                break;

              case (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).CashOut:
                break;

              case (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).NewFish:
                log('ServerResCode_fish1Strategy_NewFish_', data);
                returnObj = data.fs; //--test

                break;

              case (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).ShootBullet:
                /**
                 * server 回送的資料
                 * s-座位號 number
                 * p-最新餘額  number
                 * id-子彈id  number
                 * w-砲台型態/武器類別  number--這邊要對照這個表
                 * <
                 *  代碼--->
                 *  1-代表2分
                 *  2-3分
                 *  3->10分
                 *  4-20分
                 *  5-50分
                 * 
                 * >
                 * si-client帶出去的資料 any
                 * l-鎖定魚隻id(自動射擊才給) number
                 *  { s: 0, p: 970, id: 3, w: 3, si: { x: 77777, y: 66666, z: 8787 }, l: 1 }
                 */
                var bulletlockTarget = data.l ? data.l : -1;
                log('ServerResCode.shootBullet', data); //bulletlockTarget

                returnObj = {
                  //data:data
                  siteIndex: data.s,
                  credit: data.p,
                  sn: data.id,
                  lockTarget: bulletlockTarget,
                  //--有鎖定才會有
                  weaponType: data.w,
                  //--使用者送出的資料
                  info: {
                    endX: data.si.x,
                    endY: data.si.y,
                    actionId: data.si.a,
                    //lockTarget:data.si.l,
                    //lockTarget:data.si.l,
                    prop: data.si.p,
                    isCrazy: data.si.c,
                    direction: data.si.d,
                    isFree: data.si.f,
                    roomStatus: data.si.r
                  }
                };
                break;

              case (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).HitFish:
                /**
                 * s-number-座位
                 * p-number-最新分數餘額
                 * id-number-子彈id
                 * w-number-武器型態(依照列表)
                 * hf 擊中魚隻(object)
                 * --hf的內容--
                 * fid-number-魚隻id
                 * ft-number-魚種id?
                 * bt-number-bonus代碼
                 * r-number-倍率
                 * ws-number-贏分(payoff?)
                 * d-boolean-是否死亡
                 * pt-number-掉落道具(0=無掉落)
                 * cf-物件陣列(打中-特殊魚死亡)
                 * kf-物件陣列(擊殺-特殊魚死亡)
                 * --hf的內容--
                 * {
                 * "s":0,
                 * "p":978,
                 * "id":100,
                 * "w":1,
                 * "hf":{
                 * "fid":376,
                 * "ft":22,
                 * "bt":2,
                 * "r":44,
                 * "ws":50,
                 * "d":true,
                 * "pt":0,
                 * "cf":[
                 * {"fid":379,"ft":16},{"fid":354,"ft":19},{"fid":380,"ft":8},{"fid":381,"ft":2},{"fid":382,"ft":17}],
                 * "kf":[
                 * {"fid":380,"ft":8,"ws":30},{"fid":381,"ft":2,"ws":8}]
                 * }
                 * }
                =================================================================  
                {
                   s:0,//-座位
                   p:1234,//-最新分數餘額
                   id:value.id,//-子彈id
                   w:value.dw,//-武器型態(依照列表)
                   hf://--擊中魚隻(object)
                   {
                    fid:value.fid,//魚隻id
                    ft:value.dft,//魚種id(type)
                    bt:2,//bonus代碼
                    r:44,//倍率
                    ws:50,//贏分(payoff?)
                    d:true,//是否死亡
                    pt:0,//掉落道具(0=無掉落)
                    cf:[{fid:379,ft:16},{fid:354,ft:19}],//-(打中-特殊魚死亡--client送的範圍內的魚)
                    kf:[{fid:380,ft:8,ws:30},{fid:381,ft:2,ws:8}]//-(擊殺-特殊魚死亡--server送的連鎖死亡的魚)
                   }
                 }
                
                */
                log('ServerResCode_HitFish_fish1Strategy', data);
                returnObj = {
                  siteIndex: data.s,
                  //-0-3
                  credit: data.p,
                  //-最新的分數餘額
                  bsn: data.id,
                  //-子彈id
                  btp: data.w,
                  //--武器的type
                  fish: {
                    sn: data.hf.fid,
                    //--fish id
                    ftp: data.hf.ft,
                    //--fish type
                    bonus: data.hf.bt,
                    //--bonus type
                    odds: data.hf.r,
                    //--ratio賠率
                    payoff: data.hf.ws,
                    //--贏分(payoff?)
                    iskill: data.hf.d,
                    //--是否死亡
                    props: data.hf.pt,
                    //--道具(沒有0)
                    //-(打中-特殊魚死亡)---這是client端送出範圍內的魚..
                    hitSpFish: data.hf.cf,
                    //--[{fid:379,ft:16}...]
                    //-(擊殺-特殊魚死亡)---這是server判定死亡的魚(有可能沒死半隻)
                    killSpFish: data.hf.kf //--[{fid:379,ft:16,ws:1000}...]
                    //--PS--server會把觸發連鎖的單位一起放在這裡面

                  }
                }; //--test--

                /*
                if(returnObj.fish.iskill && returnObj.fish.ftp==23)
                {
                    log('bomb kill',returnObj);
                }*/

                break;

              case (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).UpdateProp:
                log('ServerResCode_UpdateProp_fish1Strategy', data); //--20240126--玩家沒有持有任何道具就是一個空物件

                returnObj = data.pl;
                break;

              case (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).UseProp:
                //--1.會先通知使用道具 2.再通知改變房間狀態   
                log('ServerResCode_UseProp_fish1Strategy', data);
                returnObj = {
                  error: data.error,
                  //---使用道具失敗原因(成功=null)
                  callFish: data.f,
                  propType: data.p,
                  coldDownTime: data.pt / 1000,
                  //--換成秒為單位
                  tableIndex: data.s,
                  //--哪個玩家使用了--這邊要注意是該玩家才啟動colddown
                  startTime: data.st
                };
                /**
                 * --非召喚
                 * 
                    f: null--魚(召喚)
                    p:2-------道具type
                    pt:10000--cd time(ms)
                    s:0------player index
                    st:1700195451361---使用道具的時間(timestemp--date.now()--)
                 */

                /**
                 * 召喚
                 * f:{
                 *  freeze: 0----冰凍時間的累積(ms)
                    id: 2578 ---魚隻id
                    isReverse: false--反轉路徑
                    pathID: 305000--路徑代號
                    speed: 1---數度(秒)
                    time: 0--已存活時間(ms)
                    type: 17---fish type
                 * } 
                    p: 1
                    pt: 5000
                    s: 0
                    st: 1700195716408
                 * 
                 *  */

                break;

              case (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).BossWillComeIn:
                returnObj = data;
                break;
            }

            sendEvent = {
              type: code,
              sendObject: returnObj
            };
            log('Fish1Strategy_ServerResCode.resback', sendEvent);
            return sendEvent;
          };

          log('Fish1ConnectStrategy');
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3a57fef3eb3ee82f71c499d4809962a1427dd62d.js.map