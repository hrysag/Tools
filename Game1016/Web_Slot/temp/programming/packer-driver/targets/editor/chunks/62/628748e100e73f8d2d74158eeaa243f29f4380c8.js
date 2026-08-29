System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AskHistoryBodyFormat, AskHistoryFail, AskHistoryRetryCount, Environment, HistoryErrorCode, HistoryHeightMax, LoginReDispatcherConnectFail, PARSER_URL_FAIL, REQUEST_TIMEOUT, REQUEST_TIMEOUT_ERROR_CODE, SpinReDispatcherConnectFail, ByteReaderHelper, ByteWriterHelper, MainServiceID, MaxRetryCount, RetryIntervalSeconds, AdditionalPurchaseType, CCommand, CCommandStatus, CConnectLog, CConnectManager, GameMachineInfo, GameType, NetAgentVersion, NetEvent, NetObserver, SpinAck, _cc, NetAgent, _crd, cc;

  function _reportPossibleCrUseOfAskHistoryBodyFormat(extras) {
    _reporterNs.report("AskHistoryBodyFormat", "./AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAskHistoryFail(extras) {
    _reporterNs.report("AskHistoryFail", "./AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAskHistoryRetryCount(extras) {
    _reporterNs.report("AskHistoryRetryCount", "./AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConfigType(extras) {
    _reporterNs.report("ConfigType", "./AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnvironment(extras) {
    _reporterNs.report("Environment", "./AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHistoryErrorCode(extras) {
    _reporterNs.report("HistoryErrorCode", "./AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhistoryHeightFormat(extras) {
    _reporterNs.report("historyHeightFormat", "./AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHistoryHeightMax(extras) {
    _reporterNs.report("HistoryHeightMax", "./AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICommonSetting(extras) {
    _reporterNs.report("ICommonSetting", "./AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGameConfig(extras) {
    _reporterNs.report("IGameConfig", "./AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGameSetting(extras) {
    _reporterNs.report("IGameSetting", "./AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIHistory(extras) {
    _reporterNs.report("IHistory", "./AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlatformSetting(extras) {
    _reporterNs.report("IPlatformSetting", "./AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayerInfo(extras) {
    _reporterNs.report("IPlayerInfo", "./AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginReDispatcherConnectFail(extras) {
    _reporterNs.report("LoginReDispatcherConnectFail", "./AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPARSER_URL_FAIL(extras) {
    _reporterNs.report("PARSER_URL_FAIL", "./AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfREQUEST_TIMEOUT(extras) {
    _reporterNs.report("REQUEST_TIMEOUT", "./AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfREQUEST_TIMEOUT_ERROR_CODE(extras) {
    _reporterNs.report("REQUEST_TIMEOUT_ERROR_CODE", "./AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpinReDispatcherConnectFail(extras) {
    _reporterNs.report("SpinReDispatcherConnectFail", "./AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteReaderHelper(extras) {
    _reporterNs.report("ByteReaderHelper", "./CConnectManager/ByteArray", _context.meta, extras);
  }

  function _reportPossibleCrUseOfByteWriterHelper(extras) {
    _reporterNs.report("ByteWriterHelper", "./CConnectManager/ByteArray", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainServiceID(extras) {
    _reporterNs.report("MainServiceID", "./CConnectManager/CConncetConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMaxRetryCount(extras) {
    _reporterNs.report("MaxRetryCount", "./CConnectManager/CConncetConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRetryIntervalSeconds(extras) {
    _reporterNs.report("RetryIntervalSeconds", "./CConnectManager/CConncetConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdditionalPurchaseType(extras) {
    _reporterNs.report("AdditionalPurchaseType", "./CConnectManager/CConnectDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCCommand(extras) {
    _reporterNs.report("CCommand", "./CConnectManager/CConnectDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCCommandStatus(extras) {
    _reporterNs.report("CCommandStatus", "./CConnectManager/CConnectDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCConnectLog(extras) {
    _reporterNs.report("CConnectLog", "./CConnectManager/CConnectLog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCConnectManager(extras) {
    _reporterNs.report("CConnectManager", "./CConnectManager/CConnectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMachineInfo(extras) {
    _reporterNs.report("GameMachineInfo", "./GameMachineInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "./NetAgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetAgentVersion(extras) {
    _reporterNs.report("NetAgentVersion", "./NetAgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetEvent(extras) {
    _reporterNs.report("NetEvent", "./NetObserver", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetListener(extras) {
    _reporterNs.report("NetListener", "./NetObserver", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetObserver(extras) {
    _reporterNs.report("NetObserver", "./NetObserver", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpinAck(extras) {
    _reporterNs.report("SpinAck", "./SpinAck", _context.meta, extras);
  }

  _export("NetAgent", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc2) {
      _cclegacy = _cc2.cclegacy;
      __checkObsolete__ = _cc2.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc2.__checkObsoleteInNamespace__;
      _cc = _cc2;
    }, function (_unresolved_2) {
      AskHistoryBodyFormat = _unresolved_2.askHistoryBodyFormat;
      AskHistoryFail = _unresolved_2.AskHistoryFail;
      AskHistoryRetryCount = _unresolved_2.AskHistoryRetryCount;
      Environment = _unresolved_2.Environment;
      HistoryErrorCode = _unresolved_2.HistoryErrorCode;
      HistoryHeightMax = _unresolved_2.HistoryHeightMax;
      LoginReDispatcherConnectFail = _unresolved_2.LoginReDispatcherConnectFail;
      PARSER_URL_FAIL = _unresolved_2.PARSER_URL_FAIL;
      REQUEST_TIMEOUT = _unresolved_2.REQUEST_TIMEOUT;
      REQUEST_TIMEOUT_ERROR_CODE = _unresolved_2.REQUEST_TIMEOUT_ERROR_CODE;
      SpinReDispatcherConnectFail = _unresolved_2.SpinReDispatcherConnectFail;
    }, function (_unresolved_3) {
      ByteReaderHelper = _unresolved_3.ByteReaderHelper;
      ByteWriterHelper = _unresolved_3.ByteWriterHelper;
    }, function (_unresolved_4) {
      MainServiceID = _unresolved_4.MainServiceID;
      MaxRetryCount = _unresolved_4.MaxRetryCount;
      RetryIntervalSeconds = _unresolved_4.RetryIntervalSeconds;
    }, function (_unresolved_5) {
      AdditionalPurchaseType = _unresolved_5.AdditionalPurchaseType;
      CCommand = _unresolved_5.CCommand;
      CCommandStatus = _unresolved_5.CCommandStatus;
    }, function (_unresolved_6) {
      CConnectLog = _unresolved_6.CConnectLog;
    }, function (_unresolved_7) {
      CConnectManager = _unresolved_7.default;
    }, function (_unresolved_8) {
      GameMachineInfo = _unresolved_8.default;
    }, function (_unresolved_9) {
      GameType = _unresolved_9.GameType;
      NetAgentVersion = _unresolved_9.NetAgentVersion;
    }, function (_unresolved_10) {
      NetEvent = _unresolved_10.NetEvent;
      NetObserver = _unresolved_10.NetObserver;
    }, function (_unresolved_11) {
      SpinAck = _unresolved_11.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a7d922lVTRAZrhCU53q6bIq", "NetAgent", undefined);

      /**
       * 連線元件
       */
      cc = __checkObsoleteInNamespace__(_cc);

      _export("NetAgent", NetAgent = class NetAgent {
        constructor() {
          //連線管理元件
          this._cConnectManager = null;
          //process array 處理結果
          this._processCommandArray = [];
          //觀察者
          this._observer = new (_crd && NetObserver === void 0 ? (_reportPossibleCrUseOfNetObserver({
            error: Error()
          }), NetObserver) : NetObserver)();
          //PlayerInfo
          this._playerInfo = {
            game_code: "",
            platform: "",
            name: "",
            serviceId: "",
            awKey: "",
            webConfigUrl: "",
            ParserSuccess: false
          };
          this.gameType = (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).Slot;
          this.handleCustomCommand = null;
          //歷程
          this._history = [];

          //取代字串功能
          this.padStartAlternative = (input, targetLength, padString) => {
            while (input.length < targetLength) {
              input = padString + input;
            }

            return input;
          };

          console.log(`[NetAgent] Version: ${_crd && NetAgentVersion === void 0 ? (_reportPossibleCrUseOfNetAgentVersion({
            error: Error()
          }), NetAgentVersion) : NetAgentVersion}`);
        }

        //收到斷線
        onCConnectError(msg) {
          cc.log("[NetAgent onCConnectError] msg", msg);

          this._observer.Notify((_crd && NetEvent === void 0 ? (_reportPossibleCrUseOfNetEvent({
            error: Error()
          }), NetEvent) : NetEvent).Disconnected, msg);
        } //收到服務踢人


        onCConnectDisConnect(serviceID, msg) {
          cc.log("[NetAgent onCCConnectDisConnect] serviceID", serviceID, "msg", msg);

          this._observer.Notify((_crd && NetEvent === void 0 ? (_reportPossibleCrUseOfNetEvent({
            error: Error()
          }), NetEvent) : NetEvent).ServiceKick, msg);
        }

        onCConnectRecv(_, data) {
          const bt = new (_crd && ByteReaderHelper === void 0 ? (_reportPossibleCrUseOfByteReaderHelper({
            error: Error()
          }), ByteReaderHelper) : ByteReaderHelper)(data.buffer);
          this.processCommand(bt.ReadByte(), bt);
          this.handleCustomCommand && this.handleCustomCommand(bt);
        }

        static GetInstance() {
          if (this._instance == null) {
            this._instance = new NetAgent();
          }

          return this._instance;
        }

        get PlayerInfo() {
          return this._playerInfo;
        } //處理指令


        processCommand(command, ack) {
          switch (command) {
            case (_crd && CCommand === void 0 ? (_reportPossibleCrUseOfCCommand({
              error: Error()
            }), CCommand) : CCommand).Login:
              this.handleLogin(ack);
              break;

            case (_crd && CCommand === void 0 ? (_reportPossibleCrUseOfCCommand({
              error: Error()
            }), CCommand) : CCommand).Spin:
              this.handleSpin(ack);
              break;

            default:
              break;
          }
        } //Spin process


        handleSpin(ack) {
          const processIndex = this._processCommandArray.findIndex(item => item.command === (_crd && CCommand === void 0 ? (_reportPossibleCrUseOfCCommand({
            error: Error()
          }), CCommand) : CCommand).Spin);

          if (processIndex === -1) return;

          const [process] = this._processCommandArray.splice(processIndex, 1);

          if (!process) return;
          clearTimeout(process.timeoutId);
          const spinAck = new (_crd && SpinAck === void 0 ? (_reportPossibleCrUseOfSpinAck({
            error: Error()
          }), SpinAck) : SpinAck)(ack);
          process.process(spinAck);

          if (spinAck.Result === (_crd && CCommandStatus === void 0 ? (_reportPossibleCrUseOfCCommandStatus({
            error: Error()
          }), CCommandStatus) : CCommandStatus).Success) {
            this.insertHistory(spinAck);
          }
        } //Login process


        async handleLogin(ack) {
          const processIndex = this._processCommandArray.findIndex(item => item.command === (_crd && CCommand === void 0 ? (_reportPossibleCrUseOfCCommand({
            error: Error()
          }), CCommand) : CCommand).Login);

          if (processIndex === -1) return;

          const process = this._processCommandArray.splice(processIndex, 1)[0];

          if (!process) return;
          clearTimeout(process.timeoutId); // Non-Slot games handle packets themselves

          if (this.gameType !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).Slot) return;
          const gameMachineInfo = new (_crd && GameMachineInfo === void 0 ? (_reportPossibleCrUseOfGameMachineInfo({
            error: Error()
          }), GameMachineInfo) : GameMachineInfo)(ack);

          if (gameMachineInfo.Result === (_crd && CCommandStatus === void 0 ? (_reportPossibleCrUseOfCCommandStatus({
            error: Error()
          }), CCommandStatus) : CCommandStatus).Success) {
            // Notify cConnectManager Online
            this._cConnectManager.Online();

            this._playerInfo.name = gameMachineInfo.Nickname;
            await this.askPlayerHistory(gameMachineInfo.HistoryHeight);
          } else {
            this._cConnectManager.Disconnect(`${gameMachineInfo.Result}`);
          }

          process.process(gameMachineInfo);
        } //轉換ConnectManager 為上線狀態


        TransConnectManagerToOnline() {
          var _this$_cConnectManage;

          (_this$_cConnectManage = this._cConnectManager) == null || _this$_cConnectManage.Online();
        }

        Update(dt) {
          var _this$_cConnectManage2;

          (_this$_cConnectManage2 = this._cConnectManager) == null || _this$_cConnectManage2.Update();
        }
        /**
         * 初始化連線管理元件
         * @param gatewayList   分流清單
         */


        async initCConnectManager(env) {
          if (this._cConnectManager != null) {
            //已經完成初始化
            return true;
          } //需要初始化連線元件


          try {
            if (env == (_crd && Environment === void 0 ? (_reportPossibleCrUseOfEnvironment({
              error: Error()
            }), Environment) : Environment).Release) {//Release 版本只能看到 Error Log
              // CConnectLog.Instance.SetVisibleLevel( LogLevel.Error );
            }

            this._cConnectManager = new (_crd && CConnectManager === void 0 ? (_reportPossibleCrUseOfCConnectManager({
              error: Error()
            }), CConnectManager) : CConnectManager)( //分流清單
            this.PlayerInfo.webConfig.CommonSetting.ConnectSetting, //分流 ServiceID
            _crd && MainServiceID === void 0 ? (_reportPossibleCrUseOfMainServiceID({
              error: Error()
            }), MainServiceID) : MainServiceID, //存活時間
            this.PlayerInfo.webConfig.CommonSetting.LifeSecond, //最大重試次數
            _crd && MaxRetryCount === void 0 ? (_reportPossibleCrUseOfMaxRetryCount({
              error: Error()
            }), MaxRetryCount) : MaxRetryCount, //重試間隔時間
            _crd && RetryIntervalSeconds === void 0 ? (_reportPossibleCrUseOfRetryIntervalSeconds({
              error: Error()
            }), RetryIntervalSeconds) : RetryIntervalSeconds);
            this._cConnectManager.FunErrorMsg = this.onCConnectError.bind(this);
            this._cConnectManager.FunDisconnectService = this.onCConnectDisConnect.bind(this);
            this._cConnectManager.FunRecv = this.onCConnectRecv.bind(this);
            return true;
          } catch (error) {
            cc.error("Login initCConnectManager Fail", error);
            return false;
          }
        }
        /**
         * 解析網址參數
         * @param url game Url
         * @returns true if parsing is successful, false otherwise
         */


        ParserBaseConfig(url) {
          try {
            this._playerInfo.webConfigUrl = this.GetURLParameter(url, "webconfigurl");
            this._playerInfo.serviceId = this.GetURLParameter(url, "serviceid");
            this._playerInfo.game_code = this.GetURLParameter(url, "game_code");
            this._playerInfo.platform = this.GetURLParameter(url, "platform");
            this._playerInfo.awKey = this.GetURLParameter(url, "awkey");
            this._playerInfo.ParserSuccess = true;
          } catch (error) {
            cc.error("ParserBaseConfig Fail", error);
          }
        }
        /**
         * 
         * @param env AgentDefine.Environment
         * @param href Link Url
         * @returns 
         */


        async Login(env, version, gameType = (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
          error: Error()
        }), GameType) : GameType).Slot) {
          return new Promise(async (resolve, reject) => {
            try {
              this.gameType = gameType;

              if (this._cConnectManager == null) {
                if ((await this.initCConnectManager(env)) == false) {
                  resolve(new (_crd && GameMachineInfo === void 0 ? (_reportPossibleCrUseOfGameMachineInfo({
                    error: Error()
                  }), GameMachineInfo) : GameMachineInfo)(null));
                  return;
                }
              }

              const DeviceCollection = {
                BrowserType: cc.sys.browserType,
                BrowserVersion: cc.sys.browserVersion,
                Platform: cc.sys.platform,
                Language: cc.sys.language,
                Os: cc.sys.os,
                OsVersion: cc.sys.osVersion
              };
              (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
                error: Error()
              }), CConnectLog) : CConnectLog).Instance.InfoLog(`Login awKey:${this._playerInfo.awKey} serviceId:${this._playerInfo.serviceId} version:${version}`);

              this._cConnectManager.Connect(this._playerInfo.awKey, Number(this._playerInfo.serviceId), `v${this._playerInfo.platform}.${version}`, JSON.stringify(DeviceCollection));

              this.askCommand((_crd && CCommand === void 0 ? (_reportPossibleCrUseOfCCommand({
                error: Error()
              }), CCommand) : CCommand).Login, resolve, reject);
            } catch (error) {
              reject(_crd && PARSER_URL_FAIL === void 0 ? (_reportPossibleCrUseOfPARSER_URL_FAIL({
                error: Error()
              }), PARSER_URL_FAIL) : PARSER_URL_FAIL);
            }
          });
        }
        /**
         * 請求webConfigUrl
         * @returns 
         */


        async AskWebConfig(configType) {
          try {
            const askUrl = this._playerInfo.webConfigUrl;
            const connectSetting = await this.Get(`${askUrl}?platform=${this._playerInfo.platform}&gamecode=${this._playerInfo.game_code}&rangetag=${configType}`);

            if (connectSetting == null) {
              throw Error(`Get webConfigUrl ${this._playerInfo.webConfigUrl} Fail`);
            }

            if (!this.parserWebConfig(connectSetting)) {
              throw Error(`parser webConfigUrl ${connectSetting} Fail`);
            }
          } catch (error) {
            console.error("AskWebConfig Fail", error);
            throw error;
          }
        }
        /**
         * Parser WebConfig data
         * @param connectSetting 
         * @returns 
         */


        parserWebConfig(connectSetting) {
          const response = JSON.parse(connectSetting);

          if (!response || !(response.Result == 0)) {
            return false;
          }

          response.CommonSetting = JSON.parse(atob(response.CommonSetting));
          response.GameSetting = JSON.parse(atob(response.GameSetting));
          response.PlatformSetting = JSON.parse(atob(response.PlatformSetting));
          this._playerInfo.webConfig = response;
          return true;
        }
        /**
         * 請求玩家的歷程資料
         * @returns 
         */


        async askPlayerHistory(historyHeight = 0) {
          const urlList = this._playerInfo.webConfig.CommonSetting.ESAPIHistory_UrlList;

          if (!urlList || urlList.length === 0) {
            console.error("askPlayerHistory Fail, ESAPIHistoryURL is null");
            return;
          }

          if (historyHeight === 0) {
            //歷程高度為0，則不需要請求歷程
            return;
          } // 只取 HistoryHeightMax 筆資料


          const askBody = Array.from({
            length: Math.min(historyHeight, _crd && HistoryHeightMax === void 0 ? (_reportPossibleCrUseOfHistoryHeightMax({
              error: Error()
            }), HistoryHeightMax) : HistoryHeightMax)
          }, (_, idx) => {
            const i = historyHeight - idx;
            return (_crd && AskHistoryBodyFormat === void 0 ? (_reportPossibleCrUseOfAskHistoryBodyFormat({
              error: Error()
            }), AskHistoryBodyFormat) : AskHistoryBodyFormat).replace("{平台}", this.PlayerInfo.platform).replace("{暱稱}", this.PlayerInfo.name).replace("{GameCode}", this._playerInfo.game_code).replace("{歷程高度}", `${i}`);
          });
          const body = askBody.join('\r\n');
          return this.tryAskHistory(0, body);
        }
        /**
         * 嘗試請求歷程資料
         * @param retryCount retry 次數
         * @param body 
         */


        async tryAskHistory(retryCount, body) {
          const urlList = this._playerInfo.webConfig.CommonSetting.ESAPIHistory_UrlList;
          const currentIndex = retryCount % urlList.length;

          try {
            const result = await this.Post(urlList[currentIndex], body);

            if (!result || result === "") {
              throw _crd && AskHistoryFail === void 0 ? (_reportPossibleCrUseOfAskHistoryFail({
                error: Error()
              }), AskHistoryFail) : AskHistoryFail;
            }

            if ((_crd && HistoryErrorCode === void 0 ? (_reportPossibleCrUseOfHistoryErrorCode({
              error: Error()
            }), HistoryErrorCode) : HistoryErrorCode)[result]) {
              throw (_crd && HistoryErrorCode === void 0 ? (_reportPossibleCrUseOfHistoryErrorCode({
                error: Error()
              }), HistoryErrorCode) : HistoryErrorCode)[result];
            } // 檢查回傳格式是否正確


            const parsed = JSON.parse(result);

            if (!Array.isArray(parsed)) {
              throw new Error(`Invalid history format result ${result}`);
            }

            this.parserHistoryHeight(parsed);
          } catch (error) {
            if (retryCount < (_crd && AskHistoryRetryCount === void 0 ? (_reportPossibleCrUseOfAskHistoryRetryCount({
              error: Error()
            }), AskHistoryRetryCount) : AskHistoryRetryCount) * urlList.length) {
              await this.tryAskHistory(retryCount + 1, body);
            } else {
              console.error(`AskHistory Fail, retry ${retryCount} times`, error); // 超過重試次數，記錄錯誤並斷線

              this._cConnectManager.Disconnect(`${error}`);
            }
          }
        }
        /**
         * Parser 歷程高度資料
         * @param historyHeight 
         */


        parserHistoryHeight(historyHeight) {
          if (!historyHeight || historyHeight.length === 0) {
            throw new Error("parserHistoryHeight Fail, historyHeight is null");
          }

          this._history = this.parserHistory(historyHeight.map(value => value.st)).sort((a, b) => b.Time - a.Time);
        }
        /**
         * 請求 Spin
         * @param bet 押注
         * @returns @SpinAck
         */


        async Spin(bet, additionalPurchaseType = (_crd && AdditionalPurchaseType === void 0 ? (_reportPossibleCrUseOfAdditionalPurchaseType({
          error: Error()
        }), AdditionalPurchaseType) : AdditionalPurchaseType).None) {
          return new Promise((resolve, reject) => {
            if (this._cConnectManager == null) {
              console.error("Spin Fail _cConnectManager is null");
              resolve(new (_crd && SpinAck === void 0 ? (_reportPossibleCrUseOfSpinAck({
                error: Error()
              }), SpinAck) : SpinAck)(null));
              return;
            }

            const bt = new (_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
              error: Error()
            }), ByteWriterHelper) : ByteWriterHelper)();
            bt.WriteByte((_crd && CCommand === void 0 ? (_reportPossibleCrUseOfCCommand({
              error: Error()
            }), CCommand) : CCommand).Spin);
            bt.WriteByte(additionalPurchaseType);
            bt.WriteBytes((_crd && ByteWriterHelper === void 0 ? (_reportPossibleCrUseOfByteWriterHelper({
              error: Error()
            }), ByteWriterHelper) : ByteWriterHelper).ConvertToDoubleByte(bet));

            this._cConnectManager.MainSend(bt.Buffer);

            this.askCommand((_crd && CCommand === void 0 ? (_reportPossibleCrUseOfCCommand({
              error: Error()
            }), CCommand) : CCommand).Spin, resolve, reject);
          });
        }
        /**
         * 購買特色
         * @param bet  
         * @param additionalPurchaseType 
         * @returns 
         */


        BuyFeature(bet, additionalPurchaseType) {
          return this.Spin(bet, additionalPurchaseType);
        } //請求指令


        askCommand(command, resolve, reject) {
          const timeoutProcess = () => {
            clearTimeout(timeoutId);

            const commandProcessIndex = this._processCommandArray.findIndex(item => item.command === command);

            const commandProcess = this._processCommandArray[commandProcessIndex];

            if (commandProcess && this._cConnectManager.IsWaitReconnect()) {
              // If the connection manager is reconnecting, reset the timeout
              commandProcess.timeoutId = setTimeout(timeoutProcess, _crd && REQUEST_TIMEOUT === void 0 ? (_reportPossibleCrUseOfREQUEST_TIMEOUT({
                error: Error()
              }), REQUEST_TIMEOUT) : REQUEST_TIMEOUT);
              return;
            }

            if (commandProcess && this._cConnectManager.IsDisconnect()) {
              // If the connection manager is disconnected, remove the command and reject
              this._processCommandArray.splice(commandProcessIndex, 1);

              reject(command === (_crd && CCommand === void 0 ? (_reportPossibleCrUseOfCCommand({
                error: Error()
              }), CCommand) : CCommand).Login ? _crd && LoginReDispatcherConnectFail === void 0 ? (_reportPossibleCrUseOfLoginReDispatcherConnectFail({
                error: Error()
              }), LoginReDispatcherConnectFail) : LoginReDispatcherConnectFail : _crd && SpinReDispatcherConnectFail === void 0 ? (_reportPossibleCrUseOfSpinReDispatcherConnectFail({
                error: Error()
              }), SpinReDispatcherConnectFail) : SpinReDispatcherConnectFail);
              return;
            }

            reject(_crd && REQUEST_TIMEOUT_ERROR_CODE === void 0 ? (_reportPossibleCrUseOfREQUEST_TIMEOUT_ERROR_CODE({
              error: Error()
            }), REQUEST_TIMEOUT_ERROR_CODE) : REQUEST_TIMEOUT_ERROR_CODE);
          };

          const timeoutId = setTimeout(timeoutProcess, _crd && REQUEST_TIMEOUT === void 0 ? (_reportPossibleCrUseOfREQUEST_TIMEOUT({
            error: Error()
          }), REQUEST_TIMEOUT) : REQUEST_TIMEOUT);

          this._processCommandArray.push({
            command,
            process: resolve,
            timeoutId
          });
        }

        Get(url, timeout = _crd && REQUEST_TIMEOUT === void 0 ? (_reportPossibleCrUseOfREQUEST_TIMEOUT({
          error: Error()
        }), REQUEST_TIMEOUT) : REQUEST_TIMEOUT) {
          return this.promiseTimeout(new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("get", url);
            xhr.timeout = timeout;

            xhr.onload = function () {
              if (this.status === 200) {
                resolve(xhr.response);
              } else {
                reject(xhr.response);
              }
            };

            xhr.ontimeout = () => {
              reject(_crd && REQUEST_TIMEOUT_ERROR_CODE === void 0 ? (_reportPossibleCrUseOfREQUEST_TIMEOUT_ERROR_CODE({
                error: Error()
              }), REQUEST_TIMEOUT_ERROR_CODE) : REQUEST_TIMEOUT_ERROR_CODE);
            };

            xhr.send();
          }), _crd && REQUEST_TIMEOUT === void 0 ? (_reportPossibleCrUseOfREQUEST_TIMEOUT({
            error: Error()
          }), REQUEST_TIMEOUT) : REQUEST_TIMEOUT);
        }

        Post(url, data, timeout = _crd && REQUEST_TIMEOUT === void 0 ? (_reportPossibleCrUseOfREQUEST_TIMEOUT({
          error: Error()
        }), REQUEST_TIMEOUT) : REQUEST_TIMEOUT) {
          return this.promiseTimeout(new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("post", url);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.timeout = timeout;

            xhr.onload = function () {
              if (this.status === 200) {
                resolve(xhr.response);
              } else {
                reject(xhr.response);
              }
            };

            xhr.ontimeout = () => {
              reject(_crd && REQUEST_TIMEOUT_ERROR_CODE === void 0 ? (_reportPossibleCrUseOfREQUEST_TIMEOUT_ERROR_CODE({
                error: Error()
              }), REQUEST_TIMEOUT_ERROR_CODE) : REQUEST_TIMEOUT_ERROR_CODE);
            };

            xhr.send(data);
          }), timeout);
        } //timeout promise


        promiseTimeout(promise, timeout) {
          return Promise.race([promise, new Promise((_, reject) => {
            const id = setTimeout(() => {
              clearTimeout(id);
              reject(_crd && REQUEST_TIMEOUT_ERROR_CODE === void 0 ? (_reportPossibleCrUseOfREQUEST_TIMEOUT_ERROR_CODE({
                error: Error()
              }), REQUEST_TIMEOUT_ERROR_CODE) : REQUEST_TIMEOUT_ERROR_CODE);
            }, timeout);
          })]);
        } //斷線處理


        Disconnect(msg) {
          if (this._cConnectManager == null) {
            //如果連線元件為空，則直接通知斷線
            this._observer.Notify((_crd && NetEvent === void 0 ? (_reportPossibleCrUseOfNetEvent({
              error: Error()
            }), NetEvent) : NetEvent).Disconnected, msg);

            return;
          }

          this._cConnectManager.Disconnect(msg);
        } //取得網址參數


        GetURLParameter(Url, searchElement) {
          let firstParameters = Url.split("?");
          let parameters = firstParameters.pop().split("&");

          for (let index = 0; index < parameters.length; index++) {
            const pair = parameters[index].split("=");

            if (pair.shift() === searchElement) {
              return pair.shift();
            }
          }

          throw Error(`GetURLParameter ${Url} not ${searchElement}`);
        }

        RegisterObserver(listener) {
          this._observer.Register(listener);
        }

        RemoveObserver(name) {
          this._observer.Remove(name);
        } //註冊自訂義接收指令


        RegisterCustomCommand(handleCustomCommand) {
          this.handleCustomCommand = handleCustomCommand;
        } //發送自訂義指令


        SendCustomCommand(data) {
          this._cConnectManager.MainSend(data);
        } //取得所有的歷程資料


        get CurrentHistoryData() {
          return this._history;
        } // Parser歷程資料


        parserHistory(history) {
          return history.map(item => {
            const value = typeof item === "string" ? JSON.parse(item) : item;
            let timeStr = value["T"];

            if (!this.isISO8601TimeFormat(timeStr)) {
              timeStr = this.transformISO8601TimeFormat(timeStr);
            }

            const timestamp = new Date(timeStr).getTime();
            return {
              Bet: Number(value["Bet"]),
              Win: Number(value["Win"]),
              Time: timestamp,
              異動前: Number(value["異動前"]),
              異動後: Number(value["異動後"]),
              盤面演繹: value["盤面演繹"],
              遊戲館: value["遊戲館"],
              編號: value["編號"],
              暱稱: value["暱稱"],
              加購: Number(value["加購"]),
              扣幣倍: Number(value["扣幣倍"])
            };
          });
        } //寫入歷程資料


        insertHistory(spinAck) {
          if (spinAck.Result != (_crd && CCommandStatus === void 0 ? (_reportPossibleCrUseOfCCommandStatus({
            error: Error()
          }), CCommandStatus) : CCommandStatus).Success) {
            return;
          }

          const history = this.TransformHistoryData(spinAck);

          this._history.unshift(history); // 保持歷程最大數量，移除最舊的一筆


          if (this._history.length > (_crd && HistoryHeightMax === void 0 ? (_reportPossibleCrUseOfHistoryHeightMax({
            error: Error()
          }), HistoryHeightMax) : HistoryHeightMax)) {
            this._history.length = _crd && HistoryHeightMax === void 0 ? (_reportPossibleCrUseOfHistoryHeightMax({
              error: Error()
            }), HistoryHeightMax) : HistoryHeightMax;
          }
        } //轉換 historyData


        TransformHistoryData(spinAck) {
          const date = new Date(spinAck.Time);
          const timestamp = Math.floor(date.getTime());
          const history = {
            Bet: spinAck.AdditionalPurchase > spinAck.BaseBet ? spinAck.AdditionalPurchase : spinAck.BaseBet,
            Win: spinAck.Win,
            Time: Number(timestamp),
            異動前: spinAck.Balance - spinAck.Win + spinAck.AdditionalPurchase,
            異動後: spinAck.Balance,
            盤面演繹: spinAck.Plant,
            遊戲館: this._playerInfo.game_code,
            編號: spinAck.SerialId.toString(),
            暱稱: this._playerInfo.name,
            加購: spinAck.AdditionalPurchase,
            扣幣倍: parseFloat((spinAck.AdditionalPurchase / spinAck.BaseBet).toFixed(2))
          };
          return history;
        } //檢查是否為標準的 ISO8601 時間格式


        isISO8601TimeFormat(timeString) {
          const iso8601Regex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{1,7})([+-]\d{2}:\d{2})$/;
          return iso8601Regex.test(timeString);
        } //轉換時間的格式為標準的 ISO8601 時間格式


        transformISO8601TimeFormat(timeString) {
          const date = new Date(timeString); // 取得年、月、日、時、分、秒、毫秒

          const year = date.getFullYear();
          const month = this.padStartAlternative(String(date.getMonth() + 1), 2, '0');
          const day = this.padStartAlternative(String(date.getDate()), 2, '0');
          const hours = this.padStartAlternative(String(date.getHours()), 2, '0');
          const minutes = this.padStartAlternative(String(date.getMinutes()), 2, '0');
          const seconds = this.padStartAlternative(String(date.getSeconds()), 2, '0');
          const milliseconds = this.padStartAlternative(String(date.getMilliseconds()), 3, '0'); // 取得時區偏移（以分鐘為單位），並格式化為 +08:00 形式

          const timezoneOffset = -date.getTimezoneOffset();
          const timezoneHours = this.padStartAlternative(String(Math.floor(timezoneOffset / 60)), 2, '0');
          const timezoneMinutes = this.padStartAlternative(String(Math.abs(timezoneOffset % 60)), 2, '0');
          const timezoneSign = timezoneOffset >= 0 ? '+' : '-';
          return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${timezoneSign}${timezoneHours}:${timezoneMinutes}`;
        }

        GetConnectManagerState() {
          var _this$_cConnectManage3;

          return ((_this$_cConnectManage3 = this._cConnectManager) == null ? void 0 : _this$_cConnectManage3.getState()) || -1;
        }

      });

      NetAgent._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=628748e100e73f8d2d74158eeaa243f29f4380c8.js.map