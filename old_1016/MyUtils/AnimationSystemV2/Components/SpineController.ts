import { _decorator, CCBoolean, CCString, Component, Enum, EventTarget, Node, sp } from 'cc';
import { IAnimationControl } from '../Definitions/IAnimationControl';
import { ParticleExtension } from './ParticleExtension';
import { AnimationPlayInfo, SpinePlayParams, CleanTrackType, RepeatOption } from '../Definitions/AnimationDataOptions';
import { PlaySelector } from '../Definitions/IPlayOptions';
import { AnimationSelectionResolver } from '../AniTools/AniSelectionResolver';
import { IReelInfo } from '../../BasicGameDataDefinition/BasicGameDataDefinition';
import { FindComponent } from '../../FindComponent';
import { SpineAniPlayInfoList, SpineCtrlPropDef, AnimationStateList, ClearTrackTypeState, AnimationStateType } from './AniStateLists/AnimationPlayStateBase';
import { IStopOptions, StopClearMode } from '../Definitions/IStopOptions';
import { SpineSequencePlay } from './AniStateLists/SpineSequencePlay';
import { SEQUENCE_EVENTS } from './AniStateLists/Events';
import { EVENT_DATA } from '../../EventSystem/EventData';
import { ANI_SYS_EVENTS, AniSysEventData } from './AniEvents/AniSysEvents';
import { IEventDispatcher } from '../../EventSystem/EventDispatcher';

const { ccclass, property } = _decorator;


@ccclass('SpineController')
export class SpineController extends Component implements IAnimationControl {

    slotMachineIndexInfo?: IReelInfo;
    groupID: number[];//--會有同一個物件在不同的group裡面(第四軸重複的)
    isPlaying: boolean;
    keep: boolean;//--不刪除且持續留在場景中
    //--resetData會保留此資料
    @property({ type: SpineAniPlayInfoList, displayName: 'SpineAniPlayInfoList', visible: true, tooltip: '播放資料清單' })
    protected _animationPlayInfoList: SpineAniPlayInfoList = new SpineAniPlayInfoList();
    //--他會依照animationPlayStateList的clipsInfo來決定要播放的動畫
    @property({ type: AnimationStateList, displayName: 'animationStateList', visible: true, tooltip: '狀態控制動畫清單' })
    protected _animationStateList: AnimationStateList = new AnimationStateList();

    @property({ type: CCBoolean, visible: true, tooltip: '中軟的要勾選,不然預設會先clearTracks一次' })
    protected _useDefaultInit: boolean = true;//--是否要使用預設的初始化(中軟美術會設定default的動畫,總部則不會使用)

    @property({ visible: true, tooltip: 'spineFPS' })
    protected _frameRate: number = 30;

    @property({ tooltip: 'prefab(放component的nodeId)的node id' })
    targetNodeId: string = '';//--prefab(放component的nodeId)的node id

    @property({ type: ParticleExtension, displayName: 'particleSystem', visible: true, tooltip: '粒子系統' })
    particleSystem: ParticleExtension;

    @property({ tooltip: '單一識別碼' })
    tokenID: string = '';//--單一的識別碼

    @property({ tooltip: 'prefabKey(用來辨識prefab的)' })
    prefabKey: string = '';//--prefab的key(用來辨識prefab的)

    @property({ tooltip: '回收回到預設狀態,不做動畫本身清除重置<中軟專屬要勾選>' })
    goBackDefaultWithoutDestroy: boolean = false;

    @property({ visible: true, tooltip: '是否要播放完畢後停止' })
    protected _afterPlayDoStop: boolean = true;

