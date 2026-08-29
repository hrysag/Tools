System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GameConnectBase, ServerResCode, ServerSendCode, CocosGameSetting, GameEventBase, log, FishGameConnectBase, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfGameConnectBase(extras) {
    _reporterNs.report("GameConnectBase", "../../game/connect/ConnectBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfConnectStrategy(extras) {
    _reporterNs.report("IfConnectStrategy", "../../game/strategy/Strategy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerResCode(extras) {
    _reporterNs.report("ServerResCode", "./ConnectBaseDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerSendCode(extras) {
    _reporterNs.report("ServerSendCode", "./ConnectBaseDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "../../../../Libs/fish-common-lib/types/definitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCocosGameSetting(extras) {
    _reporterNs.report("CocosGameSetting", "../../utils/CocosGameSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResultForConnect(extras) {
    _reporterNs.report("ResultForConnect", "../../game/strategy/Strategy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEventBase(extras) {
    _reporterNs.report("GameEventBase", "../../game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitialSetting(extras) {
    _reporterNs.report("InitialSetting", "../../../../Libs/fish-common-lib/types/networking/definitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCodeMapFunction(extras) {
    _reporterNs.report("CodeMapFunction", "../../../../Libs/fish-common-lib/types/networking/definitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginInfo(extras) {
    _reporterNs.report("LoginInfo", "../../../../Libs/fish-common-lib/types/networking/definitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginResponse(extras) {
    _reporterNs.report("LoginResponse", "../../../../Libs/fish-common-lib/types/networking/definitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSendWithSync(extras) {
    _reporterNs.report("SendWithSync", "../../../../Libs/fish-common-lib/types/networking/definitions", _context.meta, extras);
  }

  _export("FishGameConnectBase", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      GameConnectBase = _unresolved_2.GameConnectBase;
    }, function (_unresolved_3) {
      ServerResCode = _unresolved_3.ServerResCode;
      ServerSendCode = _unresolved_3.ServerSendCode;
    }, function (_unresolved_4) {
      CocosGameSetting = _unresolved_4.CocosGameSetting;
    }, function (_unresolved_5) {
      GameEventBase = _unresolved_5.GameEventBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b5688lHIMZBSp9Zpa2XOfKr", "FishGameConnectBase", undefined);
      /**
       * Created by EricHuang on 2023/9/19.
       */


      __checkObsolete__(['log']);

      _export("FishGameConnectBase", FishGameConnectBase = class FishGameConnectBase extends (_crd && GameConnectBase === void 0 ? (_reportPossibleCrUseOfGameConnectBase({
        error: Error()
      }), GameConnectBase) : GameConnectBase) {
        //--塞入尚未實體化的strategy
        constructor(ifStratege) {
          super(ifStratege);
          this.definConstForServer();
        } //--這邊去定義server的參數(或是交由strategy來定義)


        definConstForServer() {
          /**
           * ServerResCode.LoginInfo='-1',
           * ServerResCode.EnterLobby ='1',
           * ......
           * 諸如此類的
           */
          (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
            error: Error()
          }), ServerSendCode) : ServerSendCode).ChoiceLobby = 'fh.fhHandler.ChoiceLobby'; //--選房

          (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
            error: Error()
          }), ServerSendCode) : ServerSendCode).GetBalance = 'fh.fhHandler.GetBalance'; //--取餘額

          (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
            error: Error()
          }), ServerSendCode) : ServerSendCode).Exchange = 'fh.fhHandler.Exchange'; //--開分

          (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
            error: Error()
          }), ServerSendCode) : ServerSendCode).CashOut = 'fh.fhHandler.Recompensate'; //--洗分

          (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
            error: Error()
          }), ServerSendCode) : ServerSendCode).LeaveRoom = 'fh.fhHandler.LeaveRoom'; //--離開房間

          (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
            error: Error()
          }), ServerSendCode) : ServerSendCode).ShootBullet = 'fh.fhHandler.Shoot'; //--擊發

          (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
            error: Error()
          }), ServerSendCode) : ServerSendCode).changBullet = 'fh.fhHandler.WeaponChange'; //--換子彈(不需要用)

          (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
            error: Error()
          }), ServerSendCode) : ServerSendCode).hitFish = 'fh.fhHandler.Spin'; //--打到魚

          (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
            error: Error()
          }), ServerSendCode) : ServerSendCode).useProp = 'fh.fhHandler.UseProp'; //--使用道具
          //--server init順序1

          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).LoginInfo = '-1'; // login資訊
          //--server init順序2

          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).EnterLobby = '1'; // 進入大廳
          //--server init順序3

          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).WeaponSettings = '3'; // 武器設定
          //--server init順序4

          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).FishSettings = '4'; // 魚隻設定
          //--server init順序5

          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).SerialNumber = '6'; // 更新局號
          //--server init順序6

          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).NewFish = '12'; // 新增魚隻
          //--server init順序7

          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).UpdateProp = '17'; //更新道具 
          //--server init順序8

          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).UpdateRoomStatus = '18'; //更新房間狀態
          //--server init順序9

          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).InitPlayerInfo = '5'; // 更新房內玩家資訊(玩家進房間就會送) 
          //--server init順序10

          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).EnterRoom = '2'; // 進房結果通知
          //--server init順序11

          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).Balance = '7'; // 更新資產/餘額

          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).Exchange = '8'; // 換分結果通知

          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).Point = '9'; // 更新分數
          //--PS會接著送EnterLobby的資訊進來

          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).LeaveRoom = '10'; // 離開房間(玩家離開房間就會送)

          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).CashOut = '11'; // 洗分結果通知

          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).ShootBullet = '14'; // 擊發子彈

          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).RefundBullet = '15'; // 回收子彈退分通知(call balance後,會再送這個出來)

          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).HitFish = '16'; // 擊中魚

          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).UseProp = '19'; //使用道具 

          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).BossWillComeIn = '20'; //boss即將來襲 

          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).ErrorCode = '-999'; //errorCode
        }

        prepareBeforeConnect(gameType) {
          var _this = this;

          return _asyncToGenerator(function* () {
            return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve) {
              var utilTool = window.util;
              log('utilTool', utilTool);
              var host = window.location.host;
              var url;

              if (host.indexOf('localhost') == -1) {
                url = utilTool.general.urlGet('d'); //url=window.location.href;
              } else {
                log('prepare_gameType', gameType);
                url = yield utilTool.general.loginWithDemo({
                  //account: 'nathan1',//--測試換到底,一次換光餘額顯示跑版帳號
                  //account: 'nathan1',
                  //account: 'nathan8',//--換分餘額不足測試帳號
                  account: 'test123',
                  lang: 'cn',
                  env: 'DEV',
                  //env: 'TEST',
                  gameType: gameType + ''
                });
                log('check_urlData', url);
                url = url.split('d=')[1]; //url='d=eyJzaWQiOiJmNDM0ZDkzNjY5OWY4ZWM3NzNlNzIzOTYwZDUyNjdhOSIsImxhbmciOiJ6aC1jbiIsImV4aXRfb3B0aW9uIjoiMSIsIm9yaWdpbl9kb21haW4iOm51bGwsImNpZCI6MTEsImdhbWVfdHlwZSI6IjM4MDAzIiwiZ3Nfc3ViZG9tYWluIjoid3MwMTozMDEwIiwid2FnZXJzX3BhdGgiOiJcL2JldC1yZWNvcmRcL2Zpc2hcL2NsaWVudFwvd2FnZXIiLCJydWxlX3BhdGgiOiJcL2dhbWUtcnVsZVwvaGVscC5waHAifQ==';
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


              var data = utilTool.general.parseEntryData(url);
              Object.keys(data).forEach(k => {
                window.util.general.setCookie(k, data[k]);
              });
              _this._sid = data.sid; //--從這邊拿相關的資料

              resolve(data);
            }));
          })();
        }

        connect(ip) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            log('fishGameConnect');
            var port;

            if (!_this2._connector) {
              _this2._connector = window.util.network.connector;
            }

            if (!ip) {
              //if(window.util.general.isLocalTesting())
              if ((_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).isLocal) {
                /*
                let pathData=window.util.general.getLocalTestDomain('DEV');
                ip=pathData.gsSubDomain+'.'+pathData.domain;
                */
                //let pathData=window.util.general.getLocalTestDomain('DEV');
                ip = (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                  error: Error()
                }), CocosGameSetting) : CocosGameSetting).localPathData.gsSubDomain + '.' + (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                  error: Error()
                }), CocosGameSetting) : CocosGameSetting).localPathData.domain;
                /**
                 * 規則說明(local)
                 * path=pathData.domain+data.rule_path
                 */
              } else {
                //-??
                //let host=window.location.hostname;
                var gsSubDomain = (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                  error: Error()
                }), CocosGameSetting) : CocosGameSetting).Game_GsSubdomain.split(':'); //  固定使用一級域名與二級域名

                ip = gsSubDomain[0] + '.' + (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                  error: Error()
                }), CocosGameSetting) : CocosGameSetting).host.split('.').splice(-2).join('.');
                port = gsSubDomain[1]; //--要去拿let test=data.gs_subdomain.split(':')

                /**
                 * ip=test[0]+'.'+host+':'+test[1]
                 */

                /**
                 * 規則說明(local)
                 * path=host+data.rule_path
                 */
              }
            } //--這邊要再改...20230919--


            var connectSetting = {
              host: ip,
              ssl: true,
              port: port == null || port == 'null' ? undefined : parseInt(port, 10),
              // get it from cookie(sub-domain)
              timeout: 5,
              // for every request
              codeMap: _this2.createPomeloResHandler()
            };

            _this2._connector.init(connectSetting, _this2);

            var resultforConnect = yield _this2._connector.connect();

            if (resultforConnect) {
              var loginInfo = {
                sid: _this2._sid,
                cid: (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                  error: Error()
                }), CocosGameSetting) : CocosGameSetting).Game_Cid,
                //gid:this._gameType,
                gid: (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                  error: Error()
                }), CocosGameSetting) : CocosGameSetting).GameType,
                entry: window.util.general.device.getPlatformDeviceEntryInfo()
              }; //--這邊會有相關的變數

              /**
               * account:"test123RMB"
                 hallID:99999999
                 id:456052319
                 isTransferAll:false
              */

              var resultforLogin = yield _this2._connector.login(loginInfo);

              _this2.getConnectDataFromPomelo((_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).LoginInfo, resultforLogin);
            } else {//--錯誤相關處理
            }
          })();
        } //abstract  createPomeloResHandler():{[key:string]:CodeMapFunction}


        createPomeloResHandler() {
          var m = new Map();
          m.set((_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).EnterLobby, this.getConnectDataFromPomelo);
          m.set((_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).EnterRoom, this.getConnectDataFromPomelo);
          m.set((_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).WeaponSettings, this.getConnectDataFromPomelo);
          m.set((_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).FishSettings, this.getConnectDataFromPomelo);
          m.set((_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).InitPlayerInfo, this.getConnectDataFromPomelo);
          m.set((_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).SerialNumber, this.getConnectDataFromPomelo);
          m.set((_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).Balance, this.getConnectDataFromPomelo);
          m.set((_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).Exchange, this.getConnectDataFromPomelo);
          m.set((_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).Point, this.getConnectDataFromPomelo);
          m.set((_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).LeaveRoom, this.getConnectDataFromPomelo);
          m.set((_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).CashOut, this.getConnectDataFromPomelo);
          m.set((_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).NewFish, this.getConnectDataFromPomelo);
          m.set((_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).HitFish, this.getConnectDataFromPomelo);
          m.set((_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).ShootBullet, this.getConnectDataFromPomelo);
          m.set((_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).UpdateProp, this.getConnectDataFromPomelo);
          m.set((_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).UpdateRoomStatus, this.getConnectDataFromPomelo);
          m.set((_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).UseProp, this.getConnectDataFromPomelo);
          m.set((_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).BossWillComeIn, this.getConnectDataFromPomelo);
          m.set((_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).RefundBullet, this.getConnectDataFromPomelo);
          return m;
        }

        sendServer(key, value, sync) {
          if (this._connector) {
            var data = this.process(key, value);

            if (data == null) {//--免帶參數的類型
              //this._connector.send(key,data,sync);
            } else {//this._connector.send(key,data,sync);
            }

            log('check_sendServeR', key, value);

            this._connector.send(key, data, sync);
          }
        } //--override


        disconnectedMsg(info) {
          //let returnObj={type:'connectClose',code:-1,error:'MSG.DISCONNECTED'};
          var returnObj = {
            type: 'connectClose',
            code: 1786601,
            error: 'MSG.DISCONNECTED'
          };
          var sendEvent = {
            type: (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
              error: Error()
            }), ServerResCode) : ServerResCode).ErrorCode,
            sendObject: returnObj
          }; //-ServerResCode

          this.emit((_crd && GameEventBase === void 0 ? (_reportPossibleCrUseOfGameEventBase({
            error: Error()
          }), GameEventBase) : GameEventBase).CONNECTOR_EVT, sendEvent);
        } //--override


        errorMsg(error) {}

        onPingMsg(pingData) {
          this.emit((_crd && GameEventBase === void 0 ? (_reportPossibleCrUseOfGameEventBase({
            error: Error()
          }), GameEventBase) : GameEventBase).CONNECTOR_PING_EVT, pingData);
        } //--override(主要server會送來這邊)


        kickMsg(msg) {
          //-- this.emit(GameEventBase.CONNECTOR_EVT,serverData);---事件打出去
          var sendEvent; //-sendEvent={type:code,sendObject:returnObj};

          var returnObj;
          log('check_oKickMsg', msg);

          switch (msg.reason) {
            case '1786108':
            case '1686108':
              returnObj = {
                type: 'connectClose',
                code: parseInt(msg.reason, 10),
                error: 'MSG.RE_LOGIN'
              };
              break;

            case '1686110':
            case '1786110':
              returnObj = {
                type: 'connectClose',
                code: parseInt(msg.reason, 10),
                error: 'MSG.CATEGORY_MAINTAINED'
              };
              break;

            case '1686112':
            case '1786112':
              returnObj = {
                type: 'connectClose',
                code: parseInt(msg.reason, 10),
                error: 'MSG.LOBBYCLOSE'
              };
              break;

            case '1686113': // Connector玩家被停押

            case '1786113':
              returnObj = {
                type: 'connectClose',
                code: parseInt(msg.reason, 10),
                error: 'MSG.CANT_BET'
              };
              break;

            case '1686115':
            case '1786115':
              returnObj = {
                type: 'connectClose',
                code: parseInt(msg.reason, 10),
                error: 'MSG.RENT_NOT_OPEN'
              };
              break;

            case '1686116':
            case '1786116':
              returnObj = {
                type: 'connectClose',
                code: parseInt(msg.reason, 10),
                error: 'MSG.ACC_DISABLED'
              };
              break;

            case '1686123': // Game中途被停押

            case '1786123':
              // Game中途被停押
              returnObj = {
                type: 'connectClose',
                code: parseInt(msg.reason, 10),
                error: 'MSG.CANT_BET'
              };
              break;

            case '1686124':
            case '1786124':
              returnObj = {
                type: 'connectClose',
                code: parseInt(msg.reason, 10),
                error: 'MSG.userIP'
              };
              break;

            case '1786128':
              returnObj = {
                type: 'connectClose',
                code: parseInt(msg.reason, 10),
                error: 'MSG.DISCONNECT_IDLE'
              };
              break;

            case 'NoShootToDisConnect':
              returnObj = {
                type: 'connectClose',
                code: 'NoShootToDisConnect',
                error: 'MSG.DISCONNECT_IDLE'
              };
              break;

            case "1686126":
            case "1786126":
              returnObj = {
                type: 'connectClose',
                code: parseInt(msg.reason, 10),
                error: 'MSG.GAMEPLAYERNOBALANCE'
              };
              break;

            case "1686127":
            case "1786127":
              returnObj = {
                type: 'connectClose',
                code: parseInt(msg.reason, 10),
                error: 'MSG.LOBBYCLOSE'
              };
              break;

            case "connector_connect_timeout":
              //--連線逾時  
              returnObj = {
                type: 'connectClose',
                code: 'timeout',
                error: 'MSG.TIMEOUT'
              };
              break;

            case "connector_login_timeout":
              //--登入逾時  
              returnObj = {
                type: 'connectClose',
                code: 'timeout',
                error: 'MSG.TIMEOUT'
              };
              break;

            default:
              //returnObj={type:'connectClose',code:-1,error:'MSG.DISCONNECTED'};
              returnObj = {
                type: 'connectClose',
                code: 1786601,
                error: 'MSG.DISCONNECTED'
              };
              break;
          }

          sendEvent = {
            type: (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
              error: Error()
            }), ServerResCode) : ServerResCode).ErrorCode,
            sendObject: returnObj
          };
          log('kickMsg', msg, sendEvent); //-ServerResCode

          this.emit((_crd && GameEventBase === void 0 ? (_reportPossibleCrUseOfGameEventBase({
            error: Error()
          }), GameEventBase) : GameEventBase).CONNECTOR_EVT, sendEvent);
        } //--打包資料

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


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c87cb32278362d7bd4eaaae94bc783a223749b21.js.map