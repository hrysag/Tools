System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Canvas, Component, director, game, instantiate, JsonAsset, Node, Prefab, NetworkHandler, GenericUIManager, AudioManager, AudioResource, GenericUIRes, PlayerInfo, KeySpriteFramePair, Localization, MessageBox, GameController, Utility, ScreenAdapter, GameStart, SlotRelayLang, GameSetting, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _class3, _crd, ccclass, property, requireComponent, GameRoot;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfNetworkHandler(extras) {
    _reporterNs.report("NetworkHandler", "../Networks/NetworkHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUIManager(extras) {
    _reporterNs.report("GenericUIManager", "../../GenericUI/Scripts/GenericUIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioResource(extras) {
    _reporterNs.report("AudioResource", "../Utils/AudioResource", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUIRes(extras) {
    _reporterNs.report("GenericUIRes", "../../GenericUI/Scripts/GenericUIRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerInfo(extras) {
    _reporterNs.report("PlayerInfo", "../Player/PlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeySpriteFramePair(extras) {
    _reporterNs.report("KeySpriteFramePair", "../Utils/KeySpriteFramePair", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalization(extras) {
    _reporterNs.report("Localization", "./Localization", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageBox(extras) {
    _reporterNs.report("MessageBox", "../../GenericUI/Scripts/MessageBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../Utils/Utility", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScreenAdapter(extras) {
    _reporterNs.report("ScreenAdapter", "../Utils/ScreenAdapter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStart(extras) {
    _reporterNs.report("GameStart", "./GameStart", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "../Networks/BetData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotRelayLang(extras) {
    _reporterNs.report("SlotRelayLang", "../Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNewFlashModeEnum(extras) {
    _reporterNs.report("NewFlashModeEnum", "../../GenericUI/Scripts/MainUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSetting(extras) {
    _reporterNs.report("GameSetting", "./GameSetting", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Canvas = _cc.Canvas;
      Component = _cc.Component;
      director = _cc.director;
      game = _cc.game;
      instantiate = _cc.instantiate;
      JsonAsset = _cc.JsonAsset;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {}, function (_unresolved_3) {
      NetworkHandler = _unresolved_3.NetworkHandler;
    }, function (_unresolved_4) {
      GenericUIManager = _unresolved_4.GenericUIManager;
    }, function (_unresolved_5) {
      AudioManager = _unresolved_5.AudioManager;
    }, function (_unresolved_6) {
      AudioResource = _unresolved_6.AudioResource;
    }, function (_unresolved_7) {
      GenericUIRes = _unresolved_7.GenericUIRes;
    }, function (_unresolved_8) {
      PlayerInfo = _unresolved_8.PlayerInfo;
    }, function (_unresolved_9) {
      KeySpriteFramePair = _unresolved_9.KeySpriteFramePair;
    }, function (_unresolved_10) {
      Localization = _unresolved_10.Localization;
    }, function (_unresolved_11) {
      MessageBox = _unresolved_11.MessageBox;
    }, function (_unresolved_12) {
      GameController = _unresolved_12.GameController;
    }, function (_unresolved_13) {
      Utility = _unresolved_13.Utility;
    }, function (_unresolved_14) {
      ScreenAdapter = _unresolved_14.ScreenAdapter;
    }, function (_unresolved_15) {
      GameStart = _unresolved_15.GameStart;
    }, function (_unresolved_16) {
      SlotRelayLang = _unresolved_16.SlotRelayLang;
    }, function (_unresolved_17) {
      GameSetting = _unresolved_17.GameSetting;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6db4bg1drhNwrv3lxCUbHMS", "GameRoot", undefined); // 將自行定義的函式加入到全域範圍


      __checkObsolete__(['_decorator', 'Canvas', 'Camera', 'Component', 'director', 'game', 'instantiate', 'JsonAsset', 'Node', 'Prefab']);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("GameRoot", GameRoot = (_dec = ccclass('GameRoot'), _dec2 = requireComponent(_crd && AudioResource === void 0 ? (_reportPossibleCrUseOfAudioResource({
        error: Error()
      }), AudioResource) : AudioResource), _dec3 = property(JsonAsset), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property(Node), _dec7 = property(Prefab), _dec8 = property(Node), _dec9 = property(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController), _dec10 = property(Node), _dec11 = property([_crd && KeySpriteFramePair === void 0 ? (_reportPossibleCrUseOfKeySpriteFramePair({
        error: Error()
      }), KeySpriteFramePair) : KeySpriteFramePair]), _dec(_class = _dec2(_class = (_class2 = (_class3 = class GameRoot extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "gameConfig", _descriptor, this);

          // 是否為線上，會吃上面gameConfig的isOnline
          // 為true時，bet時要製作使用NetworkHandler sendBet功能的功能
          // 為false時，要製作使用假資料的功能，要在gameController自行設計
          this.isOnline = false;
          this.isExhibition = false;
          this.debugLocalization = false;
          this.debugLanguageKey = '';

          _initializerDefineProperty(this, "canvasNode", _descriptor2, this);

          _initializerDefineProperty(this, "genericUIPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "genericUIRootNode", _descriptor4, this);

          _initializerDefineProperty(this, "messageBoxPrefab", _descriptor5, this);

          _initializerDefineProperty(this, "messageBoxRootNode", _descriptor6, this);

          _initializerDefineProperty(this, "gameController", _descriptor7, this);

          this.gameNumber = 0;
          // 總部取牌館的遊戲編號 12103, 12104 等
          this.gameID = "";
          this.versionCode = '';

          _initializerDefineProperty(this, "screenBtnRoot", _descriptor8, this);

          _initializerDefineProperty(this, "bottomTextSpriteFrameMaps", _descriptor9, this);

          this.balanceAfterSpin = 0;
          this.finalBalance = 0;
        }

        onLoad() {
          var _this$gameConfig$json;

          GameRoot.canvas = this.canvasNode.getComponent(Canvas);
          GameRoot.canvasCamera = GameRoot.canvas.cameraComponent;

          if ((_crd && GameStart === void 0 ? (_reportPossibleCrUseOfGameStart({
            error: Error()
          }), GameStart) : GameStart).isGameStartLoaded) {
            GameRoot.canvas.enabled = false;
            this.scheduleOnce(() => {
              // 如果不晚 1 frame關掉，不知為啥DragNodeEvent拖曳功能或出問題 QQ
              GameRoot.canvasCamera.enabled = false;
            });
          }

          this.gameID = this.gameConfig.json.gameID;
          this.gameNumber = this.gameConfig.json.gameNumber; // this.gameCode = this.gameConfig.json.gameCode;

          this.isOnline = this.gameConfig.json.isOnline;
          this.isExhibition = this.gameConfig.json.isExhibition;
          this.debugLocalization = this.gameConfig.json.debugLocalization;
          this.debugLanguageKey = this.gameConfig.json.debugLanguageKey;
          this.versionCode = (_this$gameConfig$json = this.gameConfig.json.versionCode) != null ? _this$gameConfig$json : '';

          if (true) {
            var _this$gameConfig$json2;

            let fps = (_this$gameConfig$json2 = this.gameConfig.json.mobileFPS) != null ? _this$gameConfig$json2 : 61;
            game.frameRate = fps;
          }
        }

        start() {
          if ((_crd && GameStart === void 0 ? (_reportPossibleCrUseOfGameStart({
            error: Error()
          }), GameStart) : GameStart).isGameStartLoaded === false) {
            this.loadLocalization();
          }
        }

        loadLocalization() {
          let lang = this.getLanguage();
          (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
            error: Error()
          }), Localization) : Localization).instance.init(this.gameID, lang).then(() => {
            this.init();
          });
        }

        init() {
          return new Promise(resolve => {
            let genericUI = instantiate(this.genericUIPrefab);

            if (this.genericUIRootNode) {
              genericUI.setParent(this.genericUIRootNode);
            }

            if (director.getScene().getComponentInChildren(_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
              error: Error()
            }), MessageBox) : MessageBox) === null) {
              let messageBox = instantiate(this.messageBoxPrefab);

              if (this.messageBoxRootNode) {
                messageBox.setParent(this.messageBoxRootNode);
              }
            }

            Promise.all([(_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
              error: Error()
            }), Localization) : Localization).instance.updateAllSpriteAndLabel((_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
              error: Error()
            }), SlotRelayLang) : SlotRelayLang)[this.getLanguage()])]).then(() => {
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.init((_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
                error: Error()
              }), Localization) : Localization).instance.currentLangKey);
              (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
                error: Error()
              }), MessageBox) : MessageBox).instance.init();
              director.getScene().getComponentInChildren(_crd && ScreenAdapter === void 0 ? (_reportPossibleCrUseOfScreenAdapter({
                error: Error()
              }), ScreenAdapter) : ScreenAdapter).forceResize();
              (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
                error: Error()
              }), GameSetting) : GameSetting).gameLang = (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
                error: Error()
              }), SlotRelayLang) : SlotRelayLang)[this.getLanguage()];
              let payTableURL = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
                error: Error()
              }), Utility) : Utility).getPayTableURL(this.gameID, this.getLanguage());
              let ruleURL = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
                error: Error()
              }), Utility) : Utility).getRuleURL(this.gameID, this.getLanguage());
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.onSpinBtnClickCallback = this.onGenericUISpinClick.bind(this);
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.onBetSelectBtnClickCallback = this.onGenericUIBetSelectBtnClick.bind(this);
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.onAutoSpinStartClickCallback = this.onGenericUIAutoSpinStartClick.bind(this);
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.onMenuUIShowCallback = this.onGenericUIMenuUIShow.bind(this);
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.onNewFlashBtnSwitch = this.onNewFlashBtnSwitch.bind(this);
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.setScreenBtnRoot(this.screenBtnRoot);
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.setUrl(payTableURL, ruleURL);
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.addBottomRichTextSprite(this.bottomTextSpriteFrameMaps);
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.showBottomTextFirst();
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.setGenericSoundAudioClips((_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
                error: Error()
              }), GenericUIRes) : GenericUIRes).instance.genericSoundAudioClipList);
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.setSoundAudioClips(this.getComponent(_crd && AudioResource === void 0 ? (_reportPossibleCrUseOfAudioResource({
                error: Error()
              }), AudioResource) : AudioResource).soundAudioClipList);
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.setMusicAudioClips(this.getComponent(_crd && AudioResource === void 0 ? (_reportPossibleCrUseOfAudioResource({
                error: Error()
              }), AudioResource) : AudioResource).musicAudioClipList);
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.setBalance((_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
                error: Error()
              }), PlayerInfo) : PlayerInfo).balance);
              (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
                error: Error()
              }), PlayerInfo) : PlayerInfo).updateBetValueList((_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
                error: Error()
              }), GameSetting) : GameSetting).platformBetValueList);
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.setBetSelectInfos((_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
                error: Error()
              }), PlayerInfo) : PlayerInfo).betValueList);
              this.gameController.init(this.gameNumber, this.isOnline);
              this.gameController.onReceiveBetCallback = this.onGameControllerReceiveBet.bind(this);
              this.gameController.forceChangeLanguage = this.forceChangeLanguage.bind(this);

              if ((_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
                error: Error()
              }), NetworkHandler) : NetworkHandler).instance.demo) {
                (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                  error: Error()
                }), GenericUIManager) : GenericUIManager).instance.setBottomText('Demo');
              }

              if ((_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
                error: Error()
              }), NetworkHandler) : NetworkHandler).instance.demo || this.isExhibition || !(_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
                error: Error()
              }), NetworkHandler) : NetworkHandler).instance.isLogin) {
                (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                  error: Error()
                }), GenericUIManager) : GenericUIManager).instance.setHistoryBtnActive(false);
              }

              if ((_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
                error: Error()
              }), NetworkHandler) : NetworkHandler).instance.isLogin) {
                (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                  error: Error()
                }), GenericUIManager) : GenericUIManager).instance.setBalance((_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
                  error: Error()
                }), PlayerInfo) : PlayerInfo).balance);
              } else {
                (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
                  error: Error()
                }), PlayerInfo) : PlayerInfo).balance = 3000000;
                (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                  error: Error()
                }), GenericUIManager) : GenericUIManager).instance.setBalance((_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
                  error: Error()
                }), PlayerInfo) : PlayerInfo).balance);
              }

              if ((_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
                error: Error()
              }), GameSetting) : GameSetting).isShowBottomAWLogo) {
                (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                  error: Error()
                }), GenericUIManager) : GenericUIManager).instance.setLogoText((_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
                  error: Error()
                }), GameSetting) : GameSetting).gameLogo);
              } else {
                let gameName = (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
                  error: Error()
                }), Localization) : Localization).instance.t(`GameName.${this.gameID.toLowerCase()}`);
                (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                  error: Error()
                }), GenericUIManager) : GenericUIManager).instance.setLogoText(gameName);
              }

              let platform = (_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
                error: Error()
              }), NetworkHandler) : NetworkHandler).instance.platform;
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.setVersion(`v${platform}.${this.versionCode}`);
              (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
                error: Error()
              }), Utility) : Utility).checkLabelBold(this.getLanguage());

              if (!(_crd && GameStart === void 0 ? (_reportPossibleCrUseOfGameStart({
                error: Error()
              }), GameStart) : GameStart).isGameStartLoaded) {
                // 如果不是從GameStart進入遊戲的話，直接開啟鍵盤功能(開發模式)
                (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                  error: Error()
                }), GenericUIManager) : GenericUIManager).instance.setMainUIKeyboardLock(false);
              }

              return this.gameController.setupBeforeGame();
            }).then(() => {
              resolve();
            }).catch(err => {
              console.error("GameRoot init error: ", err);
            });
          });
        }

        update(dt) {
          (_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
            error: Error()
          }), NetworkHandler) : NetworkHandler).instance.update(dt);
        }

        onGenericUISpinClick() {
          var _this$gameController;

          (_this$gameController = this.gameController) == null || _this$gameController.onStartSpin();
        }

        onGenericUIBetSelectBtnClick(betValue) {
          var _this$gameController2;

          (_this$gameController2 = this.gameController) == null || _this$gameController2.onUpdateBetValue(betValue);
        }

        onGenericUIAutoSpinStartClick(autoTimes) {
          var _this$gameController3;

          (_this$gameController3 = this.gameController) == null || _this$gameController3.onStartAuto(autoTimes);
        }

        onGenericUIMenuUIShow() {
          // 預先設定細單網址 提前loading 免得打開的時候閃一下
          let historyJsonString = (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
            error: Error()
          }), PlayerInfo) : PlayerInfo).getHistoryJson(this.gameID);
          let historyURL = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).getHistoryURL(this.getLanguage(), historyJsonString);
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.presetHistoryUrl(historyURL);
        }

        onNewFlashBtnSwitch(mode) {
          var _this$gameController4;

          (_this$gameController4 = this.gameController) == null || _this$gameController4.onNewFlashBtnSwitch(mode);
        }

        onGameControllerReceiveBet(betData) {}

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

        showCanvas() {
          var _this$gameController5;

          GameRoot.canvas.enabled = true;
          GameRoot.canvasCamera.enabled = true; // 要按下continue後 才能把spin的空白鍵功能打開

          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setMainUIKeyboardLock(false); // 將MessageBox從GameStart移到GameScene

          let messageBoxNode = director.getScene().getComponentInChildren(_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
            error: Error()
          }), MessageBox) : MessageBox).node;

          if (this.messageBoxRootNode) {
            messageBoxNode.setParent(this.messageBoxRootNode);
          }

          (_this$gameController5 = this.gameController) == null || _this$gameController5.onContinueBtnClick();
        }

        forceChangeLanguage(lang) {
          let langStr = (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
            error: Error()
          }), SlotRelayLang) : SlotRelayLang)[lang];
          (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
            error: Error()
          }), Localization) : Localization).instance.setLanguage(langStr);
          (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
            error: Error()
          }), Localization) : Localization).instance.updateAllSpriteAndLabel(lang);
          this.debugLanguageKey = langStr;
          this.debugLocalization = true;
          let payTableURL = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).getPayTableURL(this.gameID, this.getLanguage());
          let ruleURL = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).getRuleURL(this.gameID, this.getLanguage());
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setUrl(payTableURL, ruleURL);
        }

        getIsExhibition() {
          return this.isExhibition;
        }

      }, _class3.canvas = null, _class3.canvasCamera = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameConfig", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "canvasNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "genericUIPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "genericUIRootNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "messageBoxPrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "messageBoxRootNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "gameController", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "screenBtnRoot", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bottomTextSpriteFrameMaps", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=37b6ea49a52c5e19de554f8e34c81da1d260e17f.js.map