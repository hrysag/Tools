System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, FishGameConnectBase, ServerResCode, ServerSendCode, Fish1ConnectStrategy, log, Fish1Connect, _crd;

  function _reportPossibleCrUseOfFishGameConnectBase(extras) {
    _reporterNs.report("FishGameConnectBase", "../../../framework/logic/connect/FishGameConnectBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerResCode(extras) {
    _reporterNs.report("ServerResCode", "../../../framework/logic/connect/ConnectBaseDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerSendCode(extras) {
    _reporterNs.report("ServerSendCode", "../../../framework/logic/connect/ConnectBaseDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1ConnectStrategy(extras) {
    _reporterNs.report("Fish1ConnectStrategy", "./Fish1ConnectStrategy", _context.meta, extras);
  }

  _export("Fish1Connect", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      FishGameConnectBase = _unresolved_2.FishGameConnectBase;
    }, function (_unresolved_3) {
      ServerResCode = _unresolved_3.ServerResCode;
      ServerSendCode = _unresolved_3.ServerSendCode;
    }, function (_unresolved_4) {
      Fish1ConnectStrategy = _unresolved_4.Fish1ConnectStrategy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "df8d7B+iDxN4buzKRm+Oiiy", "Fish1Connect", undefined);
      /**
       * Created by EricHuang on 2023/9/23.
       */


      __checkObsolete__(['log']);

      _export("Fish1Connect", Fish1Connect = class Fish1Connect extends (_crd && FishGameConnectBase === void 0 ? (_reportPossibleCrUseOfFishGameConnectBase({
        error: Error()
      }), FishGameConnectBase) : FishGameConnectBase) {
        constructor() {
          super(_crd && Fish1ConnectStrategy === void 0 ? (_reportPossibleCrUseOfFish1ConnectStrategy({
            error: Error()
          }), Fish1ConnectStrategy) : Fish1ConnectStrategy);
        }

        definConstForServer() {
          super.definConstForServer(); //--<-999> 是errorcode使用的

          (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
            error: Error()
          }), ServerSendCode) : ServerSendCode).InitLocalDebug = 'initGame_localDebug';
          (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
            error: Error()
          }), ServerSendCode) : ServerSendCode).EnterRoomLocalDebug = 'enterRoom_localDebug';
          (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
            error: Error()
          }), ServerSendCode) : ServerSendCode).InitPlayerInfoLocalDebug = 'initPlayerInfo_localDebug';
          (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
            error: Error()
          }), ServerSendCode) : ServerSendCode).UpdateRoomStsteLocalDebug = 'updateRoomStste_localDebug';
          (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
            error: Error()
          }), ServerSendCode) : ServerSendCode).NewFishLocalDebug = 'NewFish_localDebug';
          (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
            error: Error()
          }), ServerSendCode) : ServerSendCode).UpdatePropLocalDebug = '99902';
          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).InitLocalDebug = '999';
          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).EnterRoomLocalDebug = '99901';
        }
        /**
         * 模擬server資料回來,直接將使用者送進來的資料依循流程寫進去
         * ps:用於local端的測試
         * @param key server rse code
         * @param value server res data
         */


        localDebugMode(key, value, localDebugResType) {
          log('sendServer_twst_', localDebugResType);
          var data = this.process(key, value, true);
          log('sendServer_fish1Connect', data, localDebugResType);
          this.getConnectDataFromPomelo(localDebugResType, data);
        } //---開洗分要先1.fh.fhHandler.GetBalance取餘額(面板要的)
        //------------2.fh.fhHandler.Exchange換分
        //---送資料 call server


        process(key, value, debug) {
          var obj;

          switch (key) {
            case (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
              error: Error()
            }), ServerSendCode) : ServerSendCode).InitLocalDebug:
              obj = value;
              break;

            case (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
              error: Error()
            }), ServerSendCode) : ServerSendCode).InitPlayerInfoLocalDebug:
              obj = value;
              break;

            case (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
              error: Error()
            }), ServerSendCode) : ServerSendCode).UpdatePropLocalDebug:
              obj = value;
              break;

            case (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
              error: Error()
            }), ServerSendCode) : ServerSendCode).ChoiceLobby:
              obj = {
                p: value
              };
              break;

            case (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
              error: Error()
            }), ServerSendCode) : ServerSendCode).GetBalance:
              if (debug) {
                obj = {
                  b: -Math.floor(Math.random() * 1000000)
                }; //--test for 負數

                log('check_ServerSendCode.GetBalance', obj);
              } else {
                obj = null; //-(實際上不用代資料)
              }

              break;

            case (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
              error: Error()
            }), ServerSendCode) : ServerSendCode).Exchange:
              obj = value;

              if (debug) {
                obj = {
                  b: 123456978,
                  p: 1234567,
                  error: null
                };
              }

              break;

            case (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
              error: Error()
            }), ServerSendCode) : ServerSendCode).useProp:
              //--使用道具{pt:道具號碼}
              if (debug) {
                /**
                 * --非召喚
                 
                    f: null--魚(召喚)
                    p:2-------道具type
                    pt:10000--cd time(ms)
                    s:0------player index
                    st:1700195451361---使用道具的時間
                */
                if (value.pt == 1) {
                  //--召喚

                  /**
                  f:{
                      freeze: 0----冰凍時間的累積(ms)
                      id: 2578 ---魚隻id
                      isReverse: false--反轉路徑
                      pathID: 305000--路徑代號
                      speed: 1---數度(秒)
                      time: 0--已存活時間(ms)
                      type: 17---fish type
                  } 
                   */
                  obj = {
                    f: {
                      freeze: 0,
                      id: Date.now(),
                      isReverse: false,
                      pathID: 305000,
                      speed: 1,
                      time: 0,
                      type: 17
                    },
                    p: value.pt,
                    s: value.dPlayer,
                    pt: value.dcd * 1000,
                    st: Date.now()
                  };
                } else if (value.pt == 2) {
                  //--冰凍(要再送改變房間狀態)
                  obj = {
                    f: null,
                    p: value.pt,
                    s: value.dPlayer,
                    pt: value.dcd * 1000,
                    st: Date.now()
                  };
                } else if (value.pt == 3) {
                  //--狂暴
                  obj = {
                    f: null,
                    p: value.pt,
                    s: value.dPlayer,
                    //s:2,//--test 20231122
                    pt: value.dcd * 1000,
                    st: Date.now()
                  };
                }
              } else {
                obj = {
                  pt: value.pt
                };
              }

              break;

            case (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
              error: Error()
            }), ServerSendCode) : ServerSendCode).hitFish:
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
               *   "fid":376,
               *    "ft":22,
               *    "bt":2,
               *    "r":44,
               *     "ws":50,
               *     "d":true,
               *     "pt":0,
               *      "cf":[
               *           {"fid":379,"ft":16},
               *           {"fid":354,"ft":19},
               *           {"fid":380,"ft":8},
               *           {"fid":381,"ft":2},
               *           {"fid":382,"ft":17}],
               *      "kf":[
               *         {"fid":380,"ft":8,"ws":30},
               *         {"fid":381,"ft":2,"ws":8}]
               *         }
               * }
               */
              if (debug) {
                var chainKillfish = [];

                if (value.cf) {
                  for (var i = 0; i < value.cf.length; i++) {
                    chainKillfish.push({
                      fid: value.cf[i],
                      ft: 0,
                      ws: 1000
                    });
                  }
                }

                log('check_debug_shootBullet', value, chainKillfish);
                obj = {
                  s: value.dseatIndex,
                  //-座位
                  p: 1234,
                  //-最新分數餘額
                  id: value.id,
                  //-子彈id
                  w: value.dw,
                  //-武器型態(依照列表)
                  hf: //--擊中魚隻(object)
                  {
                    fid: value.fid,
                    //魚隻id
                    ft: value.dft,
                    //魚種id(type)
                    bt: 2,
                    //bonus代碼
                    r: 44,
                    //倍率
                    ws: 50,
                    //贏分(payoff?)
                    d: true,
                    //是否死亡
                    pt: 3,
                    //掉落道具(0=無掉落)
                    //-(打中-特殊魚死亡)---這是client端送出範圍內的魚..
                    cf: value.cf,
                    //-(擊殺-特殊魚死亡)---這是server判定死亡的魚(有可能沒死半隻)
                    //kf:[{fid:380,ft:8,ws:30},{fid:381,ft:2,ws:8}]
                    kf: chainKillfish
                  }
                };
              } else {
                if (value.cf) //--連鎖(有才會帶)
                  {
                    obj = {
                      id: value.id,
                      fid: value.fid,
                      cf: value.cf
                    };
                  } else {
                  obj = {
                    id: value.id,
                    fid: value.fid
                  };
                }
              }

              break;
            //---test--20230926---

            case (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
              error: Error()
            }), ServerSendCode) : ServerSendCode).ShootBullet:
              /**
               *  w:s.info.gunCredit,---20231003-要改
               * {
               *   注意:
               *    這邊是依照changewapone的方式來送
               * 代碼--->
               * 1-代表2分
               * 2-3分
               * 3->10分
               * 4-20分
               * 5-50分
               * }
               *  l:--鎖定的魚隻id--沒有就不用了
                  si:
                  {
                    x:s.endX,
                    y:s.endY,
                    a:s.info.actionId,
                    l:strLockTarget,
                    c:false,
                    p:useProp,
                    d:s.direction,
                    f:s.isFree,
                   }
               */
              obj = value;

              if (debug) {
                obj.id = Date.now();
              }

              log('ServerSendCode.ShootBullet', obj);
              break;

            case (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
              error: Error()
            }), ServerSendCode) : ServerSendCode).NewFishLocalDebug:
              log('chec_NewFishLocalDebug', value);
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
                       isReverse: true },
                       { id: 3,
                       type: 1,
                       pathID: 111011,
                       speed: 1,
                       time: 6026,
                       freeze: 10000,
                       isReverse: true },
                       { id: 4,
                       type: 1,
                       pathID: 111010,
                       speed: 1,
                       time: 6026,
                       freeze: 0,
                       isReverse: true },
                       { id: 5,
                       type: 1,
                       pathID: 111004,
                       speed: 1,
                       time: 6026,
                       freeze: 0,
                       isReverse: true }]}
              * 
              * 
              * 
              *  */

              obj = value;
              break;

            case (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
              error: Error()
            }), ServerSendCode) : ServerSendCode).UpdateRoomStsteLocalDebug:
              //--更新房間狀態--local debug
              log('check_loacal_UpdateRoomStsteLocalDebug');
              /**
               * 
              returnObj=
              {
                 status:data.s,//--狀態
                 startTime:data.st,//--開始時間(毫秒?)
                 endTime:data.et//---結束時間(毫秒?)
              }
               */

              obj = value;
              break;
          }

          return obj;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e509de9acc4d6083e38a8673a2a8b364dc6b9bb2.js.map