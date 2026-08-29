System.register(["__unresolved_0", "cc", "@casino-mono/share-tools", "@casino-mono/mvc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Device, Model, ClientRecvAction, BaseDataModel, BaseModel, _crd;

  function _reportPossibleCrUseOfDeviceInfo(extras) {
    _reporterNs.report("DeviceInfo", "@casino-mono/share-tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDevice(extras) {
    _reporterNs.report("Device", "@casino-mono/share-tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExchangeInfo(extras) {
    _reporterNs.report("ExchangeInfo", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModel(extras) {
    _reporterNs.report("Model", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientRecvAction(extras) {
    _reporterNs.report("ClientRecvAction", "./RecvMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRecvMessage(extras) {
    _reporterNs.report("RecvMessage", "./RecvMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRecvEventMassage(extras) {
    _reporterNs.report("RecvEventMassage", "./RecvMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientRecvEventMap(extras) {
    _reporterNs.report("ClientRecvEventMap", "./RecvMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientSenderActionParams(extras) {
    _reporterNs.report("ClientSenderActionParams", "./SendMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseDataModel(extras) {
    _reporterNs.report("BaseDataModel", "./BaseDataModel", _context.meta, extras);
  }

  _export("BaseModel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_casinoMonoShareTools) {
      Device = _casinoMonoShareTools.Device;
    }, function (_casinoMonoMvc) {
      Model = _casinoMonoMvc.Model;
    }, function (_unresolved_2) {
      ClientRecvAction = _unresolved_2.ClientRecvAction;
    }, function (_unresolved_3) {
      BaseDataModel = _unresolved_3.BaseDataModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e4596n8ZVEt515fBammzl2", "BaseModel", undefined);

      /**
       * 資料Model模型
       */
      _export("BaseModel", BaseModel = class BaseModel extends (_crd && Model === void 0 ? (_reportPossibleCrUseOfModel({
        error: Error()
      }), Model) : Model) {
        // 機台代碼
        get gameCode() {
          return this.dataModel.gameCode || "";
        } // 取分析資料


        get analysisInfo() {
          return this.dataModel.analysisInfo;
        } // 取資料


        get data() {
          return this.dataModel;
        }

        get deviceInfo() {
          return (_crd && Device === void 0 ? (_reportPossibleCrUseOfDevice({
            error: Error()
          }), Device) : Device).deviceInfo();
        }

        constructor() {
          super();
          this.url = void 0;
          this.configReceiveEvent();
        } // 初始化資料


        initDataModel() {
          return new (_crd && BaseDataModel === void 0 ? (_reportPossibleCrUseOfBaseDataModel({
            error: Error()
          }), BaseDataModel) : BaseDataModel)();
        } // 設定接收事件


        configReceiveEvent() {
          if (this.connection) {
            const {
              receiver,
              socket
            } = this.connection;
            Object.values(_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).forEach(action => {
              receiver.on(action, this.handleReceiveEvent.bind(this));
            });
            socket.once('open', () => receiver.emit('open', {
              event: true
            }));
          }
        } // 事件對應方法


        handleReceiveEvent(message) {
          const {
            action,
            event,
            error,
            result
          } = message;
          if (!event && error) this.onErrorMessage(message);

          switch (action) {
            case (_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).Ready:
              this.isReady(message.data);
              break;

            case (_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).UpdateMarquee:
              this.updateMarquee(message.data);
              break;

            case (_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).Login:
              this.onLogin(result.data);
              break;

            case (_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).TakeMachine:
              this.onTakeMachine(result.data);
              break;

            case (_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).LoadInfo:
              this.onLoadInfo(result.data);
              break;

            case (_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).GetMachineDetail:
              this.onGetMachineDetail(result.data);
              break;

            case (_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).CreditExchange:
              this.onCreditExchange(message.data);
              break;

            case (_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).BalanceExchange:
              this.onBalanceExchange(message.data);
              break;

            case (_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).BeginGame:
              this.onBeginGame(result.data);
              break;

            case (_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).EndGame:
              this.onEndGame(result.data);
              break;

            case (_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).Gamble:
              this.onGamble(result.data);
              break;

            case (_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).HitJackpot:
              this.onHitJackpot(message.data);
              break;
          }
        }

        isReady(data) {// const { Ready } = ClientRecvAction;
          // const { version, ts } = data;
          // console.info(`isReady version: ${version} ServerTime:${new Date(ts)}`);
        } // Event: 更新跑馬燈 資料


        updateMarquee(str) {
          super.updateMarquee(str);
        }
        /**
         * Event: 登入資料
         * @description dataModel.userId is the user
         * @param data 
         */


        onLogin(data) {
          super.onLogin(data);
          console.info(`onLogin`, data);
          this.dataModel.userId = String(data.UserID); // this.dataModel.sid = data.Sid;
          // this.dataModel.gameID = data.GameID;
          // this.dataModel.test = data.Test;
          // this.dataModel.exchangeRate = data.ExchangeRate;
        } // Event: 佔機台


        onTakeMachine(data) {
          super.onTakeMachine(data);

          if (data && data.GameCode) {
            this.data.gameCode = String(data.GameCode);
            console.info(`onTakeMachine`);
          }
        } // Event: 遊戲資訊


        onLoadInfo(data) {
          super.onLoadInfo(data);
        } // Event: 機台資訊


        onGetMachineDetail(data) {
          super.onGetMachineDetail(data);
        } // Event: 換分


        onCreditExchange(data) {
          super.onCreditExchange(data);
        } // Event: 洗分


        onBalanceExchange(data) {
          super.onBalanceExchange(data);
        } // Event: 開始遊戲


        onBeginGame(_data) {
          const data = _data;
          this.data.credit = data.Credit;
          this.data.creditEnd = data.Credit_End;
          this.data.wagersID = data.WagersID;
        }

        onEndGame(_data) {
          const data = _data;
          this.data.credit = data.Credit;
        }

        onGamble(_data) {
          const data = _data; // gamble data
        } // Event: 中彩池


        onHitJackpot(data) {
          super.onHitJackpot(data);
        }

        getExchangeInfo() {
          const {
            balance,
            base,
            washInfo,
            betBase,
            credit
          } = this.data;
          return {
            credit,
            betBase,
            balance,
            base,
            washInfo
          };
        } // Event: 錯誤事件


        onErrorMessage(message) {
          const {
            action,
            error,
            errCode,
            event
          } = message;
          console.info(`action: ${action} = ${event} error: ${error} errcode: ${errCode}`); //TODO: Error dispatch event view
        } // 進行Websocket連線


        async connect(path) {
          if (!path) {
            path = await this.getConnectPath();
          }

          return new Promise((resolve, reject) => {
            this.connection.socket.once((_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).WSClose, event => reject(event.code));
            this.connection.receiver.once((_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
              error: Error()
            }), ClientRecvAction) : ClientRecvAction).Ready, () => resolve(true));
            this.connection.connect(this.url = path, true).catch(() => reject(false));
          });
        } // 送出事件並回應


        send(action, data) {
          return new Promise((resolve, reject) => {
            const {
              sender,
              receiver
            } = this.connection;
            data.requestId = this.data.requestId;
            sender.callServer(action, data);
            receiver.once(action, result => this.onRecv(result, resolve, reject));
          });
        }

        // 回傳事件
        onRecv(result, resolve, reject) {
          if (result.event) {
            resolve(result.data || result);
          } else {
            reject(result);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=60dcb88b51fe8cc56db669dff93f1f6872d87aa2.js.map