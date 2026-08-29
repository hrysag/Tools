System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, AudioClip, Button, CCBoolean, Component, director, find, instantiate, JsonAsset, Node, Prefab, ProgressBar, sp, Sprite, SpriteFrame, tween, UIOpacity, UITransform, Utility, GameInfoData, GameInfoUI, Localization, NetworkEvent, NetworkHandler, PlayerInfo, MessageBox, ScreenAdapter, AudioManager, KeySpriteFramePair, ErrorHandler, ErrorCode, SlotRelayLang, GameSetting, NetAgent, ConfigType, SwitchType, ThousandPlaceType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _class3, _crd, ccclass, property, GameStart;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../Utils/Utility", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInfoData(extras) {
    _reporterNs.report("GameInfoData", "../Utils/GameInfoData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInfoUI(extras) {
    _reporterNs.report("GameInfoUI", "./GameInfoUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalization(extras) {
    _reporterNs.report("Localization", "./Localization", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkEvent(extras) {
    _reporterNs.report("NetworkEvent", "../Networks/NetworkHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkHandler(extras) {
    _reporterNs.report("NetworkHandler", "../Networks/NetworkHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerInfo(extras) {
    _reporterNs.report("PlayerInfo", "../Player/PlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageBox(extras) {
    _reporterNs.report("MessageBox", "../../GenericUI/Scripts/MessageBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScreenAdapter(extras) {
    _reporterNs.report("ScreenAdapter", "../Utils/ScreenAdapter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeySpriteFramePair(extras) {
    _reporterNs.report("KeySpriteFramePair", "../Utils/KeySpriteFramePair", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMachineInfo(extras) {
    _reporterNs.report("GameMachineInfo", "../NetAgent/GameMachineInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorHandler(extras) {
    _reporterNs.report("ErrorHandler", "../ErrorHandler/ErrorHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCode(extras) {
    _reporterNs.report("ErrorCode", "../ErrorHandler/ErrorHandleDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotRelayLang(extras) {
    _reporterNs.report("SlotRelayLang", "../Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSetting(extras) {
    _reporterNs.report("GameSetting", "./GameSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetAgent(extras) {
    _reporterNs.report("NetAgent", "../NetAgent/NetAgent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConfigType(extras) {
    _reporterNs.report("ConfigType", "../NetAgent/AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSwitchType(extras) {
    _reporterNs.report("SwitchType", "../NetAgent/AgentDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThousandPlaceType(extras) {
    _reporterNs.report("ThousandPlaceType", "../NetAgent/AgentDefine", _context.meta, extras);
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
      Utility = _unresolved_3.Utility;
    }, function (_unresolved_4) {
      GameInfoData = _unresolved_4.GameInfoData;
    }, function (_unresolved_5) {
      GameInfoUI = _unresolved_5.GameInfoUI;
    }, function (_unresolved_6) {
      Localization = _unresolved_6.Localization;
    }, function (_unresolved_7) {
      NetworkEvent = _unresolved_7.NetworkEvent;
      NetworkHandler = _unresolved_7.NetworkHandler;
    }, function (_unresolved_8) {
      PlayerInfo = _unresolved_8.PlayerInfo;
    }, function (_unresolved_9) {
      MessageBox = _unresolved_9.MessageBox;
    }, function (_unresolved_10) {
      ScreenAdapter = _unresolved_10.ScreenAdapter;
    }, function (_unresolved_11) {
      AudioManager = _unresolved_11.AudioManager;
    }, function (_unresolved_12) {
      KeySpriteFramePair = _unresolved_12.KeySpriteFramePair;
    }, function (_unresolved_13) {
      ErrorHandler = _unresolved_13.ErrorHandler;
    }, function (_unresolved_14) {
      ErrorCode = _unresolved_14.ErrorCode;
    }, function (_unresolved_15) {
      SlotRelayLang = _unresolved_15.SlotRelayLang;
    }, function (_unresolved_16) {
      GameSetting = _unresolved_16.GameSetting;
    }, function (_unresolved_17) {
      NetAgent = _unresolved_17.NetAgent;
    }, function (_unresolved_18) {
      ConfigType = _unresolved_18.ConfigType;
      SwitchType = _unresolved_18.SwitchType;
      ThousandPlaceType = _unresolved_18.ThousandPlaceType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c7de4G4KhNHVbCXKfdnOzzy", "GameStart", undefined); // 將自行定義的函式加入到全域範圍


      __checkObsolete__(['_decorator', 'Animation', 'AudioClip', 'Button', 'CCBoolean', 'Component', 'director', 'find', 'instantiate', 'JsonAsset', 'Node', 'Prefab', 'ProgressBar', 'SceneAsset', 'sp', 'Sprite', 'SpriteFrame', 'tween', 'UIOpacity', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

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

      }), _dec12 = property(Node), _dec13 = property(AudioClip), _dec14 = property(AudioClip), _dec(_class = (_class2 = (_class3 = class GameStart extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "isNewLoading", _descriptor, this);

          _initializerDefineProperty(this, "gameConfig", _descriptor2, this);

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

        async onLoad() {
          if (this.gameConfig) {
            this.gameID = this.gameConfig.json.gameID; // this.gameCode = this.gameConfig.json.gameCode;

            this.idleTimeoutLimit = this.gameConfig.json.idleTimeoutLimit;
            this.isExhibition = this.gameConfig.json.isExhibition;
            this.debugLocalization = this.gameConfig.json.debugLocalization;
            this.debugLanguageKey = this.gameConfig.json.debugLanguageKey;
          }

          if (this.isNewLoading) {
            this.apexWinLogoNode = find("Apex_Logo", this.apexWin);
          } else {
            this.apexWinLogoNode = find("Logo", this.apexWin);
          }

          this.apexWinLogoNode.active = false;
          this.apexWin.active = true;

          if ((_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).isDev() || this.isExhibition) {
            // 展示或是開發模式
            this.startGame();
          } else {
            // 上站環境連線北分
            const gameUrl = window.location.href;

            try {
              var _GetInstance$PlayerIn, _GetInstance$PlayerIn2, _GetInstance$PlayerIn3, _GetInstance$PlayerIn4, _GetInstance$PlayerIn5, _GetInstance$PlayerIn6, _GetInstance$PlayerIn7, _GetInstance$PlayerIn8;

              if (!(_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
                error: Error()
              }), NetAgent) : NetAgent).GetInstance().ParserBaseConfig(gameUrl)) {
                throw new Error("Parser QueryString Fail");
              }

              await (_crd && NetAgent === void 0 ? (_reportPossibleCrUseOfNetAgent({
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
              this.startGame();
            } catch (error) {
              //表示參數 Parser 失敗
              //ErrorHandler.Instance.TriggerError(PARSER_URL_FAIL);
              console.error(error);
              console.error("參數 Parser 失敗");
            }
          }
        }

        start() {}

        startGame() {
          director.addPersistRootNode(this.node);
          GameStart.isGameStartLoaded = true;

          if (!(_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
            error: Error()
          }), GameSetting) : GameSetting).isShowAWLogo) {
            if (this.isNewLoading) {
              const newSpriteNode = new Node("Logo");
              newSpriteNode.setParent(this.apexWin);
              newSpriteNode.setPosition(0, 0, 0);
              newSpriteNode.layer = this.apexWin.layer;
              this.apexWinSprite = newSpriteNode.addComponent(Sprite);
            } else {
              this.apexWinSprite = find("Logo", this.apexWin).getComponent(Sprite);
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

        async startLoad() {
          try {
            let lang = this.getLanguage();
            (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
              error: Error()
            }), GameSetting) : GameSetting).gameLang = (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
              error: Error()
            }), SlotRelayLang) : SlotRelayLang)[lang];
            this.gameInfoUI.init(this.gameInfoSpriteFrameMaps);

            if (this.isNewLoading) {
              let spine = this.apexWin.getComponentInChildren(sp.Skeleton);

              if (spine) {
                if ((_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
                  error: Error()
                }), GameSetting) : GameSetting).isShowAWLogo) {
                  await spine.playPromise(this.LOGO_SPINE_ANIMATION_IN);
                }
              } else {
                console.error('ApexWin spine not found');
              }
            } else {
              await this.apexWin.getComponent(Animation).playPromise(this.LOGO_ANIMATION_IN);
            }

            await (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
              error: Error()
            }), Localization) : Localization).instance.init(this.gameID, lang);
            await (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
              error: Error()
            }), Localization) : Localization).instance.updateAllSpriteAndLabel((_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
              error: Error()
            }), SlotRelayLang) : SlotRelayLang)[this.getLanguage()]);

            if (!this.isNewLoading) {
              let gameInfoPromiseList = [];

              for (let item of this.gameInfoDataList) {
                gameInfoPromiseList.push(item.loadLocalizationKey((_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
                  error: Error()
                }), SlotRelayLang) : SlotRelayLang)[this.getLanguage()]));
              }

              await Promise.all(gameInfoPromiseList);
              this.gameInfoUI.setInfo(this.gameInfoDataList);
            }

            if (!this.isNewLoading) {
              this.apexWin.getComponent(Animation).playPromise(this.LOGO_ANIMATION_OUT).then(() => {
                this.apexWin.active = false;
                this.gameInfoUI.startAutoChangePage();
              });
            }

            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playMusicClip(this.bgm);
            this.continueBtn.setActive(false);
            (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).addEventHandlerToButton(this.continueBtn, this, 'onContinueBtnClick');
            this.continueBtn.getComponent(Button).interactable = true;
            let messageBox = instantiate(this.messageBoxPrefab);

            if (this.messageBoxRootNode) {
              messageBox.setParent(this.messageBoxRootNode);
            }

            (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
              error: Error()
            }), MessageBox) : MessageBox).instance.init();
            await Promise.all([this.connectPromise(), this.loadScenePromise()]); // 等待連線和場景載入完成後，才會顯示繼續按鈕

            this.showContinueBtn();

            if (this.isNewLoading) {
              this.fadeOutLogo(this.apexWin);
              this.gameInfoUI.startDetect();
              this.gameInfoUI.playTargetSpine(0);
            }
          } catch (error) {
            console.error(error);
          }
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

        async loadScenePromise() {
          director.getScene().getComponentInChildren(_crd && ScreenAdapter === void 0 ? (_reportPossibleCrUseOfScreenAdapter({
            error: Error()
          }), ScreenAdapter) : ScreenAdapter).forceResize();
          await this.loadScene();
          let gameRoot = director.getScene().getComponentInChildren('GameRoot');
          await gameRoot.init();
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
          let p = completedCount / totalCount; //console.log(`p  ${p}  this.progress  ${this.progress}   `);

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
          let gameRoot = director.getScene().getComponentInChildren('GameRoot');
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
          let key = null;

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
          let opacity = logo.getComponent(UIOpacity);

          if ((_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
            error: Error()
          }), GameSetting) : GameSetting).isShowAWLogo) {
            this.apexWin.getComponentInChildren(sp.Skeleton).setAnimation(0, this.LOGO_SPINE_ANIMATION_OUT, false);
          }

          tween(opacity).to(0.2, {
            opacity: 0
          }).start();
        }

        async loadScene() {
          const scene = await (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).preloadScenePromise(this.gameID, this.onProgress.bind(this));

          if (this.node) {
            this.gameScene = scene;
            await this.runScenePromise();
          }
        }

        runScenePromise() {
          return new Promise((resolve, reject) => {
            director.runScene(this.gameScene, null, () => {
              resolve();
            });
          });
        }

      }, _class3.isGameStartLoaded = false, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isNewLoading", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
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
        initializer: function () {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "gameInfoSpriteFrameMaps", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
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
//# sourceMappingURL=1a3b199122f0e556c6127ce180ef6095ab2ca329.js.map