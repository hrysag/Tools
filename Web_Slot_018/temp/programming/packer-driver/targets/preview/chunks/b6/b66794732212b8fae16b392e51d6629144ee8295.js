System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, UIOpacity, tween, FindComponent, SpineController, TransitionsState, AnimationControllersPoolManager, Localization, LocalizationSpine, LocalizationLabel, AudioManager, SOUND_TYPE, SoundList, AudioSourceList, GameUtils, _dec, _class, _crd, ccclass, property, FG_01_PREFAB_NAME, FG_02_PREFAB_NAME, Fg_UI_Component;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        constructor() {
          var _this;

          super(...arguments);
          _this = this;
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

          this.spineFreeBackKeyFrameEvtHandler = function () {
            if ((arguments.length <= 0 ? undefined : arguments[0]) == 'out') {
              var opacity = _this._targetSpine.node.getComponent(UIOpacity);

              tween(opacity).to(0.46, {
                opacity: 0
              }).call(() => {
                if (_this._freeBackOutAniRunning) {
                  _this._freeBackOutAniRunning = false;
                  _this.callBackFreeBackFinish == null || _this.callBackFreeBackFinish();
                }

                _this.resetData();

                opacity.opacity = 255;
              }).start();
            }
          };

          this.clickHandler = /*#__PURE__*/_asyncToGenerator(function* () {
            _this.node.off(Node.EventType.TOUCH_START, _this.clickHandler); //--20250610


            if (_this._uiTweenInRunning) {
              _this.playFGUILoopAni(); //await GameUtils.Defer(1000);//--等1秒,讓spine的loop


              yield (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                error: Error()
              }), GameUtils) : GameUtils).DeferByTweenPromise(1000 / 1000); //--等1秒,讓spine的loop

              _this._uiTweenInRunning = false; // 手動 resolve 掉原本 playFgFadeInOut() 裡的 promise

              _this._externalResolve == null || _this._externalResolve();
              _this._externalResolve = undefined;
            } else {
              console.log('clickHandler: finish_in_uiTweenInRunning_during_looping'); //this._dirtyLockUIClick = false;
              //--不需要了..直接提早進入退場

              /**
               * 這邊是要做完整個進場+loop後才會resolve掉promise
               * 當玩家click的時候,
               * 1.還沒做完進場就直接loop 1秒 resolve掉promise(外面流程做退場控制)
               * 2.已經做完進場,但還在loop中,就直接resolve掉promise(外面流程做退場控制)
               */
              //this.callBackForUIClick?.();//--播放兩個前後光圈的轉場

              _this._externalResolve == null || _this._externalResolve();
              _this._externalResolve = undefined;
            }
          });
        }

        set transitionState(value) {
          this._transitionState = value;
        }

        init() {
          this._currentSpineNodePrefabId = '';
          this.node.active = false;
        }

        changeFgUITargetForCamp(camp) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve, reject) {
              if (_this2._camp == camp) {
                resolve();
              } else {
                _this2.node.active = true;
                var comps;

                if (camp == 0) {
                  _this2._currentSpineNodePrefabId = FG_01_PREFAB_NAME;
                } else {
                  _this2._currentSpineNodePrefabId = FG_02_PREFAB_NAME;
                }

                var targetPrefabNode = yield _this2.createSpineNodeUI(_this2._currentSpineNodePrefabId);
                var currentLanguageKey = (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
                  error: Error()
                }), Localization) : Localization).instance.currentLangKey;
                var localizationSpine = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                  error: Error()
                }), FindComponent) : FindComponent).findComponentInChildren(targetPrefabNode, _crd && LocalizationSpine === void 0 ? (_reportPossibleCrUseOfLocalizationSpine({
                  error: Error()
                }), LocalizationSpine) : LocalizationSpine);

                if (localizationSpine) {
                  yield localizationSpine.loadAllSpine(currentLanguageKey); //targetPrefabNode.active = true;
                }

                var localizationLabelComponent = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                  error: Error()
                }), FindComponent) : FindComponent).findComponentInChildren(targetPrefabNode, _crd && LocalizationLabel === void 0 ? (_reportPossibleCrUseOfLocalizationLabel({
                  error: Error()
                }), LocalizationLabel) : LocalizationLabel);

                if (localizationLabelComponent) {
                  var t = (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
                    error: Error()
                  }), Localization) : Localization).instance.t.bind((_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
                    error: Error()
                  }), Localization) : Localization).instance);
                  localizationLabelComponent.updateLabel(t);
                }

                var targetSpineUIComponent = _this2.initSpineUI(targetPrefabNode, camp);

                _this2._targetSpine = targetSpineUIComponent;
                comps = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                  error: Error()
                }), FindComponent) : FindComponent).findALLCompsInChildren(targetPrefabNode, Label);
                _this2._fgTimes_Label = _this2.getLabelComps(comps, 'fnt_FG_freespins');
                _this2._fgResult_Label = _this2.getLabelComps(comps, 'fnt_FreeBack_settle');
                _this2._fgTimes_Label.node.active = false;
                _this2._fgResult_Label.node.active = false;
                _this2._camp = camp;
                resolve();
              }
            }));
          })();
        }

        setFgResultLabel(value) {
          this._fgResult_Label.string = value.numberComma();
        } //-FG轉場次數面板/結算分數面板的進場


        playFgFadeInOut() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            //console.log('fg_ui_component_playFgFadeInOut:', this._transitionState);
            //-_fadeOutIsRunning
            _this3._uiTweenInRunning = true;
            _this3._isUIlooping = false;
            _this3.node.active = true;

            _this3.node.on(Node.EventType.TOUCH_START, _this3.clickHandler);

            _this3._targetSpine.node.getComponent(UIOpacity).opacity = 255;
            _this3._targetSpine.node.active = true;
            var currentCampSoundAppear;

            if (_this3._transitionState == (_crd && TransitionsState === void 0 ? (_reportPossibleCrUseOfTransitionsState({
              error: Error()
            }), TransitionsState) : TransitionsState).IN) {
              _this3._fgTimes_Label.node.active = true;
              currentCampSoundAppear = _this3._camp == 0 ? (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                error: Error()
              }), SoundList) : SoundList).FgEnterPageIn1 : (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                error: Error()
              }), SoundList) : SoundList).FgEnterPageIn2;
            } else {
              _this3._fgResult_Label.node.active = true;
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

            return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve, reject) {
              _this3._externalResolve = resolve;

              try {
                yield _this3.customSpinePlay(); //--這個做完就已經完全彈出來了

                _this3._uiTweenInRunning = false;
                yield _this3.playFGUILoopAni(); //--這個2sec
                //await GameUtils.Defer(2000);//--等1秒,讓spine的loop

                yield (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                  error: Error()
                }), GameUtils) : GameUtils).DeferByTweenPromise(2000 / 1000); //--等1秒,讓spine的loop

                _this3._externalResolve == null || _this3._externalResolve();
                _this3._externalResolve = undefined;
              } catch (e) {
                _this3._externalResolve == null || _this3._externalResolve();
                _this3._externalResolve = undefined;
                reject(e);
              }
            }));
          })();
        } //-FG轉場次數面板/結算分數面板的退場


        playFgFadeOut() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            if (_this4.node.hasEventListener(Node.EventType.TOUCH_START)) {
              _this4.node.off(Node.EventType.TOUCH_START, _this4.clickHandler);
            }

            var inOutKey = _this4._transitionState == (_crd && TransitionsState === void 0 ? (_reportPossibleCrUseOfTransitionsState({
              error: Error()
            }), TransitionsState) : TransitionsState).IN ? 'freestart_out' : 'freeback_out'; //console.log('playFgFadeOut:', inOutKey);

            if (inOutKey == 'freeback_out') {
              _this4._freeBackOutAniRunning = true;
            }

            _this4._targetSpine.playAni(inOutKey); //--spineFreeBackKeyFrameEvtHandler退場完接tween

          })();
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
            var spineNode = (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
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
          var spineComponent;
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

        playFGUILoopAni() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            if (_this5._targetSpine) {
              var inOutKey = _this5._transitionState == (_crd && TransitionsState === void 0 ? (_reportPossibleCrUseOfTransitionsState({
                error: Error()
              }), TransitionsState) : TransitionsState).IN ? 'freestart_loop' : 'freeback_loop';
              _this5._isUIlooping = true;
              yield _this5._targetSpine.playAniInPromise(inOutKey);
              _this5._isUIlooping = false;
            }
          })();
        }
        /**
         * FG轉場次數面板/結算分數面板的退場的keyframe事件
         * 準備收掉面板
         * PS--要播放 freestart_out 或 freeback_out 的時候,會觸發這個事件
         * call playFgFadeOut
         */


        customSpinePlay() {
          return new Promise((resolve, reject) => {
            var spine = this._targetSpine.spine;

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


            var inOutKey = this._transitionState == (_crd && TransitionsState === void 0 ? (_reportPossibleCrUseOfTransitionsState({
              error: Error()
            }), TransitionsState) : TransitionsState).IN ? 'freestart_in' : 'freeback_in';
            var inOutKeySub = this._transitionState == (_crd && TransitionsState === void 0 ? (_reportPossibleCrUseOfTransitionsState({
              error: Error()
            }), TransitionsState) : TransitionsState).IN ? 'freestart_in_sub' : 'freeback_in_sub';
            spine.setAnimation(0, inOutKey, false);
            spine.setAnimation(1, inOutKeySub, false);
            spine.setCompleteListener(this._onCustomSpineCompleteHandler);
          });
        }

        getLabelComps(value, str) {
          for (var comp of value) {
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
//# sourceMappingURL=b66794732212b8fae16b392e51d6629144ee8295.js.map