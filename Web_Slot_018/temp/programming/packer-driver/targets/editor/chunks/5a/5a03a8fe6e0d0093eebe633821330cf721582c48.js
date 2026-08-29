System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, UIOpacity, tween, FindComponent, SpineController, TransitionsState, AnimationControllersPoolManager, Localization, LocalizationSpine, LocalizationLabel, AudioManager, SOUND_TYPE, SoundList, AudioSourceList, GameUtils, _dec, _class, _crd, ccclass, property, FG_01_PREFAB_NAME, FG_02_PREFAB_NAME, Fg_UI_Component;

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../../../MyUtils/FindComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineController(extras) {
    _reporterNs.report("SpineController", "../../../MyUtils/AnimationSystem/Components/SpineController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTransitionsState(extras) {
    _reporterNs.report("TransitionsState", "../../../DefinitionGameData/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationControllersPoolManager(extras) {
    _reporterNs.report("AnimationControllersPoolManager", "../../../MyUtils/AnimationSystem/AnimationControllersPoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalization(extras) {
    _reporterNs.report("Localization", "db://assets/Scripts/GameScripts/Localization", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalizationSpine(extras) {
    _reporterNs.report("LocalizationSpine", "db://assets/Scripts/GameScripts/LocalizationSpine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalizationLabel(extras) {
    _reporterNs.report("LocalizationLabel", "db://assets/Scripts/GameScripts/LocalizationLabel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOUND_TYPE(extras) {
    _reporterNs.report("SOUND_TYPE", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../../../DefinitionGameData/SoundList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioSourceList(extras) {
    _reporterNs.report("AudioSourceList", "../../../DefinitionGameData/SoundList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../../MyUtils/GameUtils", _context.meta, extras);
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
      Label = _cc.Label;
      UIOpacity = _cc.UIOpacity;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      FindComponent = _unresolved_2.FindComponent;
    }, function (_unresolved_3) {
      SpineController = _unresolved_3.SpineController;
    }, function (_unresolved_4) {
      TransitionsState = _unresolved_4.TransitionsState;
    }, function (_unresolved_5) {
      AnimationControllersPoolManager = _unresolved_5.AnimationControllersPoolManager;
    }, function (_unresolved_6) {
      Localization = _unresolved_6.Localization;
    }, function (_unresolved_7) {
      LocalizationSpine = _unresolved_7.LocalizationSpine;
    }, function (_unresolved_8) {
      LocalizationLabel = _unresolved_8.LocalizationLabel;
    }, function (_unresolved_9) {
      AudioManager = _unresolved_9.AudioManager;
      SOUND_TYPE = _unresolved_9.SOUND_TYPE;
    }, function (_unresolved_10) {
      SoundList = _unresolved_10.SoundList;
      AudioSourceList = _unresolved_10.AudioSourceList;
    }, function (_unresolved_11) {
      GameUtils = _unresolved_11.GameUtils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5092fz6aBhK8JNeS5KpNoDK", "Fg_UI_Component", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'UIOpacity', 'tween', 'UI']);

      ({
        ccclass,
        property
      } = _decorator);
      FG_01_PREFAB_NAME = 'FG_01_FreeStart_FreeBack';
      FG_02_PREFAB_NAME = 'FG_02_FreeStart_FreeBack';

      _export("Fg_UI_Component", Fg_UI_Component = (_dec = ccclass('Fg_UI_Component'), _dec(_class = class Fg_UI_Component extends Component {
        constructor(..._args) {
          super(..._args);
          this.callBackFreeBackFinish = null;
          this._targetSpine = null;
          this._fgTimes_Label = null;
          this._fgResult_Label = null;
          this._camp = -1;
          this._currentSpineNodePrefabId = void 0;
          this._freeBackOutAniRunning = false;
          this._uiTweenInRunning = false;
          //--進場要跑完才會接續處理
          this._isUIlooping = false;
          //--確認跑完進場但還在loop的狀態
          this._transitionState = (_crd && TransitionsState === void 0 ? (_reportPossibleCrUseOfTransitionsState({
            error: Error()
          }), TransitionsState) : TransitionsState).NONE;
          this._externalResolve = void 0;
          this._onCustomSpineCompleteHandler = null;

          this.spineFreeBackKeyFrameEvtHandler = (...args) => {
            if (args[0] == 'out') {
              let opacity = this._targetSpine.node.getComponent(UIOpacity);

              tween(opacity).to(0.46, {
                opacity: 0
              }).call(() => {
                if (this._freeBackOutAniRunning) {
                  var _this$callBackFreeBac;

                  this._freeBackOutAniRunning = false;
                  (_this$callBackFreeBac = this.callBackFreeBackFinish) == null || _this$callBackFreeBac.call(this);
                }

                this.resetData();
                opacity.opacity = 255;
              }).start();
            }
          };

          this.clickHandler = async () => {
            this.node.off(Node.EventType.TOUCH_START, this.clickHandler); //--20250610

            if (this._uiTweenInRunning) {
              var _this$_externalResolv;

              this.playFGUILoopAni(); //await GameUtils.Defer(1000);//--等1秒,讓spine的loop

              await (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                error: Error()
              }), GameUtils) : GameUtils).DeferByTweenPromise(1000 / 1000); //--等1秒,讓spine的loop

              this._uiTweenInRunning = false; // 手動 resolve 掉原本 playFgFadeInOut() 裡的 promise

              (_this$_externalResolv = this._externalResolve) == null || _this$_externalResolv.call(this);
              this._externalResolve = undefined;
            } else {
              var _this$_externalResolv2;

              console.log('clickHandler: finish_in_uiTweenInRunning_during_looping'); //this._dirtyLockUIClick = false;
              //--不需要了..直接提早進入退場

              /**
               * 這邊是要做完整個進場+loop後才會resolve掉promise
               * 當玩家click的時候,
               * 1.還沒做完進場就直接loop 1秒 resolve掉promise(外面流程做退場控制)
               * 2.已經做完進場,但還在loop中,就直接resolve掉promise(外面流程做退場控制)
               */
              //this.callBackForUIClick?.();//--播放兩個前後光圈的轉場

              (_this$_externalResolv2 = this._externalResolve) == null || _this$_externalResolv2.call(this);
              this._externalResolve = undefined;
            }
          };
        }

        set transitionState(value) {
          this._transitionState = value;
        }

        init() {
          this._currentSpineNodePrefabId = '';
          this.node.active = false;
        }

        async changeFgUITargetForCamp(camp) {
          return new Promise(async (resolve, reject) => {
            if (this._camp == camp) {
              resolve();
            } else {
              this.node.active = true;
              let comps;

              if (camp == 0) {
                this._currentSpineNodePrefabId = FG_01_PREFAB_NAME;
              } else {
                this._currentSpineNodePrefabId = FG_02_PREFAB_NAME;
              }

              let targetPrefabNode = await this.createSpineNodeUI(this._currentSpineNodePrefabId);
              const currentLanguageKey = (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
                error: Error()
              }), Localization) : Localization).instance.currentLangKey;
              const localizationSpine = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                error: Error()
              }), FindComponent) : FindComponent).findComponentInChildren(targetPrefabNode, _crd && LocalizationSpine === void 0 ? (_reportPossibleCrUseOfLocalizationSpine({
                error: Error()
              }), LocalizationSpine) : LocalizationSpine);

              if (localizationSpine) {
                await localizationSpine.loadAllSpine(currentLanguageKey); //targetPrefabNode.active = true;
              }

              const localizationLabelComponent = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                error: Error()
              }), FindComponent) : FindComponent).findComponentInChildren(targetPrefabNode, _crd && LocalizationLabel === void 0 ? (_reportPossibleCrUseOfLocalizationLabel({
                error: Error()
              }), LocalizationLabel) : LocalizationLabel);

              if (localizationLabelComponent) {
                const t = (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
                  error: Error()
                }), Localization) : Localization).instance.t.bind((_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
                  error: Error()
                }), Localization) : Localization).instance);
                localizationLabelComponent.updateLabel(t);
              }

              let targetSpineUIComponent = this.initSpineUI(targetPrefabNode, camp);
              this._targetSpine = targetSpineUIComponent;
              comps = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                error: Error()
              }), FindComponent) : FindComponent).findALLCompsInChildren(targetPrefabNode, Label);
              this._fgTimes_Label = this.getLabelComps(comps, 'fnt_FG_freespins');
              this._fgResult_Label = this.getLabelComps(comps, 'fnt_FreeBack_settle');
              this._fgTimes_Label.node.active = false;
              this._fgResult_Label.node.active = false;
              this._camp = camp;
              resolve();
            }
          });
        }

        setFgResultLabel(value) {
          this._fgResult_Label.string = value.numberComma();
        } //-FG轉場次數面板/結算分數面板的進場


        async playFgFadeInOut() {
          //console.log('fg_ui_component_playFgFadeInOut:', this._transitionState);
          //-_fadeOutIsRunning
          this._uiTweenInRunning = true;
          this._isUIlooping = false;
          this.node.active = true;
          this.node.on(Node.EventType.TOUCH_START, this.clickHandler);
          this._targetSpine.node.getComponent(UIOpacity).opacity = 255;
          this._targetSpine.node.active = true;
          let currentCampSoundAppear;

          if (this._transitionState == (_crd && TransitionsState === void 0 ? (_reportPossibleCrUseOfTransitionsState({
            error: Error()
          }), TransitionsState) : TransitionsState).IN) {
            this._fgTimes_Label.node.active = true;
            currentCampSoundAppear = this._camp == 0 ? (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).FgEnterPageIn1 : (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).FgEnterPageIn2;
          } else {
            this._fgResult_Label.node.active = true;
            currentCampSoundAppear = (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).FgExitPageIn1;
          }

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound(currentCampSoundAppear, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
            error: Error()
          }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).BasicAS); // 建立手動 Promise

          return new Promise(async (resolve, reject) => {
            this._externalResolve = resolve;

            try {
              var _this$_externalResolv3;

              await this.customSpinePlay(); //--這個做完就已經完全彈出來了

              this._uiTweenInRunning = false;
              await this.playFGUILoopAni(); //--這個2sec
              //await GameUtils.Defer(2000);//--等1秒,讓spine的loop

              await (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                error: Error()
              }), GameUtils) : GameUtils).DeferByTweenPromise(2000 / 1000); //--等1秒,讓spine的loop

              (_this$_externalResolv3 = this._externalResolve) == null || _this$_externalResolv3.call(this);
              this._externalResolve = undefined;
            } catch (e) {
              var _this$_externalResolv4;

              (_this$_externalResolv4 = this._externalResolve) == null || _this$_externalResolv4.call(this);
              this._externalResolve = undefined;
              reject(e);
            }
          });
        } //-FG轉場次數面板/結算分數面板的退場


        async playFgFadeOut() {
          if (this.node.hasEventListener(Node.EventType.TOUCH_START)) {
            this.node.off(Node.EventType.TOUCH_START, this.clickHandler);
          }

          let inOutKey = this._transitionState == (_crd && TransitionsState === void 0 ? (_reportPossibleCrUseOfTransitionsState({
            error: Error()
          }), TransitionsState) : TransitionsState).IN ? 'freestart_out' : 'freeback_out'; //console.log('playFgFadeOut:', inOutKey);

          if (inOutKey == 'freeback_out') {
            this._freeBackOutAniRunning = true;
          }

          this._targetSpine.playAni(inOutKey); //--spineFreeBackKeyFrameEvtHandler退場完接tween

        }

        resetData() {
          if (this._targetSpine) {
            this._targetSpine.stopAni();

            this._targetSpine.node.active = false;
            this._fgTimes_Label.node.active = false;
            this._fgResult_Label.node.active = false;
            this.node.active = false;
            /*
            if (this._freeBackOutAniRunning) {
                this._freeBackOutAniRunning = false;
                this.callBackFreeBackFinish?.();
            }*/
          }
        }

        cleanFGUI() {
          if (this._onCustomSpineCompleteHandler) {
            this._targetSpine.spine.setCompleteListener(null);

            this._onCustomSpineCompleteHandler = null;
          }

          this.node.removeChild(this._targetSpine.node);
          (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
            error: Error()
          }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().pushInstancePrefabNodeToPool(this._currentSpineNodePrefabId, this._targetSpine.node);
          this._currentSpineNodePrefabId = '';
          this._fgTimes_Label = null;
          this._fgResult_Label = null;
          this._targetSpine = null;
          this.node.active = false;
          this._camp = -1; //console.log("_targetSpine_CLEAN");
        }

        createSpineNodeUI(prefabKey) {
          return new Promise((resolve, reject) => {
            let spineNode = (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
              error: Error()
            }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().getPrefabNode(prefabKey);
            this.node.once(Node.EventType.CHILD_ADDED, () => {
              resolve(spineNode);
            });
            spineNode.getComponent(UIOpacity).opacity = 0; //--會先讀取多語系的spine圖片,所以先關閉opacity

            spineNode.active = true;
            this.node.addChild(spineNode);
          });
        }

        initSpineUI(spineNode, camp) {
          let spineComponent;
          spineComponent = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
            error: Error()
          }), FindComponent) : FindComponent).findComponentInChildren(spineNode, _crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
            error: Error()
          }), SpineController) : SpineController);
          spineComponent.init(); //-回收後pool會Call resetData(裡面有clearKeyFrameEvent)
          //--20250605棄用(ui面板執行退場動畫結束送出的事件)

          spineComponent.setKeyFrameEvent('out', this.spineFreeBackKeyFrameEvtHandler);
          spineComponent.node.active = false;
          return spineComponent;
        }

        async playFGUILoopAni() {
          if (this._targetSpine) {
            const inOutKey = this._transitionState == (_crd && TransitionsState === void 0 ? (_reportPossibleCrUseOfTransitionsState({
              error: Error()
            }), TransitionsState) : TransitionsState).IN ? 'freestart_loop' : 'freeback_loop';
            this._isUIlooping = true;
            await this._targetSpine.playAniInPromise(inOutKey);
            this._isUIlooping = false;
          }
        }
        /**
         * FG轉場次數面板/結算分數面板的退場的keyframe事件
         * 準備收掉面板
         * PS--要播放 freestart_out 或 freeback_out 的時候,會觸發這個事件
         * call playFgFadeOut
         */


        customSpinePlay() {
          return new Promise((resolve, reject) => {
            const spine = this._targetSpine.spine;

            this._onCustomSpineCompleteHandler = trackEntry => {
              spine.setCompleteListener(null);
              this._onCustomSpineCompleteHandler = null;
              resolve();
            };
            /*
            const spineCompleteHandler = (trackEntry) => {
                spine.setCompleteListener(null);
                resolve();
            }*/


            let inOutKey = this._transitionState == (_crd && TransitionsState === void 0 ? (_reportPossibleCrUseOfTransitionsState({
              error: Error()
            }), TransitionsState) : TransitionsState).IN ? 'freestart_in' : 'freeback_in';
            let inOutKeySub = this._transitionState == (_crd && TransitionsState === void 0 ? (_reportPossibleCrUseOfTransitionsState({
              error: Error()
            }), TransitionsState) : TransitionsState).IN ? 'freestart_in_sub' : 'freeback_in_sub';
            spine.setAnimation(0, inOutKey, false);
            spine.setAnimation(1, inOutKeySub, false);
            spine.setCompleteListener(this._onCustomSpineCompleteHandler);
          });
        }

        getLabelComps(value, str) {
          for (let comp of value) {
            if (comp.node.name == str) {
              return comp;
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5a03a8fe6e0d0093eebe633821330cf721582c48.js.map