    @property({ type: ClearTrackTypeState, visible: true, tooltip: '清除模式(中軟要選擇CURRENT_TRACK)' })
    protected _clearTracks: ClearTrackTypeState = new ClearTrackTypeState();

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
    protected _repeatOption: RepeatOption = { isRepeat: false, count: 0 };//--重複次數
    protected _targetTimeForPlayToTimeAndStop: number;
    protected _isReverse: boolean;
    protected _isPlayToTimeAndStop: boolean;
    protected _isLoop: boolean;
    protected _originSkinData: { [key: string]: sp.spine.Attachment | {} };
    protected _defaultSkin: string = 'default';
    protected _defaultTarget: SpineCtrlPropDef = null;
    protected _currentTarget: SpineCtrlPropDef = null;
    protected _eventTarget: EventTarget;
    protected _mapEvent: Map<string, ((...args: any[]) => void)[]> = new Map();
    protected _mapMultipleCompleteEvent: Map<string, () => void> = new Map();
    private _handlerCacheMap: Map<string, () => void> = new Map(); // cache(確保產生唯一的)
    protected _isListenForKeyFrame: boolean = false;
    protected _spineAniResolvePromise: ((trackEntry?: sp.spine.TrackEntry) => void) | null; // promise resolve 函式
    protected _sequenceResolvePromise: (() => void) | null; // promise resolve 函式
    protected _spineSequencePlayFrameEventCallBack: (value?: any) => void;
    protected _spineAniCallback?: () => void;
    protected generalAniCompleteCheck: (trackEntry?: sp.spine.TrackEntry) => void;
    protected _resolver: AnimationSelectionResolver<any, SpineCtrlPropDef>;
    //protected _currentTarget!: SpineCtrlPropDef;
    //protected _defaultTarget!: SpineCtrlPropDef;
    private _dirtyFirstOnLoad: boolean = false;//---用來判斷是否第一次onLoad

    get spine(): sp.Skeleton {
        return this._spine;
    }

    get animationPlayInfoList(): SpineAniPlayInfoList {
        return this._animationPlayInfoList;
    }

    get defaultTarget(): SpineCtrlPropDef {
        return this._defaultTarget;
    }

    set spineSequencePlayFrameEventCallBack(value: (value?: any) => void) {
        this._spineSequencePlayFrameEventCallBack = value;
    }

    //--用來存放原始的動畫資料reset將會塞回去
    private _originAniData: Map<string, SpineCtrlPropDef> = new Map<string, SpineCtrlPropDef>();


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
        this._repeatOption = { isRepeat: false, count: 0 };
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

        //--是否使用預設的動畫狀態,總部沒有設定預設狀態
        /**
         * 是否使用預設的動畫狀態(總部沒有設定預設狀態)
         * 可是因為中軟的美術會設定default的動畫,所以這邊要有一個開關
         * 在使用預設狀態的情況下,會清除所有的track情況下
         * 因為中軟的美術在清光track的情況下的動畫動作沒有設定預設值阿=..=
         * 所以會爆開
         */
        if (!this._useDefaultInit) {
            this._spine.clearTracks();
        }

        //--_animationPlayStateList不做處理
        if (!this._animationPlayInfoList) {
            this._animationPlayInfoList = new SpineAniPlayInfoList();
            this._animationPlayInfoList.clipsInfo = [];

        } else {

            for (let data of this._animationPlayInfoList.clipsInfo) {
                if (data.useDefault) {
                    this._defaultTarget = data;
                    break;
                }
            }
        }
        //--20251217--存放原始動畫資料
        this.saveOriginAniData(this._originAniData);
        //--建立查找(IPlayOptions)工具與快取表
        this._resolver = new AnimationSelectionResolver(
            () => this._animationStateList?.stateInfo ?? [],
            () => this._animationPlayInfoList?.clipsInfo ?? [],
            (st) => st.getStateKey ? st.getStateKey() : '',//-可省
            // enumToKey：把 Enum 數值轉字串鍵
            (v) => AnimationStateType[v],
            // 可選 logger
            (type, ...args) => console[type](...args)
        );
        this._resolver.rebuildAnimationCaches();//--先建立一次快取表

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

        this.generalAniCompleteCheck = (trackEntry?: sp.spine.TrackEntry) => {
            this.onSpineCompleteHandler(trackEntry);
        };

        //=====給需要的人用,監聽完成load事件=====================
        const spinCtrlEvtData: AniSysEventData = {
            eventName: ANI_SYS_EVENTS.CTRL_LOADED,
            ctrlId: (this.prefabKey) ? this.prefabKey : this.targetNodeId,
            loaded: { message: 'spineCtrl is loaded' }
        }
        this.node.emit(ANI_SYS_EVENTS.CTRL_LOADED, spinCtrlEvtData);

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

    public async testBtnEvent(ev: any, value: PlaySelector): Promise<void> {
        console.log('testBtnEvent:', ev, value);
        this.playAni(AnimationStateType.Loop);
        //await this.playAniInPromise(AnimationStateType.Win);
        //await this.playAniInPromise({ targetName: 'Connect' });
        //await this.playAniInPromise(AnimationStateType.Win);
        console.log();
    }


