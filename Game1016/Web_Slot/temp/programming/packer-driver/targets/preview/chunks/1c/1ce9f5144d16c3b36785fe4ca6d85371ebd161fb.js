System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Debug, Utility, NetAgent, Environment, NetEvent, NetListener, CCommand, CCommandStatus, ErrorHandler, ErrorCode, SpinAck, BetData, ByteWriterHelper, PlayerInfo, NetworkHandler, _crd, LoginURL, BetURL, OtherActionURL, OtherActionWithBetURL, NetworkEvent, MessageHeadCode;

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../../Utils/Core", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../../Utils/Core", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetAgent(extras) {
    _reporterNs.report("NetAgent", "../../NetAgent/NetAgent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnvironment(extras) {
    _reporterNs.report("Environment", "../../NetAgent/AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetEvent(extras) {
    _reporterNs.report("NetEvent", "../../NetAgent/NetObserver", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetListener(extras) {
    _reporterNs.report("NetListener", "../../NetAgent/NetObserver", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMachineInfo(extras) {
    _reporterNs.report("GameMachineInfo", "../../NetAgent/GameMachineInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCCommand(extras) {
    _reporterNs.report("CCommand", "../../NetAgent/CConnectManager/CConnectDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCCommandStatus(extras) {
    _reporterNs.report("CCommandStatus", "../../NetAgent/CConnectManager/CConnectDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorHandler(extras) {
    _reporterNs.report("ErrorHandler", "../../ErrorHandler/ErrorHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCode(extras) {
    _reporterNs.report("ErrorCode", "../../ErrorHandler/ErrorHandleDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpinAck(extras) {
    _reporterNs.report("SpinAck", "../../NetAgent/SpinAck", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "./BetData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteReaderHelper(extras) {
    _reporterNs.report("ByteReaderHelper", "../../NetAgent/CConnectManager/ByteArray", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteWriterHelper(extras) {
    _reporterNs.report("ByteWriterHelper", "../../NetAgent/CConnectManager/ByteArray", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerInfo(extras) {
    _reporterNs.report("PlayerInfo", "./PlayerInfo", _context.meta, extras);
  }

  _export("NetworkHandler", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Debug = _unresolved_2.Debug;
      Utility = _unresolved_2.Utility;
    }, function (_unresolved_3) {
      NetAgent = _unresolved_3.NetAgent;
    }, function (_unresolved_4) {
      Environment = _unresolved_4.Environment;
    }, function (_unresolved_5) {
      NetEvent = _unresolved_5.NetEvent;
      NetListener = _unresolved_5.NetListener;
    }, function (_unresolved_6) {
      CCommand = _unresolved_6.CCommand;
      CCommandStatus = _unresolved_6.CCommandStatus;
    }, function (_unresolved_7) {
      ErrorHandler = _unresolved_7.ErrorHandler;
    }, function (_unresolved_8) {
      ErrorCode = _unresolved_8.ErrorCode;
    }, function (_unresolved_9) {
      SpinAck = _unresolved_9.default;
    }, function (_unresolved_10) {
      BetData = _unresolved_10.BetData;
    }, function (_unresolved_11) {
      ByteWriterHelper = _unresolved_11.ByteWriterHelper;
    }, function (_unresolved_12) {
      PlayerInfo = _unresolved_12.PlayerInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a7a47GlC/pGpbK5P5lnKNgf", "NetworkHandler", undefined);

      LoginURL = "https://bpdev2.xin-stars.com/60887/Login"; // 登入網址

      BetURL = "https://bpdev2.xin-stars.com/60887/Bet"; // 下注網址

      OtherActionURL = "https://bpdev2.xin-stars.com/60887/OtherAction"; // 額外動作網址

      OtherActionWithBetURL = "https://bpdev2.xin-stars.com/60887/OtherAction_WithBet"; // 額外押注網址

      _export("NetworkEvent", NetworkEvent = /*#__PURE__*/function (NetworkEvent) {
        NetworkEvent["Login"] = "Login";
        NetworkEvent["Bet"] = "Bet";
        NetworkEvent["SpinFail"] = "SpinFail";
        NetworkEvent["OtherAction"] = "OtherAction";
        NetworkEvent["OtherActionWithBet"] = "OtherActionWithBet";
        return NetworkEvent;
      }({}));

      MessageHeadCode = /*#__PURE__*/function (MessageHeadCode) {
        MessageHeadCode[MessageHeadCode["OtherAction"] = 40] = "OtherAction";
        MessageHeadCode[MessageHeadCode["OtherActionWithBet"] = 41] = "OtherActionWithBet";
        return MessageHeadCode;
      }(MessageHeadCode || {});

      _export("NetworkHandler", NetworkHandler = class NetworkHandler {
        // 是否啟用閒置斷線計時器

        /**
         * 是否為 demo 模式
         * @returns true or false
         */
        get demo() {
          return this._demo;
        }
        /**
         * 是否為登入狀態
         * @returns true or false
         */


        get isLogin() {
          return this._isLogin;
        }
        /**
         * 獲取平台
         * @returns 平台編號
         */


        get platform() {
          return this._platform;
        }
        /**
         * 建構
         */


        constructor() {
          this.callbacks = {};
          this.gameID = '';
          // 遊戲編號 Game1001, Game002 等
          this.gameCode = '';
          // 北分連線編號 W002 , W001 等 目前沒有使用
          this._isLogin = false;
          this.isInit = false;
          this.localNetworkTimeoutNumber = 600;
          this.timestampInSeconds = 0;
          this.urlParams = void 0;
          this.isExhibition = true;
          this._demo = false;
          this._platform = 0;
          this.timeoutTimerFlag = true;
          var keys = Object.keys(NetworkEvent);

          for (var item of keys) {
            this.callbacks[item] = [];
          }
        }
        /**
         * 獲取實例
         * @returns NetworkHandler
         */


        static get instance() {
          if (this._instance === null) {
            this._instance = new NetworkHandler();
          }

          return this._instance;
        }
        /**
         * 初始化
         * @param gameID 遊戲編號
         * @param timeoutSecond idle時間上限(單位秒)
         * @param isExhibition 是否為展示模式(展示模式會使用直連總部取牌館連線)
         */


        init(gameID, timeoutSecond, isExhibition) {
          if (timeoutSecond === void 0) {
            timeoutSecond = 600;
          }

          if (this.isInit) {
            return;
          }

          this.gameID = gameID;
          this.isExhibition = isExhibition;
          (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Log("NetworkHandler init");
          this.isInit = true;
          this.localNetworkTimeoutNumber = timeoutSecond;
          this.updateTimeStamp();
          setInterval(() => {
            this.checkIsTimeout();
          }, 1000);
          window.addEventListener('offline', () => {
            if (!this.isExhibition && !(_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).isDev()) {
              (_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
                error: Error()
              }), NetAgent) : NetAgent).GetInstance().Disconnect("網路斷線");
            }
          });
        }
        /**
         * NetAgent 更新
         * @param dt NetAgent 的 Update 參數，但實際傳入並未使用
         */


        update(dt) {
          if (!this.isExhibition && !(_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).isDev()) {
            (_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
              error: Error()
            }), NetAgent) : NetAgent).GetInstance().Update(dt);
          }
        }
        /**
         * 連線 Server
         */


        connectServer() {
          //NetAgent Observer Listener
          (_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
            error: Error()
          }), NetAgent) : NetAgent).GetInstance().RegisterObserver(new (_crd && NetListener === void 0 ? (_reportPossibleCrUseOfNetListener({
            error: Error()
          }), NetListener) : NetListener)("Game", this.onDisconnect.bind(this)));
          (_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
            error: Error()
          }), NetAgent) : NetAgent).GetInstance().RegisterCustomCommand(this.onCustomCommandReceived.bind(this));

          if (!this._isLogin) {
            //===========需要參數============
            //環境
            var environment = (_crd && Environment === void 0 ? (_reportPossibleCrUseOfEnvironment({
              error: Error()
            }), Environment) : Environment).Release;

            if ((_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).isTestEnvironment()) {
              // 如果是測試環境 使用Environment.Test
              environment = (_crd && Environment === void 0 ? (_reportPossibleCrUseOfEnvironment({
                error: Error()
              }), Environment) : Environment).Test;
            } //登入網址


            var Url = window.location.href; //版本號

            var Version = "1";
            this.urlParams = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).getURLParams(Url);
            this._demo = this.urlParams.get('demo') === 'True';
            this.gameCode = this.urlParams.get('game_code');
            this._platform = parseInt(this.urlParams.get('platform'));
            (_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
              error: Error()
            }), NetAgent) : NetAgent).GetInstance().Login(environment, Version).then(gameMachineInfo => {
              this._isLogin = true;
              (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
                error: Error()
              }), Debug) : Debug).Log("isLogin = " + this._isLogin); // console.log(`登入結果:${gameMachineInfo.Result}`);
              // console.log(`玩家暱稱:${gameMachineInfo.Nickname}`);
              // console.log(`玩家餘額:${gameMachineInfo.Balance}`);
              // console.log(`玩家Max Bet:${gameMachineInfo.MaxBet}`);
              // console.log(`玩家Min Bet:${gameMachineInfo.MinBet}`);
              // console.log(`機台ID:${gameMachineInfo.Id}`);
              // console.log("====================Login End====================");

              if (gameMachineInfo.Result === (_crd && CCommandStatus === void 0 ? (_reportPossibleCrUseOfCCommandStatus({
                error: Error()
              }), CCommandStatus) : CCommandStatus).Success) {
                // console.log("---------------------------------------------------");
                // 目前CurrentHistoryData資料是越新的資料在越後面
                // console.log(NetAgent.GetInstance().CurrentHistoryData);
                // 更新下注紀錄
                // PlayerInfo.initHistoryItemInfos(NetAgent.GetInstance().CurrentHistoryData);
                this.dispatchEvent(NetworkEvent.Login, true, gameMachineInfo);
              } else {
                return Promise.reject(gameMachineInfo.Result);
              }
            }).catch(reason => {
              if (typeof reason === 'number') {
                (_crd && ErrorHandler === void 0 ? (_reportPossibleCrUseOfErrorHandler({
                  error: Error()
                }), ErrorHandler) : ErrorHandler).Instance.TriggerError(Number(reason));
              } else {
                console.error("\u767B\u5165\u5931\u6557");
                console.error(reason);
                (_crd && ErrorHandler === void 0 ? (_reportPossibleCrUseOfErrorHandler({
                  error: Error()
                }), ErrorHandler) : ErrorHandler).Instance.TriggerError((_crd && ErrorCode === void 0 ? (_reportPossibleCrUseOfErrorCode({
                  error: Error()
                }), ErrorCode) : ErrorCode).Client_LoginFail);
              }
            });
          }
        }
        /**
         * 新增監聽
         * @param type Network 事件
         * @param callback 回呼函數
         */


        addEventListener(type, callback) {
          if (!this.callbacks[type]) {
            this.callbacks[type] = [];
          }

          this.callbacks[type].push(callback);
        }
        /**
         * 移除監聽
         * @param type Network 事件
         * @param callback 回呼函式
         */


        removeEventListener(type, callback) {
          var index = this.callbacks[type].indexOf(callback);

          if (index > -1) {
            this.callbacks[type].splice(index, 1);
          }
        }
        /**
         * 發送 Network 事件
         * @param type Network 事件
         * @param args 參數
         */


        dispatchEvent(type) {
          var eventCallbacks = this.callbacks[type];

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          for (var callback of eventCallbacks) {
            callback == null || callback(...args);
          }
        }
        /**
         * 送出事件 to Server
         * @param event Network 事件
         * @param args 參數
         */


        send(event) {
          switch (event) {
            case NetworkEvent.Bet:
              var gameNumber = arguments.length <= 1 ? undefined : arguments[1];
              var bet = arguments.length <= 2 ? undefined : arguments[2];
              var balance = arguments.length <= 3 ? undefined : arguments[3];
              var additionalPurchaseType = arguments.length <= 4 ? undefined : arguments[4];
              var playerToken = arguments.length <= 5 ? undefined : arguments[5];

              if (!playerToken) {
                playerToken = "試玩";
                console.error("sendBetFetch 需要 playerToken 參數，請確認是否有傳入");
              }

              this.sendBet(gameNumber, bet, balance, additionalPurchaseType, playerToken);
              break;

            default:
              console.error("send error event " + event);
              break;
          }
        }
        /**
         * 送出下注
         * 注意：不要直接呼叫這個方法，請改用 send
         * @param gameNumber 遊戲編號
         * @param totalBet 總下注額
         * @param balance 餘額
         * @param additionalPurchaseType 加購類別
         * @param playerToken 辨別身分的Token (與sendGameLoginFetch的Token相同)
         */


        sendBet(gameNumber, totalBet, balance, additionalPurchaseType, playerToken) {
          this.updateTimeStamp();

          if (this.isLogin) {
            this.sendBetWebSocket(totalBet, additionalPurchaseType);
          } else {
            this.sendBetFetch(gameNumber, totalBet, balance, additionalPurchaseType, playerToken);
          }
        }
        /**
         * 使用 WebSocket 送出下注(北分 NetAgent)
         * @param totalBet 總下注額
         * @param additionalPurchaseType 加購類別
         */


        sendBetWebSocket(totalBet, additionalPurchaseType) {
          (_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
            error: Error()
          }), NetAgent) : NetAgent).GetInstance().Spin(totalBet, additionalPurchaseType).then(spinResponse => {
            // console.log( `Spin 結果:${spinResponse.Result}` );
            // console.log( `Spin 玩家餘額:${spinResponse.Balance}` );
            // console.log( `Spin Bet:${spinResponse.BaseBet}` );
            // console.log( `Spin 加購:${spinResponse.AdditionalPurchase}` );
            // console.log( `Spin 此局贏分:${spinResponse.Win}` );
            // console.log( `Spin 此局單號:${spinResponse.SerialId}` );
            // console.log( `Spin 此局盤面:${spinResponse.Plant}` );
            if (spinResponse.Result === (_crd && CCommandStatus === void 0 ? (_reportPossibleCrUseOfCCommandStatus({
              error: Error()
            }), CCommandStatus) : CCommandStatus).Success) {
              var jsonData = new Map();
              jsonData.set('bet', spinResponse.BaseBet);
              jsonData.set('coin', spinResponse.Balance);
              jsonData.set('score', spinResponse.Win);
              jsonData.set('slotData', spinResponse.Plant);
              jsonData.set('spinId', spinResponse.SerialId);
              var betData = new (_crd && BetData === void 0 ? (_reportPossibleCrUseOfBetData({
                error: Error()
              }), BetData) : BetData)(jsonData); // 如果非demo狀態，才會更新歷史紀錄
              // 不更新歷史紀錄，目前交給NetAgent處理

              /*
              if (!this.demo) {
                  let historyItem = new HistoryItemInfo();
                  historyItem.bet = betData.bet;
                  historyItem.winScore = betData.score;
                  historyItem.betID = betData.spinId;
                  historyItem.gameCode = this.gameID;
                  historyItem.playerId = PlayerInfo.userName;
                  historyItem.date = Date.now();
                  historyItem.slotData = betData.slotData;
                  historyItem.beforeTotal = (betData.coin - betData.score + betData.bet).fixed();
                  historyItem.afterTotal = betData.coin;
                  historyItem.version = '';
                  PlayerInfo.updateHistoryItemInfos(historyItem);
              }
              */

              this.dispatchEvent(NetworkEvent.Bet, betData);
            } else {
              console.error("\u4E0B\u6CE8\u5931\u6557:" + spinResponse.Result);
              var SerialId = spinResponse.SerialId;
              this.dispatchEvent(NetworkEvent.SpinFail, SerialId);
              return Promise.reject(Number(spinResponse.Result));
            }
          }).catch(reason => {
            if (typeof reason === 'number') {
              (_crd && ErrorHandler === void 0 ? (_reportPossibleCrUseOfErrorHandler({
                error: Error()
              }), ErrorHandler) : ErrorHandler).Instance.TriggerError(Number(reason));
            } else {
              (_crd && ErrorHandler === void 0 ? (_reportPossibleCrUseOfErrorHandler({
                error: Error()
              }), ErrorHandler) : ErrorHandler).Instance.TriggerError((_crd && ErrorCode === void 0 ? (_reportPossibleCrUseOfErrorCode({
                error: Error()
              }), ErrorCode) : ErrorCode).Client_BetError);
            }
          });
        }
        /**
         * 使用 POST 送出下注(總部取牌館)
         * @param gameNumber 遊戲編號
         * @param totalBet 總下注額
         * @param balance 餘額
         * @param additionalPurchaseType 加購類別
         */


        sendBetFetch(gameNumber, totalBet, balance, additionalPurchaseType, playerToken) {
          if ((_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).isDev() || this.isExhibition) {
            var raw = {
              // GameName: "XinH5", // 此欄位已移除
              GameNumber: gameNumber,
              Bet: totalBet,
              PlayerToken: playerToken,
              Coin: balance,
              BuyFG: additionalPurchaseType === 0 ? undefined : additionalPurchaseType
            };
            var url = BetURL;
            fetch(url, {
              method: "POST",
              body: JSON.stringify(raw)
            }).then(response => {
              response.type;
              return response.json();
            }).then(json => {
              if (json['Success']) {
                var jsonMap = new Map();
                jsonMap.set('bet', json['Bet']);
                jsonMap.set('score', json['Score']);
                jsonMap.set('coin', json['Coin']);
                jsonMap.set('spinId', 'H5Post');
                jsonMap.set('slotData', json['SlotData']);
                var betData = new (_crd && BetData === void 0 ? (_reportPossibleCrUseOfBetData({
                  error: Error()
                }), BetData) : BetData)(jsonMap);
                this.dispatchEvent(NetworkEvent.Bet, betData);
              } else {
                console.error('錯誤的json資料');
                console.error(json);
                return Promise.reject((_crd && ErrorCode === void 0 ? (_reportPossibleCrUseOfErrorCode({
                  error: Error()
                }), ErrorCode) : ErrorCode).Client_BetError);
              }
            }).catch(reason => {
              (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
                error: Error()
              }), Debug) : Debug).LogError(reason);
              (_crd && ErrorHandler === void 0 ? (_reportPossibleCrUseOfErrorHandler({
                error: Error()
              }), ErrorHandler) : ErrorHandler).Instance.TriggerError((_crd && ErrorCode === void 0 ? (_reportPossibleCrUseOfErrorCode({
                error: Error()
              }), ErrorCode) : ErrorCode).Client_BetError);
            });
          }
        }
        /**
         * 檢查 Demo 狀態
         * @returns 是否為 Demo
         */


        checkDemoStatus() {
          return new Promise((resolve, reject) => {
            var url = window.location.href;
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).Log("window.location.href  =  " + url);
            var urlParams = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).getURLParams(url);
            var isDemo = urlParams.get('demo') === 'True';
            resolve(isDemo);
          });
        }
        /**
         * 更新時戳
         */


        updateTimeStamp() {
          this.timestampInSeconds = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).getCurrentTimeStampInSeconds();
        }
        /**
         * 檢查是否 Timeout
         */


        checkIsTimeout() {
          if (this.isLogin && this.timeoutTimerFlag) {
            var stamp = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).getCurrentTimeStampInSeconds();
            var idleTime = stamp - this.timestampInSeconds;

            if (idleTime > this.localNetworkTimeoutNumber) {
              (_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
                error: Error()
              }), NetAgent) : NetAgent).GetInstance().Disconnect("閒置斷線");
            }
          }
        }
        /**
         * 設定閒置斷線計時器的啟用狀態
         * @param flag true 啟用計時器，false 停用計時器
         */


        setTimeoutTimerFlag(flag) {
          if (flag) {
            this.updateTimeStamp(); // 啟用計時器時，更新時間戳
          }

          this.timeoutTimerFlag = flag;
        }
        /**
         * 手動斷線
         */


        Disconnect() {
          (_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
            error: Error()
          }), NetAgent) : NetAgent).GetInstance().Disconnect("手動斷線");
        }
        /**
         * 斷線時提示錯誤訊息
         * @param event Network 事件
         * @param value 錯誤資訊(字串 or 數值)
         */


        onDisconnect(event, value) {
          if (typeof value === 'string') {
            var reason = value;

            switch (reason) {
              case "網路斷線":
                console.error("\u7DB2\u8DEF\u65B7\u7DDA");
                (_crd && ErrorHandler === void 0 ? (_reportPossibleCrUseOfErrorHandler({
                  error: Error()
                }), ErrorHandler) : ErrorHandler).Instance.TriggerError((_crd && ErrorCode === void 0 ? (_reportPossibleCrUseOfErrorCode({
                  error: Error()
                }), ErrorCode) : ErrorCode).ServerKick);
                break;

              case "閒置斷線":
                (_crd && ErrorHandler === void 0 ? (_reportPossibleCrUseOfErrorHandler({
                  error: Error()
                }), ErrorHandler) : ErrorHandler).Instance.TriggerError((_crd && ErrorCode === void 0 ? (_reportPossibleCrUseOfErrorCode({
                  error: Error()
                }), ErrorCode) : ErrorCode).Client_IdleTimeout);
                break;

              case "" + (_crd && CCommandStatus === void 0 ? (_reportPossibleCrUseOfCCommandStatus({
                error: Error()
              }), CCommandStatus) : CCommandStatus).Failure:
                console.error("\u672A\u77E5\u7684\u65B7\u7DDA\u539F\u56E0 event : " + event + " value : " + value);
                (_crd && ErrorHandler === void 0 ? (_reportPossibleCrUseOfErrorHandler({
                  error: Error()
                }), ErrorHandler) : ErrorHandler).Instance.TriggerError((_crd && ErrorCode === void 0 ? (_reportPossibleCrUseOfErrorCode({
                  error: Error()
                }), ErrorCode) : ErrorCode).Client_LoginFail);
                break;

              default:
                console.error("\u672A\u77E5\u7684\u65B7\u7DDA\u539F\u56E0: " + reason);

                if (event === (_crd && NetEvent === void 0 ? (_reportPossibleCrUseOfNetEvent({
                  error: Error()
                }), NetEvent) : NetEvent).Disconnected || event === (_crd && NetEvent === void 0 ? (_reportPossibleCrUseOfNetEvent({
                  error: Error()
                }), NetEvent) : NetEvent).ServiceKick) {
                  //檢查是否為斷線的 event
                  console.error("\u672A\u77E5\u7684\u65B7\u7DDA\u539F\u56E0 event : " + event + " value : " + value);

                  if (isNaN(Number(value))) {
                    (_crd && ErrorHandler === void 0 ? (_reportPossibleCrUseOfErrorHandler({
                      error: Error()
                    }), ErrorHandler) : ErrorHandler).Instance.TriggerError(Number((_crd && ErrorCode === void 0 ? (_reportPossibleCrUseOfErrorCode({
                      error: Error()
                    }), ErrorCode) : ErrorCode).ServerKick));
                  } else {
                    (_crd && ErrorHandler === void 0 ? (_reportPossibleCrUseOfErrorHandler({
                      error: Error()
                    }), ErrorHandler) : ErrorHandler).Instance.TriggerError(Number(value));
                  }
                } else {
                  //目前缺少該處的事件處理
                  console.error("\u672A\u77E5\u7684\u65B7\u7DDA\u539F\u56E0 event : " + event + " value : " + value);

                  if (isNaN(Number(value))) {
                    (_crd && ErrorHandler === void 0 ? (_reportPossibleCrUseOfErrorHandler({
                      error: Error()
                    }), ErrorHandler) : ErrorHandler).Instance.TriggerError((_crd && ErrorCode === void 0 ? (_reportPossibleCrUseOfErrorCode({
                      error: Error()
                    }), ErrorCode) : ErrorCode).Client_UNKNOWN);
                    console.error("\u672A\u77E5\u7684\u65B7\u7DDA\u539F\u56E0 event : " + event + " value : " + value);
                  } else {
                    (_crd && ErrorHandler === void 0 ? (_reportPossibleCrUseOfErrorHandler({
                      error: Error()
                    }), ErrorHandler) : ErrorHandler).Instance.TriggerError(Number(value));
                  }
                }

                break;
            }
          } else if (typeof value === "number") {
            if (event === (_crd && NetEvent === void 0 ? (_reportPossibleCrUseOfNetEvent({
              error: Error()
            }), NetEvent) : NetEvent).Disconnected || event === (_crd && NetEvent === void 0 ? (_reportPossibleCrUseOfNetEvent({
              error: Error()
            }), NetEvent) : NetEvent).ServiceKick) {
              (_crd && ErrorHandler === void 0 ? (_reportPossibleCrUseOfErrorHandler({
                error: Error()
              }), ErrorHandler) : ErrorHandler).Instance.TriggerError(value);
            } else {
              //目前缺少該處的事件處理
              console.error("\u672A\u77E5\u7684\u65B7\u7DDA\u539F\u56E0 number : " + event);
              (_crd && ErrorHandler === void 0 ? (_reportPossibleCrUseOfErrorHandler({
                error: Error()
              }), ErrorHandler) : ErrorHandler).Instance.TriggerError(value);
            }
          }
        }
        /**
         * 取牌館Login功能，可取得進入時的盤面(有的遊戲會需要)
         * @param playerToken 辨別身分的Token
         * @param gameNumber 遊戲號碼(例如 12099)
         */


        sendGameLoginFetch(playerToken, gameNumber) {
          if (!playerToken) {
            playerToken = "試玩";
            console.error("NetworkHandler sendGameLoginFetch 需要 playerToken 參數，請確認是否有傳入");
          }

          return new Promise((resolve, reject) => {
            if ((_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).isDev() || this.isExhibition) {
              var raw = {
                // GameName: "XinH5", // 此欄位已移除
                GameNumber: gameNumber,
                PlayerToken: playerToken
              };
              var url = LoginURL;
              fetch(url, {
                method: "POST",
                body: JSON.stringify(raw)
              }).then(response => {
                return response.json();
              }).then(json => {
                if (json['Success']) {
                  var base64Data = json['SlotData']; // 60張牌的byte array

                  resolve(base64Data);
                } else {
                  console.error('錯誤的json資料');
                  console.error(json);
                  return Promise.reject((_crd && ErrorCode === void 0 ? (_reportPossibleCrUseOfErrorCode({
                    error: Error()
                  }), ErrorCode) : ErrorCode).Client_BetError);
                }
              }).catch(reason => {
                reject("fetch login error");
              });
            } else {
              reject("非測試環境");
            }
          });
        }
        /**
         * 傳送NetAgent的自定義指令
         * @param data 範例請看內部註解
         */


        SendCustomCommand(bt) {
          this.updateTimeStamp();
          (_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
            error: Error()
          }), NetAgent) : NetAgent).GetInstance().SendCustomCommand(bt.Buffer); // 使用範例

          /*
              const bt = new ByteWriterHelper();
              bt.WriteByte(40);
              bt.WriteByte(1);
              NetworkHandler.instance().SendCustomCommand(bt);
              // 處理方式參考上方接收callback的註冊
          */
        }
        /**
         * 傳送<額外動作> 40 的自定義指令
         */


        sendOtherAction(gameNumber, playerToken, action, content) {
          if (content === void 0) {
            content = [];
          }

          if (this.isLogin) {
            var bt = new (_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
              error: Error()
            }), ByteWriterHelper) : ByteWriterHelper)();
            bt.WriteByte(MessageHeadCode.OtherAction);
            bt.WriteByte(action);
            var len = content.length;
            var bytes = this.toBigEndianBytes(len); // server 此處接收的byte含長度是的長度格式是兩個byte

            bt.WriteByte(bytes[0]);
            bt.WriteByte(bytes[1]);

            for (var item of content) {
              bt.WriteByte(item);
            }

            this.SendCustomCommand(bt);
          } else {
            var raw = {
              // GameName: "XinH5", // 此欄位已移除
              GameNumber: gameNumber,
              PlayerToken: playerToken,
              Content: [action, ...content]
            };
            var url = OtherActionURL;
            fetch(url, {
              method: "POST",
              body: JSON.stringify(raw)
            }).then(response => {
              return response.json();
            }).then(json => {
              if (json['Success']) {
                var base64Data = json['Content']; // 60張牌的byte array
                // let ballIDList = Utility.base64ToByteArray(base64Data);

                this.dispatchEvent(NetworkEvent.OtherAction, action, base64Data);
              } else {
                console.error('錯誤的json資料');
                console.error(json);
                return Promise.reject((_crd && ErrorCode === void 0 ? (_reportPossibleCrUseOfErrorCode({
                  error: Error()
                }), ErrorCode) : ErrorCode).Client_BetError);
              }
            });
          }
        }
        /**
         * 傳送<額外押注> 41 的自定義指令
         */


        sendOtherActionWithBet(gameNumber, bet, balance, playerToken, action, content) {
          if (content === void 0) {
            content = [];
          }

          if (this.isLogin) {
            var bt = new (_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
              error: Error()
            }), ByteWriterHelper) : ByteWriterHelper)();
            bt.WriteByte(MessageHeadCode.OtherActionWithBet);
            bt.WriteByte(action);
            bt.WriteBytes((_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
              error: Error()
            }), ByteWriterHelper) : ByteWriterHelper).ConvertToDoubleByte(bet));
            var len = content.length;
            var bytes = this.toBigEndianBytes(len); // server 此處接收的byte含長度是的長度格式是兩個byte

            bt.WriteByte(bytes[0]);
            bt.WriteByte(bytes[1]);

            for (var item of content) {
              bt.WriteByte(item);
            }

            this.SendCustomCommand(bt);
          } else {
            var raw = {
              // GameName: "XinH5", // 此欄位已移除
              GameNumber: gameNumber,
              PlayerToken: playerToken,
              Content: [action, ...content],
              Bet: bet,
              Coin: balance
            };
            var url = OtherActionWithBetURL;
            fetch(url, {
              method: "POST",
              body: JSON.stringify(raw)
            }).then(response => {
              return response.json();
            }).then(json => {
              if (json['Success']) {
                var jsonMap = new Map();
                jsonMap.set('bet', json['Bet']);
                jsonMap.set('score', json['Score']);
                jsonMap.set('coin', json['Coin']);
                jsonMap.set('spinId', 'TEST');
                jsonMap.set('slotData', json['Content']);
                var betData = new (_crd && BetData === void 0 ? (_reportPossibleCrUseOfBetData({
                  error: Error()
                }), BetData) : BetData)(jsonMap);
                this.dispatchEvent(NetworkEvent.OtherActionWithBet, action, betData, null);
              } else {
                console.error('錯誤的json資料');
                console.error(json);
                return Promise.reject((_crd && ErrorCode === void 0 ? (_reportPossibleCrUseOfErrorCode({
                  error: Error()
                }), ErrorCode) : ErrorCode).Client_BetError);
              }
            });
          }
        }
        /**
         * 接收中控客製化消息
         * @param ack ByteReaderHelper
         */


        onCustomCommandReceived(ack) {
          ack.Position = 0;
          var command = ack.ReadByte();
          var action = ack.ReadByte();

          switch (command) {
            case MessageHeadCode.OtherAction:
              // OtherAction 額外動作
              var otherActionStatusCode = ack.ReadByte();

              if (otherActionStatusCode === (_crd && CCommandStatus === void 0 ? (_reportPossibleCrUseOfCCommandStatus({
                error: Error()
              }), CCommandStatus) : CCommandStatus).Success) {
                var base64 = '';

                if (ack.Position < ack.length) {
                  var byteUint8Array = ack.ReadByteIncludeLength();
                  base64 = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
                    error: Error()
                  }), Utility) : Utility).uint8ArrayToBase64(byteUint8Array);
                }

                this.dispatchEvent(NetworkEvent.OtherAction, action, base64);
              } else {
                console.error("\u984D\u5916\u52D5\u4F5C\u5931\u6557 (spinResponse): " + ack);

                if (typeof otherActionStatusCode === 'number') {
                  (_crd && ErrorHandler === void 0 ? (_reportPossibleCrUseOfErrorHandler({
                    error: Error()
                  }), ErrorHandler) : ErrorHandler).Instance.TriggerError(Number(otherActionStatusCode));
                } else {
                  (_crd && ErrorHandler === void 0 ? (_reportPossibleCrUseOfErrorHandler({
                    error: Error()
                  }), ErrorHandler) : ErrorHandler).Instance.TriggerError((_crd && ErrorCode === void 0 ? (_reportPossibleCrUseOfErrorCode({
                    error: Error()
                  }), ErrorCode) : ErrorCode).Client_BetError);
                }
              }

              break;

            case MessageHeadCode.OtherActionWithBet:
              // OtherActionWithBet 額外押注
              var spinResponse = new (_crd && SpinAck === void 0 ? (_reportPossibleCrUseOfSpinAck({
                error: Error()
              }), SpinAck) : SpinAck)(ack);

              if (spinResponse.Result === (_crd && CCommandStatus === void 0 ? (_reportPossibleCrUseOfCCommandStatus({
                error: Error()
              }), CCommandStatus) : CCommandStatus).Success) {
                (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
                  error: Error()
                }), PlayerInfo) : PlayerInfo).insertHistory(spinResponse); // 自行更新玩家歷史紀錄

                var jsonData = new Map();
                jsonData.set('bet', spinResponse.BaseBet);
                jsonData.set('coin', spinResponse.Balance);
                jsonData.set('score', spinResponse.Win);
                jsonData.set('slotData', spinResponse.Plant);
                jsonData.set('spinId', spinResponse.SerialId);
                var betData = new (_crd && BetData === void 0 ? (_reportPossibleCrUseOfBetData({
                  error: Error()
                }), BetData) : BetData)(jsonData);
                this.dispatchEvent(NetworkEvent.OtherActionWithBet, action, betData);
              } else {
                console.error("\u984D\u5916\u62BC\u6CE8\u5931\u6557 (ack): " + ack);

                if (typeof spinResponse.Result === 'number') {
                  (_crd && ErrorHandler === void 0 ? (_reportPossibleCrUseOfErrorHandler({
                    error: Error()
                  }), ErrorHandler) : ErrorHandler).Instance.TriggerError(Number(spinResponse.Result));
                } else {
                  (_crd && ErrorHandler === void 0 ? (_reportPossibleCrUseOfErrorHandler({
                    error: Error()
                  }), ErrorHandler) : ErrorHandler).Instance.TriggerError((_crd && ErrorCode === void 0 ? (_reportPossibleCrUseOfErrorCode({
                    error: Error()
                  }), ErrorCode) : ErrorCode).Client_BetError);
                }
              }

              break;

            case (_crd && CCommand === void 0 ? (_reportPossibleCrUseOfCCommand({
              error: Error()
            }), CCommand) : CCommand).Login:
            case (_crd && CCommand === void 0 ? (_reportPossibleCrUseOfCCommand({
              error: Error()
            }), CCommand) : CCommand).Spin:
              // 忽略 已知的 Login 與 Spin 指令
              break;

            default:
              console.error("\u672A\u77E5\u7684CustomCommand command : " + command);
              break;
          }
        }

        toBigEndianBytes(num) {
          if (num < 0 || num > 0xFFFF) {
            console.error("數字必須在 0 ~ 65535 之間");
          } // 取高位 (右移 8 bits) 和低位 (取最低 8 bits)


          var high = num >> 8 & 0xFF;
          var low = num & 0xFF;
          return [high, low];
        }

      });

      NetworkHandler._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1ce9f5144d16c3b36785fe4ca6d85371ebd161fb.js.map