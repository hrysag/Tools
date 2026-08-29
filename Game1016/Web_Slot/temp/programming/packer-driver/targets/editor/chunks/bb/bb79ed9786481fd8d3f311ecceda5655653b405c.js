System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCBoolean, CCString, Component, EventTarget, sp, ParticleExtension, CleanTrackType, AnimationSelectionResolver, FindComponent, SpineAniPlayInfoList, SpineCtrlPropDef, AnimationStateList, ClearTrackTypeState, AnimationStateType, StopClearMode, SpineSequencePlay, SEQUENCE_EVENTS, ANI_SYS_EVENTS, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, SpineController;

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

  function _reportPossibleCrUseOfSpinePlayParams(extras) {
    _reporterNs.report("SpinePlayParams", "../Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCleanTrackType(extras) {
    _reporterNs.report("CleanTrackType", "../Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRepeatOption(extras) {
    _reporterNs.report("RepeatOption", "../Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlaySelector(extras) {
    _reporterNs.report("PlaySelector", "../Definitions/IPlayOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationSelectionResolver(extras) {
    _reporterNs.report("AnimationSelectionResolver", "../AniTools/AniSelectionResolver", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReelInfo(extras) {
    _reporterNs.report("IReelInfo", "../../BasicGameDataDefinition/BasicGameDataDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../../FindComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineAniPlayInfoList(extras) {
    _reporterNs.report("SpineAniPlayInfoList", "./AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineCtrlPropDef(extras) {
    _reporterNs.report("SpineCtrlPropDef", "./AniStateLists/AnimationPlayStateBase", _context.meta, extras);
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

  function _reportPossibleCrUseOfIStopOptions(extras) {
    _reporterNs.report("IStopOptions", "../Definitions/IStopOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStopClearMode(extras) {
    _reporterNs.report("StopClearMode", "../Definitions/IStopOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineSequencePlay(extras) {
    _reporterNs.report("SpineSequencePlay", "./AniStateLists/SpineSequencePlay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSEQUENCE_EVENTS(extras) {
    _reporterNs.report("SEQUENCE_EVENTS", "./AniStateLists/Events", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEVENT_DATA(extras) {
    _reporterNs.report("EVENT_DATA", "../../EventSystem/EventData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfANI_SYS_EVENTS(extras) {
    _reporterNs.report("ANI_SYS_EVENTS", "./AniEvents/AniSysEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniSysEventData(extras) {
    _reporterNs.report("AniSysEventData", "./AniEvents/AniSysEvents", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCBoolean = _cc.CCBoolean;
      CCString = _cc.CCString;
      Component = _cc.Component;
      EventTarget = _cc.EventTarget;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      ParticleExtension = _unresolved_2.ParticleExtension;
    }, function (_unresolved_3) {
      CleanTrackType = _unresolved_3.CleanTrackType;
    }, function (_unresolved_4) {
      AnimationSelectionResolver = _unresolved_4.AnimationSelectionResolver;
    }, function (_unresolved_5) {
      FindComponent = _unresolved_5.FindComponent;
    }, function (_unresolved_6) {
      SpineAniPlayInfoList = _unresolved_6.SpineAniPlayInfoList;
      SpineCtrlPropDef = _unresolved_6.SpineCtrlPropDef;
      AnimationStateList = _unresolved_6.AnimationStateList;
      ClearTrackTypeState = _unresolved_6.ClearTrackTypeState;
      AnimationStateType = _unresolved_6.AnimationStateType;
    }, function (_unresolved_7) {
      StopClearMode = _unresolved_7.StopClearMode;
    }, function (_unresolved_8) {
      SpineSequencePlay = _unresolved_8.SpineSequencePlay;
    }, function (_unresolved_9) {
      SEQUENCE_EVENTS = _unresolved_9.SEQUENCE_EVENTS;
    }, function (_unresolved_10) {
      ANI_SYS_EVENTS = _unresolved_10.ANI_SYS_EVENTS;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "764f7xntN5NZIeNwMQftA2c", "SpineController", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'CCString', 'Component', 'Enum', 'EventTarget', 'Node', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpineController", SpineController = (_dec = ccclass('SpineController'), _dec2 = property({
        type: _crd && SpineAniPlayInfoList === void 0 ? (_reportPossibleCrUseOfSpineAniPlayInfoList({
          error: Error()
        }), SpineAniPlayInfoList) : SpineAniPlayInfoList,
        displayName: 'SpineAniPlayInfoList',
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
        type: CCBoolean,
        visible: true,
        tooltip: '中軟的要勾選,不然預設會先clearTracks一次'
      }), _dec5 = property({
        visible: true,
        tooltip: 'spineFPS'
      }), _dec6 = property({
        tooltip: 'prefab(放component的nodeId)的node id'
      }), _dec7 = property({
        type: _crd && ParticleExtension === void 0 ? (_reportPossibleCrUseOfParticleExtension({
          error: Error()
        }), ParticleExtension) : ParticleExtension,
        displayName: 'particleSystem',
        visible: true,
        tooltip: '粒子系統'
      }), _dec8 = property({
        tooltip: '單一識別碼'
      }), _dec9 = property({
        tooltip: 'prefabKey(用來辨識prefab的)'
      }), _dec10 = property({
        tooltip: '回收回到預設狀態,不做動畫本身清除重置<中軟專屬要勾選>'
      }), _dec11 = property({
        visible: true,
        tooltip: '是否要播放完畢後停止'
      }), _dec12 = property({
        type: _crd && ClearTrackTypeState === void 0 ? (_reportPossibleCrUseOfClearTrackTypeState({
          error: Error()
        }), ClearTrackTypeState) : ClearTrackTypeState,
        visible: true,
        tooltip: '清除模式(中軟要選擇CURRENT_TRACK)'
      }), _dec13 = property({
        type: _crd && SpineSequencePlay === void 0 ? (_reportPossibleCrUseOfSpineSequencePlay({
          error: Error()
        }), SpineSequencePlay) : SpineSequencePlay,
        visible: true,
        tooltip: '使用播放序列腳本'
      }), _dec14 = property({
        type: [CCString],
        visible: true,
        tooltip: 'defaultSkins'
      }), _dec(_class = (_class2 = class SpineController extends Component {
        //---用來判斷是否第一次onLoad
        get spine() {
          return this._spine;
        }

        get animationPlayInfoList() {
          return this._animationPlayInfoList;
        }

        get defaultTarget() {
          return this._defaultTarget;
        }

        set spineSequencePlayFrameEventCallBack(value) {
          this._spineSequencePlayFrameEventCallBack = value;
        } //--用來存放原始的動畫資料reset將會塞回去


        constructor() {
          super();
          this.slotMachineIndexInfo = void 0;
          this.groupID = void 0;
          //--會有同一個物件在不同的group裡面(第四軸重複的)
          this.isPlaying = void 0;
          this.keep = void 0;

          //--不刪除且持續留在場景中
          //--resetData會保留此資料
          _initializerDefineProperty(this, "_animationPlayInfoList", _descriptor, this);

          //--他會依照animationPlayStateList的clipsInfo來決定要播放的動畫
          _initializerDefineProperty(this, "_animationStateList", _descriptor2, this);

          _initializerDefineProperty(this, "_useDefaultInit", _descriptor3, this);

          //--是否要使用預設的初始化(中軟美術會設定default的動畫,總部則不會使用)
          _initializerDefineProperty(this, "_frameRate", _descriptor4, this);

          _initializerDefineProperty(this, "targetNodeId", _descriptor5, this);

          //--prefab(放component的nodeId)的node id
          _initializerDefineProperty(this, "particleSystem", _descriptor6, this);

          _initializerDefineProperty(this, "tokenID", _descriptor7, this);

          //--單一的識別碼
          _initializerDefineProperty(this, "prefabKey", _descriptor8, this);

          //--prefab的key(用來辨識prefab的)
          _initializerDefineProperty(this, "goBackDefaultWithoutDestroy", _descriptor9, this);

          _initializerDefineProperty(this, "_afterPlayDoStop", _descriptor10, this);

          _initializerDefineProperty(this, "_clearTracks", _descriptor11, this);

          _initializerDefineProperty(this, "_spineSequencePlay", _descriptor12, this);

          //---20250522--FIX spine用2進位資料後,讀取skin的attachments會有問題(因為沒有JSON可以讀取了)
          _initializerDefineProperty(this, "_defaultSkins", _descriptor13, this);

          this._spine = void 0;
          this._duration = void 0;
          //--當前播放的總長度
          this._frames = void 0;
          //--當前播放的總frame數
          this._secondsPerFrame = void 0;
          //--每一個frame的時間
          this._aniStartTime = void 0;
          //--每個trackEntry的開始時間
          this._aniEndTime = void 0;
          //--每個trackEntry的結束時間
          this._repeatOption = {
            isRepeat: false,
            count: 0
          };
          //--重複次數
          this._targetTimeForPlayToTimeAndStop = void 0;
          this._isReverse = void 0;
          this._isPlayToTimeAndStop = void 0;
          this._isLoop = void 0;
          this._originSkinData = void 0;
          this._defaultSkin = 'default';
          this._defaultTarget = null;
          this._currentTarget = null;
          this._eventTarget = void 0;
          this._mapEvent = new Map();
          this._mapMultipleCompleteEvent = new Map();
          this._handlerCacheMap = new Map();
          // cache(確保產生唯一的)
          this._isListenForKeyFrame = false;
          this._spineAniResolvePromise = void 0;
          // promise resolve 函式
          this._sequenceResolvePromise = void 0;
          // promise resolve 函式
          this._spineSequencePlayFrameEventCallBack = void 0;
          this._spineAniCallback = void 0;
          this.generalAniCompleteCheck = void 0;
          this._resolver = void 0;
          //protected _currentTarget!: SpineCtrlPropDef;
          //protected _defaultTarget!: SpineCtrlPropDef;
          this._dirtyFirstOnLoad = false;
          this._originAniData = new Map();

          //--override it do something after sequence event
          this.onSequencePlayEventHandler = value => {
            if (value.eventType == (_crd && SEQUENCE_EVENTS === void 0 ? (_reportPossibleCrUseOfSEQUENCE_EVENTS({
              error: Error()
            }), SEQUENCE_EVENTS) : SEQUENCE_EVENTS).COMPLETE) {
              if (this._sequenceResolvePromise) {
                this._sequenceResolvePromise();

                this._sequenceResolvePromise = null;
              }
            } else if (value.eventType == (_crd && SEQUENCE_EVENTS === void 0 ? (_reportPossibleCrUseOfSEQUENCE_EVENTS({
              error: Error()
            }), SEQUENCE_EVENTS) : SEQUENCE_EVENTS).FRAME_EVENT) {
              var _this$_spineSequenceP;

              (_this$_spineSequenceP = this._spineSequencePlayFrameEventCallBack) == null || _this$_spineSequenceP.call(this, value);
            }
          };

          this.checkAndAddKeyFrameEvent = (trackEntry, event) => {
            //@ts-ignore
            let evtKey = event.data.name;

            if (this._mapEvent.has(evtKey)) {
              let listeners = this._mapEvent.get(evtKey);

              if (listeners) {
                for (let listener of listeners) {
                  listener(evtKey);
                }
              }
            }
          };

          this.isPlaying = false; //--_duration/_frames/_secondsPerFrame這些要播放才拿的到

          this._duration = 0;
          this._frames = 0;
          this._secondsPerFrame = 0;
          this._aniStartTime = 0;
          this._aniEndTime = 0;
          this._isReverse = false;
          this._isLoop = false;
          this._isPlayToTimeAndStop = false;
          this._targetTimeForPlayToTimeAndStop = 0;
          this.groupID = [];
          this._eventTarget = new EventTarget();
          this._originSkinData = {};
          this.keep = false;
          this._repeatOption = {
            isRepeat: false,
            count: 0
          };
        }
        /*
        public addEventListener(evtType: string, listener: () => void): void {
            this._eventTarget.on(evtType, listener);
        }
        public removeEventListener(evtType: string, listener: () => void): void {
            this._eventTarget.off(evtType, listener);
        }
         public hasEventListener(evtType: string): boolean {
            return this._eventTarget.hasEventListener(evtType);
        }
         public dispatchEvent(evt: any): void {
            this._eventTarget.emit(evt);
        }*/
        //--active=true 會觸發 onLoad()   


        onLoad() {
          if (this._dirtyFirstOnLoad) return;
          this._dirtyFirstOnLoad = true;
          this._spine = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
            error: Error()
          }), FindComponent) : FindComponent).findComponentInChildren(this.node, sp.Skeleton); //--是否使用預設的動畫狀態,總部沒有設定預設狀態

          /**
           * 是否使用預設的動畫狀態(總部沒有設定預設狀態)
           * 可是因為中軟的美術會設定default的動畫,所以這邊要有一個開關
           * 在使用預設狀態的情況下,會清除所有的track情況下
           * 因為中軟的美術在清光track的情況下的動畫動作沒有設定預設值阿=..=
           * 所以會爆開
           */

          if (!this._useDefaultInit) {
            this._spine.clearTracks();
          } //--_animationPlayStateList不做處理


          if (!this._animationPlayInfoList) {
            this._animationPlayInfoList = new (_crd && SpineAniPlayInfoList === void 0 ? (_reportPossibleCrUseOfSpineAniPlayInfoList({
              error: Error()
            }), SpineAniPlayInfoList) : SpineAniPlayInfoList)();
            this._animationPlayInfoList.clipsInfo = [];
          } else {
            for (let data of this._animationPlayInfoList.clipsInfo) {
              if (data.useDefault) {
                this._defaultTarget = data;
                break;
              }
            }
          } //--20251217--存放原始動畫資料


          this.saveOriginAniData(this._originAniData); //--建立查找(IPlayOptions)工具與快取表

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


          let skeletonData = this._spine.skeletonData;
          let skinDataWithAttachment = null;

          if (skeletonData.skeletonJson) {
            skinDataWithAttachment = skeletonData.skeletonJson['skins']; //--裡面會包含Attachment的資料  
          } //-Since v3.7.2, this is an engine private function, it only works in editor.
          //let testSkin = skeletonData.getSkinsEnum()[1];---乖乖地取skeletonJson的資料吧


          if (skinDataWithAttachment) {
            //--這邊給讀取JSON使用的
            for (let skinData of skinDataWithAttachment) {
              this._originSkinData[skinData.name] = skinData.attachments;
            }
          } else {
            //--這邊給讀取二進位資料使用的因為skeletonData.skeletonJson=null
            if (this._defaultSkins.length > 0) {
              for (let skinData of this._defaultSkins) {
                this._originSkinData[skinData] = {}; //--先這樣啦
              }
            }
          }

          this.generalAniCompleteCheck = trackEntry => {
            this.onSpineCompleteHandler(trackEntry);
          }; //=====給需要的人用,監聽完成load事件=====================


          const spinCtrlEvtData = {
            eventName: (_crd && ANI_SYS_EVENTS === void 0 ? (_reportPossibleCrUseOfANI_SYS_EVENTS({
              error: Error()
            }), ANI_SYS_EVENTS) : ANI_SYS_EVENTS).CTRL_LOADED,
            ctrlId: this.prefabKey ? this.prefabKey : this.targetNodeId,
            loaded: {
              message: 'spineCtrl is loaded'
            }
          };
          this.node.emit((_crd && ANI_SYS_EVENTS === void 0 ? (_reportPossibleCrUseOfANI_SYS_EVENTS({
            error: Error()
          }), ANI_SYS_EVENTS) : ANI_SYS_EVENTS).CTRL_LOADED, spinCtrlEvtData); //let duration=this._spine.getCurrent(0).animation.duration;

          let animationStates = this._spine.getState();

          let animation = this._spine.animation; //--動畫播出的名稱

          let trackEntry = this._spine.getState().getCurrent(0); //-要撥放動畫才會產生


          let animations = this._spine.getState().data.skeletonData.animations; //--有多少動畫


          let trackTrackEntrys = this._spine.getState().tracks; //-要撥放動畫才會產生
          //console.log('check_spine', this._spine.getState().getCurrent(0));

          /*
          console.log(
              'check_spine',
              '\nspineNodeName:', this.spine.node.name,
              '\nanimationStates:', animationStates,
              '\nanimation:', animation,
              '\ntrackEntry:', trackEntry,
              '\nanimations:', animations,
              //'\duration:', duration,
              '\ntrackTrackEntrys:', trackTrackEntrys
          );*/
          //console.log('check_name:', this.spine.node.parent.name, this.spine.node.name, this._animationPlayStateList);

        }

        async testBtnEvent(ev, value) {
          console.log('testBtnEvent:', ev, value);
          this.playAni((_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
            error: Error()
          }), AnimationStateType) : AnimationStateType).Loop); //await this.playAniInPromise(AnimationStateType.Win);
          //await this.playAniInPromise({ targetName: 'Connect' });
          //await this.playAniInPromise(AnimationStateType.Win);

          console.log();
        }

        init() {
          var _this$_resolver;

          if (this._spineSequencePlay) {
            this._spineSequencePlay.init();

            this._spineSequencePlay.clearTracksSetting = this._clearTracks.trackType;
            this._spineSequencePlay.sp = this._spine;

            this._spineSequencePlay.on((_crd && SEQUENCE_EVENTS === void 0 ? (_reportPossibleCrUseOfSEQUENCE_EVENTS({
              error: Error()
            }), SEQUENCE_EVENTS) : SEQUENCE_EVENTS).FRAME_EVENT, this.onSequencePlayEventHandler);

            this._spineSequencePlay.on((_crd && SEQUENCE_EVENTS === void 0 ? (_reportPossibleCrUseOfSEQUENCE_EVENTS({
              error: Error()
            }), SEQUENCE_EVENTS) : SEQUENCE_EVENTS).COMPLETE, this.onSequencePlayEventHandler);
          }

          (_this$_resolver = this._resolver) == null || _this$_resolver.rebuildAnimationCaches();
          this.ensureDefaultTargetFromList();
        } //--存放原始動畫資料


        saveOriginAniData(spinePlayInfo) {
          if (this._animationPlayInfoList.clipsInfo.length === 0) return;

          for (let data of this._animationPlayInfoList.clipsInfo) {
            let playData = new (_crd && SpineCtrlPropDef === void 0 ? (_reportPossibleCrUseOfSpineCtrlPropDef({
              error: Error()
            }), SpineCtrlPropDef) : SpineCtrlPropDef)();
            playData.targetName = data.targetName;

            if (this.isDefined(data == null ? void 0 : data.timeScale)) {
              playData.timeScale = data.timeScale;
            }

            if (this.isDefined(data == null ? void 0 : data.loop)) {
              playData.loop = data.loop;
            }

            if (this.isDefined(data == null ? void 0 : data.skinName)) {
              playData.skinName = data.skinName;
            }

            if (data.repeatCount !== undefined && data.repeatCount !== null) {
              playData.repeatCount = data.repeatCount;
            }

            spinePlayInfo.set(data.targetName, playData);
          }
        }

        ensureDefaultTargetFromList() {
          var _this$_animationPlayI3, _this$_animationPlayI4, _ref, _list$find;

          if (this._defaultTarget) return;
          const list = (_this$_animationPlayI3 = (_this$_animationPlayI4 = this._animationPlayInfoList) == null ? void 0 : _this$_animationPlayI4.clipsInfo) != null ? _this$_animationPlayI3 : [];
          this._defaultTarget = (_ref = (_list$find = list.find(d => d == null ? void 0 : d.useDefault)) != null ? _list$find : list[0]) != null ? _ref : null;
        }

        /**
         * 將修改的播放參數還原成原本的資料
         * @param playId spine animation playInfo
         */
        reSetPlayInfoToOriginData(playId) {
          const originData = this._originAniData.get(playId);

          if (!originData) return;

          const targetData = this._animationPlayInfoList.clipsInfo.find(d => d.targetName === playId);

          if (!targetData) return;
          targetData.timeScale = originData.timeScale;
          targetData.loop = originData.loop;
          targetData.repeatCount = originData.repeatCount;
        }

        onSpineCompleteHandler(trackEntry) {
          if (!this._isLoop) {
            this.onAniComplete();
            let currentAniId = '';

            if (trackEntry == undefined || trackEntry == null) {
              currentAniId = this._currentTarget.targetName;
            } else {
              currentAniId = trackEntry.animation.name;
            }

            this.reSetPlayInfoToOriginData(currentAniId);
          }
        }

        safeRemoveSequencePlayFrameEventCallBack() {
          this._spineSequencePlayFrameEventCallBack = null;
        } //--銷毀前處理掉promise resolve避免沒銷毀的pending promise


        safeResolveSpinePromise(resolve) {
          var _this$_spine;

          (_this$_spine = this._spine) == null || _this$_spine.setCompleteListener(null);

          if (resolve) {
            resolve();
          } else if (this._spineAniResolvePromise) {
            this._spineAniResolvePromise();
          }

          this._spineAniResolvePromise = null;
        } //--銷毀前處理掉spine complete callback


        safeResolveSpineCallback() {
          var _this$_spine2, _this$_spineAniCallba;

          (_this$_spine2 = this._spine) == null || _this$_spine2.setCompleteListener(null);
          (_this$_spineAniCallba = this._spineAniCallback) == null || _this$_spineAniCallba.call(this);
          this._spineAniCallback = undefined;
        }

        removeMultipleCompleteEvent(value) {
          const handler = this._handlerCacheMap.get(value);

          if (handler) {
            const registeredHandler = this._mapMultipleCompleteEvent.get(value);

            if (registeredHandler === handler) {
              this._mapMultipleCompleteEvent.delete(value);
            }

            this._handlerCacheMap.delete(value);
          }

          if (this._mapMultipleCompleteEvent.size === 0) {
            this._spine.setCompleteListener(null);
          }
        }

        clearAllMultipleCompleteEvent() {
          this._mapMultipleCompleteEvent.clear(); // 移除正在監聽的事件


          this._handlerCacheMap.clear(); // 釋放 handler 實體


          this._spine.setCompleteListener(null); // 解除 spine 綁定

        }

        setKeyFrameEvent(value, listener) {
          if (!this._mapEvent.has(value)) {
            this._mapEvent.set(value, [listener]);

            this.listenKeyFrameEvent();
            return;
          }

          const listeners = this._mapEvent.get(value);

          if (listeners) {
            if (!listeners.includes(listener)) {
              listeners.push(listener);
            }
          }
        }

        removeKeyFrameEvent(value, listener) {
          if (!this._mapEvent.has(value)) {
            return;
          }

          if (listener) {
            const listeners = this._mapEvent.get(value);

            if (listeners) {
              const index = listeners.indexOf(listener);

              if (index !== -1) {
                listeners.splice(index, 1);

                if (listeners.length === 0) {
                  this._mapEvent.delete(value); // 如果陣列變空，刪除整個 key

                }
              }
            }
          } else {
            this._mapEvent.delete(value);
          }

          if (this._mapEvent.size === 0) {
            this._spine.setEventListener(null);

            this._isListenForKeyFrame = false;
          }
        }

        hasKeyFrameEvent(value) {
          return this._mapEvent.has(value);
        }

        clearKeyFrameEvent() {
          this._mapEvent.clear();

          this._spine.setEventListener(null);

          this._isListenForKeyFrame = false;
        }

        breakKeyFrameEvent() {
          this._spine.setEventListener(null);

          this._isListenForKeyFrame = false;
        } //--只會在第一次添加的時候塞到setEventListener(只會塞一次)


        listenKeyFrameEvent() {
          if (!this._isListenForKeyFrame && this._spine && this._mapEvent.size > 0) {
            this._spine.setEventListener(this.checkAndAddKeyFrameEvent);

            this._isListenForKeyFrame = true;
          }
        }

        setAniDataInfo(value) {
          //let playData = this.getCustomizeSpineTrackEntry(value.targetName);
          let playData = this._resolver.resolveProp(value.targetName);

          let targetData = value;

          if (!playData) {
            playData = new (_crd && SpineCtrlPropDef === void 0 ? (_reportPossibleCrUseOfSpineCtrlPropDef({
              error: Error()
            }), SpineCtrlPropDef) : SpineCtrlPropDef)();
            playData.targetName = value.targetName;

            this._animationPlayInfoList.clipsInfo.push(playData);

            this._resolver.rebuildAnimationCaches();
          }

          if (this.isDefined(targetData == null ? void 0 : targetData.timeScale)) {
            playData.timeScale = targetData.timeScale;
          }

          if (this.isDefined(targetData == null ? void 0 : targetData.loop)) {
            playData.loop = targetData.loop;
          }

          if (this.isDefined(targetData == null ? void 0 : targetData.skinName)) {
            playData.skinName = targetData.skinName;
          } //--功能待實作...


          if (targetData.repeatCount !== undefined && targetData.repeatCount !== null) {
            playData.repeatCount = targetData.repeatCount;
          }

          this._defaultTarget = playData;
        }

        changeSkin(value) {
          if (this._spine) {
            let skinId = this._defaultSkin;

            if (this._originSkinData[value]) {
              skinId = value;
            } //let index = this.getSkinFrontEnumIndex(skinId);
            //@ts-ignore
            //this._spine._defaultSkinIndex = index;


            this._spine.setSkin(skinId); //console.log('setSkinID:', skinId, this._originSkinData[skinId]);

          }
        }

        update(dt) {
          if (this._spine && this.isPlaying) {
            if (this._isReverse) {
              this.checkUpdateAboutReverse(dt);
            }

            if (this._isPlayToTimeAndStop) {
              this.checkUpdateAboutPlayToTimeAndStop(dt);
            }
          }
        }

        checkUpdateAboutReverse(dt) {
          let current = this._spine.getCurrent(0);

          current.timeScale = -1;
          current.trackTime = this._duration;
          this._duration -= dt;

          if (this._duration < 0) {
            if (this._isLoop) {
              this._duration = current.animation.duration;
              current.trackTime = this._duration;
            } else {
              this._isReverse = false;
              this.stopAni();
              return;
            }
          }
        }

        checkUpdateAboutPlayToTimeAndStop(dt) {
          let current = this._spine.getCurrent(0);

          if (current.trackTime >= this._targetTimeForPlayToTimeAndStop) {
            this._isPlayToTimeAndStop = false;
            this.stopAni();
          }
        }

        resetSpinePoseData() {
          //return;
          if (this._spine) {
            this._spine.setToSetupPose();

            this._spine.setBonesToSetupPose();

            this._spine.setSlotsToSetupPose();
          }
        }

        pauseAni() {
          if (this._spine) {
            this._spine.timeScale = 0;
          }
        }

        resumeAni() {
          if (this._spine) {
            this._spine.timeScale = 1;
          }
        }

        speedUpAni(value) {
          if (this._spine) {
            let timeScale = this._spine.timeScale;
            let speed = value ? value : timeScale + 0.2;
            this._spine.timeScale = speed; // 加速播放
          }
        }

        slowDownAni(value) {
          if (this._spine) {
            let timeScale = this._spine.timeScale;
            let speed = value ? value : timeScale - 0.2;
            this._spine.timeScale = speed; // 減速播放

            if (this._spine.timeScale < 0) {
              this._spine.timeScale = 0;
            }
          }
        }

        reversePlay(value) {
          if (this._spine) {
            let playData = this.resolveTargetName(value);
            let trackIndex = playData.trackIndex ? playData.trackIndex : 0;

            this._spine.setCompleteListener(null);

            this._spine.setCompleteListener(this.generalAniCompleteCheck);

            this._isLoop = playData.loop;

            let trackEntry = this._spine.setAnimation(trackIndex, playData.targetName, false);

            trackEntry.trackTime = trackEntry.animation.duration;
            this.setCurrentSpineAniData(trackEntry);
            this.isPlaying = true;
            this._isReverse = true;
          }
        }

        gotoAndPlayByTime(value, time) {
          if (this._spine) {
            let playData = this.resolveTargetName(value);
            let timeScale = playData.timeScale ? playData.timeScale : 1;
            this._spine.timeScale = timeScale;
            let trackIndex = playData.trackIndex ? playData.trackIndex : 0;
            this.isPlaying = true;

            this._spine.setCompleteListener(null);

            this._spine.setCompleteListener(this.generalAniCompleteCheck);

            let trackEntry = this._spine.setAnimation(trackIndex, playData.targetName, playData.loop);

            this._spine.timeScale = 0; //--停止播放

            this.setCurrentSpineAniData(trackEntry);
            let moveToStartTime = time;
            if (moveToStartTime <= 0) moveToStartTime = 0;
            trackEntry.animationStart = moveToStartTime;
            trackEntry.animationEnd = this._aniEndTime;
            this._spine.timeScale = timeScale; //---回復播放
          }
        } //--這邊沒辦法知道spine的fps


        gotoAndPlayByFrame(value, frame) {
          if (this._spine) {
            let playData = this.resolveTargetName(value);
            let timeScale = playData.timeScale ? playData.timeScale : 1;
            this._spine.timeScale = timeScale;
            let trackIndex = playData.trackIndex ? playData.trackIndex : 0;
            this.isPlaying = true;

            this._spine.setCompleteListener(null);

            this._spine.setCompleteListener(this.generalAniCompleteCheck);

            let trackEntry = this._spine.setAnimation(trackIndex, playData.targetName, playData.loop);

            this._spine.timeScale = 0; //--停止播放

            this.setCurrentSpineAniData(trackEntry);
            let moveToStartTime = frame * this._secondsPerFrame;
            if (moveToStartTime <= 0) moveToStartTime = 0;
            trackEntry.animationStart = moveToStartTime;
            trackEntry.animationEnd = this._aniEndTime;
            this._spine.timeScale = timeScale; //---回復播放
          }
        }
        /**
         * 20251020新增方法
         * @param value 取得播放的動畫資料key
         * @param time 移動到某個時間點開始播放
         */


        changePlayTime(time, value) {
          if (!this.isPlaying) return;

          if (this._spine) {
            const entry = this._spine.getCurrent(this._currentTarget.trackIndex); //console.log('changePlayTime_entry:', entry);
            //console.log(entry.trackTime, time);
            //console.log();


            let moveToStartTime = time;
            if (moveToStartTime <= 0) moveToStartTime = 0;
            entry.trackTime = moveToStartTime;
            this.spine.updateAnimation(0);
          }
        }
        /**
         * PS-20251217先改時間,剩下之後再看要改什麼
         * @param value 
         * @param t 時間
         * @param infoTarget -預留更換的參數
         * @returns 
         */


        changePlayInfo(value, t, infoTarget) {
          if (!this.isPlaying) return;
          if (!this._spine) return;
          const aniCtrlInfo = this.getAniPlayDataByPlaySelector(value);
          if (!aniCtrlInfo) return;

          const ani = this._spine.findAnimation(aniCtrlInfo.targetName);

          if (!ani) return;
          const duration = ani.duration;
          const speed = duration / t;
          aniCtrlInfo.timeScale = speed; //---之後再看要改什麼

          /*
          if (infoTarget.timeScale) {
              const duration = ani.duration;
              const speed = duration / t;
              aniCtrlInfo.timeScale = speed;
          }*/
        }
        /**
         * 20251020新增方法
         * 直接播放到最後一格
         * 如果動畫長度 < 1 秒，start 會變成負數；或是計算的 start 超過尾端
         * 所以把 start 夾在 [0, end - EPS] 之內，避免越界
         * @param value 
         */


        gotoPlayLastFrame(value) {
          if (!this.isPlaying) return;

          if (this._spine) {
            const EPS = 1e-6; //--避免最後一個frame沒辦法正確sample

            const entry = this._spine.getCurrent(this._currentTarget.trackIndex); //console.log('gotoPlayLastFrame_entry:', entry, entry.animation.duration, entry.animationEnd);


            const spEnd = entry.animation.duration; //const spStart = Math.max(0, spEnd - 1);
            //const spFinalTime = Math.max(0, Math.min(spStart, spEnd - EPS));

            const spFinalTime = spEnd - 0.32; //--0.32是倒數第二格

            entry.trackTime = spFinalTime;
            this.spine.updateAnimation(0);
          }
        } //-移動到某個時間點並停止(這邊的停止是暫停..而非cleanTracks)


        gotoAndStopByTime(value, time) {
          if (this._spine) {
            let playData = this.resolveTargetName(value);
            let timeScale = playData.timeScale ? playData.timeScale : 1;
            this._spine.timeScale = timeScale;
            let trackIndex = playData.trackIndex ? playData.trackIndex : 0;

            this._spine.setCompleteListener(null);

            this._spine.setCompleteListener(this.generalAniCompleteCheck);

            let trackEntry = this._spine.setAnimation(trackIndex, playData.targetName, playData.loop);

            this.setCurrentSpineAniData(trackEntry);
            trackEntry.trackTime = time;
            this._spine.timeScale = 0; //--停止播放

            this.isPlaying = false;
          }
        } //-移動到某個時間點並停止(這邊的停止是暫停..而非cleanTracks)


        gotoAndStopByFrame(value, frame) {
          if (this._spine) {
            let playData = this.resolveTargetName(value);
            let timeScale = playData.timeScale ? playData.timeScale : 1;
            this._spine.timeScale = timeScale;
            let trackIndex = playData.trackIndex ? playData.trackIndex : 0;

            this._spine.setCompleteListener(null);

            this._spine.setCompleteListener(this.generalAniCompleteCheck);

            let trackEntry = this._spine.setAnimation(trackIndex, playData.targetName, playData.loop);

            this.setCurrentSpineAniData(trackEntry);
            let moveToStartTime = frame * this._secondsPerFrame;
            if (moveToStartTime <= 0) moveToStartTime = 0;
            trackEntry.trackTime = moveToStartTime;
            this._spine.timeScale = 0; //--停止播放

            this.isPlaying = false;
          }
        }

        playToTimeAndStop(value, time) {
          if (this._spine) {
            let playData = this.resolveTargetName(value);
            let timeScale = playData.timeScale ? playData.timeScale : 1;
            this._spine.timeScale = timeScale;
            let trackIndex = playData.trackIndex ? playData.trackIndex : 0;

            this._spine.setCompleteListener(null);

            this._spine.setCompleteListener(this.generalAniCompleteCheck);

            let trackEntry = this._spine.setAnimation(trackIndex, playData.targetName, false);

            this._spine.timeScale = 0; //--停止播放

            this.setCurrentSpineAniData(trackEntry);
            this._isPlayToTimeAndStop = true;
            this._targetTimeForPlayToTimeAndStop = time;
            this.isPlaying = true;
            this._spine.timeScale = 1;
          }
        }

        playToFrameAndStop(value, frame) {
          if (this._spine) {
            let playData = this.resolveTargetName(value);
            let timeScale = playData.timeScale ? playData.timeScale : 1;
            this._spine.timeScale = timeScale;
            let trackIndex = playData.trackIndex ? playData.trackIndex : 0;

            this._spine.setCompleteListener(null);

            this._spine.setCompleteListener(this.generalAniCompleteCheck);

            let trackEntry = this._spine.setAnimation(trackIndex, playData.targetName, false);

            this._spine.timeScale = 0; //--停止播放

            this.setCurrentSpineAniData(trackEntry);
            let moveToStartTime = frame * this._secondsPerFrame;
            if (moveToStartTime <= 0) moveToStartTime = 0;
            this._targetTimeForPlayToTimeAndStop = moveToStartTime;
            this._isPlayToTimeAndStop = true;
            this.isPlaying = true;
            this._spine.timeScale = 1;
          }
        }
        /**
         * <這邊不會掛上監聽就單純的for中軟美術切回default的動畫狀態>
         * 播放動畫預設狀態,有動畫播放
         */


        goBackToDefault(flag = true) {
          const playData = this.resolveTargetName((_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
            error: Error()
          }), AnimationStateType) : AnimationStateType).Default);

          if (this._spine) {
            if (flag) {
              this.forceSafeResolveSpinePromise();
              this.forceSafeResolveSpineCallback();
            }

            this.isPlaying = true;
            this._spine.timeScale = playData.timeScale ? playData.timeScale : 1;
            let trackIndex = playData.trackIndex ? playData.trackIndex : 0;
            this.isPlaying = true;
            this._isLoop = playData.loop;

            if (playData.skinName != '') {
              this._spine.node.active = true;
              this.changeSkin(playData.skinName);
            }

            this._spine.setAnimation(trackIndex, playData.targetName, playData.loop);
          }
        } //--強斷定spine的promise resolve


        forceSafeResolveSpinePromise() {
          this.safeResolveSpinePromise();
        } //--強斷定spine的call back


        forceSafeResolveSpineCallback() {
          this.safeResolveSpineCallback();
        } //--to do something before spine destroy


        beforeDestroy() {
          this.forceToDoBeforeDestroy();
          this.generalAniCompleteCheck = null;
        }

        forceToDoBeforeDestroy() {
          if (this._spine) {
            var _this$_sequenceResolv;

            this.isPlaying = false;
            this.safeResolveSpinePromise();
            this.safeResolveSpineCallback();

            if (this.particleSystem) {
              this.particleSystem.stopParticle();
            } //--在沒有勾選drop after play的選項stopAni方法將不會觸發停止撥放選項


            if (this.goBackDefaultWithoutDestroy) {
              this.goBackToDefault(false); //--回到預設狀態
            } else {
              if (this._clearTracks.trackType == (_crd && CleanTrackType === void 0 ? (_reportPossibleCrUseOfCleanTrackType({
                error: Error()
              }), CleanTrackType) : CleanTrackType).CURRENT_TRACK) {
                this.cleanCurrentTrack();
              } else {
                this.clearTracks();
              }

              this.resetSpinePoseData();
            }

            if (this._spineSequencePlay) {
              this._spineSequencePlay.resetDataBeforeDestroy();

              this._spineSequencePlay.off((_crd && SEQUENCE_EVENTS === void 0 ? (_reportPossibleCrUseOfSEQUENCE_EVENTS({
                error: Error()
              }), SEQUENCE_EVENTS) : SEQUENCE_EVENTS).FRAME_EVENT, this.onSequencePlayEventHandler);

              this._spineSequencePlay.off((_crd && SEQUENCE_EVENTS === void 0 ? (_reportPossibleCrUseOfSEQUENCE_EVENTS({
                error: Error()
              }), SEQUENCE_EVENTS) : SEQUENCE_EVENTS).COMPLETE, this.onSequencePlayEventHandler);
            }

            (_this$_sequenceResolv = this._sequenceResolvePromise) == null || _this$_sequenceResolv.call(this); //--如果有使用到sequence的promise resolve 20250623

            this._sequenceResolvePromise = null; //--_spineSequencePlay使用的

            this.safeRemoveSequencePlayFrameEventCallBack();
            this.clearKeyFrameEvent();
            this.clearAllMultipleCompleteEvent();
          }
        }

        resetData() {
          var _this$_currentTarget;

          this.forceToDoBeforeDestroy();
          this.reSetPlayInfoToOriginData((_this$_currentTarget = this._currentTarget) == null ? void 0 : _this$_currentTarget.targetName);
          this._currentTarget = null;
          this._defaultTarget = null;
          this.tokenID = ''; //--單一的識別碼

          this.slotMachineIndexInfo = null;
          this._duration = 0;
          this._frames = 0;
          this._secondsPerFrame = 0;
          this._aniStartTime = 0;
          this._aniEndTime = 0;
          this._isReverse = false;
          this._isLoop = false;
          this.isPlaying = false;
          this._isPlayToTimeAndStop = false;
          this._targetTimeForPlayToTimeAndStop = 0;
          this.groupID = [];
        }

        playAniWithCallBack(callBack, backDefault = false, value) {
          var _playData$timeScale, _playData$trackIndex, _playData$skinName;

          let playData = this.resolveTargetName(value);

          if (!playData) {
            console.warn(`SpineCtrl playAniWithCallBack can't find playData for value:${value}`);
            return;
          }

          const tempParams = {
            targetName: playData.targetName,
            timeScale: (_playData$timeScale = playData.timeScale) != null ? _playData$timeScale : 1,
            loop: playData.loop,
            trackIndex: (_playData$trackIndex = playData.trackIndex) != null ? _playData$trackIndex : 0,
            skinName: (_playData$skinName = playData.skinName) != null ? _playData$skinName : ''
          };

          const spineCompleteHandler = trackEntry => {
            this.safeResolveSpineCallback(); // 統一結束處理

            this.generalAniCompleteCheck(trackEntry);
          };

          this._spineAniCallback = () => {
            callBack();

            this._spine.setCompleteListener(null);

            this._spineAniCallback = undefined;
          };

          this.clearTracks();
          this._spine.timeScale = tempParams.timeScale ? tempParams.timeScale : 1; //--儘管是loop=true,但每次都會觸發..

          this._spine.setCompleteListener(null);

          this._spine.setCompleteListener(spineCompleteHandler);

          let trackIndex = tempParams.trackIndex ? tempParams.trackIndex : 0;
          this.isPlaying = true;
          this._isLoop = tempParams.loop;

          this._spine.setAnimation(trackIndex, tempParams.targetName, tempParams.loop);
        }

        playAniInPromise(value) {
          var _playData$timeScale2, _playData$trackIndex2, _playData$skinName2;

          const playData = this.resolveTargetName(value);

          if (!playData) {
            return Promise.resolve();
          } // 局部變數快照：提取本次播放所需的「關鍵參數」
          // 這樣即使後面執行了 reSetPlayInfoToOriginData，這組 temp 變數也不會變


          const tempParams = {
            targetName: playData.targetName,
            timeScale: (_playData$timeScale2 = playData.timeScale) != null ? _playData$timeScale2 : 1,
            loop: playData.loop,
            trackIndex: (_playData$trackIndex2 = playData.trackIndex) != null ? _playData$trackIndex2 : 0,
            skinName: (_playData$skinName2 = playData.skinName) != null ? _playData$skinName2 : ''
          }; // 觸發 reSetPlayInfoToOriginData，將 clipsInfo 裡的數值還原成預設

          this.safeResolveSpinePromise();
          return new Promise(resolve => {
            this._spineAniResolvePromise = trackEntry => {
              this.generalAniCompleteCheck(trackEntry);
              this.safeResolveSpinePromise(resolve);
            };

            this._spine.timeScale = tempParams.timeScale ? tempParams.timeScale : 1; //--儘管是loop=true,但每次都會觸發..

            this._spine.setCompleteListener(null);

            this._spine.setCompleteListener(this._spineAniResolvePromise);

            let trackIndex = tempParams.trackIndex ? tempParams.trackIndex : 0;
            this.isPlaying = true;
            this._isLoop = tempParams.loop;

            if (tempParams.skinName != '') {
              this._spine.node.active = true;
              this.changeSkin(tempParams.skinName);
            }

            this._spine.setAnimation(trackIndex, tempParams.targetName, tempParams.loop);
          });
        }

        playSequenceInPromise(value) {
          return new Promise(resolve => {
            if (this._spineSequencePlay) {
              this._sequenceResolvePromise = resolve;

              this._spineSequencePlay.playSequence(value);
            } else {
              resolve();
            }
          });
        }

        playSequenceWithCallBack(callBack, value) {
          var _this$_spineSequenceP2;

          (_this$_spineSequenceP2 = this._spineSequencePlay) == null || _this$_spineSequenceP2.playSequenceWithCallBack(value, callBack);
        }

        playSequence(sequenceName) {
          var _this$_spineSequenceP3;

          (_this$_spineSequenceP3 = this._spineSequencePlay) == null || _this$_spineSequenceP3.playSequence(sequenceName);
        }

        playAniWithAniCtrDef(value) {
          this._spine.timeScale = value.timeScale ? value.timeScale : 1;
          let trackIndex = value.trackIndex ? value.trackIndex : 0;
          this.isPlaying = true;
          this._isLoop = value.loop;

          this._spine.setCompleteListener(null);

          this._spine.setCompleteListener(this.generalAniCompleteCheck);

          this._spine.setAnimation(trackIndex, value.targetName, value.loop);
        }

        playAni(value) {
          const playData = this.resolveTargetName(value);

          if (this._spine) {
            this._spine.timeScale = playData.timeScale ? playData.timeScale : 1;
            let trackIndex = playData.trackIndex ? playData.trackIndex : 0;
            this.isPlaying = true;
            this._isLoop = playData.loop; //-this.onAniComplete

            this._spine.setCompleteListener(null);

            this._spine.setCompleteListener(this.generalAniCompleteCheck);

            if (playData.skinName != '') {
              this._spine.node.active = true;
              this.changeSkin(playData.skinName);
            }

            this._spine.setAnimation(trackIndex, playData.targetName, playData.loop);
          }
        }

        getSkinFrontEnumIndex(skinName) {
          let skinData = this._spine.skeletonData.getSkinsEnum();

          for (let i in skinData) {
            //console.log('check_skinData', i, skinData[i]);
            if (i == skinName) {
              return skinData[i];
            }
          }
        }

        setCurrentSpineAniData(trackEntry) {
          this._duration = trackEntry.animation.duration;
          this._frames = Math.ceil(this._frameRate * this._duration);
          this._secondsPerFrame = 1 / this._frameRate;
          this._aniStartTime = trackEntry.animationStart;
          this._aniEndTime = trackEntry.animationEnd;
        }

        getCurrentSpineAniData() {
          return this._currentTarget;
        } //--20251011-新增直接查詢播放資料的功能(他不會改變當前播放狀態)


        peakAniDataInfo(value) {
          var _this$_resolver2;

          return (_this$_resolver2 = this._resolver) == null ? void 0 : _this$_resolver2.resolveProp(value);
        }

        resolveTargetName(sel) {
          //--查表分開到特殊工具處理
          const target = this._resolver.resolveProp(sel);

          if (target) {
            this._currentTarget = target;
            return target;
          }

          this._currentTarget = this._defaultTarget;
          return this._defaultTarget;
          /*
          const targetName = this.processMapInfoName(sel);
          return this.checkSpinePlayData(targetName);
          */
        }
        /*
        public checkSpinePlayData(targetName: string): SpineCtrlPropDef {
            for (let data of this._animationPlayStateList.clipsInfo) {
                if (data.targetName == targetName) {
                    this._currentTarget = data;
                    return data;
                }
            }
            this._currentTarget = this._defaultTarget;
            return this._defaultTarget;
        }*/


        getAniPlayDataByPlaySelector(value) {
          const target = this._resolver.resolveProp(value);

          if (target) {
            return target;
          } else {
            return this._defaultTarget;
          }
          /*
           const targetName = this.processMapInfoName(value);
           let targetAniCtrl= this.getCustomizeSpineTrackEntry(targetName);
           if(!targetAniCtrl)
           {
               targetAniCtrl= this._defaultTarget;
           }
           return targetAniCtrl;
           */

        } //---這裡可以把它寫在一個basic class裡面 然後在繼承上來


        isDefined(value) {
          return value !== undefined && value !== null;
        } //====================停止/清除系列============================================================================


        mapCleanTrackTypeToMode(t) {
          switch (t) {
            case (_crd && CleanTrackType === void 0 ? (_reportPossibleCrUseOfCleanTrackType({
              error: Error()
            }), CleanTrackType) : CleanTrackType).CURRENT_TRACK:
              return (_crd && StopClearMode === void 0 ? (_reportPossibleCrUseOfStopClearMode({
                error: Error()
              }), StopClearMode) : StopClearMode).CURRENT;

            case (_crd && CleanTrackType === void 0 ? (_reportPossibleCrUseOfCleanTrackType({
              error: Error()
            }), CleanTrackType) : CleanTrackType).EMPTY_ANI:
              return (_crd && StopClearMode === void 0 ? (_reportPossibleCrUseOfStopClearMode({
                error: Error()
              }), StopClearMode) : StopClearMode).EMPTY;

            case (_crd && CleanTrackType === void 0 ? (_reportPossibleCrUseOfCleanTrackType({
              error: Error()
            }), CleanTrackType) : CleanTrackType).All_TRACKS:
            default:
              return (_crd && StopClearMode === void 0 ? (_reportPossibleCrUseOfStopClearMode({
                error: Error()
              }), StopClearMode) : StopClearMode).ALL;
          }
        }
        /**
         * 是否使用預設的動畫狀態(總部沒有設定預設狀態)
         * 可是因為中軟的美術會設定default的動畫,所以這邊要有一個開關
         * 在使用預設狀態的情況下,會清除所有的track情況下
         * 因為中軟的美術在清光track的情況下的動畫動作沒有設定預設值阿=..=
         * 所以會爆開.
         * 加上清理掉的時候,中軟美術的檔案目前只能選擇使用StopClearMode.CURRENT
         * <用其他的會爆開>
         */


        applyClearMode(mode) {
          if (!this._spine) return;
          if (mode === (_crd && StopClearMode === void 0 ? (_reportPossibleCrUseOfStopClearMode({
            error: Error()
          }), StopClearMode) : StopClearMode).NONE) return;

          if (mode === (_crd && StopClearMode === void 0 ? (_reportPossibleCrUseOfStopClearMode({
            error: Error()
          }), StopClearMode) : StopClearMode).CURRENT) {
            this.cleanCurrentTrack();
          } else if (mode === (_crd && StopClearMode === void 0 ? (_reportPossibleCrUseOfStopClearMode({
            error: Error()
          }), StopClearMode) : StopClearMode).ALL) {
            this.clearTracks();
          } else if (mode === (_crd && StopClearMode === void 0 ? (_reportPossibleCrUseOfStopClearMode({
            error: Error()
          }), StopClearMode) : StopClearMode).EMPTY) {
            this.cleanBySetEmptyAni();
          }
        }

        stopWith(opt = {}) {
          var _opt$stopParticles;

          if (!this._spine) return; // 預設選項

          const stopParticles = (_opt$stopParticles = opt.stopParticles) != null ? _opt$stopParticles : true; // 先關狀態與外部效果

          this.isPlaying = false;

          if (stopParticles && this.particleSystem) {
            this.particleSystem.stopParticle();
          } // 可選：收尾一次性 callback / promises


          if (opt.resolveCallback) {
            this.safeResolveSpineCallback();
          }

          if (opt.resolvePromises) {
            var _this$_sequenceResolv2;

            this.safeResolveSpinePromise();
            (_this$_sequenceResolv2 = this._sequenceResolvePromise) == null || _this$_sequenceResolv2.call(this);
            this._sequenceResolvePromise = null;
          } else {
            this.reSetPlayInfoToOriginData(this._currentTarget.targetName);
          } // 清理策略


          let mode = (_crd && StopClearMode === void 0 ? (_reportPossibleCrUseOfStopClearMode({
            error: Error()
          }), StopClearMode) : StopClearMode).NONE;

          if (opt.overrideAfterPlayFlag) {
            var _opt$clear;

            // 強制忽略 _afterPlayDoStop
            mode = (_opt$clear = opt.clear) != null ? _opt$clear : this.mapCleanTrackTypeToMode(this._clearTracks.trackType);
          } else {
            // 沿用<僅當 _afterPlayDoStop=true 時才清理>..自動放給他播不管他
            if (this._afterPlayDoStop) {
              mode = this.mapCleanTrackTypeToMode(this._clearTracks.trackType);
            } else {
              var _opt$clear2;

              mode = (_opt$clear2 = opt.clear) != null ? _opt$clear2 : (_crd && StopClearMode === void 0 ? (_reportPossibleCrUseOfStopClearMode({
                error: Error()
              }), StopClearMode) : StopClearMode).NONE;
            }
          } // 執行清理


          this.applyClearMode(mode); // 視需要回到 setup pose

          if (opt.resetPose) {
            this.resetSpinePoseData();
          }
        } //--播完就強制銷毀回收


        stopAndRecycle() {
          this.forceToDoBeforeDestroy();
        }
        /**
         * 非常確定當下就是要立刻馬上停止,不管動畫是哪一種
         * resolvePromises/resolveCallback/resetPose
         * 都會強制執行接管後續收尾動作
         */


        stopNow() {
          this.stopWith({
            overrideAfterPlayFlag: true,
            clear: (_crd && StopClearMode === void 0 ? (_reportPossibleCrUseOfStopClearMode({
              error: Error()
            }), StopClearMode) : StopClearMode).CURRENT,
            resolvePromises: true,
            resolveCallback: true,
            resetPose: true
          });
        }

        stopAni() {
          this.stopWith({});
          /*
          old one
              if (this._spine) {
              this.onAniComplete();
              this.isPlaying = false;
              if (this.particleSystem) {
                  this.particleSystem.stopParticle();
              }
          }*/
        } //---強制中止promise動畫(ex:表演到一半的時候直接停止進行下面的動作(中斷輪播之類的))


        stopPromiseAni() {
          this.stopWith({
            overrideAfterPlayFlag: true,
            //--略過_afterPlayDoStop
            clear: this.mapCleanTrackTypeToMode(this._clearTracks.trackType),
            resolvePromises: true,
            resolveCallback: true,
            resetPose: true
          }); //--old
          //this.stopAni();
          //this.safeResolveSpinePromise();
        }

        forceToStopAni() {
          this.stopWith({
            overrideAfterPlayFlag: true,
            clear: (_crd && StopClearMode === void 0 ? (_reportPossibleCrUseOfStopClearMode({
              error: Error()
            }), StopClearMode) : StopClearMode).CURRENT,
            resolvePromises: true,
            resolveCallback: true,
            resetPose: true
          });
          /*
          if (this._spine) {
              this.cleanCurrentTrack();
              this.isPlaying = false;
          }*/
        }

        forceToStopAniByEmpty() {
          this.stopWith({
            overrideAfterPlayFlag: true,
            clear: (_crd && StopClearMode === void 0 ? (_reportPossibleCrUseOfStopClearMode({
              error: Error()
            }), StopClearMode) : StopClearMode).EMPTY,
            resolvePromises: true,
            resolveCallback: true,
            resetPose: true
          });
          /*
          if (this._spine) {
              this.cleanBySetEmptyAni();
              this.safeResolveSpinePromise();
              this.isPlaying = false;
          }*/
        }

        onAniComplete() {
          this.stopWith({
            overrideAfterPlayFlag: false,
            // 與原本行為一致：不動 promise/callback、不停粒子、不重置 Pose
            resolvePromises: false,
            resolveCallback: false,
            stopParticles: false,
            resetPose: false
          });
        }

        cleanBySetEmptyAni() {
          this._spine.getState().setEmptyAnimation(0, 0);

          this._spine.setCompleteListener(null);
        }

        cleanCurrentTrack(trackIndex) {
          if (!trackIndex) {
            let trackEntry = this._spine.getCurrent(0);

            if (trackEntry) {
              this._spine.clearTrack(trackEntry.trackIndex);
            }
          } else {
            this._spine.clearTrack(trackIndex);
          }

          this._spine.setCompleteListener(null);

          this.unscheduleAllCallbacks();
        }

        clearTracks() {
          this._spine.clearTracks(); //-https://forum.cocos.org/t/topic/159467/8
          //-這樣清不掉


          this._spine.setCompleteListener(null);

          this.unscheduleAllCallbacks();
        }

        onObjInstance() {} //-不能用onDestroy這個字component拿去用了


        onAfterDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_animationPlayInfoList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new (_crd && SpineAniPlayInfoList === void 0 ? (_reportPossibleCrUseOfSpineAniPlayInfoList({
            error: Error()
          }), SpineAniPlayInfoList) : SpineAniPlayInfoList)();
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_useDefaultInit", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_frameRate", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 30;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "targetNodeId", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "particleSystem", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "tokenID", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "prefabKey", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "goBackDefaultWithoutDestroy", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_afterPlayDoStop", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_clearTracks", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new (_crd && ClearTrackTypeState === void 0 ? (_reportPossibleCrUseOfClearTrackTypeState({
            error: Error()
          }), ClearTrackTypeState) : ClearTrackTypeState)();
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "_spineSequencePlay", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "_defaultSkins", [_dec14], {
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
//# sourceMappingURL=bb79ed9786481fd8d3f311ecceda5655653b405c.js.map