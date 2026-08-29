import { _decorator, CCBoolean, CCInteger, CCString, Component, Enum, EventTarget, macro, Node, sp } from 'cc';
import { IAnimationControl } from '../Definitions/IAnimationControl';
import { ParticleExtension } from './ParticleExtension';
import { AnimationPlayInfo, SlotMachineIndexInfo, SpinePlayParams, CleanTrackType } from '../Definitions/AnimationDataOptions';
import { FindComponent } from '../../FindComponent';
import { AnimationPlayStateList, AniCtrlPropDef } from './AniStateLists/AnimationPlayStateBase';
import { SpineSequencePlay } from './AniStateLists/SpineSequencePlay';
import { SEQUENCE_EVENTS } from './AniStateLists/Events';
import { EVENT_DATA } from '../../EventSystem/EventData';

import { IEventDispatcher } from '../../EventSystem/EventDispatcher';

const { ccclass, property } = _decorator;

Enum(CleanTrackType);
@ccclass('SpineController')
export class SpineController extends Component implements IAnimationControl {

    slotMachineIndexInfo?: SlotMachineIndexInfo;
    groupID: number[];//--會有同一個物件在不同的group裡面(第四軸重複的)
    isPlaying: boolean;
    keep: boolean;//--不刪除且持續留在場景中
    //--resetData會保留此資料
    @property({ type: AnimationPlayStateList, displayName: 'animationPlayStateList', visible: true, tooltip: '單一的識別碼' })
    protected _animationPlayStateList: AnimationPlayStateList;

    @property({ visible: true, tooltip: 'spineFPS' })
    protected _frameRate: number = 30;

    @property({ tooltip: 'prefab(放component的nodeId)的node id' })
    targetNodeId: string = '';//--prefab(放component的nodeId)的node id

    @property({ type: ParticleExtension, displayName: 'particleSystem', visible: true, tooltip: '粒子系統' })
    particleSystem: ParticleExtension;

    @property({ tooltip: 'prefab單一識別碼' })
    tokenID: string = '';//--單一的識別碼

    @property({ visible: true, tooltip: '是否要播放完畢後停止' })
    protected _afterPlayDoStop: boolean = true;

    @property({ type: CleanTrackType, visible: true, tooltip: '清除全部tracks或是當前撥放的trackIndex' })
    protected _clearTracks: CleanTrackType = 0;

    @property({ type: SpineSequencePlay, visible: true, tooltip: '使用播放序列腳本' })
    protected _spineSequencePlay: SpineSequencePlay;
    //---20250522--FIX spine用2進位資料後,讀取skin的attachments會有問題(因為沒有JSON可以讀取了)
    @property({ type: [CCString], visible: true, tooltip: 'defaultSkins' })
    protected _defaultSkins: string[] = [];

    protected _spine: sp.Skeleton;
    protected _duration: number;//--當前播放的總長度
    protected _frames: number;//--當前播放的總frame數
    protected _secondsPerFrame: number;//--每一個frame的時間
    protected _aniStartTime: number;//--每個trackEntry的開始時間
    protected _aniEndTime: number;//--每個trackEntry的結束時間
    protected _targetTimeForPlayToTimeAndStop: number;
    protected _isReverse: boolean;
    protected _isPlayToTimeAndStop: boolean;
    protected _isLoop: boolean;
    protected _defaultTarget: AniCtrlPropDef = null;
    protected _originSkinData: { [key: string]: sp.spine.Attachment | {} };
    protected _defaultSkin: string = 'default';
    protected _currentTarget: AniCtrlPropDef = null;
    protected _eventTarget: EventTarget;
    protected _mapEvent: Map<string, ((...args: any[]) => void)[]> = new Map();
    protected _mapMultipleCompleteEvent: Map<string, () => void> = new Map();
    private _handlerCacheMap: Map<string, () => void> = new Map(); // cache(確保產生唯一的)
    protected _isListenForKeyFrame: boolean = false;
    protected _spineAniResolvePromise: (() => void) | null; // promise resolve 函式
    protected _sequenceResolvePromise: (() => void) | null; // promise resolve 函式
    protected _spineSequencePlayFrameEventCallBack: (value?: any) => void;
    protected _spineAniCallback?: () => void;
    protected generalAniCompleteCheck: () => void;
    private _dirtyFirstOnLoad: boolean = false;//---用來判斷是否第一次onLoad

