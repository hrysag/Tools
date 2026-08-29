System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, SpriteFrame, Sprite, AnimationController, GameUtilsTools, GlobalAccessReader, GameGlobalKeys, AsyncScope, SoundList, AudioSourceList, AudioManager, SOUND_TYPE, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ANI_SHOWUP_NAME, DEBUG_TITLE, SIGNAL_KEY, ccclass, property, RespinBoardController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAnimationController(extras) {
    _reporterNs.report("AnimationController", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtilsTools(extras) {
    _reporterNs.report("GameUtilsTools", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalAccessReader(extras) {
    _reporterNs.report("GlobalAccessReader", "../../DefinitionGameData1016/AccessDefs/GlobalAccess", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameGlobalKeys(extras) {
    _reporterNs.report("GameGlobalKeys", "../../DefinitionGameData1016/GameGlobalData1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAsyncScope(extras) {
    _reporterNs.report("AsyncScope", "../../MyUtils/AsyncScope/AsyncScope", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlaySelector(extras) {
    _reporterNs.report("PlaySelector", "../../MyUtils/AnimationSystemV2/Definitions/IPlayOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../../DefinitionGameData1016/SoundList1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioSourceList(extras) {
    _reporterNs.report("AudioSourceList", "../../DefinitionGameData1016/SoundList1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOUND_TYPE(extras) {
    _reporterNs.report("SOUND_TYPE", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      AnimationController = _unresolved_2.AnimationController;
      GameUtilsTools = _unresolved_2.GameUtilsTools;
    }, function (_unresolved_3) {
      GlobalAccessReader = _unresolved_3.GlobalAccessReader;
    }, function (_unresolved_4) {
      GameGlobalKeys = _unresolved_4.GameGlobalKeys;
    }, function (_unresolved_5) {
      AsyncScope = _unresolved_5.AsyncScope;
    }, function (_unresolved_6) {
      SoundList = _unresolved_6.SoundList;
      AudioSourceList = _unresolved_6.AudioSourceList;
    }, function (_unresolved_7) {
      AudioManager = _unresolved_7.AudioManager;
      SOUND_TYPE = _unresolved_7.SOUND_TYPE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ebf2cU2It5J45uRoOffNdNB", "RespinBoardController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'SpriteFrame', 'Sprite']);

      //import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
      ANI_SHOWUP_NAME = 'Show';
      DEBUG_TITLE = 'RespinBoardController';
      SIGNAL_KEY = 'RESPIN_BOARD_CTRL_SIGNAL';
      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 這是進去RS之前顯示次數的大面板
       */

      _export("RespinBoardController", RespinBoardController = (_dec = ccclass('RespinBoardController'), _dec2 = property({
        type: Node,
        visible: true,
        displayName: "LabelNode",
        tooltip: "LabelNode"
      }), _dec3 = property({
        type: _crd && AnimationController === void 0 ? (_reportPossibleCrUseOfAnimationController({
          error: Error()
        }), AnimationController) : AnimationController,
        visible: true,
        displayName: "AnimationController",
        tooltip: "動畫面板"
      }), _dec4 = property({
        type: [SpriteFrame],
        visible: true,
        displayName: "NumberSpriteFrames",
        tooltip: "數字圖片spriteframe陣列"
      }), _dec(_class = (_class2 = class RespinBoardController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_labelNode", _descriptor, this);

          _initializerDefineProperty(this, "_animationController", _descriptor2, this);

          _initializerDefineProperty(this, "_numberSpriteFrames", _descriptor3, this);

          //private _label:Label;
          this._fakeLabelSprite = void 0;
          this._dirtyFirstOnLoad = false;
          this._async = void 0;
        }

        onLoad() {
          if (this._dirtyFirstOnLoad) return;
          this._dirtyFirstOnLoad = true;
          this.init();
        }

        init() {
          if (!this._dirtyFirstOnLoad) return;

          this._animationController.init();

          this._fakeLabelSprite = this._labelNode.getComponent(Sprite);
          this.setReSpinTimes(0); // 初始化分數顯示為0

          this._async = (_crd && AsyncScope === void 0 ? (_reportPossibleCrUseOfAsyncScope({
            error: Error()
          }), AsyncScope) : AsyncScope).getInstance();
        }

        setReSpinTimes(count) {
          const index = count == 2 ? 0 : 1;
          this._fakeLabelSprite.spriteFrame = this._numberSpriteFrames[index]; //this._label.string = count.numberComma();
        }

        async openWithEvtAndFinishPromise(evtCallBack) {
          const duringBoardTime = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList).get(cfg => {
            var _cfg$respin;

            return (_cfg$respin = cfg.respin) == null ? void 0 : _cfg$respin.duringBoard;
          }); //--直接改變撥放的速度來達成想要的時間(AEP獨有方法)
          //this._animationController.gotoPlayLastFrame({ aniState: ANI_SHOWUP_NAME });

          this._animationController.changeSpeedWithAep({
            aniState: ANI_SHOWUP_NAME
          }, duringBoardTime, ['Connect']);

          const signal = this._async.createAbortScope(SIGNAL_KEY);

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).respin_in, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
            error: Error()
          }), SOUND_TYPE) : SOUND_TYPE).NORMAL, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).RsAs);
          this.playVoice();
          const h = this.playAniAsCancelable({
            aniState: ANI_SHOWUP_NAME
          }, evtCallBack);

          const callbackWrapper = value => {
            //this._animationController.gotoPlayLastFrame({ aniState: ANI_SHOWUP_NAME });
            h.cancel();
            evtCallBack();
          };

          const task = this._async.registerCancelablePromise(SIGNAL_KEY, h.promise, callbackWrapper, signal, SIGNAL_KEY);
          /*
          const task = new Promise<void>((resolve) => {
              this._animationController.playAniWithFrameEvtCallBack(
                  evtCallBack,
                  async () => {
                      GameUtilsTools.debugLog(DEBUG_TITLE, 'openWithEvtAndFinishPromise', {msg:'evtCallBack'});
                      resolve();
                  },
                  false,
                  { aniState: ANI_SHOWUP_NAME }
              )
          });
          */


          await task;
        }

        playAniAsCancelable(aniState, evtCallBack) {
          let resolveFn;
          let finished = false;
          const promise = new Promise(resolve => {
            resolveFn = resolve; // 播放動畫，完成時 resolve

            this._animationController.playAniWithFrameEvtCallBack(evtCallBack, () => {
              if (finished) return;
              finished = true;
              resolveFn();
            }, false, aniState);
          }); // 取消：停止，強制 resolve

          const cancel = () => {
            if (finished) return;
            finished = true;

            try {
              var _this$_animationContr, _this$_animationContr2, _this$_animationContr3, _this$_animationContr4;

              (_this$_animationContr = (_this$_animationContr2 = this._animationController).stopAni) == null || _this$_animationContr.call(_this$_animationContr2);
              (_this$_animationContr3 = (_this$_animationContr4 = this._animationController).goBackToDefault) == null || _this$_animationContr3.call(_this$_animationContr4);
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.stopSound([(_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                error: Error()
              }), AudioSourceList) : AudioSourceList).RsAs]);
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.stopSound([(_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                error: Error()
              }), AudioSourceList) : AudioSourceList).Voice]); // this._animationController.playAni?.(AnimationStateType.Idle);
            } finally {
              resolveFn == null || resolveFn();
            }
          };

          return {
            promise,
            cancel
          };
        }

        playVoice() {
          let voiceList = [(_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).Respin_01, (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).Respin_02, (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).Respin_03, (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).Respin_04, (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).Respin_05];
          let conditionNumber = 30; //--30%的機率

          if (conditionNumber > 0) {
            const checkFlag = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
              error: Error()
            }), GameUtilsTools) : GameUtilsTools).createAndShuffleProbabilityPool(conditionNumber);

            if (checkFlag) {
              const randomIndex = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
                error: Error()
              }), GameUtilsTools) : GameUtilsTools).getRangeRandomInt(0, voiceList.length - 1);
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.playSound(voiceList[randomIndex], (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
                error: Error()
              }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                error: Error()
              }), AudioSourceList) : AudioSourceList).Voice);
            }
          }
        }

        goBack() {
          //--保留未來切成進退場兩段來播放退場用的
          return Promise.resolve();
        }

        close() {
          if (this._animationController.isPlaying) this._animationController.stopPromiseAni();

          this._animationController.goBackToDefault();
        }

        stop() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_labelNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_animationController", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_numberSpriteFrames", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b719bfa31756404afe7a2f6d2e2eca29debb42b8.js.map