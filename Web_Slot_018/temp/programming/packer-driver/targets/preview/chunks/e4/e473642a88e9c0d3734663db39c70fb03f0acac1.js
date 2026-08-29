System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCString, Component, Enum, EventTarget, sp, ParticleExtension, CleanTrackType, FindComponent, AnimationPlayStateList, AniCtrlPropDef, SpineSequencePlay, SEQUENCE_EVENTS, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, SpineController;

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

  function _reportPossibleCrUseOfSlotMachineIndexInfo(extras) {
    _reporterNs.report("SlotMachineIndexInfo", "../Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpinePlayParams(extras) {
    _reporterNs.report("SpinePlayParams", "../Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCleanTrackType(extras) {
    _reporterNs.report("CleanTrackType", "../Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../../FindComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationPlayStateList(extras) {
    _reporterNs.report("AnimationPlayStateList", "./AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniCtrlPropDef(extras) {
    _reporterNs.report("AniCtrlPropDef", "./AniStateLists/AnimationPlayStateBase", _context.meta, extras);
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

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCString = _cc.CCString;
      Component = _cc.Component;
      Enum = _cc.Enum;
      EventTarget = _cc.EventTarget;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      ParticleExtension = _unresolved_2.ParticleExtension;
    }, function (_unresolved_3) {
      CleanTrackType = _unresolved_3.CleanTrackType;
    }, function (_unresolved_4) {
      FindComponent = _unresolved_4.FindComponent;
    }, function (_unresolved_5) {
      AnimationPlayStateList = _unresolved_5.AnimationPlayStateList;
      AniCtrlPropDef = _unresolved_5.AniCtrlPropDef;
    }, function (_unresolved_6) {
      SpineSequencePlay = _unresolved_6.SpineSequencePlay;
    }, function (_unresolved_7) {
      SEQUENCE_EVENTS = _unresolved_7.SEQUENCE_EVENTS;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3c263VfzCJOnY9sAffWbIHt", "SpineController", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'CCInteger', 'CCString', 'Component', 'Enum', 'EventTarget', 'macro', 'Node', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);
      Enum(_crd && CleanTrackType === void 0 ? (_reportPossibleCrUseOfCleanTrackType({
        error: Error()
      }), CleanTrackType) : CleanTrackType);

      _export("SpineController", SpineController = (_dec = ccclass('SpineController'), _dec2 = property({
        type: _crd && AnimationPlayStateList === void 0 ? (_reportPossibleCrUseOfAnimationPlayStateList({
          error: Error()
        }), AnimationPlayStateList) : AnimationPlayStateList,
        displayName: 'animationPlayStateList',
        visible: true,
        tooltip: '單一的識別碼'
      }), _dec3 = property({
        visible: true,
        tooltip: 'spineFPS'
      }), _dec4 = property({
        tooltip: 'prefab(放component的nodeId)的node id'
      }), _dec5 = property({
        type: _crd && ParticleExtension === void 0 ? (_reportPossibleCrUseOfParticleExtension({
          error: Error()
        }), ParticleExtension) : ParticleExtension,
        displayName: 'particleSystem',
        visible: true,
        tooltip: '粒子系統'
      }), _dec6 = property({
        tooltip: 'prefab單一識別碼'
      }), _dec7 = property({
        visible: true,
        tooltip: '是否要播放完畢後停止'
      }), _dec8 = property({
        type: _crd && CleanTrackType === void 0 ? (_reportPossibleCrUseOfCleanTrackType({
          error: Error()
        }), CleanTrackType) : CleanTrackType,
        visible: true,
        tooltip: '清除全部tracks或是當前撥放的trackIndex'
      }), _dec9 = property({
        type: _crd && SpineSequencePlay === void 0 ? (_reportPossibleCrUseOfSpineSequencePlay({
          error: Error()
        }), SpineSequencePlay) : SpineSequencePlay,
        visible: true,
        tooltip: '使用播放序列腳本'
      }), _dec10 = property({
        type: [CCString],
        visible: true,
        tooltip: 'defaultSkins'
      }), _dec(_class = (_class2 = class SpineController extends Component {
        //---用來判斷是否第一次onLoad
        get spine() {
          return this._spine;
        }

        get animationPlayStateList() {
          return this._animationPlayStateList;
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
          _initializerDefineProperty(this, "_animationPlayStateList", _descriptor, this);

          _initializerDefineProperty(this, "_frameRate", _descriptor2, this);

          _initializerDefineProperty(this, "targetNodeId", _descriptor3, this);

          //--prefab(放component的nodeId)的node id
          _initializerDefineProperty(this, "particleSystem", _descriptor4, this);

          _initializerDefineProperty(this, "tokenID", _descriptor5, this);

          //--單一的識別碼
          _initializerDefineProperty(this, "_afterPlayDoStop", _descriptor6, this);

          _initializerDefineProperty(this, "_clearTracks", _descriptor7, this);

          _initializerDefineProperty(this, "_spineSequencePlay", _descriptor8, this);

          //---20250522--FIX spine用2進位資料後,讀取skin的attachments會有問題(因為沒有JSON可以讀取了)
          _initializerDefineProperty(this, "_defaultSkins", _descriptor9, this);

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
          this._targetTimeForPlayToTimeAndStop = void 0;
          this._isReverse = void 0;
          this._isPlayToTimeAndStop = void 0;
          this._isLoop = void 0;
          this._defaultTarget = null;
          this._originSkinData = void 0;
          this._defaultSkin = 'default';
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
          this._dirtyFirstOnLoad = false;
          this._originAniData = void 0;

          //--override it do something after sequence event
          this.onSequencePlayEventHandler = value => {
            //console.log('check_sequenceEvent:', value);
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
            var evtKey = event.data.name;

            if (this._mapEvent.has(evtKey)) {
              var listeners = this._mapEvent.get(evtKey);

              if (listeners) {
                for (var listener of listeners) {
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
          }), FindComponent) : FindComponent).findComponentInChildren(this.node, sp.Skeleton); //--20250311---
          //this._spine.clearTrack(0);

          this._spine.clearTracks(); //--_animationPlayStateList不做處理


          if (!this._animationPlayStateList) {
            this._animationPlayStateList = new (_crd && AnimationPlayStateList === void 0 ? (_reportPossibleCrUseOfAnimationPlayStateList({
              error: Error()
            }), AnimationPlayStateList) : AnimationPlayStateList)();
            this._animationPlayStateList.clipsInfo = [];
          } else {
            for (var data of this._animationPlayStateList.clipsInfo) {
              if (data.useDefault) {
                this._defaultTarget = data;
                break;
              }
            }
          }

          var skeletonData = this._spine.skeletonData;
          var skinDataWithAttachment = null;

          if (skeletonData.skeletonJson) {
            skinDataWithAttachment = skeletonData.skeletonJson['skins']; //--裡面會包含Attachment的資料  
          } //-Since v3.7.2, this is an engine private function, it only works in editor.
          //let testSkin = skeletonData.getSkinsEnum()[1];---乖乖地取skeletonJson的資料吧


          if (skinDataWithAttachment) {
            //--這邊給讀取JSON使用的
            for (var skinData of skinDataWithAttachment) {
              this._originSkinData[skinData.name] = skinData.attachments;
            }
          } else {
            //--這邊給讀取二進位資料使用的因為skeletonData.skeletonJson=null
            if (this._defaultSkins.length > 0) {
              for (var _skinData of this._defaultSkins) {
                this._originSkinData[_skinData] = {}; //--先這樣啦
              }
            }
          }

          this.generalAniCompleteCheck = () => {
            this.onSpineCompleteHandler();
          }; //let duration=this._spine.getCurrent(0).animation.duration;


          var animationStates = this._spine.getState();

          var animation = this._spine.animation; //--動畫播出的名稱

          var trackEntry = this._spine.getState().getCurrent(0); //-要撥放動畫才會產生


          var animations = this._spine.getState().data.skeletonData.animations; //--有多少動畫


          var trackTrackEntrys = this._spine.getState().tracks; //-要撥放動畫才會產生
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

        init() {
          if (this._spineSequencePlay) {
            this._spineSequencePlay.init();

            this._spineSequencePlay.clearTracksSetting = this._clearTracks; //console.log('checkSpineController_init:', this._spineSequencePlay, this._spine);

            this._spineSequencePlay.sp = this._spine;

            this._spineSequencePlay.on((_crd && SEQUENCE_EVENTS === void 0 ? (_reportPossibleCrUseOfSEQUENCE_EVENTS({
              error: Error()
            }), SEQUENCE_EVENTS) : SEQUENCE_EVENTS).FRAME_EVENT, this.onSequencePlayEventHandler);

            this._spineSequencePlay.on((_crd && SEQUENCE_EVENTS === void 0 ? (_reportPossibleCrUseOfSEQUENCE_EVENTS({
              error: Error()
            }), SEQUENCE_EVENTS) : SEQUENCE_EVENTS).COMPLETE, this.onSequencePlayEventHandler);
          }
        }

        onSpineCompleteHandler() {
          if (!this._isLoop) {
            this.onAniComplete();
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

        setMultipleCompleteEvent(value, listener) {
          var old = this._mapMultipleCompleteEvent.get(value);

          if (old === listener) return; // 相同 listener 就不重複註冊

          this._mapMultipleCompleteEvent.set(value, listener);
        }

        getCachedCompleteHandler(id) {
          if (!this._handlerCacheMap.has(id)) {
            var handler = () => {
              this.onSpineCompleteHandler();
            };

            this._handlerCacheMap.set(id, handler);
          }

          return this._handlerCacheMap.get(id);
        }

        removeMultipleCompleteEvent(value) {
          var handler = this._handlerCacheMap.get(value);

          if (handler) {
            var registeredHandler = this._mapMultipleCompleteEvent.get(value);

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

          var listeners = this._mapEvent.get(value);

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
            var listeners = this._mapEvent.get(value);

            if (listeners) {
              var index = listeners.indexOf(listener);

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
          var playData = this.getCustomizeSpineTrackEntry(value.targetName);
          var targetData = value;

          if (!playData) {
            playData = new (_crd && AniCtrlPropDef === void 0 ? (_reportPossibleCrUseOfAniCtrlPropDef({
              error: Error()
            }), AniCtrlPropDef) : AniCtrlPropDef)();
            playData.targetName = value.targetName;

            this._animationPlayStateList.clipsInfo.push(playData);
          }

          if (this.isDefined(targetData == null ? void 0 : targetData.timeScale)) {
            playData.timeScale = targetData.timeScale;
          }

          if (this.isDefined(targetData == null ? void 0 : targetData.loop)) {
            playData.loop = targetData.loop;
          }

          if (this.isDefined(targetData == null ? void 0 : targetData.skinName)) {
            playData.skinName = targetData.skinName;
          }

          if (this.isDefined(targetData == null ? void 0 : targetData.useCompleteListen)) {
            playData.useCompleteListen = targetData.useCompleteListen;
          }

          this._defaultTarget = playData;
          /*---這兩個spine不會用到?
          if (this.isDefined(targetData?.repeatCount)) {
              playData.repeatCount = customClipData.repeatCount;
          }
           if (this.isDefined(targetData?.delay)) {
              playData.delay = customClipData.delay;
          }*/
        }

        destroyAniController() {}

        onAniComplete() {
          if (this._afterPlayDoStop) {
            if (this._clearTracks == (_crd && CleanTrackType === void 0 ? (_reportPossibleCrUseOfCleanTrackType({
              error: Error()
            }), CleanTrackType) : CleanTrackType).All_TRACKS) {
              this.clearTracks();
            } else if (this._clearTracks == (_crd && CleanTrackType === void 0 ? (_reportPossibleCrUseOfCleanTrackType({
              error: Error()
            }), CleanTrackType) : CleanTrackType).CURRENT_TRACK) {
              this.cleanCurrentTrack();
            }
          }

          this.isPlaying = false;
        }
        /*
        public setAniTarget(value: AnimationPlayInfo): void {
         }*/


        changeSkin(value) {
          if (this._spine) {
            var skinId = this._defaultSkin;

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
            //console.log('check_spineUpdate',this._spine.getCurrent(0).animation.duration,this._spine.getCurrent(0).trackTime);
            if (this._isReverse) {
              this.checkUpdateAboutReverse(dt);
            }

            if (this._isPlayToTimeAndStop) {
              this.checkUpdateAboutPlayToTimeAndStop(dt);
            }
          }
        }

        checkUpdateAboutReverse(dt) {
          var current = this._spine.getCurrent(0);

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
          var current = this._spine.getCurrent(0);

          if (current.trackTime >= this._targetTimeForPlayToTimeAndStop) {
            this._isPlayToTimeAndStop = false;
            this.stopAni();
          }
        }

        stopAni() {
          if (this._spine) {
            this.onAniComplete();
            this.isPlaying = false;

            if (this.particleSystem) {
              this.particleSystem.stopParticle();
            }
          }
        } //---強制中止promise動畫(ex:表演到一半的時候直接停止進行下面的動作(中斷輪播之類的))


        stopPromiseAni() {
          this.stopAni();
          this.safeResolveSpinePromise();
        } //--這個之後要整理整合起來(沒有勾選_afterPlayDoStop的話,就不會清除tracks)


        forceToStopAni() {
          if (this._spine) {
            this.cleanCurrentTrack();
            this.isPlaying = false;
          }
        }

        forceToStopAniByEmpty() {
          if (this._spine) {
            this.cleanBySetEmptyAni();
            this.safeResolveSpinePromise();
            this.isPlaying = false;
          }
        }

        resetSpinePoseData() {
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
            var timeScale = this._spine.timeScale;
            var speed = value ? value : timeScale + 0.2;
            this._spine.timeScale = speed; // 加速播放
          }
        }

        slowDownAni(value) {
          if (this._spine) {
            var timeScale = this._spine.timeScale;
            var speed = value ? value : timeScale - 0.2;
            this._spine.timeScale = speed; // 減速播放

            if (this._spine.timeScale < 0) {
              this._spine.timeScale = 0;
            }
          }
        }

        reversePlay(value) {
          if (this._spine) {
            var playData = this.checkSpinePlayData(value);
            var trackIndex = playData.trackIndex ? playData.trackIndex : 0;

            this._spine.setCompleteListener(null);

            this._spine.setCompleteListener(this.generalAniCompleteCheck);

            this._isLoop = playData.loop;

            var trackEntry = this._spine.setAnimation(trackIndex, playData.targetName, false);

            trackEntry.trackTime = trackEntry.animation.duration;
            this.setCurrentSpineAniData(trackEntry);
            this.isPlaying = true;
            this._isReverse = true;
          }
        }

        gotoAndPlayByTime(value, time) {
          if (this._spine) {
            var playData = this.checkSpinePlayData(value);
            var timeScale = playData.timeScale ? playData.timeScale : 1;
            this._spine.timeScale = timeScale;
            var trackIndex = playData.trackIndex ? playData.trackIndex : 0;
            this.isPlaying = true;

            this._spine.setCompleteListener(null);

            this._spine.setCompleteListener(this.generalAniCompleteCheck);

            var trackEntry = this._spine.setAnimation(trackIndex, playData.targetName, playData.loop);

            this._spine.timeScale = 0; //--停止播放

            this.setCurrentSpineAniData(trackEntry);
            var moveToStartTime = time;
            if (moveToStartTime <= 0) moveToStartTime = 0;
            trackEntry.animationStart = moveToStartTime;
            trackEntry.animationEnd = this._aniEndTime;
            this._spine.timeScale = timeScale; //---回復播放
          }
        } //--這邊沒辦法知道spine的fps


        gotoAndPlayByFrame(value, frame) {
          if (this._spine) {
            var playData = this.checkSpinePlayData(value);
            var timeScale = playData.timeScale ? playData.timeScale : 1;
            this._spine.timeScale = timeScale;
            var trackIndex = playData.trackIndex ? playData.trackIndex : 0;
            this.isPlaying = true;

            this._spine.setCompleteListener(null);

            this._spine.setCompleteListener(this.generalAniCompleteCheck);

            var trackEntry = this._spine.setAnimation(trackIndex, playData.targetName, playData.loop);

            this._spine.timeScale = 0; //--停止播放

            this.setCurrentSpineAniData(trackEntry);
            var moveToStartTime = frame * this._secondsPerFrame;
            if (moveToStartTime <= 0) moveToStartTime = 0;
            trackEntry.animationStart = moveToStartTime;
            trackEntry.animationEnd = this._aniEndTime;
            this._spine.timeScale = timeScale; //---回復播放
          }
        } //-移動到某個時間點並停止(這邊的停止是暫停..而非cleanTracks)


        gotoAndStopByTime(value, time) {
          if (this._spine) {
            var playData = this.checkSpinePlayData(value);
            var timeScale = playData.timeScale ? playData.timeScale : 1;
            this._spine.timeScale = timeScale;
            var trackIndex = playData.trackIndex ? playData.trackIndex : 0;

            this._spine.setCompleteListener(null);

            this._spine.setCompleteListener(this.generalAniCompleteCheck);

            var trackEntry = this._spine.setAnimation(trackIndex, playData.targetName, playData.loop);

            this.setCurrentSpineAniData(trackEntry);
            trackEntry.trackTime = time;
            this._spine.timeScale = 0; //--停止播放

            this.isPlaying = false;
          }
        } //-移動到某個時間點並停止(這邊的停止是暫停..而非cleanTracks)


        gotoAndStopByFrame(value, frame) {
          if (this._spine) {
            var playData = this.checkSpinePlayData(value);
            var timeScale = playData.timeScale ? playData.timeScale : 1;
            this._spine.timeScale = timeScale;
            var trackIndex = playData.trackIndex ? playData.trackIndex : 0;

            this._spine.setCompleteListener(null);

            this._spine.setCompleteListener(this.generalAniCompleteCheck);

            var trackEntry = this._spine.setAnimation(trackIndex, playData.targetName, playData.loop);

            this.setCurrentSpineAniData(trackEntry);
            var moveToStartTime = frame * this._secondsPerFrame;
            if (moveToStartTime <= 0) moveToStartTime = 0;
            trackEntry.trackTime = moveToStartTime;
            this._spine.timeScale = 0; //--停止播放

            this.isPlaying = false;
          }
        }

        playToTimeAndStop(value, time) {
          if (this._spine) {
            var playData = this.checkSpinePlayData(value);
            var timeScale = playData.timeScale ? playData.timeScale : 1;
            this._spine.timeScale = timeScale;
            var trackIndex = playData.trackIndex ? playData.trackIndex : 0;

            this._spine.setCompleteListener(null);

            this._spine.setCompleteListener(this.generalAniCompleteCheck);

            var trackEntry = this._spine.setAnimation(trackIndex, playData.targetName, false);

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
            var playData = this.checkSpinePlayData(value);
            var timeScale = playData.timeScale ? playData.timeScale : 1;
            this._spine.timeScale = timeScale;
            var trackIndex = playData.trackIndex ? playData.trackIndex : 0;

            this._spine.setCompleteListener(null);

            this._spine.setCompleteListener(this.generalAniCompleteCheck);

            var trackEntry = this._spine.setAnimation(trackIndex, playData.targetName, false);

            this._spine.timeScale = 0; //--停止播放

            this.setCurrentSpineAniData(trackEntry);
            var moveToStartTime = frame * this._secondsPerFrame;
            if (moveToStartTime <= 0) moveToStartTime = 0;
            this._targetTimeForPlayToTimeAndStop = moveToStartTime;
            this._isPlayToTimeAndStop = true;
            this.isPlaying = true;
            this._spine.timeScale = 1;
          }
        }

        beforeDestroy() {
          this.forceToDoBeforeDestroy();
          this.generalAniCompleteCheck = null; //--to do something before spine destroy
        }

        forceToDoBeforeDestroy() {
          if (this._spine) {
            var _this$_sequenceResolv;

            this.isPlaying = false; //this._spineAniResolvePromise?.();//--如果有使用到promise resolve 20250623
            //this._spineAniResolvePromise = undefined;//--_spineSequencePlay使用的

            this.safeResolveSpinePromise();
            this.safeResolveSpineCallback();

            if (this.particleSystem) {
              this.particleSystem.stopParticle();
            } //--在沒有勾選drop after play的選項stopAni方法將不會觸發停止撥放選項


            if (this._clearTracks == (_crd && CleanTrackType === void 0 ? (_reportPossibleCrUseOfCleanTrackType({
              error: Error()
            }), CleanTrackType) : CleanTrackType).CURRENT_TRACK) {
              this.cleanCurrentTrack();
            } else {
              this.clearTracks();
            }

            this.resetSpinePoseData();

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
          this.forceToDoBeforeDestroy();
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
          this.groupID = []; //--會有同一個物件在不同的group裡面(第四軸重複的)
          //this.clearKeyFrameEvent();
        }

        playAniWithCallBack(callBack, value) {
          var playData = this.checkSpinePlayData(value);

          var spineCompleteHandler = () => {
            this.safeResolveSpineCallback(); // 統一結束處理

            this.generalAniCompleteCheck();
          };

          this._spineAniCallback = () => {
            callBack();

            this._spine.setCompleteListener(null);

            this._spineAniCallback = undefined;
          };

          this.clearTracks();
          this._spine.timeScale = playData.timeScale ? playData.timeScale : 1; //--儘管是loop=true,但每次都會觸發..

          this._spine.setCompleteListener(null);

          this._spine.setCompleteListener(spineCompleteHandler);

          var trackIndex = playData.trackIndex ? playData.trackIndex : 0;
          this.isPlaying = true;
          this._isLoop = playData.loop;

          this._spine.setAnimation(trackIndex, playData.targetName, playData.loop);
        }

        playAniInPromise(value) {
          var playData = this.checkSpinePlayData(value);
          console.log('playAniInPromise_beginning:', this._spine.node.name, value, playData.targetName, playData);
          this.safeResolveSpinePromise(); //--force remove old promise resolve

          return new Promise(resolve => {
            this._spineAniResolvePromise = () => {
              console.log('playAniInPromise_resolve:', playData.targetName);
              this.generalAniCompleteCheck();
              this.safeResolveSpinePromise(resolve);
            }; //this.clearTracks();


            this._spine.timeScale = playData.timeScale ? playData.timeScale : 1; //--儘管是loop=true,但每次都會觸發..

            this._spine.setCompleteListener(null);

            this._spine.setCompleteListener(this._spineAniResolvePromise);

            var trackIndex = playData.trackIndex ? playData.trackIndex : 0;
            this.isPlaying = true;
            this._isLoop = playData.loop;

            if (playData.skinName != '') {
              this._spine.node.active = true;
              this.changeSkin(playData.skinName);
            }

            console.log('playAniInPromise:', playData.targetName, playData);

            this._spine.setAnimation(trackIndex, playData.targetName, playData.loop);
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
          var trackIndex = value.trackIndex ? value.trackIndex : 0;
          this.isPlaying = true;
          this._isLoop = value.loop;

          this._spine.setCompleteListener(null);

          this._spine.setCompleteListener(this.generalAniCompleteCheck);

          this._spine.setAnimation(trackIndex, value.targetName, value.loop);
        }

        playAni(value) {
          var playData = this.checkSpinePlayData(value);
          console.log('playAni>>_check_playData:', this._spine.node.name, playData);

          if (this._spine) {
            this._spine.timeScale = playData.timeScale ? playData.timeScale : 1;
            var trackIndex = playData.trackIndex ? playData.trackIndex : 0;
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
        } //---實驗功能(尚未測試)


        playMultipleAni(aniNames) {
          for (var aniDataId of aniNames) {
            var playData = this.checkSpinePlayData(aniDataId);

            if (this._spine) {
              this._spine.timeScale = playData.timeScale ? playData.timeScale : 1;
              var trackIndex = playData.trackIndex ? playData.trackIndex : 0;
              this.isPlaying = true;
              this._isLoop = playData.loop; //--這樣不行啦....如果要播的有的要有的不要不就搞笑

              if (playData.useCompleteListen) {
                //--註冊完成事件
                var handler = this.getCachedCompleteHandler(aniDataId);
                this.setMultipleCompleteEvent(aniDataId, handler);

                this._spine.setCompleteListener(handler);
              }

              this._spine.setAnimation(trackIndex, playData.targetName, playData.loop);
            }
          }
        }

        getSkinFrontEnumIndex(skinName) {
          var skinData = this._spine.skeletonData.getSkinsEnum();

          for (var i in skinData) {
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
        }

        checkSpinePlayData(targetName) {
          for (var data of this._animationPlayStateList.clipsInfo) {
            if (data.targetName == targetName) {
              this._currentTarget = data;
              return data;
            }
          }

          return this._defaultTarget;
        } //---這裡可以把它寫在一個basic class裡面 然後在繼承上來


        getCustomizeSpineTrackEntry(value) {
          return this._animationPlayStateList.clipsInfo.find(clip => clip.targetName === value);
        } //---這裡可以把它寫在一個basic class裡面 然後在繼承上來


        isDefined(value) {
          return value !== undefined && value !== null;
        }

        cleanBySetEmptyAni() {
          this._spine.getState().setEmptyAnimation(0, 0);

          this._spine.setCompleteListener(null);
        }

        cleanCurrentTrack(trackIndex) {
          if (!trackIndex) {
            var trackEntry = this._spine.getCurrent(0);

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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_animationPlayStateList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_frameRate", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 30;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "targetNodeId", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "particleSystem", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tokenID", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_afterPlayDoStop", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_clearTracks", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_spineSequencePlay", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_defaultSkins", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e473642a88e9c0d3734663db39c70fb03f0acac1.js.map