    get spine(): sp.Skeleton {
        return this._spine;
    }

    get animationPlayStateList(): AnimationPlayStateList {
        return this._animationPlayStateList;
    }

    get defaultTarget(): AniCtrlPropDef {
        return this._defaultTarget;
    }


    set spineSequencePlayFrameEventCallBack(value: (value?: any) => void) {
        this._spineSequencePlayFrameEventCallBack = value;
    }

    //--用來存放原始的動畫資料reset將會塞回去
    private _originAniData: { [key: string]: AniCtrlPropDef };

    constructor() {
        super();
        this.isPlaying = false;
        //--_duration/_frames/_secondsPerFrame這些要播放才拿的到
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
    protected onLoad(): void {
        if (this._dirtyFirstOnLoad) return;
        this._dirtyFirstOnLoad = true;
        this._spine = FindComponent.findComponentInChildren(this.node, sp.Skeleton);

        //--20250311---
        //this._spine.clearTrack(0);
        this._spine.clearTracks();

        //--_animationPlayStateList不做處理
        if (!this._animationPlayStateList) {
            this._animationPlayStateList = new AnimationPlayStateList();
            this._animationPlayStateList.clipsInfo = [];

        } else {

            for (let data of this._animationPlayStateList.clipsInfo) {
                if (data.useDefault) {
                    this._defaultTarget = data;
                    break;
                }
            }
        }

        let skeletonData = this._spine.skeletonData;

        let skinDataWithAttachment = null;
        if (skeletonData.skeletonJson) {
            skinDataWithAttachment = skeletonData.skeletonJson['skins'];//--裡面會包含Attachment的資料  
        }
        //-Since v3.7.2, this is an engine private function, it only works in editor.
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
                    this._originSkinData[skinData] = {};//--先這樣啦
                }
            }
        }

        this.generalAniCompleteCheck = () => {
            this.onSpineCompleteHandler();
        };


        //let duration=this._spine.getCurrent(0).animation.duration;
        let animationStates = this._spine.getState();
        let animation = this._spine.animation;//--動畫播出的名稱
        let trackEntry = this._spine.getState().getCurrent(0);//-要撥放動畫才會產生
        let animations = this._spine.getState().data.skeletonData.animations;//--有多少動畫
        let trackTrackEntrys = this._spine.getState().tracks;//-要撥放動畫才會產生
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


    public init(): void {
        if (this._spineSequencePlay) {
            this._spineSequencePlay.init();
            this._spineSequencePlay.clearTracksSetting = this._clearTracks;
            //console.log('checkSpineController_init:', this._spineSequencePlay, this._spine);
            this._spineSequencePlay.sp = this._spine;
            this._spineSequencePlay.on(SEQUENCE_EVENTS.FRAME_EVENT, this.onSequencePlayEventHandler);
            this._spineSequencePlay.on(SEQUENCE_EVENTS.COMPLETE, this.onSequencePlayEventHandler);
        }
    }



    //--override it do something after sequence event
    protected onSequencePlayEventHandler = (value: EVENT_DATA) => {

        //console.log('check_sequenceEvent:', value);
        if (value.eventType == SEQUENCE_EVENTS.COMPLETE) {
            if (this._sequenceResolvePromise) {
                this._sequenceResolvePromise();
                this._sequenceResolvePromise = null;
            }
        } else if (value.eventType == SEQUENCE_EVENTS.FRAME_EVENT) {
            this._spineSequencePlayFrameEventCallBack?.(value);
        }

    }


    protected onSpineCompleteHandler(): void {
        if (!this._isLoop) {
            this.onAniComplete();
        }
    }

    public safeRemoveSequencePlayFrameEventCallBack(): void {
        this._spineSequencePlayFrameEventCallBack = null;
    }

    //--銷毀前處理掉promise resolve避免沒銷毀的pending promise

    protected safeResolveSpinePromise(resolve?: () => void): void {
        this._spine?.setCompleteListener(null);
        if (resolve) {
            resolve();
        } else if (this._spineAniResolvePromise) {
            this._spineAniResolvePromise();
        }
        this._spineAniResolvePromise = null;
    }

    //--銷毀前處理掉spine complete callback
    protected safeResolveSpineCallback(): void {
        this._spine?.setCompleteListener(null);
        this._spineAniCallback?.();
        this._spineAniCallback = undefined;
    }

    protected setMultipleCompleteEvent(value: string, listener: () => void): void {
        const old = this._mapMultipleCompleteEvent.get(value);
        if (old === listener) return; // 相同 listener 就不重複註冊
        this._mapMultipleCompleteEvent.set(value, listener);
    }

    protected getCachedCompleteHandler(id: string): () => void {
        if (!this._handlerCacheMap.has(id)) {
            const handler = () => {
                this.onSpineCompleteHandler();
            };
            this._handlerCacheMap.set(id, handler);
        }
        return this._handlerCacheMap.get(id);
    }

    protected removeMultipleCompleteEvent(value: string): void {

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

    public clearAllMultipleCompleteEvent(): void {
        this._mapMultipleCompleteEvent.clear();      // 移除正在監聽的事件
        this._handlerCacheMap.clear();              // 釋放 handler 實體
        this._spine.setCompleteListener(null);      // 解除 spine 綁定
    }



    public setKeyFrameEvent(value: string, listener: (...args: any[]) => void): void {
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

    public removeKeyFrameEvent(value: string, listener?: (...args: any[]) => void): void {
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

    public hasKeyFrameEvent(value: string): boolean {
        return this._mapEvent.has(value);
    }

    public clearKeyFrameEvent(): void {
        this._mapEvent.clear();
        this._spine.setEventListener(null);
        this._isListenForKeyFrame = false;
    }

    public breakKeyFrameEvent(): void {
        this._spine.setEventListener(null);
        this._isListenForKeyFrame = false;
    }

    //--只會在第一次添加的時候塞到setEventListener(只會塞一次)
    public listenKeyFrameEvent(): void {
        if (!this._isListenForKeyFrame && this._spine && this._mapEvent.size > 0) {
            this._spine.setEventListener(this.checkAndAddKeyFrameEvent);
            this._isListenForKeyFrame = true;
        }
    }


    public setAniDataInfo(value: AnimationPlayInfo): void {

        let playData = this.getCustomizeSpineTrackEntry(value.targetName);
        let targetData = value as SpinePlayParams;

        if (!playData) {
            playData = new AniCtrlPropDef();
            playData.targetName = value.targetName;
            this._animationPlayStateList.clipsInfo.push(playData);
        }

        if (this.isDefined(targetData?.timeScale)) {
            playData.timeScale = targetData.timeScale;
        }

        if (this.isDefined(targetData?.loop)) {
            playData.loop = targetData.loop;
        }

        if (this.isDefined(targetData?.skinName)) {
            playData.skinName = targetData.skinName;
        }

        if (this.isDefined(targetData?.useCompleteListen)) {
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


    public destroyAniController(): void {

    }


    public onAniComplete(): void {
        if (this._afterPlayDoStop) {
            if (this._clearTracks == CleanTrackType.All_TRACKS) {
                this.clearTracks();
            } else if (this._clearTracks == CleanTrackType.CURRENT_TRACK) {
                this.cleanCurrentTrack();
            }
        }
        this.isPlaying = false;
    }



    /*
    public setAniTarget(value: AnimationPlayInfo): void {

    }*/

    public changeSkin(value: string): void {

        if (this._spine) {

            let skinId = this._defaultSkin;
            if (this._originSkinData[value]) {

                skinId = value;
            }
            //let index = this.getSkinFrontEnumIndex(skinId);
            //@ts-ignore
            //this._spine._defaultSkinIndex = index;
            this._spine.setSkin(skinId);
            //console.log('setSkinID:', skinId, this._originSkinData[skinId]);
        }
    }


    protected update(dt: number): void {
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

    private checkUpdateAboutReverse(dt: number): void {

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

    private checkUpdateAboutPlayToTimeAndStop(dt: number): void {
        let current = this._spine.getCurrent(0);
        if (current.trackTime >= this._targetTimeForPlayToTimeAndStop) {
            this._isPlayToTimeAndStop = false;
            this.stopAni();
        }
    }

    public stopAni(): void {
        if (this._spine) {
            this.onAniComplete();
            this.isPlaying = false;
            if (this.particleSystem) {
                this.particleSystem.stopParticle();
            }
        }
    }

    //---強制中止promise動畫(ex:表演到一半的時候直接停止進行下面的動作(中斷輪播之類的))
    public stopPromiseAni(): void {
        this.stopAni();
        this.safeResolveSpinePromise();
    }

    //--這個之後要整理整合起來(沒有勾選_afterPlayDoStop的話,就不會清除tracks)
    public forceToStopAni(): void {
        if (this._spine) {
            this.cleanCurrentTrack();
            this.isPlaying = false;
        }
    }

    public forceToStopAniByEmpty(): void {
        if (this._spine) {
            this.cleanBySetEmptyAni();
            this.safeResolveSpinePromise();
            this.isPlaying = false;
        }
    }

    public resetSpinePoseData(): void {
        if (this._spine) {
            this._spine.setToSetupPose();
            this._spine.setBonesToSetupPose();
            this._spine.setSlotsToSetupPose();
        }
    }

    public pauseAni(): void {
        if (this._spine) {
            this._spine.timeScale = 0;
        }
    }

    public resumeAni(): void {
        if (this._spine) {
            this._spine.timeScale = 1;
        }
    }

    public speedUpAni(value?: number): void {
        if (this._spine) {
            let timeScale = this._spine.timeScale;
            let speed = (value) ? value : timeScale + 0.2;
            this._spine.timeScale = speed; // 加速播放
        }
    }

    public slowDownAni(value: number): void {
        if (this._spine) {
            let timeScale = this._spine.timeScale;
            let speed = (value) ? value : timeScale - 0.2;
            this._spine.timeScale = speed; // 減速播放
            if (this._spine.timeScale < 0) {
                this._spine.timeScale = 0;
            }
        }
    }

    public reversePlay(value: string): void {

        if (this._spine) {
            let playData = this.checkSpinePlayData(value);
            let trackIndex = (playData.trackIndex) ? playData.trackIndex : 0;
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


    public gotoAndPlayByTime(value: string, time: number): void {

        if (this._spine) {
            let playData = this.checkSpinePlayData(value);
            let timeScale = (playData.timeScale) ? playData.timeScale : 1;
            this._spine.timeScale = timeScale;
            let trackIndex = (playData.trackIndex) ? playData.trackIndex : 0;
            this.isPlaying = true;
            this._spine.setCompleteListener(null);
            this._spine.setCompleteListener(this.generalAniCompleteCheck);
            let trackEntry = this._spine.setAnimation(trackIndex, playData.targetName, playData.loop);
            this._spine.timeScale = 0;//--停止播放
            this.setCurrentSpineAniData(trackEntry);
            let moveToStartTime = time;
            if (moveToStartTime <= 0) moveToStartTime = 0;
            trackEntry.animationStart = moveToStartTime;
            trackEntry.animationEnd = this._aniEndTime;
            this._spine.timeScale = timeScale;//---回復播放

        }
    }

    //--這邊沒辦法知道spine的fps
    public gotoAndPlayByFrame(value: string, frame: number): void {

        if (this._spine) {

            let playData = this.checkSpinePlayData(value);
            let timeScale = (playData.timeScale) ? playData.timeScale : 1;
            this._spine.timeScale = timeScale;
            let trackIndex = (playData.trackIndex) ? playData.trackIndex : 0;
            this.isPlaying = true;
            this._spine.setCompleteListener(null);
            this._spine.setCompleteListener(this.generalAniCompleteCheck);
            let trackEntry = this._spine.setAnimation(trackIndex, playData.targetName, playData.loop);
            this._spine.timeScale = 0;//--停止播放
            this.setCurrentSpineAniData(trackEntry);
            let moveToStartTime = frame * this._secondsPerFrame;
            if (moveToStartTime <= 0) moveToStartTime = 0;
            trackEntry.animationStart = moveToStartTime;
            trackEntry.animationEnd = this._aniEndTime;
            this._spine.timeScale = timeScale;//---回復播放

        }
    }

    //-移動到某個時間點並停止(這邊的停止是暫停..而非cleanTracks)
    public gotoAndStopByTime(value: string, time: number): void {

        if (this._spine) {
            let playData = this.checkSpinePlayData(value);
            let timeScale = (playData.timeScale) ? playData.timeScale : 1;
            this._spine.timeScale = timeScale;
            let trackIndex = (playData.trackIndex) ? playData.trackIndex : 0;
            this._spine.setCompleteListener(null);
            this._spine.setCompleteListener(this.generalAniCompleteCheck);
            let trackEntry = this._spine.setAnimation(trackIndex, playData.targetName, playData.loop);
            this.setCurrentSpineAniData(trackEntry);
            trackEntry.trackTime = time;
            this._spine.timeScale = 0;//--停止播放
            this.isPlaying = false;
        }
    }

    //-移動到某個時間點並停止(這邊的停止是暫停..而非cleanTracks)
    public gotoAndStopByFrame(value: string, frame: number): void {

        if (this._spine) {
            let playData = this.checkSpinePlayData(value);
            let timeScale = (playData.timeScale) ? playData.timeScale : 1;
            this._spine.timeScale = timeScale;
            let trackIndex = (playData.trackIndex) ? playData.trackIndex : 0;
            this._spine.setCompleteListener(null);
            this._spine.setCompleteListener(this.generalAniCompleteCheck);
            let trackEntry = this._spine.setAnimation(trackIndex, playData.targetName, playData.loop);
            this.setCurrentSpineAniData(trackEntry);
            let moveToStartTime = frame * this._secondsPerFrame;
            if (moveToStartTime <= 0) moveToStartTime = 0;
            trackEntry.trackTime = moveToStartTime;
            this._spine.timeScale = 0;//--停止播放
            this.isPlaying = false;

        }
    }

    public playToTimeAndStop(value: string, time: number): void {

        if (this._spine) {

            let playData = this.checkSpinePlayData(value);
            let timeScale = (playData.timeScale) ? playData.timeScale : 1;
            this._spine.timeScale = timeScale;
            let trackIndex = (playData.trackIndex) ? playData.trackIndex : 0;
            this._spine.setCompleteListener(null);
            this._spine.setCompleteListener(this.generalAniCompleteCheck);
            let trackEntry = this._spine.setAnimation(trackIndex, playData.targetName, false);
            this._spine.timeScale = 0;//--停止播放
            this.setCurrentSpineAniData(trackEntry);
            this._isPlayToTimeAndStop = true;
            this._targetTimeForPlayToTimeAndStop = time;
            this.isPlaying = true;
            this._spine.timeScale = 1;
        }

    }

    public playToFrameAndStop(value: string, frame: number): void {
        if (this._spine) {
            let playData = this.checkSpinePlayData(value);
            let timeScale = (playData.timeScale) ? playData.timeScale : 1;
            this._spine.timeScale = timeScale;
            let trackIndex = (playData.trackIndex) ? playData.trackIndex : 0;
            this._spine.setCompleteListener(null);
            this._spine.setCompleteListener(this.generalAniCompleteCheck);
            let trackEntry = this._spine.setAnimation(trackIndex, playData.targetName, false);
            this._spine.timeScale = 0;//--停止播放
            this.setCurrentSpineAniData(trackEntry);
            let moveToStartTime = frame * this._secondsPerFrame;
            if (moveToStartTime <= 0) moveToStartTime = 0;
            this._targetTimeForPlayToTimeAndStop = moveToStartTime;
            this._isPlayToTimeAndStop = true;
            this.isPlaying = true;
            this._spine.timeScale = 1;
        }
    }



    public beforeDestroy(): void {
        this.forceToDoBeforeDestroy();
        this.generalAniCompleteCheck = null;
        //--to do something before spine destroy
    }

    public forceToDoBeforeDestroy(): void {
        if (this._spine) {
            this.isPlaying = false;
            //this._spineAniResolvePromise?.();//--如果有使用到promise resolve 20250623
            //this._spineAniResolvePromise = undefined;//--_spineSequencePlay使用的
            this.safeResolveSpinePromise();
            this.safeResolveSpineCallback();
            if (this.particleSystem) {
                this.particleSystem.stopParticle();
            }
            //--在沒有勾選drop after play的選項stopAni方法將不會觸發停止撥放選項
            if (this._clearTracks == CleanTrackType.CURRENT_TRACK) {
                this.cleanCurrentTrack();
            } else {
                this.clearTracks();
            }
            this.resetSpinePoseData();
            if (this._spineSequencePlay) {
                this._spineSequencePlay.resetDataBeforeDestroy();
                this._spineSequencePlay.off(SEQUENCE_EVENTS.FRAME_EVENT, this.onSequencePlayEventHandler);
                this._spineSequencePlay.off(SEQUENCE_EVENTS.COMPLETE, this.onSequencePlayEventHandler);
            }
            this._sequenceResolvePromise?.();//--如果有使用到sequence的promise resolve 20250623
            this._sequenceResolvePromise = null;//--_spineSequencePlay使用的
            this.safeRemoveSequencePlayFrameEventCallBack();
            this.clearKeyFrameEvent();
            this.clearAllMultipleCompleteEvent();
        }
    }

    public resetData(): void {

        this.forceToDoBeforeDestroy();
        this._currentTarget = null;
        this._defaultTarget = null;
        this.tokenID = '';//--單一的識別碼
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
        this.groupID = [];//--會有同一個物件在不同的group裡面(第四軸重複的)
        //this.clearKeyFrameEvent();
    }

    public playAniWithCallBack(callBack: Function, value?: string): void {

        let playData = this.checkSpinePlayData(value);
        const spineCompleteHandler = (): void => {
            this.safeResolveSpineCallback(); // 統一結束處理
            this.generalAniCompleteCheck();
        }

        this._spineAniCallback = () => {
            callBack();
            this._spine.setCompleteListener(null);
            this._spineAniCallback = undefined;
        };


        this.clearTracks();
        this._spine.timeScale = (playData.timeScale) ? playData.timeScale : 1;
        //--儘管是loop=true,但每次都會觸發..
        this._spine.setCompleteListener(null);
        this._spine.setCompleteListener(spineCompleteHandler);
        let trackIndex = (playData.trackIndex) ? playData.trackIndex : 0;
        this.isPlaying = true;
        this._isLoop = playData.loop;
        this._spine.setAnimation(trackIndex, playData.targetName, playData.loop);
    }

    public playAniInPromise(value?: string): Promise<void> {

        let playData = this.checkSpinePlayData(value);
        console.log('playAniInPromise_beginning:', this._spine.node.name, value, playData.targetName, playData);
        this.safeResolveSpinePromise();//--force remove old promise resolve
        return new Promise((resolve) => {

            this._spineAniResolvePromise = () => {
                console.log('playAniInPromise_resolve:', playData.targetName);
                this.generalAniCompleteCheck();
                this.safeResolveSpinePromise(resolve);
            };

            //this.clearTracks();
            this._spine.timeScale = (playData.timeScale) ? playData.timeScale : 1;
            //--儘管是loop=true,但每次都會觸發..
            this._spine.setCompleteListener(null);
            this._spine.setCompleteListener(this._spineAniResolvePromise);
            let trackIndex = (playData.trackIndex) ? playData.trackIndex : 0;
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

    public playSequenceInPromise(value?: string): Promise<void> {
        return new Promise((resolve) => {
            if (this._spineSequencePlay) {
                this._sequenceResolvePromise = resolve;
                this._spineSequencePlay.playSequence(value);
            } else {
                resolve();
            }
        });
    }

    public playSequenceWithCallBack(callBack: (...args: any[]) => void, value?: string): void {
        this._spineSequencePlay?.playSequenceWithCallBack(value, callBack);
    }

    public playSequence(sequenceName?: string): void {
        this._spineSequencePlay?.playSequence(sequenceName);
    }

    public playAniWithAniCtrDef(value: AniCtrlPropDef): void {
        this._spine.timeScale = (value.timeScale) ? value.timeScale : 1;
        let trackIndex = (value.trackIndex) ? value.trackIndex : 0;
        this.isPlaying = true;
        this._isLoop = value.loop;
        this._spine.setCompleteListener(null);
        this._spine.setCompleteListener(this.generalAniCompleteCheck);
        this._spine.setAnimation(trackIndex, value.targetName, value.loop);
    }

    public playAni(value?: string): void {
        let playData = this.checkSpinePlayData(value);
        console.log('playAni>>_check_playData:', this._spine.node.name, playData);
        if (this._spine) {
            this._spine.timeScale = (playData.timeScale) ? playData.timeScale : 1;
            let trackIndex = (playData.trackIndex) ? playData.trackIndex : 0;
            this.isPlaying = true;
            this._isLoop = playData.loop;
            //-this.onAniComplete
            this._spine.setCompleteListener(null);
            this._spine.setCompleteListener(this.generalAniCompleteCheck);
            if (playData.skinName != '') {
                this._spine.node.active = true;
                this.changeSkin(playData.skinName);
            }
            this._spine.setAnimation(trackIndex, playData.targetName, playData.loop);
        }
    }

    //---實驗功能(尚未測試)
    public playMultipleAni(aniNames: string[]): void {
        for (const aniDataId of aniNames) {
            const playData = this.checkSpinePlayData(aniDataId);
            if (this._spine) {
                this._spine.timeScale = (playData.timeScale) ? playData.timeScale : 1;
                const trackIndex = (playData.trackIndex) ? playData.trackIndex : 0;
                this.isPlaying = true;
                this._isLoop = playData.loop;//--這樣不行啦....如果要播的有的要有的不要不就搞笑
                if (playData.useCompleteListen) {
                    //--註冊完成事件
                    const handler = this.getCachedCompleteHandler(aniDataId);
                    this.setMultipleCompleteEvent(aniDataId, handler);
                    this._spine.setCompleteListener(handler);
                }
                this._spine.setAnimation(trackIndex, playData.targetName, playData.loop);
            }
        }
    }

    private checkAndAddKeyFrameEvent = (trackEntry, event) => {
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
    }


    private getSkinFrontEnumIndex(skinName: string): number {
        let skinData = this._spine.skeletonData.getSkinsEnum();
        for (let i in skinData) {
            //console.log('check_skinData', i, skinData[i]);

            if (i == skinName) {
                return skinData[i];
            }
        }

    }

    private setCurrentSpineAniData(trackEntry: sp.spine.TrackEntry): void {
        this._duration = trackEntry.animation.duration;
        this._frames = Math.ceil(this._frameRate * this._duration);
        this._secondsPerFrame = 1 / this._frameRate;
        this._aniStartTime = trackEntry.animationStart;
        this._aniEndTime = trackEntry.animationEnd;
    }

    public getCurrentSpineAniData(): AniCtrlPropDef {
        return this._currentTarget;
    }

    public checkSpinePlayData(targetName: string): AniCtrlPropDef {
        for (let data of this._animationPlayStateList.clipsInfo) {
            if (data.targetName == targetName) {
                this._currentTarget = data;
                return data;
            }
        }
        return this._defaultTarget;
    }

    //---這裡可以把它寫在一個basic class裡面 然後在繼承上來
    public getCustomizeSpineTrackEntry(value: string): AniCtrlPropDef {
        return this._animationPlayStateList.clipsInfo.find(clip => clip.targetName === value);
    }

    //---這裡可以把它寫在一個basic class裡面 然後在繼承上來
    private isDefined<T>(value: T | undefined | null): boolean {
        return value !== undefined && value !== null;
    }

    private cleanBySetEmptyAni(): void {
        this._spine.getState().setEmptyAnimation(0, 0);
        this._spine.setCompleteListener(null);
    }

    public cleanCurrentTrack(trackIndex?: number): void {

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

    public clearTracks(): void {

        this._spine.clearTracks();

        //-https://forum.cocos.org/t/topic/159467/8
        //-這樣清不掉
        this._spine.setCompleteListener(null);

        this.unscheduleAllCallbacks();
    }
}


