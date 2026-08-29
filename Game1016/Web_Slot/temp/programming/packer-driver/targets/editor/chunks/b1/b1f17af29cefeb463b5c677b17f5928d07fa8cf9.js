System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ByteReaderHelper, ByteWriterHelper, DataSize, CCommand, CConnectError, CConnectLog, CDispatcherManager, CSocket, CService, QueueDataInfo, Timex, CConnectManager, _crd, State;

  function _reportPossibleCrUseOfByteReaderHelper(extras) {
    _reporterNs.report("ByteReaderHelper", "./ByteArray", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteWriterHelper(extras) {
    _reporterNs.report("ByteWriterHelper", "./ByteArray", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataSize(extras) {
    _reporterNs.report("DataSize", "./ByteArray", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCCommand(extras) {
    _reporterNs.report("CCommand", "./CConnectDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCConnectError(extras) {
    _reporterNs.report("CConnectError", "./CConnectDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCConnectLog(extras) {
    _reporterNs.report("CConnectLog", "./CConnectLog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCDispatcherManager(extras) {
    _reporterNs.report("CDispatcherManager", "./CDispatcherManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCSocket(extras) {
    _reporterNs.report("CSocket", "./CSocket", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCService(extras) {
    _reporterNs.report("CService", "./CSService", _context.meta, extras);
  }

  _export({
    Timex: void 0,
    default: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ByteReaderHelper = _unresolved_2.ByteReaderHelper;
      ByteWriterHelper = _unresolved_2.ByteWriterHelper;
      DataSize = _unresolved_2.DataSize;
    }, function (_unresolved_3) {
      CCommand = _unresolved_3.CCommand;
      CConnectError = _unresolved_3.CConnectError;
    }, function (_unresolved_4) {
      CConnectLog = _unresolved_4.CConnectLog;
    }, function (_unresolved_5) {
      CDispatcherManager = _unresolved_5.default;
    }, function (_unresolved_6) {
      CSocket = _unresolved_6.CSocket;
    }, function (_unresolved_7) {
      CService = _unresolved_7.CService;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a97asVbopJDb/IxX0hXZSl", "CConnectManager", undefined);

      State = /*#__PURE__*/function (State) {
        State[State["CONNECT_START"] = 0] = "CONNECT_START";
        State[State["CONNECT_CONNECTING"] = 1] = "CONNECT_CONNECTING";
        State[State["CONNECT_WAIT_CONNECT"] = 2] = "CONNECT_WAIT_CONNECT";
        State[State["CONNECT_CONNECT_SUCCESS"] = 3] = "CONNECT_CONNECT_SUCCESS";
        State[State["CONNECT_WAIT_SUCCESS"] = 4] = "CONNECT_WAIT_SUCCESS";
        State[State["RECONNECT_START"] = 5] = "RECONNECT_START";
        State[State["RECONNECT_WAIT_CONNECT"] = 6] = "RECONNECT_WAIT_CONNECT";
        State[State["RECONNECT_CONNECT_SUCCESS"] = 7] = "RECONNECT_CONNECT_SUCCESS";
        State[State["RECONNECT_WAIT_SUCCESS"] = 8] = "RECONNECT_WAIT_SUCCESS";
        State[State["ONLINE"] = 9] = "ONLINE";
        State[State["Login"] = 10] = "Login";
        State[State["LoginWait"] = 11] = "LoginWait";
        State[State["OFFLINE"] = 12] = "OFFLINE";
        State[State["CONNECT_FIRST_UDP"] = 13] = "CONNECT_FIRST_UDP";
        State[State["CONNECT_WAIT_UDP"] = 14] = "CONNECT_WAIT_UDP";
        return State;
      }(State || {}); //儲存封包資訊


      QueueDataInfo = class QueueDataInfo {
        constructor() {
          this.ServiceID = -1;
          this.Data = void 0;
        }

      }; //Callback function type

      _export("Timex", Timex = class Timex {
        constructor() {
          this._startTime = void 0;
          //紀錄啟動時間
          this._startTime = Date.now();
        } //啟動距離現在的時間


        get Elapsed() {
          return Date.now() - this._startTime;
        }

      });

      _export("default", CConnectManager = class CConnectManager {
        constructor(gatewayList, mainServiceId, livingSeconds, maxRetryCount, retryIntervalSeconds) {
          //狀態
          this.currentState = void 0;
          //分流管理
          this.dispatcherManager = void 0;
          //Socket
          this._Socket = void 0;
          //服務列表
          this.serviceList = void 0;
          //紀錄時間
          this.recordTime = void 0;
          // awKey
          this._awKey = "";
          //version
          this._version = "";
          //OtherInfo
          this._otherInfo = null;
          //可存活時間
          this.lifeCycle = 60000;
          //最大重連次數
          this.maxReconnectTimes = 5;
          //連線嘗試次數記錄
          this.connectTimes = 0;
          //登入retry
          this.loginRetryCount = 0;
          //登入retryMax
          this.loginRetryMax = 5;
          //重連紀錄
          this.totalReconnectServices = 0;
          this.reconnectReceivedCount = 0;
          //服務是否終止
          this.isStop = true;
          //重試連線間隔時間
          this.retryIntervalSecondMs = 5000;
          //最後存活時間
          this.lastLiveTime = void 0;
          //封包紀錄
          this.queueDataInfo = [];
          //主要服務 ID
          this.SERVICE_MAIN = -1;
          //Service 連上的服務對應ID
          this.serialNumberBt = void 0;
          //Service 連上的對應隨機碼
          this.serverRandomBt = void 0;
          //可以實作的 Callback function
          this.FunErrorMsg = null;
          this.FunDisconnectService = null;
          this.FunRecv = null;
          this.FunFinishReconnect = null;
          this.FunExitGame = null;
          this.FunSystem = null;
          //時間處理
          this._timeX = new Timex();
          //服務序列號
          this.serialNumber = void 0;
          //未送封包
          this._unSendPacket = [];
          this.setState(State.OFFLINE);
          this.SERVICE_MAIN = mainServiceId;
          this.lifeCycle = livingSeconds * 1000;
          this.maxReconnectTimes = maxRetryCount;
          this.retryIntervalSecondMs = retryIntervalSeconds * 1000;
          this.dispatcherManager = new (_crd && CDispatcherManager === void 0 ? (_reportPossibleCrUseOfCDispatcherManager({
            error: Error()
          }), CDispatcherManager) : CDispatcherManager)(gatewayList);
          this._Socket = new (_crd && CSocket === void 0 ? (_reportPossibleCrUseOfCSocket({
            error: Error()
          }), CSocket) : CSocket)();
          this.serviceList = new Map();
          this.lastLiveTime = this._timeX.Elapsed;
          this.isStop = false;
        }
        /**
         * 進行連線
         * @param awKey 平台Token
         * @param serviceId 服務ID
         * @param version 版本
         */


        Connect(awKey, serviceId, version, otherInfo = null) {
          this.SERVICE_MAIN = serviceId;
          this._awKey = awKey;
          this._version = version;
          this.serviceList.clear();
          this.connectTimes = 0;
          this._otherInfo = otherInfo;
          this.setState(State.CONNECT_START);
        }
        /**
        * 主要服務溝通
        * @param data 封包資料
        * @returns 
        */


        MainSend(data) {
          return this.Send(this.SERVICE_MAIN, data, true);
        }
        /**
         * 退出指定的服務
         * @param serviceId 服務ID
         */


        ExitService(serviceId) {
          if (!this.serviceList.has(serviceId)) {
            return;
          }

          const service = this.serviceList.get(serviceId);
          this.serviceList.delete(serviceId);
          const bt = new (_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
            error: Error()
          }), ByteWriterHelper) : ByteWriterHelper)();
          bt.WriteByte((_crd && CCommand === void 0 ? (_reportPossibleCrUseOfCCommand({
            error: Error()
          }), CCommand) : CCommand).LeaveService);
          bt.WriteBytes(service.serviceIDBytes);

          this._Socket.Send(bt.Buffer);

          (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
            error: Error()
          }), CConnectLog) : CConnectLog).Instance.InfoLog(`送離開服務[${service.serviceID}]`);
        }
        /**
         * 強制斷線
         * @param msg 斷線訊息 
         */


        Disconnect(msg) {
          var _this$FunErrorMsg;

          this.setState(State.OFFLINE);
          (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
            error: Error()
          }), CConnectLog) : CConnectLog).Instance.ErrorLog(`斷線 Reason:${msg}`);
          this.serviceList.clear();
          this.SendLogoutPacket();
          (_this$FunErrorMsg = this.FunErrorMsg) == null || _this$FunErrorMsg.call(this, msg);
        }
        /**
         * 上線
         */


        Online() {
          (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
            error: Error()
          }), CConnectLog) : CConnectLog).Instance.InfoLog(`登入成功`);
          this.loginRetryCount = 0;
          this.setState(State.ONLINE);
        } //Socket是否連線


        isConnected() {
          return this._Socket.IsConnected();
        } //刷新


        Update() {
          this.processReceivePacket();
          return this.onRun();
        } //是否可以傳送封包


        canSend() {
          switch (this.getState()) {
            case State.CONNECT_START:
            case State.CONNECT_CONNECT_SUCCESS:
            case State.CONNECT_WAIT_CONNECT:
            case State.CONNECT_WAIT_SUCCESS:
            case State.ONLINE:
            case State.Login:
              return true;

            default:
              return false;
          }
        } //檢視目前Queue裡面的封包資訊


        DequeueQueueDataInfo() {
          if (!this.FunRecv) {
            return;
          }

          if (this.queueDataInfo.length > 0) {
            return;
          }

          for (const info of this.queueDataInfo) {
            this.FunRecv(info.ServiceID, info.Data);
          }
        } //Logout


        SendLogoutPacket() {
          const bt = new (_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
            error: Error()
          }), ByteWriterHelper) : ByteWriterHelper)();
          bt.WriteByte((_crd && CCommand === void 0 ? (_reportPossibleCrUseOfCCommand({
            error: Error()
          }), CCommand) : CCommand).Logout);

          this._Socket.Send(bt.Buffer);
        } //設定狀態


        setState(state) {
          this.currentState = state;
        } //取得目前狀態


        getState() {
          return this.currentState;
        } //#region 連線元件的狀態機執行


        onRun() {
          if (this.isStop) {
            return false;
          }

          try {
            switch (this.getState()) {
              case State.CONNECT_START:
                this.handleConnectState();
                break;

              case State.CONNECT_WAIT_CONNECT:
                this.handleWaitConnectState();
                break;

              case State.CONNECT_CONNECT_SUCCESS:
                this.handleFirstConnect();
                break;

              case State.CONNECT_WAIT_SUCCESS:
                this.handleWaitConnectSuccess();
                break;

              case State.RECONNECT_START:
                this.handleReconnectState();
                break;

              case State.RECONNECT_WAIT_CONNECT:
                this.handleWaitReconnectState();
                break;

              case State.RECONNECT_CONNECT_SUCCESS:
                this.handleReconnectSuccessState();
                break;

              case State.RECONNECT_WAIT_SUCCESS:
                this.handleReconnectWaitState();
                break;

              case State.ONLINE:
                this.handleOnlineState();
                break;

              case State.Login:
                this.handleLogin();
                break;
            }
          } catch {
            return false;
          }

          return true;
        } //處理登入


        handleLogin() {
          (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
            error: Error()
          }), CConnectLog) : CConnectLog).Instance.InfoLog(`開始進行登入`);
          this.loginRetryCount++;
          const bt = new (_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
            error: Error()
          }), ByteWriterHelper) : ByteWriterHelper)();
          bt.WriteByte((_crd && CCommand === void 0 ? (_reportPossibleCrUseOfCCommand({
            error: Error()
          }), CCommand) : CCommand).Login);
          bt.WriteBytes((_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
            error: Error()
          }), ByteWriterHelper) : ByteWriterHelper).ConvertToUnicodeStringByte(this._awKey));
          bt.WriteBytes((_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
            error: Error()
          }), ByteWriterHelper) : ByteWriterHelper).ConvertToUnicodeStringByte(this._version));

          if (this._otherInfo) {
            bt.WriteBytes((_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
              error: Error()
            }), ByteWriterHelper) : ByteWriterHelper).ConvertToUnicodeStringByte(this._otherInfo));
          }

          this.Send(this.SERVICE_MAIN, bt.Buffer);
          this.setState(State.LoginWait);
        } //處理上線狀態


        handleOnlineState() {
          if (this._unSendPacket.length > 0) {
            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.WarningLog(`有未送的封包`);

            for (const packet of this._unSendPacket) {
              this.MainSend(packet);
            } //清空未送封包


            this._unSendPacket.length = 0;
            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.WarningLog(`未送的封包已經重新發送`);
          }

          if (this._Socket.IsConnected()) {
            return;
          }

          if (this.serviceList.size > 0) {
            const liftTime = this._timeX.Elapsed - this.lastLiveTime;

            if (liftTime > this.lifeCycle) {
              (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
                error: Error()
              }), CConnectLog) : CConnectLog).Instance.WarningLog("閒置太久,超過存活時間");
              this.Disconnect("閒置太久,超過存活時間");
            } else {
              this.lastLiveTime = this._timeX.Elapsed; //Reconnect

              if (!this._Socket.IsConnected()) {
                (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
                  error: Error()
                }), CConnectLog) : CConnectLog).Instance.WarningLog(`<開始建立重連,Socket斷連>`);
              } else {
                (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
                  error: Error()
                }), CConnectLog) : CConnectLog).Instance.WarningLog(`<開始建立重連, ${liftTime}ms沒有存活>`);
              }

              this.setState(State.RECONNECT_START);
            }
          } else {
            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.ErrorLog(`沒有服務,無法重連`);
            this.Disconnect("沒有服務,無法重連");
          }
        } //處理重連


        handleReconnectWaitState() {
          if (this._timeX.Elapsed - this.recordTime < this.retryIntervalSecondMs) {
            return;
          }

          (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
            error: Error()
          }), CConnectLog) : CConnectLog).Instance.WarningLog(`第${this.connectTimes}次重連  等待113超時`);
          this.setState(State.RECONNECT_START);
        } //處理重連等待成功


        handleReconnectSuccessState() {
          const cService = this.getExistService();

          if (cService == null) {
            return;
          }

          const reConnectData = new (_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
            error: Error()
          }), ByteWriterHelper) : ByteWriterHelper)();
          reConnectData.WriteByte((_crd && CCommand === void 0 ? (_reportPossibleCrUseOfCCommand({
            error: Error()
          }), CCommand) : CCommand).ReConnect);
          reConnectData.WriteBytes(cService.serviceIDBytes);
          reConnectData.WriteBytes(this.serialNumberBt);
          reConnectData.WriteBytes(this.serverRandomBt);
          reConnectData.WriteBytes(new Uint8Array(new ArrayBuffer(6)));

          this._Socket.Send(reConnectData.Buffer);

          this.recordTime = this._timeX.Elapsed;
          this.setState(State.RECONNECT_WAIT_SUCCESS);
          (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
            error: Error()
          }), CConnectLog) : CConnectLog).Instance.InfoLog(`第${this.connectTimes}次連線 建立socket連線後送出113`);
        } //處理等待重連


        handleWaitReconnectState() {
          if (this._Socket.IsConnected()) {
            this.setState(State.RECONNECT_CONNECT_SUCCESS);
            return;
          }

          if (this._timeX.Elapsed - this.recordTime < this.retryIntervalSecondMs) {
            return;
          }

          if (this._Socket.m_RcvConnectResult === 0) {
            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.WarningLog(`第${this.connectTimes}次重連 等待socket重連超時(${this._timeX.Elapsed - this.recordTime})`);
          } else {
            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.WarningLog(`CConnectManager 第${this.connectTimes}次連線 等待socket重連連線失敗`);
          }

          this.setState(State.RECONNECT_START);
        } //處理重連


        async handleReconnectState() {
          this.connectTimes++;

          if (this.connectTimes > this.maxReconnectTimes) {
            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.ErrorLog(`Reconnect 第${this.connectTimes}次連線  連線失敗次數太多${this.getState()}`);
            this.Disconnect(`${(_crd && CConnectError === void 0 ? (_reportPossibleCrUseOfCConnectError({
              error: Error()
            }), CConnectError) : CConnectError).ReDispatcherConnectFail}`);
            return;
          }

          if (this._timeX.Elapsed - this.lastLiveTime > this.lifeCycle) {
            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.ErrorLog(`Reconnect 第${this.connectTimes}次連線 連線超時${this._timeX.Elapsed - this.lastLiveTime} ms`);
            this.Disconnect(`${(_crd && CConnectError === void 0 ? (_reportPossibleCrUseOfCConnectError({
              error: Error()
            }), CConnectError) : CConnectError).ReDispatcherConnectTimeout}`);
            return;
          }

          const newAddress = this.dispatcherManager.GetDispatcher_Ran();

          if (newAddress == null) {
            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.ErrorLog(`Reconnect 第${this.connectTimes}次連線 找不到分流資訊`);
            this.Disconnect(`${(_crd && CConnectError === void 0 ? (_reportPossibleCrUseOfCConnectError({
              error: Error()
            }), CConnectError) : CConnectError).ReDispatcherNotFound}`);
            return;
          }

          if (this._Socket.IsConnected()) {
            this._Socket.CloseSocket().then(() => {
              (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
                error: Error()
              }), CConnectLog) : CConnectLog).Instance.InfoLog(`Reconnect 第${this.connectTimes}次連線  連線${newAddress._sIP}:${newAddress._iPort}`);

              this._Socket.Connect(newAddress);

              this.recordTime = this._timeX.Elapsed;
              this.setState(State.RECONNECT_WAIT_CONNECT);
            }).catch(error => {
              (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
                error: Error()
              }), CConnectLog) : CConnectLog).Instance.ErrorLog(`Reconnect 第${this.connectTimes}次連線 重連異常${error}`);
              this.setState(State.OFFLINE);
            });

            this.setState(State.CONNECT_CONNECTING);
          } else {
            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.InfoLog(`Reconnect 第${this.connectTimes}次連線  連線${newAddress._sIP}:${newAddress._iPort}`);

            this._Socket.Connect(newAddress);

            this.recordTime = this._timeX.Elapsed;
            this.setState(State.RECONNECT_WAIT_CONNECT);
          }
        } //處理等待連線成功


        handleWaitConnectSuccess() {
          if (this._timeX.Elapsed - this.recordTime < this.retryIntervalSecondMs) {
            return;
          }

          (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
            error: Error()
          }), CConnectLog) : CConnectLog).Instance.WarningLog(`第${this.connectTimes}次連線 等待112超時 ${this._timeX.Elapsed - this.recordTime}`);
          this.setState(State.CONNECT_START);
        } //處理第一次連線


        handleFirstConnect() {
          const data = new (_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
            error: Error()
          }), ByteWriterHelper) : ByteWriterHelper)();
          data.WriteByte((_crd && CCommand === void 0 ? (_reportPossibleCrUseOfCCommand({
            error: Error()
          }), CCommand) : CCommand).Connect);
          data.WriteBytes((_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
            error: Error()
          }), ByteWriterHelper) : ByteWriterHelper).ConvertToIntByte(this.lifeCycle / 1000, 2));
          data.WriteBytes(new Uint8Array(new ArrayBuffer(6)));

          this._Socket.Send(data.Buffer);

          this.recordTime = this._timeX.Elapsed;
          (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
            error: Error()
          }), CConnectLog) : CConnectLog).Instance.InfoLog(`第${this.connectTimes}次連線 建立socket連線後送出112`);
          this.setState(State.CONNECT_WAIT_SUCCESS);
        } //處理等待連線狀態


        handleWaitConnectState() {
          if (this._Socket.IsConnected()) {
            this.setState(State.CONNECT_CONNECT_SUCCESS);
            return;
          }

          if (this._timeX.Elapsed - this.recordTime < this.retryIntervalSecondMs) {
            return;
          }

          if (this._Socket.m_RcvConnectResult === 0) {
            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.WarningLog(`CConnectManager 第${this.connectTimes}次連線 等待socket連線超時(${this._timeX.Elapsed - this.recordTime})`);
          } else {
            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.WarningLog(`CConnectManager 第${this.connectTimes}次連線 等待socket連線失敗`);
          }

          this.setState(State.CONNECT_START);
        } //處理連線狀態


        handleConnectState() {
          this.connectTimes++;

          if (this.connectTimes > this.maxReconnectTimes) {
            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.ErrorLog(`CConnectManager 第${this.connectTimes}次連線 連線失敗次數太多`);
            this.Disconnect(`${(_crd && CConnectError === void 0 ? (_reportPossibleCrUseOfCConnectError({
              error: Error()
            }), CConnectError) : CConnectError).DispatcherConnectFail}`);
            return;
          }

          const address = this.dispatcherManager.GetDispatcher_Ran();

          if (!address) {
            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.ErrorLog(`CConnectManager 第${this.connectTimes}次連線 找不到分流資訊`);
            this.Disconnect(`${(_crd && CConnectError === void 0 ? (_reportPossibleCrUseOfCConnectError({
              error: Error()
            }), CConnectError) : CConnectError).DispatcherNotFound}`);
            return;
          }

          if (this._Socket.IsConnected()) {
            this._Socket.CloseSocket().then(() => {
              this._Socket.Connect(address);

              this.recordTime = this._timeX.Elapsed;
              (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
                error: Error()
              }), CConnectLog) : CConnectLog).Instance.InfoLog(`CConnectManager 第${this.connectTimes}次連線 等待socket連線中`);
              this.setState(State.CONNECT_WAIT_CONNECT);
            });

            this.setState(State.CONNECT_CONNECTING);
          } else {
            this._Socket.Connect(address);

            this.recordTime = this._timeX.Elapsed;
            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.InfoLog(`CConnectManager 第${this.connectTimes}次連線 等待socket連線中`);
            this.setState(State.CONNECT_WAIT_CONNECT);
          }
        } //#region  收到封包


        processReceivePacket() {
          const bt = this._Socket.GetQueue();

          if (!bt) {
            return;
          }

          if (!this._Socket.IsConnected()) {
            return;
          }

          this.handPacket(bt);
        } //#region  處理封包


        handPacket(bt) {
          var _this$FunDisconnectSe;

          if (!bt) return;
          const btReader = new (_crd && ByteReaderHelper === void 0 ? (_reportPossibleCrUseOfByteReaderHelper({
            error: Error()
          }), ByteReaderHelper) : ByteReaderHelper)(bt);
          const command = btReader.ReadByte();
          let serviceID;
          this.lastLiveTime = this._timeX.Elapsed;

          switch (command) {
            case 8:
              //更新分流清單
              break;

            case 30:
              //正常收包
              serviceID = btReader.ReadInt(2);
              const packetNo = btReader.ReadInt(2);

              if (this.serviceList.has(serviceID)) {
                const service = this.serviceList.get(serviceID);

                if (packetNo === 0) {
                  var _this$FunRecv;

                  //Main service process
                  (_this$FunRecv = this.FunRecv) == null || _this$FunRecv.call(this, serviceID, (_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
                    error: Error()
                  }), ByteWriterHelper) : ByteWriterHelper).CopyBytes(btReader, btReader.Position, btReader.length - btReader.Position));
                } else if ((service == null ? void 0 : service.recvNum) === packetNo) {
                  var _this$FunRecv2;

                  service.recvNum = service.recvNum % 60000 + 1;
                  (_this$FunRecv2 = this.FunRecv) == null || _this$FunRecv2.call(this, serviceID, (_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
                    error: Error()
                  }), ByteWriterHelper) : ByteWriterHelper).CopyBytes(btReader, btReader.Position, btReader.length - btReader.Position));
                } else {
                  (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
                    error: Error()
                  }), CConnectLog) : CConnectLog).Instance.ErrorLog(`服務[${serviceID}]封包編號錯誤! 預期編號:[${service == null ? void 0 : service.recvNum}] 實際編號:[${packetNo}]`);
                  this.setState(State.RECONNECT_START);
                }
              } else {
                (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
                  error: Error()
                }), CConnectLog) : CConnectLog).Instance.ErrorLog(`服務[${serviceID}]不存在，封包編號:[${packetNo}]`);
              }

              break;

            case 31:
              serviceID = btReader.ReadInt(2);
              const msg = btReader.ReadString();
              (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
                error: Error()
              }), CConnectLog) : CConnectLog).Instance.ErrorLog(`加入服務失敗 ${serviceID} ${msg}`);
              this.removeService(serviceID, `移除服務${serviceID}`);
              break;

            case 33:
              serviceID = btReader.ReadInt(2);
              this.removeService(serviceID, `被服務踢出${serviceID}`);
              break;

            case 34:
              if (this.getState() !== State.RECONNECT_WAIT_SUCCESS) {
                return;
              }

              serviceID = btReader.ReadInt(2);
              const serverRecvNum = btReader.ReadInt(2);
              const service = this.serviceList.get(serviceID);

              if (service) {
                const history = service.GetSendHistory(serverRecvNum);

                for (const cPacket of history) {
                  this._Socket.Send(cPacket.packet);
                }
              }

              (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
                error: Error()
              }), CConnectLog) : CConnectLog).Instance.WarningLog(`收到34,服務 ${serviceID}`);
              this.reconnectReceivedCount += 1;

              if (this.reconnectReceivedCount === this.totalReconnectServices) {
                this.reconnectReceivedCount = 0;
                this.totalReconnectServices = 0;
                this.connectTimes = 0;
                (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
                  error: Error()
                }), CConnectLog) : CConnectLog).Instance.WarningLog(`完成全部重連`);
                this.setState(State.ONLINE);
              }

              break;

            case 35:
              //中控踢人  告知玩家 直接斷線
              (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
                error: Error()
              }), CConnectLog) : CConnectLog).Instance.WarningLog(`Server中斷服務`);
              (_this$FunDisconnectSe = this.FunDisconnectService) == null || _this$FunDisconnectSe.call(this, serviceID, msg);
              this.Disconnect("Server中斷服務");
              break;

            case (_crd && CCommand === void 0 ? (_reportPossibleCrUseOfCCommand({
              error: Error()
            }), CCommand) : CCommand).Connect:
              //連線成功建立後收到分流編號
              if (this.getState() !== State.CONNECT_WAIT_SUCCESS) {
                return;
              }

              btReader.Position = 1;
              this.serialNumberBt = new Uint8Array(new ArrayBuffer((_crd && DataSize === void 0 ? (_reportPossibleCrUseOfDataSize({
                error: Error()
              }), DataSize) : DataSize).Int));
              this.serverRandomBt = new Uint8Array(new ArrayBuffer((_crd && DataSize === void 0 ? (_reportPossibleCrUseOfDataSize({
                error: Error()
              }), DataSize) : DataSize).Int));

              for (let x = 0; x < (_crd && DataSize === void 0 ? (_reportPossibleCrUseOfDataSize({
                error: Error()
              }), DataSize) : DataSize).Int; x++) {
                this.serialNumberBt[x] = btReader.ReadByte();
              }

              for (let x = 0; x < (_crd && DataSize === void 0 ? (_reportPossibleCrUseOfDataSize({
                error: Error()
              }), DataSize) : DataSize).Int; x++) {
                this.serverRandomBt[x] = btReader.ReadByte();
              }

              this.serialNumber = btReader.ReadInt(4);
              this.recordTime = this._timeX.Elapsed;
              this.connectTimes = 0;
              (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
                error: Error()
              }), CConnectLog) : CConnectLog).Instance.InfoLog(`收到112,發送加入主服[${this.SERVICE_MAIN}]`);
              const joinMainServiceDelayMS = 100; //加入服務

              setTimeout(() => {
                this.joinService(this.SERVICE_MAIN);
                this.setState(State.Login);
              }, joinMainServiceDelayMS);
              break;

            case 113:
              if (this.getState() !== State.RECONNECT_WAIT_SUCCESS) {
                return;
              }

              this.reconnectReceivedCount = 0;
              this.totalReconnectServices = 0;

              for (const service of this.serviceList.values()) {
                const bt = new (_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
                  error: Error()
                }), ByteWriterHelper) : ByteWriterHelper)();
                bt.WriteByte((_crd && CCommand === void 0 ? (_reportPossibleCrUseOfCCommand({
                  error: Error()
                }), CCommand) : CCommand).Join);
                bt.WriteBytes(service.serviceIDBytes);
                bt.WriteBytes((_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
                  error: Error()
                }), ByteWriterHelper) : ByteWriterHelper).ConvertToIntByte(service.recvNum, 2));
                bt.WriteBytes((_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
                  error: Error()
                }), ByteWriterHelper) : ByteWriterHelper).ConvertToIntByte(this.lifeCycle / 1000, 2));

                this._Socket.Send(bt.Buffer);

                this.totalReconnectServices += 1;
              }

              (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
                error: Error()
              }), CConnectLog) : CConnectLog).Instance.InfoLog(`收到113, 發送31 ,重連服務數:${this.totalReconnectServices}`);
              break;
            // 詢問總部，目前沒有送
            // case 202:
            //     //中途加入新的分流
            //     CConnectLog.Instance.WarningLog( `中途加入分流 ${ByteWriterHelper.CopyBytes( bt, 1, 6 )}` );
            //     this.dispatcherManager.AddDispatcher( ByteWriterHelper.CopyBytes( bt, 1, 6 ) );
            //     break;
            // case 203:
            //     //中途分流移除
            //     CConnectLog.Instance.WarningLog( `中途移除分流 ${ByteWriterHelper.CopyBytes( bt, 1, 6 )}` );
            //     this.dispatcherManager.RemoveDispatcher( ByteWriterHelper.CopyBytes( bt, 1, 6 ) );
            //     break;

            case 255:
              if (this.serviceList.size <= 0) {
                return;
              }

              const tempBt = new (_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
                error: Error()
              }), ByteWriterHelper) : ByteWriterHelper)();
              tempBt.WriteByte((_crd && CCommand === void 0 ? (_reportPossibleCrUseOfCCommand({
                error: Error()
              }), CCommand) : CCommand).Life);
              tempBt.WriteBytes((_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
                error: Error()
              }), ByteWriterHelper) : ByteWriterHelper).ConvertToIntByte(0, 2));

              this._Socket.Send(tempBt.Buffer);

              break;
          }
        }
        /**
         * 加入主要服務
         * @param serviceId 服務 ID 
         */


        joinService(serviceId) {
          if (!this.serviceList.has(serviceId)) {
            const service = new (_crd && CService === void 0 ? (_reportPossibleCrUseOfCService({
              error: Error()
            }), CService) : CService)(serviceId, this.lifeCycle);
            this.serviceList.set(serviceId, service);
            const bt = new (_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
              error: Error()
            }), ByteWriterHelper) : ByteWriterHelper)();
            bt.WriteByte((_crd && CCommand === void 0 ? (_reportPossibleCrUseOfCCommand({
              error: Error()
            }), CCommand) : CCommand).Join);
            bt.WriteBytes(service.serviceIDBytes);
            bt.WriteBytes((_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
              error: Error()
            }), ByteWriterHelper) : ByteWriterHelper).ConvertToIntByte(0, 2));
            bt.WriteBytes((_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
              error: Error()
            }), ByteWriterHelper) : ByteWriterHelper).ConvertToIntByte(this.lifeCycle / 1000, 2));

            this._Socket.Send(bt.Buffer);

            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.InfoLog(`送加入服務[${service.serviceID}]`);
          }
        }
        /**
         * 移除服務
         * @param serviceID 服務ID 
         * @param msg 移除訊息
         * @returns 
         */


        removeService(serviceID, msg) {
          var _this$FunDisconnectSe2;

          (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
            error: Error()
          }), CConnectLog) : CConnectLog).Instance.WarningLog(`將要移除服務[${serviceID}] msg : ${msg}`);

          if (this.loginRetryCount < this.loginRetryMax) {
            this.ExitService(serviceID);
            this.setState(State.CONNECT_START);
            return;
          }

          if (!this.serviceList.delete(serviceID)) {
            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.WarningLog(`服務 ${serviceID}不存在`);
            return;
          }

          (_this$FunDisconnectSe2 = this.FunDisconnectService) == null || _this$FunDisconnectSe2.call(this, serviceID, msg);

          if (this.getExistService() != null) {
            // 只要有任何一個 Service 活著, 就不能斷線
            return;
          }

          this.Disconnect("所有主服務都已經斷線");
        }
        /**
         * 取得目前存在的Service
         * @returns 存在的Service
         */


        getExistService() {
          if (this.serviceList.size > 0) {
            for (const service of this.serviceList.values()) {
              return service;
            }
          }

          return null;
        }
        /**
         * 送封包
         * @param serviceId 服務ID
         * @param data 封包內容
         * @param isOrder 是否有排序(預設有排序)
         * @returns 
         */


        Send(serviceId, data, isOrder = true) {
          if (this.IsWaitReconnect()) {
            this._unSendPacket.push(data);

            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.WarningLog(`正在重連中,無法傳送封包`);
            return false;
          }

          if (!this.canSend()) {
            this._unSendPacket.push(data);

            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.ErrorLog(`無法傳送封包`);
            return false;
          }

          if (!this.serviceList.has(serviceId)) {
            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.ErrorLog(`服務[${serviceId}] 不在列表中`);
            return false;
          }

          const service = this.serviceList.get(serviceId);

          if (!service) {
            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.ErrorLog(`服務[${serviceId}] 不存在`);
            return false;
          }

          const bt = isOrder ? service.AddPacket(data) : service.getNoOrderPacket(data);

          this._Socket.Send(bt);

          return true;
        } //檢查是否正在重連


        IsWaitReconnect() {
          return this.getState() === State.RECONNECT_START || this.getState() === State.RECONNECT_WAIT_CONNECT || this.getState() === State.RECONNECT_WAIT_SUCCESS;
        }

        IsDisconnect() {
          return this.getState() === State.OFFLINE;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b1f17af29cefeb463b5c677b17f5928d07fa8cf9.js.map