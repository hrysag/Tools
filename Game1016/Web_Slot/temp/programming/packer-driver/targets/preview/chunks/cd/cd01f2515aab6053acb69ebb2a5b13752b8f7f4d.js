System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, AudioClip, Button, CCBoolean, Component, director, find, instantiate, JsonAsset, Node, Prefab, ProgressBar, sp, Sprite, SpriteFrame, tween, UIOpacity, UITransform, GameInfoUI, GameInfoData, KeySpriteFramePair, Utility, NetAgent, ConfigType, SwitchType, ThousandPlaceType, GameSetting, GameStatus, SlotRelayLang, GameRoot, Localization, AudioManager, MessageBox, NetworkEvent, NetworkHandler, PlayerInfo, ErrorCode, ErrorHandler, ScreenAdapter, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, loadingBarBGContentSize, loadingBarContentSize, LOGO_Y_POS, loadingBarPosition, GameStart;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfoUI(extras) {
    _reporterNs.report("GameInfoUI", "./GameInfoUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInfoData(extras) {
    _reporterNs.report("GameInfoData", "./GameInfoData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeySpriteFramePair(extras) {
    _reporterNs.report("KeySpriteFramePair", "../../Utils/Core", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../../Utils/Core", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetAgent(extras) {
    _reporterNs.report("NetAgent", "../../NetAgent/NetAgent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConfigType(extras) {
    _reporterNs.report("ConfigType", "../../NetAgent/AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSwitchType(extras) {
    _reporterNs.report("SwitchType", "../../NetAgent/AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThousandPlaceType(extras) {
    _reporterNs.report("ThousandPlaceType", "../../NetAgent/AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSetting(extras) {
    _reporterNs.report("GameSetting", "../Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotRelayLang(extras) {
    _reporterNs.report("SlotRelayLang", "../Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRoot(extras) {
    _reporterNs.report("GameRoot", "../Controller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalization(extras) {
    _reporterNs.report("Localization", "../Localization", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../Utils/Audio", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageBox(extras) {
    _reporterNs.report("MessageBox", "../GenericUI/Scripts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkEvent(extras) {
    _reporterNs.report("NetworkEvent", "../Networks", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkHandler(extras) {
    _reporterNs.report("NetworkHandler", "../Networks", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerInfo(extras) {
    _reporterNs.report("PlayerInfo", "../Networks", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMachineInfo(extras) {
    _reporterNs.report("GameMachineInfo", "../../NetAgent/GameMachineInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCode(extras) {
    _reporterNs.report("ErrorCode", "../../ErrorHandler/ErrorHandleDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorHandler(extras) {
    _reporterNs.report("ErrorHandler", "../../ErrorHandler/ErrorHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScreenAdapter(extras) {
    _reporterNs.report("ScreenAdapter", "../../Utils/Orientation", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      AudioClip = _cc.AudioClip;
      Button = _cc.Button;
      CCBoolean = _cc.CCBoolean;
      Component = _cc.Component;
      director = _cc.director;
      find = _cc.find;
      instantiate = _cc.instantiate;
      JsonAsset = _cc.JsonAsset;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ProgressBar = _cc.ProgressBar;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {}, function (_unresolved_3) {
      GameInfoUI = _unresolved_3.GameInfoUI;
    }, function (_unresolved_4) {
      GameInfoData = _unresolved_4.GameInfoData;
    }, function (_unresolved_5) {
      KeySpriteFramePair = _unresolved_5.KeySpriteFramePair;
      Utility = _unresolved_5.Utility;
    }, function (_unresolved_6) {
      NetAgent = _unresolved_6.NetAgent;
    }, function (_unresolved_7) {
      ConfigType = _unresolved_7.ConfigType;
      SwitchType = _unresolved_7.SwitchType;
      ThousandPlaceType = _unresolved_7.ThousandPlaceType;
    }, function (_unresolved_8) {
      GameSetting = _unresolved_8.GameSetting;
      GameStatus = _unresolved_8.GameStatus;
      SlotRelayLang = _unresolved_8.SlotRelayLang;
    }, function (_unresolved_9) {
      GameRoot = _unresolved_9.GameRoot;
    }, function (_unresolved_10) {
      Localization = _unresolved_10.Localization;
    }, function (_unresolved_11) {
      AudioManager = _unresolved_11.AudioManager;
    }, function (_unresolved_12) {
      MessageBox = _unresolved_12.MessageBox;
    }, function (_unresolved_13) {
      NetworkEvent = _unresolved_13.NetworkEvent;
      NetworkHandler = _unresolved_13.NetworkHandler;
      PlayerInfo = _unresolved_13.PlayerInfo;
    }, function (_unresolved_14) {
      ErrorCode = _unresolved_14.ErrorCode;
    }, function (_unresolved_15) {
      ErrorHandler = _unresolved_15.ErrorHandler;
    }, function (_unresolved_16) {
      ScreenAdapter = _unresolved_16.ScreenAdapter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c7de4G4KhNHVbCXKfdnOzzy", "GameStart", undefined); // 將自行定義的函式加入到全域範圍


      __checkObsolete__(['_decorator', 'Animation', 'AudioClip', 'Button', 'CCBoolean', 'Component', 'director', 'find', 'instantiate', 'JsonAsset', 'Node', 'Prefab', 'ProgressBar', 'SceneAsset', 'sp', 'Sprite', 'SpriteFrame', 'tween', 'UIOpacity', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);
      loadingBarBGContentSize = {
        width: 290,
        height: 15
      };
      loadingBarContentSize = {
        width: 282,
        height: 8
      };
      LOGO_Y_POS = 80;
      loadingBarPosition = {
        x: 0,
        y: -102
      };

      _export("GameStart", GameStart = (_dec = ccclass('GameStart'), _dec2 = property(CCBoolean), _dec3 = property(JsonAsset), _dec4 = property(Prefab), _dec5 = property(Node), _dec6 = property(ProgressBar), _dec7 = property(Node), _dec8 = property(_crd && GameInfoUI === void 0 ? (_reportPossibleCrUseOfGameInfoUI({
        error: Error()
      }), GameInfoUI) : GameInfoUI), _dec9 = property(SpriteFrame), _dec10 = property({
        type: _crd && GameInfoData === void 0 ? (_reportPossibleCrUseOfGameInfoData({
          error: Error()
        }), GameInfoData) : GameInfoData,

        visible() {
          return !this.isNewLoading;
        }

      }), _dec11 = property({
        type: [_crd && KeySpriteFramePair === void 0 ? (_reportPossibleCrUseOfKeySpriteFramePair({
          error: Error()
        }), KeySpriteFramePair) : KeySpriteFramePair],

        visible() {
          return !this.isNewLoading;
        }

      }), _dec12 = property(Node), _dec13 = property(AudioClip), _dec14 = property(AudioClip), _dec(_class = (_class2 = class GameStart extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "isNewLoading", _descriptor, this);

          _initializerDefineProperty(this, "gameConfig", _descriptor2, this);

          //#region Config
          // 是否為展示模式，會吃上面gameConfig的isExhibition
          // 要出Demo版本時，請設為true，正式版請設為false
          // 為true時，會直接進入遊戲場景，不會連線webserver伺服器
          this.isExhibition = false;
          this.debugLocalization = false;
          this.debugLanguageKey = '';
          this.gameID = "";
          // 遊戲編號 Game1001, Game002 等
          // protected gameCode: string = ''; //北分連線編號 W002 , W001 等
          this.idleTimeoutLimit = 600;
          // 閒置 timeout 時間，單位秒
          this.isShowProgressBar = true;

          //#endregion
          _initializerDefineProperty(this, "messageBoxPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "messageBoxRootNode", _descriptor4, this);

          _initializerDefineProperty(this, "progressBar", _descriptor5, this);

          _initializerDefineProperty(this, "continueBtn", _descriptor6, this);

          _initializerDefineProperty(this, "gameInfoUI", _descriptor7, this);

          // 靜態ApexWin的Sprite
          this.apexWinSprite = void 0;

          // 關閉 ApexWin 後，自定義的 Logo
          _initializerDefineProperty(this, "gameSplashLogo", _descriptor8, this);

          // old loading
          _initializerDefineProperty(this, "gameInfoDataList", _descriptor9, this);

          // old loading
          _initializerDefineProperty(this, "gameInfoSpriteFrameMaps", _descriptor10, this);

          _initializerDefineProperty(this, "apexWin", _descriptor11, this);

          _initializerDefineProperty(this, "bgm", _descriptor12, this);

          _initializerDefineProperty(this, "publicOn", _descriptor13, this);

          this.progress = 0;
          this.gameScene = null;
          this.LOGO_SPINE_ANIMATION_IN = 'in';
          this.LOGO_SPINE_ANIMATION_OUT = 'out';
          this.LOGO_ANIMATION_IN = 'ApexLogoShow';
          this.LOGO_ANIMATION_OUT = 'ApexLogoFadeout';
          this.loginResolve = null;
          this.apexWinLogoNode = null;
        }

        onLoad() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this.gameConfig) {
              _this.gameID = _this.gameConfig.json.gameID; // this.gameCode = this.gameConfig.json.gameCode;

              _this.idleTimeoutLimit = _this.gameConfig.json.idleTimeoutLimit;
              _this.isExhibition = _this.gameConfig.json.isExhibition;
              _this.debugLocalization = _this.gameConfig.json.debugLocalization;
              _this.debugLanguageKey = _this.gameConfig.json.debugLanguageKey;
            }

            if (_this.isNewLoading) {
              _this.apexWinLogoNode = find("Apex_Logo", _this.apexWin);
            } else {
              _this.apexWinLogoNode = find("Logo", _this.apexWin);
            }

            _this.apexWinLogoNode.active = false;
            _this.apexWin.active = true;
            _this.progressBar.node.active = false;
            _this.progressBar.progress = 0;

            if ((_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).isDev() || _this.isExhibition) {
              // 展示或是開發模式
              _this.startGame();
            } else {
              // 上站環境連線北分
              var gameUrl = window.location.href;

              try {
                var _GetInstance$PlayerIn, _GetInstance$PlayerIn2, _GetInstance$PlayerIn3, _GetInstance$PlayerIn4, _GetInstance$PlayerIn5, _GetInstance$PlayerIn6, _GetInstance$PlayerIn7, _GetInstance$PlayerIn8, _GetInstance$PlayerIn9;

                (_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
                  error: Error()
                }), NetAgent) : NetAgent).GetInstance().ParserBaseConfig(gameUrl);
                yield (_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
                  error: Error()
                }), NetAgent) : NetAgent).GetInstance().AskWebConfig((_crd && ConfigType === void 0 ? (_reportPossibleCrUseOfConfigType({
                  error: Error()
                }), ConfigType) : ConfigType).SLOT); // 是否要show主頁AWLogo

                (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
                  error: Error()
                }), GameSetting) : GameSetting).isShowAWLogo = ((_GetInstance$PlayerIn = (_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
                  error: Error()
                }), NetAgent) : NetAgent).GetInstance().PlayerInfo.webConfig) == null || (_GetInstance$PlayerIn = _GetInstance$PlayerIn.PlatformSetting) == null ? void 0 : _GetInstance$PlayerIn.LoadingLogoType) === (_crd && SwitchType === void 0 ? (_reportPossibleCrUseOfSwitchType({
                  error: Error()
                }), SwitchType) : SwitchType).Normal; // 是否要底部Bar的ApexWin

                (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
                  error: Error()
                }), GameSetting) : GameSetting).isShowBottomAWLogo = ((_GetInstance$PlayerIn2 = (_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
                  error: Error()
                }), NetAgent) : NetAgent).GetInstance().PlayerInfo.webConfig) == null || (_GetInstance$PlayerIn2 = _GetInstance$PlayerIn2.PlatformSetting) == null ? void 0 : _GetInstance$PlayerIn2.GameBottomLogoType) === (_crd && SwitchType === void 0 ? (_reportPossibleCrUseOfSwitchType({
                  error: Error()
                }), SwitchType) : SwitchType).Normal; // 是否要購買功能金幣的AW Logo

                (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
                  error: Error()
                }), GameSetting) : GameSetting).isShowCoinAWLogo = ((_GetInstance$PlayerIn3 = (_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
                  error: Error()
                }), NetAgent) : NetAgent).GetInstance().PlayerInfo.webConfig) == null || (_GetInstance$PlayerIn3 = _GetInstance$PlayerIn3.PlatformSetting) == null ? void 0 : _GetInstance$PlayerIn3.BuyFeatureLogoType) === (_crd && SwitchType === void 0 ? (_reportPossibleCrUseOfSwitchType({
                  error: Error()
                }), SwitchType) : SwitchType).Normal; // 平台下注金額列表

                (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
                  error: Error()
                }), GameSetting) : GameSetting).platformBetValueList = (_GetInstance$PlayerIn4 = (_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
                  error: Error()
                }), NetAgent) : NetAgent).GetInstance().PlayerInfo.webConfig) == null || (_GetInstance$PlayerIn4 = _GetInstance$PlayerIn4.PlatformSetting) == null ? void 0 : _GetInstance$PlayerIn4.Range; // 是否需要交換千分位和小數點符號

                (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
                  error: Error()
                }), GameSetting) : GameSetting).shouldSwapThousandAndDecimalSeparators = ((_GetInstance$PlayerIn5 = (_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
                  error: Error()
                }), NetAgent) : NetAgent).GetInstance().PlayerInfo.webConfig) == null || (_GetInstance$PlayerIn5 = _GetInstance$PlayerIn5.PlatformSetting) == null ? void 0 : _GetInstance$PlayerIn5.ThousandPlace) === (_crd && ThousandPlaceType === void 0 ? (_reportPossibleCrUseOfThousandPlaceType({
                  error: Error()
                }), ThousandPlaceType) : ThousandPlaceType).EUR;
                (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
                  error: Error()
                }), GameSetting) : GameSetting).payTableURL = (_GetInstance$PlayerIn6 = (_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
                  error: Error()
                }), NetAgent) : NetAgent).GetInstance().PlayerInfo.webConfig) == null || (_GetInstance$PlayerIn6 = _GetInstance$PlayerIn6.GameSetting) == null ? void 0 : _GetInstance$PlayerIn6.PayTable_Url;
                (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
                  error: Error()
                }), GameSetting) : GameSetting).ruleURL = (_GetInstance$PlayerIn7 = (_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
                  error: Error()
                }), NetAgent) : NetAgent).GetInstance().PlayerInfo.webConfig) == null || (_GetInstance$PlayerIn7 = _GetInstance$PlayerIn7.GameSetting) == null ? void 0 : _GetInstance$PlayerIn7.GameRule_Url;
                (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
                  error: Error()
                }), GameSetting) : GameSetting).historyURL = (_GetInstance$PlayerIn8 = (_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
                  error: Error()
                }), NetAgent) : NetAgent).GetInstance().PlayerInfo.webConfig) == null || (_GetInstance$PlayerIn8 = _GetInstance$PlayerIn8.GameSetting) == null ? void 0 : _GetInstance$PlayerIn8.PlayerHistory_Url;
                (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
                  error: Error()
                }), GameSetting) : GameSetting).customData = (_GetInstance$PlayerIn9 = (_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
                  error: Error()
                }), NetAgent) : NetAgent).GetInstance().PlayerInfo.webConfig) == null || (_GetInstance$PlayerIn9 = _GetInstance$PlayerIn9.GameSetting) == null ? void 0 : _GetInstance$PlayerIn9.CustomData; // 如果設定網頁沒填，會是 undefined

                if ((_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
                  error: Error()
                }), GameSetting) : GameSetting).customData) {
                  try {
                    (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
                      error: Error()
                    }), GameSetting) : GameSetting).customDataJson = JSON.parse((_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
                      error: Error()
                    }), GameSetting) : GameSetting).customData);
                  } catch (error) {
                    console.error('customData 轉 Json 失敗');
                    console.error("customData \u5167\u5BB9 : " + (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
                      error: Error()
                    }), GameSetting) : GameSetting).customData);
                  }
                }

                _this.startGame();
              } catch (error) {
                //表示參數 Parser 失敗
                //ErrorHandler.Instance.TriggerError(PARSER_URL_FAIL);
                console.error(error);
                console.error("參數 Parser 失敗");
              }
            }
          })();
        }

        start() {}

        startGame() {
          this.setProgressInfo();
          director.addPersistRootNode(this.node);
          (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).isEnterFromGameStart = true;

          if (!(_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
            error: Error()
          }), GameSetting) : GameSetting).isShowAWLogo) {
            if (this.isNewLoading) {
              var newSpriteNode = new Node("Logo");
              newSpriteNode.setParent(this.apexWin);
              newSpriteNode.setPosition(0, LOGO_Y_POS, 0);
              newSpriteNode.layer = this.apexWin.layer;
              this.apexWinSprite = newSpriteNode.addComponent(Sprite);
            } else {
              this.apexWinSprite = find("Logo", this.apexWin).getComponent(Sprite);
              this.apexWinSprite.spriteFrame = this.gameSplashLogo;
              this.apexWinSprite.node.setScale(1, 1);
            }

            this.apexWinSprite.spriteFrame = this.gameSplashLogo;

            if (this.gameSplashLogo) {
              this.apexWinSprite.getComponent(UITransform).setContentSize(this.gameSplashLogo.rect);
            } else {
              console.error('關閉 ApexWin Logo後, 沒有設置獨立的遊戲Logo (gameSplashLogo)');
            }
          }

          this.apexWin.active = true;
          this.apexWinLogoNode.active = true;
          this.startLoad();
        }

        startLoad() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            try {
              var lang = _this2.getLanguage();

              (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
                error: Error()
              }), GameSetting) : GameSetting).gameLang = (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
                error: Error()
              }), SlotRelayLang) : SlotRelayLang)[lang];

              _this2.gameInfoUI.init(_this2.gameInfoSpriteFrameMaps);

              if (_this2.isNewLoading) {
                var spine = _this2.apexWin.getComponentInChildren(sp.Skeleton);

                if (spine) {
                  if ((_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
                    error: Error()
                  }), GameSetting) : GameSetting).isShowAWLogo) {
                    yield spine.playPromise(_this2.LOGO_SPINE_ANIMATION_IN);
                  }
                } else {
                  console.error('ApexWin spine not found');
                }
              } else {
                yield _this2.apexWin.getComponent(Animation).playPromise(_this2.LOGO_ANIMATION_IN);
              }

              if (_this2.isShowProgressBar) {
                _this2.progressBar.node.active = true;
              }

              yield (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
                error: Error()
              }), Localization) : Localization).instance.init(_this2.gameID, lang);
              yield (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
                error: Error()
              }), Localization) : Localization).instance.updateAllSpriteAndLabel((_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
                error: Error()
              }), SlotRelayLang) : SlotRelayLang)[_this2.getLanguage()]);

              if (!_this2.isNewLoading) {
                var gameInfoPromiseList = [];

                for (var item of _this2.gameInfoDataList) {
                  gameInfoPromiseList.push(item.loadLocalizationKey((_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
                    error: Error()
                  }), SlotRelayLang) : SlotRelayLang)[_this2.getLanguage()]));
                }

                yield Promise.all(gameInfoPromiseList);

                _this2.gameInfoUI.setInfo(_this2.gameInfoDataList);
              }

              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.playMusicClip(_this2.bgm);

              _this2.continueBtn.setActive(false);

              (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
                error: Error()
              }), Utility) : Utility).addEventHandlerToButton(_this2.continueBtn, _this2, 'onContinueBtnClick');
              _this2.continueBtn.getComponent(Button).interactable = true;
              var messageBox = instantiate(_this2.messageBoxPrefab);

              if (_this2.messageBoxRootNode) {
                messageBox.setParent(_this2.messageBoxRootNode);
              }

              (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
                error: Error()
              }), MessageBox) : MessageBox).instance.init();
              (_crd && ErrorHandler === void 0 ? (_reportPossibleCrUseOfErrorHandler({
                error: Error()
              }), ErrorHandler) : ErrorHandler).Instance.setShowErrorMessageCallback((title, content, isShowConfirm, callback) => {
                (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
                  error: Error()
                }), MessageBox) : MessageBox).instance.showMsgBox(title, content, isShowConfirm, callback);
              });
              yield Promise.all([_this2.connectPromise(), _this2.loadScenePromise()]); // 等待連線和場景載入完成後，才會顯示繼續按鈕

              _this2.showContinueBtn(); // 淡出 ApexWin Logo


              if (_this2.isNewLoading) {
                _this2.fadeOutLogo(_this2.apexWin);

                _this2.gameInfoUI.startDetect();

                _this2.gameInfoUI.playTargetSpine(0);
              } else {
                _this2.apexWin.getComponent(Animation).playPromise(_this2.LOGO_ANIMATION_OUT).then(() => {
                  _this2.apexWin.active = false;

                  _this2.gameInfoUI.startAutoChangePage();
                });
              }
            } catch (error) {
              console.error(error);
            }
          })();
        }

        connectPromise() {
          return new Promise((resolve, reject) => {
            this.loginResolve = resolve;
            (_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
              error: Error()
            }), NetworkHandler) : NetworkHandler).instance.init(this.gameID, this.idleTimeoutLimit, this.isExhibition);

            if (!this.isExhibition && !(_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).isDev()) {
              (_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
                error: Error()
              }), NetworkHandler) : NetworkHandler).instance.addEventListener((_crd && NetworkEvent === void 0 ? (_reportPossibleCrUseOfNetworkEvent({
                error: Error()
              }), NetworkEvent) : NetworkEvent).Login, this.onLogin.bind(this)); // connectServer 後回傳

              (_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
                error: Error()
              }), NetworkHandler) : NetworkHandler).instance.connectServer();
            } else {
              this.loginResolve();
            }
          });
        }

        loadScenePromise() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            director.getScene().getComponentInChildren(_crd && ScreenAdapter === void 0 ? (_reportPossibleCrUseOfScreenAdapter({
              error: Error()
            }), ScreenAdapter) : ScreenAdapter).forceResize();
            yield _this3.loadScene();
            var gameRoot = director.getScene().getComponentInChildren(_crd && GameRoot === void 0 ? (_reportPossibleCrUseOfGameRoot({
              error: Error()
            }), GameRoot) : GameRoot);
            yield gameRoot.init();
          })();
        }
        /**
         * 更新
         * @param dt NetAgent 的 Update 參數，但實際傳入並未使用
         */


        update(dt) {
          (_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
            error: Error()
          }), NetworkHandler) : NetworkHandler).instance.update(dt);
        }
        /**
         * 登入
         * @param isLogin 使否已登入
         * @param gameMachineInfo 遊戲機台資訊
         */


        onLogin(isLogin, gameMachineInfo) {
          if (isLogin) {
            (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
              error: Error()
            }), PlayerInfo) : PlayerInfo).balance = gameMachineInfo.Balance;
            (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
              error: Error()
            }), PlayerInfo) : PlayerInfo).userName = gameMachineInfo.Nickname;
            (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
              error: Error()
            }), PlayerInfo) : PlayerInfo).betMax = gameMachineInfo.MaxBet;
            (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
              error: Error()
            }), PlayerInfo) : PlayerInfo).betMin = gameMachineInfo.MinBet;
            (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
              error: Error()
            }), PlayerInfo) : PlayerInfo).machineID = gameMachineInfo.Id;
            (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
              error: Error()
            }), PlayerInfo) : PlayerInfo).buyFG = gameMachineInfo.BuyFG;
            (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
              error: Error()
            }), PlayerInfo) : PlayerInfo).lastPlant = gameMachineInfo.LastPlant;
            (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
              error: Error()
            }), PlayerInfo) : PlayerInfo).record = gameMachineInfo.Record;
            (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
              error: Error()
            }), PlayerInfo) : PlayerInfo).JP = gameMachineInfo.JP;
            (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
              error: Error()
            }), PlayerInfo) : PlayerInfo).lastHistory = gameMachineInfo.LastHistory;
            (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
              error: Error()
            }), PlayerInfo) : PlayerInfo).result = gameMachineInfo.Result;
            this.loginResolve();
          } else {
            console.error('login fail');
            (_crd && ErrorHandler === void 0 ? (_reportPossibleCrUseOfErrorHandler({
              error: Error()
            }), ErrorHandler) : ErrorHandler).Instance.TriggerError((_crd && ErrorCode === void 0 ? (_reportPossibleCrUseOfErrorCode({
              error: Error()
            }), ErrorCode) : ErrorCode).Client_LoginFail);
          }
        }
        /**
         * 更新載入場景進度百分比
         * @param completedCount 已完成計數
         * @param totalCount 總計數
         * @param item ?未使用
         */


        onProgress(completedCount, totalCount, item) {
          var p = completedCount / totalCount; //console.log(`p  ${p}  this.progress  ${this.progress}   `);

          if (p > this.progress) {
            // console.log(`completedCount  ${completedCount}  totalCount  ${totalCount}   ${p.fixed()}`);
            this.progress = p;
            this.progressBar.progress = this.progress;
          }
        }
        /**
         * 繼續鍵被觸發
         */


        onContinueBtnClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSoundClip(this.publicOn);
          this.continueBtn.getComponent(Button).interactable = false;
          var gameRoot = director.getScene().getComponentInChildren(_crd && GameRoot === void 0 ? (_reportPossibleCrUseOfGameRoot({
            error: Error()
          }), GameRoot) : GameRoot);
          gameRoot.showCanvas();
          this.node.destroy();
        }
        /**
         * 顯示繼續鍵
         */


        showContinueBtn() {
          this.continueBtn.setActive(true);
          this.progressBar.node.setActive(false);
        }
        /**
         * 取得語系
         * @returns 語系字串
         */


        getLanguage() {
          var key = null;

          if (this.debugLocalization) {
            key = this.debugLanguageKey;
          } else {
            key = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).getURLLanguage();
          }

          return key;
        }

        fadeOutLogo(logo) {
          var opacity = logo.getComponent(UIOpacity);

          if ((_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
            error: Error()
          }), GameSetting) : GameSetting).isShowAWLogo) {
            this.apexWin.getComponentInChildren(sp.Skeleton).setAnimation(0, this.LOGO_SPINE_ANIMATION_OUT, false);
          }

          tween(opacity).to(0.2, {
            opacity: 0
          }).start();
        }

        loadScene() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var scene = yield (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).preloadScenePromise(_this4.gameID, _this4.onProgress.bind(_this4));

            if (_this4.node) {
              _this4.gameScene = scene;
              yield _this4.runScenePromise();
            }
          })();
        }

        runScenePromise() {
          return new Promise((resolve, reject) => {
            director.runScene(this.gameScene, null, () => {
              resolve();
            });
          });
        }

        setProgressInfo() {
          if (this.isShowProgressBar === false) {
            LOGO_Y_POS = 0;
          }

          this.progressBar.node.active = false;
          this.progressBar.node.setParent(this.apexWin);
          this.progressBar.getComponent(UITransform).setContentSize(loadingBarBGContentSize.width, loadingBarBGContentSize.height);
          this.progressBar.node.setPosition(loadingBarPosition.x, loadingBarPosition.y);
          this.progressBar.totalLength = loadingBarContentSize.width;
          this.progressBar.barSprite.node.getComponent(UITransform).setContentSize(this.progressBar.totalLength, loadingBarContentSize.height);
          this.progressBar.barSprite.node.setPosition(-141, this.progressBar.barSprite.node.position.y);
          this.progressBar.progress = 0;

          if (!this.isNewLoading) {
            var logo = find("Logo", this.apexWin);
            logo.setPosition(0, LOGO_Y_POS);
          } else {
            var _logo = find("Apex_Logo", this.apexWin);

            _logo.setPosition(0, LOGO_Y_POS);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isNewLoading", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameConfig", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "messageBoxPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "messageBoxRootNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "continueBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "gameInfoUI", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "gameSplashLogo", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "gameInfoDataList", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "gameInfoSpriteFrameMaps", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "apexWin", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "bgm", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "publicOn", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cd01f2515aab6053acb69ebb2a5b13752b8f7f4d.js.map