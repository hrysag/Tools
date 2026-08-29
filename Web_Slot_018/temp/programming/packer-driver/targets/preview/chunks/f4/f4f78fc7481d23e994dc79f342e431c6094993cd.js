System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, AudioClip, Button, CCBoolean, Component, director, instantiate, JsonAsset, Node, Prefab, ProgressBar, sp, tween, UIOpacity, Utility, GameInfoData, Localization, NetworkEvent, NetworkHandler, PlayerInfo, MessageBox, ScreenAdapter, AudioManager, KeySpriteFramePair, ErrorHandler, ErrorCode, SlotRelayLang, GameInfoUIFix, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _class3, _crd, ccclass, property, GameStartFix;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "db://assets/Scripts/Utils/Utility", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInfoData(extras) {
    _reporterNs.report("GameInfoData", "db://assets/Scripts/Utils/GameInfoData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalization(extras) {
    _reporterNs.report("Localization", "db://assets/Scripts/GameScripts/Localization", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkEvent(extras) {
    _reporterNs.report("NetworkEvent", "db://assets/Scripts/Networks/NetworkHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkHandler(extras) {
    _reporterNs.report("NetworkHandler", "db://assets/Scripts/Networks/NetworkHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerInfo(extras) {
    _reporterNs.report("PlayerInfo", "db://assets/Scripts/Player/PlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageBox(extras) {
    _reporterNs.report("MessageBox", "db://assets/GenericUI/Scripts/MessageBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScreenAdapter(extras) {
    _reporterNs.report("ScreenAdapter", "db://assets/Scripts/Utils/ScreenAdapter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeySpriteFramePair(extras) {
    _reporterNs.report("KeySpriteFramePair", "db://assets/Scripts/Utils/KeySpriteFramePair", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMachineInfo(extras) {
    _reporterNs.report("GameMachineInfo", "db://assets/Scripts/NetAgent/GameMachineInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorHandler(extras) {
    _reporterNs.report("ErrorHandler", "db://assets/Scripts/ErrorHandler/ErrorHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfErrorCode(extras) {
    _reporterNs.report("ErrorCode", "db://assets/Scripts/ErrorHandler/ErrorHandleDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotRelayLang(extras) {
    _reporterNs.report("SlotRelayLang", "db://assets/Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInfoUIFix(extras) {
    _reporterNs.report("GameInfoUIFix", "./GameInfoUIFix", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      JsonAsset = _cc.JsonAsset;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ProgressBar = _cc.ProgressBar;
      sp = _cc.sp;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      Utility = _unresolved_2.Utility;
    }, function (_unresolved_3) {
      GameInfoData = _unresolved_3.GameInfoData;
    }, function (_unresolved_4) {
      Localization = _unresolved_4.Localization;
    }, function (_unresolved_5) {
      NetworkEvent = _unresolved_5.NetworkEvent;
      NetworkHandler = _unresolved_5.NetworkHandler;
    }, function (_unresolved_6) {
      PlayerInfo = _unresolved_6.PlayerInfo;
    }, function (_unresolved_7) {
      MessageBox = _unresolved_7.MessageBox;
    }, function (_unresolved_8) {
      ScreenAdapter = _unresolved_8.ScreenAdapter;
    }, function (_unresolved_9) {
      AudioManager = _unresolved_9.AudioManager;
    }, function (_unresolved_10) {
      KeySpriteFramePair = _unresolved_10.KeySpriteFramePair;
    }, function (_unresolved_11) {
      ErrorHandler = _unresolved_11.ErrorHandler;
    }, function (_unresolved_12) {
      ErrorCode = _unresolved_12.ErrorCode;
    }, function (_unresolved_13) {
      SlotRelayLang = _unresolved_13.SlotRelayLang;
    }, function (_unresolved_14) {
      GameInfoUIFix = _unresolved_14.GameInfoUIFix;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68db9fp6xlN+Iuv9qVK6Abv", "GameStartFix", undefined); //import '../../Lib/externalDefinitions'; // 將自行定義的函式加入到全域範圍


      __checkObsolete__(['_decorator', 'Animation', 'AudioClip', 'Button', 'CCBoolean', 'Component', 'director', 'instantiate', 'JsonAsset', 'Node', 'Prefab', 'ProgressBar', 'SceneAsset', 'sp', 'tween', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameStartFix", GameStartFix = (_dec = ccclass('GameStartFix'), _dec2 = property(CCBoolean), _dec3 = property(JsonAsset), _dec4 = property(Prefab), _dec5 = property(Node), _dec6 = property(ProgressBar), _dec7 = property(Node), _dec8 = property(_crd && GameInfoUIFix === void 0 ? (_reportPossibleCrUseOfGameInfoUIFix({
        error: Error()
      }), GameInfoUIFix) : GameInfoUIFix), _dec9 = property({
        type: _crd && GameInfoData === void 0 ? (_reportPossibleCrUseOfGameInfoData({
          error: Error()
        }), GameInfoData) : GameInfoData,

        visible() {
          return !this.isNewLoading;
        }

      }), _dec10 = property({
        type: [_crd && KeySpriteFramePair === void 0 ? (_reportPossibleCrUseOfKeySpriteFramePair({
          error: Error()
        }), KeySpriteFramePair) : KeySpriteFramePair],

        visible() {
          return !this.isNewLoading;
        }

      }), _dec11 = property(Node), _dec12 = property(AudioClip), _dec13 = property(AudioClip), _dec(_class = (_class2 = (_class3 = class GameStartFix extends Component {
        constructor() {
          super(...arguments);

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
          this.isLoadSceneDone = false;
          this.getPlayerInfoDone = false;
          this.runScenePromiseResolve = null;

          //#endregion
          _initializerDefineProperty(this, "messageBoxPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "messageBoxRootNode", _descriptor4, this);

          _initializerDefineProperty(this, "progressBar", _descriptor5, this);

          _initializerDefineProperty(this, "continueBtn", _descriptor6, this);

          _initializerDefineProperty(this, "gameInfoUI", _descriptor7, this);

          // old loading
          _initializerDefineProperty(this, "gameInfoDataList", _descriptor8, this);

          // old loading
          _initializerDefineProperty(this, "gameInfoSpriteFrameMaps", _descriptor9, this);

          _initializerDefineProperty(this, "apexWin", _descriptor10, this);

          _initializerDefineProperty(this, "bgm", _descriptor11, this);

          _initializerDefineProperty(this, "publicOn", _descriptor12, this);

          this.progress = 0;
          this.gameScene = null;
          this.LOGO_SPINE_ANIMATION_IN = 'in';
          this.LOGO_SPINE_ANIMATION_OUT = 'out';
          this.LOGO_ANIMATION_IN = 'ApexLogoShow';
          this.LOGO_ANIMATION_OUT = 'ApexLogoFadeout';
        }

        onLoad() {
          director.addPersistRootNode(this.node);
          GameStartFix.isGameStartLoaded = true;

          if (this.gameConfig) {
            this.gameID = this.gameConfig.json.gameID; // this.gameCode = this.gameConfig.json.gameCode;

            this.idleTimeoutLimit = this.gameConfig.json.idleTimeoutLimit;
            this.isExhibition = this.gameConfig.json.isExhibition;
            this.debugLocalization = this.gameConfig.json.debugLocalization;
            this.debugLanguageKey = this.gameConfig.json.debugLanguageKey;
          }

          this.apexWin.active = true;
        }

        start() {
          this.startLoad();
        }

        startLoad() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var lang = _this.getLanguage();

            _this.gameInfoUI.init(_this.gameInfoSpriteFrameMaps);

            if (_this.isNewLoading) {
              var spine = _this.apexWin.getComponentInChildren(sp.Skeleton);

              if (spine) {
                yield spine.playPromise(_this.LOGO_SPINE_ANIMATION_IN);
              } else {
                console.error('ApexWin spine not found');
              }
            } else {
              yield _this.apexWin.getComponent(Animation).playPromise(_this.LOGO_ANIMATION_IN);
            }

            yield (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
              error: Error()
            }), Localization) : Localization).instance.init(_this.gameID, lang);
            yield (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
              error: Error()
            }), Localization) : Localization).instance.updateAllSpriteAndLabel((_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
              error: Error()
            }), SlotRelayLang) : SlotRelayLang)[_this.getLanguage()]);

            if (!_this.isNewLoading) {
              var gameInfoPromiseList = [];

              for (var item of _this.gameInfoDataList) {
                gameInfoPromiseList.push(item.loadLocalizationKey((_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
                  error: Error()
                }), SlotRelayLang) : SlotRelayLang)[_this.getLanguage()]));
              }

              yield Promise.all(gameInfoPromiseList);

              _this.gameInfoUI.setInfo(_this.gameInfoDataList);
            } // 語系load完後才可以連線


            (_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
              error: Error()
            }), NetworkHandler) : NetworkHandler).instance.init(_this.gameID, _this.idleTimeoutLimit, _this.isExhibition);

            if (!_this.isExhibition && !(_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).isDev()) {
              (_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
                error: Error()
              }), NetworkHandler) : NetworkHandler).instance.addEventListener((_crd && NetworkEvent === void 0 ? (_reportPossibleCrUseOfNetworkEvent({
                error: Error()
              }), NetworkEvent) : NetworkEvent).Login, _this.onLogin.bind(_this)); // connectServer 後回傳

              (_crd && NetworkHandler === void 0 ? (_reportPossibleCrUseOfNetworkHandler({
                error: Error()
              }), NetworkHandler) : NetworkHandler).instance.connectServer();
            } else {
              _this.getPlayerInfoDone = true;

              _this.checkInitGameScene();
            }

            director.getScene().getComponentInChildren(_crd && ScreenAdapter === void 0 ? (_reportPossibleCrUseOfScreenAdapter({
              error: Error()
            }), ScreenAdapter) : ScreenAdapter).forceResize();

            if (!_this.isNewLoading) {
              _this.apexWin.getComponent(Animation).playPromise(_this.LOGO_ANIMATION_OUT).then(() => {
                _this.apexWin.active = false;

                _this.gameInfoUI.startAutoChangePage();
              });
            }

            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playMusicClip(_this.bgm);

            _this.continueBtn.setActive(false);

            (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).addEventHandlerToButton(_this.continueBtn, _this, 'onContinueBtnClick');
            _this.continueBtn.getComponent(Button).interactable = true;
            var messageBox = instantiate(_this.messageBoxPrefab);

            if (_this.messageBoxRootNode) {
              messageBox.setParent(_this.messageBoxRootNode);
            }

            (_crd && MessageBox === void 0 ? (_reportPossibleCrUseOfMessageBox({
              error: Error()
            }), MessageBox) : MessageBox).instance.init();

            if (_this.isNewLoading) {
              yield _this.loadScene();

              _this.showContinueBtn();

              _this.fadeOutLogo(_this.apexWin);

              yield _this.gameInfoUI.spawnPages_test(); //--fix 0711

              _this.gameInfoUI.startDetect();

              _this.gameInfoUI.playTargetSpine(0);
            } else {
              yield _this.loadScene();

              _this.showContinueBtn();
            }
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
            this.getPlayerInfoDone = true;
            this.checkInitGameScene();
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
         * 載入場景
         */
        // private loadScene() {
        //     // console.log("loadScene!!!!!");
        //     Utility.preloadScenePromise(this.gameID, this.onProgress.bind(this))
        //         .then((scene: SceneAsset) => {
        //             if (this.node) {
        //                 this.scheduleOnce(() => {
        //                     this.gameScene = scene;
        //                     director.runScene(this.gameScene, null, () => {
        //                         this.checkInitGameScene();
        //                     });
        //                     this.isLoadSceneDone = true;
        //                 }, 0.001);
        //             }
        //         });
        // }


        loadScene() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var scene = yield (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).preloadScenePromise(_this2.gameID, _this2.onProgress.bind(_this2));
            _this2.isLoadSceneDone = true;

            if (_this2.node) {
              _this2.gameScene = scene;
              yield _this2.runScenePromise();
            }
          })();
        }

        runScenePromise() {
          return new Promise((resolve, reject) => {
            this.runScenePromiseResolve = resolve;
            director.runScene(this.gameScene, null, () => {
              this.checkInitGameScene();
            });
          });
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
          var gameRoot = director.getScene().getComponentInChildren('GameRoot');
          gameRoot.showCanvas();
          this.node.destroy();
        }
        /**
         * 檢查載入場景完成
         */


        checkInitGameScene() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (_this3.isLoadSceneDone && _this3.getPlayerInfoDone) {
              var gameRoot = director.getScene().getComponentInChildren('GameRoot');
              yield gameRoot.init();
              _this3.runScenePromiseResolve == null || _this3.runScenePromiseResolve();
            }
          })();
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
          this.apexWin.getComponentInChildren(sp.Skeleton).setAnimation(0, this.LOGO_SPINE_ANIMATION_OUT, false);
          tween(opacity).to(0.2, {
            opacity: 0
          }).start();
        }

      }, _class3.isGameStartLoaded = false, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isNewLoading", [_dec2], {
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
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "gameInfoDataList", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "gameInfoSpriteFrameMaps", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "apexWin", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "bgm", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "publicOn", [_dec13], {
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
//# sourceMappingURL=f4f78fc7481d23e994dc79f342e431c6094993cd.js.map