    public init(): void {

        if (this._spineSequencePlay) {
            this._spineSequencePlay.init();
            this._spineSequencePlay.clearTracksSetting = this._clearTracks.trackType;
            this._spineSequencePlay.sp = this._spine;
            this._spineSequencePlay.on(SEQUENCE_EVENTS.FRAME_EVENT, this.onSequencePlayEventHandler);
            this._spineSequencePlay.on(SEQUENCE_EVENTS.COMPLETE, this.onSequencePlayEventHandler);
        }

        this._resolver?.rebuildAnimationCaches();
        this.ensureDefaultTargetFromList();
    }

    //--存放原始動畫資料
    protected saveOriginAniData(spinePlayInfo: Map<string, SpineCtrlPropDef>): void {

        if (this._animationPlayInfoList.clipsInfo.length === 0) return;

        for (let data of this._animationPlayInfoList.clipsInfo) {
            let playData = new SpineCtrlPropDef();
            playData.targetName = data.targetName;
            if (this.isDefined(data?.timeScale)) {
                playData.timeScale = data.timeScale;
            }

            if (this.isDefined(data?.loop)) {
                playData.loop = data.loop;
            }

            if (this.isDefined(data?.skinName)) {
                playData.skinName = data.skinName;
            }

            if (data.repeatCount !== undefined && data.repeatCount !== null) {
                playData.repeatCount = data.repeatCount;
            }
            spinePlayInfo.set(data.targetName, playData);
        }

    }

    protected ensureDefaultTargetFromList(): void {
        if (this._defaultTarget) return;
        const list = this._animationPlayInfoList?.clipsInfo ?? [];
        this._defaultTarget = (list.find(d => d?.useDefault) ?? list[0]) ?? null;
    }


    //--override it do something after sequence event
    protected onSequencePlayEventHandler = (value: EVENT_DATA) => {

        if (value.eventType == SEQUENCE_EVENTS.COMPLETE) {
            if (this._sequenceResolvePromise) {
                this._sequenceResolvePromise();
                this._sequenceResolvePromise = null;
            }
        } else if (value.eventType == SEQUENCE_EVENTS.FRAME_EVENT) {
            this._spineSequencePlayFrameEventCallBack?.(value);
        }
    }

    /**
     * 將修改的播放參數還原成原本的資料
     * @param playId spine animation playInfo
     */
    protected reSetPlayInfoToOriginData(playId: string): void {

        const originData = this._originAniData.get(playId);
        if (!originData) return;

        const targetData = this._animationPlayInfoList.clipsInfo.find(d => d.targetName === playId);
        if (!targetData) return;

        targetData.timeScale = originData.timeScale;
        targetData.loop = originData.loop;
        targetData.repeatCount = originData.repeatCount;
    }


