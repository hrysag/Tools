System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, macro, Component, Animation, AnimationClip, sp, ParticleExtension, CleanTrackType, AnimationSelectionResolver, AnimationPlayInfoList, AniCtrlPropDef, AnimationStateList, ClearTrackTypeState, AnimationStateType, FindComponent, StopClearMode, GameUtilsTools, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, AnimationController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIAnimationControl(extras) {
    _reporterNs.report("IAnimationControl", "../Definitions/IAnimationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfParticleExtension(extras) {
    _reporterNs.report("ParticleExtension", "./ParticleExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationPlayInfo(extras) {
    _reporterNs.report("AnimationPlayInfo", "../Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationCtrlPlayData(extras) {
    _reporterNs.report("AnimationCtrlPlayData", "../Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCleanTrackType(extras) {
    _reporterNs.report("CleanTrackType", "../Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationSelectionResolver(extras) {
    _reporterNs.report("AnimationSelectionResolver", "../AniTools/AniSelectionResolver", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReelInfo(extras) {
    _reporterNs.report("IReelInfo", "../../BasicGameDataDefinition/BasicGameDataDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationPlayInfoList(extras) {
    _reporterNs.report("AnimationPlayInfoList", "./AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniCtrlPropDef(extras) {
    _reporterNs.report("AniCtrlPropDef", "./AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationStateList(extras) {
    _reporterNs.report("AnimationStateList", "./AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClearTrackTypeState(extras) {
    _reporterNs.report("ClearTrackTypeState", "./AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationStateType(extras) {
    _reporterNs.report("AnimationStateType", "./AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../../FindComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlaySelector(extras) {
    _reporterNs.report("PlaySelector", "../Definitions/IPlayOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIStopOptions(extras) {
    _reporterNs.report("IStopOptions", "../Definitions/IStopOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStopClearMode(extras) {
    _reporterNs.report("StopClearMode", "../Definitions/IStopOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtilsTools(extras) {
    _reporterNs.report("GameUtilsTools", "../../GameUtilsTool", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      macro = _cc.macro;
      Component = _cc.Component;
      Animation = _cc.Animation;
      AnimationClip = _cc.AnimationClip;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      ParticleExtension = _unresolved_2.ParticleExtension;
    }, function (_unresolved_3) {
      CleanTrackType = _unresolved_3.CleanTrackType;
    }, function (_unresolved_4) {
      AnimationSelectionResolver = _unresolved_4.AnimationSelectionResolver;
    }, function (_unresolved_5) {
      AnimationPlayInfoList = _unresolved_5.AnimationPlayInfoList;
      AniCtrlPropDef = _unresolved_5.AniCtrlPropDef;
      AnimationStateList = _unresolved_5.AnimationStateList;
      ClearTrackTypeState = _unresolved_5.ClearTrackTypeState;
      AnimationStateType = _unresolved_5.AnimationStateType;
    }, function (_unresolved_6) {
      FindComponent = _unresolved_6.FindComponent;
    }, function (_unresolved_7) {
      StopClearMode = _unresolved_7.StopClearMode;
    }, function (_unresolved_8) {
      GameUtilsTools = _unresolved_8.GameUtilsTools;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "552e6UbFRZNA4zDk9TcHrOp", "AnimationController", undefined);

      __checkObsolete__(['_decorator', 'macro', 'Component', 'Node', 'Animation', 'AnimationClip', 'AnimationState', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AnimationController", AnimationController = (_dec = ccclass('AnimationController'), _dec2 = property({
        type: _crd && AnimationPlayInfoList === void 0 ? (_reportPossibleCrUseOfAnimationPlayInfoList({
          error: Error()
        }), AnimationPlayInfoList) : AnimationPlayInfoList,
        displayName: 'animationPlayStateList',
        visible: true,
        tooltip: '播放資料清單'
      }), _dec3 = property({
        type: _crd && AnimationStateList === void 0 ? (_reportPossibleCrUseOfAnimationStateList({
          error: Error()
        }), AnimationStateList) : AnimationStateList,
        displayName: 'animationStateList',
        visible: true,
        tooltip: '狀態控制動畫清單'
      }), _dec4 = property({
        type: _crd && ParticleExtension === void 0 ? (_reportPossibleCrUseOfParticleExtension({
          error: Error()
        }), ParticleExtension) : ParticleExtension,
        displayName: 'particleSystem',
        visible: true,
        tooltip: '粒子系統'
      }), _dec5 = property({
        tooltip: 'prefab(放component的nodeId)的node id'
      }), _dec6 = property({
        tooltip: '動畫的FPS'
      }), _dec7 = property({
        tooltip: '單一識別碼'
      }), _dec8 = property({
        tooltip: 'prefabKey(用來辨識prefab的)'
      }), _dec9 = property({
        tooltip: '回收回到預設狀態,不做動畫本身清除重置<中軟專屬要勾選>'
      }), _dec10 = property({
        visible: true,
        tooltip: '是否要播放完畢後停止'
      }), _dec11 = property({
        visible: true,
        tooltip: '是否是AEP_Spine物件'
      }), _dec12 = property({
        type: [sp.Skeleton],
        tooltip: 'AEP控制的spine',
        visible: function () {
          return this.isAEP_SPINE;
        }
      }), _dec13 = property({
        type: _crd && ClearTrackTypeState === void 0 ? (_reportPossibleCrUseOfClearTrackTypeState({
          error: Error()
        }), ClearTrackTypeState) : ClearTrackTypeState,
        visible: true,
        tooltip: '清除全部tracks或是當前撥放的trackIndex'
      }), _dec(_class = (_class2 = class AnimationController extends Component {
        constructor(..._args) {
          super(..._args);

          _initializerDefineProperty(this, "_animationPlayInfoList", _descriptor, this);

          //--他會依照animationPlayStateList的clipsInfo來決定要播放的動畫
          _initializerDefineProperty(this, "_animationStateList", _descriptor2, this);

          _initializerDefineProperty(this, "particleSystem", _descriptor3, this);

          _initializerDefineProperty(this, "targetNodeId", _descriptor4, this);

          //--prefab(放component的nodeId)的node id
          _initializerDefineProperty(this, "frameRate", _descriptor5, this);

          _initializerDefineProperty(this, "tokenID", _descriptor6, this);

          //--單一的識別碼
          _initializerDefineProperty(this, "prefabKey", _descriptor7, this);

          //--prefab的key(用來辨識prefab的)
          _initializerDefineProperty(this, "goBackDefaultWithoutDestroy", _descriptor8, this);

          _initializerDefineProperty(this, "_afterPlayDoStop", _descriptor9, this);

          _initializerDefineProperty(this, "isAEP_SPINE", _descriptor10, this);

          //@ts-ignore
          _initializerDefineProperty(this, "aepSpines", _descriptor11, this);

          _initializerDefineProperty(this, "_clearTracks", _descriptor12, this);

          this._resolver = void 0;
          //---new-----
          // --- Hub 狀態 ---
          this._hubBound = false;
          // 完成事件的等待者：FINISHED / LASTFRAME
          this._finishWaiters = new Set();
          this._lastFrameWaiters = new Set();
          this._pendingPlayResolves = new Set();
          // 讓 safeResolve 能提前結束舊播放
          // frame event 的等待者：回傳 true 代表已處理並移除
          this._frameEvtWaiters = new Set();
          // 追蹤所有「保底」計時器（guards），回收時一口氣取消
          this._activeGuards = new Set();

          // Hub 監聽器（終身掛著，不要被 removeListen() 移除）
          this._onAniFinishedHub = (_t, _s) => this._dispatchFinish();

          this._onAniLastFrameHub = (_t, _s) => this._dispatchLastFrame();

          this._aniResolvePromise = void 0;
          // promise resolve 函式
          this._aniCallback = void 0;
          this._aniFrameEventCallBack = void 0;
          this._aniCallBackCompleteHandler = void 0;
          this._aniCallBackFrameEvtCompleteHandler = void 0;
          this._onFinishedForPromise = void 0;
          this._onLastFrameForPromise = void 0;
          //--TODO------
          //protected _sequencePlayFrameEventCallBack: (value?: any) => void;//--連續播放事件
          //protected _sequenceResolvePromise: (() => void) | null; // promise resolve 函式(序列播放)
          this.slotMachineIndexInfo = void 0;
          this.groupID = void 0;
          //--會有同一個物件在不同的group裡面(第四軸重複的)
          this.isPlaying = void 0;
          this.keep = void 0;
          //--不刪除且持續留在場景中
          //-https://www.swiftcafe.io/post/cocos-animation
          //-https://blog.csdn.net/qq_45021180/article/details/104718341
          //--用來存放原始的動畫資料reset將會塞回去
          //private _originAniData:{[key:string]:AniCtrlPropDef};
          this._originAniData = void 0;
          this._ani = void 0;
          this._gotoAndStopTime = void 0;
          this._defaultTarget = null;
          this._currentTarget = null;
          this._dirtyFirstOnLoad = false;
          //---用來判斷是否第一次onLoad
          //======FIX自動播放default=======
          this._finishBackDefault = false;
          // 這次播放結束後是否回 Default
          this._finalizing = false;
          this._isLoop = void 0;
          this._currentPlayName = '';

          this._onAniFinished = (_type, _state) => {
            this._finalizeFinish();
          };

          this._finalizeFinish = () => {
            var _this$_ani, _this$generalAniCompl;

            if (this._finalizing) return;
            this._finalizing = true;
            this.isPlaying = false; //this._currentPlayName = '';//--LOOP每次都會觸發
            // 移除自己的 FINISHED 監聽（不影響promise/回呼）

            (_this$_ani = this._ani) == null || _this$_ani.off(Animation.EventType.FINISHED, this._onAniFinished, this); //帶入這次的 backDefault 旗標

            (_this$generalAniCompl = this.generalAniCompleteCheck) == null || _this$generalAniCompl.call(this, this._finishBackDefault);
            this._finalizing = false;
          };

          this.checkAniStateTimeEveryFrame = () => {
            const aniState = this._ani.getState(this._currentTarget.targetName);

            if (!aniState) {
              console.error(`AnimationState "${this._currentTarget.targetName}" not found.`);
              this.unschedule(this.checkAniStateTimeEveryFrame);
              this.stopAni();
              return;
            } //--加入誤差值是因為可能會是浮點數


            if (aniState.time >= this._gotoAndStopTime - 0.001) {
              this.unschedule(this.checkAniStateTimeEveryFrame);
              this.stopAni();
            }
          };
        } //---new-----    

        /**
         * https://docs.cocos.com/creator/3.8/manual/zh/animation/animation-component.html#%E5%B8%A7%E4%BA%8B%E4%BB%B6
         * PS-我幹你媽的animation他event callback長這樣>>>>
         * onPlay: function (type, state) {
         *     // callback
         * }
         *
         * // register event to all animation
          * animation.on('play', this.onPlay, this);
          *
          * 
         也就是說會回傳type跟state...之前照spine的寫法就不行..所以要改這樣來接
         再用一個overload來處理不同的參數,來過濾型別強送defaultType
         PS:overload不能用箭頭函式
        */


        generalAniCompleteCheck(a, _s) {
          const backDefault = typeof a === 'boolean' ? a : false;
          if (!this._isLoop) this.onAniComplete(backDefault);
        }

        //--如果還行的話直接併入interface20251008--不行太難用了..
        get currentTarget() {
          return this._currentTarget; //--測試用功能--好用的話就併進去
        }

        get currentPlayName() {
          return this._currentPlayName;
        }

        get ani() {
          return this._ani;
        }

        onLoad() {
          if (this._dirtyFirstOnLoad) return;
          this._dirtyFirstOnLoad = true;
          this._ani = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
            error: Error()
          }), FindComponent) : FindComponent).findComponentInChildren(this.node, Animation);
          this._gotoAndStopTime = 0;
          this._originAniData = []; //-_originAniData存放原本美術設定的資料

          this.createOriginAniState();
          this.saveOriginAniData(this._originAniData); //--在prefab裡面,已經有default的clip了

          if (!this._animationPlayInfoList) {
            this._animationPlayInfoList = new (_crd && AnimationPlayInfoList === void 0 ? (_reportPossibleCrUseOfAnimationPlayInfoList({
              error: Error()
            }), AnimationPlayInfoList) : AnimationPlayInfoList)();
            this._animationPlayInfoList.clipsInfo = [];
          }
          /**
           * _animationPlayInfoList.clipsInfo存放自定義的資料
           * 但在一開始會先寫過一次全部預設的資料到這裡面
           * 然後如果有填寫_animationPlayInfoList資料的話,會覆蓋掉原本的資料
           */


          const defaultClipName = this._ani.defaultClip ? this._ani.defaultClip.name : null;

          for (const clip of this._ani.clips) {
            const state = this._ani.getState(clip.name); //如果有填寫_animationPlayStateList資料的話,會覆蓋掉原本animation的資料


            let clipData = this._animationPlayInfoList.clipsInfo.find(data => data.targetName === clip.name);

            if (!clipData) {
              //如果沒有資料的話,會推進去_animationPlayInfoList
              clipData = new (_crd && AniCtrlPropDef === void 0 ? (_reportPossibleCrUseOfAniCtrlPropDef({
                error: Error()
              }), AniCtrlPropDef) : AniCtrlPropDef)();
              clipData.targetName = clip.name;

              if (state) {
                clipData.delay = state.delay;
                clipData.repeatCount = state.repeatCount;
                clipData.speed = state.speed;
                clipData.wrapMode = state.wrapMode;
                clipData.duration = state.duration;
              } else {
                clipData.delay = 0.0; //--engine default

                clipData.repeatCount = 1; //--engine default

                clipData.speed = 1.0; //--engine default

                clipData.wrapMode = AnimationClip.WrapMode.Normal; //--engine default
              }

              this._animationPlayInfoList.clipsInfo.push(clipData);

              if (defaultClipName === clip.name) {
                this._defaultTarget = clipData;
              }
            }
          } //--建立查找(IPlayOptions)工具與快取表


          this._resolver = new (_crd && AnimationSelectionResolver === void 0 ? (_reportPossibleCrUseOfAnimationSelectionResolver({
            error: Error()
          }), AnimationSelectionResolver) : AnimationSelectionResolver)(() => {
            var _this$_animationState, _this$_animationState2;

            return (_this$_animationState = (_this$_animationState2 = this._animationStateList) == null ? void 0 : _this$_animationState2.stateInfo) != null ? _this$_animationState : [];
          }, () => {
            var _this$_animationPlayI, _this$_animationPlayI2;

            return (_this$_animationPlayI = (_this$_animationPlayI2 = this._animationPlayInfoList) == null ? void 0 : _this$_animationPlayI2.clipsInfo) != null ? _this$_animationPlayI : [];
          }, st => st.getStateKey ? st.getStateKey() : '', //-可省
          // enumToKey：把 Enum 數值轉字串鍵
          v => (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
            error: Error()
          }), AnimationStateType) : AnimationStateType)[v], // 可選 logger
          (type, ...args) => console[type](...args));

          this._resolver.rebuildAnimationCaches(); //--先建立一次快取表
          //--優先權以_animationPlayStateList <useDefaultState>為主    


          if (!this._animationPlayInfoList.useDefaultState) {
            this._defaultTarget = this._animationPlayInfoList.clipsInfo.find(data => data.useDefault);
          } //--如果沒有設定default的clip的話,就會找第一個clip


          if (!this._defaultTarget) {
            this._defaultTarget = this._animationPlayInfoList.clipsInfo[0];
          }
          /*
          this.generalAniCompleteCheck = (backDefault: boolean = false) => {
              //this.onAniCompleteHandler();
              this.onAniComplete(backDefault);
          };*/


          this._clearTracks.trackType = (_crd && CleanTrackType === void 0 ? (_reportPossibleCrUseOfCleanTrackType({
            error: Error()
          }), CleanTrackType) : CleanTrackType).ALL_ANI; //--預設是清除當前的track

          this.init();

          this._ani.stop();
        }

        init() {
          var _this$_resolver;

          if (!this._dirtyFirstOnLoad) return;
          this.keep = false; //--重置快取表

          (_this$_resolver = this._resolver) == null || _this$_resolver.rebuildAnimationCaches();
          this.ensureDefaultTargetFromList(); //---new--

          this.ensureHub();
        }

        ensureHub() {
          if (this._hubBound || !this._ani) return;

          this._ani.on(Animation.EventType.FINISHED, this._onAniFinishedHub, this);

          this._ani.on(Animation.EventType.LASTFRAME, this._onAniLastFrameHub, this);

          this._hubBound = true;
        } //---new---


        _dispatchFinish() {
          const list = Array.from(this._finishWaiters);

          this._finishWaiters.clear();

          for (const fn of list) {
            try {
              fn();
            } catch {}
          }
        } //---new---  


        _dispatchLastFrame() {
          const list = Array.from(this._lastFrameWaiters);

          this._lastFrameWaiters.clear();

          for (const fn of list) {
            try {
              fn();
            } catch {}
          }
        } //--new---


        waitFinishOnce() {
          let off = () => {};

          const promise = new Promise(resolve => {
            const cb = () => {
              off();
              resolve();
            };

            off = () => this._finishWaiters.delete(cb);

            this._finishWaiters.add(cb);
          });
          return {
            promise,
            off
          };
        } //--new--


        waitLastFrameOnce() {
          let off = () => {};

          const promise = new Promise(resolve => {
            const cb = () => {
              off();
              resolve();
            };

            off = () => this._lastFrameWaiters.delete(cb);

            this._lastFrameWaiters.add(cb);
          });
          return {
            promise,
            off
          };
        } // 只拿第一個符合條件的 frame event；predicate 回傳 true 表示吃到這次事件


        waitFrameEventOnce(predicate) {
          let off = () => {};

          const promise = new Promise(resolve => {
            const cb = args => {
              const ok = !predicate || predicate(...args);

              if (ok) {
                off();
                resolve(args);
                return true;
              }

              return false;
            };

            off = () => this._frameEvtWaiters.delete(cb);

            this._frameEvtWaiters.add(cb);
          });
          return {
            promise,
            off
          };
        } //--race用的保底計時器


        _makeGuardByState(state) {
          const dur = state ? Math.max(0.001, state.duration / Math.max(0.0001, Math.abs(state.speed || 1))) : 0.6;
          return (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).DeferByTweenPromiseWithCancel(dur * 1.5);
        } //--確保預設目標存在


        ensureDefaultTargetFromList() {
          var _this$_animationPlayI3, _this$_animationPlayI4, _ref, _list$find;

          if (this._defaultTarget) return;
          const list = (_this$_animationPlayI3 = (_this$_animationPlayI4 = this._animationPlayInfoList) == null ? void 0 : _this$_animationPlayI4.clipsInfo) != null ? _this$_animationPlayI3 : [];
          this._defaultTarget = (_ref = (_list$find = list.find(d => d == null ? void 0 : d.useDefault)) != null ? _list$find : list[0]) != null ? _ref : null;
        }

        async testBtnEvent(ev, value) {
          console.log('testBtnEvent:', ev, value); //---wild---
          //this.playAni(AnimationStateType.Default);//--抖兩下..
          //this.playAni(AnimationStateType.Idle);//--抖一下..

          this.playAni({
            aniState: 'Appear'
          }); //--抖兩下..
          //this.playAni({ aniState: 'Connect_4' });//--抖兩下..
          //this.playAni({aniState:'Transfer'});
          //this.playAni({aniState:'No_transfer'});//--抖兩下..
          //await this.playAniInPromise({ aniState: 'Transfer' });
          //const aniCtrl: AniCtrlPropDef = this.getAniIdAndSetAniState('Transfer_Ani');
          //const aniState: AnimationState = this._ani.getState(aniCtrl.targetName);

          /*
          this._ani.defaultClip.events=
          [
              {
                  frame:triggerTime,
                   func:'onAniTriggerEvt',
                   params:[j.clip.name]
              }
          ];*/
          //this.playAni({ aniState: 'Transfer' });
          //this.playAni({ aniState: 'No_transfer' });
          //this.playAni(AnimationStateType.Default);
          //--wild---
          //this.playAni(AnimationStateType.Win);
          //this.playAni({ targetName: 'Iconbox_Loop_Ani' });

          /*
              console.log();
          },true,AnimationStateType.Win);
          */
          //await this.playAniInPromise(AnimationStateType.Win);
          //await this.playAniInPromise({ targetName: 'Iconbox_Loop_Ani' });
          //await this.playAniInPromise({aniState:'Connect_1'});
          //this.playAni({ aniState: 'Explore' });
          //this.playAni({ aniState: 'Start' });
          //this.playAni({ aniState: 'FG_Num_Up' });
          //await this.playAniInPromise({ aniState: AnimationStateType.Default });
          //this.playAni({ aniState: AnimationStateType.Idle });
          //this.testWild9({ aniState: 'Connect_1' });
          //this.playAniInPromise({ aniState: 'Connect_1' });
          //await this.playAniInPromise({ aniState: AnimationStateType.Idle });

          console.log();
          /*
          this.playAniWithFrameEvtCallBack(
              () => {
                  console.log('frame event callback');
              },
              () => {
                  console.log('frame event complete');
              },
              false,
              { aniState: 'Start' });
              */

          console.log();
        }

        testWild9(value) {
          const targetState = this.peakAniDataInfo(value);
          const originalDuration = targetState.duration;
          const spTargetName = ['Connect_1', 'Connect_2', 'Connect_3', 'Connect_4'];

          if (this.isAEP_SPINE && this.aepSpines.length > 0 && spTargetName.length > 0) {
            for (let i = 0; i < this.aepSpines.length; i++) {
              for (let j = 0; j < spTargetName.length; j++) {
                var _sp$findAnimation;

                const sp = this.aepSpines[i];
                const duration = (_sp$findAnimation = sp.findAnimation(spTargetName[j])) == null ? void 0 : _sp$findAnimation.duration;

                if (duration) {
                  //const speed=duration/time;
                  //sp.timeScale=speed;
                  console.log();
                }
              }
            }
          }
        } //--animation的event要放在跟animationComponent同層(核心只會去找那一層的)
        //-[ANI_CTRL_EVT]=frameEvent使用的function name


        ANI_CTRL_EVT(...args) {
          //console.log('testFrameEvent', args);
          if (this._aniFrameEventCallBack) {
            this._aniFrameEventCallBack(...args);
          } // 統一轉發給 waiters


          const list = Array.from(this._frameEvtWaiters);

          for (const fn of list) {
            try {
              const done = fn(args);
              if (done) this._frameEvtWaiters.delete(fn);
            } catch {}
          }
        }

        async test2BtnEvent(ev, value) {
          console.log('testBtnEvent2:', ev, value); //this.stopAni(true);--就是很單純的停止
          //this.stopNow();//--會解掉resolve的promise與callback
          //this.playAni({ aniState: 'Transfer' });
          //this.stopAni();
          //this.stopPromiseAni(true);
          //this.playAni({ aniState: 'In' });
          //this.playAni(AnimationStateType.Default);
          //this.changePlayTime(0.3);

          this.gotoPlayLastFrame();
          console.log();
        }

        async test3BtnEvent(ev, value) {
          console.log('testBtnEvent3:', ev, value); //this.stopAni(true);--就是很單純的停止
          //this.stopNow();//--會解掉resolve的promise與callback
          //this.playAni({ aniState: 'Num_Down_Respine' });

          this.playAni({
            aniState: 'Out'
          }); //this.stopAni();
          //this.stopPromiseAni(true);

          console.log();
        }

        createOriginAniState() {
          for (const clip of this._ani.clips) {
            //const state:AnimationState=new AnimationState(clip);
            this._ani.createState(clip, clip.name);
          }
        }

        saveOriginAniData(aryTarget) {
          if (this._ani) {
            aryTarget.push(...this._ani.clips.map(clip => {
              const state = this._ani.getState(clip.name);

              const clipData = new (_crd && AniCtrlPropDef === void 0 ? (_reportPossibleCrUseOfAniCtrlPropDef({
                error: Error()
              }), AniCtrlPropDef) : AniCtrlPropDef)();
              clipData.targetName = clip.name;

              if (state) {
                clipData.delay = state.delay;
                clipData.repeatCount = state.repeatCount;
                clipData.speed = state.speed;
                clipData.wrapMode = state.wrapMode;
                clipData.duration = state.duration;
              }

              return clipData;
            }));
          }
        }

        restoreOriginAniData() {
          if (this._ani) {
            //--將改變的clip資料還原回去
            for (let clip of this._ani.clips) {
              const state = this._ani.getState(clip.name);

              const clipData = this.getOriginAniData(clip.name);

              if (this.isDefined(clipData == null ? void 0 : clipData.delay)) {
                state.delay = clipData.delay;
              }

              if (this.isDefined(clipData == null ? void 0 : clipData.repeatCount)) {
                state.repeatCount = clipData.repeatCount;
              }

              if (this.isDefined(clipData == null ? void 0 : clipData.speed)) {
                state.speed = clipData.speed;
              }

              if (this.isDefined(clipData == null ? void 0 : clipData.wrapMode)) {
                state.wrapMode = clipData.wrapMode;
              } //--將所有的clip的時間歸零,回到第一個frame的狀態


              state.time = 0;
              state.sample();
            }
          }
        }

        destroyAniController() {}
        /**
         * AEP獨有方法(改變aep的速度)
         * TIPS:這個AEP是包裹著spine的
         * 如果只是要單純改變animation的速度,請走setAniDataInfo進行相關屬性改變的操作
         * @example:
         *  const targetState:AniCtrlPropDef=this.peakAniDataInfo( value) as AniCtrlPropDef;
            const originalDuration = targetState.duration;
            if(originalDuration!=time)
            {
                const speed = originalDuration / time;
                const changeSpeed=GameUtilsTools.deepClone(targetState) as AniCtrlPropDef;
                changeSpeed.speed=speed;
                this.setAniDataInfo(changeSpeed);
            }
         */


        changeSpeedWithAep(value, time, spTargetName = []) {
          const targetState = this.peakAniDataInfo(value);
          const originalDuration = targetState.duration;

          if (originalDuration != time && time > 0) {
            const speed = originalDuration / time;
            const realSpeed = Math.round(speed * 10) / 10; //--取到小數點後1位

            const changeSpeed = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
              error: Error()
            }), GameUtilsTools) : GameUtilsTools).deepClone(targetState);
            changeSpeed.speed = realSpeed;

            if (this.isAEP_SPINE && this.aepSpines.length > 0 && spTargetName.length > 0) {
              for (let i = 0; i < this.aepSpines.length; i++) {
                const sp = this.aepSpines[i];

                for (let j = 0; j < spTargetName.length; j++) {
                  var _sp$findAnimation2;

                  const duration = (_sp$findAnimation2 = sp.findAnimation(spTargetName[j])) == null ? void 0 : _sp$findAnimation2.duration;

                  if (duration) {
                    const speed = duration / time;
                    sp.timeScale = speed;
                  }
                }
              }
            }

            this.setAniDataInfo(changeSpeed);
          }
        } //--這裡要改掉..因為每次都改就會一直新增20251217


        setAniDataInfo(value) {
          let playData = this.resolveTargetName(value.targetName);
          const targetData = value;

          if (!playData) {
            playData = new (_crd && AniCtrlPropDef === void 0 ? (_reportPossibleCrUseOfAniCtrlPropDef({
              error: Error()
            }), AniCtrlPropDef) : AniCtrlPropDef)();
            playData.targetName = value.targetName;

            this._animationPlayInfoList.clipsInfo.push(playData);

            this._resolver.rebuildAnimationCaches();
          }

          if (this.isDefined(targetData == null ? void 0 : targetData.wrapMode)) {
            playData.wrapMode = targetData.wrapMode;
          }

          if (this.isDefined(targetData == null ? void 0 : targetData.speed)) {
            playData.speed = targetData.speed;
          }

          if (this.isDefined(targetData == null ? void 0 : targetData.repeatCount)) {
            playData.repeatCount = targetData.repeatCount;
          }

          if (this.isDefined(targetData == null ? void 0 : targetData.delay)) {
            playData.delay = targetData.delay;
          }

          this._defaultTarget = playData;
        }

        speedUpAni(value) {}

        slowDownAni(value) {}
        /**
         * 
         * @param value clip name
         * 沒有輸入的話將會針對整個動畫(全部的clip)進行暫停
         */


        pauseAni(value) {
          const aniCtrl = this.resolveTargetName(value);

          if (aniCtrl) {
            const aniState = this._ani.getState(aniCtrl.targetName);

            if (aniState) {
              aniState.pause();
            }
          } else {
            this._ani.pause();
          }
        }
        /**
         * 
         * @param value clip name
         * 沒有輸入的話將會針對整個動畫(全部的clip)進行恢復
         */


        resumeAni(value) {
          const aniCtrl = this.resolveTargetName(value);

          if (aniCtrl) {
            const aniState = this._ani.getState(aniCtrl.targetName);

            if (aniState) {
              aniState.resume();
            }
          } else {
            this._ani.resume();
          }
        }

        gotoAndPlayByFrame(value, frame) {
          const aniCtrl = this.resolveTargetName(value);

          const aniState = this._ani.getState(aniCtrl.targetName);

          const timeByFrame = this.getTimeByFrame(aniCtrl.targetName, frame);

          if (timeByFrame > 0 && aniState) {
            aniState.time = timeByFrame;
            this._currentPlayName = aniCtrl.targetName;
            this.isPlaying = true;

            this._ani.play(aniCtrl.targetName);
          } else {
            console.error(`AnimationClip "${aniCtrl.targetName}" not found `);
          }
        }
        /**
         * 直接播放到最後一格
         * 如果動畫長度 < 1 秒，start 會變成負數；或是計算的 start 超過尾端
         * 所以把 start 夾在 [0, end - EPS] 之內，避免越界
         * @param value 
         */


        gotoPlayLastFrame(value) {
          if (!this.isPlaying) return;

          if (this._ani) {
            const EPS = 1e-6; //--避免最後一個frame沒辦法正確sample

            const aniState = this._ani.getState(this._currentPlayName);

            if (aniState) {
              aniState.pause();
              const end = aniState.duration;
              const start = Math.max(0, end - 1); //const finalTime = Math.max(0, Math.min(start, end - EPS));

              const finalTime = end - 0.32; //-0.32是倒數第二格的時間點(趨近)

              aniState.time = finalTime;
              aniState.sample();

              if (this.isAEP_SPINE && this.aepSpines.length > 0) {
                for (let i = 0; i < this.aepSpines.length; i++) {
                  const sp = this.aepSpines[i];
                  const entry = sp.getCurrent(0); //-這邊有點抖抖得

                  if (entry) {
                    const spEnd = entry.animation.duration; //const spStart = Math.max(0, spEnd - 1);
                    //const spFinalTime = Math.max(0, Math.min(spStart, spEnd - EPS));

                    const spFinalTime = spEnd - 0.32; //-0.32是倒數第二格的時間點(趨近)

                    entry.trackTime = spFinalTime;
                    sp.updateAnimation(0);
                  }
                }
              }

              aniState.resume();
            }
          }
        }
        /**
        * 20251020新增方法
        * @param value 取得播放的動畫資料key
        * @param time 移動到某個時間點開始播放
        */


        changePlayTime(time, value) {
          if (!this.isPlaying) return;

          if (this._ani) {
            const aniState = this._ani.getState(this._currentPlayName);

            if (aniState) {
              aniState.pause();
              aniState.time = time; //console.log('changePlayTime:',aniState);
              //console.log();

              if (this.isAEP_SPINE && this.aepSpines.length > 0) {
                for (let i = 0; i < this.aepSpines.length; i++) {
                  const sp = this.aepSpines[i];
                  const entry = sp.getCurrent(0); //-這邊有點抖抖得

                  if (entry) {
                    let moveToStartTime = time;
                    if (moveToStartTime <= 0) moveToStartTime = 0;
                    entry.trackTime = moveToStartTime;
                    sp.updateAnimation(0);
                  }
                }
              }

              aniState.sample();
              aniState.resume();
            }
          }
        }

        gotoAndPlayByTime(value, time) {
          const aniCtrl = this.resolveTargetName(value);

          const aniState = this._ani.getState(aniCtrl.targetName);

          if (aniState) {
            aniState.time = time;
            this._currentPlayName = aniCtrl.targetName;
            this.isPlaying = true;

            this._ani.play(aniCtrl.targetName);
          }
        }

        gotoAndStopByTime(value, time) {
          const aniCtrl = this.resolveTargetName(value);

          const aniState = this._ani.getState(aniCtrl.targetName);

          if (aniState) {
            aniState.time = time;
            aniState.pause();
          }
        }

        gotoAndStopByFrame(value, frame) {
          const aniCtrl = this.resolveTargetName(value);

          const aniState = this._ani.getState(aniCtrl.targetName);

          const timeByFrame = this.getTimeByFrame(aniCtrl.targetName, frame);

          if (timeByFrame > 0 && aniState) {
            aniState.time = timeByFrame;
            aniState.pause();
          } else {
            console.error(`AnimationClip "${value}" not found `);
          }
        } //--播放到那個time然後停止


        playToTimeAndStop(value, time) {
          this._gotoAndStopTime = time;
          const aniCtrl = this.resolveTargetName(value);
          this.schedule(this.checkAniStateTimeEveryFrame, 1 / 60, macro.REPEAT_FOREVER);
          this.isPlaying = true;
          this._currentPlayName = aniCtrl.targetName;

          this._ani.play(aniCtrl.targetName);
        } //--播放到那個Frame然後停止


        playToFrameAndStop(value, frame) {
          const aniCtrl = this.resolveTargetName(value);
          const timeByFrame = this.getTimeByFrame(aniCtrl.targetName, frame);

          if (timeByFrame > 0) {
            this._gotoAndStopTime = timeByFrame;
            this.schedule(this.checkAniStateTimeEveryFrame, 1 / 60, macro.REPEAT_FOREVER);
            this.isPlaying = true;
            this._currentPlayName = aniCtrl.targetName;

            this._ani.play(aniCtrl.targetName);
          } else {
            console.error(`AnimationClip "${value}" not found `);
          }
        }

        addEventToAniByFrame(value, frame) {}

        addEventToAniByTime(value, time) {}

        reversePlay(value, speed = -1) {
          const aniCtrl = this.resolveTargetName(value);

          if (aniCtrl) {
            aniCtrl.speed = speed;
            this._currentPlayName = aniCtrl.targetName;

            this._ani.play(value);
          }
        }

        playAniWithAniCtrDef(value) {}
        /**
         * <這邊不會掛上監聽就單純的for中軟美術切回default的動畫狀態>
         * 播放動畫預設狀態,有動畫播放
         */


        goBackToDefault(flag = true) {
          if (!this._ani) return;

          if (flag) {
            this.safeResolveAniPromise();
            this.safeResolveAniCallback();
          }

          const aniCtrl = this.getAniIdAndSetAniState((_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
            error: Error()
          }), AnimationStateType) : AnimationStateType).Default);

          const state = this._ani.getState(aniCtrl.targetName);

          if (!state) {
            console.error(`AnimationClip "Default" not found`);
            return;
          }

          this.ensureHub();
          this._finishBackDefault = false; // 已回 Default，不需要再回 Default

          this._isLoop = state.wrapMode === AnimationClip.WrapMode.Loop;
          this.isPlaying = true;
          this._currentPlayName = aniCtrl.targetName; // 不強制等完成；若你想回報一次「到位」，可以打開以下保底 + waiter，等一次就好：
          // const { promise: endP, off } = this._waitFinishOnce();
          // const guard = this._makeGuardByState(state);
          // Promise.race([endP, guard.promise]).finally(() => { try{off();}catch{} try{guard.cancel();}catch{} });

          this._ani.play(aniCtrl.targetName);
          /*
          if (flag) {
              this.safeResolveAniPromise();
              this.safeResolveAniCallback();
          }
          const aniCtrl: AniCtrlPropDef = this.getAniIdAndSetAniState(AnimationStateType.Default);
          if (this._ani) {
              this.isPlaying = true;
              this._ani.off(Animation.EventType.FINISHED, this._onAniFinished, this);
              this._ani.play(aniCtrl.targetName);
          }*/

        }

        playAni(value, backDefault = false) {
          //this.safeResolveAniPromise();
          const aniCtrl = this.getAniIdAndSetAniState(value);
          if (!this._ani) return;

          const state = this._ani.getState(aniCtrl.targetName);

          if (!state) {
            console.error(`AnimationClip "${aniCtrl.targetName}" not found`);
            return;
          }

          this.ensureHub();
          this._finishBackDefault = backDefault;
          if (state.wrapMode === AnimationClip.WrapMode.Loop) this._isLoop = true;
          this.isPlaying = true;
          this._currentPlayName = aniCtrl.targetName; // 一次性 waiter（不互相踐踏）

          const {
            promise: endP,
            off
          } = state.wrapMode === AnimationClip.WrapMode.Loop ? this.waitLastFrameOnce() : this.waitFinishOnce(); // 保底

          const guard = this._makeGuardByState(state);

          this._activeGuards.add(guard);

          const settle = () => {
            try {
              off();
            } catch {}

            try {
              guard.cancel();
            } catch {}

            this._activeGuards.delete(guard);

            this._finalizeFinish();
          };

          endP.then(settle).catch(settle);
          guard.promise.then(() => settle).catch(() => {});

          this._ani.play(aniCtrl.targetName);
          /*
          const aniCtrl: AniCtrlPropDef = this.getAniIdAndSetAniState(value);
          if (this._ani) {
              this._finishBackDefault = backDefault;
              this._ani.off(Animation.EventType.FINISHED, this._onAniFinished, this);
              this.isPlaying = true;
              if(aniCtrl.wrapMode==AnimationClip.WrapMode.Loop)
              {
                  this._isLoop=true;
              }
              this._ani.once(Animation.EventType.FINISHED, this._onAniFinished, this);
              this._ani.play(aniCtrl.targetName);
          }*/

          /*
          this._ani.once(Animation.EventType.FINISHED, () => {
              this.onAniCompleteHandler();
          });*/

          /*
          this.schedule(()=>{
              let aniState: AnimationState = this._ani.getState(value);
              let clip=this._ani.clips.find(clip => clip.name === value);
              console.log(
                  'check_aniState:\n' +
                  `  time: ${aniState.time}\n` +
                  `  current: ${aniState.current}\n` +
                  `  duration: ${aniState.duration}\n` +
                  `  speed: ${aniState.speed}\n` +
                  `  repeatCount: ${aniState.repeatCount}\n`+
                  `  ratio: ${aniState.ratio}\n`+
                  `  sample: ${clip.sample}`
                );
             
              //clip.
           },0.16,macro.REPEAT_FOREVER)
          */

        }

        playAniWithFrameEvtCallBack(callBackFrameEvent, callBackOnFinish, // 新增：動畫結束時要呼叫的回呼函式
        backDefault = false, value, opt) {
          var _this$ensureHub;

          this.safeResolveAniPromise();
          const aniCtrl = this.getAniIdAndSetAniState(value);

          if (!aniCtrl) {
            this._finalizeFinish();

            return;
          }

          const state = this._ani.getState(aniCtrl.targetName);

          if (!state) {
            this._finalizeFinish();

            return;
          } // 確保 Hub 綁好（FINISHED / LASTFRAME 轉發）


          (_this$ensureHub = this.ensureHub) == null || _this$ensureHub.call(this); // loop 標記，避免 generalAniCompleteCheck 誤判

          this._isLoop = state.wrapMode === AnimationClip.WrapMode.Loop;
          this._finishBackDefault = backDefault;
          this.isPlaying = true;
          this._currentPlayName = aniCtrl.targetName; // 1) 等一次 frame event（用 predicate 過濾）

          const {
            promise: feP,
            off: offFE
          } = this.waitFrameEventOnce(opt == null ? void 0 : opt.predicate); // 2) 等一次完成事件（Normal=FINISHED；Loop=LASTFRAME）

          const {
            promise: endP,
            off: offEnd
          } = this._isLoop ? this.waitLastFrameOnce() : this.waitFinishOnce(); // 3) 保底守門員：動畫時長 * 1.5

          const nominalDur = Math.max(0.001, state.duration / Math.max(0.0001, Math.abs(state.speed || 1)));
          const guard = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).DeferByTweenPromiseWithCancel(nominalDur * 1.5);

          this._activeGuards.add(guard); // 開播


          this._ani.play(aniCtrl.targetName);

          feP.then(args => {
            // 幀事件發生時，執行回呼
            try {
              callBackFrameEvent(...(args != null ? args : []), opt == null ? void 0 : opt.extraArgs);
            } catch {}

            try {
              offFE();
            } catch {}
          }).catch(() => {// 如果幀事件 promise 被拒絕（例如在超時後），這裡不做任何事
          }); // 處理動畫結束事件，並進行最終清理

          endP.then(() => {
            // 動畫正常結束時執行
            try {
              callBackOnFinish();
            } catch {} // 手動取消守門員，並從活躍列表中移除


            try {
              guard.cancel();
            } catch {}

            this._activeGuards.delete(guard);
          }).catch(() => {// 動畫結束 promise 被拒絕時執行
            // (例如因為手動取消動畫等情況)
          }).finally(() => {
            // 無論成功或失敗，都進行最終清理

            /*
            console.log(
                'check_lastFrame_map_', this._lastFrameWaiters,
                'check_finish_map_', this._finishWaiters
            );*/
            try {
              offFE();
            } catch {}

            try {
              offEnd();
            } catch {} //try { guard.cancel(); } catch { }
            //this._activeGuards.delete(guard);


            this._finalizeFinish();
          }); // 處理守門員，負責清理所有 promise

          guard.promise.then(() => {
            // 超時時，取消所有監聽器
            try {
              offFE();
            } catch {}

            try {
              offEnd();
            } catch {}
          }).finally(() => {
            this._finalizeFinish();
          });
          /*
          const cleanup = () => {
              try { offFE(); } catch { }
              try { offEnd(); } catch { }
              try { guard.cancel(); } catch { }
              this._activeGuards.delete(guard);
          };
           // 讓所有 promise 都指向同一個清理函數，以避免重複執行
          feP.finally(cleanup);
          endP.finally(cleanup);
          guard.promise.finally(cleanup);*/

          /*
          //--frameEvent 和 complete 誰先到就執行resolve
          // 聚合結果：誰先到就 settle
          let settled = false;
          const cleanup = () => {
              if (settled) return;
              settled = true;
              try { offFE(); } catch { }
              try { offEnd(); } catch { }
              try { guard.cancel(); } catch { }
              this._activeGuards.delete(guard);
          };
           // race，但保留「是哪條路徑先到」的資訊
          Promise.race([
              feP.then(args => ({ kind: 'frame' as const, args })),
              endP.then(() => ({ kind: 'end' as const })),
              guard.promise.then(() => ({ kind: 'guard' as const })),
          ]).then(res => {
              cleanup();
              // 只有 frame event 觸發時必定呼叫 callback；
              // 若你希望「沒等到也要跑一次 callback」→ 設 opt.fallbackOnMiss = true
              if (res.kind === 'frame') {
                  try { callBack(...(res.args ?? [])); } catch { }
              } else if (opt?.fallbackOnMiss) {
                  try { callBack(); } catch { }
              }
              this._finalizeFinish();
          }).catch(() => {
              cleanup();
              this._finalizeFinish();
          });
          */
        }
        /**
         * 
         * @param callBack 回傳值會帶到 Promise 裡面
         * @param backDefault 是否在動畫結束後回到預設動畫
         * @param value 播放狀態名稱
         * @param cbArgs 回傳參數
         * @returns 
         * @example:
         * 不回傳:
         * this.playAniWithCallBackParameter(() => {
            console.log('done!');
            }, false, { aniState: AnimationStateType.Win });
         * 帶參數 + 取回傳值
            const reward = await this.playAniWithCallBackParameter<number>(
            (groupId: number, nodeName: string) => {
                // …做點收尾，回傳一個數字
                return groupId * 10;
            },
            false,
            { aniState: AnimationStateType.Win },
            [999, 'IconBox']   // cbArgs
            );
          *callback 回傳 Promise
            const meta = await this.playAniWithCallBackParameter(async () => {
            await doAsyncCleanup();
            return { ok: true };
            });
          *callback 把收到的參數原封不動回傳  
            const result = await this.playAniWithCallBackParameter<any[]>(
            (...args) => args,                       // ← 原封不動回傳
            false,
            { aniState: AnimationStateType.Win },
            [123, 'hello', { x: 1 }]                 // ← 丟進去的參數
            );  
          */


        playAniWithCallBackParameter(callBack, backDefault = false, value, cbArgs = []) {
          //this.safeResolveAniPromise();
          const aniCtrl = this.getAniIdAndSetAniState(value);
          if (!this._ani) return Promise.reject(new Error('Animation not available'));

          const state = this._ani.getState(aniCtrl.targetName);

          if (!state) return Promise.reject(new Error(`AnimationClip "${aniCtrl.targetName}" not found`));
          this.ensureHub(); // 確保 Hub 綁好

          this._finishBackDefault = backDefault;
          this._isLoop = state.wrapMode === AnimationClip.WrapMode.Loop;
          this.isPlaying = true;
          this._currentPlayName = aniCtrl.targetName;
          const {
            promise: endP,
            off
          } = this._isLoop ? this.waitLastFrameOnce() : this.waitFinishOnce();

          const guard = this._makeGuardByState(state);

          this._activeGuards.add(guard);

          let done = false;

          const settle = async (resolve, reject) => {
            if (done) return;
            done = true;

            try {
              off();
            } catch {}

            try {
              guard.cancel();
            } catch {}

            try {
              var _this$_activeGuards;

              (_this$_activeGuards = this._activeGuards) == null || _this$_activeGuards.delete == null || _this$_activeGuards.delete(guard);
            } catch {}

            try {
              // call back
              const out = await callBack(...cbArgs);

              this._finalizeFinish();

              resolve(out);
            } catch (e) {
              // callback 丟錯 → 讓呼叫端 catch
              this._finalizeFinish();

              reject(e);
            }
          }; // 回傳一個會在 settle 時帶出 callback 結果的 Promise


          const result = new Promise((resolve, reject) => {
            endP.then(() => settle(resolve, reject)).catch(() => settle(resolve, reject));
            guard.promise.then(() => settle(resolve, reject)).catch(() => {}); // guard 自己失敗忽略
          });

          this._ani.play(aniCtrl.targetName);

          return result;
        }

        playAniWithCallBack(callBack, backDefault = false, value) {
          //this.safeResolveAniPromise();
          const aniCtrl = this.getAniIdAndSetAniState(value);
          if (!this._ani) return;

          const state = this._ani.getState(aniCtrl.targetName);

          if (!state) {
            console.error(`AnimationClip "${aniCtrl.targetName}" not found`);
            return;
          }

          this.ensureHub();
          this._finishBackDefault = backDefault;
          if (state.wrapMode === AnimationClip.WrapMode.Loop) this._isLoop = true;
          this.isPlaying = true;
          this._currentPlayName = aniCtrl.targetName;
          const {
            promise: endP,
            off
          } = state.wrapMode === AnimationClip.WrapMode.Loop ? this.waitLastFrameOnce() : this.waitFinishOnce();

          const guard = this._makeGuardByState(state);

          this._activeGuards.add(guard);

          const settle = () => {
            try {
              off();
            } catch {}

            try {
              guard.cancel();
            } catch {}

            this._activeGuards.delete(guard);

            try {
              callBack();
            } catch {}

            this._finalizeFinish();
          };

          endP.then(settle).catch(settle);
          guard.promise.then(() => settle).catch(() => {});

          this._ani.play(aniCtrl.targetName);
          /*
          this._finishBackDefault = backDefault
           this._aniCallBackCompleteHandler = (_t, _s): void => {
              this.safeResolveAniCallback(); // 統一結束處理
              this._finalizeFinish();
          }
          this._aniCallback = () => {
              callBack();
              this.removeListen();
              this._aniCallback = undefined;
          };
           const aniCtrl: AniCtrlPropDef = this.getAniIdAndSetAniState(value);
          if (!aniCtrl) {
              console.error(`AnimationClip "${value}" not found `);
              this._aniCallBackCompleteHandler = null;
              this.safeResolveAniCallback(); // 統一結束處理
              this._finalizeFinish();
              return;
          }
          if(aniCtrl.wrapMode==AnimationClip.WrapMode.Loop)
          {
              this._isLoop=true;
          }
          this._ani.once(Animation.EventType.FINISHED, this._aniCallBackCompleteHandler, this);
          //const aniCtrl: AniCtrlPropDef = this.getAniIdAndSetAniState(value);
          this._ani.play(aniCtrl.targetName);
          this.isPlaying = true;*/

        }

        playAniInPromise(value, backDefault = false) {
          var _this$ensureHub2;

          //this.safeResolveAniPromise();
          const aniCtrl = this.getAniIdAndSetAniState(value);

          const aniState = this._ani.getState(aniCtrl.targetName);

          if (!aniState) return Promise.reject(new Error('No animation state'));
          (_this$ensureHub2 = this.ensureHub) == null || _this$ensureHub2.call(this); // 保底：動畫時長 * 1.5

          const nominalDur = Math.max(0.001, aniState.duration / Math.max(0.0001, Math.abs(aniState.speed || 1)));
          const guard = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).DeferByTweenPromiseWithCancel(nominalDur * 1.5);

          this._activeGuards.add(guard); // 這次要等的「一次性 waiter」
          //const { promise: endP, off } =
          //    (aniState.wrapMode === AnimationClip.WrapMode.Loop) ? this.waitLastFrameOnce() : this.waitFinishOnce();
          //獲取 waiter
          // loop 狀態，避免 generalAniCompleteCheck 誤判


          const isLoop = aniState.wrapMode === AnimationClip.WrapMode.Loop;
          const {
            promise: endP,
            off
          } = isLoop ? this.waitLastFrameOnce() : this.waitFinishOnce();
          this._isLoop = isLoop;
          this._finishBackDefault = backDefault;
          this.isPlaying = true;
          this._currentPlayName = aniCtrl.targetName;

          this._ani.play(aniCtrl.targetName);

          return new Promise(resolve => {
            let done = false;

            const settle = () => {
              if (done) return; // ---1217 test改變順序降低延遲 立即清理監聽 (同步執行) ---

              done = true;

              this._pendingPlayResolves.delete(settle);

              this._activeGuards.delete(guard);

              try {
                off();
              } catch {}

              try {
                guard.cancel();
              } catch {} // --- B. 核心優化：優先釋放外部 await ---
              // 這樣在 Microtask 檢查點，外部業務邏輯會排在 finalize 之前執行


              resolve(); // ---  後續收尾 (切換動畫到 Default 等) ---

              this._finalizeFinish();
              /*
              done = true;
              this._pendingPlayResolves.delete(settle);   //從 pending 表移除
              try { off(); } catch { }
              this._activeGuards.delete(guard);
              try { guard.cancel(); } catch { }
              this._finalizeFinish();
              resolve();
              */

            }; // 讓 safeResolveAniPromise() 可以「提前結束」這次等待


            this._pendingPlayResolves.add(settle);

            endP.then(settle).catch(settle);
            guard.promise.then(settle).catch(() => {});
          });
        } //====================停止/清除系列============================================================================


        resetData() {
          this.forceToDoBeforeDestroy();
          this.tokenID = ''; //--單一的識別碼

          this._currentTarget = null;
          this._defaultTarget = null;
          this.slotMachineIndexInfo = null;
          this._gotoAndStopTime = 0;
          this.isPlaying = false;
          this._currentPlayName = '';
          this.groupID = []; //--會有同一個物件在不同的group裡面(第四軸重複的)

          this._isLoop = false;
        }

        forceToDoBeforeDestroy() {
          if (this._ani) {
            var _this$safeResolveAniC;

            this.isPlaying = false;
            this._isLoop = false;
            this._currentPlayName = '';
            this.safeResolveAniPromise();
            (_this$safeResolveAniC = this.safeResolveAniCallback) == null || _this$safeResolveAniC.call(this);

            if (this.particleSystem) {
              this.particleSystem.stopParticle();
            }

            for (const g of Array.from(this._activeGuards)) {
              try {
                g.cancel();
              } catch {}
            }

            this._activeGuards.clear();

            this.restoreOriginAniData();
            this.removeListen();

            if (this.goBackDefaultWithoutDestroy) {
              this.goBackToDefault(false); //--回到預設狀態
            }
          }

          if (this._hubBound) {
            this._ani.off(Animation.EventType.FINISHED, this._onAniFinishedHub, this);

            this._ani.off(Animation.EventType.LASTFRAME, this._onAniLastFrameHub, this);

            this._hubBound = false;
          }

          this._finishWaiters.clear();

          this._lastFrameWaiters.clear();

          this._frameEvtWaiters.clear();
        } //-不能用onDestroy這個字component拿去用了


        beforeDestroy() {
          this.forceToDoBeforeDestroy();
        }

        removeListen() {
          if (this._onFinishedForPromise) {
            this._onFinishedForPromise = undefined;
          }

          if (this._onLastFrameForPromise) {
            this._onLastFrameForPromise = undefined;
          }

          if (this._aniCallBackCompleteHandler) {
            this._aniCallBackCompleteHandler = undefined;
          }

          if (this._aniCallBackFrameEvtCompleteHandler) {
            this._aniCallBackFrameEvtCompleteHandler = undefined;
          }
        } //--銷毀前處理掉promise resolve避免沒銷毀的pending promise


        safeResolveAniPromise(resolve) {
          // 先跑舊路徑

          /*
          const r = resolve ?? this._aniResolvePromise;
          this._aniResolvePromise = undefined;
          try { r?.(); } catch {}
          */
          // ★ 新增：把所有尚未 settle 的 play promise 都提前結束
          for (const fn of Array.from(this._pendingPlayResolves)) {
            try {
              fn();
            } catch {}
          }

          this._pendingPlayResolves.clear();

          for (const g of Array.from(this._activeGuards)) {
            try {
              g.cancel();
            } catch {}
          }

          this._activeGuards.clear();
          /*
          if (this._onFinishedForPromise) {
              this._ani.off(Animation.EventType.FINISHED, this._onFinishedForPromise, this);
              this._onFinishedForPromise = undefined;
          }
           if (this._onLastFrameForPromise) {
              this._ani.off(Animation.EventType.LASTFRAME, this._onLastFrameForPromise, this);
              this._onLastFrameForPromise = undefined;
          }
           const r = resolve ?? this._aniResolvePromise;
          this._aniResolvePromise = undefined;
          r?.();
          */

        } //--廢棄


        safeResolveAniFrameCallback() {
          var _this$_aniFrameEventC;

          if (this._aniCallBackFrameEvtCompleteHandler) {
            this._ani.off(Animation.EventType.FINISHED, this._aniCallBackFrameEvtCompleteHandler, this);

            this._aniCallBackFrameEvtCompleteHandler = undefined;
          }

          (_this$_aniFrameEventC = this._aniFrameEventCallBack) == null || _this$_aniFrameEventC.call(this);
          this._aniFrameEventCallBack = undefined;
        } //--銷毀前處理掉ani complete callback
        //--廢棄


        safeResolveAniCallback() {
          var _this$_aniCallback;

          if (this._aniCallBackCompleteHandler) {
            this._ani.off(Animation.EventType.FINISHED, this._aniCallBackCompleteHandler, this);

            this._aniCallBackCompleteHandler = undefined;
          }

          (_this$_aniCallback = this._aniCallback) == null || _this$_aniCallback.call(this);
          this._aniCallback = undefined;
        }

        forceToStopAni(backDefault) {
          this.stopWith({
            overrideAfterPlayFlag: true,
            clear: (_crd && StopClearMode === void 0 ? (_reportPossibleCrUseOfStopClearMode({
              error: Error()
            }), StopClearMode) : StopClearMode).ALL,
            resolvePromises: true,
            resolveCallback: true,
            goBackToDefault: backDefault
          });
        } //--播完就強制銷毀回收


        stopAndRecycle() {
          this.forceToDoBeforeDestroy();
        } //--只有停止沒有回到預設狀態


        stopAni(backDefault = false) {
          this.stopWith({
            goBackToDefault: backDefault
          });
        }
        /**
        * 非常確定當下就是要立刻馬上停止,不管動畫是哪一種
        * resolvePromises/resolveCallback/resetPose
        * 都會強制執行接管後續收尾動作
        */


        stopNow(backDefault = false) {
          this.stopWith({
            overrideAfterPlayFlag: true,
            clear: (_crd && StopClearMode === void 0 ? (_reportPossibleCrUseOfStopClearMode({
              error: Error()
            }), StopClearMode) : StopClearMode).ALL,
            resolvePromises: true,
            resolveCallback: true,
            goBackToDefault: backDefault
          });
        }

        applyClearMode(mode) {
          if (!this._ani) return;

          if (mode === (_crd && StopClearMode === void 0 ? (_reportPossibleCrUseOfStopClearMode({
            error: Error()
          }), StopClearMode) : StopClearMode).ALL) {
            this.removeListen();
            this.unscheduleAllCallbacks();
          }
        }

        onAniComplete(backDefault = false) {
          this.stopWith({
            overrideAfterPlayFlag: false,
            // 與原本行為一致：不動 promise/callback、不停粒子、不重置 Pose
            resolvePromises: false,
            resolveCallback: false,
            stopParticles: false,
            goBackToDefault: backDefault
          });
        } //---強制中止promise動畫(ex:表演到一半的時候直接停止進行下面的動作(中斷輪播之類的))


        stopPromiseAni(backDefault = false) {
          this.stopWith({
            overrideAfterPlayFlag: true,
            //--略過_afterPlayDoStop
            clear: (_crd && StopClearMode === void 0 ? (_reportPossibleCrUseOfStopClearMode({
              error: Error()
            }), StopClearMode) : StopClearMode).ALL,
            resolvePromises: true,
            resolveCallback: true,
            stopParticles: true,
            goBackToDefault: backDefault
          });
        }

        stopWith(opt = {}) {
          var _opt$stopParticles;

          if (!this._ani) return; // 先關狀態與外部效果

          this._ani.stop();

          this.isPlaying = false;
          this._isLoop = false;
          this._currentPlayName = '';
          this._gotoAndStopTime = 0;
          this._currentTarget = null; // 預設選項

          const stopParticles = (_opt$stopParticles = opt.stopParticles) != null ? _opt$stopParticles : true;

          if (stopParticles && this.particleSystem) {
            this.particleSystem.stopParticle();
          } // 可選：收尾一次性 callback / promises


          if (opt.resolveCallback) {
            this.safeResolveAniCallback();
          }

          if (opt.resolvePromises) {
            this.safeResolveAniPromise();
          } // 清理策略(因為animation跟spine不同沒有track的概念)


          let mode = (_crd && StopClearMode === void 0 ? (_reportPossibleCrUseOfStopClearMode({
            error: Error()
          }), StopClearMode) : StopClearMode).NONE;

          if (opt.overrideAfterPlayFlag) {
            mode = (_crd && StopClearMode === void 0 ? (_reportPossibleCrUseOfStopClearMode({
              error: Error()
            }), StopClearMode) : StopClearMode).ALL;
          } else {
            var _opt$clear;

            mode = this._afterPlayDoStop ? (_crd && StopClearMode === void 0 ? (_reportPossibleCrUseOfStopClearMode({
              error: Error()
            }), StopClearMode) : StopClearMode).ALL : (_opt$clear = opt.clear) != null ? _opt$clear : (_crd && StopClearMode === void 0 ? (_reportPossibleCrUseOfStopClearMode({
              error: Error()
            }), StopClearMode) : StopClearMode).NONE;
          } // 執行清理


          this.applyClearMode(mode); //-直接重播回到default狀態(中軟美術提供的素材適合使用)

          if (opt.goBackToDefault) {
            this.playAni((_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
              error: Error()
            }), AnimationStateType) : AnimationStateType).Default);
          }
        }

        getTimeByFrame(value, frame) {
          const clip = this._ani.clips.find(clip => clip.name === value);

          if (clip) {
            const durationInSeconds = clip.duration; //-totaltime

            const totalFrame = Math.floor(durationInSeconds * clip.sample); //--確保根據總幀數和動畫總時長正確計算出目標時間(原本沒有* durationInSeconds)

            const triggerTime = frame / totalFrame * durationInSeconds;
            /**
             *  const time = frameNumber / this.frameRate;
             */

            return triggerTime;
          } else {
            return -1;
          }
        }

        isDefined(value) {
          return value !== undefined && value !== null;
        } //---拿播放資料和寫資料的地方


        getAniIdAndSetAniState(value) {
          const aniCtrl = this.resolveTargetName(value);
          this.setAniStateForCustomizeClipData(aniCtrl);
          return aniCtrl;
        }

        setAniStateForCustomizeClipData(clipData) {
          if (clipData) {
            const aniState = this._ani.getState(clipData.targetName);

            if (aniState) {
              var _clipData$wrapMode, _clipData$speed, _clipData$repeatCount, _clipData$delay;

              aniState.wrapMode = (_clipData$wrapMode = clipData.wrapMode) != null ? _clipData$wrapMode : aniState.wrapMode;
              aniState.speed = (_clipData$speed = clipData.speed) != null ? _clipData$speed : aniState.speed;
              aniState.repeatCount = (_clipData$repeatCount = clipData.repeatCount) != null ? _clipData$repeatCount : aniState.repeatCount;
              aniState.delay = (_clipData$delay = clipData.delay) != null ? _clipData$delay : aniState.delay;
            }
          }
        }

        resolveTargetName(sel) {
          var _this$_resolver2;

          //--查表分開到特殊工具處理
          const target = (_this$_resolver2 = this._resolver) == null ? void 0 : _this$_resolver2.resolveProp(sel);

          if (target) {
            this._currentTarget = target;
            return target;
          }

          this._currentTarget = this._defaultTarget;
          return this._defaultTarget;
        } //--20251011-新增直接查詢播放資料的功能(他不會改變當前播放狀態)


        peakAniDataInfo(value) {
          var _this$_resolver3;

          return (_this$_resolver3 = this._resolver) == null ? void 0 : _this$_resolver3.resolveProp(value);
        }
        /*
        private checkAniPlayData(targetName: string): AniCtrlPropDef {
            const foundData = this._animationPlayInfoList.clipsInfo.find(data => data.targetName === targetName);
            if (foundData) {
                this._currentTarget = foundData;
                return foundData;
            }
            this._currentTarget = this._defaultTarget;
            return this._defaultTarget;
        }*/


        getOriginAniData(value) {
          return this._originAniData.find(clip => clip.targetName === value);
        }

        onObjInstance() {}

        onAfterDestroy() {
          var _this$_resolver4;

          (_this$_resolver4 = this._resolver) == null || _this$_resolver4.onDispose == null || _this$_resolver4.onDispose();
          this._resolver = undefined;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_animationPlayInfoList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new (_crd && AnimationPlayInfoList === void 0 ? (_reportPossibleCrUseOfAnimationPlayInfoList({
            error: Error()
          }), AnimationPlayInfoList) : AnimationPlayInfoList)();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_animationStateList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new (_crd && AnimationStateList === void 0 ? (_reportPossibleCrUseOfAnimationStateList({
            error: Error()
          }), AnimationStateList) : AnimationStateList)();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "particleSystem", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "targetNodeId", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "frameRate", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 60;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "tokenID", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "prefabKey", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "goBackDefaultWithoutDestroy", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_afterPlayDoStop", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "isAEP_SPINE", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "aepSpines", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "_clearTracks", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new (_crd && ClearTrackTypeState === void 0 ? (_reportPossibleCrUseOfClearTrackTypeState({
            error: Error()
          }), ClearTrackTypeState) : ClearTrackTypeState)();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2cd8331e4cb3eee0fb48e4834a98b73dd1ab1baf.js.map