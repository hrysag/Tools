System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, v3, Label, UITransform, sp, SpineAniPlayInfoList, ContainerWholeBehavior, GameUtilsTools, GameState, GlobalAccessReader, GameGlobalKeys, AsyncScope, SoundList, AudioSourceList, AudioManager, SOUND_TYPE, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, ANIMATION_NGUI_TYPE, LOG_TITLE, SIGNAL_KEY, NG_UI_Display;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIBasicGUI(extras) {
    _reporterNs.report("IBasicGUI", "../IBasicGUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineAniPlayInfoList(extras) {
    _reporterNs.report("SpineAniPlayInfoList", "db://assets/Game1016/Script/MyUtils/AnimationSystemV2/Components/AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineCtrlPropDef(extras) {
    _reporterNs.report("SpineCtrlPropDef", "db://assets/Game1016/Script/MyUtils/AnimationSystemV2/Components/AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfContainerWholeBehavior(extras) {
    _reporterNs.report("ContainerWholeBehavior", "../../../MyUtils/BasicShowContainerManager/Component/ContainerWholeBehavior", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtilsTools(extras) {
    _reporterNs.report("GameUtilsTools", "../../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalAccessReader(extras) {
    _reporterNs.report("GlobalAccessReader", "../../../DefinitionGameData1016/AccessDefs/GlobalAccess", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameGlobalKeys(extras) {
    _reporterNs.report("GameGlobalKeys", "../../../DefinitionGameData1016/GameGlobalData1016", _context.meta, extras);
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
      Node = _cc.Node;
      v3 = _cc.v3;
      Label = _cc.Label;
      UITransform = _cc.UITransform;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      SpineAniPlayInfoList = _unresolved_2.SpineAniPlayInfoList;
    }, function (_unresolved_3) {
      ContainerWholeBehavior = _unresolved_3.ContainerWholeBehavior;
    }, function (_unresolved_4) {
      GameUtilsTools = _unresolved_4.GameUtilsTools;
      GameState = _unresolved_4.GameState;
    }, function (_unresolved_5) {
      GlobalAccessReader = _unresolved_5.GlobalAccessReader;
    }, function (_unresolved_6) {
      GameGlobalKeys = _unresolved_6.GameGlobalKeys;
    }, function (_unresolved_7) {
      AsyncScope = _unresolved_7.AsyncScope;
    }, function (_unresolved_8) {
      SoundList = _unresolved_8.SoundList;
      AudioSourceList = _unresolved_8.AudioSourceList;
    }, function (_unresolved_9) {
      AudioManager = _unresolved_9.AudioManager;
      SOUND_TYPE = _unresolved_9.SOUND_TYPE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f8ab2x+041O7o3Cn+f5ySGr", "NG_UI_Display", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'v3', 'Label', 'UITransform', 'sp', 'game']);

      //import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
      ({
        ccclass,
        property
      } = _decorator);
      ANIMATION_NGUI_TYPE = {
        RS_OPEN_DOOR: 'door_L_Open',
        RS_CLOSE_DOOR: 'door_L_Close',
        //---關門用這個動畫
        RS_DEFAULT_DOOR: 'door_L_Close_Default',
        FG_OPEN_DOOR: 'door_R_Open',
        FG_CLOSE_DEFAULT_DOOR: 'door_R_Close_Default',
        RS_COUNT: 'ReSpin_Num',
        RS_DEFAULT_COUNT: 'ReSpin_Num_Default',
        FG_COUNT: 'Freespin_Num',
        FG_DEFAULT_COUNT: 'Freespin_Default'
      };
      LOG_TITLE = 'NG_UI_Display';
      SIGNAL_KEY = 'NG_UI_CTRL_SIGNAL';

      _export("NG_UI_Display", NG_UI_Display = (_dec = ccclass('NG_UI_Display'), _dec2 = property({
        type: _crd && SpineAniPlayInfoList === void 0 ? (_reportPossibleCrUseOfSpineAniPlayInfoList({
          error: Error()
        }), SpineAniPlayInfoList) : SpineAniPlayInfoList,
        displayName: 'SpineAniPlayInfoList',
        visible: true,
        tooltip: '播放資料清單'
      }), _dec3 = property({
        type: sp.Skeleton,
        visible: true,
        displayName: 'fuckingArts',
        tooltip: '美術太天才了大開眼界'
      }), _dec4 = property({
        type: Node,
        visible: true,
        displayName: 'ReSpinCountNode',
        tooltip: 'ReSpinCount節點'
      }), _dec5 = property({
        type: Node,
        visible: true,
        displayName: 'FGCountNode',
        tooltip: 'FGCount節點'
      }), _dec(_class = (_class2 = class NG_UI_Display extends (_crd && ContainerWholeBehavior === void 0 ? (_reportPossibleCrUseOfContainerWholeBehavior({
        error: Error()
      }), ContainerWholeBehavior) : ContainerWholeBehavior) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_animationPlayInfoList", _descriptor, this);

          _initializerDefineProperty(this, "_doorSpine", _descriptor2, this);

          _initializerDefineProperty(this, "_reSpinCountNode", _descriptor3, this);

          _initializerDefineProperty(this, "_fgCountNode", _descriptor4, this);

          this._labelReSpinCount = null;
          this._labelFGCount = null;
          this._dirtyFlag = false;
          this._currentGameState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NULL;
          this._resolvePromise = void 0;
          this._isRsOpen = false;
          this._isFGOpen = false;
          this._countRS = 0;
          this._countFG = 0;
          this._async = void 0;
        }

        onLoad() {
          if (this._dirtyFlag) return;
          this._dirtyFlag = true;
        }

        start() {
          this.init();
        }

        init() {
          if (!this._dirtyFlag) return;
          this._labelReSpinCount = this._reSpinCountNode.getComponent(Label);
          this._labelFGCount = this._fgCountNode.getComponent(Label);
          this.setReSpinCount(0);
          this.setFGCount(0);
          this._async = (_crd && AsyncScope === void 0 ? (_reportPossibleCrUseOfAsyncScope({
            error: Error()
          }), AsyncScope) : AsyncScope).getInstance();
          super.init();
        }

        reset() {
          this._isRsOpen = false;
          this._isFGOpen = false;
          this._countRS = 0;
          this._countFG = 0;
        }

        findAndGetPlayData(aniState) {
          for (const aniData of this._animationPlayInfoList.clipsInfo) {
            if (aniData.targetName === aniState) {
              return aniData;
            }
          }

          return null;
        } //---給控制器去呼叫使用的(遊戲狀態改變時呼叫)-備用


        changeGameMode(gameState) {
          this._currentGameState = gameState;
        }

        closeContainerTween() {
          const gameState = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).GameState);

          if (gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME || gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NULL) {
            super.closeContainerTween();
          }
        }

        openContainerTween() {
          const gameState = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).GameState);

          if (gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL) {
            super.openContainerTween();
          }
        }
        /**
         * TrackEntry--->
         * export interface AnimationStateListener {
                    start(entry: TrackEntry): void;
                    interrupt(entry: TrackEntry): void;
                    end(entry: TrackEntry): void;
                    dispose(entry: TrackEntry): void;
                    complete(entry: TrackEntry): void;
                    event(entry: TrackEntry, event: Event): void;
                }
            check that--->
            https://github.com/cocos/cocos-engine/blob/10ec595/cocos/spine/skeleton.ts#L1801
            PS 它傳出來的trackEntry是sp.spine.TrackEntry..但很尷尬就沒有lister的定義給你??
            trackEntry.listener===>它根本不給你...乖乖用spine最上層的接口去掛事件吧
         * @returns 
         */
        //private playSpinePromise(aniState: SpineCtrlPropDef,duration?:number): Promise<{ timedOut: boolean }> {


        playSpinePromise(aniState, duration) {
          let entry;
          let loops = 0;

          if (duration) {
            var _this$_doorSpine$find;

            const targetDuration = (_this$_doorSpine$find = this._doorSpine.findAnimation(aniState.targetName)) == null ? void 0 : _this$_doorSpine$find.duration;

            if (targetDuration) {
              if (targetDuration != duration) {
                aniState.timeScale = targetDuration / duration;
              }
            }
          } //return new Promise<{ timedOut: boolean }>((resolve, reject) => {


          return new Promise((resolve, reject) => {
            entry = this._doorSpine.setAnimation(aniState.trackIndex, aniState.targetName, aniState.loop);
            if (aniState.timeScale != null) entry.timeScale = aniState.timeScale;

            const completeLister = () => {
              if (++loops >= aniState.repeatCount) {
                this._doorSpine.setCompleteListener(null); //resolve({ timedOut: false });


                resolve();
              }
            };

            this._doorSpine.setCompleteListener(completeLister); //entry.listener.complete = completeLister;
            //entry.listener.end = endLister;

          });
        } //--保底promise--


        playSpineWithTimeout(aniState, timeOut, duration) {
          return (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).withTimeout(this.playSpinePromise(aniState, duration), timeOut, {
            anim: aniState.targetName
          }, `playSpineWithTimeout-${aniState.targetName}`, true);
        }
        /**
         * 
         *  private playSpineWithTimeout(aniState: SpineCtrlPropDef, timeOut: number,duration?:number): any {
            
            return GameUtilsTools.withTimeout<{ timedOut: boolean }, { anim: string }>(
                this.playSpinePromise(aniState,duration),
                timeOut,
                { anim: aniState.targetName },
                `playSpineWithTimeout-${aniState.targetName}`,
                true,
                { timedOut: true }
            )
        }
         */


        async openReSpinCountUI() {
          //--開門:0.5sec
          if (this._isRsOpen) return Promise.resolve();
          const timeout = 0.5;
          const data = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.RS_OPEN_DOOR);

          if (data) {
            const gamestate = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
              error: Error()
            }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).GameState);
            let dt = 0;

            if (gamestate == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME) {
              dt = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
                error: Error()
              }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
                error: Error()
              }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList).get(cfg => {
                var _cfg$other;

                return (_cfg$other = cfg.other) == null ? void 0 : _cfg$other.fg_openCountBoard;
              });
            } else {
              dt = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
                error: Error()
              }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
                error: Error()
              }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList).get(cfg => {
                var _cfg$other2;

                return (_cfg$other2 = cfg.other) == null ? void 0 : _cfg$other2.openCountBoard;
              });
            } //const dt = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.other?.openCountBoard);


            this._isRsOpen = true;

            const signal = this._async.createAbortScope(SIGNAL_KEY);

            this._doorSpine.timeScale = 1; //--20260209-FIX-開門動畫有被改過,所以每次開門前先還原

            const outCancel = value => {
              //--取消使用-直接開門--(因為美術沒有一個是整個打開的狀態,這邊就加速處理到最後一格)
              this._doorSpine.timeScale = 100; //--直接加快播到最後
              //this._doorSpine.clearTrack(data.trackIndex);
              //const defaultRSDoor = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.RS_DEFAULT_DOOR);
              //this._doorSpine.setAnimation(defaultRSDoor.trackIndex, defaultRSDoor.targetName, false);
            };

            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).frame_open, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
              error: Error()
            }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
              error: Error()
            }), AudioSourceList) : AudioSourceList).BtnAS);

            const p = this._async.withTimeout(this.playSpinePromise(data, dt), timeout, //--race time
            {
              opt: 'open_respin_count_ui',
              tag: LOG_TITLE
            }, 'NG_UI_Display:openReSpinCountUI', true, null, signal, SIGNAL_KEY, outCancel);

            const flag = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
              error: Error()
            }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).InterruptProcess); //if(this._isInterrupting)

            if (flag) {
              console.log();

              this._async.abortAll(SIGNAL_KEY);
            }

            const result = await p.promise;
          }
        }

        async closeReSpinCountUI() {
          if (!this._isRsOpen) return Promise.resolve();
          const timeout = 0.5;
          const data = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.RS_CLOSE_DOOR);

          if (data) {
            this._isRsOpen = false;
            const dt = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
              error: Error()
            }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList).get(cfg => {
              var _cfg$other3;

              return (_cfg$other3 = cfg.other) == null ? void 0 : _cfg$other3.openCountBoard;
            });

            const signal = this._async.createAbortScope(SIGNAL_KEY);

            const outCancel = value => {//--取消使用-直接開門--(因為美術沒有一個是整個打開的狀態,這邊就加速處理到最後一格)
              //this._doorSpine.timeScale=100;//--直接加快播到最後
              //this._doorSpine.clearTrack(data.trackIndex);
              //const defaultRSDoor = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.RS_DEFAULT_DOOR);
              //this._doorSpine.setAnimation(defaultRSDoor.trackIndex, defaultRSDoor.targetName, false);
            };

            const p = this._async.withTimeout(this.playSpinePromise(data, dt), timeout, //--race time
            {
              opt: 'closeReSpinCountUI_ui',
              tag: LOG_TITLE
            }, 'NG_UI_Display:closeReSpinCountUI', true, null, signal, SIGNAL_KEY, outCancel);

            const flag = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
              error: Error()
            }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).InterruptProcess); //if(this._isInterrupting)

            if (flag) {
              console.log();

              this._async.abortAll(SIGNAL_KEY);
            }

            const result = await p.promise; //const result = await this.playSpineWithTimeout(data, 0.5);
            //console.log('check_result race', result);
            //GameUtilsTools.debugLog(LOG_TITLE, 'closeReSpinCountUI', { result });
          }
        }

        async openFGCountUI() {
          if (this._isFGOpen) return Promise.resolve();
          const timeout = 0.5;
          const data = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.FG_OPEN_DOOR);

          if (data) {
            this._isFGOpen = true; //const result = await this.playSpineWithTimeout(data, 0.5);

            const dt = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
              error: Error()
            }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList).get(cfg => {
              var _cfg$other4;

              return (_cfg$other4 = cfg.other) == null ? void 0 : _cfg$other4.openCountBoard;
            });

            const signal = this._async.createAbortScope(SIGNAL_KEY);

            this._doorSpine.timeScale = 1;

            const outCancel = value => {
              //--取消使用-直接開門--(因為美術沒有一個是整個打開的狀態,這邊就加速處理到最後一格)
              this._doorSpine.timeScale = 100; //--直接加快播到最後
              //this._doorSpine.clearTrack(data.trackIndex);
              //const defaultRSDoor = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.RS_DEFAULT_DOOR);
              //this._doorSpine.setAnimation(defaultRSDoor.trackIndex, defaultRSDoor.targetName, false);
            };

            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).frame_open, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
              error: Error()
            }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
              error: Error()
            }), AudioSourceList) : AudioSourceList).BtnAS);

            const p = this._async.withTimeout(this.playSpinePromise(data, dt), timeout, //--race time
            {
              opt: 'openFGCountUI_ui',
              tag: LOG_TITLE
            }, 'NG_UI_Display:openFGCountUI', true, null, signal, SIGNAL_KEY, outCancel);

            const flag = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
              error: Error()
            }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).InterruptProcess); //if(this._isInterrupting)

            if (flag) {
              this._async.abortAll(SIGNAL_KEY);
            }

            const result = await p.promise; //GameUtilsTools.debugLog(LOG_TITLE, 'openFGCountUI', { result });
          }
        } //--美術沒做這個動畫


        async closeFGCountUI() {
          if (!this._isFGOpen) return Promise.resolve();
          const timeout = 0.5;
          const data = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.FG_CLOSE_DEFAULT_DOOR);

          if (data) {
            const dt = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
              error: Error()
            }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList).get(cfg => {
              var _cfg$other5;

              return (_cfg$other5 = cfg.other) == null ? void 0 : _cfg$other5.openCountBoard;
            });
            this._isFGOpen = false;

            const signal = this._async.createAbortScope(SIGNAL_KEY);

            this._doorSpine.timeScale = 1;

            const outCancel = value => {
              //--取消使用-直接開門--(因為美術沒有一個是整個打開的狀態,這邊就加速處理到最後一格)
              console.log('closeFGCountUI outCancel', value);
              this._doorSpine.timeScale = 100; //--直接加快播到最後
              //this._doorSpine.clearTrack(data.trackIndex);
              //const defaultRSDoor = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.RS_DEFAULT_DOOR);
              //this._doorSpine.setAnimation(defaultRSDoor.trackIndex, defaultRSDoor.targetName, false);
            };

            const p = this._async.withTimeout(this.playSpinePromise(data, dt), timeout, //--race time
            {
              opt: 'closeFGCountUI_ui',
              tag: LOG_TITLE
            }, 'NG_UI_Display:closeFGCountUI', true, null, signal, SIGNAL_KEY, outCancel);

            const flag = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
              error: Error()
            }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).InterruptProcess); //if(this._isInterrupting)

            if (flag) {
              this._async.abortAll(SIGNAL_KEY);
            }

            const result = await p.promise; //const result = await this.playSpineWithTimeout(data, 0.5);
            //GameUtilsTools.debugLog(LOG_TITLE, 'closeFGCountUI', { result });
          }
        }

        closeAllUI() {
          this._countRS = 0;
          this._countFG = 0;
          this.setReSpinCount();
          this.setFGCount();
          const defaultRSDoor = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.RS_DEFAULT_DOOR);

          this._doorSpine.setAnimation(defaultRSDoor.trackIndex, defaultRSDoor.targetName, defaultRSDoor.loop);

          const defaultFGDoor = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.FG_CLOSE_DEFAULT_DOOR);

          this._doorSpine.setAnimation(defaultFGDoor.trackIndex, defaultFGDoor.targetName, defaultFGDoor.loop);

          this.reset(); //const defaultFGCount = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.FG_DEFAULT_COUNT);
          //this._doorSpine.setAnimation(defaultFGCount.trackIndex, defaultFGCount.targetName, defaultFGCount.loop);
          //const defaultRSCount = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.RS_DEFAULT_COUNT);
          //this._doorSpine.setAnimation(defaultRSCount.trackIndex, defaultRSCount.targetName, defaultRSCount.loop);
          //this._aniController.playAni({aniState:ANIMATION_NGUI_TYPE.CLOSE_FG_COUNT});
        }

        async triggerFGCountUp(value) {
          const timeout = 0.5;
          this.setFGCount(value);
          const data = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.FG_COUNT);

          if (data) {
            const gamestate = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
              error: Error()
            }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).GameState);
            let dt = 0;

            if (gamestate == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME) {
              dt = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
                error: Error()
              }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
                error: Error()
              }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList).get(cfg => {
                var _cfg$other6;

                return (_cfg$other6 = cfg.other) == null ? void 0 : _cfg$other6.fg_countBoard;
              });
            } else {
              dt = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
                error: Error()
              }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
                error: Error()
              }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList).get(cfg => {
                var _cfg$other7;

                return (_cfg$other7 = cfg.other) == null ? void 0 : _cfg$other7.countBoard;
              });
            } //const dt = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.other?.countBoard);
            //const result = await this.playSpineWithTimeout(data, 0.5);


            const outCancel = value => {
              //--取消使用-直接開門--(因為美術沒有一個是整個打開的狀態,這邊就加速處理到最後一格)
              console.log('otriggerFGCountUp Cancel', value); //this._doorSpine.clearTrack(data.trackIndex);
            };

            const signal = this._async.createAbortScope(SIGNAL_KEY);

            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).number_increase, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
              error: Error()
            }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
              error: Error()
            }), AudioSourceList) : AudioSourceList).BtnAS);

            const p = this._async.withTimeout(this.playSpinePromise(data, dt), timeout, //--race time
            {
              opt: 'triggerFGCountUp',
              tag: LOG_TITLE
            }, 'NG_UI_Display:triggerFGCountUp', true, null, signal, SIGNAL_KEY, outCancel);

            const flag = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
              error: Error()
            }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).InterruptProcess);

            if (flag) {
              this._async.abortAll(SIGNAL_KEY);
            }

            const result = await p.promise; //GameUtilsTools.debugLog(LOG_TITLE, 'triggerFGCountUp', { result });
          } //this._aniController.playAni({ aniState: ANIMATION_NGUI_TYPE.FG_NUM_UP });
          //return Promise.resolve();
          //await this._aniController.playAniInPromise({ aniState: ANIMATION_NGUI_TYPE.FG_NUM_UP })
          //---測試用<強制愈時resolve>  

          /*
          await GameUtilsTools.withTimeout(
              this._aniController.playAniInPromise({ aniState: ANIMATION_NGUI_TYPE.FG_NUM_UP }),
              2,
              { opt: 'play_fg_count_up', tag: this._aniController.node.name },
              'NG_UI_Display:triggerFGCountUp',
              false
          )*/

        } //--這邊外部等粒子飛到定位後再呼叫


        async triggerReSpinCountUp(value) {
          //--數字跳0.4sec
          const timeout = 0.4;
          this.setReSpinCount(value);
          const data = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.RS_COUNT);

          if (data) {
            const dt = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
              error: Error()
            }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList).get(cfg => {
              var _cfg$other8;

              return (_cfg$other8 = cfg.other) == null ? void 0 : _cfg$other8.countBoard;
            }); //const result = await this.playSpineWithTimeout(data, 0.5,dt);

            const outCancel = value => {
              //--取消使用-直接開門--(因為美術沒有一個是整個打開的狀態,這邊就加速處理到最後一格)
              console.log('openReSpinCountUI outCancel', value); //this._doorSpine.clearTrack(data.trackIndex);
            };

            const signal = this._async.createAbortScope(SIGNAL_KEY);

            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).number_increase, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
              error: Error()
            }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
              error: Error()
            }), AudioSourceList) : AudioSourceList).BtnAS);
            this.playVoice();

            const p = this._async.withTimeout(this.playSpinePromise(data, dt), timeout, //--race time
            {
              opt: 'triggerReSpinCountUp',
              tag: LOG_TITLE
            }, 'NG_UI_Display:triggerReSpinCountUp', true, null, signal, SIGNAL_KEY, outCancel);

            const flag = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
              error: Error()
            }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).InterruptProcess);

            if (flag) {
              this._async.abortAll(SIGNAL_KEY);
            }

            const result = await p.promise; //GameUtilsTools.debugLog(LOG_TITLE, 'triggerReSpinCountUp', { result });
          }
        }

        playVoice() {
          let voiceList = [(_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).Respin_06, (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).Respin_07];
          const randomIndex = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).getRangeRandomInt(0, voiceList.length - 1);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound(voiceList[randomIndex], (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
            error: Error()
          }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).RsVs);
        }

        countRS(value) {
          this._countRS += value;
          return this._countRS;
        }

        countFG(value) {
          this._countFG += value;
          return this._countFG;
        }

        setReSpinCount(value) {
          //this._countRS += value;
          if (value) this.countRS(value);
          this._labelReSpinCount.string = this._countRS.numberComma();
        }

        setFGCount(value) {
          if (value) this.countFG(value); //this._countFG += value;

          this._labelFGCount.string = this._countFG.numberComma();
        }

        getFGCountWPos() {
          let parentUiTransform = this._fgCountNode.parent.getComponent(UITransform);

          if (parentUiTransform) {
            let lPos = this._fgCountNode.position.clone();

            let wPos = parentUiTransform.convertToWorldSpaceAR(lPos);
            return wPos;
          }

          return v3(0, 0, 0);
        }

        getReSpinCountWPos() {
          let parentUiTransform = this._reSpinCountNode.parent.getComponent(UITransform);

          if (parentUiTransform) {
            let lPos = this._reSpinCountNode.position.clone();

            let wPos = parentUiTransform.convertToWorldSpaceAR(lPos);
            return wPos;
          }

          return v3(0, 0, 0);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_animationPlayInfoList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new (_crd && SpineAniPlayInfoList === void 0 ? (_reportPossibleCrUseOfSpineAniPlayInfoList({
            error: Error()
          }), SpineAniPlayInfoList) : SpineAniPlayInfoList)();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_doorSpine", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_reSpinCountNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_fgCountNode", [_dec5], {
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
//# sourceMappingURL=5ef0349bb1423d33902f5a73808e569773edaca5.js.map