    protected onSpineCompleteHandler(trackEntry?: sp.spine.TrackEntry): void {
        if (!this._isLoop) {
            this.onAniComplete();
            let currentAniId: string = '';
            if (trackEntry == undefined || trackEntry == null) {
                currentAniId = this._currentTarget.targetName;
            } else {
                currentAniId = trackEntry.animation.name;
            }
            this.reSetPlayInfoToOriginData(currentAniId);
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

        //let playData = this.getCustomizeSpineTrackEntry(value.targetName);
        let playData = this._resolver.resolveProp(value.targetName);
        let targetData = value as SpinePlayParams;

        if (!playData) {
            playData = new SpineCtrlPropDef();
            playData.targetName = value.targetName;
            this._animationPlayInfoList.clipsInfo.push(playData);
            this._resolver.rebuildAnimationCaches();
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

        //--功能待實作...
        if (targetData.repeatCount !== undefined && targetData.repeatCount !== null) {
            playData.repeatCount = targetData.repeatCount;
        }

        this._defaultTarget = playData;

    }


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


    public resetSpinePoseData(): void {
        //return;
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

    public reversePlay(value: PlaySelector): void {

        if (this._spine) {
            let playData = this.resolveTargetName(value);
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


    public gotoAndPlayByTime(value: PlaySelector, time: number): void {

        if (this._spine) {
            let playData = this.resolveTargetName(value);
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
    public gotoAndPlayByFrame(value: PlaySelector, frame: number): void {

        if (this._spine) {
            let playData = this.resolveTargetName(value);
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

    /**
     * 20251020新增方法
     * @param value 取得播放的動畫資料key
     * @param time 移動到某個時間點開始播放
     */
    public changePlayTime(time: number, value?: PlaySelector): void {

        if (!this.isPlaying) return;
        if (this._spine) {

            const entry = this._spine.getCurrent(this._currentTarget.trackIndex);
            //console.log('changePlayTime_entry:', entry);
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
    public changePlayInfo(value: PlaySelector, t: number, infoTarget?: SpineCtrlPropDef): void {

        if (!this.isPlaying) return;
        if (!this._spine) return;
        const aniCtrlInfo = this.getAniPlayDataByPlaySelector(value);
        if (!aniCtrlInfo) return;
        const ani = this._spine.findAnimation(aniCtrlInfo.targetName);
        if (!ani) return;
        const duration = ani.duration;
        const speed = duration / t;
        aniCtrlInfo.timeScale = speed;
        //---之後再看要改什麼
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
    public gotoPlayLastFrame(value?: PlaySelector): void {

        if (!this.isPlaying) return;
        if (this._spine) {
            const EPS = 1e-6;//--避免最後一個frame沒辦法正確sample
            const entry = this._spine.getCurrent(this._currentTarget.trackIndex);
            //console.log('gotoPlayLastFrame_entry:', entry, entry.animation.duration, entry.animationEnd);
            const spEnd = entry.animation.duration;
            //const spStart = Math.max(0, spEnd - 1);
            //const spFinalTime = Math.max(0, Math.min(spStart, spEnd - EPS));
            const spFinalTime = spEnd - 0.32;//--0.32是倒數第二格
            entry.trackTime = spFinalTime;
            this.spine.updateAnimation(0);
        }
    }

    //-移動到某個時間點並停止(這邊的停止是暫停..而非cleanTracks)
    public gotoAndStopByTime(value: PlaySelector, time: number): void {

        if (this._spine) {
            let playData = this.resolveTargetName(value);
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
    public gotoAndStopByFrame(value: PlaySelector, frame: number): void {

        if (this._spine) {
            let playData = this.resolveTargetName(value);
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

    public playToTimeAndStop(value: PlaySelector, time: number): void {

        if (this._spine) {
            let playData = this.resolveTargetName(value);
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

    public playToFrameAndStop(value: PlaySelector, frame: number): void {

        if (this._spine) {
            let playData = this.resolveTargetName(value);
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


    /**
     * <這邊不會掛上監聽就單純的for中軟美術切回default的動畫狀態>
     * 播放動畫預設狀態,有動畫播放
     */
    public goBackToDefault(flag: boolean = true): void {

        const playData = this.resolveTargetName(AnimationStateType.Default);
        if (this._spine) {
            if (flag) {
                this.forceSafeResolveSpinePromise();
                this.forceSafeResolveSpineCallback();
            }
            this.isPlaying = true;
            this._spine.timeScale = (playData.timeScale) ? playData.timeScale : 1;
            let trackIndex = (playData.trackIndex) ? playData.trackIndex : 0;
            this.isPlaying = true;
            this._isLoop = playData.loop;
            if (playData.skinName != '') {
                this._spine.node.active = true;
                this.changeSkin(playData.skinName);
            }
            this._spine.setAnimation(trackIndex, playData.targetName, playData.loop);
        }
    }
    //--強斷定spine的promise resolve
    public forceSafeResolveSpinePromise(): void {
        this.safeResolveSpinePromise();
    }
    //--強斷定spine的call back
    public forceSafeResolveSpineCallback(): void {
        this.safeResolveSpineCallback();
    }

    //--to do something before spine destroy
    public beforeDestroy(): void {
        this.forceToDoBeforeDestroy();
        this.generalAniCompleteCheck = null;
    }

    public forceToDoBeforeDestroy(): void {

        if (this._spine) {
            this.isPlaying = false;
            this.safeResolveSpinePromise();
            this.safeResolveSpineCallback();
            if (this.particleSystem) {
                this.particleSystem.stopParticle();
            }
            //--在沒有勾選drop after play的選項stopAni方法將不會觸發停止撥放選項
            if (this.goBackDefaultWithoutDestroy) {
                this.goBackToDefault(false);//--回到預設狀態
            } else {
                if (this._clearTracks.trackType == CleanTrackType.CURRENT_TRACK) {
                    this.cleanCurrentTrack();
                } else {
                    this.clearTracks();
                }
                this.resetSpinePoseData();
            }

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
        this.reSetPlayInfoToOriginData(this._currentTarget?.targetName);
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
        this.groupID = [];
    }

    public playAniWithCallBack(callBack: Function, backDefault: boolean = false, value?: PlaySelector): void {

        let playData = this.resolveTargetName(value);
        if (!playData) {
            console.warn(`SpineCtrl playAniWithCallBack can't find playData for value:${value}`);
            return;
        }

        const tempParams = {
            targetName: playData.targetName,
            timeScale: playData.timeScale ?? 1,
            loop: playData.loop,
            trackIndex: playData.trackIndex ?? 0,
            skinName: playData.skinName ?? ''
        };


        const spineCompleteHandler = (trackEntry: sp.spine.TrackEntry): void => {
            this.safeResolveSpineCallback(); // 統一結束處理
            this.generalAniCompleteCheck(trackEntry);
        }

        this._spineAniCallback = () => {
            callBack();
            this._spine.setCompleteListener(null);
            this._spineAniCallback = undefined;
        };
        this.clearTracks();
        this._spine.timeScale = (tempParams.timeScale) ? tempParams.timeScale : 1;
        //--儘管是loop=true,但每次都會觸發..
        this._spine.setCompleteListener(null);
        this._spine.setCompleteListener(spineCompleteHandler);
        let trackIndex = (tempParams.trackIndex) ? tempParams.trackIndex : 0;
        this.isPlaying = true;
        this._isLoop = tempParams.loop;
        this._spine.setAnimation(trackIndex, tempParams.targetName, tempParams.loop);
    }

    public playAniInPromise(value?: PlaySelector): Promise<void> {


        const playData = this.resolveTargetName(value);
        if (!playData) {
            return Promise.resolve();
        }

        // 局部變數快照：提取本次播放所需的「關鍵參數」
        // 這樣即使後面執行了 reSetPlayInfoToOriginData，這組 temp 變數也不會變
        const tempParams = {
            targetName: playData.targetName,
            timeScale: playData.timeScale ?? 1,
            loop: playData.loop,
            trackIndex: playData.trackIndex ?? 0,
            skinName: playData.skinName ?? ''
        };

        // 觸發 reSetPlayInfoToOriginData，將 clipsInfo 裡的數值還原成預設
        this.safeResolveSpinePromise();

        return new Promise((resolve) => {
            this._spineAniResolvePromise = (trackEntry?: sp.spine.TrackEntry) => {
                this.generalAniCompleteCheck(trackEntry);
                this.safeResolveSpinePromise(resolve);
            };
            this._spine.timeScale = (tempParams.timeScale) ? tempParams.timeScale : 1;
            //--儘管是loop=true,但每次都會觸發..
            this._spine.setCompleteListener(null);
            this._spine.setCompleteListener(this._spineAniResolvePromise);
            let trackIndex = (tempParams.trackIndex) ? tempParams.trackIndex : 0;
            this.isPlaying = true;
            this._isLoop = tempParams.loop;
            if (tempParams.skinName != '') {
                this._spine.node.active = true;
                this.changeSkin(tempParams.skinName);
            }
            this._spine.setAnimation(trackIndex, tempParams.targetName, tempParams.loop);
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

    public playAniWithAniCtrDef(value: SpineCtrlPropDef): void {
        this._spine.timeScale = (value.timeScale) ? value.timeScale : 1;
        let trackIndex = (value.trackIndex) ? value.trackIndex : 0;
        this.isPlaying = true;
        this._isLoop = value.loop;
        this._spine.setCompleteListener(null);
        this._spine.setCompleteListener(this.generalAniCompleteCheck);
        this._spine.setAnimation(trackIndex, value.targetName, value.loop);
    }

    public playAni(value?: PlaySelector): void {

        const playData = this.resolveTargetName(value);
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

    public getCurrentSpineAniData(): SpineCtrlPropDef {
        return this._currentTarget;
    }

    //--20251011-新增直接查詢播放資料的功能(他不會改變當前播放狀態)
    public peakAniDataInfo(value: PlaySelector): AnimationPlayInfo {
        return this._resolver?.resolveProp(value);
    }


    protected resolveTargetName(sel?: PlaySelector): SpineCtrlPropDef {

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

    public getAniPlayDataByPlaySelector(value: PlaySelector): SpineCtrlPropDef {

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
    }









    //---這裡可以把它寫在一個basic class裡面 然後在繼承上來
    private isDefined<T>(value: T | undefined | null): boolean {
        return value !== undefined && value !== null;
    }

    //====================停止/清除系列============================================================================

    private mapCleanTrackTypeToMode(t: CleanTrackType): StopClearMode {
        switch (t) {
            case CleanTrackType.CURRENT_TRACK:
                return StopClearMode.CURRENT;
            case CleanTrackType.EMPTY_ANI:
                return StopClearMode.EMPTY;
            case CleanTrackType.All_TRACKS:
            default: return StopClearMode.ALL;
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
    private applyClearMode(mode: StopClearMode): void {
        if (!this._spine) return;
        if (mode === StopClearMode.NONE) return;

        if (mode === StopClearMode.CURRENT) {
            this.cleanCurrentTrack();
        } else if (mode === StopClearMode.ALL) {
            this.clearTracks();
        } else if (mode === StopClearMode.EMPTY) {
            this.cleanBySetEmptyAni();
        }
    }

    public stopWith(opt: IStopOptions = {}): void {
        if (!this._spine) return;
        // 預設選項
        const stopParticles = opt.stopParticles ?? true;

        // 先關狀態與外部效果
        this.isPlaying = false;
        if (stopParticles && this.particleSystem) {
            this.particleSystem.stopParticle();
        }

        // 可選：收尾一次性 callback / promises
        if (opt.resolveCallback) {
            this.safeResolveSpineCallback();
        }
        if (opt.resolvePromises) {

            this.safeResolveSpinePromise();
            this._sequenceResolvePromise?.();
            this._sequenceResolvePromise = null;

        } else {
            this.reSetPlayInfoToOriginData(this._currentTarget.targetName);
        }


        // 清理策略
        let mode: StopClearMode = StopClearMode.NONE;
        if (opt.overrideAfterPlayFlag) {
            // 強制忽略 _afterPlayDoStop
            mode = opt.clear ?? this.mapCleanTrackTypeToMode(this._clearTracks.trackType);
        } else {
            // 沿用<僅當 _afterPlayDoStop=true 時才清理>..自動放給他播不管他
            if (this._afterPlayDoStop) {
                mode = this.mapCleanTrackTypeToMode(this._clearTracks.trackType);
            } else {
                mode = opt.clear ?? StopClearMode.NONE;
            }
        }

        // 執行清理
        this.applyClearMode(mode);

        // 視需要回到 setup pose
        if (opt.resetPose) {
            this.resetSpinePoseData();
        }
    }

    //--播完就強制銷毀回收
    public stopAndRecycle(): void {
        this.forceToDoBeforeDestroy();
    }


    /**
     * 非常確定當下就是要立刻馬上停止,不管動畫是哪一種
     * resolvePromises/resolveCallback/resetPose
     * 都會強制執行接管後續收尾動作
     */
    public stopNow(): void {
        this.stopWith({
            overrideAfterPlayFlag: true,
            clear: StopClearMode.CURRENT,
            resolvePromises: true,
            resolveCallback: true,
            resetPose: true,
        });
    }

    public stopAni(): void {
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
    }

    //---強制中止promise動畫(ex:表演到一半的時候直接停止進行下面的動作(中斷輪播之類的))
    public stopPromiseAni(): void {
        this.stopWith({
            overrideAfterPlayFlag: true,//--略過_afterPlayDoStop
            clear: this.mapCleanTrackTypeToMode(this._clearTracks.trackType),
            resolvePromises: true,
            resolveCallback: true,
            resetPose: true,
        });
        //--old
        //this.stopAni();
        //this.safeResolveSpinePromise();
    }

    public forceToStopAni(): void {

        this.stopWith({
            overrideAfterPlayFlag: true,
            clear: StopClearMode.CURRENT,
            resolvePromises: true,
            resolveCallback: true,
            resetPose: true,
        });
        /*
        if (this._spine) {
            this.cleanCurrentTrack();
            this.isPlaying = false;
        }*/
    }

    public forceToStopAniByEmpty(): void {
        this.stopWith({
            overrideAfterPlayFlag: true,
            clear: StopClearMode.EMPTY,
            resolvePromises: true,
            resolveCallback: true,
            resetPose: true,
        });
        /*
        if (this._spine) {
            this.cleanBySetEmptyAni();
            this.safeResolveSpinePromise();
            this.isPlaying = false;
        }*/
    }

    public onAniComplete(): void {

        this.stopWith({
            overrideAfterPlayFlag: false,
            // 與原本行為一致：不動 promise/callback、不停粒子、不重置 Pose
            resolvePromises: false,
            resolveCallback: false,
            stopParticles: false,
            resetPose: false,
        });
    }

    public cleanBySetEmptyAni(): void {
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

    public onObjInstance(): void {

    }
    //-不能用onDestroy這個字component拿去用了
    public onAfterDestroy(): void {

    }


}


