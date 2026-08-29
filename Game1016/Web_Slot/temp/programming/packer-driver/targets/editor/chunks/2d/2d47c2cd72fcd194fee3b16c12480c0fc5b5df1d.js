System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioSource, Node, UIOpacity, BasicJPShowWinCtrl, GameUtilsTools, GlobalAccessReader, GameGlobalKeys, WinType, AudioManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, JpShowCtrl1016;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasicJPShowWinCtrl(extras) {
    _reporterNs.report("BasicJPShowWinCtrl", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtilsTools(extras) {
    _reporterNs.report("GameUtilsTools", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJpShowAniCtrl(extras) {
    _reporterNs.report("JpShowAniCtrl1016", "./components/JpShowAniCtrl1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalAccessReader(extras) {
    _reporterNs.report("GlobalAccessReader", "../../DefinitionGameData1016/AccessDefs/GlobalAccess", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameGlobalKeys(extras) {
    _reporterNs.report("GameGlobalKeys", "../../DefinitionGameData1016/GameGlobalData1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinType(extras) {
    _reporterNs.report("WinType", "../../MyUtils/BasicWinShowTools/Definitions/ShowWinDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIJpInterruptTime(extras) {
    _reporterNs.report("IJpInterruptTime", "../../MyUtils/BasicWinShowTools/Definitions/ShowWinDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioSource = _cc.AudioSource;
      Node = _cc.Node;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      BasicJPShowWinCtrl = _unresolved_2.BasicJPShowWinCtrl;
      GameUtilsTools = _unresolved_2.GameUtilsTools;
    }, function (_unresolved_3) {
      GlobalAccessReader = _unresolved_3.GlobalAccessReader;
    }, function (_unresolved_4) {
      GameGlobalKeys = _unresolved_4.GameGlobalKeys;
    }, function (_unresolved_5) {
      WinType = _unresolved_5.WinType;
    }, function (_unresolved_6) {
      AudioManager = _unresolved_6.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "53e89nSyQhO8Lre4Ss/w745", "JpShowCtrl1016", undefined);

      __checkObsolete__(['_decorator', 'AudioSource', 'Component', 'Game', 'Node', 'tween', 'UIOpacity']); //import { AudioManager } from 'db://assets/Scripts/Audio/AudioManager';


      ({
        ccclass,
        property
      } = _decorator);

      _export("JpShowCtrl1016", JpShowCtrl1016 = (_dec = ccclass('JpShowCtrl1016'), _dec2 = property({
        type: Node,
        visible: true,
        displayName: 'bgDarkNode',
        tooltip: '背景的黑底'
      }), _dec3 = property({
        type: AudioSource,
        visible: true,
        displayName: 'bgmAudioSource1',
        tooltip: '背景音樂AudioSource1'
      }), _dec4 = property({
        type: AudioSource,
        visible: true,
        displayName: 'bgmAudioSource2',
        tooltip: '背景音樂AudioSource2'
      }), _dec(_class = (_class2 = class JpShowCtrl1016 extends (_crd && BasicJPShowWinCtrl === void 0 ? (_reportPossibleCrUseOfBasicJPShowWinCtrl({
        error: Error()
      }), BasicJPShowWinCtrl) : BasicJPShowWinCtrl) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_bgDarkNode", _descriptor, this);

          this._tweenResolvePromise = void 0;

          //--可外部中斷的tween promise
          _initializerDefineProperty(this, "_bgmAudioSource1", _descriptor2, this);

          _initializerDefineProperty(this, "_bgmAudioSource2", _descriptor3, this);

          //--78有夠不好做的功能
          this.frameEvtCallBack = async () => {
            //console.log('FrameEvtCallBack: HideNumber');
            await this.tweenOpacity(this._bgDarkNode, 0, 0.25);
            this._bgDarkNode.active = false;
          };
        }

        init() {
          super.init();
          this._bgDarkNode.active = false;
          this._frameEventCallBack = this.frameEvtCallBack;
        }

        register() {
          const gameStepDelayTimeList = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList);
          const loopDuration = gameStepDelayTimeList.get(cfg => {
            var _cfg$Jackpot;

            return (_cfg$Jackpot = cfg.Jackpot) == null ? void 0 : _cfg$Jackpot.loopDuration;
          });
          const fastLoopDuration = gameStepDelayTimeList.get(cfg => {
            var _cfg$Jackpot2;

            return (_cfg$Jackpot2 = cfg.Jackpot) == null ? void 0 : _cfg$Jackpot2.fastLoopDuration;
          });
          const runNumberDuration = gameStepDelayTimeList.get(cfg => {
            var _cfg$Jackpot3;

            return (_cfg$Jackpot3 = cfg.Jackpot) == null ? void 0 : _cfg$Jackpot3.runDuration;
          });
          const interruptTime = gameStepDelayTimeList.get(cfg => {
            var _cfg$Jackpot4;

            return (_cfg$Jackpot4 = cfg.Jackpot) == null ? void 0 : _cfg$Jackpot4.interruptTime;
          });
          this._interruptTimeData = new Map([[(_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
            error: Error()
          }), WinType) : WinType).BigWin, {
            loopDurationTime: loopDuration,
            fastLoopDuration: fastLoopDuration,
            runDurationTime: runNumberDuration,
            canInterruptTime: interruptTime
          }], [(_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
            error: Error()
          }), WinType) : WinType).SuperWin, {
            loopDurationTime: loopDuration,
            fastLoopDuration: fastLoopDuration,
            runDurationTime: runNumberDuration,
            canInterruptTime: interruptTime
          }], [(_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
            error: Error()
          }), WinType) : WinType).EpicWin, {
            loopDurationTime: loopDuration,
            fastLoopDuration: fastLoopDuration,
            runDurationTime: runNumberDuration,
            canInterruptTime: interruptTime
          }], [(_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
            error: Error()
          }), WinType) : WinType).MegaWin, {
            loopDurationTime: loopDuration,
            fastLoopDuration: fastLoopDuration,
            runDurationTime: runNumberDuration,
            canInterruptTime: interruptTime
          }]]); //this._gameStepDelayTimeList = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList);

          super.register();
        } //--強制中止tween promise


        forceStopPromise() {
          if (this._tweenResolvePromise) {
            this._tweenResolvePromise();

            this._tweenResolvePromise = null;
          }
        }

        test() {
          this.showJPWin(200, 100);
        } //--override it


        async processBoardIn() {
          this._currentJpBoard.node.active = true;
          this._bgDarkNode.active = true;
          this.tweenOpacity(this._bgDarkNode, 255, 0.25);
          await this._currentJpBoard.openUIBoard();
        } //--override it


        addFrameEventCallBack() {
          const jpAniCtrl = this._currentJpBoard;

          if (jpAniCtrl.frameEventCallBack == null) {
            jpAniCtrl.frameEventCallBack = this.frameEvtCallBack;
          }
        }

        tweenOpacity(target, opacityValue, duration) {
          const upOpacity = target.getComponent(UIOpacity);
          const {
            promise,
            cancel
          } = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).TweenActionPromiseWithCancel(upOpacity, duration, {
            opacity: opacityValue
          }); // 保存 cancel 以便外部中斷

          this._tweenResolvePromise = () => cancel(true);

          return promise;
        }

        async processRunScoreLabel(value) {
          let label = this._currentJpBoard.labelNumber;

          if (label) {
            this._jpDigitsAniNumber.setLabelNode(label);
          }

          await this._jpDigitsAniNumber.showJpDigitsAniNumber(value);
        } //--0=fadeIn, 1=fadeOut


        fadeInOrOutBGMusic(value) {
          const music1Playing = this._bgmAudioSource1.playing;
          const music2Playing = this._bgmAudioSource2.playing; //const currentMusicSource = music1Playing ? this._bgmAudioSource1 : (music2Playing ? this._bgmAudioSource2 : null);

          const startVolume = value == 0 ? 0 : 1;
          const endVolume = value == 0 ? 1 : 0;
          this._musicFadeOutComplete = null;

          if (value == 1) {
            //--fade out
            this._musicFadeOutComplete = () => {
              //---ready
              //AudioManager.instance.pauseMusic();
              if (music1Playing) {
                (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                  error: Error()
                }), AudioManager) : AudioManager).instance.pauseMusic();
              } else {
                (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                  error: Error()
                }), AudioManager) : AudioManager).instance.pauseMusic2();
              }

              this._musicFadeOutComplete = null;
            };
          } else {
            //-fade in
            //AudioManager.instance.resumeMusic();
            if (music1Playing) {
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.resumeMusic();
            } else {
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.resume2Music();
            }
          }

          if (music1Playing) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.fadeMusicVolume(startVolume, endVolume, 0.5, this._musicFadeOutComplete);
          } else {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.fadeMusic2Volume(startVolume, endVolume, 0.5, this._musicFadeOutComplete);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_bgDarkNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_bgmAudioSource1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_bgmAudioSource2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2d47c2cd72fcd194fee3b16c12480c0fc5b5df1d.js.map