System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Label, UIOpacity, tween, Tween, BasicGameBoardUI, GameGlobalKeys, GameState, GameUtilsTools, GlobalAccessReader, AsyncScope, SoundList, AudioSourceList, AudioManager, SOUND_TYPE, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, SIGNAL_KEY, ccclass, property, FG_BOARD_ANI_MAP, DEBUG_LOG_TITLE, FGBoardUI1016;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasicGameBoardUI(extras) {
    _reporterNs.report("BasicGameBoardUI", "../../MyUtils/BasicFGUIBoard/BasicGameBoardUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameGlobalKeys(extras) {
    _reporterNs.report("GameGlobalKeys", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtilsTools(extras) {
    _reporterNs.report("GameUtilsTools", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalAccessReader(extras) {
    _reporterNs.report("GlobalAccessReader", "../../DefinitionGameData1016/AccessDefs/GlobalAccess", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAsyncScope(extras) {
    _reporterNs.report("AsyncScope", "../../MyUtils/AsyncScope/AsyncScope", _context.meta, extras);
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
      Node = _cc.Node;
      Label = _cc.Label;
      UIOpacity = _cc.UIOpacity;
      tween = _cc.tween;
      Tween = _cc.Tween;
    }, function (_unresolved_2) {
      BasicGameBoardUI = _unresolved_2.BasicGameBoardUI;
    }, function (_unresolved_3) {
      GameGlobalKeys = _unresolved_3.GameGlobalKeys;
      GameState = _unresolved_3.GameState;
      GameUtilsTools = _unresolved_3.GameUtilsTools;
    }, function (_unresolved_4) {
      GlobalAccessReader = _unresolved_4.GlobalAccessReader;
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

      _cclegacy._RF.push({}, "c5328jOWxtGiI4x4C2d5MOT", "FGBoardUI1016", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Button', 'Label', 'EventTouch', 'Game', 'UIOpacity', 'tween', 'Tween']);

      //import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
      SIGNAL_KEY = 'FG_UI_CTRL_SIGNAL';
      ({
        ccclass,
        property
      } = _decorator);
      FG_BOARD_ANI_MAP = {
        FG_In: 'toFG_In',
        FG_Out: 'toFG_Out',
        FG_Loop: 'toFG_Loop',
        BACK_NG_In: 'toNG_In',
        BACK_NG_Out: 'toNG_Out',
        BACK_NG_Loop: 'toNG_Loop'
      };
      DEBUG_LOG_TITLE = 'FGBoardUI1016';

      _export("FGBoardUI1016", FGBoardUI1016 = (_dec = ccclass('FGBoardUI1016'), _dec2 = property({
        type: Node,
        visible: true,
        displayName: '透明按鈕',
        tooltip: "設定此物件的按鈕物件"
      }), _dec3 = property({
        type: Node,
        visible: true,
        displayName: '顯示次數LabelNode',
        tooltip: "設定此物件的動畫物件"
      }), _dec4 = property({
        type: Node,
        visible: true,
        displayName: '顯示次數LabelAddNode',
        tooltip: "刷光文字??!!"
      }), _dec5 = property({
        type: Node,
        visible: true,
        displayName: '顯示分數LabelNode',
        tooltip: "設定此物件的動畫物件"
      }), _dec6 = property({
        type: Node,
        visible: true,
        displayName: '顯示分數LabelAddNode',
        tooltip: "刷光文字??!!"
      }), _dec7 = property({
        type: UIOpacity,
        visible: true,
        displayName: '<跳過>UI淡入淡出',
        tooltip: "click跳過時的淡入淡出效果"
      }), _dec(_class = (_class2 = class FGBoardUI1016 extends (_crd && BasicGameBoardUI === void 0 ? (_reportPossibleCrUseOfBasicGameBoardUI({
        error: Error()
      }), BasicGameBoardUI) : BasicGameBoardUI) {
        constructor() {
          super();
          /**
           *  const delay = GameUtilsTools.DeferByTweenPromiseWithCancel(t);
                   this._delayTweenCancel = delay.cancel;
                   await delay.promise; // 等待延遲完成
                   this._delayTweenCancel = null; // 清掉
           */

          _initializerDefineProperty(this, "_btnNode", _descriptor, this);

          _initializerDefineProperty(this, "_labelTimesNode", _descriptor2, this);

          _initializerDefineProperty(this, "_labelAddTimesNode", _descriptor3, this);

          _initializerDefineProperty(this, "_labelScoreNode", _descriptor4, this);

          _initializerDefineProperty(this, "_labelAddScoreNode", _descriptor5, this);

          _initializerDefineProperty(this, "_skipUIOpacity", _descriptor6, this);

          this._labelPlayTimes = null;
          this._labelFXTPlayTimes = null;
          this._labelPlayScore = null;
          this._labelFXPlayScore = null;
          this._isGoIn = false;
          this._triggerGameState = null;
          //延遲動畫取消函式(for 延遲中斷時,阻斷tweenPromise resolve)
          this._resolveDelayOnCancel = void 0;
          this._isClosing = false;
          this._closingPromise = null;
          this._closeRequested = false;
          this._closeOncePromise = null;
          this._playBoardOutCallBack = null;
          //--20250917新增(觸發退場的時候呼叫的callback)
          this._isInLoop = false;
          this._loopOncePromise = null;
          this._async = void 0;
          this._loopTimeForState = 0;
        }

        testMode() {
          /*
          BasicGameGlobalData.getInstance<GameGlobalData>().setGlobalData(
              GameGlobalKeys.GameState, GameState.FREE_GAME
          );*/
          this.openFGUIBoard(10);
        }

        init() {
          var _this$_iAnimationCont;

          (_this$_iAnimationCont = this._iAnimationController) == null || _this$_iAnimationCont.init();
          this._labelPlayTimes = this._labelTimesNode.getComponent(Label);
          this._labelFXTPlayTimes = this._labelAddTimesNode.getComponent(Label);
          this._labelPlayScore = this._labelScoreNode.getComponent(Label);
          this._labelFXPlayScore = this._labelAddScoreNode.getComponent(Label);
          this.setFGPlayTimes(0);
          this.setFGPlayScore(0);
          this.goBackToDefault();
          this.node.active = false;
          this._async = (_crd && AsyncScope === void 0 ? (_reportPossibleCrUseOfAsyncScope({
            error: Error()
          }), AsyncScope) : AsyncScope).getInstance();
        }

        setResultLabel(value) {
          if (this._triggerGameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME) {
            this.setFGPlayTimes(value); //--進入FG
          } else if (this._triggerGameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL) {
            this.setFGPlayScore(value); //--離開FG
          }
        }

        setFGPlayTimes(value) {
          if (this._labelPlayTimes) this._labelPlayTimes.string = value.numberComma();
          if (this._labelFXTPlayTimes) this._labelFXTPlayTimes.string = value.numberComma();
        }

        setFGPlayScore(value) {
          if (this._labelPlayScore) this._labelPlayScore.string = value.numberComma();
          if (this._labelFXPlayScore) this._labelFXPlayScore.string = value.numberComma();
        }

        setBoardMode(state) {
          this._triggerGameState = state;
        }

        closeFGUIBoard() {
          var _this = this;

          return _asyncToGenerator(function* () {
            //--spine動畫0.6s
            var dt = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
              error: Error()
            }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList).get(cfg => {
              var _cfg$fg;

              return (_cfg$fg = cfg.fg) == null ? void 0 : _cfg$fg.closeBoard;
            });
            _this._closeRequested = true;
            if (_this._isClosing) return _this._closingPromise;

            _this.closeBtnActive();

            _this.forceCancelLoopDelay();

            var playKey = _this._triggerGameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME ? FG_BOARD_ANI_MAP.FG_Out : FG_BOARD_ANI_MAP.BACK_NG_Out;
            _this._isClosing = true;

            if (_this._playBoardOutCallBack) {
              try {
                _this._playBoardOutCallBack();
              } catch (err) {//console.warn('FGBoardUI1016 _playBoardOutCallBack error', err);
                //GameUtilsTools.debugLog(DEBUG_LOG_TITLE, 'playBoardOutCallBack', { err }, 'warn');
              }
            }

            var single = _this._async.createAbortScope(SIGNAL_KEY);

            var callbackWrapper = value => {
              _this.cancelBoardAni(true); //--20260209-new


              Tween.stopAllByTag(98);
              _this._skipUIOpacity.opacity = 0;
            };

            _this._closingPromise = _this.playBoardOut(playKey, dt).finally(() => {
              _this.node.active = false;
              _this._isClosing = false;
              _this._closingPromise = null; //this._closeRequested = false; 
            }); //--20260209-new

            tween(_this._skipUIOpacity).to(0.3, {
              opacity: 0
            }).call(() => {//this.node.active = true;
            }).tag(98).start();

            _this._async.registerCancelablePromise(SIGNAL_KEY, _this._closingPromise, callbackWrapper, single, SIGNAL_KEY);

            return _this._closingPromise;
          })();
        }

        openFGUIBoard(value, boardOutCallBack) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (value === void 0) {
              value = 0;
            }

            //--spine動畫0.75s
            var dt = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
              error: Error()
            }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList).get(cfg => {
              var _cfg$fg2;

              return (_cfg$fg2 = cfg.fg) == null ? void 0 : _cfg$fg2.openBoard;
            }); // 重置關閉狀態

            if (boardOutCallBack) _this2._playBoardOutCallBack = boardOutCallBack; //--20250917新增(觸發退場的時候呼叫的callback)

            _this2._closeRequested = false;
            _this2._closeOncePromise = null;
            _this2._loopOncePromise = null;
            _this2._isGoIn = true;
            _this2.node.active = true; //this.openBtnActive();

            var playKey = _this2._triggerGameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME ? FG_BOARD_ANI_MAP.FG_In : FG_BOARD_ANI_MAP.BACK_NG_In;
            var playSoundKey; //const dt = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.fg?.duringBoard);

            if (playKey == FG_BOARD_ANI_MAP.FG_In) {
              playSoundKey = (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                error: Error()
              }), SoundList) : SoundList).fgEnterPage_In;
              _this2._loopTimeForState = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
                error: Error()
              }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
                error: Error()
              }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList).get(cfg => {
                var _cfg$fg3;

                return (_cfg$fg3 = cfg.fg) == null ? void 0 : _cfg$fg3.duringBoardIn;
              });

              _this2.playVoiceIn();
            } else {
              playSoundKey = (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                error: Error()
              }), SoundList) : SoundList).fgExitPage_In;
              _this2._loopTimeForState = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
                error: Error()
              }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
                error: Error()
              }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList).get(cfg => {
                var _cfg$fg4;

                return (_cfg$fg4 = cfg.fg) == null ? void 0 : _cfg$fg4.duringBoardOut;
              });

              _this2.playVoiceOut();
            }

            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound(playSoundKey, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
              error: Error()
            }), SOUND_TYPE) : SOUND_TYPE).NORMAL, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
              error: Error()
            }), AudioSourceList) : AudioSourceList).RsAs);

            var signal = _this2._async.createAbortScope(SIGNAL_KEY);

            var playPromise = _this2.playBoardIn(value, {
              aniState: playKey
            }, dt); //--20260209-new


            tween(_this2._skipUIOpacity).delay(0.4).to(0.5, {
              opacity: 255
            }).call(() => {//this.node.active = true;
            }).tag(99).start();

            var callbackWrapper = value => {
              _this2.cancelBoardAni(false);

              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.stopSound([(_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                error: Error()
              }), AudioSourceList) : AudioSourceList).RsAs]); //--20260209-new

              Tween.stopAllByTag(99);
              _this2._skipUIOpacity.opacity = 255;
            };

            yield _this2._async.registerCancelablePromise(SIGNAL_KEY, playPromise, callbackWrapper, signal, SIGNAL_KEY); //--結束時關閉
            //AudioManager.instance.stopSound([AudioSourceList.RsAs]);

            _this2._isGoIn = false;

            if (_this2._closeRequested || _this2._isClosing) {
              yield _this2.requestCloseOnce();
              return;
            }

            var playLoopKey = _this2._triggerGameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME ? FG_BOARD_ANI_MAP.FG_Loop : FG_BOARD_ANI_MAP.BACK_NG_Loop; // 正常路徑：切入 Loop、等計時、然後一次性關閉

            yield _this2.ensureLoopThenClose(playLoopKey, _this2._loopTimeForState);
          })();
        }

        playVoiceOut() {
          var odds = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).RoundTotalOdds);
          var targetList;

          if (odds <= 15) {
            targetList = [(_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).FG_Out_01, (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).FG_Out_03, (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).FG_Out_04];
          } else {
            targetList = [(_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).FG_Out_05, (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).FG_Out_06, (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).FG_Out_07];
          }

          var randomIndex = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).getRangeRandomInt(0, targetList.length - 1);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound(targetList[randomIndex], (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
            error: Error()
          }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).Voice);
        }

        playVoiceIn() {
          var voiceList = [(_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).FG_In_01, (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).FG_In_02, (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).FG_In_03, (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).FG_In_04, (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).FG_In_05];
          var randomIndex = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
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
        /*
        //--待機<取消-改到由ensureLoopThenClose處理>
        public override async playBoardLoop(mode: PlaySelector = AnimationStateType.Loop): Promise<void> {
            this.cancelBoardAni(false);
            this._isInLoop = true;
            this.setPlayPromise(mode);
            await this.setLoopTimeStep();
        }*/


        ensureLoopThenClose(playLoopKey, dt) {
          var _this3 = this;

          if (this._loopOncePromise) return this._loopOncePromise; // 若有要求關閉或正在關閉 → 不再啟 Loop，直接加入那次關閉

          if (this._closeRequested || this._isClosing) return this.requestCloseOnce();
          this._loopOncePromise = _asyncToGenerator(function* () {
            // 1取消當前(In)動畫，切 Loop（非阻塞播放）
            _this3.cancelBoardAni(false); // 中斷 In


            _this3._isGoIn = false; // 中斷後到啟動前<再檢查一次>是否有人要求關閉

            if (_this3._closeRequested || _this3._isClosing) {
              yield _this3.requestCloseOnce();
              return;
            }

            _this3._isInLoop = true; // 啟動 Loop，不 await
            //const loopSingle=this._async.createAbortScope(SIGNAL_KEY);
            //const callbackWrapper=(value:any)=>{
            //}

            var loopP = _this3.setPlayPromise({
              aniState: playLoopKey
            }, dt); //const loopP = this.setPlayPromise({ aniState: playLoopKey });


            _this3.openBtnActive(); //void loopP.catch((err) => this.logLoopPlayReject(err, playLoopKey));
            // 啟動延遲前<再檢查一次>：若已要求關閉，就不要開延遲


            if (_this3._closeRequested || _this3._isClosing) {
              yield _this3.requestCloseOnce();
              return;
            }

            yield _this3.setLoopTimeStep(); // 2 等待可強制取消的計時

            yield _this3.requestCloseOnce(); // 3 計時完成 → 一次性關閉
          })().finally(() => {
            this._isInLoop = false;
            this._loopOncePromise = null;
          });
          return this._loopOncePromise;
        }

        requestCloseOnce() {
          this._closeRequested = true;
          if (this._closeOncePromise) return this._closeOncePromise;
          this._closeOncePromise = this.closeFGUIBoard().finally(() => {
            this._closeRequested = false;
            this._closeOncePromise = null;
          });
          return this._closeOncePromise;
        }

        forceCancelLoopDelay() {
          var _this$_resolveDelayOn;

          (_this$_resolveDelayOn = this._resolveDelayOnCancel) == null || _this$_resolveDelayOn.call(this);
          this._resolveDelayOnCancel = undefined;
        }

        setLoopTimeStep() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            //--spine動畫1.5s
            //const dt = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.fg?.duringBoard);
            var signal = _this4._async.createAbortScope(SIGNAL_KEY);

            var delay = _this4._async.waitSecondsCancelable(_this4._loopTimeForState, signal, SIGNAL_KEY);

            _this4._resolveDelayOnCancel = () => {
              _this4._async.cancelByLabel('waitSecondsCancelable');
            }; //const delay = GameUtilsTools.DeferByTweenPromiseWithCancel(dt);
            //this._resolveDelayOnCancel = delay.forceCancelAndResolve;


            try {
              //await delay.promise;// 等待延遲完成
              yield delay; // 等待延遲完成
            } finally {
              _this4._resolveDelayOnCancel = undefined; // 清掉
            }
          })();
        }

        onClickHandler(event) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            //--判斷狀態讓面本呈現正確的樣貌
            //console.log('FGBoardUI1016 onClickHandler', this._isGoIn, this._isClosing);
            event.preventSwallow = true;

            _this5.forceCancelLoopDelay();

            if (_this5._isGoIn) {
              // first click(stay--> In）：強切 Loop 並等待計時結束後再關閉
              var playLoopKey = _this5._triggerGameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).FREE_GAME ? FG_BOARD_ANI_MAP.FG_Loop : FG_BOARD_ANI_MAP.BACK_NG_Loop;
              yield _this5.ensureLoopThenClose(playLoopKey, _this5._loopTimeForState);
            } else if (_this5._isInLoop) {
              // sceond click（stay--> Loop )：直接關閉（一次性），等待完成
              yield _this5.requestCloseOnce();
            } else {
              // 其他情境（已在關閉中/已關閉）：一起等同一個關閉
              yield _this5.requestCloseOnce();
            }
          })();
        }

        getCurrentGameMode() {
          //let gameState = BasicGameGlobalData.getInstance<GameGlobalData>().getGlobalData(GameGlobalKeys.GameState);
          var gameState = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).GameState); //--do something

          return gameState;
        } //Utility.addEventHandlerToButton(this._btnBg.node, this, 'onClickHandler');


        openBtnActive() {
          if (!this._btnNode) return;
          this._btnNode.active = true;

          this._btnNode.off(Node.EventType.TOUCH_END, this.onClickHandler, this);

          this._btnNode.on(Node.EventType.TOUCH_END, this.onClickHandler, this, true);
        }

        closeBtnActive() {
          if (!this._btnNode) return;
          this._btnNode.active = false;

          this._btnNode.off(Node.EventType.TOUCH_END, this.onClickHandler, this);
        } //=============<debug log>--可以廢棄了,已有global的debugLog輸出工具===================================================
        // 判斷是不是「可預期的取消」


        isLikelyCancel(err) {
          var _this$_abort$signal$a, _this$_abort, _message, _name, _this$_abort2;

          if (!err) return (_this$_abort$signal$a = (_this$_abort = this._abort) == null || (_this$_abort = _this$_abort.signal) == null ? void 0 : _this$_abort.aborted) != null ? _this$_abort$signal$a : false;
          var msg = (_message = err == null ? void 0 : err.message) != null ? _message : String(err);
          var name = (_name = err == null ? void 0 : err.name) != null ? _name : '';
          return ((_this$_abort2 = this._abort) == null || (_this$_abort2 = _this$_abort2.signal) == null ? void 0 : _this$_abort2.aborted) === true || /abort|cancell?ed|stopped|interrupted/i.test(msg) || /AbortError|CanceledError/i.test(name);
        } // 播放 promise 的拒絕資訊


        logLoopPlayReject(err, playLoopKey) {
          var _this$_abort$signal$a2, _this$_abort3;

          var snapshot = {
            playLoopKey,
            isInLoop: this._isInLoop,
            isClosing: this._isClosing,
            closeRequested: this._closeRequested,
            abortedSignal: (_this$_abort$signal$a2 = (_this$_abort3 = this._abort) == null || (_this$_abort3 = _this$_abort3.signal) == null ? void 0 : _this$_abort3.aborted) != null ? _this$_abort$signal$a2 : false,
            ts: Date.now()
          };

          if (this.isLikelyCancel(err)) {
            console.debug('[FGBoardUI1016] loop promise rejected (likely cancel)', snapshot, err);
          } else {
            console.warn('[FGBoardUI1016] loop promise rejected (UNEXPECTED)', snapshot, err);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_btnNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_labelTimesNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_labelAddTimesNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_labelScoreNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_labelAddScoreNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_skipUIOpacity", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=db827695100ca9ec7768d402face22b7ea55b91a.js.map