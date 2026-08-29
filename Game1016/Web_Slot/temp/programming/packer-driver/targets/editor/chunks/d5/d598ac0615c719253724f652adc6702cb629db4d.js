System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, v3, UITransform, AnimationController, GameUtilsTools, ContainerWholeBehavior, GameGlobalKeys, GlobalAccessReader, AsyncScope, SoundList, AudioSourceList, AudioManager, SOUND_TYPE, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ANIMATION_FGUI_TYPE, SIGNAL_KEY, LOG_TITLE, FG_UI_Display;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAnimationController(extras) {
    _reporterNs.report("AnimationController", "../../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtilsTools(extras) {
    _reporterNs.report("GameUtilsTools", "../../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfContainerWholeBehavior(extras) {
    _reporterNs.report("ContainerWholeBehavior", "../../../MyUtils/BasicShowContainerManager/Component/ContainerWholeBehavior", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIBasicGUI(extras) {
    _reporterNs.report("IBasicGUI", "../IBasicGUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameGlobalKeys(extras) {
    _reporterNs.report("GameGlobalKeys", "../../../DefinitionGameData1016/GameGlobalData1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalAccessReader(extras) {
    _reporterNs.report("GlobalAccessReader", "../../../DefinitionGameData1016/AccessDefs/GlobalAccess", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAsyncScope(extras) {
    _reporterNs.report("AsyncScope", "../../../MyUtils/AsyncScope/AsyncScope", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../../../DefinitionGameData1016/SoundList1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioSourceList(extras) {
    _reporterNs.report("AudioSourceList", "../../../DefinitionGameData1016/SoundList1016", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      v3 = _cc.v3;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      AnimationController = _unresolved_2.AnimationController;
      GameUtilsTools = _unresolved_2.GameUtilsTools;
    }, function (_unresolved_3) {
      ContainerWholeBehavior = _unresolved_3.ContainerWholeBehavior;
    }, function (_unresolved_4) {
      GameGlobalKeys = _unresolved_4.GameGlobalKeys;
    }, function (_unresolved_5) {
      GlobalAccessReader = _unresolved_5.GlobalAccessReader;
    }, function (_unresolved_6) {
      AsyncScope = _unresolved_6.AsyncScope;
    }, function (_unresolved_7) {
      SoundList = _unresolved_7.SoundList;
      AudioSourceList = _unresolved_7.AudioSourceList;
    }, function (_unresolved_8) {
      AudioManager = _unresolved_8.AudioManager;
      SOUND_TYPE = _unresolved_8.SOUND_TYPE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8b97e5GKhZMS7dIvCKYs6Vx", "FG_UI_Display", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Vec3', 'v3', 'UITransform', 'UIOpacity', 'tween']);

      //import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
      ({
        ccclass,
        property
      } = _decorator);
      ANIMATION_FGUI_TYPE = {
        FG_COUNT: 'FG_Num_Up'
      };
      SIGNAL_KEY = 'FG_UI_CTRL_SIGNAL';
      LOG_TITLE = 'FG_UI_Display';

      _export("FG_UI_Display", FG_UI_Display = (_dec = ccclass('FG_UI_Display'), _dec2 = property({
        type: _crd && AnimationController === void 0 ? (_reportPossibleCrUseOfAnimationController({
          error: Error()
        }), AnimationController) : AnimationController,
        visible: true,
        displayName: 'FG_UI動畫控制器',
        tooltip: 'FG_UI動畫控制器'
      }), _dec3 = property({
        type: Node,
        visible: true,
        displayName: 'FG_UI_label',
        tooltip: 'FG_UI_label'
      }), _dec(_class = (_class2 = class FG_UI_Display extends (_crd && ContainerWholeBehavior === void 0 ? (_reportPossibleCrUseOfContainerWholeBehavior({
        error: Error()
      }), ContainerWholeBehavior) : ContainerWholeBehavior) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_aniCtrl", _descriptor, this);

          _initializerDefineProperty(this, "_fgLabelNode", _descriptor2, this);

          this._dirtyFlag = false;
          this._fgcount = 0;
          this._label = null;
          this._async = void 0;
        }

        onLoad() {
          if (this._dirtyFlag) return;
          this._dirtyFlag = true; //this.init();
        }

        start() {
          this.init();
        }

        init() {
          var _this$_aniCtrl;

          if (!this._dirtyFlag) return;
          (_this$_aniCtrl = this._aniCtrl) == null || _this$_aniCtrl.init();
          this._label = this._fgLabelNode.getComponent(Label);
          super.init();
          this.setFGCount(0);
          this._async = (_crd && AsyncScope === void 0 ? (_reportPossibleCrUseOfAsyncScope({
            error: Error()
          }), AsyncScope) : AsyncScope).getInstance();
        }

        reset() {
          this._fgcount = 0;
          this._label.string = '0';
        }

        setTotalFgCount(total) {
          this._fgcount = total;
          this._label.string = this._fgcount.numberComma();
        }

        setFGCount(count) {
          this._fgcount += count;
          this._label.string = this._fgcount.numberComma();
        } //---太尷尬了我也不想寫成這樣直接return promise


        async triggerFGCountUp(value) {
          var _this$_aniCtrl2;

          //--動畫時間0.4秒-particle 0.3秒
          const timeout = 0.4;
          this.setFGCount(value);
          const dt = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList).get(cfg => {
            var _cfg$fg;

            return (_cfg$fg = cfg.fg) == null ? void 0 : _cfg$fg.showFgTimes;
          }); //this._aniCtrl?.changeSpeedWithAep({ aniState: ANIMATION_FGUI_TYPE.FG_COUNT }, dt);

          (_this$_aniCtrl2 = this._aniCtrl) == null || _this$_aniCtrl2.gotoPlayLastFrame({
            aniState: ANIMATION_FGUI_TYPE.FG_COUNT
          });

          const signal = this._async.createAbortScope(SIGNAL_KEY);

          const p = this._aniCtrl.playAniInPromise({
            aniState: ANIMATION_FGUI_TYPE.FG_COUNT
          });

          this.playVoice();

          const cancel = value => {
            var _this$_aniCtrl3;

            //--加速
            (_this$_aniCtrl3 = this._aniCtrl) == null || _this$_aniCtrl3.goBackToDefault();
          };

          this._async.withTimeout(p, timeout, //--race time
          {
            opt: 'triggerFGCountUp_FGBoard',
            tag: LOG_TITLE
          }, 'NG_UI_Display:triggerFGCountUp', true, null, signal, SIGNAL_KEY, cancel);

          const flag = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).InterruptProcess);

          if (flag) {
            this._async.abortAll(SIGNAL_KEY);
          }

          return p;
        }

        playVoice() {
          const voiceList = [(_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).FG_SpinAdd_01, (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).FG_SpinAdd_02, (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).FG_SpinAdd_03];
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
        } //---就空著吧


        openFGCountUI() {
          return Promise.resolve();
        }

        getFGCountWPos() {
          let parentUiTransform = this._fgLabelNode.parent.getComponent(UITransform);

          if (parentUiTransform) {
            let lPos = this._fgLabelNode.position.clone();

            let wPos = parentUiTransform.convertToWorldSpaceAR(lPos);
            return wPos;
          }

          return v3(0, 0, 0);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_aniCtrl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_fgLabelNode", [_dec3], {
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
//# sourceMappingURL=d598ac0615c719253724f652adc6702cb629db4d.js.map